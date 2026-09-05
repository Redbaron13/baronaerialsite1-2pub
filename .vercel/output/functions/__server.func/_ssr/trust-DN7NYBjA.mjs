import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CtaBand } from "./cta-band-CtIHZCl5.mjs";
import { a as PageHero, c as brand, h as trustChecks, i as Button, o as PageShell, u as disclaimer } from "./router-HkZoSDfY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/trust-DN7NYBjA.js
var import_jsx_runtime = require_jsx_runtime();
function TrustPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		tone: "light",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Trust, safety + compliance",
				title: "Clear status before, during, and after the flight.",
				lead: disclaimer
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "site-container grid items-start gap-10 pb-16 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/media/trust-airspace.webp",
					alt: "Winter aerial over constrained airspace",
					className: "media-frame min-h-[22rem] rounded-lg object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Operating discipline"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-[clamp(1.7rem,3vw,2.6rem)]",
						children: "What BAM reviews before committing."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid gap-3",
						children: trustChecks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-b border-paper-line pb-3 font-display text-ink-text last:border-0",
							children: item
						}, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-ink-muted",
						children: [
							"BAM is ",
							brand.part107,
							" certified and owner-operated from ",
							brand.city,
							". We fly only when the environment, authorization, and requested deliverables line up. Visual documentation is not an engineering inspection, survey plat, or condition certification unless a written scope says otherwise."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: "Plan with BAM"
						})
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
		]
	});
}
//#endregion
export { TrustPage as component };
