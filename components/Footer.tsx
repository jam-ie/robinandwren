import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-cream-deeper mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col items-center gap-3">
        <Link href="/" className="flex flex-col items-center gap-3">
          <Image
            src="/images/artwork/logo.png"
            alt="Robin & Wren Children's Art"
            width={64}
            height={59}
            className="object-contain opacity-80"
          />
          <span className="font-heading text-2xl font-light tracking-wide text-gray-700">
            Robin &amp; Wren Children&apos;s Art
          </span>
        </Link>

<p className="font-heading text-lg italic text-brown/50">
          Painted in Vermont. Made to be loved forever.
        </p>

        <p className="font-body text-xs text-brown/40 tracking-wide">
          © 2026 Robin &amp; Wren Children&apos;s Art / Kathy Chandler
        </p>
      </div>
    </footer>
  );
}
