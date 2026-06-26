<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { products } from '$lib/data/products';
</script>

<section class="page-container">
	<h1>All Products</h1>
	<div class="grid">
		{#each products as product}
			<ProductCard {product} />
		{/each}
	</div>
</section>

<style>
	.page-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem 1.5rem;
	}
	h1 {
		font-size: 1.5rem;
		margin-bottom: 1.5rem;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: 1.5rem;
	}
</style>
