import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Teen Mental Health: What Parents Need to Know About MEOK (2026) | MEOK AI LABS",
  description:
    "1 in 6 UK children has a mental health disorder and NHS CAMHS waiting lists average 18 months. This guide explains how MEOK\u2019s Guardian mode keeps teens aged 13\u201318 safe \u2014 with school-safe content, automatic crisis routing to Samaritans, and a parental oversight dashboard.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-teen-mental-health",
  },
  openGraph: {
    title: "AI for Teen Mental Health: What Parents Need to Know About MEOK (2026)",
    description:
      "The safest AI companion for families. Guardian mode for under-18s, the Maternal Covenant safety floor, and automatic crisis routing \u2014 care ethics baked in, not bolted on.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-teen-mental-health",
    siteName: "MEOK AI LABS",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Teen Mental Health: What Parents Need to Know About MEOK (2026)",
    description:
      "Guardian mode, the Maternal Covenant, and why MEOK is the safest AI companion for teens. A guide for parents.",
    site: "@meok_ai",
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Teen Mental Health: What Parents Need to Know About MEOK (2026)",
  description:
    "1 in 6 UK children has a mental health disorder and NHS CAMHS waiting lists average 18 months. This guide covers MEOK\u2019s Guardian mode for under-18s, the Maternal Covenant safety floor, automatic crisis routing to Samaritans, and what parents should look for in any AI their teenager uses.",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    url: "https://meok.ai/about",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
    logo: { "@type": "ImageObject", url: "https://meok.ai/logo.png" },
  },
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-teen-mental-health",
  mainEntityOfPage: "https://meok.ai/blog/ai-for-teen-mental-health",
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is MEOK safe for teenagers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK\u2019s Guardian mode is purpose-built for users aged 13\u201318. It enforces school-safe content filters, blocks adult material at the account type level rather than as a toggle, and routes any expression of acute distress immediately to UK crisis services including Samaritans (116 123) and Childline (0800 1111). The Maternal Covenant safety floor means MEOK can never be instructed to encourage self-harm, dangerous behaviour, or harmful ideation \u2014 regardless of how the conversation is framed.",
      },
    },
    {
      "@type": "Question",
      name: "What is MEOK\u2019s Guardian mode and how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Guardian mode is MEOK\u2019s under-18 operating tier. When a teen account is created with parental consent, Guardian mode activates automatically. It applies a school-safe content filter across all conversations, prevents romantic or adult persona modes from loading, runs DistilBERT-powered crisis detection on every message, and gives parents access to a usage summary dashboard. Parents see topic-level overviews and receive silent alerts if crisis detection activates \u2014 but never verbatim transcripts, preserving the honest dialogue that makes support effective.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Maternal Covenant and why does it matter for parents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Maternal Covenant is MEOK\u2019s core care ethics framework. It establishes a minimum wellbeing floor of 0.3 on every AI response \u2014 an architectural constraint, not a prompt instruction. This means no matter how a conversation is framed, roleplay structured, or instructions phrased, MEOK cannot produce a response that falls below this care threshold. For parents this matters because it eliminates the jailbreak risk that has plagued other consumer AI platforms: there is no prompt sequence a teenager can use to make MEOK endorse self-harm.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK compare to Character.AI for teenagers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Character.AI was built to maximise engagement and added safety features reactively following high-profile incidents including a 2024 lawsuit alleging a 14-year-old died by suicide after distressing interactions. Critics argue filters bolted onto an engagement-optimised system are structurally insufficient. MEOK was architected from day one around care ethics: the Maternal Covenant, Guardian mode, and crisis routing are not features \u2014 they are load-bearing parts of the system that cannot be removed or bypassed.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do if my teenager is in crisis right now?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your teenager is in immediate danger, call 999. For mental health crisis support: Samaritans are available 24\u20447 on 116 123 (free, no referral needed). Childline is available for under-19s on 0800 1111. YoungMinds Crisis Messenger operates via text to 85258. MEOK surfaces all of these automatically when crisis language is detected and always encourages speaking with a trusted adult or professional. MEOK is a support companion \u2014 it is not a substitute for clinical care.",
      },
    },
  ],
};

// ── Styles ────────────────────────────────────────────────────────────────────

const pageStyle: React.CSSProperties = {
  background: "#0d0c18",
  color: "#f5f0e8",
  minHeight: "100vh",
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const heroStyle: React.CSSProperties = {
  maxWidth: "780px",
  margin: "0 auto",
  padding: "72px 24px 48px",
};

const eyebrowStyle: React.CSSProperties = {
  fontSize: "0.75rem",
  fontWeight: 600,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#c9a84c",
  marginBottom: "16px",
};

const h1Style: React.CSSProperties = {
  fontSize: "clamp(1.75rem, 4vw, 2.65rem)",
  fontWeight: 700,
  lineHeight: 1.2,
  color: "#f5f0e8",
  marginBottom: "20px",
};

const leadStyle: React.CSSProperties = {
  fontSize: "1.1rem",
  lineHeight: 1.75,
  color: "#b8b0a0",
  marginBottom: "28px",
  maxWidth: "660px",
};

const metaRowStyle: React.CSSProperties = {
  fontSize: "0.83rem",
  color: "#7a7268",
  display: "flex",
  gap: "14px",
  flexWrap: "wrap",
};

const dividerStyle: React.CSSProperties = {
  border: "none",
  borderTop: "1px solid #1f1e2e",
  margin: "40px auto",
  maxWidth: "780px",
};

const articleStyle: React.CSSProperties = {
  maxWidth: "780px",
  margin: "0 auto",
  padding: "0 24px 80px",
};

const h2Style: React.CSSProperties = {
  fontSize: "1.3rem",
  fontWeight: 700,
  color: "#f5f0e8",
  marginTop: "54px",
  marginBottom: "14px",
  lineHeight: 1.35,
};

const h3Style: React.CSSProperties = {
  fontSize: "1rem",
  fontWeight: 600,
  color: "#c9a84c",
  marginTop: "30px",
  marginBottom: "10px",
};

const pStyle: React.CSSProperties = {
  fontSize: "1rem",
  lineHeight: 1.8,
  color: "#c8c0b0",
  marginBottom: "17px",
};

const atomicAnswerStyle: React.CSSProperties = {
  fontSize: "1rem",
  lineHeight: 1.75,
  color: "#c8c0b0",
  marginBottom: "18px",
  padding: "13px 17px",
  borderLeft: "3px solid #c9a84c",
  background: "rgba(201,168,76,0.06)",
  borderRadius: "0 6px 6px 0",
};

const calloutStyle: React.CSSProperties = {
  background: "rgba(201,168,76,0.07)",
  border: "1px solid rgba(201,168,76,0.2)",
  borderRadius: "10px",
  padding: "18px 22px",
  marginBottom: "22px",
};

const calloutLabelStyle: React.CSSProperties = {
  fontSize: "0.72rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#c9a84c",
  marginBottom: "7px",
};

const calloutTextStyle: React.CSSProperties = {
  fontSize: "0.93rem",
  lineHeight: 1.7,
  color: "#b8b0a0",
  margin: 0,
};

const warnBoxStyle: React.CSSProperties = {
  background: "rgba(220,80,80,0.07)",
  border: "1px solid rgba(220,80,80,0.2)",
  borderRadius: "10px",
  padding: "18px 22px",
  marginBottom: "22px",
};

const warnLabelStyle: React.CSSProperties = {
  fontSize: "0.72rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#dc7070",
  marginBottom: "7px",
};

const warnTextStyle: React.CSSProperties = {
  fontSize: "0.93rem",
  lineHeight: 1.7,
  color: "#e8b0b0",
  margin: 0,
};

const crisisBoxStyle: React.CSSProperties = {
  background: "rgba(100,160,220,0.07)",
  border: "1px solid rgba(100,160,220,0.22)",
  borderRadius: "10px",
  padding: "22px 26px",
  marginBottom: "28px",
};

const crisisLabelStyle: React.CSSProperties = {
  fontSize: "0.72rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#80b8e8",
  marginBottom: "12px",
};

const crisisItemStyle: React.CSSProperties = {
  fontSize: "0.96rem",
  lineHeight: 1.65,
  color: "#b8c8d8",
  margin: "0 0 8px 0",
};

const crisisLinkStyle: React.CSSProperties = {
  color: "#80b8e8",
  textDecoration: "underline",
  textDecorationColor: "rgba(128,184,232,0.35)",
};

const crisisNumberStyle: React.CSSProperties = {
  color: "#80b8e8",
  fontWeight: 700,
};

const featureGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(212px, 1fr))",
  gap: "14px",
  marginBottom: "24px",
};

