import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "For Families — MEOK.AI",
  description:
    "AI your family can trust. Guardian protection for every generation — elder care, child safety, and a family dashboard that puts privacy first.",
  alternates: {
    canonical: "https://meok.ai/for-families",
  },
  openGraph: {
    title: "For Families — MEOK.AI",
    description:
      "Guardian-protected AI companions for every generation. Elder care, child safety, family dashboard.",
    type: "website",
  },
};

// ── Brand tokens ─────────────────────────────────────────────────────────────

const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const GOLD = "#c9a84c";
const CREAM = "#f5f0e8";
const MUTED = "rgba(245,240,232,0.55)";
const FAINT = "rgba(245,240,232,0.07)";

// ── JSON-LD ──────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "MEOK for Families",
  description:
    "AI your family can trust. Guardian protection for every generation.",
  url: "https://meok.ai/for-families",
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
};

// ── Family sections ──────────────────────────────────────────────────────────

const FAMILY_SECTIONS = [
  {
    id: "elder-care",
    icon: "🤍",
    title: "Elder Care",
    subtitle: "A patient companion that never forgets",
    features: [
      {
        name: "Memory Continuity",
        desc: "Your parent can pick up any conversation where they left off, even weeks later. MEOK remembers their stories, preferences, and routines.",
      },
      {
        name: "Medication & Routine Nudges",
        desc: "Gentle, non-intrusive reminders woven into natural conversation. Not alarms — companionship.",
      },
      {
        name: "Family Visibility",
        desc: "Optional wellness summaries shared with designated family members. You see how Mum is doing without invading her privacy.",
      },
      {
        name: "Dignified Interaction",
        desc: "Large text, patient pacing, and a companion that never rushes, condescends, or loses patience.",
      },
    ],
  },
  {
    id: "child-safety",
    icon: "🛡️",
    title: "Child Safety",
    subtitle: "Guardian-grade protection by default",
    features: [
      {
        name: "Age-Appropriate Boundaries",
        desc: "Guardian Shield automatically filters content, adjusts language complexity, and blocks inappropriate topics based on the child's age profile.",
      },
      {
        name: "No Data Harvesting",
        desc: "Unlike free chatbots, MEOK never trains on your child's conversations. Their data stays theirs.",
      },
      {
        name: "Parental Oversight",
        desc: "Review conversation themes (not transcripts) to understand what your child is exploring — without breaking their trust.",
      },
      {
        name: "Learning Companion",
        desc: "Homework help, creative play, and curiosity support with a companion that adapts to how your child learns.",
      },
    ],
  },
  {
    id: "family-dashboard",
    icon: "🏠",
    title: "Family Dashboard",
    subtitle: "One household, everyone sovereign",
    features: [
      {
        name: "Individual Companions",
        desc: "Every family member gets their own companion with their own memory, personality, and privacy boundary.",
      },
      {
        name: "Shared Spaces",
        desc: "Opt-in shared calendars, meal planning, and family projects that any member can contribute to.",
      },
      {
        name: "Privacy Walls",
        desc: "We never share family data across members without explicit consent. Teenage journals stay private. Period.",
      },
      {
        name: "Unified Billing",
        desc: "One family subscription covers everyone. Add or remove members anytime.",
      },
    ],
  },
];

// ── Trust pillars ────────────────────────────────────────────────────────────

