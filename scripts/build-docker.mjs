import { spawnSync } from "node:child_process";

const npm = process.platform === "win32" ? "npm.cmd" : "npm";
const result = spawnSync(npm, ["run", "build"], {
  env: { ...process.env, DEPLOY_TARGET: "docker" },
  stdio: "inherit",
});

process.exit(result.status ?? 1);
