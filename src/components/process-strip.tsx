import { DroneMark } from "@/components/drone-mark";
import { process } from "@/data/site";
import { cn } from "@/lib/utils";

export function ProcessStrip({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <div
      className={cn(
        "process-strip relative border-y",
        light ? "border-paper-line bg-paper-2" : "border-line bg-ink-2",
      )}
    >
      <div className={cn("process-drone", light ? "text-green-deep" : "text-green")} aria-hidden="true">
        <DroneMark className="h-7 w-11" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {process.map((step, i) => (
          <div
            key={step.n}
            className={cn(
              "process-step group relative grid gap-2 border-b px-6 py-8 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0",
              light ? "border-paper-line" : "border-line",
            )}
            style={{ animationDelay: `${180 + i * 110}ms` }}
          >
            <p className="font-display text-[0.7rem] tracking-[0.18em] text-green-deep">{step.n}</p>
            <p
              className={cn(
                "font-display text-sm font-semibold tracking-[0.14em] uppercase transition-colors duration-300",
                light ? "text-ink-text group-hover:text-green-deep" : "text-green group-hover:text-fg",
              )}
            >
              {step.title}
            </p>
            <p className={cn("text-sm leading-relaxed", light ? "text-ink-muted" : "text-fg-soft")}>{step.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
