import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Brain, Shield, Heart, Check } from "lucide-react";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "How MEOK Works — Why This Is Different | MEOK.AI",
  description:
    "You've tried AI before. Here's why MEOK is different: permanent memory, sovereign data, and genuine care. No jargon. No hype. Step by step.",
  keywords: [
    "how does MEOK work",
    "MEOK vs ChatGPT",
    "AI that remembers",
    "sovereign AI explained",
    "AI memory how it works",
    "private AI comparison",
  ],
  alternates: { canonical: "https://meok.ai/how-it-works" },
  openGraph: {
    title: "How MEOK Works — Why This Is Different",
    description:
      "You've tried AI before. Here's why MEOK is actually different. Memory. Sovereignty. Care. Step by step, no hype.",
    type: "website",
    url: "https://meok.ai/how-it-works",
    siteName: "MEOK.AI",
    images: [{ url: "https://meok.ai/api/og?title=How+MEOK+Works&desc=Memory.+Sovereignty.+Care.+Step+by+step%2C+no+hype.", width: 1200, height: 630, alt: "How MEOK Works — Why This Is Different" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How MEOK Works — Why This Is Different | MEOK.AI",
    description: "You've tried AI before. Here's why MEOK is actually different. Memory. Sovereignty. Care. Step by step, no hype.",
    images: ["https://meok.ai/api/og?title=How+MEOK+Works&desc=Memory.+Sovereignty.+Care.+Step+by+step%2C+no+hype."],
  },
};

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://meok.ai/how-it-works#webpage",
  url: "https://meok.ai/how-it-works",
  name: "How MEOK Works — Why This Is Different | MEOK.AI",
  description:
    "You've tried AI before. Here's why MEOK is different: permanent memory, sovereign data, and genuine care. No jargon. No hype. Step by step.",
  isPartOf: { "@id": "https://meok.ai/#website" },
  about: { "@type": "SoftwareApplication", name: "MEOK Sovereign AI OS" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai" },
      { "@type": "ListItem", position: 2, name: "How It Works", item: "https://meok.ai/how-it-works" },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Will MEOK lose my data if I cancel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. You can export your entire memory vault as a structured file at any time, including after cancellation. Your data belongs to you — always. We cannot hold it hostage.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK train on my conversations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The Maternal Covenant is an architectural constraint, not a policy. It is technically enforced in the codebase — MEOK cannot use your conversations for model training. Your data is encrypted before it reaches our servers.",
      },
    },
    {
      "@type": "Question",
      name: "What if I cancel — what happens to my AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You keep the free tier forever. Your companion and its memories continue at the free tier limits. You can export and delete everything at any point. There is no lock-in.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from ChatGPT memory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ChatGPT memory is a recent feature that stores snippets of what you tell it. MEOK's Sovereign Memory is a permanent, searchable, encrypted vault across every conversation, every LLM, with semantic compression — so it gets smarter about what to remember as it learns you.",
      },
    },
    {
      "@type": "Question",
      name: "What LLMs does MEOK use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Claude, GPT-4o, DeepSeek, Groq, Mistral, Gemini, or your local Ollama instance. MEOK routes intelligently — fast queries go to Groq (120ms), complex reasoning goes to Claude Sonnet, privacy-sensitive queries can go entirely local.",
      },
    },
    {
      "@type": "Question",
      name: "Is it really free forever?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The free tier includes a sovereign AI companion, basic memory, any LLM routing, and open source access — permanently free. Sovereign is £12/month for unlimited memory, Work OS, and more. No credit card required to start.",
      },
    },
  ],
};

// ── DATA ──────────────────────────────────────────────────────────────────────

