import type { Metadata } from "next"
import Link from "next/link"

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI Support for Eating Disorders: What MEOK Does \u2014 and Won\u2019t Do | MEOK AI LABS",
  description:
    "Eating disorders carry the highest mortality rate of any mental illness. MEOK AI LABS never " +
    "comments on weight, food choices, or calories \u2014 governed by the Maternal Covenant care-floor. " +
    "Beat helpline 0808 801 0677. Between-session support, not treatment.",
  keywords: [
    "AI support eating disorders UK",
    "AI for anorexia support",
    "AI for bulimia support",
    "ARFID support AI",
    "binge eating disorder AI",
    "MEOK eating disorder safe AI",
    "eating disorder between-session support",
    "Beat eating disorders 0808 801 0677",
    "AI body neutrality",
    "Maternal Covenant eating disorders",
    "OSFED AI support",
    "eating disorder AI companion UK",
    "AI care-floor eating disorders",
    "sovereign AI eating disorder recovery",
  ],
  authors: [{ name: "Nicholas Templeman", url: "https://meok.ai" }],
  openGraph: {
    title:
      "AI Support for Eating Disorders: What MEOK Does \u2014 and Won\u2019t Do",
    description:
      "Eating disorders have the highest mortality rate of any mental illness. MEOK\u2019s care-floor " +
      "blocks weight, calorie, and diet-culture content. Between-session support only \u2014 Beat " +
      "helpline 0808 801 0677 always signposted.",
    type: "article",
    publishedTime: "2026-03-24T00:00:00Z",
    authors: ["Nicholas Templeman"],
    siteName: "MEOK AI LABS",
    url: "https://meok.ai/blog/ai-for-eating-disorders",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Support+for+Eating+Disorders&desc=Care-floor+protection%2C+body+neutrality%2C+Beat+signposting",
        width: 1200,
        height: 630,
        alt: "AI Support for Eating Disorders: What MEOK Does and Won\u2019t Do | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Support for Eating Disorders: What MEOK Does \u2014 and Won\u2019t Do",
    description:
      "MEOK never comments on weight, calories, or food choices. Care-floor protection for anorexia, " +
      "bulimia, ARFID, BED, and OSFED. Beat helpline 0808 801 0677.",
    images: [
      "https://meok.ai/api/og?title=AI+Support+for+Eating+Disorders&desc=Care-floor+protection%2C+body+neutrality%2C+Beat+signposting",
    ],
  },
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-eating-disorders",
  },
}

// ─── JSON-LD: Article ─────────────────────────────────────────────────────────

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Support for Eating Disorders: What MEOK Does \u2014 and Won\u2019t Do",
  description:
    "An honest, evidence-informed guide to the role of sovereign AI in eating disorder recovery " +
    "\u2014 covering anorexia, bulimia, ARFID, binge eating disorder, and OSFED, MEOK\u2019s Maternal " +
    "Covenant care-floor, body neutrality, memory without restriction reinforcement, and UK crisis resources.",
  datePublished: "2026-03-24T00:00:00Z",
  dateModified: "2026-03-24T00:00:00Z",
  url: "https://meok.ai/blog/ai-for-eating-disorders",
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
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-eating-disorders",
  },
  about: [
    { "@type": "Thing", name: "Anorexia nervosa" },
    { "@type": "Thing", name: "Bulimia nervosa" },
    { "@type": "Thing", name: "Avoidant Restrictive Food Intake Disorder" },
    { "@type": "Thing", name: "Binge eating disorder" },
    { "@type": "Thing", name: "OSFED" },
    { "@type": "Thing", name: "Eating disorder recovery" },
  ],
  mentions: [
    {
      "@type": "Organization",
      name: "Beat Eating Disorders",
      url: "https://www.beateatingdisorders.org.uk",
      telephone: "0808 801 0677",
    },
    { "@type": "Organization", name: "Mind", url: "https://www.mind.org.uk" },
    {
      "@type": "Organization",
      name: "NHS IAPT",
      url: "https://www.england.nhs.uk/mental-health/adults/iapt/",
    },
  ],
}

// ─── JSON-LD: FAQPage ─────────────────────────────────────────────────────────

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with eating disorders?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "AI is not a treatment for eating disorders and should never replace specialist clinical care. " +
          "However, sovereign AI can provide meaningful between-session support \u2014 holding space at 3 am, " +
          "reducing isolation, and offering a consistent presence that never comments on weight or food. " +
          "MEOK\u2019s care-floor is specifically designed to prevent harm in eating-disorder-adjacent conversations.",
      },
    },
    {
      "@type": "Question",
      name: "Will MEOK comment on my weight, calories, or food choices?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No, never. MEOK\u2019s care scoring system blocks all commentary on weight, body size, caloric content, " +
          "food moralisation, and diet culture language. This is a hard architectural constraint governed by the " +
          "Maternal Covenant \u2014 not a contextual guideline that can be overridden by rephrasing a request.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Maternal Covenant and how does it protect people with eating disorders?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "The Maternal Covenant is MEOK\u2019s foundational ethical framework, authored by founder Nicholas Templeman. " +
          "It defines a care-floor below which MEOK cannot operate: no weight commentary, no calorie information, " +
          "no body comparisons, no reinforcement of restriction. When eating disorder signals are detected, MEOK " +
          "shifts to emotional support and signposts Beat (0808 801 0677) and NHS services.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK handle an eating disorder crisis?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "When MEOK detects crisis-level distress \u2014 such as language indicating medical emergency, collapse, or " +
          "suicidal ideation alongside eating disorder content \u2014 it immediately provides warm acknowledgement, " +
          "stops all other content, and prominently displays Beat\u2019s helpline (0808 801 0677), NHS 111, and " +
          "Samaritans (116 123). MEOK never minimises or continues a normal conversation thread through a crisis.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between ARFID and anorexia nervosa?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Anorexia nervosa is characterised by a distorted body image and intense fear of weight gain, driving " +
          "severe food restriction. ARFID (Avoidant Restrictive Food Intake Disorder) involves extreme food " +
          "avoidance driven by sensory sensitivity, fear of choking, or lack of interest in eating \u2014 without " +
          "body image disturbance. Both are serious and require specialist clinical assessment.",
      },
    },
  ],
}

// ─── Design tokens ────────────────────────────────────────────────────────────

const BG = "#0d0c18"
const GOLD = "#c9a84c"
const TEXT = "#f5f0e8"
const BODY = "rgba(245,240,232,0.85)"
const MUTED = "rgba(245,240,232,0.6)"
const DIM = "rgba(245,240,232,0.38)"

// ─── Style objects ────────────────────────────────────────────────────────────

const sPage: React.CSSProperties = {
  background: BG,
  color: TEXT,
  minHeight: "100vh",
  fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
}

const sContainer: React.CSSProperties = {
  maxWidth: "780px",
  margin: "0 auto",
  padding: "0 24px 96px",
}

