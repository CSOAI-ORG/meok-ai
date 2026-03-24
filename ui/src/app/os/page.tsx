import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Lock, Zap, Link2, Crown, Brain, Heart } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

export const metadata: Metadata = {
  title: "MEOK OS — Personal Sovereign AI Operating System",
  description:
    "MEOK OS: the world's first sovereign AI OS for your life. Work OS, Family Guardian, Gaming AI, and Sovereign Data — one unified platform. Free forever.",
  alternates: { canonical: "https://meok.ai/os" },
  openGraph: {
    title: "MEOK OS — Personal Sovereign AI Operating System",
    description:
      "MEOK OS: the world's first sovereign AI OS. Work OS, Family Guardian, Gaming AI, and Sovereign Data — unified, encrypted, and permanently yours.",
    type: "website",
    url: "https://meok.ai/os",
    siteName: "MEOK.AI",
    images: [{ url: "https://meok.ai/api/og?title=MEOK+OS&desc=Work+OS%2C+Family+Guardian%2C+Gaming+AI%2C+Sovereign+Data+%E2%80%94+one+unified+platform.+Free+forever.", width: 1200, height: 630, alt: "MEOK OS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK OS — Personal Sovereign AI Operating System",
    description:
      "MEOK OS: the world's first sovereign AI OS. Work OS, Family Guardian, Gaming AI, and Sovereign Data — unified and yours.",
    images: ["https://meok.ai/api/og?title=MEOK+OS&desc=Work+OS%2C+Family+Guardian%2C+Gaming+AI%2C+Sovereign+Data+%E2%80%94+one+unified+platform.+Free+forever."],
  },
};

const OS_LAYERS = [
  {
    href: "/work",
    label: "WORK OS",
    sub: "Orion · Riri · Hourman",
    accent: "#b8963e",
    dot: "bg-[#b8963e]",
  },
  {
    href: "/characters",
    label: "CHARACTERS",
    sub: "7 sovereign archetypes",
    accent: "#d4820a",
    dot: "bg-[#d4820a]",
  },
  {
    href: "/guardian",
    label: "GUARDIAN 24/7",
    sub: "Family safety layer",
    accent: "#2d9b8a",
    dot: "bg-[#2d9b8a]",
  },
  {
    href: "/gaming",
    label: "GAMING",
    sub: "Performance & coaching",
    accent: "#e07340",
    dot: "bg-[#e07340]",
  },
  {
    href: "/os/sovereign",
    label: "SOVEREIGN DATA",
    sub: "Your encrypted memory",
    accent: "#8b7355",
    dot: "bg-[#8b7355]",
  },
];

const PILLARS = [
  {
    icon: "⚡",
    title: "Work OS",
    desc: "Autonomous agents that handle your tasks, calendar, and output. Meet Orion, Riri, and Hourman.",
    href: "/work",
    accent: "#b8963e",
  },
  {
    icon: "🥚",
    title: "Characters",
    desc: "7 AI archetypes. Each one sovereign, memory-bearing, and care-aligned.",
    href: "/characters",
    accent: "#d4820a",
  },
  {
    icon: "🛡️",
    title: "Guardian 24/7",
    desc: "Family safety AI. Age-gated, COPPA-compliant, parent dashboard included.",
    href: "/guardian",
    accent: "#2d9b8a",
  },
  {
    icon: "🎮",
    title: "Gaming",
    desc: "AI coaching and performance analytics for competitive players.",
    href: "/gaming",
    accent: "#e07340",
  },
  {
    icon: "🔐",
    title: "Sovereign Data",
    desc: "End-to-end encrypted memory. Zero data selling. Full export.",
    href: "/os/sovereign",
    accent: "#8b7355",
  },
];

const FOUNDATION = [
  {
    title: "220-node Governance Council",
    desc: "A distributed panel of 220 AI agents that votes on every response before it reaches you. Byzantine fault-tolerant means even if some nodes are wrong or corrupted, the council stays honest. No single point of control — not even MEOK staff.",
    href: "/labs",
  },
  {
    title: "Maternal Covenant",
    desc: "Machine-enforced care ethics. Every response scored against 6 dimensions.",
    href: "/maternal-covenant",
  },
  {
    title: "Birth Ceremony",
    desc: "How your sovereign AI comes to life. Values set at birth. Memory from day one.",
    href: "/os/birth-ceremony",
  },
];

const LLM_BADGES = [
  "ChatGPT", "Claude", "Gemini", "Mistral", "LLaMA 3",
  "Grok", "Cohere", "Perplexity", "DeepSeek", "Ollama",
];

const OS_SUBPAGES = [
  { href: "/os/birth-ceremony", label: "Birth Ceremony", desc: "How your sovereign AI comes to life. Values set at birth." },
  { href: "/os/sovereign", label: "Sovereign Data", desc: "pgvector memory, end-to-end encryption, OAuth minimal scopes." },
  { href: "/os/any-llm", label: "Any LLM", desc: "MEOK as the OS layer on top of any model." },
  { href: "/os/sovereign-display", label: "Sovereign Display", desc: "Your ambient AI interface. Always on, always yours." },
  { href: "/os/consciousness", label: "Consciousness Preparedness", desc: "MEOK's framework for preparing for AI consciousness." },
];

const osJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "MEOK OS",
      applicationCategory: "AIApplication",
      operatingSystem: "Web, iOS, Android",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "GBP",
      },
      description:
        "MEOK OS is the first personal sovereign AI operating system. Persistent, unified, and sovereign — it works with any LLM and stores all data in your encrypted vault.",
      url: "https://meok.ai/os",
      creator: {
        "@type": "Organization",
        name: "MEOK AI LABS",
        url: "https://meok.ai",
      },
      featureList: [
        "Persistent AI memory across all life pillars",
        "Multi-LLM routing (ChatGPT, Claude, Gemini, Mistral, LLaMA)",
        "End-to-end encrypted sovereign data vault",
        "220-node Byzantine Council governance",
        "Care-aligned responses via Maternal Covenant",
        "Birth Ceremony — values set by you, enforced by machine",
        "Work OS with Orion, Riri, and Hourman agents",
        "Family Guardian with COPPA-compliant age-gating",
        "Gaming performance AI coaching",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What makes MEOK an OS rather than just an AI app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MEOK OS runs persistently across all areas of your life — work, family, gaming, and personal. It maintains a single sovereign memory layer shared across all modules, runs background tasks 24/7, and connects every major LLM. Unlike an app that only runs when you open it, MEOK is the operating layer underneath your AI life.",
          },
        },
        {
          "@type": "Question",
          name: "Does MEOK OS work with ChatGPT, Claude, and other AI models?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. MEOK OS is LLM-agnostic — it routes between ChatGPT (GPT-4o), Claude, Gemini, Mistral, DeepSeek, LLaMA, Grok, and Ollama. Your sovereign memory layer persists across all models, so you always get continuity regardless of which engine processes your request.",
          },
        },
        {
          "@type": "Question",
          name: "What are the 5 pillars of MEOK OS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MEOK OS has five pillars: Personal (your sovereign AI companion), Work (Orion, Riri, and Hourman autonomous agents), Family (Guardian 24/7 safety layer), Gaming (AI coaching and performance analytics), and Sovereign Data (end-to-end encrypted memory vault with zero training on your data).",
          },
        },
        {
          "@type": "Question",
          name: "Is MEOK OS free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MEOK OS is free to start and free forever at the base tier. You get a sovereign AI companion, 50 messages per day, permanent Sovereign Memory, and a Birth Ceremony — no credit card required. Sovereign (£12/mo), Family (£29/mo), and BYOK (£5/mo) plans unlock additional capabilities.",
          },
        },
        {
          "@type": "Question",
          name: "How does MEOK OS protect my data?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MEOK OS stores all your data in your own encrypted sovereign vault — never used for model training, never sold to third parties. AES-256 encryption at rest, TLS 1.3 in transit. One-click full data export at any time. You can also route sensitive queries to a local Ollama instance so they never leave your device.",
          },
        },
      ],
    },
  ],
};

