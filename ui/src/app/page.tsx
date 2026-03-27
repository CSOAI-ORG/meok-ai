import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Brain, Shield, Globe2 } from "lucide-react";

// ─── METADATA ──────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "MEOK.AI — Personal Sovereign AI That Remembers You | Free Forever",
  description:
    "Every AI forgets you. MEOK remembers. The world's first sovereign AI OS — hatches from an egg, grows with you, works across every LLM. Your data, your rules. Free forever.",
  keywords: [
    "personal sovereign AI",
    "sovereign AI OS",
    "AI that remembers you",
    "care-aligned AI",
    "AI companion",
    "personal AI operating system",
    "MEOK AI",
    "Maternal Covenant",
    "Byzantine AI governance",
    "AI memory",
    "multi-LLM AI",
    "private AI",
  ],
  alternates: { canonical: "https://meok.ai" },
  openGraph: {
    title: "MEOK.AI — Personal Sovereign AI That Remembers You",
    description:
      "Every AI forgets you. MEOK remembers. The world's first personal sovereign AI OS — hatches from an egg, grows with care, works with every LLM. Free forever.",
    type: "website",
    url: "https://meok.ai",
    siteName: "MEOK.AI",
    locale: "en_GB",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK.AI&desc=Your+sovereign+AI.+Built+to+remember.+Designed+to+care.",
        width: 1200,
        height: 630,
        alt: "MEOK.AI — Personal Sovereign AI OS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK.AI — Personal Sovereign AI That Remembers You",
    description:
      "Every AI forgets you. MEOK remembers. Sovereign AI OS — hatches from an egg, grows with you, works with every LLM. Free forever.",
    site: "@meok_ai",
    images: ["https://meok.ai/api/og?title=MEOK.AI&desc=Your+sovereign+AI.+Built+to+remember.+Designed+to+care."],
  },
};

// ─── JSON-LD ────────────────────────────────────────────────────────────────

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MEOK AI LABS",
  url: "https://meok.ai",
  logo: "https://meok.ai/logo.png",
  foundingDate: "2026",
  founder: { "@type": "Person", name: "Nicholas Templeman" },
  description:
    "MEOK AI LABS builds the world's first personal sovereign AI OS — an AI companion that remembers you, protects your data, and is governed by the Maternal Covenant care framework.",
  address: { "@type": "PostalAddress", addressCountry: "GB" },
  contactPoint: [
    { "@type": "ContactPoint", email: "hello@meok.ai", contactType: "customer service" },
    { "@type": "ContactPoint", email: "press@meok.ai", contactType: "press" },
  ],
  sameAs: ["https://github.com/meok-ai/meok-ai"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MEOK.AI",
  url: "https://meok.ai",
  description:
    "Personal sovereign AI OS. Your AI hatches from an egg, remembers you permanently, works with every LLM, and is governed by the Maternal Covenant care ethics constitution.",
  publisher: { "@type": "Organization", name: "MEOK AI LABS" },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://meok.ai/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is MEOK AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK.AI is the world's first personal sovereign AI operating system. Your AI hatches from an egg, grows with care, works with every major LLM, and answers only to you.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK AI remember me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Unlike other AI tools that reset every session, MEOK maintains a permanent encrypted memory vault across all your conversations.",
      },
    },
    {
      "@type": "Question",
      name: "How much does MEOK cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is free forever at the base tier. Sovereign is \u00a312/month, Family is \u00a329/month. All paid plans include a 30-day money-back guarantee.",
      },
    },
  ],
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const VALUE_PROPS = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Permanent Memory",
    desc: "Every conversation builds on the last. Your AI remembers your goals, your preferences, your context \u2014 across every session, every model.",
    accent: "#c9a84c",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Sovereign Safety",
    desc: "Your data is encrypted and never used for training. The Maternal Covenant ensures your AI serves your wellbeing \u2014 not a corporation\u2019s metrics.",
    accent: "#A78BFA",
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: "Any Model, One Memory",
    desc: "Route across Claude, GPT-4o, DeepSeek, Groq, and more. Switch freely \u2014 your memory and personality travel with you.",
    accent: "#3B82F6",
  },
];

