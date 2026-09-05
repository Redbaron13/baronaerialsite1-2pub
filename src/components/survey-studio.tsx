import { useState } from "react";
import { SurveyCanvasLazy } from "@/components/webgl/lazy";
import { usePrefersReducedMotion } from "@/lib/motion";
import { surveyPatterns } from "@/data/site";
import { cn } from "@/lib/utils";
import type { SurveyPatternId } from "@/components/webgl/hero-flight";

export function SurveyStudio({
  ground = "/media/kiji-ortho.webp",
  tone = "dark",
}: {
  ground?: string;
  tone?: "dark" | "light";
}) {
  const [pattern, setPattern] = useState<SurveyPatternId>("flown");
  const reduced = usePrefersReducedMotion();
  const active = surveyPatterns.find((p) => p.id === pattern) ?? surveyPatterns[3];
  const light = tone === "light";

  return (
    <div className={cn("grid overflow-hidden rounded-lg", light ? "bg-fg shadow-[0_0_0_1px_var(--color-paper-line)]" : "bg-ink-2 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]")}>
      <div className="relative aspect-[16/11] bg-ink">
        {!reduced ? (
          <SurveyCanvasLazy pattern={pattern} ground={ground} />
        ) : (
          <img src={ground} alt="Orthomosaic of Kuzuri Kijiji, East Orange" className="size-full object-cover" />
        )}
        <p className="pointer-events-none absolute bottom-3 left-4 font-display text-[0.68rem] font-semibold tracking-[0.16em] text-green uppercase">
          {active.name} · live path
        </p>
      </div>
      <div className={cn("grid gap-5 p-5 md:grid-cols-[0.9fr_1.1fr] md:p-7", light ? "bg-fg" : "bg-ink-2")}>
        <div>
          <p className={cn("eyebrow", light ? "" : "")}>Flight pattern</p>
          <div className="mt-3 grid gap-2" role="tablist" aria-label="Photogrammetry patterns">
            {surveyPatterns.map((p) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={pattern === p.id}
                onClick={() => setPattern(p.id as SurveyPatternId)}
                className={cn(
                  "min-h-11 rounded-md px-3 py-2 text-left font-display text-sm font-semibold transition-colors",
                  pattern === p.id
                    ? "bg-green text-ink"
                    : light
                      ? "bg-paper-2 text-ink-text hover:bg-paper"
                      : "bg-ink-3 text-fg-soft hover:text-fg",
                )}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className={cn("text-xl", light ? "text-ink-text" : "text-fg")}>{active.name}</h3>
          <p className={cn("mt-2 text-sm leading-relaxed", light ? "text-ink-muted" : "text-fg-soft")}>{active.why}</p>
          <dl className="mt-4 grid gap-3 sm:grid-cols-2">
            <div>
              <dt className="font-display text-[0.68rem] font-semibold tracking-[0.14em] text-green-deep uppercase">Overlap / capture</dt>
              <dd className={cn("mt-1 text-sm", light ? "text-ink-text" : "text-fg")}>{active.overlap}</dd>
            </div>
            <div>
              <dt className="font-display text-[0.68rem] font-semibold tracking-[0.14em] text-green-deep uppercase">What you get</dt>
              <dd className={cn("mt-1 text-sm", light ? "text-ink-text" : "text-fg")}>{active.produces}</dd>
            </div>
          </dl>
          <p className={cn("mt-4 text-xs leading-relaxed", light ? "text-paper-muted" : "text-muted")}>
            Ground texture is the July 6, 2026 orthomosaic of Kuzuri Kijiji, East Orange — a real
            Baron Aerial Media mapping site, not a generated grid. Switch patterns to see how the path
            changes what the reconstructor can solve.
          </p>
        </div>
      </div>
    </div>
  );
}