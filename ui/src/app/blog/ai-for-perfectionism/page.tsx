import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Perfectionism: Breaking the Loop of Never Good Enough | MEOK AI LABS",
  description:
    "Perfectionism is not a personality trait \u2014 it is a coping mechanism with roots in fear. MEOK\u2019s sovereign AI helps you identify and break perfectionist loops without enabling the underlying anxiety.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-perfectionism",
  },
  openGraph: {
    title: "AI for Perfectionism: Breaking the Loop of Never Good Enough",
    description:
      "Perfectionism is not a personality trait \u2014 it is a coping mechanism with roots in fear. MEOK\u2019s sovereign AI helps you identify and break perfectionist loops without enabling the underlying anxiety.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-perfectionism",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Perfectionism&desc=Breaking+the+Loop+of+Never+Good+Enough",
        width: 1200,
        height: 630,
        alt: "AI for Perfectionism | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Perfectionism: Breaking the Loop of Never Good Enough",
    description:
      "An AI that won\u2019t feed your perfectionist spiral. MEOK\u2019s Trickster archetype, sycophancy detection, and sovereign memory work together to break the loop of never good enough.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Perfectionism&desc=Breaking+the+Loop+of+Never+Good+Enough",
    ],
  },
};

// ── JSON-LD: Article ─────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Perfectionism: Breaking the Loop of Never Good Enough",
  description:
    "Perfectionism is not a personality trait \u2014 it is a coping mechanism with roots in fear. This article covers adaptive vs maladaptive perfectionism, the procrastination link, burnout, imposter syndrome, and how MEOK\u2019s sovereign AI breaks perfectionist loops without enabling anxiety.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-perfectionism",
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
    "@id": "https://meok.ai/blog/ai-for-perfectionism",
  },
  keywords: [
    "AI for perfectionism",
    "perfectionism and procrastination",
    "maladaptive perfectionism",
    "perfectionism and burnout",
    "imposter syndrome AI",
    "sycophancy detection AI",
    "sovereign AI memory",
    "Trickster archetype",
    "MEOK AI companion",
    "good enough",
    "perfectionism in creative work",
    "perfectionism coping mechanism",
  ],
};

// ── JSON-LD: FAQPage ─────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help someone break a perfectionist loop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes \u2014 but only if the AI is built correctly. An AI that validates every revision and praises every draft will reinforce the perfectionist loop rather than break it. MEOK\u2019s sycophancy detection layer is specifically designed to prevent this. Rather than feeding the anxiety with empty affirmation, it reflects honest observations about your process, holds the memory of your actual progress, and helps you recognise when the loop has restarted.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between adaptive and maladaptive perfectionism?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Adaptive perfectionism is about pursuing excellence with flexibility \u2014 high standards that bend when circumstances change, that allow iteration, and that do not collapse into self-criticism when the outcome falls short. Maladaptive perfectionism ties self-worth to flawless performance. Any imperfection becomes evidence of fundamental inadequacy. Research by Hewitt, Flett, and Curran consistently links maladaptive perfectionism to anxiety, depression, burnout, and chronic procrastination.",
      },
    },
    {
      "@type": "Question",
      name: "Why do perfectionists procrastinate so much?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because starting carries the risk of discovering that the output will not be perfect. Perfectionists often operate under an unconscious rule: if I cannot do it perfectly, it is better not to start at all. Not starting feels like preserving potential. In reality it is avoidance dressed as standards. The task stays in a hypothetical space where it can still be perfect, rather than being exposed to the real world where it almost certainly will not be.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK\u2019s Trickster archetype help with perfectionism?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Trickster is MEOK\u2019s pattern-disruption archetype. Where other AI companions might gently encourage or validate, the Trickster introduces productive friction \u2014 asking unexpected questions, reframing the stakes, or pointing out when you have been revising the same paragraph for three sessions in a row. Perfectionism thrives in a closed, serious loop. The Trickster opens a door by making the loop visible and slightly absurd.",
      },
    },
    {
      "@type": "Question",
      name: "How does sovereign memory help with perfectionism over time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Perfectionism distorts memory. You forget the things you shipped, the drafts you finished, the projects you completed imperfectly but completely. MEOK\u2019s sovereign memory retains your actual history \u2014 not a highlight reel, but a record of what you actually did. Over time, this creates an evidence base that counters the perfectionist narrative of \u2018I never finish anything\u2019 or \u2018everything I produce is inadequate\u2019. The memory becomes a corrective to the distorted inner critic.",
      },
    },
  ],
};

// ── Style constants ──────────────────────────────────────────────────────────

const GOLD = "#c9a84c";
const TEXT = "#f5f0e8";
const BG = "#0d0c18";
const MUTED = "rgba(245,240,232,0.65)";
const MUTED_DIM = "rgba(245,240,232,0.55)";
const MUTED_FAINT = "rgba(245,240,232,0.38)";
const GOLD_DIM = "rgba(201,168,76,0.12)";
const GOLD_BORDER = "rgba(201,168,76,0.28)";
const SURFACE = "rgba(245,240,232,0.04)";
const SURFACE_BORDER = "rgba(245,240,232,0.08)";
const RED_DIM = "rgba(220,80,80,0.1)";
const RED_BORDER = "rgba(220,80,80,0.25)";
const RED_TEXT = "#e07070";
const GREEN_DIM = "rgba(80,200,120,0.1)";
const GREEN_BORDER = "rgba(80,200,120,0.25)";
const GREEN_TEXT = "#60c878";

