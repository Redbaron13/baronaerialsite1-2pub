import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/submit-brief-D8c_u7C3.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var submitBrief_createServerFn_handler = createServerRpc({
	id: "2e3178a40b575a438102068b900ac4c8c2e16553f9064ac34edce6af672213a4",
	name: "submitBrief",
	filename: "src/lib/submit-brief.ts"
}, (opts) => submitBrief.__executeServer(opts));
var submitBrief = createServerFn({ method: "POST" }).validator((data) => data).handler(submitBrief_createServerFn_handler, async ({ data }) => {
	if (data.gotcha) return {
		ok: true,
		ignored: true
	};
	const email = String(data.email || "").trim();
	if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return {
		ok: false,
		error: "A valid email is required."
	};
	if (!String(data.name || "").trim()) return {
		ok: false,
		error: "Name is required."
	};
	return { ok: true };
});
//#endregion
export { submitBrief_createServerFn_handler };
