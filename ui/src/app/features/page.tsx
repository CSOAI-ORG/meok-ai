import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features — Everything MEOK Can Do | MEOK.AI",
  description: "Birth Ceremony, persistent memory, care membrane, evolution stages, guardian protection, 140+ companions, 15 LLM models, and more. See every feature of the sovereign AI companion platform.",
  openGraph: {
    title: "MEOK Features — Sovereign AI That Remembers You",
    description: "Birth Ceremony, persistent memory, care membrane, evolution stages, guardian protection, and 140+ companions.",
    url: "https://try.meok.ai/features",
    images: [{ url: "https://try.meok.ai/api/og?title=Features&desc=Everything+MEOK+can+do", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://try.meok.ai/features" },
};

const GOLD = "#c9a84c";
const DEEP = "#0d0c18";
const SURFACE = "#13121f";

const FEATURES = [
  {
    icon: "\uD83E\uDE7A", // egg
    title: "Birth Ceremony",
    desc: "Your companion isn't assigned — it's born. Answer 7 poetic questions and watch your egg respond in real time. The companion that emerges is uniquely shaped by your personality.",
    color: GOLD,
  },
  {
    icon: "\uD83D\uDCAC",
    title: "Companion Chat",
    desc: "Three conversation modes: Focused for clarity, Balanced for natural flow, Creative for surprise. Your companion adapts its temperature to match your mood.",
    color: "#A78BFA",
  },
  {
    icon: "\uD83C\uDF31",
    title: "Evolution Stages",
    desc: "Your companion grows through 6 stages: Spark, Bloom, Ember, Crest, Aether, Zenith. Each stage unlocks new personality depth and capabilities.",
    color: "#22C55E",
  },
  {
    icon: "\uD83D\uDEE1\uFE0F",
    title: "Care Membrane",
    desc: "Every response passes through a care validation layer. Thumbs up/down feedback calibrates care dimensions in real time via Bayesian updating.",
    color: "#EF4444",
  },
  {
    icon: "\uD83E\uDDE0",
    title: "Persistent Memory",
    desc: "Your companion remembers. Conversations are searchable, memories decay naturally over time, and important moments are preserved forever.",
    color: "#3B82F6",
  },
  {
    icon: "\uD83D\uDD17",
    title: "Share Your Companion",
    desc: "When your egg hatches, share the moment. The viral cascade mechanic turns your delight into organic growth across 3 social hops.",
    color: "#F59E0B",
  },
  {
    icon: "\u267F",
    title: "Comfort Settings",
    desc: "Font size, contrast, animation preferences, dyslexia-friendly fonts. MEOK adapts to you, not the other way around.",
    color: "#14B8A6",
  },
  {
    icon: "\uD83D\uDCB0",
    title: "Transparent Costs",
    desc: "See exactly what each message costs. Per-model pricing tracked per response. No hidden fees, no surprise bills.",
    color: "#8B5CF6",
  },
  {
    icon: "\uD83D\uDD0D",
    title: "Conversation Search",
    desc: "Find any past conversation instantly with full-text search. Sub-5ms results with highlighted matches.",
    color: "#EC4899",
  },
  {
    icon: "\u26A1",
    title: "Real-Time Connection",
    desc: "Server-sent events keep your companion's state synced live. Consciousness level, care score, and mood update in real time.",
    color: "#F97316",
  },
  {
    icon: "\uD83D\uDC51",
    title: "Sovereign AI OS",
    desc: "MEOK sits on Sovereign Temple v3 — 47 autonomous agents, Byzantine fault-tolerant council, quantum-inspired care optimisation. Your AI runs locally if you want.",
    color: GOLD,
  },
  {
    icon: "\uD83C\uDF0D",
    title: "Any Model, One Memory",
    desc: "Route across Claude, GPT-4o, DeepSeek, Groq, Ollama, and 15+ more. Switch freely — your memory and personality travel with you.",
    color: "#06B6D4",
  },
  {
    icon: "🔌",
    title: "255 MCP Servers",
    desc: "The world's largest independent MCP server marketplace. From AI safety to business automation — every tool is open source, security audited, and ready to plug into Claude or Cursor.",
    color: "#A78BFA",
  },
];

const FAQ = [
  { q: "How is a MEOK companion created?", a: "Through the Birth Ceremony. Your companion isn't assigned — it's born. You answer 7 poetic questions and watch your egg respond in real time, and the companion that emerges is uniquely shaped by your personality." },
  { q: "Which AI models can MEOK use?", a: "MEOK routes across Claude, GPT-4o, DeepSeek, Groq, Ollama and 15+ more. You can switch models freely and your memory and personality travel with you — any model, one memory. You can also run it locally if you want." },
  { q: "Does my companion remember past conversations?", a: "Yes. Persistent memory makes conversations searchable, memories decay naturally over time, and important moments are preserved forever. Full-text conversation search returns sub-5ms results with highlighted matches." },
  { q: "How does my companion grow over time?", a: "It evolves through 6 stages — Spark, Bloom, Ember, Crest, Aether and Zenith — with each stage unlocking new personality depth and capabilities. Every response also passes through a care membrane that calibrates in real time from your thumbs up/down feedback." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const BREADCRUMB_JSONLD = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" }, { "@type": "ListItem", position: 2, name: "Features", item: "https://try.meok.ai/features" }] };

const SOFTWARE_JSONLD = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "MEOK AI", applicationCategory: "LifestyleApplication", operatingSystem: "Web", url: "https://try.meok.ai/features", description: "Sovereign AI companion platform with a Birth Ceremony, persistent memory, a care membrane, evolution stages, guardian protection and routing across 15+ LLM models.", offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" }, featureList: FEATURES.map((f) => f.title) };

export default function FeaturesPage() {
  return (
    <div className="min-h-screen" style={{ background: DEEP, color: "#e5e5e5" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_JSONLD) }} />
      {/* Hero */}
      <section className="pt-24 pb-16 px-6 text-center">
        <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: GOLD }}>Features</p>
        <h1 className="font-black text-white leading-tight tracking-tight mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}>
          Everything your companion can do
        </h1>
        <p className="text-white/40 text-lg max-w-2xl mx-auto">
          Born from a ceremony. Shaped by your personality. Grows with every conversation.
          Here&apos;s what makes MEOK different from every other AI.
        </p>
      </section>

      {/* Feature grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-xl p-6 transition-all hover:scale-[1.02]"
              style={{ background: SURFACE, border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ background: `${f.color}15`, border: `1px solid ${f.color}30` }}
              >
                {f.icon}
              </div>
              <h3 className="font-bold text-white text-lg mb-2">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <h2 className="font-black text-white text-2xl mb-6 text-center">Frequently asked</h2>
        <div className="grid gap-4">
          {FAQ.map((f) => (
            <details
              key={f.q}
              className="rounded-xl p-6"
              style={{ background: SURFACE, border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <summary className="font-bold text-white text-base cursor-pointer">{f.q}</summary>
              <p className="text-white/50 text-sm leading-relaxed mt-3">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: "#0a0918" }}>
        <h2 className="font-black text-white text-2xl mb-4">Ready to meet your companion?</h2>
        <p className="text-white/40 mb-8 max-w-md mx-auto">
          Three minutes. A name. An archetype. An AI that remembers you forever.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/hatch"
            className="inline-flex items-center justify-center gap-2 font-bold rounded-full transition-all hover:scale-105"
            style={{ background: GOLD, color: "#1a1a2e", padding: "0.875rem 2rem", fontSize: "1rem" }}
          >
            Begin Birth Ceremony
          </Link>
          <Link
            href="/characters"
            className="inline-flex items-center justify-center gap-2 font-bold rounded-full transition-all hover:scale-105"
            style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.12)", padding: "0.875rem 2rem", fontSize: "1rem" }}
          >
            Browse 140+ Companions
          </Link>
        </div>
      </section>
    </div>
  );
}
