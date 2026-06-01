import type { Metadata } from "next";
import Image from "next/image";
import ShopSubNav from "@/components/ShopSubNav";

const shopLinks = [
  { href: "/shop/prints",       label: "Prints" },
  { href: "/shop/cards",        label: "Cards" },
  { href: "/shop/small-goods",  label: "Small Goods" },
  { href: "/shop/fabric",       label: "Fabric" },
  { href: "/shop/originals",    label: "Originals" },
];

export const metadata: Metadata = {
  title: "Robin & Wren Studio — Fabric",
  description: "Original watercolor fabric patterns by Kathy Chandler, available on Spoonflower.",
};

export default function FabricPage() {
  return (
    <>
      <ShopSubNav links={shopLinks} />
      <section className="bg-paper pt-10 pb-10 px-6 text-center">
        <Link href="/shop" className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-4 hover:text-blue transition-colors inline-block py-2">
          The Shop
        </Link>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-navy mb-3">
          Fabric
        </h1>
        <p className="font-heading text-xl font-light italic text-navy/50">
          Original watercolor patterns, printed on fabric.
        </p>
      </section>

      <section className="bg-paper-dark py-14 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-10">
            <Image
              src="/images/artwork/faves/bunny-with-carrots.webp"
              width={240}
              height={240}
              className="object-contain"
              alt=""
            />
          </div>

          <div className="w-10 h-px bg-taupe mx-auto mb-10" />

          <p className="font-body text-sm leading-7 text-navy/70 mb-6">
            Kathy&apos;s watercolor patterns are available as fabric yardage and finished goods through Spoonflower — printed on demand in a range of fabrics including cotton, canvas, and linen.
          </p>
          <p className="font-body text-sm leading-7 text-navy/70 mb-10">
            Perfect for quilting, sewing projects, or creating something one of a kind.
          </p>

          <a
            href="https://www.spoonflower.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue text-paper font-body text-xs tracking-widest uppercase px-10 py-4 hover:bg-blue-dark transition-colors"
          >
            Visit the Spoonflower Shop
          </a>

          <div className="w-10 h-px bg-taupe mx-auto mt-10" />
        </div>
      </section>
    </>
  );
}