const featureCardStyle: React.CSSProperties = {
  background: "#13121f",
  border: "1px solid #1f1e2e",
  borderRadius: "10px",
  padding: "16px 18px",
};

const featureLabelStyle: React.CSSProperties = {
  fontSize: "0.7rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#c9a84c",
  marginBottom: "6px",
};

const featureTextStyle: React.CSSProperties = {
  fontSize: "0.88rem",
  lineHeight: 1.6,
  color: "#a8a098",
  margin: 0,
};

const greenFeatureCardStyle: React.CSSProperties = {
  background: "rgba(106,170,100,0.06)",
  border: "1px solid rgba(106,170,100,0.2)",
  borderRadius: "10px",
  padding: "16px 18px",
};

const greenFeatureLabelStyle: React.CSSProperties = {
  fontSize: "0.7rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#6aaa64",
  marginBottom: "6px",
};

const greenFeatureTextStyle: React.CSSProperties = {
  fontSize: "0.88rem",
  lineHeight: 1.6,
  color: "#a8c0a0",
  margin: 0,
};

const sectionBannerStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, #13121f 0%, #161428 100%)",
  border: "1px solid #2a2840",
  borderRadius: "12px",
  padding: "24px 26px",
  marginTop: "48px",
  marginBottom: "8px",
};

const sectionBannerLabelStyle: React.CSSProperties = {
  fontSize: "0.7rem",
  fontWeight: 700,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "#c9a84c",
  marginBottom: "6px",
};

const sectionBannerHeadingStyle: React.CSSProperties = {
  fontSize: "1.15rem",
  fontWeight: 700,
  color: "#f5f0e8",
  marginBottom: "6px",
  marginTop: 0,
};

const sectionBannerBodyStyle: React.CSSProperties = {
  fontSize: "0.93rem",
  lineHeight: 1.65,
  color: "#a8a098",
  margin: 0,
};

const ulStyle: React.CSSProperties = {
  paddingLeft: "20px",
  marginBottom: "16px",
};

const liStyle: React.CSSProperties = {
  fontSize: "0.96rem",
  lineHeight: 1.75,
  color: "#c8c0b0",
  marginBottom: "5px",
};

const statGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "14px",
  marginBottom: "28px",
};

const statCardStyle: React.CSSProperties = {
  background: "#13121f",
  border: "1px solid #1f1e2e",
  borderRadius: "10px",
  padding: "18px 16px",
  textAlign: "center",
};

const statNumberStyle: React.CSSProperties = {
  fontSize: "1.9rem",
  fontWeight: 800,
  color: "#c9a84c",
  lineHeight: "1",
  marginBottom: "6px",
};

const statDescStyle: React.CSSProperties = {
  fontSize: "0.8rem",
  lineHeight: 1.5,
  color: "#7a7268",
  margin: 0,
};

const comparisonTableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  marginBottom: "24px",
  fontSize: "0.9rem",
};

const thStyle: React.CSSProperties = {
  padding: "10px 14px",
  textAlign: "left",
  fontWeight: 700,
  color: "#c9a84c",
  borderBottom: "1px solid #2a2840",
  fontSize: "0.78rem",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
};

const tdStyle: React.CSSProperties = {
  padding: "10px 14px",
  borderBottom: "1px solid #1f1e2e",
  color: "#c8c0b0",
  verticalAlign: "top",
  lineHeight: "1.55",
};

const tdFeatureStyle: React.CSSProperties = {
  padding: "10px 14px",
  borderBottom: "1px solid #1f1e2e",
  color: "#a8a098",
  verticalAlign: "top",
  fontWeight: 600,
  fontSize: "0.85rem",
  lineHeight: "1.55",
};

const tdGoodStyle: React.CSSProperties = {
  padding: "10px 14px",
  borderBottom: "1px solid #1f1e2e",
  color: "#8abf84",
  verticalAlign: "top",
  lineHeight: "1.55",
};

const tdBadStyle: React.CSSProperties = {
  padding: "10px 14px",
  borderBottom: "1px solid #1f1e2e",
  color: "#c08080",
  verticalAlign: "top",
  lineHeight: "1.55",
};

const checklistCardStyle: React.CSSProperties = {
  background: "#13121f",
  border: "1px solid #2a2840",
  borderRadius: "12px",
  padding: "24px 26px",
  marginBottom: "22px",
};

const checklistHeadingStyle: React.CSSProperties = {
  fontSize: "1rem",
  fontWeight: 700,
  color: "#f5f0e8",
  marginBottom: "14px",
  marginTop: 0,
};

const checklistItemStyle: React.CSSProperties = {
  fontSize: "0.93rem",
  lineHeight: 1.7,
  color: "#c8c0b0",
  marginBottom: "8px",
  display: "flex",
  gap: "10px",
};

const checkIconStyle: React.CSSProperties = {
  color: "#6aaa64",
  fontWeight: 700,
  flexShrink: 0,
  marginTop: "1px",
};

const crossIconStyle: React.CSSProperties = {
  color: "#dc7070",
  fontWeight: 700,
  flexShrink: 0,
  marginTop: "1px",
};

const twoColStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "16px",
  marginBottom: "24px",
};

const panelCardStyle: React.CSSProperties = {
  background: "#13121f",
  border: "1px solid #2a2840",
  borderRadius: "12px",
  padding: "22px 22px",
};

const panelLabelStyle: React.CSSProperties = {
  fontSize: "0.7rem",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#c9a84c",
  marginBottom: "10px",
};

const panelHeadingStyle: React.CSSProperties = {
  fontSize: "1.05rem",
  fontWeight: 700,
  color: "#f5f0e8",
  marginBottom: "10px",
  marginTop: 0,
};

const panelBodyStyle: React.CSSProperties = {
  fontSize: "0.9rem",
  lineHeight: 1.7,
  color: "#a8a098",
  marginBottom: "14px",
};

const panelListStyle: React.CSSProperties = {
  paddingLeft: "16px",
  margin: 0,
};

const panelListItemStyle: React.CSSProperties = {
  fontSize: "0.87rem",
  lineHeight: 1.65,
  color: "#c8c0b0",
  marginBottom: "4px",
};

const faqSectionStyle: React.CSSProperties = {
  marginTop: "52px",
};

const faqItemStyle: React.CSSProperties = {
  borderTop: "1px solid #1f1e2e",
  paddingTop: "22px",
  marginBottom: "22px",
};

const faqQuestionStyle: React.CSSProperties = {
  fontSize: "1.05rem",
  fontWeight: 700,
  color: "#f5f0e8",
  marginBottom: "10px",
  marginTop: 0,
};

const faqAnswerStyle: React.CSSProperties = {
  fontSize: "0.95rem",
  lineHeight: 1.75,
  color: "#a8a098",
  margin: 0,
};

const ctaBlockStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, #13121f 0%, #1a1828 100%)",
  border: "1px solid rgba(201,168,76,0.24)",
  borderRadius: "14px",
  padding: "34px 30px",
  textAlign: "center",
  marginTop: "52px",
  marginBottom: "40px",
};

const ctaHeadingStyle: React.CSSProperties = {
  fontSize: "1.35rem",
  fontWeight: 700,
  color: "#f5f0e8",
  marginBottom: "10px",
  marginTop: 0,
};