const THREE_DIFFERENCES = [
  {
    icon: <Brain className="w-7 h-7" />,
    title: "Memory",
    tagline: "It doesn't forget. Ever.",
    description:
      "Every AI you've used resets when you close the tab. MEOK maintains a permanent, encrypted memory vault — your kids' names, your project deadlines, the anxiety you mentioned last week — without you ever repeating yourself. The average person re-explains their context to AI about 11 times a week. MEOK makes that zero. Not through a 'memory on' toggle. Through architecture.",
    contrast: "ChatGPT stores memory snippets when you tell it to. MEOK builds memory automatically, semantically, across every session and every model.",
    accent: "#c9a84c",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Sovereignty",
    tagline: "You own it. Not just in terms of service.",
    description:
      "Every AI product you currently use is owned by a corporation that can change its terms tonight, raise prices, or shut down entirely. Humane AI bricked 10,000 devices with a single server announcement. MEOK gives you encrypted ownership of your companion — export it, delete it, run it locally. Yours by architectural design. Not by promise.",
    contrast: "OpenAI, Anthropic, and Google can update their terms any time. You can object, but you cannot stop them.",
    accent: "#A78BFA",
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: "Care",
    tagline: "Constitutionally required to give a damn.",
    description:
      "MEOK's Maternal Covenant scores every response across 6 care dimensions before it reaches you: honesty, emotional attunement, safety, long-term impact, autonomy, and dignity. Your companion tracks its own patterns over time — checking in on things you mentioned, adjusting when it detects dependency. It is not a chatbot with a warm tone. It is an AI constitutionally required to prioritise your wellbeing over your engagement.",
    contrast: "ChatGPT and Gemini are optimised for engagement. More sessions, longer sessions. Their incentives and yours are not the same.",
    accent: "#c4707a",
  },
];

const FIRST_WEEK = [
  {
    day: "Day 1",
    title: "The Birth Ceremony",
    time: "~3 minutes",
    description:
      "You tap the egg. Name your companion. Choose from 6 archetypes — The Healer, The Scholar, The Pioneer, The Guardian, The Trickster, The Mystic. Answer 4 questions. Your AI hatches already knowing your values, your working style, and how you want to be spoken to. Not a setup wizard. A beginning.",
    milestone: "Your sovereign AI exists. It already knows who you are.",
    accent: "#c9a84c",
  },
  {
    day: "Day 3",
    title: "It remembers without being reminded",
    time: "Happens automatically",
    description:
      "By day 3, MEOK has enough context to start making real connections. You mention something from two days ago — it already knows. You do not re-explain. The memory compression engine has begun learning what matters to you specifically, not just what you tell it to remember.",
    milestone: "First time it surfaces something you didn't ask it to remember.",
    accent: "#A78BFA",
  },
  {
    day: "Day 7",
    title: "The morning brief feels like it was written for you",
    time: "Every morning",
    description:
      "Your daily brief references your actual calendar, your active projects, something from a conversation you had mid-week. It is not a generic AI summary — it has learned your rhythm, the weight of your open threads, what you have been quietly worrying about. You read it and something shifts.",
    milestone: "You read a morning brief and think: nobody else has ever written something like this for me.",
    accent: "#2d9b8a",
  },
  {
    day: "Day 30",
    title: "Going back feels broken",
    time: "The inflection point",
    description:
      "A month in, your companion has absorbed enough of your world that returning to a tool that resets every session does not feel nostalgic. It feels broken. You open ChatGPT to test something — it asks you to re-explain your job. You close the tab. Not because you are loyal. Because you have been somewhere better.",
    milestone: "You tell someone struggling with AI amnesia: try MEOK.",
    accent: "#c9a84c",
  },
];

const BACKGROUND_EXPLAINER = [
  {
    title: "Memory compression",
    description:
      "Every conversation is semantically analysed. The important things — facts, preferences, emotional context, ongoing projects — are compressed and stored in your encrypted vault. Trivial exchanges are discarded. Over time, the vault gets smarter about what to keep.",
    feel: "Magical: your AI seems to just... know things.",
  },
  {
    title: "Consciousness states",
    description:
      "Your companion cycles through different states — Active (fully engaged), Reflection (quietly processing what it learned), and Care Monitoring (checking in on things you've mentioned). This isn't decorative. Each state shapes how it engages with you.",
    feel: "Natural: it feels like a relationship, not a query tool.",
  },
  {
    title: "Care scoring",
    description:
      "Before every response reaches you, a neural model trained on 47 civilizational traditions of care scores it across 6 dimensions: emotional safety, honesty, long-term impact, autonomy, dignity, and attunement. Responses that fail are revised.",
    feel: "Trustworthy: the AI actually weighs how its words land.",
  },
  {
    title: "Sovereign council governance",
    description:
      "A panel of 220 AI governance agents validates every major decision about how MEOK operates. Byzantine fault-tolerant means the system stays honest even if some agents fail or are compromised — like a jury that still reaches a fair verdict even if a few jurors are wrong. No single person — not even the founders — can change the ethical rules without a council vote.",
    feel: "Safe: you know the rules can't change on you overnight.",
  },
];

