import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { DeliverablesSection } from "@/components/deliverables-section";
import { FieldFilm } from "@/components/field-film";
import { FieldStills } from "@/components/field-stills";
import { ImageCard } from "@/components/image-card";
import { PageShell } from "@/components/page-shell";
import { PreflightSection } from "@/components/preflight-section";
import { ProcessStrip } from "@/components/process-strip";
import { Reveal } from "@/components/reveal";
import { audiences, brand, services } from "@/data/site";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    title: "Baron Aerial Media — Altitude Changes Everything",
    meta: [
      {
        name: "description",
        content:
          "FAA Part 107 aerial imaging from Newark, New Jersey. Listings, jobsites, claims, roofs, and site maps — planned against LAANC, Part 107 Waivers, SGI Waivers, and the site itself.",
      },
    ],
  }),
});

function Home() {
  const homeServices = services.filter((s) => s.slug !== "events");

  return (
    <PageShell tone="dark">
      <section className="relative flex min-h-svh items-center overflow-hidden pt-24">
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <img
            src="/media/city-dusk.webp"
            alt="Dense city blocks, roads, and tree canopy at dusk — July 8, 2026"
            className="ken-burns"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,var(--color-ink)_0%,rgba(10,14,10,0.78)_52%,rgba(10,14,10,0.28)_100%),linear-gradient(0deg,var(--color-ink)_4%,transparent_52%)]" />

        <div className="site-container stagger-in relative z-[2] grid max-w-3xl gap-6 py-16">
          <p className="eyebrow">
            {brand.part107} · {brand.city}
          </p>
          <h1 className="text-[clamp(2.7rem,7vw,5.4rem)] text-fg">{brand.tagline}</h1>
          <p className="font-display text-xl font-medium text-green md:text-2xl">{brand.altTagline}.</p>
          <p className="lead">
            Owner-operated aerial imaging for listings, jobsites, claims, roofs, and site maps. We
            take the goal, the site, and the window from you first — then screen Airspace Class,
            LAANC, Part 107 Waivers, SGI Waivers, TFRs, and local permits. The flight is only half
            the job. Processing and deliverables are the product your team files.
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/contact">Plan a Mission</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/work">View the work</Link>
            </Button>
          </div>
          <p className="text-sm text-muted">
            Behind this headline: a July 8 dusk still of dense city fabric — roofs, roads, and canopy
            in one frame. Two field films are one scroll down.
          </p>
        </div>
      </section>

      <ProcessStrip />
      <FieldFilm />
      <PreflightSection tone="dark" />
      <FieldStills tone="dark" />
      <DeliverablesSection tone="dark" />

      <section className="border-t border-line py-20 md:py-28">
        <div className="site-container">
          <Reveal>
            <p className="eyebrow">{brand.altTagline}</p>
            <h2 className="mt-3 max-w-[22ch] text-[clamp(1.9rem,4vw,3.1rem)] text-fg">
              What altitude is for, depending on who is asking.
            </h2>
          </Reveal>
          <div className="mt-10 grid border border-line sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a, i) => (
              <Reveal key={a.title} delay={i * 70}>
                <article className="h-full border-b border-line p-7 last:border-b-0 sm:border-r lg:border-b-0">
                  <h3 className="text-base text-fg">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{a.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container py-20 md:py-28">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Capabilities</p>
              <h2 className="mt-2 text-[clamp(1.9rem,4vw,3.1rem)] text-fg">
                Pick the decision. We plan the flight around it.
              </h2>
            </div>
            <Link to="/capabilities" className="inline-flex items-center gap-1 font-display text-sm font-semibold text-green">
              All capabilities
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          {homeServices.slice(0, 2).map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <ImageCard slug={s.slug} image={s.image} title={s.name} body={s.summary} kicker={s.eyebrow} tall />
            </Reveal>
          ))}
          {homeServices.slice(2).map((s, i) => (
            <Reveal key={s.slug} delay={80 + i * 70}>
              <ImageCard slug={s.slug} image={s.image} title={s.name} body={s.summary} kicker={s.eyebrow} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative min-h-[52vh] overflow-hidden">
        <img
          src="/media/about-panorama.webp"
          alt="Coastal aerial with marina slips, a pier, and high-rises"
          className="ken-burns absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/20" />
        <div className="site-container relative grid max-w-xl gap-4 py-24">
          <Reveal>
            <p className="eyebrow">{brand.tagline}</p>
            <h2 className="text-[clamp(1.9rem,4vw,3.1rem)] text-fg">
              Start with the site and the goal — not a date on a calendar.
            </h2>
            <p className="lead">
              The Mission Planner maps your objective to a workflow. The brief captures site, timing,
              constraints, and outputs. Then we review LAANC, Part 107 Waivers, SGI Waivers, and whether
              the shot is actually flyable.
            </p>
            <div className="mt-4">
              <Button asChild>
                <Link to="/mission-planner">Open Mission Planner</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand tone="dark" />
    </PageShell>
  );
}
