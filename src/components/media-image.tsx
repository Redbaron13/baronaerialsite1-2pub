import type { ImgHTMLAttributes } from "react";
import { getMedia } from "@/data/media";
import { cn } from "@/lib/utils";
/** The reviewed asset owns its description, dimensions and responsive variants. */
export function MediaImage({src = "", alt, loading = "lazy", sizes = "(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 600px", className, ...props}: ImgHTMLAttributes<HTMLImageElement>) {
 if (!src) return <div className={cn("media-awaiting", className)} role="img" aria-label="Project imagery selected after scoping"><span>YOUR SITE. YOUR OBJECTIVE.</span></div>;
 const media = getMedia(src);
 return <img {...props} src={media?.variants.find(v=>v.width>=1200)?.src ?? src} alt={alt === "" ? "" : media?.alt ?? alt ?? ""} width={media?.width ?? props.width} height={media?.height ?? props.height} loading={loading} decoding="async" sizes={media ? sizes : undefined} srcSet={media?.variants.map(v=>`${v.src} ${v.width}w`).join(", ")} className={className} />;
}
