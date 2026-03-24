import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  AlertTriangle,
  Heart,
  Users,
  Eye,
  Bell,
  Lock,
  CheckCircle,
} from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";

// ─── Metadata ──────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Guardian — AI Family Safety 24/7 | MEOK AI LABS",
  description:
    "MEOK Guardian watches for scams, online threats, and toxic patterns in real time. DistilBERT threat detection, family dashboard, crisis response. Built for the UK Children's Code.",
  alternates: { canonical: "https://meok.ai/guardian" },
};

// ─── Feature cards data ────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: Eye,
    emoji: "🔍",
    title: "Threat Detection",
    powered: "DistilBERT safety model",
    description:
      "Every message that touches your Guardian network is scanned for grooming patterns, scam language, and manipulation tactics. Score above 0.85 = immediate alert.",
    detail: "What it catches:",
    items: [
      "Romance scams",
      "Job scams",
      "Grooming",
      "Coercive language",
      "Financial manipulation",
    ],
  },
  {
    icon: Users,
    emoji: "👨‍👩‍👧",
    title: "Family Dashboard",
    powered: null,
    description:
      "One dashboard. Your whole family's safety. Set Guardian profiles for children, elderly parents, or vulnerable family members. Each member gets age-appropriate protection without surveillance.",
    detail: "Features:",
    items: [
      "Age-appropriate content filtering",
      "Activity anomaly detection",
      "Shared alert history",
    ],
  },
  {
    icon: AlertTriangle,
    emoji: "🆘",
    title: "Crisis Response",
    powered: null,
    description:
      "If our AI detects self-harm language, crisis indicators, or extreme distress, Guardian immediately routes to crisis resources and alerts your designated trusted contacts. Within seconds, not minutes.",
    detail: "Compliance:",
    items: ["Trained with NHS crisis pathway guidance"],
  },
  {
    icon: Shield,
    emoji: "📚",
    title: "School-Safe Mode",
    powered: null,
    description:
      "Designed for the UK Children's Code. Zero adult content. Zero gambling. Zero addictive dark patterns. School-Safe Mode creates an environment as safe as the classroom.",
    detail: "Compliance:",
    items: ["ICO registered", "UK GDPR", "Children's Code aligned"],
  },
];

// ─── Threat types data ──────────────────────────────────────────────────────

const THREAT_TYPES = [
  { icon: Heart, label: "Romance scams and catfishing" },
  { icon: AlertTriangle, label: "Investment and crypto fraud" },
  { icon: Bell, label: "Job offer scams" },
  { icon: Eye, label: "Online grooming patterns" },
  { icon: Lock, label: "Coercive control language" },
  { icon: Shield, label: "Phishing and impersonation" },
  { icon: CheckCircle, label: "Mental health crisis signals" },
];

// ─── Compliance badges ──────────────────────────────────────────────────────

const COMPLIANCE_BADGES = [
  "ICO Registered",
  "Children's Code (UK)",
  "UK GDPR Compliant",
];

