import { MediaImage } from "@/components/media-image";
import { seo } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PageHero, PageShell } from "@/components/page-shell";
import { plannerOptions, serviceBySlug, type PlannerKey } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/mission-planner")({
  component: PlannerPage,
  head: () => seo({ title: "Mission Planner — Baron Aerial Media", description: "Not sure what you need? Pick the closest goal and we’ll point you to the right workflow.", path: "/mission-planner" }),
});

function PlannerPage() {
  const [key, setKey] = useState<PlannerKey>("real-estate");
  const service = serviceBySlug(key)!;

  return (
    <PageShell tone="light">
      <PageHero
        eyebrow="Mission Planner"
        title="Not sure what you need? Start here."
        lead="Pick the closest goal. We’ll point you to the right workflow, typical deliverables, and the next step — then the brief captures the operating details."
      />

      <section className="site-container pb-20">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {plannerOptions.map((opt) => (
            <button
              key={opt.key}
              type="button"
              onClick={() => setKey(opt.key)}
              className={cn(
                "rounded-lg bg-fg p-5 text-left shadow-[0_0_0_1px_var(--color-paper-line)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5",
                key === opt.key && "shadow-[0_0_0_2px_var(--color-green-deep)]",
              )}
            >
              <p className="font-display font-semibold text-ink-text">{opt.title}</p>
              <p className="mt-1 text-sm text-paper-muted">{opt.hint}</p>
            </button>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-xl bg-ink p-8 text-fg-soft md:p-10">
          <p className="eyebrow">Recommended path</p>
          <h2 className="mt-2 text-[clamp(1.8rem,3vw,2.8rem)] text-fg">{service.name}</h2>
          <p className="mt-3 max-w-[56ch]">{service.summary}</p>
          <p className="mt-4 text-sm text-muted">Typical deliverables: {service.deliverables.join(" · ")}</p>
          {key === "mapping" ? (
            <MediaImage
              src="/media/photogrammetry-cameras.webp"
              alt="Photogrammetry camera stations around a reconstructed 3D building model"
              className="mt-6 w-full rounded-md object-contain"
            />
          ) : (
            <MediaImage src={service.image} alt={service.name} className="mt-6 aspect-[16/9] w-full rounded-md object-cover" />
          )}
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/capabilities/$slug" params={{ slug: service.slug }}>
                See this capability
              </Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/contact">Plan this mission</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
