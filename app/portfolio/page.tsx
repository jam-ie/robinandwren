import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Robin & Wren Children's Art — Portfolio",
};

const sections = [
  {
    title: "Nature & Seasons",
    description:
      "Vermont gives Kathy four distinct worlds to paint. From the tentative green of early spring to the deep quiet of a January snowfall, these watercolors capture the seasons not just as landscapes, but as moods — the particular light and the feeling of a year turning.",
    artworks: [
      { id: 3,  title: "Fox in the Leaves",        src: "/images/artwork/tgiving-fox-with-leaves.jpg",          w: 3154, h: 5003 },
      { id: 15, title: "Squirrel with Wreath",      src: "/images/artwork/valentine-squirrel-with-wreath.jpg",  w: 5187, h: 3250 },
      { id: 19, title: "Bluebird Nest",             src: "/images/artwork/fall-leaves-bird-nest.jpg",           w: 5055, h: 3254 },
      { id: 12, title: "Bunny with Wreath",         src: "/images/artwork/bunny-with-wreath.jpg",               w: 4513, h: 2761 },
      { id: 16, title: "Blue & White Teapot",       src: "/images/artwork/blue-and-white-teapot-with-bird.jpg", w: 1922, h: 3230 },
    ],
  },
  {
    title: "Holiday Collection",
    description:
      "Holidays deserve art that feels as special as the day itself. Kathy's seasonal designs — Christmas robins, Easter bunnies, autumn harvest scenes — are painted with the same care and warmth as her year-round work.",
    artworks: [
      { id: 1,  title: "Christmas Fox & Bunny",        src: "/images/artwork/christmas-fox-and-bunny.jpg",           w: 3220, h: 5014 },
      { id: 2,  title: "Fox Ice Skating",              src: "/images/artwork/fox-ice-skating.jpg",                   w: 3306, h: 5034 },
      { id: 7,  title: "Bunnies Decorating the Tree",  src: "/images/artwork/christmas-bunnies-decorating-tree.jpg", w: 3291, h: 4723 },
      { id: 13, title: "Bear with Christmas Tree",     src: "/images/artwork/christmas-bear-with-tree.jpg",          w: 3497, h: 5088 },
      { id: 8,  title: "Happy Easter",                 src: "/images/artwork/easter-bunny-and-bear.jpg",             w: 4781, h: 3214 },
      { id: 6,  title: "Bunnies with Balloons",        src: "/images/artwork/valentine-bunnies-and-balloons.jpg",    w: 2849, h: 5034 },
      { id: 10, title: "Bunny Delivering Hearts",      src: "/images/artwork/valentine-bunny-with-backpack.jpg",     w: 3988, h: 5111 },
      { id: 14, title: "Valentine Bears",              src: "/images/artwork/valentine-bears-with-heart.jpg",        w: 4982, h: 3214 },
    ],
  },
  {
    title: "For Nurseries & Children's Rooms",
    description:
      "The best art for a child's room is art that grows with them — that they love at three and still love throughout childhood. Kathy's storybook watercolors are made to do exactly that: to be gentle enough for a newborn's room and rich enough in story to keep a child's imagination going for years.",
    artworks: [
      { id: 4,  title: "Baguette Bear",    src: "/images/artwork/baguette-bear.jpg",                w: 3304, h: 5034 },
      { id: 5,  title: "Bunny with Cello", src: "/images/artwork/bunny-with-cello.jpg",             w: 3247, h: 4289 },
      { id: 9,  title: "Bear in a Boat",   src: "/images/artwork/bear-in-boat-0001.jpg",            w: 5346, h: 4184 },
      { id: 17, title: "Little Sailboat",  src: "/images/artwork/sailboat.jpg",                     w: 2528, h: 3234 },
      { id: 18, title: "Birthday Bears",   src: "/images/artwork/birthday-bears-with-cupcakes.jpg", w: 4458, h: 3297 },
    ],
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-cream py-20 px-6 text-center">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-4">
          The Work
        </p>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-brown mb-6">
          Portfolio
        </h1>
        <div className="max-w-xl mx-auto bg-cream-dark border border-cream-deeper px-8 py-6 mt-6">
          <p className="font-heading text-lg font-light italic text-brown/80 leading-relaxed">
            Interested in a piece? Reach out —{" "}
            <Link href="/contact" className="text-blue hover:underline">
              Kathy would love to hear from you.
            </Link>
          </p>
        </div>
      </section>

      {/* Category Sections */}
      {sections.map((section, i) => (
        <section
          key={section.title}
          className={`py-20 px-6 ${i % 2 === 0 ? "bg-cream" : "bg-cream-dark"}`}
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
              {section.artworks.map((artwork) => (
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
                    <p className="font-heading text-xl font-light text-brown">{artwork.title}</p>
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
      ))}

      {/* CTA */}
      <section className="bg-cream-dark py-20 px-6 text-center border-t border-cream-deeper">
        <p className="font-heading text-2xl md:text-3xl font-light italic text-brown/70 mb-8">
          See something you love?
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue text-cream font-body text-xs tracking-widest uppercase px-10 py-4 hover:bg-blue-dark transition-colors"
        >
          Get in Touch
        </Link>
      </section>
    </>
  );
}
