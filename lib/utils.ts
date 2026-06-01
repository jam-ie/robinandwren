export function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(0)}`;
}

export function priceRange(variants: { price: number }[]): string {
  const prices = variants.map((v) => v.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  return min === max ? formatPrice(min) : `from ${formatPrice(min)}`;
}
