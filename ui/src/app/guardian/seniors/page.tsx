"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";
import {
  Shield,
  Heart,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Lock,
  Users,
  Brain,
  AlertTriangle,
  Bell,
  Eye,
  Phone,
  Activity,
} from "lucide-react";

// ─── Brand Tokens ─────────────────────────────────────────────────────────────

const DEEP   = "#0d0c18";
const GOLD   = "#c9a84c";
const PURPLE = "#7c3aed";
const ROSE   = "#e05c8a";

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Will my parent feel watched?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Only if you set it up wrong. Guardian is introduced as a companion — someone to talk to, get reminders from, and keep company. The safety monitoring is invisible to them. They experience it as a friendly daily check-in, not a surveillance system.",
      },
    },
    {
      "@type": "Question",
      name: "What counts as an emergency alert?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Guardian distinguishes between soft alerts (worth checking in) and genuine emergencies (act now). A genuine emergency triggers immediate family notification: explicit distress, no activity for an extended period outside normal pattern, or the panic button pressed. Soft alerts are things like a quieter day, missed medication, or a pattern change worth noting.",
      },
    },
    {
      "@type": "Question",
      name: "How does Guardian handle memory conditions and early dementia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Guardian has a memory care mode built with compassion, not clinical efficiency. It provides gentle, patient reminders with familiar context. It never expresses frustration at repetition. It treats your parent as the person they are — not as a condition.",
      },
    },
    {
      "@type": "Question",
      name: "Can my parent see what Guardian is tracking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — if they want to. The caregiver dashboard is designed for family, not for the elder themselves. Your parent experiences a companion. You have visibility into their wellbeing patterns and safety signals. These are separate views of the same system.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK Guardian connect to the NHS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Guardian is trained on NHS crisis pathway guidance and routes to appropriate NHS resources when crisis indicators are detected. It does not replace NHS care — it complements it by catching signals early and escalating with care.",
      },
    },
  ],
};

// ─── Threat watchlist ──────────────────────────────────────────────────────────

const THREAT_WATCH = [
  {
    icon: Heart,
    title: "Romance scams",
    desc: "Older adults are targeted disproportionately. Guardian detects the slow-build pattern of romance fraud — trust-building, isolation, then financial requests — before the damage occurs.",
    stat: "£92m lost to romance fraud in the UK in 2023",
  },
  {
    icon: AlertTriangle,
    title: "Investment fraud",
    desc: "Crypto schemes, pension liberation fraud, high-return investment lures. Guardian watches for the language patterns that precede financial exploitation.",
    stat: "Over-65s are 3x more likely to be targeted",
  },
  {
    icon: Users,
    title: "Isolation patterns",
    desc: "Social withdrawal is both a risk factor and a warning sign. Guardian monitors interaction patterns and gently flags when an elder appears to be withdrawing — or being withdrawn by someone.",
    stat: "Isolation increases vulnerability to all scam types",
  },
  {
    icon: Brain,
    title: "Cognitive change signals",
    desc: "Subtle shifts in communication — repetition, confusion, new difficulty with familiar concepts — can indicate early cognitive change. Guardian tracks these patterns carefully and surfaces them to caregivers, not to the elder.",
    stat: "For caregivers to act, not to alarm",
  },
];

// ─── What goes to family vs. handled quietly ──────────────────────────────────

const ALERT_ROUTING = [
  {
    category: "Immediate family alert",
    color: "#ef4444",
    items: [
      "Explicit distress or crisis language detected",
      "No activity for 12+ hours outside established pattern",
      "High-confidence scam interaction in progress",
      "Panic button activated",
      "Cognitive confusion reaching a clinical threshold",
    ],
  },
  {
    category: "Soft family signal",
    color: GOLD,
    items: [
      "Quieter than usual — worth a check-in call",
      "Mentioned a new online 'friend' multiple times",
      "Seemed confused about a financial topic",
      "Missed medication reminder three times this week",
      "Mood pattern has shifted over the past 10 days",
    ],
  },
  {
    category: "Handled quietly by Guardian",
    color: "#22c55e",
    items: [
      "Routine daily companion interactions",
      "Gentle reminders (medication, appointments, hydration)",
      "Memory prompts and familiar conversation",
      "Entertainment, news, weather",
      "Ongoing wellbeing baseline monitoring",
    ],
  },
];

