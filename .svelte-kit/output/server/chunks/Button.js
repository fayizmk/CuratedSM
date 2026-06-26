import { b as attr, o as stringify, t as attr_class } from "./server.js";
//#region src/lib/components/Button.svelte
function Button($$renderer, $$props) {
	let { children, variant = "primary", disabled = false, onclick } = $$props;
	$$renderer.push(`<button${attr_class(`btn ${stringify(variant)}`, "svelte-18sv61c")}${attr("disabled", disabled, true)}>`);
	children($$renderer);
	$$renderer.push(`<!----></button>`);
}
//#endregion
export { Button as t };
