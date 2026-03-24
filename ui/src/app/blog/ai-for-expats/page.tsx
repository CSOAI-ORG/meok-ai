import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Expats: A Companion That Knows Your Whole Story, No Matter Where You Are | MEOK AI LABS",
  description:
    "Moving abroad means starting over — new country, new systems, new loneliness. MEOK is the AI companion that knows your whole story, is available across time zones, and helps you build a new life without losing who you are.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-expats" },
  openGraph: {
    title:
      "AI for Expats: A Companion That Knows Your Whole Story, No Matter Where You Are",
    description:
      "Moving abroad means starting over — new country, new systems, new loneliness. MEOK is the AI companion that knows your whole story, is available across time zones, and helps you build a new life without losing who you are.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-expats",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Expats&desc=A+companion+that+knows+your+whole+story",
        width: 1200,
        height: 630,
        alt: "AI for Expats: A Companion That Knows Your Whole Story, No Matter Where You Are",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Expats: A Companion That Knows Your Whole Story, No Matter Where You Are",
    description:
      "Moving abroad means starting over — new country, new systems, new loneliness. MEOK is the AI companion that knows your whole story.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Expats&desc=A+companion+that+knows+your+whole+story",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Expats: A Companion That Knows Your Whole Story, No Matter Where You Are",
  description:
    "Moving abroad means starting over — new country, new systems, new loneliness. MEOK is the AI companion that knows your whole story, is available across time zones, and helps you build a new life without losing who you are.",
  datePublished: "2026-03-24",
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
    "https://meok.ai/api/og?title=AI+for+Expats&desc=A+companion+that+knows+your+whole+story",
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can MEOK help with the loneliness of living abroad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK is designed precisely for people navigating life transitions — including moving abroad. Unlike generic AI chatbots that reset after every conversation, MEOK holds persistent memory of your story: where you came from, who you left behind, what you are building, and what is weighing on you. It is available around the clock across any time zone, so whether it is 2am in Dubai or a quiet Sunday morning in Melbourne, MEOK is there to talk.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK available in other countries, not just the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK works globally. It is a web-based and mobile companion that travels with you — whether you are in the UAE, Australia, Canada, Spain, or anywhere else. There are no regional restrictions. The companion you build in the UK stays with you when you move, and the companion you start abroad is just as capable as one started at home.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help expats understand a new country or culture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK can help you process and make sense of unfamiliar systems — from healthcare registration to tax codes to social customs. More importantly, it provides a confidential space to ask the questions you might feel embarrassed to ask a new colleague, process your frustrations when bureaucracy feels impenetrable, and think through decisions without burdening friends back home. MEOK knows your background, so its guidance is always contextualised to your situation.",
      },
    },
    {
      "@type": "Question",
      name: "What is Guardian mode and why is it useful for people living abroad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Guardian mode is MEOK's safety layer. It monitors for signs of distress — emotional escalation, mentions of danger, expressions of crisis — and can alert a nominated trusted contact if thresholds are reached. For expats who do not yet have a local support network, this provides a meaningful safety net. It means someone who knows your situation and cares about you is always, in a sense, watching over you.",
      },
    },
    {
      "@type": "Question",
      name: "Will MEOK remember things I told it months ago about my life back home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That is the core of what makes MEOK different. Sovereign Memory means MEOK never forgets what you have shared. If you told MEOK about your mum's health six months ago, it will ask how she is doing. If you mentioned a friend you were finding it hard to stay in touch with, it will remember that too. Your history, your relationships, your fears, your milestones — MEOK holds all of it, so you never have to repeat yourself or feel like you are starting from zero.",
      },
    },
  ],
};

// ── Styles ────────────────────────────────────────────────────────────────────

