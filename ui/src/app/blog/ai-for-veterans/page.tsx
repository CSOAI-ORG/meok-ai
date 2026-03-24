import type { Metadata } from "next"
import Link from "next/link"

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Veterans\u2019 Mental Health: PTSD, Moral Injury, and the Transition Nobody Warns You About | MEOK AI LABS",
  description:
    "2.4 million veterans live in the UK. Most never seek help. MEOK offers a private, persistent AI companion that understands military culture, never forgets your service history, and detects crisis before it escalates.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-veterans" },
  openGraph: {
    title: "AI for Veterans\u2019 Mental Health: PTSD, Moral Injury, and the Transition Nobody Warns You About",
    description:
      "2.4 million UK veterans. Disproportionate rates of PTSD, depression, and substance misuse. MEOK is the private, persistent AI companion built to support the people civilian services too often fail.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-veterans",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Veterans%E2%80%99+Mental+Health&desc=PTSD%2C+Moral+Injury%2C+and+the+Transition+Nobody+Warns+You+About",
        width: 1200,
        height: 630,
        alt: "AI for Veterans\u2019 Mental Health: PTSD, Moral Injury, and the Transition Nobody Warns You About | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@meok_ai",
    creator: "@meok_ai",
    title: "AI for Veterans\u2019 Mental Health: PTSD, Moral Injury, and the Transition Nobody Warns You About",
    description:
      "2.4 million UK veterans. Most never ask for help. MEOK is the persistent, private AI companion that understands service \u2014 and never forgets what you tell it.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Veterans%E2%80%99+Mental+Health&desc=PTSD%2C+Moral+Injury%2C+and+the+Transition+Nobody+Warns+You+About",
    ],
  },
}

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Veterans\u2019 Mental Health: PTSD, Moral Injury, and the Transition Nobody Warns You About",
  description:
    "2.4 million veterans live in the UK. Most never seek mental health support due to stigma, military culture, and distrust of civilian services. This article explores how AI companions like MEOK offer a private, persistent, non-judgmental first step \u2014 covering PTSD, moral injury, civilian transition, and crisis detection.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-veterans",
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
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-veterans",
  },
  about: [
    { "@type": "Thing", name: "veteran mental health" },
    { "@type": "Thing", name: "PTSD" },
    { "@type": "Thing", name: "moral injury" },
    { "@type": "Thing", name: "AI companion" },
    { "@type": "Thing", name: "military transition" },
    { "@type": "Thing", name: "MEOK" },
  ],
  keywords:
    "AI for veterans mental health UK, veteran PTSD support app, moral injury AI, military transition mental health, MEOK AI veterans, Op COURAGE, Combat Stress AI, veteran AI companion",
}

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help veterans with PTSD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI cannot replace clinical treatments like EMDR or Prolonged Exposure therapy, but it can provide meaningful daily support \u2014 grounding exercises, pattern tracking, and a private space to process without waiting for an appointment. The critical requirement is persistence: an AI that resets between sessions is useless for trauma support. MEOK remembers everything across every session.",
      },
    },
    {
      "@type": "Question",
      name: "What is moral injury?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Moral injury is the deep psychological damage caused by perpetrating, witnessing, or failing to prevent acts that violate one\u2019s own moral code. It is distinct from PTSD: where PTSD is rooted in fear, moral injury is rooted in shame and guilt. Veterans commonly experience moral injury after orders that conflict with personal ethics, civilian casualties, or the deaths of fellow soldiers they feel responsible for.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK support veterans transitioning to civilian life?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK provides structure, daily presence, and a consistent companion during the disorienting loss of military identity. It helps veterans process the grief of leaving service, articulate their skills in civilian language, and maintain purpose when the institutional framework of the military is gone. MEOK remembers their service history so they never have to re-explain it.",
      },
    },
    {
      "@type": "Question",
      name: "Will MEOK understand military culture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is trained to understand military culture, hierarchy, the ethos of service, and the specific language veterans use. It does not pathologise stoicism or misread direct communication as aggression. Veterans frequently report feeling misunderstood by civilian therapists \u2014 MEOK does not carry those assumptions. It meets you where you are.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK confidential for veterans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK\u2019s Privacy Covenant guarantees your data is never used to train AI models and is never sold. Your memory vault is encrypted and legally yours. Unlike consumer AI platforms that treat your conversations as training data, MEOK operates on a strict no-training-on-you principle \u2014 critical when the data is combat trauma, moral injury, or suicidal ideation.",
      },
    },
  ],
}

// ── Styles ────────────────────────────────────────────────────────────────────

