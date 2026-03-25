"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Zap,
  BarChart2,
  Brain,
  Mic,
  Map,
  TrendingUp,
  Clock,
  Database,
  ShieldCheck,
} from "lucide-react";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "MEOK Gaming OS",
      applicationCategory: "GameApplication",
      description:
        "MEOK Gaming OS is your sovereign AI companion for competitive gaming. Live co-pilot, post-game analyst, strategy builder, multi-game memory, voice mode — anti-cheat compliant.",
      featureList: [
        "Live Co-Pilot — real-time coaching under 150ms",
        "Post-Game Analyst — full match debrief",
        "Strategy Builder — meta and opponent analysis",
        "Multi-game persistent memory",
        "Voice mode",
        "Anti-cheat compliant (VAC, Vanguard, BattlEye, EAC)",
      ],
      operatingSystem: "Windows, macOS",
      offers: { "@type": "Offer", price: "9.99", priceCurrency: "GBP" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
    {
      "@type": "Question",
      name: "Will MEOK get me banned from CS2, Valorant, or League?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK doesn't inject code, modify game files, or hook into game processes. It operates as a separate application — the same way a Discord overlay or a second monitor with notes works. It's not detectable by VAC, Vanguard, or Riot's anti-cheat because there's nothing to detect.",
      },
    },
    {
      "@type": "Question",
      name: "Does it work with anti-cheat software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK is fully compatible with VAC (Steam), Vanguard (Riot), BattlEye, and Easy Anti-Cheat. It runs as a standard overlay application and never touches game memory or processes.",
      },
    },
    {
      "@type": "Question",
      name: "What games are supported right now?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CS2, Valorant, and League of Legends are in the first release. Dota 2, Apex Legends, Overwatch 2, and Fortnite follow in the next wave. Every game gets full Live Co-Pilot and Post-Game Analyst support. Strategy Builder launches with the top-5 games.",
      },
    },
    {
      "@type": "Question",
      name: "Is the coaching real-time or does it analyse after the match?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both. Live Co-Pilot runs during the match — you talk to it, it responds in under 150ms. Post-Game Analyst runs after. You choose when you want input. Some players want real-time callouts. Others prefer a clean debrief. MEOK handles both.",
      },
    },
    {
      "@type": "Question",
      name: "What makes this different from Mobalytics or Overwolf?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mobalytics and Overwolf analyse this match. MEOK remembers you across every match — for months. It knows that you tilt on round 10, that you have a 34% winrate on Inferno on Tuesdays, that your mechanical skill drops after 90 minutes. It builds a model of you specifically, not just your stats.",
      },
    },
      ],
    },
  ],
};

const SCENARIOS = [
  {
    game: "CS2",
    color: "#F0A900",
    borderColor: "border-amber-400/25",
    bgColor: "bg-amber-400/5",
    labelColor: "text-amber-400",
    labelBg: "bg-amber-400/10",
    labelBorder: "border-amber-400/20",
    scenario:
      "Round 14. You pushed B again. You always push B when you're tilted.",
    insight:
      "MEOK would have flagged this before round 12: \"You're 0-2 in gun rounds. Your B-push frequency just doubled. Consider defaulting.\"",
    stat: "Pattern: tilt-push detected",
  },
  {
    game: "League of Legends",
    color: "#C89B3C",
    borderColor: "border-yellow-500/25",
    bgColor: "bg-yellow-500/5",
    labelColor: "text-yellow-400",
    labelBg: "bg-yellow-400/10",
    labelBorder: "border-yellow-400/20",
    scenario: "You're 0-3 in lane. Your champion has a 47% win rate this patch.",
    insight:
      "MEOK would have flagged this in draft: \"Syndra is negative this patch at your elo. You're also 1-6 on her in the last 14 days. Consider Lissandra — your win rate is 61%.\"",
    stat: "Draft-phase meta mismatch",
  },
  {
    game: "Valorant",
    color: "#FF4655",
    borderColor: "border-red-400/25",
    bgColor: "bg-red-400/5",
    labelColor: "text-red-400",
    labelBg: "bg-red-400/10",
    labelBorder: "border-red-400/20",
    scenario:
      "Post-game: your headshot % drops 15% in the second half of every session.",
    insight:
      "MEOK after reviewing 30 sessions: \"Your HS% falls from 28% to 13% after the 90-minute mark. Fatigue pattern confirmed. Your round-win rate drops 22% in that window.\"",
    stat: "Fatigue pattern across 30 sessions",
  },
];

