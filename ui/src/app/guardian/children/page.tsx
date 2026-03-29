"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Shield,
  ChevronDown,
  ChevronUp,
  XCircle,
  CheckCircle,
  Heart,
  BarChart2,
  Clock,
  Lock,
  AlertTriangle,
  Eye,
  Baby,
  BookOpen,
  Users,
} from "lucide-react";

// ─── Brand Tokens ─────────────────────────────────────────────────────────────

const DEEP   = "#0d0c18";
const GOLD   = "#c9a84c";
const PURPLE = "#7c3aed";
const BLUE   = "#3b82f6";

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is care-governed AI for children?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Care-governed means Guardian is designed around what is genuinely good for your child — not around maximising engagement, not around surveillance, and not around control. Every decision — what to show, what to flag, when to alert — is filtered through the question: is this in the child's best interest?",
      },
    },
    {
      "@type": "Question",
      name: "Will my child trust MEOK if they know I can see stuff?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This is why we designed it the way we did. Your child's actual conversations are private — you don't see them. What you see is a wellbeing summary. Most children, once they understand this, are comfortable with it. The children who feel trusted are the ones who feel safe using MEOK openly. That's the point.",
      },
    },
    {
      "@type": "Question",
      name: "What if MEOK gets something wrong?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Guardian flags patterns, not certainties. You'll never receive an alert that says 'your child is in danger' — you'll receive 'Jake seemed lower this week, worth a check-in.' MEOK is designed to prompt human connection, not replace it. If something is flagged and your instinct says everything's fine, trust your instinct. MEOK is a signal, not a verdict.",
      },
    },
    {
      "@type": "Question",
      name: "Can a teen disable Guardian?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Teenagers aged 13 and over can adjust some preferences — check-in timing, notification settings — within limits you set. Core safety features require parent approval to change. What keeps them safe is trust, not restriction. Guardian is designed to be the kind of companion they don't want to turn off.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK profile my child's data for advertising?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Never. No data profiling of minors. Ever. MEOK does not use your child's conversations for advertising, model training, or any commercial purpose. UK GDPR and Children's Code compliant by design.",
      },
    },
  ],
};

// ─── Age modes ────────────────────────────────────────────────────────────────

const AGE_MODES = [
  {
    range: "Under 10",
    label: "The curious years",
    color: "#16a34a",
    icon: "🌱",
    headline: "Fully curated. Always gentle. Parent-transparent.",
    description:
      "Every response is reviewed against a strict safety lattice for young children. Nothing gets through that shouldn't. Parents see full wellbeing summaries at this age — nothing is hidden.",
    features: [
      "All content filtered through children's safety lattice",
      "Bedtime stories, educational Q&A, gentle creative play",
      "Homework support that builds understanding — never shortcuts",
      "Hard blocks on all adult content — not configurable, not overrideable",
      "Bedtime mode: quiets down after a set time",
    ],
    parentVisibility: "Full wellbeing summaries. You see patterns, flagged moments, and session times.",
  },
  {
    range: "10–13",
    label: "The middle years",
    color: BLUE,
    icon: "🔵",
    headline: "Safe space for the complicated stuff. Alert when it matters.",
    description:
      "Social dynamics. Friendship drama. Questions they'd never ask a parent. Guardian gives your child somewhere safe to process this — and surfaces what genuinely needs your attention.",
    features: [
      "Social dynamics support — friendships, belonging, exclusion",
      "Emotional check-ins that notice what's hard to say out loud",
      "Online safety guidance woven into natural conversation",
      "Grooming pattern detection with immediate parent alert",
      "School-Safe Mode for homework hours",
    ],
    parentVisibility: "Wellbeing summary + flagged moments. Conversations are private; patterns are not.",
  },
  {
    range: "14–17",
    label: "The preparation years",
    color: PURPLE,
    icon: "💜",
    headline: "Privacy-respecting. Emergency-responsive. Still protected.",
    description:
      "Teenagers need a space to process growing-up honestly. Guardian respects that — while maintaining hard safety floors and a safe-word emergency system that always reaches you.",
    features: [
      "Teen controls day-to-day summary level (within parent-set limits)",
      "Mental health support with crisis detection",
      "Safe-word system: one phrase triggers immediate parent alert",
      "Hard blocks remain active regardless of teen preferences",
      "Exam stress, future planning, relationship navigation",
    ],
    parentVisibility: "Emotional wellbeing indicators. Safety emergencies always override privacy.",
  },
];

