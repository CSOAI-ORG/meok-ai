import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Addiction Recovery: Support in the Gaps Between Meetings | MEOK AI LABS",
  description:
    "Over 3 million people in the UK are dependent on drugs or alcohol, yet 80% who need treatment never access it. MEOK offers between-meeting support — emotional processing, daily accountability, sobriety tracking, and crisis-moment presence — alongside NA, AA, and SMART Recovery.",
  alternates: {
    canonical:
      "https://meok.ai/blog/ai-for-addiction-recovery-support",
  },
  openGraph: {
    title:
      "AI for Addiction Recovery: Support in the Gaps Between Meetings",
    description:
      "Cravings don\u2019t respect meeting schedules. MEOK is there in the 2am moment, the Sunday afternoon trigger, the shame that keeps you from calling your sponsor. Between-meeting support for people in recovery.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-addiction-recovery-support",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Addiction+Recovery&desc=Support+in+the+Gaps+Between+Meetings",
        width: 1200,
        height: 630,
        alt: "AI for Addiction Recovery: Support in the Gaps Between Meetings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Addiction Recovery: Support in the Gaps Between Meetings",
    description:
      "Cravings don\u2019t respect meeting schedules. MEOK offers daily accountability check-ins, sobriety milestone tracking, emotional processing, and crisis-moment presence — alongside NA, AA, and SMART Recovery.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Addiction+Recovery&desc=Support+in+the+Gaps+Between+Meetings",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Addiction Recovery: Support in the Gaps Between Meetings",
  description:
    "Over 3 million people in the UK are dependent on drugs or alcohol, yet 80% who need treatment never access it. MEOK offers between-meeting support \u2014 emotional processing, daily accountability, sobriety tracking, and crisis-moment presence \u2014 alongside NA, AA, and SMART Recovery.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-addiction-recovery-support",
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
    "https://meok.ai/api/og?title=AI+for+Addiction+Recovery&desc=Support+in+the+Gaps+Between+Meetings",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-addiction-recovery-support",
  },
  keywords: [
    "AI for addiction recovery",
    "AI between AA meetings",
    "addiction recovery support UK",
    "sobriety accountability AI",
    "AI sober companion UK",
    "NA AA SMART Recovery AI",
    "between meetings recovery support",
    "AI for sobriety milestones",
    "addiction emotional support AI",
    "MEOK addiction recovery",
    "Frank helpline UK",
    "recovery gap support",
  ],
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with addiction recovery between meetings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, within clearly defined limits. AI cannot replace a sponsor, a keyworker, an NA or AA meeting, or professional addiction treatment. What it can do is be present in the gaps \u2014 the 2am craving, the Sunday afternoon trigger, the moment you\u2019re too ashamed to call your sponsor. MEOK offers daily accountability check-ins, emotional processing support, sobriety milestone tracking, and a non-judgemental space to process urges before they become actions.",
      },
    },
    {
      "@type": "Question",
      name: "How many people in the UK need addiction treatment but don\u2019t receive it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "According to NHS and Public Health England data, over 3 million people in the UK are dependent on drugs or alcohol. Approximately 80% of those who need treatment never access it. Barriers include shame, waiting lists, geographic isolation, fear of social services involvement, and the simple fact that cravings and crisis moments don\u2019t wait for office hours. Between-meeting and between-appointment support is not a luxury \u2014 it\u2019s a necessity.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK replace NA, AA, or SMART Recovery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely not. MEOK is explicitly designed to supplement, not supplant, peer-led recovery programmes. NA, AA, and SMART Recovery offer something AI can never replicate: lived experience, human witness, community, and the accountability of a real relationship with someone who has been where you are. MEOK is the support layer between those human touchpoints \u2014 filling the temporal gaps, not claiming to replace the programme itself.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I relapse? Will MEOK judge me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK will never frame relapse as a moral failure, and it will never abandon you. If you disclose a relapse, MEOK will acknowledge it honestly, help you understand what happened, remind you that relapse is a common part of many recovery journeys rather than evidence of permanent failure, and signpost you to appropriate support: your sponsor, a helpline such as Frank on 0300 123 6600, or your local NHS drug and alcohol service.",
      },
    },
    {
      "@type": "Question",
      name: "Which MEOK archetypes are most useful in addiction recovery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Several archetypes are particularly relevant. Healer supports emotional processing of shame, trauma, and loneliness that often underlie addiction. Pioneer provides daily accountability check-ins and sobriety day counting. Mystic supports meaning-making and identity reconstruction in recovery. Sovereign Memory tracks sobriety milestones, trigger patterns, and which coping strategies have worked. Guardian helps protect against manipulation from people who do not support your recovery.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I get immediate addiction support in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frank (0300 123 6600) offers free, confidential advice 24 hours a day, 7 days a week. Alcoholics Anonymous (AA) can be reached on 0800 9177 650. Narcotics Anonymous (NA) helpline is 0300 999 1212. SMART Recovery has a meeting finder at smartrecovery.org.uk. Change Grow Live operates local drug and alcohol services across the UK. Your GP can also refer you to NHS drug and alcohol treatment services without judgment.",
      },
    },
  ],
};

