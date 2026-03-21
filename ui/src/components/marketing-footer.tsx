import Link from "next/link";

export function MarketingFooter() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="font-bold text-xl tracking-tight mb-3">
              <span className="text-cyan-400">M</span>EOK
            </div>
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
                { href: "/product", label: "Overview" },
                { href: "/pricing", label: "Pricing" },
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
                { href: "/blog", label: "Blog" },
                { href: "/maternal-covenant", label: "Maternal Covenant" },
                { href: "/faq", label: "FAQ" },
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

          {/* Legal & Social */}
          <div>
            <div className="text-xs font-semibold text-white/20 uppercase tracking-widest mb-4">
              Legal
            </div>
            <ul className="space-y-2.5 mb-6">
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
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
            <div className="text-xs font-semibold text-white/20 uppercase tracking-widest mb-4">
              Social
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://x.com/meokai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/30 hover:text-white transition-colors"
                >
                  X / Twitter
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
