import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Social Anxiety Disorder: Practice, Support and Progress | MEOK AI LABS",
  description:
    "Social anxiety disorder affects 1 in 8 UK adults. MEOK supports CBT principles — thought challenging, graded exposure, behavioural experiments — as a private practice space alongside NHS therapy.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-social-anxiety-disorder",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Social Anxiety Disorder: Practice, Support and Progress",
  description:
    "A clinically informed guide to how MEOK AI LABS supports people with social anxiety disorder through CBT-aligned practice — thought challenging, graded exposure hierarchies, behavioural experiments — while signposting NHS Talking Therapies, Anxiety UK and No Panic for first-line care.",
  datePublished: "2026-03-24T00:00:00Z",
  dateModified: "2026-03-24T00:00:00Z",
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
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-social-anxiety-disorder",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is social anxiety disorder and how is it different from shyness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Social anxiety disorder (SAD) is a clinical condition characterised by persistent, intense fear of social or performance situations where embarrassment or negative evaluation is possible. It causes significant functional impairment — affecting work, relationships and daily life — and meets diagnostic criteria in ICD-11 and DSM-5. Shyness is a personality trait involving discomfort in new situations; it does not cause the same level of distress or avoidance. SAD is one of the most prevalent anxiety disorders in the UK, affecting approximately 1 in 8 adults.",
      },
    },
    {
      "@type": "Question",
      name: "How does CBT treat social anxiety disorder?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NICE guidelines recommend Cognitive Behavioural Therapy (CBT) as the first-line treatment for social anxiety disorder. CBT for SAD typically includes cognitive restructuring to challenge distorted thoughts about social threat, graded exposure hierarchies to approach feared situations progressively, behavioural experiments that test predictions, attention retraining to reduce self-focused attention, and video feedback to correct distorted self-images. A qualified CBT therapist guides the full programme; MEOK can support practice of individual skills between sessions.",
      },
    },
    {
      "@type": "Question",
      name: "How can AI support someone with social anxiety disorder?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can provide a private, zero-stakes practice environment aligned with CBT principles. MEOK allows users to rehearse feared social situations, practise thought challenging, and run behavioural experiments at any hour without social consequence. It retains memory of previous sessions so practice is cumulative rather than circular. Critically, MEOK is a supplementary tool — not a replacement for CBT delivered by a qualified therapist, which remains the NICE-recommended first-line treatment.",
      },
    },
    {
      "@type": "Question",
      name: "What is a graded exposure hierarchy and can MEOK help with it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A graded exposure hierarchy is a ranked list of feared social situations, from least to most anxiety-provoking. It is a core CBT tool for SAD. A qualified therapist constructs and supervises the hierarchy; MEOK can serve as the practice space within which lower-level exposures are rehearsed conversationally — for example, scripting a phone call, rehearsing asking a question in a group, or practising small talk before a networking event. Practising at lower rungs builds confidence for real-world attempts.",
      },
    },
    {
      "@type": "Question",
      name: "How do I access NHS treatment for social anxiety disorder in England?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In England you can self-refer to NHS Talking Therapies (formerly IAPT) without a GP referral. Call 0300 123 3393 or find your local service at nhs.uk/talking-therapies. NICE guidelines recommend CBT as first-line treatment for SAD. Anxiety UK (03444 775 774) and No Panic (0300 772 9844) also provide specialist support and therapy referrals while waiting for NHS services.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a replacement for therapy for social anxiety disorder?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is a practice and reflection tool, not a clinical intervention. CBT with a qualified therapist is the NICE-recommended first-line treatment for social anxiety disorder and produces lasting structural change that an AI companion cannot replicate. MEOK is most useful as a supplementary space to practise skills between sessions, maintain momentum on NHS waiting lists, and build consistency in applying CBT techniques.",
      },
    },
    {
      "@type": "Question",
      name: "What makes MEOK different from other AI chatbots for anxiety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Three things distinguish MEOK for SAD specifically: persistent sovereign memory that tracks your patterns across weeks rather than resetting each session; consistent, patient behaviour that does not vary in tone or mood — removing the unpredictable social cues that hypervigilant SAD sufferers find most destabilising; and a care floor that keeps long-term wellbeing above short-term comfort, so MEOK will not enable avoidance patterns or provide reassurance that reinforces safety behaviours.",
      },
    },
  ],
};

