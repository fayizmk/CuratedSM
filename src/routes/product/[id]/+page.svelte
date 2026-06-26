<script lang="ts">
	import { getProductById } from '$lib/data/products';
	import { cart } from '$lib/stores/cart';
	import Button from '$lib/components/Button.svelte';

	let { params } = $props();

	let product = $derived(getProductById(Number(params.id)));

	let quantity = $state(1);
</script>

{#if product}
	<div class="detail">
		<div class="image">
			<img src={product.image} alt={product.name} />
		</div>
		<div class="info">
			<span class="category">{product.category}</span>
			<h1>{product.name}</h1>
			<p class="price">${product.price.toFixed(2)}</p>
			<p class="description">{product.description}</p>
			<div class="actions">
				<div class="qty">
					<button onclick={() => quantity = Math.max(1, quantity - 1)} disabled={quantity <= 1}>-</button>
					<span>{quantity}</span>
					<button onclick={() => quantity = quantity + 1}>+</button>
				</div>
				<Button onclick={() => cart.add(product, quantity)}>Add to Cart</Button>
			</div>
		</div>
	</div>
{:else}
	<p>Product not found.</p>
{/if}

<style>
	.detail {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
	}
	.image {
		border-radius: 8px;
		overflow: hidden;
		background: #f3f4f6;
	}
	.image img {
		width: 100%;
		display: block;
	}
	.category {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #6b7280;
	}
	h1 {
		font-size: 1.75rem;
		margin: 0.5rem 0;
	}
	.price {
		font-size: 1.5rem;
		font-weight: 700;
		color: #111;
	}
	.description {
		color: #555;
		line-height: 1.6;
		margin: 1rem 0;
	}
	.actions {
		display: flex;
		gap: 1rem;
		align-items: center;
		margin-top: 1.5rem;
	}
	.qty {
		display: flex;
		align-items: center;
		border: 1px solid #d1d5db;
		border-radius: 6px;
		overflow: hidden;
	}
	.qty button {
		width: 36px;
		height: 36px;
		border: none;
		background: #f9fafb;
		cursor: pointer;
		font-size: 1.125rem;
	}
	.qty button:hover:not(:disabled) {
		background: #e5e7eb;
	}
	.qty span {
		width: 40px;
		text-align: center;
		font-weight: 600;
	}
</style>
