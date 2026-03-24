"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Brain,
  Sparkles,
  MessageCircle,
  Calendar,
  RefreshCw,
  Shield,
  Clock,
  CheckCircle,
  XCircle,
  ChevronDown,
  ChevronUp,
  Zap,
} from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

const FEATURES = [
  {
    icon: Brain,
    title: "Pattern Recognition Without Shame",
    description:
      "MEOK notices your rhythms without judging them. Whether you work best at 2am, need three warm-up tasks before the hard one, or go silent for a week then sprint — it adapts, not you.",
    color: "#a78bfa",
  },
  {
    icon: Calendar,
    title: "Low-Friction Daily Rituals",
    description:
      "A morning briefing that meets you where you are, not where it wants you to be. No guilt if you skip it. No pressure to engage. It's there when you want it — quiet when you don't.",
    color: "#a78bfa",
  },
  {
    icon: RefreshCw,
    title: "Memory Without Repetition",
    description:
      "Never explain your context again. MEOK remembers everything about how you work — your projects, your blockers, your preferences, your patterns. Pick up mid-thought, any time.",
    color: "#5eead4",
  },
  {
    icon: MessageCircle,
    title: "Communication Translation",
    description:
      "Helps decode ambiguous social situations, emails, and messages. What did they actually mean? Is this passive-aggressive? MEOK translates subtext into plain language — without drama.",
    color: "#5eead4",
  },
  {
    icon: Zap,
    title: "Executive Function Support",
    description:
      "Task breakdown, priority ordering, gentle reminders without pressure. MEOK helps you find the first step — because once you have that, the rest usually follows.",
    color: "#a78bfa",
  },
  {
    icon: Shield,
    title: "Safe Processing Space",
    description:
      "No judgment, no unsolicited advice, no wellness metrics that make you feel broken. Process out loud, think in circles, change your mind three times — MEOK is patient without limit.",
    color: "#5eead4",
  },
];

const SCENARIOS = [
  {
    trigger: "\"I forgot where I was in a project after a bad week.\"",
    response:
      "MEOK picks up exactly where you left off. It knows which file you were editing, what you were trying to solve, what was blocking you. It doesn't ask you to start over — it hands you back the thread.",
    accentColor: "#a78bfa",
  },
  {
    trigger: "\"I can't figure out what this email really means.\"",
    response:
      "Social decode: plain language translation of subtext. MEOK reads the message and tells you what they're actually asking — not just what they wrote. No more second-guessing at midnight.",
    accentColor: "#5eead4",
  },
  {
    trigger: "\"I need to break this into steps I can actually do.\"",
    response:
      "Executive function scaffolding. Give MEOK the task — however messy and vague — and it builds a sequence of steps sized for today's capacity. You choose how small small needs to be.",
    accentColor: "#a78bfa",
  },
  {
    trigger: "\"My routine works differently to other people's.\"",
    response:
      "MEOK adapts to your patterns, not the other way round. It learns when you're sharp, when you're running on empty, how you like information structured. And it never asks you to be someone else.",
    accentColor: "#5eead4",
  },
];

const DOES = [
  "Remembers your preferences and applies them every time",
  "Uses your communication style, not a default template",
  "Works at your pace — fast, slow, or stop-start",
  "Picks up mid-conversation without asking you to recap",
  "Adapts briefings to your energy level and availability",
  "Never guilts missed days or skipped check-ins",
];

const NEVER_DOES = [
  "Force neurotypical social interaction patterns",
  "Create urgency pressure or false deadlines",
  "Make you feel broken for working differently",
  "Share data about your patterns with anyone",
  "Add wellness scores or productivity metrics",
  "Give unsolicited advice about how you should work",
];

