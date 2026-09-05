import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { CtaBand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { FieldClip } from "@/components/field-film";
import { ProcessStrip } from "@/components/process-strip";
import { TiltCard } from "@/components/tilt-card";
import { SurveyStudio } from "@/components/survey-studio";
import { disclaimer, serviceBySlug, services, work } from "@/data/site";

export const Route = createFileRoute("/capabilities/$slug")({
  component: ServicePage,
  loader: ({ params }) => {
    const service = serviceBySlug(params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => ({
    title: `${loaderData?.name ?? "Capability"} — Baron Aerial Media`,
    meta: [{ name: "description", content: loaderData?.summary ?? "" }],
  }),
});

function ServicePage() {
  const service = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const related = service.relatedWork ? work.find((w) => w.slug === service.relatedWork) : undefined;

  return (
    <PageShell tone="light">
      <section className="relative min-h-[70vh] overflow-hidden">
        <img src={service.image} alt={service.summary} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/65 to-ink/20" />
        <div className="site-container relative grid max-w-2xl gap-4 pb-16 pt-36">
          <p className="eyebrow">{service.eyebrow}</p>
          <h1 className="text-[clamp(2.4rem,6vw,4.4rem)] text-fg">{service.name}</h1>
          <p className="lead">{service.summary}</p>
          <div>
            <Button asChild>
              <Link to="/contact">Plan a Mission</Link>
            </Button>
          </div>
        </div>
      </section>

      <ProcessStrip tone="light" />

      <section className="site-container grid gap-10 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="eyebrow">Planned around the operating need</p>
          <h2 className="mt-3 text-[clamp(1.7rem,3vw,2.6rem)]">Useful visual context, with clear boundaries.</h2>
          <p className="mt-4 text-ink-muted">{service.summary}</p>
          <p className="mt-4 text-ink-muted">
            Built for {service.forWhom} Every assignment begins with the decision the media needs to support,
            the site, access, requested timing, and intended output.
          </p>
          <p className="mt-4 text-sm text-paper-muted">{disclaimer}</p>
        </div>
        <div className="rounded-xl bg-fg p-8 shadow-[0_0_0_1px_var(--color-paper-line)]">
          <h3 className="text-lg">Typical deliverables</h3>
          <ul className="mt-5 grid gap-3">
            {service.deliverables.map((d) => (
              <li key={d} className="border-b border-paper-line pb-3 font-display text-ink-text last:border-0">
                {d}
              </li>
            ))}
          </ul>
          <Button asChild className="mt-6">
            <Link to="/contact">Start a brief</Link>
          </Button>
        </div>
      </section>

      {service.slug === "real-estate" ? (
        <section className="border-y border-paper-line bg-ink py-16 md:py-20">
          <div className="site-container grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="eyebrow">Listing Film</p>
              <h2 className="mt-3 text-[clamp(1.7rem,3vw,2.6rem)] text-fg">Last light over the block.</h2>
              <p className="mt-4 max-w-[54ch] text-fg-soft">
                An eight-second twilight flyover of a North Jersey neighborhood — roofs, streets, parked
                cars. Listing film is a deliverable, not a leftover clip from stills. Ground photography
                cannot show how a property sits in its block. Altitude can.
              </p>
            </div>
            <div className="media-frame overflow-hidden rounded-md">
              <FieldClip
                src="/media/neighborhood-film.mp4"
                poster="/media/neighborhood-film.webp"
                alt="Twilight aerial flyover of a North Jersey neighborhood — roofs, streets, parked cars"
              />
            </div>
          </div>
        </section>
      ) : null}

      {service.slug === "construction" ? (
        <section className="border-y border-paper-line bg-ink py-16 md:py-20">
          <div className="site-container grid gap-8 md:grid-cols-2">
            <div>
              <p className="eyebrow">Construction Tracking</p>
              <h2 className="mt-3 text-[clamp(1.7rem,3vw,2.6rem)] text-fg">I-280 overhead. Brick Church below it.</h2>
              <p className="mt-4 max-w-[54ch] text-fg-soft">
                Repeatable viewpoints of NJDOT’s North Munn Avenue Bridge replacement over I-280,
                then ground hyperlapse of The Crossings at Brick Church Station — Embark apartments at
                the train station and the new ShopRite. Process and Deliver are where the comparison
                set is built. The bridge project runs through spring 2028.
              </p>
            </div>
            <div className="grid gap-3">
              <div className="media-frame overflow-hidden rounded-md">
                <FieldClip
                  src="/media/overpass.mp4"
                  poster="/media/overpass.webp"
                  alt="Nadir hold over the North Munn Avenue Bridge over I-280"
                />
              </div>
              <div className="media-frame overflow-hidden rounded-md">
                <FieldClip
                  src="/media/jobsite-ground.mp4"
                  poster="/media/jobsite-ground.webp"
                  alt="Ground-level film of crew and dump trucks at the North Munn Avenue Bridge over I-280"
                />
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {service.slug === "mapping" ? (
        <section className="border-y border-paper-line bg-ink py-16 md:py-20">
          <div className="site-container">
            <p className="eyebrow">Photogrammetry, on Kuzuri Kijiji</p>
            <h2 className="mt-3 max-w-[22ch] text-[clamp(1.7rem,3vw,2.6rem)] text-fg">
              Pattern is a decision — not a style filter.
            </h2>
            <p className="mt-4 max-w-[62ch] text-fg-soft">
              Switch nadir, crosshatch, oblique, and the path actually flown over Kuzuri Kijiji at
              19 Freeway Drive East, East Orange, on July 6, 2026. Overlap, GSD, and what the
              reconstructor can solve all change with the path. The ortho shows the existing 1973
              townhouses, not the approved redevelopment.
            </p>
            <div className="mt-8">
              <SurveyStudio ground="/media/kiji-ortho.webp" />
            </div>
            <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
              <img
                src="/media/photogrammetry-cameras.webp"
                alt="Photogrammetry camera stations around a reconstructed 3D building model — numbered capture positions and coverage overlay"
                className="media-frame w-full rounded-md bg-ink-2 object-contain"
              />
              <div>
                <p className="eyebrow">Process, not a pretty JPEG</p>
                <h3 className="mt-2 text-2xl text-fg">Camera stations around the mesh.</h3>
                <p className="mt-3 text-fg-soft">
                  After the flight, software aligns each frame to a 3D model. Numbered spheres are
                  camera stations. The colored overlay is coverage. This is what a mapping deliverable
                  can include alongside the orthomosaic — so a GC or planner can see how the model was
                  built, not just the flattened map.
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {related ? (
        <section className="site-container py-16">
          <p className="eyebrow">Selected sample</p>
          <h2 className="mt-3 text-[clamp(1.7rem,3vw,2.4rem)]">{related.title}</h2>
          <p className="mt-4 max-w-[58ch] text-ink-muted">{related.summary}</p>
          <Link
            to="/work/$slug"
            params={{ slug: related.slug }}
            className="mt-8 grid overflow-hidden rounded-lg bg-fg shadow-[0_0_0_1px_var(--color-paper-line)] md:grid-cols-2"
          >
            <img src={related.image} alt="" className="aspect-[16/10] w-full object-cover" />
            <div className="flex flex-col justify-center p-7">
              <p className="font-display text-xs font-semibold tracking-[0.12em] text-green-deep uppercase">
                {related.category}
              </p>
              <h3 className="mt-2 text-2xl text-ink-text">{related.title}</h3>
              <p className="mt-3 text-sm text-ink-muted">{related.summary}</p>
              <span className="mt-5 font-display text-sm font-semibold text-green-deep">Open the case study →</span>
            </div>
          </Link>
        </section>
      ) : null}

      <section className="site-container pb-16">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl">Other paths</h2>
          <Link to="/capabilities" className="font-display text-sm font-semibold text-green-deep">
            All capabilities →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {others.map((o) => (
            <TiltCard key={o.slug}>
              <Link
                to="/capabilities/$slug"
                params={{ slug: o.slug }}
                className="group block overflow-hidden rounded-lg bg-fg shadow-[0_0_0_1px_var(--color-paper-line)]"
              >
                <img src={o.image} alt="" className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <p className="p-4 font-display font-semibold text-ink-text">{o.name}</p>
              </Link>
            </TiltCard>
          ))}
        </div>
      </section>
      <CtaBand />
    </PageShell>
  );
}
