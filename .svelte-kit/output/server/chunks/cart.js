import { C as derived, T as writable } from "./server.js";
import "./index-server.js";
//#region src/lib/stores/cart.ts
function createCartStore() {
	const { subscribe, update } = writable([]);
	return {
		subscribe,
		add(product, quantity = 1) {
			update((items) => {
				if (items.find((i) => i.product.id === product.id)) return items.map((i) => i.product.id === product.id ? {
					...i,
					quantity: i.quantity + quantity
				} : i);
				return [...items, {
					product,
					quantity
				}];
			});
		},
		remove(productId) {
			update((items) => items.filter((i) => i.product.id !== productId));
		},
		updateQuantity(productId, quantity) {
			if (quantity <= 0) {
				this.remove(productId);
				return;
			}
			update((items) => items.map((i) => i.product.id === productId ? {
				...i,
				quantity
			} : i));
		},
		clear() {
			update(() => []);
		}
	};
}
var cart = createCartStore();
var cartItemCount = derived(cart, ($cart) => $cart.reduce((sum, item) => sum + item.quantity, 0));
var cartTotal = derived(cart, ($cart) => $cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0));
//#endregion
export { cartItemCount as n, cartTotal as r, cart as t };
