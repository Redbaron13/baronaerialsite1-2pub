import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as CtaBand } from "./cta-band-CtIHZCl5.mjs";
import { t as ProcessStrip } from "./process-strip-CYE10Lai.mjs";
import { t as ImageCard } from "./image-card-BAV4LXl4.mjs";
import { c as brand, g as work, i as Button, m as services, o as PageShell, s as audiences } from "./router-HkZoSDfY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Ddn0bxTe.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const featured = work.find((w) => w.featured) ?? work[0];
	const homeServices = services.filter((s) => s.slug !== "events");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		tone: "dark",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative flex min-h-svh items-center overflow-hidden pt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 -z-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/media/hero-city.webp",
							alt: "Aerial approach over the city waterfront",
							className: "size-full object-cover"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-[linear-gradient(90deg,var(--color-ink)_0%,rgba(10,14,10,0.72)_46%,rgba(10,14,10,0.18)_100%),linear-gradient(0deg,var(--color-ink)_2%,transparent_48%)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "site-container grid max-w-3xl gap-6 py-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "eyebrow",
								children: ["Planned aerial operations · ", brand.part107]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "text-[clamp(2.7rem,7vw,5.4rem)] text-fg",
								children: [
									"See the whole site.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Act with confidence."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "lead",
								children: "Aerial media and visual documentation for insurance, real estate, construction, property management, and solar teams that need the full site story — not another disconnected image."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										children: "Plan a Mission"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "ghost",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/work",
										children: "View Our Work"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted",
								children: [
									"Owner-operated · ",
									brand.city,
									" · ",
									brand.serviceArea
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessStrip, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "site-container grid items-center gap-10 py-20 md:grid-cols-2 md:gap-16 md:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/media/featured-night.webp",
					alt: "Night aerial of an illuminated transportation corridor",
					className: "media-frame aspect-[4/3] w-full rounded-md object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Project context, made useful"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-[clamp(1.9rem,4vw,3.1rem)] text-fg",
						children: "Show the scale, access, condition, and surrounding context in one view."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-[48ch] text-fg-soft",
						children: "From a high-value listing to an active commercial build, each mission is planned around the decision your team needs to make next — then screened for airspace, access, and safety."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/work/$slug",
						params: { slug: featured.slug },
						className: "mt-6 inline-flex items-center gap-1 font-display text-sm font-semibold text-green",
						children: ["View selected work", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-line py-20 md:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "site-container",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Built for the people who own the next decision"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 max-w-[20ch] text-[clamp(1.9rem,4vw,3.1rem)] text-fg",
							children: "Visual evidence for complex properties, active jobsites, and critical assets."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid border border-line sm:grid-cols-2 lg:grid-cols-4",
							children: audiences.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "border-b border-line p-7 last:border-b-0 sm:border-r sm:odd:border-r lg:border-b-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base text-fg",
									children: a.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted",
									children: a.body
								})]
							}, a.title))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "site-container py-20 md:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Capabilities"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-[clamp(1.9rem,4vw,3.1rem)] text-fg",
						children: "Built for the decision around the site."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/capabilities",
						className: "inline-flex items-center gap-1 font-display text-sm font-semibold text-green",
						children: ["All capabilities", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 md:grid-cols-2",
					children: [homeServices.slice(0, 2).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageCard, {
						slug: s.slug,
						image: s.image,
						title: s.name,
						body: s.summary,
						kicker: s.eyebrow,
						tall: true
					}, s.slug)), homeServices.slice(2).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageCard, {
						slug: s.slug,
						image: s.image,
						title: s.name,
						body: s.summary,
						kicker: s.eyebrow
					}, s.slug))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[52vh] overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/media/about-panorama.webp",
						alt: "",
						className: "absolute inset-0 size-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "site-container relative grid max-w-xl gap-4 py-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Start with a useful brief"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-[clamp(1.9rem,4vw,3.1rem)] text-fg",
								children: "Know what may affect the mission before you plan around the flight."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "lead",
								children: "The Mission Planner maps your goal to a workflow. The brief captures objective, site, timing, constraints, and outputs — then we review feasibility."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/mission-planner",
									children: "Open Mission Planner"
								})
							}) })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, { tone: "dark" })
		]
	});
}
//#endregion
export { Home as component };
