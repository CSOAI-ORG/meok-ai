import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Parenting Stress: When You Love Your Children and Are Overwhelmed by Them | MEOK AI LABS",
  description:
    "Parenting is the most emotionally demanding role most people will ever hold \u2014 and the least supported. MEOK offers a completely private, non-judgmental space to say what you can\u2019t say to your partner, your friends, your health visitor, or your GP. No parenting shame. Just honesty.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-parenting-stress",
  },
  keywords: [
    "AI for parenting stress",
    "parenting overwhelm support",
    "parenting shame UK",
    "maternal mental health UK",
    "AI companion for parents",
    "parenting stress UK statistics",
    "SEND parenting support",
    "co-parenting stress support",
    "touched out parenting",
    "parental burnout AI",
    "MEOK AI parenting",
    "private parenting support",
    "non-judgmental parenting app",
    "family AI app UK",
    "NSPCC parenting statistics 2025",
  ],
  openGraph: {
    title:
      "AI for Parenting Stress: When You Love Your Children and Are Overwhelmed by Them",
    description:
      "1 in 5 UK parents report moderate-to-severe parental stress. 63% say they can\u2019t be honest about it for fear of judgment. MEOK gives you a completely private space to say the unspeakable \u2014 without anyone judging you for it.",
    url: "https://meok.ai/blog/ai-for-parenting-stress",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Parenting+Stress&desc=When+You+Love+Your+Children+and+Are+Overwhelmed+by+Them",
        width: 1200,
        height: 630,
        alt: "AI for Parenting Stress | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Parenting Stress: When You Love Your Children and Are Overwhelmed by Them",
    description:
      "1 in 5 UK parents report severe parental stress. MEOK offers a private, non-judgmental space to process the feelings you can\u2019t say out loud \u2014 and remembers your story across time.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Parenting+Stress&desc=When+You+Love+Your+Children+and+Are+Overwhelmed+by+Them",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Parenting Stress: When You Love Your Children and Are Overwhelmed by Them",
  description:
    "Parenting is the most emotionally demanding role most people will ever hold \u2014 and the least supported. MEOK offers a completely private, non-judgmental space to say what you can\u2019t say to anyone else: the resentment, the overwhelm, the touched-out exhaustion, the co-parenting grief. Persistent memory means MEOK knows your story across time.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-parenting-stress",
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
    "@id": "https://meok.ai/blog/ai-for-parenting-stress",
  },
  keywords: [
    "parenting stress",
    "parental burnout",
    "parenting shame",
    "maternal mental health UK",
    "co-parenting support",
    "SEND parenting",
    "AI companion for parents",
    "MEOK AI LABS",
    "touched out",
    "parental overwhelm",
  ],
  articleSection: "Parenting & Family Mental Health",
  inLanguage: "en-GB",
  about: [
    { "@type": "Thing", name: "Parental stress" },
    { "@type": "Thing", name: "Maternal mental health" },
    { "@type": "Thing", name: "Parenting shame" },
    { "@type": "Thing", name: "Co-parenting" },
    { "@type": "Thing", name: "SEND parenting" },
    { "@type": "Thing", name: "AI companion" },
    { "@type": "Thing", name: "Parental burnout" },
  ],
  mentions: [
    {
      "@type": "Organization",
      name: "NSPCC",
      url: "https://www.nspcc.org.uk",
    },
    {
      "@type": "Organization",
      name: "NHS",
      url: "https://www.nhs.uk",
    },
    {
      "@type": "Organization",
      name: "Mind",
      url: "https://www.mind.org.uk",
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
      name: "Is it normal to feel overwhelmed and resentful as a parent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, completely. Research and clinical experience consistently confirm that feelings of overwhelm, resentment, frustration, being touched-out, and even momentary ambivalence about parenthood are universally experienced by parents at some point. The problem is not the feelings themselves \u2014 it is the cultural silence around them. Parenting shame stops parents from seeking support, which compounds stress into genuine mental health difficulties. Having these feelings does not make you a bad parent. It makes you a human being doing an extraordinarily demanding job, usually without adequate support.",
      },
    },
    {
      "@type": "Question",
      name: "How can AI help with parenting stress?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI cannot replace therapy, GP support, or parenting programmes \u2014 and MEOK never claims to. What MEOK offers is a completely private space to process the feelings you cannot say out loud to anyone in your life. Because MEOK uses persistent Sovereign Memory, it knows the arc of your parenting challenges across time: the SEND assessment you have been navigating for eight months, the phase your toddler is stuck in, the teenager who stopped talking to you in October. It can help you reflect, process, and prepare for difficult conversations without judgment, at any hour of the day.",
      },
    },
    {
      "@type": "Question",
      name: "What is parenting shame and why does it make stress worse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Parenting shame is the culturally enforced silence around the difficulties of raising children. Saying out loud that you find parenting overwhelming \u2014 particularly in the UK \u2014 is treated as evidence of inadequacy or ingratitude. This shame prevents parents from seeking support, discussing their struggles with their GP or health visitor, or even acknowledging the stress to themselves. The result is that stress compounds in isolation. NSPCC data from 2025 found that 63% of parents feel they cannot be honest about parenting struggles for fear of judgment.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK support co-parenting stress?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Co-parenting after separation is one of the most emotionally demanding situations a parent can navigate \u2014 managing grief, negotiation, ongoing conflict, and the constant pressure to shield your children from adult complexity, all simultaneously. MEOK provides a private space to process feelings about the co-parenting relationship without involving the children, without burdening friends who know both parties, and without the risk of anything said being used against you. It remembers the evolving co-parenting dynamic over time, so you are never starting from scratch.",
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
    opacity: 0.35,
  } as React.CSSProperties,

  body: {
    paddingTop: "48px",
  } as React.CSSProperties,

  h2: {
    fontSize: "clamp(20px, 3.5vw, 28px)",
    fontWeight: 700,
    color: "#f5f0e8",
    marginTop: "56px",
    marginBottom: "20px",
    letterSpacing: "-0.01em",
    lineHeight: 1.25,
  } as React.CSSProperties,

  h3: {
    fontSize: "18px",
    fontWeight: 600,
    color: "#f5f0e8",
    marginTop: "32px",
    marginBottom: "12px",
    lineHeight: 1.35,
  } as React.CSSProperties,

  p: {
    fontSize: "16px",
    lineHeight: 1.8,
    color: "rgba(245,240,232,0.82)",
    marginBottom: "20px",
  } as React.CSSProperties,

  pLarge: {
    fontSize: "17px",
    lineHeight: 1.8,
    color: "rgba(245,240,232,0.82)",
    marginBottom: "24px",
  } as React.CSSProperties,

  statsCallout: {
    background: "rgba(201,168,76,0.07)",
    border: "1px solid rgba(201,168,76,0.25)",
    borderRadius: "12px",
    padding: "36px 32px",
    margin: "48px 0",
  } as React.CSSProperties,

  statsCalloutTitle: {
    fontSize: "13px",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    marginBottom: "24px",
  } as React.CSSProperties,

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "24px",
  } as React.CSSProperties,

  statBlock: {
    textAlign: "center" as const,
  } as React.CSSProperties,

  statNumber: {
    fontSize: "clamp(28px, 5vw, 40px)",
    fontWeight: 800,
    color: "#c9a84c",
    lineHeight: 1,
    marginBottom: "8px",
    letterSpacing: "-0.02em",
    display: "block",
  } as React.CSSProperties,

  statLabel: {
    fontSize: "13px",
    color: "rgba(245,240,232,0.65)",
    lineHeight: 1.5,
  } as React.CSSProperties,

  pullQuote: {
    borderLeft: "3px solid #c9a84c",
    paddingLeft: "24px",
    margin: "36px 0",
  } as React.CSSProperties,

  pullQuoteText: {
    fontSize: "18px",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.88)",
    fontStyle: "italic",
    marginBottom: "8px",
  } as React.CSSProperties,

  pullQuoteSource: {
    fontSize: "13px",
    color: "rgba(245,240,232,0.45)",
  } as React.CSSProperties,

  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
    margin: "32px 0",
  } as React.CSSProperties,

  card: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(201,168,76,0.15)",
    borderRadius: "10px",
    padding: "24px",
  } as React.CSSProperties,

  cardIcon: {
    fontSize: "28px",
    marginBottom: "12px",
    display: "block",
  } as React.CSSProperties,

  cardTitle: {
    fontSize: "15px",
    fontWeight: 700,
    color: "#f5f0e8",
    marginBottom: "8px",
  } as React.CSSProperties,

  cardBody: {
    fontSize: "14px",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.65)",
  } as React.CSSProperties,

  compareWrapper: {
    margin: "36px 0",
    borderRadius: "10px",
    overflow: "hidden",
    border: "1px solid rgba(201,168,76,0.15)",
  } as React.CSSProperties,

  compareHeader: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    background: "rgba(201,168,76,0.1)",
    padding: "14px 20px",
    gap: "16px",
  } as React.CSSProperties,

  compareHeaderCell: {
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
  } as React.CSSProperties,

  compareRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    padding: "16px 20px",
    gap: "16px",
    borderTop: "1px solid rgba(245,240,232,0.06)",
  } as React.CSSProperties,

  compareRowAlt: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    padding: "16px 20px",
    gap: "16px",
    borderTop: "1px solid rgba(245,240,232,0.06)",
    background: "rgba(255,255,255,0.02)",
  } as React.CSSProperties,

  compareCell: {
    fontSize: "14px",
    color: "rgba(245,240,232,0.7)",
    lineHeight: 1.55,
  } as React.CSSProperties,

  compareCellLabel: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#f5f0e8",
    lineHeight: 1.55,
  } as React.CSSProperties,

  compareCellGold: {
    fontSize: "14px",
    color: "#c9a84c",
    lineHeight: 1.55,
    fontWeight: 500,
  } as React.CSSProperties,

  highlightBox: {
    background: "rgba(201,168,76,0.06)",
    border: "1px solid rgba(201,168,76,0.2)",
    borderRadius: "10px",
    padding: "28px",
    margin: "32px 0",
  } as React.CSSProperties,

  highlightBoxTitle: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#c9a84c",
    marginBottom: "12px",
  } as React.CSSProperties,

  highlightBoxBody: {
    fontSize: "15px",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.78)",
  } as React.CSSProperties,

  disclaimerBox: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(245,240,232,0.1)",
    borderRadius: "8px",
    padding: "20px 24px",
    margin: "40px 0",
  } as React.CSSProperties,

  disclaimerText: {
    fontSize: "13px",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.5)",
  } as React.CSSProperties,

  faqItem: {
    borderBottom: "1px solid rgba(245,240,232,0.08)",
    paddingBottom: "28px",
    marginBottom: "28px",
  } as React.CSSProperties,

  faqQ: {
    fontSize: "17px",
    fontWeight: 700,
    color: "#f5f0e8",
    marginBottom: "12px",
    lineHeight: 1.4,
  } as React.CSSProperties,

  faqA: {
    fontSize: "15px",
    lineHeight: 1.8,
    color: "rgba(245,240,232,0.72)",
  } as React.CSSProperties,

  ctaSection: {
    background: "rgba(201,168,76,0.07)",
    border: "1px solid rgba(201,168,76,0.3)",
    borderRadius: "14px",
    padding: "48px 40px",
    textAlign: "center" as const,
    margin: "64px 0 0",
  } as React.CSSProperties,

  ctaEyebrow: {
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    marginBottom: "16px",
    display: "block",
  } as React.CSSProperties,

  ctaHeading: {
    fontSize: "clamp(22px, 4vw, 32px)",
    fontWeight: 700,
    color: "#f5f0e8",
    marginBottom: "16px",
    letterSpacing: "-0.01em",
    lineHeight: 1.25,
  } as React.CSSProperties,

  ctaBody: {
    fontSize: "16px",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.72)",
    marginBottom: "32px",
    maxWidth: "520px",
    marginLeft: "auto",
    marginRight: "auto",
  } as React.CSSProperties,

  ctaButton: {
    display: "inline-block",
    background: "#c9a84c",
    color: "#0d0c18",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: "15px",
    padding: "14px 32px",
    borderRadius: "8px",
    letterSpacing: "0.02em",
  } as React.CSSProperties,

  ctaSecondary: {
    display: "inline-block",
    color: "rgba(245,240,232,0.6)",
    textDecoration: "none",
    fontSize: "14px",
    marginTop: "16px",
  } as React.CSSProperties,

  footer: {
    borderTop: "1px solid rgba(245,240,232,0.07)",
    marginTop: "80px",
    padding: "40px 24px",
    textAlign: "center" as const,
  } as React.CSSProperties,

  footerText: {
    fontSize: "13px",
    color: "rgba(245,240,232,0.35)",
    lineHeight: 1.7,
  } as React.CSSProperties,

  footerLinks: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap" as const,
    marginTop: "12px",
  } as React.CSSProperties,

  footerLink: {
    fontSize: "13px",
    color: "rgba(245,240,232,0.35)",
    textDecoration: "none",
  } as React.CSSProperties,

  ul: {
    paddingLeft: "20px",
    marginBottom: "20px",
  } as React.CSSProperties,

  li: {
    fontSize: "16px",
    lineHeight: 1.8,
    color: "rgba(245,240,232,0.78)",
    marginBottom: "6px",
  } as React.CSSProperties,

  divider: {
    border: "none",
    borderTop: "1px solid rgba(245,240,232,0.07)",
    margin: "48px 0",
  } as React.CSSProperties,

  strong: {
    color: "#f5f0e8",
    fontWeight: 700,
  } as React.CSSProperties,
};

