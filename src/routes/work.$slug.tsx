import { MediaImage } from "@/components/media-image";
import { seo } from "@/lib/seo";
import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { CtaBand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/tilt-card";
import { FieldClip } from "@/components/field-film";
import { OrthoStageLazy } from "@/components/webgl/lazy";
import { SurveyStudio } from "@/components/survey-studio";
import { disclaimer, work } from "@/data/site";

export const Route = createFileRoute("/work/$slug")({
  component: WorkDetail,
  loader: ({ params }) => {
    const aliases: Record<string, string> = {
      "jobsite-cut": "bancroft-listing",
      "envelope-close": "water-tower",
      "rail-station": "north-munn-bridge",
      "twilight-neighborhood": "north-munn-bridge",
      "warehouse-sunset": "north-munn-bridge",
      "night-lots": "north-munn-bridge",
      "recreation-field": "north-munn-bridge",
      "city-dusk": "city-context",
      "night-plaza": "night-highway",
      "east-orange-cityscape": "city-context",
    };
    if (aliases[params.slug])
      throw redirect({
        to: "/work/$slug",
        params: { slug: aliases[params.slug] },
        statusCode: 301,
      });
    const item = work.find((w) => w.slug === params.slug);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) =>
    seo({
      title: `${loaderData?.title ?? "Work"} — Baron Aerial Media`,
      description: loaderData?.summary ?? "",
      path: `/work/${loaderData?.slug ?? ""}`,
      image: loaderData?.image,
      type: "article",
    }),
});

function WorkDetail() {
  const item = Route.useLoaderData();
  const others = work.filter((w) => w.slug !== item.slug).slice(0, 3);

  return (
    <PageShell tone="light">
      <section className="photo-hero relative isolate min-h-[70vh] overflow-hidden bg-ink">
        <MediaImage
          src={item.image}
          alt={item.summary}
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="hero-scrim absolute inset-0" />
        <div className="site-container relative grid max-w-2xl gap-4 pb-16 pt-36">
          <p className="eyebrow">{item.category}</p>
          <h1 className="text-[clamp(2.4rem,6vw,4.4rem)] text-fg">{item.title}</h1>
          <p className="lead">{item.summary}</p>
        </div>
      </section>

      <section className="site-container grid gap-10 py-16 md:grid-cols-[1.3fr_0.8fr] md:py-24">
        <div>
          <h2 className="text-[clamp(1.7rem,3vw,2.4rem)]">What this capture was for.</h2>
          <p className="mt-4 max-w-[54ch] text-ink-muted">
            {item.mission}. The packet includes {item.outputs.toLowerCase()}.
          </p>
          {item.notes ? (
            <p className="mt-4 max-w-[58ch] text-sm leading-relaxed text-ink-muted">{item.notes}</p>
          ) : null}
          <p className="mt-4 max-w-[54ch] text-sm text-paper-muted">{disclaimer}</p>
        </div>
        <div className="rounded-xl bg-fg p-7 shadow-[0_0_0_1px_var(--color-paper-line)]">
          <Row label="Mission" value={item.mission} />
          <Row label="Outputs" value={item.outputs} />
          <Row label="Category" value={item.category} last={!item.stats} />
          {item.stats?.map((s, i) => (
            <Row
              key={s.label}
              label={s.label}
              value={s.value}
              last={i === item.stats!.length - 1}
            />
          ))}
          <Button asChild className="mt-6 w-full">
            <Link to="/contact">Plan a similar mission</Link>
          </Button>
        </div>
      </section>

      {item.slug === "kuzuri-kijiji" ? (
        <>
          <section className="border-y border-paper-line bg-ink py-16 md:py-20">
            <div className="site-container">
              <p className="eyebrow">How photogrammetry is flown</p>
              <h2 className="mt-3 max-w-[22ch] text-[clamp(1.7rem,3vw,2.6rem)] text-fg">
                Kuzuri Kijiji. Capture with a purpose.
              </h2>
              <p className="mt-4 max-w-[62ch] text-fg-soft">
                Kuzuri Kijiji, East Orange — 19 Freeway Drive East, July 6, 2026, 123 frames, 99.7%
                coverage, 1.24 in/px. The 1973 cooperative townhouses (Beautiful Village) and the
                surrounding block, near I-280 and the Garden State Parkway. Switch a pattern to see
                what nadir, crosshatch, and oblique actually do. Paths illustrate capture
                strategies; they are not a replay of flight telemetry.
              </p>
              <div className="mt-8">
                <SurveyStudio ground="/media/kiji-ortho.webp" />
              </div>
            </div>
          </section>
          <section className="border-b border-paper-line bg-ink py-16 md:py-20">
            <div className="site-container grid items-center gap-10 md:grid-cols-2">
              <div>
                <p className="eyebrow">Site model</p>
                <h2 className="mt-3 text-[clamp(1.7rem,3vw,2.4rem)] text-fg">
                  One capture. Separate deliverables.
                </h2>
                <p className="mt-4 max-w-[52ch] text-fg-soft">
                  Explore the orthomosaic and elevation visualization as separate layers. The color
                  DEM is shown as a reference image; accurate terrain geometry requires a calibrated
                  elevation export.
                </p>
              </div>
              <div className="relative min-w-0">
                <OrthoStageLazy
                  colorMap="/media/kiji-ortho.webp"
                  elevMap="/media/kiji-dem.webp"
                  className="w-full"
                />
              </div>
            </div>
          </section>
          <section className="border-b border-paper-line bg-ink py-16 md:py-20">
            <div className="site-container grid items-center gap-10 md:grid-cols-2">
              <div className="media-frame overflow-hidden rounded-md bg-ink-2">
                <MediaImage
                  src="/media/kiji-coverage.webp"
                  alt="Kuzuri Kijiji photogrammetry image coverage visualization"
                  className="w-full object-contain"
                />
              </div>
              <div>
                <p className="eyebrow">How the mesh is built</p>
                <h2 className="mt-3 text-[clamp(1.7rem,3vw,2.4rem)] text-fg">
                  Coverage across the captured site.
                </h2>
                <p className="mt-4 max-w-[52ch] text-fg-soft">
                  After capture, each frame is aligned to a 3D model. Capture locations and the
                  colored coverage layer describe the source imagery. A mapping packet can include
                  this diagram with the orthomosaic so a GC or planner can see how the model was
                  built. This still is a reconstruction report from Baron Aerial Media processing —
                  the coverage visualization accompanying this site’s mapping packet.
                </p>
              </div>
            </div>
          </section>
        </>
      ) : null}

      {item.film && (
        <section className="site-container pb-16">
          <h2 className="mb-6 text-2xl">Field film</h2>
          <FieldClip
            src={item.film}
            poster={
              item.slug === "north-munn-bridge" ? "/media/bridge-film-poster.webp" : item.image
            }
            alt={item.title}
          />
        </section>
      )}
      {item.gallery && item.gallery.length > 0 ? (
        <section className="site-container pb-16 pt-16">
          <h2 className="mb-6 text-2xl">Deliverable stills</h2>
          <div
            className={
              item.gallery.length === 2 ? "grid gap-4 md:grid-cols-2" : "grid gap-4 md:grid-cols-3"
            }
          >
            {item.gallery.map((g) => (
              <TiltCard key={g.src + g.caption}>
                <figure className="overflow-hidden rounded-lg bg-fg shadow-[0_0_0_1px_var(--color-paper-line)]">
                  <MediaImage
                    src={g.src}
                    alt={g.caption}
                    className={
                      item.galleryFit === "contain"
                        ? "aspect-[4/5] w-full bg-paper-2 object-contain"
                        : "aspect-[16/10] w-full object-cover"
                    }
                  />
                  <figcaption className="p-4 text-sm text-ink-muted">{g.caption}</figcaption>
                </figure>
              </TiltCard>
            ))}
          </div>
        </section>
      ) : null}

      <section className="site-container pb-16">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl">More work</h2>
          <Link to="/work" className="font-display text-sm font-semibold text-green-deep">
            Back to gallery →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {others.map((o) => (
            <TiltCard key={o.slug}>
              <Link
                to="/work/$slug"
                params={{ slug: o.slug }}
                className="group block overflow-hidden rounded-lg bg-fg"
              >
                <MediaImage
                  src={o.image}
                  alt=""
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <p className="p-4 font-display font-semibold text-ink-text">{o.title}</p>
              </Link>
            </TiltCard>
          ))}
        </div>
      </section>
      <CtaBand />
    </PageShell>
  );
}

function Row({ label, value, last }: { label: string; value: string; last?: boolean }) {
  return (
    <div className={last ? "py-3" : "border-b border-paper-line py-3"}>
      <p className="font-display text-xs font-semibold tracking-[0.12em] text-green-deep uppercase">
        {label}
      </p>
      <p className="mt-1 font-display text-ink-text">{value}</p>
    </div>
  );
}
