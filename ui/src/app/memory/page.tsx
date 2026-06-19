import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Infinite Memory -- Your AI Never Forgets | MEOK.AI",
  description:
    "MEOK Memory is a sovereign, encrypted memory layer for every AI you use. Claude, GPT-4o, DeepSeek, Groq -- they all share your context. You never re-explain yourself again.",
  alternates: { canonical: "https://meok.ai/memory" },
  openGraph: {
    title: "Infinite Memory -- Your AI Never Forgets | MEOK.AI",
    description:
      "MEOK Memory is a sovereign, encrypted memory layer for every AI you use. Claude, GPT-4o, DeepSeek, Groq -- they all share your context. You never re-explain yourself again.",
    type: "website",
  },
};

const PAIN_CARDS = [
  {
    text: "Every new ChatGPT conversation starts from zero. You re-explain your whole context.",
  },
  {
    text: "Switch from Claude to GPT-4o? Start again. They don't share memory.",
  },
  {
    text: "Your AI 'knows' you -- until you close the tab. Then it forgets everything.",
  },
];

const FEATURE_CARDS = [
  {
    icon: "🧠",
    title: "Semantic Memory",
    desc: "Stores memories as vector embeddings. Not just text -- meaning. Your AI finds the right memory even when you don't remember the exact words.",
  },
  {
    icon: "🔗",
    title: "Cross-AI Sync",
    desc: "One click connects MEOK Memory to Claude, GPT-4o, DeepSeek, Groq, Gemini, Perplexity, and Ollama. They all get your full context -- instantly.",
  },
  {
    icon: "🔐",
    title: "Sovereign Encryption",
    desc: "Your memories are encrypted with a key only you hold. Not MEOK, not Anthropic, not OpenAI. Only you can read your memories.",
  },
  {
    icon: "♾️",
    title: "Infinite Timeline",
    desc: "No 7-day expiry. No 30-conversation limit. Memories from Day 1 are as accessible as memories from yesterday. Your AI grows with you forever.",
  },
];

const HOW_IT_WORKS = [
  {
    n: "01",
    title: "Hatch your AI",
    desc: "When you hatch your companion, it creates your sovereign memory vault -- an encrypted pgvector store that lives on MEOK's servers but only you can read.",
  },
  {
    n: "02",
    title: "Connect your AIs",
    desc: "In one click, add any AI to your MEOK Memory network. We provide a memory injection layer -- your context is automatically prepended to every conversation on every platform.",
  },
  {
    n: "03",
    title: "Everything is remembered",
    desc: "As you talk to any connected AI, MEOK silently captures the key context -- decisions made, preferences expressed, projects discussed -- and adds them to your vault.",
  },
  {
    n: "04",
    title: "Ask anything, anywhere",
    desc: "Start a conversation on Claude, continue on GPT-4o, finish on your phone with Groq. Your AI always knows your full story.",
  },
];

const AI_PLATFORMS = [
  { icon: "🟣", name: "Claude", connected: true },
  { icon: "🟢", name: "GPT-4o", connected: false },
  { icon: "🔵", name: "DeepSeek", connected: false },
  { icon: "🟠", name: "Groq", connected: false },
  { icon: "🔴", name: "Gemini", connected: false },
  { icon: "🟡", name: "Perplexity", connected: false },
  { icon: "⚫", name: "Ollama (Local)", connected: false },
  { icon: "✨", name: "Custom API", connected: false },
];

const MEMORY_TIMELINE = [
  {
    label: "Day 1",
    title: "Your name, goals, and first impressions",
    snippet: `"I want to build a profitable SaaS by Q3. I work best in the mornings."`,
  },
  {
    label: "Week 1",
    title: "Your projects, preferences, and daily patterns",
    snippet: `"Working on meok.ai -- Next.js, Tailwind. Prefers direct answers, no hedging."`,
  },
  {
    label: "Month 1",
    title: "Your relationships, values, and long-term goals",
    snippet: `"Mentions Sarah often -- business partner. Values autonomy above everything."`,
  },
  {
    label: "Year 1",
    title: "Your full life context -- a sovereign autobiography",
    snippet: `"Founded MEOK. Closed first enterprise deal. Moved to Edinburgh in March."`,
  },
  {
    label: "Forever",
    title: "Every memory, fully indexed, always accessible, always yours",
    snippet: `"2,847 memories. 14 connected AIs. 0 lost conversations."`,
  },
];

