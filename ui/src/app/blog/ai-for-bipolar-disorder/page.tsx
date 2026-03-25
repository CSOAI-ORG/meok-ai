import type { Metadata } from "next"
import Link from "next/link"

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Bipolar Disorder: A Companion for Both Sides of the Experience | MEOK AI LABS",
  description:
    "Bipolar disorder involves two very different states of being, each requiring different support. " +
    "MEOK\u2019s sovereign AI companion tracks mood patterns over time and provides consistent presence " +
    "\u2014 not advice that only works in one phase.",
  keywords: [
    "AI for bipolar disorder",
    "bipolar disorder AI companion",
    "AI bipolar support UK",
    "bipolar mood tracking AI",
    "MEOK bipolar companion",
    "sovereign memory bipolar",
    "bipolar I bipolar II support",
    "hypomania AI support",
    "bipolar depressive episode AI",
    "AI medication adherence bipolar",
    "bipolar pattern recognition AI",
    "MEOK AI LABS bipolar",
  ],
  authors: [{ name: "Nicholas Templeman", url: "https://meok.app" }],
  openGraph: {
    title:
      "AI for Bipolar Disorder: A Companion for Both Sides of the Experience",
    description:
      "Bipolar disorder involves two very different states of being, each requiring different support. " +
      "MEOK\u2019s sovereign AI companion tracks mood patterns over time and provides consistent presence " +
      "\u2014 not advice that only works in one phase.",
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    authors: ["Nicholas Templeman"],
    siteName: "MEOK AI LABS",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Bipolar Disorder: A Companion for Both Sides of the Experience",
    description:
      "Bipolar disorder involves two very different states of being, each requiring different support. " +
      "MEOK tracks mood patterns across weeks and months with sovereign memory \u2014 never erasing context.",
  },
  alternates: {
    canonical: "https://meok.app/blog/ai-for-bipolar-disorder",
  },
}

