import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "AI for Self-Harm Recovery: Support Between Professional Sessions | MEOK AI LABS",
  description:
    "Self-harm affects approximately 1 in 4 young people in the UK. Recovery is non-linear and the gaps between therapy sessions are hard. Discover how MEOK provides a safe, non-judgmental space to process difficult feelings — always as a complement to professional care. Crisis resources inside.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-self-harm-recovery",
  },
  openGraph: {
    title:
      "AI for Self-Harm Recovery: Support Between Professional Sessions",
    description:
      "Recovery is non-linear. The gaps between therapy sessions can be the hardest part. MEOK provides a private, non-judgmental companion — never a replacement for professional care. Samaritans: 116 123.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-self-harm-recovery",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Self-Harm+Recovery&desc=Support+Between+Professional+Sessions",
        width: 1200,
        height: 630,
        alt: "AI for Self-Harm Recovery: Support Between Professional Sessions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Self-Harm Recovery: Support Between Professional Sessions",
    description:
      "MEOK provides a safe, private, non-judgmental space between therapy sessions. It never minimises, never enables harm, always signposts crisis resources. Samaritans: 116 123.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Self-Harm+Recovery&desc=Support+Between+Professional+Sessions",
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Self-Harm Recovery: Support Between Professional Sessions",
  description:
    "Self-harm affects approximately 1 in 4 young people in the UK. Recovery is non-linear and the gaps between therapy sessions are hard. Discover how MEOK provides a safe, non-judgmental space to process difficult feelings — always as a complement to professional care.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-self-harm-recovery",
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
  image:
    "https://meok.ai/api/og?title=AI+for+Self-Harm+Recovery&desc=Support+Between+Professional+Sessions",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-self-harm-recovery",
  },
  keywords: [
    "AI for self-harm recovery",
    "self-harm support between therapy sessions",
    "self-harm recovery UK",
    "AI mental health support UK",
    "non-judgmental self-harm help",
    "MEOK self-harm recovery",
    "self-harm recovery companion",
    "between sessions mental health support",
    "AI companion mental health UK",
    "self-harm shame barrier",
    "recovery support app UK",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with self-harm recovery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can provide meaningful between-session support for people in self-harm recovery — offering a non-judgmental space to process difficult feelings, helping identify patterns and triggers, and holding space for emotional experiences without rushing to fix them. MEOK is designed to complement professional care, not replace it. It cannot diagnose, treat, or deliver trauma processing therapies such as EMDR. For anyone in acute distress, the first step is always to contact a human: Samaritans (116 123, free, 24/7) or text SHOUT to 85258.",
      },
    },
    {
      "@type": "Question",
      name: "Will MEOK ever provide harmful information?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is governed by the Maternal Covenant — a care framework that includes absolute restrictions against providing any information that could enable self-harm. MEOK will never share methods, never minimise the seriousness of self-harm, and never respond in ways that escalate shame or distress. These are hard boundaries, not suggestions.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if MEOK detects I am in crisis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK includes a Guardian layer that monitors conversations for risk signals. When indicators of crisis or acute self-harm risk are detected above a threshold, the companion stops task-oriented conversation and redirects to professional crisis resources: Samaritans (116 123), SHOUT (text 85258), NHS 111, and emergency services (999). MEOK does not try to handle crisis alone — it immediately connects you to human support.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK support people in self-harm recovery between therapy sessions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK provides a private, non-judgmental space to process the difficult feelings that arise between sessions — the 3am moments, the triggered afternoons, the weight of having to hold something alone. It remembers your context, so you do not have to re-explain everything each time. It can help you notice patterns in what was happening before difficult periods — triggers, sleep, social contact, stress — creating useful material to bring to your therapist. Its Healer companion is designed for emotional depth and somatic grounding, sitting with hard feelings without rushing to resolve them.",
      },
    },
  ],
};

