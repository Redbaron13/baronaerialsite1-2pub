import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CtaBand } from "./cta-band-CtIHZCl5.mjs";
import { g as work, i as Button, n as Route, o as PageShell, u as disclaimer } from "./router-HkZoSDfY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-B5kId04g.js
var import_jsx_runtime = require_jsx_runtime();
function WorkDetail() {
	const item = Route.useLoaderData();
	const others = work.filter((w) => w.slug !== item.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		tone: "light",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[70vh] overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.image,
						alt: "",
						className: "absolute inset-0 size-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/25" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "site-container relative grid max-w-2xl gap-4 pb-16 pt-36",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: item.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-[clamp(2.4rem,6vw,4.4rem)] text-fg",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "lead",
								children: item.summary
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "site-container grid gap-10 py-16 md:grid-cols-[1.3fr_0.8fr] md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[clamp(1.7rem,3vw,2.4rem)]",
						children: "What this flight was for."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 max-w-[54ch] text-ink-muted",
						children: [item.summary, " BAM planned the capture around a usable outcome — not a single pretty frame — and delivered stills that read the site at the right scale."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-[54ch] text-sm text-paper-muted",
						children: disclaimer
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-fg p-7 shadow-[0_0_0_1px_var(--color-paper-line)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Mission",
							value: item.mission
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Outputs",
							value: item.outputs
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Category",
							value: item.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Status",
							value: "Selected work",
							last: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-6 w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: "Plan a similar mission"
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "site-container pb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl",
						children: "More work"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/work",
						className: "font-display text-sm font-semibold text-green-deep",
						children: "Back to gallery →"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-3",
					children: others.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/work/$slug",
						params: { slug: o.slug },
						className: "group overflow-hidden rounded-lg bg-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: o.image,
							alt: "",
							className: "aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "p-4 font-display font-semibold text-ink-text",
							children: o.title
						})]
					}, o.slug))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
		]
	});
}
function Row({ label, value, last }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: last ? "py-3" : "border-b border-paper-line py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-xs font-semibold tracking-[0.12em] text-green-deep uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-display text-ink-text",
			children: value
		})]
	});
}
//#endregion
export { WorkDetail as component };
