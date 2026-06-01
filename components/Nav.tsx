"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const linksBeforeShop = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

const linksAfterShop = [
  { href: "/shop-alt", label: "Shop 2" },
  { href: "/contact", label: "Contact" },
];

const shopLinks = [
  { href: "/shop/prints", label: "Prints" },
  { href: "/shop/cards", label: "Cards" },
  { href: "/shop/small-goods", label: "Small Goods" },
  { href: "/shop/fabric", label: "Fabric" },
  { href: "/shop/originals", label: "Originals" },
  { href: "/book", label: "The Book" },
];

const allMainLinks = [...linksBeforeShop, ...linksAfterShop];

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopDesktopOpen, setShopDesktopOpen] = useState(false);
  const [shopMobileOpen, setShopMobileOpen] = useState(false);

  const isShopActive = (pathname.startsWith("/shop") && !pathname.startsWith("/shop-alt")) || pathname === "/book";

  const navLinkClass = (href: string) =>
    `font-body text-sm tracking-widest uppercase transition-colors ${
      pathname === href
        ? "text-blue border-b border-blue pb-0.5"
        : "text-navy/70 hover:text-navy"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-paper-deeper">
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/artwork/logo.png"
            alt="Robin & Wren Studio"
            width={52}
            height={48}
            className="object-contain"
            priority
          />
          <span className="font-heading text-2xl font-light tracking-wide text-gray-700 group-hover:text-blue transition-colors">
            Robin &amp; Wren Studio
          </span>
        </Link>

        {/* Desktop links — Home, About, Shop ↓, Contact */}
        <ul className="hidden md:flex items-center gap-10">
          {linksBeforeShop.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={navLinkClass(href)}>{label}</Link>
            </li>
          ))}

          {/* Shop dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setShopDesktopOpen(true)}
            onMouseLeave={() => setShopDesktopOpen(false)}
          >
            <Link
              href="/shop"
              className={`font-body text-sm tracking-widest uppercase transition-colors flex items-center gap-1 ${
                isShopActive ? "text-blue border-b border-blue pb-0.5" : "text-navy/70 hover:text-navy"
              }`}
            >
              Shop 1
            </Link>

            {shopDesktopOpen && (
              <div className="absolute top-full left-0 pt-3 z-50 min-w-[160px]">
                <ul className="bg-white border border-paper-deeper shadow-md py-2">
                  {shopLinks.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className={`block px-5 py-2 font-body text-xs tracking-widest uppercase transition-colors ${
                          pathname === href ? "text-blue bg-paper" : "text-navy/70 hover:text-navy hover:bg-paper"
                        }`}
                        onClick={() => setShopDesktopOpen(false)}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>

          {linksAfterShop.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={navLinkClass(href)}>{label}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-navy transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-navy transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-navy transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu — Home, About, Shop ↓, Contact */}
      {mobileOpen && (
        <div className="md:hidden bg-paper border-t border-paper-deeper px-6 py-6">
          <ul className="flex flex-col gap-6">
            {linksBeforeShop.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-body text-sm tracking-widest uppercase ${pathname === href ? "text-blue" : "text-navy/70"}`}
                >
                  {label}
                </Link>
              </li>
            ))}

            {/* Shop sub-menu */}
            <li>
              <button
                className={`font-body text-sm tracking-widest uppercase flex items-center gap-2 ${isShopActive ? "text-blue" : "text-navy/70"}`}
                onClick={() => setShopMobileOpen(!shopMobileOpen)}
              >
                Shop 1
              </button>
              {shopMobileOpen && (
                <ul className="mt-4 pl-4 flex flex-col gap-4 border-l border-paper-deeper">
                  {shopLinks.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={() => setMobileOpen(false)}
                        className={`font-body text-sm tracking-widest uppercase ${pathname === href ? "text-blue" : "text-navy/60"}`}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {linksAfterShop.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-body text-sm tracking-widest uppercase ${pathname === href ? "text-blue" : "text-navy/70"}`}
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
