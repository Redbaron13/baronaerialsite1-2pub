# Deploy Baron Aerial Media

This is a **TanStack Start / React** site with WebGL (planned-flight overlay and 3D site model). It is not a WordPress theme, and it should not be forced into one.

Domain already on Cloudflare: **baronaerial.com**.

---

## What WordPress can and cannot do

Your current WordPress install is PHP templates and plugins. This site is:

- Client WebGL (survey-path drone, orthomosaic as a 3D packet)
- File-based React routing
- A server function for the mission brief
- Video + stills that should be served from object storage (R2), not from `wp-content/uploads`

A WP theme would throw away the 3D, the routes, and the brief. A full-page iframe of this app inside WordPress looks like the site but hurts SEO, mobile height, and WebGL. Don’t.

**You do not install a WordPress plugin to “run” this site.** You either:

1. Host this app on Node (Vercel, Cloudflare, or your own VPS) and keep WordPress as a **blog subdomain**, or
2. Host this app on your existing server **next to** WordPress as a separate virtual host — that requires **Node.js 22**, not PHP.

Typical shared cPanel WordPress hosting (PHP only) **cannot** run this app. You need a VPS, or a Node host.

---

## Recommended stack (best fit)

| Layer | Service | Why |
|---|---|---|
| App | **Vercel** (already wired in `vite.config.ts`) | SSR, Node 22, zero WordPress conflict |
| DNS / SSL | **Cloudflare** (you already have the zone) | Apex + www |
| Media | **Cloudflare R2** + custom domain `media.baronaerial.com` | Zero egress, global cache, job-ID filenames |
| Blog (optional) | WordPress at `blog.baronaerial.com` | Keep WP for posts only |

### Vercel + Cloudflare DNS

1. Push this repo to GitHub.
2. Vercel → Import the repo. Build: `npm run build`. Node 22.
3. Cloudflare DNS:
   - `www` CNAME → `cname.vercel-dns.com`
   - Apex CNAME / flattened → the Vercel target
4. Add both hostnames in Vercel → Domains.

Connect the mission brief to email (Resend → `missions@baronaerial.com`) before launch.

### Cloudflare R2 for elected media

The pipeline writes two folders (see `artifacts/media-pipeline/`):

- `r2-upload/{jobId}/` — original-quality duplicates, named with the shared job identifier. **This is what you upload to R2.**
- `web-optimized/{jobId}/` — sharp WebP / faststart MP4 for the site.

In Cloudflare: R2 → Create bucket `baron-aerial-media` → Settings → Custom Domains → `media.baronaerial.com`. Upload the `r2-upload` tree. Later the site can point `src` at `https://media.baronaerial.com/BAM-EO-CROSSINGS-202606/...`.

---

## Alternative: Cloudflare Workers / Pages

Because the zone is already on Cloudflare, Pages or Workers is a clean second choice:

1. Change the Nitro preset in `vite.config.ts` from `"vercel"` to `"cloudflare-pages"` (or the Workers TanStack Start preset).
2. Cloudflare Dashboard → Workers & Pages → Connect Git.
3. Attach `baronaerial.com` and `www`. Bind the R2 bucket.

Use this if you want one vendor for DNS + app + media.

---

## Self-host on your Hetzner server with Portainer

The repository includes `Dockerfile` and `compose.production.yml` for this
deployment. The React site runs as a separate `site` container alongside
WordPress; it is not installed into WordPress or served from `wp-content`.

### 1. Build and deploy the stack

In Portainer, create a **Git Repository** stack from this repository using:

```
compose.production.yml
```

Use the branch containing this file. Portainer checks out the repository and
uses the included `Dockerfile` to build the `baronaerial-site:latest` image;
a standalone Compose upload cannot build this application without a separate
source checkout or pre-published image.

Create the following stack environment variables in Portainer. Do not commit
their values to the repository:

| Variable | Value |
|---|---|
| `PROXY_NETWORK` | The existing external Docker network used by your reverse proxy |
| `RESEND_API_KEY` | Resend API key |
| `MISSION_BRIEF_FROM` | A Resend-verified sender, such as `Baron Aerial Media <missions@baronaerial.com>` |
| `MISSION_BRIEF_TO` | Inbox that should receive inquiries |

The stack builds a Node 22 image with Nitro's `node-server` preset and exposes
only internal port `3000`. It has no public host-port mapping.

