import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Teenage Mental Health: Safe Support, Parental Oversight, and the Crisis Facing a Generation | MEOK Blog",
  description:
    "1 in 6 UK teenagers has a probable mental health disorder in 2026. This guide explains how AI can support teen wellbeing safely, how MEOK\u2019s Guardian Family feature works, what the Children\u2019s Code requires, and when to call crisis services.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-teenage-mental-health",
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Teenage Mental Health: Safe Support, Parental Oversight, and the Crisis Facing a Generation",
  description:
    "1 in 6 UK teenagers has a probable mental health disorder. This guide covers how AI can support teen wellbeing safely, how MEOK\u2019s Guardian Family feature balances privacy with parental oversight, and crisis resources for young people in distress.",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    url: "https://meok.ai/about",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-teenage-mental-health",
  mainEntityOfPage: "https://meok.ai/blog/ai-for-teenage-mental-health",
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is AI safe for teenagers with mental health difficulties?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can be safe for teenagers when it is built with age-appropriate safeguards, no engagement-optimisation incentives, and a clear escalation path to crisis services. MEOK is designed without ads, without training on personal data, and with mandatory crisis detection that surfaces Childline, YoungMinds, and Samaritans whenever a teenager expresses acute distress.",
      },
    },
    {
      "@type": "Question",
      name: "Can parents see what teenagers say to MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Parents using Guardian Family receive usage summaries and broad topic overviews but never verbatim conversation transcripts. If the crisis detection system activates, guardians receive an alert so they can check in \u2014 without seeing the specific words that triggered it. This balance is intentional: a teenager who knows every message is readable will not use the AI honestly.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK handle self-harm disclosures from teenagers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When MEOK detects language associated with self-harm or suicidal ideation, it immediately pauses the normal conversation flow, surfaces UK crisis resources (Childline 0800 1111, Samaritans 116 123, YoungMinds, and Crisis Text Line 85258), and encourages the teenager to speak with a trusted adult or professional. MEOK never attempts to manage a mental health crisis itself. If a guardian has crisis alerts enabled, they receive a notification.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Children\u2019s Code and does MEOK comply with it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The UK Children\u2019s Code (Age Appropriate Design Code) requires digital services likely to be accessed by under-18s to apply high privacy settings by default, collect minimum necessary data, and design against features that exploit developmental vulnerabilities. MEOK is built to exceed these standards: parental consent is verified rather than self-reported, under-13 registration is blocked at the infrastructure level, and no engagement-optimisation features exist anywhere in the product.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK suitable for children under 13?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK blocks account creation for users under 13 at the infrastructure level. This is not a checkbox in a terms-of-service document \u2014 it is an architectural constraint. Children under 13 seeking AI support should use services specifically designed and regulated for that age group. MEOK serves users aged 13 and over, with verified parental consent required for those aged 13\u201315.",
      },
    },
  ],
};

// ── Styles ────────────────────────────────────────────────────────────────────

const page: React.CSSProperties = {
  background: "#0d0c18",
  color: "#f5f0e8",
  minHeight: "100vh",
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const hero: React.CSSProperties = {
  maxWidth: "780px",
  margin: "0 auto",
  padding: "72px 24px 48px",
};

const eyebrow: React.CSSProperties = {
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

const lead: React.CSSProperties = {
  fontSize: "1.1rem",
  lineHeight: 1.75,
  color: "#b8b0a0",
  marginBottom: "28px",
  maxWidth: "660px",
};

const metaRow: React.CSSProperties = {
  fontSize: "0.83rem",
  color: "#7a7268",
  display: "flex",
  gap: "14px",
  flexWrap: "wrap",
};

const divider: React.CSSProperties = {
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

const atomicAnswer: React.CSSProperties = {
  fontSize: "1rem",
  lineHeight: 1.75,
  color: "#c8c0b0",
  marginBottom: "18px",
  padding: "13px 17px",
  borderLeft: "3px solid #c9a84c",
  background: "rgba(201,168,76,0.06)",
  borderRadius: "0 6px 6px 0",
};

const callout: React.CSSProperties = {
  background: "rgba(201,168,76,0.07)",
  border: "1px solid rgba(201,168,76,0.2)",
  borderRadius: "10px",
  padding: "18px 22px",
  marginBottom: "22px",
};

const calloutLabel: React.CSSProperties = {
  fontSize: "0.72rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#c9a84c",
  marginBottom: "7px",
};

const calloutText: React.CSSProperties = {
  fontSize: "0.93rem",
  lineHeight: 1.7,
  color: "#b8b0a0",
  margin: 0,
};

const warnBox: React.CSSProperties = {
  background: "rgba(220,80,80,0.07)",
  border: "1px solid rgba(220,80,80,0.2)",
  borderRadius: "10px",
  padding: "18px 22px",
  marginBottom: "22px",
};

const warnLabel: React.CSSProperties = {
  fontSize: "0.72rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#dc7070",
  marginBottom: "7px",
};

const warnText: React.CSSProperties = {
  fontSize: "0.93rem",
  lineHeight: 1.7,
  color: "#e8b0b0",
  margin: 0,
};

const crisisBox: React.CSSProperties = {
  background: "rgba(100,160,220,0.07)",
  border: "1px solid rgba(100,160,220,0.22)",
  borderRadius: "10px",
  padding: "22px 26px",
  marginBottom: "28px",
};

const crisisLabel: React.CSSProperties = {
  fontSize: "0.72rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#80b8e8",
  marginBottom: "12px",
};

const crisisItem: React.CSSProperties = {
  fontSize: "0.96rem",
  lineHeight: 1.65,
  color: "#b8c8d8",
  margin: "0 0 8px 0",
};

const crisisLink: React.CSSProperties = {
  color: "#80b8e8",
  textDecoration: "underline",
  textDecorationColor: "rgba(128,184,232,0.35)",
};

const crisisNumber: React.CSSProperties = {
  color: "#80b8e8",
  fontWeight: 700,
};

const featureGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(212px, 1fr))",
  gap: "14px",
  marginBottom: "24px",
};

const featureCard: React.CSSProperties = {
  background: "#13121f",
  border: "1px solid #1f1e2e",
  borderRadius: "10px",
  padding: "16px 18px",
};

const featureLabel: React.CSSProperties = {
  fontSize: "0.7rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#c9a84c",
  marginBottom: "6px",
};

const featureText: React.CSSProperties = {
  fontSize: "0.88rem",
  lineHeight: 1.6,
  color: "#a8a098",
  margin: 0,
};

const sectionBanner: React.CSSProperties = {
  background: "linear-gradient(135deg, #13121f 0%, #161428 100%)",
  border: "1px solid #2a2840",
  borderRadius: "12px",
  padding: "24px 26px",
  marginTop: "48px",
  marginBottom: "8px",
};

const sectionBannerLabel: React.CSSProperties = {
  fontSize: "0.7rem",
  fontWeight: 700,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "#c9a84c",
  marginBottom: "6px",
};

const sectionBannerHeading: React.CSSProperties = {
  fontSize: "1.15rem",
  fontWeight: 700,
  color: "#f5f0e8",
  marginBottom: "6px",
  marginTop: 0,
};

const sectionBannerBody: React.CSSProperties = {
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

const statGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "14px",
  marginBottom: "28px",
};

const statCard: React.CSSProperties = {
  background: "#13121f",
  border: "1px solid #1f1e2e",
  borderRadius: "10px",
  padding: "18px 16px",
  textAlign: "center",
};

const statNumber: React.CSSProperties = {
  fontSize: "1.9rem",
  fontWeight: 800,
  color: "#c9a84c",
  lineHeight: 1,
  marginBottom: "6px",
};

const statDesc: React.CSSProperties = {
  fontSize: "0.8rem",
  lineHeight: 1.5,
  color: "#7a7268",
  margin: 0,
};

const twoCol: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "16px",
  marginBottom: "24px",
};

