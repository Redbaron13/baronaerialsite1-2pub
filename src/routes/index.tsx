import { MediaImage } from "@/components/media-image";
import { seo } from "@/lib/seo";
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
  head: () =>
    seo({
      title: "Baron Aerial Media — Altitude Changes Everything",
      description:
        "FAA Part 107 aerial imaging from Newark, New Jersey. Listings, jobsites, claims, roofs, and site maps — planned against LAANC, Part 107 Waivers, SGI Waivers, and the site itself.",
      path: "/",
    }),
});

function Home() {
  const homeServices = services.filter((s) => s.slug !== "events");

  return (
    <PageShell tone="dark">
      <section className="photo-hero relative isolate flex min-h-svh items-center overflow-hidden pt-24">
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <MediaImage
            src="/media/city-dusk.webp"
            loading="eager"
            fetchPriority="high"
            alt="Dense city blocks, roads, and tree canopy at dusk — July 8, 2026"
            className="ken-burns"
          />
        </div>
        <div className="hero-scrim absolute inset-0 -z-10" />

        <div className="site-container stagger-in home-hero-content relative z-[2] grid gap-6 py-16">
          <p className="eyebrow">
            {brand.part107} · {brand.city}
          </p>
          <h1 className="max-w-[14ch] text-[clamp(2.7rem,7vw,5rem)] text-fg">{brand.tagline}</h1>
          <p className="font-display text-xl font-medium text-green md:text-2xl">
            {brand.altTagline}.
          </p>
          <p className="lead">
            Aerial photographs, films, and site maps for property and project teams across
            North Jersey. Tell us the site and the decision you need to make. We plan the
            capture and deliver a clear, organized set your team can use.
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
            Explore the North Munn bridge documentation, Hainesport listing media, and Kuzuri Kijiji
            mapping packet.
          </p>
        </div>
      </section>

      <ProcessStrip />
      <FieldFilm />
      <PreflightSection tone="dark" />
      <FieldStills tone="dark" compact />
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
            <Link
              to="/capabilities"
              className="inline-flex items-center gap-1 font-display text-sm font-semibold text-green"
            >
              All capabilities
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          {homeServices.slice(0, 2).map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <ImageCard
                slug={s.slug}
                image={s.image}
                title={s.name}
                body={s.summary}
                kicker={s.eyebrow}
                tall
              />
            </Reveal>
          ))}
          {homeServices.slice(2).map((s, i) => (
            <Reveal key={s.slug} delay={80 + i * 70}>
              <ImageCard
                slug={s.slug}
                image={s.image}
                title={s.name}
                body={s.summary}
                kicker={s.eyebrow}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="photo-hero relative isolate min-h-[52vh] overflow-hidden">
        <MediaImage
          src="/media/city-dusk.webp"
          alt="City blocks, roads and tree canopy at dusk"
          className="ken-burns absolute inset-0"
        />
        <div className="hero-scrim absolute inset-0" />
        <div className="site-container relative grid max-w-xl gap-4 py-24">
          <Reveal>
            <p className="eyebrow">{brand.tagline}</p>
            <h2 className="text-[clamp(1.9rem,4vw,3.1rem)] text-fg">
              Start with the site and the goal — not a date on a calendar.
            </h2>
            <p className="lead">
              The Mission Planner maps your objective to a workflow. The brief captures site,
              timing, constraints, and outputs. Then we review LAANC, Part 107 Waivers, SGI Waivers,
              and whether the shot is actually flyable.
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
