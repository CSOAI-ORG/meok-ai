import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "For Developers — MEOK.AI",
  description:
    "Build with MEOK: Bring your own API keys, use our 22-module sovereign AI pipeline. Connect Anthropic, OpenAI, or local Ollama models.",
  alternates: {
    canonical: "https://meok.ai/for-developers",
  },
  openGraph: {
    title: "For Developers — MEOK.AI",
    description:
      "BYOK sovereign AI pipeline. 22 modules. Your keys, your data, your models.",
    type: "website",
  },
};

// ── Brand tokens ─────────────────────────────────────────────────────────────

const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const GOLD = "#c9a84c";
const CREAM = "#f5f0e8";
const MUTED = "rgba(245,240,232,0.55)";
const FAINT = "rgba(245,240,232,0.07)";

// ── JSON-LD ──────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "MEOK for Developers",
  description:
    "Build with MEOK: BYOK sovereign AI pipeline with 22 modules.",
  url: "https://meok.ai/for-developers",
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
};

// ── Pipeline modules ─────────────────────────────────────────────────────────

const MODULES = [
  { name: "Memory Graph", desc: "Persistent episodic + semantic memory across sessions" },
  { name: "Guardian Shield", desc: "Content filtering, age-gating, and safety boundaries" },
  { name: "Emotional Mirror", desc: "Sentiment analysis with therapeutic-grade nuance" },
  { name: "Context Weaver", desc: "Long-range context threading across conversations" },
  { name: "Identity Anchor", desc: "Consistent personality and value alignment" },
  { name: "Sovereign Vault", desc: "Encrypted, user-owned data storage" },
];

// ── Pricing tiers ────────────────────────────────────────────────────────────