### 2. Configure Nginx Proxy Manager

Set `PROXY_NETWORK` to the Docker network shared by Nginx Proxy Manager and
its proxy hosts (commonly `npm_default`, but use the network name shown by
your existing Nginx Proxy Manager stack). The network must already exist and
be marked external to this stack.

Before creating either Proxy Host, configure Cloudflare DNS records for
`baronaerial.com`, `www.baronaerial.com`, and `staging.baronaerial.com` to
resolve to the server.

In Nginx Proxy Manager, first inspect existing Proxy Hosts for
`baronaerial.com` and `www.baronaerial.com`. If a WordPress host already owns
either name, record its domain names, upstream scheme, hostname/IP, port, SSL
settings, and any custom configuration. Edit or replace the existing apex/www
host or hosts so exactly one production host owns both names and uses the
settings below; do not create a duplicate host. If no host owns either name,
create the production Proxy Host with:

| Field | Value |
|---|---|
| Domain Names | `baronaerial.com`, `www.baronaerial.com` |
| Scheme | `http` |
| Forward Hostname / IP | `site` |
| Forward Port | `3000` |
| Cache Assets | Enabled |
| Block Common Exploits | Enabled |
| Websockets Support | Enabled |

On the SSL tab, request or select a Let's Encrypt certificate for both domain
names, enable **Force SSL**, and accept the Terms of Service. Configure the
certificate after the DNS records have propagated. Keep
`blog.baronaerial.com` on its separate WordPress Proxy Host; it must not point
to this stack. If the existing apex/www host also contains `blog.baronaerial.com`,
first create or retain a dedicated blog host with the recorded WordPress
upstream, then remove `blog.baronaerial.com` from the production host.

Create a separate staging Proxy Host with the same upstream settings and
`staging.baronaerial.com` as its Domain Name. On its SSL tab, request or select
a Let's Encrypt certificate for `staging.baronaerial.com`, enable **Force SSL**,
and accept the Terms of Service.

### 3. Network and proxy behavior

Docker resolves the `site` hostname across the shared network. Nginx Proxy
Manager provides the TLS and forwarded request headers automatically. Do not
publish port `3000` directly on the Hetzner host.

### 4. Release safely

First create the same proxy route at `staging.baronaerial.com`. Confirm the
site, WebGL fallbacks, contact delivery, and mobile experience there. After
approval, point the `baronaerial.com` and `www` Proxy Host to `site`. To roll
back, edit that same apex/www host and restore the recorded WordPress upstream,
domain, SSL, and custom settings. The separate `blog.baronaerial.com` WordPress
host remains unchanged throughout.

## Legacy manual self-hosting notes

If the domain must live on a machine you already pay for:

**You need Node.js 22 + a reverse proxy. WordPress does not replace that.**

1. Install Node 22 (nvm or NodeSource), `pm2`, and nginx.
2. Clone the repo, `npm ci && npm run build`.
3. `pm2 start` the Nitro/Node server (production listen on localhost, e.g. 3000).
4. nginx:
   - `baronaerial.com` / `www` → proxy_pass to Node
   - `blog.baronaerial.com` → existing WordPress PHP-FPM
5. TLS via Cloudflare (orange cloud) or Let’s Encrypt on the box.
6. Media still belongs in **R2**, not on the VPS disk. Serving 4K DJI originals from the same box as WordPress will choke bandwidth.

Minimal nginx vhost for the app:

```
server {
  server_name baronaerial.com www.baronaerial.com;
  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

Do not put this site in `/var/www/html` as static files and expect WordPress to serve it.

---

## Why not WordPress as the marketing site

WordPress is PHP templates and plugins. This site is React SSR + WebGL + a server function. Keep WordPress if you want a blog; keep this app as the public face of Baron Aerial Media.

---

## Media identifiers

Files from the same mission share a job ID:

`BAM-{SITE}-{JOB}-{YYYYMM}_{seq}_{role}`

Example: `BAM-EO-NMUNN280-202606_04_oblique.webp` and `BAM-EO-NMUNN280-202606_01_nadir-hold.mp4` belong together.

Finished video deliverables are copied, not trimmed. Stills with a true original (DJI JPG) are re-exported at 2560px / WebP q88 so they are not mushy.

Run: `node scripts/media-pipeline.mjs`

---

## Local / this preview

`npm run dev` serves the live preview. `npm run build` is what Vercel/Cloudflare run.
