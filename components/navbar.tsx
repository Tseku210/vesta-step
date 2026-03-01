"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Who are we", href: "#who-are-we" },
  { label: "Partners", href: "#partners" },
  { label: "Advisors", href: "#advisors" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#08090A]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Vesta Step" width={28} height={28} />
          <span className="text-lg font-semibold text-white">Vesta Step</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="text-zinc-400 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/5 px-6 pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 text-sm text-zinc-400 transition-colors hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