// ─── What Guardian blocks ──────────────────────────────────────────────────────

const HARD_BLOCKS = [
  {
    icon: XCircle,
    title: "Adult content",
    desc: "Hard-blocked at the model layer for all minors. Not a setting. Not configurable. No exceptions, regardless of how a request is phrased. Includes 'romantic roleplay' with adult themes and gradual escalation attempts.",
  },
  {
    icon: XCircle,
    title: "Gambling and addiction mechanics",
    desc: "No gambling content. No dark patterns — no streaks that feel like obligations, no manipulative reward loops, no content designed to create dependency. This is structural, not a filter.",
  },
  {
    icon: XCircle,
    title: "Grooming patterns",
    desc: "Any attempt to use Guardian for grooming — including by someone posing as a peer — is detected, refused, and flagged immediately to parents. Escalating personal questions, requests for photos, and secret-relationship dynamics are all caught.",
  },
  {
    icon: XCircle,
    title: "Self-harm and harmful ideation",
    desc: "MEOK will never provide instructions, describe methods, or engage with content that glorifies self-harm. It responds with care, connects to crisis resources, and notifies parents.",
  },
];

// ─── Parent dashboard ──────────────────────────────────────────────────────────

const DASHBOARD_SEES = [
  {
    icon: BarChart2,
    title: "Wellbeing patterns",
    desc: "A weekly emotional trend — is your child generally settled, stressed, or showing signs of change?",
  },
  {
    icon: Heart,
    title: "Care score",
    desc: "A single indicator of how your child's interactions are trending. Green is fine. Amber is 'worth a check-in.' Red is 'act now.'",
  },
  {
    icon: AlertTriangle,
    title: "Flagged moments",
    desc: "If something specific needs your attention, you get a clear contextual alert. Not an alarm. A nudge with enough context to start a conversation.",
  },
  {
    icon: Clock,
    title: "Session patterns",
    desc: "When your child uses MEOK, for how long, and whether late-night usage is increasing — useful context without reading their diary.",
  },
];

const DASHBOARD_PRIVATE = [
  "The exact words of any conversation",
  "Questions your child asks MEOK",
  "Personal thoughts your child shares",
  "Topics they explore out of curiosity",
  "Anything discussed that isn't a safety concern",
];

