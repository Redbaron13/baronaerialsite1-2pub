# Release and operate Baron Aerial Media

This repository is a TanStack Start / React application with a Node server. Build from source; `.vercel/output` and `.output` are generated release files and are deliberately excluded from Git.

## Review before launch

Use the PR preview first. Publishing the branch is not approval to switch the public domain. The current work adds three explanatory Three.js studies, reviewed image assignments, responsive media, and durable mission-brief storage.

Required before accepting real inquiries:

1. Provision a **persistent PostgreSQL database** and store its connection string as `DATABASE_URL` in the server's secret settings. Use a role restricted to this application. The brief table contains personal and project information; do not expose it through an anonymous API.
2. Set the same `DATABASE_URL` in a trusted administrative shell and run `npm run db:migrate`. Migrations are explicit; preview builds never migrate the production database. Back up an existing database before applying changes. Missing configuration fails visibly.
3. Run a synthetic inquiry against staging and verify the saved record through authorized database access. The public UI reports success only after the record is saved. A database failure keeps the draft and displays an error.
4. Configure a verified Resend sender in `MISSION_BRIEF_FROM`, a monitored inbox in `MISSION_BRIEF_TO`, and the server-only `RESEND_API_KEY`. The site itself requires only the database; notifications are delivered separately.
5. Schedule `npm run briefs:deliver` every minute on a trusted server with those four environment variables. Each run processes up to 25 records. A database lease prevents overlapping workers from taking the same record; failed notifications remain queued with backoff. Monitor nonzero exits and undelivered rows. Notifications contain a reference ID, not the client's location or site notes. Staff need authorized database access to read the brief; an administrative inbox UI is not included.
6. Confirm the public contact phone/email and retention period with the owner. These values have not been invented. The privacy page describes browser draft storage and database submission storage.

Do not test delivery by sending to real clients. A receipt means “stored,” not “flight booked” or “FAA approved.” Back up the database and define an inquiry-deletion procedure before production use.

### Rate limiting

The database enforces five saved briefs per trusted client within fifteen minutes. Set `MISSION_BRIEF_RATE_SECRET` to a server-only random secret. Set `MISSION_BRIEF_TRUST_PROXY=cloudflare` only when the origin accepts traffic exclusively from Cloudflare and its `CF-Connecting-IP` header is trusted. Set it to `forwarded` only when your ingress **replaces** incoming `X-Forwarded-For` with a verified client address. Do not trust user-supplied forwarding headers or an append-only chain.

Without a trusted identity, submissions are not placed in a shared anonymous bucket. Configure ingress rate limits and request-size limits for production. Do not enable the proxy setting until the ingress behavior is verified.

### Outbox operations

These read-only queries can be used in an authorized database console:

```sql
SELECT count(*) AS pending, min(created_at) AS oldest_pending
FROM mission_briefs WHERE delivered_at IS NULL;

SELECT id, attempts, next_attempt_at, last_error
FROM mission_briefs WHERE delivered_at IS NULL ORDER BY created_at;
```

The outbox uses a stable provider idempotency key. As with any external mail provider, retries beyond the provider's idempotency-retention window can duplicate a notification; the stored brief remains unique. Never print payloads in infrastructure logs.

## Build and verify

Use Node 22. Run:

```sh
npm ci
npm run typecheck
npm test
npm run build
```

The build verifies reviewed service-image tags and regenerates the sitemap from current content. To run browser checks against a locally running production preview:

```sh
npm run preview -- --host 127.0.0.1 --port 8081
BAM_CHROME_CHANNEL=chrome npm run verify:site
```

The browser check uses installed Google Chrome, tests published routes and CSS, three viewport widths, menu keyboard behavior and draft restoration. It does not submit a real inquiry.

## Hosting

The default Nitro preset is Vercel. Import the repository, select Node 22 and `npm run build`, and configure server secrets. Database migration and outbox scheduling are separate operational steps.

For an existing Node host, `npm run build:docker` selects the Node server preset. `Dockerfile` and `compose.production.yml` build a site container on internal port 3000. Set `DATABASE_URL` and `PROXY_NETWORK` in Portainer. An operations image target is included for explicit migrations and scheduled outbox runs; it contains only the required scripts and `pg` dependency.

```sh
docker build --target operations -t baronaerial-operations .
# Supply credentials through a server-side env file excluded from Git.
docker run --rm --env-file /secure/bam-server.env baronaerial-operations node scripts/migrate.mjs
docker run --rm --env-file /secure/bam-server.env baronaerial-operations node scripts/deliver-mission-briefs.mjs
```

If PostgreSQL is on a private Docker network, attach the operations container to that network as well. Keep the public server port behind your reverse proxy. Configure staging first; record the existing domain upstream and TLS settings before any owner-approved domain change. No DNS changes or public deployment are part of this PR.

## Media and FAA source updates

`npm run media:build` generates responsive WebP derivatives from the reviewed catalog. Originals are preserved. Asset IDs are content hashes; service assignments must use an asset reviewed for that service. Unverified damage/event proof images are intentionally absent.

The LAANC study includes a dated FAA UAS Facility Map snapshot for the Newark Liberty area. The source URL, effective date, geographic footprints, and ceilings are recorded in `src/data/laanc-ewr.json`. The vertical scale is exaggerated. A positive ceiling is not permission, and a zero-foot grid is not a permanent blanket flight prohibition. Check the current FAA data, restrictions and authorization before operational use.

The photogrammetry study separates real orthomosaic, color elevation and coverage images. It does not interpret RGB colors as calibrated terrain heights. The capture path and exploded aircraft are explanatory illustrations, not recorded telemetry or an aircraft manufacturer's engineering model.

## Deferred audit recommendations

- Do not publish unverified registration numbers, insurance limits, engineering credentials, or contact details.
- Do not turn an unmatched collection into a dated before/after progress comparison.
- Do not label a routine commercial or sporting-event flight as eligible for the FAA emergency SGI process.
- Do not automatically send client confirmations containing sensitive project details.
- The local media-pipeline connection must publish only explicitly approved exports; it must not expose the raw local archive or infer publication rights from AI scores.
