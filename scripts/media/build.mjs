/** Rebuild the reviewed public media manifest. Originals remain untouched. */
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';
const catalog = JSON.parse(await fs.readFile('scripts/media/catalog.json','utf8'));
const manifest = { version: 1, assets: {}, paths: {} };
await fs.mkdir('public/media/responsive', {recursive:true});
let originalBytes = 0, smallBytes = 0;
for (const [src, meta] of Object.entries(catalog)) {
 const input = await fs.readFile('public'+src);
 const sha256 = crypto.createHash('sha256').update(input).digest('hex');
 const id = 'bam-'+sha256.slice(0,16);
 manifest.paths[src] = id;
 if (manifest.assets[id]) continue;
 const {width,height} = await sharp(input).metadata();
 const variants=[];
 for (const widthTarget of [400,800,1200,1800].filter(w=>w<=width)) {
  const out='/media/responsive/'+id+'-'+widthTarget+'.webp';
  const info=await sharp(input).resize({width:widthTarget,withoutEnlargement:true}).webp({quality:82}).toFile('public'+out);
  variants.push({src:out,width:info.width,height:info.height,bytes:info.size});
 }
 manifest.assets[id]={...meta,id,src,sha256,width,height,variants};
 originalBytes+=input.length;smallBytes+=variants[0]?.bytes??input.length;
}
await fs.writeFile('src/data/assets.manifest.json',JSON.stringify(manifest,null,2)+'\n');
console.log(JSON.stringify({assets:Object.keys(manifest.assets).length,originalBytes,smallBytes}));