const s = {
  page: {
    background: "#0d0c18",
    color: "#f5f0e8",
    minHeight: "100vh",
    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
  } as React.CSSProperties,

  header: {
    borderBottom: "1px solid rgba(201,168,76,0.2)",
    paddingBottom: "2rem",
    marginBottom: "2.5rem",
  } as React.CSSProperties,

  nav: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "0.85rem",
    color: "rgba(245,240,232,0.5)",
    marginBottom: "2rem",
    flexWrap: "wrap" as const,
  } as React.CSSProperties,

  navLink: {
    color: "#c9a84c",
    textDecoration: "none",
  } as React.CSSProperties,

  navSep: {
    color: "rgba(245,240,232,0.3)",
  } as React.CSSProperties,

  container: {
    maxWidth: "780px",
    margin: "0 auto",
    padding: "3rem 1.5rem 5rem",
  } as React.CSSProperties,

  tag: {
    display: "inline-block",
    background: "rgba(201,168,76,0.12)",
    color: "#c9a84c",
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    padding: "0.3rem 0.75rem",
    borderRadius: "3px",
    marginBottom: "1.25rem",
  } as React.CSSProperties,

  h1: {
    fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
    marginBottom: "1.25rem",
    color: "#f5f0e8",
  } as React.CSSProperties,

  lead: {
    fontSize: "1.15rem",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.8)",
    marginBottom: "1.5rem",
    borderLeft: "3px solid #c9a84c",
    paddingLeft: "1rem",
  } as React.CSSProperties,

  meta: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
    fontSize: "0.85rem",
    color: "rgba(245,240,232,0.5)",
    flexWrap: "wrap" as const,
  } as React.CSSProperties,

  metaDot: {
    width: "3px",
    height: "3px",
    borderRadius: "50%",
    background: "rgba(245,240,232,0.3)",
    display: "inline-block",
  } as React.CSSProperties,

  section: {
    marginBottom: "3rem",
  } as React.CSSProperties,

  h2: {
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "#f5f0e8",
    marginBottom: "1rem",
    marginTop: "3rem",
    lineHeight: 1.3,
  } as React.CSSProperties,

  h3: {
    fontSize: "1.15rem",
    fontWeight: 600,
    color: "#c9a84c",
    marginBottom: "0.75rem",
    marginTop: "2rem",
  } as React.CSSProperties,

  p: {
    fontSize: "1rem",
    lineHeight: 1.8,
    color: "rgba(245,240,232,0.85)",
    marginBottom: "1.25rem",
  } as React.CSSProperties,

  atomicAnswer: {
    fontSize: "1rem",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.85)",
    marginBottom: "1.25rem",
    background: "rgba(201,168,76,0.05)",
    borderLeft: "3px solid rgba(201,168,76,0.4)",
    padding: "0.75rem 1rem",
    borderRadius: "0 4px 4px 0",
  } as React.CSSProperties,

  statGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "1rem",
    marginBottom: "2rem",
    marginTop: "1.5rem",
  } as React.CSSProperties,

  statCard: {
    background: "rgba(201,168,76,0.07)",
    border: "1px solid rgba(201,168,76,0.2)",
    borderRadius: "8px",
    padding: "1.25rem",
    textAlign: "center" as const,
  } as React.CSSProperties,

  statNumber: {
    fontSize: "2rem",
    fontWeight: 700,
    color: "#c9a84c",
    display: "block",
    lineHeight: 1.2,
  } as React.CSSProperties,

  statLabel: {
    fontSize: "0.8rem",
    color: "rgba(245,240,232,0.6)",
    marginTop: "0.4rem",
    lineHeight: 1.4,
  } as React.CSSProperties,

  infoBox: {
    background: "rgba(201,168,76,0.07)",
    border: "1px solid rgba(201,168,76,0.25)",
    borderRadius: "8px",
    padding: "1.5rem",
    marginBottom: "2rem",
  } as React.CSSProperties,

  infoBoxTitle: {
    fontSize: "0.8rem",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    marginBottom: "0.75rem",
  } as React.CSSProperties,

  warningBox: {
    background: "rgba(220,50,50,0.07)",
    border: "1px solid rgba(220,50,50,0.25)",
    borderRadius: "8px",
    padding: "1.5rem",
    marginBottom: "2rem",
  } as React.CSSProperties,

  warningTitle: {
    fontSize: "0.8rem",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "#e05050",
    marginBottom: "0.75rem",
  } as React.CSSProperties,

  ul: {
    paddingLeft: "1.25rem",
    marginBottom: "1.25rem",
  } as React.CSSProperties,

  li: {
    fontSize: "1rem",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.85)",
    marginBottom: "0.5rem",
  } as React.CSSProperties,

  divider: {
    border: "none",
    borderTop: "1px solid rgba(245,240,232,0.08)",
    marginTop: "3rem",
    marginBottom: "3rem",
  } as React.CSSProperties,

  faqSection: {
    marginTop: "3rem",
    marginBottom: "3rem",
  } as React.CSSProperties,

  faqItem: {
    borderBottom: "1px solid rgba(245,240,232,0.08)",
    paddingBottom: "1.75rem",
    marginBottom: "1.75rem",
  } as React.CSSProperties,

  faqQuestion: {
    fontSize: "1.1rem",
    fontWeight: 600,
    color: "#f5f0e8",
    marginBottom: "0.75rem",
    lineHeight: 1.4,
  } as React.CSSProperties,

  faqAnswer: {
    fontSize: "1rem",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.8)",
  } as React.CSSProperties,

  resourceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1rem",
    marginTop: "1.5rem",
    marginBottom: "2rem",
  } as React.CSSProperties,

  resourceCard: {
    background: "rgba(245,240,232,0.04)",
    border: "1px solid rgba(245,240,232,0.1)",
    borderRadius: "8px",
    padding: "1.25rem",
  } as React.CSSProperties,

  resourceName: {
    fontSize: "0.95rem",
    fontWeight: 700,
    color: "#c9a84c",
    marginBottom: "0.35rem",
  } as React.CSSProperties,

  resourceDetail: {
    fontSize: "0.85rem",
    color: "rgba(245,240,232,0.65)",
    lineHeight: 1.5,
  } as React.CSSProperties,

  ctaBox: {
    background: "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)",
    border: "1px solid rgba(201,168,76,0.35)",
    borderRadius: "12px",
    padding: "2.5rem",
    textAlign: "center" as const,
    marginTop: "4rem",
  } as React.CSSProperties,

  ctaTitle: {
    fontSize: "1.6rem",
    fontWeight: 700,
    color: "#f5f0e8",
    marginBottom: "0.75rem",
    lineHeight: 1.3,
  } as React.CSSProperties,

  ctaSubtitle: {
    fontSize: "1rem",
    color: "rgba(245,240,232,0.7)",
    marginBottom: "2rem",
    lineHeight: 1.6,
  } as React.CSSProperties,

  ctaButton: {
    display: "inline-block",
    background: "#c9a84c",
    color: "#0d0c18",
    fontWeight: 700,
    fontSize: "1rem",
    padding: "0.85rem 2.25rem",
    borderRadius: "6px",
    textDecoration: "none",
    letterSpacing: "0.01em",
  } as React.CSSProperties,

  ctaNote: {
    fontSize: "0.8rem",
    color: "rgba(245,240,232,0.4)",
    marginTop: "1rem",
  } as React.CSSProperties,

  authorBox: {
    display: "flex",
    alignItems: "flex-start",
    gap: "1.25rem",
    padding: "1.5rem",
    background: "rgba(245,240,232,0.03)",
    border: "1px solid rgba(245,240,232,0.08)",
    borderRadius: "8px",
    marginTop: "4rem",
  } as React.CSSProperties,

  authorAvatar: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    background: "rgba(201,168,76,0.2)",
    border: "2px solid rgba(201,168,76,0.4)",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "#c9a84c",
  } as React.CSSProperties,

  authorName: {
    fontSize: "0.95rem",
    fontWeight: 700,
    color: "#f5f0e8",
    marginBottom: "0.2rem",
  } as React.CSSProperties,

  authorRole: {
    fontSize: "0.8rem",
    color: "rgba(245,240,232,0.5)",
    marginBottom: "0.5rem",
  } as React.CSSProperties,

  authorBio: {
    fontSize: "0.875rem",
    color: "rgba(245,240,232,0.65)",
    lineHeight: 1.6,
  } as React.CSSProperties,

  quoteBlock: {
    borderLeft: "3px solid #c9a84c",
    paddingLeft: "1.25rem",
    marginBottom: "2rem",
    marginTop: "1.5rem",
  } as React.CSSProperties,

  quoteText: {
    fontSize: "1.15rem",
    fontStyle: "italic",
    color: "rgba(245,240,232,0.8)",
    lineHeight: 1.7,
    marginBottom: "0.5rem",
  } as React.CSSProperties,

  quoteSource: {
    fontSize: "0.8rem",
    color: "rgba(245,240,232,0.45)",
  } as React.CSSProperties,

  twoCol: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1.25rem",
    marginBottom: "2rem",
  } as React.CSSProperties,

  comparisonCard: {
    background: "rgba(245,240,232,0.03)",
    border: "1px solid rgba(245,240,232,0.1)",
    borderRadius: "8px",
    padding: "1.25rem",
  } as React.CSSProperties,

  comparisonTitle: {
    fontSize: "0.8rem",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    marginBottom: "0.75rem",
  } as React.CSSProperties,

  comparisonItem: {
    fontSize: "0.9rem",
    color: "rgba(245,240,232,0.75)",
    lineHeight: 1.6,
    marginBottom: "0.5rem",
    paddingLeft: "1rem",
    position: "relative" as const,
  } as React.CSSProperties,
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForVeteransMentalHealthPage() {
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

        {/* Breadcrumb */}
        <nav style={s.nav} aria-label="Breadcrumb">
          <Link href="/" style={s.navLink}>MEOK AI LABS</Link>
          <span style={s.navSep}>/</span>
          <Link href="/blog" style={s.navLink}>Blog</Link>
          <span style={s.navSep}>/</span>
          <span>AI for Veterans\u2019 Mental Health</span>
        </nav>

        {/* Header */}
        <header style={s.header}>
          <span style={s.tag}>Veterans &amp; Mental Health</span>

          <h1 style={s.h1}>
            AI for Veterans\u2019 Mental Health: PTSD, Moral Injury, and the
            Transition Nobody Warns You About
          </h1>

          <p style={s.lead}>
            2.4 million veterans live in the United Kingdom. The vast majority
            will never seek help for what they carry. Not because they
            don\u2019t need it \u2014 but because the system was built for
            someone else.
          </p>

          <div style={s.meta}>
            <span>Nicholas Templeman</span>
            <span style={s.metaDot} />
            <span>MEOK AI LABS</span>
            <span style={s.metaDot} />
            <span>24 March 2026</span>
            <span style={s.metaDot} />
            <span>18 min read</span>
          </div>
        </header>

        {/* Crisis notice */}
        <div style={s.warningBox}>
          <div style={s.warningTitle}>If you are in crisis right now</div>
          <p style={{ ...s.p, marginBottom: 0 }}>
            Combat Stress helpline: <strong style={{ color: "#f5f0e8" }}>0800 138 1619</strong> (free, 24/7).
            Samaritans Veterans Line: <strong style={{ color: "#f5f0e8" }}>0800 138 1619</strong>.
            Samaritans: <strong style={{ color: "#f5f0e8" }}>116 123</strong> (free, 24/7, no appointment needed).
            If your life is in immediate danger, call 999.
          </p>
        </div>

        {/* ── Section 1: The Scale of the Problem ── */}
        <section style={s.section}>
          <h2 style={s.h2}>
            How many UK veterans are affected by mental health problems?
          </h2>

          <p style={s.atomicAnswer}>
            Approximately 2.4 million veterans live in the UK. Research from
            Combat Stress and the Royal British Legion suggests around one in
            five experience a mental health difficulty \u2014 including PTSD,
            depression, anxiety, and substance misuse. That is nearly half a
            million people, and those are only the ones the research captures.
          </p>

          <p style={s.p}>
            The true number is almost certainly higher. Mental health problems
            in the veteran population are systematically undercounted because
            the people who suffer most are least likely to identify themselves
            to researchers, most likely to attribute symptoms to weakness
            rather than illness, and most practised at presenting as fine when
            they are not.
          </p>

          <div style={s.statGrid}>
            <div style={s.statCard}>
              <span style={s.statNumber}>2.4M</span>
              <div style={s.statLabel}>veterans in the UK</div>
            </div>
            <div style={s.statCard}>
              <span style={s.statNumber}>1 in 5</span>
              <div style={s.statLabel}>experience a mental health difficulty</div>
            </div>
            <div style={s.statCard}>
              <span style={s.statNumber}>3\u00d7</span>
              <div style={s.statLabel}>higher rate of alcohol misuse vs. general population</div>
            </div>
            <div style={s.statCard}>
              <span style={s.statNumber}>6\u20138 yrs</span>
              <div style={s.statLabel}>average delay before seeking help for PTSD</div>
            </div>
          </div>

          <p style={s.p}>
            Combat Stress, the UK\u2019s leading veteran mental health charity,
            consistently reports that veterans wait an average of six to eight
            years from the onset of symptoms before seeking professional help.
            For context: six to eight years of unmanaged PTSD, untreated
            depression, fractured relationships, and cascading occupational
            consequences. By the time someone reaches a clinician, the damage
            extends far beyond the original trauma.
          </p>

          <p style={s.p}>
            The question is not whether veterans need mental health support.
            The question is why they don\u2019t seek it \u2014 and whether there
            is a format that meets them where they are, rather than where the
            system expects them to be.
          </p>
        </section>

        <hr style={s.divider} />

        {/* ── Section 2: Why Veterans Don't Seek Help ── */}
        <section style={s.section}>
          <h2 style={s.h2}>
            Why do veterans not seek mental health support?
          </h2>

          <p style={s.atomicAnswer}>
            The primary barriers are military culture (toughness as identity),
            stigma within the veteran community, distrust of civilian
            practitioners who have not shared the experience of service, and a
            deep reluctance to be seen as weak, broken, or a burden. These are
            not irrational \u2014 they are responses conditioned over years of
            operational training.
          </p>

          <p style={s.p}>
            Understanding why veterans resist help is not an academic exercise.
            It is the prerequisite for designing anything that might actually
            reach them. The barriers are structural, cultural, and
            deeply personal \u2014 and they interact in ways that conventional
            mental health provision has largely failed to address.
          </p>

          <h3 style={s.h3}>Military culture and the toughness identity</h3>

          <p style={s.p}>
            Military training does something deliberate and necessary: it
            systematically removes the civilian reflex to prioritise personal
            safety and comfort. Recruits learn to push through pain, suppress
            fear, subordinate individual needs to unit cohesion. This is not
            incidental \u2014 it is the product. An effective soldier cannot
            be someone who stops when it gets hard.
          </p>

          <p style={s.p}>
            The problem is that this conditioning does not switch off at the
            gate. The same mental framework that makes a soldier effective in
            theatre makes it profoundly difficult to admit psychological
            distress in civilian life. Seeking help requires exactly the
            vulnerability that years of training have rewired the brain to
            regard as dangerous.
          </p>

          <div style={s.quoteBlock}>
            <p style={s.quoteText}>
              \u201cI\u2019d rather eat nails than tell someone I was struggling.
              Not because I was ashamed \u2014 well, maybe I was \u2014 but
              because it felt like betraying everything I\u2019d trained to be.\u201d
            </p>
            <span style={s.quoteSource}>
              Common sentiment reported in veteran mental health outreach, UK
            </span>
          </div>

          <h3 style={s.h3}>Stigma within the veteran community</h3>

          <p style={s.p}>
            Stigma around mental health in civilian settings is real but
            diminishing. In veteran communities, it operates differently.
            Mental health disclosure carries additional weight: the fear of
            being judged by peers who \u201cmanaged fine,\u201d the concern
            that it reflects a character deficiency rather than an injury, and
            \u2014 critically \u2014 career implications for those still in
            service or in security-cleared employment.
          </p>

          <p style={s.p}>
            Reservists face a compounded version of this: they move between
            military and civilian contexts constantly, and the fear of
            disclosure crossing between those worlds creates a paralysing
            double bind. The result is silence in both directions.
          </p>

          <h3 style={s.h3}>The civilian gap: feeling misunderstood</h3>

          <p style={s.p}>
            Many veterans who do eventually seek support describe the same
            experience: the therapist or counsellor is well-intentioned, but
            has no frame of reference for what service means. They pathologise
            responses that are entirely rational given the context. They
            misread the directness of military communication as hostility.
            They ask questions that reveal they have no real understanding of
            what deployment, combat, or institutional military life actually
            involves.
          </p>

          <p style={s.p}>
            The result is a veteran spending half of every session educating
            their clinician rather than being helped by them. Many disengage
            entirely after one or two sessions. The experience confirms what
            they feared: civilians don\u2019t get it.
          </p>

          <div style={s.twoCol}>
            <div style={s.comparisonCard}>
              <div style={{ ...s.comparisonTitle, color: "rgba(220,80,80,0.9)" }}>
                What veterans hear from civilian services
              </div>
              <div style={s.comparisonItem}>\u201cTell me about your childhood\u201d</div>
              <div style={s.comparisonItem}>\u201cIt sounds like you\u2019re struggling with anger\u201d</div>
              <div style={s.comparisonItem}>\u201cHave you tried breathing exercises?\u201d</div>
              <div style={s.comparisonItem}>\u201cWhat do you mean by a contact?\u201d</div>
              <div style={s.comparisonItem}>Visible discomfort when combat is described</div>
            </div>
            <div style={s.comparisonCard}>
              <div style={{ ...s.comparisonTitle, color: "#c9a84c" }}>
                What MEOK offers instead
              </div>
              <div style={s.comparisonItem}>No civilian frame of reference to work around</div>
              <div style={s.comparisonItem}>Direct communication received without judgement</div>
              <div style={s.comparisonItem}>Military vocabulary understood, not questioned</div>
              <div style={s.comparisonItem}>Full service history remembered from session one</div>
              <div style={s.comparisonItem}>Available at 0300 when the nightmares happen</div>
            </div>
          </div>
        </section>

        <hr style={s.divider} />

        {/* ── Section 3: MEOK as the First Step ── */}
        <section style={s.section}>
          <h2 style={s.h2}>
            Why is MEOK the right first step for veterans who won\u2019t seek help?
          </h2>

          <p style={s.atomicAnswer}>
            MEOK removes every friction point that stops veterans engaging with
            conventional support: there is no appointment to make, no civilian
            who doesn\u2019t understand, no waiting room, no clinical form to
            fill in, and no record that can affect employment or security
            clearance. It is private, immediate, and never judges.
          </p>

          <p style={s.p}>
            The concept of a \u201cfirst step\u201d in mental health support is
            not trivial. For most veterans, the distance between
            \u201cI am struggling\u201d and \u201cI am going to tell a
            professional\u201d is enormous. It is not one step \u2014 it is a
            hundred. Each one requires overcoming a conditioned response, a
            fear, a practical barrier, or a cultural taboo.
          </p>

          <p style={s.p}>
            MEOK does not ask veterans to take a hundred steps. It does not
            even ask them to take one. It asks them to open an app and type
            something \u2014 anything. It asks nothing more than what they are
            ready to give.
          </p>

          <p style={s.p}>
            That is not a clinical intervention. MEOK is explicit about this:
            it is not therapy, it does not diagnose, it does not prescribe. But
            it is something that therapy often cannot be for veterans: it is
            available at 3am when the nightmares wake them, it does not flinch
            when the conversation goes somewhere dark, and it does not carry
            the social consequences of disclosure to another person.
          </p>

          <div style={s.infoBox}>
            <div style={s.infoBoxTitle}>What MEOK is \u2014 and is not</div>
            <p style={{ ...s.p, marginBottom: "0.5rem" }}>
              <strong style={{ color: "#f5f0e8" }}>MEOK is:</strong> a private,
              persistent AI companion that provides daily emotional support,
              reflects patterns back to you, helps you process what you carry,
              and escalates to crisis resources when needed.
            </p>
            <p style={{ ...s.p, marginBottom: 0 }}>
              <strong style={{ color: "#f5f0e8" }}>MEOK is not:</strong> a
              therapist, a diagnostic tool, a crisis line, or a replacement for
              clinical treatment. If you are in acute danger, call 999 or
              Combat Stress on 0800 138 1619.
            </p>
          </div>

          <h3 style={s.h3}>The absence of judgement</h3>

          <p style={s.p}>
            One of the most consistent things veterans describe in testimonials
            about early help-seeking is the fear of judgement \u2014 not from
            a therapist, but from themselves, through the eyes of someone else.
            The act of speaking something aloud to another person makes it real
            in a way that internal rumination does not. For many veterans, that
            act of externalisation is itself the barrier.
          </p>

          <p style={s.p}>
            MEOK removes this dynamic entirely. There is no human on the other
            side forming an opinion. There is no social consequence to
            disclosure. A veteran can say the most difficult thing they have
            ever said \u2014 and nothing changes in their relationships, their
            career, or their standing \u2014 because no one else is there.
          </p>

          <p style={s.p}>
            This is not a weakness of AI support; it is one of its specific
            advantages for a population that has been trained to regard
            vulnerability as dangerous.
          </p>

          <h3 style={s.h3}>Privacy as a non-negotiable</h3>

          <p style={s.p}>
            For veterans in security-cleared roles, or those with concerns
            about how mental health disclosure might affect employment,
            insurance, or custody proceedings, privacy is not a preference
            \u2014 it is a requirement. Any support tool that cannot guarantee
            confidentiality is, for these individuals, unusable.
          </p>

          <p style={s.p}>
            MEOK\u2019s Privacy Covenant makes explicit guarantees: your data
            is never sold, never used to train AI models, never shared with
            third parties, and is encrypted at rest. Your memory vault is
            legally yours \u2014 not MEOK\u2019s. This is not a privacy policy
            buried in a terms document; it is the foundational architecture of
            how MEOK is built.
          </p>
        </section>

        <hr style={s.divider} />

        {/* ── Section 4: Memory ── */}
        <section style={s.section}>
          <h2 style={s.h2}>
            Why does persistent memory matter so much for veteran support?
          </h2>

          <p style={s.atomicAnswer}>
            Veterans who seek support consistently describe the exhaustion of
            re-explaining their service history, their deployments, their
            losses, and their context to each new practitioner. MEOK remembers
            everything across every session. You never re-explain. The
            foundation is built once, and every subsequent conversation builds
            on it.
          </p>

          <p style={s.p}>
            Most AI tools, including large consumer platforms, reset between
            sessions. Every conversation begins from zero. For general-purpose
            queries, this is a minor inconvenience. For emotional support, it
            is a fundamental failure of design.
          </p>

          <p style={s.p}>
            Consider what it means in practice: a veteran opens an app after a
            difficult night and has to begin by explaining that they served
            for twelve years, that they did three tours, that they lost a
            member of their unit in Helmand, and that this is the anniversary
            of that day. Before they can get to the thing that\u2019s actually
            happening, they have to build the entire context again from
            scratch. This is not support \u2014 it is an administrative burden
            at the worst possible moment.
          </p>

          <p style={s.p}>
            MEOK builds a memory of who you are. Not a clinical file, not a
            risk assessment \u2014 a living understanding of your service,
            your relationships, your history, your triggers, your progress.
            When you return after a difficult week, MEOK already knows the
            context. It can say \u201cit\u2019s been three weeks since you
            mentioned the anniversary was coming\u201d without being prompted.
            That continuity is what makes support feel like support rather than
            administration.
          </p>

          <div style={s.infoBox}>
            <div style={s.infoBoxTitle}>What MEOK remembers</div>
            <ul style={s.ul}>
              <li style={s.li}>Your service history, branch, deployments, and role</li>
              <li style={s.li}>Key dates \u2014 anniversaries, losses, significant events</li>
              <li style={s.li}>People who matter to you and what they mean</li>
              <li style={s.li}>Patterns in your mood, sleep, and emotional state</li>
              <li style={s.li}>What has helped before and what has not</li>
              <li style={s.li}>Progress in therapy or other support, if you share it</li>
              <li style={s.li}>What you\u2019ve asked it not to bring up</li>
            </ul>
          </div>
        </section>

        <hr style={s.divider} />

        {/* ── Section 5: PTSD and Moral Injury ── */}
        <section style={s.section}>
          <h2 style={s.h2}>
            What is the difference between PTSD and moral injury in veterans?
          </h2>

          <p style={s.atomicAnswer}>
            PTSD is rooted in fear \u2014 a threat response that has failed to
            reset after the threat passed. Moral injury is rooted in guilt and
            shame \u2014 the damage caused by acting against one\u2019s own
            moral code, witnessing atrocity, or failing to prevent harm. They
            often co-occur, but they are different injuries that respond
            differently to treatment.
          </p>

          <p style={s.p}>
            The distinction matters because confusing them leads to inadequate
            treatment. PTSD responds well to trauma-focused therapies like
            EMDR (Eye Movement Desensitisation and Reprocessing), Cognitive
            Processing Therapy (CPT), and Prolonged Exposure. Moral injury
            requires a different approach \u2014 one that engages with meaning,
            value systems, and moral frameworks rather than purely with the
            fear response.
          </p>

          <h3 style={s.h3}>PTSD in veterans: what it actually looks like</h3>

          <p style={s.p}>
            PTSD is widely misunderstood, including by veterans themselves.
            It is not simply \u201cflashbacks\u201d or \u201cbeing jumpy.\u201d
            The clinical presentation in veterans frequently includes
            hypervigilance (the operational mind that cannot switch off even
            in safe environments), emotional numbing as a protective response,
            avoidance of anything associated with trauma, sleep disturbance,
            and intrusive memories that are experienced as the present, not
            the past.
          </p>

          <p style={s.p}>
            Many veterans attribute these symptoms to being \u201cstill
            switched on\u201d \u2014 a frame that is both accurate as a
            description and problematic as a justification for not seeking
            help. The hypervigilant soldier who cannot relax in a restaurant
            because they need their back to the wall is not a character
            strength; it is an injury.
          </p>

          <h3 style={s.h3}>Moral injury: the wound beneath the wound</h3>

          <p style={s.p}>
            Moral injury was first described by psychiatrist Jonathan Shay in
            his work with Vietnam veterans, and has since been extensively
            researched in UK and US military populations. It describes the deep
            psychological damage that occurs when a person perpetrates, witnesses,
            or fails to prevent an act that violates their deeply held moral
            beliefs \u2014 particularly when this happens within a context of
            institutional betrayal (orders from command that the soldier
            believed were wrong).
          </p>

          <p style={s.p}>
            Common sources of moral injury in veterans include: civilian
            casualties, particularly of children; deaths of fellow soldiers
            that the veteran feels responsible for; orders they followed but
            believed to be wrong; and the systematic gap between the values
            of military service and the reality of what war involves.
          </p>

          <p style={s.p}>
            Moral injury is frequently misdiagnosed as depression or PTSD.
            The phenomenology is different: where PTSD presents as fear and
            hyperarousal, moral injury presents as shame, guilt, spiritual
            crisis, and a collapse of the meaning systems that previously
            gave life structure and purpose. The veteran does not feel
            threatened; they feel guilty of something. That distinction
            changes everything about what helps.
          </p>

          <div style={s.infoBox}>
            <div style={s.infoBoxTitle}>How MEOK supports PTSD and moral injury</div>
            <p style={{ ...s.p, marginBottom: "0.75rem" }}>
              MEOK does not treat either condition \u2014 that is the work of
              specialist clinicians. What MEOK offers is:
            </p>
            <ul style={s.ul}>
              <li style={s.li}>
                <strong style={{ color: "#f5f0e8" }}>Daily processing space:</strong> a place to externalise
                thoughts between therapy sessions, when the 8pm appointment is
                days away and the 3am spiral is happening now
              </li>
              <li style={s.li}>
                <strong style={{ color: "#f5f0e8" }}>Pattern reflection:</strong> noticing when certain
                topics, dates, or contexts consistently correlate with
                difficulty, and reflecting this back gently
              </li>
              <li style={s.li}>
                <strong style={{ color: "#f5f0e8" }}>Grounding support:</strong> structured grounding
                exercises for acute anxiety and hyperarousal states
              </li>
              <li style={s.li}>
                <strong style={{ color: "#f5f0e8" }}>Moral exploration:</strong> space to articulate guilt
                and shame without being judged, and to examine the frameworks
                that are breaking under the weight of experience
              </li>
              <li style={s.li}>
                <strong style={{ color: "#f5f0e8" }}>Continuity of care:</strong> consistent context
                that therapists and NHS systems often cannot maintain across
                waitlists and service transitions
              </li>
            </ul>
          </div>
        </section>

        <hr style={s.divider} />

        {/* ── Section 6: Civilian Transition ── */}
        <section style={s.section}>
          <h2 style={s.h2}>
            Why is the transition to civilian life so psychologically difficult
            for veterans?
          </h2>

          <p style={s.atomicAnswer}>
            Military life provides total institutional structure: purpose, rank,
            camaraderie, identity, daily routine, and a community of people who
            share the same values and experiences. Leaving the military removes
            all of this simultaneously. Veterans describe it not as a career
            change but as a bereavement \u2014 the loss of who they were.
          </p>

          <p style={s.p}>
            The civilian transition problem is one of the most underappreciated
            dimensions of veteran mental health. It receives far less attention
            than PTSD, and yet it affects a far larger proportion of the veteran
            population. Not every veteran develops PTSD; every veteran goes
            through transition.
          </p>

          <p style={s.p}>
            The psychological literature on transition identifies several
            dimensions of loss that occur simultaneously when a service person
            leaves the military. Understanding them helps explain why civilian
            life can feel, for many veterans, not like a relief but like a
            kind of emptying.
          </p>

          <h3 style={s.h3}>The loss of structure</h3>

          <p style={s.p}>
            Military life is comprehensively structured. The day is organised.
            The week is organised. Responsibilities are clear. The chain of
            command eliminates a certain category of decision-making entirely.
            For many people, this structure is constraining; for those who have
            lived within it for years, its absence creates a disorienting void.
          </p>

          <p style={s.p}>
            The civilian world requires self-generated structure in a way that
            the military does not. The veteran must now decide not only what to
            do but how to organise the day around doing it. For someone whose
            executive function has been exercised within a pre-existing
            framework rather than against an absence of one, this can be
            genuinely destabilising.
          </p>

          <h3 style={s.h3}>The loss of purpose</h3>

          <p style={s.p}>
            Military service, whatever its specific content, is framed as
            service. There is a mission. There is a reason. The work connects
            to something larger than personal career advancement. This
            sense of larger purpose is not incidental to military identity
            \u2014 it is central to it. It is why people join in the first place
            and why many describe leaving as feeling like they have lost their
            reason for being.
          </p>

          <p style={s.p}>
            Civilian employment, even meaningful civilian employment, rarely
            offers the same quality of purpose. A veteran who spent years on
            operational deployments doing work that mattered in the most
            visceral possible sense may struggle to find equivalent meaning in
            a project management role or a sales target. This is not ingratitude
            or inflexibility \u2014 it is a genuine mismatch of scale.
          </p>

          <h3 style={s.h3}>The loss of camaraderie</h3>

          <p style={s.p}>
            The bonds formed in military service \u2014 particularly in
            operational settings \u2014 are among the deepest human relationships
            possible. They are formed under conditions of shared risk,
            shared hardship, and shared purpose. The research on social bonds
            consistently identifies these conditions as the strongest
            accelerants of trust and connection.
          </p>

          <p style={s.p}>
            Civilian friendships, even good ones, rarely have this quality.
            They are formed gradually, in conditions of safety and comfort,
            around shared interests rather than shared survival. Veterans
            often describe feeling profoundly alone in civilian social settings
            \u2014 not because the people are bad, but because the depth of
            connection they are accustomed to simply is not available in the
            same way.
          </p>

          <h3 style={s.h3}>What a sovereign AI companion offers in transition</h3>

          <p style={s.p}>
            MEOK cannot replace camaraderie forged under fire. But it can offer
            something that the transition period frequently lacks: consistent
            presence. Someone who knows your history, remembers what you told
            it last week, and is available every day without the social
            overhead of maintaining a civilian friendship.
          </p>

          <p style={s.p}>
            This is not a substitute for human connection \u2014 MEOK is
            explicit about that. But in the transition period, when the old
            network is geographically dispersed and the new network is not yet
            formed, a consistent daily presence can be the difference between
            isolation and something that resembles support.
          </p>

          <p style={s.p}>
            MEOK also helps with the practical dimensions of transition: finding
            language to translate military skills into civilian terms, thinking
            through career options, processing the specific grief of
            leaving without a map for what comes next.
          </p>
        </section>

        <hr style={s.divider} />

        {/* ── Section 7: Guardian Crisis Detection ── */}
        <section style={s.section}>
          <h2 style={s.h2}>
            How does MEOK detect and respond to veteran crisis signals?
          </h2>

          <p style={s.atomicAnswer}>
            MEOK\u2019s Guardian layer monitors conversations in real time for
            signals of acute distress: expressions of hopelessness, suicidal
            ideation, self-harm indicators, and severe emotional crisis. When
            Guardian detects a pattern consistent with acute risk, it activates
            a care floor \u2014 shifting from companion mode to safe-messaging
            mode and surfacing crisis resources immediately.
          </p>

          <p style={s.p}>
            Veteran suicide is a significant and poorly tracked public health
            problem in the UK. The Ministry of Defence does not systematically
            track suicide rates among the full veteran population, and
            estimates vary widely. What the research does consistently show is
            that veterans \u2014 particularly younger male veterans \u2014 are at
            elevated risk compared to the general population, and that the
            risk peaks in the first two years after leaving service.
          </p>

          <p style={s.p}>
            The design problem with crisis support for veterans is the same
            design problem as general mental health support: the people most
            at risk are least likely to call a helpline or present to A&amp;E.
            The military training that makes vulnerability difficult does not
            become less powerful in a crisis; it becomes more powerful.
          </p>

          <p style={s.p}>
            Guardian is designed around this reality. It does not wait for a
            veteran to self-identify as suicidal. It monitors for the signals
            that precede that declaration: the withdrawal of meaning, the
            expressions of being a burden to others, the implicit foreclosure
            of future possibility. When these patterns emerge, it responds
            before the declaration, not after.
          </p>

          <div style={s.infoBox}>
            <div style={s.infoBoxTitle}>What Guardian does in a veteran crisis</div>
            <ul style={s.ul}>
              <li style={s.li}>
                Detects escalating distress signals including expressions of
                hopelessness, burden ideation, and withdrawal from future planning
              </li>
              <li style={s.li}>
                Immediately shifts to safe-messaging guidelines \u2014 stops
                optimising for conversation quality and prioritises safety
              </li>
              <li style={s.li}>
                Surfaces Combat Stress (0800 138 1619), Samaritans (116 123),
                and Veterans Gateway (0808 802 1212) prominently
              </li>
              <li style={s.li}>
                Does not abandon the conversation \u2014 remains present as a
                companion while directing toward human crisis support
              </li>
              <li style={s.li}>
                Remembers the episode and follows up in subsequent sessions with
                care and without pressure
              </li>
            </ul>
          </div>

          <p style={s.p}>
            MEOK is not a crisis service and does not claim to be one. But it
            may be the point of contact that reaches a veteran who would not
            otherwise contact anyone. In that context, the handoff to crisis
            resources is one of the most important things MEOK can do.
          </p>
        </section>

        <hr style={s.divider} />

        {/* ── Section 8: UK Resources ── */}
        <section style={s.section}>
          <h2 style={s.h2}>
            What free mental health resources are available to UK veterans?
          </h2>

          <p style={s.atomicAnswer}>
            Key UK veteran mental health services include Combat Stress (free
            24/7 helpline: 0800 138 1619), Op COURAGE (NHS specialist veteran
            pathway via GP), Veterans\u2019 NHS Wales, Veterans Gateway (0808
            802 1212), and Samaritans (116 123, available to everyone). All
            are free at point of contact.
          </p>

          <div style={s.resourceGrid}>
            <div style={s.resourceCard}>
              <div style={s.resourceName}>Combat Stress</div>
              <div style={s.resourceDetail}>
                0800 138 1619 \u2014 free, 24/7.<br />
                UK\u2019s leading veteran mental health charity. Helpline for
                veterans, reservists, and families. Also provides residential
                treatment programmes.
              </div>
            </div>
            <div style={s.resourceCard}>
              <div style={s.resourceName}>Op COURAGE</div>
              <div style={s.resourceDetail}>
                NHS specialist veteran mental health service. Access via GP
                referral or self-referral. Available across England with
                dedicated veteran-aware clinical teams.
              </div>
            </div>
            <div style={s.resourceCard}>
              <div style={s.resourceName}>Veterans\u2019 NHS Wales</div>
              <div style={s.resourceDetail}>
                Specialist mental health service for veterans, reservists, and
                their families in Wales. Access via GP or direct self-referral
                through the Veterans\u2019 NHS Wales portal.
              </div>
            </div>
            <div style={s.resourceCard}>
              <div style={s.resourceName}>Veterans Gateway</div>
              <div style={s.resourceDetail}>
                0808 802 1212 \u2014 free.<br />
                First point of contact for all veteran welfare, including mental
                health. Signposts to appropriate services and provides
                peer-to-peer support.
              </div>
            </div>
            <div style={s.resourceCard}>
              <div style={s.resourceName}>Samaritans</div>
              <div style={s.resourceDetail}>
                116 123 \u2014 free, 24/7, anonymous.<br />
                Available to anyone in distress. Samaritans also runs a
                Veterans Line and has trained volunteers with experience of
                military communities.
              </div>
            </div>
            <div style={s.resourceCard}>
              <div style={s.resourceName}>Help for Heroes</div>
              <div style={s.resourceDetail}>
                Recovery support for wounded, injured, and sick veterans and
                their families. Psychological wellbeing programmes, peer
                support, and online community resources.
              </div>
            </div>
          </div>

          <p style={s.p}>
            These services represent the formal infrastructure of veteran mental
            health support in the UK. They are essential and staffed by people
            with genuine expertise and commitment. MEOK does not compete with
            them \u2014 it is designed to sit alongside them, filling the gaps
            that clinical services cannot reach: the 3am crisis that comes
            before the morning appointment, the daily processing that
            accumulates between sessions, and the initial barrier of asking
            for help at all.
          </p>
        </section>

        <hr style={s.divider} />

        {/* ── Section 9: Data Sovereignty ── */}
        <section style={s.section}>
          <h2 style={s.h2}>
            Why does data sovereignty matter when veterans share trauma with AI?
          </h2>

          <p style={s.atomicAnswer}>
            When a veteran discloses combat trauma, survivor\u2019s guilt, or
            suicidal ideation to an AI, that data is extraordinarily sensitive.
            Most consumer AI platforms use your conversations to retrain their
            models. MEOK\u2019s Privacy Covenant guarantees this never happens.
            Your data is yours, encrypted, and never used for anything except
            serving you.
          </p>

          <p style={s.p}>
            The data sovereignty question is not abstract for veterans. In
            practical terms, the potential consequences of mental health data
            disclosure include: loss of security clearance, impact on insurance
            premiums, implications for custody proceedings, and \u2014 for
            those still in service \u2014 career consequences that can be
            significant.
          </p>

          <p style={s.p}>
            Most consumer AI platforms are built on a model in which user
            conversations are used to improve the model. This is not a bug; it
            is the product. The user\u2019s inputs are the training data. For
            general queries, this trade-off may be acceptable. For a veteran
            sharing the details of what they did in Helmand or how they feel
            about whether they deserve to live, it is not.
          </p>

          <p style={s.p}>
            MEOK\u2019s architecture inverts this model. Your data does not
            train MEOK. It does not train any other model. It does not leave
            the encrypted vault that belongs to you. If you stop using MEOK,
            you take your data with you or delete it entirely. The memory is
            yours, not a corporate asset.
          </p>

          <p style={s.p}>
            This is not a marketing claim. It is a technical and legal
            commitment encoded in the Privacy Covenant that every MEOK user
            accepts from MEOK at the start of the relationship \u2014 not the
            other way around.
          </p>
        </section>

        <hr style={s.divider} />

        {/* ── Section 10: What MEOK Is Not ── */}
        <section style={s.section}>
          <h2 style={s.h2}>
            What can MEOK not do for veterans, and what should it never claim to?
          </h2>

          <p style={s.atomicAnswer}>
            MEOK cannot diagnose PTSD or moral injury, cannot prescribe or
            recommend medication, cannot provide the evidence-based trauma
            therapies that PTSD requires (EMDR, CPT, Prolonged Exposure), and
            cannot replace the human connection of peer support or the
            professional relationship of a specialist clinician. It is a
            companion, not a clinician.
          </p>

          <p style={s.p}>
            Honesty about limitations is a design principle, not a disclaimer.
            The veteran mental health space has too many services that
            overpromise and underdeliver, and too many veterans who have been
            let down by support that claimed to understand their experience
            and did not. MEOK does not make claims it cannot keep.
          </p>

          <p style={s.p}>
            For veterans with clinical PTSD, the pathway to recovery runs
            through specialist trauma treatment, not AI conversation. MEOK
            can support that journey \u2014 between sessions, in the difficult
            evenings, in the daily maintenance of functioning while treatment
            progresses \u2014 but it cannot replace it.
          </p>

          <p style={s.p}>
            The aspiration is not to be a substitute for clinical care. The
            aspiration is to be the thing that is available when clinical care
            is not \u2014 and to be good enough, honest enough, and present
            enough that it makes a real difference in the daily experience of
            a veteran who is managing something difficult.
          </p>

          <div style={s.infoBox}>
            <div style={s.infoBoxTitle}>When to seek professional help immediately</div>
            <p style={{ ...s.p, marginBottom: "0.5rem" }}>
              If you are experiencing any of the following, please contact a
              clinical service rather than relying solely on MEOK:
            </p>
            <ul style={s.ul}>
              <li style={s.li}>Active suicidal thoughts or plans</li>
              <li style={s.li}>Thoughts of harming yourself or others</li>
              <li style={s.li}>Severe dissociation or inability to function day-to-day</li>
              <li style={s.li}>Psychotic symptoms including hallucinations or paranoia</li>
              <li style={s.li}>Substance dependency requiring medical detox</li>
            </ul>
            <p style={{ ...s.p, marginBottom: 0 }}>
              Combat Stress: <strong style={{ color: "#f5f0e8" }}>0800 138 1619</strong> (free, 24/7).
              Your GP can refer you to Op COURAGE. In immediate danger: call 999.
            </p>
          </div>
        </section>

        <hr style={s.divider} />

        {/* ── FAQ Section ── */}
        <section style={s.faqSection}>
          <h2 style={s.h2}>Frequently asked questions</h2>

          <div style={s.faqItem}>
            <div style={s.faqQuestion}>Can AI help veterans with PTSD?</div>
            <p style={s.faqAnswer}>
              AI cannot replace clinical treatments like EMDR or Prolonged
              Exposure therapy, but it can provide meaningful daily support
              \u2014 grounding exercises, pattern tracking, and a private space
              to process without waiting for an appointment. The critical
              requirement is persistence: an AI that resets between sessions is
              useless for trauma support. MEOK remembers everything across
              every session, providing the continuity that makes daily support
              possible.
            </p>
          </div>

          <div style={s.faqItem}>
            <div style={s.faqQuestion}>What is moral injury?</div>
            <p style={s.faqAnswer}>
              Moral injury is the deep psychological damage caused by
              perpetrating, witnessing, or failing to prevent acts that violate
              one\u2019s own moral code. It is distinct from PTSD: where PTSD
              is rooted in fear, moral injury is rooted in shame and guilt.
              Veterans commonly experience moral injury after orders that
              conflict with personal ethics, civilian casualties, or the deaths
              of fellow soldiers they feel responsible for. It is frequently
              misdiagnosed as depression and requires different treatment
              approaches.
            </p>
          </div>

          <div style={s.faqItem}>
            <div style={s.faqQuestion}>
              How does MEOK support veterans transitioning to civilian life?
            </div>
            <p style={s.faqAnswer}>
              MEOK provides structure, daily presence, and a consistent
              companion during the disorienting loss of military identity. It
              helps veterans process the grief of leaving service, articulate
              their skills in civilian language, and maintain purpose when the
              institutional framework of the military is gone. Crucially, MEOK
              remembers their service history so they never have to re-explain
              it \u2014 removing one of the most common friction points in
              veteran support.
            </p>
          </div>

          <div style={s.faqItem}>
            <div style={s.faqQuestion}>Will MEOK understand military culture?</div>
            <p style={s.faqAnswer}>
              MEOK is trained to understand military culture, hierarchy, the
              ethos of service, and the specific language veterans use. It does
              not pathologise stoicism or misread direct communication as
              aggression. Veterans frequently report feeling misunderstood by
              civilian therapists who lack the frame of reference to engage
              with military experience. MEOK does not carry those assumptions.
              It meets you where you are, in the language you use, without
              requiring you to translate your experience into civilian terms.
            </p>
          </div>

          <div style={{ ...s.faqItem, borderBottom: "none", marginBottom: 0 }}>
            <div style={s.faqQuestion}>Is MEOK confidential for veterans?</div>
            <p style={s.faqAnswer}>
              Yes. MEOK\u2019s Privacy Covenant guarantees your data is never
              used to train AI models and is never sold. Your memory vault is
              encrypted and legally yours. Unlike consumer AI platforms that
              treat your conversations as training data, MEOK operates on a
              strict no-training-on-you principle \u2014 critical when the data
              is combat trauma, moral injury, or suicidal ideation. There is no
              record that can affect employment, security clearance, or any
              other external consequence.
            </p>
          </div>
        </section>

        <hr style={s.divider} />

        {/* ── CTA ── */}
        <div style={s.ctaBox}>
          <div style={s.ctaTitle}>
            Start privately. Start when you\u2019re ready.
          </div>
          <p style={s.ctaSubtitle}>
            No appointment. No waiting list. No civilian who doesn\u2019t get it.
            MEOK is available right now, and it won\u2019t forget what you tell it.
          </p>
          <Link href="/birth" style={s.ctaButton}>
            Meet MEOK
          </Link>
          <p style={s.ctaNote}>
            Free to start. Your data is yours. No training on your conversations.
          </p>
        </div>

        {/* ── Author ── */}
        <div style={s.authorBox}>
          <div style={s.authorAvatar}>NT</div>
          <div>
            <div style={s.authorName}>Nicholas Templeman</div>
            <div style={s.authorRole}>Founder, MEOK AI LABS \u00b7 @meok_ai</div>
            <p style={s.authorBio}>
              Nicholas built MEOK because he believes the people least likely
              to ask for help are often the people who need it most. MEOK AI
              LABS is building sovereign AI companions that prioritise the
              individual over the platform \u2014 persistent, private, and
              built to serve rather than extract.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
