import { MediaImage } from "@/components/media-image";
import {
  Component,
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type ErrorInfo,
  type ReactNode,
} from "react";
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

function DeferredScene({ children, fallback }: { children: ReactNode; fallback: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className="min-w-0">
      {near ? (
        <WebglBoundary fallback={fallback}>
          <Suspense fallback={fallback}>{children}</Suspense>
        </WebglBoundary>
      ) : (
        fallback
      )}
    </div>
  );
}
export function SurveyCanvasLazy(props: ComponentProps<typeof SurveyCanvasInner>) {
  const hydrated = useHydrated();
  const reduced = usePrefersReducedMotion();
  const fallback = (
    <figure className="technical-studio">
      <MediaImage
        src={props.ground ?? "/media/kiji-ortho.webp"}
        className="h-96 w-full object-contain"
      />
      <figcaption className="studio-source">
        Kuzuri Kijiji orthomosaic. Overlapping nadir and oblique images are aligned to create a
        mapping output.
      </figcaption>
    </figure>
  );
  if (!hydrated || reduced) return fallback;
  return (
    <DeferredScene fallback={fallback}>
      <SurveyCanvasInner {...props} />
    </DeferredScene>
  );
}
export function OrthoStageLazy(props: ComponentProps<typeof OrthoStageInner>) {
  const hydrated = useHydrated();
  const reduced = usePrefersReducedMotion();
  const fallback = (
    <figure className="technical-studio">
      <MediaImage src={props.colorMap} className="h-96 w-full object-contain" />
      <figcaption className="studio-source">
        Orthomosaic of Kuzuri Kijiji. The packet also includes a color elevation visualization and
        coverage output.
      </figcaption>
    </figure>
  );
  if (!hydrated || reduced) return fallback;
  return (
    <DeferredScene fallback={fallback}>
      <OrthoStageInner {...props} />
    </DeferredScene>
  );
}
export function AirspaceChartLazy(props: ComponentProps<typeof AirspaceChartInner>) {
  const hydrated = useHydrated();
  const reduced = usePrefersReducedMotion();
  const fallback = (
    <figure className="technical-studio">
      <MediaImage
        src="/media/laanc-ewr-map.svg"
        width={900}
        height={1100}
        alt="FAA grid around Newark Liberty with cell ceilings labeled in feet above ground level"
        className="h-96 w-full object-contain"
      />
      <figcaption className="studio-source">
        FAA UAS Facility Map snapshot, September 7, 2026. A 0 ft cell requires further FAA review
        for positive-altitude flight. Other ceilings still require authorization.{" "}
        <a href="https://www.faa.gov/uas/commercial_operators/uas_facility_maps">
          Check the current FAA map
        </a>
        .
      </figcaption>
    </figure>
  );
  if (!hydrated || reduced) return fallback;
  return (
    <DeferredScene fallback={fallback}>
      <AirspaceChartInner {...props} />
    </DeferredScene>
  );
}
