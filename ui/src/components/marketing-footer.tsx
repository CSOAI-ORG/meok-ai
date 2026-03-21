import Link from "next/link";

export function MarketingFooter() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-bold text-xl tracking-tight mb-2">
              <span className="text-cyan-400">M</span>EOK
            </div>
            <p className="text-xs text-white/40 mb-3 font-medium">The new OS for your life.</p>
            <p className="text-sm text-white/30 max-w-xs leading-relaxed">
              The first personal sovereign AI OS. Care-aligned, Byzantine
              fault-tolerant, and genuinely yours.
            </p>
          </div>

          {/* Product */}
          <div>
            <div className="text-xs font-semibold text-white/20 uppercase tracking-widest mb-4">
              Product
            </div>
            <ul className="space-y-2.5">
              {[
                { href: "/ralph", label: "Ralph Mode" },
                { href: "/product/characters", label: "Characters" },
                { href: "/product/family-guardian", label: "Family Guardian" },
                { href: "/pricing", label: "Pricing" },
                { href: "/how-it-works", label: "How it works" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/30 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div>
            <div className="text-xs font-semibold text-white/20 uppercase tracking-widest mb-4">
              Learn
            </div>
            <ul className="space-y-2.5">
              {[
                { href: "/blog", label: "Blog" },
                { href: "/maternal-covenant", label: "Maternal Covenant" },
                { href: "/faq", label: "FAQ" },
                { href: "/compare", label: "Compare" },
                { href: "/labs", label: "Labs" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/30 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs font-semibold text-white/20 uppercase tracking-widest mb-4">
              Company
            </div>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About" },
                { href: "/privacy", label: "Privacy" },
                { href: "/terms", label: "Terms" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/30 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <div className="text-xs font-semibold text-white/20 uppercase tracking-widest mb-4">
              Follow Us
            </div>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.instagram.com/meok_ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-cyan-400 transition-colors"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  @meok_ai
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@meok_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z" />
                  </svg>
                  @meok_ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/20">
          <span>© 2026 MEOK AI LTD · Registered in England and Wales</span>
          <span>Built different. Care first.</span>
        </div>
      </div>
    </footer>
  );
}
