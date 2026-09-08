#!/bin/sh
# Starts the BAM preview from this checkout on either macOS or Linux.
set -eu
cd "$(dirname "$0")"
if curl -fsS http://127.0.0.1:8080/ >/dev/null 2>&1; then exit 0; fi
nohup npm run dev > /tmp/bam-site-dev.log 2>&1 &
