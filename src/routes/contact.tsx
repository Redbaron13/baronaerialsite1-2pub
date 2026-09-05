import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { PageHero, PageShell } from "@/components/page-shell";
import { disclaimer, services } from "@/data/site";
import { submitBrief } from "@/lib/submit-brief";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    title: "Plan a Drone Mission — Baron Aerial Media",
    meta: [
      {
        name: "description",
        content: "A short mission-discovery brief: objective, site, airspace, and deliverables.",
      },
    ],
  }),
});

const STEPS = ["Objective", "Site + Timing", "Outputs", "Contact"] as const;
const DELIVERABLES = ["Photos", "Video", "3D model", "Orthomosaic", "Report", "Matterport"] as const;

function ContactPage() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [note, setNote] = useState("");
  const [dels, setDels] = useState<string[]>([]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setStatus("sending");
    const res = await submitBrief({
      data: {
        gotcha: String(fd.get("_gotcha") || ""),
        missionType: String(fd.get("mission_type") || ""),
        location: String(fd.get("location") || ""),
        timing: String(fd.get("timing") || ""),
        siteDetail: String(fd.get("site_detail") || ""),
        airspace: String(fd.get("airspace") || ""),
        targetDate: String(fd.get("target_date") || ""),
        deliverables: dels,
        usage: String(fd.get("usage") || ""),
        budget: String(fd.get("budget") || ""),
        name: String(fd.get("name") || ""),
        email: String(fd.get("email") || ""),
        phone: String(fd.get("phone") || ""),
        company: String(fd.get("company") || ""),
      },
    });
    if (res.ok) {
      setStatus("ok");
      setNote("Brief received. We’ll review objective, site, airspace, and outputs, then follow up.");
    } else {
      setStatus("err");
      setNote(res.error || "Something went wrong.");
    }
  }

  return (
    <PageShell tone="light">
      <PageHero
        eyebrow="Mission discovery"
        title="Tell us what you’re trying to accomplish."
        lead="This brief is built for real mission planning — objective, site, airspace, and deliverables — not just a name and email."
      />

      <section className="site-container grid items-start gap-8 pb-20 lg:grid-cols-[1.3fr_0.9fr]">
        {status === "ok" ? (
          <div className="rounded-xl bg-fg p-8 shadow-[0_0_0_1px_var(--color-paper-line)]">
            <p className="eyebrow">Brief sent</p>
            <h2 className="mt-2 text-3xl">We’ll review the mission.</h2>
            <p className="mt-3 text-ink-muted">{note}</p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="rounded-xl bg-fg p-6 shadow-[0_0_0_1px_var(--color-paper-line)] md:p-8"
          >
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[9999px] h-0 w-0 opacity-0"
            />
            <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Brief steps">
              {STEPS.map((label, i) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setStep(i)}
                  className={cn(
                    "inline-flex min-h-10 items-center gap-2 rounded-pill px-3 font-display text-sm font-semibold",
                    i === step ? "bg-green-deep text-fg" : "bg-paper-2 text-ink-muted",
                  )}
                >
                  <span className="grid size-5 place-items-center rounded-full bg-ink/10 text-[0.7rem]">{i + 1}</span>
                  {label}
                </button>
              ))}
            </div>

            <div className={cn("grid gap-5", step !== 0 && "hidden")}>
                <Field label="What type of mission are you planning?" htmlFor="mtype">
                  <select id="mtype" name="mission_type" className="field-input">
                    <option value="">Select one…</option>
                    {services.map((s) => (
                      <option key={s.slug}>{s.name}</option>
                    ))}
                    <option>Other</option>
                  </select>
                </Field>
                <Field label="Where is the project located?" htmlFor="loc">
                  <input id="loc" name="location" className="field-input" placeholder="Address, city, or general area" />
                </Field>
                <Field label="When do you need the mission performed?" htmlFor="timing">
                  <select id="timing" name="timing" className="field-input">
                    <option value="">Select one…</option>
                    <option>Specific date</option>
                    <option>Flexible window</option>
                    <option>Recurring progress tracking</option>
                  </select>
                </Field>
              </div>

            <div className={cn("grid gap-5", step !== 1 && "hidden")}>
                <Field label="Tell us about the site" htmlFor="site">
                  <textarea
                    id="site"
                    name="site_detail"
                    rows={3}
                    className="field-input"
                    placeholder="Property size, structures, access, anything unusual…"
                  />
                </Field>
                <Field label="Airspace, LAANC, waivers, or access constraints?" htmlFor="airspace">
                  <input
                    id="airspace"
                    name="airspace"
                    className="field-input"
                    placeholder="Near EWR / TEB / LGA, LAANC grid, waiver or SGI likely, HOA, gated…"
                  />
                </Field>
                <Field label="Target date or window" htmlFor="date">
                  <input id="date" name="target_date" className="field-input" placeholder="e.g. week of Sep 8, or flexible" />
                </Field>
              </div>

            <div className={cn("grid gap-5", step !== 2 && "hidden")}>
                <fieldset>
                  <legend className="mb-2 font-display text-sm font-semibold text-ink-text">
                    Which deliverables do you want?
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {DELIVERABLES.map((d) => {
                      const on = dels.includes(d);
                      return (
                        <label
                          key={d}
                          className={cn(
                            "inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-pill px-4 font-display text-sm font-semibold",
                            on ? "bg-green-deep text-fg" : "bg-paper-2 text-ink-muted",
                          )}
                        >
                          <input
                            type="checkbox"
                            className="size-4 accent-green-deep"
                            checked={on}
                            onChange={() =>
                              setDels((cur) => (on ? cur.filter((x) => x !== d) : [...cur, d]))
                            }
                          />
                          {d}
                        </label>
                      );
                    })}
                  </div>
                </fieldset>
                <Field label="How will the deliverables be used?" htmlFor="usage">
                  <input
                    id="usage"
                    name="usage"
                    className="field-input"
                    placeholder="Listing, marketing, permitting, progress, insurance…"
                  />
                </Field>
                <Field label="Budget range (optional)" htmlFor="budget">
                  <input id="budget" name="budget" className="field-input" placeholder="Helps us recommend the right workflow" />
                </Field>
              </div>

            <div className={cn("grid gap-5", step !== 3 && "hidden")}>
                <Field label="Your name" htmlFor="name">
                  <input id="name" name="name" required className="field-input" placeholder="First and last" />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input id="email" name="email" type="email" required className="field-input" placeholder="you@company.com" />
                </Field>
                <Field label="Phone (optional)" htmlFor="phone">
                  <input id="phone" name="phone" className="field-input" placeholder="(   )   -    " />
                </Field>
                <Field label="Company (optional)" htmlFor="company">
                  <input id="company" name="company" className="field-input" placeholder="Company or brokerage" />
                </Field>
                <p className="text-sm text-paper-muted">{disclaimer}</p>
              </div>

            <div className="mt-6 flex flex-wrap justify-between gap-3">
              <Button
                type="button"
                variant="outline"
                className={step === 0 ? "invisible" : ""}
                onClick={() => setStep((s) => Math.max(0, s - 1))}
              >
                Back
              </Button>
              {step < 3 ? (
                <Button type="button" onClick={() => setStep((s) => Math.min(3, s + 1))}>
                  Continue Mission Brief
                </Button>
              ) : (
                <Button type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Send Mission Brief"}
                </Button>
              )}
            </div>
            {status === "err" ? <p className="mt-4 text-sm text-red-700">{note}</p> : null}
          </form>
        )}

        <aside className="rounded-xl bg-ink p-8 text-fg-soft">
          <p className="eyebrow">What happens next</p>
          <h2 className="mt-2 text-2xl text-fg">A useful conversation starts with the mission.</h2>
          <p className="mt-3 text-sm">
            We review your objective, location, timing, airspace, and desired outputs, then determine
            what’s operationally feasible and which workflow fits.
          </p>
          <ol className="mt-6 grid gap-4">
            {[
              "Review objective",
              "Check site + airspace",
              "Define scope + deliverables",
              "Schedule mission or consultation",
            ].map((item, i) => (
              <li key={item} className="flex gap-3 font-display">
                <span className="text-green">0{i + 1}</span>
                <span className="text-fg">{item}</span>
              </li>
            ))}
          </ol>
        </aside>
      </section>
    </PageShell>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={htmlFor} className="font-display text-sm font-semibold text-ink-text">
        {label}
      </label>
      {children}
    </div>
  );
}
