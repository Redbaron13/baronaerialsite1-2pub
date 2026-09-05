import { Component, lazy, Suspense, type ComponentProps, type ErrorInfo, type ReactNode } from "react";
import { useHydrated } from "@/lib/hydrated";
import { usePrefersReducedMotion } from "@/lib/motion";

const SurveyCanvasInner = lazy(() =>
  import("./hero-flight").then((m) => ({ default: m.SurveyCanvas })),
);
const OrthoStageInner = lazy(() =>
  import("./ortho-stage").then((m) => ({ default: m.OrthoStage })),
);
const AirspaceChartInner = lazy(() =>
  import("./airspace-chart").then((m) => ({ default: m.AirspaceChart })),
);

class WebglBoundary extends Component<
  { fallback: ReactNode; children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.warn("WebGL view failed", error, info.componentStack);
  }
  render() {
    if (this.state.failed) return this.props.fallback;
    return this.props.children;
  }
}

export function SurveyCanvasLazy(props: ComponentProps<typeof SurveyCanvasInner>) {
  const hydrated = useHydrated();
  const reduced = usePrefersReducedMotion();
  const fallback = (
    <img src={props.ground ?? "/media/kiji-ortho.webp"} alt="Orthomosaic of Kuzuri Kijiji, East Orange" className="size-full object-cover" />
  );
  if (!hydrated || reduced) return fallback;
  return (
    <WebglBoundary fallback={fallback}>
      <Suspense fallback={fallback}>
        <SurveyCanvasInner {...props} />
      </Suspense>
    </WebglBoundary>
  );
}

/** @deprecated */
export const HeroFlightLazy = SurveyCanvasLazy;

export function OrthoStageLazy(props: ComponentProps<typeof OrthoStageInner>) {
  const hydrated = useHydrated();
  const reduced = usePrefersReducedMotion();
  const fallback = <img src={props.colorMap} alt="Orthomosaic of Kuzuri Kijiji, East Orange" className="size-full object-contain bg-ink" />;
  if (!hydrated || reduced) return fallback;
  return (
    <WebglBoundary fallback={fallback}>
      <Suspense fallback={fallback}>
        <OrthoStageInner {...props} />
      </Suspense>
    </WebglBoundary>
  );
}

export function AirspaceChartLazy(props: ComponentProps<typeof AirspaceChartInner>) {
  const hydrated = useHydrated();
  const fallback = <div className={props.className ?? "min-h-[22rem] rounded-lg bg-ink-2"} />;
  if (!hydrated) return fallback;
  return (
    <WebglBoundary fallback={fallback}>
      <Suspense fallback={fallback}>
        <AirspaceChartInner {...props} />
      </Suspense>
    </WebglBoundary>
  );
}