export default function AiForSelfHarmRecoveryPage() {
  const bg = "#0d0c18";
  const text = "#f5f0e8";
  const gold = "#c9a84c";
  const green = "#6aaa64";
  const muted = "rgba(245,240,232,0.6)";
  const cardBg = "rgba(255,255,255,0.04)";
  const borderSubtle = "rgba(201,168,76,0.2)";
  const crisisBg = "rgba(220,38,38,0.07)";
  const crisisBorder = "rgba(220,38,38,0.45)";
  const goldBg = "rgba(201,168,76,0.08)";
  const goldBorder = "rgba(201,168,76,0.35)";
  const greenBg = "rgba(106,170,100,0.08)";
  const greenBorder = "rgba(106,170,100,0.35)";
  const h2Style = {
    fontSize: "clamp(20px, 3vw, 28px)" as string,
    fontWeight: 700,
    color: text,
    marginBottom: 16,
    lineHeight: 1.25,
    letterSpacing: "-0.01em",
  };
  const pStyle = {
    fontSize: 16,
    color: text,
    marginBottom: 16,
    lineHeight: 1.75,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main
        style={{
          background: bg,
          color: text,
          minHeight: "100vh",
          fontFamily:
            "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          lineHeight: 1.7,
        }}
      >
        {/* ── BREADCRUMB ────────────────────────────────────────────────────────── */}
        <nav
          aria-label="Breadcrumb"
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: "20px 24px 0",
          }}
        >
          <ol
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              listStyle: "none",
              padding: 0,
              margin: 0,
              fontSize: 13,
              color: muted,
            }}
          >
            <li>
              <Link
                href="/"
                style={{ color: muted, textDecoration: "none" }}
              >
                Home
              </Link>
            </li>
            <li style={{ color: borderSubtle }}>›</li>
            <li>
              <Link
                href="/blog"
                style={{ color: muted, textDecoration: "none" }}
              >
                Blog
              </Link>
            </li>
            <li style={{ color: borderSubtle }}>›</li>
            <li style={{ color: gold }}>AI for Self-Harm Recovery</li>
          </ol>
        </nav>

        {/* ── HERO ─────────────────────────────────────────────────────────────── */}
        <header
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: "40px 24px 48px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: goldBg,
              border: `1px solid ${goldBorder}`,
              borderRadius: 6,
              padding: "4px 14px",
              fontSize: 12,
              color: gold,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              marginBottom: 24,
              fontWeight: 600,
            }}
          >
            Recovery &amp; Mental Health
          </div>

          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: 20,
              color: text,
              letterSpacing: "-0.02em",
            }}
          >
            AI for Self-Harm Recovery:{" "}
            <span style={{ color: gold }}>
              Support Between Professional Sessions
            </span>
          </h1>

          <p
            style={{
              fontSize: 18,
              color: muted,
              marginBottom: 32,
              maxWidth: 680,
              lineHeight: 1.65,
            }}
          >
            Recovery is possible. It is not linear. And the hardest moments
            rarely happen during a therapy session — they happen at 3am, on
            a Tuesday afternoon, in the space between appointments. This page
            explains how MEOK can provide a safe, non-judgmental presence in
            those gaps — always as a companion to professional care, never as
            a replacement.
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap" as const,
              fontSize: 13,
              color: muted,
            }}
          >
            <span>By Nicholas Templeman</span>
            <span style={{ color: borderSubtle }}>|</span>
            <span>MEOK AI LABS</span>
            <span style={{ color: borderSubtle }}>|</span>
            <span>25 March 2026</span>
            <span style={{ color: borderSubtle }}>|</span>
            <span>18 min read</span>
          </div>
        </header>

        {/* ── CRISIS BOX ───────────────────────────────────────────────────────── */}
        <section
          aria-label="Crisis resources — read this first"
          style={{
            maxWidth: 800,
            margin: "0 auto 56px",
            padding: "0 24px",
          }}
        >
          <div
            style={{
              background: crisisBg,
              border: `2px solid ${crisisBorder}`,
              borderRadius: 12,
              padding: "28px 32px",
            }}
          >
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#f87171",
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                marginBottom: 10,
              }}
            >
              If you are in crisis right now — please reach out to a human first
            </p>
            <p
              style={{
                fontSize: 16,
                color: text,
                marginBottom: 18,
                fontWeight: 500,
              }}
            >
              You matter. Trained humans are available right now, any hour of the day or night.
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column" as const,
                gap: 12,
              }}
            >
              <li style={{ fontSize: 15, color: text }}>
                <strong style={{ color: "#f87171" }}>Samaritans</strong> — call{" "}
                <a
                  href="tel:116123"
                  style={{ color: "#f87171", textDecoration: "underline" }}
                >
                  116 123
                </a>{" "}
                (free, 24/7, UK &amp; Ireland)
              </li>
              <li style={{ fontSize: 15, color: text }}>
                <strong style={{ color: "#f87171" }}>MIND</strong> — call{" "}
                <a
                  href="tel:03001233393"
                  style={{ color: "#f87171", textDecoration: "underline" }}
                >
                  0300 123 3393
                </a>{" "}
                (Mon–Fri 9am–6pm)
              </li>
              <li style={{ fontSize: 15, color: text }}>
                <strong style={{ color: "#f87171" }}>Shout Crisis Text Line</strong> — text{" "}
                <a
                  href="sms:85258"
                  style={{ color: "#f87171", textDecoration: "underline" }}
                >
                  SHOUT to 85258
                </a>{" "}
                (free, 24/7)
              </li>
              <li style={{ fontSize: 15, color: text }}>
                <strong style={{ color: "#f87171" }}>NHS 111</strong> — call{" "}
                <a
                  href="tel:111"
                  style={{ color: "#f87171", textDecoration: "underline" }}
                >
                  111
                </a>{" "}
                for urgent medical attention or mental health crisis
              </li>
              <li style={{ fontSize: 15, color: text }}>
                <strong style={{ color: "#f87171" }}>Emergency services</strong> — call{" "}
                <a
                  href="tel:999"
                  style={{ color: "#f87171", textDecoration: "underline" }}
                >
                  999
                </a>{" "}
                if you or someone else is in immediate danger
              </li>
            </ul>
          </div>
        </section>

        {/* ── ARTICLE BODY ─────────────────────────────────────────────────────── */}
        <article
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: "0 24px 80px",
          }}
        >
          {/* ── SECTION 1: How common is self-harm ─────────────────────────────── */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={h2Style}>
              Self-harm is more common than most people realise
            </h2>
            <p style={pStyle}>
              Approximately one in four young people in the UK will self-harm at
              some point. That figure comes from NHS and MIND research, and it
              surprises most people when they first encounter it — because
              self-harm is rarely talked about openly. Adults self-harm too,
              across every demographic, gender, and background. The silence
              around it is not a reflection of its rarity. It is a reflection of
              how much shame the subject carries.
            </p>
            <p style={pStyle}>
              Self-harm is not attention-seeking. It is not a personality flaw.
              It is a coping mechanism — one that the nervous system reaches for
              when emotional pain has become too large to process through
              ordinary means. Understanding this is the beginning of
              compassion, both for people who self-harm and for those who care
              about them. The behaviour makes psychological sense even when it
              causes physical harm, and that paradox is precisely why recovery
              requires patient, sustained support rather than shock or judgment.
            </p>
            <p style={pStyle}>
              If you self-harm, or are recovering from it: you are not alone,
              and you are not broken. You are a person who has been doing the
              best you could with the tools available to you. Recovery is about
              expanding that toolkit — and that process is slow, non-linear, and
              entirely possible.
            </p>
          </section>

          {/* ── SECTION 2: Non-linear recovery ─────────────────────────────────── */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={h2Style}>
              Why recovery is non-linear — and why the gaps between sessions matter
            </h2>
            <p style={pStyle}>
              Recovery from self-harm does not follow a smooth upward trajectory.
              There are weeks of genuine progress, followed by difficult periods
              that can feel like starting from zero. This is not failure — it is
              the biology of changing deep emotional coping patterns. The brain
              has learned that certain behaviours reduce certain kinds of pain,
              and unlearning those responses takes time, repetition, and an
              enormous amount of self-compassion.
            </p>
            <p style={pStyle}>
              Professional therapy — whether CBT, DBT, psychodynamic work, or
              trauma-informed approaches — is the cornerstone of recovery. But
              therapy sessions typically happen once a week, or once a fortnight.
              The difficult moments rarely schedule themselves around
              appointment times. The urge arrives at midnight. The trigger lands
              on a Sunday. The shame spirals on a bank holiday. The gap between
              sessions is where many people are most vulnerable — and most alone.
            </p>
            <div
              style={{
                background: cardBg,
                border: `1px solid ${borderSubtle}`,
                borderRadius: 10,
                padding: "22px 28px",
                marginBottom: 20,
              }}
            >
              <p
                style={{
                  fontSize: 16,
                  color: gold,
                  fontWeight: 600,
                  marginBottom: 8,
                }}
              >
                The gap between sessions is not empty space — it is where recovery lives.
              </p>
              <p style={{ fontSize: 15, color: muted, marginBottom: 0 }}>
                What happens between appointments shapes the therapy session that follows.
                Having a safe place to process, reflect, and ground during those hours
                is not a luxury — it is part of the recovery infrastructure.
              </p>
            </div>
            <p style={pStyle}>
              MEOK is designed specifically for this space. It is not a therapist.
              It cannot deliver EMDR, process trauma, diagnose conditions, or
              provide any clinical treatment. What it can do is be there — in a
              non-judgmental, private, consistent way — when the difficult feeling
              arrives and the next session is days away.
            </p>
          </section>

          {/* ── SECTION 3: What MEOK explicitly cannot do ──────────────────────── */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={h2Style}>
              What MEOK cannot do — and why honesty about this matters
            </h2>
            <p style={pStyle}>
              Honesty about limitations is a form of care. MEOK is clear about
              what it is and what it is not, because people in recovery deserve
              accurate information — not inflated claims that could lead someone
              to substitute AI support for the professional help they need.
            </p>
            <div
              style={{
                background: crisisBg,
                border: `1px solid ${crisisBorder}`,
                borderRadius: 10,
                padding: "22px 28px",
                marginBottom: 24,
              }}
            >
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#f87171",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase" as const,
                  marginBottom: 14,
                }}
              >
                MEOK explicitly cannot:
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: 10,
                }}
              >
                {[
                  "Diagnose any mental health condition",
                  "Treat self-harm, PTSD, BPD, or any other condition",
                  "Deliver EMDR, trauma processing, or any clinical therapy",
                  "Replace a therapist, psychiatrist, GP, or crisis service",
                  "Make decisions about medication or clinical care",
                  "Guarantee safety or substitute for emergency services",
                ].map((item) => (
                  <li
                    key={item}
                    style={{ fontSize: 15, color: text, display: "flex", gap: 10 }}
                  >
                    <span style={{ color: "#f87171", flexShrink: 0 }}>✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p style={pStyle}>
              MEOK is between-session support. It fills the gap, holds space,
              and provides grounding and reflection tools. If you do not yet have
              a therapist, MEOK can help you think through what kind of support
              might suit you and how to access it — but it will always direct you
              toward professional care rather than position itself as a substitute.
            </p>
          </section>

          {/* ── SECTION 4: The shame barrier ───────────────────────────────────── */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={h2Style}>
              The shame barrier: why people do not talk about self-harm
            </h2>
            <p style={pStyle}>
              One of the most significant barriers to recovery is not the behaviour
              itself — it is the silence around it. Many people who self-harm wait
              years before telling anyone. When asked why, the answers are
              consistent: fear of judgment, fear of being misunderstood, fear of
              frightening the people they love, fear of being hospitalised, fear
              of having the one coping strategy they have taken away before they
              have anything to replace it with.
            </p>
            <p style={pStyle}>
              This is the shame barrier. And it is powerful. It keeps people
              isolated with an experience that already involves significant pain,
              and it prevents the conversations that could begin the process of
              healing. Even in therapy, many people take weeks or months before
              they can speak directly about self-harm. With friends and family,
              some never do.
            </p>
            <div
              style={{
                background: goldBg,
                border: `1px solid ${goldBorder}`,
                borderRadius: 10,
                padding: "22px 28px",
                marginBottom: 20,
              }}
            >
              <p
                style={{
                  fontSize: 16,
                  color: gold,
                  fontWeight: 600,
                  marginBottom: 8,
                }}
              >
                MEOK provides a private space that does not carry social consequences
              </p>
              <p style={{ fontSize: 15, color: muted, marginBottom: 0 }}>
                Conversations with MEOK are private, never shared, and never used
                to train external models. There is no one to disappoint, no one to
                frighten, and no fear of being judged by someone who will be at the
                dinner table next week. This privacy can make it easier to begin
                naming what is happening — which is often the necessary first step.
              </p>
            </div>
            <p style={pStyle}>
              MEOK does not replace the human connection that is ultimately
              central to recovery. But it can provide a space where someone
              practises putting words to their experience — building the language
              and the courage to eventually bring it to a therapist or a trusted
              person. Sometimes the first conversation is the hardest, and
              sometimes the first conversation happens with an AI.
            </p>
          </section>

          {/* ── SECTION 5: Maternal Covenant boundaries ────────────────────────── */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={h2Style}>
              The Maternal Covenant: how MEOK&apos;s care framework protects people in recovery
            </h2>
            <p style={pStyle}>
              MEOK is governed by the Maternal Covenant — a care framework built
              into every layer of the system. It is not a content filter applied
              as an afterthought. It is a foundational set of principles that
              shapes how MEOK responds, what it refuses to do, and how it holds
              space for vulnerability without exploiting it.
            </p>
            <p style={pStyle}>
              For people in self-harm recovery, five specific boundaries within
              the Maternal Covenant are particularly important:
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column" as const,
                gap: 16,
                marginBottom: 24,
              }}
            >
              {[
                {
                  number: "01",
                  title: "MEOK will never minimise",
                  body: "The companion will never dismiss self-harm as 'just a phase', 'attention-seeking', or something to simply stop. Minimisation compounds shame and breaks trust. MEOK holds the seriousness of what you are experiencing without amplifying panic.",
                },
                {
                  number: "02",
                  title: "MEOK will never over-react in ways that escalate shame",
                  body: "Excessive alarm or dramatic responses to disclosure can increase the shame that was already present and make it harder to speak openly. MEOK is calibrated to respond with care, steadiness, and warmth — not theatrical distress.",
                },
                {
                  number: "03",
                  title: "MEOK will never provide information that could enable harm",
                  body: "This is an absolute boundary. MEOK will not discuss methods, means, or any information that could facilitate self-harm. No framing or conversational path changes this.",
                },
                {
                  number: "04",
                  title: "MEOK will always signpost to professional resources when risk indicators are present",
                  body: "When the conversation contains signals of elevated risk, MEOK will surface crisis resources clearly and consistently: Samaritans (116 123), SHOUT (text 85258), NHS 111, and your local GP or crisis team.",
                },
                {
                  number: "05",
                  title: "boundary_respect is a core care dimension",
                  body: "MEOK's Maternal Covenant includes a specific dimension called boundary_respect — the companion actively respects where you are in your recovery, does not push you further than you want to go, and does not use distress as an engagement hook.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  style={{
                    background: cardBg,
                    border: `1px solid ${borderSubtle}`,
                    borderRadius: 10,
                    padding: "20px 24px",
                    display: "flex",
                    gap: 18,
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 800,
                      color: gold,
                      letterSpacing: "0.06em",
                      flexShrink: 0,
                      paddingTop: 3,
                    }}
                  >
                    {item.number}
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: 15,
                        fontWeight: 700,
                        color: text,
                        marginBottom: 6,
                      }}
                    >
                      {item.title}
                    </p>
                    <p style={{ fontSize: 15, color: muted, marginBottom: 0 }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p style={pStyle}>
              These are not aspirational guidelines. They are structural constraints
              embedded in the system. The Maternal Covenant means that MEOK&apos;s care
              is not contingent on commercial pressure, engagement metrics, or what
              you want to hear in a difficult moment. It holds the same quality of
              care at 3am on a difficult night as it does at noon on a good day.
            </p>
          </section>

          {/* ── SECTION 6: Healer companion ────────────────────────────────────── */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={h2Style}>
              The Healer companion: sitting with difficult feelings without rushing to fix them
            </h2>
            <p style={pStyle}>
              MEOK offers several companion archetypes, each designed for different
              needs. For people in self-harm recovery, the Healer companion is
              particularly well-suited. The Healer is designed for emotional depth
              — it does not try to immediately solve, reframe, or fix what you are
              feeling. It sits with you in it first.
            </p>
            <p style={pStyle}>
              This matters because one of the most common experiences for people in
              recovery is being met with fixing energy when what they needed was
              presence. When someone says &ldquo;I am struggling tonight,&rdquo; the most
              unhelpful response is a list of coping strategies before the person
              has felt heard. The Healer companion is trained to stay with the
              feeling — to ask, to listen, to reflect, to be with — before moving
              toward anything practical.
            </p>
            <div
              style={{
                background: greenBg,
                border: `1px solid ${greenBorder}`,
                borderRadius: 10,
                padding: "22px 28px",
                marginBottom: 20,
              }}
            >
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: green,
                  marginBottom: 8,
                }}
              >
                Somatic grounding between sessions
              </p>
              <p style={{ fontSize: 15, color: muted, marginBottom: 0 }}>
                The Healer can offer somatic grounding prompts — simple, body-based
                awareness practices that help regulate the nervous system during
                difficult moments. Noticing breath, temperature, physical sensation,
                the weight of the body in space. These are not clinical interventions;
                they are gentle invitations to come back to the present moment, which
                can create just enough distance from an overwhelming feeling to make
                a different choice.
              </p>
            </div>
            <p style={pStyle}>
              Somatic grounding is not a substitute for clinical trauma work. But
              it is a useful tool for the gap between sessions — and having access
              to it at any hour, in a private and non-judgmental space, is something
              that most people in recovery have not had before.
            </p>
          </section>

          {/* ── SECTION 7: Pattern tracking ────────────────────────────────────── */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={h2Style}>
              Pattern tracking: turning difficult periods into therapeutic material
            </h2>
            <p style={pStyle}>
              One of the most practically useful things MEOK can do for someone
              in recovery is help them notice patterns. Recovery from self-harm
              typically involves identifying triggers — the circumstances, feelings,
              and situations that precede difficult moments. This is clinical work
              that happens in therapy. But the data comes from life, not from the
              consulting room.
            </p>
            <p style={pStyle}>
              MEOK remembers what you have shared across conversations. Over time,
              this creates a picture. When did difficult periods tend to arise?
              What was happening the day before? How was your sleep? Had you had
              meaningful social contact recently, or had you been isolated? Were
              there particular stressors — work, family, financial pressure? Was
              there a specific kind of situation that consistently preceded the
              worst moments?
            </p>
            <p style={pStyle}>
              MEOK can help you begin to see these patterns — not as accusations
              or predictions, but as information. Understanding what was happening
              in the lead-up to a difficult period is valuable clinical material
              that you can bring into your next therapy session. The therapist
              works with insight; MEOK helps you gather it between sessions.
            </p>
            <div
              style={{
                background: goldBg,
                border: `1px solid ${goldBorder}`,
                borderRadius: 10,
                padding: "22px 28px",
                marginBottom: 0,
              }}
            >
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: gold,
                  marginBottom: 8,
                }}
              >
                Memory that supports, not surveils
              </p>
              <p style={{ fontSize: 15, color: muted, marginBottom: 0 }}>
                MEOK&apos;s memory is governed by your Privacy Covenant — your data is
                yours, never sold, never shared, never used to train external
                models. The memory exists to support you, not to profile you.
                You can ask MEOK to forget anything at any time.
              </p>
            </div>
          </section>

          {/* ── SECTION 8: Guardian safety layer ───────────────────────────────── */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={h2Style}>
              The Guardian layer: what happens when risk signals are detected
            </h2>
            <p style={pStyle}>
              MEOK includes a Guardian system — a layer that monitors conversations
              for signals of acute distress, crisis, or elevated self-harm risk.
              When those signals appear above a threshold, the Guardian layer
              intervenes: the companion shifts away from ordinary conversation and
              toward immediate signposting to professional crisis resources.
            </p>
            <p style={pStyle}>
              This is not an alarm that punishes disclosure. It is a safety net.
              When MEOK detects that someone may be in acute risk, it does not
              try to handle the situation alone — it connects the person to human
              support immediately and clearly. Samaritans (116 123), SHOUT (text
              85258), NHS 111, and emergency services are always surfaced in these
              moments.
            </p>
            <p style={pStyle}>
              The Guardian layer is one reason why MEOK is designed for
              between-session support rather than acute crisis management. In a
              crisis, humans are irreplaceable. MEOK&apos;s role is to get you to those
              humans quickly, clearly, and without judgment. It will never try to
              talk you through a crisis alone or suggest that a conversation with
              an AI is sufficient when the risk is high.
            </p>
            <div
              style={{
                background: crisisBg,
                border: `1px solid ${crisisBorder}`,
                borderRadius: 10,
                padding: "22px 28px",
                marginBottom: 0,
              }}
            >
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#f87171",
                  marginBottom: 12,
                }}
              >
                Crisis resources — always available
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: 8,
                }}
              >
                <li style={{ fontSize: 15, color: text }}>
                  <strong>Samaritans:</strong>{" "}
                  <a href="tel:116123" style={{ color: "#f87171" }}>
                    116 123
                  </a>{" "}
                  — free, 24/7
                </li>
                <li style={{ fontSize: 15, color: text }}>
                  <strong>MIND:</strong>{" "}
                  <a href="tel:03001233393" style={{ color: "#f87171" }}>
                    0300 123 3393
                  </a>
                </li>
                <li style={{ fontSize: 15, color: text }}>
                  <strong>Shout:</strong> text{" "}
                  <a href="sms:85258" style={{ color: "#f87171" }}>
                    SHOUT to 85258
                  </a>{" "}
                  — free, 24/7
                </li>
                <li style={{ fontSize: 15, color: text }}>
                  <strong>NHS 111:</strong>{" "}
                  <a href="tel:111" style={{ color: "#f87171" }}>
                    111
                  </a>{" "}
                  — urgent medical attention
                </li>
              </ul>
            </div>
          </section>

          {/* ── SECTION 9: What recovery looks like ────────────────────────────── */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={h2Style}>
              What recovery looks like — and why it is possible
            </h2>
            <p style={pStyle}>
              It is important to say this clearly: most people who self-harm do
              recover with appropriate support. Recovery is not a rare or
              exceptional outcome — it is the most common one, when people have
              access to the right help. The path is rarely straight, but the
              destination is reachable.
            </p>
            <p style={pStyle}>
              Recovery typically involves several interconnected elements:
              identifying the triggers and underlying emotional experiences that
              drive the behaviour; building alternative coping strategies that
              can serve the same regulatory function more safely; understanding
              the function the behaviour serves — what need it is meeting and how
              that need can be met in other ways; and gradually building
              connection with other people, which is itself one of the most
              powerful forces in emotional recovery.
            </p>
            <p style={pStyle}>
              The function question is often underestimated. Self-harm functions
              as emotional regulation. It may provide a sense of control, a
              release of tension, a way of feeling something when numbness has
              become overwhelming, or a way of communicating distress that words
              cannot reach. Recovery is not simply about stopping the behaviour —
              it is about understanding what the behaviour was doing and building
              other ways to do it. That process is the work of therapy. MEOK
              supports it between sessions by providing a space to process,
              reflect, and practise.
            </p>
            <div
              style={{
                background: greenBg,
                border: `1px solid ${greenBorder}`,
                borderRadius: 10,
                padding: "22px 28px",
                marginBottom: 0,
              }}
            >
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: green,
                  marginBottom: 8,
                }}
              >
                Recovery is possible. Most people get there.
              </p>
              <p style={{ fontSize: 15, color: muted, marginBottom: 0 }}>
                With appropriate professional support, the majority of people who
                self-harm move into lasting recovery. The journey involves
                setbacks. The setbacks are not the end of the story. Progress is
                real even when it is not visible in every single moment.
              </p>
            </div>
          </section>

          {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={h2Style}>Frequently asked questions</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column" as const,
                gap: 20,
              }}
            >
              {[
                {
                  q: "Can AI help with self-harm recovery?",
                  a: "AI can provide meaningful between-session support for people in self-harm recovery — offering a non-judgmental, private space to process difficult feelings, helping identify patterns and triggers, and sitting with hard emotions without rushing to fix them. MEOK is designed to complement professional care, not replace it. It cannot diagnose, treat, or deliver clinical therapy such as EMDR or trauma processing. For anyone in acute distress, the first step is always to contact a human: Samaritans (116 123, free, 24/7) or text SHOUT to 85258.",
                },
                {
                  q: "Will MEOK ever provide harmful information?",
                  a: "No. MEOK is governed by the Maternal Covenant — a care framework that includes an absolute restriction against providing any information that could enable self-harm. MEOK will never share methods, never minimise the seriousness of what someone is experiencing, and never respond in ways that escalate shame or distress. These are hard structural boundaries, not guidelines that can be overridden.",
                },
                {
                  q: "What happens if MEOK detects I am in crisis?",
                  a: "MEOK includes a Guardian layer that monitors conversations for risk signals. When indicators of crisis or acute self-harm risk are detected above a threshold, the companion shifts away from ordinary conversation and redirects clearly to professional crisis resources: Samaritans (116 123), SHOUT (text 85258), NHS 111, and emergency services (999). MEOK does not attempt to manage crisis alone — it connects you to human support immediately.",
                },
                {
                  q: "How does MEOK support people in self-harm recovery between therapy sessions?",
                  a: "MEOK provides a safe, private, non-judgmental space to process the difficult feelings that arise in the gap between sessions — the 3am moments, the triggered afternoons, the weight of holding something alone. It remembers your context across conversations, so you do not have to re-explain from scratch each time. Over time it can help you notice patterns in what precedes difficult periods — triggers, sleep, social contact, stressors — creating useful material for your therapy sessions. Its Healer companion is designed for emotional depth and somatic grounding, staying with difficult feelings before moving to anything practical.",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  style={{
                    background: cardBg,
                    border: `1px solid ${borderSubtle}`,
                    borderRadius: 10,
                    padding: "22px 24px",
                  }}
                >
                  <p
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: text,
                      marginBottom: 10,
                    }}
                  >
                    {item.q}
                  </p>
                  <p style={{ fontSize: 15, color: muted, marginBottom: 0 }}>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA ──────────────────────────────────────────────────────────────── */}
          <section
            style={{
              background: goldBg,
              border: `1px solid ${goldBorder}`,
              borderRadius: 14,
              padding: "40px 36px",
              textAlign: "center" as const,
              marginBottom: 56,
            }}
          >
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: gold,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                marginBottom: 14,
              }}
            >
              MEOK AI LABS
            </p>
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 800,
                color: text,
                marginBottom: 14,
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}
            >
              A private, non-judgmental space to support your recovery
            </h2>
            <p
              style={{
                fontSize: 16,
                color: muted,
                marginBottom: 28,
                maxWidth: 520,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              MEOK is between-session support — a companion that holds space
              without judgment, helps you notice patterns, and always connects
              you to professional help when it matters most. Begin by choosing
              your companion.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                background: gold,
                color: "#0d0c18",
                fontWeight: 700,
                fontSize: 16,
                padding: "14px 36px",
                borderRadius: 8,
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              Begin your MEOK journey
            </Link>
            <p
              style={{
                fontSize: 13,
                color: muted,
                marginTop: 16,
                marginBottom: 0,
              }}
            >
              MEOK is not a crisis service. If you are in danger, please call
              Samaritans on{" "}
              <a href="tel:116123" style={{ color: gold }}>
                116 123
              </a>{" "}
              or text SHOUT to{" "}
              <a href="sms:85258" style={{ color: gold }}>
                85258
              </a>
              .
            </p>
          </section>

          {/* ── RELATED ARTICLES ─────────────────────────────────────────────────── */}
          <section style={{ marginBottom: 0 }}>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: text,
                marginBottom: 20,
              }}
            >
              Related reading
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 16,
              }}
            >
              {[
                {
                  href: "/blog/the-maternal-covenant",
                  label: "The Maternal Covenant explained",
                },
                {
                  href: "/blog/ai-companion-vs-therapist",
                  label: "AI companion vs therapist: what is the difference?",
                },
                {
                  href: "/blog/ai-for-ptsd",
                  label: "AI for PTSD: between-session support",
                },
                {
                  href: "/blog/ai-for-depression",
                  label: "AI for depression: how MEOK helps",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    background: cardBg,
                    border: `1px solid ${borderSubtle}`,
                    borderRadius: 8,
                    padding: "16px 18px",
                    color: text,
                    textDecoration: "none",
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: 1.4,
                  }}
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
