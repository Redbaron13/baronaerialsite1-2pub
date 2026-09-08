import { seo } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { PageHero, PageShell } from "@/components/page-shell";
import { disclaimer, services } from "@/data/site";
import { submitBrief } from "@/lib/submit-brief";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => seo({ title: "Plan a Drone Mission — Baron Aerial Media", description: "A short mission-discovery brief: objective, site, airspace, and deliverables.", path: "/contact" }),
});

const STEPS = ["Objective", "Site + Timing", "Outputs", "Contact"] as const;
const DELIVERABLES = ["Photos", "Video", "3D model", "Orthomosaic", "Report", "Matterport"] as const;

function ContactPage() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [note, setNote] = useState("");
  const [dels, setDels] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const submissionId = useRef("");
  const loaded = useRef(false);
  useEffect(() => {
    submissionId.current = crypto.randomUUID();
    try {
      const saved = sessionStorage.getItem("bam-mission-draft-v1");
      if (saved) {
        const draft = JSON.parse(saved);
        for (const [name, value] of Object.entries(draft.fields ?? {})) {
          const field = formRef.current?.elements.namedItem(name);
          if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement || field instanceof HTMLSelectElement) field.value = String(value);
        }
        setStep(Math.min(3, Math.max(0, Number(draft.step) || 0)));
        setDels(Array.isArray(draft.deliverables) ? draft.deliverables.filter((d: string) => DELIVERABLES.includes(d as typeof DELIVERABLES[number])) : []);
        if (typeof draft.submissionId === "string") submissionId.current = draft.submissionId;
      }
    } catch { /* Storage may be disabled; the form still works. */ }
    loaded.current = true;
  }, []);
  function saveDraft() {
    if (!loaded.current || !formRef.current) return;
    try {
      const fields = Object.fromEntries(new FormData(formRef.current).entries());
      delete fields._gotcha;
      sessionStorage.setItem("bam-mission-draft-v1", JSON.stringify({ fields, step, deliverables: dels, submissionId: submissionId.current }));
    } catch { /* Private browsing and full storage must not interrupt a brief. */ }
  }
  useEffect(() => { saveDraft(); }, [step, dels]);


  function validateStep(currentStep: number): boolean {
    const form = formRef.current;
    if (!form) return false;
    const data = new FormData(form);
    const message =
      currentStep === 0 && !String(data.get("mission_type") || "").trim()
        ? "Choose the mission type before continuing."
        : currentStep === 0 && !String(data.get("location") || "").trim()
          ? "Enter the project location before continuing."
          : currentStep === 0 && !String(data.get("timing") || "").trim()
            ? "Choose when you need the mission before continuing."
            : currentStep === 2 && dels.length === 0
              ? "Choose at least one deliverable before continuing."
              : "";
    setNote(message);
    setStatus(message ? "err" : "idle");
    return !message;
  }

  function continueBrief() {
    if (validateStep(step)) setStep((current) => Math.min(3, current + 1));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setStatus("sending");
    try {
      const res = await submitBrief({
        data: {
          submissionId: submissionId.current,
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
        try { sessionStorage.removeItem("bam-mission-draft-v1"); } catch { /* optional storage */ }
        setStatus("ok");
        setNote("Brief received. We’ll review objective, site, airspace, and outputs, then follow up.");
      } else {
        setStatus("err");
        setNote(res.error || "Something went wrong.");
      }
    } catch (error) {
      console.error("[mission-brief] Submission failed.", error);
      setStatus("err");
      setNote("We could not send your brief. Please try again shortly.");
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
          <div role="status" aria-live="polite" className="rounded-xl bg-fg p-8 shadow-[0_0_0_1px_var(--color-paper-line)]">
            <p className="eyebrow">Brief sent</p>
            <h2 className="mt-2 text-3xl">We’ll review the mission.</h2>
            <p className="mt-3 text-ink-muted">{note}</p>
          </div>
        ) : (
          <form
            ref={formRef}
            onSubmit={onSubmit}
            onChange={saveDraft}
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
            <p className="mb-4 text-xs text-ink-muted">Draft saved in this browser tab until submission. Close the tab to discard it.</p>
            <p className="sr-only" role="status" aria-live="polite">Step {step + 1} of 4: {STEPS[step]}</p>
            <nav className="mb-6 flex flex-wrap gap-2" aria-label="Mission brief steps">
              {STEPS.map((label, i) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => {
                    if (i <= step) {
                      setStep(i);
                    } else if (i === step + 1 && validateStep(step)) {
                      setStep(i);
                    }
                  }}
                  aria-current={i === step ? "step" : undefined}
                  className={cn(
                    "inline-flex min-h-10 items-center gap-2 rounded-pill px-3 font-display text-sm font-semibold",
                    i === step ? "bg-green-deep text-fg" : "bg-paper-2 text-ink-muted",
                  )}
                >
                  <span className="grid size-5 place-items-center rounded-full bg-ink/10 text-[0.7rem]">{i + 1}</span>
                  {label}
                </button>
              ))}
            </nav>

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
                  <input id="name" name="name" autoComplete="name" required className="field-input" placeholder="First and last" />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input id="email" name="email" autoComplete="email" type="email" required className="field-input" placeholder="you@company.com" />
                </Field>
                <Field label="Phone (optional)" htmlFor="phone">
                  <input id="phone" name="phone" autoComplete="tel" type="tel" className="field-input" placeholder="(   )   -    " />
                </Field>
                <Field label="Company (optional)" htmlFor="company">
                  <input id="company" name="company" autoComplete="organization" className="field-input" placeholder="Company or brokerage" />
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
                <Button type="button" onClick={continueBrief}>
                  Continue Mission Brief
                </Button>
              ) : (
                <Button type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Send Mission Brief"}
                </Button>
              )}
            </div>
            {status === "err" ? <p role="alert" className="mt-4 text-sm text-red-700">{note}</p> : null}
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
