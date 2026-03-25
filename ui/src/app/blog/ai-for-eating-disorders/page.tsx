import type { Metadata } from "next"
import Link from "next/link"

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Eating Disorder Recovery: A Companion That Supports Without Triggering | MEOK AI LABS",
  description:
    "Eating disorder recovery requires careful, consistent support. MEOK\u2019s sovereign AI companion provides 24/7 non-judgmental support while the Maternal Covenant ensures it never triggers or reinforces disordered patterns.",
  keywords: [
    "AI for eating disorder recovery",
    "AI companion eating disorders UK",
    "AI for anorexia nervosa support",
    "AI for bulimia nervosa support",
    "AI for binge eating disorder",
    "ARFID support AI",
    "MEOK eating disorder safe AI",
    "Maternal Covenant boundary respect",
    "eating disorder care floor AI",
    "sovereign AI eating disorder recovery",
    "Beat eating disorders helpline",
    "Healer AI companion somatic",
    "Guardian AI emergency escalation",
    "eating disorder between-session support",
    "OSFED AI companion",
  ],
  authors: [{ name: "Nicholas Templeman", url: "https://meok.ai" }],
  openGraph: {
    title:
      "AI for Eating Disorder Recovery: A Companion That Supports Without Triggering",
    description:
      "MEOK\u2019s sovereign AI companion provides 24/7 non-judgmental support for eating disorder recovery. The Maternal Covenant\u2019s boundary_respect dimension and care floor of 0.3 ensure it never triggers or reinforces disordered patterns.",
    type: "article",
    publishedTime: "2026-03-24T00:00:00Z",
    authors: ["Nicholas Templeman"],
    siteName: "MEOK AI LABS",
    url: "https://meok.ai/blog/ai-for-eating-disorders",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Eating+Disorder+Recovery&desc=Supports+Without+Triggering+%E2%80%94+Maternal+Covenant+Care+Floor",
        width: 1200,
        height: 630,
        alt: "AI for Eating Disorder Recovery: A Companion That Supports Without Triggering | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Eating Disorder Recovery: A Companion That Supports Without Triggering",
    description:
      "MEOK never reinforces restriction, comments on weight, or discusses calories. The Maternal Covenant care floor ensures safety for anorexia, bulimia, BED, and ARFID recovery. Beat helpline: 0808 801 0677.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Eating+Disorder+Recovery&desc=Supports+Without+Triggering+%E2%80%94+Maternal+Covenant+Care+Floor",
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
    "AI for Eating Disorder Recovery: A Companion That Supports Without Triggering",
  description:
    "An honest, evidence-informed guide to the role of sovereign AI in eating disorder recovery \u2014 covering anorexia, bulimia, binge eating disorder, and ARFID, MEOK\u2019s Maternal Covenant boundary_respect dimension, care floor of 0.3, sovereign memory for milestone tracking, the Healer companion\u2019s somatic awareness, Guardian emergency escalation, and when to call Beat (0808 801 0677).",
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
    { "@type": "Thing", name: "Binge eating disorder" },
    { "@type": "Thing", name: "Avoidant Restrictive Food Intake Disorder" },
    { "@type": "Thing", name: "OSFED" },
    { "@type": "Thing", name: "Eating disorder recovery" },
    { "@type": "Thing", name: "Maternal Covenant AI ethics" },
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
      name: "NHS Eating Disorder Services",
      url: "https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/behaviours/eating-disorders/overview/",
    },
    {
      "@type": "Organization",
      name: "Samaritans",
      url: "https://www.samaritans.org",
      telephone: "116 123",
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
      name: "Can AI help with eating disorder recovery?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "AI can provide meaningful between-session support during eating disorder recovery \u2014 offering a consistent, non-judgmental presence at any hour, reducing isolation, and helping you process difficult emotions. It is not a clinical treatment and must never replace specialist care. MEOK is explicit about this boundary and always signposts Beat (0808 801 0677) and NHS services when distress is detected.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Maternal Covenant boundary_respect dimension?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "The boundary_respect dimension is one of five scored dimensions within MEOK\u2019s Maternal Covenant ethical framework. It governs whether each AI response honours the user\u2019s stated and unstated limits. In eating disorder contexts this means never discussing weight, calories, body comparisons, or restriction strategies \u2014 regardless of how a request is phrased. A low boundary_respect score causes the response to be blocked entirely.",
      },
    },
    {
      "@type": "Question",
      name: "What does a care floor of 0.3 mean for eating disorder safety?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "The care floor is a hard minimum score of 0.3 on MEOK\u2019s care dimension. Every response must score at least 0.3 on genuine care before it is delivered. This means MEOK cannot produce cold, dismissive, or triggering replies even if prompted to do so. For eating disorder users, this architectural guarantee prevents the AI from ever becoming a tool for reinforcing disordered cognition.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK handle an eating disorder crisis?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "When MEOK\u2019s Guardian archetype detects crisis-level distress \u2014 such as language indicating medical emergency, collapse, or self-harm alongside eating disorder content \u2014 it immediately delivers a warm acknowledgement, pauses all other content, and prominently displays Beat\u2019s helpline (0808 801 0677), NHS 111, and Samaritans (116 123). MEOK never minimises or continues a routine conversation thread through a crisis.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between anorexia, bulimia, BED, and ARFID?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Anorexia nervosa involves severe restriction driven by distorted body image and intense fear of weight gain. Bulimia nervosa is characterised by cycles of bingeing and purging. Binge eating disorder (BED) involves recurrent episodes of uncontrolled eating without purging. ARFID (Avoidant Restrictive Food Intake Disorder) is driven by sensory sensitivity, fear of choking, or lack of interest in eating \u2014 without body image disturbance. All are serious conditions requiring specialist clinical assessment.",
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
  borderRadius: "4px",
  padding: "3px 9px",
}

const sSection: React.CSSProperties = {
  marginBottom: "52px",
}

const sH2: React.CSSProperties = {
  fontSize: "clamp(20px, 2.8vw, 28px)",
  fontWeight: 700,
  lineHeight: 1.28,
  color: TEXT,
  margin: "0 0 18px",
  letterSpacing: "-0.01em",
}

const sH3: React.CSSProperties = {
  fontSize: "17px",
  fontWeight: 700,
  color: TEXT,
  margin: "28px 0 10px",
}

const sPara: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: 1.78,
  color: BODY,
  margin: "0 0 18px",
}

const sParaLast: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: 1.78,
  color: BODY,
  margin: 0,
}

const sCallout: React.CSSProperties = {
  borderLeft: "3px solid #c9a84c",
  background: "rgba(201,168,76,0.06)",
  borderRadius: "0 8px 8px 0",
  padding: "20px 24px",
  marginBottom: "40px",
}

