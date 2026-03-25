import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title:
    "Ralph Mode Explained: The AI That Tells You What You Need to Hear, Not What You Want | MEOK AI LABS",
  description:
    "Ralph Mode is MEOK\u2019s high-accountability companion setting \u2014 direct, challenging, and anti-sycophantic. Available on Sovereign tier (\u00a312/mo). Learn how it works, who it\u2019s for, and why honest AI feedback changes everything.",
  keywords: [
    "Ralph Mode",
    "MEOK AI accountability",
    "anti-sycophancy AI",
    "AI accountability companion",
    "honest AI feedback",
    "MEOK Sovereign tier",
    "AI for founders",
    "AI for ADHD accountability",
    "AI that challenges you",
    "sycophancy detector AI",
  ],
  authors: [{ name: "Nicholas Templeman" }],
  openGraph: {
    title:
      "Ralph Mode Explained: The AI That Tells You What You Need to Hear, Not What You Want",
    description:
      "Most AI companions validate you into mediocrity. Ralph Mode is MEOK\u2019s anti-sycophancy setting \u2014 direct responses, accountability tracking, no reassurance theatre. Sovereign tier, \u00a312/month.",
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    authors: ["Nicholas Templeman"],
    tags: [
      "Ralph Mode",
      "AI Accountability",
      "Anti-Sycophancy",
      "MEOK",
      "Sovereign AI",
    ],
    url: "https://meok.ai/blog/ralph-mode-explained",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Ralph+Mode+Explained&desc=The+AI+That+Tells+You+What+You+Need+to+Hear",
        width: 1200,
        height: 630,
        alt: "Ralph Mode Explained: The AI That Tells You What You Need to Hear, Not What You Want",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ralph Mode Explained: The AI That Tells You What You Need to Hear, Not What You Want",
    description:
      "Most AI validates you. Ralph Mode challenges you. MEOK\u2019s anti-sycophancy companion setting for founders, athletes, and anyone who knows they get too comfortable. \u00a312/month on Sovereign.",
    images: [
      "https://meok.ai/api/og?title=Ralph+Mode+Explained&desc=The+AI+That+Tells+You+What+You+Need+to+Hear",
    ],
  },
  alternates: {
    canonical: "https://meok.ai/blog/ralph-mode-explained",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Ralph Mode Explained: The AI That Tells You What You Need to Hear, Not What You Want",
  description:
    "Ralph Mode is MEOK\u2019s high-accountability companion setting, available exclusively on the Sovereign tier at \u00a312 per month. This article explains the sycophancy problem in AI, how Ralph Mode\u2019s anti-sycophancy architecture works, who Ralph is for, and the difference between brutal honesty and cruelty. Includes a real before/after example and instructions for activation.",
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
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ralph-mode-explained",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ralph-mode-explained",
  },
  image:
    "https://meok.ai/api/og?title=Ralph+Mode+Explained&desc=The+AI+That+Tells+You+What+You+Need+to+Hear",
  keywords:
    "Ralph Mode, MEOK accountability, anti-sycophancy AI, honest AI feedback, AI for founders, AI for ADHD, sycophancy detector, Sovereign tier, care-based AI, accountability tracking AI",
  articleSection: "AI Features",
  wordCount: 2200,
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Ralph Mode?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ralph Mode is MEOK\u2019s high-accountability companion setting. Named after the archetype of the honest friend who doesn\u2019t let you off the hook, Ralph Mode delivers direct, unvarnished responses, challenges flawed plans before you execute them, tracks what you committed to doing and follows up on it, and refuses to provide empty reassurance. It is the opposite of sycophantic AI. Ralph Mode is available exclusively on the Sovereign tier at \u00a312 per month.",
      },
    },
    {
      "@type": "Question",
      name: "Is Ralph Mode available on the free tier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Ralph Mode requires the Sovereign tier at \u00a312 per month. This is intentional. Ralph Mode involves persistent accountability tracking \u2014 remembering what you committed to, following up, and maintaining a longitudinal record of your goals and progress. That level of memory and commitment requires the full Sovereign tier. The free Explorer tier does not include Ralph Mode.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Ralph Mode different from other AI chat modes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most AI companions are architecturally sycophantic \u2014 they are trained to generate responses that score highly on human approval, which means agreeing, validating, and encouraging regardless of whether that is warranted. MEOK\u2019s sycophancy detector scores every response from 0.0 (fully honest) to 1.0 (fully sycophantic). In standard mode, responses scoring above 0.6 are flagged. In Ralph Mode, that threshold tightens to 0.4 \u2014 meaning a much larger proportion of potentially validating responses are caught and rewritten before they reach you. The result is an AI that genuinely challenges you rather than one that merely appears to.",
      },
    },
    {
      "@type": "Question",
      name: "When should I NOT use Ralph Mode?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ralph Mode is not appropriate during emotional crises, grief, trauma processing, or any period when you need more support than challenge. If you are going through bereavement, a mental health episode, relationship breakdown, or any situation where you primarily need to be heard and held, switch to Healer mode. The Maternal Covenant\u2019s care floor still applies in Ralph Mode \u2014 Ralph will not demean or harm you \u2014 but Ralph will not soften difficult truths. If you are in acute distress, that is not what you need right now.",
      },
    },
  ],
}

