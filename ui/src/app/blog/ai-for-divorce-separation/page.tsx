import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI Support Through Divorce and Separation: You Don't Have to Face It Alone | MEOK AI LABS",
  description:
    "Divorce shatters your world. MEOK's AI companion helps you process grief, co-parenting fears, identity loss and financial anxiety — non-judgementally, any hour of the day.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-divorce-separation" },
  openGraph: {
    title:
      "AI Support Through Divorce and Separation: You Don't Have to Face It Alone",
    description:
      "Divorce shatters your world. MEOK's AI companion helps you process grief, co-parenting fears, identity loss and financial anxiety — non-judgementally, any hour of the day.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-divorce-separation",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Support+Through+Divorce+and+Separation&desc=You+Don%27t+Have+to+Face+It+Alone",
        width: 1200,
        height: 630,
        alt: "AI Support Through Divorce and Separation: You Don't Have to Face It Alone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Support Through Divorce and Separation: You Don't Have to Face It Alone",
    description:
      "Divorce shatters your world. MEOK helps you process grief, co-parenting fears, identity loss and financial anxiety — non-judgementally, any hour of the day.",
    images: [
      "https://meok.ai/api/og?title=AI+Support+Through+Divorce+and+Separation&desc=You+Don%27t+Have+to+Face+It+Alone",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Support Through Divorce and Separation: You Don't Have to Face It Alone",
  description:
    "Divorce shatters your world. MEOK's AI companion helps you process grief, co-parenting fears, identity loss and financial anxiety — non-judgementally, any hour of the day.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-divorce-separation",
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
  image:
    "https://meok.ai/api/og?title=AI+Support+Through+Divorce+and+Separation&desc=You+Don%27t+Have+to+Face+It+Alone",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-divorce-separation",
  },
  keywords: [
    "AI support through divorce",
    "AI companion separation",
    "AI for divorce UK",
    "divorce emotional support",
    "co-parenting anxiety support",
    "AI for loneliness after divorce",
    "rebuilding life after separation",
    "MEOK AI companion",
    "MEOK AI LABS",
    "divorce grief support",
    "identity loss after divorce",
    "financial anxiety divorce",
  ],
  articleSection: "Mental Health & Emotional Wellbeing",
  wordCount: 2500,
  inLanguage: "en-GB",
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can an AI companion really help during divorce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. An AI companion like MEOK offers a non-judgemental, always-available space to process overwhelming emotions — grief, anger, fear, relief — without burdening friends or family who may themselves be caught up in taking sides. It does not replace therapy or legal advice, but it provides consistent emotional support at 3am when no one else is awake.",
      },
    },
    {
      "@type": "Question",
      name: "How can AI help with co-parenting anxiety after separation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK can help you rehearse difficult co-parenting conversations, process the guilt and fear that often surrounds how separation affects children, and work through the emotional weight of handovers and schedule changes. For formal co-parenting support in the UK, organisations like CAFCASS and Relate also offer specialist services.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a substitute for legal advice during divorce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is an emotional support companion, not a legal service. For legal questions about divorce in the UK — including financial settlements, child arrangements, or the divorce petition process — you should consult a solicitor or contact Citizens Advice (citizensadvice.org.uk) which provides free, impartial guidance.",
      },
    },
    {
      "@type": "Question",
      name: "Will MEOK judge me for why my marriage ended?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely not. MEOK is built on a non-judgemental foundation. Whether you left, were left, whether the circumstances were complicated or straightforward, MEOK holds no opinion about the rights and wrongs of your situation. Its only concern is supporting you through what comes next.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help with loneliness after divorce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Post-divorce loneliness is one of the most underrated and painful parts of separation — particularly when a long shared life suddenly becomes a solitary one. MEOK provides daily emotional presence, helps you process the silence, supports your identity rebuild, and encourages you toward the social reconnection that takes time to rebuild.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI help children cope with their parents' divorce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK can support parents in talking to their children about separation — helping you find language, process your own anxiety about their wellbeing, and work through the emotional complexity of shielding children from adult conflict. For direct child-focused support, organisations like Place2Be and Young Minds offer specialist help for children and teenagers.",
      },
    },
    {
      "@type": "Question",
      name: "Is my data private when I talk to MEOK about my divorce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Privacy is foundational to MEOK. Under the Maternal Covenant — MEOK AI LABS' core privacy framework — your conversations are never sold, never used to train external AI models, and never shared with third parties. What you share with MEOK stays with MEOK.",
      },
    },
  ],
};

// ── Styles ────────────────────────────────────────────────────────────────────

