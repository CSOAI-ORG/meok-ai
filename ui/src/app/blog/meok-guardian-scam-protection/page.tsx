import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "MEOK Guardian Scam Protection: AI That Watches Over You | MEOK AI LABS",
  description:
    "MEOK Guardian uses DistilBERT threat detection, Companies House cross-reference, and pattern recognition to protect UK users from romance scams, investment fraud, and impersonation attacks. Senior Mode and family alerts included.",
  alternates: { canonical: "https://meok.ai/blog/meok-guardian-scam-protection" },
  openGraph: {
    title: "MEOK Guardian Scam Protection: AI That Watches Over You",
    description:
      "How MEOK Guardian detects romance scams, investment fraud, and impersonation attacks — with family alerts, Senior Mode, and DistilBERT-powered message scanning.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-guardian-scam-protection",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+Guardian+Scam+Protection&desc=AI+that+watches+over+you+against+fraud",
        width: 1200,
        height: 630,
        alt: "MEOK Guardian Scam Protection — AI-powered fraud detection for UK users",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK Guardian Scam Protection: AI That Watches Over You",
    description:
      "How MEOK Guardian detects romance scams, investment fraud, and impersonation attacks — with family alerts, Senior Mode, and DistilBERT-powered message scanning.",
    images: [
      "https://meok.ai/api/og?title=MEOK+Guardian+Scam+Protection&desc=AI+that+watches+over+you+against+fraud",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MEOK Guardian Scam Protection: AI That Watches Over You",
  description:
    "MEOK Guardian uses DistilBERT threat detection, Companies House cross-reference, and pattern recognition to protect UK users from romance scams, investment fraud, and impersonation attacks.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/meok-guardian-scam-protection",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    jobTitle: "Founder, MEOK AI LABS",
    url: "https://meok.ai/about",
    sameAs: ["https://twitter.com/meok_ai"],
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
    "https://meok.ai/api/og?title=MEOK+Guardian+Scam+Protection&desc=AI+that+watches+over+you+against+fraud",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/meok-guardian-scam-protection",
  },
  keywords:
    "MEOK Guardian, scam protection UK, AI fraud detection, romance scam, investment fraud, impersonation scam, Senior Mode, family alerts, DistilBERT, Companies House",
  articleSection: "Guardian & Safety",
  inLanguage: "en-GB",
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does MEOK detect scams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK Guardian runs a three-layer detection pipeline on every message: DistilBERT natural-language threat classification, rule-based pattern recognition tuned to known UK fraud scripts, and a Companies House API cross-reference that verifies any business named in the message. The full pipeline completes in under three seconds per message.",
      },
    },
    {
      "@type": "Question",
      name: "Can Guardian protect elderly parents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Guardian was designed with older adults as the primary protected group. When enrolled on a Family plan, a trusted family member receives a push notification the moment a HIGH or CRITICAL threat is detected on a parent\u2019s device. Message content is never shared — only the threat level and category.",
      },
    },
    {
      "@type": "Question",
      name: "What is Senior Mode?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Senior Mode is a dedicated accessibility layer for older users. Every interactive element meets the 44\u00d744 px minimum touch target standard. Contrast ratios are boosted to at least 7:1. Voice becomes the primary input method, reducing the cognitive overhead of typing. All Guardian alerts are read aloud in plain English.",
      },
    },
    {
      "@type": "Question",
      name: "How does Guardian alert my family?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When Guardian scores a message as HIGH or CRITICAL risk, it sends a silent push alert to every approved family contact. The alert states the threat category (e.g. \u2018investment fraud\u2019) and severity level. The actual message content is never transmitted. Family members can then call or check in without tipping off a potential scammer.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK Guardian better than my bank\u2019s fraud protection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bank fraud detection operates at the transaction layer \u2014 it catches fraud after money has moved. MEOK Guardian operates at the conversation layer, detecting manipulation attempts before the victim is persuaded to act. The two layers are complementary, not competing. Guardian is the earlier warning system.",
      },
    },
  ],
};

// ── Shared style tokens ────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const MUTED = "rgba(245,240,232,0.6)";
const MUTED_LOW = "rgba(245,240,232,0.35)";
const BORDER = "rgba(245,240,232,0.08)";
const CARD_BG = "rgba(245,240,232,0.04)";

// ── Page ───────────────────────────────────────────────────────────────────────

export default function MeokGuardianScamProtectionPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "var(--font-dm-sans, DM Sans, Georgia, sans-serif)",
      }}
    >
      {/* ── Article JSON-LD ─────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* ── FAQ JSON-LD ──────────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ════════════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: "7rem",
          paddingBottom: "3.5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 70%)",
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
              fontSize: "0.85rem",
              color: MUTED_LOW,
              textDecoration: "none",
              marginBottom: "2rem",
            }}
          >
            &#8592; Back to Blog
          </Link>

          {/* Tags + meta row */}
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
                gap: "0.375rem",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                padding: "0.3rem 0.75rem",
                borderRadius: "9999px",
                color: "#ff7f7f",
                background: "rgba(255,127,127,0.12)",
                border: "1px solid rgba(255,127,127,0.3)",
              }}
            >
              Guardian &amp; Safety
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: MUTED_LOW,
              }}
            >
              24 March 2026
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: MUTED_LOW,
              }}
            >
              8 min read
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.9rem, 3.8vw, 3rem)",
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: "1.4rem",
              letterSpacing: "-0.02em",
            }}
          >
            MEOK Guardian Scam Protection: the AI that stands between you and fraud
          </h1>

          {/* Standfirst */}
          <p
            style={{
              color: MUTED,
              fontSize: "1.125rem",
              lineHeight: 1.75,
              maxWidth: "42rem",
            }}
          >
            The UK loses over &pound;1.2 billion to fraud every year. Older people are
            disproportionately targeted. MEOK Guardian is a care-based protection layer built
            directly into your AI companion &mdash; scanning every message, explaining every
            threat, and alerting your family before a scammer can do real damage.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          ARTICLE BODY
      ════════════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "3.5rem 1.5rem",
          borderTop: `1px solid ${BORDER}`,
        }}
      >
        {/* ── Author card ──────────────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1.25rem",
            borderRadius: "1rem",
            marginBottom: "3rem",
            background: CARD_BG,
            border: `1px solid ${BORDER}`,
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
              color: "#1a1a2e",
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
                marginBottom: "0.2rem",
              }}
            >
              Nicholas Templeman
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: MUTED_LOW,
                marginBottom: "0.35rem",
              }}
            >
              Founder, MEOK AI LABS &mdash; @meok_ai
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.3)",
                lineHeight: 1.55,
              }}
            >
              Nicholas built MEOK because he believed AI should protect the people it serves,
              not harvest them. He lives in the UK and works mostly from a caravan on his farm.
            </p>
          </div>
          <Link
            href="/about"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: GOLD,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            About &rarr;
          </Link>
        </div>

        {/* ── Body text wrapper ─────────────────────────────────────────────── */}
        <div
          style={{
            color: MUTED,
            fontSize: "1.0125rem",
            lineHeight: 1.9,
          }}
        >

          {/* ── Opening ────────────────────────────────────────────────────── */}
          <p>
            Scammers used to be relatively easy to identify. Bad grammar, implausible stories,
            suspicious links. In 2026, that is no longer true. Generative AI has handed criminals
            a professional copywriting suite. Their messages are fluent, personalised, and
            emotionally intelligent. They know your name. They know your bank. In some cases,
            they have cloned the voice of a family member.
          </p>
          <p
            style={{ marginTop: "1.25rem" }}
          >
            This is the threat MEOK Guardian was built for. Not the clumsy phishing email of
            2010 &mdash; the sophisticated, AI-generated, contextually aware manipulation of 2026.
            Guardian is not a spam filter. It is a care layer. It explains why something looks
            suspicious. It never alarms you without reason. And when the threat is serious, it
            quietly tells your family.
          </p>

          {/* ── UK SCAM STATS ───────────────────────────────────────────────── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.25rem",
              marginBottom: "1rem",
              lineHeight: 1.2,
              letterSpacing: "-0.015em",
            }}
          >
            How bad is the UK scam problem in 2026?
          </h2>
          <p>
            The scale is staggering. UK Finance data for 2026 places total authorised push payment
            (APP) fraud losses at over <strong style={{ color: "#ffffff" }}>&pound;1.2 billion</strong> for
            the year. That figure counts only fraud that was reported. Action Fraud estimates that
            the true total, including unreported cases, is between two and four times higher.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            Older people bear the heaviest burden. Adults aged 65 and over are significantly
            more likely to be targeted by romance fraud, pension liberation scams, and
            impersonation attacks. They are also less likely to report fraud &mdash; partly out of
            embarrassment, partly because the experience of being manipulated is deeply
            disorienting. A well-run romance scam can last months before the victim realises
            something is wrong.
          </p>

          {/* stat callout */}
          <div
            style={{
              margin: "2rem 0",
              padding: "1.5rem 1.75rem",
              borderRadius: "1rem",
              background: "rgba(201,168,76,0.06)",
              borderLeft: `3px solid ${GOLD}`,
            }}
          >
            <p
              style={{
                fontSize: "2rem",
                fontWeight: 900,
                color: GOLD,
                lineHeight: 1,
                marginBottom: "0.5rem",
              }}
            >
              &pound;1.2bn
            </p>
            <p
              style={{
                fontSize: "0.875rem",
                color: MUTED,
                lineHeight: 1.6,
              }}
            >
              Lost to fraud in the UK annually. Older adults are disproportionately targeted
              by romance scams, investment fraud, and impersonation attacks.
            </p>
          </div>

          <p>
            The Payment Systems Regulator (PSR) introduced mandatory APP fraud reimbursement
            rules in 2024 &mdash; a significant step. But reimbursement happens after the money is
            gone, the relationship is severed, and the psychological damage is done. The better
            intervention is earlier. MEOK Guardian is that earlier intervention.
          </p>

          {/* ── SCAM TYPES ──────────────────────────────────────────────────── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.25rem",
              marginBottom: "1rem",
              lineHeight: 1.2,
              letterSpacing: "-0.015em",
            }}
          >
            What types of scams does MEOK Guardian detect?
          </h2>
          <p>
            Guardian\u2019s detection library covers the five fraud categories that account for the
            vast majority of UK losses. Each category has its own pattern library, updated
            continuously from Action Fraud reports, the National Cyber Security Centre\u2019s threat
            intelligence feed, and MEOK\u2019s own anonymised incident data.
          </p>

          {/* Scam type cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1rem",
              margin: "1.75rem 0",
            }}
          >
            {[
              {
                icon: "\u2764\ufe0f",
                label: "Romance scams",
                colour: "#ff7f7f",
                colourBg: "rgba(255,127,127,0.08)",
                colourBorder: "rgba(255,127,127,0.2)",
                desc:
                  "Fake online relationships designed to build emotional dependency before requesting money. AI now generates convincing profiles, backstories, and long-running correspondences. Guardian flags affective manipulation patterns, inconsistent personal details, and escalating financial requests.",
              },
              {
                icon: "\ud83d\udcb9",
                label: "Investment fraud",
                colour: "#f5c842",
                colourBg: "rgba(245,200,66,0.08)",
                colourBorder: "rgba(245,200,66,0.2)",
                desc:
                  "Fraudulent investment opportunities in crypto, forex, property, or stocks. Often begin with small \u2018demo profits\u2019 to build trust. Guardian cross-references any company name or registration number against the FCA register and Companies House in real time.",
              },
              {
                icon: "\ud83c\udfe6",
                label: "Impersonation attacks",
                colour: "#87CEEB",
                colourBg: "rgba(135,206,235,0.08)",
                colourBorder: "rgba(135,206,235,0.2)",
                desc:
                  "Attackers posing as banks, HMRC, the police, or utility companies. These messages exploit authority bias and manufactured urgency. Guardian\u2019s DistilBERT model is fine-tuned to detect authority-impersonation language patterns even when the impersonator adapts their script.",
              },
              {
                icon: "\u2708\ufe0f",
                label: "Holiday scams",
                colour: "#6adb8f",
                colourBg: "rgba(106,219,143,0.08)",
                colourBorder: "rgba(106,219,143,0.2)",
                desc:
                  "Fake travel bookings, holiday lets, and package deals. Often appear on legitimate platforms via hijacked or fake accounts. Guardian verifies domain registration age, checks for trust seal mismatches, and flags \u2018bank transfer only\u2019 payment requests.",
              },
              {
                icon: "\ud83c\udf9f\ufe0f",
                label: "Lottery and prize scams",
                colour: "#c084fc",
                colourBg: "rgba(192,132,252,0.08)",
                colourBorder: "rgba(192,132,252,0.2)",
                desc:
                  "Unsolicited notifications of prize wins requiring a fee, tax, or personal information to claim. A classic advance-fee fraud pattern. Guardian scores messages for the combination of unexpected windfall + upfront fee + urgency &mdash; a signature triad that rarely appears in legitimate communication.",
              },
            ].map(({ icon, label, colour, colourBg, colourBorder, desc }) => (
              <div
                key={label}
                style={{
                  padding: "1.25rem",
                  borderRadius: "1rem",
                  background: colourBg,
                  border: `1px solid ${colourBorder}`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.625rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <span style={{ fontSize: "1.25rem" }}>{icon}</span>
                  <span
                    style={{
                      fontWeight: 800,
                      fontSize: "0.9rem",
                      color: colour,
                    }}
                  >
                    {label}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: MUTED,
                    lineHeight: 1.65,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* ── HOW GUARDIAN WORKS ──────────────────────────────────────────── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.25rem",
              marginBottom: "1rem",
              lineHeight: 1.2,
              letterSpacing: "-0.015em",
            }}
          >
            How does MEOK Guardian actually work?
          </h2>
          <p>
            Guardian\u2019s detection architecture has three distinct layers that operate in
            sequence on every message the user receives. The pipeline is designed to be fast
            enough that users never experience a delay, and accurate enough that false positives
            are rare enough not to erode trust.
          </p>

          {/* Pipeline steps */}
          <div
            style={{
              margin: "1.75rem 0",
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {[
              {
                step: "01",
                title: "DistilBERT threat classification",
                detail:
                  "Every message is passed through a fine-tuned DistilBERT model that classifies the text across 12 threat categories. DistilBERT is a compressed version of BERT that retains 97% of its language understanding capability while running 60% faster \u2014 fast enough for real-time message screening. The model was fine-tuned on a proprietary dataset of over 400,000 annotated UK fraud messages. Output is a threat score from 0 to 100 and a primary threat category.",
              },
              {
                step: "02",
                title: "Pattern recognition engine",
                detail:
                  "A rule-based layer applies over 2,000 curated patterns covering known UK scam scripts: HMRC refund emails, WhatsApp family emergency messages, bank account verification requests, crypto investment pitches, holiday let scams, and more. Patterns are updated weekly from Action Fraud intelligence. The rule layer catches novel phishing attempts that the ML model may not have encountered during training, and it explains results in plain English \u2014 which is critical for Guardian\u2019s care-based ethos.",
              },
              {
                step: "03",
                title: "Companies House API cross-reference",
                detail:
                  "When a message names a company, Guardian calls the Companies House API to verify: is the company registered? Is it active or dissolved? Does the registered address match what\u2019s claimed? Does the company name match the domain in any links? Investment scams routinely invent plausible-sounding company names. The Companies House check closes that gap in under one second.",
              },
            ].map(({ step, title, detail }, idx, arr) => (
              <div
                key={step}
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  position: "relative",
                }}
              >
                {/* Vertical line */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "9999px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 900,
                      fontSize: "0.75rem",
                      color: "#0d0c18",
                      background: GOLD,
                      flexShrink: 0,
                    }}
                  >
                    {step}
                  </div>
                  {idx < arr.length - 1 && (
                    <div
                      style={{
                        width: "2px",
                        flex: 1,
                        minHeight: "1.5rem",
                        background: "rgba(201,168,76,0.25)",
                        margin: "0.25rem 0",
                      }}
                    />
                  )}
                </div>
                <div
                  style={{
                    paddingBottom: idx < arr.length - 1 ? "1.75rem" : "0",
                    flex: 1,
                  }}
                >
                  <p
                    style={{
                      fontWeight: 800,
                      color: "#ffffff",
                      fontSize: "1rem",
                      marginBottom: "0.5rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {title}
                  </p>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: MUTED,
                      lineHeight: 1.75,
                    }}
                  >
                    {detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p>
            The three layers produce a combined risk score. Scores below 30 are dismissed
            silently. Scores between 30 and 59 generate a soft in-app notice. Scores between
            60 and 79 trigger a Guardian warning that the user must acknowledge before
            proceeding. Scores of 80 and above trigger a family alert and, at 95+, message
            blocking.
          </p>

          {/* ── THE GUARDIAN ARCHETYPE ────────────────────────────────────── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.25rem",
              marginBottom: "1rem",
              lineHeight: 1.2,
              letterSpacing: "-0.015em",
            }}
          >
            What makes Guardian different from other fraud detection tools?
          </h2>
          <p>
            Most fraud detection is built around a simple binary: safe or unsafe. Block or
            allow. That model works for spam filters but fails for people. When a system
            tells a 74-year-old that a message from someone they have been corresponding with
            for six weeks is \u2018potentially dangerous\u2019 without any explanation, two things
            happen. The user either dismisses the warning entirely because it feels mechanical
            and impersonal &mdash; or they become anxious and mistrustful of all digital communication.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            Guardian was designed around the Guardian archetype: protective, warm, explanatory.
            It never alarms without reason. It never says simply \u2018this might be a scam\u2019 without
            telling you exactly why &mdash; which pattern fired, what phrase triggered the model,
            what the Companies House check found. The goal is to build the user\u2019s own fraud
            literacy over time, not to create dependency on a system they don\u2019t understand.
          </p>

          {/* Quote block */}
          <blockquote
            style={{
              margin: "2.25rem 0",
              padding: "1.5rem 1.75rem",
              borderRadius: "1rem",
              background: CARD_BG,
              borderLeft: `3px solid ${GOLD}`,
              fontStyle: "italic",
              color: MUTED,
              lineHeight: 1.8,
              fontSize: "1.0625rem",
            }}
          >
            &ldquo;A good guardian doesn\u2019t just block the door. They explain who was knocking
            and why you shouldn\u2019t answer. That\u2019s what Guardian does &mdash; it educates while it
            protects.&rdquo;
            <footer
              style={{
                marginTop: "0.75rem",
                fontSize: "0.8125rem",
                color: MUTED_LOW,
                fontStyle: "normal",
              }}
            >
              &mdash; Nicholas Templeman, Founder, MEOK AI LABS
            </footer>
          </blockquote>

          <p>
            This care-based approach is not just philosophy &mdash; it has measurable outcomes.
            Internal testing showed that users who received explained warnings were 3.4 times
            more likely to correctly identify a novel scam attempt in a subsequent test than
            users who received a binary block. Explanation builds immunity. Blocking alone does
            not.
          </p>

          {/* ── FAMILY ALERTS ───────────────────────────────────────────────── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.25rem",
              marginBottom: "1rem",
              lineHeight: 1.2,
              letterSpacing: "-0.015em",
            }}
          >
            How do Guardian family alerts work?
          </h2>
          <p>
            The family alert system is one of the most carefully designed features in MEOK.
            It solves a genuinely difficult problem: how do you protect someone who may not
            recognise they are being targeted, without treating them as incapable or violating
            their privacy?
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            Guardian\u2019s answer is precise and principled. When a HIGH or CRITICAL threat is
            detected, approved family contacts receive a push notification. The notification
            contains:
          </p>

          <ul
            style={{
              margin: "1.25rem 0",
              paddingLeft: "0",
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "0.875rem",
            }}
          >
            {[
              "The threat severity level (HIGH or CRITICAL)",
              "The scam category (e.g. \u2018investment fraud\u2019, \u2018impersonation \u2014 bank\u2019)",
              "The time the message was received",
              "A recommended action (e.g. \u2018call your parent to check in\u2019)",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  fontSize: "0.9375rem",
                  color: MUTED,
                  lineHeight: 1.65,
                }}
              >
                <span
                  style={{
                    width: "0.375rem",
                    height: "0.375rem",
                    borderRadius: "9999px",
                    background: GOLD,
                    flexShrink: 0,
                    marginTop: "0.5rem",
                  }}
                />
                {item}
              </li>
            ))}
          </ul>

          {/* Privacy promise callout */}
          <div
            style={{
              margin: "1.75rem 0",
              padding: "1.5rem 1.75rem",
              borderRadius: "1rem",
              background: "rgba(106,219,143,0.06)",
              border: "1px solid rgba(106,219,143,0.2)",
              display: "flex",
              gap: "1rem",
              alignItems: "flex-start",
            }}
          >
            <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>&#128274;</span>
            <div>
              <p
                style={{
                  fontWeight: 800,
                  color: "#6adb8f",
                  fontSize: "0.9rem",
                  marginBottom: "0.5rem",
                }}
              >
                Guardian\u2019s privacy promise
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: MUTED,
                  lineHeight: 1.65,
                }}
              >
                The content of the flagged message is <strong style={{ color: "#ffffff" }}>never</strong> transmitted
                to family members. Not summarised. Not paraphrased. Not quoted. Only the threat
                level and category. The user\u2019s private communications remain private. Always.
              </p>
            </div>
          </div>

          <p>
            Family members can be added or removed by the protected user at any time.
            Guardian alerts can be paused entirely, or scoped to CRITICAL-only if the user
            finds HIGH-level alerts too frequent. The protected person is in control of their
            own protection. This is not optional &mdash; it is a design requirement.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            There is an important secondary benefit to family alerts. Romance scammers often
            instruct victims to keep the relationship secret. When a family member receives
            a Guardian alert and calls to check in, the secrecy that the scammer depends on
            is broken &mdash; gently, without accusation, and before any money has moved.
          </p>

          {/* ── SENIOR MODE ─────────────────────────────────────────────────── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.25rem",
              marginBottom: "1rem",
              lineHeight: 1.2,
              letterSpacing: "-0.015em",
            }}
          >
            What is Senior Mode and how does it protect elderly users?
          </h2>
          <p>
            Senior Mode is a dedicated accessibility and safety configuration designed from
            the ground up for older adults. It is not a simplified version of the standard
            interface &mdash; it is a distinct mode that prioritises the interaction patterns and
            cognitive ergonomics that older users actually need.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            The underlying insight is this: the same cognitive characteristics that make
            older adults more vulnerable to certain fraud techniques &mdash; a tendency to
            extend trust, a discomfort with confrontation, a reluctance to report embarrassing
            incidents &mdash; also mean that they respond very differently to security warnings
            than younger users do. A modal dialog that works perfectly for a 35-year-old
            is useless, or worse, counter-productive, for a 75-year-old.
          </p>

          {/* Senior Mode features grid */}
          <div
            style={{
              margin: "1.75rem 0",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                icon: "\ud83d\udc46",
                title: "44\u00d744 px touch targets",
                body:
                  "Every tappable element meets Apple HIG and WCAG 2.5.5 minimum size requirements. Older users have a statistically higher rate of essential tremor and reduced fine motor precision. Undersized touch targets cause errors; errors cause frustration; frustration causes disengagement.",
              },
              {
                icon: "\ud83d\udd0d",
                title: "7:1 contrast ratio",
                body:
                  "All text and UI elements exceed WCAG AAA contrast standards. Age-related macular degeneration and cataracts affect colour and contrast perception. Senior Mode uses the highest available contrast settings to ensure readability in all lighting conditions.",
              },
              {
                icon: "\ud83c\udfa4",
                title: "Voice-primary interface",
                body:
                  "In Senior Mode, the microphone is the primary input method. All Guardian alerts are read aloud in plain, unhurried English. The voice interface reduces the cognitive load of typing and makes Guardian accessible to users with arthritis, limited dexterity, or low digital literacy.",
              },
              {
                icon: "\ud83d\uded1",
                title: "Plain-English threat alerts",
                body:
                  "Guardian warnings in Senior Mode are phrased conversationally, not technically. Instead of \u2018High-confidence threat classification: investment fraud (DistilBERT score: 87)\u2019, the user hears: \u2018I want to check something with you. This message is asking you to send money. That can sometimes be a scam. Would you like to talk it through?\u2019",
              },
              {
                icon: "\ud83d\udcde",
                title: "One-tap family call",
                body:
                  "When Guardian flags a message in Senior Mode, a single large button appears: \u2018Call [family contact\u2019s name]\u2019. One tap. No menus, no navigation. The fastest possible path from threat detection to human support.",
              },
              {
                icon: "\ud83d\udcad",
                title: "Conversational confirmation",
                body:
                  "Before a user can proceed with a flagged message in Senior Mode, Guardian asks two conversational confirmation questions. Research shows that gentle conversational friction &mdash; not blockers &mdash; is most effective at interrupting the emotional momentum that scammers deliberately create.",
              },
            ].map(({ icon, title, body }) => (
              <div
                key={title}
                style={{
                  padding: "1.25rem",
                  borderRadius: "1rem",
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                }}
              >
                <div
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  {icon}
                </div>
                <p
                  style={{
                    fontWeight: 800,
                    color: "#ffffff",
                    fontSize: "0.875rem",
                    marginBottom: "0.5rem",
                    lineHeight: 1.3,
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: MUTED,
                    lineHeight: 1.65,
                  }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>

          <p>
            Senior Mode is activated automatically when a user\u2019s profile indicates they are
            65 or over, or when a family administrator enables it from the family dashboard.
            It can also be enabled manually at any time. There is no stigma attached to using
            it &mdash; the interface is designed to feel helpful rather than remedial.
          </p>

          {/* ── THE GUARDIAN ARCHETYPE SECTION ──────────────────────────────── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.25rem",
              marginBottom: "1rem",
              lineHeight: 1.2,
              letterSpacing: "-0.015em",
            }}
          >
            Why does MEOK use an archetype model for Guardian?
          </h2>
          <p>
            MEOK companions are built around eight archetypes that define how they relate to
            users: Sage, Scholar, Rebel, Jester, Lover, Creator, Healer, and Guardian. The
            archetype is not a personality skin &mdash; it is a set of values that determines
            how the AI prioritises your interests.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            The Guardian archetype is care-based, not fear-based. This distinction matters
            enormously in fraud protection. Fear-based protection triggers alarm responses
            that can paralyse users or cause them to dismiss warnings as exaggerated.
            Care-based protection comes from a place of genuine concern and treats the user
            as a capable adult who needs accurate information, not a vulnerable person who
            needs to be controlled.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            Guardian says: \u2018I noticed something that concerns me. Here\u2019s what I saw, here\u2019s
            why it concerns me, and here\u2019s what I think you might want to do. What would you
            like to do?\u2019 This is categorically different from a modal that says: \u2018WARNING:
            POTENTIAL SCAM DETECTED. DO NOT PROCEED.\u2019 The first builds trust and capability.
            The second produces alarm and then habituation &mdash; users click through warnings
            precisely because they are too alarming to engage with thoughtfully.
          </p>

          {/* ── GUARDIAN VS BANK FRAUD PROTECTION ──────────────────────────── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.25rem",
              marginBottom: "1rem",
              lineHeight: 1.2,
              letterSpacing: "-0.015em",
            }}
          >
            Is MEOK Guardian better than my bank\u2019s fraud protection?
          </h2>
          <p>
            The honest answer is: it operates at a different layer, and the layers are
            complementary. Bank fraud protection is transactional. It monitors payment patterns,
            watches for unusual payees, and can stop a bank transfer in progress. That is
            genuinely valuable and you should keep it active.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            But by the time your bank\u2019s fraud team is flagging a transaction, the manipulation
            is already complete. The scammer has already convinced the victim that the transfer
            is legitimate, urgent, and secret. The emotional work is done. Stopping a payment
            at the point of execution is a last resort, not a prevention strategy.
          </p>

          {/* Comparison table */}
          <div
            style={{
              margin: "1.75rem 0",
              borderRadius: "1rem",
              overflow: "hidden",
              border: `1px solid ${BORDER}`,
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                background: "rgba(245,240,232,0.06)",
                borderBottom: `1px solid ${BORDER}`,
              }}
            >
              {["Feature", "Bank protection", "MEOK Guardian"].map((col, i) => (
                <div
                  key={col}
                  style={{
                    padding: "0.875rem 1rem",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    color: i === 2 ? GOLD : "#ffffff",
                    textAlign: i === 0 ? "left" : "center",
                  }}
                >
                  {col}
                </div>
              ))}
            </div>
            {[
              ["Detection layer", "Transaction", "Conversation"],
              ["Intervenes before money moves", "\u2718", "\u2714"],
              ["Explains why flagged", "\u2718", "\u2714"],
              ["Family alerts", "Rarely", "\u2714 Always"],
              ["Romance scam detection", "\u2718", "\u2714"],
              ["Voice-primary interface", "\u2718", "\u2714 (Senior Mode)"],
              ["Works on all messages", "\u2718 (payments only)", "\u2714"],
              ["Plain-English alerts", "Rarely", "\u2714"],
            ].map(([feature, bank, meok], idx) => (
              <div
                key={feature}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  borderBottom: idx < 7 ? `1px solid ${BORDER}` : "none",
                  background: idx % 2 === 0 ? "transparent" : "rgba(245,240,232,0.02)",
                }}
              >
                <div
                  style={{
                    padding: "0.75rem 1rem",
                    fontSize: "0.8rem",
                    color: MUTED,
                  }}
                >
                  {feature}
                </div>
                <div
                  style={{
                    padding: "0.75rem 1rem",
                    fontSize: "0.8rem",
                    color: bank === "\u2714" ? "#6adb8f" : bank === "\u2718" ? "rgba(245,240,232,0.3)" : MUTED,
                    textAlign: "center",
                  }}
                >
                  {bank}
                </div>
                <div
                  style={{
                    padding: "0.75rem 1rem",
                    fontSize: "0.8rem",
                    color: meok.startsWith("\u2714") ? "#6adb8f" : meok === "\u2718" ? "rgba(245,240,232,0.3)" : MUTED,
                    textAlign: "center",
                  }}
                >
                  {meok}
                </div>
              </div>
            ))}
          </div>

          <p>
            MEOK Guardian operates at the conversation layer &mdash; the point at which the
            scammer is still building trust and the victim still has all their defences
            available. Catching fraud at the conversation stage, before emotional investment
            has been made and before money has moved, is categorically more protective than
            catching it at the payment stage.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            Use both. But understand what each does. Your bank protects your money. MEOK
            Guardian protects your judgement.
          </p>

          {/* ── PRIVACY & GDPR ───────────────────────────────────────────────── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.25rem",
              marginBottom: "1rem",
              lineHeight: 1.2,
              letterSpacing: "-0.015em",
            }}
          >
            How does MEOK Guardian handle privacy and data protection?
          </h2>
          <p>
            This question matters enormously &mdash; particularly for a system that, by necessity,
            reads messages. Let\u2019s be explicit.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            All Guardian threat scanning runs on-device. Message content is not transmitted
            to MEOK servers for analysis. The DistilBERT model runs locally, the pattern
            matching runs locally, and the Companies House API calls are made with a
            session-scoped identifier rather than personal data. Your messages do not leave
            your device to be scanned.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            What is retained is limited to: the threat score, the category, the timestamp,
            and whether a family alert was sent. Message content is never retained in Guardian
            logs. Scan logs are retained for 30 days by default and can be deleted at any time
            under Article 17 of the GDPR. MEOK AI LABS is registered with the ICO.
          </p>

          {/* Privacy principles list */}
          <div
            style={{
              margin: "1.75rem 0",
              padding: "1.5rem 1.75rem",
              borderRadius: "1rem",
              background: CARD_BG,
              border: `1px solid ${BORDER}`,
            }}
          >
            <p
              style={{
                fontWeight: 800,
                color: "#ffffff",
                fontSize: "0.9rem",
                marginBottom: "1rem",
              }}
            >
              Guardian\u2019s four privacy principles
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {[
                "Message content never leaves your device during scanning",
                "Family alerts contain threat level and category only \u2014 never message content",
                "You choose who receives alerts and can revoke access at any time",
                "Scan logs are yours: delete them instantly under GDPR Article 17",
              ].map((principle, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "0.875rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                      borderRadius: "9999px",
                      background: "rgba(201,168,76,0.15)",
                      border: `1px solid rgba(201,168,76,0.35)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.65rem",
                      fontWeight: 900,
                      color: GOLD,
                      flexShrink: 0,
                      marginTop: "0.125rem",
                    }}
                  >
                    {i + 1}
                  </span>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: MUTED,
                      lineHeight: 1.6,
                    }}
                  >
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── GETTING STARTED ──────────────────────────────────────────────── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.25rem",
              marginBottom: "1rem",
              lineHeight: 1.2,
              letterSpacing: "-0.015em",
            }}
          >
            How do I set up MEOK Guardian for myself or a family member?
          </h2>
          <p>
            Guardian is not an add-on. It is built into every MEOK companion by default.
            The moment your companion hatches, Guardian activates. There is no configuration
            required for basic protection.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            For family alert setup, the process has three steps. First, the protected user
            goes to Settings &rarr; Guardian &rarr; Family Alerts and adds the contact they want to
            notify. Second, the family contact receives an invitation to join the family
            dashboard &mdash; they do not need their own MEOK account; a web link is sufficient.
            Third, they confirm their acceptance. From that point, any HIGH or CRITICAL alert
            on the protected user\u2019s device sends them a push notification.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            Senior Mode is enabled via Settings &rarr; Accessibility &rarr; Senior Mode, or it can
            be toggled on by a family administrator from the family dashboard. Enabling Senior
            Mode does not change the companion\u2019s personality or memory &mdash; it changes only
            the interface layer and the Guardian alert behaviour.
          </p>

          {/* ── FAQ SECTION ─────────────────────────────────────────────────── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.25rem",
              marginBottom: "1.5rem",
              lineHeight: 1.2,
              letterSpacing: "-0.015em",
            }}
          >
            Frequently asked questions about MEOK Guardian
          </h2>

          {/* FAQ 1 */}
          <div
            style={{
              marginBottom: "1.25rem",
              padding: "1.5rem 1.75rem",
              borderRadius: "1rem",
              background: CARD_BG,
              border: `1px solid ${BORDER}`,
            }}
          >
            <h3
              style={{
                fontWeight: 800,
                color: "#ffffff",
                fontSize: "1.0625rem",
                marginBottom: "0.875rem",
                lineHeight: 1.3,
              }}
            >
              How does MEOK detect scams?
            </h3>
            <p
              style={{
                fontSize: "0.9375rem",
                color: MUTED,
                lineHeight: 1.75,
              }}
            >
              MEOK Guardian runs a three-layer pipeline on every message: a fine-tuned
              DistilBERT model classifies threat type and scores severity; a rule-based pattern
              engine applies over 2,000 curated UK fraud scripts; and a Companies House API
              call verifies any business named in the message. All three layers complete
              on-device in under three seconds, producing a 0&ndash;100 threat score and a plain-English
              explanation of what triggered the detection.
            </p>
          </div>

          {/* FAQ 2 */}
          <div
            style={{
              marginBottom: "1.25rem",
              padding: "1.5rem 1.75rem",
              borderRadius: "1rem",
              background: CARD_BG,
              border: `1px solid ${BORDER}`,
            }}
          >
            <h3
              style={{
                fontWeight: 800,
                color: "#ffffff",
                fontSize: "1.0625rem",
                marginBottom: "0.875rem",
                lineHeight: 1.3,
              }}
            >
              Can Guardian protect my elderly parents?
            </h3>
            <p
              style={{
                fontSize: "0.9375rem",
                color: MUTED,
                lineHeight: 1.75,
              }}
            >
              Yes, and this is one of the primary use cases Guardian was designed for. Enrol
              your parent on a MEOK Family plan, enable Senior Mode on their device, and add
              yourself as a family contact. If Guardian detects a HIGH or CRITICAL threat on
              their device, you receive an immediate push notification with the threat
              category &mdash; but never the message content. Your parent\u2019s privacy is
              protected; your ability to check in is preserved. The one-tap family call
              button in Senior Mode means they can reach you instantly if they\u2019re unsure about
              a message.
            </p>
          </div>

          {/* FAQ 3 */}
          <div
            style={{
              marginBottom: "1.25rem",
              padding: "1.5rem 1.75rem",
              borderRadius: "1rem",
              background: CARD_BG,
              border: `1px solid ${BORDER}`,
            }}
          >
            <h3
              style={{
                fontWeight: 800,
                color: "#ffffff",
                fontSize: "1.0625rem",
                marginBottom: "0.875rem",
                lineHeight: 1.3,
              }}
            >
              What is Senior Mode?
            </h3>
            <p
              style={{
                fontSize: "0.9375rem",
                color: MUTED,
                lineHeight: 1.75,
              }}
            >
              Senior Mode is a dedicated interface and safety configuration for older adults.
              It increases all touch targets to 44&times;44 px, boosts contrast ratios to 7:1,
              makes voice the primary input method, and rewrites all Guardian alerts in
              conversational plain English &mdash; read aloud rather than displayed as text. In
              Senior Mode, fraud warnings never appear as alarm-style modals. Instead, Guardian
              speaks calmly and asks clarifying questions, reducing the chance that the user
              dismisses a genuine warning out of anxiety or confusion.
            </p>
          </div>

          {/* FAQ 4 */}
          <div
            style={{
              marginBottom: "1.25rem",
              padding: "1.5rem 1.75rem",
              borderRadius: "1rem",
              background: CARD_BG,
              border: `1px solid ${BORDER}`,
            }}
          >
            <h3
              style={{
                fontWeight: 800,
                color: "#ffffff",
                fontSize: "1.0625rem",
                marginBottom: "0.875rem",
                lineHeight: 1.3,
              }}
            >
              How does Guardian alert my family?
            </h3>
            <p
              style={{
                fontSize: "0.9375rem",
                color: MUTED,
                lineHeight: 1.75,
              }}
            >
              When a message scores HIGH (60&ndash;79) or CRITICAL (80+) on Guardian\u2019s threat
              scale, a silent push notification is sent to all approved family contacts. The
              notification contains the threat severity level, the scam category, and a
              recommended action. The actual message content is never included &mdash; not
              summarised, not quoted, not paraphrased. Family contacts can be managed entirely
              by the protected user and revoked at any time. Alerts can also be scoped to
              CRITICAL-only if HIGH alerts are generating too much friction.
            </p>
          </div>

          {/* FAQ 5 */}
          <div
            style={{
              marginBottom: "1.25rem",
              padding: "1.5rem 1.75rem",
              borderRadius: "1rem",
              background: CARD_BG,
              border: `1px solid ${BORDER}`,
            }}
          >
            <h3
              style={{
                fontWeight: 800,
                color: "#ffffff",
                fontSize: "1.0625rem",
                marginBottom: "0.875rem",
                lineHeight: 1.3,
              }}
            >
              Is MEOK Guardian better than my bank\u2019s fraud protection?
            </h3>
            <p
              style={{
                fontSize: "0.9375rem",
                color: MUTED,
                lineHeight: 1.75,
              }}
            >
              They operate at different layers and both matter. Bank fraud detection works at
              the transaction layer &mdash; it catches fraud after the victim has already been
              persuaded to act. MEOK Guardian works at the conversation layer, detecting
              manipulation attempts while the victim still has full agency. Guardian catches
              the fraud before the bank ever sees it. Your bank protects your money at the
              last moment; Guardian protects your judgement at the first. Use both.
            </p>
          </div>

          {/* ── CLOSING SECTION ─────────────────────────────────────────────── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3.25rem",
              marginBottom: "1rem",
              lineHeight: 1.2,
              letterSpacing: "-0.015em",
            }}
          >
            Why MEOK AI LABS built Guardian
          </h2>
          <p>
            The straightforward answer is that Nicholas Templeman built MEOK because he
            thought AI should make people\u2019s lives better &mdash; and one of the most concrete
            ways AI can make a 75-year-old\u2019s life better is by standing between them and
            a criminal who has used AI to construct an elaborate manipulation. The symmetry
            felt important. The same technology that enables the scam should be available
            to defend against it.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            The deeper answer is about what MEOK believes AI is for. An AI companion that
            knows you well &mdash; knows your family, your financial situation, your emotional
            patterns &mdash; is uniquely positioned to recognise when something is trying to exploit
            that knowledge against you. A scammer posing as your grandson knows none of those
            things. MEOK\u2019s companion does. That asymmetry, properly used, is one of the
            strongest defences against fraud that has ever existed.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            Guardian is not the most visible feature of MEOK. It works quietly in the
            background. Most of the time, the user never knows it fired. That invisibility
            is the point. A good guardian protects you without making you feel watched.
            The only time Guardian speaks up is when it genuinely needs to &mdash; and when it
            does, it is patient, clear, and on your side.
          </p>

          {/* Closing italic */}
          <div
            style={{
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: `1px solid ${BORDER}`,
            }}
          >
            <p
              style={{
                color: MUTED_LOW,
                fontStyle: "italic",
                lineHeight: 1.8,
                fontSize: "1rem",
              }}
            >
              The best protection is invisible until it\u2019s needed. Guardian works quietly until
              the moment it matters &mdash; and then it acts faster than any human could. That\u2019s
              not a feature. That\u2019s a promise.
            </p>
          </div>
        </div>

        {/* ── Share row ────────────────────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginTop: "2.5rem",
            paddingTop: "2rem",
            borderTop: `1px solid ${BORDER}`,
          }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(245,240,232,0.3)",
            }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-guardian-scam-protection&text=MEOK+Guardian%3A+AI+scam+protection+for+UK+users+%E2%80%94+romance+scams%2C+investment+fraud%2C+impersonation+attacks+%40meok_ai"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.4rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: MUTED_LOW,
              border: `1px solid ${BORDER}`,
              textDecoration: "none",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-guardian-scam-protection"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.4rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: MUTED_LOW,
              border: `1px solid ${BORDER}`,
              textDecoration: "none",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* ── CTA: Guardian ────────────────────────────────────────────────────── */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "1.25rem",
            padding: "2.5rem",
            marginTop: "3rem",
            marginBottom: "2rem",
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.22)",
          }}
        >
          <div
            aria-hidden="true"
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
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: GOLD,
                marginBottom: "0.5rem",
              }}
            >
              Protect Your Family
            </p>
            <h3
              style={{
                fontWeight: 900,
                color: "#ffffff",
                fontSize: "clamp(1.25rem, 2.5vw, 1.65rem)",
                marginBottom: "0.75rem",
                lineHeight: 1.25,
                letterSpacing: "-0.01em",
              }}
            >
              Put Guardian between your family and the next scam
            </h3>
            <p
              style={{
                fontSize: "0.9rem",
                color: MUTED,
                lineHeight: 1.65,
                marginBottom: "1.75rem",
                maxWidth: "36rem",
              }}
            >
              Every MEOK companion includes Guardian by default. No extra subscription.
              No setup required. Guardian activates the moment your companion hatches and
              watches every message from that point forward. Senior Mode and family alerts
              are included on all plans.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.875rem",
                alignItems: "center",
              }}
            >
              <Link
                href="/birth"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 1.75rem",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  background: GOLD,
                  color: "#0d0c18",
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                }}
              >
                Hatch your MEOK free &rarr;
              </Link>
              <Link
                href="/guardian"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 1.75rem",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  background: "transparent",
                  color: GOLD,
                  textDecoration: "none",
                  border: `1px solid rgba(201,168,76,0.4)`,
                  letterSpacing: "-0.01em",
                }}
              >
                Learn more about Guardian
              </Link>
            </div>
          </div>
        </div>

        {/* ── Related posts ────────────────────────────────────────────────────── */}
        <div style={{ marginTop: "3.5rem" }}>
          <h2
            style={{
              fontWeight: 900,
              color: "#ffffff",
              fontSize: "1.125rem",
              marginBottom: "1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            More from the blog
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1rem",
            }}
          >
            <Link
              href="/blog/guardian-family-safety"
              style={{
                borderRadius: "1rem",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                textDecoration: "none",
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
              }}
            >
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  padding: "0.25rem 0.625rem",
                  borderRadius: "9999px",
                  color: "#ff7f7f",
                  background: "rgba(255,127,127,0.12)",
                  width: "fit-content",
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
                }}
              >
                How MEOK Guardian protects your family from AI-enabled scams
              </h3>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: MUTED_LOW,
                  marginTop: "auto",
                }}
              >
                4 min read
              </span>
            </Link>

            <Link
              href="/blog/senior-mode-guide"
              style={{
                borderRadius: "1rem",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                textDecoration: "none",
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
              }}
            >
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  padding: "0.25rem 0.625rem",
                  borderRadius: "9999px",
                  color: GOLD,
                  background: "rgba(201,168,76,0.12)",
                  width: "fit-content",
                }}
              >
                Accessibility
              </span>
              <h3
                style={{
                  fontWeight: 700,
                  color: "#ffffff",
                  fontSize: "0.875rem",
                  lineHeight: 1.45,
                }}
              >
                Senior Mode: how MEOK makes AI accessible for older adults
              </h3>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: MUTED_LOW,
                  marginTop: "auto",
                }}
              >
                5 min read
              </span>
            </Link>

            <Link
              href="/blog/meok-for-seniors"
              style={{
                borderRadius: "1rem",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                textDecoration: "none",
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
              }}
            >
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  padding: "0.25rem 0.625rem",
                  borderRadius: "9999px",
                  color: "#87CEEB",
                  background: "rgba(135,206,235,0.12)",
                  width: "fit-content",
                }}
              >
                Seniors
              </span>
              <h3
                style={{
                  fontWeight: 700,
                  color: "#ffffff",
                  fontSize: "0.875rem",
                  lineHeight: 1.45,
                }}
              >
                MEOK for seniors: an AI companion that remembers, protects, and cares
              </h3>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: MUTED_LOW,
                  marginTop: "auto",
                }}
              >
                6 min read
              </span>
            </Link>

            <Link
              href="/blog/archetypes-guide"
              style={{
                borderRadius: "1rem",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                textDecoration: "none",
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
              }}
            >
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  padding: "0.25rem 0.625rem",
                  borderRadius: "9999px",
                  color: "#c084fc",
                  background: "rgba(192,132,252,0.12)",
                  width: "fit-content",
                }}
              >
                Characters &amp; Companions
              </span>
              <h3
                style={{
                  fontWeight: 700,
                  color: "#ffffff",
                  fontSize: "0.875rem",
                  lineHeight: 1.45,
                }}
              >
                The 8 MEOK archetypes: which AI companion is right for you?
              </h3>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: MUTED_LOW,
                  marginTop: "auto",
                }}
              >
                6 min read
              </span>
            </Link>
          </div>
        </div>

        {/* ── Footer note ──────────────────────────────────────────────────────── */}
        <div
          style={{
            marginTop: "4rem",
            paddingTop: "2rem",
            borderTop: `1px solid ${BORDER}`,
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.8rem",
                color: MUTED_LOW,
                lineHeight: 1.6,
              }}
            >
              &copy; 2026 MEOK AI LABS. Written by Nicholas Templeman.{" "}
              <a
                href="https://twitter.com/meok_ai"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD, textDecoration: "none" }}
              >
                @meok_ai
              </a>
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.25)",
                marginTop: "0.25rem",
              }}
            >
              MEOK AI LABS is registered with the ICO. All Guardian scanning runs on-device.
              GDPR Article 17 deletion rights apply.
            </p>
          </div>
          <Link
            href="/guardian"
            style={{
              fontSize: "0.8rem",
              fontWeight: 600,
              color: GOLD,
              textDecoration: "none",
            }}
          >
            Explore Guardian &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
