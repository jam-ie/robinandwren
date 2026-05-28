import type { Metadata } from "next";
import Link from "next/link";
import PortfolioGalleryScrapbook from "./PortfolioGalleryScrapbook";

export const metadata: Metadata = {
  title: "Robin & Wren Children's Art — Portfolio",
};

const sections = [
  {
    title: "Nature & Seasons",
    description:
      "Vermont gives Kathy four distinct worlds to paint. From the tentative green of early spring to the deep quiet of a January snowfall, these watercolors capture the seasons not just as landscapes, but as moods — the particular light and the feeling of a year turning.",
    artworks: [
      { id: 3,  title: "Fox in the Leaves",          src: "/images/artwork/faves/tgiving fox with leaves.webp",   w: 3154, h: 5003, position: "center bottom" },
      { id: 19, title: "Bluebird Nest",               src: "/images/artwork/bluebird-nest.webp",                   w: 5055, h: 3254 },
      { id: 27, title: "Blue & White Teapot",         src: "/images/artwork/Blue and White Teapot with bird_1.webp", w: 1922, h: 3230 },
      { id: 28, title: "Bunny with Wreath",           src: "/images/artwork/bunny with wreath_1.webp",             w: 4513, h: 2761 },
    ],
  },
  {
    title: "Holiday Collection",
    description:
      "Holidays deserve art that feels as special as the day itself. Kathy's seasonal designs — Christmas robins, Easter bunnies, autumn harvest scenes — are painted with the same care and warmth as her year-round work.",
    artworks: [
      { id: 1,  title: "Christmas Fox & Bunny",       src: "/images/artwork/christmas-fox-and-bunny.webp",                  w: 3220, h: 5014 },
      { id: 2,  title: "Fox Ice Skating",             src: "/images/artwork/fox-ice-skating.webp",                          w: 3306, h: 5034, position: "center bottom" },
      { id: 7,  title: "Bunnies Decorating the Tree", src: "/images/artwork/christmas bunnies decorating tree.webp",        w: 3291, h: 4723 },
      { id: 13, title: "Bear with Christmas Tree",    src: "/images/artwork/christmas bear with tree.webp",                 w: 3497, h: 5088 },
      { id: 6,  title: "Bunnies with Balloons",      src: "/images/artwork/faves/valentine-bunnies-and-balloons.webp",     w: 2849, h: 5034 },
      { id: 10, title: "Bunny Delivering Hearts",    src: "/images/artwork/faves/valentine-bunny-with-backpack.webp",      w: 3988, h: 5111 },
      { id: 14, title: "Valentine Bears",            src: "/images/artwork/valentine-bears-with-heart.webp",               w: 4982, h: 3214 },
      { id: 21, title: "Christmas Bird",             src: "/images/artwork/christmas bird with ornaments.webp",            w: 3622, h: 2926 },
      { id: 22, title: "Christmas Tea",              src: "/images/artwork/faves/christmas tea.webp",                      w: 4992, h: 3709 },
      { id: 8,  title: "Happy Easter",               src: "/images/artwork/faves/easter-bunny-and-bear.webp",              w: 4781, h: 3214 },
    ],
  },
  {
    title: "For Nurseries & Children's Rooms",
    description:
      "The best art for a child's room is art that grows with them — that they love at three and still love throughout childhood. Kathy's storybook watercolors are made to do exactly that: to be gentle enough for a newborn's room and rich enough in story to keep a child's imagination going for years.",
    artworks: [
      { id: 4,  title: "Baguette Bear",          src: "/images/artwork/faves/baguette-bear.webp",                   w: 3304, h: 5034 },
      { id: 5,  title: "Bunny with Cello",       src: "/images/artwork/faves/bunny-with-cello.webp",                w: 3247, h: 4289 },
      { id: 9,  title: "Bear in a Boat",         src: "/images/artwork/bear-in-boat-0001.webp",                     w: 5346, h: 4184, imgStyle: { transform: "scale(1.05) translateY(1%)" } },
      { id: 18, title: "Birthday Bears",         src: "/images/artwork/birthday bears with cupcakes.webp",          w: 4458, h: 3297 },
      { id: 23, title: "Birthday Bears & Cat",   src: "/images/artwork/birthday bears and cat.webp",                w: 4701, h: 3111 },
      { id: 24, title: "Birthday Bears & Cake",  src: "/images/artwork/birthday-bears-cake-and-balloon.webp",       w: 3577, h: 4749 },
      { id: 25, title: "Princess Bear",          src: "/images/artwork/birthday princess bear.webp",                w: 3215, h: 4966 },
      { id: 26, title: "Bunny with Carrots",     src: "/images/artwork/faves/bunny-with-carrots.webp",              w: 1575, h: 1702, imgStyle: { transform: "scale(1.05) translateY(-1.5%)" } },
      { id: 29, title: "Sailboat",               src: "/images/artwork/Sailboat_1.webp",                            w: 2528, h: 3234 },
      { id: 30, title: "Birthday Chicken",       src: "/images/artwork/birthday chicken.webp",                      w: 3270, h: 4453 },
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

      <PortfolioGalleryScrapbook sections={sections} />

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
