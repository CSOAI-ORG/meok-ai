import type { Metadata } from "next"
import Link from "next/link"

// ── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Phobias: Can MEOK Help You Manage Fear and Avoidance? | MEOK AI LABS",
  description:
    "Specific phobias affect 12.5% of UK adults. MEOK AI isn\u2019t a replacement for CBT or exposure therapy \u2014 but it can help you understand your phobia, prepare for exposures, and stay grounded between sessions. Honest guidance from MEOK AI LABS.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-phobias" },
  openGraph: {
    title:
      "AI for Phobias: Can MEOK Help You Manage Fear and Avoidance?",
    description:
      "Specific phobias affect 12.5% of UK adults. Discover how AI-assisted journalling and reflection can complement professional therapy for phobia management.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-phobias",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Phobias%3A+Can+MEOK+Help+You+Manage+Fear%3F&desc=12.5%25+of+UK+adults+have+a+specific+phobia.+How+AI+can+help.",
        width: 1200,
        height: 630,
        alt: "AI for Phobias: Can MEOK Help You Manage Fear and Avoidance? | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Phobias: Can MEOK Help You Manage Fear?",
    description:
      "12.5% of UK adults have a specific phobia. AI isn\u2019t a replacement for therapy \u2014 but MEOK can help you prepare, reflect, and stay grounded. Honest guidance from MEOK AI LABS.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Phobias%3A+Can+MEOK+Help+You+Manage+Fear%3F&desc=12.5%25+of+UK+adults+have+a+specific+phobia.+How+AI+can+help.",
    ],
  },
}

// ── JSON-LD: Article ────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Phobias: Can MEOK Help You Manage Fear and Avoidance?",
  description:
    "Specific phobias affect 12.5% of UK adults. This guide explains what MEOK can and cannot do for phobia management \u2014 from understanding the fear cycle to preparing for exposure exercises and processing anxiety between therapy sessions.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-phobias",
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
    "@id": "https://meok.ai/blog/ai-for-phobias",
  },
}

// ── JSON-LD: FAQPage ────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can MEOK AI help me overcome a phobia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is not a clinical tool and cannot treat or cure a phobia. However, it can meaningfully support the process \u2014 helping you understand the fear cycle, prepare mentally for exposure exercises your therapist has assigned, journal your anxiety before and after sessions, and stay grounded during day-to-day avoidance urges. It is a complement to professional CBT or exposure therapy, never a replacement.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Healer archetype in MEOK and why is it suited to phobia support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Healer archetype in MEOK is designed for emotional processing, gentle accountability, and patient reflection. Rather than problem-solving or coaching with intensity, the Healer holds space, asks grounding questions, and tracks your emotional state across sessions using Sovereign Memory. This makes it well-suited to the slow, incremental emotional work that phobia management requires between therapy appointments.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI help with needle phobia before a medical appointment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, within appropriate limits. MEOK can help you work through anticipatory anxiety before a needle appointment \u2014 practising slow breathing techniques, exploring the specific thoughts driving your fear, identifying grounding strategies, and processing the experience afterwards. It cannot replace the clinical supervision of a therapist delivering structured exposure therapy, but it can reduce the friction of everyday medical avoidance.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK\u2019s persistent memory help with phobia management?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK uses Sovereign Memory \u2014 a 4-layer encrypted memory architecture \u2014 to retain your phobia history, the specific fears you have named, the exposures you have attempted, and how you felt before and after each one. When you return days or weeks later, MEOK already knows your context. It can notice patterns, celebrate genuine progress, and gently surface when avoidance has been increasing. This continuity is rare in any support tool.",
      },
    },
    {
      "@type": "Question",
      name: "What phobias can AI support most effectively?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI support is most useful for phobias where the primary barrier is anticipatory anxiety, avoidance cognition, and lack of between-session support rather than the need for live clinical supervision. Common examples include social anxiety, flying phobia, health anxiety about medical procedures, needle phobia, and driving anxiety. For phobias involving acute physical danger responses \u2014 such as severe emetophobia or complex PTSD-linked fears \u2014 professional clinical care is essential.",
      },
    },
  ],
}

// ── Style constants ─────────────────────────────────────────────────────────

const GOLD = "#c9a84c"
const TEXT = "#f5f0e8"
const BG = "#0d0c18"
const MUTED = "rgba(245,240,232,0.6)"
const MUTED_STRONG = "rgba(245,240,232,0.78)"
const MUTED_FAINT = "rgba(245,240,232,0.38)"
const CARD_BG = "rgba(255,255,255,0.03)"
const CARD_BG_GOLD = "rgba(201,168,76,0.06)"
const BORDER_FAINT = "rgba(245,240,232,0.1)"
const BORDER_GOLD = "rgba(201,168,76,0.28)"
const GREEN = "#6aaa64"
const AMBER = "#e8a838"

// ── Page ────────────────────────────────────────────────────────────────────