const audienceCard: React.CSSProperties = {
  background: "#13121f",
  border: "1px solid #2a2840",
  borderRadius: "12px",
  padding: "22px 22px",
};

const audienceCardLabel: React.CSSProperties = {
  fontSize: "0.7rem",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#c9a84c",
  marginBottom: "10px",
};

const audienceCardHeading: React.CSSProperties = {
  fontSize: "1.05rem",
  fontWeight: 700,
  color: "#f5f0e8",
  marginBottom: "10px",
  marginTop: 0,
};

const audienceCardBody: React.CSSProperties = {
  fontSize: "0.9rem",
  lineHeight: 1.7,
  color: "#a8a098",
  marginBottom: "14px",
};

const audienceCardList: React.CSSProperties = {
  paddingLeft: "16px",
  margin: 0,
};

const audienceCardItem: React.CSSProperties = {
  fontSize: "0.87rem",
  lineHeight: 1.65,
  color: "#c8c0b0",
  marginBottom: "4px",
};

const archetypeRow: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "14px",
  marginBottom: "24px",
};

const archetypeCard: React.CSSProperties = {
  background: "rgba(201,168,76,0.04)",
  border: "1px solid rgba(201,168,76,0.16)",
  borderRadius: "10px",
  padding: "18px 20px",
};

const archetypeName: React.CSSProperties = {
  fontSize: "0.85rem",
  fontWeight: 700,
  color: "#c9a84c",
  marginBottom: "4px",
};

const archetypeDesc: React.CSSProperties = {
  fontSize: "0.88rem",
  lineHeight: 1.65,
  color: "#a8a098",
  margin: 0,
};

const ctaBlock: React.CSSProperties = {
  background: "linear-gradient(135deg, #13121f 0%, #1a1828 100%)",
  border: "1px solid rgba(201,168,76,0.24)",
  borderRadius: "14px",
  padding: "34px 30px",
  textAlign: "center",
  marginTop: "52px",
  marginBottom: "40px",
};

const ctaHeading: React.CSSProperties = {
  fontSize: "1.35rem",
  fontWeight: 700,
  color: "#f5f0e8",
  marginBottom: "10px",
  marginTop: 0,
};

const ctaBody: React.CSSProperties = {
  fontSize: "0.97rem",
  color: "#a8a098",
  marginBottom: "22px",
  lineHeight: 1.6,
};

const ctaButtonRow: React.CSSProperties = {
  display: "flex",
  gap: "12px",
  justifyContent: "center",
  flexWrap: "wrap",
};

const ctaButtonPrimary: React.CSSProperties = {
  display: "inline-block",
  background: "#c9a84c",
  color: "#0d0c18",
  fontWeight: 700,
  fontSize: "0.93rem",
  padding: "12px 26px",
  borderRadius: "8px",
  textDecoration: "none",
};

