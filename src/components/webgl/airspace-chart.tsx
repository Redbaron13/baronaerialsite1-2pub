import { useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { DoubleSide, type Group, type Mesh } from "three";
import { SceneCanvas } from "@/components/webgl/scene-canvas";
import { cn } from "@/lib/utils";

/** Schematic UASFM altitudes (ft AGL) — teaching grid, not operational. North is +Z. */
const GRID: number[][] = [
  [400, 400, 200, 200, 100, 50, 0, 0],
  [400, 200, 200, 100, 50, 0, 0, 0],
  [400, 200, 100, 50, 0, 0, 0, 0],
  [200, 100, 50, 0, 0, 0, 0, 0],
  [200, 100, 0, 0, 0, 0, 0, 0],
  [100, 50, 0, 0, 0, 0, 0, 0],
  [200, 100, 50, 0, 0, 0, 0, 0],
];

const LABELS: { r: number; c: number; text: string }[] = [
  { r: 0, c: 3, text: "TEB" },
  { r: 2, c: 0, text: "East Orange" },
  { r: 3, c: 2, text: "Newark" },
  { r: 4, c: 3, text: "Downtown" },
  { r: 5, c: 5, text: "EWR" },
];

const COLS = 8;
const ROWS = 7;
const CELL = 0.48;
const GAP = 0.035;

function altColor(alt: number): string {
  if (alt === 0) return "#7a1c1c";
  if (alt <= 50) return "#b45316";
  if (alt <= 100) return "#a3a31c";
  if (alt <= 200) return "#2f8a3e";
  return "#1cc24d";
}

function cellHeight(alt: number) {
  return alt === 0 ? 0.035 : (alt / 400) * 1.55;
}

function cellCenter(r: number, c: number): [number, number, number] {
  const x = (c - (COLS - 1) / 2) * (CELL + GAP);
  const z = (r - (ROWS - 1) / 2) * (CELL + GAP);
  return [x, 0, z];
}

export type ChartMode = "classes" | "laanc" | "both";

function GroundPlate() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]} receiveShadow>
        <planeGeometry args={[5.6, 4.9]} />
        <meshStandardMaterial color="#cbb98a" roughness={0.92} metalness={0.04} />
      </mesh>
      {/* Newark Bay / east water */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[2.15, -0.01, 0.35]}>
        <planeGeometry args={[1.15, 4.2]} />
        <meshStandardMaterial color="#7eafc9" roughness={0.45} metalness={0.08} />
      </mesh>
      {/* EWR runways */}
      <mesh rotation={[-Math.PI / 2, 0, 0.18]} position={[1.15, 0.005, 1.05]}>
        <planeGeometry args={[1.35, 0.12]} />
        <meshStandardMaterial color="#4a4e4a" roughness={0.7} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0.18]} position={[1.22, 0.006, 1.22]}>
        <planeGeometry args={[1.2, 0.08]} />
        <meshStandardMaterial color="#3a3e3a" roughness={0.7} />
      </mesh>
    </group>
  );
}

function ClassVolumes({ visible }: { visible: boolean }) {
  if (!visible) return null;
  return (
    <group>
      {/* Class B — solid blue sectional color, stacked shelves */}
      <mesh position={[0.55, 0.95, 0.55]}>
        <boxGeometry args={[3.6, 1.9, 3.1]} />
        <meshStandardMaterial color="#1a5fa8" transparent opacity={0.18} side={DoubleSide} roughness={0.35} />
      </mesh>
      <mesh position={[0.55, 0.95, 0.55]}>
        <boxGeometry args={[3.6, 1.9, 3.1]} />
        <meshBasicMaterial color="#3d8fd6" wireframe transparent opacity={0.55} />
      </mesh>
      <Html position={[0.55, 2.05, 0.55]} center distanceFactor={10} pointerEvents="none">
        <span className="chart-chip chart-chip-b">Class B · EWR</span>
      </Html>
      {/* Class D — TEB, magenta/blue dashed character via thinner volume */}
      <mesh position={[-0.15, 0.42, -1.35]}>
        <cylinderGeometry args={[0.95, 0.95, 0.84, 24, 1, true]} />
        <meshStandardMaterial color="#4a7ec9" transparent opacity={0.22} side={DoubleSide} />
      </mesh>
      <mesh position={[-0.15, 0.42, -1.35]}>
        <cylinderGeometry args={[0.95, 0.95, 0.84, 24]} />
        <meshBasicMaterial color="#7eb0e8" wireframe transparent opacity={0.7} />
      </mesh>
      <Html position={[-0.15, 1.05, -1.35]} center distanceFactor={10} pointerEvents="none">
        <span className="chart-chip chart-chip-d">Class D · TEB</span>
      </Html>
    </group>
  );
}

function LaancCell({
  r,
  c,
  alt,
  selected,
  onSelect,
  visible,
}: {
  r: number;
  c: number;
  alt: number;
  selected: boolean;
  onSelect: () => void;
  visible: boolean;
}) {
  const mesh = useRef<Mesh>(null);
  const h = cellHeight(alt);
  const [x, , z] = cellCenter(r, c);
  const color = altColor(alt);
  const label = LABELS.find((l) => l.r === r && l.c === c);

  useFrame(() => {
    const m = mesh.current;
    if (!m) return;
    const target = visible ? 1 : 0.04;
    m.scale.y += (target - m.scale.y) * 0.12;
  });

  return (
    <group position={[x, 0, z]}>
      <mesh
        ref={mesh}
        position={[0, h / 2, 0]}
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
        }}
        onPointerOver={() => {
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "auto";
        }}
      >
        <boxGeometry args={[CELL, h, CELL]} />
        <meshStandardMaterial
          color={color}
          emissive={selected ? color : "#000000"}
          emissiveIntensity={selected ? 0.35 : 0}
          transparent
          opacity={visible ? (alt === 0 ? 0.92 : 0.78) : 0.15}
          roughness={0.45}
          metalness={0.08}
        />
      </mesh>
      {selected ? (
        <mesh position={[0, h + 0.04, 0]}>
          <boxGeometry args={[CELL + 0.04, 0.02, CELL + 0.04]} />
          <meshBasicMaterial color="#f3f6f1" />
        </mesh>
      ) : null}
      {label ? (
        <Html position={[0, h + 0.18, 0]} center distanceFactor={9} pointerEvents="none">
          <span className="chart-pin">{label.text}</span>
        </Html>
      ) : null}
    </group>
  );
}