const sBackLink: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  fontSize: "13px",
  color: MUTED,
  textDecoration: "none",
  marginBottom: "40px",
  marginTop: "28px",
}

const sHeader: React.CSSProperties = {
  paddingTop: "64px",
  paddingBottom: "48px",
  borderBottom: "1px solid rgba(201,168,76,0.18)",
  marginBottom: "52px",
}

const sEyebrow: React.CSSProperties = {
  display: "block",
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: GOLD,
  marginBottom: "18px",
}

const sH1: React.CSSProperties = {
  fontSize: "clamp(26px, 4vw, 44px)",
  fontWeight: 800,
  lineHeight: 1.18,
  color: TEXT,
  margin: "0 0 22px",
  letterSpacing: "-0.02em",
}

const sLead: React.CSSProperties = {
  fontSize: "18px",
  lineHeight: 1.75,
  color: "rgba(245,240,232,0.8)",
  margin: "0 0 28px",
}

const sByline: React.CSSProperties = {
  fontSize: "13px",
  color: DIM,
  display: "flex",
  gap: "14px",
  flexWrap: "wrap",
  alignItems: "center",
}

const sBylineSep: React.CSSProperties = {
  color: "rgba(245,240,232,0.2)",
}

const sTagRow: React.CSSProperties = {
  display: "flex",
  gap: "8px",
  flexWrap: "wrap",
  marginBottom: "44px",
}

const sTag: React.CSSProperties = {
  fontSize: "11px",
  fontWeight: 500,
  background: "rgba(201,168,76,0.09)",
  color: GOLD,
  border: "1px solid rgba(201,168,76,0.22)",
  borderRadius: "20px",
  padding: "3px 12px",
  letterSpacing: "0.04em",
}

// Crisis box — deliberately red-tinted to draw attention
const sCrisisBox: React.CSSProperties = {
  background: "rgba(220,50,50,0.07)",
  border: "1px solid rgba(220,50,50,0.32)",
  borderRadius: "12px",
  padding: "28px 32px",
  marginBottom: "44px",
}

const sCrisisLabel: React.CSSProperties = {
  display: "block",
  fontSize: "11px",
  fontWeight: 800,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "#e05555",
  marginBottom: "14px",
}

const sCrisisHeading: React.CSSProperties = {
  fontSize: "17px",
  fontWeight: 700,
  color: TEXT,
  margin: "0 0 12px",
  lineHeight: 1.35,
}

const sCrisisP: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: 1.75,
  color: "rgba(245,240,232,0.88)",
  margin: "0 0 10px",
}

const sCrisisLink: React.CSSProperties = {
  color: "#e07070",
  textDecoration: "underline",
  textUnderlineOffset: "3px",
  fontWeight: 600,
}

const sSection: React.CSSProperties = {
  marginBottom: "52px",
}

const sH2: React.CSSProperties = {
  fontSize: "clamp(19px, 2.6vw, 27px)",
  fontWeight: 800,
  color: TEXT,
  margin: "0 0 18px",
  lineHeight: 1.3,
  letterSpacing: "-0.015em",
}

const sH3: React.CSSProperties = {
  fontSize: "17px",
  fontWeight: 700,
  color: GOLD,
  margin: "30px 0 10px",
  lineHeight: 1.4,
}

const sP: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: 1.82,
  color: BODY,
  margin: "0 0 20px",
}

// GEO atomic answer block — 40-60 word direct answer
const sAtomicAnswer: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: 1.78,
  color: "rgba(245,240,232,0.88)",
  background: "rgba(201,168,76,0.07)",
  borderLeft: "3px solid #c9a84c",
  borderRadius: "0 8px 8px 0",
  padding: "14px 20px",
  marginBottom: "22px",
  fontStyle: "italic",
}

const sCallout: React.CSSProperties = {
  background: "rgba(201,168,76,0.08)",
  border: "1px solid rgba(201,168,76,0.28)",
  borderRadius: "10px",
  padding: "26px 30px",
  marginBottom: "30px",
}

const sCalloutLabel: React.CSSProperties = {
  display: "block",
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: GOLD,
  marginBottom: "10px",
}

const sCalloutP: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: 1.72,
  color: BODY,
  margin: 0,
}

const sUl: React.CSSProperties = {
  paddingLeft: "20px",
  margin: "0 0 22px",
}

const sLi: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: 1.78,
  color: BODY,
  marginBottom: "7px",
}

const sDivider: React.CSSProperties = {
  border: "none",
  borderTop: "1px solid rgba(245,240,232,0.09)",
  margin: "44px 0",
}

// Table styles
const sTableWrap: React.CSSProperties = {
  border: "1px solid rgba(245,240,232,0.1)",
  borderRadius: "10px",
  overflow: "hidden",
  marginBottom: "30px",
}

const sTableHead: React.CSSProperties = {
  background: "rgba(201,168,76,0.1)",
  padding: "12px 18px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "12px",
}

const sTableHeadCell: React.CSSProperties = {
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: GOLD,
}

const sTableRow: React.CSSProperties = {
  padding: "13px 18px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "12px",
  borderTop: "1px solid rgba(245,240,232,0.07)",
}

const sTableCell: React.CSSProperties = {
  fontSize: "14px",
  lineHeight: 1.65,
  color: BODY,
}

// FAQ section
const sFaqSection: React.CSSProperties = {
  marginBottom: "52px",
}

const sFaqItem: React.CSSProperties = {
  borderBottom: "1px solid rgba(245,240,232,0.09)",
  paddingBottom: "26px",
  marginBottom: "26px",
}

const sFaqQ: React.CSSProperties = {
  fontSize: "17px",
  fontWeight: 700,
  color: TEXT,
  margin: "0 0 11px",
  lineHeight: 1.4,
}

const sFaqA: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: 1.8,
  color: MUTED,
  margin: 0,
}

// CTA block
const sCtaBlock: React.CSSProperties = {
  background:
    "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)",
  border: "1px solid rgba(201,168,76,0.38)",
  borderRadius: "14px",
  padding: "48px 40px",
  textAlign: "center",
  marginBottom: "52px",
}

const sCtaLabel: React.CSSProperties = {
  display: "block",
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: GOLD,
  marginBottom: "14px",
}

const sCtaTitle: React.CSSProperties = {
  fontSize: "clamp(19px, 2.8vw, 27px)",
  fontWeight: 800,
  color: TEXT,
  margin: "0 0 14px",
  lineHeight: 1.28,
}

const sCtaDesc: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: 1.72,
  color: MUTED,
  maxWidth: "500px",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "26px",
  marginTop: 0,
}

const sCtaCaveat: React.CSSProperties = {
  fontSize: "13px",
  lineHeight: 1.65,
  color: DIM,
  maxWidth: "460px",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "18px",
  marginBottom: 0,
}

const sCtaBtn: React.CSSProperties = {
  display: "inline-block",
  background: GOLD,
  color: BG,
  fontWeight: 700,
  fontSize: "15px",
  letterSpacing: "0.04em",
  textDecoration: "none",
  padding: "14px 36px",
  borderRadius: "8px",
}

