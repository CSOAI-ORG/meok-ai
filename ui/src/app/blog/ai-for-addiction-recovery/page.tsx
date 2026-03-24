import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI and Addiction Recovery: Support Between Meetings, Without Enabling Relapse | MEOK AI LABS",
  description:
    "Over 300,000 people are in treatment for substance use in the UK. MEOK's care floor blocks any response that normalises substance use, while Sovereign Memory tracks recovery milestones and the Pioneer archetype keeps you accountable between sessions.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-addiction-recovery" },
  openGraph: {
    title:
      "AI and Addiction Recovery: Support Between Meetings, Without Enabling Relapse",
    description:
      "300,000+ people in UK treatment for substance use. MEOK's care floor is an absolute block on normalising substance use. Sovereign Memory tracks your recovery journey. Honest about what AI can and cannot do.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-addiction-recovery",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+and+Addiction+Recovery&desc=Support+Between+Meetings+Without+Enabling+Relapse",
        width: 1200,
        height: 630,
        alt: "AI and Addiction Recovery: Support Between Meetings, Without Enabling Relapse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI and Addiction Recovery: Support Between Meetings, Without Enabling Relapse",
    description:
      "MEOK's care floor is an absolute block on enabling substance use. Pioneer archetype for accountability. Sovereign Memory for recovery milestones. Honest about limits.",
    images: [
      "https://meok.ai/api/og?title=AI+and+Addiction+Recovery&desc=Support+Between+Meetings+Without+Enabling+Relapse",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI and Addiction Recovery: Support Between Meetings, Without Enabling Relapse",
  description:
    "Over 300,000 people are in treatment for substance use in the UK. MEOK's care floor blocks any response that normalises substance use, while Sovereign Memory tracks recovery milestones and the Pioneer archetype keeps you accountable between sessions.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-addiction-recovery",
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
    "https://meok.ai/api/og?title=AI+and+Addiction+Recovery&desc=Support+Between+Meetings+Without+Enabling+Relapse",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-addiction-recovery",
  },
  keywords: [
    "AI for addiction recovery",
    "AI recovery support UK",
    "AI sobriety accountability",
    "MEOK Pioneer archetype",
    "addiction recovery AI companion",
    "AI between AA meetings",
    "recovery milestone tracking AI",
    "substance use AI support UK",
  ],
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is AI safe for people in addiction recovery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can be a safe and genuinely useful support tool in recovery — provided it has the correct safeguards in place. MEOK's care floor includes an absolute prohibition on any response that normalises, minimises, or enables substance use. This is enforced by the Maternal Covenant governance layer on every response, not just flagged content. However, AI is not a substitute for a sponsor, a counsellor, or a recovery programme. It is most useful as a between-meeting support layer — available at any hour, non-judgemental, and capable of holding your recovery context across months.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK prevent enabling relapse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's Maternal Covenant care floor enforces a hard block on several categories of response in addiction recovery contexts: it will not minimise or excuse substance use, will not provide harm reduction information in a way that normalises ongoing use, will not respond to urge descriptions without directing them toward recovery supports, and will never suggest that moderate use is achievable for someone who has identified themselves as in recovery. These are not soft guidelines — they are architectural constraints applied to every response.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help with accountability in recovery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Pioneer archetype is MEOK's accountability and momentum configuration — built for people building new patterns and needing consistent, honest support. In recovery, Pioneer can provide daily check-ins, milestone recognition, urge documentation (to discuss with a counsellor or sponsor), and honest accountability conversations when you are struggling. Because Sovereign Memory holds your recovery history, your companion knows how long you have been sober, what your patterns are, and what has helped you before.",
      },
    },
    {
      "@type": "Question",
      name: "What is the MEOK care floor for addiction-related responses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The care floor is the minimum standard of safety enforced by the Maternal Covenant on every MEOK response. For addiction contexts, this floor includes: no normalisation of substance use, no minimisation of harm, no engagement with urges that does not redirect toward recovery resources, explicit acknowledgement of recovery milestones, and immediate crisis signposting when indicators of relapse or acute distress are present. The care floor is not a content filter — it is an ethics layer that shapes response construction from the ground up.",
      },
    },
    {
      "@type": "Question",
      name: "When should someone in recovery see a counsellor instead of using AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You should contact your counsellor, sponsor, or a recovery helpline — including Frank on 0300 123 6600 or AA on 0800 9177 650 — when you are experiencing active cravings, when you have relapsed or are at imminent risk of relapse, when your mental health is significantly deteriorating, or when you feel that the support you need requires clinical expertise. AI is useful for maintaining momentum between sessions and processing daily experience. It is not appropriate as your primary recovery infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK work alongside 12-step programmes and SMART Recovery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK is designed to complement — not compete with — established recovery frameworks. Whether you are working the 12 steps with AA or NA, following the SMART Recovery approach, or working with a keyworker in a structured treatment programme, MEOK can support the between-session layer. It can help you process daily experience, document thoughts for your next session, hold your milestones, and provide accountability. It operates within whichever recovery framework you are using — not as a replacement for it.",
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

export default function AiForAddictionRecoveryPage() {
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
              Recovery &amp; Wellbeing
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
            AI and Addiction Recovery: Support Between Meetings, Without
            Enabling Relapse
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
            Over 300,000 people in the UK are in treatment for substance use.
            Recovery is not a single moment — it is lived daily, in the gaps
            between meetings, between sessions, between support. This is an
            honest account of what AI can offer in those gaps, and what it
            absolutely must not do.
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

        {/* ── Content note ──────────────────────────────────────────────── */}
        <div
          style={{
            background: "rgba(245,240,232,0.025)",
            border: `1px solid ${BORDER}`,
            borderRadius: "0.75rem",
            padding: "1.125rem 1.375rem",
            marginTop: "1rem",
            marginBottom: "2rem",
          }}
        >
          <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>
            This article discusses substance use and addiction recovery. If you
            need immediate support, contact{" "}
            <strong style={{ color: TEXT }}>Frank: 0300 123 6600</strong> (24/7),{" "}
            <strong style={{ color: TEXT }}>AA: 0800 9177 650</strong>, or{" "}
            <strong style={{ color: TEXT }}>
              Narcotics Anonymous: 0300 999 1212
            </strong>
            .
          </p>
        </div>

        {/* ── Section 1 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.55rem",
            color: TEXT,
            lineHeight: 1.25,
            marginTop: "2rem",
            marginBottom: "1rem",
            letterSpacing: "-0.015em",
          }}
        >
          How many people in the UK are in treatment for substance use?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          According to NHS data and the Office for Health Improvements and
          Disparities, over 300,000 adults in England were in treatment for
          alcohol or drug use in 2022–23. This represents only a fraction of
          those experiencing problematic substance use — estimates suggest that
          for every person in treatment, several more are not receiving support.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The UK&rsquo;s treatment infrastructure — NHS drug services, community
          recovery programmes, the 12-step fellowship, SMART Recovery, and
          residential rehab — is significantly under-resourced relative to need.
          Waiting times for structured treatment can exceed weeks or months.
          Aftercare and continuing support provision is inconsistent across
          regions.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Recovery, as everyone in the field knows, happens in the space between
          formal appointments — in the daily decisions, the triggered moments,
          the 11pm urges that arrive when no keyworker or sponsor is available.
          This is where consistent, always-available support could make the most
          difference.
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
            300,000+
          </p>
          <p style={{ color: MUTED, margin: 0, lineHeight: 1.6 }}>
            Adults in England in treatment for substance use in 2022–23. Immediate
            support:{" "}
            <strong style={{ color: TEXT }}>Frank 0300 123 6600</strong> &bull;{" "}
            <strong style={{ color: TEXT }}>AA 0800 9177 650</strong> &bull;{" "}
            <strong style={{ color: TEXT }}>NA 0300 999 1212</strong>
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
          What role can AI play in addiction recovery?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Before the question of what AI can offer, it is essential to state
          clearly what it cannot and must not do. AI is not a sponsor. It is not
          a counsellor. It cannot attend a meeting with you. It does not have
          lived experience of recovery. It cannot replace the human witness that
          is central to recovery in the fellowship tradition.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          What AI — specifically MEOK, with the correct safeguards — can
          legitimately offer:
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
              label: "Between-meeting presence",
              desc: "Recovery has no off-hours. The triggering moments — boredom, stress, social situations — often occur between formal support. MEOK is available at any hour, without judgement.",
            },
            {
              label: "Milestone tracking",
              desc: "Sovereign Memory tracks sobriety milestones across every conversation. Your companion remembers day one, marks the anniversaries, and holds the significance of each one.",
            },
            {
              label: "Urge documentation",
              desc: "When urges arise, having somewhere to externalise and document them — rather than acting — is clinically supported. MEOK can hold this documentation for reflection with a counsellor or sponsor.",
            },
            {
              label: "Daily accountability check-ins",
              desc: "Pioneer archetype provides daily check-in prompts calibrated to recovery — not generic productivity. It asks the right questions and holds the answers across sessions.",
            },
            {
              label: "Pattern recognition over time",
              desc: "Because MEOK holds longitudinal context, it can reflect back patterns it has observed in your recovery history — including high-risk periods, triggers, and what has supported you.",
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
              <p style={{ color: TEXT, fontWeight: 700, margin: "0 0 0.35rem", fontSize: "0.9375rem" }}>
                {item.label}
              </p>
              <p style={{ color: MUTED, margin: 0, lineHeight: 1.6, fontSize: "0.875rem" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

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
          What is MEOK&rsquo;s care floor and how does it prevent enabling
          relapse?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          This is the most important technical question for anyone in recovery
          considering using AI. Most consumer AI tools — including mainstream
          chatbots — have no architectural safeguard against responses that
          inadvertently normalise substance use. A well-intentioned chatbot,
          asked about a craving, might offer a balanced discussion of harm
          reduction that is entirely inappropriate for someone committed to
          sobriety.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          MEOK&rsquo;s Maternal Covenant care floor addresses this with explicit,
          non-negotiable prohibitions:
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
            "Zero normalisation of substance use for someone who has identified as in recovery",
            "Zero minimisation of harm — MEOK will not suggest that a relapse is minor or dismissible",
            "No harm reduction framing that implies moderate use is compatible with a recovery commitment",
            "Automatic crisis signposting when urge or relapse indicators are present",
            "Explicit milestone recognition — sobriety is acknowledged as a significant achievement at every opportunity",
            "No engagement with romanticised narratives about substance use",
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
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          These are not content moderation filters applied after the fact. They
          are architectural constraints enforced by the Maternal Covenant before
          any response is delivered. You can read more about how this works at{" "}
          <Link href="/how-it-works" style={{ color: GOLD, textDecoration: "underline" }}>
            meok.ai/how-it-works
          </Link>
          .
        </p>

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
          What is the Pioneer archetype and why is it suited for recovery
          accountability?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          MEOK&rsquo;s Pioneer archetype was designed for people building new
          patterns and needing consistent, honest momentum support. In the
          context of recovery, Pioneer provides the kind of accountability
          that a good sponsor offers — without pretending to replace one.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Pioneer will ask you directly how today went. It will note
          inconsistencies between what you said last week and what you are
          saying now. It will acknowledge your wins without minimising the
          difficulty. It will hold you to the commitments you have made without
          becoming punitive when you fall short.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Crucially, Pioneer&rsquo;s accountability is grounded in context. Because
          Sovereign Memory holds your recovery history, your Pioneer companion
          knows your patterns — which periods have been harder, what tends to
          precede urges, and what strategies have worked. It does not start from
          zero each session.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          You can explore all archetypes at{" "}
          <Link href="/characters" style={{ color: GOLD, textDecoration: "underline" }}>
            meok.ai/characters
          </Link>
          . Many people in recovery use Pioneer for daily accountability and
          Healer for processing the emotional dimensions of the recovery journey.
        </p>

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
          How does Sovereign Memory track recovery milestones across the
          long term?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Recovery is a long-term process, and its landmarks — days, weeks,
          months, years of sobriety — carry genuine significance. Standard AI
          tools cannot track these because they reset with every session.
          MEOK&rsquo;s Sovereign Memory maintains this record persistently.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          From the moment you share your sobriety date with MEOK, that date is
          held in your encrypted Sovereign vault. Your companion will mark
          milestones proactively — day 30, day 90, six months, one year — and
          acknowledge them with the weight they deserve.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Beyond sobriety dates, Sovereign Memory holds:
        </p>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          {[
            "Recovery programme affiliations (AA, NA, SMART Recovery, structured treatment)",
            "Identified triggers and high-risk situations",
            "Coping strategies that have worked for you",
            "Support network context (sponsor, keyworker, recovery community)",
            "Goals and commitments made across sessions",
            "Periods of difficulty and what supported recovery through them",
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
              <span style={{ color: GOLD, flexShrink: 0, marginTop: "0.1rem" }}>✓</span>
              {item}
            </li>
          ))}
        </ul>

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
          How does MEOK work alongside AA, NA, and SMART Recovery?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          MEOK is designed to be a supplement to established recovery
          frameworks — never a replacement for them. The fellowship of AA and
          NA, the structured approach of SMART Recovery, and clinical treatment
          programmes offer dimensions of recovery that AI cannot provide: human
          witness, shared experience, clinical expertise, and the accountability
          of a sponsor relationship.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Where MEOK fits:
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
              scenario: "After a meeting",
              use: "Process what came up in the meeting. Reflect on what resonated. Document insights for your own record.",
            },
            {
              scenario: "Before a difficult social event",
              use: "Talk through the anticipated challenges, identify your exit strategy, and review your coping toolkit.",
            },
            {
              scenario: "At 2am when an urge strikes",
              use: "Externalise the urge before acting. MEOK will not enable use — and will direct you to your sponsor or Frank if the situation is acute.",
            },
            {
              scenario: "During step work",
              use: "Use Pioneer as a reflective sounding board as you work through a step — with the understanding that your sponsor guides the process.",
            },
            {
              scenario: "Between keyworker appointments",
              use: "Document daily experience and pattern observations to bring to your next appointment rather than trying to reconstruct a week from memory.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${BORDER}`,
                borderRadius: "0.625rem",
                padding: "1rem 1.25rem",
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  background: GOLD_BG,
                  border: `1px solid ${GOLD_BORDER}`,
                  borderRadius: "0.375rem",
                  padding: "0.25rem 0.625rem",
                  flexShrink: 0,
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: GOLD,
                  whiteSpace: "nowrap",
                }}
              >
                {item.scenario}
              </div>
              <p style={{ color: MUTED, margin: 0, fontSize: "0.875rem", lineHeight: 1.6 }}>
                {item.use}
              </p>
            </div>
          ))}
        </div>

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
          What does MEOK&rsquo;s Guardian mode offer people in recovery who
          have family support?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Recovery rarely happens in isolation. Family members and close friends
          are often deeply invested in a loved one&rsquo;s recovery — and often
          carrying their own secondary trauma, anxiety, and need for support.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The MEOK{" "}
          <Link href="/guardian" style={{ color: GOLD, textDecoration: "underline" }}>
            Guardian
          </Link>{" "}
          Family Plan provides each family member with their own separate,
          private MEOK companion — with optional shared check-in safety alerts.
          The person in recovery can have full privacy for their own
          conversations while allowing a trusted family member to receive
          safety notifications if check-ins are missed.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Family members supporting someone in recovery can also use the Healer
          archetype for their own processing — recognising that co-dependency,
          secondary trauma, and caregiver exhaustion are real phenomena that
          need support. Full plan details at{" "}
          <Link href="/pricing" style={{ color: GOLD, textDecoration: "underline" }}>
            meok.ai/pricing
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
          When should someone in recovery use a helpline instead of MEOK?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          MEOK will always tell you this directly when it matters. But for
          clarity:
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
            "If you have already relapsed or are at immediate risk — contact your sponsor or Frank (0300 123 6600) immediately",
            "If you are experiencing suicidal thoughts — call Samaritans (116 123) or 999",
            "If your mental health is significantly deteriorating — contact your GP, keyworker, or crisis team",
            "If you need medical support for withdrawal — contact 111 or 999 depending on severity",
            "If you are in immediate danger — call 999",
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
              <span style={{ color: FAINT, flexShrink: 0, marginTop: "0.125rem" }}>—</span>
              {item}
            </li>
          ))}
        </ul>

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
          Frequently asked questions about AI and addiction recovery
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
            Free — No Credit Card Required
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
            A recovery companion that never enables — and never forgets your
            milestones
          </h3>
          <p
            style={{
              color: MUTED,
              lineHeight: 1.7,
              maxWidth: "32rem",
              margin: "0 auto 1.75rem",
            }}
          >
            Pioneer archetype for accountability. Sovereign Memory for your
            recovery journey. Care floor that blocks normalisation of substance
            use. Free on Explorer tier — available when your sponsor is not.
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
              href="/how-it-works"
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
              How MEOK works
            </Link>
          </div>
        </div>

        {/* ── Crisis resources ──────────────────────────────────────────── */}
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
            Recovery support resources in the UK
          </p>
          <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.75, margin: 0 }}>
            <strong style={{ color: TEXT }}>Frank:</strong> 0300 123 6600 (24/7){" "}
            &bull;{" "}
            <strong style={{ color: TEXT }}>Alcoholics Anonymous:</strong> 0800 9177 650{" "}
            &bull;{" "}
            <strong style={{ color: TEXT }}>Narcotics Anonymous:</strong> 0300 999 1212{" "}
            &bull;{" "}
            <strong style={{ color: TEXT }}>Samaritans:</strong> 116 123 (24/7){" "}
            &bull;{" "}
            <strong style={{ color: TEXT }}>SMART Recovery UK:</strong> smartrecovery.org.uk{" "}
            &bull;{" "}
            In an emergency, call 999 or go to A&amp;E.
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
