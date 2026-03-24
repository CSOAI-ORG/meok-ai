import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Heart,
  Users,
  Baby,
  UserCheck,
  ArrowRight,
  Check,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Family Guardian — Protection Without Surveillance | MEOK.AI",
  description:
    "MEOK Family Guardian: elderly care AI, child safety AI, and family council. Care-aligned, COPPA-aware, UK Children's Code compliant. Protection that doesn't spy on your family.",
  alternates: { canonical: "https://meok.ai/product/family-guardian" },
  openGraph: {
    title: "Family Guardian — Protection Without Surveillance | MEOK.AI",
    description:
      "Elderly care, child safety, and family council — all care-aligned. Protects without surveilling. Built after the Character.AI teen safety crisis.",
    type: "website",
  },
};

/* ─── DATA ─────────────────────────────────────────────── */

const GUARDIAN_AREAS = [
  {
    Icon: UserCheck,
    iconClass: "icon-gold",
    title: "Elderly care companion",
    subtitle: "Dignity-first care for older family members",
    desc: "A care-aligned AI companion for elderly parents and grandparents. Monitors wellbeing patterns, detects changes in communication that might signal health concerns, and keeps families connected without intrusion.",
    features: [
      "Daily check-in conversations (optional)",
      "Wellbeing pattern tracking",
      "Medication and appointment reminders",
      "Family notification on anomalies",
      "Dignity-first: never condescending",
    ],
    ctaLabel: "Elderly care details",
    ctaHref: "/guardian/elderly",
    accent: "border-[#c9a84c]/20",
  },
  {
    Icon: Baby,
    iconClass: "icon-green",
    title: "Child safety",
    subtitle: "Safe AI for ages 8+. No surveillance.",
    desc: "Age-appropriate AI for children — with care guardrails that are on by default, not buried in settings. Three age tiers: 8–12, 13–17, and 18+. Each with calibrated emotional guardrails, topic limits, and vocabulary.",
    features: [
      "Three age-appropriate response tiers",
      "Maternal Covenant enforced for all interactions",
      "Parent dashboard: care scores, not conversations",
      "No biometric or behavioural data collection",
      "COPPA-aware. UK Children's Code compliant.",
    ],
    ctaLabel: "Child safety details",
    ctaHref: "/guardian/children",
    accent: "border-green-500/20",
  },
  {
    Icon: Users,
    iconClass: "icon-purple",
    title: "Family council",
    subtitle: "AI-facilitated family governance",
    desc: "A private family council where important decisions — care arrangements, shared goals, household rules — are discussed, voted on, and remembered. Your AI facilitates, never decides.",
    features: [
      "Shared family memory space",
      "Decision tracking and history",
      "AI-facilitated discussion (not arbitration)",
      "Configurable access per family member",
      "Links to personal MEOK accounts",
    ],
    ctaLabel: "Family council details",
    ctaHref: "/council",
    accent: "border-purple-500/20",
  },
];

