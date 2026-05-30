import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Robin & Wren Studio — Christmas in the Forest",
  description:
    "Christmas in the Forest — an original hand-illustrated watercolor children's book by Kathy Chandler. A magical Christmas Eve story for ages 3 and up.",
};

export default function BookPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-paper py-16 px-6 text-center">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-4">
          The Book
        </p>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-navy mb-3">
          Christmas in the Forest
        </h1>
        <p className="font-heading text-xl font-light italic text-navy/50">
          A hand-illustrated watercolor children&apos;s book
        </p>
      </section>

      {/* Cover + Story */}
      <section className="bg-paper pb-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* Cover */}
          <div className="flex justify-center md:sticky md:top-28">
            <div
              className="relative w-full max-w-sm shadow-xl overflow-hidden"
              style={{ transform: "rotate(-1.5deg)", aspectRatio: "1/1" }}
            >
              <Image
                src="/images/Christmas in the Forest_revised-1_page-0001.webp"
                fill
                className="object-cover"
                alt="Christmas in the Forest — cover"
                sizes="(max-width: 768px) 80vw, 40vw"
                priority
              />
            </div>
          </div>

          {/* Details */}
          <div className="space-y-8 pt-2">
            <div>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-2">
                Written &amp; Illustrated by
              </p>
              <p className="font-heading text-2xl font-light text-navy">
                Kathy Chandler
              </p>
            </div>

            <div className="w-10 h-px bg-taupe" />

            <p className="font-body text-base leading-8 text-navy/80">
              Step into a snow-dusted world of wonder. On Christmas Eve, ten-year-old Benjamin Puffin ventures into the forest to discover whether the old legend is true — do the woodland animals really gather to celebrate Christmas, and do they speak just like humans for one magical night?
            </p>
            <p className="font-body text-base leading-8 text-navy/80">
              To his amazement, Benjamin finds himself welcomed into a secret celebration of owls, foxes, rabbits, and squirrels. Together they fill the forest with candlelight, friendship, and joy — and Benjamin comes face to face with more than he ever could have imagined.
            </p>
            <p className="font-body text-base leading-8 text-navy/80">
              Every page is lovingly hand-painted in traditional watercolor, capturing the wonder of winter and the magic of kindness shared. A story families will read year after year.
            </p>

            <div className="w-10 h-px bg-taupe" />

            {/* Book details */}
            <ul className="space-y-2">
              {[
                "11″ × 11″ hardcover",
                "Fully hand-illustrated in traditional watercolor — no digital or AI art",
                "Original story with themes of kindness, courage, and generosity",
                "High-quality printing to preserve soft watercolor detail",
                "Perfect for ages 3 and up",
              ].map((detail) => (
                <li key={detail} className="flex items-start gap-3">
                  <span className="text-taupe mt-1">—</span>
                  <span className="font-body text-sm leading-7 text-navy/70">{detail}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-4">Coming Soon</p>
              <Link
                href="/contact?subject=Christmas in the Forest inquiry"
                className="inline-block bg-blue text-paper font-body text-xs tracking-widest uppercase px-10 py-4 hover:bg-blue-dark transition-colors"
              >
                Inquire About the Book
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Closing quote / CTA */}
      <section className="bg-paper-dark py-20 px-6 text-center border-t border-paper-deeper">
        <p className="font-heading text-2xl md:text-3xl font-light italic text-navy/60 max-w-2xl mx-auto mb-10">
          A heartwarming story for cozy nights, holiday traditions, and little ones who love woodland creatures.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact?subject=Christmas in the Forest inquiry"
            className="inline-block bg-blue text-paper font-body text-xs tracking-widest uppercase px-10 py-4 hover:bg-blue-dark transition-colors"
          >
            Inquire About the Book
          </Link>
          <Link
            href="/portfolio"
            className="inline-block border border-navy/30 text-navy font-body text-xs tracking-widest uppercase px-10 py-4 hover:border-navy transition-colors"
          >
            See More of Kathy&apos;s Work
          </Link>
        </div>
      </section>
    </>
  );
}
