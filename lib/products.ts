// Data access layer for the shop.
// All shop UI imports from here — swap the implementation for real API calls
// in Phase 2 without touching any page or component.

import mockProducts, { type Product } from "./mockProducts";

export type { Product, ProductVariant } from "./mockProducts";

export async function getProducts(
  category: Product["category"] | Product["occasionCategory"]
): Promise<Product[]> {
  return mockProducts.filter(
    (p) => p.category === category || p.occasionCategory === category
  );
}

export async function getProduct(id: string): Promise<Product | null> {
  return mockProducts.find((p) => p.id === id) ?? null;
}

export async function getAllProducts(): Promise<Product[]> {
  return mockProducts;
}