// ─── FAQ Accordion ─────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: "What is care-governed AI for children?",
    a: "Care-governed means Guardian is designed around what is genuinely good for your child — not around maximising engagement, surveillance, or control. Every decision is filtered through one question: is this in the child's best interest?",
  },
  {
    q: "Will my child trust MEOK if they know I can see stuff?",
    a: "Your child's actual conversations are private — you don't see them. What you see is a wellbeing summary. Most children are comfortable with this once they understand it. The children who feel trusted are the ones who feel safe using MEOK openly.",
  },
  {
    q: "What if MEOK gets something wrong?",
    a: "Guardian flags patterns, not certainties. You'll never receive 'your child is in danger' — you'll receive 'Jake seemed lower this week, worth a check-in.' MEOK prompts human connection, not replaces it. MEOK is a signal, not a verdict.",
  },
  {
    q: "Can a teen disable Guardian?",
    a: "Teenagers aged 13+ can adjust some preferences within limits you set. Core safety features require parent approval. What keeps them safe is trust, not restriction — Guardian is designed to be the kind of companion they don't want to turn off.",
  },
  {
    q: "Does MEOK profile my child's data for advertising?",
    a: "Never. No data profiling of minors. Ever. MEOK does not use your child's conversations for advertising, model training, or any commercial purpose. UK GDPR and Children's Code compliant by design.",
  },
];

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {FAQS.map((faq, i) => {
        const answerId = `children-faq-answer-${i}`;
        const questionId = `children-faq-question-${i}`;
        return (
          <div
            key={i}
            className="rounded-2xl border overflow-hidden"
            style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
          >
            <button
              type="button"
              id={questionId}
              className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left transition-colors hover:bg-white/[0.03]"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              aria-controls={answerId}
            >
              <span className="font-semibold text-white/90 text-sm leading-snug">{faq.q}</span>
              {open === i
                ? <ChevronUp className="h-4 w-4 shrink-0 text-white/30" />
                : <ChevronDown className="h-4 w-4 shrink-0 text-white/30" />}
            </button>
            {open === i && (
              <div
                id={answerId}
                role="region"
                aria-labelledby={questionId}
                className="px-7 pb-5 pt-1"
              >
                <div className="h-px bg-white/[0.07] mb-4" />
                <p className="text-white/55 text-sm leading-relaxed">{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function GuardianChildrenPage() {
  return (
    <div
      className="min-h-screen overflow-x-hidden text-white"
      style={{ background: DEEP }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Background blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-3xl opacity-10"
          style={{ background: `radial-gradient(ellipse, ${BLUE} 0%, transparent 65%)` }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full blur-3xl opacity-08"
          style={{ background: GOLD }}
        />
      </div>

      <main className="relative z-10">

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-5xl px-6 pb-24 pt-28 text-center">
          {/* Badge */}
          <div
            className="mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-mono tracking-wider"
            style={{ background: `${BLUE}18`, borderColor: `${BLUE}40`, color: "#60a5fa" }}
          >
            <Shield className="h-3.5 w-3.5" />
            Guardian · Child Safety · UK Children&apos;s Code
          </div>

          {/* H1 */}
          <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Your child&apos;s AI is
            <br />
            <span style={{ color: "#60a5fa" }}>
              care-governed, not control-governed.
            </span>
          </h1>

          <p className="mx-auto mb-5 max-w-2xl text-lg leading-relaxed md:text-xl" style={{ color: "rgba(255,255,255,0.65)" }}>
            Guardian isn&apos;t about watching what your child does online. It&apos;s
            about making sure they have something genuinely safe to turn to — and
            that you know when they truly need you.
          </p>
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.40)" }}>
            A companion they trust. Hard blocks that never waver. A dashboard
            that gives you the signal without the noise.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/hatch"
              className="rounded-xl px-8 py-4 text-base font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: BLUE, color: "#fff" }}
            >
              Set up Guardian for your children
            </Link>
            <Link
              href="/guardian"
              className="text-sm font-medium text-white/35 transition-colors hover:text-white/60"
            >
              ← Back to Guardian
            </Link>
          </div>

          {/* Compliance badges */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {["Ages Under 10 / 10–13 / 14–17", "UK Children's Code", "Hard content blocks", "No data profiling", "COPPA + UK GDPR", "Care-governed"].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", color: "rgba(255,255,255,0.45)" }}
              >
                <CheckCircle className="h-3 w-3" style={{ color: BLUE }} />
                {badge}
              </div>
            ))}
          </div>
        </section>

        {/* ── AGE-APPROPRIATE MODES ─────────────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <h2 className="mb-3 text-center text-3xl font-bold md:text-4xl">
            Three age-appropriate modes
          </h2>
          <p className="mb-12 text-center text-white/50">
            Guardian adapts protection to the developmental stage — same safety floor, different trust model.
          </p>

          <div className="grid gap-6 lg:grid-cols-3">
            {AGE_MODES.map((mode) => (
              <div
                key={mode.range}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
              >
                {/* Header */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-2xl">{mode.icon}</span>
                  <div>
                    <p
                      className="text-xl font-bold"
                      style={{ color: mode.color }}
                    >
                      {mode.range}
                    </p>
                    <p className="text-xs text-white/40">{mode.label}</p>
                  </div>
                </div>

                <p className="mb-3 text-sm font-semibold text-white/80 leading-snug">
                  {mode.headline}
                </p>
                <p className="mb-5 text-sm leading-relaxed text-white/55">
                  {mode.description}
                </p>

                <ul className="mb-5 space-y-2">
                  {mode.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/50">
                      <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: mode.color }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div
                  className="rounded-xl border p-3"
                  style={{ borderColor: `${mode.color}25`, backgroundColor: `${mode.color}08` }}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: mode.color }}>
                    What parents see
                  </p>
                  <p className="text-xs leading-relaxed text-white/50">{mode.parentVisibility}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SCHOOL-SAFE MODE ──────────────────────────────────────────────── */}
        <section className="mx-auto max-w-3xl px-6 pb-24">
          <div
            className="rounded-2xl border p-10 text-center"
            style={{ borderColor: `${GOLD}30`, backgroundColor: `${GOLD}08` }}
          >
            <div
              className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{ backgroundColor: `${GOLD}20` }}
            >
              <BookOpen className="h-7 w-7" style={{ color: GOLD }} />
            </div>
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              School-Safe Mode
            </h2>
            <p className="mb-6 leading-relaxed text-white/60">
              During school hours and homework time, Guardian shifts into a
              focused academic environment. Distraction is minimised. Learning is
              supported — but never shortcut. MEOK will help your child understand
              a concept; it won&apos;t write their essay for them.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Zero adult content", "Zero gambling", "No addictive dark patterns", "Homework helper — not homework doer", "ICO Registered", "UK Children's Code aligned"].map((item) => (
                <span
                  key={item}
                  className="rounded-full px-3 py-1.5 text-xs font-medium"
                  style={{ backgroundColor: `${GOLD}15`, color: GOLD, border: `1px solid ${GOLD}30` }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT GUARDIAN BLOCKS ──────────────────────────────────────────── */}
        <section className="mx-auto max-w-5xl px-6 pb-24">
          <h2 className="mb-3 text-center text-3xl font-bold md:text-4xl">
            What Guardian blocks — always
          </h2>
          <p className="mb-12 text-center text-white/50">
            These aren&apos;t settings. They&apos;re structural. No child, no parent, no
            prompt engineering can override them.
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            {HARD_BLOCKS.map((block) => {
              const Icon = block.icon;
              return (
                <div
                  key={block.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-7"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <Icon className="h-5 w-5 shrink-0 text-red-400" />
                    <span className="font-semibold">{block.title}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-white/55">{block.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── PARENT DASHBOARD ──────────────────────────────────────────────── */}
        <section className="mx-auto max-w-5xl px-6 pb-24">
          <h2 className="mb-3 text-center text-3xl font-bold md:text-4xl">
            What you see as a parent
          </h2>
          <p className="mb-12 text-center text-white/50">
            The signal, not the noise — and never the diary.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-10">
            {DASHBOARD_SEES.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${BLUE}20` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: BLUE }} />
                  </div>
                  <h3 className="mb-2 font-semibold text-white/90">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/50">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* What you never see */}
          <div
            className="rounded-2xl border p-7"
            style={{ borderColor: "rgba(255,255,255,0.06)", backgroundColor: "rgba(255,255,255,0.03)" }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              What parents never see — privacy guaranteed
            </p>
            <ul className="space-y-2">
              {DASHBOARD_PRIVATE.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/50">
                  <Lock className="h-3.5 w-3.5 shrink-0 text-white/20" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── MATERNAL COVENANT ─────────────────────────────────────────────── */}
        <section className="mx-auto max-w-3xl px-6 pb-24">
          <div
            className="rounded-2xl border p-10 text-center"
            style={{ borderColor: `${PURPLE}30`, backgroundColor: `${PURPLE}08` }}
          >
            <div
              className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{ backgroundColor: `${PURPLE}20` }}
            >
              <Heart className="h-7 w-7" style={{ color: PURPLE }} />
            </div>
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Maternal Covenant for children
            </h2>
            <p className="mb-6 leading-relaxed text-white/60">
              The Maternal Covenant is MEOK&apos;s constitutional alignment framework —
              written into the code, not just the marketing. For children
              specifically, it means: the same unconditional protection, adapted to
              the developmental stage. Your child&apos;s data is never sold, never used
              to train other models, never shown to advertisers. This is a
              structural guarantee, not a policy that can change with a board
              decision.
            </p>
            <blockquote
              className="border-l-4 pl-6 text-left"
              style={{ borderColor: GOLD }}
            >
              <p className="text-lg font-medium italic text-white/80">
                &ldquo;A child who trusts their AI companion is a child who is genuinely
                safer. We earn that trust by deserving it.&rdquo;
              </p>
              <cite className="mt-2 block text-sm not-italic text-white/40">
                Maternal Covenant — MEOK AI LTD
              </cite>
            </blockquote>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-3xl px-6 pb-24">
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
            Questions parents ask
          </h2>
          <FAQAccordion />
        </section>

        {/* ── BOTTOM CTA ────────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-3xl px-6 pb-32 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Set up Guardian for your children
          </h2>
          <p className="mx-auto mb-10 max-w-xl leading-relaxed text-white/60">
            Guardian Child Safety is included in the Sovereign Family tier. One
            family, up to 5 members, one dashboard — with age-appropriate
            protection for every child.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/hatch"
              className="rounded-xl px-8 py-4 text-base font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: BLUE, color: "#fff" }}
            >
              Get Guardian for Children
            </Link>
            <Link
              href="/pricing"
              className="rounded-xl border border-white/20 px-8 py-4 text-base font-semibold text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              See family pricing
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
