import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robin & Wren Children's Art — About",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-cream py-20 px-6 text-center">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-4">
          The Artist
        </p>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-brown">
          About Kathy
        </h1>
      </section>

      {/* Pull Quote */}
      <section className="bg-cream-dark py-20 px-6">
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
      <section className="bg-cream py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Bio text */}
            <div className="space-y-6">
              <p className="font-body text-base leading-8 text-brown/80">
                That miraculous world is where Kathy Chandler lives as an artist.
              </p>
              <p className="font-body text-base leading-8 text-brown/80">
                Kathy has been drawing, painting, and creating for as long as she can
                remember — a lifelong conversation between her imagination and a
                paintbrush. Her watercolors began as a private joy, and slowly became
                something she felt called to share: a line of children&apos;s art rooted
                in wonder, warmth, and the particular innocence of early childhood.
              </p>
              <p className="font-body text-base leading-8 text-brown/80">
                The inspiration is close to her heart. Kathy raised her own children
                surrounded by the quiet beauty of Vermont, and those years — the seasons
                changing, small hands reaching for things, the way everything felt
                significant and unhurried — left a deep impression. Now, as a
                grandmother, she finds that world again in her granddaughter, whose light
                and curiosity remind her daily of what Chesterton meant: that childhood
                isn&apos;t just a time of wonder. It is wonder, entire.
              </p>
              <p className="font-body text-base leading-8 text-brown/80">
                Her paintings reflect that feeling. Dressed-up animals, nature in its
                gentlest moods, holidays made tender and lovely — each piece is an
                invitation back to a place you may have half-forgotten. It is
                Kathy&apos;s hope that her work brings a little of that
                &ldquo;miraculous world&rdquo; into your home, and into the childhood of
                your little one.
              </p>
              <p className="font-body text-base leading-8 text-brown/80">
                Robin &amp; Wren Children&apos;s Art is her studio, named with the same affection she
                paints with. Welcome.
              </p>
            </div>

            {/* Images */}
            <div className="flex flex-col gap-6">
              {/* Portrait placeholder — swap in real photo */}
              {/* [PLACEHOLDER] Replace this div with an <Image> of Kathy */}
              <div
                className="art-placeholder-4 w-full aspect-[3/4] shadow-md"
                style={{ transform: "rotate(1.5deg)" }}
                aria-label="[PLACEHOLDER] Portrait of Kathy Chandler"
              >
                <div className="flex items-end justify-center h-full pb-4">
                  <span className="font-body text-xs text-brown/40 tracking-wider">
                    [PLACEHOLDER] Portrait
                  </span>
                </div>
              </div>

              {/* Studio/workspace placeholder — swap in real photo */}
              {/* [PLACEHOLDER] Replace this div with an <Image> of the studio */}
              <div
                className="art-placeholder-2 w-full aspect-[4/3] shadow-md"
                style={{ transform: "rotate(-1deg)" }}
                aria-label="[PLACEHOLDER] Studio or workspace photo"
              >
                <div className="flex items-end justify-center h-full pb-4">
                  <span className="font-body text-xs text-brown/40 tracking-wider">
                    [PLACEHOLDER] Studio
                  </span>
                </div>
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