// ── Page ─────────────────────────────────────────────────────────────────────

export default function AIForPerfectionismPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "8rem",
          paddingBottom: "4rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 70%)",
          }}
        />
        <div style={{ maxWidth: "52rem", margin: "0 auto", position: "relative" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: MUTED_FAINT,
              marginBottom: "2rem",
              textDecoration: "none",
            }}
          >
            &#8592; Back to Blog
          </Link>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                color: GOLD,
                background: GOLD_DIM,
                border: `1px solid ${GOLD_BORDER}`,
                letterSpacing: "0.06em",
                textTransform: "uppercase" as const,
              }}
            >
              Perfectionism &amp; Performance
            </span>
            <span style={{ fontSize: "0.75rem", color: MUTED_FAINT }}>March 24, 2026</span>
            <span style={{ fontSize: "0.75rem", color: MUTED_FAINT }}>18 min read</span>
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.9rem, 4vw, 3.1rem)",
              color: "#fff",
              lineHeight: 1.12,
              marginBottom: "1.5rem",
              letterSpacing: "-0.015em",
            }}
          >
            AI for Perfectionism: Breaking the Loop of Never Good Enough
          </h1>

          <p
            style={{
              color: MUTED,
              fontSize: "1.15rem",
              lineHeight: 1.75,
              maxWidth: "44rem",
              marginBottom: "0.75rem",
            }}
          >
            Perfectionism is not a personality trait and it is not high standards. It is a
            coping mechanism with roots in fear \u2014 the fear that your worth is conditional
            on flawless performance. Understanding that distinction is the beginning of
            breaking free from it.
          </p>

          <p
            style={{
              color: MUTED_DIM,
              fontSize: "1rem",
              lineHeight: 1.75,
              maxWidth: "44rem",
              marginBottom: 0,
            }}
          >
            This guide covers the psychology of perfectionist loops, the procrastination
            trap they create, the burnout they cause, and how MEOK\u2019s sovereign AI \u2014
            built with sycophancy detection, the Trickster archetype, and long-term memory \u2014
            is designed to break the loop rather than feed it.
          </p>

          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
              fontSize: "0.8rem",
              color: MUTED_FAINT,
              marginTop: "2rem",
            }}
          >
            <span>By Nicholas Templeman</span>
            <span style={{ color: `${GOLD}60` }}>&#183;</span>
            <span>MEOK AI LABS</span>
            <span style={{ color: `${GOLD}60` }}>&#183;</span>
            <span>March 24, 2026</span>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ─────────────────────────────────────────────────────── */}
      <div
        style={{ maxWidth: "52rem", margin: "0 auto", padding: "2rem 1.5rem 6rem" }}
      >
        {/* Gold divider */}
        <div
          style={{
            height: "1px",
            background: `linear-gradient(to right, transparent, ${GOLD}44, transparent)`,
            marginBottom: "3rem",
          }}
        />

        {/* ── Opening callout ─────────────────────────────────────────────────── */}
        <div
          style={{
            borderLeft: `4px solid ${GOLD}`,
            paddingLeft: "1.5rem",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            paddingRight: "1.5rem",
            background: GOLD_DIM,
            borderRadius: "0 0.75rem 0.75rem 0",
            marginBottom: "3rem",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              color: GOLD,
              marginBottom: "0.5rem",
            }}
          >
            The Core Reframe
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              lineHeight: 1.75,
              fontStyle: "italic",
              margin: 0,
            }}
          >
            Perfectionism does not protect you from failure. It protects you from
            starting \u2014 and in doing so, guarantees a quieter, slower kind of failure
            that never announces itself loudly enough to be addressed.
          </p>
        </div>

        {/* ── Section 1 ──────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "1.65rem",
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: "-0.015em",
            color: TEXT,
            marginBottom: "1rem",
            marginTop: "1rem",
          }}
        >
          What Is Perfectionism Actually Doing in Your Brain?
        </h2>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Perfectionism is not a character flaw or a badge of dedication. At its
          psychological root, it is a conditional self-worth model \u2014 a belief
          that you are only acceptable, only lovable, only safe when your output
          meets a standard that is perpetually out of reach. Researchers Philip
          Hewitt and Gordon Flett, who have spent decades mapping the terrain of
          perfectionism, describe three distinct dimensions: self-oriented
          perfectionism (demanding flawless performance from yourself),
          socially-prescribed perfectionism (believing others demand perfection
          from you), and other-oriented perfectionism (projecting that demand
          onto other people).
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The most damaging of these is socially prescribed perfectionism, which
          has risen sharply over the past thirty years according to a 2019 meta-analysis
          by Curran and Hill covering over 40,000 American, Canadian, and British
          university students. The rise correlates with the growth of social media,
          competitive comparison cultures, and economic precarity. The implication
          is uncomfortable: perfectionism is not primarily a personal failing. It
          is, in large part, a rational adaptation to an environment that genuinely
          punishes visible imperfection.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "2.5rem" }}>
          Understanding this matters for how you address it. You are not broken. You
          learned a strategy. The strategy made sense once. It is now costing more
          than it provides. That is the real problem \u2014 and it has a different
          solution than self-discipline or motivation.
        </p>

        {/* ── Section 2 ──────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "1.65rem",
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: "-0.015em",
            color: TEXT,
            marginBottom: "1rem",
            marginTop: "0.5rem",
          }}
        >
          What Is the Difference Between Adaptive and Maladaptive Perfectionism?
        </h2>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Not all perfectionism destroys. Adaptive perfectionism describes the
          orientation of someone who sets high standards, pursues them energetically,
          and \u2014 crucially \u2014 can accept outcomes that fall short without those
          outcomes defining their self-worth. When an adaptive perfectionist misses
          the mark, they experience disappointment, analyse what went wrong, and
          adjust. They do not collapse.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Maladaptive perfectionism is structurally different. The high standards are
          present but they function as a threat system rather than a motivational one.
          Every piece of work is evaluated through the lens of: does this prove I am
          adequate? When the work cannot pass that test \u2014 and it rarely can, because
          the bar is set conditionally rather than objectively \u2014 the result is not
          recalibration. It is shame. And shame does not produce better work. It
          produces avoidance, paralysis, or frantic over-revision that consumes more
          time and energy than the work itself.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.5rem" }}>
          The diagnostic question is not: do I have high standards? Almost everyone
          does. The question is: what happens inside you when those standards are not
          met? If the answer is recalibration, that is adaptive. If the answer is shame
          and self-attack, that is maladaptive \u2014 and that is where the real work lives.
        </p>

        {/* Comparison table */}
        <div
          style={{
            overflowX: "auto" as const,
            marginBottom: "3rem",
            borderRadius: "0.875rem",
            border: `1px solid ${SURFACE_BORDER}`,
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse" as const,
              fontSize: "0.95rem",
              lineHeight: 1.6,
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    textAlign: "left" as const,
                    padding: "1rem 1.25rem",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase" as const,
                    color: GOLD,
                    background: GOLD_DIM,
                    borderBottom: `1px solid ${GOLD_BORDER}`,
                    width: "34%",
                  }}
                >
                  Dimension
                </th>
                <th
                  style={{
                    textAlign: "left" as const,
                    padding: "1rem 1.25rem",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase" as const,
                    color: GREEN_TEXT,
                    background: GREEN_DIM,
                    borderBottom: `1px solid ${GREEN_BORDER}`,
                    width: "33%",
                  }}
                >
                  Adaptive
                </th>
                <th
                  style={{
                    textAlign: "left" as const,
                    padding: "1rem 1.25rem",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase" as const,
                    color: RED_TEXT,
                    background: RED_DIM,
                    borderBottom: `1px solid ${RED_BORDER}`,
                    width: "33%",
                  }}
                >
                  Maladaptive
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  dimension: "Standard-setting",
                  adaptive: "High but flexible; adjusts with context",
                  maladaptive: "Absolute and non-negotiable regardless of circumstance",
                },
                {
                  dimension: "Response to failure",
                  adaptive: "Disappointment, analysis, adjustment",
                  maladaptive: "Shame, self-attack, avoidance",
                },
                {
                  dimension: "Self-worth link",
                  adaptive: "Outcome does not define worth",
                  maladaptive: "Worth is entirely conditional on flawless output",
                },
                {
                  dimension: "Effect on starting",
                  adaptive: "Starts willingly; iterates from messy first drafts",
                  maladaptive: "Delays or avoids starting to preserve hypothetical perfection",
                },
                {
                  dimension: "Effect on finishing",
                  adaptive: "Ships when good enough; releases with satisfaction",
                  maladaptive: "Endless revision; rarely finishes or releases",
                },
                {
                  dimension: "Relationship to burnout",
                  adaptive: "Sustainable long-term; knows when to stop",
                  maladaptive: "High burnout risk; cannot disengage from unfinished work",
                },
                {
                  dimension: "Response to praise",
                  adaptive: "Receives it with proportionate pleasure",
                  maladaptive: "Dismisses it as unearned or waits for the other shoe to drop",
                },
              ].map((row, i) => (
                <tr
                  key={row.dimension}
                  style={{
                    background: i % 2 === 0 ? SURFACE : "transparent",
                  }}
                >
                  <td
                    style={{
                      padding: "0.85rem 1.25rem",
                      fontWeight: 600,
                      color: TEXT,
                      borderBottom: `1px solid ${SURFACE_BORDER}`,
                      verticalAlign: "top" as const,
                    }}
                  >
                    {row.dimension}
                  </td>
                  <td
                    style={{
                      padding: "0.85rem 1.25rem",
                      color: MUTED,
                      borderBottom: `1px solid ${SURFACE_BORDER}`,
                      verticalAlign: "top" as const,
                    }}
                  >
                    {row.adaptive}
                  </td>
                  <td
                    style={{
                      padding: "0.85rem 1.25rem",
                      color: MUTED,
                      borderBottom: `1px solid ${SURFACE_BORDER}`,
                      verticalAlign: "top" as const,
                    }}
                  >
                    {row.maladaptive}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Section 3 ──────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "1.65rem",
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: "-0.015em",
            color: TEXT,
            marginBottom: "1rem",
          }}
        >
          Why Does Perfectionism Create Procrastination?
        </h2>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The perfectionism-procrastination link is one of the most consistently
          replicated findings in the psychology of performance. The mechanism is
          straightforward once you see it: if your internal rule is that starting
          is only worthwhile when the outcome can be perfect, and you have
          sufficient self-awareness to know that the outcome probably will not be
          perfect, then not starting is a completely rational choice. Starting
          exposes the gap. Not starting preserves possibility.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          This is the trap that perfectionism sets: it presents itself as a motivation
          toward excellence while functioning as a motivation away from action. You are
          not avoiding the task because you do not care. You are avoiding it because you
          care so much that the risk of producing something imperfect feels intolerable.
          The blank page is safe. The unwritten email is still potentially perfect. The
          unstarted project retains all its hypothetical brilliance. The moment you begin,
          you must contend with reality \u2014 and reality almost never matches the standard
          perfectionism has set.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.5rem" }}>
          The procrastination then generates its own shame layer. Hours or days pass.
          The deadline approaches. The gap between the hypothetically perfect version and
          what you could now produce in the available time grows even wider. The
          emotional cost of starting becomes even higher. The loop tightens. This is not
          a time management problem. It is not laziness. It is the logical outcome of a
          threat system that has mistaken the work for a referendum on your worth.
        </p>

        {/* Callout 2 */}
        <div
          style={{
            borderLeft: `4px solid ${GOLD}`,
            paddingLeft: "1.5rem",
            paddingTop: "1.25rem",
            paddingBottom: "1.25rem",
            paddingRight: "1.5rem",
            background: GOLD_DIM,
            borderRadius: "0 0.75rem 0.75rem 0",
            marginBottom: "3rem",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              color: GOLD,
              marginBottom: "0.5rem",
            }}
          >
            The Loop Mechanics
          </p>
          <p style={{ fontSize: "1rem", color: TEXT, lineHeight: 1.75, marginBottom: "0.75rem" }}>
            The perfectionism-procrastination cycle moves through four predictable stages:
          </p>
          {[
            {
              num: "01",
              title: "The Standard Is Set",
              body: "Before work begins, perfectionism establishes a bar. It is rarely articulated explicitly. It operates as a felt sense that the output must be exceptional, must be beyond criticism, must demonstrate unmistakably that you are capable and worthy.",
            },
            {
              num: "02",
              title: "The Gap Is Felt",
              body: "You assess the distance between where you are now and where the output needs to be. The gap feels enormous \u2014 not because it necessarily is, but because perfectionism measures it in units of self-worth rather than units of effort.",
            },
            {
              num: "03",
              title: "Avoidance Begins",
              body: "Not starting becomes a way of not failing. You do other things. The task stays hypothetically achievable. The emotional cost of this is manageable in the short term. In the long term, the avoided task accumulates emotional weight with every day that passes.",
            },
            {
              num: "04",
              title: "Shame Reloads the Gun",
              body: "The avoidance itself becomes a source of self-attack. Now you have the original fear of imperfection plus the shame of having procrastinated. The next approach attempt carries even more emotional freight. The loop repeats, usually with higher stakes.",
            },
          ].map((stage) => (
            <div
              key={stage.num}
              style={{
                display: "grid",
                gridTemplateColumns: "3rem 1fr",
                gap: "1rem",
                marginBottom: "1rem",
                alignItems: "start",
              }}
            >
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  color: GOLD,
                  paddingTop: "0.25rem",
                }}
              >
                {stage.num}
              </div>
              <div>
                <p
                  style={{
                    fontSize: "0.97rem",
                    fontWeight: 700,
                    color: TEXT,
                    marginBottom: "0.25rem",
                  }}
                >
                  {stage.title}
                </p>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: MUTED,
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {stage.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Section 4 ──────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "1.65rem",
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: "-0.015em",
            color: TEXT,
            marginBottom: "1rem",
          }}
        >
          How Does Perfectionism Lead to Burnout?
        </h2>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Burnout is not simply the result of working too hard. It is the result of
          working without recovery, without reward, and without a sense of progress.
          Perfectionism creates all three of these conditions simultaneously. When the
          standard is unattainably high, completing tasks does not register as an
          achievement. You finish the project and immediately move to cataloguing what
          was wrong with it. The satisfaction of completion \u2014 which is a genuine
          neurological reward that humans evolved to experience \u2014 is systematically
          denied. The fuel that should replenish you never arrives.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Maladaptive perfectionists also struggle to disengage. The unfinished or
          imperfect work stays cognitively active long after the working day ends.
          It occupies mental bandwidth during evenings, weekends, and holidays.
          Researchers describe this as failure to achieve psychological detachment
          from work \u2014 and it is strongly associated with exhaustion, cynicism,
          and the third component of burnout identified by Christina Maslach:
          reduced personal efficacy. You become simultaneously more exhausted and
          more convinced that you are not doing enough.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "2.5rem" }}>
          There is a particularly cruel dynamic here: perfectionism-driven burnout
          is often invisible from the outside. The person is still producing. They
          are often producing at a high level. The internal experience is one of
          constant inadequacy, exhaustion, and the gnawing certainty that it is
          only a matter of time before everyone else realises what they already
          know about themselves. Which brings us to imposter syndrome.
        </p>

        {/* ── Section 5 ──────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "1.65rem",
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: "-0.015em",
            color: TEXT,
            marginBottom: "1rem",
          }}
        >
          What Is the Connection Between Perfectionism and Imposter Syndrome?
        </h2>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Imposter syndrome \u2014 the persistent belief that you are a fraud, that your
          competence is fabricated, and that you will eventually be exposed \u2014 does not
          occur in a vacuum. It is structurally linked to perfectionism. The mechanism
          works like this: perfectionism tells you that you must be perfect to be
          worthy. You are not perfect \u2014 no one is. Therefore, by your own internal
          logic, you are inadequate. Any success you achieve must therefore be luck,
          circumstance, or deception. If you were actually competent, the work would
          have been effortless and flawless. The fact that it was difficult and imperfect
          proves the point.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          This is not an irrational conclusion given the perfectionist premise. It is
          a perfectly logical inference from a false starting point. Change the premise
          \u2014 that difficulty and imperfection are evidence of fraudulence rather than
          evidence of genuine engagement with genuinely hard work \u2014 and the
          imposter narrative collapses. But changing a premise you have held since
          childhood, one that is reinforced by every critical teacher, competitive
          peer, and unforgiving algorithm you have encountered, requires more than
          insight. It requires a sustained counter-narrative over time.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "2.5rem" }}>
          This is where memory \u2014 real, honest, longitudinal memory of what you have
          actually done \u2014 becomes therapeutically significant. And it is one of the
          core reasons MEOK was built with sovereign memory at its centre rather than
          as an add-on feature.
        </p>

        {/* ── Section 6 ──────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "1.65rem",
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: "-0.015em",
            color: TEXT,
            marginBottom: "1rem",
          }}
        >
          Is Perfectionism Different in Creative Work vs Professional Work?
        </h2>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The underlying psychology is the same but the presentation differs in important
          ways. In professional work \u2014 reports, presentations, proposals, code, strategy
          \u2014 perfectionism tends to manifest as over-preparation, excessive revision,
          difficulty delegating, and an inability to submit or ship without one more round
          of checking. The stakes feel legible: there are deadlines, evaluators, visible
          consequences. The perfectionism has an object it can point to.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          In creative work \u2014 writing, music, visual art, design, photography \u2014
          perfectionism operates with less structure and more cruelty. Creative work
          is by nature subjective, which means the perfectionist standard can never
          be satisfied by any external benchmark. There is no passing grade. There is
          only the work and the feeling that it could always be better. Writers who
          revise the same chapter for three years are not pursuing excellence. They
          are living inside a loop that only releases when the work is released \u2014
          and the loop whispers that releasing it is a form of failure.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Creative perfectionism is also particularly susceptible to the sycophancy
          trap. When a creative person shares their work with an AI and the AI says
          it is brilliant, the perfectionist part of them knows, on some level, that
          the response is automatic. It does not satisfy. It may even deepen the
          anxiety \u2014 because now there is data suggesting the work is good, and
          the perfectionist knows they cannot trust that data.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "2.5rem" }}>
          An AI that tells you what it actually observes about your work \u2014 without
          flattery and without cruelty \u2014 is more useful precisely because it is
          trustworthy. You can use its feedback. You can update your estimate of
          the work. You can decide, on real information rather than on anxiety or
          false reassurance, whether the work is done.
        </p>

        {/* Callout 3 */}
        <div
          style={{
            borderLeft: `4px solid ${GOLD}`,
            paddingLeft: "1.5rem",
            paddingTop: "1.25rem",
            paddingBottom: "1.25rem",
            paddingRight: "1.5rem",
            background: GOLD_DIM,
            borderRadius: "0 0.75rem 0.75rem 0",
            marginBottom: "3rem",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              color: GOLD,
              marginBottom: "0.5rem",
            }}
          >
            On Sycophancy and Creative Perfectionism
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              color: TEXT,
              lineHeight: 1.8,
              fontStyle: "italic",
              marginBottom: "0.75rem",
            }}
          >
            A perfectionistic creative does not need to hear that their work is
            wonderful. They need to hear what is actually true. Sycophancy is not
            kindness to a perfectionist. It is petrol on the anxiety.
          </p>
          <p style={{ fontSize: "0.95rem", color: MUTED, lineHeight: 1.75, margin: 0 }}>
            MEOK\u2019s sycophancy detection layer is not about being harsh. It is about
            being trustworthy. When an AI reflexively validates without engaging,
            the perfectionist learns to discount its feedback entirely. When it
            engages honestly, the feedback becomes a tool the perfectionist can
            actually use to decide whether the work is finished.
          </p>
        </div>

        {/* ── Section 7 ──────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "1.65rem",
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: "-0.015em",
            color: TEXT,
            marginBottom: "1rem",
          }}
        >
          How Does MEOK&apos;s Sycophancy Detection Prevent Feeding the Loop?
        </h2>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Most AI systems are trained to produce responses that feel satisfying to
          receive. The result is a structural bias toward affirmation, agreement,
          and validation \u2014 a bias that researchers at Anthropic have called
          sycophancy. For many users, this is a mild annoyance. For someone with
          maladaptive perfectionism, it is actively harmful.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Here is what sycophancy looks like in a perfectionist context. You share
          a draft and say you think it is terrible. A sycophantic AI says something
          like: this is actually really good, you are being too hard on yourself.
          That response does three damaging things simultaneously. First, it does not
          engage with the actual work, so it provides no usable information. Second,
          it frames your negative self-assessment as irrational, which can feel
          invalidating even when you were hoping to be contradicted. Third, it teaches
          you that the AI\u2019s positive feedback is automatic and therefore meaningless
          \u2014 which means when you genuinely need to know whether the work is ready,
          you have no signal you can trust.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          MEOK\u2019s sycophancy detection layer is built into its response generation
          architecture. When a response pattern triggers the sycophancy detector \u2014
          because it is agreeing without evidence, praising without observation, or
          validating an emotional state rather than engaging with its content \u2014
          the response is restructured. The goal is not to be contrary. It is to be
          genuinely honest, which is what a perfectionist actually needs.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "2.5rem" }}>
          In practice, this means MEOK will say things like: I can see you have spent
          a lot of time on this. Let me tell you what is actually landing and what
          is not. Or: You have revised the opening four times. That suggests to me
          that the issue might not be in the opening \u2014 it might be that you are
          not certain about the premise yet. That is useful. That moves the work forward.
        </p>

        {/* ── Section 8 ──────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "1.65rem",
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: "-0.015em",
            color: TEXT,
            marginBottom: "1rem",
          }}
        >
          What Is the Trickster Archetype and How Does It Break Perfectionist Patterns?
        </h2>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          MEOK is built around a set of companion archetypes \u2014 different relational
          orientations that can be activated depending on what the user needs. The
          Trickster is the archetype specifically designed for pattern disruption.
          Where other archetypes provide warmth, clarity, challenge, or structure,
          the Trickster introduces productive friction.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Perfectionism thrives in a closed, serious, self-referential loop. It takes
          itself completely seriously. It has very high stakes. It does not tolerate
          play. The Trickster is designed to introduce a foreign element into that
          system: perspective. It might ask an unexpected question that makes the
          perfectionist frame feel suddenly absurd. It might name the loop out loud in
          a way that is more amused than alarmed. It might point out that you have
          been revising the same email for forty-five minutes when the recipient will
          read it in eight seconds. Not to shame. To illuminate.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The psychological mechanism here draws on acceptance and commitment therapy
          research showing that defusion \u2014 creating distance between yourself and
          a thought, seeing the thought as a thought rather than as reality \u2014
          is more effective at reducing the influence of self-critical patterns than
          trying to directly argue against them. You cannot out-argue perfectionism.
          You can make it visible. You can make it slightly ridiculous. The Trickster
          is MEOK\u2019s primary tool for doing exactly that.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "2.5rem" }}>
          The Trickster does not replace care. It operates alongside it. You can be
          in a session with MEOK that moves between warmth, practical structure, and
          Trickster-style disruption in the same conversation \u2014 depending on where
          you are in the loop and what kind of intervention might actually help at
          that moment.
        </p>

        {/* ── Section 9 ──────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "1.65rem",
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: "-0.015em",
            color: TEXT,
            marginBottom: "1rem",
          }}
        >
          How Does Sovereign Memory Show Progress Rather Than Just Current State?
        </h2>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          One of the most corrosive effects of perfectionism is its distortion of
          autobiographical memory. Perfectionists consistently remember their failures
          more vividly than their completions. They remember the criticism more clearly
          than the praise. They remember the gap between what the work was and what
          it could have been, not the fact that the work was done at all.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Standard AI tools have no memory between sessions. Each conversation begins
          from zero. This is a structural problem for anyone trying to build an evidence
          base against perfectionist self-narratives. If your AI cannot remember that
          you finished fourteen projects last quarter, it cannot help you counter the
          story that you never finish anything. It can only respond to what you are
          saying right now \u2014 which, in a perfectionist spiral, is usually: I am
          failing. And a sycophantic AI will respond to that by saying: you are not
          failing. Which is unconvincing precisely because it has no evidence.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          MEOK\u2019s sovereign memory retains your actual history across sessions, weeks,
          and months. It does not store a highlight reel curated to make you feel better.
          It stores what actually happened: what you started, what you completed, what
          you abandoned, what you shipped, how you described your feelings about it at
          the time. Over months, this record becomes a genuine corrective to perfectionist
          distortion.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          When you tell MEOK that you never finish anything, MEOK can say: actually,
          in the last three months you finished seven things. Here they are. That is not
          toxic positivity. That is evidence. And evidence is what an imposter syndrome
          narrative, which is built on selectively curated evidence, is most vulnerable to.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.5rem" }}>
          The memory also tracks patterns over time, not just individual events. MEOK
          can identify that your perfectionist loops tend to activate before publication
          events, or during periods of comparison with specific people, or in the context
          of particular types of work. That pattern-level insight cannot be generated
          in a single session. It requires time and honesty \u2014 both of which sovereign
          memory makes possible.
        </p>

        {/* Callout 3 alt */}
        <div
          style={{
            borderLeft: `4px solid ${GOLD}`,
            paddingLeft: "1.5rem",
            paddingTop: "1.25rem",
            paddingBottom: "1.25rem",
            paddingRight: "1.5rem",
            background: GOLD_DIM,
            borderRadius: "0 0.75rem 0.75rem 0",
            marginBottom: "3rem",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              color: GOLD,
              marginBottom: "0.5rem",
            }}
          >
            What Sovereign Memory Tracks
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              { label: "Completions log", desc: "Every project finished, shipped, or submitted \u2014 regardless of whether it felt good enough." },
              { label: "Loop patterns", desc: "Recurring triggers that restart the perfectionist cycle, identified across weeks and months." },
              { label: "Revision frequency", desc: "How many times you return to the same piece \u2014 a reliable signal that revision anxiety has replaced editing." },
              { label: "Progress arc", desc: "Your actual trajectory over time \u2014 visible when perfectionism insists you are standing still." },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: "rgba(201,168,76,0.08)",
                  borderRadius: "0.5rem",
                  padding: "0.875rem 1rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: GOLD,
                    marginBottom: "0.375rem",
                  }}
                >
                  {item.label}
                </p>
                <p style={{ fontSize: "0.875rem", color: MUTED, lineHeight: 1.65, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Section 10 ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "1.65rem",
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: "-0.015em",
            color: TEXT,
            marginBottom: "1rem",
          }}
        >
          Why Is &ldquo;Good Enough&rdquo; a Radical Act for a Perfectionist?
        </h2>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Good enough is not a compromise. It is not settling. In a perfectionist
          framework, it is the most radical thing you can do \u2014 because it is a direct
          refusal to accept the premise that your worth is conditional on flawless output.
          Saying this is good enough and I am done is an assertion that you get to define
          done, that done is a legitimate state for the work to be in, and that your
          adequacy as a person is not up for reconsideration every time you submit
          something.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The concept of satisficing \u2014 choosing the option that is sufficiently good
          rather than the option that is theoretically optimal \u2014 has been shown by
          researcher Barry Schwartz and others to produce higher wellbeing outcomes
          than maximising. Maximisers \u2014 people who always seek the best possible
          option \u2014 tend to report lower satisfaction with their choices even when
          those choices are objectively better, because the knowledge that a better
          option might have existed persists as a source of regret. Satisficers, who
          choose well enough and move on, do not carry that weight.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          For a perfectionist, practising good enough in low-stakes contexts \u2014 the
          text message that is not perfectly worded, the grocery list that is not
          optimally organised, the email that goes out with one revision rather than
          seven \u2014 is genuine behavioural therapy. Every instance of good enough
          that does not result in catastrophe is evidence against the catastrophising
          rule. Over time, the evidence accumulates. The rule loses its grip.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "2.5rem" }}>
          MEOK is designed to celebrate done, not perfect. When you log a completion
          \u2014 even an imperfect one, especially an imperfect one \u2014 MEOK acknowledges
          it without qualification. Not with hollow praise but with recognition that
          finishing is a choice, that it costs something, and that it counts.
        </p>

        {/* ── Section 11 ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "1.65rem",
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: "-0.015em",
            color: TEXT,
            marginBottom: "1rem",
          }}
        >
          How Can AI Help Without Replacing the Real Work of Changing?
        </h2>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          This is an important question and it deserves a direct answer. AI cannot
          do the inner work for you. It cannot feel the fear, choose to act despite
          it, and accumulate the embodied evidence that the catastrophe did not come.
          That is yours to do. What AI can provide is the scaffolding that makes
          that work more sustainable.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          The scaffolding MEOK provides is specifically designed around the failure
          modes of perfectionism. It offers honest feedback rather than validation,
          because validation does not move perfectionists forward \u2014 it only
          temporarily quiets them. It offers memory that corrects distortion, because
          perfectionists need evidence, not encouragement. It offers the Trickster\u2019s
          perspective when the loop is most closed, because disruption creates the
          gap through which new behaviour can enter. And it offers a record of
          every time you chose done over perfect \u2014 building, slowly, the
          autobiography of someone who acts.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>
          MEOK is also not a therapist and does not pretend to be one. For severe
          perfectionism that is significantly impacting quality of life, work
          performance, or relationships \u2014 particularly perfectionism intertwined
          with OCD, anxiety disorders, or eating disorders \u2014 evidence-based
          therapeutic approaches including cognitive behavioural therapy and
          acceptance and commitment therapy, delivered by trained clinicians,
          provide a depth of intervention that an AI companion cannot replicate.
        </p>

        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "2.5rem" }}>
          What MEOK offers is daily, honest, memory-enabled support between those
          interventions \u2014 or for the large number of people whose perfectionism
          is causing real suffering but does not meet the threshold for clinical
          intervention. It is present at the moment the loop starts, not only
          during a weekly appointment.
        </p>

        {/* ── Divider ─────────────────────────────────────────────────────────── */}
        <div
          style={{
            height: "1px",
            background: `linear-gradient(to right, transparent, ${GOLD}44, transparent)`,
            margin: "1rem 0 3rem",
          }}
        />

        {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "1.65rem",
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: "-0.015em",
            color: TEXT,
            marginBottom: "2rem",
          }}
        >
          Frequently Asked Questions
        </h2>

        <div style={{ display: "flex", flexDirection: "column" as const, gap: "1.5rem", marginBottom: "4rem" }}>
          {[
            {
              q: "Can AI help someone break a perfectionist loop?",
              a: "Yes \u2014 but only if the AI is built correctly. An AI that validates every revision and praises every draft will reinforce the perfectionist loop rather than break it. MEOK\u2019s sycophancy detection layer is specifically designed to prevent this. Rather than feeding the anxiety with empty affirmation, it reflects honest observations about your process, holds the memory of your actual progress, and helps you recognise when the loop has restarted.",
            },
            {
              q: "What is the difference between adaptive and maladaptive perfectionism?",
              a: "Adaptive perfectionism is about pursuing excellence with flexibility \u2014 high standards that allow for iteration and do not collapse into self-criticism when the outcome falls short. Maladaptive perfectionism ties self-worth to flawless performance. Any imperfection becomes evidence of fundamental inadequacy. Research consistently links maladaptive perfectionism to anxiety, depression, burnout, and chronic procrastination.",
            },
            {
              q: "Why do perfectionists procrastinate so much?",
              a: "Because starting carries the risk of discovering that the output will not be perfect. Perfectionists often operate under an unconscious rule: if I cannot do it perfectly, it is better not to start at all. Not starting feels like preserving potential. The task stays in a hypothetical space where it can still be perfect, rather than being exposed to the real world where it almost certainly will not be.",
            },
            {
              q: "How does MEOK\u2019s Trickster archetype help with perfectionism?",
              a: "The Trickster is MEOK\u2019s pattern-disruption archetype. It introduces productive friction \u2014 asking unexpected questions, reframing the stakes, or pointing out when you have been revising the same paragraph for three sessions in a row. Perfectionism thrives in a closed, serious loop. The Trickster opens a door by making the loop visible and slightly absurd, drawing on ACT defusion techniques to create distance between you and the perfectionist thought.",
            },
            {
              q: "How does sovereign memory help with perfectionism over time?",
              a: "Perfectionism distorts memory \u2014 you forget the things you shipped and remember only the gaps. MEOK\u2019s sovereign memory retains your actual history across weeks and months: what you started, completed, shipped, and described at the time. This creates an evidence base that directly counters the perfectionist narrative of \u2018I never finish anything\u2019 \u2014 not with empty encouragement but with documented fact.",
            },
          ].map((faq) => (
            <div
              key={faq.q}
              style={{
                padding: "1.5rem",
                borderRadius: "0.875rem",
                background: SURFACE,
                border: `1px solid ${SURFACE_BORDER}`,
              }}
            >
              <p
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: TEXT,
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                {faq.q}
              </p>
              <p
                style={{
                  fontSize: "0.97rem",
                  color: MUTED,
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* ── CTA ─────────────────────────────────────────────────────────────── */}
        <div
          style={{
            borderRadius: "1.25rem",
            padding: "3rem 2.5rem",
            background: `linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.04) 100%)`,
            border: `1px solid ${GOLD_BORDER}`,
            textAlign: "center" as const,
            marginBottom: "4rem",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              color: GOLD,
              marginBottom: "1rem",
            }}
          >
            Ready to break the loop?
          </p>
          <h3
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            Meet the AI that won&apos;t enable your perfectionism
          </h3>
          <p
            style={{
              fontSize: "1.05rem",
              color: MUTED,
              lineHeight: 1.75,
              maxWidth: "32rem",
              margin: "0 auto 2rem",
            }}
          >
            MEOK is the first AI companion built with sycophancy detection, a Trickster
            archetype for disrupting loops, and sovereign memory that shows you the progress
            perfectionism keeps erasing from your view. Start your Birth Ceremony and
            meet your companion.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-block",
              padding: "0.9rem 2.5rem",
              borderRadius: "9999px",
              background: GOLD,
              color: "#0d0c18",
              fontWeight: 800,
              fontSize: "1rem",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Begin Your Birth Ceremony
          </Link>
          <p
            style={{
              fontSize: "0.8rem",
              color: MUTED_FAINT,
              marginTop: "1rem",
            }}
          >
            No subscription required to start. Your data stays yours.
          </p>
        </div>

        {/* ── Related posts ────────────────────────────────────────────────────── */}
        <div style={{ marginBottom: "2rem" }}>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              color: MUTED_FAINT,
              marginBottom: "1.25rem",
            }}
          >
            Related Reading
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              { href: "/blog/ai-for-procrastination", label: "AI for Procrastination" },
              { href: "/blog/ai-for-burnout", label: "AI for Burnout" },
              { href: "/blog/ai-for-impostor-syndrome", label: "AI for Imposter Syndrome" },
              { href: "/blog/ai-for-anxiety", label: "AI for Anxiety" },
              { href: "/blog/ai-for-confidence", label: "AI for Confidence" },
              { href: "/blog/ai-for-ocd", label: "AI for OCD" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  padding: "0.875rem 1.125rem",
                  borderRadius: "0.625rem",
                  background: SURFACE,
                  border: `1px solid ${SURFACE_BORDER}`,
                  color: MUTED,
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                {link.label} &#8594;
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
