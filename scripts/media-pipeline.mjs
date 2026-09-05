#!/usr/bin/env node
/**
 * Baron Aerial Media — elected-asset pipeline.
 *
 * Files that belong to the same job share a jobId:
 *   BAM-{SITE}-{JOB}-{YYYYMM}
 * File names:
 *   {jobId}_{nn}_{role}.{ext}
 *
 * Outputs (does not overwrite originals):
 *   artifacts/media-pipeline/r2-upload/{jobId}/   full-quality duplicates for Cloudflare R2
 *   artifacts/media-pipeline/web-optimized/{jobId}/  sharp web derivatives for the site
 *
 * Finished video deliverables are copied, not trimmed.
 */
import { mkdirSync, copyFileSync, writeFileSync, existsSync, statSync } from "node:fs";
import { dirname, extname, join, basename } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const OUT = join(ROOT, "artifacts", "media-pipeline");
const R2 = join(OUT, "r2-upload");
const WEB = join(OUT, "web-optimized");
const FFMPEG = "/usr/local/bin/ffmpeg";

/** @typedef {{ jobId: string, title: string, files: Asset[] }} Job */
/** @typedef {{ n: string, role: string, kind: "still"|"video", web: string, original?: string, finishedDeliverable?: boolean }} Asset */

/** @type {Job[]} */
const jobs = [
  {
    jobId: "BAM-EO-CROSSINGS-202606",
    title: "Embark + ShopRite at The Crossings",
    files: [
      {
        n: "01",
        role: "promo-aerial",
        kind: "video",
        web: "public/media/neighborhood-film.mp4",
        finishedDeliverable: true,
      },
      { n: "02", role: "hyperlapse-01", kind: "still", web: "public/media/brick-church-village.webp" },
      { n: "03", role: "hyperlapse-02", kind: "still", web: "public/media/brick-church-apartments.webp" },
    ],
  },
  {
    jobId: "BAM-EO-NMUNN280-202606",
    title: "North Munn Avenue Bridge Over I-280",
    files: [
      {
        n: "01",
        role: "nadir-hold",
        kind: "video",
        web: "public/media/overpass.mp4",
        original: "attachments/DJI_0007.MP4",
        finishedDeliverable: true,
      },
      {
        n: "02",
        role: "ground-film",
        kind: "video",
        web: "public/media/jobsite-ground.mp4",
        finishedDeliverable: true,
      },
      {
        n: "03",
        role: "nadir-still",
        kind: "still",
        web: "public/media/overpass.webp",
        original: "attachments/DJI_0010.JPG",
      },
      {
        n: "04",
        role: "oblique",
        kind: "still",
        web: "public/media/overpass-oblique.webp",
        original: "attachments/DJI_0011.JPG",
      },
      {
        n: "05",
        role: "approach",
        kind: "still",
        web: "public/media/overpass-approach.webp",
        original: "attachments/DJI_0012.JPG",
      },
      { n: "06", role: "deck-truck", kind: "still", web: "public/media/overpass-ground.webp" },
      { n: "07", role: "staging", kind: "still", web: "public/media/south-munn-staging.webp" },
    ],
  },
  {
    jobId: "BAM-EO-KUZURI-202607",
    title: "Kuzuri Kijiji, East Orange",
    files: [
      { n: "01", role: "ortho", kind: "still", web: "public/media/kiji-ortho.webp" },
      { n: "02", role: "dem", kind: "still", web: "public/media/kiji-dem.webp" },
      { n: "03", role: "coverage", kind: "still", web: "public/media/kiji-coverage.webp" },
    ],
  },
  {
    jobId: "BAM-HAIN-BANCROFT-2023",
    title: "Hainesport Residential Listing",
    files: [
      {
        n: "01",
        role: "aerial",
        kind: "still",
        web: "public/media/bancroft-aerial.webp",
        original: "attachments/8-Bancroft-Lane-04242023_143506.jpg",
      },
      { n: "02", role: "curb", kind: "still", web: "public/media/bancroft-curb.webp" },
    ],
  },
  {
    jobId: "BAM-NJ-HOUSECUT",
    title: "House Under Construction",
    files: [{ n: "01", role: "overview", kind: "still", web: "public/media/jobsite.webp" }],
  },
  {
    jobId: "BAM-NJ-ENVELOPE",
    title: "Roof And Siding Close-Up",
    files: [
      { n: "01", role: "roof", kind: "still", web: "public/media/work-tower.webp" },
      { n: "02", role: "siding", kind: "still", web: "public/media/work-residential.webp" },
    ],
  },
  {
    jobId: "BAM-NJ-RAMPS-202607",
    title: "Highway Ramps And Parking Lot",
    files: [
      {
        n: "01",
        role: "nadir-clip",
        kind: "video",
        web: "public/media/highway-ramps.mp4",
        original: "attachments/DJI_0015.MP4",
        finishedDeliverable: true,
      },
      { n: "02", role: "cloverleaf", kind: "still", web: "public/media/work-interchange.webp" },
    ],
  },
  {
    jobId: "BAM-NJ-FIELDS",
    title: "Recreation Field At Twilight",
    files: [
      { n: "01", role: "track", kind: "still", web: "public/media/park-twilight.webp" },
      { n: "02", role: "pitch", kind: "still", web: "public/media/neighborhood-gold.webp" },
    ],
  },
  {
    jobId: "BAM-NJ-WAREHOUSE-202607",
    title: "Warehouse At Last Light",
    files: [
      { n: "01", role: "oblique-01", kind: "still", web: "public/media/warehouse-sunset.webp" },
      { n: "02", role: "oblique-02", kind: "still", web: "public/media/warehouse-lot.webp" },
    ],
  },
  {
    jobId: "BAM-NJ-NIGHT-202607",
    title: "After-Dark Lots And Streets",
    files: [
      { n: "01", role: "lot", kind: "still", web: "public/media/night-lot.webp" },
      { n: "02", role: "street", kind: "still", web: "public/media/night-street.webp" },
      { n: "03", role: "dusk", kind: "still", web: "public/media/dusk-lot.webp" },
    ],
  },
];

