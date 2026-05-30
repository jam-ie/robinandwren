import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Robin & Wren Studio — About",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-paper py-6 px-6 text-center">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-4">
          The Artist
        </p>
        <div className="flex items-center justify-center gap-6">
          <Image src="/images/artwork/collage/valentine-wreath-in-pot.png" width={125} height={125} className="object-contain -mt-16" alt="" />
          <h1 className="font-heading text-5xl md:text-6xl font-light text-navy">
            About Kathy
          </h1>
          <Image src="/images/artwork/collage/valentine-wreath-in-pot.png" width={125} height={125} className="object-contain -mt-16" alt="" />
        </div>
      </section>

      {/* Pull Quote */}
      <section className="relative pt-14 pb-14 px-6 overflow-hidden" style={{
        backgroundImage: "url('/images/sky.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center 38%",
      }}>
        <div className="absolute inset-0 bg-paper/60" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="w-12 h-px bg-taupe mx-auto mb-8" />
          <blockquote>
            <p className="font-heading text-2xl md:text-3xl italic text-navy leading-relaxed mb-6">
              &ldquo;What was wonderful about childhood is that anything in it was
              a wonder. It wasn&apos;t merely a world full of miracles; it was a
              miraculous world.&rdquo;
            </p>
            <footer className="font-body text-xs tracking-[0.25em] uppercase text-taupe">
              — G.K. Chesterton
            </footer>
          </blockquote>
          <div className="w-12 h-px bg-taupe mx-auto mt-8" />
        </div>
      </section>

      {/* Bio + Images */}
      <section className="relative bg-paper py-14 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Bio text */}
            <div className="space-y-6">
              <div className="flex w-full justify-center -mt-12">
                <Image src="/images/artwork/collage/tgiving-guinea-hen.png" width={200} height={200} className="object-contain" alt="" />
              </div>
              <p className="font-body text-base leading-8 text-navy/80">
                Kathy Chandler captures a world where animals have feelings, seasons arrive like old friends, and every corner of nature holds a small, unfolding story. Working in watercolor from her studio in Quechee, Vermont, her paintings invoke the spirit of the classic illustrated books she loved growing up.
              </p>
              <p className="font-body text-base leading-8 text-navy/80">
                Robin &amp; Wren Studio began as a way to share that world with others. Today, her watercolors find their way into nurseries, living rooms, and holiday traditions — small paintings that feel, somehow, like they&apos;ve always belonged there.
              </p>
              <p className="font-body text-base leading-8 text-navy/80">
                A self-taught artist and author, Kathy&apos;s work is rooted in a lifelong love of nature and the stories we tell through the changing seasons. Now, as a grandmother, she finds that world again in her grandchildren, whose light and curiosity remind her daily of what Chesterton meant. It is her hope that each piece brings a little of that miraculous world into your home.
              </p>
              <div className="flex w-full justify-center -mt-2">
                <Image src="/images/artwork/collage/lemons.png" width={240} height={240} className="object-contain" style={{ transform: "rotate(7deg)" }} alt="" />
              </div>
            </div>

            {/* Images */}
            <div className="flex flex-col gap-6">
              <div className="relative w-full aspect-[3/4] shadow-md overflow-hidden" style={{ transform: "rotate(1.5deg)" }}>
                <Image src="/images/portrait/kath.jpg" fill className="object-cover" alt="Kathy Chandler" />
              </div>

              <div className="relative w-full aspect-[4/3] shadow-md overflow-hidden" style={{ transform: "rotate(-1deg)" }}>
                <Image src="/images/studio/workspace.jpg" fill className="object-cover" alt="Kathy's studio workspace" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artist's Statement */}
      <section className="bg-paper-dark py-14 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-10 h-px bg-taupe mx-auto mb-10" />
          <p className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-8">
            Artist&apos;s Statement
          </p>
          <div className="space-y-5">
            <p className="font-heading text-[1.15rem] leading-8 italic text-navy/95">
              I create paintings that evoke the innocence of childhood wonder, stories waiting to unfold — a fox joyfully skating on a frozen pond, a rabbit happily flying a kite in spring, a French bear paddling a canoe. Nature is always lovingly intertwined in every painting.
            </p>
            <p className="font-heading text-[1.15rem] leading-8 italic text-navy/95">
              My work is rooted in the illustrated books of my childhood, in the seasons of Vermont, and in the belief that beauty has a place in everyday life. A painting in a child&apos;s room. A holiday card on the mantle. A print that makes someone stop and smile.
            </p>
            <p className="font-heading text-[1.15rem] leading-8 italic text-navy/95">
              I share my art because I hope it does for others what those classic storybook illustrations did for me — opened a door to somewhere enchanting and good.
            </p>
          </div>
          <p className="font-body text-xs tracking-[0.2em] uppercase text-taupe mt-8">
            — Kathy Chandler, Robin &amp; Wren Studio
          </p>
          <div className="w-10 h-px bg-taupe mx-auto mt-10" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper py-20 px-6 text-center">
        <p className="font-heading text-2xl md:text-3xl font-light italic text-navy/70 mb-8">
          Interested in a piece, or just want to say hello?
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue text-paper font-body text-xs tracking-widest uppercase px-10 py-4 hover:bg-blue-dark transition-colors"
        >
          Get in Touch
        </a>
      </section>
    </>
  );
}