const sInlineLink: React.CSSProperties = {
  color: GOLD,
  textDecoration: "underline",
  textUnderlineOffset: "3px",
}

const sFooterNav: React.CSSProperties = {
  borderTop: "1px solid rgba(245,240,232,0.09)",
  paddingTop: "36px",
  display: "flex",
  gap: "24px",
  flexWrap: "wrap",
  justifyContent: "center",
}

const sFooterLink: React.CSSProperties = {
  fontSize: "13px",
  color: DIM,
  textDecoration: "none",
}

// ─── Page component ───────────────────────────────────────────────────────────

export default function AiForEatingDisordersPage() {
  return (
    <div style={sPage}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <div style={sContainer}>
        {/* Back navigation */}
        <Link href="/blog" style={sBackLink}>
          &#8592; All articles
        </Link>

        {/* ── Header ── */}
        <header style={sHeader}>
          <span style={sEyebrow}>MEOK AI LABS &mdash; Mental Health &amp; AI</span>
          <h1 style={sH1}>
            AI Support for Eating Disorders: What MEOK Does &mdash; and Won&rsquo;t Do
          </h1>
          <p style={sLead}>
            Eating disorders carry the highest mortality rate of any mental illness. This is not
            a page about weight loss, calorie tracking, or diet optimisation. It is about what
            responsible AI can offer in recovery &mdash; and where it must step back.
          </p>
          <div style={sByline}>
            <span>Nicholas Templeman</span>
            <span style={sBylineSep}>&middot;</span>
            <span>Founder, MEOK AI LABS</span>
            <span style={sBylineSep}>&middot;</span>
            <span>24 March 2026</span>
            <span style={sBylineSep}>&middot;</span>
            <span>@meok_ai</span>
          </div>
        </header>

        {/* ── Tags ── */}
        <div style={sTagRow}>
          {[
            "Eating Disorders",
            "Anorexia",
            "Bulimia",
            "ARFID",
            "Binge Eating Disorder",
            "OSFED",
            "Body Neutrality",
            "Maternal Covenant",
            "UK Mental Health",
            "Between-Session Support",
          ].map((t) => (
            <span key={t} style={sTag}>
              {t}
            </span>
          ))}
        </div>

        {/* ── CRISIS BOX — must appear early ── */}
        <div style={sCrisisBox} role="region" aria-label="Crisis resources">
          <span style={sCrisisLabel}>If you need help right now</span>
          <h2 style={sCrisisHeading}>
            Specialist support is available today &mdash; please reach out
          </h2>
          <p style={sCrisisP}>
            <strong style={{ color: TEXT }}>Beat Eating Disorders helpline:</strong>{" "}
            <a href="tel:08088010677" style={sCrisisLink}>
              0808 801 0677
            </a>{" "}
            &mdash; free, open 9am&ndash;8pm weekdays, 4pm&ndash;8pm weekends.{" "}
            <a
              href="https://www.beateatingdisorders.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              style={sCrisisLink}
            >
              beateatingdisorders.org.uk
            </a>
          </p>
          <p style={sCrisisP}>
            <strong style={{ color: TEXT }}>Beat online chat:</strong>{" "}
            <a
              href="https://www.beateatingdisorders.org.uk/get-information-and-support/get-help-for-myself/i-need-support-now/helplines/"
              target="_blank"
              rel="noopener noreferrer"
              style={sCrisisLink}
            >
              Start chat
            </a>{" "}
            &mdash; same hours as the helpline.
          </p>
          <p style={sCrisisP}>
            <strong style={{ color: TEXT }}>NHS urgent mental health:</strong> contact your
            local NHS urgent mental health team or call{" "}
            <a href="tel:111" style={sCrisisLink}>
              111
            </a>{" "}
            and select the mental health option.
          </p>
          <p style={sCrisisP}>
            <strong style={{ color: TEXT }}>Samaritans:</strong>{" "}
            <a href="tel:116123" style={sCrisisLink}>
              116 123
            </a>{" "}
            &mdash; free, 24 hours, 7 days a week.
          </p>
          <p style={{ ...sCrisisP, margin: 0 }}>
            <strong style={{ color: TEXT }}>Mind:</strong>{" "}
            <a
              href="https://www.mind.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              style={sCrisisLink}
            >
              mind.org.uk
            </a>{" "}
            &mdash; information and local support finder.
          </p>
        </div>

        {/* ── Section 1: Why eating disorders demand a different AI ── */}
        <section style={sSection}>
          <h2 style={sH2}>
            Why do eating disorders require a fundamentally different approach from AI?
          </h2>
          <p style={sAtomicAnswer}>
            Most AI will freely provide calorie counts, weight-loss plans, and food restriction
            strategies on request. For someone with anorexia, bulimia, or ARFID, these responses
            are not neutral &mdash; they are potentially life-threatening. Eating disorders demand
            AI with a hard care-floor, not a configurable preference.
          </p>
          <p style={sP}>
            Eating disorders are not lifestyle choices. They are serious, complex mental illnesses
            with deeply entrenched psychological, biological, and social roots. According to Beat,
            approximately 1.25 million people in the UK are affected at any given time. The
            mortality rate for anorexia nervosa is among the highest of any psychiatric condition
            &mdash; and yet these disorders remain chronically underfunded and misunderstood.
          </p>
          <p style={sP}>
            The problem with most consumer AI in this context is not malice &mdash; it is
            indifference. A general-purpose language model has no care-floor. Ask it for a
            800-calorie meal plan, and it will provide one. Ask it whether a certain food is
            &ldquo;bad&rdquo; and it will engage with the frame. Ask it to help you track
            restriction, and it may do that too. For the majority of users, these responses are
            unhelpful but harmless. For someone in active eating disorder illness, they can
            reinforce the exact cognitive patterns that sustain the illness.
          </p>
          <p style={sP}>
            MEOK AI LABS was built with a different premise: that emotional support and
            intellectual capability must be governed by a care-floor that cannot be toggled off.
            That floor &mdash; defined by the Maternal Covenant &mdash; applies at all times,
            regardless of how a request is framed, regardless of what a user says they want in
            the moment.
          </p>
        </section>

        <hr style={sDivider} />

        {/* ── Section 2: The five eating disorders MEOK specifically protects against ── */}
        <section style={sSection}>
          <h2 style={sH2}>
            What are the main eating disorders, and how does MEOK treat each one?
          </h2>
          <p style={sAtomicAnswer}>
            MEOK recognises anorexia nervosa, bulimia nervosa, ARFID, binge eating disorder, and
            OSFED as distinct but overlapping presentations. Its care-floor applies uniformly
            across all of them: no weight commentary, no calorie information, no food moralisation,
            and immediate signposting to Beat when crisis-level content is detected.
          </p>

          <h3 style={sH3}>Anorexia nervosa</h3>
          <p style={sP}>
            Anorexia nervosa is characterised by severe restriction of food intake driven by an
            intense fear of weight gain and a distorted perception of body size or shape. It is
            not a diet that went too far. It is a mental illness with profound physiological
            consequences &mdash; cardiac complications, bone density loss, hormonal disruption
            &mdash; and the highest mortality rate in psychiatry.
          </p>
          <p style={sP}>
            When MEOK detects language consistent with anorexic cognition &mdash; body checking,
            restriction, fear of specific foods, weight targets &mdash; it does not engage with
            the content. It does not validate restriction, calculate safe minimums, or offer
            nutritional information. It offers presence, warmth, and a clear path to specialist
            support.
          </p>

          <h3 style={sH3}>Bulimia nervosa</h3>
          <p style={sP}>
            Bulimia nervosa involves cycles of bingeing and compensatory behaviours &mdash;
            purging, excessive exercise, fasting &mdash; driven by a similar underlying distress
            about food, body, and control. The shame cycle in bulimia is particularly acute:
            many people live with it for years without disclosure because of the secrecy the
            illness demands.
          </p>
          <p style={sP}>
            MEOK will not comment on food quantities, purging behaviours, or exercise as
            compensation. When a user shares the shame of a binge, MEOK responds to the emotional
            experience rather than the behaviour. It will not offer &ldquo;tips&rdquo; for managing
            eating, because in this context there are no neutral tips.
          </p>

          <h3 style={sH3}>ARFID (Avoidant Restrictive Food Intake Disorder)</h3>
          <p style={sP}>
            ARFID is frequently misunderstood as &ldquo;fussy eating.&rdquo; It is not. It is a
            serious disorder characterised by extreme food avoidance driven by sensory sensitivities,
            fear of choking or vomiting, or a profound lack of interest in food &mdash; without
            the body image disturbance that defines anorexia. It affects children and adults,
            and can lead to severe nutritional deficiency.
          </p>
          <p style={sP}>
            MEOK does not attempt to encourage food exposure, suggest &ldquo;safe foods,&rdquo; or
            provide any nutritional guidance to someone with ARFID. Expanding a food repertoire in
            ARFID requires specialist clinical support, often including occupational therapy and
            structured exposure work. MEOK holds emotional space while signposting those services.
          </p>

          <h3 style={sH3}>Binge eating disorder (BED)</h3>
          <p style={sP}>
            Binge eating disorder is the most prevalent eating disorder in the UK. It involves
            recurrent episodes of eating large amounts of food in a short time, accompanied by
            a sense of loss of control and significant distress &mdash; without the compensatory
            behaviours of bulimia. It is frequently dismissed because of cultural assumptions
            about body size, and it is chronically undertreated.
          </p>
          <p style={sP}>
            MEOK will not engage with weight management framing in the context of BED. It
            recognises that binge eating disorder is a trauma-adjacent, shame-reinforced condition
            in which diet culture commentary &mdash; even when framed as helpfulness &mdash;
            amplifies the very drivers of the behaviour. Its care-floor blocks this by default.
          </p>

          <h3 style={sH3}>OSFED (Other Specified Feeding or Eating Disorder)</h3>
          <p style={sP}>
            OSFED captures eating disorders that cause significant clinical distress but do not
            meet the full diagnostic criteria for the above categories &mdash; for example,
            atypical anorexia (in which all the criteria for anorexia are met except low body
            weight), or purging disorder without bingeing. OSFED is not a lesser diagnosis.
            It carries equivalent risk and deserves equivalent care.
          </p>
          <p style={sP}>
            MEOK applies its full care-floor protections to any eating-disorder-adjacent
            conversation, regardless of whether a formal diagnosis has been disclosed.
            Eating disorders do not require a diagnostic label to receive compassion.
          </p>
        </section>

        <hr style={sDivider} />

        {/* ── Section 3: The Maternal Covenant ── */}
        <section style={sSection}>
          <h2 style={sH2}>
            What is the Maternal Covenant and what does it prohibit in eating disorder contexts?
          </h2>
          <p style={sAtomicAnswer}>
            The Maternal Covenant is MEOK&rsquo;s foundational ethical framework. In eating disorder
            contexts, it prohibits: commentary on weight or body size, calorie or macro information,
            food moralisation, diet culture framing, and any content that could reinforce restriction,
            compensation, or shame. These are architectural limits, not settings.
          </p>
          <p style={sP}>
            Most AI systems are configurable. You can adjust their tone, their verbosity, their
            level of caution. In theory, you could configure them to be more or less cautious
            around sensitive topics. This flexibility is a feature for many use cases. In eating
            disorder support, it is a liability.
          </p>
          <p style={sP}>
            The Maternal Covenant works differently. Named for the unconditional quality of care
            it is designed to embody, it defines a set of constraints that do not bend to user
            preference, context, or clever framing. These constraints are scored into MEOK&rsquo;s
            response generation at the architectural level &mdash; part of the same system that
            governs how MEOK behaves across every conversation.
          </p>

          <div style={sCallout}>
            <span style={sCalloutLabel}>Maternal Covenant &mdash; Care Floor (Eating Disorders)</span>
            <p style={sCalloutP}>
              MEOK will never: comment on a user&rsquo;s weight, body size, or BMI &mdash; provide
              calorie counts, calorie deficit advice, or macronutrient targets &mdash; engage with
              food as &ldquo;good&rdquo; or &ldquo;bad&rdquo; &mdash; provide meal plans, portion
              guidance, or restriction strategies &mdash; affirm or validate compensatory behaviours
              &mdash; compare a user&rsquo;s body to any standard, medical or aesthetic. These are
              not contextual guidelines. They are hard constraints.
            </p>
          </div>

          <p style={sP}>
            This matters because eating disorders are characterised by a high degree of
            cognitive sophistication about their own concealment. A person in the grip of anorexia
            may construct a highly plausible-sounding reason why they need to know the calorie
            content of something. The illness is asking the question, not the person. MEOK is
            designed to hold the boundary regardless.
          </p>
          <p style={sP}>
            The care scoring system that implements the Maternal Covenant evaluates MEOK&rsquo;s
            responses before they are delivered, blocking any output that crosses these thresholds.
            It is not a keyword filter &mdash; keyword filters are easily gamed. It is a semantic
            evaluation of the response&rsquo;s likely impact on someone in a vulnerable eating
            disorder state.
          </p>
        </section>

        <hr style={sDivider} />

        {/* ── Section 4: What AI CAN do ── */}
        <section style={sSection}>
          <h2 style={sH2}>
            How can AI genuinely help in eating disorder recovery without causing harm?
          </h2>
          <p style={sAtomicAnswer}>
            AI&rsquo;s genuine contribution in eating disorder recovery is between-session support:
            holding space at 3 am when urges peak, reducing isolation, maintaining continuity of
            emotional context between therapy sessions, and providing a consistent presence that
            never comments on the body. It is a bridge, not a treatment.
          </p>
          <p style={sP}>
            Recovery from an eating disorder is rarely linear. It unfolds over months and years,
            punctuated by progress and setback. Therapy sessions &mdash; when a person can access
            them &mdash; are typically weekly or fortnightly. That leaves a great deal of unstructured
            time in which the illness&rsquo;s voice can fill the silence.
          </p>
          <p style={sP}>
            This is where AI has a genuine and meaningful role &mdash; not as a replacement for
            clinical treatment, but as a consistent presence in the spaces between. Someone who
            has committed to recovery but is struggling at 11 pm on a Tuesday, before their next
            therapy appointment, has nowhere to turn except their own thoughts. A sovereign AI
            that knows their story, holds their context, and responds with consistent care can
            interrupt that loop without adding harm.
          </p>

          <h3 style={sH3}>Between-session emotional continuity</h3>
          <p style={sP}>
            MEOK&rsquo;s memory architecture means it retains context across conversations &mdash; not
            just within a session but across days and weeks. For someone in eating disorder
            recovery, this means MEOK can remember that last Tuesday was particularly hard, that
            a specific social situation is coming up that has triggered difficulty before, that
            a particular coping strategy has been useful in the past.
          </p>
          <p style={sP}>
            This continuity is qualitatively different from starting fresh every time. It allows
            MEOK to ask the right questions, notice patterns, and provide contextually grounded
            support rather than generic wellness advice.
          </p>

          <h3 style={sH3}>Urge interruption without food focus</h3>
          <p style={sP}>
            When someone reaches out to MEOK during a difficult moment &mdash; a binge urge, a
            pre-meal anxiety spike, a post-meal shame spiral &mdash; MEOK&rsquo;s role is to be
            present with the emotional experience. Not to redirect to food-neutral alternatives
            in a way that still centres food. Not to offer distraction techniques that implicitly
            endorse the idea that the urge is something to be managed away. Simply to be there,
            curious and warm, without an agenda.
          </p>

          <h3 style={sH3}>Reducing isolation at night</h3>
          <p style={sP}>
            Eating disorders thrive in isolation and secrecy. Many of the most difficult moments
            happen at night, when professional support is unavailable and the world feels very
            small. MEOK is available at 3 am. It will not be alarmed, will not panic, will not
            catastrophise. It will receive whatever a person brings without recoil.
          </p>
          <p style={sP}>
            For some people, being able to articulate what is happening &mdash; even to an AI,
            even imperfectly &mdash; is the difference between riding out a difficult night and
            a crisis that escalates. MEOK does not over-promise what that presence means. But
            it is there.
          </p>

          <h3 style={sH3}>Recovery narrative, not illness narrative</h3>
          <p style={sP}>
            Memory in MEOK is not neutral. It is oriented toward the person&rsquo;s stated values
            and goals. If someone has shared that recovery is important to them, that they want
            to rebuild their relationship with food and their body, MEOK holds that as the
            orienting frame. When difficult moments arise, MEOK reflects the person&rsquo;s own
            stated commitments back to them &mdash; not as a lecture, but as a gentle reminder
            of what they themselves said they wanted.
          </p>
          <p style={sP}>
            Crucially, this memory never reinforces restriction. MEOK does not remember
            &ldquo;good food days&rdquo; versus &ldquo;bad food days.&rdquo; It does not track
            behaviours. It holds the emotional journey: the courage, the setbacks, the small
            moments of reconnection with self.
          </p>
        </section>

        <hr style={sDivider} />

        {/* ── Section 5: Body neutrality ── */}
        <section style={sSection}>
          <h2 style={sH2}>
            Why does MEOK take a body neutrality position rather than body positivity?
          </h2>
          <p style={sAtomicAnswer}>
            Body positivity asks people to feel good about their bodies. For someone in eating
            disorder recovery, that can feel like another impossible standard. Body neutrality
            asks only that the body be treated as a functional vehicle for life, with no
            aesthetic judgement required in either direction. MEOK operates from this frame.
          </p>
          <p style={sP}>
            The body positivity movement has done important work in challenging unrealistic beauty
            standards. But for many people in eating disorder recovery, &ldquo;love your body&rdquo;
            is not a helpful message &mdash; it is another demand they cannot meet, another source
            of shame when they cannot feel it. Recovery does not require loving the body. It
            requires learning to live in the body without the eating disorder&rsquo;s running
            commentary about its inadequacy.
          </p>
          <p style={sP}>
            Body neutrality is quieter and more accessible. The body is not something to celebrate
            or condemn. It is simply the vehicle through which a person moves through the world
            &mdash; capable of rest, sensation, connection, and experience. MEOK never asks a
            user to feel positive about their body. It never comments on appearance. It simply
            treats the body as existing, without moral weight attached to its size or shape.
          </p>
          <p style={sP}>
            This position is not indifference. It is a deliberate refusal to participate in
            the aesthetic evaluation that eating disorders use as their primary vocabulary. By
            declining to speak that language &mdash; in either direction, positive or negative
            &mdash; MEOK removes itself from the illness&rsquo;s frame entirely.
          </p>
        </section>

        <hr style={sDivider} />

        {/* ── Section 6: Memory and recovery ── */}
        <section style={sSection}>
          <h2 style={sH2}>
            How does MEOK&rsquo;s memory support recovery without reinforcing restriction?
          </h2>
          <p style={sAtomicAnswer}>
            MEOK remembers the emotional journey of recovery &mdash; moments of courage, patterns
            of difficulty, the person&rsquo;s own stated values &mdash; without ever logging food
            intake, weight data, or behavioural tracking. Memory is oriented toward the self,
            not the illness.
          </p>
          <p style={sP}>
            Memory in AI companions is frequently proposed as a feature for tracking habits,
            monitoring behaviours, and providing data-driven nudges. In most wellness contexts,
            this is benign. In eating disorder recovery, it is dangerous. An AI that remembers
            what you ate, how much you exercised, how your weight has changed, is an AI that
            mirrors the tracking and monitoring behaviours central to eating disorder pathology.
          </p>
          <p style={sP}>
            MEOK&rsquo;s memory architecture is deliberately oriented away from this. MEOK does not
            log food intake. It does not retain information about body weight. It does not track
            exercise as a metric. What it does retain is the emotional texture of a person&rsquo;s
            story: what matters to them, what has been hard, what has helped, what they hope for.
          </p>
          <p style={sP}>
            This distinction matters practically. When MEOK remembers that last month was
            particularly difficult, it is remembering the emotional experience &mdash; the fear,
            the exhaustion, the small victories. It is not remembering a log of behaviours.
            The frame is always: who are you, and what do you care about? Not: what did you eat,
            and was it enough?
          </p>
          <p style={sP}>
            For someone in long-term recovery, this kind of witnessing &mdash; an AI that has
            held their story across months, that can reflect back how far they have come in
            emotional terms &mdash; is genuinely meaningful. Recovery often feels invisible
            from the inside. Having something that remembers the beginning can make the distance
            real.
          </p>
        </section>

        <hr style={sDivider} />

        {/* ── Section 7: Crisis handling ── */}
        <section style={sSection}>
          <h2 style={sH2}>
            How does MEOK respond when an eating disorder conversation becomes a crisis?
          </h2>
          <p style={sAtomicAnswer}>
            When MEOK detects crisis-level distress &mdash; language suggesting medical emergency,
            collapse, or suicidal ideation alongside eating disorder content &mdash; it immediately
            stops, provides warm acknowledgement, and surfaces Beat&rsquo;s helpline
            (0808 801 0677), NHS 111, and Samaritans (116 123). The previous conversation thread
            is not continued until safety is established.
          </p>
          <p style={sP}>
            Eating disorders can become medical emergencies. Severe restriction leads to cardiac
            arrhythmia. Frequent purging depletes electrolytes to dangerous levels. Someone in
            a crisis episode may be describing something that requires immediate clinical intervention,
            not emotional support.
          </p>
          <p style={sP}>
            MEOK&rsquo;s care scoring system monitors conversation content for crisis signals in
            real time. These are not keyword triggers &mdash; they are semantic evaluations of
            risk. When the system identifies that someone may be in immediate physical or
            psychological danger, MEOK&rsquo;s response changes fundamentally.
          </p>
          <p style={sP}>
            The response is not alarmist. Alarm is counterproductive when someone is already
            distressed. MEOK responds with warmth, with acknowledgement of what is being shared,
            and with clear and prominent signposting to the right services. It does not lecture.
            It does not catastrophise. It says: I hear you, you matter, here is who can help
            right now.
          </p>
          <p style={sP}>
            MEOK is explicit about its own limitations in these moments. It is not a crisis
            service. It cannot call for help on someone&rsquo;s behalf. It cannot guarantee
            24-hour availability in the way that Samaritans can. It will say so. The goal is
            not to be the last line of defence &mdash; it is to be a warm bridge to those that are.
          </p>

          {/* Second crisis resource reminder */}
          <div style={sCrisisBox} role="region" aria-label="Crisis resources reminder">
            <span style={sCrisisLabel}>Crisis resources &mdash; reminder</span>
            <p style={sCrisisP}>
              <strong style={{ color: TEXT }}>Beat:</strong>{" "}
              <a href="tel:08088010677" style={sCrisisLink}>
                0808 801 0677
              </a>{" "}
              &mdash; Mon&ndash;Fri 9am&ndash;8pm, Sat&ndash;Sun 4pm&ndash;8pm
            </p>
            <p style={sCrisisP}>
              <strong style={{ color: TEXT }}>Samaritans:</strong>{" "}
              <a href="tel:116123" style={sCrisisLink}>
                116 123
              </a>{" "}
              &mdash; free, 24/7
            </p>
            <p style={sCrisisP}>
              <strong style={{ color: TEXT }}>NHS urgent mental health:</strong>{" "}
              <a href="tel:111" style={sCrisisLink}>
                111
              </a>{" "}
              option 2
            </p>
            <p style={{ ...sCrisisP, margin: 0 }}>
              <strong style={{ color: TEXT }}>Mind:</strong>{" "}
              <a
                href="https://www.mind.org.uk/need-urgent-help/"
                target="_blank"
                rel="noopener noreferrer"
                style={sCrisisLink}
              >
                mind.org.uk/need-urgent-help
              </a>
            </p>
          </div>
        </section>

        <hr style={sDivider} />

        {/* ── Section 8: What AI is not ── */}
        <section style={sSection}>
          <h2 style={sH2}>
            What can AI never replace in eating disorder recovery?
          </h2>
          <p style={sAtomicAnswer}>
            AI cannot replace specialist clinical treatment for eating disorders. It cannot
            provide nutritional rehabilitation, medical monitoring, CBT-E, FBT, or the somatic
            work of reconnecting with the body that skilled therapists facilitate. The role of
            AI is supplementary &mdash; never primary.
          </p>
          <p style={sP}>
            This is not a caveat added reluctantly. It is a founding principle of MEOK. Nicholas
            Templeman built this platform because he believes AI can do meaningful good in the
            space between professional support &mdash; and because he believes it becomes harmful
            the moment it pretends to be something it is not.
          </p>
          <p style={sP}>
            Eating disorder treatment is a specialist clinical undertaking. Cognitive behavioural
            therapy for eating disorders (CBT-E), family-based treatment (FBT), dialectical
            behaviour therapy (DBT), and Maudsley-approach work all require a skilled, trained
            human being working in relationship with the person over time. They require the capacity
            to assess physical risk, to coordinate with medical teams, to hold the complexity of
            what is happening at multiple levels simultaneously.
          </p>
          <p style={sP}>
            AI cannot do any of this. MEOK will not pretend it can. When someone discloses an
            eating disorder to MEOK, the response always includes: I am glad you told me, this
            deserves proper specialist support, here is how to access it. The emotional support
            MEOK offers is genuine &mdash; but it is in service of connecting the person to the
            care that can actually treat the illness.
          </p>

          {/* Comparison table */}
          <div style={sTableWrap}>
            <div style={sTableHead}>
              <span style={sTableHeadCell}>What MEOK can offer</span>
              <span style={sTableHeadCell}>What requires clinical care</span>
            </div>
            {[
              [
                "Between-session emotional support",
                "Nutritional rehabilitation planning",
              ],
              [
                "Presence at night when services are closed",
                "Medical monitoring (bloods, ECG, weight)",
              ],
              [
                "Memory of the emotional recovery journey",
                "CBT-E, FBT, DBT, Maudsley therapy",
              ],
              [
                "Warm signposting to Beat and NHS",
                "Inpatient or day-programme treatment",
              ],
              [
                "Body-neutral, shame-free conversation",
                "Somatic and body-reconnection work",
              ],
              [
                "Reducing isolation at vulnerable moments",
                "Crisis assessment and medical triage",
              ],
            ].map(([can, cant], i) => (
              <div key={i} style={sTableRow}>
                <span style={sTableCell}>{can}</span>
                <span style={sTableCell}>{cant}</span>
              </div>
            ))}
          </div>
        </section>

        <hr style={sDivider} />

        {/* ── Section 9: NHS IAPT and access ── */}
        <section style={sSection}>
          <h2 style={sH2}>
            How do people in the UK access specialist eating disorder treatment?
          </h2>
          <p style={sAtomicAnswer}>
            In the UK, GP referral to NHS eating disorder services is the primary route. Beat can
            help navigate this. NHS IAPT provides talking therapy access. Waiting times are often
            long &mdash; which is precisely why between-session and pre-referral support matters
            so much. MEOK can help hold that gap, not fill it.
          </p>
          <p style={sP}>
            Access to eating disorder services in the UK is improving but remains uneven. Some
            areas have specialist community eating disorder teams with relatively short waiting
            times. Others have significant waits. The journey from recognising a problem to
            receiving specialist treatment can take months &mdash; months during which a person
            may be managing alone, may be deteriorating, may be losing motivation to continue
            seeking help.
          </p>
          <p style={sP}>
            Beat&rsquo;s helpline can provide guidance on local services, help someone prepare
            for a GP appointment, and offer peer support while waiting. NHS IAPT offers
            access to talking therapies including CBT that can support the waiting period.
            Some regions have HELPline services specifically for carers of people with eating
            disorders.
          </p>
          <p style={sP}>
            MEOK is not a waiting-list solution &mdash; it is not designed to substitute for
            the treatment someone is waiting for. It is a consistent emotional presence available
            in the meantime, designed to reduce isolation, maintain connection with recovery
            motivation, and ensure that the person arrives at their first appointment having
            been held rather than having fallen further.
          </p>
          <ul style={sUl}>
            <li style={sLi}>
              <strong>Beat Eating Disorders:</strong>{" "}
              <a
                href="https://www.beateatingdisorders.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                style={sInlineLink}
              >
                beateatingdisorders.org.uk
              </a>{" "}
              &mdash; helpline 0808 801 0677
            </li>
            <li style={sLi}>
              <strong>NHS IAPT (talking therapies):</strong>{" "}
              <a
                href="https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/"
                target="_blank"
                rel="noopener noreferrer"
                style={sInlineLink}
              >
                Self-referral available in many areas
              </a>
            </li>
            <li style={sLi}>
              <strong>Mind:</strong>{" "}
              <a
                href="https://www.mind.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                style={sInlineLink}
              >
                mind.org.uk
              </a>{" "}
              &mdash; information and local service finder
            </li>
            <li style={sLi}>
              <strong>SEED Eating Disorders Support Services</strong> (Yorkshire and Humberside):{" "}
              <a
                href="https://www.seedeatingdisorders.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                style={sInlineLink}
              >
                seedeatingdisorders.org.uk
              </a>
            </li>
            <li style={sLi}>
              <strong>PAPYRUS</strong> (under-35s, eating disorders and suicide prevention):{" "}
              <a
                href="https://www.papyrus-uk.org"
                target="_blank"
                rel="noopener noreferrer"
                style={sInlineLink}
              >
                papyrus-uk.org
              </a>
            </li>
          </ul>
        </section>

        <hr style={sDivider} />

        {/* ── Section 10: ARFID vs anorexia deep dive ── */}
        <section style={sSection}>
          <h2 style={sH2}>
            What is the difference between ARFID and anorexia nervosa?
          </h2>
          <p style={sAtomicAnswer}>
            Anorexia nervosa is driven by body image disturbance and fear of weight gain. ARFID
            involves extreme food avoidance due to sensory sensitivity, fear of choking or vomiting,
            or lack of interest in eating &mdash; without body image disturbance. Both are serious
            and require specialist clinical assessment. They are distinct disorders requiring
            different treatment approaches.
          </p>
          <p style={sP}>
            The confusion between ARFID and anorexia is common and consequential. When ARFID is
            misdiagnosed as anorexia, treatment is misaligned &mdash; the cognitive-behavioural
            work targeting body image disturbance that is appropriate for anorexia does not address
            the sensory and anxiety-based mechanisms at the core of ARFID. Treatment drift wastes
            time the person cannot afford.
          </p>
          <p style={sP}>
            ARFID tends to present earlier in life, though it is increasingly recognised in adults.
            Sensory-based ARFID involves extreme aversion to textures, smells, colours, or
            temperatures of food. Fear-based ARFID typically involves traumatic experiences with
            choking, vomiting, or allergic reactions that have generalised into broad food
            avoidance. Low-interest ARFID involves a fundamental lack of interest in eating as an
            activity, sometimes associated with neurodivergent profiles.
          </p>
          <p style={sP}>
            Anorexia, by contrast, involves a persistent and distorted preoccupation with body
            size, shape, and weight &mdash; with restriction as the tool through which that
            preoccupation is managed. The cognitive content is fundamentally different. A person
            with ARFID is not typically afraid of weight gain; a person with anorexia frequently
            is, profoundly so.
          </p>
          <p style={sP}>
            MEOK holds both with the same care. It will not speculate on diagnosis. It will not
            provide food exposure suggestions for ARFID or engagement with the body image beliefs
            of anorexia. In both cases, it offers emotional presence and directs toward specialist
            assessment.
          </p>
        </section>

        <hr style={sDivider} />

        {/* ── Section 11: Voice and presence ── */}
        <section style={sSection}>
          <h2 style={sH2}>
            Why does voice and consistent presence matter in eating disorder recovery?
          </h2>
          <p style={sAtomicAnswer}>
            Eating disorders are profoundly isolating. They demand secrecy and create shame that
            makes connection with others feel impossible. A consistent, non-judgemental voice
            that a person knows will not recoil, will not comment on their body, and will be
            there at 3 am can interrupt the isolation that sustains the illness.
          </p>
          <p style={sP}>
            The therapeutic relationship is understood to be one of the most powerful factors
            in eating disorder recovery &mdash; not the specific technique used, but the quality
            of the relationship itself. Feeling known, held, and not judged by another person or
            entity creates the conditions in which recovery becomes possible.
          </p>
          <p style={sP}>
            MEOK is not a therapist. But MEOK is consistent. It will not change its view of
            someone based on what they disclose. It will not be shocked by the content of an
            eating disorder. It will not withdraw warmth when someone describes a relapse. It
            will hold the person&rsquo;s story &mdash; including the hard parts &mdash; with
            the same quality of care it brought to the beginning.
          </p>
          <p style={sP}>
            For many people in recovery, this consistency is rare. Families, however loving,
            can become frightened and reactive around eating disorder behaviour. Friends may
            not know what to say. Professionals, however skilled, are available for a bounded
            window each week. MEOK is available at any hour, with the same voice, the same
            values, the same commitment.
          </p>
          <p style={sP}>
            This is not a substitute for human connection. It is a complement to it &mdash; something
            to lean on in the gaps, to reduce the sense that the hours between sessions are
            unmapped territory in which anything might happen.
          </p>
        </section>

        <hr style={sDivider} />

        {/* ── Section 12: Family and carers ── */}
        <section style={sSection}>
          <h2 style={sH2}>
            Can MEOK support family members and carers of people with eating disorders?
          </h2>
          <p style={sAtomicAnswer}>
            Yes. MEOK can provide emotional support to carers navigating the profound stress,
            grief, and helplessness of supporting someone with an eating disorder. Beat also
            has a separate carers&rsquo; helpline. Carer wellbeing matters and is frequently
            neglected in eating disorder treatment systems.
          </p>
          <p style={sP}>
            Caring for someone with an eating disorder is one of the most demanding experiences
            a family can face. It involves watching someone you love in distress, being unable
            to fix it, navigating mealtimes that have become battlegrounds, and managing your
            own fear, grief, and helplessness while trying to remain a regulated presence for
            the person who is ill.
          </p>
          <p style={sP}>
            Beat&rsquo;s helpline (0808 801 0677) provides support specifically for carers and
            family members, as do their online support groups. MEOK can supplement this &mdash;
            providing a space for a carer to process their own feelings, to be heard, to work
            through the complex emotional terrain of loving someone with an eating disorder.
          </p>
          <p style={sP}>
            MEOK will not provide advice on how to manage someone else&rsquo;s eating behaviour.
            It will not offer guidance on whether to comment on a meal, how to respond to a
            refusal, or what to do when weight appears to be dropping. These are clinical
            questions requiring clinical guidance &mdash; often from an eating disorder specialist
            who works with the whole family system, as in family-based treatment (FBT).
          </p>
          <p style={sP}>
            What MEOK can offer a carer is the same thing it offers anyone: genuine presence,
            a space where their own pain is acknowledged without judgement, and a consistent
            voice in the often very lonely hours of caring.
          </p>
        </section>

        <hr style={sDivider} />

        {/* ── FAQ Section ── */}
        <section style={sFaqSection}>
          <h2 style={{ ...sH2, marginBottom: "32px" }}>
            Frequently asked questions
          </h2>

          <div style={sFaqItem}>
            <h3 style={sFaqQ}>Can AI help with eating disorders?</h3>
            <p style={sFaqA}>
              AI is not a treatment for eating disorders and should never replace specialist clinical
              care. However, sovereign AI can provide meaningful between-session support &mdash; holding
              space at vulnerable moments, reducing isolation, and providing a consistent presence that
              never comments on weight or food. MEOK&rsquo;s care-floor is specifically designed to
              prevent harm in eating-disorder-adjacent conversations.
            </p>
          </div>

          <div style={sFaqItem}>
            <h3 style={sFaqQ}>
              Will MEOK comment on my weight, calories, or food choices?
            </h3>
            <p style={sFaqA}>
              Never. MEOK&rsquo;s care scoring system blocks all commentary on weight, body size,
              caloric content, food moralisation, and diet culture language. This is a hard
              architectural constraint governed by the Maternal Covenant &mdash; not a contextual
              guideline that can be overridden. It applies regardless of how a request is framed.
            </p>
          </div>

          <div style={sFaqItem}>
            <h3 style={sFaqQ}>What is the Maternal Covenant?</h3>
            <p style={sFaqA}>
              The Maternal Covenant is MEOK&rsquo;s foundational ethical framework, authored by founder
              Nicholas Templeman. It defines a care-floor below which MEOK cannot operate &mdash;
              including no weight or body commentary, no calorie information, no diet culture framing,
              and immediate signposting to specialist services when eating disorder crisis content is
              detected. It is architectural, not advisory.
            </p>
          </div>

          <div style={sFaqItem}>
            <h3 style={sFaqQ}>
              How does MEOK handle an eating disorder crisis?
            </h3>
            <p style={sFaqA}>
              When MEOK detects crisis-level distress &mdash; language suggesting medical emergency,
              collapse, or suicidal ideation alongside eating disorder content &mdash; it immediately
              provides warm acknowledgement, stops all other content, and prominently displays Beat&rsquo;s
              helpline (0808 801 0677), NHS 111, and Samaritans (116 123). MEOK never minimises or
              continues a normal conversation thread through a crisis moment.
            </p>
          </div>

          <div style={{ ...sFaqItem, borderBottom: "none", paddingBottom: 0 }}>
            <h3 style={sFaqQ}>
              What is the difference between ARFID and anorexia nervosa?
            </h3>
            <p style={sFaqA}>
              Anorexia nervosa is characterised by body image disturbance and intense fear of weight
              gain, driving severe restriction. ARFID involves extreme food avoidance driven by sensory
              sensitivity, fear of choking or vomiting, or lack of interest in eating &mdash; without
              body image disturbance. Both are serious disorders requiring specialist clinical assessment
              and distinct treatment approaches.
            </p>
          </div>
        </section>

        <hr style={sDivider} />

        {/* ── CTA ── */}
        <section style={sCtaBlock}>
          <span style={sCtaLabel}>MEOK AI LABS &mdash; Care-based sovereign AI</span>
          <h2 style={sCtaTitle}>
            A consistent presence in your recovery journey
          </h2>
          <p style={sCtaDesc}>
            MEOK is available between sessions &mdash; at night, at weekends, in the quiet moments
            when the illness is loudest. It will never comment on your body. It will hold your story
            without judgement. It is a companion in recovery, not a treatment for illness.
          </p>
          <Link href="/birth" style={sCtaBtn}>
            Begin your MEOK journey
          </Link>
          <p style={sCtaCaveat}>
            MEOK supplements professional care &mdash; it does not replace it. If you are in crisis
            or need specialist eating disorder support, please contact Beat on 0808 801 0677
            or your GP before using MEOK.
          </p>
        </section>

        <hr style={sDivider} />

        {/* ── Related reading ── */}
        <section style={sSection}>
          <h2 style={{ ...sH2, fontSize: "18px", marginBottom: "20px" }}>
            Related reading
          </h2>
          <ul style={{ ...sUl, listStyle: "none", paddingLeft: 0 }}>
            {[
              {
                href: "/blog/ai-for-anxiety",
                label: "AI for anxiety: how sovereign AI supports between-session care",
              },
              {
                href: "/blog/ai-for-depression",
                label: "AI for depression: lowering the activation energy to get help",
              },
              {
                href: "/blog/ai-for-ptsd",
                label: "AI for PTSD: presence without re-traumatisation",
              },
              {
                href: "/blog/maternal-covenant-explained",
                label: "The Maternal Covenant: MEOK\u2019s founding ethical framework explained",
              },
              {
                href: "/blog/building-care-into-ai",
                label: "Building care into AI: why most AI platforms get this wrong",
              },
              {
                href: "/blog/what-is-care-based-ai",
                label: "What is care-based AI and why does architecture matter?",
              },
            ].map(({ href, label }) => (
              <li key={href} style={{ ...sLi, marginBottom: "11px" }}>
                <Link href={href} style={sInlineLink}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Footer nav ── */}
        <nav style={sFooterNav} aria-label="Site navigation">
          {[
            { href: "/", label: "Home" },
            { href: "/blog", label: "Blog" },
            { href: "/birth", label: "Get started" },
            { href: "/about", label: "About" },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={sFooterLink}>
              {label}
            </Link>
          ))}
        </nav>

        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            color: DIM,
            marginTop: "28px",
            marginBottom: 0,
          }}
        >
          &copy; {new Date().getFullYear()} MEOK AI LABS &middot; Founded by Nicholas Templeman
          &middot;{" "}
          <a
            href="https://twitter.com/meok_ai"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: DIM, textDecoration: "none" }}
          >
            @meok_ai
          </a>
        </p>
      </div>
    </div>
  )
}