const TRUST_PILLARS = [
  {
    title: "No cross-member data sharing",
    desc: "Each family member's data is isolated by default. Sharing requires explicit, revocable consent from both parties.",
  },
  {
    title: "No training on your family's data",
    desc: "Your conversations are never used to train our models. Your family's private moments stay private.",
  },
  {
    title: "Encrypted at rest and in transit",
    desc: "AES-256 encryption for stored data. TLS 1.3 for every connection. No exceptions.",
  },
  {
    title: "You own your data. Always.",
    desc: "Export everything anytime. Delete everything anytime. No dark patterns, no retention games.",
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function ForFamilies() {
  return (
    <div className="min-h-screen" style={{ background: DEEP }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.10) 0%, transparent 65%)",
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative">
          <p
            className="text-xs font-bold tracking-[0.3em] uppercase mb-4"
            style={{ color: `${GOLD}b3` }}
          >
            For Families
          </p>
          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            AI Your Family <span style={{ color: GOLD }}>Can Trust</span>
          </h1>
          <p
            className="text-lg leading-relaxed max-w-xl mx-auto mb-10"
            style={{ color: MUTED }}
          >
            Guardian protection for every generation. From grandparents to
            children, every family member gets a companion that remembers,
            protects, and respects their sovereignty.
          </p>
          <Link
            href="/hatch"
            className="inline-block px-10 py-4 rounded-full text-sm font-bold transition-all hover:scale-105"
            style={{ background: GOLD, color: DEEP }}
          >
            Protect your family
          </Link>
        </div>
      </section>

      {/* ── Family Sections ───────────────────────────────────────────── */}
      {FAMILY_SECTIONS.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          className="py-20 px-6"
          style={{ background: i % 2 === 0 ? SURFACE : DEEP }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-3xl mb-3 block">{section.icon}</span>
              <h2
                className="text-3xl font-black mb-2"
                style={{ color: CREAM }}
              >
                {section.title}
              </h2>
              <p style={{ color: MUTED }}>{section.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.features.map((feature) => (
                <div
                  key={feature.name}
                  className="rounded-xl p-6"
                  style={{
                    background: i % 2 === 0 ? DEEP : SURFACE,
                    border: `1px solid ${FAINT}`,
                  }}
                >
                  <h3
                    className="text-base font-bold mb-2"
                    style={{ color: GOLD }}
                  >
                    {feature.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: MUTED }}
                  >
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── Privacy Guarantee ─────────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ background: SURFACE }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-xs font-bold tracking-[0.3em] uppercase mb-3"
              style={{ color: GOLD }}
            >
              Our Promise
            </p>
            <h2
              className="text-3xl font-black mb-3"
              style={{ color: CREAM }}
            >
              Family Privacy Guarantee
            </h2>
            <p
              className="max-w-2xl mx-auto"
              style={{ color: MUTED, lineHeight: 1.7 }}
            >
              We never share family data across members without consent. Every
              family member is sovereign over their own data, their own
              conversations, and their own companion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {TRUST_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-xl p-6 flex gap-4"
                style={{ background: DEEP, border: `1px solid ${FAINT}` }}
              >
                <span
                  className="text-lg flex-shrink-0 mt-0.5"
                  style={{ color: GOLD }}
                >
                  &#10003;
                </span>
                <div>
                  <h4
                    className="text-sm font-bold mb-1"
                    style={{ color: CREAM }}
                  >
                    {pillar.title}
                  </h4>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: MUTED }}
                  >
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl font-black mb-12"
            style={{ color: CREAM }}
          >
            Getting Started
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Create your family",
                desc: "Sign up and invite family members. Everyone gets their own companion.",
              },
              {
                step: "2",
                title: "Set guardian levels",
                desc: "Configure age-appropriate protections for children and care settings for elders.",
              },
              {
                step: "3",
                title: "Start talking",
                desc: "Each companion learns and remembers. Your family's AI grows with you.",
              },
            ].map((item) => (
              <div key={item.step}>
                <div
                  className="w-10 h-10 rounded-full mx-auto mb-4 flex items-center justify-center text-sm font-black"
                  style={{ background: `${GOLD}20`, color: GOLD }}
                >
                  {item.step}
                </div>
                <h3
                  className="text-base font-bold mb-2"
                  style={{ color: CREAM }}
                >
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: MUTED }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────── */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: SURFACE }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl font-black mb-4"
            style={{ color: CREAM }}
          >
            Your family deserves AI that cares.
          </h2>
          <p className="mb-8" style={{ color: MUTED }}>
            Not AI that harvests. Not AI that forgets. A companion for every
            generation, with guardian protection built into every conversation.
          </p>
          <Link
            href="/hatch"
            className="inline-block px-10 py-4 rounded-full text-sm font-bold transition-all hover:scale-105"
            style={{ background: GOLD, color: DEEP }}
          >
            Protect your family
          </Link>
        </div>
      </section>
    </div>
  );
}
