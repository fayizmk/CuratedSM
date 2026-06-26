import { a as store_get, b as attr, r as ensure_array_like, s as unsubscribe_stores, x as escape_html } from "../../../chunks/server.js";
import { r as cartTotal, t as cart } from "../../../chunks/cart.js";
import { t as Button } from "../../../chunks/Button.js";
//#region src/routes/cart/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		$$renderer.push(`<h1 class="svelte-k7hhd7">Shopping Cart</h1> `);
		if (store_get($$store_subs ??= {}, "$cart", cart).length === 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="empty svelte-k7hhd7">Your cart is empty.</p> <a href="/" class="continue svelte-k7hhd7">Continue Shopping</a>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div class="items svelte-k7hhd7"><!--[-->`);
			const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$cart", cart));
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let item = each_array[$$index];
				$$renderer.push(`<div class="item svelte-k7hhd7"><img${attr("src", item.product.image)}${attr("alt", item.product.name)} class="svelte-k7hhd7"/> <div class="info svelte-k7hhd7"><h3 class="svelte-k7hhd7">${escape_html(item.product.name)}</h3> <p class="price svelte-k7hhd7">$${escape_html(item.product.price.toFixed(2))}</p></div> <div class="qty svelte-k7hhd7"><button class="svelte-k7hhd7">-</button> <span class="svelte-k7hhd7">${escape_html(item.quantity)}</span> <button class="svelte-k7hhd7">+</button></div> <p class="subtotal svelte-k7hhd7">$${escape_html((item.product.price * item.quantity).toFixed(2))}</p> <button class="remove svelte-k7hhd7">×</button></div>`);
			}
			$$renderer.push(`<!--]--></div> <div class="summary svelte-k7hhd7"><div class="total svelte-k7hhd7"><span>Total</span> <span class="amount svelte-k7hhd7">$${escape_html(store_get($$store_subs ??= {}, "$cartTotal", cartTotal).toFixed(2))}</span></div> <div class="actions svelte-k7hhd7">`);
			Button($$renderer, {
				variant: "secondary",
				onclick: () => cart.clear(),
				children: ($$renderer) => {
					$$renderer.push(`<!---->Clear Cart`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----> `);
			Button($$renderer, {
				children: ($$renderer) => {
					$$renderer.push(`<!---->Checkout`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></div></div>`);
		}
		$$renderer.push(`<!--]-->`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
export { _page as default };
