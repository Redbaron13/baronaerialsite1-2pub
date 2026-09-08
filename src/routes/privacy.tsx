import { seo } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { brand } from "@/data/site";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => seo({ title: "Privacy — Baron Aerial Media", description: "How Baron Aerial Media handles inquiry and mission information.", path: "/privacy" }),
});

function PrivacyPage() {
  return (
    <PageShell tone="light">
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lead={`${brand.name} collects only what is needed to respond to an inquiry and, if engaged, to plan and deliver a mission.`}
      />
      <article className="site-container prose-legal max-w-3xl pb-24 text-ink-muted">
        <h2 className="mb-3 text-2xl">What we collect</h2>
        <p className="mb-6">
          The mission brief may include your name, email, phone, company, project location, site notes,
          airspace constraints, requested deliverables, and optional budget. We use this to evaluate
          feasibility and reply.
        </p>
        <h2 className="mb-3 text-2xl">How it is used</h2>
        <p className="mb-6">
          Inquiry data is used to respond, schedule, and — if you hire us — to plan the flight. We do
          not sell personal information. Aerial media of a site is captured only after a scoped
          engagement and is handled according to that agreement.
        </p>
        <h2 className="mb-3 text-2xl">Retention</h2>
        <p className="mb-6">
          Briefs that do not become a mission are kept only as long as needed to complete the
          conversation. Mission files follow the retention terms in the written agreement.
        </p>
        <h2 className="mb-3 text-2xl">Contact</h2>
        <p>
          Privacy questions can be sent through the Contact page — choose “Privacy question” as the
          topic, or use the mission brief and note it in the message.
        </p>
      </article>
    </PageShell>
  );
}
