"use client";
import Link from "next/link";
import { useState } from "react";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does 'strategy' actually mean — pre-game, in-game, or post-game?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All three, separately. Pre-game: meta research, champion/agent pool review, draft advice. In-game: rotation priorities, objective timing, buy round decisions. Post-game: decision review, what the correct strategic choice was in key moments. You can use any layer independently.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK learn my playstyle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "From your match history via platform APIs (Riot, Steam, etc.), and from patterns MEOK observes across your games. After 20-30 games, it has a reliable playstyle profile. After 100, it knows which champions/agents you underperform on, which maps suit you, and how your win rate shifts by game state.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK advise on draft and pick/ban in real-time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. During champion select or agent selection, speak to MEOK — it advises on picks, bans, and role assignments based on your team's composition, the enemy draft, and your personal win rates. Response in under 150ms.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK give different advice for ranked vs. casual play?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Ranked strategy accounts for LP pressure, meta conformity, and your current rank's typical playstyles. Casual mode allows more experimentation — MEOK adjusts the risk tolerance of its advice accordingly.",
      },
    },
    {
      "@type": "Question",
      name: "Can I save strategies and come back to them?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Strategies are stored in your sovereign memory vault. You can recall a specific strat, refine it over multiple sessions, and share it with teammates via a link.",
      },
    },
  ],
};

const STRATEGY_SESSION = {
  prompt: "I&apos;m about to queue ranked. What should I play into this meta?",
  steps: [
    {
      label: "Checking your champion pool",
      detail: "Pulling win rates from your last 60 ranked games via Riot API.",
      result: "Irelia 58% (14 games), Yasuo 47% (22 games), Fizz 61% (8 games — small sample)",
      color: "#c9a84c",
    },
    {
      label: "Reading the current patch",
      detail: "Patch 14.8 notes loaded. MEOK checks what changed in your roles.",
      result: "Irelia buffed (Q damage +8). Yasuo unchanged. Janna pick rate up 4% this week — direct counter to your Yasuo.",
      color: "#a78bfa",
    },
    {
      label: "Checking your recent form",
      detail: "Last 10 games: 3 Yasuo losses in a row, 2 against Janna.",
      result: "Your Yasuo loses to Janna in 6 of your last 8 matchups specifically.",
      color: "#fb923c",
    },
  ],
  recommendation: {
    picks: [
      {
        rank: "01",
        champion: "Irelia",
        role: "Mid",
        reason: "Best win rate in your pool, patch buffed, no losing matchup in current top-5 meta picks. You play her decisively.",
        winRate: "58%",
        confidence: "High",
        confidenceColor: "#34d399",
      },
      {
        rank: "02",
        champion: "Fizz",
        role: "Mid",
        reason: "61% win rate but only 8 games. If the enemy bans Irelia, Fizz is viable — but build the sample size before relying on it.",
        winRate: "61%",
        confidence: "Small sample",
        confidenceColor: "#c9a84c",
      },
      {
        rank: "03",
        champion: "Yasuo",
        role: "Mid",
        reason: "Your 3 recent losses were all Janna matchups. If you don't see Janna in their comp, Yasuo is fine. Against Janna: don't pick this.",
        winRate: "47%",
        confidence: "Conditional",
        confidenceColor: "#fb923c",
      },
    ],
  },
};

const COUNTER_PICK_EXAMPLE = {
  situation: "You&apos;re hovering Yasuo. Enemy locks in Janna support.",
  meokSays:
    "Janna has a 61% win rate against your Yasuo in your last 8 games specifically — not just in general. Her displacement abilities cancel your dash patterns. Consider Irelia here. You go 4-2 against Janna on Irelia.",
  action: "Switch to Irelia",
  stat: "4W-2L on Irelia vs Janna in your history",
};

