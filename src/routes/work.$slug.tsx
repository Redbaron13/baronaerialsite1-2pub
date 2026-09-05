import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { CtaBand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/tilt-card";
import { FieldClip } from "@/components/field-film";
import { OrthoStageLazy } from "@/components/webgl/lazy";
import { SurveyStudio } from "@/components/survey-studio";
import { disclaimer, work } from "@/data/site";
import { usePrefersReducedMotion } from "@/lib/motion";

export const Route = createFileRoute("/work/$slug")({
  component: WorkDetail,
  loader: ({ params }) => {
    const item = work.find((w) => w.slug === params.slug);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => ({
    title: `${loaderData?.title ?? "Work"} — Baron Aerial Media`,
    meta: [{ name: "description", content: loaderData?.summary ?? "" }],
  }),
});

function WorkDetail() {
  const item = Route.useLoaderData();
  const others = work.filter((w) => w.slug !== item.slug).slice(0, 3);
  const reduced = usePrefersReducedMotion();

  return (
    <PageShell tone="light">
      <section className="relative min-h-[70vh] overflow-hidden bg-ink">
        {item.film && !reduced ? (
          <video
            className="absolute inset-0 size-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={item.image}
            src={item.film}
          />
        ) : (
          <img src={item.image} alt={item.summary} className="ken-burns absolute inset-0 size-full object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/30" />
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
            {item.summary} Captured by Baron Aerial Media — planned around a usable output, not a stock plate.
          </p>
          {item.notes ? <p className="mt-4 max-w-[58ch] text-sm leading-relaxed text-ink-muted">{item.notes}</p> : null}
          <p className="mt-4 max-w-[54ch] text-sm text-paper-muted">{disclaimer}</p>
        </div>
        <div className="rounded-xl bg-fg p-7 shadow-[0_0_0_1px_var(--color-paper-line)]">
          <Row label="Mission" value={item.mission} />
          <Row label="Outputs" value={item.outputs} />
          <Row label="Category" value={item.category} last={!item.stats} />
          {item.stats?.map((s, i) => (
            <Row key={s.label} label={s.label} value={s.value} last={i === item.stats!.length - 1} />
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
                Kuzuri Kijiji. Four different paths. Four different maps.
              </h2>
              <p className="mt-4 max-w-[62ch] text-fg-soft">
                Kuzuri Kijiji, East Orange — 19 Freeway Drive East, July 6, 2026, 123 frames, 99.7%
                coverage, 1.24 in/px. The 1973 cooperative townhouses (Beautiful Village) and the
                surrounding block, near I-280 and the Garden State Parkway. Switch a pattern to see
                what nadir, crosshatch, and oblique actually do. The path we flew is labeled.
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
                <h2 className="mt-3 text-[clamp(1.7rem,3vw,2.4rem)] text-fg">Drag to orbit. Scroll to zoom.</h2>
                <p className="mt-4 max-w-[52ch] text-fg-soft">
                  Orthomosaic draped on the DEM from the same Kuzuri Kijiji capture. Grab the model —
                  it is a 3D packet, not a JPEG that wiggles.
                </p>
              </div>
              <div className="relative aspect-[4/3] min-h-[18rem] overflow-hidden rounded-md bg-ink media-frame">
                <OrthoStageLazy
                  colorMap="/media/kiji-ortho.webp"
                  elevMap="/media/kiji-dem.webp"
                  className="absolute inset-0 size-full"
                />
              </div>
            </div>
          </section>
          <section className="border-b border-paper-line bg-ink py-16 md:py-20">
            <div className="site-container grid items-center gap-10 md:grid-cols-2">
              <div className="media-frame overflow-hidden rounded-md bg-ink-2">
                <img
                  src="/media/photogrammetry-cameras.webp"
                  alt="Photogrammetry camera stations around a reconstructed 3D building model — numbered capture positions and coverage overlay"
                  className="w-full object-contain"
                />
              </div>
              <div>
                <p className="eyebrow">How the mesh is built</p>
                <h2 className="mt-3 text-[clamp(1.7rem,3vw,2.4rem)] text-fg">Camera stations, not a mystery box.</h2>
                <p className="mt-4 max-w-[52ch] text-fg-soft">
                  After capture, each frame is aligned to a 3D model. Numbered spheres are camera
                  stations. The colored overlay is coverage. A mapping packet can include this diagram
                  with the orthomosaic so a GC or planner can see how the model was built. This still
                  is a reconstruction report from Baron Aerial Media processing — a single-building
                  mesh, not the Kuzuri Kijiji ortho above.
                </p>
              </div>
            </div>
          </section>
        </>
      ) : null}

      {item.gallery && item.gallery.length > 0 ? (
        <section className="site-container pb-16 pt-16">
          <h2 className="mb-6 text-2xl">Deliverable stills</h2>
          <div className={item.gallery.length === 2 ? "grid gap-4 md:grid-cols-2" : "grid gap-4 md:grid-cols-3"}>
            {item.gallery.map((g) => (
              <TiltCard key={g.src + g.caption}>
                <figure className="overflow-hidden rounded-lg bg-fg shadow-[0_0_0_1px_var(--color-paper-line)]">
                  <img
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

      {item.slug === "north-munn-bridge" ? (
        <section className="site-container pb-16">
          <h2 className="mb-4 text-2xl">Ground Film On The I-280 Jobsite</h2>
          <p className="mb-6 max-w-[58ch] text-ink-muted">
            Crew, dump trucks, and the span from the dirt — twelve seconds at NJDOT’s North Munn
            Avenue Bridge replacement over I-280. Freeway Drive meets North Munn Avenue here. The
            Crossings at Brick Church Station stills from the same pass (Embark apartments and the
            new ShopRite) are a separate packet.
          </p>
          <div className="media-frame overflow-hidden rounded-lg bg-ink">
            <FieldClip
              src="/media/jobsite-ground.mp4"
              poster="/media/jobsite-ground.webp"
              alt="Ground-level film of crew and dump trucks at the North Munn Avenue Bridge over I-280"
            />
          </div>
          <Link
            to="/work/$slug"
            params={{ slug: "brick-church-village" }}
            className="mt-6 inline-flex font-display text-sm font-semibold text-green-deep"
          >
            Open The Crossings at Brick Church Station stills →
          </Link>
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
              <Link to="/work/$slug" params={{ slug: o.slug }} className="group block overflow-hidden rounded-lg bg-fg">
                <img src={o.image} alt="" className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
      <p className="font-display text-xs font-semibold tracking-[0.12em] text-green-deep uppercase">{label}</p>
      <p className="mt-1 font-display text-ink-text">{value}</p>
    </div>
  );
}
