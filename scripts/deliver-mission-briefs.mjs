/** Server-only outbox worker. Run after configuring the monitored delivery destination. */
import pg from "pg";
const required = ["DATABASE_URL", "RESEND_API_KEY", "MISSION_BRIEF_FROM", "MISSION_BRIEF_TO"];
for (const name of required) if (!process.env[name]?.trim()) throw new Error(`Missing ${name}`);
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  max: 1,
  connectionTimeoutMillis: 5000,
});
try {
  for (let n = 0; n < 25; n++) {
    const { rows } = await pool.query(
      `UPDATE mission_briefs SET delivery_lease_until=now()+interval '2 minutes', attempts=attempts+1 WHERE id=(SELECT id FROM mission_briefs WHERE delivered_at IS NULL AND next_attempt_at <= now() AND (delivery_lease_until IS NULL OR delivery_lease_until < now()) ORDER BY created_at FOR UPDATE SKIP LOCKED LIMIT 1) RETURNING id,payload,attempts,created_at`,
    );
    const item = rows[0];
    if (!item) break;
    try {
      // Notifications contain no project locations, hazards, or personal details.
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
          "Idempotency-Key": `mission-${item.id}`,
        },
        body: JSON.stringify({
          from: process.env.MISSION_BRIEF_FROM,
          to: [process.env.MISSION_BRIEF_TO],
          subject: "New Baron Aerial Media mission brief",
          text: `A new brief is stored securely. Reference: ${item.id}. Review it through your authorized database access.`,
        }),
        signal: AbortSignal.timeout(10000),
      });
      if (!res.ok) throw new Error(`Provider HTTP ${res.status}`);
      await pool.query(
        "UPDATE mission_briefs SET delivered_at=now(),delivery_lease_until=NULL,last_error=NULL WHERE id=$1",
        [item.id],
      );
      console.log(`[brief-outbox] Delivered notification ${item.id}`);
    } catch (error) {
      await pool.query(
        "UPDATE mission_briefs SET delivery_lease_until=NULL,last_error=$2,next_attempt_at=now()+($3 * interval '1 minute') WHERE id=$1",
        [
          item.id,
          String(error.message).slice(0, 100),
          Math.min(1440, 2 ** Math.min(item.attempts, 10)),
        ],
      );
      console.error(`[brief-outbox] Notification retained for retry ${item.id}`);
    }
  }
} finally {
  await pool.end();
}
