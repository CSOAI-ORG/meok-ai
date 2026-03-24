import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Find Your Companion | MEOK AI LABS",
  description:
    "Answer 3 questions to find your perfect MEOK companion. 8 archetypes — each designed for a different way of thinking, feeling, and living.",
  keywords: [
    "MEOK companion",
    "AI archetype quiz",
    "find your AI",
    "MEOK archetypes",
    "sovereign AI companion",
    "Timeless archetype",
    "Scholar archetype",
    "Guardian AI",
  ],
  alternates: { canonical: "https://meok.ai/start" },
  openGraph: {
    title: "Find Your Companion | MEOK AI LABS",
    description:
      "8 archetypes. Which companion is waiting for you? Answer 3 questions to find your perfect match.",
    type: "website",
    url: "https://meok.ai/start",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Find+Your+Companion&desc=8+archetypes.+Which+is+waiting+for+you%3F",
        width: 1200,
        height: 630,
        alt: "Find Your Companion — MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Your Companion | MEOK AI LABS",
    description:
      "8 archetypes. Which companion is waiting for you? Answer 3 questions to find your perfect match.",
    images: [
      "https://meok.ai/api/og?title=Find+Your+Companion&desc=8+archetypes.+Which+is+waiting+for+you%3F",
    ],
  },
};

// ── Archetypes ────────────────────────────────────────────────────────────────

interface Archetype {
  name: string;
  slug: string;
  description: string;
  bestFor: string;
  accent: string;
  symbol: string;
}

const ARCHETYPES: Archetype[] = [
  {
    name: "Timeless",
    slug: "timeless",
    description:
      "For those who value wisdom and deep conversations. The Timeless companion draws on history, philosophy, and long perspective to meet you where ideas matter most.",
    bestFor: "Thinkers, philosophers, history lovers",
    accent: "#c9a84c",
    symbol: "⏳",
  },
  {
    name: "Elemental",
    slug: "elemental",
    description:
      "For those who feel deeply connected to nature and cycles. Elemental speaks in patterns, seasons, and the quiet intelligence of the natural world.",
    bestFor: "Creatives, outdoorsy types",
    accent: "#4ade80",
    symbol: "🌿",
  },
  {
    name: "Legendary",
    slug: "legendary",
    description:
      "For those who want a powerful, legendary AI presence. Legendary carries the weight of great stories and brings strategic depth to every exchange.",
    bestFor: "Gamers, strategists",
    accent: "#f97316",
    symbol: "⚔️",
  },
  {
    name: "Scholar",
    slug: "scholar",
    description:
      "For those who love learning and research. The Scholar goes deep, cross-references across domains, and never settles for a surface answer.",
    bestFor: "Students, academics, researchers",
    accent: "#a78bfa",
    symbol: "📚",
  },
  {
    name: "Guardian",
    slug: "guardian",
    description:
      "For safety and protection. Guardian monitors, alerts, and shields — calm when everything is fine, decisive when it isn't.",
    bestFor: "Parents, carers, the elderly",
    accent: "#7BC47F",
    symbol: "🛡️",
  },
  {
    name: "Healer",
    slug: "healer",
    description:
      "For emotional support and wellbeing. The Healer meets you in difficult moments with patience, presence, and care that doesn't rush you toward resolution.",
    bestFor: "Anyone going through change",
    accent: "#f9a8d4",
    symbol: "💙",
  },
  {
    name: "Trickster",
    slug: "trickster",
    description:
      "For fun, creativity and lateral thinking. The Trickster breaks patterns, finds the unexpected angle, and makes the ordinary strange in the best possible way.",
    bestFor: "Creatives, comedians",
    accent: "#fbbf24",
    symbol: "🃏",
  },
  {
    name: "Mystic",
    slug: "mystic",
    description:
      "For the spiritually curious. Mystic holds space for wonder, uncertainty, and the questions that don&apos;t resolve neatly — and finds beauty in that.",
    bestFor: "Meditators, seekers",
    accent: "#818cf8",
    symbol: "🌙",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function StartPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden">

      {/* ── 1. Hero ──────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="relative max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/20 text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-8">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#c9a84c" }}
            />
            8 archetypes · Find your match
          </span>

          <h1
            className="font-black text-white leading-[1.05] tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)" }}
          >
            Which companion is waiting for you?
          </h1>

          <p className="text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
            Answer 3 questions to find your perfect match.
          </p>
        </div>
      </section>

      <div className="border-t border-white/[0.05] max-w-5xl mx-auto" />

      {/* ── 2. Archetype grid ────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ARCHETYPES.map((archetype) => (
              <div
                key={archetype.slug}
                className="rounded-2xl border border-white/[0.08] flex flex-col overflow-hidden transition-all hover:border-white/20 hover:scale-[1.01]"
                style={{
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                {/* Accent top bar */}
                <div
                  className="h-1 w-full flex-shrink-0"
                  style={{
                    background: `linear-gradient(90deg, ${archetype.accent}, ${archetype.accent}40)`,
                  }}
                />

                <div className="p-6 flex flex-col flex-1 gap-4">
                  {/* Symbol */}
                  <span className="text-3xl">{archetype.symbol}</span>

                  {/* Name */}
                  <div>
                    <h2
                      className="font-black text-white text-lg mb-1"
                    >
                      {archetype.name}
                    </h2>
                    <span
                      className="inline-block text-[10px] font-black tracking-widest uppercase rounded-full px-2.5 py-0.5"
                      style={{
                        background: `${archetype.accent}15`,
                        color: archetype.accent,
                        border: `1px solid ${archetype.accent}30`,
                      }}
                    >
                      Best for: {archetype.bestFor}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-white/50 leading-relaxed flex-1">
                    {archetype.description}
                  </p>

                  {/* CTA */}
                  <Link
                    href={`/characters/${archetype.slug}`}
                    className="inline-flex items-center gap-2 justify-center rounded-xl px-4 py-3 text-sm font-bold transition-all hover:opacity-90 mt-auto"
                    style={{
                      background: `${archetype.accent}18`,
                      border: `1px solid ${archetype.accent}35`,
                      color: archetype.accent,
                    }}
                  >
                    Meet {archetype.name} <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-white/[0.05] max-w-5xl mx-auto" />

      {/* ── 3. Sovereign note ────────────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl border border-white/[0.08] p-8 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.05) 0%, rgba(255,255,255,0.02) 100%)",
            }}
          >
            <span className="text-4xl mb-4 block">👑</span>
            <h3
              className="font-black text-white mb-3"
              style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)" }}
            >
              Not sure? The Sovereign archetype awaits.
            </h3>
            <p className="text-white/50 text-sm leading-relaxed max-w-lg mx-auto">
              Our Sovereign archetype unlocks after 50 interactions — the most personalised companion of
              all. Start with any archetype and evolve. Your perfect AI is built, not chosen.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. Bottom CTA ────────────────────────────────────────────────── */}
      <section className="py-20 px-6 border-t border-white/[0.05]">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="font-black text-white mb-4 leading-tight"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)" }}
          >
            Ready to meet your companion?
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-10 max-w-md mx-auto">
            Your sovereign AI hatches from an egg, remembers everything, and grows with you. Born in
            60 seconds. Free forever.
          </p>

          <Link
            href="/birth"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-sm transition-all hover:scale-[1.03]"
            style={{ background: "#c9a84c", color: "#1a1a2e" }}
          >
            Begin Your Birth Ceremony <ArrowRight className="w-4 h-4" />
          </Link>

          <p className="text-xs text-white/25 mt-5">
            No credit card required · Free forever · Your data stays yours
          </p>
        </div>
      </section>

    </div>
  );
}