const PRODUCTS = [
  {
    id: "live-copilot",
    badge: "LIVE CO-PILOT",
    badgeColor: "text-amber-400",
    badgeBg: "bg-amber-400/10",
    badgeBorder: "border-amber-400/20",
    pulseDot: "bg-amber-400",
    cardBorder: "border-amber-400/20 hover:border-amber-400/40",
    icon: Zap,
    iconClass: "text-amber-400",
    title: "Your AI in the fight with you.",
    body: "Real-time callouts as the game evolves. Asks you to describe the situation, you say it in 5 words, it responds in under 150ms. Voice mode — completely hands-free. No screen reader, no cheat. Just fast information.",
    use_case:
      'You\'re in a 1v2 post-plant. Say "1v2 post-plant A site, both on A main." It responds: "Smoke CT, hold pit. Make them split. You\'re 60-40 if you play for time."',
    link: "/gaming/live-copilot",
    linkLabel: "See Live Co-Pilot",
    features: [
      { icon: Zap, text: "Sub-150ms voice response" },
      { icon: Map, text: "Situational callouts based on your description" },
      { icon: Mic, text: "Fully hands-free voice mode" },
      { icon: BarChart2, text: "Economy and build advice mid-match" },
    ],
    mockTitle: "Live — Valorant",
    mockLines: [
      { role: "YOU", msg: "1v2 post-plant A site, both A main", side: "right" },
      {
        role: "MEOK",
        msg: "Smoke CT now, hold pit angle. Make them split entry. You're 60-40 if you play time not aim.",
        side: "left",
      },
      { role: "YOU", msg: "smoked. one pushing pit", side: "right" },
      {
        role: "MEOK",
        msg: "One wide one tight. Crossfire their entry. Hold until you get the first — then reset.",
        side: "left",
      },
    ],
    responseLabel: "Response: 134ms",
    responseDot: "bg-amber-400",
  },
  {
    id: "post-game",
    badge: "POST-GAME ANALYST",
    badgeColor: "text-blue-400",
    badgeBg: "bg-blue-400/10",
    badgeBorder: "border-blue-400/20",
    pulseDot: "bg-blue-400",
    cardBorder: "border-blue-400/20 hover:border-blue-400/40",
    icon: Brain,
    iconClass: "text-blue-400",
    title: "The debrief nobody was giving you.",
    body: "Not just this match. MEOK reviews your last 30 sessions and tells you what's actually holding you back. The pattern your friends can't see. The habit you've stopped noticing.",
    use_case:
      "You went 18-5 and lost. MEOK: \"Win loss correlation: when you go positive early, your team coordination drops 40%. You're farming, not converting. Here's the round where it cost you.\"",
    link: "/gaming/post-game",
    linkLabel: "See Post-Game Analyst",
    features: [
      { icon: BarChart2, text: "Cross-session pattern recognition" },
      { icon: Brain, text: "Named habit loops and tilt triggers" },
      { icon: TrendingUp, text: "Week-on-week improvement tracking" },
      { icon: Clock, text: "Fatigue windows and peak performance times" },
    ],
    mockTitle: "Post-Game — CS2 Dust II — 21-9",
    mockStats: [
      {
        label: "Tilt trigger detected",
        val: "⚠",
        sub: "B-push frequency doubles in losing streaks",
        color: "text-amber-400",
      },
      {
        label: "Fatigue window",
        val: "90m+",
        sub: "ADR drops 22% after 90 mins. You played 110.",
        color: "text-red-400",
      },
      {
        label: "Improvement vs last 7 days",
        val: "+8%",
        sub: "HLTV rating 1.18 → 1.27",
        color: "text-green-400",
      },
      {
        label: "This week's focus",
        val: "→",
        sub: "Entry timing on B: you're 0.3s early consistently",
        color: "text-blue-400",
      },
    ],
    responseLabel: null,
    responseDot: null,
  },
  {
    id: "strategy",
    badge: "STRATEGY BUILDER",
    badgeColor: "text-green-400",
    badgeBg: "bg-green-400/10",
    badgeBorder: "border-green-400/20",
    pulseDot: "bg-green-400",
    cardBorder: "border-green-400/20 hover:border-green-400/40",
    icon: Map,
    iconClass: "text-green-400",
    title: "Know the meta. Walk in prepared.",
    body: "Pre-game brief before you queue. Patch meta, your specific win conditions, counter picks based on your champion pool, historical data from your matchup history.",
    use_case:
      "Before ranked: \"Katarina has 52.3% WR this patch. You're 8-3 on her in the last 2 weeks. Enemy mid is likely Zed — your historical record vs Zed: 6-4. Suggested keystone: Phase Rush.\"",
    link: "/gaming/strategy",
    linkLabel: "See Strategy Builder",
    features: [
      { icon: Map, text: "Pre-game map strategy for your playstyle" },
      { icon: Brain, text: "Patch meta briefing at your elo" },
      { icon: TrendingUp, text: "Counter-pick from your champion pool" },
      { icon: Database, text: "Your historical matchup data" },
    ],
    mockTitle: "Pre-Game Brief — League — Ranked Solo",
    mockTips: [
      "Patch 14.8: Katarina strong into melee mids. Your pool: Kata/Akali both viable.",
      "Likely enemy mid: Zed. Your Kata vs Zed record: 6W-4L. Play safe levels 1-3.",
      "Your team has strong engage. Stack Conqueror, look for 5v5 teamfights at 25 min.",
      "Win condition: hit 2 items before 22 min. Your average: 21:40. You're on pace.",
    ],
    responseLabel: null,
    responseDot: null,
  },
];

