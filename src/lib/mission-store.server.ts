import { createHmac } from "node:crypto";
import { isIP } from "node:net";
import { Pool } from "pg";
import type { MissionBrief } from "./submit-brief";
let pool: Pool | undefined;
export function missionPool() {
  const connectionString = process.env.DATABASE_URL?.trim();
  if (!connectionString) throw new Error("Mission brief storage is not configured.");
  return (pool ??= new Pool({
    connectionString,
    max: 3,
    connectionTimeoutMillis: 5000,
    statement_timeout: 10000,
  }));
}
/** Only use identity headers supplied by a configured, trusted ingress. */
export function clientHash(headers: Headers): string | null {
  const mode = process.env.MISSION_BRIEF_TRUST_PROXY;
  const ip =
    mode === "cloudflare"
      ? headers.get("cf-connecting-ip")
      : mode === "forwarded"
        ? headers.get("x-forwarded-for")?.split(",")[0]?.trim()
        : undefined;
  const secret = process.env.MISSION_BRIEF_RATE_SECRET;
  return ip && isIP(ip) && secret ? createHmac("sha256", secret).update(ip).digest("hex") : null;
}
export async function storeBrief(
  id: string,
  brief: MissionBrief,
  hash: string | null,
  database: Pick<Pool, "connect"> = missionPool(),
): Promise<"stored" | "duplicate" | "limited" | "conflict"> {
  const client = await database.connect();
  try {
    await client.query("BEGIN");
    // Serialize retries of the same request, then serialize each trusted client bucket.
    await client.query("SELECT pg_advisory_xact_lock(hashtext($1))", [id]);
    const exists = await client.query(
      "SELECT payload = $2::jsonb AS same FROM mission_briefs WHERE id=$1",
      [id, JSON.stringify(brief)],
    );
    if (exists.rowCount) {
      await client.query("COMMIT");
      return exists.rows[0].same ? "duplicate" : "conflict";
    }
    if (hash) {
      await client.query("SELECT pg_advisory_xact_lock(hashtext($1))", [hash]);
      const count = await client.query(
        "SELECT count(*)::int AS n FROM mission_briefs WHERE client_hash=$1 AND created_at > now() - interval '15 minutes'",
        [hash],
      );
      if (count.rows[0].n >= 5) {
        await client.query("ROLLBACK");
        return "limited";
      }
    }
    await client.query("INSERT INTO mission_briefs (id,payload,client_hash) VALUES ($1,$2,$3)", [
      id,
      JSON.stringify(brief),
      hash,
    ]);
    await client.query("COMMIT");
    return "stored";
  } catch (error) {
    await client.query("ROLLBACK").catch(() => undefined);
    throw error;
  } finally {
    client.release();
  }
}