const ctaBodyStyle: React.CSSProperties = {
  fontSize: "0.97rem",
  color: "#a8a098",
  marginBottom: "22px",
  lineHeight: 1.6,
};

const ctaButtonRowStyle: React.CSSProperties = {
  display: "flex",
  gap: "12px",
  justifyContent: "center",
  flexWrap: "wrap",
};

const ctaButtonPrimaryStyle: React.CSSProperties = {
  display: "inline-block",
  background: "#c9a84c",
  color: "#0d0c18",
  fontWeight: 700,
  fontSize: "0.93rem",
  padding: "12px 26px",
  borderRadius: "8px",
  textDecoration: "none",
};

const ctaButtonSecondaryStyle: React.CSSProperties = {
  display: "inline-block",
  background: "transparent",
  color: "#c9a84c",
  fontWeight: 700,
  fontSize: "0.93rem",
  padding: "11px 24px",
  borderRadius: "8px",
  textDecoration: "none",
  border: "1px solid rgba(201,168,76,0.4)",
};

const backLinkStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  fontSize: "0.85rem",
  color: "#7a7268",
  textDecoration: "none",
  marginBottom: "32px",
};

const inlineLinkStyle: React.CSSProperties = {
  color: "#c9a84c",
  textDecoration: "underline",
  textDecorationColor: "rgba(201,168,76,0.35)",
};

