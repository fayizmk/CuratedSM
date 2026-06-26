import { a as store_get, s as unsubscribe_stores, x as escape_html } from "../../chunks/server.js";
import { n as cartItemCount } from "../../chunks/cart.js";
//#region src/lib/components/Header.svelte
function Header($$renderer, $$props) {
	var $$store_subs;
	let { title = "Shop" } = $$props;
	$$renderer.push(`<header class="svelte-1elxaub"><div class="header-inner svelte-1elxaub"><a href="/" class="logo svelte-1elxaub">${escape_html(title)}</a> <nav class="svelte-1elxaub"><a href="/" class="svelte-1elxaub">Products</a> <a href="/cart" class="svelte-1elxaub">Cart `);
	if (store_get($$store_subs ??= {}, "$cartItemCount", cartItemCount) > 0) {
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<span class="badge svelte-1elxaub">${escape_html(store_get($$store_subs ??= {}, "$cartItemCount", cartItemCount))}</span>`);
	} else $$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]--></a></nav></div></header>`);
	if ($$store_subs) unsubscribe_stores($$store_subs);
}
//#endregion
//#region src/lib/components/Footer.svelte
function Footer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<footer class="svelte-jz8lnl"><div class="footer-inner svelte-jz8lnl"><p>© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} Shop App. All rights reserved.</p></div></footer>`);
	});
}
//#endregion
//#region src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	let { children } = $$props;
	$$renderer.push(`<div class="layout svelte-12qhfyh">`);
	Header($$renderer, {});
	$$renderer.push(`<!----> <main class="svelte-12qhfyh">`);
	children($$renderer);
	$$renderer.push(`<!----></main> `);
	Footer($$renderer, {});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _layout as default };
