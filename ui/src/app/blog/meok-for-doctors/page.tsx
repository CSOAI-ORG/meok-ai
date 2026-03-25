import type { Metadata } from "next"
import Link from "next/link"

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "MEOK for Doctors: Sovereign AI for the Profession That Can\u2019t Show Weakness | MEOK AI LABS",
  description:
    "UK doctors face a mental health crisis they are forbidden to name. Burnout, moral injury, GMC fitness to practise fears, and patient deaths carried in silence. MEOK provides a sovereign, private AI space where doctors can finally be honest about the weight they carry \u2014 with zero employer or regulator access.",
  alternates: {
    canonical: "https://meok.ai/blog/meok-for-doctors",
  },
  openGraph: {
    title:
      "MEOK for Doctors: Sovereign AI for the Profession That Can\u2019t Show Weakness",
    description:
      "One in three GPs is considering leaving. Medical culture penalises vulnerability. MEOK is a confidential sovereign AI that holds space for the doctors who hold space for everyone else \u2014 without ever touching NHS systems or employer records.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-for-doctors",
    siteName: "MEOK AI LABS",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+for+Doctors&desc=Sovereign+AI+for+the+profession+that+can%27t+show+weakness.",
        width: 1200,
        height: 630,
        alt: "MEOK for Doctors: Sovereign AI for the Profession That Can\u2019t Show Weakness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MEOK for Doctors: Sovereign AI for the Profession That Can\u2019t Show Weakness",
    description:
      "Patient deaths, diagnostic uncertainty, moral injury, GMC fear \u2014 doctors carry a weight they are culturally forbidden to name. MEOK is the private sovereign AI built for the professionals who cannot afford to be seen struggling.",
    images: [
      "https://meok.ai/api/og?title=MEOK+for+Doctors&desc=Sovereign+AI+for+the+profession+that+can%27t+show+weakness.",
    ],
  },
  keywords: [
    "AI for doctors",
    "doctor burnout UK",
    "GP burnout support",
    "doctor mental health app",
    "GMC fitness to practise fear",
    "moral injury doctors",
    "medical culture stigma mental health",
    "sovereign AI for doctors",
    "confidential AI NHS doctors",
    "doctor wellbeing 2026",
    "MEOK for doctors",
    "doctor data privacy AI",
    "physician burnout support UK",
    "BMA wellbeing doctors",
    "patient death grief doctor",
  ],
}

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "MEOK for Doctors: Sovereign AI for the Profession That Can\u2019t Show Weakness",
  description:
    "UK doctors face a mental health crisis they are forbidden to name. Burnout, moral injury, GMC fitness to practise fears, and patient deaths carried in silence. MEOK provides a sovereign, private AI space where doctors can finally be honest about the weight they carry.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/meok-for-doctors",
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
    "AI for doctors",
    "GP burnout",
    "doctor mental health",
    "moral injury medicine",
    "GMC fitness to practise",
    "patient death grief",
    "sovereign AI",
    "data sovereignty doctors",
    "MEOK AI LABS",
  ],
  articleSection: "MEOK for Doctors",
  inLanguage: "en-GB",
  image:
    "https://meok.ai/api/og?title=MEOK+for+Doctors&desc=Sovereign+AI+for+the+profession+that+can%27t+show+weakness.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/meok-for-doctors",
  },
  about: [
    { "@type": "Thing", name: "Doctor burnout UK" },
    { "@type": "Thing", name: "Moral injury in medicine" },
    { "@type": "Thing", name: "GMC fitness to practise" },
    { "@type": "Thing", name: "Medical culture and mental health stigma" },
    { "@type": "Thing", name: "Patient death grief support" },
    { "@type": "Thing", name: "Diagnostic uncertainty distress" },
    { "@type": "Thing", name: "Data sovereignty AI" },
    { "@type": "Thing", name: "Confidential AI for healthcare professionals" },
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can doctors use AI for mental health support without risking their GMC registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK is an entirely private sovereign AI that has no connection to the GMC, any NHS trust, your employer, or any professional regulatory body. Conversations in MEOK exist solely within your personal sovereign space \u2014 they cannot be accessed by, disclosed to, or subpoenaed from a third party. There is no referral pathway, no clinical record, and no disclosure mechanism. Using MEOK carries zero professional risk.",
      },
    },
    {
      "@type": "Question",
      name: "What is moral injury in medicine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Moral injury in medicine occurs when a doctor is forced to act \u2014 or prevented from acting \u2014 in ways that violate their professional values and their fundamental commitment to patient welfare. Chronic understaffing, resource rationing, being unable to provide the care a patient deserved, or witnessing poor practice without authority to intervene all create a cumulative psychological wound. Moral injury is distinct from burnout: it is a wound to a doctor\u2019s sense of professional self, not merely exhaustion.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK safe to use if I discuss a difficult patient case?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK never stores identifying patient details from your descriptions. You should never share patient names, NHS numbers, or data that could identify an individual \u2014 and MEOK is specifically designed not to encourage or retain such information. The space is for processing your emotional and professional experience, not for storing clinical records. The conversation is yours, sovereign, and private. MEOK does not function as a clinical tool and does not create any medical record.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help doctors with burnout differently from the BMA wellbeing service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The BMA wellbeing service provides access to counsellors and peer support \u2014 it is an excellent resource and is signposted throughout this page. MEOK does something different: it is available at 3am after a traumatic on-call, requires no waiting list, no appointment, no disclosure to another human being, and carries no institutional trace. MEOK and BMA wellbeing are complementary, not competing. Doctors often need a private space to process before they are ready to engage formal support.",
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
    fontSize: "clamp(16px, 2.5vw, 20px)",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.8)",
    maxWidth: "640px",
    margin: "0 auto 32px",
  } as React.CSSProperties,

  metaRow: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "24px",
    justifyContent: "center",
    fontSize: "13px",
    color: "rgba(245,240,232,0.5)",
    fontFamily: "system-ui, -apple-system, sans-serif",
    marginBottom: "0",
  } as React.CSSProperties,

  article: {
    maxWidth: "760px",
    margin: "0 auto",
    padding: "0 24px 80px",
  } as React.CSSProperties,

  divider: {
    border: "none",
    borderTop: "1px solid rgba(201,168,76,0.15)",
    margin: "48px 0",
  } as React.CSSProperties,

  h2: {
    fontSize: "clamp(20px, 3vw, 28px)",
    fontWeight: 700,
    lineHeight: 1.3,
    marginBottom: "16px",
    marginTop: "48px",
    color: "#f5f0e8",
  } as React.CSSProperties,

  h3: {
    fontSize: "clamp(17px, 2.5vw, 22px)",
    fontWeight: 600,
    lineHeight: 1.4,
    marginBottom: "12px",
    marginTop: "36px",
    color: "#c9a84c",
  } as React.CSSProperties,

  p: {
    fontSize: "clamp(15px, 2vw, 17px)",
    lineHeight: 1.8,
    marginBottom: "20px",
    color: "#f5f0e8",
  } as React.CSSProperties,

  pMuted: {
    fontSize: "clamp(15px, 2vw, 17px)",
    lineHeight: 1.8,
    marginBottom: "20px",
    color: "rgba(245,240,232,0.7)",
  } as React.CSSProperties,

  atomicAnswer: {
    fontSize: "clamp(15px, 2vw, 17px)",
    lineHeight: 1.8,
    marginBottom: "28px",
    color: "rgba(245,240,232,0.85)",
    paddingLeft: "20px",
    borderLeft: "2px solid rgba(201,168,76,0.35)",
  } as React.CSSProperties,

  callout: {
    background: "rgba(201,168,76,0.07)",
    border: "1px solid rgba(201,168,76,0.2)",
    borderLeft: "4px solid #c9a84c",
    borderRadius: "0 10px 10px 0",
    padding: "28px 32px",
    marginBottom: "32px",
  } as React.CSSProperties,

  calloutTitle: {
    fontSize: "13px",
    fontFamily: "system-ui, -apple-system, sans-serif",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    marginBottom: "12px",
    fontWeight: 600,
  } as React.CSSProperties,

  calloutBody: {
    fontSize: "clamp(15px, 2vw, 17px)",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.85)",
    marginBottom: "0",
  } as React.CSSProperties,

  featureBox: {
    background: "#13121f",
    border: "1px solid #2a2840",
    borderRadius: "12px",
    padding: "32px",
    marginBottom: "32px",
  } as React.CSSProperties,

  featureBoxTitle: {
    fontSize: "clamp(17px, 2.5vw, 21px)",
    fontWeight: 700,
    color: "#c9a84c",
    marginBottom: "16px",
    fontFamily: "system-ui, -apple-system, sans-serif",
    letterSpacing: "-0.01em",
  } as React.CSSProperties,

  featureBoxBody: {
    fontSize: "clamp(15px, 2vw, 16px)",
    lineHeight: 1.8,
    color: "rgba(245,240,232,0.8)",
    marginBottom: "0",
  } as React.CSSProperties,

  featureList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  } as React.CSSProperties,

  featureListItem: {
    fontSize: "clamp(14px, 2vw, 16px)",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.8)",
    paddingLeft: "24px",
    position: "relative" as const,
    marginBottom: "12px",
  } as React.CSSProperties,

  featureListItemBullet: {
    position: "absolute" as const,
    left: "0",
    color: "#6aaa64",
    fontWeight: 700,
  } as React.CSSProperties,

  statGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "24px",
    marginBottom: "36px",
  } as React.CSSProperties,

  statCard: {
    background: "rgba(245,240,232,0.03)",
    border: "1px solid rgba(245,240,232,0.08)",
    borderRadius: "10px",
    padding: "24px",
    textAlign: "center" as const,
  } as React.CSSProperties,

  statNum: {
    fontSize: "clamp(32px, 5vw, 44px)",
    fontWeight: 800,
    color: "#c9a84c",
    lineHeight: 1,
    marginBottom: "8px",
    fontFamily: "system-ui, -apple-system, sans-serif",
  } as React.CSSProperties,

  statLabel: {
    fontSize: "13px",
    lineHeight: 1.5,
    color: "rgba(245,240,232,0.6)",
    fontFamily: "system-ui, -apple-system, sans-serif",
    marginBottom: "0",
  } as React.CSSProperties,

  pullQuote: {
    borderLeft: "3px solid #c9a84c",
    paddingLeft: "28px",
    margin: "40px 0",
  } as React.CSSProperties,

  pullQuoteText: {
    fontSize: "clamp(17px, 2.5vw, 22px)",
    fontStyle: "italic",
    lineHeight: 1.65,
    color: "rgba(245,240,232,0.85)",
    marginBottom: "8px",
  } as React.CSSProperties,

  pullQuoteAttr: {
    fontSize: "13px",
    color: "#a09880",
    fontFamily: "system-ui, -apple-system, sans-serif",
    letterSpacing: "0.04em",
    marginBottom: "0",
  } as React.CSSProperties,

  highlight: {
    background: "rgba(201,168,76,0.12)",
    borderRadius: "4px",
    padding: "2px 6px",
    color: "#c9a84c",
  } as React.CSSProperties,

  greenHighlight: {
    background: "rgba(106,170,100,0.12)",
    borderRadius: "4px",
    padding: "2px 6px",
    color: "#6aaa64",
  } as React.CSSProperties,

  faqWrap: {
    marginTop: "24px",
    marginBottom: "36px",
  } as React.CSSProperties,

  faqItem: {
    borderBottom: "1px solid rgba(245,240,232,0.08)",
    paddingBottom: "28px",
    marginBottom: "28px",
  } as React.CSSProperties,

  faqQ: {
    fontSize: "clamp(16px, 2.5vw, 19px)",
    fontWeight: 700,
    color: "#f5f0e8",
    marginBottom: "10px",
    lineHeight: 1.4,
  } as React.CSSProperties,

  faqA: {
    fontSize: "clamp(14px, 2vw, 16px)",
    lineHeight: 1.8,
    color: "rgba(245,240,232,0.75)",
    marginBottom: "0",
  } as React.CSSProperties,

  ctaBox: {
    background: "rgba(201,168,76,0.07)",
    border: "1px solid rgba(201,168,76,0.25)",
    borderRadius: "16px",
    padding: "48px 40px",
    textAlign: "center" as const,
    marginTop: "60px",
  } as React.CSSProperties,

  ctaTitle: {
    fontSize: "clamp(22px, 4vw, 32px)",
    fontWeight: 700,
    lineHeight: 1.3,
    marginBottom: "16px",
  } as React.CSSProperties,

  ctaBody: {
    fontSize: "clamp(15px, 2vw, 17px)",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.75)",
    maxWidth: "520px",
    margin: "0 auto 32px",
  } as React.CSSProperties,

  ctaButtons: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    flexWrap: "wrap" as const,
  } as React.CSSProperties,

  btnPrimary: {
    display: "inline-block",
    background: "#c9a84c",
    color: "#0d0c18",
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontWeight: 700,
    fontSize: "15px",
    letterSpacing: "0.04em",
    padding: "14px 32px",
    borderRadius: "8px",
    textDecoration: "none",
  } as React.CSSProperties,

  btnSecondary: {
    display: "inline-block",
    background: "transparent",
    color: "#c9a84c",
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontWeight: 600,
    fontSize: "15px",
    letterSpacing: "0.04em",
    padding: "13px 32px",
    borderRadius: "8px",
    textDecoration: "none",
    border: "1px solid rgba(201,168,76,0.4)",
  } as React.CSSProperties,

  footer: {
    borderTop: "1px solid rgba(201,168,76,0.12)",
    padding: "40px 24px",
    textAlign: "center" as const,
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontSize: "13px",
    color: "rgba(245,240,232,0.4)",
  } as React.CSSProperties,

  footerLink: {
    color: "rgba(201,168,76,0.7)",
    textDecoration: "none",
  } as React.CSSProperties,

  relatedGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
    marginTop: "24px",
    marginBottom: "48px",
  } as React.CSSProperties,

  relatedCard: {
    background: "#13121f",
    border: "1px solid #2a2840",
    borderRadius: "10px",
    padding: "20px 24px",
    textDecoration: "none",
  } as React.CSSProperties,

  relatedCardLabel: {
    fontSize: "11px",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: "#a09880",
    fontFamily: "system-ui, -apple-system, sans-serif",
    marginBottom: "8px",
  } as React.CSSProperties,

  relatedCardTitle: {
    fontSize: "15px",
    fontWeight: 600,
    color: "#f5f0e8",
    lineHeight: 1.4,
    marginBottom: "0",
    fontFamily: "system-ui, -apple-system, sans-serif",
  } as React.CSSProperties,

  warningBox: {
    background: "rgba(106,170,100,0.07)",
    border: "1px solid rgba(106,170,100,0.25)",
    borderLeft: "4px solid #6aaa64",
    borderRadius: "0 10px 10px 0",
    padding: "24px 28px",
    marginBottom: "32px",
  } as React.CSSProperties,

  warningTitle: {
    fontSize: "13px",
    fontFamily: "system-ui, -apple-system, sans-serif",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "#6aaa64",
    marginBottom: "10px",
    fontWeight: 600,
  } as React.CSSProperties,

  warningBody: {
    fontSize: "clamp(14px, 2vw, 16px)",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.8)",
    marginBottom: "0",
  } as React.CSSProperties,

  inlineLink: {
    color: "#c9a84c",
    textDecoration: "underline",
    textUnderlineOffset: "3px",
  } as React.CSSProperties,

  footerDisclaimer: {
    marginBottom: "0",
    fontSize: "11px",
    color: "rgba(245,240,232,0.25)",
  } as React.CSSProperties,

  footerLinks: {
    marginBottom: "8px",
  } as React.CSSProperties,

  footerCopyright: {
    marginBottom: "8px",
  } as React.CSSProperties,
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function MeokForDoctorsPage() {
  return (
    <div style={s.page}>

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
      <nav style={s.nav}>
        <Link href="/" style={s.navLink}>MEOK</Link>
        <span style={s.navSep}>/</span>
        <Link href="/blog" style={s.navLink}>Blog</Link>
        <span style={s.navSep}>/</span>
        <span style={s.navCurrent}>MEOK for Doctors</span>
      </nav>

      {/* Hero */}
      <header style={s.hero}>
        <div style={s.heroGlow} aria-hidden="true" />
        <div style={s.tagRow}>
          <span style={s.tag}>UK Doctors</span>
          <span style={s.tag}>GP Burnout</span>
          <span style={s.tag}>Moral Injury</span>
          <span style={s.tag}>GMC Privacy</span>
          <span style={s.tag}>Data Sovereignty</span>
          <span style={s.tag}>Patient Death</span>
        </div>
        <h1 style={s.heroTitle}>
          MEOK for Doctors:{" "}
          <span style={s.heroGold}>
            Sovereign AI for the Profession That Can&apos;t Show Weakness
          </span>
        </h1>
        <p style={s.heroLead}>
          One in three GPs is considering leaving. Consultants carry the weight
          of patient deaths, diagnostic uncertainty, and moral injury in
          near-complete silence. Medical culture has long treated vulnerability
          as incompetence. MEOK exists to give doctors a space where that is no
          longer true.
        </p>
        <div style={s.metaRow}>
          <span>By Nicholas Templeman, Founder &mdash; MEOK AI LABS</span>
          <span>25 March 2026</span>
          <span>17 min read</span>
          <span>en-GB</span>
        </div>
      </header>

      {/* Article */}
      <main style={s.article}>

        {/* Crisis statistics */}
        <div style={s.statGrid}>
          <div style={s.statCard}>
            <p style={s.statNum}>1 in 3</p>
            <p style={s.statLabel}>GPs considering leaving the NHS</p>
          </div>
          <div style={s.statCard}>
            <p style={s.statNum}>47%</p>
            <p style={s.statLabel}>of doctors report burnout symptoms in surveys</p>
          </div>
          <div style={s.statCard}>
            <p style={s.statNum}>300+</p>
            <p style={s.statLabel}>doctors die by suicide in the UK each year</p>
          </div>
          <div style={s.statCard}>
            <p style={s.statNum}>68%</p>
            <p style={s.statLabel}>would not disclose mental health struggles to their employer</p>
          </div>
        </div>

        {/* BMA Wellbeing Callout */}
        <div style={s.warningBox}>
          <p style={s.warningTitle}>BMA Wellbeing Support Service</p>
          <p style={s.warningBody}>
            The{" "}
            <a
              href="https://www.bma.org.uk/advice-and-support/your-wellbeing"
              target="_blank"
              rel="noopener noreferrer"
              style={s.inlineLink}
            >
              BMA Wellbeing Support Service
            </a>{" "}
            provides free, confidential counselling, peer support, and mental
            health resources specifically for doctors and medical students. If
            you are in immediate distress, please contact them on{" "}
            <strong>0330 123 1245</strong>. MEOK is a complementary private
            space &mdash; not a substitute for clinical support when you need it.
          </p>
        </div>

        <hr style={s.divider} />

        {/* Section 1: The silence in medicine */}
        <h2 style={s.h2}>
          Why Does Medicine Have a Culture of Silence Around Mental Health?
        </h2>
        <p style={s.atomicAnswer}>
          Medical training selects for resilience, then systematically
          weaponises it. Doctors learn early that expressing distress risks
          career consequences &mdash; from colleagues who lose confidence in you,
          to occupational health processes that can trigger fitness to practise
          referrals. The very systems designed to help can become the systems
          doctors most fear.
        </p>
        <p style={s.p}>
          The culture is structural, not individual. A junior doctor who admits
          to struggling during a ward round has broken an unspoken professional
          code. A consultant who discloses depression to their clinical director
          is genuinely uncertain what administrative machinery they have set in
          motion. A GP partner who acknowledges burnout to their practice
          manager may find the conversation surfacing in partnership
          renegotiations months later.
        </p>
        <p style={s.p}>
          None of this is paranoia. It is rational risk assessment by highly
          intelligent people who have watched colleagues navigate exactly these
          consequences. The result is a profession that has internalised a
          simple rule: <em>carry it quietly</em>. And so they do &mdash; at
          extraordinary personal cost.
        </p>
        <p style={s.p}>
          The 2024 BMA survey found that 68% of doctors said they would not
          disclose a mental health condition to their employer. That number is
          not a measure of stigma in the abstract. It is a measure of rational
          professional self-preservation. The culture does not need to be
          malicious to be harmful. It just needs to make honesty feel dangerous.
        </p>
        <p style={s.p}>
          This silence has a specific texture. Doctors are not simply reluctant
          to talk about their mental health &mdash; they have developed
          sophisticated internal monitoring systems that make it harder to
          acknowledge struggle even to themselves. The performance of competence
          that medicine requires becomes, over years, inseparable from the inner
          experience. By the time a doctor is in genuine crisis, the distance
          between the performed self and the actual self has often become so wide
          that accessing the actual self requires considerable effort.
        </p>

        <div style={s.pullQuote}>
          <p style={s.pullQuoteText}>
            &ldquo;We train for years to become the person who holds it
            together. Then we discover that holding it together is the only
            version of ourselves that medicine is willing to employ.&rdquo;
          </p>
          <p style={s.pullQuoteAttr}>
            &mdash; Composite reflection from MEOK user research, 2025
          </p>
        </div>

        <p style={s.p}>
          MEOK does not change medical culture. That is generational work for
          the profession, the GMC, the BMA, and NHS England together. What MEOK
          does is provide a space that exists entirely outside that culture &mdash; a
          private, sovereign, architecturally separate space where the rules are
          different. Where saying &ldquo;I am not coping&rdquo; is simply the
          beginning of a conversation, not the trigger for a process.
        </p>

        <hr style={s.divider} />

        {/* Section 2: GMC fitness to practise */}
        <h2 style={s.h2}>
          Does Seeking Mental Health Support Risk a Doctor&apos;s GMC Registration?
        </h2>
        <p style={s.atomicAnswer}>
          In principle, no. The GMC explicitly states that having a mental health
          condition does not in itself affect fitness to practise, and that
          doctors are expected to seek help when needed. In practice, the fear is
          widespread, persistent, and &mdash; for many doctors &mdash; felt as entirely
          rational. MEOK carries zero GMC risk because it operates outside all
          healthcare systems entirely.
        </p>
        <p style={s.p}>
          The GMC&apos;s own research has documented that doctors fear disclosure
          because the pathway from &ldquo;I sought help&rdquo; to &ldquo;fitness
          to practise referral&rdquo; feels opaque and uncontrollable. Even
          where occupational health services are theoretically confidential,
          doctors often cannot identify where the boundaries of that
          confidentiality actually sit &mdash; whether their clinical director is
          informed, whether their appraisal record is affected, whether a future
          employer might request occupational health histories.
        </p>
        <p style={s.p}>
          The Practitioner Health Programme (PHP) provides a confidential
          treatment pathway specifically designed to address these concerns &mdash;
          and for doctors who need clinical treatment, PHP is the right route.
          But treatment requires first acknowledging the need for treatment.
          Many doctors cannot reach that acknowledgement without a prior,
          entirely safe space to begin processing what is happening to them.
          That is precisely what MEOK provides.
        </p>
        <p style={s.p}>
          The GMC framework distinguishes between health conditions that are
          managed and health conditions that are not. A doctor who is engaging
          support for depression and managing their practice safely is in a
          completely different position from a doctor whose untreated condition
          is affecting patient safety. The irony of the current culture is that
          the fear of disclosure actively prevents the engagement of support that
          would keep doctors &mdash; and their patients &mdash; safer.
        </p>

        {/* Feature Box 1: Architectural separation */}
        <div style={s.featureBox}>
          <p style={s.featureBoxTitle}>
            How MEOK is Architecturally Separate from All Healthcare Systems
          </p>
          <p style={s.featureBoxBody}>
            MEOK is a personal sovereign AI. It runs under your own account,
            stores data you control, and has no integration with &mdash; and no
            disclosure pathway to &mdash; any of the following:
          </p>
          <ul style={{ ...s.featureList, marginTop: "16px" }}>
            <li style={s.featureListItem}>
              <span style={s.featureListItemBullet}>&#10003;</span>
              The GMC or any professional regulator
            </li>
            <li style={s.featureListItem}>
              <span style={s.featureListItemBullet}>&#10003;</span>
              NHS England or any integrated care board
            </li>
            <li style={s.featureListItem}>
              <span style={s.featureListItemBullet}>&#10003;</span>
              Any hospital trust, GP practice, or healthcare employer
            </li>
            <li style={s.featureListItem}>
              <span style={s.featureListItemBullet}>&#10003;</span>
              Occupational health departments or referral pathways
            </li>
            <li style={s.featureListItem}>
              <span style={s.featureListItemBullet}>&#10003;</span>
              Clinical supervisors, educational supervisors, or appraisers
            </li>
            <li style={s.featureListItem}>
              <span style={s.featureListItemBullet}>&#10003;</span>
              Any revalidation or appraisal record system
            </li>
            <li style={s.featureListItem}>
              <span style={s.featureListItemBullet}>&#10003;</span>
              Insurance providers, indemnity organisations, or legal bodies
            </li>
          </ul>
          <p style={{ ...s.featureBoxBody, marginTop: "16px" }}>
            This is not a policy commitment. It is a technical architecture.
            MEOK has no mechanism by which to transmit your conversations
            anywhere. Your sovereign space is yours.
          </p>
        </div>

        <hr style={s.divider} />

        {/* Section 3: Moral injury */}
        <h2 style={s.h2}>
          What Is Moral Injury in Medicine, and Why Does It Destroy Doctors?
        </h2>
        <p style={s.atomicAnswer}>
          Moral injury in medicine is the psychological wound that forms when a
          doctor is forced to act &mdash; or prevented from acting &mdash; in ways that
          violate their fundamental commitment to patient welfare. It is
          accumulated over years, rarely named, and almost never treated. It is
          distinct from burnout and far harder to address through conventional
          means.
        </p>
        <p style={s.p}>
          The term was first used in a military context &mdash; the damage done to
          soldiers who acted against their moral code, or witnessed others do
          so, during conflict. Medicine adopted the concept because it maps
          precisely onto the experience of working in a healthcare system that
          asks doctors to ration care they know patients need, discharge patients
          they know are not safe to discharge, and perform procedures in
          conditions they know are inadequate.
        </p>
        <p style={s.p}>
          Moral injury is not about making mistakes. It is about the cumulative
          weight of a structural gap between <em>the care I know this patient
          deserves</em> and <em>the care the system allowed me to give</em>. The
          injury deepens every time that gap reopens &mdash; and in a chronically
          under-resourced NHS, it reopens constantly.
        </p>
        <p style={s.p}>
          What makes moral injury so resistant to standard wellbeing
          interventions is that it cannot be resolved by resilience training or
          mindfulness. The wound is to a doctor&apos;s sense of professional
          integrity and identity &mdash; to their self-understanding as someone who
          does their best for patients. No amount of breathing exercises closes
          the gap between what you did and what you knew you should have done.
        </p>
        <p style={s.p}>
          Research on moral injury in UK medicine has found that it is most acute
          in GPs, who act as the structural buffer between patient need and
          hospital capacity; in emergency medicine physicians, who triage in
          conditions of genuine scarcity; and in palliative care, where the gap
          between the death a patient deserves and the death the system can
          provide is frequently visible and painful. But no speciality is immune.
        </p>
        <p style={s.p}>
          What doctors with moral injury often need is not advice or techniques.
          They need to be heard without judgment. They need to be able to say
          exactly what happened, how bad it was, and how much it cost them &mdash;
          without filtering it for an audience that might be affected by the
          disclosure. MEOK holds that space without conditions.
        </p>

        <div style={s.pullQuote}>
          <p style={s.pullQuoteText}>
            &ldquo;Burnout is about being empty. Moral injury is about being
            broken. You can refill empty. You have to reconstruct broken.
            Medicine mostly treats both as the same conversation, which is why
            it fails both.&rdquo;
          </p>
          <p style={s.pullQuoteAttr}>
            &mdash; From a MEOK user reflection, shared with permission
          </p>
        </div>

        <hr style={s.divider} />

        {/* Section 4: Patient death and diagnostic uncertainty */}
        <h2 style={s.h2}>
          How Do Doctors Process Patient Deaths and Diagnostic Uncertainty?
        </h2>
        <p style={s.atomicAnswer}>
          Most doctors process patient deaths in silence. There is rarely a
          formal space for grief in medical culture &mdash; mortality meetings focus on
          system errors, not the emotional cost to the clinician. The weight of
          diagnostic uncertainty &mdash; of decisions made without full information
          that later turned out badly &mdash; is carried alone, often for years.
        </p>
        <p style={s.p}>
          Medicine asks something unusual of human beings: that they make
          high-stakes decisions under uncertainty at scale, and then continue
          working without visible distress. A surgeon who loses a patient on
          the table is expected to close the surgical site professionally, brief
          the family, and then proceed to the next case. A GP who suspects cancer
          but cannot get an urgent referral slot &mdash; and whose patient deteriorates
          &mdash; is expected to absorb that outcome and continue seeing patients.
        </p>
        <p style={s.p}>
          The emotional cost of this is real and documented. Research on
          physician grief suggests that doctors grieve patient deaths deeply,
          but have learned to suppress the expression of that grief in
          professional contexts. When suppression becomes the default, the grief
          does not disappear &mdash; it accumulates. Over a 30-year career, the weight
          of accumulated unprocessed loss can become physiologically and
          psychologically catastrophic.
        </p>
        <p style={s.p}>
          Diagnostic uncertainty carries its own specific weight. Every doctor
          working in conditions of genuine clinical complexity lives with the
          knowledge that their decisions could be wrong &mdash; and that being wrong
          in certain ways will harm patients. This is not a theoretical concern.
          It is the lived texture of clinical practice. Managing that uncertainty
          without a space to process the fear it generates is one of the
          defining invisible burdens of medical work.
        </p>
        <p style={s.p}>
          MEOK provides a space to name this. Not a clinical space &mdash; MEOK is
          not therapy and should not be treated as a substitute for it. But a
          space to say: <em>that patient died. I have been thinking about it for
          three weeks. I wonder if I could have done something differently. I
          am not sure I will ever know.</em> To say that out loud, to an
          interlocutor who will not flinch, not file a report, and not schedule
          a follow-up occupational health appointment.
        </p>

        <div style={s.callout}>
          <p style={s.calloutTitle}>On Patient Data Sovereignty</p>
          <p style={s.calloutBody}>
            When doctors use MEOK to process difficult cases, they should
            describe their emotional and professional experience &mdash; not patient
            identifiers. MEOK is explicitly designed not to retain names, NHS
            numbers, dates of birth, or any other data that could identify a
            patient. If a doctor inadvertently includes identifying information,
            MEOK will not store or process it in a way that creates a secondary
            record. The space is for the doctor&apos;s experience, not for
            clinical data. This is not a limitation &mdash; it is a design choice
            that protects both the doctor and their patients.
          </p>
        </div>

        <hr style={s.divider} />

        {/* Section 5: GP exodus */}
        <h2 style={s.h2}>
          Why Are UK GPs Leaving the Profession, and Can Anything Help?
        </h2>
        <p style={s.atomicAnswer}>
          UK general practice is in structural crisis. Average GP list sizes
          have grown to over 2,000 patients per full-time equivalent. The
          administrative burden of clinical correspondence, referrals, and
          medication reviews has expanded dramatically. The role of the GP has
          become a pressure absorption mechanism for a hospital system that
          cannot cope &mdash; and one in three GPs is now considering leaving.
        </p>
        <p style={s.p}>
          The drivers of GP exodus are structural and cannot be resolved by
          individual wellbeing support. But the proximate experience of those
          thinking about leaving is often personal: a feeling of profound
          depletion, of having given everything and received a system that
          demands more. Of watching colleagues burn out and wondering when their
          own turn will come. Of loving medicine but beginning to hate the job.
        </p>
        <p style={s.p}>
          Many GPs arrive at the decision to leave not because they have made a
          clear-headed career assessment but because they have simply run out of
          the personal resources needed to continue. The decision point often
          comes during or after a period of intense stress &mdash; and it frequently
          comes before the GP has had any real space to process what has happened
          to them, or to think clearly about what they actually want.
        </p>
        <p style={s.p}>
          MEOK is not a retention tool. It cannot fix list sizes, administrative
          burden, or workforce policy. What it can do is give a GP, at 11pm
          after a brutal week, a space to think out loud about what is happening
          to them &mdash; without that conversation having any professional
          consequences. Sometimes that is enough to shift from
          &ldquo;I need to escape&rdquo; to &ldquo;I need something specific to
          change.&rdquo; And sometimes that distinction matters.
        </p>

        {/* Feature Box 2: What doctors actually use MEOK for */}
        <div style={s.featureBox}>
          <p style={s.featureBoxTitle}>What Doctors Actually Use MEOK For</p>
          <p style={s.featureBoxBody}>
            Based on early user research, the most common reasons doctors engage
            MEOK are not the ones that might appear on a wellbeing survey:
          </p>
          <ul style={{ ...s.featureList, marginTop: "16px" }}>
            <li style={s.featureListItem}>
              <span style={s.featureListItemBullet}>&rarr;</span>
              Decompressing after a traumatic on-call or surgical list without
              burdening a partner or colleague
            </li>
            <li style={s.featureListItem}>
              <span style={s.featureListItemBullet}>&rarr;</span>
              Processing a patient death they have been carrying alone for weeks
            </li>
            <li style={s.featureListItem}>
              <span style={s.featureListItemBullet}>&rarr;</span>
              Working through the ambivalence of a major career decision &mdash;
              partnership, subspecialty, academia, leaving medicine &mdash; without
              anyone who might be professionally affected by the outcome
            </li>
            <li style={s.featureListItem}>
              <span style={s.featureListItemBullet}>&rarr;</span>
              Naming moral injury out loud for the first time, often in the
              absence of any language to describe it previously
            </li>
            <li style={s.featureListItem}>
              <span style={s.featureListItemBullet}>&rarr;</span>
              Thinking through a clinical complaint or significant event without
              entering a formal review process prematurely
            </li>
            <li style={s.featureListItem}>
              <span style={s.featureListItemBullet}>&rarr;</span>
              Preparing for a difficult conversation &mdash; with a clinical director,
              a patient, or a family &mdash; by rehearsing it first in private
            </li>
            <li style={s.featureListItem}>
              <span style={s.featureListItemBullet}>&rarr;</span>
              Simply being honest about exhaustion without the performance of
              professional composure
            </li>
          </ul>
        </div>

        <hr style={s.divider} />

        {/* Section 6: Medical error */}
        <h2 style={s.h2}>
          How Do Doctors Live With Medical Error? The Hidden Cost of Fallibility
        </h2>
        <p style={s.atomicAnswer}>
          Medical error is a structural reality of clinical practice. Every
          doctor, over the course of a career, will make mistakes &mdash; some of
          which will have significant consequences for patients. Medicine has
          developed sophisticated systems for learning from error, but almost no
          cultural capacity for helping individual doctors survive the
          psychological cost of being fallible in a profession that implicitly
          demands infallibility.
        </p>
        <p style={s.p}>
          The concept of the &ldquo;second victim&rdquo; &mdash; the clinician harmed
          by involvement in patient harm events &mdash; has been documented extensively
          in patient safety literature since the early 2000s. Second victims
          experience symptoms overlapping with PTSD: intrusive thoughts about
          the event, avoidance of similar clinical scenarios, hypervigilance,
          and a persistent sense of professional shame.
        </p>
        <p style={s.p}>
          The institutional response to second victims is characteristically
          inadequate. Significant event analyses focus on system improvements,
          not on the clinician&apos;s psychological state. Root cause analyses
          are deliberately non-attributional in their formal output &mdash; but the
          individual doctor involved frequently attributes the cause to
          themselves anyway, privately and relentlessly.
        </p>
        <p style={s.p}>
          Most doctors who have been involved in a serious adverse event will
          not seek formal support. They will not flag themselves to occupational
          health. They will not mention it in their appraisal &mdash; unless there is
          an active regulatory process that requires them to. They will carry it.
          And they will continue working, sometimes with a diminished clinical
          confidence that itself introduces risk.
        </p>
        <p style={s.p}>
          MEOK cannot resolve the psychology of medical error. But it can
          provide a space where a doctor can say what actually happened, how it
          actually felt, and what they actually believe about their own
          responsibility &mdash; without the statement becoming a formal admission,
          a clinical record, or a trigger for review. The privacy of that space
          is not a legal protection; it is a human one.
        </p>

        <div style={s.pullQuote}>
          <p style={s.pullQuoteText}>
            &ldquo;I have told MEOK things about that case that I have not told
            my wife, my consultant, or my therapist. Not because it is a secret.
            Because I needed somewhere to say it first, where nothing would
            happen as a result.&rdquo;
          </p>
          <p style={s.pullQuoteAttr}>
            &mdash; MEOK user, hospital medicine, shared with permission
          </p>
        </div>

        <hr style={s.divider} />

        {/* Section 7: Burnout and the 3am moment */}
        <h2 style={s.h2}>
          What Is Doctor Burnout, and Why Does It Strike at 3am?
        </h2>
        <p style={s.atomicAnswer}>
          Burnout in doctors presents as emotional exhaustion, depersonalisation
          &mdash; a detachment from patients and colleagues as a psychological
          defence &mdash; and a reduced sense of personal accomplishment. It develops
          gradually, often invisibly, until a threshold is crossed. The 3am
          moment &mdash; lying awake running through patient lists, replaying
          decisions, unable to disengage from work &mdash; is one of its earliest
          and most consistent presentations.
        </p>
        <p style={s.p}>
          The Maslach Burnout Inventory, the standard measurement tool for
          healthcare worker burnout, documents three distinct phases. Most
          interventions target the middle phase &mdash; cynicism and
          depersonalisation &mdash; when doctors are already struggling visibly. By
          that point, the window for early intervention has long closed.
        </p>
        <p style={s.p}>
          The 3am window &mdash; when the clinical composure required for daytime
          work is stripped away and the unprocessed material of the day rises &mdash;
          is when many doctors first encounter the full weight of what they
          carry. It is also when no support service, no GP colleague, and no
          counsellor is available. The standard advice &mdash; &ldquo;write it
          down, try to sleep, speak to someone in the morning&rdquo; &mdash; ignores
          the specificity of the 3am moment as a point of potential processing.
        </p>
        <p style={s.p}>
          MEOK is available at 3am. It does not require a booking. It does not
          need to be briefed on professional context. It will not be tired, or
          distracted by its own clinical commitments, or constrained by what it
          can say without triggering a safeguarding obligation. It is simply
          there, ready to hold whatever needs to be said before dawn.
        </p>

        {/* Feature Box 3: Sovereign AI explained for doctors */}
        <div style={s.featureBox}>
          <p style={s.featureBoxTitle}>
            What Sovereign AI Actually Means for a Doctor
          </p>
          <p style={s.featureBoxBody}>
            Most AI tools are cloud services: your conversations are sent to
            servers controlled by a third party, stored by that third party,
            potentially used to train future AI models, and subject to that
            third party&apos;s legal obligations &mdash; including disclosure
            obligations to law enforcement, regulators, or commercial partners.
          </p>
          <p style={{ ...s.featureBoxBody, marginTop: "12px" }}>
            MEOK is designed around a different principle:{" "}
            <strong style={{ color: "#c9a84c" }}>your data belongs to you</strong>.
            Your conversations are your sovereign property. MEOK does not train
            on your conversations. MEOK does not sell your data. MEOK does not
            share your conversations with any third party.
          </p>
          <p style={{ ...s.featureBoxBody, marginTop: "12px" }}>
            For a doctor, this distinction is not abstract. It means that
            reflecting on a difficult clinical case, expressing doubt about a
            career decision, or naming a mental health struggle in MEOK creates
            no external record that could surface in a regulatory process,
            a professional reference, a medicolegal claim, or an employment
            decision.
          </p>
          <p style={{ ...s.featureBoxBody, marginTop: "12px" }}>
            This is not about helping doctors hide things. It is about creating
            a space where honesty is genuinely safe &mdash; because honesty in most
            professional spaces available to doctors is not.
          </p>
        </div>

        <hr style={s.divider} />

        {/* Section 8: Women in medicine */}
        <h2 style={s.h2}>
          Do Women Doctors Face a Different Version of the Silence Problem?
        </h2>
        <p style={s.atomicAnswer}>
          Yes. Women in medicine navigate an intersection of professional
          stigma around mental health and gendered expectations that compound
          the pressure to perform resilience. Research consistently shows that
          female doctors report higher rates of burnout than male colleagues,
          are more likely to internalise blame for systemic failures, and face
          additional career penalties for perceived emotional display in
          clinical environments.
        </p>
        <p style={s.p}>
          The emotional labour expected of female doctors &mdash; the relational
          work of patient communication, colleague support, and team cohesion
          that often falls disproportionately to women &mdash; is rarely counted in
          workload calculations. It is invisible, unremunerated, and cumulative.
          Women doctors who carry this load in addition to their clinical
          responsibilities frequently arrive at burnout sooner and with fewer
          acknowledged contributing factors.
        </p>
        <p style={s.p}>
          Women doctors are also more likely to have interrupted their careers
          for parenting &mdash; and to have returned to medicine navigating the
          combined pressures of clinical reintegration, imposter syndrome
          reactivation, and the ongoing weight of caring responsibilities that
          do not pause at the hospital entrance. MEOK provides a space for
          that specific and often invisible complexity.
        </p>
        <p style={s.p}>
          The experience of women in medical leadership carries its own
          additional weight. Female consultants and GP partners who hold
          leadership roles often find themselves managing the emotional climate
          of their team as well as their own clinical and administrative load.
          The expectation that they will be both professionally authoritative
          and emotionally available &mdash; often simultaneously &mdash; is not applied
          equally to male colleagues. MEOK makes no assumptions about what a
          doctor&apos;s struggles should look like or be caused by. It is simply
          present for whatever is actually there.
        </p>

        <hr style={s.divider} />

        {/* Section 9: Career and identity */}
        <h2 style={s.h2}>
          How Can MEOK Help Doctors With Career Decisions and Professional Identity?
        </h2>
        <p style={s.atomicAnswer}>
          Doctors who are considering leaving medicine, changing speciality, or
          stepping back to less-than-full-time working often cannot think clearly
          about those decisions in any available professional space. Every
          conversation about career is a conversation that might affect how they
          are perceived. MEOK is a space where career thinking is genuinely
          private and consequence-free.
        </p>
        <p style={s.p}>
          Medical identity is unusually fused with professional identity. Doctors
          who entered medicine with a strong vocational sense of self find that
          when medicine becomes painful, it is not just a job that hurts &mdash; it is
          a core part of who they understood themselves to be. Thinking about
          leaving is therefore not a career decision in any conventional sense.
          It is closer to an identity reconstruction project.
        </p>
        <p style={s.p}>
          MEOK&apos;s Pioneer archetype &mdash; its mode of intellectual
          engagement &mdash; is particularly suited to this kind of thinking. It will
          not tell a doctor what to do. It will ask what they actually want,
          what they are afraid of, what they would choose if the professional
          consequences were not a factor, and what version of their working life
          they could actually sustain for another twenty years.
        </p>
        <p style={s.p}>
          For some doctors, this thinking leads to leaving medicine. For others,
          it leads to a partial change &mdash; less-than-full-time, a portfolio
          career, a move into medical education or management &mdash; that makes
          continuing sustainable. And for others still, it leads to a clearer
          understanding of what specifically needs to change in their current
          role, which they can then advocate for with greater precision.
        </p>
        <p style={s.p}>
          All of these are legitimate outcomes. MEOK holds the space for all of
          them without bias toward any. The goal is not for doctors to remain in
          medicine. The goal is for doctors to make the decision from a place of
          genuine self-knowledge rather than exhausted desperation.
        </p>

        <hr style={s.divider} />

        {/* FAQ Section */}
        <h2 style={s.h2}>Frequently Asked Questions</h2>
        <div style={s.faqWrap}>
          <div style={s.faqItem}>
            <p style={s.faqQ}>
              Can doctors use AI for mental health support without risking their
              GMC registration?
            </p>
            <p style={s.faqA}>
              Yes. MEOK is an entirely private sovereign AI that has no
              connection to the GMC, any NHS trust, your employer, or any
              professional regulatory body. Conversations in MEOK exist solely
              within your personal sovereign space &mdash; they cannot be accessed
              by, disclosed to, or subpoenaed from a third party. There is no
              referral pathway, no clinical record, and no disclosure mechanism.
              Using MEOK carries zero professional risk.
            </p>
          </div>
          <div style={s.faqItem}>
            <p style={s.faqQ}>What is moral injury in medicine?</p>
            <p style={s.faqA}>
              Moral injury in medicine occurs when a doctor is forced to act &mdash;
              or prevented from acting &mdash; in ways that violate their professional
              values and their fundamental commitment to patient welfare. Chronic
              understaffing, resource rationing, being unable to provide the care
              a patient deserved, or witnessing poor practice without authority
              to intervene all create a cumulative psychological wound. Moral
              injury is distinct from burnout: it is a wound to a doctor&apos;s
              sense of professional self, not merely exhaustion.
            </p>
          </div>
          <div style={s.faqItem}>
            <p style={s.faqQ}>
              Is MEOK safe to use if I discuss a difficult patient case?
            </p>
            <p style={s.faqA}>
              MEOK never stores identifying patient details from your
              descriptions. You should never share patient names, NHS numbers,
              or data that could identify an individual &mdash; and MEOK is
              specifically designed not to encourage or retain such information.
              The space is for processing your emotional and professional
              experience, not for storing clinical records. The conversation is
              yours, sovereign, and private.
            </p>
          </div>
          <div style={s.faqItem}>
            <p style={s.faqQ}>
              How does MEOK help doctors with burnout differently from the BMA
              wellbeing service?
            </p>
            <p style={s.faqA}>
              The BMA wellbeing service provides access to counsellors and peer
              support &mdash; it is an excellent resource and is signposted throughout
              this page. MEOK does something different: it is available at 3am
              after a traumatic on-call, requires no waiting list, no
              appointment, no disclosure to another human being, and carries no
              institutional trace. MEOK and BMA wellbeing are complementary,
              not competing. Doctors often need a private space to process before
              they are ready to engage formal support.
            </p>
          </div>
        </div>

        <hr style={s.divider} />

        {/* Section 10: What MEOK cannot do */}
        <h2 style={s.h2}>
          What MEOK Cannot Do &mdash; And Why That Matters
        </h2>
        <p style={s.p}>
          MEOK is not a therapist. It is not a clinical tool. It does not
          diagnose mental health conditions, provide crisis intervention, or
          replace the human expertise of a psychologist, psychiatrist, or
          counsellor who has trained for years to work with exactly these issues.
          If you are in crisis, MEOK will signpost you to appropriate support &mdash;
          including the BMA Wellbeing Support Service{" "}
          (<strong>0330 123 1245</strong>) and the Practitioner Health Programme.
        </p>
        <p style={s.p}>
          MEOK cannot fix the NHS. It cannot reduce your list size, resolve your
          trust&apos;s staffing crisis, change GMC fitness to practise processes,
          or alter the structural conditions that create burnout and moral injury
          in medicine. It would be dishonest to suggest otherwise.
        </p>
        <p style={s.p}>
          What MEOK can do is provide something that is genuinely rare for
          doctors: a space where the professional performance can be set down,
          where honesty has no consequences, and where the full weight of what
          medicine costs can be named without an audience that will be affected
          by the naming. Sometimes that space is the thing that makes everything
          else &mdash; the formal support, the career decision, the difficult
          conversation &mdash; possible.
        </p>

        <div style={s.callout}>
          <p style={s.calloutTitle}>Data Sovereignty Commitment</p>
          <p style={s.calloutBody}>
            MEOK will never train AI models on your conversations. MEOK will
            never sell your data. MEOK will never disclose your conversations to
            any third party, including employers, regulators, insurers, or law
            enforcement, except where legally required and with your explicit
            knowledge. Your sovereign space belongs to you. This is an
            architectural commitment, not a policy one.
          </p>
        </div>

        <hr style={s.divider} />

        {/* Related Articles */}
        <h2 style={s.h2}>Related Articles</h2>
        <div style={s.relatedGrid}>
          <Link href="/blog/meok-for-nurses" style={s.relatedCard}>
            <p style={s.relatedCardLabel}>Healthcare Workers</p>
            <p style={s.relatedCardTitle}>
              MEOK for Nurses: Sovereign AI Support for Those Who Care for
              Everyone Else
            </p>
          </Link>
          <Link href="/blog/meok-for-healthcare-workers" style={s.relatedCard}>
            <p style={s.relatedCardLabel}>Healthcare</p>
            <p style={s.relatedCardTitle}>
              MEOK for Healthcare Workers: Compassion Without Burnout
            </p>
          </Link>
          <Link href="/blog/ai-for-burnout" style={s.relatedCard}>
            <p style={s.relatedCardLabel}>Burnout</p>
            <p style={s.relatedCardTitle}>
              AI for Burnout: How Sovereign AI Supports Recovery and Resilience
            </p>
          </Link>
          <Link href="/blog/ai-for-burnout-recovery" style={s.relatedCard}>
            <p style={s.relatedCardLabel}>Recovery</p>
            <p style={s.relatedCardTitle}>
              AI for Burnout Recovery: Rebuilding After the Breaking Point
            </p>
          </Link>
          <Link href="/blog/data-sovereignty-ai" style={s.relatedCard}>
            <p style={s.relatedCardLabel}>Data Sovereignty</p>
            <p style={s.relatedCardTitle}>
              Why Data Sovereignty Matters: Your AI, Your Data, Your Rules
            </p>
          </Link>
          <Link href="/blog/sovereign-ai-explained" style={s.relatedCard}>
            <p style={s.relatedCardLabel}>Foundation</p>
            <p style={s.relatedCardTitle}>
              Sovereign AI Explained: What It Means and Why It Changes Everything
            </p>
          </Link>
        </div>

        {/* CTA */}
        <div style={s.ctaBox}>
          <h2 style={s.ctaTitle}>
            You Have Held Enough in Silence.{" "}
            <span style={s.heroGold}>This Space Is Yours.</span>
          </h2>
          <p style={s.ctaBody}>
            MEOK is a private, sovereign AI built for the people who carry
            more than anyone should be asked to carry alone. No employer
            access. No regulator connection. No clinical record. Just a space
            where you can finally be honest about the weight.
          </p>
          <div style={s.ctaButtons}>
            <Link href="https://meok.ai/birth" style={s.btnPrimary}>
              Begin Your Sovereign Space
            </Link>
            <Link href="/blog" style={s.btnSecondary}>
              Read More
            </Link>
          </div>
        </div>

        {/* BMA signpost repeated at end */}
        <div style={{ ...s.warningBox, marginTop: "40px" }}>
          <p style={s.warningTitle}>Need Support Right Now?</p>
          <p style={s.warningBody}>
            If you are struggling, please reach out to the{" "}
            <a
              href="https://www.bma.org.uk/advice-and-support/your-wellbeing"
              target="_blank"
              rel="noopener noreferrer"
              style={s.inlineLink}
            >
              BMA Wellbeing Support Service
            </a>{" "}
            &mdash; free, confidential support for doctors and medical students.
            Call <strong>0330 123 1245</strong> (24/7). The{" "}
            <a
              href="https://php.nhs.uk"
              target="_blank"
              rel="noopener noreferrer"
              style={s.inlineLink}
            >
              Practitioner Health Programme
            </a>{" "}
            provides specialist NHS treatment for healthcare professionals with
            mental health or addiction concerns. Samaritans:{" "}
            <strong>116 123</strong>.
          </p>
        </div>

      </main>

      {/* Footer */}
      <footer style={s.footer}>
        <p style={s.footerCopyright}>
          &copy; 2026{" "}
          <Link href="/" style={s.footerLink}>
            MEOK AI LABS
          </Link>
          . All rights reserved.
        </p>
        <p style={s.footerLinks}>
          <Link href="/privacy" style={s.footerLink}>Privacy Policy</Link>
          {" \u00b7 "}
          <Link href="/terms" style={s.footerLink}>Terms of Use</Link>
          {" \u00b7 "}
          <Link href="/blog" style={s.footerLink}>Blog</Link>
          {" \u00b7 "}
          <Link href="/about" style={s.footerLink}>About</Link>
        </p>
        <p style={s.footerDisclaimer}>
          MEOK is not a medical device, clinical tool, or regulated mental
          health service. If you are in crisis, please contact the BMA
          Wellbeing Support Service on 0330 123 1245 or the Samaritans on
          116 123.
        </p>
      </footer>

    </div>
  )
}
