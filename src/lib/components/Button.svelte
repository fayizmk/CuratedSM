<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		variant = 'primary',
		disabled = false,
		onclick
	}: {
		children: Snippet;
		variant?: 'primary' | 'secondary' | 'ghost';
		disabled?: boolean;
		onclick?: () => void;
	} = $props();
</script>

<button class="btn {variant}" {disabled} {onclick}>
	{@render children()}
</button>

<style>
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding: 0.625rem 1.25rem;
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.875rem;
		border: none;
		cursor: pointer;
		transition: background 0.15s, opacity 0.15s;
	}
	.btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
	.primary {
		background: #111;
		color: #fff;
	}
	.primary:hover:not(:disabled) {
		background: #333;
	}
	.secondary {
		background: #f3f4f6;
		color: #111;
	}
	.secondary:hover:not(:disabled) {
		background: #e5e7eb;
	}
	.ghost {
		background: transparent;
		color: #555;
	}
	.ghost:hover:not(:disabled) {
		background: #f3f4f6;
	}
</style>