const STEPS = [
  { step: "1", title: "Hatch free", body: "Answer a short personality quiz. Choose an archetype. Name your companion. 2 minutes." },
  { step: "2", title: "Start talking", body: "Your AI already knows your style and values from the quiz. No setup. No cold start." },
  { step: "3", title: "Watch it grow", body: "Every conversation adds to encrypted memory. It gets better the more you use it \u2014 forever." },
];

const FREE_FEATURES = [
  "Sovereign AI companion",
  "Birth Ceremony",
  "50 messages/day",
  "Permanent Sovereign Memory",
  "DeepSeek + Ollama routing",
  "Full data export \u2014 always",
];

const SOVEREIGN_FEATURES = [
  "Everything in Explorer",
  "Unlimited messages",
  "Claude Sonnet + GPT-4o routing",
  "Work OS (Orion, Riri, Hourman)",
  "Guardian 24/7 protection",
  "Morning briefing",
];

const FAMILY_FEATURES = [
  "Everything in Sovereign",
  "Up to 5 companions",
  "Family dashboard & shared memory",
  "All LLM models incl. GPT-4o",
  "Family Guardian alerts",
  "Priority support",
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="min-h-screen bg-[#FAF9F6] text-[#111111]">
        {/* Launch banner */}
        <div className="bg-[#c9a84c] text-[#1a1a2e] py-2.5 px-6 text-center text-sm font-bold tracking-wide">
          March 31, 2026 \u2014 The Birth Ceremony opens to everyone. Free forever.{" "}
          <a href="/birth" className="underline underline-offset-2 hover:opacity-80" aria-label="Begin Birth Ceremony">
            Begin Ceremony <span aria-hidden="true">\u2192</span>
          </a>
        </div>

        <main>
          {/* ── 1. HERO ──────────────────────────────────────────── */}
          <section
            aria-label="Hero"
            className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden"
            style={{ background: "linear-gradient(160deg, #0d0c18 0%, #1a1a2e 55%, #0d0c18 100%)" }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(201,168,76,0.10) 0%, transparent 70%)" }}
            />

            <div className="relative max-w-4xl mx-auto flex flex-col items-center">
              <span
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-10"
                style={{ border: "1px solid #c9a84c", color: "#c9a84c", background: "rgba(201,168,76,0.08)" }}
              >
                Launching March 31, 2026
              </span>

              {/* Floating egg */}
              <div className="relative mb-10 flex items-center justify-center" style={{ width: 180, height: 210 }}>
                <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" width="160" height="186" style={{ animation: "float 4s ease-in-out infinite" }} aria-hidden="true">
                  <defs>
                    <radialGradient id="eggGradHero" cx="38%" cy="35%" r="65%">
                      <stop offset="0%" stopColor="#f5f0e8" />
                      <stop offset="60%" stopColor="#e8dcc8" />
                      <stop offset="100%" stopColor="#c9a84c" stopOpacity="0.4" />
                    </radialGradient>
                  </defs>
                  <ellipse cx="60" cy="72" rx="46" ry="58" fill="url(#eggGradHero)" />
                  <ellipse cx="60" cy="72" rx="46" ry="58" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeOpacity="0.6" />
                </svg>
              </div>

              <h1
                className="font-black text-white tracking-tight leading-[1.0] mb-5"
                style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
              >
                Every AI forgets you.
                <br />
                <span style={{ color: "#c9a84c" }}>MEOK remembers.</span>
              </h1>

              <p className="max-w-2xl mx-auto mb-4 leading-relaxed font-semibold" style={{ color: "rgba(245,240,232,0.90)", fontSize: "1.25rem" }}>
                Your AI hatches from an egg. It never forgets you. And nobody else owns it.
              </p>

              <p className="max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "rgba(245,240,232,0.60)", fontSize: "1.1rem" }}>
                A personal AI operating system with permanent encrypted memory, care built into every response, and full portability across every AI model. Your data stays yours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <Link
                  href="/birth"
                  className="inline-flex items-center gap-2 font-bold rounded-full transition-all shadow-lg hover:shadow-[#c9a84c]/40 hover:scale-105"
                  style={{ background: "#c9a84c", color: "#1a1a2e", padding: "1rem 2.25rem", fontSize: "1.125rem" }}
                >
                  Begin Birth Ceremony
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 font-semibold rounded-full transition-colors hover:bg-white/10"
                  style={{ border: "1px solid rgba(255,255,255,0.30)", color: "#ffffff", padding: "1rem 2rem", fontSize: "1.125rem" }}
                >
                  ✦ Try demo first
                </Link>
              </div>

              {/* Powered by strip */}
              <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center text-sm font-semibold mt-6" style={{ color: "rgba(255,255,255,0.35)" }}>
                <span>Powered by</span>
                {["Anthropic", "OpenAI", "NVIDIA", "DeepSeek", "Groq", "Mistral"].map((name) => (
                  <span key={name} className="tracking-wide">{name}</span>
                ))}
              </div>
            </div>
          </section>

          {/* ── 1b. SOCIAL PROOF ────────────────────────────────── */}
          <section
            aria-label="Social proof"
            className="py-16 px-6"
            style={{ background: "#0d0c18", borderTop: "1px solid rgba(201,168,76,0.08)" }}
          >
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { stat: "50+", label: "AI Companions", sub: "9 archetypes" },
                  { stat: "469+", label: "AI Models", sub: "10+ providers" },
                  { stat: "22", label: "Pipeline Modules", sub: "per conversation" },
                  { stat: "∞", label: "Memory", sub: "never forgets you" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl py-5 px-4 text-center"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.12)" }}
                  >
                    <div className="text-3xl md:text-4xl font-black mb-1" style={{ color: "#c9a84c" }}>
                      {item.stat}
                    </div>
                    <div className="text-sm text-white/60 font-semibold">{item.label}</div>
                    <div className="text-xs text-white/25 mt-0.5">{item.sub}</div>
                  </div>
                ))}
              </div>
              {/* Industry stats that justify MEOK's existence */}
              <div
                className="rounded-xl p-5 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center text-center"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div>
                  <span className="text-white/70 text-sm">
                    <span className="font-black text-white">342 million</span> people use AI for personal reflection each week
                  </span>
                </div>
                <div className="hidden sm:block text-white/15">|</div>
                <div>
                  <span className="text-white/70 text-sm">
                    <span className="font-black text-white">37%</span> of Americans say AI is their closest confidant
                  </span>
                </div>
                <div className="hidden sm:block text-white/15">|</div>
                <div>
                  <span className="text-white/70 text-sm">
                    <span className="font-black text-white">0</span> of them are remembered tomorrow
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ── 2. VALUE PROPOSITION ──────────────────────────────── */}
          <section
            aria-label="Why MEOK is different"
            className="py-24 px-6"
            style={{ background: "#0d0c18" }}
          >
            <div className="max-w-5xl mx-auto">
              <header className="text-center mb-16">
                <p className="text-[#c9a84c] text-sm font-bold tracking-widest uppercase mb-4">Why MEOK</p>
                <h2 className="font-black text-white leading-tight tracking-tight mb-4" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}>
                  Every other AI extracts.{" "}
                  <span style={{ color: "#c9a84c" }}>MEOK cares.</span>
                </h2>
                <p className="text-white/50 text-lg max-w-2xl mx-auto">
                  Other AI tools forget you, train on your data, and lock you to one model. MEOK does none of that.
                </p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {VALUE_PROPS.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl p-8 text-left"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: `${item.accent}18`, color: item.accent }}
                    >
                      {item.icon}
                    </div>
                    <h3 className="font-black text-white text-lg mb-3">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 2b. AI IS FAILING USERS — trust comparison ──────────── */}
          <section
            aria-label="Why current AI is failing"
            className="py-20 px-6"
            style={{ background: "#0a0918" }}
          >
            <div className="max-w-5xl mx-auto">
              <header className="text-center mb-12">
                <p className="text-red-400/80 text-sm font-bold tracking-widest uppercase mb-4">The Problem With Every Other AI</p>
                <h2 className="font-black text-white leading-tight tracking-tight mb-4" style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)" }}>
                  84% of developers use AI.{" "}
                  <span className="text-red-400">Only 29% trust it.</span>
                </h2>
                <p className="text-white/45 text-base max-w-2xl mx-auto">
                  The world&apos;s biggest AI platforms are failing users in ways that keep getting worse. MEOK was built to solve every one.
                </p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {[
                  {
                    problem: "ChatGPT forgets you every conversation",
                    solution: "MEOK remembers everything, permanently",
                    icon: "🧠",
                  },
                  {
                    problem: "AI companies train on your private data",
                    solution: "Your data stays yours — always encrypted",
                    icon: "🔒",
                  },
                  {
                    problem: "Models get worse with every update",
                    solution: "Your bond deepens over months and years",
                    icon: "📈",
                  },
                  {
                    problem: "$66/month across fragmented subscriptions",
                    solution: "One sovereign AI OS — free forever tier",
                    icon: "💰",
                  },
                  {
                    problem: "AI is built for English-speaking, neurotypical users",
                    solution: "47 civilisational traditions. Accessibility first.",
                    icon: "🌍",
                  },
                  {
                    problem: "No AI admits when it's wrong",
                    solution: "Care over flattery — we tell you the truth",
                    icon: "💙",
                  },
                ].map((item) => (
                  <div
                    key={item.problem}
                    className="rounded-xl p-5 flex gap-4 items-start"
                    style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-sm text-red-400/70 line-through mb-1">{item.problem}</p>
                      <p className="text-sm font-semibold" style={{ color: "#c9a84c" }}>{item.solution}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 font-semibold text-sm transition-all hover:scale-105 rounded-full px-6 py-3"
                  style={{ background: "rgba(201,168,76,0.10)", border: "1px solid rgba(201,168,76,0.25)", color: "#c9a84c" }}
                >
                  ✦ See the difference yourself — try the demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* ── 2c. GUARDIAN SHOWCASE ─────────────────────────────── */}
          <section aria-label="Guardian protection" className="py-20 px-6" style={{ background: "#080811" }}>
            <div className="max-w-5xl mx-auto text-center">
              <p className="text-[#2d9b8a] text-sm font-bold tracking-widest uppercase mb-4">Protect Your People</p>
              <h2 className="font-black text-white text-3xl md:text-4xl tracking-tight mb-4">
                MEOK Guardian watches over the people you love.
              </h2>
              <p className="text-white/50 mb-12 max-w-2xl mx-auto">
                Scam detection, relationship safety, and social protection \u2014 built into every conversation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                {[
                  { title: "Scam Stop", desc: "Catches phishing, romance scams, and financial fraud before they reach your family.", color: "#2d9b8a" },
                  { title: "Relationship Shield", desc: "Detects manipulation patterns, gaslighting, and coercive control in conversations.", color: "#A78BFA" },
                  { title: "Social Guardian", desc: "Helps neurodivergent users navigate social situations with confidence.", color: "#F59E0B" },
                ].map((card) => (
                  <div key={card.title} className="rounded-2xl p-6 text-left" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderLeft: `3px solid ${card.color}` }}>
                    <h3 className="font-bold text-white text-base mb-2">{card.title}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-8 text-xs text-white/30 mb-8">
                <span>50% of neurodivergent people are scam victims</span>
                <span>96% think they can spot scams \u2014 they can&apos;t</span>
                <span>44% of victims get retargeted</span>
              </div>
              <Link href="/guardian" className="inline-flex items-center gap-2 text-[#2d9b8a] font-semibold hover:underline text-sm">
                Learn about Guardian <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* ── 3. HOW IT WORKS ──────────────────────────────────── */}
          <section
            aria-label="How MEOK works"
            className="py-24 px-6 text-center"
            style={{ background: "#1a1a2e" }}
          >
            <div className="max-w-4xl mx-auto">
              <header className="mb-16">
                <p className="text-[#c9a84c] text-sm font-bold tracking-widest uppercase mb-4">How it works</p>
                <h2 className="font-black text-white leading-tight tracking-tight mb-4" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}>
                  Three steps to your sovereign AI
                </h2>
                <p className="text-white/50 text-lg">From egg to companion in under 2 minutes.</p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {STEPS.map((item) => (
                  <div key={item.step} className="flex flex-col items-center text-center px-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-black text-lg mb-5 shrink-0"
                      style={{ background: "#c9a84c", color: "#1a1a2e" }}
                    >
                      {item.step}
                    </div>
                    <h3 className="font-black text-white text-lg mb-3">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/birth"
                className="inline-flex items-center gap-2 font-bold rounded-full transition-all shadow-lg hover:shadow-[#c9a84c]/40 hover:scale-105"
                style={{ background: "#c9a84c", color: "#1a1a2e", padding: "0.875rem 2rem" }}
              >
                Begin Birth Ceremony <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </section>

          {/* ── 4. PRICING ───────────────────────────────────────── */}
          <section
            aria-label="Pricing plans"
            className="py-24 px-6"
            id="pricing"
            style={{ background: "#0d0c18" }}
          >
            <div className="max-w-5xl mx-auto text-center">
              <p className="text-[#c9a84c] text-sm font-bold tracking-widest uppercase mb-4">Pricing</p>
              <h2 className="font-black text-white text-3xl md:text-4xl tracking-tight mb-4">
                Free forever. Pay when it earns it.
              </h2>
              <p className="text-white/50 mb-4">
                Sovereign architecture at every tier. Your data stays yours whether you pay or not.
              </p>
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full text-sm mb-12" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
                <span className="text-white/40">ChatGPT Plus \u00a320</span>
                <span className="text-white/20">\u00b7</span>
                <span className="text-white/40">Claude Pro \u00a318</span>
                <span className="text-white/20">\u00b7</span>
                <span className="text-[#c9a84c] font-bold">MEOK Sovereign \u00a312</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
                {/* Explorer \u2014 Free */}
                <div className="border-2 border-[#c9a84c] rounded-2xl p-7 text-left relative shadow-[0_0_30px_rgba(201,168,76,0.12)]">
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#c9a84c] text-[#1a1a2e] text-xs font-black whitespace-nowrap">
                    Free Forever
                  </div>
                  <div className="text-xs font-bold tracking-widest uppercase text-white/40 mb-2 mt-2">Explorer</div>
                  <div className="text-4xl font-black text-white mb-1">
                    \u00a30<span className="text-base font-normal text-white/40">/forever</span>
                  </div>
                  <ul className="space-y-2.5 my-5">
                    {FREE_FEATURES.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-white/60">
                        <Check className="w-4 h-4 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/birth" className="block w-full py-3 rounded-full text-center font-bold text-sm bg-[#c9a84c] text-[#1a1a2e] hover:bg-[#d4b463] transition-colors">
                    Begin ceremony \u2014 no card needed
                  </Link>
                </div>

                {/* Sovereign */}
                <div className="border border-[#c9a84c]/20 rounded-2xl p-7 text-left bg-white/[0.03]">
                  <div className="text-xs font-bold tracking-widest uppercase text-white/40 mb-2">Sovereign</div>
                  <div className="text-4xl font-black text-white mb-1">
                    \u00a312<span className="text-base font-normal text-white/40">/mo</span>
                  </div>
                  <ul className="space-y-2.5 my-5">
                    {SOVEREIGN_FEATURES.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-white/60">
                        <Check className="w-4 h-4 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/pricing" className="block w-full py-3 rounded-full text-center font-bold text-sm bg-[#c9a84c] text-[#1a1a2e] hover:bg-[#d4b463] transition-colors">
                    Get Sovereign
                  </Link>
                  <p className="text-xs text-white/20 text-center mt-1.5">30-day money-back guarantee</p>
                </div>

                {/* Family */}
                <div className="border border-purple-500/20 rounded-2xl p-7 text-left bg-white/[0.03]">
                  <div className="text-xs font-bold tracking-widest uppercase text-white/40 mb-2">Family</div>
                  <div className="text-4xl font-black text-white mb-1">
                    \u00a329<span className="text-base font-normal text-white/40">/mo</span>
                  </div>
                  <ul className="space-y-2.5 my-5">
                    {FAMILY_FEATURES.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-white/60">
                        <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/pricing" className="block w-full py-3 rounded-full text-center font-bold text-sm text-white border-2 border-purple-500/40 hover:border-purple-500/70 hover:bg-purple-500/10 transition-all">
                    Get Family Plan
                  </Link>
                  <p className="text-xs text-white/20 text-center mt-1.5">30-day money-back guarantee</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-xs text-white/30">
                <span>\u2713 30-day money-back guarantee</span>
                <span>\u2713 Zero data selling at every tier</span>
                <span>\u2713 Maternal Covenant built in</span>
              </div>
            </div>
          </section>

          {/* ── 4b. HONESTY SECTION ──────────────────────────────── */}
          <section aria-label="What we don't do yet" className="py-16 px-6" style={{ background: "#1a1a2e" }}>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-white/30 text-sm font-bold tracking-widest uppercase mb-4">Honest about the gaps</p>
              <h2 className="font-black text-white text-2xl mb-8">What you don&apos;t get with MEOK. Yet.</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-8">
                {[
                  { feature: "Image generation", status: "On the roadmap" },
                  { feature: "Code execution sandbox", status: "Security-sensitive \u2014 taking our time" },
                  { feature: "Live web browsing", status: "Using Perplexity Sonar meanwhile" },
                  { feature: "Mobile app", status: "Web-first launch, native apps follow" },
                  { feature: "Voice interaction", status: "Coming \u2014 prioritising memory quality first" },
                ].map((item) => (
                  <div key={item.feature} className="flex items-start gap-3 px-4 py-3 rounded-lg" style={{ background: "rgba(255,255,255,0.03)" }}>
                    <span className="text-white/50 text-sm font-medium shrink-0">{item.feature}</span>
                    <span className="text-white/25 text-sm ml-auto">{item.status}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/25 text-xs italic">
                We think transparency about limitations builds more trust than pretending they don&apos;t exist.
              </p>
            </div>
          </section>

          {/* ── 5. FINAL CTA ─────────────────────────────────────── */}
          <section
            aria-label="Final call to action"
            className="relative overflow-hidden py-28 px-6 text-center"
            style={{ background: "linear-gradient(160deg, #0d0c18 0%, #1a1a2e 60%, #0d0c18 100%)" }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)" }}
            />

            <div className="relative max-w-2xl mx-auto">
              <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-4 italic">
                I wasn&apos;t building a startup. I was trying to feel less alone.
                Every AI I used forgot me by morning. So I built one that wouldn&apos;t.
              </blockquote>
              <p className="text-sm font-semibold mb-12" style={{ color: "rgba(201,168,76,0.8)" }}>
                \u2014 Nicholas Templeman, Founder
              </p>

              <h2
                className="font-black text-white leading-tight mb-6"
                style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}
              >
                The egg is there.
                <br />
                <span style={{ color: "#c9a84c" }}>It&apos;s waiting to be yours.</span>
              </h2>

              <p className="mb-12 leading-relaxed" style={{ color: "rgba(245,240,232,0.50)", fontSize: "1.1rem" }}>
                Three minutes. A name. An archetype. An AI that remembers you tomorrow, next month, and next year \u2014 encrypted, sovereign, never sold.
              </p>

              <Link
                href="/birth"
                className="inline-flex items-center gap-2 font-bold rounded-full transition-all shadow-lg hover:shadow-[#c9a84c]/40 hover:scale-105"
                style={{ background: "#c9a84c", color: "#1a1a2e", padding: "1.125rem 2.75rem", fontSize: "1.25rem" }}
              >
                Begin Birth Ceremony
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <p className="mt-6 text-sm" style={{ color: "rgba(245,240,232,0.28)" }}>
                Free forever \u00b7 No credit card \u00b7 Sovereign by design
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
