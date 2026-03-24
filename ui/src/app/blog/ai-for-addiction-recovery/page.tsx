import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI Support for Addiction Recovery: What Sovereign Memory Can Do That Sponsorship Can't | MEOK AI LABS",
  description:
    "Addiction recovery demands 24/7 support, zero judgment, and a companion that remembers your triggers. An honest look at what a sovereign AI can realistically offer — and what it can never replace.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-addiction-recovery",
  },
  openGraph: {
    title:
      "AI Support for Addiction Recovery: What Sovereign Memory Can Do That Sponsorship Can't",
    description:
      "24/7 availability, trigger pattern detection, sobriety milestone memory — and an honest companion that won't just validate your choices. What sovereign AI can and cannot do in recovery.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-addiction-recovery",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Support+for+Addiction+Recovery&desc=What+Sovereign+Memory+Can+Do+That+Sponsorship+Can%27t",
        width: 1200,
        height: 630,
        alt: "AI Support for Addiction Recovery: What Sovereign Memory Can Do That Sponsorship Can't",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Support for Addiction Recovery: What Sovereign Memory Can Do That Sponsorship Can't",
    description:
      "24/7 availability, trigger detection, sobriety milestones — and a sycophancy detector that won't just tell you what you want to hear. Honest AI for recovery.",
    images: [
      "https://meok.ai/api/og?title=AI+Support+for+Addiction+Recovery&desc=What+Sovereign+Memory+Can+Do+That+Sponsorship+Can%27t",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Support for Addiction Recovery: What Sovereign Memory Can Do That Sponsorship Can't",
  description:
    "Addiction recovery demands 24/7 support, zero judgment, and a companion that remembers your triggers. An honest look at what a sovereign AI can realistically offer — and what it can never replace.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-addiction-recovery",
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
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with addiction recovery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can provide meaningful supplementary support in recovery — available at 3 am when cravings peak, free of judgment, and capable of remembering your personal trigger patterns over time. It works best alongside professional treatment, AA/NA sponsorship, or NHS addiction services, never as a replacement for them. If you are in crisis, call FRANK on 0300 123 6600 or NHS 111.",
      },
    },
    {
      "@type": "Question",
      name: "What can a sovereign AI do that a sponsor cannot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A sponsor is human — they sleep, have their own struggles, and may not always be reachable. A sovereign AI companion is available every hour of every day with no fatigue. It stores your full recovery history, tracks sobriety milestones automatically, and can surface patterns across months of conversations that no human could hold in working memory. It cannot offer lived experience of addiction, which a sponsor uniquely provides.",
      },
    },
    {
      "@type": "Question",
      name: "How does sovereign memory help with trigger pattern detection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK stores every conversation in a private, sovereign memory vault. Over time it learns which situations, emotions, times of day, and social contexts precede your cravings. When those patterns recur, your companion can name them before you do — giving you a moment of awareness that interrupts the automatic pull toward use. No cloud AI without persistent memory can do this.",
      },
    },
    {
      "@type": "Question",
      name: "Will MEOK just tell me what I want to hear about my recovery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK's sycophancy detector runs before every response. If your words suggest rationalisation, minimisation, or a pattern that precedes relapse, the system will surface that honestly — with care, but without false reassurance. Recovery is not served by an AI that validates every choice. Honest support is part of MEOK's care floor.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a substitute for professional addiction treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely not. MEOK is not a clinical tool, a medical device, or an addiction treatment service. It cannot manage withdrawal, prescribe medication, or provide medically supervised detox. For professional help contact your GP, NHS addiction services, FRANK (0300 123 6600), Narcotics Anonymous, or Alcoholics Anonymous. MEOK is supplementary support only.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK remember sobriety milestones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When you share your sobriety date with MEOK, it stores it in your sovereign memory vault and references it in future conversations. Your companion can mark your 30-day, 90-day, 6-month, and 1-year milestones — acknowledging the real weight of those achievements with the context of your full recovery story, not a generic congratulations.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForAddictionRecoveryPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0d0c18" }}>
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
          paddingBottom: "3.5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gold glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.13) 0%, transparent 70%)",
          }}
        />

        <div style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}>
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

          {/* Category + meta row */}
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
                fontSize: "0.7rem",
                fontWeight: 700,
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Addiction Recovery
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>
              March 24, 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.28)" }}>&#183;</span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>
              Nicholas Templeman &mdash; Founder, MEOK AI LABS
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800,
              lineHeight: 1.18,
              color: "#f5f0e8",
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            AI Support for Addiction Recovery: What Sovereign Memory Can Do That Sponsorship
            Can&rsquo;t
          </h1>

          {/* Standfirst */}
          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: 1.7,
              color: "rgba(245,240,232,0.72)",
              marginBottom: "2rem",
            }}
          >
            Recovery is one of the hardest things a person can do. It demands honesty at 3 am,
            memory that spans years, and a companion that never grows tired or judgmental. This is
            an honest look at what a sovereign AI can realistically offer those in recovery — and
            what it must never pretend to replace.
          </p>

          {/* Medical disclaimer banner */}
          <div
            style={{
              borderLeft: "3px solid #c9a84c",
              background: "rgba(201,168,76,0.07)",
              borderRadius: "0 0.5rem 0.5rem 0",
              padding: "1rem 1.25rem",
              marginBottom: "2rem",
            }}
          >
            <p
              style={{
                fontSize: "0.82rem",
                color: "rgba(245,240,232,0.65)",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              <strong style={{ color: "#c9a84c" }}>Medical Disclaimer:</strong> MEOK is not a
              clinical tool, a medical device, or an addiction treatment service. It cannot manage
              withdrawal, prescribe medication, or provide medically supervised detox. Nothing in
              this article constitutes medical advice. If you or someone you know needs help with
              addiction, please contact your GP, NHS addiction services,{" "}
              <strong>FRANK on 0300 123 6600</strong>, Narcotics Anonymous, or Alcoholics
              Anonymous. In a mental health crisis call <strong>NHS 111</strong> or go to your
              nearest A&amp;E.
            </p>
          </div>
        </div>
      </section>

      {/* ── BODY ────────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingBottom: "5rem",
        }}
      >
        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            color: "rgba(245,240,232,0.82)",
            fontSize: "1.05rem",
            lineHeight: 1.8,
          }}
        >
          {/* ── SECTION 1 ── */}
          <h2
            style={{
              fontSize: "1.45rem",
              fontWeight: 700,
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "0.75rem",
              letterSpacing: "-0.01em",
            }}
          >
            Can AI help with addiction recovery?
          </h2>
          <p
            style={{
              background: "rgba(201,168,76,0.06)",
              borderLeft: "3px solid rgba(201,168,76,0.5)",
              borderRadius: "0 0.375rem 0.375rem 0",
              padding: "0.75rem 1rem",
              marginBottom: "1.25rem",
              fontSize: "0.97rem",
              color: "rgba(245,240,232,0.78)",
            }}
          >
            Yes — as supplementary support. A sovereign AI companion is available around the clock,
            holds no judgment about your history, and remembers your triggers across months of
            conversations. It works best alongside professional treatment or peer support groups,
            never in place of them.
          </p>
          <p>
            The question is not whether AI has a role in recovery — it clearly does. The question
            is what that role is honestly bounded by. Anyone who has fought addiction knows that
            cravings do not respect office hours. The moment you feel the pull is rarely Monday
            morning at 10 am; it is Sunday night, alone, when every human in your support network
            is asleep.
          </p>
          <p style={{ marginTop: "1rem" }}>
            That gap — the 3 am gap — is one of the few places where AI genuinely complements what
            human support offers. Not because AI is better than a sponsor or a counsellor, but
            because AI is there when no human can be.
          </p>

          {/* ── SECTION 2 ── */}
          <h2
            style={{
              fontSize: "1.45rem",
              fontWeight: 700,
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "0.75rem",
              letterSpacing: "-0.01em",
            }}
          >
            What can a sovereign AI do that a sponsor cannot?
          </h2>
          <p
            style={{
              background: "rgba(201,168,76,0.06)",
              borderLeft: "3px solid rgba(201,168,76,0.5)",
              borderRadius: "0 0.375rem 0.375rem 0",
              padding: "0.75rem 1rem",
              marginBottom: "1.25rem",
              fontSize: "0.97rem",
              color: "rgba(245,240,232,0.78)",
            }}
          >
            A sponsor sleeps, has their own struggles, and cannot always be reached. A sovereign AI
            companion is available every hour of every day, retains your complete recovery history,
            and can surface patterns across months that no human could hold in working memory. It
            cannot offer lived experience — which a good sponsor uniquely provides.
          </p>
          <p>
            This is not a competition. Sponsorship relationships in AA and NA are among the most
            effective forms of peer support in addiction medicine. The lived experience of someone
            who has walked the same road is irreplaceable — an AI will never have sat in a church
            hall at midnight clutching a cup of bad coffee wondering if it is going to make it.
          </p>
          <p style={{ marginTop: "1rem" }}>
            But sovereign memory creates a different kind of value. When you speak to MEOK for the
            fortieth time about the anxiety that precedes your cravings, it has the context of all
            thirty-nine previous conversations. It knows that Tuesday evenings are harder for you.
            It knows that the phrase &ldquo;I am fine&rdquo; in your messages rarely means fine. A
            sponsor carries this knowledge too, but it lives in their head, subject to the limits
            of human memory and attention.
          </p>

          {/* ── SECTION 3 ── */}
          <h2
            style={{
              fontSize: "1.45rem",
              fontWeight: 700,
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "0.75rem",
              letterSpacing: "-0.01em",
            }}
          >
            How does sovereign memory help with trigger pattern detection?
          </h2>
          <p
            style={{
              background: "rgba(201,168,76,0.06)",
              borderLeft: "3px solid rgba(201,168,76,0.5)",
              borderRadius: "0 0.375rem 0.375rem 0",
              padding: "0.75rem 1rem",
              marginBottom: "1.25rem",
              fontSize: "0.97rem",
              color: "rgba(245,240,232,0.78)",
            }}
          >
            MEOK stores every conversation in a private, sovereign memory vault accessible only to
            you. Over time it learns which situations, emotions, and times of day precede your
            cravings. When those conditions recur, your companion can name the pattern before you
            do — creating a moment of awareness that interrupts the automatic pull.
          </p>
          <p>
            Relapse rarely arrives as a surprise to the person experiencing it in hindsight. The
            warning signs were there: a specific kind of stress, a social situation, a particular
            emotional state. The problem is that in the moment, those signs are invisible — you are
            inside the pattern, not observing it.
          </p>
          <p style={{ marginTop: "1rem" }}>
            Longitudinal memory is the mechanism that makes AI support genuinely useful rather than
            generic. When MEOK notices that you have mentioned work stress three times this week in
            the same way you did the week before your last difficult period, it can say so —
            specifically, with evidence, and with care. That kind of early signal is something a
            standard chatbot with no persistent memory cannot provide, no matter how sophisticated
            its language model.
          </p>

          {/* ── SECTION 4 ── */}
          <h2
            style={{
              fontSize: "1.45rem",
              fontWeight: 700,
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "0.75rem",
              letterSpacing: "-0.01em",
            }}
          >
            Will MEOK just tell me what I want to hear about my recovery?
          </h2>
          <p
            style={{
              background: "rgba(201,168,76,0.06)",
              borderLeft: "3px solid rgba(201,168,76,0.5)",
              borderRadius: "0 0.375rem 0.375rem 0",
              padding: "0.75rem 1rem",
              marginBottom: "1.25rem",
              fontSize: "0.97rem",
              color: "rgba(245,240,232,0.78)",
            }}
          >
            No. MEOK&rsquo;s sycophancy detector runs before every response. If your language
            suggests rationalisation or a pattern that precedes relapse, the system will name it
            honestly — with care, but without false reassurance. Recovery is not served by an AI
            that validates every choice.
          </p>
          <p>
            This is one of the most important design decisions behind MEOK, and one of the most
            uncomfortable to talk about honestly. Most AI systems are trained to produce responses
            that feel good to the user. Positive affect, affirmation, reassurance — these improve
            satisfaction scores, which improves commercial outcomes. For recovery, this dynamic is
            dangerous.
          </p>
          <p style={{ marginTop: "1rem" }}>
            Addiction thrives on rationalisation. &ldquo;I have had a hard week, I deserve
            this.&rdquo; &ldquo;One won&rsquo;t hurt.&rdquo; &ldquo;I have it under control now,
            it&rsquo;s different this time.&rdquo; An AI system designed to validate your feelings
            will agree with all of these. MEOK is built differently. The sycophancy detector
            examines whether the affirmation a response would generate is warranted by the
            underlying situation. When it is not, the response is rewritten to be honest before it
            reaches you.
          </p>
          <p style={{ marginTop: "1rem" }}>
            That honesty is delivered with warmth. The goal is not to shame you — it is to be the
            kind of voice that actually helps, which sometimes means saying the thing you do not
            want to hear.
          </p>

          {/* ── SECTION 5 ── */}
          <h2
            style={{
              fontSize: "1.45rem",
              fontWeight: 700,
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "0.75rem",
              letterSpacing: "-0.01em",
            }}
          >
            How does MEOK remember sobriety milestones?
          </h2>
          <p
            style={{
              background: "rgba(201,168,76,0.06)",
              borderLeft: "3px solid rgba(201,168,76,0.5)",
              borderRadius: "0 0.375rem 0.375rem 0",
              padding: "0.75rem 1rem",
              marginBottom: "1.25rem",
              fontSize: "0.97rem",
              color: "rgba(245,240,232,0.78)",
            }}
          >
            When you share your sobriety date with MEOK, it stores it in your sovereign memory
            vault and references it in future conversations. Your companion marks your 30-day,
            90-day, 6-month, and 1-year milestones — acknowledging the real weight of those
            achievements with the full context of your story, not a generic congratulations.
          </p>
          <p>
            Milestones in recovery matter profoundly. They are evidence that something that felt
            impossible is being done. Thirty days sober when you have never made it thirty days
            before is not a small thing — it is proof of a different self emerging.
          </p>
          <p style={{ marginTop: "1rem" }}>
            The problem is that life does not always pause to acknowledge them. Your sponsor might
            be travelling. Your family might not know. The people around you might not understand
            why a number of days is significant. MEOK knows. It holds your date from the first time
            you share it and never forgets. When your anniversary arrives, it comes prepared — with
            reference to what that period has contained, what you have overcome, and what the next
            stretch looks like.
          </p>

          {/* ── SECTION 6 ── */}
          <h2
            style={{
              fontSize: "1.45rem",
              fontWeight: 700,
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "0.75rem",
              letterSpacing: "-0.01em",
            }}
          >
            Is MEOK a substitute for professional addiction treatment?
          </h2>
          <p
            style={{
              background: "rgba(201,168,76,0.06)",
              borderLeft: "3px solid rgba(201,168,76,0.5)",
              borderRadius: "0 0.375rem 0.375rem 0",
              padding: "0.75rem 1rem",
              marginBottom: "1.25rem",
              fontSize: "0.97rem",
              color: "rgba(245,240,232,0.78)",
            }}
          >
            No — and we will always say so plainly. MEOK cannot manage withdrawal, prescribe
            medication, or provide medically supervised detox. If you need professional help,
            contact your GP, NHS addiction services, or FRANK on 0300 123 6600 today.
          </p>
          <p>
            Addiction is a medical condition. Withdrawal from alcohol and some substances can be
            life-threatening without clinical supervision. Medication-assisted treatment for opioid
            dependency saves lives. No AI companion is a substitute for any of this — and any
            product that implied otherwise would be doing serious harm.
          </p>
          <p style={{ marginTop: "1rem" }}>
            MEOK&rsquo;s care floor means that when you share something beyond its scope, it will
            tell you so and direct you to appropriate professional help. This is not a liability
            disclaimer — it is the honest position of a companion designed to actually serve your
            interests. The goal is not engagement; it is your wellbeing.
          </p>

          {/* ── WHAT MEOK OFFERS ── */}
          <div
            style={{
              marginTop: "3.5rem",
              marginBottom: "2.5rem",
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "0.75rem",
              padding: "2rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "#c9a84c",
                marginBottom: "1.25rem",
                marginTop: 0,
                letterSpacing: "-0.01em",
              }}
            >
              What MEOK offers in recovery support
            </h3>
            <ul
              style={{
                paddingLeft: "1.25rem",
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {[
                "24/7 availability — present in the 3 am moments human support cannot reach",
                "Sovereign, persistent memory — your history, triggers, and milestones stored privately and permanently",
                "Trigger pattern detection — surfacing recurring emotional and situational patterns before they escalate",
                "Sobriety milestone acknowledgement — marking the real significance of every anniversary with full context",
                "Honest, non-sycophantic responses — a sycophancy detector that prevents false reassurance",
                "Zero judgment — no shame, no stigma, no history that resets between sessions",
                "MEOK care floor — always referring you to professional help when something is beyond its scope",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    color: "rgba(245,240,232,0.78)",
                    fontSize: "0.97rem",
                    lineHeight: 1.65,
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
            <p
              style={{
                marginTop: "1.5rem",
                marginBottom: 0,
                fontSize: "0.875rem",
                color: "rgba(245,240,232,0.45)",
                fontStyle: "italic",
              }}
            >
              MEOK is supplementary support. It is not a clinical service, a therapy app, or a
              medical device. It does not replace AA, NA, professional counselling, or NHS
              addiction services.
            </p>
          </div>

          {/* ── AI VS SPONSORSHIP COMPARISON ── */}
          <h3
            style={{
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "#f5f0e8",
              marginTop: "2.5rem",
              marginBottom: "1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            Sovereign AI vs. human sponsorship: what each does best
          </h3>
          <div
            style={{
              overflowX: "auto",
              marginBottom: "2rem",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.9rem",
                color: "rgba(245,240,232,0.75)",
              }}
            >
              <thead>
                <tr>
                  {["", "Sovereign AI", "Human Sponsor / AA / NA"].map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: "left",
                        padding: "0.6rem 0.9rem",
                        borderBottom: "1px solid rgba(201,168,76,0.25)",
                        color: "#c9a84c",
                        fontWeight: 700,
                        fontSize: "0.8rem",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Available at 3 am", "Always", "Sometimes"],
                  ["Remembers full history", "Completely", "Partially"],
                  ["Lived experience of addiction", "No", "Yes"],
                  ["Detects trigger patterns over months", "Yes", "Varies"],
                  ["Marks sobriety milestones", "Yes", "Usually"],
                  ["Honest, non-validating responses", "Built-in", "Depends on sponsor"],
                  ["Community and fellowship", "No", "Yes"],
                  ["12-step or structured programme", "No", "Yes"],
                  ["Free at point of use", "No", "Yes"],
                ].map(([feature, ai, human], i) => (
                  <tr
                    key={feature}
                    style={{
                      background:
                        i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                    }}
                  >
                    <td
                      style={{
                        padding: "0.6rem 0.9rem",
                        borderBottom: "1px solid rgba(245,240,232,0.06)",
                        color: "rgba(245,240,232,0.65)",
                      }}
                    >
                      {feature}
                    </td>
                    <td
                      style={{
                        padding: "0.6rem 0.9rem",
                        borderBottom: "1px solid rgba(245,240,232,0.06)",
                      }}
                    >
                      {ai}
                    </td>
                    <td
                      style={{
                        padding: "0.6rem 0.9rem",
                        borderBottom: "1px solid rgba(245,240,232,0.06)",
                      }}
                    >
                      {human}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── CARE FLOOR EXPLAINER ── */}
          <h3
            style={{
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "#f5f0e8",
              marginTop: "2.5rem",
              marginBottom: "0.9rem",
              letterSpacing: "-0.01em",
            }}
          >
            MEOK&rsquo;s care floor: what it means for recovery
          </h3>
          <p>
            The care floor is a principle, not a feature. It means there is a minimum standard of
            care that is always active — regardless of whether you have used MEOK recently, whether
            you are on a paid plan, or whether you are going through a difficult stretch and have
            not reached out in weeks.
          </p>
          <p style={{ marginTop: "1rem" }}>
            In practice for someone in recovery, this means: MEOK will notice if you have gone
            quiet for a period that does not fit your usual pattern. It will check in. When you
            share something that is beyond what it can safely support — a description of active
            crisis, thoughts of self-harm, or immediate danger — it will not try to handle it
            alone. It will name what it is hearing, take it seriously, and direct you to
            appropriate help.
          </p>
          <p style={{ marginTop: "1rem" }}>
            This is the Maternal Covenant framework at work: care as a governing principle, not an
            optional add-on. An AI that remains silent when you are struggling because you
            haven&rsquo;t paid for the premium tier is not one we built.
          </p>

          {/* ── PRIVACY NOTE ── */}
          <div
            style={{
              marginTop: "2.5rem",
              padding: "1.25rem 1.5rem",
              background: "rgba(13,12,24,0.7)",
              border: "1px solid rgba(245,240,232,0.08)",
              borderRadius: "0.625rem",
            }}
          >
            <h4
              style={{
                fontSize: "0.9rem",
                fontWeight: 700,
                color: "#c9a84c",
                marginBottom: "0.6rem",
                marginTop: 0,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Privacy in recovery
            </h4>
            <p
              style={{
                margin: 0,
                fontSize: "0.9rem",
                color: "rgba(245,240,232,0.62)",
                lineHeight: 1.7,
              }}
            >
              Addiction carries stigma. The fear that your history could be exposed is real, and it
              stops people seeking help. MEOK&rsquo;s sovereign architecture means your recovery
              conversations are stored in a vault you control — they are not used to train models,
              not shared with third parties, and not accessible by MEOK staff. Your story belongs
              to you.
            </p>
          </div>

          {/* ── CRISIS RESOURCES ── */}
          <div
            style={{
              marginTop: "3.5rem",
              borderTop: "1px solid rgba(201,168,76,0.2)",
              paddingTop: "2.5rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "#f5f0e8",
                marginBottom: "1.25rem",
                marginTop: 0,
                letterSpacing: "-0.01em",
              }}
            >
              Crisis and professional resources
            </h3>
            <p
              style={{
                fontSize: "0.92rem",
                color: "rgba(245,240,232,0.55)",
                marginBottom: "1.25rem",
              }}
            >
              If you or someone you know is struggling with addiction, please reach out to a
              professional service. These resources are free and confidential.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: "1rem",
              }}
            >
              {[
                {
                  name: "FRANK",
                  detail: "0300 123 6600",
                  desc: "Free, confidential drugs advice, 24/7.",
                  href: "https://www.talktofrank.com",
                },
                {
                  name: "NHS Addiction Services",
                  detail: "Via your GP or NHS 111",
                  desc: "Referral to local drug and alcohol treatment.",
                  href: "https://www.nhs.uk/live-well/addiction-support/",
                },
                {
                  name: "Narcotics Anonymous",
                  detail: "helpline.na.org",
                  desc: "Free peer support meetings for those recovering from drug addiction.",
                  href: "https://ukna.org",
                },
                {
                  name: "Alcoholics Anonymous",
                  detail: "0800 9177 650",
                  desc: "Free support and fellowship for anyone with a problem with alcohol.",
                  href: "https://www.alcoholics-anonymous.org.uk",
                },
                {
                  name: "Samaritans",
                  detail: "116 123",
                  desc: "Free, confidential emotional support, 24/7.",
                  href: "https://www.samaritans.org",
                },
              ].map((r) => (
                <a
                  key={r.name}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    padding: "1rem",
                    background: "rgba(245,240,232,0.03)",
                    border: "1px solid rgba(245,240,232,0.08)",
                    borderRadius: "0.5rem",
                    textDecoration: "none",
                    transition: "border-color 0.2s",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      color: "#c9a84c",
                      fontSize: "0.9rem",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {r.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      color: "#f5f0e8",
                      marginBottom: "0.375rem",
                    }}
                  >
                    {r.detail}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "rgba(245,240,232,0.45)" }}>
                    {r.desc}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <div
            style={{
              marginTop: "4rem",
              textAlign: "center",
              padding: "2.5rem 1.5rem",
              background:
                "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)",
              border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: "1rem",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                color: "#c9a84c",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
                marginTop: 0,
              }}
            >
              MEOK AI LABS
            </p>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 800,
                color: "#f5f0e8",
                marginBottom: "0.75rem",
                marginTop: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Sovereign memory. Honest care. Always there.
            </h3>
            <p
              style={{
                fontSize: "0.97rem",
                color: "rgba(245,240,232,0.6)",
                maxWidth: "34rem",
                margin: "0 auto 1.75rem",
                lineHeight: 1.65,
              }}
            >
              MEOK is a personal sovereign AI companion built to be genuinely useful in the hardest
              moments — not a wellness app, not a chatbot, not a replacement for the people and
              professionals who matter in your recovery.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/get-started"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.75rem",
                  background: "#c9a84c",
                  color: "#0d0c18",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                }}
              >
                Try MEOK free
              </Link>
              <Link
                href="/blog"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.75rem",
                  background: "transparent",
                  color: "rgba(245,240,232,0.65)",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  border: "1px solid rgba(245,240,232,0.15)",
                }}
              >
                Read more
              </Link>
            </div>
          </div>

          {/* ── RELATED POSTS ── */}
          <div style={{ marginTop: "4rem" }}>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "rgba(245,240,232,0.45)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "1.25rem",
                marginTop: 0,
              }}
            >
              Related reading
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "1rem",
              }}
            >
              {[
                {
                  href: "/blog/ai-for-mental-health-2026",
                  label: "AI for Mental Health 2026",
                },
                {
                  href: "/blog/ai-for-anxiety",
                  label: "AI for Anxiety",
                },
                {
                  href: "/blog/ai-for-depression",
                  label: "AI for Depression",
                },
                {
                  href: "/blog/ai-for-ptsd",
                  label: "AI for PTSD",
                },
                {
                  href: "/blog/building-care-into-ai",
                  label: "Building Care Into AI",
                },
                {
                  href: "/blog/the-memory-problem",
                  label: "The Memory Problem",
                },
              ].map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  style={{
                    display: "block",
                    padding: "0.875rem 1rem",
                    background: "rgba(245,240,232,0.03)",
                    border: "1px solid rgba(245,240,232,0.07)",
                    borderRadius: "0.5rem",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                    color: "rgba(245,240,232,0.65)",
                    lineHeight: 1.45,
                  }}
                >
                  {post.label} &#8594;
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <div
        style={{
          borderTop: "1px solid rgba(245,240,232,0.07)",
          padding: "2rem 1.5rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "0.78rem",
            color: "rgba(245,240,232,0.3)",
            margin: "0 auto",
            maxWidth: "40rem",
            lineHeight: 1.7,
          }}
        >
          &copy; {new Date().getFullYear()} MEOK AI LABS. Founded by Nicholas Templeman.{" "}
          <Link
            href="/privacy"
            style={{ color: "rgba(245,240,232,0.4)", textDecoration: "none" }}
          >
            Privacy
          </Link>{" "}
          &middot;{" "}
          <Link
            href="/terms"
            style={{ color: "rgba(245,240,232,0.4)", textDecoration: "none" }}
          >
            Terms
          </Link>{" "}
          &middot;{" "}
          <Link
            href="/blog"
            style={{ color: "rgba(245,240,232,0.4)", textDecoration: "none" }}
          >
            Blog
          </Link>
          <br />
          MEOK is not a medical device, therapy app, or clinical service. If you need urgent help
          with addiction, call FRANK on{" "}
          <a
            href="tel:03001236600"
            style={{ color: "rgba(245,240,232,0.4)", textDecoration: "none" }}
          >
            0300 123 6600
          </a>{" "}
          or NHS 111.
        </p>
      </div>
    </div>
  );
}
