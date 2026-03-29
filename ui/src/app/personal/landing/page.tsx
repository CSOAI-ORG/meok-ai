import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Your AI Companion — MEOK.AI",
  description:
    "Meet MEOK: an AI companion that knows you, grows with you, and protects you. Sovereign memory, care-aligned personality, and guardian-grade safety.",
  alternates: {
    canonical: "https://meok.ai/personal/landing",
  },
  openGraph: {
    title: "Your AI Companion — MEOK.AI",
    description:
      "Sovereign memory. Care-aligned personality. Guardian protection. Your companion, built around you.",
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
  name: "Your AI Companion — MEOK.AI",
  description:
    "MEOK is a personal AI companion that knows you, grows with you, and protects you through sovereign memory and care-aligned design.",
  url: "https://meok.ai/personal/landing",
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LTD",
    url: "https://meok.ai",
  },
};

// ── Benefits data ─────────────────────────────────────────────────────────────

const BENEFITS = [
  {
    icon: "◈",
    title: "Sovereign Memory",
    body:
      "Your companion remembers what matters — your milestones, preferences, and history — stored in a vault only you control. No training on your data. No sharing.",
  },
  {
    icon: "♡",
    title: "Care-Aligned Personality",
    body:
      "MEOK adapts its tone, depth, and style to match you. Not a generic chatbot — a presence that evolves alongside your life, shaped by your values and needs.",
  },
  {
    icon: "⬡",
    title: "Guardian Protection",
    body:
      "Built-in safeguards detect manipulation, emotional distress, and harmful patterns before they reach you. MEOK is designed to protect, not exploit.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PersonalLanding() {
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
            Personal Companion
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
            Your AI companion.
            <br />
            <span style={{ color: GOLD }}>Knows you, grows with you,</span>
            <br />
            protects you.
          </h1>
          <p
            className="text-lg leading-relaxed max-w-xl mx-auto mb-10"
            style={{ color: MUTED }}
          >
            MEOK is not another chatbot. It is a personal companion built around
            your life — remembering your story, matching your character, and
            standing guard between you and the world.
          </p>
          <Link
            href="/hatch"
            className="inline-block px-10 py-4 rounded-full text-sm font-bold transition-all hover:scale-105 hover:brightness-110"
            style={{ background: GOLD, color: DEEP }}
          >
            Meet your companion
          </Link>
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
            Ready when you are
          </p>
          <h2
            className="text-2xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              color: "#ffffff",
            }}
          >
            A companion built for your life.
          </h2>
          <p className="text-sm mb-8" style={{ color: MUTED }}>
            Join thousands of people who have found a clearer, calmer,
            more protected way to use AI.
          </p>
          <Link
            href="/hatch"
            className="inline-block px-10 py-4 rounded-full text-sm font-bold transition-all hover:scale-105 hover:brightness-110"
            style={{ background: GOLD, color: DEEP }}
          >
            Meet your companion
          </Link>
        </div>
      </section>
    </div>
  );
}
