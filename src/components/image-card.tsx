import { MediaImage } from "@/components/media-image";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ServiceSlug } from "@/data/site";

export function ImageCard({
  slug,
  image,
  title,
  body,
  kicker,
  tall,
}: {
  slug: ServiceSlug;
  image: string;
  title: string;
  body: string;
  kicker?: string;
  tall?: boolean;
}) {
  return (
    <Link
      to="/capabilities/$slug"
      params={{ slug }}
      className={cn(
        "photo-hero group relative isolate block overflow-hidden rounded-lg bg-ink-2 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]",
        tall ? "min-h-[28rem]" : "min-h-[20rem]",
      )}
    >
      <MediaImage
        src={image}
        alt={title}
        className="absolute inset-0 size-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
      />
      <div className="card-scrim absolute inset-0" />
      <div className="relative flex h-full min-h-[inherit] flex-col justify-end p-6">
        {kicker ? <p className="eyebrow mb-2">{kicker}</p> : null}
        <h3 className="text-xl text-fg">{title}</h3>
        <p className="mt-1 max-w-[38ch] text-sm text-fg-soft">{body}</p>
        <span className="mt-3 inline-flex items-center gap-1 font-display text-sm font-semibold text-green">
          Explore
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
