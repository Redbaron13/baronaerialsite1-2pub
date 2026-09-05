import { cn } from "@/lib/utils";

export function BrandMark({
  compact = false,
  onDark = true,
  withTagline = false,
}: {
  compact?: boolean;
  onDark?: boolean;
  withTagline?: boolean;
}) {
  const src = withTagline
    ? onDark
      ? "/brand/logo-horizontal-on-dark.png"
      : "/brand/logo-horizontal.png"
    : onDark
      ? "/brand/logo-nav-on-dark.png"
      : "/brand/logo-nav.png";
  const mark = onDark ? "/brand/logo-mark-on-dark.png" : "/brand/logo-mark.png";

  return (
    <span className="flex items-center">
      <img
        src={mark}
        alt=""
        className={cn("w-auto shrink-0 lg:hidden", compact ? "h-10" : "h-11")}
      />
      <img
        src={src}
        alt="Baron Aerial Media"
        className={cn(
          "hidden w-auto lg:block",
          withTagline ? "h-16" : compact ? "h-11" : "h-12",
        )}
      />
    </span>
  );
}
