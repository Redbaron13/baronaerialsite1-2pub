import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CtaBand } from "./cta-band-CtIHZCl5.mjs";
import { _ as workFilters, a as PageHero, g as work, i as Button, l as cn, o as PageShell } from "./router-HkZoSDfY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work-DKIlgQLn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function WorkPage() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const items = (0, import_react.useMemo)(() => filter === "All" ? work : work.filter((w) => w.category === filter), [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		tone: "light",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Selected aerial work",
				title: "Aerial work that makes the site easier to understand.",
				lead: "A concise look at the visual contexts BAM plans — property, commercial sites, infrastructure, inspection, and civic."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "site-container pb-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					role: "tablist",
					"aria-label": "Work categories",
					children: workFilters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						role: "tab",
						"aria-selected": filter === f,
						onClick: () => setFilter(f),
						className: cn("inline-flex min-h-11 shrink-0 items-center rounded-pill px-4 font-display text-sm font-semibold transition-colors", filter === f ? "bg-ink-text text-paper" : "bg-fg text-ink-muted shadow-[0_0_0_1px_var(--color-paper-line)]"),
						children: f
					}, f))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "site-container grid gap-4 pb-20 sm:grid-cols-2 lg:grid-cols-3",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/work/$slug",
					params: { slug: item.slug },
					className: "group overflow-hidden rounded-lg bg-fg shadow-[0_0_0_1px_var(--color-paper-line)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.image,
						alt: "",
						className: "aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xs font-semibold tracking-[0.12em] text-green-deep uppercase",
								children: item.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 text-xl text-ink-text",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-ink-muted",
								children: item.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-3 inline-block font-display text-sm font-semibold text-green-deep",
								children: "Open project →"
							})
						]
					})]
				}, item.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "site-container pb-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						children: "Plan a similar mission"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
		]
	});
}
//#endregion
export { WorkPage as component };
