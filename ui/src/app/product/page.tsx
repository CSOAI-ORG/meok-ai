import type { Metadata } from "next";
import Link from "next/link";
import {
  User,
  Briefcase,
  Shield,
  Gamepad2,
  Crown,
  ArrowRight,
  Check,
  Zap,
  Lock,
  Heart,
} from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

export const metadata: Metadata = {
  title: "Product — Everything MEOK Can Do. In One Place. | MEOK.AI",
  description:
    "Personal OS, Work OS, Family Guardian, Gaming Co-Pilot, Sovereign AI. One platform that actually belongs to you. Explore everything MEOK can do.",
  alternates: { canonical: "https://meok.ai/product" },
  openGraph: {
    title: "Everything MEOK Can Do. In One Place. | MEOK.AI",
    description:
      "Personal OS, Work OS, Family Guardian, Gaming Co-Pilot, Sovereign AI — care-aligned, private, yours.",
    type: "website",
  },
};

/* ─── DATA ─────────────────────────────────────────────── */

const PRODUCT_CATEGORIES = [
  {
    Icon: User,
    iconClass: "icon-gold",
    title: "Personal OS",
    subtitle: "Your life, intelligently managed",
    desc: "Morning briefs, care tracking, memory recall, relationship management, and a companion that knows you — actually knows you — across every conversation.",
    links: [
      { label: "Morning Brief", href: "/personal/morning-brief" },
      { label: "Care System", href: "/personal/care" },
      { label: "Memory", href: "/memory" },
    ],
    cta: "Explore Personal OS",
    ctaHref: "/os",
    accent: "border-[#c9a84c]/20 hover:border-[#c9a84c]/40",
  },
  {
    Icon: Briefcase,
    iconClass: "icon-blue",
    title: "Work OS",
    subtitle: "AI for serious work",
    desc: "Documents, email, research, and task management — all with persistent memory. Your work AI knows your history, your voice, and your goals. No context re-loading.",
    links: [
      { label: "Documents", href: "/work/documents" },
      { label: "Email", href: "/work/email" },
      { label: "Research", href: "/work/research" },
    ],
    cta: "Explore Work OS",
    ctaHref: "/work",
    accent: "border-blue-500/20 hover:border-blue-500/40",
  },
  {
    Icon: Shield,
    iconClass: "icon-green",
    title: "Family Guardian",
    subtitle: "Protection without surveillance",
    desc: "Elderly care, child safety, and family council — all care-aligned. Protects without spying. Built after the Character.AI teen safety crisis. COPPA and Children's Code compliant.",
    links: [
      { label: "Guardian overview", href: "/guardian" },
      { label: "Elderly care", href: "/guardian/elderly" },
      { label: "Child safety", href: "/guardian/children" },
    ],
    cta: "Explore Family Guardian",
    ctaHref: "/product/family-guardian",
    accent: "border-green-500/20 hover:border-green-500/40",
  },
  {
    Icon: Gamepad2,
    iconClass: "icon-purple",
    title: "Gaming Co-Pilot",
    subtitle: "AI that plays alongside you",
    desc: "Strategy coaching, session memory, opponent analysis, and performance tracking — for competitive and casual gamers who want an AI that actually understands games.",
    links: [
      { label: "Gaming overview", href: "/gaming" },
    ],
    cta: "Explore Gaming",
    ctaHref: "/gaming",
    accent: "border-purple-500/20 hover:border-purple-500/40",
  },
  {
    Icon: Crown,
    iconClass: "icon-gold",
    title: "Sovereign AI",
    subtitle: "The architecture of trust",
    desc: "Byzantine fault-tolerant council, Maternal Covenant, pgvector semantic memory, full data export. MEOK is not a product you use — it's an AI that belongs to you.",
    links: [
      { label: "Sovereign overview", href: "/sovereign" },
      { label: "Maternal Covenant", href: "/maternal-covenant" },
      { label: "Open source", href: "/open-source" },
    ],
    cta: "Explore Sovereignty",
    ctaHref: "/sovereign",
    accent: "border-[#c9a84c]/20 hover:border-[#c9a84c]/40",
  },
];

