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
  title: "Robin & Wren Studio — For the Home",
};

export default async function ForTheHomePage() {
  const products = await getProducts("for-the-home");

  return (
    <>
      <ShopSubNav links={shopLinks} />
      <section className="bg-paper pt-10 pb-10 px-6 text-center">
        <Link href="/shop-alt" className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-4 hover:text-blue transition-colors inline-block py-2">
          The Shop
        </Link>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-navy mb-3">
          For the Home
        </h1>
        <p className="font-heading text-xl font-light italic text-navy/50">
          Tea towels, fabric & everyday goods for a beautiful home.
        </p>
      </section>

      <section className="bg-paper-dark py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Fabric callout */}
          <div className="mt-14 pt-10 border-t border-paper-deeper text-center">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-4">
              Also Available
            </p>
            <p className="font-heading text-2xl font-light text-navy mb-3">
              Fabric by the yard
            </p>
            <p className="font-body text-sm text-navy/60 mb-6 max-w-md mx-auto leading-7">
              Kathy&apos;s watercolor patterns are available as fabric yardage through Spoonflower — printed on cotton, canvas, and linen.
            </p>
            <Link
              href="/shop/fabric"
              className="inline-block border border-navy/30 text-navy font-body text-xs tracking-widest uppercase px-8 py-3 hover:border-navy transition-colors"
            >
              Visit the Fabric Shop
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
