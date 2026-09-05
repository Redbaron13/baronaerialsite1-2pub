import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

const ARMS: [number, number][] = [
  [-1, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
];

/** Geometric quadcopter — brand green nav light, no stock DJI mesh. */
export function Drone({ scale = 1 }: { scale?: number }) {
  const rotors = useRef<Group>(null);

  useFrame((_, delta) => {
    const d = Math.min(delta, 0.05);
    const group = rotors.current;
    if (!group) return;
    for (const child of group.children) child.rotation.y += d * 38;
  });

  const arm = 0.3;

  return (
    <group scale={scale}>
      <mesh castShadow>
        <boxGeometry args={[0.2, 0.045, 0.26]} />
        <meshStandardMaterial color="#161b16" metalness={0.55} roughness={0.32} />
      </mesh>
      <mesh position={[0, 0.028, 0]}>
        <boxGeometry args={[0.12, 0.02, 0.14]} />
        <meshStandardMaterial color="#1cc24d" metalness={0.2} roughness={0.45} />
      </mesh>
      <mesh position={[0, -0.06, 0.07]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.032, 0.04, 0.04, 16]} />
        <meshStandardMaterial color="#0a0e0a" metalness={0.75} roughness={0.22} />
      </mesh>
      <mesh position={[0, -0.08, 0.09]} rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.016, 20]} />
        <meshBasicMaterial color="#1cc24d" />
      </mesh>
      {ARMS.map(([x, z], i) => (
        <mesh
          key={`arm-${i}`}
          position={[(x * arm) / 2, 0.01, (z * arm) / 2]}
          rotation={[0, Math.atan2(x, z), x * z * 0.08]}
        >
          <boxGeometry args={[0.028, 0.016, arm]} />
          <meshStandardMaterial color="#2a2f2a" metalness={0.45} roughness={0.4} />
        </mesh>
      ))}
      {ARMS.map(([x, z], i) => (
        <mesh key={`motor-${i}`} position={[x * arm, 0.03, z * arm]}>
          <cylinderGeometry args={[0.032, 0.032, 0.03, 12]} />
          <meshStandardMaterial color="#121512" metalness={0.6} roughness={0.3} />
        </mesh>
      ))}
      <group ref={rotors}>
        {ARMS.map(([x, z], i) => (
          <mesh key={`rotor-${i}`} position={[x * arm, 0.05, z * arm]}>
            <cylinderGeometry args={[0.15, 0.15, 0.006, 20]} />
            <meshStandardMaterial
              color="#d7ddd4"
              transparent
              opacity={0.28}
              metalness={0.15}
              roughness={0.55}
            />
          </mesh>
        ))}
      </group>
      <mesh position={[0, 0.04, -0.12]}>
        <sphereGeometry args={[0.014, 10, 10]} />
        <meshBasicMaterial color="#1cc24d" />
      </mesh>
    </group>
  );
}
