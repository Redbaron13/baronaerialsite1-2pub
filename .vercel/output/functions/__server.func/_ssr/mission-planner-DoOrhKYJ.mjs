import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageHero, d as plannerOptions, i as Button, l as cn, o as PageShell, p as serviceBySlug } from "./router-HkZoSDfY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mission-planner-DoOrhKYJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PlannerPage() {
	const [key, setKey] = (0, import_react.useState)("real-estate");
	const service = serviceBySlug(key);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		tone: "light",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Mission Planner",
			title: "Not sure what you need? Start here.",
			lead: "Pick the closest goal. We’ll point you to the right workflow, typical deliverables, and the next step — then the brief captures the operating details."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "site-container pb-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: plannerOptions.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setKey(opt.key),
					className: cn("rounded-lg bg-fg p-5 text-left shadow-[0_0_0_1px_var(--color-paper-line)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5", key === opt.key && "shadow-[0_0_0_2px_var(--color-green-deep)]"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display font-semibold text-ink-text",
						children: opt.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-paper-muted",
						children: opt.hint
					})]
				}, opt.key))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 overflow-hidden rounded-xl bg-ink p-8 text-fg-soft md:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Recommended path"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-[clamp(1.8rem,3vw,2.8rem)] text-fg",
						children: service.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-[56ch]",
						children: service.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-muted",
						children: ["Typical deliverables: ", service.deliverables.join(" · ")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/capabilities/$slug",
								params: { slug: service.slug },
								children: "See this capability"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ghost",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: "Plan this mission"
							})
						})]
					})
				]
			})]
		})]
	});
}
//#endregion
export { PlannerPage as component };
