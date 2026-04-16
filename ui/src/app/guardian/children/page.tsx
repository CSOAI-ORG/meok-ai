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
  BookOpen,
} from "lucide-react";
import { Surface, IconOrb, FeatureCard, GlowText } from "@/components/design-system";

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
    color: "text-green-600",
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
    boxColor: "#16a34a",
  },
  {
    range: "10–13",
    label: "The middle years",
    color: "text-blue-500",
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
    boxColor: "#3b82f6",
  },
  {
    range: "14–17",
    label: "The preparation years",
    color: "text-violet-600",
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
    boxColor: "#7c3aed",
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
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`rounded-2xl border overflow-hidden transition-colors ${
              isOpen
                ? "bg-[#2d9b8a]/[0.06] border-[#2d9b8a]/30"
                : "bg-white/[0.03] border-white/[0.07]"
            }`}
          >
            <button
              type="button"
              id={questionId}
              className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left transition-colors hover:bg-white/[0.03]"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={answerId}
            >
              <span className="font-semibold text-white/90 text-sm leading-snug">{faq.q}</span>
              {isOpen
                ? <ChevronUp className="h-4 w-4 shrink-0 text-white/30" />
                : <ChevronDown className="h-4 w-4 shrink-0 text-white/30" />}
            </button>
            {isOpen && (
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
    <div className="min-h-screen overflow-x-hidden bg-[#0d0c18] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Background blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
        <div className="blob-teal absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] opacity-10" />
        <div className="blob-gold absolute top-1/4 right-1/4 h-[300px] w-[300px] opacity-10" />
      </div>

      <main className="relative z-10">

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-5xl px-6 pb-24 pt-28 text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#2d9b8a]/30 bg-[#2d9b8a]/10 px-4 py-2 text-xs font-mono tracking-wider text-[#2d9b8a]">
            <Shield className="h-3.5 w-3.5" />
            Guardian · Child Safety · UK Children&apos;s Code
          </div>

          {/* H1 */}
          <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Your child&apos;s AI is
            <br />
            <GlowText variant="teal" as="span">
              care-governed, not control-governed.
            </GlowText>
          </h1>

          <p className="mx-auto mb-5 max-w-2xl text-lg leading-relaxed text-white/65 md:text-xl">
            Guardian isn&apos;t about watching what your child does online. It&apos;s
            about making sure they have something genuinely safe to turn to — and
            that you know when they truly need you.
          </p>
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/40">
            A companion they trust. Hard blocks that never waver. A dashboard
            that gives you the signal without the noise.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/hatch"
              className="rounded-xl bg-[#c9a84c] px-8 py-4 text-base font-bold text-[#0d0c18] transition-opacity hover:opacity-90"
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
                className="flex items-center gap-1.5 rounded-full border border-white/[0.09] bg-white/5 px-3 py-1.5 text-xs font-medium text-white/45"
              >
                <CheckCircle className="h-3 w-3 text-[#2d9b8a]" />
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
              <Surface
                key={mode.range}
                variant="elevated"
                glow="teal"
                className="p-7"
              >
                {/* Header */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-2xl">{mode.icon}</span>
                  <div>
                    <p className={`text-xl font-bold ${mode.color}`}>
                      {mode.range}
                    </p>
                    <p className="text-xs text-white/40">{mode.label}</p>
                  </div>
                </div>

                <p className="mb-3 text-sm font-semibold leading-snug text-white/80">
                  {mode.headline}
                </p>
                <p className="mb-5 text-sm leading-relaxed text-white/55">
                  {mode.description}
                </p>

                <ul className="mb-5 space-y-2">
                  {mode.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/50">
                      <CheckCircle className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${mode.color}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div
                  className="rounded-xl border p-3"
                  style={{ borderColor: `${mode.boxColor}25`, backgroundColor: `${mode.boxColor}08` }}
                >
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider" style={{ color: mode.boxColor }}>
                    What parents see
                  </p>
                  <p className="text-xs leading-relaxed text-white/50">{mode.parentVisibility}</p>
                </div>
              </Surface>
            ))}
          </div>
        </section>

        {/* ── SCHOOL-SAFE MODE ──────────────────────────────────────────────── */}
        <section className="mx-auto max-w-3xl px-6 pb-24">
          <Surface variant="glass" glow="teal" className="p-10 text-center">
            <div className="mb-5 flex justify-center">
              <IconOrb icon={BookOpen} variant="teal" size="lg" />
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
                  className="rounded-full border border-[#2d9b8a]/30 bg-[#2d9b8a]/10 px-3 py-1.5 text-xs font-medium text-[#2d9b8a]"
                >
                  {item}
                </span>
              ))}
            </div>
          </Surface>
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
            {HARD_BLOCKS.map((block) => (
              <FeatureCard
                key={block.title}
                title={block.title}
                description={block.desc}
                icon={block.icon}
                iconVariant="red"
                glow="teal"
              />
            ))}
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
            {DASHBOARD_SEES.map((item) => (
              <FeatureCard
                key={item.title}
                title={item.title}
                description={item.desc}
                icon={item.icon}
                iconVariant="teal"
                glow="teal"
              />
            ))}
          </div>

          {/* What you never see */}
          <Surface variant="glass" className="p-7">
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
          </Surface>
        </section>

        {/* ── MATERNAL COVENANT ─────────────────────────────────────────────── */}
        <section className="mx-auto max-w-3xl px-6 pb-24">
          <Surface variant="glass" glow="teal" className="p-10 text-center">
            <div className="mb-5 flex justify-center">
              <IconOrb icon={Heart} variant="teal" size="lg" />
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
            <blockquote className="border-l-4 border-[#c9a84c] pl-6 text-left">
              <p className="text-lg font-medium italic text-white/80">
                &ldquo;A child who trusts their AI companion is a child who is genuinely
                safer. We earn that trust by deserving it.&rdquo;
              </p>
              <cite className="mt-2 block text-sm not-italic text-white/40">
                Maternal Covenant — MEOK AI LTD
              </cite>
            </blockquote>
          </Surface>
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
              className="rounded-xl bg-[#c9a84c] px-8 py-4 text-base font-bold text-[#0d0c18] transition-opacity hover:opacity-90"
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