// ─── FAQ JSON-LD Schema ─────────────────────────────────────────────────────

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is MEOK Guardian?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MEOK Guardian is a 24/7 AI safety layer that scans messages for scams, grooming patterns, and manipulation tactics using DistilBERT threat detection. It alerts your family network when risk scores exceed 0.85 and is compliant with the UK Children's Code."
      }
    },
    {
      "@type": "Question",
      "name": "How does MEOK Guardian detect scams?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Guardian uses a fine-tuned DistilBERT NLP model trained on scam, grooming, and coercive language patterns. Every message in your Guardian network is scored in real time. Scores above 0.85 trigger an immediate alert to your nominated family contacts."
      }
    },
    {
      "@type": "Question",
      "name": "Is MEOK Guardian safe for children?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. MEOK Guardian is built to comply with the UK Children's Code (Age Appropriate Design Code). School-Safe Mode blocks adult content entirely. Guardian scanning cannot itself generate harmful content, and all child-related decisions require human oversight."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Maternal Covenant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Maternal Covenant is MEOK's care-based alignment framework. It guarantees unconditional protection — your data is never sold, never used for training, and always encrypted with your own keys. The covenant applies to every interaction across every MEOK product."
      }
    },
    {
      "@type": "Question",
      "name": "Does MEOK Guardian work for elderly parents?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — elder protection is a core Guardian use case. Older adults are disproportionately targeted by phone scams, romance fraud, and financial manipulation. Guardian watches for these patterns 24/7 and alerts your family before damage occurs."
      }
    }
  ]
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function GuardianPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Background blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="blob-gold absolute -top-40 -left-40 h-[600px] w-[600px] opacity-20" />
        <div className="blob-purple absolute top-1/3 -right-60 h-[500px] w-[500px] opacity-15" />
        <div className="blob-gold absolute bottom-0 left-1/3 h-[400px] w-[400px] opacity-10" />
      </div>

      <main className="relative z-10">
        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-5xl px-6 pb-24 pt-28 text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-sm">
            <span>🛡</span>
            <span className="text-white/70">Guardian — active protection</span>
          </div>

          {/* H1 */}
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Never alone.
            <br />
            <span className="text-gradient-gold">Never unsafe.</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
            MEOK Guardian watches for threats so you don&apos;t have to. Scam
            detection. Toxic relationship patterns. Child-safe mode. Real-time
            alerts to the people who matter.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/birth"
              className="rounded-xl bg-[#c9a84c] px-8 py-4 text-base font-semibold text-[#0d0c18] transition-opacity hover:opacity-90"
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

        {/* ── GEO INTRO ─────────────────────────────────────────────────── */}
        <section
          id="how-it-works"
          className="mx-auto max-w-3xl px-6 pb-24 text-center"
        >
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            What is MEOK Guardian?
          </h2>
          <p className="text-lg leading-relaxed text-white/60">
            MEOK Guardian is a 24/7 AI safety layer that monitors for scams,
            predatory behaviour, toxic relationship patterns, and online
            threats. It uses DistilBERT threat classification and Companies
            House verification to protect you and your family in real time.
          </p>
        </section>

        {/* ── FEATURE CARDS ─────────────────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="grid gap-6 md:grid-cols-2">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:border-white/20"
                >
                  {/* Header */}
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c9a84c]/10">
                      <Icon className="h-5 w-5 text-[#c9a84c]" />
                    </div>
                    <div>
                      <span className="mr-2 text-xl">{feature.emoji}</span>
                      <span className="text-lg font-semibold">
                        {feature.title}
                      </span>
                    </div>
                  </div>

                  {/* Powered by */}
                  {feature.powered && (
                    <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[#c9a84c]">
                      Powered by: {feature.powered}
                    </p>
                  )}

                  {/* Description */}
                  <p className="mb-5 leading-relaxed text-white/60">
                    {feature.description}
                  </p>

                  {/* Items */}
                  <div>
                    <p className="mb-2 text-sm font-semibold text-white/80">
                      {feature.detail}
                    </p>
                    <ul className="space-y-1">
                      {feature.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-white/50"
                        >
                          <CheckCircle className="h-3.5 w-3.5 flex-shrink-0 text-[#c9a84c]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── MATERNAL COVENANT GUARANTEE ───────────────────────────────── */}
        <section className="mx-auto max-w-3xl px-6 pb-24">
          <div className="rounded-2xl border border-[#c9a84c]/30 bg-[#c9a84c]/5 p-10 text-center">
            <h2 className="mb-6 text-2xl font-bold md:text-3xl">
              What is the MEOK Maternal Covenant guarantee for Guardian?
            </h2>
            <p className="mb-8 leading-relaxed text-white/60">
              The Maternal Covenant is our constitutional AI constraint —
              written into code, not prose. For Guardian specifically: we will
              never use Guardian data for advertising. We will never sell
              threat intelligence. Guardian exists to protect people, not to
              profit from their fear.
            </p>
            <blockquote className="border-l-4 border-[#c9a84c] pl-6 text-left">
              <p className="text-lg font-medium italic text-white/80 md:text-xl">
                &ldquo;We are custodians of your family&apos;s safety. Not the
                owners of it.&rdquo;
              </p>
            </blockquote>
          </div>
        </section>

        {/* ── THREAT TYPES ──────────────────────────────────────────────── */}
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
                <Icon className="h-5 w-5 flex-shrink-0 text-[#c9a84c]" />
                <span className="text-white/80">{label}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── COMPLIANCE CALLOUT ────────────────────────────────────────── */}
        <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
          <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-white/40">
            Built for the UK regulatory environment
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {COMPLIANCE_BADGES.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/10 px-5 py-2 text-sm font-medium text-[#c9a84c]"
              >
                {badge}
              </span>
            ))}
          </div>
        </section>

        {/* ── BOTTOM CTA ────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-3xl px-6 pb-32 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            How do I activate MEOK Guardian?
          </h2>
          <p className="mx-auto mb-10 max-w-xl leading-relaxed text-white/60">
            Guardian activates automatically when your companion reaches
            Growing Form stage (50 interactions). Family Guardian — covering up
            to 5 people — is available on Sovereign Family tier.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/birth"
              className="rounded-xl bg-[#c9a84c] px-8 py-4 text-base font-semibold text-[#0d0c18] transition-opacity hover:opacity-90"
            >
              Get Guardian
            </Link>
            <Link
              href="/pricing"
              className="rounded-xl border border-white/20 px-8 py-4 text-base font-semibold text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              See Guardian pricing
            </Link>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
