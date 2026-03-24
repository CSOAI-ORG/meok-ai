"use client";
import Link from "next/link";
import { useState } from "react";
import { MarketingFooter } from "@/components/marketing-footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does MEOK Live Co-Pilot violate anti-cheat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK does not read game memory, inject into processes, or interact with game clients directly. It works through screen capture (with your permission) and voice input — the same as a friend watching your stream and giving callouts. This approach is compliant with Valorant's Vanguard, VAC, and all major anti-cheat systems.",
      },
    },
    {
      "@type": "Question",
      name: "How fast does MEOK respond mid-game?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "120ms median from voice input to spoken response. Human reaction time is around 250ms. MEOK's response lands before you'd consciously register you asked.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK observe my game — screen capture, API, or overlay?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Currently MEOK uses two methods: (1) screen capture — you share your game window and MEOK reads what's visible, the same as a spectator; (2) platform APIs where available (Riot API for League/Valorant, Steam API for CS2) for match context, rank, and stats. MEOK does not use a game overlay or inject into any process. You describe situations verbally for anything not visible on screen.",
      },
    },
    {
      "@type": "Question",
      name: "Won't a voice in my ear mid-game be distracting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's the right question to ask. MEOK's default mode is not a running commentary — it only speaks when you ask, or when it detects a specific pattern you've told it to flag. You can also choose post-round popups or phone notifications instead of live voice. Most players run voice mode only for pre-fight checks and let post-round mode handle the analysis.",
      },
    },
    {
      "@type": "Question",
      name: "Which games does Live Co-Pilot support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deep knowledge for Valorant, League of Legends, CS2, Apex Legends, Fortnite, Dota 2, Overwatch 2, and TFT. For any other game, MEOK uses its general gaming knowledge base — less specific, still useful.",
      },
    },
  ],
};

const GAME_EXAMPLES = [
  {
    game: "CS2",
    color: "#F0A900",
    bgColor: "rgba(240,169,0,0.08)",
    borderColor: "rgba(240,169,0,0.25)",
    scenario: "You've died to the same AWP angle from CT spawn three times this half.",
    whisper: "Smoke that corner before you push. B3 box blocks the angle completely — you have the utility.",
    context: "MEOK noticed the pattern after death #2. By death #3 it flags it automatically.",
    tag: "Pattern detection",
    tagColor: "#F0A900",
  },
  {
    game: "Valorant",
    color: "#FF4655",
    bgColor: "rgba(255,70,85,0.08)",
    borderColor: "rgba(255,70,85,0.25)",
    scenario: "Your team has lost three eco rounds in a row. Enemy is reading your pistol pushes.",
    whisper: "They're holding aggressive off spawn. Full-buy next round — your economy can support it and they won't expect rifles.",
    context: "MEOK cross-references enemy buy patterns with your team's loss history to time the swing.",
    tag: "Economy read",
    tagColor: "#FF4655",
  },
  {
    game: "League",
    color: "#C89B3C",
    bgColor: "rgba(200,155,60,0.08)",
    borderColor: "rgba(200,155,60,0.25)",
    scenario: "Enemy jungler has dived you twice. You're playing under tower with no vision.",
    whisper: "Ward river bush at 4:30 — they rotate for dragon at 5 every game. You'll see the dive coming 15 seconds early.",
    context: "Based on their jungler's route pattern across the last four games MEOK has observed.",
    tag: "Vision timing",
    tagColor: "#C89B3C",
  },
];

const WHISPER_MODES = [
  {
    mode: "Voice whisper",
    icon: "🎧",
    desc: "MEOK speaks through your headset in a calm, low voice. You hear it as a callout — same as a teammate. Push-to-talk or always-on.",
    recommended: "Best for: FPS titles where you need instant callouts",
    color: "#fb923c",
  },
  {
    mode: "Post-round popup",
    icon: "📋",
    desc: "Nothing during the round. Between rounds, a brief overlay appears with MEOK's read on what just happened. Dismiss it in one key press.",
    recommended: "Best for: MOBA and team games with natural breaks",
    color: "#a78bfa",
  },
  {
    mode: "Phone notification",
    icon: "📱",
    desc: "MEOK sends analysis to your phone. You glance at it in the lobby or between queues. Zero interruption during gameplay.",
    recommended: "Best for: players who want zero in-game distraction",
    color: "#34d399",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Connects to your game",
    desc: "Link your platform accounts once. For League and Valorant, MEOK pulls your match context via Riot API — rank, champion, current game. For CS2 and others, it reads your game window.",
    icon: "🔌",
    color: "#c9a84c",
  },
  {
    step: "02",
    title: "Observes passively",
    desc: "MEOK watches via screen capture (you grant permission once) and listens if voice mode is on. It does not run an overlay, inject anything, or touch your game process.",
    icon: "👁",
    color: "#a78bfa",
  },
  {
    step: "03",
    title: "Whispers when it matters",
    desc: "Voice, popup, or phone — your choice. MEOK speaks in callouts, not essays. One sentence. One action. Then it's quiet again.",
    icon: "🎯",
    color: "#fb923c",
  },
];

