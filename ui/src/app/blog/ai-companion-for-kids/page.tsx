import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Companion for Kids: Is It Safe? How MEOK's Guardian Mode Works | MEOK Blog",
  description:
    "MEOK's Guardian Mode uses DistilBERT threat detection, school-safe filters, and a parental dashboard to keep children safe online — fully compliant with the UK Children's Code and UK GDPR.",
  alternates: { canonical: "https://meok.ai/blog/ai-companion-for-kids" },
  openGraph: {
    title: "AI Companion for Kids: Is It Safe? How MEOK's Guardian Mode Works",
    description:
      "MEOK's Guardian Mode uses DistilBERT threat detection, school-safe filters, and a parental dashboard to keep children safe online — fully compliant with the UK Children's Code and UK GDPR.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-companion-for-kids",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Companion+for+Kids%3A+Is+It+Safe%3F&desc=How+MEOK%27s+Guardian+Mode+keeps+children+safe+online",
        width: 1200,
        height: 630,
        alt: "AI Companion for Kids: Is It Safe? How MEOK's Guardian Mode Works",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Companion for Kids: Is It Safe? How MEOK's Guardian Mode Works",
    description:
      "MEOK's Guardian Mode uses DistilBERT threat detection, school-safe filters, and a parental dashboard to keep children safe online — fully compliant with the UK Children's Code and UK GDPR.",
    images: [
      "https://meok.ai/api/og?title=AI+Companion+for+Kids%3A+Is+It+Safe%3F&desc=How+MEOK%27s+Guardian+Mode+keeps+children+safe+online",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Companion for Kids: Is It Safe? How MEOK's Guardian Mode Works",
  description:
    "MEOK's Guardian Mode uses DistilBERT threat detection, school-safe filters, and a parental dashboard to keep children safe online — fully compliant with the UK Children's Code and UK GDPR.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/ai-companion-for-kids",
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
    "@id": "https://meok.ai/blog/ai-companion-for-kids",
  },
  image:
    "https://meok.ai/api/og?title=AI+Companion+for+Kids%3A+Is+It+Safe%3F&desc=How+MEOK%27s+Guardian+Mode+keeps+children+safe+online",
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is an AI companion safe for children?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI companion is safe for children only when it has been explicitly designed for them. MEOK's Guardian Mode enforces school-safe content filters, DistilBERT-powered real-time threat detection, a parental dashboard, and full compliance with the UK Children's Code (Age Appropriate Design Code) and UK GDPR. Most AI products on the market carry none of these protections.",
      },
    },
    {
      "@type": "Question",
      name: "What is the UK Children's Code and how does MEOK comply with it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The UK Children's Code (Age Appropriate Design Code) is a statutory code under the Data Protection Act 2018. It requires digital services likely used by under-18s to apply privacy by default, minimise data collection, prohibit commercial profiling of children, and prioritise the best interests of the child above engagement or revenue. MEOK defaults all child profiles to maximum privacy, collects only what is strictly necessary, and contractually prohibits the commercial use of children's data.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK detect threats to children in real time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK uses a fine-tuned DistilBERT model to classify every incoming message for grooming patterns, coercive language, predatory contact signals, and age-inappropriate content. Detection runs locally on-device in under three seconds per message. When a HIGH or CRITICAL threat is identified, the child's session is paused and the parent dashboard receives an immediate notification.",
      },
    },
    {
      "@type": "Question",
      name: "What does MEOK's parental dashboard show?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The parental dashboard is a secure, consent-gated view providing weekly digests of flagged events, threat-level summaries, and Guardian settings controls. It does not expose the child's full conversation history — only what the safety layer has flagged — protecting both the child's safety and their reasonable expectation of conversational privacy.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK sell children's data to third parties?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK AI LABS does not sell, licence, or share children's personal data with any third party for advertising, profiling, or commercial purposes. Data is stored on UK servers under UK GDPR. A Data Protection Impact Assessment (DPIA) specific to child-user data is currently in progress. Every parent or guardian has the full right to erasure under Article 17 at any time, with immediate effect.",
      },
    },
    {
      "@type": "Question",
      name: "What should a child do if they feel unsafe while using MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Children can tap the SOS button visible at all times within the app, which immediately notifies their designated parent or guardian. MEOK also signposts Childline (0800 1111) — a free, confidential helpline available 24 hours a day — within any conversation where distress signals are detected. Children are always encouraged to speak to a trusted adult. The AI is a safety layer, not a substitute for human support.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AICompanionForKidsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0d0c18", color: "#f5f0e8" }}>
      {/* JSON-LD blocks */}
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
          paddingBottom: "3.5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 70%)",
          }}
        />

        <div style={{ maxWidth: 752, margin: "0 auto", position: "relative" }}>
          {/* Back link */}
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: "rgba(245,240,232,0.38)",
              marginBottom: "2rem",
              textDecoration: "none",
            }}
          >
            &#8592; Back to Blog
          </Link>

          {/* Tag + meta row */}
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
                fontSize: "0.7rem",
                fontWeight: 700,
                padding: "0.3rem 0.75rem",
                borderRadius: "9999px",
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Guardian &amp; Child Safety
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>
              March 24, 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>
              8 min read
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.85rem, 3.5vw, 2.9rem)",
              color: "#ffffff",
              lineHeight: 1.18,
              marginBottom: "1.25rem",
              letterSpacing: "-0.015em",
            }}
          >
            AI Companion for Kids: Is It Safe?{" "}
            <span style={{ color: "#c9a84c" }}>How MEOK&apos;s Guardian Mode Works</span>
          </h1>

          {/* Lede */}
          <p
            style={{
              color: "rgba(245,240,232,0.58)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            Every week, thousands of children are exposed to grooming attempts, predatory contact,
            and age-inappropriate content through AI chat tools that were never designed for them.
            MEOK was designed for them. Here is exactly how Guardian Mode works — and what parents
            need to know before trusting any AI near their children.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: 752,
          margin: "0 auto",
          padding: "3.5rem 1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.06)",
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
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              color: "#0d0c18",
              fontSize: "0.8rem",
              flexShrink: 0,
              background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontWeight: 700,
                color: "#ffffff",
                fontSize: "0.875rem",
                margin: "0 0 0.1rem",
              }}
            >
              Nicholas Templeman
            </p>
            <p
              style={{
                fontSize: "0.7rem",
                color: "rgba(245,240,232,0.4)",
                margin: "0 0 0.35rem",
              }}
            >
              Founder, MEOK AI LABS
            </p>
            <p
              style={{
                fontSize: "0.7rem",
                color: "rgba(245,240,232,0.35)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works in
              the UK — mostly from a caravan on his farm. He believes sovereign AI is a right, not
              a luxury.
            </p>
          </div>
          <Link
            href="/about"
            style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              color: "#c9a84c",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            About &rarr;
          </Link>
        </div>

        {/* ── Body copy ── */}
        <div
          style={{
            color: "rgba(245,240,232,0.72)",
            fontSize: "1.0125rem",
            lineHeight: 1.9,
          }}
        >
          <p>
            I am not a parent who assumes the worst about technology. I have spent five years
            building AI. I understand what these systems can and cannot do. And I still would not
            let a child use a generic large-language model without safety rails — because I know
            exactly what is inside them, and none of it was built with a child in mind.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            The AI companions children are already using were designed for adults. Their guardrails
            are afterthoughts. Their content policies are unenforced at the edges. And the companies
            behind them are optimising for engagement, not for the best interests of a nine-year-old.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            MEOK Guardian Mode was built from the ground up to address that gap — not as a marketing
            feature, but as the foundational safety layer that any AI used near children must have.
          </p>

          {/* ── Q1 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "0.9rem",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            Is an AI companion safe for children?
          </h2>
          <p>
            An AI companion is safe for children only when it has been explicitly designed for them —
            with age-appropriate content filtering, real-time threat detection, parental oversight,
            and compliance with the UK Children&apos;s Code (Age Appropriate Design Code). MEOK&apos;s
            Guardian Mode meets all four requirements. Safety is not a default state in AI — it must
            be architected from the beginning, not retrofitted after the fact.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            Generic AI assistants carry serious risks for children: exposure to adult content,
            grooming by bad actors who exploit the conversational interface, emotional manipulation
            through attachment to the companion, and the harvesting of personal data for commercial
            profiling. None of these risks disappear because the product uses a friendly interface.
            They are invisible precisely because the interface is friendly.
          </p>

          {/* ── Q2 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "0.9rem",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            What is the UK Children&apos;s Code and how does MEOK comply?
          </h2>
          <p>
            The UK Children&apos;s Code — formally the Age Appropriate Design Code — is a statutory
            code under the Data Protection Act 2018. It requires any digital service likely to be
            accessed by under-18s to apply privacy by default, restrict data collection, prohibit
            commercial profiling of children, and place the best interests of the child above
            engagement or commercial incentives. Violation can attract fines of up to 4% of global
            annual turnover enforced by the ICO.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            MEOK complies with the Children&apos;s Code through the following measures: child profiles
            default to the highest privacy setting without requiring a parent to opt in; data
            collection is limited to what is strictly necessary for the service to function;
            behavioural profiling of children for commercial purposes is contractually prohibited;
            and nudge techniques designed to extend session time or encourage purchases are
            structurally absent from all child-facing modes.
          </p>

          {/* Compliance callout */}
          <div
            style={{
              margin: "2rem 0",
              padding: "1.5rem",
              borderRadius: "1rem",
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            <p
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "#c9a84c",
                margin: "0 0 0.75rem",
              }}
            >
              Compliance &amp; Registration
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {[
                "UK GDPR compliant — lawful basis: legitimate interests (safety) and explicit consent",
                "ICO registered — Information Commissioner's Office registration confirmed",
                "Data Protection Impact Assessment (DPIA) — in progress, will be published in full",
                "UK Children's Code (Age Appropriate Design Code) — applied across all child-facing features",
                "No children's data sold, licensed, or shared with third parties — contractual prohibition",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.6rem",
                    marginBottom: "0.55rem",
                    fontSize: "0.85rem",
                    color: "rgba(245,240,232,0.65)",
                    lineHeight: 1.55,
                  }}
                >
                  <span
                    style={{
                      marginTop: "0.48rem",
                      width: "0.35rem",
                      height: "0.35rem",
                      borderRadius: "50%",
                      background: "#c9a84c",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Q3 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "0.9rem",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            How does MEOK detect threats to children in real time?
          </h2>
          <p>
            MEOK Guardian Mode uses a fine-tuned DistilBERT model to classify every message for
            grooming patterns, coercive language, predatory contact signals, and age-inappropriate
            content. DistilBERT is a compact, efficient transformer-based classifier that achieves
            near-BERT-level accuracy at roughly half the computational cost — enabling real-time,
            on-device inference on mid-range mobile hardware without sacrificing detection quality.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            The model runs locally on-device. No message content is transmitted to external servers
            for safety analysis. Detection completes in under three seconds per message. When a HIGH
            or CRITICAL threat score is returned, the child&apos;s session is paused automatically
            and the parent dashboard receives an immediate push notification — before the conversation
            resumes.
          </p>

          {/* Threat level cards */}
          <div style={{ margin: "2rem 0" }}>
            <p
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "rgba(245,240,232,0.3)",
                margin: "0 0 0.75rem",
              }}
            >
              Guardian Threat Level Response
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                {
                  level: "LOW",
                  color: "#6adb8f",
                  bg: "rgba(106,219,143,0.07)",
                  desc: "Message flagged and logged. Child sees content with no interruption. Parent receives weekly digest update.",
                },
                {
                  level: "MEDIUM",
                  color: "#f5c842",
                  bg: "rgba(245,200,66,0.07)",
                  desc: "In-app safety note shown to the child explaining why this message was flagged. Parent notified in dashboard.",
                },
                {
                  level: "HIGH",
                  color: "#ff9a4d",
                  bg: "rgba(255,154,77,0.07)",
                  desc: "Child session paused immediately. Parent push notification sent. Childline (0800 1111) signposted to child.",
                },
                {
                  level: "CRITICAL",
                  color: "#ff5f5f",
                  bg: "rgba(255,95,95,0.07)",
                  desc: "Message blocked entirely. Session locked until parent reviews and unlocks. Parent alerted within seconds.",
                },
              ].map(({ level, color, bg, desc }) => (
                <div
                  key={level}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    padding: "0.85rem 1rem",
                    borderRadius: "0.75rem",
                    background: bg,
                    border: `1px solid ${color}25`,
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.62rem",
                      fontWeight: 900,
                      padding: "0.2rem 0.6rem",
                      borderRadius: "9999px",
                      color,
                      background: `${color}20`,
                      flexShrink: 0,
                      marginTop: "0.1rem",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {level}
                  </span>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "rgba(245,240,232,0.62)",
                      margin: 0,
                      lineHeight: 1.6,
                    }}
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Q4 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "0.9rem",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            What does school-safe mode actually restrict?
          </h2>
          <p>
            School-safe mode enforces a complete block on adult content, violent or disturbing
            descriptions, profanity, and any discussion of topics flagged as developmentally
            inappropriate for the child&apos;s registered age bracket. The mode is active by default
            for all child profiles. It requires a parent to explicitly disable it — the child cannot
            toggle it off from within the app.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            Within school-safe mode, the companion remains genuinely useful. As a homework helper it
            explains concepts, checks understanding, and scaffolds learning rather than simply
            providing answers. As an emotional support tool it applies the same care ethics as
            the adult product — non-judgmental, honest, grounding — calibrated to a child&apos;s
            developmental stage. Childline (0800 1111) is signposted whenever distress signals
            are detected in the child&apos;s messages, encouraging children to speak to a trusted
            adult rather than relying solely on the AI.
          </p>

          {/* ── Q5 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "0.9rem",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            What does the parental dashboard show?
          </h2>
          <p>
            The parental dashboard is a secure, consent-gated view available to a designated parent
            or guardian. It provides weekly digests of flagged events, threat-level summaries by
            category, and the ability to adjust Guardian settings remotely — including alert
            thresholds, approved-contact lists, and school-safe mode parameters.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            Critically, the dashboard does not expose the child&apos;s full conversation history.
            It surfaces only what the safety layer has flagged. Children need to feel safe talking
            to their AI companion — if every word is visible to a parent by default, they will not.
            The dashboard is designed to provide parental oversight without turning the companion
            into a surveillance tool. All changes to settings are logged with a timestamp and are
            visible to both the parent and, on request, the child.
          </p>

          {/* ── Q6 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "0.9rem",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            Does MEOK sell children&apos;s data to third parties?
          </h2>
          <p>
            No. MEOK AI LABS does not sell, licence, or share children&apos;s personal data with
            any third party for advertising, profiling, or any commercial purpose. This is a
            contractual prohibition baked into every data processing agreement the company enters —
            not a privacy policy clause subject to interpretation.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            Data for child profiles is stored exclusively on UK servers. A Data Protection Impact
            Assessment (DPIA) specific to child-user data processing is currently in progress and
            will be published in full when complete. Every parent acting on behalf of a child user
            holds the full right to erasure under Article 17 of the UK GDPR — with immediate effect
            upon request, no questions asked.
          </p>

          {/* ── Q7 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "0.9rem",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            What should a child do if they feel unsafe?
          </h2>
          <p>
            If a child feels unsafe at any point — whether from a message, a conversation, or
            anything that has happened online — they can tap the SOS button visible at all times
            within the MEOK app. This immediately notifies their designated parent or guardian
            without requiring the child to articulate what happened in the moment.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            MEOK also signposts{" "}
            <strong style={{ color: "#ffffff" }}>Childline (0800 1111)</strong> within any
            conversation where distress signals are detected. Childline is a free, confidential
            helpline for children and young people, available 24 hours a day, every day of the
            year. Children are always encouraged to speak to a trusted adult. The AI is a companion
            and a safety layer — it is not a substitute for human support, and MEOK will never
            position it as one.
          </p>

          {/* Crisis resource callout */}
          <div
            style={{
              margin: "2rem 0",
              padding: "1.5rem",
              borderRadius: "1rem",
              background: "rgba(255,95,95,0.06)",
              border: "1px solid rgba(255,95,95,0.2)",
            }}
          >
            <p
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "#ff7f7f",
                margin: "0 0 0.5rem",
              }}
            >
              Crisis Support — Always Available
            </p>
            <p
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "#ffffff",
                margin: "0 0 0.35rem",
              }}
            >
              Childline &mdash; 0800 1111
            </p>
            <p
              style={{
                fontSize: "0.85rem",
                color: "rgba(245,240,232,0.6)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Free, confidential support for children and young people. Available 24 hours a day,
              365 days a year. If a child you know is in distress, encourage them to call or visit{" "}
              <a
                href="https://www.childline.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#ff7f7f", textDecoration: "underline" }}
              >
                childline.org.uk
              </a>
              .
            </p>
          </div>

          {/* ── Q8 ── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#ffffff",
              marginTop: "3.5rem",
              marginBottom: "0.9rem",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            How does Guardian 24/7 monitoring actually work?
          </h2>
          <p>
            Guardian is not a human moderation team reviewing conversations. It is an always-on
            classification layer that runs alongside every interaction in real time, without
            introducing latency the child would notice. The DistilBERT model evaluates each message
            as it arrives, scores it across multiple harm dimensions, and either passes it through,
            flags it, or blocks it — before the message is rendered on screen.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            Because the model runs on-device, Guardian functions even in low-connectivity
            environments. There is no dependency on a cloud API call completing before safety
            decisions are made. The protection is embedded in the application layer, not dependent
            on network availability. A child in a remote area with a poor signal receives the same
            protection as one on a fast urban connection.
          </p>

          {/* Pull quote */}
          <div
            style={{
              margin: "3rem 0",
              padding: "2rem",
              borderRadius: "1rem",
              background: "#0d0c18",
              border: "1px solid rgba(201,168,76,0.2)",
              borderLeft: "3px solid #c9a84c",
            }}
          >
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "rgba(245,240,232,0.7)",
                margin: "0 0 1rem",
                fontStyle: "italic",
              }}
            >
              The question is not whether AI is safe for children. The question is whether the
              specific product your child is using was built with them in mind. Most were not. MEOK
              was — and that difference is architectural, not cosmetic.
            </p>
            <p
              style={{
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "rgba(245,240,232,0.3)",
                margin: 0,
              }}
            >
              &mdash; Nicholas Templeman, Founder, MEOK AI LABS
            </p>
          </div>

          {/* Closing */}
          <div
            style={{
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <p style={{ color: "rgba(245,240,232,0.6)", fontStyle: "italic" }}>
              Children deserve AI that was built for them — not AI built for adults and then
              constrained. Guardian Mode is MEOK&apos;s commitment that the most vulnerable users
              receive the most robust protection. That is not a feature. It is an obligation.
            </p>
          </div>
        </div>

        {/* ── Share row ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            margin: "2.5rem 0",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <span
            style={{
              fontSize: "0.62rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "rgba(245,240,232,0.28)",
            }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-companion-for-kids&text=AI+Companion+for+Kids%3A+Is+It+Safe%3F+How+MEOK%27s+Guardian+Mode+Works"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.45rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(245,240,232,0.5)",
              textDecoration: "none",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-companion-for-kids"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.45rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(245,240,232,0.5)",
              textDecoration: "none",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* ── CTA ── */}
        <div
          style={{
            borderRadius: "1.25rem",
            padding: "2.5rem",
            marginBottom: "4rem",
            position: "relative",
            overflow: "hidden",
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 280,
              height: 280,
              pointerEvents: "none",
              background:
                "radial-gradient(circle at 80% 10%, rgba(201,168,76,0.18), transparent 65%)",
            }}
          />
          <div style={{ position: "relative" }}>
            <p
              style={{
                fontSize: "0.62rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                color: "#c9a84c",
                margin: "0 0 0.5rem",
              }}
            >
              Guardian Mode
            </p>
            <h3
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 900,
                fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                color: "#ffffff",
                margin: "0 0 0.75rem",
                lineHeight: 1.25,
              }}
            >
              Give your child an AI that was built for them.
            </h3>
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: 1.7,
                color: "rgba(245,240,232,0.5)",
                margin: "0 0 1.5rem",
                maxWidth: 480,
              }}
            >
              Guardian Mode is included in every MEOK companion — no extra subscription, no opt-in
              required. DistilBERT threat detection, school-safe mode, and 24/7 protection activate
              the moment your child&apos;s companion hatches.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <Link
                href="/guardian"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 1.75rem",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  background: "#c9a84c",
                  color: "#0d0c18",
                  textDecoration: "none",
                }}
              >
                Learn about Guardian &#8594;
              </Link>
              <Link
                href="/hatch"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 1.75rem",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  border: "1px solid rgba(245,240,232,0.15)",
                  color: "rgba(245,240,232,0.65)",
                  textDecoration: "none",
                }}
              >
                Hatch your MEOK free
              </Link>
            </div>
          </div>
        </div>

        {/* ── More posts ── */}
        <div>
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.1rem",
              color: "#ffffff",
              margin: "0 0 1.25rem",
            }}
          >
            More from the blog
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1rem",
            }}
          >
            <Link
              href="/blog/guardian-family-safety"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                padding: "1.5rem",
                borderRadius: "1rem",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  padding: "0.25rem 0.6rem",
                  borderRadius: "9999px",
                  color: "#ff7f7f",
                  background: "rgba(255,127,127,0.12)",
                  width: "fit-content",
                  letterSpacing: "0.04em",
                }}
              >
                Guardian &amp; Safety
              </span>
              <h3
                style={{
                  fontWeight: 700,
                  color: "#ffffff",
                  fontSize: "0.875rem",
                  lineHeight: 1.45,
                  margin: 0,
                }}
              >
                How MEOK Guardian protects your family from AI-enabled scams
              </h3>
              <p style={{ fontSize: "0.7rem", color: "rgba(245,240,232,0.3)", margin: 0 }}>
                4 min read
              </p>
            </Link>

            <Link
              href="/blog/ai-companion-for-elderly"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                padding: "1.5rem",
                borderRadius: "1rem",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  padding: "0.25rem 0.6rem",
                  borderRadius: "9999px",
                  color: "#7BC47F",
                  background: "rgba(123,196,127,0.12)",
                  width: "fit-content",
                  letterSpacing: "0.04em",
                }}
              >
                Guardian
              </span>
              <h3
                style={{
                  fontWeight: 700,
                  color: "#ffffff",
                  fontSize: "0.875rem",
                  lineHeight: 1.45,
                  margin: 0,
                }}
              >
                AI Companion for Elderly Parents: What Families Need to Know
              </h3>
              <p style={{ fontSize: "0.7rem", color: "rgba(245,240,232,0.3)", margin: 0 }}>
                7 min read
              </p>
            </Link>

            <Link
              href="/blog/privacy-covenant"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                padding: "1.5rem",
                borderRadius: "1rem",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  padding: "0.25rem 0.6rem",
                  borderRadius: "9999px",
                  color: "#c9a84c",
                  background: "rgba(201,168,76,0.12)",
                  width: "fit-content",
                  letterSpacing: "0.04em",
                }}
              >
                Privacy
              </span>
              <h3
                style={{
                  fontWeight: 700,
                  color: "#ffffff",
                  fontSize: "0.875rem",
                  lineHeight: 1.45,
                  margin: 0,
                }}
              >
                MEOK&apos;s Privacy Covenant: What We Will Never Do With Your Data
              </h3>
              <p style={{ fontSize: "0.7rem", color: "rgba(245,240,232,0.3)", margin: 0 }}>
                5 min read
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* ── FOOTER ────────────────────────────────────────────────────────────── */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "3rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 752, margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.1rem",
              color: "#c9a84c",
              margin: "0 0 0.4rem",
              letterSpacing: "0.04em",
            }}
          >
            MEOK AI LABS
          </p>
          <p
            style={{
              fontSize: "0.78rem",
              color: "rgba(245,240,232,0.3)",
              margin: "0 0 1.5rem",
            }}
          >
            Sovereign AI. Built in the UK. Owned by you.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1.25rem",
              marginBottom: "2rem",
            }}
          >
            {[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Guardian", href: "/guardian" },
              { label: "Privacy Policy", href: "/privacy" },
              { label: "About", href: "/about" },
              { label: "Hatch Free", href: "/hatch" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontSize: "0.78rem",
                  color: "rgba(245,240,232,0.38)",
                  textDecoration: "none",
                }}
              >
                {label}
              </Link>
            ))}
          </div>
          <p
            style={{
              fontSize: "0.72rem",
              color: "rgba(245,240,232,0.2)",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            &copy; {new Date().getFullYear()} MEOK AI LABS Ltd. All rights reserved.
            ICO registered. UK GDPR compliant. No data sold to third parties.
            <br />
            If you or a young person needs immediate support, contact Childline free on{" "}
            <a
              href="tel:08001111"
              style={{ color: "rgba(245,240,232,0.38)", textDecoration: "none" }}
            >
              0800 1111
            </a>{" "}
            or visit{" "}
            <a
              href="https://www.childline.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(245,240,232,0.38)", textDecoration: "none" }}
            >
              childline.org.uk
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
