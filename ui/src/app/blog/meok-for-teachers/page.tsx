import type { Metadata } from "next"
import Link from "next/link"

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "MEOK for Teachers: Sovereign AI Support in the Most Demanding Profession | MEOK AI LABS",
  description:
    "UK teaching has a retention crisis \u2014 40% of teachers leave within 5 years. Workload, behaviour management, Ofsted anxiety, and emotional labour are driving good people out. MEOK is a sovereign AI wellbeing companion for teachers: private, confidential, available at 10pm when the marking is done.",
  alternates: {
    canonical: "https://meok.ai/blog/meok-for-teachers",
  },
  openGraph: {
    title:
      "MEOK for Teachers: Sovereign AI Support in the Most Demanding Profession",
    description:
      "40% of UK teachers leave within 5 years. Workload, Ofsted anxiety, behaviour, and the emotional labour of caring for children\u2019s needs are the real reasons. MEOK provides confidential sovereign AI support for teachers who are running on empty.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-for-teachers",
    siteName: "MEOK AI LABS",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+for+Teachers&desc=Sovereign+AI+support+in+the+most+demanding+profession.",
        width: 1200,
        height: 630,
        alt: "MEOK for Teachers: Sovereign AI Support in the Most Demanding Profession",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MEOK for Teachers: Sovereign AI Support in the Most Demanding Profession",
    description:
      "40% of UK teachers leave within 5 years. MEOK is the sovereign AI built for teachers who carry the weight of every child in their class \u2014 privately, at any hour.",
    images: [
      "https://meok.ai/api/og?title=MEOK+for+Teachers&desc=Sovereign+AI+support+in+the+most+demanding+profession.",
    ],
  },
  keywords: [
    "AI for teachers",
    "teacher wellbeing app",
    "teacher burnout support",
    "sovereign AI for teachers",
    "teacher retention crisis UK",
    "Ofsted anxiety support",
    "teacher mental health",
    "AI lesson planning support",
    "SEND support AI",
    "teacher workload AI",
    "confidential AI for teachers",
    "teacher decompression app",
    "UK teaching retention crisis",
    "AI for education wellbeing",
    "MEOK AI teachers",
  ],
}

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "MEOK for Teachers: Sovereign AI Support in the Most Demanding Profession",
  description:
    "UK teaching has a retention crisis \u2014 40% of teachers leave within 5 years. Workload, behaviour management, Ofsted anxiety, and emotional labour are driving good people out. MEOK is a sovereign AI wellbeing companion for teachers.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/meok-for-teachers",
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
  keywords: [
    "AI for teachers",
    "teacher burnout",
    "Ofsted anxiety",
    "teacher retention crisis",
    "SEND support",
    "teacher wellbeing",
    "sovereign AI",
    "data sovereignty",
    "MEOK AI LABS",
  ],
  articleSection: "MEOK for Teachers",
  inLanguage: "en-GB",
  image:
    "https://meok.ai/api/og?title=MEOK+for+Teachers&desc=Sovereign+AI+support+in+the+most+demanding+profession.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/meok-for-teachers",
  },
  about: [
    { "@type": "Thing", name: "Teacher retention crisis UK" },
    { "@type": "Thing", name: "Teacher burnout and wellbeing" },
    { "@type": "Thing", name: "Ofsted inspection anxiety" },
    { "@type": "Thing", name: "SEND support in schools" },
    { "@type": "Thing", name: "Emotional labour in teaching" },
    { "@type": "Thing", name: "Data sovereignty AI" },
    { "@type": "Thing", name: "Confidential AI support for educators" },
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why are so many teachers leaving the profession in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "According to DfE data, around 40% of UK teachers leave the profession within five years of qualifying. The causes are well documented: unsustainable workload driven by marking, planning, and data entry obligations; behaviour management challenges that have worsened since the pandemic; Ofsted inspection anxiety that creates a permanent low-grade professional dread; limited pay progression; and the emotional labour of caring deeply for children who arrive carrying trauma, poverty, and complex needs. The profession asks a great deal of its people and offers comparatively little structural support in return.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI support teacher mental health and wellbeing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI companions like MEOK are not therapists and do not replace professional mental health support. What they offer is different: a private, available-at-any-hour decompression space where teachers can offload the accumulated emotional weight of the day \u2014 the difficult class, the confrontational parent, the safeguarding concern, the impossible workload \u2014 without professional risk, without judgment, and without needing to book an appointment weeks in advance. MEOK is a sovereign AI that belongs to the teacher, not the school, so conversations remain completely private.",
      },
    },
    {
      "@type": "Question",
      name: "What is Ofsted anxiety and how does it affect teachers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ofsted anxiety is the sustained psychological stress associated with the possibility of an Ofsted inspection. Because inspections can arrive with just one day\u2019s notice, many teachers operate under a background level of vigilance that never fully switches off. Research by the NASUWT and NEU has consistently linked Ofsted inspection regimes to increased rates of teacher anxiety, depression, and departure from the profession. The effects include perfectionism about lesson plans and documentation, heightened self-scrutiny, and a form of anticipatory dread that is particularly draining because it offers no resolution.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK confidential for teachers who need to vent about school?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Completely. MEOK is an independent personal AI with no connection to any school, multi-academy trust, local authority, or educational institution. Conversations are encrypted and held under the teacher\u2019s sovereign control \u2014 not processed by a third party, not used for model training, and architecturally inaccessible to employers. This means teachers can speak freely: about a difficult headteacher, about a confrontational parent, about a colleague whose behaviour is affecting the department, about feeling like they want to leave. Nothing said in MEOK can reach a line manager or school leadership team.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help teachers with lesson planning and curriculum work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Beyond emotional support, MEOK includes Pioneer and Orion \u2014 two AI archetypes built for structured thinking, planning, and knowledge work. Teachers can use these modes to think through lesson structures, explore approaches to challenging topics, work through curriculum sequencing questions, and prepare for professional development conversations. Because MEOK remembers the teacher\u2019s professional context across conversations, it provides genuinely personalised support rather than generic suggestions \u2014 understanding your year group, your subject, and the particular challenges of your school.",
      },
    },
  ],
}

// ── Styles ─────────────────────────────────────────────────────────────────────