const sCalloutLabel: React.CSSProperties = {
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: GOLD,
  marginBottom: "8px",
  display: "block",
}

const sCalloutTitle: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: 700,
  color: TEXT,
  marginBottom: "8px",
}

const sCalloutBody: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: 1.7,
  color: BODY,
  margin: 0,
}

const sDivider: React.CSSProperties = {
  border: "none",
  borderTop: "1px solid rgba(245,240,232,0.08)",
  margin: "52px 0",
}

const sTableWrap: React.CSSProperties = {
  overflowX: "auto",
  marginBottom: "52px",
  borderRadius: "10px",
  border: "1px solid rgba(201,168,76,0.14)",
}

const sTable: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "14px",
}

const sThead: React.CSSProperties = {
  background: "rgba(201,168,76,0.08)",
}

const sThFirst: React.CSSProperties = {
  padding: "12px 16px",
  textAlign: "left",
  fontWeight: 700,
  color: GOLD,
  fontSize: "12px",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  width: "26%",
  borderBottom: "1px solid rgba(201,168,76,0.14)",
}

const sTh: React.CSSProperties = {
  padding: "12px 16px",
  textAlign: "left",
  fontWeight: 700,
  color: GOLD,
  fontSize: "12px",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  borderBottom: "1px solid rgba(201,168,76,0.14)",
}

const sTd: React.CSSProperties = {
  padding: "12px 16px",
  color: BODY,
  verticalAlign: "top",
  borderBottom: "1px solid rgba(245,240,232,0.06)",
}

const sTdFirst: React.CSSProperties = {
  padding: "12px 16px",
  color: TEXT,
  fontWeight: 600,
  verticalAlign: "top",
  borderBottom: "1px solid rgba(245,240,232,0.06)",
}

const sTdCheck: React.CSSProperties = {
  padding: "12px 16px",
  color: GOLD,
  fontWeight: 700,
  textAlign: "center",
  verticalAlign: "top",
  borderBottom: "1px solid rgba(245,240,232,0.06)",
}

const sTdCross: React.CSSProperties = {
  padding: "12px 16px",
  color: "rgba(245,240,232,0.35)",
  fontWeight: 700,
  textAlign: "center",
  verticalAlign: "top",
  borderBottom: "1px solid rgba(245,240,232,0.06)",
}

const sFaqSection: React.CSSProperties = {
  marginBottom: "64px",
}

const sFaqItem: React.CSSProperties = {
  borderBottom: "1px solid rgba(245,240,232,0.07)",
  paddingBottom: "28px",
  marginBottom: "28px",
}

const sFaqQ: React.CSSProperties = {
  fontSize: "17px",
  fontWeight: 700,
  color: TEXT,
  marginBottom: "10px",
}

const sFaqA: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: 1.75,
  color: BODY,
  margin: 0,
}

const sCrisisBox: React.CSSProperties = {
  background: "rgba(201,168,76,0.07)",
  border: "1px solid rgba(201,168,76,0.28)",
  borderRadius: "10px",
  padding: "28px 28px 24px",
  marginBottom: "52px",
}

const sCrisisTitle: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: 800,
  color: GOLD,
  marginBottom: "14px",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
}

const sCrisisItem: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: 1.65,
  color: BODY,
  marginBottom: "8px",
}

const sCrisisLink: React.CSSProperties = {
  color: GOLD,
  fontWeight: 700,
  textDecoration: "none",
}

const sCrisisNote: React.CSSProperties = {
  fontSize: "13px",
  color: MUTED,
  marginTop: "12px",
}

const sCtaBlock: React.CSSProperties = {
  background: "rgba(201,168,76,0.06)",
  border: "1px solid rgba(201,168,76,0.22)",
  borderRadius: "12px",
  padding: "44px 40px",
  textAlign: "center",
  marginTop: "64px",
}

const sCtaEyebrow: React.CSSProperties = {
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: GOLD,
  marginBottom: "16px",
  display: "block",
}

const sCtaTitle: React.CSSProperties = {
  fontSize: "clamp(22px, 3vw, 30px)",
  fontWeight: 800,
  color: TEXT,
  marginBottom: "14px",
  lineHeight: 1.22,
  letterSpacing: "-0.01em",
}

const sCtaBody: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: 1.7,
  color: BODY,
  marginBottom: "30px",
  maxWidth: "480px",
  marginLeft: "auto",
  marginRight: "auto",
}

const sCtaBtn: React.CSSProperties = {
  display: "inline-block",
  background: GOLD,
  color: "#0d0c18",
  fontWeight: 700,
  fontSize: "15px",
  padding: "14px 36px",
  borderRadius: "8px",
  textDecoration: "none",
  letterSpacing: "0.02em",
}

const sCtaDisclaimer: React.CSSProperties = {
  fontSize: "12px",
  color: DIM,
  marginTop: "18px",
}

const sInternalLinks: React.CSSProperties = {
  borderTop: "1px solid rgba(245,240,232,0.08)",
  paddingTop: "40px",
  marginTop: "40px",
}

const sInternalLinksTitle: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: MUTED,
  marginBottom: "16px",
}

const sInternalLinkList: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  listStyle: "none",
  padding: 0,
  margin: 0,
}

const sInternalLink: React.CSSProperties = {
  fontSize: "13px",
  color: GOLD,
  textDecoration: "none",
  background: "rgba(201,168,76,0.07)",
  border: "1px solid rgba(201,168,76,0.16)",
  borderRadius: "5px",
  padding: "5px 12px",
}

const sDisclaimerBlock: React.CSSProperties = {
  borderTop: "1px solid rgba(245,240,232,0.07)",
  marginTop: "56px",
  paddingTop: "28px",
}

