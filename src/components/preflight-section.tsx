import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { AirspaceChartLazy } from "@/components/webgl/lazy";
import {
  planningSteps,
  part107Rules,
  sgiFacts,
  brand,
  launchScenarios,
  localAuthorizations,
} from "@/data/site";
import { cn } from "@/lib/utils";

type Step = (typeof planningSteps)[number];
type Scenario = (typeof launchScenarios)[number];

export function PreflightSection({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const light = tone === "light";
  const [activeId, setActiveId] = useState<Step["id"]>("authorize");
  const active = planningSteps.find((s) => s.id === activeId) ?? planningSteps[2];
  const showChart = active.id === "class" || active.id === "authorize";

  return (
    <section className={cn("py-20 md:py-28", light ? "bg-paper" : "bg-ink")}>
      <div className="site-container">
        <Reveal>
          <p className="eyebrow">Preflight — Brief, Authorize, Conditions</p>
          <h2 className={cn("mt-3 max-w-[24ch] text-[clamp(1.9rem,4vw,3.1rem)]", light ? "text-ink-text" : "text-fg")}>
            The chart comes to life before the aircraft does.
          </h2>
          <p className={cn("lead mt-4 max-w-[62ch]", light ? "text-ink-muted" : "text-fg-soft")}>
            {brand.tagline} — after the goal, the site, and the window are on the brief, and after
            Airspace Class, LAANC, Part 107 Waivers, SGI Waivers, TFRs, National Security Events, and
            local permits line up. Open a stage. The 3D chart is a teaching schematic of EWR / TEB,
            not an operational UAS Facility Map.
          </p>
        </Reveal>

        <div className="mt-10 overflow-x-auto">
          <ol className="flex min-w-[48rem] gap-2" role="tablist" aria-label="Preflight sequence">
            {planningSteps.map((step, i) => {
              const on = step.id === activeId;
              return (
                <li key={step.id} className="relative flex-1">
                  {i < planningSteps.length - 1 ? (
                    <span
                      className="pointer-events-none absolute top-5 right-[-0.35rem] z-[1] hidden h-px w-2 bg-green/50 sm:block"
                      aria-hidden
                    />
                  ) : null}
                  <button
                    type="button"
                    role="tab"
                    aria-selected={on}
                    onClick={() => setActiveId(step.id)}
                    className={cn(
                      "timeline-step w-full rounded-md px-3 py-3 text-left transition-all duration-300",
                      on
                        ? "bg-green text-ink shadow-[0_12px_28px_-16px_rgba(28,194,77,0.8)]"
                        : light
                          ? "bg-fg text-ink-muted shadow-[0_0_0_1px_var(--color-paper-line)] hover:text-ink-text"
                          : "bg-ink-2 text-muted shadow-[0_0_0_1px_rgba(255,255,255,0.08)] hover:text-fg",
                    )}
                  >
                    <span className="font-display text-[0.65rem] font-semibold tracking-[0.16em] uppercase opacity-80">
                      {step.n}
                    </span>
                    <span className="mt-1 block font-display text-sm font-semibold leading-tight">{step.title}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        <div
          className={cn(
            "mt-6 grid gap-8 rounded-lg p-6 md:grid-cols-[0.85fr_1.15fr] md:p-8",
            light ? "bg-fg shadow-[0_0_0_1px_var(--color-paper-line)]" : "bg-ink-2 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]",
          )}
        >
          <div>
            <p className="eyebrow">{active.kicker}</p>
            <h3 className={cn("mt-2 text-2xl", light ? "text-ink-text" : "text-fg")}>{active.title}</h3>
            <p className={cn("mt-4 text-sm leading-relaxed md:text-base", light ? "text-ink-muted" : "text-fg-soft")}>
              {active.body}
            </p>
            {active.id === "authorize" ? (
              <ul className={cn("mt-5 grid gap-3", light ? "text-ink-muted" : "text-fg-soft")}>
                {localAuthorizations.map((item) => (
                  <li key={item.title} className="border-l-2 border-green pl-3">
                    <p className={cn("font-display text-sm font-semibold", light ? "text-ink-text" : "text-fg")}>
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed">{item.body}</p>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div>
            {showChart ? (
              <AirspaceChartLazy className="aspect-[16/11] min-h-[22rem]" />
            ) : active.id === "waivers" ? (
              <WaiverList light={light} />
            ) : active.id === "sgi" ? (
              <SgiPanel light={light} />
            ) : active.id === "go" ? (
              <LaunchClock light={light} />
            ) : (
              <LaunchClock light={light} />
            )}
          </div>
        </div>

        <Reveal delay={80}>
          <p className={cn("mt-8 max-w-[62ch] text-sm", light ? "text-paper-muted" : "text-muted")}>
            A LAANC approval, Part 107 Waiver, or SGI Waivers is planning status — not a contract and
            not a launch. The 3D chart is a teaching schematic of how Class B, Class D, and UAS Facility
            Map cells stack around EWR; operational altitudes come from the current FAA map at briefing.{" "}
            <Link to="/trust" className="font-display font-semibold text-green-deep">
              Trust + Safety →
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function WaiverList({ light }: { light: boolean }) {
  const [open, setOpen] = useState<string>(part107Rules[0].rule);
  return (
    <div className="grid gap-2">
      {part107Rules.map((w) => {
        const on = open === w.rule;
        return (
          <button
            key={w.rule}
            type="button"
            aria-expanded={on}
            onClick={() => setOpen(w.rule)}
            className={cn(
              "rounded-md px-4 py-3 text-left transition-colors",
              on ? (light ? "bg-paper-2" : "bg-ink-3") : light ? "bg-paper hover:bg-paper-2" : "bg-ink hover:bg-ink-3",
            )}
          >
            <span className="flex flex-wrap items-baseline justify-between gap-2">
              <span className={cn("font-display text-sm font-semibold", light ? "text-ink-text" : "text-fg")}>
                {w.rule}
              </span>
              <span className="font-display text-[0.65rem] font-semibold tracking-[0.12em] text-green-deep uppercase">
                {w.status}
              </span>
            </span>
            {on ? (
              <span className={cn("mt-2 block text-sm leading-relaxed", light ? "text-ink-muted" : "text-fg-soft")}>
                {w.detail}
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}

function SgiPanel({ light }: { light: boolean }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <div>
        <p className="font-display text-[0.68rem] font-semibold tracking-[0.14em] text-green-deep uppercase">
          SGI Waivers May Qualify
        </p>
        <ul className={cn("mt-3 grid gap-2 text-sm", light ? "text-ink-muted" : "text-fg-soft")}>
          {sgiFacts.qualifies.map((item) => (
            <li key={item} className="border-l-2 border-green pl-3">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="font-display text-[0.68rem] font-semibold tracking-[0.14em] text-green-deep uppercase">
          Does Not Qualify
        </p>
        <ul className={cn("mt-3 grid gap-2 text-sm", light ? "text-ink-muted" : "text-fg-soft")}>
          {sgiFacts.doesNot.map((item) => (
            <li key={item} className="border-l-2 border-line pl-3">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <p className={cn("text-xs sm:col-span-2", light ? "text-paper-muted" : "text-muted")}>{sgiFacts.note}</p>
    </div>
  );
}

function LaunchClock({ light }: { light: boolean }) {
  const [id, setId] = useState<Scenario["id"]>("yankees");
  const scene = launchScenarios.find((s) => s.id === id) ?? launchScenarios[2];
  const tone =
    scene.result === "GO" ? "go" : scene.result === "HOLD" ? "hold" : "nogo";

  return (
    <div className={cn("launch-clock", tone)}>
      <p className="font-display text-[0.68rem] font-semibold tracking-[0.18em] uppercase opacity-80">
        Drone Launch · T-Minus
      </p>
      <p className="launch-status mt-2 font-display text-4xl font-bold tracking-[0.12em]">{scene.result}</p>
      <ol className="mt-5 grid gap-2">
        {(
          [
            ["BRIEF", scene.gates.brief],
            ["AUTHORIZE", scene.gates.authorize],
            ["CONDITIONS", scene.gates.conditions],
          ] as const
        ).map(([label, status]) => (
          <li key={label} className="flex items-center justify-between rounded-md bg-black/20 px-3 py-2">
            <span className="font-display text-sm font-semibold tracking-[0.14em]">{label}</span>
            <span className={cn("font-display text-xs font-semibold tracking-[0.16em]", gateClass(status))}>
              {status}
            </span>
          </li>
        ))}
      </ol>
      <p className={cn("mt-4 text-sm leading-relaxed", light ? "text-ink-muted" : "text-fg-soft")}>{scene.note}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {launchScenarios.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setId(s.id)}
            className={cn(
              "rounded-pill px-3 py-1.5 font-display text-[0.65rem] font-semibold tracking-[0.08em] uppercase",
              s.id === id ? "bg-green text-ink" : "bg-black/25 text-fg-soft",
            )}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function gateClass(status: "GO" | "HOLD" | "NO-GO") {
  if (status === "GO") return "text-green";
  if (status === "HOLD") return "text-amber-300";
  return "text-red-400";
}
