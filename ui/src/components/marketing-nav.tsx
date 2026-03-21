"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

interface MarketingNavProps {
  activePage?: string;
}

const PRODUCT_LINKS = [
  {
    href: "/ralph",
    icon: "⚡",
    name: "Work OS / Ralph",
    desc: "Autonomous AI agent. Works while you sleep.",
  },
  {
    href: "/product/characters",
    icon: "🥚",
    name: "Characters",
    desc: "7 archetypes. Hatch your AI companion.",
  },
  {
    href: "/product/family-guardian",
    icon: "🛡️",
    name: "Family Guardian",
    desc: "Safe AI for every age.",
  },
  {
    href: "/product/sovereign-os",
    icon: "🔐",
    name: "Sovereign Data",
    desc: "Your data. Your rules. Always encrypted.",
  },
  {
    href: "/how-it-works",
    icon: "🗺️",
    name: "How it works",
    desc: "Full walkthrough of MEOK.",
  },
];

export function MarketingNav({ activePage }: MarketingNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const topLinks = [
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
    { href: "/labs", label: "Labs" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-lg tracking-tight flex-shrink-0">
          <span className="text-cyan-400">M</span>EOK
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-6 text-sm text-white/40">
          {/* Product dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className={`flex items-center gap-1 hover:text-white transition-colors ${
                productOpen ? "text-white" : ""
              }`}
              onMouseEnter={() => setProductOpen(true)}
              onClick={() => setProductOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={productOpen}
            >
              Product
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  productOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Mega dropdown panel */}
            {productOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[480px] bg-[#0d0d14] border border-white/10 rounded-2xl shadow-2xl p-4"
                onMouseLeave={() => setProductOpen(false)}
              >
                <div className="grid grid-cols-2 gap-2">
                  {PRODUCT_LINKS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.05] transition-colors group"
                      onClick={() => setProductOpen(false)}
                    >
                      <span className="text-xl leading-none mt-0.5 flex-shrink-0">{item.icon}</span>
                      <div>
                        <div className="font-semibold text-sm text-white/80 group-hover:text-white transition-colors">
                          {item.name}
                        </div>
                        <div className="text-xs text-white/30 mt-0.5 leading-snug">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {topLinks.map((l) => (
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
        <div className="sm:hidden border-t border-white/5 bg-[#0a0a0f] px-6 py-4 space-y-1">
          {/* Product section */}
          <div className="pb-2 mb-1 border-b border-white/5">
            <div className="text-xs font-semibold text-white/20 uppercase tracking-widest py-2">
              Product
            </div>
            {PRODUCT_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 text-sm py-2 text-white/50 hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <span>{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>

          {topLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`block text-sm py-2 transition-colors ${
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
