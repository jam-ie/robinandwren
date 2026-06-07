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
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col items-center gap-0.5">
        {/* Nest + tagline — desktop only */}
        <div className="hidden md:flex flex-col items-center gap-1">
          <Image
            src="/images/artwork/logo.png"
            alt="Robin & Wren Studio"
            width={48}
            height={44}
            className="object-contain opacity-80"
          />
          <p className="font-heading text-sm italic text-navy/50 leading-none">
            Painted in Vermont. Made to be treasured.
          </p>
        </div>

        {/* Bottom row — title | copyright | instagram (desktop) / copyright | nest | instagram (mobile) */}
        <div className="w-full flex items-center justify-between">
          <Link href="/" className="hidden md:block font-heading text-xl font-light tracking-wide text-gray-700 hover:text-blue transition-colors">
            Robin &amp; Wren Studio
          </Link>
          <p className="font-body text-[10px] md:text-xs text-navy/40 tracking-wide">
            © 2026 Robin &amp; Wren Studio
          </p>
          <Image
            src="/images/artwork/logo.png"
            alt=""
            width={32}
            height={29}
            className="object-contain opacity-60 md:hidden"
          />
          <a
            href="https://www.instagram.com/robinandwrenstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[10px] md:text-xs tracking-widest uppercase text-navy/40 hover:text-navy/70 transition-colors"
          >
            @robinandwrenstudio
          </a>
        </div>
      </div>
    </footer>
  );
}
