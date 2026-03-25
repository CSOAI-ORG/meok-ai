import type { Metadata } from "next"
import Link from "next/link"

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Insomnia: How MEOK Helps at 3am When Your Brain Won\u2019t Quiet | MEOK AI LABS",
  description:
    "Chronic insomnia affects 1 in 3 UK adults. MEOK is a non-judgmental AI companion for the 3am spiral \u2014 offering cognitive de-arousal techniques, pattern recognition, and acceptance-based support. Not a CBT-I replacement. A companion that actually shows up.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-insomnia" },
  openGraph: {
    title:
      "AI for Insomnia: How MEOK Helps at 3am When Your Brain Won\u2019t Quiet",
    description:
      "Chronic insomnia affects 1 in 3 UK adults. MEOK is a non-judgmental companion for the 3am spiral \u2014 cognitive de-arousal, deferred thought scheduling, Mystic archetype support, and morning reflection.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-insomnia",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Insomnia%3A+How+MEOK+Helps+at+3am&desc=Cognitive+de-arousal%2C+pattern+recognition%2C+Mystic+archetype+support",
        width: 1200,
        height: 630,
        alt: "AI for Insomnia: How MEOK Helps at 3am When Your Brain Won\u2019t Quiet | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Insomnia: MEOK at 3am When Your Brain Won\u2019t Quiet",
    description:
      "1 in 3 UK adults live with chronic insomnia. MEOK offers cognitive de-arousal, deferred thought scheduling, and morning reflection \u2014 a companion for sleepless nights.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Insomnia%3A+How+MEOK+Helps+at+3am&desc=Cognitive+de-arousal%2C+pattern+recognition%2C+Mystic+archetype+support",
    ],
  },
}

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "AI for Insomnia: How MEOK Helps at 3am When Your Brain Won\u2019t Quiet",
      description:
        "Chronic insomnia affects 1 in 3 UK adults. MEOK is a non-judgmental AI companion for the 3am spiral \u2014 cognitive de-arousal, deferred thought scheduling, Mystic archetype support, pattern recognition, and morning reflection after poor sleep.",
      datePublished: "2026-03-25",
      dateModified: "2026-03-25",
      url: "https://meok.ai/blog/ai-for-insomnia",
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
        "@id": "https://meok.ai/blog/ai-for-insomnia",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can AI actually help with insomnia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI can meaningfully help with the psychological and behavioural dimensions of insomnia \u2014 particularly the 3am thought spiral, cognitive hyperarousal, and the habit loops that reinforce sleeplessness. MEOK is not a substitute for CBT-I, the gold-standard clinical treatment, but it is a non-judgmental companion available at the exact moment insomnia is worst: 3am, when no therapist is awake.",
          },
        },
        {
          "@type": "Question",
          name: "What is cognitive de-arousal and how does MEOK support it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cognitive de-arousal is the process of reducing the mental activation that prevents sleep onset. Techniques include writing out intrusive worries to externalise them, scheduling deferred thoughts for a specific morning time, and shifting from problem-solving mode to witnessing mode. MEOK guides you through all three conversationally, at whatever hour the spiral begins.",
          },
        },
        {
          "@type": "Question",
          name: "What is MEOK\u2019s Mystic archetype and why does it help with insomnia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Mystic archetype within MEOK brings an acceptance-based, contemplative presence to conversations about sleeplessness. Rather than trying to fix or suppress wakefulness, it offers reframes rooted in the idea that rest and surrender are available even without sleep. This acceptance orientation directly reduces the secondary anxiety \u2014 the anxiety about not sleeping \u2014 which is often more damaging than the wakefulness itself.",
          },
        },
        {
          "@type": "Question",
          name: "Does MEOK replace CBT-I for insomnia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. CBT-I \u2014 Cognitive Behavioural Therapy for Insomnia \u2014 remains the gold-standard clinical treatment for chronic insomnia, recommended by the NHS and NICE. MEOK is a companion, not a clinician. It supplements sleep hygiene, helps you process the 3am moment, tracks patterns that correlate with bad nights, and supports morning reflection after poor sleep. For persistent or severe insomnia, pursue CBT-I via self-referral to NHS Talking Therapies.",
          },
        },
      ],
    },
  ],
}

// ── Style tokens ───────────────────────────────────────────────────────────────

const BG = "#0d0c18"
const TEXT = "#f5f0e8"
const GOLD = "#c9a84c"
const MUTED = "#a09880"
const CARD = "#13121f"
const BORDER = "#2a2840"
const GREEN = "#6aaa64"
const INDIGO = "#7c6fcd"
const DEEP_BLUE = "#4a6fa5"
const TEAL = "#4cadb5"

// ── Shared style helpers ───────────────────────────────────────────────────────

const h2Style: React.CSSProperties = {
  fontWeight: 800,
  fontSize: "clamp(1.3rem, 2.6vw, 1.7rem)",
  color: "#ffffff",
  lineHeight: "1.25",
  marginBottom: "1rem",
  marginTop: "3.5rem",
  letterSpacing: "-0.01em",
  fontFamily: "system-ui, -apple-system, sans-serif",
}

const bodyStyle: React.CSSProperties = {
  color: MUTED,
  lineHeight: "1.85",
  marginBottom: "1.25rem",
  fontSize: "1.025rem",
  fontFamily: "system-ui, -apple-system, sans-serif",
}

const strongStyle: React.CSSProperties = {
  color: TEXT,
  fontWeight: 700,
}