const STRATEGY_PHASES = [
  {
    icon: "📖",
    title: "Pre-game: meta research",
    phase: "Before queue",
    color: "#c9a84c",
    desc: "What&apos;s strong this patch, what changed, what the current top-1% are picking — filtered through what you can actually execute.",
    bullets: [
      "Current tier list, updated per patch",
      "Win rate shifts from the last 7 days",
      "Filtered to champions/agents in your pool",
      "Flags if your main got nerfed this patch",
    ],
  },
  {
    icon: "👥",
    title: "In-draft: pick and ban",
    phase: "Champion/agent select",
    color: "#a78bfa",
    desc: "Real-time advice during the draft window. Who to ban, what fills your team&apos;s gaps, and what the enemy composition punishes.",
    bullets: [
      "Live draft analysis as picks lock in",
      "Counter-pick suggestions based on your history",
      "Team synergy and win-condition identification",
      "Adapts if the enemy pivots their draft",
    ],
  },
  {
    icon: "🗺️",
    title: "In-game: macro decisions",
    phase: "During the match",
    color: "#34d399",
    desc: "Objective timing, rotation windows, buy round decisions — ask MEOK during natural pauses or set up automatic pattern flags.",
    bullets: [
      "Map-specific win condition for your comp",
      "Rotation timing and objective priority",
      "Buy round and economy suggestions",
      "Adapted for your rank&apos;s typical play",
    ],
  },
  {
    icon: "⚡",
    title: "Post-game: strategic review",
    phase: "After the match",
    color: "#fb923c",
    desc: "Were the calls correct? MEOK reviews your macro decisions — not just mechanics — and identifies where strategy diverged from execution.",
    bullets: [
      "Decision audit: was the rotation right?",
      "Win-condition identification in hindsight",
      "What the correct strategic play was",
      "Links to similar decisions in your history",
    ],
  },
];

const PLAYSTYLE_TYPES = [
  {
    type: "Entry Fragger",
    emoji: "⚡",
    color: "#ef4444",
    desc: "You go first. MEOK builds strategies around your aggression — when to push, when to hold, and which entry points favour your style.",
  },
  {
    type: "Support / Enabler",
    emoji: "🛡️",
    color: "#60a5fa",
    desc: "You win through your team. MEOK identifies the teammates who most benefit from your playstyle and the comps that amplify your impact.",
  },
  {
    type: "Carry / Scaler",
    emoji: "🏆",
    color: "#c9a84c",
    desc: "You need time to come online. MEOK builds early-game survival plans and identifies the power spikes where you should force fights.",
  },
  {
    type: "Shot-caller",
    emoji: "📡",
    color: "#34d399",
    desc: "You think ahead of the game. MEOK gives you macro frameworks, rotation timing, and the information your team needs to execute.",
  },
];

const FAQS = [
  {
    q: "What does 'strategy' actually mean — pre-game, in-game, or post-game?",
    a: "All three, separately. Pre-game: meta research, champion/agent pool review, draft advice. In-game: rotation priorities, objective timing, buy round decisions. Post-game: decision review, what the correct strategic choice was in key moments. You can use any layer independently.",
  },
  {
    q: "How does MEOK learn my playstyle?",
    a: "From your match history via platform APIs (Riot, Steam, etc.), and from patterns MEOK observes across your games. After 20-30 games, it has a reliable playstyle profile. After 100, it knows which champions/agents you underperform on, which maps suit you, and how your win rate shifts by game state.",
  },
  {
    q: "Can MEOK advise on draft and pick/ban in real-time?",
    a: "Yes. During champion select or agent selection, speak to MEOK — it advises on picks, bans, and role assignments based on your team's composition, the enemy draft, and your personal win rates. Response in under 150ms.",
  },
  {
    q: "Does MEOK give different advice for ranked vs. casual play?",
    a: "Yes. Ranked strategy accounts for LP pressure, meta conformity, and your current rank's typical playstyles. Casual mode allows more experimentation — MEOK adjusts the risk tolerance of its advice accordingly.",
  },
  {
    q: "Can I save strategies and come back to them?",
    a: "Yes. Strategies are stored in your sovereign memory vault. You can recall a specific strat, refine it over multiple sessions, and share it with teammates via a link.",
  },
];

const STRATEGY_GAMES = ["Valorant", "League of Legends", "CS2", "Apex Legends", "Fortnite", "Dota 2", "Overwatch 2", "TFT", "Rocket League"];