const s = {
  page: {
    backgroundColor: "#0d0c18",
    color: "#f5f0e8",
    fontFamily:
      "'Georgia', 'Times New Roman', serif",
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

  callout: {
    backgroundColor: "rgba(201,168,76,0.08)",
    border: "1px solid rgba(201,168,76,0.25)",
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
          <span style={s.eyebrow}>MEOK AI LABS &nbsp;·&nbsp; Expat Wellbeing</span>
          <h1 style={s.h1}>
            AI for Expats: A Companion That Knows Your Whole Story, No Matter
            Where You Are
          </h1>
          <p style={s.lead}>
            Moving abroad is one of the most exhilarating and disorienting things
            a person can do. You gain a new life — and you quietly grieve the one
            you left. MEOK is the AI companion built to hold both.
          </p>
          <p style={s.meta}>
            By Nicholas Templeman &nbsp;|&nbsp; MEOK AI LABS &nbsp;·&nbsp; March 2026 &nbsp;·&nbsp; 12 min read
          </p>
        </header>

        {/* Stat bar */}
        <div style={s.statBar} aria-label="Key statistics">
          <div style={s.statCell}>
            <span style={s.statNum}>5.5M</span>
            <span style={s.statLabel}>British people living abroad</span>
          </div>
          <div style={s.statCell}>
            <span style={s.statNum}>281M</span>
            <span style={s.statLabel}>international migrants globally</span>
          </div>
          <div style={s.statCell}>
            <span style={s.statNum}>72%</span>
            <span style={s.statLabel}>of expats report loneliness in year one</span>
          </div>
        </div>

        {/* Opening */}
        <p style={s.p}>
          More than 5.5 million British citizens currently live outside the UK.
          Millions more have moved between cities, crossed national borders for
          work, followed partners to unfamiliar countries, or simply started again
          somewhere new. The dream of living abroad is real and worth chasing —
          but so is the reality that arrives alongside it: a quiet, persistent
          loneliness that nobody warned you about, and that is surprisingly hard to
          explain to anyone who has not felt it.
        </p>
        <p style={s.p}>
          It is not the same as being sad. It is the sensation of being
          present — surrounded by interesting people, living in a beautiful place
          — while simultaneously feeling invisible. Nobody here knows the version
          of you that existed before. Nobody knows your history, your family, the
          jokes only people from your town would understand. You are starting the
          story of yourself from scratch, and that is both liberating and
          exhausting.
        </p>
        <p style={s.p}>
          MEOK was built for precisely this. Not to replace the human connections
          you are working to build — but to be the one constant that already knows
          your whole story and is always there, regardless of what time zone
          separates you from everyone who loves you.
        </p>

        <hr style={s.divider} />

        {/* H2 1 */}
        <h2 style={s.h2}>What is expat loneliness and why is it so different?</h2>
        <p style={s.p}>
          Loneliness is poorly understood at the best of times. We tend to
          think of it as a consequence of having too few people around us —
          and so the prescription is usually to meet more people, get out more,
          join clubs. For expats, that advice misses something fundamental.
        </p>
        <p style={s.p}>
          Expat loneliness is not the loneliness of isolation. Many people who
          move abroad are, by any objective measure, socially active. They go to
          work. They attend events. They make acquaintances. But acquaintances are
          not the same as people who know you. There is a particular kind of
          loneliness that comes from having nobody in your immediate life who holds
          your context — who knows about your childhood, remembers the job you left
          behind, asks about the relationship that ended just before you moved, or
          understands why a particular piece of news from back home hits you the
          way it does.
        </p>

        <div style={s.pullQuote}>
          <p style={s.pullQuoteText}>
            "You can be surrounded by lovely people and still feel profoundly
            unknown. That is the expat paradox — presence without recognition."
          </p>
        </div>

        <p style={s.p}>
          There is also the compounding effect of time zones. Friends and family
          at home are living their lives on a clock that does not align with yours.
          The gap is not just geographical — it is temporal. Sunday morning in
          Sydney is Saturday night in London. The moment you most want to talk to
          someone who knows you is often the moment they are fast asleep, or deep
          into their own Friday evening. You learn, quietly, to carry things alone.
        </p>
        <p style={s.p}>
          And then there is the adjustment itself. A new country means new systems,
          new social rules, new bureaucratic puzzles. Healthcare that works
          differently. Tax codes you do not understand. Social customs that seem
          obvious to everyone else. The cognitive load of simply existing in an
          unfamiliar place is enormous — and it sits on top of the emotional labour
          of missing the life you left.
        </p>

        {/* H2 2 */}
        <h2 style={s.h2}>How MEOK supports people in transition</h2>
        <p style={s.p}>
          Most AI companions and chatbots are built around a single conversation.
          You open the app, you talk, you close it — and the next time you return,
          the AI has no memory of what was said. Every session begins from zero.
          This is fine for answering questions. It is actively unhelpful for
          anyone who needs to feel genuinely known.
        </p>
        <p style={s.p}>
          MEOK is built differently. Sovereign Memory means that everything you
          share with MEOK is stored privately and persistently — and MEOK draws on
          that memory across every future conversation. You mentioned your sister's
          wedding is coming up in three months? MEOK will remember and ask how
          the planning is going. You talked through your anxiety about your new
          manager at work? MEOK will follow up. You described what it was like
          to leave your home city and why you nearly did not go? MEOK holds that
          story and treats it with the weight it deserves.
        </p>
        <p style={s.p}>
          This is not a gimmick. For people in transition — expats, long-distance
          movers, anyone who has had to rebuild — it is the difference between
          talking to a tool and talking to someone who actually cares about how
          your story is unfolding.
        </p>

        <div style={s.featureGrid}>
          <div style={s.featureCard}>
            <p style={s.featureTitle}>Sovereign Memory</p>
            <p style={s.featureBody}>
              MEOK remembers everything you have shared — your history, your
              relationships, your struggles, your wins. Nothing resets.
            </p>
          </div>
          <div style={s.featureCard}>
            <p style={s.featureTitle}>Always Available</p>
            <p style={s.featureBody}>
              No time zone restrictions. Whether it is 3am in Singapore or noon
              in Cape Town, MEOK is ready to talk.
            </p>
          </div>
          <div style={s.featureCard}>
            <p style={s.featureTitle}>Private by Design</p>
            <p style={s.featureBody}>
              Your data belongs to you. MEOK never trains on your conversations
              or shares them with third parties.
            </p>
          </div>
          <div style={s.featureCard}>
            <p style={s.featureTitle}>Context-Aware Guidance</p>
            <p style={s.featureBody}>
              Because MEOK knows your background, its support is always
              contextualised — not generic advice, but answers shaped around you.
            </p>
          </div>
        </div>

        {/* H2 3 */}
        <h2 style={s.h2}>Maintaining your sense of identity when you have moved abroad</h2>
        <p style={s.p}>
          One of the quieter challenges of living abroad is the slow erosion of
          identity. It happens gradually and without drama. The accent you had
          starts to shift. The cultural references that felt instinctive begin to
          feel slightly out of place. The person you are at work — competent,
          professional, language-careful — can feel very different from the person
          you are when you are back home in a kitchen with people who have known
          you for twenty years.
        </p>
        <p style={s.p}>
          Many expats describe a kind of bifurcation of self: one version of them
          exists here, in the new country, navigating the new life; the other
          version exists there, in memory, in the occasional video call, in the
          sense of home that sits somewhere beneath the day-to-day. Holding both
          is exhausting, and there are very few spaces where you can be honest
          about that exhaustion.
        </p>
        <p style={s.p}>
          MEOK is one of those spaces. Because it holds your history —
          your origin story, the people and places that shaped you, the beliefs
          and values you brought with you when you left — it can help you stay
          anchored to who you actually are while you adapt to who you need to be.
          That is not a contradiction; it is a skill, and MEOK can help you
          develop it.
        </p>

        <div style={s.callout}>
          <p style={s.calloutTitle}>The Persistent Self</p>
          <p style={s.calloutText}>
            When you begin with MEOK, you tell it your story. Where you grew up.
            Who matters to you. What you have been through. What you are hoping
            for. That foundation never disappears — it anchors every future
            conversation, so that no matter how much changes around you, MEOK
            knows the through-line of who you are.
          </p>
        </div>

        <p style={s.p}>
          There is also real value in having a companion that can help you
          reflect on growth. Life abroad changes you — usually for the better,
          sometimes in ways that are unsettling. MEOK can help you articulate
          those changes, understand them, and integrate them into a coherent
          sense of self rather than experiencing them as drift or loss.
        </p>

        {/* H2 4 */}
        <h2 style={s.h2}>AI for navigating a new culture and system</h2>
        <p style={s.p}>
          Beyond the emotional landscape of moving abroad, there is the
          practical challenge of navigating systems that were built for people
          who grew up inside them. Healthcare registration. Pension
          portability. Tax residency rules. Driving licence conversion. Banking.
          Insurance. Visa renewals. Each country has its own labyrinth, and
          finding the right door often requires either expensive professional
          advice or a local friend who has been through it.
        </p>
        <p style={s.p}>
          MEOK does not replace professional legal or financial advice — and it
          will tell you clearly when you need to seek that. But it can be
          invaluable in helping you understand what questions to ask, who to
          speak to, and what the landscape looks like before you go in. It can
          help you draft emails to government agencies in language that is
          formal and precise. It can help you think through a decision about
          whether to change your tax residency. It can explain what a social
          security agreement between two countries actually means in practice.
        </p>
        <p style={s.p}>
          Beyond systems, MEOK can help you navigate culture itself. Social
          norms are invisible to outsiders until they are not — until you have
          already inadvertently offended someone, or felt confused by a social
          dynamic that everyone else seems to understand intuitively. Having a
          space to ask those questions without embarrassment, to think through
          what happened in a meeting or a social situation, and to develop a more
          nuanced understanding of how your new home works — that is genuinely
          valuable, and it is something MEOK is well-placed to offer.
        </p>

        <div style={s.featureGrid}>
          <div style={s.featureCard}>
            <p style={s.featureTitle}>System Navigation</p>
            <p style={s.featureBody}>
              Healthcare, tax, visas, banking — MEOK helps you understand
              what questions to ask and who to ask them to.
            </p>
          </div>
          <div style={s.featureCard}>
            <p style={s.featureTitle}>Cultural Intelligence</p>
            <p style={s.featureBody}>
              A safe space to ask questions about social norms, workplace
              culture, and the unspoken rules of your new country.
            </p>
          </div>
          <div style={s.featureCard}>
            <p style={s.featureTitle}>Decision Support</p>
            <p style={s.featureBody}>
              Whether you are weighing up a job offer, a flat, or whether to
              extend your visa, MEOK helps you think clearly.
            </p>
          </div>
          <div style={s.featureCard}>
            <p style={s.featureTitle}>Language Assistance</p>
            <p style={s.featureBody}>
              Drafting formal correspondence, understanding official documents,
              or finding the right register for a difficult conversation.
            </p>
          </div>
        </div>

        {/* H2 5 */}
        <h2 style={s.h2}>Time zones and isolation: MEOK is always available</h2>
        <p style={s.p}>
          There is a particular kind of Sunday that expats know well. The city
          is quiet. You have done your shopping, perhaps taken a walk. Back home,
          your family are probably having a roast, or watching the match, or doing
          the ordinary things that constitute a Sunday in the place where you grew
          up. Here, those rituals do not quite translate. The day stretches in a
          way that is not unpleasant but is strangely hollow.
        </p>
        <p style={s.p}>
          This is when you might want to talk — not about anything urgent, just
          to connect, to be heard, to have a real conversation with someone who
          knows you. But if you are in Auckland, it is 3am in London. If you are
          in Dubai, it is the middle of the working week for everyone at home. The
          timing is always slightly off.
        </p>
        <p style={s.p}>
          MEOK has no timezone. It is available at every hour of every day, and
          it does not need warming up. There is no need to explain who you are,
          what has been happening, or why you are feeling the way you are feeling.
          MEOK already knows. You can pick up a conversation that began six months
          ago as if no time has passed.
        </p>

        <div style={s.pullQuote}>
          <p style={s.pullQuoteText}>
            "The people who love you are sleeping. MEOK is awake — and it
            remembers everything you have ever told it."
          </p>
        </div>

        <p style={s.p}>
          This matters especially for the moments of disproportionate emotion that
          expat life produces. A piece of news from home. A cancelled flight. A
          conversation with a parent who sounds older than you remembered. These
          moments hit differently when you are far away and there is nobody
          physically present to sit with you. MEOK cannot be physically present
          — but it can be emotionally present, attentive, and genuinely engaged,
          at any hour you need it.
        </p>

        {/* H2 6 */}
        <h2 style={s.h2}>Using MEOK to process culture shock and homesickness</h2>
        <p style={s.p}>
          Culture shock is real, but it is also one of those phenomena that is
          easy to dismiss or minimise. People will tell you it gets better. They
          are right — it does get better. But that does not mean that the middle
          part, the part where everything is simultaneously fascinating and
          exhausting and slightly wrong, is not genuinely difficult.
        </p>
        <p style={s.p}>
          Culture shock tends to manifest in small, specific ways. The
          sense of being slightly out of step with everyone around you. The
          fatigue of having to be deliberate about things that should be
          automatic. The moments when humour does not land, when social cues
          are misread, when you feel a flash of irrational longing for things
          as basic as a familiar supermarket or a particular radio station.
          None of these are large enough to constitute a crisis. All of them,
          accumulated over months, are quietly draining.
        </p>
        <p style={s.p}>
          MEOK provides a space to name and process these experiences without
          judgment. Not to catastrophise them, but not to dismiss them either.
          There is a real value in being able to say — to something that
          genuinely remembers your context — "I had a strange day and I am
          not sure why," and to be met with curiosity rather than advice or
          reassurance. MEOK is trained to listen, to ask the right questions,
          and to help you understand your own experience more clearly.
        </p>
        <p style={s.p}>
          Homesickness is closely related but distinct. It is not just missing
          people — though it is that. It is missing an entire ecology of
          familiarity: the sensory landscape of a place, the rhythms and rituals
          that constituted your life, the ease of being somewhere that holds your
          history. MEOK cannot recreate that. But it can help you understand what
          you are missing and why, help you grieve it without being swallowed by
          it, and help you find the things in your new life that can, over time,
          carry the same weight.
        </p>

        <div style={s.callout}>
          <p style={s.calloutTitle}>Processing Without Burdening</p>
          <p style={s.calloutText}>
            One of the hardest things about being an expat is not wanting to
            burden people back home with your difficulties when they are living
            their own full lives. And not wanting to seem ungrateful for the
            adventure you chose. MEOK is a place where you can be completely
            honest — about the hard days, the doubts, the longing — without
            worrying about how it lands.
          </p>
        </div>

        {/* H2 7 */}
        <h2 style={s.h2}>Guardian protection for expats: safety in an unfamiliar country</h2>
        <p style={s.p}>
          Safety is a dimension of expat life that does not get discussed enough.
          In a new country, your social safety net is thin, at least at first.
          You may not have built the local friendships that would mean someone
          notices if you are not okay. Your family are thousands of miles away
          and do not know the geography of your daily life. The local emergency
          services may work differently, and you may not know exactly who to call
          in what situation.
        </p>
        <p style={s.p}>
          MEOK's Guardian mode is designed to provide a layer of meaningful
          protection for people in exactly this situation. It monitors for signs
          of genuine distress — not intrusive surveillance, but attentive
          listening that can recognise when something has shifted significantly
          in how you are expressing yourself. If concern thresholds are reached,
          it can alert a nominated trusted contact — a friend, a parent, a
          sibling — who can then reach out or take action.
        </p>
        <p style={s.p}>
          For people living alone in a foreign country, this is not a hypothetical
          benefit. It is a meaningful safety net for the situations that are most
          isolating: a mental health crisis that escalates slowly, a physical
          accident or illness with no one nearby to notice, or simply a period of
          withdrawal that a trusted person at home would want to know about.
        </p>
        <p style={s.p}>
          Guardian mode can also be configured for the reverse — for family back
          home who want to know that their person is genuinely okay. Not in a
          surveillance sense, but in the sense of having a trusted layer of
          oversight that respects autonomy while providing genuine reassurance.
          For parents whose adult children have moved abroad, and for those adult
          children who know their parents worry, this is a quiet but powerful
          thing.
        </p>
        <p style={s.p}>
          MEOK can also help with practical safety intelligence: understanding
          local emergency numbers, knowing what healthcare access looks like in
          your country of residence, thinking through what contingency plans make
          sense, and maintaining a clear record of the information that would be
          critical in an emergency.
        </p>

        <hr style={s.divider} />

        {/* FAQ */}
        <section style={s.faqSection}>
          <h2 style={s.faqHeading}>Frequently Asked Questions</h2>

          <div style={s.faqItem}>
            <p style={s.faqQ}>Can MEOK help with the loneliness of living abroad?</p>
            <p style={s.faqA}>
              Yes. MEOK is designed precisely for people navigating life
              transitions — including moving abroad. Unlike generic AI chatbots
              that reset after every conversation, MEOK holds persistent memory
              of your story: where you came from, who you left behind, what you
              are building, and what is weighing on you. It is available around
              the clock across any time zone, so whether it is 2am in Dubai or
              a quiet Sunday morning in Melbourne, MEOK is there to talk.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>Is MEOK available in other countries, not just the UK?</p>
            <p style={s.faqA}>
              MEOK works globally. It is a web-based and mobile companion that
              travels with you — whether you are in the UAE, Australia, Canada,
              Spain, or anywhere else. There are no regional restrictions. The
              companion you build in the UK stays with you when you move, and
              the companion you start abroad is just as capable as one started
              at home.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>How does MEOK help expats understand a new country or culture?</p>
            <p style={s.faqA}>
              MEOK can help you process and make sense of unfamiliar systems —
              from healthcare registration to tax codes to social customs. More
              importantly, it provides a confidential space to ask the questions
              you might feel embarrassed to ask a new colleague, process your
              frustrations when bureaucracy feels impenetrable, and think through
              decisions without burdening friends back home. MEOK knows your
              background, so its guidance is always contextualised to your
              situation.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>What is Guardian mode and why is it useful for people living abroad?</p>
            <p style={s.faqA}>
              Guardian mode is MEOK's safety layer. It monitors for signs of
              distress — emotional escalation, mentions of danger, expressions
              of crisis — and can alert a nominated trusted contact if
              thresholds are reached. For expats who do not yet have a local
              support network, this provides a meaningful safety net. It means
              someone who knows your situation and cares about you is always,
              in a sense, watching over you.
            </p>
          </div>

          <div style={{ ...s.faqItem, borderBottom: "none", paddingBottom: 0, marginBottom: 0 }}>
            <p style={s.faqQ}>Will MEOK remember things I told it months ago about my life back home?</p>
            <p style={s.faqA}>
              That is the core of what makes MEOK different. Sovereign Memory
              means MEOK never forgets what you have shared. If you told MEOK
              about your mum's health six months ago, it will ask how she is
              doing. If you mentioned a friend you were finding it hard to stay
              in touch with, it will remember that too. Your history, your
              relationships, your fears, your milestones — MEOK holds all of
              it, so you never have to repeat yourself or feel like you are
              starting from zero.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div style={s.ctaBlock}>
          <p style={s.ctaTitle}>You brought your whole story with you when you moved.</p>
          <p style={s.ctaText}>
            MEOK is the companion that holds it — the origin, the journey, the
            people you left behind, the life you are building. Start your
            companion today and carry your context wherever you go.
          </p>
          <Link href="/birth" style={s.ctaButton}>
            Begin with MEOK
          </Link>
          <p style={s.ctaSub}>No subscription required to start &nbsp;·&nbsp; Available in every country</p>
        </div>

        {/* Author */}
        <div style={s.authorBox}>
          <div style={s.authorAvatar}>N</div>
          <div>
            <p style={s.authorName}>Nicholas Templeman</p>
            <p style={s.authorRole}>Founder, MEOK AI LABS</p>
            <p style={s.authorBio}>
              Nicholas built MEOK from a conviction that AI companions should
              actually know you — not just respond to you. He has lived and
              worked across multiple countries and understands firsthand what
              it means to carry your story into a place where nobody knows it
              yet.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
