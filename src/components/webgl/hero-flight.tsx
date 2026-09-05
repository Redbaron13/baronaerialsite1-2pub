import { Suspense, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line, useTexture } from "@react-three/drei";
import { CatmullRomCurve3, SRGBColorSpace, Vector3, type Group } from "three";
import { Drone } from "@/components/webgl/drone";
import { SceneCanvas } from "@/components/webgl/scene-canvas";

export type SurveyPatternId = "nadir" | "cross" | "oblique" | "flown";

function lawnmower(rows: number, y: number) {
  const pts: Vector3[] = [];
  const x0 = -2.15;
  const x1 = 2.15;
  const z0 = -2.05;
  const z1 = 2.05;
  for (let i = 0; i < rows; i++) {
    const z = z0 + (i / (rows - 1)) * (z1 - z0);
    if (i % 2 === 0) pts.push(new Vector3(x0, y, z), new Vector3(x1, y, z));
    else pts.push(new Vector3(x1, y + 0.04, z), new Vector3(x0, y + 0.04, z));
  }
  return pts;
}

function makeCurve(id: SurveyPatternId) {
  if (id === "nadir") return new CatmullRomCurve3(lawnmower(7, 1.15), false, "catmullrom", 0.01);
  if (id === "cross") {
    const a = lawnmower(6, 1.12);
    const b: Vector3[] = [];
    const z0 = -2.05;
    const z1 = 2.05;
    const x0 = -2.15;
    const x1 = 2.15;
    for (let i = 0; i < 6; i++) {
      const x = x0 + (i / 5) * (x1 - x0);
      if (i % 2 === 0) b.push(new Vector3(x, 1.28, z0), new Vector3(x, 1.28, z1));
      else b.push(new Vector3(x, 1.32, z1), new Vector3(x, 1.32, z0));
    }
    return new CatmullRomCurve3([...a, ...b], false, "catmullrom", 0.01);
  }
  if (id === "oblique") {
    const pts: Vector3[] = [];
    for (let i = 0; i <= 48; i++) {
      const t = (i / 48) * Math.PI * 2;
      const r = 2.05 + 0.15 * Math.sin(t * 3);
      pts.push(new Vector3(Math.cos(t) * r, 1.05 + 0.22 * Math.sin(t * 2), Math.sin(t) * r * 0.92));
    }
    return new CatmullRomCurve3(pts, true, "catmullrom", 0.04);
  }
  const pts: Vector3[] = [];
  for (let i = 0; i <= 36; i++) {
    const t = (i / 36) * Math.PI * 2;
    const r = 1.55 + 0.55 * (i % 3 === 0 ? 1 : 0.35);
    const y = 0.95 + 0.35 * Math.abs(Math.sin(t * 2));
    pts.push(new Vector3(Math.cos(t) * r * 1.05, y, Math.sin(t) * r * 0.9));
  }
  return new CatmullRomCurve3(pts, true, "catmullrom", 0.06);
}

function Ground({ src }: { src: string }) {
  const tex = useTexture(src);
  tex.colorSpace = SRGBColorSpace;
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <planeGeometry args={[5.2, 5.2]} />
      <meshStandardMaterial map={tex} roughness={0.92} metalness={0.04} />
    </mesh>
  );
}

function SurveyWorld({ pattern, ground }: { pattern: SurveyPatternId; ground: string }) {
  const curve = useMemo(() => makeCurve(pattern), [pattern]);
  const pathPts = useMemo(
    () => curve.getPoints(220).map((p) => p.toArray() as [number, number, number]),
    [curve],
  );
  const drone = useRef<Group>(null);
  const t = useRef(0);

  useFrame((state, delta) => {
    t.current = (t.current + Math.min(delta, 0.05) * 0.05) % 1;
    const p = curve.getPointAt(t.current);
    const tan = curve.getTangentAt(t.current);
    const craft = drone.current;
    if (craft) {
      craft.position.copy(p);
      craft.lookAt(p.clone().add(tan));
      craft.rotateY(Math.PI);
    }
    const px = state.pointer.x * 0.45;
    const py = state.pointer.y * 0.25;
    state.camera.position.x = 0.15 + px;
    state.camera.position.y = 3.4 + py * 0.35;
    state.camera.position.z = 5.6;
    state.camera.lookAt(0, 0.2, 0);
  });

  return (
    <>
      <color attach="background" args={["#0a0e0a"]} />
      <hemisphereLight args={["#e7ecdf", "#0a0e0a", 0.85]} />
      <directionalLight position={[4, 7, 3]} intensity={1.15} color="#f3f6f1" />
      <Suspense fallback={null}>
        <Ground src={ground} />
      </Suspense>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <ringGeometry args={[2.55, 2.62, 64]} />
        <meshBasicMaterial color="#1cc24d" transparent opacity={0.35} />
      </mesh>
      <Line points={pathPts} color="#1cc24d" lineWidth={1.6} transparent opacity={0.92} />
      <group ref={drone}>
        <Drone scale={0.72} />
      </group>
    </>
  );
}

export function SurveyCanvas({
  pattern,
  ground = "/media/kiji-ortho.webp",
  className = "absolute inset-0 size-full",
}: {
  pattern: SurveyPatternId;
  ground?: string;
  className?: string;
}) {
  return (
    <SceneCanvas
      className={className}
      camera={{ position: [0.15, 3.4, 5.6], fov: 38, near: 0.1, far: 40 }}
      interactive
    >
      <SurveyWorld pattern={pattern} ground={ground} />
    </SceneCanvas>
  );
}

/** @deprecated kept for any leftover import — use SurveyCanvas */
export function HeroFlight() {
  return <SurveyCanvas pattern="nadir" />;
}