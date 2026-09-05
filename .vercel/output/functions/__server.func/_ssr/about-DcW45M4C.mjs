import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CtaBand } from "./cta-band-CtIHZCl5.mjs";
import { t as ProcessStrip } from "./process-strip-CYE10Lai.mjs";
import { a as PageHero, c as brand, f as process, i as Button, o as PageShell } from "./router-HkZoSDfY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DcW45M4C.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		tone: "light",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Owner-operated",
				title: "The flight is only one part of the work.",
				lead: `${brand.name} plans the capture, screens the operating environment, and organizes media around a real decision — not just a flight.`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "site-container grid items-start gap-10 pb-16 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[clamp(1.7rem,3vw,2.6rem)]",
						children: "Aerial work with a purpose behind every flight."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-ink-muted",
						children: [
							"BAM is an owner-operated commercial drone practice based in ",
							brand.city,
							", serving",
							" ",
							brand.serviceArea,
							". We are ",
							brand.part107,
							" certified. Every project starts with the outcome — a listing that sells, a site that’s documented, an asset that’s inspected without putting a crew on a roof."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-ink-muted",
						children: "From there we plan the flight, capture at high resolution, process into the right deliverable, and hand it off the way you actually work. We document what is visible. We do not certify engineering condition, and a requested date is planning input — not a flight commitment — until airspace, access, and weather clear."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: "Plan a Mission"
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/media/about-panorama.webp",
					alt: "Aerial panorama",
					className: "media-frame min-h-[22rem] rounded-lg object-cover md:min-h-[32rem]"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "site-container grid gap-3 pb-16 sm:grid-cols-4",
				children: [
					["FAA", "Part 107 compliant"],
					["NJ", "Newark + North Jersey"],
					["4", "Buyer types we plan for"],
					["E2E", "Plan → fly → deliver"]
				].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-fg px-5 py-6 shadow-[0_0_0_1px_var(--color-paper-line)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl text-ink-text",
						children: k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-xs tracking-[0.12em] text-green-deep uppercase",
						children: v
					})]
				}, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessStrip, { tone: "light" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "site-container py-16 md:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "How we work"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 mb-10 text-[clamp(1.7rem,3vw,2.6rem)]",
						children: "Four steps, every mission."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "grid gap-6 md:grid-cols-2",
						children: process.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-lg bg-fg p-6 shadow-[0_0_0_1px_var(--color-paper-line)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-sm text-green-deep",
									children: s.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 text-xl",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-ink-muted",
									children: s.body
								})
							]
						}, s.n))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
		]
	});
}
//#endregion
export { AboutPage as component };