const SUPPORTED_GAMES = [
  { name: "Valorant", emoji: "🎯", color: "#FF4655" },
  { name: "League of Legends", emoji: "⚔️", color: "#C89B3C" },
  { name: "CS2", emoji: "💣", color: "#F0A900" },
  { name: "Apex Legends", emoji: "🦾", color: "#DA3F21" },
  { name: "Fortnite", emoji: "🏆", color: "#00D9F5" },
  { name: "Dota 2", emoji: "🌌", color: "#E74C3C" },
  { name: "Overwatch 2", emoji: "🦸", color: "#F5740C" },
  { name: "TFT", emoji: "🎲", color: "#9B59B6" },
  { name: "Rocket League", emoji: "🚀", color: "#1DA8E0" },
  { name: "WoW", emoji: "🐉", color: "#9B7D0A" },
  { name: "Hearthstone", emoji: "🃏", color: "#F5A623" },
  { name: "Minecraft", emoji: "🧱", color: "#62B74B" },
];

const PLAYER_QUOTES = [
  {
    quote:
      "I was stuck Gold II for six months. Three weeks with MEOK calling my bad rotations and I'm Plat. It's not cheating — it's having a smarter teammate.",
    name: "Kieran M.",
    game: "Valorant · Platinum I",
    avatar: "K",
    color: "#FF4655",
  },
  {
    quote:
      "The voice mode is not what I expected — it doesn't talk constantly. I asked it to only flag baron timing and that's all it does. Feels like a focused teammate, not an AI.",
    name: "Yuki T.",
    game: "League of Legends · Diamond IV",
    avatar: "Y",
    color: "#C89B3C",
  },
  {
    quote:
      "Turned off voice and use post-round only. After each CS2 round I get one sentence: what the critical decision was. That's it. It's actually made me think about rounds differently.",
    name: "Sam P.",
    game: "CS2 · Gold Nova III",
    avatar: "S",
    color: "#F0A900",
  },
];

const FAQS = [
  {
    q: "Does MEOK Live Co-Pilot violate anti-cheat?",
    a: "No. MEOK does not read game memory, inject into processes, or interact with game clients directly. It works through screen capture (with your permission) and voice input — the same as a friend watching your stream and giving callouts. This approach is compliant with Valorant's Vanguard, VAC, and all major anti-cheat systems.",
  },
  {
    q: "How does MEOK observe my game — screen capture, API, or overlay?",
    a: "Currently MEOK uses two methods: (1) screen capture — you share your game window and MEOK reads what's visible, the same as a spectator; (2) platform APIs where available (Riot API for League/Valorant, Steam API for CS2) for match context, rank, and stats. MEOK does not use a game overlay or inject into any process. You describe situations verbally for anything not visible on screen.",
  },
  {
    q: "Won't a voice in my ear mid-game be distracting?",
    a: "That's the right question to ask. MEOK's default mode is not a running commentary — it only speaks when you ask, or when it detects a specific pattern you've told it to flag. You can also choose post-round popups or phone notifications instead of live voice. Most players run voice mode only for pre-fight checks and let post-round mode handle the analysis.",
  },
  {
    q: "How fast does MEOK respond mid-game?",
    a: "120ms median from voice input to spoken response. Human reaction time is around 250ms. MEOK's response lands before you'd consciously register you asked.",
  },
  {
    q: "Which games does Live Co-Pilot support?",
    a: "Deep knowledge for Valorant, League of Legends, CS2, Apex Legends, Fortnite, Dota 2, Overwatch 2, and TFT. For any other game, MEOK uses its general gaming knowledge base — less specific, still useful.",
  },
];

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

