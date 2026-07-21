"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";

const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090909]">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-white"
          >
            Siddhant Rajan
          </Link>

          {/* Desktop menu */}
          <div className="hidden items-center gap-7 md:flex">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-neutral-400 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-[100] flex h-12 w-12 cursor-pointer items-center justify-center border border-white/20 text-white md:hidden"
            aria-label="Open menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="relative z-[99] border-t border-white/10 bg-[#090909] py-4 md:hidden">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/10 py-4 text-lg text-neutral-300 last:border-0"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </Container>
    </header>
  );
}