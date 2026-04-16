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
import { Surface, IconOrb, FeatureCard, GlowText } from "@/components/design-system";

const FEATURES = [
  {
    icon: Brain,
    title: "Pattern Recognition Without Shame",
    description:
      "MEOK notices your rhythms without judging them. Whether you work best at 2am, need three warm-up tasks before the hard one, or go silent for a week then sprint — it adapts, not you.",
  },
  {
    icon: Calendar,
    title: "Low-Friction Daily Rituals",
    description:
      "A morning briefing that meets you where you are, not where it wants you to be. No guilt if you skip it. No pressure to engage. It's there when you want it — quiet when you don't.",
  },
  {
    icon: RefreshCw,
    title: "Memory Without Repetition",
    description:
      "Never explain your context again. MEOK remembers everything about how you work — your projects, your blockers, your preferences, your patterns. Pick up mid-thought, any time.",
  },
  {
    icon: MessageCircle,
    title: "Communication Translation",
    description:
      "Helps decode ambiguous social situations, emails, and messages. What did they actually mean? Is this passive-aggressive? MEOK translates subtext into plain language — without drama.",
  },
  {
    icon: Zap,
    title: "Executive Function Support",
    description:
      "Task breakdown, priority ordering, gentle reminders without pressure. MEOK helps you find the first step — because once you have that, the rest usually follows.",
  },
  {
    icon: Shield,
    title: "Safe Processing Space",
    description:
      "No judgment, no unsolicited advice, no wellness metrics that make you feel broken. Process out loud, think in circles, change your mind three times — MEOK is patient without limit.",
  },
];

