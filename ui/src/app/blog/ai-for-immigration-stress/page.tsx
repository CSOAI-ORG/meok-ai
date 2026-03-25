import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Immigration Stress: Navigating the System When You're Already Exhausted | MEOK AI LABS",
  description:
    "Immigration is one of the most stressful experiences a person can face. MEOK offers a private, judgement-free companion for navigating visa applications, indefinite leave to remain, citizenship, and the emotional weight of life between two countries.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-immigration-stress",
  },
  openGraph: {
    title:
      "AI for Immigration Stress: Navigating the System When You're Already Exhausted",
    description:
      "Immigration is one of the most stressful experiences a person can face. MEOK offers a private, judgement-free companion for navigating visa applications, citizenship, and the emotional weight of life between two countries.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-immigration-stress",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Immigration+Stress&desc=Navigating+the+system+when+you%27re+already+exhausted",
        width: 1200,
        height: 630,
        alt: "AI for Immigration Stress: Navigating the System When You're Already Exhausted",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Immigration Stress: Navigating the System When You're Already Exhausted",
    description:
      "Immigration is one of the most stressful experiences a person can face. MEOK provides a private, judgement-free companion for visa applications, citizenship, and the emotional weight of life between two countries.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Immigration+Stress&desc=Navigating+the+system+when+you%27re+already+exhausted",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Immigration Stress: Navigating the System When You're Already Exhausted",
  description:
    "Immigration is one of the most stressful experiences a person can face. MEOK offers a private, judgement-free companion for navigating visa applications, indefinite leave to remain, citizenship, and the emotional weight of life between two countries.",
  datePublished: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-immigration-stress",
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
    "@id": "https://meok.ai/blog/ai-for-immigration-stress",
  },
  image:
    "https://meok.ai/api/og?title=AI+for+Immigration+Stress&desc=Navigating+the+system+when+you%27re+already+exhausted",
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with immigration stress?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AI companions like MEOK can provide a consistent, private space to process the anxiety, confusion, and emotional exhaustion that comes with navigating immigration systems. MEOK does not replace immigration lawyers or official advice, but it offers something equally important: a companion that is available at any hour, holds context about your situation across conversations, helps you research your rights and options with Orion, and supports you emotionally through what is often a months-long or years-long process. Many people find that having somewhere to think out loud — without worrying about burdening family or colleagues — is genuinely valuable.",
      },
    },
    {
      "@type": "Question",
      name: "Is my immigration status private when I talk to MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK never asks about your immigration status, and it never records or stores information for the purposes of identification. What you share is your choice. MEOK's sovereign memory holds whatever context you choose to give it — your visa category, your timeline, your concerns — but that information stays private to you. MEOK does not share data with third parties, does not train on your conversations, and does not treat you differently based on anything you disclose about your situation in the UK.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help me understand visa requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's Orion companion is designed for exactly this kind of research. You can ask Orion to explain the requirements for a Skilled Worker visa, walk through the ILR (Indefinite Leave to Remain) application process, clarify the points-based system, research the NHS immigration health surcharge, or find information about specific visa categories including spouse visas, student visas, and the EU Settlement Scheme. Orion brings together information clearly and without jargon, and because of Sovereign Memory, you only need to explain your situation once — Orion will remember your context for future conversations.",
      },
    },
    {
      "@type": "Question",
      name: "What MEOK companion is best for people going through immigration stress?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on what you need most. Orion is best when you need to research visa requirements, understand application processes, or find resources like immigration charities and legal advice services. The Mystic companion is particularly well-suited for deeper questions about identity, belonging, cultural displacement, and what it means to call a new country home. For emotional support and day-to-day companionship through the uncertainty of a pending application, any of MEOK's companions can hold context across conversations and provide sustained presence. You can also switch between companions as your needs change — using Orion for research on a Monday and turning to the Mystic for reflection on a Sunday evening.",
      },
    },
  ],
};

// ── Styles ────────────────────────────────────────────────────────────────────