const TIERS = [
  {
    name: "BYOK Free",
    price: "Free",
    features: [
      "Bring your own API keys",
      "All 22 pipeline modules",
      "Community support",
      "1 companion instance",
    ],
    highlighted: false,
  },
  {
    name: "BYOK Pro",
    price: "\u00A39/mo",
    features: [
      "Everything in Free",
      "Priority pipeline access",
      "Webhook integrations",
      "5 companion instances",
      "API rate limit: 10k/day",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Self-hosted deployment",
      "Custom module development",
      "SLA + dedicated support",
      "Unlimited instances",
      "On-prem data residency",
    ],
    highlighted: false,
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function ForDevelopers() {
  return (
    <div className="min-h-screen" style={{ background: DEEP }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.10) 0%, transparent 65%)",
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative">
          <p
            className="text-xs font-bold tracking-[0.3em] uppercase mb-4"
            style={{ color: `${GOLD}b3` }}
          >
            For Developers
          </p>
          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            Build with <span style={{ color: GOLD }}>MEOK</span>
          </h1>
          <p
            className="text-lg leading-relaxed max-w-xl mx-auto mb-10"
            style={{ color: MUTED }}
          >
            Bring your own API keys. Use our 22-module pipeline.
            <br />
            Ship sovereign AI companions in days, not months.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/hatch"
              className="px-8 py-3.5 rounded-full text-sm font-bold transition-all hover:scale-105"
              style={{ background: GOLD, color: DEEP }}
            >
              Start building
            </Link>
            <a
              href="#api-preview"
              className="px-8 py-3.5 rounded-full text-sm font-bold border transition-all hover:opacity-80"
              style={{ color: CREAM, borderColor: `${CREAM}25` }}
            >
              View API docs
            </a>
          </div>
        </div>
      </section>

      {/* ── BYOK Explanation ──────────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ background: SURFACE }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl font-black text-center mb-4"
            style={{ color: CREAM }}
          >
            Your Keys. Your Models. Our Pipeline.
          </h2>
          <p
            className="text-center mb-14 max-w-2xl mx-auto"
            style={{ color: MUTED, lineHeight: 1.7 }}
          >
            MEOK never stores your API keys on our servers. Connect your
            Anthropic, OpenAI, or local Ollama models and route them through our
            sovereign pipeline. You keep full control, we provide the
            intelligence layer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🔑",
                title: "Anthropic / Claude",
                desc: "Connect your Claude API key for state-of-the-art reasoning and nuanced conversation.",
              },
              {
                icon: "⚡",
                title: "OpenAI / GPT",
                desc: "Plug in your OpenAI key for GPT-4o, o1, or any model in their lineup.",
              },
              {
                icon: "🏠",
                title: "Ollama / Local",
                desc: "Run completely local with Ollama. Zero data leaves your machine. True sovereignty.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl p-6"
                style={{ background: DEEP, border: `1px solid ${FAINT}` }}
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: CREAM }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pipeline Modules ──────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl font-black text-center mb-4"
            style={{ color: CREAM }}
          >
            22 Modules. One Pipeline.
          </h2>
          <p
            className="text-center mb-12 max-w-xl mx-auto"
            style={{ color: MUTED }}
          >
            Every conversation passes through our modular pipeline. Enable,
            disable, or configure each module per companion.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MODULES.map((mod) => (
              <div
                key={mod.name}
                className="rounded-lg p-5"
                style={{ background: SURFACE, border: `1px solid ${FAINT}` }}
              >
                <h4
                  className="text-sm font-bold mb-1"
                  style={{ color: GOLD }}
                >
                  {mod.name}
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: MUTED }}>
                  {mod.desc}
                </p>
              </div>
            ))}
          </div>
          <p
            className="text-center text-xs mt-6"
            style={{ color: "rgba(245,240,232,0.3)" }}
          >
            + 16 more modules including Dream Weaver, Ritual Engine, Health
            Compass, Financial Sense, and Creative Studio.
          </p>
        </div>
      </section>

      {/* ── API Preview ───────────────────────────────────────────────── */}
      <section id="api-preview" className="py-20 px-6" style={{ background: SURFACE }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl font-black text-center mb-4"
            style={{ color: CREAM }}
          >
            Simple API. Powerful Results.
          </h2>
          <p
            className="text-center mb-10 max-w-xl mx-auto"
            style={{ color: MUTED }}
          >
            One endpoint. Send a message, get a sovereign-aware response with
            memory, emotion, and guardian context baked in.
          </p>
          <div
            className="rounded-xl overflow-hidden"
            style={{ background: DEEP, border: `1px solid ${FAINT}` }}
          >
            <div
              className="px-5 py-3 flex items-center gap-2 border-b"
              style={{ borderColor: FAINT }}
            >
              <span
                className="text-xs font-bold px-2 py-0.5 rounded"
                style={{ background: `${GOLD}20`, color: GOLD }}
              >
                POST
              </span>
              <code className="text-xs" style={{ color: MUTED }}>
                /api/v1/chat
              </code>
            </div>
            <pre
              className="p-5 text-xs leading-relaxed overflow-x-auto"
              style={{ color: "rgba(245,240,232,0.7)" }}
            >
              <code>{`curl -X POST https://api.meok.ai/v1/chat \\
  -H "Authorization: Bearer YOUR_MEOK_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "message": "How have I been sleeping this week?",
    "companion_id": "my-companion",
    "byok": {
      "provider": "anthropic",
      "api_key": "sk-ant-..."
    },
    "modules": {
      "memory_graph": true,
      "guardian_shield": true,
      "emotional_mirror": true
    }
  }'`}</code>
            </pre>
          </div>
          <div
            className="rounded-xl overflow-hidden mt-4"
            style={{ background: DEEP, border: `1px solid ${FAINT}` }}
          >
            <div
              className="px-5 py-3 border-b"
              style={{ borderColor: FAINT }}
            >
              <span className="text-xs font-bold" style={{ color: "rgba(134,239,172,0.8)" }}>
                Response
              </span>
            </div>
            <pre
              className="p-5 text-xs leading-relaxed overflow-x-auto"
              style={{ color: "rgba(245,240,232,0.7)" }}
            >
              <code>{`{
  "response": "Based on your journal entries this week, you've been
    averaging about 6.5 hours — down from your 7.5hr baseline.
    Wednesday was particularly rough after the late call.",
  "memory_context": {
    "references": 4,
    "timespan": "7 days"
  },
  "emotion": {
    "detected": "concern",
    "confidence": 0.82
  },
  "guardian": {
    "flags": [],
    "safe": true
  }
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* ── Pricing ───────────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl font-black text-center mb-12"
            style={{ color: CREAM }}
          >
            Developer Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className="rounded-xl p-7 flex flex-col"
                style={{
                  background: tier.highlighted ? `${GOLD}10` : SURFACE,
                  border: `1px solid ${tier.highlighted ? `${GOLD}40` : FAINT}`,
                }}
              >
                <h3
                  className="text-lg font-bold mb-1"
                  style={{ color: tier.highlighted ? GOLD : CREAM }}
                >
                  {tier.name}
                </h3>
                <p
                  className="text-3xl font-black mb-6"
                  style={{ color: CREAM }}
                >
                  {tier.price}
                </p>
                <ul className="space-y-2.5 flex-1 mb-6">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: MUTED }}
                    >
                      <span style={{ color: GOLD }}>&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/hatch"
                  className="block text-center px-6 py-3 rounded-full text-sm font-bold transition-all hover:scale-105"
                  style={
                    tier.highlighted
                      ? { background: GOLD, color: DEEP }
                      : {
                          background: "transparent",
                          color: CREAM,
                          border: `1px solid ${CREAM}25`,
                        }
                  }
                >
                  {tier.highlighted ? "Start building" : "Get started"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────── */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: SURFACE }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl font-black mb-4"
            style={{ color: CREAM }}
          >
            Ready to build sovereign AI?
          </h2>
          <p className="mb-8" style={{ color: MUTED }}>
            Join developers building companions that remember, protect, and
            genuinely care. Your keys. Our pipeline. Their sovereignty.
          </p>
          <Link
            href="/hatch"
            className="inline-block px-10 py-4 rounded-full text-sm font-bold transition-all hover:scale-105"
            style={{ background: GOLD, color: DEEP }}
          >
            Start building
          </Link>
        </div>
      </section>
    </div>
  );
}
