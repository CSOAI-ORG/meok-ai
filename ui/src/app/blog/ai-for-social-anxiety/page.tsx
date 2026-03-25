import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Social Anxiety: How MEOK Helps You Practise, Process, and Prepare | MEOK AI LABS",
  description:
    "Social anxiety disorder affects 12% of UK adults. MEOK provides a judgment-free space to rehearse difficult conversations, deconstruct post-event spirals, understand triggers, and apply CBT-informed reflection — supplementing, not replacing, professional therapy.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-social-anxiety",
  },
  openGraph: {
    title:
      "AI for Social Anxiety: How MEOK Helps You Practise, Process, and Prepare",
    description:
      "Social anxiety is more than shyness — it is the fear of scrutiny, judgement, and embarrassment that leads to avoidance. MEOK helps you rehearse, reflect, and reclaim confidence one conversation at a time.",
    url: "https://meok.ai/blog/ai-for-social-anxiety",
    siteName: "MEOK AI LABS",
    type: "article",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "AI for Social Anxiety: How MEOK Helps You Practise, Process, and Prepare",
      description:
        "Social anxiety disorder affects 12% of UK adults. MEOK provides a judgment-free space to rehearse difficult conversations, deconstruct post-event spirals, understand triggers, and apply CBT-informed reflection.",
      datePublished: "2026-03-25",
      dateModified: "2026-03-25",
      url: "https://meok.ai/blog/ai-for-social-anxiety",
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
        "@id": "https://meok.ai/blog/ai-for-social-anxiety",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is social anxiety disorder and how common is it in the UK?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Social anxiety disorder (SAD) is a persistent, intense fear of scrutiny, judgement, or embarrassment in social situations. It affects approximately 12% of UK adults at some point in their lives and is one of the most under-diagnosed anxiety conditions because sufferers often avoid the very appointments that could lead to a diagnosis.",
          },
        },
        {
          "@type": "Question",
          name: "Can an AI companion like MEOK help with social anxiety?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MEOK provides a private, zero-judgment environment to rehearse feared conversations, process difficult social events, and explore CBT-informed perspectives on anxious thought patterns. It is not a clinical intervention, but it offers unlimited low-stakes practice that complements professional therapy and fills waiting-list gaps.",
          },
        },
        {
          "@type": "Question",
          name: "How does MEOK help with post-event processing after social anxiety?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Post-event processing is the tendency to replay social interactions looking for evidence of failure. MEOK helps break this cycle by guiding a structured debrief: what actually happened versus what your mind fears happened, identifying cognitive distortions, and separating fact from catastrophic interpretation \u2014 without judgment or impatience.",
          },
        },
        {
          "@type": "Question",
          name: "Is MEOK a replacement for CBT therapy for social anxiety?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. MEOK supplements, not replaces, professional therapy. NHS Talking Therapies offers evidence-based CBT for social anxiety and can be accessed by self-referral on 0300 123 3393. MEOK is most valuable in the gap before treatment begins, between sessions, or as a daily reflection practice alongside ongoing therapy.",
          },
        },
      ],
    },
  ],
};

// ── Shared style constants ────────────────────────────────────────────────────

