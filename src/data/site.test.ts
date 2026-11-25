import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";

const tagline = "Altitude Changes Everything™";
const altTagline = "From Rooftops to Bottomlines™";

function read(path: string) {
  return readFileSync(new URL(path, import.meta.url), "utf8");
}

const site = read("./site.ts");
const manifest = JSON.parse(read("../../public/site.webmanifest")) as { description: string };

describe("locked slogans", () => {
  it("stores each slogan once, with no exclamation mark and no split Bottom Lines", () => {
    assert.equal(site.split(tagline).length - 1, 1);
    assert.equal(site.split(altTagline).length - 1, 1);
    assert.equal(site.includes("Altitude Changes Everything!"), false);
    assert.equal(site.includes("Everything!"), false);
    assert.equal(site.includes("Bottom Lines"), false);
    assert.equal(site.includes("Bottom lines"), false);
  });

  it("leaves the public phone unset and does not embed a number", () => {
    assert.match(site, /phone:\s*undefined as string \| undefined/);
    assert.equal(site.includes("551-332-9929"), false);
    assert.equal(/tel:/.test(site), false);
  });

  it("keeps header nav as Work, Services, About", () => {
    const nav = site.slice(site.indexOf("export const nav"), site.indexOf("] as const;", site.indexOf("export const nav")));
    assert.match(nav, /to: "\/work", label: "Work"/);
    assert.match(nav, /to: "\/capabilities", label: "Services"/);
    assert.match(nav, /to: "\/about", label: "About"/);
    assert.equal(nav.includes("/trust"), false);
    assert.equal(nav.includes("Capabilities"), false);
    assert.ok(nav.indexOf("/work") < nav.indexOf("/capabilities"));
    assert.ok(nav.indexOf("/capabilities") < nav.indexOf("/about"));
  });

  it("locks the quote CTA label in site data", () => {
    assert.equal(site.split('label: "Get a Quote"').length - 1, 1);
    assert.match(site, /to: "\/contact"/);
  });

  it("puts the plain tagline in the web manifest", () => {
    assert.equal(manifest.description.includes(tagline), true);
    assert.equal(manifest.description.includes("Everything!"), false);
  });
});

describe("site chrome copies", () => {
  const chrome = [
    "../components/site-header.tsx",
    "../components/site-footer.tsx",
    "../components/cta-band.tsx",
    "../components/mobile-quote-bar.tsx",
  ];

  it("uses the shared quote CTA and does not keep Plan a Mission", () => {
    for (const file of chrome) {
      const text = read(file);
      assert.equal(text.includes("primaryCta"), true, file);
      assert.equal(text.includes("Plan a Mission"), false, file);
      assert.equal(text.includes("Plan a Drone Mission"), false, file);
    }
  });

  it("moves Airspace + Compliance into the footer and drops staff, insured, and price copy", () => {
    const footer = read("../components/site-footer.tsx");
    assert.equal(footer.includes("Airspace + Compliance"), true);
    assert.equal(footer.includes("Trust + Safety"), true);
    assert.equal(footer.includes("Insured"), false);
    assert.equal(footer.includes("/staff/"), false);
    assert.equal(/\$\d/.test(footer), false);
  });
});