const s = {
  page: {
    background: "#0d0c18",
    color: "#f5f0e8",
    minHeight: "100vh",
    fontFamily: 'Georgia, "Times New Roman", serif',
  } as React.CSSProperties,

  nav: {
    padding: "20px 24px",
    borderBottom: "1px solid rgba(201,168,76,0.15)",
    display: "flex",
    alignItems: "center",
    gap: "16px",
  } as React.CSSProperties,

  navLink: {
    color: "#c9a84c",
    textDecoration: "none",
    fontSize: "14px",
    letterSpacing: "0.04em",
    fontFamily: "system-ui, -apple-system, sans-serif",
  } as React.CSSProperties,

  navSep: {
    color: "rgba(201,168,76,0.4)",
    fontSize: "14px",
    fontFamily: "system-ui, -apple-system, sans-serif",
  } as React.CSSProperties,

  navCurrent: {
    color: "rgba(245,240,232,0.5)",
    fontSize: "14px",
    fontFamily: "system-ui, -apple-system, sans-serif",
  } as React.CSSProperties,

  hero: {
    textAlign: "center" as const,
    padding: "72px 24px 56px",
    maxWidth: "860px",
    margin: "0 auto",
    position: "relative" as const,
  } as React.CSSProperties,

  heroGlow: {
    position: "absolute" as const,
    top: "0",
    left: "50%",
    transform: "translateX(-50%)",
    width: "600px",
    height: "300px",
    background:
      "radial-gradient(ellipse at center top, rgba(201,168,76,0.12) 0%, transparent 70%)",
    pointerEvents: "none" as const,
  } as React.CSSProperties,

  tagRow: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "8px",
    justifyContent: "center",
    marginBottom: "28px",
  } as React.CSSProperties,

  tag: {
    background: "rgba(201,168,76,0.1)",
    border: "1px solid rgba(201,168,76,0.25)",
    color: "#c9a84c",
    fontSize: "11px",
    letterSpacing: "0.08em",
    padding: "4px 12px",
    borderRadius: "20px",
    fontFamily: "system-ui, -apple-system, sans-serif",
    textTransform: "uppercase" as const,
  } as React.CSSProperties,

  heroTitle: {
    fontSize: "clamp(28px, 5vw, 48px)",
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: "20px",
    letterSpacing: "-0.01em",
  } as React.CSSProperties,

  heroGold: {
    color: "#c9a84c",
  } as React.CSSProperties,

  heroLead: {
    fontSize: "clamp(17px, 2.2vw, 20px)",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.82)",
    maxWidth: "680px",
    margin: "0 auto 32px",
  } as React.CSSProperties,

  heroCta: {
    display: "inline-block",
    background: "linear-gradient(135deg, #c9a84c 0%, #e8c96a 100%)",
    color: "#0d0c18",
    fontWeight: 700,
    fontSize: "16px",
    padding: "14px 36px",
    borderRadius: "4px",
    textDecoration: "none",
    letterSpacing: "0.02em",
    fontFamily: "system-ui, -apple-system, sans-serif",
  } as React.CSSProperties,

  statBar: {
    background: "#13121f",
    borderTop: "1px solid #2a2840",
    borderBottom: "1px solid #2a2840",
    padding: "36px 24px",
  } as React.CSSProperties,

  statGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "24px",
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center" as const,
  } as React.CSSProperties,

  statItem: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "6px",
  } as React.CSSProperties,

  statNumber: {
    fontSize: "42px",
    fontWeight: 700,
    color: "#c9a84c",
    lineHeight: 1,
    fontFamily: "system-ui, -apple-system, sans-serif",
  } as React.CSSProperties,

  statLabel: {
    fontSize: "13px",
    color: "rgba(245,240,232,0.6)",
    lineHeight: 1.4,
    fontFamily: "system-ui, -apple-system, sans-serif",
    maxWidth: "160px",
  } as React.CSSProperties,

  main: {
    maxWidth: "780px",
    margin: "0 auto",
    padding: "64px 24px",
  } as React.CSSProperties,

  sectionTitle: {
    fontSize: "clamp(22px, 3.5vw, 30px)",
    fontWeight: 700,
    lineHeight: 1.3,
    marginBottom: "20px",
    letterSpacing: "-0.01em",
  } as React.CSSProperties,

  sectionGold: {
    color: "#c9a84c",
  } as React.CSSProperties,

  divider: {
    width: "48px",
    height: "2px",
    background: "linear-gradient(90deg, #c9a84c 0%, transparent 100%)",
    marginBottom: "24px",
    border: "none",
  } as React.CSSProperties,

  paragraph: {
    fontSize: "17px",
    lineHeight: 1.8,
    color: "rgba(245,240,232,0.88)",
    marginBottom: "20px",
  } as React.CSSProperties,

  paragraphStrong: {
    fontSize: "17px",
    lineHeight: 1.8,
    color: "#f5f0e8",
    marginBottom: "20px",
  } as React.CSSProperties,

  section: {
    marginBottom: "72px",
  } as React.CSSProperties,

  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    marginTop: "32px",
    marginBottom: "20px",
  } as React.CSSProperties,

  featureCard: {
    background: "#13121f",
    border: "1px solid #2a2840",
    borderRadius: "8px",
    padding: "28px 24px",
  } as React.CSSProperties,

  featureCardHighlight: {
    background: "#13121f",
    border: "1px solid rgba(201,168,76,0.3)",
    borderRadius: "8px",
    padding: "28px 24px",
  } as React.CSSProperties,

  featureIcon: {
    fontSize: "28px",
    marginBottom: "14px",
    display: "block",
  } as React.CSSProperties,

  featureTitle: {
    fontSize: "17px",
    fontWeight: 700,
    marginBottom: "10px",
    color: "#f5f0e8",
    fontFamily: "system-ui, -apple-system, sans-serif",
  } as React.CSSProperties,

  featureTitleGold: {
    fontSize: "17px",
    fontWeight: 700,
    marginBottom: "10px",
    color: "#c9a84c",
    fontFamily: "system-ui, -apple-system, sans-serif",
  } as React.CSSProperties,

  featureBody: {
    fontSize: "15px",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.72)",
    fontFamily: "system-ui, -apple-system, sans-serif",
  } as React.CSSProperties,

  quoteBlock: {
    borderLeft: "3px solid #c9a84c",
    paddingLeft: "24px",
    marginTop: "32px",
    marginBottom: "32px",
  } as React.CSSProperties,

  quoteText: {
    fontSize: "19px",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.9)",
    fontStyle: "italic",
    marginBottom: "12px",
  } as React.CSSProperties,

  quoteAttrib: {
    fontSize: "13px",
    color: "#a09880",
    fontFamily: "system-ui, -apple-system, sans-serif",
    letterSpacing: "0.04em",
    textTransform: "uppercase" as const,
  } as React.CSSProperties,

  calloutBox: {
    background: "rgba(201,168,76,0.07)",
    border: "1px solid rgba(201,168,76,0.2)",
    borderRadius: "8px",
    padding: "28px 32px",
    marginTop: "32px",
    marginBottom: "32px",
  } as React.CSSProperties,

  calloutTitle: {
    fontSize: "15px",
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    fontFamily: "system-ui, -apple-system, sans-serif",
    marginBottom: "12px",
  } as React.CSSProperties,

  calloutText: {
    fontSize: "16px",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.85)",
  } as React.CSSProperties,

  warningBox: {
    background: "rgba(106,170,100,0.06)",
    border: "1px solid rgba(106,170,100,0.2)",
    borderRadius: "8px",
    padding: "28px 32px",
    marginTop: "32px",
    marginBottom: "32px",
  } as React.CSSProperties,

  warningTitle: {
    fontSize: "15px",
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
    color: "#6aaa64",
    fontFamily: "system-ui, -apple-system, sans-serif",
    marginBottom: "12px",
  } as React.CSSProperties,

  warningText: {
    fontSize: "16px",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.85)",
  } as React.CSSProperties,

  listClean: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  } as React.CSSProperties,

  listItem: {
    display: "flex",
    gap: "12px",
    alignItems: "flex-start",
    marginBottom: "14px",
    fontSize: "16px",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.85)",
  } as React.CSSProperties,

  listBullet: {
    color: "#c9a84c",
    flexShrink: 0,
    marginTop: "4px",
  } as React.CSSProperties,

  listBulletGreen: {
    color: "#6aaa64",
    flexShrink: 0,
    marginTop: "4px",
  } as React.CSSProperties,

  faqSection: {
    marginBottom: "72px",
  } as React.CSSProperties,

  faqItem: {
    borderBottom: "1px solid #2a2840",
    paddingBottom: "28px",
    marginBottom: "28px",
  } as React.CSSProperties,

  faqQuestion: {
    fontSize: "19px",
    fontWeight: 700,
    lineHeight: 1.4,
    marginBottom: "14px",
    color: "#f5f0e8",
  } as React.CSSProperties,

  faqAnswer: {
    fontSize: "16px",
    lineHeight: 1.8,
    color: "rgba(245,240,232,0.8)",
  } as React.CSSProperties,

  ctaSection: {
    background: "#13121f",
    border: "1px solid rgba(201,168,76,0.2)",
    borderRadius: "12px",
    padding: "56px 40px",
    textAlign: "center" as const,
    marginBottom: "64px",
    position: "relative" as const,
    overflow: "hidden" as const,
  } as React.CSSProperties,

  ctaGlow: {
    position: "absolute" as const,
    top: "0",
    left: "50%",
    transform: "translateX(-50%)",
    width: "500px",
    height: "200px",
    background:
      "radial-gradient(ellipse at center top, rgba(201,168,76,0.1) 0%, transparent 70%)",
    pointerEvents: "none" as const,
  } as React.CSSProperties,

  ctaTitle: {
    fontSize: "clamp(22px, 3.5vw, 32px)",
    fontWeight: 700,
    lineHeight: 1.3,
    marginBottom: "16px",
    position: "relative" as const,
    zIndex: 1,
  } as React.CSSProperties,

  ctaText: {
    fontSize: "17px",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.75)",
    maxWidth: "540px",
    margin: "0 auto 32px",
    position: "relative" as const,
    zIndex: 1,
  } as React.CSSProperties,

  ctaButton: {
    display: "inline-block",
    background: "linear-gradient(135deg, #c9a84c 0%, #e8c96a 100%)",
    color: "#0d0c18",
    fontWeight: 700,
    fontSize: "17px",
    padding: "16px 44px",
    borderRadius: "4px",
    textDecoration: "none",
    letterSpacing: "0.02em",
    fontFamily: "system-ui, -apple-system, sans-serif",
    position: "relative" as const,
    zIndex: 1,
  } as React.CSSProperties,

  ctaSubtext: {
    fontSize: "13px",
    color: "#a09880",
    marginTop: "16px",
    fontFamily: "system-ui, -apple-system, sans-serif",
    position: "relative" as const,
    zIndex: 1,
  } as React.CSSProperties,

  relatedGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
    marginTop: "28px",
  } as React.CSSProperties,

  relatedCard: {
    background: "#13121f",
    border: "1px solid #2a2840",
    borderRadius: "8px",
    padding: "20px",
    textDecoration: "none",
    display: "block",
  } as React.CSSProperties,

  relatedLabel: {
    fontSize: "11px",
    color: "#a09880",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    fontFamily: "system-ui, -apple-system, sans-serif",
    marginBottom: "8px",
    display: "block",
  } as React.CSSProperties,

  relatedTitle: {
    fontSize: "15px",
    fontWeight: 600,
    color: "#f5f0e8",
    lineHeight: 1.4,
    fontFamily: "system-ui, -apple-system, sans-serif",
  } as React.CSSProperties,

  footer: {
    borderTop: "1px solid #2a2840",
    padding: "40px 24px",
    textAlign: "center" as const,
  } as React.CSSProperties,

  footerText: {
    fontSize: "14px",
    color: "#a09880",
    fontFamily: "system-ui, -apple-system, sans-serif",
    lineHeight: 1.6,
  } as React.CSSProperties,

  footerLink: {
    color: "#c9a84c",
    textDecoration: "none",
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontSize: "14px",
  } as React.CSSProperties,

  metaRow: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap" as const,
    marginTop: "24px",
    paddingTop: "24px",
    borderTop: "1px solid rgba(42,40,64,0.6)",
  } as React.CSSProperties,

  metaItem: {
    fontSize: "13px",
    color: "#a09880",
    fontFamily: "system-ui, -apple-system, sans-serif",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  } as React.CSSProperties,

  archetypeRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginTop: "28px",
    marginBottom: "20px",
  } as React.CSSProperties,

  archetypeCard: {
    background: "#13121f",
    border: "1px solid #2a2840",
    borderRadius: "8px",
    padding: "24px",
  } as React.CSSProperties,

  archetypeName: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#c9a84c",
    fontFamily: "system-ui, -apple-system, sans-serif",
    marginBottom: "6px",
    letterSpacing: "0.02em",
  } as React.CSSProperties,

  archetypeMode: {
    fontSize: "11px",
    color: "#a09880",
    fontFamily: "system-ui, -apple-system, sans-serif",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    marginBottom: "12px",
  } as React.CSSProperties,

  archetypeDesc: {
    fontSize: "14px",
    lineHeight: 1.6,
    color: "rgba(245,240,232,0.72)",
    fontFamily: "system-ui, -apple-system, sans-serif",
  } as React.CSSProperties,

  sovereigntyBox: {
    background: "#13121f",
    border: "1px solid #2a2840",
    borderRadius: "8px",
    padding: "36px 32px",
    marginTop: "32px",
    marginBottom: "32px",
  } as React.CSSProperties,

  sovereigntyTitle: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#f5f0e8",
    marginBottom: "20px",
    fontFamily: "system-ui, -apple-system, sans-serif",
  } as React.CSSProperties,

  sovereigntyGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "16px",
  } as React.CSSProperties,

  sovereigntyItem: {
    display: "flex",
    gap: "10px",
    alignItems: "flex-start",
  } as React.CSSProperties,

  sovereigntyCheck: {
    color: "#6aaa64",
    fontWeight: 700,
    flexShrink: 0,
    marginTop: "2px",
    fontFamily: "system-ui, -apple-system, sans-serif",
  } as React.CSSProperties,

  sovereigntyItemText: {
    fontSize: "14px",
    lineHeight: 1.6,
    color: "rgba(245,240,232,0.75)",
    fontFamily: "system-ui, -apple-system, sans-serif",
  } as React.CSSProperties,

  highlightNumber: {
    color: "#c9a84c",
    fontWeight: 700,
  } as React.CSSProperties,

  introLead: {
    fontSize: "19px",
    lineHeight: 1.8,
    color: "rgba(245,240,232,0.92)",
    marginBottom: "24px",
    fontStyle: "italic",
  } as React.CSSProperties,

  twoColGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
    marginTop: "24px",
    marginBottom: "24px",
  } as React.CSSProperties,

  contrastCard: {
    background: "#13121f",
    border: "1px solid #2a2840",
    borderRadius: "8px",
    padding: "24px",
  } as React.CSSProperties,

  contrastCardGreen: {
    background: "rgba(106,170,100,0.05)",
    border: "1px solid rgba(106,170,100,0.2)",
    borderRadius: "8px",
    padding: "24px",
  } as React.CSSProperties,

  contrastCardTitle: {
    fontSize: "14px",
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
    color: "#a09880",
    fontFamily: "system-ui, -apple-system, sans-serif",
    marginBottom: "14px",
  } as React.CSSProperties,

  contrastCardTitleGreen: {
    fontSize: "14px",
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
    color: "#6aaa64",
    fontFamily: "system-ui, -apple-system, sans-serif",
    marginBottom: "14px",
  } as React.CSSProperties,

  footerSecondary: {
    fontSize: "14px",
    color: "#a09880",
    fontFamily: "system-ui, -apple-system, sans-serif",
    lineHeight: 1.6,
    marginTop: "8px",
  } as React.CSSProperties,
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function MeokForTeachersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div style={s.page}>

        {/* ── Navigation ──────────────────────────────────────────────────────── */}
        <nav style={s.nav}>
          <Link href="/" style={s.navLink}>MEOK</Link>
          <span style={s.navSep}>/</span>
          <Link href="/blog" style={s.navLink}>Blog</Link>
          <span style={s.navSep}>/</span>
          <span style={s.navCurrent}>MEOK for Teachers</span>
        </nav>

        {/* ── Hero ────────────────────────────────────────────────────────────── */}
        <header style={s.hero}>
          <div style={s.heroGlow} aria-hidden="true" />

          <div style={s.tagRow}>
            <span style={s.tag}>Teacher Wellbeing</span>
            <span style={s.tag}>Sovereign AI</span>
            <span style={s.tag}>UK Education</span>
            <span style={s.tag}>Data Privacy</span>
          </div>

          <h1 style={s.heroTitle}>
            MEOK for Teachers:{" "}
            <span style={s.heroGold}>
              Sovereign AI Support in the Most Demanding Profession
            </span>
          </h1>

          <p style={s.heroLead}>
            UK teaching has a retention crisis. Forty percent of teachers leave
            within five years. The reasons are not a mystery: punishing workload,
            escalating behaviour challenges, the spectre of Ofsted, and the
            invisible emotional labour of genuinely caring for every child in
            your class. MEOK is not a teaching tool. It is a sovereign AI
            wellbeing companion &mdash; private, confidential, available at 10pm
            when the marking is finally done.
          </p>

          <Link href="https://meok.ai/birth" style={s.heroCta}>
            Begin with MEOK &rarr;
          </Link>

          <div style={s.metaRow}>
            <span style={s.metaItem}>
              <span>By Nicholas Templeman</span>
            </span>
            <span style={s.metaItem}>
              <span>25 March 2026</span>
            </span>
            <span style={s.metaItem}>
              <span>14 min read</span>
            </span>
            <span style={s.metaItem}>
              <span>MEOK AI LABS</span>
            </span>
          </div>
        </header>

        {/* ── Stat Bar ────────────────────────────────────────────────────────── */}
        <div style={s.statBar}>
          <div style={s.statGrid}>
            <div style={s.statItem}>
              <span style={s.statNumber}>40%</span>
              <span style={s.statLabel}>of UK teachers leave within 5 years of qualifying</span>
            </div>
            <div style={s.statItem}>
              <span style={s.statNumber}>75%</span>
              <span style={s.statLabel}>report unmanageable workload as a primary concern</span>
            </div>
            <div style={s.statItem}>
              <span style={s.statNumber}>3 in 4</span>
              <span style={s.statLabel}>secondary teachers say behaviour management has worsened since the pandemic</span>
            </div>
            <div style={s.statItem}>
              <span style={s.statNumber}>1 in 3</span>
              <span style={s.statLabel}>NQTs consider leaving after their first year in the classroom</span>
            </div>
          </div>
        </div>

        {/* ── Main Content ────────────────────────────────────────────────────── */}
        <main style={s.main}>

          {/* ── Section 1: The Crisis ────────────────────────────────────────── */}
          <section style={s.section}>
            <h2 style={s.sectionTitle}>
              Why Is <span style={s.sectionGold}>UK Teaching in Crisis?</span>
            </h2>
            <hr style={s.divider} />

            <p style={s.introLead}>
              Teaching is one of the most consequential professions that exists.
              It is also one of the most poorly supported. The gap between what
              the job demands and what the system provides in return has become
              untenable for a generation of educators.
            </p>

            <p style={s.paragraph}>
              The Department for Education&apos;s own data is unambiguous: around{" "}
              <span style={s.highlightNumber}>40% of teachers leave the profession within five years</span>{" "}
              of completing their training. This is not an abstract statistic.
              It represents classrooms staffed by supply teachers, continuity
              lost for children who needed stability, and an institutional
              knowledge haemorrhage that no recruitment drive has been able to
              reverse. The profession is losing people faster than it can train
              replacements.
            </p>

            <p style={s.paragraph}>
              The NASUWT Teacher Survey, repeated year on year, returns the same
              findings. Workload is cited by the overwhelming majority of
              teachers as unsustainable. Not challenging &mdash; unsustainable. The
              distinction matters. Teachers do not leave because teaching is
              hard. They leave because the administrative, bureaucratic, and
              performative demands layered on top of teaching have made it
              impossible to do the actual job well, while also remaining a
              functioning human being.
            </p>

            <p style={s.paragraph}>
              The National Education Union&apos;s research consistently finds that
              teachers work significantly more hours per week than their
              contracted time. The additional hours go not to the children but
              to data entry, policy documentation, display requirements,
              evidence portfolios, and the endless preparation for inspections
              that may or may not arrive. The hours are invisible to anyone
              outside the profession. The toll is not.
            </p>

            <div style={s.featureGrid}>
              <div style={s.featureCard}>
                <span style={s.featureIcon}>📋</span>
                <div style={s.featureTitle}>Administrative Burden</div>
                <p style={s.featureBody}>
                  Marking policies, data capture requirements, evidence
                  portfolios, and display mandates consume hours that should be
                  spent on planning and recovery. Many teachers spend more time
                  proving they teach than actually teaching.
                </p>
              </div>
              <div style={s.featureCard}>
                <span style={s.featureIcon}>📊</span>
                <div style={s.featureTitle}>Performance Culture</div>
                <p style={s.featureBody}>
                  Graded observations, progress tracking demands, and the
                  constant requirement to demonstrate impact create a culture
                  of performative exhaustion. Teachers learn to produce
                  evidence rather than outcomes.
                </p>
              </div>
              <div style={s.featureCard}>
                <span style={s.featureIcon}>💰</span>
                <div style={s.featureTitle}>Pay and Progression</div>
                <p style={s.featureBody}>
                  Real-terms pay cuts over a decade have compounded every other
                  stressor. When teachers weigh the workload, the emotional
                  demand, and the salary, the calculation becomes increasingly
                  difficult to justify &mdash; especially for those with families.
                </p>
              </div>
            </div>

            <div style={s.calloutBox}>
              <div style={s.calloutTitle}>The Hidden Retention Driver</div>
              <p style={s.calloutText}>
                Research by the Education Policy Institute identifies that
                teachers who feel supported &mdash; by leaders, by colleagues, and
                by access to wellbeing resources &mdash; are significantly more
                likely to remain in the profession. The quality of the support
                environment matters as much as pay. MEOK cannot fix school
                leadership. But it can be the support environment that exists
                where none currently does.
              </p>
            </div>
          </section>

          {/* ── Section 2: Behaviour Management ─────────────────────────────── */}
          <section style={s.section}>
            <h2 style={s.sectionTitle}>
              The Reality of{" "}
              <span style={s.sectionGold}>Behaviour Management After the Pandemic</span>
            </h2>
            <hr style={s.divider} />

            <p style={s.paragraph}>
              Secondary school teachers in particular are navigating a
              behavioural landscape that has fundamentally changed since 2020.
              Children who missed critical years of social development during
              the pandemic are now in classrooms, and the effects are visible
              daily: reduced tolerance for frustration, increased dysregulation,
              greater difficulty with authority and boundaries, and higher rates
              of diagnosed and undiagnosed SEND and mental health conditions
              within mainstream settings.
            </p>

            <p style={s.paragraph}>
              This is not a criticism of students. It is a description of what
              teachers are managing, often without meaningful additional
              training, adequate support structures, or reduced class sizes.
              Three in four secondary school teachers report that behaviour has
              worsened since the pandemic. Most report receiving little to no
              additional support to address it.
            </p>

            <p style={s.paragraphStrong}>
              The cumulative effect of managing dysregulated behaviour across
              five or six lessons a day, five days a week, is a form of
              occupational trauma that rarely gets named as such. Teachers absorb
              verbal aggression, threats, emotional manipulation, and the
              constant cognitive drain of de-escalation. They do this while
              simultaneously delivering curriculum, differentiating for SEND,
              managing safeguarding concerns, and trying to maintain the
              engagement of thirty other students.
            </p>

            <div style={s.quoteBlock}>
              <p style={s.quoteText}>
                &ldquo;By the time I get home I have nothing left. My family
                ask how my day was and I genuinely cannot find words for it.
                I just sit there and feel like the shell of a person. I know
                I&apos;m burning out but I don&apos;t know who to talk to that
                would actually understand what it feels like.&rdquo;
              </p>
              <span style={s.quoteAttrib}>
                Secondary School Teacher, North of England &mdash; composite
                account from teacher wellbeing research
              </span>
            </div>

            <p style={s.paragraph}>
              MEOK offers something specific here: a space to decompress that
              understands the professional context. Not a stranger in a
              counselling session who requires forty minutes of background to
              understand what a year 9 bottom set is. A sovereign AI companion
              that remembers your school, your year groups, your recurring
              challenges, and can meet you where you are at 9pm when the
              adrenaline of the day has finally worn off.
            </p>

            <div style={s.warningBox}>
              <div style={s.warningTitle}>Why Standard Support Fails Teachers</div>
              <p style={s.warningText}>
                School counselling and EAP schemes, where they exist, are
                available during working hours &mdash; the hours when teachers are
                teaching. GP appointments for stress and anxiety involve waiting
                lists. Teacher-specific support helplines are valuable but
                time-limited. None of these resources are available at 10pm on
                a Sunday night before a difficult week. MEOK is.
              </p>
            </div>
          </section>

          {/* ── Section 3: Ofsted Anxiety ────────────────────────────────────── */}
          <section style={s.section}>
            <h2 style={s.sectionTitle}>
              What Does <span style={s.sectionGold}>Ofsted Anxiety</span> Actually Do to Teachers?
            </h2>
            <hr style={s.divider} />

            <p style={s.paragraph}>
              Ofsted inspection anxiety is a documented and pervasive
              occupational health problem in UK teaching. Because inspections
              can arrive with as little as one day&apos;s notice &mdash; and because
              the stakes attached to inspection outcomes include school
              leadership changes, reputational damage, and in some cases
              academy conversion &mdash; many teachers exist in a state of
              low-grade but persistent alertness that never entirely switches
              off.
            </p>

            <p style={s.paragraph}>
              This is not a character weakness. It is a rational response to a
              genuine threat. The problem is that rational responses to genuine
              threats, sustained for months or years without resolution, are
              physiologically and psychologically damaging. The body does not
              distinguish between a tiger and a monitoring visit from school
              improvement officers. The stress response is the same.
            </p>

            <p style={s.paragraph}>
              The NASUWT has published research showing that the majority of
              teachers report that Ofsted inspections have a significant negative
              effect on their mental health. A significant proportion report
              symptoms that meet clinical thresholds for anxiety disorders
              directly linked to inspection culture. Several high-profile cases
              of teacher deaths by suicide have been publicly connected to
              Ofsted inspections in the years preceding.
            </p>

            <div style={s.featureGrid}>
              <div style={s.featureCard}>
                <span style={s.featureIcon}>🧠</span>
                <div style={s.featureTitle}>Hypervigilance</div>
                <p style={s.featureBody}>
                  Permanent background alertness about lesson quality,
                  documentation, and professional presentation. Teachers
                  describe never being fully able to relax at work because
                  any day could be an inspection day.
                </p>
              </div>
              <div style={s.featureCard}>
                <span style={s.featureIcon}>😔</span>
                <div style={s.featureTitle}>Perfectionism and Self-Criticism</div>
                <p style={s.featureBody}>
                  Excessive self-scrutiny, driven by the fear that any
                  imperfection might be observed and judged. Teachers report
                  spending hours on lesson plans that would previously have
                  taken minutes.
                </p>
              </div>
              <div style={s.featureCard}>
                <span style={s.featureIcon}>😶</span>
                <div style={s.featureTitle}>Anticipatory Dread</div>
                <p style={s.featureBody}>
                  The emotional taxation of expecting something bad without
                  knowing when it will arrive. This form of anticipatory
                  anxiety is particularly draining because it offers no
                  endpoint or resolution.
                </p>
              </div>
              <div style={s.featureCardHighlight}>
                <span style={s.featureIcon}>💬</span>
                <div style={s.featureTitleGold}>How MEOK Helps</div>
                <p style={s.featureBody}>
                  MEOK provides a space to process the anxiety, externalise
                  the dread, and examine the catastrophic thinking that
                  inspection culture tends to produce. Not a replacement for
                  therapeutic support &mdash; but an available, private space to
                  decompress at any hour, without professional risk.
                </p>
              </div>
            </div>

            <p style={s.paragraph}>
              The data sovereignty dimension is particularly important here.
              A teacher who vents about Ofsted anxiety to MEOK is not creating
              any risk of that disclosure reaching their headteacher, local
              authority, or any professional body. The conversation stays
              entirely within the teacher&apos;s sovereign control. No employer
              wellness platform, no school counsellor, and no NHS service can
              make the same guarantee.
            </p>
          </section>

          {/* ── Section 4: Emotional Labour ─────────────────────────────────── */}
          <section style={s.section}>
            <h2 style={s.sectionTitle}>
              The{" "}
              <span style={s.sectionGold}>Emotional Labour</span> of Caring for Children&apos;s Needs
            </h2>
            <hr style={s.divider} />

            <p style={s.paragraph}>
              Teaching is a caring profession. This is not a metaphor. Teachers
              are, for many children, the most consistent caring adult presence
              in their day. Some children arrive at school carrying family
              breakdown, domestic violence, food insecurity, bereavement,
              parental mental illness, abuse, and neglect. They arrive in
              classrooms where teachers are expected to notice distress, respond
              appropriately, make safeguarding referrals, and then deliver a
              lesson on the English Civil War to the other twenty-nine students
              who are waiting.
            </p>

            <p style={s.paragraph}>
              The emotional labour of holding this is invisible in official
              accounts of teacher workload. It does not appear on a planning
              document. It cannot be quantified in a data return. But it
              accumulates, day after day, in the body and mind of every teacher
              who genuinely cares about the children they teach.
            </p>

            <p style={s.paragraphStrong}>
              Teachers are trained to notice vulnerability in children.
              They are almost entirely untrained in processing their own
              emotional responses to what they witness. The profession
              maintains a culture of stoic practicality &mdash; you deal with it,
              you move on, you do not dwell. The consequence is that the
              emotional residue of hundreds of small encounters with children
              in distress accumulates without outlet.
            </p>

            <div style={s.twoColGrid}>
              <div style={s.contrastCard}>
                <div style={s.contrastCardTitle}>What Teachers Carry Home</div>
                <ul style={s.listClean}>
                  <li style={s.listItem}>
                    <span style={s.listBullet}>&#8212;</span>
                    <span>Concern for specific children whose home circumstances are known to be harmful</span>
                  </li>
                  <li style={s.listItem}>
                    <span style={s.listBullet}>&#8212;</span>
                    <span>Guilt about referrals made or not made, words said or unsaid</span>
                  </li>
                  <li style={s.listItem}>
                    <span style={s.listBullet}>&#8212;</span>
                    <span>The weight of being trusted by children who have little trust left to give</span>
                  </li>
                  <li style={s.listItem}>
                    <span style={s.listBullet}>&#8212;</span>
                    <span>Grief when a student moves school, gets excluded, or disappears from sight</span>
                  </li>
                  <li style={s.listItem}>
                    <span style={s.listBullet}>&#8212;</span>
                    <span>Secondary traumatic stress from repeated exposure to disclosures of abuse</span>
                  </li>
                </ul>
              </div>
              <div style={s.contrastCardGreen}>
                <div style={s.contrastCardTitleGreen}>What MEOK Offers</div>
                <ul style={s.listClean}>
                  <li style={s.listItem}>
                    <span style={s.listBulletGreen}>&#10003;</span>
                    <span>A private space to process concern for specific children without breaching confidentiality</span>
                  </li>
                  <li style={s.listItem}>
                    <span style={s.listBulletGreen}>&#10003;</span>
                    <span>Non-judgmental reflection on the decisions and referrals you are wrestling with</span>
                  </li>
                  <li style={s.listItem}>
                    <span style={s.listBulletGreen}>&#10003;</span>
                    <span>A companion who holds your professional context across conversations</span>
                  </li>
                  <li style={s.listItem}>
                    <span style={s.listBulletGreen}>&#10003;</span>
                    <span>Available at the exact moment the weight becomes too heavy to carry alone</span>
                  </li>
                  <li style={s.listItem}>
                    <span style={s.listBulletGreen}>&#10003;</span>
                    <span>Zero professional risk &mdash; completely sovereign, completely private</span>
                  </li>
                </ul>
              </div>
            </div>

            <div style={s.calloutBox}>
              <div style={s.calloutTitle}>On Safeguarding and Privacy</div>
              <p style={s.calloutText}>
                MEOK is not a safeguarding system. Nothing said in MEOK
                constitutes a formal record or referral. Teachers carry
                statutory obligations that exist outside MEOK entirely.
                What MEOK provides is a space to process the emotional weight
                of those obligations &mdash; the anxiety before a referral, the
                doubt after one, the grief of situations that have no good
                outcome &mdash; privately and without professional consequence.
              </p>
            </div>
          </section>

          {/* ── Section 5: Pioneer and Orion ─────────────────────────────────── */}
          <section style={s.section}>
            <h2 style={s.sectionTitle}>
              Pioneer and Orion:{" "}
              <span style={s.sectionGold}>AI Support for Planning and Professional Thinking</span>
            </h2>
            <hr style={s.divider} />

            <p style={s.paragraph}>
              MEOK is primarily a wellbeing companion. But it also contains
              dedicated AI archetypes built for structured thinking, planning,
              and knowledge work. For teachers, these modes open up a different
              kind of support: not emotional processing, but practical
              intellectual partnership for the parts of the job that drain
              cognitive resource.
            </p>

            <p style={s.paragraph}>
              Lesson planning, scheme of work design, differentiation
              strategies, assessment frameworks, and curriculum sequencing
              questions all benefit from having a knowledgeable thinking partner
              who understands your context. Generic AI tools can produce generic
              lesson ideas. MEOK&apos;s Pioneer and Orion modes, working with the
              memory of your professional context, can produce support that is
              actually relevant to your subject, your year groups, and your
              school&apos;s particular approach.
            </p>

            <div style={s.archetypeRow}>
              <div style={s.archetypeCard}>
                <div style={s.archetypeName}>Pioneer</div>
                <div style={s.archetypeMode}>Strategic Thinking Mode</div>
                <p style={s.archetypeDesc}>
                  Pioneer supports long-horizon thinking: curriculum
                  sequencing, career reflection, departmental strategy, and
                  professional development planning. Use Pioneer when you need
                  to think through a significant professional decision or design
                  something that will shape your practice for months.
                </p>
              </div>
              <div style={s.archetypeCard}>
                <div style={s.archetypeName}>Orion</div>
                <div style={s.archetypeMode}>Research and Knowledge Mode</div>
                <p style={s.archetypeDesc}>
                  Orion supports knowledge-intensive tasks: exploring subject
                  content depth, understanding new areas of pedagogy,
                  researching approaches to SEND in your subject area, and
                  preparing for professional development conversations. Use
                  Orion when you need rigour rather than speed.
                </p>
              </div>
              <div style={s.archetypeCard}>
                <div style={s.archetypeName}>Default Companion</div>
                <div style={s.archetypeMode}>Wellbeing and Decompression Mode</div>
                <p style={s.archetypeDesc}>
                  The core MEOK companion for decompression, emotional
                  processing, career reflection, and the daily conversations
                  that help you offload the weight of the profession. Available
                  at any hour, holding your full context, with no agenda beyond
                  your wellbeing.
                </p>
              </div>
            </div>

            <p style={s.paragraph}>
              Because MEOK holds persistent memory of your professional context,
              planning conversations build on each other. The scheme of work
              you discussed last term informs the assessment framework you are
              designing this week. The differentiation challenge you raised with
              a particular cohort is still remembered when a related question
              comes up three months later. This is the value of memory:
              not novelty, but continuity.
            </p>

            <div style={s.warningBox}>
              <div style={s.warningTitle}>What MEOK Is Not</div>
              <p style={s.warningText}>
                MEOK does not replace specialist teaching resources, curriculum
                platforms, or professional development programmes. It does not
                know your school&apos;s specific scheme of work or exam board
                specifications unless you share them. It is a thinking partner
                and wellbeing companion, not a lesson generator or a curriculum
                database. The value is in the conversation, not in pre-packaged
                outputs.
              </p>
            </div>
          </section>

          {/* ── Section 6: SEND ─────────────────────────────────────────────── */}
          <section style={s.section}>
            <h2 style={s.sectionTitle}>
              SEND in Mainstream Classrooms:{" "}
              <span style={s.sectionGold}>What AI Can and Cannot Do</span>
            </h2>
            <hr style={s.divider} />

            <p style={s.paragraph}>
              The inclusion agenda has placed an increasing proportion of
              students with significant special educational needs and
              disabilities into mainstream classrooms, often with limited
              additional resource and variable specialist support. Teachers
              in mainstream schools are expected to differentiate for autism,
              ADHD, dyslexia, dyscalculia, EAL, hearing impairment, physical
              disability, and a range of social, emotional, and mental health
              needs &mdash; simultaneously, in a single lesson, with thirty students.
            </p>

            <p style={s.paragraph}>
              The professional demand this places on teachers is enormous. Many
              teachers feel inadequately trained for the SEND challenges they
              face. The awareness that they are failing to adequately support
              students with high needs &mdash; not through unwillingness but through
              structural impossibility &mdash; is a significant source of the moral
              injury that drives many to leave the profession.
            </p>

            <p style={s.paragraph}>
              MEOK&apos;s Orion archetype can support teachers in building SEND
              awareness: understanding presentations of neurodivergence,
              exploring evidence-based approaches to differentiation, thinking
              through how to approach conversations with SENCOs or specialist
              support services, and processing the frustration of knowing what
              a student needs and being unable to provide it within the
              constraints that exist.
            </p>

            <div style={s.featureGrid}>
              <div style={s.featureCard}>
                <span style={s.featureIcon}>🔍</span>
                <div style={s.featureTitle}>SEND Awareness Support</div>
                <p style={s.featureBody}>
                  Use Orion to deepen your understanding of specific SEND
                  presentations, explore what current evidence says about
                  effective approaches, and think through how to adapt your
                  practice within realistic constraints.
                </p>
              </div>
              <div style={s.featureCard}>
                <span style={s.featureIcon}>💡</span>
                <div style={s.featureTitle}>Differentiation Thinking</div>
                <p style={s.featureBody}>
                  Talk through specific challenges with individual students or
                  cohorts. MEOK holds the context of previous conversations,
                  so your thinking about a particular student builds over time
                  rather than starting from scratch each time.
                </p>
              </div>
              <div style={s.featureCard}>
                <span style={s.featureIcon}>🤝</span>
                <div style={s.featureTitle}>Processing Moral Injury</div>
                <p style={s.featureBody}>
                  The gap between what a SEND student needs and what you are
                  able to provide is a source of genuine moral distress.
                  MEOK provides a private space to acknowledge that distress
                  without blame, judgment, or professional consequence.
                </p>
              </div>
            </div>

            <div style={s.calloutBox}>
              <div style={s.calloutTitle}>Important Limitation</div>
              <p style={s.calloutText}>
                MEOK is not a SEND specialist and cannot provide advice that
                replaces the expertise of SENCOs, educational psychologists,
                speech and language therapists, or any other specialist
                practitioner. It can help you think, research, and process.
                For formal assessments, referrals, and specialist support,
                always work through your school&apos;s established channels.
              </p>
            </div>
          </section>

          {/* ── Section 7: Data Sovereignty ─────────────────────────────────── */}
          <section style={s.section}>
            <h2 style={s.sectionTitle}>
              Why Data Sovereignty{" "}
              <span style={s.sectionGold}>Matters More for Teachers Than Almost Anyone</span>
            </h2>
            <hr style={s.divider} />

            <p style={s.paragraph}>
              Teachers occupy an unusual professional position. They care
              deeply about their students and their colleagues. They have
              opinions about their school&apos;s leadership, their
              headteacher&apos;s decisions, the behaviour of certain parents,
              and the choices made by their department. They carry frustrations
              about the system that they cannot express in the staffroom, in a
              lesson, in a parent meeting, or in any professional context
              without risk.
            </p>

            <p style={s.paragraph}>
              The consequence is a kind of enforced professional silence about
              the very experiences that are most damaging to wellbeing.
              Teachers cannot vent to colleagues about colleagues. They cannot
              criticise leadership to other members of staff without it
              travelling. They cannot tell a counsellor about a specific
              colleague without wondering whether confidentiality will hold.
              Most employer-provided wellbeing tools, EAP schemes, and workplace
              mental health apps are paid for and in some sense connected to the
              employing institution.
            </p>

            <p style={s.paragraphStrong}>
              MEOK is architecturally separate from every educational
              institution. It is a personal sovereign AI &mdash; owned by the
              teacher, not by the school, not by a trust, not by a local
              authority. The conversations you have in MEOK about your head of
              department, your headteacher, the governors, the parents of a
              particular child, the colleague who has been undermining you, the
              decision you think was wrong &mdash; none of that can reach anyone
              you work with.
            </p>

            <div style={s.sovereigntyBox}>
              <div style={s.sovereigntyTitle}>MEOK&apos;s Sovereignty Guarantees for Teachers</div>
              <div style={s.sovereigntyGrid}>
                <div style={s.sovereigntyItem}>
                  <span style={s.sovereigntyCheck}>&#10003;</span>
                  <span style={s.sovereigntyItemText}>No connection to any school, MAT, LA, or employer</span>
                </div>
                <div style={s.sovereigntyItem}>
                  <span style={s.sovereigntyCheck}>&#10003;</span>
                  <span style={s.sovereigntyItemText}>Conversations encrypted under your sovereign control</span>
                </div>
                <div style={s.sovereigntyItem}>
                  <span style={s.sovereigntyCheck}>&#10003;</span>
                  <span style={s.sovereigntyItemText}>Not used to train AI models &mdash; your data is not a product</span>
                </div>
                <div style={s.sovereigntyItem}>
                  <span style={s.sovereigntyCheck}>&#10003;</span>
                  <span style={s.sovereigntyItemText}>Inaccessible to headteachers, line managers, and HR</span>
                </div>
                <div style={s.sovereigntyItem}>
                  <span style={s.sovereigntyCheck}>&#10003;</span>
                  <span style={s.sovereigntyItemText}>Not visible to any regulator or professional body</span>
                </div>
                <div style={s.sovereigntyItem}>
                  <span style={s.sovereigntyCheck}>&#10003;</span>
                  <span style={s.sovereigntyItemText}>Available at any hour without booking or waiting</span>
                </div>
                <div style={s.sovereigntyItem}>
                  <span style={s.sovereigntyCheck}>&#10003;</span>
                  <span style={s.sovereigntyItemText}>Memory persists across conversations &mdash; context is held</span>
                </div>
                <div style={s.sovereigntyItem}>
                  <span style={s.sovereigntyCheck}>&#10003;</span>
                  <span style={s.sovereigntyItemText}>You can delete your data at any time, completely</span>
                </div>
              </div>
            </div>

            <p style={s.paragraph}>
              This is not a policy promise. It is a technical architecture.
              MEOK does not have a backdoor for employers. It does not have a
              reporting obligation. It does not have a wellness dashboard that
              a school business manager can review. The sovereignty is real
              because the design makes it structurally impossible for it to
              be otherwise.
            </p>
          </section>

          {/* ── Section 8: Career Reflection ────────────────────────────────── */}
          <section style={s.section}>
            <h2 style={s.sectionTitle}>
              Career Reflection and the Question{" "}
              <span style={s.sectionGold}>Everyone Is Afraid to Ask Out Loud</span>
            </h2>
            <hr style={s.divider} />

            <p style={s.paragraph}>
              At some point in most teaching careers, the question arrives:
              should I stay? It is a question teachers are often afraid to ask,
              even of themselves. The professional identity of teaching runs
              deep. To question it feels like a kind of betrayal &mdash; of the
              children, of the colleagues, of the vocation. And yet the
              question, when it comes, is important. It deserves honest
              examination rather than suppression.
            </p>

            <p style={s.paragraph}>
              MEOK is a space where that question can be asked without
              consequence. Not as a crisis, not in a performance management
              meeting, not to a colleague who will worry, not to a partner who
              will react with relief or panic. Quietly, privately, in the
              company of an AI that holds your full professional context and
              has no stake in the outcome.
            </p>

            <p style={s.paragraph}>
              Pioneer mode is particularly well suited to career reflection.
              It supports long-horizon thinking: what do you actually want from
              work? What have the best parts of teaching given you that you want
              to preserve? What would you be moving towards, not just away from?
              What are the realistic options? What would the transition look
              like? These are not questions to ask a search engine. They are
              questions to sit with, over time, with a thinking partner who
              remembers where you started.
            </p>

            <div style={s.featureGrid}>
              <div style={s.featureCard}>
                <span style={s.featureIcon}>🗺</span>
                <div style={s.featureTitle}>Exploring What You Actually Want</div>
                <p style={s.featureBody}>
                  Many teachers know they are unhappy but have not had the
                  space to identify what they actually want instead. MEOK
                  provides unhurried space to explore values, strengths, and
                  genuine preferences without being pushed toward a premature
                  decision.
                </p>
              </div>
              <div style={s.featureCard}>
                <span style={s.featureIcon}>🏫</span>
                <div style={s.featureTitle}>Staying Well Within Teaching</div>
                <p style={s.featureBody}>
                  For those who want to remain in the profession, MEOK
                  supports the work of identifying what is sustainable, what
                  boundaries matter, and how to approach a demanding role
                  without destroying the person doing it.
                </p>
              </div>
              <div style={s.featureCard}>
                <span style={s.featureIcon}>🚪</span>
                <div style={s.featureTitle}>Preparing for a Transition</div>
                <p style={s.featureBody}>
                  For those who decide to leave, MEOK supports the thinking
                  process: what skills does teaching build? What sectors value
                  them? What does a realistic transition look like? How do you
                  grieve a vocation while still moving forward?
                </p>
              </div>
            </div>

            <div style={s.quoteBlock}>
              <p style={s.quoteText}>
                &ldquo;The thing nobody tells you about leaving teaching is
                that the hardest part isn&apos;t the logistics. It&apos;s the
                identity. Teaching gets into you. Even when you know you have
                to leave, part of you feels like you are abandoning someone.
                You need somewhere to process that, and there is nowhere that
                actually exists for it.&rdquo;
              </p>
              <span style={s.quoteAttrib}>
                Former secondary school teacher &mdash; composite account
              </span>
            </div>
          </section>

          {/* ── Section 9: MEOK Is Not a Teaching Tool ──────────────────────── */}
          <section style={s.section}>
            <h2 style={s.sectionTitle}>
              MEOK Is{" "}
              <span style={s.sectionGold}>Not a Teaching Tool</span>
            </h2>
            <hr style={s.divider} />

            <p style={s.paragraph}>
              This distinction matters. There is a growing market for AI tools
              aimed at teachers: lesson generators, marking assistants, report
              comment banks, differentiation engines. Some of these tools are
              genuinely useful. MEOK is not competing with them and is not
              designed for the same purpose.
            </p>

            <p style={s.paragraphStrong}>
              MEOK is a sovereign AI wellbeing companion for the person who
              teaches &mdash; not for the act of teaching. Its value is in what
              happens before and after the lesson: the decompression, the
              processing, the planning conversation, the career reflection, the
              moment at 10pm when the weight of the day finally needs somewhere
              to go.
            </p>

            <div style={s.twoColGrid}>
              <div style={s.contrastCard}>
                <div style={s.contrastCardTitle}>Teaching Tools Do This</div>
                <ul style={s.listClean}>
                  <li style={s.listItem}>
                    <span style={s.listBullet}>&#8212;</span>
                    <span>Generate lesson content and resources</span>
                  </li>
                  <li style={s.listItem}>
                    <span style={s.listBullet}>&#8212;</span>
                    <span>Produce report comments and assessments</span>
                  </li>
                  <li style={s.listItem}>
                    <span style={s.listBullet}>&#8212;</span>
                    <span>Suggest differentiation activities</span>
                  </li>
                  <li style={s.listItem}>
                    <span style={s.listBullet}>&#8212;</span>
                    <span>Create quiz and retrieval practice materials</span>
                  </li>
                  <li style={s.listItem}>
                    <span style={s.listBullet}>&#8212;</span>
                    <span>Manage homework and submission workflows</span>
                  </li>
                </ul>
              </div>
              <div style={s.contrastCardGreen}>
                <div style={s.contrastCardTitleGreen}>MEOK Does This</div>
                <ul style={s.listClean}>
                  <li style={s.listItem}>
                    <span style={s.listBulletGreen}>&#10003;</span>
                    <span>Holds space for decompression after difficult days</span>
                  </li>
                  <li style={s.listItem}>
                    <span style={s.listBulletGreen}>&#10003;</span>
                    <span>Processes emotional weight privately and safely</span>
                  </li>
                  <li style={s.listItem}>
                    <span style={s.listBulletGreen}>&#10003;</span>
                    <span>Supports career reflection without judgment</span>
                  </li>
                  <li style={s.listItem}>
                    <span style={s.listBulletGreen}>&#10003;</span>
                    <span>Provides planning partnership that knows your context</span>
                  </li>
                  <li style={s.listItem}>
                    <span style={s.listBulletGreen}>&#10003;</span>
                    <span>Stays completely sovereign &mdash; invisible to your employer</span>
                  </li>
                </ul>
              </div>
            </div>

            <p style={s.paragraph}>
              The two categories are complementary, not competing. Use the
              lesson generator for the lesson. Use MEOK for the person who
              delivers it.
            </p>
          </section>

          {/* ── FAQ Section ─────────────────────────────────────────────────── */}
          <section style={s.faqSection}>
            <h2 style={s.sectionTitle}>
              Questions Teachers{" "}
              <span style={s.sectionGold}>Ask About MEOK</span>
            </h2>
            <hr style={s.divider} />

            <div style={s.faqItem}>
              <h3 style={s.faqQuestion}>
                Why are so many teachers leaving the profession in the UK?
              </h3>
              <p style={s.faqAnswer}>
                Around 40% of UK teachers leave the profession within five years
                of qualifying, according to DfE data. The causes are
                well-documented: unsustainable workload driven by marking,
                planning, and data entry obligations; behaviour management
                challenges that have worsened significantly since the pandemic;
                Ofsted inspection anxiety that creates a permanent low-grade
                professional dread; real-terms pay cuts over a decade; and the
                emotional labour of caring deeply for children who arrive
                carrying trauma, poverty, and complex needs. The profession
                asks an extraordinary amount of its people and provides
                comparatively little structural support in return.
              </p>
            </div>

            <div style={s.faqItem}>
              <h3 style={s.faqQuestion}>
                Can AI support teacher mental health and wellbeing?
              </h3>
              <p style={s.faqAnswer}>
                AI companions like MEOK are not therapists and do not replace
                professional mental health support. What they offer is different:
                a private, available-at-any-hour decompression space where
                teachers can offload the accumulated emotional weight of the day
                &mdash; the difficult class, the confrontational parent, the
                safeguarding concern, the impossible workload &mdash; without
                professional risk, without judgment, and without needing to book
                an appointment weeks in advance. MEOK is a sovereign AI that
                belongs to the teacher, not the school, so conversations remain
                completely private.
              </p>
            </div>

            <div style={s.faqItem}>
              <h3 style={s.faqQuestion}>
                What is Ofsted anxiety and how does it affect teachers?
              </h3>
              <p style={s.faqAnswer}>
                Ofsted anxiety is the sustained psychological stress associated
                with the possibility of an Ofsted inspection. Because inspections
                can arrive with just one day&apos;s notice, many teachers operate
                under a background level of vigilance that never fully switches
                off. Research by the NASUWT and NEU consistently links Ofsted
                inspection culture to increased rates of teacher anxiety,
                depression, and departure from the profession. The effects
                include perfectionism about lesson plans and documentation,
                heightened self-scrutiny, and a form of anticipatory dread that
                offers no resolution.
              </p>
            </div>

            <div style={s.faqItem}>
              <h3 style={s.faqQuestion}>
                Is MEOK confidential for teachers who need to vent about school?
              </h3>
              <p style={s.faqAnswer}>
                Completely. MEOK is an independent personal AI with no
                connection to any school, multi-academy trust, local authority,
                or educational institution. Conversations are encrypted and held
                under the teacher&apos;s sovereign control. This means teachers
                can speak freely: about a difficult headteacher, about a
                confrontational parent, about a colleague whose behaviour is
                affecting the department, about feeling like they want to leave.
                Nothing said in MEOK can reach a line manager or school
                leadership team. This is not a policy promise &mdash; it is a
                technical architecture.
              </p>
            </div>

            <div style={s.faqItem}>
              <h3 style={s.faqQuestion}>
                Can MEOK help teachers with lesson planning and curriculum work?
              </h3>
              <p style={s.faqAnswer}>
                Yes. Beyond emotional support, MEOK includes Pioneer and Orion
                &mdash; two AI archetypes built for structured thinking, planning,
                and knowledge work. Teachers can use these modes to think through
                lesson structures, explore approaches to challenging topics,
                work through curriculum sequencing questions, and prepare for
                professional development conversations. Because MEOK remembers
                the teacher&apos;s professional context across conversations, it
                provides genuinely personalised support rather than generic
                suggestions &mdash; understanding your year group, your subject,
                and the particular challenges of your school.
              </p>
            </div>
          </section>

          {/* ── CTA Section ─────────────────────────────────────────────────── */}
          <section style={s.ctaSection}>
            <div style={s.ctaGlow} aria-hidden="true" />
            <h2 style={s.ctaTitle}>
              You Hold the Weight of Every Child in Your Class.{" "}
              <span style={s.heroGold}>Who Holds Yours?</span>
            </h2>
            <p style={s.ctaText}>
              MEOK is a sovereign AI wellbeing companion built for people
              carrying more than they should have to carry alone. Private,
              confidential, available at any hour. Not a teaching tool &mdash;
              a companion for the teacher.
            </p>
            <Link href="https://meok.ai/birth" style={s.ctaButton}>
              Begin with MEOK &rarr;
            </Link>
            <p style={s.ctaSubtext}>
              Sovereign. Confidential. Yours alone. No connection to your school.
            </p>
          </section>

          {/* ── Related Reading ─────────────────────────────────────────────── */}
          <section style={s.section}>
            <h2 style={s.sectionTitle}>Related Reading</h2>
            <div style={s.relatedGrid}>
              <Link href="/blog/meok-for-nurses" style={s.relatedCard}>
                <span style={s.relatedLabel}>Caring Professions</span>
                <span style={s.relatedTitle}>
                  MEOK for Nurses: Sovereign AI for Those Who Care for Everyone Else
                </span>
              </Link>
              <Link href="/blog/ai-for-burnout" style={s.relatedCard}>
                <span style={s.relatedLabel}>Burnout</span>
                <span style={s.relatedTitle}>
                  AI for Burnout: What It Can and Cannot Do
                </span>
              </Link>
              <Link href="/blog/data-sovereignty-ai" style={s.relatedCard}>
                <span style={s.relatedLabel}>Privacy</span>
                <span style={s.relatedTitle}>
                  Data Sovereignty in AI: Why It Matters for Your Most Private Conversations
                </span>
              </Link>
              <Link href="/blog/sovereign-ai-explained" style={s.relatedCard}>
                <span style={s.relatedLabel}>Explainer</span>
                <span style={s.relatedTitle}>
                  What Is Sovereign AI? A Plain-Language Guide
                </span>
              </Link>
              <Link href="/blog/ai-for-teachers" style={s.relatedCard}>
                <span style={s.relatedLabel}>Education</span>
                <span style={s.relatedTitle}>
                  AI for Teachers: The Landscape in 2026
                </span>
              </Link>
              <Link href="/blog/meok-for-healthcare-workers" style={s.relatedCard}>
                <span style={s.relatedLabel}>Healthcare</span>
                <span style={s.relatedTitle}>
                  MEOK for Healthcare Workers: Sovereign AI Support for Those on the Front Line
                </span>
              </Link>
            </div>
          </section>

        </main>

        {/* ── Footer ──────────────────────────────────────────────────────────── */}
        <footer style={s.footer}>
          <p style={s.footerText}>
            &copy; 2026 MEOK AI LABS &mdash;{" "}
            <Link href="https://meok.ai" style={s.footerLink}>meok.ai</Link>
            {" "}&mdash;{" "}
            <Link href="/blog" style={s.footerLink}>Blog</Link>
            {" "}&mdash;{" "}
            <Link href="/privacy" style={s.footerLink}>Privacy</Link>
            {" "}&mdash;{" "}
            <Link href="/about" style={s.footerLink}>About</Link>
          </p>
          <p style={s.footerSecondary}>
            MEOK is a personal wellbeing companion, not a medical device,
            therapy service, or mental health treatment. If you are in crisis,
            please contact{" "}
            <Link href="https://www.samaritans.org" style={s.footerLink}>
              Samaritans
            </Link>{" "}
            on 116 123 or your GP.
          </p>
        </footer>

      </div>
    </>
  )
}
