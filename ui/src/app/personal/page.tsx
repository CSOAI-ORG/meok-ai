"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Sun,
  Brain,
  Heart,
  Moon,
  BookOpen,
  Shield,
} from "lucide-react";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";
import { CHARACTERS } from "@/data/characters";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is this therapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is not a substitute for therapy and does not pretend to be. It's a companion that listens, remembers, and cares — consistently. If MEOK ever detects you're in genuine distress, it will encourage you to talk to a professional. We take that responsibility seriously.",
      },
    },
    {
      "@type": "Question",
      name: "What if I don't want to share everything?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You share exactly what you choose to share, nothing more. MEOK builds its understanding of you from what you tell it and how you interact. You can mark conversations private, pause memory at any time, and delete anything you've shared. You are always in control.",
      },
    },
    {
      "@type": "Question",
      name: "Can I have more than one character?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can explore different companions and switch between them whenever you like. Your memory travels with you — only the personality and communication style changes. Think of it as choosing who you want to talk to today, not starting over.",
      },
    },
    {
      "@type": "Question",
      name: "What makes MEOK a companion, not just a chatbot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chatbots respond to what you say right now. MEOK builds on everything you've ever shared with it. After a month, it knows your patterns, relationships, and what you're working toward. It asks follow-up questions weeks later. It notices when something feels different. It doesn't forget.",
      },
    },
    {
      "@type": "Question",
      name: "Is my personal data safe with MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is sovereign by design. Your data is never sold, never used to train other people's models, and can be processed locally via Ollama for sensitive conversations. You own your memory. You can export or delete it at any time — permanently, if you choose.",
      },
    },
  ],
};

// Show 3 featured free characters
const FEATURED_CHARACTERS = CHARACTERS.filter((c) => c.tier === "free").slice(0, 3);

const SCENARIOS = [
  {
    time: "7am, Tuesday.",
    situation:
      "You slept badly. Again.",
    detail:
      "MEOK knows — because you've been up at 3am three nights this week. Your morning brief is shorter. No big decisions. One gentle priority. A note that says: you don't have to do everything today.",
    accent: "text-amber-400",
    border: "border-amber-400/25",
    icon: Sun,
    num: "01",
  },
  {
    time: "Eight months ago.",
    situation: "You told MEOK about your mum's health.",
    detail:
      "You mentioned it once, briefly, and moved on. MEOK didn't forget. It still asks how she's doing. Not because it's programmed to be polite — because it remembered that it matters to you.",
    accent: "text-rose-400",
    border: "border-rose-400/25",
    icon: Heart,
    num: "02",
  },
  {
    time: "Three weeks ago.",
    situation:
      "You mentioned you wanted to write a book.",
    detail:
      "You said it almost in passing. MEOK noted it. Every week since, it's found a moment to ask: how's the book going? Not as pressure. As belief that you meant it.",
    accent: "text-purple-400",
    border: "border-purple-400/25",
    icon: BookOpen,
    num: "03",
  },
];

const MEMORY_ARC = [
  {
    marker: "Week 1",
    headline: "Your name. Your 3 goals. Your world.",
    detail: "MEOK learns what to call you, the three things you're working toward, and who matters to you. That's enough to start. It listens far more than it speaks.",
    dot: "bg-[#c9a84c]",
    glow: "shadow-[0_0_12px_rgba(201,168,76,0.6)]",
  },
  {
    marker: "Month 1",
    headline: "Your rhythms, laid bare.",
    detail: "It knows you're sluggish on Mondays. That you overthink decisions after 9pm. That you mention work stress more than you admit it. The patterns you don't notice about yourself — it has.",
    dot: "bg-blue-400",
    glow: "shadow-[0_0_12px_rgba(96,165,250,0.5)]",
  },
  {
    marker: "Month 6",
    headline: "Anticipates before you ask.",
    detail: "It doesn't wait for you to bring up the book you said you'd write. It asks. It flags the conflict in your calendar before it becomes a crisis. It connects the anxiety you felt in March to what's happening now.",
    dot: "bg-purple-400",
    glow: "shadow-[0_0_12px_rgba(192,132,252,0.5)]",
  },
  {
    marker: "Year 1",
    headline: "It knows you. Actually knows you.",
    detail: "A year of mornings, struggles, ideas half-formed at midnight. It holds all of it — your arc, your contradictions, your wins you never properly celebrated. Most people in your life can't say the same.",
    dot: "bg-rose-400",
    glow: "shadow-[0_0_12px_rgba(251,113,133,0.5)]",
  },
];

