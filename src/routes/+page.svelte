<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<section class="hero">
	<div class="hero-video">
		<video autoplay muted loop playsinline>
			<source src="https://videos.pexels.com/video-files/5632393/5632393-uhd_2560_1440_25fps.mp4" type="video/mp4" />
		</video>
		<div class="hero-overlay"></div>
	</div>
	<div class="hero-content" in:fade={{ duration: 800 }}>
		<h1>Curated Style,<br />Delivered to You</h1>
		<p>Discover handpicked products that define your unique taste.</p>
		<a href="/products" class="shop-btn">Shop Now</a>
	</div>
</section>

<section class="about">
	<div class="about-inner">
		<h2>About Us</h2>
		<p>
			At Curated, we believe great style shouldn't require endless searching. Our team
			carefully selects every product in our collection, ensuring only the finest quality
			and design make it to your doorstep. From everyday essentials to standout pieces,
			we bring together products that speak to who you are — so you can shop with
			confidence and wear with pride.
		</p>
	</div>
</section>

<style>
	.hero {
		position: relative;
		width: 100%;
		height: 85vh;
		min-height: 500px;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.hero-video {
		position: absolute;
		inset: 0;
	}

	.hero-video video {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.hero-overlay {
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.45);
	}

	.hero-content {
		position: relative;
		z-index: 1;
		text-align: center;
		color: #fff;
		max-width: 700px;
		padding: 0 2rem;
	}

	.hero-content h1 {
		font-size: 3rem;
		font-weight: 800;
		line-height: 1.15;
		margin-bottom: 1rem;
		letter-spacing: -0.02em;
	}

	.hero-content p {
		font-size: 1.125rem;
		opacity: 0.9;
		margin-bottom: 2rem;
		line-height: 1.6;
	}

	.shop-btn {
		display: inline-block;
		padding: 0.875rem 2.5rem;
		background: #fff;
		color: #111;
		font-weight: 700;
		font-size: 1rem;
		border-radius: 6px;
		text-decoration: none;
		transition: background 0.15s, transform 0.15s;
	}

	.shop-btn:hover {
		background: #f3f4f6;
		transform: translateY(-1px);
	}

	.about {
		padding: 5rem 1.5rem;
		background: #f9fafb;
	}

	.about-inner {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
	}

	.about-inner h2 {
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 1.25rem;
		color: #111;
	}

	.about-inner p {
		font-size: 1.0625rem;
		line-height: 1.75;
		color: #555;
	}

	@media (max-width: 600px) {
		.hero-content h1 {
			font-size: 2rem;
		}
		.hero-content p {
			font-size: 1rem;
		}
	}
</style>