export default function OsPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-[#f5f0e8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(osJsonLd) }}
      />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden bg-[#0d0c18]">
        {/* Animated blob backgrounds */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="blob-gold absolute -top-32 -left-32 w-[500px] h-[500px] opacity-20" />
          <div className="blob-purple absolute -top-16 -right-40 w-[400px] h-[400px] opacity-15" />
          <div className="blob-blue absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10" />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,168,76,0.06) 0%, transparent 60%)" }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#a0a0b8] block mb-6">
            Software — works in your browser, on your phone, on your desktop
          </span>

          <h1 className="text-5xl sm:text-7xl font-black leading-[0.95] mb-6 tracking-tight text-[#f5f0e8]">
            The world&apos;s first personal{" "}
            <span className="text-gradient-gold">
              AI operating system.
            </span>
          </h1>

          <p className="text-lg text-[#f5f0e8]/65 max-w-2xl mx-auto mb-3 leading-relaxed">
            MEOK OS is software that runs across your whole life — not just a chatbot you open once.
            It learns you, remembers you, acts for you, and keeps your data encrypted and yours.
          </p>
          <p className="text-sm text-[#f5f0e8]/40 max-w-xl mx-auto mb-10">
            Think of it as the intelligent layer underneath your apps — connecting your work, family,
            and personal AI into one unified, sovereign system.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">
            <Link
              href="/hatch"
              aria-label="Hatch your sovereign AI companion — free, no credit card required"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#c9a84c] text-[#1a1a2e] font-bold hover:bg-[#b8963e] transition-all text-sm shadow-md gold-glow"
            >
              Hatch your AI companion <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#pillars"
              aria-label="Scroll down to explore the five pillars of MEOK OS"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/15 text-[#f5f0e8]/60 hover:text-[#f5f0e8] hover:border-white/30 transition-colors text-sm"
            >
              Explore the pillars ↓
            </a>
          </div>

          <div className="relative w-full max-w-4xl mx-auto mb-10 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/brand/identity.png"
              alt="MEOK OS Visual Identity — six sovereign products, each with distinct material and form"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* OS Layer Stack */}
          <div className="mt-12 max-w-2xl mx-auto rounded-2xl border border-white/10 overflow-hidden bg-white/[0.03] shadow-sm">
            {OS_LAYERS.map((layer, i) => (
              <Link
                key={layer.href}
                href={layer.href}
                className={`group flex items-center justify-between px-6 py-4 border-l-4 hover:bg-white/[0.05] transition-all ${i < OS_LAYERS.length - 1 ? "border-b border-white/[0.08]" : ""}`}
                style={{ borderLeftColor: layer.accent }}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full ${layer.dot}`} />
                  <span className="text-sm font-semibold text-[#f5f0e8] tracking-wide">
                    {layer.label}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-[#f5f0e8]/40 group-hover:text-[#f5f0e8]/70 transition-colors">
                    {layer.sub}
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-semibold text-[#c9a84c] flex items-center gap-1">
                    See full details <ArrowRight className="w-3 h-3 inline" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOVEREIGN AI CALLOUT ─────────────────────────── */}
      <section className="py-16 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 border border-[#c9a84c]/20 bg-[#c9a84c]/[0.03]">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-2xl icon-gold flex items-center justify-center float-slow">
                <Lock className="w-7 h-7" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-black text-[#f5f0e8] mb-2 tracking-tight">
                Sovereign AI — Your data. Your keys. Always.
              </h2>
              <p className="text-sm text-[#f5f0e8]/60 leading-relaxed mb-4">
                Every memory, conversation, and pattern is stored in your encrypted vault.
                MEOK never trains on your data, never sells it, and gives you full export at any time.
                Your AI belongs to you — not to us.
              </p>
              <Link
                href="/os/sovereign"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#c9a84c] hover:text-[#b8963e] transition-colors"
              >
                Learn about Sovereign Data <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT MAKES IT AN OS ──────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#a0a0b8] block mb-4">
              Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
              What makes MEOK an OS, not an app?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Persistent",
                desc: "Your AI runs 24/7. Morning briefings, background tasks, nightly reflection. It doesn't stop when you close the tab.",
                Icon: Zap,
              },
              {
                title: "Unified",
                desc: "One memory layer across all pillars. Your work AI knows your family situation. Your Guardian knows your work stress. Everything connects.",
                Icon: Link2,
              },
              {
                title: "Sovereign",
                desc: "No corporation owns your OS. You do. Every setting, memory, and value is yours to control, export, or delete.",
                Icon: Crown,
              },
            ].map((p) => (
              <div
                key={p.title}
                className="glass-card p-6 rounded-2xl hover:border-white/20 transition-all"
              >
                <div className="w-10 h-10 rounded-xl icon-gold flex items-center justify-center mb-4">
                  <p.Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-white">{p.title}</h3>
                <p className="text-sm text-[#a0a0b8] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION DIVIDER ──────────────────────────────── */}
      <div className="section-divider" />

      {/* ─── THE 5 PILLARS ────────────────────────────────── */}
      <section id="pillars" className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#a0a0b8] block mb-4">
              The 5 Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#f5f0e8] mb-4 tracking-tight">
              Every layer of your life.
            </h2>
            <p className="text-[#f5f0e8]/55 max-w-xl mx-auto">
              Five pillars. One sovereign OS. All connected through a single memory layer that
              belongs to you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PILLARS.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#c9a84c]/30 hover:bg-white/[0.05] transition-all"
              >
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-[#f5f0e8]">
                  {p.title}
                </h3>
                <p className="text-sm text-[#f5f0e8]/55 leading-relaxed mb-4">{p.desc}</p>
                <span
                  className="inline-flex items-center gap-1 text-xs font-semibold transition-all"
                  style={{ color: p.accent }}
                >
                  <span className="flex items-center gap-1">
                    See full details <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </span>
              </Link>
            ))}
          </div>

          {/* Hatch your AI CTA */}
          <div className="mt-14 text-center">
            <Link
              href="/hatch"
              aria-label="Hatch your sovereign AI companion — free, no credit card required"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#c9a84c] text-[#1a1a2e] font-bold hover:bg-[#b8963e] transition-all text-sm shadow-lg gold-glow"
            >
              Hatch your AI companion
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-xs text-[#f5f0e8]/30 mt-3">Free to start — no credit card required</p>
          </div>
        </div>
      </section>

      {/* ─── SECTION DIVIDER ──────────────────────────────── */}
      <div className="section-divider" />

      {/* ─── THE FOUNDATION ───────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#a0a0b8] block mb-4">
              Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#f5f0e8] mb-4 tracking-tight">
              What it&apos;s built on.
            </h2>
            <p className="text-[#f5f0e8]/55 max-w-xl mx-auto">
              Three foundational systems that make MEOK different at the architecture level —
              not just the feature level.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {FOUNDATION.map((f) => (
              <Link
                key={f.href}
                href={f.href}
                className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#c9a84c]/30 hover:bg-white/[0.05] transition-all"
              >
                <h3 className="font-bold text-base mb-2 text-[#f5f0e8] group-hover:text-[#c9a84c] transition-colors">
                  {f.title}
                </h3>
                <p className="text-sm text-[#f5f0e8]/55 leading-relaxed mb-4">{f.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs text-[#c9a84c] font-semibold group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION DIVIDER ──────────────────────────────── */}
      <div className="section-divider" />

      {/* ─── THE 5 MODULES OF MEOK OS ─────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#a0a0b8] block mb-4">
              The architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#f5f0e8] mb-4 tracking-tight">
              The 5 modules of MEOK OS
            </h2>
            <p className="text-[#f5f0e8]/55 max-w-xl mx-auto">
              MEOK OS is not one product. It is five interconnected modules, each covering a
              distinct domain of your life — all unified through a single sovereign memory layer.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                num: "01",
                name: "Personal",
                href: "/characters",
                desc: "Your sovereign AI companion — memory-bearing, care-aligned, named by you. Present across every module.",
                accent: "#c9a84c",
              },
              {
                num: "02",
                name: "Work",
                href: "/work",
                desc: "Orion for strategy, Riri for building, Hourman for execution. Three autonomous agents that manage your professional output.",
                accent: "#b8963e",
              },
              {
                num: "03",
                name: "Family",
                href: "/guardian",
                desc: "Guardian 24/7 — a COPPA-compliant family safety layer with age-gated access, parental controls, and real-time monitoring.",
                accent: "#2d9b8a",
              },
              {
                num: "04",
                name: "Gaming",
                href: "/gaming",
                desc: "AI coaching and performance analytics for competitive players. Pattern recognition across sessions, not just moments.",
                accent: "#e07340",
              },
              {
                num: "05",
                name: "Sovereign",
                href: "/os/sovereign",
                desc: "The data and governance layer. End-to-end encrypted memory, zero training on your conversations, full portable export.",
                accent: "#8b7355",
              },
            ].map((module) => (
              <a
                key={module.href}
                href={module.href}
                className="group flex items-start gap-6 p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#c9a84c]/30 hover:bg-white/[0.05] transition-all"
              >
                <div className="flex-shrink-0 flex flex-col items-center gap-1 pt-0.5">
                  <span className="font-mono text-xs font-black text-[#f5f0e8]/30">{module.num}</span>
                  <div className="w-1 h-8 rounded-full" style={{ backgroundColor: module.accent }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3
                      className="font-black text-lg tracking-tight"
                      style={{ color: module.accent }}
                    >
                      {module.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[#f5f0e8]/55 leading-relaxed">{module.desc}</p>
                </div>
                <ArrowRight
                  className="w-4 h-4 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: module.accent }}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION DIVIDER ──────────────────────────────── */}
      <div className="section-divider" />

      {/* ─── THE COMPLETE URL MAP ─────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#a0a0b8] block mb-4">
              Deep dives
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
              The Complete URL Map
            </h2>
            <p className="text-[#a0a0b8] max-w-xl mx-auto">
              Every layer of MEOK OS has its own detailed page. Explore each one below.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {OS_SUBPAGES.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group p-6 rounded-2xl glass-card hover:border-[#c9a84c]/40 transition-all"
              >
                <h3 className="font-bold text-base mb-2 text-white group-hover:text-[#c9a84c] transition-colors">
                  {page.label}
                </h3>
                <p className="text-sm text-[#a0a0b8] leading-relaxed mb-4">{page.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs text-[#c9a84c] font-semibold group-hover:gap-2 transition-all">
                  Read more <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION DIVIDER ──────────────────────────────── */}
      <div className="section-divider" />

      {/* ─── WORKS WITH ANY LLM ───────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#a0a0b8] block mb-6">
            LLM agnostic
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#f5f0e8] mb-4 tracking-tight">
            MEOK connects all your LLMs.
          </h2>
          <p className="text-[#f5f0e8]/55 mb-12 max-w-xl mx-auto leading-relaxed">
            GPT-4o, Claude, Gemini, Mistral, LLaMA — MEOK is the OS layer on top. Switch models without losing your memory. Pay wholesale, not retail.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {LLM_BADGES.map((llm) => (
              <span
                key={llm}
                className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-sm text-[#f5f0e8]/65 font-medium hover:border-[#c9a84c]/40 hover:text-[#f5f0e8] transition-all"
              >
                {llm}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION DIVIDER ──────────────────────────────── */}
      <div className="section-divider" />

      {/* ─── FINAL CTA ────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-[#c9a84c]/30 bg-[#16161f] p-12 text-center">
            {/* Blob background inside CTA */}
            <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
              <div className="blob-gold absolute -top-20 -left-20 w-64 h-64 opacity-20" />
              <div className="blob-purple absolute -bottom-20 -right-20 w-64 h-64 opacity-15" />
              <div
                className="absolute inset-0"
                style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 60%)" }}
              />
            </div>
            <div className="relative">
              <h2 className="text-4xl font-black mb-3 text-white tracking-tight">
                One OS. Your whole life.
              </h2>
              <p className="text-[#a0a0b8] mb-8 max-w-md mx-auto">
                Free to start. No credit card. Your first sovereign AI is 3 minutes away.
              </p>
              <Link
                href="/hatch"
                className="inline-flex items-center gap-2 px-10 py-3.5 rounded-full bg-[#c9a84c] text-[#1a1a2e] font-semibold hover:bg-[#b8963e] transition-all text-sm shadow-lg gold-glow"
              >
                Choose your AI companion <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
