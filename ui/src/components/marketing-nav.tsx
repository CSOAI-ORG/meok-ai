"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  BookOpen,
  FlaskConical,
  Map,
  Terminal,
  HelpCircle,
  Github,
  Hourglass,
  ChevronDown,
  Users,
  Newspaper,
  GitCommit,
  Lightbulb,
} from "lucide-react";

interface MarketingNavProps {
  activePage?: string;
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

interface SubPage {
  href: string;
  icon: string;
  label: string;
  desc: string;
}

interface Product {
  href: string;
  icon: string;
  name: string;
  color: string;
  sub: SubPage[];
}

const PRODUCTS: Product[] = [
  {
    href: "/personal",
    icon: "🥚",
    name: "Personal OS",
    color: "#c9a84c",
    sub: [
      { href: "/what-is-meok", icon: "❓", label: "What is MEOK?", desc: "Sovereign AI OS explained — not a chatbot" },
      { href: "/memory", icon: "🧠", label: "Memory", desc: "Lifelong context that remembers you" },
      { href: "/personal/care", icon: "💛", label: "Care Dimensions", desc: "Emotional awareness & wellbeing layers" },
      { href: "/personal/morning-brief", icon: "☀️", label: "Morning Brief", desc: "Start every day with clarity" },
      { href: "/characters", icon: "✨", label: "Characters", desc: "Your cast of AI companions" },
      { href: "/birth", icon: "🎂", label: "Birth Ceremony", desc: "Hatch your sovereign AI companion" },
      { href: "/os/sovereign", icon: "🔐", label: "Sovereign AI", desc: "Your data, your keys — zero training, always" },
      { href: "/os/any-llm", icon: "🔗", label: "Any LLM", desc: "GPT, Claude, Gemini — your memory travels with you" },
    ],
  },
  {
    href: "/work",
    icon: "⚡",
    name: "Work OS",
    color: "#3B82F6",
    sub: [
      { href: "/work", icon: "⚡", label: "Work OS", desc: "Your AI works while you sleep" },
      { href: "/work/orion", icon: "🎯", label: "Orion — The Hunter", desc: "Overnight research & intelligence briefs" },
      { href: "/work/riri", icon: "🔨", label: "Riri — The Builder", desc: "Builds from your spec while you're away" },
      { href: "/work/hourman", icon: "📅", label: "Hourman — The Planner", desc: "Daily sprint planning before you wake" },
      { href: "/ralph", icon: "🤖", label: "Ralph Mode", desc: "Executive AI agent — Elite tier" },
      { href: "/os/any-llm", icon: "🔗", label: "Any LLM", desc: "Plug in GPT, Gemini, Claude & more" },
      { href: "/os/sovereign", icon: "🔐", label: "Sovereign Data", desc: "Encrypted. Yours. Never trained on." },
    ],
  },
  {
    href: "/family",
    icon: "🛡️",
    name: "Family OS",
    color: "#7BC47F",
    sub: [
      { href: "/family", icon: "🏠", label: "Overview", desc: "Protect & connect your whole family" },
      { href: "/guardian", icon: "👁️", label: "Guardian 24/7", desc: "Round-the-clock family safety layer" },
      { href: "/guardian/elderly", icon: "🤝", label: "Elder Care", desc: "Companionship & health monitoring" },
      { href: "/guardian/children", icon: "🧒", label: "Child Safety", desc: "Smart filters & parental insight" },
      { href: "/guardian/scam-stop", icon: "🛡️", label: "Scam Stop", desc: "Protect your family from fraud and manipulation" },
      { href: "/guardian/personal", icon: "🔒", label: "Personal Guardian", desc: "Protect yourself from contracts and manipulation" },
      { href: "/council", icon: "🏛️", label: "Character Council", desc: "Family-wide AI governance" },
    ],
  },
  {
    href: "/team",
    icon: "👥",
    name: "Team OS",
    color: "#A78BFA",
    sub: [
      { href: "/team", icon: "👥", label: "Overview", desc: "AI intelligence for your whole team" },
      { href: "/smb", icon: "🏢", label: "SMB Layer", desc: "Small-business power tools" },
      { href: "/team", icon: "📡", label: "Team Intelligence", desc: "Shared context & collective memory" },
    ],
  },
  {
    href: "/characters",
    icon: "✨",
    name: "Characters",
    color: "#F472B6",
    sub: [
      { href: "/characters", icon: "🗂️", label: "All Archetypes", desc: "Browse all 8 archetypes & 27 characters" },
      { href: "/characters/archetypes", icon: "✨", label: "Character Gallery", desc: "Every companion, every archetype" },
      { href: "/birth", icon: "🥚", label: "Birth Ceremony", desc: "Hatch your sovereign companion" },
      { href: "/characters#seeker", icon: "🕊️", label: "Spiritual — The Seeker", desc: "Ananda · Gabriel · Shanti" },
    ],
  },
  {
    href: "/gaming",
    icon: "🎮",
    name: "Gaming",
    color: "#FB923C",
    sub: [
      { href: "/gaming", icon: "🎮", label: "Overview", desc: "AI-powered gaming companion" },
      { href: "/gaming/live-copilot", icon: "⚡", label: "Live Co-Pilot", desc: "Real-time in-game guidance" },
      { href: "/gaming/post-game", icon: "📊", label: "Post-Game Analyst", desc: "Break down every session" },
      { href: "/gaming/strategy", icon: "♟️", label: "Strategy Builder", desc: "Plan your meta & loadouts" },
      { href: "/gaming/platforms", icon: "🔌", label: "All Platforms", desc: "PC, console & mobile support" },
      { href: "/gaming/companion", icon: "🤝", label: "Play With Your AI", desc: "Your companion that knows your playstyle" },
      { href: "/gaming/predator-stop", icon: "🚫", label: "Predator Stop", desc: "Keep children safe in online gaming" },
    ],
  },
];

interface ResourceLink {
  href: string;
  label: string;
  desc: string;
  icon: React.ReactNode;
}

const RESOURCE_LINKS: ResourceLink[] = [
  { href: "/how-it-works", label: "How it works", desc: "The MEOK OS explained step by step", icon: <Lightbulb className="w-4 h-4" /> },
  { href: "/characters", label: "Characters", desc: "Your cast of AI companions", icon: <Users className="w-4 h-4" /> },
  { href: "/blog", label: "Blog", desc: "Insights, launches & stories", icon: <BookOpen className="w-4 h-4" /> },
  { href: "/changelog", label: "Changelog", desc: "What's new in MEOK", icon: <GitCommit className="w-4 h-4" /> },
  { href: "/press", label: "Press", desc: "Media kit & coverage", icon: <Newspaper className="w-4 h-4" /> },
  { href: "/labs", label: "Labs", desc: "Experiments from our research team", icon: <FlaskConical className="w-4 h-4" /> },
  { href: "/roadmap", label: "Roadmap", desc: "What we're building next", icon: <Map className="w-4 h-4" /> },
  { href: "/terminal", label: "Terminal", desc: "Developer & power-user tools", icon: <Terminal className="w-4 h-4" /> },
  { href: "/faq", label: "FAQ", desc: "Common questions answered", icon: <HelpCircle className="w-4 h-4" /> },
  { href: "/open-source", label: "Open Source", desc: "Our public repositories", icon: <Github className="w-4 h-4" /> },
  { href: "/waitlist", label: "Waitlist", desc: "Get early access to MEOK", icon: <Hourglass className="w-4 h-4" /> },
];

const TOP_LINKS = [
  { href: "/os", label: "The OS" },
  { href: "/os/sovereign", label: "Sovereign AI" },
  { href: "/problems", label: "Why MEOK" },
  { href: "/compare", label: "Compare" },
  { href: "/pricing", label: "Pricing" },
  { href: "/download", label: "Desktop OS" },
  { href: "/about", label: "About" },
  { href: "/labs", label: "Research" },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export function MarketingNav({ activePage }: MarketingNavProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const subBarRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scheduleClose() {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => setHoveredProduct(null), 80);
  }
  function cancelClose() {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
  }

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  // Close resources dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const activeProduct = PRODUCTS.find(
    (p) => pathname === p.href || pathname.startsWith(p.href + "/")
  );