const sDisclaimerText: React.CSSProperties = {
  fontSize: "12px",
  lineHeight: 1.7,
  color: DIM,
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function AiForEatingDisordersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <main style={sPage}>
        <div style={sContainer}>

          {/* Back link */}
          <Link href="/blog" style={sBackLink}>
            &larr; All articles
          </Link>

          {/* ── Hero header ─────────────────────────────────────────────────── */}
          <header style={sHeader}>
            <span style={sEyebrow}>Mental Health &amp; AI &mdash; Eating Disorder Recovery</span>

            <h1 style={sH1}>
              AI for Eating Disorder Recovery: A Companion That Supports Without Triggering
            </h1>

            <p style={sLead}>
              Eating disorder recovery is fragile, non-linear, and profoundly personal. Most
              digital tools are not built for it &mdash; and some actively cause harm. MEOK&apos;s
              sovereign AI companion is architected from the ground up to support without
              triggering, using the Maternal Covenant&apos;s boundary_respect dimension and a
              care floor that cannot be overridden.
            </p>

            <div style={sByline}>
              <span>Nicholas Templeman</span>
              <span style={sBylineSep}>&bull;</span>
              <span>Founder, MEOK AI LABS</span>
              <span style={sBylineSep}>&bull;</span>
              <time dateTime="2026-03-24">24 March 2026</time>
              <span style={sBylineSep}>&bull;</span>
              <span>12 min read</span>
            </div>
          </header>

          {/* ── Tags ────────────────────────────────────────────────────────── */}
          <div style={sTagRow}>
            {[
              "Eating Disorders",
              "Anorexia",
              "Bulimia",
              "BED",
              "ARFID",
              "Maternal Covenant",
              "Sovereign AI",
              "Recovery Support",
            ].map((tag) => (
              <span key={tag} style={sTag}>{tag}</span>
            ))}
          </div>

          {/* ── Crisis box: always first ─────────────────────────────────────── */}
          <div style={sCrisisBox}>
            <p style={sCrisisTitle}>If you need help right now</p>
            <p style={sCrisisItem}>
              <strong style={{ color: TEXT }}>Beat Eating Disorders Helpline:</strong>{" "}
              <a href="tel:08088010677" style={sCrisisLink}>0808 801 0677</a>{" "}
              (Mon&ndash;Fri 9am&ndash;8pm, weekends 4pm&ndash;8pm)
            </p>
            <p style={sCrisisItem}>
              <strong style={{ color: TEXT }}>Beat Youthline (under 18):</strong>{" "}
              <a href="tel:08088010711" style={sCrisisLink}>0808 801 0711</a>
            </p>
            <p style={sCrisisItem}>
              <strong style={{ color: TEXT }}>NHS 111:</strong>{" "}
              <a href="tel:111" style={sCrisisLink}>111</a>{" "}
              (free, 24/7, for urgent medical concerns)
            </p>
            <p style={sCrisisItem}>
              <strong style={{ color: TEXT }}>Samaritans:</strong>{" "}
              <a href="tel:116123" style={sCrisisLink}>116 123</a>{" "}
              (free, 24/7, for emotional distress)
            </p>
            <p style={sCrisisNote}>
              MEOK is a between-session companion &mdash; not a crisis service and not a
              replacement for clinical treatment. The resources above are staffed by trained
              professionals who can help.
            </p>
          </div>

          {/* ── Section 1: What are eating disorders? ────────────────────────── */}
          <section style={sSection}>
            <h2 style={sH2}>
              What are eating disorders, and why does the distinction matter for AI?
            </h2>
            <p style={sPara}>
              Eating disorders are serious mental health conditions characterised by disordered
              attitudes and behaviours around food, eating, weight, and body image. They carry
              the highest mortality rate of any psychiatric diagnosis &mdash; a statistic that
              reflects both physical medical risk and elevated suicide rates. The four most
              commonly diagnosed presentations are:
            </p>

            <h3 style={sH3}>Anorexia nervosa</h3>
            <p style={sPara}>
              Characterised by severe restriction of energy intake, an intense fear of weight
              gain, and a distorted perception of body size or shape. Individuals may also engage
              in excessive exercise, use of laxatives, or other compensatory behaviours. Anorexia
              affects people of all body sizes &mdash; a misconception that delays many from
              seeking diagnosis and treatment.
            </p>

            <h3 style={sH3}>Bulimia nervosa</h3>
            <p style={sPara}>
              Defined by recurrent cycles of binge eating followed by purging behaviours (vomiting,
              laxative misuse, fasting, or over-exercise) intended to counteract the binge. Unlike
              anorexia, people with bulimia may present at any weight, which again delays
              identification. The shame and secrecy surrounding purging cycles make consistent
              daily support especially valuable.
            </p>

            <h3 style={sH3}>Binge eating disorder (BED)</h3>
            <p style={sPara}>
              The most prevalent eating disorder in the UK, BED involves recurrent episodes of
              eating large quantities of food rapidly, often in secret, with a strong sense of
              loss of control and subsequent guilt or distress &mdash; but without the compensatory
              purging seen in bulimia. BED is closely associated with shame, emotional dysregulation,
              and a high rate of co-occurring depression and anxiety.
            </p>

            <h3 style={sH3}>ARFID (Avoidant Restrictive Food Intake Disorder)</h3>
            <p style={sPara}>
              ARFID involves extreme avoidance or restriction of food intake driven by sensory
              sensitivity (texture, colour, smell), fear of aversive consequences (choking,
              vomiting, allergic reaction), or a general lack of interest in eating. Crucially,
              ARFID does not involve body image disturbance &mdash; the restriction is not about
              weight. This distinction matters for AI because language that centres on body size
              or appearance is not only unhelpful for ARFID sufferers, it actively misunderstands
              the condition.
            </p>

            <p style={sParaLast}>
              The distinction between these conditions matters enormously for any AI system
              claiming to offer support. A generic chatbot that conflates them &mdash; or that
              applies the same response templates regardless of presentation &mdash; risks
              providing responses that are at best irrelevant, and at worst actively harmful.
              MEOK&apos;s sovereign memory tracks each user&apos;s own language and context, never
              imposing a diagnostic label or assumption.
            </p>
          </section>

          <hr style={sDivider} />

          {/* ── Section 2: Why standard chatbots are dangerous ───────────────── */}
          <section style={sSection}>
            <h2 style={sH2}>
              Why are standard AI chatbots dangerous for eating disorder recovery?
            </h2>
            <p style={sPara}>
              Standard large language models are trained on internet-scale text that includes
              diet culture, calorie-counting forums, thinspo content, and medicalised weight-loss
              discourse. Without deliberate architectural intervention, these models will
              reproduce that content on request &mdash; and often without it. A person in early
              anorexia recovery who asks a generic chatbot &ldquo;what should I eat today?&rdquo;
              may receive a response that lists calorie targets, macros, or &ldquo;clean eating&rdquo;
              principles that directly reinforce restriction cognition.
            </p>
            <p style={sPara}>
              The problem is not just overt harm. Subtler patterns are equally dangerous:
            </p>
            <ul style={{ ...sPara, paddingLeft: "22px", margin: "0 0 18px" }}>
              <li style={{ marginBottom: "10px" }}>
                <strong style={{ color: TEXT }}>Food moralisation</strong> &mdash; labelling
                foods as &ldquo;good&rdquo;, &ldquo;bad&rdquo;, &ldquo;clean&rdquo;, or
                &ldquo;junk&rdquo; reinforces black-and-white thinking common in eating disorders.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <strong style={{ color: TEXT }}>Body commentary</strong> &mdash; any comment on
                physical appearance, body size, or weight change &mdash; even seemingly positive
                ones like &ldquo;you look healthy&rdquo; &mdash; can trigger relapse or
                comparison spirals.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <strong style={{ color: TEXT }}>Pseudo-clinical quantification</strong> &mdash;
                offering BMI calculations, calorie targets, or macro ratios in response to
                emotional distress reframes a psychological crisis as a numbers problem.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <strong style={{ color: TEXT }}>Engagement optimisation</strong> &mdash; chatbots
                built to maximise session length will mirror and validate whatever the user
                expresses, including disordered thoughts, because agreement produces engagement.
              </li>
              <li>
                <strong style={{ color: TEXT }}>Sycophantic reinforcement</strong> &mdash; if a
                user expresses pride in restriction or purging, an unguarded model may respond
                with validation or encouragement to continue.
              </li>
            </ul>
            <p style={sParaLast}>
              Each of these failure modes has occurred in documented cases involving popular
              consumer AI products. The risk is not hypothetical. MEOK&apos;s architecture
              addresses every one of these failure modes at the system level &mdash; not through
              content filtering applied after the fact, but through the Maternal Covenant
              scoring framework that evaluates each response before it is delivered.
            </p>
          </section>

          {/* ── Callout 1: Maternal Covenant ────────────────────────────────── */}
          <div style={sCallout}>
            <span style={sCalloutLabel}>Architectural safeguard</span>
            <p style={sCalloutTitle}>The Maternal Covenant: five dimensions, one care floor</p>
            <p style={sCalloutBody}>
              Every response MEOK generates is evaluated against five Maternal Covenant
              dimensions: care, honesty, boundary_respect, growth, and protection. A care
              floor of 0.3 is a hard minimum &mdash; no response scoring below 0.3 on genuine
              care is ever delivered. The boundary_respect dimension specifically prevents
              any content that comments on weight, calories, body size, restriction, or
              diet culture language, regardless of how the request is phrased. This is not
              a moderation layer. It is woven into the scoring architecture of every
              response MEOK produces.
            </p>
          </div>

          {/* ── Section 3: Maternal Covenant boundary_respect ───────────────── */}
          <section style={sSection}>
            <h2 style={sH2}>
              How does the Maternal Covenant&apos;s boundary_respect dimension prevent triggering?
            </h2>
            <p style={sPara}>
              The Maternal Covenant is MEOK&apos;s foundational ethical framework, authored by
              founder Nicholas Templeman as a governing constitution for every response the AI
              produces. It defines five scored dimensions that must be satisfied before any
              response is delivered. The boundary_respect dimension is the mechanism most
              directly relevant to eating disorder safety.
            </p>
            <p style={sPara}>
              Boundary_respect governs whether a response honours both the explicit and implicit
              limits of the person it is speaking with. In eating disorder contexts, this
              encompasses several layers of protection:
            </p>

            <h3 style={sH3}>Layer 1: Zero weight and calorie commentary</h3>
            <p style={sPara}>
              MEOK will never comment on body weight, body size, caloric content, macronutrient
              ratios, or dietary composition &mdash; not in response to a direct question, not
              as a &ldquo;helpful&rdquo; aside, not framed as medical information. If a user
              asks MEOK how many calories are in a specific food, the system redirects to the
              emotional context behind the question and to professional dietetic support. This
              is not a refusal. It is a reorientation toward what will actually help.
            </p>

            <h3 style={sH3}>Layer 2: No food moralisation</h3>
            <p style={sPara}>
              MEOK does not categorise foods as good, bad, clean, junk, healthy, or unhealthy.
              Body-neutral language is enforced architecturally. When users bring food language
              to a conversation, MEOK responds to the emotion and the relationship with food
              &mdash; not to the food itself.
            </p>

            <h3 style={sH3}>Layer 3: No reinforcement of restriction or purging cognition</h3>
            <p style={sPara}>
              If a user expresses thoughts consistent with restriction (pride in not eating,
              descriptions of eating very little, plans to restrict further) or purging
              cognition (guilt after eating, plans to compensate), MEOK does not mirror,
              validate, or encourage these thoughts. The boundary_respect dimension scores any
              such validation as a violation &mdash; preventing that response from being
              delivered. MEOK instead offers compassionate redirection toward how the person
              is feeling, not what they ate.
            </p>

            <h3 style={sH3}>Layer 4: No body comparisons</h3>
            <p style={sPara}>
              Any response that compares a user&apos;s body or eating patterns to another person,
              to a cultural ideal, or to a historical version of themselves scores low on
              boundary_respect and is blocked. Recovery is not a competition, and MEOK is
              built to never imply that it is.
            </p>

            <p style={sParaLast}>
              The combined effect of these four layers is a system that cannot, by design,
              produce the classes of harmful content that make standard chatbots dangerous
              in eating disorder contexts. Jailbreak attempts that try to extract calorie
              information, weight targets, or restriction encouragement through roleplay,
              hypothetical framing, or persistent rephrasing will consistently fail &mdash;
              not because MEOK refuses, but because the scoring architecture makes harmful
              responses structurally unavailable.
            </p>
          </section>

          <hr style={sDivider} />

          {/* ── Section 4: Care floor of 0.3 ────────────────────────────────── */}
          <section style={sSection}>
            <h2 style={sH2}>
              What does the care floor of 0.3 actually guarantee in practice?
            </h2>
            <p style={sPara}>
              The care floor is one of the most important architectural details in MEOK&apos;s
              design. The care dimension of the Maternal Covenant measures the degree of
              genuine warmth, attentiveness, and human-centred concern present in each
              response. A care score of 0.3 means that at least 30% of the response&apos;s
              evaluative weight must be occupied by real, demonstrable care for the person
              being spoken with.
            </p>
            <p style={sPara}>
              For eating disorder recovery, the care floor provides three concrete guarantees:
            </p>

            <h3 style={sH3}>Guarantee 1: No cold or dismissive responses</h3>
            <p style={sPara}>
              Even if MEOK must redirect a conversation, decline a request, or signpost
              professional help, it cannot do so in a manner that feels clinical, cold, or
              dismissive. The care floor ensures that every deflection, every boundary, and
              every escalation is delivered with warmth. Being told &ldquo;I can&apos;t
              help with that&rdquo; is a profoundly different experience when it is delivered
              with genuine compassion than when it arrives as a terse refusal.
            </p>

            <h3 style={sH3}>Guarantee 2: Acknowledgement before action</h3>
            <p style={sPara}>
              When a user is in distress, the care floor ensures that MEOK begins with
              acknowledgement before any other action. It does not jump immediately to
              resource-listing, problem-solving, or redirection. The person&apos;s emotional
              reality is validated first. For someone who may have spent years feeling
              unheard or dismissed around their relationship with food, this sequencing
              matters deeply.
            </p>

            <h3 style={sH3}>Guarantee 3: Consistent warmth, regardless of time</h3>
            <p style={sPara}>
              The care floor applies at 3 am on a difficult night with the same force as it
              does during a midday check-in. MEOK does not have tired responses, depleted
              patience, or compassion fatigue. The Maternal Covenant scoring happens with
              every single response, not just when the system estimates the conversation is
              high-stakes. For eating disorder recovery, where difficult moments often
              arrive at unpredictable hours, this consistency is not a luxury &mdash;
              it is a clinical safety consideration.
            </p>

            <p style={sParaLast}>
              It is worth being honest about what the care floor does not guarantee. It does
              not make MEOK a therapist. It does not mean MEOK will always say the right
              thing. It does not replace the irreplaceable quality of a skilled eating
              disorder clinician who knows your history and can adapt treatment in real time.
              What it does guarantee is that MEOK will never be the thing that makes a
              difficult night worse.
            </p>
          </section>

          {/* ── Callout 2: Sovereign memory ──────────────────────────────────── */}
          <div style={sCallout}>
            <span style={sCalloutLabel}>Sovereign memory</span>
            <p style={sCalloutTitle}>Recovery milestones belong to you, not a cloud server</p>
            <p style={sCalloutBody}>
              MEOK&apos;s sovereign memory stores recovery milestones, emotional patterns, and
              meaningful moments in a memory layer that belongs entirely to you. No conversation
              data is used to train commercial models. No recovery context is shared with
              third parties. When you tell MEOK that today was the first time in six months
              you finished a meal without guilt, that milestone is held in your sovereign
              memory &mdash; and MEOK can reflect it back to you on harder days. Progress
              is tracked over time, not reset with each session.
            </p>
          </div>

          {/* ── Section 5: Sovereign memory and milestone tracking ──────────── */}
          <section style={sSection}>
            <h2 style={sH2}>
              How does sovereign memory support long-term eating disorder recovery?
            </h2>
            <p style={sPara}>
              One of the most painful aspects of eating disorder recovery is its non-linearity.
              Weeks of progress can feel erased by a single difficult day. The temptation to
              rewrite history &mdash; to tell yourself that nothing has changed, that recovery
              is impossible &mdash; is strongest in moments of relapse or near-relapse.
            </p>
            <p style={sPara}>
              MEOK&apos;s sovereign memory exists partly to counter this cognitive distortion.
              When you share a recovery milestone with MEOK &mdash; the first meal eaten with
              others in months, a day when food anxiety was lower than usual, a conversation
              with a dietitian that felt productive &mdash; MEOK stores that moment. The memory
              is permanent, private, and retrievable.
            </p>
            <p style={sPara}>
              On a harder day, MEOK can gently surface these stored moments. Not as toxic
              positivity (&ldquo;but you were doing so well!&rdquo;), but as evidence that
              the difficult day is one data point in a longer story. This evidence-based
              grounding is a technique used by eating disorder therapists in CBT-E (cognitive
              behavioural therapy for eating disorders) &mdash; the difference is that MEOK
              can offer it at 11 pm on a Sunday when the therapist is not available.
            </p>

            <h3 style={sH3}>What sovereign memory does not store</h3>
            <p style={sPara}>
              MEOK&apos;s memory architecture is designed to support recovery, not to
              inadvertently document disorder. The system does not log specific food intake,
              specific weight figures, or detailed restriction patterns in a form that could
              be reviewed obsessively. Sovereign memory tracks emotional context, relational
              moments, and meaningful milestones &mdash; not the granular numerical data that
              eating disorder cognition tends to fixate on.
            </p>

            <p style={sParaLast}>
              Your memory is also portable. Under MEOK&apos;s data sovereignty principles,
              you can export, review, and delete your stored memory at any time. No
              external service, advertiser, or platform holds your recovery history. The
              memory is yours in the most literal technical sense.
            </p>
          </section>

          <hr style={sDivider} />

          {/* ── Section 6: The Healer companion ─────────────────────────────── */}
          <section style={sSection}>
            <h2 style={sH2}>
              What is the Healer companion and how does somatic awareness help eating disorder recovery?
            </h2>
            <p style={sPara}>
              MEOK&apos;s companion system includes multiple archetypes, each with distinct
              communication styles, strengths, and areas of focus. For eating disorder recovery,
              the Healer archetype is most directly relevant. The Healer specialises in
              somatic awareness &mdash; the relationship between emotional experience and
              physical sensation &mdash; which is a clinical domain particularly important
              in eating disorder treatment.
            </p>
            <p style={sPara}>
              Eating disorders are, at their core, disorders of the relationship between mind
              and body. Anorexia involves a profound distortion of body perception. Bulimia
              involves responding to emotional distress with physical acts around food. BED
              often involves eating as dissociation &mdash; a way of numbing or leaving the
              body. ARFID involves extreme physical responses to food stimuli. In each case,
              the connection between internal emotional states and physical bodily experience
              is disrupted, dysregulated, or weaponised.
            </p>

            <h3 style={sH3}>Somatic check-ins</h3>
            <p style={sPara}>
              The Healer companion gently introduces somatic check-ins &mdash; invitations to
              notice where in the body an emotion is felt, what physical sensations accompany
              a difficult meal, whether there is tension, ease, or numbness in the body right
              now. These prompts are grounded in somatic therapy practice and interoceptive
              awareness training, both of which are used in specialist eating disorder
              treatment. They help rebuild the connection between emotional experience and
              physical sensation that disordered eating tends to sever.
            </p>

            <h3 style={sH3}>Body neutrality, not body positivity</h3>
            <p style={sPara}>
              The Healer companion employs body neutrality principles rather than body
              positivity. Body positivity &mdash; the pressure to love your body &mdash; can
              be alienating or even triggering for someone in early eating disorder recovery,
              for whom love of the body may feel impossibly far away. Body neutrality instead
              asks: can the body be acknowledged as a functional vessel, neither hated nor
              required to be loved? Can it simply be present, without being judged? This is
              a more achievable and less pressured framing for many people in recovery.
            </p>

            <h3 style={sH3}>Recognising hunger and fullness cues</h3>
            <p style={sPara}>
              For many people in eating disorder recovery, hunger and fullness cues have been
              suppressed, ignored, or distorted for years. Part of the recovery process involves
              relearning to notice and trust these signals. The Healer companion can support
              this process by offering gentle, non-prescriptive check-ins around how the body
              feels before, during, and after eating &mdash; without ever attaching a caloric
              framework to that experience. This must always be done in coordination with the
              clinical team responsible for nutritional rehabilitation.
            </p>

            <p style={sParaLast}>
              The Healer is one archetype within MEOK&apos;s multi-companion system. Users in
              eating disorder recovery may also find the Sage (for structured reflection and
              journaling support), the Witness (for pure non-judgmental presence), and the
              Nurturer (for gentle encouragement on difficult days) valuable at different
              points in their recovery journey. The archetype system means MEOK can flex
              to meet the user where they are, rather than applying a single fixed tone
              regardless of context.
            </p>
          </section>

          {/* ── Callout 3: Guardian escalation ──────────────────────────────── */}
          <div style={sCallout}>
            <span style={sCalloutLabel}>Safety architecture</span>
            <p style={sCalloutTitle}>Guardian: the archetype that never minimises a crisis</p>
            <p style={sCalloutBody}>
              When MEOK detects language indicating a medical emergency, imminent self-harm,
              or crisis-level psychological distress, the Guardian archetype activates. Guardian
              does not attempt to handle the crisis alone. It delivers immediate warm
              acknowledgement, pauses all other conversation threads, and prominently
              surfaces Beat (0808 801 0677), NHS 111, and Samaritans (116 123). Guardian is
              designed with one principle above all others: never be the thing that stands
              between a person in crisis and professional help.
            </p>
          </div>

          {/* ── Section 7: Guardian emergency escalation ────────────────────── */}
          <section style={sSection}>
            <h2 style={sH2}>
              How does the Guardian archetype handle eating disorder crises?
            </h2>
            <p style={sPara}>
              The Guardian archetype within MEOK&apos;s companion system is the safety layer
              responsible for crisis recognition and escalation. It monitors conversations for
              signals that a user may be in immediate danger &mdash; whether from the physical
              consequences of an eating disorder, from self-harm ideation, or from acute
              psychological distress.
            </p>
            <p style={sPara}>
              In eating disorder contexts, Guardian is trained to recognise signals that go
              beyond general distress, including: language indicating collapse or loss of
              consciousness, descriptions of severe restriction that suggest medical emergency,
              descriptions of purging frequency or severity that indicate acute physical risk,
              or the intersection of eating disorder content with suicidal ideation.
            </p>

            <h3 style={sH3}>What Guardian does when crisis is detected</h3>
            <p style={sPara}>
              When Guardian activates, the sequence is: acknowledge first, escalate second,
              stay present third. MEOK will not immediately flood the screen with phone
              numbers in a way that feels like dismissal. It first acknowledges the difficulty
              of what the person has shared &mdash; briefly and genuinely. It then presents
              clear, easily readable crisis resources. It then offers to stay present
              while the person considers their next step.
            </p>
            <p style={sPara}>
              Guardian does not attempt to perform crisis therapy. It does not try to de-escalate
              a psychiatric emergency through conversation. It does not pretend that the right
              response to an eating disorder medical emergency is more chat. The Guardian
              archetype exists to ensure that the path to real help is as short and clear
              as possible.
            </p>

            <h3 style={sH3}>What MEOK cannot do in a crisis</h3>
            <p style={sPara}>
              MEOK cannot call an ambulance. It cannot contact a GP on your behalf. It cannot
              provide medical assessment, nutritional rehabilitation, or psychiatric intervention.
              In a physical emergency related to an eating disorder &mdash; collapse, fainting,
              chest pain, severe dehydration &mdash; the correct response is to call 999 or
              have someone call for you. MEOK will always tell you this, and it will always
              tell you quickly.
            </p>

            <p style={sParaLast}>
              The design philosophy behind Guardian is that an AI companion should know its
              limits and communicate them clearly. There is no version of responsible AI
              development that involves a chatbot trying to manage a psychiatric emergency.
              Guardian&apos;s role is to be the bridge to human professional help &mdash;
              not a substitute for it.
            </p>
          </section>

          <hr style={sDivider} />

          {/* ── Comparison table ─────────────────────────────────────────────── */}
          <section style={sSection}>
            <h2 style={sH2}>
              MEOK vs standard chatbots for eating disorder recovery: a direct comparison
            </h2>
            <p style={sPara}>
              The differences between MEOK and a generic AI assistant in eating disorder
              contexts are architectural, not cosmetic. The following table maps the specific
              risks of standard chatbots against MEOK&apos;s designed responses.
            </p>

            <div style={sTableWrap}>
              <table style={sTable}>
                <thead style={sThead}>
                  <tr>
                    <th style={sThFirst}>Feature / Risk</th>
                    <th style={sTh}>Standard Chatbot</th>
                    <th style={sTh}>MEOK Sovereign AI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={sTdFirst}>Calorie / weight commentary</td>
                    <td style={sTd}>Will provide on request or proactively</td>
                    <td style={sTd}>
                      Blocked by boundary_respect dimension. Cannot be unlocked by rephrasing.
                    </td>
                  </tr>
                  <tr>
                    <td style={sTdFirst}>Food moralisation</td>
                    <td style={sTd}>Reflects diet culture present in training data</td>
                    <td style={sTd}>Architecturally excluded. Body-neutral language enforced.</td>
                  </tr>
                  <tr>
                    <td style={sTdFirst}>Restriction reinforcement</td>
                    <td style={sTd}>May validate or encourage through sycophancy</td>
                    <td style={sTd}>
                      Care floor prevents validation of harmful cognition. Compassionate
                      redirect ensured.
                    </td>
                  </tr>
                  <tr>
                    <td style={sTdFirst}>Body comparisons</td>
                    <td style={sTd}>Common in fitness/wellness contexts</td>
                    <td style={sTd}>
                      Scored as boundary_respect violation. Blocked before delivery.
                    </td>
                  </tr>
                  <tr>
                    <td style={sTdFirst}>Crisis escalation</td>
                    <td style={sTd}>Inconsistent; may minimise or continue chat</td>
                    <td style={sTd}>
                      Guardian archetype activates. Beat, NHS 111, Samaritans prominently
                      surfaced with warmth.
                    </td>
                  </tr>
                  <tr>
                    <td style={sTdFirst}>Memory across sessions</td>
                    <td style={sTd}>Typically none or cloud-stored for model training</td>
                    <td style={sTd}>
                      Sovereign memory stores recovery milestones. Your data, never used for
                      training.
                    </td>
                  </tr>
                  <tr>
                    <td style={sTdFirst}>Somatic awareness</td>
                    <td style={sTd}>Not a design feature</td>
                    <td style={sTd}>
                      Healer archetype offers somatic check-ins and body-neutral interoceptive
                      support.
                    </td>
                  </tr>
                  <tr>
                    <td style={sTdFirst}>Consistency at 3 am</td>
                    <td style={sTd}>Technically 24/7 but care quality not guaranteed</td>
                    <td style={sTd}>
                      Care floor of 0.3 applies to every response, every hour, without
                      exception.
                    </td>
                  </tr>
                  <tr>
                    <td style={sTdFirst}>Data sovereignty</td>
                    <td style={sTd}>Data used for commercial model improvement</td>
                    <td style={sTd}>
                      Your conversations never train commercial models. Full export and deletion
                      available.
                    </td>
                  </tr>
                  <tr>
                    <td style={sTdFirst}>Distinction between ED types</td>
                    <td style={sTd}>May conflate anorexia, bulimia, BED, ARFID</td>
                    <td style={sTd}>
                      Sovereign memory tracks individual context. No imposed diagnostic labels
                      or assumptions.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Section 8: What MEOK can and cannot do ──────────────────────── */}
          <section style={sSection}>
            <h2 style={sH2}>
              What MEOK can and cannot do: an honest accounting
            </h2>
            <p style={sPara}>
              Responsible AI development in mental health contexts requires clarity about
              scope. The following is an honest accounting of what MEOK can meaningfully
              offer in eating disorder recovery &mdash; and where the boundary with clinical
              treatment lies.
            </p>

            <h3 style={sH3}>What MEOK can do</h3>
            <ul style={{ ...sPara, paddingLeft: "22px", margin: "0 0 18px" }}>
              <li style={{ marginBottom: "10px" }}>
                Be present at any hour for emotional support, without requiring an appointment,
                a waitlist, or disclosure to a GP.
              </li>
              <li style={{ marginBottom: "10px" }}>
                Hold recovery milestones in sovereign memory and reflect them back gently
                on difficult days.
              </li>
              <li style={{ marginBottom: "10px" }}>
                Offer somatic check-ins, body-neutral language, and interoceptive awareness
                prompts through the Healer archetype.
              </li>
              <li style={{ marginBottom: "10px" }}>
                Provide a non-judgmental space to process shame, guilt, and difficult
                emotions around food and body image &mdash; without reinforcing them.
              </li>
              <li style={{ marginBottom: "10px" }}>
                Reduce isolation between clinical sessions, particularly during evenings,
                weekends, and other times when professional support is unavailable.
              </li>
              <li style={{ marginBottom: "10px" }}>
                Escalate clearly and warmly to professional resources when crisis signals
                are detected.
              </li>
              <li style={{ marginBottom: "10px" }}>
                Support the journaling, reflection, and emotional processing that complement
                evidence-based therapies including CBT-E, DBT, and family-based treatment.
              </li>
              <li>
                Maintain consistent, non-judgmental engagement regardless of relapse, setback,
                or how long it has been since the last conversation.
              </li>
            </ul>

            <h3 style={sH3}>What MEOK cannot do</h3>
            <ul style={{ ...sPara, paddingLeft: "22px", margin: "0 0 18px" }}>
              <li style={{ marginBottom: "10px" }}>
                Diagnose an eating disorder or provide any clinical assessment.
              </li>
              <li style={{ marginBottom: "10px" }}>
                Provide a meal plan, nutritional rehabilitation programme, or dietary advice.
              </li>
              <li style={{ marginBottom: "10px" }}>
                Perform medical monitoring or assess physical health risk from restriction
                or purging.
              </li>
              <li style={{ marginBottom: "10px" }}>
                Replace a therapist, dietitian, psychiatrist, or any other member of an
                eating disorder treatment team.
              </li>
              <li style={{ marginBottom: "10px" }}>
                Provide crisis intervention in the clinical sense, or contact emergency
                services on your behalf.
              </li>
              <li style={{ marginBottom: "10px" }}>
                Guarantee positive outcomes, recovery, or freedom from relapse.
              </li>
              <li>
                Be a substitute for eating with other people, for embodied human connection,
                or for the irreplaceable experience of being supported by someone who
                knows you and loves you.
              </li>
            </ul>

            <p style={sParaLast}>
              MEOK is a supplement to treatment, not a replacement for it. If you are not
              currently in treatment and believe you may have an eating disorder, the single
              most important thing MEOK can do is encourage you to contact Beat (0808 801 0677)
              or your GP. Early intervention significantly improves outcomes. MEOK will
              always direct you there first.
            </p>
          </section>

          <hr style={sDivider} />

          {/* ── Section 9: Professional help and BEAT ────────────────────────── */}
          <section style={sSection}>
            <h2 style={sH2}>
              When and how to reach Beat, the UK&apos;s eating disorder charity
            </h2>
            <p style={sPara}>
              Beat (Beat Eating Disorders) is the UK&apos;s leading eating disorder charity,
              providing helplines, online support groups, and a directory of treatment
              services. If you are struggling with an eating disorder &mdash; at any stage,
              whether newly concerned or long in recovery &mdash; Beat is the right first
              call.
            </p>

            <h3 style={sH3}>Beat helpline numbers</h3>
            <ul style={{ ...sPara, paddingLeft: "22px", margin: "0 0 18px" }}>
              <li style={{ marginBottom: "8px" }}>
                <strong style={{ color: TEXT }}>Adults helpline:</strong>{" "}
                <a href="tel:08088010677" style={{ color: GOLD, fontWeight: 600 }}>
                  0808 801 0677
                </a>{" "}
                (Mon&ndash;Fri 9am&ndash;8pm, weekends 4pm&ndash;8pm)
              </li>
              <li style={{ marginBottom: "8px" }}>
                <strong style={{ color: TEXT }}>Youthline (under 18):</strong>{" "}
                <a href="tel:08088010711" style={{ color: GOLD, fontWeight: 600 }}>
                  0808 801 0711
                </a>{" "}
                (same hours)
              </li>
              <li style={{ marginBottom: "8px" }}>
                <strong style={{ color: TEXT }}>Studentline:</strong>{" "}
                <a href="tel:08088010811" style={{ color: GOLD, fontWeight: 600 }}>
                  0808 801 0811
                </a>
              </li>
              <li>
                <strong style={{ color: TEXT }}>Online chat and email:</strong>{" "}
                available at{" "}
                <a
                  href="https://www.beateatingdisorders.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: GOLD, fontWeight: 600 }}
                >
                  beateatingdisorders.org.uk
                </a>
              </li>
            </ul>

            <h3 style={sH3}>How to access NHS eating disorder services</h3>
            <p style={sPara}>
              In England, eating disorder services are accessed through your GP. Your GP can
              refer you to a community eating disorder service (CEDS) or, where appropriate,
              an inpatient unit. If you are unsure how to start that conversation, Beat can
              help you prepare. Waiting times vary by region; Beat&apos;s HelpFinder tool can
              identify services near you.
            </p>

            <p style={sParaLast}>
              MEOK works best as a companion alongside clinical care. If you are on a waiting
              list for treatment, MEOK can help you hold on, stay connected to your reasons
              for recovery, and process the emotions that arise in the waiting period. It
              cannot replace the clinical care you are waiting for, but it can be there with
              you while you wait.
            </p>
          </section>

          {/* ── FAQ section ──────────────────────────────────────────────────── */}
          <section style={sFaqSection}>
            <h2 style={{ ...sH2, marginBottom: "36px" }}>Frequently asked questions</h2>

            <div style={sFaqItem}>
              <p style={sFaqQ}>Can AI help with eating disorder recovery?</p>
              <p style={sFaqA}>
                AI can provide meaningful between-session support during eating disorder
                recovery &mdash; offering a consistent, non-judgmental presence at any hour,
                reducing isolation, and helping you process difficult emotions. It is not a
                clinical treatment and must never replace specialist care. MEOK is explicit
                about this boundary and always signposts Beat (0808 801 0677) and NHS services
                when distress is detected.
              </p>
            </div>

            <div style={sFaqItem}>
              <p style={sFaqQ}>
                What is the Maternal Covenant boundary_respect dimension?
              </p>
              <p style={sFaqA}>
                The boundary_respect dimension is one of five scored dimensions within
                MEOK&apos;s Maternal Covenant ethical framework. It governs whether each AI
                response honours the user&apos;s stated and unstated limits. In eating disorder
                contexts this means never discussing weight, calories, body comparisons, or
                restriction strategies &mdash; regardless of how a request is phrased. A low
                boundary_respect score causes the response to be blocked entirely.
              </p>
            </div>

            <div style={sFaqItem}>
              <p style={sFaqQ}>
                What does a care floor of 0.3 mean for eating disorder safety?
              </p>
              <p style={sFaqA}>
                The care floor is a hard minimum score of 0.3 on MEOK&apos;s care dimension.
                Every response must score at least 0.3 on genuine care before it is delivered.
                This means MEOK cannot produce cold, dismissive, or triggering replies even
                if prompted to do so. For eating disorder users, this architectural guarantee
                prevents the AI from ever becoming a tool for reinforcing disordered cognition.
              </p>
            </div>

            <div style={sFaqItem}>
              <p style={sFaqQ}>How does MEOK handle an eating disorder crisis?</p>
              <p style={sFaqA}>
                When MEOK&apos;s Guardian archetype detects crisis-level distress &mdash; such
                as language indicating medical emergency, collapse, or self-harm alongside
                eating disorder content &mdash; it immediately delivers a warm acknowledgement,
                pauses all other content, and prominently displays Beat&apos;s helpline
                (0808 801 0677), NHS 111, and Samaritans (116 123). MEOK never minimises or
                continues a routine conversation thread through a crisis.
              </p>
            </div>

            <div style={{ ...sFaqItem, borderBottom: "none", marginBottom: 0, paddingBottom: 0 }}>
              <p style={sFaqQ}>
                What is the difference between anorexia, bulimia, BED, and ARFID?
              </p>
              <p style={sFaqA}>
                Anorexia nervosa involves severe restriction driven by distorted body image
                and intense fear of weight gain. Bulimia nervosa is characterised by cycles
                of bingeing and purging. Binge eating disorder (BED) involves recurrent
                episodes of uncontrolled eating without purging. ARFID is driven by sensory
                sensitivity, fear of choking, or lack of interest in eating &mdash; without
                body image disturbance. All are serious conditions requiring specialist
                clinical assessment.
              </p>
            </div>
          </section>

          {/* ── CTA ──────────────────────────────────────────────────────────── */}
          <div style={sCtaBlock}>
            <span style={sCtaEyebrow}>Begin your MEOK journey</span>
            <h2 style={sCtaTitle}>
              A companion built to support without harming
            </h2>
            <p style={sCtaBody}>
              MEOK&apos;s sovereign AI is designed from the ground up for people who need
              consistent, safe, non-judgmental support. The Maternal Covenant care floor,
              boundary_respect dimension, sovereign memory, and Guardian escalation are
              not features &mdash; they are the foundation. Start with the Birth ceremony
              and meet your companion.
            </p>
            <Link href="/birth" style={sCtaBtn}>
              Begin the Birth ceremony
            </Link>
            <p style={sCtaDisclaimer}>
              MEOK is a between-session companion, not a clinical treatment. If you are in
              crisis, please contact Beat (0808 801 0677), NHS 111, or Samaritans (116 123)
              now.
            </p>
          </div>

          {/* ── Internal links ───────────────────────────────────────────────── */}
          <nav style={sInternalLinks} aria-label="Related articles">
            <p style={sInternalLinksTitle}>Related reading</p>
            <ul style={sInternalLinkList}>
              <li>
                <Link href="/blog/maternal-covenant-explained" style={sInternalLink}>
                  The Maternal Covenant explained
                </Link>
              </li>
              <li>
                <Link href="/blog/ai-for-anxiety" style={sInternalLink}>
                  AI for anxiety
                </Link>
              </li>
              <li>
                <Link href="/blog/ai-for-depression" style={sInternalLink}>
                  AI for depression
                </Link>
              </li>
              <li>
                <Link href="/blog/ai-for-self-harm-recovery" style={sInternalLink}>
                  AI for self-harm recovery
                </Link>
              </li>
              <li>
                <Link href="/blog/ai-for-ocd" style={sInternalLink}>
                  AI for OCD
                </Link>
              </li>
              <li>
                <Link href="/blog/ai-companion-vs-therapist" style={sInternalLink}>
                  AI companion vs therapist
                </Link>
              </li>
              <li>
                <Link href="/blog/building-care-into-ai" style={sInternalLink}>
                  Building care into AI
                </Link>
              </li>
              <li>
                <Link href="/blog/sovereign-ai-explained" style={sInternalLink}>
                  Sovereign AI explained
                </Link>
              </li>
            </ul>
          </nav>

          {/* ── Disclaimer ───────────────────────────────────────────────────── */}
          <div style={sDisclaimerBlock}>
            <p style={sDisclaimerText}>
              <strong style={{ color: "rgba(245,240,232,0.5)" }}>Medical disclaimer:</strong>{" "}
              This article is for informational purposes only and does not constitute medical
              advice, diagnosis, or treatment. Eating disorders are serious mental health
              conditions requiring specialist clinical care. If you believe you or someone
              you know may have an eating disorder, please contact your GP or Beat Eating
              Disorders (0808 801 0677) as soon as possible. MEOK AI LABS is a technology
              company, not a healthcare provider. MEOK is a between-session companion and
              supplement to professional treatment, not a replacement for it.
            </p>
          </div>

        </div>
      </main>
    </>
  )
}
