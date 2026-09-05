import { useEffect, useRef, useState, type ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { useHydrated } from "@/lib/hydrated";
import { usePrefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function SceneCanvas({
  className,
  children,
  camera,
  fallback = null,
  interactive = false,
}: {
  className?: string;
  children: ReactNode;
  camera?: {
    position?: [number, number, number];
    fov?: number;
    near?: number;
    far?: number;
  };
  fallback?: ReactNode;
  interactive?: boolean;
}) {
  const hydrated = useHydrated();
  const reduced = usePrefersReducedMotion();
  const wrap = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.08,
    });
    io.observe(el);
    return () => io.disconnect();
  }, [hydrated, reduced]);

  if (!hydrated || reduced) return <>{fallback}</>;

  return (
    <div
      ref={wrap}
      className={cn("relative h-full w-full", className)}
      style={interactive ? { touchAction: "none" } : undefined}
    >
      <Canvas
        frameloop={visible ? "always" : "never"}
        dpr={[1, 1.75]}
        camera={camera}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          background: "transparent",
          pointerEvents: interactive ? "auto" : "none",
          touchAction: interactive ? "none" : undefined,
        }}
      >
        {children}
      </Canvas>
    </div>
  );
}
