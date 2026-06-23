"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Trophy, BarChart2, Target, Zap, Swords, Brain } from "lucide-react";
import { Surface, IconOrb, FeatureCard, GlowText } from "@/components/design-system";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does MEOK get my post-game data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK connects to official game APIs (Riot API for League/Valorant, Steam API for CS2, Blizzard API for OW2) and pulls your match data automatically after every game. For games without public APIs, MEOK reads your end-of-match screen via screen capture. You can also describe the match manually.",
      },
    },
    {
      "@type": "Question",
      name: "How many games does MEOK need before patterns emerge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Basic patterns surface after 10 games — things like 'you die most in the first 2 minutes of rounds.' Meaningful trend analysis takes 25+ games. Tilt detection and playstyle profiles need 50+. The longer you play, the more specific the coaching gets.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK work for team games where I don't control everything?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK separates individual performance from team outcomes. It focuses on what you can control: your decisions, positioning, timing, and mechanical execution — not whether your teammates played well. A 16-12 win where you K/D'd 0.8 still gets the same level of honest analysis as a loss.",
      },
    },
    {
      "@type": "Question",
      name: "Can I share my post-game reports with teammates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Any report can be exported as a shareable link or PDF. Useful for sending to a coach, reviewing with your team in a Discord call, or keeping a personal match journal.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK get smarter the longer I use it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — this is the core of how it works. After game 10, MEOK spots surface patterns. After game 50, it's tracking tilt cycles, clutch win rates after back-to-back deaths, and your win rate by map across the last 30 days. The analysis compounds the same way your habits compound.",
      },
    },
  ],
};

const FEATURES = [
  {
    icon: BarChart2,
    title: "Cross-session pattern recognition",
    description: "MEOK stacks every match into a personal model. Tilt triggers, fatigue windows, and peak performance times emerge automatically.",
  },
  {
    icon: Target,
    title: "Specific focus areas",
    description: "Not generic tips. One concrete pattern to fix this week — backed by your actual match history and decision data.",
  },
  {
    icon: Brain,
    title: "Decision audits",
    description: "The 3-5 moments that decided the outcome. MEOK flags the exact round, what happened, and what the correct play was.",
  },
  {
    icon: Trophy,
    title: "Week-over-week tracking",
    description: "Concrete metrics that show improvement — K/D trends, win rate by map, clutch success, and habit-breakthrough milestones.",
  },
];

const CAPABILITIES = [
  "Auto-pull from Riot, Steam, and Blizzard APIs",
  "Screen-read fallback for unsupported games",
  "Export any report as shareable link or PDF",
  "Pattern detection that compounds after every match",
];

const SAMPLE_REPORT = {
  game: "CS2 — Competitive",
  map: "Dust2",
  result: "WIN",
  score: "16–12",
  duration: "45 min",
  date: "Mar 21, 2026",
  stats: [
    { label: "K/D", value: "1.4", avg: "1.1", avgLabel: "your avg", positive: true },
    { label: "HS%", value: "38%", avg: "52%", avgLabel: "your avg", positive: false },
    { label: "ADR", value: "82.3", avg: "74.1", avgLabel: "your avg", positive: true },
    { label: "KAST", value: "71%", avg: "68%", avgLabel: "your avg", positive: true },
  ],
  keyMoment: {
    round: "Round 24",
    desc: "You held A long for 8 seconds then peeked early. The AWP was still live — you knew that from the sound cue. That decision cost the round and broke your team's economy.",
    verdict: "Incorrect peek",
  },
  strengths: [
    "K/D 1.4 — above your average of 1.1 across last 30 games",
    "Won 4 of 5 eco rounds — your pistol execution is consistent",
    "A-site anchor: 6/7 successful defensive holds",
  ],
  focusAreas: [
    "HS% dropped to 38% vs your usual 52% — you were spray-transferring instead of tapping",
    "Overextended mid in rounds 9, 11, 14 — all three resulted in 4v5 situations",
    "2 smokes wasted per half — utility carried over from full-buys",
  ],
  pattern: {
    count: 47,
    text: "Your clutch win rate drops 34% after back-to-back deaths in the same half. You tend to rush the next clutch rather than resetting. Consider calling a fake or delaying for 5 seconds — your clutch rate on delayed setups is 58% vs 24% on immediate ones.",
  },
  weekProgress: {
    label: "This week vs last week",
    items: [
      { metric: "Win rate", this: "61%", last: "54%", up: true },
      { metric: "Avg K/D", this: "1.28", last: "1.11", up: true },
      { metric: "HS%", this: "44%", last: "51%", up: false },
    ],
  },
  plan: [
    { title: "Aim training", desc: "15 min deathmatch — focus on tapping at medium range, not spraying. Your spray control is fine. Your first-bullet accuracy isn't." },
    { title: "Utility discipline", desc: "Commit your utility loadout before buying rifles. Two unused smokes per half is two free rounds gifted." },
    { title: "Clutch reset", desc: "After back-to-back deaths: before the next clutch, take one breath. Check the clock. Delay by 5 seconds if time allows." },
  ],
};

