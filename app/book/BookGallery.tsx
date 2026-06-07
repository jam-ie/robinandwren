"use client";

import { useRef, useState, useEffect, useCallback } from "react";
const images = [
  { src: "/images/book/walking in forest.webp",  alt: "Walking through the winter forest"   },
  { src: "/images/book/benny running.webp",       alt: "Benny running through the snow"      },
  { src: "/images/book/dancing.webp",             alt: "The woodland animals dancing"         },
  { src: "/images/book/owl on branch-0001.webp", alt: "An owl perched on a branch"           },
  { src: "/images/book/squirrels-portrait.webp",  alt: "Squirrels celebrating in the forest" },
  { src: "/images/book/birds.webp",               alt: "Birds in the winter forest"           },
  { src: "/images/book/bird in nest.webp",        alt: "A bird resting in a nest"             },
];

export default function BookGallery() {
  const stripRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const updateArrows = useCallback(() => {
    const el = stripRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 20);
    setShowRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 20);
  }, []);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scroll = (dir: "left" | "right") => {
    stripRef.current?.scrollBy({ left: dir === "left" ? -500 : 500, behavior: "smooth" });
  };

  return (
    <section className="bg-paper py-16">
      <p className="font-body text-xs tracking-[0.3em] uppercase text-taupe text-center mb-10 px-6">
        A Peek Inside
      </p>
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className={`hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-white/80 backdrop-blur-sm shadow-sm rounded-full transition-opacity duration-300 ${showLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-navy/60 -translate-x-px">
            <path d="M7 1L1 7l6 6" />
          </svg>
        </button>

        <div
          ref={stripRef}
          className="flex gap-5 overflow-x-auto px-8 md:px-16 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {images.map(({ src, alt }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={src}
              src={src}
              alt={alt}
              className="flex-none shadow-sm"
              style={{ height: "340px", width: "auto" }}
              loading="lazy"
            />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className={`hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-white/80 backdrop-blur-sm shadow-sm rounded-full transition-opacity duration-300 ${showRight ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-navy/60 translate-x-px">
            <path d="M1 1l6 6-6 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
