import { useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, Edges } from "@react-three/drei";
import { MathUtils, type Group } from "three";
import { SceneCanvas } from "./scene-canvas";
import { Plinth, StudioLights, useLabelTexture } from "./studio-primitives";
import snapshot from "@/data/laanc-ewr.json";
import { cn } from "@/lib/utils";

type Cell = (typeof snapshot.cells)[number];
const HEIGHT_SCALE = 2.2 / 400;
function CellVolume({
  cell,
  selected,
  flat,
  request,
  pick,
}: {
  cell: Cell;
  selected: boolean;
  flat: boolean;
  request: number;
  pick: () => void;
}) {
  const group = useRef<Group>(null);
  const label = useRef<Group>(null);
  const h = Math.max(0.035, cell.ceiling * HEIGHT_SCALE);
  const eligible =
    cell.laanc && cell.enabled.includes("107-AA") && request <= cell.ceiling && cell.ceiling > 0;
  const color = selected
    ? "#294f57"
    : eligible
      ? "#76a7ac"
      : cell.ceiling === 0
        ? "#ac7952"
        : "#c7b59a";
  const tex = useLabelTexture(String(cell.ceiling), selected ? "#ffffff" : "#203630");
  useFrame((_, dt) => {
    if (group.current) {
      group.current.scale.y = MathUtils.damp(
        group.current.scale.y,
        flat ? 0.035 / h : 1,
        6,
        Math.min(dt, 0.05),
      );
      if (label.current) label.current.position.y = h * group.current.scale.y + 0.025;
    }
  });
  return (
    <group position={[cell.x, 0, cell.z]}>
      <group ref={group}>
        <mesh
          position={[0, h / 2, 0]}
          onClick={(e) => {
            e.stopPropagation();
            pick();
          }}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[cell.width * 0.94, h, cell.depth * 0.94]} />
          <meshStandardMaterial
            color={color}
            roughness={0.42}
            metalness={0.18}
            transparent
            opacity={selected ? 0.96 : 0.8}
          />
          {selected && <Edges color="#1d4c55" lineWidth={1.3} />}
        </mesh>
      </group>
      <group ref={label} position={[0, h + 0.025, 0]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[cell.width * 0.85, cell.depth * 0.35]} />
          <meshBasicMaterial map={tex} transparent depthWrite={false} toneMapped={false} />
        </mesh>
      </group>
    </group>
  );
}
function MapWorld({
  flat,
  selected,
  request,
  pick,
  interactive,
  view,
}: {
  flat: boolean;
  selected: string;
  request: number;
  pick: (c: Cell) => void;
  interactive: boolean;
  view: number;
}) {
  return (
    <>
      <StudioLights />
      <Plinth width={6.4} depth={7.65} />
      {snapshot.cells.map((c) => (
        <CellVolume
          key={c.id}
          cell={c}
          flat={flat}
          selected={c.id === selected}
          request={request}
          pick={() => pick(c)}
        />
      ))}
      {!flat && (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, request * HEIGHT_SCALE + 0.02, 0]}>
          <planeGeometry args={[6.05, 7.3]} />
          <meshBasicMaterial color="#ddb184" transparent opacity={0.08} depthWrite={false} />
          <Edges color="#ad744b" transparent opacity={0.6} />
        </mesh>
      )}
      <OrbitControls
        key={view}
        makeDefault
        enabled={interactive}
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.08}
        minPolarAngle={0.12}
        maxPolarAngle={Math.PI / 2.15}
      />
    </>
  );
}
export function AirspaceChart({
  className,
  onPick,
}: {
  className?: string;
  onPick?: (alt: number, label?: string) => void;
}) {
  const [flat, setFlat] = useState(false);
  const [request, setRequest] = useState(100);
  const [interactive, setInteractive] = useState(false);
  const [view, setView] = useState(0);
  const [selected, setSelected] = useState(
    snapshot.cells.find((c) => c.ceiling === 100)?.id ?? snapshot.cells[0].id,
  );
  const cell = snapshot.cells.find((c) => c.id === selected)!;
  const eligible =
    cell.ceiling > 0 && request <= cell.ceiling && cell.laanc && cell.enabled.includes("107-AA");
  const counts = useMemo(
    () =>
      snapshot.cells.filter(
        (c) => c.ceiling >= request && c.ceiling > 0 && c.enabled.includes("107-AA"),
      ).length,
    [request],
  );
  const pick = (c: Cell) => {
    setSelected(c.id);
    onPick?.(c.ceiling, "Newark Liberty FAA grid");
  };
  return (
    <section
      className={cn("technical-studio airspace-study", className)}
      aria-label="Newark Liberty FAA airspace study"
    >
      <header className="studio-header">
        <div>
          <p className="studio-eyebrow">AIRSPACE STUDY / 01</p>
          <h4>Permission has a ceiling.</h4>
        </div>
        <span className="studio-stamp">EWR · NEW JERSEY</span>
      </header>
      <div className="studio-toolbar" role="group" aria-label="Map presentation">
        <button className="studio-button" aria-pressed={!flat} onClick={() => setFlat(false)}>
          Altitude volumes
        </button>
        <button className="studio-button" aria-pressed={flat} onClick={() => setFlat(true)}>
          Grid overlay
        </button>
        <button
          className="studio-button"
          aria-pressed={interactive}
          onClick={() => setInteractive(!interactive)}
        >
          {interactive ? "Finish exploring" : "Explore 3D"}
        </button>
        <button
          className="studio-button"
          onClick={() => {
            setView((v) => v + 1);
            setInteractive(false);
          }}
        >
          Reset view
        </button>
      </div>
      <div className="studio-viewport airspace-viewport">
        <SceneCanvas
          key={view}
          interactive={interactive}
          camera={{ position: [7.4, 9.8, 10.6], fov: 38, near: 0.1, far: 80 }}
        >
          <MapWorld
            flat={flat}
            selected={selected}
            request={request}
            pick={pick}
            interactive={interactive}
            view={view}
          />
        </SceneCanvas>
        <span className="studio-compass" aria-label="North is toward the back of the initial view">
          N ↑
        </span>
        <span className="studio-view-note">
          {interactive
            ? "Drag to orbit · page scroll unlocked when finished"
            : "Real FAA grid footprints · exaggerated vertical scale"}
        </span>
      </div>
      <div className="studio-controls">
        <label htmlFor="requested-altitude">
          Requested altitude <strong>{request} ft AGL</strong>
        </label>
        <input
          id="requested-altitude"
          aria-label="Requested altitude in feet"
          className="studio-range"
          type="range"
          min="50"
          max="400"
          step="50"
          value={request}
          onChange={(e) => setRequest(Number(e.target.value))}
        />
        <p>
          {counts} of {snapshot.cells.length} shown cells are at or above this request.
        </p>
      </div>
      <div className="studio-legend">
        <span>
          <i style={{ background: "#76a7ac" }} />
          Within the published ceiling
        </span>
        <span>
          <i style={{ background: "#ac7952" }} />0 ft / further review
        </span>
        <span>
          <i style={{ background: "#c7b59a" }} />
          Request above ceiling
        </span>
      </div>
      <div className="studio-readout" role="status" aria-live="polite">
        <strong>
          {cell.ceiling} ft AGL ·{" "}
          {eligible ? "Eligible to request automatic authorization" : "Further FAA review required"}
        </strong>
        <p>
          {cell.lat.toFixed(5)}° N · {Math.abs(cell.lon).toFixed(5)}° W
        </p>
        <p>
          {eligible
            ? "The requested altitude fits this published grid ceiling. FAA authorization is still required before flight."
            : "This request cannot rely on automatic approval in the selected cell. Obtain the applicable FAA approval before operating."}
        </p>
      </div>
      <details className="studio-data">
        <summary>Select a grid cell with the keyboard</summary>
        <div className="cell-selector">
          {snapshot.cells.map((c) => (
            <button
              type="button"
              key={c.id}
              aria-pressed={selected === c.id}
              className="studio-button"
              onClick={() => pick(c)}
              aria-label={`Cell ${c.id}, ${c.ceiling} feet, latitude ${c.lat.toFixed(4)}, longitude ${c.lon.toFixed(4)}`}
            >
              {c.ceiling} ft<span>{c.id}</span>
            </button>
          ))}
        </div>
      </details>
      <footer className="studio-source">
        FAA UAS Facility Map · snapshot {snapshot.retrievedAt} · effective{" "}
        {snapshot.effective.join(", ")}. This educational view omits temporary restrictions and
        other operating conditions. It does not determine whether a flight is permissible.{" "}
        <a
          href="https://www.faa.gov/uas/commercial_operators/uas_facility_maps"
          target="_blank"
          rel="noreferrer"
        >
          Check current FAA maps ↗
        </a>
      </footer>
    </section>
  );
}
