import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageHero, c as brand, o as PageShell } from "./router-HkZoSDfY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-75tYz8V_.js
var import_jsx_runtime = require_jsx_runtime();
function PrivacyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		tone: "light",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Legal",
			title: "Privacy Policy",
			lead: `${brand.name} collects only what is needed to respond to an inquiry and, if engaged, to plan and deliver a mission.`
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "site-container prose-legal max-w-3xl pb-24 text-ink-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 text-2xl",
					children: "What we collect"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-6",
					children: "The mission brief may include your name, email, phone, company, project location, site notes, airspace constraints, requested deliverables, and optional budget. We use this to evaluate feasibility and reply."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 text-2xl",
					children: "How it is used"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-6",
					children: "Inquiry data is used to respond, schedule, and — if you hire us — to plan the flight. We do not sell personal information. Aerial media of a site is captured only after a scoped engagement and is handled according to that agreement."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 text-2xl",
					children: "Retention"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-6",
					children: "Briefs that do not become a mission are kept only as long as needed to complete the conversation. Mission files follow the retention terms in the written agreement."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 text-2xl",
					children: "Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Privacy questions can be sent through the Contact page — choose “Privacy question” as the topic, or use the mission brief and note it in the message." })
			]
		})]
	});
}
//#endregion
export { PrivacyPage as component };
