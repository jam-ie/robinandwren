"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

type Artwork = { id: number; title: string; src: string; w: number; h: number; position?: string; imgStyle?: React.CSSProperties };
type Section = { title: string; description: string; artworks: Artwork[]; rowLayout?: number[] };

const SECTION_ROTATIONS = [
  // Nature & Seasons
  ["-2deg", "3deg", "-3.5deg", "1.5deg"],
  // Holiday
  ["2.5deg", "-4deg", "0.5deg", "-1.5deg", "0deg", "-2.5deg", "1deg", "-3deg", "3.5deg", "-1deg"],
  // Nursery
  ["-3deg", "1.5deg", "-1deg", "3.5deg", "-1.5deg", "2deg", "-2.5deg", "1deg", "-0.5deg", "2.5deg"],
];

function getRowWidth(localIndex: number, rowLayout: number[]): string {
  let start = 0;
  for (const count of rowLayout) {
    if (localIndex < start + count) return `${100 / count}%`;
    start += count;
  }
  return `${100 / (rowLayout[rowLayout.length - 1] ?? 3)}%`;
}

function ArtworkCard({
  artwork,
  globalIndex,
  localIndex,
  si,
  rowWidth,
  spacious,
  onClick,
}: {
  artwork: Artwork;
  globalIndex: number;
  localIndex: number;
  si: number;
  rowWidth?: string;
  spacious?: boolean;
  onClick: () => void;
}) {
  const rotations = SECTION_ROTATIONS[si] ?? SECTION_ROTATIONS[0];
  const rotation = rotations[localIndex % rotations.length];
  const isLandscape = artwork.w > artwork.h;
  const baseScale = isLandscape ? "scale(1.15)" : "scale(1)";

  return (
    <div
      className={`${rowWidth ? "" : "break-inside-avoid"} ${spacious ? "mb-16" : "mb-12"} cursor-pointer relative`}
      style={{
        width: rowWidth,
        padding: rowWidth ? "0 1rem" : undefined,
        transform: `rotate(${rotation}) ${baseScale}`,
        transition: "transform 0.25s ease, filter 0.25s ease",
        zIndex: 0,
        filter: "drop-shadow(3px 5px 8px rgba(0,0,0,0.18))",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = `rotate(${rotation}) scale(${isLandscape ? 1.18 : 1.03})`;
        (e.currentTarget as HTMLElement).style.zIndex = "10";
        (e.currentTarget as HTMLElement).style.filter = "drop-shadow(5px 8px 14px rgba(0,0,0,0.28))";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = `rotate(${rotation}) ${baseScale}`;
        (e.currentTarget as HTMLElement).style.zIndex = "0";
        (e.currentTarget as HTMLElement).style.filter = "drop-shadow(3px 5px 8px rgba(0,0,0,0.18))";
      }}
      onClick={onClick}
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
        <p className="mt-2 font-heading text-xl font-light text-navy/60 text-center leading-tight">
          {artwork.title}
        </p>
      </div>
    </div>
  );
}

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
    <div
      className="bg-paper"
      style={{
        backgroundImage: "url('/images/textured-paper.webp')",
        backgroundRepeat: "repeat",
        backgroundSize: "500px",
        backgroundBlendMode: "multiply",
        backgroundColor: "#F8FBFF",
      }}
    >
      {sections.map((section, si) => (
        <section
          key={section.title}
          className={`${si === 0 ? "pt-14" : si === 2 ? "pt-10" : "pt-20"} pb-20 px-8`}
        >
          <div className="max-w-6xl mx-auto">
            <div className={`${si === 2 ? "mb-20" : "mb-12"} max-w-2xl`}>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-navy mb-5">
                {section.title}
              </h2>
              <p className="font-body text-sm leading-7 text-navy/70">
                {section.description}
              </p>
            </div>

            {section.rowLayout ? (
              // Flex row layout (e.g. 4-3-3)
              <div className="flex flex-wrap -mx-4">
                {section.artworks.map((artwork, localIndex) => {
                  const globalIndex = allArtworks.findIndex((a) => a.id === artwork.id);
                  const rowWidth = getRowWidth(localIndex, section.rowLayout!);
                  return (
                    <ArtworkCard
                      key={artwork.id}
                      artwork={artwork}
                      globalIndex={globalIndex}
                      localIndex={localIndex}
                      si={si}
                      rowWidth={rowWidth}
                      onClick={() => setIndex(globalIndex)}
                    />
                  );
                })}
              </div>
            ) : (
              // CSS columns / scrapbook layout
              <>
                <style>{`
                  .scrapbook-grid { columns: 2; column-gap: 2.5rem; }
                  .scrapbook-grid-spacious { columns: 2; column-gap: 3.5rem; }
                  @media (min-width: 640px) { .scrapbook-grid, .scrapbook-grid-spacious { columns: 3; } }
                  @media (min-width: 1024px) { .scrapbook-grid, .scrapbook-grid-spacious { columns: 4; } }
                `}</style>
                <div className={si >= 1 ? "scrapbook-grid-spacious" : "scrapbook-grid"}>
                  {section.artworks.map((artwork, localIndex) => {
                    const globalIndex = allArtworks.findIndex((a) => a.id === artwork.id);
                    return (
                      <ArtworkCard
                        key={artwork.id}
                        artwork={artwork}
                        globalIndex={globalIndex}
                        localIndex={localIndex}
                        si={si}
                        spacious={si >= 1}
                        onClick={() => setIndex(globalIndex)}
                      />
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </section>
      ))}

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/80 backdrop-blur-sm p-6"
          onClick={close}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              className="absolute -top-10 right-0 text-paper/80 hover:text-paper font-body text-xs tracking-widest uppercase transition-colors"
            >
              Close ✕
            </button>
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 text-paper/70 hover:text-paper text-3xl transition-colors"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 text-paper/70 hover:text-paper text-3xl transition-colors"
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
                <p className="font-heading text-2xl font-light text-paper">{selected.title}</p>
                <p className="font-body text-xs tracking-widest text-paper/50 mt-1">
                  {(index ?? 0) + 1} / {allArtworks.length}
                </p>
              </div>
              <Link
                href={`/contact?subject=${encodeURIComponent(`Inquiry about "${selected.title}"`)}`}
                className="font-body text-xs tracking-widest uppercase text-paper border-b border-paper/50 pb-0.5 hover:border-paper transition-colors ml-6 shrink-0"
                onClick={close}
              >
                Inquire
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
