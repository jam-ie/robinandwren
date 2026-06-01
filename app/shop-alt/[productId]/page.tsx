import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, getAllProducts } from "@/lib/products";
import ProductDetail from "@/components/ProductDetail";

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((p) => ({ productId: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ productId: string }>;
}): Promise<Metadata> {
  const { productId } = await params;
  const product = await getProduct(productId);
  if (!product) return {};
  return { title: `Robin & Wren Studio — ${product.title}` };
}

const categoryLabels: Record<string, string> = {
  "for-the-wall": "For the Wall",
  "for-giving": "For Giving",
  "for-the-home": "For the Home",
  originals: "Originals",
};

const categoryHrefs: Record<string, string> = {
  "for-the-wall": "/shop-alt/for-the-wall",
  "for-giving": "/shop-alt/for-giving",
  "for-the-home": "/shop-alt/for-the-home",
  originals: "/shop-alt/originals",
};

export default async function AltProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const product = await getProduct(productId);
  if (!product) notFound();

  const occasionCat = product.occasionCategory;

  return (
    <>
      <div className="bg-paper border-b border-paper-deeper px-6 py-3">
        <div className="max-w-5xl mx-auto">
          <p className="font-body text-xs tracking-widest text-navy/40">
            <Link href="/shop-alt" className="hover:text-navy transition-colors">Shop</Link>
            <span className="mx-2">·</span>
            <Link href={categoryHrefs[occasionCat]} className="hover:text-navy transition-colors">
              {categoryLabels[occasionCat]}
            </Link>
            <span className="mx-2">·</span>
            <span className="text-navy/60">{product.title}</span>
          </p>
        </div>
      </div>

      <section className="bg-paper py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div className="relative w-full bg-white shadow-md overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <Image
                src={product.images[0]}
                fill
                className="object-contain p-6"
                alt={product.title}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {product.sold && (
                <div className="absolute top-4 left-4 bg-navy text-paper font-body text-xs tracking-widest uppercase px-3 py-1.5">
                  Sold
                </div>
              )}
            </div>

            <div className="pt-2 space-y-5">
              <div>
                <p className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-2">
                  {product.collection}
                </p>
                <h1 className="font-heading text-4xl md:text-5xl font-light text-navy leading-tight">
                  {product.title}
                </h1>
              </div>
              <div className="w-10 h-px bg-taupe" />
              <p className="font-body text-sm leading-7 text-navy/70">
                {product.description}
              </p>
              <div className="w-10 h-px bg-taupe" />
              <ProductDetail product={product} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
