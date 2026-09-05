import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageHero, i as Button, l as cn, m as services, o as PageShell, u as disclaimer } from "./router-HkZoSDfY.mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CYAdniQU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var submitBrief = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("2e3178a40b575a438102068b900ac4c8c2e16553f9064ac34edce6af672213a4"));
var STEPS = [
	"Objective",
	"Site + Timing",
	"Outputs",
	"Contact"
];
var DELIVERABLES = [
	"Photos",
	"Video",
	"3D model",
	"Orthomosaic",
	"Report",
	"Matterport"
];
function ContactPage() {
	const [step, setStep] = (0, import_react.useState)(0);
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [note, setNote] = (0, import_react.useState)("");
	const [dels, setDels] = (0, import_react.useState)([]);
	async function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		setStatus("sending");
		const res = await submitBrief({ data: {
			gotcha: String(fd.get("_gotcha") || ""),
			missionType: String(fd.get("mission_type") || ""),
			location: String(fd.get("location") || ""),
			timing: String(fd.get("timing") || ""),
			siteDetail: String(fd.get("site_detail") || ""),
			airspace: String(fd.get("airspace") || ""),
			targetDate: String(fd.get("target_date") || ""),
			deliverables: dels,
			usage: String(fd.get("usage") || ""),
			budget: String(fd.get("budget") || ""),
			name: String(fd.get("name") || ""),
			email: String(fd.get("email") || ""),
			phone: String(fd.get("phone") || ""),
			company: String(fd.get("company") || "")
		} });
		if (res.ok) {
			setStatus("ok");
			setNote("Brief received. We’ll review objective, site, airspace, and outputs, then follow up.");
		} else {
			setStatus("err");
			setNote(res.error || "Something went wrong.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		tone: "light",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Mission discovery",
			title: "Tell us what you’re trying to accomplish.",
			lead: "This brief is built for real mission planning — objective, site, airspace, and deliverables — not just a name and email."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "site-container grid items-start gap-8 pb-20 lg:grid-cols-[1.3fr_0.9fr]",
			children: [status === "ok" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-fg p-8 shadow-[0_0_0_1px_var(--color-paper-line)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Brief sent"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-3xl",
						children: "We’ll review the mission."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-ink-muted",
						children: note
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "rounded-xl bg-fg p-6 shadow-[0_0_0_1px_var(--color-paper-line)] md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						name: "_gotcha",
						tabIndex: -1,
						autoComplete: "off",
						"aria-hidden": "true",
						className: "absolute -left-[9999px] h-0 w-0 opacity-0"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-6 flex flex-wrap gap-2",
						role: "tablist",
						"aria-label": "Brief steps",
						children: STEPS.map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setStep(i),
							className: cn("inline-flex min-h-10 items-center gap-2 rounded-pill px-3 font-display text-sm font-semibold", i === step ? "bg-green-deep text-fg" : "bg-paper-2 text-ink-muted"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-5 place-items-center rounded-full bg-ink/10 text-[0.7rem]",
								children: i + 1
							}), label]
						}, label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("grid gap-5", step !== 0 && "hidden"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "What type of mission are you planning?",
								htmlFor: "mtype",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									id: "mtype",
									name: "mission_type",
									className: "field-input",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Select one…"
										}),
										services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s.name }, s.slug)),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Other" })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Where is the project located?",
								htmlFor: "loc",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "loc",
									name: "location",
									className: "field-input",
									placeholder: "Address, city, or general area"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "When do you need the mission performed?",
								htmlFor: "timing",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									id: "timing",
									name: "timing",
									className: "field-input",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Select one…"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Specific date" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Flexible window" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Recurring progress tracking" })
									]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("grid gap-5", step !== 1 && "hidden"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Tell us about the site",
								htmlFor: "site",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "site",
									name: "site_detail",
									rows: 3,
									className: "field-input",
									placeholder: "Property size, structures, access, anything unusual…"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Any airspace or access constraints you know of?",
								htmlFor: "airspace",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "airspace",
									name: "airspace",
									className: "field-input",
									placeholder: "Near an airport, restricted area, HOA, gated…"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Target date or window",
								htmlFor: "date",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "date",
									name: "target_date",
									className: "field-input",
									placeholder: "e.g. week of Sep 8, or flexible"
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("grid gap-5", step !== 2 && "hidden"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: "mb-2 font-display text-sm font-semibold text-ink-text",
								children: "Which deliverables do you want?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: DELIVERABLES.map((d) => {
									const on = dels.includes(d);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: cn("inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-pill px-4 font-display text-sm font-semibold", on ? "bg-green-deep text-fg" : "bg-paper-2 text-ink-muted"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											className: "size-4 accent-green-deep",
											checked: on,
											onChange: () => setDels((cur) => on ? cur.filter((x) => x !== d) : [...cur, d])
										}), d]
									}, d);
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "How will the deliverables be used?",
								htmlFor: "usage",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "usage",
									name: "usage",
									className: "field-input",
									placeholder: "Listing, marketing, permitting, progress, insurance…"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Budget range (optional)",
								htmlFor: "budget",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "budget",
									name: "budget",
									className: "field-input",
									placeholder: "Helps us recommend the right workflow"
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("grid gap-5", step !== 3 && "hidden"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Your name",
								htmlFor: "name",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "name",
									name: "name",
									required: true,
									className: "field-input",
									placeholder: "First and last"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								htmlFor: "email",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "email",
									name: "email",
									type: "email",
									required: true,
									className: "field-input",
									placeholder: "you@company.com"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Phone (optional)",
								htmlFor: "phone",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "phone",
									name: "phone",
									className: "field-input",
									placeholder: "(   )   -    "
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Company (optional)",
								htmlFor: "company",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "company",
									name: "company",
									className: "field-input",
									placeholder: "Company or brokerage"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-paper-muted",
								children: disclaimer
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							className: step === 0 ? "invisible" : "",
							onClick: () => setStep((s) => Math.max(0, s - 1)),
							children: "Back"
						}), step < 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							onClick: () => setStep((s) => Math.min(3, s + 1)),
							children: "Continue Mission Brief"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: status === "sending",
							children: status === "sending" ? "Sending…" : "Send Mission Brief"
						})]
					}),
					status === "err" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-red-700",
						children: note
					}) : null
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "rounded-xl bg-ink p-8 text-fg-soft",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "What happens next"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-2xl text-fg",
						children: "A useful conversation starts with the mission."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm",
						children: "We review your objective, location, timing, airspace, and desired outputs, then determine what’s operationally feasible and which workflow fits."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-6 grid gap-4",
						children: [
							"Review objective",
							"Check site + airspace",
							"Define scope + deliverables",
							"Schedule mission or consultation"
						].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 font-display",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-green",
								children: ["0", i + 1]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-fg",
								children: item
							})]
						}, item))
					})
				]
			})]
		})]
	});
}
function Field({ label, htmlFor, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor,
			className: "font-display text-sm font-semibold text-ink-text",
			children: label
		}), children]
	});
}
//#endregion
export { ContactPage as component };
