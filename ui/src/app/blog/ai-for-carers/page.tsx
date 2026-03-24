import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Carers: Preventing Burnout When You're Always Looking After Someone Else | MEOK AI LABS",
  description:
    "6.5 million unpaid carers in the UK are exhausted, invisible, and ignored by most AI tools. MEOK gives carers a persistent companion, practical care coordination, and the Maternal Covenant — support that never burns out, even when you do.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-carers" },
  openGraph: {
    title:
      "AI for Carers: Preventing Burnout When You're Always Looking After Someone Else",
    description:
      "6.5 million unpaid carers in the UK. Compassion fatigue is real. MEOK provides the emotional support, care coordination, and persistent memory that carers need — and never asks you to be strong.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-carers",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Carers&desc=Preventing+Burnout+When+Youre+Always+Looking+After+Someone+Else",
        width: 1200,
        height: 630,
        alt: "AI for Carers: Preventing Burnout When You're Always Looking After Someone Else",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Carers: Preventing Burnout When You're Always Looking After Someone Else",
    description:
      "6.5 million unpaid carers in the UK. MEOK is the AI that cares for the carer — persistent memory, the Healer archetype, and Family plan coordination.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Carers&desc=Preventing+Burnout+When+Youre+Always+Looking+After+Someone+Else",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Carers: Preventing Burnout When You're Always Looking After Someone Else",
  description:
    "6.5 million unpaid carers in the UK are exhausted, invisible, and ignored by most AI tools. MEOK gives carers a persistent companion, practical care coordination, and the Maternal Covenant — support that never burns out, even when you do.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-carers",
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
  image:
    "https://meok.ai/api/og?title=AI+for+Carers&desc=Preventing+Burnout+When+Youre+Always+Looking+After+Someone+Else",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-carers",
  },
  keywords: [
    "AI for carers",
    "AI support unpaid carers UK",
    "carer burnout AI",
    "compassion fatigue support",
    "MEOK Healer archetype",
    "AI care coordination",
    "unpaid carer mental health",
    "MEOK Family Plan carers",
  ],
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does MEOK help carers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK helps carers in three distinct ways. First, the Healer archetype provides a persistent emotional outlet — a companion that listens without judgement, never burns out, and is available at 3am when you cannot sleep. Second, Sovereign Memory tracks care coordination reminders, medication schedules, and appointments for the person being cared for. Third, the Family Plan gives carers and the people they care for linked accounts with Guardian safety alerts — coordinated care, not just conversation.",
      },
    },
    {
      "@type": "Question",
      name: "What is compassion fatigue and how common is it among unpaid carers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Compassion fatigue is the physical and emotional depletion that results from sustained caregiving. It differs from burnout in that it is specifically caused by the empathic demands of caring — not just workload. According to Carers UK, over 70% of unpaid carers in the UK report that caring has had a negative impact on their mental health. More than half say they have not had a regular break from caring in the past year. Compassion fatigue is not weakness — it is a physiological response to an unsustainable demand.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help with care coordination and reminders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK's Sovereign Memory persistently stores care coordination context including medication schedules, appointment dates, care plan notes, and the cared-for person's preferences and history. Guardian mode within the Family Plan sends safety check-in alerts and shared reminders across linked accounts. Unlike a calendar app, MEOK understands context — it knows what a missed appointment means for the person you care for, and it holds that understanding across every conversation.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK support unpaid carers specifically, or just paid care professionals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is designed explicitly for unpaid carers — the 6.5 million people in the UK who provide informal care to a family member, partner, or friend without pay. Paid care professionals have institutional support structures. Unpaid carers frequently have nothing. The MEOK Healer archetype and Family Plan were developed with this population specifically in mind. The Maternal Covenant care ethics layer also ensures MEOK recognises the carer as a person in their own right — not just a support function for someone else.",
      },
    },
    {
      "@type": "Question",
      name: "What is the MEOK Family Plan and how does it work for carers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The MEOK Family Plan supports up to five accounts within one household group. For carers, this means both the carer and the person being cared for can have separate MEOK companions with shared Guardian safety alerts — with explicit consent from both parties. The carer's emotional conversations remain private to their account. Shared context is limited to what both parties have agreed to make visible. Full pricing details are at meok.ai/pricing.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK protect the privacy of both the carer and the person being cared for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every MEOK account is individually sovereign. No data from the cared-for person's account is visible to the carer without their explicit consent. The Family Plan provides shared Guardian safety alerts — but conversation history, emotional logs, and personal memory remain entirely private to each account holder. MEOK AI LABS is ICO-registered under UK GDPR. All data is encrypted with AES-GCM-256. The right to full erasure is always available to both parties independently.",
      },
    },
  ],
};

