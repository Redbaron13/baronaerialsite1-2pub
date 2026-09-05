import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { brand } from "@/data/site";
import { cn } from "@/lib/utils";

export function CtaBand({ tone = "light" }: { tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <section className="site-container py-16 md:py-24">
      <div
        className={cn(
          "grid justify-items-center gap-4 rounded-xl px-6 py-16 text-center md:px-16",
          light
            ? "bg-fg shadow-[0_0_0_1px_rgba(20,23,20,0.08)]"
            : "bg-ink-2 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]",
        )}
      >
        <p className="font-display text-lg font-medium text-green">{brand.tagline}</p>
        <h2 className={cn("max-w-[20ch] text-[clamp(1.8rem,3.5vw,2.8rem)]", light ? "text-ink-text" : "text-fg")}>
          {brand.altTagline}.
        </h2>
        <p className={cn("lead text-center", light ? "text-ink-muted" : "text-fg-soft")}>
          Tell us the site and the decision the media has to support. We will scope the flight, the
          deliverables, and whether it is operationally feasible under Part 107.
        </p>
        <Button asChild className="mt-2">
          <Link to="/contact">Plan a Drone Mission</Link>
        </Button>
      </div>
    </section>
  );
}
