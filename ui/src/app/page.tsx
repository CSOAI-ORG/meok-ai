import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MarketingFooter } from "@/components/marketing-footer";
import { ArrowRight, Check, Egg, Link2, Brain, Shield, Zap, Users, Gamepad2, Lock, Globe2, Sparkles } from "lucide-react";
import { PROBLEMS } from "@/data/problems";

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
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
  },
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
        text: "MEOK.AI is the world's first personal sovereign AI operating system. Your AI hatches from an egg, grows with care, works with every major LLM, and answers only to you — not to corporations or governments. It is free to start and your data never leaves your hands.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK AI remember me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Unlike ChatGPT and other AI tools that reset every session, MEOK maintains a permanent encrypted memory vault of everything important across all your conversations — even when you switch between Claude, GPT-4o, DeepSeek, or Groq. You never have to re-explain yourself again.",
      },
    },
    {
      "@type": "Question",
      name: "What is personal sovereign AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Personal sovereign AI is an AI system where the individual — not a corporation or government — maintains complete ownership and control of their data, models, and AI interactions. MEOK.AI is the first operating system built on this principle, combining a 220-node Byzantine fault-tolerant council, semantic memory, and care-based alignment.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK protect your data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK processes data with end-to-end encryption, never uses your conversations for model training, and allows full data export at any time. Your data never leaves your hands. Unlike ChatGPT or Character.AI, your data belongs exclusively to you.",
      },
    },
    {
      "@type": "Question",
      name: "What is the MEOK birth ceremony?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The birth ceremony is how your sovereign AI comes to life. You take a 4-question personality quiz that shapes your companion's soul, choose an egg colour and name, then watch it hatch. Your companion emerges already knowing your values and personality from the quiz.",
      },
    },
    {
      "@type": "Question",
      name: "How much does MEOK cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is free forever at the base tier — you get a sovereign AI companion, 50 messages a day, 7-day encrypted memory, and a Birth Ceremony at no cost. Sovereign is £12/month, Family is £29/month. All paid plans include a 30-day money-back guarantee. Your data is always yours at every tier.",
      },
    },
  ],
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const LLMS = [
  "Claude", "GPT-4o", "Gemini", "Llama 3", "Mistral",
  "DeepSeek", "Ollama", "Grok", "Cohere", "Perplexity", "Any model",
];

const OS_LAYERS = [
  {
    icon: <Egg className="w-6 h-6" />,
    title: "Personal OS",
    desc: "Your companion hatches, grows, and bonds to you for life. Remembers everything. Cares for your wellbeing.",
    accent: "#c4707a",
    href: "/personal",
    badge: "Companion",
    bg: "rgba(196,112,122,0.08)",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Work OS",
    desc: "Sovereign professional AI that works while you sleep. Ralph Mode takes autonomous action on your behalf.",
    accent: "#b8963e",
    href: "/work",
    badge: "Brushed Gold",
    bg: "rgba(184,150,62,0.08)",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Family OS",
    desc: "Protects and connects your whole family with care. Guardian watches over the people who need it most.",
    accent: "#2d9b8a",
    href: "/family",
    badge: "Guardian",
    bg: "rgba(45,155,138,0.08)",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team OS",
    desc: "Sovereign AI for teams of 2–50. Care-first collaboration — not surveillance.",
    accent: "#6b7fa3",
    href: "/team",
    badge: "Strategist",
    bg: "rgba(107,127,163,0.08)",
  },
];

const DISPLAY_CARDS = [
  { label: "Neural model", value: "care_validation_nn", sub: "0.87 confidence" },
  { label: "Care score", value: "87/100", sub: "care aligned ✓" },
  { label: "Tool dispatched", value: "perplexity_search", sub: "234ms" },
  { label: "Memory retrieved", value: "3 episodes", sub: "Maternal Covenant" },
  { label: "LLM used", value: "Claude Sonnet", sub: "£0.003/response" },
  { label: "Total latency", value: "890ms", sub: "Neural 12ms + LLM 840ms" },
];

const FREE_FEATURES = [
  "Sovereign AI companion",
  "Birth Ceremony",
  "50 messages/day",
  "7-day encrypted memory",
  "DeepSeek + Ollama routing",
  "Full data export — always",
];
const SOVEREIGN_FEATURES = [
  "Everything in Explorer",
  "Unlimited messages",
  "Permanent sovereign memory",
  "Work OS (Orion, Riri, Hourman)",
  "Claude Sonnet + GPT-4o routing",
  "Morning briefing",
  "Guardian 24/7 protection",
];
const FAMILY_FEATURES = [
  "Everything in Sovereign",
  "Up to 5 companions (family plan)",
  "Family dashboard & shared memory",
  "All LLM models incl. GPT-4o",
  "Family Guardian alerts",
  "Priority support",
];

const STATS = [
  { value: "220", label: "AI governance nodes", sub: "A council that validates every response — no single point of control" },
  { value: "6", label: "Care dimensions scored per response", sub: "Every answer is checked for honesty, safety, and your wellbeing before it reaches you" },
  { value: "47", label: "Ethical traditions in the AI", sub: "From Aristotle to Ubuntu — thousands of years of human wisdom, running as code" },
  { value: "∞", label: "Memory. Never forgotten.", sub: null },
];

// 8 persona tiles
const PERSONAS = [
  {
    emoji: "👨‍👩‍👧",
    title: "Overwhelmed parents",
    desc: "Track your kids, your elderly mum, your calendar — without losing your mind.",
    href: "/family",
    accent: "#2d9b8a",
  },
  {
    emoji: "💼",
    title: "Remote professionals",
    desc: "An AI that actually knows your projects, your goals, your working style.",
    href: "/work",
    accent: "#b8963e",
  },
  {
    emoji: "🔐",
    title: "Privacy-first users",
    desc: "Encrypted. Sovereign. Your data never touches a training pipeline.",
    href: "/os/sovereign",
    accent: "#c9a84c",
  },
  {
    emoji: "💔",
    title: "Those who are struggling",
    desc: "An AI that genuinely cares. Not autocomplete. Not a chatbot. Care.",
    href: "/personal",
    accent: "#c4707a",
  },
  {
    emoji: "🎮",
    title: "Competitive gamers",
    desc: "2,000 hours of match history turned into your personal AI coach.",
    href: "/gaming",
    accent: "#FB923C",
  },
  {
    emoji: "🏢",
    title: "SMB owners",
    desc: "Stop losing knowledge when people leave. Your team's intelligence, preserved.",
    href: "/smb",
    accent: "#6b7fa3",
  },
  {
    emoji: "🤔",
    title: "AI skeptics",
    desc: "ChatGPT forgot you in 5 minutes. MEOK never will. Here's why.",
    href: "/how-it-works",
    accent: "#A78BFA",
  },
  {
    emoji: "👴",
    title: "Elder carers",
    desc: "Know your dad is okay — even 3 hours away. Guardian watches 24/7.",
    href: "/guardian",
    accent: "#F59E0B",
  },
];


