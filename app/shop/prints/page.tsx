import type { Metadata } from "next";
import Link from "next/link";
import { getProducts } from "@/lib/products";
import PrintsGrid from "./PrintsGrid";
import ShopSubNav from "@/components/ShopSubNav";

const shopLinks = [
  { href: "/shop/prints",       label: "Prints" },
  { href: "/shop/cards",        label: "Cards" },
  { href: "/shop/small-goods",  label: "Small Goods" },
  { href: "/shop/fabric",       label: "Fabric" },
  { href: "/shop/originals",    label: "Originals" },
];

export const metadata: Metadata = {
  title: "Robin & Wren Studio — Prints",
  description: "Watercolor wall art prints by Kathy Chandler. Available in 8×10 and 11×14.",
};

export default async function PrintsPage() {
  const products = await getProducts("prints");

  return (
    <>
      <ShopSubNav links={shopLinks} />
      <section className="bg-paper pt-10 pb-10 px-6 text-center">
        <Link href="/shop" className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-4 hover:text-blue transition-colors inline-block">
          The Shop
        </Link>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-navy mb-3">
          Prints
        </h1>
        <p className="font-heading text-xl font-light italic text-navy/50">
          Hand-painted watercolors, reproduced on archival paper.
        </p>
      </section>

      <section className="bg-paper-dark py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <PrintsGrid products={products} />
        </div>
      </section>
    </>
  );
}
