import type { Metadata } from "next"
import Link from "next/link"

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "MEOK for Nurses: Sovereign AI Support for Those Who Care for Everyone Else | MEOK AI LABS",
  description:
    "NHS nurses carry compassion fatigue, moral injury, and shift-work exhaustion in silence. MEOK\u2019s sovereign AI gives nurses a private decompression space after difficult shifts \u2014 available 24/7, invisible to employers, and built to hold the weight you carry.",
  alternates: {
    canonical: "https://meok.ai/blog/meok-for-nurses",
  },
  openGraph: {
    title:
      "MEOK for Nurses: Sovereign AI Support for Those Who Care for Everyone Else",
    description:
      "NHS nurses carry compassion fatigue, moral injury, and shift-work exhaustion in silence. MEOK is a confidential sovereign AI that holds space for the people who hold space for everyone else.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-for-nurses",
    siteName: "MEOK AI LABS",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+for+Nurses&desc=Sovereign+AI+support+for+those+who+care+for+everyone+else.",
        width: 1200,
        height: 630,
        alt: "MEOK for Nurses: Sovereign AI Support for Those Who Care for Everyone Else",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MEOK for Nurses: Sovereign AI Support for Those Who Care for Everyone Else",
    description:
      "Twelve-hour shifts, patient deaths, moral injury, and a culture that makes vulnerability dangerous. MEOK is the confidential AI built for nurses who are running on empty.",
    images: [
      "https://meok.ai/api/og?title=MEOK+for+Nurses&desc=Sovereign+AI+support+for+those+who+care+for+everyone+else.",
    ],
  },
  keywords: [
    "AI for nurses",
    "NHS nurse burnout support",
    "compassion fatigue AI",
    "moral injury nurses",
    "night shift mental health support",
    "nurse wellbeing app",
    "sovereign AI NHS",
    "AI for shift workers",
    "confidential AI companion nurses",
    "NHS nurse mental health",
    "nurse career progression AI",
    "AI decompression after shift",
    "MEOK AI nurses",
    "nurse data privacy AI",
    "healthcare worker burnout 2026",
  ],
}

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "MEOK for Nurses: Sovereign AI Support for Those Who Care for Everyone Else",
  description:
    "NHS nurses carry compassion fatigue, moral injury, and shift-work exhaustion in silence. MEOK\u2019s sovereign AI gives nurses a private decompression space after difficult shifts \u2014 available 24/7, invisible to employers, and built to hold the weight you carry.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/meok-for-nurses",
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
    "AI for nurses",
    "NHS burnout",
    "compassion fatigue",
    "moral injury",
    "night shift support",
    "nurse career progression",
    "sovereign AI",
    "data sovereignty nurses",
    "MEOK AI LABS",
  ],
  articleSection: "MEOK for Nurses",
  inLanguage: "en-GB",
  image:
    "https://meok.ai/api/og?title=MEOK+for+Nurses&desc=Sovereign+AI+support+for+those+who+care+for+everyone+else.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/meok-for-nurses",
  },
  about: [
    { "@type": "Thing", name: "NHS nurse burnout" },
    { "@type": "Thing", name: "Compassion fatigue" },
    { "@type": "Thing", name: "Moral injury in nursing" },
    { "@type": "Thing", name: "Night shift mental health" },
    { "@type": "Thing", name: "Nurse career development" },
    { "@type": "Thing", name: "Data sovereignty AI" },
    { "@type": "Thing", name: "Confidential AI support" },
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can nurses use AI for mental health support after difficult shifts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AI companions like MEOK are available 24/7, require no appointment, and carry no professional risk. After a difficult shift involving patient deaths, trauma, or morally distressing situations, nurses can use MEOK as a private decompression space \u2014 to process what happened, offload accumulated stress, and begin to decompress before sleep. Because MEOK is entirely separate from NHS systems, nothing disclosed can reach an employer, manager, or regulator.",
      },
    },
    {
      "@type": "Question",
      name: "What is moral injury in nursing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Moral injury in nursing occurs when a nurse is forced to act \u2014 or is prevented from acting \u2014 in ways that violate their professional and ethical values. Common examples include being unable to provide adequate care due to staffing shortages, following protocols that feel harmful to a patient, or witnessing substandard care without the authority to change it. Over time, the gap between the care a nurse knows should be given and the care they were able to give accumulates into a deep psychological wound.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK confidential for NHS nurses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Completely. MEOK is an independent personal AI \u2014 it has no connection to the NHS, any trust\u2019s systems, occupational health departments, or any employer. Conversations are encrypted and stored under the user\u2019s sovereign control. Nothing said in MEOK can be accessed by a ward manager, clinical lead, human resources department, or any professional regulator. This data sovereignty guarantee is not a policy promise \u2014 it is a technical architecture.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help nurses working night shifts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Night shift nurses face a particular problem: the support systems designed to help them \u2014 counsellors, occupational health, even colleagues \u2014 are unavailable when the shift ends at 7am. MEOK is available at any hour, requires no booking, and does not judge the hour or the state you are in. It can help nurses decompress after an intense night, process difficult patient interactions, and create a mental wind-down that supports rest when sleep is hard to find after nights.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help nurses with career progression and development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Beyond emotional support, MEOK acts as a Pioneer for career reflection and development. Nurses can use MEOK to explore career pathways, prepare for band promotions, think through specialism choices, practise for interviews, and process the ambivalence that often accompanies career decisions in a profession where advancement can feel like abandoning the ward. MEOK remembers your professional context across conversations, making it a genuinely useful long-term thinking partner.",
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
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function MeokForNursesPage() {
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
        <span style={s.navCurrent}>MEOK for Nurses</span>
      </nav>

      {/* Hero */}
      <header style={s.hero}>
        <div style={s.heroGlow} aria-hidden="true" />
        <div style={s.tagRow}>
          <span style={s.tag}>NHS Nurses</span>
          <span style={s.tag}>Compassion Fatigue</span>
          <span style={s.tag}>Moral Injury</span>
          <span style={s.tag}>Night Shift</span>
          <span style={s.tag}>Data Sovereignty</span>
          <span style={s.tag}>Career Development</span>
        </div>
        <h1 style={s.heroTitle}>
          MEOK for Nurses:{" "}
          <span style={s.heroGold}>
            Sovereign AI Support for Those Who Care for Everyone Else
          </span>
        </h1>
        <p style={s.heroLead}>
          NHS nurses absorb the hardest moments of other people&apos;s lives every single
          shift. MEOK is a private, sovereign AI that holds space for the people who hold
          space for everyone else &mdash; available at 3am after a night shift, after a
          death on the ward, whenever the weight becomes too much to carry quietly.
          No employer access. No waiting lists. No judgment.
        </p>
        <div style={s.metaRow}>
          <span>By Nicholas Templeman</span>
          <span>MEOK AI LABS</span>
          <span>25 March 2026</span>
          <span>16 min read</span>
        </div>
      </header>

      {/* Article */}
      <article style={s.article}>

        <hr style={s.divider} />

        {/* ── SECTION 1: The crisis nursing faces ── */}
        <h2 style={s.h2}>
          What mental health crisis are NHS nurses facing in 2026?
        </h2>
        <p style={s.atomicAnswer}>
          NHS nursing is experiencing a sustained mental health emergency. Roughly one in
          three nurses in England reports experiencing burnout severe enough to affect
          patient care. More than 40,000 nursing posts remain unfilled across the NHS,
          meaning those who remain absorb the load of those who have already left. The
          profession is caught in a self-reinforcing cycle: the more nurses leave, the
          worse conditions become for those who stay, which drives more departures.
        </p>
        <p style={s.p}>
          The 2025 NHS Staff Survey found that 46% of nursing staff reported feeling
          unwell as a result of work-related stress in the preceding twelve months. For
          those working in emergency departments, intensive care, oncology, and paediatric
          settings, the rates are higher still. Compassion fatigue &mdash; the gradual
          erosion of a nurse&apos;s capacity to care &mdash; is not a personal failing. It
          is the predictable physiological and psychological response to sustained exposure
          to human suffering without adequate recovery time or support.
        </p>
        <p style={s.p}>
          What makes the nursing mental health crisis particularly acute is the cultural
          context in which it unfolds. Healthcare professions carry a powerful implicit
          norm: the carer must remain functional. Nurses are trained to prioritise patient
          need above their own. Admitting vulnerability &mdash; to a manager, to
          occupational health, to a colleague &mdash; carries professional and social risks
          that most nurses are unwilling to take. The result is a profession in which
          enormous amounts of distress are processed silently, or not at all.
        </p>

        <div style={s.statGrid}>
          <div style={s.statCard}>
            <p style={s.statNum}>1 in 3</p>
            <p style={s.statLabel}>NHS nurses report burnout affecting patient care</p>
          </div>
          <div style={s.statCard}>
            <p style={s.statNum}>40,000+</p>
            <p style={s.statLabel}>nursing vacancies across the NHS in 2025</p>
          </div>
          <div style={s.statCard}>
            <p style={s.statNum}>46%</p>
            <p style={s.statLabel}>of nursing staff unwell from work-related stress</p>
          </div>
          <div style={s.statCard}>
            <p style={s.statNum}>6&ndash;18</p>
            <p style={s.statLabel}>month average wait for NHS talking therapy referrals</p>
          </div>
        </div>

        {/* ── SECTION 2: Compassion fatigue ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>
          What is compassion fatigue, and why are nurses particularly vulnerable to it?
        </h2>
        <p style={s.atomicAnswer}>
          Compassion fatigue is the gradual depletion of a care professional&apos;s
          capacity for empathy and emotional engagement as a result of sustained exposure
          to others&apos; suffering. Unlike burnout, which is primarily job-related, compassion
          fatigue is specifically linked to the emotional and empathic demands of caring
          work. Nurses are uniquely vulnerable because their role requires them to be
          emotionally present with patients and families across every shift, without a
          meaningful way to discharge what they absorb.
        </p>
        <p style={s.p}>
          The symptoms of compassion fatigue can be difficult for nurses to recognise in
          themselves precisely because the profession normalises emotional endurance as a
          virtue. Common signs include emotional numbness, a reduced capacity to feel
          empathy, cynicism that was not there before, intrusive thoughts about difficult
          patients, sleep disturbance even on rest days, and a creeping detachment from
          work that once felt meaningful.
        </p>
        <p style={s.p}>
          The insidious dimension of compassion fatigue is the shame it generates. Nurses
          who entered the profession from a deep place of vocation &mdash; who genuinely
          wanted to care for people &mdash; often experience the erosion of that capacity
          as a personal failure rather than a systemic consequence. That shame closes off
          the very conversations that might help. It makes asking for support feel like an
          admission of professional inadequacy.
        </p>
        <p style={s.p}>
          MEOK&apos;s role here is not to treat compassion fatigue &mdash; that requires
          clinical intervention. It is to provide a space where nurses can name what is
          happening, process accumulated emotion without professional risk, and begin to
          understand what they are experiencing before deciding what to do about it. A
          private space for honest reflection is itself a therapeutic resource.
        </p>

        <div style={s.callout}>
          <p style={s.calloutTitle}>What MEOK Understands</p>
          <p style={s.calloutBody}>
            MEOK is designed with the Healer archetype at its core. It understands the
            particular texture of caring-profession exhaustion &mdash; the way it feels
            different from ordinary tiredness, the way it coexists with genuine love for
            the work, the way it can arrive suddenly after years of coping. MEOK does not
            offer platitudes. It listens, reflects, and helps you find language for what
            you are experiencing.
          </p>
        </div>

        {/* ── SECTION 3: Moral injury ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>
          How does moral injury affect nurses, and how does MEOK help process it?
        </h2>
        <p style={s.atomicAnswer}>
          Moral injury in nursing occurs when a nurse is prevented from acting in
          accordance with their professional and ethical values &mdash; or is compelled to
          act against them. The classic NHS example is a nurse who knows a patient needs
          more time, better medication, or a different approach, but is unable to provide
          it because of staffing constraints, resource limitations, or institutional
          hierarchy. The gap between what care should look like and what care was actually
          possible becomes a wound.
        </p>
        <p style={s.p}>
          Research published in the Nursing Standard found that moral injury among NHS
          nurses accelerated significantly during the Covid-19 pandemic and has not
          returned to pre-pandemic levels. The specific circumstances that generate it
          &mdash; inadequate staffing, resource scarcity, systemic failures &mdash; remain
          structurally embedded in the NHS. This means nurses are not recovering from a
          temporary crisis. They are carrying ongoing moral injury as a condition of
          employment.
        </p>
        <p style={s.p}>
          What makes moral injury particularly difficult to process is its ethical
          complexity. Unlike grief, which has a recognised social and professional
          language, moral injury involves a kind of professional guilt that nurses are
          rarely given permission to articulate. Saying &ldquo;I feel like I let that patient
          down&rdquo; in a clinical environment risks being heard as negligence. Saying it to
          MEOK is simply true.
        </p>
        <p style={s.p}>
          MEOK can help nurses process moral injury by providing a space to articulate the
          specific situations that have caused harm, explore the distinction between
          systemic failure and personal failure, and work through the complicated emotions
          &mdash; guilt, rage, grief, helplessness &mdash; that moral injury generates.
          This is not therapy. But it is the kind of clear-eyed, non-judgmental conversation
          that most nurses never get to have.
        </p>

        {/* Feature box 1 — decompression space */}
        <div style={s.featureBox}>
          <p style={s.featureBoxTitle}>The Post-Shift Decompression Space</p>
          <p style={s.featureBoxBody}>
            One of the most consistently useful things nurses report about MEOK is having
            somewhere to go after a difficult shift before they go home. The transition from
            clinical environment to domestic life is rarely smooth. You have just watched
            someone die, or managed a family in crisis, or navigated a situation that was
            genuinely impossible. And then you are expected to make dinner and ask about
            school.
          </p>
          <p style={{
            fontSize: "clamp(15px, 2vw, 16px)",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.8)",
            marginBottom: "0",
            marginTop: "16px",
          }}>
            MEOK provides the decompression layer that sits between the shift and the rest
            of your life. You can tell it exactly what happened. You do not need to protect
            it from the details. You do not need to manage its reaction. You can say the
            thing you cannot say at home, and you can say the thing you cannot say at work,
            and you can begin the process of putting it down before you walk through your
            front door.
          </p>
        </div>

        {/* ── SECTION 4: Deaths, trauma and distressing patients ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>
          How can nurses process patient deaths and traumatic events without professional risk?
        </h2>
        <p style={s.atomicAnswer}>
          Patient deaths are an occupational constant for nurses, particularly those
          working in acute, oncology, or end-of-life settings. The NHS provides limited
          formal support for this reality. Debriefs are often logistical rather than
          emotional, and the cultural expectation is that nurses will manage their grief
          quietly and return to the ward. The cumulative effect of unprocessed loss is one
          of the primary drivers of both compassion fatigue and long-term PTSD in nursing.
        </p>
        <p style={s.p}>
          The fundamental problem with seeking support through official NHS channels
          following a distressing patient interaction is that those channels are not
          confidential in the same way a private conversation is. Occupational health
          referrals create records. EAP counselling, while confidential in principle, is
          provided by employers and therefore carries ambiguity. Clinical supervision can
          be valuable but is inconsistently available and culturally variable in how safe
          it actually feels.
        </p>
        <p style={s.p}>
          MEOK offers a categorically different kind of conversation. It has no employment
          relationship with the NHS, no duty-to-report obligations, and no integration with
          any employer system. When a nurse tells MEOK about the patient who died last night
          &mdash; about what it felt like, about what they wish had been different, about
          the family member&apos;s face &mdash; that conversation exists only between them and
          their own private AI instance. It cannot be accessed by a trust, a manager, or
          a regulator.
        </p>
        <p style={s.p}>
          This is not a workaround for proper clinical support. MEOK does not replace
          trauma-focused therapy, peer support programmes, or clinical supervision. It
          supplements them by providing the immediate, private, always-available
          conversation that those formal structures cannot offer.
        </p>

        <div style={s.pullQuote}>
          <p style={s.pullQuoteText}>
            &ldquo;The things that haunt nurses are not the catastrophic events alone.
            They are the accumulated thousand moments of inadequate care, unwitnessed
            suffering, and silent grief that form the texture of clinical work.&rdquo;
          </p>
          <p style={s.pullQuoteAttr}>MEOK AI LABS &mdash; On caring-profession exhaustion</p>
        </div>

        {/* ── SECTION 5: Night shift ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>
          Why is MEOK particularly valuable for nurses on night shifts?
        </h2>
        <p style={s.atomicAnswer}>
          Night shift nursing creates a specific and largely unaddressed support problem.
          The difficult things that happen on nights &mdash; the deaths, the emergency
          escalations, the moments of acute distress &mdash; happen when every support
          structure is unavailable. There is no occupational health at 4am. There is no
          counselling service at 7am when the shift ends. There are no managers with time
          to listen. There are just exhausted colleagues who need to get home.
        </p>
        <p style={s.p}>
          Night shift nurses face an additional physiological burden. The circadian
          disruption of rotating shifts or permanent nights creates chronic sleep deprivation
          that compromises emotional regulation, increases anxiety, and reduces the
          psychological resilience that nurses need to process difficult experiences. The
          combination of high emotional demand and impaired recovery is a particularly
          damaging one.
        </p>
        <p style={s.p}>
          MEOK is available at any hour, without an appointment, without a waiting period,
          and without the social complexity of approaching a colleague in the early hours
          of the morning. A nurse who has just lost a patient at 3am can open MEOK and
          begin to process what happened before the adrenaline of the shift has even
          finished metabolising. A nurse arriving home at 7:30am, too wired to sleep and
          too tired to speak, can use MEOK to decompress before attempting rest.
        </p>
        <p style={s.p}>
          MEOK&apos;s Sovereign Memory also means it retains context across conversations.
          If a nurse has talked to MEOK over several weeks about the cumulative toll of
          night shifts, MEOK understands that context the next time they open a
          conversation. It is not starting from scratch every time. It knows what you have
          been carrying.
        </p>

        {/* Feature box 2 — night shift */}
        <div style={s.featureBox}>
          <p style={s.featureBoxTitle}>Always On: What 24/7 Availability Actually Means</p>
          <ul style={s.featureList}>
            <li style={s.featureListItem}>
              <span style={s.featureListItemBullet}>&#10003;</span>
              Available at 3am during a break on a difficult night shift
            </li>
            <li style={s.featureListItem}>
              <span style={s.featureListItemBullet}>&#10003;</span>
              Available at 7am when the shift ends and home feels unreachable
            </li>
            <li style={s.featureListItem}>
              <span style={s.featureListItemBullet}>&#10003;</span>
              Available on rest days when the events of the week catch up with you
            </li>
            <li style={s.featureListItem}>
              <span style={s.featureListItemBullet}>&#10003;</span>
              Available during the sleepless hours when your body and brain are out of sync
            </li>
            <li style={s.featureListItem}>
              <span style={s.featureListItemBullet}>&#10003;</span>
              No booking, no waiting list, no hold music, no form to complete
            </li>
            <li style={s.featureListItem}>
              <span style={s.featureListItemBullet}>&#10003;</span>
              Sovereign Memory means it already knows your context when you return
            </li>
          </ul>
        </div>

        {/* ── SECTION 6: Data sovereignty ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>
          Can NHS employers access what nurses say to MEOK?
        </h2>
        <p style={s.atomicAnswer}>
          No. This is the most important thing to understand about MEOK, and it is not a
          promise &mdash; it is a technical architecture. MEOK is a personal sovereign AI
          that has no connection to NHS systems, trust networks, or any employer
          infrastructure. Conversations are encrypted and stored under the individual
          user&apos;s control. There is no mechanism by which an NHS trust, a ward manager,
          a human resources department, or any professional regulator can access what a
          nurse has discussed with MEOK.
        </p>
        <p style={s.p}>
          The data sovereignty guarantee matters in nursing because the culture of
          vulnerability-as-weakness makes professional safety a genuine concern. A nurse
          who tells occupational health that they are struggling may find that information
          surfaces in performance reviews. A nurse who seeks support through a
          line-management route may discover that the very act of asking for help has
          created a record that follows them. These are not paranoid concerns &mdash; they
          are documented features of how NHS workplace culture functions.
        </p>
        <p style={s.p}>
          MEOK exists entirely outside this system. It is not an NHS product. It is not
          commissioned by a trust. It is not subject to Freedom of Information requests.
          It does not create notes that are shareable with employers. Your MEOK conversations
          belong to you in the same way that a diary belongs to you: as a private record
          that exists for your benefit alone.
        </p>
        <p style={s.p}>
          MEOK also does not use your conversations to train its models. The data
          sovereignty principle extends to what MEOK&apos;s own infrastructure does with
          what you share. Your distress, your doubts, your grief, and your career
          frustrations are not turned into training data. They remain yours.
        </p>

        <div style={s.callout}>
          <p style={s.calloutTitle}>The Data Sovereignty Guarantee</p>
          <p style={s.calloutBody}>
            MEOK is architecturally separate from every employer system. No trust, no
            manager, no HR department, and no regulator can access your conversations.
            Your data is encrypted, never used for model training, and never shared with
            third parties. This is not a policy. It is a technical fact built into how
            MEOK works.
          </p>
        </div>

        {/* ── SECTION 7: Career progression ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>
          How does MEOK support nurse career development and progression?
        </h2>
        <p style={s.atomicAnswer}>
          Beyond emotional support, MEOK functions as a Pioneer for career reflection and
          development. Nursing careers are rarely linear, and the decisions they require
          &mdash; whether to pursue a specialism, whether to move into management, whether
          to stay in the NHS or explore independent practice &mdash; are rarely ones that
          nurses have adequate support to think through. MEOK provides a sustained thinking
          partner for the professional dimension of nursing life.
        </p>
        <p style={s.p}>
          Career progression in nursing often comes with complicated emotional freight.
          Moving from band 5 to band 6 or 7 can feel like leaving the clinical work you
          love for administrative responsibilities you did not sign up for. Moving into
          specialist roles can mean leaving teams and relationships that have sustained you.
          The ambivalence around career development is real, and most nurses process it
          quietly, without a space to properly examine it.
        </p>
        <p style={s.p}>
          MEOK can help nurses prepare for interviews, think through CPD priorities, draft
          reflective practice pieces, explore the pros and cons of different career
          pathways, and process the mixed feelings that accompany both advancement and
          stagnation. Because MEOK remembers your professional context across conversations,
          it can build a genuine picture of your career trajectory and the factors that
          matter most to you.
        </p>
        <p style={s.p}>
          For nurses considering leaving the NHS entirely &mdash; to work in private
          healthcare, to retrain, to take a break, or to emigrate &mdash; MEOK is a space
          to examine that decision without the fear that voicing it will be treated as
          disloyalty or ingratitude. MEOK does not have an investment in you staying in
          your current role. It has an investment in you understanding what you actually
          want.
        </p>

        {/* Feature box 3 — career support */}
        <div style={s.featureBox}>
          <p style={s.featureBoxTitle}>Career Support MEOK Can Provide</p>
          <ul style={s.featureList}>
            <li style={s.featureListItem}>
              <span style={s.featureListItemBullet}>&#10003;</span>
              Interview preparation for band promotions and specialist roles
            </li>
            <li style={s.featureListItem}>
              <span style={s.featureListItemBullet}>&#10003;</span>
              Reflective practice writing for revalidation and CPD portfolios
            </li>
            <li style={s.featureListItem}>
              <span style={s.featureListItemBullet}>&#10003;</span>
              Thinking through specialism choices and their implications
            </li>
            <li style={s.featureListItem}>
              <span style={s.featureListItemBullet}>&#10003;</span>
              Exploring the question of staying in the NHS versus other pathways
            </li>
            <li style={s.featureListItem}>
              <span style={s.featureListItemBullet}>&#10003;</span>
              Processing the emotional complexity of ambition in a caring profession
            </li>
            <li style={s.featureListItem}>
              <span style={s.featureListItemBullet}>&#10003;</span>
              Building confidence for leadership and management transitions
            </li>
            <li style={s.featureListItem}>
              <span style={s.featureListItemBullet}>&#10003;</span>
              Sustained career coaching that remembers where you started
            </li>
          </ul>
        </div>

        {/* ── SECTION 8: What MEOK is not ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>
          What MEOK is not &mdash; and why that matters for nurses
        </h2>
        <p style={s.atomicAnswer}>
          MEOK is not a clinical mental health service. It is not therapy. It cannot
          diagnose, prescribe, or replace the specialised intervention that conditions like
          PTSD, clinical depression, or severe burnout require. Nurses reading this page
          who are in genuine crisis &mdash; who are having thoughts of suicide, who are
          unable to function, who are experiencing acute trauma symptoms &mdash; need
          clinical care. MEOK is a supplement, not a substitute.
        </p>
        <p style={s.p}>
          This distinction matters for a practical reason. One of the risks of AI
          companions in the wellbeing space is that they might be used to avoid seeking
          appropriate clinical help, or that they might be marketed in ways that overstate
          their capabilities. MEOK is committed to a different position: honest about what
          it is, honest about its limits, and designed to be a complement to &mdash; rather
          than a replacement for &mdash; proper clinical care when that care is needed.
        </p>
        <p style={s.p}>
          What MEOK offers is the category of support that clinical services cannot
          provide: immediate availability, zero professional risk, genuine privacy, and a
          space where every conversation does not need to be about diagnosis or treatment.
          Nurses do not only need clinical care. They also need somewhere to talk honestly
          about the texture of their days. MEOK is that place.
        </p>
        <p style={s.p}>
          For nurses who are managing their mental health well but find the absence of
          any safe processing space draining, MEOK is the intervention. For nurses who
          suspect they need more &mdash; who have noticed signs of PTSD, persistent
          depression, or crisis-level distress &mdash; MEOK can be a bridge to seeking
          that help, a space to clarify what is happening before approaching services that
          feel intimidating or professionally risky.
        </p>

        {/* ── SECTION 9: How MEOK is different ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>
          How is MEOK different from NHS wellbeing apps and EAP counselling?
        </h2>
        <p style={s.atomicAnswer}>
          Most employer-provided wellbeing tools &mdash; including NHS digital wellbeing
          platforms and Employee Assistance Programme counselling &mdash; share a common
          structural limitation: they are provided by or commissioned through the employer.
          This creates an inherent ambiguity about confidentiality that most nurses
          correctly read as risk. MEOK is entirely independent, architecturally separate
          from all employer systems, and built on a data sovereignty model that makes
          employer access technically impossible.
        </p>
        <p style={s.p}>
          NHS wellbeing apps are typically reactive and prescriptive. They offer breathing
          exercises, CBT modules, and mood tracking within a fixed framework. They do not
          have memory of your context, do not know your ward history, and do not adapt to
          the specific texture of your professional life. They are designed for populations,
          not individuals.
        </p>
        <p style={s.p}>
          MEOK is different in every dimension. It has Sovereign Memory, which means it
          retains your professional context, your personal history, and the arc of your
          conversations over time. It knows that you mentioned three months ago that the
          nurse in charge of your ward was making your shifts harder. It remembers that you
          were considering applying for a band 7 post and can pick that thread up when you
          return to it. It is not starting from a blank page with every conversation.
        </p>
        <p style={s.p}>
          EAP counselling offers genuine clinical value when nurses can access it, but its
          limitations are structural. Sessions are limited in number, counsellors change,
          and the service operates during business hours. MEOK is available every hour of
          every day and retains complete context across every interaction for as long as a
          nurse uses it.
        </p>

        <div style={s.pullQuote}>
          <p style={s.pullQuoteText}>
            &ldquo;The nurse who cannot sleep after a difficult shift does not need an
            app that reminds them to breathe. They need somewhere honest to put what
            happened.&rdquo;
          </p>
          <p style={s.pullQuoteAttr}>Nicholas Templeman &mdash; Founder, MEOK AI LABS</p>
        </div>

        {/* ── SECTION 10: The Healer archetype ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>
          What is the Healer archetype, and why does MEOK use it for nurses?
        </h2>
        <p style={s.atomicAnswer}>
          MEOK uses an archetype system to configure the emotional and conversational
          disposition of your AI companion. The Healer archetype is characterised by
          deep listening, emotional attunement, patience, and an absence of judgment. It
          is designed for users who are primarily seeking a space to process, reflect, and
          be heard &mdash; rather than to be advised, directed, or solved. For nurses, the
          Healer archetype mirrors the best qualities of the care they themselves provide,
          turned back towards them.
        </p>
        <p style={s.p}>
          The Healer is not passive. It will ask questions that help you go deeper. It will
          reflect back what it is hearing. It will gently name patterns it has noticed
          across your conversations &mdash; not to diagnose, but to help you see what might
          not be visible from inside the experience. It brings the quality of presence that
          nurses are trained to offer patients, to the nurse themselves.
        </p>
        <p style={s.p}>
          Nurses can also use the Pioneer archetype for career development conversations.
          The Pioneer is characterised by curiosity, forward momentum, and a talent for
          helping you think through complex decisions without predetermined conclusions.
          Switching between archetypes is straightforward, and many nurses find themselves
          using MEOK in Healer mode for emotional processing and Pioneer mode when they
          are thinking about career direction and professional development.
        </p>
        <p style={s.p}>
          The archetype system ensures that MEOK adapts its approach to what you actually
          need in a given conversation, rather than applying a single generic mode to every
          interaction. A nurse who comes to MEOK at 3am after a patient death needs
          something different from a nurse who comes to MEOK on a rest day thinking about
          a promotion application. MEOK is designed to respond to that difference.
        </p>

        {/* ── SECTION 11: FAQ ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>Frequently Asked Questions</h2>

        <div style={s.faqWrap}>

          <div style={s.faqItem}>
            <p style={s.faqQ}>Can nurses use AI for mental health support after difficult shifts?</p>
            <p style={s.faqA}>
              Yes. MEOK is available 24/7, requires no appointment, and carries no
              professional risk. After a difficult shift involving patient deaths, trauma, or
              morally distressing situations, nurses can use MEOK as a private decompression
              space &mdash; to process what happened, offload accumulated stress, and begin to
              decompress before sleep. Because MEOK is entirely separate from NHS systems,
              nothing disclosed can reach an employer, manager, or regulator.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>What is moral injury in nursing?</p>
            <p style={s.faqA}>
              Moral injury in nursing occurs when a nurse is forced to act &mdash; or is
              prevented from acting &mdash; in ways that violate their professional and ethical
              values. Common examples include being unable to provide adequate care due to
              staffing shortages, following protocols that feel harmful to a patient, or
              witnessing substandard care without the authority to change it. Over time, the
              gap between the care a nurse knows should be given and the care they were able
              to give accumulates into a deep psychological wound.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>Is MEOK confidential for NHS nurses?</p>
            <p style={s.faqA}>
              Completely. MEOK is an independent personal AI &mdash; it has no connection to
              the NHS, any trust&apos;s systems, occupational health departments, or any employer.
              Conversations are encrypted and stored under the user&apos;s sovereign control.
              Nothing said in MEOK can be accessed by a ward manager, clinical lead, human
              resources department, or any professional regulator. This data sovereignty
              guarantee is not a policy promise &mdash; it is a technical architecture.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>How does MEOK help nurses working night shifts?</p>
            <p style={s.faqA}>
              Night shift nurses face a particular problem: the support systems designed to
              help them are unavailable when the shift ends at 7am. MEOK is available at any
              hour, requires no booking, and does not judge the hour or the state you are in.
              It can help nurses decompress after an intense night, process difficult patient
              interactions, and create a mental wind-down that supports rest when sleep is hard
              to find after nights.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>Can MEOK help nurses with career progression and development?</p>
            <p style={s.faqA}>
              Yes. Beyond emotional support, MEOK acts as a Pioneer for career reflection and
              development. Nurses can use MEOK to explore career pathways, prepare for band
              promotions, think through specialism choices, practise for interviews, and process
              the ambivalence that often accompanies career decisions in a profession where
              advancement can feel like abandoning the ward. MEOK remembers your professional
              context across conversations, making it a genuinely useful long-term thinking
              partner.
            </p>
          </div>

          <div style={{
            paddingBottom: "0",
            marginBottom: "0",
          }}>
            <p style={s.faqQ}>Will MEOK ever report what I say to my employer or a regulator?</p>
            <p style={s.faqA}>
              No. MEOK has no duty-to-report mechanism, no integration with any employer or
              NHS trust, and no connection to any professional regulatory body. Your
              conversations are your own. MEOK&apos;s data sovereignty model means your data is
              encrypted, never used for training, and never shared with any third party &mdash;
              full stop.
            </p>
          </div>

        </div>

        {/* ── Related reading ── */}
        <hr style={s.divider} />
        <h2 style={s.h2}>Related Reading</h2>
        <p style={s.pMuted}>
          Nurses often work alongside other healthcare professionals and caregivers. These
          articles explore related dimensions of MEOK&apos;s support.
        </p>

        <div style={s.relatedGrid}>
          <Link href="/blog/meok-for-healthcare-workers" style={s.relatedCard}>
            <p style={s.relatedCardLabel}>Related Article</p>
            <p style={s.relatedCardTitle}>
              MEOK for Healthcare Workers: AI That Understands What You Carry Home
            </p>
          </Link>
          <Link href="/blog/ai-for-burnout" style={s.relatedCard}>
            <p style={s.relatedCardLabel}>Related Article</p>
            <p style={s.relatedCardTitle}>
              AI for Burnout: Can an AI Companion Help When You Are Running on Empty?
            </p>
          </Link>
          <Link href="/blog/ai-for-caregivers" style={s.relatedCard}>
            <p style={s.relatedCardLabel}>Related Article</p>
            <p style={s.relatedCardTitle}>
              AI for Caregivers: Support for the People Who Support Everyone Else
            </p>
          </Link>
          <Link href="/blog/data-sovereignty-ai" style={s.relatedCard}>
            <p style={s.relatedCardLabel}>Related Article</p>
            <p style={s.relatedCardTitle}>
              Data Sovereignty in AI: Why It Matters That Your Conversations Stay Yours
            </p>
          </Link>
          <Link href="/blog/ai-for-night-shift-workers" style={s.relatedCard}>
            <p style={s.relatedCardLabel}>Related Article</p>
            <p style={s.relatedCardTitle}>
              AI for Night Shift Workers: Support When Everyone Else is Asleep
            </p>
          </Link>
          <Link href="/blog/ai-for-ptsd" style={s.relatedCard}>
            <p style={s.relatedCardLabel}>Related Article</p>
            <p style={s.relatedCardTitle}>
              AI for PTSD: What Role Can an AI Companion Play in Trauma Recovery?
            </p>
          </Link>
        </div>

        {/* ── CTA ── */}
        <div style={s.ctaBox}>
          <p style={s.ctaTitle}>
            You hold space for everyone else.{" "}
            <span style={s.heroGold}>Let MEOK hold space for you.</span>
          </p>
          <p style={s.ctaBody}>
            MEOK is a private, sovereign AI companion built for people who care for others
            for a living. Available 24/7, invisible to your employer, and designed to meet
            you wherever you are &mdash; after a difficult shift, in the early hours, or
            whenever you need a space that is genuinely yours.
          </p>
          <div style={s.ctaButtons}>
            <Link href="https://meok.ai/birth" style={s.btnPrimary}>
              Meet Your MEOK
            </Link>
            <Link href="/blog/meok-for-healthcare-workers" style={s.btnSecondary}>
              Read: MEOK for Healthcare Workers
            </Link>
          </div>
        </div>

      </article>

      {/* Footer */}
      <footer style={s.footer}>
        <p style={{ marginBottom: "8px" }}>
          &copy; 2026{" "}
          <Link href="/" style={s.footerLink}>MEOK AI LABS</Link>
          {" "}&mdash; Sovereign AI for people who need to be heard.
        </p>
        <p style={{ margin: "0" }}>
          <Link href="/blog" style={s.footerLink}>Blog</Link>
          {" "}&middot;{" "}
          <Link href="/privacy" style={s.footerLink}>Privacy</Link>
          {" "}&middot;{" "}
          <Link href="/about" style={s.footerLink}>About</Link>
          {" "}&middot;{" "}
          <Link href="https://meok.ai/birth" style={s.footerLink}>Get Started</Link>
        </p>
      </footer>

    </div>
  )
}