  const hovered = hoveredProduct ? PRODUCTS.find((p) => p.href === hoveredProduct) : null;

  return (
    <>
      {/* ─── TOP BAR ─── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-shadow"
        style={{
          background: "rgba(250,249,246,0.90)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid #e8e4dc",
          boxShadow: scrolled ? "0 1px 12px rgba(26,26,46,0.07)" : "none",
        }}
      >
        <div
          className="max-w-7xl mx-auto px-6 flex items-center justify-between"
          style={{ height: "52px" }}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="MEOK.AI — home"
            className="font-black text-base tracking-tight text-[#111111] flex-shrink-0"
          >
            MEOK<span className="text-[#c9a84c]">.AI</span>
          </Link>

          {/* Desktop top links + Resources dropdown */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7 text-sm text-[#4a4a3a]">
            {TOP_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`hover:text-[#111111] transition-colors font-medium ${
                  pathname === l.href || activePage === l.label.toLowerCase()
                    ? "text-[#111111] font-semibold"
                    : ""
                } ${l.label === "Sovereign AI" ? "text-[#c9a84c] font-semibold hover:text-[#a8892e]" : ""}`}
              >
                {l.label === "Sovereign AI" ? (
                  <span className="flex items-center gap-1">
                    <span className="text-xs">🔐</span>
                    {l.label}
                  </span>
                ) : l.label === "Desktop OS" ? (
                  <span className="flex items-center gap-1.5">
                    {l.label}
                    <span
                      className="text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none"
                      style={{ background: "#e8e4dc", color: "#6b6b6b" }}
                    >
                      Summer 2026
                    </span>
                  </span>
                ) : l.label}
              </Link>
            ))}

