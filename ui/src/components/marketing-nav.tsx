"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

interface MarketingNavProps {
  activePage?: string;
}

// ─── BRAND TOKENS ─────────────────────────────────────────────────────────────

const DEEP = "#0d0c18";
const GOLD = "#c9a84c";

// ─── NAV DATA ─────────────────────────────────────────────────────────────────

interface NavItem {
  href: string;
  icon: string;
  label: string;
  desc: string;
}

interface NavPillar {
  key: string;
  label: string;
  href: string;
  accentColor: string;
  items: NavItem[];
}

const NAV_PILLARS: NavPillar[] = [
  {
    key: "universe",
    label: "Universe",
    href: "/universe",
    accentColor: GOLD,
    items: [
      { href: "/universe", icon: "🌍", label: "MEOK Universe", desc: "The sovereign AI world vision" },
      { href: "/dome", icon: "🌐", label: "MEOK DOME", desc: "Persistent world simulation layers" },
      { href: "/pioneer", icon: "🚀", label: "Pioneer Program", desc: "Become a founding citizen" },
      { href: "/go", icon: "🗺️", label: "MEOK GO", desc: "Real-world character overlay" },
      { href: "/council", icon: "🏛️", label: "MEOK Council", desc: "Hybrid AI-human governance" },
      { href: "/gaming", icon: "🎮", label: "Gaming Hive", desc: "AI-powered gaming infrastructure" },
    ],
  },
  {
    key: "os",
    label: "OS",
    href: "/os",
    accentColor: GOLD,
    items: [
      { href: "/os", icon: "🖥️", label: "Sovereign OS", desc: "The full MEOK OS overview" },
      { href: "/os/any-llm", icon: "🔗", label: "Any LLM", desc: "Multi-model routing — GPT, Claude, Gemini & more" },
      { href: "/os/consciousness", icon: "🧠", label: "Consciousness", desc: "4 modes of AI awareness" },
      { href: "/os/sovereign", icon: "🔐", label: "Sovereign Data", desc: "Encrypted memory — yours, always" },
      { href: "/birth", icon: "🚀", label: "Get Started", desc: "Activate your sovereign AI agent" },
    ],
  },
  {
    key: "characters",
    label: "Characters",
    href: "/characters",
    accentColor: "#F472B6",
    items: [
      { href: "/characters", icon: "🗂️", label: "All Characters", desc: "Browse every agent archetype" },
      { href: "/characters/aria", icon: "✨", label: "Aria", desc: "The Nurturer" },
      { href: "/characters/sage", icon: "📚", label: "Sage", desc: "The Wise Counsel" },
      { href: "/characters/marcus", icon: "⚔️", label: "Marcus", desc: "The Protector" },
      { href: "/characters/luna", icon: "🌙", label: "Luna", desc: "The Dreamer" },
      { href: "/characters/gabriel", icon: "🕊️", label: "Gabriel", desc: "The Spiritual Guide" },
      { href: "/characters/shanti", icon: "🌸", label: "Shanti", desc: "The Healer" },
      { href: "/characters/scout", icon: "🔭", label: "Scout", desc: "The Explorer" },
      { href: "/characters#compare", icon: "⚖️", label: "Compare Characters", desc: "Find your perfect match" },
    ],
  },
  {
    key: "work",
    label: "Work",
    href: "/work",
    accentColor: "#3B82F6",
    items: [
      { href: "/work", icon: "⚡", label: "Work OS", desc: "Your AI works while you sleep" },
      { href: "/work/orion", icon: "🎯", label: "Orion — The Hunter", desc: "Overnight research & intelligence briefs" },
      { href: "/work/riri", icon: "🔨", label: "Riri — The Builder", desc: "Builds from your spec while you're away" },
      { href: "/work/hourman", icon: "📅", label: "Hourman — The Planner", desc: "Daily sprint planning before you wake" },
      { href: "/ralph", icon: "🤖", label: "Ralph Mode", desc: "Executive AI agent — Elite tier" },
    ],
  },
  {
    key: "guardian",
    label: "Guardian",
    href: "/guardian",
    accentColor: "#7BC47F",
    items: [
      { href: "/guardian", icon: "👁️", label: "Guardian 24/7", desc: "Round-the-clock protection layer" },
      { href: "/guardian/children", icon: "🧒", label: "Children's Safety", desc: "Smart filters & parental insight" },
      { href: "/guardian/elderly", icon: "🤝", label: "Elder Care", desc: "Companionship & health monitoring" },
      { href: "/guardian/scam-stop", icon: "🛡️", label: "Scam Protection", desc: "Protect your family from fraud" },
      { href: "/guardian/personal", icon: "🔒", label: "Relationship Shield", desc: "Guard against manipulation & contracts" },
    ],
  },
  {
    key: "gaming",
    label: "Gaming",
    href: "/gaming",
    accentColor: "#FB923C",
    items: [
      { href: "/gaming", icon: "🎮", label: "Gaming OS", desc: "AI-powered gaming agent" },
      { href: "/gaming/strategy", icon: "♟️", label: "Genre Coaching", desc: "Master any game with AI coaching" },
      { href: "/gaming/post-game", icon: "📊", label: "Stats & Analytics", desc: "Deep post-session analysis" },
      { href: "/gaming/live-copilot", icon: "👥", label: "Community", desc: "Play with your AI, share with others" },
    ],
  },
  {
    key: "marketplace",
    label: "Marketplace",
    href: "/anthropic-registry",
    accentColor: "#A78BFA",
    items: [
      { href: "/anthropic-registry", icon: "📚", label: "Anthropic Registry", desc: "67+ MEOK MCPs in the official MCP Registry" },
      { href: "/docs", icon: "📖", label: "Developer Docs", desc: "Install + configure every MCP" },
      { href: "/mcp-stack", icon: "🧬", label: "MCP Stack", desc: "How 6 MCPs wire into 1 signed compliance event" },
      { href: "/a2a", icon: "🔗", label: "A2A Substrate", desc: "20 agent-to-agent MCPs · £999/mo" },
      { href: "/governance", icon: "⚖️", label: "Governance Substrate", desc: "13 compliance MCPs · £499/mo" },
      { href: "/cobol", icon: "🧱", label: "COBOL Substrate", desc: "Legacy → modern migration with signed parity" },
      { href: "/councilof", icon: "🏛️", label: "BFT Council Substrate", desc: "5-voter agent governance · £499/mo" },
      { href: "/marketplace", icon: "🛒", label: "Full Marketplace", desc: "Browse 255+ MCP servers" },
      { href: "https://github.com/CSOAI-ORG", icon: "⭐", label: "GitHub CSOAI-ORG", desc: "All repositories" },
    ],
  },
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function useOutsideClick(ref: React.RefObject<HTMLElement | null>, cb: () => void) {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) cb();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [ref, cb]);
}

