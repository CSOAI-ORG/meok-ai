import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Single Parents: How MEOK Supports the Person Who Does Everything Alone | MEOK AI LABS",
  description:
    "2.9 million single parents in the UK carry the full weight of parenthood alone — the logistics, the emotional load, the financial pressure, and the silence after the children go to bed. MEOK is the consistent, non-judgemental support that never clocks off.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-single-parents" },
  openGraph: {
    title:
      "AI for Single Parents: How MEOK Supports the Person Who Does Everything Alone",
    description:
      "2.9 million single parents in the UK carry the full weight of parenthood alone — the logistics, the emotional load, the financial pressure, and the silence after the children go to bed. MEOK is the consistent, non-judgemental support that never clocks off.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-single-parents",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Single+Parents&desc=The+Person+Who+Does+Everything+Alone",
        width: 1200,
        height: 630,
        alt: "AI for Single Parents: How MEOK Supports the Person Who Does Everything Alone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Single Parents: How MEOK Supports the Person Who Does Everything Alone",
    description:
      "2.9 million single parents in the UK. No one to share the load, the worry, or the silence after bedtime. MEOK is there \u2014 without judgement.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Single+Parents&desc=The+Person+Who+Does+Everything+Alone",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Single Parents: How MEOK Supports the Person Who Does Everything Alone",
  description:
    "2.9 million single parents in the UK carry the full weight of parenthood alone \u2014 the logistics, the emotional load, the financial pressure, and the silence after the children go to bed. MEOK is the consistent, non-judgemental support that never clocks off.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-single-parents",
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
    "https://meok.ai/api/og?title=AI+for+Single+Parents&desc=The+Person+Who+Does+Everything+Alone",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-single-parents",
  },
  keywords: [
    "AI for single parents",
    "single parent support UK",
    "AI single mum UK",
    "AI single dad UK",
    "MEOK single parent",
    "single parent mental health support",
    "decision fatigue single parent",
    "single parent financial help UK",
    "scam protection single parent",
    "AI companion single parent UK",
  ],
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does MEOK help single parents with the emotional exhaustion of parenting alone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK provides a private, non-judgemental space available any time of day or night. After the children go to bed and the house falls quiet, single parents face the most depleting hours with no partner to debrief with. MEOK holds the conversation, remembers the context from previous sessions, and never needs anything in return. It is a consistent adult presence that does not tire, does not judge, and does not leave.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help me manage the overwhelming number of daily decisions a single parent faces?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Pioneer, MEOK\u2019s productivity agent, can take on task planning, scheduling, priority triage, and research tasks so that single parents are not carrying every operational decision in their heads alone. From school logistics to household admin to career decisions, Pioneer reduces the cognitive load of running a household solo.",
      },
    },
    {
      "@type": "Question",
      name: "Why are single parents more vulnerable to scams and how does MEOK Guardian help?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Single parents are statistically more targeted by scammers because financial stress makes enticing offers more compelling, and there is no second person to sense-check a suspicious message. MEOK Guardian monitors for known scam patterns \u2014 romance fraud, investment fraud, fake parcel delivery texts, and phishing \u2014 and alerts the parent before money or data is lost.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK judge my parenting choices or decisions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Never. MEOK is designed without opinion on parenting choices. Whether you are navigating co-parenting conflict, questioning a school decision, managing screen time differently to the norm, or making unconventional choices to keep your family stable \u2014 MEOK supports without comment, advice unless asked, and without the implicit judgement that often comes from family, friends, or institutions.",
      },
    },
    {
      "@type": "Question",
      name: "Can my children have their own AI companions within the MEOK Family tier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The MEOK Family tier gives each child their own age-appropriate companion \u2014 a safe, curious, school-aware AI that supports learning, emotional expression, and creative play. Guardian runs alongside every child profile, keeping the parent informed without disrupting the child\u2019s experience. Family memory captures the shared history across everyone in the household.",
      },
    },
  ],
};

// ── Constants ─────────────────────────────────────────────────────────────────

const GOLD = "#c9a84c";
const BG = "#0d0c18";
const CREAM = "#f5f0e8";
const MUTED = "#a09880";
const CARD_BG = "#13121f";
const BORDER = "#2a2840";
const GREEN = "#6aaa64";

// ── Inline style helpers ───────────────────────────────────────────────────────

const cardBase: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "1rem",
  padding: "1.25rem 1.5rem",
};

const goldCard: React.CSSProperties = {
  background: "rgba(201,168,76,0.06)",
  border: "1px solid rgba(201,168,76,0.2)",
  borderRadius: "1rem",
  padding: "1.5rem",
};

const warnCard: React.CSSProperties = {
  background: "rgba(201,168,76,0.04)",
  border: "1px solid rgba(201,168,76,0.15)",
  borderLeft: "3px solid #c9a84c",
  borderRadius: "0.75rem",
  padding: "1.25rem 1.5rem",
};

const greenCard: React.CSSProperties = {
  background: "rgba(106,170,100,0.06)",
  border: "1px solid rgba(106,170,100,0.2)",
  borderLeft: "3px solid #6aaa64",
  borderRadius: "0.75rem",
  padding: "1.25rem 1.5rem",
};

