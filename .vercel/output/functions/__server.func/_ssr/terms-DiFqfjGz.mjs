import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageHero, c as brand, o as PageShell, u as disclaimer } from "./router-HkZoSDfY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-DiFqfjGz.js
var import_jsx_runtime = require_jsx_runtime();
function TermsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		tone: "light",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Legal",
			title: "Terms & Conditions",
			lead: "This website provides general information about BAM services. A mission request is subject to feasibility review, operating conditions, and a written agreement where applicable."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "site-container max-w-3xl pb-24 text-ink-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 text-2xl",
					children: "Using this website"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mb-6",
					children: [
						"Content is for information. It is not a bid, survey, engineering opinion, or insurance determination. ",
						brand.name,
						" may update service descriptions at any time."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 text-2xl",
					children: "Mission requests"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-6",
					children: disclaimer
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 text-2xl",
					children: "Deliverables"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-6",
					children: "Unless a written scope says otherwise, aerial media is visual documentation. Orthomosaics and 3D models are scoped products — not certified surveys. Inspection and damage imagery is for qualified client teams to review; BAM does not certify cause or condition."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 text-2xl",
					children: "Operations"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Flights are conducted under ",
					brand.part107,
					" rules and applicable authorizations. Weather, airspace, and access can delay or cancel a planned window."
				] })
			]
		})]
	});
}
//#endregion
export { TermsPage as component };
