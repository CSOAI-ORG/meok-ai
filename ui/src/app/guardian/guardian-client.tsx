"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Shield,
  AlertTriangle,
  Heart,
  Users,
  Eye,
  Bell,
  Lock,
  CheckCircle,
  Scan,
  Zap,
  ShieldAlert,
  Baby,
  UserCheck,
  Swords,
  ArrowRight,
} from "lucide-react";

// ─── Brand Tokens ───────────────────────────────────────────────────────────

const DEEP    = "#0d0c18";
const GOLD    = "#c9a84c";
const PURPLE  = "#7c3aed";

// ─── JSON-LD ────────────────────────────────────────────────────────────────

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is MEOK Guardian 24/7?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK Guardian is a 24/7 AI safety layer that protects families from scams, grooming patterns, financial fraud, and manipulation — in real time, using fine-tuned DistilBERT threat detection. Guardian covers children, elderly parents, and any vulnerable family member under one family dashboard.",
      },
    },
    {
      "@type": "Question",
      name: "How does Guardian detect scams and threats?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every message and interaction in your Guardian network is scanned in real time by a fine-tuned DistilBERT NLP model trained on scam, grooming, coercive language, and manipulation patterns. When a risk score exceeds 0.85, Guardian triggers an immediate alert to your designated family contacts.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK Guardian invade privacy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Guardian is built privacy-first. Children's conversations are private — parents see wellbeing summaries, not transcripts. Elders experience Guardian as a companion, not a monitoring device. All data is encrypted with your own keys and never used for advertising or training.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Maternal Covenant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Maternal Covenant is MEOK's constitutional AI alignment framework. It guarantees unconditional protection: your data is never sold, never used for ad targeting, and always encrypted with your keys. Guardian exists to protect people, not to profit from fear.",
      },
    },
  ],
};

// ─── Threat counter component ───────────────────────────────────────────────

