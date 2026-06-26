<script lang="ts">
	import { cartItemCount } from '$lib/stores/cart';

	let { title = 'Shop' }: { title?: string } = $props();
</script>

<header>
	<div class="header-inner">
		<a href="/" class="logo">{title}</a>
		<nav>
			<a href="/">Products</a>
			<a href="/cart">
				Cart
				{#if $cartItemCount > 0}
					<span class="badge">{$cartItemCount}</span>
				{/if}
			</a>
		</nav>
	</div>
</header>

<style>
	header {
		background: #fff;
		border-bottom: 1px solid #e5e7eb;
		position: sticky;
		top: 0;
		z-index: 100;
	}
	.header-inner {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1.5rem;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.logo {
		font-size: 1.25rem;
		font-weight: 700;
		text-decoration: none;
		color: #111;
	}
	nav {
		display: flex;
		gap: 1.5rem;
		align-items: center;
	}
	nav a {
		text-decoration: none;
		color: #555;
		font-weight: 500;
		position: relative;
	}
	nav a:hover {
		color: #111;
	}
	.badge {
		background: #ef4444;
		color: #fff;
		font-size: 0.75rem;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		margin-left: 4px;
	}
</style>
