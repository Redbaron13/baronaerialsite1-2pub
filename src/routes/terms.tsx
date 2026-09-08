import { seo } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { brand, disclaimer } from "@/data/site";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => seo({ title: "Terms — Baron Aerial Media", description: "Terms for using the Baron Aerial Media website and requesting a mission.", path: "/terms" }),
});

function TermsPage() {
  return (
    <PageShell tone="light">
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        lead="This website provides general information about Baron Aerial Media services. A mission request is subject to feasibility review, operating conditions, and a written agreement where applicable."
      />
      <article className="site-container max-w-3xl pb-24 text-ink-muted">
        <h2 className="mb-3 text-2xl">Using this website</h2>
        <p className="mb-6">
          Content is for information. It is not a bid, survey, engineering opinion, or insurance
          determination. {brand.name} may update service descriptions at any time.
        </p>
        <h2 className="mb-3 text-2xl">Mission requests</h2>
        <p className="mb-6">{disclaimer}</p>
        <h2 className="mb-3 text-2xl">Deliverables</h2>
        <p className="mb-6">
          Unless a written scope says otherwise, aerial media is visual documentation. Orthomosaics and
          3D models are scoped products — not certified surveys. Inspection and damage imagery is for
          qualified client teams to review; {brand.name} does not certify cause or condition.
        </p>
        <h2 className="mb-3 text-2xl">Operations</h2>
        <p>
          Flights are conducted under {brand.part107} rules and applicable authorizations. Weather,
          airspace, and access can delay or cancel a planned window.
        </p>
      </article>
    </PageShell>
  );
}