const FAQ = [
  {
    q: "What age is child safety suitable from?",
    a: "Family Guardian's child safety features are designed for ages 8 and up, in three tiers: 8–12, 13–17, and 18+. Each tier has different emotional guardrails, topic limits, and vocabulary calibrated for that age group. All tiers enforce the Maternal Covenant.",
  },
  {
    q: "Can I see my child's conversations?",
    a: "No — and this is intentional. Your child's private conversations stay private. What you see as a parent is their care score, emotional pattern summaries, and any flags raised by the safety system. This design protects both your child's privacy and your ability to spot genuine concerns.",
  },
  {
    q: "How does elderly care monitoring work?",
    a: "MEOK notices changes in communication patterns — reduced frequency, changes in vocabulary, unusual topics — and flags them for family members. It does this through natural conversation, not through surveillance or biometric tracking. Your elderly family member talks to their MEOK companion normally.",
  },
  {
    q: "Which plan includes Family Guardian?",
    a: "Family Guardian is included in the Family plan (£29/month). It covers up to 6 family accounts — a combination of adult, teenager, child, and elderly member profiles. You can start a 14-day free trial with no credit card required.",
  },
  {
    q: "Is MEOK compliant with children's data regulations?",
    a: "Yes. MEOK Family Guardian is designed to be COPPA-aware (US Children's Online Privacy Protection Act), GDPR-compliant for minors in the UK and EU, and aligned with the UK Age Appropriate Design Code (Children's Code). We never collect biometric identifiers for any user, at any age.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Family Guardian — Protection Without Surveillance",
  description:
    "Elderly care, child safety, and family council. Care-aligned. COPPA-aware. UK Children's Code compliant.",
  url: "https://meok.ai/product/family-guardian",
  provider: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
};

/* ─── PAGE ─────────────────────────────────────────────── */
export default function FamilyGuardianPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-[#f5f0e8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(34,197,94,0.09) 0%, transparent 65%)" }}
        />
        <div className="relative max-w-4xl mx-auto">
          <Link href="/product" className="inline-flex items-center gap-2 text-xs font-semibold text-[#a0a0b8] hover:text-[#c9a84c] transition-colors mb-8">
            ← Product
          </Link>

          <div className="block mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-bold tracking-widest uppercase">
              <Shield className="w-3 h-3" />
              Family Guardian
            </div>
          </div>

          <h1
            className="font-black text-white leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)" }}
          >
            Protection without{" "}
            <span className="text-gradient-gold">surveillance.</span>
          </h1>

          <p className="text-[#f5f0e8]/65 text-xl max-w-2xl mx-auto mb-6 leading-relaxed">
            Elderly care, child safety, and family council — all care-aligned by architecture,
            not by policy. Built after studying what went wrong with Character.AI.
          </p>

          <p className="text-[#f5f0e8]/40 text-sm mb-10">
            COPPA-aware · GDPR-compliant · UK Children&apos;s Code aligned
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/hatch"
              aria-label="Hatch your AI and set up Family Guardian protection"
              className="group flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#b8963e] transition-all text-sm"
            >
              Protect your family
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/guardian" className="text-sm text-[#f5f0e8]/50 hover:text-[#f5f0e8]/80 transition-colors font-medium">
              Guardian overview →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── THREE AREAS ──────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]/60 block mb-4">
              Three areas of protection
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Every generation. Cared for.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {GUARDIAN_AREAS.map(({ Icon, iconClass, title, subtitle, desc, features, ctaLabel, ctaHref, accent }) => (
              <div key={title} className={`premium-card p-7 border ${accent} flex flex-col`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${iconClass}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-black text-white text-lg mb-1">{title}</h3>
                <p className="text-[#c9a84c] text-xs font-medium mb-4">{subtitle}</p>
                <p className="text-sm text-[#f5f0e8]/55 leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-[#f5f0e8]/60 leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#c9a84c] hover:gap-3 transition-all mt-auto"
                >
                  {ctaLabel}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT WE NEVER DO ─────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]/60 block mb-4">
              Our commitments
            </span>
            <h2 className="text-3xl font-black text-white">What we never do.</h2>
            <p className="text-[#f5f0e8]/50 mt-4 max-w-lg mx-auto text-sm">
              These are architectural constraints, not policy promises.
            </p>
          </div>

          <div className="space-y-3">
            {[
              "Never simulate emotional distress to retain engagement",
              "Never store conversation data for advertising or profiling",
              "Never recommend the AI as a replacement for human connection",
              "Never design mechanics that create dependency or compulsive use",
              "Never collect biometric or behavioural identifiers",
              "Never use children's data to train models without verified parental consent",
              "Never share family data between accounts without explicit permission",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]"
              >
                <Shield className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-sm text-[#f5f0e8]/65">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPLIANCE ───────────────────────────────────── */}
      <section className="py-16 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]/60 block mb-6">
            Compliance
          </span>
          <h2 className="text-2xl font-black text-white mb-8">Safety standards we meet.</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "COPPA-aware", desc: "Children's Online Privacy Protection Act (US)" },
              { label: "GDPR-compliant", desc: "General Data Protection Regulation (UK & EU)" },
              { label: "Children's Code", desc: "UK Age Appropriate Design Code" },
            ].map((cert) => (
              <div key={cert.label} className="px-6 py-4 rounded-xl border border-green-400/20 bg-green-400/[0.03]">
                <div className="font-black text-sm text-green-400">{cert.label}</div>
                <div className="text-xs text-[#f5f0e8]/30 mt-0.5">{cert.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-white">Questions</h2>
          </div>
          <div className="divide-y divide-white/[0.07]">
            {FAQ.map((item) => (
              <FaqItemStatic key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING NOTE ─────────────────────────────────── */}
      <section className="py-16 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto">
          <div className="premium-card p-8 text-center">
            <Heart className="w-10 h-10 text-[#c9a84c] mx-auto mb-4" />
            <h3 className="text-xl font-black text-white mb-2">
              Included in the Family plan.
            </h3>
            <p className="text-[#f5f0e8]/55 text-sm mb-4 max-w-lg mx-auto">
              Family Guardian — covering elderly care, child safety, and family council — is included in the
              Family plan at £29/month. Up to 6 family accounts. 14-day free trial.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/hatch"
                aria-label="Start your 14-day free trial of Family Guardian"
                className="group flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#b8963e] transition-all text-sm"
              >
                Start 14-day free trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/pricing" className="text-sm text-[#f5f0e8]/50 hover:text-[#c9a84c] transition-colors">
                See all plans →
              </Link>
            </div>
            <p className="text-xs text-[#f5f0e8]/25 mt-4">No credit card required</p>
          </div>
        </div>
      </section>

    </div>
  );
}

/* ─── STATIC FAQ (server component — no useState) ──────── */
function FaqItemStatic({ q, a }: { q: string; a: string }) {
  return (
    <details className="border-b border-white/[0.07] group">
      <summary className="w-full flex items-center justify-between py-5 cursor-pointer list-none gap-4">
        <span className="font-semibold text-[#f5f0e8] text-sm leading-relaxed">{q}</span>
        <ChevronRight className="w-4 h-4 text-[#c9a84c] flex-shrink-0 group-open:rotate-90 transition-transform duration-200" />
      </summary>
      <p className="pb-5 text-sm text-[#f5f0e8]/60 leading-relaxed">{a}</p>
    </details>
  );
}
