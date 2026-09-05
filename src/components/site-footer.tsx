import { Link } from "@tanstack/react-router";
import { BrandMark } from "@/components/brand-mark";
import { brand } from "@/data/site";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export function SiteFooter({ tone }: { tone?: "dark" | "light" }) {
  const { theme } = useTheme();
  const light = (tone ?? theme) === "light";
  return (
    <footer
      className={cn(
        "border-t",
        light ? "border-paper-line bg-paper text-ink-muted" : "border-line/80 bg-ink text-muted",
      )}
    >
      <div className="site-container grid gap-10 py-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link to="/" aria-label="Baron Aerial Media — home" className="inline-flex">
            <BrandMark onDark={!light} withTagline />
          </Link>
          <p className="mt-3 font-display text-sm tracking-wide text-green-deep">{brand.tagline}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Planned aerial media and visual documentation. Owner-operated, {brand.part107}. {brand.city}.
          </p>
        </div>
        <div>
          <p className={cn("mb-3 font-display text-sm font-semibold", light ? "text-ink-text" : "text-fg")}>
            Explore
          </p>
          <ul className="grid gap-2 text-sm">
            <li>
              <Link to="/work" className="hover:text-green">
                Work
              </Link>
            </li>
            <li>
              <Link to="/capabilities" className="hover:text-green">
                Capabilities
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className={cn("mb-3 font-display text-sm font-semibold", light ? "text-ink-text" : "text-fg")}>
            Plan
          </p>
          <ul className="grid gap-2 text-sm">
            <li>
              <Link to="/mission-planner" className="hover:text-green">
                Mission Planner
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/trust" className="hover:text-green">
                Trust + Safety
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className={cn("mb-3 font-display text-sm font-semibold", light ? "text-ink-text" : "text-fg")}>
            Legal
          </p>
          <ul className="grid gap-2 text-sm">
            <li>
              <Link to="/privacy" className="hover:text-green">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-green">
                Terms
              </Link>
            </li>
            <li>
              <Link to="/accessibility" className="hover:text-green">
                Accessibility
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={cn(
          "site-container flex flex-wrap items-center justify-between gap-3 border-t py-5 text-xs",
          light ? "border-paper-line" : "border-line/80",
        )}
      >
        <p>
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
        <p>
          {brand.part107} · {brand.city}
        </p>
      </div>
    </footer>
  );
}
