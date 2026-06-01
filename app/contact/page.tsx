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
      <section className="bg-paper pt-10 pb-0 px-6 text-center">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-taupe mb-4">
          Say Hello
        </p>
        <h1 className="font-heading text-5xl md:text-6xl font-light text-navy mb-2">
          Get in Touch
        </h1>
        <div className="flex justify-center">
          <Image src="/images/artwork/collage/tgiving-acorn.png" width={180} height={180} className="object-contain" alt="" />
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-paper-dark pb-10 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="font-heading text-xl font-light italic text-navy/70 leading-relaxed mb-12 text-center pt-10">
            Whether you&apos;re interested in a piece, a commission, or just want to say hello —
            Kathy would love to hear from you.
          </p>
          <Suspense fallback={<div className="h-96 bg-paper-dark animate-pulse" />}>
            <ContactForm />
          </Suspense>
          <div className="mt-16 pt-12 border-t border-paper-deeper text-center">
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
