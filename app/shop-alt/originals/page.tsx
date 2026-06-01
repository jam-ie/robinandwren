import type { Metadata } from "next";
import Link from "next/link";
import { getProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import ShopSubNav from "@/components/ShopSubNav";

const shopLinks = [
  { href: "/shop-alt/for-the-wall", label: "For the Wall" },
  { href: "/shop-alt/for-giving",   label: "For Giving" },
  { href: "/shop-alt/for-the-home", label: "For the Home" },
  { href: "/shop-alt/originals",    label: "Originals" },
];

export const metadata: Metadata = {
  title: "Robin & Wren Studio — Original Paintings",
};

export default async function AltOriginalsPage() {
  const products = await getProducts("originals");
  const available = products.filter((p) => !p.sold);
  const sold = products.filter((p) => p.sold);

  return (
    <>
      <ShopSubNav links={shopLinks} />
      <section className="bg-paper pt-10 pb-10 px-6 text-center">
        <Link href="/shop-alt" className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-4 hover:text-blue transition-colors inline-block py-2">
          The Shop
        </Link>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-navy mb-3">
          Original Paintings
        </h1>
        <p className="font-heading text-xl font-light italic text-navy/50">
          One of a kind. Hand-painted by Kathy in her Vermont studio.
        </p>
      </section>

      <section className="bg-paper-dark py-14 px-6">
        <div className="max-w-5xl mx-auto">
          {available.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {available.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="font-heading text-xl font-light italic text-navy/40 text-center py-10">
              All originals are currently sold. New work coming soon.
            </p>
          )}

          {sold.length > 0 && (
            <div className="mt-16">
              <div className="w-10 h-px bg-taupe mb-10" />
              <p className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-8">
                Previously Sold
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 opacity-60">
                {sold.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
