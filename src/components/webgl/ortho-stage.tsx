import { useEffect, useMemo, useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Edges } from "@react-three/drei";
import { MathUtils, SRGBColorSpace, TextureLoader, type Group } from "three";
import { SceneCanvas } from "./scene-canvas";
import { Plinth, StudioLights } from "./studio-primitives";
import { MediaImage } from "@/components/media-image";
const TITLES = ["Orthomosaic", "Elevation visualization", "Capture coverage"];
function CaptureLayer({src,index,spread,active}: {src:string;index:number;spread:number;active:number}) {
 const source = useLoader(TextureLoader,src,loader=>loader.setCrossOrigin("anonymous"));
 const texture=useMemo(()=>{const t=source.clone();t.colorSpace=SRGBColorSpace;t.anisotropy=8;t.needsUpdate=true;return t;},[source]);
 useEffect(()=>()=>texture.dispose(),[texture]);
 const group=useRef<Group>(null);
 const aspect=source.image.width/source.image.height;
 useFrame((_,dt)=>{if(group.current)group.current.position.y=MathUtils.damp(group.current.position.y,spread>0?index*spread*.85: index===active?.04:-.06-index*.01,6,Math.min(dt,.05));});
 return <group ref={group} position={[0,index*.7,0]} visible={spread>0 || active===index}>
   <mesh position={[0,-.025,0]} castShadow receiveShadow><boxGeometry args={[3.6*aspect+.03,.045,3.6+.03]}/><meshStandardMaterial color="#64776d" metalness={.4} roughness={.4}/><Edges color="#e7eae0"/></mesh>
   <mesh rotation={[-Math.PI/2,0,0]} receiveShadow><planeGeometry args={[3.6*aspect,3.6]}/><meshStandardMaterial map={texture} roughness={.83} metalness={0}/></mesh>
 </group>;
}
function World({maps,spread,active,interactive}: {maps:string[];spread:number;active:number;interactive:boolean}) {return <><StudioLights/><Plinth width={3.3} depth={4}/>{maps.map((src,i)=><CaptureLayer key={src} src={src} index={i} spread={spread} active={active}/>)}<OrbitControls makeDefault enabled={interactive} enableZoom={false} enablePan={false} enableDamping minPolarAngle={.1} maxPolarAngle={Math.PI/2.12} target={[0,.5,0]}/></>;}
export function OrthoStage({colorMap,elevMap,className}: {colorMap:string;elevMap?:string;className?:string}) {
 const [spread,setSpread]=useState(.8);const [active,setActive]=useState(0);const [interactive,setInteractive]=useState(false);const [view,setView]=useState(0);
 const maps=[colorMap,...(elevMap?[elevMap]:[]),"/media/kiji-coverage.webp"];
 return <section className={`technical-studio ortho-study ${className??""}`} aria-label="Kuzuri Kijiji deliverable layers">
  <header className="studio-header"><div><p className="studio-eyebrow">DELIVERABLE STUDY / 02</p><h4>The anatomy of a site packet.</h4></div><span className="studio-stamp">KUZURI KIJ IJI · NJ</span></header>
  <div className="studio-toolbar" role="group" aria-label="Deliverable layer">{maps.map((_,i)=><button type="button" key={i} className="studio-button" aria-pressed={active===i&&spread===0} onClick={()=>{setActive(i);setSpread(0);}}>{TITLES[i]}</button>)}<button type="button" className="studio-button" aria-pressed={spread>0} onClick={()=>setSpread(spread>0?0:1)}>{spread>0?"Assemble":"Separate layers"}</button></div>
  <div className="studio-viewport"><SceneCanvas key={view} interactive={interactive} camera={{position:[5.1,5.6,6.4],fov:36,near:.1,far:50}} fallback={<MediaImage src={maps[active]} className="size-full object-contain"/>}><World maps={maps} spread={spread} active={active} interactive={interactive}/></SceneCanvas><span className="studio-compass">IMAGE TOP ↑</span><span className="studio-view-note">{spread>0?"Separate outputs from one capture · layer spacing is illustrative":TITLES[active]+" · source visualization"}</span></div>
  <div className="studio-controls"><label>Layer separation <strong>{Math.round(spread*100)}%</strong><input aria-label="Layer separation" className="studio-range" type="range" min="0" max="1" step=".01" value={spread} onChange={e=>setSpread(Number(e.target.value))}/></label><div className="mt-3 flex flex-wrap gap-2"><button type="button" className="studio-button" aria-pressed={interactive} onClick={()=>setInteractive(!interactive)}>{interactive?"Finish exploring":"Explore 3D"}</button><button type="button" className="studio-button" onClick={()=>{setView(v=>v+1);setInteractive(false);setSpread(.8);}}>Reset view</button></div></div>
  <footer className="studio-source">Orthomosaic, color elevation and coverage outputs. Layers retain their source aspect ratios; their separation is explanatory, not a measured terrain surface. Calibrated elevations and survey control are required for measurement.</footer>
 </section>;
}
