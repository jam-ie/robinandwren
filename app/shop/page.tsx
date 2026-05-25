// FUTURE: This gallery will be replaced with a Shopify storefront
// connected to Printify for print-on-demand fulfillment.
// Integration path: Shopify Storefront API + Shopify Buy SDK
// or embed Shopify product cards via the Shopify Buy Button.
// See: https://shopify.dev/docs/api/storefront
// When ready, product data (title, image, price, variant ID) will
// be fetched from Shopify and rendered in this same grid layout.

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type Category = "All" | "Animals" | "Nature & Seasons" | "Holiday" | "Nursery";

const categories: Category[] = ["All", "Animals", "Nature & Seasons", "Holiday", "Nursery"];

const artworks: { id: number; title: string; category: Category; src: string; w: number; h: number }[] = [
  { id: 1,  title: "Christmas Fox & Bunny",        category: "Holiday",           src: "/images/artwork/christmas-fox-and-bunny.jpg",           w: 3220, h: 5014 },
  { id: 2,  title: "Fox Ice Skating",              category: "Holiday",           src: "/images/artwork/fox-ice-skating.jpg",                    w: 3306, h: 5034 },
  { id: 3,  title: "Fox in the Leaves",            category: "Nature & Seasons",  src: "/images/artwork/tgiving-fox-with-leaves.jpg",            w: 3154, h: 5003 },
  { id: 4,  title: "Baguette Bear",                category: "Animals",           src: "/images/artwork/baguette-bear.jpg",                      w: 3304, h: 5034 },
  { id: 5,  title: "Bunny with Cello",             category: "Animals",           src: "/images/artwork/bunny-with-cello.jpg",                   w: 3247, h: 4289 },
  { id: 6,  title: "Bunnies with Balloons",        category: "Holiday",           src: "/images/artwork/valentine-bunnies-and-balloons.jpg",     w: 2849, h: 5034 },
  { id: 7,  title: "Bunnies Decorating the Tree",  category: "Holiday",           src: "/images/artwork/christmas-bunnies-decorating-tree.jpg",  w: 3291, h: 4723 },
  { id: 8,  title: "Happy Easter",                 category: "Holiday",           src: "/images/artwork/easter-bunny-and-bear.jpg",              w: 4781, h: 3214 },
  { id: 9,  title: "Bear in a Boat",               category: "Animals",           src: "/images/artwork/bear-in-boat-0001.jpg",                  w: 5346, h: 4184 },
  { id: 10, title: "Bunny Delivering Hearts",      category: "Holiday",           src: "/images/artwork/valentine-bunny-with-backpack.jpg",      w: 3988, h: 5111 },
  { id: 11, title: "Cat Wreath",                   category: "Animals",           src: "/images/artwork/cat-wreath.jpg",                         w: 3716, h: 5342 },
  { id: 12, title: "Bunny with Wreath",            category: "Nature & Seasons",  src: "/images/artwork/bunny-with-wreath.jpg",                  w: 4513, h: 2761 },
  { id: 13, title: "Bear with Christmas Tree",     category: "Holiday",           src: "/images/artwork/christmas-bear-with-tree.jpg",           w: 3497, h: 5088 },
  { id: 14, title: "Valentine Bears",              category: "Holiday",           src: "/images/artwork/valentine-bears-with-heart.jpg",         w: 4982, h: 3214 },
  { id: 15, title: "Squirrel with Wreath",         category: "Nature & Seasons",  src: "/images/artwork/valentine-squirrel-with-wreath.jpg",     w: 5187, h: 3250 },
  { id: 16, title: "Blue & White Teapot",          category: "Nature & Seasons",  src: "/images/artwork/blue-and-white-teapot-with-bird.jpg",    w: 1922, h: 3230 },
  { id: 17, title: "Little Sailboat",              category: "Nursery",           src: "/images/artwork/sailboat.jpg",                           w: 2528, h: 3234 },
  { id: 18, title: "Birthday Bears",               category: "Nursery",           src: "/images/artwork/birthday-bears-with-cupcakes.jpg",       w: 4458, h: 3297 },
  { id: 19, title: "Bluebird Nest",                category: "Nature & Seasons",  src: "/images/artwork/fall-leaves-bird-nest.jpg",              w: 5055, h: 3254 },
];

export default function ShopPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? artworks : artworks.filter((a) => a.category === active);

  return (
    <>
      {/* Page Header */}
      <section className="bg-cream py-20 px-6 text-center">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-4">
          The Collection
        </p>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-brown mb-6">
          Shop &amp; Gallery
        </h1>
        <div className="max-w-xl mx-auto bg-cream-dark border border-cream-deeper px-8 py-6 mt-6">
          <p className="font-heading text-lg font-light italic text-brown/80 leading-relaxed">
            The shop is coming soon. In the meantime, if you&apos;re interested in a piece,
            reach out —{" "}
            <Link href="/contact" className="text-blue hover:underline">
              Kathy would love to hear from you.
            </Link>
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-cream border-b border-cream-deeper sticky top-[73px] z-40 px-6">
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <ul className="flex gap-0 min-w-max">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setActive(cat)}
                  className={`font-body text-xs tracking-widest uppercase px-6 py-5 border-b-2 transition-colors whitespace-nowrap ${
                    active === cat
                      ? "border-blue text-blue"
                      : "border-transparent text-brown/50 hover:text-brown"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((artwork) => (
              <div key={artwork.id} className="group">
                <div className="relative overflow-hidden">
                  <div className="relative w-full aspect-[3/4] shadow-sm group-hover:shadow-md group-hover:scale-[1.02] transition-all duration-500">
                    <Image
                      src={artwork.src}
                      fill
                      className="object-contain"
                      alt={artwork.title}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-brown/0 group-hover:bg-brown/10 transition-colors duration-500 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                    <Link
                      href={`/contact?subject=${encodeURIComponent(`Inquiry about "${artwork.title}"`)}`}
                      className="bg-cream text-brown font-body text-xs tracking-widest uppercase px-6 py-3 hover:bg-brown hover:text-cream transition-colors"
                    >
                      Inquire
                    </Link>
                  </div>
                </div>
                <div className="mt-4 flex items-start justify-between">
                  <div>
                    <p className="font-heading text-xl font-light text-brown">{artwork.title}</p>
                    <p className="font-body text-xs tracking-wider uppercase text-brown/50 mt-1">{artwork.category}</p>
                  </div>
                  <Link
                    href={`/contact?subject=${encodeURIComponent(`Inquiry about "${artwork.title}"`)}`}
                    className="font-body text-xs tracking-widest uppercase text-blue/70 hover:text-blue border-b border-blue/30 hover:border-blue pb-0.5 transition-colors mt-1 shrink-0 ml-4"
                  >
                    Inquire
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