            {/* Resources dropdown trigger */}
            <div ref={resourcesRef} className="relative">
              <button
                className="flex items-center gap-1 font-medium hover:text-[#111111] transition-colors"
                onClick={() => setResourcesOpen((v) => !v)}
                onMouseEnter={() => setResourcesOpen(true)}
                aria-haspopup="true"
                aria-expanded={resourcesOpen}
                aria-controls="resources-dropdown"
              >
                Resources
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>

              {/* Resources panel */}
              <nav
                id="resources-dropdown"
                role="navigation"
                aria-label="Resources"
                className="absolute top-full right-0 mt-2 w-72 rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(26,26,46,0.97)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  boxShadow: "0 16px 48px rgba(0,0,0,0.35)",
                  opacity: resourcesOpen ? 1 : 0,
                  transform: resourcesOpen ? "translateY(0) scale(1)" : "translateY(-8px) scale(0.97)",
                  pointerEvents: resourcesOpen ? "auto" : "none",
                  transition: "opacity 0.18s ease, transform 0.18s ease",
                }}
                onMouseLeave={() => setResourcesOpen(false)}
              >
                <div className="p-2">
                  {RESOURCE_LINKS.map((r) => (
                    <Link
                      key={r.label}
                      href={r.href}
                      className="flex items-start gap-3 px-3 py-2.5 rounded-xl transition-colors group"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                      onClick={() => setResourcesOpen(false)}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.07)";
                        (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,1)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                        (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.75)";
                      }}
                    >
                      <span className="mt-0.5 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
                        {r.icon}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold leading-tight">{r.label}</span>
                        <span className="block text-xs mt-0.5 opacity-60">{r.desc}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm text-[#4a4a3a] hover:text-[#111111] transition-colors font-medium"
            >
              Sign in
            </Link>
            <Link
              href="/birth"
              className="text-sm px-5 py-2 rounded-full font-bold transition-colors"
              style={{ background: "#c9a84c", color: "#111111" }}
            >
              Begin Ceremony 🥚
            </Link>
          </div>

          {/* Mobile: sign-in + hatch + hamburger */}
          <div className="md:hidden flex items-center gap-2 flex-shrink-0">
            <Link
              href="/login"
              className="text-xs text-[#4a4a3a] hover:text-[#111111] transition-colors font-medium px-2 py-1"
            >
              Sign in
            </Link>
            <Link
              href="/birth"
              className="text-xs px-3 py-1.5 rounded-full font-bold whitespace-nowrap transition-colors"
              style={{ background: "#c9a84c", color: "#111111" }}
            >
              Begin Ceremony 🥚
            </Link>
            <button
              className="text-[#4a4a3a] hover:text-[#111111] transition-colors ml-1"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ─── PRODUCT SUB-BAR ─── */}
        <div
          ref={subBarRef}
          className="hidden md:block border-t border-[#e8e4dc]"
          style={{
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
          onMouseLeave={scheduleClose}
        >
          {/* Product pill row */}
          <div
            className="max-w-7xl mx-auto px-6 flex items-stretch overflow-x-auto scrollbar-none"
            style={{ height: "42px" }}
          >
            {PRODUCTS.map((product) => {
              const isActive =
                pathname === product.href || pathname.startsWith(product.href + "/");
              const isHovered = hoveredProduct === product.href;

              return (
                <div
                  key={product.href}
                  className="relative flex items-stretch"
                  onMouseEnter={() => { cancelClose(); setHoveredProduct(product.href); }}
                >
                  <Link
                    href={product.href}
                    className="flex items-center gap-1.5 px-4 text-sm font-semibold transition-colors whitespace-nowrap"
                    style={{
                      color: isActive || isHovered ? product.color : "#6b6b6b",
                      borderBottom: isActive
                        ? `2px solid ${product.color}`
                        : isHovered
                        ? `2px solid ${product.color}60`
                        : "2px solid transparent",
                    }}
                  >
                    <span className="text-base leading-none">{product.icon}</span>
                    <span>{product.name}</span>
                  </Link>
                </div>
              );
            })}

            <div className="flex-1" />
            <Link
              href="/os"
              className="flex items-center gap-1.5 px-4 text-xs font-semibold text-[#9a9a8a] hover:text-[#1a1a2e] transition-colors whitespace-nowrap border-l border-[#e8e4dc]"
            >
              View full OS →
            </Link>
          </div>

          {/* ─── MEGA DROPDOWN PANEL ─── */}
          <nav
            role="navigation"
            aria-label={hovered ? `${hovered.name} sub-navigation` : "Product sub-navigation"}
            aria-hidden={!hovered}
            style={{
              position: "fixed",
              top: "94px",
              left: 0,
              right: 0,
              zIndex: 49,
              display: "flex",
              justifyContent: "center",
              padding: "0 24px",
              pointerEvents: hovered ? "auto" : "none",
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0)" : "translateY(-6px)",
              transition: "opacity 0.18s ease, transform 0.18s ease",
            }}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <div
              className="w-full max-w-5xl rounded-2xl overflow-hidden"
              style={{
                background: "rgba(20,20,40,0.97)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 24px 64px rgba(0,0,0,0.45), 0 2px 0 rgba(255,255,255,0.04) inset",
              }}
            >
              {hovered && (
                <>
                  {/* Panel header */}
                  <div
                    className="flex items-center gap-2.5 px-6 py-3.5 border-b"
                    style={{ borderColor: "rgba(255,255,255,0.07)" }}
                  >
                    <span className="text-xl leading-none">{hovered.icon}</span>
                    <span
                      className="text-sm font-bold tracking-wide"
                      style={{ color: hovered.color }}
                    >
                      {hovered.name}
                    </span>
                    <span className="text-xs ml-1" style={{ color: "rgba(255,255,255,0.35)" }}>
                      — select a feature
                    </span>
                  </div>

                  {/* Sub-page cards grid */}
                  <div
                    className="grid gap-1.5 p-4"
                    style={{
                      gridTemplateColumns: `repeat(${Math.min(hovered.sub.length, 4)}, minmax(0, 1fr))`,
                    }}
                  >
                    {hovered.sub.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="flex flex-col gap-1.5 rounded-xl p-3.5 transition-all duration-150"
                        style={{
                          background:
                            pathname === s.href
                              ? `${hovered.color}22`
                              : "rgba(255,255,255,0.03)",
                          border: `1px solid ${
                            pathname === s.href
                              ? hovered.color + "55"
                              : "rgba(255,255,255,0.05)"
                          }`,
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLAnchorElement;
                          if (pathname !== s.href) {
                            el.style.background = `${hovered.color}18`;
                            el.style.border = `1px solid ${hovered.color}44`;
                          }
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLAnchorElement;
                          if (pathname !== s.href) {
                            el.style.background = "rgba(255,255,255,0.03)";
                            el.style.border = "1px solid rgba(255,255,255,0.05)";
                          }
                        }}
                        onClick={() => setHoveredProduct(null)}
                      >
                        <span className="text-xl leading-none">{s.icon}</span>
                        <span
                          className="text-sm font-semibold leading-tight"
                          style={{
                            color:
                              pathname === s.href
                                ? hovered.color
                                : "rgba(255,255,255,0.88)",
                          }}
                        >
                          {s.label}
                        </span>
                        <span
                          className="text-xs leading-snug"
                          style={{ color: "rgba(255,255,255,0.42)" }}
                        >
                          {s.desc}
                        </span>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </nav>
        </div>

        {/* ─── MOBILE MENU ─── */}
        {mobileOpen && (
          <div className="md:hidden border-t border-[#e8e4dc] bg-[#FAF9F6] px-6 py-4 max-h-[85vh] overflow-y-auto">
            {/* Products */}
            <div className="mb-4">
              <p className="text-[10px] font-bold tracking-widest uppercase text-[#9a9a8a] mb-2">
                Products
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {PRODUCTS.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold transition-colors"
                    style={{
                      background:
                        pathname === p.href || pathname.startsWith(p.href + "/")
                          ? `${p.color}15`
                          : "#f5f0e8",
                      color:
                        pathname === p.href || pathname.startsWith(p.href + "/")
                          ? p.color
                          : "#4a4a3a",
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="text-base">{p.icon}</span>
                    <span className="text-xs">{p.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Top links */}
            <div className="border-t border-[#e8e4dc] pt-3 mb-3 space-y-0.5">
              <p className="text-[10px] font-bold tracking-widest uppercase text-[#9a9a8a] mb-2">
                Navigate
              </p>
              {TOP_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="flex items-center gap-1.5 text-sm py-2 text-[#4a4a3a] hover:text-[#111111] transition-colors font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                  {l.label === "Desktop OS" && (
                    <span
                      className="text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none"
                      style={{ background: "#e8e4dc", color: "#6b6b6b" }}
                    >
                      Summer 2026
                    </span>
                  )}
                </Link>
              ))}
            </div>

            {/* Explore section */}
            <div className="border-t border-[#e8e4dc] pt-3 mb-3 space-y-0.5">
              <p className="text-[10px] font-bold tracking-widest uppercase text-[#9a9a8a] mb-2">
                Explore
              </p>
              {RESOURCE_LINKS.map((r) => (
                <Link
                  key={r.label}
                  href={r.href}
                  className="flex items-center gap-2.5 text-sm py-2 text-[#4a4a3a] hover:text-[#111111] transition-colors font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="text-[#9a9a8a]">{r.icon}</span>
                  {r.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="border-t border-[#e8e4dc] pt-3">
              <Link
                href="/birth"
                className="block text-sm text-center py-3 rounded-full font-bold transition-colors"
                style={{ background: "#c9a84c", color: "#111111" }}
                onClick={() => setMobileOpen(false)}
              >
                Begin Ceremony 🥚
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Spacer — dual-bar: ~94px desktop, ~52px mobile */}
      <div className="h-[52px] md:h-[94px]" aria-hidden />
    </>
  );
}
