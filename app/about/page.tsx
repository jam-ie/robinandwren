import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Robin & Wren Children's Art — About",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-cream py-6 px-6 text-center">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-4">
          The Artist
        </p>
        <div className="flex items-center justify-center gap-6">
          <Image src="/images/artwork/collage/valentine-wreath-in-pot.png" width={125} height={125} className="object-contain -mt-16" alt="" />
          <h1 className="font-heading text-5xl md:text-6xl font-light text-brown">
            About Kathy
          </h1>
          <Image src="/images/artwork/collage/valentine-wreath-in-pot.png" width={125} height={125} className="object-contain -mt-16" alt="" />
        </div>
      </section>

      {/* Pull Quote */}
      <section className="relative bg-cream-dark py-20 px-6 overflow-hidden">
        <div className="absolute top-6 left-6 opacity-80" style={{ transform: "rotate(-12deg)" }}>
          <Image src="/images/artwork/collage/tgiving-acorn.png" width={300} height={300} className="object-contain" alt="" />
        </div>
        <div className="absolute bottom-6 right-8 opacity-75" style={{ transform: "rotate(10deg)" }}>
          <Image src="/images/artwork/collage/valentine-bird-nest.png" width={320} height={320} className="object-contain" alt="" />
        </div>
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-12 h-px bg-taupe mx-auto mb-12" />
          <blockquote>
            <p className="font-heading text-2xl md:text-3xl font-light italic text-brown leading-relaxed mb-6">
              &ldquo;What was wonderful about childhood is that anything in it was
              a wonder. It wasn&apos;t merely a world full of miracles; it was a
              miraculous world.&rdquo;
            </p>
            <footer className="font-body text-xs tracking-[0.25em] uppercase text-taupe">
              — G.K. Chesterton
            </footer>
          </blockquote>
          <div className="w-12 h-px bg-taupe mx-auto mt-12" />
        </div>
      </section>

      {/* Bio + Images */}
      <section className="relative bg-cream py-24 px-6 overflow-hidden">
        <div className="absolute left-4 top-36 opacity-80" style={{ transform: "rotate(8deg)" }}>
          <Image src="/images/artwork/collage/tgiving-guinea-hen.png" width={260} height={260} className="object-contain" alt="" />
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Bio text */}
            <div className="space-y-6">
              <p className="font-body text-base leading-8 text-brown/80">
                Kathy Chandler captures the child&apos;s imagination in her work — as a place where animals have feelings, where seasons arrive like old friends, and where every corner of nature holds a small, unfolding story.
              </p>
              <p className="font-body text-base leading-8 text-brown/80">
                Based in Quechee, Vermont, Kathy works in watercolor, painting the animal characters and seasonal scenes with the joy of a simple, unhurried and enchanting world. Her work carries the beloved childhood spirit of the classic illustrated books she read growing up.
              </p>
              <p className="font-body text-base leading-8 text-brown/80">
                Robin &amp; Wren Art began as a way to share that world with others. Today, her watercolors find their way into nurseries, living rooms, and holiday traditions — small paintings that feel, somehow, like they&apos;ve always belonged there.
              </p>
              <div className="flex w-full justify-center pl-36 -mt-6 mb-6">
                <Image src="/images/artwork/collage/christmas-winter-wreath.png" width={180} height={180} className="object-contain" style={{ transform: "rotate(6deg)" }} alt="" />
              </div>
              <p className="font-body text-base leading-8 text-brown/80">
                Kathy is a self-taught artist whose work is rooted in a lifelong love of art, nature, and the stories we tell through the changing seasons. Now, as a grandmother, she finds that world again in her grandchildren, whose light and curiosity remind her daily of what Chesterton meant.
              </p>
              <div className="flex w-full justify-center -mt-6 mb-6">
                <Image src="/images/artwork/collage/lemons.png" width={240} height={240} className="object-contain" style={{ transform: "rotate(-7deg)", marginLeft: "auto", marginRight: "auto" }} alt="" />
              </div>
              <p className="font-body text-base leading-8 text-brown/80">
                Her paintings reflect that feeling. Dressed-up animals, nature in its gentlest moods, holidays made tender and lovely — each piece is an invitation back to a place you may have half-forgotten. It is Kathy&apos;s hope that her work brings a little of that &ldquo;miraculous world&rdquo; into your home, and into the childhood of your little one.
              </p>
            </div>

            {/* Images */}
            <div className="flex flex-col gap-6">
              <div className="relative w-full aspect-[3/4] shadow-md overflow-hidden" style={{ transform: "rotate(1.5deg)" }}>
                <Image src="/images/kath.jpg" fill className="object-cover" alt="Kathy Chandler" />
              </div>

              <div className="relative w-full aspect-[4/3] shadow-md overflow-hidden" style={{ transform: "rotate(-1deg)" }}>
                <Image src="/images/workspace.jpg" fill className="object-cover" alt="Kathy's studio workspace" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-cream-dark py-20 px-6 text-center overflow-hidden">
        <div className="absolute top-4 right-10 opacity-75" style={{ transform: "rotate(8deg)" }}>
          <Image src="/images/artwork/collage/tgiving-fox-with-basket.png" width={220} height={220} className="object-contain" alt="" />
        </div>
        <div className="absolute bottom-4 left-8 opacity-70" style={{ transform: "rotate(-9deg)" }}>
          <Image src="/images/artwork/collage/cupcake-0002.png" width={200} height={200} className="object-contain" alt="" />
        </div>
        <p className="font-heading text-2xl md:text-3xl font-light italic text-brown/70 mb-8">
          Interested in a piece, or just want to say hello?
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue text-cream font-body text-xs tracking-widest uppercase px-10 py-4 hover:bg-blue-dark transition-colors"
        >
          Get in Touch
        </a>
      </section>
    </>
  );
}