// ─── DROPDOWN PANEL ───────────────────────────────────────────────────────────

interface DropdownPanelProps {
  pillar: NavPillar;
  open: boolean;
  pathname: string;
  onClose: () => void;
}

function DropdownPanel({ pillar, open, pathname, onClose }: DropdownPanelProps) {
  const cols = pillar.items.length <= 4 ? pillar.items.length : Math.ceil(pillar.items.length / 2);

  return (
    <div
      role="menu"
      aria-label={`${pillar.label} navigation`}
      style={{
        position: "absolute",
        top: "calc(100% + 8px)",
        left: "50%",
        transform: open
          ? "translateX(-50%) translateY(0) scale(1)"
          : "translateX(-50%) translateY(-6px) scale(0.97)",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        transition: "opacity 0.18s ease, transform 0.18s ease",
        zIndex: 60,
        minWidth: "320px",
        width: pillar.items.length > 4 ? "640px" : "340px",
        background: `${DEEP}f5`,
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        boxShadow: `0 24px 64px rgba(0,0,0,0.55), 0 2px 0 rgba(255,255,255,0.04) inset`,
        overflow: "hidden",
      }}
    >
      {/* Panel header */}
      <div
        className="flex items-center gap-2.5 px-5 py-3"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        <span className="text-sm font-bold tracking-wide" style={{ color: pillar.accentColor }}>
          {pillar.label}
        </span>
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          — select a feature
        </span>
      </div>

      {/* Grid of items */}
      <div
        className="p-3"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${Math.min(cols, 4)}, minmax(0, 1fr))`,
          gap: "6px",
        }}
      >
        {pillar.items.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              onClick={onClose}
              className="flex flex-col gap-1.5 rounded-xl p-3 transition-all duration-150"
              style={{
                background: isActive ? `${pillar.accentColor}22` : "rgba(255,255,255,0.03)",
                border: `1px solid ${isActive ? pillar.accentColor + "44" : "rgba(255,255,255,0.05)"}`,
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = `${pillar.accentColor}18`;
                  el.style.border = `1px solid ${pillar.accentColor}44`;
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "rgba(255,255,255,0.03)";
                  el.style.border = "1px solid rgba(255,255,255,0.05)";
                }
              }}
            >
              <span className="text-xl leading-none">{item.icon}</span>
              <span
                className="text-sm font-semibold leading-tight"
                style={{ color: isActive ? pillar.accentColor : "rgba(255,255,255,0.88)" }}
              >
                {item.label}
              </span>
              <span className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.4)" }}>
                {item.desc}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

// ─── MOBILE ACCORDION ─────────────────────────────────────────────────────────

interface MobileAccordionProps {
  pillar: NavPillar;
  pathname: string;
  onClose: () => void;
}

function MobileAccordion({ pillar, pathname, onClose }: MobileAccordionProps) {
  const [open, setOpen] = useState(false);
  const isActive =
    pathname === pillar.href || pathname.startsWith(pillar.href + "/");

  return (
    <div className="border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span
          className="text-base font-semibold"
          style={{ color: isActive ? pillar.accentColor : "rgba(255,255,255,0.85)" }}
        >
          {pillar.label}
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          style={{ color: "rgba(255,255,255,0.4)" }}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div className="pb-3 px-4 space-y-1">
          {pillar.items.map((item) => {
            const itemActive = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors"
                style={{
                  background: itemActive ? `${pillar.accentColor}18` : "transparent",
                  color: itemActive ? pillar.accentColor : "rgba(255,255,255,0.72)",
                }}
                onClick={onClose}
                onMouseEnter={(e) => {
                  if (!itemActive) {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.06)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!itemActive) {
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  }
                }}
              >
                <span className="text-lg leading-none flex-shrink-0">{item.icon}</span>
                <div>
                  <div className="text-sm font-semibold leading-tight">{item.label}</div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.38)" }}>
                    {item.desc}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export function MarketingNav({ activePage }: MarketingNavProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openPillar, setOpenPillar] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Refs for each pillar trigger + the whole nav
  const pillarRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const navRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on outside click
  useOutsideClick(navRef, () => setOpenPillar(null));

  // Close mobile on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenPillar(null);
  }, [pathname]);

  // Cleanup timers
  useEffect(() => () => { if (closeTimerRef.current) clearTimeout(closeTimerRef.current); }, []);

  function scheduleClose() {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setOpenPillar(null), 120);
  }
  function cancelClose() {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-shadow"
        style={{
          background: scrolled
            ? `rgba(13,12,24,0.97)`
            : `rgba(13,12,24,0.92)`,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: `1px solid rgba(255,255,255,${scrolled ? "0.08" : "0.05"})`,
          boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.45)" : "none",
        }}
      >
        <div
          ref={navRef}
          className="max-w-7xl mx-auto px-6 flex items-center justify-between"
          style={{ height: "56px" }}
        >
          {/* ─── LOGO ─── */}
          <Link
            href="/"
            aria-label="MEOK.AI — home"
            className="font-black text-base tracking-tight flex-shrink-0"
            style={{ color: "#ffffff" }}
          >
            MEOK<span style={{ color: GOLD }}>.AI</span>
          </Link>

          {/* ─── DESKTOP NAV ─── */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center"
            style={{ gap: "4px" }}
          >
            {NAV_PILLARS.map((pillar) => {
              const isActive =
                pathname === pillar.href ||
                pathname.startsWith(pillar.href + "/") ||
                activePage === pillar.key;
              const isOpen = openPillar === pillar.key;

              return (
                <div
                  key={pillar.key}
                  ref={(el) => { pillarRefs.current[pillar.key] = el; }}
                  className="relative"
                  onMouseEnter={() => { cancelClose(); setOpenPillar(pillar.key); }}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                    style={{
                      color: isActive || isOpen
                        ? "#ffffff"
                        : "rgba(255,255,255,0.62)",
                      background: isOpen ? "rgba(255,255,255,0.07)" : "transparent",
                    }}
                    onClick={() => setOpenPillar(isOpen ? null : pillar.key)}
                    aria-haspopup="menu"
                    aria-expanded={isOpen}
                  >
                    {pillar.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                      style={{ color: isActive || isOpen ? GOLD : "rgba(255,255,255,0.38)" }}
                    />
                  </button>

                  <DropdownPanel
                    pillar={pillar}
                    open={isOpen}
                    pathname={pathname}
                    onClose={() => setOpenPillar(null)}
                  />
                </div>
              );
            })}

            {/* Flat links — no dropdown */}
            {[
              { href: "/features", label: "Features" },
              { href: "/pricing", label: "Pricing" },
              { href: "/family", label: "Family" },
              { href: "/blog", label: "Blog" },
              { href: "/about", label: "About" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{
                  color: pathname === link.href ? "#ffffff" : "rgba(255,255,255,0.62)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#ffffff")
                }
                onMouseLeave={(e) => {
                  if (pathname !== link.href)
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.62)";
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ─── DESKTOP CTAs ─── */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium transition-colors"
              style={{ color: "rgba(255,255,255,0.62)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#ffffff")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(255,255,255,0.62)")
              }
            >
              Sign in
            </Link>
            <Link
              href="/start"
              className="text-sm px-5 py-2 rounded-full font-bold transition-all hover:brightness-110"
              style={{ background: GOLD, color: DEEP }}
            >
              Start Free
            </Link>
          </div>

          {/* ─── MOBILE CONTROLS ─── */}
          <div className="md:hidden flex items-center gap-2 flex-shrink-0">
            <Link
              href="/login"
              className="text-xs font-medium px-2 py-1 transition-colors"
              style={{ color: "rgba(255,255,255,0.62)" }}
            >
              Sign in
            </Link>
            <Link
              href="/start"
              className="text-xs px-3 py-1.5 rounded-full font-bold whitespace-nowrap transition-all hover:brightness-110"
              style={{ background: GOLD, color: DEEP }}
            >
              Start Free
            </Link>
            <button
              className="ml-1 transition-colors"
              style={{ color: "rgba(255,255,255,0.7)" }}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ─── MOBILE FULL-SCREEN OVERLAY ─── */}
        <div
          className="md:hidden fixed inset-0 z-40 flex flex-col overflow-y-auto"
          style={{
            top: "56px",
            background: `${DEEP}f8`,
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            opacity: mobileOpen ? 1 : 0,
            pointerEvents: mobileOpen ? "auto" : "none",
            transform: mobileOpen ? "translateY(0)" : "translateY(-8px)",
            transition: "opacity 0.22s ease, transform 0.22s ease",
          }}
        >
          {/* Pillar accordions */}
          <div className="flex-1">
            {NAV_PILLARS.map((pillar) => (
              <MobileAccordion
                key={pillar.key}
                pillar={pillar}
                pathname={pathname}
                onClose={() => setMobileOpen(false)}
              />
            ))}

            {/* Flat links */}
            {[
              { href: "/features", label: "Features" },
              { href: "/pricing", label: "Pricing" },
              { href: "/blog", label: "Blog" },
              { href: "/about", label: "About" },
            ].map((link) => (
              <div key={link.href} className="border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                <Link
                  href={link.href}
                  className="flex items-center px-6 py-4 text-base font-semibold transition-colors"
                  style={{ color: pathname === link.href ? GOLD : "rgba(255,255,255,0.85)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          {/* ─── Mobile CTA ─── */}
          <div className="p-6 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
            <Link
              href="/birth"
              className="block w-full text-center py-4 rounded-2xl font-bold text-base transition-all hover:brightness-110"
              style={{ background: GOLD, color: DEEP }}
              onClick={() => setMobileOpen(false)}
            >
              🚀 Activate your agent
            </Link>
            <p className="text-center text-xs mt-3" style={{ color: "rgba(255,255,255,0.35)" }}>
              Free forever · No credit card
            </p>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-[56px]" aria-hidden />
    </>
  );
}