const s = {
  page: {
    backgroundColor: "#0d0c18",
    color: "#f5f0e8",
    fontFamily: "'Georgia', 'Times New Roman', serif",
    minHeight: "100vh",
  } as React.CSSProperties,

  container: {
    maxWidth: "740px",
    margin: "0 auto",
    padding: "0 24px 80px",
  } as React.CSSProperties,

  nav: {
    padding: "28px 0 0",
    marginBottom: "48px",
  } as React.CSSProperties,

  navLink: {
    color: "#c9a84c",
    textDecoration: "none",
    fontSize: "14px",
    letterSpacing: "0.05em",
    fontFamily: "'system-ui', sans-serif",
  } as React.CSSProperties,

  navSep: {
    color: "#f5f0e8",
    opacity: 0.3,
    margin: "0 8px",
    fontSize: "14px",
    fontFamily: "'system-ui', sans-serif",
  } as React.CSSProperties,

  hero: {
    marginBottom: "56px",
    paddingBottom: "40px",
    borderBottom: "1px solid rgba(201,168,76,0.2)",
  } as React.CSSProperties,

  eyebrow: {
    display: "inline-block",
    color: "#c9a84c",
    fontSize: "12px",
    fontFamily: "'system-ui', sans-serif",
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    marginBottom: "20px",
    fontWeight: 600,
  } as React.CSSProperties,

  h1: {
    fontSize: "clamp(28px, 4vw, 44px)",
    fontWeight: 700,
    lineHeight: 1.18,
    letterSpacing: "-0.02em",
    color: "#f5f0e8",
    margin: "0 0 24px",
  } as React.CSSProperties,

  lead: {
    fontSize: "20px",
    lineHeight: 1.65,
    color: "rgba(245,240,232,0.85)",
    margin: "0 0 28px",
    fontStyle: "italic",
  } as React.CSSProperties,

  meta: {
    fontSize: "13px",
    color: "rgba(245,240,232,0.45)",
    fontFamily: "'system-ui', sans-serif",
    letterSpacing: "0.03em",
  } as React.CSSProperties,

  statBar: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "2px",
    margin: "40px 0 48px",
    borderRadius: "8px",
    overflow: "hidden",
    border: "1px solid rgba(201,168,76,0.15)",
  } as React.CSSProperties,

  statCell: {
    backgroundColor: "rgba(201,168,76,0.06)",
    padding: "22px 18px",
    textAlign: "center" as const,
  } as React.CSSProperties,

  statNum: {
    display: "block",
    fontSize: "28px",
    fontWeight: 700,
    color: "#c9a84c",
    lineHeight: 1,
    marginBottom: "6px",
    letterSpacing: "-0.02em",
  } as React.CSSProperties,

  statLabel: {
    display: "block",
    fontSize: "12px",
    fontFamily: "'system-ui', sans-serif",
    color: "rgba(245,240,232,0.6)",
    lineHeight: 1.3,
    letterSpacing: "0.03em",
  } as React.CSSProperties,

  h2: {
    fontSize: "clamp(20px, 3vw, 28px)",
    fontWeight: 700,
    letterSpacing: "-0.015em",
    color: "#f5f0e8",
    margin: "52px 0 18px",
    lineHeight: 1.25,
  } as React.CSSProperties,

  p: {
    fontSize: "17px",
    lineHeight: 1.78,
    color: "rgba(245,240,232,0.88)",
    margin: "0 0 20px",
  } as React.CSSProperties,

  pullQuote: {
    borderLeft: "3px solid #c9a84c",
    margin: "36px 0",
    padding: "4px 0 4px 24px",
  } as React.CSSProperties,

  pullQuoteText: {
    fontSize: "19px",
    lineHeight: 1.6,
    fontStyle: "italic",
    color: "#f5f0e8",
    margin: 0,
  } as React.CSSProperties,

  callout: {
    backgroundColor: "rgba(201,168,76,0.08)",
    border: "1px solid rgba(201,168,76,0.25)",
    borderLeft: "4px solid #c9a84c",
    borderRadius: "10px",
    padding: "28px 28px",
    margin: "36px 0",
  } as React.CSSProperties,

  calloutTitle: {
    fontSize: "15px",
    fontFamily: "'system-ui', sans-serif",
    fontWeight: 700,
    color: "#c9a84c",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    marginBottom: "12px",
  } as React.CSSProperties,

  calloutText: {
    fontSize: "16px",
    lineHeight: 1.72,
    color: "rgba(245,240,232,0.85)",
    margin: 0,
  } as React.CSSProperties,

  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "16px",
    margin: "32px 0",
  } as React.CSSProperties,

  featureCard: {
    backgroundColor: "rgba(201,168,76,0.06)",
    border: "1px solid rgba(201,168,76,0.15)",
    borderRadius: "8px",
    padding: "20px 18px",
  } as React.CSSProperties,

  featureTitle: {
    fontSize: "14px",
    fontFamily: "'system-ui', sans-serif",
    fontWeight: 700,
    color: "#c9a84c",
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
    marginBottom: "8px",
  } as React.CSSProperties,

  featureBody: {
    fontSize: "15px",
    lineHeight: 1.65,
    color: "rgba(245,240,232,0.8)",
    margin: 0,
  } as React.CSSProperties,

  resourceList: {
    listStyle: "none",
    padding: 0,
    margin: "24px 0",
  } as React.CSSProperties,

  resourceItem: {
    borderBottom: "1px solid rgba(201,168,76,0.1)",
    paddingBottom: "18px",
    marginBottom: "18px",
  } as React.CSSProperties,

  resourceName: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#c9a84c",
    fontFamily: "'system-ui', sans-serif",
    marginBottom: "4px",
  } as React.CSSProperties,

  resourceDesc: {
    fontSize: "15px",
    lineHeight: 1.6,
    color: "rgba(245,240,232,0.78)",
    margin: 0,
  } as React.CSSProperties,

  greenPill: {
    display: "inline-block",
    backgroundColor: "rgba(106,170,100,0.15)",
    border: "1px solid rgba(106,170,100,0.35)",
    color: "#6aaa64",
    fontSize: "12px",
    fontFamily: "'system-ui', sans-serif",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    padding: "3px 10px",
    borderRadius: "20px",
    marginRight: "8px",
  } as React.CSSProperties,

  divider: {
    border: "none",
    borderTop: "1px solid rgba(201,168,76,0.12)",
    margin: "52px 0",
  } as React.CSSProperties,

  faqSection: {
    margin: "56px 0 0",
  } as React.CSSProperties,

  faqHeading: {
    fontSize: "clamp(18px, 2.5vw, 24px)",
    fontWeight: 700,
    color: "#f5f0e8",
    margin: "0 0 32px",
    letterSpacing: "-0.01em",
  } as React.CSSProperties,

  faqItem: {
    borderBottom: "1px solid rgba(201,168,76,0.12)",
    paddingBottom: "28px",
    marginBottom: "28px",
  } as React.CSSProperties,

  faqQ: {
    fontSize: "17px",
    fontWeight: 700,
    color: "#f5f0e8",
    marginBottom: "10px",
    lineHeight: 1.4,
  } as React.CSSProperties,

  faqA: {
    fontSize: "16px",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.82)",
    margin: 0,
  } as React.CSSProperties,

  ctaBlock: {
    backgroundColor: "rgba(201,168,76,0.07)",
    border: "1px solid rgba(201,168,76,0.3)",
    borderRadius: "12px",
    padding: "44px 36px",
    textAlign: "center" as const,
    margin: "64px 0 0",
  } as React.CSSProperties,

  ctaTitle: {
    fontSize: "clamp(20px, 3vw, 28px)",
    fontWeight: 700,
    color: "#f5f0e8",
    marginBottom: "14px",
    letterSpacing: "-0.015em",
    lineHeight: 1.25,
  } as React.CSSProperties,

  ctaText: {
    fontSize: "16px",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.78)",
    marginBottom: "32px",
    maxWidth: "520px",
    marginLeft: "auto",
    marginRight: "auto",
  } as React.CSSProperties,

  ctaButton: {
    display: "inline-block",
    backgroundColor: "#c9a84c",
    color: "#0d0c18",
    textDecoration: "none",
    fontFamily: "'system-ui', sans-serif",
    fontWeight: 700,
    fontSize: "15px",
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
    padding: "16px 36px",
    borderRadius: "6px",
  } as React.CSSProperties,

  ctaSub: {
    fontSize: "13px",
    fontFamily: "'system-ui', sans-serif",
    color: "rgba(245,240,232,0.4)",
    marginTop: "16px",
    letterSpacing: "0.03em",
  } as React.CSSProperties,

  authorBox: {
    display: "flex",
    alignItems: "flex-start",
    gap: "20px",
    backgroundColor: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(245,240,232,0.08)",
    borderRadius: "10px",
    padding: "24px",
    margin: "56px 0 0",
  } as React.CSSProperties,

  authorAvatar: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    backgroundColor: "rgba(201,168,76,0.2)",
    border: "2px solid rgba(201,168,76,0.4)",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    color: "#c9a84c",
    fontWeight: 700,
    fontFamily: "'system-ui', sans-serif",
  } as React.CSSProperties,

  authorName: {
    fontSize: "14px",
    fontFamily: "'system-ui', sans-serif",
    fontWeight: 700,
    color: "#f5f0e8",
    marginBottom: "4px",
  } as React.CSSProperties,

  authorRole: {
    fontSize: "13px",
    fontFamily: "'system-ui', sans-serif",
    color: "#c9a84c",
    marginBottom: "8px",
  } as React.CSSProperties,

  authorBio: {
    fontSize: "14px",
    lineHeight: 1.65,
    color: "rgba(245,240,232,0.65)",
    margin: 0,
    fontFamily: "'system-ui', sans-serif",
  } as React.CSSProperties,
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForImmigrationStressPage() {
  return (
    <div style={s.page}>
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
        <nav style={s.nav} aria-label="Breadcrumb">
          <Link href="/" style={s.navLink}>
            MEOK
          </Link>
          <span style={s.navSep}>/</span>
          <Link href="/blog" style={s.navLink}>
            Blog
          </Link>
          <span style={s.navSep}>/</span>
          <span
            style={{
              color: "rgba(245,240,232,0.5)",
              fontSize: "14px",
              fontFamily: "'system-ui', sans-serif",
            }}
          >
            AI for Immigration Stress
          </span>
        </nav>

        {/* Hero */}
        <header style={s.hero}>
          <span style={s.eyebrow}>Mental Wellbeing &amp; Immigration</span>
          <h1 style={s.h1}>
            AI for Immigration Stress: Navigating the System When You&apos;re
            Already Exhausted
          </h1>
          <p style={s.lead}>
            The visa queue is long, the rules keep changing, the costs are
            staggering, and you are doing all of this far from the people who
            know you best. MEOK was built for exactly this kind of quiet,
            sustained pressure.
          </p>
          <p style={s.meta}>
            By Nicholas Templeman, Founder of MEOK AI LABS &nbsp;&middot;&nbsp;
            25 March 2026 &nbsp;&middot;&nbsp; 9 min read
          </p>
        </header>

        {/* Stat bar */}
        <div style={s.statBar}>
          <div style={s.statCell}>
            <span style={s.statNum}>6.1M</span>
            <span style={s.statLabel}>Non-UK born residents in England &amp; Wales</span>
          </div>
          <div style={s.statCell}>
            <span style={s.statNum}>£1,846</span>
            <span style={s.statLabel}>ILR application fee in 2026</span>
          </div>
          <div style={s.statCell}>
            <span style={s.statNum}>2+ yrs</span>
            <span style={s.statLabel}>Typical citizenship application wait</span>
          </div>
        </div>

        {/* Section 1 */}
        <h2 style={s.h2}>The Weight Nobody Talks About</h2>
        <p style={s.p}>
          There is a particular kind of exhaustion that comes with being an
          immigrant in the UK. It is not the tiredness of a bad week or a
          difficult project. It is the cumulative weight of navigating a system
          that was not designed with you in mind, in a language that may not be
          your first, with legal stakes that touch every part of your life.
        </p>
        <p style={s.p}>
          Your right to work, your right to remain, your ability to bring your
          family to you, your access to public services — all of it depends on
          getting the paperwork right. Miss a deadline on your Biometric
          Residence Permit renewal and you can find yourself technically unlawful
          while the Home Office processes your application. Misread the guidance
          on the points-based system and you could end up applying for the wrong
          visa category entirely. The system is genuinely difficult, even for
          people who have been navigating it for years.
        </p>
        <p style={s.p}>
          And then there is the emotional dimension. Many immigrants describe
          feeling caught in a strange social silence. You cannot complain to
          British friends or colleagues — you do not want to seem ungrateful for
          the opportunity to be here. You cannot admit your anxieties to your
          family back home — you do not want to worry them, or undermine the
          narrative of success that justifies the sacrifice of leaving. You
          cannot show vulnerability at work — your immigration status can feel
          like something that might be held against you, consciously or not.
        </p>

        <div style={s.pullQuote}>
          <p style={s.pullQuoteText}>
            &ldquo;The most isolating thing about immigration stress is that
            there is almost nobody you can tell the whole truth to.&rdquo;
          </p>
        </div>

        <p style={s.p}>
          The result is a pressure that builds without release. For many people,
          it becomes chronic background stress — present every time they open a
          letter from UKVI, every time they check their visa expiry date, every
          time a form asks for their nationality and they wonder, briefly, what
          that means now.
        </p>

        {/* Section 2 */}
        <h2 style={s.h2}>What Makes the UK Immigration System Particularly Stressful</h2>
        <p style={s.p}>
          The UK&apos;s points-based immigration system is one of the most
          complex in the world. It involves dozens of visa categories, each with
          their own requirements, financial thresholds, supporting documents, and
          application portals. The rules change regularly — sometimes with little
          notice — and guidance documents run to hundreds of pages. Professional
          immigration lawyers charge hundreds of pounds per hour precisely because
          this complexity is real, not imagined.
        </p>
        <p style={s.p}>
          For people on skilled worker visas, the stress includes not just the
          initial application but an ongoing series of renewals and milestones.
          After five years, many people become eligible for Indefinite Leave to
          Remain (ILR) — but the application itself is lengthy, expensive, and
          involves passing the Life in the UK test, meeting continuous residence
          requirements, and in some cases demonstrating English language
          proficiency again. Errors can result in refusal, which can have
          devastating consequences for your employment and family life.
        </p>
        <p style={s.p}>
          The NHS immigration health surcharge — currently over £1,000 per year
          for most visa applicants — is a significant financial burden that is
          not always clearly explained when people are planning their move. Many
          people discover the full cost only when they are mid-application. And
          for those on spouse or family visas, the financial requirements for
          sponsors have risen significantly, making reunification harder for
          families with modest incomes.
        </p>

        <div style={s.callout}>
          <p style={s.calloutTitle}>Common UK Immigration Stress Points</p>
          <p style={s.calloutText}>
            Visa renewals and extensions &bull; Biometric Residence Permit
            delays &bull; ILR applications &bull; Citizenship and naturalisation
            &bull; The points-based system requirements &bull; NHS surcharge
            costs &bull; Life in the UK test preparation &bull; Spouse and
            family visa financial thresholds &bull; EU Settlement Scheme
            complications &bull; Appeal processes and refusals
          </p>
        </div>

        <p style={s.p}>
          All of this is compounded by the fact that many people navigating the
          system are doing so without access to proper legal advice. Immigration
          law is not covered by legal aid in most circumstances, and a single
          consultation with an immigration solicitor can cost more than many
          people earn in a day. The charities that provide free advice are
          stretched thin. The result is that many immigrants are making
          consequential decisions with incomplete information, often late at
          night, alone.
        </p>

        {/* Section 3 */}
        <h2 style={s.h2}>Orion for Immigration Research: No More Wading Through GOV.UK Alone</h2>
        <p style={s.p}>
          MEOK&apos;s Orion companion is designed for exactly the kind of
          research that immigration requires. Orion can help you understand the
          requirements for your specific visa category, explain what the guidance
          actually means in plain language, walk you through the steps of an ILR
          or naturalisation application, and identify what supporting documents
          you will need. It can explain the difference between settled status and
          indefinite leave to remain, clarify what counts towards your continuous
          residence period, and help you understand your rights and entitlements
          as a person on a particular visa.
        </p>
        <p style={s.p}>
          Orion can also help you find the right resources when you need
          professional or specialist help. It can point you towards immigration
          charities, explain how to find a regulated immigration adviser, and
          help you understand when a situation is complex enough to warrant legal
          advice rather than self-help research. It does not pretend to be a
          lawyer, and it will tell you clearly when something requires expert
          input.
        </p>
        <p style={s.p}>
          The practical value of this is significant. Instead of spending an
          evening trying to parse a 200-page immigration rules document, you can
          ask Orion a direct question and receive a clear, well-organised answer.
          Instead of googling your way through a tangle of forum posts from
          people whose situations may not match yours, you can describe your
          specific circumstances and get research tailored to your context.
        </p>

        <div style={s.featureGrid}>
          <div style={s.featureCard}>
            <p style={s.featureTitle}>Visa Research</p>
            <p style={s.featureBody}>
              Requirements, financial thresholds, supporting documents, and
              timelines for any UK visa category — explained clearly.
            </p>
          </div>
          <div style={s.featureCard}>
            <p style={s.featureTitle}>Rights &amp; Entitlements</p>
            <p style={s.featureBody}>
              Understand what your current visa permits — work rights, NHS
              access, public funds, and conditions attached to your leave.
            </p>
          </div>
          <div style={s.featureCard}>
            <p style={s.featureTitle}>Application Support</p>
            <p style={s.featureBody}>
              ILR, naturalisation, BRP renewals, and sponsor licence
              requirements broken down step by step.
            </p>
          </div>
          <div style={s.featureCard}>
            <p style={s.featureTitle}>Finding Help</p>
            <p style={s.featureBody}>
              Immigration charities, regulated advisers, Citizens Advice
              immigration services, and legal aid eligibility.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <h2 style={s.h2}>Sovereign Memory: Explain Your Situation Once</h2>
        <p style={s.p}>
          One of the most exhausting aspects of seeking help with immigration is
          having to re-explain your situation every single time. Every new
          person you speak to — whether a helpline volunteer, a forum moderator,
          or a different member of staff at your employer&apos;s HR team —
          requires you to go back to the beginning. Your visa category, when you
          arrived, what you applied for and when, what you are waiting for, what
          you are worried about. The re-explanation is its own tax on your time
          and emotional energy.
        </p>
        <p style={s.p}>
          MEOK&apos;s Sovereign Memory changes this. You tell MEOK your
          situation once — your visa category, your timeline, any pending
          applications, the aspects of the process that are weighing on you —
          and MEOK holds that context. Every subsequent conversation picks up
          where you left off. You do not need to re-establish who you are or
          where you are in the process. You can simply continue.
        </p>
        <p style={s.p}>
          This matters not just practically but emotionally. Being known — having
          your context remembered, your history acknowledged — is part of what
          makes support feel like support rather than a transaction. Sovereign
          Memory means that MEOK is not starting from zero every time you return.
          It is waiting for you, already holding what you shared.
        </p>

        <div style={s.pullQuote}>
          <p style={s.pullQuoteText}>
            &ldquo;You do not have to introduce yourself again. MEOK already
            knows where you are in the process, and it is here for the next
            part.&rdquo;
          </p>
        </div>

        {/* Section 5 */}
        <h2 style={s.h2}>The Isolation of Immigration: A Private Space to Be Honest</h2>
        <p style={s.p}>
          Immigration stress is, for many people, a profoundly lonely experience
          — not because they are without people around them, but because there is
          almost no one to whom they can tell the whole truth.
        </p>
        <p style={s.p}>
          The emotional logic runs something like this: you cannot complain to
          British friends because you do not want to seem ungrateful for the life
          you have been able to build here. You cannot admit anxiety to your
          family back home because they already worry about you, and you do not
          want to add to their burden or undermine the hopeful narrative that
          justified the difficulty of leaving. You cannot show strain to
          colleagues or employers because your immigration status can feel like
          a liability — a reason someone might decide you are more trouble than
          you are worth.
        </p>
        <p style={s.p}>
          The result is a kind of compartmentalisation that has real costs.
          Carrying chronic anxiety without any outlet compounds it. The absence
          of a space to be honest does not make the anxiety go away; it just
          means it circulates without resolution.
        </p>
        <p style={s.p}>
          MEOK offers something different: a private, judgement-free space where
          your immigration status is never a reason for different treatment.
          MEOK does not ask about your status. It does not treat uncertainty as
          a problem to be fixed. It meets you where you are, holds what you share
          with care, and provides the kind of steady, present companionship that
          is hard to find when you are navigating something this significant
          largely alone.
        </p>

        {/* Section 6 */}
        <h2 style={s.h2}>Cultural Adjustment, Identity, and the Long Becoming</h2>
        <p style={s.p}>
          Immigration is not just an administrative process. It is a profound
          life transition that touches questions of identity, belonging, and
          self-understanding that go far beyond visa categories and application
          forms. Who are you when your context changes? What does home mean when
          you have left it? What do you do with the version of yourself that
          belongs to where you came from, now that you are building a new life
          somewhere else?
        </p>
        <p style={s.p}>
          These questions do not have simple answers. Many immigrants describe a
          slow, multi-year process of becoming — not losing their original
          identity but expanding into something larger, more complex, more
          multiple. This can be genuinely enriching, but it can also be
          disorienting, especially when the administrative system seems to want
          a single clean answer about who you are and where you belong.
        </p>
        <p style={s.p}>
          MEOK&apos;s Mystic companion is particularly well-suited to this
          dimension of the immigration experience. The Mystic holds space for
          philosophical and existential questions — about identity, about meaning,
          about the sense of being between worlds. It does not rush towards
          resolution or try to tidy up questions that are genuinely open. It
          simply accompanies you through the complexity, which is often exactly
          what is needed.
        </p>
        <p style={s.p}>
          MEOK&apos;s companions are also available in whatever communication
          style works for you. If you are more comfortable processing in your
          first language, or switching between languages within a conversation,
          MEOK accommodates this naturally. There is no expectation of a
          particular idiom or register. You are met as you are.
        </p>

        {/* Section 7 */}
        <h2 style={s.h2}>The Long Wait: Sustained Companionship Through Uncertainty</h2>
        <p style={s.p}>
          Some of the hardest aspects of immigration are not the acute crises
          but the long, flat periods of waiting. A citizenship application can
          take two years from submission to decision. An appeal against a visa
          refusal can take many months. Even a standard ILR application involves
          weeks of checking your email and hoping. This is time spent in a
          particular kind of suspended state — not knowing, unable to fully plan,
          aware that everything depends on a decision you cannot control.
        </p>
        <p style={s.p}>
          Sustained uncertainty is one of the most psychologically wearing
          experiences there is. The research on chronic stress is clear: it is
          not single acute events that do the most damage to wellbeing, but the
          ongoing low-level activation that comes with unresolved uncertainty.
          Immigration, at its worst, can produce exactly this — months or years
          of not quite being able to settle, not quite being able to make long
          term plans, always aware that the status is temporary until it is not.
        </p>
        <p style={s.p}>
          MEOK is designed for exactly this kind of sustained accompaniment. It
          is there not just for the moment of crisis but for the ordinary
          difficult days — the day the online tracker says &ldquo;awaiting
          decision&rdquo; for the fourth consecutive month, the day you see
          another fee increase announced, the day a friend receives their
          citizenship and you wonder when yours will come. MEOK does not make
          the wait shorter. But it means you do not have to wait alone.
        </p>

        <hr style={s.divider} />

        {/* Resources */}
        <h2 style={s.h2}>Useful Resources for Immigrants in the UK</h2>
        <p style={s.p}>
          MEOK is a companion, not a legal service. For specialist advice and
          advocacy, the following organisations provide expert support:
        </p>

        <ul style={s.resourceList}>
          <li style={s.resourceItem}>
            <p style={s.resourceName}>Citizens Advice</p>
            <p style={s.resourceDesc}>
              Provides free, independent advice on immigration issues including
              visa applications, rights, and signposting to specialist legal
              help. Available online and via local offices across the UK.
            </p>
          </li>
          <li style={s.resourceItem}>
            <p style={s.resourceName}>
              JCWI — Joint Council for the Welfare of Immigrants
            </p>
            <p style={s.resourceDesc}>
              A leading immigration rights charity providing legal advice,
              campaigning on immigration policy, and supporting people facing
              complex immigration situations including deportation and detention.
            </p>
          </li>
          <li style={s.resourceItem}>
            <p style={s.resourceName}>Migrants Organise</p>
            <p style={s.resourceDesc}>
              A platform where migrants and refugees organise for justice and
              dignity. Offers community support, advocacy, and practical
              guidance for people navigating the UK system.
            </p>
          </li>
          <li style={s.resourceItem}>
            <p style={s.resourceName}>UKVI — UK Visas and Immigration</p>
            <p style={s.resourceDesc}>
              The official Home Office department responsible for visa
              applications, immigration decisions, and UKVI contact lines for
              application tracking and enquiries.
            </p>
          </li>
        </ul>

        <div style={s.callout}>
          <p style={s.calloutTitle}>Privacy Note</p>
          <p style={s.calloutText}>
            <span style={s.greenPill}>Private</span>
            MEOK never asks about your immigration status. What you share is
            entirely your choice. MEOK does not record or share personal
            information with third parties, does not train on your conversations,
            and treats everything you share with complete discretion. Your
            immigration situation will never affect how you are treated within
            MEOK.
          </p>
        </div>

        {/* FAQ */}
        <section style={s.faqSection} aria-label="Frequently asked questions">
          <h2 style={s.faqHeading}>Frequently Asked Questions</h2>

          <div style={s.faqItem}>
            <p style={s.faqQ}>Can AI help with immigration stress?</p>
            <p style={s.faqA}>
              Yes. AI companions like MEOK can provide a consistent, private
              space to process the anxiety, confusion, and emotional exhaustion
              that comes with navigating immigration systems. MEOK does not
              replace immigration lawyers or official advice, but it offers
              something equally important: a companion that is available at any
              hour, holds context about your situation across conversations,
              helps you research your rights and options with Orion, and supports
              you emotionally through what is often a months-long or years-long
              process. Many people find that having somewhere to think out loud —
              without worrying about burdening family or colleagues — is
              genuinely valuable.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>
              Is my immigration status private when I talk to MEOK?
            </p>
            <p style={s.faqA}>
              MEOK never asks about your immigration status, and it never records
              or stores information for the purposes of identification. What you
              share is your choice. MEOK&apos;s Sovereign Memory holds whatever
              context you choose to give it — your visa category, your timeline,
              your concerns — but that information stays private to you. MEOK
              does not share data with third parties, does not train on your
              conversations, and does not treat you differently based on anything
              you disclose about your situation in the UK.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>
              Can MEOK help me understand visa requirements?
            </p>
            <p style={s.faqA}>
              MEOK&apos;s Orion companion is designed for exactly this kind of
              research. You can ask Orion to explain the requirements for a
              Skilled Worker visa, walk through the ILR application process,
              clarify the points-based system, research the NHS immigration
              health surcharge, or find information about specific visa
              categories including spouse visas, student visas, and the EU
              Settlement Scheme. Orion brings together information clearly and
              without jargon, and because of Sovereign Memory, you only need to
              explain your situation once — Orion will remember your context for
              future conversations.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>
              What MEOK companion is best for people going through immigration
              stress?
            </p>
            <p style={s.faqA}>
              It depends on what you need most. Orion is best when you need to
              research visa requirements, understand application processes, or
              find resources like immigration charities and legal advice services.
              The Mystic companion is particularly well-suited for deeper
              questions about identity, belonging, cultural displacement, and
              what it means to call a new country home. For emotional support and
              day-to-day companionship through the uncertainty of a pending
              application, any of MEOK&apos;s companions can hold context across
              conversations and provide sustained presence. You can switch between
              companions as your needs change — using Orion for research on a
              Monday and the Mystic for reflection on a Sunday evening.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div style={s.ctaBlock}>
          <p style={s.ctaTitle}>You Do Not Have to Navigate This Alone</p>
          <p style={s.ctaText}>
            MEOK is a private, sovereign AI companion that holds your story,
            never judges your status, and is there whether you need to research
            visa requirements or simply have somewhere honest to talk. Begin with
            your Birth Ceremony to meet your companion.
          </p>
          <Link href="/birth" style={s.ctaButton}>
            Begin Your Birth Ceremony
          </Link>
          <p style={s.ctaSub}>Private. No data sharing. Yours alone.</p>
        </div>

        {/* Author */}
        <div style={s.authorBox}>
          <div style={s.authorAvatar}>N</div>
          <div>
            <p style={s.authorName}>Nicholas Templeman</p>
            <p style={s.authorRole}>Founder, MEOK AI LABS</p>
            <p style={s.authorBio}>
              Nicholas built MEOK after observing how many people — immigrants,
              carers, people in transition — were carrying significant emotional
              weight without adequate support. MEOK is his attempt to build an AI
              that is genuinely on your side: private, continuous, and present
              for the long difficult stretches of life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