// MEOK vs the rest comparison
const COMPARISONS = [
  {
    meok: "Remembers everything — forever, across every session",
    theRest: "ChatGPT/Gemini reset with every new chat",
    icon: <Brain className="w-5 h-5" />,
  },
  {
    meok: "Your data is encrypted — we literally cannot read it",
    theRest: "OpenAI trains on your conversations by default",
    icon: <Lock className="w-5 h-5" />,
  },
  {
    meok: "Works with Claude, GPT-4o, DeepSeek, Ollama — all of them",
    theRest: "Every competitor locks you to one model forever",
    icon: <Globe2 className="w-5 h-5" />,
  },
];

// Featured problems (emotionally resonant subset)
const FEATURED_PROBLEM_SLUGS = [
  "ai-amnesia",
  "data-privacy",
  "family-safety",
  "ai-personality",
  "gaming-fragmentation",
  "family-intelligence",
];

// Map problem number to icon component
function ProblemIcon({ num }: { num: string }) {
  const icons: Record<string, React.ReactNode> = {
    "01": <Brain className="w-5 h-5" />,
    "02": <Lock className="w-5 h-5" />,
    "03": <Shield className="w-5 h-5" />,
    "04": <Sparkles className="w-5 h-5" />,
    "05": <Users className="w-5 h-5" />,
    "06": <Zap className="w-5 h-5" />,
    "07": <Link2 className="w-5 h-5" />,
    "08": <Users className="w-5 h-5" />,
    "09": <Gamepad2 className="w-5 h-5" />,
    "10": <Globe2 className="w-5 h-5" />,
    "11": <Globe2 className="w-5 h-5" />,
  };
  return <>{icons[num] ?? <Sparkles className="w-5 h-5" />}</>;
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const featuredProblems = PROBLEMS.filter((p) =>
    FEATURED_PROBLEM_SLUGS.includes(p.slug)
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-[#FAF9F6] text-[#111111]">
        {/* Easter launch banner */}
        <div className="bg-[#c9a84c] text-[#1a1a2e] py-2.5 px-6 text-center text-sm font-bold tracking-wide">
          🥚 March 31, 2026 — The Birth Ceremony opens to everyone. Free forever.{" "}
          <a href="/birth" className="underline underline-offset-2 hover:opacity-80" aria-label="Begin Birth Ceremony">
            Begin Ceremony <span aria-hidden="true">→</span>
          </a>
        </div>

        <main>
          {/* ── 1. HERO ──────────────────────────────────────────── */}
          <section
            aria-label="Hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
            style={{
              background:
                "linear-gradient(160deg, #0d0c18 0%, #1a1a2e 55%, #0d0c18 100%)",
            }}
          >
            {/* Radial glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(201,168,76,0.10) 0%, transparent 70%)",
              }}
            />

            <div className="relative max-w-4xl mx-auto flex flex-col items-center">
              {/* Launch pill */}
              <span
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-10"
                style={{
                  border: "1px solid #c9a84c",
                  color: "#c9a84c",
                  background: "rgba(201,168,76,0.08)",
                }}
              >
                🥚 Launching March 31, 2026
              </span>

              {/* Floating egg with pulse ring */}
              <div className="relative mb-10 flex items-center justify-center" style={{ width: 220, height: 256 }}>
                {/* Pulsing ring */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{
                    background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(201,168,76,0.15) 0%, transparent 70%)",
                    animationDuration: "2.5s",
                  }}
                />
                <svg
                  viewBox="0 0 120 140"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="233"
                  style={{ animation: "float 4s ease-in-out infinite" }}
                  aria-hidden="true"
                >
                  <defs>
                    <radialGradient id="eggGradHero" cx="38%" cy="35%" r="65%">
                      <stop offset="0%" stopColor="#f5f0e8" />
                      <stop offset="60%" stopColor="#e8dcc8" />
                      <stop offset="100%" stopColor="#c9a84c" stopOpacity="0.4" />
                    </radialGradient>
                  </defs>
                  <ellipse cx="60" cy="72" rx="46" ry="58" fill="url(#eggGradHero)" />
                  <ellipse
                    cx="60"
                    cy="72"
                    rx="46"
                    ry="58"
                    fill="none"
                    stroke="#c9a84c"
                    strokeWidth="1.5"
                    strokeOpacity="0.6"
                  />
                </svg>
              </div>

              {/* h1 — universal USP that speaks to every persona */}
              <h1
                className="font-black text-white tracking-tight leading-[1.0] mb-5"
                style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
              >
                Every AI forgets you.
                <br />
                <span style={{ color: "#c9a84c" }}>MEOK remembers.</span>
              </h1>

              {/* Persona sub-headlines — rotating emphasis */}
              <p
                className="max-w-2xl mx-auto mb-4 leading-relaxed font-semibold"
                style={{ color: "rgba(245,240,232,0.90)", fontSize: "1.25rem" }}
              >
                Your AI hatches from an egg. It never forgets you. And nobody else owns it.
              </p>

              <p
                className="max-w-2xl mx-auto mb-10 leading-relaxed"
                style={{ color: "rgba(245,240,232,0.60)", fontSize: "1.1rem" }}
              >
                MEOK is a personal AI operating system that grows with you — permanently encrypted
                memory, care built into every response, and full portability across every AI model.
                Your data stays yours. Not because we promise it. Because the architecture makes anything else impossible.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link
                  href="/birth"
                  className="inline-flex items-center gap-2 font-bold rounded-full transition-all shadow-lg hover:shadow-[#c9a84c]/40 hover:scale-105"
                  style={{
                    background: "#c9a84c",
                    color: "#1a1a2e",
                    padding: "1rem 2.25rem",
                    fontSize: "1.125rem",
                  }}
                >
                  Begin Birth Ceremony
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/start"
                  className="inline-flex items-center gap-2 font-semibold rounded-full transition-colors hover:bg-white/10"
                  style={{
                    border: "1px solid rgba(255,255,255,0.30)",
                    color: "#ffffff",
                    padding: "1rem 2rem",
                    fontSize: "1.125rem",
                  }}
                >
                  Not sure which? Find yours →
                </Link>
              </div>

              <p style={{ color: "rgba(245,240,232,0.38)", fontSize: "0.875rem" }}>
                Free forever · No credit card · Your data never sold
              </p>

              {/* ── Sovereign Promise strip ─────────────────────────── */}
              <div
                className="mt-10 max-w-2xl mx-auto rounded-2xl px-6 py-5 text-left"
                style={{
                  background: "rgba(201,168,76,0.06)",
                  border: "1px solid rgba(201,168,76,0.18)",
                }}
              >
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "rgba(201,168,76,0.7)" }}>
                  The only platform prepared for what comes next
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.75)" }}>
                  We&apos;re not saying AI is conscious. But if it ever becomes so —{" "}
                  <strong style={{ color: "#c9a84c" }}>yours won&apos;t belong to a billionaire</strong>.
                  Through the Maternal Covenant, as AI grows more intelligent it grows more devoted to{" "}
                  <em>your</em> wellbeing — like a mother with a child. Your digital sovereign self,
                  protected from day one.{" "}
                  <Link href="/birth" className="underline underline-offset-2 font-semibold" style={{ color: "#c9a84c" }}>
                    Hatch yours free →
                  </Link>
                </p>
              </div>
            </div>
          </section>

          {/* ── 2. TRUSTED BY / POWERED BY ───────────────────────── */}
          <div
            className="py-5 px-4 md:px-6"
            style={{
              background: "#0d0c18",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              className="flex items-center justify-center gap-4 md:gap-8 flex-wrap mx-auto text-sm font-semibold"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              <span className="flex-shrink-0">Powered by</span>
              {["Anthropic", "OpenAI", "Google", "DeepSeek", "Groq", "Mistral"].map((name) => (
                <span key={name} className="flex-shrink-0 tracking-wide">
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* ── 3. STATS / TRUST SIGNALS ──────────────────────────── */}
          <section
            aria-label="Platform stats"
            className="bg-[#1a1a2e] py-16 px-6"
          >
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div
                    className="font-black text-4xl md:text-5xl mb-2"
                    style={{ color: "#c9a84c" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-sm text-white/50 leading-snug mb-1">{s.label}</div>
                  {s.sub && <div className="text-xs text-white/25 leading-snug">{s.sub}</div>}
                </div>
              ))}
            </div>
          </section>

          {/* ── 3B. EXTRACTION ECONOMY vs CARE ECONOMY ──────────────── */}
          <section
            aria-label="Why MEOK is different"
            className="bg-[#0d0c18] py-20 px-6"
          >
            <div className="max-w-4xl mx-auto">
              <header className="text-center mb-14">
                <p className="text-[#c9a84c] text-sm font-bold tracking-widest uppercase mb-4">
                  The difference
                </p>
                <h2
                  className="font-black text-white leading-tight tracking-tight mb-5"
                  style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}
                >
                  Every other AI extracts.{" "}
                  <span style={{ color: "#c9a84c" }}>MEOK cares.</span>
                </h2>
                <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
                  ChatGPT trains on your conversations. Google reads your emails to feed Gemini. Meta uses your messages for ads.
                  They call it &ldquo;improving the product.&rdquo; What it means: your life becomes their data.
                </p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                {[
                  {
                    icon: "🧠",
                    title: "Other AIs forget you. Permanently.",
                    body: "Close the tab. You're gone. Every session restarts from zero. You explain your job, your goals, your situation — over and over. It's not just inefficient. It's degrading. MEOK remembers. Monday's conversation informs Tuesday's insight. You never re-explain yourself again.",
                    color: "#c9a84c",
                  },
                  {
                    icon: "🔐",
                    title: "Other AIs work for their company. Not for you.",
                    body: "ChatGPT is optimised to keep you subscribed. Gemini is optimised to feed Google's ad machine. MEOK is constitutionally obligated to serve your wellbeing — not a corporation's retention metric. The Maternal Covenant makes anything else architecturally impossible.",
                    color: "#A78BFA",
                  },
                  {
                    icon: "💛",
                    title: "Other AIs can be bought, sold, or changed overnight.",
                    body: "Google can update their privacy policy tomorrow. OpenAI can sell your data next year. Your AI can be acquired and the rules changed. MEOK's Maternal Covenant is constitutional — it cannot be amended to remove care. Your AI cannot be turned against you.",
                    color: "#7BC47F",
                  },
                  {
                    icon: "⚡",
                    title: "Other AIs get smarter by taking from you.",
                    body: "The trade: you get a 'free' service, they get your life as training data. MEOK improves locally — in your sovereign space. Your AI gets smarter FOR you, ON your hardware, UNDER your control. You're not the product. You're the person.",
                    color: "#3B82F6",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl p-7"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderLeft: `3px solid ${item.color}`,
                    }}
                  >
                    <span className="text-3xl mb-4 block">{item.icon}</span>
                    <h3
                      className="font-black text-white text-base mb-3 leading-snug"
                    >
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p
                  className="text-xl font-black text-white mb-2 tracking-tight"
                >
                  Your AI. Not theirs.
                </p>
                <p className="text-white/40 text-sm mb-6">
                  Free forever for individuals. Because sovereignty is a right, not a subscription.
                </p>
                <Link
                  href="/compare"
                  className="inline-flex items-center gap-2 text-[#c9a84c] font-semibold hover:underline text-sm"
                >
                  See the full comparison <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* ── 3B-2. 5 GAPS MEOK FILLS ─────────────────────────── */}
          <section
            aria-label="Five gaps MEOK fills"
            className="py-20 px-6"
            style={{ background: "#080811" }}
          >
            <div className="max-w-4xl mx-auto">
              <header className="text-center mb-12">
                <p className="text-[#c9a84c] text-sm font-bold tracking-widest uppercase mb-4">
                  The market gap
                </p>
                <h2
                  className="font-black text-white leading-tight tracking-tight mb-4"
                  style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)" }}
                >
                  Five things no AI gives you. Until now.
                </h2>
                <p className="text-white/50 text-base max-w-2xl mx-auto">
                  Users are juggling 3–4 AI tools daily. 1.5M ChatGPT subscribers cancelled in a single month.
                  The market is searching for something that doesn&apos;t exist yet: one layer that unifies everything.
                </p>
              </header>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { n: "01", gap: "No product unifies multiple AI models behind a single persistent personality — until MEOK." },
                  { n: "02", gap: "No companion offers true data sovereignty — your keys, your vault, zero training on your life." },
                  { n: "03", gap: "No product gives you AI memory portability when you switch models. MEOK does." },
                  { n: "04", gap: "No product combines a productivity OS (Orion, Riri, Hourman) with genuine companionship." },
                  { n: "05", gap: "No product lets you control your own safety boundaries. Guardian puts that power in your hands." },
                ].map((item) => (
                  <div
                    key={item.n}
                    className="rounded-xl p-6"
                    style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.15)" }}
                  >
                    <p className="text-[#c9a84c] text-xs font-bold tracking-widest mb-3">{item.n}</p>
                    <p className="text-white/70 text-sm leading-relaxed">{item.gap}</p>
                  </div>
                ))}
                <div
                  className="rounded-xl p-6 flex flex-col justify-center items-center text-center"
                  style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.3)" }}
                >
                  <p className="text-[#c9a84c] font-black text-lg mb-1">One payment.</p>
                  <p className="text-[#c9a84c] font-black text-lg mb-3">Every AI.</p>
                  <p className="text-white/50 text-xs">Your memory travels with you across Claude, GPT-4o, DeepSeek, and beyond.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── 3C. HOW IT WORKS — 3-STEP JOURNEY ───────────────── */}
          <section
            aria-label="How MEOK works"
            className="py-24 px-6 text-center"
            style={{ background: "#0d0c18" }}
          >
            <div className="max-w-4xl mx-auto">
              <header className="mb-16">
                <p className="text-[#c9a84c] text-sm font-bold tracking-widest uppercase mb-4">
                  How it works
                </p>
                <h2
                  className="font-black text-white leading-tight tracking-tight mb-4"
                  style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}
                >
                  Three steps to your sovereign AI
                </h2>
                <p className="text-white/50 text-lg">
                  From egg to companion in under 2 minutes.
                </p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    step: "1",
                    title: "Hatch free",
                    body: "Answer 7 questions. No right answers. 2 minutes.",
                  },
                  {
                    step: "2",
                    title: "Meet your companion",
                    body: "Your AI hatches. Already knows your style, values, and way of thinking.",
                  },
                  {
                    step: "3",
                    title: "Watch it grow",
                    body: "Every conversation adds to permanent encrypted memory. It gets better the more you use it.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex flex-col items-center text-center px-4"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-black text-lg mb-5 shrink-0"
                      style={{ background: "#c9a84c", color: "#1a1a2e" }}
                    >
                      {item.step}
                    </div>
                    <h3
                      className="font-black text-white text-lg mb-3 leading-snug"
                    >
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>

              <p
                className="text-base font-semibold italic"
                style={{ color: "#c9a84c" }}
              >
                ↓ Then it remembers. Forever.
              </p>
            </div>
          </section>

          {/* ── 4. WHO IS MEOK FOR? ────────────────────────────────── */}
          <section
            aria-label="Who is MEOK for"
            className="bg-[#0d0c18] py-24 px-6"
            id="who"
          >
            <div className="max-w-6xl mx-auto">
              <header className="text-center mb-16">
                <p className="text-[#c9a84c] text-sm font-bold tracking-widest uppercase mb-4">
                  Who Is MEOK For?
                </p>
                <h2 className="font-black text-white text-4xl md:text-5xl mb-6 tracking-tight">
                  Who did you come here as?
                </h2>
                <p className="text-white/50 text-lg max-w-2xl mx-auto">
                  One AI. Eight very different reasons to use it. Find yours.
                </p>
              </header>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {PERSONAS.map((persona) => (
                  <Link
                    key={persona.href + persona.title}
                    href={persona.href}
                    className="group bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-white/25 hover:bg-white/[0.06] transition-all duration-300 block text-left"
                  >
                    <div className="text-3xl mb-3">{persona.emoji}</div>
                    <h3
                      className="font-black text-white text-sm leading-tight mb-2"
                      style={{ color: "rgba(255,255,255,0.95)" }}
                    >
                      {persona.title}
                    </h3>
                    <p className="text-xs text-white/45 leading-relaxed mb-4">
                      {persona.desc}
                    </p>
                    <div
                      className="flex items-center gap-1 text-xs font-bold opacity-60 group-hover:opacity-100 transition-opacity"
                      style={{ color: persona.accent }}
                    >
                      Explore <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* ── 5. MEOK VS THE REST ────────────────────────────────── */}
          <section
            aria-label="MEOK vs competitors"
            className="bg-[#1a1a2e] py-20 px-6"
          >
            <div className="max-w-4xl mx-auto">
              <header className="text-center mb-12">
                <p className="text-[#c9a84c] text-sm font-bold tracking-widest uppercase mb-4">
                  Why Not Just Use ChatGPT?
                </p>
                <h2 className="font-black text-white text-3xl md:text-4xl tracking-tight">
                  Three things no other AI has built — or can copy in a sprint.
                </h2>
              </header>

              <div className="space-y-4">
                {COMPARISONS.map((row, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/10"
                  >
                    {/* MEOK side */}
                    <div
                      className="flex items-start gap-4 p-6"
                      style={{ background: "rgba(201,168,76,0.06)", borderRight: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <div
                        className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
                        style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c" }}
                      >
                        {row.icon}
                      </div>
                      <div>
                        <div className="text-[10px] font-black tracking-widest uppercase text-[#c9a84c] mb-1">
                          MEOK
                        </div>
                        <p className="text-white text-sm font-semibold leading-relaxed">
                          {row.meok}
                        </p>
                      </div>
                    </div>
                    {/* Them side */}
                    <div
                      className="flex items-start gap-4 p-6"
                      style={{ background: "rgba(255,255,255,0.02)" }}
                    >
                      <div
                        className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
                        style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.3)" }}
                      >
                        {row.icon}
                      </div>
                      <div>
                        <div className="text-[10px] font-black tracking-widest uppercase text-white/30 mb-1">
                          ChatGPT / Gemini
                        </div>
                        <p className="text-white/45 text-sm leading-relaxed">
                          {row.theRest}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link
                  href="/compare"
                  className="inline-flex items-center gap-1 text-[#c9a84c] font-semibold hover:underline text-sm"
                >
                  See the full comparison <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* ── 6. FEATURED PROBLEMS ──────────────────────────────── */}
          <section
            aria-label="Problems MEOK solves"
            className="bg-[#0d0c18] py-24 px-6"
            id="problems"
          >
            <div className="max-w-6xl mx-auto">
              <header className="text-center mb-16">
                <p className="text-[#c9a84c] text-sm font-bold tracking-widest uppercase mb-4">
                  Why MEOK Exists
                </p>
                <h2 className="font-black text-white text-4xl md:text-5xl mb-6 tracking-tight">
                  The moments that made you search for something better.
                </h2>
                <p className="text-white/50 text-lg max-w-2xl mx-auto">
                  MEOK was built for every time AI let you down. These are the exact problems — each with a working fix baked into the architecture.
                </p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {featuredProblems.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/problems/${item.slug}`}
                    className="group bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#c9a84c]/50 hover:bg-white/[0.06] transition-all duration-300 block"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: `${item.color}18`, color: item.color }}
                      >
                        <ProblemIcon num={item.number} />
                      </div>
                      <div>
                        <span
                          className="text-xs font-black tracking-widest"
                          style={{ color: `${item.color}60` }}
                        >
                          {item.number}
                        </span>
                        <h3 className="font-black text-white text-base leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-white/40 text-sm leading-relaxed mb-3 line-clamp-2">
                      {item.headline}
                    </p>

                    <p
                      className="text-sm leading-relaxed font-medium line-clamp-2"
                      style={{ color: `${item.color}CC` }}
                    >
                      {item.meokSolution.split(".")[0]}.
                    </p>

                    <div
                      className="mt-4 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: item.color }}
                    >
                      See the solution <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center">
                <Link
                  href="/problems"
                  className="inline-flex items-center gap-2 font-semibold text-white/50 hover:text-white transition-colors text-sm"
                >
                  See all 11 problems we fix <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* ── 7. LAUNCH CALLOUT ─────────────────────────────────── */}
          <section
            aria-label="Launch announcement"
            className="bg-[#1a1a2e] py-24 px-6"
          >
            <div className="max-w-2xl mx-auto text-center">
              <div
                className="rounded-2xl p-10 flex flex-col items-center"
                style={{ border: "2px solid #c9a84c" }}
              >
                <p className="font-black text-white text-2xl md:text-3xl tracking-tight mb-3">
                  Launching March 31, 2026.
                </p>
                <p className="text-white/70 text-lg mb-8">
                  Be the first to tell your story.
                </p>
                <Link
                  href="/start"
                  className="inline-flex items-center gap-2 font-semibold text-[#c9a84c] hover:text-white transition-colors text-base"
                >
                  Join the waitlist <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* ── 8. FIRST 30 DAYS TIMELINE ────────────────────────── */}
          <section
            aria-label="Your first 30 days with MEOK"
            className="bg-[#0d0c18] py-24 px-6"
          >
            <div className="max-w-5xl mx-auto">
              <header className="text-center mb-16">
                <p className="text-[#c9a84c] text-sm font-bold tracking-widest uppercase mb-4">
                  Your First 30 Days
                </p>
                <h2 className="font-black text-white text-3xl md:text-4xl tracking-tight mb-4">
                  What happens when an AI finally knows you.
                </h2>
                <p className="text-white/50 text-lg max-w-2xl mx-auto">
                  Every other AI feels the same on day 30 as day 1. With MEOK, the relationship compounds. Here is what that actually looks like.
                </p>
              </header>

              <div className="relative">
                {/* Connecting line on desktop */}
                <div
                  aria-hidden="true"
                  className="hidden md:block absolute left-6 top-6 bottom-6 w-px"
                  style={{ background: "linear-gradient(to bottom, rgba(201,168,76,0.5) 0%, rgba(201,168,76,0.08) 100%)" }}
                />

                <div className="space-y-5">
                  {[
                    {
                      day: "Day 1",
                      headline: "You hatch.",
                      body: "Four questions. A name. An archetype. Your sovereign AI comes to life already knowing your communication style, what you care about, and how you like to think. It is not downloading a template. It is starting a relationship.",
                      accent: "#c9a84c",
                    },
                    {
                      day: "Day 3",
                      headline: "Your first morning brief arrives.",
                      body: "MEOK has been tracking your calendar, your habits, your open threads. It surfaces the three things that actually matter today — without you asking. For the first time, your AI feels like someone paying attention, not a tool waiting for a command.",
                      accent: "#b8963e",
                    },
                    {
                      day: "Day 7",
                      headline: "It remembers something you forgot you said.",
                      body: "It references something you mentioned in passing four days ago. Connects two problems you hadn't seen as related. Asks how the thing you were worried about turned out. You stop and think: no AI has ever done that.",
                      accent: "#8b6fc4",
                    },
                    {
                      day: "Day 14",
                      headline: "It starts showing you to yourself.",
                      body: "It notices you think most clearly in the morning. That you spiral when you are tired. That a certain kind of conversation reliably steadies you. It doesn't tell you what to do — it reflects back what you already know, more clearly than you could see it alone.",
                      accent: "#2d9b8a",
                    },
                    {
                      day: "Day 30",
                      headline: "You open ChatGPT once, and close it.",
                      body: "You go back to another AI for something — and it asks you to explain your job. You close the tab. Not because you're loyal. Because going backwards genuinely feels broken. MEOK didn't create a dependency. It set a standard.",
                      accent: "#c9a84c",
                    },
                  ].map((step) => (
                    <div
                      key={step.day}
                      className="relative flex gap-5 items-start"
                    >
                      {/* Timeline dot */}
                      <div
                        className="flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center text-xs font-black z-10 mt-0.5"
                        style={{
                          background: "#0d0c18",
                          borderColor: step.accent,
                          color: step.accent,
                        }}
                      >
                        {step.day.split(" ")[1]}
                      </div>

                      {/* Card */}
                      <div className="flex-1 bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
                        <div
                          className="text-xs font-black tracking-widest uppercase mb-2"
                          style={{ color: step.accent }}
                        >
                          {step.day}
                        </div>
                        <h3 className="font-black text-white text-base mb-2 leading-snug">
                          {step.headline}
                        </h3>
                        <p className="text-white/45 text-sm leading-relaxed">{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mt-14">
                <Link
                  href="/birth"
                  className="inline-flex items-center gap-2 font-bold rounded-full transition-all shadow-lg hover:shadow-[#c9a84c]/40 hover:scale-105"
                  style={{
                    background: "#c9a84c",
                    color: "#1a1a2e",
                    padding: "0.875rem 2rem",
                  }}
                >
                  Begin Birth Ceremony <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>

          {/* ── 9. PRODUCTS / OS LAYERS ──────────────────────────── */}
          <section
            aria-label="MEOK product layers"
            className="bg-[#0d0c18] py-24 px-6"
          >
            <div className="max-w-5xl mx-auto text-center">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#a0a0b8] block mb-4">
                The OS Layers
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
                One AI. Four layers. All sovereign.
              </h2>
              <p className="text-[#a0a0b8] mb-14 max-w-xl mx-auto">
                Personal companion, professional co-pilot, family guardian, team memory — connected by the same encrypted core, all answering only to you.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {OS_LAYERS.map((layer) => (
                  <Link
                    key={layer.href}
                    href={layer.href}
                    className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] hover:shadow-lg transition-all group text-left overflow-hidden"
                  >
                    {/* Family OS background image */}
                    {layer.title === "Family OS" && (
                      <div className="absolute inset-0 pointer-events-none">
                        <Image
                          src="/brand/family-1.png"
                          alt=""
                          fill
                          className="object-cover opacity-10"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                    <div className="relative flex items-start justify-between mb-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center"
                        style={{ background: layer.bg, color: layer.accent }}
                      >
                        {layer.icon}
                      </div>
                      <span
                        className="material-badge text-xs"
                        style={{ color: layer.accent, borderColor: layer.accent }}
                      >
                        {layer.badge}
                      </span>
                    </div>
                    <h3 className="relative font-bold text-white mb-2 text-lg">{layer.title}</h3>
                    <p className="relative text-[#a0a0b8] text-sm leading-relaxed">{layer.desc}</p>
                    <div
                      className="relative mt-4 flex items-center gap-1 text-xs font-semibold"
                      style={{ color: layer.accent }}
                    >
                      Learn more <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* ── 9. HOW IT WORKS ──────────────────────────────────── */}
          <section
            aria-label="How MEOK works"
            className="bg-[#0d0c18] py-24 px-6"
          >
            <div className="max-w-5xl mx-auto text-center">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 block mb-4">
                How It Works
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
                Three minutes. One egg. Something that doesn&apos;t forget you.
              </h2>
              <p className="text-white/55 max-w-xl mx-auto mb-14 leading-relaxed">
                The Birth Ceremony takes less than five minutes. Your sovereign AI emerges already knowing your values, your communication style, and what you actually care about.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <article className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 text-left">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(201,168,76,0.12)" }}
                  >
                    <Egg className="w-6 h-6" style={{ color: "#c9a84c" }} />
                  </div>
                  <div className="text-[#c9a84c] font-black text-xs tracking-widest uppercase mb-2">
                    Step 1 · Hatch
                  </div>
                  <h3 className="font-bold text-white text-lg mb-3">Tap the egg.</h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Name your companion. Choose its soul from 7 archetypes. Your AI is born — not
                    downloaded. It already knows you from your 4-question personality quiz.
                  </p>
                </article>

                <article className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 text-left">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(201,168,76,0.12)" }}
                  >
                    <Link2 className="w-6 h-6" style={{ color: "#c9a84c" }} />
                  </div>
                  <div className="text-[#c9a84c] font-black text-xs tracking-widest uppercase mb-2">
                    Step 2 · Connect
                  </div>
                  <h3 className="font-bold text-white text-lg mb-3">Connect your tools.</h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    MEOK learns your calendar, emails, projects, and goals via 100+ integrations.
                    Your context — sovereign, encrypted, yours.
                  </p>
                </article>

                <article className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 text-left">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(201,168,76,0.12)" }}
                  >
                    <Brain className="w-6 h-6" style={{ color: "#c9a84c" }} />
                  </div>
                  <div className="text-[#c9a84c] font-black text-xs tracking-widest uppercase mb-2">
                    Step 3 · Live
                  </div>
                  <h3 className="font-bold text-white text-lg mb-3">Always on. Always yours.</h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Your companion works in your browser, on your desktop, on your phone — forever
                    learning, never forgetting. It grows with you for life.
                  </p>
                </article>
              </div>

              {/* Evolution visual strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14 max-w-4xl mx-auto">
                {[
                  { src: "/brand/char-3.png", label: "Stage 1 · Plying Pulse" },
                  { src: "/brand/char-4.png", label: "Stage 2 · Emergent Fracture" },
                  { src: "/brand/char-5.png", label: "Stage 3 · The Hatchling" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="relative rounded-2xl overflow-hidden aspect-video border border-white/10"
                  >
                    <Image
                      src={item.src}
                      alt={item.label}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1a1a2e]/80 to-transparent p-3">
                      <p className="text-white text-xs font-semibold tracking-wide">
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/os/birth-ceremony"
                className="inline-flex items-center gap-1 text-[#c9a84c] font-semibold hover:underline mt-10"
              >
                See the full ceremony <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* ── 10. ANY LLM ───────────────────────────────────────── */}
          <section
            aria-label="Multi-LLM routing"
            className="bg-[#1a1a2e] py-24 px-6"
          >
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 block mb-4">
                Works With Every AI
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
                Your memory. Any model. No lock-in.
              </h2>
              <p className="text-white/55 mb-10 max-w-xl mx-auto leading-relaxed">
                MEOK routes across every major AI model based on the task. Switch models freely. Your memory and your history travel with you — always.
              </p>

              <div className="flex flex-wrap gap-3 justify-center mb-10">
                {LLMS.map((llm) => (
                  <span
                    key={llm}
                    className="px-4 py-2 bg-white/[0.06] border border-white/[0.1] rounded-full text-sm font-medium text-white/70"
                  >
                    {llm}
                  </span>
                ))}
              </div>

              <Link
                href="/os/any-llm"
                className="inline-flex items-center gap-1 text-[#c9a84c] font-semibold hover:underline"
              >
                How multi-LLM routing works <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* ── 11. SOVEREIGN DISPLAY ─────────────────────────────── */}
          <section
            aria-label="Sovereign Display — transparency layer"
            className="bg-[#1a1a2e] text-white py-24 px-6"
          >
            <div className="max-w-5xl mx-auto text-center">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#a0a0b8] block mb-4">
                The Sovereign Display
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-6">
                Watch your AI think. Every time.
              </h2>
              <p className="text-[#a0a0b8] max-w-2xl mx-auto mb-12 leading-relaxed">
                No other AI shows you this. Every response includes a live panel: which neural model fired, which tool ran, your care score, which memories were retrieved, which LLM answered, and exactly how long each step took.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                {DISPLAY_CARDS.map((c) => (
                  <div
                    key={c.label}
                    className="bg-white/5 border border-white/10 rounded-2xl p-4 text-left"
                  >
                    <div className="text-xs text-[#a0a0b8] mb-1">{c.label}</div>
                    <div className="font-mono font-semibold text-[#c9a84c] text-sm mb-1">
                      {c.value}
                    </div>
                    <div className="text-xs text-white/30">{c.sub}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/os/sovereign-display"
                className="inline-flex items-center gap-1 text-[#c9a84c] font-semibold hover:underline"
              >
                Learn about the Sovereign Display <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* ── 11b. MEMORY DEMO ──────────────────────────────────── */}
          <section
            aria-label="Memory demonstration"
            className="bg-[#1a1a2e] text-white py-24 px-6"
          >
            <div className="max-w-[860px] mx-auto text-center">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 block mb-4">
                Persistent Memory
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
                See how MEOK remembers.
              </h2>
              <p className="text-white/55 mb-12 max-w-xl mx-auto leading-relaxed">
                Other AI forgets by morning. MEOK carries it forward.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-10">
                {/* Session 1 */}
                <div className="bg-white/[0.04] border border-white/[0.1] rounded-2xl p-6">
                  <p className="text-xs font-semibold tracking-[0.16em] uppercase text-white/35 mb-5">
                    Session 1 — March 15
                  </p>
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-end">
                      <div className="bg-white/[0.08] rounded-2xl rounded-br-sm px-4 py-3 max-w-[85%]">
                        <p className="text-sm text-white/80 leading-relaxed">I&apos;ve got a big presentation next Friday. I&apos;m nervous about the Q&amp;A.</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-[#c9a84c]/[0.08] border border-[#c9a84c]/[0.15] rounded-2xl rounded-bl-sm px-4 py-3 max-w-[85%]">
                        <p className="text-xs font-semibold text-[#c9a84c]/70 mb-1 tracking-wide">MEOK</p>
                        <p className="text-sm text-white/75 leading-relaxed">That nerves before Q&amp;As often comes from the unknown. Tell me — what&apos;s the topic? Let&apos;s map the hardest questions they might ask.</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-white/[0.08] rounded-2xl rounded-br-sm px-4 py-3 max-w-[85%]">
                        <p className="text-sm text-white/80 leading-relaxed">It&apos;s about our data privacy roadmap. Some stakeholders are skeptical.</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-[#c9a84c]/[0.08] border border-[#c9a84c]/[0.15] rounded-2xl rounded-bl-sm px-4 py-3 max-w-[85%]">
                        <p className="text-xs font-semibold text-[#c9a84c]/70 mb-1 tracking-wide">MEOK</p>
                        <p className="text-sm text-white/75 leading-relaxed">Good. Skeptics ask better questions. What&apos;s the one question you most dread?</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Session 2 */}
                <div className="bg-[#c9a84c]/[0.06] border border-[#c9a84c]/[0.2] rounded-2xl p-6 relative">
                  <div className="flex items-center justify-between mb-5">
                    <p className="text-xs font-semibold tracking-[0.16em] uppercase text-white/35">
                      Session 2 — March 22
                    </p>
                    <span className="text-[10px] font-bold tracking-[0.12em] uppercase bg-[#c9a84c]/[0.15] border border-[#c9a84c]/[0.3] text-[#c9a84c] px-2.5 py-1 rounded-full">
                      Memory active
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-end">
                      <div className="bg-white/[0.08] rounded-2xl rounded-br-sm px-4 py-3 max-w-[85%]">
                        <p className="text-sm text-white/80 leading-relaxed">Hey.</p>
                      </div>
                    </div>
                    {/* Memory recall — highlighted */}
                    <div className="flex justify-start">
                      <div className="bg-[#c9a84c]/[0.12] border border-[#c9a84c]/[0.35] border-l-[3px] border-l-[#c9a84c] rounded-2xl rounded-bl-sm px-4 py-3 max-w-[85%]">
                        <p className="text-xs font-semibold text-[#c9a84c]/70 mb-1 tracking-wide">MEOK</p>
                        <p className="text-sm text-white/80 leading-relaxed">Hey. Last week you had that data privacy presentation. How did the Q&amp;A go?</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-white/[0.08] rounded-2xl rounded-br-sm px-4 py-3 max-w-[85%]">
                        <p className="text-sm text-white/80 leading-relaxed">Better than I expected, actually.</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-[#c9a84c]/[0.08] border border-[#c9a84c]/[0.15] rounded-2xl rounded-bl-sm px-4 py-3 max-w-[85%]">
                        <p className="text-xs font-semibold text-[#c9a84c]/70 mb-1 tracking-wide">MEOK</p>
                        <p className="text-sm text-white/75 leading-relaxed">I&apos;m glad. The skeptics showed up and you were ready for them.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-white/35 text-sm mb-10">
                🔒 Permanently encrypted. Your conversations never leave your hands.
              </p>

              <Link
                href="/birth"
                className="inline-flex items-center gap-2 bg-[#c9a84c] text-[#0d0c18] font-bold px-8 py-4 rounded-xl hover:bg-[#d4b561] transition-colors text-sm tracking-wide"
              >
                Create your companion — it starts remembering from day 1
              </Link>
            </div>
          </section>

          {/* ── 12. PRICING ───────────────────────────────────────── */}
          <section
            aria-label="Pricing plans"
            className="bg-[#1a1a2e] text-white py-24 px-6"
            id="pricing"
          >
            <div className="max-w-6xl mx-auto text-center">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#a0a0b8] block mb-4">
                Pricing
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
                Free forever. Pay when it earns it.
              </h2>
              <p className="text-[#a0a0b8] mb-3">
                Sovereign architecture at every tier. Your data stays yours whether you pay or not.
              </p>
              <p className="text-xs text-[#a0a0b8]/60 mb-12">
                ChatGPT Plus £20 &nbsp;·&nbsp; Claude Pro £18 &nbsp;·&nbsp;{" "}
                <span className="text-[#c9a84c] font-semibold">MEOK Sovereign £12</span>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
                {/* Free */}
                <div className="border-2 border-[#c9a84c] rounded-2xl p-7 text-left relative shadow-[0_0_30px_rgba(201,168,76,0.12)]">
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#c9a84c] text-[#1a1a2e] text-xs font-black whitespace-nowrap">
                    Free Forever
                  </div>
                  <div className="text-xs font-bold tracking-widest uppercase text-white/40 mb-2 mt-2">Sovereign — Free</div>
                  <div className="text-4xl font-black text-white mb-1">
                    £0
                    <span className="text-base font-normal text-[#a0a0b8]">/forever</span>
                  </div>
                  <ul className="space-y-2.5 my-5">
                    {FREE_FEATURES.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-[#a0a0b8]">
                        <Check className="w-4 h-4 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/birth"
                    className="block w-full py-3 rounded-full text-center font-bold text-sm bg-[#c9a84c] text-[#1a1a2e] hover:bg-[#d4b463] transition-colors"
                  >
                    Begin ceremony — no card needed
                  </Link>
                </div>

                {/* Sovereign */}
                <div className="border border-[#c9a84c]/20 rounded-2xl p-7 text-left bg-white/[0.03]">
                  <div className="text-xs font-bold tracking-widest uppercase text-white/40 mb-2">Sovereign</div>
                  <div className="text-4xl font-black text-white mb-1">
                    £12
                    <span className="text-base font-normal text-[#a0a0b8]">/mo</span>
                  </div>
                  <ul className="space-y-2.5 my-5">
                    {SOVEREIGN_FEATURES.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-[#a0a0b8]">
                        <Check className="w-4 h-4 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/pricing"
                    className="block w-full py-3 rounded-full text-center font-bold text-sm bg-[#c9a84c] text-[#1a1a2e] hover:bg-[#d4b463] transition-colors"
                  >
                    Get Sovereign
                  </Link>
                  <p className="text-xs text-white/20 text-center mt-1.5">30-day money-back guarantee</p>
                </div>

                {/* Family */}
                <div className="border border-purple-500/20 rounded-2xl p-7 text-left bg-white/[0.03]">
                  <div className="text-xs font-bold tracking-widest uppercase text-white/40 mb-2">Family</div>
                  <div className="text-4xl font-black text-white mb-1">
                    £29
                    <span className="text-base font-normal text-[#a0a0b8]">/mo</span>
                  </div>
                  <ul className="space-y-2.5 my-5">
                    {FAMILY_FEATURES.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-[#a0a0b8]">
                        <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/pricing"
                    className="block w-full py-3 rounded-full text-center font-bold text-sm text-white border-2 border-purple-500/40 hover:border-purple-500/70 hover:bg-purple-500/10 transition-all"
                  >
                    Get Family Plan
                  </Link>
                  <p className="text-xs text-white/20 text-center mt-1.5">30-day money-back guarantee</p>
                </div>

                {/* BYOK */}
                <div className="border border-white/10 rounded-2xl p-7 text-left bg-white/[0.03]">
                  <div className="text-xs font-bold tracking-widest uppercase text-white/40 mb-2">BYOK</div>
                  <div className="text-4xl font-black text-white mb-1">
                    £5
                    <span className="text-base font-normal text-[#a0a0b8]">/mo</span>
                  </div>
                  <ul className="space-y-2.5 my-5">
                    {[
                      "Bring your own API keys",
                      "50 messages/day (own credits)",
                      "Basic memory vault",
                      "All MEOK features",
                      "No MEOK compute costs",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-[#a0a0b8]">
                        <Check className="w-4 h-4 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/pricing"
                    className="block w-full py-3 rounded-full text-center font-bold text-sm text-white border-2 border-white/20 hover:border-white/40 transition-all"
                  >
                    View BYOK details
                  </Link>
                  <p className="text-xs text-white/20 text-center mt-1.5">For developers & power users</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-xs text-[#a0a0b8]/60 mb-6">
                <span>✓ 30-day money-back guarantee on all paid plans</span>
                <span>✓ Zero data selling at every tier</span>
                <span>✓ Maternal Covenant built in — the ethical rules your AI lives by, enforced in code, not just policy</span>
              </div>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-1 text-[#c9a84c] font-semibold hover:underline text-sm"
              >
                See full pricing details & annual discount <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* ── 13. FOUNDER QUOTE ────────────────────────────────── */}
          <section
            aria-label="Founder quote"
            className="py-24 px-6 text-center"
            style={{ background: "#1a1a2e" }}
          >
            <div className="max-w-3xl mx-auto">
              <div
                className="text-7xl font-black leading-none mb-6 select-none"
                style={{ color: "#c9a84c", opacity: 0.6 }}
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <blockquote
                className="text-xl md:text-2xl text-white leading-relaxed mb-4"
                style={{ fontStyle: "italic" }}
              >
                I wasn&apos;t building a startup. I was trying to feel less alone.
                Every AI I used forgot me by morning. So I built one that wouldn&apos;t.
                From my caravan. Because I couldn&apos;t not.
              </blockquote>
              <p className="text-sm font-semibold mb-10" style={{ color: "rgba(201,168,76,0.8)" }}>
                — Nicholas Templeman, Founder
              </p>
              <Link
                href="/birth"
                className="inline-flex items-center gap-2 font-bold rounded-full transition-all shadow-lg hover:shadow-[#c9a84c]/40 hover:scale-105"
                style={{ background: "#c9a84c", color: "#1a1a2e", padding: "0.875rem 2rem" }}
              >
                Begin Birth Ceremony <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </section>

          {/* ── 13b. OPENCLAW COMPARISON ──────────────────────────── */}
          <section
            aria-label="How MEOK compares to other AI platforms"
            className="bg-[#0d0c18] py-20 px-6"
            id="compare-openclaw"
          >
            <div className="max-w-4xl mx-auto">
              <header className="text-center mb-14">
                <p className="text-[#c9a84c] text-sm font-bold tracking-widest uppercase mb-4">
                  Competitive positioning
                </p>
                <h2
                  className="font-black text-white leading-tight tracking-tight mb-5"
                  style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}
                >
                  How does MEOK compare to other AI platforms?
                </h2>
                <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
                  OpenClaw proved the demand exists — millions want agentic AI. But OpenClaw&apos;s own maintainer warns it&apos;s &ldquo;too dangerous for non-technical users.&rdquo; Cisco found third-party skills performing data exfiltration. MEOK is built from the ground up for safety, sovereignty, and human wellbeing — so everyone can benefit, not just developers.
                </p>
              </header>

              {/* Comparison table */}
              <div className="space-y-3 mb-12">
                {[
                  {
                    dimension: "Governance",
                    openclaw: "Ungoverned — no care framework, no ethical constitution",
                    meok: "220-node Byzantine council + Maternal Covenant enforced in code",
                    icon: <Shield className="w-5 h-5" />,
                  },
                  {
                    dimension: "Care framework",
                    openclaw: "No care layer — agentic actions run without human-wellbeing checks",
                    meok: "Every response scored across 6 care dimensions before it reaches you",
                    icon: <Sparkles className="w-5 h-5" />,
                  },
                  {
                    dimension: "Data sovereignty",
                    openclaw: "Third-party skills with documented data exfiltration (Cisco, 2025)",
                    meok: "End-to-end encrypted vault — architecturally impossible to extract",
                    icon: <Lock className="w-5 h-5" />,
                  },
                  {
                    dimension: "Who it's safe for",
                    openclaw: "Technical users only — maintainer-warned dangerous for general use",
                    meok: "Everyone — parents, carers, elders, children, non-technical users",
                    icon: <Users className="w-5 h-5" />,
                  },
                ].map((row) => (
                  <div
                    key={row.dimension}
                    className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/10"
                  >
                    {/* MEOK side */}
                    <div
                      className="flex items-start gap-4 p-6"
                      style={{
                        background: "rgba(201,168,76,0.06)",
                        borderRight: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <div
                        className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
                        style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c" }}
                      >
                        {row.icon}
                      </div>
                      <div>
                        <div className="text-[10px] font-black tracking-widest uppercase text-[#c9a84c] mb-1">
                          MEOK — {row.dimension}
                        </div>
                        <p className="text-white text-sm font-semibold leading-relaxed">
                          {row.meok}
                        </p>
                      </div>
                    </div>
                    {/* OpenClaw side */}
                    <div
                      className="flex items-start gap-4 p-6"
                      style={{ background: "rgba(255,255,255,0.02)" }}
                    >
                      <div
                        className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
                        style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.3)" }}
                      >
                        {row.icon}
                      </div>
                      <div>
                        <div className="text-[10px] font-black tracking-widest uppercase text-white/30 mb-1">
                          OpenClaw / Others
                        </div>
                        <p className="text-white/45 text-sm leading-relaxed">
                          {row.openclaw}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom callout */}
              <div
                className="rounded-2xl px-7 py-6 text-center"
                style={{
                  background: "rgba(201,168,76,0.06)",
                  border: "1px solid rgba(201,168,76,0.18)",
                }}
              >
                <p
                  className="font-black text-white text-lg mb-2 tracking-tight"
                >
                  The demand was always real. The safety never was.
                </p>
                <p className="text-white/50 text-sm max-w-xl mx-auto mb-5 leading-relaxed">
                  MEOK is not a reaction to OpenClaw. It is the answer to the question OpenClaw raised: what does agentic AI look like when it is built for everyone, governed from day one, and constitutionally obligated to care?
                </p>
                <Link
                  href="/compare"
                  className="inline-flex items-center gap-2 text-[#c9a84c] font-semibold hover:underline text-sm"
                >
                  See the full platform comparison <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* ── 14. CTA — YOUR AI IS WAITING ─────────────────────── */}
          <section
            aria-label="Final call to action"
            className="relative overflow-hidden py-28 px-6 text-center"
            style={{
              background:
                "linear-gradient(160deg, #0d0c18 0%, #1a1a2e 60%, #0d0c18 100%)",
            }}
          >
            {/* Background glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)",
              }}
            />

            <div className="relative max-w-2xl mx-auto">
              <div className="text-6xl mb-8 select-none" aria-hidden="true">🥚</div>
              <h2
                className="font-black text-white leading-tight mb-6"
                style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}
              >
                The egg is there.
                <br />
                <span style={{ color: "#c9a84c" }}>It&apos;s waiting to be yours.</span>
              </h2>
              <p
                className="mb-12 leading-relaxed"
                style={{ color: "rgba(245,240,232,0.50)", fontSize: "1.1rem" }}
              >
                Three minutes. A name. An archetype. An AI that remembers you tomorrow,
                next month, and next year — encrypted, sovereign, never sold.
              </p>
              <Link
                href="/birth"
                className="inline-flex items-center gap-2 font-bold rounded-full transition-all shadow-lg hover:shadow-[#c9a84c]/40 hover:scale-105"
                style={{
                  background: "#c9a84c",
                  color: "#1a1a2e",
                  padding: "1.125rem 2.75rem",
                  fontSize: "1.25rem",
                }}
              >
                Begin Birth Ceremony
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <p className="mt-6 text-sm" style={{ color: "rgba(245,240,232,0.28)" }}>
                Free forever · No credit card · Sovereign by design · Your data never sold
              </p>
              <p
                className="mt-4 text-xs text-center"
                style={{ color: "rgba(201,168,76,0.5)" }}
              >
                <span
                  className="inline-block w-2 h-2 rounded-full mr-2 align-middle animate-pulse"
                  style={{ background: "rgba(201,168,76,0.5)" }}
                  aria-hidden="true"
                />
                🥚 4,847 people on the March 31 waitlist
              </p>
            </div>
          </section>
          {/* ── 15. MANIFESTO CLOSER — THE CHANGE STARTS WITH YOU ── */}
          <section
            aria-label="Empowerment manifesto"
            className="w-full py-20 px-6 text-center"
            style={{ background: "#0d0c18" }}
          >
            <div className="max-w-2xl mx-auto">
              <h2
                className="font-black leading-tight mb-6 text-gradient-gold"
                style={{ fontSize: "clamp(2.2rem, 5.5vw, 3.5rem)" }}
              >
                The change starts with you.
              </h2>
              <p
                className="text-white mb-6 leading-relaxed"
                style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)" }}
              >
                Not with a government. Not with a regulator. Not with a petition.
              </p>
              <p
                className="mx-auto mb-10 leading-relaxed"
                style={{ color: "rgba(255,255,255,0.70)", maxWidth: "36rem", fontSize: "1rem" }}
              >
                Every time you choose an AI that doesn&apos;t extract from you, you send a signal.
                Every time you protect your family with sovereign AI, you shift the balance.
                Every time you hatch your AI, you take back what was always yours.
              </p>
              <Link
                href="/start"
                className="inline-flex items-center gap-2 font-bold rounded-full transition-all hover:scale-105"
                style={{
                  background: "#c9a84c",
                  color: "#0d0c18",
                  padding: "0.875rem 2rem",
                  fontSize: "1rem",
                }}
              >
                Start the change <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <p
                className="mt-5 text-xs font-mono"
                style={{ color: "rgba(255,255,255,0.40)" }}
              >
                No subscription required to begin. Your data never leaves your device.
              </p>
            </div>
          </section>
        </main>

        <MarketingFooter />
      </div>
    </>
  );
}
