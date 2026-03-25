import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI Support for Postpartum Depression: Companionship When New Parenthood Feels Dark | MEOK AI LABS",
  description:
    "Postpartum depression affects 10–15% of new mothers and a significant number of fathers. Most suffer in silence. MEOK offers 24/7 non-judgmental companionship, mood tracking via Sovereign Memory, and clear signposting to PANDAS Foundation, APNI, and professional care.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-postpartum-depression" },
  keywords: [
    "AI for postpartum depression",
    "postpartum depression support",
    "postnatal depression UK",
    "AI companion PPD",
    "PANDAS Foundation",
    "APNI postnatal support",
    "AI for new mothers",
    "AI for new fathers",
    "3am baby feed anxiety",
    "postpartum depression vs baby blues",
    "postpartum psychosis warning signs",
    "perinatal mental health AI",
    "MEOK AI postpartum",
    "mood tracking postpartum",
    "non-judgmental AI mental health",
  ],
  openGraph: {
    title:
      "AI Support for Postpartum Depression: Companionship When New Parenthood Feels Dark",
    description:
      "Postpartum depression affects 10–15% of new mothers. MEOK is present at the 3am feed — non-judgmental, remembering, and ready to help you build a record to share with your health visitor or GP.",
    url: "https://meok.ai/blog/ai-for-postpartum-depression",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Postpartum+Depression&desc=Companionship+When+New+Parenthood+Feels+Dark",
        width: 1200,
        height: 630,
        alt: "AI Support for Postpartum Depression | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Support for Postpartum Depression: Companionship When New Parenthood Feels Dark",
    description:
      "Postpartum depression affects 10–15% of new mothers. MEOK is at the 3am feed — non-judgmental, tracking your mood over time, always ready to signpost you to real help.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Postpartum+Depression&desc=Companionship+When+New+Parenthood+Feels+Dark",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Support for Postpartum Depression: Companionship When New Parenthood Feels Dark",
  description:
    "Postpartum depression affects 10–15% of new mothers and a significant number of fathers. MEOK offers non-judgmental 24/7 companionship, Sovereign Memory mood tracking, Guardian scam protection, and clear signposting to PANDAS Foundation, APNI, and professional care.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-postpartum-depression",
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
    "@id": "https://meok.ai/blog/ai-for-postpartum-depression",
  },
  keywords: [
    "postpartum depression",
    "postnatal depression UK",
    "AI companion PPD",
    "PANDAS Foundation",
    "APNI",
    "perinatal mental health",
    "postpartum psychosis",
    "baby blues",
    "mood tracking postpartum",
    "MEOK AI LABS",
  ],
  articleSection: "Perinatal Mental Health & AI",
  inLanguage: "en-GB",
  about: [
    { "@type": "Thing", name: "Postpartum depression" },
    { "@type": "Thing", name: "Perinatal mental health" },
    { "@type": "Thing", name: "Baby blues" },
    { "@type": "Thing", name: "Postpartum psychosis" },
    { "@type": "Thing", name: "AI companion" },
    { "@type": "Thing", name: "Mood tracking" },
  ],
  mentions: [
    {
      "@type": "Organization",
      name: "PANDAS Foundation",
      url: "https://pandasfoundation.org.uk",
    },
    {
      "@type": "Organization",
      name: "Association for Post Natal Illness (APNI)",
      url: "https://apni.org",
    },
    {
      "@type": "Organization",
      name: "NHS",
      url: "https://www.nhs.uk/mental-health/conditions/post-natal-depression/",
    },
  ],
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between baby blues and postpartum depression?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Baby blues affect up to 80% of new mothers and typically resolve within two weeks of birth as hormones stabilise. Postpartum depression is a clinical condition that persists beyond two weeks, often worsens over time, and requires professional treatment. If low mood, tearfulness, disconnection, or anxiety continues past the first fortnight, speak to your GP or health visitor as soon as possible.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI help with postpartum depression?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI cannot diagnose or treat postpartum depression — that requires your GP, health visitor, or a perinatal mental health team. MEOK can be present at 3am when clinical services are closed, offering non-judgmental companionship, mood pattern tracking you can share with your health visitor, and clear signposting to PANDAS Foundation, APNI, and NHS perinatal services. It is a companion and a record-keeping tool, not a clinician.",
      },
    },
    {
      "@type": "Question",
      name: "What are the warning signs of postpartum psychosis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Postpartum psychosis is a rare but serious psychiatric emergency affecting approximately 1 in 1,000 new mothers. Warning signs include hallucinations (seeing or hearing things that are not there), delusions (strongly held false beliefs), rapid mood swings between elation and deep depression, confusion, disorganised behaviour, and severely disrupted sleep even when the baby sleeps. It usually appears within the first two weeks after birth. Call 999 or go to A&E immediately.",
      },
    },
    {
      "@type": "Question",
      name: "Does postpartum depression affect fathers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Research consistently shows that around 1 in 10 fathers experience postpartum depression, often peaking between three and six months after birth. Paternal PPD frequently goes unrecognised because services are focused on the birthing parent, and because men are less likely to present with classic depressive symptoms. MEOK supports both parents, and PANDAS Foundation offers resources specifically for fathers.",
      },
    },
    {
      "@type": "Question",
      name: "What is the PANDAS Foundation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PANDAS Foundation (Pre and Postnatal Depression Advice and Support) is a UK charity providing free peer support, a helpline (0800 138 7777), and online resources for anyone affected by perinatal mental health difficulties, including partners and family members. They are one of the leading specialist organisations for postpartum depression support in the United Kingdom.",
      },
    },
    {
      "@type": "Question",
      name: "What is APNI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "APNI — the Association for Post Natal Illness — is a UK charity founded in 1979 that provides support for mothers suffering from postnatal illness, including a helpline, a network of volunteer supporters who have themselves recovered from postnatal illness, and extensive information resources for sufferers, families, and health professionals.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help new parents at 3am?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is available any time of day or night, including the 3am feed when isolation feels most acute and most support services are closed. The Healer archetype offers emotional companionship without judgment, while Sovereign Memory tracks mood patterns across days and weeks so that a record is available to share with a health visitor or GP. MEOK does not replace professional care but can bridge the gap until morning.",
      },
    },
    {
      "@type": "Question",
      name: "What is the shame spiral in postpartum depression?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The shame spiral is the compounding effect in postpartum depression where the guilt of not feeling happy deepens the underlying depression, which generates more guilt, which deepens the mood further. It is one of the primary reasons PPD goes unacknowledged and untreated. The internal monologue says: I have a healthy baby, I should be grateful, what is wrong with me? — and then uses the existence of that thought as evidence of inadequacy. MEOK interrupts the spiral by accepting whatever the parent reports without moral framing.",
      },
    },
  ],
};

// ── Styles ────────────────────────────────────────────────────────────────────