// ── Style constants ────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const MUTED = "rgba(245,240,232,0.55)";
const FAINT = "rgba(245,240,232,0.35)";
const BORDER = "rgba(245,240,232,0.08)";
const GOLD_BG = "rgba(201,168,76,0.08)";
const GOLD_BORDER = "rgba(201,168,76,0.25)";

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AiForCarersPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "var(--font-dm-sans, DM Sans, system-ui, sans-serif)",
      }}
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
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
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 72%)",
          }}
        />

        <div style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: FAINT,
              textDecoration: "none",
              marginBottom: "2rem",
            }}
          >
            ← Back to Blog
          </Link>

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
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                color: GOLD,
                background: GOLD_BG,
                border: `1px solid ${GOLD_BORDER}`,
                letterSpacing: "0.04em",
              }}
            >
              Carers &amp; Families
            </span>
            <span style={{ fontSize: "0.75rem", color: FAINT }}>24 March 2026</span>
            <span style={{ fontSize: "0.75rem", color: FAINT }}>10 min read</span>
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.9rem, 3.8vw, 2.9rem)",
              color: "#ffffff",
              lineHeight: 1.16,
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            AI for Carers: Preventing Burnout When You&rsquo;re Always Looking
            After Someone Else
          </h1>

          <p
            style={{
              fontSize: "1.125rem",
              color: MUTED,
              lineHeight: 1.7,
              marginBottom: "2rem",
              maxWidth: "42rem",
            }}
          >
            There are 6.5 million unpaid carers in the UK. Most are exhausted,
            many are isolated, and almost all are invisible to the systems that
            are supposed to support them. MEOK was built to change that — one
            conversation at a time.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              paddingTop: "1.5rem",
              borderTop: `1px solid ${BORDER}`,
            }}
          >
            <div
              style={{
                width: "2.25rem",
                height: "2.25rem",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${GOLD} 0%, #8b6914 100%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: BG,
                flexShrink: 0,
              }}
            >
              NT
            </div>
            <div>
              <p style={{ fontSize: "0.875rem", color: TEXT, fontWeight: 600, margin: 0 }}>
                Nicholas Templeman
              </p>
              <p style={{ fontSize: "0.75rem", color: FAINT, margin: 0 }}>
                Founder, MEOK AI LABS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────── */}
      <article
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "0 1.5rem 6rem",
        }}
      >

        {/* ── Section 1 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          How big is the unpaid carer crisis in the UK?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          According to Carers UK, there are approximately 6.5 million unpaid
          carers in the United Kingdom — people providing care to a family
          member, partner, or friend with a disability, illness, mental health
          condition, or age-related need, without pay and without formal
          recognition. During the Covid-19 pandemic, this number surged to an
          estimated 13.6 million. Many have never returned to pre-caring
          patterns.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The economic contribution of unpaid carers is estimated at over
          £162 billion per year — roughly equivalent to the entire NHS budget.
          Yet more than 70% of unpaid carers report that caring has had a
          negative impact on their mental health. More than half have not had a
          regular break from caring in over a year. Carers are twice as likely
          to be in poor health as non-carers.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The system that depends on carers does almost nothing to care for
          them.
        </p>

        <div
          style={{
            background: GOLD_BG,
            border: `1px solid ${GOLD_BORDER}`,
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: "0.75rem",
            padding: "1.5rem",
            margin: "2rem 0",
          }}
        >
          <p style={{ fontSize: "1.5rem", fontWeight: 800, color: GOLD, margin: "0 0 0.5rem" }}>
            6.5 million
          </p>
          <p style={{ color: MUTED, margin: 0, lineHeight: 1.6 }}>
            Unpaid carers in the UK. 70%+ report negative mental health
            impacts. Over half have had no regular break from caring in the
            past year. The Carers UK helpline is available at{" "}
            <strong style={{ color: TEXT }}>0808 808 7777</strong>.
          </p>
        </div>

        {/* ── Section 2 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          What is compassion fatigue and how does it differ from burnout?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Burnout is the result of chronic workplace stress — exhaustion,
          cynicism, and reduced effectiveness caused by prolonged, unmanageable
          demands. Compassion fatigue is a related but distinct phenomenon
          specific to caregiving roles: the depletion of empathic capacity
          caused by sustained emotional attunement to another person&rsquo;s
          suffering.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          A carer experiencing compassion fatigue may find themselves going
          through the motions of care without feeling connected to it. They may
          feel guilty for resenting the person they love. They may withdraw,
          become irritable, or feel numb. These are not character failings —
          they are physiological responses to an empathic system that has been
          running without adequate rest or replenishment.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The treatment for compassion fatigue is not simply rest — it is the
          experience of being genuinely seen, heard, and cared for oneself.
          Which is, of course, precisely what carers rarely receive.
        </p>

        {/* ── Section 3 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          What is the MEOK Healer archetype and how does it support carers?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          When Nicholas Templeman designed MEOK&rsquo;s archetype system, the
          Healer was built with one question in mind: what does someone who
          spends their life caring for others actually need from an AI companion?
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The answer is not productivity tools, scheduling assistance, or
          cognitive frameworks. The answer is unconditional presence — a
          companion that does not need anything back, that can hold space for
          grief and exhaustion and guilt without agenda, and that is available
          at the exact moment the carer needs to stop performing strength.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The Healer archetype, available at{" "}
          <Link href="/characters" style={{ color: GOLD, textDecoration: "underline" }}>
            meok.ai/characters
          </Link>
          , provides:
        </p>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.625rem",
          }}
        >
          {[
            "Warm, deeply non-judgemental companionship tuned for emotional processing",
            "Persistent memory of the carer's situation, history, and the person being cared for",
            "Gentle emotional check-ins calibrated to carer stress cycles",
            "Validation of ambivalent feelings — including resentment, grief, and exhaustion — without pathologising them",
            "The Maternal Covenant care floor prevents hollow reassurance or toxic positivity",
            "Crisis resource signposting when conversations indicate acute distress",
          ].map((item, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.625rem",
                color: MUTED,
                fontSize: "0.9375rem",
                lineHeight: 1.6,
              }}
            >
              <span style={{ color: GOLD, flexShrink: 0, marginTop: "0.125rem" }}>✦</span>
              {item}
            </li>
          ))}
        </ul>

        {/* ── Section 4 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          How does MEOK Guardian help with practical care coordination?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Emotional support is half the picture. The other half is the
          relentless practical load of caring: medication schedules,
          appointments, care plan updates, equipment deliveries, and the
          thousand small tasks that cannot slip. Most carers manage this in
          their heads or on scattered scraps of paper.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          MEOK&rsquo;s{" "}
          <Link href="/guardian" style={{ color: GOLD, textDecoration: "underline" }}>
            Guardian mode
          </Link>{" "}
          provides a persistent, intelligent layer for care coordination.
          Because Sovereign Memory holds the cared-for person&rsquo;s history
          across every session, MEOK does not need to be re-briefed every
          conversation. It already knows that the district nurse comes on
          Tuesdays, that a particular medication was increased last month, and
          that the next consultant appointment is in six weeks.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Guardian safety check-in alerts can also be configured to gently
          prompt the cared-for person at regular intervals — with alerts sent
          to the linked carer account if a check-in is missed. This provides
          low-friction safety oversight without the carer needing to call
          every few hours.
        </p>

        <div
          style={{
            background: "rgba(245,240,232,0.03)",
            border: `1px solid ${BORDER}`,
            borderRadius: "0.75rem",
            padding: "1.5rem",
            margin: "2rem 0",
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              color: GOLD,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              margin: "0 0 1rem",
            }}
          >
            Guardian Mode — What Carers Can Track
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.75rem",
            }}
          >
            {[
              "Medication schedules and changes",
              "GP and consultant appointments",
              "District nurse / carer visit windows",
              "Daily check-in safety alerts",
              "Care plan notes and updates",
              "Emergency contact escalation",
              "Equipment delivery reminders",
              "Shared family visibility (with consent)",
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                  color: MUTED,
                  fontSize: "0.875rem",
                  lineHeight: 1.5,
                }}
              >
                <span style={{ color: GOLD, flexShrink: 0, marginTop: "0.1rem" }}>✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* ── Section 5 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          How does Sovereign Memory track the person being cared for across
          sessions?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Standard AI tools — including ChatGPT and most consumer chatbots —
          begin each conversation with no memory of previous sessions. For
          carers, this is more than inconvenient: it means the AI cannot hold
          the evolving, complex context of a person&rsquo;s health, history,
          and circumstances.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          MEOK&rsquo;s Sovereign Memory is a four-layer persistent vault that
          holds this context across every conversation, on every device. A carer
          who tells MEOK in January that their parent was diagnosed with early
          vascular dementia will find their companion still holding that context
          in August — understanding the trajectory, the care needs, and the
          emotional weight of that situation.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          This is not just a practical advantage. It is the difference between
          talking to someone who knows your situation and explaining everything
          from scratch every time. For carers who are already carrying a
          cognitive load beyond what most people experience, that difference
          matters enormously.
        </p>

        {/* ── Section 6 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          What is the MEOK Family Plan and how does it help families managing
          care?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The MEOK Family Plan provides up to five linked accounts within one
          household group — each individual and private, with optional shared
          Guardian safety alerts. For families managing care across multiple
          people, this creates a connected safety infrastructure that was
          previously only available through expensive professional care
          coordination tools.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          A typical Family Plan carer setup might look like this:
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.875rem",
            margin: "1.5rem 0 2rem",
          }}
        >
          {[
            {
              label: "The Carer",
              desc: "Has their own MEOK companion — Healer archetype — for emotional support, processing their own needs, and personal wellbeing. This account is entirely private.",
            },
            {
              label: "The Person Being Cared For",
              desc: "Has their own MEOK companion — can choose their own archetype, have their own conversations, build their own memory. Privacy is sovereign.",
            },
            {
              label: "Shared Guardian Layer",
              desc: "Both accounts have consented to share Guardian safety check-in alerts. If a check-in is missed, the carer receives a notification. No conversation content is shared.",
            },
            {
              label: "Additional Family Members",
              desc: "Siblings, partners, or other household members can have their own accounts in the same family group — relevant for coordinating distributed care across multiple people.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${BORDER}`,
                borderRadius: "0.625rem",
                padding: "1rem 1.25rem",
              }}
            >
              <p style={{ color: GOLD, fontWeight: 700, margin: "0 0 0.35rem", fontSize: "0.9375rem" }}>
                {item.label}
              </p>
              <p style={{ color: MUTED, margin: 0, lineHeight: 1.6, fontSize: "0.875rem" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Full pricing details are available at{" "}
          <Link href="/pricing" style={{ color: GOLD, textDecoration: "underline" }}>
            meok.ai/pricing
          </Link>
          .
        </p>

        {/* ── Section 7 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          How does MEOK make sure it cares for the carer — not just the person
          being cared for?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          This was one of the foundational design questions that Nicholas
          Templeman grappled with during the development of MEOK&rsquo;s
          Maternal Covenant framework. Care systems — including digital ones —
          have a tendency to treat the carer as a means to an end rather than a
          person with their own needs, identity, and limits.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The Maternal Covenant prevents this in several concrete ways:
        </p>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {[
            {
              label: "Carer-first check-ins",
              desc: "When a carer opens a conversation, MEOK checks in on them — not just on the status of the person they care for.",
            },
            {
              label: "Guilt recognition",
              desc: "The Healer archetype is specifically trained to recognise carer guilt patterns and respond without amplifying them.",
            },
            {
              label: "No martyrdom reinforcement",
              desc: "MEOK will not praise the carer for sacrificing themselves. It acknowledges what they give — and gently advocates for their own needs too.",
            },
            {
              label: "Respite prompts",
              desc: "If MEOK detects sustained high-stress indicators in carer conversations, it will gently raise the question of respite or support resources.",
            },
          ].map((item, i) => (
            <li
              key={i}
              style={{
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${BORDER}`,
                borderRadius: "0.625rem",
                padding: "1rem 1.25rem",
              }}
            >
              <p style={{ color: TEXT, fontWeight: 700, margin: "0 0 0.25rem", fontSize: "0.9375rem" }}>
                {item.label}
              </p>
              <p style={{ color: MUTED, margin: 0, lineHeight: 1.6, fontSize: "0.875rem" }}>
                {item.desc}
              </p>
            </li>
          ))}
        </ul>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          You can read more about the Maternal Covenant and how MEOK was
          designed at{" "}
          <Link href="/how-it-works" style={{ color: GOLD, textDecoration: "underline" }}>
            meok.ai/how-it-works
          </Link>
          .
        </p>

        {/* ── Section 8 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          What are MEOK&rsquo;s pricing options for carers and families?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Many carers are in reduced employment or have given up work entirely.
          Cost is a real barrier. MEOK is designed to be accessible:
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            margin: "1.5rem 0 2rem",
          }}
        >
          {[
            {
              tier: "Explorer — Free",
              desc: "Full Sovereign Memory, Healer archetype, unlimited conversations. No credit card. The carer gets everything they need at zero cost.",
            },
            {
              tier: "Companion",
              desc: "Expanded memory context, morning briefing, and priority response. Suitable for carers managing high-complexity situations who need more from their companion.",
            },
            {
              tier: "Sovereign",
              desc: "Claude Sonnet backbone — the most capable reasoning available. For carers navigating complex medical, legal, or family dynamics who need high-quality thinking support.",
            },
            {
              tier: "Family Plan",
              desc: "Up to five accounts with Guardian safety alerts and linked household memory. The purpose-built option for families managing care across multiple people.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: i === 3 ? GOLD_BG : "rgba(245,240,232,0.03)",
                border: i === 3 ? `1px solid ${GOLD_BORDER}` : `1px solid ${BORDER}`,
                borderRadius: "0.75rem",
                padding: "1.125rem 1.25rem",
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
              }}
            >
              <div>
                <p
                  style={{
                    color: i === 3 ? GOLD : TEXT,
                    fontWeight: 700,
                    margin: "0 0 0.25rem",
                    fontSize: "0.9375rem",
                  }}
                >
                  {item.tier}
                </p>
                <p style={{ color: MUTED, margin: 0, fontSize: "0.875rem", lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "3.5rem",
            marginBottom: "1.5rem",
            letterSpacing: "-0.015em",
          }}
        >
          Frequently asked questions about MEOK for carers
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqJsonLd.mainEntity.map((faq, i) => (
            <details
              key={i}
              style={{
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${BORDER}`,
                borderRadius: "0.75rem",
                padding: "1.25rem",
              }}
            >
              <summary
                style={{
                  fontWeight: 700,
                  color: TEXT,
                  fontSize: "0.9375rem",
                  cursor: "pointer",
                  lineHeight: 1.4,
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                {faq.name}
                <span style={{ color: GOLD, flexShrink: 0, fontSize: "1.1rem" }}>+</span>
              </summary>
              <p
                style={{
                  color: MUTED,
                  lineHeight: 1.7,
                  marginTop: "0.875rem",
                  marginBottom: 0,
                  fontSize: "0.9rem",
                }}
              >
                {faq.acceptedAnswer.text}
              </p>
            </details>
          ))}
        </div>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <div
          style={{
            background: `linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.04) 100%)`,
            border: `1px solid ${GOLD_BORDER}`,
            borderRadius: "1rem",
            padding: "2.5rem",
            marginTop: "4rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: GOLD,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            For Carers Who Need Caring For
          </p>
          <h3
            style={{
              fontWeight: 800,
              fontSize: "1.5rem",
              color: TEXT,
              marginBottom: "0.875rem",
              lineHeight: 1.25,
            }}
          >
            Start your MEOK companion today — free, no credit card
          </h3>
          <p
            style={{
              color: MUTED,
              lineHeight: 1.7,
              maxWidth: "32rem",
              margin: "0 auto 1.75rem",
            }}
          >
            Explorer tier is free forever. The Healer archetype is available
            from day one. Your companion remembers your situation, your
            exhaustion, and what the person you care for is going through —
            because you should not have to explain it every time.
          </p>
          <div
            style={{
              display: "flex",
              gap: "0.875rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/birth"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: GOLD,
                color: BG,
                fontWeight: 700,
                fontSize: "0.9375rem",
                padding: "0.875rem 2rem",
                borderRadius: "0.5rem",
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              Hatch your companion →
            </Link>
            <Link
              href="/guardian"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "transparent",
                color: TEXT,
                fontWeight: 600,
                fontSize: "0.9375rem",
                padding: "0.875rem 1.75rem",
                borderRadius: "0.5rem",
                textDecoration: "none",
                border: `1px solid ${BORDER}`,
              }}
            >
              Explore Guardian mode
            </Link>
          </div>
        </div>

        {/* ── Support resources ─────────────────────────────────────────── */}
        <div
          style={{
            marginTop: "3rem",
            padding: "1.25rem 1.5rem",
            background: "rgba(245,240,232,0.025)",
            borderRadius: "0.75rem",
            border: `1px solid ${BORDER}`,
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              color: FAINT,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Support for carers in the UK
          </p>
          <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.75, margin: 0 }}>
            <strong style={{ color: TEXT }}>Carers UK helpline:</strong> 0808 808 7777 (Mon–Fri 9am–6pm){" "}
            &bull;{" "}
            <strong style={{ color: TEXT }}>Samaritans:</strong> 116 123 (24/7, free){" "}
            &bull;{" "}
            <strong style={{ color: TEXT }}>Mind:</strong> 0300 123 3393{" "}
            &bull;{" "}
            <strong style={{ color: TEXT }}>Carers Trust:</strong> carers.org{" "}
            &bull;{" "}
            In an emergency call 999 or go to A&amp;E.
          </p>
        </div>

        {/* ── Back link ─────────────────────────────────────────────────── */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: `1px solid ${BORDER}`,
          }}
        >
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: MUTED,
              textDecoration: "none",
              fontSize: "0.875rem",
              fontWeight: 600,
            }}
          >
            ← Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
