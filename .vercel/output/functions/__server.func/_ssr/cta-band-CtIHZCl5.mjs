import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as brand, i as Button, l as cn } from "./router-HkZoSDfY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cta-band-CtIHZCl5.js
var import_jsx_runtime = require_jsx_runtime();
function CtaBand({ tone = "light" }) {
	const light = tone === "light";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "site-container py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("grid justify-items-center gap-4 rounded-xl px-6 py-16 text-center md:px-16", light ? "bg-fg shadow-[0_0_0_1px_rgba(20,23,20,0.08)]" : "bg-ink-2 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg font-medium text-green",
					children: brand.tagline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: cn("max-w-[18ch] text-[clamp(1.8rem,3.5vw,2.8rem)]", light ? "text-ink-text" : "text-fg"),
					children: "Tell us the site and the goal."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("lead text-center", light ? "text-ink-muted" : "text-fg-soft"),
					children: "Share the objective — we’ll scope the flight, the deliverables, and whether it’s operationally feasible."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						children: "Plan a Drone Mission"
					})
				})
			]
		})
	});
}
//#endregion
export { CtaBand as t };
