import { b as attr, n as derived, x as escape_html } from "../../../../chunks/server.js";
import { t as cart } from "../../../../chunks/cart.js";
import { t as Button } from "../../../../chunks/Button.js";
import { t as getProductById } from "../../../../chunks/products.js";
//#region src/routes/product/[id]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { params } = $$props;
		let product = derived(() => getProductById(Number(params.id)));
		let quantity = 1;
		if (product()) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="detail svelte-uk8mco"><div class="image svelte-uk8mco"><img${attr("src", product().image)}${attr("alt", product().name)} class="svelte-uk8mco"/></div> <div class="info"><span class="category svelte-uk8mco">${escape_html(product().category)}</span> <h1 class="svelte-uk8mco">${escape_html(product().name)}</h1> <p class="price svelte-uk8mco">$${escape_html(product().price.toFixed(2))}</p> <p class="description svelte-uk8mco">${escape_html(product().description)}</p> <div class="actions svelte-uk8mco"><div class="qty svelte-uk8mco"><button${attr("disabled", true, true)} class="svelte-uk8mco">-</button> <span class="svelte-uk8mco">${escape_html(quantity)}</span> <button class="svelte-uk8mco">+</button></div> `);
			Button($$renderer, {
				onclick: () => cart.add(product(), quantity),
				children: ($$renderer) => {
					$$renderer.push(`<!---->Add to Cart`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></div></div></div>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<p>Product not found.</p>`);
		}
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
export { _page as default };
