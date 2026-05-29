import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Robin & Wren Studio — About",
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
      <section className="bg-cream pt-6 pb-10 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-12 h-px bg-taupe mx-auto mb-8" />
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
          <div className="w-12 h-px bg-taupe mx-auto mt-8" />
        </div>
      </section>

      {/* Artist's Statement */}
      <section className="relative overflow-hidden flex items-center" style={{ minHeight: "320px" }}>
        <div className="absolute inset-0">
          <Image
            src="/images/elena-mozhvilo-hwJGhkG-sgk-unsplash.webp"
            fill
            className="object-cover object-top"
            style={{ filter: "saturate(0.55) brightness(0.9)" }}
            alt=""
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 w-full flex items-center justify-center px-6 py-14">
          <div
            className="max-w-2xl w-full px-10 py-5 border-[6px] border-cream/40"
            style={{ backgroundColor: "rgba(88, 124, 165, 0.97)" }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-cream/80 mb-6 text-center">
              Artist&apos;s Statement
            </p>
            <div className="space-y-3">
              <p className="font-body text-base leading-7 text-cream">
                I create paintings that evoke the innocence of childhood wonder, stories waiting to unfold — a fox joyfully skating on a frozen pond, a rabbit happily flying a kite in spring, a French bear paddling a canoe. Nature is always lovingly intertwined in every painting.
              </p>
              <p className="font-body text-base leading-7 text-cream">
                My work is rooted in the illustrated books of my childhood, in the seasons of Vermont, and in the belief that beauty has a place in everyday life. A painting in a child&apos;s room. A holiday card on the mantle. A print that makes someone stop and smile.
              </p>
              <p className="font-body text-base leading-7 text-cream">
                I share my art because I hope it does for others what those classic storybook illustrations did for me — opened a door to somewhere enchanting and good.
              </p>
            </div>
            <p className="font-heading text-base font-light italic text-cream/70 mt-6">
              — Kathy Chandler, Robin &amp; Wren Studio
            </p>
          </div>
        </div>
      </section>

      {/* Bio + Images */}
      <section className="relative bg-cream py-24 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Bio text */}
            <div className="space-y-6">
              <p className="font-body text-base leading-8 text-brown/80">
                Kathy Chandler captures a world where animals have feelings, seasons arrive like old friends, and every corner of nature holds a small, unfolding story. Working in watercolor from her studio in Quechee, Vermont, her paintings invoke the spirit of the classic illustrated books she loved growing up.
              </p>
              <div className="flex w-full justify-center -mt-6 mb-6">
                <Image src="/images/artwork/collage/tgiving-guinea-hen.png" width={200} height={200} className="object-contain" alt="" />
              </div>
              <p className="font-body text-base leading-8 text-brown/80">
                Robin &amp; Wren Studio began as a way to share that world with others. Today, her watercolors find their way into nurseries, living rooms, and holiday traditions — small paintings that feel, somehow, like they&apos;ve always belonged there.
              </p>
              <p className="font-body text-base leading-8 text-brown/80">
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

      {/* CTA */}
      <section className="bg-cream-dark py-20 px-6 text-center">
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