function BuildStrategy() {
  const [game, setGame] = useState(STRATEGY_GAMES[0]);
  const [situation, setSituation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!situation.trim() || loading) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: 'user', content: `I need a strategy for ${game}. Here is my situation:\n\n${situation.trim()}\n\nGive me a specific, actionable strategy: what to pick, how to play it, what to watch for, and when to adapt.` }],
          companionId: 'pixel',
        }),
      });
      if (res.status === 401 || res.status === 403) {
        setError("Sign in to use the strategy builder.");
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
        <div>
          <label className="text-xs font-black tracking-[0.15em] uppercase text-white/40 block mb-2">
            Game
          </label>
          <div className="flex flex-wrap gap-2">
            {STRATEGY_GAMES.map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setGame(g)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                  game === g
                    ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-400"
                    : "bg-white/[0.03] border-white/[0.08] text-white/40 hover:text-white/60 hover:border-white/15"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-xs font-black tracking-[0.15em] uppercase text-white/40 block mb-2">
            Situation
          </label>
          <textarea
            value={situation}
            onChange={(e) => setSituation(e.target.value)}
            placeholder={`e.g. 'I main Jett but keep losing to double-controller comps on Bind. My team plays default and I entry A short.'`}
            disabled={loading}
            rows={3}
            className="w-full px-5 py-4 rounded-2xl border border-white/[0.1] bg-white/[0.03] text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-emerald-400/40 transition-colors disabled:opacity-50 resize-none"
          />
        </div>
        <button
          type="submit"
          disabled={loading || !situation.trim()}
          className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#d4b463] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ boxShadow: "0 0 20px rgba(201,168,76,0.2)" }}
        >
          {loading ? (
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-25" />
              <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          ) : (
            "Build Strategy"
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
        <div
          className="rounded-2xl border border-emerald-500/20 overflow-hidden"
          style={{ background: "rgba(52,211,153,0.04)" }}
        >
          <div className="flex items-center gap-2 px-5 py-3 border-b border-emerald-500/15 bg-black/20">
            <span className="text-emerald-400 text-xs font-black tracking-wider uppercase">PIXEL</span>
            <span className="text-[10px] text-white/20 italic">Strategy for {game}</span>
          </div>
          <div className="px-5 py-5">
            <div className="text-sm text-white/60 leading-relaxed whitespace-pre-wrap break-words">
              {result}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FAQAccordion({ faqs }: { faqs: typeof FAQS }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-2xl border border-white/[0.07] overflow-hidden"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          <button
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
        </div>
      ))}
    </div>
  );
}

