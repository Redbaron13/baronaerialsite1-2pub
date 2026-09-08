import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
test("production has no builder injector and manifest uses BAM assets", () => {
  const config = fs.readFileSync("vite.config.ts", "utf8");
  assert(!config.includes("grokPwaPlugin"));
  assert(!fs.existsSync("server/middleware/grok-pwa.ts"));
  const manifest = JSON.parse(fs.readFileSync("public/site.webmanifest"));
  assert.equal(manifest.name, "Baron Aerial Media");
  for (const icon of manifest.icons) assert(fs.existsSync("public" + icon.src));
});
test("FAA snapshot is geographic, dated and explicit about units", () => {
  const d = JSON.parse(fs.readFileSync("src/data/laanc-ewr.json"));
  assert(d.cells.length > 100);
  assert(d.url.startsWith("https://services6.arcgis.com/ssFJjBXIUyZDrSYZ/"));
  assert.equal(new Set(d.cells.map((c) => c.id)).size, d.cells.length);
  assert(d.cells.some((c) => c.ceiling === 0));
  assert(d.cells.some((c) => c.ceiling === 400));
  for (const c of d.cells) {
    assert(c.lat >= 40 && c.lat <= 41);
    assert(c.lon > -75 && c.lon < -74);
    assert(c.ceiling >= 0 && c.ceiling <= 400);
    assert(c.effective);
  }
});
test("reviewed media is unique, described, sized and has existing variants", () => {
  const m = JSON.parse(fs.readFileSync("src/data/assets.manifest.json"));
  const hashes = new Set();
  for (const a of Object.values(m.assets)) {
    assert(a.alt.length > 15);
    assert(a.width > 0 && a.height > 0);
    assert(!hashes.has(a.sha256));
    hashes.add(a.sha256);
    for (const v of a.variants) assert(fs.existsSync("public" + v.src));
  }
  for (const id of Object.values(m.paths)) assert(m.assets[id]);
});
