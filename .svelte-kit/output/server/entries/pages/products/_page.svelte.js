import { b as attr, o as stringify, r as ensure_array_like, x as escape_html } from "../../../chunks/server.js";
import { n as products } from "../../../chunks/products.js";
//#region src/lib/components/ProductCard.svelte
function ProductCard($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { product } = $$props;
		$$renderer.push(`<a${attr("href", `/product/${stringify(product.id)}`)} class="card svelte-11ja2cl"><div class="image svelte-11ja2cl"><img${attr("src", product.image)}${attr("alt", product.name)} class="svelte-11ja2cl"/></div> <div class="info svelte-11ja2cl"><span class="category svelte-11ja2cl">${escape_html(product.category)}</span> <h3 class="svelte-11ja2cl">${escape_html(product.name)}</h3> <p class="price svelte-11ja2cl">$${escape_html(product.price.toFixed(2))}</p></div></a>`);
	});
}
//#endregion
//#region src/routes/products/+page.svelte
function _page($$renderer) {
	$$renderer.push(`<section class="page-container svelte-1dj9mz1"><h1 class="svelte-1dj9mz1">All Products</h1> <div class="grid svelte-1dj9mz1"><!--[-->`);
	const each_array = ensure_array_like(products);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let product = each_array[$$index];
		ProductCard($$renderer, { product });
	}
	$$renderer.push(`<!--]--></div></section>`);
}
//#endregion
export { _page as default };