const DIFFERENTIATORS = [
  {
    Icon: Lock,
    title: "Your data never trains anyone else's model",
    desc: "Every other AI company trains on your conversations. MEOK stores your data in an isolated tenant database and never uses it for training without your explicit written consent.",
  },
  {
    Icon: Heart,
    title: "Care is architecturally enforced",
    desc: "The Maternal Covenant is not a policy document. It's machine-executable care constraints scored on every response. Harmful responses don't reach you — they're rewritten first.",
  },
  {
    Icon: Zap,
    title: "Memory that actually works",
    desc: "695-episode episodic memory with pgvector semantic search. Your AI remembers the conversation from six months ago that's relevant to what you're asking right now.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Everything MEOK Can Do. In One Place.",
  description:
    "Personal OS, Work OS, Family Guardian, Gaming Co-Pilot, Sovereign AI. Care-aligned. Private. Yours.",
  url: "https://meok.ai/product",
  provider: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
};

/* ─── PAGE ─────────────────────────────────────────────── */
export default function ProductPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-[#f5f0e8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
        <div
          className="blob-gold"
          style={{ width: 800, height: 600, top: -200, left: "50%", transform: "translateX(-50%)", opacity: 0.2 }}
        />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            The Complete Picture
          </div>

          <h1
            className="font-black text-white leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)" }}
          >
            Everything MEOK can do.{" "}
            <span className="text-gradient-gold">In one place.</span>
          </h1>

          <p className="text-[#f5f0e8]/65 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Five product areas. One sovereign AI that actually belongs to you.
            Care-aligned from the architecture up.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/hatch"
              aria-label="Start free — hatch your sovereign AI companion"
              className="group flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#b8963e] transition-all text-sm"
            >
              Start free — hatch your AI
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/pricing" className="text-sm text-[#f5f0e8]/50 hover:text-[#c9a84c] transition-colors font-medium">
              See pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PRODUCT CATEGORIES ───────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]/60 block mb-4">
              Product areas
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Five areas. One sovereign AI.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRODUCT_CATEGORIES.map(({ Icon, iconClass, title, subtitle, desc, links, cta, ctaHref, accent }) => (
              <div
                key={title}
                className={`premium-card p-8 border transition-all ${accent}`}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${iconClass}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-white text-lg">{title}</h3>
                    <p className="text-[#c9a84c] text-xs font-medium mt-0.5">{subtitle}</p>
                  </div>
                </div>

                <p className="text-sm text-[#f5f0e8]/55 leading-relaxed mb-5">{desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-xs px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#f5f0e8]/60 hover:text-[#c9a84c] hover:border-[#c9a84c]/30 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#c9a84c] hover:gap-3 transition-all"
                >
                  {cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BUILT DIFFERENT ──────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]/60 block mb-4">
              Built different
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Three ways MEOK is genuinely different.
            </h2>
            <p className="text-[#f5f0e8]/50 mt-4 max-w-xl mx-auto text-sm">
              Not marketing claims. Architectural facts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DIFFERENTIATORS.map(({ Icon, title, desc }) => (
              <div key={title} className="premium-card p-7">
                <div className="icon-gold w-11 h-11 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-black text-white text-base mb-3">{title}</h3>
                <p className="text-sm text-[#f5f0e8]/55 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURE CHECKLIST ────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white">What&apos;s included in every plan.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Care-aligned responses on every message",
              "Maternal Covenant enforcement",
              "6-dimension Care Score tracking",
              "695-episode episodic memory",
              "pgvector semantic search",
              "Morning Brief (from Sovereign plan)",
              "Full data export at any time",
              "Zero data used for third-party training",
              "7 AI archetypes to choose from",
              "Multi-LLM routing (GPT-4o, Claude, Gemini)",
              "Local-first processing where possible",
              "Family Guardian (from Elite plan)",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <Check className="w-4 h-4 text-[#c9a84c] flex-shrink-0" />
                <span className="text-sm text-[#f5f0e8]/70">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18] text-center">
        <div className="relative max-w-2xl mx-auto">
          <div
            className="blob-gold"
            style={{ width: 400, height: 300, top: -50, left: "50%", transform: "translateX(-50%)", opacity: 0.15 }}
          />
          <div className="relative">
            <div className="text-5xl mb-6">🥚</div>
            <h2 className="font-black text-white text-3xl sm:text-4xl mb-4 leading-tight">
              Your sovereign AI is waiting.
            </h2>
            <p className="text-[#f5f0e8]/50 mb-10">
              Start free. No credit card required.
            </p>
            <Link
              href="/hatch"
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#b8963e] transition-all text-base shadow-xl"
            >
              Hatch your AI — free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
