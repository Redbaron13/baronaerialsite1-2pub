import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CtaBand } from "./cta-band-CtIHZCl5.mjs";
import { t as ProcessStrip } from "./process-strip-CYE10Lai.mjs";
import { t as ImageCard } from "./image-card-BAV4LXl4.mjs";
import { a as PageHero, m as services, o as PageShell } from "./router-HkZoSDfY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/capabilities-DIUCue0W.js
var import_jsx_runtime = require_jsx_runtime();
function CapabilitiesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		tone: "light",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Capabilities",
				title: "Aerial context built around the operating need.",
				lead: "Choose the objective. BAM plans coverage, constraints, and delivery around the work your team needs to do next."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessStrip, { tone: "light" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "site-container grid gap-4 py-16 md:grid-cols-2",
				children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageCard, {
					slug: s.slug,
					image: s.image,
					title: s.name,
					body: s.summary,
					kicker: s.eyebrow,
					tall: i < 2
				}, s.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "site-container pb-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/mission-planner",
					className: "font-display font-semibold text-green-deep",
					children: "Not sure which path? Open the Mission Planner →"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
		]
	});
}
//#endregion
export { CapabilitiesPage as component };
