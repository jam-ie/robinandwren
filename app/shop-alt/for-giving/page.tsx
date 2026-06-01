import type { Metadata } from "next";
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
  title: "Robin & Wren Studio — For Giving",
};

export default async function ForGivingPage() {
  const products = await getProducts("for-giving");

  return (
    <>
      <ShopSubNav links={shopLinks} />
      <section className="bg-paper pt-10 pb-10 px-6 text-center">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-4">
          The Shop
        </p>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-navy mb-3">
          For Giving
        </h1>
        <p className="font-heading text-xl font-light italic text-navy/50">
          Cards, gift tags, and gift bags for the people you love.
        </p>
      </section>

      <section className="bg-paper-dark py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