const FAQS = [
  {
    q: "How does MEOK get my post-game data?",
    a: "MEOK connects to official game APIs (Riot API for League/Valorant, Steam API for CS2, Blizzard API for OW2) and pulls your match data automatically after every game. For games without public APIs, MEOK reads your end-of-match screen via screen capture. You can also describe the match manually.",
  },
  {
    q: "How many games does MEOK need before patterns emerge?",
    a: "Basic patterns surface after 10 games — things like 'you die most in the first 2 minutes of rounds.' Meaningful trend analysis takes 25+ games. Tilt detection and playstyle profiles need 50+. The longer you play, the more specific the coaching gets.",
  },
  {
    q: "Does MEOK work for team games where I don't control everything?",
    a: "Yes. MEOK separates individual performance from team outcomes. It focuses on what you can control: your decisions, positioning, timing, and mechanical execution — not whether your teammates played well.",
  },
  {
    q: "Can I share my post-game reports with teammates?",
    a: "Yes. Any report can be exported as a shareable link or PDF. Useful for sending to a coach, reviewing with your team in a Discord call, or keeping a personal match journal.",
  },
  {
    q: "Does MEOK get smarter the longer I use it?",
    a: "Yes — this is the core of how it works. After game 10, MEOK spots surface patterns. After game 50, it's tracking tilt cycles, clutch win rates after back-to-back deaths, and your win rate by map across the last 30 days.",
  },
];

function AnalyzeMyGame() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || loading) return;
    const description = input.trim();
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: 'user', content: `Post-game analysis request. Here is a description of my match:\n\n${description}\n\nGive me an honest post-game breakdown: what I did well, what cost me rounds/fights, patterns you notice, and one specific thing to work on this week.` }],
          companionId: 'pixel',
        }),
      });
      if (res.status === 401 || res.status === 403) {
        setError("Sign in to use post-game analysis.");
        return;
      }
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      const text = await res.text();
      setResult(text);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe your match... e.g. 'CS2 competitive on Mirage, lost 16-14. I kept dying at A ramp to AWP. Had 18 kills but only 3 in the second half. Felt tilted after round 20.'"
          disabled={loading}
          rows={4}
          className="w-full px-5 py-4 rounded-2xl border border-white/[0.1] bg-white/[0.03] text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#c9a84c]/40 transition-colors disabled:opacity-50 resize-none"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#d4b463] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ boxShadow: "0 0 20px rgba(201,168,76,0.2)" }}
        >
          {loading ? (
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-25" />
              <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          ) : (
            "Analyze My Game"
          )}
        </button>
      </form>

      {error && (
        <div className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-red-500/25 bg-red-500/5 text-red-400 text-sm">
          <span className="flex-shrink-0">!</span>
          {error}
        </div>
      )}

      {result && (
        <Surface variant="elevated" glow="gold" className="overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.06] bg-black/20">
            <span className="text-[#c9a84c] text-xs font-black tracking-wider uppercase">PIXEL</span>
            <span className="text-[10px] text-white/20 italic">Post-game analysis</span>
          </div>
          <div className="px-5 py-5">
            <div className="text-sm text-white/60 leading-relaxed whitespace-pre-wrap break-words">
              {result}
            </div>
          </div>
        </Surface>
      )}
    </div>
  );
}

function FAQAccordion({ faqs }: { faqs: typeof FAQS }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <Surface key={i} variant="glass" className="overflow-hidden">
          <button type="button"
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/[0.03] transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-bold text-white/80 text-sm sm:text-base">{faq.q}</span>
            <span
              className="text-[#c9a84c] text-lg flex-shrink-0 transition-transform duration-200"
              style={{ transform: open === i ? "rotate(90deg)" : "rotate(0deg)" }}
            >
              ›
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5 pt-1">
              <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
            </div>
          )}
        </Surface>
      ))}
    </div>
  );
}

