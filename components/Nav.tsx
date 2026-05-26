"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-cream-deeper">
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 group"
        >
          <Image
            src="/images/artwork/logo.png"
            alt="Robin & Wren Children's Art"
            width={52}
            height={48}
            className="object-contain"
            priority
          />
          <span className="font-heading text-2xl font-light tracking-wide text-gray-700 group-hover:text-blue transition-colors">
            Robin &amp; Wren Children&apos;s Art
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`font-body text-sm tracking-widest uppercase transition-colors ${
                  pathname === href
                    ? "text-blue border-b border-blue pb-0.5"
                    : "text-brown/70 hover:text-brown"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-brown transition-all ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-brown transition-all ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-brown transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-cream-deeper px-6 py-6">
          <ul className="flex flex-col gap-6">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`font-body text-sm tracking-widest uppercase ${
                    pathname === href ? "text-blue" : "text-brown/70"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
