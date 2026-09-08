import { seo } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/accessibility")({
  component: A11yPage,
  head: () => seo({ title: "Accessibility — Baron Aerial Media", description: "Accessibility commitment for the Baron Aerial Media website.", path: "/accessibility" }),
});

function A11yPage() {
  return (
    <PageShell tone="light">
      <PageHero
        eyebrow="Accessibility"
        title="This site should be usable, not ornamental."
        lead="Baron Aerial Media aims for keyboard navigation, readable structure, visible focus, and respect for reduced-motion preferences."
      />
      <article className="site-container max-w-3xl pb-24 text-ink-muted">
        <h2 className="mb-3 text-2xl">What we do</h2>
        <p className="mb-6">
          Pages use semantic headings, labels on form fields, and a visible focus ring. Decorative
          images are marked so they are skipped by assistive tech. Motion (card hovers, transforms)
          is shortened when your system requests reduced motion.
        </p>
        <h2 className="mb-3 text-2xl">If something is in the way</h2>
        <p>
          Use the{" "}
          <Link to="/contact" className="font-semibold text-green-deep underline">
            Contact
          </Link>{" "}
          page and describe the barrier. We will work to fix it.
        </p>
      </article>
    </PageShell>
  );
}
