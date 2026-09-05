import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { PageHero, PageShell } from "@/components/page-shell";
import { PreflightSection } from "@/components/preflight-section";
import { ProcessStrip } from "@/components/process-strip";
import { TiltCard } from "@/components/tilt-card";
import { brand, process } from "@/data/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    title: "About — Baron Aerial Media",
    meta: [
      {
        name: "description",
        content:
          "Owner-operated, FAA Part 107 commercial drone work out of Newark, New Jersey. The flight is only one part of the work.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <PageShell tone="light">
      <PageHero
        eyebrow="Owner-operated"
        title="The flight is only one part of the work."
        lead={`${brand.tagline}. ${brand.name} plans the capture, screens the operating environment, and organizes media around a real decision — not just a flight.`}
      />

      <section className="site-container grid items-start gap-10 pb-16 md:grid-cols-2">
        <div>
          <img
            src="/brand/logo-lockup.png"
            alt="Baron Aerial Media — Altitude Changes Everything"
            className="mb-8 max-w-[16rem]"
          />
          <h2 className="text-[clamp(1.7rem,3vw,2.6rem)]">Aerial work with a purpose behind every flight.</h2>
          <p className="mt-4 text-ink-muted">
            {brand.name} is an owner-operated commercial drone practice based in {brand.city}, serving{" "}
            {brand.serviceArea}. We are {brand.part107} certified. Every project starts with the outcome
            — a listing that sells, a site that’s documented, an asset that’s inspected without putting
            a crew on a roof.
          </p>
          <p className="mt-4 text-ink-muted">
            From there we plan the flight, screen airspace (LAANC, Part 107 Waivers, and SGI Waivers when the
            mission qualifies — including commercial work inside a National Security Event TFR with FAA
            coordination), capture at high resolution, process into the right deliverable, and hand
            it off the way you actually work. We document what is visible. We do not certify engineering
            condition, and a requested date is planning input — not a flight commitment — until airspace,
            access, and weather clear.
          </p>
          <Button asChild className="mt-8">
            <Link to="/contact">Plan a Mission</Link>
          </Button>
        </div>
        <TiltCard max={5}>
          <img
            src="/media/about-panorama.webp"
            alt="Coastal aerial with marina slips, a pier, and high-rises"
            className="media-frame min-h-[22rem] w-full rounded-lg object-cover md:min-h-[32rem]"
          />
        </TiltCard>
      </section>

      <div className="site-container grid gap-3 pb-16 sm:grid-cols-4">
        {[
          ["107", "Part 107 Remote Pilot"],
          ["EWR", "Newark Class B screened"],
          ["NJ", "North Jersey + NY metro"],
          ["E2E", "Brief → Deliver"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-lg bg-fg px-5 py-6 shadow-[0_0_0_1px_var(--color-paper-line)]">
            <p className="font-display text-3xl text-ink-text">{k}</p>
            <p className="mt-1 font-display text-xs tracking-[0.12em] text-green-deep uppercase">{v}</p>
          </div>
        ))}
      </div>

      <ProcessStrip tone="light" />
      <PreflightSection tone="light" />

      <section className="site-container py-16 md:py-24">
        <p className="eyebrow">How we work</p>
        <h2 className="mt-2 mb-10 text-[clamp(1.7rem,3vw,2.6rem)]">Six stages, every mission.</h2>
        <ol className="grid gap-6 md:grid-cols-2">
          {process.map((s) => (
            <li key={s.n} className="rounded-lg bg-fg p-6 shadow-[0_0_0_1px_var(--color-paper-line)]">
              <p className="font-display text-sm text-green-deep">{s.n}</p>
              <h3 className="mt-1 text-xl">{s.title}</h3>
              <p className="mt-2 text-ink-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>
      <CtaBand />
    </PageShell>
  );
}
