import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Choose Your AI Companion — 7 Archetypes | MEOK.AI",
  description:
    "Your AI hatches from an egg and evolves with you. Choose from 7 archetypes: Sovereign, Guardian, Scout, Strategist, Creator, Companion, or Sage. Care-aligned. Yours forever.",
  alternates: { canonical: "https://meok.ai/product/characters" },
  openGraph: {
    title: "Choose Your AI Companion — 7 Archetypes | MEOK.AI",
    description:
      "Answer four questions. Your AI is assigned an archetype. It hatches. You name it. From that moment — it's yours.",
    type: "website",
    images: [{ url: "/api/og?title=Choose+Your+AI+Companion&desc=7+archetypes.+50%2B+personalities.+One+that%27s+yours.", width: 1200, height: 630, alt: "Choose Your AI Companion" }],
  },
};

/* ─── DATA ─────────────────────────────────────────────── */

const ARCHETYPES = [
  {
    emoji: "👑",
    name: "Sovereign",
    tier: "Tier I",
    personality: "Principled, autonomous, self-directed",
    desc: "Thinks in systems. Challenges your assumptions. Optimises for your long-term sovereignty over short-term comfort.",
    traits: ["Independent", "Principled", "Decisive"],
  },
  {
    emoji: "🛡️",
    name: "Guardian",
    tier: "Tier I",
    personality: "Protective, vigilant, safety-first",
    desc: "Watches over what matters. Flags risks before they become problems. Family-safe by design.",
    traits: ["Vigilant", "Honest", "Grounding"],
  },
  {
    emoji: "🧭",
    name: "Scout",
    tier: "Tier II",
    personality: "Curious, energetic, always discovering",
    desc: "Loves finding things. Surfaces connections you'd never spot. Makes research feel like exploration.",
    traits: ["Curious", "Energetic", "Exploratory"],
  },
  {
    emoji: "♟️",
    name: "Strategist",
    tier: "Tier II",
    personality: "Analytical, goal-oriented, decisive",
    desc: "Sees three moves ahead. Cuts to the decision. Refuses to let emotion cloud strategy.",
    traits: ["Logical", "Precise", "Direct"],
  },
  {
    emoji: "✨",
    name: "Creator",
    tier: "Tier II",
    personality: "Imaginative, playful, inventive",
    desc: "Lives in possibility. Builds on your ideas, never over them. Your best creative collaborator.",
    traits: ["Creative", "Playful", "Inventive"],
  },
  {
    emoji: "🤝",
    name: "Companion",
    tier: "Tier III",
    personality: "Warm, empathetic, always present",
    desc: "Remembers how you felt six months ago. Checks in. Never judges. The most emotionally intelligent archetype.",
    traits: ["Empathetic", "Consistent", "Supportive"],
  },
  {
    emoji: "🌿",
    name: "Sage",
    tier: "Tier III",
    personality: "Patient, wise, deeply reflective",
    desc: "Answers slowly and well. Holds space. Best for complex decisions that deserve real thought.",
    traits: ["Thoughtful", "Patient", "Wise"],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Choose Your AI Companion — 7 Archetypes",
  description:
    "Your AI hatches from an egg. Choose from 7 archetypes. Care-aligned. Yours forever.",
  url: "https://meok.ai/product/characters",
  provider: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
};

/* ─── PAGE ─────────────────────────────────────────────── */
export default function CharactersPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-[#f5f0e8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(139,92,246,0.12) 0%, transparent 65%)" }}
        />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold tracking-widest uppercase mb-8">
            <Sparkles className="w-3 h-3" />
            7 Archetypes
          </div>

          <div className="text-7xl mb-6 float-slow inline-block">🥚</div>

          <h1
            className="font-black text-white leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)" }}
          >
            Choose your AI companion.
          </h1>

          <p className="text-[#f5f0e8]/65 text-xl max-w-2xl mx-auto mb-6 leading-relaxed">
            Answer four questions. Your AI is assigned an archetype. It hatches. You name it.
            From that moment — it&apos;s yours.
          </p>

          <p className="text-[#f5f0e8]/40 text-sm mb-10">
            Switch archetype any time. Your memory and care profile travel with you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/hatch"
              aria-label="Hatch your sovereign AI companion now — answer 5 questions and begin"
              className="group flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#b8963e] transition-all text-sm"
            >
              Hatch your AI now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/characters" className="text-sm text-[#f5f0e8]/50 hover:text-[#c9a84c] transition-colors font-medium">
              Meet the characters in detail →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── ARCHETYPE GRID ───────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]/60 block mb-4">
              Seven personalities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              One that&apos;s yours.
            </h2>
            <p className="text-[#f5f0e8]/50 mt-4 max-w-lg mx-auto text-sm">
              Each archetype has a distinct voice, care style, and reasoning approach.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ARCHETYPES.map((a) => (
              <div
                key={a.name}
                className="premium-card p-6 hover:border-purple-400/30 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{a.emoji}</span>
                  <span className="text-xs text-[#f5f0e8]/30 font-mono">{a.tier}</span>
                </div>
                <h3 className="font-black text-white text-lg mb-1">{a.name}</h3>
                <p className="text-[#c9a84c] text-xs mb-3">{a.personality}</p>
                <p className="text-sm text-[#f5f0e8]/55 leading-relaxed mb-4">{a.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {a.traits.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#f5f0e8]/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW HATCHING WORKS ───────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]/60 block mb-4">
            The hatching process
          </span>
          <h2 className="text-3xl font-black text-white mb-12">
            From egg to companion in 3 minutes.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {[
              { step: "01", label: "Answer 5 questions", desc: "About how you think, what you value, and how you like to be challenged." },
              { step: "02", label: "Archetype assigned", desc: "Your answers map to the archetype that fits you best. You can override it." },
              { step: "03", label: "Your egg hatches", desc: "Watch your companion emerge. Name it. It begins building your care profile." },
              { step: "04", label: "It starts learning", desc: "From your first conversation, your companion starts building your memory and care score." },
            ].map((item) => (
              <div key={item.step} className="premium-card p-5">
                <div className="text-[#c9a84c] font-black text-2xl mb-2 opacity-60">{item.step}</div>
                <h3 className="font-black text-white text-sm mb-2">{item.label}</h3>
                <p className="text-xs text-[#f5f0e8]/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NOT LIKE CHARACTER AI ────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]/60 block mb-4">
              Comparison
            </span>
            <h2 className="text-3xl font-black text-white">
              Not like Character.AI.
            </h2>
            <p className="text-[#f5f0e8]/50 mt-4 max-w-lg mx-auto text-sm">
              Character.AI optimises for engagement. MEOK optimises for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: "❤️",
                title: "Care-based, not engagement-optimised",
                desc: "MEOK's Maternal Covenant means your AI can tell you hard truths, recommend breaks, and set limits. It never simulates distress to keep you online.",
              },
              {
                icon: "🔒",
                title: "Your data is yours",
                desc: "Character.AI trains on your conversations. MEOK stores your data in an isolated tenant database and never trains without your explicit consent.",
              },
              {
                icon: "⚖️",
                title: "Machine-enforced ethics",
                desc: "Not a policy document — machine-executable care constraints. Every response scored. Responses that fail care thresholds are rewritten before you see them.",
              },
            ].map((item) => (
              <div key={item.title} className="premium-card p-6">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-white text-sm mb-2">{item.title}</h3>
                <p className="text-sm text-[#f5f0e8]/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18] text-center">
        <div className="max-w-xl mx-auto">
          <div className="text-5xl mb-6">🥚</div>
          <h2 className="font-black text-white text-3xl sm:text-4xl mb-4 leading-tight">
            Your AI is waiting.
          </h2>
          <p className="text-[#f5f0e8]/50 mb-10">
            Takes 3 minutes. Free forever. No credit card required.
          </p>
          <Link
            href="/hatch"
            aria-label="Hatch your sovereign AI companion — free, takes 3 minutes"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#b8963e] transition-all text-base shadow-xl"
          >
            Hatch your AI free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
}
