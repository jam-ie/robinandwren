"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = { href: string; label: string };

export default function ShopSubNav({ links }: { links: NavLink[] }) {
  const pathname = usePathname();

  return (
    <nav className="sticky top-[73px] z-40 bg-white/95 backdrop-blur-sm border-b border-paper-deeper px-6">
      <div className="max-w-5xl mx-auto flex items-center gap-8 overflow-x-auto py-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`font-body text-xs tracking-widest uppercase whitespace-nowrap transition-colors ${
              pathname === href
                ? "text-navy border-b border-navy pb-0.5"
                : "text-navy/50 hover:text-navy"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