const STATS = [
  {
    value: "pgvector",
    label: "Memory technology. Used by companies with billions of records.",
  },
  {
    value: "AES-256",
    label: "Encryption standard. Military-grade. Only your key.",
  },
  {
    value: "0ms",
    label: "Extra time spent re-explaining context to your AI. Ever again.",
  },
];

const FAQS = [
  {
    q: "What does MEOK Memory actually store?",
    a: "Key facts from your conversations: decisions, preferences, relationships, projects, recurring topics, and your personal context. It does NOT store full conversation transcripts by default.",
  },
  {
    q: "Can I see and edit my memories?",
    a: "Yes. Your Memory Explorer (in the dashboard) shows every memory with its source, date, and relevance score. You can edit, tag, or delete any memory.",
  },
  {
    q: "What if I want to forget something?",
    a: "Delete it instantly from Memory Explorer. It's gone -- permanently, from all connected AIs, with cryptographic verification.",
  },
  {
    q: "Do my memories train MEOK's AI?",
    a: "Never. Your memories are encrypted with your key before they're stored. MEOK cannot read them. They cannot be used for training.",
  },
  {
    q: "How does the cross-AI connection work technically?",
    a: "MEOK provides a browser extension and API that automatically prepends a compressed memory context to each new conversation on supported platforms. You can set how much context to inject per platform.",
  },
  {
    q: "What's the memory limit?",
    a: "On the free Explorer tier: Sovereign Memory is permanent — no expiry, no cap on memory count. Sovereign (£12/mo): permanent vault with unlimited memories. Family (£29/mo): permanent vault per member plus shared family context. BYOK (£5/mo): basic vault.",
  },
];

