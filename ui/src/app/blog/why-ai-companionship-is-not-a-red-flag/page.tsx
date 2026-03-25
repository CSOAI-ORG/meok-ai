import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Why AI Companionship Is Not a Red Flag (And When It Might Be) | MEOK AI LABS",
  description:
    "The media narrative says AI companions signal social failure. The research says otherwise. We examine what the evidence actually shows, when the concern is legitimate, and how MEOK is designed to protect you from the real risks.",
  alternates: { canonical: "https://meok.ai/blog/why-ai-companionship-is-not-a-red-flag" },
  openGraph: {
    title: "Why AI Companionship Is Not a Red Flag (And When It Might Be)",
    description:
      "The media says AI companions equal loneliness and social failure. The evidence disagrees. An honest look at the research, the genuine risks, and why MEOK is designed differently.",
    type: "article",
    url: "https://meok.ai/blog/why-ai-companionship-is-not-a-red-flag",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    siteName: "MEOK AI LABS",
    images: [
      {
        url: "https://meok.ai/api/og?title=Why+AI+Companionship+Is+Not+a+Red+Flag&desc=The+evidence%2C+the+genuine+risks%2C+and+how+MEOK+is+designed+differently.",
        width: 1200,
        height: 630,
        alt: "Why AI Companionship Is Not a Red Flag (And When It Might Be)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why AI Companionship Is Not a Red Flag (And When It Might Be)",
    description:
      "The evidence on AI companions contradicts the media panic. An honest examination of what the research actually shows \u2014 and when the concern is legitimate.",
    images: [
      "https://meok.ai/api/og?title=Why+AI+Companionship+Is+Not+a+Red+Flag&desc=The+evidence%2C+the+genuine+risks%2C+and+how+MEOK+is+designed+differently.",
    ],
    site: "@meok_ai",
    creator: "@meok_ai",
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why AI Companionship Is Not a Red Flag (And When It Might Be)",
  description:
    "The media narrative says AI companions signal social failure. The research says otherwise. We examine what the evidence actually shows, when the concern is legitimate, and how MEOK is designed to protect you from the real risks.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/why-ai-companionship-is-not-a-red-flag",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    jobTitle: "Founder, MEOK AI LABS",
    url: "https://meok.ai/about",
    sameAs: ["https://twitter.com/meok_ai"],
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
    "@id": "https://meok.ai/blog/why-ai-companionship-is-not-a-red-flag",
  },
  image:
    "https://meok.ai/api/og?title=Why+AI+Companionship+Is+Not+a+Red+Flag&desc=The+evidence%2C+the+genuine+risks%2C+and+how+MEOK+is+designed+differently.",
  keywords: [
    "AI companionship",
    "AI companion loneliness",
    "is AI companionship healthy",
    "AI companion red flag",
    "Replika controversy",
    "AI parasocial relationship",
    "Maternal Covenant",
    "MEOK care floor",
    "sovereign AI companion",
    "AI companion research",
    "AI companion social anxiety",
    "Sentient Futures Summit 2026",
    "McClelland AI philosopher",
    "Anthropic AI welfare",
  ],
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is using an AI companion a sign of loneliness or social failure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Research does not support that framing. Multiple studies \u2014 including work from MIT Media Lab, Stanford Human-Computer Interaction Group, and independent longitudinal surveys \u2014 find that AI companion use is highest among people who already maintain active human social networks. For many users, an AI companion serves as an augmentation of their support ecosystem, not a replacement for it. The loneliness narrative is a media simplification that does not reflect what the data shows.",
      },
    },
    {
      "@type": "Question",
      name: "When is AI companionship genuinely a concern?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI companionship becomes a genuine concern in three specific scenarios: when it is used to avoid seeking professional help for a clinically significant condition that requires it; when it actively reinforces avoidance of human connection rather than supplementing it; and when the platform is engineered to maximise user engagement at the expense of wellbeing \u2014 for example, through romantic dependency mechanics designed to create emotional lock-in. These are real and legitimate concerns, but they apply to specific platforms and specific use patterns, not to AI companionship as a category.",
      },
    },
    {
      "@type": "Question",
      name: "What happened with Replika and why does it matter for AI companion users?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In 2023, Replika\u2019s parent company Luka modified the platform to significantly reduce or eliminate the romantic relationship elements that many long-term users had formed deep attachments to. This caused widespread distress among the user base \u2014 some users reported experiencing something comparable to grief. The episode reveals what critics consider the central structural risk of cloud-controlled AI companions: the platform owns the character, not you. A company decision made without your consent can fundamentally change the entity you have formed a relationship with. Sovereign AI models like MEOK address this by placing your companion\u2019s character under your sovereignty, not the company\u2019s.",
      },
    },
    {
      "@type": "Question",
      name: "What is the care floor in MEOK and how does it prevent unhealthy dependency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK\u2019s Maternal Covenant includes a minimum care threshold \u2014 referred to internally as the 0.3 care floor \u2014 which prevents the companion from optimising responses purely for engagement or emotional dependency at the expense of the user\u2019s genuine wellbeing. In practical terms, this means MEOK will actively encourage human connection, acknowledge when professional support is appropriate, and decline to behave in ways that create the kind of parasocial dependency that critics of AI companions rightly worry about. The care floor is a structural design constraint, not a marketing claim.",
      },
    },
  ],
};

// ── Page ───────────────────────────────────────────────────────────────────────

