import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  parseMissionBriefSubmission,
  SubmissionRateLimiter,
} from "./submit-brief.ts";

const validBrief = {
  missionType: "Aerial survey",
  location: "Newark, NJ",
  timing: "Flexible window",
  siteDetail: "",
  airspace: "",
  targetDate: "",
  deliverables: ["Photos"],
  usage: "",
  budget: "",
  name: "Jane Doe",
  email: "jane@example.com",
  phone: "",
  company: "",
};

describe("parseMissionBriefSubmission", () => {
  it("silently ignores an incomplete honeypot submission", () => {
    assert.equal(parseMissionBriefSubmission({ gotcha: "bot" }), null);
  });

  it("validates legitimate submissions", () => {
    assert.deepEqual(parseMissionBriefSubmission(validBrief), validBrief);
  });
});

describe("SubmissionRateLimiter", () => {
  it("permits only five submissions per client in fifteen minutes", () => {
    const limiter = new SubmissionRateLimiter();
    const start = 1_000_000;
    for (let attempt = 0; attempt < 5; attempt += 1) {
      assert.equal(limiter.allows("203.0.113.1", start + attempt), true);
    }
    assert.equal(limiter.allows("203.0.113.1", start + 6), false);
    assert.equal(limiter.allows("203.0.113.1", start + 15 * 60 * 1000 + 1), true);
  });
});
