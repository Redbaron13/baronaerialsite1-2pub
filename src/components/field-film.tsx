import { MediaImage } from "@/components/media-image";
import { useEffect, useRef, useState } from "react";
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
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const video = ref.current;
    if (!video || !started) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) video.pause();
      },
      { threshold: 0.1 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [started]);
  return (
    <div className="relative">
      {started ? (
        <video
          ref={ref}
          className={className}
          autoPlay
          muted
          loop={!reduced}
          playsInline
          controls
          poster={poster}
          preload="none"
          aria-label={alt}
          src={src}
        />
      ) : (
        <button
          type="button"
          className="group relative block w-full"
          aria-label={`Play silent clip: ${alt}`}
          onClick={() => setStarted(true)}
        >
          <MediaImage src={poster} alt={alt} className={className} />
          <span className="absolute inset-0 grid place-items-center bg-ink/10">
            <span
              className="grid size-16 place-items-center rounded-full border border-white/60 bg-black/50 text-white backdrop-blur-sm"
              aria-hidden="true"
            >
              ▶
            </span>
          </span>
        </button>
      )}
      <span className="pointer-events-none absolute right-3 top-3 rounded-sm bg-black/70 px-2 py-1 text-xs text-white">
        Silent clip
      </span>
    </div>
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
            daylight promotional flyover of Embark apartments and the new ShopRite at The Crossings.
            Select a film to play it.
          </p>
        </Reveal>
      </div>
      <div className="site-container grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="media-frame overflow-hidden rounded-lg bg-ink-2">
            <FieldClip
              src="/media/overpass.mp4"
              poster="/media/bridge-film-poster.webp"
              alt="Nadir hold over the North Munn Avenue Bridge over I-280 — steel span, orange barrier, live interstate lanes"
            />
          </div>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
            <p className="font-display text-sm text-fg-soft">
              North Munn Avenue Bridge over I-280 · East Orange · Jun 2026 · 7.5 s nadir hold
            </p>
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
              alt="Daylight promotional aerial flyover of Embark apartments and the new ShopRite at Brick Church Station"
            />
          </div>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
            <p className="font-display text-sm text-fg-soft">
              Embark + ShopRite at The Crossings · daylight promotional flyover ·
              BAM-EO-CROSSINGS-202606
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
