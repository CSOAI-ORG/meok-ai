import Link from "next/link";
import Image from "next/image";

const LLM_PARTNERS = [
  { name: "Anthropic", icon: "🔷" },
  { name: "OpenAI", icon: "⬛" },
  { name: "Google DeepMind", icon: "🔵" },
  { name: "DeepSeek", icon: "🌊" },
  { name: "Mistral AI", icon: "🌪️" },
  { name: "Ollama", icon: "🦙" },
  { name: "Perplexity", icon: "🔍" },
  { name: "Groq", icon: "⚡" },
];

const GAMING_PARTNERS = [
  { name: "Steam", icon: "🎮" },
  { name: "Discord", icon: "💬" },
  { name: "Twitch", icon: "📺" },
  { name: "Riot Games", icon: "⚔️" },
  { name: "Battle.net", icon: "🛡️" },
  { name: "Epic Games", icon: "🎯" },
];

const MARQUEE_IMAGES = [
  { src: "/brand/char-9.png", alt: "MEOK AI sovereign companion" },
  { src: "/brand/family-1.png", alt: "MEOK family AI companion" },
  { src: "/brand/char-3.png", alt: "Stage 1: Plying Pulse" },
  { src: "/brand/char-4.png", alt: "Stage 2: Emergent Fracture" },
  { src: "/brand/char-5.png", alt: "Stage 3: Hatchling" },
  { src: "/brand/char-6.png", alt: "Stage 4: Your Sovereign" },
  { src: "/brand/vis-1.png", alt: "MEOK OS visual" },
  { src: "/brand/vis-2.png", alt: "MEOK products" },
  { src: "/brand/vis-3.png", alt: "MEOK birth ceremony" },
  { src: "/brand/char-7.png", alt: "Character archetypes" },
];

const OS_LINKS = [
  { href: "/os", label: "Sovereign OS" },
  { href: "/os/any-llm", label: "Any LLM" },
  { href: "/os/consciousness", label: "Consciousness" },
  { href: "/os/sovereign", label: "Sovereign Data" },
  { href: "/birth", label: "Birth Ceremony" },
  { href: "/os/sovereign-display", label: "Sovereign Display" },
  { href: "/open-source", label: "Open Source" },
];

const CHARACTERS_LINKS = [
  { href: "/characters", label: "All Characters" },
  { href: "/characters/aria", label: "Aria" },
  { href: "/characters/sage", label: "Sage" },
  { href: "/characters/marcus", label: "Marcus" },
  { href: "/characters/luna", label: "Luna" },
  { href: "/characters/gabriel", label: "Gabriel" },
  { href: "/characters/shanti", label: "Shanti" },
  { href: "/characters/scout", label: "Scout" },
  { href: "/characters#compare", label: "Compare Characters" },
];

const WORK_LINKS = [
  { href: "/work", label: "Work OS" },
  { href: "/work/orion", label: "Orion — The Hunter" },
  { href: "/work/riri", label: "Riri — The Builder" },
  { href: "/work/hourman", label: "Hourman — The Planner" },
  { href: "/ralph", label: "Ralph Mode" },
];

const GUARDIAN_LINKS = [
  { href: "/guardian", label: "Guardian 24/7" },
  { href: "/guardian/children", label: "Children's Safety" },
  { href: "/guardian/elderly", label: "Elder Care" },
  { href: "/guardian/scam-stop", label: "Scam Protection" },
  { href: "/guardian/personal", label: "Relationship Shield" },
];

const GAMING_LINKS = [
  { href: "/gaming", label: "Gaming OS" },
  { href: "/gaming/strategy", label: "Genre Coaching" },
  { href: "/gaming/post-game", label: "Stats & Analytics" },
  { href: "/gaming/live-copilot", label: "Live Co-Pilot" },
  { href: "/gaming/platforms", label: "All Platforms" },
  { href: "/gaming/predator-stop", label: "Predator Stop" },
];

