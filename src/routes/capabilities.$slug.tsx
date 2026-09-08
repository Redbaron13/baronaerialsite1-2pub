import { MediaImage } from "@/components/media-image";
import { seo } from "@/lib/seo";
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
  head: ({ loaderData }) =>
    seo({
      title: `${loaderData?.name ?? "Capability"} — Baron Aerial Media`,
      description: loaderData?.summary ?? "",
      path: `/capabilities/${loaderData?.slug ?? ""}`,
      image: loaderData?.image,
      type: "article",
    }),
});

function ServicePage() {
  const service = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const related = service.relatedWork
    ? work.find((w) => w.slug === service.relatedWork)
    : undefined;

  return (
    <PageShell tone="light">
      <section className="photo-hero relative isolate min-h-[70vh] overflow-hidden">
        <MediaImage
          src={service.image}
          alt={service.summary}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="hero-scrim absolute inset-0" />
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
          <h2 className="mt-3 text-[clamp(1.7rem,3vw,2.6rem)]">
            Useful visual context, with clear boundaries.
          </h2>
          <p className="mt-4 text-ink-muted">{service.summary}</p>
          <p className="mt-4 text-ink-muted">
            Built for {service.forWhom} Every assignment begins with the decision the media needs to
            support, the site, access, requested timing, and intended output.
          </p>
          <aside className="scope-panel mt-6">
            <h3>Scope of work</h3>
            <p>
              Visual documentation supports qualified review. Cause, condition, engineering
              conclusions, and certified surveys require the appropriate professional and a written
              scope.
            </p>
            <p>{disclaimer}</p>
          </aside>
        </div>
        <div className="rounded-xl bg-fg p-8 shadow-[0_0_0_1px_var(--color-paper-line)]">
          <h3 className="text-lg">Typical deliverables</h3>
          <ul className="mt-5 grid gap-3">
            {service.deliverables.map((d) => (
              <li
                key={d}
                className="border-b border-paper-line pb-3 font-display text-ink-text last:border-0"
              >
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
              <h2 className="mt-3 text-[clamp(1.7rem,3vw,2.6rem)] text-fg">
                Last light over the block.
              </h2>
              <p className="mt-4 max-w-[54ch] text-fg-soft">
                Daylight promotional footage of Embark apartments and the new ShopRite at The
                Crossings. Listing film is a deliverable, not a leftover clip from stills. Ground
                photography cannot show how a property sits in its block. Altitude can.
              </p>
            </div>
            <div className="media-frame overflow-hidden rounded-md">
              <FieldClip
                src="/media/neighborhood-film.mp4"
                poster="/media/neighborhood-film.webp"
                alt="Daylight promotional flyover of Embark apartments and ShopRite at The Crossings"
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
              <h2 className="mt-3 text-[clamp(1.7rem,3vw,2.6rem)] text-fg">
                I-280 overhead. Brick Church below it.
              </h2>
              <p className="mt-4 max-w-[54ch] text-fg-soft">
                Repeatable viewpoints of NJDOT’s North Munn Avenue Bridge replacement over I-280,
                alongside daylight aerial context of The Crossings at Brick Church Station. Repeat
                visits can support comparison sets when capture dates and viewpoints are matched.
              </p>
            </div>
            <div className="grid gap-3">
              <div className="media-frame overflow-hidden rounded-md">
                <FieldClip
                  src="/media/overpass.mp4"
                  poster="/media/bridge-film-poster.webp"
                  alt="Nadir hold over the North Munn Avenue Bridge over I-280"
                />
              </div>
              <div className="media-frame overflow-hidden rounded-md">
                <FieldClip
                  src="/media/neighborhood-film.mp4"
                  poster="/media/neighborhood-film.webp"
                  alt="Daylight aerial film of The Crossings at Brick Church Station"
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
              Compare illustrative nadir, crosshatch, and orbit patterns over the Kuzuri Kijiji
              orthomosaic. The animated paths explain capture choices; they are not recorded flight
              telemetry. The source map shows the site as captured.
            </p>
            <div className="mt-8">
              <SurveyStudio ground="/media/kiji-ortho.webp" />
            </div>
            <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
              <MediaImage
                src="/media/kiji-coverage.webp"
                alt="Kuzuri Kijiji photogrammetry image coverage visualization"
                className="media-frame w-full rounded-md bg-ink-2 object-contain"
              />
              <div>
                <p className="eyebrow">Process, not a pretty JPEG</p>
                <h3 className="mt-2 text-2xl text-fg">Coverage across the site.</h3>
                <p className="mt-3 text-fg-soft">
                  After the flight, overlapping frames are aligned. The source coverage
                  visualization helps explain how imagery covers the site. This is what a mapping
                  deliverable can include alongside the orthomosaic — so a GC or planner can see how
                  the model was built, not just the flattened map.
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
            <MediaImage src={related.image} alt="" className="aspect-[16/10] w-full object-cover" />
            <div className="flex flex-col justify-center p-7">
              <p className="font-display text-xs font-semibold tracking-[0.12em] text-green-deep uppercase">
                {related.category}
              </p>
              <h3 className="mt-2 text-2xl text-ink-text">{related.title}</h3>
              <p className="mt-3 text-sm text-ink-muted">{related.summary}</p>
              <span className="mt-5 font-display text-sm font-semibold text-green-deep">
                Open the case study →
              </span>
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
                <MediaImage
                  src={o.image}
                  alt=""
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
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