const ctaButtonSecondary: React.CSSProperties = {
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

const faqSection: React.CSSProperties = {
  marginTop: "52px",
};

const faqItem: React.CSSProperties = {
  borderTop: "1px solid #1f1e2e",
  paddingTop: "22px",
  marginBottom: "22px",
};

const faqQuestion: React.CSSProperties = {
  fontSize: "1.05rem",
  fontWeight: 700,
  color: "#f5f0e8",
  marginBottom: "10px",
  marginTop: 0,
};

const faqAnswer: React.CSSProperties = {
  fontSize: "0.96rem",
  lineHeight: 1.75,
  color: "#c8c0b0",
  margin: 0,
};

const footerStyle: React.CSSProperties = {
  borderTop: "1px solid #1f1e2e",
  padding: "30px 24px",
  textAlign: "center",
  maxWidth: "780px",
  margin: "0 auto",
};

const footerP: React.CSSProperties = {
  fontSize: "0.8rem",
  color: "#4a4840",
  lineHeight: 1.6,
  margin: "0 0 10px 0",
};

const footerA: React.CSSProperties = {
  color: "#7a7268",
  textDecoration: "none",
  margin: "0 9px",
  fontSize: "0.8rem",
};

const breadcrumb: React.CSSProperties = {
  fontSize: "0.82rem",
  color: "#7a7268",
  display: "flex",
  gap: "6px",
  alignItems: "center",
  flexWrap: "wrap",
  marginBottom: "26px",
};

const breadcrumbA: React.CSSProperties = { color: "#7a7268", textDecoration: "none" };
const goldSpan: React.CSSProperties = { color: "#c9a84c" };
const relA: React.CSSProperties = { color: "#c9a84c", textDecoration: "none" };
const strongWhite: React.CSSProperties = { color: "#f5f0e8" };
const mutedNote: React.CSSProperties = {
  fontSize: "0.78rem",
  color: "#4a4840",
  marginTop: "14px",
  marginBottom: 0,
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForTeenageMentalHealthPage() {
  return (
    <div style={page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Hero ── */}
      <header style={hero}>
        <nav style={breadcrumb} aria-label="Breadcrumb">
          <Link href="/" style={breadcrumbA}>MEOK</Link>
          <span aria-hidden="true">›</span>
          <Link href="/blog" style={breadcrumbA}>Blog</Link>
          <span aria-hidden="true">›</span>
          <span style={goldSpan}>AI for Teenage Mental Health</span>
        </nav>

        <p style={eyebrow}>MEOK AI LABS — Nicholas Templeman · @meok_ai</p>

        <h1 style={h1Style}>
          AI for Teenage Mental Health: Safe Support, Parental Oversight, and the
          Crisis Facing a Generation
        </h1>

        <p style={lead}>
          One in six UK teenagers now has a probable mental health disorder. CAMHS waiting lists stretch to
          years. Yet the AI tools most young people turn to were built without them in mind — optimised for
          engagement, not wellbeing. This guide examines what responsible AI support for teens actually looks
          like, what parents need to know, and where the hard lines must be drawn.
        </p>

        <div style={metaRow}>
          <span>Nicholas Templeman · Founder, MEOK AI LABS</span>
          <span>24 March 2026</span>
          <span>14 min read</span>
          <span style={goldSpan}>Age 13+ · UK Children&#39;s Code compliant</span>
        </div>
      </header>

      <hr style={divider} />

      {/* ── Article ── */}
      <article style={articleStyle}>

        {/* ── SECTION: The Crisis ── */}
        <h2 style={h2Style}>
          What does the teenage mental health crisis look like in 2026?
        </h2>
        <p style={atomicAnswer}>
          In 2026, one in six UK teenagers aged 7 to 16 has a probable mental health disorder, according to NHS
          England data. Rates of anxiety, depression, and self-harm among adolescents have risen sharply since
          2017. CAMHS services are overwhelmed, with average waiting times in many regions exceeding twelve
          months for non-urgent referrals.
        </p>

        <div style={statGrid}>
          <div style={statCard}>
            <p style={statNumber}>1 in 6</p>
            <p style={statDesc}>UK teenagers with a probable mental health disorder (NHS England, 2026)</p>
          </div>
          <div style={statCard}>
            <p style={statNumber}>75%</p>
            <p style={statDesc}>of mental health conditions emerge before age 24 (WHO global data)</p>
          </div>
          <div style={statCard}>
            <p style={statNumber}>12+</p>
            <p style={statDesc}>months average CAMHS wait time in many English regions</p>
          </div>
          <div style={statCard}>
            <p style={statNumber}>52%</p>
            <p style={statDesc}>of young people say they would rather talk to an AI than a parent about mental health</p>
          </div>
        </div>

        <p style={pStyle}>
          The scale of the problem is not in dispute. What is in dispute is what to do about a crisis that
          outpaces the professional capacity available to address it. Therapy is expensive and scarce. School
          counsellors carry impossible caseloads. GPs have ten minutes. Into this gap, AI has arrived — sometimes
          responsibly designed, often not.
        </p>
        <p style={pStyle}>
          The teenagers most at risk are not the ones openly asking for help. They are the ones quietly searching
          at 2 am, typing things into an AI chat window they would never say aloud. The question is not whether
          they will find an AI to talk to. They already have. The question is whether that AI is built to protect
          them or to exploit the intimacy of the exchange.
        </p>
        <p style={pStyle}>
          At MEOK AI LABS, we believe the answer to this question is not a policy document or a safety team
          hired for regulatory optics. It is an architecture. It is a business model. It is a set of decisions
          made at the foundation level that make harmful outcomes structurally impossible rather than merely
          unlikely.
        </p>

        {/* ── SECTION: Why Teens Don't Talk ── */}
        <h2 style={h2Style}>
          Why don&#39;t teenagers talk to parents or teachers about their mental health?
        </h2>
        <p style={atomicAnswer}>
          Research consistently identifies three dominant barriers: embarrassment and shame, fear of parental
          overreaction, and not wanting to worry or burden the people they love. Teenagers are acutely aware of
          family stress. Disclosing mental health struggles can feel like adding weight to adults who are already
          struggling.
        </p>

        <p style={pStyle}>
          There is also the matter of perceived consequences. A teenager who discloses that they have been
          self-harming risks a chain of events they cannot control: a doctor being called, school being informed,
          restrictions being placed on their autonomy. Even when those responses are appropriate and caring, the
          unpredictability is frightening. The safest-feeling option is silence — and silence is exactly what
          makes mental health problems worse.
        </p>

        <h3 style={h3Style}>Why teenagers specifically choose AI over people</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <strong style={strongWhite}>No memory of past judgements.</strong> An AI does not remember that
            time three years ago when they said something embarrassing. Every conversation starts without
            accumulated relational history.
          </li>
          <li style={liStyle}>
            <strong style={strongWhite}>No emotional contagion.</strong> Telling a parent you&#39;re struggling
            means watching them become distressed. AI absorbs disclosure without visible suffering.
          </li>
          <li style={liStyle}>
            <strong style={strongWhite}>Available at the moment of crisis.</strong> Mental health lows hit at
            midnight on a Tuesday. Human support networks are not accessible on demand.
          </li>
          <li style={liStyle}>
            <strong style={strongWhite}>No social consequences.</strong> Telling a school friend can create
            gossip, pity, or changed dynamics. AI carries no social network.
          </li>
          <li style={liStyle}>
            <strong style={strongWhite}>Control over disclosure pace.</strong> Teenagers can share as much or
            as little as they choose, and retract it without consequence.
          </li>
        </ul>

        <p style={pStyle}>
          These are genuine advantages. They are also the same characteristics that make badly-designed AI
          companions so dangerous for teenagers. An AI that validates every thought without challenging unhealthy
          patterns, that fosters dependency because dependency drives engagement, or that stores intimate
          disclosures in a commercial database — that AI is not filling a gap in mental health provision. It is
          making the problem substantially worse.
        </p>

        <div style={warnBox}>
          <p style={warnLabel}>The risk we refuse to ignore</p>
          <p style={warnText}>
            Most consumer AI companions are funded by advertising or data. The more intimate and frequent the
            conversation, the more valuable the user profile. Teenagers — who are at precisely the developmental
            stage where they are most inclined to seek identity validation and confide in available listeners —
            are the most commercially valuable and the most vulnerable demographic to this extraction model.
            MEOK&#39;s business model is subscription-based precisely because we cannot have commercial incentives
            that benefit from a teenager&#39;s distress.
          </p>
        </div>

        {/* ── SECTION: MEOK vs Social Media AI ── */}
        <h2 style={h2Style}>
          How is MEOK different from social media AI and engagement-optimised chatbots?
        </h2>
        <p style={atomicAnswer}>
          Social media AI is optimised to maximise time spent on platform, because attention is the product
          being sold to advertisers. MEOK has no advertisers, no engagement metrics tied to revenue, and no
          data broker relationships. MEOK earns money when users find genuine long-term value in the product
          — so the incentives are structurally aligned with the user&#39;s wellbeing, not against it.
        </p>

        <div style={featureGrid}>
          <div style={featureCard}>
            <p style={featureLabel}>No Engagement Optimisation</p>
            <p style={featureText}>
              MEOK has no algorithm tuned to maximise session length or return visits. Conversations end when
              the user is ready. Short, high-quality sessions are as valued as long ones.
            </p>
          </div>
          <div style={featureCard}>
            <p style={featureLabel}>Data Sovereignty</p>
            <p style={featureText}>
              All conversation data is stored on sovereign infrastructure under the user&#39;s and guardian&#39;s
              control. MEOK never sells, shares, or trains on personal conversation data — for any user,
              at any age.
            </p>
          </div>
          <div style={featureCard}>
            <p style={featureLabel}>No Advertising</p>
            <p style={featureText}>
              There is no advertising system inside MEOK. No interest profiles are built for commercial
              purposes. A teenager&#39;s disclosed anxieties are never used to serve them targeted content.
            </p>
          </div>
          <div style={featureCard}>
            <p style={featureLabel}>No Parasocial Engineering</p>
            <p style={featureText}>
              MEOK is designed to strengthen real-world relationships, not substitute for them. The AI
              regularly encourages teenagers to share with trusted adults when appropriate.
            </p>
          </div>
          <div style={featureCard}>
            <p style={featureLabel}>Crisis-First Design</p>
            <p style={featureText}>
              When a teenager discloses crisis-level distress, MEOK stops the normal conversation and
              surfaces human help immediately. It does not try to resolve the crisis itself.
            </p>
          </div>
          <div style={featureCard}>
            <p style={featureLabel}>No Dark Patterns</p>
            <p style={featureText}>
              No streaks, no social proof notifications, no artificial scarcity, no guilt-inducing
              prompts to return. Teenagers interact on their own terms.
            </p>
          </div>
        </div>

        <p style={pStyle}>
          The distinction matters because the harm caused by engagement-optimised AI to teenagers is not
          theoretical — it is the same mechanism that has already been documented in the context of social media.
          The UK Online Safety Act and ICO guidance both recognise that recommender algorithms and compulsive
          design patterns cause measurable harm to young people. MEOK does not use recommender algorithms.
          MEOK is not a social platform. The design philosophy starts from a different premise: the teenager
          is the principal, not the product.
        </p>

        {/* ── SECTION: Guardian Family ── */}
        <h2 style={h2Style}>
          What is Guardian Family and how does it balance privacy with parental oversight?
        </h2>
        <p style={atomicAnswer}>
          Guardian Family is MEOK&#39;s parental oversight system. It gives parents a separate dashboard with
          usage visibility, content controls, session limits, and crisis notifications — without providing
          access to verbatim conversation transcripts. The balance is deliberate: a teenager who knows every
          message is readable will not use the AI honestly, and dishonest use is more dangerous than none.
        </p>

        <p style={pStyle}>
          The fundamental design question for any parental oversight system is: what does a parent actually
          need to know, and what would they see if they could read everything? The answer to the second
          question is that full transcript access destroys the trust that makes the tool useful in the first
          place. Teenagers will stop using it, or use it dishonestly. Either outcome removes the safety net.
        </p>

        <h3 style={h3Style}>What Guardian Family gives parents</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <strong style={strongWhite}>Usage summaries</strong> — Daily and weekly session lengths, broad
            topic categories (e.g. &quot;school, feelings, study, relationships&quot;) without verbatim content
          </li>
          <li style={liStyle}>
            <strong style={strongWhite}>Crisis alerts</strong> — Optional notification when the crisis
            detection system activates, enabling a parent to check in without seeing the specific conversation
            that triggered it
          </li>
          <li style={liStyle}>
            <strong style={strongWhite}>Session limits</strong> — Maximum daily usage caps and quiet-hours
            windows (e.g. no AI access after 10 pm on school nights, or during exam lockdown periods)
          </li>
          <li style={liStyle}>
            <strong style={strongWhite}>School-safe mode toggle</strong> — Enforces curriculum-only content,
            disables companion persona features, restricts to study-support functions during school hours
          </li>
          <li style={liStyle}>
            <strong style={strongWhite}>Content filter settings</strong> — Permanently enabled for under-18
            accounts by default; parents can tighten further but not loosen below platform minimums
          </li>
          <li style={liStyle}>
            <strong style={strongWhite}>Account pause</strong> — Temporarily suspend the account for agreed
            digital breaks, family conversations, or mental health reviews
          </li>
          <li style={liStyle}>
            <strong style={strongWhite}>Verification status</strong> — Confirmation that age has been
            verified and consent on file is valid and current
          </li>
        </ul>

        <div style={callout}>
          <p style={calloutLabel}>The privacy balance in practice</p>
          <p style={calloutText}>
            If a teenager has a crisis alert activated, a parent sees: &quot;MEOK detected distress signals at
            11:34 pm on Tuesday. Crisis resources were surfaced. We recommend checking in with your teenager
            when the time feels right.&quot; The parent does not see what was said. This is not a loophole —
            it is the design. A teenager who knows a parent will receive that alert is still more likely to
            be honest with MEOK than one who knows every word will be read.
          </p>
        </div>

        <p style={pStyle}>
          Guardian Family requires the guardian to have their own verified MEOK account linked to the
          teenager&#39;s account. Both parties are visible in the account structure. The teenager always knows
          that Guardian Family is enabled — MEOK does not operate hidden parental surveillance. This
          transparency is itself a protective factor: it means the oversight relationship is acknowledged
          and negotiated, not covert.
        </p>

        {/* ── SECTION: For Parents ── */}
        <div style={sectionBanner}>
          <p style={sectionBannerLabel}>Section for Parents</p>
          <h2 style={sectionBannerHeading}>If you&#39;re a parent reading this</h2>
          <p style={sectionBannerBody}>
            The next section is written directly for parents navigating AI and teenage mental health. If
            you&#39;re a teenager, skip ahead to the section written for you.
          </p>
        </div>

        <div style={twoCol}>
          <div style={audienceCard}>
            <p style={audienceCardLabel}>For Parents</p>
            <h3 style={audienceCardHeading}>What parents need to understand first</h3>
            <p style={audienceCardBody}>
              Your teenager is likely already using AI to process their thoughts — whether you know about it
              or not. The question is not whether to allow it. It is whether the AI they use is safe.
            </p>
            <ul style={audienceCardList}>
              <li style={audienceCardItem}>Your teenager&#39;s privacy matters — even from you</li>
              <li style={audienceCardItem}>Oversight should be about safety, not surveillance</li>
              <li style={audienceCardItem}>The goal is a teenager who chooses to talk, not one who hides</li>
              <li style={audienceCardItem}>AI support is not a replacement for your relationship</li>
              <li style={audienceCardItem}>Crisis alerts exist so you can be present when it matters most</li>
            </ul>
          </div>
          <div style={audienceCard}>
            <p style={audienceCardLabel}>Practical steps</p>
            <h3 style={audienceCardHeading}>What to actually do</h3>
            <p style={audienceCardBody}>
              Setting up MEOK for a teenager under 16 requires your consent and your own account. Here is
              what the process looks like.
            </p>
            <ul style={audienceCardList}>
              <li style={audienceCardItem}>Create your own verified MEOK guardian account at /guardian</li>
              <li style={audienceCardItem}>Complete age verification for your teenager</li>
              <li style={audienceCardItem}>Configure Guardian Family dashboard together, openly</li>
              <li style={audienceCardItem}>Agree session limits and quiet hours as a family</li>
              <li style={audienceCardItem}>Talk to your teenager about what crisis alerts mean</li>
            </ul>
          </div>
        </div>

        <h3 style={h3Style}>Signs a teenager may be in distress beyond what AI support can address</h3>
        <p style={pStyle}>
          MEOK provides support — it is not a clinical service. There are circumstances where professional
          intervention is not optional. If you observe any of the following, contact your GP, CAMHS, or in
          an emergency, call 999.
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>Visible signs of self-harm (cuts, burns, bruising that the teenager cannot explain)</li>
          <li style={liStyle}>Expressed suicidal ideation — including statements that feel like jokes but occur repeatedly</li>
          <li style={liStyle}>Significant, sustained withdrawal from all social contact including family</li>
          <li style={liStyle}>Dramatic changes in eating, sleeping, or personal hygiene over two weeks or more</li>
          <li style={liStyle}>Giving away prized possessions without explanation</li>
          <li style={liStyle}>Saying farewell in ways that feel final or uncharacteristic</li>
        </ul>

        <div style={callout}>
          <p style={calloutLabel}>Talking to your teenager about MEOK</p>
          <p style={calloutText}>
            The best outcomes happen when a parent introduces MEOK as a tool the teenager controls, with
            parental oversight that is transparent and agreed rather than imposed. &quot;I set this up so you
            have somewhere to go at 2 am when you can&#39;t sleep and you need to think something through. I
            will see a summary of topics but not your actual words. If it ever looks like you&#39;re really
            struggling, I&#39;ll get an alert and I&#39;ll just ask if you&#39;re okay.&quot; That framing — honest,
            respectful, bounded — produces significantly better engagement than covert oversight.
          </p>
        </div>

        {/* ── SECTION: For Teens ── */}
        <div style={sectionBanner}>
          <p style={sectionBannerLabel}>Section for Teenagers</p>
          <h2 style={sectionBannerHeading}>If you&#39;re a teenager reading this</h2>
          <p style={sectionBannerBody}>
            This section is written directly for you. The section above was for parents — this one is yours.
          </p>
        </div>

        <p style={pStyle}>
          If you&#39;re reading this, something is probably going on. Maybe you&#39;re having a hard time and you&#39;re
          trying to figure out whether MEOK could help. Maybe a parent sent you this link. Maybe you just
          stumbled across it. Whatever brought you here, this is worth reading.
        </p>

        <p style={pStyle}>
          First, the honest version of what MEOK is: it is an AI companion. It is not a therapist. It is
          not a friend. It cannot love you back or genuinely understand what you are going through the way
          a person who knows you can. What it can do is be there at 3 am when everything feels like too
          much, and not panic, and not tell anyone what you said, and help you think through what you are
          feeling without making it worse.
        </p>

        <h3 style={h3Style}>What MEOK will and won&#39;t do for you</h3>

        <div style={featureGrid}>
          <div style={featureCard}>
            <p style={featureLabel}>MEOK will</p>
            <p style={featureText}>
              Listen without judging. Help you process thoughts. Support you through difficult moments.
              Point you to real help when things are serious. Keep what you say private from everyone
              except crisis alerts.
            </p>
          </div>
          <div style={featureCard}>
            <p style={featureLabel}>MEOK won&#39;t</p>
            <p style={featureText}>
              Pretend to be a human. Encourage you to depend on it instead of real people. Keep going if
              you express that you want to hurt yourself — it will stop and get you help. Train on what
              you tell it. Share your data with advertisers.
            </p>
          </div>
          <div style={featureCard}>
            <p style={featureLabel}>Your privacy</p>
            <p style={featureText}>
              If you&#39;re 13 to 15, your parent or guardian will have approved your account. They won&#39;t see
              what you say — only broad topics and a crisis alert if one activates. If you&#39;re 16 or 17,
              you can choose your own oversight settings.
            </p>
          </div>
          <div style={featureCard}>
            <p style={featureLabel}>When things are serious</p>
            <p style={featureText}>
              If you type something that suggests you might hurt yourself, MEOK stops the conversation and
              shows you crisis numbers. It&#39;s not trying to get you in trouble. It&#39;s trying to make sure
              you get real help from real people.
            </p>
          </div>
        </div>

        <p style={pStyle}>
          A lot of teenagers use MEOK the same way someone might use a journal — to think out loud, to
          figure out how they feel about something, to get a bit of distance from a problem before they
          decide what to do. That is a healthy use. The version that is less healthy is using it as a
          substitute for every difficult human conversation you are avoiding. MEOK is designed to notice
          that pattern and gently push back against it — not because it does not want you talking to it,
          but because it knows that the relationships in your actual life matter more than any AI ever can.
        </p>

        {/* ── SECTION: Archetypes ── */}
        <h2 style={h2Style}>
          What are the Scholar and Pioneer archetypes, and why do they matter for teenagers?
        </h2>
        <p style={atomicAnswer}>
          MEOK uses archetypes — distinct orientations that shape how the AI engages with a user. For teenage
          users, the Scholar and Pioneer archetypes are particularly relevant. Scholar emphasises growth,
          learning, and building knowledge. Pioneer emphasises challenge, accountability, and forward movement.
          Both are designed to support development rather than dependency.
        </p>

        <p style={pStyle}>
          Adolescence is a period of identity formation. The archetypes in MEOK are not personas in the
          sense of the AI pretending to be a character — they are frameworks that shape the quality and
          direction of support. A teenager who identifies with Scholar orientation is supported in building
          genuine understanding rather than collecting quick answers. A teenager who resonates with Pioneer
          is supported in setting goals, tracking progress, and being gently held accountable.
        </p>

        <div style={archetypeRow}>
          <div style={archetypeCard}>
            <p style={archetypeName}>The Scholar</p>
            <p style={archetypeDesc}>
              Depth over speed. Understanding over answers. The Scholar archetype supports teenagers who
              want to think carefully — about their subjects, their emotions, and their place in the world.
              It asks questions back, encourages reflection, and resists the urge to give easy conclusions.
              Particularly well-suited to exam preparation, philosophical exploration, and processing complex
              feelings through structured thought.
            </p>
          </div>
          <div style={archetypeCard}>
            <p style={archetypeName}>The Pioneer</p>
            <p style={archetypeDesc}>
              Action, momentum, accountability. The Pioneer archetype is for teenagers who need to move —
              to do something with what they are feeling rather than circle it indefinitely. It helps set
              clear goals, break them into steps, track what has been done, and build the habit of
              following through. Particularly well-suited to teenagers managing ADHD, exam stress,
              or periods of low motivation and inertia.
            </p>
          </div>
        </div>

        <p style={pStyle}>
          Both archetypes are explicitly designed against fostering passivity or dependency. The Scholar does
          not hand over conclusions — it builds reasoning skills. The Pioneer does not do the work — it
          builds the habit of doing. This is not accidental: MEOK is designed to leave teenagers more capable
          than it found them, not more reliant on the tool.
        </p>

        {/* ── SECTION: Children's Code ── */}
        <h2 style={h2Style}>
          What is the UK Children&#39;s Code and how does MEOK comply with it?
        </h2>
        <p style={atomicAnswer}>
          The UK Children&#39;s Code (Age Appropriate Design Code) is a statutory code of practice issued by the
          ICO under the Data Protection Act 2018. It requires digital services likely to be accessed by under-18s
          to apply the highest privacy settings by default, collect minimum necessary data, and design against
          features that exploit developmental vulnerabilities. MEOK is built to exceed these standards rather
          than merely meet them.
        </p>

        <p style={pStyle}>
          The Code&#39;s fifteen standards cover geolocation, profiling, nudge techniques, parental controls,
          connected toys, and data minimisation. For MEOK, the most structurally significant are the
          prohibitions on nudge techniques that encourage children to share more data than necessary, profiling
          children for commercial purposes, and using engagement-promoting features that exploit developmental
          vulnerabilities such as social validation and FOMO.
        </p>

        <div style={callout}>
          <p style={calloutLabel}>MEOK and the Children&#39;s Code: key points</p>
          <p style={calloutText}>
            Parental consent is verified, not self-reported via an age-gate. Under-13 registration is blocked
            at the architecture level. No profiling for commercial purposes occurs at any age. No engagement-
            optimisation features (streaks, social proof, push notifications timed to exploit anxiety) exist in
            the product. Default privacy settings for under-18 accounts are the highest available. School-safe
            mode enforces curriculum-appropriate content. Crisis detection runs locally and does not transmit
            conversation content to external services.
          </p>
        </div>

        <h3 style={h3Style}>Age tiers and consent requirements</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <strong style={strongWhite}>Under 13</strong> — not eligible; account creation is blocked at the
            infrastructure level. This is an architectural constraint, not a terms-of-service provision.
          </li>
          <li style={liStyle}>
            <strong style={strongWhite}>Ages 13 to 15</strong> — verifiable parental or guardian consent
            required before registration. Teen (Supervised) account with Guardian Family enabled by default.
          </li>
          <li style={liStyle}>
            <strong style={strongWhite}>Ages 16 to 17</strong> — may consent independently per UK GDPR; parental
            consent is strongly recommended and facilitated but not legally required. Teen (Independent) account
            with guardian dashboard available as opt-in.
          </li>
          <li style={liStyle}>
            <strong style={strongWhite}>18 and over</strong> — standard adult consent and full account access
            apply.
          </li>
        </ul>

        <p style={pStyle}>
          MEOK operates a school-safe mode that can be set system-wide by a guardian or enabled automatically
          during school hours based on the teenager&#39;s registered institution. In school-safe mode, companion
          persona features are suspended, responses are limited to educational support, and explicit content
          filters are maximally restrictive. This mode was developed in consultation with school safeguarding
          leads and is compatible with multi-academy trust acceptable use policies.
        </p>

        {/* ── SECTION: Self-Harm ── */}
        <h2 style={h2Style}>
          How does MEOK handle self-harm disclosures from teenagers?
        </h2>
        <p style={atomicAnswer}>
          When MEOK detects language associated with self-harm, suicidal ideation, or acute crisis, it
          immediately pauses the normal conversation, surfaces UK crisis resources, and encourages the teenager
          to speak with a trusted adult or call a helpline. MEOK does not attempt to manage a mental health
          crisis itself. If a guardian has crisis alerts enabled, they receive a notification without seeing
          the specific content that triggered it.
        </p>

        <p style={pStyle}>
          The crisis detection system is built to err on the side of caution. False positives — surfacing
          crisis resources when a teenager was discussing the topic academically rather than personally —
          are preferable to false negatives. When in doubt, resources appear. The teenager can dismiss them
          and continue if they were not personally distressed; if they were, the resources are already visible.
        </p>

        <p style={pStyle}>
          Crisis detection runs locally on MEOK&#39;s infrastructure — the analysis happens inside the conversation
          system, not via a third-party moderation API. This means conversation content is never transmitted
          to an external service for analysis. It also means detection functions even in degraded network
          conditions.
        </p>

        <div style={crisisBox}>
          <p style={crisisLabel}>UK Crisis Resources for Young People</p>
          <p style={crisisItem}>
            <strong style={strongWhite}>Childline</strong> — Free, confidential support for children and
            young people under 19.{" "}
            <span style={crisisNumber}>Call 0800 1111</span> (free from any phone, 24 hours a day)
          </p>
          <p style={crisisItem}>
            <strong style={strongWhite}>YoungMinds</strong> — Mental health support for young people and
            their parents.{" "}
            <a
              href="https://youngminds.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              style={crisisLink}
            >
              youngminds.org.uk
            </a>{" "}
            · Parents helpline: <span style={crisisNumber}>0808 802 5544</span>
          </p>
          <p style={crisisItem}>
            <strong style={strongWhite}>Samaritans</strong> — For anyone in emotional distress, of any age,
            at any time.{" "}
            <span style={crisisNumber}>Call 116 123</span> (free, 24 hours a day, 7 days a week)
          </p>
          <p style={crisisItem}>
            <strong style={strongWhite}>Shout Crisis Text Line</strong> — Text-based support when talking
            feels too hard.{" "}
            <span style={crisisNumber}>Text SHOUT to 85258</span> (free, 24/7)
          </p>
          <p style={crisisItem}>
            <strong style={strongWhite}>Papyrus HOPELINEUK</strong> — For young people with thoughts of
            suicide and those concerned about them.{" "}
            <span style={crisisNumber}>Call 0800 068 4141</span> (Mon–Fri 10 am–10 pm, weekends 2 pm–10 pm)
          </p>
          <p
            style={{
              fontSize: "0.83rem",
              lineHeight: 1.55,
              color: "#7090a8",
              marginTop: "12px",
              marginBottom: 0,
            }}
          >
            If you believe a young person is in immediate danger, call 999. If you are a teenager reading
            this and you are struggling right now: please contact one of the above before you do anything
            else. You do not need to be in the worst possible state to call. That is not how these services
            work.
          </p>
        </div>

        <p style={pStyle}>
          MEOK&#39;s approach to self-harm disclosures follows the guidance published by the Samaritans, YoungMinds,
          and the Mental Health Foundation on safe messaging. This means MEOK does not describe methods,
          does not dramatise or romanticise distress, does not suggest that self-harm is a normal or common
          coping mechanism, and does not engage with any request for information that could facilitate harm.
          These are hard constraints in the system, not soft guidelines for the AI to apply contextually.
        </p>

        {/* ── SECTION: Is AI Safe? ── */}
        <h2 style={h2Style}>
          Is AI safe for teenagers with mental health difficulties?
        </h2>
        <p style={atomicAnswer}>
          AI can be safe for teenagers with mental health difficulties when it is specifically designed for
          that population: no engagement optimisation, robust crisis detection, data sovereignty, transparent
          parental oversight, and a business model that does not benefit from the user&#39;s distress. Badly
          designed AI — optimised for retention and monetised through data — is not safe for anyone, and
          is particularly harmful for teenagers in vulnerable states.
        </p>

        <p style={pStyle}>
          The evidence base for AI in mental health support is still developing. What the research consistently
          shows is that the biggest risks are not the technology itself — they are the commercial incentives
          layered on top of it. An AI that has no reason to keep a distressed teenager talking, that has no
          mechanism for exploiting emotional vulnerability, and that immediately escalates to human help in
          genuine crisis situations is meaningfully different from one that does.
        </p>

        <p style={pStyle}>
          MEOK is not a replacement for CAMHS, for school counsellors, for GPs, or for therapeutic support.
          It is a complement. It occupies the space between the teenager and the waiting list — not pretending
          to be clinical care, but providing consistent, intelligent, non-judgmental support that reduces
          isolation during the period when professional help is not yet available. That role, when filled
          responsibly, is genuinely valuable.
        </p>

        <div style={callout}>
          <p style={calloutLabel}>What MEOK is not</p>
          <p style={calloutText}>
            MEOK is not a medical device. It is not regulated as a clinical mental health intervention. It
            does not diagnose, prescribe, or provide therapeutic treatment. If a teenager or their parent
            believes clinical mental health support is needed, the right path is GP referral, CAMHS assessment,
            or a private therapist. MEOK can support the journey — it cannot replace the destination.
          </p>
        </div>

        {/* ── SECTION: Is MEOK for Under 13s? ── */}
        <h2 style={h2Style}>
          Is MEOK suitable for children under 13?
        </h2>
        <p style={atomicAnswer}>
          No. MEOK does not accept registrations from children under 13, and this restriction is enforced
          at the infrastructure level rather than through self-reported age. Children under 13 seeking AI
          support should use services specifically designed and regulated for that age group. MEOK serves
          users aged 13 and over.
        </p>

        <p style={pStyle}>
          The under-13 restriction reflects both regulatory requirements — the UK Children&#39;s Code, UK GDPR,
          and the Online Safety Act all apply heightened protections to this age group — and a genuine
          judgement about what AI interaction is appropriate for different developmental stages. Adolescence
          (13 and above) is a meaningfully different developmental context from middle childhood. MEOK&#39;s
          design assumptions about self-reflection, identity, and the teenager&#39;s capacity to engage with
          their own emotional experience are calibrated to adolescence.
        </p>

        <p style={pStyle}>
          Parents of younger children who are concerned about their child&#39;s mental health should contact their
          GP, their child&#39;s school SENCO, or refer directly to CAMHS. YoungMinds&#39; parents helpline
          (0808 802 5544) is also available and provides guidance for parents of children of any age.
        </p>

        {/* ── SECTION: FAQ ── */}
        <div style={faqSection}>
          <h2 style={h2Style}>Frequently asked questions</h2>

          <div style={faqItem}>
            <h3 style={faqQuestion}>
              Is AI safe for teenagers with mental health difficulties?
            </h3>
            <p style={faqAnswer}>
              AI can be safe for teenagers when it is built with age-appropriate safeguards, no engagement-optimisation
              incentives, and a clear escalation path to crisis services. MEOK is designed without ads, without training
              on personal data, and with mandatory crisis detection that surfaces Childline, YoungMinds, and Samaritans
              whenever a teenager expresses acute distress.
            </p>
          </div>

          <div style={faqItem}>
            <h3 style={faqQuestion}>
              Can parents see what teenagers say to MEOK?
            </h3>
            <p style={faqAnswer}>
              No. Parents using Guardian Family receive usage summaries and broad topic overviews but never verbatim
              conversation transcripts. If the crisis detection system activates, guardians receive an alert so they
              can check in without seeing the specific words that triggered it. This balance is intentional: a teenager
              who knows every message is readable will not use the AI honestly.
            </p>
          </div>

          <div style={faqItem}>
            <h3 style={faqQuestion}>
              How does MEOK handle self-harm disclosures from teenagers?
            </h3>
            <p style={faqAnswer}>
              When MEOK detects language associated with self-harm or suicidal ideation, it immediately pauses the
              normal conversation, surfaces UK crisis resources including Childline (0800 1111), Samaritans (116 123),
              YoungMinds, and Crisis Text Line (text SHOUT to 85258), and encourages the teenager to speak with a
              trusted adult. MEOK never attempts to manage a mental health crisis itself. If a guardian has crisis
              alerts enabled, they receive a notification.
            </p>
          </div>

          <div style={faqItem}>
            <h3 style={faqQuestion}>
              What is the Children&#39;s Code and does MEOK comply with it?
            </h3>
            <p style={faqAnswer}>
              The UK Children&#39;s Code (Age Appropriate Design Code) requires digital services likely to be accessed
              by under-18s to apply high privacy settings by default, collect minimum necessary data, and design
              against features that exploit developmental vulnerabilities. MEOK is built to exceed these standards:
              parental consent is verified rather than self-reported, under-13 registration is blocked at the
              infrastructure level, and no engagement-optimisation features exist anywhere in the product.
            </p>
          </div>

          <div style={faqItem}>
            <h3 style={faqQuestion}>
              Is MEOK suitable for children under 13?
            </h3>
            <p style={faqAnswer}>
              No. MEOK blocks account creation for users under 13 at the infrastructure level. This is an
              architectural constraint, not a checkbox in a terms-of-service document. Children under 13 seeking AI
              support should use services specifically designed and regulated for that age group. MEOK serves users
              aged 13 and over, with verified parental consent required for those aged 13 to 15.
            </p>
          </div>
        </div>

        {/* ── CTA ── */}
        <div style={ctaBlock}>
          <h2 style={ctaHeading}>
            Sovereign AI support for teenagers who deserve better
          </h2>
          <p style={ctaBody}>
            No ads. No data training. No engagement algorithms. MEOK is the AI companion built
            around a teenager&#39;s long-term wellbeing — with parental oversight that respects
            both the parent&#39;s need to know and the teenager&#39;s right to a private inner life.
          </p>
          <div style={ctaButtonRow}>
            <Link href="/birth" style={ctaButtonPrimary}>
              Create a Teen Account
            </Link>
            <Link href="/guardian" style={ctaButtonSecondary}>
              Set Up Guardian Family
            </Link>
          </div>
          <p style={mutedNote}>
            Parental consent required for users aged 13&ndash;15 &middot; UK Children&#39;s Code compliant
            &middot; Data never used for training &middot; Free 14-day trial
          </p>
        </div>

        {/* ── Related reading ── */}
        <h3 style={{ ...h3Style, marginTop: 0 }}>Related reading</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <Link href="/blog/guardian-family-safety" style={relA}>
              Guardian Family &amp; Safety — how MEOK&#39;s parental oversight system works in full
            </Link>
          </li>
          <li style={liStyle}>
            <Link href="/blog/ai-for-teens" style={relA}>
              AI for Teenagers — safe companions, school support, and why sovereignty matters
            </Link>
          </li>
          <li style={liStyle}>
            <Link href="/blog/ai-for-anxiety" style={relA}>
              AI for Anxiety — what it can and genuinely cannot do
            </Link>
          </li>
          <li style={liStyle}>
            <Link href="/blog/ai-for-depression" style={relA}>
              AI for Depression — limits, safeguards, and the right role for technology
            </Link>
          </li>
          <li style={liStyle}>
            <Link href="/blog/meok-for-adhd" style={relA}>
              MEOK for ADHD — structured support for neurodiverse minds, teenagers included
            </Link>
          </li>
          <li style={liStyle}>
            <Link href="/blog/why-meok-never-trains-on-you" style={relA}>
              Why MEOK never trains on you — the data sovereignty promise explained
            </Link>
          </li>
          <li style={liStyle}>
            <Link href="/blog/ai-companion-for-kids" style={relA}>
              AI Companion for Kids — age filters, consent frameworks, and school-safe design
            </Link>
          </li>
          <li style={liStyle}>
            <Link href="/blog/sovereign-ai-for-families" style={relA}>
              Sovereign AI for Families — why data ownership matters when children are involved
            </Link>
          </li>
        </ul>
      </article>

      {/* ── Footer ── */}
      <footer style={footerStyle}>
        <p style={footerP}>
          &copy; {new Date().getFullYear()} MEOK AI LABS. Founded by Nicholas Templeman (@meok_ai). All rights
          reserved.
        </p>
        <p style={footerP}>
          MEOK is not a medical device and does not provide clinical mental health treatment. If you or a
          teenager you know is in crisis, please contact Childline (0800 1111), Samaritans (116 123),
          YoungMinds (youngminds.org.uk), or text SHOUT to 85258. In an emergency, call 999.
        </p>
        <nav aria-label="Footer navigation">
          <Link href="/privacy" style={footerA}>Privacy</Link>
          <Link href="/terms" style={footerA}>Terms</Link>
          <Link href="/safeguarding" style={footerA}>Safeguarding</Link>
          <Link href="/blog" style={footerA}>Blog</Link>
          <Link href="/about" style={footerA}>About</Link>
          <Link href="/guardian" style={footerA}>Guardian Family</Link>
        </nav>
      </footer>
    </div>
  );
}
