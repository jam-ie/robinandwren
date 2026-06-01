import type { Metadata } from "next";
import Link from "next/link";
import { getProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Robin & Wren Studio — Shop",
  description: "Watercolor prints, greeting cards, small goods, and original paintings by Kathy Chandler.",
};

export default async function ShopPage() {
  const [prints, cards, smallGoods, originals] = await Promise.all([
    getProducts("prints"),
    getProducts("cards"),
    getProducts("small-goods"),
    getProducts("originals"),
  ]);

  const sections = [
    { id: "prints",      label: "Prints",      href: "/shop/prints",       products: prints,     description: "Hand-painted watercolors, reproduced on archival paper." },
    { id: "cards",       label: "Cards",       href: "/shop/cards",        products: cards,      description: "Greeting cards for every season. Singles or packs of 8." },
    { id: "small-goods", label: "Small Goods", href: "/shop/small-goods",  products: smallGoods, description: "Useful, beautiful things for every day." },
    { id: "originals",   label: "Originals",   href: "/shop/originals",    products: originals,  description: "One-of-a-kind paintings, hand-painted in the studio." },
  ];

  return (
    <>
      <section className="bg-paper pt-10 pb-12 px-6 text-center">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-4">
          Robin &amp; Wren Studio
        </p>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-navy mb-4">
          The Shop
        </h1>
        <p className="font-heading text-xl font-light italic text-navy/50">
          Watercolor art for walls, tables, and the people you love.
        </p>
      </section>

      {/* Section nav */}
      <nav className="sticky top-[73px] z-40 bg-white/95 backdrop-blur-sm border-b border-paper-deeper px-6">
        <div className="max-w-5xl mx-auto flex items-center gap-8 overflow-x-auto py-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {[
            { label: "Prints", anchor: "#prints" },
            { label: "Cards", anchor: "#cards" },
            { label: "Small Goods", anchor: "#small-goods" },
            { label: "Originals", anchor: "#originals" },
            { label: "Fabric", anchor: "#fabric" },
          ].map(({ label, anchor }) => (
            <a
              key={anchor}
              href={anchor}
              className="font-body text-xs tracking-widest uppercase text-navy/60 hover:text-navy transition-colors whitespace-nowrap"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {sections.map(({ id, label, href, products, description }, i) => (
        <section
          key={label}
          id={id}
          className={`px-6 py-14 scroll-mt-28 ${i % 2 === 0 ? "bg-paper-dark" : "bg-paper"}`}
        >
          <div className="max-w-5xl mx-auto">
            <div className="flex items-baseline justify-between mb-2">
              <h2 className="font-heading text-4xl md:text-5xl font-light text-navy">
                {label}
              </h2>
              <Link
                href={href}
                className="font-body text-xs tracking-widest uppercase text-navy/50 border-b border-navy/20 pb-0.5 hover:text-navy hover:border-navy/50 transition-colors shrink-0 ml-6"
              >
                View all
              </Link>
            </div>
            <p className="font-body text-sm text-navy/50 mb-8">{description}</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Fabric callout */}
      <section id="fabric" className={`px-6 py-14 scroll-mt-28 ${sections.length % 2 === 0 ? "bg-paper-dark" : "bg-paper"}`}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-baseline justify-between mb-2">
            <h2 className="font-heading text-4xl md:text-5xl font-light text-navy">Fabric</h2>
            <Link
              href="/shop/fabric"
              className="font-body text-xs tracking-widest uppercase text-navy/50 border-b border-navy/20 pb-0.5 hover:text-navy hover:border-navy/50 transition-colors shrink-0 ml-6"
            >
              Visit shop
            </Link>
          </div>
          <p className="font-body text-sm text-navy/50 mb-8">Original watercolor patterns, printed on fabric through Spoonflower.</p>
          <Link
            href="/shop/fabric"
            className="inline-block border border-navy/30 text-navy font-body text-xs tracking-widest uppercase px-8 py-3 hover:border-navy transition-colors"
          >
            Visit the Fabric Shop
          </Link>
        </div>
      </section>
    </>
  );
}
