<script lang="ts">
	import { cart, cartTotal } from '$lib/stores/cart';
	import Button from '$lib/components/Button.svelte';
</script>

<h1>Shopping Cart</h1>

{#if $cart.length === 0}
	<p class="empty">Your cart is empty.</p>
	<a href="/" class="continue">Continue Shopping</a>
{:else}
	<div class="items">
		{#each $cart as item (item.product.id)}
			<div class="item">
				<img src={item.product.image} alt={item.product.name} />
				<div class="info">
					<h3>{item.product.name}</h3>
					<p class="price">${item.product.price.toFixed(2)}</p>
				</div>
				<div class="qty">
					<button onclick={() => cart.updateQuantity(item.product.id, item.quantity - 1)}>-</button>
					<span>{item.quantity}</span>
					<button onclick={() => cart.updateQuantity(item.product.id, item.quantity + 1)}>+</button>
				</div>
				<p class="subtotal">${(item.product.price * item.quantity).toFixed(2)}</p>
				<button class="remove" onclick={() => cart.remove(item.product.id)}>&times;</button>
			</div>
		{/each}
	</div>
	<div class="summary">
		<div class="total">
			<span>Total</span>
			<span class="amount">${$cartTotal.toFixed(2)}</span>
		</div>
		<div class="actions">
			<Button variant="secondary" onclick={() => cart.clear()}>Clear Cart</Button>
			<Button>Checkout</Button>
		</div>
	</div>
{/if}

<style>
	h1 {
		font-size: 1.5rem;
		margin-bottom: 1.5rem;
	}
	.empty {
		color: #6b7280;
		margin-bottom: 1rem;
	}
	.continue {
		color: #111;
		font-weight: 600;
	}
	.items {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.item {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		border: 1px solid #e5e7eb;
		border-radius: 8px;
	}
	.item img {
		width: 80px;
		height: 80px;
		border-radius: 6px;
		object-fit: cover;
	}
	.info {
		flex: 1;
	}
	.info h3 {
		margin: 0;
		font-size: 1rem;
	}
	.price {
		color: #6b7280;
		font-size: 0.875rem;
	}
	.qty {
		display: flex;
		align-items: center;
		border: 1px solid #d1d5db;
		border-radius: 6px;
	}
	.qty button {
		width: 32px;
		height: 32px;
		border: none;
		background: #f9fafb;
		cursor: pointer;
	}
	.qty button:hover {
		background: #e5e7eb;
	}
	.qty span {
		width: 36px;
		text-align: center;
		font-weight: 600;
	}
	.subtotal {
		font-weight: 600;
		min-width: 5rem;
		text-align: right;
	}
	.remove {
		background: none;
		border: none;
		font-size: 1.5rem;
		cursor: pointer;
		color: #9ca3af;
		padding: 0.25rem;
	}
	.remove:hover {
		color: #ef4444;
	}
	.summary {
		margin-top: 2rem;
		padding: 1.5rem;
		border: 1px solid #e5e7eb;
		border-radius: 8px;
		background: #f9fafb;
	}
	.total {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 1.25rem;
		margin-bottom: 1rem;
	}
	.amount {
		font-weight: 700;
	}
	.actions {
		display: flex;
		gap: 0.75rem;
	}
</style>
