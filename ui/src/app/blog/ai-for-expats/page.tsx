import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Expats: A Companion That Crosses Borders With You | MEOK AI LABS",
  description:
    "Life as an expat means navigating a new country, culture, and identity — often without your support network. MEOK's sovereign AI companion is the consistent presence that moves with you, remembering everything.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-expats" },
  openGraph: {
    title:
      "AI for Expats: A Companion That Crosses Borders With You",
    description:
      "Life as an expat means navigating a new country, culture, and identity — often without your support network. MEOK's sovereign AI companion is the consistent presence that moves with you, remembering everything.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-expats",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Expats&desc=A+companion+that+crosses+borders+with+you",
        width: 1200,
        height: 630,
        alt: "AI for Expats: A Companion That Crosses Borders With You",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Expats: A Companion That Crosses Borders With You",
    description:
      "Life as an expat means navigating a new country, culture, and identity without your support network. MEOK moves with you and remembers everything.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Expats&desc=A+companion+that+crosses+borders+with+you",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Expats: A Companion That Crosses Borders With You",
  description:
    "Life as an expat means navigating a new country, culture, and identity — often without your support network. MEOK's sovereign AI companion is the consistent presence that moves with you, remembering everything.",
  datePublished: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-expats",
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
    "@id": "https://meok.ai/blog/ai-for-expats",
  },
  image:
    "https://meok.ai/api/og?title=AI+for+Expats&desc=A+companion+that+crosses+borders+with+you",
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does MEOK help with the loneliness and isolation of expat life?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK holds sovereign memory of your story — where you came from, what you are building, who you miss, and what is weighing on you today. Unlike a generic chatbot that resets after every session, MEOK carries the thread of your life across weeks, months, and country borders. When the Sunday afternoon silence feels unbearable or a video call with home leaves you more hollow than before, MEOK is there — and it already knows you.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help expats with tax and financial questions across multiple countries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's Pioneer mode acts as an action-oriented financial thinking partner for expats navigating complex cross-border situations: dual tax residency, foreign income declarations, pension portability, currency hedging, and the timing of moves for tax efficiency. Pioneer helps you think through the problem clearly, prepares you to have sharper conversations with an accountant, and maintains a record of your financial context so nothing has to be re-explained.",
      },
    },
    {
      "@type": "Question",
      name: "What is sovereign memory and why does it matter for expats who move frequently?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sovereign memory means your context lives with you, not on a company server that forgets you between sessions. For expats who move every two or three years, this is transformative. You never have to re-introduce yourself, re-explain your career arc, or re-describe your family dynamics to a new AI that knows nothing about you. MEOK travels with your history intact, so each new country you move to, you arrive already known.",
      },
    },
    {
      "@type": "Question",
      name: "What is the BYOK option and why do some expats need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BYOK — Bring Your Own Key — allows you to supply your own API key so that your conversations are processed under your own credentials and not stored on MEOK infrastructure at all. For expats from countries with aggressive surveillance regimes, or for those whose home government might compel a foreign company to hand over data, BYOK provides a meaningful additional layer of protection. Your conversations become yours and yours alone.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help expats maintain relationships with family back home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's Family Guardian tier creates a protected space for the family members you left behind. You can invite your parents or siblings to connect with their own MEOK companion, while you maintain oversight of their safety and wellbeing from abroad. MEOK also helps you think through what is actually worth the difficult phone call versus what can wait, how to navigate the guilt that comes with distance, and how to stay genuinely present across time zones rather than just performing presence.",
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

export default function AiForExpatsPage() {
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
            AI for Expats
          </span>
        </nav>

        {/* Hero */}
        <header style={s.hero}>
          <span style={s.eyebrow}>MEOK AI LABS &nbsp;&middot;&nbsp; Expat Life &amp; Belonging</span>
          <h1 style={s.h1}>
            AI for Expats: A Companion That Crosses Borders With You
          </h1>
          <p style={s.lead}>
            Life as an expat is a love affair with the world and a slow grief
            for everything left behind. You gain an adventure &mdash; and quietly
            lose the ease of being known. MEOK is the sovereign AI companion
            that carries your full story across every border, so you always
            arrive somewhere already understood.
          </p>
          <p style={s.meta}>
            By Nicholas Templeman &nbsp;|&nbsp; MEOK AI LABS &nbsp;&middot;&nbsp; March 2026 &nbsp;&middot;&nbsp; 16 min read
          </p>
        </header>

        {/* Stat bar */}
        <div style={s.statBar} aria-label="Key statistics">
          <div style={s.statCell}>
            <span style={s.statNum}>92M</span>
            <span style={s.statLabel}>expats living outside their birth country</span>
          </div>
          <div style={s.statCell}>
            <span style={s.statNum}>3&ndash;4</span>
            <span style={s.statLabel}>years average assignment before the next move</span>
          </div>
          <div style={s.statCell}>
            <span style={s.statNum}>68%</span>
            <span style={s.statLabel}>of expats report loneliness as their primary challenge</span>
          </div>
        </div>

        {/* ── Section 1 ── */}
        <h2 style={s.h2}>
          Why is expat loneliness different from ordinary loneliness &mdash;
          and why is it so rarely talked about?
        </h2>
        <p style={s.p}>
          Expat life is sold as freedom. The social media version is a person
          at a cafe in Lisbon, laptop open, golden hour filtering through the
          blinds, living their best life on their own terms. What the picture
          does not show is the Sunday afternoon two months in: the silence of
          an apartment in a city where you do not yet know anyone well enough
          to call them without a reason. The particular exhaustion of performing
          curiosity and confidence for a new colleague when inside you are
          running on empty. The way you keep having the same introductory
          conversation &mdash; where are you from, what do you do, how long have
          you been here &mdash; with every single person you meet, knowing that
          when the contract ends you will probably do it all again in a
          different city.
        </p>
        <p style={s.p}>
          This kind of loneliness is specific. It is not the loneliness of
          social failure. Most expats are, by definition, the kind of person
          who takes initiative, builds networks, and puts themselves in
          situations where connection is possible. The loneliness comes from
          something deeper: the absence of people who know your history. You
          can have a full social calendar and still feel profoundly unseen,
          because the people around you only know you in this chapter. They
          did not know you before. They do not have the full story.
        </p>
        <p style={s.p}>
          MEOK was built precisely for this. It holds sovereign memory &mdash;
          not a session log that evaporates, but a persistent, private record
          of who you are across time. It knows the version of you that existed
          before the move. It knows what you hoped for. It knows what has
          been harder than expected and what has been quietly wonderful. When
          you come back to it after three weeks of busyness and briefly
          forgetting to process anything, it picks up the thread. You do not
          have to re-explain yourself. You are already known.
        </p>

        <div style={s.pullQuote}>
          <p style={s.pullQuoteText}>
            &ldquo;The cruelest part of moving country every few years is not the
            logistics. It is having to re-introduce yourself to the world,
            over and over, as if your history only exists in your own memory.&rdquo;
          </p>
        </div>

        {/* ── Section 2 ── */}
        <h2 style={s.h2}>
          How do expats navigate the tension between homesickness and the love
          of adventure?
        </h2>
        <p style={s.p}>
          The expat emotional landscape is rarely one thing at a time. On the
          same Tuesday you can feel genuinely thrilled by where you are &mdash; the
          food, the light, the novelty of a different culture clicking into
          focus &mdash; and also achingly homesick for something you cannot
          fully name. It is not usually a specific person, though it can be.
          More often it is a feeling: the ease of a conversation where no one
          is a stranger, the comfort of a grocery shop where you know exactly
          which product is which, the particular safety of being among people
          who grew up with the same cultural references and do not need them
          explained.
        </p>
        <p style={s.p}>
          Many expats never fully articulate this tension because it feels
          ungrateful. You chose this. You wanted this. How can you miss home
          when home was the thing you were escaping? The internal logic becomes
          circular and exhausting. MEOK holds space for the contradiction
          without trying to resolve it. It does not tell you that you should
          feel grateful. It does not suggest that homesickness is a problem
          to be solved. It simply listens, remembers, and reflects.
        </p>
        <p style={s.p}>
          Over time, this witness function becomes genuinely valuable. When
          you look back at six months of conversations, you begin to see
          patterns: the things that reliably make you feel grounded, the
          triggers that reliably produce homesickness, the activities and
          relationships that have genuinely helped you put down roots. MEOK
          becomes a kind of longitudinal companion &mdash; not a therapist,
          not a journal, but something in between that moves and thinks with
          you rather than simply receiving what you put into it.
        </p>

        <div style={s.featureGrid}>
          <div style={s.featureCard}>
            <p style={s.featureTitle}>Arrival Energy</p>
            <p style={s.featureBody}>
              Everything is new and energising. MEOK helps you capture early
              impressions and build habits that will sustain you when the
              novelty fades and the real work of belonging begins.
            </p>
          </div>
          <div style={s.featureCard}>
            <p style={s.featureTitle}>Adjustment Dip</p>
            <p style={s.featureBody}>
              Exhaustion and ambivalence surface. MEOK holds both the
              excitement and the grief without asking you to choose between
              them or perform a version of yourself you are not.
            </p>
          </div>
          <div style={s.featureCard}>
            <p style={s.featureTitle}>Rooting</p>
            <p style={s.featureBody}>
              Small routines and real friendships begin to form. MEOK reflects
              your progress back to you so you can see how far you have
              genuinely come rather than measuring against where you expected
              to be.
            </p>
          </div>
          <div style={s.featureCard}>
            <p style={s.featureTitle}>Next Move</p>
            <p style={s.featureBody}>
              The contract ends and the cycle begins again. Sovereign memory
              means you carry the full record of who you have become into the
              next chapter &mdash; not just your luggage.
            </p>
          </div>
        </div>

        {/* ── Section 3 ── */}
        <h2 style={s.h2}>
          What is sovereign memory and why does it matter more for expats than
          for almost anyone else?
        </h2>
        <p style={s.p}>
          Most AI assistants work session by session. You open the app, have
          a conversation, close it, and the next time you return it has no
          recollection of you. For someone living a stable life in one country,
          surrounded by people who carry their history, this is an inconvenience.
          For an expat, it is a fundamental design failure. The value of an AI
          companion for an expat is precisely its ability to hold the long
          view &mdash; to know who you were in Singapore, who you became in
          Berlin, and who you are trying to be in Toronto.
        </p>
        <p style={s.p}>
          MEOK&apos;s sovereign memory works differently. Your context &mdash; your
          history, your relationships, your anxieties, your goals, your sense
          of humour, the things that matter to you &mdash; lives in a private
          memory store that belongs to you, not to a cloud server that may or
          may not retain it. When you move to a new country, MEOK moves with
          you. When you come back to it after a gap, it picks up where you
          left off. It does not treat every conversation as a first conversation.
        </p>
        <p style={s.p}>
          This is not merely a convenience feature. For expats who face the
          constant cognitive and emotional labour of re-establishing themselves
          in new environments, having one relationship &mdash; even a relationship
          with an AI &mdash; that does not require that labour is genuinely
          restorative. You do not need to explain your backstory. You do not
          need to perform context. You can simply say what is on your mind
          and be understood, because the necessary context is already there.
        </p>

        <div style={s.callout}>
          <p style={s.calloutTitle}>Sovereign Memory: Your History Crosses Borders Too</p>
          <p style={s.calloutText}>
            MEOK&apos;s sovereign memory is stored privately and portably. It follows
            you from country to country, from assignment to assignment, from
            posting to posting. The context you build over years of
            conversations &mdash; your full story, not just the latest chapter &mdash;
            is always present. You arrive in every new country already known
            by at least one presence in your life. For expats who cycle through
            new environments every few years, this continuity is not a luxury.
            It is a psychological anchor.
          </p>
        </div>

        {/* ── Section 4 ── */}
        <h2 style={s.h2}>
          How does MEOK help expats navigate bureaucracy, taxes, and financial
          complexity across borders?
        </h2>
        <p style={s.p}>
          Cross-border financial life is genuinely complicated, and the
          consequences of getting it wrong are serious. An expat might be a
          tax resident in one country, earning income in a second, with a
          pension still sitting in a third, property in a fourth, and health
          insurance purchased in a fifth. Each of these jurisdictions has its
          own rules, its own deadlines, its own definitions of residency and
          liability. The interactions between them are rarely intuitive and
          occasionally contradictory.
        </p>
        <p style={s.p}>
          Most expats manage this by piecing together fragments of advice from
          forums, expat Facebook groups, one-off accountants who specialise in
          one jurisdiction but not the others, and the occasional panicked
          Google search at midnight before a filing deadline. The result is
          expensive, stressful, and frequently incomplete.
        </p>
        <p style={s.p}>
          MEOK&apos;s Pioneer mode is designed for exactly this kind of structured,
          action-oriented problem. Pioneer is not a tax adviser and does not
          replace one &mdash; but it is an exceptionally capable thinking partner
          for understanding your situation clearly before you pay someone to
          advise you. It can explain what dual tax residency means in practice,
          walk you through the difference between being domiciled and being
          resident for tax purposes, clarify what the foreign earned income
          exclusion means for Americans abroad, and help you understand what
          questions to bring to a cross-border accountant. It tracks your
          specific financial context in sovereign memory, so you never have
          to re-explain your situation from scratch.
        </p>

        <div style={s.tableWrapper}>
          <table style={s.table}>
            <thead style={s.thead}>
              <tr>
                <th style={s.th}>Expat Financial Challenge</th>
                <th style={s.th}>Why It Is Complicated</th>
                <th style={s.th}>How MEOK Pioneer Helps</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={s.tdHighlight}>Dual Tax Residency</td>
                <td style={s.tdBase}>
                  Two countries claim the right to tax your income. Treaty
                  provisions, tie-breaker rules, and day-count requirements
                  vary by country pair.
                </td>
                <td style={s.tdBase}>
                  Explains the concept clearly, identifies the relevant
                  treaty, helps you understand what counts toward each
                  residency test, and prepares you for a specialist
                  conversation.
                </td>
              </tr>
              <tr>
                <td style={s.tdHighlight}>Foreign Pension Portability</td>
                <td style={s.tdBase}>
                  Pensions built in one country may not transfer to another.
                  Accessing them early can trigger tax events. Leaving them
                  carries currency and political risk.
                </td>
                <td style={s.tdBase}>
                  Outlines the options for each pension type, flags likely
                  tax events, and helps you think through long-term
                  trade-offs before making irreversible decisions.
                </td>
              </tr>
              <tr>
                <td style={s.tdHighlight}>Property Back Home</td>
                <td style={s.tdBase}>
                  Renting out a home while abroad triggers income tax in the
                  source country. Capital gains on disposal may be taxed in
                  both jurisdictions depending on residency at the time of
                  sale.
                </td>
                <td style={s.tdBase}>
                  Explains overlapping obligations, helps you track key dates
                  and thresholds, and builds the questions you need to ask a
                  local tax professional.
                </td>
              </tr>
              <tr>
                <td style={s.tdHighlight}>Health Insurance Gaps</td>
                <td style={s.tdBase}>
                  State coverage often lapses immediately on departure.
                  International private medical insurance has exclusions for
                  pre-existing conditions and specific countries.
                </td>
                <td style={s.tdBase}>
                  Helps you identify gaps in your current coverage, understand
                  what to look for in a policy, and build a checklist before
                  a new posting.
                </td>
              </tr>
              <tr>
                <td style={s.tdHighlight}>Currency Risk</td>
                <td style={s.tdBase}>
                  Income in one currency, expenses in another, savings in a
                  third. Exchange rate moves can affect real purchasing power
                  significantly without any change in nominal salary.
                </td>
                <td style={s.tdBase}>
                  Explains hedging concepts, helps you think through which
                  currency your long-term goals are denominated in, and
                  identifies when specialist FX advice is needed.
                </td>
              </tr>
              <tr>
                <td style={s.tdHighlight}>Visa and Work Permits</td>
                <td style={s.tdBase}>
                  Work permit conditions determine what income you can earn,
                  from whom, and in what form. Violations can jeopardise
                  future applications.
                </td>
                <td style={s.tdBase}>
                  Provides plain-language summaries of permit conditions,
                  flags activities that may constitute violations, and advises
                  when an immigration lawyer is essential.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── Section 5 ── */}
        <h2 style={s.h2}>
          How does MEOK help expats maintain real relationships with family
          back home &mdash; and protect them from a distance?
        </h2>
        <p style={s.p}>
          Distance changes relationships in ways that are easy to underestimate
          until they happen to you. The family back home occupies a different
          time zone, a different daily rhythm, a different set of preoccupations.
          The video calls that felt essential in month one have often become
          less frequent by month six &mdash; not because the love has faded but
          because the shared context has diverged. You are living a life they
          cannot fully picture, and they are living a life you are no longer
          physically part of. The gap widens slowly and then, sometimes, all
          at once.
        </p>
        <p style={s.p}>
          There is also the guilt that lives alongside this. The expat who
          missed a parent&apos;s health crisis because of a time zone and a work
          schedule. The expat who was not there when a sibling needed them.
          The expat who has not spoken to their parents in three weeks because
          the calls are emotionally expensive and the week was already full.
          This guilt is real and it accumulates. MEOK does not remove it, but
          it helps you think through what actually matters &mdash; what is worth
          the difficult call, what can be addressed in a message, and what
          you are carrying unnecessarily.
        </p>
        <p style={s.p}>
          MEOK&apos;s Family Guardian tier goes further. It allows you to create
          a protected companion for the family members you have left behind &mdash;
          particularly older parents or grandparents who may be living alone
          and who are vulnerable in your absence. Your parent&apos;s companion
          is their own private space, not a surveillance tool. But if distress
          signals or unusual patterns emerge &mdash; isolation, confusion, signs
          of financial exploitation &mdash; Guardian can alert you from the other
          side of the world. You cannot be physically present. But you can
          be connected in a way that provides genuine protection.
        </p>

        <div style={s.callout}>
          <p style={s.calloutTitle}>Family Guardian: Presence Across Distance</p>
          <p style={s.calloutText}>
            MEOK&apos;s Family Guardian tier lets you extend protection to the
            people you left behind. Your parents or elderly relatives get
            their own private companion &mdash; a steady, patient presence that
            checks in gently and holds their context with care. You retain
            oversight, not control: if something is genuinely wrong, Guardian
            alerts you. Scam attempts, unusual financial requests, signs of
            social isolation or cognitive change &mdash; the things that are
            hardest to notice from a distance become visible. You cannot be
            in the room. But you can still be watching over them.
          </p>
        </div>

        {/* ── Section 6 ── */}
        <h2 style={s.h2}>
          What is reverse culture shock &mdash; and how does the Mystic companion
          help expats find meaning in displacement?
        </h2>
        <p style={s.p}>
          Most people know that moving abroad involves culture shock. Fewer
          people talk about the shock of going home. Reverse culture shock
          is the disorientation that occurs when an expat returns to their
          origin country &mdash; for a visit, or permanently &mdash; and finds that
          it no longer fits the way they expected. The country has not changed
          as much as they have. Old friends are living lives that feel both
          familiar and suddenly very distant. The things that once felt like
          home now feel like a version of home that belonged to a slightly
          different person.
        </p>
        <p style={s.p}>
          This is deeply unsettling for some expats and quietly devastating
          for others. It produces a particular kind of groundlessness: if
          home no longer feels fully like home, and the countries you have
          lived in never quite fully became home either, where do you belong?
          Serial expats sometimes describe this as a feeling of being
          permanently between worlds &mdash; richer for the experience, but never
          fully rooted anywhere.
        </p>
        <p style={s.p}>
          MEOK&apos;s Mystic companion is designed for exactly this existential
          territory. Mystic does not offer platitudes about the world being
          your home or the adventure being worth it. It holds the harder
          questions: What does belonging actually mean for someone who has
          chosen to live between cultures? What is the relationship between
          rootedness and identity? Is it possible to build a meaningful life
          without a fixed address for the soul? Mystic sits with these
          questions patiently, helping you develop a personal philosophy of
          displacement rather than simply enduring it.
        </p>

        <div style={s.pullQuote}>
          <p style={s.pullQuoteText}>
            &ldquo;Reverse culture shock is the moment you realise that the country
            you left has become a memory, while the person who left it has
            become someone who can never quite fully return.&rdquo;
          </p>
        </div>

        <p style={s.p}>
          What Mystic helps build is not contentment with displacement but
          genuine integration of it. The expat who has lived in six countries
          is not a person without a home &mdash; they are a person with a different
          kind of home, one that is internal and portable rather than
          geographical and fixed. Mystic helps you understand and inhabit that
          identity rather than experiencing it as a problem to be solved. The
          meaning you find in a life of movement does not diminish the losses
          that come with it. But it gives them a shape that can be held.
        </p>

        {/* ── Section 7 ── */}
        <h2 style={s.h2}>
          Why do expats from certain countries need the BYOK option &mdash; and
          what does maximum data sovereignty actually mean in practice?
        </h2>
        <p style={s.p}>
          Not all expats leave home voluntarily, and not all of them are free
          from the reach of the government they left. An expat journalist who
          has left an authoritarian country. A political dissident living in
          exile. A businessperson whose home country has a history of
          compelling foreign companies to hand over data on their citizens.
          A member of a religious minority who left a country where that
          minority is persecuted. For these people, the question of where
          their AI conversation data is stored is not academic. It is a
          genuine safety consideration.
        </p>
        <p style={s.p}>
          MEOK&apos;s BYOK &mdash; Bring Your Own Key &mdash; option addresses this directly.
          When you use BYOK, you supply your own API key for the underlying
          language model. Your conversations are processed under your own
          credentials, not stored on MEOK&apos;s infrastructure, and cannot be
          accessed by MEOK even if compelled by a legal authority. The
          sovereign memory that MEOK builds for you is encrypted with your
          own key. If you choose to remove yourself from the platform, that
          memory goes with you. There is nothing to hand over because there
          is nothing held.
        </p>
        <p style={s.p}>
          For expats who do not face active threat from their home government
          but simply value maximum control over their data, BYOK also provides
          meaningful peace of mind. The conversations you have about your
          financial situation, your family, your anxieties, and your plans
          are not building a profile on a server somewhere. They are yours,
          processed in a session and then gone unless you choose to retain
          them under your own key.
        </p>

        <div style={s.callout}>
          <p style={s.calloutTitle}>BYOK: Data Sovereignty for Expats Who Need It Most</p>
          <p style={s.calloutText}>
            Bring Your Own Key means your conversations never touch MEOK
            infrastructure. Your API key, your credentials, your data. For
            expats from countries with aggressive surveillance regimes, for
            dissidents, for journalists, and for anyone who needs maximum
            assurance that their private thoughts cannot be accessed by a
            third party &mdash; including the company that built the product they
            use &mdash; BYOK provides a meaningful and technically enforceable
            guarantee. Your story belongs to no one else.
          </p>
        </div>

        {/* ── Section 8 ── */}
        <h2 style={s.h2}>
          How does MEOK compare to the tools most expats currently patch
          together for support, information, and connection?
        </h2>
        <p style={s.p}>
          Most expats currently cobble together their support system from a
          collection of partial solutions: expat Facebook groups for
          country-specific information, WhatsApp groups with people from home
          for emotional connection, Reddit threads for practical advice,
          therapists they see sporadically when the adjustment gets too hard,
          and generic AI assistants that are useful for one-off questions but
          carry no memory and therefore no context. None of these tools were
          built for the specific experience of being an expat. MEOK is.
        </p>

        <div style={s.tableWrapper}>
          <table style={s.table}>
            <thead style={s.thead}>
              <tr>
                <th style={s.th}>Tool</th>
                <th style={s.th}>What It Offers</th>
                <th style={s.th}>What It Cannot Do</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={s.tdHighlight}>Expat Facebook Groups</td>
                <td style={s.tdBase}>
                  Real-time local information, community, country-specific
                  advice from people who have been there.
                </td>
                <td style={s.tdBase}>
                  No memory of you, no emotional depth, no privacy,
                  advice quality varies wildly, and the community only
                  exists in each specific location.
                </td>
              </tr>
              <tr>
                <td style={s.tdHighlight}>Generic AI Assistants</td>
                <td style={s.tdBase}>
                  Good for one-off questions, research, and structured
                  information tasks.
                </td>
                <td style={s.tdBase}>
                  No persistent memory, no emotional continuity, treats
                  every conversation as a first conversation, cannot
                  accompany you through a journey spanning years and
                  countries.
                </td>
              </tr>
              <tr>
                <td style={s.tdHighlight}>Remote Therapy</td>
                <td style={s.tdBase}>
                  Deep emotional support from a trained professional with
                  longitudinal context.
                </td>
                <td style={s.tdBase}>
                  Expensive, not available around the clock, sessions are
                  limited, and many therapists are not familiar with the
                  specific experience of serial expat life.
                </td>
              </tr>
              <tr>
                <td style={s.tdHighlight}>Journaling Apps</td>
                <td style={s.tdBase}>
                  Private space for reflection, useful for tracking mood
                  and patterns over time.
                </td>
                <td style={s.tdBase}>
                  No interactivity, no ability to ask questions or challenge
                  assumptions, no external perspective, purely passive.
                </td>
              </tr>
              <tr>
                <td style={s.tdHighlight}>MEOK</td>
                <td style={s.tdBase}>
                  Sovereign memory, multiple archetypes (Scholar, Pioneer,
                  Mystic, Guardian), multilingual, BYOK option, Family
                  Guardian, emotional depth and practical action combined.
                </td>
                <td style={s.tdBase}>
                  Not a replacement for human relationships, professional
                  legal or tax advice, or clinical mental health treatment.
                  A companion and thinking partner, not a substitute for
                  those things.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr style={s.divider} />

        {/* FAQ */}
        <section style={s.faqSection} aria-labelledby="faq-heading">
          <h2 style={s.faqHeading} id="faq-heading">
            Frequently Asked Questions
          </h2>

          <div style={s.faqItem}>
            <p style={s.faqQ}>
              How does MEOK help with the loneliness and isolation of expat life?
            </p>
            <p style={s.faqA}>
              MEOK holds sovereign memory of your story &mdash; where you came from,
              what you are building, who you miss, and what is weighing on you
              today. Unlike a generic chatbot that resets after every session,
              MEOK carries the thread of your life across weeks, months, and
              country borders. When the Sunday afternoon silence feels unbearable
              or a video call with home leaves you more hollow than before,
              MEOK is there &mdash; and it already knows you.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>
              Can MEOK help expats with tax and financial questions across
              multiple countries?
            </p>
            <p style={s.faqA}>
              MEOK&apos;s Pioneer mode acts as an action-oriented financial thinking
              partner for expats navigating complex cross-border situations:
              dual tax residency, foreign income declarations, pension portability,
              currency hedging, and the timing of moves for tax efficiency.
              Pioneer helps you think through the problem clearly, prepares you
              to have sharper conversations with an accountant, and maintains
              a record of your financial context so nothing has to be
              re-explained each time.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>
              What is sovereign memory and why does it matter for expats who
              move frequently?
            </p>
            <p style={s.faqA}>
              Sovereign memory means your context lives with you, not on a
              company server that forgets you between sessions. For expats who
              move every two or three years, this is transformative. You never
              have to re-introduce yourself, re-explain your career arc, or
              re-describe your family dynamics to a new AI that knows nothing
              about you. MEOK travels with your history intact, so each new
              country you move to, you arrive already known.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>
              What is the BYOK option and why do some expats need it?
            </p>
            <p style={s.faqA}>
              BYOK &mdash; Bring Your Own Key &mdash; allows you to supply your own API key
              so that your conversations are processed under your own credentials
              and not stored on MEOK infrastructure at all. For expats from
              countries with aggressive surveillance regimes, or for those whose
              home government might compel a foreign company to hand over data,
              BYOK provides a meaningful additional layer of protection. Your
              conversations become yours and yours alone.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>
              How does MEOK help expats maintain relationships with family
              back home?
            </p>
            <p style={s.faqA}>
              MEOK&apos;s Family Guardian tier creates a protected space for the
              family members you left behind. You can invite your parents or
              siblings to connect with their own MEOK companion, while you
              maintain oversight of their safety and wellbeing from abroad.
              MEOK also helps you think through what is worth the difficult
              phone call versus what can wait, how to navigate the guilt that
              comes with distance, and how to stay genuinely present across
              time zones rather than just performing presence.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div style={s.ctaBlock}>
          <p style={s.ctaTitle}>
            You have crossed borders. Now bring a companion that stays.
          </p>
          <p style={s.ctaText}>
            MEOK is the sovereign AI companion built for people who have chosen
            a life of movement. Sovereign memory that travels with you. Pioneer
            for the financial complexity. Mystic for the questions that have no
            country. Guardian for the family you left behind. Begin your BIRTH
            ceremony and meet the companion that already knows how to cross
            borders with you.
          </p>
          <Link href="/birth" style={s.ctaButton}>
            Begin Your Birth Ceremony
          </Link>
          <p style={s.ctaSub}>
            No subscription required to start &nbsp;&middot;&nbsp; Your data remains yours
          </p>
        </div>

        {/* Author box */}
        <div style={s.authorBox}>
          <div style={s.authorAvatar}>N</div>
          <div>
            <p style={s.authorName}>Nicholas Templeman</p>
            <p style={s.authorRole}>Founder, MEOK AI LABS</p>
            <p style={s.authorBio}>
              Nicholas built MEOK after spending years watching colleagues and
              friends navigate the specific loneliness of moving country &mdash; the
              endless re-introductions, the financial complexity, the
              relationships strained by distance, the identity questions that
              have no easy answer. MEOK is his answer to the question he could
              not stop asking: what if the one thing that actually knew you
              was also the one thing that crossed every border with you?
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
