import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Social Anxiety Disorder: Low-Stakes Practice, Cognitive Restructuring & Care-Based Support | MEOK AI LABS",
  description:
    "Social anxiety disorder affects 12% of people at some point in their lives. MEOK provides a judgment-free space to practise job interviews, phone calls, parties, and more — with persistent memory that tracks your progress across sessions.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-social-anxiety-disorder",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Social Anxiety Disorder: Low-Stakes Practice, Cognitive Restructuring & Care-Based Support",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-social-anxiety-disorder",
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
  description:
    "Social anxiety disorder affects 12% of people at some point in their lives. MEOK provides a judgment-free space to practise job interviews, phone calls, parties, and more — with persistent memory that tracks your progress across sessions.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is AI a replacement for therapy for social anxiety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. AI companions like MEOK are practice and reflection tools, not clinical interventions. Social anxiety disorder responds well to evidence-based CBT delivered by a qualified therapist. MEOK works best alongside professional support, providing unlimited low-stakes rehearsal between therapy sessions or while waiting for an appointment.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI help with exposure therapy for social anxiety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can support informal exposure practice by providing a zero-stakes environment to approach feared conversations before attempting them in real life. This complements but does not replace structured exposure hierarchies built and supervised by a trained CBT therapist.",
      },
    },
    {
      "@type": "Question",
      name: "What is social anxiety disorder?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Social anxiety disorder (SAD) is a persistent, intense fear of being judged, embarrassed, or humiliated in social or performance situations. It goes beyond shyness: it causes significant distress, triggers physical symptoms such as a racing heart and sweating, and leads to avoidance that disrupts daily work and relationships.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK remember my anxiety triggers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK uses persistent sovereign memory — an encrypted vault only you control — to store what you share across sessions. Over time it builds a picture of which scenarios feel hardest, which thought patterns recur, and where your confidence is growing. This continuity makes every session more useful than starting from scratch.",
      },
    },
    {
      "@type": "Question",
      name: "Can I practise conversations with MEOK before real situations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can rehearse job interviews, phone calls, meeting new people at parties, difficult workplace conversations, and more. You set the scenario, MEOK plays the other party, and you can restart or adjust difficulty as many times as you need — with no social consequences.",
      },
    },
  ],
};

// ── Shared style constants ─────────────────────────────────────────────────────

