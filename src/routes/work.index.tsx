import { MediaImage } from "@/components/media-image";
import { seo } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero, PageShell } from "@/components/page-shell";
import { CtaBand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/tilt-card";
import { work, workFilters, type WorkCategory } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/work/")({
  component: WorkPage,
  head: () =>
    seo({
      title: "Work — Baron Aerial Media",
      description:
        "Selected Baron Aerial Media work: residential listings, mapping, commercial, civic, and night operations stills.",
      path: "/work/",
    }),
});

function WorkPage() {
  const [filter, setFilter] = useState<WorkCategory>("All");
  const items = useMemo(
    () => (filter === "All" ? work : work.filter((w) => w.category === filter)),
    [filter],
  );

  return (
    <PageShell tone="light">
      <PageHero
        eyebrow="Selected aerial work"
        title="Field stills and maps from Baron Aerial Media."
        lead="Site mapping, a Hainesport listing, bridge construction, rooftop solar, and city context. Explore selected aerial photographs, films, and mapping outputs."
      />

      <section className="site-container pb-8">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Work categories">
          {workFilters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                "inline-flex min-h-11 shrink-0 items-center rounded-pill px-4 font-display text-sm font-semibold transition-colors",
                filter === f
                  ? "bg-ink-text text-paper"
                  : "bg-fg text-ink-muted shadow-[0_0_0_1px_var(--color-paper-line)]",
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="site-container grid gap-4 pb-20 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <TiltCard key={item.slug}>
            <Link
              to="/work/$slug"
              params={{ slug: item.slug }}
              className="group block overflow-hidden rounded-lg bg-fg shadow-[0_0_0_1px_var(--color-paper-line)]"
            >
              <MediaImage
                src={item.image}
                alt={item.title}
                className="aspect-[16/10] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
              />
              <div className="p-5">
                <p className="font-display text-xs font-semibold tracking-[0.12em] text-green-deep uppercase">
                  {item.category}
                </p>
                <h2 className="mt-1 text-xl text-ink-text">{item.title}</h2>
                <p className="mt-2 text-sm text-ink-muted">{item.summary}</p>
                <span className="mt-3 inline-block font-display text-sm font-semibold text-green-deep">
                  Open project →
                </span>
              </div>
            </Link>
          </TiltCard>
        ))}
      </section>

      <div className="site-container pb-8">
        <Button asChild>
          <Link to="/contact">Plan a similar mission</Link>
        </Button>
      </div>
      <CtaBand />
    </PageShell>
  );
}
