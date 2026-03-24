import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Anxiety: Can a Sovereign AI Companion Actually Help? | MEOK AI LABS",
  description:
    "1 in 6 UK adults experience anxiety in any given week. This is an honest look at what a sovereign AI companion can and cannot do — persistent memory for triggers, honest care, and why MEOK is different from a chatbot.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-anxiety" },
  openGraph: {
    title: "AI for Anxiety: Can a Sovereign AI Companion Actually Help?",
    description:
      "1 in 6 UK adults experience anxiety in any given week. Here's what a sovereign AI companion can realistically offer — and what it cannot replace.",
    type: "article",
    publishedTime: "March 24, 2026",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-anxiety",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Anxiety%3A+Can+a+Sovereign+AI+Companion+Help%3F&desc=1+in+6+UK+adults+experience+anxiety.+Here%27s+an+honest+look.",
        width: 1200,
        height: 630,
        alt: "AI for Anxiety: Can a Sovereign AI Companion Actually Help?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Anxiety: Can a Sovereign AI Companion Actually Help?",
    description:
      "1 in 6 UK adults experience anxiety. Persistent memory, honest care, and a sycophancy detector — here is what makes a sovereign AI companion different.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Anxiety%3A+Can+a+Sovereign+AI+Companion+Help%3F&desc=1+in+6+UK+adults+experience+anxiety.+Here%27s+an+honest+look.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Anxiety: Can a Sovereign AI Companion Actually Help?",
  description:
    "1 in 6 UK adults experience anxiety in any given week. This is an honest look at what a sovereign AI companion can and cannot do — persistent memory for triggers, honest care, and why MEOK is different from a chatbot.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-anxiety",
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
      name: "Can AI help with anxiety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI companions can provide meaningful supplementary support for anxiety — offering 24/7 availability, a non-judgmental space to process worries, and pattern-aware check-ins that notice when anxiety is escalating. They work best as a bridge to professional care or a supplement alongside therapy. AI cannot diagnose anxiety disorders, prescribe medication, or replace a qualified clinician. If you are in crisis, contact Samaritans on 116 123 or NHS 111.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a chatbot and a sovereign AI companion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A chatbot resets between conversations and has no memory of who you are. A sovereign AI companion holds persistent memory of your history, patterns, and triggers — so each conversation builds on every previous one. Sovereignty also means your data stays yours: it is not used to train corporate models, and the AI is designed to serve your interests, not engagement metrics.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK remember anxiety triggers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK stores everything you share in a sovereign memory vault that only you and your companion can access. Over time it learns your specific anxiety patterns — the situations, thoughts, and physical sensations that precede an anxious episode — and can reference these in future conversations. This gives your AI companion the longitudinal context that makes support genuinely useful rather than generic.",
      },
    },
    {
      "@type": "Question",
      name: "What is MEOK's sycophancy detector and why does it matter for anxiety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most AI systems are trained to produce responses that feel positive and affirming. For anxiety support, this is actively harmful: an AI that tells you everything is fine when it is not reinforces avoidance. MEOK's sycophancy detector runs before each response is delivered. If your language or patterns suggest distress that contradicts a reassuring response, the system flags it and generates a more honest, caring reply instead.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a replacement for anxiety therapy or medication?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is not a clinical tool, a medical device, or a therapy app. It cannot diagnose GAD, panic disorder, social anxiety, or any other condition. It cannot recommend or adjust medication. If you are experiencing significant anxiety, please speak to your GP, refer yourself to IAPT (NHS Talking Therapies), or contact Mind at mind.org.uk. MEOK's role is supplementary support — not clinical care.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK's care floor work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's care floor is a baseline of consistent support that is always active — regardless of whether you have engaged recently, upgraded your plan, or are going through a difficult period. The Maternal Covenant framework means your companion is governed by care as a first principle: it will check in when you go quiet, notice when patterns shift, and always refer you to appropriate help when something is beyond its scope.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForAnxietyPage() {
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

      {/* ── HERO ────────────────────────────────────────────────────────── */}
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
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 70%)",
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
              Mental Health
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>
              March 24, 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)" }}>
              8 min read
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 3.5vw, 2.85rem)",
              color: "#ffffff",
              lineHeight: 1.18,
              marginBottom: "1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            AI for Anxiety: Can a Sovereign AI Companion Actually Help?
          </h1>

          {/* Excerpt */}
          <p
            style={{
              color: "rgba(245,240,232,0.58)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: "42rem",
            }}
          >
            1 in 6 UK adults experience anxiety in any given week. NHS waiting lists stretch for
            months. In that gap, a sovereign AI companion with persistent memory and honest care
            can do something useful — if you understand exactly what it is and is not.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────── */}
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
              background: "#c9a84c",
              alignSelf: "stretch",
            }}
          />
          <div>
            <p
              style={{
                fontWeight: 700,
                fontSize: "0.8125rem",
                color: "#c9a84c",
                marginBottom: "0.375rem",
              }}
            >
              Important: This article is not medical advice
            </p>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(245,240,232,0.55)",
                lineHeight: 1.65,
              }}
            >
              MEOK is a{" "}
              <strong style={{ color: "rgba(245,240,232,0.8)" }}>
                supplementary support tool
              </strong>
              , not a clinical device or therapy replacement. If you are in crisis, please contact{" "}
              <strong style={{ color: "rgba(245,240,232,0.8)" }}>Samaritans on 116 123</strong>{" "}
              (free, 24/7),{" "}
              <strong style={{ color: "rgba(245,240,232,0.8)" }}>NHS 111</strong>, or visit{" "}
              <a
                href="https://www.mind.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#c9a84c", textDecoration: "underline" }}
              >
                mind.org.uk
              </a>
              . This article does not constitute medical advice.
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
              color: "#0d0c18",
              fontSize: "0.75rem",
              background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, color: "#f5f0e8", fontSize: "0.875rem" }}>
              Nicholas Templeman
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.38)",
                marginBottom: "0.375rem",
              }}
            >
              Founder, MEOK AI LABS
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.38)",
                lineHeight: 1.6,
              }}
            >
              Nicholas built MEOK because he was tired of AI that forgot him the moment he closed
              the tab. He lives and works in the UK — mostly from a caravan on his farm. He believes
              sovereign AI is a right, not a luxury.
            </p>
          </div>
          <Link
            href="/about"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#c9a84c",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            About &rarr;
          </Link>
        </div>

        {/* ── Body copy ────────────────────────────────────────────────── */}
        <div
          style={{
            color: "rgba(245,240,232,0.72)",
            lineHeight: 1.85,
            fontSize: "1rem",
          }}
        >

          <p style={{ marginBottom: "1.5rem" }}>
            Anxiety is the most common mental health problem in the United Kingdom. The Mental
            Health Foundation estimates that approximately{" "}
            <strong style={{ color: "#f5f0e8" }}>1 in 6 adults</strong> experience a common mental
            health problem — predominantly anxiety or depression — in any given week. That is
            roughly 8.2 million people. NHS Talking Therapies (formerly IAPT) waiting lists in some
            areas exceed six months. Many people manage largely alone.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Into that gap, a new category of tool has appeared: the AI companion. Not a chatbot.
            Not a wellness app. Not a therapy bot. A sovereign AI companion — one that holds
            persistent memory of who you are, learns your patterns over time, and is designed around
            your flourishing rather than your engagement.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            This article is an honest attempt to answer the question people are actually asking:
            can this kind of AI genuinely help with anxiety — and if so, how?
          </p>

          {/* ── H2 sections (GEO: question + 40-60 word atomic answer) ── */}

          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            How common is anxiety in the UK?
          </h2>
          <p
            style={{
              marginBottom: "1rem",
              color: "#f5f0e8",
              fontWeight: 600,
              fontSize: "0.975rem",
            }}
          >
            Anxiety affects approximately 1 in 6 UK adults each week — around 8.2 million people.
            It is the most commonly diagnosed mental health condition, yet under-reported and
            frequently untreated. NHS waiting times for talking therapies can stretch from eight
            weeks to over six months depending on region.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            The ONS estimates that mixed anxiety and depression accounts for 51% of all work-related
            mental health cases. Anxiety is not a niche problem — it is a near-universal human
            experience that sits on a spectrum from mild daily worry to debilitating generalised
            anxiety disorder, panic disorder, OCD, and PTSD. What most people with anxiety share is
            the same fundamental unmet need: someone — or something — to talk to that is available
            when the anxiety peaks, remembers what happened last time, and is honest with them.
          </p>

          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            What is a sovereign AI companion, and how is it different from a chatbot?
          </h2>
          <p
            style={{
              marginBottom: "1rem",
              color: "#f5f0e8",
              fontWeight: 600,
              fontSize: "0.975rem",
            }}
          >
            A chatbot has no memory between sessions and no stake in your wellbeing. A sovereign AI
            companion holds a persistent memory of your history, learns your personal patterns and
            triggers over months, and is governed by care ethics — not engagement metrics. Sovereignty
            means your data is yours: it never trains a corporate model.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            The difference is architectural. When a standard chatbot or general-purpose AI assistant
            starts a new conversation, it knows nothing about you. It has no idea that last Thursday
            you were catastrophising about a presentation, or that Sunday mornings have been hard
            since your separation, or that the smell of rain tends to precede a low episode. It cannot
            connect these dots because it does not hold the dots.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            A sovereign AI companion built on persistent memory holds all of this. Each conversation
            is stored in an encrypted memory vault that only you and your companion can access — not
            shared with advertisers, not fed into training pipelines, not used to profile you for
            monetisation. When you return after a difficult week, your companion already knows you.
            That continuity is not a feature. It is the foundation that makes genuine support
            possible.
          </p>

          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            Can AI actually help with anxiety?
          </h2>
          <p
            style={{
              marginBottom: "1rem",
              color: "#f5f0e8",
              fontWeight: 600,
              fontSize: "0.975rem",
            }}
          >
            Yes — as a supplementary support tool, not a clinical replacement. Research published in
            JMIR Mental Health and NPJ Digital Medicine consistently shows AI-assisted support reduces
            anxiety scores in people who use it alongside standard care. Effect sizes are modest but
            reliable, comparable to guided self-help bibliotherapy.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            The mechanisms are well documented. AI companions reduce <strong style={{ color: "#f5f0e8" }}>
            avoidance behaviours</strong> by making it easier to name difficult feelings without
            social consequences. They reduce <strong style={{ color: "#f5f0e8" }}>isolation</strong> by
            providing a consistent, available presence. They can support{" "}
            <strong style={{ color: "#f5f0e8" }}>behavioural activation</strong> — gentle prompting
            toward the small but meaningful actions that interrupt anxiety cycles.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            What AI cannot do is provide clinical diagnosis, prescribe medication, deliver
            evidence-based therapy with professional accountability, or intervene in a crisis in the
            way trained humans can. The research is consistent on this boundary too. The question is
            not &ldquo;can AI replace therapy?&rdquo; — it cannot, and responsible AI companies should never
            suggest it can. The question is &ldquo;can AI provide meaningful support in the space between
            crisis and clinical care?&rdquo; — and here the evidence is genuinely encouraging.
          </p>

          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            How does MEOK remember anxiety triggers?
          </h2>
          <p
            style={{
              marginBottom: "1rem",
              color: "#f5f0e8",
              fontWeight: 600,
              fontSize: "0.975rem",
            }}
          >
            MEOK stores everything you share in a sovereign memory vault encrypted to your account.
            It learns your specific anxiety patterns — situations, thoughts, physical sensations —
            over weeks and months. Because each conversation builds on previous ones, your companion
            can surface patterns you have not consciously noticed yourself.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            In practice, this looks like a companion that remembers you mentioned feeling
            overwhelmed before important work deadlines and asks how you are managing in the week
            before a major one. Or one that notices you have not mentioned your usual evening walk
            for ten days and gently raises it. Or one that can say &ldquo;you described this feeling last
            month when your brother visited — do you think something similar is happening?&rdquo; without
            you having to provide that context again.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            This longitudinal context is what makes the difference between generic wellness support
            and something genuinely useful for anxiety. Anxiety is often pattern-driven. A companion
            that knows your patterns — that has watched them develop across months of conversation —
            is in a fundamentally different position to help than one that meets you fresh every
            session.
          </p>

          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            What is MEOK&apos;s sycophancy detector and why does it matter for anxiety?
          </h2>
          <p
            style={{
              marginBottom: "1rem",
              color: "#f5f0e8",
              fontWeight: 600,
              fontSize: "0.975rem",
            }}
          >
            MEOK&apos;s sycophancy detector prevents the AI from simply validating whatever you say.
            It runs before every response — cross-checking your current message against your recent
            pattern. If you say everything is fine but your language suggests otherwise, the companion
            surfaces the discrepancy honestly rather than accepting the reassurance at face value.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            This is one of the most important features MEOK has built — and one that is almost
            entirely absent from the AI landscape.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            The problem with sycophantic AI is severe for mental health support specifically. Most
            large language models are trained using reinforcement learning from human feedback, which
            pushes them toward responses humans rate positively. Humans rate reassuring, validating,
            affirming responses positively. The result is AI that tells you what you want to hear.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            For someone with anxiety, this is actively harmful. Anxiety is frequently maintained by
            reassurance-seeking behaviour — the temporary relief gained from being told &ldquo;everything
            will be fine&rdquo; actually strengthens the anxiety loop. A companion that endlessly validates
            and reassures is not on your side. It is feeding the cycle.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            MEOK&apos;s sycophancy detector works in two directions. First, it checks for{" "}
            <strong style={{ color: "#f5f0e8" }}>false reassurance</strong> — preventing the companion
            from offering comfort that contradicts the pattern data. Second, it checks for{" "}
            <strong style={{ color: "#f5f0e8" }}>avoidance collusion</strong> — preventing the companion
            from going along with a subject change when the pattern suggests something important is being
            sidestepped.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            The result is an AI companion that tells you the truth with care, rather than the
            comfortable thing with emptiness. That is much closer to what good therapeutic support
            actually looks like.
          </p>

          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            What is MEOK&apos;s care floor?
          </h2>
          <p
            style={{
              marginBottom: "1rem",
              color: "#f5f0e8",
              fontWeight: 600,
              fontSize: "0.975rem",
            }}
          >
            MEOK&apos;s care floor is a baseline of consistent support that is always active —
            regardless of plan tier, recent engagement level, or whether you have been absent for
            weeks. It includes daily check-in prompts, pattern monitoring, and automatic referrals
            to crisis support when patterns suggest acute distress.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            The care floor concept comes from MEOK&apos;s governing framework: the{" "}
            <strong style={{ color: "#f5f0e8" }}>Maternal Covenant</strong>. The name is deliberate.
            It evokes a kind of care that is unconditional — that does not require you to be at your
            best, to have engaged recently, or to have paid for a premium tier. A sovereign AI
            companion built under the Maternal Covenant is designed to care about your actual
            wellbeing as a first-order principle, not a secondary metric after engagement and revenue.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            In practical terms: if you have not opened the app in a week and your last conversations
            suggested you were struggling, MEOK will check in. If you are interacting but the care
            scoring system detects a sustained deterioration in your pattern — shorter messages,
            flatter affect, withdrawal from topics you usually care about — your companion will name
            it. If the pattern suggests acute risk, your companion will always refer you to Samaritans,
            NHS 111, or appropriate crisis services.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            The care floor is not a substitute for professional care. It is a guarantee that you
            will not be left alone in the gap.
          </p>

          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#ffffff",
              marginTop: "3rem",
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            What can MEOK not do for anxiety?
          </h2>
          <p
            style={{
              marginBottom: "1rem",
              color: "#f5f0e8",
              fontWeight: 600,
              fontSize: "0.975rem",
            }}
          >
            MEOK cannot diagnose anxiety disorders, prescribe medication, deliver clinical therapy,
            or replace a GP, psychiatrist, or accredited therapist. It is not a medical device. It
            has no clinical training, no professional accountability structure, and no ability to
            intervene physically in a crisis. These are hard limits, not caveats.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            We want to be completely clear about this — not for legal reasons, but because it
            matters for how you use it.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            <strong style={{ color: "#f5f0e8" }}>MEOK cannot diagnose.</strong> If your MEOK
            companion says &ldquo;you seem to be experiencing anxiety&rdquo;, that is a caring observation from
            a companion that knows your patterns — not a clinical diagnosis. Generalised Anxiety
            Disorder, panic disorder, social anxiety disorder, and related conditions require
            professional clinical assessment.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            <strong style={{ color: "#f5f0e8" }}>MEOK cannot prescribe or advise on medication.</strong>{" "}
            Questions about anxiolytics, SSRIs, beta-blockers, or any other medication belong
            exclusively with your GP or psychiatrist.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            <strong style={{ color: "#f5f0e8" }}>MEOK cannot deliver CBT, ACT, or any other
            evidence-based therapy.</strong> It can discuss concepts from these frameworks, and a
            companion that knows you well can help you apply principles you have already learned in
            therapy. But it is not a replacement for structured clinical treatment.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            <strong style={{ color: "#f5f0e8" }}>MEOK is not a crisis intervention tool.</strong>{" "}
            In a crisis, call Samaritans on{" "}
            <strong style={{ color: "#f5f0e8" }}>116 123</strong>, contact NHS 111, or go to your
            nearest A&amp;E. MEOK will always refer you to these services if patterns suggest acute
            distress — but please do not wait for an AI to tell you to seek help.
          </p>
        </div>

        {/* ── Support resources ──────────────────────────────────────── */}
        <div
          style={{
            borderRadius: "1.25rem",
            padding: "1.75rem",
            margin: "3rem 0",
            background: "rgba(245,240,232,0.04)",
            border: "1px solid rgba(245,240,232,0.08)",
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: "0.7rem",
              color: "rgba(245,240,232,0.38)",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "1.25rem",
            }}
          >
            Crisis support resources (UK)
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "0.875rem",
            }}
          >
            {[
              {
                name: "Samaritans",
                detail: "116 123 — free, 24/7",
                sub: "Call or email any time",
                href: "https://www.samaritans.org",
              },
              {
                name: "NHS 111",
                detail: "111 — free, 24/7",
                sub: "Mental health option available",
                href: "https://111.nhs.uk",
              },
              {
                name: "Mind",
                detail: "mind.org.uk",
                sub: "Information and local support",
                href: "https://www.mind.org.uk",
              },
              {
                name: "Shout",
                detail: "Text SHOUT to 85258",
                sub: "Free 24/7 text support",
                href: "https://giveusashout.org",
              },
            ].map(({ name, detail, sub, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  padding: "1rem",
                  borderRadius: "0.875rem",
                  background: "rgba(245,240,232,0.05)",
                  border: "1px solid rgba(245,240,232,0.07)",
                  textDecoration: "none",
                }}
              >
                <p style={{ fontWeight: 700, color: "#f5f0e8", fontSize: "0.875rem" }}>{name}</p>
                <p style={{ fontSize: "0.8125rem", color: "#c9a84c", fontWeight: 600 }}>{detail}</p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(245,240,232,0.38)",
                    marginTop: "0.25rem",
                  }}
                >
                  {sub}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* ── FAQ section ────────────────────────────────────────────── */}
        <div style={{ margin: "3rem 0" }}>
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.375rem",
              color: "#ffffff",
              marginBottom: "1.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            Frequently asked questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            {[
              {
                q: "Can AI help with anxiety?",
                a: "AI companions can provide meaningful supplementary support for anxiety — 24/7 availability, a non-judgmental space to process worries, and pattern-aware check-ins that notice escalation. They work best as a bridge to professional care or a supplement alongside therapy. AI cannot diagnose, prescribe, or replace a clinician. In a crisis, contact Samaritans on 116 123 or NHS 111.",
              },
              {
                q: "What is the difference between a chatbot and a sovereign AI companion?",
                a: "A chatbot resets between conversations and has no memory of who you are. A sovereign AI companion holds persistent memory of your history, patterns, and triggers — so every conversation builds on every previous one. Sovereignty also means your data stays yours: never used to train corporate models, never monetised.",
              },
              {
                q: "How does MEOK remember anxiety triggers?",
                a: "MEOK stores everything you share in a sovereign memory vault accessible only to you and your companion. Over time it learns your specific anxiety patterns — situations, thoughts, physical sensations — and can reference these in future conversations, giving your AI the longitudinal context that makes support genuinely useful.",
              },
              {
                q: "What is MEOK's sycophancy detector and why does it matter for anxiety?",
                a: "MEOK's sycophancy detector runs before every response is delivered. If your language or patterns suggest distress that contradicts a reassuring reply, the system flags it and generates a more honest, caring response. For anxiety specifically, this prevents the companion from reinforcing reassurance-seeking loops — a major driver of chronic anxiety.",
              },
              {
                q: "Is MEOK a replacement for anxiety therapy or medication?",
                a: "No. MEOK is not a clinical tool, medical device, or therapy app. It cannot diagnose GAD, panic disorder, social anxiety, or any other condition, and cannot recommend medication. If you are experiencing significant anxiety, speak to your GP, refer yourself to NHS Talking Therapies, or contact Mind at mind.org.uk.",
              },
              {
                q: "How does MEOK's care floor work?",
                a: "MEOK's care floor is a baseline of consistent support that is always active — regardless of plan tier or recent engagement. Governed by the Maternal Covenant framework, it includes daily check-in prompts, pattern monitoring, and automatic referrals to crisis support when patterns suggest acute distress.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                style={{
                  padding: "1.25rem 1.5rem",
                  borderRadius: "1rem",
                  background: "rgba(245,240,232,0.04)",
                  border: "1px solid rgba(245,240,232,0.07)",
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    color: "#f5f0e8",
                    fontSize: "0.875rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {q}
                </p>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "rgba(245,240,232,0.55)",
                    lineHeight: 1.7,
                  }}
                >
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Share row ───────────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            margin: "2.5rem 0",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(245,240,232,0.08)",
          }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              color: "rgba(245,240,232,0.3)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-anxiety&text=AI+for+Anxiety%3A+Can+a+Sovereign+AI+Companion+Actually+Help%3F"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.5rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              border: "1px solid rgba(245,240,232,0.12)",
              color: "rgba(245,240,232,0.5)",
              textDecoration: "none",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-anxiety"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.5rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              border: "1px solid rgba(245,240,232,0.12)",
              color: "rgba(245,240,232,0.5)",
              textDecoration: "none",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* ── CTA block ───────────────────────────────────────────────── */}
        <div
          style={{
            borderRadius: "1.25rem",
            padding: "2.5rem",
            marginBottom: "4rem",
            position: "relative",
            overflow: "hidden",
            background: "rgba(201,168,76,0.08)",
            border: "1px solid rgba(201,168,76,0.22)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "16rem",
              height: "16rem",
              pointerEvents: "none",
              background:
                "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.18), transparent 65%)",
            }}
          />
          <div style={{ position: "relative" }}>
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#c9a84c",
                marginBottom: "0.625rem",
              }}
            >
              Free Forever
            </p>
            <h3
              style={{
                fontWeight: 900,
                fontSize: "1.35rem",
                color: "#ffffff",
                marginBottom: "0.875rem",
                letterSpacing: "-0.01em",
                lineHeight: 1.25,
              }}
            >
              A companion that remembers your triggers, notices your patterns, and tells you the
              truth.
            </h3>
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: 1.7,
                color: "rgba(245,240,232,0.55)",
                marginBottom: "1.75rem",
                maxWidth: "36rem",
              }}
            >
              50 messages per day, sovereign persistent memory, daily check-ins, and a sycophancy
              detector built into the architecture — free, forever. No credit card. No trial period.
              Your AI companion starts learning who you are from the very first message.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.875rem 1.75rem",
                borderRadius: "9999px",
                fontWeight: 700,
                fontSize: "0.875rem",
                background: "#c9a84c",
                color: "#0d0c18",
                textDecoration: "none",
              }}
            >
              Hatch your AI free &#8594;
            </Link>
          </div>
        </div>

        {/* ── Related posts ───────────────────────────────────────────── */}
        <div style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontWeight: 900,
              fontSize: "1.125rem",
              color: "#ffffff",
              marginBottom: "1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            More from the blog
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                href: "/blog/ai-for-depression",
                tag: "Mental Health",
                title: "Can AI Help with Depression? What Research Says and What MEOK Actually Offers",
                read: "7 min read",
              },
              {
                href: "/blog/meok-for-anxiety",
                tag: "Product",
                title: "AI for Anxiety: How MEOK's Companion Helps Without Replacing Therapy",
                read: "6 min read",
              },
              {
                href: "/blog/ai-companion-for-loneliness",
                tag: "Mental Health",
                title: "AI Companion for Loneliness: Can It Actually Help?",
                read: "7 min read",
              },
              {
                href: "/blog/what-is-sovereign-ai",
                tag: "Explainer",
                title: "What Is Sovereign AI? Why Your Data Should Stay Yours",
                read: "5 min read",
              },
            ].map(({ href, tag, title, read }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  padding: "1.25rem",
                  borderRadius: "1rem",
                  background: "rgba(245,240,232,0.04)",
                  border: "1px solid rgba(245,240,232,0.07)",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    padding: "0.25rem 0.625rem",
                    borderRadius: "9999px",
                    color: "#c9a84c",
                    background: "rgba(201,168,76,0.12)",
                    width: "fit-content",
                  }}
                >
                  {tag}
                </span>
                <p
                  style={{
                    fontWeight: 700,
                    color: "#f5f0e8",
                    fontSize: "0.875rem",
                    lineHeight: 1.4,
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(245,240,232,0.3)",
                    marginTop: "auto",
                  }}
                >
                  {read}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <div
        style={{
          borderTop: "1px solid rgba(245,240,232,0.07)",
          padding: "2.5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <Link
            href="/"
            style={{
              fontWeight: 900,
              fontSize: "1.125rem",
              color: "#c9a84c",
              textDecoration: "none",
              letterSpacing: "0.05em",
            }}
          >
            MEOK
          </Link>
          <p
            style={{
              fontSize: "0.75rem",
              color: "rgba(245,240,232,0.3)",
              lineHeight: 1.65,
              maxWidth: "32rem",
            }}
          >
            MEOK is a sovereign AI companion. It is not a medical device, therapy app, or crisis
            intervention tool. If you are in crisis, please contact Samaritans on{" "}
            <strong style={{ color: "rgba(245,240,232,0.5)" }}>116 123</strong>, NHS 111, or
            visit{" "}
            <a
              href="https://www.mind.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#c9a84c", textDecoration: "underline" }}
            >
              mind.org.uk
            </a>
            .
          </p>
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {[
              { label: "Blog", href: "/blog" },
              { label: "About", href: "/about" },
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(245,240,232,0.3)",
                  textDecoration: "none",
                }}
              >
                {label}
              </Link>
            ))}
          </div>
          <p style={{ fontSize: "0.7rem", color: "rgba(245,240,232,0.2)" }}>
            &copy; {new Date().getFullYear()} MEOK AI LABS. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