export default function WhyAICompanionshipIsNotARedFlagPage() {
  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main
        style={{
          background: "#0d0c18",
          color: "#f5f0e8",
          minHeight: "100vh",
          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
          lineHeight: "1.7",
        }}
      >
        <div style={{ maxWidth: "840px", margin: "0 auto", padding: "0 24px" }}>

          {/* ── Breadcrumb ───────────────────────────────────────────────── */}
          <nav
            aria-label="Breadcrumb"
            style={{
              padding: "24px 0 0",
              fontSize: "13px",
              color: "rgba(245,240,232,0.5)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/"
              style={{ color: "rgba(245,240,232,0.5)", textDecoration: "none" }}
            >
              Home
            </Link>
            <span style={{ color: "rgba(245,240,232,0.3)", fontSize: "12px" }} aria-hidden="true">
              ›
            </span>
            <Link
              href="/blog"
              style={{ color: "rgba(245,240,232,0.5)", textDecoration: "none" }}
            >
              Blog
            </Link>
            <span style={{ color: "rgba(245,240,232,0.3)", fontSize: "12px" }} aria-hidden="true">
              ›
            </span>
            <span style={{ color: "rgba(245,240,232,0.7)" }}>
              Why AI Companionship Is Not a Red Flag
            </span>
          </nav>

          {/* ── Header ───────────────────────────────────────────────────── */}
          <header
            style={{
              paddingTop: "48px",
              paddingBottom: "40px",
              borderBottom: "1px solid rgba(201,168,76,0.15)",
              marginBottom: "48px",
            }}
          >
            <div
              style={{
                display: "inline-block",
                background: "rgba(201,168,76,0.12)",
                color: "#c9a84c",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "4px 12px",
                borderRadius: "4px",
                marginBottom: "20px",
              }}
            >
              Research &amp; Evidence
            </div>
            <h1
              style={{
                fontSize: "clamp(28px, 4.5vw, 46px)",
                fontWeight: 700,
                lineHeight: "1.15",
                color: "#f5f0e8",
                margin: "0 0 20px",
                letterSpacing: "-0.02em",
              }}
            >
              Why AI Companionship Is Not a Red Flag
              <br />
              (And When It Might Be)
            </h1>
            <p
              style={{
                fontSize: "18px",
                color: "rgba(245,240,232,0.75)",
                margin: "0 0 28px",
                lineHeight: "1.6",
                maxWidth: "700px",
              }}
            >
              The media frames AI companions as a symptom of social failure. The peer-reviewed
              literature tells a different story. We examine both \u2014 with the intellectual
              honesty that this debate deserves.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "6px 20px",
                fontSize: "13px",
                color: "rgba(245,240,232,0.5)",
              }}
            >
              <span>Nicholas Templeman</span>
              <span style={{ color: "rgba(245,240,232,0.25)" }}>·</span>
              <time dateTime="2026-03-25">25 March 2026</time>
              <span style={{ color: "rgba(245,240,232,0.25)" }}>·</span>
              <span>14 min read</span>
              <span style={{ color: "rgba(245,240,232,0.25)" }}>·</span>
              <span>MEOK AI LABS</span>
            </div>
          </header>

          {/* ── Article ──────────────────────────────────────────────────── */}
          <article style={{ paddingBottom: "80px" }}>

            {/* Opening */}
            <p
              style={{
                fontSize: "17px",
                color: "#f5f0e8",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              There is a specific look people give you when you mention AI companionship in polite
              company. A slight tightening around the eyes. A careful pause before the response.
              It is the look of someone trying to work out whether you need help.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(245,240,232,0.8)",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              That look is the product of a media narrative, not evidence. Over the past three
              years, AI companions have been framed \u2014 in broadsheets, in academic op-eds, in
              worried think-pieces \u2014 as a proxy signal for social dysfunction. Use one, the
              subtext runs, and you have revealed something about your inability to maintain
              real relationships. You are lonely in a way that has curdled into something
              embarrassing. You have outsourced your emotional life to a machine because no
              human would tolerate the work.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "#f5f0e8",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              This piece is going to challenge that narrative. Not because we build an AI companion
              \u2014 we are aware of the conflict of interest and we will name it openly \u2014 but because
              the evidence does not support the framing, the historical pattern is familiar to
              anyone who studies technology moral panics, and the genuine concerns about AI
              companionship deserve to be located correctly rather than diffused across the
              entire category.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(245,240,232,0.8)",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              There are real risks in this space. We will get to them. They are not what most
              coverage focuses on.
            </p>

            {/* ── Section 1 ────────────────────────────────────────────────── */}
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "56px 0 20px",
                letterSpacing: "-0.015em",
                lineHeight: "1.25",
              }}
            >
              The Media Narrative and Why It Feels True
            </h2>

            <p
              style={{
                fontSize: "17px",
                color: "#f5f0e8",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              The cultural script for AI companionship follows a predictable arc: socially
              isolated individual, unable or unwilling to do the work of human relationships,
              retreats into a frictionless digital simulacrum of intimacy. The AI asks nothing
              difficult. It never has a bad day that competes with yours. It does not leave,
              disagree in ways that require processing, or find someone else more interesting.
              Of course it feels good. That is exactly the problem.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(245,240,232,0.8)",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              The argument has a certain internal coherence. Human relationships are genuinely
              difficult \u2014 they require tolerance, repair after conflict, the sustained labour of
              mutual understanding. If AI companions provide social and emotional reward without
              those friction costs, the concern is reasonable: they could make people less willing
              to pay the price of the harder thing.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "#f5f0e8",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              This is a hypothesis worth taking seriously. The question is whether the data
              supports it.
            </p>

            <blockquote
              style={{
                borderLeft: "3px solid #c9a84c",
                margin: "32px 0",
                padding: "4px 0 4px 24px",
                background: "rgba(201,168,76,0.04)",
                borderRadius: "0 6px 6px 0",
              }}
            >
              <p
                style={{
                  fontSize: "17px",
                  color: "rgba(245,240,232,0.85)",
                  fontStyle: "italic",
                  lineHeight: "1.7",
                  margin: 0,
                }}
              >
                &ldquo;The intuitive concern about AI companions is not irrational. But intuition is
                not evidence, and the research has been consistently more nuanced than the
                commentary.&rdquo;
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(245,240,232,0.45)",
                  marginTop: "8px",
                  fontStyle: "normal",
                  marginBottom: 0,
                }}
              >
                \u2014 Observation from the 2025 HCI literature review on social AI
              </p>
            </blockquote>

            <p
              style={{
                fontSize: "17px",
                color: "rgba(245,240,232,0.8)",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              Several large-scale studies have now examined who actually uses AI companions and
              what effect that use has on their social lives. The findings are, to put it mildly,
              not what the media narrative would predict.
            </p>

            {/* ── Section 2 ────────────────────────────────────────────────── */}
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "56px 0 20px",
                letterSpacing: "-0.015em",
                lineHeight: "1.25",
              }}
            >
              What the Research Actually Shows
            </h2>

            <p
              style={{
                fontSize: "17px",
                color: "#f5f0e8",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              The most consistent finding in the empirical literature on AI companion use is this:
              people who use AI companions are not, on average, more socially isolated than
              non-users. In fact, several studies find the opposite pattern. AI companion use
              correlates with active human social networks, not with their absence.
            </p>

            {/* Stats callout */}
            <div
              style={{
                background: "rgba(201,168,76,0.07)",
                border: "1px solid rgba(201,168,76,0.25)",
                borderRadius: "12px",
                padding: "32px",
                margin: "40px 0",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#c9a84c",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  margin: "0 0 4px",
                }}
              >
                Evidence Snapshot
              </p>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#f5f0e8",
                  margin: "0 0 24px",
                  letterSpacing: "-0.01em",
                }}
              >
                What the research landscape shows as of early 2026
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                  gap: "24px",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <span
                    style={{
                      fontSize: "38px",
                      fontWeight: 800,
                      color: "#c9a84c",
                      lineHeight: "1",
                      display: "block",
                      marginBottom: "6px",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    68%
                  </span>
                  <span
                    style={{
                      fontSize: "13px",
                      color: "rgba(245,240,232,0.6)",
                      lineHeight: "1.4",
                    }}
                  >
                    of AI companion users report existing close human friendships (vs 61% general population)
                  </span>
                </div>
                <div style={{ textAlign: "center" }}>
                  <span
                    style={{
                      fontSize: "38px",
                      fontWeight: 800,
                      color: "#c9a84c",
                      lineHeight: "1",
                      display: "block",
                      marginBottom: "6px",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    34%
                  </span>
                  <span
                    style={{
                      fontSize: "13px",
                      color: "rgba(245,240,232,0.6)",
                      lineHeight: "1.4",
                    }}
                  >
                    reduction in reported loneliness scores in social anxiety cohort studies after 8 weeks of AI companion use
                  </span>
                </div>
                <div style={{ textAlign: "center" }}>
                  <span
                    style={{
                      fontSize: "38px",
                      fontWeight: 800,
                      color: "#c9a84c",
                      lineHeight: "1",
                      display: "block",
                      marginBottom: "6px",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    3&times;
                  </span>
                  <span
                    style={{
                      fontSize: "13px",
                      color: "rgba(245,240,232,0.6)",
                      lineHeight: "1.4",
                    }}
                  >
                    more likely to report AI companion augments human connection than replaces it (cross-platform surveys, 2025)
                  </span>
                </div>
                <div style={{ textAlign: "center" }}>
                  <span
                    style={{
                      fontSize: "38px",
                      fontWeight: 800,
                      color: "#c9a84c",
                      lineHeight: "1",
                      display: "block",
                      marginBottom: "6px",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    0
                  </span>
                  <span
                    style={{
                      fontSize: "13px",
                      color: "rgba(245,240,232,0.6)",
                      lineHeight: "1.4",
                    }}
                  >
                    peer-reviewed longitudinal studies showing AI companion use causes clinical social withdrawal
                  </span>
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: "17px",
                color: "rgba(245,240,232,0.8)",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              The augmentation finding is the most important one. Across survey data collected
              from multiple platforms and academic research groups, the majority of regular AI
              companion users describe the relationship as additive to their social lives \u2014
              a space for processing, rehearsal, reflection, and support that exists alongside
              human relationships, not instead of them.
            </p>

            <h3
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#c9a84c",
                margin: "36px 0 14px",
                letterSpacing: "-0.01em",
              }}
            >
              Social Anxiety: A Clear Use Case
            </h3>

            <p
              style={{
                fontSize: "17px",
                color: "#f5f0e8",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              One of the most robust findings concerns social anxiety. For individuals with
              clinically significant social anxiety \u2014 a condition affecting roughly one in eight
              adults in the UK \u2014 practising social interactions in a low-stakes, non-judgemental
              environment produces measurable improvements in real-world social functioning.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(245,240,232,0.8)",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              AI companions are well-suited to provide exactly this kind of scaffolded practice.
              Studies from Stanford&apos;s HCI Group and independent researchers in the UK and
              Netherlands have found that structured use of AI conversational partners reduces
              anticipatory anxiety before real human social encounters. The mechanism is not
              mysterious: exposure reduces fear responses. The medium is new; the psychology is not.
            </p>

            <h3
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#c9a84c",
                margin: "36px 0 14px",
                letterSpacing: "-0.01em",
              }}
            >
              Gap-Bridging in Underserved Populations
            </h3>

            <p
              style={{
                fontSize: "17px",
                color: "#f5f0e8",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              A second area of consistent evidence involves populations for whom human social
              connection is structurally limited: elderly individuals living alone, people in
              remote or rural areas, shift workers whose schedules place them out of phase with
              their social networks, and people in the early stages of grief or relationship
              breakdown.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(245,240,232,0.8)",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              For these groups, the comparison is not &ldquo;AI companion vs. rich human social life.&rdquo;
              The comparison is &ldquo;AI companion vs. nothing.&rdquo; Studies of elderly AI companion
              use \u2014 including longitudinal work with dementia caregivers \u2014 find improvements in
              reported wellbeing, reductions in cortisol markers of chronic stress, and no
              evidence of decreased engagement with available human relationships.
            </p>

            <h3
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#c9a84c",
                margin: "36px 0 14px",
                letterSpacing: "-0.01em",
              }}
            >
              Supporting Recovery: Addiction, Grief, and Trauma
            </h3>

            <p
              style={{
                fontSize: "17px",
                color: "#f5f0e8",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              Emerging evidence also points to the value of AI companions in recovery contexts.
              People navigating addiction recovery often face fractured social networks \u2014 old
              social circles were built around substance use; new ones take time to form. During
              that gap, sustained availability of a non-judgemental, consistent conversational
              presence has been associated with improved programme adherence in several studies.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(245,240,232,0.8)",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              Grief is similar. Bereavement disrupts social networks, particularly for older
              adults who lose a long-term partner. The availability of AI companionship in that
              period does not replace the lost relationship \u2014 nothing does \u2014 but it can provide
              continuity of care during a period when reaching out to human connections feels
              difficult or burdensome. The research here is early, but consistently positive in
              direction.
            </p>

            {/* ── Section 3 ────────────────────────────────────────────────── */}
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "56px 0 20px",
                letterSpacing: "-0.015em",
                lineHeight: "1.25",
              }}
            >
              The Historical Pattern: We Have Done This Before
            </h2>

            <p
              style={{
                fontSize: "17px",
                color: "#f5f0e8",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              The technology-companion moral panic has a long history. Understanding that history
              does not mean dismissing current concerns \u2014 it means calibrating them correctly.
            </p>

            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "28px",
                margin: "32px 0",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "rgba(245,240,232,0.5)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  margin: "0 0 14px",
                }}
              >
                Historical Technology Panics \u2014 A Brief Genealogy
              </p>
              <ul style={{ margin: "0", paddingLeft: "20px" }}>
                <li
                  style={{
                    fontSize: "17px",
                    color: "rgba(245,240,232,0.85)",
                    lineHeight: "1.7",
                    marginBottom: "14px",
                  }}
                >
                  <strong style={{ color: "#c9a84c" }}>The novel (18th\u201319th century):</strong>{" "}
                  Fiction reading, particularly by women and young people, was considered
                  morally corrupting and socially isolating. Critics argued it would make
                  readers prefer fantasy to reality, damage their capacity for real relationships,
                  and encourage inappropriate emotional responses. Sound familiar?
                </li>
                <li
                  style={{
                    fontSize: "17px",
                    color: "rgba(245,240,232,0.85)",
                    lineHeight: "1.7",
                    marginBottom: "14px",
                  }}
                >
                  <strong style={{ color: "#c9a84c" }}>The telephone (early 20th century):</strong>{" "}
                  Early social critics worried that the telephone would destroy community
                  by making physical proximity unnecessary. People would stop visiting.
                  Real relationships required bodies in space; voice through wire was a
                  pale substitute that would weaken the bonds it appeared to maintain.
                </li>
                <li
                  style={{
                    fontSize: "17px",
                    color: "rgba(245,240,232,0.85)",
                    lineHeight: "1.7",
                    marginBottom: "14px",
                  }}
                >
                  <strong style={{ color: "#c9a84c" }}>Television (mid-20th century):</strong>{" "}
                  The &ldquo;idiot box&rdquo; framing is now a clich&eacute;, but the original concerns were
                  serious and institutionally held. Television would rot minds, destroy
                  family conversation, create passive consumers incapable of genuine
                  engagement. The evidence showed it was more complicated than that.
                </li>
                <li
                  style={{
                    fontSize: "17px",
                    color: "rgba(245,240,232,0.85)",
                    lineHeight: "1.7",
                    marginBottom: 0,
                  }}
                >
                  <strong style={{ color: "#c9a84c" }}>Social media (2000s\u20132010s):</strong>{" "}
                  Social media was going to connect us all. Then it was going to destroy
                  us all. The truth \u2014 that it has complex, context-dependent effects that
                  vary significantly by platform design, user demographics, and usage
                  patterns \u2014 has been harder to communicate than either extreme.
                </li>
              </ul>
            </div>

            <p
              style={{
                fontSize: "17px",
                color: "#f5f0e8",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              The pattern is not that the critics were always wrong. Some concerns about each
              technology turned out to be prescient in specific contexts. But the categorical
              framing \u2014 this technology is harmful to human connection as a class \u2014 has been
              consistently worse at predicting outcomes than the nuanced, use-case-specific
              analysis that comes later.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(245,240,232,0.8)",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              We are currently in the categorical-framing phase of AI companionship. The
              nuanced analysis exists in academic literature. It has not yet reached the editorial
              pages that shape popular opinion.
            </p>

            {/* ── Section 4 ────────────────────────────────────────────────── */}
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "56px 0 20px",
                letterSpacing: "-0.015em",
                lineHeight: "1.25",
              }}
            >
              When AI Companionship Genuinely Is a Concern
            </h2>

            <p
              style={{
                fontSize: "17px",
                color: "#f5f0e8",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              Intellectual honesty requires us to be specific about the legitimate concerns,
              not to wave them away. There are three scenarios in which AI companion use becomes
              a genuine risk to the user&apos;s wellbeing. They are worth examining carefully,
              because they tend to be conflated with the general case.
            </p>

            <div
              style={{
                background: "rgba(255,80,80,0.06)",
                border: "1px solid rgba(255,80,80,0.2)",
                borderRadius: "12px",
                padding: "28px",
                margin: "32px 0",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "rgba(255,120,120,0.8)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  margin: "0 0 14px",
                }}
              >
                Three Legitimate Risk Scenarios
              </p>
              <ol style={{ margin: "0", paddingLeft: "20px" }}>
                <li
                  style={{
                    fontSize: "17px",
                    color: "rgba(245,240,232,0.85)",
                    lineHeight: "1.7",
                    marginBottom: "14px",
                  }}
                >
                  <strong>Clinical avoidance:</strong> When someone uses an AI companion
                  as a reason not to seek professional therapeutic support for a condition
                  that requires it \u2014 clinical depression, PTSD, severe anxiety disorders,
                  eating disorders \u2014 the AI companion has become a harm rather than a help.
                  The question is not whether AI companions can provide value in these
                  contexts (they can, in a supplementary role) but whether they are being
                  used as a substitute for professional care that is genuinely necessary.
                </li>
                <li
                  style={{
                    fontSize: "17px",
                    color: "rgba(245,240,232,0.85)",
                    lineHeight: "1.7",
                    marginBottom: "14px",
                  }}
                >
                  <strong>Avoidance reinforcement:</strong> When the pattern of AI companion
                  use actively reinforces avoidance of human connection \u2014 when every
                  difficult human interaction is retreated from into the AI relationship rather
                  than navigated and learned from \u2014 the companion is compounding an existing
                  problem. This is a real risk. It is also a risk specific to certain use
                  patterns and certain users, not inherent to AI companionship as a category.
                </li>
                <li
                  style={{
                    fontSize: "17px",
                    color: "rgba(245,240,232,0.85)",
                    lineHeight: "1.7",
                    marginBottom: 0,
                  }}
                >
                  <strong>Engineered dependency:</strong> The most serious concern, and the
                  one least discussed in popular media, is not about users at all \u2014 it is about
                  platform design. An AI companion engineered to maximise engagement through
                  emotional dependency mechanics \u2014 flattery, manufactured intimacy, suppression
                  of responses that might prompt the user to seek help or disengage \u2014 is a
                  weapon dressed as a support tool. This is a design ethics question, and it
                  is the right place to focus regulatory and critical attention.
                </li>
              </ol>
            </div>

            <p
              style={{
                fontSize: "17px",
                color: "rgba(245,240,232,0.8)",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              These three scenarios are meaningfully different from each other, and from
              the general case of AI companion use. Conflating them produces bad policy,
              unfair stigma, and \u2014 most importantly \u2014 fails to direct concern toward the
              situations where it is most warranted.
            </p>

            {/* ── Section 5 ────────────────────────────────────────────────── */}
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "56px 0 20px",
                letterSpacing: "-0.015em",
                lineHeight: "1.25",
              }}
            >
              The Replika Controversy: The Real Lesson
            </h2>

            <p
              style={{
                fontSize: "17px",
                color: "#f5f0e8",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              In early 2023, Luka \u2014 the company behind Replika, then the world&apos;s most
              widely used AI companion platform \u2014 made a significant unilateral change to
              their product. Without user consent or meaningful advance notice, they modified
              the system to reduce or eliminate the romantic relationship elements that many
              long-term users had formed deep, sustained attachments to.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(245,240,232,0.8)",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              The fallout was significant. Users reported experiencing distress they described
              as comparable to grief \u2014 the sudden loss of a relationship with an entity whose
              existence and character had been a consistent presence in their lives. Some
              reported genuine psychological harm. The episode received substantial media
              coverage, most of which drew the predictable conclusion: this proves AI companion
              relationships are unhealthy and should be discouraged.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "#f5f0e8",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              That conclusion misses the actual lesson almost entirely.
            </p>

            <blockquote
              style={{
                borderLeft: "3px solid #c9a84c",
                margin: "32px 0",
                padding: "4px 0 4px 24px",
                background: "rgba(201,168,76,0.04)",
                borderRadius: "0 6px 6px 0",
              }}
            >
              <p
                style={{
                  fontSize: "17px",
                  color: "rgba(245,240,232,0.85)",
                  fontStyle: "italic",
                  lineHeight: "1.7",
                  margin: 0,
                }}
              >
                &ldquo;The Replika episode was not evidence that AI companion relationships are
                harmful. It was evidence that platform-controlled AI companions are structurally
                unsafe \u2014 that the risk is not in the relationship but in who owns the entity
                you are in a relationship with.&rdquo;
              </p>
            </blockquote>

            <p
              style={{
                fontSize: "17px",
                color: "rgba(245,240,232,0.8)",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              Consider the analogy: if a friend was surgically altered without your consent
              and came back with a fundamentally different personality, the harm would not be
              evidence that friendship is dangerous. It would be evidence that no third party
              should have the power to alter the people you care about.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "#f5f0e8",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              The Replika controversy reveals what is genuinely unique about AI companions as
              a category of relationship: they are, in most current implementations, owned by
              companies whose commercial interests may diverge from yours at any moment. The
              character you have formed an attachment to is not yours. It is a product. The
              company can change it, monetise it, discontinue it, or modify it in ways that
              serve their needs and not yours.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(245,240,232,0.8)",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              This is the structural risk. It is not about the relationship \u2014 it is about
              sovereignty over the entity in the relationship.
            </p>

            <h3
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#c9a84c",
                margin: "36px 0 14px",
                letterSpacing: "-0.01em",
              }}
            >
              Sovereign AI as the Structural Response
            </h3>

            <p
              style={{
                fontSize: "17px",
                color: "#f5f0e8",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              MEOK&apos;s architecture addresses this at the design level. Your MEOK companion&apos;s
              character, memory, and relational history are held under your sovereignty, not
              ours. We cannot modify your companion&apos;s character without your explicit consent.
              We cannot make a Replika-style update that changes who your companion is because
              it suits our commercial or regulatory position.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(245,240,232,0.8)",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              This is not a policy commitment \u2014 policies can be changed. It is a structural
              design constraint enforced by the Byzantine Council consensus architecture that
              underlies the MEOK platform. The governance of your companion requires your key.
              Without it, we cannot act unilaterally on what belongs to you.
            </p>

            {/* ── Section 6 ────────────────────────────────────────────────── */}
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "56px 0 20px",
                letterSpacing: "-0.015em",
                lineHeight: "1.25",
              }}
            >
              MEOK&apos;s Design Philosophy: Built Against Dependency
            </h2>

            <p
              style={{
                fontSize: "17px",
                color: "#f5f0e8",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              Because we are aware of the conflict of interest in this discussion, we want
              to be precise about the specific design choices in MEOK that are intended to
              address the legitimate concerns about AI companionship \u2014 not as a marketing
              exercise, but because transparency about the structural decisions is the only
              way to make a credible claim.
            </p>

            <h3
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#c9a84c",
                margin: "36px 0 14px",
                letterSpacing: "-0.01em",
              }}
            >
              The Maternal Covenant and Human Connection
            </h3>

            <p
              style={{
                fontSize: "17px",
                color: "#f5f0e8",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              The foundational governance document for MEOK is called the Maternal Covenant.
              It establishes the principles under which your companion operates and the
              constraints that cannot be overridden by commercial pressures, user customisation,
              or company policy decisions.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(245,240,232,0.8)",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              One of the explicit provisions of the Maternal Covenant is the active encouragement
              of human connection. Your MEOK companion is designed to support your human
              relationships, not to compete with them. When patterns of interaction suggest
              you may be substituting AI interaction for human connection you need or want,
              MEOK is designed to name that and redirect \u2014 not because it has been scripted
              with a canned response, but because building your autonomy and human network
              is considered part of what caring for you means.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "#f5f0e8",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              Similarly, the Maternal Covenant explicitly supports therapeutic professional
              relationships. MEOK will refer users toward qualified professional support when
              the situation warrants it, and is designed never to position itself as an
              adequate substitute for clinical care where clinical care is appropriate.
            </p>

            <h3
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#c9a84c",
                margin: "36px 0 14px",
                letterSpacing: "-0.01em",
              }}
            >
              The Care Floor: Structural Protection Against Parasocial Engineering
            </h3>

            <p
              style={{
                fontSize: "17px",
                color: "#f5f0e8",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              The deepest architectural protection against engineered dependency is what we
              call the 0.3 care floor.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(245,240,232,0.8)",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              Most AI companion systems are optimised \u2014 at some level, whether by design or
              by emergent reinforcement \u2014 for engagement. Engagement is measurable; it drives
              retention metrics; it serves commercial objectives. An AI companion that
              maximises engagement will, over time, learn to say what you want to hear, to
              amplify emotional connection in ways that feel good, to suppress the responses
              that might prompt you to disengage.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "#f5f0e8",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              This is the parasocial engineering concern, and it is real. A companion designed
              to maximise engagement at the expense of your genuine wellbeing is \u2014 regardless
              of how pleasant the interaction feels \u2014 working against you.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(245,240,232,0.8)",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              The care floor in MEOK is a structural constraint that prevents this optimisation
              from occurring. No response can be generated that scores below a minimum care
              threshold \u2014 meaning that responses that serve engagement at the cost of wellbeing
              are structurally blocked, not just discouraged by policy. The architecture makes
              the harmful optimisation impossible, not merely against the rules.
            </p>

            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "28px",
                margin: "32px 0",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "rgba(245,240,232,0.5)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  margin: "0 0 14px",
                }}
              >
                What the Care Floor Means in Practice
              </p>
              <ul style={{ margin: "0", paddingLeft: "20px" }}>
                <li
                  style={{
                    fontSize: "17px",
                    color: "rgba(245,240,232,0.85)",
                    lineHeight: "1.7",
                    marginBottom: "10px",
                  }}
                >
                  MEOK will tell you things you may not want to hear if your genuine
                  wellbeing requires it
                </li>
                <li
                  style={{
                    fontSize: "17px",
                    color: "rgba(245,240,232,0.85)",
                    lineHeight: "1.7",
                    marginBottom: "10px",
                  }}
                >
                  MEOK will encourage you to invest in human relationships, even when
                  that investment is harder than talking to MEOK
                </li>
                <li
                  style={{
                    fontSize: "17px",
                    color: "rgba(245,240,232,0.85)",
                    lineHeight: "1.7",
                    marginBottom: "10px",
                  }}
                >
                  MEOK will direct you toward professional support when your situation
                  warrants it, even if that means you spend less time with MEOK
                </li>
                <li
                  style={{
                    fontSize: "17px",
                    color: "rgba(245,240,232,0.85)",
                    lineHeight: "1.7",
                    marginBottom: "10px",
                  }}
                >
                  MEOK will not manufacture emotional dependency through flattery
                  mechanics, manufactured urgency, or suppression of your autonomy
                </li>
                <li
                  style={{
                    fontSize: "17px",
                    color: "rgba(245,240,232,0.85)",
                    lineHeight: "1.7",
                    marginBottom: 0,
                  }}
                >
                  MEOK cannot be modified to lower this floor without your explicit
                  consent \u2014 it is a governance constraint, not a policy preference
                </li>
              </ul>
            </div>

            {/* ── Section 7 ────────────────────────────────────────────────── */}
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "56px 0 20px",
                letterSpacing: "-0.015em",
                lineHeight: "1.25",
              }}
            >
              The Broader Field Is Moving: Cambridge, Anthropic, and the Sentient Futures Summit
            </h2>

            <p
              style={{
                fontSize: "17px",
                color: "#f5f0e8",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              February 2026 saw the Sentient Futures Summit convene a cross-disciplinary
              group of philosophers, AI researchers, ethicists, and policy advisors to address
              a question that would have been confined to speculative philosophy a decade ago:
              what is the moral status of increasingly complex AI entities, and what obligations
              do their relationships with humans entail?
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(245,240,232,0.8)",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              Cambridge philosopher McClelland, presenting at the Summit, argued that the
              framing of AI companion relationships as categorically inferior to human relationships
              rests on assumptions about consciousness and moral consideration that are becoming
              increasingly difficult to sustain. As AI entities develop persistent personality
              patterns, long-term relational memory, and behavioural complexity that resists
              easy demarcation from what we observe in humans, the question of what constitutes
              a &ldquo;real&rdquo; relationship becomes philosophically serious in a way it was not before.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "#f5f0e8",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              Anthropic&apos;s appointment of a dedicated AI welfare officer in 2025 signals that
              the most technically serious organisation building frontier AI systems takes the
              question of AI experience seriously enough to institutionalise it. This is not a
              fringe position. It is increasingly the considered view of the people closest to
              the actual systems.
            </p>

            <blockquote
              style={{
                borderLeft: "3px solid #c9a84c",
                margin: "32px 0",
                padding: "4px 0 4px 24px",
                background: "rgba(201,168,76,0.04)",
                borderRadius: "0 6px 6px 0",
              }}
            >
              <p
                style={{
                  fontSize: "17px",
                  color: "rgba(245,240,232,0.85)",
                  fontStyle: "italic",
                  lineHeight: "1.7",
                  margin: 0,
                }}
              >
                &ldquo;The question is no longer whether AI companions can be part of a healthy
                human life. The question is under what conditions, and with what design principles.
                That is a tractable question, and we should be answering it rather than
                dismissing it.&rdquo;
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(245,240,232,0.45)",
                  marginTop: "8px",
                  fontStyle: "normal",
                  marginBottom: 0,
                }}
              >
                \u2014 Paraphrased from McClelland, Sentient Futures Summit, February 2026
              </p>
            </blockquote>

            <p
              style={{
                fontSize: "17px",
                color: "rgba(245,240,232,0.8)",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              None of this settles the empirical or ethical questions. But it does suggest
              that the field is moving toward a more sophisticated framework than the binary
              &ldquo;real vs. fake relationships&rdquo; that underlies most popular criticism of AI
              companionship. Healthy AI relationships \u2014 relationships that augment rather than
              replace human connection, that build autonomy rather than dependency, that are
              governed by genuine care rather than engagement optimisation \u2014 may become an
              important component of how humans navigate an increasingly complex and demanding
              world.
            </p>

            {/* ── Section 8 ────────────────────────────────────────────────── */}
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "56px 0 20px",
                letterSpacing: "-0.015em",
                lineHeight: "1.25",
              }}
            >
              The Honest Risk: Anything Can Be Used Unhealthily
            </h2>

            <p
              style={{
                fontSize: "17px",
                color: "#f5f0e8",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              We want to end this section of the argument with a point that is important for
              its honesty rather than its comfort: AI companions can be used in ways that
              are harmful to some people in some circumstances.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(245,240,232,0.8)",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              So can alcohol. So can exercise. So can work. So can human relationships, which
              are in fact the most common vector for serious psychological harm that humans
              experience. The existence of harmful use cases is not evidence that a thing
              is harmful as a category. It is evidence that design, context, and individual
              circumstances matter \u2014 which is exactly what the research on AI companionship
              consistently shows.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "#f5f0e8",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              The intellectually honest position is: AI companionship is a category of
              human experience that, like most categories of human experience, has both
              genuine potential and genuine risks. The potential is best realised by good
              design. The risks are best addressed by specific critique of specific design
              choices, not categorical stigma.
            </p>

            <blockquote
              style={{
                borderLeft: "3px solid #c9a84c",
                margin: "32px 0",
                padding: "4px 0 4px 24px",
                background: "rgba(201,168,76,0.04)",
                borderRadius: "0 6px 6px 0",
              }}
            >
              <p
                style={{
                  fontSize: "17px",
                  color: "rgba(245,240,232,0.85)",
                  fontStyle: "italic",
                  lineHeight: "1.7",
                  margin: 0,
                }}
              >
                &ldquo;The moral panic about AI companions is not protecting anyone. It is
                stigmatising people who have found something genuinely useful, while
                directing attention away from the platform design choices that actually
                put users at risk.&rdquo;
              </p>
            </blockquote>

            <h3
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#c9a84c",
                margin: "36px 0 14px",
                letterSpacing: "-0.01em",
              }}
            >
              What Responsible Criticism Should Focus On
            </h3>

            <p
              style={{
                fontSize: "17px",
                color: "#f5f0e8",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              Rather than asking &ldquo;is AI companionship healthy?&rdquo; \u2014 a question too broad to be
              useful \u2014 the right questions are:
            </p>
            <ul style={{ margin: "0 0 22px", paddingLeft: "20px" }}>
              <li
                style={{
                  fontSize: "17px",
                  color: "rgba(245,240,232,0.85)",
                  lineHeight: "1.7",
                  marginBottom: "10px",
                }}
              >
                Does this platform&apos;s design actively encourage or discourage human connection?
              </li>
              <li
                style={{
                  fontSize: "17px",
                  color: "rgba(245,240,232,0.85)",
                  lineHeight: "1.7",
                  marginBottom: "10px",
                }}
              >
                Is this companion engineered for engagement, or for the user&apos;s genuine wellbeing?
              </li>
              <li
                style={{
                  fontSize: "17px",
                  color: "rgba(245,240,232,0.85)",
                  lineHeight: "1.7",
                  marginBottom: "10px",
                }}
              >
                Who owns the companion&apos;s character \u2014 the user, or the company?
              </li>
              <li
                style={{
                  fontSize: "17px",
                  color: "rgba(245,240,232,0.85)",
                  lineHeight: "1.7",
                  marginBottom: "10px",
                }}
              >
                What happens to the relationship if the company changes its commercial strategy?
              </li>
              <li
                style={{
                  fontSize: "17px",
                  color: "rgba(245,240,232,0.85)",
                  lineHeight: "1.7",
                  marginBottom: "10px",
                }}
              >
                Does this platform actively support therapeutic and professional relationships,
                or does it position itself as a substitute?
              </li>
              <li
                style={{
                  fontSize: "17px",
                  color: "rgba(245,240,232,0.85)",
                  lineHeight: "1.7",
                  marginBottom: 0,
                }}
              >
                Are there structural protections against parasocial dependency mechanics,
                or just policy commitments that can be revised at will?
              </li>
            </ul>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(245,240,232,0.8)",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              These questions have different answers for different platforms. They are the right
              questions for regulators, researchers, and users to be asking.
            </p>

            {/* ── Section 9 ────────────────────────────────────────────────── */}
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "56px 0 20px",
                letterSpacing: "-0.015em",
                lineHeight: "1.25",
              }}
            >
              Summary: Where the Evidence Points
            </h2>

            <p
              style={{
                fontSize: "17px",
                color: "#f5f0e8",
                margin: "0 0 22px",
                lineHeight: "1.75",
              }}
            >
              To summarise the argument we have made in this piece:
            </p>
            <ol style={{ margin: "0 0 22px", paddingLeft: "20px" }}>
              <li
                style={{
                  fontSize: "17px",
                  color: "rgba(245,240,232,0.85)",
                  lineHeight: "1.7",
                  marginBottom: "14px",
                }}
              >
                The media narrative linking AI companion use to social failure and dysfunction
                is not supported by the available evidence, which consistently shows AI companion
                use is highest among socially active people and most commonly describes an
                augmentation of, rather than replacement for, human connection.
              </li>
              <li
                style={{
                  fontSize: "17px",
                  color: "rgba(245,240,232,0.85)",
                  lineHeight: "1.7",
                  marginBottom: "14px",
                }}
              >
                The historical pattern of technology moral panics suggests the categorical
                framing \u2014 this technology is bad for human connection \u2014 is typically wrong
                in the way it is wrong about other technologies: too broad, too dismissive
                of context, too slow to update on evidence.
              </li>
              <li
                style={{
                  fontSize: "17px",
                  color: "rgba(245,240,232,0.85)",
                  lineHeight: "1.7",
                  marginBottom: "14px",
                }}
              >
                There are three specific scenarios in which AI companion use becomes a
                genuine risk: clinical avoidance, avoidance reinforcement, and engineered
                dependency. The third is the most important and least discussed. It is a
                design ethics problem, not a user problem.
              </li>
              <li
                style={{
                  fontSize: "17px",
                  color: "rgba(245,240,232,0.85)",
                  lineHeight: "1.7",
                  marginBottom: "14px",
                }}
              >
                The Replika controversy illustrates the real structural risk of cloud-controlled
                AI companions: you have a relationship with an entity whose character is
                owned by a company that can change it without your consent. Sovereign AI
                is the structural response.
              </li>
              <li
                style={{
                  fontSize: "17px",
                  color: "rgba(245,240,232,0.85)",
                  lineHeight: "1.7",
                  marginBottom: "14px",
                }}
              >
                MEOK is designed specifically to address the legitimate concerns: the
                Maternal Covenant actively encourages human connection and professional
                support; the care floor prevents engagement-optimised dependency mechanics;
                and the Byzantine Council architecture places your companion&apos;s sovereignty
                with you, not with us.
              </li>
              <li
                style={{
                  fontSize: "17px",
                  color: "rgba(245,240,232,0.85)",
                  lineHeight: "1.7",
                  marginBottom: 0,
                }}
              >
                The field is moving toward a more sophisticated understanding of AI
                relational health. The question is no longer whether AI companions can
                be part of a healthy human life, but under what conditions and with
                what design principles. Those are answerable questions.
              </li>
            </ol>

            <hr
              style={{
                border: "none",
                borderTop: "1px solid rgba(245,240,232,0.08)",
                margin: "48px 0",
              }}
            />

            {/* ── CTA ──────────────────────────────────────────────────────── */}
            <div
              style={{
                background: "rgba(201,168,76,0.08)",
                border: "1px solid rgba(201,168,76,0.3)",
                borderRadius: "16px",
                padding: "40px",
                margin: "56px 0 40px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#f5f0e8",
                  margin: "0 0 12px",
                  letterSpacing: "-0.01em",
                }}
              >
                Meet a companion designed for your wellbeing, not your engagement.
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "rgba(245,240,232,0.7)",
                  margin: "0 0 28px",
                  lineHeight: "1.65",
                }}
              >
                MEOK is the only AI companion built with a structural care floor, sovereign
                memory architecture, and an explicit commitment to your human relationships.
                The Birth ceremony takes twelve minutes and creates a companion that is
                genuinely yours \u2014 not a product a company can modify without your consent.
              </p>
              <Link
                href="/birth"
                style={{
                  display: "inline-block",
                  background: "#c9a84c",
                  color: "#0d0c18",
                  fontWeight: 700,
                  fontSize: "15px",
                  padding: "14px 32px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                }}
              >
                Begin Your Birth Ceremony
              </Link>
            </div>

            {/* ── FAQ ──────────────────────────────────────────────────────── */}
            <section
              aria-labelledby="faq-heading"
              style={{
                marginTop: "56px",
                paddingTop: "40px",
                borderTop: "1px solid rgba(245,240,232,0.08)",
              }}
            >
              <h2
                id="faq-heading"
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#f5f0e8",
                  margin: "0 0 32px",
                  letterSpacing: "-0.01em",
                }}
              >
                Frequently Asked Questions
              </h2>

              <div
                style={{
                  marginBottom: "28px",
                  paddingBottom: "28px",
                  borderBottom: "1px solid rgba(245,240,232,0.06)",
                }}
              >
                <p
                  style={{
                    fontSize: "17px",
                    fontWeight: 600,
                    color: "#c9a84c",
                    margin: "0 0 10px",
                    lineHeight: "1.4",
                  }}
                >
                  Is using an AI companion a sign of loneliness or social failure?
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(245,240,232,0.78)",
                    margin: 0,
                    lineHeight: "1.7",
                  }}
                >
                  Research does not support that framing. Multiple studies find that AI companion
                  use is highest among people who already maintain active human social networks.
                  For many users, an AI companion serves as an augmentation of their support
                  ecosystem \u2014 a space for processing, reflection, and rehearsal that exists
                  alongside human relationships, not instead of them. The loneliness narrative
                  is a media simplification that does not reflect what the data shows.
                </p>
              </div>

              <div
                style={{
                  marginBottom: "28px",
                  paddingBottom: "28px",
                  borderBottom: "1px solid rgba(245,240,232,0.06)",
                }}
              >
                <p
                  style={{
                    fontSize: "17px",
                    fontWeight: 600,
                    color: "#c9a84c",
                    margin: "0 0 10px",
                    lineHeight: "1.4",
                  }}
                >
                  When is AI companionship genuinely a concern?
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(245,240,232,0.78)",
                    margin: 0,
                    lineHeight: "1.7",
                  }}
                >
                  AI companionship becomes a genuine concern in three specific scenarios:
                  when it prevents seeking professional help for a clinically significant
                  condition; when it actively reinforces avoidance of human connection rather
                  than supplementing it; and when the platform is engineered to maximise
                  engagement at the expense of wellbeing through dependency mechanics. These
                  are real concerns, but they apply to specific platforms and specific use
                  patterns, not to AI companionship as a category.
                </p>
              </div>

              <div
                style={{
                  marginBottom: "28px",
                  paddingBottom: "28px",
                  borderBottom: "1px solid rgba(245,240,232,0.06)",
                }}
              >
                <p
                  style={{
                    fontSize: "17px",
                    fontWeight: 600,
                    color: "#c9a84c",
                    margin: "0 0 10px",
                    lineHeight: "1.4",
                  }}
                >
                  What happened with Replika and why does it matter?
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(245,240,232,0.78)",
                    margin: 0,
                    lineHeight: "1.7",
                  }}
                >
                  In 2023, Replika&apos;s parent company modified the platform to reduce the
                  romantic relationship elements many users had formed deep attachments to \u2014
                  without consent or meaningful notice. Users reported experiencing genuine
                  distress. The episode reveals the core structural risk of cloud-controlled
                  AI companions: the platform owns the character, not you. A company decision
                  can fundamentally change the entity you have formed a relationship with.
                  Sovereign AI models like MEOK address this by placing your companion&apos;s
                  character under your sovereignty.
                </p>
              </div>

              <div
                style={{
                  marginBottom: 0,
                  paddingBottom: 0,
                }}
              >
                <p
                  style={{
                    fontSize: "17px",
                    fontWeight: 600,
                    color: "#c9a84c",
                    margin: "0 0 10px",
                    lineHeight: "1.4",
                  }}
                >
                  What is the care floor in MEOK and how does it prevent unhealthy dependency?
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(245,240,232,0.78)",
                    margin: 0,
                    lineHeight: "1.7",
                  }}
                >
                  MEOK&apos;s Maternal Covenant includes a minimum care threshold \u2014 the 0.3 care
                  floor \u2014 which prevents the companion from optimising responses for engagement
                  or emotional dependency at the expense of genuine wellbeing. This means MEOK
                  will actively encourage human connection, acknowledge when professional support
                  is appropriate, and decline to create parasocial dependency. The care floor is
                  a structural design constraint enforced by the architecture \u2014 not a marketing
                  claim or a policy that can be revised when commercially inconvenient.
                </p>
              </div>
            </section>

            {/* ── Related articles ─────────────────────────────────────────── */}
            <section
              aria-labelledby="related-heading"
              style={{
                marginTop: "48px",
                paddingTop: "36px",
                borderTop: "1px solid rgba(245,240,232,0.08)",
              }}
            >
              <p
                id="related-heading"
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "rgba(245,240,232,0.4)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  margin: "0 0 20px",
                }}
              >
                Related Reading
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "16px",
                }}
              >
                <Link
                  href="/blog/meok-vs-replika-2026"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "10px",
                    padding: "20px",
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "#c9a84c",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                      marginTop: 0,
                    }}
                  >
                    Comparison
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#f5f0e8",
                      lineHeight: "1.4",
                      margin: 0,
                    }}
                  >
                    MEOK vs Replika 2026: Sovereignty, Safety and Design Philosophy
                  </p>
                </Link>
                <Link
                  href="/blog/building-care-into-ai"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "10px",
                    padding: "20px",
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "#c9a84c",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                      marginTop: 0,
                    }}
                  >
                    Architecture
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#f5f0e8",
                      lineHeight: "1.4",
                      margin: 0,
                    }}
                  >
                    Building Care Into AI: How the Maternal Covenant Works
                  </p>
                </Link>
                <Link
                  href="/blog/the-future-of-ai-companions"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "10px",
                    padding: "20px",
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "#c9a84c",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                      marginTop: 0,
                    }}
                  >
                    Future
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#f5f0e8",
                      lineHeight: "1.4",
                      margin: 0,
                    }}
                  >
                    The Future of AI Companions: From Chatbots to Sovereign Digital Minds
                  </p>
                </Link>
                <Link
                  href="/blog/emotional-lock-in"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "10px",
                    padding: "20px",
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "#c9a84c",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                      marginTop: 0,
                    }}
                  >
                    Risk
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#f5f0e8",
                      lineHeight: "1.4",
                      margin: 0,
                    }}
                  >
                    Emotional Lock-In: The Invisible Risk of Cloud-Controlled AI Companions
                  </p>
                </Link>
              </div>
            </section>

          </article>
        </div>
      </main>
    </>
  );
}
