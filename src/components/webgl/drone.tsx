import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { MathUtils, type Group } from "three";
const ARMS = [
  [-1, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
];
/** Purpose-built display model: frame, motors, flight controller and stabilized camera. */
export function Drone({
  scale = 1,
  exploded = 0,
  rotorsBlur = true,
}: {
  scale?: number;
  exploded?: number;
  rotorsBlur?: boolean;
}) {
  const top = useRef<Group>(null);
  const camera = useRef<Group>(null);
  const props = useRef<Group>(null);
  useFrame((_, dt) => {
    const d = Math.min(dt, 0.05);
    if (top.current)
      top.current.position.y = MathUtils.damp(top.current.position.y, exploded * 0.45, 6, d);
    if (camera.current)
      camera.current.position.y = MathUtils.damp(camera.current.position.y, -exploded * 0.32, 6, d);
    if (props.current)
      props.current.position.y = MathUtils.damp(props.current.position.y, exploded * 0.25, 6, d);
  });
  return (
    <group scale={scale}>
      <RoundedBox args={[0.32, 0.085, 0.45]} radius={0.045} smoothness={4} castShadow>
        <meshStandardMaterial color="#57665f" metalness={0.65} roughness={0.3} />
      </RoundedBox>
      <group ref={top}>
        <RoundedBox
          args={[0.31, 0.07, 0.43]}
          radius={0.045}
          smoothness={4}
          position={[0, 0.065, 0]}
          castShadow
        >
          <meshStandardMaterial color="#b7c0b4" metalness={0.5} roughness={0.28} />
        </RoundedBox>
        <RoundedBox
          args={[0.2, 0.045, 0.27]}
          radius={0.018}
          smoothness={3}
          position={[0, 0.12, 0.025]}
          castShadow
        >
          <meshStandardMaterial color="#34443f" metalness={0.4} roughness={0.4} />
        </RoundedBox>
        {[-0.06, -0.02, 0.02, 0.06].map((x) => (
          <mesh key={x} position={[x, 0.145, 0.04]}>
            <boxGeometry args={[0.007, 0.004, 0.13]} />
            <meshStandardMaterial color="#8c9b8e" />
          </mesh>
        ))}
      </group>
      <mesh position={[0, 0.055, 0]}>
        <boxGeometry args={[0.23, 0.018, 0.27]} />
        <meshStandardMaterial color="#245a4e" metalness={0.3} roughness={0.5} />
      </mesh>
      {ARMS.map(([x, z], i) => (
        <group key={i}>
          <mesh
            position={[x * 0.28, 0, z * 0.26]}
            rotation={[0, (x * z * Math.PI) / 4, 0]}
            castShadow
          >
            <boxGeometry args={[0.07, 0.055, 0.57]} />
            <meshStandardMaterial color="#304039" metalness={0.65} roughness={0.37} />
          </mesh>
          <mesh position={[x * 0.49, 0.025, z * 0.46]} castShadow>
            <cylinderGeometry args={[0.072, 0.065, 0.095, 24]} />
            <meshStandardMaterial color="#586b62" metalness={0.75} roughness={0.24} />
          </mesh>
          <mesh position={[x * 0.49, 0.08, z * 0.46]}>
            <cylinderGeometry args={[0.047, 0.047, 0.025, 24]} />
            <meshStandardMaterial color="#aeb8a9" metalness={0.8} roughness={0.22} />
          </mesh>
          <mesh
            position={[x * 0.34, -0.12, z * 0.33]}
            rotation={[z * 0.22, 0, -x * 0.18]}
            castShadow
          >
            <capsuleGeometry args={[0.019, 0.2, 4, 8]} />
            <meshStandardMaterial color="#243830" metalness={0.6} roughness={0.4} />
          </mesh>
          <mesh position={[x * 0.49, 0.013, z * 0.53]}>
            <sphereGeometry args={[0.017, 10, 8]} />
            <meshBasicMaterial color={z < 0 ? "#eab478" : "#94d6b1"} />
          </mesh>
        </group>
      ))}
      <group ref={props}>
        {ARMS.map(([x, z], i) => (
          <group key={i} position={[x * 0.49, 0.108, z * 0.46]} rotation={[0, i * 0.8, 0]}>
            <mesh castShadow>
              <boxGeometry args={[0.59, 0.008, 0.037]} />
              <meshStandardMaterial color="#30413a" metalness={0.4} roughness={0.48} />
            </mesh>
            {rotorsBlur && (
              <mesh>
                <cylinderGeometry args={[0.3, 0.3, 0.003, 40]} />
                <meshStandardMaterial
                  color="#bac6b7"
                  transparent
                  opacity={0.18}
                  depthWrite={false}
                />
              </mesh>
            )}
            <mesh>
              <cylinderGeometry args={[0.026, 0.026, 0.02, 16]} />
              <meshStandardMaterial color="#afbbaa" metalness={0.8} roughness={0.2} />
            </mesh>
          </group>
        ))}
      </group>
      <group ref={camera}>
        <mesh position={[0, -0.1, -0.16]}>
          <cylinderGeometry args={[0.05, 0.05, 0.1, 20]} />
          <meshStandardMaterial color="#758b80" metalness={0.7} roughness={0.2} />
        </mesh>
        <RoundedBox
          args={[0.14, 0.12, 0.12]}
          radius={0.02}
          smoothness={3}
          position={[0, -0.175, -0.17]}
          castShadow
        >
          <meshStandardMaterial color="#465c50" metalness={0.65} roughness={0.3} />
        </RoundedBox>
        <mesh position={[0, -0.18, -0.243]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.045, 0.048, 0.04, 32]} />
          <meshStandardMaterial color="#1a302c" metalness={0.85} roughness={0.13} />
        </mesh>
        <mesh position={[0, -0.18, -0.265]} rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.033, 32]} />
          <meshPhysicalMaterial color="#2e6082" metalness={0.35} roughness={0.08} clearcoat={1} />
        </mesh>
      </group>
    </group>
  );
}
