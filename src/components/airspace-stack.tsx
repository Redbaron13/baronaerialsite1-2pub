import type { CSSProperties } from "react";
import { preflight } from "@/data/site";
import { cn } from "@/lib/utils";

export function AirspaceStack({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <div className={cn("airspace", light && "airspace-light")} aria-hidden="true">
      <div className="airspace-rig">
        {preflight.map((layer, i) => (
          <div
            key={layer.code}
            className="airspace-layer"
            style={{ "--z": `${56 - i * 16}px`, "--i": i } as CSSProperties}
          >
            <span>{layer.code}</span>
            <small>{layer.title}</small>
          </div>
        ))}
        <div className="airspace-craft" />
      </div>
    </div>
  );
}
