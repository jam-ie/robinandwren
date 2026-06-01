import Link from "next/link";
import Image from "next/image";
import { type Product } from "@/lib/products";
import { priceRange } from "@/lib/utils";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.id}`} className="group block">
      <div className="bg-white shadow-sm group-hover:shadow-md transition-shadow duration-300">
        <div className="relative w-full h-64 bg-paper overflow-hidden">
          <Image
            src={product.images[0]}
            fill
            className="object-contain p-3 group-hover:scale-[1.03] transition-transform duration-500"
            alt={product.title}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          {product.sold && (
            <div className="absolute top-3 left-3 bg-navy text-paper font-body text-[10px] tracking-widest uppercase px-2.5 py-1">
              Sold
            </div>
          )}
        </div>
        <div className="px-4 pt-3 pb-4">
          <p className="font-body text-[10px] tracking-[0.2em] uppercase text-taupe mb-1">
            {product.collection}
          </p>
          <p className="font-heading text-lg font-light text-navy leading-tight">
            {product.title}
          </p>
          <p className="font-body text-sm text-navy/50 mt-1">
            {priceRange(product.variants)}
          </p>
        </div>
      </div>
    </Link>
  );
}
