"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = { href: string; label: string };

export default function ShopSubNav({ links }: { links: NavLink[] }) {
  const pathname = usePathname();

  return (
    <nav className="sticky top-[89px] z-40 bg-white/95 backdrop-blur-sm border-b border-paper-deeper px-6">
      <div className="max-w-5xl mx-auto flex items-center gap-8 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`relative font-body text-xs tracking-widest uppercase whitespace-nowrap transition-colors py-4 ${
              pathname === href ? "text-navy" : "text-navy/50 hover:text-navy"
            }`}
          >
            {label}
            {pathname === href && (
              <span className="absolute bottom-[14px] left-0 right-0 h-px bg-navy" />
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
}
