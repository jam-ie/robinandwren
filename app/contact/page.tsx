"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

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
          <label className="block font-body text-xs tracking-widest uppercase text-navy/60 mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full bg-paper-dark border border-paper-deeper px-4 py-3 font-body text-sm text-navy placeholder-navy/30 focus:outline-none focus:border-taupe transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block font-body text-xs tracking-widest uppercase text-navy/60 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full bg-paper-dark border border-paper-deeper px-4 py-3 font-body text-sm text-navy placeholder-navy/30 focus:outline-none focus:border-taupe transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label className="block font-body text-xs tracking-widest uppercase text-navy/60 mb-2">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          defaultValue={subject}
          className="w-full bg-paper-dark border border-paper-deeper px-4 py-3 font-body text-sm text-navy placeholder-navy/30 focus:outline-none focus:border-taupe transition-colors"
          placeholder="What's on your mind?"
        />
      </div>

      <div>
        <label className="block font-body text-xs tracking-widest uppercase text-navy/60 mb-2">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={7}
          className="w-full bg-paper-dark border border-paper-deeper px-4 py-3 font-body text-sm text-navy placeholder-navy/30 focus:outline-none focus:border-taupe transition-colors resize-none"
          placeholder="Tell Kathy what you're looking for..."
        />
      </div>

      <button
        type="submit"
        className="bg-blue text-paper font-body text-xs tracking-widest uppercase px-10 py-4 hover:bg-blue-dark transition-colors"
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
      <section className="bg-paper py-20 px-6 text-center">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-4">
          Say Hello
        </p>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-navy">
          Get in Touch
        </h1>
      </section>

      {/* Form Section */}
      {/* Form with bunny strips */}
      <section className="relative bg-paper px-6 overflow-hidden">
        <div className="absolute top-0 left-0 bottom-0 w-[350px] opacity-95" style={{
          backgroundColor: "#F0F4F8",
          backgroundImage: "url('/images/artwork/bunny-pattern.webp')",
          backgroundSize: "750px auto",
          backgroundRepeat: "repeat-y",
          backgroundBlendMode: "multiply",
          filter: "blur(0.8px)",
          WebkitMaskImage: "linear-gradient(to right, black 75%, transparent 100%)",
          maskImage: "linear-gradient(to right, black 75%, transparent 100%)",
        }} />
        <div className="absolute top-0 right-0 bottom-0 w-[350px] opacity-95" style={{
          backgroundColor: "#F0F4F8",
          backgroundImage: "url('/images/artwork/bunny-pattern.webp')",
          backgroundSize: "750px auto",
          backgroundRepeat: "repeat-y",
          backgroundBlendMode: "multiply",
          filter: "blur(0.8px)",
          WebkitMaskImage: "linear-gradient(to left, black 75%, transparent 100%)",
          maskImage: "linear-gradient(to left, black 75%, transparent 100%)",
        }} />
        <div className="relative max-w-2xl mx-auto py-10">
          <p className="font-heading text-xl font-light italic text-navy/70 leading-relaxed mb-12 text-center">
            Whether you&apos;re interested in a piece, a commission, or just want to say hello —
            Kathy would love to hear from you.
          </p>
          <Suspense fallback={<div className="h-96 bg-paper-dark animate-pulse" />}>
            <ContactForm />
          </Suspense>
        </div>
      </section>

      {/* Studio location — no bunnies */}
      <section className="bg-paper pb-14 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="pt-12 border-t border-paper-deeper text-center">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-3">
              Studio Location
            </p>
            <p className="font-heading text-xl font-light text-navy">
              Quechee, Vermont
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