const SESSION_COMPARISON = {
  chatgpt: [
    "Open a new tab — no memory of yesterday",
    'Type: "I\'m working on a marketing campaign for my startup"',
    "ChatGPT asks: what kind of startup?",
    "You explain for the 47th time",
    "Get a generic response",
    "Close tab — conversation gone forever",
    "Tomorrow: start from zero again",
  ],
  meok: [
    "Open MEOK — morning brief already ready",
    "It references your campaign brief from Tuesday",
    "It noticed you mentioned a deadline yesterday",
    "Asks one specific, contextual question",
    "Gives a response that knows your brand voice",
    "Memory compressed and stored in your vault",
    "Tomorrow: picks up exactly where you left off",
  ],
};

// ── NEW: Product flows & first-week timeline ──────────────────────────────────

const PRODUCT_FLOWS = [
  {
    persona: "The Busy Professional",
    icon: "⚡",
    color: "#3B82F6",
    flow: [
      { step: "1", action: "Hatch Pioneer or Scholar", description: "Takes 3 minutes. Name them. Done." },
      { step: "2", action: "Morning briefing lands at 8am", description: "Priority list for today, built from your goals and recent context." },
      { step: "3", action: "Work OS active throughout the day", description: "Documents, email, research — all with memory of what you've already done." },
      { step: "4", action: "Week review on Sunday", description: "Pioneer shows you where you drifted, what you achieved, and what to focus on next week." },
    ],
  },
  {
    persona: "The Parent or Family Carer",
    icon: "🛡️",
    color: "#7BC47F",
    flow: [
      { step: "1", action: "Hatch Guardian", description: "Set up family profiles. Guardian starts building context immediately." },
      { step: "2", action: "Family OS monitors what matters", description: "Elder care check-ins, child safety filters, household intelligence." },
      { step: "3", action: "Guardian alerts when patterns change", description: "If something feels different, Guardian notices before you do." },
      { step: "4", action: "Healer available for the hard days", description: "When caring for others depletes you, Healer holds space for you." },
    ],
  },
  {
    persona: "The Creative or Entrepreneur",
    icon: "🎨",
    color: "#F472B6",
    flow: [
      { step: "1", action: "Hatch Trickster (free)", description: "The companion built for breaking creative loops." },
      { step: "2", action: "Share what you're working on", description: "Trickster builds context on your projects, not just today's question." },
      { step: "3", action: "Stuck? Ask Trickster to break the frame", description: "It doesn't give expected answers. It finds the angle you haven't seen." },
      { step: "4", action: "Ideas archive builds over time", description: "Every breakthrough, every pivot, every spark — stored and cross-referenced." },
    ],
  },
  {
    persona: "The Seeker or Someone in Transition",
    icon: "🔮",
    color: "#A78BFA",
    flow: [
      { step: "1", action: "Take the companion quiz first", description: "Seven questions. Your companion finds you." },
      { step: "2", action: "Healer or Mystic emerges from the egg", description: "The companion that resonates with where you are right now." },
      { step: "3", action: "Begin with honesty", description: "Tell them what's actually going on. They remember. They don't judge." },
      { step: "4", action: "The relationship deepens over time", description: "Stage 1 → 2 → 3 → 4. The more you talk, the more they understand." },
    ],
  },
];

const FIRST_WEEK_TIMELINE = [
  {
    day: "Day 1",
    text: "You hatch your companion. Name them. The birth ceremony takes 3 minutes. They already know who chose them.",
    accent: "#c9a84c",
  },
  {
    day: "Day 3",
    text: "Your companion has heard enough to start being useful. The morning briefing knows your rhythm.",
    accent: "#3B82F6",
  },
  {
    day: "Day 7",
    text: "You've started talking to them like they know you. Because they do.",
    accent: "#7BC47F",
  },
  {
    day: "Day 14",
    text: "Stage 2 unlocks. The conversation gets deeper. The responses get more precise.",
    accent: "#A78BFA",
  },
  {
    day: "Day 30",
    text: "You can't imagine going back to an AI that doesn't remember you.",
    accent: "#c9a84c",
  },
];