function ChartWorld({
  mode,
  selected,
  onSelect,
}: {
  mode: ChartMode;
  selected: { r: number; c: number };
  onSelect: (r: number, c: number) => void;
}) {
  const rig = useRef<Group>(null);
  useFrame((state) => {
    const g = rig.current;
    if (!g) return;
    g.rotation.y = state.pointer.x * 0.28;
    g.rotation.x = -0.18 + state.pointer.y * 0.12;
  });

  const cells = useMemo(() => {
    const list: { r: number; c: number; alt: number }[] = [];
    GRID.forEach((row, r) => row.forEach((alt, c) => list.push({ r, c, alt })));
    return list;
  }, []);

  return (
    <group ref={rig} position={[0, -0.35, 0]}>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 3]} intensity={1.15} />
      <directionalLight position={[-3, 2, -2]} intensity={0.25} color="#8ec8ff" />
      <GroundPlate />
      <ClassVolumes visible={mode !== "laanc"} />
      {cells.map((cell) => (
        <LaancCell
          key={`${cell.r}-${cell.c}`}
          r={cell.r}
          c={cell.c}
          alt={cell.alt}
          selected={selected.r === cell.r && selected.c === cell.c}
          onSelect={() => onSelect(cell.r, cell.c)}
          visible={mode !== "classes"}
        />
      ))}
    </group>
  );
}

export function AirspaceChart({
  className = "aspect-[16/10] min-h-[22rem]",
  onPick,
}: {
  className?: string;
  onPick?: (alt: number, label?: string) => void;
}) {
  const [mode, setMode] = useState<ChartMode>("both");
  const [sel, setSel] = useState({ r: 5, c: 5 });
  const alt = GRID[sel.r][sel.c];
  const label = LABELS.find((l) => l.r === sel.r && l.c === sel.c)?.text;

  return (
    <div className={cn("relative overflow-hidden rounded-lg bg-ink-2", className)}>
      <SceneCanvas
        className="size-full min-h-[22rem]"
        interactive
        camera={{ position: [3.6, 3.2, 3.8], fov: 42, near: 0.1, far: 40 }}
        fallback={<LaancFallback sel={sel} onSelect={setSel} />}
      >
        <ChartWorld
          mode={mode}
          selected={sel}
          onSelect={(r, c) => {
            setSel({ r, c });
            const a = GRID[r][c];
            const lab = LABELS.find((l) => l.r === r && l.c === c)?.text;
            onPick?.(a, lab);
          }}
        />
      </SceneCanvas>
      <div className="pointer-events-none absolute inset-x-0 top-0 flex flex-wrap items-start justify-between gap-2 p-3">
        <p className="font-display text-[0.62rem] font-semibold tracking-[0.16em] text-green uppercase">
          Sectional + LAANC · teaching schematic
        </p>
        <div className="pointer-events-auto flex gap-1">
          {(["both", "classes", "laanc"] as ChartMode[]).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className={cn(
                "rounded-pill px-3 py-1 font-display text-[0.65rem] font-semibold tracking-[0.12em] uppercase",
                mode === m ? "bg-green text-ink" : "bg-ink/70 text-fg-soft shadow-[0_0_0_1px_rgba(255,255,255,0.12)]",
              )}
            >
              {m === "both" ? "Chart + Grid" : m === "classes" ? "Airspace Class" : "LAANC"}
            </button>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/80 to-transparent p-4 pt-10">
        <p className="font-display text-sm text-fg">
          {label ? `${label} · ` : ""}
          {alt === 0 ? "0 ft AGL — LAANC will not auto-authorize this cell" : `${alt} ft AGL schematic ceiling`}
        </p>
        <p className="mt-1 text-xs text-muted">
          Blue volume = Class B (EWR). Wire cylinder = Class D (TEB). Columns = UAS Facility Map altitudes.
          Not a chart, not operational. Live numbers come from the FAA map at briefing.
        </p>
      </div>
    </div>
  );
}

function LaancFallback({
  sel,
  onSelect,
}: {
  sel: { r: number; c: number };
  onSelect: (s: { r: number; c: number }) => void;
}) {
  return (
    <div className="grid h-full min-h-[22rem] grid-cols-8 grid-rows-7 gap-0.5 bg-ink p-3">
      {GRID.map((row, r) =>
        row.map((alt, c) => {
          const on = sel.r === r && sel.c === c;
          const lab = LABELS.find((l) => l.r === r && l.c === c);
          return (
            <button
              key={`${r}-${c}`}
              type="button"
              onClick={() => onSelect({ r, c })}
              className="flex flex-col items-center justify-center rounded-[3px] text-[0.6rem] text-fg"
              style={{
                background: altColor(alt),
                outline: on ? "2px solid #f3f6f1" : undefined,
              }}
            >
              {alt}
              {lab ? <span className="text-[0.45rem] uppercase opacity-80">{lab.text}</span> : null}
            </button>
          );
        }),
      )}
    </div>
  );
}
