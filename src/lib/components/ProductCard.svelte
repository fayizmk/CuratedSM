<script lang="ts">
	import type { Product } from '$lib/types';

	let { product }: { product: Product } = $props();
</script>

<a href="/product/{product.id}" class="card">
	<div class="image">
		<img src={product.image} alt={product.name} />
	</div>
	<div class="info">
		<span class="category">{product.category}</span>
		<h3>{product.name}</h3>
		<p class="price">${product.price.toFixed(2)}</p>
	</div>
</a>

<style>
	.card {
		display: block;
		border: 1px solid #e5e7eb;
		border-radius: 8px;
		overflow: hidden;
		text-decoration: none;
		color: inherit;
		transition: box-shadow 0.2s;
	}
	.card:hover {
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}
	.image {
		aspect-ratio: 1;
		overflow: hidden;
		background: #f3f4f6;
	}
	.image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.info {
		padding: 1rem;
	}
	.category {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #6b7280;
	}
	h3 {
		margin: 0.25rem 0;
		font-size: 1rem;
	}
	.price {
		font-weight: 600;
		color: #111;
	}
</style>
