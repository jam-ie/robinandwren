"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

type Artwork = { id: number; title: string; src: string; w: number; h: number; position?: string; imgStyle?: React.CSSProperties };
type Section = { title: string; description: string; artworks: Artwork[] };

export default function PortfolioGallery({ sections }: { sections: Section[] }) {
  const allArtworks = sections.flatMap((s) => s.artworks);
  const [index, setIndex] = useState<number | null>(null);

  const selected = index !== null ? allArtworks[index] : null;
  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(() => setIndex((i) => (i !== null ? (i - 1 + allArtworks.length) % allArtworks.length : null)), [allArtworks.length]);
  const next = useCallback(() => setIndex((i) => (i !== null ? (i + 1) % allArtworks.length : null)), [allArtworks.length]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, prev, next]);

  return (
    <>
      {sections.map((section, i) => (
        <section
          key={section.title}
          className={`${i === 0 ? "pt-8" : "pt-20"} pb-20 px-6 ${i % 2 === 0 ? "bg-cream" : "bg-cream-dark"}`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 max-w-2xl">
              <h2 className="font-heading text-4xl md:text-5xl font-light text-brown mb-5">
                {section.title}
              </h2>
              <p className="font-body text-sm leading-7 text-brown/70">
                {section.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {section.artworks.map((artwork) => {
                const globalIndex = allArtworks.findIndex((a) => a.id === artwork.id);
                return (
                  <div key={artwork.id} className="group cursor-pointer" onClick={() => setIndex(globalIndex)}>
                    <div className="relative w-full aspect-[3/4] shadow-sm group-hover:shadow-md group-hover:scale-[1.02] transition-all duration-500 overflow-hidden">
                      <Image
                        src={artwork.src}
                        fill
                        className="object-cover"
                        style={{ ...(artwork.position ? { objectPosition: artwork.position } : {}), ...artwork.imgStyle }}
                        alt={artwork.title}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="mt-4 flex items-start justify-between">
                      <p className="font-heading text-xl font-light text-brown group-hover:text-blue transition-colors">{artwork.title}</p>
                      <Link
                        href={`/contact?subject=${encodeURIComponent(`Inquiry about "${artwork.title}"`)}`}
                        className="font-body text-xs tracking-widest uppercase text-blue/70 hover:text-blue border-b border-blue/30 hover:border-blue pb-0.5 transition-colors mt-1 shrink-0 ml-4"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Inquire
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-brown/80 backdrop-blur-sm p-6"
          onClick={close}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={close}
              className="absolute -top-10 right-0 text-cream/80 hover:text-cream font-body text-xs tracking-widest uppercase transition-colors"
            >
              Close ✕
            </button>

            {/* Prev / Next arrows */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 text-cream/70 hover:text-cream text-3xl transition-colors"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 text-cream/70 hover:text-cream text-3xl transition-colors"
              aria-label="Next"
            >
              ›
            </button>

            {/* Image */}
            <div className="relative w-full max-h-[80vh]">
              <Image
                src={selected.src}
                width={selected.w}
                height={selected.h}
                className="object-contain w-full max-h-[80vh] shadow-2xl"
                alt={selected.title}
                sizes="(max-width: 768px) 100vw, 75vw"
              />
            </div>

            {/* Title + counter + inquire */}
            <div className="flex items-center justify-between w-full mt-4 px-1">
              <div>
                <p className="font-heading text-2xl font-light text-cream">{selected.title}</p>
                <p className="font-body text-xs tracking-widest text-cream/50 mt-1">
                  {(index ?? 0) + 1} / {allArtworks.length}
                </p>
              </div>
              <Link
                href={`/contact?subject=${encodeURIComponent(`Inquiry about "${selected.title}"`)}`}
                className="font-body text-xs tracking-widest uppercase text-cream border-b border-cream/50 pb-0.5 hover:border-cream transition-colors ml-6 shrink-0"
                onClick={close}
              >
                Inquire
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