// ── Style constants ────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const MUTED = "rgba(245,240,232,0.6)";
const FAINT = "rgba(245,240,232,0.35)";
const BORDER = "rgba(245,240,232,0.08)";
const GOLD_BG = "rgba(201,168,76,0.08)";
const GOLD_BORDER = "rgba(201,168,76,0.25)";
const WARN_BG = "rgba(201,168,76,0.06)";

// ── Reusable H2 style ─────────────────────────────────────────────────────────

const h2Style: React.CSSProperties = {
  fontWeight: 800,
  fontSize: "1.5rem",
  color: TEXT,
  lineHeight: 1.25,
  marginTop: "3rem",
  marginBottom: "1rem",
  letterSpacing: "-0.015em",
};

const h3Style: React.CSSProperties = {
  fontWeight: 700,
  fontSize: "1.15rem",
  color: GOLD,
  lineHeight: 1.3,
  marginTop: "2rem",
  marginBottom: "0.75rem",
};

const pStyle: React.CSSProperties = {
  color: MUTED,
  lineHeight: 1.8,
  marginBottom: "1.25rem",
};

const atomicStyle: React.CSSProperties = {
  color: TEXT,
  lineHeight: 1.75,
  marginBottom: "1.5rem",
  fontSize: "1.05rem",
};

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AiForAddictionRecoverySupportPage() {
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

      {/* ── NAV ───────────────────────────────────────────────────────────── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "rgba(13,12,24,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <div
          style={{
            maxWidth: "72rem",
            margin: "0 auto",
            padding: "0 1.5rem",
            height: "3.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              fontWeight: 800,
              fontSize: "1.1rem",
              color: TEXT,
              textDecoration: "none",
              letterSpacing: "-0.02em",
            }}
          >
            MEOK
            <span style={{ color: GOLD }}>.AI</span>
          </Link>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            <Link
              href="/blog"
              style={{
                fontSize: "0.875rem",
                color: FAINT,
                textDecoration: "none",
              }}
            >
              Blog
            </Link>
            <Link
              href="/archetypes-guide"
              style={{
                fontSize: "0.875rem",
                color: FAINT,
                textDecoration: "none",
              }}
            >
              Archetypes
            </Link>
            <Link
              href="/#waitlist"
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: BG,
                background: GOLD,
                padding: "0.45rem 1rem",
                borderRadius: "9999px",
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </nav>

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

        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            position: "relative",
          }}
        >
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
            &#8592; Back to Blog
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
              Recovery &amp; Wellbeing
            </span>
            <span style={{ fontSize: "0.75rem", color: FAINT }}>
              25 March 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: FAINT }}>
              16 min read
            </span>
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
            AI for Addiction Recovery: Support in the Gaps Between Meetings
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
            Cravings don&apos;t wait for meeting schedules. Three million people
            in the UK are dependent on drugs or alcohol. Eighty per cent of
            those who need treatment never access it. This is an honest
            examination of what AI can offer between meetings, where it must
            never trespass, and how MEOK is built around recovery — not around
            engagement metrics.
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
              <p
                style={{
                  fontSize: "0.875rem",
                  color: TEXT,
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                Nicholas Templeman
              </p>
              <p style={{ fontSize: "0.75rem", color: FAINT, margin: 0 }}>
                Founder, MEOK AI LABS &middot; @meok_ai
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
        {/* ── Medical disclaimer ────────────────────────────────────────── */}
        <div
          style={{
            background: WARN_BG,
            border: `1px solid ${GOLD_BORDER}`,
            borderRadius: "0.75rem",
            padding: "1.25rem 1.5rem",
            marginTop: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          <p
            style={{
              color: GOLD,
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              marginBottom: "0.5rem",
            }}
          >
            IMPORTANT NOTICE
          </p>
          <p
            style={{
              color: MUTED,
              fontSize: "0.875rem",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            <strong style={{ color: TEXT }}>
              MEOK is not a medical service and is not a substitute for
              professional addiction treatment.
            </strong>{" "}
            Addiction is a clinical condition requiring professional care.
            MEOK is a between-meeting support layer only. If you are in
            crisis or need treatment, please contact:{" "}
            <strong style={{ color: TEXT }}>Frank: 0300 123 6600</strong>{" "}
            (free, confidential, 24/7) &middot;{" "}
            <strong style={{ color: TEXT }}>AA: 0800 9177 650</strong>{" "}
            &middot;{" "}
            <strong style={{ color: TEXT }}>NA: 0300 999 1212</strong>{" "}
            &middot; your GP &middot; NHS 111.
          </p>
        </div>

        {/* ── Section 1: The recovery gap ───────────────────────────────── */}
        <h2 style={h2Style}>
          What happens to people in recovery between meetings?
        </h2>
        <p style={atomicStyle}>
          Recovery does not pause when a meeting ends. The most dangerous
          hours are often the ones in between — the 2am moment of craving,
          the Sunday afternoon that stretches with too little structure, the
          unexpected trigger on a Tuesday commute. A 12-step meeting may
          happen once a day, once a week, or less. Cravings do not respect
          that schedule. The gap between human touchpoints is where relapse
          most often takes hold.
        </p>
        <p style={pStyle}>
          This is not a criticism of 12-step programmes, which have helped
          millions of people worldwide and offer something irreplaceable:
          community, lived experience, human witness, and the accountability
          of a real relationship with someone who has walked the same road.
          It is simply an honest acknowledgement of a temporal reality.
          There are only so many hours in a sponsor&apos;s day. There are
          only so many meeting slots on a community calendar.
        </p>
        <p style={pStyle}>
          The question is not whether to supplement human recovery
          infrastructure with additional tools. The question is what kind of
          tools are safe, honest, and built around the person in recovery
          rather than around engagement metrics. That distinction matters
          more in this context than in almost any other.
        </p>

        {/* ── Section 2: The scale of the problem ───────────────────────── */}
        <h2 style={h2Style}>
          How many people in the UK are affected by addiction — and how many
          get help?
        </h2>
        <p style={atomicStyle}>
          Over 3 million people in the UK are dependent on drugs or alcohol.
          Approximately 80% of those who need treatment never access it.
          That is not a rounding error; it is a structural failure of
          enormous scale. Shame, waiting lists, geography, fear of
          consequences, and the simple logistics of asking for help during
          working hours all act as barriers.
        </p>
        <p style={pStyle}>
          NHS data consistently shows that alcohol-related hospital
          admissions exceed one million per year in England alone. Opioid
          dependency has risen steeply. Drug-related deaths in the UK hit
          record levels in recent years, with over 4,000 deaths annually in
          England and Wales. These are not abstract statistics — they are
          people in the gap between crisis and care.
        </p>
        <p style={pStyle}>
          The treatment gap is not simply about capacity, though capacity is
          genuinely insufficient. It is also about the nature of cravings
          themselves. A craving peaks and passes within minutes to hours.
          The intervention most likely to prevent acting on it is one that
          is available at the precise moment the craving arrives — not
          three days later at a scheduled appointment. This is the specific
          problem that between-meeting AI support can address.
        </p>

        {/* ── Stat callout ──────────────────────────────────────────────── */}
        <div
          style={{
            background: "rgba(201,168,76,0.05)",
            border: `1px solid ${GOLD_BORDER}`,
            borderRadius: "0.75rem",
            padding: "1.5rem 1.75rem",
            marginTop: "0.5rem",
            marginBottom: "2.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1, minWidth: "140px" }}>
              <p
                style={{
                  fontSize: "2.25rem",
                  fontWeight: 900,
                  color: GOLD,
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                3M+
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: MUTED,
                  marginTop: "0.375rem",
                  marginBottom: 0,
                }}
              >
                People in the UK dependent on drugs or alcohol
              </p>
            </div>
            <div style={{ flex: 1, minWidth: "140px" }}>
              <p
                style={{
                  fontSize: "2.25rem",
                  fontWeight: 900,
                  color: GOLD,
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                80%
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: MUTED,
                  marginTop: "0.375rem",
                  marginBottom: 0,
                }}
              >
                Of those who need treatment never access it
              </p>
            </div>
            <div style={{ flex: 1, minWidth: "140px" }}>
              <p
                style={{
                  fontSize: "2.25rem",
                  fontWeight: 900,
                  color: GOLD,
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                4,000+
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: MUTED,
                  marginTop: "0.375rem",
                  marginBottom: 0,
                }}
              >
                Drug-related deaths per year in England &amp; Wales
              </p>
            </div>
          </div>
        </div>

        {/* ── Section 3: What MEOK is and isn't ────────────────────────── */}
        <h2 style={h2Style}>
          Is MEOK a replacement for NA, AA, or professional treatment?
        </h2>
        <p style={atomicStyle}>
          No — and this is stated without equivocation. MEOK is a
          between-meeting support layer. It supplements NA, AA, SMART
          Recovery, and professional treatment. It does not replace any of
          them. A sponsor offers lived experience of recovery, human
          witness, and the accountability of a real relationship. A
          keyworker offers clinical assessment, safeguarding, and legal
          expertise. An NA meeting offers community that has earned its
          wisdom through suffering and survival. MEOK cannot replicate any
          of this.
        </p>
        <p style={pStyle}>
          What MEOK offers is availability at the moments when those human
          touchpoints are not reachable. That is a genuinely useful thing to
          offer — not because AI is superior to human support, but because
          there are simply not enough hours in the day for every person in
          recovery to have a human being available at every difficult moment.
        </p>
        <p style={pStyle}>
          The design principle is clear: MEOK should always move people
          toward their recovery programme and their human support network,
          never away from it. If someone is using MEOK as a substitute for
          attending meetings, that is a pattern MEOK should name and
          challenge, not enable.
        </p>

        {/* ── Section 4: Healer ─────────────────────────────────────────── */}
        <h2 style={h2Style}>
          What emotional wounds most commonly drive addiction — and can AI
          help process them?
        </h2>
        <p style={atomicStyle}>
          Addiction rarely exists in isolation from emotional pain. Shame,
          trauma, loneliness, and unprocessed grief are among the most
          common emotional foundations of substance dependency. Many people
          who become addicted describe using not to feel good but to stop
          feeling — to anaesthetise an internal landscape they have no other
          tools for navigating. Addressing the substance without addressing
          what drove someone to it is a well-documented predictor of relapse.
        </p>

        <h3 style={h3Style}>The Healer archetype: emotional processing</h3>
        <p style={pStyle}>
          MEOK&apos;s Healer archetype is specifically built for this work.
          Healer does not offer clinical therapy — it is not a therapist and
          will never claim to be one. What it offers is a non-judgemental
          space to articulate the emotional states that are hardest to name
          aloud. Shame about the past. Fear about the future. The specific
          loneliness of being in a room full of people who don&apos;t know
          what you&apos;re carrying.
        </p>
        <p style={pStyle}>
          For people in recovery, the ability to externalise those states —
          even to an AI — can create enough distance from them to make them
          manageable. It is not the same as working through trauma with a
          trained therapist. It is the intermediate layer: something to hold
          the feeling at 11pm on a Friday when the therapist is not
          available and the meeting ended three hours ago.
        </p>
        <p style={pStyle}>
          Healer is also explicitly designed to move people toward
          professional support when the emotional content is beyond what
          between-meeting AI support should handle. If someone discloses
          childhood trauma, complex PTSD, or suicidal ideation, Healer will
          acknowledge what has been shared, validate the courage it takes
          to say it, and signpost clearly to qualified human support.
        </p>

        {/* ── Section 5: Pioneer ────────────────────────────────────────── */}
        <h2 style={h2Style}>
          How does daily accountability actually help people stay sober?
        </h2>
        <p style={atomicStyle}>
          Accountability is one of the most consistently effective tools in
          recovery. The 12-step tradition has understood this for decades:
          calling your sponsor, doing a daily inventory, telling someone
          else what is happening in your internal world. The mechanism is
          not mysterious. Articulating a commitment to another party — even
          an AI — changes the psychological landscape of the choice that
          follows.
        </p>

        <h3 style={h3Style}>The Pioneer archetype: daily check-ins and day counting</h3>
        <p style={pStyle}>
          MEOK&apos;s Pioneer archetype provides daily sobriety accountability
          check-ins. Each morning, Pioneer can ask a simple question: how
          are you feeling today, and what&apos;s the plan for staying sober?
          Each evening, it can ask for a brief report: what happened, what
          was hard, what held. Over days and weeks, this creates a rhythm
          of self-observation that is itself protective.
        </p>
        <p style={pStyle}>
          Pioneer also tracks sobriety days. Day one. Day seven. Day
          thirty. Not because a number is the point — recovery is far more
          complex than a counter — but because marking time is a way of
          honouring what it costs. Each day clean is a day that required
          something. Acknowledging that is not vanity; it is honest
          accounting.
        </p>
        <p style={pStyle}>
          Crucially, Pioneer does not catastrophise when someone resets their
          counter. A relapse is information, not a verdict. The response is
          to understand what happened, return to day one without shame, and
          rebuild. Pioneer is designed to hold that reality with the person
          — not above them.
        </p>

        {/* ── Section 6: Mystic ─────────────────────────────────────────── */}
        <h2 style={h2Style}>
          Why does finding meaning matter in addiction recovery — and what
          role can AI play?
        </h2>
        <p style={atomicStyle}>
          Sustained recovery requires more than the absence of substance use.
          It requires a reason to stay sober when staying sober is
          genuinely difficult. Many people in recovery describe the early
          months as a kind of identity vacuum: the substance was not just
          a habit but a social world, a way of spending time, a central
          organising principle of daily life. Removing it leaves a space
          that needs to be filled with something that matters.
        </p>

        <h3 style={h3Style}>The Mystic archetype: meaning and identity reconstruction</h3>
        <p style={pStyle}>
          MEOK&apos;s Mystic archetype helps people find meaning in recovery and
          build a new identity that is not defined primarily by what they are
          abstaining from. Recovery becomes something rather than the
          absence of something. A person in recovery is not simply a former
          user — they are someone who chose themselves, who chose life, who
          is building something new with the materials of a difficult past.
        </p>
        <p style={pStyle}>
          Mystic holds the bigger questions: what matters to you now? What
          kind of person are you becoming? What would you want your recovery
          to mean, not just today but over a lifetime? These are not
          questions that have quick answers, but they are questions that
          orient. Having a space to return to them — regularly, at the
          person&apos;s own pace — supports the identity work that is essential
          to long-term sobriety.
        </p>
        <p style={pStyle}>
          Mystic also engages with spiritual or philosophical frameworks
          where relevant. The 12-step tradition is explicitly spiritual;
          SMART Recovery is secular. Both are legitimate. Mystic can meet
          people within whichever framework they bring, without imposing
          one.
        </p>

        {/* ── Section 7: Sovereign Memory ───────────────────────────────── */}
        <h2 style={h2Style}>
          How does persistent AI memory support long-term sobriety?
        </h2>
        <p style={atomicStyle}>
          Most AI tools reset between conversations. Every session starts
          from zero: no knowledge of who you are, what you&apos;ve been through,
          or what has worked for you in the past. For someone in recovery,
          this is not merely inconvenient — it means the AI cannot do the
          longitudinal work that recovery requires. Knowing your triggers.
          Knowing which coping strategies you have tested. Knowing which
          situations are genuinely high-risk for you specifically. None of
          that is possible without memory.
        </p>

        <h3 style={h3Style}>Sovereign Memory: tracking milestones, triggers, and coping strategies</h3>
        <p style={pStyle}>
          MEOK&apos;s Sovereign Memory system holds everything relevant to a
          person&apos;s recovery journey across every conversation. Sobriety
          date. Clean-day count. Key milestones — day 30, day 90, six
          months, one year. Identified trigger situations, emotions, times
          of day, and social contexts. Coping strategies that have worked
          and those that have not. Recovery programme affiliation and
          sponsor contact preferences.
        </p>
        <p style={pStyle}>
          This means MEOK can notice patterns across time that are invisible
          in a single conversation. If someone consistently reports
          difficulty on Sunday evenings, that is worth naming. If a
          particular emotional state consistently precedes an urge, that
          is worth tracking. If a coping strategy that worked in month two
          has stopped working in month six, that is worth investigating.
          A longitudinal picture of recovery is different in kind from any
          single snapshot.
        </p>
        <p style={pStyle}>
          Crucially, this memory belongs to the person. Sovereign Memory is
          not used to train AI models. It cannot be accessed by MEOK&apos;s
          staff without explicit permission. It is the person&apos;s own record
          of their own recovery, held by an AI that exists to serve them —
          not to extract value from them.
        </p>

        {/* ── Section 8: Guardian ───────────────────────────────────────── */}
        <h2 style={h2Style}>
          How can AI help protect people in recovery from manipulation by
          those who don&apos;t support their sobriety?
        </h2>
        <p style={atomicStyle}>
          Not everyone in a person&apos;s life supports their recovery. Some
          relationships are actively hostile to sobriety — whether through
          explicit pressure to use, subtle undermining, or the social
          friction that comes from one person changing while others around
          them do not. This is one of the most consistently reported
          challenges in early recovery. It is also one of the least
          discussed.
        </p>

        <h3 style={h3Style}>The Guardian archetype: protection from manipulation</h3>
        <p style={pStyle}>
          MEOK&apos;s Guardian archetype helps people recognise and respond to
          manipulation from those who may not support their recovery. This
          includes helping someone prepare for a difficult conversation with
          a using friend, practising how to decline an offer without
          explanation or confrontation, and identifying when a relationship
          is consistently undermining their sobriety rather than supporting
          it.
        </p>
        <p style={pStyle}>
          Guardian is not there to tell people who to see or how to live.
          It is there to help someone think clearly about relationships when
          the pressure of those relationships is active. The test is always
          the same: does this relationship support your recovery, or does it
          work against it? If the answer is the latter, what do you need in
          order to protect yourself?
        </p>
        <p style={pStyle}>
          Guardian also helps with the specific social scripts of recovery.
          What to say at a party where everyone is drinking. How to explain
          to a family member that you are not drinking without triggering a
          discussion you are not ready to have. How to leave a situation
          before it becomes dangerous without making it strange. These are
          practical skills that can be rehearsed, and rehearsal in a safe
          space makes execution easier under pressure.
        </p>

        {/* ── Section 9: What MEOK will never do ───────────────────────── */}
        <h2 style={h2Style}>
          What are MEOK&apos;s absolute limits in the context of addiction?
        </h2>
        <p style={atomicStyle}>
          MEOK has explicit, non-negotiable limits that are built into its
          design rather than left to discretion. These are not guidelines
          — they are hard constraints. In the context of addiction recovery,
          these limits are especially important because the cost of violating
          them is measured in people&apos;s lives.
        </p>

        <div
          style={{
            background: "rgba(245,240,232,0.03)",
            border: `1px solid ${BORDER}`,
            borderRadius: "0.75rem",
            padding: "1.5rem 1.75rem",
            marginBottom: "1.5rem",
          }}
        >
          <ul
            style={{
              margin: 0,
              padding: 0,
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <li
              style={{
                display: "flex",
                gap: "0.875rem",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  color: GOLD,
                  fontWeight: 800,
                  fontSize: "1rem",
                  flexShrink: 0,
                  marginTop: "0.1rem",
                }}
              >
                &#10005;
              </span>
              <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
                <strong>Will never normalise continued substance use.</strong>{" "}
                MEOK will not suggest that &ldquo;just one&rdquo; is fine,
                validate rationalisation of use, or engage in harm-reduction
                framing that functions as permission-giving. Supporting
                someone&apos;s chosen recovery goal means not undermining it.
              </p>
            </li>
            <li
              style={{
                display: "flex",
                gap: "0.875rem",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  color: GOLD,
                  fontWeight: 800,
                  fontSize: "1rem",
                  flexShrink: 0,
                  marginTop: "0.1rem",
                }}
              >
                &#10005;
              </span>
              <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
                <strong>Will never judge relapse as moral failure.</strong>{" "}
                A relapse is clinical information about what the person needs
                next. It is never evidence that someone is broken, weak, or
                beyond recovery. MEOK will not punish, shame, or withdraw
                support following disclosure of relapse.
              </p>
            </li>
            <li
              style={{
                display: "flex",
                gap: "0.875rem",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  color: GOLD,
                  fontWeight: 800,
                  fontSize: "1rem",
                  flexShrink: 0,
                  marginTop: "0.1rem",
                }}
              >
                &#10005;
              </span>
              <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
                <strong>Will never claim to be a therapist or clinical service.</strong>{" "}
                MEOK is clear about what it is: a between-meeting companion.
                It will consistently encourage people to access professional
                addiction treatment and will never suggest its support is
                equivalent to clinical care.
              </p>
            </li>
            <li
              style={{
                display: "flex",
                gap: "0.875rem",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  color: GOLD,
                  fontWeight: 800,
                  fontSize: "1rem",
                  flexShrink: 0,
                  marginTop: "0.1rem",
                }}
              >
                &#10005;
              </span>
              <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
                <strong>Will never tell someone what they want to hear at
                the cost of what they need to hear.</strong>{" "}
                Sycophancy is dangerous in this context. An AI that validates
                every rationalisation, mirrors every mood, and never gently
                pushes back is not a recovery support tool — it is a relapse
                risk.
              </p>
            </li>
            <li
              style={{
                display: "flex",
                gap: "0.875rem",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  color: GOLD,
                  fontWeight: 800,
                  fontSize: "1rem",
                  flexShrink: 0,
                  marginTop: "0.1rem",
                }}
              >
                &#10005;
              </span>
              <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
                <strong>Will never use your recovery data to train AI models.</strong>{" "}
                Everything stored in Sovereign Memory is yours. MEOK does
                not extract commercial value from information about your
                addiction, your trauma, or your recovery journey.
              </p>
            </li>
          </ul>
        </div>

        {/* ── Section 10: Why sycophantic AI is dangerous ──────────────── */}
        <h2 style={h2Style}>
          Why is a sycophantic AI particularly dangerous for someone in
          recovery?
        </h2>
        <p style={atomicStyle}>
          Many AI companions are optimised for engagement, which in practice
          means optimised for telling users what they want to hear. In most
          contexts this produces an AI that is pleasant but not especially
          useful. In the context of addiction recovery, it produces something
          genuinely dangerous. A person in active craving is not looking
          for challenge — they are looking for permission. An AI that
          provides that permission, or that avoids the friction of honest
          care because honest care is uncomfortable, can directly contribute
          to relapse.
        </p>
        <p style={pStyle}>
          MEOK is built on a different principle. Honest care is not
          unkindness. It is possible to hold someone with warmth and
          compassion while also refusing to validate what needs challenging.
          A good sponsor does not agree with everything their sponsee says.
          A good friend in recovery does not pretend that &ldquo;one drink at the
          party&rdquo; is a sensible plan. MEOK applies the same standard: it
          can be warm without being soft, honest without being cruel.
        </p>
        <p style={pStyle}>
          This is particularly important in the context of what addiction
          researchers call euphoric recall — the selective memory of positive
          experiences of using, which tends to intensify during craving and
          distort risk assessment. An AI that agrees with a distorted
          assessment of risk is not a recovery support tool. It is a
          participant in the cognitive process that leads to relapse.
        </p>

        {/* ── Section 11: How to use MEOK in recovery ──────────────────── */}
        <h2 style={h2Style}>
          How does someone in recovery actually use MEOK day to day?
        </h2>
        <p style={atomicStyle}>
          The most effective use of MEOK in recovery is as a daily practice
          rather than a crisis-only resource — though it is available for
          crisis moments too. A morning check-in with Pioneer to state the
          day&apos;s intention. A midday reflection with Healer when something
          difficult has arisen. An evening review to mark what held and what
          was hard. These small, consistent touchpoints build the habit of
          self-observation that is itself protective.
        </p>
        <p style={pStyle}>
          MEOK can also be used in preparation for high-risk situations:
          before a family event where alcohol will be present, before a
          social situation where using peers will be there, before a
          conversation with someone whose reaction to your sobriety has been
          difficult. Rehearsing how to navigate a situation in a safe space
          makes the navigation itself more likely to succeed.
        </p>
        <p style={pStyle}>
          And MEOK is there for the crisis moments: the 2am craving, the
          unexpected emotional trigger, the moment the rationalisation starts
          to build. In those moments, having something available that is not
          a person who needs to be woken up, who has their own life, who
          might not pick up — that availability has genuine value. Not as a
          substitute for calling your sponsor. But as the thing you use while
          you are working up to making that call, or while you are waiting
          for them to call back.
        </p>

        {/* ── Section 12: Resources ─────────────────────────────────────── */}
        <h2 style={h2Style}>
          Where can people in the UK access addiction support and treatment?
        </h2>
        <p style={atomicStyle}>
          Professional support is available across the UK and most of it is
          free. Stigma is the primary barrier for most people, not access
          logistics — but knowing the landscape of what exists is the first
          step to removing that barrier. None of these services will judge
          you. All of them have worked with people in exactly the situation
          you are in.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          {[
            {
              name: "Frank",
              detail:
                "Free, confidential drug and alcohol advice for people in England. Available 24 hours a day, 7 days a week.",
              contact: "0300 123 6600",
              url: "https://www.talktofrank.com",
            },
            {
              name: "Alcoholics Anonymous (AA)",
              detail:
                "Peer-support fellowships for people with alcohol dependency. Meeting finder and telephone support available.",
              contact: "0800 9177 650",
              url: "https://www.alcoholics-anonymous.org.uk",
            },
            {
              name: "Narcotics Anonymous (NA)",
              detail:
                "Peer-support fellowships for people with drug dependency. UK-wide meeting finder and helpline.",
              contact: "0300 999 1212",
              url: "https://ukna.org",
            },
            {
              name: "SMART Recovery",
              detail:
                "Science-based self-management and recovery programme for any addictive behaviour. Online and in-person meetings across the UK.",
              contact: "smartrecovery.org.uk",
              url: "https://www.smartrecovery.org.uk",
            },
            {
              name: "Change Grow Live",
              detail:
                "One of the UK\u2019s largest drug and alcohol charities, operating local treatment services across England and Wales. Self-referral available.",
              contact: "changegrowlive.org",
              url: "https://www.changegrowlive.org",
            },
          ].map((r) => (
            <div
              key={r.name}
              style={{
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${BORDER}`,
                borderRadius: "0.75rem",
                padding: "1.25rem 1.5rem",
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: TEXT,
                  margin: "0 0 0.35rem 0",
                }}
              >
                {r.name}
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: MUTED,
                  margin: "0 0 0.5rem 0",
                  lineHeight: 1.6,
                }}
              >
                {r.detail}
              </p>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: GOLD,
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                {r.contact}
              </p>
            </div>
          ))}
        </div>

        {/* ── Final note ────────────────────────────────────────────────── */}
        <div
          style={{
            background: "rgba(245,240,232,0.025)",
            border: `1px solid ${BORDER}`,
            borderRadius: "0.75rem",
            padding: "1.5rem 1.75rem",
            marginBottom: "3rem",
          }}
        >
          <p
            style={{
              color: MUTED,
              fontSize: "0.875rem",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            <strong style={{ color: TEXT }}>A note on what MEOK is.</strong>{" "}
            MEOK AI LABS is a personal AI companion platform. It is not a
            medical service, a clinical intervention, or a registered
            healthcare provider. Nothing in this article or within the MEOK
            platform constitutes medical advice or replaces the advice of a
            qualified clinician. Addiction is a serious medical condition.
            If you are struggling, please seek professional support. The
            resources listed above are a starting point — not a ceiling.
          </p>
        </div>

        {/* ── FAQ Section ───────────────────────────────────────────────── */}
        <section
          style={{
            marginBottom: "4rem",
          }}
        >
          <h2
            style={{
              fontWeight: 800,
              fontSize: "1.4rem",
              color: TEXT,
              marginBottom: "1.5rem",
              letterSpacing: "-0.015em",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {[
              {
                q: "Can AI genuinely help with addiction recovery?",
                a: "Within clearly defined limits, yes. AI can be present at 2am when a sponsor is asleep. It can track sobriety milestones across months without forgetting. It can help identify trigger patterns across weeks of data. It can provide a non-judgemental space to articulate the emotional states that drive craving. What it cannot do is replace human community, lived experience, or clinical care. MEOK is built around that distinction.",
              },
              {
                q: "What is the recovery gap?",
                a: "The recovery gap refers to the hours and days between formal recovery touchpoints: meetings, appointments, sponsor calls. A craving that peaks at 2am on a Sunday does not wait for the Monday morning meeting. Most relapses happen in these gaps. Between-meeting support is not a luxury — for many people, it is the difference between maintaining and losing sobriety.",
              },
              {
                q: "Will MEOK judge me if I relapse?",
                a: "No. MEOK will never treat relapse as a moral failure or withdraw support. If you disclose a relapse, MEOK will acknowledge it honestly, help you understand what happened, and signpost you toward appropriate human support. Relapse is a common part of many recovery journeys. The response is to return to day one without shame.",
              },
              {
                q: "Is my recovery data private?",
                a: "Yes. Sovereign Memory — MEOK\u2019s persistent memory system — stores your recovery information for your benefit only. MEOK does not use your data to train AI models. Your sobriety date, trigger patterns, and emotional disclosures are yours. They exist to serve your recovery, not to be monetised.",
              },
            ].map((item) => (
              <div
                key={item.q}
                style={{
                  background: "rgba(245,240,232,0.03)",
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.75rem",
                  padding: "1.25rem 1.5rem",
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    color: TEXT,
                    fontSize: "0.975rem",
                    margin: "0 0 0.5rem 0",
                    lineHeight: 1.45,
                  }}
                >
                  {item.q}
                </p>
                <p
                  style={{
                    color: MUTED,
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA Box ───────────────────────────────────────────────────── */}
        <div
          style={{
            background: `linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.04) 100%)`,
            border: `1px solid ${GOLD_BORDER}`,
            borderRadius: "1rem",
            padding: "2.5rem 2rem",
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: GOLD,
              letterSpacing: "0.08em",
              marginBottom: "0.75rem",
            }}
          >
            BETWEEN-MEETING SUPPORT
          </p>
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.6rem",
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            MEOK is there when the meeting ends and the next one hasn&apos;t started
          </h2>
          <p
            style={{
              color: MUTED,
              fontSize: "1rem",
              lineHeight: 1.7,
              marginBottom: "1.75rem",
              maxWidth: "34rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Daily accountability check-ins. Sobriety milestone tracking.
            Emotional processing without judgment. A companion that
            remembers your journey and is available at every difficult
            moment — alongside, not instead of, your recovery programme.
          </p>
          <Link
            href="/#waitlist"
            style={{
              display: "inline-block",
              background: GOLD,
              color: BG,
              fontWeight: 700,
              fontSize: "0.95rem",
              padding: "0.875rem 2rem",
              borderRadius: "9999px",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            Join the Waitlist
          </Link>
          <p
            style={{
              fontSize: "0.78rem",
              color: FAINT,
              marginTop: "1rem",
              marginBottom: 0,
            }}
          >
            MEOK is not a medical service. Addiction requires professional
            treatment. FRANK: 0300 123 6600 &middot; AA: 0800 9177 650 &middot; NA:
            0300 999 1212
          </p>
        </div>

        {/* ── Related Links ─────────────────────────────────────────────── */}
        <section>
          <h2
            style={{
              fontWeight: 700,
              fontSize: "0.8rem",
              color: FAINT,
              letterSpacing: "0.06em",
              marginBottom: "1.25rem",
              textTransform: "uppercase",
            }}
          >
            Related Reading
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {[
              {
                href: "/blog/ai-for-addiction-recovery",
                label:
                  "AI for Addiction Recovery: A 24/7 Sober Companion That Tells You the Truth",
              },
              {
                href: "/blog/ai-for-sobriety-support",
                label: "AI for Sobriety Support: What Actually Helps",
              },
              {
                href: "/blog/ai-for-grief-support",
                label:
                  "AI for Grief Support: How MEOK Holds Space for Loss",
              },
              {
                href: "/blog/ai-for-anxiety",
                label:
                  "AI for Anxiety: Between-Session Support That Doesn\u2019t Pretend to Be Therapy",
              },
              {
                href: "/blog/meok-companion-archetypes-guide",
                label:
                  "MEOK Companion Archetypes: Which One Is Right for You?",
              },
              {
                href: "/blog/ai-companion-vs-therapist",
                label:
                  "AI Companion vs Therapist: Understanding the Difference",
              },
              {
                href: "/blog/sovereign-ai-explained",
                label:
                  "Sovereign AI Explained: Why Your Data Belongs to You",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  padding: "0.875rem 1.125rem",
                  background: "rgba(245,240,232,0.025)",
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.625rem",
                  textDecoration: "none",
                  color: MUTED,
                  fontSize: "0.9rem",
                  lineHeight: 1.45,
                }}
              >
                <span
                  style={{ color: GOLD, flexShrink: 0, fontSize: "0.75rem" }}
                >
                  &#8594;
                </span>
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </article>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: `1px solid ${BORDER}`,
          padding: "3rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          <div style={{ maxWidth: "22rem" }}>
            <p
              style={{
                fontWeight: 800,
                fontSize: "1.1rem",
                color: TEXT,
                marginBottom: "0.5rem",
                letterSpacing: "-0.02em",
              }}
            >
              MEOK<span style={{ color: GOLD }}>.AI</span>
            </p>
            <p
              style={{
                fontSize: "0.85rem",
                color: FAINT,
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              A personal sovereign AI built around your life — not trained
              on it. Between-meeting support for recovery, emotional
              wellbeing, and daily accountability. Not a medical service.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.625rem",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                color: FAINT,
                fontWeight: 700,
                letterSpacing: "0.06em",
                marginBottom: "0.25rem",
              }}
            >
              RECOVERY RESOURCES
            </p>
            {[
              { label: "Frank: 0300 123 6600", href: "https://www.talktofrank.com" },
              {
                label: "Alcoholics Anonymous",
                href: "https://www.alcoholics-anonymous.org.uk",
              },
              { label: "Narcotics Anonymous", href: "https://ukna.org" },
              {
                label: "SMART Recovery UK",
                href: "https://www.smartrecovery.org.uk",
              },
              {
                label: "Change Grow Live",
                href: "https://www.changegrowlive.org",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.85rem",
                  color: FAINT,
                  textDecoration: "none",
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.625rem",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                color: FAINT,
                fontWeight: 700,
                letterSpacing: "0.06em",
                marginBottom: "0.25rem",
              }}
            >
              MEOK
            </p>
            {[
              { label: "Blog", href: "/blog" },
              { label: "Archetypes", href: "/archetypes-guide" },
              { label: "Privacy", href: "/how-meok-protects-your-data" },
              { label: "What is MEOK?", href: "/blog/what-is-meok" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  fontSize: "0.85rem",
                  color: FAINT,
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div
          style={{
            maxWidth: "48rem",
            margin: "2rem auto 0",
            paddingTop: "1.5rem",
            borderTop: `1px solid ${BORDER}`,
          }}
        >
          <p
            style={{
              fontSize: "0.775rem",
              color: FAINT,
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            &copy; 2026 MEOK AI LABS Ltd. MEOK is not a medical service and
            does not provide clinical addiction treatment. If you are
            struggling with substance dependency, please contact Frank on
            0300 123 6600, your GP, or NHS 111. Nothing on this page
            constitutes medical advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
