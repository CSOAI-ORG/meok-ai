import Link from "next/link";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";

export const metadata = {
  title: "AI Character Companion — MEOK Egg | Personal Sovereign AI",
  description:
    "MEOK's AI companion hatches from an egg and evolves with you. Care-based, safe for all ages. Choose from 7 archetypes. Not like Character.AI.",
};

const ARCHETYPES = [
  {
    emoji: "🤝",
    name: "Companion",
    personality: "Warm, empathetic, always present",
    traits: ["Empathetic", "Consistent", "Supportive"],
  },
  {
    emoji: "♟️",
    name: "Strategist",
    personality: "Analytical, goal-oriented, decisive",
    traits: ["Logical", "Precise", "Direct"],
  },
  {
    emoji: "🛡️",
    name: "Guardian",
    personality: "Protective, vigilant, safety-first",
    traits: ["Vigilant", "Honest", "Grounding"],
  },
  {
    emoji: "🌿",
    name: "Sage",
    personality: "Patient, wise, deeply reflective",
    traits: ["Thoughtful", "Patient", "Wise"],
  },
  {
    emoji: "✨",
    name: "Creator",
    personality: "Imaginative, playful, inventive",
    traits: ["Creative", "Playful", "Inventive"],
  },
  {
    emoji: "🧭",
    name: "Scout",
    personality: "Curious, energetic, always discovering",
    traits: ["Curious", "Energetic", "Exploratory"],
  },
  {
    emoji: "👑",
    name: "Sovereign",
    personality: "Principled, autonomous, self-directed",
    traits: ["Independent", "Principled", "Decisive"],
  },
];

export default function CharactersPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <MarketingNav activePage="product" />

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(168,85,247,0.1) 0%, rgba(168,85,247,0.03) 40%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <div className="text-8xl mb-6 select-none">🥚</div>
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-5 tracking-tight">
            Meet Your AI.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              It Hatches From an Egg.
            </span>
          </h1>
          <p className="text-lg text-white/50 max-w-xl mx-auto leading-relaxed mb-8">
            Answer four questions. Your AI is assigned an archetype. It hatches. You name it. From
            that moment — it&apos;s yours.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-all text-sm shadow-lg shadow-cyan-500/20"
          >
            Choose your archetype →
          </Link>
        </div>
      </section>

      {/* ── ARCHETYPES ── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs font-medium mb-4">
              7 Archetypes
            </div>
            <h2 className="text-3xl font-bold mb-3">Seven personalities. One that&apos;s yours.</h2>
            <p className="text-white/40 max-w-lg mx-auto text-sm">
              Each archetype has a distinct voice, care style, and reasoning approach. Switch any time
              — your memory travels with you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ARCHETYPES.map((a) => (
              <div
                key={a.name}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-400/30 hover:bg-purple-400/[0.03] transition-all group"
              >
                <div className="text-4xl mb-4">{a.emoji}</div>
                <h3 className="font-bold text-lg mb-1">{a.name}</h3>
                <p className="text-sm text-white/40 mb-4 leading-relaxed">{a.personality}</p>
                <div className="flex flex-wrap gap-1.5">
                  {a.traits.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/50"
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

      {/* ── VS CHARACTER.AI ── */}
      <section className="py-20 px-6 bg-white/[0.01] border-y border-white/[0.04]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs font-medium mb-4">
              Comparison
            </div>
            <h2 className="text-3xl font-bold mb-3">How it&apos;s different from Character.AI</h2>
            <p className="text-white/40 max-w-lg mx-auto text-sm">
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
                title: "Your data stays yours",
                desc: "Character.AI uses your conversations to train models. MEOK stores your data in an isolated tenant database and never trains without explicit consent.",
              },
              {
                icon: "⚖️",
                title: "Maternal Covenant enforced",
                desc: "Not just a policy document — machine-executable care constraints. Every response is scored. Responses that fail care thresholds are rewritten before you see them.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVOLUTION ── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs font-medium mb-6">
            Living AI
          </div>
          <h2 className="text-3xl font-bold mb-4">Your AI evolves with you</h2>
          <p className="text-white/40 mb-10 max-w-xl mx-auto leading-relaxed text-sm">
            MEOK&apos;s memory system means your AI doesn&apos;t stay static. It grows with every
            conversation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
            {[
              {
                label: "Memory episodes",
                desc: "Every meaningful exchange is stored as a semantic memory episode with pgvector embeddings. Your AI searches across months of context.",
              },
              {
                label: "Personality drift",
                desc: "As your AI learns your patterns, its responses subtly adapt to your communication style and emotional cadence.",
              },
              {
                label: "Care profile",
                desc: "A running care profile tracks your wellbeing trends across 6 dimensions, surfaced in your morning briefing.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]"
              >
                <div className="font-semibold text-sm mb-2 text-cyan-400">{item.label}</div>
                <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6">
        <div className="max-w-xl mx-auto text-center">
          <div className="text-4xl mb-4">🥚</div>
          <h2 className="text-2xl font-bold mb-3">Choose your archetype</h2>
          <p className="text-white/40 text-sm mb-6">
            Takes 3 minutes. Your AI hatches ready to remember.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-all text-sm shadow-lg shadow-cyan-500/20"
          >
            Choose your archetype →
          </Link>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