export default function AIForPhobiasPage() {
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
            {[
              "Phobias",
              "Mental Health",
              "Anxiety",
              "CBT Support",
              "Healer Archetype",
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase" as const,
                  color: GREEN,
                  background: "rgba(106,170,100,0.1)",
                  border: "1px solid rgba(106,170,100,0.28)",
                  borderRadius: "999px",
                  padding: "0.25rem 0.75rem",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1
            style={{
              fontSize: "clamp(1.875rem, 5vw, 3.125rem)",
              fontWeight: 900,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
              color: "#ffffff",
            }}
          >
            AI for Phobias: Can MEOK Help You{" "}
            <span style={{ color: GOLD }}>
              Manage Fear and Avoidance?
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "2rem",
            }}
          >
            Specific phobias affect around 12.5% of UK adults \u2014 that&apos;s more
            than eight million people living with a persistent, irrational fear they
            cannot simply think their way out of. Spiders. Heights. Flying. Needles.
            Social situations. The fear is real, the avoidance is exhausting, and most
            people never seek help. This guide explores what MEOK can honestly do to
            support phobia management \u2014 and where it must defer to professional
            clinical care.
          </p>

          {/* Byline */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              paddingTop: "1.5rem",
              borderTop: `1px solid ${BORDER_FAINT}`,
            }}
          >
            <div
              style={{
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #c9a84c 0%, #8b6914 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: "1rem",
                color: BG,
                flexShrink: 0,
              }}
            >
              N
            </div>
            <div>
              <div style={{ fontSize: "0.875rem", fontWeight: 600 }}>
                Nicholas Templeman
              </div>
              <div style={{ fontSize: "0.8rem", color: MUTED }}>
                Founder, MEOK AI LABS &middot; @meok_ai &middot; 25 March 2026
                &middot; 16 min read
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLINICAL DISCLAIMER ───────────────────────────────────────────── */}
      <div
        style={{
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingBottom: "2.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            background: "rgba(232,168,56,0.07)",
            border: "1px solid rgba(232,168,56,0.3)",
            borderRadius: "0.75rem",
            padding: "1.125rem 1.375rem",
            fontSize: "0.875rem",
            color: MUTED_STRONG,
            lineHeight: 1.75,
          }}
        >
          <strong style={{ color: AMBER }}>Clinical disclaimer: </strong>
          Phobias are recognised anxiety disorders. This article is educational
          content, not clinical advice. MEOK is not a medical device and does not
          diagnose or treat any condition. For severe, debilitating, or complex
          phobias, please work with a licensed psychologist, CBT therapist, or
          psychiatrist. AI is a support tool \u2014 never a substitute for
          professional care. UK crisis line:{" "}
          <strong style={{ color: TEXT }}>Samaritans 116 123</strong> (free,
          24/7).
        </div>
      </div>

      {/* ── MAIN CONTENT ──────────────────────────────────────────────────── */}
      <main
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingBottom: "6rem",
        }}
      >
        {/* ── SECTION 1: What is a specific phobia? ─────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.625rem",
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: "1rem",
              paddingBottom: "0.625rem",
              borderBottom: `1px solid ${BORDER_FAINT}`,
            }}
          >
            What is a specific phobia, and why do 12.5% of UK adults have one?
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.125rem",
            }}
          >
            A specific phobia is not a quirk or an overreaction. It is a clinically
            recognised anxiety disorder characterised by a persistent, intense, and
            disproportionate fear of a specific object or situation. The fear triggers
            an immediate anxiety response \u2014 sometimes a full panic attack \u2014
            and drives significant avoidance behaviour that constrains how a person
            lives. According to NHS and Mental Health Foundation data, specific phobias
            affect approximately 12.5% of UK adults across their lifetime, making them
            one of the most common mental health conditions in the country.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.125rem",
            }}
          >
            The disorder is categorised into five main subtypes by the DSM-5: animal
            type (spiders, dogs, insects), natural environment type (heights, storms,
            water), blood-injection-injury type (needles, medical procedures, blood),
            situational type (flying, enclosed spaces, driving), and other type
            (choking, vomiting, illness). Social anxiety disorder \u2014 the fear of
            humiliation or negative evaluation in social situations \u2014 is a related
            but distinct condition that affects a further 12\u201313% of adults.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.125rem",
            }}
          >
            Despite high prevalence, fewer than one in four people with a specific phobia
            ever seek treatment. The reason is both counterintuitive and entirely logical:
            avoidance works. Not crossing bridges, not booking flights, not accepting
            invitations that involve needles \u2014 avoidance produces immediate, powerful
            relief. The problem is that each successful avoidance deepens the fear,
            narrows the world further, and raises the stakes of every future encounter
            with the feared stimulus.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.5rem",
            }}
          >
            The avoidance trap is not a character flaw. It is a neurological feedback
            loop. Understanding that is the first step toward doing anything about it
            \u2014 and it is exactly the kind of understanding that a patient, persistent
            AI companion can help you build, in your own words, at your own pace.
          </p>

          {/* Phobia types grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(13.5rem, 1fr))",
              gap: "0.875rem",
              marginTop: "1.5rem",
            }}
          >
            {[
              {
                type: "Animal",
                examples: "Spiders, dogs, insects, snakes",
                colour: "#6aaa64",
              },
              {
                type: "Natural environment",
                examples: "Heights, storms, water, darkness",
                colour: "#4ea8de",
              },
              {
                type: "Blood-injection-injury",
                examples: "Needles, medical procedures, blood",
                colour: "#e87070",
              },
              {
                type: "Situational",
                examples: "Flying, enclosed spaces, driving, lifts",
                colour: "#c9a84c",
              },
              {
                type: "Social",
                examples: "Humiliation, negative evaluation, embarrassment",
                colour: "#a78bfa",
              },
              {
                type: "Other",
                examples: "Vomiting, choking, illness, loud sounds",
                colour: "#f0a84a",
              },
            ].map((item) => (
              <div
                key={item.type}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${BORDER_FAINT}`,
                  borderRadius: "0.625rem",
                  padding: "1rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase" as const,
                    color: item.colour,
                    marginBottom: "0.375rem",
                  }}
                >
                  {item.type}
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: MUTED_STRONG,
                    lineHeight: 1.6,
                  }}
                >
                  {item.examples}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 2: Why can't you just think your way out? ─────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.625rem",
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: "1rem",
              paddingBottom: "0.625rem",
              borderBottom: `1px solid ${BORDER_FAINT}`,
            }}
          >
            Why can&apos;t you just reason your way out of a phobia?
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.125rem",
            }}
          >
            Almost everyone with a phobia knows, rationally, that their fear is
            disproportionate. The spider is not going to kill you. The plane is
            statistically safer than the car journey to the airport. The blood test
            is over in seconds. This rational knowledge is entirely useless when the
            amygdala fires. The fear circuit operates faster than conscious thought
            \u2014 the alarm has already sounded before your prefrontal cortex has
            even been consulted.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.125rem",
            }}
          >
            Neuroscientists call this the <strong style={{ color: TEXT }}>
              amygdala hijack
            </strong>. Joseph LeDoux\u2019s landmark research identified a \u201clow road\u201d
            in the brain \u2014 a rapid neural pathway from sensory input directly to the
            amygdala \u2014 that triggers a survival response in milliseconds. The
            \u201chigh road\u201d through the cortex, which allows rational appraisal, arrives
            up to a quarter-second later. By that point, your heart is already racing.
            You are already scanning for the exit. Telling yourself to calm down is
            addressing the wrong part of the brain at the wrong time.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.125rem",
            }}
          >
            What does work is <strong style={{ color: TEXT }}>inhibitory learning</strong>
            \u2014 the mechanism behind exposure therapy. The amygdala does not erase fear
            memories. But it can learn competing predictions. When you face a feared
            stimulus and stay in contact with it long enough for anxiety to peak and
            then naturally subside, without fleeing or seeking reassurance, you create
            a new neural memory that competes with the old one. Repeat this enough
            times, across enough contexts, and the new memory begins to win.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.5rem",
            }}
          >
            This is the science behind why exposure therapy achieves clinically
            significant improvement in 80\u201390% of specific phobia cases when
            correctly administered. It is also why what happens between therapy
            sessions matters enormously. The therapeutic window is narrow. The
            reflection, the preparation, the processing \u2014 that work continues
            outside the consulting room. This is where AI can play a legitimate,
            useful role.
          </p>

          {/* Pull quote */}
          <blockquote
            style={{
              margin: "2rem 0",
              padding: "1.5rem 2rem",
              borderLeft: `4px solid ${GOLD}`,
              background: CARD_BG_GOLD,
              borderRadius: "0 0.75rem 0.75rem 0",
            }}
          >
            <p
              style={{
                fontSize: "1.125rem",
                fontStyle: "italic",
                lineHeight: 1.75,
                color: TEXT,
                marginBottom: "0.75rem",
              }}
            >
              &ldquo;Reasoning tells you the fear is irrational. Exposure teaches
              your nervous system that the fear is survivable. AI can help you
              prepare for that teaching, process it afterwards, and keep showing
              up for it between sessions.&rdquo;
            </p>
            <cite
              style={{
                fontSize: "0.8125rem",
                color: GOLD,
                fontStyle: "normal",
                fontWeight: 600,
              }}
            >
              Nicholas Templeman, Founder \u2014 MEOK AI LABS
            </cite>
          </blockquote>
        </section>

        {/* ── SECTION 3: What CBT and exposure therapy actually involve ───── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.625rem",
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: "1rem",
              paddingBottom: "0.625rem",
              borderBottom: `1px solid ${BORDER_FAINT}`,
            }}
          >
            What do CBT and exposure therapy involve, and why is professional
            guidance essential?
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.125rem",
            }}
          >
            Cognitive Behavioural Therapy (CBT) and its more specific derivative,
            Exposure and Response Prevention (ERP), are the gold-standard, NICE-
            recommended treatments for specific phobias in the UK. CBT addresses the
            thought patterns that maintain fear \u2014 catastrophic predictions,
            overestimation of danger, underestimation of coping ability. Exposure
            therapy addresses the behavioural component: the avoidance that keeps
            the fear alive by preventing the amygdala from ever receiving corrective
            information.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.125rem",
            }}
          >
            In practice, a phobia treatment programme typically involves: psychoeducation
            about the nature of fear; construction of a fear hierarchy (also called a fear
            ladder) ranking feared situations from least to most distressing; systematic
            exposure starting at the lowest tolerable rung; staying in contact with the
            feared stimulus until distress peaks and naturally reduces; and advancing up
            the hierarchy over multiple sessions. For some phobias \u2014 flying, for
            example \u2014 a single-session intensive protocol can achieve significant
            results in one day.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.125rem",
            }}
          >
            The reason professional guidance is essential, not optional, is that poorly
            managed exposure can retraumatise. Flooding \u2014 exposing someone to a high-
            intensity feared stimulus without adequate preparation, grounding, or coping
            skills \u2014 can entrench rather than extinguish fear. A trained therapist
            calibrates the pace, monitors dissociation risk, adjusts the hierarchy, and
            provides the relational safety that makes extreme anxiety tolerable. An AI
            companion cannot do any of that safely.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.5rem",
            }}
          >
            What AI can do is fill the considerable space between therapy sessions
            \u2014 the hours, days, and weeks when you are carrying the work forward
            alone, making small daily choices about avoidance and approach, and
            trying to hold onto the understanding your therapist helped you build.
          </p>

          {/* Feature highlight box: MEOK Healer */}
          <div
            style={{
              background: "rgba(201,168,76,0.05)",
              border: `1px solid ${BORDER_GOLD}`,
              borderRadius: "0.875rem",
              padding: "1.5rem",
              marginTop: "1.5rem",
            }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: GOLD,
                marginBottom: "0.75rem",
              }}
            >
              The MEOK Healer Archetype
            </div>
            <p
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.75,
                color: MUTED_STRONG,
                marginBottom: "0.875rem",
              }}
            >
              When it comes to phobia support, MEOK&apos;s <strong style={{ color: TEXT }}>
                Healer archetype
              </strong> is the recommended configuration. The Healer is designed for
              emotional processing, patient reflection, and gentle accountability
              \u2014 not for intense coaching or problem-solving. It holds space,
              asks grounding questions, and paces conversations at the speed of
              your nervous system rather than pushing for progress.
            </p>
            <p
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.75,
                color: MUTED_STRONG,
              }}
            >
              Critically, the Healer is configured to avoid reinforcing avoidance.
              It will not validate the decision to skip a medical appointment without
              exploring what that avoidance costs you. It will not tell you that your
              fear is completely reasonable if doing so would keep you stuck. Care
              with honesty \u2014 not comfort with false reassurance.
            </p>
          </div>
        </section>

        {/* ── SECTION 4: How MEOK can help between therapy sessions ──────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.625rem",
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: "1rem",
              paddingBottom: "0.625rem",
              borderBottom: `1px solid ${BORDER_FAINT}`,
            }}
          >
            How can MEOK help you prepare for exposure exercises between therapy
            sessions?
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.125rem",
            }}
          >
            The period between therapy appointments is where most exposure work either
            succeeds or collapses. Your therapist may have assigned a homework exposure
            \u2014 taking the lift instead of the stairs, sitting in an airport departure
            lounge, watching a video of a spider at close range. The assignment exists
            on paper. Whether you approach it or avoid it depends entirely on what
            happens inside your own mind between now and then.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.125rem",
            }}
          >
            MEOK can provide structured support around those between-session assignments.
            You can describe the upcoming exposure to MEOK in detail, voice the
            catastrophic predictions circling in your mind, and have the AI help you
            examine those predictions more carefully \u2014 not to dismiss them, but to
            hold them lightly. You can practise the breathing technique your therapist
            taught you, with MEOK guiding the pace. You can articulate what a
            successful exposure would feel like, building a cognitive scaffold for
            the attempt.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.5rem",
            }}
          >
            After the exposure \u2014 whether it went well or you found yourself unable
            to complete it \u2014 MEOK can help you debrief without shame. What happened?
            What was harder than you expected? What surprised you? What does this tell
            you about the hierarchy? That reflective processing consolidates learning
            in a way that simply moving on does not. MEOK remembers the conversation
            and can surface it when you return.
          </p>

          {/* Steps list */}
          <div
            style={{
              display: "flex",
              flexDirection: "column" as const,
              gap: "1rem",
            }}
          >
            {[
              {
                step: "1",
                title: "Describe the exposure assignment",
                body: "Tell MEOK exactly what your therapist has asked you to do, how you feel about it, and what you are afraid will happen. Articulating the catastrophic prediction out loud is the first step in examining it.",
              },
              {
                step: "2",
                title: "Examine the predictions",
                body: "MEOK asks questions that help you evaluate your predictions \u2014 not to dismiss the fear, but to distinguish between what feels certain and what is actually probable. This mirrors the Socratic questioning technique used in CBT.",
              },
              {
                step: "3",
                title: "Practise grounding and breathing",
                body: "Before the exposure, practise your agreed coping techniques with MEOK. Box breathing (4-4-4-4), the 5-4-3-2-1 sensory grounding technique, or paced breathing. Rehearsal reduces friction in the moment.",
              },
              {
                step: "4",
                title: "Set your intent",
                body: "Describe to MEOK what you are going to do, when, and what you will do if the urge to avoid becomes strong. Verbal commitment increases follow-through. MEOK holds the commitment and asks about it next session.",
              },
              {
                step: "5",
                title: "Debrief after the exposure",
                body: "Return to MEOK after the attempt. What happened? What was the peak distress? Did it subside? What did you learn about your prediction? This consolidation is as important as the exposure itself.",
              },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  display: "flex",
                  gap: "1.125rem",
                  alignItems: "flex-start",
                  background: CARD_BG,
                  border: `1px solid ${BORDER_FAINT}`,
                  borderRadius: "0.625rem",
                  padding: "1.125rem 1.25rem",
                }}
              >
                <div
                  style={{
                    minWidth: "2rem",
                    height: "2rem",
                    borderRadius: "50%",
                    background: CARD_BG_GOLD,
                    border: `1px solid ${BORDER_GOLD}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    color: GOLD,
                    flexShrink: 0,
                  }}
                >
                  {item.step}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 700,
                      color: TEXT,
                      marginBottom: "0.3rem",
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: MUTED_STRONG,
                      lineHeight: 1.7,
                    }}
                  >
                    {item.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 5: AI-assisted journalling for phobia management ────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.625rem",
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: "1rem",
              paddingBottom: "0.625rem",
              borderBottom: `1px solid ${BORDER_FAINT}`,
            }}
          >
            How does AI-assisted journalling help with phobia management and fear
            processing?
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.125rem",
            }}
          >
            Journalling has a substantial evidence base in emotional regulation. Writing
            about a feared experience engages the prefrontal cortex \u2014 the rational,
            language-based part of the brain \u2014 and creates some distance between
            the raw fear response and the reflective interpretation of it. This is
            sometimes called <strong style={{ color: TEXT }}>affect labelling</strong>:
            putting feelings into words demonstrably reduces amygdala activation. The
            journal is not just a diary. It is a neural regulation tool.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.125rem",
            }}
          >
            The limitation of traditional journalling is that it is one-directional.
            You write into a void. There is no questioning of assumptions, no gentle
            challenge of avoidance reasoning, no pattern recognition across weeks of
            entries. AI-assisted journalling with MEOK changes this dynamic. You write
            \u2014 or speak \u2014 and MEOK responds. It asks clarifying questions. It
            reflects back what it has heard. It surfaces connections: "You mentioned
            two weeks ago that the fear was worst in the morning. Is that still true?"
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.125rem",
            }}
          >
            Sovereign Memory makes this possible in a way that standard AI cannot
            replicate. MEOK remembers your phobia history \u2014 the specific fear object,
            the situations you have been avoiding, the exposures you have attempted, the
            distress you reported, the breakthrough moments and the setbacks. Each
            conversation is not a blank slate. It is a chapter in a continuous story
            that MEOK is actively tracking on your behalf.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.5rem",
            }}
          >
            For phobia management specifically, the most useful journalling prompts
            involve anticipatory anxiety (before an encounter), real-time processing
            (during or immediately after), and retrospective reflection (several days
            later, when the emotional temperature has dropped). MEOK can provide all
            three, timed to when you actually need them.
          </p>

          {/* Feature highlight box: journalling prompts */}
          <div
            style={{
              background: "rgba(106,170,100,0.05)",
              border: "1px solid rgba(106,170,100,0.22)",
              borderRadius: "0.875rem",
              padding: "1.5rem",
            }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: GREEN,
                marginBottom: "0.875rem",
              }}
            >
              Example Journalling Prompts MEOK Uses for Phobia Processing
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column" as const,
                gap: "0.75rem",
              }}
            >
              {[
                {
                  phase: "Before the exposure",
                  prompt:
                    "What is the worst thing you believe could happen? On a scale of 0\u2013100, how likely is that, really? What would you tell a close friend who had the same prediction?",
                },
                {
                  phase: "During high anxiety",
                  prompt:
                    "Name five things you can see right now. What is your feet feeling on the floor? You are safe. The anxiety is uncomfortable, not dangerous. What is happening in your body at this exact moment?",
                },
                {
                  phase: "Immediately after",
                  prompt:
                    "What was the peak distress? Did it peak and then come down? What did the feared thing actually do? Was the prediction accurate?",
                },
                {
                  phase: "Reflective (days later)",
                  prompt:
                    "Looking back, what does this exposure tell you about your fear? Did the anxiety go as high as you predicted? Did anything unexpected happen that is worth noting?",
                },
                {
                  phase: "Tracking avoidance",
                  prompt:
                    "This week, were there moments you chose avoidance? What was the immediate pull? What did avoidance cost you? Is there a smaller version of the avoided thing you could have approached instead?",
                },
              ].map((item) => (
                <div
                  key={item.phase}
                  style={{
                    display: "flex",
                    flexDirection: "column" as const,
                    gap: "0.25rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: GREEN,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {item.phase}
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: MUTED_STRONG,
                      lineHeight: 1.7,
                    }}
                  >
                    {item.prompt}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 6: Specific phobias MEOK can support ──────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.625rem",
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: "1rem",
              paddingBottom: "0.625rem",
              borderBottom: `1px solid ${BORDER_FAINT}`,
            }}
          >
            Which specific phobias can MEOK support most effectively?
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.5rem",
            }}
          >
            MEOK is not designed or marketed for any specific phobia type. However,
            its strengths \u2014 persistent memory, grounding support, non-judgmental
            reflection, and between-session continuity \u2014 are particularly useful
            for phobias where anticipatory anxiety and avoidance cognition are the
            primary barriers, rather than situations requiring live clinical supervision
            to manage safely. Below is an honest assessment of where AI support adds
            genuine value.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column" as const,
              gap: "1.25rem",
            }}
          >
            {[
              {
                phobia: "Social anxiety",
                how: "MEOK can help you prepare for feared social events \u2014 examining catastrophic predictions, practising what you want to say, debriefing after the event without shame. Because social anxiety often involves endless post-event rumination, MEOK can interrupt the loop with grounding questions and perspective checks.",
                note: "Significant social phobia benefits greatly from professional CBT alongside AI support.",
              },
              {
                phobia: "Flying phobia (aviophobia)",
                how: "MEOK supports the cognitive work between flights: examining the statistics, processing anticipatory anxiety in the weeks before travel, coaching breathing and grounding during the lead-up, and debriefing after landing. The Healer archetype is particularly effective for the weeks of dread that precede a booked flight.",
                note: "Single-session intensive flying phobia programmes run by qualified psychologists remain highly effective.",
              },
              {
                phobia: "Needle phobia (trypanophobia)",
                how: "Needle phobia is one of the most medically consequential phobias, causing delayed cancer screenings, avoided vaccinations, and untreated conditions. MEOK can help you reduce anticipatory anxiety before appointments, explore what specifically drives the fear (pain, loss of control, illness associations), and build a step-by-step plan to approach medical care incrementally.",
                note: "Applied tension technique for vasovagal needle phobia should be taught by a trained clinician.",
              },
              {
                phobia: "Height phobia (acrophobia)",
                how: "For acrophobia not triggered by genuinely dangerous situations, MEOK can support imaginal exposure \u2014 walking through feared height scenarios in detail \u2014 and help you debrief after real-world exposure attempts. It can also help you identify which height situations you are avoiding unnecessarily and which require more care.",
                note: "Physical safety must always take precedence. MEOK does not assess situational risk.",
              },
              {
                phobia: "Driving anxiety (vehophobia)",
                how: "MEOK can help build a graduated driving anxiety hierarchy, from sitting in a parked car through to driving unfamiliar routes. It tracks your distress ratings across attempts, notices patterns, and supports the cognitive work of separating past accident associations from present-day assessments of risk.",
                note: "Post-accident driving anxiety with PTSD features requires trauma-informed clinical support.",
              },
            ].map((item) => (
              <div
                key={item.phobia}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${BORDER_FAINT}`,
                  borderRadius: "0.75rem",
                  padding: "1.25rem 1.375rem",
                }}
              >
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: GOLD,
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.phobia}
                </div>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.75,
                    color: MUTED_STRONG,
                    marginBottom: "0.75rem",
                  }}
                >
                  {item.how}
                </p>
                <div
                  style={{
                    fontSize: "0.8125rem",
                    color: AMBER,
                    fontStyle: "italic",
                    lineHeight: 1.6,
                  }}
                >
                  Note: {item.note}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 7: Staying grounded during daily avoidance urges ───── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.625rem",
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: "1rem",
              paddingBottom: "0.625rem",
              borderBottom: `1px solid ${BORDER_FAINT}`,
            }}
          >
            How can MEOK help you stay grounded when avoidance urges hit in
            daily life?
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.125rem",
            }}
          >
            The majority of phobia management does not happen in a therapist&apos;s office
            or at the top of a fear ladder. It happens in the small, ordinary moments
            \u2014 the email that says the team meeting will be at height; the appointment
            reminder for a blood test; the friend group organising a flight. The avoidance
            urge arrives fast, it feels urgent, and the relief of declining is immediate.
            By the time you have thought it through properly, the window has often closed.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.125rem",
            }}
          >
            MEOK&apos;s role in these moments is not to push you toward confrontation.
            It is to create a brief, reflective pause between the avoidance urge and
            the avoidance action. Even thirty seconds of grounded reflection \u2014
            naming the fear, acknowledging the urge, identifying what avoidance costs
            \u2014 can interrupt the automatic pattern. It will not always result in
            approach. But approach becomes more possible when the decision is conscious
            rather than reflexive.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.5rem",
            }}
          >
            MEOK can also track these moments across time. When you have logged six
            avoidance decisions in two weeks, the pattern becomes visible to both you
            and MEOK. That visibility is valuable \u2014 not for inducing shame, but for
            giving you and your therapist accurate information about where the work
            currently needs to happen.
          </p>

          {/* Grounding techniques box */}
          <div
            style={{
              background: "rgba(201,168,76,0.05)",
              border: `1px solid ${BORDER_GOLD}`,
              borderRadius: "0.875rem",
              padding: "1.5rem",
            }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: GOLD,
                marginBottom: "0.875rem",
              }}
            >
              Grounding Techniques MEOK Supports
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(14rem, 1fr))",
                gap: "0.875rem",
              }}
            >
              {[
                {
                  name: "Box breathing",
                  desc: "Inhale 4 counts, hold 4, exhale 4, hold 4. Activates the parasympathetic nervous system and reduces physiological arousal within 60\u201390 seconds.",
                },
                {
                  name: "5-4-3-2-1",
                  desc: "Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste. Pulls attention to the present sensory environment and out of the fear spiral.",
                },
                {
                  name: "Feet on the floor",
                  desc: "Press both feet firmly into the floor. Notice the pressure and texture. This proprioceptive technique grounds you in your body when the mind is racing.",
                },
                {
                  name: "Cold water technique",
                  desc: "Cold water on wrists or face activates the dive reflex, rapidly reducing heart rate. Simple and effective for acute fear responses.",
                },
                {
                  name: "Affect labelling",
                  desc: "Simply naming the emotion \u2014 \u201cI am feeling anxious right now\u201d \u2014 activates the prefrontal cortex and reduces amygdala reactivity. Write it to MEOK.",
                },
                {
                  name: "Acceptance statement",
                  desc: "\"This is anxiety. It is uncomfortable but not dangerous. It will peak and subside. I do not need to escape it.\" Reduces the secondary fear of the fear response itself.",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  style={{
                    background: CARD_BG,
                    borderRadius: "0.5rem",
                    padding: "0.875rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.8125rem",
                      fontWeight: 700,
                      color: GOLD,
                      marginBottom: "0.375rem",
                    }}
                  >
                    {item.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8125rem",
                      color: MUTED_STRONG,
                      lineHeight: 1.65,
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 8: What MEOK cannot do ────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.625rem",
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: "1rem",
              paddingBottom: "0.625rem",
              borderBottom: `1px solid ${BORDER_FAINT}`,
            }}
          >
            What can&apos;t MEOK do, and when must you seek professional clinical help?
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.125rem",
            }}
          >
            Honesty about limitations is not a disclaimer buried in the small print.
            It is central to what makes MEOK trustworthy. There are things an AI
            companion simply cannot do for phobia management, and understanding those
            limits clearly is part of using the tool responsibly.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column" as const,
              gap: "0.875rem",
              marginBottom: "1.5rem",
            }}
          >
            {[
              {
                cannot:
                  "Diagnose a phobia or any other mental health condition",
                why: "Clinical diagnosis requires a qualified mental health professional. MEOK will never tell you that you have a phobia, OCD, PTSD, or any other condition.",
              },
              {
                cannot: "Conduct or supervise exposure therapy",
                why: "Live clinical supervision during exposure is necessary for safety. MEOK can support preparation and reflection, but it cannot be present in the way a therapist is during a live exposure exercise.",
              },
              {
                cannot: "Replace the relational dimension of therapy",
                why: "The therapeutic relationship itself has therapeutic value. The felt sense of being witnessed by another human being who is professionally trained to help is not replicable by an AI.",
              },
              {
                cannot: "Assess physical safety",
                why: "MEOK cannot determine whether a specific height situation is actually dangerous, whether your driving anxiety is rationally founded on a genuine mechanical concern, or whether a physical symptom you have attributed to anxiety requires medical investigation.",
              },
              {
                cannot:
                  "Manage complex comorbidities \u2014 PTSD, OCD, eating disorders linked to phobia",
                why: "Phobias that co-occur with trauma, obsessive-compulsive patterns, or disordered eating require specialised clinical treatment. AI support in these contexts requires careful professional oversight.",
              },
              {
                cannot: "Respond to psychiatric emergencies",
                why: "If phobia-related anxiety triggers a panic attack severe enough to feel like a medical emergency, or if you are experiencing a mental health crisis, please contact 999 (emergency), 111 option 2 (NHS urgent mental health), or Samaritans 116 123.",
              },
            ].map((item) => (
              <div
                key={item.cannot}
                style={{
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: "0.375rem",
                  background: "rgba(232,168,56,0.05)",
                  border: "1px solid rgba(232,168,56,0.18)",
                  borderRadius: "0.625rem",
                  padding: "1rem 1.25rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 700,
                    color: AMBER,
                  }}
                >
                  MEOK cannot: {item.cannot}
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: MUTED_STRONG,
                    lineHeight: 1.7,
                  }}
                >
                  {item.why}
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
            }}
          >
            The general rule: if your phobia is causing clinically significant
            impairment to daily functioning, relationships, work, or health \u2014 and
            especially if it has persisted for more than six months without improvement
            \u2014 please seek professional support. NHS Talking Therapies (formerly IAPT)
            offers free CBT via self-referral in most areas. You do not need a GP
            referral in most parts of England. Visit{" "}
            <strong style={{ color: TEXT }}>nhs.uk/talkingtherapies</strong> to find
            your local service.
          </p>
        </section>

        {/* ── SECTION 9: Sovereign Memory and persistent context ─────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.625rem",
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: "1rem",
              paddingBottom: "0.625rem",
              borderBottom: `1px solid ${BORDER_FAINT}`,
            }}
          >
            How does Sovereign Memory make MEOK different from other AI tools for
            phobia support?
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.125rem",
            }}
          >
            Every other AI tool you might use for phobia support \u2014 ChatGPT,
            Claude, Woebot, Wysa \u2014 starts each conversation from zero. They have
            no knowledge of what you told them last week. They cannot observe the arc
            of your progress over months. They cannot notice that three weeks ago your
            anticipatory anxiety about needles was a 7/10 and now, after two GP
            appointments, it has come down to a 4. This statelessness is not just an
            inconvenience. For mental health support, it is a fundamental limitation.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.125rem",
            }}
          >
            MEOK&apos;s Sovereign Memory is a four-layer encrypted memory architecture
            that retains your personal context indefinitely, stored in encrypted form
            that only you control. Fleeting memory captures in-session context. Working
            memory holds your current active concerns and exposures. Episodic memory
            retains specific meaningful events \u2014 the first time you completed a
            feared exposure, the appointment you almost cancelled but attended. Semantic
            memory holds your persistent beliefs, fears, and patterns across the entire
            relationship.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.125rem",
            }}
          >
            For phobia management specifically, this means MEOK knows: the specific
            feared stimulus and its variations; the hierarchy of feared situations you
            have described; which exposures you have attempted and when; your reported
            distress levels before and after; the avoidance patterns across weeks; and
            the language you use to describe your fear. When you return after a difficult
            week, MEOK does not need the full backstory again. It is already inside
            your story. It asks about what happened, not about who you are.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.5rem",
            }}
          >
            Privacy is a first principle, not an afterthought. Your memory data is
            encrypted at rest and in transit. MEOK does not train on your personal
            data. You own your data and can export or delete it at any time. This
            matters for mental health data in particular \u2014 the contents of your
            fear history are sensitive, and they deserve to be held with the same
            care as any medical record.
          </p>

          {/* Feature highlight: memory architecture */}
          <div
            style={{
              background: "rgba(201,168,76,0.05)",
              border: `1px solid ${BORDER_GOLD}`,
              borderRadius: "0.875rem",
              padding: "1.5rem",
            }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: GOLD,
                marginBottom: "0.875rem",
              }}
            >
              Sovereign Memory: Four Layers for Phobia Context
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column" as const,
                gap: "0.75rem",
              }}
            >
              {[
                {
                  layer: "Fleeting",
                  colour: "#6aaa64",
                  desc: "Current session context \u2014 what you are talking about right now, the tone of the conversation, the emotional state you have expressed today.",
                },
                {
                  layer: "Working",
                  colour: "#4ea8de",
                  desc: "Active concerns and current goals \u2014 the exposure assignment your therapist set, the upcoming appointment you are dreading, the avoidance pattern you are trying to break.",
                },
                {
                  layer: "Episodic",
                  colour: "#c9a84c",
                  desc: "Specific meaningful events \u2014 the first time you sat in the car without having a panic attack, the blood test you finally completed, the flight you took last summer.",
                },
                {
                  layer: "Semantic",
                  colour: "#a78bfa",
                  desc: "Persistent patterns and beliefs \u2014 your core feared outcomes, your avoidance architecture, the language and metaphors you use for your fear across years.",
                },
              ].map((item) => (
                <div
                  key={item.layer}
                  style={{
                    display: "flex",
                    gap: "0.875rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      minWidth: "5.5rem",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: item.colour,
                    }}
                  >
                    {item.layer}
                  </div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: MUTED_STRONG,
                      lineHeight: 1.7,
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 10: Real-world use pattern ────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.625rem",
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: "1rem",
              paddingBottom: "0.625rem",
              borderBottom: `1px solid ${BORDER_FAINT}`,
            }}
          >
            What does a realistic week of using MEOK alongside phobia therapy look
            like?
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.5rem",
            }}
          >
            Abstract descriptions of AI support are less useful than a concrete picture
            of how the tool integrates into a real working week. The following is a
            representative example for someone managing a needle phobia while also
            seeing a CBT therapist fortnightly. The schedule is illustrative, not
            prescriptive. Your therapist&apos;s recommendations always take precedence.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column" as const,
              gap: "0.875rem",
            }}
          >
            {[
              {
                day: "Monday (post-therapy session)",
                desc: "You have just come from your CBT appointment. Your therapist has assigned homework: make a GP appointment for a routine blood test you have been avoiding for eight months. You describe the assignment to MEOK, voice the catastrophic thoughts, and write out your fear hierarchy for blood tests. MEOK stores all of it and confirms the homework.",
              },
              {
                day: "Tuesday (avoidance urge arrives)",
                desc: "You go to book the appointment and your anxiety spikes. You message MEOK instead of closing the browser. MEOK asks you to name exactly what you are afraid will happen. You write it out. MEOK asks: is that prediction accurate? You stay in the conversation for seven minutes. You book the appointment.",
              },
              {
                day: "Thursday (anticipatory processing)",
                desc: "The appointment is in three days and the dread is building. You journal with MEOK about what specifically you are afraid of \u2014 the sight of the needle, the loss of control, the fear of fainting. MEOK introduces the applied tension awareness concept your therapist discussed and helps you practise the breathing sequence.",
              },
              {
                day: "Saturday (day before appointment)",
                desc: "You do a five-minute grounding exercise with MEOK. 5-4-3-2-1. Box breathing. You write an acceptance statement. MEOK reflects it back and asks what you want to remind yourself of when you are in the waiting room tomorrow.",
              },
              {
                day: "Sunday (post-appointment debrief)",
                desc: "You went. The distress peaked at around 65/100 and came down by the time you left the building. You debrief with MEOK. It notices that the peak was lower than your prediction of 80+. It stores the episode. Next session it will surface this as evidence against the catastrophic prediction.",
              },
              {
                day: "Following week (pattern tracking)",
                desc: "You come to MEOK for your regular Sunday evening check-in. It recalls the blood test episode, notes that you rated the avoidance urge before booking as a 9/10 and the actual experience as a 65/100, and asks how that comparison sits with you. You bring this data to your therapist on Monday.",
              },
            ].map((item) => (
              <div
                key={item.day}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${BORDER_FAINT}`,
                  borderRadius: "0.625rem",
                  padding: "1.125rem 1.375rem",
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
                  {item.day}
                </div>
                <div
                  style={{
                    fontSize: "0.9375rem",
                    color: MUTED_STRONG,
                    lineHeight: 1.75,
                  }}
                >
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 11: FAQ ────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.625rem",
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: "1.5rem",
              paddingBottom: "0.625rem",
              borderBottom: `1px solid ${BORDER_FAINT}`,
            }}
          >
            Frequently asked questions about AI and phobia management
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column" as const,
              gap: "1.25rem",
            }}
          >
            {[
              {
                q: "Can MEOK AI help me overcome a phobia?",
                a: "MEOK is not a clinical tool and cannot treat or cure a phobia. However, it can meaningfully support the process \u2014 helping you understand the fear cycle, prepare mentally for exposure exercises your therapist has assigned, journal your anxiety before and after sessions, and stay grounded during day-to-day avoidance urges. It is a complement to professional CBT, not a replacement.",
              },
              {
                q: "What is the Healer archetype and why is it good for phobia support?",
                a: "The Healer archetype in MEOK is designed for emotional processing, patient reflection, and gentle accountability rather than intense coaching or problem-solving. It holds space, asks grounding questions, and paces conversations at the speed of your nervous system. For phobia management, this patient quality is more valuable than a productivity-oriented archetype that might push too hard.",
              },
              {
                q: "How is MEOK different from Woebot or Wysa for phobia support?",
                a: "Woebot and Wysa use scripted CBT modules without persistent memory across sessions. MEOK uses Sovereign Memory \u2014 a 4-layer encrypted memory store \u2014 that retains your specific fear history, exposure attempts, distress ratings, and avoidance patterns across weeks and months. This continuity allows MEOK to notice patterns, track genuine progress, and respond from within your story rather than from zero each session.",
              },
              {
                q: "Can AI replace exposure therapy for phobias?",
                a: "No. AI cannot replace exposure therapy. The core mechanism of phobia treatment \u2014 staying in contact with a feared stimulus long enough for anxiety to peak and naturally subside, under appropriate clinical supervision \u2014 cannot be safely conducted by an AI. MEOK supports the between-session work, the preparation, the processing, and the daily pattern tracking. Exposure therapy itself requires a trained clinician.",
              },
              {
                q: "Is it safe to use MEOK if I have a severe phobia?",
                a: "MEOK is designed to be safe as a supplementary tool. Its Maternal Covenant care-floor prevents the AI from providing harmful advice, validating avoidance in ways that deepen impairment, or becoming a substitute for urgent professional care. For severe phobias causing significant daily impairment, please work with a qualified therapist. MEOK encourages this and will always prompt professional referral when indicators warrant it.",
              },
            ].map((item) => (
              <div
                key={item.q}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${BORDER_FAINT}`,
                  borderRadius: "0.75rem",
                  padding: "1.25rem 1.375rem",
                }}
              >
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: TEXT,
                    marginBottom: "0.625rem",
                    lineHeight: 1.4,
                  }}
                >
                  {item.q}
                </div>
                <div
                  style={{
                    fontSize: "0.9375rem",
                    color: MUTED_STRONG,
                    lineHeight: 1.75,
                  }}
                >
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 12: UK Resources ───────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.625rem",
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: "1rem",
              paddingBottom: "0.625rem",
              borderBottom: `1px solid ${BORDER_FAINT}`,
            }}
          >
            What UK resources exist for phobia treatment and mental health support?
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.5rem",
            }}
          >
            If you are in the UK and your phobia is causing significant distress or
            impairment, you have access to free, evidence-based treatment through
            the NHS. The following resources are available right now without a
            GP referral in most areas of England.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column" as const,
              gap: "0.875rem",
            }}
          >
            {[
              {
                name: "NHS Talking Therapies (formerly IAPT)",
                detail:
                  "Free CBT and other psychological therapies for anxiety disorders including phobias. Self-referral available in most English areas. Visit nhs.uk/talkingtherapies.",
                tag: "Free CBT",
                tagColour: GREEN,
              },
              {
                name: "Samaritans",
                detail:
                  "116 123 \u2014 free, 24 hours a day, 7 days a week. Not only for crisis \u2014 also for anyone struggling and needing to talk without judgment.",
                tag: "Free 24/7",
                tagColour: GREEN,
              },
              {
                name: "Mind Infoline",
                detail:
                  "0300 123 3393 \u2014 information and support for mental health, including finding local services. Monday to Friday, 9am\u20136pm.",
                tag: "Information & referral",
                tagColour: "#4ea8de",
              },
              {
                name: "No Panic",
                detail:
                  "0300 772 9844 \u2014 UK charity specifically for anxiety disorders, phobias, OCD, and panic. Runs a helpline and recovery programmes.",
                tag: "Phobia-specific",
                tagColour: GOLD,
              },
              {
                name: "NHS urgent mental health support",
                detail:
                  "Call 111, option 2 \u2014 24/7 urgent mental health support from NHS clinicians. For urgent but non-emergency mental health situations.",
                tag: "Urgent",
                tagColour: AMBER,
              },
              {
                name: "British Psychological Society \u2014 Find a Psychologist",
                detail:
                  "bps.org.uk \u2014 for finding accredited private CBT therapists with specialist phobia experience if you prefer not to wait for NHS therapy.",
                tag: "Private",
                tagColour: MUTED,
              },
            ].map((item) => (
              <div
                key={item.name}
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                  background: CARD_BG,
                  border: `1px solid ${BORDER_FAINT}`,
                  borderRadius: "0.625rem",
                  padding: "1rem 1.25rem",
                }}
              >
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "0.625rem",
                      marginBottom: "0.375rem",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        color: TEXT,
                      }}
                    >
                      {item.name}
                    </div>
                    <span
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase" as const,
                        color: item.tagColour,
                        border: `1px solid ${item.tagColour}44`,
                        borderRadius: "999px",
                        padding: "0.15rem 0.5rem",
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: MUTED_STRONG,
                      lineHeight: 1.7,
                    }}
                  >
                    {item.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECOND PULL QUOTE ──────────────────────────────────────────── */}
        <blockquote
          style={{
            margin: "2.5rem 0",
            padding: "1.75rem 2rem",
            borderLeft: `4px solid ${GREEN}`,
            background: "rgba(106,170,100,0.05)",
            borderRadius: "0 0.75rem 0.75rem 0",
          }}
        >
          <p
            style={{
              fontSize: "1.125rem",
              fontStyle: "italic",
              lineHeight: 1.75,
              color: TEXT,
              marginBottom: "0.75rem",
            }}
          >
            &ldquo;The hardest thing about a phobia is not the feared thing itself.
            It&apos;s the exhausting vigilance of building a life around not encountering
            it. MEOK is for the moments between therapy \u2014 the small daily choices
            where avoidance or approach is decided, quietly, before anyone else
            is watching.&rdquo;
          </p>
          <cite
            style={{
              fontSize: "0.8125rem",
              color: GREEN,
              fontStyle: "normal",
              fontWeight: 600,
            }}
          >
            Nicholas Templeman, Founder \u2014 MEOK AI LABS
          </cite>
        </blockquote>

        {/* ── SECTION 13: The Maternal Covenant and safety architecture ───── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.625rem",
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: "1rem",
              paddingBottom: "0.625rem",
              borderBottom: `1px solid ${BORDER_FAINT}`,
            }}
          >
            How does MEOK&apos;s safety architecture protect users managing a phobia?
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.125rem",
            }}
          >
            AI tools used for mental health support carry genuine risks if poorly
            designed. An AI that validates avoidance as a reasonable long-term
            strategy, that provides false reassurance to reduce distress in the moment,
            or that fails to escalate when a user is in genuine crisis, is not a
            mental health support tool. It is a comfort machine that makes the
            underlying condition worse. MEOK is designed differently.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.125rem",
            }}
          >
            The <strong style={{ color: TEXT }}>Maternal Covenant</strong> is MEOK&apos;s
            care-floor architecture \u2014 a set of inviolable constraints, governed
            by the Byzantine Council of forty-three distributed AI agents, that define
            what MEOK will never do regardless of what a user asks. For phobia management
            specifically, these constraints include: never validating avoidance as a
            sufficient long-term solution; never pretending to be capable of delivering
            clinical exposure therapy; always escalating when language suggests a user
            is in crisis; and always being explicit about the distinction between AI
            support and professional clinical treatment.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.5rem",
            }}
          >
            The Byzantine Council is MEOK&apos;s distributed governance layer. Rather than
            a single AI model making all decisions, a council of forty-three specialised
            agents must reach consensus before certain response types are approved. This
            architecture prevents any single point of failure in safety-critical
            decisions \u2014 including those that arise in sensitive mental health
            conversations. It is named after the Byzantine Fault Tolerance problem in
            computer science: a system that can reach correct consensus even when some
            nodes fail or behave unexpectedly.
          </p>

          {/* Safety architecture callout */}
          <div
            style={{
              background: "rgba(232,168,56,0.05)",
              border: "1px solid rgba(232,168,56,0.22)",
              borderRadius: "0.875rem",
              padding: "1.5rem",
            }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: AMBER,
                marginBottom: "0.875rem",
              }}
            >
              Maternal Covenant Constraints Relevant to Phobia Support
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column" as const,
                gap: "0.625rem",
              }}
            >
              {[
                "Never validate avoidance as a sufficient long-term strategy for phobia management",
                "Never simulate or supervise live exposure therapy",
                "Always distinguish between AI support and clinical treatment",
                "Always escalate language indicating a mental health crisis to professional resources",
                "Never provide false reassurance that reduces appropriate help-seeking",
                "Never become a comfort dependency that replaces rather than supports professional care",
                "Always hold the user\u2019s long-term wellbeing above immediate emotional comfort",
              ].map((constraint) => (
                <div
                  key={constraint}
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: GREEN,
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      flexShrink: 0,
                      marginTop: "0.1rem",
                    }}
                  >
                    &#10003;
                  </span>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: MUTED_STRONG,
                      lineHeight: 1.65,
                    }}
                  >
                    {constraint}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SUMMARY SECTION ────────────────────────────────────────────── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.625rem",
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: "1rem",
              paddingBottom: "0.625rem",
              borderBottom: `1px solid ${BORDER_FAINT}`,
            }}
          >
            Can MEOK help you manage fear and avoidance? An honest summary
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.125rem",
            }}
          >
            Yes \u2014 with clear limits. MEOK is not a replacement for CBT or exposure
            therapy. It cannot diagnose a phobia, conduct supervised exposures, or manage
            psychiatric emergencies. If your phobia is causing clinically significant
            impairment, please pursue professional care through NHS Talking Therapies
            or a private CBT therapist.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.125rem",
            }}
          >
            What MEOK can do is fill the significant gap between therapy sessions.
            It can help you understand the phobia cycle. It can hold the context of
            your fears across weeks and months. It can support preparation before
            exposures and processing after them. It can interrupt avoidance urges
            in the moment with grounding techniques and reflective questioning. And
            it can track your progress in a way that gives you and your therapist
            useful, accurate information about where you actually are in the work.
          </p>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              color: MUTED_STRONG,
              marginBottom: "1.5rem",
            }}
          >
            Eight million UK adults live with a specific phobia. The majority will
            never seek treatment. For many of them, the barrier is not lack of
            knowledge about what helps \u2014 it is the gap between knowing and doing,
            the daily avoidance decisions made in private, the absence of anything
            that can hold their context across the long, incremental work of facing
            what frightens them. MEOK was built for that gap.
          </p>

          {/* Summary table */}
          <div
            style={{
              background: CARD_BG,
              border: `1px solid ${BORDER_FAINT}`,
              borderRadius: "0.75rem",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "0.875rem 1.25rem",
                borderBottom: `1px solid ${BORDER_FAINT}`,
                background: CARD_BG_GOLD,
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase" as const,
                  color: GOLD,
                }}
              >
                <span>MEOK can help with</span>
                <span>MEOK cannot replace</span>
              </div>
            </div>
            {[
              [
                "Understanding the phobia cycle and avoidance mechanism",
                "Clinical diagnosis of a specific phobia",
              ],
              [
                "Preparing mentally for exposure exercises",
                "Supervised exposure therapy with a trained clinician",
              ],
              [
                "Processing anxiety before and after exposures",
                "The relational dimension of therapeutic alliance",
              ],
              [
                "Grounding techniques during acute avoidance urges",
                "Assessment of physical safety in feared situations",
              ],
              [
                "Tracking distress patterns across weeks and months",
                "Management of complex comorbidities (PTSD, OCD)",
              ],
              [
                "Holding your fear history across sessions via Sovereign Memory",
                "Psychiatric emergency response",
              ],
              [
                "Gentle accountability for exposure homework",
                "GP or psychiatric medication management",
              ],
            ].map(([can, cannot]) => (
              <div
                key={can}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  padding: "0.875rem 1.25rem",
                  borderBottom: `1px solid ${BORDER_FAINT}`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: GREEN,
                      fontWeight: 700,
                      fontSize: "0.875rem",
                      flexShrink: 0,
                    }}
                  >
                    &#10003;
                  </span>
                  <span
                    style={{
                      fontSize: "0.8125rem",
                      color: MUTED_STRONG,
                      lineHeight: 1.6,
                    }}
                  >
                    {can}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: AMBER,
                      fontWeight: 700,
                      fontSize: "0.875rem",
                      flexShrink: 0,
                    }}
                  >
                    &#10005;
                  </span>
                  <span
                    style={{
                      fontSize: "0.8125rem",
                      color: MUTED_STRONG,
                      lineHeight: 1.6,
                    }}
                  >
                    {cannot}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section
          style={{
            background: "rgba(201,168,76,0.07)",
            border: `1px solid ${BORDER_GOLD}`,
            borderRadius: "1rem",
            padding: "2.5rem",
            textAlign: "center" as const,
          }}
        >
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase" as const,
              color: GOLD,
              marginBottom: "0.875rem",
            }}
          >
            Ready to try MEOK?
          </div>
          <h3
            style={{
              fontSize: "clamp(1.375rem, 3vw, 1.875rem)",
              fontWeight: 800,
              lineHeight: 1.25,
              color: TEXT,
              marginBottom: "0.875rem",
              letterSpacing: "-0.01em",
            }}
          >
            Start your sovereign AI companion
          </h3>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.75,
              color: MUTED_STRONG,
              marginBottom: "1.75rem",
              maxWidth: "30rem",
              margin: "0 auto 1.75rem",
            }}
          >
            Choose your archetype, including the Healer for emotional processing and
            phobia support. Your memory is encrypted, yours to own, and carries
            everything between sessions.
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
              padding: "0.875rem 2.25rem",
              borderRadius: "9999px",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            Meet your MEOK companion &#8594;
          </Link>
          <div
            style={{
              marginTop: "1.125rem",
              fontSize: "0.8rem",
              color: MUTED_FAINT,
            }}
          >
            Healer archetype available &middot; Sovereign Memory &middot; Encrypted
            &middot; No data training
          </div>
        </section>

        {/* ── FOOTER NOTE ───────────────────────────────────────────────── */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: `1px solid ${BORDER_FAINT}`,
          }}
        >
          <div
            style={{
              background: "rgba(232,168,56,0.06)",
              border: "1px solid rgba(232,168,56,0.2)",
              borderRadius: "0.75rem",
              padding: "1.25rem 1.5rem",
              fontSize: "0.8125rem",
              color: MUTED_STRONG,
              lineHeight: 1.8,
              marginBottom: "1.5rem",
            }}
          >
            <strong style={{ color: AMBER }}>Reminder: </strong>
            MEOK is not a medical device, does not diagnose conditions, and does not
            provide clinical treatment. Information in this article is educational and
            does not constitute medical or psychological advice. If your phobia is
            causing significant distress or impairment, please consult a qualified
            mental health professional. For free NHS therapy, visit{" "}
            <strong style={{ color: TEXT }}>nhs.uk/talkingtherapies</strong>. For
            urgent support: Samaritans{" "}
            <strong style={{ color: TEXT }}>116 123</strong> (free, 24/7).
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
              fontSize: "0.875rem",
              color: MUTED_FAINT,
            }}
          >
            <Link
              href="/blog"
              style={{ color: MUTED_FAINT, textDecoration: "none" }}
            >
              &#8592; All articles
            </Link>
            <Link
              href="/blog/ai-for-anxiety"
              style={{ color: MUTED_FAINT, textDecoration: "none" }}
            >
              AI for Anxiety
            </Link>
            <Link
              href="/blog/ai-for-social-anxiety"
              style={{ color: MUTED_FAINT, textDecoration: "none" }}
            >
              AI for Social Anxiety
            </Link>
            <Link
              href="/blog/ai-for-health-anxiety"
              style={{ color: MUTED_FAINT, textDecoration: "none" }}
            >
              AI for Health Anxiety
            </Link>
            <Link
              href="/blog/meok-companion-archetypes-guide"
              style={{ color: MUTED_FAINT, textDecoration: "none" }}
            >
              Archetypes Guide
            </Link>
            <Link
              href="/blog/ai-companion-vs-therapist"
              style={{ color: MUTED_FAINT, textDecoration: "none" }}
            >
              AI vs Therapist
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
