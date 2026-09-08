import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export function PageShell({
  children,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  const { theme } = useTheme();
  return (
    <div className={cn("flex min-h-svh flex-col", theme === "light" ? "theme-light" : "bg-ink text-fg-soft")}>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="min-w-0 flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  tone?: "dark" | "light";
}) {
  const { theme } = useTheme();
  return (
    <section className="px-[clamp(1.25rem,5vw,4rem)] pb-10 pt-32 md:pb-16 md:pt-36">
      <div className="page-hero-in mx-auto grid max-w-5xl gap-4">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="max-w-[16ch] text-[clamp(2.4rem,6vw,4.6rem)]">{title}</h1>
        <p className={cn("lead max-w-[54ch]", theme === "light" ? "text-ink-muted" : "text-fg-soft")}>{lead}</p>
      </div>
    </section>
  );
}
