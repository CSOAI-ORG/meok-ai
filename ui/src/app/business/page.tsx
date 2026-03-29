import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI OS for Founders & Teams — MEOK.AI",
  description:
    "MEOK Business: the AI operating system for founders and teams who move fast. Email drafting, research assistant, and agent orchestration — all in one sovereign workspace.",
  alternates: {
    canonical: "https://meok.ai/business",
  },
  openGraph: {
    title: "AI OS for Founders & Teams — MEOK.AI",
    description:
      "Email drafting. Research assistant. Agent orchestration. The AI OS for teams who move fast.",
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
  name: "AI OS for Founders & Teams — MEOK.AI",
  description:
    "MEOK Business is the AI operating system for founders and teams who move fast. Email drafting, research, and agent orchestration in a sovereign workspace.",
  url: "https://meok.ai/business",
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LTD",
    url: "https://meok.ai",
  },
};

// ── Benefits data ─────────────────────────────────────────────────────────────

const BENEFITS = [
  {
    icon: "✉",
    title: "Email Drafting",
    body:
      "Write first drafts, follow-ups, and cold outreach at your pace and tone. MEOK learns your voice so every message sounds like you — never like a template.",
  },
  {
    icon: "⌖",
    title: "Research Assistant",
    body:
      "Summarise papers, scan markets, compare competitors, and surface signal from noise. Your team gets answers in seconds, not hours of deep-diving.",
  },
  {
    icon: "⬡",
    title: "Agent Orchestration",
    body:
      "Chain tasks, delegate to sub-agents, and run workflows across your stack. MEOK's Byzantine Council API gives you multi-agent coordination with built-in consensus.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BusinessPage() {
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
            MEOK Business
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
            The AI OS for founders
            <br />
            and teams who{" "}
            <span style={{ color: GOLD }}>move fast.</span>
          </h1>
          <p
            className="text-lg leading-relaxed max-w-xl mx-auto mb-10"
            style={{ color: MUTED }}
          >
            Stop context-switching between tools. MEOK is one sovereign
            workspace where your team writes, researches, and runs agents —
            without leaking your IP to anyone.
          </p>
          <Link
            href="/hatch"
            className="inline-block px-10 py-4 rounded-full text-sm font-bold transition-all hover:scale-105 hover:brightness-110"
            style={{ background: GOLD, color: DEEP }}
          >
            Set up your workspace
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
            Ship faster, stay sovereign
          </p>
          <h2
            className="text-2xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              color: "#ffffff",
            }}
          >
            Your team's AI stack, in one place.
          </h2>
          <p className="text-sm mb-8" style={{ color: MUTED }}>
            Start with one workspace. Scale to a full agent network. Your data
            never leaves your vault.
          </p>
          <Link
            href="/hatch"
            className="inline-block px-10 py-4 rounded-full text-sm font-bold transition-all hover:scale-105 hover:brightness-110"
            style={{ background: GOLD, color: DEEP }}
          >
            Set up your workspace
          </Link>
        </div>
      </section>
    </div>
  );
}
