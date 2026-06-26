import { writable, derived } from 'svelte/store';
import type { Product, CartItem } from '$lib/types';

function createCartStore() {
	const { subscribe, update } = writable<CartItem[]>([]);

	return {
		subscribe,

		add(product: Product, quantity = 1) {
			update((items) => {
				const existing = items.find((i) => i.product.id === product.id);
				if (existing) {
					return items.map((i) =>
						i.product.id === product.id ? { ...i, quantity: i.quantity + quantity } : i
					);
				}
				return [...items, { product, quantity }];
			});
		},

		remove(productId: number) {
			update((items) => items.filter((i) => i.product.id !== productId));
		},

		updateQuantity(productId: number, quantity: number) {
			if (quantity <= 0) {
				this.remove(productId);
				return;
			}
			update((items) =>
				items.map((i) => (i.product.id === productId ? { ...i, quantity } : i))
			);
		},

		clear() {
			update(() => []);
		}
	};
}

export const cart = createCartStore();

export const cartItemCount = derived(cart, ($cart) =>
	$cart.reduce((sum, item) => sum + item.quantity, 0)
);

export const cartTotal = derived(cart, ($cart) =>
	$cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
);