import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { OrthoStageLazy } from "@/components/webgl/lazy";
import { FieldClip } from "@/components/field-film";
import { brand, deliverableOptions } from "@/data/site";
import { cn } from "@/lib/utils";

export function DeliverablesSection({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <section className={cn("py-20 md:py-28", light ? "bg-paper" : "border-t border-line")}>
      <div className="site-container">
        <Reveal>
          <p className="eyebrow">Process + Deliver — the product the client files</p>
          <h2 className={cn("mt-3 max-w-[22ch] text-[clamp(1.9rem,4vw,3.1rem)]", light ? "text-ink-text" : "text-fg")}>
            Flying is half the job. This is the other half.
          </h2>
          <p className={cn("lead mt-4 max-w-[62ch]", light ? "text-ink-muted" : "text-fg-soft")}>
            {brand.altTagline}. After the aircraft is down, frames are culled, aligned, reconstructed,
            and packed to the specification in the brief. 3D site models and construction tracking live
            here — not as decoration, as the reason the flight was planned.
          </p>
        </Reveal>

        <div className="mt-12 grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <Reveal>
            <div className="relative aspect-[4/3] min-h-[18rem] overflow-hidden rounded-lg bg-ink media-frame">
              <OrthoStageLazy
                colorMap="/media/kiji-ortho.webp"
                elevMap="/media/kiji-dem.webp"
                className="absolute inset-0 size-full min-h-[18rem]"
              />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p className="eyebrow">3D Site Models</p>
            <h3 className={cn("mt-2 text-[clamp(1.6rem,3vw,2.4rem)]", light ? "text-ink-text" : "text-fg")}>
              Kuzuri Kijiji as a model you can orbit.
            </h3>
            <p className={cn("mt-4 text-sm leading-relaxed md:text-base", light ? "text-ink-muted" : "text-fg-soft")}>
              Drag the capture to turn it. Scroll or pinch to zoom. The color is the July 6, 2026
              orthomosaic of Kuzuri Kijiji (19 Freeway Drive East, East Orange). The relief is the DEM
              from the same 123-frame mesh — rooftops stand up, parking sits low. Visual mapping of
              what stands now, not a sealed plat.
            </p>
            <Link
              to="/work/$slug"
              params={{ slug: "kuzuri-kijiji" }}
              className="mt-6 inline-flex items-center gap-1 font-display text-sm font-semibold text-green"
            >
              Open the Kuzuri Kijiji case study
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-20 grid items-start gap-10 md:grid-cols-2 md:gap-14">
          <Reveal className="md:order-2">
            <FieldClip
              src="/media/overpass.mp4"
              poster="/media/overpass.webp"
              alt="Nadir hold over the North Munn Avenue Bridge over I-280"
            />
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                ["/media/overpass-oblique.webp", "Dump trucks on the North Munn Avenue Bridge deck over I-280"],
                ["/media/brick-church-village.webp", "The Crossings at Brick Church Station from the I-280 dirt"],
                ["/media/brick-church-apartments.webp", "Embark apartments, dump truck, Munn Avenue bridge overhead"],
              ].map(([src, cap]) => (
                <figure key={src} className="overflow-hidden rounded-md">
                  <img src={src} alt={cap} className="aspect-[4/3] w-full object-cover" />
                </figure>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80} className="md:order-1">
            <p className="eyebrow">Construction Tracking</p>
            <h3 className={cn("mt-2 text-[clamp(1.6rem,3vw,2.4rem)]", light ? "text-ink-text" : "text-fg")}>
              I-280 overhead. Brick Church below it.
            </h3>
            <p className={cn("mt-4 text-sm leading-relaxed md:text-base", light ? "text-ink-muted" : "text-fg-soft")}>
              A 7.5-second nadir hold over NJDOT’s $20.3 million North Munn Avenue Bridge replacement
              over I-280 — steel, orange barrier, live interstate lanes — then ground hyperlapse stills
              from Freeway Drive at North Munn Avenue looking at The Crossings: Embark apartments at
              Brick Church station and the new ShopRite. Same geography, two deliverables: the
              reconstruction, and the redevelopment it sits in. Scheduled through spring 2028.
            </p>
            <Link
              to="/work/$slug"
              params={{ slug: "north-munn-bridge" }}
              className="mt-6 inline-flex items-center gap-1 font-display text-sm font-semibold text-green"
            >
              Open the I-280 bridge packet
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {deliverableOptions.map((d, i) => (
            <Reveal key={d.title} delay={i * 60}>
                <article
                  className={cn(
                    "overflow-hidden rounded-lg",
                    light ? "bg-fg shadow-[0_0_0_1px_var(--color-paper-line)]" : "bg-ink-2 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]",
                  )}
                >
                  <img src={d.image} alt="" className="aspect-[16/10] w-full object-cover" />
                  <div className="p-5">
                    <h3 className={cn("font-display text-base font-semibold", light ? "text-ink-text" : "text-fg")}>
                      {d.title}
                    </h3>
                    <p className={cn("mt-2 text-sm leading-relaxed", light ? "text-ink-muted" : "text-muted")}>
                      {d.body}
                    </p>
                  </div>
                </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
