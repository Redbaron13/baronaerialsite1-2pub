import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { z } from "zod";

const missionBriefSchema = z.object({
  gotcha: z.string().max(200).optional(),
  missionType: z.string().trim().max(5000).min(1, "Choose the mission type."),
  location: z.string().trim().max(5000).min(1, "Enter the project location."),
  timing: z.string().trim().max(5000).min(1, "Choose the mission timing."),
  siteDetail: z.string().trim().max(5000),
  airspace: z.string().trim().max(5000),
  targetDate: z.string().trim().max(5000),
  deliverables: z
    .array(z.string().trim().max(5000).min(1))
    .max(20)
    .min(1, "Choose at least one deliverable."),
  usage: z.string().trim().max(5000),
  budget: z.string().trim().max(5000),
  name: z.string().trim().max(5000).min(1, "Enter your name."),
  email: z.string().trim().max(5000).email("Enter a valid email address."),
  phone: z.string().trim().max(5000),
  company: z.string().trim().max(5000),
});

export type MissionBrief = z.infer<typeof missionBriefSchema>;

const submissionSchema = z.unknown();

const SUBMISSION_LIMIT = 5;
const SUBMISSION_WINDOW_MS = 15 * 60 * 1000;

export function parseMissionBriefSubmission(data: unknown): MissionBrief | null {
  const submission = z.object({ gotcha: z.string().optional() }).passthrough().parse(data);
  if (submission.gotcha) return null;
  return missionBriefSchema.parse(submission);
}

export class SubmissionRateLimiter {
  private readonly submissions = new Map<string, number[]>();

  allows(clientId: string, now = Date.now()): boolean {
    const cutoff = now - SUBMISSION_WINDOW_MS;
    for (const [key, times] of this.submissions)
      if (!times.some((t) => t > cutoff)) this.submissions.delete(key);
    if (this.submissions.size > 10000)
      this.submissions.delete(this.submissions.keys().next().value!);
    const recent = (this.submissions.get(clientId) ?? []).filter(
      (submittedAt) => submittedAt > cutoff,
    );
    if (recent.length >= SUBMISSION_LIMIT) {
      this.submissions.set(clientId, recent);
      return false;
    }
    recent.push(now);
    this.submissions.set(clientId, recent);
    return true;
  }
}

export const submitBrief = createServerFn({ method: "POST" })
  .validator(submissionSchema)
  .handler(async ({ data }) => {
    try {
      const brief = parseMissionBriefSubmission(data);
      if (!brief) return { ok: true as const, ignored: true };
      const { submissionId } = z.object({ submissionId: z.string().uuid() }).parse(data);
      const { storeBrief, clientHash } = await import("./mission-store.server");
      const stored = await storeBrief(submissionId, brief, clientHash(getRequest().headers));
      if (stored === "limited")
        return {
          ok: false as const,
          error: "Please wait a few minutes before sending another brief.",
        };
      if (stored === "conflict")
        return {
          ok: false as const,
          conflict: true,
          error:
            "Your earlier brief was already saved. These edits have not been sent. Review your changes and send again to create an updated brief.",
        };
      // A durable outbox owns delivery. Request success never depends on email availability.
      return { ok: true as const };
    } catch (error) {
      if (error instanceof z.ZodError)
        return {
          ok: false as const,
          error: error.issues.map((issue) => issue.message).join(" "),
          fields: error.flatten().fieldErrors,
        };
      console.error(
        "[mission-brief] Storage failed; no success was returned.",
        error instanceof Error ? error.name : "UnknownError",
      );
      return {
        ok: false as const,
        error:
          "Your brief could not be saved. Please try again shortly; your entries are still here.",
      };
    }
  });
