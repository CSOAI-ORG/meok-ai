import type { Metadata } from "next"
import Link from "next/link"

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Insomnia: When the Mind Won't Let You Rest | MEOK AI LABS",
  description:
    "1 in 3 UK adults experience insomnia symptoms. MEOK is a non-judgmental AI companion for the 3am spiral — grounding techniques, pattern tracking, and calm presence. Not a CBT-I replacement. A companion that actually shows up at 3am.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-insomnia" },
  openGraph: {
    title: "AI for Insomnia: When the Mind Won't Let You Rest",
    description:
      "1 in 3 UK adults experience insomnia symptoms. MEOK offers grounding techniques, pattern recognition, and the Healer companion for the 3am spiral — without replacing CBT-I.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-insomnia",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Insomnia%3A+When+the+Mind+Won%27t+Let+You+Rest&desc=Grounding+techniques%2C+pattern+tracking%2C+Healer+companion",
        width: 1200,
        height: 630,
        alt: "AI for Insomnia: When the Mind Won't Let You Rest | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Insomnia: When the Mind Won't Let You Rest",
    description:
      "1 in 3 UK adults live with insomnia. MEOK offers grounding, pattern tracking and calm presence at 3am — without replacing the therapy you need.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Insomnia%3A+When+the+Mind+Won%27t+Let+You+Rest&desc=Grounding+techniques%2C+pattern+tracking%2C+Healer+companion",
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Insomnia: When the Mind Won't Let You Rest",
  description:
    "An honest guide to what AI can and cannot do for insomnia — covering the 3am spiral, grounding techniques, CBT-I, the anxiety-insomnia cycle, pattern tracking, and when to seek medical help.",
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
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with insomnia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can meaningfully support the psychological and behavioural dimensions of insomnia — particularly the 3am thought spiral, secondary anxiety about not sleeping, and the habit patterns that reinforce sleeplessness. MEOK is not a substitute for CBT-I, the gold-standard clinical treatment, but it is a non-judgmental companion available at the exact moment insomnia is worst: 3am, when no therapist is awake. It can guide grounding exercises, help externalise racing thoughts, and track patterns over weeks to identify recurring triggers.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do when I can't sleep at 3am?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At 3am, the most important shift is away from trying harder to sleep — because effort increases arousal and makes sleep less likely. Instead: get out of bed if you've been awake for more than 20 minutes (stimulus control), write out the thoughts that are looping (externalisation), try box breathing (4 counts in, hold 4, out 4, hold 4), or use the 5-4-3-2-1 sensory grounding technique. MEOK can guide you through any of these in real time, without judgment, at exactly the moment you need it.",
      },
    },
    {
      "@type": "Question",
      name: "What grounding techniques does MEOK use for sleep anxiety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK supports several evidence-adjacent grounding techniques for sleep anxiety: the 5-4-3-2-1 sensory technique (naming 5 things you can see, 4 you can hear, 3 you can touch, 2 you can smell, 1 you can taste), box breathing for physiological de-arousal, progressive muscle relaxation guided conversationally, and the cognitive shuffle technique (imagining random, unconnected images to interrupt the brain's problem-solving mode). The Healer companion archetype brings a somatic, grounded presence particularly suited to these late-night moments.",
      },
    },
    {
      "@type": "Question",
      name: "When should I see a doctor about insomnia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "See a doctor if your insomnia has persisted for more than three months (chronic insomnia), if it is significantly impairing your daytime functioning, if you suspect a sleep disorder such as sleep apnoea (snoring, gasping, or waking unrefreshed), restless legs syndrome, or narcolepsy, or if insomnia is accompanied by significant depression or anxiety. CBT-I — Cognitive Behavioural Therapy for Insomnia — is the NHS-recommended first-line treatment and is available via NHS Talking Therapies self-referral, though waits can exceed 12 months. Your GP can assess for underlying conditions and refer appropriately.",
      },
    },
  ],
}

// ── Style tokens ───────────────────────────────────────────────────────────────