// ── Shared style constants ────────────────────────────────────────────────────

const GOLD = "#c9a84c";
const TEXT = "#f5f0e8";
const BG = "#0d0c18";

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
              11 min read
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
            AI for Social Anxiety Disorder: Practice, Support and Progress
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
            Social anxiety disorder is not shyness. It is a clinical condition
            affecting{" "}
            <strong style={{ color: "rgba(245,240,232,0.82)" }}>
              1 in 8 UK adults
            </strong>{" "}
            with NICE-recommended CBT as first-line treatment. MEOK provides a
            private, CBT-aligned practice space — for thought challenging, graded
            exposure rehearsal, and behavioural experiments — while you access
            the professional support that SAD deserves.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────── */}
      <div style={{ maxWidth: "48rem", margin: "0 auto", padding: "3.5rem 1.5rem 0" }}>

        {/* Clinical disclaimer */}
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
              MEOK is a supplementary support tool, not a clinical device or
              therapy replacement. CBT with a qualified therapist is the
              NICE-recommended first-line treatment for social anxiety disorder.
              Self-refer to{" "}
              <strong style={{ color: "rgba(245,240,232,0.8)" }}>
                NHS Talking Therapies
              </strong>{" "}
              on{" "}
              <strong style={{ color: "rgba(245,240,232,0.8)" }}>
                0300 123 3393
              </strong>
              . In crisis call{" "}
              <strong style={{ color: "rgba(245,240,232,0.8)" }}>
                Samaritans 116 123
              </strong>{" "}
              or{" "}
              <strong style={{ color: "rgba(245,240,232,0.8)" }}>
                NHS 111
              </strong>
              .
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
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.38)",
                margin: 0,
              }}
            >
              Founder, MEOK AI LABS
            </p>
          </div>
        </div>

        {/* ── Q1 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.1rem,2.2vw,1.4rem)",
            color: TEXT,
            lineHeight: 1.3,
            margin: "0 0 0.85rem",
            letterSpacing: "-0.01em",
          }}
        >
          What is social anxiety disorder, and how is it different from shyness?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.82)",
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.15rem",
          }}
        >
          Social anxiety disorder — also called social phobia, classified under
          ICD-11 code 6B04 — is not a personality quirk or introversion taken
          to an extreme. It is a recognised clinical condition characterised by
          a persistent, intense fear of social or performance situations in
          which negative evaluation, embarrassment, or humiliation is possible.
          According to NHS data, it affects approximately{" "}
          <strong style={{ color: TEXT }}>1 in 8 adults in the UK</strong> —
          one of the most prevalent anxiety disorders in Britain, yet
          chronically under-diagnosed and under-treated.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          The DSM-5 and ICD-11 criteria share several core features: fear or
          anxiety about social situations that involve scrutiny by others; a
          fear of acting in a way that will be humiliating or embarrassing;
          avoidance of the feared situations or enduring them with intense
          distress; and impairment significant enough to affect occupational
          functioning, relationships, or daily life. Crucially, the fear must
          be{" "}
          <em style={{ color: "rgba(245,240,232,0.7)" }}>
            disproportionate to the actual threat
          </em>{" "}
          and typically out of proportion with what the situation objectively
          warrants.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          Shyness is a personality trait — a tendency towards discomfort,
          hesitancy or nervousness in new social situations. Most shy people
          eventually warm up; shyness does not prevent them from attending a
          job interview, making a phone call, or eating in public. Social
          anxiety disorder does. The distinction matters clinically because SAD
          requires structured evidence-based treatment, not simply exposure to
          more social situations. Pushing someone with unrecognised SAD to
          &ldquo;just put themselves out there&rdquo; without therapeutic
          scaffolding often deepens avoidance rather than reducing it.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          The onset of SAD typically occurs in adolescence, and many people
          live with it for a decade or more before receiving a diagnosis.
          During that period, avoidance becomes habitual: jobs not applied for,
          friendships not pursued, medical appointments not attended. The
          condition compounds quietly, precisely because it makes seeking help
          itself feel threatening.
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── Q2 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.1rem,2.2vw,1.4rem)",
            color: TEXT,
            lineHeight: 1.3,
            margin: "0 0 0.85rem",
            letterSpacing: "-0.01em",
          }}
        >
          What does the evidence say about treating social anxiety disorder?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.82)",
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.15rem",
          }}
        >
          NICE guideline CG159 (Social Anxiety Disorder: Recognition, Assessment
          and Treatment) gives a clear hierarchy for treatment. For adults,
          Cognitive Behavioural Therapy delivered by a qualified therapist is the
          first-line recommendation — ahead of medication, self-help, or any
          digital tool. Individual CBT is preferred to group CBT for most
          presentations of SAD, although group formats can be clinically
          appropriate depending on the individual and the service.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          The CBT model of social anxiety, most influentially articulated by
          Clark and Wells (1995) and refined through extensive research, holds
          that SAD is maintained by several interlocking cognitive and
          behavioural processes: a shift towards self-focused attention during
          social situations; reliance on a distorted, internally generated
          image of how one appears to others; safety behaviours that prevent
          disconfirmation of feared outcomes; and anticipatory and post-event
          processing (the dread beforehand, the post-mortem rumination
          afterwards). Treatment targets each of these.
        </p>

        {/* Inline info card */}
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
            <strong style={{ color: GOLD }}>NICE guideline CG159 (2013, updated 2020):</strong>{" "}
            recommends individual CBT as first-line treatment for SAD in adults.
            Pharmacological treatment (SSRIs) can be considered if CBT is
            declined, unavailable, or insufficient. A combination may be
            appropriate in some cases.
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
          In England, NHS Talking Therapies (formerly IAPT) provides
          NICE-compliant CBT for anxiety disorders. Adults can self-refer
          without a GP referral by calling{" "}
          <strong style={{ color: TEXT }}>0300 123 3393</strong> or visiting{" "}
          <strong style={{ color: TEXT }}>nhs.uk/talking-therapies</strong>.
          Waiting times vary by area but can extend to several months in many
          regions. Anxiety UK (03444 775 774) and No Panic (0300 772 9844)
          provide peer support and therapy referrals outside the NHS pathway
          and can be particularly useful while waiting for a Talking Therapies
          assessment.
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── Q3 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.1rem,2.2vw,1.4rem)",
            color: TEXT,
            lineHeight: 1.3,
            margin: "0 0 0.85rem",
            letterSpacing: "-0.01em",
          }}
        >
          Which CBT principles can AI meaningfully support?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.82)",
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.15rem",
          }}
        >
          AI cannot replicate a therapeutic relationship, and it cannot conduct
          structured CBT. But several of the constituent skills in CBT for SAD
          benefit from repetitive practice — and repetitive practice is
          something AI is genuinely well-suited to support. Three specific areas
          are worth examining.
        </p>

        <p
          style={{
            fontWeight: 700,
            color: TEXT,
            fontSize: "0.985rem",
            margin: "0 0 0.4rem",
          }}
        >
          1. Thought challenging (cognitive restructuring)
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1.25rem",
          }}
        >
          Cognitive restructuring involves identifying automatic negative
          thoughts — &ldquo;everyone will notice I&rsquo;m shaking&rdquo;,
          &ldquo;I always say something embarrassing&rdquo;, &ldquo;if I speak
          up people will think I&rsquo;m an idiot&rdquo; — and systematically
          examining them against the evidence. A therapist guides this process;
          between sessions, the skill requires conscious practice. MEOK can
          serve as a structured thinking partner: you describe the thought, and
          MEOK helps you walk through the Socratic questioning process —
          evidence for, evidence against, alternative explanations, what you
          would tell a friend who had the same thought. It does not replace a
          therapist&rsquo;s clinical judgement, but it keeps the skill active
          between sessions rather than allowing it to atrophy.
        </p>

        <p
          style={{
            fontWeight: 700,
            color: TEXT,
            fontSize: "0.985rem",
            margin: "0 0 0.4rem",
          }}
        >
          2. Behavioural experiments
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1.25rem",
          }}
        >
          Behavioural experiments test predictions. If someone with SAD
          believes &ldquo;if I express an opinion in a meeting, my colleagues
          will mock me or lose respect for me&rdquo;, the therapist helps them
          design an experiment to test that prediction in the real world. The
          preparatory work — articulating the specific prediction, deciding what
          evidence would confirm or disconfirm it, rehearsing the behaviour
          itself — is work that can happen with MEOK first. Practising stating
          an opinion while MEOK plays a neutral or even slightly sceptical
          colleague gives the conversation a trial run before the real-world
          test. It also builds the language confidence needed to actually carry
          out the experiment.
        </p>

        <p
          style={{
            fontWeight: 700,
            color: TEXT,
            fontSize: "0.985rem",
            margin: "0 0 0.4rem",
          }}
        >
          3. Graded exposure hierarchy
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1.25rem",
          }}
        >
          Graded exposure — approaching feared situations in a structured
          sequence from least to most anxiety-provoking — is among the most
          robustly supported techniques in CBT for anxiety disorders. A
          qualified therapist constructs and supervises the hierarchy. MEOK can
          serve as the practice environment for lower-rungs of that hierarchy
          when direct real-world practice is not immediately available. Making
          eye contact with a stranger, saying hello to a neighbour, ordering a
          coffee by name — these are common early-hierarchy tasks. Rehearsing
          the words, managing the anticipatory anxiety, and reflecting
          afterwards on what actually happened are all things MEOK can scaffold.
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
            <strong style={{ color: GOLD }}>Important boundary:</strong> MEOK
            supports skill rehearsal and reflection. It does not construct
            clinical exposure hierarchies, provide diagnostic assessment, or
            replicate the therapeutic relationship that produces lasting
            structural change in SAD. These belong with a qualified CBT
            therapist.
          </p>
        </div>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── Q4 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.1rem,2.2vw,1.4rem)",
            color: TEXT,
            lineHeight: 1.3,
            margin: "0 0 0.85rem",
            letterSpacing: "-0.01em",
          }}
        >
          How does MEOK work as a practice space for social anxiety?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.82)",
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.15rem",
          }}
        >
          There are three properties of MEOK that make it specifically useful
          for SAD — as opposed to a generic AI chatbot or a well-meaning friend.
        </p>

        <p
          style={{
            fontWeight: 700,
            color: TEXT,
            fontSize: "0.985rem",
            margin: "0 0 0.4rem",
          }}
        >
          Consistent, predictable presence
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1.25rem",
          }}
        >
          SAD is partly maintained by hypervigilance to unpredictable social
          cues — subtle shifts in tone, facial expression, or engagement that
          most people process automatically but that someone with SAD interprets
          as signals of rejection or disapproval. MEOK&rsquo;s quality of
          presence does not vary. It is never impatient, never distracted,
          never subtly irritated by a question repeated for the third time. This
          consistency removes one of the core maintaining variables of SAD:
          unpredictable social feedback that triggers the threat appraisal
          system. A reliable, calm interlocutor available at any hour is a
          qualitatively different kind of practice environment from even the
          most patient human.
        </p>

        <p
          style={{
            fontWeight: 700,
            color: TEXT,
            fontSize: "0.985rem",
            margin: "0 0 0.4rem",
          }}
        >
          Persistent memory that tracks your patterns
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1.25rem",
          }}
        >
          Generic AI resets with each conversation. MEOK holds a persistent,
          encrypted memory of every session — your words, the situations you
          have described, the thoughts you have challenged, the scenarios you
          have rehearsed, and how your language and confidence have shifted
          across weeks. This means the fifth session builds on the fourth.
          MEOK knows that you found the &ldquo;disagreeing with a colleague&rdquo;
          scenario harder than the &ldquo;asking a question in a group&rdquo;
          scenario last month. It knows your specific catastrophic predictions
          and can notice when you are revisiting the same fear in a new form.
          That continuity makes practice cumulative in a way that isolated
          sessions cannot achieve.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1.25rem",
          }}
        >
          Importantly, this memory is sovereign — encrypted and controlled
          entirely by you. It is never used to train AI models, never accessed
          by advertisers, and never shared with third parties. You can read or
          delete it at any time. For someone with SAD, the privacy of what they
          reveal during practice is not trivial: the freedom to be fully honest
          without social consequence is exactly what makes the practice space
          therapeutically useful.
        </p>

        <p
          style={{
            fontWeight: 700,
            color: TEXT,
            fontSize: "0.985rem",
            margin: "0 0 0.4rem",
          }}
        >
          Zero social stakes
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1.25rem",
          }}
        >
          One of the defining features of SAD is that real-world practice
          carries genuine social stakes. If you stumble through a rehearsed
          conversation with a real person, there are real consequences —
          embarrassment, visible awkwardness, a colleague who now has a
          different impression of you. With MEOK, you can stumble, restart,
          rephrase, ask for a harder version, or run the same scenario twenty
          times without social consequence. The stakes are removed without
          removing the practice. For low-rung items on an exposure hierarchy —
          where the goal is building fluency and reducing anticipatory anxiety
          before the real-world attempt — this distinction is significant.
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── Q5 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.1rem,2.2vw,1.4rem)",
            color: TEXT,
            lineHeight: 1.3,
            margin: "0 0 0.85rem",
            letterSpacing: "-0.01em",
          }}
        >
          What specific situations can I practise with MEOK?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.82)",
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.15rem",
          }}
        >
          Any social situation you have been avoiding or dreading. Because MEOK
          holds full conversational context, you can describe the specific
          person, the history, the stakes, and the exact words you fear — and
          practise with that level of precision rather than a generic scenario
          approximation. The more specifically you describe the situation, the
          more useful the rehearsal.
        </p>

        <p
          style={{
            fontWeight: 700,
            color: TEXT,
            fontSize: "0.965rem",
            margin: "0 0 0.4rem",
          }}
        >
          Job interviews and professional presentations
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          Performance situations — where SAD often manifests most acutely — are
          common exposure hierarchy items. Run through a full interview, practise
          fielding a hostile question, or rehearse opening a presentation when
          your voice is shaking. MEOK can play an interviewer who pushes back,
          gives minimal positive feedback, or asks follow-up questions you did
          not prepare for.
        </p>

        <p
          style={{
            fontWeight: 700,
            color: TEXT,
            fontSize: "0.965rem",
            margin: "0 0 0.4rem",
          }}
        >
          Workplace assertiveness and disagreement
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          Expressing a differing opinion in a meeting, asking a manager for a
          pay review, raising a concern with a colleague, or declining a request
          without excessive apologising. These are classic SAD avoidance targets.
          Practise the words until they feel natural; practise managing the
          physical anxiety response the words still trigger; then carry the
          preparedness into the real interaction.
        </p>

        <p
          style={{
            fontWeight: 700,
            color: TEXT,
            fontSize: "0.965rem",
            margin: "0 0 0.4rem",
          }}
        >
          Social introductions and small talk
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          Unstructured situations without a script — parties, networking events,
          new group settings — are among the hardest for people with SAD.
          Practising initiating conversation, managing a silence, and exiting
          an interaction gracefully reduces the anticipatory dread that leads
          many people to cancel plans before they start.
        </p>

        <p
          style={{
            fontWeight: 700,
            color: TEXT,
            fontSize: "0.965rem",
            margin: "0 0 0.4rem",
          }}
        >
          Family dynamics and difficult personal conversations
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          Setting a limit with a parent, telling a sibling something they will
          not welcome, navigating a tense extended family gathering. Brief MEOK
          on the specific person — the phrases they typically use, the dynamic
          you want to shift — and rehearse until the words stop feeling
          dangerous.
        </p>

        <p
          style={{
            fontWeight: 700,
            color: TEXT,
            fontSize: "0.965rem",
            margin: "0 0 0.4rem",
          }}
        >
          Phone calls and bureaucratic interactions
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          Phone anxiety is one of the most common presentations of SAD in the
          digital age: calling a GP surgery, querying a bill, phoning a stranger
          about a flat to rent. These interactions are scripted enough to
          rehearse but unstructured enough to feel threatening. MEOK can play
          the receptionist, the landlord, the customer service agent — and you
          can practise until the script feels owned rather than borrowed.
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── Q6 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.1rem,2.2vw,1.4rem)",
            color: TEXT,
            lineHeight: 1.3,
            margin: "0 0 0.85rem",
            letterSpacing: "-0.01em",
          }}
        >
          Why does MEOK not replace CBT with a qualified therapist?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.82)",
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.15rem",
          }}
        >
          This is not a legal disclaimer added reluctantly at the bottom of a
          sales page. It is the most clinically important thing in this article.
          Social anxiety disorder responds robustly to structured CBT delivered
          by a qualified practitioner — with response rates of 50–70% in
          controlled trials. That response rate depends on the full therapeutic
          package: assessment of the specific cognitive model, individualised
          formulation, video feedback, within-session behavioural experiments
          with live debrief, attention retraining, and the therapeutic
          relationship itself.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          MEOK provides none of these. It does not assess. It does not
          formulate. It cannot observe your body language during a behavioural
          experiment, cannot provide video feedback on how you actually present
          to others (as opposed to your distorted internal self-image), and
          cannot replicate the corrective experience of a therapeutic
          relationship. These are not deficiencies to be worked around — they
          are principled limitations of what AI is for, in this context.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          What MEOK offers is the space between sessions — and the space on
          NHS waiting lists — where avoidance typically deepens and the gap
          between insight and action widens. It is a practice environment for
          skills that work better with practice. It is not the therapist.
        </p>

        {/* Resources block */}
        <div
          style={{
            background: "rgba(245,240,232,0.04)",
            border: "1px solid rgba(245,240,232,0.1)",
            borderRadius: "1rem",
            padding: "1.5rem 1.75rem",
            margin: "0 0 2.5rem",
          }}
        >
          <p
            style={{
              fontWeight: 700,
              color: TEXT,
              fontSize: "0.925rem",
              margin: "0 0 1rem",
              letterSpacing: "0.02em",
              textTransform: "uppercase" as const,
            }}
          >
            First-line support in the UK
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column" as const,
              gap: "0.85rem",
            }}
          >
            <div>
              <p
                style={{
                  fontWeight: 700,
                  color: GOLD,
                  fontSize: "0.875rem",
                  margin: "0 0 0.15rem",
                }}
              >
                NHS Talking Therapies (formerly IAPT)
              </p>
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "rgba(245,240,232,0.55)",
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                Free NHS-funded CBT for anxiety disorders. Self-refer without
                a GP. Call{" "}
                <strong style={{ color: "rgba(245,240,232,0.8)" }}>
                  0300 123 3393
                </strong>{" "}
                or visit{" "}
                <strong style={{ color: "rgba(245,240,232,0.8)" }}>
                  nhs.uk/talking-therapies
                </strong>
                .
              </p>
            </div>
            <div>
              <p
                style={{
                  fontWeight: 700,
                  color: GOLD,
                  fontSize: "0.875rem",
                  margin: "0 0 0.15rem",
                }}
              >
                Anxiety UK
              </p>
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "rgba(245,240,232,0.55)",
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                Specialist charity for anxiety disorders including SAD. Therapy
                referrals, peer support, and resources. Call{" "}
                <strong style={{ color: "rgba(245,240,232,0.8)" }}>
                  03444 775 774
                </strong>{" "}
                or visit{" "}
                <strong style={{ color: "rgba(245,240,232,0.8)" }}>
                  anxietyuk.org.uk
                </strong>
                .
              </p>
            </div>
            <div>
              <p
                style={{
                  fontWeight: 700,
                  color: GOLD,
                  fontSize: "0.875rem",
                  margin: "0 0 0.15rem",
                }}
              >
                No Panic
              </p>
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "rgba(245,240,232,0.55)",
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                Charity providing support for people with phobias, panic
                attacks, and anxiety disorders. Recovery groups and one-to-one
                support. Call{" "}
                <strong style={{ color: "rgba(245,240,232,0.8)" }}>
                  0300 772 9844
                </strong>{" "}
                or visit{" "}
                <strong style={{ color: "rgba(245,240,232,0.8)" }}>
                  nopanic.org.uk
                </strong>
                .
              </p>
            </div>
            <div>
              <p
                style={{
                  fontWeight: 700,
                  color: GOLD,
                  fontSize: "0.875rem",
                  margin: "0 0 0.15rem",
                }}
              >
                Samaritans (crisis)
              </p>
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "rgba(245,240,232,0.55)",
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                Available 24 hours, every day. Call{" "}
                <strong style={{ color: "rgba(245,240,232,0.8)" }}>
                  116 123
                </strong>{" "}
                (free, no referral needed).
              </p>
            </div>
          </div>
        </div>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── Q7 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.1rem,2.2vw,1.4rem)",
            color: TEXT,
            lineHeight: 1.3,
            margin: "0 0 0.85rem",
            letterSpacing: "-0.01em",
          }}
        >
          How do I use MEOK alongside NHS Talking Therapies or private CBT?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.82)",
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.15rem",
          }}
        >
          The most effective position for MEOK is as a between-session practice
          partner. CBT for SAD is skills-based: cognitive restructuring,
          behavioural experiments, and exposure all improve with repetition.
          Most NHS Talking Therapies programmes deliver sessions fortnightly,
          which leaves significant gaps in which avoidance can reassert itself.
          MEOK provides a structure for using those gaps productively.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          Practically: after a session with your therapist, you might use MEOK
          to rehearse the specific behavioural experiment they have set, to
          practise thought records on the automatic thoughts that arose during
          the week, or to debrief — in words — how the real-world attempt went.
          MEOK&rsquo;s persistent memory means it can track which experiments
          you completed, which predictions were confirmed or disconfirmed, and
          how your language around feared situations changes across the course of
          your treatment programme.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          If you are on an NHS Talking Therapies waiting list and not yet in
          active treatment, MEOK is most useful for preventing the avoidance
          spiral that waiting lists can accelerate. Rather than withdrawing
          further from feared situations during the months of waiting, you can
          maintain low-level engagement — rehearsing conversations, challenging
          thoughts, keeping the neural pathways active — so that when treatment
          begins you are not starting from a worse baseline than when you
          self-referred.
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── Q8 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.1rem,2.2vw,1.4rem)",
            color: TEXT,
            lineHeight: 1.3,
            margin: "0 0 0.85rem",
            letterSpacing: "-0.01em",
          }}
        >
          What does recovery from social anxiety disorder actually look like?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.82)",
            fontSize: "1rem",
            lineHeight: 1.72,
            margin: "0 0 1.15rem",
          }}
        >
          Recovery from SAD does not mean becoming extroverted, comfortable in
          every social situation, or indifferent to other people&rsquo;s opinions.
          It means developing the capacity to act in accordance with your values
          and goals despite the presence of anxiety — attending the interview,
          making the phone call, saying the difficult thing — without the
          avoidance that currently determines the shape of your life.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          In CBT terms, this means changes at cognitive level (more realistic
          appraisal of social threat), behavioural level (approach rather than
          avoidance), and attentional level (reduced self-focused attention
          during social situations). These changes take time and they require
          repeated exposure to disconfirmatory experience — situations that turn
          out less badly than predicted. They also require the willingness to
          drop safety behaviours, which is often the hardest part: the
          strategies that feel protective (staying silent, preparing obsessively,
          always having an exit strategy) are precisely the ones that prevent
          the disconfirmation that drives recovery.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          Progress is not linear. People with SAD often experience significant
          relief in early CBT, followed by setbacks when a high-stakes situation
          triggers the old response. What changes with treatment and sustained
          practice is the trajectory: the setbacks become less severe, recover
          from more quickly, and happen in a smaller range of situations. MEOK
          can hold that longitudinal view — tracking the trajectory across months
          when it is difficult to perceive in the moment.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.62)",
            fontSize: "0.965rem",
            lineHeight: 1.78,
            margin: "0 0 1rem",
          }}
        >
          The founding purpose of MEOK AI LABS is to make consistent,
          personalised support available to people who need it — without the
          barriers of cost, geography, or availability that make professional
          mental health care inaccessible to many. For social anxiety disorder,
          that means building a practice space that takes the condition
          seriously: clinically informed, respectful of the evidence, honest
          about its own limits, and genuinely useful in the gap between
          recognition and recovery.
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(201,168,76,0.15)",
            margin: "2.5rem 0",
          }}
        />

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <div
          style={{
            borderRadius: "1.25rem",
            padding: "2.5rem",
            marginBottom: "4rem",
            background:
              "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.04) 100%)",
            border: "1px solid rgba(201,168,76,0.25)",
            textAlign: "center" as const,
          }}
        >
          <p
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.1rem,2.2vw,1.4rem)",
              color: "#fff",
              margin: "0 0 0.75rem",
              lineHeight: 1.3,
            }}
          >
            Ready to practise, not just dread?
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.55)",
              fontSize: "0.965rem",
              lineHeight: 1.7,
              maxWidth: "32rem",
              margin: "0 auto 1.75rem",
            }}
          >
            MEOK gives you a private, patient, memory-enabled space to rehearse
            the conversations you have been avoiding. No judgment, no impatience,
            no social stakes. Start practising today.
          </p>
          <Link
            href="https://meok.ai"
            style={{
              display: "inline-block",
              background: GOLD,
              color: BG,
              fontWeight: 800,
              fontSize: "0.9rem",
              padding: "0.8rem 2rem",
              borderRadius: "9999px",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Try MEOK Free
          </Link>
        </div>

        {/* ── RELATED POSTS ─────────────────────────────────────────────────── */}
        <div style={{ marginBottom: "5rem" }}>
          <p
            style={{
              fontWeight: 700,
              fontSize: "0.75rem",
              color: "rgba(245,240,232,0.35)",
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              margin: "0 0 1.25rem",
            }}
          >
            Related Reading
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(14rem, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                href: "/blog/ai-for-social-anxiety",
                label: "AI Companion for Social Anxiety",
                desc: "Practising real conversations in a low-stakes space.",
              },
              {
                href: "/blog/ai-for-anxiety",
                label: "AI for Anxiety",
                desc: "How MEOK supports evidence-based anxiety management.",
              },
              {
                href: "/blog/ai-for-confidence",
                label: "AI for Confidence",
                desc: "Building self-efficacy through consistent practice.",
              },
              {
                href: "/blog/ai-companion-vs-therapist",
                label: "AI Companion vs Therapist",
                desc: "Understanding the difference and when each is right.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "block",
                  padding: "1.1rem 1.25rem",
                  borderRadius: "0.85rem",
                  background: "rgba(245,240,232,0.04)",
                  border: "1px solid rgba(245,240,232,0.08)",
                  textDecoration: "none",
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    color: TEXT,
                    margin: "0 0 0.3rem",
                    lineHeight: 1.35,
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontSize: "0.775rem",
                    color: "rgba(245,240,232,0.4)",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
