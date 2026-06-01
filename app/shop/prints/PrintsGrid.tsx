import ProductCard from "@/components/ProductCard";
import { type Product } from "@/lib/products";

export default function PrintsGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
