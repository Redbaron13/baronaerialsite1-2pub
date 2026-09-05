# Deploy Baron Aerial Media on Cloudflare Pages + Worker

Target domain: **baronaerial.com** · Host: **Cloudflare Pages** (free) · Form: **Pages Function/Worker** → **Resend** email.

Do the steps in this order. Total time ≈ 15–20 min.

---

## 1. Domain is already on Cloudflare ✅

`baronaerial.com` already points to Cloudflare nameservers
(`decker.ns.cloudflare.com`, `nucum.ns.cloudflare.com`), so the DNS zone already
exists in a Cloudflare account. **Nothing to change here** — just make sure you deploy
Pages in that **same Cloudflare account** so the custom-domain records auto-create.

(If you ever move registrars, keep those two nameservers set.)

> You do **not** manually add A/CNAME records for the website — Step 3 (custom domain) creates them for you.

---

## 2. Deploy the site to Pages

**Option A — drag & drop (fastest):**
1. Dashboard → **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
2. Name it `baron-aerial-media`. Drag the **entire `bam-website` folder's contents** in (not the parent folder).
3. Deploy. You get a `*.pages.dev` preview URL — open it to confirm it works.

**Option B — Git (auto-deploy on every push):** connect the GitHub repo instead; Build command: **(none)**, Output directory: **`/`**. The `functions/` folder is picked up automatically.

Either way, the `functions/api/contact.js` Worker deploys **with** the site — no separate Worker deploy.

---

## 3. Attach the custom domain (auto-creates DNS)

1. In the Pages project → **Custom domains** → **Set up a custom domain** → `baronaerial.com` → **Activate**.
2. Repeat for `www.baronaerial.com`.
3. Because the zone is in the same account, Cloudflare **auto-creates the records** (CNAME with apex flattening) and issues SSL. No manual DNS entry needed.

At this point **https://baronaerial.com** serves the site.

---

## 4. Turn on the contact form email (Resend)

The Worker is already wired; it just needs a key.

1. Create a free account at **resend.com** → **API Keys** → create one → copy it.
2. Cloudflare Pages project → **Settings → Variables and Secrets** → add:
   | Name | Value | Type |
   |---|---|---|
   | `RESEND_API_KEY` | *(the key)* | **Secret (encrypt)** |
   | `NOTIFY_EMAIL` | `kevinbaron.137@gmail.com` | Plaintext |
   | `FROM_EMAIL` | `Baron Aerial Media <onboarding@resend.dev>` → later `...<missions@baronaerial.com>` | Plaintext |
3. **Re-deploy** (Pages → Deployments → Retry) so the vars take effect.

**To send from your own domain** (better deliverability): in Resend → **Domains** → add `baronaerial.com`. Resend gives you a set of **DKIM/SPF records (TXT + CNAME)** — add each in Cloudflare → **DNS → Records** exactly as shown, then set `FROM_EMAIL` to `Baron Aerial Media <missions@baronaerial.com>`.

> Optional backup: create a KV namespace and bind it as `SUBMISSIONS` in the Pages project → every brief is also stored there, so nothing is lost even if email hiccups.

---

## 5. (Optional) Receive email at @baronaerial.com

Cloudflare → **Email Routing** → enable → forward `missions@baronaerial.com` → your Gmail. Cloudflare adds the needed **MX + TXT** records for you.

---

## DNS records — who creates what

| Purpose | Record(s) | Created by |
|---|---|---|
| Website (apex + www) | CNAME → Pages (apex flattened) | **Auto**, when you add the custom domain (Step 3) |
| Email sending (Resend) | TXT (SPF) + CNAME/TXT (DKIM) | **You paste** the exact values Resend shows (Step 4) |
| Email receiving (optional) | MX + TXT | **Auto**, when you enable Email Routing (Step 5) |
| Nameservers | NS at the registrar | **You set** to Cloudflare's two (Step 1) |

---

## Test checklist
- [ ] `https://baronaerial.com` and `https://www.baronaerial.com` both load with padlock (SSL).
- [ ] Submit the Contact form → you receive the brief email (check spam first time).
- [ ] Hard-refresh once deployed; confirm hero video + intro play.