function ThreatCounter() {
  const [count, setCount] = useState(0);
  const targetRef = useRef(47382);
  const frameRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    const target = targetRef.current;
    const duration = 2200;

    const animate = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          frameRef.current = requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const el = document.getElementById("threat-counter");
    if (el) observer.observe(el);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <span id="threat-counter" className="tabular-nums">
      {count.toLocaleString()}+
    </span>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

const PROTECTION_MODES = [
  {
    icon: ShieldAlert,
    label: "Scam Protection",
    desc: "Real-time DistilBERT scanning for romance scams, investment fraud, phishing, and job offer lures.",
    href: "/guardian/scam-stop",
    accent: GOLD,
    badge: "Most common threat",
  },
  {
    icon: Baby,
    label: "Children's Safety",
    desc: "Age-gated modes from Under 10 through 17. Grooming pattern detection, dark pattern blocking, School-Safe Mode.",
    href: "/guardian/children",
    accent: PURPLE,
    badge: "UK Children's Code",
  },
  {
    icon: Heart,
    label: "Elder Care",
    desc: "Dignity-first monitoring for seniors. Romance scam radar, cognitive change tracking, family alert routing.",
    href: "/guardian/seniors",
    accent: "#e05c8a",
    badge: "NHS crisis pathway",
  },
  {
    icon: Swords,
    label: "Relationship Shield",
    desc: "Coercive control detection, isolation pattern recognition, and safe-exit resources — always on.",
    href: "/guardian/relationship-shield",
    accent: "#38bdf8",
    badge: "Survivor-designed",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    icon: Scan,
    title: "Scan",
    desc: "Every interaction in your Guardian network is processed by fine-tuned DistilBERT threat classification — in milliseconds.",
  },
  {
    step: "02",
    icon: Eye,
    title: "Detect",
    desc: "Pattern libraries covering 12 threat categories score each message. Risk scores above 0.85 are flagged immediately.",
  },
  {
    step: "03",
    icon: Bell,
    title: "Alert",
    desc: "Your nominated family contacts receive a clear, calm alert — what was detected, what category, and what action to take.",
  },
  {
    step: "04",
    icon: Shield,
    title: "Protect",
    desc: "Guardian blocks harmful content, routes to crisis resources when needed, and preserves a tamper-proof evidence log.",
  },
];

const THREAT_TYPES = [
  { icon: Heart, label: "Romance scams and catfishing" },
  { icon: AlertTriangle, label: "Investment and crypto fraud" },
  { icon: Bell, label: "Job offer scams" },
  { icon: Eye, label: "Online grooming patterns" },
  { icon: Lock, label: "Coercive control language" },
  { icon: Shield, label: "Phishing and impersonation" },
  { icon: CheckCircle, label: "Mental health crisis signals" },
  { icon: UserCheck, label: "Financial elder abuse" },
];

const COMPLIANCE_BADGES = [
  "ICO Registered",
  "UK Children's Code",
  "UK GDPR Compliant",
  "NHS Crisis Pathway",
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function GuardianClient() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: DEEP }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Background blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="blob-purple absolute -top-40 -left-40 h-[600px] w-[600px] opacity-20" />
        <div className="blob-gold absolute top-1/3 -right-60 h-[500px] w-[500px] opacity-10" />
        <div className="blob-purple absolute bottom-0 left-1/3 h-[400px] w-[400px] opacity-10" />
      </div>

      <main className="relative z-10">

        {/* ── HERO ────────────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-5xl px-6 pb-24 pt-28 text-center">

          {/* Badge */}
          <div
            className="mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm backdrop-blur-sm"
            style={{ borderColor: `${PURPLE}40`, backgroundColor: `${PURPLE}18` }}
          >
            <Shield className="h-4 w-4" style={{ color: PURPLE }} />
            <span className="text-white/70">Guardian 24/7 — Active Protection</span>
          </div>

          {/* H1 */}
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Guardian 24/7
            <br />
            <span className="text-gradient-gold">
              AI that protects the people you love.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
            MEOK Guardian is a 24/7 AI safety layer for your entire family —
            scanning for scams, grooming, financial fraud, and manipulation in
            real time. Always watching. Never intrusive.
          </p>

          {/* Threat counter */}
          <div
            className="mx-auto mb-10 flex max-w-sm flex-col items-center gap-1 rounded-2xl border p-6"
            style={{ borderColor: `${PURPLE}40`, backgroundColor: `${PURPLE}10` }}
          >
            <p
              className="text-4xl font-bold tabular-nums"
              style={{ color: PURPLE }}
            >
              <ThreatCounter />
            </p>
            <p className="text-sm text-white/50">threats caught this week</p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/hatch"
              className="rounded-xl px-8 py-4 text-base font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: GOLD, color: DEEP }}
            >
              Activate Guardian
            </Link>
            <a
              href="#how-it-works"
              className="rounded-xl border border-white/20 px-8 py-4 text-base font-semibold text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              See how it works
            </a>
          </div>
        </section>

        {/* ── PROTECTION MODES ────────────────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <h2 className="mb-3 text-center text-3xl font-bold md:text-4xl">
            Four modes of protection
          </h2>
          <p className="mb-12 text-center text-white/50">
            Each member of your family gets the Guardian profile that fits their life.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {PROTECTION_MODES.map((mode) => {
              const Icon = mode.icon;
              return (
                <Link
                  key={mode.label}
                  href={mode.href}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-white/20 hover:-translate-y-0.5"
                >
                  {/* Header row */}
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl"
                        style={{ backgroundColor: `${mode.accent}18` }}
                      >
                        <Icon className="h-5 w-5" style={{ color: mode.accent }} />
                      </div>
                      <span className="text-lg font-semibold">{mode.label}</span>
                    </div>
                    <span
                      className="rounded-full px-3 py-1 text-xs font-medium"
                      style={{ backgroundColor: `${mode.accent}18`, color: mode.accent }}
                    >
                      {mode.badge}
                    </span>
                  </div>

                  <p className="mb-4 leading-relaxed text-white/55">{mode.desc}</p>

                  <div className="flex items-center gap-1 text-sm font-medium" style={{ color: mode.accent }}>
                    <span>Learn more</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── HOW IT WORKS ────────────────────────────────────────────────── */}
        <section id="how-it-works" className="mx-auto max-w-5xl px-6 pb-24">
          <h2 className="mb-3 text-center text-3xl font-bold md:text-4xl">
            How Guardian works
          </h2>
          <p className="mb-12 text-center text-white/50">
            Four steps. Milliseconds to protection.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className="text-xs font-bold tabular-nums tracking-widest"
                      style={{ color: PURPLE }}
                    >
                      {step.step}
                    </span>
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${PURPLE}20` }}
                    >
                      <Icon className="h-4 w-4" style={{ color: PURPLE }} />
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-white/55">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── PRIVACY FIRST ────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-3xl px-6 pb-24">
          <div
            className="rounded-2xl border p-10 text-center"
            style={{ borderColor: `${PURPLE}30`, backgroundColor: `${PURPLE}08` }}
          >
            <div
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl"
              style={{ backgroundColor: `${PURPLE}20` }}
            >
              <Lock className="h-8 w-8" style={{ color: PURPLE }} />
            </div>
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Always watching. Never intrusive.
            </h2>
            <p className="mb-8 leading-relaxed text-white/60">
              Guardian never reads transcripts. Parents see wellbeing summaries,
              not conversations. Elders experience a companion, not a camera. All
              data is encrypted with your own keys. Nothing is ever sold, never
              used for advertising, never used to train AI models.
            </p>
            <blockquote
              className="border-l-4 pl-6 text-left"
              style={{ borderColor: GOLD }}
            >
              <p className="text-lg font-medium italic text-white/80 md:text-xl">
                &ldquo;We are custodians of your family&apos;s safety. Not the
                owners of it.&rdquo;
              </p>
              <cite className="mt-2 block text-sm not-italic text-white/40">
                Maternal Covenant — MEOK AI LTD
              </cite>
            </blockquote>
          </div>
        </section>

        {/* ── THREAT TYPES ─────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-3xl px-6 pb-24">
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
            Guardian watches for:
          </h2>
          <ul className="space-y-3">
            {THREAT_TYPES.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-6 py-4"
              >
                <Icon
                  className="h-5 w-5 flex-shrink-0"
                  style={{ color: GOLD }}
                />
                <span className="text-white/80">{label}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── COMPLIANCE ───────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
          <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-white/40">
            Built for the UK regulatory environment
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {COMPLIANCE_BADGES.map((badge) => (
              <span
                key={badge}
                className="rounded-full border px-5 py-2 text-sm font-medium"
                style={{
                  borderColor: `${GOLD}40`,
                  backgroundColor: `${GOLD}10`,
                  color: GOLD,
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </section>

        {/* ── BOTTOM CTA ───────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-3xl px-6 pb-32 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Your family deserves Guardian.
          </h2>
          <p className="mx-auto mb-10 max-w-xl leading-relaxed text-white/60">
            Guardian activates automatically when your companion reaches Growing
            Form (50 interactions). Family Guardian — up to 5 people — is
            available on Sovereign Family tier.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/hatch"
              className="rounded-xl px-8 py-4 text-base font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: GOLD, color: DEEP }}
            >
              Get Guardian
            </Link>
            <Link
              href="/pricing"
              className="rounded-xl border border-white/20 px-8 py-4 text-base font-semibold text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              See pricing
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