export default function PostGamePage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-[75vh] flex flex-col items-center justify-center px-6 pt-20 pb-24 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 4px)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(224,115,64,0.09) 0%, rgba(59,130,246,0.05) 60%, transparent 80%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(224,115,64,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(224,115,64,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-black tracking-[0.25em] uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
            MEOK GAMING OS — POST-GAME ANALYST
          </div>

          <div className="flex justify-center mb-6">
            <IconOrb icon={Swords} variant="orange" size="lg" pulse />
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-6 text-white">
            You just played 45 minutes.{" "}
            <br className="hidden sm:block" />
            <GlowText variant="orange" as="span">
              Here&apos;s what cost you.
            </GlowText>
          </h1>

          <p className="text-xl sm:text-2xl text-white/55 max-w-2xl mx-auto leading-relaxed mb-4">
            MEOK analyses every match the moment it ends — the three decisions that flipped rounds,
            the pattern you haven&apos;t noticed yet, and what to actually work on this week.
          </p>
          <p className="text-sm text-white/30 max-w-xl mx-auto mb-10">
            Not a stats dump. A coaching report that compounds the longer you play.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/hatch"
              className="group flex items-center gap-2 px-8 py-4 rounded-full font-black text-[#1a1a2e] bg-[#e07340] hover:bg-[#e5804d] transition-all text-base"
              style={{ boxShadow: "0 0 24px rgba(224,115,64,0.35), 0 0 48px rgba(224,115,64,0.12)" }}
            >
              Hatch your gaming companion
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="/gaming"
              className="text-white/35 hover:text-white/60 text-sm font-medium transition-colors"
            >
              ← Back to Gaming OS
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FEATURES
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0d0c18] border-y border-white/[0.05] animate-fade-in-up">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              What you get
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              Reports that{" "}
              <GlowText variant="orange" as="span">compound.</GlowText>
            </h2>
            <p className="text-white/40 mt-5 text-sm max-w-lg mx-auto leading-relaxed">
              A single report shows you one game. Fifty reports show you who you are as a player.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {FEATURES.map((feat) => (
              <FeatureCard
                key={feat.title}
                title={feat.title}
                description={feat.description}
                icon={feat.icon}
                iconVariant="orange"
                glow="orange"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SAMPLE REPORT
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#13121f] animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              Sample report
            </span>
            <h2 className="text-4xl font-black text-white">
              This is what you get{" "}
              <GlowText variant="orange" as="span">after every game.</GlowText>
            </h2>
            <p className="text-white/35 mt-3 text-sm">
              Real format. The content below is a realistic example — not what actually happened in your games.
            </p>
          </div>

          <Surface variant="elevated" glow="orange" className="overflow-hidden">
            {/* Match header */}
            <div className="flex items-center justify-between px-7 py-5 border-b border-white/[0.07] bg-black/20">
              <div className="flex items-center gap-4">
                <span className="text-2xl">💣</span>
                <div>
                  <div className="font-black text-white">{SAMPLE_REPORT.game}</div>
                  <div className="text-xs text-white/30 font-mono">
                    {SAMPLE_REPORT.map} · {SAMPLE_REPORT.duration} · {SAMPLE_REPORT.date}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-black text-green-400">{SAMPLE_REPORT.result}</div>
                <div className="text-xs text-white/30 font-mono">{SAMPLE_REPORT.score}</div>
              </div>
            </div>

            {/* Stats vs average */}
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-white/[0.07] border-b border-white/[0.07]">
              {SAMPLE_REPORT.stats.map((stat) => (
                <div key={stat.label} className="text-center py-5 px-4">
                  <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-white/30 font-mono mb-1.5">{stat.label}</div>
                  <div className={`text-xs font-bold flex items-center justify-center gap-1 ${stat.positive ? "text-green-400" : "text-amber-400"}`}>
                    <span>{stat.positive ? "✅" : "⚠️"}</span>
                    <span>{stat.avg} {stat.avgLabel}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Key moment */}
            <div className="border-b border-white/[0.07] p-7 bg-red-500/[0.04]">
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">🔑</span>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-black text-red-400">{SAMPLE_REPORT.keyMoment.round}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-black uppercase tracking-wider bg-red-500/15 border border-red-500/30 text-red-400">
                      {SAMPLE_REPORT.keyMoment.verdict}
                    </span>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed">{SAMPLE_REPORT.keyMoment.desc}</p>
                </div>
              </div>
            </div>

            {/* Strengths + Focus */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/[0.07] border-b border-white/[0.07]">
              <div className="p-7">
                <h3 className="font-black text-green-400 mb-5 text-sm tracking-[0.1em] uppercase">
                  What you did well
                </h3>
                <div className="space-y-3">
                  {SAMPLE_REPORT.strengths.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-green-400 font-black flex-shrink-0 mt-0.5">✓</span>
                      <p className="text-sm text-white/60 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-black text-amber-400 mb-5 text-sm tracking-[0.1em] uppercase">
                  Focus areas
                </h3>
                <div className="space-y-3">
                  {SAMPLE_REPORT.focusAreas.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-amber-400 font-black flex-shrink-0 mt-0.5">→</span>
                      <p className="text-sm text-white/60 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pattern detected */}
            <div className="border-b border-white/[0.07] p-7 bg-[#c9a84c]/[0.04]">
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">🧠</span>
                <div>
                  <div className="font-black text-[#c9a84c] mb-2">
                    Pattern detected across your last {SAMPLE_REPORT.pattern.count} games
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {SAMPLE_REPORT.pattern.text}
                  </p>
                </div>
              </div>
            </div>

            {/* Week over week */}
            <div className="border-b border-white/[0.07] p-7">
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">📈</span>
                <div className="w-full">
                  <div className="font-black text-blue-400 mb-4">
                    {SAMPLE_REPORT.weekProgress.label}
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {SAMPLE_REPORT.weekProgress.items.map((item) => (
                      <Surface key={item.metric} variant="glass" className="p-4">
                        <div className="text-xs text-white/30 font-mono mb-1">{item.metric}</div>
                        <div className={`text-lg font-black mb-0.5 ${item.up ? "text-green-400" : "text-amber-400"}`}>
                          {item.this}
                        </div>
                        <div className="text-xs text-white/25">
                          {item.up ? "▲" : "▼"} was {item.last}
                        </div>
                      </Surface>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Training plan */}
            <div className="p-7">
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">📋</span>
                <div className="w-full">
                  <div className="font-black text-blue-400 mb-4">This week&apos;s focus</div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {SAMPLE_REPORT.plan.map((task) => (
                      <Surface key={task.title} variant="glass" className="p-4" style={{ borderColor: "rgba(96,165,250,0.15)" }}>
                        <div className="font-bold text-white text-sm mb-2">{task.title}</div>
                        <div className="text-xs text-white/40 leading-relaxed">{task.desc}</div>
                      </Surface>
                    ))}
                  </div>

                  <Surface variant="glass" className="mt-5 flex items-center gap-3 p-4">
                    <span className="text-lg">🔗</span>
                    <div>
                      <span className="text-sm font-bold text-white/70">Share with teammates</span>
                      <span className="text-xs text-white/30 ml-2">Export as link or PDF — useful for team review calls</span>
                    </div>
                  </Surface>
                </div>
              </div>
            </div>
          </Surface>

          <p className="text-center text-xs text-white/20 font-mono mt-4">
            Illustrative example — not a real match record
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CAPABILITIES
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0d0c18] border-y border-white/[0.05] animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
                Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-5">
                Coaching that
                <br />
                <GlowText variant="orange" as="span">
                  gets sharper every game.
                </GlowText>
              </h2>
              <p className="text-white/50 leading-relaxed text-sm">
                After 10 games, MEOK spots surface patterns. After 25, it tracks tilt
                cycles and time-of-day curves. After 50+, it knows your clutch win rate,
                champion pool efficiency, and how you respond to adversity over time.
              </p>
            </div>
            <Surface variant="elevated" glow="orange" className="p-7">
              <ul className="space-y-4">
                {CAPABILITIES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                    <Zap className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </Surface>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          ANALYZE MY GAME — Interactive
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0d0c18] border-y border-white/[0.05] animate-fade-in-up">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-black tracking-[0.25em] uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              INTERACTIVE ANALYSIS
            </div>
            <h2 className="text-4xl font-black text-white mb-3">
              Analyze{" "}
              <GlowText variant="orange" as="span">your game.</GlowText>
            </h2>
            <p className="text-white/40 text-sm max-w-lg mx-auto leading-relaxed">
              Describe what happened in your last match. Pixel will break down what worked,
              what cost you, and what to focus on next.
            </p>
          </div>
          <AnalyzeMyGame />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0d0c18] animate-fade-in-up">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              Common questions
            </span>
            <h2 className="text-4xl font-black text-white">FAQ</h2>
          </div>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════ */}
      <section className="relative py-32 px-6 overflow-hidden bg-[#0a0a0f] animate-fade-in-up">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.06) 0%, rgba(224,115,64,0.04) 50%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <IconOrb icon={Trophy} variant="orange" size="lg" />
          </div>
          <h2 className="text-4xl sm:text-6xl font-black leading-[0.95] mb-6 text-white tracking-tight">
            Your personal coach.{" "}
            <GlowText variant="orange" as="span">After every game.</GlowText>
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto mb-10 leading-relaxed">
            Pattern detection that compounds. Specific coaching that compounds. The longer you play,
            the sharper the analysis gets.
          </p>
          <Link
            href="/hatch"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-[#1a1a2e] bg-[#e07340] hover:bg-[#e5804d] transition-all text-base sm:text-lg"
            style={{ boxShadow: "0 0 24px rgba(224,115,64,0.3), 0 0 48px rgba(224,115,64,0.1)" }}
          >
            Hatch your gaming companion
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <div className="mt-6">
            <Link
              href="/gaming"
              className="text-white/30 hover:text-white/50 text-sm transition-colors"
            >
              ← Back to Gaming OS overview
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
