import type { Metadata } from "next";
import { getProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import ShopSubNav from "@/components/ShopSubNav";

const shopLinks = [
  { href: "/shop/prints",       label: "Prints" },
  { href: "/shop/cards",        label: "Cards" },
  { href: "/shop/small-goods",  label: "Small Goods" },
  { href: "/shop/fabric",       label: "Fabric" },
  { href: "/shop/originals",    label: "Originals" },
];

export const metadata: Metadata = {
  title: "Robin & Wren Studio — Cards",
  description: "Watercolor greeting cards by Kathy Chandler — for every season and occasion.",
};

export default async function CardsPage() {
  const products = await getProducts("cards");

  return (
    <>
      <ShopSubNav links={shopLinks} />
      <section className="bg-paper pt-10 pb-10 px-6 text-center">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-4">
          The Shop
        </p>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-navy mb-3">
          Cards
        </h1>
        <p className="font-heading text-xl font-light italic text-navy/50">
          Greeting cards for every season. Available as singles or packs of 8.
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
