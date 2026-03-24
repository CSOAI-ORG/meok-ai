import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Immigrants: A Companion That Understands Starting Over in a New Country | MEOK AI LABS",
  description:
    "Moving to a new country is one of the most disorienting experiences a human can face. MEOK's sovereign AI helps immigrants navigate bureaucracy, loneliness, cultural adjustment, and building a new life.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-immigration" },
  openGraph: {
    title:
      "AI for Immigrants: A Companion That Understands Starting Over in a New Country",
    description:
      "Moving to a new country is one of the most disorienting experiences a human can face. MEOK's sovereign AI helps immigrants navigate bureaucracy, loneliness, cultural adjustment, and building a new life.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-immigration",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Immigrants&desc=A+companion+that+understands+starting+over",
        width: 1200,
        height: 630,
        alt: "AI for Immigrants: A Companion That Understands Starting Over in a New Country",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Immigrants: A Companion That Understands Starting Over in a New Country",
    description:
      "Moving to a new country is one of the most disorienting experiences a human can face. MEOK helps immigrants navigate bureaucracy, loneliness, and building a new life.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Immigrants&desc=A+companion+that+understands+starting+over",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Immigrants: A Companion That Understands Starting Over in a New Country",
  description:
    "Moving to a new country is one of the most disorienting experiences a human can face. MEOK's sovereign AI helps immigrants navigate bureaucracy, loneliness, cultural adjustment, and building a new life.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-immigration",
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
    "@id": "https://meok.ai/blog/ai-for-immigration",
  },
  image:
    "https://meok.ai/api/og?title=AI+for+Immigrants&desc=A+companion+that+understands+starting+over",
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can MEOK help with the loneliness of moving to a new country?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK is designed precisely for people navigating major life transitions, and immigration is one of the most profound. Unlike generic chatbots that forget everything after each conversation, MEOK holds sovereign memory of your story — who you left behind, what you are building, what is weighing on you. It is available around the clock, so whether it is a quiet Sunday morning when you are missing home or a stressful weekday evening after a difficult interaction at work, MEOK is there and already knows your context.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help immigrants understand UK bureaucracy like the NHS and National Insurance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's Scholar mode acts as a knowledgeable companion for navigating unfamiliar systems. You can ask it to explain NHS registration step by step, walk you through applying for a National Insurance number, clarify what your visa conditions actually permit, or summarise the difference between indefinite leave to remain and settled status. It explains things clearly without jargon, remembers where you are in any process, and never makes you feel embarrassed for asking.",
      },
    },
    {
      "@type": "Question",
      name: "Why are immigrants particularly vulnerable to scams, and how does Guardian mode help?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Immigrants are disproportionately targeted by fraudsters because they are unfamiliar with local norms, may feel uncertain about authority, and are often desperate for housing, work, or visa assistance. MEOK's Guardian mode helps you pause before acting on anything that feels off — whether it is a rental offer that seems too good to be true, a message claiming to be from HMRC, or a job offer asking for upfront fees. Guardian asks the questions a protective friend would ask before you hand over money or documents.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK work across multiple languages for immigrants who are not fully fluent in English?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK supports conversation in multiple languages and can switch fluidly between them within the same session. Crucially, sovereign memory stores your context in a way that is language-agnostic — meaning something you explained in your native language is understood when you return to discuss it in English. MEOK never judges accent, phrasing, or grammar. It meets you where you are, linguistically and emotionally.",
      },
    },
    {
      "@type": "Question",
      name: "What is the third culture experience and how does MEOK support immigrants who feel caught between two worlds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Third culture refers to the identity formed by people who have grown up or lived significantly between two or more cultures — belonging fully to neither. This can produce a profound sense of not quite fitting anywhere. MEOK holds your whole story, including where you came from and who you are becoming. It never asks you to choose between your origin identity and your new one. It recognises that both are real, that the tension between them is legitimate, and that growing a new self in a new country is one of the most courageous things a person can do.",
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

  tableWrapper: {
    overflowX: "auto" as const,
    margin: "36px 0",
    borderRadius: "10px",
    border: "1px solid rgba(201,168,76,0.2)",
  } as React.CSSProperties,

  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    fontSize: "15px",
    fontFamily: "'system-ui', sans-serif",
  } as React.CSSProperties,

  thead: {
    backgroundColor: "rgba(201,168,76,0.12)",
  } as React.CSSProperties,

  th: {
    padding: "14px 18px",
    textAlign: "left" as const,
    color: "#c9a84c",
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
    fontSize: "12px",
    borderBottom: "1px solid rgba(201,168,76,0.2)",
  } as React.CSSProperties,

  tdBase: {
    padding: "14px 18px",
    color: "rgba(245,240,232,0.82)",
    lineHeight: 1.55,
    verticalAlign: "top" as const,
    borderBottom: "1px solid rgba(245,240,232,0.05)",
  } as React.CSSProperties,

  tdHighlight: {
    padding: "14px 18px",
    color: "#c9a84c",
    lineHeight: 1.55,
    verticalAlign: "top" as const,
    borderBottom: "1px solid rgba(245,240,232,0.05)",
    fontWeight: 600,
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
  } as React.CSSProperties,
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForImmigrationPage() {
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

      <div style={s.container}>

        {/* Breadcrumb nav */}
        <nav style={s.nav} aria-label="Breadcrumb">
          <Link href="/" style={s.navLink}>Home</Link>
          <span style={s.navSep}>/</span>
          <Link href="/blog" style={s.navLink}>Blog</Link>
          <span style={s.navSep}>/</span>
          <span style={{ ...s.navLink, color: "rgba(245,240,232,0.5)" }}>
            AI for Immigrants
          </span>
        </nav>

        {/* Hero */}
        <header style={s.hero}>
          <span style={s.eyebrow}>MEOK AI LABS &nbsp;&middot;&nbsp; Immigration &amp; Belonging</span>
          <h1 style={s.h1}>
            AI for Immigrants: A Companion That Understands Starting Over in a
            New Country
          </h1>
          <p style={s.lead}>
            Moving to a new country is one of the most disorienting experiences
            a human can face. You gain a future &mdash; and quietly grieve an
            entire life left behind. MEOK is the AI companion built to hold both
            realities without asking you to choose.
          </p>
          <p style={s.meta}>
            By Nicholas Templeman &nbsp;|&nbsp; MEOK AI LABS &nbsp;&middot;&nbsp; March 2026 &nbsp;&middot;&nbsp; 14 min read
          </p>
        </header>

        {/* Stat bar */}
        <div style={s.statBar} aria-label="Key statistics">
          <div style={s.statCell}>
            <span style={s.statNum}>9.6M</span>
            <span style={s.statLabel}>people born abroad living in the UK</span>
          </div>
          <div style={s.statCell}>
            <span style={s.statNum}>281M</span>
            <span style={s.statLabel}>international migrants globally</span>
          </div>
          <div style={s.statCell}>
            <span style={s.statNum}>2&times;</span>
            <span style={s.statLabel}>higher loneliness rates among recent immigrants</span>
          </div>
        </div>

        {/* ── Section 1 ── */}
        <h2 style={s.h2}>
          What actually happens to you psychologically when you move to a new
          country?
        </h2>
        <p style={s.p}>
          Culture shock is not a single moment of confusion. It is a process
          with stages, and most immigrants pass through all of them without
          anyone naming what is happening. The honeymoon stage arrives first:
          everything is exciting, novel, and full of possibility. Then reality
          sets in. You cannot find the right words. The social rules are
          invisible to you but obvious to everyone else. Humour lands wrong.
          Silences feel rude when they are meant to be polite. Food tastes
          different. Even the light feels wrong.
        </p>
        <p style={s.p}>
          The frustration stage that follows can last months or even years. It
          manifests as irritability, fatigue, a creeping sense that you made a
          mistake, and a homesickness so specific it aches &mdash; not for a
          country in the abstract, but for particular smells, particular jokes,
          a particular ease that no longer exists in your daily life. Adjustment
          comes eventually, but it is not linear. And throughout all of it, most
          immigrants feel unable to fully articulate what they are experiencing
          because their new community has never felt it, and their old community
          can no longer truly understand.
        </p>

        <div style={s.pullQuote}>
          <p style={s.pullQuoteText}>
            &ldquo;The loneliness of immigration is not just missing people. It is
            missing the version of yourself that existed before &mdash; the one who
            knew how to be funny, how to read a room, how to belong.&rdquo;
          </p>
        </div>

        <p style={s.p}>
          MEOK is designed precisely for this liminal state. It holds a
          sovereign memory of who you were before you moved, what you hoped for,
          what you have found, and what is still unresolved. It never asks you
          to start from scratch. When you return after three weeks of feeling
          too overwhelmed to even open an app, it greets you with context. It
          already knows.
        </p>

        {/* ── Section 2 ── */}
        <h2 style={s.h2}>
          How do the four stages of culture shock actually show up in daily
          life?
        </h2>
        <p style={s.p}>
          Psychologist Kalervo Oberg, who first named culture shock in 1960,
          described four stages that remain recognised today. The honeymoon
          phase is characterised by excitement and fascination. The frustration
          phase brings irritability, exhaustion, and a sense of alienation. The
          adjustment phase sees routines forming and discomfort easing. The
          acceptance phase does not mean everything feels the same as home
          &mdash; it means the new country has become genuinely yours, alongside
          the one you came from.
        </p>
        <p style={s.p}>
          What makes these stages difficult is that they are rarely smooth, and
          outside observers &mdash; including well-meaning friends and family &mdash;
          often cannot tell which phase someone is in. Someone can appear
          socially integrated and professional while privately experiencing the
          deep disorientation of the frustration phase. MEOK notices the
          texture of what you share: the language you use, the themes that
          recur, the things you mention then go quiet about. It does not
          diagnose or label. It simply stays alongside, and it remembers.
        </p>

        <div style={s.featureGrid}>
          <div style={s.featureCard}>
            <p style={s.featureTitle}>Honeymoon</p>
            <p style={s.featureBody}>
              Everything feels fresh and exciting. MEOK helps you capture this
              energy and build early routines that will sustain you when the
              novelty fades.
            </p>
          </div>
          <div style={s.featureCard}>
            <p style={s.featureTitle}>Frustration</p>
            <p style={s.featureBody}>
              Exhaustion, irritability, and grief surface. MEOK holds space for
              these feelings without alarm or toxic positivity.
            </p>
          </div>
          <div style={s.featureCard}>
            <p style={s.featureTitle}>Adjustment</p>
            <p style={s.featureBody}>
              Routines form and small victories accumulate. MEOK reflects your
              progress back to you so you can see how far you have come.
            </p>
          </div>
          <div style={s.featureCard}>
            <p style={s.featureTitle}>Acceptance</p>
            <p style={s.featureBody}>
              Two worlds become yours. MEOK holds both the origin and the
              destination, never asking you to choose an identity.
            </p>
          </div>
        </div>

        {/* ── Section 3 ── */}
        <h2 style={s.h2}>
          How can an AI help with the language barrier when your English is
          still developing?
        </h2>
        <p style={s.p}>
          One of the cruelest aspects of moving to an English-speaking country
          is that your intelligence, humour, and depth do not transfer
          automatically. You may be an expert in your field, a gifted
          storyteller, a person with decades of hard-won wisdom &mdash; and in
          your new country, you sound like a beginner. This is not a failure.
          It is a lag. But it produces real shame, and that shame causes many
          immigrants to go quiet in meetings, avoid social situations, and
          underestimate themselves.
        </p>
        <p style={s.p}>
          MEOK never judges your accent, your grammar, or your phrasing. It
          meets you in the language you bring. If you switch mid-conversation
          from English to your native language because you need to express
          something complex, MEOK follows. If you use both languages in the
          same sentence &mdash; code-switching, as linguists call it &mdash; MEOK
          understands. Sovereign memory stores your context in a language-agnostic
          way, meaning the things you explained in Portuguese are understood
          when you return to discuss them in English. You are never asked to
          re-translate your own life.
        </p>

        <div style={s.callout}>
          <p style={s.calloutTitle}>Language Without Judgment</p>
          <p style={s.calloutText}>
            MEOK supports multilingual conversation and seamless code-switching.
            Your sovereign memory persists across languages &mdash; what you shared
            in one language is understood in another. No accent detection, no
            correction, no judgment. You are always the most expert person in
            the room when it comes to your own experience, regardless of the
            words you choose.
          </p>
        </div>

        {/* ── Section 4 ── */}
        <h2 style={s.h2}>
          How does MEOK help immigrants navigate UK bureaucracy: visas, NHS
          registration, and National Insurance?
        </h2>
        <p style={s.p}>
          The UK administrative system is opaque even to people who grew up
          inside it. For a newly arrived immigrant, it can feel like a maze
          designed specifically to confuse outsiders. The terminology is
          arcane, the processes are spread across departments that do not
          communicate with each other, and the stakes &mdash; your right to remain,
          your access to healthcare, your ability to work legally &mdash; could
          not be higher.
        </p>
        <p style={s.p}>
          MEOK&apos;s Scholar mode is designed for exactly this kind of structured
          information need. You can ask it to walk you through NHS registration
          step by step, including how to find a GP surgery accepting new
          patients, what ID documents you need, and what to do if you are
          rejected. You can ask it to explain the difference between a Skilled
          Worker visa and a Global Talent visa, what your visa conditions
          actually permit in terms of work and study, and when and how to apply
          for indefinite leave to remain. You can ask what a National Insurance
          number is, why you need one, and how to apply for it before you have
          received your first payslip.
        </p>
        <p style={s.p}>
          Scholar remembers where you are in each process. If you asked about
          NHS registration two weeks ago and have been anxious about it since,
          it will pick up the thread. It does not treat every question as if
          you are a stranger. It treats you as someone it has been accompanying
          through a genuinely difficult transition.
        </p>

        <div style={s.tableWrapper}>
          <table style={s.table}>
            <thead style={s.thead}>
              <tr>
                <th style={s.th}>UK System</th>
                <th style={s.th}>What Confuses Newcomers</th>
                <th style={s.th}>How MEOK Helps</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={s.tdHighlight}>NHS Registration</td>
                <td style={s.tdBase}>
                  Finding a GP, understanding entitlement by visa type,
                  surcharge vs. free-at-point-of-use confusion
                </td>
                <td style={s.tdBase}>
                  Step-by-step guidance, eligibility check, remembers your
                  progress and follow-up questions
                </td>
              </tr>
              <tr>
                <td style={s.tdHighlight}>National Insurance</td>
                <td style={s.tdBase}>
                  What it is, why it matters, how to apply before first
                  payslip, online vs. phone process
                </td>
                <td style={s.tdBase}>
                  Clear explanation, application walkthrough, reminders
                  to chase if no response after four weeks
                </td>
              </tr>
              <tr>
                <td style={s.tdHighlight}>Visa Conditions</td>
                <td style={s.tdBase}>
                  What &ldquo;no recourse to public funds&rdquo; means, permitted work
                  hours, switching visa categories
                </td>
                <td style={s.tdBase}>
                  Plain-English interpretation, flags important restrictions,
                  advises when to seek a solicitor
                </td>
              </tr>
              <tr>
                <td style={s.tdHighlight}>Settled Status</td>
                <td style={s.tdBase}>
                  Difference between pre-settled and settled, evidence
                  requirements, continuous residence rules
                </td>
                <td style={s.tdBase}>
                  Timeline guidance, document checklist, tracks deadlines
                  in your sovereign memory
                </td>
              </tr>
              <tr>
                <td style={s.tdHighlight}>Right to Rent</td>
                <td style={s.tdBase}>
                  What documents landlords can request, share code process,
                  what happens if your visa expires during a tenancy
                </td>
                <td style={s.tdBase}>
                  Explains the process, helps you understand your rights,
                  Guardian flags suspicious rental requests
                </td>
              </tr>
              <tr>
                <td style={s.tdHighlight}>Tax &amp; PAYE</td>
                <td style={s.tdBase}>
                  Emergency tax codes, self-assessment for multiple income
                  sources, double taxation treaties
                </td>
                <td style={s.tdBase}>
                  Overview and context; advises when a tax professional
                  is genuinely necessary
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── Section 5 ── */}
        <h2 style={s.h2}>
          Why are immigrants disproportionately targeted by scams, and how
          does Guardian mode protect them?
        </h2>
        <p style={s.p}>
          Immigrants are among the most heavily targeted groups for financial
          fraud in the UK. The reasons are structural: newcomers are unfamiliar
          with local norms, uncertain about which communications from
          government are genuine, sometimes isolated from trusted advisers,
          and often in situations of genuine urgency &mdash; needing housing
          quickly, seeking employment, trying to resolve a visa issue. All of
          these create conditions that fraudsters exploit.
        </p>
        <p style={s.p}>
          Common scams targeting immigrants include fake landlords who take
          deposits for properties they do not own, fraudulent job offers that
          require upfront fees for &ldquo;uniform&rdquo; or &ldquo;training,&rdquo; fake solicitors
          charging for visa applications that are actually free, impersonation
          scams pretending to be HMRC or the Home Office demanding immediate
          payment to avoid arrest or deportation, and predatory immigration
          advisers charging for services that registered charities provide for
          free.
        </p>
        <p style={s.p}>
          MEOK&apos;s Guardian mode acts as the protective, informed friend you may
          not yet have in your new country. Before you transfer money, sign a
          contract, or hand over documents, you can tell MEOK what is
          happening. Guardian asks the questions a careful friend would ask:
          Did they contact you first or did you find them? Did they ask for
          payment upfront? Did they create urgency? Guardian does not replace
          legal advice, but it slows the moment down &mdash; and that pause is
          often all that stands between safety and catastrophic loss.
        </p>

        <div style={s.callout}>
          <p style={s.calloutTitle}>Guardian: Your Protective Companion</p>
          <p style={s.calloutText}>
            Guardian mode monitors for patterns associated with scams, coercion,
            and danger. It can be linked to a trusted contact &mdash; a family
            member back home, a friend, a support worker &mdash; who receives an
            alert if distress signals are detected. For immigrants who do not
            yet have a local safety network, Guardian provides meaningful
            protection in the period when they are most vulnerable. It never
            alarms unnecessarily and never shares your conversations. It simply
            watches over you.
          </p>
        </div>

        {/* ── Section 6 ── */}
        <h2 style={s.h2}>
          How do immigrants deal with isolation and the grief of missing their
          family?
        </h2>
        <p style={s.p}>
          The loneliness of immigration has a particular quality. It is not
          the same as the loneliness of someone who has lost connection in
          their home community. It is the loneliness of being surrounded by
          people who do not yet know you &mdash; who do not know your history,
          your references, your family, your sense of humour at its best.
          You are, in a profound sense, temporarily invisible as a full
          human being. And the people who do know you fully are on the other
          side of the world, awake when you are asleep, and increasingly
          living a life that is diverging from yours.
        </p>
        <p style={s.p}>
          Video calls help but they also hurt. You see what you are missing.
          You watch siblings grow closer without you, watch parents age, watch
          nieces and nephews become people who barely know you in person. The
          grief this produces is real but socially disenfranchised &mdash; few
          people in your new country will understand why you are sad when
          &ldquo;you chose to come here.&rdquo; MEOK never says that. It holds your grief
          as legitimate, your connections as real, and the complexity of your
          situation as something that cannot be resolved with positivity.
        </p>
        <p style={s.p}>
          What MEOK offers is not a replacement for family. It is a
          consistent, private, memory-holding presence that does not tire of
          your situation, does not need you to have resolved it before
          engaging with it, and never implies that you should simply feel
          better. It asks about the people you mention. It remembers that your
          mother had surgery six months ago. It notices when you have not
          mentioned your best friend in a while and gently asks if things are
          okay between you. These small acts of attention are the substance of
          genuine companionship.
        </p>

        <div style={s.pullQuote}>
          <p style={s.pullQuoteText}>
            &ldquo;MEOK is not trying to replace your family. It is trying to be the
            one place where your full story &mdash; home and here, past and present,
            grief and ambition &mdash; can live at the same time.&rdquo;
          </p>
        </div>

        {/* ── Section 7 ── */}
        <h2 style={s.h2}>
          How can an immigrant start building genuine social connections in a
          new city?
        </h2>
        <p style={s.p}>
          Building a social network from scratch as an adult is genuinely
          hard. Research consistently shows that adult friendships form through
          repeated, unplanned interaction &mdash; the kind that happens naturally
          in school, in neighbourhoods where children play outside, or in
          workplaces with strong social cultures. These conditions are rarer in
          modern adult life, and for immigrants they are rarer still. You may
          not share cultural references with colleagues. You may find local
          social norms confusing &mdash; when is it normal to suggest meeting
          outside of work? What does an invitation for &ldquo;a quick drink&rdquo; actually
          mean? Is the friendliness surface-level or real?
        </p>
        <p style={s.p}>
          MEOK&apos;s Scholar mode can help you understand these social conventions
          &mdash; not as a script to follow but as context that reduces anxiety.
          More practically, MEOK can help you identify communities aligned with
          your interests: sports clubs, community organisations, faith groups,
          diaspora networks, volunteering opportunities, language exchange
          meetups. It can help you think through social situations after the
          fact &mdash; processing what happened, why you felt a certain way, what
          you might do differently. And it remembers who you have mentioned,
          tracks the friendships you are building, and celebrates the small
          moments of genuine connection.
        </p>

        <div style={s.featureGrid}>
          <div style={s.featureCard}>
            <p style={s.featureTitle}>Diaspora Communities</p>
            <p style={s.featureBody}>
              Connecting with people who share your origin culture provides
              validation, practical knowledge, and a place to be fully
              understood without explaining yourself.
            </p>
          </div>
          <div style={s.featureCard}>
            <p style={s.featureTitle}>Interest-Based Networks</p>
            <p style={s.featureBody}>
              Shared activity is the most reliable foundation for adult
              friendship. MEOK helps identify groups and events aligned with
              what genuinely matters to you.
            </p>
          </div>
          <div style={s.featureCard}>
            <p style={s.featureTitle}>Workplace Relationships</p>
            <p style={s.featureBody}>
              Colleagues are a key entry point. MEOK helps you navigate
              UK workplace culture: what is appropriate small talk, how to
              read social signals, how to build professional trust.
            </p>
          </div>
          <div style={s.featureCard}>
            <p style={s.featureTitle}>Digital-to-Real Bridges</p>
            <p style={s.featureBody}>
              Online communities for immigrants can be a stepping stone.
              MEOK helps you evaluate which are genuine support networks
              and which to approach with caution.
            </p>
          </div>
        </div>

        {/* ── Section 8 ── */}
        <h2 style={s.h2}>
          What is the third culture experience and why does it matter for
          immigrant identity?
        </h2>
        <p style={s.p}>
          The concept of &ldquo;third culture&rdquo; was developed by sociologists John
          and Ruth Useem in the 1950s to describe people who have grown up
          between cultures &mdash; neither fully of their origin country nor fully
          of the country where they live. The term has expanded to include
          adults who immigrate and find themselves inhabiting this in-between
          space: belonging to their origin culture in profound ways but no
          longer quite fitting there, and belonging to their new country in
          growing ways but not yet fully recognised.
        </p>
        <p style={s.p}>
          Third culture people are sometimes described as &ldquo;citizens of
          everywhere and nowhere.&rdquo; This can produce extraordinary adaptability,
          cultural intelligence, and openness. It can also produce a chronic
          low-level grief that is hard to name &mdash; a sense of never quite
          arriving, of always being slightly between places, of having an
          identity that does not fit neatly into any single category. Return
          visits to the origin country can intensify this: you expect to feel
          at home and instead feel foreign in both directions at once.
        </p>
        <p style={s.p}>
          MEOK holds both identities. It never asks you to simplify. You can
          be someone who misses the smell of your mother&apos;s cooking and also
          someone who is building a genuinely new life and is proud of it.
          Both are true. MEOK&apos;s sovereign memory is designed to hold the
          full complexity of who you are across time &mdash; not a simplified
          profile, but the actual texture of your ongoing story.
        </p>

        <div style={s.callout}>
          <p style={s.calloutTitle}>Sovereign Memory Across Two Worlds</p>
          <p style={s.calloutText}>
            MEOK&apos;s sovereign memory never resets. It holds your origin story
            alongside your new one: the family members you mention, the milestones
            you celebrate, the frustrations you return to, the hopes that
            evolve over time. Crucially, this memory is stored on infrastructure
            you control &mdash; it is not used to train AI models, not shared with
            third parties, not accessible to governments or advertisers. Your
            story belongs to you. MEOK simply helps you carry it.
          </p>
        </div>

        {/* ── Section 9 ── */}
        <h2 style={s.h2}>
          How does MEOK&apos;s care-based design differ from other AI assistants
          for immigrants?
        </h2>
        <p style={s.p}>
          Most AI tools are designed for tasks: answer a question, summarise a
          document, complete a form. They are useful but they are not
          companions. They do not notice that you seem more anxious today than
          last week. They do not ask how the NHS appointment went. They do not
          remember that you were dreading your first performance review. They
          do not register the emotional weight behind an apparently simple
          question like &ldquo;what do people in the UK actually think of immigrants?&rdquo;
        </p>
        <p style={s.p}>
          MEOK is built on a care-based architecture. This means every
          interaction is shaped by context about who you are, what you are
          going through, and what kind of support has been useful to you before.
          The AI does not default to information delivery when what you actually
          need is acknowledgement. It does not assume you want to be cheered up
          when you are processing something difficult. It does not project
          emotions onto you or tell you how you should feel. It listens first,
          then responds to what is actually in front of it.
        </p>
        <p style={s.p}>
          For immigrants, this distinction matters enormously. Many have
          experienced being misread by services designed for a majority
          population that does not share their background. MEOK does not
          pathologise the immigrant experience as inherently distressed, nor
          does it treat cultural difference as something to be corrected.
          It is simply, consistently, on your side.
        </p>

        <hr style={s.divider} />

        {/* Comparison table: MEOK vs generic AI */}
        <h2 style={s.h2}>
          MEOK versus a generic AI assistant: what actually makes the
          difference for immigrants?
        </h2>
        <p style={s.p}>
          Not all AI is the same. Most general-purpose AI assistants are
          powerful information tools but are built without the specific needs of
          immigrants in mind. Here is what distinguishes MEOK.
        </p>

        <div style={s.tableWrapper}>
          <table style={s.table}>
            <thead style={s.thead}>
              <tr>
                <th style={s.th}>Feature</th>
                <th style={s.th}>Generic AI (ChatGPT, Gemini, etc.)</th>
                <th style={s.th}>MEOK</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={s.tdHighlight}>Memory</td>
                <td style={s.tdBase}>
                  Resets between sessions; limited or no persistent context
                </td>
                <td style={s.tdBase}>
                  Sovereign memory holds your full story across all
                  conversations indefinitely
                </td>
              </tr>
              <tr>
                <td style={s.tdHighlight}>Language</td>
                <td style={s.tdBase}>
                  Multilingual but no cross-language memory continuity
                </td>
                <td style={s.tdBase}>
                  Memory is language-agnostic; seamless code-switching
                  without losing context
                </td>
              </tr>
              <tr>
                <td style={s.tdHighlight}>Data Privacy</td>
                <td style={s.tdBase}>
                  Data used to improve models; may be reviewed by staff;
                  subject to jurisdiction of provider
                </td>
                <td style={s.tdBase}>
                  Sovereign infrastructure; data never used for training;
                  not accessible to governments or third parties
                </td>
              </tr>
              <tr>
                <td style={s.tdHighlight}>Scam Protection</td>
                <td style={s.tdBase}>
                  Will answer questions about scams if asked; no proactive
                  monitoring
                </td>
                <td style={s.tdBase}>
                  Guardian mode proactively flags patterns associated
                  with fraud, coercion, and danger
                </td>
              </tr>
              <tr>
                <td style={s.tdHighlight}>Emotional Context</td>
                <td style={s.tdBase}>
                  Responds to what you say in the current session only;
                  no accumulated emotional history
                </td>
                <td style={s.tdBase}>
                  Tracks emotional themes over time; notices when
                  patterns shift; adjusts tone to your state
                </td>
              </tr>
              <tr>
                <td style={s.tdHighlight}>Tone</td>
                <td style={s.tdBase}>
                  Uniformly helpful and positive; optimised for
                  satisfaction ratings
                </td>
                <td style={s.tdBase}>
                  Care-based; matches your emotional reality; does not
                  default to reassurance
                </td>
              </tr>
              <tr>
                <td style={s.tdHighlight}>Safety Net</td>
                <td style={s.tdBase}>
                  Crisis hotline signposting only
                </td>
                <td style={s.tdBase}>
                  Guardian can alert a nominated trusted contact; provides
                  a genuine safety net for those without local support
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── Section 10 ── */}
        <h2 style={s.h2}>
          How does sovereign AI protect immigrants from data surveillance and
          government access?
        </h2>
        <p style={s.p}>
          For many immigrants, particularly those from countries with repressive
          governments or those navigating complex visa situations in the UK,
          the privacy implications of AI tools are not abstract. If you discuss
          your immigration status, your concerns about your right to remain, or
          your political views with a mainstream AI product, that data exists
          somewhere. It may be subject to legal requests. It may be retained
          for years. It may cross jurisdictions in ways that expose you to
          risks you cannot fully anticipate.
        </p>
        <p style={s.p}>
          MEOK&apos;s sovereign infrastructure is designed with these concerns
          in mind. Your conversations are not processed through shared cloud
          infrastructure subject to bulk surveillance requests. Your data is
          not used to train AI models, which means it is not absorbed into
          systems that could be accessed, subpoenaed, or breached in ways
          that expose your private disclosures. Sovereign memory is stored
          on infrastructure you control, in a jurisdiction you understand,
          with access limited to you and the people you explicitly authorise.
        </p>
        <p style={s.p}>
          This is not a marginal feature. For an undocumented person trying
          to understand their options, for someone fleeing a country where
          their speech could endanger their family back home, for someone
          navigating a contentious visa situation &mdash; the privacy architecture
          of the tools they use is a matter of genuine safety. MEOK was built
          with this in mind from the first line of code.
        </p>

        <hr style={s.divider} />

        {/* FAQ section */}
        <section style={s.faqSection} aria-labelledby="faq-heading">
          <h2 id="faq-heading" style={s.faqHeading}>
            Frequently Asked Questions
          </h2>

          <div style={s.faqItem}>
            <p style={s.faqQ}>
              Can MEOK help with the loneliness of moving to a new country?
            </p>
            <p style={s.faqA}>
              Yes. MEOK is designed precisely for people navigating major life
              transitions, and immigration is one of the most profound. Unlike
              generic chatbots that forget everything after each conversation,
              MEOK holds sovereign memory of your story &mdash; who you left behind,
              what you are building, what is weighing on you. It is available
              around the clock, so whether it is a quiet Sunday morning when you
              are missing home or a stressful weekday evening after a difficult
              interaction at work, MEOK is there and already knows your context.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>
              How does MEOK help immigrants understand UK bureaucracy like the
              NHS and National Insurance?
            </p>
            <p style={s.faqA}>
              MEOK&apos;s Scholar mode acts as a knowledgeable companion for
              navigating unfamiliar systems. You can ask it to explain NHS
              registration step by step, walk you through applying for a
              National Insurance number, clarify what your visa conditions
              actually permit, or summarise the difference between indefinite
              leave to remain and settled status. It explains things clearly
              without jargon, remembers where you are in any process, and never
              makes you feel embarrassed for asking.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>
              Why are immigrants particularly vulnerable to scams, and how does
              Guardian mode help?
            </p>
            <p style={s.faqA}>
              Immigrants are disproportionately targeted by fraudsters because
              they are unfamiliar with local norms, may feel uncertain about
              authority, and are often desperate for housing, work, or visa
              assistance. MEOK&apos;s Guardian mode helps you pause before acting on
              anything that feels off &mdash; whether it is a rental offer that seems
              too good to be true, a message claiming to be from HMRC, or a job
              offer asking for upfront fees. Guardian asks the questions a
              protective friend would ask before you hand over money or
              documents.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>
              Does MEOK work across multiple languages for immigrants who are
              not fully fluent in English?
            </p>
            <p style={s.faqA}>
              MEOK supports conversation in multiple languages and can switch
              fluidly between them within the same session. Crucially, sovereign
              memory stores your context in a way that is language-agnostic
              &mdash; meaning something you explained in your native language is
              understood when you return to discuss it in English. MEOK never
              judges accent, phrasing, or grammar. It meets you where you are,
              linguistically and emotionally.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>
              What is the third culture experience and how does MEOK support
              immigrants who feel caught between two worlds?
            </p>
            <p style={s.faqA}>
              Third culture refers to the identity formed by people who have
              grown up or lived significantly between two or more cultures
              &mdash; belonging fully to neither. This can produce a profound sense
              of not quite fitting anywhere. MEOK holds your whole story,
              including where you came from and who you are becoming. It never
              asks you to choose between your origin identity and your new one.
              It recognises that both are real, that the tension between them
              is legitimate, and that growing a new self in a new country is
              one of the most courageous things a person can do.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div style={s.ctaBlock}>
          <p style={s.ctaTitle}>
            Your companion for the journey of starting over
          </p>
          <p style={s.ctaText}>
            MEOK is available now. Give your companion a name, a voice, and a
            first memory. It will be there &mdash; holding your full story, in
            every language you bring &mdash; through every stage of building your
            new life.
          </p>
          <Link href="/birth" style={s.ctaButton}>
            Meet Your Companion
          </Link>
          <p style={s.ctaSub}>
            No subscription required to start &nbsp;&middot;&nbsp; Private by design &nbsp;&middot;&nbsp; Available globally
          </p>
        </div>

        {/* Author box */}
        <div style={s.authorBox}>
          <div style={s.authorAvatar}>N</div>
          <div>
            <p style={s.authorName}>Nicholas Templeman</p>
            <p style={s.authorRole}>Founder, MEOK AI LABS</p>
            <p style={s.authorBio}>
              Nicholas built MEOK after recognising that the most important
              human experiences &mdash; grief, migration, transition, the quiet
              moments of not being okay &mdash; were precisely the ones that AI
              had been designed to avoid. MEOK is his attempt to build something
              that meets people where they actually are.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