function ensureDir(p) {
  mkdirSync(p, { recursive: true });
}

function stem(jobId, n, role, ext) {
  return `${jobId}_${n}_${role}${ext}`;
}

function optimizeStill(src, dest) {
  const py = `
from PIL import Image, ImageOps
import os
src = ${JSON.stringify(src)}
dest = ${JSON.stringify(dest)}
im = Image.open(src)
im = ImageOps.exif_transpose(im)
if im.mode not in ("RGB", "L"):
    im = im.convert("RGB")
elif im.mode == "L":
    im = im.convert("RGB")
# Strip GPS / EXIF by rebuilding
max_edge = 2560
w, h = im.size
scale = min(1.0, max_edge / max(w, h))
if scale < 1:
    im = im.resize((int(w * scale), int(h * scale)), Image.Resampling.LANCZOS)
os.makedirs(os.path.dirname(dest), exist_ok=True)
im.save(dest, "WEBP", quality=88, method=6, exact=True)
print(f"{im.size[0]}x{im.size[1]}")
`;
  const r = spawnSync("python3", ["-"], { input: py, encoding: "utf8" });
  if (r.status !== 0) throw new Error(r.stderr || r.stdout);
  return r.stdout.trim();
}

function copyVideoWeb(src, dest) {
  ensureDir(dirname(dest));
  // Finished deliverables: remux for faststart only. Do not trim or re-encode.
  const r = spawnSync(
    FFMPEG,
    ["-y", "-i", src, "-c", "copy", "-movflags", "+faststart", dest],
    { encoding: "utf8" },
  );
  if (r.status !== 0) {
    copyFileSync(src, dest);
  }
}

const catalog = [];

for (const job of jobs) {
  const r2Dir = join(R2, job.jobId);
  const webDir = join(WEB, job.jobId);
  ensureDir(r2Dir);
  ensureDir(webDir);

  for (const file of job.files) {
    const webAbs = join(ROOT, file.web);
    const origAbs = file.original ? join(ROOT, file.original) : webAbs;
    if (!existsSync(webAbs) && !existsSync(origAbs)) {
      catalog.push({ jobId: job.jobId, role: file.role, status: "missing" });
      continue;
    }
    const sourceForR2 = existsSync(origAbs) ? origAbs : webAbs;
    const r2Ext = extname(sourceForR2);
    const r2Name = stem(job.jobId, file.n, file.role, r2Ext);
    const r2Path = join(r2Dir, r2Name);
    copyFileSync(sourceForR2, r2Path);

    let webName;
    let webPath;
    let note = file.original && existsSync(join(ROOT, file.original)) ? "from-original" : "from-web-derivative";

    if (file.kind === "still") {
      const stillSrc = existsSync(origAbs) ? origAbs : webAbs;
      webName = stem(job.jobId, file.n, file.role, ".webp");
      webPath = join(webDir, webName);
      const size = optimizeStill(stillSrc, webPath);
      note += ` ${size} q88`;
      // Refresh the site file when we have a true original
      if (file.original && existsSync(join(ROOT, file.original))) {
        copyFileSync(webPath, webAbs);
      }
    } else {
      webName = stem(job.jobId, file.n, file.role, ".mp4");
      webPath = join(webDir, webName);
      if (file.finishedDeliverable) {
        copyVideoWeb(webAbs, webPath);
        note += " finished-deliverable-not-trimmed";
      } else {
        copyVideoWeb(webAbs, webPath);
      }
    }

    catalog.push({
      jobId: job.jobId,
      title: job.title,
      seq: file.n,
      role: file.role,
      kind: file.kind,
      identifier: `${job.jobId}_${file.n}_${file.role}`,
      r2: `r2-upload/${job.jobId}/${r2Name}`,
      r2Bytes: statSync(r2Path).size,
      web: `web-optimized/${job.jobId}/${webName}`,
      webBytes: existsSync(webPath) ? statSync(webPath).size : 0,
      sitePath: file.web,
      note,
    });
  }
}

ensureDir(OUT);
writeFileSync(
  join(OUT, "manifest.json"),
  JSON.stringify({ generated: new Date().toISOString(), jobs: catalog }, null, 2),
);

const md = [
  "# Baron Aerial Media — elected media pipeline",
  "",
  "Shared identifier: `BAM-{SITE}-{JOB}-{YYYYMM}_{seq}_{role}`",
  "",
  "- `r2-upload/` — original-quality duplicates. Upload this folder to Cloudflare R2 (`media.baronaerial.com`).",
  "- `web-optimized/` — sharp WebP / faststart MP4 for the site. Finished video deliverables were **not** trimmed.",
  "",
  "| Identifier | Job | Role | R2 | Web |",
  "|---|---|---|---:|---:|",
  ...catalog.map(
    (c) =>
      `| \`${c.identifier}\` | ${c.title} | ${c.role} | ${(c.r2Bytes / 1024).toFixed(0)} KB | ${(c.webBytes / 1024).toFixed(0)} KB |`,
  ),
  "",
].join("\n");
writeFileSync(join(OUT, "README.md"), md);

console.log(`Wrote ${catalog.length} assets to ${OUT}`);
for (const c of catalog) {
  console.log(`  ${c.identifier}  ${c.note}`);
}
