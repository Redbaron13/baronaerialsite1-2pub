export type BuildInfo = {
  sha: string | null;
  short: string;
  number: string | null;
  date: string;
  env: string;
  branch: string | null;
};

declare const __BUILD_INFO__: BuildInfo;

export const build: BuildInfo =
  typeof __BUILD_INFO__ !== "undefined"
    ? __BUILD_INFO__
    : { sha: null, short: "dev", number: null, date: new Date().toISOString(), env: "local", branch: null };

export const buildLabel = [build.number && `Build ${build.number}`, build.short, build.date.slice(0, 10)]
  .filter(Boolean)
  .join(" · ");

export const commitUrl = build.sha
  ? `https://github.com/Redbaron13/baronaerialsite1-2pub/commit/${build.sha}`
  : undefined;