const SCENARIOS = [
  {
    trigger: "\"I forgot where I was in a project after a bad week.\"",
    response:
      "MEOK picks up exactly where you left off. It knows which file you were editing, what you were trying to solve, what was blocking you. It doesn't ask you to start over — it hands you back the thread.",
  },
  {
    trigger: "\"I can't figure out what this email really means.\"",
    response:
      "Social decode: plain language translation of subtext. MEOK reads the message and tells you what they're actually asking — not just what they wrote. No more second-guessing at midnight.",
  },
  {
    trigger: "\"I need to break this into steps I can actually do.\"",
    response:
      "Executive function scaffolding. Give MEOK the task — however messy and vague — and it builds a sequence of steps sized for today's capacity. You choose how small small needs to be.",
  },
  {
    trigger: "\"My routine works differently to other people's.\"",
    response:
      "MEOK adapts to your patterns, not the other way round. It learns when you're sharp, when you're running on empty, how you like information structured. And it never asks you to be someone else.",
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
      {FAQS.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div
            key={faq.q}
            className={`rounded-2xl border overflow-hidden transition-all ${
              isOpen
                ? "bg-[#2d9b8a]/[0.06] border-[#2d9b8a]/30"
                : "bg-white/[0.03] border-white/[0.08]"
            }`}
          >
            <button
              type="button"
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-bold text-white/90 text-sm sm:text-base leading-snug">{faq.q}</span>
              <span className="flex-shrink-0 text-[#2d9b8a]">
                {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-5">
                <div className="h-px bg-white/[0.06] mb-4" />
                <p className="text-sm text-white/55 leading-relaxed">{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function GuardianNeurodivergentPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0d0c18] text-white">

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-24">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="blob-purple absolute top-[-10%] left-[-10%] h-[600px] w-[700px] opacity-20" />
          <div className="blob-teal absolute bottom-[10%] right-[-5%] h-[400px] w-[500px] opacity-15" />
        </div>

        <div className="relative mb-8 inline-flex items-center gap-2 rounded-full border border-[#2d9b8a]/30 bg-[#2d9b8a]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#2d9b8a]">
          For neurodivergent minds
        </div>

        <div className="relative mb-10 float-slow">
          <IconOrb icon={Sparkles} variant="teal" size="lg" pulse />
        </div>

        <h1 className="relative mb-6 max-w-4xl text-center text-[3rem] font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
          An AI that thinks differently.{" "}
          <br />
          <GlowText variant="teal" as="span">Built for people who do too.</GlowText>
        </h1>

        <p className="relative mb-10 max-w-2xl text-center text-lg leading-relaxed text-white/60 sm:text-xl">
          Most AI was designed for neurotypical workflows. MEOK was designed for humans.
          There&apos;s a difference.
        </p>

        {/* Stats row */}
        <div className="relative mb-12 flex flex-col gap-6 text-center sm:flex-row sm:gap-12">
          {[
            { stat: "1 in 7", label: "people are neurodivergent" },
            { stat: "Most AI", label: "ignores their needs" },
            { stat: "MEOK", label: "was built differently" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <span className="text-2xl font-black text-[#2d9b8a]">{item.stat}</span>
              <span className="text-xs font-mono uppercase tracking-widest text-white/45">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="relative flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/hatch"
            className="group flex items-center gap-2 rounded-full bg-[#c9a84c] px-8 py-4 text-base font-bold text-[#0d0c18] transition-opacity hover:opacity-90"
          >
            Start for free
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/guardian"
            className="group flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white/60 transition-colors hover:text-white"
          >
            Guardian overview →
          </Link>
        </div>
        <p className="relative mt-5 text-xs font-mono text-white/25">
          Free to start · No credit card · No pressure · Your data, always
        </p>
      </section>

      {/* ─── WHAT MEOK UNDERSTANDS ────────────────────────── */}
      <section className="bg-[#13121f] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#2d9b8a]/25 bg-[#2d9b8a]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#2d9b8a]">
              What MEOK understands
            </div>
            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
              Not an accessibility feature.
              <br />
              <GlowText variant="teal" as="span">A core design principle.</GlowText>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/50">
              Neurodivergent needs weren&apos;t bolted on later. They shaped how MEOK was built from
              the first line of code.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                title: "ADHD minds",
                color: "#2d9b8a",
                border: "rgba(45,155,138,0.25)",
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
                color: "#2d9b8a",
                border: "rgba(45,155,138,0.25)",
                points: [
                  "Plain language by default, always",
                  "No information overload",
                  "Structured responses that are easy to scan",
                  "Patient repetition without judgment",
                  "Format adapts to how you read best",
                ],
              },
            ].map((card) => (
              <Surface
                key={card.title}
                variant="elevated"
                glow="teal"
                className="p-7"
                style={{ borderColor: card.border }}
              >
                <div
                  className="mb-4 h-2 w-2 rounded-full"
                  style={{ backgroundColor: card.color }}
                />
                <h3
                  className="mb-5 text-base font-black leading-snug"
                  style={{ color: card.color }}
                >
                  {card.title}
                </h3>
                <ul className="space-y-2.5">
                  {card.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-white/60">
                      <CheckCircle size={13} className="mt-0.5 flex-shrink-0" style={{ color: card.color }} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </Surface>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─────────────────────────────────────── */}
      <section className="bg-[#0d0c18] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-mono uppercase tracking-widest text-[#2d9b8a]/60">
              Six ways it works for you
            </p>
            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
              Built for the way you actually work.
              <br />
              <GlowText variant="teal" as="span">Not the way you&apos;re supposed to.</GlowText>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {FEATURES.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                iconVariant="teal"
                glow="teal"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── REAL SCENARIOS ────────────────────────────────── */}
      <section className="bg-[#0d0c18] px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-mono uppercase tracking-widest text-[#2d9b8a]/60">
              Real scenarios
            </p>
            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
              What it actually sounds like.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/50">
              These aren&apos;t edge cases. They&apos;re Tuesday.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {SCENARIOS.map((s) => (
              <Surface
                key={s.trigger}
                variant="glass"
                glow="teal"
                className="flex flex-col gap-4 p-7"
              >
                <p className="text-sm font-black leading-snug text-[#2d9b8a]">
                  {s.trigger}
                </p>
                <div className="h-px bg-[#2d9b8a]/20" />
                <p className="text-sm leading-relaxed text-white/60">{s.response}</p>
              </Surface>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DOES / NEVER DOES ────────────────────────────── */}
      <section className="bg-[#13121f] px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-mono uppercase tracking-widest text-[#2d9b8a]/70">
              The honest version
            </p>
            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
              It works with you.
              <br />
              <GlowText variant="teal" as="span">Never around you.</GlowText>
            </h2>
          </div>

          <div className="mb-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <Surface variant="elevated" className="border-green-500/15 bg-green-500/[0.05] p-7">
              <h3 className="mb-5 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-green-400">
                <CheckCircle size={14} /> What MEOK does
              </h3>
              <div className="space-y-3">
                {DOES.map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-white/70">
                    <CheckCircle size={14} className="mt-0.5 flex-shrink-0 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Surface>

            <Surface variant="elevated" className="border-red-500/15 bg-red-500/[0.05] p-7">
              <h3 className="mb-5 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-red-400">
                <XCircle size={14} /> What MEOK never does
              </h3>
              <div className="space-y-3">
                {NEVER_DOES.map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-white/70">
                    <XCircle size={14} className="mt-0.5 flex-shrink-0 text-red-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Surface>
          </div>

          <Surface
            variant="glass"
            glow="teal"
            className="p-5 text-center text-sm leading-relaxed text-white/60"
          >
            <span className="font-bold text-[#2d9b8a]">Your patterns are yours. </span>
            MEOK uses what you share to serve you better. It never shares it, sells it, or uses it
            to build models. What you tell MEOK about how you work stays between you and MEOK.
          </Surface>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────── */}
      <section className="bg-[#0d0c18] px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-mono uppercase tracking-widest text-[#2d9b8a]/70">
              Good questions
            </p>
            <h2 className="mb-3 text-3xl font-black text-white sm:text-4xl">
              Things worth knowing.
            </h2>
            <p className="mx-auto max-w-md text-sm text-white/45">
              We built this with a lot of people who had good reasons to ask hard questions.
            </p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0d0c18] px-6 py-32">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="blob-purple absolute top-1/2 left-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 opacity-20" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-6 flex justify-center">
            <IconOrb icon={Sparkles} variant="teal" size="lg" pulse />
          </div>
          <h2 className="mb-4 text-4xl font-black leading-[0.95] text-white sm:text-5xl">
            This was built
            <br />
            <GlowText variant="teal" as="span">for you.</GlowText>
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/40">
            Not retrofitted. Not a setting buried in accessibility options. Built, from the
            beginning, for minds that work differently.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/hatch"
              className="group inline-flex items-center gap-2 rounded-full bg-[#c9a84c] px-8 py-4 text-sm font-bold text-[#0d0c18] transition-opacity hover:opacity-90"
            >
              Start for free
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/guardian"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Guardian overview
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
          <p className="mt-6 text-xs font-mono text-white/20">
            Free to start · No credit card · No pressure · Your data, always
          </p>
        </div>
      </section>

    </div>
  );
}