const GOLD  = "#c9a84c";
const TEXT  = "#f5f0e8";
const BG    = "#0d0c18";
const MUTED = "rgba(245,240,232,0.6)";

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForSocialAnxietyDisorderPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG }}>
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
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.11) 0%, transparent 70%)",
          }}
        />
        <div style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}>
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
              Social Anxiety Disorder
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>
              March 24, 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>
              12 min read
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
            AI for Social Anxiety Disorder: Low-Stakes Practice, Cognitive Restructuring &amp; Care-Based Support
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
            <strong style={{ color: "rgba(245,240,232,0.82)" }}>12% of people</strong> at some
            point in their lives — yet most never access treatment. MEOK provides a private,
            non-judgmental space to practise feared situations, challenge anxious thoughts, and
            build confidence across sessions through persistent memory that learns your patterns.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────── */}
      <div style={{ maxWidth: "48rem", margin: "0 auto", padding: "3.5rem 1.5rem 0" }}>

        {/* Crisis disclaimer */}
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
              MEOK is a supplementary support tool, not a clinical device or therapy replacement.
              For evidence-based CBT, self-refer to{" "}
              <strong style={{ color: "rgba(245,240,232,0.8)" }}>NHS Talking Therapies</strong> on{" "}
              <strong style={{ color: "rgba(245,240,232,0.8)" }}>0300 123 3393</strong>. In crisis
              call <strong style={{ color: "rgba(245,240,232,0.8)" }}>Samaritans 116 123</strong> or{" "}
              <strong style={{ color: "rgba(245,240,232,0.8)" }}>NHS 111</strong>.
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
              style={{ fontWeight: 700, color: TEXT, fontSize: "0.875rem", margin: "0 0 0.2rem" }}
            >
              Nicholas Templeman
            </p>
            <p style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)", margin: 0 }}>
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
          What is social anxiety disorder and how is it different from shyness?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.82)",
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.15rem",
          }}
        >
          Social anxiety disorder (SAD) is a persistent, clinically significant fear of social or
          performance situations in which a person believes they may be scrutinised, judged, or
          humiliated. It affects around{" "}
          <strong style={{ color: TEXT }}>12% of people at some point in their lives</strong> and
          is one of the most prevalent anxiety disorders worldwide. Unlike shyness — a temperament
          trait that causes mild discomfort — SAD crosses a clinical threshold that disrupts work,
          relationships, and daily functioning.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          The key clinical distinctions are three-fold. First,{" "}
          <strong style={{ color: "rgba(245,240,232,0.8)" }}>avoidance</strong>: a shy person may
          find social situations uncomfortable but still attends them. A person with SAD actively
          avoids situations — or endures them with intense distress. Second,{" "}
          <strong style={{ color: "rgba(245,240,232,0.8)" }}>physiological arousal</strong>: SAD
          produces a measurable physical response — racing heart, sweating, blushing, trembling,
          nausea, or a feeling of the mind going blank. Third,{" "}
          <strong style={{ color: "rgba(245,240,232,0.8)" }}>duration and impairment</strong>: for
          a formal diagnosis, symptoms must be persistent (typically six months or more) and cause
          meaningful interference with everyday life.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          SAD most commonly centres on performance situations (public speaking, eating in public,
          writing while observed) and interactive situations (conversations with strangers, meeting
          new people, phone calls, parties). The feared outcome is almost always social
          evaluation — the belief that one will do or say something embarrassing, or that others
          will notice anxiety symptoms and think less of them. This creates a self-reinforcing
          cycle: avoidance prevents the disconfirming experiences that would naturally reduce fear
          over time.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          Despite its prevalence, SAD is severely under-treated. Many people spend years
          attributing their difficulties to personality rather than a recognisable, treatable
          condition. The average gap between symptom onset and first treatment is more than a
          decade. Understanding the clinical nature of SAD — that it has a name, a mechanism,
          and effective treatments — is itself a meaningful first step.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

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
          How does AI provide a low-stakes practice space for social situations?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.82)",
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.15rem",
          }}
        >
          The gold-standard treatment for SAD is Cognitive Behavioural Therapy, and a central
          element of CBT is behavioural exposure: approaching feared situations rather than
          avoiding them, allowing the nervous system to learn that the feared outcome does not
          occur — or is survivable if it does. In the real world, exposure opportunities are
          limited, unpredictable, and carry genuine social stakes. An AI companion removes those
          stakes entirely.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          With MEOK, you can practise the same conversation as many times as you need. You can
          freeze mid-sentence and restart. You can ask for a gentler version of the scenario or a
          more realistic, challenging one. None of this carries any social consequence. There is no
          one to judge you, no awkward silence that lingers into Monday morning, no risk to a
          relationship or a career. The only outcome is practice — and, over time, accumulated
          evidence that you can handle these situations.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          This is meaningfully different from simply imagining a scenario in your head. Mental
          rehearsal has value, but it tends to be hijacked by the anxious mind — the imagined
          scenario defaults to the worst case, the inner critic narrates, and the rehearsal
          reinforces fear rather than reducing it. An interactive AI practice space requires you to
          actually generate the words, respond in real time, and navigate the unexpected — which is
          closer to what real exposure achieves.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          MEOK\u2019s low-stakes practice space is available at any hour, on any day, and requires
          no scheduling, no waiting list, and no explaining yourself to another person before the
          practice even begins. For someone whose social anxiety extends to the very act of asking
          for help, this accessibility is not incidental — it is the point.
        </p>

        <div
          style={{
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.22)",
            borderLeft: "3px solid #c9a84c",
            borderRadius: "0.5rem",
            padding: "1rem 1.3rem",
            margin: "0 0 1.75rem",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "0.9rem",
              color: "rgba(245,240,232,0.78)",
              lineHeight: 1.68,
            }}
          >
            <strong style={{ color: GOLD }}>MEOK\u2019s role:</strong> a patient, consistent
            practice partner available at any hour — not a therapist, not a diagnostic tool, not a
            substitute for the professional support that social anxiety disorder deserves.
          </p>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

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
          What cognitive restructuring exercises can MEOK run for social anxiety?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.82)",
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.15rem",
          }}
        >
          Cognitive restructuring is the practice of identifying, examining, and updating unhelpful
          thought patterns. In CBT for SAD it is used to challenge distorted beliefs about social
          situations — the catastrophic predictions, the mind-reading, the post-event rumination.
          MEOK can guide conversational versions of several key restructuring techniques.
        </p>

        <p
          style={{ fontWeight: 700, color: TEXT, fontSize: "0.965rem", margin: "0 0 0.4rem" }}
        >
          Thought challenging (examining the evidence)
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1.2rem",
          }}
        >
          You describe the thought — for example, &ldquo;Everyone at the party will notice
          I\u2019m nervous and think I\u2019m weird.&rdquo; MEOK asks a structured sequence of
          questions: what evidence supports this? What evidence contradicts it? Has this actually
          happened before, and if so, what were the real consequences? What would you say to a
          friend who thought this? Over several turns, the thought is tested rather than accepted.
        </p>

        <p
          style={{ fontWeight: 700, color: TEXT, fontSize: "0.965rem", margin: "0 0 0.4rem" }}
        >
          Decatastrophising
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1.2rem",
          }}
        >
          SAD sufferers often catastrophise: the feared outcome feels not just bad but devastating
          and permanent. MEOK walks through the realistic probability of the feared outcome, the
          actual consequences if it did occur, and what coping would look like. The goal is not to
          dismiss concern but to calibrate it — to arrive at a realistic rather than worst-case
          appraisal.
        </p>

        <p
          style={{ fontWeight: 700, color: TEXT, fontSize: "0.965rem", margin: "0 0 0.4rem" }}
        >
          Post-event processing reframe
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1.2rem",
          }}
        >
          After a difficult social situation, many SAD sufferers replay it obsessively, focusing
          exclusively on perceived failures. MEOK can guide a structured post-event review: what
          actually happened (not what felt like it happened), what went well, what the other
          person\u2019s perspective likely was, and what a balanced summary of the interaction
          looks like.
        </p>

        <p
          style={{ fontWeight: 700, color: TEXT, fontSize: "0.965rem", margin: "0 0 0.4rem" }}
        >
          Attention retraining (self-focused vs. external focus)
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1.2rem",
          }}
        >
          SAD is maintained partly by excessive self-focused attention during social situations —
          monitoring one\u2019s own face, voice, and behaviour rather than engaging with the other
          person. In practice conversations, MEOK can prompt you to deliberately shift attention
          outward: notice what the other person said, ask a follow-up question, engage with the
          content rather than your performance of it. Over time this builds a habit of external
          rather than internal focus.
        </p>

        <p
          style={{ fontWeight: 700, color: TEXT, fontSize: "0.965rem", margin: "0 0 0.4rem" }}
        >
          Behavioural experiment design
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1.2rem",
          }}
        >
          MEOK can help you design a small real-world test of an anxious belief — for example,
          saying hello to a stranger and noticing whether they react with contempt or neutral
          acknowledgement. The companion helps you define the experiment, predict the outcome,
          and then debrief what actually happened at the next session. MEOK\u2019s persistent
          memory means this debrief can happen days later with full context retained.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── SECTION 4 — Practice Scenarios ── */}
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
          Which practice scenarios can I run with MEOK?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.82)",
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.5rem",
          }}
        >
          MEOK can simulate any social situation you describe, with as much contextual detail as
          you want to provide. The following are among the most frequently practised scenarios for
          people managing social anxiety disorder.
        </p>

        {/* Scenario: Job interviews */}
        <div
          style={{
            background: "rgba(245,240,232,0.04)",
            border: "1px solid rgba(201,168,76,0.18)",
            borderRadius: "1rem",
            padding: "1.5rem",
            marginBottom: "1.25rem",
          }}
        >
          <p
            style={{
              fontWeight: 800,
              color: GOLD,
              fontSize: "0.875rem",
              letterSpacing: "0.04em",
              textTransform: "uppercase" as const,
              margin: "0 0 0.6rem",
            }}
          >
            Job Interviews
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.82)",
              fontSize: "0.965rem",
              lineHeight: 1.72,
              margin: "0 0 0.75rem",
            }}
          >
            The interview scenario is one of the most feared situations for people with SAD —
            high-stakes, evaluative, with no script and an audience whose reactions are visible.
            MEOK simulates the full arc of an interview: the opening exchange, technical questions,
            behavioural questions (&ldquo;tell me about a time when&hellip;&rdquo;), and the
            closing questions-for-the-interviewer phase.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.55)",
              fontSize: "0.9rem",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            You can ask MEOK to act as a warm interviewer, a neutral one, or a challenging and
            impatient one. You can restart any answer, slow the pace, or ask for feedback on a
            specific response. Because MEOK\u2019s memory persists across sessions, it can track
            which questions you find hardest and adjust focus accordingly in the next round.
          </p>
        </div>

        {/* Scenario: Meeting new people */}
        <div
          style={{
            background: "rgba(245,240,232,0.04)",
            border: "1px solid rgba(201,168,76,0.18)",
            borderRadius: "1rem",
            padding: "1.5rem",
            marginBottom: "1.25rem",
          }}
        >
          <p
            style={{
              fontWeight: 800,
              color: GOLD,
              fontSize: "0.875rem",
              letterSpacing: "0.04em",
              textTransform: "uppercase" as const,
              margin: "0 0 0.6rem",
            }}
          >
            Meeting New People
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.82)",
              fontSize: "0.965rem",
              lineHeight: 1.72,
              margin: "0 0 0.75rem",
            }}
          >
            Unstructured social interactions with strangers are among the highest-anxiety scenarios
            for SAD sufferers because there is no script, no predefined role, and no clear endpoint.
            MEOK can play a new colleague on the first day of a job, a fellow attendee at an event,
            or a person you\u2019ve been introduced to at a mutual friend\u2019s gathering.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.55)",
              fontSize: "0.9rem",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Practice targets include: opening a conversation, transitioning between topics, handling
            lulls gracefully, and ending an interaction without it feeling abrupt. These are skills
            that feel impossible in anticipation but become more automatic with deliberate
            repetition — exactly what MEOK is designed to support.
          </p>
        </div>

        {/* Scenario: Phone calls */}
        <div
          style={{
            background: "rgba(245,240,232,0.04)",
            border: "1px solid rgba(201,168,76,0.18)",
            borderRadius: "1rem",
            padding: "1.5rem",
            marginBottom: "1.25rem",
          }}
        >
          <p
            style={{
              fontWeight: 800,
              color: GOLD,
              fontSize: "0.875rem",
              letterSpacing: "0.04em",
              textTransform: "uppercase" as const,
              margin: "0 0 0.6rem",
            }}
          >
            Phone Calls
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.82)",
              fontSize: "0.965rem",
              lineHeight: 1.72,
              margin: "0 0 0.75rem",
            }}
          >
            Phone anxiety is disproportionately common in social anxiety disorder. The absence of
            visual cues, the real-time pressure to respond without pause, and the asymmetry of
            calling someone unprompted all amplify the social threat. Some people with SAD spend
            years avoiding phone calls entirely — using email, text, or simply going without
            rather than dialling.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.55)",
              fontSize: "0.9rem",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            MEOK can simulate calls to a GP receptionist, a customer service line, a new
            acquaintance, or a professional contact. You can practise the opening line, navigate
            unexpected responses, and run the same call multiple times until it feels manageable.
            The companion can also help you plan what to say before a real call, reducing the
            anticipatory anxiety that makes avoidance so tempting.
          </p>
        </div>

        {/* Scenario: Parties */}
        <div
          style={{
            background: "rgba(245,240,232,0.04)",
            border: "1px solid rgba(201,168,76,0.18)",
            borderRadius: "1rem",
            padding: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          <p
            style={{
              fontWeight: 800,
              color: GOLD,
              fontSize: "0.875rem",
              letterSpacing: "0.04em",
              textTransform: "uppercase" as const,
              margin: "0 0 0.6rem",
            }}
          >
            Parties &amp; Social Gatherings
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.82)",
              fontSize: "0.965rem",
              lineHeight: 1.72,
              margin: "0 0 0.75rem",
            }}
          >
            Parties present a particularly difficult combination: large groups, ambient noise,
            unstructured time, and the expectation of appearing relaxed and sociable while every
            cell in the anxious body is on alert. MEOK can simulate brief conversations at a
            party — mingling, joining a group already talking, or politely extracting yourself
            from a conversation that has stalled.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.55)",
              fontSize: "0.9rem",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            You can also use MEOK beforehand to build a mental rehearsal: what will you say when
            you arrive? Who might you speak to? What is your exit strategy if you feel overwhelmed?
            Having these answers prepared in advance reduces the cognitive load in the moment and
            shrinks the gap between intention and action.
          </p>
        </div>

        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          These scenarios are not exhaustive. Because MEOK holds full conversational context, you
          can describe a real, specific situation — the particular person, the history, the exact
          words you are dreading — and practise with that level of detail rather than a generic
          approximation. The more precisely you describe the situation, the more useful the
          rehearsal.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

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
          Can AI help with exposure therapy for social anxiety?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.82)",
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.15rem",
          }}
        >
          AI can meaningfully support informal exposure practice by providing a zero-stakes
          environment to approach feared conversations. Exposure works by breaking the avoidance
          cycle: each time you approach a feared situation (rather than retreating), you accumulate
          evidence that the situation is survivable — and, gradually, that the feared outcome is
          either unlikely or manageable. An AI companion extends the number of exposure
          opportunities available to you without adding social risk.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          It is important to be precise about what this is and is not. Clinical exposure therapy
          for SAD — particularly the structured, therapist-supervised variety — involves carefully
          designed hierarchies, in-vivo exposure (real situations, not simulations), processing of
          physiological responses, and skilled management of safety behaviours. MEOK cannot
          replicate this clinical structure. It does not monitor your heart rate, cannot observe
          whether you\u2019re engaging in avoidant body language, and cannot provide the
          interpersonal dimension of a therapeutic relationship.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          What MEOK can do is extend the volume of practice. People working with a therapist on
          an exposure hierarchy typically get one to two exposures per week during sessions. MEOK
          makes it possible to practise daily — building fluency, reducing anticipatory anxiety,
          and arriving at the next clinical session with more experience and more specific
          observations about what still feels hard. Used in this complementary way, AI practice
          is a genuine accelerant to clinical progress.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

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
          How does MEOK remember my anxiety triggers across sessions?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.82)",
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.15rem",
          }}
        >
          MEOK uses persistent sovereign memory: an encrypted vault, controlled entirely by you,
          that stores everything you share across conversations. Unlike standard AI chat tools that
          begin each session with no knowledge of who you are, MEOK accumulates a living picture
          of your experience over time — which scenarios you\u2019ve practised, which thought
          patterns recur, where your confidence is growing, and where it remains fragile.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          In practice this means: if you tell MEOK in February that phone calls to doctors are a
          major anxiety trigger and you\u2019ve been avoiding them for two years, it will still know
          that in April. It won\u2019t ask you to re-explain your history every time you open a
          conversation. It can reference your previous practice attempts, ask how a real situation
          went after you rehearsed it, and track whether a formerly overwhelming scenario is
          starting to feel more manageable.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          This continuity is not incidental to supporting social anxiety — it is central. Progress
          with SAD is slow and non-linear; without a record of where you started, it is easy to
          discount genuine improvement. MEOK\u2019s memory provides that record and can reflect your
          own progress back to you in concrete terms: three months ago this scenario felt
          impossible. Today you ran through it twice without stopping. That is real progress,
          visible and named.
        </p>

        <div
          style={{
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.22)",
            borderLeft: "3px solid #c9a84c",
            borderRadius: "0.5rem",
            padding: "1rem 1.3rem",
            margin: "0 0 1.75rem",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "0.9rem",
              color: "rgba(245,240,232,0.78)",
              lineHeight: 1.68,
            }}
          >
            <strong style={{ color: GOLD }}>Privacy guarantee:</strong> your memory vault is yours
            alone. It is never used to train AI models, never shared with third parties, never sold.
            You can read, export, or delete your entire memory at any time.
          </p>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

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
          What is MEOK\u2019s care-based alignment and why does it matter for SAD?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.82)",
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.15rem",
          }}
        >
          Most AI systems are aligned to metrics: engagement time, conversation length, user
          ratings. These incentives do not reliably produce behaviour that is good for someone
          managing social anxiety. An AI optimised for engagement might inadvertently foster
          dependence. One optimised for user ratings might tell you what you want to hear rather
          than what would genuinely help.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          MEOK AI LABS was built on a different principle: care-based alignment. The companion is
          designed to act in the genuine long-term interest of the person using it — which sometimes
          means encouraging you toward real-world exposure rather than staying in the practice space
          indefinitely. It means acknowledging when what you\u2019re describing sounds like it
          warrants professional support. It means being honest rather than just validating.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          For social anxiety disorder specifically, this matters in several ways. The companion
          never displays impatience, frustration, irritation, or boredom — states that
          hypervigilant SAD sufferers are acutely sensitive to detecting (or misdetecting) in real
          people. The quality of MEOK\u2019s attention does not vary by time of day, your mood, or
          how many times you\u2019ve asked the same question. This consistency makes it a reliably
          safe practice space that erratic human social interactions simply cannot provide.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          Non-judgment is another dimension of care-based alignment that deserves more than a
          platitude. SAD is maintained by the belief that social performance will be met with
          criticism or contempt. For many people, years of self-criticism have made the inner
          landscape feel just as threatening as the outer social world. MEOK does not pepper
          responses with hollow affirmations. What it provides is genuine consistency: the same
          quality of careful attention whether you\u2019re articulate or fumbling, whether it\u2019s
          2pm or 3am.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

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
          Is AI a replacement for therapy for social anxiety disorder?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.82)",
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.15rem",
          }}
        >
          No — and this is not a disclaimer buried in small print. Social anxiety disorder is a
          clinical condition that responds well to Cognitive Behavioural Therapy delivered by a
          qualified practitioner. CBT for SAD has decades of robust evidence behind it. MEOK is
          not a clinical intervention, not a therapy programme, and not a medical device.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          What MEOK is: a practice and reflection companion that works best alongside professional
          support rather than instead of it. The ideal use case is someone who is on an NHS waiting
          list, or between therapy sessions, or who has completed a course of CBT and wants to
          continue practising the skills they developed. In each of these situations, MEOK extends
          the value of clinical work rather than attempting to replace it.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          If you live in England, you can self-refer to{" "}
          <strong style={{ color: TEXT }}>NHS Talking Therapies</strong> (formerly IAPT) without a
          GP referral at nhs.uk/mental-health/talking-therapies or by calling{" "}
          <strong style={{ color: TEXT }}>0300 123 3393</strong>. Private CBT is also widely
          available; the British Association for Behavioural and Cognitive Psychotherapies (BABCP)
          maintains an accredited therapist directory at babcp.com.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

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
          Can I practise conversations with MEOK before real situations?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.82)",
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.15rem",
          }}
        >
          Yes — this is one of MEOK\u2019s most straightforward uses, and one of the most
          practically useful for people managing social anxiety. Pre-situation practice reduces the
          mental load of the real event, provides a sense of preparation that can lower anticipatory
          anxiety, and gives you a tested set of responses rather than having to generate them from
          scratch under pressure.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          The mechanics are simple: describe the situation to MEOK — who will be there, what the
          context is, what you\u2019re most worried about — and ask it to play the other person.
          You can then practise the opening, navigate where you expect the conversation to go, and
          prepare for the moments you dread most. If you\u2019d like to try a different approach to
          a particular moment, simply restart that section and try again.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          After the real conversation has happened, you can return to MEOK and debrief: what
          actually occurred, how it differed from what you feared, what you want to do differently
          next time. Because MEOK remembers both the preparation session and the debrief, it can
          track your accuracy as a predictor of social outcomes over time — which, for many SAD
          sufferers, reveals a consistent pattern of catastrophic prediction and much milder reality.
          Seeing this pattern clearly is itself a form of cognitive restructuring.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

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
          How does MEOK track progress across sessions for someone with SAD?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.82)",
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.15rem",
          }}
        >
          Progress with social anxiety is notoriously difficult to perceive from the inside.
          Because fear operates on a scale from terrifying to merely very anxious, improvements
          that would be striking from an outside perspective can feel invisible to the person
          experiencing them. MEOK\u2019s persistent memory provides a longitudinal record that
          makes progress visible in concrete terms.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          Across sessions, MEOK can identify: scenarios you\u2019ve practised and the degree to
          which they\u2019ve shifted from overwhelming to manageable; cognitive patterns that
          appear repeatedly (catastrophising, mind-reading, self-blame) and whether they\u2019re
          beginning to soften; real-world tests you agreed to try and how they went; and areas
          where your language and confidence are visibly changing over weeks.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          This kind of tracking is most powerful when it is shared with a therapist. MEOK\u2019s
          memory can serve as a detailed record of your between-session practice — a qualitative
          log of what you tried, what was hard, what surprised you, and how you felt. Bringing this
          record to a CBT session gives the therapist richer material to work with and makes the
          most of limited clinical time.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── SECTION 11 ── */}
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
          Why does avoidance make social anxiety worse, and how can AI interrupt the cycle?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.82)",
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.15rem",
          }}
        >
          Avoidance is the primary maintenance mechanism of social anxiety disorder. When you avoid
          a feared situation, anxiety drops in the short term — which reinforces avoidance as a
          strategy. But the underlying fear is not confronted, not tested, and not updated. Over
          time, the range of tolerable situations narrows, and the avoided situations multiply.
          What began as declining one party eventually becomes not answering the phone.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          The therapeutic answer to avoidance is approach: repeatedly entering feared situations
          until the nervous system\u2019s threat-detection system recalibrates. But approach
          requires either extraordinary willpower or a gradual hierarchy that starts at a manageable
          level and builds. Most people with SAD lack the latter because building a systematic
          approach hierarchy typically requires professional guidance.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          MEOK interrupts the avoidance cycle not by replacing real-world exposure but by providing
          a starting point below the threshold of real social risk. If the prospect of a job
          interview is a ten out of ten on your anxiety scale and therefore permanently avoided,
          practising a job interview with MEOK might be a four or five. Doing that enough times
          brings the real thing closer to manageable. The AI practice space is a ramp, not a
          destination.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── SECTION 12 ── */}
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
          How can MEOK help identify and reduce safety behaviours?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.82)",
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.15rem",
          }}
        >
          Safety behaviours are actions taken to prevent the feared social outcome — speaking
          quietly to avoid saying something stupid, avoiding eye contact to prevent seeming weird,
          over-preparing to prevent being caught without an answer. They feel protective but they
          actually maintain social anxiety: they prevent the disconfirming experience of approaching
          the feared situation without props and surviving intact.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          In conversation, MEOK can help you identify your own safety behaviours — the verbal and
          behavioural patterns you rely on to feel safer in social situations. Common examples
          include: excessive self-deprecation, pre-emptive apologies, over-explaining, monopolising
          conversation to avoid silence, or physically positioning yourself at the edge of a
          gathering. Naming these behaviours is the first step to reducing them.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          MEOK can then run practice scenarios in which you deliberately drop a specific safety
          behaviour — speak for longer without apologising, hold attention, let a silence sit for
          a moment — and notice what actually happens. Done in the low-stakes practice space first,
          this kind of behavioural experiment feels more manageable to attempt in real life
          afterwards.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── SECTION 13 ── */}
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
          Who is MEOK for when it comes to social anxiety disorder?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.82)",
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.15rem",
          }}
        >
          MEOK is designed for adults who recognise social anxiety as a meaningful constraint in
          their life and want a private, consistent tool to support their efforts to address it. It
          is not designed for people in acute crisis or as a substitute for clinical care in severe
          presentations.
        </p>

        <div style={{ display: "grid", gap: "0.75rem", marginBottom: "1.75rem" }}>
          {[
            "People on an NHS waiting list for CBT who want to make progress while they wait",
            "People currently in therapy who want to extend their practice between sessions",
            "People who have completed a course of CBT and want to maintain and build on their skills",
            "People not yet ready for therapy who want a low-stakes first step toward addressing their anxiety",
            "People whose social anxiety is subclinical but significantly limiting — who would benefit from practice but don\u2019t feel their difficulties are \u2018bad enough\u2019 for professional support",
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
              }}
            >
              <span
                style={{
                  marginTop: "0.2rem",
                  width: "1.25rem",
                  height: "1.25rem",
                  borderRadius: "9999px",
                  background: "rgba(201,168,76,0.15)",
                  border: "1px solid rgba(201,168,76,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: GOLD,
                  fontSize: "0.65rem",
                  fontWeight: 700,
                }}
              >
                &#10003;
              </span>
              <p
                style={{
                  color: "rgba(245,240,232,0.72)",
                  fontSize: "0.935rem",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── FAQ Section ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
            color: TEXT,
            lineHeight: 1.3,
            margin: "0 0 1.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          Frequently asked questions
        </h2>

        <div style={{ display: "grid", gap: "1rem", marginBottom: "2.5rem" }}>

          <div
            style={{
              background: "rgba(245,240,232,0.03)",
              border: "1px solid rgba(245,240,232,0.08)",
              borderRadius: "0.75rem",
              padding: "1.25rem 1.4rem",
            }}
          >
            <p style={{ fontWeight: 700, color: TEXT, fontSize: "0.95rem", margin: "0 0 0.55rem" }}>
              Is AI a replacement for therapy for social anxiety?
            </p>
            <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
              No. AI companions are practice and reflection tools, not clinical interventions.
              Social anxiety disorder responds well to evidence-based CBT delivered by a qualified
              therapist. MEOK works best alongside professional support — providing unlimited
              low-stakes rehearsal between sessions or while waiting for an appointment.
            </p>
          </div>

          <div
            style={{
              background: "rgba(245,240,232,0.03)",
              border: "1px solid rgba(245,240,232,0.08)",
              borderRadius: "0.75rem",
              padding: "1.25rem 1.4rem",
            }}
          >
            <p style={{ fontWeight: 700, color: TEXT, fontSize: "0.95rem", margin: "0 0 0.55rem" }}>
              Can AI help with exposure therapy for social anxiety?
            </p>
            <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
              AI can support informal exposure practice by providing a zero-stakes environment to
              approach feared conversations before attempting them in real life. This complements
              but does not replace structured exposure hierarchies built and supervised by a trained
              CBT therapist.
            </p>
          </div>

          <div
            style={{
              background: "rgba(245,240,232,0.03)",
              border: "1px solid rgba(245,240,232,0.08)",
              borderRadius: "0.75rem",
              padding: "1.25rem 1.4rem",
            }}
          >
            <p style={{ fontWeight: 700, color: TEXT, fontSize: "0.95rem", margin: "0 0 0.55rem" }}>
              What is social anxiety disorder?
            </p>
            <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
              Social anxiety disorder (SAD) is a persistent, intense fear of being judged,
              embarrassed, or humiliated in social or performance situations. It goes beyond
              shyness: it causes significant distress, triggers physical symptoms such as a racing
              heart and sweating, and leads to avoidance that disrupts daily work and relationships.
              It affects around 12% of people at some point in their lives.
            </p>
          </div>

          <div
            style={{
              background: "rgba(245,240,232,0.03)",
              border: "1px solid rgba(245,240,232,0.08)",
              borderRadius: "0.75rem",
              padding: "1.25rem 1.4rem",
            }}
          >
            <p style={{ fontWeight: 700, color: TEXT, fontSize: "0.95rem", margin: "0 0 0.55rem" }}>
              How does MEOK remember my anxiety triggers?
            </p>
            <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
              MEOK uses persistent sovereign memory — an encrypted vault only you control — to
              store what you share across sessions. Over time it builds a picture of which scenarios
              feel hardest, which thought patterns recur, and where your confidence is growing.
              This continuity makes every session more useful than starting from scratch.
            </p>
          </div>

          <div
            style={{
              background: "rgba(245,240,232,0.03)",
              border: "1px solid rgba(245,240,232,0.08)",
              borderRadius: "0.75rem",
              padding: "1.25rem 1.4rem",
            }}
          >
            <p style={{ fontWeight: 700, color: TEXT, fontSize: "0.95rem", margin: "0 0 0.55rem" }}>
              Can I practise conversations with MEOK before real situations?
            </p>
            <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
              Yes. You can rehearse job interviews, phone calls, meeting new people at parties,
              difficult workplace conversations, and more. You set the scenario, MEOK plays the
              other party, and you can restart or adjust difficulty as many times as you need —
              with no social consequences.
            </p>
          </div>

        </div>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── SECTION 14 ── */}
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
          Does MEOK address the physical symptoms of social anxiety?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.82)",
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.15rem",
          }}
        >
          MEOK cannot directly address physiological arousal — it cannot slow your heart rate, stop
          blushing, or eliminate sweating. What it can do is help you change your relationship to
          those symptoms over time, which is ultimately the mechanism by which clinical treatment
          works too.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          Many SAD sufferers are highly focused on their physical symptoms as signals of social
          failure: they can see I\u2019m sweating, therefore they think less of me. MEOK can guide
          cognitive restructuring around these beliefs — examining whether physical symptoms are as
          visible as feared, what the evidence is that others notice or care, and whether the
          presence of anxiety symptoms is actually incompatible with a successful social interaction.
          Over many sessions, this can reduce the catastrophic significance assigned to
          physiological responses.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          MEOK can also guide basic grounding and self-regulation practices — box breathing, body
          scan, brief mindfulness — as preparation before an anxiety-provoking situation. These are
          not treatments for SAD but they are practical tools for managing acute symptoms in the
          moment, and having a reliable pre-event routine can reduce anticipatory anxiety
          significantly.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── SECTION 15 — Summary ── */}
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
          What makes MEOK different from other AI tools for anxiety support?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.82)",
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.15rem",
          }}
        >
          Most AI tools reset between sessions. They have no memory of who you are, what you
          discussed last week, or what you agreed to try. Each conversation starts from zero. For
          someone managing a condition as pattern-driven as social anxiety disorder — where progress
          depends on seeing change over time and building on previous sessions — this is a
          fundamental limitation.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          MEOK is built differently. Persistent sovereign memory means continuity is built into
          every session. Care-based alignment means the companion is designed around your long-term
          wellbeing, not engagement metrics. The dark, calm interface is designed not to overstimulate
          — the interaction happens at your pace, on your terms, in a space that feels contained.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          These are design decisions made by a founder, Nicholas Templeman, who built MEOK because
          he believed that AI could be a genuinely useful presence in people\u2019s lives — not a
          dependency generator, not a data harvester, but a companion that accumulates understanding
          over time and uses it to help. Social anxiety disorder is one of the conditions where
          that kind of persistent, non-judgmental presence can make a real difference — not as
          therapy, but as the consistent practice partner that most people with SAD have never had.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.15)", margin: "2.5rem 0" }} />

        {/* ── CTA ── */}
        <div
          style={{
            padding: "3rem 2.5rem",
            borderRadius: "1.5rem",
            background:
              "linear-gradient(135deg, rgba(201,168,76,0.13) 0%, rgba(201,168,76,0.05) 100%)",
            border: "1px solid rgba(201,168,76,0.28)",
            marginBottom: "4rem",
            textAlign: "center" as const,
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              color: GOLD,
              marginBottom: "0.75rem",
            }}
          >
            MEOK AI LABS
          </p>
          <h2
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
              color: "#fff",
              lineHeight: 1.22,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            Start practising. Start building confidence.
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.62)",
              fontSize: "0.975rem",
              lineHeight: 1.7,
              maxWidth: "32rem",
              margin: "0 auto 2rem",
            }}
          >
            MEOK provides a private, non-judgmental practice space for social anxiety disorder —
            available any time, with persistent memory that learns your patterns and tracks your
            progress session by session.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.9rem 2.25rem",
              borderRadius: "9999px",
              background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
              color: BG,
              fontWeight: 800,
              fontSize: "0.9rem",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Meet MEOK &#8594;
          </Link>
        </div>

        {/* ── Related links ── */}
        <div style={{ marginBottom: "4rem" }}>
          <p
            style={{
              fontWeight: 700,
              color: "rgba(245,240,232,0.38)",
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              marginBottom: "1rem",
            }}
          >
            Related articles
          </p>
          <div style={{ display: "grid", gap: "0.6rem" }}>
            {[
              {
                href: "/blog/ai-for-social-anxiety",
                label:
                  "AI Companion for Social Anxiety: Practising Real Conversations in a Low-Stakes Space",
              },
              {
                href: "/blog/ai-for-anxiety",
                label:
                  "AI for Anxiety: How Persistent Memory Changes the Practice of Worry",
              },
              {
                href: "/blog/ai-for-confidence",
                label: "AI for Confidence: Building Self-Belief Through Consistent Practice",
              },
              {
                href: "/blog/ai-for-shyness",
                label: "AI for Shyness: When Introversion Becomes a Barrier",
              },
              {
                href: "/blog/ai-companion-vs-therapist",
                label: "AI Companion vs Therapist: Understanding the Distinction",
              },
              {
                href: "/blog/ai-for-phobias",
                label: "AI for Phobias: Approaching Fear in a Controlled Space",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: "rgba(201,168,76,0.8)",
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  lineHeight: 1.5,
                  padding: "0.35rem 0",
                  borderBottom: "1px solid rgba(245,240,232,0.06)",
                  display: "block",
                }}
              >
                {link.label} &#8599;
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
