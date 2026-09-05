import { Link } from "@tanstack/react-router";
import { usePrefersReducedMotion } from "@/lib/motion";
import { Reveal } from "@/components/reveal";

export function FieldClip({
  src,
  poster,
  alt,
  className = "aspect-video w-full object-cover",
}: {
  src: string;
  poster: string;
  alt: string;
  className?: string;
}) {
  const reduced = usePrefersReducedMotion();
  return (
    <video
      className={className}
      autoPlay={!reduced}
      muted
      loop
      playsInline
      controls
      poster={poster}
      preload="metadata"
      aria-label={alt}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export function FieldFilm() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="site-container mb-8">
        <Reveal>
          <p className="eyebrow">Field film · flown for work</p>
          <h2 className="mt-3 max-w-[20ch] text-[clamp(1.9rem,4vw,3.1rem)] text-fg">
            Two jobs. Two kinds of motion.
          </h2>
          <p className="lead mt-4">
            A planned nadir hold over NJDOT’s North Munn Avenue Bridge replacement over I-280, and a
            twilight promotional flyover of Embark apartments and the new ShopRite at The Crossings.
            Both play as film — not frozen posters.
          </p>
        </Reveal>
      </div>
      <div className="site-container grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="media-frame overflow-hidden rounded-lg bg-ink-2">
            <FieldClip
              src="/media/overpass.mp4"
              poster="/media/overpass.webp"
              alt="Nadir hold over the North Munn Avenue Bridge over I-280 — steel span, orange barrier, live interstate lanes"
            />
          </div>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
            <p className="font-display text-sm text-fg-soft">North Munn Avenue Bridge over I-280 · East Orange · Jun 2026 · 7.5 s nadir hold</p>
            <Link
              to="/work/$slug"
              params={{ slug: "north-munn-bridge" }}
              className="font-display text-sm font-semibold text-green"
            >
              Open the packet →
            </Link>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="media-frame overflow-hidden rounded-lg bg-ink-2">
            <FieldClip
              src="/media/neighborhood-film.mp4"
              poster="/media/neighborhood-film.webp"
              alt="Twilight promotional aerial flyover of Embark apartments and the new ShopRite at Brick Church Station"
            />
          </div>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
            <p className="font-display text-sm text-fg-soft">
              Embark + ShopRite at The Crossings · twilight promotional flyover · BAM-EO-CROSSINGS-202606
            </p>
            <Link
              to="/work/$slug"
              params={{ slug: "brick-church-village" }}
              className="font-display text-sm font-semibold text-green"
            >
              Open the case study →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
