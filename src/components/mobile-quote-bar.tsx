import { Link, useRouterState } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { brand, primaryCta } from "@/data/site";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function MobileQuoteBar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { theme } = useTheme();
  const light = theme === "light";
  const phone = brand.phone?.trim();

  if (pathname === "/contact") return null;

  return (
    <nav
      aria-label="Quick contact"
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t px-4 pt-3 lg:hidden",
        "pb-[max(0.75rem,env(safe-area-inset-bottom))]",
        light ? "border-paper-line bg-paper/95" : "border-line/80 bg-ink/95",
      )}
    >
      <div className="flex gap-2">
        {phone ? (
          <Button asChild variant={light ? "outline" : "ghost"} className="min-h-11 flex-1 motion-reduce:transform-none">
            <a href={telHref(phone)}>Call</a>
          </Button>
        ) : null}
        <Button asChild className="min-h-11 flex-1 motion-reduce:transform-none">
          <Link to={primaryCta.to}>{primaryCta.label}</Link>
        </Button>
      </div>
    </nav>
  );
}