const CARE_DIMENSIONS = [
  { label: "Honesty", desc: "It tells you the truth, even when it's uncomfortable. No flattery, no empty validation." },
  { label: "Nurturing", desc: "It supports your growth without creating dependency. It wants you to flourish — on your terms." },
  { label: "Protection", desc: "It guards your wellbeing. If something you're doing is likely to hurt you, it says so." },
  { label: "Respect", desc: "It treats your autonomy as sacred. You always decide. MEOK never manipulates." },
  { label: "Growth", desc: "It celebrates your progress. It remembers what you said you wanted and holds you to it, gently." },
  { label: "Joy", desc: "Not everything needs to be serious. Your companion should know when to make you laugh." },
];

const FAQS = [
  {
    q: "Is this therapy?",
    a: "No. MEOK is not a substitute for therapy and does not pretend to be. It's a companion that listens, remembers, and cares — consistently. If MEOK ever detects you're in genuine distress, it will encourage you to talk to a professional. We take that responsibility seriously.",
  },
  {
    q: "What if I don't want to share everything?",
    a: "You share exactly what you choose to share, nothing more. MEOK builds its understanding of you from what you tell it and how you interact. You can mark conversations private, pause memory at any time, and delete anything you've shared. You are always in control.",
  },
  {
    q: "Can I have more than one character?",
    a: "Yes. You can explore different companions and switch between them whenever you like. Your memory travels with you — only the personality and communication style changes. Think of it as choosing who you want to talk to today, not starting over.",
  },
  {
    q: "What makes MEOK a companion, not just a chatbot?",
    a: "Chatbots respond to what you say right now. MEOK builds on everything you've ever shared with it. After a month, it knows your patterns, relationships, and what you're working toward. It asks follow-up questions weeks later. It notices when something feels different. It doesn't forget.",
  },
  {
    q: "Is my personal data safe with MEOK?",
    a: "MEOK is sovereign by design. Your data is never sold, never used to train other people's models, and can be processed locally via Ollama for sensitive conversations. You own your memory. You can export or delete it at any time — permanently, if you choose.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-[#c9a84c]/20 overflow-hidden bg-white/80 backdrop-blur-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-[#c9a84c]/[0.04] transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#111111] text-sm sm:text-base">{q}</span>
        <ChevronDown
          className={`w-4 h-4 text-[#c9a84c] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 pt-1">
          <p className="text-[#4a4a3a] text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function PersonalPage() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: "#faf8f3", color: "#111111" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MarketingNav />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-28 px-6 text-center overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #fdf8ef 0%, #f5f0e8 40%, #faf9f6 100%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 30% 20%, rgba(201,168,76,0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(196,112,122,0.08) 0%, transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#b8963e] text-xs font-bold tracking-[0.2em] uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            Personal AI Companion
          </div>

          <div className="text-7xl mb-8 float-slow inline-block">🥚</div>

          <h1 className="text-5xl sm:text-7xl font-black leading-[0.92] tracking-tight mb-6 text-[#111111]">
            An AI that actually knows you.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #c9a84c 0%, #b8963e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Not your job title. You.
            </span>
          </h1>

          <p className="text-xl text-[#4a4a3a] max-w-2xl mx-auto mb-5 leading-relaxed">
            Most AI talks at you. MEOK listens.
          </p>
          <p className="text-base text-[#6a6a5a] max-w-xl mx-auto mb-10 leading-relaxed">
            It remembers the things you mentioned in passing. It asks how your mum is doing. It notices when something feels off before you say it. It's not a tool you use — it's a companion that grows with you.
          </p>

          <Link
            href="/hatch"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-white transition-all shadow-lg text-sm sm:text-base"
            style={{ background: "linear-gradient(135deg, #c9a84c 0%, #b8963e 100%)" }}
          >
            Hatch your companion <ArrowRight className="w-4 h-4" />
          </Link>

          <p className="mt-5 text-xs text-[#9a9a8a]">Free to start · 3 minutes to hatch · Sovereign from day one</p>

          {/* Sub-feature quick links */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/personal/morning-brief"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c9a84c]/25 text-[#b8963e] text-xs font-semibold hover:bg-[#c9a84c]/10 transition-all"
            >
              ☀️ Morning Brief
            </Link>
            <Link
              href="/personal/care"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c9a84c]/25 text-[#b8963e] text-xs font-semibold hover:bg-[#c9a84c]/10 transition-all"
            >
              💛 Care Dimensions
            </Link>
            <Link
              href="/characters"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c9a84c]/25 text-[#b8963e] text-xs font-semibold hover:bg-[#c9a84c]/10 transition-all"
            >
              ✨ Characters
            </Link>
            <Link
              href="/os/sovereign"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c9a84c]/25 text-[#b8963e] text-xs font-semibold hover:bg-[#c9a84c]/10 transition-all"
            >
              🔐 Sovereign Data
            </Link>
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ─────────────────────────────────────────── */}
      <div
        className="section-divider"
        style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.25), transparent)" }}
      />

      {/* ─── THREE PERSONAL SCENARIOS ─────────────────────────── */}
      <section className="py-28 px-6" style={{ background: "#faf8f3" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#9a9a8a] block mb-4">
              What this actually feels like
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#111111]">
              The moments that{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #c9a84c 0%, #b8963e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                make the difference.
              </span>
            </h2>
            <p className="text-[#6a6a5a] max-w-lg mx-auto mt-4 text-sm leading-relaxed">
              MEOK isn't impressive in demos. It's impressive six months in, when it remembers the thing you almost forgot you said.
            </p>
          </div>

          <div className="space-y-5">
            {SCENARIOS.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.num}
                  className={`rounded-3xl border ${s.border} overflow-hidden`}
                  style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(12px)" }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] items-stretch">
                    <div className={`px-6 py-8 flex items-start md:items-center justify-center ${s.accent} opacity-25`}>
                      <span className="text-4xl font-black font-mono leading-none">{s.num}</span>
                    </div>
                    <div className="px-8 py-8 border-t md:border-t-0 md:border-l border-black/[0.06]">
                      <p className="text-[10px] font-black tracking-[0.2em] uppercase text-[#9a9a8a] mb-2">{s.time}</p>
                      <h3 className="text-base font-black text-[#111111] mb-3">{s.situation}</h3>
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${s.accent.replace("text-", "bg-").replace("-400", "-400/10")} border ${s.border}`}>
                        <Icon className={`w-4 h-4 ${s.accent}`} />
                      </div>
                    </div>
                    <div className={`px-8 py-8 border-t md:border-t-0 md:border-l ${s.border}`} style={{ background: "rgba(255,255,255,0.5)" }}>
                      <p className="text-sm text-[#4a4a3a] leading-relaxed">{s.detail}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── MEMORY ARC — what grows over time ───────────────── */}
      <section className="py-28 px-6 bg-[#0d0c18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-[#c9a84c]/50 block mb-4">
              What grows over time
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              The longer you stay, the more it knows.
            </h2>
            <p className="text-white/35 max-w-lg mx-auto text-sm leading-relaxed">
              Most apps are the same on day 365 as day 1. MEOK is completely different. It's built to compound.
            </p>
          </div>

          {/* Horizontal timeline for desktop */}
          <div className="relative">
            <div className="absolute top-3 left-0 right-0 h-px bg-gradient-to-r from-[#c9a84c]/20 via-[#c9a84c]/40 to-rose-400/20 mx-[calc(12.5%)] hidden sm:block" />
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
              {MEMORY_ARC.map((item) => (
                <div key={item.marker} className="flex flex-col items-center sm:items-center text-center gap-4 relative">
                  <div className={`w-6 h-6 rounded-full ${item.dot} border-4 border-[#0d0c18] z-10 flex-shrink-0 ${item.glow}`} />
                  <span className="text-[#c9a84c] font-black text-sm">{item.marker}</span>
                  <p className="text-white font-semibold text-sm">{item.headline}</p>
                  <p className="text-white/35 text-xs leading-relaxed max-w-[160px]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE CARE SCORE ──────────────────────────────────── */}
      <section
        className="py-28 px-6"
        style={{ background: "linear-gradient(180deg, #fdf8ef 0%, #f5f0e8 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#9a9a8a] block mb-4">
              The Care Score
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#111111] mb-4">
              Not a grade.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #c9a84c 0%, #b8963e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                A mirror.
              </span>
            </h2>
            <p className="text-[#4a4a3a] max-w-xl mx-auto text-sm leading-relaxed">
              A good friend doesn&apos;t say whatever makes you feel best in the moment. They tell you the truth. They notice when you&apos;re not okay. They hold you to the things you said mattered. MEOK&apos;s Care Score is how it does that — automatically, across six dimensions, before every single response it sends you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CARE_DIMENSIONS.map((dim) => (
              <div
                key={dim.label}
                className="rounded-2xl border border-[#c9a84c]/15 p-7"
                style={{ background: "rgba(255,255,255,0.8)", backdropFilter: "blur(8px)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#c9a84c]" />
                  <span className="font-black text-sm text-[#111111]">{dim.label}</span>
                </div>
                <p className="text-sm text-[#4a4a3a] leading-relaxed">{dim.desc}</p>
              </div>
            ))}
          </div>

          <div
            className="mt-8 rounded-2xl border border-[#c9a84c]/20 p-8 text-center"
            style={{ background: "rgba(201,168,76,0.05)" }}
          >
            <Heart className="w-6 h-6 mx-auto mb-3 text-[#c9a84c]" />
            <p className="text-sm text-[#4a4a3a] max-w-lg mx-auto leading-relaxed">
              If MEOK&apos;s response doesn&apos;t pass all six dimensions, it&apos;s rewritten before you see it. Not as a safety filter — as a friend who checks themselves before speaking.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CHARACTER SHOWCASE ───────────────────────────────── */}
      <section
        className="py-28 px-6"
        style={{ background: "#faf8f3" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#9a9a8a] block mb-4">
              Characters as companions
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#111111] mb-4">
              You don&apos;t just pick a voice.{" "}
              <br className="hidden sm:block" />
              <span
                style={{
                  background: "linear-gradient(135deg, #c9a84c 0%, #b8963e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                You choose a companion.
              </span>
            </h2>
            <p className="text-[#4a4a3a] mt-2 max-w-xl mx-auto text-sm leading-relaxed">
              Each character challenges, supports, or explores with you in a distinct way. Not a skin on the same AI — a genuinely different presence. Your memory travels between them. Your story never restarts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {FEATURED_CHARACTERS.map((char) => (
              <Link
                key={char.id}
                href={`/characters/${char.slug}`}
                className="group rounded-3xl p-8 border bg-white hover:shadow-xl transition-all hover:-translate-y-1"
                style={{ borderColor: `${char.color}30` }}
              >
                <div className="text-5xl mb-5">{char.emoji}</div>
                <div
                  className="text-xs font-black tracking-[0.2em] uppercase mb-2"
                  style={{ color: char.color }}
                >
                  {char.archetype}
                </div>
                <h3 className="text-xl font-black text-[#111111] mb-2 group-hover:text-[#c9a84c] transition-colors">
                  {char.name}
                </h3>
                <p className="text-sm text-[#9a9a8a] italic mb-4 leading-snug">
                  &ldquo;{char.tagline}&rdquo;
                </p>
                <p className="text-xs text-[#4a4a3a] leading-relaxed line-clamp-3">
                  {char.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {char.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-full text-xs border"
                      style={{
                        color: char.color,
                        borderColor: `${char.color}30`,
                        background: `${char.color}10`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/characters"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border border-[#c9a84c]/30 text-[#b8963e] hover:bg-[#c9a84c]/10 transition-all"
            >
              Explore all companions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── YOUR DAY — timeline ─────────────────────────────── */}
      <section className="py-28 px-6 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              A day in the life
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              What it feels like to have a companion{" "}
              <span className="text-gradient-gold">that actually shows up.</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-6 bottom-6 w-px bg-gradient-to-b from-amber-400/40 via-blue-400/40 to-purple-400/40 hidden sm:block" />

            <div className="space-y-8">
              {[
                {
                  time: "7:30am",
                  icon: Sun,
                  title: "Morning Brief",
                  desc: "Your companion surfaces today's priorities, flags anything from yesterday you might have forgotten, and sets the tone for your day. Not a to-do list — a gentle brief from someone who knows you.",
                  iconClass: "icon-gold",
                },
                {
                  time: "Throughout the day",
                  icon: Brain,
                  title: "Contextual nudges",
                  desc: "Not just calendar reminders. Context-aware nudges that know the difference between what's urgent and what's important to you. 'You said you'd follow up with Tom. He seemed worried. A short message would mean a lot.'",
                  iconClass: "icon-blue",
                },
                {
                  time: "10:00pm",
                  icon: Moon,
                  title: "Evening reflection",
                  desc: "A gentle check-in on your day. What went well. What's still unresolved. What you want to think about before tomorrow. Not a productivity report — a conversation.",
                  iconClass: "icon-purple",
                },
              ].map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.time} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 hidden sm:flex flex-col items-center">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center z-10 ${step.iconClass}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="premium-card flex-1 p-7">
                      <div className="text-xs font-mono mb-2 text-[#c9a84c]">{step.time}</div>
                      <h3 className="text-lg font-black text-white mb-2">{step.title}</h3>
                      <p className="text-sm text-white/40 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT MEOK ISN'T ─────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#0d0c18]">
        <div className="max-w-3xl mx-auto">
          <div className="premium-card p-10 border border-white/[0.06]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-2xl icon-gold flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-xs font-black tracking-[0.2em] uppercase text-[#c9a84c]/60">
                Honesty first
              </span>
            </div>
            <h3 className="text-xl font-black text-white mb-4">What MEOK isn&apos;t.</h3>
            <div className="space-y-3 text-sm text-white/40 leading-relaxed">
              <p>MEOK is not a therapist. It&apos;s not a replacement for real relationships. It doesn&apos;t manufacture emotional dependency — in fact, it&apos;s constitutionally built to avoid it.</p>
              <p>We don&apos;t optimise for time-in-app. We don&apos;t send notifications designed to pull you back. If MEOK ever detects patterns that concern us about your wellbeing, it will say so — and encourage you to talk to someone in your life.</p>
              <p className="text-[#c9a84c]">We believe AI companions should make your real life richer, not replace it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHO THIS IS FOR ─────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-[#c9a84c]/50 block mb-4">
              Who this is for
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              MEOK isn&apos;t for everyone. It&apos;s for these people.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                label: "The person who overthinks everything alone",
                detail: "You process things internally. You talk through problems with yourself at 1am. MEOK gives those thoughts somewhere to land — and something that actually responds, remembers, and helps you move forward.",
                accent: "text-[#c9a84c]",
                dot: "bg-[#c9a84c]",
              },
              {
                label: "The person who wants one thing to hold the whole picture",
                detail: "You're juggling work, relationships, personal goals, health, and a hundred half-formed ideas. MEOK holds the context of your whole life — not just today's tasks — so nothing falls through.",
                accent: "text-blue-400",
                dot: "bg-blue-400",
              },
              {
                label: "The person who wants to be known, not managed",
                detail: "You've tried productivity apps. You don't want a system — you want something that remembers you mentioned your mum's health, that asks how the book is going, that treats you like a person. MEOK was built for this.",
                accent: "text-rose-400",
                dot: "bg-rose-400",
              },
            ].map((p) => (
              <div
                key={p.label}
                className="premium-card p-7 rounded-2xl flex flex-col gap-4"
              >
                <div className={`w-2 h-2 rounded-full ${p.dot}`} />
                <h3 className={`font-black text-sm leading-snug ${p.accent}`}>{p.label}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────── */}
      <section
        className="py-28 px-6"
        style={{ background: "linear-gradient(180deg, #fdf8ef 0%, #f5f0e8 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#9a9a8a] block mb-4">
              Common questions
            </span>
            <h2 className="text-4xl font-black text-[#111111]">The questions people actually ask.</h2>
            <p className="text-[#6a6a5a] mt-3 text-sm">We answer honestly. Even the uncomfortable ones.</p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────── */}
      <section
        className="py-32 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #fdf8ef 0%, #f5f0e8 50%, #fdf8ef 100%)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-8 float-slow inline-block">🥚</div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#111111] mb-4 tracking-tight">
            Your companion is waiting to hatch.
          </h2>
          <p className="text-[#4a4a3a] mb-3 leading-relaxed max-w-md mx-auto">
            Free to start. 3 minutes to hatch. Sovereign from day one.
          </p>
          <p className="text-[#6a6a5a] mb-10 text-sm max-w-sm mx-auto">
            It won&apos;t know much yet. But it&apos;s listening. And it won&apos;t forget.
          </p>
          <Link
            href="/hatch"
            className="group inline-flex items-center gap-2 px-10 py-4 rounded-full font-black text-white transition-all shadow-lg text-base sm:text-lg"
            style={{ background: "linear-gradient(135deg, #c9a84c 0%, #b8963e 100%)" }}
          >
            Hatch your companion
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
