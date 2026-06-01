"use client";

import { useState } from "react";
import Link from "next/link";
import { type Product } from "@/lib/products";
import { formatPrice } from "@/lib/utils";

export default function ProductDetail({ product }: { product: Product }) {
  const [selectedId, setSelectedId] = useState(product.variants[0].id);
  const selected = product.variants.find((v) => v.id === selectedId)!;

  return (
    <div className="space-y-6">
      {product.variants.length > 1 && (
        <div>
          <p className="font-body text-xs tracking-widest uppercase text-navy/50 mb-3">
            Size
          </p>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((v) => (
              <button
                key={v.id}
                onClick={() => setSelectedId(v.id)}
                className={`font-body text-sm px-5 py-2 border transition-colors ${
                  selectedId === v.id
                    ? "bg-navy text-paper border-navy"
                    : "bg-paper border-paper-deeper text-navy/70 hover:border-navy/40"
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <p className="font-heading text-4xl font-light text-navy">
        {formatPrice(selected.price)}
      </p>

      {product.sold ? (
        <div className="inline-block bg-navy/10 text-navy/40 font-body text-xs tracking-widest uppercase px-10 py-4 cursor-not-allowed select-none">
          Sold
        </div>
      ) : (
        <button
          className="block w-full sm:w-auto bg-blue text-paper font-body text-xs tracking-widest uppercase px-10 py-4 hover:bg-blue-dark transition-colors"
          onClick={() => alert("Checkout coming in Phase 2!")}
        >
          Buy Now
        </button>
      )}

      {product.category === "originals" && !product.sold && (
        <p className="font-body text-xs text-navy/50 leading-relaxed">
          Original paintings are shipped directly by Kathy — please allow 3–5 business days for packing and careful handling.
        </p>
      )}

      <div className="pt-2">
        <Link
          href={`/contact?subject=${encodeURIComponent(`Inquiry about "${product.title}"`)}`}
          className="font-body text-xs tracking-widest uppercase text-navy/50 border-b border-navy/20 pb-0.5 hover:text-navy hover:border-navy/50 transition-colors"
        >
          Inquire about this piece
        </Link>
      </div>
    </div>
  );
}
