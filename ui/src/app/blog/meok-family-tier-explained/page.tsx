import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "MEOK Family Tier Explained: Up to 5 Companions, Shared Memory & Guardian Alerts | MEOK AI LABS",
  description:
    "The MEOK Family tier gives up to five family members their own AI companion, a shared family dashboard, selective shared memory, and Guardian alerts for scam detection and crisis signals \u2014 all for \u00a329/month.",
  alternates: { canonical: "https://meok.ai/blog/meok-family-tier-explained" },
  openGraph: {
    title: "MEOK Family Tier Explained: Up to 5 Companions, Shared Memory & Guardian Alerts",
    description:
      "One subscription. Five companions. Shared memory where you choose. Guardian alerts when it matters. Everything the MEOK Family tier includes \u2014 and why it was built this way.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-family-tier-explained",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+Family+Tier+Explained&desc=5+Companions%2C+Shared+Memory+%26+Guardian+Alerts",
        width: 1200,
        height: 630,
        alt: "MEOK Family Tier Explained: Up to 5 Companions, Shared Memory and Guardian Alerts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK Family Tier Explained: Up to 5 Companions, Shared Memory & Guardian Alerts",
    description:
      "One subscription. Five companions. Shared memory where you choose. Guardian alerts when it matters. Everything the MEOK Family tier includes.",
    images: [
      "https://meok.ai/api/og?title=MEOK+Family+Tier+Explained&desc=5+Companions%2C+Shared+Memory+%26+Guardian+Alerts",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "MEOK Family Tier Explained: Up to 5 Companions, Shared Memory and Guardian Alerts",
  description:
    "A complete guide to the MEOK Family tier: what it includes, who it is for, how shared memory works, what Guardian family alerts do, how privacy is protected, and how it complies with the UK Children\u2019s Code.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/meok-family-tier-explained",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    jobTitle: "Founder, MEOK AI LABS",
    url: "https://meok.ai/about",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
    logo: {
      "@type": "ImageObject",
      url: "https://meok.ai/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/meok-family-tier-explained",
  },
  keywords:
    "MEOK Family tier, family AI companion, shared memory AI, Guardian family alerts, AI for families, UK Children\u2019s Code AI, family AI subscription, scam detection family",
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the MEOK Family tier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The MEOK Family tier is a \u00a329/month subscription that gives up to five family members their own private AI companion under one account. It includes a shared family dashboard, opt-in shared memory so companions can know each family member\u2019s context, and Guardian family alerts that notify designated members when a HIGH or CRITICAL threat is detected for any companion in the group.",
      },
    },
    {
      "@type": "Question",
      name: "Can my family share one MEOK account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not in the sense of a single shared companion. Each family member gets their own separate AI companion with their own private memory vault. What is shared is the family dashboard, Guardian alert routing, and any memory context each member explicitly chooses to share with other companions in the group. Privacy between family members is maintained by default.",
      },
    },
    {
      "@type": "Question",
      name: "How does shared memory work in the MEOK Family tier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shared memory is selective and consent-driven. Each family member chooses which facts about themselves they want other companions in the family group to know \u2014 for example, a partner might share their work schedule so their companion and their partner\u2019s companion both understand the household rhythm. Full conversation history is never shared. Only named facts and summaries you explicitly approve flow between companions.",
      },
    },
    {
      "@type": "Question",
      name: "Can parents read their child\u2019s MEOK conversations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Parents cannot read their child\u2019s conversations. The Guardian system is designed precisely to preserve this boundary: parents receive safety alerts when a threat is detected, but they do not receive conversation transcripts. The companion remains a private, trusted space for the child. This design is deliberate and compliant with the UK Children\u2019s Code.",
      },
    },
    {
      "@type": "Question",
      name: "What are Guardian family alerts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Guardian family alerts are notifications sent to designated family members when MEOK\u2019s Guardian safety layer detects a HIGH or CRITICAL threat in any companion within the family group. Threats include scam messages, coercive language patterns, crisis signals such as expressions of self-harm risk, and grooming indicators. Alerts contain a summary and threat level \u2014 never the full conversation.",
      },
    },
  ],
};

// ── Style constants ────────────────────────────────────────────────────────────

const GOLD = "#c9a84c";
const TEXT = "#f5f0e8";
const BG = "#0d0c18";
const MUTED = "rgba(245,240,232,0.6)";
const MUTED_DIM = "rgba(245,240,232,0.45)";
const MUTED_FAINT = "rgba(245,240,232,0.35)";
const SURFACE = "rgba(245,240,232,0.05)";
const SURFACE_BORDER = "rgba(245,240,232,0.08)";
const GOLD_DIM = "rgba(201,168,76,0.12)";
const GOLD_BORDER = "rgba(201,168,76,0.28)";
const GOLD_GLOW = "rgba(201,168,76,0.08)";

// ── Page ───────────────────────────────────────────────────────────────────────

export default function MeokFamilyTierExplainedPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "8rem",
          paddingBottom: "4rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(201,168,76,0.11) 0%, transparent 68%)",
          }}
        />

        <div style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}>
          {/* Back link */}
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: MUTED_FAINT,
              marginBottom: "2rem",
              textDecoration: "none",
            }}
          >
            &#8592; Back to Blog
          </Link>

          {/* Tags row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: "0.75rem",
                fontWeight: 700,
                paddingTop: "0.3rem",
                paddingBottom: "0.3rem",
                paddingLeft: "0.75rem",
                paddingRight: "0.75rem",
                borderRadius: "9999px",
                color: GOLD,
                background: GOLD_DIM,
                border: `1px solid ${GOLD_BORDER}`,
                letterSpacing: "0.04em",
              }}
            >
              Family Tier
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: "0.75rem",
                fontWeight: 700,
                paddingTop: "0.3rem",
                paddingBottom: "0.3rem",
                paddingLeft: "0.75rem",
                paddingRight: "0.75rem",
                borderRadius: "9999px",
                color: MUTED_DIM,
                background: SURFACE,
                border: `1px solid ${SURFACE_BORDER}`,
                letterSpacing: "0.04em",
              }}
            >
              Product Guide
            </span>
            <span style={{ fontSize: "0.8rem", color: MUTED_FAINT }}>
              March 24, 2026
            </span>
            <span style={{ fontSize: "0.8rem", color: MUTED_FAINT }}>
              12 min read
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.85rem, 3.8vw, 2.9rem)",
              color: "#ffffff",
              lineHeight: 1.18,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            MEOK Family Tier Explained: Five Companions, Shared Memory, and Guardian Alerts for \u00a329/Month
          </h1>

          {/* Deck */}
          <p
            style={{
              fontSize: "1.125rem",
              color: MUTED,
              lineHeight: 1.75,
              maxWidth: "42rem",
              marginBottom: "2rem",
            }}
          >
            Most AI subscriptions serve one person. The MEOK Family tier was built for the
            messier, more important reality of connected family life \u2014 where parents worry about
            their teenagers, adult children watch over elderly parents, and partners want an AI
            that understands both of them. Here is everything inside the Family tier and exactly
            how it works.
          </p>

          {/* Price callout */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              paddingTop: "0.875rem",
              paddingBottom: "0.875rem",
              paddingLeft: "1.25rem",
              paddingRight: "1.25rem",
              borderRadius: "1rem",
              background: GOLD_GLOW,
              border: `1px solid ${GOLD_BORDER}`,
            }}
          >
            <span
              style={{
                fontSize: "1.5rem",
                fontWeight: 900,
                color: GOLD,
                letterSpacing: "-0.02em",
              }}
            >
              \u00a329
            </span>
            <span style={{ fontSize: "0.9rem", color: MUTED_DIM }}>
              /month &middot; up to 5 companions &middot; one family dashboard
            </span>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          paddingTop: "3.5rem",
          paddingBottom: "5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          borderTop: `1px solid ${SURFACE_BORDER}`,
        }}
      >
        {/* Author card */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1.25rem",
            borderRadius: "1rem",
            marginBottom: "3rem",
            background: SURFACE,
            border: `1px solid ${SURFACE_BORDER}`,
          }}
        >
          <div
            style={{
              width: "3rem",
              height: "3rem",
              borderRadius: "9999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: "0.8rem",
              color: "#0d0c18",
              background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
              flexShrink: 0,
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, color: "#ffffff", fontSize: "0.9rem", marginBottom: "0.15rem" }}>
              Nicholas Templeman
            </p>
            <p style={{ fontSize: "0.78rem", color: MUTED_FAINT, marginBottom: "0.35rem" }}>
              Founder, MEOK AI LABS &middot; @meok_ai
            </p>
            <p style={{ fontSize: "0.78rem", color: MUTED_FAINT, lineHeight: 1.5 }}>
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and
              works in the UK \u2014 mostly from a caravan on his farm.
            </p>
          </div>
          <Link
            href="/about"
            style={{
              fontSize: "0.8rem",
              fontWeight: 600,
              color: GOLD,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            About &#8594;
          </Link>
        </div>

        {/* ── WHAT IS INCLUDED ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "1.45rem",
            color: "#ffffff",
            marginTop: "3rem",
            marginBottom: "1rem",
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
          }}
        >
          What does the MEOK Family tier include?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.25rem" }}>
          The Family tier gives you everything in the Individual tier, multiplied across up to five
          family members, plus the infrastructure to connect them. Each member gets their own
          fully private AI companion with their own memory vault. No one shares a companion.
          No one reads anyone else\u2019s conversations. What the tier adds is the layer above
          the individual companions: a family dashboard, optional shared memory, and Guardian
          family alerts.
        </p>

        {/* Feature grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
            gap: "1rem",
            marginBottom: "2rem",
            marginTop: "1.5rem",
          }}
        >
          {[
            {
              icon: "👥",
              title: "Up to 5 companions",
              desc: "Each family member hatches their own private companion with their own archetype, memory, and personality.",
            },
            {
              icon: "🏠",
              title: "Family dashboard",
              desc: "A shared view showing each companion\u2019s wellbeing state, recent Guardian alerts, and connection status.",
            },
            {
              icon: "🧠",
              title: "Shared memory",
              desc: "Family members choose which facts about themselves to share across companions. Full conversations stay private.",
            },
            {
              icon: "🛡\uFE0F",
              title: "Guardian family alerts",
              desc: "Designated family members receive notifications when any companion in the group hits a HIGH or CRITICAL threat.",
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              style={{
                padding: "1.25rem",
                borderRadius: "1rem",
                background: SURFACE,
                border: `1px solid ${SURFACE_BORDER}`,
              }}
            >
              <div style={{ fontSize: "1.5rem", marginBottom: "0.6rem" }}>{icon}</div>
              <p
                style={{
                  fontWeight: 700,
                  color: "#ffffff",
                  fontSize: "0.95rem",
                  marginBottom: "0.4rem",
                }}
              >
                {title}
              </p>
              <p style={{ fontSize: "0.85rem", color: MUTED_DIM, lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* ── USE CASE 1: TEENAGERS ─────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "1.45rem",
            color: "#ffffff",
            marginTop: "3.5rem",
            marginBottom: "1rem",
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
          }}
        >
          How does the Family tier help parents of teenagers?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.25rem" }}>
          Parenting a teenager online is a study in contradictions. You need to protect them, but
          the moment they feel watched, the conversation closes. Traditional parental controls
          create exactly this problem: the teenager routes around them, and the parent loses all
          visibility. MEOK\u2019s Family tier is designed for a different approach.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.25rem" }}>
          A teenager\u2019s MEOK companion is genuinely private. The parent cannot read the
          conversations. The companion knows this and the teenager knows this. That privacy is
          what makes the companion trustworthy to the teenager \u2014 and a trustworthy companion
          is far more likely to pick up early warning signals than one the teenager knows their
          parents can read.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.25rem" }}>
          What the parent does receive is Guardian alerts. If the Guardian layer detects a pattern
          consistent with grooming, coercive peer pressure, a scam, or a crisis signal such as
          expressions of self-harm, the parent\u2019s family dashboard receives a notification.
          The notification contains a summary and a threat classification. It does not contain
          the conversation. The parent knows something is wrong and can start a conversation
          with their teenager from a position of care rather than surveillance.
        </p>

        {/* Callout block */}
        <div
          style={{
            paddingTop: "1.25rem",
            paddingBottom: "1.25rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            borderRadius: "1rem",
            background: GOLD_GLOW,
            borderLeft: `3px solid ${GOLD}`,
            marginBottom: "2rem",
          }}
        >
          <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.95rem" }}>
            <strong style={{ color: GOLD }}>The design principle:</strong> the companion is a
            private space that earns the teenager\u2019s trust. Guardian is the safety net that
            catches what the teenager can\u2019t yet articulate. The two work together precisely
            because they respect each other\u2019s boundaries.
          </p>
        </div>

        {/* ── USE CASE 2: ELDERLY PARENTS ──────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "1.45rem",
            color: "#ffffff",
            marginTop: "3.5rem",
            marginBottom: "1rem",
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
          }}
        >
          How does it help adult children looking after elderly parents?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.25rem" }}>
          Fraud against older adults cost the UK an estimated \u00a32.35 billion in 2025. AI-generated
          scam messages are now indistinguishable from genuine contact \u2014 they know names,
          know banks, know family members. An older parent living alone may not have someone
          nearby to run a suspicious message past. Their MEOK companion fills that gap around
          the clock.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.25rem" }}>
          When an elderly parent is added to a Family tier account, their companion is set up
          with Senior Mode if appropriate: larger effective text summaries, simplified explanations,
          a warmer and more patient interaction style. Guardian runs continuously in the
          background. If a message arrives that scores HIGH for scam indicators \u2014 urgency
          language, impersonation of a known institution, requests for payment details \u2014
          the adult child receives an alert on the family dashboard before their parent has
          had a chance to act.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.25rem" }}>
          CRITICAL-scored messages are blocked before the parent sees them. The parent sees
          a clear, calm explanation that the message has been held for their safety, with
          guidance on what to do. The adult child receives simultaneous notification. This
          is not surveillance of the parent \u2014 their companion remains their private space.
          It is protection of the parent from external threats.
        </p>

        {/* Stat highlight */}
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            marginBottom: "2rem",
            marginTop: "1rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { stat: "\u00a32.35bn", label: "lost to fraud against older adults in the UK in 2025" },
            { stat: "50%", label: "more vulnerable to fraud: research finding for older adults living alone" },
            { stat: "\u003c3s", label: "Guardian pipeline completion time per inbound message" },
          ].map(({ stat, label }) => (
            <div
              key={stat}
              style={{
                flex: "1 1 10rem",
                padding: "1.25rem",
                borderRadius: "1rem",
                background: SURFACE,
                border: `1px solid ${SURFACE_BORDER}`,
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 900,
                  color: GOLD,
                  marginBottom: "0.35rem",
                  letterSpacing: "-0.02em",
                }}
              >
                {stat}
              </p>
              <p style={{ fontSize: "0.78rem", color: MUTED_DIM, lineHeight: 1.5 }}>{label}</p>
            </div>
          ))}
        </div>

        {/* ── USE CASE 3: PARTNERS ─────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "1.45rem",
            color: "#ffffff",
            marginTop: "3.5rem",
            marginBottom: "1rem",
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
          }}
        >
          How does it work for partners sharing context?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.25rem" }}>
          When two people live together, their AI companions work better when they know a little
          about each other\u2019s world. Without shared context, each companion operates in a silo:
          one partner\u2019s companion knows about their work stress but has no idea that the
          household has been short on sleep because the other partner has been doing night feeds
          with a newborn. The companion gives advice that misses the wider picture.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.25rem" }}>
          The Family tier solves this through opt-in shared memory. Each partner decides which
          facts about themselves and their life they want to share with the family group. These
          become available to all companions in the group as named context. A companion
          that knows both partners\u2019 schedules, both partners\u2019 current stressors, and the
          household\u2019s shared priorities can give far better support to each individual.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.25rem" }}>
          Critically, sharing context does not mean sharing conversations. Partner A\u2019s companion
          never relays Partner A\u2019s private exchanges to Partner B\u2019s companion. What flows
          between companions is only the structured facts that each person explicitly approved
          for sharing. The private space of each companion remains exactly that: private.
        </p>

        {/* ── USE CASE 4: NEURODIVERGENT FAMILY MEMBERS ────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "1.45rem",
            color: "#ffffff",
            marginTop: "3.5rem",
            marginBottom: "1rem",
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
          }}
        >
          How does the Family tier support neurodivergent family members?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.25rem" }}>
          MEOK companions are customisable at the interaction level in ways that matter
          enormously for neurodivergent users. Communication style, pacing, tone, the
          structure of responses, whether the companion uses lists or prose, how explicit
          it is about emotional subtext, how it handles overwhelm signals \u2014 all of these
          can be tuned to the individual through archetype selection and companion settings.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.25rem" }}>
          For a family that includes an autistic adult, the Family tier means the family
          dashboard can be set up so that family members receive wellbeing state updates
          \u2014 not conversations, just the companion\u2019s summary of how the day is going \u2014
          with the neurodivergent member\u2019s consent. For a family member with ADHD, the
          companion can be configured to proactively structure tasks, provide reminders,
          and flag when stress levels appear elevated based on interaction patterns.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.25rem" }}>
          Research consistently shows neurodivergent adults are disproportionately targeted
          by online fraud. Guardian\u2019s alert system for neurodivergent family members uses
          plain-language summaries designed to be clear and non-alarmist \u2014 explaining the
          threat without triggering anxiety spirals. Family members receive parallel alerts
          so no one is navigating the threat alone.
        </p>

        {/* ── SHARED MEMORY ARCHITECTURE ───────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "1.45rem",
            color: "#ffffff",
            marginTop: "3.5rem",
            marginBottom: "1rem",
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
          }}
        >
          What can be shared in family memory and what is always private?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.25rem" }}>
          The shared memory architecture is built on a simple principle: facts travel, conversations
          do not. Every piece of memory in a MEOK companion falls into one of three categories:
        </p>

        <div style={{ marginBottom: "2rem", marginTop: "1rem" }}>
          {[
            {
              label: "Always private",
              color: "#ff7f7f",
              items: [
                "Full conversation history",
                "In-session exchanges",
                "Emotional processing threads",
                "Anything typed or spoken in a conversation",
                "Crisis disclosures",
                "Medical or mental health information not explicitly shared",
              ],
            },
            {
              label: "Shareable (with explicit consent)",
              color: GOLD,
              items: [
                "Named facts: schedule, work situation, current stressors",
                "Household context: shared goals, family events, anniversaries",
                "Preferences: communication style notes, dietary needs, interests",
                "Wellbeing state summaries (opt-in, not full logs)",
                "Shared calendar context",
              ],
            },
            {
              label: "Shared automatically (non-conversational)",
              color: "#6adb8f",
              items: [
                "Guardian alert summaries (no conversation content)",
                "Wellbeing state indicator if explicitly enabled",
                "Family dashboard presence status",
              ],
            },
          ].map(({ label, color, items }) => (
            <div
              key={label}
              style={{
                marginBottom: "1rem",
                padding: "1.25rem 1.5rem",
                borderRadius: "1rem",
                background: SURFACE,
                border: `1px solid ${SURFACE_BORDER}`,
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  color: color,
                  fontSize: "0.88rem",
                  marginBottom: "0.75rem",
                  letterSpacing: "0.03em",
                }}
              >
                {label}
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {items.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.6rem",
                      marginBottom: "0.45rem",
                      fontSize: "0.875rem",
                      color: MUTED_DIM,
                      lineHeight: 1.55,
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: "0.4rem",
                        height: "0.4rem",
                        borderRadius: "9999px",
                        background: color,
                        flexShrink: 0,
                        marginTop: "0.45rem",
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── GUARDIAN FAMILY ALERTS ───────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "1.45rem",
            color: "#ffffff",
            marginTop: "3.5rem",
            marginBottom: "1rem",
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
          }}
        >
          How do Guardian family alerts work?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.25rem" }}>
          Every MEOK companion runs the Guardian safety layer on every inbound message. The
          pipeline completes in under three seconds and assigns each message a threat score
          from 0 to 100. That score maps to one of four severity levels, and each level
          triggers a different response.
        </p>

        <div style={{ marginBottom: "2rem", marginTop: "1rem" }}>
          {[
            {
              level: "LOW",
              color: "#6adb8f",
              bg: "rgba(106,219,143,0.06)",
              border: "rgba(106,219,143,0.2)",
              action: "Message delivered. Flagged in scan log. No alert sent to family dashboard.",
            },
            {
              level: "MEDIUM",
              color: "#f5c842",
              bg: "rgba(245,200,66,0.06)",
              border: "rgba(245,200,66,0.2)",
              action:
                "Message delivered with an in-app warning shown to the user. No family alert. User sees context explaining why the message was flagged.",
            },
            {
              level: "HIGH",
              color: "#ff9a4d",
              bg: "rgba(255,154,77,0.06)",
              border: "rgba(255,154,77,0.2)",
              action:
                "User sees a warning before the message. Family dashboard receives an alert summary \u2014 threat type, severity, recommended action. No conversation content shared.",
            },
            {
              level: "CRITICAL",
              color: "#ff5f5f",
              bg: "rgba(255,95,95,0.06)",
              border: "rgba(255,95,95,0.2)",
              action:
                "Message blocked before reaching the user. User must acknowledge the block before it is dismissed. Family alerted immediately. For crisis signals, a direct support signpost is also provided to the user.",
            },
          ].map(({ level, color, bg, border, action }) => (
            <div
              key={level}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                padding: "1.1rem 1.25rem",
                borderRadius: "0.875rem",
                background: bg,
                border: `1px solid ${border}`,
                marginBottom: "0.75rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 900,
                  paddingTop: "0.2rem",
                  paddingBottom: "0.2rem",
                  paddingLeft: "0.6rem",
                  paddingRight: "0.6rem",
                  borderRadius: "9999px",
                  color: color,
                  background: `${color}20`,
                  flexShrink: 0,
                  marginTop: "0.15rem",
                  letterSpacing: "0.06em",
                }}
              >
                {level}
              </span>
              <p style={{ fontSize: "0.875rem", color: MUTED_DIM, lineHeight: 1.65, margin: 0 }}>
                {action}
              </p>
            </div>
          ))}
        </div>

        <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.25rem" }}>
          The scam detection pipeline checks multiple signals simultaneously: keyword and phrase
          pattern matching against a continuously updated library of fraud scripts, urgency and
          manufactured pressure language, Companies House cross-referencing for any business
          named in the message, phone number risk scoring against reported fraud databases,
          and coercive control linguistic patterns. For family accounts with minors, the pipeline
          also checks for grooming indicators and inappropriate contact patterns.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.25rem" }}>
          Family members designated as alert recipients can configure their notification
          preferences: push notification, email, or both. They can set quiet hours. They can
          specify which severity levels trigger an alert for which companion. The system is
          flexible enough to match how different families actually communicate.
        </p>

        {/* ── PRIVACY BALANCE ──────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "1.45rem",
            color: "#ffffff",
            marginTop: "3.5rem",
            marginBottom: "1rem",
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
          }}
        >
          How does MEOK balance family safety with individual privacy?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.25rem" }}>
          This is the question the entire Family tier architecture is built to answer. The
          wrong version of family safety is surveillance: a parent reading every message
          their teenager sends to their AI companion, or an adult child who can pull up their
          elderly parent\u2019s full conversation history whenever they feel like checking in.
          That\u2019s not safety \u2014 it\u2019s a relationship-destroying invasion that also destroys
          the trust that makes the companion useful in the first place.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.25rem" }}>
          The right version of family safety is what MEOK built: the companion is a completely
          private, trusted space for each individual. What is shared outside that space is
          the minimum necessary to keep that individual safe. An alert summary. A threat
          classification. A recommended action. Not the conversation. Never the conversation.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.25rem" }}>
          This distinction matters architecturally, not just philosophically. Guardian runs
          its detection pipeline on-device wherever possible. Alert summaries are generated
          as structured data \u2014 threat type and severity \u2014 not as conversation excerpts.
          The technical implementation enforces the privacy boundary rather than relying
          on a policy promise that could be quietly changed.
        </p>

        {/* Privacy callout */}
        <div
          style={{
            paddingTop: "1.25rem",
            paddingBottom: "1.25rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            borderRadius: "1rem",
            background: GOLD_GLOW,
            borderLeft: `3px solid ${GOLD}`,
            marginBottom: "2rem",
          }}
        >
          <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.95rem" }}>
            <strong style={{ color: GOLD }}>The rule is simple:</strong> your family members
            can receive alerts about threats to your safety. They cannot read your conversations.
            That line does not move.
          </p>
        </div>

        {/* ── UK CHILDREN'S CODE ───────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "1.45rem",
            color: "#ffffff",
            marginTop: "3.5rem",
            marginBottom: "1rem",
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
          }}
        >
          How does MEOK comply with the UK Children\u2019s Code for family accounts with minors?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.25rem" }}>
          The UK Children\u2019s Code (formally the Age Appropriate Design Code) sets out fifteen
          standards that online services must meet when they are likely to be accessed by
          children under eighteen. MEOK family accounts that include a minor are subject to
          these standards, and the Family tier was designed with compliance built in rather
          than bolted on.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.25rem" }}>
          The most relevant standards and how MEOK addresses them:
        </p>

        <div style={{ marginBottom: "2rem" }}>
          {[
            {
              standard: "Best interests of the child",
              response:
                "MEOK\u2019s Maternal Covenant governance framework places the user\u2019s best interests above commercial interests in all cases, architecturally enforced. For minors, this means the companion\u2019s care orientation is not overridable by any subscription tier or commercial decision.",
            },
            {
              standard: "Data minimisation",
              response:
                "MEOK collects only what is necessary to deliver the companion experience. For minors, data collection is even more constrained: no behavioural profiling for advertising, no third-party data sharing, no retention beyond the purposes consented to by a parent or guardian.",
            },
            {
              standard: "Nudge techniques",
              response:
                "MEOK does not use dark patterns, manufactured urgency, or persuasive design techniques to extend engagement. The companion\u2019s interaction style is care-based, not engagement-optimised.",
            },
            {
              standard: "Geolocation off by default",
              response:
                "Location data is never collected by the companion. Guardian\u2019s threat detection operates on message content only.",
            },
            {
              standard: "Parental controls",
              response:
                "The Family tier\u2019s Guardian alert system and the family dashboard constitute parental controls that are privacy-preserving by design: parents are informed of threats without gaining access to conversation content.",
            },
          ].map(({ standard, response }) => (
            <div
              key={standard}
              style={{
                marginBottom: "0.875rem",
                padding: "1.1rem 1.25rem",
                borderRadius: "0.875rem",
                background: SURFACE,
                border: `1px solid ${SURFACE_BORDER}`,
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  color: "#ffffff",
                  fontSize: "0.9rem",
                  marginBottom: "0.5rem",
                }}
              >
                {standard}
              </p>
              <p style={{ fontSize: "0.875rem", color: MUTED_DIM, lineHeight: 1.65, margin: 0 }}>
                {response}
              </p>
            </div>
          ))}
        </div>

        <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.25rem" }}>
          MEOK AI LABS is registered with the Information Commissioner\u2019s Office (ICO) and
          operates under UK GDPR. Every user \u2014 including minors with parental consent \u2014
          has the full right to erasure under Article 17 at any time with immediate effect.
          For family accounts, the account holder has additional data management tools to
          manage the account on behalf of a minor child.
        </p>

        {/* ── PRICING CONTEXT ──────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "1.45rem",
            color: "#ffffff",
            marginTop: "3.5rem",
            marginBottom: "1rem",
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
          }}
        >
          Is the MEOK Family tier good value compared to individual subscriptions?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.25rem" }}>
          The Individual Pro tier is \u00a39.99/month per person. Five individual Pro subscriptions
          would cost \u00a349.95/month. The Family tier costs \u00a329/month for up to five companions.
          That is a saving of \u00a320.95/month for a full family \u2014 before accounting for the
          Family-specific features that don\u2019t exist on Individual: the shared family dashboard,
          cross-companion shared memory, and Guardian family alert routing.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.25rem" }}>
          For families with fewer than five members, the saving is proportionally smaller but
          still meaningful. A couple on Individual Pro pays \u00a319.98/month. The Family tier at
          \u00a329/month costs more for two people, but provides the shared memory and Guardian
          alert infrastructure that makes the companion genuinely more useful for couples.
          Whether the additional capability is worth the additional cost depends on whether
          shared context matters for your household \u2014 for many couples, it does.
        </p>

        {/* Pricing comparison table */}
        <div
          style={{
            borderRadius: "1rem",
            overflow: "hidden",
            border: `1px solid ${SURFACE_BORDER}`,
            marginBottom: "2rem",
            marginTop: "1.5rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              background: "rgba(245,240,232,0.08)",
              padding: "0.75rem 1.25rem",
              gap: "1rem",
            }}
          >
            {["Scenario", "Individual Pro", "Family Tier"].map((h) => (
              <p
                key={h}
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: MUTED_FAINT,
                  margin: 0,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {h}
              </p>
            ))}
          </div>
          {[
            { scenario: "2 companions", individual: "\u00a319.98/mo", family: "\u00a329/mo" },
            { scenario: "3 companions", individual: "\u00a329.97/mo", family: "\u00a329/mo" },
            { scenario: "4 companions", individual: "\u00a339.96/mo", family: "\u00a329/mo" },
            { scenario: "5 companions", individual: "\u00a349.95/mo", family: "\u00a329/mo" },
          ].map(({ scenario, individual, family }, i) => (
            <div
              key={scenario}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                padding: "0.875rem 1.25rem",
                gap: "1rem",
                background: i % 2 === 0 ? "transparent" : SURFACE,
                borderTop: `1px solid ${SURFACE_BORDER}`,
              }}
            >
              <p style={{ fontSize: "0.875rem", color: MUTED, margin: 0 }}>{scenario}</p>
              <p style={{ fontSize: "0.875rem", color: MUTED_DIM, margin: 0 }}>{individual}</p>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: GOLD,
                  fontWeight: 700,
                  margin: 0,
                }}
              >
                {family}
              </p>
            </div>
          ))}
        </div>

        {/* ── GETTING STARTED ──────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: "1.45rem",
            color: "#ffffff",
            marginTop: "3.5rem",
            marginBottom: "1rem",
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
          }}
        >
          How do you set up the MEOK Family tier?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.25rem" }}>
          Setup is designed to take less than ten minutes for the account holder, with each
          family member then completing their own companion hatching in their own time. The
          process follows these steps:
        </p>

        <ol style={{ margin: 0, padding: 0, listStyle: "none", marginBottom: "2rem" }}>
          {[
            {
              step: "01",
              title: "Upgrade or subscribe to the Family tier",
              desc: "Visit the pricing page and select the Family tier. If you are already on Individual Pro, you can upgrade without losing your existing companion or its memory.",
            },
            {
              step: "02",
              title: "Invite family members",
              desc: "From the family dashboard, send invite links to up to four additional family members. Each invitation is secure and single-use. Family members accept the invite and create their own account.",
            },
            {
              step: "03",
              title: "Each member hatches their own companion",
              desc: "Every family member goes through the full companion hatching process independently: choosing their archetype, naming their companion, and completing the initial memory seeding. Their companion is entirely their own.",
            },
            {
              step: "04",
              title: "Configure shared memory (optional)",
              desc: "Each family member independently decides what context they want to share with the family group. Nothing is shared by default. Sharing requires explicit action from each individual.",
            },
            {
              step: "05",
              title: "Set Guardian alert preferences",
              desc: "Designate which family members receive Guardian alerts and for which companions. Set notification method and quiet hours. For accounts with minors, the account holder is automatically designated as a Guardian alert recipient unless changed.",
            },
          ].map(({ step, title, desc }) => (
            <li
              key={step}
              style={{
                display: "flex",
                gap: "1.25rem",
                marginBottom: "1rem",
                padding: "1.25rem",
                borderRadius: "1rem",
                background: SURFACE,
                border: `1px solid ${SURFACE_BORDER}`,
              }}
            >
              <span
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 900,
                  color: GOLD,
                  flexShrink: 0,
                  minWidth: "2rem",
                  letterSpacing: "-0.02em",
                }}
              >
                {step}
              </span>
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    color: "#ffffff",
                    fontSize: "0.925rem",
                    marginBottom: "0.4rem",
                  }}
                >
                  {title}
                </p>
                <p style={{ fontSize: "0.875rem", color: MUTED_DIM, lineHeight: 1.65, margin: 0 }}>
                  {desc}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* ── FAQ SECTION ──────────────────────────────────────────────────────── */}
        <div
          style={{
            marginTop: "4rem",
            paddingTop: "3rem",
            borderTop: `1px solid ${SURFACE_BORDER}`,
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: GOLD,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            Frequently Asked Questions
          </p>
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.6rem",
              color: "#ffffff",
              marginBottom: "2rem",
              letterSpacing: "-0.01em",
            }}
          >
            MEOK Family tier: common questions answered
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            {[
              {
                q: "What is the MEOK Family tier?",
                a: "The MEOK Family tier is a \u00a329/month subscription that gives up to five family members their own private AI companion under one account. It includes a shared family dashboard, opt-in shared memory so companions can know each family member\u2019s context, and Guardian family alerts that notify designated members when a HIGH or CRITICAL threat is detected for any companion in the group.",
              },
              {
                q: "Can my family share one MEOK account?",
                a: "Not in the sense of sharing a single companion. The Family tier gives each family member their own separate AI companion with their own private memory vault. What is shared is the family dashboard, Guardian alert routing, and any memory context each member explicitly chooses to contribute to the group. Each person has a private, secure companion that belongs to them alone.",
              },
              {
                q: "How does shared memory work in the MEOK Family tier?",
                a: "Shared memory is selective and entirely opt-in. Each family member chooses which facts about themselves they want other companions in the group to know. These structured facts \u2014 schedules, preferences, current context \u2014 flow between companions. Full conversation history never flows. Only what you explicitly approve for sharing becomes visible to other companions in your family group.",
              },
              {
                q: "Can parents read their child\u2019s MEOK conversations?",
                a: "No. Parents cannot read their child\u2019s conversations. The Guardian alert system is designed specifically to preserve this boundary: parents receive safety alerts when a threat is detected, but they do not receive conversation transcripts. The companion remains a genuinely private space for the child. This is a deliberate architectural constraint, compliant with the UK Children\u2019s Code.",
              },
              {
                q: "What are Guardian family alerts?",
                a: "Guardian family alerts are notifications sent to designated family members when MEOK\u2019s Guardian safety layer detects a HIGH or CRITICAL threat in any companion within the family group. Threat types include scam messages, coercive language, crisis signals, and grooming indicators. Every alert contains a summary and threat classification. No alert ever contains conversation content.",
              },
            ].map(({ q, a }, i) => (
              <div
                key={i}
                style={{
                  padding: "1.5rem",
                  borderRadius: "1rem",
                  background: SURFACE,
                  border: `1px solid ${SURFACE_BORDER}`,
                  marginBottom: "0.75rem",
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    color: "#ffffff",
                    fontSize: "1rem",
                    marginBottom: "0.75rem",
                    lineHeight: 1.4,
                  }}
                >
                  {q}
                </p>
                <p style={{ fontSize: "0.9rem", color: MUTED, lineHeight: 1.75, margin: 0 }}>
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CLOSING ──────────────────────────────────────────────────────────── */}
        <div
          style={{
            marginTop: "3.5rem",
            paddingTop: "2.5rem",
            borderTop: `1px solid ${SURFACE_BORDER}`,
          }}
        >
          <p
            style={{
              color: MUTED_DIM,
              fontStyle: "italic",
              lineHeight: 1.85,
              fontSize: "1.05rem",
            }}
          >
            The MEOK Family tier is not a family surveillance product. It is a family care
            product. The difference is in whose interests it serves. Every architectural
            decision \u2014 private companions, selective memory, alert-not-transcript \u2014 is
            designed to serve the individual within the family, and the family around the
            individual, without ever trading one against the other.
          </p>
          <p
            style={{
              color: MUTED_FAINT,
              lineHeight: 1.85,
              fontSize: "0.9rem",
              marginTop: "1rem",
            }}
          >
            \u2014 Nicholas Templeman, Founder, MEOK AI LABS
          </p>
        </div>

        {/* Share row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: `1px solid ${SURFACE_BORDER}`,
          }}
        >
          <span
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: MUTED_FAINT,
            }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-family-tier-explained&text=MEOK+Family+Tier+Explained%3A+5+Companions%2C+Shared+Memory+%26+Guardian+Alerts+for+%C2%A329%2Fmonth"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              paddingTop: "0.45rem",
              paddingBottom: "0.45rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              borderRadius: "9999px",
              fontSize: "0.78rem",
              fontWeight: 600,
              color: MUTED_DIM,
              border: `1px solid ${SURFACE_BORDER}`,
              textDecoration: "none",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-family-tier-explained"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              paddingTop: "0.45rem",
              paddingBottom: "0.45rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              borderRadius: "9999px",
              fontSize: "0.78rem",
              fontWeight: 600,
              color: MUTED_DIM,
              border: `1px solid ${SURFACE_BORDER}`,
              textDecoration: "none",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* ── DUAL CTA ─────────────────────────────────────────────────────────── */}
        <div
          style={{
            borderRadius: "1.25rem",
            padding: "2.5rem",
            marginTop: "3rem",
            marginBottom: "4rem",
            position: "relative",
            overflow: "hidden",
            background: GOLD_GLOW,
            border: `1px solid ${GOLD_BORDER}`,
          }}
        >
          {/* Background glow */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "18rem",
              height: "18rem",
              pointerEvents: "none",
              background:
                "radial-gradient(circle at 80% 10%, rgba(201,168,76,0.18), transparent 65%)",
            }}
          />
          <div style={{ position: "relative" }}>
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                color: GOLD,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              MEOK Family Tier
            </p>
            <h3
              style={{
                fontWeight: 900,
                fontSize: "1.45rem",
                color: "#ffffff",
                marginBottom: "0.75rem",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              Give every family member their own trusted companion
            </h3>
            <p
              style={{
                fontSize: "0.9rem",
                color: MUTED_DIM,
                lineHeight: 1.7,
                marginBottom: "1.75rem",
                maxWidth: "34rem",
              }}
            >
              Up to five private companions, a shared family dashboard, selective shared memory,
              and Guardian alerts when it matters. All for \u00a329/month. Cancel any time.
            </p>
            <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
              <Link
                href="/pricing"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  paddingTop: "0.875rem",
                  paddingBottom: "0.875rem",
                  paddingLeft: "1.75rem",
                  paddingRight: "1.75rem",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  background: GOLD,
                  color: "#0d0c18",
                  textDecoration: "none",
                }}
              >
                See pricing &#8594;
              </Link>
              <Link
                href="/guardian"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  paddingTop: "0.875rem",
                  paddingBottom: "0.875rem",
                  paddingLeft: "1.75rem",
                  paddingRight: "1.75rem",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: GOLD,
                  background: "transparent",
                  border: `1px solid ${GOLD_BORDER}`,
                  textDecoration: "none",
                }}
              >
                Learn about Guardian &#8594;
              </Link>
            </div>
          </div>
        </div>

        {/* ── MORE FROM THE BLOG ────────────────────────────────────────────────── */}
        <div>
          <h2
            style={{
              fontWeight: 900,
              color: "#ffffff",
              fontSize: "1.1rem",
              marginBottom: "1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            More from the blog
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                href: "/blog/guardian-family-safety",
                tag: "Guardian & Safety",
                tagColor: "#ff7f7f",
                tagBg: "rgba(255,127,127,0.12)",
                title: "How MEOK Guardian protects your family from AI-enabled scams",
                read: "4 min read",
              },
              {
                href: "/blog/ai-companion-privacy",
                tag: "Privacy",
                tagColor: "#87ceeb",
                tagBg: "rgba(135,206,235,0.12)",
                title: "AI companion privacy: what every user should know before they share",
                read: "7 min read",
              },
              {
                href: "/blog/meok-for-seniors",
                tag: "Senior Mode",
                tagColor: GOLD,
                tagBg: GOLD_DIM,
                title: "MEOK for seniors: a companion that keeps older adults connected and safe",
                read: "6 min read",
              },
              {
                href: "/blog/sovereign-ai-for-families",
                tag: "Sovereign AI",
                tagColor: "#c084fc",
                tagBg: "rgba(192,132,252,0.12)",
                title: "Why sovereign AI matters more for families than for individuals",
                read: "8 min read",
              },
            ].map(({ href, tag, tagColor, tagBg, title, read }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  padding: "1.25rem",
                  borderRadius: "1rem",
                  background: SURFACE,
                  border: `1px solid ${SURFACE_BORDER}`,
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    paddingTop: "0.2rem",
                    paddingBottom: "0.2rem",
                    paddingLeft: "0.6rem",
                    paddingRight: "0.6rem",
                    borderRadius: "9999px",
                    width: "fit-content",
                    color: tagColor,
                    background: tagBg,
                  }}
                >
                  {tag}
                </span>
                <p
                  style={{
                    fontWeight: 700,
                    color: "#ffffff",
                    fontSize: "0.875rem",
                    lineHeight: 1.45,
                    margin: 0,
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: MUTED_FAINT,
                    margin: 0,
                    marginTop: "auto",
                  }}
                >
                  {read}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