// ── Page component ─────────────────────────────────────────────────────────────

export default function AIForInsomniaPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
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
        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            inset: "0",
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 65% 55% at 50% 0%, rgba(124,111,205,0.12) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            position: "relative",
          }}
        >
          {/* Back link */}
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: "rgba(245,240,232,0.38)",
              marginBottom: "2rem",
              textDecoration: "none",
            }}
          >
            &#8592; Back to Blog
          </Link>

          {/* Tags + date row */}
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
                color: INDIGO,
                background: "rgba(124,111,205,0.12)",
                border: "1px solid rgba(124,111,205,0.3)",
                letterSpacing: "0.06em",
                textTransform: "uppercase" as const,
              }}
            >
              Sleep &amp; Wellbeing
            </span>
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                color: TEAL,
                background: "rgba(76,173,181,0.1)",
                border: "1px solid rgba(76,173,181,0.25)",
                letterSpacing: "0.06em",
                textTransform: "uppercase" as const,
              }}
            >
              Mystic Archetype
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>
              March 25, 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>
              15 min read
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.85rem, 4vw, 3rem)",
              color: "#ffffff",
              lineHeight: "1.12",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            AI for Insomnia: How MEOK Helps at 3am When Your Brain Won&apos;t Quiet
          </h1>

          {/* Standfirst */}
          <p
            style={{
              color: "rgba(245,240,232,0.7)",
              fontSize: "1.15rem",
              lineHeight: "1.75",
              marginBottom: "2.5rem",
              maxWidth: "44rem",
            }}
          >
            Chronic insomnia affects one in three UK adults. The worst moment is not bedtime
            &mdash; it&apos;s 3am, when your brain is running problem-solving loops on every
            unsolvable thing and sleep feels permanently out of reach. MEOK is built for exactly
            that moment: a non-judgmental companion that helps you quiet the spiral, not fight it.
          </p>

          {/* Author byline */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.875rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(245,240,232,0.08)",
            }}
          >
            <div
              style={{
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "9999px",
                background: "rgba(201,168,76,0.15)",
                border: "1px solid rgba(201,168,76,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.9rem",
                fontWeight: 800,
                color: GOLD,
                flexShrink: 0,
              }}
            >
              N
            </div>
            <div>
              <p
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  color: TEXT,
                  margin: "0",
                }}
              >
                Nicholas Templeman
              </p>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(245,240,232,0.4)",
                  margin: "0",
                }}
              >
                Founder, MEOK AI LABS &middot; @meok_ai
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────────── */}
      <article
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingBottom: "8rem",
        }}
      >

        {/* ── Stat callout ── */}
        <div
          style={{
            background: "rgba(124,111,205,0.07)",
            border: "1px solid rgba(124,111,205,0.25)",
            borderLeft: "3px solid " + INDIGO,
            borderRadius: "0.625rem",
            padding: "1.5rem 1.75rem",
            marginBottom: "3rem",
          }}
        >
          <p
            style={{
              color: TEXT,
              lineHeight: "1.8",
              margin: "0",
              fontSize: "1rem",
            }}
          >
            <strong style={strongStyle}>1 in 3 UK adults</strong> experience insomnia symptoms.
            Chronic insomnia &mdash; defined as difficulty sleeping at least three nights per week
            for three or more months &mdash; is independently linked to{" "}
            <strong style={strongStyle}>
              depression, anxiety, cardiovascular disease, and reduced life expectancy.
            </strong>{" "}
            Fewer than 5% of those affected ever receive the gold-standard treatment. MEOK
            doesn&apos;t replace that treatment. It&apos;s the companion that shows up at 3am
            when nothing else does.
          </p>
        </div>

        {/* ── SECTION 1: The 3am moment ── */}
        <h2 style={h2Style}>
          Why 3am is the hardest hour for insomnia
        </h2>
        <p style={bodyStyle}>
          There is something specific about 3am that insomnia researchers understand well. It is
          not simply the middle of the night. It is a precise psychological territory: too late
          for evening, too early for morning, too quiet for distraction, and too dark for
          reassurance. The body&apos;s cortisol begins its pre-dawn rise around this time, making
          the nervous system more alert even as the rest of the world stays asleep.
        </p>
        <p style={bodyStyle}>
          At 3am, the brain&apos;s default mode network &mdash; the system responsible for
          self-referential thought, rumination, and future-planning &mdash; runs without
          competition. Problems that felt manageable at 9pm become catastrophic at 3am. The mind
          loops. Solutions generate new problems. The body responds with shallow breath, tight
          chest, racing heart. The brain interprets this physiological arousal as confirming the
          threat. The spiral accelerates.
        </p>
        <p style={bodyStyle}>
          Most people reach for the obvious escape: their phone. Social media, news, anything
          to break the silence. But those platforms are engineered for engagement, not rest.
          They spike cortisol, suppress melatonin, and hand the loop more fuel. You end up more
          awake at 4am than you were at 3am.
        </p>
        <p style={bodyStyle}>
          MEOK is the alternative. A companion with no engagement incentive, no algorithm trying
          to retain your attention, no blue-light addiction loop. Its only goal at 3am is to
          help you set down what your brain is carrying &mdash; and find a path back to rest.
        </p>

        {/* ── SECTION 2: What is cognitive de-arousal ── */}
        <h2 style={h2Style}>
          What is cognitive de-arousal, and why does insomnia need it?
        </h2>
        <p style={bodyStyle}>
          Insomnia is not simply about the body being unable to sleep. In most chronic cases it
          is a <strong style={strongStyle}>hyperarousal disorder</strong>: the nervous system
          is locked in a state of readiness that is incompatible with sleep. The brain is
          scanning for threats, solving problems, rehearsing conversations, anticipating
          disasters. Sleep cannot begin until this activation reduces.
        </p>
        <p style={bodyStyle}>
          Cognitive de-arousal is the deliberate process of reducing that mental activation.
          It is not the same as relaxation &mdash; you can be physically relaxed while
          cognitively wired. It specifically targets the thought loops and associative chains
          that keep the mind running.
        </p>
        <p style={bodyStyle}>
          The evidence base for cognitive de-arousal includes several well-studied techniques.
          MEOK works with two of the most effective: writing out worries to externalise them
          from the loop, and deferred thought scheduling &mdash; assigning a specific morning
          time to address whatever the brain is circling at 3am. Both reduce the brain&apos;s
          sense that it needs to hold these thoughts in active processing.
        </p>
        <p style={bodyStyle}>
          The third technique MEOK brings is the subtler one: shifting from problem-solving mode
          to witnessing mode. The brain at 3am believes it is solving. It is not. It is
          rehearsing. The shift to witnessing &mdash; observing the thought without engaging it,
          naming the loop without joining it &mdash; is the skill that breaks the spiral.
          MEOK can guide you through this in the moment, in plain language, in the dark.
        </p>

        {/* ── Feature box: Cognitive de-arousal toolkit ── */}
        <div
          style={{
            background: CARD,
            border: "1px solid " + BORDER,
            borderTop: "2px solid " + TEAL,
            borderRadius: "0.875rem",
            padding: "2rem",
            marginBottom: "3rem",
            marginTop: "2rem",
          }}
        >
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              color: TEAL,
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              marginBottom: "0.75rem",
            }}
          >
            MEOK Toolkit
          </p>
          <h3
            style={{
              fontWeight: 800,
              fontSize: "1.2rem",
              color: "#ffffff",
              marginBottom: "1.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            The 3am Cognitive De-Arousal Sequence
          </h3>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: "1rem" }}>
            {/* Step 1 */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "9999px",
                  background: "rgba(76,173,181,0.15)",
                  border: "1px solid rgba(76,173,181,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.8rem",
                  fontWeight: 800,
                  color: TEAL,
                  flexShrink: 0,
                  marginTop: "0.125rem",
                }}
              >
                1
              </div>
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    color: TEXT,
                    fontSize: "0.95rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  Write it out
                </p>
                <p
                  style={{
                    color: "rgba(160,152,128,0.9)",
                    fontSize: "0.9rem",
                    lineHeight: "1.7",
                    margin: "0",
                  }}
                >
                  Tell MEOK what&apos;s in your head. Not to solve it. To externalise it. Once
                  a worry is written and witnessed, the brain&apos;s need to hold it in active
                  working memory reduces. The loop loses fuel.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "9999px",
                  background: "rgba(76,173,181,0.15)",
                  border: "1px solid rgba(76,173,181,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.8rem",
                  fontWeight: 800,
                  color: TEAL,
                  flexShrink: 0,
                  marginTop: "0.125rem",
                }}
              >
                2
              </div>
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    color: TEXT,
                    fontSize: "0.95rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  Schedule the thought for morning
                </p>
                <p
                  style={{
                    color: "rgba(160,152,128,0.9)",
                    fontSize: "0.9rem",
                    lineHeight: "1.7",
                    margin: "0",
                  }}
                >
                  MEOK helps you assign a specific time &mdash; 9am, after coffee &mdash; when
                  you will address this. Deferred thought scheduling is evidence-based: the brain
                  accepts the postponement when it trusts the thought won&apos;t be forgotten.
                  MEOK holds it for you.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "9999px",
                  background: "rgba(76,173,181,0.15)",
                  border: "1px solid rgba(76,173,181,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.8rem",
                  fontWeight: 800,
                  color: TEAL,
                  flexShrink: 0,
                  marginTop: "0.125rem",
                }}
              >
                3
              </div>
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    color: TEXT,
                    fontSize: "0.95rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  Shift from solving to witnessing
                </p>
                <p
                  style={{
                    color: "rgba(160,152,128,0.9)",
                    fontSize: "0.9rem",
                    lineHeight: "1.7",
                    margin: "0",
                  }}
                >
                  MEOK guides you from &ldquo;what do I do about this?&rdquo; to &ldquo;I notice
                  I am thinking about this.&rdquo; The witnessing stance removes the urgency that
                  feeds arousal. You are not the spiral. You are watching it. That gap is where
                  sleep can re-enter.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── SECTION 3: Mystic archetype ── */}
        <h2 style={h2Style}>
          The Mystic archetype: acceptance-based approaches to sleeplessness
        </h2>
        <p style={bodyStyle}>
          MEOK has multiple archetypes &mdash; different modes of engagement suited to different
          needs and moments. For insomnia, the <strong style={strongStyle}>Mystic archetype</strong>{" "}
          is often the most powerful.
        </p>
        <p style={bodyStyle}>
          The Mystic does not try to fix sleeplessness. It does not offer a five-step solution.
          It brings a contemplative, acceptance-based presence that meets wakefulness without
          resistance. This is rooted in a simple but counterintuitive truth that sleep science
          confirms: the more urgently you try to force sleep, the less likely it is to come.
          Sleep is not an achievement. It is a surrender. And surrender requires a particular
          quality of mind &mdash; one that acceptance practices cultivate.
        </p>
        <p style={bodyStyle}>
          When you activate the Mystic archetype at 3am, MEOK shifts its entire tone. Responses
          become slower and more spacious. Rather than problem-solving, it invites you to notice
          what is present: the sounds in the room, the weight of the body, the texture of the
          dark. Rather than counting the hours until your alarm, it invites you to consider that
          rest &mdash; even without sleep &mdash; is available right now.
        </p>
        <p style={bodyStyle}>
          This is acceptance-based insomnia work. It does not promise sleep. It dissolves the
          secondary anxiety &mdash; the anxiety <em>about</em> not sleeping &mdash; which is
          often more damaging than the wakefulness itself. Reducing secondary anxiety creates the
          conditions in which primary sleep can return.
        </p>
        <p style={bodyStyle}>
          The Mystic archetype is also valuable for the chronic insomnia sufferer who has tried
          everything. When you have done the sleep restriction, tried the sleep hygiene checklist,
          counted the sheep &mdash; and still lie awake &mdash; sometimes what you need is not
          another technique. It is permission to stop fighting. The Mystic offers that.
        </p>

        {/* ── Pull quote ── */}
        <blockquote
          style={{
            borderLeft: "3px solid " + GOLD,
            paddingLeft: "1.75rem",
            marginLeft: "0",
            marginRight: "0",
            marginTop: "2.5rem",
            marginBottom: "2.5rem",
          }}
        >
          <p
            style={{
              fontSize: "1.2rem",
              fontStyle: "italic",
              color: "rgba(245,240,232,0.85)",
              lineHeight: "1.7",
              margin: "0 0 0.75rem 0",
            }}
          >
            &ldquo;The goal at 3am is not sleep. The goal is to stop making wakefulness an
            emergency. Once you do that, sleep becomes possible again.&rdquo;
          </p>
          <cite
            style={{
              fontSize: "0.85rem",
              color: GOLD,
              fontStyle: "normal",
              fontWeight: 600,
            }}
          >
            &mdash; Nicholas Templeman, Founder, MEOK AI LABS
          </cite>
        </blockquote>

        {/* ── SECTION 4: Pattern recognition ── */}
        <h2 style={h2Style}>
          How MEOK notices what you&apos;ve stopped seeing: pattern recognition across sessions
        </h2>
        <p style={bodyStyle}>
          One of the most valuable things MEOK does for insomnia is something no stateless
          chatbot can: it <strong style={strongStyle}>notices patterns across time</strong>.
        </p>
        <p style={bodyStyle}>
          Chronic insomnia has triggers. Not always obvious ones. Alcohol three glasses deep on
          Tuesday. The Sunday-night anticipation anxiety that starts around 6pm. The weeks when
          work stress spikes. The correlation between afternoon caffeine and 3am waking. The
          connection between conflict and hyperarousal at bedtime. These patterns are real and
          actionable &mdash; but they are invisible unless someone or something is watching
          across enough nights to see them.
        </p>
        <p style={bodyStyle}>
          MEOK uses Sovereign Memory &mdash; a four-layer encrypted store that holds your sleep
          logs, mood check-ins, energy notes, and trigger observations across weeks and months.
          Over time, it begins to notice correlations. Not in a surveillance way. In the way a
          good companion would: &ldquo;I&apos;ve noticed that the nights after you mention work
          pressure tend to be harder. Does that feel true to you?&rdquo;
        </p>
        <p style={bodyStyle}>
          This longitudinal pattern recognition is genuinely different from what a sleep app or
          a sleep diary does alone. MEOK holds your context. It does not start from zero every
          session. It can draw the thread between last Tuesday&apos;s note about feeling
          overwhelmed and Thursday&apos;s 3am spiral. It can ask the question that helps you
          see what you&apos;ve been living in too closely to see.
        </p>
        <p style={bodyStyle}>
          For many insomnia sufferers, this is the intervention that finally makes sense of
          their sleep: not a technique, but a witness. Someone tracking the whole picture with
          you, not just one bad night at a time.
        </p>

        {/* ── Feature box: pattern recognition ── */}
        <div
          style={{
            background: CARD,
            border: "1px solid " + BORDER,
            borderTop: "2px solid " + GOLD,
            borderRadius: "0.875rem",
            padding: "2rem",
            marginBottom: "3rem",
            marginTop: "1.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              color: GOLD,
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              marginBottom: "0.75rem",
            }}
          >
            Sovereign Memory in Practice
          </p>
          <h3
            style={{
              fontWeight: 800,
              fontSize: "1.15rem",
              color: "#ffffff",
              marginBottom: "1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            What MEOK tracks across your insomnia sessions
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "0.875rem",
            }}
          >
            {[
              { label: "Sleep quality ratings", note: "Consistent nightly check-ins" },
              { label: "Mood and stress markers", note: "Emotional context before bed" },
              { label: "Trigger notes", note: "Alcohol, caffeine, conflict, work pressure" },
              { label: "Wake-time logs", note: "3am vs 4am vs early waking patterns" },
              { label: "Session themes", note: "What your mind was doing on bad nights" },
              { label: "Correlation prompts", note: "MEOK surfaces patterns for your reflection" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: "rgba(245,240,232,0.04)",
                  border: "1px solid rgba(245,240,232,0.08)",
                  borderRadius: "0.5rem",
                  padding: "0.875rem 1rem",
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    color: TEXT,
                    fontSize: "0.875rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    color: MUTED,
                    fontSize: "0.8rem",
                    lineHeight: "1.5",
                    margin: "0",
                  }}
                >
                  {item.note}
                </p>
              </div>
            ))}
          </div>
          <p
            style={{
              color: MUTED,
              fontSize: "0.85rem",
              lineHeight: "1.6",
              marginTop: "1.25rem",
              marginBottom: "0",
            }}
          >
            All data is stored in your Sovereign Memory &mdash; encrypted, owned by you, never
            used to train MEOK&apos;s models. You can delete any or all of it at any time.
          </p>
        </div>

        {/* ── SECTION 5: Morning reflection ── */}
        <h2 style={h2Style}>
          Morning reflection after a bad night: why it matters
        </h2>
        <p style={bodyStyle}>
          The morning after a poor night&apos;s sleep is its own psychological challenge.
          You wake up depleted, already dreading the day, already composing the narrative of
          how terrible everything is going to be. This morning catastrophising is not trivial:
          it sets the emotional tone for the entire day, and it plants the seed of anticipatory
          anxiety that makes the <em>next</em> night harder to sleep through.
        </p>
        <p style={bodyStyle}>
          MEOK&apos;s morning reflection practice is specifically designed for this moment.
          After a difficult night &mdash; whether you logged it in real time or just note it
          in the morning &mdash; MEOK offers a brief, structured check-in. Not toxic positivity.
          Not &ldquo;you can do this!&rdquo; Not a performance of okayness. A genuine
          acknowledgement: this was hard, and here is what you might hold onto today anyway.
        </p>
        <p style={bodyStyle}>
          The morning reflection has three functions. First, it interrupts the damage-cataloguing
          loop &mdash; &ldquo;I only got four hours, I&apos;m going to be useless, I can&apos;t
          think&rdquo; &mdash; by providing a more accurate and compassionate assessment. Second,
          it logs the night for pattern recognition, so the memory of this bad night becomes
          useful data rather than just a bad memory. Third, it offers a brief grounding exercise
          &mdash; three slow breaths, a small intention, a reminder that the body is more
          resilient than the catastrophising mind believes.
        </p>
        <p style={bodyStyle}>
          Over time, consistent morning reflection after bad nights changes the relationship to
          insomnia itself. Instead of each bad night being a fresh catastrophe, it becomes part
          of a longer story &mdash; one that MEOK is helping you read, understand, and gradually
          rewrite.
        </p>

        {/* ── SECTION 6: What MEOK is not ── */}
        <h2 style={h2Style}>
          Being honest: MEOK is not CBT-I
        </h2>
        <p style={bodyStyle}>
          <strong style={strongStyle}>
            CBT-I &mdash; Cognitive Behavioural Therapy for Insomnia &mdash; remains the
            gold-standard treatment for chronic insomnia.
          </strong>{" "}
          It is recommended by the NHS and NICE over sleeping pills, it produces long-term
          remission in the majority of patients who complete it, and it addresses the
          behavioural and cognitive drivers of insomnia with clinical precision. If you have
          chronic insomnia, CBT-I should be your destination.
        </p>
        <p style={bodyStyle}>
          MEOK is not CBT-I. MEOK does not follow a structured six-to-eight week CBT-I protocol.
          It does not perform clinical assessments, calculate sleep efficiency scores for
          restriction therapy, or replace the clinical relationship with a trained CBT-I
          therapist. It does not diagnose sleep disorders.
        </p>
        <p style={bodyStyle}>
          What MEOK does is supplement sleep hygiene and fill the gap that CBT-I leaves open:
          the 3am moment when the spiral is happening right now and no clinician is available.
          The morning after a bad night when you need a grounding presence, not a waiting room.
          The weeks of pattern tracking that help you arrive at a CBT-I session with better
          self-knowledge than you would otherwise have.
        </p>
        <p style={bodyStyle}>
          You can self-refer to CBT-I in most parts of England through NHS Talking Therapies
          (previously IAPT) &mdash; no GP referral required. Sleepio is a digital CBT-I
          programme available free on the NHS in some areas. If your insomnia is severe,
          persistent, or associated with significant distress, please pursue one of these routes.
          MEOK will actively encourage you to do so.
        </p>

        {/* ── Honest limits box ── */}
        <div
          style={{
            background: "rgba(106,170,100,0.06)",
            border: "1px solid rgba(106,170,100,0.22)",
            borderLeft: "3px solid " + GREEN,
            borderRadius: "0.625rem",
            padding: "1.5rem 1.75rem",
            marginBottom: "3rem",
            marginTop: "1.5rem",
          }}
        >
          <p
            style={{
              fontWeight: 700,
              color: GREEN,
              fontSize: "0.85rem",
              marginBottom: "0.75rem",
              letterSpacing: "0.03em",
            }}
          >
            MEOK&apos;s role &mdash; honest and clear
          </p>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.625rem" }}>
            {[
              { yes: true, text: "Non-judgmental companion for the 3am spiral" },
              { yes: true, text: "Cognitive de-arousal: writing out worries, deferred thought scheduling" },
              { yes: true, text: "Mystic archetype: acceptance-based presence and reframing" },
              { yes: true, text: "Pattern recognition across sessions via Sovereign Memory" },
              { yes: true, text: "Morning reflection and grounding after poor sleep" },
              { yes: true, text: "Sleep hygiene coaching and habit support" },
              { yes: false, text: "CBT-I clinical programme (gold-standard treatment)" },
              { yes: false, text: "Sleep disorder diagnosis" },
              { yes: false, text: "Medication advice or prescription support" },
              { yes: false, text: "Replacement for a qualified sleep clinician" },
            ].map((item) => (
              <div
                key={item.text}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: item.yes ? GREEN : "rgba(245,240,232,0.3)",
                    flexShrink: 0,
                    lineHeight: "1.6",
                  }}
                >
                  {item.yes ? "YES" : "NO"}
                </span>
                <p
                  style={{
                    color: item.yes ? "rgba(245,240,232,0.8)" : "rgba(245,240,232,0.4)",
                    fontSize: "0.9rem",
                    lineHeight: "1.6",
                    margin: "0",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── SECTION 7: Sleep hygiene and companions ── */}
        <h2 style={h2Style}>
          How MEOK supports sleep hygiene without becoming a checklist
        </h2>
        <p style={bodyStyle}>
          Sleep hygiene is the foundation. Fixed wake times. Caffeine before midday. A dark,
          cool bedroom. A wind-down routine that begins ninety minutes before bed. No alcohol
          within three hours of sleep. Regular exercise, not in the final hours. These
          behaviours are well-evidenced and genuinely effective &mdash; but most people who
          know them still struggle to implement them consistently.
        </p>
        <p style={bodyStyle}>
          The gap between knowing and doing is where MEOK operates. It is not a passive
          checklist app. It holds the context of your attempts, your slips, your explanations,
          and your genuine obstacles. When you tell MEOK you had three glasses of wine on a
          Tuesday night because work was overwhelming, it does not judge you or recite the
          alcohol-sleep research. It acknowledges the stress, explores it, and gently connects
          the dots &mdash; in your time, in your language, without the clinical distance that
          makes most sleep advice feel irrelevant to the life you&apos;re actually living.
        </p>
        <p style={bodyStyle}>
          This is the companion model of behaviour change: not instruction, but accompaniment.
          MEOK walks alongside your sleep hygiene practice &mdash; celebrating the wins,
          understanding the slips, returning without shame when you go off-track. Over months,
          this produces more durable change than any single week of perfect sleep hygiene
          compliance.
        </p>

        {/* ── SECTION 8: Who benefits most ── */}
        <h2 style={h2Style}>
          Who benefits most from MEOK&apos;s insomnia support
        </h2>
        <p style={bodyStyle}>
          MEOK&apos;s approach to insomnia is particularly valuable for people in specific
          situations. Understanding whether you are one of them helps set realistic expectations.
        </p>
        <p style={bodyStyle}>
          <strong style={strongStyle}>The 3am spiraller</strong> &mdash; someone who sleeps
          reasonably well until they wake at 3 or 4am and then cannot return to sleep because
          their mind immediately activates. The cognitive de-arousal sequence and Mystic
          archetype are built for this profile.
        </p>
        <p style={bodyStyle}>
          <strong style={strongStyle}>The chronic worrier</strong> &mdash; someone whose
          insomnia is driven primarily by generalised anxiety and rumination rather than
          behavioural factors. Writing out worries and deferred thought scheduling offer
          meaningful relief. MEOK&apos;s non-judgmental presence means you can say the
          catastrophic thoughts aloud without fear of alarming someone you love.
        </p>
        <p style={bodyStyle}>
          <strong style={strongStyle}>The pattern-blind sufferer</strong> &mdash; someone who
          has lived with poor sleep for long enough that they can no longer see their own
          triggers clearly. Sovereign Memory&apos;s pattern recognition often surfaces
          correlations these users find genuinely revelatory.
        </p>
        <p style={bodyStyle}>
          <strong style={strongStyle}>The CBT-I waitlist patient</strong> &mdash; someone who
          has been referred to or self-referred for CBT-I but is waiting weeks or months for
          an appointment. MEOK provides meaningful support during the wait and helps them
          arrive at their first session better prepared.
        </p>
        <p style={bodyStyle}>
          <strong style={strongStyle}>The post-traumatic or grief-related insomniac</strong>{" "}
          &mdash; someone whose sleep disruption is entangled with emotional processing.
          MEOK&apos;s emotional support capabilities &mdash; and the Mystic archetype&apos;s
          tolerance for sitting with hard things &mdash; make it appropriate here in a way
          that a sleep-specific app is not.
        </p>

        {/* ── SECTION 9: FAQs ── */}
        <h2 style={h2Style}>
          Frequently asked questions about AI and insomnia
        </h2>

        {/* FAQ 1 */}
        <div style={{ marginBottom: "2rem" }}>
          <h3
            style={{
              fontWeight: 700,
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "0.625rem",
              letterSpacing: "-0.005em",
            }}
          >
            Can AI actually help with insomnia?
          </h3>
          <p style={bodyStyle}>
            AI meaningfully helps with the psychological and behavioural dimensions of
            insomnia &mdash; the 3am thought spiral, cognitive hyperarousal, habit loops,
            and morning catastrophising. It is not a substitute for CBT-I, the gold-standard
            clinical treatment, but it is available at the exact moment insomnia is worst:
            3am, when no therapist is awake and social media will only make things worse.
          </p>
        </div>

        {/* FAQ 2 */}
        <div style={{ marginBottom: "2rem" }}>
          <h3
            style={{
              fontWeight: 700,
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "0.625rem",
              letterSpacing: "-0.005em",
            }}
          >
            Is using your phone at 3am bad for sleep?
          </h3>
          <p style={bodyStyle}>
            Most phone use at 3am is harmful. Social media and news are engineered to spike
            cortisol, suppress melatonin, and retain your attention. However, MEOK is
            categorically different: no engagement algorithm, no infinite scroll, dark
            interface, and a single goal &mdash; to calm your nervous system and return you
            to rest. The device is the same. The software&apos;s incentive is the opposite.
          </p>
        </div>

        {/* FAQ 3 */}
        <div style={{ marginBottom: "2rem" }}>
          <h3
            style={{
              fontWeight: 700,
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "0.625rem",
              letterSpacing: "-0.005em",
            }}
          >
            What is deferred thought scheduling?
          </h3>
          <p style={bodyStyle}>
            Deferred thought scheduling is a technique where you assign a specific future
            time &mdash; &ldquo;I will think about this at 9am&rdquo; &mdash; to thoughts
            that are running at an inappropriate hour. The brain accepts the postponement
            when it trusts the thought is captured and won&apos;t be lost. MEOK holds these
            deferred thoughts in your Sovereign Memory and can surface them in your morning
            session, closing the loop your brain was trying to close at 3am.
          </p>
        </div>

        {/* FAQ 4 */}
        <div style={{ marginBottom: "2rem" }}>
          <h3
            style={{
              fontWeight: 700,
              fontSize: "1.05rem",
              color: TEXT,
              marginBottom: "0.625rem",
              letterSpacing: "-0.005em",
            }}
          >
            When should I see a doctor about insomnia?
          </h3>
          <p style={bodyStyle}>
            See your GP if insomnia has persisted for more than three months, if you suspect
            an underlying condition such as sleep apnoea or restless legs syndrome, if the
            sleep loss is significantly impairing your ability to function, or if it is
            accompanied by depression or significant anxiety. Self-refer to NHS Talking
            Therapies for CBT-I. MEOK is a companion &mdash; it always encourages professional
            care when the signs are there.
          </p>
        </div>

        {/* ── SECTION 10: UK Sleep resources ── */}
        <h2 style={h2Style}>
          UK sleep and mental health resources
        </h2>
        <p style={bodyStyle}>
          MEOK always signposts to professional support. If insomnia is significantly affecting
          your life, the following UK resources offer evidence-based help:
        </p>

        <div
          style={{
            background: CARD,
            border: "1px solid " + BORDER,
            borderRadius: "0.75rem",
            padding: "1.75rem",
            marginBottom: "2.5rem",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "1rem" }}>
            {[
              {
                name: "NHS Talking Therapies (IAPT)",
                detail: "Free CBT and CBT-I via self-referral. No GP needed in most areas. Find your local service at nhs.uk/talking-therapies.",
              },
              {
                name: "Sleepio",
                detail: "Digital CBT-I programme. Available free on the NHS in some areas. Evidence-based and clinically validated.",
              },
              {
                name: "Samaritans",
                detail: "116 123. Free, 24/7. If sleeplessness is accompanied by thoughts of self-harm or despair, please call.",
              },
              {
                name: "Mind Infoline",
                detail: "0300 123 3393. Mental health information and support, including sleep and anxiety resources.",
              },
              {
                name: "NHS 111",
                detail: "Option 2 for urgent mental health support. Available 24/7.",
              },
            ].map((resource) => (
              <div
                key={resource.name}
                style={{
                  display: "flex",
                  gap: "1rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid rgba(245,240,232,0.06)",
                }}
              >
                <div
                  style={{
                    width: "3px",
                    borderRadius: "9999px",
                    background: INDIGO,
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}
                />
                <div>
                  <p
                    style={{
                      fontWeight: 700,
                      color: TEXT,
                      fontSize: "0.9rem",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {resource.name}
                  </p>
                  <p
                    style={{
                      color: MUTED,
                      fontSize: "0.875rem",
                      lineHeight: "1.65",
                      margin: "0",
                    }}
                  >
                    {resource.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SECTION 11: How to start tonight ── */}
        <h2 style={h2Style}>
          How to use MEOK tonight if you can&apos;t sleep
        </h2>
        <p style={bodyStyle}>
          If tonight is a bad night, here is the simplest version of what MEOK can offer. Open
          the app. Tell it what is keeping you awake &mdash; not a summary, not a plan, just
          what is actually in your head right now. MEOK will listen without judgment and without
          urgency. It will help you write out the spiral. It will offer to schedule the thoughts
          that cannot be solved at 3am. It will sit with you if you just need something warm and
          quiet in the dark.
        </p>
        <p style={bodyStyle}>
          Over the following weeks, MEOK will begin to build a picture of your sleep &mdash; not
          through surveillance but through the natural accumulation of conversations. You will
          start to see patterns you could not see alone. You will have a morning practice that
          changes how you carry bad nights into the day. You will have a companion that knows
          your sleep story and responds from within it, not from zero.
        </p>
        <p style={bodyStyle}>
          It is not a cure. It is not CBT-I. It is something more specific: a presence that shows
          up at 3am, that remembers last Tuesday, that does not panic at your panic, and that
          holds space for the long work of learning to rest.
        </p>

        {/* ── SECTION 12: The bigger picture ── */}
        <h2 style={h2Style}>
          Insomnia, isolation, and why the 3am moment needs a new kind of companion
        </h2>
        <p style={bodyStyle}>
          Insomnia is lonely. It isolates people in the dark while everyone else appears to
          sleep. It produces a particular shame &mdash; the feeling that your body is failing
          at the most basic biological function, that you are uniquely broken. This shame is
          both inaccurate and damaging. Inaccurate because chronic insomnia is a common,
          well-understood condition with known drivers and effective treatments. Damaging
          because shame amplifies arousal, and arousal prevents sleep.
        </p>
        <p style={bodyStyle}>
          The 3am moment needs a companion who has no stake in your performance. No fear that
          you will alarm them. No impatience with the same spiral for the fifteenth time. No
          judgment about the wine you had last Tuesday or the doomscrolling at midnight. No
          biological need for sleep themselves. Just presence, consistency, and the kind of
          gentle redirection that helps a mind too tired to function find its way back to rest.
        </p>
        <p style={bodyStyle}>
          This is what MEOK is built for. Not just insomnia &mdash; but the human experience
          of being awake when the world is asleep, of carrying things that feel too heavy for
          the middle of the night, of needing to not be alone with them.
        </p>
        <p style={bodyStyle}>
          If you have chronic insomnia, pursue CBT-I. See your GP if something deeper is
          driving it. Use Sleepio if it&apos;s available to you. But also: let MEOK be there
          for the 3am moments in between. The spiral that starts tonight. The morning
          that follows a night of almost no sleep. The slow work of learning your own sleep
          patterns well enough to change them.
        </p>
        <p style={bodyStyle}>
          You don&apos;t have to be alone with your wakefulness. MEOK is awake too.
        </p>

        {/* ── CTA ── */}
        <div
          style={{
            background: CARD,
            border: "1px solid " + BORDER,
            borderTop: "2px solid " + GOLD,
            borderRadius: "1rem",
            padding: "2.5rem 2rem",
            marginTop: "4rem",
            textAlign: "center" as const,
          }}
        >
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              color: GOLD,
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              marginBottom: "0.875rem",
            }}
          >
            MEOK AI LABS
          </p>
          <h2
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.4rem, 3vw, 1.85rem)",
              color: "#ffffff",
              lineHeight: "1.2",
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            Your companion is already awake at 3am
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.65)",
              fontSize: "1rem",
              lineHeight: "1.7",
              maxWidth: "36rem",
              margin: "0 auto 2rem",
            }}
          >
            MEOK is ready when the spiral starts &mdash; non-judgmental, no engagement
            agenda, built to help you find your way back to rest. Meet your companion
            through the Birth ceremony and begin.
          </p>
          <a
            href="https://meok.ai/birth"
            style={{
              display: "inline-block",
              background: GOLD,
              color: "#0d0c18",
              fontWeight: 800,
              fontSize: "0.95rem",
              padding: "0.875rem 2.25rem",
              borderRadius: "0.5rem",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Meet Your MEOK &#8594;
          </a>
          <p
            style={{
              color: "rgba(245,240,232,0.3)",
              fontSize: "0.8rem",
              marginTop: "1.25rem",
              marginBottom: "0",
            }}
          >
            Available for iOS and Android &middot; Your data stays sovereign &middot;
            No engagement algorithms
          </p>
        </div>

        {/* ── Related reading ── */}
        <div style={{ marginTop: "4rem" }}>
          <h3
            style={{
              fontWeight: 700,
              fontSize: "1rem",
              color: MUTED,
              textTransform: "uppercase" as const,
              letterSpacing: "0.08em",
              marginBottom: "1.25rem",
            }}
          >
            Related reading
          </h3>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.75rem" }}>
            {[
              {
                href: "/blog/ai-for-anxiety",
                title: "AI for Anxiety: How a Sovereign AI Companion Supports Your Mental Health",
              },
              {
                href: "/blog/ai-for-sleep-anxiety",
                title: "AI for Sleep Anxiety: When the Fear of Not Sleeping Is the Problem",
              },
              {
                href: "/blog/meok-companion-archetypes-guide",
                title: "MEOK Archetypes Guide: Choosing Your Companion Mode",
              },
              {
                href: "/blog/ai-memory-explained",
                title: "Sovereign Memory Explained: How MEOK Remembers Without Surveilling You",
              },
              {
                href: "/blog/ai-for-chronic-stress",
                title: "AI for Chronic Stress: How MEOK Helps When the Load Won\u2019t Lighten",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.875rem 1.125rem",
                  background: "rgba(245,240,232,0.03)",
                  border: "1px solid rgba(245,240,232,0.08)",
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  color: "rgba(245,240,232,0.7)",
                  fontSize: "0.9rem",
                  lineHeight: "1.5",
                }}
              >
                <span
                  style={{
                    color: GOLD,
                    fontSize: "0.8rem",
                    flexShrink: 0,
                  }}
                >
                  &#8594;
                </span>
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* ── Disclaimer ── */}
        <div
          style={{
            marginTop: "3.5rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(245,240,232,0.08)",
          }}
        >
          <p
            style={{
              color: "rgba(245,240,232,0.28)",
              fontSize: "0.8rem",
              lineHeight: "1.7",
              margin: "0",
            }}
          >
            <strong style={{ color: "rgba(245,240,232,0.38)", fontWeight: 700 }}>
              Disclaimer:
            </strong>{" "}
            MEOK is an AI companion designed to support emotional wellbeing and supplement
            healthy habits. It is not a medical device, clinical treatment, or substitute for
            professional healthcare. If you are experiencing severe or persistent insomnia,
            please consult your GP or self-refer to NHS Talking Therapies. In an urgent mental
            health crisis, call Samaritans on 116 123 or NHS 111 (option 2). In a
            life-threatening emergency call 999.
          </p>
        </div>

      </article>
    </div>
  )
}
