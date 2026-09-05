import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CtaBand } from "./cta-band-CtIHZCl5.mjs";
import { t as ProcessStrip } from "./process-strip-CYE10Lai.mjs";
import { i as Button, m as services, o as PageShell, r as Route$1, u as disclaimer } from "./router-HkZoSDfY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/capabilities._slug-4cv7pARt.js
var import_jsx_runtime = require_jsx_runtime();
function ServicePage() {
	const service = Route$1.useLoaderData();
	const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		tone: "light",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[70vh] overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: service.image,
						alt: "",
						className: "absolute inset-0 size-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-ink via-ink/65 to-ink/20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "site-container relative grid max-w-2xl gap-4 pb-16 pt-36",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: service.eyebrow
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-[clamp(2.4rem,6vw,4.4rem)] text-fg",
								children: service.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "lead",
								children: service.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									children: "Plan a Mission"
								})
							}) })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessStrip, { tone: "light" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "site-container grid gap-10 py-16 md:grid-cols-2 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Planned around the operating need"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-[clamp(1.7rem,3vw,2.6rem)]",
						children: "Useful visual context, with clear boundaries."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-ink-muted",
						children: service.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-ink-muted",
						children: [
							"Built for ",
							service.forWhom,
							" Every assignment begins with the decision the media needs to support, the site, access, requested timing, and intended output."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-paper-muted",
						children: disclaimer
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-fg p-8 shadow-[0_0_0_1px_var(--color-paper-line)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg",
							children: "Typical deliverables"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 grid gap-3",
							children: service.deliverables.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border-b border-paper-line pb-3 font-display text-ink-text last:border-0",
								children: d
							}, d))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: "Start a brief"
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
						children: "Other paths"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/capabilities",
						className: "font-display text-sm font-semibold text-green-deep",
						children: "All capabilities →"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-3",
					children: others.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/capabilities/$slug",
						params: { slug: o.slug },
						className: "group overflow-hidden rounded-lg bg-fg shadow-[0_0_0_1px_var(--color-paper-line)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: o.image,
							alt: "",
							className: "aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "p-4 font-display font-semibold text-ink-text",
							children: o.name
						})]
					}, o.slug))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
		]
	});
}
//#endregion
export { ServicePage as component };