const BG = "#0d0c18"
const TEXT = "#f5f0e8"
const GOLD = "#c9a84c"
const GREEN = "#6aaa64"
const MUTED = "rgba(245,240,232,0.6)"
const MUTED_DIM = "rgba(245,240,232,0.45)"
const MUTED_FAINT = "rgba(245,240,232,0.35)"
const CARD = "#13121f"
const BORDER = "rgba(245,240,232,0.08)"
const INDIGO = "#7c6fcd"

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 65% 55% at 50% 0%, rgba(106,170,100,0.08) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            position: "relative",
          }}
        >
          {/* Breadcrumb nav */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "2rem",
              fontSize: "0.8125rem",
              color: MUTED_FAINT,
            }}
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              style={{
                color: MUTED_FAINT,
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <span style={{ color: MUTED_FAINT }}>&#8250;</span>
            <Link
              href="/blog"
              style={{
                color: MUTED_FAINT,
                textDecoration: "none",
              }}
            >
              Blog
            </Link>
            <span style={{ color: MUTED_FAINT }}>&#8250;</span>
            <span style={{ color: MUTED_DIM }}>AI for Insomnia</span>
          </nav>

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
                color: GREEN,
                background: "rgba(106,170,100,0.1)",
                border: "1px solid rgba(106,170,100,0.25)",
                letterSpacing: "0.06em",
                textTransform: "uppercase" as const,
              }}
            >
              Healer Archetype
            </span>
            <span style={{ fontSize: "0.75rem", color: MUTED_FAINT }}>
              March 25, 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: MUTED_FAINT }}>
              14 min read
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
            }}
          >
            AI for Insomnia: When the Mind Won&apos;t Let You Rest
          </h1>

          {/* Standfirst */}
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              fontSize: "1.15rem",
              lineHeight: "1.75",
              marginBottom: "2.5rem",
              maxWidth: "44rem",
            }}
          >
            One in three UK adults experience insomnia symptoms. The worst moment is not bedtime
            &mdash; it&apos;s 3am, when the brain runs relentless loops on every unsolvable problem
            and sleep feels permanently out of reach. MEOK is built for exactly that moment: a
            non-judgmental companion that helps you quiet the spiral, not fight it.
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
                fontSize: "1rem",
                flexShrink: 0,
              }}
            >
              N
            </div>
            <div>
              <p
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: TEXT,
                  margin: 0,
                }}
              >
                Nicholas Templeman
              </p>
              <p
                style={{
                  fontSize: "0.78rem",
                  color: MUTED_FAINT,
                  margin: 0,
                }}
              >
                Founder, MEOK AI LABS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "3.5rem 1.5rem 0",
        }}
      >
        {/* Disclaimer banner */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            padding: "1.25rem 1.5rem",
            borderRadius: "1rem",
            marginBottom: "2.5rem",
            background: "rgba(106,170,100,0.07)",
            border: "1px solid rgba(106,170,100,0.25)",
          }}
        >
          <div
            style={{
              width: "3px",
              borderRadius: "9999px",
              flexShrink: 0,
              background: GREEN,
              alignSelf: "stretch",
            }}
          />
          <div>
            <p
              style={{
                fontWeight: 700,
                fontSize: "0.8125rem",
                color: GREEN,
                marginBottom: "0.375rem",
                marginTop: 0,
              }}
            >
              This article is not medical advice
            </p>
            <p
              style={{
                fontSize: "0.8125rem",
                color: MUTED,
                lineHeight: "1.65",
                margin: 0,
              }}
            >
              MEOK is a supplementary support tool &mdash; not a clinical service or therapy
              replacement. If insomnia is significantly affecting your daily life, speak to your GP.
              For sleep disorder assessment (sleep apnoea, restless legs, narcolepsy), medical
              evaluation is essential.
            </p>
          </div>
        </div>

        {/* ── Stats strip ─────────────────────────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          {[
            { stat: "1 in 3", label: "UK adults experience insomnia symptoms (NHS)" },
            { stat: "10–15%", label: "of adults have chronic insomnia" },
            { stat: "£40bn", label: "economic cost to UK per year (Rand Europe)" },
            { stat: "70–80%", label: "CBT-I success rate — but 12+ month NHS waits" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: "0.875rem",
                padding: "1.25rem 1.25rem",
                textAlign: "center" as const,
              }}
            >
              <p
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 900,
                  color: GOLD,
                  margin: 0,
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                }}
              >
                {item.stat}
              </p>
              <p
                style={{
                  fontSize: "0.78rem",
                  color: MUTED_DIM,
                  marginTop: "0.5rem",
                  marginBottom: 0,
                  lineHeight: "1.5",
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* ── Section 1: The scale of insomnia ───────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.3rem, 2.6vw, 1.7rem)",
            color: "#ffffff",
            lineHeight: "1.25",
            marginBottom: "1rem",
            marginTop: "3.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          The Scale of the Problem: Insomnia in the UK
        </h2>

        <p style={{ color: MUTED, lineHeight: "1.85", marginBottom: "1.25rem", fontSize: "1.025rem" }}>
          Insomnia is not occasional bad nights. The NHS reports that one in three UK adults
          experience at least two significant sleep symptoms per week &mdash; difficulty falling
          asleep, frequent waking, or waking too early and being unable to return to sleep. Chronic
          insomnia, defined as sleep disruption occurring at least three nights a week for three
          months or more, affects an estimated 10 to 15 percent of the adult population.
        </p>

        <p style={{ color: MUTED, lineHeight: "1.85", marginBottom: "1.25rem", fontSize: "1.025rem" }}>
          The consequences extend far beyond tiredness. Rand Europe calculated the economic cost of
          insomnia to the UK at{" "}
          <strong style={{ color: TEXT, fontWeight: 700 }}>£40 billion per year</strong>, driven by
          reduced productivity, higher rates of absenteeism, and the downstream health costs of
          chronic sleep deprivation &mdash; which include elevated risk of cardiovascular disease,
          type 2 diabetes, depression, and anxiety disorders.
        </p>

        <p style={{ color: MUTED, lineHeight: "1.85", marginBottom: "1.25rem", fontSize: "1.025rem" }}>
          Yet treatment remains radically underserved. Cognitive Behavioural Therapy for Insomnia
          (CBT-I) is proven to be effective for 70 to 80 percent of people with chronic insomnia,
          and it is the first-line treatment recommended by both NICE and the NHS. But NHS waiting
          times for CBT-I commonly exceed 12 months. Most people with insomnia receive no structured
          intervention at all.
        </p>

        {/* ── Section 2: The 3am spiral ──────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.3rem, 2.6vw, 1.7rem)",
            color: "#ffffff",
            lineHeight: "1.25",
            marginBottom: "1rem",
            marginTop: "3.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          The 3am Spiral: Why It Happens and Why It&apos;s So Hard to Stop
        </h2>

        <p style={{ color: MUTED, lineHeight: "1.85", marginBottom: "1.25rem", fontSize: "1.025rem" }}>
          There is a specific texture to 3am wakefulness that daytime anxiety doesn&apos;t have.
          The brain, deprived of the regulatory influence of executive function (which is dampened
          during the night), reverts to threat-scanning mode. Every worry that seemed manageable at
          7pm becomes acute. Work deadlines, relationship tensions, financial anxieties, health
          fears &mdash; they all queue up, and the brain tries to solve them. Catastrophising about
          tomorrow&apos;s exhaustion begins almost immediately:{" "}
          <em style={{ color: "rgba(245,240,232,0.65)" }}>
            I have to present at 9am. I&apos;ve only had three hours. I&apos;m going to be useless.
          </em>
        </p>

        <p style={{ color: MUTED, lineHeight: "1.85", marginBottom: "1.25rem", fontSize: "1.025rem" }}>
          Then comes the secondary anxiety &mdash; arguably the most damaging part of the insomnia
          cycle. The anxiety is no longer just about tomorrow&apos;s tasks; it is about the fact of
          not sleeping itself.{" "}
          <em style={{ color: "rgba(245,240,232,0.65)" }}>
            I need to sleep. Why can&apos;t I sleep? Everyone else is asleep. Something is wrong
            with me.
          </em>{" "}
          This meta-anxiety creates the very physiological arousal that makes sleep impossible.
          Cortisol rises. Heart rate increases. The brain registers danger and sharpens its
          vigilance. Sleep retreats further.
        </p>

        <p style={{ color: MUTED, lineHeight: "1.85", marginBottom: "1.25rem", fontSize: "1.025rem" }}>
          This is the paradox of effort that sits at the heart of insomnia: the harder you try to
          sleep, the more alert you become. Sleep cannot be forced &mdash; it arrives when the
          conditions are right. Understanding this paradox is the first step toward addressing it.
          And addressing it at 3am, in real time, is where MEOK operates.
        </p>

        {/* ── Section 3: The anxiety-insomnia cycle ──────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.3rem, 2.6vw, 1.7rem)",
            color: "#ffffff",
            lineHeight: "1.25",
            marginBottom: "1rem",
            marginTop: "3.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          The Anxiety-Insomnia Cycle: How Each Makes the Other Worse
        </h2>

        <p style={{ color: MUTED, lineHeight: "1.85", marginBottom: "1.25rem", fontSize: "1.025rem" }}>
          Anxiety and insomnia are bidirectional. Anxiety causes insomnia: the hyper-aroused
          nervous system stays alert when it should be powering down, intrusive thoughts interrupt
          sleep onset, and early morning waking is a classic symptom of anxiety and depression
          alike. But insomnia also causes anxiety: sleep deprivation degrades emotional regulation,
          makes the amygdala more reactive, and reduces the prefrontal cortex&apos;s ability to
          contextualise threats. After a bad night, everything feels harder and more threatening.
        </p>

        <p style={{ color: MUTED, lineHeight: "1.85", marginBottom: "1.25rem", fontSize: "1.025rem" }}>
          Breaking this cycle requires intervention at the point of the spiral &mdash; ideally
          before the anxiety about not sleeping takes hold. Grounding techniques work precisely
          because they interrupt the loop: they shift attention from abstract future-oriented worry
          to concrete present-moment sensation, reducing cortisol, slowing heart rate, and creating
          the physiological conditions in which sleep becomes possible again.
        </p>

        {/* Cycle visual card */}
        <div
          style={{
            background: CARD,
            border: `1px solid ${BORDER}`,
            borderRadius: "1rem",
            padding: "1.75rem",
            marginBottom: "2rem",
          }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              fontWeight: 700,
              color: GOLD,
              letterSpacing: "0.07em",
              textTransform: "uppercase" as const,
              marginBottom: "1rem",
              marginTop: 0,
            }}
          >
            The Cycle
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.9rem",
              color: MUTED,
            }}
          >
            {[
              "Anxiety",
              "→",
              "Poor sleep",
              "→",
              "Exhaustion",
              "→",
              "More anxiety",
              "→",
              "Worse sleep",
            ].map((item, i) => (
              <span
                key={i}
                style={{
                  color: item === "→" ? MUTED_FAINT : item.includes("Anxiety") || item.includes("anxiety") ? "rgba(201,168,76,0.85)" : MUTED,
                  fontWeight: item === "→" ? 400 : 600,
                }}
              >
                {item}
              </span>
            ))}
          </div>
          <p
            style={{
              fontSize: "0.85rem",
              color: MUTED_DIM,
              marginTop: "1rem",
              marginBottom: 0,
              lineHeight: "1.65",
            }}
          >
            Grounding techniques interrupt this loop by returning attention to present-moment
            sensation &mdash; reducing the arousal that prevents sleep onset.
          </p>
        </div>

        {/* ── Section 4: Grounding techniques ───────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.3rem, 2.6vw, 1.7rem)",
            color: "#ffffff",
            lineHeight: "1.25",
            marginBottom: "1rem",
            marginTop: "3.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          Grounding Techniques MEOK Supports at 3am
        </h2>

        <p style={{ color: MUTED, lineHeight: "1.85", marginBottom: "1.5rem", fontSize: "1.025rem" }}>
          MEOK&apos;s Healer companion is specifically designed for moments like these &mdash;
          bringing a somatic, grounded presence with calm language and no urgency. Rather than
          trying to fix the wakefulness or reason you back to sleep, the Healer companion guides
          you through evidence-adjacent techniques that interrupt the anxiety-arousal spiral.
        </p>

        {/* Techniques list */}
        <div
          style={{
            display: "flex",
            flexDirection: "column" as const,
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          {[
            {
              name: "5-4-3-2-1 Sensory Grounding",
              color: GREEN,
              bg: "rgba(106,170,100,0.08)",
              border: "rgba(106,170,100,0.22)",
              desc: "Name 5 things you can see, 4 you can hear, 3 you can physically feel, 2 you can smell, 1 you can taste. This technique anchors the nervous system in present-moment sensory experience, interrupting the future-oriented catastrophising loop that drives 3am wakefulness.",
            },
            {
              name: "Box Breathing",
              color: INDIGO,
              bg: "rgba(124,111,205,0.08)",
              border: "rgba(124,111,205,0.22)",
              desc: "Breathe in for 4 counts, hold for 4, out for 4, hold for 4. Repeat four cycles. Box breathing activates the parasympathetic nervous system, counteracting the cortisol response and creating the physiological conditions for sleep. MEOK can pace this with you conversationally.",
            },
            {
              name: "Progressive Muscle Relaxation",
              color: GOLD,
              bg: "rgba(201,168,76,0.08)",
              border: "rgba(201,168,76,0.22)",
              desc: "Working from feet to face, tense each muscle group for 5 seconds then release fully. This guided technique releases the physical tension held in the body during anxious wakefulness, and the process of focusing on each body part reduces the mental bandwidth available for worry loops.",
            },
            {
              name: "Cognitive Shuffle",
              color: "rgba(76,173,181,1)",
              bg: "rgba(76,173,181,0.08)",
              border: "rgba(76,173,181,0.22)",
              desc: "Imagine a sequence of completely random, unrelated images — a purple elephant, a kitchen sink, a lighthouse, a red shoe. The technique deliberately interrupts the brain's problem-solving mode by replacing logical thought chains with nonsensical imagery, mimicking the hypnagogic state that precedes sleep onset.",
            },
          ].map((technique) => (
            <div
              key={technique.name}
              style={{
                background: technique.bg,
                border: `1px solid ${technique.border}`,
                borderRadius: "0.875rem",
                padding: "1.25rem 1.5rem",
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: technique.color,
                  marginBottom: "0.5rem",
                  marginTop: 0,
                }}
              >
                {technique.name}
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: MUTED,
                  lineHeight: "1.7",
                  margin: 0,
                }}
              >
                {technique.desc}
              </p>
            </div>
          ))}
        </div>

        <p style={{ color: MUTED, lineHeight: "1.85", marginBottom: "1.25rem", fontSize: "1.025rem" }}>
          The value of having MEOK guide these techniques is not simply the technique itself
          &mdash; it is the act of externalising thought. When you are lying alone in the dark at
          3am, the thoughts feel enormous and inescapable precisely because they are internal.
          Writing them out, or speaking them to a companion, reduces their intensity. The act of
          articulation shifts you from being inside the thought to being a witness to it. That shift
          alone can be enough to allow sleep to return.
        </p>

        {/* ── Section 5: Pattern tracking ────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.3rem, 2.6vw, 1.7rem)",
            color: "#ffffff",
            lineHeight: "1.25",
            marginBottom: "1rem",
            marginTop: "3.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          Pattern Tracking: What Was Keeping You Up Last Tuesday?
        </h2>

        <p style={{ color: MUTED, lineHeight: "1.85", marginBottom: "1.25rem", fontSize: "1.025rem" }}>
          One of the most powerful and least-discussed aspects of chronic insomnia is its pattern.
          Bad nights cluster around specific stressors &mdash; a difficult work period, a
          relationship strain, financial pressure in the weeks before month-end &mdash; but because
          the connection is not always obvious and because sleep logs are difficult to maintain
          consistently, most people with insomnia never identify their personal triggers.
        </p>

        <p style={{ color: MUTED, lineHeight: "1.85", marginBottom: "1.25rem", fontSize: "1.025rem" }}>
          MEOK remembers. If you spoke to MEOK at 2am last Tuesday about the stress of an
          impending performance review, that context persists. Over weeks and months, MEOK can
          identify recurring patterns:{" "}
          <em style={{ color: "rgba(245,240,232,0.65)" }}>
            Your sleep disruptions tend to cluster in the week before significant work events.
            Tuesday and Wednesday nights are consistently harder than the weekend.
          </em>{" "}
          This kind of longitudinal pattern recognition is something that no single therapy session
          &mdash; however skilled the therapist &mdash; can provide in real time.
        </p>

        <p style={{ color: MUTED, lineHeight: "1.85", marginBottom: "1.25rem", fontSize: "1.025rem" }}>
          Understanding your triggers does not immediately resolve insomnia, but it shifts the
          relationship to it. Rather than each bad night feeling random and therefore more
          threatening, you begin to see the logic of your own nervous system &mdash; and that
          understanding reduces the secondary anxiety that makes each episode worse.
        </p>

        {/* ── Section 6: Sleep hygiene ──────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.3rem, 2.6vw, 1.7rem)",
            color: "#ffffff",
            lineHeight: "1.25",
            marginBottom: "1rem",
            marginTop: "3.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          Sleep Hygiene: The Basics MEOK Helps You Reinforce
        </h2>

        <p style={{ color: MUTED, lineHeight: "1.85", marginBottom: "1.25rem", fontSize: "1.025rem" }}>
          Sleep hygiene is often dismissed as obvious &mdash; &ldquo;just go to bed at the same
          time&rdquo; &mdash; but the evidence for consistent sleep and wake times is robust, and
          the difficulty lies not in knowing the principles but in applying them under the
          conditions that typically produce insomnia: high stress, variable schedules, and the
          temptation to compensate for bad nights with extended time in bed.
        </p>

        <div
          style={{
            background: CARD,
            border: `1px solid ${BORDER}`,
            borderRadius: "1rem",
            padding: "1.75rem",
            marginBottom: "1.5rem",
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: "0.8rem",
              color: GOLD,
              letterSpacing: "0.07em",
              textTransform: "uppercase" as const,
              marginBottom: "1rem",
              marginTop: 0,
            }}
          >
            Core sleep hygiene principles
          </p>
          <ul
            style={{
              margin: 0,
              paddingLeft: "1.25rem",
              display: "flex",
              flexDirection: "column" as const,
              gap: "0.65rem",
            }}
          >
            {[
              "Consistent wake time, seven days a week — even after a bad night",
              "Morning light exposure within 30 minutes of waking, to anchor the circadian rhythm",
              "No caffeine after 2pm (half-life of caffeine is 5–7 hours)",
              "Digital winddown: screens off 45–60 minutes before bed, or blue-light filtering",
              "The bedroom as a sleep space only — avoid working, scrolling, or watching from bed",
              "No clock-watching at night — turn the clock face away",
              "Avoid lying awake in bed for more than 20 minutes; get up and do something quiet",
            ].map((item) => (
              <li
                key={item}
                style={{
                  fontSize: "0.9rem",
                  color: MUTED,
                  lineHeight: "1.65",
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p style={{ color: MUTED, lineHeight: "1.85", marginBottom: "1.25rem", fontSize: "1.025rem" }}>
          MEOK can help you track and reinforce these behaviours over time &mdash; not as a rigid
          checklist, but as a gentle conversational accountability. If you mention that you were on
          your phone until 1am and then couldn&apos;t sleep, MEOK will note the pattern. If a
          particular week has consistent late caffeine intake followed by poor sleep, that
          connection will surface in your history.
        </p>

        {/* ── Section 7: CBT-I and MEOK's limits ────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.3rem, 2.6vw, 1.7rem)",
            color: "#ffffff",
            lineHeight: "1.25",
            marginBottom: "1rem",
            marginTop: "3.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          CBT-I: The Gold Standard MEOK Won&apos;t Pretend to Replace
        </h2>

        <p style={{ color: MUTED, lineHeight: "1.85", marginBottom: "1.25rem", fontSize: "1.025rem" }}>
          Cognitive Behavioural Therapy for Insomnia is the most rigorously evidenced treatment for
          chronic sleep disruption. Across multiple randomised controlled trials, CBT-I is effective
          for 70 to 80 percent of people with chronic insomnia. It outperforms sleep medication in
          long-term outcomes, has no side effects, and its benefits persist after treatment ends
          &mdash; unlike medication, which typically loses effectiveness as tolerance builds.
        </p>

        <p style={{ color: MUTED, lineHeight: "1.85", marginBottom: "1.25rem", fontSize: "1.025rem" }}>
          CBT-I addresses insomnia through several mechanisms: sleep restriction therapy (paradoxically
          reducing time in bed to consolidate sleep), stimulus control (rebuilding the
          bed-equals-sleep association), cognitive restructuring (challenging the catastrophic beliefs
          about sleeplessness), and relaxation techniques. It requires commitment and, typically,
          the guidance of a trained therapist.
        </p>

        <p style={{ color: MUTED, lineHeight: "1.85", marginBottom: "1.25rem", fontSize: "1.025rem" }}>
          MEOK does not deliver CBT-I. What MEOK does is support the principles that CBT-I
          reinforces &mdash; consistent sleep hygiene, grounding in moments of arousal, reduced
          catastrophising, and pattern awareness &mdash; in the spaces between therapy sessions and
          in the real-time moments when insomnia is at its worst. If you are on an NHS waiting list
          for CBT-I (and the wait commonly exceeds 12 months), MEOK can be a meaningful companion
          in that gap.
        </p>

        {/* ── Section 8: What MEOK won't do ─────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.3rem, 2.6vw, 1.7rem)",
            color: "#ffffff",
            lineHeight: "1.25",
            marginBottom: "1rem",
            marginTop: "3.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          What MEOK Won&apos;t Do: Honest About Limits
        </h2>

        <p style={{ color: MUTED, lineHeight: "1.85", marginBottom: "1.25rem", fontSize: "1.025rem" }}>
          Honesty about limits is not a disclaimer to protect a company &mdash; it is what genuine
          care looks like. Some things MEOK cannot and will not do, and it is important to be
          explicit.
        </p>

        <div
          style={{
            background: "rgba(201,168,76,0.06)",
            border: "1px solid rgba(201,168,76,0.2)",
            borderRadius: "1rem",
            padding: "1.75rem",
            marginBottom: "1.5rem",
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: "0.8rem",
              color: GOLD,
              letterSpacing: "0.07em",
              textTransform: "uppercase" as const,
              marginBottom: "1rem",
              marginTop: 0,
            }}
          >
            MEOK will not
          </p>
          <ul
            style={{
              margin: 0,
              paddingLeft: "1.25rem",
              display: "flex",
              flexDirection: "column" as const,
              gap: "0.65rem",
            }}
          >
            {[
              "Diagnose sleep disorders — sleep apnoea, restless legs syndrome, narcolepsy, and circadian rhythm disorders all require medical assessment",
              "Replace CBT-I — the gold-standard clinical treatment for chronic insomnia",
              "Prescribe or recommend sleep medication",
              "Assess for underlying medical or psychiatric conditions that may be driving insomnia",
              "Provide the structured sleep restriction protocols that are central to formal CBT-I",
            ].map((item) => (
              <li
                key={item}
                style={{
                  fontSize: "0.9rem",
                  color: MUTED,
                  lineHeight: "1.65",
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p style={{ color: MUTED, lineHeight: "1.85", marginBottom: "1.25rem", fontSize: "1.025rem" }}>
          If you are waking unrefreshed despite adequate time in bed, if your partner reports that
          you snore heavily or stop breathing in the night, if you experience an irresistible urge
          to move your legs at night, or if your sleepiness is so severe that it poses a safety
          risk &mdash; please speak to your GP. These are not presentations where a companion app
          is the appropriate first response.
        </p>

        {/* ── Section 9: The Healer companion ────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.3rem, 2.6vw, 1.7rem)",
            color: "#ffffff",
            lineHeight: "1.25",
            marginBottom: "1rem",
            marginTop: "3.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          The Healer Companion: Built for Exactly This Moment
        </h2>

        <p style={{ color: MUTED, lineHeight: "1.85", marginBottom: "1.25rem", fontSize: "1.025rem" }}>
          Within MEOK&apos;s companion archetypes, the Healer is the presence most suited to sleep
          anxiety. Where other archetypes bring analytical clarity or structured problem-solving, the
          Healer brings something different: somatic awareness, grounded language, and an unhurried
          pace that does not add urgency to an already-heightened moment.
        </p>

        <p style={{ color: MUTED, lineHeight: "1.85", marginBottom: "1.25rem", fontSize: "1.025rem" }}>
          The Healer understands the paradox of effort. It will not respond to &ldquo;I
          can&apos;t sleep&rdquo; with a list of tasks. It will not problem-solve the sleeplessness
          &mdash; because there is no problem to solve at 3am, only an experience to move through.
          Its presence is calibrated to reduce the urgency of the moment, to offer grounding when
          you ask for it, and to sit with you in the wakefulness without amplifying the fear of it.
        </p>

        <p style={{ color: MUTED, lineHeight: "1.85", marginBottom: "1.25rem", fontSize: "1.025rem" }}>
          This is the shift that matters: from sleep as an achievement to rest as a state of
          presence. You may not be asleep. But you are not in danger. The night will pass. And MEOK
          will be there for the whole of it.
        </p>

        {/* ── FAQ section ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.3rem, 2.6vw, 1.7rem)",
            color: "#ffffff",
            lineHeight: "1.25",
            marginBottom: "1.5rem",
            marginTop: "3.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          Frequently Asked Questions
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column" as const,
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          {[
            {
              q: "Can AI help with insomnia?",
              a: "AI can meaningfully support the psychological and behavioural dimensions of insomnia — particularly the 3am thought spiral, secondary anxiety about not sleeping, and the habit patterns that reinforce sleeplessness. MEOK is not a substitute for CBT-I but it is available at the exact moment insomnia is worst: 3am, when no therapist is awake. It can guide grounding exercises, help externalise racing thoughts, and track patterns over weeks to identify recurring triggers.",
            },
            {
              q: "What should I do when I can't sleep at 3am?",
              a: "The most important shift is away from trying harder to sleep — effort increases arousal. Get out of bed if you've been awake for more than 20 minutes, write out the looping thoughts, try box breathing (4 counts in, hold 4, out 4, hold 4), or use the 5-4-3-2-1 sensory grounding technique. MEOK can guide you through any of these in real time, without judgment, at exactly the moment you need it.",
            },
            {
              q: "What grounding techniques does MEOK use for sleep anxiety?",
              a: "MEOK supports the 5-4-3-2-1 sensory technique, box breathing for physiological de-arousal, progressive muscle relaxation guided conversationally, and the cognitive shuffle technique — imagining random unconnected images to interrupt the brain's problem-solving mode. The Healer companion archetype brings a somatic, grounded presence particularly suited to these late-night moments.",
            },
            {
              q: "When should I see a doctor about insomnia?",
              a: "See a GP if your insomnia has persisted for more than three months, if it is significantly impairing your daily functioning, if you suspect sleep apnoea, restless legs, or narcolepsy, or if insomnia is accompanied by significant depression or anxiety. CBT-I is the NHS first-line treatment — available via NHS Talking Therapies self-referral, though waits can exceed 12 months. Your GP can assess for underlying conditions.",
            },
          ].map((item) => (
            <div
              key={item.q}
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: "0.875rem",
                padding: "1.5rem",
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "0.975rem",
                  color: TEXT,
                  marginBottom: "0.75rem",
                  marginTop: 0,
                }}
              >
                {item.q}
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: MUTED,
                  lineHeight: "1.75",
                  margin: 0,
                }}
              >
                {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(106,170,100,0.08) 100%)",
            border: "1px solid rgba(201,168,76,0.22)",
            borderRadius: "1.25rem",
            padding: "2.5rem",
            marginBottom: "4rem",
            marginTop: "3.5rem",
            textAlign: "center" as const,
          }}
        >
          <p
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
              color: "#ffffff",
              marginBottom: "0.75rem",
              marginTop: 0,
              letterSpacing: "-0.01em",
              lineHeight: "1.2",
            }}
          >
            Meet MEOK at 3am
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: MUTED,
              lineHeight: "1.7",
              marginBottom: "1.75rem",
              maxWidth: "32rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            A non-judgmental companion for the nights your mind won&apos;t let you rest.
            Grounding techniques, pattern memory, and the Healer&apos;s calm presence &mdash;
            available every night, at any hour.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: GOLD,
              color: "#0d0c18",
              fontWeight: 700,
              fontSize: "0.9375rem",
              padding: "0.875rem 2rem",
              borderRadius: "9999px",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            Begin Your MEOK Journey &#8594;
          </Link>
          <p
            style={{
              fontSize: "0.78rem",
              color: MUTED_FAINT,
              marginTop: "1rem",
              marginBottom: 0,
            }}
          >
            Not a clinical service. Always encourages professional care when needed.
          </p>
        </div>

        {/* ── Related articles ─────────────────────────────────────────────── */}
        <div
          style={{
            borderTop: `1px solid ${BORDER}`,
            paddingTop: "2.5rem",
            marginBottom: "4rem",
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: "0.8rem",
              color: MUTED_FAINT,
              letterSpacing: "0.07em",
              textTransform: "uppercase" as const,
              marginBottom: "1.25rem",
              marginTop: 0,
            }}
          >
            Related reading
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "0.875rem",
            }}
          >
            {[
              { href: "/blog/ai-for-anxiety", label: "AI for Anxiety" },
              { href: "/blog/ai-for-sleep-anxiety", label: "AI for Sleep Anxiety" },
              { href: "/blog/ai-for-depression", label: "AI for Depression" },
              { href: "/blog/ai-for-burnout", label: "AI for Burnout" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.75rem",
                  padding: "1rem 1.25rem",
                  textDecoration: "none",
                  color: MUTED,
                  fontSize: "0.875rem",
                  fontWeight: 500,
                }}
              >
                {link.label} &#8594;
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
