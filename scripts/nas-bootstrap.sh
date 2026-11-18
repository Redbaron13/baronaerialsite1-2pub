#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
command -v docker >/dev/null || { echo "Docker Engine required"; exit 1; }
docker compose version >/dev/null || { echo "Docker Compose v2 required"; exit 1; }
if [[ ! -f .env ]]; then
  cp env.example .env
  chmod 600 .env
  echo "Created .env template. Fill in independent local credentials before rerunning."
  exit 2
fi
if grep -Eq '^(POSTGRES_PASSWORD|DATABASE_URL)=.*CHANGE_ME' .env; then
  echo "Set independent local POSTGRES_PASSWORD and matching DATABASE_URL first." >&2
  exit 2
fi
docker compose --env-file .env -f compose.nas.yml config --quiet
docker compose --env-file .env -f compose.nas.yml up -d --build
echo "Site available on VM loopback :3000. Use an SSH tunnel for browser preview."
