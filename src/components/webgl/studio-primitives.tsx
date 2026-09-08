import { useEffect, useMemo } from "react";
import { CanvasTexture, SRGBColorSpace } from "three";
import { RoundedBox } from "@react-three/drei";
export const palette = {
  paper: "#e9eae2",
  graphite: "#273b36",
  metal: "#62766d",
  teal: "#477f82",
  copper: "#ad744b",
  ivory: "#f9faf3",
};
export function StudioLights() {
  return (
    <>
      <color attach="background" args={[palette.paper]} />
      <hemisphereLight args={["#ffffff", "#84988a", 2]} />
      <directionalLight
        position={[3, 8, 5]}
        intensity={3}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.001}
      />
      <directionalLight position={[-5, 3, -4]} intensity={1.4} color="#b9d8e1" />
    </>
  );
}
export function Plinth({ width = 6, depth = 6 }: { width?: number; depth?: number }) {
  return (
    <>
      <RoundedBox
        args={[width, 0.16, depth]}
        radius={0.06}
        smoothness={3}
        position={[0, -0.11, 0]}
        receiveShadow
      >
        <meshStandardMaterial color="#c5cbbf" metalness={0.25} roughness={0.6} />
      </RoundedBox>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.22, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <shadowMaterial transparent opacity={0.13} />
      </mesh>
    </>
  );
}
/** Local canvas labels avoid remote fonts and remain crisp at the chosen display size. */
export function useLabelTexture(text: string, color = "#243a34", background = "transparent") {
  const texture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 96;
    const ctx = canvas.getContext("2d")!;
    if (background !== "transparent") {
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, 256, 96);
    }
    ctx.fillStyle = color;
    ctx.font = "500 42px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, 128, 50);
    const tex = new CanvasTexture(canvas);
    tex.colorSpace = SRGBColorSpace;
    return tex;
  }, [text, color, background]);
  useEffect(() => () => texture.dispose(), [texture]);
  return texture;
}