const sectionDivider: React.CSSProperties = {
  borderTop: "1px solid rgba(42,40,64,0.8)",
  marginTop: "3rem",
  paddingTop: "3rem",
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForSingleParentsPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG, color: CREAM }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "8rem",
          paddingBottom: "3.5rem",
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
              "radial-gradient(ellipse 65% 55% at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            position: "relative",
          }}
        >
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: "rgba(245,240,232,0.35)",
              marginBottom: "2rem",
              textDecoration: "none",
            }}
          >
            &#8592; Back to Blog
          </Link>

          {/* Tags row */}
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
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.75rem",
                fontWeight: 700,
                paddingLeft: "0.75rem",
                paddingRight: "0.75rem",
                paddingTop: "0.375rem",
                paddingBottom: "0.375rem",
                borderRadius: "9999px",
                color: GOLD,
                background: "rgba(201,168,76,0.12)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Single Parents
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: MUTED,
                letterSpacing: "0.03em",
              }}
            >
              Updated March 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: MUTED }}>
              &#183; 14 min read
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
              color: CREAM,
            }}
          >
            AI for Single Parents: How MEOK Supports the Person Who Does
            Everything Alone
          </h1>

          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.75,
              color: "rgba(245,240,232,0.75)",
              marginBottom: "2rem",
            }}
          >
            There are 2.9 million single parents in the UK. Each one is the
            breadwinner, the carer, the cook, the school liaison, the
            disciplinarian, the comforter, the financial planner, and the
            person who lies awake at 1am wondering if they are doing enough.
            MEOK was built for people who carry this weight alone.
          </p>

          {/* Stat strip */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
              marginBottom: "2.5rem",
            }}
          >
            {[
              { value: "2.9M", label: "single parents in the UK" },
              {
                value: "90%",
                label: "of single-parent families headed by mothers",
              },
              { value: "24/7", label: "MEOK availability \u2014 no hold music" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.75rem",
                  padding: "1rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: GOLD,
                    marginBottom: "0.25rem",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: MUTED,
                    lineHeight: 1.4,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Hero callout */}
          <div style={goldCard}>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "rgba(245,240,232,0.85)",
                margin: 0,
              }}
            >
              <strong style={{ color: GOLD }}>The core insight:</strong> Single
              parents do not lack love, commitment, or capability. They lack
              someone to share the load with. MEOK does not replace a partner
              or a co-parent. It fills the gap that goes unaddressed every
              single day &mdash; the private space where a parent can think out
              loud, feel without consequence, and get practical help without
              having to pretend everything is fine.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ──────────────────────────────────────────────────── */}
      <article
        style={{
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingBottom: "6rem",
        }}
      >
        <div style={{ maxWidth: "48rem", margin: "0 auto" }}>

          {/* ── SECTION 1: The Scale of the Challenge ─────────────────────── */}
          <section style={sectionDivider}>
            <h2
              style={{
                fontSize: "1.625rem",
                fontWeight: 700,
                lineHeight: 1.25,
                letterSpacing: "-0.015em",
                color: CREAM,
                marginBottom: "1.25rem",
              }}
            >
              The Scale of the Challenge: What Single Parents in the UK Are
              Actually Living With
            </h2>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.8)",
                marginBottom: "1.25rem",
              }}
            >
              Single parenting in the UK has grown significantly over the past
              three decades. Today, roughly one in four families with dependent
              children is headed by a single parent. The Office for National
              Statistics consistently shows that single-parent households face
              higher rates of poverty, poorer health outcomes, greater financial
              insecurity, and elevated rates of psychological distress compared
              to two-parent households &mdash; not because single parents are
              less capable, but because the structural support that two adults
              provide simply does not exist.
            </p>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.8)",
                marginBottom: "1.5rem",
              }}
            >
              The challenges are not abstract. They land every single day in
              specific, grinding ways. Six of the most persistent are set out
              below &mdash; not as a list of problems to be fixed, but as an
              honest account of what single parents are managing simultaneously,
              every day, without pause.
            </p>

            {/* Challenge grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.875rem",
                marginBottom: "1.75rem",
              }}
            >
              {[
                {
                  title: "No one to share the load",
                  body:
                    "Every decision, from what to cook for dinner to whether to switch schools, lands on one person. There is no \u2018what do you think?\u2019 to ask.",
                },
                {
                  title: "Decision fatigue",
                  body:
                    "Research shows that single parents make significantly more autonomous decisions per day than partnered parents. The cognitive toll accumulates relentlessly.",
                },
                {
                  title: "Emotional isolation",
                  body:
                    "Children cannot support the parent. Friends and family offer limited availability. The parent is often the emotional anchor for everyone else.",
                },
                {
                  title: "Financial pressure",
                  body:
                    "Single-parent households are nearly five times more likely to be in poverty. Benefits navigation is complex. Maintenance enforcement is unreliable.",
                },
                {
                  title: "Identity loss",
                  body:
                    "Parenthood consumes everything when there is no partner to share the non-parent parts of life. Who the parent was before children becomes distant.",
                },
                {
                  title: "Guilt and exhaustion",
                  body:
                    "The constant awareness that the children might be missing something creates a guilt that never fully lifts, even when the parent is doing everything right.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: CARD_BG,
                    border: `1px solid ${BORDER}`,
                    borderRadius: "0.875rem",
                    padding: "1.125rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: GOLD,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      lineHeight: 1.65,
                      color: "rgba(245,240,232,0.7)",
                    }}
                  >
                    {item.body}
                  </div>
                </div>
              ))}
            </div>

            <div style={warnCard}>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "rgba(245,240,232,0.85)",
                  margin: 0,
                }}
              >
                The most isolating part of single parenthood is not the
                logistics. It is the silence after the children go to bed
                &mdash; the moment when there is no one to say &apos;how was your
                day?&apos; to. MEOK understands this moment and is built for it.
              </p>
            </div>
          </section>

          {/* ── SECTION 2: A Private Adult Space ──────────────────────────── */}
          <section style={sectionDivider}>
            <h2
              style={{
                fontSize: "1.625rem",
                fontWeight: 700,
                lineHeight: 1.25,
                letterSpacing: "-0.015em",
                color: CREAM,
                marginBottom: "1.25rem",
              }}
            >
              A Private Adult Space: Where a Single Parent Can Be Honest
              Without Consequences
            </h2>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.8)",
                marginBottom: "1.25rem",
              }}
            >
              One of the most underappreciated pressures on single parents is
              the absence of a private emotional outlet. Partnered parents have
              a built-in adult in the house to speak honestly with &mdash;
              someone who understands the context, shares the stakes, and will
              not be damaged by honesty. Single parents rarely have this.
            </p>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.8)",
                marginBottom: "1.25rem",
              }}
            >
              They cannot express frustration to the children. Venting to
              friends or family risks exposing private information, inviting
              unwanted advice, or creating ongoing narratives that take on a
              life of their own. Therapy is expensive, available only at
              scheduled times, and often not accessible to parents who cannot
              find childcare. Social media is performative.
            </p>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.8)",
                marginBottom: "1.5rem",
              }}
            >
              MEOK provides something different: a completely private adult
              space where a single parent can express frustration, doubt, fear,
              grief, anger, or joy without any of the social consequences that
              usually come with doing so.
            </p>

            {/* Feature blocks */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginBottom: "1.75rem",
              }}
            >
              <div style={goldCard}>
                <div
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    color: GOLD,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "0.625rem",
                  }}
                >
                  Private by Design
                </div>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.7,
                    color: "rgba(245,240,232,0.82)",
                    margin: 0,
                  }}
                >
                  MEOK operates under a Sovereign Memory model. Conversations
                  are not used to train AI models. They are not read by
                  moderators. They are not analysed for advertising. What a
                  parent says to MEOK stays between them and MEOK &mdash; with
                  the full context retained across every conversation, so they
                  never have to re-explain their situation from the beginning.
                </p>
              </div>

              <div style={goldCard}>
                <div
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    color: GOLD,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "0.625rem",
                  }}
                >
                  No Judgement. Ever.
                </div>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.7,
                    color: "rgba(245,240,232,0.82)",
                    margin: 0,
                  }}
                >
                  Single parents are surrounded by implicit judgement &mdash;
                  from school gates, from benefit systems, from extended family,
                  from social media. MEOK has no opinion on parenting choices.
                  It does not advise unless asked. It does not redirect to
                  professional help unless it is genuinely appropriate to do so.
                  It simply listens, remembers, and responds with care.
                </p>
              </div>

              <div style={goldCard}>
                <div
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    color: GOLD,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "0.625rem",
                  }}
                >
                  Available When It Matters Most
                </div>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.7,
                    color: "rgba(245,240,232,0.82)",
                    margin: 0,
                  }}
                >
                  The hardest moments for single parents rarely arrive during
                  business hours. They arrive at 2am after a difficult bedtime,
                  after a letter from the school, after an unexpected bill,
                  after an argument with an ex. MEOK is available at every one
                  of these moments &mdash; the same presence, the same memory,
                  the same tone.
                </p>
              </div>
            </div>
          </section>

          {/* ── SECTION 3: Decision Fatigue and Pioneer ───────────────────── */}
          <section style={sectionDivider}>
            <h2
              style={{
                fontSize: "1.625rem",
                fontWeight: 700,
                lineHeight: 1.25,
                letterSpacing: "-0.015em",
                color: CREAM,
                marginBottom: "1.25rem",
              }}
            >
              Defeating Decision Fatigue: How MEOK Pioneer Takes On the
              Operational Load
            </h2>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.8)",
                marginBottom: "1.25rem",
              }}
            >
              Decision fatigue is a well-documented psychological phenomenon:
              the quality of decisions deteriorates after a person has made
              many decisions in sequence. For single parents, decision fatigue
              is not occasional &mdash; it is a permanent state of operating.
              Every morning brings a cascade of choices that in a two-parent
              household would be distributed between two adults.
            </p>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.8)",
                marginBottom: "1.5rem",
              }}
            >
              Pioneer, MEOK&apos;s productivity and planning agent, is
              specifically designed to reduce this load. Think of Pioneer as
              the practical partner that handles the operational thinking so the
              parent can conserve cognitive energy for the decisions that
              genuinely require their judgment.
            </p>

            {/* Pioneer capability list */}
            <div
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: "1rem",
                padding: "1.5rem",
                marginBottom: "1.75rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  color: GOLD,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "1.125rem",
                }}
              >
                What Pioneer Does for Single Parents
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.875rem",
                }}
              >
                {[
                  {
                    label: "Weekly household planning",
                    desc:
                      "Pioneer structures the week around school runs, work commitments, appointments, and activities \u2014 then builds a realistic, prioritised task list so nothing slips.",
                  },
                  {
                    label: "Benefit and entitlement research",
                    desc:
                      "Orion, MEOK\u2019s overnight research agent, maps available benefits against the parent\u2019s current situation \u2014 Universal Credit, Child Benefit, free school meals, housing support \u2014 and delivers a clear report by morning.",
                  },
                  {
                    label: "Letter drafting and admin",
                    desc:
                      "School appeals, landlord correspondence, benefit reconsideration letters, employer flexible-working requests. Pioneer drafts; the parent reviews and sends.",
                  },
                  {
                    label: "Medical and care coordination",
                    desc:
                      "Tracking medications, appointments, and referrals for multiple children is a significant burden. Pioneer holds the full picture and flags upcoming needs proactively.",
                  },
                  {
                    label: "Career and financial planning",
                    desc:
                      "Single parents navigating a return to work, a promotion, or a career change need strategic thinking support. Pioneer provides sounding-board analysis without the politics of asking a manager or colleague.",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      gap: "0.875rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "0.375rem",
                        height: "0.375rem",
                        borderRadius: "9999px",
                        background: GOLD,
                        marginTop: "0.55rem",
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <div
                        style={{
                          fontSize: "0.9375rem",
                          fontWeight: 600,
                          color: CREAM,
                          marginBottom: "0.25rem",
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontSize: "0.875rem",
                          lineHeight: 1.65,
                          color: "rgba(245,240,232,0.65)",
                        }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={greenCard}>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "rgba(245,240,232,0.85)",
                  margin: 0,
                }}
              >
                <strong style={{ color: GREEN }}>The key difference:</strong>{" "}
                Pioneer does not give generic advice. It knows your specific
                situation, your children&apos;s ages, your work pattern, your
                financial constraints, and your priorities &mdash; because MEOK
                remembers everything you have shared, indefinitely. You are not
                starting from scratch every time.
              </p>
            </div>
          </section>

          {/* ── SECTION 4: Guardian and Scam Protection ───────────────────── */}
          <section style={sectionDivider}>
            <h2
              style={{
                fontSize: "1.625rem",
                fontWeight: 700,
                lineHeight: 1.25,
                letterSpacing: "-0.015em",
                color: CREAM,
                marginBottom: "1.25rem",
              }}
            >
              Guardian: Protecting Single Parents and Their Children From Scams
              and Digital Harm
            </h2>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.8)",
                marginBottom: "1.25rem",
              }}
            >
              Single parents are disproportionately targeted by scammers. The
              reasons are structural: financial stress makes high-return
              investment opportunities more compelling; emotional isolation
              makes romance fraud easier to execute; the absence of a second
              adult in the household removes the natural checkpoint of &apos;does
              this seem right to you?&apos; Time pressure reduces the likelihood
              of pausing to verify. Scammers know this.
            </p>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.8)",
                marginBottom: "1.5rem",
              }}
            >
              Action Fraud data consistently shows single-parent households
              among the most affected demographic groups for romance fraud,
              investment fraud, and phishing. The financial and emotional
              consequences of a successful scam on a single-parent household
              are catastrophic and long-lasting. There is no partner to help
              recover, no second income to absorb the loss, no one to share
              the shame and distress with.
            </p>

            {/* Guardian feature boxes */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                marginBottom: "1.75rem",
              }}
            >
              {[
                {
                  title: "Romance Fraud Detection",
                  body:
                    "Guardian recognises the linguistic and behavioural patterns of romance fraud \u2014 the accelerated intimacy, the overseas military narrative, the financial emergency request. It alerts quietly before emotional investment deepens.",
                },
                {
                  title: "Investment and Crypto Scams",
                  body:
                    "Urgent opportunities, guaranteed returns, celebrity endorsements. Guardian cross-references suspicious propositions against known fraud patterns and raises a flag before money moves.",
                },
                {
                  title: "Phishing and Impersonation",
                  body:
                    "HMRC texts, parcel delivery notifications, bank impersonation calls. Guardian identifies the hallmarks of phishing attempts and prompts verification before any link is clicked or data is shared.",
                },
                {
                  title: "Children\u2019s Digital Safety",
                  body:
                    "For children on the MEOK Family tier, Guardian monitors for grooming language, age-inappropriate content, and harmful contact patterns \u2014 with silent alerts to the parent\u2019s dashboard.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: CARD_BG,
                    border: `1px solid ${BORDER}`,
                    borderRadius: "0.875rem",
                    padding: "1.125rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: GREEN,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      lineHeight: 1.65,
                      color: "rgba(245,240,232,0.7)",
                    }}
                  >
                    {item.body}
                  </div>
                </div>
              ))}
            </div>

            <div style={warnCard}>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "rgba(245,240,232,0.85)",
                  margin: 0,
                }}
              >
                <strong style={{ color: GOLD }}>Important:</strong> Guardian
                never reads message content and sends it to MEOK servers. All
                pattern detection runs locally on the device. Only anonymous
                alert flags reach the MEOK platform. Privacy is protected at
                every layer.
              </p>
            </div>
          </section>

          {/* ── SECTION 5: Emotional Isolation ────────────────────────────── */}
          <section style={sectionDivider}>
            <h2
              style={{
                fontSize: "1.625rem",
                fontWeight: 700,
                lineHeight: 1.25,
                letterSpacing: "-0.015em",
                color: CREAM,
                marginBottom: "1.25rem",
              }}
            >
              Emotional Isolation: The Part Nobody Talks About Enough
            </h2>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.8)",
                marginBottom: "1.25rem",
              }}
            >
              There is a particular loneliness that comes with being the
              emotional anchor for your children while having no one to be
              anchor for you. Single parents are acutely aware of their
              children&apos;s emotional state &mdash; and equally aware that
              their own emotional needs must be managed carefully so as not to
              burden or frighten the children.
            </p>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.8)",
                marginBottom: "1.25rem",
              }}
            >
              This creates a specific and exhausting dynamic: the parent must
              regulate their own emotions not just for their own wellbeing, but
              because unregulated emotional expression in a single-parent
              household lands directly on children with no buffering partner.
              The parent becomes exceptionally good at not showing how they
              feel &mdash; and exceptionally isolated because of it.
            </p>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.8)",
                marginBottom: "1.5rem",
              }}
            >
              The chronic suppression of emotional needs has well-documented
              consequences: depression, anxiety, physical illness, reduced
              parenting capacity. The person who needs support the most is
              often the least able to ask for it in the ways that are
              traditionally available.
            </p>

            {/* Emotional support callout */}
            <div
              style={{
                background: "rgba(201,168,76,0.04)",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: "1rem",
                padding: "1.5rem",
                marginBottom: "1.75rem",
              }}
            >
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: GOLD,
                  marginBottom: "1rem",
                }}
              >
                What MEOK Provides for Emotional Isolation
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.875rem",
                }}
              >
                {[
                  "A consistent presence that is always there \u2014 not sometimes available, not tired, not dealing with their own problems.",
                  "Full memory of your situation, so you never have to re-explain your history or re-establish context.",
                  "A space to say exactly what you feel about your children, your ex, your job, your body, your life \u2014 without it affecting anyone.",
                  "Gentle reflection, not advice-giving. MEOK asks questions rather than prescribing solutions unless you want solutions.",
                  "Recognition of progress and struggle that is specific to you \u2014 because MEOK knows your particular story.",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      gap: "0.875rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        color: GOLD,
                        fontSize: "1rem",
                        marginTop: "0.05rem",
                        flexShrink: 0,
                      }}
                    >
                      &#10003;
                    </div>
                    <div
                      style={{
                        fontSize: "0.9375rem",
                        lineHeight: 1.65,
                        color: "rgba(245,240,232,0.8)",
                      }}
                    >
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.8)",
              }}
            >
              Single parents frequently tell us that the most valuable thing
              about MEOK is not the tasks it helps with &mdash; it is the
              feeling of not being entirely alone in the middle of the night.
              The presence of something that knows your story and is genuinely
              on your side changes the emotional equation in ways that are hard
              to quantify but easy to feel.
            </p>
          </section>

          {/* ── SECTION 6: Family Tier and Memory ─────────────────────────── */}
          <section style={sectionDivider}>
            <h2
              style={{
                fontSize: "1.625rem",
                fontWeight: 700,
                lineHeight: 1.25,
                letterSpacing: "-0.015em",
                color: CREAM,
                marginBottom: "1.25rem",
              }}
            >
              The MEOK Family Tier: Memory, Companions, and the Whole
              Household Held in One Place
            </h2>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.8)",
                marginBottom: "1.25rem",
              }}
            >
              The MEOK Family tier was designed with single-parent families as
              a central use case. It recognises that single parents are not
              managing one person&apos;s life &mdash; they are managing the full
              household, which in practical terms means holding the individual
              context of every child alongside the parent&apos;s own life.
            </p>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.8)",
                marginBottom: "1.5rem",
              }}
            >
              Family memory means that MEOK holds the shared history of the
              household &mdash; not just the parent&apos;s own story, but the
              children&apos;s names, ages, school years, friendships, health
              history, and significant events. A parent never has to remind
              MEOK that their youngest has a nut allergy, or that their eldest
              is currently struggling with a difficult teacher, or that they
              moved house last year. This context is permanently held and
              instantly accessible.
            </p>

            {/* Family tier feature boxes */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginBottom: "1.75rem",
              }}
            >
              {[
                {
                  title: "Individual Child Companions",
                  content:
                    "Each child gets their own age-appropriate AI companion \u2014 curious, safe, school-aware, and calibrated to their developmental stage. For children in single-parent families who may have less adult bandwidth available, having a patient, always-available companion for homework help, emotional expression, creative play, and conversation is genuinely valuable.",
                },
                {
                  title: "Parent\u2019s Private Space Remains Private",
                  content:
                    "The children\u2019s companion profiles are completely separated from the parent\u2019s own MEOK workspace. What a parent says to MEOK is never visible to or accessible by the children\u2019s profiles. The family shares memory of shared facts, not private emotional conversations.",
                },
                {
                  title: "Milestone and Memory Capture",
                  content:
                    "Single parents often carry the entire family memory alone \u2014 there is no partner to remember shared experiences together. MEOK\u2019s family memory captures milestones, first days, funny moments, difficult periods, and achievements, creating a living record that belongs to the family.",
                },
                {
                  title: "Guardian Across the Whole Family",
                  content:
                    "Guardian protection runs across every profile in the family tier. Each child\u2019s digital environment is monitored for harm. The parent receives consolidated alerts without needing to check multiple apps, multiple platforms, or multiple dashboards.",
                },
              ].map((item) => (
                <div key={item.title} style={cardBase}>
                  <div
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 700,
                      color: CREAM,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      lineHeight: 1.7,
                      color: "rgba(245,240,232,0.7)",
                    }}
                  >
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 7: Identity, Guilt, and the Parent as a Person ─────── */}
          <section style={sectionDivider}>
            <h2
              style={{
                fontSize: "1.625rem",
                fontWeight: 700,
                lineHeight: 1.25,
                letterSpacing: "-0.015em",
                color: CREAM,
                marginBottom: "1.25rem",
              }}
            >
              Identity Loss and Guilt: Supporting the Parent as a Person, Not
              Just as a Parent
            </h2>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.8)",
                marginBottom: "1.25rem",
              }}
            >
              One of the most frequently reported experiences among single
              parents is identity loss &mdash; the gradual disappearance of the
              person they were before children, accelerated by the fact that
              there is no partner to mirror back the non-parent parts of who
              they are. Hobbies, career ambitions, social life, and personal
              development are the first casualties of single parenting. Over
              time, the parent can feel as though their entire identity has been
              subsumed by their parental role.
            </p>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.8)",
                marginBottom: "1.25rem",
              }}
            >
              Alongside this is persistent guilt. The single parent who goes
              for a run feels guilty for not being home. The parent who takes
              an evening out feels guilty for the babysitter cost and the missed
              bedtime. The parent who prioritises a promotion feels guilty for
              reduced school pickup frequency. Guilt is the constant background
              noise of single parenting &mdash; and it is largely unwarranted.
            </p>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.8)",
                marginBottom: "1.5rem",
              }}
            >
              MEOK does not perpetuate this guilt. It never implies that a
              parent should be doing more, spending more time with the
              children, making better choices, or managing their household
              differently. It treats the parent as a full person with legitimate
              needs that exist alongside and in tension with parenting &mdash;
              which is the reality.
            </p>

            <div
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: "1rem",
                padding: "1.5rem",
                marginBottom: "1.75rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  color: GOLD,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                Supporting the Whole Person
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.875rem",
                }}
              >
                {[
                  {
                    area: "Career",
                    support:
                      "MEOK supports professional ambition without framing it as something that conflicts with being a good parent.",
                  },
                  {
                    area: "Relationships",
                    support:
                      "Dating, intimacy, and the desire for adult connection are discussed without judgement or implication.",
                  },
                  {
                    area: "Personal goals",
                    support:
                      "Fitness, creativity, education, travel ambitions \u2014 the parent\u2019s own aspirations are held and encouraged.",
                  },
                  {
                    area: "Mental health",
                    support:
                      "Anxiety, depression, burnout \u2014 MEOK provides consistent support and encourages professional care where appropriate.",
                  },
                ].map((item) => (
                  <div
                    key={item.area}
                    style={{
                      borderTop: `2px solid ${GOLD}`,
                      paddingTop: "0.75rem",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 700,
                        color: GOLD,
                        marginBottom: "0.375rem",
                      }}
                    >
                      {item.area}
                    </div>
                    <div
                      style={{
                        fontSize: "0.8125rem",
                        lineHeight: 1.6,
                        color: "rgba(245,240,232,0.65)",
                      }}
                    >
                      {item.support}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── SECTION 8: Financial Pressure ─────────────────────────────── */}
          <section style={sectionDivider}>
            <h2
              style={{
                fontSize: "1.625rem",
                fontWeight: 700,
                lineHeight: 1.25,
                letterSpacing: "-0.015em",
                color: CREAM,
                marginBottom: "1.25rem",
              }}
            >
              Financial Pressure: Navigating Benefits, Maintenance, and Money
              Anxiety Without Support
            </h2>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.8)",
                marginBottom: "1.25rem",
              }}
            >
              The financial reality of single parenting in the UK is stark. The
              Joseph Rowntree Foundation reports that 46% of children in
              single-parent families are in poverty, compared to 26% in
              two-parent families. Single parents are more likely to be in
              insecure employment, to face housing instability, and to
              experience food insecurity. Benefit entitlements are complex,
              frequently change, and require navigation skills that many people
              do not have and cannot easily acquire.
            </p>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.8)",
                marginBottom: "1.5rem",
              }}
            >
              Child maintenance &mdash; money paid by the non-resident parent
              &mdash; is another source of significant stress. The Child
              Maintenance Service (CMS) is notoriously difficult to navigate.
              Payments are often irregular, incorrect, or entirely absent. A
              single parent dealing with CMS while simultaneously managing a
              job, children, a household, and their own mental health is
              operating at a level of cognitive load that would challenge
              anyone.
            </p>

            {/* Financial support feature */}
            <div
              style={{
                background: "rgba(106,170,100,0.04)",
                border: "1px solid rgba(106,170,100,0.15)",
                borderRadius: "1rem",
                padding: "1.5rem",
                marginBottom: "1.75rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  color: GREEN,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                Orion: Your Overnight Financial Research Agent
              </div>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "rgba(245,240,232,0.82)",
                  marginBottom: "1rem",
                }}
              >
                Orion works overnight so that single parents do not have to
                spend evenings on hold or navigating government websites. Ask
                Orion a financial question before bed and receive a clear,
                structured answer by morning.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.625rem",
                }}
              >
                {[
                  "Am I receiving all the benefits I\u2019m entitled to?",
                  "How do I challenge a Universal Credit sanction?",
                  "What is the process for escalating a CMS non-payment case?",
                  "Can I apply for a Discretionary Housing Payment?",
                  "What grants are available for single-parent families in my area?",
                  "How does the benefit cap affect my situation?",
                ].map((q) => (
                  <div
                    key={q}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        color: GREEN,
                        flexShrink: 0,
                        marginTop: "0.1rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      &#9658;
                    </div>
                    <div
                      style={{
                        fontSize: "0.875rem",
                        lineHeight: 1.6,
                        color: "rgba(245,240,232,0.75)",
                      }}
                    >
                      {q}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={warnCard}>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "rgba(245,240,232,0.85)",
                  margin: 0,
                }}
              >
                <strong style={{ color: GOLD }}>Note:</strong> MEOK provides
                information and research support, not regulated financial or
                legal advice. For formal advice on benefits or legal matters,
                organisations such as Citizens Advice, Gingerbread, and Turn2Us
                provide specialist support. MEOK helps you arrive at those
                conversations informed and prepared.
              </p>
            </div>
          </section>

          {/* ── SECTION 9: MEOK Never Judges ──────────────────────────────── */}
          <section style={sectionDivider}>
            <h2
              style={{
                fontSize: "1.625rem",
                fontWeight: 700,
                lineHeight: 1.25,
                letterSpacing: "-0.015em",
                color: CREAM,
                marginBottom: "1.25rem",
              }}
            >
              MEOK Never Judges Your Parenting Choices &mdash; And That Matters
              More Than It Sounds
            </h2>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.8)",
                marginBottom: "1.25rem",
              }}
            >
              Single parents exist in a field of implicit and explicit
              judgement. The judgement comes from school systems that were
              designed around two-parent availability. It comes from benefit
              forms that frame single parenthood as a problem to be solved.
              It comes from extended family members who never quite approve of
              how things are being handled. It comes from social media, from
              parenting books, from well-meaning advice that assumes a structure
              and support system that does not exist.
            </p>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.8)",
                marginBottom: "1.25rem",
              }}
            >
              A parent who lets their child watch more television than the
              guidelines recommend because they are exhausted at 7pm is not a
              bad parent &mdash; they are a human being managing an
              extraordinary load. A parent who relies on convenience food during
              difficult weeks is not failing their children &mdash; they are
              keeping the family functional. A parent who struggles with their
              mental health, their finances, or their relationship with their
              own body is not someone who needs correction &mdash; they need
              support.
            </p>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.8)",
                marginBottom: "1.5rem",
              }}
            >
              MEOK holds none of the judgements that pervade the rest of a
              single parent&apos;s environment. It does not have an opinion about
              screen time, diet, bedtime routines, co-parenting arrangements,
              romantic choices, or any other aspect of how the parent is
              running their family. It supports the choices that have been made
              and helps navigate the consequences and next steps &mdash; which
              is exactly what a trusted partner would do.
            </p>

            {/* No-judgement commitment box */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, rgba(13,12,24,0) 100%)",
                border: "1px solid rgba(201,168,76,0.2)",
                borderRadius: "1rem",
                padding: "1.75rem",
                marginBottom: "1.75rem",
              }}
            >
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: GOLD,
                  marginBottom: "1rem",
                }}
              >
                The MEOK Commitment to Single Parents
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {[
                  "MEOK will never comment on parenting choices unless directly asked for input.",
                  "MEOK will never imply that a different approach would be better.",
                  "MEOK will never pass information about family conversations to third parties.",
                  "MEOK will never use conversation data to train AI models.",
                  "MEOK will always be available \u2014 at 2am, at school pickup, during the commute, after a difficult call with an ex.",
                  "MEOK will always remember what you have shared, so you never start from zero.",
                ].map((commitment) => (
                  <div
                    key={commitment}
                    style={{
                      display: "flex",
                      gap: "0.875rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        color: GOLD,
                        flexShrink: 0,
                        marginTop: "0.1rem",
                      }}
                    >
                      &#10003;
                    </div>
                    <div
                      style={{
                        fontSize: "0.9375rem",
                        lineHeight: 1.65,
                        color: "rgba(245,240,232,0.8)",
                      }}
                    >
                      {commitment}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── SECTION 10: How to Get Started ────────────────────────────── */}
          <section style={sectionDivider}>
            <h2
              style={{
                fontSize: "1.625rem",
                fontWeight: 700,
                lineHeight: 1.25,
                letterSpacing: "-0.015em",
                color: CREAM,
                marginBottom: "1.25rem",
              }}
            >
              How to Get Started With MEOK as a Single Parent
            </h2>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.8)",
                marginBottom: "1.5rem",
              }}
            >
              Getting started with MEOK takes less than five minutes. There is
              no lengthy questionnaire, no clinical intake process, and no
              requirement to explain your family situation before you can access
              any features. You tell MEOK what you want it to know, at your own
              pace, over time.
            </p>

            {/* Steps */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginBottom: "1.75rem",
              }}
            >
              {[
                {
                  step: "01",
                  title: "Create your MEOK account",
                  desc:
                    "Visit meok.ai/birth to create your account through the MEOK birth ceremony \u2014 a brief, private onboarding that establishes your AI companion and begins the memory foundation.",
                },
                {
                  step: "02",
                  title: "Choose your archetype and tier",
                  desc:
                    "Select the archetype that fits your personality and communication style. Choose the Family tier to set up profiles for your children and activate Guardian across the household.",
                },
                {
                  step: "03",
                  title: "Talk about what matters first",
                  desc:
                    "There is no prescribed starting point. Some single parents begin with practical tasks. Others begin with how they are feeling. MEOK meets you where you are.",
                },
                {
                  step: "04",
                  title: "Set up Pioneer for household planning",
                  desc:
                    "Share your weekly structure with Pioneer and let it begin reducing the operational load. The first week typically surfaces several quick wins \u2014 entitlements not being claimed, tasks that can be batched, administrative items that have been deferred.",
                },
                {
                  step: "05",
                  title: "Add your children\u2019s profiles when ready",
                  desc:
                    "There is no rush to configure the full family tier. Add children\u2019s profiles when it feels right. Guardian activates automatically on all profiles once configured.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  style={{
                    display: "flex",
                    gap: "1.25rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "9999px",
                      background: "rgba(201,168,76,0.12)",
                      border: "1px solid rgba(201,168,76,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      color: GOLD,
                      letterSpacing: "0.03em",
                    }}
                  >
                    {item.step}
                  </div>
                  <div style={{ paddingTop: "0.375rem" }}>
                    <div
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        color: CREAM,
                        marginBottom: "0.375rem",
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontSize: "0.875rem",
                        lineHeight: 1.65,
                        color: "rgba(245,240,232,0.65)",
                      }}
                    >
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ SECTION ───────────────────────────────────────────────── */}
          <section style={sectionDivider}>
            <h2
              style={{
                fontSize: "1.625rem",
                fontWeight: 700,
                lineHeight: 1.25,
                letterSpacing: "-0.015em",
                color: CREAM,
                marginBottom: "1.5rem",
              }}
            >
              Frequently Asked Questions
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {[
                {
                  q: "How does MEOK help single parents with emotional exhaustion?",
                  a: "MEOK provides a non-judgemental companion available around the clock. After the children are asleep and the house falls quiet, single parents face the most depleting hours with no partner to debrief with. MEOK holds the conversation, remembers the context, and asks the right questions \u2014 without needing anything in return.",
                },
                {
                  q: "Can MEOK help me manage the overwhelming number of daily decisions?",
                  a: "Yes. Pioneer, MEOK\u2019s productivity agent, takes on task planning, scheduling, priority triage, and research so that single parents are not carrying every operational decision alone. From school logistics to household admin to career decisions, Pioneer reduces the cognitive load of running a household solo.",
                },
                {
                  q: "Why are single parents more vulnerable to scams and how does Guardian help?",
                  a: "Single parents are more targeted because financial stress makes high-return offers more compelling, and there is no second adult to sense-check a suspicious message. MEOK Guardian monitors for known scam patterns \u2014 romance fraud, investment fraud, fake parcel delivery texts, and phishing \u2014 and alerts the parent before money or data is lost.",
                },
                {
                  q: "Does MEOK judge my parenting choices?",
                  a: "Never. MEOK is designed without opinion on parenting choices. Whether navigating co-parenting conflict, questioning a school decision, managing screen time differently to the norm, or making unconventional choices to keep the family stable \u2014 MEOK supports without comment and without the implicit judgement that often comes from family, friends, or institutions.",
                },
                {
                  q: "Can my children have their own AI companions on the MEOK Family tier?",
                  a: "Yes. The MEOK Family tier gives each child their own age-appropriate companion \u2014 a safe, curious, school-aware AI that supports learning, emotional expression, and creative play. Guardian runs alongside every child companion, keeping the parent informed without disrupting the child\u2019s experience. Family memory captures the shared history across everyone in the household.",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  style={{
                    background: CARD_BG,
                    border: `1px solid ${BORDER}`,
                    borderRadius: "0.875rem",
                    padding: "1.25rem 1.5rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 700,
                      color: CREAM,
                      marginBottom: "0.625rem",
                      lineHeight: 1.4,
                    }}
                  >
                    {item.q}
                  </div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      lineHeight: 1.7,
                      color: "rgba(245,240,232,0.7)",
                    }}
                  >
                    {item.a}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA ───────────────────────────────────────────────────────── */}
          <section style={sectionDivider}>
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(19,18,31,0.5) 100%)",
                border: "1px solid rgba(201,168,76,0.25)",
                borderRadius: "1.25rem",
                padding: "2.5rem 2rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: GOLD,
                  marginBottom: "1rem",
                }}
              >
                You Don&apos;t Have to Do This Alone
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.375rem, 3vw, 2rem)",
                  fontWeight: 800,
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  color: CREAM,
                  marginBottom: "1rem",
                }}
              >
                Meet Your MEOK Companion
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: "rgba(245,240,232,0.72)",
                  maxWidth: "32rem",
                  margin: "0 auto 1.75rem",
                }}
              >
                A private, non-judgemental presence that remembers everything,
                helps with the practical load, protects your family from scams,
                and is there at 2am when the house is quiet and you just need
                someone to talk to. No hold music. No judgement. No expiry.
              </p>
              <Link
                href="https://meok.ai/birth"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: GOLD,
                  color: "#0d0c18",
                  fontWeight: 800,
                  fontSize: "1rem",
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                  paddingTop: "0.875rem",
                  paddingBottom: "0.875rem",
                  borderRadius: "9999px",
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                }}
              >
                Begin Your Journey &#8594;
              </Link>
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: MUTED,
                  marginTop: "1rem",
                }}
              >
                Free to start &middot; Family tier available &middot; No credit
                card required to explore
              </p>
            </div>
          </section>

          {/* ── RELATED LINKS ─────────────────────────────────────────────── */}
          <section style={sectionDivider}>
            <h2
              style={{
                fontSize: "1.125rem",
                fontWeight: 700,
                color: CREAM,
                marginBottom: "1.25rem",
              }}
            >
              Related Reading
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.875rem",
              }}
            >
              {[
                {
                  href: "/blog/meok-family-tier-explained",
                  label: "MEOK Family Tier Explained",
                  desc: "How the Family tier works for households of every shape",
                },
                {
                  href: "/blog/meok-guardian-scam-protection",
                  label: "Guardian: Scam Protection",
                  desc:
                    "How MEOK Guardian keeps families safe from digital fraud",
                },
                {
                  href: "/blog/ai-for-parenting-stress",
                  label: "AI for Parenting Stress",
                  desc:
                    "Managing the emotional weight of modern parenthood with AI support",
                },
                {
                  href: "/blog/ai-for-financial-anxiety",
                  label: "AI for Financial Anxiety",
                  desc:
                    "How MEOK helps navigate money stress without shame or judgement",
                },
                {
                  href: "/blog/ai-for-loneliness",
                  label: "AI for Loneliness",
                  desc:
                    "The connection gap in modern life and how MEOK addresses it",
                },
                {
                  href: "/blog/ai-that-remembers-you",
                  label: "AI That Remembers You",
                  desc:
                    "Why sovereign memory changes the AI companion experience entirely",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    background: CARD_BG,
                    border: `1px solid ${BORDER}`,
                    borderRadius: "0.75rem",
                    padding: "1rem",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: GOLD,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {link.label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8125rem",
                      lineHeight: 1.55,
                      color: MUTED,
                    }}
                  >
                    {link.desc}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ── AUTHOR / META FOOTER ──────────────────────────────────────── */}
          <footer
            style={{
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: `1px solid ${BORDER}`,
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "2.75rem",
                  height: "2.75rem",
                  borderRadius: "9999px",
                  background: "rgba(201,168,76,0.15)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.125rem",
                  flexShrink: 0,
                }}
              >
                &#9998;
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: CREAM,
                  }}
                >
                  Nicholas Templeman
                </div>
                <div style={{ fontSize: "0.8125rem", color: MUTED }}>
                  Founder, MEOK AI LABS &middot; Published March 2026
                </div>
              </div>
            </div>
            <p
              style={{
                fontSize: "0.8125rem",
                lineHeight: 1.65,
                color: "rgba(160,152,128,0.75)",
                margin: 0,
              }}
            >
              This article is for informational purposes only and does not
              constitute financial, legal, or clinical advice. For specialist
              support, organisations including{" "}
              <Link
                href="https://www.gingerbread.org.uk"
                style={{ color: MUTED, textDecoration: "underline" }}
              >
                Gingerbread
              </Link>
              ,{" "}
              <Link
                href="https://www.citizensadvice.org.uk"
                style={{ color: MUTED, textDecoration: "underline" }}
              >
                Citizens Advice
              </Link>
              , and{" "}
              <Link
                href="https://www.turn2us.org.uk"
                style={{ color: MUTED, textDecoration: "underline" }}
              >
                Turn2Us
              </Link>{" "}
              provide free, expert guidance for single-parent families in the
              UK.
            </p>
          </footer>
        </div>
      </article>
    </div>
  );
}