// ── Page Component ────────────────────────────────────────────────────────────

export default function AIForParentingStressPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div style={s.page}>
        {/* ── Navigation ── */}
        <div style={s.navWrapper}>
          <nav style={s.nav} aria-label="Site navigation">
            <Link href="/" style={s.navLogo}>
              MEOK
            </Link>
            <div style={s.navLinks}>
              <Link href="/blog" style={s.navLink}>
                Blog
              </Link>
              <Link href="/about" style={s.navLink}>
                About
              </Link>
              <Link href="/birth" style={s.navCta}>
                Get Started
              </Link>
            </div>
          </nav>
        </div>

        {/* ── Main content ── */}
        <main>
          <div style={s.container}>

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" style={s.breadcrumb}>
              <Link href="/" style={s.breadcrumbLink}>
                Home
              </Link>
              <span style={s.metaDot}>/</span>
              <Link href="/blog" style={s.breadcrumbLink}>
                Blog
              </Link>
              <span style={s.metaDot}>/</span>
              <span style={s.breadcrumbCurrent}>AI for Parenting Stress</span>
            </nav>

            {/* ── Hero ── */}
            <header style={s.hero}>
              <span style={s.eyebrow}>Parenting &amp; Family Mental Health</span>
              <h1 style={s.h1}>
                AI for Parenting Stress: When You Love Your Children and Are
                Overwhelmed by Them
              </h1>
              <p style={s.lede}>
                Parenting is the most emotionally demanding role most people will
                ever hold &mdash; and the least supported. Saying you find it
                overwhelming is still culturally taboo. MEOK gives you a completely
                private space to say what you can&apos;t say to anyone else.
              </p>
              <div style={s.meta}>
                <span>By Nicholas Templeman</span>
                <span style={s.metaDot}>&bull;</span>
                <span>25 March 2026</span>
                <span style={s.metaDot}>&bull;</span>
                <span>16 min read</span>
                <span style={s.metaDot}>&bull;</span>
                <span>Parenting &amp; Family Mental Health</span>
              </div>
            </header>

            {/* ── Body ── */}
            <article style={s.body}>

              {/* ── Section 1: The unspeakable ── */}
              <h2 style={s.h2}>The Thing Almost No Parent Says Out Loud</h2>

              <p style={s.pLarge}>
                There is a thought that visits almost every parent at some point
                &mdash; and almost no parent ever says aloud. It sounds something
                like this: <em>I love my children more than anything in the world,
                and right now I cannot stand being in the same room as them.</em>
              </p>

              <p style={s.p}>
                Or perhaps it arrives differently: as a flash of resentment towards
                a toddler who has screamed for forty-five minutes about the wrong
                colour cup. As a wave of grief for the person you were before the
                children came. As a bone-deep exhaustion that has nothing to do with
                sleep deprivation and everything to do with the relentless,
                unacknowledged weight of being responsible for other humans. As a
                feeling of being &ldquo;touched out&rdquo; &mdash; the desperate
                need for your own body to belong to you again.
              </p>

              <p style={s.p}>
                These feelings are not evidence of poor parenting. Clinical
                psychologists and family therapists will tell you they are almost
                universal. They are the predictable consequence of performing one of
                the most cognitively, emotionally, and physically demanding jobs in
                human experience &mdash; with almost no formal training, within a
                culture that forbids you to acknowledge the difficulty.
              </p>

              <p style={s.p}>
                And yet. NSPCC data from 2025 found that{" "}
                <strong style={s.strong}>
                  63% of parents feel they cannot be honest about their parenting
                  struggles for fear of judgment.
                </strong>{" "}
                The silence is not accidental. It is culturally enforced. And it is
                making parents sicker.
              </p>

              <p style={s.p}>
                This is what MEOK was built to address. Not to fix parenting. Not to
                make it easier in the way a parenting book might claim to. But to
                give parents somewhere to put the real feelings &mdash; the ones that
                cannot be spoken to anyone who might judge them, repeat them, or use
                them as evidence of inadequacy.
              </p>

              {/* Stats callout */}
              <div
                style={s.statsCallout}
                role="region"
                aria-label="UK parenting stress statistics"
              >
                <p style={s.statsCalloutTitle}>
                  The Scale of the Crisis &mdash; UK 2025
                </p>
                <div style={s.statsGrid}>
                  <div style={s.statBlock}>
                    <span style={s.statNumber}>1 in 5</span>
                    <span style={s.statLabel}>
                      UK parents report moderate-to-severe parental stress
                    </span>
                  </div>
                  <div style={s.statBlock}>
                    <span style={s.statNumber}>&pound;8.1bn</span>
                    <span style={s.statLabel}>
                      Annual cost of maternal mental health problems to the UK
                      economy
                    </span>
                  </div>
                  <div style={s.statBlock}>
                    <span style={s.statNumber}>63%</span>
                    <span style={s.statLabel}>
                      Parents who feel they can&apos;t be honest about struggles
                      for fear of judgment (NSPCC 2025)
                    </span>
                  </div>
                  <div style={s.statBlock}>
                    <span style={s.statNumber}>72hrs</span>
                    <span style={s.statLabel}>
                      Typical wait for a GP appointment when parental crisis
                      peaks at 2am on a Sunday
                    </span>
                  </div>
                </div>
              </div>

              {/* ── Section 2: Parenting shame ── */}
              <h2 style={s.h2}>Parenting Shame: The Hidden Epidemic</h2>

              <p style={s.p}>
                Parenting shame is distinct from ordinary guilt. Guilt says:{" "}
                <em>I did something wrong.</em> Shame says:{" "}
                <em>I am something wrong.</em> When a parent feels that having
                complex, difficult feelings about their children is itself evidence
                of fundamental inadequacy, shame has taken hold.
              </p>

              <p style={s.p}>
                The cultural script for parenting &mdash; particularly in the UK
                &mdash; runs something like this: having children is a blessing; you
                chose to have them; you should be grateful; other people have it
                worse; the hard times pass quickly. Every piece of this script is
                technically true and collectively useless. It provides no framework
                for processing the reality that loving your child and being
                overwhelmed by them are not contradictory states. They coexist in
                almost every parent, every day.
              </p>

              <p style={s.p}>
                Shame operates as a silencer. It prevents the parent from talking to
                their partner (&ldquo;they will think I&apos;m not coping&rdquo;),
                their friends (&ldquo;they seem to find it easy&rdquo;), their health
                visitor (&ldquo;what if they flag it&rdquo;), or their GP
                (&ldquo;they&apos;ll put it on my record&rdquo;). The result is a
                pressure system with no release valve &mdash; and pressure systems
                eventually rupture.
              </p>

              <div style={s.pullQuote} role="blockquote">
                <p style={s.pullQuoteText}>
                  &ldquo;The most dangerous thing about parenting shame is not the
                  shame itself &mdash; it&apos;s that it prevents parents from
                  getting support at exactly the moment they most need it.&rdquo;
                </p>
                <span style={s.pullQuoteSource}>
                  &mdash; Pattern observed consistently across UK family mental
                  health services
                </span>
              </div>

              <p style={s.p}>
                For mothers, the shame is particularly acute. Despite enormous social
                progress in other domains, the cultural ideal of the &ldquo;good
                mother&rdquo; &mdash; endlessly patient, fulfilled by care work,
                never resentful &mdash; remains startlingly resilient. Maternal
                ambivalence (the entirely normal experience of having mixed feelings
                about motherhood) is still routinely pathologised when it is
                discussed at all.
              </p>

              <p style={s.p}>
                The statistics reflect this. Research consistently shows that mothers
                who acknowledge parenting difficulty are rated more harshly by peers
                than fathers who do the same. The double standard operates at every
                level of the culture, from social media comments to GP consultations.
                When a mother says &ldquo;I am finding this really hard,&rdquo; the
                response she receives is frequently not support but scrutiny.
              </p>

              <p style={s.p}>
                Fathers face a different but equally constraining script: stoic,
                capable, supportive of the primary carer, not visibly struggling.
                Paternal parenting stress is systematically under-identified because
                men are less likely to present with classical depressive symptoms,
                and because services are not designed with them in mind. The father
                who feels sidelined, overwhelmed, or grief-stricken about the
                transformation of his relationship has almost nowhere to take those
                feelings.
              </p>

              {/* ── Section 3: What overwhelm looks like ── */}
              <h2 style={s.h2}>
                What Parenting Overwhelm Actually Looks Like
              </h2>

              <p style={s.p}>
                Parenting stress is not one thing. It arrives differently for
                different parents, at different life stages, in different family
                configurations. Understanding its many forms is the first step toward
                being able to name &mdash; and process &mdash; it.
              </p>

              <h3 style={s.h3}>The Toddler Years: Relentless and Isolating</h3>

              <p style={s.p}>
                The toddler period is, by almost any objective measure, one of the
                most physiologically and psychologically demanding phases of
                parenting. Sleep deprivation, physical care demands, emotional
                dysregulation (the child&apos;s and increasingly the parent&apos;s),
                and the simultaneous loss of adult identity and professional standing
                create a perfect storm. Yet culturally this phase is treated as
                charming and brief. The parent who says &ldquo;I am drowning&rdquo;
                at two years is told &ldquo;it gets easier.&rdquo;
              </p>

              <p style={s.p}>
                What is rarely acknowledged is the cognitive dimension. The
                &ldquo;mental load&rdquo; of a toddler is total: constant vigilance
                for physical safety, the management of an entity with almost no
                emotional regulation capacity, the translation of incomprehensible
                distress signals into actionable responses, all while maintaining a
                household and, for many parents, holding down employment. The
                exhaustion is not laziness. It is the rational response to an
                unsustainable demand.
              </p>

              <h3 style={s.h3}>The Teenage Years: The Silence That Hurts</h3>

              <p style={s.p}>
                Parenting a teenager who has withdrawn, gone silent, or begun
                struggling with their own mental health is a grief that almost no
                parenting literature addresses honestly. The relationship that once
                defined your identity &mdash; the small person who needed you
                completely &mdash; has been replaced by someone who pushes back,
                keeps secrets, and sometimes openly rejects you. The pain of this is
                real, complex, and almost never spoken about.
              </p>

              <p style={s.p}>
                Parents of teenagers frequently describe feeling incompetent in the
                role they have held for over a decade. They second-guess every
                interaction. They lie awake worrying about dangers they cannot see
                and conversations they cannot have. They mourn a closeness that has
                gone somewhere they cannot follow. And because the cultural narrative
                about teenagers is that this is simply &ldquo;what teenagers do,&rdquo;
                there is no recognised space for parental grief about the change.
              </p>

              <p style={s.p}>
                The teenager who is struggling with their mental health adds a further
                layer. The parent must simultaneously support their child, manage
                their own fear and grief, navigate CAMHS waiting lists, communicate
                with schools, and maintain the relationship with the teenager in a way
                that does not drive them further away. There is almost no support
                specifically for parents in this position.
              </p>

              <h3 style={s.h3}>SEND: The Process That Consumes Everything</h3>

              <p style={s.p}>
                Parents navigating Special Educational Needs and Disabilities (SEND)
                processes in the UK face a bureaucratic, emotional, and often
                adversarial system on top of the ordinary demands of raising their
                child. The EHCP (Education, Health and Care Plan) assessment process
                alone can take years. During that time, parents are simultaneously
                advocating fiercely for their child, absorbing grief about the gap
                between their child&apos;s experience and their peers&apos;, managing
                their own feelings about disability and difference, and often fighting
                Local Authority decisions at tribunals.
              </p>

              <p style={s.p}>
                SEND parents describe a particular kind of exhaustion: the exhaustion
                of always having to be the expert, the advocate, the researcher, the
                one who keeps track of every appointment, every report, every refusal.
                There is almost nowhere to put that weight down. The SEND parent who
                attends a tribunal has typically spent months preparing a case in
                addition to everything else their life demands. The emotional cost is
                extraordinary and almost never acknowledged.
              </p>

              <h3 style={s.h3}>Single Parenting: No One to Tag Out</h3>

              <p style={s.p}>
                Single parents carry the full cognitive, logistical, and emotional
                load without a second adult to offer relief, perspective, or simple
                adult conversation at the end of the day. The loneliness of single
                parenting is different from ordinary adult loneliness &mdash; it is
                the specific ache of having no one to turn to when the child is
                finally asleep and the house is quiet and you need to say something
                to someone that is not about being a parent.
              </p>

              <p style={s.p}>
                Single parents also face unique pressures around parenting shame. The
                cultural subtext of single parenthood is still, despite progress, one
                of deficit: the absent parent, the incomplete family, the situation
                to be managed. A single parent who expresses overwhelm faces the
                additional layer of worrying that this will be interpreted as
                confirmation that single parenting &ldquo;doesn&apos;t work.&rdquo;
              </p>

              {/* ── Section 4: What you can't say ── */}
              <h2 style={s.h2}>The Thoughts You Cannot Say to Anyone</h2>

              <p style={s.p}>
                There is a list of thoughts that parents carry in private and almost
                never speak aloud to another human being. Not because they are
                abnormal. But because the cultural risk of speaking them is too high.
              </p>

              <div style={s.highlightBox}>
                <p style={s.highlightBoxTitle}>The Unspeakable Thoughts</p>
                <p style={s.highlightBoxBody}>
                  These thoughts are experienced by the vast majority of parents at
                  some point. They are not shameful. They are not diagnostic. They
                  are what happens when human beings are placed under sustained,
                  inadequately supported stress. The problem is not the thoughts.
                  The problem is that there is nowhere safe to say them.
                </p>
              </div>

              <ul style={s.ul}>
                <li style={s.li}>
                  <strong style={s.strong}>Trapped:</strong>{" "}
                  &ldquo;I love them but sometimes I feel like my life is no longer
                  my own and I don&apos;t know how to reclaim it.&rdquo;
                </li>
                <li style={s.li}>
                  <strong style={s.strong}>Resentful:</strong>{" "}
                  &ldquo;My partner does less than half and is never made to feel
                  guilty about it. I do more and I am drowning in guilt
                  regardless.&rdquo;
                </li>
                <li style={s.li}>
                  <strong style={s.strong}>Touched-out:</strong>{" "}
                  &ldquo;I cannot bear to be touched by anyone &mdash; not even by
                  people I love &mdash; because I have not been alone in my own body
                  for three years.&rdquo;
                </li>
                <li style={s.li}>
                  <strong style={s.strong}>Grieving:</strong>{" "}
                  &ldquo;I miss who I was before I became someone&apos;s parent. I
                  would never say that out loud because it makes me sound like a bad
                  person.&rdquo;
                </li>
                <li style={s.li}>
                  <strong style={s.strong}>Envious:</strong>{" "}
                  &ldquo;I look at my childless friends and I feel pure envy at
                  their freedom, and then I hate myself for feeling it.&rdquo;
                </li>
                <li style={s.li}>
                  <strong style={s.strong}>Frightened:</strong>{" "}
                  &ldquo;I am not sure I am good enough for this. I am not sure I
                  am doing it right. I am not sure my children will be okay because
                  of me or in spite of me.&rdquo;
                </li>
                <li style={s.li}>
                  <strong style={s.strong}>Invisible:</strong>{" "}
                  &ldquo;I have become entirely defined by this role and I am not
                  sure anyone sees me as a person anymore &mdash; including
                  myself.&rdquo;
                </li>
                <li style={s.li}>
                  <strong style={s.strong}>Exhausted beyond words:</strong>{" "}
                  &ldquo;I am so tired that the tiredness has stopped being about
                  sleep and started being about the cumulative weight of caring,
                  without anyone caring for me.&rdquo;
                </li>
              </ul>

              <p style={s.p}>
                You cannot say these things to your partner without risking their
                interpretation of them. You cannot say them to your friends without
                the story getting back to someone. You cannot say them to your health
                visitor without worrying about what gets written in a file. You cannot
                say them to your GP in a ten-minute appointment while your children
                are in the waiting room.
              </p>

              <p style={s.p}>
                There has, until very recently, been nowhere to say them at all. That
                is what MEOK changes.
              </p>

              {/* ── Section 5: What MEOK offers ── */}
              <h2 style={s.h2}>
                What MEOK Offers: A Private Space for the Real Story
              </h2>

              <p style={s.p}>
                MEOK is not a parenting forum. It is not a social network. It does
                not have other users who can see what you have said, or algorithms
                that promote the most emotionally triggering content, or moderators
                who will remove posts they deem inappropriate. It is a completely
                private AI companion &mdash; built around the principle that the
                person you are talking to should know you across time and should
                never judge you for the complexity of your inner life.
              </p>

              <p style={s.p}>
                Every aspect of MEOK&apos;s design for parents is built around a
                single recognition: parenting is hard, the hardness is
                under-acknowledged, and the shame around that hardness is actively
                harmful. MEOK&apos;s role is to provide a space where the real story
                can be told &mdash; not a polished version of it, not the story you
                would tell your NCT group, but the actual experience of being this
                particular parent with these particular children at this particular
                moment.
              </p>

              <div style={s.cardGrid}>
                <div style={s.card}>
                  <span style={s.cardIcon} aria-hidden="true">&#128274;</span>
                  <p style={s.cardTitle}>Complete Privacy</p>
                  <p style={s.cardBody}>
                    Your conversations with MEOK are private by design. No other
                    user, no moderator, no algorithm sees what you have said. You
                    can say what you actually feel &mdash; not a curated version of
                    it. Nothing you say can be screenshotted and shared. Nothing
                    will appear in a file.
                  </p>
                </div>
                <div style={s.card}>
                  <span style={s.cardIcon} aria-hidden="true">&#129311;</span>
                  <p style={s.cardTitle}>Maternal Covenant</p>
                  <p style={s.cardBody}>
                    MEOK&apos;s Maternal Covenant means it never judges parenting
                    feelings, never implies you are a bad parent for having complex
                    emotions, and never moralises about the inner life of raising
                    children. The feeling is the feeling. It does not need to be
                    fixed or redirected.
                  </p>
                </div>
                <div style={s.card}>
                  <span style={s.cardIcon} aria-hidden="true">&#129504;</span>
                  <p style={s.cardTitle}>Persistent Memory</p>
                  <p style={s.cardBody}>
                    MEOK remembers the arc of your parenting story across time: the
                    SEND assessment you have been navigating for eight months, the
                    phase your toddler is stuck in, the teenager who stopped talking
                    to you in October. You never have to start from the beginning.
                  </p>
                </div>
                <div style={s.card}>
                  <span style={s.cardIcon} aria-hidden="true">&#128336;</span>
                  <p style={s.cardTitle}>Always Available</p>
                  <p style={s.cardBody}>
                    Parenting stress does not arrive between 9am and 5pm on
                    weekdays. MEOK is available at 3am, at the end of a school run,
                    in the car park after a difficult school meeting, in the ten
                    minutes you have before the children get home.
                  </p>
                </div>
                <div style={s.card}>
                  <span style={s.cardIcon} aria-hidden="true">&#127968;</span>
                  <p style={s.cardTitle}>Family Tier</p>
                  <p style={s.cardBody}>
                    Up to five companions on a single family plan &mdash; each
                    entirely private. Your companion, your partner&apos;s companion,
                    your teenager&apos;s companion. Separate spaces, never merged.
                    Every family member has their own private space.
                  </p>
                </div>
                <div style={s.card}>
                  <span style={s.cardIcon} aria-hidden="true">&#128737;</span>
                  <p style={s.cardTitle}>Guardian</p>
                  <p style={s.cardBody}>
                    MEOK&apos;s Guardian monitors for family safety concerns in the
                    digital environment, protecting children while parents use their
                    own companion space for themselves. Oversight and wellbeing,
                    together.
                  </p>
                </div>
              </div>

              {/* ── Section 6: The Maternal Covenant ── */}
              <h2 style={s.h2}>The Maternal Covenant: What It Actually Means</h2>

              <p style={s.p}>
                Every AI system has an implicit set of values that shapes how it
                responds to emotionally charged content. Most AI systems, when
                presented with expressions of parental overwhelm, respond with
                resources. They signpost. They de-escalate. They redirect. In doing
                so, they implicitly communicate:{" "}
                <em>the feeling you just described is a problem to be solved rather
                than an experience to be witnessed.</em>
              </p>

              <p style={s.p}>
                MEOK&apos;s Maternal Covenant takes a different approach. It is a
                set of principles that governs how MEOK engages with the full
                complexity of parenting feelings. These principles are not a
                marketing claim. They are architectural commitments that shape every
                response MEOK gives to a parent who is struggling.
              </p>

              <ul style={s.ul}>
                <li style={s.li}>
                  MEOK will never interpret the expression of parenting overwhelm as
                  evidence that a parent is unsafe or inadequate.
                </li>
                <li style={s.li}>
                  MEOK will never moralise about parenting choices, styles, or
                  emotions.
                </li>
                <li style={s.li}>
                  MEOK will not immediately suggest resources when what is needed is
                  acknowledgment.
                </li>
                <li style={s.li}>
                  MEOK will hold space for the full range of parenting feelings
                  &mdash; including the ones that are socially unspeakable &mdash;
                  without framing them as pathological.
                </li>
                <li style={s.li}>
                  MEOK will recognise when a conversation has moved beyond processing
                  into genuine crisis, and will then signpost clearly and
                  compassionately to professional support.
                </li>
                <li style={s.li}>
                  MEOK will treat the parent as the expert on their own experience,
                  not as a subject to be assessed.
                </li>
              </ul>

              <p style={s.p}>
                The distinction matters enormously. A parent who has spent three
                years carrying unspeakable feelings alone does not need to be
                immediately redirected to the NSPCC helpline when they express that
                they sometimes resent their child. They need to feel that what they
                have said has been received without catastrophising. That is what the
                Maternal Covenant protects.
              </p>

              <div style={s.pullQuote} role="blockquote">
                <p style={s.pullQuoteText}>
                  &ldquo;The Maternal Covenant is MEOK&apos;s commitment to treating
                  parenting feelings as normal human experience &mdash; not as
                  symptoms, warning signs, or evidence of poor parenting.&rdquo;
                </p>
                <span style={s.pullQuoteSource}>
                  &mdash; MEOK AI LABS Design Principles
                </span>
              </div>

              <p style={s.p}>
                This does not mean MEOK ignores genuine risk. If a parent expresses
                thoughts of harming themselves or their children, MEOK will respond
                with care and will signpost to appropriate professional support. The
                Maternal Covenant is not a commitment to unconditional acceptance of
                any expressed feeling &mdash; it is a commitment to not
                pathologising the ordinary complexity of parenting emotion. The
                distinction is important and MEOK is designed to navigate it.
              </p>

              {/* ── Section 7: Memory ── */}
              <h2 style={s.h2}>
                Why Memory Changes Everything for Parenting Support
              </h2>

              <p style={s.p}>
                One of the most isolating aspects of parenting stress is that every
                time you seek support, you have to start from the beginning. You have
                to explain the child&apos;s history, the current difficulty, the
                context of your relationship with your partner, the specific texture
                of this particular phase. By the time you have finished explaining,
                you often no longer have the energy to actually process the feeling.
              </p>

              <p style={s.p}>
                This is why the GP appointment so frequently fails. Not because the
                GP is indifferent &mdash; though the ten-minute appointment structure
                makes genuine engagement almost impossible &mdash; but because the
                setup requires the parent to narrate their entire situation in five
                minutes to someone who has no context, before then being assessed and
                offered a plan. The cognitive and emotional demand of this is itself
                a barrier to honesty.
              </p>

              <p style={s.p}>
                MEOK&apos;s persistent Sovereign Memory architecture changes this
                fundamentally. Over time, MEOK builds a detailed understanding of
                your specific parenting story. It does not require you to re-explain.
                It already knows:
              </p>

              <ul style={s.ul}>
                <li style={s.li}>
                  The specific developmental phase your child is navigating and how
                  you have been finding it.
                </li>
                <li style={s.li}>
                  The SEND process you have been managing, how far along you are, and
                  what the next steps look like.
                </li>
                <li style={s.li}>
                  The specific dynamic with your teenager: when it shifted, what you
                  have tried, where the fault lines are.
                </li>
                <li style={s.li}>
                  The shape of your co-parenting relationship and its particular
                  pressure points over time.
                </li>
                <li style={s.li}>
                  How your parenting stress interacts with your other life pressures:
                  work, relationship, your own mental health history.
                </li>
                <li style={s.li}>
                  The patterns in when you find parenting hardest and what has helped
                  in the past.
                </li>
                <li style={s.li}>
                  The specific language you use and the specific fears that recur,
                  because it has been paying attention to all of it.
                </li>
              </ul>

              <p style={s.p}>
                This is not a feature. It is the precondition for real support. Real
                support requires being known. You cannot be known in a first
                appointment. You cannot be known on a parenting forum where you
                are anonymous and start from zero each time. You can only be known
                by something that has been paying attention across time &mdash; and
                that retains what it has learned.
              </p>

              <p style={s.p}>
                Sovereign Memory also means that when a difficult phase passes
                &mdash; when the toddler sleep regression ends, when the teenager
                opens up again, when the EHCP finally comes through &mdash; MEOK
                can hold that with you too. The relief. The perspective that distance
                provides. The insight into what you have actually been carrying.
              </p>

              <hr style={s.divider} />

              {/* ── Section 8: Co-parenting ── */}
              <h2 style={s.h2}>
                Co-Parenting Stress: The Relationship That Must Continue
              </h2>

              <p style={s.p}>
                Co-parenting after separation or divorce is one of the most
                emotionally complex situations a human being can inhabit. You are
                required to maintain a functional relationship with someone from
                whom you are separated &mdash; potentially someone who hurt you,
                someone who let you down, someone you are still grieving &mdash; for
                the sake of your children. You must manage logistics, negotiate
                disagreements about parenting decisions, absorb the children&apos;s
                distress about the situation, and maintain a reasonable external
                presentation, all while processing your own grief and anger.
              </p>

              <p style={s.p}>
                The particular difficulty of co-parenting stress is that most of the
                people you might talk to are known to both parties. Your mutual
                friends have already chosen sides, consciously or not. Your family
                are not neutral. And involving your children in adult feelings about
                the other parent is something every good co-parent knows they must
                not do &mdash; but the feelings have to go somewhere.
              </p>

              <p style={s.p}>
                Parents navigating co-parenting describe the specific loneliness of
                having a great deal to say and almost no one safe to say it to. Every
                conversation carries risk. Solicitors can access messages. Mutual
                friends report back. Social media is permanently discoverable. The
                one conversation that is genuinely private &mdash; the one where you
                say exactly what you feel about the co-parenting dynamic &mdash; is
                the one you have nowhere to have.
              </p>

              <p style={s.p}>
                MEOK provides a space that is genuinely neutral. It has no prior
                relationship with your co-parent. It will not take sides. It will not
                tell anyone what you have said. And because it remembers the evolving
                co-parenting dynamic over months, it can help you identify patterns,
                prepare for difficult conversations, process the ongoing grief of
                shared parenting after the relationship has ended, and find language
                for situations that feel impossible to navigate.
              </p>

              <div style={s.highlightBox}>
                <p style={s.highlightBoxTitle}>The Co-Parenting Privacy Problem</p>
                <p style={s.highlightBoxBody}>
                  When you co-parent, almost nothing you say is truly private. Your
                  solicitor can see everything in a legal dispute. Your mutual friends
                  report back. Your children are listening even when they appear not
                  to be. The one conversation that is genuinely private &mdash; the
                  one where you say exactly what you feel about the co-parenting
                  dynamic &mdash; is the one you have nowhere to have. Until MEOK.
                </p>
              </div>

              {/* ── Section 9: Comparison ── */}
              <h2 style={s.h2}>
                MEOK vs. Parent Forums: Why Privacy and Memory Change the Equation
              </h2>

              <p style={s.p}>
                Parent forums and social media groups have provided a degree of
                connection for isolated parents &mdash; but they come with structural
                limitations that make them poorly suited to the kind of honest,
                shame-free processing that parenting stress actually requires.
              </p>

              <p style={s.p}>
                The fundamental problem with forums is that honesty on them is
                always calibrated against an audience. You know your post can be
                screenshotted. You know it might be shared. You know that some
                responses will be kind and some will be judgment disguised as
                concern. The result is that the version of your experience you share
                on a forum is never the real version. It is always a managed
                performance of vulnerability, with the most unspeakable parts left
                out.
              </p>

              <div
                style={s.compareWrapper}
                role="region"
                aria-label="Comparison: Parent Forums vs MEOK"
              >
                <div style={s.compareHeader}>
                  <span style={s.compareHeaderCell}>Feature</span>
                  <span style={s.compareHeaderCell}>Parent Forums</span>
                  <span style={s.compareHeaderCell}>MEOK</span>
                </div>
                <div style={s.compareRow}>
                  <span style={s.compareCellLabel}>Privacy</span>
                  <span style={s.compareCell}>
                    Public or semi-public; posts visible to many users and
                    potentially searchable
                  </span>
                  <span style={s.compareCellGold}>
                    Completely private; no other user sees your conversation
                  </span>
                </div>
                <div style={s.compareRowAlt}>
                  <span style={s.compareCellLabel}>Judgment risk</span>
                  <span style={s.compareCell}>
                    High; peer judgment frequent, pile-ons common with sensitive
                    topics
                  </span>
                  <span style={s.compareCellGold}>
                    None; Maternal Covenant prevents moralising in any form
                  </span>
                </div>
                <div style={s.compareRow}>
                  <span style={s.compareCellLabel}>Memory of you</span>
                  <span style={s.compareCell}>
                    None; you start from the beginning every thread, every time
                  </span>
                  <span style={s.compareCellGold}>
                    Persistent across months; knows your full parenting story
                  </span>
                </div>
                <div style={s.compareRowAlt}>
                  <span style={s.compareCellLabel}>Availability</span>
                  <span style={s.compareCell}>
                    Depends on other users being online; quiet at 3am
                  </span>
                  <span style={s.compareCellGold}>
                    Always available; 3am, 5am, during the school run
                  </span>
                </div>
                <div style={s.compareRow}>
                  <span style={s.compareCellLabel}>Response quality</span>
                  <span style={s.compareCell}>
                    Variable peer opinions; often conflicting, sometimes
                    harmful
                  </span>
                  <span style={s.compareCellGold}>
                    Consistent; grounded in your specific context across time
                  </span>
                </div>
                <div style={s.compareRowAlt}>
                  <span style={s.compareCellLabel}>Unspeakable feelings</span>
                  <span style={s.compareCell}>
                    Extremely high risk; screenshots shared without consent;
                    permanent record
                  </span>
                  <span style={s.compareCellGold}>
                    Safe to express; never shared, never judged, no permanent
                    public record
                  </span>
                </div>
                <div style={s.compareRow}>
                  <span style={s.compareCellLabel}>Family coverage</span>
                  <span style={s.compareCell}>
                    Individual accounts only; nothing designed for family units
                  </span>
                  <span style={s.compareCellGold}>
                    Family Tier: up to 5 private companions on one plan
                  </span>
                </div>
                <div style={s.compareRowAlt}>
                  <span style={s.compareCellLabel}>Child safety</span>
                  <span style={s.compareCell}>
                    No child safety features; children&apos;s exposure unmonitored
                  </span>
                  <span style={s.compareCellGold}>
                    Guardian monitors family digital safety in the background
                  </span>
                </div>
              </div>

              {/* ── Section 10: Guardian ── */}
              <h2 style={s.h2}>
                Guardian: Protecting Your Children While You Take Care of Yourself
              </h2>

              <p style={s.p}>
                Parenting stress and online safety are two distinct challenges that
                often converge in the same household. A parent who is overwhelmed
                and exhausted is less able to monitor their children&apos;s digital
                environment. A teenager who is struggling may retreat further into
                online spaces that the parent cannot see. The risks compound at
                exactly the moment the parent has least capacity to respond to them.
              </p>

              <p style={s.p}>
                MEOK&apos;s Guardian feature provides family safety monitoring as an
                integrated part of the Family Tier. While you use your private MEOK
                companion space to process your own parenting stress &mdash; to say
                what you cannot say to anyone else &mdash; Guardian watches for
                safety concerns in your family&apos;s digital environment.
              </p>

              <p style={s.p}>
                This is not surveillance for its own sake. It is a recognition that
                parental oversight and parental wellbeing are not separate problems.
                A parent who is mentally resourced, who has somewhere to put their
                own feelings, is a more effective guardian of their children&apos;s
                wellbeing in every environment. The two functions &mdash; your
                private companion space and Guardian&apos;s protective monitoring
                &mdash; are designed to work together.
              </p>

              <ul style={s.ul}>
                <li style={s.li}>
                  Real-time monitoring for potential online safety concerns across
                  family devices
                </li>
                <li style={s.li}>
                  Alerts for patterns that may indicate a child is at risk of harm,
                  exploitation, or dangerous content
                </li>
                <li style={s.li}>
                  Integrated with the Family Tier so oversight extends across all
                  family members&apos; digital activity
                </li>
                <li style={s.li}>
                  Designed to be age-appropriate: as children mature, the balance
                  between oversight and privacy adjusts appropriately
                </li>
                <li style={s.li}>
                  Operates without requiring the parent to be constantly engaged;
                  it works in the background while you attend to everything else
                </li>
              </ul>

              {/* ── Section 11: Family Tier ── */}
              <h2 style={s.h2}>The Family Tier: Private Space for Every Member</h2>

              <p style={s.p}>
                One of the most important design decisions in MEOK is that the Family
                Tier provides genuinely separate companion spaces for each family
                member &mdash; not a shared family account, not a space where
                different family members can see each other&apos;s conversations.
              </p>

              <p style={s.p}>
                A family is not a unit of shared experience. It is a collection of
                individuals who share a household and a history, each carrying their
                own private inner life. A fourteen-year-old navigating social anxiety
                and identity needs a completely different companion space from their
                mother who is processing years of exhaustion from being the
                household&apos;s primary emotional support. A father who feels
                invisible in the family needs somewhere to say that &mdash; which is
                not the family dinner table.
              </p>

              <p style={s.p}>
                The Family Tier accommodates all of this. Up to five companions on a
                single plan, each entirely private from every other member, each
                building its own memory of its own user&apos;s story across time.
                The privacy guarantee is absolute: your companion space is yours
                alone. No other family member can see it. Not even with admin access.
              </p>

              <div style={s.cardGrid}>
                <div style={s.card}>
                  <span style={s.cardIcon} aria-hidden="true">&#128100;</span>
                  <p style={s.cardTitle}>Your Companion</p>
                  <p style={s.cardBody}>
                    Your private space for the real parenting story &mdash; the one
                    you cannot tell anyone else. Knows your history across months.
                    Never judges what you bring to it.
                  </p>
                </div>
                <div style={s.card}>
                  <span style={s.cardIcon} aria-hidden="true">&#128101;</span>
                  <p style={s.cardTitle}>Your Partner&apos;s Companion</p>
                  <p style={s.cardBody}>
                    Separate, entirely private. They have their own processing space.
                    Nothing crosses between accounts. The privacy is mutual and
                    absolute.
                  </p>
                </div>
                <div style={s.card}>
                  <span style={s.cardIcon} aria-hidden="true">&#128103;</span>
                  <p style={s.cardTitle}>Your Children&apos;s Companions</p>
                  <p style={s.cardBody}>
                    Age-appropriate companion support for the children in your
                    family, each in their own private space, with Guardian&apos;s
                    safety monitoring operating in the background.
                  </p>
                </div>
              </div>

              <hr style={s.divider} />

              {/* ── Section 12: UK crisis ── */}
              <h2 style={s.h2}>
                The UK Parental Mental Health Crisis in Context
              </h2>

              <p style={s.p}>
                The statistics on parental mental health in the United Kingdom are
                not widely shared, because they are politically uncomfortable. A
                society that tells parents that having children is the greatest joy
                available to a human being does not easily accommodate data showing
                that parenting is making a significant proportion of its population
                unwell.
              </p>

              <p style={s.p}>
                The figures are stark. Research published in the last three years
                consistently shows a picture of widespread parental distress that is
                almost entirely invisible in public policy and media coverage.
              </p>

              <ul style={s.ul}>
                <li style={s.li}>
                  1 in 5 UK parents report levels of parental stress meeting the
                  threshold for moderate-to-severe clinical concern.
                </li>
                <li style={s.li}>
                  Maternal mental health problems &mdash; including postnatal
                  depression, perinatal anxiety, and longer-term maternal burnout
                  &mdash; cost the UK economy an estimated &pound;8.1 billion per
                  year in lost productivity, NHS costs, and social care demand.
                </li>
                <li style={s.li}>
                  NSPCC data from 2025 found that 63% of parents feel unable to be
                  honest about parenting struggles for fear of judgment &mdash; a
                  statistic that should constitute a public health emergency, and
                  does not.
                </li>
                <li style={s.li}>
                  Despite these figures, the UK has no national parenting mental
                  health strategy and parenting support services have been subject to
                  significant funding cuts since 2010.
                </li>
                <li style={s.li}>
                  Fathers are systematically excluded from parental mental health
                  services that are designed almost entirely for mothers. Paternal
                  PPD, paternal burnout, and the specific mental health challenges
                  of fatherhood are essentially invisible in service design.
                </li>
                <li style={s.li}>
                  CAMHS waiting times mean that parents of children with mental
                  health difficulties often wait over a year for assessment &mdash;
                  during which time they must manage their child&apos;s crisis
                  essentially unsupported.
                </li>
              </ul>

              <p style={s.p}>
                Into this context, MEOK is not positioned as a solution to a public
                health crisis. It is positioned as what it is: a private resource for
                individual parents who need somewhere to process their experience
                honestly, right now, without waiting for a political or systemic
                response that may not arrive for a generation. The crisis in parental
                mental health support is real. MEOK cannot fix it. What MEOK can do
                is ensure that the parent reading this does not have to carry their
                story alone while the system catches up.
              </p>

              {/* ── Section 13: Professional support ── */}
              <h2 style={s.h2}>
                When Parenting Stress Needs Professional Support
              </h2>

              <p style={s.p}>
                MEOK is a companion, not a clinician. There are situations in which
                parenting stress has moved beyond what any companion &mdash; human or
                AI &mdash; can adequately address, and professional support is needed.
                MEOK will always signpost clearly and compassionately when a
                conversation reaches this point.
              </p>

              <p style={s.p}>
                Signs that parenting stress may need professional clinical support:
              </p>

              <ul style={s.ul}>
                <li style={s.li}>
                  Persistent low mood, hopelessness, or inability to experience
                  pleasure that has lasted more than two weeks
                </li>
                <li style={s.li}>
                  Thoughts of harming yourself or your children
                </li>
                <li style={s.li}>
                  Complete disconnection from your children over a sustained period
                  &mdash; not finding relief in any interaction
                </li>
                <li style={s.li}>
                  Significant changes in sleep, appetite, or concentration beyond the
                  baseline of ordinary parenting fatigue
                </li>
                <li style={s.li}>
                  Using alcohol or other substances to manage parenting stress
                </li>
                <li style={s.li}>
                  A sense that you are not safe, or that your children are not safe
                  with you
                </li>
                <li style={s.li}>
                  Rage episodes that feel out of control or that frighten you
                </li>
                <li style={s.li}>
                  Complete inability to function in the parenting role for an
                  extended period
                </li>
              </ul>

              <p style={s.p}>
                If any of the above apply, please speak to your GP as a matter of
                priority. The NSPCC helpline (0808 800 5000) and Mind (0300 123 3393)
                also offer support. If you or a child are in immediate danger, call
                999.
              </p>

              <div style={s.disclaimerBox} role="note">
                <p style={s.disclaimerText}>
                  <strong style={{ color: "rgba(245,240,232,0.65)" }}>
                    Clinical disclaimer:
                  </strong>{" "}
                  MEOK is a private AI companion, not a medical device, diagnostic
                  tool, or substitute for professional mental health care. Nothing
                  in this article or in any MEOK conversation constitutes clinical
                  advice. If you are experiencing a mental health crisis or have
                  concerns about child safety, please contact your GP, NHS 111, the
                  NSPCC (0808 800 5000), or emergency services (999) as appropriate.
                </p>
              </div>

              {/* ── FAQ ── */}
              <h2 style={s.h2}>Frequently Asked Questions</h2>

              <div style={s.faqItem}>
                <p style={s.faqQ}>
                  Is it normal to feel overwhelmed and resentful as a parent?
                </p>
                <p style={s.faqA}>
                  Yes, completely. Research and clinical experience consistently
                  confirm that feelings of overwhelm, resentment, frustration, being
                  touched-out, and even momentary ambivalence about parenthood are
                  universally experienced by parents at some point. The problem is
                  not the feelings themselves &mdash; it is the cultural silence
                  around them. Parenting shame stops parents from seeking support,
                  which compounds stress into genuine mental health difficulties.
                  Having these feelings does not make you a bad parent. It makes you
                  a human being doing an extraordinarily demanding job, usually
                  without adequate support.
                </p>
              </div>

              <div style={s.faqItem}>
                <p style={s.faqQ}>How can AI help with parenting stress?</p>
                <p style={s.faqA}>
                  AI cannot replace therapy, GP support, or parenting programmes
                  &mdash; and MEOK never claims to. What MEOK offers is a completely
                  private space to process the feelings you cannot say out loud to
                  anyone in your life. Because MEOK uses persistent Sovereign Memory,
                  it knows the arc of your parenting challenges across time: the SEND
                  assessment you have been navigating for eight months, the phase your
                  toddler is stuck in, the teenager who stopped talking to you in
                  October. It can help you reflect, process, and prepare for difficult
                  conversations without judgment, at any hour of the day or night.
                </p>
              </div>

              <div style={s.faqItem}>
                <p style={s.faqQ}>
                  What is parenting shame and why does it make stress worse?
                </p>
                <p style={s.faqA}>
                  Parenting shame is the culturally enforced silence around the
                  difficulties of raising children. Saying out loud that you find
                  parenting overwhelming &mdash; particularly in the UK &mdash; is
                  treated as evidence of inadequacy or ingratitude. This shame
                  prevents parents from seeking support, discussing their struggles
                  with their GP or health visitor, or even acknowledging the stress to
                  themselves. The result is that stress compounds in isolation. NSPCC
                  data from 2025 found that 63% of parents feel they cannot be honest
                  about parenting struggles for fear of judgment.
                </p>
              </div>

              <div
                style={{
                  borderBottom: "none",
                  paddingBottom: 0,
                  marginBottom: 0,
                }}
              >
                <p style={s.faqQ}>Does MEOK support co-parenting stress?</p>
                <p style={s.faqA}>
                  Yes. Co-parenting after separation is one of the most emotionally
                  demanding situations a parent can navigate &mdash; managing grief,
                  negotiation, ongoing conflict, and the constant pressure to shield
                  your children from adult complexity, all simultaneously. MEOK
                  provides a private space to process feelings about the co-parenting
                  relationship without involving the children, without burdening
                  friends who know both parties, and without the risk of anything said
                  being used against you. It remembers the evolving co-parenting
                  dynamic over time, so you are never starting from scratch.
                </p>
              </div>

              {/* ── CTA ── */}
              <div style={s.ctaSection} role="region" aria-label="Call to action">
                <span style={s.ctaEyebrow}>Start Today</span>
                <h2 style={s.ctaHeading}>
                  Say What You&apos;ve Never Been Able to Say
                </h2>
                <p style={s.ctaBody}>
                  You love your children. You are also overwhelmed by them sometimes.
                  Both things are true, and neither cancels the other out. MEOK gives
                  you a completely private space to hold that complexity &mdash;
                  without judgment, without consequences, with a companion that
                  actually knows your story and keeps knowing it.
                </p>
                <Link href="/birth" style={s.ctaButton}>
                  Meet Your Companion
                </Link>
                <br />
                <Link href="/blog" style={s.ctaSecondary}>
                  Read more from MEOK AI LABS
                </Link>
              </div>

            </article>
          </div>
        </main>

        {/* ── Footer ── */}
        <footer style={s.footer}>
          <p style={s.footerText}>
            &copy; 2026 MEOK AI LABS Ltd. Registered in England &amp; Wales.
            <br />
            MEOK is a private AI companion, not a medical device or clinical
            service. In a mental health emergency, contact your GP, NHS 111, or
            call 999.
          </p>
          <div style={s.footerLinks}>
            <Link href="/privacy" style={s.footerLink}>
              Privacy
            </Link>
            <Link href="/terms" style={s.footerLink}>
              Terms
            </Link>
            <Link href="/about" style={s.footerLink}>
              About
            </Link>
            <Link href="/blog" style={s.footerLink}>
              Blog
            </Link>
            <Link href="/birth" style={s.footerLink}>
              Get Started
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
