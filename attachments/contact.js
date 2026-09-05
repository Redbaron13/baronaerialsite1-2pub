/**
 * Baron Aerial Media — contact form handler (Cloudflare Pages Function / Worker)
 * Route: POST /api/contact  (deploys automatically with Cloudflare Pages)
 *
 * Environment variables (set in Cloudflare Pages → Settings → Variables):
 *   RESEND_API_KEY  (secret)  — from resend.com; enables email notifications
 *   NOTIFY_EMAIL              — where briefs are sent (default kevinbaron.137@gmail.com)
 *   FROM_EMAIL               — verified sender, e.g. "Baron Aerial Media <missions@baronaerial.com>"
 *                              (before domain verification, use "Baron Aerial Media <onboarding@resend.dev>")
 * Optional binding:
 *   SUBMISSIONS (KV namespace) — every brief is also stored here as a backup
 */
const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};
const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), { status, headers: { "Content-Type": "application/json", ...cors } });

export const onRequestOptions = () => new Response(null, { headers: cors });

export async function onRequestPost({ request, env }) {
  try {
    const ct = request.headers.get("content-type") || "";
    let data = {};
    if (ct.includes("application/json")) {
      data = await request.json();
    } else {
      const fd = await request.formData();
      for (const [k, v] of fd) {
        if (data[k] !== undefined) data[k] = [].concat(data[k], v);
        else data[k] = v;
      }
    }

    // Honeypot — silently accept bots
    if (data._gotcha) return json({ ok: true });

    // Validate
    if (!data.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(data.email))) {
      return json({ ok: false, error: "A valid email is required." }, 400);
    }

    const deliverables = Array.isArray(data.deliverables) ? data.deliverables.join(", ") : (data.deliverables || "");
    const rows = [
      ["Name", data.name], ["Email", data.email], ["Phone", data.phone], ["Company", data.company],
      ["Mission type", data.mission_type], ["Location", data.location], ["Timing", data.timing],
      ["Target date", data.target_date], ["Site detail", data.site_detail], ["Airspace", data.airspace],
      ["Deliverables", deliverables], ["Usage", data.usage], ["Budget", data.budget],
    ].filter(([, v]) => v && String(v).trim());
    const text = "New Mission Discovery brief\n\n" + rows.map(([k, v]) => `${k}: ${v}`).join("\n") + "\n";

    // Backup to KV if bound
    if (env.SUBMISSIONS) {
      try { await env.SUBMISSIONS.put(`brief:${Date.now()}:${crypto.randomUUID()}`, JSON.stringify(data)); } catch (_) {}
    }

    // Email via Resend if configured
    if (env.RESEND_API_KEY) {
      const resp = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: env.FROM_EMAIL || "Baron Aerial Media <onboarding@resend.dev>",
          to: [env.NOTIFY_EMAIL || "kevinbaron.137@gmail.com"],
          reply_to: String(data.email),
          subject: `Mission brief — ${data.name || data.email}`,
          text,
        }),
      });
      if (!resp.ok) {
        const detail = await resp.text().catch(() => "");
        if (!env.SUBMISSIONS) return json({ ok: false, error: "Email delivery failed.", detail }, 502);
      }
    } else if (!env.SUBMISSIONS) {
      // Nothing configured yet — accept but flag so nothing is silently lost
      return json({ ok: true, warning: "No RESEND_API_KEY or SUBMISSIONS KV set yet — brief not delivered." });
    }

    return json({ ok: true });
  } catch (e) {
    return json({ ok: false, error: String((e && e.message) || e) }, 500);
  }
}
