import type { Metadata } from "next";
import { getProducts } from "@/lib/products";
import PrintsGrid from "@/app/shop/prints/PrintsGrid";
import ShopSubNav from "@/components/ShopSubNav";

const shopLinks = [
  { href: "/shop-alt/for-the-wall", label: "For the Wall" },
  { href: "/shop-alt/for-giving",   label: "For Giving" },
  { href: "/shop-alt/for-the-home", label: "For the Home" },
  { href: "/shop-alt/originals",    label: "Originals" },
];

export const metadata: Metadata = {
  title: "Robin & Wren Studio — For the Wall",
};

export default async function ForTheWallPage() {
  const products = await getProducts("for-the-wall");

  return (
    <>
      <ShopSubNav links={shopLinks} />
      <section className="bg-paper pt-10 pb-10 px-6 text-center">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-4">
          The Shop
        </p>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-navy mb-3">
          For the Wall
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