const SOFTWARE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MEOK Memory",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://meok.ai/memory",
  description:
    "MEOK Memory is a sovereign, encrypted memory layer for every AI you use. Claude, GPT-4o, DeepSeek, Groq, Gemini, Perplexity, and Ollama share your context via a pgvector semantic store, so you never re-explain yourself again.",
  publisher: { "@type": "Organization", name: "MEOK AI Labs", url: "https://meok.ai" },
  featureList: [
    "Semantic memory via vector embeddings",
    "Cross-AI sync across Claude, GPT-4o, DeepSeek, Groq, Gemini, Perplexity, and Ollama",
    "Sovereign encryption — only your key can read your memories",
    "Infinite timeline with no expiry or memory cap",
  ],
  offers: [
    {
      "@type": "Offer",
      name: "Explorer (Free)",
      priceCurrency: "GBP",
      price: "0",
      availability: "https://schema.org/InStock",
      url: "https://meok.ai/memory",
    },
    {
      "@type": "Offer",
      name: "BYOK",
      priceCurrency: "GBP",
      price: "5",
      priceSpecification: { "@type": "UnitPriceSpecification", price: "5", priceCurrency: "GBP", unitText: "MONTH" },
      availability: "https://schema.org/InStock",
      url: "https://meok.ai/memory",
    },
    {
      "@type": "Offer",
      name: "Sovereign",
      priceCurrency: "GBP",
      price: "12",
      priceSpecification: { "@type": "UnitPriceSpecification", price: "12", priceCurrency: "GBP", unitText: "MONTH" },
      availability: "https://schema.org/InStock",
      url: "https://meok.ai/memory",
    },
    {
      "@type": "Offer",
      name: "Family",
      priceCurrency: "GBP",
      price: "29",
      priceSpecification: { "@type": "UnitPriceSpecification", price: "29", priceCurrency: "GBP", unitText: "MONTH" },
      availability: "https://schema.org/InStock",
      url: "https://meok.ai/memory",
    },
  ],
};

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function MemoryPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-28 px-6 text-center overflow-hidden"
        style={{ background: "#0d0c18" }}
      >
        {/* Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(201,168,76,0.12) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          {/* Gold pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-[0.2em] mb-10"
            style={{ borderColor: "rgba(201,168,76,0.4)", color: "#c9a84c", background: "rgba(201,168,76,0.08)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            Sovereign Memory System
          </div>

          <h1
            className="font-black text-white mb-8"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.05, fontWeight: 900 }}
          >
            Your memory,{" "}
            <span style={{ color: "#c9a84c" }}>extended infinitely.</span>
          </h1>

          <p className="mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(245,240,232,0.7)", fontSize: "1.2rem" }}>
            Every conversation, every insight, every memory -- encrypted, owned by you, and carried
            forward forever. Switch between Claude, GPT-4o, DeepSeek, or any AI. MEOK remembers
            for all of them.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/hatch"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm transition-all"
              style={{ background: "#c9a84c", color: "#0d0c18" }}
            >
              Start remembering →
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm border transition-all"
              style={{ borderColor: "rgba(245,240,232,0.25)", color: "rgba(245,240,232,0.8)", background: "transparent" }}
            >
              How it works ↓
            </Link>
          </div>

          {/* Timeline graphic */}
          <div className="mt-20 max-w-2xl mx-auto">
            <div className="relative flex items-center justify-between">
              {/* Connecting line */}
              <div
                className="absolute left-0 right-0 top-3 h-px"
                style={{ background: "linear-gradient(to right, rgba(201,168,76,0.2), rgba(201,168,76,0.7), rgba(201,168,76,0.2))" }}
              />
              {["Day 1", "Week 1", "Month 1", "Year 1", "Forever"].map((label, i) => (
                <div key={label} className="flex flex-col items-center gap-3 relative z-10">
                  <div
                    className="w-6 h-6 rounded-full border-2 flex-shrink-0"
                    style={{
                      background: "#c9a84c",
                      borderColor: "#0d0c18",
                      boxShadow: "0 0 14px rgba(201,168,76,0.7)",
                      opacity: 0.6 + i * 0.1,
                    }}
                  />
                  <span className="text-xs font-bold" style={{ color: "rgba(201,168,76,0.8)" }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── MEMORY ARCHITECTURE ──────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#1a1a2e" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="text-xs font-bold tracking-[0.2em] uppercase block mb-4"
              style={{ color: "rgba(201,168,76,0.7)" }}
            >
              Under the hood
            </span>
            <h2
              className="font-black text-white tracking-tight"
              style={{ fontWeight: 900, fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
            >
              How MEOK memory is built
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.55)" }}>
              Four layers that work together to give you memory that actually compounds over time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                num: "01",
                title: "Episodes",
                desc: "Every meaningful conversation, decision, or insight captured as a timestamped episode. The raw material of memory — what happened, when, and with which AI.",
                detail: "Example: \"Decided to push Q2 launch to Q3 — scope too large. 14 Mar 2026.\"",
              },
              {
                num: "02",
                title: "Semantic search",
                desc: "Every episode is embedded as a 1536-dimensional vector. When you or your AI needs context, MEOK finds the most relevant memories by meaning — not keywords.",
                detail: "Example: Asking about \"product timeline\" surfaces every launch-related episode.",
              },
              {
                num: "03",
                title: "Temporal chains",
                desc: "MEOK threads episodes into timelines — so it knows not just that you discussed pricing, but the full sequence of how your thinking evolved on it over months.",
                detail: "Example: Pricing strategy thread from initial idea through 6 iterations.",
              },
              {
                num: "04",
                title: "Care patterns",
                desc: "MEOK learns what you value, what drains you, and what energises you. These patterns feed your care score, morning brief, and how your companion prioritises what to tell you.",
                detail: "Example: Learns that early mornings are your deep work time — protects them.",
              },
            ].map((layer) => (
              <div
                key={layer.num}
                className="p-7 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.2)" }}
              >
                <div
                  className="text-4xl font-black mb-4 leading-none"
                  style={{ color: "rgba(201,168,76,0.25)", fontWeight: 900 }}
                >
                  {layer.num}
                </div>
                <h3 className="font-bold text-white text-base mb-2" style={{ color: "#c9a84c" }}>
                  {layer.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(245,240,232,0.6)" }}>
                  {layer.desc}
                </p>
                <p
                  className="text-xs italic leading-relaxed"
                  style={{ color: "rgba(201,168,76,0.55)", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "0.75rem" }}
                >
                  {layer.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT MEOK REMEMBERS VS WHAT YOU TELL IT ─────────────── */}
      <section className="py-24 px-6" style={{ background: "#0d0c18" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="font-black text-white tracking-tight"
              style={{ fontWeight: 900, fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
            >
              What MEOK remembers vs what you have to tell it
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.5)" }}>
              Most things happen automatically. A few things, you choose to share once.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Column A — MEOK remembers automatically */}
            <div
              className="p-7 rounded-2xl"
              style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.25)" }}
            >
              <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: "#c9a84c" }}>
                MEOK remembers automatically
              </p>
              <ul className="space-y-3">
                {[
                  "Every decision made in conversation",
                  "Projects you're working on and their status",
                  "Relationships — who matters and how you relate to them",
                  "Your writing style, tone, and vocabulary",
                  "Recurring preferences (how long your emails are, your sign-off style)",
                  "What drained or energised you this week",
                  "Things you said you'd follow up on",
                  "Research findings from every MEOK session",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "rgba(245,240,232,0.75)" }}>
                    <span className="text-[#c9a84c] flex-shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column B — You tell it once */}
            <div
              className="p-7 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: "rgba(245,240,232,0.35)" }}>
                You tell it once (and it never asks again)
              </p>
              <ul className="space-y-3">
                {[
                  "Your name and how you like to be addressed",
                  "Your role, company, and what you're building",
                  "Your long-term goals and values",
                  "Relationships MEOK couldn't infer — family, close friends",
                  "Sensitive context you want remembered (health, finances)",
                  "How much detail you want in responses",
                  "Which topics you want proactive updates on",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "rgba(245,240,232,0.45)" }}>
                    <span style={{ color: "rgba(245,240,232,0.25)", flexShrink: 0, marginTop: 2 }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE PROBLEM ──────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#0d0c18" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="font-black text-white tracking-tight"
              style={{ fontWeight: 900, fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
            >
              The AI amnesia problem is costing you hours.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {PAIN_CARDS.map((card, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderLeft: "4px solid rgba(201,168,76,0.6)" }}
              >
                <div className="text-2xl mb-4">❌</div>
                <p className="text-sm leading-relaxed font-medium" style={{ color: "rgba(245,240,232,0.75)" }}>{card.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="font-black text-2xl sm:text-3xl" style={{ color: "#c9a84c" }}>
              &ldquo;The average knowledge worker re-explains context to AI 11 times per week.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ─── THE SOLUTION ─────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#1a1a2e" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h2
              className="font-black tracking-tight mb-6"
              style={{ color: "#c9a84c", fontWeight: 900, fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
            >
              MEOK Memory: One sovereign brain for all your AIs.
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto leading-relaxed text-base">
              MEOK acts as a memory layer that sits between you and every AI you use. Whatever you discuss
              with Claude, GPT-4o, DeepSeek, Groq, or any other model -- MEOK captures the context, encrypts
              it, and makes it available to every future conversation. Your AI persona, your preferences,
              your projects, your relationships -- remembered perfectly, forever.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16">
            {FEATURE_CARDS.map((card) => (
              <div
                key={card.title}
                className="p-8 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.25)" }}
              >
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3 className="font-bold text-base mb-3" style={{ color: "#c9a84c" }}>
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────────── */}
      <section id="how-it-works" className="py-24 px-6" style={{ background: "#1a1a2e" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="font-black text-white tracking-tight"
              style={{ fontWeight: 900, fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
            >
              How MEOK Memory works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {HOW_IT_WORKS.map((step) => (
              <div
                key={step.n}
                className="p-8 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.2)" }}
              >
                <div
                  className="text-5xl font-black mb-5 leading-none"
                  style={{ color: "#c9a84c", fontWeight: 900 }}
                >
                  {step.n}
                </div>
                <h3 className="font-bold text-base mb-3" style={{ color: "#f5f0e8" }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.6)" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONNECT ALL AIs ──────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#0d0c18" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="font-black text-white tracking-tight mb-4"
              style={{ fontWeight: 900, fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
            >
              Connect every AI you use. Right now.
            </h2>
            <p style={{ color: "rgba(245,240,232,0.6)", fontSize: "1rem" }}>
              MEOK Memory works with every major AI platform.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {AI_PLATFORMS.map((platform) => (
              <div
                key={platform.name}
                className="rounded-2xl p-5 flex flex-col gap-3"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: platform.connected ? "1px solid rgba(201,168,76,0.5)" : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{platform.icon}</span>
                  <span className="text-sm font-semibold text-white">{platform.name}</span>
                </div>
                {platform.connected ? (
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full self-start"
                    style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.3)" }}
                  >
                    Connected ✓
                  </span>
                ) : (
                  <span
                    className="text-xs font-bold self-start cursor-pointer"
                    style={{ color: "rgba(201,168,76,0.7)" }}
                  >
                    Connect →
                  </span>
                )}
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-sm" style={{ color: "rgba(245,240,232,0.4)" }}>
            Coming soon: Cursor, Copilot, Replit, and more.
          </p>

          <div className="text-center mt-10">
            <Link
              href="/memory/connect"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm border transition-all"
              style={{ borderColor: "rgba(201,168,76,0.4)", color: "#c9a84c", background: "rgba(201,168,76,0.08)" }}
            >
              View connection guide →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── MEMORY TIMELINE VISUAL ───────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#1a1a2e" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="font-black text-white tracking-tight"
              style={{ fontWeight: 900, fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
            >
              Your memory grows over time.
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-4 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, rgba(201,168,76,0.2), rgba(201,168,76,0.6), rgba(201,168,76,0.2))" }}
            />

            <div className="flex flex-col gap-10">
              {MEMORY_TIMELINE.map((item) => (
                <div key={item.label} className="flex gap-7 relative">
                  {/* Gold dot */}
                  <div
                    className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center z-10"
                    style={{ background: "#c9a84c", boxShadow: "0 0 16px rgba(201,168,76,0.5)" }}
                  />
                  <div className="pt-0.5">
                    <span className="text-xs font-black uppercase tracking-widest" style={{ color: "#c9a84c" }}>
                      {item.label}
                    </span>
                    <h3 className="font-bold text-white text-base mt-1 mb-2">{item.title}</h3>
                    <p className="text-sm italic leading-relaxed" style={{ color: "rgba(245,240,232,0.45)" }}>
                      {item.snippet}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── MEMORY STATS ─────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#0d0c18" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {STATS.map((stat) => (
              <div key={stat.value} className="text-center">
                <div
                  className="font-black mb-3"
                  style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#c9a84c", fontWeight: 900 }}
                >
                  {stat.value}
                </div>
                <p className="text-sm leading-relaxed max-w-[200px] mx-auto" style={{ color: "rgba(245,240,232,0.55)" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#0d0c18" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="font-black text-white tracking-tight"
              style={{ fontWeight: 900, fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
            >
              Memory questions, answered.
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {FAQS.map((faq) => (
              <div
                key={faq.q}
                className="p-7 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <h3 className="font-bold text-white text-base mb-3">{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.6)" }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className="py-28 px-6 text-center" style={{ background: "#1a1a2e" }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-5xl mb-6">🧠</div>
          <h2
            className="font-black text-white mb-4 tracking-tight"
            style={{ fontWeight: 900, fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Start building your sovereign memory today.
          </h2>
          <p className="mb-10 text-base" style={{ color: "rgba(245,240,232,0.65)" }}>
            Your AI will never forget again.
          </p>
          <Link
            href="/hatch"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-bold text-base transition-all"
            style={{ background: "#c9a84c", color: "#0d0c18" }}
          >
            Hatch your sovereign AI →
          </Link>
        </div>
      </section>

    </div>
  );
}
