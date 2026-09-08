import { MediaImage } from "@/components/media-image";
import { useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { FieldClip } from "@/components/field-film";
import { fieldJobs } from "@/data/site";
import { cn } from "@/lib/utils";

export function FieldStills({ tone = "dark", compact = false }: { tone?: "dark" | "light"; compact?: boolean }) {
  const light = tone === "light";
  const [expanded, setExpanded] = useState(!compact);
  const [density, setDensity] = useState<"all" | "half">("all");
  const [open, setOpen] = useState<{ job: string; index: number } | null>({
    job: fieldJobs[0]?.id ?? "",
    index: 0,
  });

  return (
    <section className={cn("py-20 md:py-28", light ? "bg-paper" : "border-t border-line")}>
      <div className="site-container">
        <Reveal>
          <p className="eyebrow">Field timeline · elected capture</p>
          <h2 className={cn("mt-3 max-w-[22ch] text-[clamp(1.9rem,4vw,3.1rem)]", light ? "text-ink-text" : "text-fg")}>
            One job, one identifier. Stills and film stay together.
          </h2>
          <p className={cn("lead mt-4 max-w-[62ch]", light ? "text-ink-muted" : "text-fg-soft")}>
            Browse the views and deliverables from each assignment. Select a frame to explore the site, then open its case study for the complete packet.
          </p>
        </Reveal>

        <div className="mt-6 flex flex-wrap gap-2">
          {(["all", "half"] as const).map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDensity(d)}
              className={cn(
                "inline-flex min-h-11 items-center rounded-pill px-4 font-display text-sm font-semibold",
                density === d
                  ? "bg-green text-ink"
                  : light
                    ? "bg-fg text-ink-muted shadow-[0_0_0_1px_var(--color-paper-line)]"
                    : "bg-ink-2 text-fg-soft shadow-[0_0_0_1px_rgba(255,255,255,0.08)]",
              )}
            >
              {d === "all" ? "All frames" : "Half the stills"}
            </button>
          ))}
        </div>

        <ol className="mt-12 grid gap-14">
          {(expanded ? fieldJobs : fieldJobs.slice(0, 1)).map((job, ji) => (
            <JobRow
              key={job.jobId}
              job={job}
              density={density}
              light={light}
              delay={ji * 40}
              open={open}
              onOpen={setOpen}
            />
          ))}
        </ol>
        {!expanded && <button type="button" className="studio-button mt-8" onClick={() => setExpanded(true)}>Explore all {fieldJobs.length} field packets</button>}
      </div>
    </section>
  );
}

function JobRow({
  job,
  density,
  light,
  delay,
  open,
  onOpen,
}: {
  job: (typeof fieldJobs)[number];
  density: "all" | "half";
  light: boolean;
  delay: number;
  open: { job: string; index: number } | null;
  onOpen: (v: { job: string; index: number }) => void;
}) {
  const items = useMemo(() => {
    if (density === "all") return job.items;
    let stillN = 0;
    return job.items.filter((item) => {
      if (item.kind === "video") return true;
      stillN += 1;
      return stillN % 2 === 1;
    });
  }, [job.items, density]);

  const rail = useRef<HTMLDivElement>(null);
  const selected = open?.job === job.id ? items[open.index] ?? items[0] : items[0];

  return (
    <li className="min-w-0">
      <Reveal delay={delay}>
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-display text-[0.68rem] font-semibold tracking-[0.16em] text-green-deep uppercase">
              {job.kicker} · {job.jobId}
            </p>
            <h3 className={cn("mt-1 text-2xl", light ? "text-ink-text" : "text-fg")}>{job.title}</h3>
            <p className={cn("mt-2 max-w-[62ch] text-sm leading-relaxed", light ? "text-ink-muted" : "text-fg-soft")}>
              {job.blurb}
            </p>
          </div>
          <Link
            to="/work/$slug"
            params={{ slug: job.slug }}
            className="font-display text-sm font-semibold text-green"
          >
            Open the case study →
          </Link>
        </div>

        {selected ? (
          <div className="media-frame overflow-hidden rounded-lg bg-ink">
            {selected.kind === "video" ? (
              <FieldClip
                src={selected.src}
                poster={selected.poster ?? selected.src}
                alt={selected.caption}
              />
            ) : (
              <MediaImage src={selected.src} alt={selected.caption} className="aspect-video w-full object-cover" />
            )}
          </div>
        ) : null}
        {selected ? (
          <p className={cn("mt-3 max-w-[70ch] font-display text-sm", light ? "text-ink-text" : "text-fg")}>
            {selected.caption}
          </p>
        ) : null}

        <div className="mt-4 flex justify-end gap-2"><button type="button" className="studio-button" aria-label={`Previous frames for ${job.title}`} onClick={() => rail.current?.scrollBy({ left: -320, behavior: "smooth" })}>←</button><button type="button" className="studio-button" aria-label={`Next frames for ${job.title}`} onClick={() => rail.current?.scrollBy({ left: 320, behavior: "smooth" })}>→</button></div>
        <div ref={rail} className="timeline-rail mt-4 flex gap-2 pb-2">
          {items.map((item, i) => {
            const active = open?.job === job.id && open.index === i;
            return (
              <button
                key={item.src + item.role}
                type="button"
                aria-label={item.caption}
                aria-pressed={active}
                onClick={() => onOpen({ job: job.id, index: i })}
                className={cn(
                  "timeline-card relative w-36 shrink-0 overflow-hidden rounded-md min-h-11",
                  active ? "ring-2 ring-green" : "ring-1 ring-transparent",
                )}
              >
                <MediaImage
                  src={item.kind === "video" ? (item.poster ?? item.src) : item.src}
                  alt=""
                  className="aspect-[16/10] w-full object-cover"
                />
                {item.kind === "video" ? (
                  <span className="absolute bottom-1 left-1 rounded-sm bg-ink/80 px-1.5 py-0.5 font-display text-[0.62rem] font-semibold tracking-wide text-green uppercase">
                    Film
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      </Reveal>
    </li>
  );
}
