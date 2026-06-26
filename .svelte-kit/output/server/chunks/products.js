//#region src/lib/data/products.ts
var products = [
	{
		id: 1,
		name: "Classic White Tee",
		price: 29.99,
		description: "A timeless classic white t-shirt made from 100% organic cotton.",
		image: "https://picsum.photos/seed/tshirt/400/400",
		category: "clothing"
	},
	{
		id: 2,
		name: "Denim Jacket",
		price: 89.99,
		description: "Vintage-inspired denim jacket with a relaxed fit.",
		image: "https://picsum.photos/seed/jacket/400/400",
		category: "clothing"
	},
	{
		id: 3,
		name: "Leather Sneakers",
		price: 119.99,
		description: "Premium leather sneakers with cushioned soles.",
		image: "https://picsum.photos/seed/sneakers/400/400",
		category: "shoes"
	},
	{
		id: 4,
		name: "Canvas Backpack",
		price: 59.99,
		description: "Durable canvas backpack with multiple compartments.",
		image: "https://picsum.photos/seed/backpack/400/400",
		category: "accessories"
	},
	{
		id: 5,
		name: "Wireless Headphones",
		price: 149.99,
		description: "Noise-cancelling wireless headphones with 30-hour battery life.",
		image: "https://picsum.photos/seed/headphones/400/400",
		category: "electronics"
	},
	{
		id: 6,
		name: "Minimalist Watch",
		price: 199.99,
		description: "Elegant minimalist watch with genuine leather strap.",
		image: "https://picsum.photos/seed/watch/400/400",
		category: "accessories"
	},
	{
		id: 7,
		name: "Slim Fit Chinos",
		price: 69.99,
		description: "Comfortable slim fit chinos in stretch cotton twill.",
		image: "https://picsum.photos/seed/chinos/400/400",
		category: "clothing"
	},
	{
		id: 8,
		name: "Running Shoes",
		price: 139.99,
		description: "Lightweight running shoes with responsive cushioning.",
		image: "https://picsum.photos/seed/running/400/400",
		category: "shoes"
	}
];
function getProductById(id) {
	return products.find((p) => p.id === id);
}
//#endregion
export { products as n, getProductById as t };
