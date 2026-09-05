import { createServerFn } from "@tanstack/react-start";

export type MissionBrief = {
  gotcha?: string;
  missionType: string;
  location: string;
  timing: string;
  siteDetail: string;
  airspace: string;
  targetDate: string;
  deliverables: string[];
  usage: string;
  budget: string;
  name: string;
  email: string;
  phone: string;
  company: string;
};

export const submitBrief = createServerFn({ method: "POST" })
  .validator((data: MissionBrief) => data)
  .handler(async ({ data }) => {
    if (data.gotcha) return { ok: true as const, ignored: true };
    const email = String(data.email || "").trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { ok: false as const, error: "A valid email is required." };
    }
    if (!String(data.name || "").trim()) {
      return { ok: false as const, error: "Name is required." };
    }
    return { ok: true as const };
  });
