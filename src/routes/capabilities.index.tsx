import { seo } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { CtaBand } from "@/components/cta-band";
import { ImageCard } from "@/components/image-card";
import { ProcessStrip } from "@/components/process-strip";
import { services } from "@/data/site";

export const Route = createFileRoute("/capabilities/")({
  component: CapabilitiesPage,
  head: () => seo({ title: "Capabilities — Baron Aerial Media", description: "Real estate aerials, construction progress, inspections, property damage documentation, roof + solar, mapping, and event coverage.", path: "/capabilities/" }),
});

function CapabilitiesPage() {
  return (
    <PageShell tone="light">
      <PageHero
        eyebrow="Capabilities"
        title="Aerial context built around the operating need."
        lead="Choose the objective. Baron Aerial Media plans coverage, airspace, and delivery around the work your team needs to do next."
      />
      <ProcessStrip tone="light" />
      <section className="site-container grid gap-4 py-16 md:grid-cols-2">
        {services.map((s, i) => (
          <ImageCard
            key={s.slug}
            slug={s.slug}
            image={s.image}
            title={s.name}
            body={s.summary}
            kicker={s.eyebrow}
            tall={i < 2}
          />
        ))}
      </section>
      <div className="site-container pb-8">
        <Link to="/mission-planner" className="font-display font-semibold text-green-deep">
          Not sure which path? Open the Mission Planner →
        </Link>
      </div>
      <CtaBand />
    </PageShell>
  );
}