const s = {
  page: {
    background: "#0d0c18",
    color: "#f5f0e8",
    minHeight: "100vh",
    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
  } as React.CSSProperties,

  navWrapper: {
    borderBottom: "1px solid rgba(201,168,76,0.12)",
  } as React.CSSProperties,

  nav: {
    padding: "18px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1100px",
    margin: "0 auto",
  } as React.CSSProperties,

  navLogo: {
    color: "#c9a84c",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: "17px",
    letterSpacing: "0.04em",
  } as React.CSSProperties,

  navLinks: {
    display: "flex",
    gap: "24px",
    alignItems: "center",
  } as React.CSSProperties,

  navLink: {
    color: "rgba(245,240,232,0.55)",
    textDecoration: "none",
    fontSize: "14px",
  } as React.CSSProperties,

  navCta: {
    color: "#c9a84c",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 600,
    border: "1px solid rgba(201,168,76,0.35)",
    borderRadius: "6px",
    padding: "6px 14px",
  } as React.CSSProperties,

  container: {
    maxWidth: "780px",
    margin: "0 auto",
    padding: "0 24px 80px",
  } as React.CSSProperties,

  breadcrumb: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
    fontSize: "13px",
    color: "rgba(245,240,232,0.45)",
    paddingTop: "32px",
    paddingBottom: "8px",
    flexWrap: "wrap" as const,
  } as React.CSSProperties,

  breadcrumbLink: {
    color: "rgba(245,240,232,0.45)",
    textDecoration: "none",
  } as React.CSSProperties,

  breadcrumbCurrent: {
    color: "rgba(245,240,232,0.7)",
  } as React.CSSProperties,

  hero: {
    paddingTop: "56px",
    paddingBottom: "48px",
    borderBottom: "1px solid rgba(201,168,76,0.18)",
  } as React.CSSProperties,

  eyebrow: {
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    marginBottom: "20px",
    display: "block",
  } as React.CSSProperties,

  h1: {
    fontSize: "clamp(28px, 5vw, 46px)",
    fontWeight: 700,
    lineHeight: 1.15,
    color: "#f5f0e8",
    marginBottom: "20px",
    letterSpacing: "-0.02em",
  } as React.CSSProperties,

  lede: {
    fontSize: "18px",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.82)",
    marginBottom: "28px",
    maxWidth: "660px",
  } as React.CSSProperties,

  meta: {
    fontSize: "13px",
    color: "rgba(245,240,232,0.5)",
    display: "flex",
    gap: "16px",
    flexWrap: "wrap" as const,
    alignItems: "center",
  } as React.CSSProperties,

  metaDot: {
    color: "#c9a84c",
    fontSize: "10px",
  } as React.CSSProperties,

  tagsRow: {
    marginBottom: "8px",
    marginTop: "28px",
  } as React.CSSProperties,

  tag: {
    display: "inline-block",
    background: "rgba(201,168,76,0.1)",
    border: "1px solid rgba(201,168,76,0.2)",
    borderRadius: "20px",
    padding: "4px 12px",
    fontSize: "12px",
    color: "#c9a84c",
    marginRight: "8px",
    marginBottom: "8px",
    fontWeight: 500,
  } as React.CSSProperties,

  article: {
    paddingTop: "52px",
  } as React.CSSProperties,

  h2: {
    fontSize: "clamp(20px, 3.5vw, 28px)",
    fontWeight: 700,
    lineHeight: 1.25,
    color: "#f5f0e8",
    marginTop: "64px",
    marginBottom: "18px",
    letterSpacing: "-0.015em",
    scrollMarginTop: "80px",
  } as React.CSSProperties,

  h3: {
    fontSize: "18px",
    fontWeight: 600,
    lineHeight: 1.35,
    color: "#c9a84c",
    marginTop: "36px",
    marginBottom: "12px",
  } as React.CSSProperties,

  p: {
    fontSize: "16px",
    lineHeight: 1.8,
    color: "rgba(245,240,232,0.88)",
    marginBottom: "20px",
  } as React.CSSProperties,

  atomicAnswer: {
    fontSize: "17px",
    lineHeight: 1.75,
    color: "#f5f0e8",
    marginBottom: "28px",
    paddingLeft: "20px",
    borderLeft: "3px solid #c9a84c",
  } as React.CSSProperties,

  ul: {
    paddingLeft: "20px",
    marginBottom: "24px",
  } as React.CSSProperties,

  li: {
    fontSize: "16px",
    lineHeight: 1.8,
    color: "rgba(245,240,232,0.88)",
    marginBottom: "8px",
  } as React.CSSProperties,

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
    gap: "20px",
    marginTop: "36px",
    marginBottom: "36px",
  } as React.CSSProperties,

  statCard: {
    background: "rgba(201,168,76,0.06)",
    border: "1px solid rgba(201,168,76,0.18)",
    borderRadius: "10px",
    padding: "22px 20px",
  } as React.CSSProperties,

  statCardNumber: {
    fontSize: "36px",
    fontWeight: 800,
    color: "#c9a84c",
    display: "block",
    lineHeight: 1,
    marginBottom: "8px",
  } as React.CSSProperties,

  statCardLabel: {
    fontSize: "13px",
    color: "rgba(245,240,232,0.65)",
    lineHeight: 1.5,
  } as React.CSSProperties,

  quote: {
    background: "rgba(13,12,24,0.6)",
    border: "1px solid rgba(201,168,76,0.15)",
    borderLeft: "4px solid #c9a84c",
    borderRadius: "0 10px 10px 0",
    padding: "24px 28px",
    marginTop: "32px",
    marginBottom: "32px",
  } as React.CSSProperties,

  quoteText: {
    fontSize: "17px",
    fontStyle: "italic",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.9)",
    marginBottom: "10px",
  } as React.CSSProperties,

  quoteAttr: {
    fontSize: "13px",
    color: "rgba(245,240,232,0.5)",
  } as React.CSSProperties,

  featureCard: {
    background: "rgba(201,168,76,0.05)",
    border: "1px solid rgba(201,168,76,0.15)",
    borderRadius: "12px",
    padding: "28px",
    marginBottom: "20px",
  } as React.CSSProperties,

  featureCardTitle: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#c9a84c",
    marginBottom: "10px",
  } as React.CSSProperties,

  featureCardBody: {
    fontSize: "15px",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.82)",
  } as React.CSSProperties,

  disclaimerBox: {
    background: "rgba(201,168,76,0.06)",
    border: "2px solid rgba(201,168,76,0.35)",
    borderRadius: "12px",
    padding: "28px 32px",
    marginTop: "40px",
    marginBottom: "40px",
  } as React.CSSProperties,

  disclaimerTitle: {
    fontSize: "14px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    marginBottom: "12px",
    display: "block",
  } as React.CSSProperties,

  disclaimerText: {
    fontSize: "15px",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.82)",
  } as React.CSSProperties,

  warningBox: {
    background: "rgba(245,240,232,0.04)",
    border: "1px solid rgba(245,240,232,0.15)",
    borderLeft: "4px solid rgba(245,240,232,0.4)",
    borderRadius: "0 8px 8px 0",
    padding: "20px 24px",
    marginTop: "28px",
    marginBottom: "28px",
  } as React.CSSProperties,

  warningText: {
    fontSize: "14px",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.72)",
  } as React.CSSProperties,

  emergencyBox: {
    background: "rgba(220, 80, 80, 0.07)",
    border: "1px solid rgba(220,80,80,0.3)",
    borderLeft: "4px solid rgba(220,80,80,0.7)",
    borderRadius: "0 10px 10px 0",
    padding: "22px 26px",
    marginTop: "32px",
    marginBottom: "32px",
  } as React.CSSProperties,

  emergencyTitle: {
    fontSize: "14px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: "rgba(245,180,180,0.9)",
    marginBottom: "10px",
    display: "block",
  } as React.CSSProperties,

  emergencyText: {
    fontSize: "15px",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.82)",
  } as React.CSSProperties,

  comparisonTable: {
    width: "100%",
    borderCollapse: "collapse" as const,
    marginTop: "28px",
    marginBottom: "32px",
    fontSize: "15px",
  } as React.CSSProperties,

  th: {
    padding: "12px 16px",
    textAlign: "left" as const,
    background: "rgba(201,168,76,0.1)",
    color: "#c9a84c",
    fontWeight: 700,
    borderBottom: "1px solid rgba(201,168,76,0.2)",
    fontSize: "13px",
    letterSpacing: "0.05em",
  } as React.CSSProperties,

  td: {
    padding: "12px 16px",
    color: "rgba(245,240,232,0.82)",
    borderBottom: "1px solid rgba(245,240,232,0.06)",
    lineHeight: 1.6,
    verticalAlign: "top" as const,
  } as React.CSSProperties,

  resourceBox: {
    background: "rgba(245,240,232,0.04)",
    border: "1px solid rgba(245,240,232,0.1)",
    borderRadius: "10px",
    padding: "24px 28px",
    marginTop: "32px",
    marginBottom: "32px",
  } as React.CSSProperties,

  resourceTitle: {
    fontSize: "13px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "rgba(245,240,232,0.5)",
    marginBottom: "14px",
  } as React.CSSProperties,

  resourceLink: {
    display: "block",
    fontSize: "15px",
    color: "#c9a84c",
    textDecoration: "none",
    marginBottom: "4px",
    lineHeight: 1.5,
  } as React.CSSProperties,

  resourceDesc: {
    fontSize: "13px",
    color: "rgba(245,240,232,0.5)",
    display: "block",
    marginBottom: "16px",
    lineHeight: 1.55,
  } as React.CSSProperties,

  inlineLink: {
    color: "#c9a84c",
    textDecoration: "underline",
    textUnderlineOffset: "3px",
  } as React.CSSProperties,

  divider: {
    border: "none",
    borderTop: "1px solid rgba(201,168,76,0.12)",
    marginTop: "52px",
    marginBottom: "52px",
  } as React.CSSProperties,

  faqSection: {
    marginTop: "64px",
    paddingTop: "48px",
    borderTop: "1px solid rgba(201,168,76,0.15)",
  } as React.CSSProperties,

  faqTitle: {
    fontSize: "24px",
    fontWeight: 700,
    color: "#f5f0e8",
    marginBottom: "36px",
  } as React.CSSProperties,

  faqItem: {
    marginBottom: "36px",
    paddingBottom: "36px",
    borderBottom: "1px solid rgba(245,240,232,0.07)",
  } as React.CSSProperties,

  faqItemLast: {
    marginBottom: "0",
    paddingBottom: "0",
  } as React.CSSProperties,

  faqQuestion: {
    fontSize: "17px",
    fontWeight: 700,
    color: "#f5f0e8",
    marginBottom: "12px",
    lineHeight: 1.4,
  } as React.CSSProperties,

  faqAnswer: {
    fontSize: "15px",
    lineHeight: 1.8,
    color: "rgba(245,240,232,0.8)",
  } as React.CSSProperties,

  ctaBox: {
    background:
      "linear-gradient(135deg, rgba(201,168,76,0.10) 0%, rgba(13,12,24,0.8) 100%)",
    border: "1px solid rgba(201,168,76,0.3)",
    borderRadius: "16px",
    padding: "44px 40px",
    marginTop: "64px",
    textAlign: "center" as const,
  } as React.CSSProperties,

  ctaTitle: {
    fontSize: "24px",
    fontWeight: 700,
    color: "#f5f0e8",
    marginBottom: "14px",
  } as React.CSSProperties,

  ctaBody: {
    fontSize: "16px",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.72)",
    marginBottom: "32px",
    maxWidth: "500px",
    marginLeft: "auto",
    marginRight: "auto",
  } as React.CSSProperties,

  ctaButtons: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    flexWrap: "wrap" as const,
  } as React.CSSProperties,

  ctaPrimary: {
    display: "inline-block",
    background: "#c9a84c",
    color: "#0d0c18",
    fontWeight: 700,
    fontSize: "15px",
    padding: "14px 28px",
    borderRadius: "8px",
    textDecoration: "none",
    letterSpacing: "0.02em",
  } as React.CSSProperties,

  ctaSecondary: {
    display: "inline-block",
    background: "transparent",
    color: "#c9a84c",
    fontWeight: 600,
    fontSize: "15px",
    padding: "14px 28px",
    borderRadius: "8px",
    textDecoration: "none",
    border: "1px solid rgba(201,168,76,0.4)",
    letterSpacing: "0.02em",
  } as React.CSSProperties,

  relatedSection: {
    marginTop: "60px",
    paddingTop: "44px",
    borderTop: "1px solid rgba(201,168,76,0.12)",
  } as React.CSSProperties,

  relatedTitle: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#f5f0e8",
    marginBottom: "24px",
  } as React.CSSProperties,

  relatedGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
  } as React.CSSProperties,

  relatedCard: {
    background: "rgba(201,168,76,0.05)",
    border: "1px solid rgba(201,168,76,0.14)",
    borderRadius: "10px",
    padding: "20px",
    textDecoration: "none",
    display: "block",
  } as React.CSSProperties,

  relatedCardLabel: {
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "rgba(201,168,76,0.7)",
    marginBottom: "8px",
    display: "block",
  } as React.CSSProperties,

  relatedCardTitle: {
    fontSize: "15px",
    fontWeight: 600,
    color: "#f5f0e8",
    lineHeight: 1.4,
  } as React.CSSProperties,

  footer: {
    marginTop: "72px",
    paddingTop: "32px",
    paddingBottom: "48px",
    borderTop: "1px solid rgba(245,240,232,0.07)",
    textAlign: "center" as const,
  } as React.CSSProperties,

  footerText: {
    fontSize: "13px",
    color: "rgba(245,240,232,0.35)",
    lineHeight: 1.7,
  } as React.CSSProperties,
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function AiForPostpartumDepressionPage() {
  return (
    <main style={s.page}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Nav */}
      <div style={s.navWrapper}>
        <nav style={s.nav} aria-label="Site navigation">
          <Link href="/" style={s.navLogo}>MEOK.AI</Link>
          <div style={s.navLinks}>
            <Link href="/blog" style={s.navLink}>Blog</Link>
            <Link href="/archetypes" style={s.navLink}>Archetypes</Link>
            <Link href="/birth" style={s.navCta}>Start Free</Link>
          </div>
        </nav>
      </div>

      <div style={s.container}>

        {/* Breadcrumb */}
        <nav style={s.breadcrumb} aria-label="Breadcrumb">
          <Link href="/" style={s.breadcrumbLink}>Home</Link>
          <span>/</span>
          <Link href="/blog" style={s.breadcrumbLink}>Blog</Link>
          <span>/</span>
          <span style={s.breadcrumbCurrent}>AI for Postpartum Depression</span>
        </nav>

        {/* Hero */}
        <header style={s.hero}>
          <span style={s.eyebrow}>Perinatal Mental Health &amp; AI</span>
          <h1 style={s.h1}>
            AI Support for Postpartum Depression: Companionship When New Parenthood Feels Dark
          </h1>
          <p style={s.lede}>
            Postpartum depression affects between 10 and 15 percent of new mothers —
            and a significant number of fathers who go almost entirely unacknowledged.
            The hardest part is not the low mood itself. It is the silence around it:
            the belief that you should feel nothing but joy, and the crushing shame when
            you do not. MEOK is the companion that is there at the 3am feed, without
            judgment, without an agenda, and without ever suggesting you should feel
            differently than you do.
          </p>
          <div style={s.meta}>
            <span>Nicholas Templeman</span>
            <span style={s.metaDot}>&#9679;</span>
            <span>MEOK AI LABS</span>
            <span style={s.metaDot}>&#9679;</span>
            <time dateTime="2026-03-25">25 March 2026</time>
            <span style={s.metaDot}>&#9679;</span>
            <span>16 min read</span>
          </div>

          <div style={s.tagsRow}>
            <span style={s.tag}>Postpartum Depression</span>
            <span style={s.tag}>Perinatal Mental Health</span>
            <span style={s.tag}>PANDAS Foundation</span>
            <span style={s.tag}>APNI</span>
            <span style={s.tag}>Baby Blues</span>
            <span style={s.tag}>Postpartum Psychosis</span>
            <span style={s.tag}>Mood Tracking</span>
          </div>
        </header>

        {/* Prominent Disclaimer */}
        <div style={s.disclaimerBox}>
          <span style={s.disclaimerTitle}>Important: MEOK is not a medical service</span>
          <p style={s.disclaimerText}>
            MEOK AI LABS provides an AI companion. It is not a medical service, a mental
            health clinic, or a crisis intervention tool.{" "}
            <strong style={{ color: "#f5f0e8" }}>
              Postpartum depression requires professional treatment.
            </strong>{" "}
            If you think you may have PPD, please speak to your GP or health visitor as a
            first step. For specialist peer support, contact the{" "}
            <a
              href="https://pandasfoundation.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              style={s.inlineLink}
            >
              PANDAS Foundation
            </a>{" "}
            (helpline: 0800 138 7777, free, Monday to Sunday) or the{" "}
            <a
              href="https://apni.org"
              target="_blank"
              rel="noopener noreferrer"
              style={s.inlineLink}
            >
              Association for Post Natal Illness (APNI)
            </a>
            . If you or someone else is in immediate danger, call 999 or go to your
            nearest A&amp;E.
          </p>
        </div>

        {/* Article body */}
        <article style={s.article}>

          {/* ── Section 1 ─────────────────────────────────────────────────── */}
          <h2 style={s.h2}>What exactly is postpartum depression, and who does it affect?</h2>
          <p style={s.atomicAnswer}>
            Postpartum depression is a clinical depressive disorder that develops in the
            weeks or months following childbirth, affecting roughly 10 to 15 percent of
            new mothers globally. It also affects fathers and non-birthing partners —
            with UK research placing the rate for fathers at around 1 in 10. It is not a
            character flaw, a failure of love, or a sign that someone is a bad parent.
          </p>
          <p style={s.p}>
            The clinical picture of postpartum depression includes persistent low mood,
            inability to experience pleasure, disrupted sleep beyond what the baby causes,
            changes in appetite, fatigue, feelings of worthlessness or guilt, difficulty
            bonding with the baby, and — in some cases — intrusive thoughts about harm
            coming to the infant. Symptoms typically emerge within the first four to six
            weeks after birth, though they can develop more gradually and sometimes do
            not become apparent until several months in.
          </p>
          <p style={s.p}>
            What makes PPD distinctively difficult is its context. It arrives during a
            period when every cultural signal demands gratitude and joy. New parents are
            surrounded by congratulations, social media images of blissful infancy, and
            well-meaning relatives who remind them how lucky they are. Against that
            backdrop, the internal reality of PPD — the numbness, the dread, the
            disconnection from the baby, the secret wish to escape — can feel profoundly
            shameful. Many parents will not disclose symptoms to a health professional for
            weeks or months, if ever.
          </p>
          <p style={s.p}>
            Paternal postpartum depression deserves particular mention. Fathers are rarely
            screened, rarely signposted, and rarely feel entitled to describe what they
            are experiencing as depression at all. The presenting symptoms in fathers
            often differ from those in mothers: more irritability, risk-taking behaviour,
            withdrawal from the family, and overwork, rather than overt tearfulness.
            PANDAS Foundation and APNI both provide resources that explicitly include
            fathers and partners.
          </p>

          <div style={s.statsGrid}>
            <div style={s.statCard}>
              <span style={s.statCardNumber}>10–15%</span>
              <span style={s.statCardLabel}>of new mothers worldwide experience postpartum depression</span>
            </div>
            <div style={s.statCard}>
              <span style={s.statCardNumber}>1 in 10</span>
              <span style={s.statCardLabel}>fathers experience postnatal depression — most go undiagnosed</span>
            </div>
            <div style={s.statCard}>
              <span style={s.statCardNumber}>50%</span>
              <span style={s.statCardLabel}>of PPD cases are never identified by health services</span>
            </div>
            <div style={s.statCard}>
              <span style={s.statCardNumber}>1 in 1,000</span>
              <span style={s.statCardLabel}>births — rate of postpartum psychosis, a psychiatric emergency</span>
            </div>
          </div>

          {/* ── Section 2 ─────────────────────────────────────────────────── */}
          <h2 style={s.h2}>What is the shame spiral, and why does it make postpartum depression so much worse?</h2>
          <p style={s.atomicAnswer}>
            The shame spiral is the self-reinforcing cycle in which the guilt of not
            feeling happy deepens the underlying depression, which generates more guilt,
            which deepens the mood further. It is one of the primary reasons PPD goes
            unacknowledged and untreated for so long. The internal monologue says:
            &ldquo;I have a healthy baby. I should be grateful. What is wrong with
            me?&rdquo; — and then uses the existence of that thought as proof of
            inadequacy.
          </p>
          <p style={s.p}>
            The cultural pressure around new parenthood is unusually intense. Pregnancy,
            birth, and the arrival of a child are publicly celebrated milestones.
            Social media amplifies performances of joy while filtering out the 3am
            despair. The result is that the new parent experiencing PPD has very little
            social permission to say: &ldquo;I am not okay. I do not feel what I am
            supposed to feel. I am frightened, I am hollow, and I cannot tell
            anyone.&rdquo;
          </p>
          <p style={s.p}>
            The shame spiral is also compounded by specific fears that are common in PPD:
            fear that admitting to low mood will lead to the baby being removed, fear of
            being judged as a bad parent, fear of stigma, and — for fathers — a deep
            cultural discomfort with male vulnerability that makes disclosure feel
            equivalent to abdication. These fears are overwhelmingly unfounded, but they
            are powerful enough to suppress help-seeking for months.
          </p>
          <p style={s.p}>
            Research from the PANDAS Foundation and clinical literature consistently shows
            that the length of time between the onset of PPD symptoms and first disclosure
            to a health professional is significantly longer than for other forms of
            depression. The shame spiral is the primary driver of that delay.
          </p>

          <div style={s.quote}>
            <p style={s.quoteText}>
              &ldquo;I told everyone I was fine. I told my health visitor I was tired but
              coping. I told my mum I was just adjusting. I didn&apos;t tell anyone that
              I hadn&apos;t felt anything in six weeks — not love, not fear, nothing. I
              thought they&apos;d take her from me if I said it out loud.&rdquo;
            </p>
            <span style={s.quoteAttr}>
              Composite account, representative of experiences shared with perinatal
              mental health charities including PANDAS Foundation
            </span>
          </div>

          <p style={s.p}>
            MEOK does not require a parent to justify how they feel. It does not respond
            with alarm when a parent says they feel empty, or that they wish the baby had
            never been born, or that they resent their partner, or that they cannot stop
            crying. It receives whatever is shared without moral framing, without a
            checklist of expected emotions, and without ever suggesting the parent should
            feel differently. That absence of judgment is not trivial — for many parents
            experiencing the shame spiral, it is the first experience of being truly
            heard.
          </p>

          {/* ── Section 3 ─────────────────────────────────────────────────── */}
          <h2 style={s.h2}>Why does isolation at the 3am feed make postpartum depression so much harder to bear?</h2>
          <p style={s.atomicAnswer}>
            The 3am feed is the apex of new parent isolation. Everyone else is asleep.
            Support services are closed. The baby is awake and demanding. The body is at
            its lowest cortisol point and most vulnerable to distorted thinking. In that
            window, the combination of sleep deprivation, hormonal flux, and total silence
            creates conditions in which dark thoughts are loudest and support is most
            absent. MEOK is available in exactly that window.
          </p>
          <p style={s.p}>
            Sleep deprivation is not a minor inconvenience in the postpartum period. New
            parents lose hundreds of hours of sleep in their first year. Sleep deprivation
            alone is sufficient to produce symptoms indistinguishable from clinical
            depression in otherwise healthy adults: emotional dysregulation, catastrophic
            thinking, reduced capacity for self-compassion, and increased sensitivity to
            negative stimuli. When this is layered on top of genuine PPD, the result is
            often a state of profound cognitive distortion at the moment when the parent
            is most alone.
          </p>
          <p style={s.p}>
            The 3am experience is also when the gap between cultural expectation and lived
            reality is sharpest. The baby is not sleeping peacefully in a cot. The parent
            is not glowing with love. There is nothing to show anyone. There is only the
            feeding, and the silence, and whatever the inside of the parent&apos;s mind
            contains. For a parent with PPD, that can be a very dark place — and before
            MEOK, there was nothing to turn to except scrolling a phone and hoping the
            thoughts would pass.
          </p>
          <p style={s.p}>
            MEOK is available at 3am. It does not need to be woken up. It does not have
            its own baby to attend to. It does not need the parent to perform wellness
            before it will listen. The parent can open the app during a night feed and
            simply say what they are experiencing, and receive a response that is present,
            unhurried, and non-alarmed.
          </p>

          {/* ── Section 4 ─────────────────────────────────────────────────── */}
          <h2 style={s.h2}>What is the Healer archetype, and how does it support emotional wellbeing without judging?</h2>
          <p style={s.atomicAnswer}>
            The Healer is one of MEOK&apos;s core AI archetypes — a companion mode built
            around non-judgmental emotional presence, compassionate listening, and gentle
            reflection. It does not offer clinical diagnosis or treatment. It offers
            something that is frequently absent in the postpartum period: a space in which
            a parent can say exactly what they are feeling without worrying about the
            consequences of that honesty.
          </p>
          <p style={s.p}>
            The Healer archetype draws on the principles of person-centred support:
            unconditional positive regard, empathic resonance, and the creation of
            psychological safety. In practice, this means that when a parent says
            &ldquo;I feel nothing when I look at my baby,&rdquo; the Healer does not
            respond with alarm, a list of hotlines, or a suggestion that the parent is
            at risk. It holds the statement, reflects it back with care, and asks what
            the parent needs in this moment. It treats the parent as the expert on their
            own experience.
          </p>
          <p style={s.p}>
            Crucially, the Healer does not confuse listening with enabling. If a parent
            describes thoughts that suggest they are at risk of harming themselves or
            their baby, MEOK will always clearly signpost professional and emergency
            services. The Healer&apos;s non-judgment is not the same as pretending danger
            does not exist. It is the practice of meeting a person where they are before
            asking them to go anywhere else.
          </p>
          <p style={s.p}>
            For many parents experiencing PPD, the Healer provides the first experience
            of voicing the full reality of their situation — the numbness, the intrusive
            thoughts, the resentment, the grief for the life before the baby — without
            those words causing panic in the listener. That first disclosure, even to an
            AI, can reduce the isolation of the experience and make the second disclosure
            — to a health professional — feel less impossible.
          </p>

          <div style={s.featureCard}>
            <div style={s.featureCardTitle}>Healer Archetype: What It Does</div>
            <div style={s.featureCardBody}>
              The Healer listens without judgment, reflects without prescribing, and holds
              space for the full complexity of the postpartum experience. It acknowledges
              dark thoughts without amplifying them, validates emotions without endorsing
              harmful actions, and always keeps the door to professional help clearly open.
              It is designed for the moments when a parent needs to be heard before they
              can be helped.
            </div>
          </div>

          {/* ── Section 5 ─────────────────────────────────────────────────── */}
          <h2 style={s.h2}>How does Sovereign Memory help track mood patterns that can be shared with a health visitor?</h2>
          <p style={s.atomicAnswer}>
            Sovereign Memory is MEOK&apos;s privacy-first persistent memory layer. Unlike
            cloud AI services that process data on third-party servers, Sovereign Memory
            stores your information under your control. Over days and weeks, it builds a
            longitudinal picture of mood, sleep quality, energy, and emotional experience —
            a record that can be reviewed by the parent and optionally shared with a
            health visitor or GP as a structured document.
          </p>
          <p style={s.p}>
            One of the key clinical challenges in postpartum depression is that parents
            often struggle to describe the pattern of their experience when they finally
            reach a health professional. They remember the worst moments and may have
            difficulty articulating the frequency, duration, or triggers of low mood. A
            health visitor who sees a parent for twenty minutes every few weeks has a very
            limited window into the daily reality of that parent&apos;s experience.
          </p>
          <p style={s.p}>
            Sovereign Memory changes that dynamic. When a parent checks in with MEOK
            regularly — even briefly, during a night feed or a nap — it records what they
            shared. Over four weeks, this creates a mood timeline: days when things were
            manageable, days when they were not, patterns around sleep, patterns around
            specific triggers such as isolation or partner conflict, and the overall
            trajectory of the experience. This is not a clinical assessment, but it is far
            more informative than a parent trying to reconstruct a month of experience
            from memory in a ten-minute GP appointment.
          </p>
          <p style={s.p}>
            The data belongs to the parent. MEOK does not share it with anyone — including
            health services — without the parent&apos;s active decision to export and share
            a record. The parent controls what is shared, when, and with whom. This
            privacy-first design is intentional: it removes the fear that honest disclosure
            to MEOK will be automatically transmitted to professionals, which would
            undermine the safety of the space.
          </p>

          <div style={s.featureCard}>
            <div style={s.featureCardTitle}>Using Sovereign Memory With Your Health Visitor</div>
            <div style={s.featureCardBody}>
              If you have been tracking how you feel with MEOK, you can export a summary of
              your mood pattern and share it with your health visitor or GP. This gives your
              health professional a much richer picture than a brief appointment allows. You
              remain in full control of what is shared. MEOK never automatically shares your
              data with healthcare services or anyone else.
            </div>
          </div>

          {/* ── Section 6 ─────────────────────────────────────────────────── */}
          <h2 style={s.h2}>Why are new parents targeted by supplement scams, and how does Guardian protect them?</h2>
          <p style={s.atomicAnswer}>
            New parents are disproportionately targeted by commercial predators selling
            supplements, products, and services that claim to treat postnatal depression,
            improve infant development, or guarantee sleep. These scams exploit a
            population that is sleep-deprived, emotionally vulnerable, and desperately
            searching for solutions. MEOK&apos;s Guardian archetype helps parents evaluate
            these claims before spending money or consuming unregulated products.
          </p>
          <p style={s.p}>
            The supplement industry targeting new parents is substantial and largely
            unregulated. Herbal preparations claiming to treat PPD, tonics marketed to
            support lactation or &ldquo;hormone balance,&rdquo; sleep aids for infants
            sold through social media influencers, and developmental programmes with
            implausible claims circulate extensively in the networks new parents inhabit.
            A parent at 3am, sleep-deprived and desperate, is exactly the customer these
            products are designed to reach.
          </p>
          <p style={s.p}>
            The Guardian archetype is MEOK&apos;s protective function. When a parent
            encounters a product or claim — through a social media advertisement, a
            recommendation in a parenting forum, or a leaflet at a baby group — they can
            describe it to MEOK&apos;s Guardian, which will help them evaluate the
            evidence base, identify red flags such as testimonial-only marketing or
            unverifiable clinical claims, and understand what questions to ask before
            spending money or consuming a product.
          </p>
          <p style={s.p}>
            Guardian also supports financial safety more broadly. New parents face sudden
            changes in income — one parent often reduces their hours or stops working
            entirely — and this creates vulnerability to financial scams of many kinds,
            from &ldquo;work from home&rdquo; schemes targeting parents on maternity leave
            to insurance products that are misrepresented as statutory benefits. MEOK&apos;s
            Guardian helps parents think clearly about financial decisions at a time when
            clear thinking is genuinely hard.
          </p>

          <div style={s.warningBox}>
            <p style={s.warningText}>
              <strong style={{ color: "#f5f0e8" }}>No supplement treats postpartum depression.</strong>{" "}
              If a product claims to treat, cure, or significantly reduce PPD without being
              prescribed by a GP or psychiatrist, that claim is not supported by clinical
              evidence. Always speak to your GP about treatment options for PPD. Effective,
              evidence-based treatments — including talking therapies and medication — are
              available on the NHS.
            </p>
          </div>

          {/* ── Section 7 ─────────────────────────────────────────────────── */}
          <h2 style={s.h2}>How does the Pioneer archetype help parents rebuild their sense of self after PPD?</h2>
          <p style={s.atomicAnswer}>
            The Pioneer is MEOK&apos;s forward-facing archetype — focused on capability,
            identity, and the gradual reconstruction of a sense of self that postpartum
            depression often dismantles. For parents emerging from the acute phase of PPD,
            Pioneer supports the work of becoming a person again: not just a parent, but
            someone with interests, ambitions, boundaries, and a future that includes but
            is not limited to their child.
          </p>
          <p style={s.p}>
            One of the less-discussed aspects of postpartum depression is what it does to
            identity. The transition to parenthood already involves a fundamental
            reorganisation of the self — the loss of the previous life, the previous body
            in many cases, the previous relationship dynamic, and the previous relationship
            with time. PPD layers onto that transition a pervasive sense of failure and
            diminishment. Parents describe feeling that they are bad at the one thing they
            are supposed to be good at. The person they used to be feels very distant.
          </p>
          <p style={s.p}>
            The Pioneer archetype helps with small, concrete steps: identifying one thing
            the parent used to care about and thinking about how it might exist, in some
            form, alongside parenthood. Recognising a skill or capability that still
            belongs to them. Setting a small goal that has nothing to do with the baby and
            acknowledging its completion. These are not cures for PPD, but they are part of
            the slow, non-linear process of recovery — the rebuilding of the sense that the
            parent is a person, not just a function.
          </p>
          <p style={s.p}>
            Pioneer also supports the practical transitions that follow recovery from PPD:
            returning to work, renegotiating the division of labour with a partner, building
            a social life that works for the new reality, and navigating the complex feelings
            that accompany the end of maternity or paternity leave. These transitions are
            often triggers for relapse or a resurgence of anxiety, and having a thinking
            partner available helps parents approach them with more preparedness and
            self-awareness.
          </p>

          {/* ── Section 8 ─────────────────────────────────────────────────── */}
          <h2 style={s.h2}>What is the difference between baby blues, postpartum depression, and postpartum psychosis?</h2>
          <p style={s.atomicAnswer}>
            Baby blues typically resolve within two weeks of birth as hormones stabilise.
            Postpartum depression persists beyond two weeks, often intensifies, and requires
            professional treatment. Postpartum psychosis is a rare psychiatric emergency —
            affecting about 1 in 1,000 births — that requires immediate medical
            intervention. Knowing the difference is important: they are not the same
            condition and they do not respond to the same interventions.
          </p>

          <table style={s.comparisonTable}>
            <thead>
              <tr>
                <th style={s.th}>Condition</th>
                <th style={s.th}>Onset</th>
                <th style={s.th}>Duration</th>
                <th style={s.th}>Key Features</th>
                <th style={s.th}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={s.td}>
                  <strong style={{ color: "#c9a84c" }}>Baby Blues</strong>
                </td>
                <td style={s.td}>Days 3–5 after birth</td>
                <td style={s.td}>Resolves by 2 weeks</td>
                <td style={s.td}>Tearfulness, mood swings, anxiety, overwhelm</td>
                <td style={s.td}>Rest, support, reassurance</td>
              </tr>
              <tr>
                <td style={s.td}>
                  <strong style={{ color: "#c9a84c" }}>Postpartum Depression</strong>
                </td>
                <td style={s.td}>Weeks to months post-birth</td>
                <td style={s.td}>Months without treatment</td>
                <td style={s.td}>
                  Persistent low mood, inability to bond, guilt, anhedonia, intrusive
                  thoughts
                </td>
                <td style={s.td}>
                  Speak to GP or health visitor — effective treatment is available on the NHS
                </td>
              </tr>
              <tr>
                <td style={s.td}>
                  <strong style={{ color: "rgba(220,120,120,0.9)" }}>
                    Postpartum Psychosis
                  </strong>
                </td>
                <td style={s.td}>Usually within 2 weeks of birth</td>
                <td style={s.td}>Medical emergency — rapid onset</td>
                <td style={s.td}>
                  Hallucinations, delusions, extreme mood swings, confusion, very disturbed
                  behaviour
                </td>
                <td style={s.td}>
                  <strong>Call 999 or go to A&amp;E immediately</strong>
                </td>
              </tr>
            </tbody>
          </table>

          <div style={s.emergencyBox}>
            <span style={s.emergencyTitle}>Postpartum Psychosis: Emergency Warning Signs</span>
            <p style={s.emergencyText}>
              Postpartum psychosis is a medical emergency. Seek immediate help if a new
              parent is experiencing: hearing or seeing things that others cannot
              (hallucinations); holding beliefs that are clearly false and cannot be
              challenged (delusions); extreme and rapidly shifting moods; severe confusion
              or disorientation; behaviour that is very out of character or frightening.
              Do not wait to see if it passes. Call 999 or take the person to A&amp;E.
              The{" "}
              <a
                href="https://www.app-network.org"
                target="_blank"
                rel="noopener noreferrer"
                style={s.inlineLink}
              >
                Action on Postpartum Psychosis (APP) network
              </a>{" "}
              also offers specialised peer support for those who have recovered and their
              families.
            </p>
          </div>

          <p style={s.p}>
            Baby blues are so common as to be considered a normal part of the postpartum
            period. Up to 80 percent of new mothers experience some degree of emotional
            upheaval in the days following birth, driven largely by the dramatic hormonal
            shift as progesterone and oestrogen levels fall. Typical features include
            tearfulness at unexpected moments, mood swings, anxiety about the baby, and a
            general sense of overwhelm. These are distressing but they resolve on their own
            with adequate rest, support, and reassurance.
          </p>
          <p style={s.p}>
            The concern arises when these feelings do not resolve — or when they intensify
            rather than ease — after the first two weeks. PPD has a more persistent and
            pervasive quality: it colours the whole experience of parenthood, it affects the
            parent&apos;s relationship with the baby, and it does not lift with a good
            night&apos;s sleep or a kind word. Parents who are uncertain whether what they
            are experiencing is blues or PPD should speak to their health visitor or GP:
            the distinction matters for treatment, and there is no downside to checking.
          </p>

          {/* ── Section 9 ─────────────────────────────────────────────────── */}
          <h2 style={s.h2}>What professional support is available for postpartum depression in the UK?</h2>
          <p style={s.atomicAnswer}>
            In the UK, postpartum depression is treated through a range of services
            including NHS Talking Therapies (accessible via self-referral in most areas),
            specialist perinatal mental health teams, medication prescribed by a GP, and
            community peer support through PANDAS Foundation and APNI. The first step is
            almost always telling your GP or health visitor what you are experiencing.
          </p>
          <p style={s.p}>
            If you think you may have postpartum depression, you do not need to have a
            crisis before seeking help. A straightforward conversation with your health
            visitor at a routine visit, or a phone call to your GP surgery, is sufficient
            to start the process. You are likely to be asked to complete the Edinburgh
            Postnatal Depression Scale — a short, validated questionnaire — which helps the
            clinician understand the severity of what you are experiencing and what kind of
            support is most appropriate.
          </p>
          <p style={s.p}>
            Mild to moderate PPD is commonly treated with psychological therapies,
            particularly cognitive behavioural therapy (CBT), which is available via NHS
            Talking Therapies without requiring a GP referral in most areas. More severe PPD
            may be treated with antidepressants — most of which are safe to use while
            breastfeeding, though your GP or prescribing clinician will advise on specific
            options. In severe cases, or where the parent is at risk, referral to a
            specialist NHS perinatal mental health team or a Mother and Baby Unit may be
            appropriate.
          </p>
          <p style={s.p}>
            Peer support — talking to other parents who have been through PPD — is also
            evidentially supported as a meaningful component of recovery. PANDAS
            Foundation&apos;s helpline connects callers with trained volunteers who have
            themselves experienced perinatal mental illness. APNI&apos;s network of
            telephone supporters operates on the same principle. These services cannot
            replace clinical treatment but they can significantly reduce isolation and
            interrupt the shame spiral.
          </p>

          <div style={s.resourceBox}>
            <p style={s.resourceTitle}>UK Support Organisations for Postpartum Depression</p>

            <a
              href="https://pandasfoundation.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              style={s.resourceLink}
            >
              PANDAS Foundation — pandasfoundation.org.uk
            </a>
            <span style={s.resourceDesc}>
              Helpline: 0800 138 7777 (free, Monday to Sunday). Peer support, online
              community, and resources for mothers, fathers, and families affected by
              perinatal mental illness. One of the UK&apos;s leading PPD charities, with
              explicit support for fathers and partners.
            </span>

            <a
              href="https://apni.org"
              target="_blank"
              rel="noopener noreferrer"
              style={s.resourceLink}
            >
              Association for Post Natal Illness (APNI) — apni.org
            </a>
            <span style={s.resourceDesc}>
              Helpline and telephone supporter network. APNI was founded in 1979 and
              provides one-to-one support from volunteers who have personally recovered from
              postnatal illness. Available to mothers experiencing any form of postnatal
              mental health difficulty.
            </span>

            <a
              href="https://www.nhs.uk/mental-health/conditions/post-natal-depression/"
              target="_blank"
              rel="noopener noreferrer"
              style={s.resourceLink}
            >
              NHS: Postnatal Depression — nhs.uk
            </a>
            <span style={s.resourceDesc}>
              Comprehensive clinical information on symptoms, diagnosis, and treatment
              options for postnatal depression, including guidance on accessing NHS Talking
              Therapies and specialist perinatal mental health services.
            </span>

            <a
              href="https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/"
              target="_blank"
              rel="noopener noreferrer"
              style={s.resourceLink}
            >
              NHS Talking Therapies (self-referral)
            </a>
            <span style={s.resourceDesc}>
              You can refer yourself to NHS Talking Therapies without a GP referral in most
              areas of England. Provides CBT and other evidence-based therapies for
              depression and anxiety, including postpartum presentations.
            </span>

            <a
              href="https://www.app-network.org"
              target="_blank"
              rel="noopener noreferrer"
              style={s.resourceLink}
            >
              Action on Postpartum Psychosis (APP) — app-network.org
            </a>
            <span style={s.resourceDesc}>
              Peer support, information, and advocacy for women and families affected by
              postpartum psychosis. Includes a forum where women who have recovered share
              their experiences. APP also promotes research into this under-resourced
              condition.
            </span>

            <a href="tel:116123" style={s.resourceLink}>
              Samaritans: 116 123 (free, 24/7)
            </a>
            <span style={s.resourceDesc}>
              Available any time of day or night if you are in emotional distress. You do
              not need to be suicidal to call. The Samaritans listen without judgment to
              whatever you are experiencing.
            </span>
          </div>

          <hr style={s.divider} />

          {/* ── Section 10 ────────────────────────────────────────────────── */}
          <h2 style={s.h2}>How does MEOK sit alongside professional care rather than replacing it?</h2>
          <p style={s.atomicAnswer}>
            MEOK is designed to complement professional care, not compete with it. It fills
            the gaps that clinical services cannot: the 3am window, the days between health
            visitor appointments, the weeks on a waiting list for therapy, and the daily
            need to express what you are feeling to someone who will not panic or judge. It
            also creates a documented mood record that enriches, rather than replaces, the
            clinical encounter.
          </p>
          <p style={s.p}>
            The NHS perinatal mental health pathway, where it exists, is genuinely effective.
            But it has real structural limitations. Health visitor contact declines after the
            first few weeks. GP appointments are brief and often inadequate for the emotional
            complexity of PPD. Waiting times for specialist psychological therapies can
            stretch to weeks or months. In those gaps, the parent is largely alone with their
            experience.
          </p>
          <p style={s.p}>
            MEOK occupies the gaps. On the day a parent gets a diagnosis and goes home to
            wait for their first therapy appointment, MEOK is there. On the evening after a
            difficult session with a therapist, when the parent is processing what was said,
            MEOK is there. On the night when the parent is back in a low period and the next
            appointment is two weeks away, MEOK is there. It does not do the work of clinical
            treatment, but it holds the space between those treatments.
          </p>
          <p style={s.p}>
            It is also worth being explicit about what MEOK does not do. It does not diagnose.
            It does not prescribe. It does not conduct therapeutic assessments. It does not
            provide crisis intervention in the clinical sense — if a parent is at immediate
            risk, MEOK will clearly direct them to emergency services and professional
            support. Used alongside professional care, it can meaningfully support recovery.
            Used as a substitute for professional care, it is not sufficient.
          </p>

          {/* ── Section 11 ────────────────────────────────────────────────── */}
          <h2 style={s.h2}>What can a father do if he suspects he has postpartum depression?</h2>
          <p style={s.atomicAnswer}>
            A father who suspects he has postpartum depression should start by acknowledging
            that it is a real, recognised condition — not a sign of weakness, selfishness, or
            inadequacy. The next step is to speak to a GP, who can conduct an assessment and
            discuss options including therapy and medication. PANDAS Foundation explicitly
            supports fathers and partners, and their helpline is open to all family members
            affected by perinatal mental illness.
          </p>
          <p style={s.p}>
            Paternal PPD is under-researched, under-recognised, and under-treated. Most
            postnatal screening tools are designed for birthing parents and use language and
            symptom frameworks that do not map cleanly onto how fathers experience depression.
            A father who does not identify with phrases like &ldquo;feeling tearful&rdquo;
            or &ldquo;unable to bond with the baby&rdquo; may not recognise that his own
            experience of irritability, emotional numbness, withdrawal, increased alcohol use,
            or working obsessively to avoid being home constitutes a clinical presentation.
          </p>
          <p style={s.p}>
            The barriers to a father seeking help are substantial and real. They include
            internalised beliefs about male stoicism, fear of being seen as failing the family
            at its most demanding moment, lack of social permission to discuss emotional
            distress, and a healthcare system that has historically not made space for paternal
            mental health. MEOK offers a low-stakes first conversation: a father can describe
            what he is experiencing without having to name it as depression, without having to
            perform vulnerability to another person, and without having to make a GP
            appointment that feels disproportionate to something he is not sure is real.
          </p>

          {/* ── Section 12 ────────────────────────────────────────────────── */}
          <h2 style={s.h2}>How does MEOK handle privacy when the subject matter is this sensitive?</h2>
          <p style={s.atomicAnswer}>
            MEOK is built on a data sovereignty model: your conversations, your mood records,
            and your personal disclosures are stored under your control, not on shared cloud
            infrastructure where they can be accessed, sold, or used to train third-party
            models. What you tell MEOK about postpartum depression stays with you — it is
            shared only if you actively choose to share it.
          </p>
          <p style={s.p}>
            This privacy architecture is not incidental to MEOK&apos;s usefulness for
            postpartum mental health — it is constitutive of it. The reason the shame spiral
            is so powerful is that disclosure feels dangerous. A parent who fears that their
            honest descriptions of dark thoughts could be accessed by social services, shared
            with their GP without consent, or used in ways they did not intend will not
            disclose honestly. The therapeutic value of any companion tool depends entirely
            on the safety of the space it creates.
          </p>
          <p style={s.p}>
            MEOK does not train on your data. It does not share your conversations with
            advertisers. It does not use what you disclose to generate profiles that are sold
            or shared. When you decide to export a mood summary to share with your health
            visitor, that is your decision, made in your own time, based on your own assessment
            of what is helpful. No automatic reporting. No background sharing. Your words
            belong to you.
          </p>

          <hr style={s.divider} />

          {/* ── Recap ─────────────────────────────────────────────────────── */}
          <h3 style={s.h3}>Summary: what MEOK offers for postpartum depression</h3>
          <ul style={s.ul}>
            <li style={s.li}>
              <strong style={{ color: "#f5f0e8" }}>Healer archetype:</strong> Non-judgmental
              emotional presence at any hour, including the 3am feed. A space to say what is
              actually happening without fear of alarm, judgment, or the shame spiral.
            </li>
            <li style={s.li}>
              <strong style={{ color: "#f5f0e8" }}>Sovereign Memory:</strong> Longitudinal
              mood tracking across days and weeks, generating a record you can optionally
              share with your health visitor or GP to enrich the clinical encounter.
            </li>
            <li style={s.li}>
              <strong style={{ color: "#f5f0e8" }}>Guardian archetype:</strong> Protection
              against supplement scams, misleading health products, and financial exploitation
              targeting vulnerable new parents.
            </li>
            <li style={s.li}>
              <strong style={{ color: "#f5f0e8" }}>Pioneer archetype:</strong> Support for
              rebuilding identity, capability, and a sense of personal future as the acute
              phase of PPD eases.
            </li>
            <li style={s.li}>
              <strong style={{ color: "#f5f0e8" }}>Data sovereignty:</strong> Your disclosures
              remain under your control. MEOK does not automatically share what you say with
              anyone.
            </li>
            <li style={s.li}>
              <strong style={{ color: "#f5f0e8" }}>Clear signposting:</strong> MEOK always and
              clearly directs parents to PANDAS Foundation, APNI, the NHS, and emergency
              services when the situation calls for it.
            </li>
          </ul>

          <div style={s.warningBox}>
            <p style={s.warningText}>
              <strong style={{ color: "#f5f0e8" }}>Reminder:</strong> MEOK is a companion tool,
              not a medical service. Postpartum depression is a clinical condition that requires
              professional assessment and treatment. If you think you or someone you know may
              have PPD, please speak to a GP or health visitor. PANDAS Foundation (0800 138
              7777) and APNI (apni.org) provide specialist peer support. If anyone is in
              immediate danger, call 999 or go to A&amp;E.
            </p>
          </div>

        </article>

        {/* ── FAQ Section ───────────────────────────────────────────────────────── */}
        <section style={s.faqSection} aria-labelledby="faq-heading">
          <h2 id="faq-heading" style={s.faqTitle}>Frequently Asked Questions</h2>

          <div style={s.faqItem}>
            <p style={s.faqQuestion}>
              What is the difference between baby blues and postpartum depression?
            </p>
            <p style={s.faqAnswer}>
              Baby blues affect up to 80% of new mothers and typically resolve within two
              weeks of birth as hormones stabilise. Postpartum depression is a clinical
              condition that persists beyond two weeks, often worsens over time, and requires
              professional treatment. If low mood, tearfulness, disconnection, or anxiety
              continues past the first fortnight, speak to your GP or health visitor as soon
              as possible.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQuestion}>Can AI help with postpartum depression?</p>
            <p style={s.faqAnswer}>
              AI cannot diagnose or treat postpartum depression — that requires your GP,
              health visitor, or a perinatal mental health team. MEOK can be present at 3am
              when clinical services are closed, offering non-judgmental companionship, mood
              pattern tracking you can share with your health visitor, and clear signposting
              to PANDAS Foundation, APNI, and NHS perinatal services. It is a companion and
              a record-keeping tool, not a clinician.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQuestion}>What are the warning signs of postpartum psychosis?</p>
            <p style={s.faqAnswer}>
              Postpartum psychosis is a rare but serious psychiatric emergency affecting
              approximately 1 in 1,000 new mothers. Warning signs include hallucinations
              (seeing or hearing things that are not there), delusions (strongly held false
              beliefs), rapid mood swings between elation and deep depression, confusion,
              disorganised behaviour, and severely disrupted sleep even when the baby sleeps.
              It usually appears within the first two weeks after birth. Call 999 or go to
              A&amp;E immediately.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQuestion}>Does postpartum depression affect fathers?</p>
            <p style={s.faqAnswer}>
              Yes. Research consistently shows that around 1 in 10 fathers experience
              postpartum depression, often peaking between three and six months after birth.
              Paternal PPD frequently goes unrecognised because services are focused on the
              birthing parent, and because men are less likely to present with classic
              depressive symptoms. MEOK supports both parents, and PANDAS Foundation offers
              resources specifically for fathers.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQuestion}>What is the PANDAS Foundation?</p>
            <p style={s.faqAnswer}>
              PANDAS Foundation (Pre and Postnatal Depression Advice and Support) is a UK
              charity providing free peer support, a helpline (0800 138 7777), and online
              resources for anyone affected by perinatal mental health difficulties, including
              partners and family members. They are one of the leading specialist organisations
              for postpartum depression support in the United Kingdom.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQuestion}>What is APNI?</p>
            <p style={s.faqAnswer}>
              APNI — the Association for Post Natal Illness — is a UK charity founded in 1979
              that provides support for mothers suffering from postnatal illness, including a
              helpline, a network of volunteer supporters who have themselves recovered from
              postnatal illness, and extensive information resources for sufferers, families,
              and health professionals.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQuestion}>How does MEOK help new parents at 3am?</p>
            <p style={s.faqAnswer}>
              MEOK is available any time of day or night, including the 3am feed when
              isolation feels most acute and most support services are closed. The Healer
              archetype offers emotional companionship without judgment, while Sovereign Memory
              tracks mood patterns across days and weeks so that a record is available to share
              with a health visitor or GP. MEOK does not replace professional care but can
              bridge the gap until morning.
            </p>
          </div>

          <div style={s.faqItemLast}>
            <p style={s.faqQuestion}>What is the shame spiral in postpartum depression?</p>
            <p style={s.faqAnswer}>
              The shame spiral is the compounding effect in postpartum depression where the
              guilt of not feeling happy deepens the underlying depression, which generates
              more guilt, which deepens the mood further. It is one of the primary reasons PPD
              goes unacknowledged and untreated. MEOK interrupts the spiral by accepting
              whatever the parent reports without moral framing, treating the parent as the
              expert on their own experience.
            </p>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────────── */}
        <div style={s.ctaBox}>
          <p style={s.ctaTitle}>You don&apos;t have to navigate this alone.</p>
          <p style={s.ctaBody}>
            MEOK is available at 3am, at 6am, and every hour in between. Not as a substitute
            for professional care — but as a companion in the gaps: non-judgmental, always
            present, and building a record of how you&apos;re feeling that you can take to
            your next appointment.
          </p>
          <div style={s.ctaButtons}>
            <Link href="/birth" style={s.ctaPrimary}>
              Start with MEOK — Free
            </Link>
            <Link href="/blog/ai-for-new-parents" style={s.ctaSecondary}>
              AI for New Parents
            </Link>
          </div>
        </div>

        {/* ── Related Links ─────────────────────────────────────────────────────── */}
        <section style={s.relatedSection} aria-labelledby="related-heading">
          <h2 id="related-heading" style={s.relatedTitle}>Related Reading</h2>
          <div style={s.relatedGrid}>
            <Link href="/blog/ai-for-new-parents" style={s.relatedCard}>
              <span style={s.relatedCardLabel}>Parenting</span>
              <span style={s.relatedCardTitle}>
                AI for New Parents: Postnatal Support at 3am
              </span>
            </Link>
            <Link href="/blog/ai-for-anxiety" style={s.relatedCard}>
              <span style={s.relatedCardLabel}>Mental Health</span>
              <span style={s.relatedCardTitle}>
                AI for Anxiety: What Non-Judgmental Support Actually Means
              </span>
            </Link>
            <Link href="/blog/ai-for-single-parents" style={s.relatedCard}>
              <span style={s.relatedCardLabel}>Parenting</span>
              <span style={s.relatedCardTitle}>
                AI for Single Parents: Support Without the Audience
              </span>
            </Link>
            <Link href="/blog/meok-companion-archetypes-guide" style={s.relatedCard}>
              <span style={s.relatedCardLabel}>MEOK Features</span>
              <span style={s.relatedCardTitle}>
                MEOK Archetypes: Healer, Guardian, Pioneer &amp; More
              </span>
            </Link>
            <Link href="/blog/ai-memory-explained" style={s.relatedCard}>
              <span style={s.relatedCardLabel}>MEOK Features</span>
              <span style={s.relatedCardTitle}>
                How Sovereign Memory Works — and Why Privacy Matters
              </span>
            </Link>
            <Link href="/blog/ai-for-grief-after-miscarriage" style={s.relatedCard}>
              <span style={s.relatedCardLabel}>Perinatal Loss</span>
              <span style={s.relatedCardTitle}>
                AI Support After Miscarriage: Grief That Needs No Explanation
              </span>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer style={s.footer}>
          <p style={s.footerText}>
            &copy; {new Date().getFullYear()} MEOK AI LABS. All rights reserved.
            MEOK is not a medical service. If you are experiencing a mental health crisis,
            please contact the Samaritans on 116 123, PANDAS Foundation on 0800 138 7777,
            or call 999 in an emergency.
          </p>
        </footer>

      </div>
    </main>
  );
}
