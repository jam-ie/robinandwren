import Link from "next/link";
import Image from "next/image";

const featuredArtworks = [
  { id: 1, title: "Baguette Bear", category: "Animals", src: "/images/artwork/faves/baguette-bear.jpg", w: 3304, h: 5034, rotation: "-2deg", delay: "0s" },
  { id: 2, title: "Bunny with Cello", category: "Animals", src: "/images/artwork/faves/bunny-with-cello.jpg", w: 3247, h: 4289, rotation: "1.5deg", delay: "1s" },
  { id: 3, title: "Fox in the Leaves", category: "Nature & Seasons", src: "/images/artwork/faves/tgiving-fox-with-leaves.jpg", w: 3154, h: 5003, rotation: "-1deg", delay: "2s" },
  { id: 4, title: "Bunnies with Balloons", category: "Holiday", src: "/images/artwork/faves/valentine-bunnies-and-balloons.jpg", w: 2849, h: 5034, rotation: "2deg", delay: "0.5s" },
];

const shopTeasers = [
  { id: 1, title: "Happy Easter", category: "Holiday", src: "/images/artwork/faves/easter-bunny-and-bear.jpg", w: 4781, h: 3214 },
  { id: 2, title: "Bunny with Carrots", category: "Animals", src: "/images/artwork/faves/bunny-with-carrots.jpg", w: 3304, h: 5034 },
  { id: 3, title: "Christmas Tea", category: "Holiday", src: "/images/artwork/faves/christmas-tea.jpg", w: 4992, h: 3709 },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[500px] flex items-center bg-cream">
        {/* Image — right 57% of section, scales to fill height */}
        <div className="absolute right-0 top-0 w-[56%]" style={{ bottom: '-100px', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 22%)', maskImage: 'linear-gradient(to right, transparent 0%, black 22%)' }}>
          <Image
            src="/images/walk-thru-forest.jpg"
            fill
            className="object-cover"
            style={{ objectPosition: "center 100%" }}
            alt=""
            priority
            sizes="52vw"
          />
        </div>
        {/* Gradient: cream → transparent, wide soft fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #F0F4F8 28%, rgba(240,244,248,0.4) 44%, transparent 58%)",
          }}
        />

        {/* Text — sits on the cream side */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 w-full">
          <div className="max-w-[38%]">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-6 whitespace-nowrap">
              Watercolor Children&apos;s Art · Quechee, Vermont
            </p>
            <h1 className="font-heading font-light leading-[1.05] text-brown mb-8">
              <span className="block text-6xl md:text-7xl lg:text-[82px] whitespace-nowrap">Robin &amp; Wren</span>
              <em className="block text-5xl md:text-6xl lg:text-[66px]">Children&apos;s Art</em>
            </h1>
            <p className="font-heading text-xl md:text-2xl font-light italic text-brown/60 leading-relaxed mb-10">
              Where stories live before the words do.
            </p>
            <div className="flex flex-col gap-4 items-start">
              <Link
                href="/shop"
                className="inline-block bg-blue text-cream font-body text-xs tracking-widest uppercase px-8 py-4 hover:bg-blue-dark transition-colors"
              >
                Browse the Collection
              </Link>
              <Link
                href="/about"
                className="inline-block border border-brown/30 text-brown font-body text-xs tracking-widest uppercase px-8 py-4 hover:border-brown transition-colors"
              >
                About Kathy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="bg-cream-dark pt-10 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Image src="/images/artwork/collage/valentine-squirrel-with-wreath.png" width={180} height={180} className="object-contain" alt="" />
            </div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-4">Featured Work</p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-brown">From the Studio</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
            {featuredArtworks.map((artwork) => (
              <Link key={artwork.id} href="/shop" className="group block">
                <div
                  className="relative w-full aspect-[4/5] animate-float transition-shadow duration-500"
                  style={{ transform: `rotate(${artwork.rotation})`, animationDelay: artwork.delay, animationDuration: `${7 + artwork.id}s` }}
                >
                  <Image
                    src={artwork.src}
                    fill
                    className="object-contain"
                    alt={artwork.title}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="mt-4 px-1">
                  <p className="font-heading text-lg font-light text-brown group-hover:text-blue transition-colors">{artwork.title}</p>
                  <p className="font-body text-xs tracking-wider uppercase text-brown/50 mt-1">{artwork.category}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/shop" className="inline-block border border-brown/30 text-brown font-body text-xs tracking-widest uppercase px-10 py-4 hover:border-brown hover:bg-cream-deeper transition-colors">
              View All Work
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser — full-bleed bunny pattern with French blue overlay */}
      <section className="relative overflow-hidden min-h-[600px] flex items-center">
        <Image
          src="/images/artwork/bunny-pattern.png"
          fill
          className="object-cover object-center"
          style={{ filter: "saturate(0.55) brightness(1.05)" }}
          alt=""
          sizes="100vw"
        />
        <div className="relative z-10 w-full flex items-center justify-center px-6 py-24">
          <div
            className="max-w-2xl w-full text-center px-10 md:px-20 py-16 border-[6px] border-cream/40"
            style={{ backgroundColor: "rgba(88, 124, 165, 0.95)" }}
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-cream/70 mb-6">
              The Artist
            </p>
            <p className="font-heading text-2xl md:text-3xl font-light italic text-cream/90 leading-relaxed mb-6">
              &ldquo;What was wonderful about childhood is that anything in it was a wonder.&rdquo;
            </p>
            <p className="font-body text-base text-cream/80 leading-relaxed mb-10 max-w-lg mx-auto">
              Kathy Chandler creates watercolor children&apos;s art from her studio in Quechee, Vermont —
              storybook paintings rooted in wonder, warmth, and the particular magic of early childhood.
            </p>
            <Link
              href="/about"
              className="inline-block font-body text-sm tracking-widest uppercase text-cream border-b border-cream/50 pb-1 hover:border-cream transition-colors"
            >
              Read Kathy&apos;s Story
            </Link>
          </div>
        </div>
      </section>

      {/* Shop Teaser */}
      <section className="bg-cream-dark -mt-8 pt-0 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-0">
              <Image src="/images/artwork/collage/cat-wreath.png" width={180} height={180} className="object-contain -mb-12" alt="" />
            </div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-4">The Collection</p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-brown mb-4">Art for Little Walls</h2>
            <p className="font-body text-sm text-brown/60 italic">The shop is coming soon — reach out to inquire about a piece.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-14">
            {shopTeasers.map((piece) => (
              <Link key={piece.id} href="/shop" className="group block">
                <div className="relative w-full aspect-[4/3] overflow-hidden shadow-sm group-hover:shadow-md group-hover:scale-[1.02] transition-all duration-500">
                  <Image src={piece.src} fill className="object-cover" alt={piece.title} sizes="(max-width: 640px) 100vw, 33vw" />
                </div>
                <p className="mt-3 font-heading text-lg font-light text-brown group-hover:text-blue transition-colors">{piece.title}</p>
                <p className="font-body text-xs tracking-wider uppercase text-brown/50 mt-0.5">{piece.category}</p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/shop" className="inline-block bg-blue text-cream font-body text-xs tracking-widest uppercase px-10 py-4 hover:bg-blue-dark transition-colors">
              Browse the Collection
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
