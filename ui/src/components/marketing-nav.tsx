"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface MarketingNavProps {
  activePage?: string;
}

export function MarketingNav({ activePage }: MarketingNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/product", label: "Product" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
    { href: "/compare", label: "Compare" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-lg tracking-tight">
          <span className="text-cyan-400">M</span>EOK
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-6 text-sm text-white/40">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`hover:text-white transition-colors ${
                activePage === l.label.toLowerCase() ? "text-cyan-400" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm text-white/50 hover:text-white transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/register"
            className="text-sm px-4 py-1.5 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-colors"
          >
            Hatch free
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden text-white/50 hover:text-white transition-colors"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="sm:hidden border-t border-white/5 bg-[#0a0a0f] px-6 py-4 space-y-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`block text-sm py-1 transition-colors ${
                activePage === l.label.toLowerCase()
                  ? "text-cyan-400"
                  : "text-white/50 hover:text-white"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/5 flex flex-col gap-2">
            <Link
              href="/login"
              className="block text-sm text-white/50 hover:text-white transition-colors py-1"
              onClick={() => setMobileOpen(false)}
            >
              Sign in
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-colors text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Hatch free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
