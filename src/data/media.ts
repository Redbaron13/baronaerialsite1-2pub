import manifest from "./assets.manifest.json";
export type MediaAsset = { id: string; src: string; alt: string; width: number; height: number; sha256: string; serviceTags: string[]; variants: {src: string; width: number; height: number}[] };
export const assets = manifest.assets as Record<string, MediaAsset>;
const paths = manifest.paths as Record<string,string>;
export function mediaAsset(id: string) { const asset = assets[id]; if (!asset) throw new Error(`Unknown reviewed media asset: ${id}`); return asset; }
export function getMedia(src: string) { return assets[paths[src]]; }