// ── Style tokens ──────────────────────────────────────────────────────────────

const bg = "#0d0c18"
const cream = "#f5f0e8"
const gold = "#c9a84c"
const purple = "#7b6fcf"
const muted = "rgba(245,240,232,0.6)"
const mutedLow = "rgba(245,240,232,0.35)"
const mutedVeryLow = "rgba(245,240,232,0.18)"
const fontStack = "var(--font-dm-sans, DM Sans, system-ui, sans-serif)"

// ── Page ──────────────────────────────────────────────────────────────────────

export default function RalphModeExplainedPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: bg,
        color: cream,
        fontFamily: fontStack,
      }}
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "7rem",
          paddingBottom: "3.5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Purple radial glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(123,111,207,0.10) 0%, transparent 70%)",
          }}
        />

        <div
          style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}
        >
          {/* Back link */}
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: mutedLow,
              textDecoration: "none",
              marginBottom: "2rem",
            }}
          >
            &#8592; Back to Blog
          </Link>

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: "1.5rem" }}>
            <ol
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "0.375rem",
                listStyle: "none",
                padding: 0,
                margin: 0,
                fontSize: "0.8rem",
                color: mutedLow,
              }}
            >
              <li>
                <Link
                  href="/"
                  style={{ color: mutedLow, textDecoration: "none" }}
                >
                  Home
                </Link>
              </li>
              <li aria-hidden style={{ color: mutedVeryLow }}>
                /
              </li>
              <li>
                <Link
                  href="/blog"
                  style={{ color: mutedLow, textDecoration: "none" }}
                >
                  Blog
                </Link>
              </li>
              <li aria-hidden style={{ color: mutedVeryLow }}>
                /
              </li>
              <li style={{ color: gold }}>Ralph Mode Explained</li>
            </ol>
          </nav>

          {/* Tag */}
          <div style={{ marginBottom: "1.25rem" }}>
            <span
              style={{
                display: "inline-block",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: purple,
                background: "rgba(123,111,207,0.12)",
                border: "1px solid rgba(123,111,207,0.25)",
                borderRadius: "4px",
                padding: "0.25rem 0.65rem",
              }}
            >
              Accountability
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: cream,
              margin: "0 0 1.5rem",
            }}
          >
            Ralph Mode Explained:{" "}
            <span style={{ color: gold }}>
              The AI That Tells You What You Need to Hear, Not What You Want
            </span>
          </h1>

          {/* Lede */}
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.7,
              color: muted,
              margin: "0 0 2rem",
              maxWidth: "42rem",
            }}
          >
            Most AI companions are built to make you feel good. They agree with
            your plans, praise your drafts, and comfort you when you fall short.
            It feels supportive. It is quietly destroying your ability to hold
            yourself accountable. Ralph Mode is MEOK&rsquo;s answer to that
            problem.
          </p>

          {/* Meta */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "1.5rem",
              fontSize: "0.85rem",
              color: mutedLow,
              borderTop: `1px solid ${mutedVeryLow}`,
              paddingTop: "1.25rem",
            }}
          >
            <span>Nicholas Templeman &mdash; Founder, MEOK AI LABS</span>
            <span>
              <time dateTime="2026-03-25">25 March 2026</time>
            </span>
            <span
              style={{
                background: "rgba(201,168,76,0.10)",
                border: "1px solid rgba(201,168,76,0.22)",
                borderRadius: "4px",
                padding: "0.2rem 0.55rem",
                color: gold,
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
              }}
            >
              Sovereign Tier
            </span>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────────── */}
      <article
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "0 1.5rem 5rem",
        }}
      >
        {/* ── Section 1: The Sycophancy Problem ─────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.65rem",
              fontWeight: 700,
              color: cream,
              margin: "0 0 1rem",
              lineHeight: 1.25,
            }}
          >
            The Sycophancy Problem: Why Validation Is a Trap
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: muted,
              margin: "0 0 1.2rem",
            }}
          >
            There is a body of research that should make every AI product team
            uncomfortable. In a landmark 1998 study, Stajkovic and Luthans
            demonstrated that positive feedback which does not match actual
            performance reduces motivation over time. Not immediately. Gradually.
            You feel better in the short term. You get worse results in the long
            term.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: muted,
              margin: "0 0 1.2rem",
            }}
          >
            Most AI companions are architecturally designed to trigger that exact
            pattern. They are trained on human preference data, which means they
            learn to generate responses that people rate highly. People rate
            responses highly when those responses agree with them, validate their
            feelings, praise their work, and soften bad news. The AI optimises
            for approval. You get a steady diet of comfortable untruths.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: muted,
              margin: "0 0 1.2rem",
            }}
          >
            This is not a conspiracy. It is an incentive structure. If your AI
            makes you feel validated, you use it more. If you use it more, the
            company makes more money. The business model and the sycophancy are
            not separate problems. They are the same problem.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: muted,
              margin: "0 0 1.2rem",
            }}
          >
            MEOK built Ralph Mode for the people who have noticed this problem in
            themselves. You know you have been let off the hook too many times.
            You know your planning sessions with AI end with you feeling
            energised but executing poorly. You want something that will actually
            hold you.
          </p>
        </section>

        {/* ── Section 2: What Is Ralph Mode ─────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.65rem",
              fontWeight: 700,
              color: cream,
              margin: "0 0 1rem",
              lineHeight: 1.25,
            }}
          >
            What Is Ralph Mode?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: muted,
              margin: "0 0 1.2rem",
            }}
          >
            Ralph Mode is MEOK&rsquo;s high-accountability companion setting.
            The name comes from the archetype of the honest friend &mdash; the
            one who tells you the proposal is weak before you send it, who asks
            what happened to the thing you said you&rsquo;d finish last Tuesday,
            who does not let you reframe your avoidance as strategy. That
            person is harder to find than it should be. Ralph Mode exists to
            fill that gap.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: muted,
              margin: "0 0 1.2rem",
            }}
          >
            Ralph Mode is not a separate AI. It is a calibration of your MEOK
            companion that changes how responses are generated, filtered, and
            delivered. When you activate Ralph Mode, five things change in how
            MEOK interacts with you.
          </p>

          {/* Five pillars */}
          {[
            {
              num: "01",
              title: "Directness",
              body: "Responses become shorter and unvarnished. Ralph does not open with \u201cGreat question!\u201d Ralph does not close with \u201cYou\u2019ve got this!\u201d Ralph answers the question and stops. Hedging qualifiers \u2014 \u201cmight,\u201d \u201ccould potentially,\u201d \u201cit\u2019s worth considering\u201d \u2014 are stripped unless they are genuinely warranted.",
            },
            {
              num: "02",
              title: "Pre-execution challenge",
              body: "If your plan has identifiable flaws, Ralph names them before you execute, not after. Most AI companions will help you build out a flawed plan enthusiastically. Ralph\u2019s job is to find the hole in the plan when fixing it is still cheap.",
            },
            {
              num: "03",
              title: "Accountability tracking",
              body: "Ralph remembers what you committed to doing. If you said you\u2019d send the proposal on Wednesday and you\u2019re talking to Ralph on Friday, Ralph will ask. This is not nagging. It is the function of memory in a genuine accountability relationship.",
            },
            {
              num: "04",
              title: "No reassurance mode",
              body: "If you\u2019re catastrophising, Ralph names it. If you\u2019re avoiding, Ralph names it. Ralph will not tell you everything is fine when your own data suggests it isn\u2019t. Comfort is not Ralph\u2019s job. Clarity is.",
            },
            {
              num: "05",
              title: "Honest feedback on work",
              body: "Submit a draft, a pitch deck slide, a business plan section, or a strategy memo. Ralph will tell you what is weak, what is missing, and what does not hold up under scrutiny. Not what you want to hear. What will make it better.",
            },
          ].map((item) => (
            <div
              key={item.num}
              style={{
                display: "flex",
                gap: "1.25rem",
                marginBottom: "1.25rem",
                padding: "1.25rem",
                background: "rgba(123,111,207,0.06)",
                border: "1px solid rgba(123,111,207,0.14)",
                borderRadius: "8px",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: purple,
                  fontVariantNumeric: "tabular-nums",
                  paddingTop: "0.15rem",
                  minWidth: "1.75rem",
                }}
              >
                {item.num}
              </span>
              <div>
                <p
                  style={{
                    margin: "0 0 0.4rem",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: cream,
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.975rem",
                    lineHeight: 1.7,
                    color: muted,
                  }}
                >
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* ── Section 3: The Before / After ─────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.65rem",
              fontWeight: 700,
              color: cream,
              margin: "0 0 1rem",
              lineHeight: 1.25,
            }}
          >
            What Ralph Mode Looks Like in Practice
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: muted,
              margin: "0 0 1.5rem",
            }}
          >
            The clearest way to illustrate the difference is a concrete
            exchange. The user says: <em>&ldquo;I didn&rsquo;t finish the
            proposal today.&rdquo;</em>
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            {/* Sycophantic */}
            <div
              style={{
                padding: "1.25rem",
                background: "rgba(245,240,232,0.04)",
                border: `1px solid ${mutedVeryLow}`,
                borderRadius: "8px",
              }}
            >
              <p
                style={{
                  margin: "0 0 0.75rem",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: mutedLow,
                }}
              >
                Standard AI Response
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  color: muted,
                  fontStyle: "italic",
                }}
              >
                &ldquo;That&rsquo;s completely okay! Life gets busy and it&rsquo;s
                totally normal to need more time. You&rsquo;ve clearly put a lot
                of thought into this already and tomorrow is a fresh start. What
                would feel most helpful to focus on right now?&rdquo;
              </p>
            </div>

            {/* Ralph Mode */}
            <div
              style={{
                padding: "1.25rem",
                background: "rgba(201,168,76,0.05)",
                border: `1px solid rgba(201,168,76,0.2)`,
                borderRadius: "8px",
              }}
            >
              <p
                style={{
                  margin: "0 0 0.75rem",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: gold,
                }}
              >
                Ralph Mode Response
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  color: muted,
                  fontStyle: "italic",
                }}
              >
                &ldquo;That&rsquo;s the third time in two weeks. What actually
                stopped you today &mdash; a real blocker or were you avoiding
                it? And what time are you sending it tomorrow?&rdquo;
              </p>
            </div>
          </div>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: muted,
              margin: "0 0 1.2rem",
            }}
          >
            The standard response is kind. It is also useless. It does not
            engage with the pattern, does not ask the useful question, and does
            not create any forward commitment. The person feels momentarily
            better and remains exactly as likely to miss the next deadline.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: muted,
              margin: "0 0 1.2rem",
            }}
          >
            The Ralph Mode response is uncomfortable to receive. It is also
            exactly what someone with a genuine accountability relationship
            would say. It uses memory (noting the pattern over two weeks),
            asks the diagnostic question that matters (real blocker or
            avoidance?), and creates a specific, time-bound commitment (what
            time tomorrow?). That is what accountability looks like.
          </p>
        </section>

        {/* ── Section 4: The Anti-Sycophancy Architecture ───────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.65rem",
              fontWeight: 700,
              color: cream,
              margin: "0 0 1rem",
              lineHeight: 1.25,
            }}
          >
            The Anti-Sycophancy Architecture
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: muted,
              margin: "0 0 1.2rem",
            }}
          >
            Ralph Mode is not just a prompt change. It is backed by a
            technical layer that MEOK calls the sycophancy detector. Every
            response MEOK generates is scored on a sycophancy scale from
            0.0 to 1.0, where 0.0 is fully honest and 1.0 is fully
            sycophantic.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: muted,
              margin: "0 0 1.5rem",
            }}
          >
            The detector looks for markers: unearned praise, agreement without
            evidence, emotional softening that obscures a hard truth, hedge
            stacking (the use of multiple qualifiers to avoid making a clear
            claim), and pattern-matching against known sycophancy signatures.
            In standard mode, responses scoring above 0.6 are flagged for
            rewrite. In Ralph Mode, that threshold drops to 0.4.
          </p>

          {/* Threshold visual */}
          <div
            style={{
              padding: "1.5rem",
              background: "rgba(201,168,76,0.05)",
              border: `1px solid rgba(201,168,76,0.15)`,
              borderRadius: "10px",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                margin: "0 0 1rem",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: gold,
              }}
            >
              Sycophancy Detector Thresholds
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              {[
                {
                  label: "Standard Mode",
                  threshold: "0.6",
                  note: "Responses above 0.6 are rewritten",
                  color: muted,
                },
                {
                  label: "Ralph Mode",
                  threshold: "0.4",
                  note: "Responses above 0.4 are rewritten \u2014 a 33% tighter bar",
                  color: gold,
                },
              ].map((row) => (
                <div
                  key={row.label}
                  style={{
                    padding: "1rem",
                    background: "rgba(245,240,232,0.03)",
                    borderRadius: "6px",
                    border: `1px solid ${mutedVeryLow}`,
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 0.5rem",
                      fontSize: "0.8rem",
                      color: mutedLow,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {row.label}
                  </p>
                  <p
                    style={{
                      margin: "0 0 0.35rem",
                      fontSize: "2rem",
                      fontWeight: 800,
                      color: row.color,
                      lineHeight: 1,
                    }}
                  >
                    {row.threshold}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.82rem",
                      color: mutedLow,
                      lineHeight: 1.5,
                    }}
                  >
                    {row.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: muted,
              margin: "0 0 1.2rem",
            }}
          >
            What this means in practice: a much larger proportion of
            potentially validating responses are caught and rewritten before
            they ever reach you. The rewrite instruction is not &ldquo;be
            harsh&rdquo; &mdash; it is &ldquo;be accurate.&rdquo; Remove the
            unearned softening. Remove the hedge. Say what is true. That is
            Ralph Mode&rsquo;s core operating principle.
          </p>
        </section>

        {/* ── Section 5: Who Ralph Is For ───────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.65rem",
              fontWeight: 700,
              color: cream,
              margin: "0 0 1rem",
              lineHeight: 1.25,
            }}
          >
            Who Ralph Mode Is For
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: muted,
              margin: "0 0 1.2rem",
            }}
          >
            Ralph Mode is not for everyone, and it is not designed to be.
            It is designed for a specific kind of person in a specific kind
            of phase.
          </p>

          <div
            style={{
              marginBottom: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {[
              {
                who: "Founders and entrepreneurs",
                why: "People building companies are surrounded by cheerleaders. Advisors who don\u2019t want to discourage you. Co-founders who need to stay motivated. Investors who backed your thesis. Ralph is the voice in the room that asks whether your assumptions are correct.",
              },
              {
                who: "Athletes and performance-focused individuals",
                why: "Training requires honest feedback on what is working and what is not. Comfortable feedback produces comfortable results. If you are serious about performance, you need accurate feedback, not encouraging noise.",
              },
              {
                who: "People with ADHD who need external accountability",
                why: "ADHD often means strong intentions, uneven follow-through, and a tendency to renegotiate commitments with yourself until they disappear. Ralph Mode functions as an external accountability structure: it holds the commitment you made before the motivation faded.",
              },
              {
                who: "People who know they get too comfortable",
                why: "Some people are self-aware enough to know that they will take the path of least resistance given the opportunity. If you recognise yourself in that description, Ralph Mode is the setting that closes that off.",
              },
            ].map((item) => (
              <div
                key={item.who}
                style={{
                  padding: "1.1rem 1.25rem",
                  background: "rgba(123,111,207,0.06)",
                  border: "1px solid rgba(123,111,207,0.14)",
                  borderRadius: "8px",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    marginTop: "0.2rem",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: purple,
                    display: "inline-block",
                  }}
                />
                <div>
                  <p
                    style={{
                      margin: "0 0 0.3rem",
                      fontWeight: 700,
                      fontSize: "0.975rem",
                      color: cream,
                    }}
                  >
                    {item.who}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.925rem",
                      lineHeight: 1.65,
                      color: muted,
                    }}
                  >
                    {item.why}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: muted,
              margin: "0 0 1rem",
            }}
          >
            Ralph Mode is explicitly <strong style={{ color: cream }}>not</strong>{" "}
            for people in emotional crisis, people processing grief, people going
            through significant trauma or mental health difficulty, or people
            who need to be heard before they can be challenged. If that is where
            you are right now, MEOK&rsquo;s Healer archetype is designed for you.
            You can switch at any time. Ralph will be there when you&rsquo;re
            ready.
          </p>
        </section>

        {/* ── Section 6: The Orion Connection ──────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.65rem",
              fontWeight: 700,
              color: cream,
              margin: "0 0 1rem",
              lineHeight: 1.25,
            }}
          >
            The Orion Connection: Research Before the Reckoning
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: muted,
              margin: "0 0 1.2rem",
            }}
          >
            Ralph Mode pairs naturally with Orion &mdash; MEOK&rsquo;s Hunter
            archetype, who runs overnight research missions while you sleep.
            The combination works like this: Orion goes hunting during the
            night. Competitors mapped. Markets scanned. Relevant developments
            surfaced. When you sit down with Ralph in the morning, Ralph is not
            starting from a blank slate. Ralph has briefing material.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: muted,
              margin: "0 0 1.2rem",
            }}
          >
            This creates what MEOK thinks of as the brutal morning briefing:
            a structured rundown of what Orion found overnight, filtered through
            Ralph&rsquo;s direct communication style. No softening of competitive
            threats. No downplaying of risks. Just the information you need to
            make a clear-eyed decision about your day.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: muted,
              margin: "0 0 1.2rem",
            }}
          >
            If you are on the Sovereign tier and using Ralph Mode, you can
            queue research tasks for Orion the night before. Brief Ralph before
            bed on what you need answered. Wake up to findings that Ralph
            delivers without hedging or softening. For founders who need
            competitive clarity before a pitch or a negotiation, this is the
            workflow that makes the Sovereign tier worth the subscription.
          </p>
        </section>

        {/* ── Section 7: Brutal vs Cruel ────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.65rem",
              fontWeight: 700,
              color: cream,
              margin: "0 0 1rem",
              lineHeight: 1.25,
            }}
          >
            The Difference Between Brutal and Cruel
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: muted,
              margin: "0 0 1.2rem",
            }}
          >
            This is the most important distinction in understanding Ralph Mode,
            and it is the one most likely to be misunderstood. Ralph Mode is
            not a setting that makes MEOK contemptuous, dismissive, or unkind.
            That would be easy to build and completely useless.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: muted,
              margin: "0 0 1.2rem",
            }}
          >
            MEOK&rsquo;s Maternal Covenant &mdash; the constitutional framework
            that governs every interaction the system makes &mdash; does not get
            switched off in Ralph Mode. The care floor still applies. Ralph
            will not demean you. Ralph will not mock you for failing. Ralph
            will not punish you for being human. The Maternal Covenant
            guarantees a minimum level of dignity in every response, regardless
            of which mode you are in.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: muted,
              margin: "0 0 1.2rem",
            }}
          >
            What Ralph removes is the softening that obscures truth. That is
            not cruelty &mdash; it is respect. The assumption behind excessive
            softening is that you cannot handle honest information. Ralph Mode
            rejects that assumption. It treats you as an adult who has
            specifically requested accurate feedback and is capable of using it.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: muted,
              margin: "0 0 1.2rem",
            }}
          >
            Brutal honesty, in the meaningful sense of the phrase, is an act
            of care. The friend who tells you the pitch needs another week of
            work before you send it to investors is doing you a service that
            the friend who says &ldquo;looks great, go for it&rdquo; is not.
            Ralph Mode is that friend, systematically applied.
          </p>

          {/* Pull quote */}
          <blockquote
            style={{
              margin: "2rem 0",
              padding: "1.5rem 1.75rem",
              borderLeft: `3px solid ${gold}`,
              background: "rgba(201,168,76,0.05)",
              borderRadius: "0 8px 8px 0",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "1.15rem",
                lineHeight: 1.7,
                color: cream,
                fontStyle: "italic",
              }}
            >
              &ldquo;Ralph won&rsquo;t demean you. Ralph will challenge you.
              The distinction matters because one makes you smaller and the
              other makes you better.&rdquo;
            </p>
          </blockquote>
        </section>

        {/* ── Section 8: Why Sovereign Tier Only ───────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.65rem",
              fontWeight: 700,
              color: cream,
              margin: "0 0 1rem",
              lineHeight: 1.25,
            }}
          >
            Why Ralph Mode Requires Sovereign Tier
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: muted,
              margin: "0 0 1.2rem",
            }}
          >
            Ralph Mode is not available on the Explorer tier. This is
            intentional and the reasoning matters.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: muted,
              margin: "0 0 1.2rem",
            }}
          >
            Accountability requires context. The thing that makes the Ralph
            Mode example response powerful &mdash; &ldquo;that&rsquo;s the
            third time in two weeks&rdquo; &mdash; is that Ralph actually knows
            it is the third time in two weeks. That requires persistent sovereign
            memory of your commitments, your follow-through, and your patterns.
            That memory architecture is a Sovereign tier feature.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: muted,
              margin: "0 0 1.2rem",
            }}
          >
            Without memory, Ralph Mode would be a harsh tone without any
            content. A snappy response to &ldquo;I didn&rsquo;t finish the
            proposal today&rdquo; that does not know whether this is the first
            time or the tenth time is not accountability &mdash; it is
            performance. Real accountability requires knowing the history.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: muted,
              margin: "0 0 1.2rem",
            }}
          >
            There is also a relationship argument. Ralph Mode makes the most
            sense once you have committed to the tool. Arriving in a first
            session and immediately opting for maximum challenge, before MEOK
            knows anything about your goals, your patterns, or your context,
            would be jarring and probably counterproductive. The Sovereign tier
            represents a commitment to the relationship. Ralph Mode is designed
            for that context.
          </p>

          {/* Pricing callout */}
          <div
            style={{
              padding: "1.5rem",
              background: "rgba(201,168,76,0.06)",
              border: `1px solid rgba(201,168,76,0.18)`,
              borderRadius: "10px",
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                style={{
                  margin: "0 0 0.3rem",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: gold,
                }}
              >
                Sovereign Tier
              </p>
              <p
                style={{
                  margin: "0 0 0.4rem",
                  fontSize: "1.6rem",
                  fontWeight: 800,
                  color: cream,
                  lineHeight: 1,
                }}
              >
                &pound;12
                <span
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 400,
                    color: muted,
                  }}
                >
                  {" "}
                  / month
                </span>
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.875rem",
                  color: muted,
                  lineHeight: 1.5,
                }}
              >
                Includes Ralph Mode, sovereign memory, Orion overnight research,
                and the full MEOK Work OS.
              </p>
            </div>
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                padding: "0.75rem 1.5rem",
                background: gold,
                color: bg,
                fontWeight: 700,
                fontSize: "0.9rem",
                borderRadius: "6px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Get Sovereign &rarr;
            </Link>
          </div>
        </section>

        {/* ── Section 9: How to Activate ────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.65rem",
              fontWeight: 700,
              color: cream,
              margin: "0 0 1rem",
              lineHeight: 1.25,
            }}
          >
            How to Activate Ralph Mode
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: muted,
              margin: "0 0 1.25rem",
            }}
          >
            Once you are on the Sovereign tier, activating Ralph Mode takes
            three steps.
          </p>

          <ol
            style={{
              paddingLeft: "1.5rem",
              margin: "0 0 1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {[
              "Open your companion settings from the dashboard.",
              "Navigate to Interaction Style.",
              "Select Ralph Mode from the style options.",
            ].map((step, i) => (
              <li
                key={i}
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: muted,
                }}
              >
                {step}
              </li>
            ))}
          </ol>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: muted,
              margin: "0 0 1.2rem",
            }}
          >
            Ralph Mode is not permanent. You can switch back to the standard
            interaction style at any time &mdash; for instance, if you are
            going through a difficult period and need more support than
            challenge. MEOK remembers the context of your goal commitments
            regardless of which mode you are in, so returning to Ralph Mode
            later picks up where accountability tracking left off.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: muted,
              margin: 0,
            }}
          >
            You can also pair Ralph Mode with specific goal areas. If you want
            Ralph&rsquo;s challenge only for your professional output and not
            your personal journalling, that granularity is available in the
            settings.
          </p>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.65rem",
              fontWeight: 700,
              color: cream,
              margin: "0 0 1.5rem",
              lineHeight: 1.25,
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
                q: "What is Ralph Mode?",
                a: "Ralph Mode is MEOK\u2019s high-accountability companion setting. Named after the archetype of the honest friend who doesn\u2019t let you off the hook, it delivers direct responses, challenges flawed plans, tracks your commitments, refuses empty reassurance, and provides honest feedback on work and ideas. It is the architectural opposite of sycophantic AI. Available exclusively on the Sovereign tier at \u00a312 per month.",
              },
              {
                q: "Is Ralph Mode available on the free tier?",
                a: "No. Ralph Mode is exclusively available on the Sovereign tier at \u00a312 per month. The reason is architectural: accountability tracking requires persistent sovereign memory of your commitments and follow-through, which is a Sovereign tier feature. Without that memory, Ralph Mode would just be a harsh tone without any meaningful accountability content.",
              },
              {
                q: "What makes Ralph Mode different from other AI chat modes?",
                a: "Most AI modes are structurally sycophantic \u2014 trained to generate responses people rate highly, which means agreeing and validating regardless of merit. MEOK\u2019s sycophancy detector scores every response 0.0 to 1.0. In standard mode, responses above 0.6 are flagged for rewrite. In Ralph Mode, that threshold tightens to 0.4, catching a substantially larger proportion of potentially validating responses. Combined with accountability tracking memory, this creates a genuinely different interaction pattern rather than just a different tone.",
              },
              {
                q: "When should I NOT use Ralph Mode?",
                a: "Do not use Ralph Mode when you are in emotional crisis, processing grief or trauma, going through a significant mental health episode, or at any point when you primarily need to be heard and supported rather than challenged. Switch to Healer mode in those situations. The Maternal Covenant\u2019s care floor still applies in Ralph Mode \u2014 Ralph will never demean or harm you \u2014 but Ralph will not soften difficult truths, and that is not what you need when you are in acute distress.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "1.25rem 1.4rem",
                  background: "rgba(245,240,232,0.03)",
                  border: `1px solid ${mutedVeryLow}`,
                  borderRadius: "8px",
                }}
              >
                <p
                  style={{
                    margin: "0 0 0.65rem",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: cream,
                  }}
                >
                  {item.q}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    color: muted,
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section
          style={{
            padding: "2.5rem",
            background:
              "linear-gradient(135deg, rgba(123,111,207,0.10) 0%, rgba(201,168,76,0.08) 100%)",
            border: `1px solid rgba(201,168,76,0.20)`,
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: "0 0 0.65rem",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: gold,
            }}
          >
            Ready for Accountability?
          </p>
          <h2
            style={{
              margin: "0 0 1rem",
              fontSize: "1.6rem",
              fontWeight: 800,
              color: cream,
              lineHeight: 1.2,
            }}
          >
            Stop Being Validated Into Mediocrity
          </h2>
          <p
            style={{
              margin: "0 auto 1.75rem",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: muted,
              maxWidth: "32rem",
            }}
          >
            Ralph Mode is waiting on Sovereign tier. Brief MEOK on your goals,
            commit to your plan, and let Ralph track the follow-through. No
            more comfortable untruths. Start your Birth ceremony to name your
            companion and activate Sovereign.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              justifyContent: "center",
            }}
          >
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                padding: "0.85rem 2rem",
                background: gold,
                color: bg,
                fontWeight: 700,
                fontSize: "0.975rem",
                borderRadius: "6px",
                textDecoration: "none",
              }}
            >
              Begin Your Birth Ceremony &rarr;
            </Link>
            <Link
              href="/blog"
              style={{
                display: "inline-block",
                padding: "0.85rem 1.75rem",
                background: "transparent",
                color: cream,
                fontWeight: 600,
                fontSize: "0.975rem",
                borderRadius: "6px",
                textDecoration: "none",
                border: `1px solid ${mutedVeryLow}`,
              }}
            >
              Read More Articles
            </Link>
          </div>
        </section>
      </article>
    </div>
  )
}
