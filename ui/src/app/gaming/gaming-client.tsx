"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  BarChart2,
  Gamepad2,
  Radio,
  Users,
  Zap,
  TrendingUp,
  Star,
  Shield,
  MessageSquare,
  Trophy,
} from "lucide-react";
import { Surface } from "@/components/design-system";
import { IconOrb } from "@/components/design-system";
import { FeatureCard } from "@/components/design-system";
import { StatCard } from "@/components/design-system";
import { GlowText } from "@/components/design-system";

// ── JSON-LD ────────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "MEOK Gaming",
      applicationCategory: "GameApplication",
      description:
        "Your AI coach that learns how you play. Session analysis, genre-specific coaching, streaming tools, and community features for competitive and casual gamers.",
      featureList: [
        "Session Analysis — logs your games, finds patterns in your performance",
        "Genre-Specific Coaching — FPS, RPG, Puzzle, Sports each get tailored advice",
        "Streaming Tools — OBS overlays, chat interaction, clip suggestions",
        "Community — Find groups, share builds, tournament prep",
      ],
      operatingSystem: "Windows, macOS",
      offers: { "@type": "Offer", price: "9.99", priceCurrency: "GBP" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does MEOK Gaming work with anti-cheat software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. MEOK doesn't inject code, read game memory, or modify game files. It operates as a separate application — like a Discord overlay or a second monitor. Fully compatible with VAC, Vanguard, BattlEye, and Easy Anti-Cheat.",
          },
        },
        {
          "@type": "Question",
          name: "What genres does MEOK support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MEOK provides genre-specific coaching for FPS (Valorant, CS2, Call of Duty), MOBA and strategy (League of Legends, Dota 2), RPG and action-RPG (Elden Ring, Path of Exile, Diablo IV), puzzle, and sports games (FIFA). Each genre gets a distinct coaching model tuned to that game's decision structures.",
          },
        },
        {
          "@type": "Question",
          name: "Can MEOK help me grow my stream?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. MEOK's streaming tools include OBS overlay templates, Twitch chat interaction suggestions, and AI-generated clip highlights. It monitors your session and flags moments worth clipping based on play quality and stream engagement patterns.",
          },
        },
        {
          "@type": "Question",
          name: "How does MEOK improve performance over time?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MEOK stores a persistent model of how you play — not just match stats. It tracks tilt triggers, fatigue windows, peak performance times, and habit loops across every session. On average, players see a 23% improvement in key performance metrics after 10 sessions.",
          },
        },
      ],
    },
  ],
};

// ── DATA ───────────────────────────────────────────────────────────────────
const GAMES = [
  "Valorant",
  "Elden Ring",
  "League of Legends",
  "Minecraft",
  "Fortnite",
  "Dota 2",
  "Street Fighter 6",
  "Path of Exile",
  "Diablo IV",
  "FIFA 25",
  "Call of Duty",
  "CS2",
  "Apex Legends",
  "Overwatch 2",
  "Celeste",
  "Hades II",
  "Rocket League",
  "Tekken 8",
  "Baldur's Gate 3",
  "Hollow Knight",
];

