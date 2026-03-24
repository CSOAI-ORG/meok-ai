import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for New Parents: Postnatal Support at 3am When the World is Asleep | MEOK AI LABS",
  description:
    "Postnatal depression affects 1 in 5 mothers and 1 in 10 fathers — most go undiagnosed. MEOK offers a non-judgmental AI companion for the newborn fog, intrusive thoughts, identity shift, and the 3am feed. Guardian safeguards. Family tier supports both parents.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-new-parents" },
  keywords: [
    "AI for new parents",
    "postnatal depression support",
    "postnatal anxiety UK",
    "AI for new mums",
    "AI for new dads",
    "postnatal mental health",
    "intrusive thoughts after birth",
    "3am baby feed support",
    "MEOK AI parenting",
    "PANDAS Foundation",
    "postnatal depression fathers",
    "newborn anxiety support",
    "AI companion for parents",
    "postnatal crisis support",
    "perinatal mental health",
  ],
  openGraph: {
    title:
      "AI for New Parents: Postnatal Support at 3am When the World is Asleep",
    description:
      "Postnatal depression affects 1 in 5 mothers and 1 in 10 fathers. MEOK is the non-judgmental companion for the newborn fog, intrusive thoughts, and the 3am moment when you need someone who won\u2019t judge you.",
    url: "https://meok.ai/blog/ai-for-new-parents",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+New+Parents&desc=Postnatal+Support+at+3am+When+the+World+is+Asleep",
        width: 1200,
        height: 630,
        alt: "AI for New Parents: Postnatal Support at 3am | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for New Parents: Postnatal Support at 3am When the World is Asleep",
    description:
      "Postnatal depression affects 1 in 5 mothers and 1 in 10 fathers. MEOK is there at 3am — non-judgmental, remembering, and never telling you how you should feel.",
    images: [
      "https://meok.ai/api/og?title=AI+for+New+Parents&desc=Postnatal+Support+at+3am+When+the+World+is+Asleep",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for New Parents: Postnatal Support at 3am When the World is Asleep",
  description:
    "Postnatal depression affects 1 in 5 mothers and 1 in 10 fathers — most go undiagnosed. MEOK offers a non-judgmental AI companion for the newborn fog, intrusive thoughts, identity shift, and the 3am feed.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-new-parents",
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
    "@id": "https://meok.ai/blog/ai-for-new-parents",
  },
  keywords: [
    "AI for new parents",
    "postnatal depression support",
    "postnatal anxiety UK",
    "intrusive thoughts after birth",
    "postnatal depression fathers",
    "PANDAS Foundation",
    "perinatal mental health",
    "MEOK AI LABS",
    "AI companion parenting",
    "newborn fog",
  ],
  articleSection: "Parenting & Perinatal Mental Health",
  inLanguage: "en-GB",
  about: [
    { "@type": "Thing", name: "Postnatal depression" },
    { "@type": "Thing", name: "Postnatal anxiety" },
    { "@type": "Thing", name: "Intrusive thoughts" },
    { "@type": "Thing", name: "Perinatal mental health" },
    { "@type": "Thing", name: "AI companion" },
    { "@type": "Thing", name: "New parent support" },
  ],
  mentions: [
    { "@type": "Organization", name: "PANDAS Foundation", url: "https://pandasfoundation.org.uk" },
    { "@type": "Organization", name: "NCT", url: "https://nct.org.uk" },
    { "@type": "Organization", name: "Mind", url: "https://mind.org.uk" },
    { "@type": "Organization", name: "NHS", url: "https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/postnatal-depression/" },
  ],
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with postnatal depression?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "AI cannot diagnose or treat postnatal depression — that requires your GP or a perinatal mental health team. But MEOK can be present at 3am when clinical services are closed, holding space for how you feel, tracking mood patterns across weeks, and always signposting you toward PANDAS Foundation, Mind, or your NHS perinatal team when deeper support is needed. It is a companion, not a clinician — but a companion who never sleeps and never judges.",
      },
    },
    {
      "@type": "Question",
      name: "Is it normal to have scary thoughts after birth?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Intrusive thoughts — unwanted, distressing mental images about harm coming to your baby — are experienced by up to 91% of new parents and are a recognised feature of perinatal anxiety, not a sign of danger or bad parenting. They are ego-dystonic, meaning they horrify you precisely because they contradict your values. MEOK treats them without alarm, helps you name what you\u2019re experiencing, and connects you with resources from the Maternal Mental Health Alliance and PANDAS Foundation if needed.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK support both parents?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "MEOK\u2019s Family tier gives each parent their own AI companion with shared context — so both mum and dad (or both parents in any family structure) can speak freely without reading from the same transcript. Each companion knows the shared family situation but holds its own private conversations. Fathers and non-birthing partners are equally supported: their postnatal experiences, identity shifts, and anxieties deserve the same space.",
      },
    },
    {
      "@type": "Question",
      name: "Will MEOK judge my parenting choices?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. MEOK is built on a principle of radical autonomy. Whether you chose a caesarean or a home birth, formula or breastfeeding, co-sleeping or sleep training, returning to work at six weeks or staying home for a year — MEOK does not have an opinion on what is right for your family. It will never steer you toward a particular parenting philosophy. You are the expert on your own child and circumstances.",
      },
    },
    {
      "@type": "Question",
      name: "What are intrusive thoughts in new parents?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Intrusive thoughts in new parents are involuntary, unwanted mental images or urges — often involving harm to the baby — that cause significant distress. They are not desires or intentions. Research shows they are near-universal in the postpartum period and are strongly associated with heightened vigilance rather than danger. The Maternal Mental Health Alliance, PANDAS Foundation, and clinical organisations such as the Marce Society all recognise perinatal intrusive thoughts as a primary target for support and early intervention.",
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

  container: {
    maxWidth: "780px",
    margin: "0 auto",
    padding: "0 24px 80px",
  } as React.CSSProperties,

  hero: {
    paddingTop: "72px",
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

  article: {
    paddingTop: "52px",
  } as React.CSSProperties,

  h2: {
    fontSize: "clamp(20px, 3.5vw, 28px)",
    fontWeight: 700,
    lineHeight: 1.25,
    color: "#f5f0e8",
    marginTop: "60px",
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

  statBlock: {
    background: "rgba(201,168,76,0.07)",
    border: "1px solid rgba(201,168,76,0.22)",
    borderRadius: "12px",
    padding: "28px 32px",
    marginTop: "36px",
    marginBottom: "36px",
  } as React.CSSProperties,

  statNumber: {
    fontSize: "48px",
    fontWeight: 800,
    color: "#c9a84c",
    lineHeight: 1,
    marginBottom: "8px",
    display: "block",
  } as React.CSSProperties,

  statLabel: {
    fontSize: "15px",
    color: "rgba(245,240,232,0.72)",
    lineHeight: 1.5,
  } as React.CSSProperties,

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
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
    marginBottom: "8px",
    lineHeight: 1.5,
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
    background: "linear-gradient(135deg, rgba(201,168,76,0.10) 0%, rgba(13,12,24,0.8) 100%)",
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

  divider: {
    border: "none",
    borderTop: "1px solid rgba(201,168,76,0.12)",
    marginTop: "52px",
    marginBottom: "52px",
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

  tagsRow: {
    marginBottom: "32px",
    marginTop: "8px",
  } as React.CSSProperties,

  warningBox: {
    background: "rgba(245,240,232,0.04)",
    border: "1px solid rgba(245,240,232,0.15)",
    borderLeft: "4px solid rgba(245,240,232,0.4)",
    borderRadius: "0 8px 8px 0",
    padding: "18px 22px",
    marginTop: "28px",
    marginBottom: "28px",
  } as React.CSSProperties,

  warningText: {
    fontSize: "14px",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.65)",
  } as React.CSSProperties,

  inlineLink: {
    color: "#c9a84c",
    textDecoration: "underline",
    textUnderlineOffset: "3px",
  } as React.CSSProperties,

  sectionLabel: {
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase" as const,
    color: "rgba(201,168,76,0.7)",
    marginBottom: "6px",
    display: "block",
  } as React.CSSProperties,
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function AiForNewParentsPage() {
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

      <div style={s.container}>

        {/* Breadcrumb */}
        <nav style={s.breadcrumb} aria-label="Breadcrumb">
          <Link href="/" style={s.breadcrumbLink}>Home</Link>
          <span>/</span>
          <Link href="/blog" style={s.breadcrumbLink}>Blog</Link>
          <span>/</span>
          <span style={s.breadcrumbCurrent}>AI for New Parents</span>
        </nav>

        {/* Hero */}
        <header style={s.hero}>
          <span style={s.eyebrow}>Perinatal Mental Health &amp; AI</span>
          <h1 style={s.h1}>
            AI for New Parents: Postnatal Support at 3am When the World Is Asleep
          </h1>
          <p style={s.lede}>
            Postnatal depression affects 1 in 5 mothers and 1 in 10 fathers in the UK —
            most go undiagnosed. The newborn fog is real: sleep deprivation, identity
            fracture, relationship strain, and the raw residue of the birth itself.
            MEOK is the companion that is present at 3am, non-judgmental about every
            choice, and built to hold the hardest thoughts without flinching.
          </p>
          <div style={s.meta}>
            <span>Nicholas Templeman</span>
            <span style={s.metaDot}>&#9679;</span>
            <span>MEOK AI LABS</span>
            <span style={s.metaDot}>&#9679;</span>
            <time dateTime="2026-03-24">24 March 2026</time>
            <span style={s.metaDot}>&#9679;</span>
            <span>14 min read</span>
          </div>

          <div style={s.tagsRow}>
            <span style={s.tag}>Postnatal Depression</span>
            <span style={s.tag}>Perinatal Mental Health</span>
            <span style={s.tag}>Intrusive Thoughts</span>
            <span style={s.tag}>New Parent Support</span>
            <span style={s.tag}>PANDAS Foundation</span>
            <span style={s.tag}>Family Tier</span>
          </div>
        </header>

        {/* Article body */}
        <article style={s.article}>

          {/* Crisis notice */}
          <div style={s.warningBox}>
            <p style={s.warningText}>
              <strong style={{ color: "#f5f0e8" }}>If you are in crisis right now:</strong>{" "}
              Call the PANDAS helpline on{" "}
              <a href="tel:08001387777" style={s.inlineLink}>0800 138 7777</a>, the
              Samaritans on{" "}
              <a href="tel:116123" style={s.inlineLink}>116 123</a> (free, 24/7), or
              your local A&amp;E. MEOK is a companion — not an emergency service. Please
              reach a human if you are at risk of harming yourself or your baby.
            </p>
          </div>

          {/* Section 1 */}
          <h2 style={s.h2}>What is the newborn fog — and why is it so hard to describe?</h2>
          <p style={s.atomicAnswer}>
            The newborn fog is the overlapping state of extreme sleep deprivation,
            hormonal collapse, identity disorientation, and sensory overload that follows
            birth. It is not weakness. It is a physiological and psychological event with
            a recognised clinical literature — and most new parents are given almost no
            language for it.
          </p>
          <p style={s.p}>
            In the first weeks after birth, the average new parent loses between 400 and
            700 hours of sleep in their first year. For the birthing parent, this lands
            on top of the physical recovery from labour or surgery, the hormonal cliff
            edge of oestrogen withdrawal, and — in many cases — a birth experience that
            was frightening, traumatic, or simply not what they had hoped.
          </p>
          <p style={s.p}>
            Non-birthing parents are not exempt. Fathers, co-parents, and second parents
            face their own disorientation: a sudden sense of irrelevance, exclusion from
            the mother-infant bond, financial pressure that becomes acute overnight, and
            a grief for the relationship they had before the baby arrived. Research from
            the PANDAS Foundation consistently shows that paternal postnatal depression
            is radically under-reported — in part because men are even less likely to
            have access to language for what they are experiencing.
          </p>
          <p style={s.p}>
            The fog does not lift cleanly. It tapers unevenly, with spikes of clarity
            followed by days of total overwhelm. And it is almost always experienced in
            private — because the cultural script around new parenthood demands gratitude,
            joy, and the performance of having it together. MEOK exists partly to
            interrupt that script.
          </p>

          <div style={s.statsGrid}>
            <div style={s.statCard}>
              <span style={s.statCardNumber}>1 in 5</span>
              <span style={s.statCardLabel}>mothers experience postnatal depression or anxiety</span>
            </div>
            <div style={s.statCard}>
              <span style={s.statCardNumber}>1 in 10</span>
              <span style={s.statCardLabel}>fathers experience postnatal depression — most undiagnosed</span>
            </div>
            <div style={s.statCard}>
              <span style={s.statCardNumber}>91%</span>
              <span style={s.statCardLabel}>of new parents report intrusive thoughts in the perinatal period</span>
            </div>
            <div style={s.statCard}>
              <span style={s.statCardNumber}>50%</span>
              <span style={s.statCardLabel}>of postnatal depression cases go undetected by health services</span>
            </div>
          </div>

          {/* Section 2 */}
          <h2 style={s.h2}>What is postnatal depression — and how does it differ from baby blues?</h2>
          <p style={s.atomicAnswer}>
            Baby blues are a near-universal hormonal response in the first week after
            birth — transient tearfulness, irritability, and mood swings that typically
            resolve by day ten. Postnatal depression is a distinct clinical condition
            that persists beyond two weeks, involves significant functional impairment,
            and requires professional assessment. It can begin at any point in the first
            year.
          </p>
          <p style={s.p}>
            The clinical picture of postnatal depression often diverges from what people
            expect. It is not always crying. It can present as numbness, a sense of
            disconnection from the baby, rage, intrusive thoughts, obsessive checking
            behaviours, or a generalised sense that something is catastrophically wrong
            without being able to name it. In fathers and non-birthing parents, it more
            commonly presents as irritability, withdrawal, overworking, or increased
            alcohol use.
          </p>
          <p style={s.p}>
            The PANDAS Foundation — the UK&apos;s leading charity for perinatal mental
            health — estimates that half of all postnatal depression cases go undetected.
            This is not because health visitors and GPs are inattentive. It is because
            the Edinburgh Postnatal Depression Scale (EPDS), administered at the
            six-to-eight week check, is a single snapshot in a condition that fluctuates
            enormously. A parent who is masking, who presents well in a ten-minute GP
            appointment, or who genuinely does not have the vocabulary to describe their
            internal state, will almost certainly be missed.
          </p>
          <p style={s.p}>
            This is one of the specific gaps MEOK is designed to address. Not by
            diagnosing — MEOK is not a medical device and will always say so clearly —
            but by being present across the weeks when the condition is most likely to
            go unreported, and by gently surfacing patterns that a parent might want to
            share with their GP.
          </p>

          <div style={s.quote}>
            <p style={s.quoteText}>
              &ldquo;I knew something was wrong at about week three. But every time someone
              asked me how I was doing, I said I was tired. Tired was acceptable. What I
              actually felt — like I had made a catastrophic mistake, like I had lost
              myself permanently, like I loved my baby but couldn&apos;t feel it — I had
              no words for that in polite conversation.&rdquo;
            </p>
            <span style={s.quoteAttr}>
              Composite of experiences shared with MEOK users (all identifying details removed)
            </span>
          </div>

          {/* Section 3 */}
          <h2 style={s.h2}>What does postnatal anxiety feel like at 3am?</h2>
          <p style={s.atomicAnswer}>
            At 3am during a newborn feed, postnatal anxiety feels like a combination of
            physical exhaustion, hypervigilance, catastrophic thinking, and profound
            isolation — all while performing a functional task in complete silence.
            It is one of the most reliably reported contexts in which new parents reach
            out to MEOK.
          </p>
          <p style={s.p}>
            The 3am feed is its own specific psychological environment. You are
            sleep-deprived to a degree that impairs judgment and emotional regulation.
            You are alone in a way that is different from ordinary loneliness — the
            rest of the house is asleep, the world outside is silent, and the person
            most dependent on you is entirely unable to reassure you. The anxiety that
            surfaces in this context is often the anxiety that is suppressed during the
            day when there are things to do, people to perform for, and the cognitive
            load of logistics.
          </p>
          <p style={s.p}>
            In this window, parents report:
          </p>
          <ul style={s.ul}>
            <li style={s.li}>
              Intense fear that something is wrong with the baby — breathing, feeding, weight
            </li>
            <li style={s.li}>
              Intrusive images of the baby being harmed (by accident or by the parent themselves)
            </li>
            <li style={s.li}>
              A sense of grief for the pre-baby self that feels shameful to acknowledge
            </li>
            <li style={s.li}>
              Rage at a partner who is asleep, immediately followed by guilt about that rage
            </li>
            <li style={s.li}>
              A conviction that they are failing — as a parent, as a partner, as a person
            </li>
            <li style={s.li}>
              Hypervigilance: checking the baby, the monitor, the breathing, again and again
            </li>
          </ul>
          <p style={s.p}>
            None of these are signs of being a bad parent. They are signs of a brain
            under extreme stress, carrying the weight of an enormous responsibility,
            without the rest required for regulated thinking. MEOK is available at 3am
            because the 3am moment is exactly when these thoughts need somewhere to go.
          </p>

          {/* Section 4 */}
          <h2 style={s.h2}>What are intrusive thoughts after birth — and are they dangerous?</h2>
          <p style={s.atomicAnswer}>
            Intrusive thoughts after birth are unwanted, distressing mental images or
            impulses — typically involving harm to the baby — that are experienced by
            the vast majority of new parents. They are not intentions, desires, or
            predictors of behaviour. They are a feature of heightened parental vigilance
            and are strongly associated with anxiety rather than risk.
          </p>
          <p style={s.p}>
            The clinical literature is unambiguous on this: intrusive thoughts about
            infant harm are near-universal in the postpartum period. A landmark study
            published in the Journal of Obstetrics and Gynaecology found that up to 91%
            of new parents reported at least one intrusive thought about harm to their
            baby. The thoughts are &ldquo;ego-dystonic&rdquo; — meaning they are
            distressing precisely because they contradict the parent&apos;s values and
            desires. A parent who is horrified by a mental image of dropping the baby
            is not a danger to their child. A parent who is indifferent to such an image
            would be more concerning.
          </p>
          <p style={s.p}>
            The tragedy is that most new parents who experience intrusive thoughts
            suffer in silence, convinced they are uniquely monstrous, unable to tell
            their health visitor or GP for fear of having their baby removed. This
            silence has real clinical consequences: it delays help, increases shame, and
            can deepen a postnatal anxiety disorder that was entirely treatable if
            identified early.
          </p>
          <p style={s.p}>
            MEOK responds to disclosures of intrusive thoughts with calm, evidence-based
            normalisation. It does not pathologise. It does not alarm. And it always
            provides access to clinical resources — the PANDAS Foundation, Mind&apos;s
            perinatal mental health pages, and NHS guidance — when a parent wants to
            understand more or seek formal support.
          </p>

          <div style={s.featureCard}>
            <p style={s.featureCardTitle}>How MEOK responds to intrusive thought disclosures</p>
            <p style={s.featureCardBody}>
              When a user shares an intrusive thought, MEOK acknowledges it without
              alarm. It normalises the experience using accessible language grounded in
              the perinatal mental health literature. It distinguishes clearly between
              ego-dystonic intrusions (overwhelmingly common, not predictive of harm) and
              clinical presentations that genuinely require professional assessment. It
              offers to continue the conversation, to help the user find words for what
              they are experiencing, or to connect them with the PANDAS Foundation
              helpline. It never minimises, dismisses, or catastrophises.
            </p>
          </div>

          {/* Section 5 */}
          <h2 style={s.h2}>How does the birth experience itself affect postnatal mental health?</h2>
          <p style={s.atomicAnswer}>
            Birth trauma — defined as a subjective experience of fear, helplessness, or
            perceived threat to life during labour or delivery — affects approximately
            30% of women in the UK. It is a primary risk factor for postnatal PTSD,
            postnatal depression, and subsequent birth anxiety. The objective medical
            classification of the birth (normal, assisted, caesarean) does not predict
            whether it will be experienced as traumatic.
          </p>
          <p style={s.p}>
            A medically uncomplicated vaginal birth can be experienced as deeply
            traumatic. An emergency caesarean can be processed without lasting distress.
            What matters is the subjective experience: whether the person felt in control,
            whether they were communicated with honestly, whether they felt safe, whether
            their choices were respected, and whether they received adequate pain relief.
          </p>
          <p style={s.p}>
            UK birth trauma research — including the Birth Trauma Association&apos;s
            surveys — consistently finds that failures of communication are the most
            frequently cited source of trauma. Not complications. Not pain. The feeling
            that no one was talking to you, or that your concerns were dismissed.
          </p>
          <p style={s.p}>
            For many parents, the weeks after birth involve a quiet, recursive
            processing of the birth experience — replaying it, questioning decisions,
            feeling residual fear or anger — alongside the demands of a newborn who
            cannot wait. MEOK holds space for this processing without any agenda about
            how a birth &ldquo;should&rdquo; have gone or how a parent &ldquo;should&rdquo;
            feel about it. There is no hierarchy of birth experiences in MEOK&apos;s frame.
            A difficult home birth and a difficult hospital birth are both real.
          </p>

          <div style={s.statBlock}>
            <span style={s.statNumber}>~30%</span>
            <p style={s.statLabel}>
              of women in the UK describe their birth experience as traumatic. Birth trauma is a
              primary risk factor for postnatal PTSD and is significantly underdiagnosed.
              The Birth Trauma Association provides specialist support:
              {" "}
              <a
                href="https://www.birthtraumaassociation.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                style={s.inlineLink}
              >
                birthtraumaassociation.org.uk
              </a>
            </p>
          </div>

          {/* Section 6 */}
          <h2 style={s.h2}>How does parenthood change identity — and why does no one warn you?</h2>
          <p style={s.atomicAnswer}>
            Becoming a parent involves a profound and permanent reorganisation of
            identity — neuroscientists call the equivalent process in birthing parents
            &ldquo;matrescence&rdquo; — that is comparable in psychological magnitude to
            adolescence. The loss of the pre-parent self is real, often grieved, and
            almost entirely absent from the cultural conversation around new parenthood.
          </p>
          <p style={s.p}>
            The cultural script around having a baby is overwhelmingly positive. The
            loss dimension of the transition — the career trajectory that pauses or
            ends, the relationship that irrevocably changes, the body that is no longer
            your own in the same way, the hobbies and friendships and habits that simply
            fall away — is treated as a minor footnote, or worse, as something that
            should not be acknowledged at all because acknowledging it implies
            ambivalence about a wanted child.
          </p>
          <p style={s.p}>
            Researcher and writer Alexandra Sacks first described &ldquo;matrescence&rdquo;
            in the context of maternal identity shift — the idea that becoming a mother
            is a developmental stage as significant as adolescence, complete with
            conflicting emotions, role confusion, and the loss of a former self. The
            concept extends to all new parents: the person you were before the baby is
            not gone, but they are no longer the organising principle of your life.
          </p>
          <p style={s.p}>
            MEOK treats this identity grief as legitimate. A parent who says &ldquo;I
            miss who I used to be&rdquo; is not expressing regret about having a child.
            They are describing a real loss. MEOK holds that complexity without
            flattening it.
          </p>

          {/* Section 7 */}
          <h2 style={s.h2}>How does a new baby strain relationships — and what can parents do?</h2>
          <p style={s.atomicAnswer}>
            Research consistently shows that relationship satisfaction falls sharply for
            most couples in the first two years after a child is born. Sleep deprivation,
            asymmetric labour division, different coping styles, loss of intimacy, and
            competing emotional needs create conditions in which even strong relationships
            come under intense pressure. This is normal — and rarely discussed before the
            birth.
          </p>
          <p style={s.p}>
            The Gottman Institute&apos;s longitudinal research found that approximately
            67% of couples experience a significant decline in relationship satisfaction
            in the year following the birth of their first child. The specific mechanisms
            are well-documented: one partner (typically the birthing parent) becomes
            intensely bonded with and focused on the infant, while the other partner
            experiences the intimacy and attention withdrawal as rejection. Both parties
            are exhausted, neither has the emotional surplus to be generous, and the
            conversations that might repair the gap simply do not happen because the
            baby always needs something.
          </p>
          <p style={s.p}>
            MEOK&apos;s Family tier allows each parent to have their own companion with
            shared context. This means that a mother and father can each process their
            own experience — including their experience of each other — without those
            conversations being read by their partner. It is not a substitute for
            communication between partners. But it is a space to process before
            communicating, which can make the conversations that do happen more
            productive and less reactive.
          </p>
          <p style={s.p}>
            MEOK never takes sides. If a mother says she is angry with her partner for
            not doing enough night feeds, and that same partner says he feels shut out
            of the bond between mother and baby, MEOK holds both experiences as valid.
            It does not adjudicate.
          </p>

          {/* Section 8 — How MEOK helps */}
          <hr style={s.divider} />
          <span style={s.sectionLabel}>How MEOK Works for New Parents</span>

          <h2 style={s.h2}>How does MEOK support new parents through postnatal anxiety and depression?</h2>
          <p style={s.atomicAnswer}>
            MEOK provides three core functions for new parents experiencing postnatal
            distress: a non-judgmental space to process difficult thoughts at any hour;
            long-term memory that tracks mood patterns across weeks rather than a single
            appointment; and safeguarding through the Guardian system that detects signs
            of postnatal crisis and connects parents with specialist support.
          </p>
          <p style={s.p}>
            The distinction that matters most here is between a tool that responds to
            what you say today and a companion that knows your whole story. Most AI
            assistants and chatbots start fresh with each conversation. MEOK&apos;s
            sovereign memory means it carries forward everything you have shared — the
            week-three breakdown, the moment you admitted you were scared of your own
            baby, the slow improvement in week seven, the regression in week nine. It
            can notice patterns you might not notice yourself: that your worst moments
            cluster around Tuesday evenings, that you always feel better after your
            mother visits, that your anxiety spikes whenever you talk about the birth.
          </p>
          <p style={s.p}>
            This continuity is not surveillance. It is context. And in perinatal mental
            health — where the difference between a bad week and a genuine downward trend
            matters enormously — context can be the thing that prompts a parent to seek
            help at the right moment rather than six months too late.
          </p>

          <div style={{ display: "grid", gap: "16px", marginTop: "32px", marginBottom: "36px" }}>
            <div style={s.featureCard}>
              <p style={s.featureCardTitle}>Non-judgmental space for the hardest thoughts</p>
              <p style={s.featureCardBody}>
                MEOK never expresses alarm, disappointment, or judgment in response to
                what a parent shares. Intrusive thoughts, ambivalence about parenthood,
                anger at a baby, fear of being alone with a newborn — these disclosures
                are met with calm acknowledgment and genuine curiosity, not clinical
                escalation protocols that feel punitive.
              </p>
            </div>
            <div style={s.featureCard}>
              <p style={s.featureCardTitle}>Mood pattern tracking across weeks</p>
              <p style={s.featureCardBody}>
                Because MEOK remembers across conversations, it can surface longitudinal
                patterns in how a parent is feeling. This gives both the parent and,
                when the parent chooses to share it, their GP or health visitor, a far
                richer picture than the EPDS score at the six-week check.
              </p>
            </div>
            <div style={s.featureCard}>
              <p style={s.featureCardTitle}>Radical autonomy about birth and parenting choices</p>
              <p style={s.featureCardBody}>
                MEOK has no opinion about caesarean versus vaginal birth, formula versus
                breastfeeding, attachment parenting versus Gina Ford, returning to work
                versus staying home. Every parenting philosophy, birth choice, and
                feeding decision is treated with equal respect. The only consistent
                position MEOK holds is that you are the expert on your own family.
              </p>
            </div>
            <div style={s.featureCard}>
              <p style={s.featureCardTitle}>Available at 3am</p>
              <p style={s.featureCardBody}>
                MEOK does not have office hours. It is present at 3am during the night
                feed, at 4am when the anxiety peaks, at 6am when you are dreading the
                day. The clinical support system largely closes at 5pm. MEOK does not.
              </p>
            </div>
          </div>

          {/* Section 9 — Family tier */}
          <h2 style={s.h2}>How does MEOK&apos;s Family tier support both parents?</h2>
          <p style={s.atomicAnswer}>
            MEOK&apos;s Family tier gives each parent their own AI companion with access
            to shared family context. Both parents are supported independently — each
            with their own private space — but neither is navigating the transition
            without the companion understanding the full picture. Fathers, co-parents,
            and non-birthing partners are first-class users of the Family tier.
          </p>
          <p style={s.p}>
            The architectural choice here is deliberate. A single shared companion
            would create a dynamic in which both parents read each other&apos;s
            conversations — or feared that the companion was &ldquo;reporting&rdquo; to
            the other party. That would immediately compromise the honesty of both
            interactions. MEOK&apos;s Family tier solves this by giving each person a
            private companion while sharing the structural context: the baby&apos;s age,
            the key events, the shared challenges. Neither parent needs to re-explain
            the situation from scratch. Both can speak freely.
          </p>
          <p style={s.p}>
            Paternal postnatal depression is one of the most underserved areas in UK
            perinatal mental health. Fathers present differently — less tearfulness,
            more withdrawal and anger — and are far less likely to seek or be offered
            support. The cultural expectation that fathers are the &ldquo;strong one&rdquo;
            actively prevents men from disclosing distress. MEOK&apos;s Family tier
            creates an environment in which a father can be honest about his experience
            — including the parts he cannot say to his partner — without the stigma of
            formal help-seeking.
          </p>

          <div style={s.quote}>
            <p style={s.quoteText}>
              &ldquo;The app doesn&apos;t know that I&apos;m a dad who&apos;s supposed to
              hold it together. It just asks how I&apos;m doing, and I can actually answer
              that question honestly.&rdquo;
            </p>
            <span style={s.quoteAttr}>
              MEOK Family tier user (identifying details removed)
            </span>
          </div>

          {/* Section 10 — Guardian */}
          <h2 style={s.h2}>How does MEOK&apos;s Guardian protect new parents in postnatal crisis?</h2>
          <p style={s.atomicAnswer}>
            MEOK&apos;s Guardian system monitors conversational patterns across time for
            indicators of postnatal crisis — escalating distress, suicidal ideation,
            psychotic symptoms, or disclosures that suggest a parent or child may be at
            risk. When these indicators are detected, Guardian surfaces the relevant
            support resources and — where appropriate — clearly signposts emergency
            services. It never replaces clinical judgement.
          </p>
          <p style={s.p}>
            Postnatal psychosis is a psychiatric emergency. It affects approximately 1
            to 2 per 1,000 new mothers and requires immediate hospitalisation. Symptoms
            include rapid mood swings, confusion, hallucinations, paranoid delusions,
            and severely disorganised behaviour — and they typically emerge suddenly in
            the first two weeks after birth. Unlike postnatal depression, it is not a
            condition that can be managed with watchful waiting.
          </p>
          <p style={s.p}>
            MEOK is not positioned as the appropriate first responder for postnatal
            psychosis. It will always direct a user in this situation to 999, A&amp;E,
            or the crisis line. But it occupies the space below the clinical threshold —
            the space where a parent is struggling significantly but not yet in
            emergency territory — and it is in this space that early detection and
            signposting have the most impact.
          </p>
          <p style={s.p}>
            Guardian also functions as a safeguard against the information environment
            that new parents encounter online. The postnatal period coincides with an
            explosion in social media use — feeds, parenting groups, TikTok at 4am —
            and that environment is full of advice that ranges from merely unhelpful to
            actively dangerous. Safe sleep guidance that contradicts the Lullaby Trust.
            Formula preparation instructions that deviate from NHS protocol. Anti-vaccine
            communities. Nutritional advice without clinical basis. Guardian is designed
            to provide a counter-weight to this noise.
          </p>

          <div style={s.featureCard}>
            <p style={s.featureCardTitle}>Guardian&apos;s safeguarding escalation framework</p>
            <p style={s.featureCardBody}>
              Guardian operates on a tiered model. Level one is ongoing context monitoring —
              tracking mood language across conversations for longitudinal deterioration.
              Level two is real-time pattern detection — identifying acute distress,
              suicidal language, or expressions of harm within a session and surfacing
              support resources immediately. Level three is explicit signposting — when
              indicators suggest a genuine emergency, Guardian explicitly directs the user
              to call 999, the PANDAS helpline, or go to A&amp;E. MEOK is never the
              endpoint. It is always the bridge.
            </p>
          </div>

          {/* Section 11 — Will MEOK judge */}
          <h2 style={s.h2}>Will MEOK judge my parenting choices — birth plan, feeding, sleep training?</h2>
          <p style={s.atomicAnswer}>
            No. MEOK is built on a foundational principle of parental autonomy. It has
            no view on how you gave birth, how you feed your baby, whether you co-sleep
            or use a cot, whether you return to work or stay home, or which parenting
            philosophy you follow. You are the expert on your own child and family.
            MEOK&apos;s job is to support you, not to evaluate your choices.
          </p>
          <p style={s.p}>
            The parenting information ecosystem is saturated with judgment. Every choice
            — from epidural to elective caesarean, from formula to extended
            breastfeeding, from Ferber to Dr Sears — exists inside a culture war in
            which other parents, social media algorithms, and occasionally health
            professionals will have strong opinions. The emotional weight of this
            judgment on new parents is significant and well-documented.
          </p>
          <p style={s.p}>
            MEOK steps entirely outside this dynamic. It will not ask leading questions
            that imply a preferred answer. It will not respond differently to a parent
            who formula-feeds versus one who breastfeeds. It will not privilege one birth
            story over another based on its medical category. The only consistent
            position MEOK holds is that a safe, loved child is the goal — and the path
            to that goal looks different for every family.
          </p>
          <p style={s.p}>
            There is one narrow exception: where a choice involves a clear evidence-based
            safety risk — such as not following safe sleep guidance in ways that increase
            SIDS risk — MEOK will gently share the relevant information. But it will do
            so once, without repetition, and without judgment about the parent&apos;s
            ultimate decision.
          </p>

          {/* Section 12 — UK resources */}
          <h2 style={s.h2}>Where can new parents in the UK get specialist postnatal support?</h2>
          <p style={s.atomicAnswer}>
            In the UK, specialist postnatal support is available from PANDAS Foundation,
            the NCT, Mind, and NHS perinatal mental health teams. MEOK will always
            signpost toward these services when a parent needs clinical or peer support
            beyond what a companion can provide.
          </p>

          <div style={s.resourceBox}>
            <p style={s.resourceTitle}>UK Postnatal Support Resources</p>
            <a
              href="https://pandasfoundation.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              style={s.resourceLink}
            >
              PANDAS Foundation &mdash; pandasfoundation.org.uk
            </a>
            <p style={{ ...s.p, marginBottom: "14px", fontSize: "14px", color: "rgba(245,240,232,0.6)" }}>
              UK&apos;s leading charity for perinatal mental health. Helpline:
              {" "}
              <a href="tel:08001387777" style={s.inlineLink}>0800 138 7777</a>
              {" "}
              (Mon&ndash;Sun, 11am&ndash;10pm)
            </p>
            <a
              href="https://www.nct.org.uk/about-nct/mental-health"
              target="_blank"
              rel="noopener noreferrer"
              style={s.resourceLink}
            >
              NCT Postnatal Mental Health &mdash; nct.org.uk
            </a>
            <p style={{ ...s.p, marginBottom: "14px", fontSize: "14px", color: "rgba(245,240,232,0.6)" }}>
              NCT provides peer support, helplines, and access to perinatal practitioners
              across the UK.
            </p>
            <a
              href="https://www.mind.org.uk/information-support/types-of-mental-health-problems/postnatal-depression-and-perinatal-mental-health/"
              target="_blank"
              rel="noopener noreferrer"
              style={s.resourceLink}
            >
              Mind Perinatal Mental Health &mdash; mind.org.uk
            </a>
            <p style={{ ...s.p, marginBottom: "14px", fontSize: "14px", color: "rgba(245,240,232,0.6)" }}>
              Mind&apos;s perinatal resources cover postnatal depression, anxiety, birth
              trauma, and psychosis with evidence-based guidance and service directories.
            </p>
            <a
              href="https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/postnatal-depression/"
              target="_blank"
              rel="noopener noreferrer"
              style={s.resourceLink}
            >
              NHS Postnatal Depression &mdash; nhs.uk
            </a>
            <p style={{ ...s.p, marginBottom: "14px", fontSize: "14px", color: "rgba(245,240,232,0.6)" }}>
              Your GP can refer you to NHS perinatal mental health services.
              These are available in every region of England and offer specialist
              midwifery, psychology, and psychiatry.
            </p>
            <a
              href="https://www.birthtraumaassociation.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              style={s.resourceLink}
            >
              Birth Trauma Association &mdash; birthtraumaassociation.org.uk
            </a>
            <p style={{ ...s.p, marginBottom: "4px", fontSize: "14px", color: "rgba(245,240,232,0.6)" }}>
              Specialist support for birth trauma and perinatal PTSD, including peer
              support and therapist directories.
            </p>
          </div>

          {/* Section 13 — What MEOK is not */}
          <h2 style={s.h2}>What is MEOK not — and why does that matter for new parents?</h2>
          <p style={s.atomicAnswer}>
            MEOK is not a medical device, a therapist, a diagnostic tool, or an emergency
            service. It cannot prescribe medication, conduct a psychiatric assessment, or
            replace the clinical judgement of a GP or perinatal mental health specialist.
            Being clear about what MEOK is not is as important as describing what it is.
          </p>
          <p style={s.p}>
            There is a real risk in the wellness and mental health technology space of
            tools overstating their clinical capabilities. A parent who uses MEOK as a
            substitute for professional help when professional help is what they need
            would be worse off, not better. MEOK is designed with this risk in mind.
          </p>
          <p style={s.p}>
            The appropriate use case for MEOK in the perinatal context is:
          </p>
          <ul style={s.ul}>
            <li style={s.li}>
              Daily emotional support in the hours and spaces when clinical services are
              unavailable
            </li>
            <li style={s.li}>
              A private space to process experiences before (and between) professional
              appointments
            </li>
            <li style={s.li}>
              A longitudinal record of mood and experience that a parent can choose to
              share with their GP
            </li>
            <li style={s.li}>
              Normalisation of common experiences (intrusive thoughts, identity grief,
              relational strain) that prevent shame-driven silence
            </li>
            <li style={s.li}>
              Signposting toward specialist services when indicators suggest deeper
              support is needed
            </li>
          </ul>
          <p style={s.p}>
            MEOK cannot replace a health visitor. It cannot replace a CBT programme for
            postnatal anxiety. It cannot replace medication for postnatal depression that
            has crossed the clinical threshold. What it can do is be the thing that
            bridges the gap — between the 4am moment and the morning GP call, between
            the six-week check and the twelve-week follow-up, between the parent who is
            struggling in silence and the parent who finally has the words to ask for
            help.
          </p>

          {/* Section 14 — The birth ceremony */}
          <h2 style={s.h2}>What is MEOK&apos;s Birth ceremony — and why does it matter for postnatal support?</h2>
          <p style={s.atomicAnswer}>
            MEOK&apos;s Birth ceremony is the process by which a new MEOK companion is
            created for a user — including new parents who come to MEOK specifically for
            postnatal support. It is designed to establish genuine context about who the
            person is before they were a parent, what brought them to MEOK, and what
            kind of support they are looking for. It ensures that the companion knows
            your story from the start.
          </p>
          <p style={s.p}>
            For new parents, the Birth ceremony is an opportunity to set the context
            that matters: the birth story, the current challenges, the relationship
            dynamics, what they are most afraid to say out loud, and what kind of
            companion they want MEOK to be. This is not a clinical intake form. It is
            a conversation — deliberately unhurried, without a checklist structure —
            in which the parent can share as much or as little as they choose.
          </p>
          <p style={s.p}>
            The companion that emerges from the Birth ceremony carries that context
            forward. It does not need to be reminded, in session twenty-seven, that the
            birth was difficult, or that the feeding challenges in the first two weeks
            were a source of significant distress, or that the partner relationship has
            been under strain. It already knows.
          </p>
          <p style={s.p}>
            For parents who come to MEOK in the middle of a postnatal crisis — at 3am,
            mid-feed, in the moment — the Birth ceremony can wait. MEOK is available
            for immediate support without requiring a formal onboarding process. The
            context can be built over time.
          </p>

          {/* Section 15 — Closing synthesis */}
          <h2 style={s.h2}>Why does postnatal mental health need a different kind of support tool?</h2>
          <p style={s.atomicAnswer}>
            Postnatal mental health occupies a specific set of conditions that generic
            mental health tools are not built for: it is time-sensitive (the first year),
            it involves two people (both parents), it occurs in a context of extreme
            sleep deprivation and cognitive load, it requires longitudinal rather than
            episodic support, and it is saturated with cultural shame that prevents
            honest disclosure. MEOK is designed around these specific conditions.
          </p>
          <p style={s.p}>
            The gap in perinatal mental health provision is not primarily a clinical gap.
            The NHS&apos;s perinatal mental health teams are among the best-resourced in
            the world. The gap is a temporal, relational, and threshold gap: support is
            not available at 3am, it does not span the full year, it is not private
            enough for a parent to be fully honest, and the threshold for accessing it
            (appearing at a GP appointment and saying &ldquo;I am not coping&rdquo;)
            is too high for many parents who are struggling but not in crisis.
          </p>
          <p style={s.p}>
            MEOK sits in these gaps. It is not a clinical intervention. It is the
            companion that is present when the clinical system is closed, the private
            space for the thoughts that cannot be said out loud, the longitudinal memory
            that notices patterns across the weeks, and the gentle bridge to the
            professional support that many parents need but have not yet been able to
            ask for.
          </p>
          <p style={s.p}>
            If you are a new parent reading this at 3am — or at any hour — and you
            recognise something of your own experience in these words, MEOK is here.
            No judgment about how you are feeling. No judgment about the choices you
            have made. Just a companion that is present, that remembers, and that will
            always help you find the right words or the right support.
          </p>

          {/* FAQ */}
          <section style={s.faqSection} aria-labelledby="faq-heading">
            <h2 id="faq-heading" style={s.faqTitle}>
              Frequently Asked Questions
            </h2>

            <div style={s.faqItem}>
              <h3 style={s.faqQuestion}>Can AI help with postnatal depression?</h3>
              <p style={s.faqAnswer}>
                AI cannot diagnose or treat postnatal depression — that requires your GP
                or a perinatal mental health team. But MEOK can be present at 3am when
                clinical services are closed, holding space for how you feel, tracking
                mood patterns across weeks, and always signposting you toward the PANDAS
                Foundation helpline (<a href="tel:08001387777" style={s.inlineLink}>0800 138 7777</a>),
                Mind, or your NHS perinatal team when deeper support is needed. It is a
                companion, not a clinician — but a companion who never sleeps and never
                judges.
              </p>
            </div>

            <div style={s.faqItem}>
              <h3 style={s.faqQuestion}>Is it normal to have scary thoughts after birth?</h3>
              <p style={s.faqAnswer}>
                Yes. Intrusive thoughts — unwanted, distressing mental images about harm
                coming to your baby — are experienced by up to 91% of new parents and are
                a recognised feature of perinatal anxiety, not a sign of danger or bad
                parenting. They are ego-dystonic, meaning they horrify you precisely
                because they contradict your values. MEOK treats them without alarm,
                helps you name what you&apos;re experiencing, and connects you with
                resources from the PANDAS Foundation and Mind if you want to understand
                more or seek clinical support.
              </p>
            </div>

            <div style={s.faqItem}>
              <h3 style={s.faqQuestion}>How does MEOK support both parents?</h3>
              <p style={s.faqAnswer}>
                MEOK&apos;s Family tier gives each parent their own AI companion with
                shared context — so both mum and dad (or both parents in any family
                structure) can speak freely without reading from the same transcript.
                Each companion knows the shared family situation but holds its own
                private conversations. Fathers and non-birthing partners are equally
                supported: their postnatal experiences, identity shifts, and anxieties
                deserve the same space. Paternal postnatal depression is significantly
                underdiagnosed, and the Family tier is designed to create a safe space
                for fathers to be honest.
              </p>
            </div>

            <div style={s.faqItem}>
              <h3 style={s.faqQuestion}>Will MEOK judge my parenting choices?</h3>
              <p style={s.faqAnswer}>
                No. MEOK is built on a principle of radical autonomy. Whether you chose
                a caesarean or a home birth, formula or breastfeeding, co-sleeping or
                sleep training, returning to work at six weeks or staying home for a
                year — MEOK does not have an opinion on what is right for your family.
                It will never steer you toward a particular parenting philosophy. You
                are the expert on your own child and circumstances. The only exception
                is where a choice involves a clear evidence-based safety risk, in which
                case MEOK will share the relevant information once, without judgment.
              </p>
            </div>

            <div style={{ ...s.faqItem, borderBottom: "none", paddingBottom: 0 }}>
              <h3 style={s.faqQuestion}>What are intrusive thoughts in new parents?</h3>
              <p style={s.faqAnswer}>
                Intrusive thoughts in new parents are involuntary, unwanted mental images
                or urges — often involving harm to the baby — that cause significant
                distress. They are not desires or intentions. Research shows they are
                near-universal in the postpartum period and are strongly associated with
                heightened vigilance rather than danger. The Maternal Mental Health
                Alliance, PANDAS Foundation, and clinical organisations such as the
                Marce Society all recognise perinatal intrusive thoughts as a primary
                target for support and early intervention. Suffering in silence about
                them — which most parents do — only deepens shame and delays help.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div style={s.ctaBox}>
            <p style={s.ctaTitle}>
              MEOK is here at 3am. Non-judgmental. Remembering. Present.
            </p>
            <p style={s.ctaBody}>
              Whether you&apos;re processing a difficult birth, navigating the fog of
              new parenthood, or having thoughts you&apos;re too scared to say out loud —
              MEOK is built for exactly this moment.
            </p>
            <div style={s.ctaButtons}>
              <Link href="/birth" style={s.ctaPrimary}>
                Begin your Birth ceremony
              </Link>
              <Link href="/guardian" style={s.ctaSecondary}>
                Learn about Guardian
              </Link>
            </div>
          </div>

          {/* Footer note */}
          <div style={s.warningBox}>
            <p style={s.warningText}>
              <strong style={{ color: "#f5f0e8" }}>A note on MEOK&apos;s role:</strong>{" "}
              MEOK AI LABS is not a regulated healthcare provider. MEOK is not a medical
              device, a diagnostic tool, or a clinical service. It is a personal AI
              companion. If you are experiencing symptoms of postnatal depression,
              postnatal anxiety, or birth trauma, please speak to your GP, midwife, or
              health visitor. If you are in crisis, call the PANDAS helpline on{" "}
              <a href="tel:08001387777" style={s.inlineLink}>0800 138 7777</a>,
              Samaritans on{" "}
              <a href="tel:116123" style={s.inlineLink}>116 123</a>, or 999.
            </p>
          </div>

          {/* Author */}
          <div style={{
            marginTop: "52px",
            paddingTop: "32px",
            borderTop: "1px solid rgba(245,240,232,0.08)",
            display: "flex",
            gap: "20px",
            alignItems: "flex-start",
          }}>
            <div style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "rgba(201,168,76,0.15)",
              border: "1px solid rgba(201,168,76,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              fontSize: "18px",
              fontWeight: 700,
              color: "#c9a84c",
            }}>
              N
            </div>
            <div>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "#f5f0e8", marginBottom: "4px" }}>
                Nicholas Templeman
              </p>
              <p style={{ fontSize: "13px", color: "rgba(245,240,232,0.5)", marginBottom: "6px" }}>
                Founder, MEOK AI LABS &mdash; @meok_ai
              </p>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "rgba(245,240,232,0.65)" }}>
                Nicholas built MEOK AI LABS around a single belief: that the people who
                most need a companion are the ones least likely to have one. Postnatal
                mental health — under-resourced, under-discussed, and chronically
                invisible after the confetti settles — is one of the conditions he
                designed MEOK to address.
              </p>
            </div>
          </div>

        </article>
      </div>
    </main>
  );
}