const GOLD   = "#c9a84c";
const TEXT   = "#f5f0e8";
const BG     = "#0d0c18";
const MUTED  = "rgba(245,240,232,0.62)";
const DIM    = "rgba(245,240,232,0.38)";
const BRIGHT = "rgba(245,240,232,0.82)";
const CARD   = "#13121f";
const BORDER = "#2a2840";
const GREEN  = "#6aaa64";

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForSocialAnxietyPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG,
        fontFamily: "system-ui, -apple-system, sans-serif",
        color: TEXT,
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
              "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(201,168,76,0.13) 0%, transparent 70%)",
          }}
        />
        <div
          style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}
        >
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: DIM,
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
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
                letterSpacing: "0.05em",
                textTransform: "uppercase" as const,
              }}
            >
              Social Anxiety
            </span>
            <span style={{ fontSize: "0.75rem", color: DIM }}>
              March 25, 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: DIM }}>
              14 min read
            </span>
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 3.5vw, 2.85rem)",
              color: "#fff",
              lineHeight: 1.18,
              marginBottom: "1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            AI for Social Anxiety: How MEOK Helps You Practise, Process, and
            Prepare
          </h1>

          <p
            style={{
              color: "rgba(245,240,232,0.55)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: "42rem",
              margin: 0,
            }}
          >
            Social anxiety disorder affects{" "}
            <strong style={{ color: BRIGHT }}>12% of UK adults</strong> — yet
            most never access treatment. It is more than shyness: it is the
            fear of scrutiny, judgement, and embarrassment that causes real
            avoidance. MEOK offers a private, patient space to rehearse
            conversations, deconstruct what happened, and challenge the
            thoughts that keep you small.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────── */}
      <div
        style={{ maxWidth: "48rem", margin: "0 auto", padding: "3.5rem 1.5rem 0" }}
      >

        {/* Disclaimer */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            padding: "1.25rem 1.5rem",
            borderRadius: "1rem",
            marginBottom: "2.5rem",
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.25)",
          }}
        >
          <div
            style={{
              width: "3px",
              borderRadius: "9999px",
              flexShrink: 0,
              background: GOLD,
              alignSelf: "stretch",
            }}
          />
          <div>
            <p
              style={{
                fontWeight: 700,
                fontSize: "0.8125rem",
                color: GOLD,
                marginBottom: "0.375rem",
                margin: "0 0 0.375rem",
              }}
            >
              This article is not medical advice
            </p>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(245,240,232,0.55)",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              MEOK is a supplementary support tool, not a clinical device or
              therapy replacement. For NHS-funded CBT, self-refer to{" "}
              <strong style={{ color: BRIGHT }}>NHS Talking Therapies</strong>{" "}
              on{" "}
              <strong style={{ color: BRIGHT }}>0300 123 3393</strong>. In
              crisis, call{" "}
              <strong style={{ color: BRIGHT }}>Samaritans 116 123</strong> or{" "}
              <strong style={{ color: BRIGHT }}>NHS 111</strong>.
            </p>
          </div>
        </div>

        {/* Author card */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
            padding: "1.25rem 1.5rem",
            borderRadius: "1rem",
            marginBottom: "3rem",
            background: "rgba(245,240,232,0.04)",
            border: "1px solid rgba(245,240,232,0.08)",
          }}
        >
          <div
            style={{
              width: "2.75rem",
              height: "2.75rem",
              borderRadius: "9999px",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              color: BG,
              fontSize: "0.75rem",
              background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontWeight: 700,
                color: TEXT,
                fontSize: "0.875rem",
                margin: "0 0 0.2rem",
              }}
            >
              Nicholas Templeman
            </p>
            <p style={{ fontSize: "0.75rem", color: DIM, margin: 0 }}>
              Founder, MEOK AI LABS &middot; @meok_ai
            </p>
          </div>
        </div>

        {/* ── SECTION 1 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
            color: TEXT,
            lineHeight: 1.3,
            margin: "0 0 0.85rem",
            letterSpacing: "-0.01em",
          }}
        >
          What is social anxiety disorder — and why is it so under-treated?
        </h2>
        <p
          style={{
            color: BRIGHT,
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.15rem",
          }}
        >
          Social anxiety disorder (SAD) affects approximately{" "}
          <strong style={{ color: TEXT }}>12% of UK adults</strong> at some
          point in their lives, making it one of the most prevalent anxiety
          conditions in the country. It is not shyness, introversion, or
          simply being &apos;a bit awkward&apos;. It is a persistent, clinically
          significant fear of being scrutinised, judged, or humiliated in social
          or performance situations — a fear so intense it leads to systematic
          avoidance of the situations that trigger it.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          That avoidance is the core problem. Someone with SAD skips the
          job interview, declines the dinner invitation, sends the email instead
          of making the call, and leaves the meeting before speaking up. Each
          avoided situation provides temporary relief but reinforces the belief
          that social situations are genuinely dangerous — making the next
          encounter feel even harder. This is what clinicians call the
          maintenance cycle of social anxiety, and it is remarkably self-sustaining.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          The under-treatment problem is stark. Most people with social anxiety
          never reach a diagnosis — in part because accessing help requires
          precisely the kind of social interaction they most fear: booking a GP
          appointment, explaining symptoms to a stranger, attending a waiting-room
          full of people. NHS waiting lists for Cognitive Behavioural Therapy
          (CBT), the gold-standard treatment, can stretch months. In that gap,
          avoidance deepens and confidence erodes.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          MEOK is designed to address exactly that gap. Not by replacing
          professional treatment, but by ensuring that waiting for treatment is
          not the same as doing nothing — and that the time between sessions is
          used to practise, reflect, and build momentum rather than retreat
          further into avoidance.
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── SECTION 2 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
            color: TEXT,
            lineHeight: 1.3,
            margin: "0 0 0.85rem",
            letterSpacing: "-0.01em",
          }}
        >
          Social situation rehearsal: practising difficult conversations in a
          safe space
        </h2>
        <p
          style={{
            color: BRIGHT,
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.15rem",
          }}
        >
          One of the most powerful elements of CBT for social anxiety is
          behavioural exposure — approaching feared situations gradually rather
          than avoiding them. The challenge is that in real life, exposure
          opportunities are finite, unpredictable, and carry genuine stakes.
          You cannot re-run a job interview. You cannot restart a dinner party
          conversation. MEOK removes those constraints entirely.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          With MEOK, you describe the social situation you are dreading — a
          presentation to your team, a first date, a call with a difficult
          family member, a conversation about a boundary you need to set — and
          MEOK becomes the other party. You can practise the same exchange as
          many times as you need, restart mid-sentence, ask for a harder or
          gentler version, or slow things down to examine a single moment in
          detail.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1.25rem",
          }}
        >
          The more context you give — the specific person, their usual phrases,
          the history between you, the stakes involved — the more precise and
          useful the rehearsal becomes. Unlike practising alone in the mirror,
          MEOK responds dynamically, introduces realistic complications, and
          remembers what you have practised before across sessions.
        </p>

        {/* Feature box 1 — rehearsal scenarios */}
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
              fontWeight: 800,
              color: GOLD,
              fontSize: "0.8rem",
              letterSpacing: "0.07em",
              textTransform: "uppercase" as const,
              margin: "0 0 1.25rem",
            }}
          >
            Situations you can rehearse with MEOK
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.75rem 1.5rem",
            }}
          >
            {[
              "Job interviews",
              "Saying no to a request",
              "First dates",
              "Confronting a colleague",
              "Asking for a pay rise",
              "Making a difficult phone call",
              "Setting limits with family",
              "Speaking up in a meeting",
              "Awkward social introductions",
              "Ending a conversation gracefully",
              "Asking for help",
              "Disagreeing with authority",
            ].map((scenario) => (
              <div
                key={scenario}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    color: GREEN,
                    fontSize: "0.9rem",
                    lineHeight: "1.5",
                    flexShrink: 0,
                  }}
                >
                  &#10003;
                </span>
                <span
                  style={{
                    color: MUTED,
                    fontSize: "0.875rem",
                    lineHeight: 1.5,
                  }}
                >
                  {scenario}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p
          style={{
            color: MUTED,
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          MEOK&apos;s persistent sovereign memory means each rehearsal session
          builds on the last. It tracks which scenarios you have practised,
          where you tend to freeze, over-apologise, or trail off — and uses
          that knowledge to make subsequent sessions progressively more
          challenging in a targeted way. This is the kind of structured,
          graduated practice that makes exposure effective rather than simply
          stressful.
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── SECTION 3 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
            color: TEXT,
            lineHeight: 1.3,
            margin: "0 0 0.85rem",
            letterSpacing: "-0.01em",
          }}
        >
          Post-event processing: deconstructing what happened without spiralling
        </h2>
        <p
          style={{
            color: BRIGHT,
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.15rem",
          }}
        >
          After a social event, people with social anxiety often engage in
          what researchers call{" "}
          <em style={{ color: BRIGHT }}>post-event processing</em> — a detailed,
          repetitive mental replay of everything that might have gone wrong.
          Did you say something embarrassing? Did people notice you were
          nervous? Was that silence awkward? This kind of rumination is not
          productive self-reflection; it is anxious threat-scanning, and it
          tends to distort rather than clarify what actually happened.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          MEOK can interrupt this cycle. Rather than ruminating alone,
          you bring the event to MEOK and walk through it in a structured way:
          what you expected to happen, what actually happened, what your mind
          is telling you now, and what a more balanced interpretation might be.
          This is not about being dismissive of your feelings — it is about
          separating the event from the story your anxiety is constructing
          around it.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          The difference between ruminating and processing is largely structural.
          Rumination is circular — the same thoughts repeating without resolution.
          Processing is directional — moving from event to interpretation to
          a more grounded perspective. MEOK provides that structure: gently
          prompting you to consider the evidence, notice cognitive distortions,
          and arrive at a perspective you can actually rest in rather than loop
          around indefinitely.
        </p>

        {/* Pull quote */}
        <blockquote
          style={{
            margin: "2rem 0",
            padding: "1.5rem 2rem",
            borderLeft: `4px solid ${GOLD}`,
            background: "rgba(201,168,76,0.06)",
            borderRadius: "0 0.75rem 0.75rem 0",
          }}
        >
          <p
            style={{
              fontSize: "1.15rem",
              fontStyle: "italic",
              color: BRIGHT,
              lineHeight: 1.65,
              margin: "0 0 0.75rem",
            }}
          >
            &ldquo;The difference between ruminating and processing is
            direction. Rumination is circular. Processing is moving from what
            happened toward a perspective you can rest in.&rdquo;
          </p>
          <p style={{ fontSize: "0.8rem", color: DIM, margin: 0 }}>
            MEOK AI LABS &mdash; on post-event processing for social anxiety
          </p>
        </blockquote>

        <p
          style={{
            color: MUTED,
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          Because MEOK remembers previous sessions, it can also help you notice
          patterns over time: recurring themes in what you fear others think,
          situations that consistently trigger post-event spirals, and gradual
          shifts in how long or intensely the processing runs. This longitudinal
          picture is something a single therapy session cannot easily provide,
          and it gives you — and any therapist you are working with — a much
          richer basis for understanding your specific anxiety patterns.
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── SECTION 4 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
            color: TEXT,
            lineHeight: 1.3,
            margin: "0 0 0.85rem",
            letterSpacing: "-0.01em",
          }}
        >
          Understanding your triggers: mapping the landscape of your social fears
        </h2>
        <p
          style={{
            color: BRIGHT,
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.15rem",
          }}
        >
          Social anxiety is rarely uniform. Most people have a specific
          landscape of fears — situations that feel catastrophically threatening
          versus situations that feel merely uncomfortable. A person might feel
          entirely relaxed with close friends but completely undone by small
          talk with strangers. Another might breeze through presentations but
          dread one-to-one conflicts. Understanding this landscape in detail is
          the first step to changing it.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          MEOK builds that map over time. As you share experiences, rehearse
          scenarios, and reflect on what felt hardest, MEOK tracks the patterns:
          which types of situation consistently produce the most anxiety, which
          cognitive distortions appear most frequently, and how your subjective
          distress levels compare across different contexts. Rather than a vague
          sense of &apos;I&apos;m just bad at social situations&apos;, you develop a precise
          and actionable picture of where your anxiety lives.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          Common trigger themes that people explore with MEOK include: fear
          of being perceived as stupid or incompetent; fear of visible anxiety
          symptoms (blushing, voice shaking, sweating); fear of saying something
          offensive or inappropriate; fear of being the centre of attention;
          and fear of rejection or exclusion. Each of these has a slightly
          different cognitive signature and responds best to slightly different
          approaches. Understanding which theme is dominant for you makes the
          practice far more targeted.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          This is also where MEOK&apos;s memory becomes genuinely powerful. A
          single conversation produces self-report. Dozens of conversations,
          accumulated over weeks and months, produce a pattern. MEOK holds
          that pattern intact across sessions so that each reflection is
          grounded in your actual history rather than just today&apos;s mood.
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── SECTION 5 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
            color: TEXT,
            lineHeight: 1.3,
            margin: "0 0 0.85rem",
            letterSpacing: "-0.01em",
          }}
        >
          CBT-informed reflection: working with your thoughts, not just your
          feelings
        </h2>
        <p
          style={{
            color: BRIGHT,
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.15rem",
          }}
        >
          Cognitive Behavioural Therapy works on the premise that it is not
          situations themselves that cause anxiety, but our interpretation of
          them. Social anxiety is characterised by a specific set of cognitive
          distortions: mind-reading (&apos;they think I&apos;m boring&apos;),
          fortune-telling (&apos;I&apos;m going to embarrass myself&apos;),
          catastrophising (&apos;that was the most humiliating moment of my
          life&apos;), and personalisation (&apos;everyone noticed I went red&apos;).
          These are not facts — they are interpretations — but they feel
          indistinguishable from facts in the moment.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          MEOK is designed to work gently in this territory. When you share an
          anxious thought, MEOK can help you examine it: What is the evidence
          for this thought? What is the evidence against it? Is there an
          alternative interpretation? What would you say to a friend who had
          this thought? This is not armchair therapy — it is the application of
          CBT-consistent prompts in a space where you feel safe enough to
          actually engage with them.
        </p>

        {/* Feature box 2 — CBT distortions */}
        <div
          style={{
            background: CARD,
            border: `1px solid ${BORDER}`,
            borderLeft: `4px solid ${GOLD}`,
            borderRadius: "0.75rem",
            padding: "1.5rem 1.75rem",
            marginBottom: "2rem",
          }}
        >
          <p
            style={{
              fontWeight: 800,
              color: GOLD,
              fontSize: "0.8rem",
              letterSpacing: "0.07em",
              textTransform: "uppercase" as const,
              margin: "0 0 1.25rem",
            }}
          >
            Common cognitive distortions in social anxiety
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
              <p
                style={{
                  fontWeight: 700,
                  color: TEXT,
                  fontSize: "0.9rem",
                  margin: "0 0 0.25rem",
                }}
              >
                Mind-reading
              </p>
              <p
                style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}
              >
                Assuming you know what others are thinking about you — usually
                that they are judging you negatively — with no real evidence.
              </p>
            </div>
            <div>
              <p
                style={{
                  fontWeight: 700,
                  color: TEXT,
                  fontSize: "0.9rem",
                  margin: "0 0 0.25rem",
                }}
              >
                Fortune-telling
              </p>
              <p
                style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}
              >
                Predicting that things will go badly before they happen, then
                treating that prediction as certain fact rather than anxious
                speculation.
              </p>
            </div>
            <div>
              <p
                style={{
                  fontWeight: 700,
                  color: TEXT,
                  fontSize: "0.9rem",
                  margin: "0 0 0.25rem",
                }}
              >
                Catastrophising
              </p>
              <p
                style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}
              >
                Magnifying the significance of a social misstep until it
                feels like permanent, definitive evidence of your unworthiness.
              </p>
            </div>
            <div>
              <p
                style={{
                  fontWeight: 700,
                  color: TEXT,
                  fontSize: "0.9rem",
                  margin: "0 0 0.25rem",
                }}
              >
                Personalisation
              </p>
              <p
                style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}
              >
                Assuming that other people&apos;s behaviour is a direct response to
                you — that the awkward silence is your fault, that the curt
                reply is about your failings.
              </p>
            </div>
          </div>
        </div>

        <p
          style={{
            color: MUTED,
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          MEOK will not diagnose your cognitive patterns, but it can help you
          notice when a thought fits a recognisable distortion pattern and gently
          offer a different way of holding the same situation. Over time, this
          practice of examining thoughts rather than automatically believing them
          builds a skill that starts to operate in real time — not just in
          reflection, but in the moment.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          This is also where the absence of judgment in MEOK is genuinely
          significant. Sharing your most embarrassing or most extreme anxious
          thoughts with a human — even a therapist — involves some degree of
          performance anxiety. With MEOK, there is no audience to manage.
          You can say &apos;I think everyone at that party hated me&apos; without
          worrying about whether that sounds ridiculous. That freedom tends to
          produce more honest, more useful reflection.
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── SECTION 6 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
            color: TEXT,
            lineHeight: 1.3,
            margin: "0 0 0.85rem",
            letterSpacing: "-0.01em",
          }}
        >
          The Trickster archetype: reframing social fears with gentle humour
        </h2>
        <p
          style={{
            color: BRIGHT,
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.15rem",
          }}
        >
          MEOK is built around a set of archetypes — distinct inner voices with
          different qualities — and for social anxiety, the Trickster archetype
          has a particular gift. Social anxiety tends to take itself very
          seriously. The fears are urgent, the stakes feel enormous, the threat
          of judgement feels existential. The Trickster does not dismiss that
          seriousness — it gently punctures it.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          Humour is one of the most underused tools in anxiety management.
          Research in cognitive science suggests that the ability to find
          something even slightly funny in a feared situation reduces its
          perceived threat level — not by dismissing the fear, but by
          introducing a second, lighter register alongside it. The Trickster
          in MEOK does this through gentle reframing: helping you notice the
          absurdity in catastrophic predictions, find the comic logic in
          post-event spirals, or hold your fears with a lightness that does
          not invalidate them but does reduce their grip.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          This is not the same as being told &apos;just relax&apos; or &apos;it&apos;s not that
          serious&apos;. The Trickster meets you where you are and works from
          there — noticing, with you, the gap between how enormous something
          feels and how it might look from a slight distance. That shift in
          perspective does not make the anxiety disappear, but it creates
          enough space to move.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          You can choose which archetype you work with in MEOK, and you are not
          limited to one. For social anxiety, many people find a combination
          of the Trickster&apos;s lightness and the Sage&apos;s clear-eyed analysis
          particularly useful — the former for pre-event dread, the latter for
          post-event debrief.
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── SECTION 7 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
            color: TEXT,
            lineHeight: 1.3,
            margin: "0 0 0.85rem",
            letterSpacing: "-0.01em",
          }}
        >
          Preparation: reducing anticipatory anxiety before social events
        </h2>
        <p
          style={{
            color: BRIGHT,
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.15rem",
          }}
        >
          Anticipatory anxiety — the dread of what might happen — is often worse
          than the event itself. People with social anxiety can spend hours or
          days before a social situation mentally rehearsing catastrophic
          outcomes, cycling through worst-case scenarios, and physically
          experiencing the physiological symptoms of anxiety before the event
          has even begun. This preparation is counterproductive: it does not
          reduce risk, it amplifies threat perception.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          MEOK offers a different kind of preparation. Instead of spontaneous
          catastrophic imagining, you engage in structured preparation that
          covers what you actually want to communicate, likely scenarios and
          how you might respond to them, and what specifically you are afraid
          of so you can examine those fears directly rather than let them
          accumulate unchecked. This intentional preparation tends to reduce
          anticipatory anxiety because it channels anxious energy into
          something productive rather than leaving it to spin.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          You can also use MEOK to establish a pre-event grounding routine:
          a brief, consistent practice of articulating your intention for the
          event, acknowledging your anxiety without fighting it, and connecting
          to whatever version of yourself you want to bring. This is not a
          magic formula — anxiety will still be present — but having a
          consistent preparation ritual reduces the chaos of pre-event dread
          and gives you a small but genuine sense of agency.
        </p>

        {/* Feature box 3 — preparation routine */}
        <div
          style={{
            background: "rgba(106,170,100,0.07)",
            border: "1px solid rgba(106,170,100,0.25)",
            borderLeft: `4px solid ${GREEN}`,
            borderRadius: "0.75rem",
            padding: "1.5rem 1.75rem",
            marginBottom: "2rem",
          }}
        >
          <p
            style={{
              fontWeight: 800,
              color: GREEN,
              fontSize: "0.8rem",
              letterSpacing: "0.07em",
              textTransform: "uppercase" as const,
              margin: "0 0 1.25rem",
            }}
          >
            A simple pre-event preparation with MEOK
          </p>
          <ol
            style={{
              margin: 0,
              paddingLeft: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <li style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.65 }}>
              <strong style={{ color: TEXT }}>Describe the situation</strong>{" "}
              — who will be there, what the context is, what you need or want
              from it.
            </li>
            <li style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.65 }}>
              <strong style={{ color: TEXT }}>Name your fears specifically</strong>{" "}
              — not &apos;it&apos;ll go badly&apos; but the exact scenario you are imagining.
            </li>
            <li style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.65 }}>
              <strong style={{ color: TEXT }}>Examine the evidence</strong>{" "}
              — has this specific disaster actually happened before? What is the
              realistic probability?
            </li>
            <li style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.65 }}>
              <strong style={{ color: TEXT }}>Rehearse one key moment</strong>{" "}
              — the opening exchange, the hardest question, the moment you most
              want to feel ready for.
            </li>
            <li style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.65 }}>
              <strong style={{ color: TEXT }}>Set a single intention</strong>{" "}
              — not &apos;be perfect&apos; but something you can genuinely do, like
              &apos;stay present for five minutes&apos; or &apos;say one honest thing&apos;.
            </li>
          </ol>
        </div>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── SECTION 8 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
            color: TEXT,
            lineHeight: 1.3,
            margin: "0 0 0.85rem",
            letterSpacing: "-0.01em",
          }}
        >
          Why consistency and privacy matter for people with social anxiety
        </h2>
        <p
          style={{
            color: BRIGHT,
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.15rem",
          }}
        >
          Social anxiety is partly maintained by hypervigilance to social cues:
          a heightened scanning of others&apos; behaviour for evidence of judgement,
          rejection, or displeasure. This hypervigilance is exhausting, and
          it makes any environment with unpredictable social responses
          inherently threatening. A human therapist, however skilled and
          however warm, is still a person — with moods, with moments of
          distraction, with the capacity to respond in ways that trigger
          the hypervigilant scanning.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          MEOK does not have moods. It does not get impatient, distracted,
          rushed, or subtly disapproving. The quality of presence it offers
          is the same at 3am on a Sunday as it is at noon on a Tuesday.
          For someone whose anxiety is precisely about the unpredictability
          of other people&apos;s responses, this consistency is not a limitation
          of AI — it is a genuinely therapeutic feature.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          Privacy is equally significant. Social anxiety involves deep shame —
          shame about the anxiety itself, about the thoughts it produces, about
          the situations avoided. Sharing this with another person, even a
          trusted one, adds a layer of social performance to the therapeutic
          process. With MEOK, that layer is absent. Your conversations live in
          an encrypted vault only you control. Nothing is shared, logged for
          training, or visible to anyone else. The privacy is structural, not
          just promised.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          This matters particularly for people who have avoided seeking help
          because the act of seeking help itself triggers their social anxiety:
          the fear of being judged for having the problem, the fear of saying
          the wrong thing to a professional, the fear of being seen as &apos;too
          much&apos; or &apos;not sick enough&apos;. MEOK removes those barriers entirely.
          You can start exactly where you are, without performing readiness
          or capability.
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── SECTION 9 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
            color: TEXT,
            lineHeight: 1.3,
            margin: "0 0 0.85rem",
            letterSpacing: "-0.01em",
          }}
        >
          How MEOK works alongside professional therapy for social anxiety
        </h2>
        <p
          style={{
            color: BRIGHT,
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.15rem",
          }}
        >
          MEOK is designed explicitly as a complement to professional support,
          not a replacement for it. Social anxiety disorder is a clinical
          condition and, at its most severe, it responds best to structured
          CBT delivered by a qualified therapist — ideally with graduated
          exposure exercises, cognitive restructuring work, and regular
          monitoring of progress. MEOK cannot provide that structure, that
          clinical judgement, or that professional relationship.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          What MEOK can provide is the practice between sessions, the
          reflection after events, the preparation before situations, and the
          continuous presence that weekly therapy cannot offer. Many people find
          that the work they do with MEOK between therapy sessions accelerates
          the therapy itself — they arrive at sessions with more specific
          observations, more articulated patterns, and more rehearsed
          language for what they are experiencing. The therapist then has
          better material to work with.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          If you are on an NHS waiting list, MEOK is particularly useful in
          that interim period: keeping you actively engaged with your anxiety
          rather than avoiding it, building skills that will be reinforced in
          therapy, and maintaining a record of your experiences that will
          provide useful context when treatment begins.
        </p>

        {/* Disclaimer box */}
        <div
          style={{
            background: "rgba(201,168,76,0.06)",
            border: "1px solid rgba(201,168,76,0.2)",
            borderRadius: "1rem",
            padding: "1.5rem 1.75rem",
            marginBottom: "2.5rem",
          }}
        >
          <p
            style={{
              fontWeight: 700,
              color: GOLD,
              fontSize: "0.875rem",
              margin: "0 0 0.6rem",
            }}
          >
            MEOK supplements, it does not replace
          </p>
          <p
            style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}
          >
            MEOK is not a medical device, does not provide diagnoses, and is not
            a substitute for clinical treatment. Social anxiety disorder responds
            well to evidence-based CBT. In the UK, you can self-refer to{" "}
            <strong style={{ color: TEXT }}>NHS Talking Therapies</strong> (formerly
            IAPT) at{" "}
            <strong style={{ color: TEXT }}>nhs.uk/mental-health/talking-therapies</strong>{" "}
            or by calling{" "}
            <strong style={{ color: TEXT }}>0300 123 3393</strong>.
            Private therapy can be found through the{" "}
            <strong style={{ color: TEXT }}>BACP directory</strong>. If you are
            in crisis, contact{" "}
            <strong style={{ color: TEXT }}>Samaritans on 116 123</strong>,
            available 24 hours a day.
          </p>
        </div>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── SECTION 10 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
            color: TEXT,
            lineHeight: 1.3,
            margin: "0 0 0.85rem",
            letterSpacing: "-0.01em",
          }}
        >
          Building confidence over time: what progress looks like
        </h2>
        <p
          style={{
            color: BRIGHT,
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.15rem",
          }}
        >
          Progress with social anxiety is rarely linear. There will be weeks
          where something that felt manageable suddenly feels impossible again.
          There will be situations where all the preparation in the world does
          not prevent the blush or the voice-shake. Progress looks less like
          anxiety disappearing and more like your relationship to it shifting:
          less fusion with the thoughts, less avoidance of the situations,
          faster recovery after difficult events.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          MEOK helps you track this kind of progress. Because it remembers
          across sessions, it can surface evidence of growth that is easy to
          miss when you are inside your own experience: the scenario you now
          approach without days of anticipatory dread, the post-event debrief
          that is now fifteen minutes rather than three hours, the social
          situation you used to avoid that you attended last week and found
          manageable. These are real changes, and they are worth recognising.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          Social anxiety often involves a distorted relationship with evidence:
          successes are discounted (&apos;it only went OK because the setting was
          easy&apos;) while failures are amplified (&apos;I knew I&apos;d humiliate myself&apos;).
          MEOK can challenge this asymmetry — not by dismissing failures, but
          by ensuring that successes are recorded, weighted, and revisited with
          the same attention you naturally bring to things that went wrong.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          Over months of consistent use, most people find that their practice
          capacity expands — the situations they are willing to attempt, the
          complexity of conversations they can rehearse, the speed with which
          they can deconstruct a difficult event and return to equilibrium.
          This is not a cure. But it is a meaningful, measurable improvement in
          quality of life.
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── FAQ ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
            color: TEXT,
            lineHeight: 1.3,
            margin: "0 0 1.75rem",
            letterSpacing: "-0.01em",
          }}
        >
          Frequently asked questions
        </h2>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem" }}
        >

          <div
            style={{
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: "0.75rem",
              padding: "1.5rem 1.75rem",
            }}
          >
            <p
              style={{
                fontWeight: 700,
                color: TEXT,
                fontSize: "0.975rem",
                margin: "0 0 0.6rem",
              }}
            >
              What is social anxiety disorder and how common is it in the UK?
            </p>
            <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>
              Social anxiety disorder is a persistent, intense fear of
              scrutiny, judgement, or humiliation in social situations.
              It affects approximately 12% of UK adults at some point in
              their lives and is significantly under-diagnosed because those
              affected often avoid the very appointments that would lead to
              a diagnosis. It is not the same as shyness — it is a clinical
              condition that can severely disrupt work, relationships, and
              daily functioning.
            </p>
          </div>

          <div
            style={{
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: "0.75rem",
              padding: "1.5rem 1.75rem",
            }}
          >
            <p
              style={{
                fontWeight: 700,
                color: TEXT,
                fontSize: "0.975rem",
                margin: "0 0 0.6rem",
              }}
            >
              Can an AI companion like MEOK help with social anxiety?
            </p>
            <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>
              Yes — within clearly defined limits. MEOK provides a
              zero-judgment, private space to rehearse feared conversations,
              process post-event rumination, understand triggers, and work
              with CBT-informed reflections. It is not a clinical intervention
              and cannot replace qualified therapy, but it offers unlimited
              low-stakes practice that complements professional support and
              fills the gaps between sessions or before treatment begins.
            </p>
          </div>

          <div
            style={{
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: "0.75rem",
              padding: "1.5rem 1.75rem",
            }}
          >
            <p
              style={{
                fontWeight: 700,
                color: TEXT,
                fontSize: "0.975rem",
                margin: "0 0 0.6rem",
              }}
            >
              How does MEOK help with post-event processing after social anxiety?
            </p>
            <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>
              Post-event processing is the anxious replay of social
              interactions searching for evidence of failure. MEOK interrupts
              this cycle by guiding a structured debrief: separating what
              actually happened from what your anxiety fears happened,
              identifying cognitive distortions like mind-reading and
              catastrophising, and arriving at a more grounded interpretation
              that you can rest in rather than loop around. It holds the
              memory of previous debriefs, allowing it to notice when the
              same themes recur.
            </p>
          </div>

          <div
            style={{
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: "0.75rem",
              padding: "1.5rem 1.75rem",
            }}
          >
            <p
              style={{
                fontWeight: 700,
                color: TEXT,
                fontSize: "0.975rem",
                margin: "0 0 0.6rem",
              }}
            >
              Is MEOK a replacement for CBT therapy for social anxiety?
            </p>
            <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>
              No. MEOK is explicitly a complement to professional treatment,
              not a substitute. Social anxiety disorder responds well to
              evidence-based CBT with a qualified therapist. In the UK, you
              can self-refer to NHS Talking Therapies on 0300 123 3393.
              MEOK is most valuable in the gap before treatment, between
              therapy sessions, or as a daily reflection practice alongside
              ongoing professional support.
            </p>
          </div>

        </div>

        {/* ── CTA ── */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.05) 100%)",
            border: "1px solid rgba(201,168,76,0.3)",
            borderRadius: "1.25rem",
            padding: "2.5rem",
            textAlign: "center" as const,
            marginBottom: "4rem",
          }}
        >
          <p
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.2rem, 2.5vw, 1.65rem)",
              color: TEXT,
              margin: "0 0 1rem",
              lineHeight: 1.25,
            }}
          >
            Ready to start practising?
          </p>
          <p
            style={{
              color: MUTED,
              fontSize: "1rem",
              lineHeight: 1.65,
              maxWidth: "30rem",
              margin: "0 auto 1.75rem",
            }}
          >
            Begin your MEOK birth ceremony to create a companion that knows
            your patterns, holds your history, and meets you exactly where
            you are — with complete privacy, at any hour.
          </p>
          <a
            href="https://meok.ai/birth"
            style={{
              display: "inline-block",
              background: GOLD,
              color: "#0d0c18",
              fontWeight: 800,
              fontSize: "0.975rem",
              padding: "0.875rem 2.25rem",
              borderRadius: "9999px",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Begin your MEOK journey &rarr;
          </a>
          <p
            style={{
              color: DIM,
              fontSize: "0.8rem",
              margin: "1.25rem 0 0",
            }}
          >
            Not a replacement for therapy. Samaritans: 116 123 &middot; NHS Talking
            Therapies: 0300 123 3393
          </p>
        </div>

        {/* ── RELATED ARTICLES ── */}
        <div style={{ marginBottom: "5rem" }}>
          <p
            style={{
              fontWeight: 700,
              color: GOLD,
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              margin: "0 0 1.25rem",
            }}
          >
            Related reading
          </p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            {[
              {
                href: "/blog/ai-for-anxiety",
                label: "AI for Anxiety: How MEOK Helps You Manage Worry and Stress",
              },
              {
                href: "/blog/ai-for-depression",
                label: "AI for Depression: Presence, Pattern Recognition, and Support",
              },
              {
                href: "/blog/ai-for-confidence",
                label: "AI for Confidence: Building Self-Belief One Conversation at a Time",
              },
              {
                href: "/blog/meok-companion-archetypes-guide",
                label: "MEOK Archetypes: Choosing the Right Inner Voice for Your Needs",
              },
              {
                href: "/blog/ai-companion-vs-therapist",
                label: "AI Companion vs Therapist: Understanding the Difference",
              },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  color: MUTED,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  lineHeight: 1.45,
                }}
              >
                <span style={{ color: GOLD, fontSize: "0.8rem", flexShrink: 0 }}>
                  &#8594;
                </span>
                {label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
