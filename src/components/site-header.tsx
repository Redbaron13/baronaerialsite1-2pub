import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";
import { nav } from "@/data/site";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  const light = theme === "light";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-6 border-b px-[clamp(1.25rem,5vw,4rem)] transition-[background-color,backdrop-filter,padding,border-color] duration-300",
        light
          ? scrolled || open
            ? "border-paper-line bg-paper/90 py-2.5 backdrop-blur-md"
            : "border-transparent bg-paper/55 py-4 backdrop-blur-[2px]"
          : scrolled || open
            ? "border-line/80 bg-ink/85 py-2.5 backdrop-blur-md"
            : "border-transparent bg-ink/35 py-4 backdrop-blur-[2px]",
      )}
    >
      <Link to="/" className="flex shrink-0 items-center" aria-label="Baron Aerial Media — home">
        <BrandMark compact onDark={!light} />
      </Link>

      <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
        {nav.map((item) => {
          const current = pathname === item.to || pathname.startsWith(item.to + "/");
          return (
            <Link
              key={item.to}
              to={item.to}
              aria-current={current ? "page" : undefined}
              className={cn(
                "relative font-display text-[0.95rem] font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-green after:transition-transform after:duration-300 hover:after:scale-x-100",
                light
                  ? current
                    ? "text-ink-text after:scale-x-100"
                    : "text-ink-muted hover:text-ink-text"
                  : current
                    ? "text-fg after:scale-x-100"
                    : "text-muted hover:text-fg",
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={toggle}
          className={cn(
            "inline-flex min-h-11 min-w-11 items-center justify-center rounded-pill border",
            light ? "border-paper-line text-ink-text" : "border-line text-fg",
          )}
          aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
        >
          {light ? <Moon className="size-4" aria-hidden="true" /> : <Sun className="size-4" aria-hidden="true" />}
        </button>
        <Link
          to="/contact"
          className={cn(
            "hidden font-display text-sm font-medium sm:inline",
            light ? "text-ink-muted hover:text-ink-text" : "text-fg-soft hover:text-fg",
          )}
        >
          Contact
        </Link>
        <Button asChild size="sm" className="hidden sm:inline-flex">
          <Link to="/mission-planner">
            Plan a Mission
            <span aria-hidden="true">→</span>
          </Link>
        </Button>
        <button
          type="button"
          className={cn(
            "inline-flex min-h-11 min-w-11 items-center justify-center rounded-pill border px-3 font-display text-xs font-semibold lg:hidden",
            light ? "border-paper-line text-ink-text" : "border-line text-fg",
          )}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className={cn(
            "absolute inset-x-0 top-full flex flex-col border-b px-[clamp(1.25rem,5vw,4rem)] py-2 backdrop-blur-md lg:hidden",
            light ? "border-paper-line bg-paper/95" : "border-line bg-ink/95",
          )}
          aria-label="Mobile"
        >
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "border-b py-4 font-display font-medium",
                light ? "border-paper-line text-ink-text" : "border-line/80 text-fg",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className={cn(
              "border-b py-4 font-display font-medium",
              light ? "border-paper-line text-ink-text" : "border-line/80 text-fg",
            )}
          >
            Contact
          </Link>
          <Link to="/mission-planner" className="py-4 font-display font-semibold text-green">
            Plan a Mission
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
