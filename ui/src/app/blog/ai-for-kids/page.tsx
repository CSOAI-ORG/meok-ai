import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Kids: Safe, Educational AI That Grows With Your Child | MEOK AI LABS",
  description:
    "MEOK Guardian is the only AI companion built from the ground up for children — school-safe content filters, parental dashboard, and full UK Children's Code compliance. From £29/mo for the whole family.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-kids" },
  openGraph: {
    title: "AI for Kids: Safe, Educational AI That Grows With Your Child",
    description:
      "MEOK Guardian is the only AI companion built from the ground up for children — school-safe content filters, parental dashboard, and full UK Children's Code compliance. From £29/mo for the whole family.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-kids",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Kids%3A+Safe%2C+Educational+AI&desc=MEOK+Guardian+grows+with+your+child",
        width: 1200,
        height: 630,
        alt: "AI for Kids: Safe, Educational AI That Grows With Your Child",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Kids: Safe, Educational AI That Grows With Your Child",
    description:
      "MEOK Guardian is the only AI companion built from the ground up for children — school-safe content filters, parental dashboard, and full UK Children's Code compliance.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Kids%3A+Safe%2C+Educational+AI&desc=MEOK+Guardian+grows+with+your+child",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Kids: Safe, Educational AI That Grows With Your Child",
  description:
    "MEOK Guardian is the only AI companion built from the ground up for children — school-safe content filters, parental dashboard, and full UK Children's Code compliance. From £29/mo for the whole family.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-kids",
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
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-kids",
  },
  image:
    "https://meok.ai/api/og?title=AI+for+Kids%3A+Safe%2C+Educational+AI&desc=MEOK+Guardian+grows+with+your+child",
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is AI safe for kids?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most general-purpose AI is not designed with children in mind and carries significant risks around inappropriate content, data harvesting, and lack of parental oversight. MEOK Guardian is specifically built for children and is compliant with the UK Children's Code (Age Appropriate Design Code), enforcing school-safe content filters, real-time threat detection, and a full parental dashboard. No other AI companion on the market matches this level of child-specific safety architecture.",
      },
    },
    {
      "@type": "Question",
      name: "What is MEOK Guardian?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK Guardian is the child-safety layer built into MEOK AI LABS. It includes a real-time DistilBERT-powered threat classifier, school-safe content mode, age-appropriate response tuning, a parental dashboard with session summaries, instant alerts for concerning conversations, and full compliance with UK GDPR and the Children's Code. It activates automatically for any profile flagged as under-18.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI help children learn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AI companions like MEOK can support children's learning by acting as a patient, always-available tutor that explains concepts at the right level, encourages curiosity, helps with homework without doing it for them, and remembers what the child struggled with previously — so follow-up explanations are more targeted. MEOK's school-safe mode ensures all educational interactions are age-appropriate.",
      },
    },
    {
      "@type": "Question",
      name: "What parental controls does MEOK offer for children?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's parental dashboard gives parents a full view of their child's AI usage: daily session summaries, topic logs, flagged conversation excerpts, time-of-day usage charts, and instant push notifications if a HIGH or CRITICAL threat event is detected. Parents can also set time limits, topic restrictions, and adjust the minimum response age-appropriateness level.",
      },
    },
    {
      "@type": "Question",
      name: "What does the MEOK Family Plan include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The MEOK Family Plan at £29/month includes Sovereign tier AI for up to two parents plus Guardian-protected profiles for up to four children. Every child profile includes school-safe mode, the parental dashboard, real-time threat detection, and age-calibrated responses. The plan also includes MEOK Guardian for elderly family members if needed.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK comply with the UK Children's Code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The UK Children's Code (Age Appropriate Design Code) requires that digital services likely used by under-18s apply privacy by default, minimise data collection, ban commercial profiling of children, and act in children's best interests above engagement or commercial goals. MEOK defaults all child profiles to maximum privacy, collects only what is strictly necessary for the service to function, prohibits commercial use of children's data, and never shows advertising or dark patterns to child profiles.",
      },
    },
  ],
};

// ── Styles ────────────────────────────────────────────────────────────────────

const s = {
  gold: "#c9a84c" as const,
  bg: "#0d0c18" as const,
  text: "#f5f0e8" as const,
  muted: "rgba(245,240,232,0.55)" as const,
  dimmer: "rgba(245,240,232,0.35)" as const,
  cardBg: "rgba(201,168,76,0.05)" as const,
  cardBorder: "rgba(201,168,76,0.18)" as const,
};

