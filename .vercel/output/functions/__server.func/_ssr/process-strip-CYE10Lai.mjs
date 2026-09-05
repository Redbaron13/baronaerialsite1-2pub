import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as process, l as cn } from "./router-HkZoSDfY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/process-strip-CYE10Lai.js
var import_jsx_runtime = require_jsx_runtime();
function ProcessStrip({ tone = "dark" }) {
	const light = tone === "light";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("grid border-y sm:grid-cols-2 lg:grid-cols-4", light ? "border-paper-line bg-paper-2" : "border-line bg-ink-2"),
		children: process.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("grid gap-1.5 border-b px-6 py-8 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0", light ? "border-paper-line" : "border-line"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-xs font-semibold tracking-[0.14em] text-green",
				children: step.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("text-sm leading-relaxed", light ? "text-ink-muted" : "text-fg-soft"),
				children: step.body
			})]
		}, step.n))
	});
}
//#endregion
export { ProcessStrip as t };
