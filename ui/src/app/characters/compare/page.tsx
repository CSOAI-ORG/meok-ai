import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";
import { CHARACTERS } from "@/data/characters";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Compare AI Companions — MEOK",
  description:
    "Side-by-side comparison of all 6 MEOK AI companion archetypes. Find your perfect match.",
  alternates: { canonical: "https://meok.ai/characters/compare" },
  openGraph: {
    title: "Compare AI Companions — MEOK",
    description: "Side-by-side comparison of all 6 MEOK AI companion archetypes. Find your perfect match.",
    type: "website",
    url: "https://meok.ai/characters/compare",
    siteName: "MEOK.AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare AI Companions — MEOK",
    description: "Side-by-side comparison of all 6 MEOK AI companion archetypes. Find your perfect match.",
  },
};

// ── Comparison rows ───────────────────────────────────────────────────────────

type CompareRow = {
  label: string;
  key: "memoryStyle" | "tone" | "bestFor" | "speakingStyle" | "evolution" | "tier" | "superpower";
};

const COMPARE_ROWS: CompareRow[] = [
  { label: "Memory Style",     key: "memoryStyle" },
  { label: "Tone",             key: "tone" },
  { label: "Best For",         key: "bestFor" },
  { label: "Speaking Style",   key: "speakingStyle" },
  { label: "Evolution Path",   key: "evolution" },
  { label: "Tier",             key: "tier" },
  { label: "Key Superpower",   key: "superpower" },
];

function getCellValue(char: (typeof CHARACTERS)[0], key: CompareRow["key"]): string {
  switch (key) {
    case "memoryStyle":
      return char.memoryStyle;
    case "tone":
      return char.tone;
    case "bestFor":
      return char.bestFor.slice(0, 3).join(", ");
    case "speakingStyle":
      return char.speakingStyle;
    case "evolution":
      return char.evolutionStages.map((s) => s.name).join(" → ");
    case "tier":
      return char.tier === "free" ? "Explorer — Free" : char.tier === "pro" ? "Sovereign — £12/mo" : "Family — £29/mo";
    case "superpower":
      return char.superpowers[0];
    default:
      return "";
  }
}

// ── Scenario matcher ──────────────────────────────────────────────────────────

