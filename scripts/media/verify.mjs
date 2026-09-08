/** Catch invalid service imagery and stale routes before a release. */
import fs from "node:fs";
import assert from "node:assert/strict";
import ts from "typescript";
const manifest = JSON.parse(fs.readFileSync("src/data/assets.manifest.json", "utf8"));
const source = ts.createSourceFile(
  "site.ts",
  fs.readFileSync("src/data/site.ts", "utf8"),
  ts.ScriptTarget.Latest,
  true,
);
const collections = {};
function visit(node) {
  if (ts.isVariableDeclaration(node) && ["services", "work"].includes(node.name.getText(source))) {
    let arr = node.initializer;
    while (arr && (ts.isAsExpression(arr) || ts.isSatisfiesExpression(arr))) arr = arr.expression;
    assert(arr && ts.isArrayLiteralExpression(arr), "Expected literal content collection");
    collections[node.name.getText(source)] = arr.elements.map((item) => {
      const values = Object.fromEntries(
        item.properties
          .filter(ts.isPropertyAssignment)
          .map((p) => [p.name.getText(source).replaceAll('"', ""), p.initializer]),
      );
      const slug = values.slug.text;
      const id = values.assetId?.text;
      if (id) {
        const asset = manifest.assets[id];
        assert(asset, `Missing asset ${slug}: ${id}`);
        if (node.name.getText(source) === "services")
          assert(asset.serviceTags.includes(slug), `Unreviewed service image: ${slug}`);
      } else
        assert(
          values.assetId?.kind === ts.SyntaxKind.NullKeyword,
          `Missing media disposition: ${slug}`,
        );
      return slug;
    });
  }
  ts.forEachChild(node, visit);
}
visit(source);
const paths = [
  "/",
  "/work",
  "/capabilities",
  "/trust",
  "/about",
  "/contact",
  "/mission-planner",
  "/privacy",
  "/terms",
  "/accessibility",
  ...collections.services.map((s) => "/capabilities/" + s),
  ...collections.work.map((s) => "/work/" + s),
];
assert.equal(new Set(paths).size, paths.length);
fs.writeFileSync(
  "public/sitemap.xml",
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    paths.map((p) => `  <url><loc>https://baronaerial.com${p}</loc></url>`).join("\n") +
    "\n</urlset>\n",
);
console.log(`Verified reviewed media assignments and ${paths.length} sitemap routes.`);
