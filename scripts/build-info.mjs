/**
 * Build stamp: which commit is live, and when it was built.
 * SHA sources, in order: CI env vars, then .git/HEAD (the Docker build copies only
 * HEAD and refs, see .dockerignore), then a content hash of src/ so two different
 * builds never show the same stamp.
 */
import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

function gitSha(root) {
  try {
    const head = readFileSync(join(root, ".git/HEAD"), "utf8").trim();
    if (!head.startsWith("ref: ")) return head;
    const ref = head.slice(5);
    const loose = join(root, ".git", ref);
    if (existsSync(loose)) return readFileSync(loose, "utf8").trim();
    const packed = readFileSync(join(root, ".git/packed-refs"), "utf8");
    const line = packed.split("\n").find((l) => l.endsWith(` ${ref}`));
    return line ? line.split(" ")[0] : undefined;
  } catch {
    return undefined;
  }
}

function srcHash(root) {
  const h = createHash("sha256");
  const walk = (dir) => {
    for (const name of readdirSync(dir).sort()) {
      const p = join(dir, name);
      if (statSync(p).isDirectory()) walk(p);
      else h.update(p).update(readFileSync(p));
    }
  };
  for (const d of ["src", "public", "migrations"]) if (existsSync(join(root, d))) walk(join(root, d));
  return h.digest("hex");
}

export function buildInfo(root = process.cwd()) {
  const env = process.env;
  const sha =
    env.BUILD_SHA || env.GITHUB_SHA || env.WORKERS_CI_COMMIT_SHA || env.VERCEL_GIT_COMMIT_SHA || gitSha(root);
  return {
    sha: sha ? sha.slice(0, 40) : null,
    short: sha ? sha.slice(0, 7) : `src-${srcHash(root).slice(0, 7)}`,
    number: env.BUILD_NUMBER || env.GITHUB_RUN_NUMBER || null,
    date: new Date().toISOString(),
    env: env.BUILD_ENV || (env.DEPLOY_TARGET === "docker" ? "production-hetzner" : env.NODE_ENV || "local"),
    branch: env.BUILD_BRANCH || env.GITHUB_HEAD_REF || env.GITHUB_REF_NAME || env.WORKERS_CI_BRANCH || null,
  };
}