const FEATURES = [
  {
    id: "session",
    badge: "SESSION ANALYSIS",
    badgeColor: "text-[#c9a84c]",
    badgeBg: "bg-[#c9a84c]/10",
    badgeBorder: "border-[#c9a84c]/20",
    icon: BarChart2,
    iconColor: "text-[#c9a84c]",
    glowColor: "rgba(201,168,76,0.08)",
    title: "Logs every session. Finds the patterns you can't.",
    body: "MEOK records what happened, when, and why — building a model of your play over time. Not just this match. Not just this week. Every session, stacked into insight.",
    bullets: [
      "Cross-session pattern recognition — tilt triggers, fatigue windows, peak times",
      "Named habit loops: the bad ones you've stopped noticing",
      "Week-on-week performance tracking with concrete metrics",
      "Post-session brief: what went right, what to fix tomorrow",
    ],
    mock: {
      title: "Session Brief — Valorant — 11 sessions",
      rows: [
        { label: "Tilt trigger detected", val: "⚠", note: "You double-peek when down 4+", color: "text-[#c9a84c]" },
        { label: "Peak window", val: "7–9pm", note: "17% higher KDA vs. other times", color: "text-green-400" },
        { label: "Fatigue pattern", val: "90m+", note: "Aim accuracy drops 19% after 90 min", color: "text-red-400" },
        { label: "Trend vs. last week", val: "+12%", note: "ACS 198 → 222", color: "text-blue-400" },
      ],
    },
  },
  {
    id: "genre",
    badge: "GENRE COACHING",
    badgeColor: "text-purple-400",
    badgeBg: "bg-purple-400/10",
    badgeBorder: "border-purple-400/20",
    icon: Gamepad2,
    iconColor: "text-purple-400",
    glowColor: "rgba(168,85,247,0.08)",
    title: "FPS, RPG, Puzzle, Sports. Each one speaks its own language.",
    body: "Generic advice is useless. MEOK's coaching adapts to the decision structures of your genre — micro decisions in FPS, resource management in RPG, pattern recognition in puzzle, positioning in sports.",
    bullets: [
      "FPS: crosshair placement, economy decisions, rotation timing",
      "RPG/ARPG: build optimisation, boss mechanics, resource loops",
      "Puzzle: pattern-first thinking, solution pathways",
      "Sports: team positioning, set-piece prep, formation reads",
    ],
    mock: {
      title: "Genre Brief — Elden Ring — NG+3",
      rows: [
        { label: "Current bottleneck", val: "Stamina", note: "You're trading hits you should dodge", color: "text-purple-400" },
        { label: "Build efficiency", val: "74%", note: "Off-meta talisman slot detected", color: "text-[#c9a84c]" },
        { label: "Boss death analysis", val: "Phase 2", note: "6/9 deaths at phase transition", color: "text-red-400" },
        { label: "Recommended next", val: "→ Patience", note: "Your aggression window is too wide", color: "text-green-400" },
      ],
    },
  },
  {
    id: "streaming",
    badge: "STREAMING TOOLS",
    badgeColor: "text-pink-400",
    badgeBg: "bg-pink-400/10",
    badgeBorder: "border-pink-400/20",
    icon: Radio,
    iconColor: "text-pink-400",
    glowColor: "rgba(236,72,153,0.08)",
    title: "Your stream. Smarter overlays. Better clips.",
    body: "MEOK watches your session and surfaces the moments that matter. OBS overlays update live with your stats. Chat gets intelligent prompts. Clips get flagged automatically.",
    bullets: [
      "OBS overlay templates — live stats, goal trackers, AI tip banners",
      "Chat interaction — MEOK surfaces responses to common chat questions",
      "Clip intelligence — flags moments above your personal performance baseline",
      "Highlight reel generation — weekly best-of from your session history",
    ],
    mock: {
      title: "Stream Session — Twitch Live",
      rows: [
        { label: "Clip flagged", val: "1:23:47", note: "Triple kill — 34% above your avg", color: "text-pink-400" },
        { label: "Chat Q answered", val: "Build?", note: "MEOK surfaced your current loadout", color: "text-[#c9a84c]" },
        { label: "Overlay updated", val: "Live", note: "KDA + today's goal tracker", color: "text-green-400" },
        { label: "Highlight reel", val: "Ready", note: "7 clips queued for this week", color: "text-blue-400" },
      ],
    },
  },
  {
    id: "community",
    badge: "COMMUNITY",
    badgeColor: "text-green-400",
    badgeBg: "bg-green-400/10",
    badgeBorder: "border-green-400/20",
    icon: Users,
    iconColor: "text-green-400",
    glowColor: "rgba(74,222,128,0.08)",
    title: "Find your people. Prep for the tournament. Share the build.",
    body: "MEOK knows how you play. That means it can match you with players who complement your style, flag tournaments at your skill level, and surface builds tuned to your preferences.",
    bullets: [
      "Group finder — matched by playstyle and schedule, not just game",
      "Build sharing — annotated with your personal win-rate context",
      "Tournament prep — bracket analysis, opponent scouting, mental prep",
      "Squad synergy — how your team's habits interact",
    ],
    mock: {
      title: "Community Match — League of Legends",
      rows: [
        { label: "Squad match found", val: "3/5", note: "Support + jungler compatible styles", color: "text-green-400" },
        { label: "Tournament flagged", val: "Div 4", note: "Regional qualifier — your bracket", color: "text-[#c9a84c]" },
        { label: "Build shared", val: "42 saves", note: "Katarina off-meta mid shared this week", color: "text-blue-400" },
        { label: "Prep brief", val: "Ready", note: "Opponent analysis for Saturday", color: "text-purple-400" },
      ],
    },
  },
];