const FAQS = [
  {
    q: "Will MEOK get me banned from CS2, Valorant, or League?",
    a: "No. MEOK doesn't inject code, modify game files, or hook into game processes. It runs as a separate application — the same way a Discord overlay or notes on a second monitor work. It's not detectable by VAC, Vanguard, or Riot's anti-cheat because there's nothing to detect.",
  },
  {
    q: "Does it work with anti-cheat software?",
    a: "Yes. Fully compatible with VAC (Steam), Vanguard (Riot), BattlEye, and Easy Anti-Cheat. MEOK runs as a standard overlay app and never touches game memory or processes.",
  },
  {
    q: "What games are supported right now?",
    a: "CS2, Valorant, and League of Legends are in the first release. Dota 2, Apex, Overwatch 2, and Fortnite follow in the next wave. Every game gets Live Co-Pilot and Post-Game Analyst. Strategy Builder launches with the top-5 games.",
  },
  {
    q: "Is it real-time or does it analyse after the match?",
    a: "Both. Live Co-Pilot runs during the match — you describe the situation in voice, it responds in under 150ms. Post-Game Analyst runs after. You decide when you want input.",
  },
  {
    q: "What makes this different from Mobalytics or Overwolf?",
    a: "Those tools analyse this match. MEOK remembers you across every match — for months. It knows your tilt patterns, your fatigue windows, your specific bad habits. It builds a model of you, not just your stats.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-2xl border border-white/[0.07] overflow-hidden"
      style={{ background: "rgba(255,255,255,0.03)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/[0.03] transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-white/80 text-sm sm:text-base">
          {q}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[#c9a84c] flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 pt-1">
          <p className="text-white/50 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function GamingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-14 pb-20 overflow-hidden">
        {/* Blobs */}
        <div
          aria-hidden
          className="blob-purple absolute w-[700px] h-[700px] top-[-150px] left-[-150px] opacity-80"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="blob-gold absolute w-[500px] h-[500px] top-[20%] right-[-100px] opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(234,88,12,0.18) 0%, transparent 70%)",
            animationDelay: "2s",
          }}
        />
        <div
          aria-hidden
          className="blob-blue absolute w-[600px] h-[600px] bottom-[-100px] right-[20%] opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
          }}
        />
        {/* Scanlines */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 4px)",
          }}
        />
        {/* Grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(168,85,247,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-black tracking-[0.25em] uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            MEOK GAMING — Q3 2026
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black leading-[0.9] tracking-tight mb-6">
            Your opponents{" "}
            <br className="hidden sm:block" />
            have coaches.
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #c9a84c 0%, #f0d080 40%, #ea580c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Now you do too.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed mb-4">
            You&apos;ve played 500 hours of CS2 and your rank barely moved. You
            know something&apos;s wrong — you just can&apos;t see what. MEOK can.
          </p>
          <p className="text-sm text-white/25 max-w-xl mx-auto leading-relaxed mb-10 font-mono">
            Live co-pilot · Post-game coaching · Pre-match strategy · Cross-session memory
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/hatch"
              className="group flex items-center gap-2 px-8 py-4 rounded-full font-black text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-base"
              style={{
                boxShadow: "0 0 40px rgba(201,168,76,0.25)",
              }}
            >
              Get early access
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/gaming/live-copilot"
              className="group flex items-center gap-2 px-8 py-4 rounded-full font-black text-purple-300 border border-purple-500/40 hover:border-purple-400 hover:bg-purple-500/10 transition-all text-base"
            >
              See Live Co-Pilot
              <Zap className="w-4 h-4" />
            </Link>
          </div>

          {/* Sub-page quick links */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <Link
              href="/gaming/post-game"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 text-white/40 text-xs font-semibold hover:border-white/25 hover:text-white/70 transition-all"
            >
              📊 Post-Game Analyst
            </Link>
            <Link
              href="/gaming/strategy"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 text-white/40 text-xs font-semibold hover:border-white/25 hover:text-white/70 transition-all"
            >
              ♟️ Strategy Builder
            </Link>
            <Link
              href="/gaming/platforms"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 text-white/40 text-xs font-semibold hover:border-white/25 hover:text-white/70 transition-all"
            >
              🔌 All Platforms
            </Link>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {[
              { val: "150ms", label: "Live response" },
              { val: "30-day", label: "Pattern memory" },
              { val: "3", label: "Launch games" },
              { val: "Voice", label: "Hands-free" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl px-4 py-3 text-center"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="text-xl font-black text-[#c9a84c]">
                  {stat.val}
                </div>
                <div className="text-[10px] text-white/30 font-mono mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          THE REAL PROBLEM
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              The problem
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              You play hundreds of hours.
              <br />
              <span className="text-white/35">The same mistakes compound.</span>
            </h2>
            <p className="mt-5 text-base text-white/40 max-w-xl mx-auto leading-relaxed">
              Tools like Mobalytics tell you how this match went. Nobody tells
              you what&apos;s happening across all of them. The patterns are
              invisible — until you have something with memory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SCENARIOS.map((s) => (
              <div
                key={s.game}
                className={`rounded-2xl p-6 border ${s.borderColor} ${s.bgColor} flex flex-col gap-4`}
              >
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase ${s.labelColor} ${s.labelBg} border ${s.labelBorder} self-start`}
                >
                  {s.game}
                </div>
                <p className="text-white/70 text-sm leading-relaxed font-medium">
                  &ldquo;{s.scenario}&rdquo;
                </p>
                <div
                  className="rounded-xl p-4 text-xs leading-relaxed"
                  style={{
                    background: "rgba(0,0,0,0.3)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span className={`font-black text-[10px] ${s.labelColor} font-mono block mb-1.5`}>
                    MEOK
                  </span>
                  {s.insight}
                </div>
                <div
                  className={`text-[10px] font-mono ${s.labelColor} opacity-60 flex items-center gap-1.5`}
                >
                  <span className={`w-1 h-1 rounded-full inline-block ${s.labelBg.replace("bg-", "bg-")}`} style={{ background: s.color }} />
                  {s.stat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          WHAT MAKES MEOK DIFFERENT
      ═══════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
                The difference
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-5">
                It knows you.
                <br />
                <span className="text-white/35">Not just your stats.</span>
              </h2>
              <p className="text-white/50 leading-relaxed mb-5 text-sm">
                Mobalytics gives you match stats. Overwolf gives you overlays.
                Neither of them remembers what happened last Tuesday when you
                went on a 5-game losing streak.
              </p>
              <p className="text-white/50 leading-relaxed text-sm">
                MEOK builds a model of you specifically — your tilt triggers,
                your fatigue windows, your champion-specific habits — and uses
                that context every time it coaches you.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  label: "Mobalytics / Overwolf",
                  desc: "Analyses this match",
                  icon: "📊",
                  dim: true,
                },
                {
                  label: "MEOK",
                  desc: "Remembers you across every session. Knows your patterns.",
                  icon: "🧠",
                  dim: false,
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-start gap-4 p-5 rounded-2xl"
                  style={{
                    background: row.dim
                      ? "rgba(255,255,255,0.02)"
                      : "rgba(201,168,76,0.06)",
                    border: row.dim
                      ? "1px solid rgba(255,255,255,0.06)"
                      : "1px solid rgba(201,168,76,0.25)",
                    opacity: row.dim ? 0.6 : 1,
                  }}
                >
                  <span className="text-2xl">{row.icon}</span>
                  <div>
                    <p
                      className={`font-black text-sm mb-1 ${
                        row.dim ? "text-white/50" : "text-white"
                      }`}
                    >
                      {row.label}
                    </p>
                    <p
                      className={`text-xs leading-relaxed ${
                        row.dim ? "text-white/30" : "text-white/60"
                      }`}
                    >
                      {row.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          NOT A CHEAT. AN EDGE.
      ═══════════════════════════════════════════════ */}
      <section className="py-16 px-6 bg-[#0a0a0f]">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-3xl p-8 sm:p-10 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(30,180,120,0.07), rgba(30,180,120,0.03))",
              border: "1.5px solid rgba(52,211,153,0.2)",
            }}
          >
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5 bg-emerald-400/10">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black mb-3">
              Not a cheat. An edge.
            </h2>
            <p className="text-white/50 leading-relaxed text-sm max-w-xl mx-auto mb-5">
              MEOK doesn&apos;t touch game files, inject code, or read game
              memory. It&apos;s a coaching tool — the same category as hiring a
              human coach, watching pro VODs, or using a second monitor for
              notes.
            </p>
            <p className="text-white/50 leading-relaxed text-sm max-w-xl mx-auto">
              VAC, Vanguard, BattlEye — none of them flag MEOK because
              there&apos;s nothing to flag. Your account is safe. Your advantage
              is real.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          HOW MEOK OBSERVES YOUR GAMES
      ═══════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#0d0c18] border-t border-white/[0.05]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              Technical transparency
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              How MEOK observes{" "}
              <span className="text-[#c9a84c]">your games.</span>
            </h2>
            <p className="text-white/40 mt-4 text-sm max-w-lg mx-auto leading-relaxed">
              No black boxes. Here is exactly what MEOK sees, how it gets that information, and what it will never do.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                method: "Screen capture",
                icon: "🖥️",
                color: "#c9a84c",
                desc: "You share your game window once. MEOK reads what a spectator would see — the game state visible on screen. Nothing from inside the game process.",
                applies: "All games",
              },
              {
                method: "Riot API",
                icon: "⚔️",
                color: "#FF4655",
                desc: "For League of Legends and Valorant, MEOK connects to Riot's official public API to pull match history, rank, champion stats, and live game context.",
                applies: "League of Legends · Valorant",
              },
              {
                method: "Steam API",
                icon: "🟦",
                color: "#66c0f4",
                desc: "For CS2 and other Steam games, MEOK uses the Steam Web API for match history, playtime, and per-game stats where the developer exposes them.",
                applies: "CS2 · Steam games",
              },
              {
                method: "Manual input fallback",
                icon: "⌨️",
                color: "#6b7fa3",
                desc: "No API for your game? You describe the situation verbally or type it in. MEOK analyses what you tell it. No automation required.",
                applies: "Any game",
              },
            ].map((item) => (
              <div
                key={item.method}
                className="p-6 rounded-2xl border transition-all"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: `${item.color}25`,
                }}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="font-black text-white text-sm">{item.method}</div>
                      <div className="text-[10px] font-mono mt-0.5" style={{ color: `${item.color}80` }}>
                        {item.applies}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20 flex-shrink-0">
                    Coming Soon
                  </span>
                </div>
                <p className="text-xs text-white/45 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Hard limits callout */}
          <div
            className="rounded-2xl border border-red-500/20 p-6 flex gap-4 items-start"
            style={{ background: "rgba(239,68,68,0.04)" }}
          >
            <span className="text-xl flex-shrink-0">🚫</span>
            <div>
              <div className="font-black text-red-400 mb-2 text-sm">What MEOK will never do</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  "No process injection — MEOK never injects into a game process",
                  "No memory reading — MEOK never reads game memory addresses",
                  "No file system access — MEOK never reads or modifies game files",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-red-400 font-black flex-shrink-0 text-xs mt-0.5">✕</span>
                    <span className="text-xs text-white/40 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          3 PRODUCTS
      ═══════════════════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#0d0c18]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              3 products. 1 system.
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              Before, during,{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #c9a84c 0%, #f0d080 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                and after.
              </span>
            </h2>
          </div>

          <div className="space-y-8">
            {PRODUCTS.map((product, idx) => {
              const Icon = product.icon;
              const isReversed = idx === 1;
              return (
                <div
                  key={product.id}
                  className={`rounded-3xl overflow-hidden border ${product.cardBorder} transition-all premium-card`}
                >
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 ${
                      isReversed ? "" : ""
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`p-10 md:p-12 ${
                        isReversed ? "order-1 md:order-2" : ""
                      }`}
                    >
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${product.badgeBg} border ${product.badgeBorder} ${product.badgeColor} text-xs font-black tracking-[0.2em] uppercase mb-6`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${product.pulseDot} animate-pulse`}
                        />
                        {product.badge}
                      </div>
                      <h3 className="text-3xl font-black text-white mb-4">
                        {product.title}
                      </h3>
                      <p className="text-white/40 leading-relaxed mb-5">
                        {product.body}
                      </p>
                      <div
                        className="rounded-2xl p-4 mb-6 text-xs text-white/50 leading-relaxed italic"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.07)",
                        }}
                      >
                        <span className="text-[10px] font-black text-white/20 font-mono block mb-1.5 not-italic">
                          EXAMPLE
                        </span>
                        {product.use_case}
                      </div>
                      <ul className="space-y-2.5 mb-8">
                        {product.features.map((feat) => {
                          const FeatIcon = feat.icon;
                          return (
                            <li
                              key={feat.text}
                              className="flex items-center gap-3 text-sm text-white/50"
                            >
                              <FeatIcon
                                className={`w-4 h-4 ${product.badgeColor} opacity-60 flex-shrink-0`}
                              />
                              {feat.text}
                            </li>
                          );
                        })}
                      </ul>
                      <Link
                        href={product.link}
                        className={`inline-flex items-center gap-2 ${product.badgeColor} font-bold text-sm hover:gap-3 transition-all`}
                      >
                        {product.linkLabel}{" "}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Mockup */}
                    <div
                      className={`p-8 md:p-10 bg-black/40 flex flex-col justify-center border-t md:border-t-0 ${
                        isReversed
                          ? "order-2 md:order-1 md:border-r"
                          : "md:border-l"
                      } border-white/[0.06]`}
                    >
                      <p className="text-xs text-white/20 font-mono mb-5 uppercase tracking-widest">
                        {product.mockTitle}
                      </p>

                      {/* Chat-style mock for live copilot */}
                      {product.mockLines && (
                        <div className="space-y-3">
                          {product.mockLines.map((line, i) => (
                            <div
                              key={i}
                              className={`flex ${
                                line.side === "right"
                                  ? "justify-end"
                                  : "justify-start"
                              }`}
                            >
                              <div
                                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-xs ${
                                  line.side === "right"
                                    ? "bg-white/[0.08] text-white/60"
                                    : `${product.badgeBg} border ${product.badgeBorder} ${product.badgeColor}`
                                }`}
                              >
                                <div
                                  className={`text-[10px] font-black mb-1 ${
                                    line.side === "right"
                                      ? "text-white/20"
                                      : `${product.badgeColor} opacity-50`
                                  }`}
                                >
                                  {line.role}
                                </div>
                                {line.msg}
                              </div>
                            </div>
                          ))}
                          {product.responseLabel && (
                            <div
                              className={`flex items-center gap-2 text-xs ${product.badgeColor} opacity-50 font-mono`}
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${product.responseDot} animate-pulse`}
                              />
                              {product.responseLabel}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Stats mock for post-game */}
                      {product.mockStats && (
                        <div className="space-y-3">
                          {product.mockStats.map((item) => (
                            <div
                              key={item.label}
                              className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]"
                            >
                              <span
                                className={`text-base font-black flex-shrink-0 ${item.color}`}
                              >
                                {item.val}
                              </span>
                              <div>
                                <div className="text-[10px] text-white/20 font-mono">
                                  {item.label}
                                </div>
                                <div className="text-xs text-white/60">
                                  {item.sub}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tips mock for strategy */}
                      {product.mockTips && (
                        <div className="space-y-2">
                          {product.mockTips.map((tip, i) => (
                            <div
                              key={i}
                              className={`flex gap-3 p-3 rounded-xl bg-white/[0.03] border border-green-400/10`}
                            >
                              <span className="text-green-400 font-black text-xs flex-shrink-0 mt-0.5 font-mono">
                                {i + 1}.
                              </span>
                              <p className="text-xs text-white/50">{tip}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          HOW IT WORKS
      ═══════════════════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              How it works
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              Three steps to{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #c9a84c 0%, #f0d080 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                something that knows you
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                icon: Database,
                title: "Connect your accounts",
                desc: "Link Steam, Riot, or Battle.net. MEOK pulls your match history and builds an initial model of your playstyle. Takes about 2 minutes.",
                accent: "text-[#c9a84c]",
                iconClass: "icon-gold",
                border: "border-[#c9a84c]/30",
              },
              {
                step: "02",
                icon: Brain,
                title: "MEOK learns you",
                desc: "Each session feeds the memory. After a handful of matches, it starts recognising patterns: your bad habits, your best maps, your tilt conditions.",
                accent: "text-purple-400",
                iconClass: "icon-purple",
                border: "border-purple-400/30",
              },
              {
                step: "03",
                icon: TrendingUp,
                title: "It coaches you specifically",
                desc: "Not generic advice. Not average-player data. Coaching tuned to your actual patterns — in the match, after it, and before the next one.",
                accent: "text-[#2d9b8a]",
                iconClass: "icon-green",
                border: "border-[#2d9b8a]/30",
              },
            ].map((s) => {
              const StepIcon = s.icon;
              return (
                <div
                  key={s.step}
                  className={`premium-card p-8 border ${s.border}`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${s.iconClass}`}
                  >
                    <StepIcon className="w-5 h-5" />
                  </div>
                  <div
                    className={`text-4xl font-black mb-4 ${s.accent} font-mono`}
                  >
                    {s.step}
                  </div>
                  <h3 className="font-black text-lg text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          GAMES
      ═══════════════════════════════════════════════ */}
      <section className="py-16 px-6 bg-[#0a0a0f] border-y border-white/[0.05]">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-mono text-white/20 uppercase tracking-widest mb-8">
            Games supported at launch
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "CS2", emoji: "💣", launch: true },
              { name: "Valorant", emoji: "🎯", launch: true },
              { name: "League of Legends", emoji: "⚔️", launch: true },
              { name: "Dota 2", emoji: "🌌", launch: false },
              { name: "Apex Legends", emoji: "🔫", launch: false },
              { name: "Overwatch 2", emoji: "🎮", launch: false },
              { name: "Fortnite", emoji: "🏆", launch: false },
            ].map((game) => (
              <div
                key={game.name}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm transition-all ${
                  game.launch
                    ? "border-[#c9a84c]/30 text-white/80 bg-[#c9a84c]/[0.06]"
                    : "border-white/[0.07] bg-white/[0.03] text-white/40"
                }`}
              >
                <span>{game.emoji}</span>
                {game.name}
                {!game.launch && (
                  <span className="text-[9px] font-mono text-white/20 uppercase tracking-wide">
                    soon
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          WHO THIS IS FOR
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              Who this is for
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Built for players who want to{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #c9a84c 0%, #f0d080 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                actually improve.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                label: "The stuck player",
                detail: "You've played hundreds of hours. Your rank barely moved. You know something is wrong but you can't see it from inside the game. MEOK can — because it watches every session and remembers all of them.",
                color: "text-amber-400",
                dot: "bg-amber-400",
                border: "border-amber-400/20",
              },
              {
                label: "The self-aware grinder",
                detail: "You already review your own VODs. You already track your stats. MEOK is what you add when you want a second perspective that knows you specifically — your tilt conditions, your fatigue patterns, your bad habits by name.",
                color: "text-purple-400",
                dot: "bg-purple-400",
                border: "border-purple-400/20",
              },
              {
                label: "The team player who carries mental load",
                detail: "You're managing your own game and thinking about the team. MEOK handles the analytical layer so you can stay in the moment — strategy ready before you queue, debrief ready when you're done.",
                color: "text-blue-400",
                dot: "bg-blue-400",
                border: "border-blue-400/20",
              },
            ].map((p) => (
              <div
                key={p.label}
                className={`premium-card p-7 rounded-2xl border ${p.border} flex flex-col gap-4`}
              >
                <div className={`w-2 h-2 rounded-full ${p.dot}`} />
                <h3 className={`font-black text-sm leading-snug ${p.color}`}>{p.label}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#0d0c18]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              The questions you actually have
            </span>
            <h2 className="text-4xl font-black">FAQ</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          GAMING COMPANION — GENRE SPECIALISTS
      ═══════════════════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#0d0c18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              Gaming Companion
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
              Your AI that{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #c9a84c 0%, #f0d080 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                levels up with you
              </span>
            </h2>
            <p className="text-base text-white/40 max-w-xl mx-auto leading-relaxed">
              Four specialist AI companions — each built for a different kind of game.
              Pick the one that matches your play style.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                emoji: "\uD83C\uDFAF",
                title: "FPS Coach",
                name: "Commander",
                description: "Tactical callouts, aim training feedback, and real-time positioning advice. Direct. No fluff. Just the information that wins rounds.",
                features: [
                  "Real-time tactical callouts and positioning",
                  "Aim training analysis and drill recommendations",
                  "Economy management and buy-round strategy",
                ],
                color: "#F59E0B",
                borderColor: "border-amber-400/20",
                bgColor: "rgba(245,158,11,0.04)",
                accentText: "text-amber-400",
              },
              {
                emoji: "\u2694\uFE0F",
                title: "RPG Strategist",
                name: "Sage",
                description: "Build optimisation, lore context, and strategic planning. Knows the meta, remembers your progression, and weaves narrative into every decision.",
                features: [
                  "Build and stat optimisation per class/role",
                  "Deep lore context and narrative guidance",
                  "Boss strategy and encounter preparation",
                ],
                color: "#065F46",
                borderColor: "border-emerald-400/20",
                bgColor: "rgba(6,95,70,0.06)",
                accentText: "text-emerald-400",
              },
              {
                emoji: "\uD83E\udDE9",
                title: "Puzzle Helper",
                name: "Cipher",
                description: "Hints, not answers. Socratic questioning that guides you to the solution yourself. Because the satisfaction of solving it matters more than the answer.",
                features: [
                  "Graduated hint system — nudge before reveal",
                  "Socratic questioning to guide your thinking",
                  "Pattern recognition coaching across puzzles",
                ],
                color: "#7C3AED",
                borderColor: "border-purple-400/20",
                bgColor: "rgba(124,58,237,0.05)",
                accentText: "text-purple-400",
              },
              {
                emoji: "\uD83C\uDFC6",
                title: "Sports Analyst",
                name: "Rally",
                description: "Stats, predictions, and motivation. Whether it's FIFA, Madden, or NBA 2K — Rally brings the data and the energy to keep you competing at your ceiling.",
                features: [
                  "Live stats tracking and performance trends",
                  "Opponent scouting and prediction models",
                  "Motivational coaching and mental game support",
                ],
                color: "#EF4444",
                borderColor: "border-red-400/20",
                bgColor: "rgba(239,68,68,0.04)",
                accentText: "text-red-400",
              },
            ].map((card) => (
              <div
                key={card.title}
                className={`rounded-2xl p-8 border ${card.borderColor} transition-all hover:scale-[1.01]`}
                style={{ background: card.bgColor }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{card.emoji}</span>
                  <div>
                    <h3 className="font-black text-white text-lg">{card.title}</h3>
                    <span className={`text-xs font-mono ${card.accentText} opacity-60`}>
                      powered by {card.name}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-white/50 leading-relaxed mb-5">
                  {card.description}
                </p>
                <ul className="space-y-2">
                  {card.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs text-white/40">
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{ background: card.color }}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          STREAMING OVERLAY — COMING SOON
      ═══════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#13121f]">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.08), rgba(201,168,76,0.06))",
              border: "1.5px solid rgba(124,58,237,0.2)",
            }}
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 4px)",
              }}
            />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-black tracking-[0.2em] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                Coming Soon
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
                AI overlay for{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #c9a84c 0%, #f0d080 60%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  your stream
                </span>
              </h2>
              <p className="text-white/40 leading-relaxed text-sm max-w-lg mx-auto mb-8">
                MEOK as a live streaming overlay. Your audience sees the AI coaching in real time — callouts,
                strategy shifts, and pattern alerts rendered as an OBS-compatible overlay. Entertainment
                meets performance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                {[
                  { icon: "\uD83C\uDFA5", label: "OBS / Streamlabs compatible" },
                  { icon: "\uD83D\uDCAC", label: "Chat-reactive AI commentary" },
                  { icon: "\uD83D\uDCCA", label: "Live stats widget for viewers" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-4 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-xs text-white/50 font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          STATS INTEGRATION — CONNECT YOUR PROFILE
      ═══════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#0d0c18] border-t border-white/[0.05]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              Stats integration
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
              Connect your{" "}
              <span className="text-[#c9a84c]">gaming profile</span>
            </h2>
            <p className="text-white/40 text-sm max-w-lg mx-auto leading-relaxed">
              Link your accounts once. MEOK pulls your history, builds your player model,
              and starts coaching from session one.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            {[
              { platform: "Steam", icon: "\uD83D\uDFE6", status: "Launch" },
              { platform: "Riot Games", icon: "\u2694\uFE0F", status: "Launch" },
              { platform: "Battle.net", icon: "\uD83D\uDD35", status: "Wave 2" },
              { platform: "Epic Games", icon: "\uD83D\uDFE3", status: "Wave 2" },
            ].map((p) => (
              <div
                key={p.platform}
                className="rounded-2xl p-5 text-center transition-all hover:scale-[1.02]"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <span className="text-2xl block mb-2">{p.icon}</span>
                <div className="font-black text-white text-sm mb-1">{p.platform}</div>
                <div
                  className={`text-[10px] font-mono uppercase tracking-wide ${
                    p.status === "Launch" ? "text-[#c9a84c]" : "text-white/25"
                  }`}
                >
                  {p.status}
                </div>
              </div>
            ))}
          </div>

          <div
            className="rounded-2xl p-6 max-w-2xl mx-auto"
            style={{
              background: "rgba(201,168,76,0.04)",
              border: "1px solid rgba(201,168,76,0.15)",
            }}
          >
            <div className="flex items-start gap-4">
              <span className="text-xl flex-shrink-0">{"\uD83D\uDD12"}</span>
              <div>
                <div className="font-black text-white text-sm mb-1">Your data stays yours</div>
                <p className="text-xs text-white/40 leading-relaxed">
                  MEOK reads your stats through official APIs only. We never store raw match data
                  on our servers — your player model lives on your device. Delete it anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          TESTIMONIAL
      ═══════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#13121f]">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="rounded-3xl p-10 sm:p-14"
            style={{
              background: "rgba(201,168,76,0.04)",
              border: "1.5px solid rgba(201,168,76,0.15)",
            }}
          >
            <span className="text-4xl block mb-6">{"\uD83C\uDFAE"}</span>
            <blockquote className="text-2xl sm:text-3xl font-black text-white/80 leading-snug mb-6">
              &ldquo;2,000 hours of gameplay data,{" "}
              <span className="text-[#c9a84c]">understood.</span>&rdquo;
            </blockquote>
            <p className="text-sm text-white/40 leading-relaxed max-w-md mx-auto mb-6">
              MEOK doesn&apos;t just see your stats. It understands the story behind them —
              the sessions where you were tired, the patches where you adapted,
              the habits you formed without noticing. Two thousand hours of context,
              coaching every future decision.
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#c9a84c]/20 flex items-center justify-center">
                <span className="text-sm">{"\uD83D\uDC64"}</span>
              </div>
              <div className="text-left">
                <div className="text-sm font-black text-white/70">Founding Member</div>
                <div className="text-xs text-white/30 font-mono">CS2 / Valorant / League</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          END CTA
      ═══════════════════════════════════════════════ */}
      <section className="relative py-32 px-6 overflow-hidden bg-[#0a0a0f]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(168,85,247,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-black tracking-wider uppercase mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            Gaming launches Q3 2026 — founding members first
          </div>

          <h2 className="text-4xl sm:text-6xl font-black leading-[0.95] mb-6 tracking-tight">
            Get your gaming
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #c9a84c 0%, #f0d080 60%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              co-pilot.
            </span>
          </h2>

          <p className="text-lg text-white/30 max-w-xl mx-auto mb-10 leading-relaxed">
            Founding members get early access, input on which games ship first,
            and pricing locked for life.
          </p>

          <Link
            href="/hatch"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-base sm:text-lg"
            style={{
              boxShadow: "0 0 40px rgba(201,168,76,0.25)",
            }}
          >
            Get your gaming co-pilot
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <p className="mt-6 text-xs text-white/20 font-mono">
            No commitment · Founding member pricing · Vote on the roadmap
          </p>
        </div>
      </section>

    </div>
  );
}
