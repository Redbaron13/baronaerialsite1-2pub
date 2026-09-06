import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { z } from "zod";

const missionBriefSchema = z.object({
  gotcha: z.string().optional(),
  missionType: z.string().trim().min(1, "Choose the mission type."),
  location: z.string().trim().min(1, "Enter the project location."),
  timing: z.string().trim().min(1, "Choose the mission timing."),
  siteDetail: z.string().trim(),
  airspace: z.string().trim(),
  targetDate: z.string().trim(),
  deliverables: z.array(z.string().trim().min(1)).min(1, "Choose at least one deliverable."),
  usage: z.string().trim(),
  budget: z.string().trim(),
  name: z.string().trim().min(1, "Enter your name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim(),
  company: z.string().trim(),
});

export type MissionBrief = z.infer<typeof missionBriefSchema>;

const submissionSchema = z.object({
  gotcha: z.string().optional(),
}).passthrough();

const SUBMISSION_LIMIT = 5;
const SUBMISSION_WINDOW_MS = 15 * 60 * 1000;

export function parseMissionBriefSubmission(data: unknown): MissionBrief | null {
  const submission = submissionSchema.parse(data);
  if (submission.gotcha) return null;
  return missionBriefSchema.parse(submission);
}

export class SubmissionRateLimiter {
  private readonly submissions = new Map<string, number[]>();

  allows(clientId: string, now = Date.now()): boolean {
    const cutoff = now - SUBMISSION_WINDOW_MS;
    const recent = (this.submissions.get(clientId) ?? []).filter((submittedAt) => submittedAt > cutoff);
    if (recent.length >= SUBMISSION_LIMIT) {
      this.submissions.set(clientId, recent);
      return false;
    }
    recent.push(now);
    this.submissions.set(clientId, recent);
    return true;
  }
}

const submissionRateLimiter = new SubmissionRateLimiter();

function submissionClientId(): string {
  const request = getRequest();
  const forwardedFor = request?.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwardedFor || request?.headers.get("x-real-ip")?.trim() || "unknown";
}

function configured(name: "RESEND_API_KEY" | "MISSION_BRIEF_FROM" | "MISSION_BRIEF_TO"): string | null {
  const value = process.env[name]?.trim();
  return value ? value : null;
}

function plainText(brief: MissionBrief): string {
  const fields: Array<[string, string]> = [
    ["Mission type", brief.missionType],
    ["Location", brief.location],
    ["Timing", brief.timing],
    ["Site details", brief.siteDetail || "Not provided"],
    ["Airspace or access", brief.airspace || "Not provided"],
    ["Target date", brief.targetDate || "Not provided"],
    ["Deliverables", brief.deliverables.join(", ")],
    ["Usage", brief.usage || "Not provided"],
    ["Budget", brief.budget || "Not provided"],
    ["Name", brief.name],
    ["Email", brief.email],
    ["Phone", brief.phone || "Not provided"],
    ["Company", brief.company || "Not provided"],
  ];

  return fields.map(([label, value]) => `${label}: ${value}`).join("\n");
}

async function deliverBrief(brief: MissionBrief): Promise<boolean> {
  const apiKey = configured("RESEND_API_KEY");
  const from = configured("MISSION_BRIEF_FROM");
  const to = configured("MISSION_BRIEF_TO");
  if (!apiKey || !from || !to) {
    console.error("[mission-brief] Resend is not configured.");
    return false;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: brief.email,
      subject: `Mission brief: ${brief.missionType} — ${brief.name}`,
      text: plainText(brief),
    }),
    signal: AbortSignal.timeout(10_000),
  });

  if (response.ok) return true;
  console.error("[mission-brief] Resend delivery failed.", response.status);
  return false;
}

export const submitBrief = createServerFn({ method: "POST" })
  .validator(submissionSchema)
  .handler(async ({ data }) => {
    const brief = parseMissionBriefSubmission(data);
    if (!brief) return { ok: true as const, ignored: true };
    if (!submissionRateLimiter.allows(submissionClientId())) {
      return { ok: false as const, error: "Please wait a few minutes before sending another brief." };
    }
    try {
      if (!(await deliverBrief(brief))) {
        return { ok: false as const, error: "We could not send your brief. Please try again shortly." };
      }
    } catch (error) {
      console.error("[mission-brief] Delivery request failed.", error);
      return { ok: false as const, error: "We could not send your brief. Please try again shortly." };
    }
    return { ok: true as const };
  });
