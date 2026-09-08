import { MediaImage } from "@/components/media-image";
import { seo } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { PageHero, PageShell } from "@/components/page-shell";
import { PreflightSection } from "@/components/preflight-section";
import { ProcessStrip } from "@/components/process-strip";
import { Reveal } from "@/components/reveal";
import { brand, disclaimer, trustChecks } from "@/data/site";

export const Route = createFileRoute("/trust")({
  component: TrustPage,
  head: () => seo({ title: "Trust + Safety — Baron Aerial Media", description: "Preflight planning at Baron Aerial Media: LAANC authorization around EWR, Part 107 Waivers, SGI Waivers for qualifying operations including National Security Event TFRs, and site/weather screening.", path: "/trust" }),
});

function TrustPage() {
  return (
    <PageShell tone="light">
      <PageHero
        eyebrow="Trust, Safety + Compliance"
        title="Clear status before, during, and after the flight."
        lead="A requested date is planning input. LAANC, a Part 107 Waiver, or SGI Waivers can still change what is operationally possible — and so can weather, access, National Security Events, and people on the ground."
      />

      <ProcessStrip tone="light" />
      <PreflightSection tone="light" />

      <section className="site-container grid items-start gap-10 py-16 md:grid-cols-2 md:py-24">
        <Reveal>
          <div className="media-frame min-h-[22rem] overflow-hidden rounded-lg md:min-h-[28rem]">
            <MediaImage
              src="/media/featured-night.webp"
              alt="Lit parking lot, cars, and neighborhood streets after dark"
              className="ken-burns"
            />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <p className="eyebrow">Operating discipline</p>
          <h2 className="mt-2 text-[clamp(1.7rem,3vw,2.6rem)]">What we review before committing.</h2>
          <ul className="mt-6 grid gap-3">
            {trustChecks.map((item) => (
              <li
                key={item}
                className="border-b border-paper-line pb-3 font-display text-ink-text last:border-0"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-ink-muted">
            {brand.name} is {brand.part107} certified and owner-operated from {brand.city}. We fly only when the
            environment, authorization, and requested deliverables line up. {disclaimer} Visual
            documentation is not an engineering inspection, survey plat, or condition certification unless
            a written scope says otherwise.
          </p>
          <Button asChild className="mt-8">
            <Link to="/contact">Plan a mission</Link>
          </Button>
        </Reveal>
      </section>
      <CtaBand />
    </PageShell>
  );
}
