import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
export function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  return <div className={cn("precision-card", className)}>{children}</div>;
}