// ── Comparison data ───────────────────────────────────────────────────────────

const competitors = [
  {
    name: "MEOK Guardian",
    childSafe: "Yes — purpose-built",
    childrensCode: "Full compliance",
    parentalDash: "Yes — real-time alerts",
    schoolSafe: "Yes — dedicated mode",
    dataOwnership: "Parent-controlled encryption",
    cost: "£29/mo (Family Plan)",
    highlight: true,
  },
  {
    name: "ChatGPT",
    childSafe: "No dedicated child mode",
    childrensCode: "Not verified",
    parentalDash: "None",
    schoolSafe: "No",
    dataOwnership: "OpenAI servers",
    cost: "Free / £20/mo",
    highlight: false,
  },
  {
    name: "Replika",
    childSafe: "Adults only",
    childrensCode: "Not applicable",
    parentalDash: "None",
    schoolSafe: "No",
    dataOwnership: "Replika servers",
    cost: "Free / £70/yr",
    highlight: false,
  },
  {
    name: "Character.AI",
    childSafe: "Teen mode (limited)",
    childrensCode: "Not verified",
    parentalDash: "Basic",
    schoolSafe: "Partial",
    dataOwnership: "Google Cloud",
    cost: "Free / £9.99/mo",
    highlight: false,
  },
  {
    name: "Alexa / Google",
    childSafe: "Kids mode available",
    childrensCode: "Partial",
    parentalDash: "App-based",
    schoolSafe: "Limited",
    dataOwnership: "Amazon / Google",
    cost: "Hardware + subscription",
    highlight: false,
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PostPage() {
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
      <div
        style={{
          background: s.bg,
          minHeight: "100vh",
          color: s.text,
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* ── Nav ── */}
        <nav
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            background: "rgba(13,12,24,0.92)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(201,168,76,0.12)",
            padding: "0.9rem 1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Link
            href="/blog"
            style={{
              color: s.gold,
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            ← All Posts
          </Link>
          <span style={{ color: "rgba(201,168,76,0.3)" }}>|</span>
          <Link
            href="/"
            style={{
              color: "rgba(245,240,232,0.5)",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
            }}
          >
            MEOK AI LABS
          </Link>
        </nav>

        {/* ── Hero ── */}
        <section
          style={{
            padding: "clamp(4rem, 10vw, 7rem) 1.5rem 3.5rem",
            background:
              "linear-gradient(180deg, rgba(201,168,76,0.07) 0%, transparent 65%)",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(201,168,76,0.65)",
                marginBottom: "1.25rem",
              }}
            >
              MEOK AI LABS — CHILD SAFETY
            </p>
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3.4rem)",
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                color: "#ffffff",
              }}
            >
              AI for Kids: Safe, Educational AI
              <br />
              <span style={{ color: s.gold }}>
                That Grows With Your Child
              </span>
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.75,
                color: s.muted,
                maxWidth: "620px",
                margin: "0 auto 1.5rem",
              }}
            >
              The AI landscape in 2026 is enormous. Most of it was not designed
              for children. This guide explains what safe AI for kids actually
              looks like, what the UK Children&apos;s Code demands, and how
              MEOK Guardian is the only AI companion that meets every standard.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.75rem",
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: "0.8rem", color: s.dimmer }}>
                March 24, 2026
              </span>
              <span style={{ fontSize: "0.8rem", color: "rgba(245,240,232,0.2)" }}>·</span>
              <span style={{ fontSize: "0.8rem", color: s.dimmer }}>
                16 min read
              </span>
              <span style={{ fontSize: "0.8rem", color: "rgba(245,240,232,0.2)" }}>·</span>
              <span style={{ fontSize: "0.8rem", color: s.dimmer }}>
                By Nicholas Templeman, Founder — MEOK AI LABS
              </span>
            </div>
          </div>
        </section>

        <main style={{ maxWidth: "780px", margin: "0 auto", padding: "0 1.5rem 6rem" }}>

          {/* ── Key stat callout ── */}
          <div
            style={{
              padding: "1.75rem 2rem",
              background: s.cardBg,
              border: `1px solid ${s.cardBorder}`,
              borderRadius: "1rem",
              marginBottom: "3.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: s.gold,
                marginBottom: "0.75rem",
              }}
            >
              WHY THIS MATTERS NOW
            </p>
            <p style={{ lineHeight: 1.75, color: "rgba(245,240,232,0.85)", margin: 0 }}>
              By 2026, over{" "}
              <strong style={{ color: s.text }}>
                60% of UK children aged 8–17
              </strong>{" "}
              regularly use at least one AI tool — most of which were built for
              adults. The UK Children&apos;s Code is now actively enforced by
              the ICO. Parents are looking for one trustworthy answer:{" "}
              <em>is there an AI companion that was actually built for my child?</em>{" "}
              The answer is MEOK Guardian.
            </p>
          </div>

          {/* ── Section 1 ── */}
          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                lineHeight: 1.25,
                marginBottom: "1rem",
                color: s.text,
              }}
            >
              What makes AI unsafe for children — and why most products fail
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              The core problem is not malice. It is architecture. General-purpose
              AI models — ChatGPT, Claude, Gemini, most chatbots — are trained to
              be helpful to adults. When a child interacts with them, the model
              has no mechanism to recognise that it is speaking with an 8-year-old
              versus a 38-year-old. It will answer questions about violence,
              drugs, or adult relationships because the question was asked, not
              because it was appropriate.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              The second problem is data. Many AI platforms train their models on
              user conversations. If your child&apos;s conversations are used to
              train a model, that child&apos;s disclosures — their fears, their
              friendships, their home situation — become commercial training
              data. The UK Children&apos;s Code exists precisely to prevent this.
              Most platforms have not meaningfully complied.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              The third problem is monitoring. Even when parents want to stay
              informed about what their child is discussing with an AI, most
              platforms provide no parental visibility at all. The conversation
              is private — but not in a way that serves the family.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted }}>
              MEOK Guardian was designed to solve all three problems
              simultaneously, without sacrificing the genuine educational and
              emotional value a thoughtful AI companion can offer a child.
            </p>
          </section>

          {/* ── Section 2 ── */}
          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                lineHeight: 1.25,
                marginBottom: "1rem",
                color: s.text,
              }}
            >
              What is the UK Children&apos;s Code — and does your child&apos;s
              AI comply?
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              The Age Appropriate Design Code — commonly called the Children&apos;s
              Code — is a statutory code of practice issued under the Data
              Protection Act 2018. It applies to any online service that is
              &quot;likely to be accessed by children&quot; — a deliberately broad
              definition that catches most AI chatbots and companions.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              The code&apos;s 15 standards include: <strong style={{ color: s.text }}>privacy by default</strong> (children
              must be set to the most protective settings automatically),{" "}
              <strong style={{ color: s.text }}>data minimisation</strong> (only data strictly necessary for the
              service may be collected), prohibition on{" "}
              <strong style={{ color: s.text }}>nudge techniques</strong> and
              dark patterns, a ban on{" "}
              <strong style={{ color: s.text }}>profiling children for commercial purposes</strong>, and an
              overriding obligation to act in the{" "}
              <strong style={{ color: s.text }}>best interests of the child</strong> above the commercial
              interests of the platform.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              Since 2023 the ICO has been actively issuing enforcement notices
              against companies that fail to comply. The fines are substantial —
              up to 4% of global turnover under UK GDPR — and the ICO has
              confirmed it will treat children&apos;s data breaches as a priority.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted }}>
              MEOK AI LABS built Guardian with the Children&apos;s Code as the
              specification, not an afterthought. Every design decision in
              Guardian can be traced back to a specific Code requirement.
            </p>
          </section>

          {/* ── Section 3 — MEOK Guardian ── */}
          <section
            style={{
              marginBottom: "3rem",
              padding: "2rem",
              background: "rgba(201,168,76,0.04)",
              border: `1px solid ${s.cardBorder}`,
              borderRadius: "1.25rem",
            }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: s.gold,
                marginBottom: "0.5rem",
              }}
            >
              MEOK GUARDIAN
            </p>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                lineHeight: 1.25,
                marginBottom: "1.25rem",
                color: s.text,
              }}
            >
              MEOK Guardian: the architecture of safe AI for children
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              Guardian is not a content filter bolted onto an adult system.
              It is a child-safety architecture that operates at five distinct
              layers simultaneously. When a child profile is active, every
              component of MEOK adjusts to serve that child safely.
            </p>

            {/* Guardian layers */}
            {[
              {
                title: "Layer 1 — Real-time threat detection",
                body: "Every message sent to a Guardian-protected profile is classified in real time by a fine-tuned DistilBERT model before the AI generates a response. The classifier scores for grooming patterns, coercive language, inappropriate content, predatory contact signals, and self-harm indicators. Classification completes in under three seconds. HIGH and CRITICAL threat scores pause the session and alert the parent dashboard immediately.",
              },
              {
                title: "Layer 2 — School-safe content mode",
                body: "School-safe mode restricts all AI responses to educational, age-appropriate content. The system prompt is replaced with a child-specific template that precludes adult topics, violence, profanity, political controversy, and commercial influence. Topics are drawn from the UK primary and secondary curriculum, with the child's grade level optionally set by the parent.",
              },
              {
                title: "Layer 3 — Age-calibrated response style",
                body: "MEOK adjusts vocabulary, sentence length, conceptual complexity, and emotional register to match the child's age band (5–7, 8–10, 11–13, 14–17). A seven-year-old asking about the solar system receives a fundamentally different explanation than a fourteen-year-old — not because the facts differ, but because the framing, analogies, and vocabulary are calibrated to what that child can process and engage with.",
              },
              {
                title: "Layer 4 — Parental dashboard",
                body: "Parents receive daily session summaries: topics discussed, any flagged moments, session duration, and a tone analysis of the conversation. Push notifications are sent immediately for any threat event above LOW severity. Parents can view topic logs, set time limits per day, restrict specific subject areas, and adjust the age calibration if needed. The dashboard is available on iOS, Android, and web.",
              },
              {
                title: "Layer 5 — Data sovereignty for minors",
                body: "Child profile data is encrypted with a key held by the parent, not MEOK AI LABS. MEOK cannot read a child's conversation history without the parent decrypting it. No child data is used for commercial training, advertising, or profiling. Data retention defaults to 90 days with automatic deletion — not indefinite cloud storage. The parent can request full deletion at any time and receive confirmation within 72 hours.",
              },
            ].map((layer) => (
              <div
                key={layer.title}
                style={{
                  marginBottom: "1.5rem",
                  paddingLeft: "1rem",
                  borderLeft: `3px solid rgba(201,168,76,0.35)`,
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    color: s.text,
                    marginBottom: "0.4rem",
                    fontSize: "1rem",
                  }}
                >
                  {layer.title}
                </p>
                <p style={{ lineHeight: 1.8, color: s.muted, margin: 0 }}>
                  {layer.body}
                </p>
              </div>
            ))}
          </section>

          {/* ── Section 4 — School-safe mode ── */}
          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                lineHeight: 1.25,
                marginBottom: "1rem",
                color: s.text,
              }}
            >
              What does school-safe mode actually do — and can children still
              learn freely within it?
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              This is the question every thoughtful parent asks, and it is the
              right question. A content filter that is so restrictive it becomes
              useless is not a safety feature — it is just friction. MEOK Guardian
              was designed to thread this needle precisely.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              School-safe mode allows: science questions (including human biology
              at curriculum level), history and geography, creative writing (with
              age-appropriate themes), mathematics from basic arithmetic to
              A-level concepts, languages, coding, art, music theory, and
              emotional discussions about friendships, school stress, and family
              life.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              School-safe mode blocks: graphic violence, sexual or romantic
              content beyond age-appropriate relationship advice, political
              extremism, commercial advertising, drug and alcohol discussion,
              and any conversation that a classroom teacher would be required to
              report to a safeguarding officer.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              Critically, MEOK Guardian does not simply refuse questions that
              fall outside the safe zone. It redirects them thoughtfully. If a
              twelve-year-old asks about something that cannot be addressed safely,
              MEOK explains why it cannot help with that right now and suggests
              they speak with a trusted adult — without making the child feel
              judged or alarmed.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted }}>
              The result is an AI companion that feels genuinely helpful and
              curious alongside the child — not a caged, robotic system that
              refuses every interesting question.
            </p>
          </section>

          {/* ── Section 5 — Educational use ── */}
          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                lineHeight: 1.25,
                marginBottom: "1rem",
                color: s.text,
              }}
            >
              How can AI genuinely help children learn — without doing the work
              for them?
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              This is a concern shared by most parents and every teacher.
              AI used badly is a homework-completion machine that teaches children
              nothing except how to outsource effort. MEOK Guardian is designed
              around a fundamentally different pedagogical approach: the Socratic
              companion.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              When a child asks MEOK to &quot;write my essay on the water cycle,&quot;
              Guardian does not produce the essay. It asks the child what they
              already know, identifies gaps in their understanding, explains the
              concepts that need filling, and guides the child to write the essay
              themselves — with MEOK offering feedback on drafts rather than
              generating the final product.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              This behaviour is configurable. Parents can set the assistance level
              from &quot;Socratic only&quot; (maximum learning) to &quot;guided drafting&quot;
              (MEOK helps structure) to &quot;collaborative&quot; (for creative projects
              where co-creation is the point). The default for school-age children
              is Socratic.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              MEOK also uses its Sovereign Memory system to track each
              child&apos;s learning over time. If a child consistently struggles
              with fractions, MEOK will notice — and will proactively offer a
              different explanation approach the next time the topic arises.
              This is the value of an AI companion that actually remembers:
              not just recalling the conversation from last Tuesday, but building
              a genuine model of how this particular child learns.
            </p>

            {/* Learning use cases */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: "1rem",
                marginTop: "1.5rem",
              }}
            >
              {[
                { subject: "Mathematics", detail: "Patient step-by-step guidance from times tables to calculus, with different explanations until one clicks" },
                { subject: "English & Writing", detail: "Feedback on drafts, help with structure, vocabulary expansion, and creative writing collaboration" },
                { subject: "Science", detail: "Curriculum-aligned explanations, experiment ideas, and curiosity-led exploration of how things work" },
                { subject: "History & Geography", detail: "Narrative-first explanations that make events feel real, with source questioning to build critical thinking" },
                { subject: "Languages", detail: "Conversational practice, vocabulary drilling, and grammar explanation in context — more engaging than flashcards" },
                { subject: "Coding", detail: "Guided projects from Scratch to Python, with debugging help that explains what went wrong rather than just fixing it" },
              ].map((item) => (
                <div
                  key={item.subject}
                  style={{
                    padding: "1.25rem",
                    background: "rgba(245,240,232,0.03)",
                    border: "1px solid rgba(245,240,232,0.08)",
                    borderRadius: "0.75rem",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      color: s.gold,
                      fontSize: "0.9rem",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {item.subject}
                  </p>
                  <p style={{ fontSize: "0.88rem", color: s.muted, lineHeight: 1.6, margin: 0 }}>
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 6 — Parental dashboard ── */}
          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                lineHeight: 1.25,
                marginBottom: "1rem",
                color: s.text,
              }}
            >
              The MEOK parental dashboard: what you can see, set, and control
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              Parental visibility is not an add-on in MEOK Guardian — it is a
              core architectural principle. Informed parents are the best
              safeguard for any child. The dashboard is designed to give parents
              the information they need without making them feel like they are
              surveilling their child.
            </p>

            {/* Dashboard features */}
            {[
              {
                feature: "Daily session summary",
                description:
                  "A plain-English summary of what your child discussed with MEOK each day — topics, duration, emotional tone, and any notable moments. Delivered at a time you choose.",
              },
              {
                feature: "Real-time threat alerts",
                description:
                  "Push notifications for any conversation event classified HIGH or CRITICAL by the threat detector. You see the flagged excerpt, the classification reason, and recommended next steps — all within 30 seconds of detection.",
              },
              {
                feature: "Topic logs",
                description:
                  "A browsable log of every topic category discussed, grouped by day and week. You can see if your child has been asking about something repeatedly that might warrant a conversation.",
              },
              {
                feature: "Time controls",
                description:
                  "Set daily usage limits per child profile, define allowed hours (e.g. school hours only, evenings only), and receive alerts when a child is approaching their limit.",
              },
              {
                feature: "Assistance level",
                description:
                  "Choose how much MEOK helps with school work — from full Socratic mode to collaborative drafting assistance. Configurable per subject.",
              },
              {
                feature: "Age calibration override",
                description:
                  "MEOK defaults age calibration based on the child's profile age. Parents can override this — up or down — for children whose reading age or maturity differs from their chronological age.",
              },
            ].map((item) => (
              <div
                key={item.feature}
                style={{
                  marginBottom: "1.25rem",
                  paddingLeft: "1rem",
                  borderLeft: `3px solid rgba(201,168,76,0.3)`,
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    color: s.text,
                    marginBottom: "0.3rem",
                  }}
                >
                  {item.feature}
                </p>
                <p style={{ lineHeight: 1.8, color: s.muted, margin: 0 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </section>

          {/* ── Section 7 — How AI grows with the child ── */}
          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                lineHeight: 1.25,
                marginBottom: "1rem",
                color: s.text,
              }}
            >
              How does MEOK grow with a child — and what happens as they get
              older?
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              One of the most distinctive aspects of MEOK for families is what
              we call{" "}
              <strong style={{ color: s.text }}>developmental memory</strong>.
              MEOK does not just remember what your child said last week. It
              builds a longitudinal understanding of how your child thinks,
              what they find difficult, what excites them, and how their
              communication style changes over time.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              At age 7, MEOK might know that your daughter loves dinosaurs and
              struggles with reading comprehension. At age 11, it will remember
              that she loved dinosaurs — and will still draw on that when
              introducing new scientific concepts — but will now engage with her
              at a much more sophisticated level. At age 14, if she asks about
              evolutionary biology, MEOK will trace the thread from that first
              dinosaur conversation and build on it.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              This continuity of memory is possible because MEOK uses its{" "}
              <strong style={{ color: s.text }}>Sovereign Memory</strong>{" "}
              architecture — not cloud-based short-term context windows, but
              a persistent, encrypted memory graph that belongs to the child
              (and their parent) and never expires.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              As children age into their teens, the Guardian restrictions
              progressively relax — automatically, based on the age band, or
              manually adjusted by the parent. A 14-year-old has access to
              broader topics than a 9-year-old, while still maintaining the
              core safety architecture. By the time a young person turns 18,
              their MEOK profile transitions smoothly to the full adult
              experience — with every memory intact.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted }}>
              No other AI companion offers this kind of developmental continuity.
              Most reset every conversation. MEOK is the companion that grows
              up alongside your child.
            </p>
          </section>

          {/* ── Section 8 — Comparison table ── */}
          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                lineHeight: 1.25,
                marginBottom: "1.25rem",
                color: s.text,
              }}
            >
              AI for kids: how MEOK Guardian compares to the alternatives
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1.5rem" }}>
              Parents searching for safe AI for their children often encounter
              three categories of product: general AI tools (designed for adults),
              voice assistants (smart speakers with child modes), and dedicated
              companion apps (some of which have partial child features). Here
              is how they compare on the dimensions that matter for families.
            </p>
            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.85rem",
                }}
              >
                <thead>
                  <tr>
                    {["Platform", "Child-safe design", "Children's Code", "Parental dashboard", "School-safe mode", "Data ownership", "Cost"].map(
                      (h) => (
                        <th
                          key={h}
                          style={{
                            padding: "0.75rem 0.75rem",
                            textAlign: "left",
                            color: s.gold,
                            fontWeight: 700,
                            fontSize: "0.75rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            borderBottom: "1px solid rgba(201,168,76,0.2)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((row) => (
                    <tr
                      key={row.name}
                      style={{
                        background: row.highlight
                          ? "rgba(201,168,76,0.06)"
                          : "transparent",
                        borderBottom: "1px solid rgba(245,240,232,0.06)",
                      }}
                    >
                      <td
                        style={{
                          padding: "0.8rem 0.75rem",
                          fontWeight: row.highlight ? 700 : 400,
                          color: row.highlight ? s.gold : s.text,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {row.name}
                      </td>
                      <td style={{ padding: "0.8rem 0.75rem", color: row.highlight ? s.text : s.muted }}>{row.childSafe}</td>
                      <td style={{ padding: "0.8rem 0.75rem", color: row.highlight ? s.text : s.muted }}>{row.childrensCode}</td>
                      <td style={{ padding: "0.8rem 0.75rem", color: row.highlight ? s.text : s.muted }}>{row.parentalDash}</td>
                      <td style={{ padding: "0.8rem 0.75rem", color: row.highlight ? s.text : s.muted }}>{row.schoolSafe}</td>
                      <td style={{ padding: "0.8rem 0.75rem", color: row.highlight ? s.text : s.muted }}>{row.dataOwnership}</td>
                      <td style={{ padding: "0.8rem 0.75rem", color: row.highlight ? s.text : s.muted, whiteSpace: "nowrap" }}>{row.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Section 9 — Common worries ── */}
          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                lineHeight: 1.25,
                marginBottom: "1rem",
                color: s.text,
              }}
            >
              Common parental worries about AI for kids — and honest answers
            </h2>

            {[
              {
                q: "Will my child become dependent on AI for emotional support?",
                a: "Healthy dependency is different from unhealthy dependency. A child who talks to MEOK about a difficult day at school is doing something similar to journalling — processing their experience with a patient, non-judgmental listener. MEOK Guardian actively encourages children to discuss important matters with parents, teachers, and trusted adults. It does not position itself as a replacement for human relationships. The parental dashboard also surfaces any patterns that might suggest over-reliance.",
              },
              {
                q: "Can AI replace a tutor?",
                a: "For many learning tasks, MEOK is more patient and available than a private tutor — and far more affordable. But it is not a replacement for human instruction, especially for complex skills, practical subjects, or children who need specific learning support. MEOK is best understood as a supplement: always available between tutoring sessions, able to drill repetitive practice without fatigue, and equipped to explain the same concept twelve different ways until one lands.",
              },
              {
                q: "What if my child tells MEOK something that concerns me?",
                a: "This is exactly what the Guardian parental dashboard is designed for. Topic logs and daily summaries give you visibility without making your child feel surveilled. For urgent disclosures — self-harm ideation, abuse, or threat events — you receive an immediate alert. For less urgent but potentially significant conversations (e.g. a child repeatedly discussing feeling lonely at school), the daily summary will surface this pattern so you can decide whether to have a conversation.",
              },
              {
                q: "Is MEOK appropriate for very young children?",
                a: "MEOK Guardian supports children from age 5. For children under 8, the AI response style is simplified to picture-book level vocabulary and very short exchanges. Voice input (where supported) allows pre-literate children to interact naturally. The parental dashboard is particularly active at younger ages, with more frequent summaries and a lower alert threshold.",
              },
              {
                q: "Can my child access MEOK at school?",
                a: "Many UK schools are developing policies around AI tools. MEOK Guardian can be configured for school use with enhanced restrictions. The school-safe mode was specifically designed with school IT policies in mind. If a school wishes to adopt MEOK as a supported educational tool, MEOK AI LABS offers an institutional arrangement — contact us at hello@meok.ai.",
              },
            ].map((item) => (
              <div
                key={item.q}
                style={{
                  marginBottom: "2rem",
                  padding: "1.5rem",
                  background: "rgba(245,240,232,0.02)",
                  border: "1px solid rgba(245,240,232,0.07)",
                  borderRadius: "0.875rem",
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    color: s.text,
                    marginBottom: "0.6rem",
                    fontSize: "1rem",
                  }}
                >
                  {item.q}
                </p>
                <p style={{ lineHeight: 1.8, color: s.muted, margin: 0 }}>
                  {item.a}
                </p>
              </div>
            ))}
          </section>

          {/* ── Section 10 — Family Plan ── */}
          <section
            style={{
              marginBottom: "3rem",
              padding: "2.5rem",
              background: "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.03) 100%)",
              border: `1px solid rgba(201,168,76,0.25)`,
              borderRadius: "1.25rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: s.gold,
                marginBottom: "0.75rem",
              }}
            >
              MEOK FAMILY PLAN
            </p>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 900,
                color: s.text,
                marginBottom: "0.75rem",
              }}
            >
              £29/month for the whole family
            </h2>
            <p
              style={{
                color: s.muted,
                lineHeight: 1.75,
                maxWidth: "520px",
                margin: "0 auto 1.5rem",
              }}
            >
              Full Sovereign tier AI for up to two parents. Guardian-protected
              profiles for up to four children. Every safety feature, every
              educational tool, full parental dashboard. One price. No
              per-child upsells.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                gap: "0.75rem",
                marginBottom: "2rem",
                textAlign: "left",
              }}
            >
              {[
                "MEOK Guardian for all children",
                "Real-time parental alerts",
                "School-safe content mode",
                "Age-calibrated responses",
                "Daily session summaries",
                "Sovereign Memory (all profiles)",
                "Parental dashboard (iOS/Android/web)",
                "UK Children's Code compliance",
                "No child data used for training",
                "Up to 4 child profiles",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    fontSize: "0.88rem",
                    color: s.muted,
                  }}
                >
                  <span style={{ color: s.gold, flexShrink: 0 }}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Link
              href="/pricing"
              style={{
                display: "inline-block",
                padding: "0.85rem 2rem",
                background: s.gold,
                color: "#0d0c18",
                fontWeight: 800,
                fontSize: "0.95rem",
                borderRadius: "0.5rem",
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
              Start Family Plan — £29/mo
            </Link>
            <p style={{ fontSize: "0.78rem", color: s.dimmer, marginTop: "0.75rem" }}>
              14-day free trial. Cancel any time.
            </p>
          </section>

          {/* ── FAQ Section ── */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                lineHeight: 1.25,
                marginBottom: "1.5rem",
                color: s.text,
              }}
            >
              Frequently asked questions: AI for kids
            </h2>
            {[
              {
                q: "Is AI safe for kids?",
                a: "Most general-purpose AI is not. MEOK Guardian is — because it was built specifically for children, with the UK Children's Code as the design specification, not an afterthought.",
              },
              {
                q: "What is MEOK Guardian?",
                a: "MEOK Guardian is MEOK's child-safety architecture: real-time threat detection, school-safe content mode, age-calibrated responses, a parental dashboard, and data sovereignty for minors. It activates automatically for under-18 profiles.",
              },
              {
                q: "Can AI help children learn?",
                a: "Yes — when designed responsibly. MEOK's Socratic mode guides children through learning rather than completing work for them, and Sovereign Memory allows MEOK to build a longitudinal understanding of how each child learns.",
              },
              {
                q: "What parental controls does MEOK offer for children?",
                a: "Daily session summaries, real-time threat alerts, topic logs, time limits, subject restrictions, assistance level controls, and age calibration overrides — all from the parental dashboard.",
              },
              {
                q: "What does the MEOK Family Plan include?",
                a: "Sovereign tier AI for up to two parents, Guardian profiles for up to four children, full parental dashboard, and all safety features — for £29/month. No per-child upsells.",
              },
              {
                q: "How does MEOK comply with the UK Children's Code?",
                a: "Privacy by default, data minimisation, no commercial profiling of children, no nudge techniques, and a contractual prohibition on using child data for training. The ICO's 15 standards are our design spec.",
              },
            ].map((item) => (
              <div
                key={item.q}
                style={{
                  marginBottom: "1.5rem",
                  paddingBottom: "1.5rem",
                  borderBottom: "1px solid rgba(245,240,232,0.06)",
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    color: s.text,
                    marginBottom: "0.5rem",
                    fontSize: "1rem",
                  }}
                >
                  {item.q}
                </p>
                <p style={{ lineHeight: 1.8, color: s.muted, margin: 0 }}>
                  {item.a}
                </p>
              </div>
            ))}
          </section>

          {/* ── Conclusion ── */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                lineHeight: 1.25,
                marginBottom: "1rem",
                color: s.text,
              }}
            >
              The bottom line: safe AI for kids exists — but you have to choose
              it deliberately
            </h2>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              Your children will use AI. The question is whether they will use
              AI that was designed for them, or AI designed for adults that
              happens to be accessible to them. The difference is not academic —
              it is the difference between a companion that protects your child
              and one that inadvertently exposes them.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted, marginBottom: "1rem" }}>
              MEOK Guardian is the deliberate choice. It is the only AI companion
              that combines UK Children&apos;s Code compliance, real-time threat
              detection, a full parental dashboard, educational-first design, and
              sovereign memory that grows with your child from age 5 to adulthood.
            </p>
            <p style={{ lineHeight: 1.8, color: s.muted }}>
              If you are a parent who takes your child&apos;s digital wellbeing
              seriously, this is the product that was built for you. We built it
              because we could not find it anywhere else.
            </p>
          </section>

          {/* ── CTA ── */}
          <div
            style={{
              padding: "2rem",
              background: s.cardBg,
              border: `1px solid ${s.cardBorder}`,
              borderRadius: "1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: s.gold,
                margin: 0,
              }}
            >
              MEOK AI LABS — @meok_ai
            </p>
            <p style={{ fontSize: "1.1rem", fontWeight: 700, color: s.text, margin: 0 }}>
              Safe AI for your family starts here
            </p>
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Link
                href="/pricing"
                style={{
                  padding: "0.75rem 1.5rem",
                  background: s.gold,
                  color: "#0d0c18",
                  fontWeight: 700,
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                }}
              >
                Family Plan — £29/mo
              </Link>
              <Link
                href="/blog/guardian-family-safety"
                style={{
                  padding: "0.75rem 1.5rem",
                  background: "transparent",
                  color: s.gold,
                  fontWeight: 700,
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  border: `1px solid rgba(201,168,76,0.35)`,
                }}
              >
                Read: Guardian Architecture
              </Link>
            </div>
          </div>

          {/* ── Related posts ── */}
          <section style={{ marginTop: "3.5rem" }}>
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: s.dimmer,
                marginBottom: "1rem",
              }}
            >
              RELATED READING
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "0.75rem",
              }}
            >
              {[
                { href: "/blog/ai-companion-for-kids", label: "AI Companion for Kids" },
                { href: "/blog/ai-for-teens", label: "AI for Teens" },
                { href: "/blog/guardian-family-safety", label: "Guardian: Family Safety" },
                { href: "/blog/sovereign-ai-for-families", label: "Sovereign AI for Families" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    padding: "0.9rem 1rem",
                    background: "rgba(245,240,232,0.02)",
                    border: "1px solid rgba(245,240,232,0.07)",
                    borderRadius: "0.625rem",
                    textDecoration: "none",
                    color: s.muted,
                    fontSize: "0.88rem",
                    fontWeight: 500,
                    transition: "color 0.2s",
                  }}
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
