"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

type Artwork = { id: number; title: string; src: string; w: number; h: number; position?: string; imgStyle?: React.CSSProperties };
type Section = { title: string; description: string; artworks: Artwork[] };

const SECTION_ROTATIONS = [
  // Nature & Seasons
  ["-2deg", "3deg", "-3.5deg", "1.5deg"],
  // Holiday
  ["2.5deg", "-4deg", "0.5deg", "-1.5deg", "4deg", "-2.5deg", "1deg", "-3deg", "3.5deg", "-1deg"],
  // Nursery
  ["-3deg", "1.5deg", "-1deg", "3.5deg", "-4deg", "2deg", "-2.5deg", "3deg", "-0.5deg", "2.5deg"],
];

export default function PortfolioGalleryScrapbook({ sections }: { sections: Section[] }) {
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
      {sections.map((section, si) => (
        <section
          key={section.title}
          className={`${si === 0 ? "pt-8" : "pt-20"} pb-20 px-8 ${si % 2 === 0 ? "bg-cream" : "bg-cream-dark"}`}
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

            <style>{`
              .scrapbook-grid { columns: 2; column-gap: 2.5rem; }
              @media (min-width: 640px) { .scrapbook-grid { columns: 3; } }
              @media (min-width: 1024px) { .scrapbook-grid { columns: 4; } }
            `}</style>
            <div className="scrapbook-grid">
              {section.artworks.map((artwork, localIndex) => {
                const globalIndex = allArtworks.findIndex((a) => a.id === artwork.id);
                const rotations = SECTION_ROTATIONS[si] ?? SECTION_ROTATIONS[0];
                const rotation = rotations[localIndex % rotations.length];
                return (
                  <div
                    key={artwork.id}
                    className="break-inside-avoid mb-12 cursor-pointer relative"
                    style={{
                      transform: `rotate(${rotation})`,
                      transition: "transform 0.25s ease",
                      zIndex: 0,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = `rotate(${rotation}) scale(1.03)`;
                      (e.currentTarget as HTMLElement).style.zIndex = "10";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = `rotate(${rotation}) scale(1)`;
                      (e.currentTarget as HTMLElement).style.zIndex = "0";
                    }}
                    onClick={() => setIndex(globalIndex)}
                  >
                    <div className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300" style={{ padding: "10px 10px 40px 10px" }}>
                      <div
                        className="relative w-full overflow-hidden"
                        style={{ aspectRatio: `${artwork.w} / ${artwork.h}` }}
                      >
                        <Image
                          src={artwork.src}
                          fill
                          className="object-cover"
                          style={{
                            ...(artwork.position ? { objectPosition: artwork.position } : {}),
                            ...artwork.imgStyle,
                          }}
                          alt={artwork.title}
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                      </div>
                      <p className="mt-2 font-heading text-xs font-light text-brown/60 text-center leading-tight">
                        {artwork.title}
                      </p>
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
            <button
              onClick={close}
              className="absolute -top-10 right-0 text-cream/80 hover:text-cream font-body text-xs tracking-widest uppercase transition-colors"
            >
              Close ✕
            </button>
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
