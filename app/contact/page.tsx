"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Image from "next/image";

// Replace YOUR_FORM_ID with your actual Formspree form ID after signing up at formspree.io
// Or if deploying to Netlify, replace action with "#" and add data-netlify="true" to the form element.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

function ContactForm() {
  const searchParams = useSearchParams();
  const subject = searchParams.get("subject") ?? "";

  return (
    <form
      action={FORMSPREE_ENDPOINT}
      method="POST"
      className="space-y-6"
    >
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block font-body text-xs tracking-widest uppercase text-brown/60 mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full bg-cream-dark border border-cream-deeper px-4 py-3 font-body text-sm text-brown placeholder-brown/30 focus:outline-none focus:border-taupe transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block font-body text-xs tracking-widest uppercase text-brown/60 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full bg-cream-dark border border-cream-deeper px-4 py-3 font-body text-sm text-brown placeholder-brown/30 focus:outline-none focus:border-taupe transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label className="block font-body text-xs tracking-widest uppercase text-brown/60 mb-2">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          defaultValue={subject}
          className="w-full bg-cream-dark border border-cream-deeper px-4 py-3 font-body text-sm text-brown placeholder-brown/30 focus:outline-none focus:border-taupe transition-colors"
          placeholder="What's on your mind?"
        />
      </div>

      <div>
        <label className="block font-body text-xs tracking-widest uppercase text-brown/60 mb-2">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={7}
          className="w-full bg-cream-dark border border-cream-deeper px-4 py-3 font-body text-sm text-brown placeholder-brown/30 focus:outline-none focus:border-taupe transition-colors resize-none"
          placeholder="Tell Kathy what you're looking for..."
        />
      </div>

      <button
        type="submit"
        className="bg-blue text-cream font-body text-xs tracking-widest uppercase px-10 py-4 hover:bg-blue-dark transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-cream py-20 px-6 text-center overflow-hidden">
        <div className="absolute top-6 left-[12%] opacity-80" style={{ transform: "rotate(-10deg)" }}>
          <Image src="/images/artwork/collage/brushes.png" width={300} height={300} className="object-contain" alt="" />
        </div>
        <div className="absolute bottom-10 right-[18%] opacity-75" style={{ transform: "rotate(-6deg)" }}>
          <Image src="/images/artwork/collage/pinecone.png" width={210} height={210} className="object-contain" alt="" />
        </div>
        <p className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-4">
          Say Hello
        </p>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-brown">
          Get in Touch
        </h1>
      </section>

      {/* Form Section */}
      <section className="relative bg-cream pb-10 px-6 overflow-hidden">
        <div className="absolute top-80 left-4 opacity-75" style={{ transform: "rotate(10deg)" }}>
          <Image src="/images/artwork/collage/paint-tubes.png" width={320} height={320} className="object-contain" alt="" />
        </div>
        <div className="absolute top-48 right-4 opacity-75" style={{ transform: "rotate(-8deg)" }}>
          <Image src="/images/artwork/collage/ribbon.png" width={320} height={320} className="object-contain" alt="" />
        </div>
        <div className="max-w-2xl mx-auto">
          <p className="font-heading text-xl font-light italic text-brown/70 leading-relaxed mb-12 text-center">
            Whether you&apos;re interested in a piece, a commission, or just want to say hello —
            Kathy would love to hear from you.
          </p>

          <Suspense fallback={<div className="h-96 bg-cream-dark animate-pulse" />}>
            <ContactForm />
          </Suspense>

          {/* Studio location */}
          <div className="mt-16 pt-12 border-t border-cream-deeper text-center">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-3">
              Studio Location
            </p>
            <p className="font-heading text-xl font-light text-brown">
              Quechee, Vermont
            </p>
          </div>

          <div className="flex justify-center mt-10 -mb-4">
            <Image src="/images/artwork/collage/tulip.png" width={300} height={300} className="object-contain" style={{ transform: "rotate(-6deg)" }} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