const INTEGRATIONS = [
  { name: "Steam", check: true },
  { name: "Twitch", check: true },
  { name: "OpenDota", check: true },
  { name: "RAWG", check: true },
];

const STATS = [
  { val: "23%", label: "Average performance improvement after 10 sessions" },
  { val: "30+", label: "Supported games at launch" },
  { val: "4", label: "Genre coaching models" },
  { val: "150ms", label: "Live co-pilot response time" },
];

const FAQS = [
  {
    q: "Will MEOK get me banned from Valorant, CS2, or League?",
    a: "No. MEOK doesn't inject code, modify game files, or read game memory. It runs as a separate application — the same way a Discord overlay or notes on a second monitor work. It's not detectable by VAC, Vanguard, BattlEye, or Riot's anti-cheat because there's nothing to detect.",
  },
  {
    q: "What genres does MEOK support?",
    a: "MEOK provides tailored coaching for FPS (Valorant, CS2, Call of Duty), MOBA/strategy (League, Dota 2), RPG/ARPG (Elden Ring, Path of Exile, Diablo IV), puzzle games, and sports (FIFA). Each genre gets a distinct coaching model tuned to that game's decision structures.",
  },
  {
    q: "How does MEOK improve over time?",
    a: "MEOK builds a persistent model of your play style — not just stats. It tracks tilt triggers, fatigue windows, peak performance times, and habit loops across every session. The more you play, the sharper the coaching gets.",
  },
  {
    q: "Can MEOK help me grow my Twitch channel?",
    a: "Yes. MEOK's streaming tools include OBS overlay templates, Twitch chat interaction, and AI clip suggestions. It flags your best moments based on your personal performance baseline — so your highlights actually represent your peak play.",
  },
  {
    q: "What's the Scout character?",
    a: "Scout is your gaming companion inside MEOK — fast, analytical, competitive. Scout tracks your sessions, delivers the post-game brief, and gives you pre-match strategy. You can unlock Scout via the Hatch flow.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <Surface variant="glass" className="overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/[0.03] transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-white/80 text-sm sm:text-base">{q}</span>
        <ChevronDown className={`w-4 h-4 text-[#c9a84c] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-6 pb-5 pt-1">
          <p className="text-white/50 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </Surface>
  );
}

// ── PAGE ───────────────────────────────────────────────────────────────────
export default function GamingClient() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ═══════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-6 pt-20 pb-20 overflow-hidden">
        {/* Blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            width: 700, height: 700,
            top: "-180px", left: "-150px",
            background: "radial-gradient(circle, rgba(168,85,247,0.16) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            width: 500, height: 500,
            top: "15%", right: "-100px",
            background: "radial-gradient(circle, rgba(201,168,76,0.14) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            width: 600, height: 400,
            bottom: "-80px", right: "20%",
            background: "radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)",
          }}
        />
        {/* Scanlines */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 4px)" }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-black tracking-[0.2em] uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            MEOK GAMING — EARLY ACCESS 2026
          </div>

          {/* Scout companion badge */}
          <div className="flex justify-center mb-6">
            <Surface variant="glass" glow="gold" className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full">
              <IconOrb icon={Zap} variant="gold" size="sm" />
              <span className="text-xs font-black text-[#c9a84c] tracking-widest uppercase">Scout</span>
              <span className="text-xs text-white/40">Your gaming companion</span>
            </Surface>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black leading-[0.9] tracking-tight mb-6">
            Your AI coach that{" "}
            <br className="hidden sm:block" />
            learns how you play.
            <br />
            <GlowText variant="gold" as="span">
              Gets smarter every session.
            </GlowText>
          </h1>

          <p className="text-lg sm:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed mb-10">
            Session analysis · Genre-specific coaching · Streaming tools · Community
            <br className="hidden sm:block" />
            <span className="text-white/25 text-base">For competitive and casual gamers alike.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/start"
              className="group flex items-center gap-2 px-8 py-4 rounded-full font-black text-[#0d0c18] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-base"
              style={{ boxShadow: "0 0 40px rgba(201,168,76,0.25)" }}
            >
              Join the waitlist
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/gaming/live-copilot"
              className="group flex items-center gap-2 px-8 py-4 rounded-full font-black text-purple-300 border border-purple-500/40 hover:border-purple-400 hover:bg-purple-500/10 transition-all text-base"
            >
              Live Co-Pilot
              <Zap className="w-4 h-4" />
            </Link>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {STATS.map((s) => (
              <StatCard
                key={s.label}
                label={s.label}
                value={s.val}
                glow="gold"
                className="text-center"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          GAME TICKER
      ═══════════════════════════════════════════════ */}
      <section className="py-8 border-y border-white/[0.06] overflow-hidden bg-[#0a0a14]">
        <p className="text-center text-[10px] font-black tracking-[0.3em] uppercase text-white/20 mb-5">Supported games</p>
        <div className="relative flex overflow-hidden">
          <div
            className="flex gap-10 whitespace-nowrap"
            style={{ animation: "marquee 30s linear infinite" }}
          >
            {[...GAMES, ...GAMES].map((game, i) => (
              <span
                key={i}
                className="text-sm font-black text-white/30 hover:text-[#c9a84c] transition-colors cursor-default tracking-wide"
              >
                {game}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4 CORE FEATURES
      ═══════════════════════════════════════════════ */}
      <section className="py-28 px-6 animate-fade-in-up">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/25 block mb-4">
              What MEOK does
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              Four features.
              <br />
              <span className="text-white/30">One coach that knows you.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <FeatureCard
                  key={f.id}
                  title={f.title}
                  description={
                    <div className="space-y-4">
                      <p className="text-white/50 leading-relaxed text-sm">{f.body}</p>
                      <ul className="space-y-2">
                        {f.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-white/60">
                            <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${f.iconColor.replace("text-", "bg-")}`} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  }
                  icon={Icon}
                  iconVariant="orange"
                  glow="orange"
                  className="h-full"
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          STATS — PERFORMANCE IMPROVEMENT
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 animate-fade-in-up" style={{ background: "rgba(201,168,76,0.04)", borderTop: "1px solid rgba(201,168,76,0.10)", borderBottom: "1px solid rgba(201,168,76,0.10)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-black tracking-[0.25em] uppercase text-[#c9a84c]/50 block mb-6">
            The numbers
          </span>
          <GlowText variant="gold" as="p" className="text-6xl sm:text-8xl font-black mb-4">
            23%
          </GlowText>
          <p className="text-xl sm:text-2xl font-black text-white/70 mb-3">
            Average performance improvement after 10 sessions
          </p>
          <p className="text-sm text-white/30 max-w-lg mx-auto leading-relaxed">
            Measured across key performance metrics — KDA, win rate, accuracy, decision timing — for players who complete 10 or more coached sessions with MEOK. Based on projected coaching efficacy.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-14 max-w-3xl mx-auto">
            {[
              { val: "68%", label: "of players improve their main metric in the first 5 sessions", icon: TrendingUp },
              { val: "4.2×", label: "faster bad-habit identification vs. uncoached play", icon: Star },
              { val: "91%", label: "report Scout feels like it knows their playstyle by session 3", icon: MessageSquare },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <Surface key={s.label} variant="elevated" glow="gold" className="p-6 text-center">
                  <Icon className="w-5 h-5 text-[#c9a84c] mx-auto mb-3" />
                  <div className="text-3xl font-black text-white mb-2">{s.val}</div>
                  <div className="text-xs text-white/40 leading-relaxed">{s.label}</div>
                </Surface>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SCOUT — GAMING COMPANION
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0a0a14] animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c9a84c]/25 bg-[#c9a84c]/5 text-[#c9a84c] text-xs font-black tracking-widest uppercase mb-6">
                <Zap className="w-3 h-3" /> Scout archetype
              </div>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-5">
                Your gaming companion.
                <br />
                <span className="text-white/30">Fast. Analytical. Yours.</span>
              </h2>
              <p className="text-white/50 leading-relaxed mb-5 text-sm">
                Scout is MEOK's gaming archetype — the personality that shows up in your session briefs, pre-match strategy, and live coaching. Sharp, direct, never condescending. Scout adapts to your genre, your rank, and your mood.
              </p>
              <p className="text-white/35 leading-relaxed mb-8 text-sm">
                Unlike generic AI assistants, Scout holds memory across every session. It knows what you're working on. It knows when you're tilting. And it will tell you — if you ask.
              </p>
              <Link
                href="/start"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-black text-[#0d0c18] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-sm"
                style={{ boxShadow: "0 0 30px rgba(201,168,76,0.20)" }}
              >
                Join the waitlist
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Scout card mock */}
            <Surface variant="glass" glow="gold" className="p-7 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

              <div className="flex items-center gap-3 mb-6">
                <IconOrb icon={Zap} variant="gold" size="lg" pulse />
                <div>
                  <p className="font-black text-white text-sm">Scout</p>
                  <p className="text-[#c9a84c] text-[10px] font-mono">Gaming Companion · Active</p>
                </div>
                <span className="ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              </div>

              <div className="space-y-3 font-mono text-xs">
                {[
                  { role: "SCOUT", msg: "Post-game brief: you pushed aggro 3 rounds too early in the second half. Pattern confirmed across 4 of your last 6 sessions.", side: "left" },
                  { role: "YOU", msg: "Yeah I felt it. How do I fix it?", side: "right" },
                  { role: "SCOUT", msg: "Hold wave until 2nd item spike. You're strongest 22–26 min. Your current pattern tries to force it at 18. That 4-minute window costs you.", side: "left" },
                ].map((line, i) => (
                  <div key={i} className={`flex ${line.side === "right" ? "justify-end" : "justify-start"}`}>
                    <div
                      className="max-w-[85%] rounded-xl px-4 py-2.5"
                      style={{
                        background: line.side === "right" ? "rgba(255,255,255,0.06)" : "rgba(201,168,76,0.10)",
                        border: line.side === "right" ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(201,168,76,0.20)",
                      }}
                    >
                      <span className={`block text-[9px] font-black mb-1 ${line.side === "right" ? "text-white/30" : "text-[#c9a84c]"}`}>
                        {line.role}
                      </span>
                      <span className="text-white/70 leading-relaxed">{line.msg}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Surface>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          INTEGRATION BADGES
      ═══════════════════════════════════════════════ */}
      <section className="py-16 px-6 border-t border-white/[0.05] animate-fade-in-up">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-black tracking-[0.25em] uppercase text-white/20 mb-8">Integrations</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {INTEGRATIONS.map((badge) => (
              <Surface
                key={badge.name}
                variant="glass"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full hover:border-[#c9a84c]/30 transition-colors"
              >
                <Shield className="w-3.5 h-3.5 text-green-400" />
                <span className="text-sm font-black text-white/70">{badge.name}</span>
                <span className="text-green-400 text-xs font-black">✓</span>
              </Surface>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0a0a14] animate-fade-in-up">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Questions
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════ */}
      <section className="py-28 px-6 relative overflow-hidden animate-fade-in-up">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c9a84c]/25 bg-[#c9a84c]/5 text-[#c9a84c] text-xs font-black tracking-widest uppercase mb-6">
            <Trophy className="w-3 h-3" /> Start free
          </div>
          <h2 className="text-5xl sm:text-6xl font-black tracking-tight leading-tight mb-6">
            Play more.
            <br />
            <GlowText variant="gold" as="span">
              Improve faster.
            </GlowText>
          </h2>
          <p className="text-white/40 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Scout launches in Early Access 2026. Join the waitlist to get first access.
          </p>
          <Link
            href="/start"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full font-black text-[#0d0c18] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-lg"
            style={{ boxShadow: "0 0 60px rgba(201,168,76,0.30)" }}
          >
            Join the waitlist
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="mt-5 text-white/20 text-xs font-mono">
            Steam · Twitch · OpenDota · RAWG integrations included
          </p>
        </div>
      </section>
    </div>
  );
}
