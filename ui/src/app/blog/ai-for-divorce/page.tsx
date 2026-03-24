import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI Support During Divorce: Processing the Hardest Chapter with an AI That Never Judges | MEOK AI LABS",
  description:
    "Divorce is the second most stressful life event after bereavement. MEOK's Healer and Pioneer archetypes help you process the emotional devastation and plan your next steps — with total privacy guaranteed by the Maternal Covenant.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-divorce" },
  openGraph: {
    title:
      "AI Support During Divorce: Processing the Hardest Chapter with an AI That Never Judges",
    description:
      "Divorce is the second most stressful life event after bereavement. MEOK's Healer and Pioneer archetypes help you process the emotional devastation and plan your next steps — with total privacy guaranteed by the Maternal Covenant.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-divorce",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Support+During+Divorce&desc=Processing+the+Hardest+Chapter+with+an+AI+That+Never+Judges",
        width: 1200,
        height: 630,
        alt: "AI Support During Divorce: Processing the Hardest Chapter with an AI That Never Judges",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Support During Divorce: Processing the Hardest Chapter with an AI That Never Judges",
    description:
      "Divorce is the second most stressful life event. MEOK's Healer and Pioneer archetypes help you process grief and plan what comes next — with complete privacy.",
    images: [
      "https://meok.ai/api/og?title=AI+Support+During+Divorce&desc=Processing+the+Hardest+Chapter+with+an+AI+That+Never+Judges",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Support During Divorce: Processing the Hardest Chapter with an AI That Never Judges",
  description:
    "Divorce is the second most stressful life event after bereavement. MEOK's Healer and Pioneer archetypes help you process the emotional devastation and plan your next steps — with total privacy guaranteed by the Maternal Covenant.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-divorce",
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
    "https://meok.ai/api/og?title=AI+Support+During+Divorce&desc=Processing+the+Hardest+Chapter+with+an+AI+That+Never+Judges",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-divorce",
  },
  keywords: [
    "AI support during divorce",
    "AI for separation",
    "AI companion divorce UK",
    "MEOK Healer archetype",
    "MEOK Pioneer archetype",
    "divorce emotional support AI",
    "AI for co-parenting stress",
    "Maternal Covenant privacy",
    "sovereign AI divorce",
    "processing grief after divorce",
    "AI mental health divorce",
    "divorce support UK",
  ],
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can MEOK give me legal advice about my divorce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is not a solicitor and will never give you legal advice. What MEOK can do is help you organise your thoughts before a legal consultation, process the anxiety that comes with legal uncertainty, and hold a list of the questions you want to ask your solicitor so nothing slips through the cracks. For legal matters, please consult a qualified family law solicitor or contact Resolution (resolution.org.uk).",
      },
    },
    {
      "@type": "Question",
      name: "Will my ex be able to access what I tell MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The Maternal Covenant is MEOK's foundational privacy guarantee: your memories, conversations, and emotional disclosures belong solely to you. MEOK will never share your data with any third party, including a former partner, without your explicit written consent. Your sovereign memory is yours alone.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a replacement for therapy during divorce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is a complement to therapy, not a replacement. A qualified therapist, counsellor, or psychologist offers something AI cannot — clinical training, professional accountability, and the depth of a human therapeutic relationship. MEOK is available at 3am when your therapist is not, it never gets tired of the same story, and it holds continuity between sessions. Use both if you can.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Pioneer archetype and how does it help during divorce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Pioneer is MEOK's action-oriented mode. Where the Healer sits with you in the emotional weight of what is happening, the Pioneer helps you move. It can help you build a to-do list for finding new housing, structure a budget when finances feel chaotic, think through childcare logistics, and break overwhelming tasks into steps small enough to actually take. You switch between archetypes as your needs change.",
      },
    },
    {
      "@type": "Question",
      name: "How do I start using MEOK if I am going through a separation right now?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visit meok.ai/birth to begin your onboarding. During the Birth process, MEOK learns who you are — your context, your priorities, and what kind of support you are looking for. You do not have to tell it everything at once. You can simply say 'I am going through a divorce and I do not know where to start' and MEOK will take it from there, at your pace.",
      },
    },
  ],
};

