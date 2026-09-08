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
      ? "/brand/logo-horizontal-on-dark.webp"
      : "/brand/logo-horizontal.webp"
    : onDark
      ? "/brand/logo-nav-on-dark.webp"
      : "/brand/logo-nav.webp";
  const mark = onDark ? "/brand/logo-mark-on-dark.webp" : "/brand/logo-mark.webp";

  return (
    <span className="flex items-center">
      <picture>
        <source media="(min-width: 1024px)" srcSet={src} />
        <img src={mark} alt="Baron Aerial Media" width={192} height={156} decoding="async"
          className={cn("w-auto", withTagline ? "h-11 lg:h-16" : compact ? "h-10 lg:h-11" : "h-11 lg:h-12")} />
      </picture>
    </span>
  );
}
