"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Market", href: "#market" },
  { label: "Lending", href: "#lending" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Team", href: "#team" },
  { label: "Partners", href: "#partners" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--color-rule)] bg-[rgba(8,9,10,0.85)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 md:px-14">
        <a href="#top" className="flex items-center gap-2.5">
          <Image src="/logo.svg" alt="Vesta Step" width={22} height={22} />
          <span className="text-sm font-medium tracking-[-0.005em] text-white">
            Vesta Step
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-[0.04em] text-[var(--color-fg-55)] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden bg-white px-4 py-2 font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--color-bg)] transition-colors hover:bg-white/90 md:inline-block"
        >
          Get in touch →
        </a>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="text-[var(--color-fg-55)] md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[var(--color-rule)] px-6 pb-4 md:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 font-mono text-[11px] uppercase tracking-[0.04em] text-[var(--color-fg-55)] transition-colors hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="mt-2 inline-block bg-white px-4 py-2 font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--color-bg)]"
                onClick={() => setMobileOpen(false)}
              >
                Get in touch →
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
