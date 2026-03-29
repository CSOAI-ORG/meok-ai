import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Bring Your Own Key — MEOK.AI for Developers",
  description:
    "BYOK sovereign AI stack: bring your own API keys, connect via MCP server, and orchestrate agents through the Byzantine Council API. Own your AI infrastructure.",
  alternates: {
    canonical: "https://meok.ai/for-developers/landing",
  },
  openGraph: {
    title: "Bring Your Own Key — MEOK.AI for Developers",
    description:
      "BYOK support. MCP server. Byzantine Council API. Own your AI stack completely.",
    type: "website",
  },
};

// ── Brand tokens ──────────────────────────────────────────────────────────────

const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";
const GOLD = "#c9a84c";
const CREAM = "#f5f0e8";
const MUTED = "rgba(245,240,232,0.55)";

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Bring Your Own Key — MEOK.AI for Developers",
  description:
    "MEOK BYOK lets developers bring their own API keys, connect via MCP server, and use the Byzantine Council API to build sovereign AI stacks.",
  url: "https://meok.ai/for-developers/landing",
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LTD",
    url: "https://meok.ai",
  },
};

// ── Benefits data ─────────────────────────────────────────────────────────────

const BENEFITS = [
  {
    icon: "⌗",
    title: "BYOK Support",
    body:
      "Connect Anthropic, OpenAI, Google, or local Ollama models with your own keys. MEOK never routes your requests through shared infrastructure — every call goes direct.",
  },
  {
    icon: "◈",
    title: "MCP Server",
    body:
      "Expose MEOK's full 22-module pipeline to any MCP-compatible client. Build Claude Desktop extensions, Cursor plugins, or your own tooling on top of sovereign AI primitives.",
  },
  {
    icon: "⬡",
    title: "Byzantine Council API",
    body:
      "Multi-agent consensus API for tasks that need fault tolerance. Run councils of specialised agents that vote, debate, and converge — with no single point of failure.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ForDevelopersLanding() {
  return (
    <div className="min-h-screen" style={{ background: DEEP }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 65%)",
          }}
        />
        <div className="max-w-3xl mx-auto text-center relative">
          <p
            className="text-xs font-bold tracking-[0.3em] uppercase mb-5"
            style={{ color: `${GOLD}b3` }}
          >
            For Developers
          </p>
          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(2.4rem, 5vw, 3.75rem)",
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            Bring your own key.
            <br />
            <span style={{ color: GOLD }}>Own your AI stack.</span>
          </h1>
          <p
            className="text-lg leading-relaxed max-w-xl mx-auto mb-10"
            style={{ color: MUTED }}
          >
            MEOK gives you full sovereignty over your AI infrastructure. Your
            keys, your models, your data — connected through a battle-tested
            pipeline built for builders who refuse vendor lock-in.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/hatch"
              className="inline-block px-10 py-4 rounded-full text-sm font-bold transition-all hover:scale-105 hover:brightness-110"
              style={{ background: GOLD, color: DEEP }}
            >
              Read the docs
            </Link>
            <Link
              href="/for-developers"
              className="inline-block px-10 py-4 rounded-full text-sm font-bold border transition-all hover:opacity-80"
              style={{ color: CREAM, borderColor: `${CREAM}25` }}
            >
              Full developer overview
            </Link>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ──────────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl p-8"
                style={{
                  background: SURFACE,
                  border: `1px solid ${BORDER}`,
                }}
              >
                <span
                  className="text-3xl block mb-5"
                  style={{ color: GOLD }}
                  aria-hidden="true"
                >
                  {b.icon}
                </span>
                <h2
                  className="text-lg font-bold mb-3"
                  style={{ color: CREAM }}
                >
                  {b.title}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CODE HINT STRIP ───────────────────────────────────────────── */}
      <section className="py-12 px-6">
        <div className="max-w-2xl mx-auto">
          <div
            className="rounded-2xl p-6 font-mono text-sm"
            style={{
              background: "#0a0915",
              border: `1px solid ${BORDER}`,
              color: `${GOLD}cc`,
            }}
          >
            <span style={{ color: MUTED }}>$ </span>
            <span>meok init --byok --provider anthropic</span>
            <br />
            <span style={{ color: `${GOLD}66` }}>
              {">"} Sovereign vault initialised. Your keys, your pipeline.
            </span>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ─────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div
          className="max-w-2xl mx-auto rounded-3xl p-12 text-center"
          style={{
            background: SURFACE,
            border: `1px solid ${BORDER}`,
          }}
        >
          <p
            className="text-xs font-bold tracking-[0.25em] uppercase mb-4"
            style={{ color: `${GOLD}99` }}
          >
            Zero lock-in
          </p>
          <h2
            className="text-2xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              color: "#ffffff",
            }}
          >
            Your keys. Your models. Your pipeline.
          </h2>
          <p className="text-sm mb-8" style={{ color: MUTED }}>
            Get started with BYOK Free — no credit card, no rate limits on your
            own keys. Scale to Pro when you need it.
          </p>
          <Link
            href="/hatch"
            className="inline-block px-10 py-4 rounded-full text-sm font-bold transition-all hover:scale-105 hover:brightness-110"
            style={{ background: GOLD, color: DEEP }}
          >
            Read the docs
          </Link>
        </div>
      </section>
    </div>
  );
}
