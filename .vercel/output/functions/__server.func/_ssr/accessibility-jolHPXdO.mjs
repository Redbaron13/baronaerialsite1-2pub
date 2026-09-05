import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageHero, o as PageShell } from "./router-HkZoSDfY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/accessibility-jolHPXdO.js
var import_jsx_runtime = require_jsx_runtime();
function A11yPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		tone: "light",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Accessibility",
			title: "This site should be usable, not ornamental.",
			lead: "BAM aims for keyboard navigation, readable structure, visible focus, and respect for reduced-motion preferences."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "site-container max-w-3xl pb-24 text-ink-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 text-2xl",
					children: "What we do"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-6",
					children: "Pages use semantic headings, labels on form fields, and a visible focus ring. Decorative images are marked so they are skipped by assistive tech. Motion (card hovers, transforms) is shortened when your system requests reduced motion."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 text-2xl",
					children: "If something is in the way"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Use the",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "font-semibold text-green-deep underline",
						children: "Contact"
					}),
					" ",
					"page and describe the barrier. We will work to fix it."
				] })
			]
		})]
	});
}
//#endregion
export { A11yPage as component };