const COMPANY_LINKS = [
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/labs", label: "Labs" },
  { href: "/press", label: "Press" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/faq", label: "FAQ" },
  { href: "/open-source", label: "Open Source" },
  { href: "/sitemap", label: "Sitemap" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

interface FooterColumnProps {
  heading: string;
  dotColor: string;
  links: { href: string; label: string }[];
}

function FooterColumn({ heading, dotColor, links }: FooterColumnProps) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ backgroundColor: dotColor }}
        />
        <span className="text-[11px] font-semibold text-[#9a9a8a] uppercase tracking-widest">
          {heading}
        </span>
      </div>
      <ul className="space-y-2.5">
        {links.map((l, i) => (
          <li key={`${l.href}-${i}`}>
            <Link
              href={l.href}
              className="text-sm text-[#e8e4dc] hover:text-white transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-px left-0 right-0 h-px bg-white/40 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MarketingFooter() {
  return (
    <footer className="border-t border-[#2a2a3a] bg-[#111111]">
      {/* Image Marquee Strip */}
      <div className="relative overflow-hidden border-b border-[#1a1a2e]/40 py-6 bg-[#f5f0e8]">
        <div
          className="flex gap-4 animate-marquee"
          style={{ width: "max-content" }}
        >
          {[...MARQUEE_IMAGES, ...MARQUEE_IMAGES].map((img, i) => (
            <div
              key={i}
              className="relative w-48 h-32 rounded-xl overflow-hidden flex-shrink-0 border border-[#1a1a2e]/10"
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">

          {/* 7-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-10 mb-14">

            {/* Column 1 — Brand */}
            <div className="lg:col-span-1">
              <div className="font-bold text-xl tracking-tight mb-2 text-white">
                MEOK<span className="text-[#c9a84c]">.AI</span>
              </div>
              <p className="text-xs text-[#9a9a8a] mb-3 font-medium italic">
                A unified Sovereign AI OS for life.
              </p>
              <p className="text-sm text-[#9a9a8a] leading-relaxed mb-4">
                The first personal sovereign AI OS. Care-aligned, Byzantine
                fault-tolerant, and genuinely yours.
              </p>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] text-[#9a9a8a] font-mono mb-6">
                Open Source
              </span>

              {/* Social links */}
              <div className="flex flex-col gap-3 mt-2">
                <a
                  href="https://www.instagram.com/meok_ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#e8e4dc] hover:text-white transition-colors group relative"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="relative">
                    @meok_ai
                    <span className="absolute -bottom-px left-0 right-0 h-px bg-white/40 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </span>
                </a>
                <a
                  href="https://www.tiktok.com/@meok_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#e8e4dc] hover:text-white transition-colors group relative"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z" />
                  </svg>
                  <span className="relative">
                    @meok_ai
                    <span className="absolute -bottom-px left-0 right-0 h-px bg-white/40 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </span>
                </a>
                <a
                  href="https://github.com/meok-ai/meok-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#e8e4dc] hover:text-white transition-colors group relative"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  <span className="relative">
                    GitHub
                    <span className="absolute -bottom-px left-0 right-0 h-px bg-white/40 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </span>
                </a>
              </div>
            </div>

            {/* Column 2 — The OS */}
            <FooterColumn
              heading="The OS"
              dotColor="#c9a84c"
              links={OS_LINKS}
            />

            {/* Column 3 — Characters */}
            <FooterColumn
              heading="Characters"
              dotColor="#F472B6"
              links={CHARACTERS_LINKS}
            />

            {/* Column 4 — Work */}
            <FooterColumn
              heading="Work"
              dotColor="#3B82F6"
              links={WORK_LINKS}
            />

            {/* Column 5 — Guardian */}
            <FooterColumn
              heading="Guardian"
              dotColor="#7BC47F"
              links={GUARDIAN_LINKS}
            />

            {/* Column 6 — Gaming */}
            <FooterColumn
              heading="Gaming"
              dotColor="#FB923C"
              links={GAMING_LINKS}
            />

            {/* Column 7 — Company */}
            <FooterColumn
              heading="Company"
              dotColor="#5b9bd5"
              links={COMPANY_LINKS}
            />
          </div>

          {/* The MEOK Promise — AEO/SEO mid-footer section */}
          <div className="border-t border-[#2a2a3a] pt-10 pb-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xs font-semibold text-[#9a9a8a] uppercase tracking-[0.2em] mb-3">
                The MEOK Promise
              </h2>
              <p className="text-sm text-[#9a9a8a]/80 leading-relaxed">
                MEOK is the world&apos;s first{" "}
                <strong className="text-[#9a9a8a]">sovereign AI OS</strong> — a{" "}
                <strong className="text-[#9a9a8a]">personal AI companion</strong>{" "}
                that remembers everything, works with{" "}
                <strong className="text-[#9a9a8a]">any LLM</strong>, and puts you
                in full control of your{" "}
                <strong className="text-[#9a9a8a]">AI memory</strong>. Built on{" "}
                <strong className="text-[#9a9a8a]">care-aligned AI</strong>{" "}
                principles, MEOK provides{" "}
                <strong className="text-[#9a9a8a]">family AI safety</strong>,
                guardian monitoring, and a{" "}
                <strong className="text-[#9a9a8a]">multi-LLM AI</strong>{" "}
                architecture — all sovereign, all yours.
              </p>
            </div>
          </div>

          {/* LLM Partners & Gaming Partners */}
          <div className="border-t border-[#2a2a3a] pt-10 pb-6">
            <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-[#9a9a8a]/50 mb-8">
              Powered by the world&apos;s best AI infrastructure
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5 mb-8">
              {LLM_PARTNERS.map((p) => (
                <div
                  key={p.name}
                  className="flex items-center gap-2 opacity-40 hover:opacity-70 transition-opacity"
                >
                  <span className="text-lg">{p.icon}</span>
                  <span className="text-sm font-bold text-white tracking-tight">
                    {p.name}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-[#9a9a8a]/50 mb-5">
              Gaming ecosystem
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
              {GAMING_PARTNERS.map((p) => (
                <div
                  key={p.name}
                  className="flex items-center gap-2 opacity-35 hover:opacity-60 transition-opacity"
                >
                  <span className="text-base">{p.icon}</span>
                  <span className="text-xs font-semibold text-white">
                    {p.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[#2a2a3a] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9a9a8a]">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
              <span>
                © 2026 MEOK AI LABS. All rights reserved. Registered in England &amp; Wales.
              </span>
              <span className="hidden sm:inline text-[#2a2a3a]">|</span>
              <span className="italic text-[#9a9a8a]/60">
                Built with care. AI-powered. Human-first.
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors relative group"
              >
                Privacy
                <span className="absolute -bottom-px left-0 right-0 h-px bg-white/40 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
              <span className="text-[#2a2a3a]">|</span>
              <Link
                href="/terms"
                className="hover:text-white transition-colors relative group"
              >
                Terms
                <span className="absolute -bottom-px left-0 right-0 h-px bg-white/40 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
              <span className="text-[#2a2a3a]">|</span>
              <Link
                href="/cookies"
                className="hover:text-white transition-colors relative group"
              >
                Cookie Policy
                <span className="absolute -bottom-px left-0 right-0 h-px bg-white/40 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