export default function StrategyPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-[78vh] flex flex-col items-center justify-center px-6 pt-20 pb-24 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(52,211,153,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 40%, rgba(52,211,153,0.07) 0%, rgba(201,168,76,0.05) 60%, transparent 80%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/3 left-1/5 w-72 h-72 rounded-full blur-3xl opacity-10"
          style={{ background: "#a78bfa" }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-black tracking-[0.25em] uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            MEOK GAMING OS — STRATEGY BUILDER
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-6 text-white">
            Not a tier list.{" "}
            <span
              className="text-emerald-400"
              style={{ textShadow: "0 0 50px rgba(52,211,153,0.4)" }}
            >
              Your strategy.
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/55 max-w-2xl mx-auto leading-relaxed mb-4">
            MEOK checks your win rates, reads the patch notes, and tells you what to play — and why
            — before you lock in. Draft advice, counter-picks, and macro calls built around your
            actual history.
          </p>
          <p className="text-sm text-white/30 max-w-xl mx-auto mb-10">
            Pre-game, in-draft, in-game, and post-game. Four phases of strategy, one companion.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/hatch"
              className="group flex items-center gap-2 px-8 py-4 rounded-full font-black text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-base"
              style={{ boxShadow: "0 0 24px rgba(201,168,76,0.35), 0 0 48px rgba(201,168,76,0.12)" }}
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
          STRATEGY SESSION WALKTHROUGH
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0d0c18] border-y border-white/[0.05]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              Live walkthrough
            </span>
            <h2 className="text-4xl font-black text-white">
              What a strategy session{" "}
              <span className="text-emerald-400">looks like.</span>
            </h2>
            <p className="text-white/35 mt-4 text-sm max-w-lg mx-auto">
              You&apos;re about to queue ranked. You ask MEOK what to play.
            </p>
          </div>

          {/* User prompt */}
          <div className="mb-6 flex justify-end">
            <div
              className="max-w-md px-6 py-4 rounded-3xl rounded-tr-lg border border-emerald-500/25"
              style={{ background: "rgba(52,211,153,0.08)" }}
            >
              <p className="text-white/85 text-sm font-medium" dangerouslySetInnerHTML={{ __html: STRATEGY_SESSION.prompt }} />
            </div>
          </div>

          {/* MEOK processing steps */}
          <div
            className="rounded-3xl border border-white/[0.07] overflow-hidden mb-6"
            style={{ background: "rgba(255,255,255,0.03)" }}
          >
            <div className="px-6 py-4 border-b border-white/[0.07] bg-black/20 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-black tracking-[0.15em] uppercase text-white/40">
                MEOK processing
              </span>
            </div>
            <div className="divide-y divide-white/[0.05]">
              {STRATEGY_SESSION.steps.map((step, i) => (
                <div key={i} className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div
                      className="text-xs font-black tracking-[0.15em] uppercase mb-1"
                      style={{ color: step.color }}
                    >
                      Step {i + 1}
                    </div>
                    <div className="font-bold text-white text-sm mb-1">{step.label}</div>
                    <div className="text-xs text-white/35 leading-relaxed">{step.detail}</div>
                  </div>
                  <div
                    className="p-3 rounded-2xl border text-xs text-white/60 leading-relaxed"
                    style={{
                      background: `${step.color}08`,
                      borderColor: `${step.color}20`,
                    }}
                  >
                    {step.result}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendation */}
          <div
            className="rounded-3xl border border-[#c9a84c]/20 overflow-hidden"
            style={{ background: "rgba(201,168,76,0.04)" }}
          >
            <div className="px-6 py-4 border-b border-[#c9a84c]/15 bg-black/10">
              <span className="text-xs font-black tracking-[0.15em] uppercase text-[#c9a84c]">
                MEOK recommends
              </span>
            </div>
            <div className="divide-y divide-white/[0.06]">
              {STRATEGY_SESSION.recommendation.picks.map((pick) => (
                <div key={pick.champion} className="p-6 flex items-start gap-5">
                  <div
                    className="text-xl font-black w-8 flex-shrink-0 mt-0.5"
                    style={{ color: "rgba(201,168,76,0.4)" }}
                  >
                    {pick.rank}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="font-black text-white">{pick.champion}</span>
                      <span className="text-xs text-white/30">{pick.role}</span>
                      <span className="text-xs font-bold text-green-400">{pick.winRate} WR</span>
                      <span
                        className="text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded-full border"
                        style={{
                          color: pick.confidenceColor,
                          borderColor: `${pick.confidenceColor}40`,
                          background: `${pick.confidenceColor}10`,
                        }}
                      >
                        {pick.confidence}
                      </span>
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed">{pick.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-xs text-white/20 font-mono mt-4">
            Illustrative example — your actual data and recommendations will differ
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          COUNTER-PICK INTELLIGENCE
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              Counter-pick intelligence
            </span>
            <h2 className="text-4xl font-black text-white">
              Not general matchup data.{" "}
              <span className="text-[#c9a84c]">Your matchup data.</span>
            </h2>
            <p className="text-white/40 mt-4 text-sm max-w-md mx-auto leading-relaxed">
              The counter-pick that works for a Diamond player might not work for you. MEOK checks
              your personal history, not the overall win rate tables.
            </p>
          </div>

          <div
            className="rounded-3xl border border-purple-500/20 overflow-hidden"
            style={{ background: "rgba(167,139,250,0.05)" }}
          >
            <div className="px-7 py-5 border-b border-purple-500/15 bg-black/10">
              <span className="text-xs font-black tracking-[0.15em] uppercase text-[#a78bfa]">
                Draft moment
              </span>
            </div>
            <div className="p-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="text-xs text-white/30 font-black tracking-[0.15em] uppercase mb-2">
                  Situation
                </div>
                <p
                  className="text-white/70 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: COUNTER_PICK_EXAMPLE.situation }}
                />
              </div>
              <div>
                <div className="text-xs font-black tracking-[0.15em] uppercase mb-2 text-[#a78bfa]">
                  MEOK says
                </div>
                <p
                  className="text-white text-sm leading-relaxed font-medium"
                  dangerouslySetInnerHTML={{ __html: `&ldquo;${COUNTER_PICK_EXAMPLE.meokSays}&rdquo;` }}
                />
                <div className="mt-4 flex items-center gap-3 flex-wrap">
                  <span className="px-3 py-1.5 rounded-full text-xs font-black bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                    Suggested: {COUNTER_PICK_EXAMPLE.action}
                  </span>
                  <span className="text-xs text-white/30">{COUNTER_PICK_EXAMPLE.stat}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          YOUR PERSONAL META
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0d0c18] border-y border-white/[0.05]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              Your personal meta
            </span>
            <h2 className="text-4xl font-black text-white">
              Patch meta vs. your meta.{" "}
              <span className="text-[#c9a84c]">They&apos;re not the same.</span>
            </h2>
            <p className="text-white/40 mt-4 text-sm max-w-lg mx-auto leading-relaxed">
              MEOK layers three data sources: what&apos;s strong in the current patch, what suits your
              playstyle profile, and what your actual win rates say. You get the intersection — not
              just the global tier list.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {[
              {
                label: "Patch meta",
                icon: "📰",
                color: "#6b7fa3",
                desc: "What&apos;s winning in high elo right now. Useful context — but these picks require execution patterns you may not have.",
              },
              {
                label: "Your playstyle profile",
                icon: "🎮",
                color: "#c9a84c",
                desc: "MEOK&apos;s model of how you play: aggression level, mechanical tendencies, which game states you win from, which you don&apos;t.",
              },
              {
                label: "Your personal win rates",
                icon: "📊",
                color: "#34d399",
                desc: "Hard data from your match history. Which champions you overperform or underperform relative to their expected win rate.",
              },
            ].map((layer, i) => (
              <div
                key={layer.label}
                className="relative p-7 rounded-3xl border text-center"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(12px)",
                  borderColor: `${layer.color}25`,
                }}
              >
                {i === 1 && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase"
                    style={{ background: "#c9a84c", color: "#1a1a2e" }}
                  >
                    Where MEOK focuses
                  </div>
                )}
                <div className="text-3xl mb-4">{layer.icon}</div>
                <div className="font-black mb-3" style={{ color: layer.color }}>
                  {layer.label}
                </div>
                <p
                  className="text-sm text-white/45 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: layer.desc }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          STRATEGY PHASES — 4 cards
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              The strategy stack
            </span>
            <h2 className="text-4xl font-black text-white">
              Every phase of{" "}
              <span className="text-[#c9a84c]">your game.</span>
            </h2>
          </div>

          <div className="space-y-6">
            {STRATEGY_PHASES.map((section, i) => (
              <div
                key={section.title}
                className="group grid grid-cols-1 md:grid-cols-2 gap-8 items-start p-8 rounded-3xl border transition-all hover:border-white/15"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(12px)",
                  borderColor: `${section.color}18`,
                }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{
                        background: `${section.color}15`,
                        border: `1px solid ${section.color}30`,
                      }}
                    >
                      {section.icon}
                    </div>
                    <div>
                      <div
                        className="text-xs font-black tracking-[0.2em] uppercase mb-0.5"
                        style={{ color: `${section.color}70` }}
                      >
                        0{i + 1} · {section.phase}
                      </div>
                      <h3 className="text-xl font-black text-white">{section.title}</h3>
                    </div>
                  </div>
                  <p
                    className="text-white/50 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: section.desc }}
                  />
                </div>
                <ul className="space-y-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span
                        className="font-black flex-shrink-0 mt-0.5 text-sm"
                        style={{ color: section.color }}
                      >
                        ✓
                      </span>
                      <span
                        className="text-sm text-white/55 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: bullet }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          YOUR STYLE — MEOK LEARNS YOU
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              Personalisation
            </span>
            <h2 className="text-4xl font-black text-white">
              MEOK adapts to{" "}
              <span className="text-[#c9a84c]">how you play.</span>
            </h2>
            <p className="text-white/40 mt-4 text-sm max-w-lg mx-auto leading-relaxed">
              The same patch, the same map, the same enemy comp — completely different advice for
              an entry fragger versus a support anchor. MEOK knows which one you are.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PLAYSTYLE_TYPES.map((type) => (
              <div
                key={type.type}
                className="p-7 rounded-3xl border transition-all hover:scale-[1.01]"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(12px)",
                  borderColor: `${type.color}20`,
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl"
                    style={{ background: `${type.color}15`, border: `1px solid ${type.color}30` }}
                  >
                    {type.emoji}
                  </div>
                  <h3 className="font-black text-white">{type.type}</h3>
                </div>
                <p className="text-sm text-white/50 leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          BUILD STRATEGY — Interactive
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0d0c18] border-y border-white/[0.05]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-black tracking-[0.25em] uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              INTERACTIVE STRATEGY
            </div>
            <h2 className="text-4xl font-black text-white mb-3">
              Build your{" "}
              <span className="text-emerald-400">strategy.</span>
            </h2>
            <p className="text-white/40 text-sm max-w-lg mx-auto leading-relaxed">
              Pick your game, describe the situation, and Pixel builds a strategy around your specifics.
            </p>
          </div>
          <BuildStrategy />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
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
      <section className="relative py-32 px-6 overflow-hidden bg-[#0a0a0f]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(52,211,153,0.06) 0%, rgba(201,168,76,0.04) 55%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl font-black leading-[0.95] mb-6 text-white tracking-tight">
            Play what works{" "}
            <span className="text-[#c9a84c]">for you.</span>
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto mb-10 leading-relaxed">
            Draft advice, counter-picks, and macro calls built from your match history — not the
            global tier list.
          </p>
          <Link
            href="/hatch"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-base sm:text-lg"
            style={{ boxShadow: "0 0 24px rgba(201,168,76,0.3), 0 0 48px rgba(201,168,76,0.1)" }}
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
