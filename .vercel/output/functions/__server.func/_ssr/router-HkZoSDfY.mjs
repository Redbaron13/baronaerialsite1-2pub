import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { B as notFound, _ as createRootRoute, b as require_jsx_runtime, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TriangleAlert, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-shell-DEp3cXhz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function BrandMark({ compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex items-center gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 32 32",
			className: "size-8 shrink-0",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "32",
					height: "32",
					rx: "7",
					fill: "#0A0E0A"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M16 7 L25 22 H7 Z",
					fill: "none",
					stroke: "#1CC24D",
					strokeWidth: "2.1",
					strokeLinejoin: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "16",
					cy: "16.5",
					r: "2",
					fill: "#1CC24D"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: cn("font-display leading-tight font-semibold tracking-[0.04em] text-fg", compact ? "text-xs" : "text-[0.82rem]"),
			children: [
				"Baron",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"Aerial Media"
			]
		})]
	});
}
var brand = {
	name: "Baron Aerial Media",
	short: "BAM",
	tagline: "Altitude changes everything.",
	city: "Newark, New Jersey",
	serviceArea: "North Jersey and the New York metro",
	part107: "FAA Part 107 Remote Pilot"
};
var nav = [
	{
		to: "/work",
		label: "Work"
	},
	{
		to: "/capabilities",
		label: "Capabilities"
	},
	{
		to: "/mission-planner",
		label: "Mission Planner"
	},
	{
		to: "/about",
		label: "About"
	}
];
var process = [
	{
		n: "01",
		title: "Plan",
		body: "Objective, site, timing, and the decision the media has to support."
	},
	{
		n: "02",
		title: "Authorize",
		body: "Airspace, access, weather, privacy, and operating constraints."
	},
	{
		n: "03",
		title: "Fly",
		body: "Disciplined capture from the viewpoints the brief actually needs."
	},
	{
		n: "04",
		title: "Deliver",
		body: "Organized stills, film, maps, or models — handed off the way you work."
	}
];
var audiences = [
	{
		title: "Insurance adjusters",
		body: "Time-stamped aerial context that organizes visible-condition documentation for claim review."
	},
	{
		title: "Luxury + commercial real estate",
		body: "Elevated property storytelling — scale, access, amenities, and surroundings in one coherent view."
	},
	{
		title: "Construction + property management",
		body: "Repeatable progress views and site-wide clarity for owners, foremen, lenders, and portfolio teams."
	},
	{
		title: "Solar + roofing teams",
		body: "Planned roof and array imagery that gives qualified crews a clear visual starting point."
	}
];
var services = [
	{
		slug: "real-estate",
		name: "Real Estate Aerial Media",
		eyebrow: "Listings + marketing",
		summary: "Cinematic listing films, twilight stills, and neighborhood context that make scale, access, and setting unmistakable.",
		image: "/media/svc-real-estate.webp",
		deliverables: [
			"Aerial listing film",
			"Hero + twilight stills",
			"Neighborhood / access context",
			"MLS-ready stills"
		],
		forWhom: "Brokers, developers, and owners selling or marketing a property."
	},
	{
		slug: "construction",
		name: "Construction Progress",
		eyebrow: "Jobsite documentation",
		summary: "Repeatable viewpoints so month-over-month progress, staging, and site context are comparable — not a new angle every visit.",
		image: "/media/svc-construction.webp",
		deliverables: [
			"Scheduled progress stills",
			"Site-wide context",
			"Shareable stakeholder set",
			"Optional orthomosaic"
		],
		forWhom: "Owners, GCs, lenders, and project managers."
	},
	{
		slug: "inspections",
		name: "Aerial Inspections",
		eyebrow: "Hard-to-reach assets",
		summary: "Close-range visual documentation of roofs, facades, towers, and structures — organized for qualified review teams on the ground.",
		image: "/media/svc-inspections.webp",
		deliverables: [
			"Close-range stills",
			"Overview + detail set",
			"Annotated frames on request"
		],
		forWhom: "Facility managers, inspectors, and asset owners."
	},
	{
		slug: "damage",
		name: "Property Damage Documentation",
		eyebrow: "Claims + visible condition",
		summary: "Time-stamped aerial context and visible-condition imagery for owners, adjusters, and qualified professionals. BAM documents what is visible — we do not certify cause or condition.",
		image: "/media/svc-damage.webp",
		deliverables: [
			"Time-stamped aerials",
			"Site-wide context",
			"Detail frames of visible conditions"
		],
		forWhom: "Owners, public adjusters, and restoration teams."
	},
	{
		slug: "roof-solar",
		name: "Roof + Solar Visual Documentation",
		eyebrow: "Arrays + envelope",
		summary: "Overview and detail imagery of roofs and solar arrays, organized for qualified client teams. Not an engineering report and not a condition certification.",
		image: "/media/svc-solar.webp",
		deliverables: [
			"Array / roof overview",
			"Panel-level stills",
			"Context of access and surroundings"
		],
		forWhom: "Solar installers, roofers, and property teams."
	},
	{
		slug: "mapping",
		name: "Mapping + 3D Site Models",
		eyebrow: "Scoped photogrammetry",
		summary: "Planned overlapping capture for orthomosaics, photogrammetry, and 3D site models when the decision needs measured context — not just a pretty frame.",
		image: "/media/svc-mapping.webp",
		deliverables: [
			"Orthomosaic",
			"Point cloud / mesh (scoped)",
			"Source frames",
			"Flight coverage notes"
		],
		forWhom: "Survey-adjacent teams, GCs, and planners who need site geometry."
	},
	{
		slug: "events",
		name: "Event Aerial Media",
		eyebrow: "Venues + gatherings",
		summary: "Aerial coverage planned around the venue, people, timing, boundaries, and the final media need — flown only with organizer and airspace clearance.",
		image: "/media/svc-events.webp",
		deliverables: [
			"Event stills",
			"Short aerial film",
			"Venue context"
		],
		forWhom: "Organizers, venues, and civic teams."
	}
];
function serviceBySlug(slug) {
	return services.find((s) => s.slug === slug);
}
var work = [
	{
		slug: "night-corridor",
		title: "Night corridor documentation",
		category: "Infrastructure",
		image: "/media/work-night.webp",
		summary: "Night aerial of an illuminated transportation corridor — scale, access, and surrounding commercial fabric in one frame.",
		mission: "Area context after dark",
		outputs: "Stills + panorama",
		featured: true
	},
	{
		slug: "residential-context",
		title: "Residential property in context",
		category: "Property",
		image: "/media/work-residential.webp",
		summary: "A single-family property placed in its neighborhood — approach, lot, and surrounding fabric.",
		mission: "Listing context",
		outputs: "Hero stills"
	},
	{
		slug: "commercial-access",
		title: "Commercial property and access",
		category: "Commercial",
		image: "/media/work-commercial.webp",
		summary: "Site, parking, and street access documented so a listing or lease packet reads at a glance.",
		mission: "Commercial listing",
		outputs: "Stills"
	},
	{
		slug: "interchange-geometry",
		title: "Interchange geometry from above",
		category: "Infrastructure",
		image: "/media/work-interchange.webp",
		summary: "Top-down coverage of highway geometry used as mapping / context reference — not a certified survey.",
		mission: "Site geometry",
		outputs: "Nadir stills"
	},
	{
		slug: "tower-detail",
		title: "Asset detail at the right scale",
		category: "Inspection",
		image: "/media/work-tower.webp",
		summary: "Standoff inspection of a communications tower — close enough to read, far enough to keep crews on the ground.",
		mission: "Visual inspection",
		outputs: "Detail stills"
	},
	{
		slug: "civic-site",
		title: "Civic site context",
		category: "Civic",
		image: "/media/work-civic.jpg",
		summary: "A public site documented for orientation — buildings, approaches, and surrounding neighborhood.",
		mission: "Campus / civic context",
		outputs: "Overview stills"
	}
];
var workFilters = [
	"All",
	"Property",
	"Commercial",
	"Infrastructure",
	"Inspection",
	"Civic"
];
var plannerOptions = [
	{
		key: "real-estate",
		title: "Sell or market a property",
		hint: "Listing, brokerage, development"
	},
	{
		key: "construction",
		title: "Document a build",
		hint: "Progress, stakeholders, mapping"
	},
	{
		key: "inspections",
		title: "Inspect an asset",
		hint: "Roof, facade, tower, envelope"
	},
	{
		key: "damage",
		title: "Document damage",
		hint: "Claim context, visible condition"
	},
	{
		key: "roof-solar",
		title: "Capture a roof or array",
		hint: "Solar, roofing, maintenance"
	},
	{
		key: "mapping",
		title: "Map a site",
		hint: "Orthomosaic, 3D, geometry"
	}
];
var trustChecks = [
	"Airspace, authorization, and waiver needs",
	"Site access, people, and active operations",
	"Weather, lighting, and safety conditions",
	"Privacy, sensitive details, and media handling",
	"Requested deliverables and scope boundaries"
];
var disclaimer = "A submitted brief starts a feasibility review. It does not authorize a flight, confirm a date, or create a contract. Conditions and approvals can change what is operationally possible.";
function SiteFooter({ tone = "dark" }) {
	const light = tone === "light";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: cn("border-t", light ? "border-paper-line bg-paper text-ink-muted" : "border-line/80 bg-ink text-muted"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "site-container grid gap-10 py-12 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						"aria-label": "Baron Aerial Media — home",
						className: cn(light && "rounded-md bg-ink px-3 py-2 inline-flex"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 max-w-xs text-sm leading-relaxed",
						children: [
							"Planned aerial media and visual documentation. Owner-operated, ",
							brand.part107,
							". ",
							brand.city,
							"."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("mb-3 font-display text-sm font-semibold", light ? "text-ink-text" : "text-fg"),
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "grid gap-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/work",
							className: "hover:text-green",
							children: "Work"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/capabilities",
							className: "hover:text-green",
							children: "Capabilities"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "hover:text-green",
							children: "About"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("mb-3 font-display text-sm font-semibold", light ? "text-ink-text" : "text-fg"),
					children: "Plan"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "grid gap-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/mission-planner",
							className: "hover:text-green",
							children: "Mission Planner"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "hover:text-green",
							children: "Contact"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/trust",
							className: "hover:text-green",
							children: "Trust + Safety"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("mb-3 font-display text-sm font-semibold", light ? "text-ink-text" : "text-fg"),
					children: "Legal"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "grid gap-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy",
							className: "hover:text-green",
							children: "Privacy"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/terms",
							className: "hover:text-green",
							children: "Terms"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/accessibility",
							className: "hover:text-green",
							children: "Accessibility"
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("site-container flex flex-wrap items-center justify-between gap-3 border-t py-5 text-xs", light ? "border-paper-line" : "border-line/80"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				brand.name,
				". All rights reserved."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				brand.part107,
				" · ",
				brand.city
			] })]
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-display font-semibold transition-[transform,background-color,border-color,box-shadow,color] duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-green disabled:pointer-events-none disabled:opacity-50 active:scale-[0.96]", {
	variants: {
		variant: {
			primary: "bg-green text-green-ink shadow-[0_6px_24px_-8px_rgba(28,194,77,0.35)] hover:-translate-y-0.5 hover:bg-green-deep",
			ghost: "border border-line bg-fg/5 text-fg hover:-translate-y-0.5 hover:border-green-deep",
			light: "border border-paper-line bg-fg text-ink-text hover:-translate-y-0.5",
			dark: "bg-ink-text text-paper hover:bg-ink",
			outline: "border border-paper-line bg-fg text-ink-text hover:border-green-deep"
		},
		size: {
			md: "min-h-12 rounded-pill px-6 text-[0.95rem]",
			sm: "min-h-10 rounded-pill px-4 text-sm",
			pill: "min-h-9 rounded-pill px-4 text-xs tracking-wide"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function SiteHeader() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-6 border-b px-[clamp(1.25rem,5vw,4rem)] transition-[background-color,backdrop-filter,padding,border-color] duration-300", scrolled || open ? "border-line/80 bg-ink/85 py-2.5 backdrop-blur-md" : "border-transparent bg-ink/35 py-4 backdrop-blur-[2px]"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "flex shrink-0 items-center",
				"aria-label": "Baron Aerial Media — home",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, { compact: true })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "hidden items-center gap-8 lg:flex",
				"aria-label": "Primary",
				children: nav.map((item) => {
					const current = pathname === item.to || pathname.startsWith(item.to + "/");
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						"aria-current": current ? "page" : void 0,
						className: cn("relative font-display text-[0.95rem] font-medium text-muted transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-green after:transition-transform after:duration-300 hover:text-fg hover:after:scale-x-100", current && "text-fg after:scale-x-100"),
						children: item.label
					}, item.to);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "hidden font-display text-sm font-medium text-fg-soft hover:text-fg sm:inline",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						className: "hidden sm:inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/mission-planner",
							children: ["Plan a Mission", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "→"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex min-h-11 min-w-11 items-center justify-center rounded-pill border border-line px-3 font-display text-xs font-semibold text-fg lg:hidden",
						"aria-expanded": open,
						"aria-controls": "mobile-nav",
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							className: "size-4",
							"aria-hidden": "true"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
							className: "size-4",
							"aria-hidden": "true"
						})
					})
				]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				id: "mobile-nav",
				className: "absolute inset-x-0 top-full flex flex-col border-b border-line bg-ink/95 px-[clamp(1.25rem,5vw,4rem)] py-2 backdrop-blur-md lg:hidden",
				"aria-label": "Mobile",
				children: [
					nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "border-b border-line/80 py-4 font-display font-medium text-fg",
						children: item.label
					}, item.to)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "border-b border-line/80 py-4 font-display font-medium text-fg",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/mission-planner",
						className: "py-4 font-display font-semibold text-green",
						children: "Plan a Mission"
					})
				]
			}) : null
		]
	});
}
function PageShell({ children, tone = "light" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex min-h-svh flex-col", tone === "light" ? "theme-light" : "bg-ink text-fg-soft"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, { tone })
		]
	});
}
function PageHero({ eyebrow, title, lead, tone = "light" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-[clamp(1.25rem,5vw,4rem)] pb-10 pt-32 md:pb-16 md:pt-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-5xl gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "max-w-[16ch] text-[clamp(2.4rem,6vw,4.6rem)]",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("lead max-w-[54ch]", tone === "light" ? "text-ink-muted" : "text-fg-soft"),
					children: lead
				})
			]
		})
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-HkZoSDfY.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-Cun-hgMl.css";
var APP_NAME = "Baron Aerial Media";
var Route$12 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "FAA Part 107 aerial imaging, mapping, inspection, and property documentation. Owner-operated out of Newark, New Jersey."
			},
			{
				name: "theme-color",
				content: "#0A0E0A"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap"
			}
		]
	}),
	notFoundComponent: NotFound,
	component: RootDocument
});
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, {
		tone: "light",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "site-container grid min-h-[70vh] place-content-center gap-4 py-32 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-5xl",
					children: "That page isn’t on the flight plan."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lead mx-auto",
					children: "The URL doesn’t match a published page. Head home or open the work gallery."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							children: "Home"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/work",
							children: "Work"
						})
					})]
				})
			]
		})
	});
}
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
var $$splitComponentImporter$11 = () => import("./routes-Ddn0bxTe.mjs");
var Route$11 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$11, "component"),
	head: () => ({
		title: "Baron Aerial Media — Planned Aerial Operations",
		meta: [{
			name: "description",
			content: "FAA Part 107 aerial imaging, mapping, inspection, and property documentation for real estate, construction, insurance, and infrastructure. Newark, New Jersey."
		}]
	})
});
var $$splitComponentImporter$10 = () => import("./about-DcW45M4C.mjs");
var Route$10 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$10, "component"),
	head: () => ({
		title: "About — Baron Aerial Media",
		meta: [{
			name: "description",
			content: "Owner-operated, FAA Part 107 commercial drone work out of Newark, New Jersey. The flight is only one part of the work."
		}]
	})
});
var $$splitComponentImporter$9 = () => import("./accessibility-jolHPXdO.mjs");
var Route$9 = createFileRoute("/accessibility")({
	component: lazyRouteComponent($$splitComponentImporter$9, "component"),
	head: () => ({
		title: "Accessibility — Baron Aerial Media",
		meta: [{
			name: "description",
			content: "Accessibility commitment for the Baron Aerial Media website."
		}]
	})
});
var $$splitComponentImporter$8 = () => import("./capabilities-DIUCue0W.mjs");
var Route$8 = createFileRoute("/capabilities")({
	component: lazyRouteComponent($$splitComponentImporter$8, "component"),
	head: () => ({
		title: "Capabilities — Baron Aerial Media",
		meta: [{
			name: "description",
			content: "Real estate aerials, construction progress, inspections, property damage documentation, roof + solar, mapping, and event coverage."
		}]
	})
});
var $$splitComponentImporter$7 = () => import("./contact-CYAdniQU.mjs");
var Route$7 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	head: () => ({
		title: "Plan a Drone Mission — Baron Aerial Media",
		meta: [{
			name: "description",
			content: "A short mission-discovery brief: objective, site, airspace, and deliverables."
		}]
	})
});
var $$splitComponentImporter$6 = () => import("./mission-planner-DoOrhKYJ.mjs");
var Route$6 = createFileRoute("/mission-planner")({
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
	head: () => ({
		title: "Mission Planner — Baron Aerial Media",
		meta: [{
			name: "description",
			content: "Not sure what you need? Pick the closest goal and we’ll point you to the right workflow."
		}]
	})
});
var $$splitComponentImporter$5 = () => import("./privacy-75tYz8V_.mjs");
var Route$5 = createFileRoute("/privacy")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({
		title: "Privacy — Baron Aerial Media",
		meta: [{
			name: "description",
			content: "How Baron Aerial Media handles inquiry and mission information."
		}]
	})
});
var $$splitComponentImporter$4 = () => import("./terms-DiFqfjGz.mjs");
var Route$4 = createFileRoute("/terms")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({
		title: "Terms — Baron Aerial Media",
		meta: [{
			name: "description",
			content: "Terms for using the Baron Aerial Media website and requesting a mission."
		}]
	})
});
var $$splitComponentImporter$3 = () => import("./trust-DN7NYBjA.mjs");
var Route$3 = createFileRoute("/trust")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({
		title: "Trust + Safety — Baron Aerial Media",
		meta: [{
			name: "description",
			content: "What BAM reviews before committing to a flight: airspace, access, weather, privacy, and scope."
		}]
	})
});
var $$splitComponentImporter$2 = () => import("./work-DKIlgQLn.mjs");
var Route$2 = createFileRoute("/work")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({
		title: "Work — Baron Aerial Media",
		meta: [{
			name: "description",
			content: "Selected aerial work: property, commercial, infrastructure, inspection, and civic sites."
		}]
	})
});
var $$splitComponentImporter$1 = () => import("./capabilities._slug-4cv7pARt.mjs");
var Route$1 = createFileRoute("/capabilities/$slug")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	loader: ({ params }) => {
		const service = serviceBySlug(params.slug);
		if (!service) throw notFound();
		return service;
	},
	head: ({ loaderData }) => ({
		title: `${loaderData?.name ?? "Capability"} — Baron Aerial Media`,
		meta: [{
			name: "description",
			content: loaderData?.summary ?? ""
		}]
	})
});
var $$splitComponentImporter = () => import("./work._slug-B5kId04g.mjs");
var Route = createFileRoute("/work/$slug")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: ({ params }) => {
		const item = work.find((w) => w.slug === params.slug);
		if (!item) throw notFound();
		return item;
	},
	head: ({ loaderData }) => ({
		title: `${loaderData?.title ?? "Work"} — Baron Aerial Media`,
		meta: [{
			name: "description",
			content: loaderData?.summary ?? ""
		}]
	})
});
var IndexRoute = Route$11.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$12
});
var AboutRoute = Route$10.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$12
});
var AccessibilityRoute = Route$9.update({
	id: "/accessibility",
	path: "/accessibility",
	getParentRoute: () => Route$12
});
var CapabilitiesRoute = Route$8.update({
	id: "/capabilities",
	path: "/capabilities",
	getParentRoute: () => Route$12
});
var ContactRoute = Route$7.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$12
});
var MissionPlannerRoute = Route$6.update({
	id: "/mission-planner",
	path: "/mission-planner",
	getParentRoute: () => Route$12
});
var PrivacyRoute = Route$5.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$12
});
var TermsRoute = Route$4.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$12
});
var TrustRoute = Route$3.update({
	id: "/trust",
	path: "/trust",
	getParentRoute: () => Route$12
});
var WorkRoute = Route$2.update({
	id: "/work",
	path: "/work",
	getParentRoute: () => Route$12
});
var CapabilitiesSlugRoute = Route$1.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => CapabilitiesRoute
});
var WorkSlugRoute = Route.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => WorkRoute
});
var CapabilitiesRouteChildren = { CapabilitiesSlugRoute };
var CapabilitiesRouteWithChildren = CapabilitiesRoute._addFileChildren(CapabilitiesRouteChildren);
var WorkRouteChildren = { WorkSlugRoute };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AccessibilityRoute,
	CapabilitiesRoute: CapabilitiesRouteWithChildren,
	ContactRoute,
	MissionPlannerRoute,
	PrivacyRoute,
	TermsRoute,
	TrustRoute,
	WorkRoute: WorkRoute._addFileChildren(WorkRouteChildren)
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { workFilters as _, PageHero as a, brand as c, plannerOptions as d, process as f, work as g, trustChecks as h, Button as i, cn as l, services as m, Route as n, PageShell as o, serviceBySlug as p, Route$1 as r, audiences as s, router_exports as t, disclaimer as u };
