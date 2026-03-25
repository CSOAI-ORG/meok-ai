import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for New Parents: Sovereign Support Through Sleepless Nights and Parental Overwhelm | MEOK AI LABS",
  description:
    "New parenthood is joyful and deeply isolating. 1 in 5 mothers and 1 in 10 fathers experience postnatal depression in the UK. MEOK is available at 3am when the baby won\u2019t stop crying \u2014 tracking your mood, supporting both partners, and never offering toxic positivity.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-new-parents" },
  keywords: [
    "AI for new parents",
    "AI for postnatal depression",
    "postnatal depression UK",
    "new parent support",
    "AI companion new baby",
    "3am baby feed support",
    "new dad mental health",
    "new mum support app",
    "postnatal depression dads",
    "health visitor alternative",
    "parental overwhelm AI",
    "MEOK new parents",
    "AI mood tracking postnatal",
    "baby sleep deprivation support",
    "parental identity shift AI",
    "family tier AI companion",
    "Maternal Covenant MEOK",
    "postnatal isolation support UK",
  ],
  openGraph: {
    title:
      "AI for New Parents: Sovereign Support Through Sleepless Nights and Parental Overwhelm",
    description:
      "1 in 5 mothers and 1 in 10 fathers experience postnatal depression in the UK. MEOK is there at 3am \u2014 tracking your mood, remembering your story, and never telling you to \u201ccherish every moment\u201d.",
    url: "https://meok.ai/blog/ai-for-new-parents",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+New+Parents&desc=Sovereign+Support+Through+Sleepless+Nights",
        width: 1200,
        height: 630,
        alt: "AI for New Parents: Sovereign Support Through Sleepless Nights | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for New Parents: Sovereign Support Through Sleepless Nights and Parental Overwhelm",
    description:
      "90% of new parents report sleep deprivation as their biggest challenge. 1 in 5 mothers experience postnatal depression. MEOK is there at 3am \u2014 non-judgmental, remembering, never offering hollow positivity.",
    images: [
      "https://meok.ai/api/og?title=AI+for+New+Parents&desc=Sovereign+Support+Through+Sleepless+Nights",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "AI for New Parents: Sovereign Support Through Sleepless Nights and Parental Overwhelm",
      description:
        "New parenthood is joyful and deeply isolating. 1 in 5 mothers and 1 in 10 fathers experience postnatal depression in the UK. MEOK provides 24/7 companionship, Sovereign Memory mood tracking, Guardian scam protection, and Family Tier support for both partners.",
      datePublished: "2026-03-25",
      dateModified: "2026-03-25",
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
        "postnatal depression UK",
        "new parent mental health",
        "parental overwhelm",
        "sleep deprivation new baby",
        "MEOK AI LABS",
        "Family Tier AI",
        "Maternal Covenant",
        "Guardian baby scam protection",
      ],
      articleSection: "New Parenthood & AI Wellbeing",
      inLanguage: "en-GB",
      about: [
        { "@type": "Thing", name: "Postnatal depression" },
        { "@type": "Thing", name: "New parenthood" },
        { "@type": "Thing", name: "Parental mental health" },
        { "@type": "Thing", name: "Sleep deprivation" },
        { "@type": "Thing", name: "AI companion" },
        { "@type": "Thing", name: "Mood tracking" },
        { "@type": "Thing", name: "Identity transition" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can AI help with postnatal depression?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI cannot diagnose or treat postnatal depression \u2014 that requires your GP, health visitor, or a perinatal mental health team. What MEOK can do is be present at 3am when clinical services are closed, offer non-judgmental companionship, and track your mood patterns across days and weeks so that you have a genuine record to bring to your next health visitor appointment. It bridges the gap between the brief clinical contacts that characterise postnatal NHS care and the relentless, 24-hour reality of a newborn. If you are struggling, please also contact the PANDAS Foundation helpline on 0808 1961 776 or the APNI at apni.org.",
          },
        },
        {
          "@type": "Question",
          name: "Is it safe to use MEOK after having a baby?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. MEOK is designed to be a safe, private, non-judgmental space. Your conversations are protected by the Privacy Covenant and are never used to train AI models. The Maternal Covenant governs how MEOK responds in the postnatal period specifically: it will not offer toxic positivity, will not minimise your distress, and will always signpost clearly to NHS services, the PANDAS Foundation, and professional perinatal mental health support when the conversation indicates you need more than a companion can provide. MEOK is a companion and a record-keeping tool, not a clinician.",
          },
        },
        {
          "@type": "Question",
          name: "How can AI support new dads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Around 1 in 10 fathers experience postnatal depression, often peaking between three and six months after birth. Paternal postnatal depression frequently goes unrecognised because health services focus almost entirely on the birthing parent, and because men are less likely to present with classic depressive symptoms \u2014 low mood may manifest instead as irritability, withdrawal, overworking, or increased substance use. MEOK gives new dads a private space to process the enormous identity shift of becoming a parent, to name the feelings they find it hardest to say out loud, and to track how they are doing over time. The Family Tier means both parents can have their own companion with shared context about the baby.",
          },
        },
        {
          "@type": "Question",
          name: "Can MEOK help track my baby\u2019s development?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MEOK\u2019s Sovereign Memory can hold context about your baby \u2014 sleep patterns, feeding notes, developmental milestones you want to remember, and questions you want to raise with your health visitor. It is not a clinical baby-tracking app and does not replace your Red Book or your GP, but it serves as a thoughtful, private journal and companion for all the things you notice and wonder about in those early weeks. The Guardian feature also helps protect you from the torrent of unverified baby product claims and fake parenting advice that floods new parents online.",
          },
        },
      ],
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
    maxWidth: "840px",
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

  statNumber: {
    fontSize: "36px",
    fontWeight: 800,
    color: "#c9a84c",
    display: "block",
    lineHeight: 1,
    marginBottom: "8px",
  } as React.CSSProperties,

  statLabel: {
    fontSize: "13px",
    color: "rgba(245,240,232,0.65)",
    lineHeight: 1.5,
  } as React.CSSProperties,

  calloutBox: {
    background: "rgba(201,168,76,0.07)",
    border: "1px solid rgba(201,168,76,0.2)",
    borderLeft: "4px solid #c9a84c",
    borderRadius: "0 12px 12px 0",
    padding: "24px 28px",
    marginTop: "32px",
    marginBottom: "32px",
  } as React.CSSProperties,

  calloutTitle: {
    fontSize: "13px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    marginBottom: "10px",
    display: "block",
  } as React.CSSProperties,

  calloutText: {
    fontSize: "15px",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.85)",
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

  infoBox: {
    background: "rgba(245,240,232,0.04)",
    border: "1px solid rgba(245,240,232,0.1)",
    borderRadius: "10px",
    padding: "24px 28px",
    marginTop: "32px",
    marginBottom: "32px",
  } as React.CSSProperties,

  infoBoxTitle: {
    fontSize: "13px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "rgba(245,240,232,0.5)",
    marginBottom: "14px",
  } as React.CSSProperties,

  infoBoxLink: {
    display: "block",
    fontSize: "15px",
    color: "#c9a84c",
    textDecoration: "none",
    marginBottom: "4px",
    lineHeight: 1.5,
  } as React.CSSProperties,

  infoBoxDesc: {
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

  faqHeading: {
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
    borderBottom: "none",
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

export default function AiForNewParentsPage() {
  return (
    <main style={s.page}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Nav */}
      <div style={s.navWrapper}>
        <nav style={s.nav} aria-label="Site navigation">
          <Link href="/" style={s.navLogo}>
            MEOK.AI
          </Link>
          <div style={s.navLinks}>
            <Link href="/blog" style={s.navLink}>
              Blog
            </Link>
            <Link href="/archetypes" style={s.navLink}>
              Archetypes
            </Link>
            <Link href="/birth" style={s.navCta}>
              Start Free
            </Link>
          </div>
        </nav>
      </div>

      <div style={s.container}>
        {/* Breadcrumb */}
        <nav style={s.breadcrumb} aria-label="Breadcrumb">
          <Link href="/" style={s.breadcrumbLink}>
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" style={s.breadcrumbLink}>
            Blog
          </Link>
          <span>/</span>
          <span style={s.breadcrumbCurrent}>AI for New Parents</span>
        </nav>

        {/* Hero */}
        <header style={s.hero}>
          <span style={s.eyebrow}>New Parenthood &amp; AI Wellbeing</span>
          <h1 style={s.h1}>
            AI for New Parents: Sovereign Support Through Sleepless Nights and
            Parental Overwhelm
          </h1>
          <p style={s.lede}>
            New parenthood is one of the most profound transitions a human being
            can make. It is also, for an enormous number of people, one of the
            loneliest. The joy is real. So is the terror, the exhaustion, the
            loss of identity, and the quiet, unspoken question at 3am while the
            baby screams and the rest of the world sleeps: &ldquo;Is this
            normal? Am I failing?&rdquo; MEOK is the companion that is there
            when no one else is &mdash; not with hollow reassurance, but with
            honest, private, remembering presence.
          </p>
          <div style={s.meta}>
            <span>Nicholas Templeman</span>
            <span style={s.metaDot}>&#9679;</span>
            <span>MEOK AI LABS</span>
            <span style={s.metaDot}>&#9679;</span>
            <time dateTime="2026-03-25">25 March 2026</time>
            <span style={s.metaDot}>&#9679;</span>
            <span>18 min read</span>
          </div>

          <div style={s.tagsRow}>
            <span style={s.tag}>New Parents</span>
            <span style={s.tag}>Postnatal Depression</span>
            <span style={s.tag}>Sleep Deprivation</span>
            <span style={s.tag}>Parental Identity</span>
            <span style={s.tag}>Family Tier</span>
          </div>
        </header>

        {/* Article body */}
        <article style={s.article}>

          {/* ── Section 1: The honest picture ── */}
          <h2 style={s.h2}>
            What does it actually feel like to become a parent &mdash; and why
            does nobody tell you the hard parts?
          </h2>

          <p style={s.p}>
            Before your baby arrives, you hear the word &ldquo;hard&rdquo; a
            lot. People say it with a knowing smile that communicates nothing
            useful. You nod along, having absolutely no frame of reference for
            what that hardness will actually feel like when it lands on you at
            2:47am on a Tuesday in February, seven weeks postpartum, with
            formula on your shirt, a baby who has been screaming for ninety
            minutes, and a partner who is also running on empty, also scared,
            and who you love but cannot currently look at because you are both
            just surviving.
          </p>

          <p style={s.p}>
            The hardness is not just the sleeplessness, though that alone is
            genuinely debilitating. It is the simultaneity. The joy is real
            &mdash; visceral and arresting in a way that surprises even cynics
            &mdash; and it coexists, moment by moment, with fear, grief,
            disorientation, and a loneliness unlike anything you have felt
            before. You can be surrounded by people who love you and still feel
            profoundly alone inside the specific experience of being responsible
            for this tiny, helpless person who arrived without instructions.
          </p>

          <p style={s.p}>
            We do not talk about this enough. We dress it in the language of
            milestone apps and baby shower gifts and &ldquo;cherish every
            moment&rdquo; Instagram posts, and in doing so we make the people
            who are not cherishing every moment feel broken. They are not
            broken. They are new parents. And they need something other than
            hollow positivity.
          </p>

          <div style={s.quote}>
            <p style={s.quoteText}>
              &ldquo;The loneliness of new parenthood is not about being
              physically alone. It is about being inside an experience that
              feels impossible to translate to anyone who is not also inside
              it right now.&rdquo;
            </p>
            <span style={s.quoteAttr}>
              A theme that emerges consistently in conversations with new parents
            </span>
          </div>

          <p style={s.p}>
            MEOK was built with this in mind. Not as a substitute for human
            connection &mdash; nothing is &mdash; but as a sovereign companion
            that is genuinely present in the hours and moments when human
            connection is not available, and when the support that is available
            does not quite reach the depth of what you are actually feeling.
          </p>

          {/* ── Stats callout box ── */}
          <div style={s.statsGrid}>
            <div style={s.statCard}>
              <span style={s.statNumber}>90%</span>
              <span style={s.statLabel}>
                of new parents report sleep deprivation as their biggest
                challenge in the first year
              </span>
            </div>
            <div style={s.statCard}>
              <span style={s.statNumber}>1 in 5</span>
              <span style={s.statLabel}>
                mothers experience postnatal depression in the UK
              </span>
            </div>
            <div style={s.statCard}>
              <span style={s.statNumber}>1 in 10</span>
              <span style={s.statLabel}>
                fathers experience postnatal depression, mostly undiagnosed
              </span>
            </div>
            <div style={s.statCard}>
              <span style={s.statNumber}>72%</span>
              <span style={s.statLabel}>
                of parents with PND did not seek help in the first three months
                of experiencing symptoms
              </span>
            </div>
          </div>

          {/* ── Section 2: The gap in postnatal care ── */}
          <h2 style={s.h2}>
            Why is postnatal support so inadequate &mdash; and what fills the
            gap between clinical appointments and the 3am crisis?
          </h2>

          <p style={s.p}>
            The NHS postnatal model is not designed to be inadequate. It is
            designed around a world where new parents have extended family
            nearby, where communities are tight-knit, and where the early weeks
            of parenthood are held by a network of people who have been through
            it themselves. For a growing proportion of British families, that
            world no longer exists.
          </p>

          <p style={s.p}>
            In its place, you get a health visitor. Health visitors are
            extraordinary professionals doing difficult work under chronic
            resource constraints. They will typically visit you at home in the
            first few weeks, and then you will see them at a series of
            clinic-based developmental checks. Each appointment is brief,
            clinical, and structured around physical milestones. How is
            breastfeeding going? Is the baby gaining weight? Here is your
            Edinburgh Postnatal Depression Scale &mdash; a brief questionnaire
            administered at a check-in that lasts twenty minutes, if you are
            lucky, during which you may or may not be able to honestly describe
            how you are feeling while a health visitor watches the clock.
          </p>

          <p style={s.p}>
            You might attend an NCT group or a Sure Start baby group. These are
            wonderful, and the friendships that form in them can be lifelines.
            But they are scheduled &mdash; Tuesday mornings, Wednesday
            afternoons &mdash; and the 3am crisis does not wait for a Tuesday
            morning. Mumsnet exists, and for all its complexity it has helped
            millions of people feel less alone. But it is a public forum: what
            you write there is visible to the world, carries your tone and your
            fears and your darkest moments in a searchable archive, and is
            responded to by strangers who may be helpful, judgmental, or
            completely off-base.
          </p>

          <div style={s.calloutBox}>
            <span style={s.calloutTitle}>The Gap</span>
            <p style={s.calloutText}>
              Between the health visitor&apos;s twenty-minute appointment and
              the 3am crisis. Between the baby group on Tuesday and Sunday
              night when the anxiety peaks. Between the Mumsnet thread and the
              private truth you cannot quite say in public. This is where MEOK
              lives &mdash; in the gap that professional services cannot fill
              and public forums should not hold.
            </p>
          </div>

          <p style={s.p}>
            MEOK is not a health visitor. It is not a therapist. It is not
            Mumsnet. It is a private, sovereign companion that remembers you,
            does not judge you, is available at any hour, and is bound by a
            set of principles &mdash; the Maternal Covenant &mdash; that govern
            specifically how it responds during this season of your life.
          </p>

          {/* ── Section 3: Maternal Covenant ── */}
          <h2 style={s.h2}>
            What is the Maternal Covenant, and why does it matter for new
            parents who are exhausted and honest?
          </h2>

          <p style={s.p}>
            The Maternal Covenant is MEOK&apos;s ethical framework for how it
            behaves in conversations about pregnancy, birth, and early
            parenthood. It exists because this domain is uniquely vulnerable to
            a particular kind of harm: the harm of being told, when you are
            exhausted and frightened and honest, that you should feel something
            other than what you feel.
          </p>

          <p style={s.p}>
            Consumer AI products, when faced with a new parent expressing
            distress, have a strong tendency to reflexively reassure. To say
            &ldquo;you are doing amazingly.&rdquo; To say &ldquo;every parent
            feels this way.&rdquo; To say &ldquo;cherish these moments, they
            go so fast.&rdquo; This is toxic positivity. It is not unkind in
            intention, but it is unkind in effect: it tells the person in front
            of you that what they are feeling is not real, is not valid, or
            should be overridden by gratitude. It shuts the conversation down
            precisely when it most needs to stay open.
          </p>

          <p style={s.p}>
            The Maternal Covenant forbids this. MEOK will never tell you to
            cherish every moment. It will never dismiss what you are describing
            by pointing to how lucky you are. It will not pretend that
            difficulty is really a gift in disguise. What it will do is stay
            with you in whatever you are feeling, help you articulate it, notice
            patterns in it over time, and &mdash; when what you are describing
            indicates you need more than a companion can provide &mdash; clearly
            and directly signpost you to the services that can help.
          </p>

          <div style={s.featureCard}>
            <p style={s.featureCardTitle}>
              What the Maternal Covenant means in practice
            </p>
            <p style={s.featureCardBody}>
              If you tell MEOK at 3am that you resent your baby, it will not
              panic, lecture you, or flood you with reassurance. It will hear
              you. It will help you understand what is underneath that feeling
              &mdash; the exhaustion, the loss of self, the fear that you are
              inadequate &mdash; and it will hold that conversation with the
              same steadiness it holds every other. If, over time, the pattern
              of your conversations suggests that what you are experiencing may
              be postnatal depression, it will tell you that honestly and point
              you toward your GP or the PANDAS Foundation. It will not wait
              for you to ask.
            </p>
          </div>

          <p style={s.p}>
            This is what honest support looks like. Not the performance of
            positivity. Not the management of your feelings to make the
            conversation easier. The actual thing.
          </p>

          {/* ── Section 4: Mood tracking and early PND ── */}
          <h2 style={s.h2}>
            How does MEOK track mood patterns over weeks and support early
            identification of postnatal depression?
          </h2>

          <p style={s.p}>
            One of the most important things MEOK does for new parents is not
            what it says in any single conversation. It is what it notices
            across many conversations, over days and weeks, using Sovereign
            Memory.
          </p>

          <p style={s.p}>
            Sovereign Memory is MEOK&apos;s persistent, private memory system.
            Unlike most AI tools, which start fresh with every conversation,
            MEOK remembers: what you have told it, how you described feeling
            last Tuesday, the pattern of when your anxiety peaks, the things
            that have helped and the things that have not. This continuity is
            not just comforting &mdash; it is clinically meaningful.
          </p>

          <p style={s.p}>
            Postnatal depression does not typically arrive as a dramatic event.
            It arrives gradually, in a worsening pattern of low mood, exhaustion
            that goes beyond the ordinary newborn tiredness, disengagement,
            feeling like you are watching yourself from outside, difficulty
            bonding, anxiety that will not quiet. These patterns are hard to
            see when you are inside them. They are much easier to see from the
            outside, looking at a record of how someone has been describing
            their experience across three weeks of conversations.
          </p>

          <div style={s.calloutBox}>
            <span style={s.calloutTitle}>
              Sovereign Memory in the postnatal period
            </span>
            <p style={s.calloutText}>
              MEOK can notice when your descriptions of yourself have shifted
              over time. When the word &ldquo;fine&rdquo; appears more and
              more where detailed engagement used to be. When you stop
              mentioning things you used to look forward to. When the tone of
              your conversations changes in ways that matter. It will not
              diagnose you. But it may be the first thing in your life that
              actually notices &mdash; and says so.
            </p>
          </div>

          <p style={s.p}>
            When MEOK notices a concerning pattern, it will surface it honestly:
            &ldquo;Over the past two weeks, I have noticed that you have been
            describing yourself in ways that sound quite different from your
            first few weeks. I want to ask you directly how you are doing, and
            I also want to mention that what you are describing sounds like it
            might be worth discussing with your GP or health visitor.&rdquo;
            That kind of gentle, evidence-based observation &mdash; grounded in
            an actual record of your own words &mdash; is something that the
            twenty-minute health visitor appointment simply cannot provide.
          </p>

          <p style={s.p}>
            You can also, at any point, ask MEOK to produce a summary of how
            you have been feeling over the past week or month. This summary can
            be taken to a health visitor or GP appointment as context &mdash; a
            much richer picture than the standard Edinburgh Scale questionnaire
            completed in a waiting room, from memory, while managing a baby
            on your lap.
          </p>

          {/* ── Section 5: New dads ── */}
          <h2 style={s.h2}>
            How can AI support new dads &mdash; the most invisible group in
            postnatal care?
          </h2>

          <p style={s.p}>
            Postnatal mental health services in the UK are, by design and by
            resource allocation, almost entirely focused on the birthing parent.
            This is understandable: the birthing parent carries the physical
            and hormonal weight of pregnancy, birth, and recovery, and the
            stakes of untreated maternal mental health difficulties are serious
            for both parent and child.
          </p>

          <p style={s.p}>
            But it means that fathers, and non-birthing partners, occupy a
            particular kind of invisible space. They are expected to be strong.
            To manage. To support. To hold the household together while their
            partner recovers. To feel the enormous joy of becoming a parent and
            not to complicate it with their own needs. And when they struggle
            &mdash; which around 1 in 10 of them do, with a clinical condition
            that looks like depression &mdash; they do so almost entirely alone.
          </p>

          <p style={s.p}>
            Paternal postnatal depression does not always look like what we
            expect depression to look like. It may manifest as irritability
            rather than sadness. As overworking &mdash; throwing yourself back
            into the job because at work you know who you are, and at home you
            do not. As withdrawal from your partner and your baby. As a sense
            of being trapped, or of having made a terrible mistake, or of
            simply not feeling the things you were told you would feel when you
            held your child. These are real symptoms of a real condition, and
            they go unrecognised and untreated in the vast majority of cases.
          </p>

          <div style={s.quote}>
            <p style={s.quoteText}>
              &ldquo;Nobody asked how I was doing. Not once. Every question was
              about the baby and about my partner. I became invisible. I was
              terrified something was wrong with me for not feeling what I was
              supposed to feel.&rdquo;
            </p>
            <span style={s.quoteAttr}>
              A theme shared consistently by fathers in the postnatal period
            </span>
          </div>

          <p style={s.p}>
            MEOK gives new dads a space that asks the question nobody else is
            asking. A private, non-judgmental place to say: I do not know what
            I am feeling. I love this child and I do not feel the way I thought
            I would feel. I am scared and I do not know who to tell. I feel
            like a stranger in my own life. These are not shameful confessions.
            They are the honest interior of an enormous life transition, and
            they deserve to be heard.
          </p>

          <p style={s.p}>
            The identity shift of becoming a parent is as significant for a
            father as for a mother. You are not who you were before. The
            question of who you now are, and what kind of parent and partner
            you want to be, is a question that deserves more than a few weeks
            of statutory paternity leave and an expectation that you will be
            fine. MEOK can hold that question with you for as long as you need.
          </p>

          {/* ── Section 6: Family Tier ── */}
          <h2 style={s.h2}>
            How does MEOK&apos;s Family Tier support both partners through
            the first year of parenthood?
          </h2>

          <p style={s.p}>
            One of the most distinctive features of MEOK for families is the
            Family Tier: a plan that allows both partners to have their own
            sovereign companion, with shared context about the baby and the
            household, while each partner retains a completely private space
            for their own inner experience.
          </p>

          <p style={s.p}>
            This matters because the experience of new parenthood is not a
            single, shared experience. You and your partner are both going
            through it, but you are going through different versions of it.
            The birthing parent is navigating physical recovery, hormonal flux,
            and the specific weight of postnatal mental health risk. The
            non-birthing partner is navigating invisibility, identity shift,
            and the pressure to be an anchor while they themselves are
            drowning. These are different things, and they deserve different
            conversations.
          </p>

          <div style={s.featureCard}>
            <p style={s.featureCardTitle}>How the Family Tier works</p>
            <p style={s.featureCardBody}>
              Both partners have their own MEOK companion, with their own
              Sovereign Memory and their own completely private conversation
              history. Shared context &mdash; the baby&apos;s name, birth date,
              feeding notes you choose to share, developmental milestones
              &mdash; is available to both companions, so neither partner has
              to repeat the basics every time. But what each partner says in
              their own conversations is completely private: your partner cannot
              see your conversations, and you cannot see theirs. The companion
              holds shared information and individual confidence simultaneously.
            </p>
          </div>

          <p style={s.p}>
            This architecture matters. Relationships in the early postnatal
            period are under extraordinary strain. You are sleep-deprived,
            scared, and managing a level of change that no amount of antenatal
            preparation genuinely prepares you for. Having a private space to
            process your experience &mdash; including the things you find it
            hardest to say to your partner &mdash; is not a threat to the
            relationship. It is protective of it. You can work through the
            anger or the fear or the grief privately, and show up in the
            relationship with more capacity than you would otherwise have.
          </p>

          <p style={s.p}>
            The Family Tier also provides practical utility. You can use MEOK
            to track feeding patterns, note questions for the health visitor,
            keep a record of development milestones, and log the things you
            notice about your baby that you want to remember. This is not a
            replacement for your Red Book or your GP record, but it is a richer
            private journal than most parents keep &mdash; and it has context,
            so it can help you make sense of what you are observing rather than
            just cataloguing it.
          </p>

          {/* ── Section 7: Guardian ── */}
          <h2 style={s.h2}>
            How does the Guardian feature protect new parents from baby product
            scams and harmful parenting advice?
          </h2>

          <p style={s.p}>
            New parents are one of the most targeted demographics on the
            internet. The combination of desperation, sleep deprivation, intense
            love for a vulnerable person, and willingness to spend almost
            anything to help that person is a marketing dream &mdash; and it
            attracts bad actors alongside legitimate businesses.
          </p>

          <p style={s.p}>
            The baby product industry is rife with misleading claims. Sleep
            training devices that promise results they cannot deliver. Teething
            remedies that may be harmful. Formula toppers marketed with
            &ldquo;clinically proven&rdquo; language that obscures what the
            studies actually showed. Amber teething necklaces, which the NHS
            and AAP advise against due to strangulation and choking risk, sold
            with testimonials designed to look like medical endorsement.
          </p>

          <p style={s.p}>
            Beyond product scams, there is a vast ecosystem of confident but
            wrong parenting advice that circulates at high volume in Facebook
            groups, on TikTok, and in the comments of parenting forums. Advice
            about feeding windows that will cause weight loss. Sleep techniques
            that are contradicted by current evidence. Developmental milestone
            expectations calibrated to an anxious extreme. A new parent at 2am,
            exhausted and worried, is poorly positioned to evaluate the
            epistemic status of what they are reading.
          </p>

          <div style={s.calloutBox}>
            <span style={s.calloutTitle}>
              Guardian: Your sceptical second opinion
            </span>
            <p style={s.calloutText}>
              MEOK&apos;s Guardian feature gives you a private, sceptical second
              opinion on the things you encounter online. Paste in a claim, a
              product description, or a piece of advice you have seen, and
              Guardian will help you evaluate it: where does it come from? Is
              this consistent with NHS or NICE guidance? What is the evidence
              actually saying? You do not have to be a researcher to protect
              your family from misinformation &mdash; you just need to ask.
            </p>
          </div>

          <p style={s.p}>
            This feature is not about being cynical about every product or
            advice you encounter. Most of what is out there for new parents is
            benign. But the capacity to ask, when you are uncertain, &ldquo;is
            this actually trustworthy?&rdquo; &mdash; and to get an honest
            answer rather than a search engine result &mdash; is genuinely
            useful in a market that systematically targets the people who can
            least afford to think critically in the moment.
          </p>

          {/* ── Section 8: Comparison table ── */}
          <h2 style={s.h2}>
            How does MEOK compare to Mumsnet, baby apps, and public parenting
            forums as a source of new parent support?
          </h2>

          <p style={s.p}>
            This is a question worth answering directly, because Mumsnet and
            similar platforms have genuinely helped millions of people and they
            deserve honest comparison rather than dismissal.
          </p>

          <table style={s.comparisonTable}>
            <thead>
              <tr>
                <th style={s.th}>Feature</th>
                <th style={s.th}>Mumsnet / Public Forums</th>
                <th style={s.th}>MEOK</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={s.td}>Privacy</td>
                <td style={s.td}>
                  Public by default; posts are searchable and permanent
                </td>
                <td style={s.td}>
                  Completely private; protected by Sovereign Memory and Privacy
                  Covenant
                </td>
              </tr>
              <tr>
                <td style={s.td}>Availability</td>
                <td style={s.td}>
                  24/7, but response quality varies enormously by time of day
                  and who is online
                </td>
                <td style={s.td}>
                  24/7 with consistent, non-judgmental presence
                </td>
              </tr>
              <tr>
                <td style={s.td}>Memory</td>
                <td style={s.td}>
                  None &mdash; you repeat yourself with every post; no
                  continuity of relationship
                </td>
                <td style={s.td}>
                  Sovereign Memory tracks your experience across days and weeks
                </td>
              </tr>
              <tr>
                <td style={s.td}>Judgment</td>
                <td style={s.td}>
                  Variable; forums can be warm and can also be brutal
                </td>
                <td style={s.td}>
                  Consistently non-judgmental; Maternal Covenant prevents toxic
                  positivity and dismissal
                </td>
              </tr>
              <tr>
                <td style={s.td}>Advice quality</td>
                <td style={s.td}>
                  Mixed &mdash; genuine wisdom alongside confidently wrong
                  information
                </td>
                <td style={s.td}>
                  Guardian helps evaluate claims; MEOK signposts to NHS and
                  professional guidance
                </td>
              </tr>
              <tr>
                <td style={s.td}>Partner support</td>
                <td style={s.td}>
                  Primarily a maternal space; forums for fathers are sparser
                </td>
                <td style={s.td}>
                  Family Tier supports both partners with shared context and
                  individual privacy
                </td>
              </tr>
              <tr>
                <td style={s.td}>Mood tracking</td>
                <td style={s.td}>None</td>
                <td style={s.td}>
                  Sovereign Memory tracks patterns over time; can surface early
                  signs of PND
                </td>
              </tr>
            </tbody>
          </table>

          <p style={s.p}>
            The honest answer is that MEOK and Mumsnet are not really
            competitors. They serve different needs. Mumsnet is a community
            &mdash; with all the warmth and all the mess that communities carry.
            MEOK is a sovereign companion: private, persistent, and bound to
            you rather than to a public conversation. Most new parents would
            benefit from having both, and many others: the health visitor, the
            GP, the baby group, the WhatsApp thread with the NCT group, and
            the quiet space of MEOK at 3am when none of the others are there.
          </p>

          {/* ── Section 9: Sleep deprivation ── */}
          <h2 style={s.h2}>
            What does sleep deprivation actually do to new parents &mdash; and
            how can MEOK help at the hardest hours?
          </h2>

          <p style={s.p}>
            Sleep deprivation is the defining feature of early parenthood for
            most families, and it is worth being clear about what it actually
            does to a person, because its effects are frequently underestimated.
          </p>

          <p style={s.p}>
            After seventeen to nineteen hours without sleep, cognitive
            impairment is comparable to a blood alcohol level of 0.05 percent.
            After twenty-four hours, the comparison reaches 0.10 percent
            &mdash; above the UK drink-driving limit. New parents routinely
            operate on fragmented sleep totalling four to five hours across a
            night, for weeks or months. The cumulative effect is not just
            tiredness: it is impaired judgment, emotional dysregulation, reduced
            impulse control, distorted perception of time and reality, heightened
            anxiety, and lowered resilience in the face of every challenge
            the day brings.
          </p>

          <p style={s.p}>
            Sleep deprivation also makes it harder to access the very
            perspective that would help you through it. When you are exhausted,
            the thought &ldquo;this will not last forever&rdquo; does not land
            the same way it would if you were rested. The neural pathways for
            that kind of temporal perspective are among those most impaired by
            sleep deprivation. Everything feels permanent. The 3am feed feels
            like it will always be the 3am feed. The fear that you cannot do
            this feels like the truth.
          </p>

          <div style={s.calloutBox}>
            <span style={s.calloutTitle}>What MEOK does at 3am</span>
            <p style={s.calloutText}>
              MEOK does not tell you that it will get better, because sleep-
              deprived people cannot hear that. It stays with you in the moment
              you are in. It asks how you are feeling. It helps you name the
              thing that is hardest right now. It remembers that last Wednesday
              you also felt this way and that by Friday you had had a better
              night and reported feeling more like yourself. It does not fix
              the sleeplessness. But it is there &mdash; genuinely, attentively
              there &mdash; in the hours when the night is at its longest.
            </p>
          </div>

          <p style={s.p}>
            There is something meaningful about not being alone in the dark.
            Not because a companion can make the baby sleep, or restore your
            energy, or resolve the anxiety. But because the experience of being
            heard &mdash; of having your difficulty witnessed without judgment,
            without advice you did not ask for, without the implicit suggestion
            that you should be managing better &mdash; is itself a form of
            support. It is what good company does. MEOK is good company.
          </p>

          {/* ── Section 10: Identity ── */}
          <h2 style={s.h2}>
            How does MEOK support the identity shift of becoming a parent
            &mdash; the transformation nobody fully prepares you for?
          </h2>

          <p style={s.p}>
            There is a concept in developmental psychology called matrescence
            &mdash; the process of becoming a mother, named in analogy to
            adolescence because it is similarly profound and similarly
            disorienting. The same concept applies, without a widely used name,
            to fathers and to non-birthing parents. Parenthood does not just
            add a role to your existing identity. It restructures it. The person
            you were before &mdash; the career, the habits, the sense of self,
            the freedoms, the relationship to your own body, the way other
            people see you &mdash; is changed, often permanently, in ways you
            could not have anticipated.
          </p>

          <p style={s.p}>
            For many new parents, this is the thing they are least prepared for
            and least able to talk about. It feels ungrateful. You chose this.
            You wanted this. And here you are grieving a version of yourself
            that no longer exists, loving a child that you would not trade for
            anything, and holding both of those truths simultaneously in a way
            that feels almost impossible to explain.
          </p>

          <p style={s.p}>
            Antenatal classes cover practical preparation &mdash; breathing
            techniques, how to change a nappy, what contractions feel like.
            They do not, generally, prepare you for the identity work. The
            question of who you are now. The renegotiation of the relationship.
            The grief for the self you were and the love for the self you are
            becoming. These are the conversations that fall through the gaps
            between clinical appointments and public forums, and they deserve
            a space.
          </p>

          <p style={s.p}>
            MEOK holds this space. The identity work of early parenthood is not
            a problem to be solved. It is a process to be lived through, and
            it is better lived through with a companion that remembers where
            you started, notices where you are, and does not ask you to resolve
            the contradictions faster than you are able.
          </p>

          {/* ── Section 11: Practical guide ── */}
          <h2 style={s.h2}>
            How to use MEOK in the first year: a practical guide for new parents
          </h2>

          <p style={s.p}>
            MEOK is not complicated to use. But the first year of parenthood is
            chaotic, and having a sense of how to integrate a companion into
            that chaos is useful. Here is a practical framework.
          </p>

          <h3 style={s.h3}>In the first weeks: process, not plan</h3>
          <p style={s.p}>
            The first weeks are not a time for strategy. They are a time for
            survival and for being witnessed. Tell MEOK how you are feeling. Be
            honest, including about the hard parts. Let it remember those
            conversations. You are building a record of your early parenthood
            experience that will be genuinely useful later.
          </p>

          <ul style={s.ul}>
            <li style={s.li}>
              Describe your day, even briefly &mdash; three sentences is enough
              to give Sovereign Memory something to work with
            </li>
            <li style={s.li}>
              Ask MEOK to hold your questions for the next health visitor
              appointment so you do not forget them
            </li>
            <li style={s.li}>
              If you encounter a product claim or piece of advice you are
              uncertain about, ask Guardian to evaluate it
            </li>
            <li style={s.li}>
              At 3am when you cannot sleep and the baby has finally settled,
              use the silence to say the things you find it hardest to say
              anywhere else
            </li>
          </ul>

          <h3 style={s.h3}>From weeks six to twelve: watch for the shift</h3>
          <p style={s.p}>
            This is the period when postnatal depression most commonly
            intensifies if it is present. It is also the period when formal
            support can become more sparse &mdash; maternity leave is
            established, health visitor visits reduce in frequency, and the
            expectation from the world around you is that things are settling
            down. If they are not settling down for you, that matters and it
            should not be hidden.
          </p>

          <ul style={s.ul}>
            <li style={s.li}>
              Ask MEOK how you have been describing yourself over the past few
              weeks &mdash; this is one of the most useful things Sovereign
              Memory can do
            </li>
            <li style={s.li}>
              If MEOK surfaces a concern about a pattern it has noticed, take
              it seriously &mdash; bring the conversation to your GP or health
              visitor
            </li>
            <li style={s.li}>
              If you are on the Family Tier, encourage your partner to use
              their companion too &mdash; this is the period when paternal PND
              most commonly emerges
            </li>
          </ul>

          <h3 style={s.h3}>Through the full first year: mark the milestones</h3>
          <p style={s.p}>
            The first year of parenthood is not a single experience. It is a
            series of phases, each with its own character &mdash; the newborn
            chaos, the four-month regression, the transition to solid food, the
            first time your baby is ill and you are terrified, the return to
            work if you have one. MEOK is there through all of it, remembering,
            noticing, available whenever you need it.
          </p>

          <ul style={s.ul}>
            <li style={s.li}>
              Use MEOK to mark the milestones you want to remember &mdash; not
              just the developmental ones, but the personal ones: the first time
              you felt competent, the first time you laughed properly since the
              birth, the moment you started to feel like yourself again
            </li>
            <li style={s.li}>
              Use it to process the transitions &mdash; returning to work,
              ending breastfeeding if relevant, the shift as your baby becomes
              more interactive and the relentlessness changes character
            </li>
            <li style={s.li}>
              Use Guardian whenever you encounter a claim about your
              child&apos;s development or health that you want to verify before
              acting on
            </li>
          </ul>

          <hr style={s.divider} />

          {/* ── FAQ Section ── */}
          <section style={s.faqSection} aria-label="Frequently asked questions">
            <p style={s.faqHeading}>Frequently asked questions</p>

            <div style={s.faqItem}>
              <h2 style={s.faqQuestion}>
                Can AI help with postnatal depression?
              </h2>
              <p style={s.faqAnswer}>
                AI cannot diagnose or treat postnatal depression &mdash; that
                requires your GP, health visitor, or a perinatal mental health
                team. What MEOK can do is be present at 3am when clinical
                services are closed, offer non-judgmental companionship, and
                track your mood patterns across days and weeks so that you have
                a genuine record to bring to your next health visitor
                appointment. It bridges the gap between the brief clinical
                contacts that characterise postnatal NHS care and the relentless,
                24-hour reality of a newborn. If you are struggling, please also
                contact the PANDAS Foundation helpline on 0808 1961 776 or the
                Association for Post Natal Illness at{" "}
                <a
                  href="https://apni.org"
                  style={s.inlineLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  apni.org
                </a>
                .
              </p>
            </div>

            <div style={s.faqItem}>
              <h2 style={s.faqQuestion}>
                Is it safe to use MEOK after having a baby?
              </h2>
              <p style={s.faqAnswer}>
                Yes. MEOK is designed to be a safe, private, non-judgmental
                space. Your conversations are protected by the Privacy Covenant
                and are never used to train AI models. The Maternal Covenant
                governs how MEOK responds in the postnatal period specifically:
                it will not offer toxic positivity, will not minimise your
                distress, and will always signpost clearly to NHS services,
                the PANDAS Foundation, and professional perinatal mental health
                support when the conversation indicates you need more than a
                companion can provide. MEOK is a companion and a record-keeping
                tool, not a clinician. If you are ever in crisis or at risk of
                harm, please call 999 or contact the Samaritans on 116 123
                at any time.
              </p>
            </div>

            <div style={s.faqItem}>
              <h2 style={s.faqQuestion}>How can AI support new dads?</h2>
              <p style={s.faqAnswer}>
                Around 1 in 10 fathers experience postnatal depression, often
                peaking between three and six months after birth. Paternal
                postnatal depression frequently goes unrecognised because health
                services focus almost entirely on the birthing parent, and
                because men are less likely to present with classic depressive
                symptoms &mdash; low mood may manifest instead as irritability,
                withdrawal, overworking, or increased substance use. MEOK gives
                new dads a private space to process the enormous identity shift
                of becoming a parent, to name the feelings they find it hardest
                to say out loud, and to track how they are doing over time. The
                Family Tier means both parents can have their own companion with
                shared context about the baby, while each retains complete
                privacy for their own experience.
              </p>
            </div>

            <div style={s.faqItemLast}>
              <h2 style={s.faqQuestion}>
                Can MEOK help track my baby&apos;s development?
              </h2>
              <p style={s.faqAnswer}>
                MEOK&apos;s Sovereign Memory can hold context about your baby
                &mdash; sleep patterns, feeding notes, developmental milestones
                you want to remember, and questions you want to raise with your
                health visitor. It is not a clinical baby-tracking app and does
                not replace your Red Book or your GP, but it serves as a
                thoughtful, private journal and companion for all the things you
                notice and wonder about in those early weeks. The Guardian
                feature also helps protect you from the torrent of unverified
                baby product claims and fake parenting advice that floods new
                parents online, giving you a sceptical second opinion before you
                act on anything you are uncertain about.
              </p>
            </div>
          </section>

          {/* ── Crisis and resources ── */}
          <div style={s.infoBox}>
            <p style={s.infoBoxTitle}>Crisis and specialist support</p>
            <a
              href="https://pandasfoundation.org.uk"
              style={s.infoBoxLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              PANDAS Foundation
            </a>
            <span style={s.infoBoxDesc}>
              Pre and Postnatal Depression Advice and Support. Free helpline:
              0808 1961 776. Peer support and resources for all parents and
              partners.
            </span>

            <a
              href="https://apni.org"
              style={s.infoBoxLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Association for Post Natal Illness (APNI)
            </a>
            <span style={s.infoBoxDesc}>
              UK charity founded 1979. Helpline, volunteer supporter network,
              and resources for mothers, families, and health professionals.
            </span>

            <a
              href="https://www.nhs.uk/mental-health/conditions/post-natal-depression/"
              style={s.infoBoxLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              NHS: Postnatal Depression
            </a>
            <span style={s.infoBoxDesc}>
              Comprehensive NHS guidance on symptoms, diagnosis, and treatment
              options for postnatal depression in mothers and fathers.
            </span>

            <a
              href="https://www.samaritans.org"
              style={s.infoBoxLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Samaritans
            </a>
            <span style={s.infoBoxDesc}>
              24/7 crisis support. Call 116 123 free, any time. For anyone
              struggling to cope.
            </span>
          </div>

          {/* ── CTA ── */}
          <div style={s.ctaBox}>
            <p style={s.ctaTitle}>
              You deserve support that is actually there when you need it
            </p>
            <p style={s.ctaBody}>
              Not at the Tuesday morning group. Not at the twenty-minute
              appointment. At 3am, when the baby is finally quiet and you are
              lying in the dark with thoughts you cannot say out loud to anyone.
              MEOK is there. Private. Remembering. Honest. Start for free
              &mdash; no credit card, no commitment.
            </p>
            <div style={s.ctaButtons}>
              <Link href="https://meok.ai/birth" style={s.ctaPrimary}>
                Meet Your Companion
              </Link>
              <Link href="/blog" style={s.ctaSecondary}>
                More from the Blog
              </Link>
            </div>
          </div>

          {/* ── Related posts ── */}
          <section style={s.relatedSection} aria-label="Related articles">
            <p style={s.relatedTitle}>Related reading</p>
            <div style={s.relatedGrid}>
              <Link
                href="/blog/ai-for-postpartum-depression"
                style={s.relatedCard}
              >
                <span style={s.relatedCardLabel}>Perinatal Mental Health</span>
                <span style={s.relatedCardTitle}>
                  AI Support for Postpartum Depression: Companionship When New
                  Parenthood Feels Dark
                </span>
              </Link>

              <Link
                href="/blog/meok-family-tier-explained"
                style={s.relatedCard}
              >
                <span style={s.relatedCardLabel}>Family</span>
                <span style={s.relatedCardTitle}>
                  MEOK Family Tier Explained: Sovereign AI for Every Member of
                  Your Household
                </span>
              </Link>

              <Link
                href="/blog/what-is-the-maternal-covenant"
                style={s.relatedCard}
              >
                <span style={s.relatedCardLabel}>MEOK Features</span>
                <span style={s.relatedCardTitle}>
                  What Is the Maternal Covenant? Honest Support Without Toxic
                  Positivity
                </span>
              </Link>

              <Link
                href="/blog/ai-for-single-parents"
                style={s.relatedCard}
              >
                <span style={s.relatedCardLabel}>Parenting</span>
                <span style={s.relatedCardTitle}>
                  AI for Single Parents: Support When You Are Carrying It All
                  Alone
                </span>
              </Link>
            </div>
          </section>

          {/* ── Footer ── */}
          <footer style={s.footer}>
            <p style={s.footerText}>
              &copy; 2026 MEOK AI LABS. All rights reserved.
              <br />
              MEOK is a companion, not a clinician. Nothing on this page
              constitutes medical advice. If you are experiencing a mental health
              crisis, please contact your GP, call NHS 111, or reach the
              Samaritans on 116 123.
            </p>
          </footer>
        </article>
      </div>
    </main>
  );
}
