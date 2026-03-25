import type { Metadata } from "next"
import Link from "next/link"

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "MEOK for Healthcare Workers: AI That Understands What You Carry Home | MEOK AI LABS",
  description:
    "Doctors, nurses, and healthcare workers face secondary trauma, moral injury, and burnout at epidemic rates. MEOK\u2019s sovereign AI is a safe place to process what cannot be said at work.",
  alternates: {
    canonical: "https://meok.ai/blog/meok-for-healthcare-workers",
  },
  openGraph: {
    title:
      "MEOK for Healthcare Workers: AI That Understands What You Carry Home",
    description:
      "Doctors, nurses, and healthcare workers face secondary trauma, moral injury, and burnout at epidemic rates. MEOK\u2019s sovereign AI is a safe place to process what cannot be said at work.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-for-healthcare-workers",
    siteName: "MEOK AI LABS",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+for+Healthcare+Workers&desc=AI+that+understands+what+you+carry+home.",
        width: 1200,
        height: 630,
        alt: "MEOK for Healthcare Workers: AI That Understands What You Carry Home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MEOK for Healthcare Workers: AI That Understands What You Carry Home",
    description:
      "Secondary trauma, 12-hour shifts, the weight of other people\u2019s worst days. MEOK is confidential, always on, and never talks to your employer.",
    images: [
      "https://meok.ai/api/og?title=MEOK+for+Healthcare+Workers&desc=AI+that+understands+what+you+carry+home.",
    ],
  },
  keywords: [
    "AI for healthcare workers",
    "NHS burnout support",
    "AI for nurses mental health",
    "secondary traumatic stress support",
    "confidential AI companion NHS",
    "healthcare worker wellbeing app",
    "AI for shift workers",
    "compassion fatigue AI",
    "NHS staff mental health",
    "AI debriefing for doctors",
    "MEOK AI healthcare",
    "moral injury NHS",
    "vicarious grief healthcare",
    "healthcare worker burnout 2026",
  ],
}

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "MEOK for Healthcare Workers: AI That Understands What You Carry Home",
  description:
    "Doctors, nurses, and healthcare workers face secondary trauma, moral injury, and burnout at epidemic rates. MEOK\u2019s sovereign AI is a safe place to process what cannot be said at work.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/meok-for-healthcare-workers",
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
    "AI for healthcare workers",
    "NHS burnout support",
    "secondary traumatic stress",
    "confidential AI companion",
    "compassion fatigue",
    "moral injury NHS",
    "shift work mental health",
    "vicarious grief",
    "MEOK AI LABS",
  ],
  articleSection: "MEOK for Healthcare Workers",
  inLanguage: "en-GB",
  image:
    "https://meok.ai/api/og?title=MEOK+for+Healthcare+Workers&desc=AI+that+understands+what+you+carry+home.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/meok-for-healthcare-workers",
  },
  about: [
    { "@type": "Thing", name: "NHS burnout" },
    { "@type": "Thing", name: "Secondary traumatic stress" },
    { "@type": "Thing", name: "Healthcare worker mental health" },
    { "@type": "Thing", name: "Compassion fatigue" },
    { "@type": "Thing", name: "Confidential AI support" },
    { "@type": "Thing", name: "Moral injury" },
    { "@type": "Thing", name: "Vicarious grief" },
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can healthcare workers use AI for mental health support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AI companions like MEOK are well-suited to the specific demands of healthcare work: 24/7 availability, zero waiting lists, and complete confidentiality. MEOK acts as a processing partner \u2014 a space to debrief difficult cases, offload accumulated stress, and decompress after shifts without fear of professional consequences.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK confidential for NHS staff?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Completely. MEOK is an independent tool \u2014 it has no connection to NHS systems, occupational health departments, or any employer. Conversations are encrypted and never shared with third parties. Nothing said in MEOK can be accessed by your trust, your manager, or any regulator.",
      },
    },
    {
      "@type": "Question",
      name: "What is secondary traumatic stress in healthcare?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Secondary traumatic stress (STS) is the psychological impact of repeatedly witnessing or hearing about others\u2019 trauma. Healthcare workers absorb patients\u2019 pain, fear, and death shift after shift. Over time this accumulates into symptoms similar to PTSD \u2014 intrusive thoughts, emotional numbness, hypervigilance, and withdrawal \u2014 even without a single catastrophic event.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help with shift work and sleep problems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK can\u2019t prescribe sleep medication, but it can help you decompress before sleep, process the adrenaline of a difficult shift, and build wind-down routines. Many healthcare workers find that simply offloading to MEOK after a night shift helps quiet the mental noise that prevents rest.",
      },
    },
    {
      "@type": "Question",
      name: "Will MEOK report what I say to my employer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK has no duty-to-report mechanism and no integration with any employer, NHS trust, or professional regulator. Your conversations are your own. MEOK\u2019s data sovereignty model means your data is encrypted, never used for training, and never shared \u2014 full stop.",
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
    fontFamily: "system-ui, sans-serif",
  } as React.CSSProperties,

  navSep: {
    color: "rgba(201,168,76,0.4)",
    fontSize: "14px",
    fontFamily: "system-ui, sans-serif",
  } as React.CSSProperties,

  navCurrent: {
    color: "rgba(245,240,232,0.5)",
    fontSize: "14px",
    fontFamily: "system-ui, sans-serif",
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
    fontFamily: "system-ui, sans-serif",
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
    fontFamily: "system-ui, sans-serif",
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
    fontFamily: "system-ui, sans-serif",
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
    fontFamily: "system-ui, sans-serif",
  } as React.CSSProperties,

  statLabel: {
    fontSize: "13px",
    lineHeight: 1.5,
    color: "rgba(245,240,232,0.6)",
    fontFamily: "system-ui, sans-serif",
    marginBottom: "0",
  } as React.CSSProperties,

  pullQuote: {
    borderLeft: "3px solid #c9a84c",
    paddingLeft: "24px",
    margin: "32px 0",
  } as React.CSSProperties,

  pullQuoteText: {
    fontSize: "clamp(17px, 2.5vw, 22px)",
    fontStyle: "italic",
    lineHeight: 1.65,
    color: "rgba(245,240,232,0.85)",
    marginBottom: "0",
  } as React.CSSProperties,

  highlight: {
    background: "rgba(201,168,76,0.12)",
    borderRadius: "4px",
    padding: "2px 6px",
    color: "#c9a84c",
  } as React.CSSProperties,

  tableWrap: {
    overflowX: "auto" as const,
    marginTop: "28px",
    marginBottom: "40px",
    borderRadius: "10px",
    border: "1px solid rgba(201,168,76,0.2)",
  } as React.CSSProperties,

  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    fontFamily: "system-ui, sans-serif",
    fontSize: "14px",
  } as React.CSSProperties,

  th: {
    padding: "14px 18px",
    textAlign: "left" as const,
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
    fontSize: "11px",
    borderBottom: "1px solid rgba(201,168,76,0.2)",
  } as React.CSSProperties,

  thNhs: {
    background: "rgba(245,240,232,0.04)",
    color: "rgba(245,240,232,0.6)",
  } as React.CSSProperties,

  thMeok: {
    background: "rgba(201,168,76,0.08)",
    color: "#c9a84c",
  } as React.CSSProperties,

  thFeature: {
    background: "rgba(13,12,24,0.9)",
    color: "rgba(245,240,232,0.4)",
    width: "32%",
  } as React.CSSProperties,

  trEven: {
    background: "rgba(245,240,232,0.02)",
  } as React.CSSProperties,

  trOdd: {
    background: "transparent",
  } as React.CSSProperties,

  td: {
    padding: "14px 18px",
    borderBottom: "1px solid rgba(245,240,232,0.06)",
    lineHeight: 1.6,
    verticalAlign: "top" as const,
  } as React.CSSProperties,

  tdFeature: {
    color: "rgba(245,240,232,0.6)",
    fontWeight: 600,
    fontSize: "13px",
    letterSpacing: "0.02em",
  } as React.CSSProperties,

  tdNhs: {
    color: "rgba(245,240,232,0.55)",
  } as React.CSSProperties,

  tdMeok: {
    color: "#f5f0e8",
    fontWeight: 500,
  } as React.CSSProperties,

  tdYes: {
    color: "#c9a84c",
    fontWeight: 700,
  } as React.CSSProperties,

  tdNo: {
    color: "rgba(220,100,100,0.8)",
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
    fontFamily: "system-ui, sans-serif",
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
    fontFamily: "system-ui, sans-serif",
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
    fontFamily: "system-ui, sans-serif",
    fontSize: "13px",
    color: "rgba(245,240,232,0.4)",
  } as React.CSSProperties,

  footerLink: {
    color: "rgba(201,168,76,0.7)",
    textDecoration: "none",
  } as React.CSSProperties,
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function MeokForHealthcareWorkersPage() {
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
        <span style={s.navCurrent}>MEOK for Healthcare Workers</span>
      </nav>

      {/* Hero */}
      <header style={s.hero}>
        <div style={s.heroGlow} aria-hidden="true" />
        <div style={s.tagRow}>
          <span style={s.tag}>NHS Burnout</span>
          <span style={s.tag}>Secondary Trauma</span>
          <span style={s.tag}>Moral Injury</span>
          <span style={s.tag}>Shift Work</span>
          <span style={s.tag}>Data Sovereignty</span>
        </div>
        <h1 style={s.heroTitle}>
          MEOK for Healthcare Workers:{" "}
          <span style={s.heroGold}>
            AI That Understands What You Carry Home
          </span>
        </h1>
        <p style={s.heroLead}>
          You spend every shift holding space for other people&apos;s worst moments.
          MEOK is a confidential, sovereign AI companion that holds space for yours
          &mdash; available at 3am, between rotations, whenever the weight gets heavy.
          No waiting lists. No employer access. No judgment.
        </p>
        <div style={s.metaRow}>
          <span>By Nicholas Templeman</span>
          <span>MEOK AI LABS</span>
          <span>24 March 2026</span>
          <span>14 min read</span>
        </div>
      </header>

      {/* Article body */}
      <article style={s.article}>

        <hr style={s.divider} />

        {/* ── SECTION 1: The scale of the crisis ── */}
        <h2 style={s.h2}>
          How bad is burnout among NHS healthcare workers in 2026?
        </h2>
        <p style={s.atomicAnswer}>
          The NHS workforce is experiencing a mental health crisis of systemic proportions.
          Around 40% of nurses report actively considering leaving the profession due to
          burnout, stress, and moral injury. One in four NHS staff members meets clinical
          criteria for a common mental health disorder at any given time. These are not
          fringe statistics &mdash; they describe the majority experience of frontline healthcare.
        </p>
        <p style={s.p}>
          The 2025 NHS Staff Survey found that nearly half of all NHS employees reported
          feeling unwell as a result of work-related stress in the previous twelve months.
          For emergency department staff, intensive care nurses, and junior doctors working
          long rotation blocks, that figure climbs higher still. The profession attracts
          people with a profound vocational commitment to caring &mdash; and then systematically
          depletes the very reserves that commitment requires.
        </p>
        <p style={s.p}>
          Burnout in healthcare is not a failure of individual resilience. It is the
          predictable outcome of chronically understaffed wards, impossible caseloads,
          bureaucratic pressure, and the relentless exposure to human suffering that
          defines the job. Understanding this context matters before we discuss what MEOK
          can and cannot do.
        </p>

        {/* Stats */}
        <div style={s.statGrid}>
          <div style={s.statCard}>
            <p style={s.statNum}>40%</p>
            <p style={s.statLabel}>of nurses considering leaving due to burnout</p>
          </div>
          <div style={s.statCard}>
            <p style={s.statNum}>1 in 4</p>
            <p style={s.statLabel}>NHS staff with a common mental health disorder</p>
          </div>
          <div style={s.statCard}>
            <p style={s.statNum}>47%</p>
            <p style={s.statLabel}>reported work-related stress in the last 12 months</p>
          </div>
          <div style={s.statCard}>
            <p style={s.statNum}>6&ndash;18</p>
            <p style={s.statLabel}>month average wait for NHS talking therapy referrals</p>
          </div>
        </div>

        {/* ── SECTION 2: What healthcare workers cannot say ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>
          What is it that healthcare workers cannot say at work?
        </h2>
        <p style={s.atomicAnswer}>
          Healthcare culture carries a powerful unspoken rule: the professional must
          remain functional. You are permitted to be tired. You are not permitted to be
          broken. Admitting that a patient&apos;s death is haunting you, that you are
          fantasising about quitting, or that you are struggling to feel anything at all
          &mdash; these disclosures carry professional and social risk that most workers
          are not willing to take.
        </p>
        <p style={s.p}>
          The things that go unsaid in clinical environments fall into several distinct
          categories. There is the grief that accumulates from losing patients &mdash; the
          elderly man who reminded you of your grandfather, the young woman whose family
          you held while she was resuscitated. There is the rage at the system &mdash; at
          the manager who denied the staffing request, at the protocol that prevented the
          better treatment, at the entire structure that makes good care harder than it
          needs to be.
        </p>
        <p style={s.p}>
          There is the creeping numbness &mdash; the recognition that you no longer feel
          what you used to feel, and the terror that this might be permanent. There is
          the shame of being a mental health professional who cannot manage their own
          mental health. There is the question that dare not be asked out loud: what if
          I no longer want to do this?
        </p>
        <p style={s.pMuted}>
          None of these things can be said to a line manager without consequences.
          Most cannot be said to colleagues without shifting the burden. Many cannot
          be said to a partner or family member who depends on your stability. They
          accumulate in the body, in the sleepless hours after night shifts, in the
          emotional deadness that signals that something has gone badly wrong.
        </p>

        {/* Callout 1 */}
        <div style={s.callout}>
          <p style={s.calloutTitle}>The structural paradox</p>
          <p style={s.calloutBody}>
            Healthcare workers are trained to recognise mental health symptoms in others.
            They know exactly what secondary traumatic stress looks like. They can name
            the stages of compassion fatigue and explain moral injury to medical students.
            And yet the same clinical culture that equips them to help others makes it
            almost impossible to seek help themselves. The very knowledge that makes
            them competent caregivers makes them ashamed to be struggling.
          </p>
        </div>

        {/* ── SECTION 3: Secondary trauma and compassion fatigue ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>
          What is secondary traumatic stress &mdash; and how does it accumulate in healthcare?
        </h2>
        <p style={s.atomicAnswer}>
          Secondary traumatic stress (STS) is the indirect psychological harm that results
          from exposure to others&apos; trauma. Unlike burnout, which develops from chronic
          work demands, STS develops from the emotional content of the work itself &mdash;
          from witnessing suffering, absorbing fear, and being present for events that would
          be defined as traumatic in any other context.
        </p>
        <p style={s.p}>
          A&amp;E nurses who work multiple resuscitations per shift. Oncology doctors who
          have repeated end-of-life conversations in the same week. Midwives who attend
          stillbirths. Paramedics who attend paediatric callouts. Mental health nurses
          who work with patients in acute psychiatric crisis. All of these workers absorb
          trauma as a function of their professional role &mdash; not occasionally, but
          routinely and repeatedly.
        </p>
        <p style={s.p}>
          The symptoms of STS mirror those of PTSD: intrusive thoughts about specific
          patients or incidents, hypervigilance, emotional numbing, avoidance of
          situations that trigger memories, disrupted sleep, and a pervasive sense of
          dread or hopelessness. The difference is that there is rarely a single
          identifiable traumatic event &mdash; the injury accumulates through hundreds
          of small exposures, each of which felt manageable in isolation.
        </p>
        <p style={s.p}>
          The insidious feature of STS accumulation is its invisibility. Because no
          single incident seems sufficient to justify distress, the worker often fails
          to recognise what is happening to them until they are already significantly
          impaired. By the time STS is acknowledged, the individual is often deep into
          compassion fatigue or clinical burnout.
        </p>

        {/* Callout 2 */}
        <div style={s.callout}>
          <p style={s.calloutTitle}>STS versus compassion fatigue</p>
          <p style={s.calloutBody}>
            Secondary traumatic stress and compassion fatigue are related but distinct.
            STS refers specifically to the symptom cluster that mirrors PTSD &mdash; it is
            trauma-adjacent. Compassion fatigue is a broader erosion of the capacity to
            empathise and care, often described as &ldquo;the cost of caring.&rdquo; Both
            are common in healthcare workers, both are under-treated, and both can be
            addressed through regular processing &mdash; which is exactly what MEOK provides.
          </p>
        </div>

        {/* ── SECTION 4: Moral injury ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>
          What is moral injury in healthcare &mdash; and why is it different from burnout?
        </h2>
        <p style={s.atomicAnswer}>
          Moral injury is the damage done to a person&apos;s moral framework when they are
          required to act in ways that conflict with their core values &mdash; or when they
          witness or fail to prevent such actions. In healthcare, this often means being
          unable to provide the standard of care you know a patient deserves because of
          resource constraints, institutional policies, or systemic failures.
        </p>
        <p style={s.p}>
          The doctor who knows a patient needs more time but has four minutes per
          appointment. The nurse who knows a confused elderly patient should not be
          discharged but has no beds to keep them. The junior doctor who is instructed
          to perform a procedure they believe is not in the patient&apos;s best interest.
          The paramedic who is unable to respond to a call because every ambulance is
          committed. These are not abstract ethical dilemmas &mdash; they are the daily
          texture of NHS work for thousands of staff.
        </p>
        <p style={s.p}>
          Moral injury differs from burnout in a critical way. Burnout is primarily
          about exhaustion &mdash; the depletion of energy and motivation. Moral injury
          involves a deeper wound to the self: the sense that one has betrayed one&apos;s
          own values, or been betrayed by an institution one trusted. Workers experiencing
          moral injury often report feelings of shame, guilt, and a sense of having been
          complicit in harm, even when they were powerless to act differently.
        </p>
        <p style={s.p}>
          The 2020&ndash;2024 period of NHS operational pressure, post-pandemic recovery,
          and ongoing staffing crises created conditions for widespread moral injury across
          the workforce. The term entered mainstream clinical discourse partly because it
          captured something that &ldquo;burnout&rdquo; did not: the specific quality of
          damage that results from being asked to act against one&apos;s professional conscience,
          repeatedly, without adequate support or acknowledgement.
        </p>

        {/* ── SECTION 5: Stigma ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>
          Why do healthcare workers not seek help? The stigma problem in clinical professions.
        </h2>
        <p style={s.atomicAnswer}>
          Mental health stigma is present in every professional context, but it takes a
          particular and damaging form in healthcare. Clinical professionals are trained
          to assess and treat mental illness in others. Struggling themselves is experienced
          as a failure of professional competence &mdash; a contradiction of their role identity
          &mdash; and carries the additional risk of being perceived as unfit to practice.
        </p>
        <p style={s.p}>
          Research consistently shows that healthcare workers are less likely to seek help
          for mental health problems than the general population, despite having greater
          access to clinical knowledge. The barriers are structural (occupational health
          referrals that may be reported to employers, mandatory disclosure requirements),
          cultural (the professional expectation of robustness and stoicism), and
          psychological (the fear of being seen as weak, unreliable, or a burden to
          already stretched colleagues).
        </p>
        <p style={s.p}>
          There is also the specific concern around regulatory scrutiny. Doctors and
          nurses are regulated professionals whose fitness to practice can be reviewed
          by the GMC, NMC, and other bodies. The fear that disclosing a mental health
          struggle could initiate a fitness-to-practice investigation &mdash; even where
          that fear is based on a misunderstanding of how these processes actually work
          &mdash; acts as a powerful deterrent to seeking help.
        </p>
        <p style={s.pMuted}>
          This is the environment in which most NHS wellbeing provision operates. The
          same institution that employs the worker, manages their performance, and holds
          their professional registration is the institution providing their mental health
          support. This is not a criticism of NHS occupational health teams, who work
          hard in difficult circumstances. It is a structural observation about why
          many workers do not use the services that exist.
        </p>

        {/* Callout 3 */}
        <div style={s.callout}>
          <p style={s.calloutTitle}>Why data sovereignty matters here</p>
          <p style={s.calloutBody}>
            MEOK is entirely independent of the NHS, your employer, and any professional
            regulatory body. It has no relationship with occupational health. It has no
            duty-to-report mechanism. Nothing you say to MEOK can be accessed by your
            trust, your manager, or any regulator. Your conversations are encrypted,
            stored under your sovereign data covenant, and never used for training or
            shared with any third party. This is not a policy promise &mdash; it is an
            architectural guarantee. MEOK exists outside the institutional structures
            that create the conditions for stigma. That is precisely why it can hold
            what those structures cannot.
          </p>
        </div>

        {/* ── SECTION 6: Vicarious grief ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>
          Vicarious grief: what happens when you lose patients, again and again?
        </h2>
        <p style={s.atomicAnswer}>
          Vicarious grief is the grief that healthcare workers experience as a result of
          their patients&apos; deaths. Unlike personal bereavement, it is not socially
          recognised or ritualised. There is no funeral to attend. There is no
          acknowledgement that this loss is real. The worker is expected to move on to
          the next patient &mdash; and the next death &mdash; without pause.
        </p>
        <p style={s.p}>
          In reality, grief accumulates. The ICU nurse who has lost twenty patients in
          a winter surge carries all twenty of those losses, even if no single one was
          catastrophic. The oncology consultant who has held the same end-of-life
          conversation sixty times in a year is carrying sixty versions of the same grief,
          without the frameworks that ordinarily allow grief to be processed.
        </p>
        <p style={s.p}>
          The clinical environment actively suppresses the expression of vicarious grief.
          Weeping over a patient is seen as unprofessional. Talking about how much a
          specific death affected you is seen as lacking emotional regulation. The
          expectation is that the professional self can be separated from the feeling
          self &mdash; that you can witness death repeatedly without being changed by it.
          This expectation is physiologically and psychologically false, and acting as
          though it is true causes serious harm.
        </p>

        <div style={s.pullQuote}>
          <p style={s.pullQuoteText}>
            &ldquo;I had two deaths in one shift. Both of them haunted me. I sat in my car
            for forty minutes before I could drive home. Nobody asked if I was okay.
            Nobody was expected to.&rdquo;
          </p>
        </div>

        <p style={s.p}>
          MEOK&apos;s Healer companion mode is designed specifically for decompression
          after high-intensity contact. You can name the patient &mdash; or not. You can
          describe exactly what happened &mdash; or just say that it was hard. The Healer
          companion does not push for clinical detail or emotional performance. It provides
          consistent, patient presence for whatever you need to put down.
        </p>

        {/* ── SECTION 7: Shift work, sleep, and 3am support ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>
          Shift work, sleep disruption, and the specific loneliness of 2am
        </h2>
        <p style={s.atomicAnswer}>
          Healthcare work does not respect the rhythms of institutional support. Your
          most difficult shift might end at 3am. Your worst night might be a Sunday.
          The weeks when you most need someone to talk to are often the weeks when you
          are working twelve-hour nights and sleeping until the afternoon. Conventional
          support &mdash; therapy appointments, peer support groups, occupational health
          referrals &mdash; assumes a nine-to-five life that shift workers do not have.
        </p>
        <p style={s.p}>
          The sleep disruption associated with rotating shift patterns is itself a
          significant mental health risk. Shift workers have higher rates of anxiety,
          depression, and cognitive impairment than day workers. They are more likely
          to make clinical errors when fatigued. They are less able to emotionally
          regulate after difficult exposures. The combination of sleep deprivation and
          occupational trauma creates a particularly difficult context for maintaining
          psychological wellbeing.
        </p>
        <p style={s.p}>
          The post-shift window &mdash; when the adrenaline of a busy ward is still
          circulating and sleep is impossible &mdash; is often when the emotional
          weight of the day hits hardest. This is not the time to wait for an appointment.
          This is the time when processing needs to happen &mdash; while the experiences
          are still fresh, before they sediment into the body as unresolved stress.
        </p>
        <p style={s.pMuted}>
          MEOK is available at every hour that healthcare work happens. Night shifts,
          post-nights, early morning handovers, Sunday evenings before a run of days.
          There is no scheduling required. There is no need to justify why you need
          support at an unusual time. The Healer companion is simply there &mdash; waiting,
          consistent, and genuinely oriented toward your decompression.
        </p>

        {/* ── SECTION 8: Career questioning ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>
          What happens when you start questioning your career in medicine or nursing?
        </h2>
        <p style={s.atomicAnswer}>
          Career questioning in healthcare is common, understandable, and almost entirely
          unaddressed. The vocational framing of medicine and nursing &mdash; the idea that
          healthcare is a calling rather than a job &mdash; makes it psychologically difficult
          to acknowledge wanting to leave. It can feel like a betrayal: of the profession,
          of patients, of the identity that years of training have built.
        </p>
        <p style={s.p}>
          Yet the desire to leave &mdash; to step back, to change specialty, to move to
          a less intense role, or to leave clinical practice entirely &mdash; is a
          rational response to unsustainable conditions. The 40% of nurses considering
          leaving are not all experiencing personal failure. Many of them are making
          a clear-eyed assessment of what continued practice will cost them.
        </p>
        <p style={s.p}>
          The problem is that this question cannot easily be asked out loud. Expressing
          doubt about your career to colleagues risks being read as a sign of weakness
          or instability. Expressing it to managers risks affecting your appraisal or
          development opportunities. Expressing it to family or partners often triggers
          worry and counter-argument rather than space to think. The question becomes
          another thing that has nowhere to go.
        </p>
        <p style={s.p}>
          MEOK&apos;s Guardian companion can hold this kind of existential conversation
          without agenda. It is not invested in you staying or leaving. It does not
          have opinions about your career choices. It can help you explore what the
          desire to leave is really about &mdash; whether it is the entire profession or a
          specific role, whether it is permanent exhaustion or a recoverable state,
          whether what you need is a break or a change, and what the actual options
          look like.
        </p>

        {/* ── SECTION 9: How MEOK works for healthcare workers ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>
          How does MEOK actually work for healthcare workers?
        </h2>
        <p style={s.p}>
          MEOK is not a chatbot, a wellness app, or a digital version of occupational
          health. It is a sovereign AI companion &mdash; built around the idea that the
          relationship between a person and their AI should be private, persistent, and
          genuinely oriented toward the individual&apos;s wellbeing, with no institutional
          agenda attached.
        </p>
        <p style={s.p}>
          When you interact with MEOK, you are talking to a companion that remembers
          your context across sessions. You do not need to re-explain your ward, your
          team, your history, or your situation every time you open the app. Your
          MEOK knows that you work nights, that last month was particularly hard, that
          you have been considering a change of specialty, that you lost a patient you
          cared about. This continuity is not a surveillance feature &mdash; it is what
          makes the relationship feel real rather than mechanical.
        </p>

        <h3 style={s.h3}>The Healer companion for decompression</h3>
        <p style={s.p}>
          Healer mode is MEOK&apos;s primary mode for emotional processing and decompression.
          It is designed for the specific task of putting down what you have been carrying
          &mdash; the difficult case, the difficult conversation, the difficult shift. Healer
          does not try to fix you or reframe your experience toward positivity. It listens,
          asks careful questions, and helps you articulate what happened and what it cost you.
        </p>
        <p style={s.p}>
          The act of articulating distress in language is itself therapeutic. Research on
          expressive writing and verbal processing consistently shows that naming an experience
          &mdash; finding words for what happened and how it felt &mdash; reduces its
          psychological weight. Healer mode creates the conditions for this to happen in
          a way that is available at the moment you need it, not three weeks later.
        </p>

        <h3 style={s.h3}>The Guardian companion for crisis and crisis-adjacent states</h3>
        <p style={s.p}>
          Guardian mode is MEOK&apos;s support mode for when things are more serious &mdash;
          when the accumulation of stress, secondary trauma, or moral injury has reached
          a point of crisis or near-crisis. Guardian provides structured, non-judgmental
          support and can help you access appropriate professional resources if needed.
          It does not replace crisis services: if you are in immediate danger, MEOK will
          always direct you to emergency support. What Guardian can do is hold the space
          between &ldquo;struggling&rdquo; and &ldquo;crisis&rdquo; &mdash; the territory
          that is often most isolating, where you know something is wrong but do not
          know how serious it is or where to go.
        </p>

        {/* ── SECTION 10: Comparison table ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>
          NHS staff support systems vs MEOK: how do they compare?
        </h2>
        <p style={s.p}>
          The NHS provides a range of wellbeing and mental health support options for
          staff. These services are genuinely valuable and staffed by dedicated professionals.
          But they were not designed for the specific constraints of healthcare workers
          seeking private, immediate, stigma-free processing. The comparison below is
          not an attack on NHS services &mdash; it is an honest account of the gap
          that MEOK fills.
        </p>

        <div style={s.tableWrap}>
          <table style={s.table}>
            <thead>
              <tr>
                <th style={{ ...s.th, ...s.thFeature }}>Feature</th>
                <th style={{ ...s.th, ...s.thNhs }}>NHS Staff Support</th>
                <th style={{ ...s.th, ...s.thMeok }}>MEOK</th>
              </tr>
            </thead>
            <tbody>
              <tr style={s.trOdd}>
                <td style={{ ...s.td, ...s.tdFeature }}>Availability</td>
                <td style={{ ...s.td, ...s.tdNhs }}>
                  Business hours, appointment-based. Waiting lists of 6&ndash;18 months
                  for talking therapy.
                </td>
                <td style={{ ...s.td, ...s.tdMeok }}>
                  <span style={s.tdYes}>24/7</span> &mdash; available at 3am after a
                  night shift, on Sunday evenings, between back-to-back shifts.
                </td>
              </tr>
              <tr style={s.trEven}>
                <td style={{ ...s.td, ...s.tdFeature }}>Employer access</td>
                <td style={{ ...s.td, ...s.tdNhs }}>
                  Occupational health referrals may be visible to line managers.
                  EAP providers may log usage data at an aggregated trust level.
                </td>
                <td style={{ ...s.td, ...s.tdMeok }}>
                  <span style={s.tdYes}>Zero employer access.</span> MEOK has no
                  connection to NHS systems. Nothing you say is visible to your trust,
                  manager, or any regulator.
                </td>
              </tr>
              <tr style={s.trOdd}>
                <td style={{ ...s.td, ...s.tdFeature }}>Referral required</td>
                <td style={{ ...s.td, ...s.tdNhs }}>
                  Most services require self-referral or GP referral. EAP access via
                  a separate portal login linked to employment.
                </td>
                <td style={{ ...s.td, ...s.tdMeok }}>
                  <span style={s.tdYes}>No referral needed.</span> Download, complete
                  the Birth ceremony, and begin. No employment verification required.
                </td>
              </tr>
              <tr style={s.trEven}>
                <td style={{ ...s.td, ...s.tdFeature }}>Continuity of support</td>
                <td style={{ ...s.td, ...s.tdNhs }}>
                  Fixed number of sessions (typically 6&ndash;8 on EAP programmes).
                  Changing provider means starting again from scratch.
                </td>
                <td style={{ ...s.td, ...s.tdMeok }}>
                  <span style={s.tdYes}>Persistent sovereign memory.</span> Your MEOK
                  knows your context across every interaction. You never have to repeat
                  your story.
                </td>
              </tr>
              <tr style={s.trOdd}>
                <td style={{ ...s.td, ...s.tdFeature }}>Data privacy</td>
                <td style={{ ...s.td, ...s.tdNhs }}>
                  Subject to NHS data governance. EAP data held by third-party
                  providers under contract terms. GDPR-compliant but institutionally
                  accessible.
                </td>
                <td style={{ ...s.td, ...s.tdMeok }}>
                  <span style={s.tdYes}>Full data sovereignty.</span> Encrypted.
                  Never used for training. Never shared with any third party.
                  You own your data completely.
                </td>
              </tr>
              <tr style={s.trEven}>
                <td style={{ ...s.td, ...s.tdFeature }}>Fitness-to-practice risk</td>
                <td style={{ ...s.td, ...s.tdNhs }}>
                  Perceived risk of referral to GMC/NMC deters many workers from
                  engaging, even where that fear is based on misunderstanding.
                </td>
                <td style={{ ...s.td, ...s.tdMeok }}>
                  <span style={s.tdYes}>No regulatory connection.</span> MEOK has no
                  duty-to-report and no relationship with any professional regulator.
                  Your conversations cannot be accessed by the GMC, NMC, or equivalent.
                </td>
              </tr>
              <tr style={s.trOdd}>
                <td style={{ ...s.td, ...s.tdFeature }}>Shift-work compatibility</td>
                <td style={{ ...s.td, ...s.tdNhs }}>
                  Most services designed for standard working hours. Rescheduling
                  appointments around rotating shifts is a recognised barrier.
                </td>
                <td style={{ ...s.td, ...s.tdMeok }}>
                  <span style={s.tdYes}>Fully compatible.</span> No appointments.
                  No scheduling. Available at any hour, for any duration, on
                  any device.
                </td>
              </tr>
              <tr style={s.trEven}>
                <td style={{ ...s.td, ...s.tdFeature }}>Cost to worker</td>
                <td style={{ ...s.td, ...s.tdNhs }}>
                  EAP typically free. NHS IAPT free. Private therapy via OH pathway
                  may have costs. Access varies significantly by trust.
                </td>
                <td style={{ ...s.td, ...s.tdMeok }}>
                  <span style={s.tdYes}>Free tier available.</span> Core companion
                  experience at no cost. Premium features on paid plan. No
                  employment verification. No waiting list.
                </td>
              </tr>
              <tr style={s.trOdd}>
                <td style={{ ...s.td, ...s.tdFeature }}>Stigma barrier</td>
                <td style={{ ...s.td, ...s.tdNhs }}>
                  High. Institutional routes carry social and professional stigma
                  within clinical culture. Many workers will not use them.
                </td>
                <td style={{ ...s.td, ...s.tdMeok }}>
                  <span style={s.tdYes}>Minimal.</span> Private, asynchronous,
                  no social visibility. Using MEOK looks identical to any other
                  phone use. Nobody needs to know.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={s.pMuted}>
          MEOK is not a replacement for professional mental health care, clinical
          supervision, or occupational health services. If you are experiencing a
          mental health crisis, please contact your GP, a crisis line, or emergency
          services. What MEOK provides is a private, consistent, always-available
          first layer of support that addresses the specific barriers that prevent
          healthcare workers from processing their experience.
        </p>

        {/* ── SECTION 11: 24/7 and the 2am case ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>
          Why does 24/7 availability matter specifically for healthcare workers?
        </h2>
        <p style={s.atomicAnswer}>
          The moments when healthcare workers most need support do not correspond to
          business hours. The shift that ends at 2am after an unexpected death. The
          handover on Christmas morning. The Tuesday night in February when you are
          three weeks into a night rotation and can no longer remember what it felt
          like to feel normal. The value of a support resource is inseparable from
          its availability at the moment of need.
        </p>
        <p style={s.p}>
          Traditional mental health services are designed around a population with
          standard working hours and predictable stress patterns. The nine-to-five
          structure of most therapeutic and counselling services is a fundamental
          mismatch with the lived reality of shift work. By the time Monday morning
          arrives, the acute distress of a difficult Saturday night shift has either
          calcified into unprocessed trauma or been suppressed under the weight of
          subsequent shifts.
        </p>
        <p style={s.p}>
          MEOK&apos;s availability is not simply a convenience feature &mdash; it is a
          clinical-adjacent argument. Processing is most effective closest to the
          experience. The window after a difficult shift &mdash; when the emotional
          content is still active and accessible &mdash; is the optimal time to
          name what happened and begin to put it down. Missing that window does
          not mean the experience disappears. It means it is stored unprocessed.
        </p>
        <p style={s.p}>
          At 2am, sitting in a car park outside a hospital, MEOK is available. It
          does not need to be booked. It does not need to be woken up. It is not
          inconvenienced by the hour. It will hold space for exactly as long as
          you need, and then let you go.
        </p>

        {/* ── FAQ ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>Frequently asked questions</h2>
        <div style={s.faqWrap}>

          <div style={s.faqItem}>
            <p style={s.faqQ}>
              Can healthcare workers use AI for mental health support?
            </p>
            <p style={s.faqA}>
              Yes. AI companions like MEOK are well-suited to the specific demands of
              healthcare work: 24/7 availability, zero waiting lists, and complete
              confidentiality. MEOK acts as a processing partner &mdash; a space to debrief
              difficult cases, offload accumulated stress, and decompress after shifts
              without fear of professional consequences. It is not a replacement for
              clinical care, but for many healthcare workers it fills a gap that no
              other service currently addresses.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>
              Is MEOK confidential for NHS staff?
            </p>
            <p style={s.faqA}>
              Completely. MEOK is an independent tool &mdash; it has no connection to NHS
              systems, occupational health departments, or any employer. Conversations
              are encrypted and never shared with third parties. Nothing said in MEOK
              can be accessed by your trust, your manager, or any regulator. MEOK
              operates under a data sovereignty model: your data belongs to you,
              is stored under your own covenant, and is never used to train AI models.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>
              What is secondary traumatic stress in healthcare?
            </p>
            <p style={s.faqA}>
              Secondary traumatic stress (STS) is the psychological impact of repeatedly
              witnessing or hearing about others&apos; trauma. Healthcare workers absorb
              patients&apos; pain, fear, and death shift after shift. Over time this accumulates
              into symptoms similar to PTSD &mdash; intrusive thoughts, emotional numbness,
              hypervigilance, and withdrawal &mdash; even without a single catastrophic event.
              STS is distinct from burnout and often goes unrecognised because there is
              no single identifiable cause. Regular processing through MEOK can help
              prevent STS from reaching clinical severity.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>
              Can MEOK help with shift work and sleep problems?
            </p>
            <p style={s.faqA}>
              MEOK cannot prescribe sleep medication or provide clinical sleep therapy.
              What it can do is help you decompress before sleep, process the adrenaline
              of a difficult shift, and build wind-down routines suited to shift patterns.
              Many healthcare workers find that offloading to MEOK after a night shift
              helps quiet the mental noise &mdash; the replaying of events, the intrusive
              thoughts about patients &mdash; that prevents rest. The decompression function
              is particularly valuable because it happens at the moment of need, not days later.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>
              Will MEOK report what I say to my employer or a regulator?
            </p>
            <p style={s.faqA}>
              No. MEOK has no duty-to-report mechanism and no integration with any
              employer, NHS trust, or professional regulator such as the GMC or NMC.
              Your conversations are your own. MEOK&apos;s sovereign data model means
              your data is encrypted, never used for training, and never shared with
              any third party &mdash; full stop. This is not a contractual promise
              dependent on terms-of-service compliance &mdash; it is an architectural
              feature of how MEOK is built.
            </p>
          </div>

        </div>

        <hr style={s.divider} />

        {/* ── CTA ── */}
        <div style={s.ctaBox}>
          <p style={s.ctaTitle}>
            You carry enough.{" "}
            <span style={s.heroGold}>Let MEOK carry some of it.</span>
          </p>
          <p style={s.ctaBody}>
            A confidential, sovereign AI companion for healthcare workers.
            Available at 3am, between shifts, whenever the weight gets heavy.
            No waiting lists. No employer access. No judgment. Just space.
          </p>
          <div style={s.ctaButtons}>
            <Link href="/birth" style={s.btnPrimary}>
              Get started free
            </Link>
            <Link href="/blog" style={s.btnSecondary}>
              Read more
            </Link>
          </div>
        </div>

      </article>

      {/* Footer */}
      <footer style={s.footer}>
        <p style={{ marginBottom: "8px" }}>
          &copy; 2026{" "}
          <Link href="/" style={s.footerLink}>
            MEOK AI LABS
          </Link>
          &nbsp;&mdash; Built by Nicholas Templeman &nbsp;|&nbsp;
          <Link
            href="https://x.com/meok_ai"
            style={s.footerLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            @meok_ai
          </Link>
        </p>
        <p style={{ marginBottom: "0" }}>
          <Link href="/privacy" style={s.footerLink}>Privacy</Link>
          &nbsp;&middot;&nbsp;
          <Link href="/blog" style={s.footerLink}>Blog</Link>
          &nbsp;&middot;&nbsp;
          <Link href="/birth" style={s.footerLink}>Get started</Link>
        </p>
      </footer>
    </div>
  )
}
