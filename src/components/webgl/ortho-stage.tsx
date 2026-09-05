import { Suspense, useMemo, useState } from "react";
import { OrbitControls, useTexture } from "@react-three/drei";
import {
  CanvasTexture,
  ClampToEdgeWrapping,
  LinearFilter,
  LinearSRGBColorSpace,
  SRGBColorSpace,
  type Texture,
} from "three";
import { SceneCanvas } from "@/components/webgl/scene-canvas";

const ORTHO_ASPECT = 1086 / 1304;
const PLANE_DEPTH = 2.35;
const PLANE_WIDTH = PLANE_DEPTH * ORTHO_ASPECT;

function heatmapToHeight(source: Texture): Texture {
  try {
    const img = source.image as CanvasImageSource & { width?: number; height?: number };
    if (typeof document === "undefined" || !img) return source;
    const w = Number(img.width) || 512;
    const h = Number(img.height) || 512;
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) return source;
    ctx.drawImage(img, 0, 0, w, h);
    const data = ctx.getImageData(0, 0, w, h);
    const px = data.data;
    for (let i = 0; i < px.length; i += 4) {
      const r = px[i] ?? 0;
      const g = px[i + 1] ?? 0;
      const b = px[i + 2] ?? 0;
      const height = Math.max(0, Math.min(255, r * 0.72 + g * 0.22 - b * 0.18 + 32));
      px[i] = height;
      px[i + 1] = height;
      px[i + 2] = height;
    }
    ctx.putImageData(data, 0, 0);
    const tex = new CanvasTexture(canvas);
    tex.colorSpace = LinearSRGBColorSpace;
    tex.wrapS = ClampToEdgeWrapping;
    tex.wrapT = ClampToEdgeWrapping;
    tex.minFilter = LinearFilter;
    tex.magFilter = LinearFilter;
    tex.needsUpdate = true;
    return tex;
  } catch {
    return source;
  }
}

function Terrain({ colorMap, elevMap }: { colorMap: string; elevMap?: string }) {
  const color = useTexture(colorMap);
  const elev = useTexture(elevMap ?? colorMap);
  color.colorSpace = SRGBColorSpace;
  color.anisotropy = 8;
  color.needsUpdate = true;

  const height = useMemo(() => heatmapToHeight(elev), [elev]);

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow castShadow>
        <planeGeometry args={[PLANE_WIDTH, PLANE_DEPTH, 160, 160]} />
        <meshStandardMaterial
          map={color}
          displacementMap={height}
          displacementScale={0.22}
          displacementBias={-0.02}
          roughness={0.92}
          metalness={0.04}
        />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.04, 0]}>
        <planeGeometry args={[PLANE_WIDTH + 0.08, PLANE_DEPTH + 0.08]} />
        <meshStandardMaterial color="#121512" roughness={0.7} metalness={0.15} />
      </mesh>
    </group>
  );
}

function Rig() {
  const [auto, setAuto] = useState(true);
  return (
    <OrbitControls
      makeDefault
      enableDamping
      dampingFactor={0.08}
      enablePan
      panSpeed={0.55}
      rotateSpeed={0.72}
      zoomSpeed={0.85}
      minDistance={1.35}
      maxDistance={6.5}
      minPolarAngle={0.18}
      maxPolarAngle={Math.PI / 2.08}
      autoRotate={auto}
      autoRotateSpeed={0.55}
      onStart={() => setAuto(false)}
    />
  );
}

export function OrthoStage({
  colorMap,
  elevMap,
  className = "aspect-[4/3]",
}: {
  colorMap: string;
  elevMap?: string;
  className?: string;
}) {
  return (
    <div className={`relative isolate ${className}`}>
      <SceneCanvas
        className="absolute inset-0 size-full cursor-grab active:cursor-grabbing"
        camera={{ position: [1.55, 1.85, 2.15], fov: 40, near: 0.08, far: 24 }}
        interactive
        fallback={<img src={colorMap} alt="Orthomosaic of Kuzuri Kijiji, East Orange" className="size-full object-contain bg-ink" />}
      >
        <color attach="background" args={["#0a0e0a"]} />
        <hemisphereLight args={["#e8eee4", "#1a2218", 0.85]} />
        <directionalLight position={[2.4, 4.2, 1.6]} intensity={1.35} />
        <directionalLight position={[-2, 1.4, -2]} intensity={0.35} />
        <Suspense fallback={null}>
          <Terrain colorMap={colorMap} elevMap={elevMap} />
        </Suspense>
        <Rig />
      </SceneCanvas>
      <p className="pointer-events-none absolute bottom-3 left-3 rounded-sm bg-ink/75 px-2 py-1 font-display text-[0.65rem] font-semibold tracking-[0.14em] text-green uppercase">
        Drag to orbit · scroll to zoom
      </p>
    </div>
  );
}