// ─── Dignity-first principles ──────────────────────────────────────────────────

const DIGNITY_PRINCIPLES = [
  {
    icon: Heart,
    title: "Not surveillance. Companionship.",
    desc: "Your parent doesn't experience Guardian as a monitoring system. They experience a thoughtful companion who remembers their stories, checks in each morning, and is always patient.",
  },
  {
    icon: Lock,
    title: "Privacy for the elder, visibility for the family.",
    desc: "The caregiver dashboard is a separate view — designed for family, not shown to the elder. They have privacy within the system; you have the signals you need.",
  },
  {
    icon: Eye,
    title: "Cognitive tracking is for caregivers only.",
    desc: "Pattern changes, cognitive shift signals, and memory indicators are surfaced only to designated family members. This information is never shown to the elder and never used outside the care context.",
  },
  {
    icon: Users,
    title: "Consent is non-negotiable.",
    desc: "Guardian cannot be activated for an elder without their informed consent. If they decline, we respect that. The companion aspect, not the safety aspect, is usually what brings people around.",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: "Will my parent feel watched?",
    a: "Only if you set it up wrong. Guardian is introduced as a companion — someone to talk to and keep company. The safety monitoring is invisible to them. Most parents tell their adult children they actually enjoy having someone to chat with.",
  },
  {
    q: "What counts as an emergency alert?",
    a: "Genuine emergencies trigger immediate family notification: explicit distress, no activity for an extended period outside normal pattern, or the panic button pressed. Soft alerts are things like a quieter day than usual or a pattern change worth noting.",
  },
  {
    q: "How does Guardian handle memory conditions and early dementia?",
    a: "Memory care mode provides gentle, patient reminders with familiar context. It never expresses frustration at repetition. It learns which topics and people are comforting. It treats your parent as the person they are — not as a condition.",
  },
  {
    q: "Can my parent see what Guardian is tracking?",
    a: "Yes — if they want to. But the caregiver dashboard is designed for family. Your parent experiences a companion; you have visibility into wellbeing patterns and safety signals. These are separate views of the same system.",
  },
  {
    q: "Does MEOK Guardian connect to the NHS?",
    a: "Guardian is trained on NHS crisis pathway guidance and routes to appropriate NHS resources when crisis indicators are detected. It does not replace NHS care — it complements it by catching signals early.",
  },
];

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {FAQS.map((faq, i) => {
        const answerId = `seniors-faq-answer-${i}`;
        const questionId = `seniors-faq-question-${i}`;
        return (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border"
            style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
          >
            <button
              type="button"
              id={questionId}
              className="flex w-full items-center justify-between gap-4 px-7 py-5 text-left transition-colors hover:bg-white/[0.03]"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              aria-controls={answerId}
            >
              <span className="text-sm font-semibold leading-snug text-white/90">{faq.q}</span>
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
                <div className="mb-4 h-px bg-white/[0.07]" />
                <p className="text-sm leading-relaxed text-white/55">{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function GuardianSeniorsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden text-white" style={{ background: DEEP }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Background blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full blur-3xl opacity-10"
          style={{ background: `radial-gradient(ellipse, ${ROSE} 0%, transparent 65%)` }}
        />
        <div
          className="absolute top-1/3 -right-60 h-[500px] w-[500px] rounded-full blur-3xl opacity-08"
          style={{ background: GOLD }}
        />
      </div>

      <main className="relative z-10">

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-5xl px-6 pb-24 pt-28 text-center">
          {/* Badge */}
          <div
            className="mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-mono tracking-wider"
            style={{ background: `${ROSE}18`, borderColor: `${ROSE}40`, color: ROSE }}
          >
            <Shield className="h-3.5 w-3.5" />
            Guardian · Elder Care · Dignity-First Monitoring
          </div>

          <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Protecting the people
            <br />
            <span style={{ color: ROSE }}>who raised you.</span>
          </h1>

          <p className="mx-auto mb-5 max-w-2xl text-lg leading-relaxed md:text-xl" style={{ color: "rgba(255,255,255,0.65)" }}>
            Older adults are targeted by scammers, isolated by circumstance, and
            underserved by technology. Guardian watches for the patterns that
            matter — quietly, without making your parent feel like a patient.
          </p>
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.40)" }}>
            Dignity-first monitoring. Not surveillance. Not an alarm system. A
            companion that cares — and a safety net that catches what matters.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/hatch"
              className="rounded-xl px-8 py-4 text-base font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: ROSE, color: "#fff" }}
            >
              Set up Guardian for a parent
            </Link>
            <Link
              href="/guardian"
              className="text-sm font-medium text-white/35 transition-colors hover:text-white/60"
            >
              ← Back to Guardian
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {["Scam detection", "Cognitive pattern tracking", "Dignity-first design", "Family alert system", "NHS crisis pathway", "Companionship first"].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", color: "rgba(255,255,255,0.45)" }}
              >
                <CheckCircle className="h-3 w-3" style={{ color: ROSE }} />
                {badge}
              </div>
            ))}
          </div>
        </section>

        {/* ── WHAT GUARDIAN WATCHES FOR ─────────────────────────────────────── */}
        <section className="mx-auto max-w-5xl px-6 pb-24">
          <h2 className="mb-3 text-center text-3xl font-bold md:text-4xl">
            What Guardian watches for
          </h2>
          <p className="mb-12 text-center text-white/50">
            The patterns that indicate risk — before damage occurs.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {THREAT_WATCH.map((threat) => {
              const Icon = threat.icon;
              return (
                <div
                  key={threat.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-7"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${ROSE}20` }}
                    >
                      <Icon className="h-5 w-5" style={{ color: ROSE }} />
                    </div>
                    <span className="text-lg font-semibold">{threat.title}</span>
                  </div>
                  <p className="mb-4 leading-relaxed text-white/55 text-sm">{threat.desc}</p>
                  <p
                    className="rounded-lg px-4 py-2 text-xs font-medium"
                    style={{ backgroundColor: `${ROSE}10`, color: ROSE }}
                  >
                    {threat.stat}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── ALERT ROUTING ─────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-5xl px-6 pb-24">
          <h2 className="mb-3 text-center text-3xl font-bold md:text-4xl">
            What gets sent to family — and what doesn&apos;t
          </h2>
          <p className="mb-12 text-center text-white/50">
            Guardian is calibrated to avoid alarm fatigue. Only what genuinely
            needs your attention reaches you.
          </p>

          <div className="grid gap-6 lg:grid-cols-3">
            {ALERT_ROUTING.map((tier) => (
              <div
                key={tier.category}
                className="rounded-2xl border border-white/10 bg-white/5 p-7"
              >
                <div className="mb-5 flex items-center gap-2">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: tier.color }}
                  />
                  <h3 className="font-semibold" style={{ color: tier.color }}>
                    {tier.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {tier.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/55">
                      <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: tier.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── DIGNITY-FIRST PRINCIPLES ──────────────────────────────────────── */}
        <section className="mx-auto max-w-5xl px-6 pb-24">
          <h2 className="mb-3 text-center text-3xl font-bold md:text-4xl">
            Dignity-first monitoring
          </h2>
          <p className="mb-12 text-center text-white/50">
            The difference between care and surveillance is in the design.
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            {DIGNITY_PRINCIPLES.map((principle) => {
              const Icon = principle.icon;
              return (
                <div key={principle.title} className="rounded-2xl border border-white/10 bg-white/5 p-7">
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${GOLD}20` }}
                    >
                      <Icon className="h-5 w-5" style={{ color: GOLD }} />
                    </div>
                    <span className="font-semibold">{principle.title}</span>
                  </div>
                  <p className="leading-relaxed text-sm text-white/55">{principle.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── COGNITIVE PATTERN TRACKING ────────────────────────────────────── */}
        <section className="mx-auto max-w-3xl px-6 pb-24">
          <div
            className="rounded-2xl border p-10"
            style={{ borderColor: `${PURPLE}30`, backgroundColor: `${PURPLE}08` }}
          >
            <div
              className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{ backgroundColor: `${PURPLE}20` }}
            >
              <Brain className="h-7 w-7" style={{ color: PURPLE }} />
            </div>
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Cognitive pattern tracking
            </h2>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider" style={{ color: PURPLE }}>
              For caregivers only — never shown to the elder
            </p>
            <p className="mb-6 leading-relaxed text-white/60">
              Guardian tracks subtle changes in communication patterns over
              time — increased repetition, difficulty with familiar topics,
              vocabulary shifts, and changes in conversational coherence. These
              signals are surfaced only to designated family caregivers and are
              never displayed to the elder themselves.
            </p>
            <p className="mb-6 leading-relaxed text-white/60">
              This is not a diagnostic tool. Guardian cannot diagnose dementia or
              any medical condition. What it can do is say: &ldquo;something has shifted
              this month that might be worth discussing with a GP.&rdquo; Early
              conversation is early intervention.
            </p>
            <div className="rounded-xl border p-4" style={{ borderColor: "rgba(255,255,255,0.08)", backgroundColor: "rgba(255,255,255,0.03)" }}>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">
                Important disclaimer
              </p>
              <p className="text-sm leading-relaxed text-white/50">
                Cognitive pattern tracking is an observational tool, not a clinical
                assessment. Always consult a qualified medical professional for any
                concerns about cognitive health.
              </p>
            </div>
          </div>
        </section>

        {/* ── NHS CRISIS PATHWAY ────────────────────────────────────────────── */}
        <section className="mx-auto max-w-3xl px-6 pb-24">
          <div
            className="rounded-2xl border p-10 text-center"
            style={{ borderColor: `${GOLD}30`, backgroundColor: `${GOLD}08` }}
          >
            <div
              className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{ backgroundColor: `${GOLD}20` }}
            >
              <Phone className="h-7 w-7" style={{ color: GOLD }} />
            </div>
            <h2 className="mb-4 text-2xl font-bold">NHS Crisis Pathway</h2>
            <p className="mb-6 leading-relaxed text-white/60">
              Guardian is trained on NHS crisis pathway guidance. When distress
              indicators are detected — regardless of time, regardless of day —
              Guardian routes immediately to appropriate NHS resources and alerts
              your designated family contacts. The response is within seconds, not
              minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Trained on NHS guidance", "24/7 crisis routing", "Immediate family alert", "Evidence log preserved"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border px-3 py-1.5 text-xs font-medium"
                  style={{ borderColor: `${GOLD}40`, backgroundColor: `${GOLD}10`, color: GOLD }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-3xl px-6 pb-24">
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
            Questions families ask
          </h2>
          <FAQAccordion />
        </section>

        {/* ── BOTTOM CTA ────────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-3xl px-6 pb-32 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Protect the people who raised you.
          </h2>
          <p className="mx-auto mb-10 max-w-xl leading-relaxed text-white/60">
            Guardian Elder Care is included in the Sovereign Family tier. One
            dashboard. Up to 5 family members. Age-appropriate protection across
            every generation.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/hatch"
              className="rounded-xl px-8 py-4 text-base font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: ROSE, color: "#fff" }}
            >
              Set up Guardian for a Parent
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