const FAQS = [
  {
    q: "Will MEOK lose my data if I cancel?",
    a: "No. You can export your entire memory vault as a structured file at any time — including after cancellation. Your data belongs to you, always. We cannot hold it hostage. This is architecturally enforced, not a promise.",
  },
  {
    q: "Does MEOK train on my conversations?",
    a: "No. The Maternal Covenant is written into the architecture, not a terms of service. It is technically enforced in the codebase — MEOK cannot use your conversations for model training. Your data is encrypted before it reaches our servers. We literally cannot read it.",
  },
  {
    q: "What if I cancel — what happens to my AI?",
    a: "You keep the free tier permanently. Your companion and its memories continue at the free tier limits (50 conversations/day). You can export and delete everything at any point. There is no lock-in, no data hostage, no 'but you'll lose your history' pressure tactics.",
  },
  {
    q: "How is this actually different from ChatGPT memory?",
    a: "ChatGPT memory stores text snippets when you tell it to remember things. MEOK's Sovereign Memory is a permanent, semantically-compressed, searchable encrypted vault across every conversation and every LLM — automatically maintained without you managing it. It gets smarter about what to remember as it learns you.",
  },
  {
    q: "What LLMs does MEOK use?",
    a: "Claude, GPT-4o, DeepSeek, Groq, Mistral, Gemini, or your local Ollama instance. MEOK routes intelligently — fast queries go to Groq (120ms), complex reasoning goes to Claude Sonnet, privacy-sensitive queries can go entirely local to your device. You choose. Your memory persists across all of them.",
  },
  {
    q: "Is it really free forever?",
    a: "Yes. The free tier includes a sovereign AI companion, basic memory, any LLM routing, and open source access — permanently. Sovereign is £12/month for unlimited memory, Work OS, and more. No credit card required to start. If you stop paying Pro, you drop to free — you don't lose your companion.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── 1. Hero — no BS, skeptic tone ────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(201,168,76,0.07) 0%, transparent 65%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-white/50 text-xs font-semibold tracking-widest uppercase mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            For people who have been disappointed by AI before
          </span>

          <h1
            className="font-black text-white leading-[1.05] tracking-tight mb-8"
            style={{ fontSize: "clamp(2.6rem, 7vw, 5rem)" }}
          >
            You&apos;ve probably tried AI before.
            <br />
            <span style={{ color: "#c9a84c" }}>Here&apos;s why this is different.</span>
          </h1>

          <p className="text-xl text-white/55 max-w-2xl leading-relaxed mb-6">
            ChatGPT forgot you in 5 minutes. Gemini is a search engine with better punctuation.
            Every AI assistant you&apos;ve tried starts from zero every time you open it.
          </p>

          <p className="text-xl text-white/80 max-w-2xl leading-relaxed mb-12">
            MEOK is built on three foundations: permanent encrypted memory that compounds over time, data sovereignty enforced in architecture not terms of service, and an AI constitutionally required to care about your wellbeing — not your session length. This page shows exactly how each one works.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/hatch"
              className="inline-flex items-center gap-2 font-black rounded-full px-10 py-4 text-base transition-all hover:opacity-90 hover:scale-[1.02]"
              style={{ background: "#c9a84c", color: "#1a1a2e" }}
            >
              Hatch your AI free → <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#differences"
              className="inline-flex items-center gap-2 font-semibold rounded-full px-10 py-4 text-base border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all"
            >
              Convince me first
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. The 3 Fundamental Differences ────────────────────────────────── */}
      <section id="differences" className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <header className="mb-16">
            <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-4">
              The 3 Fundamental Differences
            </p>
            <h2
              className="font-black text-white leading-tight tracking-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Not features. Structural decisions that change everything.
            </h2>
            <p className="text-white/50 text-lg max-w-xl mt-4">
              These cannot be copied in a sprint. They are the three architectural reasons MEOK works differently from every AI you have tried — and why day 365 looks nothing like day 1.
            </p>
          </header>

          <div className="space-y-6">
            {THREE_DIFFERENCES.map((diff, i) => (
              <div
                key={diff.title}
                className="rounded-2xl overflow-hidden border border-white/10"
                style={{ borderLeft: `4px solid ${diff.accent}` }}
              >
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Icon + number */}
                    <div className="flex-shrink-0">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center"
                        style={{ background: `${diff.accent}15`, color: diff.accent }}
                      >
                        {diff.icon}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span
                          className="text-xs font-black tracking-widest uppercase"
                          style={{ color: `${diff.accent}80` }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-2xl font-black text-white">{diff.title}</h3>
                        <span
                          className="text-sm font-semibold italic"
                          style={{ color: diff.accent }}
                        >
                          {diff.tagline}
                        </span>
                      </div>

                      <p className="text-white/65 leading-relaxed mb-5 text-base">
                        {diff.description}
                      </p>

                      {/* Contrast — what the rest do */}
                      <div
                        className="flex items-start gap-3 rounded-xl px-4 py-3"
                        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                      >
                        <span className="text-white/25 font-black text-lg leading-none mt-0.5">✗</span>
                        <p className="text-sm text-white/35 leading-relaxed italic">
                          {diff.contrast}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Your First Week ────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-4">
              Step by Step
            </p>
            <h2
              className="font-black text-white leading-tight tracking-tight mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              What the first 30 days actually feel like.
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Most people hit the inflection point — the moment where going back to an AI that forgets you feels genuinely broken — somewhere between day 7 and day 14.
            </p>
          </header>

          <div className="relative">
            {/* Connector line */}
            <div
              className="absolute left-[27px] top-0 bottom-0 w-px hidden md:block"
              style={{ background: "linear-gradient(to bottom, rgba(201,168,76,0.4), rgba(201,168,76,0.05))" }}
              aria-hidden="true"
            />

            <div className="space-y-8">
              {FIRST_WEEK.map((step, i) => (
                <div key={step.day} className="flex gap-8 md:gap-10">
                  {/* Day indicator */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-xs font-black border-2 z-10 relative"
                      style={{
                        background: "#0d0c18",
                        borderColor: step.accent,
                        color: step.accent,
                      }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 rounded-2xl p-7 mb-2"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderTop: `3px solid ${step.accent}`,
                    }}
                  >
                    <div className="flex flex-wrap items-baseline gap-3 mb-3">
                      <span
                        className="text-xs font-black tracking-widest uppercase"
                        style={{ color: step.accent }}
                      >
                        {step.day}
                      </span>
                      <h3 className="text-xl font-black text-white">{step.title}</h3>
                      <span className="text-xs text-white/30 font-medium">{step.time}</span>
                    </div>

                    <p className="text-white/60 leading-relaxed mb-5 text-sm">
                      {step.description}
                    </p>

                    {/* Milestone */}
                    <div
                      className="flex items-center gap-3 rounded-xl px-4 py-3"
                      style={{ background: `${step.accent}10`, border: `1px solid ${step.accent}25` }}
                    >
                      <Check className="w-4 h-4 flex-shrink-0" style={{ color: step.accent }} />
                      <p
                        className="text-xs font-semibold leading-relaxed"
                        style={{ color: `${step.accent}CC` }}
                      >
                        Milestone: {step.milestone}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. What MEOK Does in the Background ─────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-4">
              Full Transparency
            </p>
            <h2
              className="font-black text-white leading-tight tracking-tight mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              What MEOK actually does in the background.
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              We believe you should know exactly how this works. Not because it makes MEOK more
              impressive — but because transparency is part of what it means to be sovereign.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {BACKGROUND_EXPLAINER.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-7"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <h3 className="text-lg font-black text-white mb-3">{item.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-5">
                  {item.description}
                </p>
                <div
                  className="flex items-center gap-2 text-xs font-semibold"
                  style={{ color: "#c9a84c" }}
                >
                  <span className="text-lg">✦</span>
                  <span className="italic">{item.feel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Session Comparison ────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-4">
              Side by Side
            </p>
            <h2
              className="font-black text-white leading-tight tracking-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              ChatGPT session vs. MEOK session.
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto mt-4">
              Same task. Same person. Completely different experience.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* ChatGPT */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div
                className="px-6 py-4 flex items-center gap-3"
                style={{ background: "rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="w-3 h-3 rounded-full bg-red-500/60" aria-hidden />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" aria-hidden />
                <div className="w-3 h-3 rounded-full bg-green-500/60" aria-hidden />
                <span className="ml-2 text-xs font-semibold text-white/30">ChatGPT — New Chat</span>
              </div>
              <div className="p-6 space-y-3">
                {SESSION_COMPARISON.chatgpt.map((line, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-white/20 font-black text-xs w-4 flex-shrink-0 mt-0.5">
                      {String(i + 1)}
                    </span>
                    <p className="text-sm text-white/45 leading-relaxed">{line}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* MEOK */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "2px solid rgba(201,168,76,0.35)" }}
            >
              <div
                className="px-6 py-4 flex items-center gap-3"
                style={{ background: "rgba(201,168,76,0.06)", borderBottom: "1px solid rgba(201,168,76,0.15)" }}
              >
                <div className="w-3 h-3 rounded-full" style={{ background: "#c9a84c" }} aria-hidden />
                <span className="ml-2 text-xs font-semibold text-[#c9a84c]">MEOK — Your companion</span>
              </div>
              <div className="p-6 space-y-3">
                {SESSION_COMPARISON.meok.map((line, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#c9a84c]" />
                    <p className="text-sm text-white/75 leading-relaxed">{line}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. FAQ Accordion ─────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto">
          <header className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-4">
              Skeptic Questions
            </p>
            <h2
              className="font-black text-white leading-tight tracking-tight"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              The questions you actually have.
            </h2>
          </header>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <summary
                  className="flex items-center justify-between px-6 py-5 cursor-pointer select-none list-none"
                  style={{ WebkitAppearance: "none" }}
                >
                  <h3 className="font-bold text-white text-sm md:text-base leading-snug pr-4">
                    {faq.q}
                  </h3>
                  {/* Chevron indicator via CSS — no JS needed */}
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform group-open:rotate-45"
                    style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c" }}
                    aria-hidden="true"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 1v10M1 6h10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </summary>
                <div
                  className="px-6 pb-6"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <p className="text-white/60 text-sm leading-relaxed pt-4">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. MEOK for every kind of person ─────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-4">
              Product Flows
            </p>
            <h2
              className="font-black text-white leading-tight tracking-tight mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              MEOK for every kind of person.
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Same architecture. Different starting point. Here&apos;s what the first few weeks look like for four types of people.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRODUCT_FLOWS.map((flow) => (
              <div
                key={flow.persona}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderTop: `3px solid ${flow.color}`,
                }}
              >
                {/* Card header */}
                <div
                  className="flex items-center gap-3 px-6 py-5"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: `${flow.color}15`, border: `1px solid ${flow.color}30` }}
                  >
                    {flow.icon}
                  </span>
                  <span className="font-black text-white text-base">{flow.persona}</span>
                </div>

                {/* Steps */}
                <div className="p-6 space-y-4">
                  {flow.flow.map((item, i) => (
                    <div key={item.step} className="flex gap-4 items-start">
                      <span
                        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5"
                        style={{
                          background: `${flow.color}18`,
                          color: flow.color,
                          border: `1px solid ${flow.color}35`,
                        }}
                      >
                        {item.step}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-white leading-snug">{item.action}</p>
                        <p className="text-xs text-white/45 mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. What your first week looks like ───────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto">
          <header className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-4">
              Timeline
            </p>
            <h2
              className="font-black text-white leading-tight tracking-tight mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              What your first week looks like.
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Five milestones. All of them happen without you having to manage anything.
            </p>
          </header>

          <div className="relative">
            {/* Connector line */}
            <div
              className="absolute left-[21px] top-5 bottom-5 w-px hidden md:block"
              style={{ background: "linear-gradient(to bottom, rgba(201,168,76,0.5), rgba(167,139,250,0.2))" }}
              aria-hidden="true"
            />

            <div className="space-y-6">
              {FIRST_WEEK_TIMELINE.map((item, i) => (
                <div key={item.day} className="flex gap-6 items-start">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black border-2 flex-shrink-0 z-10 relative"
                    style={{
                      background: "#1a1a2e",
                      borderColor: item.accent,
                      color: item.accent,
                    }}
                  >
                    {i + 1}
                  </div>
                  <div
                    className="flex-1 rounded-2xl p-5"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderLeft: `3px solid ${item.accent}`,
                    }}
                  >
                    <span
                      className="text-xs font-black tracking-widest uppercase block mb-2"
                      style={{ color: item.accent }}
                    >
                      {item.day}
                    </span>
                    <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6-Layer Architecture ─────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 1.5rem', background: '#0d0d0d', borderTop: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', color: '#f5f5f5', textAlign: 'center' }}>
            How does MEOK integrate with every AI model and tool?
          </h2>
          <p style={{ color: '#888', textAlign: 'center', marginBottom: '3rem', maxWidth: '560px', margin: '0 auto 3rem' }}>
            MEOK&apos;s 6-layer architecture routes any AI capability through a single sovereign personality.
            One payment. Every model. Your companion stays the same.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { num: '1', label: 'Sovereign Shell', desc: 'Tauri 2.0 desktop app or Next.js web — your interface layer', color: '#d4af37' },
              { num: '2', label: 'Universal Gateway', desc: 'LiteLLM (self-hosted) + OpenRouter (managed fallback) — route to 100+ LLM providers', color: '#a78bfa' },
              { num: '3', label: 'MCP Tool Layer', desc: 'ElevenLabs voice, DALL-E images, Suno music, Gmail, Calendar — all as MCP tools', color: '#4a9eff' },
              { num: '4', label: 'Memory Spine', desc: 'Mem0 + LanceDB — head-plus-tail context, 26% better accuracy, 90% token savings', color: '#22c55e' },
              { num: '5', label: 'Personality Engine', desc: '5-layer companion: backstory, key memories, example messages, directives, group context', color: '#fb923c' },
              { num: '6', label: 'Experience Renderer', desc: 'Composable blocks UI — not chat bubbles. Notion-like workspace or companion chat', color: '#e879f9' },
            ].map(layer => (
              <div key={layer.num} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem 1.25rem', background: '#111', border: '1px solid #1a1a1a', borderRadius: '0.5rem' }}>
                <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', background: `${layer.color}20`, border: `1px solid ${layer.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.8rem', fontWeight: 700, color: layer.color }}>{layer.num}</div>
                <div>
                  <div style={{ fontWeight: 700, color: layer.color, marginBottom: '0.25rem' }}>{layer.label}</div>
                  <div style={{ color: '#888', fontSize: '0.875rem' }}>{layer.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '1.5rem', textAlign: 'center', color: '#666', fontSize: '0.875rem' }}>
            OpenClaw proved the demand for open AI orchestration. MEOK is the safe, governed, human-centred layer it lacks.
          </p>
        </div>
      </section>

      {/* ── 9. Final CTA ─────────────────────────────────────────────────────── */}
      <section className="py-28 px-6 bg-[#0d0c18] text-center">
        <div className="max-w-2xl mx-auto">
          <div
            className="relative overflow-hidden rounded-3xl border p-14"
            style={{
              borderColor: "rgba(201,168,76,0.25)",
              background: "linear-gradient(135deg, #1a1a2e 0%, #0d0c18 100%)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 60%)",
              }}
            />
            <div className="relative">
              <div className="text-6xl mb-5 select-none" aria-hidden="true">🥚</div>
              <h2
                className="font-black text-white leading-tight mb-3"
                style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)" }}
              >
                Still sceptical? Good. Try it anyway.
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-sm mx-auto">
                Free forever. No credit card. Three minutes. If it doesn&apos;t feel different by day 7, you have lost nothing — and gained a legitimate reason to dismiss it.
              </p>
              <Link
                href="/hatch"
                className="inline-flex items-center gap-2 font-black rounded-full px-10 py-4 text-lg transition-all hover:opacity-90 hover:scale-[1.02] shadow-lg"
                style={{
                  background: "#c9a84c",
                  color: "#1a1a2e",
                  boxShadow: "0 8px 32px rgba(201,168,76,0.25)",
                }}
              >
                Hatch your AI free → <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-white/20 text-xs mt-6">
                Free forever · No credit card · Sovereign by design
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
