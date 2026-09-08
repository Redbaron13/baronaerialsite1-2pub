import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { MathUtils, type Group } from "three";
const ARMS=[[-1,-1],[1,-1],[-1,1],[1,1]];
/** Purpose-built display model: frame, motors, flight controller and stabilized camera. */
export function Drone({scale=1,exploded=0,rotorsBlur=true}: {scale?:number;exploded?:number;rotorsBlur?:boolean}) {
 const top=useRef<Group>(null);const camera=useRef<Group>(null);const props=useRef<Group>(null);
 useFrame((_,dt)=>{const d=Math.min(dt,.05);if(top.current)top.current.position.y=MathUtils.damp(top.current.position.y,exploded*.45,6,d);if(camera.current)camera.current.position.y=MathUtils.damp(camera.current.position.y,-exploded*.48,6,d);if(props.current)props.current.position.y=MathUtils.damp(props.current.position.y,exploded*.25,6,d);});
 return <group scale={scale}>
  <RoundedBox args={[.32,.085,.45]} radius={.045} smoothness={4} castShadow><meshStandardMaterial color="#57665f" metalness={.65} roughness={.3}/></RoundedBox>
  <group ref={top}><RoundedBox args={[.31,.07,.43]} radius={.045} smoothness={4} position={[0,.065,0]} castShadow><meshStandardMaterial color="#b7c0b4" metalness={.5} roughness={.28}/></RoundedBox><RoundedBox args={[.2,.045,.27]} radius={.018} smoothness={3} position={[0,.12,.025]} castShadow><meshStandardMaterial color="#34443f" metalness={.4} roughness={.4}/></RoundedBox>{[-.06,-.02,.02,.06].map(x=><mesh key={x} position={[x,.145,.04]}><boxGeometry args={[.007,.004,.13]}/><meshStandardMaterial color="#8c9b8e"/></mesh>)}</group>
  <mesh position={[0,.055,0]}><boxGeometry args={[.23,.018,.27]}/><meshStandardMaterial color="#245a4e" metalness={.3} roughness={.5}/></mesh>
  {ARMS.map(([x,z],i)=><group key={i}>
   <mesh position={[x*.28,0,z*.26]} rotation={[0,x*z*Math.PI/4,0]} castShadow><boxGeometry args={[.07,.055,.57]}/><meshStandardMaterial color="#304039" metalness={.65} roughness={.37}/></mesh>
   <mesh position={[x*.49,.025,z*.46]} castShadow><cylinderGeometry args={[.072,.065,.095,24]}/><meshStandardMaterial color="#586b62" metalness={.75} roughness={.24}/></mesh>
   <mesh position={[x*.49,.08,z*.46]}><cylinderGeometry args={[.047,.047,.025,24]}/><meshStandardMaterial color="#aeb8a9" metalness={.8} roughness={.22}/></mesh>
   <mesh position={[x*.34,-.12,z*.33]} rotation={[z*.22,0,-x*.18]} castShadow><capsuleGeometry args={[.019,.2,4,8]}/><meshStandardMaterial color="#243830" metalness={.6} roughness={.4}/></mesh>
   <mesh position={[x*.49,.013,z*.53]}><sphereGeometry args={[.017,10,8]}/><meshBasicMaterial color={z<0?"#eab478":"#94d6b1"}/></mesh>
  </group>)}
  <group ref={props}>{ARMS.map(([x,z],i)=><group key={i} position={[x*.49,.108,z*.46]} rotation={[0,i*.8,0]}><mesh castShadow><boxGeometry args={[.59,.008,.037]}/><meshStandardMaterial color="#30413a" metalness={.4} roughness={.48}/></mesh>{rotorsBlur&&<mesh><cylinderGeometry args={[.3,.3,.003,40]}/><meshStandardMaterial color="#bac6b7" transparent opacity={.18} depthWrite={false}/></mesh>}<mesh><cylinderGeometry args={[.026,.026,.02,16]}/><meshStandardMaterial color="#afbbaa" metalness={.8} roughness={.2}/></mesh></group>)}</group>
  <group ref={camera}><mesh position={[0,-.1,-.16]}><cylinderGeometry args={[.05,.05,.1,20]}/><meshStandardMaterial color="#758b80" metalness={.7} roughness={.2}/></mesh><RoundedBox args={[.14,.12,.12]} radius={.02} smoothness={3} position={[0,-.175,-.17]} castShadow><meshStandardMaterial color="#465c50" metalness={.65} roughness={.3}/></RoundedBox><mesh position={[0,-.18,-.243]} rotation={[Math.PI/2,0,0]}><cylinderGeometry args={[.045,.048,.04,32]}/><meshStandardMaterial color="#1a302c" metalness={.85} roughness={.13}/></mesh><mesh position={[0,-.18,-.265]} rotation={[Math.PI/2,0,0]}><circleGeometry args={[.033,32]}/><meshPhysicalMaterial color="#2e6082" metalness={.35} roughness={.08} clearcoat={1}/></mesh></group>
 </group>;
}
