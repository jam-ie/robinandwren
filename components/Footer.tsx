import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/book", label: "The Book" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-paper border-t border-paper-deeper mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col items-center gap-3">
        <Link href="/" className="flex flex-col items-center gap-3">
          <Image
            src="/images/artwork/logo.png"
            alt="Robin & Wren Studio"
            width={64}
            height={59}
            className="object-contain opacity-80"
          />
          <span className="font-heading text-2xl font-light tracking-wide text-gray-700">
            Robin &amp; Wren Studio
          </span>
        </Link>

<p className="font-heading text-lg italic text-navy/50">
          Painted in Vermont. Made to be treasured.
        </p>

        <a
          href="https://www.instagram.com/robinandwrenstudio"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-xs tracking-widest uppercase text-navy/40 hover:text-navy/70 transition-colors"
        >
          @robinandwrenstudio
        </a>

        <p className="font-body text-xs text-navy/40 tracking-wide">
          © 2026 Robin &amp; Wren Studio / Kathy Chandler
        </p>
      </div>
    </footer>
  );
}