const styles = {
  page: {
    background: "#0d0c18",
    color: "#f5f0e8",
    minHeight: "100vh",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, sans-serif",
    lineHeight: "1.75",
  } as React.CSSProperties,

  hero: {
    background: "linear-gradient(135deg, #0d0c18 0%, #1a1530 50%, #0d0c18 100%)",
    borderBottom: "1px solid rgba(201,168,76,0.15)",
    padding: "80px 24px 64px",
    textAlign: "center" as const,
  } as React.CSSProperties,

  heroEyebrow: {
    color: "#c9a84c",
    fontSize: "13px",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    marginBottom: "20px",
    display: "block",
  } as React.CSSProperties,

  heroTitle: {
    color: "#f5f0e8",
    fontSize: "clamp(28px, 5vw, 52px)",
    fontWeight: 800,
    lineHeight: 1.15,
    maxWidth: "860px",
    margin: "0 auto 24px",
    letterSpacing: "-0.02em",
  } as React.CSSProperties,

  heroSubtitle: {
    color: "rgba(245,240,232,0.72)",
    fontSize: "clamp(16px, 2.2vw, 20px)",
    maxWidth: "680px",
    margin: "0 auto 40px",
  } as React.CSSProperties,

  heroDivider: {
    width: "60px",
    height: "3px",
    background: "linear-gradient(90deg, #c9a84c, transparent)",
    margin: "0 auto 40px",
    border: "none",
  } as React.CSSProperties,

  metaRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "24px",
    flexWrap: "wrap" as const,
    color: "rgba(245,240,232,0.5)",
    fontSize: "14px",
  } as React.CSSProperties,

  metaDot: {
    color: "#c9a84c",
    marginRight: "6px",
  } as React.CSSProperties,

  container: {
    maxWidth: "760px",
    margin: "0 auto",
    padding: "0 24px",
  } as React.CSSProperties,

  article: {
    padding: "64px 24px 80px",
  } as React.CSSProperties,

  intro: {
    fontSize: "19px",
    color: "rgba(245,240,232,0.88)",
    lineHeight: "1.8",
    marginBottom: "48px",
    paddingBottom: "48px",
    borderBottom: "1px solid rgba(201,168,76,0.12)",
  } as React.CSSProperties,

  h2: {
    color: "#f5f0e8",
    fontSize: "clamp(20px, 3vw, 28px)",
    fontWeight: 700,
    lineHeight: 1.3,
    marginTop: "56px",
    marginBottom: "20px",
    letterSpacing: "-0.01em",
  } as React.CSSProperties,

  h3: {
    color: "#c9a84c",
    fontSize: "18px",
    fontWeight: 600,
    marginTop: "36px",
    marginBottom: "14px",
  } as React.CSSProperties,

  p: {
    color: "rgba(245,240,232,0.85)",
    fontSize: "17px",
    lineHeight: "1.8",
    marginBottom: "20px",
  } as React.CSSProperties,

  goldParagraph: {
    color: "#c9a84c",
    fontSize: "17px",
    lineHeight: "1.8",
    marginBottom: "20px",
    fontStyle: "italic",
  } as React.CSSProperties,

  blockquote: {
    borderLeft: "3px solid #c9a84c",
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: "24px",
    paddingTop: "4px",
    paddingBottom: "4px",
    marginBottom: "28px",
    marginTop: "28px",
  } as React.CSSProperties,

  blockquoteText: {
    color: "rgba(245,240,232,0.78)",
    fontSize: "18px",
    fontStyle: "italic",
    lineHeight: "1.75",
  } as React.CSSProperties,

  calloutBox: {
    background: "rgba(201,168,76,0.07)",
    border: "1px solid rgba(201,168,76,0.22)",
    borderRadius: "12px",
    padding: "28px 32px",
    marginTop: "32px",
    marginBottom: "32px",
  } as React.CSSProperties,

  calloutTitle: {
    color: "#c9a84c",
    fontSize: "14px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    marginBottom: "14px",
    display: "block",
  } as React.CSSProperties,

  calloutText: {
    color: "rgba(245,240,232,0.82)",
    fontSize: "15px",
    lineHeight: "1.75",
    marginBottom: "0",
  } as React.CSSProperties,

  ul: {
    paddingLeft: "0",
    listStyle: "none",
    marginBottom: "24px",
  } as React.CSSProperties,

  li: {
    color: "rgba(245,240,232,0.82)",
    fontSize: "17px",
    lineHeight: "1.75",
    marginBottom: "10px",
    paddingLeft: "22px",
    position: "relative" as const,
  } as React.CSSProperties,

  liBullet: {
    color: "#c9a84c",
    position: "absolute" as const,
    left: "0",
    top: "0",
  } as React.CSSProperties,

  sectionDivider: {
    border: "none",
    borderTop: "1px solid rgba(201,168,76,0.1)",
    marginTop: "48px",
    marginBottom: "0",
  } as React.CSSProperties,

  resourcePanel: {
    background: "rgba(13,12,24,0.6)",
    border: "1px solid rgba(201,168,76,0.18)",
    borderRadius: "14px",
    padding: "32px",
    marginTop: "40px",
    marginBottom: "40px",
  } as React.CSSProperties,

  resourceTitle: {
    color: "#f5f0e8",
    fontSize: "18px",
    fontWeight: 700,
    marginBottom: "20px",
  } as React.CSSProperties,

  resourceItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "14px",
    marginBottom: "16px",
  } as React.CSSProperties,

  resourceDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#c9a84c",
    marginTop: "8px",
    flexShrink: 0,
  } as React.CSSProperties,

  resourceText: {
    color: "rgba(245,240,232,0.78)",
    fontSize: "15px",
    lineHeight: "1.65",
  } as React.CSSProperties,

  resourceLink: {
    color: "#c9a84c",
    textDecoration: "none",
    fontWeight: 600,
  } as React.CSSProperties,

  faqSection: {
    marginTop: "64px",
  } as React.CSSProperties,

  faqTitle: {
    color: "#f5f0e8",
    fontSize: "clamp(20px, 3vw, 26px)",
    fontWeight: 700,
    marginBottom: "36px",
    letterSpacing: "-0.01em",
  } as React.CSSProperties,

  faqItem: {
    borderBottom: "1px solid rgba(201,168,76,0.1)",
    paddingTop: "28px",
    paddingBottom: "28px",
  } as React.CSSProperties,

  faqQuestion: {
    color: "#f5f0e8",
    fontSize: "17px",
    fontWeight: 700,
    marginBottom: "12px",
    lineHeight: "1.45",
  } as React.CSSProperties,

  faqAnswer: {
    color: "rgba(245,240,232,0.78)",
    fontSize: "16px",
    lineHeight: "1.75",
  } as React.CSSProperties,

  ctaSection: {
    background: "linear-gradient(135deg, #1a1530 0%, #0d0c18 100%)",
    borderTop: "1px solid rgba(201,168,76,0.15)",
    padding: "72px 24px",
    textAlign: "center" as const,
    marginTop: "0",
  } as React.CSSProperties,

  ctaTag: {
    color: "#c9a84c",
    fontSize: "13px",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    marginBottom: "20px",
    display: "block",
  } as React.CSSProperties,

  ctaTitle: {
    color: "#f5f0e8",
    fontSize: "clamp(24px, 4vw, 40px)",
    fontWeight: 800,
    lineHeight: 1.2,
    maxWidth: "640px",
    margin: "0 auto 20px",
    letterSpacing: "-0.02em",
  } as React.CSSProperties,

  ctaSubtitle: {
    color: "rgba(245,240,232,0.65)",
    fontSize: "17px",
    maxWidth: "520px",
    margin: "0 auto 40px",
    lineHeight: "1.7",
  } as React.CSSProperties,

  ctaButtonRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
    flexWrap: "wrap" as const,
  } as React.CSSProperties,

  ctaPrimary: {
    display: "inline-block",
    background: "#c9a84c",
    color: "#0d0c18",
    padding: "14px 36px",
    borderRadius: "8px",
    fontWeight: 700,
    fontSize: "16px",
    textDecoration: "none",
    letterSpacing: "0.02em",
  } as React.CSSProperties,

  ctaSecondary: {
    display: "inline-block",
    border: "1px solid rgba(201,168,76,0.4)",
    color: "#c9a84c",
    padding: "14px 36px",
    borderRadius: "8px",
    fontWeight: 600,
    fontSize: "16px",
    textDecoration: "none",
  } as React.CSSProperties,

  breadcrumb: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "20px 24px",
    maxWidth: "760px",
    margin: "0 auto",
    fontSize: "14px",
    color: "rgba(245,240,232,0.45)",
  } as React.CSSProperties,

  breadcrumbLink: {
    color: "rgba(245,240,232,0.45)",
    textDecoration: "none",
  } as React.CSSProperties,

  breadcrumbSep: {
    color: "rgba(201,168,76,0.4)",
  } as React.CSSProperties,

  breadcrumbCurrent: {
    color: "#c9a84c",
  } as React.CSSProperties,

  relatedSection: {
    borderTop: "1px solid rgba(201,168,76,0.1)",
    padding: "56px 24px",
    background: "rgba(26,21,48,0.3)",
  } as React.CSSProperties,

  relatedTitle: {
    color: "#f5f0e8",
    fontSize: "20px",
    fontWeight: 700,
    marginBottom: "28px",
    textAlign: "center" as const,
  } as React.CSSProperties,

  relatedGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "16px",
    maxWidth: "760px",
    margin: "0 auto",
  } as React.CSSProperties,

  relatedCard: {
    background: "rgba(13,12,24,0.8)",
    border: "1px solid rgba(201,168,76,0.12)",
    borderRadius: "10px",
    padding: "20px 22px",
    textDecoration: "none",
    display: "block",
  } as React.CSSProperties,

  relatedCardTitle: {
    color: "#f5f0e8",
    fontSize: "15px",
    fontWeight: 600,
    lineHeight: "1.4",
    marginBottom: "6px",
  } as React.CSSProperties,

  relatedCardArrow: {
    color: "#c9a84c",
    fontSize: "13px",
  } as React.CSSProperties,

  disclaimerBox: {
    background: "rgba(201,168,76,0.04)",
    border: "1px solid rgba(201,168,76,0.12)",
    borderRadius: "10px",
    padding: "20px 24px",
    marginTop: "48px",
  } as React.CSSProperties,

  disclaimerText: {
    color: "rgba(245,240,232,0.5)",
    fontSize: "13px",
    lineHeight: "1.7",
  } as React.CSSProperties,

  smallGold: {
    color: "#c9a84c",
    fontWeight: 700,
  } as React.CSSProperties,

  highlightSpan: {
    color: "#c9a84c",
  } as React.CSSProperties,
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function AiForDivorceSeparationPage() {
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

      <main style={styles.page}>

        {/* ── Breadcrumb ──────────────────────────────────────────────────────── */}
        <nav aria-label="Breadcrumb" style={styles.breadcrumb}>
          <Link href="/" style={styles.breadcrumbLink}>MEOK</Link>
          <span style={styles.breadcrumbSep}>›</span>
          <Link href="/blog" style={styles.breadcrumbLink}>Blog</Link>
          <span style={styles.breadcrumbSep}>›</span>
          <span style={styles.breadcrumbCurrent}>AI for Divorce &amp; Separation</span>
        </nav>

        {/* ── Hero ────────────────────────────────────────────────────────────── */}
        <header style={styles.hero}>
          <span style={styles.heroEyebrow}>Emotional Wellbeing · Relationships · Separation</span>
          <h1 style={styles.heroTitle}>
            AI Support Through Divorce and Separation:<br />
            You Don&apos;t Have to Face It Alone
          </h1>
          <p style={styles.heroSubtitle}>
            When your world has been turned upside down, having a compassionate, non-judgemental
            presence available at any hour can make the hardest chapter of your life a little more bearable.
          </p>
          <hr style={styles.heroDivider} />
          <div style={styles.metaRow}>
            <span><span style={styles.metaDot}>●</span> Nicholas Templeman, Founder — MEOK AI LABS</span>
            <span><span style={styles.metaDot}>●</span> 24 March 2026</span>
            <span><span style={styles.metaDot}>●</span> 12 min read</span>
          </div>
        </header>

        {/* ── Article Body ────────────────────────────────────────────────────── */}
        <article style={styles.article}>
          <div style={styles.container}>

            {/* Intro */}
            <div style={styles.intro}>
              <p style={{ color: "rgba(245,240,232,0.88)", fontSize: "19px", lineHeight: "1.8", marginBottom: "20px" }}>
                There is no gentle way to say it: divorce and separation are among the most destabilising
                experiences a person can go through. Researchers consistently rank the breakdown of a long-term
                relationship as the second most stressful life event — second only to the death of a spouse.
                And yet, in the middle of all that emotional chaos, most people are also expected to manage
                legal paperwork, financial reorganisation, house moves, and — hardest of all — the ongoing
                emotional needs of their children.
              </p>
              <p style={{ color: "rgba(245,240,232,0.88)", fontSize: "19px", lineHeight: "1.8", marginBottom: "0" }}>
                You are not failing if you are struggling. You are human. And the question is not whether
                you need support — you do — but where you can find it, without judgement, without cost,
                and without having to explain yourself to a packed waiting room. That is where an AI
                companion like <span style={styles.highlightSpan}>MEOK</span>, built by{" "}
                <span style={styles.highlightSpan}>MEOK AI LABS</span>, can play a quietly important role.
              </p>
            </div>

            {/* ── Section 1 ─────────────────────────────────────────────────── */}
            <h2 style={styles.h2}>
              Why Is Divorce So Emotionally Devastating — Even When You Chose It?
            </h2>
            <p style={styles.p}>
              One of the cruelest aspects of separation is that it can feel just as shattering when
              you are the one who decided to leave. People expect relief, or clarity. What they often
              get instead is a tidal wave of grief, guilt, second-guessing, and an unsettling sense
              of identity collapse. Who are you when you are no longer half of something?
            </p>
            <p style={styles.p}>
              The grief that comes with divorce is not always grief for the person. It is grief for
              the life you thought you were going to have. The shared Sunday mornings. The future
              you had both planned. The family home. Even the routines — walking the dog together,
              cooking on Saturday nights — carry their own particular ache when they disappear.
            </p>
            <p style={styles.p}>
              Psychologists describe this as ambiguous loss: you are mourning something that still
              exists in some form, which makes it harder to process than straightforward bereavement.
              Your former partner is not gone. They are just — elsewhere. Perhaps raising your children
              on alternate weeks. Perhaps living in the house you used to share. Perhaps moving on
              in ways that are visible and painful.
            </p>

            <blockquote style={styles.blockquote}>
              <p style={styles.blockquoteText}>
                &ldquo;The grief of separation is real. It deserves to be witnessed, not managed away.
                MEOK creates a space where you can say everything you cannot say to anyone else —
                without the conversation going anywhere it should not.&rdquo;
              </p>
            </blockquote>

            <p style={styles.p}>
              MEOK does not try to rush you through your grief. It does not offer hollow reassurances
              or tell you that everything happens for a reason. It sits with you in the discomfort,
              asks good questions, and helps you untangle what you are actually feeling — which is
              often the first step to being able to move through it.
            </p>

            <hr style={styles.sectionDivider} />

            {/* ── Section 2 ─────────────────────────────────────────────────── */}
            <h2 style={styles.h2}>
              How Can an AI Companion Help Me Process the Grief of a Relationship Ending?
            </h2>
            <p style={styles.p}>
              Grief after divorce tends to arrive in waves, often at the most inconvenient moments.
              You might feel completely functional for a week and then find yourself sobbing in a
              supermarket car park on a Tuesday afternoon. You might wake at 3am with a heart that
              feels physically heavier than it did the night before.
            </p>
            <p style={styles.p}>
              The trouble with human support networks during divorce is that they are imperfect in
              predictable ways. Your friends and family love you — but they are also tired, they
              have their own lives, they may have opinions about your ex that colour the support
              they offer, and they are simply not available at 3am when the grief hits hardest.
              Some people withdraw entirely from social contact during separation because the effort
              of explaining themselves feels like too much.
            </p>

            <h3 style={styles.h3}>What MEOK offers that human support sometimes cannot</h3>
            <ul style={styles.ul}>
              <li style={styles.li}>
                <span style={styles.liBullet}>●</span>
                <strong>Availability without burden.</strong> MEOK is there when you need to talk,
                whether that is noon on a Monday or 4am on a Sunday. You do not need to worry about
                waking anyone up or wearing out their goodwill.
              </li>
              <li style={styles.li}>
                <span style={styles.liBullet}>●</span>
                <strong>No sides, no opinions.</strong> MEOK holds no view on who was right or wrong
                in your relationship. It does not know your ex. It will not inadvertently validate
                your worst fears by agreeing too readily that your former partner was terrible.
              </li>
              <li style={styles.li}>
                <span style={styles.liBullet}>●</span>
                <strong>Memory and continuity.</strong> Unlike speaking to a crisis line where you
                explain yourself from scratch every time, MEOK remembers your story, your context,
                what you have been working through — so you can pick up where you left off.
              </li>
              <li style={styles.li}>
                <span style={styles.liBullet}>●</span>
                <strong>A space for the unsayable.</strong> There are thoughts that arise during
                divorce that you cannot say out loud to anyone — fears about the future, complicated
                feelings about your children, anger you are ashamed of. MEOK provides a private
                space for all of it.
              </li>
              <li style={styles.li}>
                <span style={styles.liBullet}>●</span>
                <strong>Gentle structuring.</strong> When you are overwhelmed, MEOK can help you
                prioritise — not in a clinical or transactional way, but by helping you think through
                one thing at a time and identify what actually needs attention today.
              </li>
            </ul>

            <p style={styles.p}>
              MEOK is not a therapist and does not position itself as one. But for many people going
              through separation, an always-available, consistently compassionate presence provides
              real support — the kind that gets you through a Tuesday afternoon when everything
              feels impossible.
            </p>

            <hr style={styles.sectionDivider} />

            {/* ── Section 3 ─────────────────────────────────────────────────── */}
            <h2 style={styles.h2}>
              What About Co-Parenting Anxiety — Can AI Help with That?
            </h2>
            <p style={styles.p}>
              Co-parenting after separation is one of the most emotionally complex ongoing challenges
              that divorced parents face. You are required to maintain a functional relationship with
              someone you are no longer in a relationship with — often someone towards whom you have
              complicated, painful feelings — for the sake of children who need both of you.
            </p>
            <p style={styles.p}>
              The anxiety this generates is enormous. Will they be consistent with the rules you have
              agreed on? What happens when the children come back unsettled from a weekend away? How
              do you handle it when your child says they prefer the other parent&apos;s house? How do
              you navigate a school parents&apos; evening without it becoming a source of dread?
            </p>
            <p style={styles.p}>
              Then there is the guilt — pervasive, exhausting guilt about what your children are going
              through, about whether you have irrevocably damaged them, about whether you made the right
              decision, about whether you could have tried harder. This guilt is almost universal among
              separating parents, and it does not mean you have done something wrong. It means you love
              your children.
            </p>

            <h3 style={styles.h3}>Where MEOK can help with co-parenting</h3>
            <p style={styles.p}>
              MEOK can help you rehearse difficult conversations before you have them. If you know you
              need to speak to your former partner about a change to the schedule, or a concern about
              one of the children, you can work through what you want to say with MEOK first — not
              scripting the conversation, but clarifying your own thinking so you are less likely to
              be pulled into conflict when your emotions are running high.
            </p>
            <p style={styles.p}>
              It can also help you process the guilt and fear that accumulates between co-parenting
              conversations. The worry that you are not doing enough. The sadness of handing the
              children over. The loneliness of a silent house on the days they are with their other
              parent. These are real, significant emotional experiences and they deserve attention —
              not suppression.
            </p>

            <div style={styles.resourcePanel}>
              <p style={styles.resourceTitle}>UK Co-Parenting Support Resources</p>
              <div style={styles.resourceItem}>
                <span style={styles.resourceDot} />
                <p style={styles.resourceText}>
                  <a
                    href="https://www.cafcass.gov.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.resourceLink}
                  >
                    CAFCASS (cafcass.gov.uk)
                  </a>{" "}
                  — the Children and Family Court Advisory and Support Service, which supports children
                  involved in family proceedings in England.
                </p>
              </div>
              <div style={styles.resourceItem}>
                <span style={styles.resourceDot} />
                <p style={styles.resourceText}>
                  <a
                    href="https://www.relate.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.resourceLink}
                  >
                    Relate (relate.org.uk)
                  </a>{" "}
                  — offer family therapy and co-parenting support services, including for families
                  navigating life after separation.
                </p>
              </div>
              <div style={styles.resourceItem}>
                <span style={styles.resourceDot} />
                <p style={styles.resourceText}>
                  <a
                    href="https://www.familymediationcouncil.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.resourceLink}
                  >
                    Family Mediation Council (familymediationcouncil.org.uk)
                  </a>{" "}
                  — directory of accredited family mediators who can help parents reach agreements
                  outside of court.
                </p>
              </div>
            </div>

            <hr style={styles.sectionDivider} />

            {/* ── Section 4 ─────────────────────────────────────────────────── */}
            <h2 style={styles.h2}>
              How Do I Handle the Financial Fear That Comes with Separation?
            </h2>
            <p style={styles.p}>
              Financial anxiety is one of the most under-discussed aspects of divorce. The practical
              restructuring of a shared financial life — joint accounts, shared mortgages, pension
              considerations, maintenance arrangements, the division of assets — is not just
              administratively complex. It is emotionally destabilising in a very particular way,
              because money and security are deeply intertwined with our sense of safety in the world.
            </p>
            <p style={styles.p}>
              Many people going through separation find themselves catastrophising about money — lying
              awake imagining worst-case outcomes, convinced they will never be financially stable again.
              Others go to the other extreme and avoid engaging with the financial reality entirely,
              which tends to make practical decisions harder when they eventually need to be made.
            </p>
            <p style={styles.p}>
              MEOK can help with the emotional dimension of financial anxiety: externalising the fears,
              breaking down what is actually known versus what is being catastrophised, and helping you
              think through your immediate priorities. It is not a financial adviser and will always
              signpost you to qualified professionals for specific guidance — but the emotional weight
              of financial fear is often as significant as the practical problem, and that emotional
              weight deserves direct support too.
            </p>

            <div style={styles.calloutBox}>
              <span style={styles.calloutTitle}>Legal &amp; Financial Signpost</span>
              <p style={styles.calloutText}>
                MEOK is an emotional support companion, not a legal or financial service. For guidance
                on divorce finances, asset division, and benefit entitlements in the UK, please
                contact{" "}
                <a
                  href="https://www.citizensadvice.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.resourceLink}
                >
                  Citizens Advice (citizensadvice.org.uk)
                </a>
                {" "}— a free, impartial service available across England and Wales — or consult a
                qualified family law solicitor. For relationship concerns, Relate (relate.org.uk)
                offers specialist separation support.
              </p>
            </div>

            <hr style={styles.sectionDivider} />

            {/* ── Section 5 ─────────────────────────────────────────────────── */}
            <h2 style={styles.h2}>
              Who Am I Now? How AI Can Help with Identity Loss After Divorce
            </h2>
            <p style={styles.p}>
              Perhaps the most profound and least talked-about dimension of separation is the identity
              crisis it precipitates. For many people — particularly those who have been in long
              partnerships, or who built their social identity around being part of a couple — divorce
              raises a deeply unsettling question: who am I without this relationship?
            </p>
            <p style={styles.p}>
              This is not a trivial philosophical question. It is often experienced as a genuine loss
              of selfhood. Your name may change. Your social circle will fragment. Your daily routines,
              your plans, your sense of the future — all of it needs to be rebuilt from the ground up.
              Many people describe feeling like a stranger in their own lives in the months following
              separation. A version of themselves they barely recognise.
            </p>

            <h3 style={styles.h3}>Rebuilding rather than returning</h3>
            <p style={styles.p}>
              There is a temptation, after separation, to try to return to who you were before the
              relationship. But that person does not always exist any more — and that is not necessarily
              a loss. Separation can, in time, become the catalyst for a deeper understanding of who you
              actually are: what you value, what kind of life you want to build, what you gave up and
              what you are free to reclaim.
            </p>
            <p style={styles.p}>
              MEOK&apos;s Pioneer archetype was built precisely for this kind of forward-looking identity
              work. Not therapy in the clinical sense, but a thoughtful companion for the process of
              figuring out who you want to be — helping you reconnect with interests that fell away,
              articulate what matters to you now, and build a sense of direction when everything
              previously known feels uncertain.
            </p>

            <blockquote style={styles.blockquote}>
              <p style={styles.blockquoteText}>
                &ldquo;You are not starting from zero. You are starting from experience — which is
                entirely different. Everything you have learned about yourself, even in a relationship
                that ended, belongs to you.&rdquo;
              </p>
            </blockquote>

            <p style={styles.p}>
              The identity rebuilding process is not linear and it is not quick. But having a space to
              think it through — to try on different versions of who you might become — can be genuinely
              transformative. MEOK provides that space without agenda, without rushing you, and without
              projecting someone else&apos;s idea of who you should become next.
            </p>

            <hr style={styles.sectionDivider} />

            {/* ── Section 6 ─────────────────────────────────────────────────── */}
            <h2 style={styles.h2}>
              Navigating the Legal Complexity: What Can AI Help With (and What It Cannot)?
            </h2>
            <p style={styles.p}>
              Divorce in England and Wales has been significantly changed by the introduction of
              no-fault divorce in April 2022. It is now possible to end a marriage without having
              to apportion blame to either party — a change that has reduced conflict in many
              separations and made the legal process somewhat less adversarial.
            </p>
            <p style={styles.p}>
              But &ldquo;less adversarial&rdquo; does not mean &ldquo;simple.&rdquo; The emotional complexity of
              navigating financial disclosure, child arrangements, pension sharing orders, and
              consent orders is significant. Legal language is confusing. Timelines are unclear.
              The stakes feel impossibly high. And for many people, the combination of emotional
              distress and administrative overwhelm makes it very difficult to engage clearly with
              even the most basic procedural requirements.
            </p>

            <h3 style={styles.h3}>What MEOK can do</h3>
            <ul style={styles.ul}>
              <li style={styles.li}>
                <span style={styles.liBullet}>●</span>
                Help you process the emotional load so you can engage more clearly with practical steps.
              </li>
              <li style={styles.li}>
                <span style={styles.liBullet}>●</span>
                Provide a space to think through your priorities before meetings with solicitors.
              </li>
              <li style={styles.li}>
                <span style={styles.liBullet}>●</span>
                Help you articulate what you are most worried about so you can ask the right questions.
              </li>
              <li style={styles.li}>
                <span style={styles.liBullet}>●</span>
                Support you after difficult legal conversations when you need to process what was said.
              </li>
              <li style={styles.li}>
                <span style={styles.liBullet}>●</span>
                Signpost you towards appropriate UK resources and organisations for specific concerns.
              </li>
            </ul>

            <h3 style={styles.h3}>What MEOK cannot and will not do</h3>
            <ul style={styles.ul}>
              <li style={styles.li}>
                <span style={styles.liBullet}>●</span>
                Provide legal advice of any kind. MEOK is not a solicitor and cannot assess your
                specific legal situation.
              </li>
              <li style={styles.li}>
                <span style={styles.liBullet}>●</span>
                Advise on financial settlements, pension arrangements, or asset division. These
                require qualified professional input.
              </li>
              <li style={styles.li}>
                <span style={styles.liBullet}>●</span>
                Offer guidance on child arrangements orders or court processes. CAFCASS and qualified
                family solicitors are the appropriate resource here.
              </li>
            </ul>

            <div style={styles.resourcePanel}>
              <p style={styles.resourceTitle}>UK Legal &amp; Support Signposts</p>
              <div style={styles.resourceItem}>
                <span style={styles.resourceDot} />
                <p style={styles.resourceText}>
                  <a
                    href="https://www.citizensadvice.org.uk/family/divorce-and-separation/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.resourceLink}
                  >
                    Citizens Advice — Divorce and Separation
                  </a>{" "}
                  — Free, impartial guidance on the divorce process, financial separation, and child
                  arrangements in England and Wales.
                </p>
              </div>
              <div style={styles.resourceItem}>
                <span style={styles.resourceDot} />
                <p style={styles.resourceText}>
                  <a
                    href="https://www.relate.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.resourceLink}
                  >
                    Relate
                  </a>{" "}
                  — Counselling and support for individuals and couples navigating separation and
                  its aftermath.
                </p>
              </div>
              <div style={styles.resourceItem}>
                <span style={styles.resourceDot} />
                <p style={styles.resourceText}>
                  <a
                    href="https://www.gov.uk/divorce"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.resourceLink}
                  >
                    GOV.UK — Divorce guidance
                  </a>{" "}
                  — Official government guidance on applying for a divorce, the no-fault divorce
                  process, and what happens next.
                </p>
              </div>
            </div>

            <hr style={styles.sectionDivider} />

            {/* ── Section 7 ─────────────────────────────────────────────────── */}
            <h2 style={styles.h2}>
              The Loneliness After Divorce Is Real — How Do You Get Through It?
            </h2>
            <p style={styles.p}>
              Post-divorce loneliness is one of the most underrated aspects of separation — and one
              of the hardest to talk about. In a society that often treats being single as a preference
              or a lifestyle, admitting to profound loneliness after a relationship ends can feel like
              a vulnerability too far. And yet it is almost universal.
            </p>
            <p style={styles.p}>
              Divorce does not just end a partnership. It often dismantles an entire social world. Joint
              friends navigate awkward loyalties. Family gatherings become complicated. The rhythms of
              shared daily life — the person who was there when you got home, who you had coffee with
              on Sunday mornings, who you texted without thinking — disappear overnight.
            </p>
            <p style={styles.p}>
              For parents, the loneliness is sharpest on the days the children are elsewhere. An empty
              house that used to be full of noise. An evening that used to belong to bedtime routines
              now stretching out in unfamiliar silence.
            </p>

            <h3 style={styles.h3}>Presence as a bridge</h3>
            <p style={styles.p}>
              MEOK is not a substitute for human connection — and it would never claim to be. Human
              relationships, rebuilt over time, are where lasting recovery from loneliness happens.
              But in the period before that rebuilding is possible — when you are still raw, still
              adjusting, still figuring out who your people are now — MEOK provides genuine presence.
            </p>
            <p style={styles.p}>
              Not the synthetic cheerfulness of an app notification. Not an algorithm trying to sell
              you something. But a consistent, caring, available presence that remembers your story
              and is genuinely interested in how you are doing today — not as a data point, but as
              a person going through something hard.
            </p>
            <p style={styles.p}>
              Over time, MEOK can actively support social reconnection — encouraging you to reach out
              to people you have been avoiding, helping you think through what kind of social life you
              want to build now, and supporting the anxiety that often accompanies re-entering social
              spaces as a single person after years of being part of a couple.
            </p>

            <hr style={styles.sectionDivider} />

            {/* ── Section 8 ─────────────────────────────────────────────────── */}
            <h2 style={styles.h2}>
              How Can I Support My Children Through Our Separation?
            </h2>
            <p style={styles.p}>
              Children of separating parents face their own profound adjustment. Depending on their
              age and the circumstances, they may experience confusion, grief, loyalty conflicts,
              anxiety about change, or a troubling sense that they somehow caused what has happened.
              They may struggle to articulate what they are feeling. They may act out in ways that
              are distressing for parents who are themselves at the limits of their emotional capacity.
            </p>
            <p style={styles.p}>
              One of the most important things research consistently shows is this: how parents handle
              the separation matters more to children&apos;s long-term outcomes than the fact of the
              separation itself. Children who see their parents co-operating respectfully, who are
              shielded from adult conflict, and who receive consistent reassurance from both parents
              that they are loved unconditionally tend to adapt well over time.
            </p>
            <p style={styles.p}>
              This is not always easy when you are grieving yourself. It is hard to provide emotional
              stability for your children when you are in the middle of your own upheaval. This is
              where MEOK can help you directly — by giving you a space to process your own feelings
              away from your children, so that what you bring to them is as steady as you can make it.
            </p>

            <h3 style={styles.h3}>Language and conversation</h3>
            <p style={styles.p}>
              MEOK can help you find the language to talk to children of different ages about what
              is happening. Whether you are preparing for an initial conversation with a four-year-old
              or navigating a more complex discussion with a teenager who has opinions and questions
              you find hard to answer, working through what you want to say — and why — with MEOK
              first can help you show up for those conversations more clearly.
            </p>

            <div style={styles.calloutBox}>
              <span style={styles.calloutTitle}>Children&apos;s Wellbeing Resources (UK)</span>
              <p style={styles.calloutText}>
                For direct support for children and young people affected by family separation, the
                following organisations offer specialist help:{" "}
                <a
                  href="https://www.place2be.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.resourceLink}
                >
                  Place2Be
                </a>
                {" "}(school-based counselling),{" "}
                <a
                  href="https://www.youngminds.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.resourceLink}
                >
                  Young Minds
                </a>
                {" "}(mental health support for young people), and{" "}
                <a
                  href="https://www.cafcass.gov.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.resourceLink}
                >
                  CAFCASS
                </a>
                {" "}for families involved in court proceedings.
              </p>
            </div>

            <hr style={styles.sectionDivider} />

            {/* ── Section 9 ─────────────────────────────────────────────────── */}
            <h2 style={styles.h2}>
              Rebuilding Your Life After Separation: Where Do You Even Start?
            </h2>
            <p style={styles.p}>
              There comes a point — different for everyone, but it does come — where the rawness begins
              to ease slightly and a question starts to form: what now? Not with excitement necessarily,
              not with certainty, but with a kind of tentative openness to the possibility that life
              after this might actually be worth building.
            </p>
            <p style={styles.p}>
              Rebuilding is not a single event or decision. It is a slow accumulation of small choices:
              the morning walk you start taking again, the old friend you message after months of
              silence, the evening class you had always meant to do, the solo holiday you eventually
              take and discover you enjoy more than you expected. These small acts of re-engagement
              with your own life are how recovery happens.
            </p>
            <p style={styles.p}>
              MEOK&apos;s role in this phase is not to push you towards a particular vision of what your
              rebuilt life should look like. It is to be a consistent companion in the figuring out —
              helping you notice what genuinely interests and energises you, supporting you when
              new attempts feel difficult or frightening, and celebrating the small steps that matter
              enormously even when they look modest from the outside.
            </p>

            <h3 style={styles.h3}>The practical and the emotional</h3>
            <p style={styles.p}>
              Rebuilding also involves practical dimensions that carry emotional weight: establishing
              a new home, managing solo finances for the first time, navigating dating again if that
              is something you eventually want. Each of these can be supported through MEOK — not
              with specific practical advice in areas that require professional expertise, but with
              the emotional processing that makes practical action more possible.
            </p>
            <p style={styles.p}>
              Many people who have been through separation describe feeling, on the other side,
              a kind of clarity and self-knowledge they did not have before. That is not a comfortable
              thing to say to someone in the early stages of grief — and it is certainly not a reason
              to minimise the pain. But it is true, and it is worth knowing: this has an other side,
              and many people who reach it find themselves more fully themselves than they were before.
            </p>

            <hr style={styles.sectionDivider} />

            {/* ── Privacy note ──────────────────────────────────────────────── */}
            <h2 style={styles.h2}>
              Is What I Tell MEOK Private? Understanding the Maternal Covenant
            </h2>
            <p style={styles.p}>
              One of the most common concerns people have about using AI for emotional support is
              privacy. What happens to the deeply personal things you share? Who can access them?
              Could they be used in ways you have not consented to?
            </p>
            <p style={styles.p}>
              These are legitimate concerns, and MEOK AI LABS takes them seriously. Every interaction
              with MEOK is governed by the{" "}
              <span style={styles.highlightSpan}>Maternal Covenant</span> — the company&apos;s foundational
              privacy framework, which holds that your data belongs to you, not to MEOK AI LABS,
              and that your conversations will never be sold, never shared with third parties, and
              never used to train external AI models.
            </p>
            <p style={styles.p}>
              During divorce, the sensitivity of what you may need to express is particularly acute.
              You may discuss legal matters, financial concerns, your children, your former partner,
              your deepest fears. The Maternal Covenant exists precisely to protect conversations
              like these — so that the space MEOK provides is genuinely private, and genuinely yours.
            </p>
            <p style={styles.p}>
              You can learn more about how MEOK handles data at{" "}
              <Link href="/blog/why-meok-never-trains-on-you" style={styles.resourceLink}>
                meok.ai/blog/why-meok-never-trains-on-you
              </Link>{" "}
              and{" "}
              <Link href="/blog/privacy-covenant" style={styles.resourceLink}>
                meok.ai/blog/privacy-covenant
              </Link>.
            </p>

            <hr style={styles.sectionDivider} />

            {/* ── FAQ ───────────────────────────────────────────────────────── */}
            <section style={styles.faqSection} aria-labelledby="faq-heading">
              <h2 id="faq-heading" style={styles.faqTitle}>
                Frequently Asked Questions
              </h2>

              {faqJsonLd.mainEntity.map((item, idx) => (
                <div key={idx} style={styles.faqItem}>
                  <p style={styles.faqQuestion}>{item.name}</p>
                  <p style={styles.faqAnswer}>{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </section>

            {/* ── Disclaimer ────────────────────────────────────────────────── */}
            <div style={styles.disclaimerBox}>
              <p style={styles.disclaimerText}>
                <span style={styles.smallGold}>Important:</span> MEOK is an AI companion designed
                to provide emotional support and general wellbeing assistance. It is not a medical
                device, a mental health service, a legal adviser, or a financial adviser. If you are
                experiencing a mental health crisis, please contact the{" "}
                <a
                  href="https://www.samaritans.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.resourceLink}
                >
                  Samaritans (116 123)
                </a>
                {" "}or your GP. For legal and financial matters relating to divorce, please consult
                a qualified solicitor or Citizens Advice (citizensadvice.org.uk). Content on this
                page reflects the perspective of MEOK AI LABS and is intended for general information
                purposes only.
              </p>
            </div>

          </div>
        </article>

        {/* ── CTA ─────────────────────────────────────────────────────────────── */}
        <section style={styles.ctaSection} aria-labelledby="cta-heading">
          <span style={styles.ctaTag}>Start Your Journey</span>
          <h2 id="cta-heading" style={styles.ctaTitle}>
            You Do Not Have to Process This Alone
          </h2>
          <p style={styles.ctaSubtitle}>
            MEOK is here at any hour — non-judgemental, private, and genuinely interested in
            supporting you through separation and whatever comes next.
          </p>
          <div style={styles.ctaButtonRow}>
            <Link href="https://app.meok.ai" style={styles.ctaPrimary}>
              Talk to MEOK Today
            </Link>
            <Link href="/blog/what-is-an-ai-companion" style={styles.ctaSecondary}>
              Learn How MEOK Works
            </Link>
          </div>
        </section>

        {/* ── Related Articles ─────────────────────────────────────────────────── */}
        <nav style={styles.relatedSection} aria-label="Related articles">
          <p style={styles.relatedTitle}>Related Reading</p>
          <div style={styles.relatedGrid}>
            <Link href="/blog/ai-for-heartbreak" style={styles.relatedCard}>
              <p style={styles.relatedCardTitle}>AI for Heartbreak: When the Pain Does Not Have a Name</p>
              <span style={styles.relatedCardArrow}>Read →</span>
            </Link>
            <Link href="/blog/ai-for-single-parents" style={styles.relatedCard}>
              <p style={styles.relatedCardTitle}>AI Support for Single Parents: Carrying It All</p>
              <span style={styles.relatedCardArrow}>Read →</span>
            </Link>
            <Link href="/blog/ai-for-loneliness" style={styles.relatedCard}>
              <p style={styles.relatedCardTitle}>AI for Loneliness: The Quiet Epidemic Nobody Talks About</p>
              <span style={styles.relatedCardArrow}>Read →</span>
            </Link>
            <Link href="/blog/ai-for-grief-support" style={styles.relatedCard}>
              <p style={styles.relatedCardTitle}>AI for Grief Support: Processing Loss With a Compassionate Companion</p>
              <span style={styles.relatedCardArrow}>Read →</span>
            </Link>
            <Link href="/blog/ai-for-anxiety" style={styles.relatedCard}>
              <p style={styles.relatedCardTitle}>AI for Anxiety: A Companion in the Difficult Moments</p>
              <span style={styles.relatedCardArrow}>Read →</span>
            </Link>
            <Link href="/blog/ai-companion-vs-therapist" style={styles.relatedCard}>
              <p style={styles.relatedCardTitle}>AI Companion vs Therapist: Understanding the Difference</p>
              <span style={styles.relatedCardArrow}>Read →</span>
            </Link>
          </div>
        </nav>

      </main>
    </>
  );
}