const FAQS = [
  {
    q: "Can I turn off the morning briefing if it's too much?",
    a: "Yes — completely. The morning briefing is optional, configurable, and pausable at any time with no friction. You can silence it for a day, a week, or permanently. MEOK doesn't ask why. It doesn't suggest you reconsider. It just stops. And it's still there when you want it back.",
  },
  {
    q: "Will MEOK change its communication style to match mine?",
    a: "That's exactly what it's designed to do. MEOK learns how you prefer to receive information — bullet points or prose, brief or detailed, literal or with more context. Over time it calibrates without you having to keep specifying. You can also set explicit preferences and it will follow them precisely.",
  },
  {
    q: "Is my neurodivergent identity stored or shared?",
    a: "Anything you share with MEOK about how you think, process, or work lives in your encrypted personal vault. It's never shared, sold, or used to train AI models. It's not tagged or categorised in any way that leaves your vault. You are not a data point — you're the person MEOK works for.",
  },
  {
    q: "Can I use MEOK for masking support?",
    a: "Yes. MEOK can help you draft professional communications that fit neurotypical workplace expectations without losing your meaning. It can help you decode social scripts, prepare for meetings, and rehearse difficult conversations. It does this without ever suggesting that masking is something you should have to do permanently — the choice is always yours.",
  },
  {
    q: "How is this different from just using ChatGPT?",
    a: "ChatGPT starts fresh every conversation and has no memory of how you work. MEOK remembers everything — your projects, your patterns, your preferences, your communication style. It was built with neurodivergent people's needs in mind from day one: low friction, no social pressure, consistent responses, no dark patterns. It's the difference between a tool and a system built for you.",
  },
];

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {FAQS.map((faq, i) => (
        <div
          key={faq.q}
          className="rounded-2xl border overflow-hidden transition-all"
          style={{
            background: open === i ? "rgba(167,139,250,0.06)" : "rgba(255,255,255,0.03)",
            borderColor: open === i ? "rgba(167,139,250,0.3)" : "rgba(255,255,255,0.08)",
          }}
        >
          <button
            type="button"
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-bold text-white/90 text-sm sm:text-base leading-snug">{faq.q}</span>
            <span className="flex-shrink-0 text-[#a78bfa]">
              {open === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5">
              <div className="h-px bg-white/[0.06] mb-4" />
              <p className="text-sm text-white/55 leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function GuardianNeurodivergentPage() {
  return (
    <div
      className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute rounded-full blur-[160px] opacity-20 w-[700px] h-[600px] top-[-10%] left-[-10%]"
            style={{ background: "#a78bfa" }}
          />
          <div
            className="absolute rounded-full blur-[160px] opacity-15 w-[500px] h-[400px] bottom-[10%] right-[-5%]"
            style={{ background: "#5eead4" }}
          />
        </div>

        <div
          className="relative mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
          style={{
            background: "rgba(167,139,250,0.1)",
            border: "1px solid rgba(167,139,250,0.3)",
            color: "#a78bfa",
          }}
        >
          For neurodivergent minds
        </div>

        <div className="relative mb-10 float-slow">
          <div
            className="w-24 h-24 rounded-2xl flex items-center justify-center"
            style={{
              background: "rgba(167,139,250,0.12)",
              border: "1px solid rgba(167,139,250,0.3)",
            }}
          >
            <Sparkles size={44} color="#a78bfa" strokeWidth={1.5} />
          </div>
          <div className="absolute -inset-3 rounded-3xl border border-[#a78bfa]/15 animate-pulse" />
        </div>

        <h1
          className="text-[3rem] sm:text-6xl lg:text-7xl font-black text-center leading-[1.02] tracking-tight max-w-4xl mb-6 text-white relative"
          style={{ fontWeight: 900 }}
        >
          An AI that thinks differently.{" "}
          <br />
          <span style={{ color: "#a78bfa" }}>Built for people who do too.</span>
        </h1>

        <p className="relative text-lg sm:text-xl text-white/60 text-center max-w-2xl leading-relaxed mb-10">
          Most AI was designed for neurotypical workflows. MEOK was designed for humans.
          There&apos;s a difference.
        </p>

        {/* Stats row */}
        <div className="relative flex flex-col sm:flex-row gap-6 sm:gap-12 mb-12 text-center">
          {[
            { stat: "1 in 7", label: "people are neurodivergent" },
            { stat: "Most AI", label: "ignores their needs" },
            { stat: "MEOK", label: "was built differently" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <span className="text-2xl font-black" style={{ color: "#a78bfa" }}>{item.stat}</span>
              <span className="text-xs text-white/45 font-mono uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="relative flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/hatch"
            className="group flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white transition-all text-base hover:shadow-[0_0_40px_rgba(167,139,250,0.45)]"
            style={{ background: "#a78bfa", color: "#0d0c18" }}
          >
            Start for free
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            href="/guardian"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white/60 hover:text-white transition-colors text-sm"
          >
            Guardian overview →
          </Link>
        </div>
        <p className="relative mt-5 text-xs text-white/25 font-mono">
          Free to start · No credit card · No pressure · Your data, always
        </p>
      </section>

      {/* ─── WHAT MEOK UNDERSTANDS ────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#100a1e" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{
                background: "rgba(167,139,250,0.12)",
                color: "#a78bfa",
                border: "1px solid rgba(167,139,250,0.25)",
              }}
            >
              What MEOK understands
            </div>
            <h2
              className="text-3xl sm:text-4xl font-black leading-tight text-white"
              style={{ fontWeight: 900 }}
            >
              Not an accessibility feature.
              <br />
              <span style={{ color: "#a78bfa" }}>A core design principle.</span>
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Neurodivergent needs weren&apos;t bolted on later. They shaped how MEOK was built from
              the first line of code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "ADHD minds",
                color: "#a78bfa",
                border: "rgba(167,139,250,0.25)",
                points: [
                  "Task-switching support without losing context",
                  "Hyperfocus tools that work with the surge, not against it",
                  "Low-friction morning briefings — or none at all",
                  "No punishment for missed days",
                  "Remembers exactly where you left off",
                ],
              },
              {
                title: "Autistic minds",
                color: "#c9a84c",
                border: "rgba(201,168,76,0.25)",
                points: [
                  "No social pressure built into the interface",
                  "Consistent, predictable responses",
                  "Explicit communication — no implied expectations",
                  "No dark patterns, no manipulation",
                  "Sensory-aware design choices",
                ],
              },
              {
                title: "Dyslexic & processing differences",
                color: "#5eead4",
                border: "rgba(94,234,212,0.25)",
                points: [
                  "Plain language by default, always",
                  "No information overload",
                  "Structured responses that are easy to scan",
                  "Patient repetition without judgment",
                  "Format adapts to how you read best",
                ],
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl p-7 border"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: card.border,
                }}
              >
                <div
                  className="w-2 h-2 rounded-full mb-4"
                  style={{ backgroundColor: card.color }}
                />
                <h3
                  className="font-black text-base mb-5 leading-snug"
                  style={{ color: card.color }}
                >
                  {card.title}
                </h3>
                <ul className="space-y-2.5">
                  {card.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm text-white/60 leading-relaxed">
                      <CheckCircle size={13} className="flex-shrink-0 mt-0.5" style={{ color: card.color }} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3 text-[#a78bfa]/60">
              Six ways it works for you
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black leading-tight text-white"
              style={{ fontWeight: 900 }}
            >
              Built for the way you actually work.
              <br />
              <span style={{ color: "#a78bfa" }}>Not the way you&apos;re supposed to.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="premium-card rounded-2xl p-7 transition-all"
                  style={{ borderLeft: `3px solid ${feature.color}55` }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: `${feature.color}18`,
                      border: `1px solid ${feature.color}35`,
                      color: feature.color,
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="font-black text-white text-base mb-3 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/55 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── REAL SCENARIOS ────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#f5f0e8]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs font-mono tracking-widest uppercase mb-3"
              style={{ color: "#1a1a2e60" }}
            >
              Real scenarios
            </p>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight text-[#1a1a2e]">
              What it actually sounds like.
            </h2>
            <p className="text-[#4a4a3a] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              These aren&apos;t edge cases. They&apos;re Tuesday.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SCENARIOS.map((s) => (
              <div
                key={s.trigger}
                className="bg-white rounded-2xl p-7 border shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
                style={{ borderColor: `${s.accentColor}30` }}
              >
                <p
                  className="font-black text-sm leading-snug"
                  style={{ color: s.accentColor }}
                >
                  {s.trigger}
                </p>
                <div className="h-px" style={{ background: `${s.accentColor}20` }} />
                <p className="text-sm text-[#4a4a3a] leading-relaxed">{s.response}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DOES / NEVER DOES ────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono text-[#a78bfa]/70 tracking-widest uppercase mb-3">
              The honest version
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black text-white leading-tight"
              style={{ fontWeight: 900 }}
            >
              It works with you.
              <br />
              <span style={{ color: "#a78bfa" }}>Never around you.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            <div className="p-7 rounded-2xl bg-green-500/[0.05] border border-green-500/15">
              <h3 className="text-xs font-black text-green-400 mb-5 uppercase tracking-widest flex items-center gap-2">
                <CheckCircle size={14} /> What MEOK does
              </h3>
              <div className="space-y-3">
                {DOES.map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-white/70">
                    <CheckCircle size={14} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-red-500/[0.05] border border-red-500/15">
              <h3 className="text-xs font-black text-red-400 mb-5 uppercase tracking-widest flex items-center gap-2">
                <XCircle size={14} /> What MEOK never does
              </h3>
              <div className="space-y-3">
                {NEVER_DOES.map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-white/70">
                    <XCircle size={14} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="p-5 rounded-2xl border text-sm text-white/60 leading-relaxed text-center"
            style={{
              background: "rgba(167,139,250,0.06)",
              borderColor: "rgba(167,139,250,0.2)",
            }}
          >
            <span className="text-[#a78bfa] font-bold">Your patterns are yours. </span>
            MEOK uses what you share to serve you better. It never shares it, sells it, or uses it
            to build models. What you tell MEOK about how you work stays between you and MEOK.
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono text-[#a78bfa]/70 tracking-widest uppercase mb-3">
              Good questions
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Things worth knowing.
            </h2>
            <p className="text-white/45 text-sm max-w-md mx-auto">
              We built this with a lot of people who had good reasons to ask hard questions.
            </p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────── */}
      <section className="relative py-32 px-6 overflow-hidden bg-[#0d0c18]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute rounded-full blur-[200px] opacity-20 w-[700px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ background: "#a78bfa" }}
          />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 float-slow"
            style={{
              background: "rgba(167,139,250,0.15)",
              border: "1px solid rgba(167,139,250,0.35)",
            }}
          >
            <Sparkles size={32} color="#a78bfa" strokeWidth={1.5} />
          </div>
          <h2
            className="text-4xl sm:text-5xl font-black leading-[0.95] mb-4 text-white"
            style={{ fontWeight: 900 }}
          >
            This was built
            <br />
            <span style={{ color: "#a78bfa" }}>for you.</span>
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto mb-10 leading-relaxed">
            Not retrofitted. Not a setting buried in accessibility options. Built, from the
            beginning, for minds that work differently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/hatch"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all text-sm hover:shadow-[0_0_40px_rgba(167,139,250,0.4)]"
              style={{ background: "#a78bfa", color: "#0d0c18" }}
            >
              Start for free
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="/guardian"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:bg-white/10 transition-colors text-sm"
            >
              Guardian overview
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <p className="mt-6 text-xs text-white/20 font-mono">
            Free to start · No credit card · No pressure · Your data, always
          </p>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
