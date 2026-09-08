import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { randomUUID } from "node:crypto";
import { PGlite } from "@electric-sql/pglite";
import type { Pool } from "pg";
import { storeBrief, clientHash } from "./mission-store.server.ts";
import type { MissionBrief } from "./submit-brief.ts";
const brief = {
  name: "Synthetic Example",
  email: "test@example.invalid",
  missionType: "Mapping",
  location: "Synthetic location",
  timing: "Flexible",
  siteDetail: "",
  airspace: "",
  targetDate: "",
  deliverables: ["Orthomosaic"],
  usage: "",
  budget: "",
  phone: "",
  company: "",
} satisfies MissionBrief;

test("durable receipts survive reopening; duplicate retries and conflicting edits are distinguished", async () => {
  const db = new PGlite();
  await db.exec(
    await readFile(new URL("../../migrations/0002_mission_briefs.sql", import.meta.url), "utf8"),
  );
  let released = 0;
  const database = {
    connect: async () => ({
      query: async (sql: string, params?: unknown[]) => {
        const r = await db.query(sql, params);
        return { ...r, rowCount: r.rows.length || r.affectedRows };
      },
      release: () => released++,
    }),
  } as unknown as Pick<Pool, "connect">;
  try {
    const id = randomUUID();
    assert.equal(await storeBrief(id, brief, null, database), "stored");
    assert.equal(await storeBrief(id, brief, null, database), "duplicate");
    assert.equal(
      await storeBrief(id, { ...brief, siteDetail: "Changed" }, null, database),
      "conflict",
    );
    assert.equal(
      (await db.query<{ n: number }>("SELECT count(*)::int AS n FROM mission_briefs")).rows[0].n,
      1,
    );
    for (let i = 0; i < 5; i++)
      assert.equal(await storeBrief(randomUUID(), brief, "client-a", database), "stored");
    assert.equal(await storeBrief(randomUUID(), brief, "client-a", database), "limited");
    assert.equal(await storeBrief(randomUUID(), brief, "client-b", database), "stored");
    await db.query(
      "UPDATE mission_briefs SET created_at=now()-interval '16 minutes' WHERE client_hash='client-a'",
    );
    assert.equal(await storeBrief(randomUUID(), brief, "client-a", database), "stored");
    const dump = await db.dumpDataDir();
    const reopened = await PGlite.create({ loadDataDir: dump });
    assert.equal(
      (await reopened.query<{ n: number }>("SELECT count(*)::int AS n FROM mission_briefs")).rows[0]
        .n,
      8,
    );
    await reopened.close();
    assert.equal(released, 11);
  } finally {
    await db.close();
  }
});
test("storage failure rolls back and releases the connection without a receipt", async () => {
  const calls: string[] = [];
  const db = {
    connect: async () => ({
      query: async (sql: string) => {
        calls.push(sql);
        if (sql.startsWith("INSERT")) throw new Error("synthetic write failure");
        return { rows: [], rowCount: 0 };
      },
      release: () => calls.push("release"),
    }),
  } as unknown as Pick<Pool, "connect">;
  await assert.rejects(storeBrief(randomUUID(), brief, null, db), /synthetic write failure/);
  assert.deepEqual(calls.slice(-2), ["ROLLBACK", "release"]);
});
test("forwarded identity is ignored without explicit trusted ingress configuration", () => {
  const mode = process.env.MISSION_BRIEF_TRUST_PROXY,
    secret = process.env.MISSION_BRIEF_RATE_SECRET;
  try {
    delete process.env.MISSION_BRIEF_TRUST_PROXY;
    process.env.MISSION_BRIEF_RATE_SECRET = "synthetic-test-secret";
    const h = new Headers({ "x-forwarded-for": "203.0.113.8" });
    assert.equal(clientHash(h), null);
    process.env.MISSION_BRIEF_TRUST_PROXY = "forwarded";
    assert.match(clientHash(h)!, /^[a-f0-9]{64}$/);
    assert.equal(clientHash(new Headers({ "x-forwarded-for": "not-an-ip" })), null);
    delete process.env.MISSION_BRIEF_RATE_SECRET;
    assert.equal(clientHash(h), null);
  } finally {
    if (mode === undefined) delete process.env.MISSION_BRIEF_TRUST_PROXY;
    else process.env.MISSION_BRIEF_TRUST_PROXY = mode;
    if (secret === undefined) delete process.env.MISSION_BRIEF_RATE_SECRET;
    else process.env.MISSION_BRIEF_RATE_SECRET = secret;
  }
});