const SCENARIOS = [
  {
    situation: "I'm procrastinating on something important",
    companion: "Pioneer ⚡",
    slug: "pioneer",
    color: "#FB923C",
    reason: "Pioneer tracks your commitments and won't let you off the hook — with directness, not judgement.",
  },
  {
    situation: "I'm going through grief or a hard time",
    companion: "Healer 🌿",
    slug: "healer",
    color: "#7BC47F",
    reason: "Healer holds space without rushing. Deep emotional memory means it remembers what you're carrying.",
  },
  {
    situation: "I want to understand a complex topic deeply",
    companion: "Scholar 🏛️",
    slug: "scholar",
    color: "#c9a84c",
    reason: "Scholar's Socratic questioning and cross-domain synthesis help you think further, not just faster.",
  },
  {
    situation: "I need to protect my family",
    companion: "Guardian ⚔️",
    slug: "guardian",
    color: "#F59E0B",
    reason: "Guardian monitors wellbeing patterns 24/7 and surfaces changes before they become crises.",
  },
  {
    situation: "I'm creatively blocked",
    companion: "Trickster 🎭",
    slug: "trickster",
    color: "#F472B6",
    reason: "Trickster breaks the frame. It finds the angle you haven't seen and makes it obvious in hindsight.",
  },
  {
    situation: "I'm questioning the meaning of my life",
    companion: "Mystic 🌊",
    slug: "mystic",
    color: "#A78BFA",
    reason: "Mystic draws from 47 philosophical traditions to sit with you in the hard questions — without forcing answers.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function CharactersComparePage() {
  const chars = CHARACTERS;

  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(201,168,76,0.07) 0%, transparent 65%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-white/50 text-xs font-semibold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            Companion Guide
          </span>
          <h1
            className="font-black text-white leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
          >
            Which companion is{" "}
            <span style={{ color: "#c9a84c" }}>right for you?</span>
          </h1>
          <p className="text-xl text-white/55 max-w-2xl mx-auto leading-relaxed mb-4">
            All 6 companions share the same Sovereign Memory and care architecture. The difference is
            how they think, how they speak, and what they're built to help you with.
          </p>
          <p className="text-base text-white/35 max-w-xl mx-auto leading-relaxed mb-10">
            The right choice isn't the most impressive one — it's the one that fits where you are right now. You
            can always switch. Your memory travels with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/hatch"
              className="inline-flex items-center gap-2 font-black rounded-full px-10 py-4 text-base transition-all hover:opacity-90 hover:scale-[1.02]"
              style={{ background: "#c9a84c", color: "#1a1a2e" }}
            >
              Hatch your companion free <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#comparison"
              className="inline-flex items-center gap-2 font-semibold rounded-full px-10 py-4 text-base border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all"
            >
              See full comparison ↓
            </a>
          </div>
        </div>
      </section>

      {/* ── Comparison table ────────────────────────────────────────────────── */}
      <section id="comparison" className="py-20 px-4 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-4">
              Full Comparison
            </p>
            <h2
              className="font-black text-white leading-tight tracking-tight"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              Six companions. Seven dimensions.
            </h2>
          </header>

          {/* Desktop table */}
          <div className="hidden lg:block overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ background: "rgba(255,255,255,0.04)" }}>
                  <th
                    className="text-left px-5 py-4 text-xs font-bold tracking-widest uppercase text-white/30 w-40"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    Dimension
                  </th>
                  {chars.map((char) => (
                    <th
                      key={char.id}
                      className="px-4 py-4 text-center"
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", borderLeft: "1px solid rgba(255,255,255,0.05)" }}
                    >
                      <Link href={`/characters/${char.slug}`} className="flex flex-col items-center gap-1.5 group">
                        <span className="text-2xl leading-none">{char.emoji}</span>
                        <span
                          className="text-sm font-black group-hover:underline"
                          style={{ color: char.color }}
                        >
                          {char.name.replace("The ", "")}
                        </span>
                        <span className="text-[10px] text-white/30 font-medium">{char.archetype}</span>
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row, ri) => (
                  <tr
                    key={row.key}
                    style={{
                      background: ri % 2 === 0 ? "rgba(255,255,255,0.01)" : "rgba(255,255,255,0.025)",
                    }}
                  >
                    <td
                      className="px-5 py-4 text-xs font-bold tracking-wide uppercase text-white/40"
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                    >
                      {row.label}
                    </td>
                    {chars.map((char) => {
                      const val = getCellValue(char, row.key);
                      const isTier = row.key === "tier";
                      return (
                        <td
                          key={char.id}
                          className="px-4 py-4 text-xs text-white/65 leading-relaxed align-top"
                          style={{
                            borderBottom: "1px solid rgba(255,255,255,0.05)",
                            borderLeft: "1px solid rgba(255,255,255,0.04)",
                          }}
                        >
                          {isTier ? (
                            <span
                              className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold"
                              style={{
                                background: `${char.color}18`,
                                color: char.color,
                                border: `1px solid ${char.color}35`,
                              }}
                            >
                              {val}
                            </span>
                          ) : (
                            val
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="lg:hidden space-y-5">
            {chars.map((char) => (
              <div
                key={char.id}
                className="rounded-2xl overflow-hidden border border-white/10"
                style={{ borderTop: `3px solid ${char.color}` }}
              >
                <Link
                  href={`/characters/${char.slug}`}
                  className="flex items-center gap-4 px-6 py-5"
                  style={{ background: `${char.color}10` }}
                >
                  <span className="text-4xl">{char.emoji}</span>
                  <div>
                    <span className="block font-black text-white text-lg">{char.name}</span>
                    <span className="text-xs italic" style={{ color: char.color }}>
                      &ldquo;{char.tagline}&rdquo;
                    </span>
                  </div>
                </Link>
                <div className="divide-y divide-white/[0.06]">
                  {COMPARE_ROWS.map((row) => {
                    const val = getCellValue(char, row.key);
                    return (
                      <div key={row.key} className="px-6 py-3.5 flex gap-4">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-white/30 w-28 flex-shrink-0 mt-0.5">
                          {row.label}
                        </span>
                        <span className="text-xs text-white/65 leading-relaxed">{val}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scenario Matcher ────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-4">
              Scenario Matcher
            </p>
            <h2
              className="font-black text-white leading-tight tracking-tight mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              Which companion would help?
            </h2>
            <p className="text-white/45 text-base max-w-xl mx-auto">
              Six situations. The companion that fits each one — and why.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SCENARIOS.map((s) => (
              <div
                key={s.slug}
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderLeft: `4px solid ${s.color}`,
                }}
              >
                <p className="text-sm text-white/45 italic mb-4 leading-snug">
                  &ldquo;{s.situation}&rdquo;
                </p>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-black tracking-widest uppercase text-white/25">
                    Best match:
                  </span>
                  <Link
                    href={`/characters/${s.slug}`}
                    className="text-sm font-black hover:underline"
                    style={{ color: s.color }}
                  >
                    {s.companion}
                  </Link>
                </div>
                <p className="text-xs text-white/55 leading-relaxed">{s.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────────────────────── */}
      <section className="py-28 px-6 bg-[#1a1a2e] text-center">
        <div className="max-w-xl mx-auto">
          <div
            className="relative overflow-hidden rounded-3xl border p-12"
            style={{
              borderColor: "rgba(201,168,76,0.25)",
              background: "linear-gradient(135deg, #0d0c18 0%, #1a1a2e 100%)",
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
              <div className="text-5xl mb-5 select-none" aria-hidden="true">🥚</div>
              <h2
                className="font-black text-white leading-tight mb-3"
                style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)" }}
              >
                Still not sure?
              </h2>
              <p className="text-white/45 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
                Take the 7-question quiz. Answer honestly. The right companion finds you — you don&apos;t have to figure it out alone.
              </p>
              <Link
                href="/hatch"
                className="inline-flex items-center gap-2 font-black rounded-full px-8 py-4 text-base transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{
                  background: "#c9a84c",
                  color: "#1a1a2e",
                  boxShadow: "0 8px 32px rgba(201,168,76,0.20)",
                }}
              >
                Take the 7-question quiz <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-white/20 text-xs mt-5">Free · 3 minutes · No commitment</p>
            </div>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