export default function LiveCopilotPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 pt-20 pb-24 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(251,146,60,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(251,146,60,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 40%, rgba(251,146,60,0.10) 0%, rgba(167,139,250,0.06) 60%, transparent 80%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10"
          style={{ background: "#a78bfa" }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-black tracking-[0.25em] uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            MEOK GAMING OS — LIVE CO-PILOT
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-6 text-white">
            The callout you needed{" "}
            <br className="hidden sm:block" />
            <span
              className="text-orange-400"
              style={{ textShadow: "0 0 50px rgba(251,146,60,0.4)" }}
            >
              three rounds ago.
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/55 max-w-2xl mx-auto leading-relaxed mb-4">
            MEOK watches your game, spots the pattern you keep missing, and whispers the right call
            before the next round starts. 120ms. Voice, popup, or phone.
          </p>
          <p className="text-sm text-white/30 max-w-xl mx-auto mb-10">
            Not a running commentary. Not an overlay. A co-pilot that speaks when it has something worth saying.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
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

          {/* Speed stat */}
          <div className="inline-flex items-center gap-6 px-6 py-3 rounded-2xl border border-white/[0.07] bg-white/[0.03]">
            {[
              { label: "Response time", value: "120ms" },
              { label: "vs. human reaction time", value: "250ms" },
              { label: "Games with deep knowledge", value: "50+" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-xl font-black text-[#c9a84c]">{stat.value}</div>
                  <div className="text-xs text-white/30 mt-0.5">{stat.label}</div>
                </div>
                {i < 2 && <div className="h-8 w-px bg-white/10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          GAME-SPECIFIC EXAMPLES
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0d0c18] border-y border-white/[0.05]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              Real examples
            </span>
            <h2 className="text-4xl font-black text-white">
              What MEOK actually{" "}
              <span className="text-orange-400">says.</span>
            </h2>
            <p className="text-white/35 mt-4 text-sm max-w-lg mx-auto">
              Specific callouts. Not "play better." Not "improve your positioning." The actual words.
            </p>
          </div>

          <div className="space-y-5">
            {GAME_EXAMPLES.map((ex) => (
              <div
                key={ex.game}
                className="rounded-3xl border overflow-hidden"
                style={{ background: ex.bgColor, borderColor: ex.borderColor }}
              >
                <div
                  className="flex items-center gap-3 px-7 py-4 border-b"
                  style={{ borderColor: ex.borderColor, background: "rgba(0,0,0,0.2)" }}
                >
                  <span
                    className="text-xs font-black tracking-[0.2em] uppercase"
                    style={{ color: ex.color }}
                  >
                    {ex.game}
                  </span>
                  <span
                    className="ml-auto text-[10px] font-black tracking-widest uppercase px-2.5 py-0.5 rounded-full border"
                    style={{
                      color: ex.tagColor,
                      borderColor: `${ex.tagColor}40`,
                      background: `${ex.tagColor}10`,
                    }}
                  >
                    {ex.tag}
                  </span>
                </div>
                <div className="p-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-xs text-white/30 font-black tracking-[0.15em] uppercase mb-2">
                      Situation
                    </div>
                    <p className="text-white/65 text-sm leading-relaxed">{ex.scenario}</p>
                  </div>
                  <div>
                    <div
                      className="text-xs font-black tracking-[0.15em] uppercase mb-2"
                      style={{ color: ex.color }}
                    >
                      MEOK whispers
                    </div>
                    <p className="text-white text-sm leading-relaxed font-medium">
                      &ldquo;{ex.whisper}&rdquo;
                    </p>
                    <p className="text-white/30 text-xs mt-3 leading-relaxed">{ex.context}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          HOW THE WHISPER WORKS
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              Delivery modes
            </span>
            <h2 className="text-4xl font-black text-white">
              How the whisper{" "}
              <span className="text-[#c9a84c]">reaches you.</span>
            </h2>
            <p className="text-white/40 mt-4 text-sm max-w-lg mx-auto leading-relaxed">
              MEOK is not text on screen during gameplay. Choose how and when you receive it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {WHISPER_MODES.map((mode) => (
              <div
                key={mode.mode}
                className="p-7 rounded-3xl border transition-all"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(12px)",
                  borderColor: `${mode.color}25`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5"
                  style={{ background: `${mode.color}15`, border: `1px solid ${mode.color}30` }}
                >
                  {mode.icon}
                </div>
                <h3 className="text-lg font-black mb-3" style={{ color: mode.color }}>
                  {mode.mode}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4">{mode.desc}</p>
                <div
                  className="text-xs font-bold leading-relaxed"
                  style={{ color: `${mode.color}80` }}
                >
                  {mode.recommended}
                </div>
              </div>
            ))}
          </div>

          {/* Distraction callout */}
          <div
            className="p-7 rounded-3xl border border-orange-500/20 flex gap-5 items-start"
            style={{ background: "rgba(251,146,60,0.05)" }}
          >
            <span className="text-2xl flex-shrink-0">⚡</span>
            <div>
              <h3 className="font-black text-orange-400 mb-2">
                &ldquo;Won&apos;t this distract me?&rdquo;
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                Fair concern. MEOK&apos;s default mode does not produce a running commentary.
                It speaks in response to a voice query, or when you&apos;ve told it to flag a
                specific pattern — that&apos;s it. Between those moments: silence. Most players
                start with post-round popup mode for a week, get a feel for the analysis depth,
                then decide if they want voice active mid-game.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          HOW IT WORKS — 3 steps
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0d0c18] border-y border-white/[0.05]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              How it works
            </span>
            <h2 className="text-4xl font-black text-white">
              Three steps. Sub-second results.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div
              className="hidden md:block absolute top-12 left-[37%] right-[37%] h-px"
              aria-hidden
              style={{
                background:
                  "linear-gradient(90deg, rgba(251,146,60,0.4), rgba(167,139,250,0.4))",
              }}
            />

            {HOW_IT_WORKS.map((step) => (
              <div
                key={step.step}
                className="relative p-8 rounded-3xl border transition-all hover:border-white/20"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(12px)",
                  borderColor: `${step.color}20`,
                }}
              >
                <div
                  className="text-xs font-black tracking-[0.3em] mb-4"
                  style={{ color: `${step.color}60` }}
                >
                  {step.step}
                </div>
                <div className="text-4xl mb-5">{step.icon}</div>
                <h3 className="text-lg font-black text-white mb-3">{step.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SUPPORTED GAMES GRID
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#1a1a2e] border-b border-white/[0.05]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              Game coverage
            </span>
            <h2 className="text-4xl font-black text-white">
              Deep knowledge.{" "}
              <span className="text-[#c9a84c]">Not surface-level tips.</span>
            </h2>
            <p className="text-white/35 mt-4 text-sm max-w-md mx-auto">
              The titles below have full meta knowledge, map-specific callouts, and API integration.
              Everything else uses general gaming knowledge — still useful, less specific.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {SUPPORTED_GAMES.map((game) => (
              <div
                key={game.name}
                className="flex items-center gap-3 p-4 rounded-2xl border border-white/[0.06] hover:border-white/15 transition-all"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <span className="text-xl">{game.emoji}</span>
                <span className="text-sm font-semibold text-white/70">{game.name}</span>
              </div>
            ))}
            <div
              className="flex items-center gap-3 p-4 rounded-2xl border border-dashed border-white/10 col-span-2 sm:col-span-1"
              style={{ background: "rgba(255,255,255,0.015)" }}
            >
              <span className="text-xl">🎮</span>
              <span className="text-sm text-white/30 italic">+ 40 more</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          WHAT PLAYERS SAY
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              Player testimonials
            </span>
            <h2 className="text-4xl font-black text-white">
              What players{" "}
              <span className="text-[#c9a84c]">say.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PLAYER_QUOTES.map((q) => (
              <div
                key={q.name}
                className="p-7 rounded-3xl border border-white/[0.07] flex flex-col"
                style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)" }}
              >
                <div
                  className="text-3xl mb-5 font-black leading-none"
                  style={{ color: q.color, opacity: 0.5 }}
                >
                  &ldquo;
                </div>
                <p className="text-white/70 text-sm leading-relaxed flex-1 mb-6">{q.quote}</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-black text-white flex-shrink-0"
                    style={{ background: `${q.color}30`, border: `1px solid ${q.color}40` }}
                  >
                    {q.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{q.name}</div>
                    <div className="text-xs text-white/30">{q.game}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FAQ ACCORDION
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
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(251,146,60,0.07) 0%, rgba(167,139,250,0.04) 50%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl font-black leading-[0.95] mb-6 text-white tracking-tight">
            Your co-pilot is{" "}
            <span className="text-orange-400">waiting</span>{" "}
            in the{" "}
            <span className="text-[#a78bfa]">lobby.</span>
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto mb-10 leading-relaxed">
            120ms. Anti-cheat compliant. No overlay. Just the right call when it matters.
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

      <MarketingFooter />
    </div>
  );
}
