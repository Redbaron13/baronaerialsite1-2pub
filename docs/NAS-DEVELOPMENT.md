# Baron Aerial Media: UGREEN NAS development mirror
This is an isolated development environment, not a live Hetzner replica or automatic production deploy.

## Bootstrap (Debian VM with Docker Engine and Compose v2)
1. Install Docker Engine from Docker's official Debian repository and enable the Docker daemon.
2. Clone this repository into the VM (e.g. /srv/bam/site).
3. Copy `env.example` to `.env`. Generate a distinct database password and random rate secret. Never use production credentials in local files.
4. Run `docker compose --env-file .env -f compose.nas.yml config --quiet` and then `docker compose --env-file .env -f compose.nas.yml up -d --build`.
5. Run DB migrations explicitly from a trusted operations container attached to this stack's Docker network. Never run production migrations on PR previews. See DEPLOY.md.
6. Preview via SSH tunnel: `ssh -L 3000:127.0.0.1:3000 user@nas-vm`, then browse http://localhost:3000. The default port binding deliberately blocks LAN/WAN access.
7. Make changes on a feature branch, run checks, push and open a PR. Deploy to Hetzner only after manual review.

## Identity
Microsoft Entra OIDC must be implemented as a separate reviewed change. Existing app auth is broker-specific (GROK_AUTH_*) and is NOT an Entra client. Do not put Entra client secrets in VITE_ variables. Leave VITE_AUTH_ENABLED=false until auth is designed and verified.

## Operations
- PostgreSQL data persists in the site_postgres named volume; back it up before changing schema.
- Email delivery is intentionally disabled in NAS Compose. Use a sandbox destination and separate credentials before enabling.
- Do not mount production media or connect a production database for development.
- Use SSH/Tailscale or a private reverse proxy rather than exposing Docker's port to the internet.
- If using Cursor agents, grant read access to examples and docs; inject scoped credentials only into trusted execution environments.
- Track revisions with GitHub PRs. Keep production deployment behind an environment approval gate.

## Future integration
Use a separate repository checkout of Redbaron13/air and its own Docker Compose project, PostgreSQL volume, Redis and media directories. Exchange approved artifact manifests, not raw storage mounts or database credentials.