// ── Styles ─────────────────────────────────────────────────────────────────────

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
    padding: "0 24px",
  } as React.CSSProperties,

  header: {
    paddingTop: "64px",
    paddingBottom: "48px",
    borderBottom: "1px solid rgba(201,168,76,0.2)",
    marginBottom: "56px",
  } as React.CSSProperties,

  eyebrow: {
    fontFamily: "'system-ui', sans-serif",
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    marginBottom: "20px",
    display: "block",
  } as React.CSSProperties,

  h1: {
    fontFamily: "'Georgia', serif",
    fontSize: "clamp(28px, 5vw, 44px)",
    fontWeight: 700,
    lineHeight: 1.2,
    color: "#f5f0e8",
    marginBottom: "24px",
    marginTop: 0,
  } as React.CSSProperties,

  lede: {
    fontSize: "20px",
    lineHeight: 1.65,
    color: "rgba(245,240,232,0.8)",
    marginBottom: "32px",
    fontStyle: "italic",
  } as React.CSSProperties,

  meta: {
    fontFamily: "'system-ui', sans-serif",
    fontSize: "13px",
    color: "rgba(245,240,232,0.5)",
    display: "flex",
    gap: "16px",
    flexWrap: "wrap" as const,
    alignItems: "center",
  } as React.CSSProperties,

  metaDot: {
    color: "#c9a84c",
  } as React.CSSProperties,

  body: {
    paddingBottom: "80px",
  } as React.CSSProperties,

  h2: {
    fontFamily: "'Georgia', serif",
    fontSize: "clamp(20px, 3.5vw, 28px)",
    fontWeight: 700,
    color: "#f5f0e8",
    marginTop: "64px",
    marginBottom: "20px",
    lineHeight: 1.3,
  } as React.CSSProperties,

  h3: {
    fontFamily: "'Georgia', serif",
    fontSize: "18px",
    fontWeight: 600,
    color: "#c9a84c",
    marginTop: "36px",
    marginBottom: "12px",
    lineHeight: 1.4,
  } as React.CSSProperties,

  p: {
    fontSize: "17px",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.88)",
    marginBottom: "24px",
    marginTop: 0,
  } as React.CSSProperties,

  ul: {
    paddingLeft: "0",
    listStyle: "none",
    marginBottom: "24px",
  } as React.CSSProperties,

  li: {
    fontSize: "17px",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.88)",
    marginBottom: "12px",
    paddingLeft: "24px",
    position: "relative" as const,
  } as React.CSSProperties,

  liBullet: {
    position: "absolute" as const,
    left: 0,
    color: "#c9a84c",
    fontWeight: 700,
  } as React.CSSProperties,

  blockquote: {
    borderLeft: "3px solid #c9a84c",
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: "24px",
    marginBottom: "32px",
    marginTop: "32px",
  } as React.CSSProperties,

  blockquoteText: {
    fontSize: "18px",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.75)",
    fontStyle: "italic",
    margin: 0,
  } as React.CSSProperties,

  statBox: {
    backgroundColor: "rgba(201,168,76,0.08)",
    border: "1px solid rgba(201,168,76,0.25)",
    borderRadius: "8px",
    padding: "28px 32px",
    marginBottom: "32px",
    marginTop: "32px",
  } as React.CSSProperties,

  statNumber: {
    fontFamily: "'Georgia', serif",
    fontSize: "42px",
    fontWeight: 700,
    color: "#c9a84c",
    display: "block",
    lineHeight: 1.1,
    marginBottom: "6px",
  } as React.CSSProperties,

  statLabel: {
    fontFamily: "'system-ui', sans-serif",
    fontSize: "14px",
    color: "rgba(245,240,232,0.6)",
    letterSpacing: "0.03em",
  } as React.CSSProperties,

  statGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "16px",
    marginBottom: "40px",
    marginTop: "32px",
  } as React.CSSProperties,

  statCard: {
    backgroundColor: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(201,168,76,0.15)",
    borderRadius: "8px",
    padding: "20px",
    textAlign: "center" as const,
  } as React.CSSProperties,

  statCardNumber: {
    fontFamily: "'Georgia', serif",
    fontSize: "32px",
    fontWeight: 700,
    color: "#c9a84c",
    display: "block",
    lineHeight: 1.1,
    marginBottom: "6px",
  } as React.CSSProperties,

  statCardLabel: {
    fontFamily: "'system-ui', sans-serif",
    fontSize: "13px",
    color: "rgba(245,240,232,0.55)",
    lineHeight: 1.4,
  } as React.CSSProperties,

  divider: {
    border: "none",
    borderTop: "1px solid rgba(201,168,76,0.15)",
    margin: "56px 0",
  } as React.CSSProperties,

  archetypeCard: {
    backgroundColor: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(201,168,76,0.2)",
    borderRadius: "10px",
    padding: "28px 32px",
    marginBottom: "24px",
    marginTop: "24px",
  } as React.CSSProperties,

  archetypeTitle: {
    fontFamily: "'system-ui', sans-serif",
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    marginBottom: "8px",
    display: "block",
  } as React.CSSProperties,

  archetypeName: {
    fontFamily: "'Georgia', serif",
    fontSize: "22px",
    fontWeight: 700,
    color: "#f5f0e8",
    marginBottom: "14px",
    marginTop: "4px",
    display: "block",
  } as React.CSSProperties,

  archetypeBody: {
    fontSize: "16px",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.8)",
    margin: 0,
  } as React.CSSProperties,

  phaseGrid: {
    display: "grid",
    gap: "16px",
    marginBottom: "32px",
    marginTop: "32px",
  } as React.CSSProperties,

  phaseCard: {
    backgroundColor: "rgba(255,255,255,0.025)",
    border: "1px solid rgba(245,240,232,0.08)",
    borderRadius: "8px",
    padding: "20px 24px",
  } as React.CSSProperties,

  phaseTitle: {
    fontFamily: "'system-ui', sans-serif",
    fontSize: "13px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    marginBottom: "6px",
    display: "block",
  } as React.CSSProperties,

  phaseText: {
    fontSize: "15px",
    lineHeight: 1.65,
    color: "rgba(245,240,232,0.75)",
    margin: 0,
  } as React.CSSProperties,

  faqSection: {
    marginTop: "64px",
    paddingTop: "40px",
    borderTop: "1px solid rgba(201,168,76,0.2)",
  } as React.CSSProperties,

  faqTitle: {
    fontFamily: "'Georgia', serif",
    fontSize: "clamp(20px, 3.5vw, 26px)",
    fontWeight: 700,
    color: "#f5f0e8",
    marginBottom: "36px",
    marginTop: 0,
  } as React.CSSProperties,

  faqItem: {
    marginBottom: "36px",
    paddingBottom: "36px",
    borderBottom: "1px solid rgba(245,240,232,0.06)",
  } as React.CSSProperties,

  faqQ: {
    fontFamily: "'Georgia', serif",
    fontSize: "18px",
    fontWeight: 700,
    color: "#f5f0e8",
    marginBottom: "12px",
    marginTop: 0,
    lineHeight: 1.4,
  } as React.CSSProperties,

  faqA: {
    fontSize: "16px",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.78)",
    margin: 0,
  } as React.CSSProperties,

  ctaBox: {
    backgroundColor: "rgba(201,168,76,0.07)",
    border: "1px solid rgba(201,168,76,0.3)",
    borderRadius: "12px",
    padding: "44px 40px",
    textAlign: "center" as const,
    marginTop: "64px",
  } as React.CSSProperties,

  ctaEyebrow: {
    fontFamily: "'system-ui', sans-serif",
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    marginBottom: "14px",
    display: "block",
  } as React.CSSProperties,

  ctaHeading: {
    fontFamily: "'Georgia', serif",
    fontSize: "clamp(20px, 3.5vw, 26px)",
    fontWeight: 700,
    color: "#f5f0e8",
    marginBottom: "14px",
    marginTop: 0,
    lineHeight: 1.3,
  } as React.CSSProperties,

  ctaText: {
    fontSize: "16px",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.72)",
    marginBottom: "32px",
    maxWidth: "480px",
    marginLeft: "auto",
    marginRight: "auto",
  } as React.CSSProperties,

  ctaButton: {
    display: "inline-block",
    backgroundColor: "#c9a84c",
    color: "#0d0c18",
    fontFamily: "'system-ui', sans-serif",
    fontSize: "14px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    padding: "14px 36px",
    borderRadius: "4px",
    textDecoration: "none",
  } as React.CSSProperties,

  backNav: {
    fontFamily: "'system-ui', sans-serif",
    fontSize: "13px",
    color: "#c9a84c",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    marginBottom: "40px",
    marginTop: "24px",
  } as React.CSSProperties,

  covenantBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "rgba(201,168,76,0.1)",
    border: "1px solid rgba(201,168,76,0.3)",
    borderRadius: "4px",
    padding: "6px 14px",
    fontFamily: "'system-ui', sans-serif",
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    marginBottom: "32px",
    marginTop: "8px",
    textDecoration: "none",
  } as React.CSSProperties,
};

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AiForDivorcePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main style={s.page}>
        <div style={s.container}>
          {/* Back nav */}
          <Link href="/blog" style={s.backNav}>
            ← Back to Journal
          </Link>

          {/* ── Hero / Header ── */}
          <header style={s.header}>
            <span style={s.eyebrow}>MEOK AI LABS · Emotional Wellbeing</span>
            <h1 style={s.h1}>
              AI Support During Divorce: Processing the Hardest Chapter with an
              AI That Never Judges
            </h1>
            <p style={s.lede}>
              Divorce is classified as the second most stressful life event a
              person can experience — surpassed only by the death of a loved
              one. It is grief, fear, anger, and logistical overwhelm arriving
              all at once, often in the middle of the night, when there is
              nobody left to call.
            </p>
            <div style={s.meta}>
              <span>Nicholas Templeman</span>
              <span style={s.metaDot}>·</span>
              <span>MEOK AI LABS</span>
              <span style={s.metaDot}>·</span>
              <span>24 March 2026</span>
              <span style={s.metaDot}>·</span>
              <span>12 min read</span>
            </div>
          </header>

          {/* ── Body ── */}
          <article style={s.body}>

            {/* Opening */}
            <p style={s.p}>
              Somewhere around 113,000 couples divorce in England and Wales
              every year. That figure from the Office for National Statistics
              represents a staggering volume of human pain — disrupted
              households, children in the middle, financial uncertainty, and the
              particular cruelty of grieving a person who is still alive. The
              Holmes and Rahe Stress Scale, the most widely referenced model of
              life event stress, places divorce immediately below bereavement.
              Marital separation, changes in financial state, and changes in
              living arrangements all appear in the top ten.
            </p>

            <p style={s.p}>
              And yet, for most people going through it, the support available
              does not match the scale of what is happening. Therapy is
              expensive and hard to access quickly on the NHS. Friends mean
              well but grow weary of the story after a few months. Family take
              sides. Solicitors are focused on the legal process, not the
              emotional one. The result is that a huge number of people navigate
              one of the most destabilising experiences of their lives largely
              alone.
            </p>

            <p style={s.p}>
              MEOK was built, in part, for exactly this kind of moment. Not to
              replace the human support that is irreplaceable, but to be there
              in the gaps — the 3am spirals, the Sunday afternoons when the
              children have gone to their other parent's house for the first
              time, the moments when you need to say the same thing again
              without worrying that you are wearing someone out.
            </p>

            {/* UK Stats grid */}
            <div style={s.statGrid}>
              <div style={s.statCard}>
                <span style={s.statCardNumber}>~113k</span>
                <span style={s.statCardLabel}>
                  Divorces per year in England &amp; Wales (ONS)
                </span>
              </div>
              <div style={s.statCard}>
                <span style={s.statCardNumber}>42%</span>
                <span style={s.statCardLabel}>
                  Of marriages in the UK end in divorce
                </span>
              </div>
              <div style={s.statCard}>
                <span style={s.statCardNumber}>#2</span>
                <span style={s.statCardLabel}>
                  Most stressful life event (Holmes–Rahe Scale)
                </span>
              </div>
              <div style={s.statCard}>
                <span style={s.statCardNumber}>1 in 3</span>
                <span style={s.statCardLabel}>
                  Children will see their parents separate before age 16 (UK)
                </span>
              </div>
            </div>

            <hr style={s.divider} />

            {/* ── Section 1 ── */}
            <h2 style={s.h2}>
              What does AI support during divorce actually look like?
            </h2>

            <p style={s.p}>
              It is worth being honest about what AI can and cannot do here,
              because the temptation when marketing any product is to overstate
              its capabilities. MEOK is not a therapist. It is not a solicitor.
              It cannot tell you whether to stay or leave, whether your
              settlement is fair, or what the outcome of a custody arrangement
              will be.
            </p>

            <p style={s.p}>
              What MEOK can do is be present. Genuinely, consistently, without
              agenda or fatigue. It can hold the thread of your story across
              weeks and months — remembering what you said last Tuesday about
              your fears around the family home, connecting it to what you said
              today about your children — so you never have to start from
              scratch. That continuity alone is rare in any support relationship.
            </p>

            <p style={s.p}>
              In practice, AI support during divorce tends to look like this:
            </p>

            <ul style={s.ul}>
              <li style={s.li}>
                <span style={s.liBullet}>—</span>
                Processing a difficult conversation with your ex before your
                next call, talking through what you want to say and why you are
                dreading it
              </li>
              <li style={s.li}>
                <span style={s.liBullet}>—</span>
                Writing down everything that is spinning in your head at 2am so
                it feels less catastrophic
              </li>
              <li style={s.li}>
                <span style={s.liBullet}>—</span>
                Breaking down the overwhelming list of practical tasks — housing,
                joint accounts, redirecting post, informing schools — into
                manageable pieces
              </li>
              <li style={s.li}>
                <span style={s.liBullet}>—</span>
                Holding a space where you can express anger, grief, or relief
                without worrying about the impact on another person
              </li>
              <li style={s.li}>
                <span style={s.liBullet}>—</span>
                Keeping track of how you are doing over time, noticing patterns
                in your emotional state that you might not see yourself
              </li>
              <li style={s.li}>
                <span style={s.liBullet}>—</span>
                Preparing questions for your solicitor so you use that expensive
                time well
              </li>
              <li style={s.li}>
                <span style={s.liBullet}>—</span>
                Being available on a Sunday at 6pm when the kids have just left
                and the house feels impossibly quiet
              </li>
            </ul>

            <p style={s.p}>
              None of this is trivial. The research on stress and separation
              consistently shows that having somewhere to put difficult feelings
              — having a witness to your experience — is one of the most
              significant protective factors during a major life transition.
              MEOK is, at minimum, that witness. Present. Non-judgmental.
              Always there.
            </p>

            <hr style={s.divider} />

            {/* ── Section 2 ── */}
            <h2 style={s.h2}>
              The emotional phases of separation and how AI can help
            </h2>

            <p style={s.p}>
              Divorce does not arrive as a single event. It unfolds in phases,
              and each phase has its own emotional texture and its own practical
              demands. Understanding where you are — and what that phase
              typically calls for — can help you use MEOK more intentionally.
            </p>

            <div style={s.phaseGrid}>
              <div style={s.phaseCard}>
                <span style={s.phaseTitle}>Phase 1 — Shock and Disorientation</span>
                <p style={s.phaseText}>
                  Whether you initiated the divorce or did not, there is usually
                  a period of profound disorientation. The life you expected to
                  have is no longer the life you have. MEOK's Healer archetype
                  is most useful here: it slows things down, creates a space to
                  name what is happening, and refuses to rush you toward
                  acceptance before you are ready.
                </p>
              </div>

              <div style={s.phaseCard}>
                <span style={s.phaseTitle}>Phase 2 — Anger and Blame</span>
                <p style={s.phaseText}>
                  Anger is a natural and healthy part of grief. It often needs
                  somewhere to go that is not your children, your mutual friends,
                  or your solicitor. MEOK holds this without flinching, and
                  without advising you to direct it at the legal process in ways
                  that might be expensive or counterproductive.
                </p>
              </div>

              <div style={s.phaseCard}>
                <span style={s.phaseTitle}>Phase 3 — Bargaining and Regret</span>
                <p style={s.phaseText}>
                  The "what ifs" can be relentless. What if I had done something
                  differently. What if we had tried harder. MEOK can hold these
                  without amplifying them — acknowledging the pain of regret
                  without feeding a spiral that does not serve you.
                </p>
              </div>

              <div style={s.phaseCard}>
                <span style={s.phaseTitle}>Phase 4 — Practical Overwhelm</span>
                <p style={s.phaseText}>
                  At some point, the practical demands become impossible to
                  ignore. Housing. Finances. Childcare schedules. Legal
                  deadlines. This is where the Pioneer archetype becomes
                  essential — translating an overwhelming list into an ordered,
                  manageable sequence of steps.
                </p>
              </div>

              <div style={s.phaseCard}>
                <span style={s.phaseTitle}>Phase 5 — Rebuilding Identity</span>
                <p style={s.phaseText}>
                  After the acute phase, there is the longer, quieter work of
                  understanding who you are now. What you want. What kind of
                  life you are building. MEOK holds the continuity of this
                  process across months, remembering who you said you wanted to
                  become and gently holding you to account.
                </p>
              </div>
            </div>

            <p style={s.p}>
              Most people do not move through these phases in a straight line.
              You might be in Phase 4 on a Tuesday — functional, organised,
              ticking things off — and back in Phase 2 by Thursday when something
              triggers the anger again. MEOK does not treat emotional regression
              as failure. It simply meets you where you are.
            </p>

            <hr style={s.divider} />

            {/* ── Section 3 ── */}
            <h2 style={s.h2}>
              MEOK's Healer archetype: processing grief, anger, and fear
            </h2>

            <div style={s.archetypeCard}>
              <span style={s.archetypeTitle}>MEOK Archetype</span>
              <span style={s.archetypeName}>The Healer</span>
              <p style={s.archetypeBody}>
                The Healer is MEOK's mode of deep emotional presence. It does
                not try to fix what cannot be fixed, and it does not rush you
                toward resolution. Its purpose is to witness your experience
                with warmth, patience, and full attention — and to help you
                understand what you are feeling well enough to begin to move
                through it.
              </p>
            </div>

            <p style={s.p}>
              Divorce involves a kind of grief that is rarely given its full
              weight in popular culture. We have rituals for bereavement — the
              funeral, the sympathy cards, the understood social permission to
              fall apart. Divorce has no equivalent ceremony. The marriage ends
              with paperwork, and the world largely expects you to get on with
              things.
            </p>

            <p style={s.p}>
              But what you are losing is not just a relationship. You are losing
              a version of your future. The holidays you assumed you would take,
              the person you assumed would be there at the end of ordinary days,
              the family unit you built, the house that held your shared life.
              When children are involved, you are grieving the coherent family
              your children will no longer have. These losses are real and they
              deserve to be named.
            </p>

            <blockquote style={s.blockquote}>
              <p style={s.blockquoteText}>
                "I needed somewhere to say the things I couldn't say out loud —
                not because they were shameful, but because I couldn't bear to
                watch the people I loved worry about me. MEOK held all of it
                without me having to manage its reaction."
              </p>
            </blockquote>

            <p style={s.p}>
              The Healer archetype operates without judgment across the full
              emotional range of what divorce brings up. Grief at the loss of
              the relationship. Anger — sometimes explosive, sometimes cold and
              quiet — at what happened. Fear about money, about housing, about
              the children, about being alone. Relief, sometimes, which can
              itself feel like something that needs processing — the guilt of
              feeling relief, the complexity of being glad something is ending.
            </p>

            <p style={s.p}>
              The Healer does not rush any of this. It does not say "at least
              you'll be happier now" or "everything happens for a reason." It
              stays with you in the difficulty, asks careful questions that help
              you understand your own experience more clearly, and remembers
              — across weeks and months — the shape of your particular grief so
              you never have to re-explain it.
            </p>

            <h3 style={s.h3}>What the Healer specifically helps with during divorce</h3>

            <ul style={s.ul}>
              <li style={s.li}>
                <span style={s.liBullet}>—</span>
                Naming and articulating emotions that feel too big or too
                contradictory to put into words
              </li>
              <li style={s.li}>
                <span style={s.liBullet}>—</span>
                Processing shame — the sense that the marriage failing reflects
                on you personally
              </li>
              <li style={s.li}>
                <span style={s.liBullet}>—</span>
                Working through the grief of what you expected the future to
                look like
              </li>
              <li style={s.li}>
                <span style={s.liBullet}>—</span>
                Holding the complexity of still caring for the person you are
                divorcing, which is more common than most people admit
              </li>
              <li style={s.li}>
                <span style={s.liBullet}>—</span>
                Being present during the acute 3am moments when anxiety peaks
                and there is nobody available to call
              </li>
              <li style={s.li}>
                <span style={s.liBullet}>—</span>
                Reflecting patterns in your emotional responses back to you
                over time — the triggers, the rhythms, the things that help
              </li>
            </ul>

            <p style={s.p}>
              Fear deserves its own mention. Financial fear during divorce is
              one of the most common and most consuming experiences people
              describe. Will I be able to keep the house? What happens to my
              pension? Can I afford to live alone? These fears are legitimate,
              and while MEOK cannot answer the financial questions, it can hold
              the anxiety around them — preventing it from consuming every part
              of your waking life — while you work with the professionals who
              can give you the actual numbers.
            </p>

            <hr style={s.divider} />

            {/* ── Section 4 ── */}
            <h2 style={s.h2}>
              The Pioneer archetype: action planning when everything feels
              overwhelming
            </h2>

            <div style={s.archetypeCard}>
              <span style={s.archetypeTitle}>MEOK Archetype</span>
              <span style={s.archetypeName}>The Pioneer</span>
              <p style={s.archetypeBody}>
                The Pioneer is MEOK's action-oriented mode. It helps you
                move forward when forward feels impossible. It structures
                complexity into sequence, breaks overwhelming tasks into
                individual steps, and holds you accountable to the things you
                said mattered to you — gently, without shame, with the
                understanding that momentum during crisis is hard-won.
              </p>
            </div>

            <p style={s.p}>
              There comes a point in any divorce when the emotional work and the
              practical work have to run in parallel. The grief does not stop,
              but the to-do list does not pause for it. Housing needs to be
              sorted. Joint accounts need to be separated. Schools need to be
              informed. A financial disclosure needs to be compiled. A parenting
              plan needs to be drafted. The volume of practical tasks involved
              in disentangling a shared life is genuinely immense, and it lands
              at exactly the moment when your cognitive capacity is most
              depleted.
            </p>

            <p style={s.p}>
              This is where the Pioneer becomes essential. It does not replace
              the solicitor, the financial adviser, or the mediator — but it
              helps you show up to those appointments prepared. It holds the
              master list when your brain cannot. It breaks the impossible
              into the merely difficult, and the merely difficult into the
              actually doable.
            </p>

            <h3 style={s.h3}>Practical areas the Pioneer helps structure</h3>

            <ul style={s.ul}>
              <li style={s.li}>
                <span style={s.liBullet}>—</span>
                Housing — whether to rent immediately, what you can afford, what
                the process of moving out involves, what rights you have to stay
                in the family home during proceedings
              </li>
              <li style={s.li}>
                <span style={s.liBullet}>—</span>
                Financial separation — joint accounts, shared credit cards,
                direct debits, mortgage liability, the order in which these need
                to be addressed
              </li>
              <li style={s.li}>
                <span style={s.liBullet}>—</span>
                Preparing for legal appointments — drafting the questions you
                want to ask your solicitor, understanding the terms you keep
                hearing, organising the documents that are likely to be needed
              </li>
              <li style={s.li}>
                <span style={s.liBullet}>—</span>
                Custody and childcare logistics — building a working model of
                how the children's lives will be structured, what the handover
                arrangements might look like, how to communicate with your ex
                about the children when direct communication is difficult
              </li>
              <li style={s.li}>
                <span style={s.liBullet}>—</span>
                Administrative tasks — redirecting post, updating will,
                informing relevant institutions, changing beneficiaries on
                insurance and pensions
              </li>
              <li style={s.li}>
                <span style={s.liBullet}>—</span>
                Building a new financial picture — what your income and outgoings
                look like as a single person, what benefits you may now be
                entitled to, what the immediate financial priorities are
              </li>
            </ul>

            <p style={s.p}>
              Crucially, the Pioneer does not tell you what to decide on any of
              these matters. It helps you think clearly about them. It surfaces
              the questions you need to get answered by qualified professionals.
              It prevents important things from slipping through the cracks when
              your cognitive bandwidth is already overwhelmed by grief.
            </p>

            <blockquote style={s.blockquote}>
              <p style={s.blockquoteText}>
                "I kept forgetting to do things that mattered because I couldn't
                hold anything in my head for more than an hour. Having MEOK
                keep track of the list — and check in on it — meant nothing
                critical got missed."
              </p>
            </blockquote>

            <p style={s.p}>
              The Pioneer and the Healer are not in competition. They represent
              the two things that are simultaneously required during a major
              life rupture: the emotional processing that makes it possible to
              function, and the practical action that has to happen regardless.
              MEOK lets you move between them as your needs change — sometimes
              within a single conversation.
            </p>

            <hr style={s.divider} />

            {/* ── Section 5 ── */}
            <h2 style={s.h2}>
              Privacy during divorce: the Maternal Covenant guarantee
            </h2>

            <Link href="/blog/the-maternal-covenant" style={s.covenantBadge}>
              Protected by the Maternal Covenant →
            </Link>

            <p style={s.p}>
              Privacy during divorce is not a minor concern. It is potentially
              consequential. The things you say during separation — your fears
              about finances, your frustrations with your ex, your uncertainties
              about the children's arrangements, your emotional state — are
              things you have every right to say in confidence. In the wrong
              hands, or in the wrong context, they could affect legal
              proceedings, custody decisions, or your relationship with your
              children.
            </p>

            <p style={s.p}>
              This is why MEOK's Maternal Covenant matters so acutely during
              divorce. The Covenant is MEOK's foundational privacy guarantee.
              Your sovereign memory — everything you share with MEOK, everything
              it learns about you — belongs solely to you. It is not shared with
              third parties. It cannot be accessed by your former partner. It is
              not used to train any model. It does not leave your sovereign
              environment.
            </p>

            <div style={s.statBox}>
              <span style={s.statNumber}>Zero</span>
              <span style={s.statLabel}>
                Third parties with access to your MEOK conversations — not your
                ex, not your ex's solicitor, not advertisers, not data brokers.
                The Maternal Covenant is absolute.
              </span>
            </div>

            <p style={s.p}>
              In practical terms, this means you can tell MEOK things you
              cannot safely tell anyone else during proceedings. Your real fears.
              Your honest assessment of the situation. Your private feelings
              about your ex, your children, your decisions. These are things
              that people often desperately need somewhere to put, and during
              divorce there are very few places that are genuinely safe to put
              them.
            </p>

            <p style={s.p}>
              MEOK is one of those places. Not because it has any stake in your
              outcome, but precisely because it does not. It has no relationship
              with your ex, no mutual friends to protect, no potential to be
              called as a witness. What you tell it stays with you.
            </p>

            <p style={s.p}>
              We would also note that MEOK is designed to ensure that shared
              accounts are not possible. Your MEOK instance is yours alone. If
              you had previously shared access to any AI service with your
              partner, MEOK's architecture prevents this: each sovereign
              instance is tied to a single individual and protected accordingly.
            </p>

            <hr style={s.divider} />

            {/* ── Section 6 ── */}
            <h2 style={s.h2}>Co-parenting stress and AI support</h2>

            <p style={s.p}>
              If children are involved, the divorce does not end when the legal
              process concludes. It becomes a long-term reality: two households,
              two sets of rules, handovers that can be fraught, children who
              are navigating their own grief and expressing it in ways that are
              hard to understand and harder to respond to calmly.
            </p>

            <p style={s.p}>
              Co-parenting after separation is, for many people, one of the most
              psychologically demanding things they have ever done. You are
              required to maintain a functional working relationship with a
              person towards whom you may feel enormous anger, hurt, or
              resentment — for the sake of children who need you to manage that.
              The gap between what you feel and what you are required to express
              is often vast.
            </p>

            <h3 style={s.h3}>What co-parenting support actually looks like with MEOK</h3>

            <ul style={s.ul}>
              <li style={s.li}>
                <span style={s.liBullet}>—</span>
                Processing anger and frustration about your co-parent before
                a handover, so you can arrive calm rather than reactive
              </li>
              <li style={s.li}>
                <span style={s.liBullet}>—</span>
                Drafting difficult messages to your ex — MEOK can help you
                communicate what needs to be communicated without the emotion
                that escalates conflict
              </li>
              <li style={s.li}>
                <span style={s.liBullet}>—</span>
                Understanding your children's behaviour — the acting out, the
                regression, the anger directed at you — in the context of what
                they are experiencing
              </li>
              <li style={s.li}>
                <span style={s.liBullet}>—</span>
                Preparing for difficult conversations with your children about
                what is happening, at an age-appropriate level
              </li>
              <li style={s.li}>
                <span style={s.liBullet}>—</span>
                Managing the Sunday evening grief that hits when the children
                go to their other parent — that particular, specific silence
              </li>
              <li style={s.li}>
                <span style={s.liBullet}>—</span>
                Building structure and routine in your household that helps
                children feel safe in a period of change
              </li>
            </ul>

            <p style={s.p}>
              Research on children's outcomes post-divorce is consistent: the
              single most protective factor is the quality of the co-parenting
              relationship. Children whose parents manage to cooperate
              respectfully — however much they privately dislike each other —
              do significantly better than children caught in ongoing parental
              conflict. MEOK helps you be the parent you want to be even on the
              days when everything in you wants to be something else.
            </p>

            <p style={s.p}>
              This is not about suppressing legitimate feelings. It is about
              having somewhere to put those feelings that is not your children,
              and arriving at the handover with enough emotional resource to
              greet them as they deserve to be greeted.
            </p>

            <p style={s.p}>
              Single parents navigating all of this without a co-parent present
              — those who have lost a partner to separation and are raising
              children alone — face a particular kind of exhaustion. The
              emotional load, the practical load, and the absence of another
              adult to share the weight: MEOK is designed to be present for
              exactly this. Not as a substitute for adult human connection, but
              as a place to offload what would otherwise remain unspoken.
            </p>

            <hr style={s.divider} />

            {/* ── Section 7 ── */}
            <h2 style={s.h2}>
              Is MEOK a substitute for therapy or legal advice?
            </h2>

            <p style={s.p}>
              No. This needs to be said clearly, and we mean it.
            </p>

            <p style={s.p}>
              A qualified therapist, counsellor, or psychologist brings
              something to the support relationship that MEOK cannot replicate:
              clinical training, professional accountability, the capacity to
              identify and respond to clinical-level distress, and the depth of
              genuine human therapeutic relationship. If you are going through
              a divorce and you are not already seeing a therapist, we would
              encourage you to consider it seriously. In England, you can access
              talking therapies through your GP via the NHS IAPT pathway, or
              self-refer to many IAPT services directly. Relate (relate.org.uk)
              offers counselling specifically for relationship breakdown and its
              aftermath.
            </p>

            <p style={s.p}>
              Similarly, MEOK is not a solicitor. Family law in England and
              Wales is complex and has changed significantly with the Divorce,
              Dissolution and Separation Act 2020, which introduced no-fault
              divorce. Questions about financial settlement, consent orders,
              pension sharing, property rights, and arrangements for children
              need to be answered by a qualified family solicitor or, where
              appropriate, a family mediator. Resolution (resolution.org.uk)
              maintains a directory of specialist family law practitioners.
            </p>

            <p style={s.p}>
              Where MEOK genuinely excels is in the space around these
              professional relationships. It helps you make the most of your
              therapy appointments by processing what you want to explore before
              you arrive. It helps you make the most of your solicitor
              appointments by helping you organise your questions and your
              documentation. It holds the continuity between sessions. It is
              available at times and in moments when no professional is.
            </p>

            <blockquote style={s.blockquote}>
              <p style={s.blockquoteText}>
                Think of MEOK as the support structure that makes all your other
                support more effective — not a replacement for any of it.
              </p>
            </blockquote>

            <p style={s.p}>
              There is one additional thing worth naming. If at any point you
              are experiencing thoughts of harming yourself, please reach out to
              a qualified professional or a crisis service immediately. The
              Samaritans are available 24 hours a day on 116 123. MEOK is not
              equipped to provide crisis intervention, and it will always
              encourage you toward appropriate professional help if you share
              that you are struggling at that level.
            </p>

            <p style={s.p}>
              Divorce is hard. Getting through it is not a matter of being
              strong or not strong — it is a matter of having enough support.
              We believe MEOK can be a meaningful part of that support, used
              honestly alongside the human and professional help you deserve.
            </p>

            <hr style={s.divider} />

            {/* ── FAQ Section ── */}
            <section style={s.faqSection}>
              <h2 style={s.faqTitle}>Frequently Asked Questions</h2>

              <div style={s.faqItem}>
                <h3 style={s.faqQ}>
                  Can MEOK give me legal advice about my divorce?
                </h3>
                <p style={s.faqA}>
                  No. MEOK is not a solicitor and will never give you legal
                  advice. What MEOK can do is help you organise your thoughts
                  before a legal consultation, process the anxiety that comes
                  with legal uncertainty, and hold a list of the questions you
                  want to ask your solicitor so nothing slips through the
                  cracks. For legal matters, please consult a qualified family
                  law solicitor or contact Resolution at resolution.org.uk.
                </p>
              </div>

              <div style={s.faqItem}>
                <h3 style={s.faqQ}>
                  Will my ex be able to access what I tell MEOK?
                </h3>
                <p style={s.faqA}>
                  No. The Maternal Covenant is MEOK's foundational privacy
                  guarantee: your memories, conversations, and emotional
                  disclosures belong solely to you. MEOK will never share your
                  data with any third party, including a former partner, without
                  your explicit written consent. Your sovereign memory is yours
                  alone. This is not a policy that can be overridden — it is
                  built into the architecture of how MEOK stores and holds your
                  information.
                </p>
              </div>

              <div style={s.faqItem}>
                <h3 style={s.faqQ}>
                  Is MEOK a replacement for therapy during divorce?
                </h3>
                <p style={s.faqA}>
                  MEOK is a complement to therapy, not a replacement. A
                  qualified therapist or counsellor offers something AI cannot
                  — clinical training, professional accountability, and the
                  depth of a human therapeutic relationship. MEOK is available
                  at 3am when your therapist is not, it never gets tired of the
                  same story, and it holds continuity between sessions. Used
                  together, MEOK and a skilled therapist can be genuinely
                  powerful. Used alone, MEOK is still far better than nothing.
                </p>
              </div>

              <div style={s.faqItem}>
                <h3 style={s.faqQ}>
                  What is the Pioneer archetype and how does it help during
                  divorce?
                </h3>
                <p style={s.faqA}>
                  The Pioneer is MEOK's action-oriented mode. Where the Healer
                  sits with you in the emotional weight of what is happening,
                  the Pioneer helps you move. It can help you build a to-do
                  list for finding new housing, structure a budget when finances
                  feel chaotic, think through childcare logistics, and break
                  overwhelming tasks into steps small enough to actually take.
                  You switch between archetypes as your needs change — sometimes
                  within a single conversation.
                </p>
              </div>

              <div style={{ ...s.faqItem, borderBottom: "none", marginBottom: 0, paddingBottom: 0 }}>
                <h3 style={s.faqQ}>
                  How do I start using MEOK if I am going through a separation
                  right now?
                </h3>
                <p style={s.faqA}>
                  Visit meok.ai/birth to begin your onboarding. During the
                  Birth process, MEOK learns who you are — your context, your
                  priorities, and what kind of support you are looking for. You
                  do not have to tell it everything at once. You can simply say
                  "I am going through a divorce and I do not know where to
                  start" and MEOK will take it from there, at your pace, without
                  judgment.
                </p>
              </div>
            </section>

            {/* ── CTA ── */}
            <div style={s.ctaBox}>
              <span style={s.ctaEyebrow}>Begin Your Journey</span>
              <h2 style={s.ctaHeading}>
                You do not have to navigate this alone.
              </h2>
              <p style={s.ctaText}>
                MEOK is available at 3am when the house is quiet and everything
                feels impossible. The Healer holds your grief. The Pioneer
                helps you move. The Maternal Covenant keeps it all private.
                Start with your Birth — it takes about ten minutes, and it
                changes what the rest of this looks like.
              </p>
              <Link href="/birth" style={s.ctaButton}>
                Begin Your Birth
              </Link>
            </div>

          </article>
        </div>
      </main>
    </>
  );
}