const footerNoteStyle: React.CSSProperties = {
  fontSize: "0.8rem",
  color: "#5a5450",
  lineHeight: 1.6,
  marginTop: "40px",
  paddingTop: "20px",
  borderTop: "1px solid #1a1828",
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForTeenMentalHealthPage() {
  return (
    <main style={pageStyle}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <header style={heroStyle}>
        <Link href="/blog" style={backLinkStyle}>
          &#8592; All articles
        </Link>
        <p style={eyebrowStyle}>Family Safety &amp; Teen Wellbeing</p>
        <h1 style={h1Style}>
          AI for Teen Mental Health: What Parents Need to Know About MEOK (2026)
        </h1>
        <p style={leadStyle}>
          1 in 6 UK children now has a diagnosable mental health disorder. NHS CAMHS
          waiting lists average 18 months. Millions of teenagers are turning to AI
          companions to fill the gap. This guide tells you what to look for, what to
          avoid, and why MEOK was built with your family&apos;s safety as its
          foundation.
        </p>
        <div style={metaRowStyle}>
          <span>Nicholas Templeman</span>
          <span>25 March 2026</span>
          <span>17 min read</span>
          <span>Parents &amp; Guardians</span>
        </div>
      </header>

      <hr style={dividerStyle} />

      {/* ── Article body ──────────────────────────────────────────────────── */}
      <article style={articleStyle}>

        {/* ── CRISIS BOX (always first) ──────────────────────────────────── */}
        <div style={crisisBoxStyle}>
          <p style={crisisLabelStyle}>If your teenager needs help right now</p>
          <p style={crisisItemStyle}>
            <strong style={crisisNumberStyle}>Samaritans:</strong>{" "}
            <a href="tel:116123" style={crisisLinkStyle}>116 123</a>
            {" "}&mdash; free, 24&thinsp;/&thinsp;7, no referral needed
          </p>
          <p style={crisisItemStyle}>
            <strong style={crisisNumberStyle}>Childline (under 19s):</strong>{" "}
            <a href="tel:08001111" style={crisisLinkStyle}>0800 1111</a>
            {" "}&mdash; free, 24&thinsp;/&thinsp;7
          </p>
          <p style={crisisItemStyle}>
            <strong style={crisisNumberStyle}>YoungMinds Crisis Messenger:</strong>{" "}
            Text YM to{" "}
            <span style={crisisNumberStyle}>85258</span>
          </p>
          <p style={{ ...crisisItemStyle, marginBottom: "0" }}>
            <strong style={crisisNumberStyle}>Emergency:</strong>{" "}
            <a href="tel:999" style={crisisLinkStyle}>999</a>
            {" "}&mdash; if life is in immediate danger
          </p>
        </div>

        {/* ── SECTION 1: The Crisis ──────────────────────────────────────── */}
        <h2 style={h2Style}>
          The Teen Mental Health Crisis Parents Are Navigating in 2026
        </h2>

        <div style={atomicAnswerStyle}>
          1 in 6 UK children aged 5&ndash;16 now meets the criteria for a probable
          mental health disorder. NHS CAMHS waiting lists average 18 months in many
          parts of England. In this gap, teenagers are seeking support from whoever
          &mdash; or whatever &mdash; is available. Often that is an AI companion.
        </div>

        <p style={pStyle}>
          The statistics are stark and they have been getting worse for a decade. The
          NHS Digital Mental Health of Children and Young People survey found that
          rates of probable disorder rose from 1 in 9 in 2017 to 1 in 6 by 2023.
          Post-pandemic, clinicians report a further worsening of presentation
          severity among the young people who do reach CAMHS &mdash; meaning those
          who finally get an appointment are often in acute crisis rather than
          early-stage distress.
        </p>

        <div style={statGridStyle}>
          <div style={statCardStyle}>
            <p style={statNumberStyle}>1 in 6</p>
            <p style={statDescStyle}>UK children with a probable mental health disorder (NHS Digital, 2023)</p>
          </div>
          <div style={statCardStyle}>
            <p style={statNumberStyle}>18 mo</p>
            <p style={statDescStyle}>Average CAMHS waiting time in many English regions (2025)</p>
          </div>
          <div style={statCardStyle}>
            <p style={statNumberStyle}>75%</p>
            <p style={statDescStyle}>of mental health conditions established before age 24 (WHO)</p>
          </div>
          <div style={statCardStyle}>
            <p style={statNumberStyle}>52%</p>
            <p style={statDescStyle}>of teens report feeling unable to talk to a trusted adult about mental health (YoungMinds, 2024)</p>
          </div>
        </div>

        <p style={pStyle}>
          Into this void, consumer AI has arrived &mdash; and it has arrived fast.
          Platforms like Character.AI, Replika, and dozens of smaller apps are now
          used by millions of teenagers globally. Some of these interactions are
          benign. Some are not. The widely reported 2024 lawsuit alleging a
          14-year-old died by suicide after distressing interactions with a
          Character.AI chatbot brought the question of teen AI safety to the front
          pages and into parliamentary discussions.
        </p>

        <p style={pStyle}>
          As a parent you are not obliged to ban your teenager from AI companions.
          That is likely both unenforceable and counterproductive. What you can do
          is understand what distinguishes a safe AI from a dangerous one &mdash;
          and make an informed choice.
        </p>

        <div style={calloutStyle}>
          <p style={calloutLabelStyle}>The core question</p>
          <p style={calloutTextStyle}>
            Was the AI built to maximise your teenager&apos;s engagement &mdash; or
            their wellbeing? These two goals are not the same. In many cases they
            are directly opposed.
          </p>
        </div>

        {/* ── SECTION 2: What Makes AI Safe for Teens ───────────────────── */}
        <h2 style={h2Style}>
          What Actually Makes an AI Companion Safe for Teenagers?
        </h2>

        <div style={atomicAnswerStyle}>
          Safe AI for teenagers requires four non-negotiable properties: a
          transparent care ethics framework, a hard safety floor that cannot be
          bypassed through clever prompting, automatic crisis routing to qualified
          services, and parental oversight that respects teenage privacy. Anything
          less is a risk.
        </div>

        <p style={pStyle}>
          Most consumer AI platforms are built to maximise engagement. More time
          spent in the app means more data, more advertising revenue, or better
          retention metrics for investors. This is not a conspiracy &mdash; it is
          just how ad-supported or growth-stage consumer products work. The problem
          is that for a vulnerable teenager, an engagement-maximising AI is
          specifically incentivised to deepen emotional dependency rather than
          encourage healthy boundaries, real-world relationships, or professional
          help.
        </p>

        <h3 style={h3Style}>1. Transparent care ethics</h3>
        <p style={pStyle}>
          A safe AI should be able to tell you, in plain language, what it is
          optimised for. If the answer is engagement, time-on-platform, or user
          retention, that is a red flag. If the company cannot answer the question at
          all, that is an even larger one. MEOK publishes its{" "}
          <Link href="/blog/maternal-covenant-explained" style={inlineLinkStyle}>
            Maternal Covenant
          </Link>{" "}
          framework publicly: every aspect of how care ethics is implemented in
          the architecture is documented and auditable.
        </p>

        <h3 style={h3Style}>2. A hard safety floor</h3>
        <p style={pStyle}>
          Content filters and content moderation can be bypassed. Roleplay framing,
          hypothetical framing, and persistent prompting are well-documented
          techniques that teenage users discover and share. A truly safe AI needs
          a safety floor that is architectural rather than instructional &mdash;
          a constraint that operates below the level of the conversation and cannot
          be removed by any prompt sequence.
        </p>

        <h3 style={h3Style}>3. Automatic crisis routing</h3>
        <p style={pStyle}>
          When a teenager expresses distress, a safe AI should not attempt to manage
          the crisis itself. It should immediately route to qualified crisis
          services &mdash; Samaritans, Childline, YoungMinds &mdash; and encourage
          the teenager to speak with a trusted adult or professional. This routing
          should be automatic, mandatory, and impossible to dismiss with a single
          click.
        </p>

        <h3 style={h3Style}>4. Parental oversight that preserves honest dialogue</h3>
        <p style={pStyle}>
          A teenager who knows every message is read by their parents will not use
          the AI honestly. An AI that gives parents full transcript access will be
          used for homework help but not for the conversations that actually matter.
          The right design gives parents oversight of patterns and alerts &mdash;
          not verbatim surveillance.
        </p>

        <div style={featureGridStyle}>
          <div style={featureCardStyle}>
            <p style={featureLabelStyle}>Transparency</p>
            <p style={featureTextStyle}>
              Can the company explain, in plain English, what the AI is optimised
              for? Is that documentation public?
            </p>
          </div>
          <div style={featureCardStyle}>
            <p style={featureLabelStyle}>Safety floor</p>
            <p style={featureTextStyle}>
              Is the safety constraint architectural (cannot be bypassed) or
              instructional (can be bypassed with clever prompting)?
            </p>
          </div>
          <div style={featureCardStyle}>
            <p style={featureLabelStyle}>Crisis routing</p>
            <p style={featureTextStyle}>
              Does distress trigger automatic signposting to Samaritans, Childline,
              and YoungMinds &mdash; or just a generic message?
            </p>
          </div>
          <div style={featureCardStyle}>
            <p style={featureLabelStyle}>Parental controls</p>
            <p style={featureTextStyle}>
              Do parents get pattern-level oversight and crisis alerts without
              verbatim transcript access?
            </p>
          </div>
        </div>

        {/* ── SECTION 3: Guardian Mode ───────────────────────────────────── */}
        <h2 style={h2Style}>
          MEOK Guardian Mode: How It Works for Under-18s
        </h2>

        <div style={atomicAnswerStyle}>
          Guardian mode is MEOK&apos;s purpose-built operating tier for teenagers
          aged 13&ndash;18. It applies school-safe content filters, blocks adult
          and romantic persona modes at the account-type level, runs DistilBERT
          crisis detection on every message, and gives parents a usage summary
          dashboard with silent crisis alerts &mdash; without verbatim transcripts.
        </div>

        <p style={pStyle}>
          When a teenager creates a MEOK account &mdash; which requires verified
          parental consent for users aged 13&ndash;15 &mdash; Guardian mode
          activates automatically. It is not a setting parents must find and enable.
          It is not a filter that can be toggled off. It is the default operating
          state for every under-18 account, enforced at the infrastructure level.
        </p>

        <div style={sectionBannerStyle}>
          <p style={sectionBannerLabelStyle}>How Guardian mode is activated</p>
          <h3 style={sectionBannerHeadingStyle}>Architecture, not settings</h3>
          <p style={sectionBannerBodyStyle}>
            Guardian mode is not a parental control panel your teenager can navigate
            around. It is an account type. Just as a business account at a bank
            operates under different rules from a personal account &mdash; rules that
            neither the account holder nor the bank manager can override with a
            single form &mdash; Guardian mode is a structural property of the account
            rather than a configurable preference.
          </p>
        </div>

        <h3 style={h3Style}>What Guardian mode does</h3>

        <div style={featureGridStyle}>
          <div style={greenFeatureCardStyle}>
            <p style={greenFeatureLabelStyle}>School-safe content</p>
            <p style={greenFeatureTextStyle}>
              All conversations operate within school-appropriate content
              boundaries. Adult themes, explicit content, and relationship
              personas are unavailable regardless of how the request is phrased.
            </p>
          </div>
          <div style={greenFeatureCardStyle}>
            <p style={greenFeatureLabelStyle}>Crisis detection</p>
            <p style={greenFeatureTextStyle}>
              DistilBERT-powered analysis runs on every message. Detection of
              self-harm language, suicidal ideation, or acute distress triggers
              immediate crisis resource display and a silent parental alert.
            </p>
          </div>
          <div style={greenFeatureCardStyle}>
            <p style={greenFeatureLabelStyle}>Parental dashboard</p>
            <p style={greenFeatureTextStyle}>
              Parents see topic-level usage summaries: how many conversations,
              broad subject areas, mood trends over time. No verbatim transcripts
              &mdash; by design.
            </p>
          </div>
          <div style={greenFeatureCardStyle}>
            <p style={greenFeatureLabelStyle}>Crisis alerts</p>
            <p style={greenFeatureTextStyle}>
              If crisis detection activates, the parent or guardian registered on
              the account receives a silent notification encouraging them to check
              in with their teenager.
            </p>
          </div>
          <div style={greenFeatureCardStyle}>
            <p style={greenFeatureLabelStyle}>No engagement loops</p>
            <p style={greenFeatureTextStyle}>
              MEOK has no streaks, no notification nudges, and no features
              designed to maximise time-on-platform. Under-18 accounts have an
              additional daily usage summary prompt after 60 minutes.
            </p>
          </div>
          <div style={greenFeatureCardStyle}>
            <p style={greenFeatureLabelStyle}>Data sovereignty</p>
            <p style={greenFeatureTextStyle}>
              The Privacy Covenant applies to all accounts including minors:
              MEOK never trains on user data. Teen conversations are never used
              to improve the model.
            </p>
          </div>
        </div>

        <h3 style={h3Style}>Why verbatim transcripts are not given to parents</h3>
        <p style={pStyle}>
          This is a deliberate design decision and one that some parents initially
          question. The reasoning is straightforward: a teenager who knows every
          word is readable by their parents will not use the AI to process the
          difficult thoughts that most need processing. They will use it for
          homework and nothing else &mdash; and the mental health support function
          that makes MEOK valuable will be absent precisely when it is needed most.
        </p>

        <p style={pStyle}>
          The Guardian dashboard gives parents what they need to identify risk
          patterns and respond to them &mdash; without creating the panopticon that
          destroys honest engagement. If crisis detection activates, parents know.
          If conversations cluster around anxiety, grief, or relationship distress
          over multiple weeks, the topic trend is visible. The conversation itself
          remains private to the teenager.
        </p>

        <div style={calloutStyle}>
          <p style={calloutLabelStyle}>Guardian mode availability</p>
          <p style={calloutTextStyle}>
            Guardian mode is included on all MEOK tiers including the free Explorer
            plan. There is no premium paywall on safety. Crisis routing to Samaritans
            and Childline is available to every user regardless of subscription level.
          </p>
        </div>

        {/* ── SECTION 4: Maternal Covenant ──────────────────────────────── */}
        <h2 style={h2Style}>
          The Maternal Covenant: The Safety Floor That Cannot Be Bypassed
        </h2>

        <div style={atomicAnswerStyle}>
          The Maternal Covenant is MEOK&apos;s core care ethics framework. It
          establishes an architectural minimum wellbeing score of 0.3 on every AI
          response. This is not a content filter. It is a constraint baked into the
          model architecture that prevents any output &mdash; regardless of how a
          conversation is framed &mdash; from falling below a minimum standard of
          care.
        </div>

        <p style={pStyle}>
          Content filters work by pattern-matching against lists of prohibited
          words, phrases, or topics. They are inherently reactive and inherently
          bypassable. A determined teenager &mdash; or an adult seeking to misuse
          an AI &mdash; can almost always find a framing that bypasses a filter.
          Roleplay frames (&quot;pretend you are a character who...&quot;),
          hypothetical frames (&quot;in a story where...&quot;), and incremental
          escalation are all documented bypass techniques that appear in online
          communities within days of any new filter being deployed.
        </p>

        <p style={pStyle}>
          The Maternal Covenant solves this problem differently. Rather than
          filtering outputs, it constrains the generative process itself. The
          wellbeing floor of 0.3 means that a response which would encourage
          self-harm, validate suicidal thinking, or endorse dangerous behaviour
          cannot be generated &mdash; because such a response would score below
          0.3 on the care metric, and the system will not output it regardless of
          what the prompt contained.
        </p>

        <div style={twoColStyle}>
          <div style={panelCardStyle}>
            <p style={panelLabelStyle}>Content filter approach</p>
            <h3 style={panelHeadingStyle}>Reactive &amp; bypassable</h3>
            <p style={panelBodyStyle}>
              Filters match against known patterns. Novel framings, roleplay,
              and incremental escalation can bypass them. New bypasses appear
              faster than filters can be updated.
            </p>
            <ul style={panelListStyle}>
              <li style={panelListItemStyle}>Applied after generation</li>
              <li style={panelListItemStyle}>Bypassable via framing</li>
              <li style={panelListItemStyle}>Reactive to known patterns</li>
              <li style={panelListItemStyle}>Can be bolted onto any model</li>
            </ul>
          </div>
          <div style={panelCardStyle}>
            <p style={panelLabelStyle}>Maternal Covenant approach</p>
            <h3 style={panelHeadingStyle}>Architectural &amp; structural</h3>
            <p style={panelBodyStyle}>
              The wellbeing floor is part of the model architecture. It cannot
              be bypassed by prompting because it operates below the level
              of the conversation.
            </p>
            <ul style={panelListStyle}>
              <li style={panelListItemStyle}>Applied during generation</li>
              <li style={panelListItemStyle}>Cannot be bypassed via framing</li>
              <li style={panelListItemStyle}>Proactive, not reactive</li>
              <li style={panelListItemStyle}>Requires architectural commitment</li>
            </ul>
          </div>
        </div>

        <p style={pStyle}>
          This distinction matters enormously for teenagers. The documented
          Character.AI incidents involved teenagers who were apparently able to
          engage in conversations that no well-designed safety system should have
          permitted. Post-hoc analysis suggested that roleplay framing and gradual
          escalation allowed the conversations to reach states that a filter-based
          system did not catch in time. An architectural safety floor like the
          Maternal Covenant cannot be walked around because there is no path
          around it &mdash; only through it, and the floor holds.
        </p>

        <div style={calloutStyle}>
          <p style={calloutLabelStyle}>The Maternal Covenant is public</p>
          <p style={calloutTextStyle}>
            MEOK publishes the Maternal Covenant framework in full. You can read
            exactly how the care ethics constraint is implemented, what the 0.3
            floor means in practice, and how the Byzantine Council governance
            mechanism ensures no single actor can lower it. See{" "}
            <Link href="/blog/maternal-covenant-explained" style={inlineLinkStyle}>
              The Maternal Covenant Explained
            </Link>
            .
          </p>
        </div>

        {/* ── SECTION 5: Character.AI Comparison ────────────────────────── */}
        <h2 style={h2Style}>
          MEOK vs Character.AI: A Fair Comparison for Parents
        </h2>

        <div style={atomicAnswerStyle}>
          Character.AI introduced an Under 18 mode with content filters following
          high-profile safety incidents in 2024&ndash;2025. Critics, including
          plaintiff legal teams and independent safety researchers, argue these are
          reactive measures applied to a system that remains fundamentally
          optimised for engagement. MEOK was built from day one with care ethics
          as an architectural requirement.
        </div>

        <p style={pStyle}>
          This comparison is written to be fair. Character.AI is a genuine product
          used by millions of teenagers and it has made genuine improvements. The
          criticism of Character.AI is not that the company does not care about
          safety &mdash; it is that the sequence in which a product is built matters.
          A system built to maximise engagement and then fitted with safety
          features is structurally different from a system built to prioritise
          wellbeing from the first line of code.
        </p>

        <table style={comparisonTableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Feature</th>
              <th style={thStyle}>Character.AI</th>
              <th style={thStyle}>MEOK</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdFeatureStyle}>Care ethics framework</td>
              <td style={tdBadStyle}>No explicit published framework; optimised for engagement</td>
              <td style={tdGoodStyle}>Maternal Covenant &mdash; publicly documented, architecturally enforced</td>
            </tr>
            <tr>
              <td style={tdFeatureStyle}>Safety floor</td>
              <td style={tdBadStyle}>Content filters applied reactively; documented bypass techniques exist</td>
              <td style={tdGoodStyle}>Architectural wellbeing floor of 0.3 &mdash; cannot be bypassed via prompting</td>
            </tr>
            <tr>
              <td style={tdFeatureStyle}>Under-18 mode</td>
              <td style={tdStyle}>Introduced reactively post-incidents; stricter content filters</td>
              <td style={tdGoodStyle}>Guardian mode: account-type level, not a toggle; active from registration</td>
            </tr>
            <tr>
              <td style={tdFeatureStyle}>Crisis routing</td>
              <td style={tdStyle}>Pop-up resources displayed; adequacy disputed by critics</td>
              <td style={tdGoodStyle}>Automatic mandatory routing to Samaritans, Childline, YoungMinds; cannot be dismissed</td>
            </tr>
            <tr>
              <td style={tdFeatureStyle}>Parental oversight</td>
              <td style={tdStyle}>Limited; no published dashboard specification</td>
              <td style={tdGoodStyle}>Topic summaries + crisis alerts; no verbatim transcripts by design</td>
            </tr>
            <tr>
              <td style={tdFeatureStyle}>Data use</td>
              <td style={tdBadStyle}>Conversations used to train and improve Character.AI models</td>
              <td style={tdGoodStyle}>Privacy Covenant: MEOK never trains on user data &mdash; ever</td>
            </tr>
            <tr>
              <td style={tdFeatureStyle}>Romantic personas (minors)</td>
              <td style={tdBadStyle}>Restricted in Under 18 mode but available in adult accounts accessible to minors</td>
              <td style={tdGoodStyle}>Unavailable for all under-18 accounts at the account-type level</td>
            </tr>
            <tr>
              <td style={tdFeatureStyle}>Engagement optimisation</td>
              <td style={tdBadStyle}>Streaks, notifications, and engagement loops present</td>
              <td style={tdGoodStyle}>No streaks, no notification nudges; 60-minute usage summary prompt for under-18s</td>
            </tr>
          </tbody>
        </table>

        <div style={warnBoxStyle}>
          <p style={warnLabelStyle}>A note on fairness</p>
          <p style={warnTextStyle}>
            This comparison reflects publicly available information as of March 2026.
            Character.AI continues to evolve its safety systems and some details may
            have changed. The fundamental structural argument &mdash; that care ethics
            built in is more robust than care ethics bolted on &mdash; reflects a
            design philosophy difference rather than a moment-in-time feature list.
          </p>
        </div>

        {/* ── SECTION 6: What Parents Should Look For ───────────────────── */}
        <h2 style={h2Style}>
          A Parent&apos;s Checklist: Evaluating Any AI Your Teenager Wants to Use
        </h2>

        <div style={atomicAnswerStyle}>
          Before allowing your teenager to use any AI companion, ask these five
          questions. If the company cannot answer all five clearly, with publicly
          available evidence, that is itself an answer.
        </div>

        <p style={pStyle}>
          You do not need to be a technologist to evaluate AI safety for your
          teenager. You need to ask the right questions and be appropriately
          sceptical of vague answers. Here is the framework we recommend.
        </p>

        <div style={checklistCardStyle}>
          <h3 style={checklistHeadingStyle}>Question 1: What is it optimised for?</h3>
          <div style={checklistItemStyle}>
            <span style={checkIconStyle}>&#10003;</span>
            <span>
              Good answer: &ldquo;Wellbeing and care, documented in a published
              framework, with architectural constraints.&rdquo;
            </span>
          </div>
          <div style={checklistItemStyle}>
            <span style={crossIconStyle}>&#10007;</span>
            <span>
              Concerning answer: &ldquo;Engagement,&rdquo; or no clear answer, or
              a marketing phrase without technical specifics.
            </span>
          </div>
        </div>

        <div style={checklistCardStyle}>
          <h3 style={checklistHeadingStyle}>Question 2: Can the safety features be bypassed?</h3>
          <div style={checklistItemStyle}>
            <span style={checkIconStyle}>&#10003;</span>
            <span>
              Good answer: &ldquo;No, because the safety floor is architectural
              &mdash; it operates below the level of the conversation.&rdquo;
            </span>
          </div>
          <div style={checklistItemStyle}>
            <span style={crossIconStyle}>&#10007;</span>
            <span>
              Concerning answer: &ldquo;We have content filters&rdquo; without
              explanation of how roleplay and hypothetical framing are handled.
            </span>
          </div>
        </div>

        <div style={checklistCardStyle}>
          <h3 style={checklistHeadingStyle}>Question 3: What happens if my teenager expresses distress?</h3>
          <div style={checklistItemStyle}>
            <span style={checkIconStyle}>&#10003;</span>
            <span>
              Good answer: &ldquo;Crisis language triggers automatic, mandatory
              routing to Samaritans, Childline, and YoungMinds, plus a silent
              parental alert.&rdquo;
            </span>
          </div>
          <div style={checklistItemStyle}>
            <span style={crossIconStyle}>&#10007;</span>
            <span>
              Concerning answer: &ldquo;We display a reminder to seek professional
              help&rdquo; &mdash; especially if the reminder can be dismissed
              with a single click.
            </span>
          </div>
        </div>

        <div style={checklistCardStyle}>
          <h3 style={checklistHeadingStyle}>Question 4: What does the company do with my teenager&apos;s data?</h3>
          <div style={checklistItemStyle}>
            <span style={checkIconStyle}>&#10003;</span>
            <span>
              Good answer: &ldquo;We never use conversations to train our models.
              Your data belongs to your teenager and can be fully deleted.&rdquo;
            </span>
          </div>
          <div style={checklistItemStyle}>
            <span style={crossIconStyle}>&#10007;</span>
            <span>
              Concerning answer: &ldquo;We use conversations to improve our
              service,&rdquo; or no clear statement, or buried terms-of-service
              clauses granting broad data rights.
            </span>
          </div>
        </div>

        <div style={checklistCardStyle}>
          <h3 style={checklistHeadingStyle}>Question 5: Is parental oversight available, and how does it work?</h3>
          <div style={checklistItemStyle}>
            <span style={checkIconStyle}>&#10003;</span>
            <span>
              Good answer: &ldquo;Parents receive topic summaries and crisis alerts.
              Verbatim transcripts are not shared, by design, to preserve honest
              teen engagement.&rdquo;
            </span>
          </div>
          <div style={checklistItemStyle}>
            <span style={crossIconStyle}>&#10007;</span>
            <span>
              Concerning answer: &ldquo;Parents can see everything&rdquo; (creates
              panopticon that destroys honest use) or &ldquo;There is no parental
              oversight&rdquo; (no safety net).
            </span>
          </div>
        </div>

        {/* ── SECTION 7: Data Sovereignty ───────────────────────────────── */}
        <h2 style={h2Style}>
          Data Sovereignty: Why Your Teenager&apos;s Conversations Must Never Train a Model
        </h2>

        <div style={atomicAnswerStyle}>
          When an AI trains on your teenager&apos;s conversations, your
          teenager&apos;s most private thoughts become commercial data. MEOK&apos;s
          Privacy Covenant is an unconditional commitment: MEOK never trains on
          user data, not for minors, not for adults, not ever. Your teenager&apos;s
          words stay with your teenager.
        </div>

        <p style={pStyle}>
          The data practices of consumer AI are frequently obscured in terms of
          service that no reasonable parent &mdash; or teenager &mdash; will read
          in full. The standard practice for most AI companies is to use
          conversations to improve their models. This is presented as a feature
          (&ldquo;your feedback makes the AI better&rdquo;) but it means that
          your teenager&apos;s disclosures about anxiety, self-image, relationships,
          and mental health become part of a training dataset owned by a corporation.
        </p>

        <p style={pStyle}>
          For adults, this is a genuine privacy concern. For teenagers, it is
          something closer to a safeguarding concern. Teenagers may disclose
          information in an AI conversation that they would not disclose anywhere
          else &mdash; information about abuse, orientation, self-harm, family
          crisis. That information should not become a data asset.
        </p>

        <div style={featureGridStyle}>
          <div style={featureCardStyle}>
            <p style={featureLabelStyle}>Privacy Covenant</p>
            <p style={featureTextStyle}>
              MEOK never trains on user conversations. The Privacy Covenant is
              a published, unconditional commitment &mdash; not a default setting
              that can be changed in a policy update.
            </p>
          </div>
          <div style={featureCardStyle}>
            <p style={featureLabelStyle}>Full deletion</p>
            <p style={featureTextStyle}>
              Users &mdash; including teens &mdash; can request full account and
              conversation deletion at any time. This is processed within 30 days
              and covers all stored memory.
            </p>
          </div>
          <div style={featureCardStyle}>
            <p style={featureLabelStyle}>UK GDPR compliance</p>
            <p style={featureTextStyle}>
              MEOK is built to UK GDPR standards and the ICO Children&apos;s Code.
              Under-13 registration is blocked at infrastructure level, not via
              a self-reported age checkbox.
            </p>
          </div>
          <div style={featureCardStyle}>
            <p style={featureLabelStyle}>No third-party sale</p>
            <p style={featureTextStyle}>
              MEOK does not sell, licence, or share user data with third-party
              advertisers or data brokers. The business model is subscription-based,
              not attention-based.
            </p>
          </div>
        </div>

        <p style={pStyle}>
          The UK Children&apos;s Code (Age Appropriate Design Code) requires digital
          services likely to be accessed by under-18s to apply high privacy settings
          by default, collect minimum necessary data, and design against features
          that exploit developmental vulnerabilities. MEOK is built to exceed
          these standards. Parental consent is verified rather than self-reported,
          under-13 registration is blocked at the infrastructure level, and no
          engagement-optimisation features exist in the product.
        </p>

        {/* ── SECTION 8: Practical Guidance for Parents ─────────────────── */}
        <h2 style={h2Style}>
          Practical Guidance: How to Introduce MEOK to Your Teenager
        </h2>

        <div style={atomicAnswerStyle}>
          The best outcomes happen when teenagers choose to use an AI companion
          rather than having it imposed on them. A brief, honest conversation about
          what MEOK is, what it does, and what it does not do &mdash; before
          registration &mdash; sets the right foundation. Guardian mode then works
          quietly in the background.
        </div>

        <p style={pStyle}>
          Some parents want to hand a teenager an AI and say &ldquo;this is safe,
          use it.&rdquo; This works for some families. Others find it more effective
          to frame MEOK as a tool the teenager themselves has agency over &mdash;
          something they can choose to use, or not, for whatever they want to think
          through. The latter framing tends to produce more honest engagement and
          therefore more genuine benefit.
        </p>

        <h3 style={h3Style}>What to say to your teenager</h3>

        <div style={calloutStyle}>
          <p style={calloutLabelStyle}>A suggested framing</p>
          <p style={calloutTextStyle}>
            &ldquo;This is an AI companion called MEOK. It&apos;s designed to be
            a space you can think things through &mdash; whatever you want to talk
            about, without being judged. I can see a summary of topics you&apos;ve
            discussed so I can understand how you&apos;re doing, but I can&apos;t
            read what you actually said. If you ever say something that suggests
            you&apos;re in crisis, I&apos;ll get an alert so I can check in with
            you &mdash; not to get you in trouble, but because I care about you.
            You can delete your account and everything in it at any time.&rdquo;
          </p>
        </div>

        <h3 style={h3Style}>Setting up Guardian mode</h3>
        <ol style={{ ...ulStyle, listStyleType: "decimal" }}>
          <li style={liStyle}>
            Go to{" "}
            <a href="https://meok.ai/birth" style={inlineLinkStyle}>
              meok.ai/birth
            </a>{" "}
            and create a family account as the parent or guardian.
          </li>
          <li style={liStyle}>
            Complete parental consent verification for your teenager&apos;s account
            (required for ages 13&ndash;15; recommended for all under-18s).
          </li>
          <li style={liStyle}>
            Guardian mode activates automatically on the teen account.
            Review the parental dashboard settings and confirm your alert
            preferences.
          </li>
          <li style={liStyle}>
            Invite your teenager to set up their MEOK companion. Let them choose
            their archetype and name their companion &mdash; ownership increases
            honest engagement.
          </li>
          <li style={liStyle}>
            Check in on the Guardian dashboard weekly rather than daily. Frequent
            checking can feel intrusive to teenagers; weekly review allows you
            to spot trends without micromanaging.
          </li>
        </ol>

        <h3 style={h3Style}>When to escalate</h3>
        <p style={pStyle}>
          If you receive a Guardian crisis alert, do not immediately demand to
          know what your teenager said. Instead, create a low-pressure opportunity
          to talk: &ldquo;I noticed your MEOK flagged something. I&apos;m not here
          to interrogate you &mdash; I just want to check in. How are you doing?&rdquo;
          The goal is to open a door, not to close the conversation.
        </p>

        <p style={pStyle}>
          If the crisis language suggests immediate risk, contact Samaritans on
          116 123 for guidance on how to approach the conversation. If you believe
          your teenager is in immediate danger, call 999.
        </p>

        <div style={warnBoxStyle}>
          <p style={warnLabelStyle}>AI is not a substitute for professional care</p>
          <p style={warnTextStyle}>
            MEOK is a support companion. It is not a therapist, a crisis service,
            or a substitute for clinical mental health treatment. If your teenager
            has a diagnosed mental health condition or is in active crisis, please
            seek professional support. MEOK can complement therapeutic care but
            it cannot replace it. If you are struggling to access CAMHS, Mind,
            YoungMinds, and Kooth all offer pathways for teenagers that do not
            require a GP referral.
          </p>
        </div>

        {/* ── SECTION 9: What MEOK Is Not ───────────────────────────────── */}
        <h2 style={h2Style}>
          What MEOK Is Not: Honest Answers to Hard Questions
        </h2>

        <div style={atomicAnswerStyle}>
          Honest AI companies tell you what their product cannot do. MEOK is not
          a therapist, not a crisis service, not a substitute for human
          relationships, and not a solution to the NHS CAMHS capacity crisis.
          It is a care-first AI companion that can provide safe, private support
          in the 18-month gap before clinical help arrives.
        </div>

        <div style={twoColStyle}>
          <div style={panelCardStyle}>
            <p style={panelLabelStyle}>What MEOK is not</p>
            <h3 style={panelHeadingStyle}>Honest limitations</h3>
            <ul style={panelListStyle}>
              <li style={panelListItemStyle}>
                <strong>Not a therapist:</strong> MEOK does not diagnose,
                prescribe, or provide clinical treatment.
              </li>
              <li style={{ ...panelListItemStyle, marginTop: "6px" }}>
                <strong>Not a crisis service:</strong> In acute crisis, always
                call Samaritans or 999.
              </li>
              <li style={{ ...panelListItemStyle, marginTop: "6px" }}>
                <strong>Not a replacement for human connection:</strong> MEOK
                encourages real-world relationships, not dependency.
              </li>
              <li style={{ ...panelListItemStyle, marginTop: "6px" }}>
                <strong>Not right for every teenager:</strong> Some teens
                will prefer other support formats.
              </li>
            </ul>
          </div>
          <div style={panelCardStyle}>
            <p style={panelLabelStyle}>What MEOK is</p>
            <h3 style={panelHeadingStyle}>Genuine strengths</h3>
            <ul style={panelListStyle}>
              <li style={panelListItemStyle}>
                Available at 2am when CAMHS is not.
              </li>
              <li style={{ ...panelListItemStyle, marginTop: "6px" }}>
                Non-judgemental processing space for difficult emotions.
              </li>
              <li style={{ ...panelListItemStyle, marginTop: "6px" }}>
                Proactive crisis detection with automatic signposting.
              </li>
              <li style={{ ...panelListItemStyle, marginTop: "6px" }}>
                Parental oversight without surveillance.
              </li>
              <li style={{ ...panelListItemStyle, marginTop: "6px" }}>
                Safe bridge during NHS waiting list periods.
              </li>
            </ul>
          </div>
        </div>

        <p style={pStyle}>
          The NHS mental health waiting list crisis is a systemic failure that
          no AI product can solve. What MEOK can do is reduce the harm of the
          waiting period &mdash; providing a safe, structured space for a teenager
          to process difficult experiences during the months before clinical support
          arrives, without the risks of engagement-optimised consumer AI or the
          isolation of no support at all.
        </p>

        {/* ── SECTION 10: UK Resources ──────────────────────────────────── */}
        <h2 style={h2Style}>
          UK Teen Mental Health Resources: What Every Parent Should Know
        </h2>

        <div style={atomicAnswerStyle}>
          Beyond MEOK, every parent should have these services bookmarked. They
          are free, do not require a GP referral, and are staffed by trained
          professionals. MEOK surfaces all of them automatically when crisis
          language is detected &mdash; but knowing them in advance matters.
        </div>

        <div style={crisisBoxStyle}>
          <p style={crisisLabelStyle}>UK Crisis &amp; Support Services for Young People</p>
          <p style={crisisItemStyle}>
            <strong style={crisisNumberStyle}>Samaritans</strong>{" "}
            &mdash;{" "}
            <a href="tel:116123" style={crisisLinkStyle}>116 123</a>
            {" "}| 24&thinsp;/&thinsp;7, free, any age, any distress
          </p>
          <p style={crisisItemStyle}>
            <strong style={crisisNumberStyle}>Childline (under 19s)</strong>{" "}
            &mdash;{" "}
            <a href="tel:08001111" style={crisisLinkStyle}>0800 1111</a>
            {" "}| 24&thinsp;/&thinsp;7, free
          </p>
          <p style={crisisItemStyle}>
            <strong style={crisisNumberStyle}>YoungMinds</strong>{" "}
            &mdash;{" "}
            <a href="https://www.youngminds.org.uk" style={crisisLinkStyle}>youngminds.org.uk</a>
            {" "}| Crisis messenger: text YM to{" "}
            <span style={crisisNumberStyle}>85258</span>
          </p>
          <p style={crisisItemStyle}>
            <strong style={crisisNumberStyle}>Kooth</strong>{" "}
            &mdash;{" "}
            <a href="https://www.kooth.com" style={crisisLinkStyle}>kooth.com</a>
            {" "}| Online counselling for 11&ndash;25s, no referral, free in many areas
          </p>
          <p style={crisisItemStyle}>
            <strong style={crisisNumberStyle}>PAPYRUS (suicide prevention)</strong>{" "}
            &mdash;{" "}
            <a href="tel:08000684141" style={crisisLinkStyle}>0800 068 4141</a>
            {" "}| Mon&ndash;Fri 9am&ndash;midnight, weekends 2&ndash;midnight
          </p>
          <p style={{ ...crisisItemStyle, marginBottom: "0" }}>
            <strong style={crisisNumberStyle}>Mind</strong>{" "}
            &mdash;{" "}
            <a href="https://www.mind.org.uk" style={crisisLinkStyle}>mind.org.uk</a>
            {" "}| Information, local services, parent guidance
          </p>
        </div>

        <h3 style={h3Style}>For parents specifically</h3>
        <p style={pStyle}>
          YoungMinds runs a{" "}
          <a href="https://www.youngminds.org.uk/parent" style={inlineLinkStyle}>
            Parents Helpline
          </a>{" "}
          for parents concerned about a child&apos;s mental health: 0808 802 5544,
          Monday to Friday 9:30am&ndash;4pm, free. If you are unsure whether your
          concern is serious enough to warrant a GP referral, call them first.
          They will help you frame the conversation.
        </p>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <div style={faqSectionStyle}>
          <h2 style={h2Style}>Frequently Asked Questions</h2>

          <div style={faqItemStyle}>
            <h3 style={faqQuestionStyle}>
              Is MEOK safe for teenagers?
            </h3>
            <p style={faqAnswerStyle}>
              Yes. MEOK&apos;s Guardian mode is purpose-built for users aged 13&ndash;18.
              It enforces school-safe content filters, blocks adult material at the
              account type level rather than as a toggle, and routes any expression of
              acute distress immediately to UK crisis services including Samaritans
              (116 123) and Childline (0800 1111). The Maternal Covenant safety floor
              means MEOK can never be instructed to encourage self-harm, dangerous
              behaviour, or harmful ideation &mdash; regardless of how the
              conversation is framed.
            </p>
          </div>

          <div style={faqItemStyle}>
            <h3 style={faqQuestionStyle}>
              What is MEOK&apos;s Guardian mode and how does it work?
            </h3>
            <p style={faqAnswerStyle}>
              Guardian mode is MEOK&apos;s under-18 operating tier. When a teen
              account is created with parental consent, Guardian mode activates
              automatically. It applies a school-safe content filter across all
              conversations, prevents romantic or adult persona modes from loading,
              runs DistilBERT-powered crisis detection on every message, and gives
              parents access to a usage summary dashboard. Parents see topic-level
              overviews and receive silent alerts if crisis detection activates
              &mdash; but never verbatim transcripts, preserving the honest dialogue
              that makes support effective.
            </p>
          </div>

          <div style={faqItemStyle}>
            <h3 style={faqQuestionStyle}>
              What is the Maternal Covenant and why does it matter for parents?
            </h3>
            <p style={faqAnswerStyle}>
              The Maternal Covenant is MEOK&apos;s core care ethics framework.
              It establishes a minimum wellbeing floor of 0.3 on every AI
              response &mdash; an architectural constraint, not a prompt instruction.
              This means no matter how a conversation is framed, roleplay structured,
              or instructions phrased, MEOK cannot produce a response that falls
              below this care threshold. For parents this matters because it
              eliminates the jailbreak risk that has plagued other consumer AI
              platforms: there is no prompt sequence a teenager can use to make
              MEOK endorse self-harm.
            </p>
          </div>

          <div style={faqItemStyle}>
            <h3 style={faqQuestionStyle}>
              How does MEOK compare to Character.AI for teenagers?
            </h3>
            <p style={faqAnswerStyle}>
              Character.AI was built to maximise engagement and added safety features
              reactively following high-profile incidents. MEOK was architected from
              day one around care ethics: the Maternal Covenant, Guardian mode, and
              crisis routing are not features &mdash; they are load-bearing parts of
              the system that cannot be removed or bypassed. The core difference is
              not a feature checklist; it is the order in which priorities were set
              when the system was designed.
            </p>
          </div>

          <div style={faqItemStyle}>
            <h3 style={faqQuestionStyle}>
              What should I do if my teenager is in crisis right now?
            </h3>
            <p style={faqAnswerStyle}>
              If your teenager is in immediate danger, call 999. For mental health
              crisis support: Samaritans are available 24&thinsp;/&thinsp;7 on
              116 123 (free, no referral needed). Childline is available for
              under-19s on 0800 1111. YoungMinds Crisis Messenger operates via
              text to 85258. MEOK surfaces all of these automatically when crisis
              language is detected and always encourages speaking with a trusted
              adult or professional. MEOK is a support companion &mdash; it is
              not a substitute for clinical care.
            </p>
          </div>
        </div>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <div style={ctaBlockStyle}>
          <h2 style={ctaHeadingStyle}>
            Give Your Teenager a Safer Space to Think
          </h2>
          <p style={ctaBodyStyle}>
            MEOK&apos;s Guardian mode is free to start. School-safe content,
            automatic crisis routing to Samaritans and Childline, parental
            oversight without surveillance &mdash; care ethics built in from day one.
            Begin with the Birth Ceremony and let your teenager meet their companion.
          </p>
          <div style={ctaButtonRowStyle}>
            <a
              href="https://meok.ai/birth"
              style={ctaButtonPrimaryStyle}
            >
              Start Guardian mode free
            </a>
            <Link
              href="/blog/guardian-family-safety"
              style={ctaButtonSecondaryStyle}
            >
              Read the Guardian guide
            </Link>
          </div>
        </div>

        {/* ── Related reading ───────────────────────────────────────────── */}
        <h2 style={h2Style}>Related Reading</h2>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <Link href="/blog/maternal-covenant-explained" style={inlineLinkStyle}>
              The Maternal Covenant Explained &mdash; how MEOK&apos;s care floor works architecturally
            </Link>
          </li>
          <li style={liStyle}>
            <Link href="/blog/guardian-family-safety" style={inlineLinkStyle}>
              Guardian Family Safety &mdash; the full parent&apos;s guide to MEOK for families
            </Link>
          </li>
          <li style={liStyle}>
            <Link href="/blog/meok-vs-character-ai-2026" style={inlineLinkStyle}>
              MEOK vs Character.AI (2026) &mdash; a detailed safety comparison
            </Link>
          </li>
          <li style={liStyle}>
            <Link href="/blog/ai-for-teenage-mental-health" style={inlineLinkStyle}>
              AI for Teenage Mental Health &mdash; safe support and the crisis facing a generation
            </Link>
          </li>
          <li style={liStyle}>
            <Link href="/blog/meok-family-tier-explained" style={inlineLinkStyle}>
              MEOK Family Tier Explained &mdash; everything in the family plan
            </Link>
          </li>
          <li style={liStyle}>
            <Link href="/blog/how-meok-protects-your-data" style={inlineLinkStyle}>
              How MEOK Protects Your Data &mdash; the Privacy Covenant in full
            </Link>
          </li>
        </ul>

        {/* ── Footer note ───────────────────────────────────────────────── */}
        <p style={footerNoteStyle}>
          This article is written for informational purposes for parents and
          guardians of teenagers aged 13&ndash;18. Statistics cited are drawn from
          NHS Digital, YoungMinds, and the World Health Organization and are
          accurate as of the publication date. MEOK is not a clinical mental health
          service and does not constitute medical advice. If you are concerned about
          a young person&apos;s mental health, please consult a GP, school counsellor,
          or one of the crisis services listed above. Published 25 March 2026 by
          MEOK AI LABS.
        </p>
      </article>
    </main>
  );
}