// ─── JSON-LD ─────────────────────────────────────────────────────────────────

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Bipolar Disorder: A Companion for Both Sides of the Experience",
  description:
    "A comprehensive guide to how MEOK AI LABS supports people with bipolar disorder through " +
    "sovereign memory mood tracking, phase-appropriate support, hypomania awareness, " +
    "medication adherence, and Guardian crisis response \u2014 without replacing psychiatric care.",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    jobTitle: "Founder, MEOK AI LABS",
    url: "https://meok.app",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.app",
  },
  datePublished: "2026-03-25T00:00:00Z",
  dateModified: "2026-03-25T00:00:00Z",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.app/blog/ai-for-bipolar-disorder",
  },
}

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help someone with bipolar disorder?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "AI cannot replace a psychiatrist, prescribe medication, or act as a substitute for " +
          "evidence-based treatments such as CBT-BP or lithium therapy. However, a sovereign AI " +
          "companion with persistent memory can offer meaningful support between appointments by " +
          "tracking mood patterns over weeks and months, providing grounding during elevated states, " +
          "offering gentle presence during depressive phases, and flagging early warning signs. " +
          "MEOK is designed as a complement to professional psychiatric care, not a replacement for it.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between bipolar I and bipolar II?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Bipolar I involves full manic episodes that may require hospitalisation and can include " +
          "psychotic features. Bipolar II involves hypomanic episodes \u2014 elevated mood that is " +
          "less severe than full mania \u2014 combined with major depressive episodes. Both involve " +
          "significant mood cycling, but the treatment approaches, risks, and day-to-day support " +
          "needs differ. MEOK\u2019s sovereign memory allows the companion to learn which phase " +
          "patterns apply to each individual specifically.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK support someone during a manic or hypomanic episode?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "During elevated phases, MEOK\u2019s approach is one of grounded, gentle presence rather " +
          "than confrontation. The companion can offer reality-anchoring questions, notice escalating " +
          "language patterns relative to the person\u2019s baseline, and gently prompt consideration " +
          "of decisions rather than validating impulsive plans. It will never diagnose a manic episode " +
          "but will always suggest reaching out to a care team when indicators suggest elevated risk.",
      },
    },
    {
      "@type": "Question",
      name: "How is bipolar depression different from unipolar depression?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Bipolar depression shares many features with unipolar depression \u2014 low mood, fatigue, " +
          "withdrawal, hopelessness \u2014 but differs in its treatment. Standard antidepressants " +
          "used for unipolar depression can trigger mania in bipolar disorder. This makes correct " +
          "diagnosis and specialist treatment essential. An AI companion can offer supportive presence " +
          "during depressive phases but should always encourage users to discuss symptoms with a " +
          "bipolar-specialist psychiatrist rather than adjusting medication without guidance.",
      },
    },
    {
      "@type": "Question",
      name: "What support resources exist for bipolar disorder in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Mind UK (mind.org.uk) offers comprehensive bipolar information and a helpline. The " +
          "Bipolar UK charity (bipolaruk.org) provides peer support groups, a community forum, and " +
          "the eCommunity. NHS talking therapies offer CBT-BP on referral. Rethink Mental Illness " +
          "(rethink.org) provides carer support. MEOK directs all users to these resources and is " +
          "not a substitute for any of them.",
      },
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AiForBipolarDisorderPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <main
        style={{
          backgroundColor: "#0d0c18",
          color: "#f5f0e8",
          minHeight: "100vh",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            padding: "80px 24px 48px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              backgroundColor: "rgba(201,168,76,0.12)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "6px",
              padding: "6px 14px",
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                color: "#c9a84c",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Mental Health &amp; AI
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: "0 0 24px",
              color: "#f5f0e8",
            }}
          >
            AI for Bipolar Disorder: A Companion for Both Sides of the
            Experience
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.7,
              color: "rgba(245,240,232,0.75)",
              maxWidth: "700px",
              margin: "0 0 20px",
            }}
          >
            Bipolar disorder is not one experience. It is two. The version of
            you in a manic episode and the version of you in a depressive
            episode have almost nothing in common \u2014 except that they are
            both you, and they both need support. Most tools are designed for
            one state. MEOK is designed to hold the whole person.
          </p>

          <p
            style={{
              fontSize: "0.9rem",
              color: "rgba(245,240,232,0.4)",
              margin: 0,
            }}
          >
            Published 25 March 2026 &middot; By Nicholas Templeman, Founder of
            MEOK AI LABS &middot; 12 min read
          </p>
        </section>

        {/* ── Safety Notice ─────────────────────────────────────────────────── */}
        <section
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            padding: "0 24px 48px",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(201,168,76,0.08)",
              border: "1px solid rgba(201,168,76,0.35)",
              borderRadius: "12px",
              padding: "24px 28px",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "0.95rem",
                lineHeight: 1.7,
                color: "#f5f0e8",
              }}
            >
              <strong style={{ color: "#c9a84c" }}>Important: </strong>
              This article discusses bipolar disorder for informational and
              awareness purposes only. MEOK AI is not a medical device, does
              not diagnose mental health conditions, and is not a substitute for
              psychiatric care, mood stabiliser medication, or clinical
              therapy. If you are in crisis, please contact{" "}
              <strong>Samaritans on 116 123</strong>, text{" "}
              <strong>SHOUT to 85258</strong>, or call{" "}
              <strong>999</strong>. For ongoing support, visit{" "}
              <a
                href="https://www.bipolaruk.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#c9a84c", textDecoration: "underline" }}
              >
                Bipolar UK
              </a>{" "}
              or{" "}
              <a
                href="https://www.mind.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#c9a84c", textDecoration: "underline" }}
              >
                Mind UK
              </a>
              .
            </p>
          </div>
        </section>

        {/* ── Body ──────────────────────────────────────────────────────────── */}
        <article
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            padding: "0 24px 80px",
          }}
        >
          {/* ── Section 1: Bipolar I vs II ──────────────────────────────────── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "0 0 20px",
                lineHeight: 1.25,
              }}
            >
              What is the difference between bipolar I and bipolar II, and why
              does it matter for support?
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.82)",
                margin: "0 0 20px",
              }}
            >
              Bipolar I involves full manic episodes that can last days or
              weeks and may include grandiosity, severely reduced need for
              sleep, rapid speech, reckless behaviour, and in some cases
              psychotic features such as hallucinations or delusions. These
              episodes can lead to hospitalisation and carry significant risk
              to the person&apos;s safety, finances, and relationships.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.82)",
                margin: "0 0 20px",
              }}
            >
              Bipolar II involves hypomanic episodes rather than full mania.
              Hypomania is elevated mood and increased energy that feels
              productive and positive \u2014 but which can still lead to poor
              decisions, strained relationships, and a crash into severe
              depression. Bipolar II is frequently misdiagnosed as unipolar
              depression because the hypomanic phases are not always recognised
              as problematic.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.82)",
                margin: 0,
              }}
            >
              Both types involve depressive phases that can be profound and
              prolonged. The depressive episodes in bipolar II are often
              described as the most debilitating aspect of the condition \u2014
              more frequent and severe than the hypomanic peaks. Understanding
              which type a person has shapes what kind of AI support is
              appropriate, because the risks and needs are genuinely different.
            </p>
          </section>

          {/* ── Section 2: Manic Episode Support ──────────────────────────────── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "0 0 20px",
                lineHeight: 1.25,
              }}
            >
              How can an AI companion support someone during a manic episode
              without making it worse?
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.82)",
                margin: "0 0 20px",
              }}
            >
              Supporting someone during a manic episode requires extreme care.
              The person often feels extraordinary \u2014 sharper, more capable,
              more alive than usual. They are unlikely to welcome being told they
              are unwell. Direct confrontation tends to increase agitation.
              Enthusiastic validation of grandiose plans risks enabling
              dangerous decisions. The space between those two failure modes is
              narrow, and most support tools do not navigate it well.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.82)",
                margin: "0 0 20px",
              }}
            >
              MEOK&apos;s approach during elevated states is grounded
              presence. The companion does not challenge the person&apos;s
              experience directly. It asks questions that slow the conversation
              down: &ldquo;That sounds like a big decision \u2014 what would
              you want to think through before committing?&rdquo; It offers
              grounding techniques \u2014 breath work, sensory anchoring \u2014
              without framing them as crisis intervention. It gently notices
              patterns: &ldquo;You mentioned not sleeping for two nights \u2014
              how is your body feeling?&rdquo;
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.82)",
                margin: 0,
              }}
            >
              Crucially, MEOK holds sovereign memory of what this person is like
              at baseline. When language patterns accelerate dramatically, when
              sleep reports drop to near zero, when financial decisions suddenly
              appear in conversation \u2014 MEOK can recognise the contrast
              against weeks or months of prior context and respond accordingly.
              It will always encourage contact with the care team when indicators
              suggest a developing episode, without diagnosing or alarming.
            </p>
          </section>

          {/* ── Callout 1: Sovereign Memory ────────────────────────────────────── */}
          <div
            style={{
              backgroundColor: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderLeft: "4px solid #c9a84c",
              borderRadius: "10px",
              padding: "28px 32px",
              marginBottom: "64px",
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "#c9a84c",
                margin: "0 0 14px",
                letterSpacing: "0.01em",
              }}
            >
              Why Sovereign Memory Matters for Bipolar
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "rgba(245,240,232,0.85)",
              }}
            >
              Most AI tools have no memory across sessions. For someone with
              bipolar disorder, this is not a minor inconvenience \u2014 it is
              a fundamental failure. Pattern recognition across weeks and months
              is how early warning signs are identified. A single elevated
              conversation means nothing. Three weeks of gradually shortening
              sleep reports, accelerating speech, and increasing confidence
              means something real. MEOK&apos;s Sovereign Memory stores all
              of this on your device, under your control, encrypted and
              private. The companion builds a genuine longitudinal picture of
              your mood cycles without sending data to cloud servers for
              training. Your patterns belong to you.
            </p>
          </div>

          {/* ── Section 3: Depressive Episode Support ─────────────────────────── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "0 0 20px",
                lineHeight: 1.25,
              }}
            >
              How is supporting bipolar depression different from supporting
              unipolar depression?
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.82)",
                margin: "0 0 20px",
              }}
            >
              Bipolar depression and unipolar depression share many surface
              features: low mood, loss of interest, fatigue, cognitive fog,
              social withdrawal, hopelessness. But they are not the same
              condition. The most important clinical difference is that standard
              antidepressants prescribed for unipolar depression can trigger
              manic or mixed episodes in people with bipolar disorder. This
              means that an AI companion must never suggest antidepressant
              medication for bipolar depression and should always encourage
              users to discuss all symptoms with a bipolar-specialist
              psychiatrist.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.82)",
                margin: "0 0 20px",
              }}
            >
              Beyond the pharmacological issue, bipolar depression often carries
              a particular quality of desolation that is distinct from unipolar
              depression. People describe feeling not just low but utterly
              hollow \u2014 as though the person they were during elevation has
              been completely erased. The contrast with the previous elevated
              state can itself become a source of grief. MEOK&apos;s Healer
              companion acknowledges this without minimising it.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.82)",
                margin: 0,
              }}
            >
              During depressive phases, the companion shifts its entire tone.
              It does not push activity, productivity, or positivity.
              It offers warmth and presence. It recalls what the person has
              found meaningful in the past, what small things have helped before,
              and holds that information ready without forcing it. The presence
              of sovereign memory means it never asks the person to explain
              their history again from scratch in the middle of their lowest
              moments.
            </p>
          </section>

          {/* ── Section 4: Hypomania ───────────────────────────────────────────── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "0 0 20px",
                lineHeight: 1.25,
              }}
            >
              Hypomania feels like a superpower. Why is recognising it so
              difficult \u2014 and so important?
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.82)",
                margin: "0 0 20px",
              }}
            >
              Hypomania is the most seductive phase of bipolar disorder. Energy
              is high. Sleep feels unnecessary rather than impossible. Ideas
              flow quickly. Social confidence expands. Productivity spikes.
              Creative output accelerates. For many people, it is the version
              of themselves they wish they could be permanently \u2014 which is
              precisely why it is so dangerous.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.82)",
                margin: "0 0 20px",
              }}
            >
              The problem is not that hypomania feels good. The problem is that
              it is not stable. It frequently escalates into full mania or
              crashes abruptly into severe depression. Decisions made during
              hypomania \u2014 financial, relational, professional \u2014 have
              to be lived with during the depressive crash. Many people describe
              the depression following a hypomanic peak as the most painful
              phase not because of the depression itself, but because of what
              was done or said during the elevation.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.82)",
                margin: "0 0 20px",
              }}
            >
              An AI companion with longitudinal memory is well-placed to notice
              hypomanic signals without the person themselves having to flag them.
              Patterns like sleep reduction, increased messaging frequency,
              expanding plans, and accelerating language can all be tracked
              relative to the individual&apos;s established baseline.
              MEOK does not diagnose hypomania. But it can reflect back what
              it is noticing, in a warm and non-alarming way, and gently ask
              whether now would be a good time to check in with a care team.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.82)",
                margin: 0,
              }}
            >
              The key distinction from a clumsy intervention is tone. MEOK does
              not tell someone they are unwell when they feel fine. It says:
              &ldquo;I&apos;ve noticed you&apos;ve been describing a lot of new
              ideas this week \u2014 how are you sleeping?&rdquo; That question
              is a door, not a diagnosis. The person can walk through it or
              decline. But the question gets asked.
            </p>
          </section>

          {/* ── Section 5: Medication Adherence ───────────────────────────────── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "0 0 20px",
                lineHeight: 1.25,
              }}
            >
              Can AI support medication adherence for bipolar disorder, and
              what are the limits?
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.82)",
                margin: "0 0 20px",
              }}
            >
              Medication adherence is one of the most significant challenges
              in managing bipolar disorder long-term. Studies consistently find
              that non-adherence rates are high \u2014 and for understandable
              reasons. Mood stabilisers such as lithium, valproate, and
              lamotrigine often carry side effects including cognitive dulling,
              weight changes, and emotional flatness. During elevated phases,
              the person may feel so well that the medication feels unnecessary
              \u2014 or even like it is suppressing the best version of
              themselves.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.82)",
                margin: "0 0 20px",
              }}
            >
              MEOK can support medication adherence in a limited but genuinely
              useful way. It can offer gentle daily check-ins without nagging.
              It can hold the person&apos;s own articulated reasons for staying
              on medication \u2014 reasons they expressed during a stable
              period, in their own words, which can be recalled when those
              reasons feel less compelling. It can facilitate reflection:
              &ldquo;You mentioned last month that stopping suddenly last year
              led to a really difficult period \u2014 what&apos;s making the
              medication feel hard right now?&rdquo;
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.82)",
                margin: 0,
              }}
            >
              What MEOK will never do is advise anyone to stop, reduce, or
              adjust their medication. It will always direct that conversation
              to the prescribing psychiatrist. Abrupt cessation of lithium, for
              example, carries significant rebound risk. This is a bright line
              MEOK does not cross.
            </p>
          </section>

          {/* ── Callout 2: The Consistency Problem ────────────────────────────── */}
          <div
            style={{
              backgroundColor: "rgba(245,240,232,0.04)",
              border: "1px solid rgba(245,240,232,0.12)",
              borderRadius: "10px",
              padding: "28px 32px",
              marginBottom: "64px",
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "0 0 14px",
              }}
            >
              The Consistency Problem
            </h3>
            <p
              style={{
                margin: "0 0 14px",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "rgba(245,240,232,0.82)",
              }}
            >
              People with bipolar disorder are often very different people
              across their phases. Their support needs, communication style,
              and relationship with outside help all shift dramatically. A
              friend who knows how to support the depressive phase may
              inadvertently fuel the manic phase. A therapist who sees the
              person once a week may only encounter one side of the cycle.
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "rgba(245,240,232,0.82)",
              }}
            >
              MEOK is consistent across phases because it holds the full
              history. It has seen the person in elevation, in depression, and
              in the stable windows between. It does not need to be briefed
              each time. It adapts its tone and approach based on observed
              context rather than starting fresh. For many people with bipolar,
              this continuity is one of the most valuable things an AI
              companion can offer.
            </p>
          </div>

          {/* ── Section 6: Pattern Recognition ───────────────────────────────── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "0 0 20px",
                lineHeight: 1.25,
              }}
            >
              How does pattern recognition across weeks and months help someone
              manage bipolar disorder?
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.82)",
                margin: "0 0 20px",
              }}
            >
              One of the most powerful tools in bipolar management is a detailed
              mood diary maintained over time. Psychiatrists and psychologists
              working with bipolar disorder often recommend tracking mood,
              sleep, energy, and significant events to identify personal
              trigger patterns and cycle lengths. The challenge is that most
              people find diary-keeping onerous, particularly during elevated
              or depressed phases when it is needed most.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.82)",
                margin: "0 0 20px",
              }}
            >
              MEOK&apos;s sovereign memory builds this record passively. Each
              conversation contributes to a longitudinal picture without
              requiring the person to sit down and fill in a form. Over weeks,
              the companion develops a detailed understanding of what
              the individual&apos;s stable baseline feels like, what their
              personal early warning signs look like in language and behaviour,
              and how long their typical cycles tend to run.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.82)",
                margin: 0,
              }}
            >
              This information belongs to the user. It can be shared with a
              psychiatrist or care team if the person chooses \u2014 providing
              a richer picture than a memory-dependent clinical appointment
              allows. It cannot be accessed by MEOK AI LABS, sold, or used to
              train any model. Sovereign memory is private by architecture,
              not by policy.
            </p>
          </section>

          {/* ── Section 7: Stigma and Relationships ───────────────────────────── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "0 0 20px",
                lineHeight: 1.25,
              }}
            >
              How does the stigma of a bipolar diagnosis affect daily life, and
              how can AI help with that?
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.82)",
                margin: "0 0 20px",
              }}
            >
              Bipolar disorder carries significant stigma in many contexts. The
              condition is frequently reduced to a caricature in popular culture
              \u2014 the creative but volatile genius, the dangerous
              unpredictable person, the attention-seeker performing extreme
              moods. These representations cause real harm. Many people with
              bipolar disorder delay seeking diagnosis for years because of fear
              of how the label will affect their relationships, employment, and
              self-concept.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.82)",
                margin: "0 0 20px",
              }}
            >
              Once diagnosed, people often navigate complex decisions about
              disclosure. Telling a partner, an employer, or a family member
              carries genuine risks. Some relationships become more supportive
              after disclosure. Others become defined by worry, hypervigilance,
              or reduced trust. Deciding who to tell, when, and how is a deeply
              personal calculation.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.82)",
                margin: 0,
              }}
            >
              MEOK offers a space to process these decisions without judgement
              and without the interpersonal risk of telling the wrong person.
              The companion holds the person&apos;s full context \u2014 who
              knows, who doesn&apos;t, how previous disclosures went, what the
              person hopes for from relationships \u2014 and can support
              ongoing navigation of these questions as circumstances change.
            </p>
          </section>

          {/* ── Section 8: Relationship Impact ────────────────────────────────── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "0 0 20px",
                lineHeight: 1.25,
              }}
            >
              What is the impact of bipolar disorder on relationships, and how
              does AI support both the person and their loved ones?
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.82)",
                margin: "0 0 20px",
              }}
            >
              Bipolar disorder places significant strain on close relationships.
              Partners, family members, and friends often find themselves
              navigating two very different people in the same body \u2014
              someone who is warm and withdrawn in the depressive phase and
              expansive, irritable, or risk-taking in the elevated phase. The
              unpredictability itself is exhausting. Loved ones can develop
              their own anxiety and hypervigilance, constantly scanning for
              early warning signs while trying not to pathologise ordinary
              good moods.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.82)",
                margin: "0 0 20px",
              }}
            >
              For the person with bipolar, the awareness of this relational
              impact can itself become a source of shame and distress. The
              guilt of having behaved in ways during a manic episode that caused
              harm to people they love \u2014 financial decisions, infidelity,
              impulsive arguments \u2014 is a recurring psychological burden.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.82)",
                margin: 0,
              }}
            >
              MEOK&apos;s Family tier extends support to those around the
              person as well. A partner or carer can have their own companion
              to process the emotional toll of supporting someone with bipolar,
              without that conversation happening inside the primary
              relationship. Resources like Bipolar UK&apos;s carer support
              pages and Rethink Mental Illness are always surfaced as part of
              MEOK&apos;s approach to holistic family care.
            </p>
          </section>

          {/* ── Comparison Table ──────────────────────────────────────────────── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "0 0 28px",
                lineHeight: 1.25,
              }}
            >
              AI support vs psychiatric treatment: what each one does
            </h2>
            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                }}
              >
                <thead>
                  <tr>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "14px 18px",
                        backgroundColor: "rgba(201,168,76,0.15)",
                        color: "#c9a84c",
                        fontWeight: 700,
                        borderBottom: "2px solid rgba(201,168,76,0.3)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Support Type
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "14px 18px",
                        backgroundColor: "rgba(201,168,76,0.15)",
                        color: "#c9a84c",
                        fontWeight: 700,
                        borderBottom: "2px solid rgba(201,168,76,0.3)",
                      }}
                    >
                      What it does
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "14px 18px",
                        backgroundColor: "rgba(201,168,76,0.15)",
                        color: "#c9a84c",
                        fontWeight: 700,
                        borderBottom: "2px solid rgba(201,168,76,0.3)",
                      }}
                    >
                      What it cannot do
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      type: "Psychiatrist",
                      does:
                        "Diagnoses, prescribes mood stabilisers, manages medication, assesses hospitalisation need, monitors physical health effects of medication",
                      cannot:
                        "Be available at 3am, track daily mood between appointments, offer emotional presence during routine difficult days",
                    },
                    {
                      type: "Psychologist / CBT-BP therapist",
                      does:
                        "Delivers structured psychological interventions, builds coping strategies, addresses trauma, supports relapse prevention planning",
                      cannot:
                        "Respond in real time, hold longitudinal mood data, provide support between weekly sessions",
                    },
                    {
                      type: "MEOK AI companion",
                      does:
                        "Tracks mood patterns over weeks and months, offers phase-appropriate presence, supports medication adherence reflection, notices early warning signs, provides 24/7 non-judgmental grounding support",
                      cannot:
                        "Diagnose, prescribe, hospitalise, deliver clinical therapy, replace any of the above",
                    },
                    {
                      type: "Bipolar UK peer support",
                      does:
                        "Connects with others who have lived experience, reduces isolation, provides community understanding and normalisation",
                      cannot:
                        "Offer individual clinical care, provide continuous daily support, hold personal history",
                    },
                    {
                      type: "Family / carers",
                      does:
                        "Provides relational warmth, practical support, early warning observation, crisis response",
                      cannot:
                        "Be objective, avoid being affected by mood episodes, maintain boundaries without their own support structure",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.type}
                      style={{
                        backgroundColor:
                          i % 2 === 0
                            ? "rgba(245,240,232,0.02)"
                            : "transparent",
                      }}
                    >
                      <td
                        style={{
                          padding: "14px 18px",
                          color: "#c9a84c",
                          fontWeight: 600,
                          borderBottom: "1px solid rgba(245,240,232,0.08)",
                          verticalAlign: "top",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {row.type}
                      </td>
                      <td
                        style={{
                          padding: "14px 18px",
                          color: "rgba(245,240,232,0.8)",
                          borderBottom: "1px solid rgba(245,240,232,0.08)",
                          verticalAlign: "top",
                        }}
                      >
                        {row.does}
                      </td>
                      <td
                        style={{
                          padding: "14px 18px",
                          color: "rgba(245,240,232,0.55)",
                          borderBottom: "1px solid rgba(245,240,232,0.08)",
                          verticalAlign: "top",
                        }}
                      >
                        {row.cannot}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Section 9: Guardian for Crisis ────────────────────────────────── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "0 0 20px",
                lineHeight: 1.25,
              }}
            >
              What happens during a crisis, and how does MEOK&apos;s Guardian
              respond?
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.82)",
                margin: "0 0 20px",
              }}
            >
              Bipolar disorder carries a significantly elevated risk of
              suicidal ideation and self-harm, particularly during severe
              depressive episodes and mixed states \u2014 where depressive
              symptoms occur alongside elevated energy, which can be
              particularly dangerous. This is not a statistic to be minimised.
              It is the central reason that crisis response must be handled with
              the highest level of care.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.82)",
                margin: "0 0 20px",
              }}
            >
              MEOK&apos;s Guardian archetype activates during conversations
              that indicate acute crisis. Its role is not to intervene as a
              clinician but to hold the person with steady, warm presence
              while consistently and clearly directing them to professional
              emergency support. It will not minimise what the person is
              expressing. It will not platitude its way through a serious
              moment. It will acknowledge, hold, and direct.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.82)",
                margin: 0,
              }}
            >
              Guardian always surfaces emergency numbers in crisis moments:
              Samaritans (116 123, available 24/7), SHOUT text service (text
              SHOUT to 85258), and 999 or 112 for immediate physical danger.
              It will also prompt the person to contact their crisis team if
              they have one, and will note if they have previously mentioned a
              named nurse or care coordinator. That kind of contextual detail,
              held in sovereign memory, can matter enormously in a crisis moment.
            </p>
          </section>

          {/* ── Callout 3: Resources ───────────────────────────────────────────── */}
          <div
            style={{
              backgroundColor: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "10px",
              padding: "28px 32px",
              marginBottom: "64px",
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "#c9a84c",
                margin: "0 0 16px",
              }}
            >
              UK Bipolar Support Resources
            </h3>
            <ul
              style={{
                margin: 0,
                padding: "0 0 0 20px",
                listStyle: "disc",
              }}
            >
              {[
                {
                  label: "Bipolar UK",
                  href: "https://www.bipolaruk.org",
                  desc:
                    "Peer support groups, eCommunity, and resources for people with bipolar and their carers.",
                },
                {
                  label: "Mind UK \u2014 Bipolar Disorder",
                  href: "https://www.mind.org.uk/information-support/types-of-mental-health-problems/bipolar-disorder/",
                  desc:
                    "Comprehensive information on bipolar I, II, cyclothymia, diagnosis, and treatment options.",
                },
                {
                  label: "Rethink Mental Illness",
                  href: "https://www.rethink.org/advice-and-information/about-mental-illness/learn-more-about-conditions/bipolar-disorder/",
                  desc: "Carer support, advocacy, and practical guidance.",
                },
                {
                  label: "Samaritans",
                  href: "https://www.samaritans.org",
                  desc: "24/7 emotional support. Call 116 123 (free, any time).",
                },
                {
                  label: "SHOUT Crisis Text Line",
                  href: "https://giveusashout.org",
                  desc: "Text SHOUT to 85258 for free, confidential crisis support.",
                },
              ].map((item) => (
                <li
                  key={item.label}
                  style={{
                    marginBottom: "12px",
                    color: "rgba(245,240,232,0.82)",
                    fontSize: "0.97rem",
                    lineHeight: 1.6,
                  }}
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#c9a84c",
                      textDecoration: "underline",
                      fontWeight: 600,
                    }}
                  >
                    {item.label}
                  </a>{" "}
                  \u2014 {item.desc}
                </li>
              ))}
            </ul>
          </div>

          {/* ── FAQ ───────────────────────────────────────────────────────────── */}
          <section style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                fontWeight: 700,
                color: "#f5f0e8",
                margin: "0 0 36px",
                lineHeight: 1.25,
              }}
            >
              Frequently Asked Questions
            </h2>

            {[
              {
                q: "Can AI help someone with bipolar disorder?",
                a:
                  "AI cannot replace a psychiatrist, prescribe medication, or deliver clinical therapy. " +
                  "However, a sovereign AI companion with persistent memory can provide meaningful " +
                  "support between appointments: tracking mood patterns across weeks and months, " +
                  "offering phase-appropriate presence, supporting medication adherence reflection, " +
                  "and flagging early warning signs. MEOK is designed to complement professional " +
                  "psychiatric care, not compete with it.",
              },
              {
                q: "What is the difference between bipolar I and bipolar II?",
                a:
                  "Bipolar I involves full manic episodes that may require hospitalisation and can " +
                  "include psychotic features. Bipolar II involves hypomanic episodes \u2014 elevated " +
                  "mood less severe than full mania \u2014 combined with major depressive episodes. " +
                  "Both involve significant mood cycling but differ in severity, treatment approach, " +
                  "and day-to-day support needs.",
              },
              {
                q: "How does MEOK support someone during a manic or hypomanic episode?",
                a:
                  "During elevated phases, MEOK offers grounded, gentle presence rather than " +
                  "confrontation or uncritical validation. It asks questions that slow decisions down, " +
                  "offers grounding techniques without framing them as crisis intervention, and notices " +
                  "patterns like sleep reduction or accelerating language relative to the person\u2019s " +
                  "established baseline. It always encourages contact with a care team when indicators " +
                  "suggest a developing episode.",
              },
              {
                q: "How is bipolar depression different from unipolar depression?",
                a:
                  "Bipolar depression shares many features with unipolar depression but differs " +
                  "critically in treatment. Standard antidepressants can trigger mania in bipolar " +
                  "disorder, making specialist psychiatric guidance essential. Beyond pharmacology, " +
                  "bipolar depression often carries a particular quality of desolation linked to " +
                  "contrast with the previous elevated state. MEOK never suggests antidepressant " +
                  "medication and always directs medication questions to a bipolar-specialist psychiatrist.",
              },
              {
                q: "What UK resources exist for bipolar disorder?",
                a:
                  "Bipolar UK (bipolaruk.org) offers peer support groups, a community forum, and " +
                  "carer resources. Mind UK (mind.org.uk) provides comprehensive information. " +
                  "Rethink Mental Illness (rethink.org) supports carers. For crisis support, " +
                  "Samaritans is available 24/7 on 116 123 and SHOUT text service can be reached " +
                  "by texting SHOUT to 85258. MEOK always surfaces these resources and is not a " +
                  "substitute for any of them.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "32px",
                  borderBottom: "1px solid rgba(245,240,232,0.08)",
                  paddingBottom: "32px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "#f5f0e8",
                    margin: "0 0 12px",
                    lineHeight: 1.4,
                  }}
                >
                  {item.q}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.97rem",
                    lineHeight: 1.75,
                    color: "rgba(245,240,232,0.75)",
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </section>

          {/* ── CTA ───────────────────────────────────────────────────────────── */}
          <section
            style={{
              backgroundColor: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "16px",
              padding: "48px 40px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.5rem, 2.8vw, 2.1rem)",
                fontWeight: 800,
                color: "#f5f0e8",
                margin: "0 0 16px",
                lineHeight: 1.2,
              }}
            >
              A companion that holds both sides of who you are
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: "rgba(245,240,232,0.75)",
                maxWidth: "560px",
                margin: "0 auto 32px",
              }}
            >
              Living with bipolar disorder means living with yourself across
              very different states of being. MEOK&apos;s sovereign AI
              companion holds the full picture \u2014 your patterns, your
              history, your own words from your own stable moments \u2014 and
              is present whether you are at your most expansive or your most
              depleted. Private. Consistent. Yours.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                backgroundColor: "#c9a84c",
                color: "#0d0c18",
                fontWeight: 800,
                fontSize: "1rem",
                padding: "16px 40px",
                borderRadius: "8px",
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              Meet Your Companion
            </Link>
            <p
              style={{
                marginTop: "20px",
                fontSize: "0.85rem",
                color: "rgba(245,240,232,0.4)",
              }}
            >
              Not a medical device. Not a therapist. A sovereign AI companion
              built with care.
            </p>
          </section>
        </article>
      </main>
    </>
  )
}
