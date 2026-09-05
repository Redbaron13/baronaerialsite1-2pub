# Baron Aerial Media — Public Website

Commercial drone-intelligence marketing site. Static **HTML + CSS + vanilla JS** (no build step, no framework) so it's easy to host anywhere and straightforward to port into Webflow.

## Pages
| File | Purpose |
|---|---|
| `index.html` | Home — intro entrance, cycling cinematic hero, capabilities, work, CTA |
| `capabilities.html` | Capabilities hub (four industry paths) |
| `luxury-real-estate.html` · `construction.html` · `inspection.html` · `drone-program.html` | Capability detail pages |
| `gallery.html` | Work / **3D + Media Gallery** — interactive Project Intelligence Explorer |
| `case-study.html` | Urban Corridor deep dive |
| `mission-planner.html` | Interactive "what do you need" chooser |
| `contact.html` | **Mission Discovery** — 4-step signup/lead form |
| `about.html` | Owner + brand story |

Excluded by request: the Client Portal and Team Portal (internal apps).

## Structure
```
bam-website/
  *.html
  assets/
    css/styles.css      # design system: tokens, components, light+dark themes, motion utils
    js/motion.js        # intro, hero cycling, accessibility tab, reveals, form steps, gallery tabs
    img/                # logos, hero posters, work stills, real-estate + aerials
    video/              # hero-1..3.mp4 (cinematic) + realestate-2.mp4
    incoming/           # RAW Photos/drone exports (GITIGNORED — large, kept local)
```

## Run locally
Open `index.html` in a browser (double-click). No server needed. The intro plays once per browser session.

## Deploy — Cloudflare Pages (chosen)
Host on **Cloudflare Pages** (free, unlimited bandwidth). The contact form runs as a
**Pages Function / Worker** at `functions/api/contact.js` (route `POST /api/contact`) and
emails via **Resend**. Full step-by-step + DNS is in `DEPLOY.md`.

Quick version:
1. Cloudflare dashboard → Workers & Pages → Create → Pages → upload the `bam-website` folder
   (or connect the Git repo). Build command: *none*; output dir: `/`.
2. Add env vars in Pages → Settings → Variables: `RESEND_API_KEY`, `NOTIFY_EMAIL`, `FROM_EMAIL`.
3. Add `baronaerial.com` + `www` as custom domains (Pages auto-creates the DNS records).

## Notes / TODO
- **Fonts** are close Google-Font matches (Space Grotesk / Inter / Dancing Script) pending the exact fonts from the Figma Foundations page — swap the `--font-*` vars in `styles.css`.
- **Contact form** posts via Netlify Forms when hosted there; on other hosts wire it to Formspree/Basin or your CRM. In local preview it shows a confirmation instead of sending.
- **Hero footage** is placeholder-cut from existing reels; swap in preferred clips by replacing `assets/video/hero-*.mp4` (+ matching poster `assets/img/hero-*.jpg`).
- Reduced motion is fully supported (OS setting + the in-page Accessibility tab).
- A stray `.git/` folder was created from a sandbox and can't be removed remotely — delete `bam-website/.git` on your Mac before `git init` if you set up version control locally.
