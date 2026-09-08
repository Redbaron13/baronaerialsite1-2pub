import { useEffect, useMemo, useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {
  BufferGeometry,
  Float32BufferAttribute,
  MathUtils,
  SRGBColorSpace,
  TextureLoader,
  Vector3,
  type Group,
  type MeshStandardMaterial,
} from "three";
import { Drone } from "./drone";
import { SceneCanvas } from "./scene-canvas";
import { Plinth, StudioLights } from "./studio-primitives";
export type SurveyPatternId = "nadir" | "cross" | "oblique" | "flown";
/** Distance parameterization keeps the aircraft speed independent of leg length. */
export function capturePath(id: SurveyPatternId) {
  const points: Vector3[] = [];
  const rows = (cross = false) => {
    for (let i = 0; i < 7; i++) {
      const z = -1.95 + i * 0.65;
      const a = i % 2 ? -1.45 : 1.45;
      points.push(
        cross ? new Vector3(z * 0.74, 1.2, a * 1.34) : new Vector3(a, 1.2, z),
        cross ? new Vector3(z * 0.74, 1.2, -a * 1.34) : new Vector3(-a, 1.2, z),
      );
    }
  };
  if (id === "nadir" || id === "cross") {
    rows();
    if (id === "cross") rows(true);
  } else {
    for (let i = 0; i <= 96; i++) {
      const t = (i / 96) * Math.PI * 2;
      points.push(new Vector3(Math.cos(t) * 1.7, 1.2, Math.sin(t) * 2.1));
    }
  }
  const lengths = [0];
  for (let i = 1; i < points.length; i++)
    lengths.push(lengths[i - 1] + points[i].distanceTo(points[i - 1]));
  const total = lengths[lengths.length - 1];
  const out = new Vector3();
  const at = (t: number, target: Vector3) => {
    const d = MathUtils.clamp(t, 0, 1) * total;
    let i = 1;
    while (i < lengths.length - 1 && lengths[i] < d) i++;
    return target
      .copy(points[i - 1])
      .lerp(points[i], (d - lengths[i - 1]) / (lengths[i] - lengths[i - 1]));
  };
  const samples = Array.from({ length: 401 }, (_, i) => at(i / 400, out).clone());
  return { at, samples };
}
function CaptureWorld({
  pattern,
  ground,
  playing,
  progress,
  onProgress,
  altitude,
}: {
  pattern: SurveyPatternId;
  ground: string;
  playing: boolean;
  progress: number;
  onProgress: (v: number) => void;
  altitude: number;
}) {
  const path = useMemo(() => capturePath(pattern), [pattern]);
  const tex = useLoader(TextureLoader, ground, (loader) => loader.setCrossOrigin("anonymous"));
  tex.colorSpace = SRGBColorSpace;
  const craft = useRef<Group>(null),
    footprints = useRef<Group>(null);
  const material = useRef<MeshStandardMaterial>(null);
  const t = useRef(progress);
  const report = useRef(0);
  const target = useMemo(() => new Vector3(), []);
  const ahead = useMemo(() => new Vector3(), []);
  const geometry = useMemo(() => {
    const g = new BufferGeometry();
    g.setAttribute(
      "position",
      new Float32BufferAttribute(
        path.samples
          .slice(1)
          .flatMap((p, i) => [path.samples[i].x, 0.026, path.samples[i].z, p.x, 0.026, p.z]),
        3,
      ),
    );
    g.setDrawRange(0, 0);
    return g;
  }, [path]);
  useEffect(() => () => geometry.dispose(), [geometry]);
  useEffect(() => {
    t.current = progress;
  }, [progress]);
  useFrame((_, dt) => {
    const d = Math.min(dt, 0.05);
    if (playing) t.current = (t.current + d / 28) % 1;
    const flight = Math.min(t.current / 0.84, 1);
    path.at(flight, target);
    path.at(Math.min(1, flight + 0.005), ahead);
    if (craft.current) {
      craft.current.position.set(target.x, altitude / 150, target.z);
      if (flight < 0.999)
        craft.current.rotation.y = Math.atan2(-(ahead.x - target.x), -(ahead.z - target.z));
    }
    geometry.setDrawRange(0, Math.max(2, Math.floor(flight * 400) * 2));
    footprints.current?.children.forEach((child, i) => {
      child.visible = i / 55 <= flight;
    });
    if (material.current) material.current.opacity = MathUtils.smoothstep(t.current, 0.8, 0.96);
    report.current += d;
    if (report.current > 0.2) {
      onProgress(t.current);
      report.current = 0;
    }
  });
  return (
    <>
      <StudioLights />
      <Plinth width={3.9} depth={4.8} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[3.6, 4.32]} />
        <meshStandardMaterial color="#cdd3c2" roughness={0.9} />
      </mesh>
      <gridHelper args={[4.3, 14, "#9ea997", "#bbc5b0"]} position={[0, 0.008, 0]} />
      <group ref={footprints}>
        {Array.from({ length: 56 }, (_, i) => {
          const p = path.samples[Math.round((i / 55) * 400)];
          return (
            <mesh
              key={i}
              rotation={[-Math.PI / 2, 0, 0]}
              position={[p.x, 0.015 + i * 0.00002, p.z]}
            >
              <planeGeometry args={[0.95, 1.08]} />
              <meshBasicMaterial color="#49827d" transparent opacity={0.17} depthWrite={false} />
            </mesh>
          );
        })}
      </group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.023, 0]}>
        <planeGeometry args={[3.6, 4.32]} />
        <meshStandardMaterial
          ref={material}
          map={tex}
          transparent
          opacity={0}
          roughness={0.85}
          depthWrite={false}
        />
      </mesh>
      <lineSegments geometry={geometry}>
        <lineBasicMaterial color="#385f55" />
      </lineSegments>
      <group ref={craft}>
        <Drone scale={0.55} />
        <mesh rotation={[Math.PI, 0, 0]} position={[0, -0.45, 0]}>
          <coneGeometry args={[0.42, 0.7, 4, 1, true]} />
          <meshBasicMaterial color="#f0c994" transparent opacity={0.08} depthWrite={false} />
        </mesh>
      </group>
      <OrbitControls makeDefault enabled={false} target={[0, 0.4, 0]} enableZoom={false} />
    </>
  );
}
export function SurveyCanvas({
  pattern,
  ground = "/media/kiji-ortho.webp",
  className,
}: {
  pattern: SurveyPatternId;
  ground?: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [seek, setSeek] = useState(0);
  const [altitude, setAltitude] = useState(180);
  const [aircraft, setAircraft] = useState(false);
  const [exploded, setExploded] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const update = (v: number) => setProgress(v);
  return (
    <section
      className={`technical-studio capture-study ${className ?? ""}`}
      aria-label="Photogrammetry capture study"
    >
      <header className="studio-header">
        <div>
          <p className="studio-eyebrow">CAPTURE STUDY / 03</p>
          <h4>Every frame builds the picture.</h4>
        </div>
        <span className="studio-stamp">PRECISION IN MOTION</span>
      </header>
      <div className="studio-toolbar">
        <button
          type="button"
          className="studio-button"
          aria-pressed={!aircraft}
          onClick={() => setAircraft(false)}
        >
          Capture sequence
        </button>
        <button
          type="button"
          className="studio-button"
          aria-pressed={aircraft}
          onClick={() => setAircraft(true)}
        >
          Aircraft anatomy
        </button>
        {aircraft && (
          <>
            <button
              type="button"
              className="studio-button"
              aria-pressed={exploded}
              onClick={() => setExploded(!exploded)}
            >
              {exploded ? "Reassemble" : "Explode assembly"}
            </button>
            <button
              type="button"
              className="studio-button"
              aria-pressed={interactive}
              onClick={() => setInteractive(!interactive)}
            >
              {interactive ? "Finish exploring" : "Explore 3D"}
            </button>
          </>
        )}
      </div>
      <div className="studio-viewport">
        {aircraft ? (
          <SceneCanvas
            key="aircraft"
            interactive={interactive}
            camera={{ position: [3.2, 2.7, 3.9], fov: 35, near: 0.1, far: 30 }}
          >
            <StudioLights />
            <Plinth width={2.4} depth={2.4} />
            <group position={[0, 1.05, 0]} rotation={[0, 0.3, 0]}>
              <Drone scale={1.5} exploded={exploded ? 1 : 0} rotorsBlur={false} />
            </group>
            <OrbitControls
              enabled={interactive}
              makeDefault
              enableZoom={false}
              enablePan={false}
              target={[0, 1.0, 0]}
              minPolarAngle={0.1}
              maxPolarAngle={Math.PI / 2.1}
            />
          </SceneCanvas>
        ) : (
          <SceneCanvas
            key={pattern}
            camera={{ position: [3.8, 4.8, 5.5], fov: 37, near: 0.1, far: 40 }}
          >
            <CaptureWorld
              pattern={pattern}
              ground={ground}
              playing={playing}
              progress={seek}
              onProgress={update}
              altitude={altitude}
            />
          </SceneCanvas>
        )}
        <span className="studio-view-note">
          {aircraft
            ? "Airframe · propulsion · flight controller · stabilized camera"
            : "Illustrative path · coverage accumulates from overlapping frames"}
        </span>
      </div>
      {!aircraft && (
        <div className="studio-controls">
          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              className="studio-button"
              aria-pressed={!playing}
              onClick={() => setPlaying(!playing)}
            >
              {playing ? "Pause capture" : "Play capture"}
            </button>
            <span className="text-xs">
              {progress < 0.84
                ? "01 / Overlapping capture"
                : progress < 0.96
                  ? "02 / Alignment + processing"
                  : "03 / Orthomosaic"}
            </span>
          </div>
          <input
            className="studio-range"
            aria-label="Capture timeline"
            type="range"
            min="0"
            max="1"
            step=".001"
            value={progress}
            onChange={(e) => {
              setPlaying(false);
              setProgress(Number(e.target.value));
              setSeek(Number(e.target.value));
            }}
          />
          <label>
            Illustrative flight altitude <strong>{altitude} ft</strong>
          </label>
          <input
            className="studio-range"
            aria-label="Illustrative flight altitude"
            type="range"
            min="90"
            max="300"
            step="10"
            value={altitude}
            onChange={(e) => setAltitude(Number(e.target.value))}
          />
          <p>
            At {altitude} ft, relative ground sampling distance is {(altitude / 180).toFixed(2)}×
            the 180 ft reference. Actual detail depends on the camera, overlap and processing.
          </p>
        </div>
      )}
      <footer className="studio-source">
        Engineering illustration, with a real Kuzuri Kijiji orthomosaic at completion. Flight paths,
        frame count, aircraft and timing are illustrative; no actual mission telemetry or aircraft
        specification is implied.
      </footer>
    </section>
  );
}
