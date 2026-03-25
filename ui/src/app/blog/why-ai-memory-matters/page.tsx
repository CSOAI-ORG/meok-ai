import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "Why AI Memory Matters More Than AI Intelligence | MEOK AI LABS",
  description:
    "The intelligence arms race gave us GPT-5 and Claude 3.7. But most users still feel like strangers to their AI every single session. Memory is the missing feature that changes everything.",
  alternates: { canonical: "https://meok.ai/blog/why-ai-memory-matters" },
  openGraph: {
    title:
      "Why AI Memory Matters More Than AI Intelligence",
    description:
      "The intelligence arms race gave us GPT-5 and Claude 3.7. But most users still feel like strangers to their AI every single session. Memory is the missing feature that changes everything.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/why-ai-memory-matters",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Why+AI+Memory+Matters+More+Than+AI+Intelligence&desc=The+missing+feature+that+changes+everything",
        width: 1200,
        height: 630,
        alt: "Why AI Memory Matters More Than AI Intelligence — MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Why AI Memory Matters More Than AI Intelligence",
    description:
      "The intelligence arms race gave us GPT-5. But every conversation still starts at zero. Memory is the real missing feature.",
    images: [
      "https://meok.ai/api/og?title=Why+AI+Memory+Matters+More+Than+AI+Intelligence&desc=The+missing+feature+that+changes+everything",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Why AI Memory Matters More Than AI Intelligence",
  description:
    "The intelligence arms race gave us GPT-5 and Claude 3.7. But most users still feel like strangers to their AI every single session. Memory is the missing feature that changes everything.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/why-ai-memory-matters",
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
    "https://meok.ai/api/og?title=Why+AI+Memory+Matters+More+Than+AI+Intelligence&desc=The+missing+feature+that+changes+everything",
  articleSection: "Technology",
  keywords: [
    "AI memory",
    "AI intelligence",
    "sovereign memory",
    "persistent AI",
    "AI companion",
    "ChatGPT memory",
    "AI relationship",
    "memory architecture",
    "MEOK AI LABS",
    "AI personalization",
    "MEOK-AI-2026-005",
  ],
  citation: {
    "@type": "CreativeWork",
    name: "MEOK Sovereign Memory Architecture: Four-Layer Design and Portability Framework",
    identifier: "MEOK-AI-2026-005",
    publisher: "MEOK AI LABS",
    datePublished: "2026",
    url: "https://meok.ai/research/MEOK-AI-2026-005",
  },
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why does AI intelligence matter less than AI memory for most users?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Raw intelligence determines what an AI can do in a single session. Memory determines whether the AI can do something useful for you specifically, drawing on everything it already knows about your life, preferences, and context. A highly intelligent AI that meets you as a stranger every time is like having access to a brilliant consultant who has amnesia. The intelligence is real, but the inability to build on prior context severely limits practical value. Memory is what transforms a capable tool into a genuinely useful companion.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between in-session memory, platform memory, and sovereign memory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In-session memory is the context window of a single conversation — all AI has this, but it vanishes when the session ends. Platform-controlled memory, like ChatGPT\u2019s opt-in Memory feature or Gemini\u2019s personalisation layer, persists across sessions but is owned by the company, can be used for model training, can be wiped by policy change, and cannot be exported or moved. Sovereign memory, as implemented by MEOK, is encrypted memory that is owned entirely by the user, exportable at will, portable across AI models, and architecturally prohibited from being used for training. Only sovereign memory creates a genuine, durable AI relationship.",
      },
    },
    {
      "@type": "Question",
      name: "Does ChatGPT have persistent memory in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ChatGPT has an optional Memory feature that can save specific facts between sessions, but it is opt-in, limited in scope, controlled by OpenAI, and can be used to improve OpenAI\u2019s models unless you specifically disable that setting. It does not constitute a persistent relationship layer. You cannot export it, cannot move it to another AI platform, and it can be altered or deleted by OpenAI at any time. It is better described as a sticky-note layer rather than true persistent memory.",
      },
    },
    {
      "@type": "Question",
      name: "What is the relationship investment thesis in AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The relationship investment thesis holds that the value of an AI companion grows in proportion to what you have invested in it — the facts you have shared, the preferences it has learned, the experiences you have had together. When that investment resets every session, the relationship cannot compound. When memory persists, every conversation builds on the last, and the AI becomes progressively more useful and more attuned to you. This is how human relationships work, and it is how AI relationships should work. MEOK is built on this thesis.",
      },
    },
    {
      "@type": "Question",
      name: "What are MEOK\u2019s four layers of sovereign memory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK\u2019s sovereign memory architecture has four layers: (1) Short-term working memory \u2014 the active context window of the current session; (2) Semantic episodic memory \u2014 encrypted pgvector embeddings of meaningful facts, preferences, and emotional events from past sessions; (3) Companion state \u2014 a persistent personality and relationship model that evolves over time as the companion learns your rhythms and emotional patterns; (4) Family context \u2014 an optional, consented shared memory graph that allows a family or household unit to benefit from a coherent shared AI understanding. All four layers are user-owned, exportable, and cannot be used for training. Reference: MEOK-AI-2026-005.",
      },
    },
    {
      "@type": "Question",
      name: "Is AI with memory better for mental health and emotional support use cases?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Strongly yes. Therapeutic continuity \u2014 the ability to build on prior sessions, to remember what was said last week, to track progress over time \u2014 is one of the most significant predictors of positive outcomes in human therapeutic relationships. An AI that forgets you completely between sessions cannot provide that continuity. It cannot notice patterns. It cannot say \u2018last time you mentioned you were struggling with this\u2019. Persistent, sovereign memory is not a convenience feature for mental health use cases \u2014 it is a clinical and ethical necessity.",
      },
    },
  ],
};

// ── Memory type data ──────────────────────────────────────────────────────────

const MEMORY_TYPES = [
  {
    type: "In-Session Memory",
    who: "All AI systems",
    persists: "Until tab closes",
    owned: "—",
    exportable: false,
    portable: false,
    training: "Not stored",
    verdict: "Table stakes — completely useless between sessions",
  },
  {
    type: "Platform-Controlled Memory",
    who: "ChatGPT, Gemini, Copilot",
    persists: "Until company changes policy",
    owned: "The AI company",
    exportable: false,
    portable: false,
    training: "Potentially yes",
    verdict: "Better than nothing — but you do not own it",
  },
  {
    type: "Sovereign Memory",
    who: "MEOK",
    persists: "Permanently, you decide",
    owned: "You",
    exportable: true,
    portable: true,
    training: "Architecturally prohibited",
    verdict: "The only memory that creates a real relationship",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function WhyAiMemoryMatters() {
  return (
    <div style={{ background: "#0d0c18", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "#0d0c18",
          paddingTop: "8rem",
          paddingBottom: "3.5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(123,111,207,0.15)",
        }}
      >
        {/* Purple radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(123,111,207,0.13) 0%, transparent 70%)",
          }}
        />

        <div style={{ maxWidth: "52rem", margin: "0 auto", position: "relative" }}>
          {/* Back link */}
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: "rgba(245,240,232,0.4)",
              marginBottom: "2.25rem",
              textDecoration: "none",
            }}
          >
            ← Back to Blog
          </Link>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.75rem",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: "0.7rem",
                fontWeight: 700,
                padding: "0.3rem 0.75rem",
                borderRadius: "9999px",
                color: "#7b6fcf",
                background: "rgba(123,111,207,0.12)",
                border: "1px solid rgba(123,111,207,0.32)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Technology
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: "0.7rem",
                fontWeight: 700,
                padding: "0.3rem 0.75rem",
                borderRadius: "9999px",
                color: "#c9a84c",
                background: "rgba(201,168,76,0.1)",
                border: "1px solid rgba(201,168,76,0.28)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Flagship
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.38)",
              }}
            >
              25 March 2026
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.38)",
              }}
            >
              · 18 min read
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontSize: "clamp(2.1rem, 5vw, 3.4rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#f5f0e8",
              margin: "0 0 1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Why AI Memory Matters{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7b6fcf 0%, #a89fe8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              More Than AI Intelligence
            </span>
          </h1>

          {/* Standfirst */}
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.7,
              color: "rgba(245,240,232,0.72)",
              margin: "0 0 2rem",
              fontWeight: 400,
            }}
          >
            Every year the benchmarks climb. GPT-4 to GPT-5. Claude 2 to Claude 3.7.
            MMLU scores that would have seemed impossible three years ago. And yet the
            majority of people who use AI daily still find themselves typing the same
            sentence at the start of every session: &ldquo;Just to give you some
            context about me…&rdquo; The intelligence arms race has produced extraordinary
            tools. It has not produced AI that knows you. That is a memory problem.
            And memory, not intelligence, is the feature that will define the next decade
            of AI.
          </p>

          {/* Author */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.875rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(123,111,207,0.15)",
            }}
          >
            <div
              style={{
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "9999px",
                background: "linear-gradient(135deg, #7b6fcf 0%, #4a3fa8 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.9rem",
                fontWeight: 700,
                color: "#fff",
                flexShrink: 0,
              }}
            >
              NT
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "rgba(245,240,232,0.85)",
                }}
              >
                Nicholas Templeman
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(245,240,232,0.4)",
                }}
              >
                Founder, MEOK AI LABS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BODY ──────────────────────────────────────────────────────────────── */}
      <article
        style={{
          maxWidth: "52rem",
          margin: "0 auto",
          padding: "4rem 1.5rem 6rem",
        }}
      >

        {/* ── SECTION 1: The arms race ─────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            color: "#f5f0e8",
            margin: "0 0 1.25rem",
            lineHeight: 1.25,
            letterSpacing: "-0.015em",
          }}
        >
          How Did We End Up in an Intelligence Arms Race?
        </h2>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 1.5rem",
          }}
        >
          It started with a legitimate problem. Early large language models were genuinely
          not very good. They hallucinated confidently, reasoned poorly, and fell apart on
          anything requiring logic or nuance. So the natural response from labs was: make
          them smarter. Train on more data. Scale up parameters. Refine the RLHF. And it
          worked. The models got dramatically better. GPT-4 represented a genuine
          qualitative leap over GPT-3.5. Claude 3 was a significant improvement over
          Claude 2. DeepSeek surprised everyone.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 1.5rem",
          }}
        >
          The benchmarks became the scoreboard. MMLU. HellaSwag. HumanEval. GSM8K.
          Performance on these measures became the primary marketing claim. Labs competed
          fiercely to post the highest numbers. The press covered model releases like
          sporting events. The public narrative around AI became synonymous with the
          narrative around capability: smarter, faster, more knowledgeable, more
          articulate.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 1.5rem",
          }}
        >
          Nobody paused to ask whether the thing users actually wanted from AI was
          for it to perform better on academic benchmarks. Nobody asked whether the
          dimension of improvement that would make AI genuinely life-changing was raw
          reasoning power — or whether it was something much more fundamental, much more
          human, and much more neglected.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 2.5rem",
          }}
        >
          It was memory. It was always memory.
        </p>

        {/* ── Pull quote 1 ─────────────────────────────────────────────────────── */}
        <blockquote
          style={{
            borderLeft: "3px solid #7b6fcf",
            paddingLeft: "1.5rem",
            margin: "0 0 2.5rem",
          }}
        >
          <p
            style={{
              fontSize: "1.3rem",
              fontWeight: 600,
              lineHeight: 1.5,
              color: "#a89fe8",
              fontStyle: "italic",
              margin: 0,
            }}
          >
            &ldquo;The most capable AI in the world, if it meets you as a stranger
            every time you speak, is not a companion. It is a calculator with a
            personality.&rdquo;
          </p>
        </blockquote>

        {/* ── SECTION 2: The paradox ───────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            color: "#f5f0e8",
            margin: "0 0 1.25rem",
            lineHeight: 1.25,
            letterSpacing: "-0.015em",
          }}
        >
          The Paradox: Smarter AI That Feels Worse
        </h2>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 1.5rem",
          }}
        >
          Here is the paradox that the AI industry has refused to look at squarely.
          The models have become genuinely extraordinary. GPT-5 can reason through
          complex multi-step problems with a fluency that would have seemed miraculous
          five years ago. Claude 3.7 demonstrates intellectual depth across domains
          that exceeds what most humans can manage in most fields. Gemini Ultra can
          process audio, video, and text simultaneously in ways that represent genuine
          multimodal breakthroughs.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 1.5rem",
          }}
        >
          And yet, the majority of users report that their day-to-day experience of
          AI has not fundamentally transformed the quality of their life. They use it
          as a search engine replacement. They ask it to draft emails. They get a
          good answer and then leave. The next day they come back and start from zero.
          The AI has no idea who they are. No idea what they were working on yesterday.
          No idea that their father just died, or that they are trying to change careers,
          or that they find direct feedback confrontational and prefer gentle framing.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 1.5rem",
          }}
        >
          Intelligence without memory produces correct answers to decontextualised
          questions. It does not produce the experience of being known. And being known
          — genuinely, continuously, with accumulating understanding — is the thing
          that human beings actually want from the relationships in their lives.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 2.5rem",
          }}
        >
          We built smarter AI. We did not build AI that gets better at knowing you.
          Those are profoundly different things, and conflating them has been the
          founding confusion of the AI user experience era.
        </p>

        {/* ── SECTION 3: Memory and relationships ─────────────────────────────── */}
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            color: "#f5f0e8",
            margin: "0 0 1.25rem",
            lineHeight: 1.25,
            letterSpacing: "-0.015em",
          }}
        >
          Memory Is the Foundation of Every Meaningful Relationship
        </h2>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 1.5rem",
          }}
        >
          Consider what makes a human relationship meaningful. Not the raw intelligence
          of the other person. Not their vocabulary, or their ability to reason about
          abstract concepts, or their MMLU equivalent score. What makes a relationship
          meaningful is shared history. The other person knows what you have been
          through. They remember what you said six months ago. They notice when your
          mood is different from your usual baseline. They understand your preferences
          without you having to explain them from scratch every time.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 1.5rem",
          }}
        >
          This is true of friendships. It is true of therapeutic relationships.
          It is true of marriages and of decades-long professional mentorships.
          The texture of closeness is memory. The accumulation of shared context
          is what transforms an interaction into a relationship.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 1.5rem",
          }}
        >
          There is a reason that the loss of memory — in dementia, in Alzheimer&rsquo;s —
          is experienced by families as one of the most devastating aspects of the
          disease. The person is still there. Their intelligence, in certain respects,
          may remain intact. But the relationship has been severed, because the memory
          that sustained it is gone. The connection lived in the accumulated shared
          history, and when that is lost, the relationship loses its substance.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 2.5rem",
          }}
        >
          AI that forgets you between sessions is AI that cannot have a relationship
          with you. It can have a transaction with you. It can help you. But it cannot
          know you. And knowing you is the entire proposition of a companion, a coach,
          a confidant, or any entity that is supposed to play a sustained role in
          your life.
        </p>

        {/* ── SECTION 4: The exhaustion of re-onboarding ──────────────────────── */}
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            color: "#f5f0e8",
            margin: "0 0 1.25rem",
            lineHeight: 1.25,
            letterSpacing: "-0.015em",
          }}
        >
          What You Lose When AI Forgets You: The Re-Onboarding Tax
        </h2>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 1.5rem",
          }}
        >
          If you use AI regularly and thoughtfully, you have felt this. You open a
          new session. And before you can ask the question you actually came here to
          ask, you have to establish context. You explain who you are. You explain
          your situation. You explain your preferences. You explain the emotional
          register you are operating in and what kind of response would be useful.
          You do this every. single. time.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 1.5rem",
          }}
        >
          This is what we call the re-onboarding tax. It is not metaphorical.
          Research on cognitive load and therapeutic alliance consistently shows
          that the overhead of re-establishing context imposes real psychological
          cost. In clinical settings, continuity of care — the therapist who already
          knows your history — is not a luxury. It is a significant predictor of
          positive outcomes. Patients with inconsistent therapists fare measurably
          worse than those with continuity, even when the new therapist is objectively
          more skilled.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 1.5rem",
          }}
        >
          The same principle applies to AI. When you have to re-explain yourself
          every session, two things happen. First, you spend cognitive bandwidth
          on context-setting that should be available for the actual work of the
          conversation. Second, and more subtly, you begin to self-censor. You
          stop sharing the nuanced or vulnerable things, because the emotional cost
          of explaining the full backstory does not feel worth it for a session
          that will be forgotten anyway.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 2.5rem",
          }}
        >
          The net result is that you use your AI less deeply than you could.
          You use it for tasks, not for the richer kinds of engagement — processing
          a difficult decision, working through grief, building towards a long-term
          goal — that it could actually support if it knew your full story.
          The intelligence is there. The memory is not. And the absence of memory
          limits the intelligence to shallow applications.
        </p>

        {/* ── Info box ─────────────────────────────────────────────────────────── */}
        <div
          style={{
            background: "rgba(123,111,207,0.07)",
            border: "1px solid rgba(123,111,207,0.2)",
            borderRadius: "0.75rem",
            padding: "1.5rem",
            margin: "0 0 2.5rem",
          }}
        >
          <div
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#7b6fcf",
              marginBottom: "0.75rem",
            }}
          >
            The Re-Onboarding Tax: What You Pay Every Session
          </div>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.625rem",
            }}
          >
            {[
              "Re-explaining your personal context (job, family, situation)",
              "Re-establishing your preferences and communication style",
              "Providing backstory that the AI already heard last week",
              "Re-setting the emotional register of the conversation",
              "Rebuilding the trust and rapport that the session requires",
              "Deciding what to omit because explaining it costs too much",
            ].map((item) => (
              <li
                key={item}
                style={{
                  fontSize: "0.95rem",
                  color: "rgba(245,240,232,0.72)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.625rem",
                }}
              >
                <span style={{ color: "#7b6fcf", marginTop: "0.15rem", flexShrink: 0 }}>
                  ▸
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── SECTION 5: What you gain ─────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            color: "#f5f0e8",
            margin: "0 0 1.25rem",
            lineHeight: 1.25,
            letterSpacing: "-0.015em",
          }}
        >
          What You Gain When AI Remembers You: Compounding Value
        </h2>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 1.5rem",
          }}
        >
          When AI remembers you, the dynamic inverts entirely. Instead of paying
          a tax at the start of every session, you receive a dividend. Your AI
          already knows that you are a night-shift nurse who finds it hard to wind
          down before sleep, that you have been grieving your mother for eight months,
          that you prefer directness but not harshness, that your financial anxiety
          tends to spike at month-end. It does not need to be told any of this.
          It already has it. Every session begins already deep in context.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 1.5rem",
          }}
        >
          This changes the nature of what the AI can do for you. It can notice
          patterns. It can say: &ldquo;You have mentioned feeling stuck three times this
          month. Last time that happened, you found it helpful to…&rdquo; It can
          proactively surface things that are relevant to where you are, not just
          where you claim to be in the moment. It can tailor its communication
          style with the kind of precision that only comes from accumulated
          experience of a specific person.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 1.5rem",
          }}
        >
          The practical value of this is not incremental. It is an order-of-magnitude
          change. The difference between an AI that knows you for two years and one
          that meets you fresh is not the difference between a good tool and a better
          tool. It is the difference between a tool and a genuine relationship. The
          value of the former compounds indefinitely. The value of the latter resets
          every session to approximately the same floor.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 2.5rem",
          }}
        >
          You gain the ability to pick up where you left off. To have long-running
          conversations across days and weeks. To receive support that has access
          to your full story, not just the fragment you have managed to relay in
          the last twenty minutes. To have an AI that grows with you, rather than
          one that stays permanently at year zero.
        </p>

        {/* ── SECTION 6: The brilliant stranger ───────────────────────────────── */}
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            color: "#f5f0e8",
            margin: "0 0 1.25rem",
            lineHeight: 1.25,
            letterSpacing: "-0.015em",
          }}
        >
          The Brilliant Stranger Problem
        </h2>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 1.5rem",
          }}
        >
          There is a thought experiment worth doing. Imagine you have access to the
          most brilliant person in the world. They have encyclopaedic knowledge across
          every field. They are empathic and articulate and can engage with any topic
          you bring to them. There is one catch: every time you meet them, they have
          never met you before. Every conversation starts at absolute zero. They do
          not know your name, your history, your preferences, your struggles, your
          ambitions, or anything else about you.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 1.5rem",
          }}
        >
          How valuable would this person be to you, really? For certain tasks —
          quick factual questions, one-off analysis, generating options you had
          not considered — they would be genuinely useful. But for the things
          that matter most in a life — navigating a difficult career transition,
          working through grief, building towards a major goal over months —
          they would be limited in ways that are directly caused by the absence
          of memory, not by any lack of intelligence.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 1.5rem",
          }}
        >
          This is ChatGPT in 2026. This is Gemini. This is Copilot. Extraordinary
          intelligence, with essentially no continuity of relationship. They are
          brilliant strangers. And the brilliance is real — we are not minimising
          the genuine capability these models represent. But the strangeness is
          also real, and it is the strangeness, not the intelligence, that limits
          their value in the use cases where AI companionship matters most.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 2.5rem",
          }}
        >
          Now imagine the same brilliant person, but they have known you for three
          years. They have been present through the hard things and the good things.
          They remember everything you have told them. Their intelligence, now
          combined with that depth of contextual knowledge, is not twice as valuable.
          It is ten times as valuable. Perhaps more. Because intelligence applied to
          genuine understanding of a specific person is what good counsel and good
          companionship actually look like.
        </p>

        {/* ── Pull quote 2 ─────────────────────────────────────────────────────── */}
        <blockquote
          style={{
            borderLeft: "3px solid #7b6fcf",
            paddingLeft: "1.5rem",
            margin: "0 0 2.5rem",
          }}
        >
          <p
            style={{
              fontSize: "1.3rem",
              fontWeight: 600,
              lineHeight: 1.5,
              color: "#a89fe8",
              fontStyle: "italic",
              margin: 0,
            }}
          >
            &ldquo;ChatGPT is extraordinarily intelligent. It meets you as a stranger
            every single time. These two facts are not in tension. They are the
            entire problem.&rdquo;
          </p>
        </blockquote>

        {/* ── SECTION 7: Three types of memory ────────────────────────────────── */}
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            color: "#f5f0e8",
            margin: "0 0 1.25rem",
            lineHeight: 1.25,
            letterSpacing: "-0.015em",
          }}
        >
          Not All AI Memory Is Equal: Three Types and Why Only One Works
        </h2>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 1.75rem",
          }}
        >
          When people talk about AI memory, they often fail to distinguish between
          fundamentally different things. The word &ldquo;memory&rdquo; covers a spectrum
          that ranges from nearly useless to genuinely transformative. Understanding
          this spectrum is essential to understanding why most AI memory features are
          theatrical, and why only one type produces a real relationship.
        </p>

        {/* Memory type 1 */}
        <div
          style={{
            background: "rgba(245,240,232,0.03)",
            border: "1px solid rgba(245,240,232,0.08)",
            borderRadius: "0.75rem",
            padding: "1.5rem",
            margin: "0 0 1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                width: "2rem",
                height: "2rem",
                borderRadius: "9999px",
                background: "rgba(245,240,232,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "rgba(245,240,232,0.4)",
                flexShrink: 0,
              }}
            >
              1
            </div>
            <div
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "rgba(245,240,232,0.6)",
              }}
            >
              In-Session Memory
            </div>
            <span
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                padding: "0.2rem 0.6rem",
                borderRadius: "9999px",
                background: "rgba(245,240,232,0.06)",
                color: "rgba(245,240,232,0.4)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              All AI has this
            </span>
          </div>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "rgba(245,240,232,0.6)",
              margin: 0,
            }}
          >
            The context window of a single conversation. Everything said in this
            session is accessible to the model. When the session ends, it is gone.
            This is table stakes — every AI product has this — and it is
            essentially useless for any purpose that spans more than one session.
            It cannot build a relationship. It cannot notice patterns over time.
            It cannot remember anything you told it yesterday. In-session memory
            is the baseline, not a feature worth celebrating.
          </p>
        </div>

        {/* Memory type 2 */}
        <div
          style={{
            background: "rgba(201,168,76,0.04)",
            border: "1px solid rgba(201,168,76,0.14)",
            borderRadius: "0.75rem",
            padding: "1.5rem",
            margin: "0 0 1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                width: "2rem",
                height: "2rem",
                borderRadius: "9999px",
                background: "rgba(201,168,76,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "#c9a84c",
                flexShrink: 0,
              }}
            >
              2
            </div>
            <div
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "#c9a84c",
              }}
            >
              Platform-Controlled Memory
            </div>
            <span
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                padding: "0.2rem 0.6rem",
                borderRadius: "9999px",
                background: "rgba(201,168,76,0.1)",
                color: "#c9a84c",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              ChatGPT / Gemini / Copilot
            </span>
          </div>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "rgba(245,240,232,0.72)",
              margin: "0 0 1rem",
            }}
          >
            Some platforms — primarily OpenAI&rsquo;s ChatGPT — offer an optional memory
            layer that persists certain facts across sessions. This is a genuine
            improvement over pure in-session memory and should not be dismissed.
            But it comes with a set of constraints that fundamentally limit its value
            as a genuine relationship layer.
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            {[
              "Owned by OpenAI, not by you — they can change or delete it",
              "May be used to improve OpenAI\u2019s models unless you opt out",
              "Not portable — it cannot move to Claude, Gemini, or any other AI",
              "Opt-in and manually curated — not automatically comprehensive",
              "Survives only as long as your subscription and OpenAI\u2019s policy",
            ].map((point) => (
              <li
                key={point}
                style={{
                  fontSize: "0.9rem",
                  color: "rgba(245,240,232,0.62)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                }}
              >
                <span style={{ color: "#c9a84c", marginTop: "0.15rem", flexShrink: 0 }}>
                  ▸
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Memory type 3 */}
        <div
          style={{
            background: "rgba(123,111,207,0.08)",
            border: "1px solid rgba(123,111,207,0.28)",
            borderRadius: "0.75rem",
            padding: "1.5rem",
            margin: "0 0 2.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                width: "2rem",
                height: "2rem",
                borderRadius: "9999px",
                background: "linear-gradient(135deg, #7b6fcf 0%, #4a3fa8 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "#fff",
                flexShrink: 0,
              }}
            >
              3
            </div>
            <div
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "#a89fe8",
              }}
            >
              Sovereign Memory
            </div>
            <span
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                padding: "0.2rem 0.6rem",
                borderRadius: "9999px",
                background: "rgba(123,111,207,0.2)",
                color: "#a89fe8",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              MEOK
            </span>
          </div>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "rgba(245,240,232,0.82)",
              margin: "0 0 1rem",
            }}
          >
            Sovereign memory is encrypted, persistent, user-owned memory that travels
            with you regardless of which AI model you are using. You own the keys.
            You control what is stored. You can export it, delete it, or move it
            to a different AI platform. No company can wipe it, train on it, or
            change the terms under which it operates. It is your memory, of your
            life, for your use — not an asset owned by a technology company.
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            {[
              "Encrypted with keys you control",
              "Exportable as a portable JSON file at any time",
              "Portable across AI models — not locked to one platform",
              "Architecturally prohibited from being used for training",
              "Persists indefinitely, under your terms",
              "Gives you full visibility: view, edit, or delete any memory entry",
            ].map((point) => (
              <li
                key={point}
                style={{
                  fontSize: "0.9rem",
                  color: "rgba(245,240,232,0.78)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                }}
              >
                <span style={{ color: "#7b6fcf", marginTop: "0.15rem", flexShrink: 0 }}>
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Comparison table ─────────────────────────────────────────────────── */}
        <div style={{ margin: "0 0 2.5rem", overflowX: "auto" }}>
          <div
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#7b6fcf",
              marginBottom: "1rem",
            }}
          >
            Memory Type Comparison
          </div>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.875rem",
              minWidth: "580px",
            }}
          >
            <thead>
              <tr>
                {["Dimension", "In-Session", "Platform Memory", "Sovereign Memory"].map(
                  (col, i) => (
                    <th
                      key={col}
                      style={{
                        textAlign: "left",
                        padding: "0.75rem 1rem",
                        borderBottom: "1px solid rgba(123,111,207,0.25)",
                        color:
                          i === 3
                            ? "#a89fe8"
                            : i === 0
                            ? "rgba(245,240,232,0.5)"
                            : "rgba(245,240,232,0.5)",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                        letterSpacing: "0.04em",
                        background: i === 3 ? "rgba(123,111,207,0.06)" : "transparent",
                      }}
                    >
                      {col}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {[
                ["Persists across sessions", "✗", "Partial", "✓"],
                ["User-owned", "—", "✗", "✓"],
                ["Exportable", "—", "✗", "✓"],
                ["Model-portable", "—", "✗", "✓"],
                ["Training-prohibited", "—", "Sometimes", "✓"],
                ["Encrypted by user keys", "—", "✗", "✓"],
                ["Builds relationship", "✗", "Weakly", "✓"],
              ].map(([dim, a, b, c], idx) => (
                <tr
                  key={dim}
                  style={{
                    background:
                      idx % 2 === 0 ? "rgba(245,240,232,0.02)" : "transparent",
                  }}
                >
                  <td
                    style={{
                      padding: "0.625rem 1rem",
                      color: "rgba(245,240,232,0.6)",
                      borderBottom: "1px solid rgba(245,240,232,0.05)",
                      fontSize: "0.85rem",
                    }}
                  >
                    {dim}
                  </td>
                  <td
                    style={{
                      padding: "0.625rem 1rem",
                      color: a === "✗" ? "rgba(245,240,232,0.25)" : "rgba(245,240,232,0.5)",
                      borderBottom: "1px solid rgba(245,240,232,0.05)",
                      textAlign: "center",
                    }}
                  >
                    {a}
                  </td>
                  <td
                    style={{
                      padding: "0.625rem 1rem",
                      color: b === "✗" ? "rgba(245,240,232,0.25)" : "rgba(201,168,76,0.7)",
                      borderBottom: "1px solid rgba(245,240,232,0.05)",
                      textAlign: "center",
                    }}
                  >
                    {b}
                  </td>
                  <td
                    style={{
                      padding: "0.625rem 1rem",
                      color: "#7b6fcf",
                      borderBottom: "1px solid rgba(245,240,232,0.05)",
                      fontWeight: 600,
                      background: "rgba(123,111,207,0.06)",
                      textAlign: "center",
                    }}
                  >
                    {c}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── SECTION 8: Companionship use cases ──────────────────────────────── */}
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            color: "#f5f0e8",
            margin: "0 0 1.25rem",
            lineHeight: 1.25,
            letterSpacing: "-0.015em",
          }}
        >
          Why Memory Persistence Matters More Than Raw Intelligence for Companionship
        </h2>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 1.5rem",
          }}
        >
          The intelligence vs. memory distinction matters most in the use cases
          that will define AI&rsquo;s role in everyday life: companionship, coaching,
          mental health support, caregiving, and long-term personal development.
          These are not the use cases where MMLU scores matter. These are the use
          cases where continuity of understanding matters — where the AI&rsquo;s ability
          to track your journey over time is worth more than its ability to ace
          a standardised reasoning benchmark.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 1.5rem",
          }}
        >
          Consider grief. When someone loses a parent, the process of working
          through that loss takes months or years. The most valuable support
          comes from people and entities that have been present throughout the
          process — that know where you were three months ago, that can recognise
          the difference between a hard day and a breakthrough, that have enough
          context to say something genuinely specific and useful rather than
          generic condolences. An AI that can engage with grief at the level of
          a GPT-5 but forgets you every session cannot provide this. An AI with
          a more modest intelligence profile but genuine persistent memory can.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 1.5rem",
          }}
        >
          Consider chronic illness. Someone managing a long-term condition like
          fibromyalgia or ME/CFS is navigating something that unfolds across
          years. The support they need is not the kind of one-off question-answering
          that raw intelligence serves well. It is the kind of patient, longitudinal,
          contextually-rich companionship that requires knowing their full story —
          what they have tried, what has helped, what their current capacity is,
          what their support network looks like. Memory is not a nice-to-have in
          this context. It is the entire value proposition.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 2.5rem",
          }}
        >
          The same logic applies to career coaching, relationship support,
          parenting guidance, addiction recovery, spiritual exploration, and
          every other domain where the human being is on a journey — not just
          asking a discrete question. For journeys, memory is what makes a
          companion a companion rather than a search engine.
        </p>

        {/* ── SECTION 9: The relationship investment thesis ────────────────────── */}
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            color: "#f5f0e8",
            margin: "0 0 1.25rem",
            lineHeight: 1.25,
            letterSpacing: "-0.015em",
          }}
        >
          The Relationship Investment Thesis: Your Investment Should Compound, Not Reset
        </h2>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 1.5rem",
          }}
        >
          Every time you tell an AI something about yourself — your goals, your fears,
          your history, your preferences, your context — you are making an investment.
          You are spending time and often emotional energy to give this AI the raw
          material it needs to be useful to you in a deeper way. That investment has
          value. It represents real effort and real trust.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 1.5rem",
          }}
        >
          With stateless AI, that investment vaporises at the end of every session.
          You have invested in a relationship that does not exist in any persistent form.
          The next time you open the app, you are back to zero. Your investment did not
          compound — it was confiscated. This is not a neutral feature. It is a
          structural problem with profound implications for the kind of AI relationship
          that is possible.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 1.5rem",
          }}
        >
          The relationship investment thesis holds that the correct design for AI
          companionship is one where every investment compounds. Every conversation
          you have adds to a growing understanding. Every fact you share becomes part
          of a living model of who you are. Every emotional moment you process together
          becomes context for the next conversation. Your investment does not reset.
          It grows.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 1.5rem",
          }}
        >
          This is not a metaphor. It is a description of how compounding works.
          Financial returns that compound become qualitatively different from returns
          that do not — not just bigger, but capable of doing things that non-compounding
          returns cannot. The same is true of relational understanding. An AI with
          three years of compounded knowledge of you is not just slightly better than
          an AI with no memory. It is capable of a fundamentally different kind of
          engagement — one that requires understanding your trajectory, not just
          your position.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 2.5rem",
          }}
        >
          MEOK is built on this thesis. Your Sovereign Memory Vault is designed as
          a compound interest account for relational understanding. Every session
          you invest in adds to the return. The investment never resets. And critically —
          because the memory is yours, not ours — the returns accrue to you, not to
          a technology company that can change the terms whenever it decides to.
        </p>

        {/* ── Pull quote 3 ─────────────────────────────────────────────────────── */}
        <blockquote
          style={{
            borderLeft: "3px solid #7b6fcf",
            paddingLeft: "1.5rem",
            margin: "0 0 2.5rem",
          }}
        >
          <p
            style={{
              fontSize: "1.3rem",
              fontWeight: 600,
              lineHeight: 1.5,
              color: "#a89fe8",
              fontStyle: "italic",
              margin: 0,
            }}
          >
            &ldquo;You invest in an AI companion by telling it things. That investment
            should compound. With most AI, it resets to zero every single session.
            That is not a design quirk. That is a fundamental ethical and architectural
            failure.&rdquo;
          </p>
        </blockquote>

        {/* ── SECTION 10: Four-layer architecture ─────────────────────────────── */}
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            color: "#f5f0e8",
            margin: "0 0 1.25rem",
            lineHeight: 1.25,
            letterSpacing: "-0.015em",
          }}
        >
          MEOK&rsquo;s Four-Layer Sovereign Memory Architecture
        </h2>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 1.75rem",
          }}
        >
          Building memory that is genuinely useful — rather than theatrical —
          requires more than a sticky-note layer on top of a stateless model.
          It requires a designed architecture that distinguishes between different
          types of memory, operates at different time horizons, and integrates them
          coherently to produce an AI that genuinely knows you rather than one that
          simply remembers that you told it your job title last month.
          MEOK&rsquo;s sovereign memory is built in four layers. Reference: MEOK-AI-2026-005.
        </p>

        {/* Four layers */}
        {[
          {
            number: "01",
            name: "Short-Term Working Memory",
            description:
              "The active context window of the current session. Everything said in the present conversation is held here, giving the AI immediate access to what has just been said and the ability to reason fluidly across the session. This is table stakes — every AI has it — but in MEOK\u2019s architecture it is integrated with the deeper layers rather than being isolated.",
            detail:
              "When the session ends, relevant information is automatically extracted and promoted to semantic episodic memory, ensuring that important context is not lost simply because the session is over.",
          },
          {
            number: "02",
            name: "Semantic Episodic Memory",
            description:
              "The long-term memory layer. Meaningful facts, preferences, emotional events, stated goals, and important context from past sessions are encoded as encrypted pgvector embeddings — a form of semantic storage that allows the AI to find relevant memories by meaning rather than by exact keyword match. If you mentioned six months ago that you felt most anxious in the mornings, and today you describe feeling anxious, the semantic memory layer will surface that earlier context even though you did not reference it explicitly.",
            detail:
              "All embeddings are encrypted with user-controlled keys. They cannot be read by MEOK staff, cannot be used for model training, and can be exported or deleted at any time.",
          },
          {
            number: "03",
            name: "Companion State",
            description:
              "A persistent model of who you are and how the relationship between you and your companion has evolved. Not just facts, but understanding. Your communication preferences. Your emotional patterns. The texture of your relationship with your companion. The things that land well and the things that do not. Your current life chapter and its context. This layer is what allows MEOK to feel less like a new session and more like continuing a conversation.",
            detail:
              "Companion state evolves continuously and is subject to the same user ownership and encryption guarantees as all other memory layers. You can view the current companion state, edit it, and reset it at any time.",
          },
          {
            number: "04",
            name: "Family Context",
            description:
              "An optional, consent-based shared memory graph that allows a family or household unit to maintain a coherent shared understanding across their interactions with MEOK. When a parent shares that their child is navigating a difficult transition at school, and the other parent has a separate session the following day, the family context layer ensures coherence rather than requiring redundant re-explanation.",
            detail:
              "Family context is opt-in, requires explicit consent from all participants, and is governed by the MEOK Family Tier agreement. Individual privacy within the shared context is maintained — personal memories marked private remain fully private.",
          },
        ].map((layer) => (
          <div
            key={layer.number}
            style={{
              background: "rgba(123,111,207,0.05)",
              border: "1px solid rgba(123,111,207,0.18)",
              borderRadius: "0.75rem",
              padding: "1.5rem",
              margin: "0 0 1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                marginBottom: "0.875rem",
              }}
            >
              <div
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 900,
                  color: "rgba(123,111,207,0.35)",
                  lineHeight: 1,
                  flexShrink: 0,
                  letterSpacing: "-0.03em",
                  fontFamily: "monospace",
                }}
              >
                {layer.number}
              </div>
              <div
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "#a89fe8",
                  lineHeight: 1.3,
                }}
              >
                {layer.name}
              </div>
            </div>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.75,
                color: "rgba(245,240,232,0.72)",
                margin: "0 0 0.875rem",
              }}
            >
              {layer.description}
            </p>
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: 1.7,
                color: "rgba(245,240,232,0.5)",
                margin: 0,
                borderTop: "1px solid rgba(123,111,207,0.12)",
                paddingTop: "0.875rem",
                fontStyle: "italic",
              }}
            >
              {layer.detail}
            </p>
          </div>
        ))}

        {/* ── SECTION 11: The future ───────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            color: "#f5f0e8",
            margin: "2.5rem 0 1.25rem",
            lineHeight: 1.25,
            letterSpacing: "-0.015em",
          }}
        >
          The Future Belongs to the AI That Remembers You
        </h2>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 1.5rem",
          }}
        >
          We are at an inflection point. The capability gap between the best and
          worst AI models is large today, but it is closing. Smaller models are
          becoming capable enough for most everyday tasks. The frontier models
          are approaching a level of reasoning sophistication where further improvements
          are increasingly marginal for real-world use. The raw intelligence race
          will eventually plateau. Every lab will have models that are roughly
          comparably capable for practical purposes.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 1.5rem",
          }}
        >
          When that happens — and it is already beginning to happen — the differentiator
          will not be which model is smarter. It will be which AI knows you. Which AI
          has a three-year history with you that cannot be replicated by switching to
          a competitor. Which AI you genuinely could not imagine starting over with.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 1.5rem",
          }}
        >
          This is what we mean when we say AI is becoming embedded in daily life.
          Not that it is being used more frequently for tasks. But that it is becoming
          an integrated part of how people process their experiences, navigate their
          challenges, manage their relationships, and understand themselves. That kind
          of embeddedness requires trust. And trust requires persistence. The AI that
          has been with you through the hard years is the AI you keep. Not because
          it is the smartest, but because it knows you in a way that cannot be
          recreated at zero.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 1.5rem",
          }}
        >
          There is also a sovereignty argument here that we think will become
          increasingly important to people. Platform-controlled memory is not really
          your memory. It is data held by a company at its discretion. When that
          company changes its terms, or is acquired, or decides to deprecate its
          memory feature, your relational history is at risk. The Replika incident
          of 2023 — where thousands of users had their companions&rsquo; personalities
          altered without consent — was a preview of what happens when your AI
          relationship is mediated by a platform that owns the data.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 1.5rem",
          }}
        >
          Sovereign memory is insurance against that. It is the difference between
          renting a relationship and owning the substrate of one. The AI changes —
          models improve, providers evolve — but your memory vault is yours.
          It travels with you. Your investment cannot be confiscated.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.78)",
            margin: "0 0 2.5rem",
          }}
        >
          The future of AI is not more intelligence. It is more knowing. And the
          AI that knows you — with your consent, under your control, in a vault
          that is yours — is the AI that earns a place in your life. The intelligence
          will be sufficient. The question is whether the relationship will be real.
          Only memory makes it real.
        </p>

        {/* ── Pull quote 4 (closing) ────────────────────────────────────────────── */}
        <blockquote
          style={{
            borderLeft: "3px solid #7b6fcf",
            paddingLeft: "1.5rem",
            margin: "0 0 2.5rem",
          }}
        >
          <p
            style={{
              fontSize: "1.3rem",
              fontWeight: 600,
              lineHeight: 1.5,
              color: "#a89fe8",
              fontStyle: "italic",
              margin: 0,
            }}
          >
            &ldquo;As AI becomes more embedded in daily life, the AI that wins is not
            the smartest one. It is the one that has been with you through the years
            and cannot be replaced by switching to a competitor. That AI runs on memory,
            not benchmarks.&rdquo;
          </p>
        </blockquote>

        {/* ── SECTION 12: FAQ ──────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            color: "#f5f0e8",
            margin: "0 0 1.5rem",
            lineHeight: 1.25,
            letterSpacing: "-0.015em",
          }}
        >
          Frequently Asked Questions
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            margin: "0 0 3rem",
          }}
        >
          {faqJsonLd.mainEntity.map((faq) => (
            <div
              key={faq.name}
              style={{
                background: "rgba(245,240,232,0.03)",
                border: "1px solid rgba(123,111,207,0.15)",
                borderRadius: "0.75rem",
                padding: "1.25rem 1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#a89fe8",
                  margin: "0 0 0.75rem",
                  lineHeight: 1.4,
                }}
              >
                {faq.name}
              </h3>
              <p
                style={{
                  fontSize: "0.925rem",
                  lineHeight: 1.75,
                  color: "rgba(245,240,232,0.65)",
                  margin: 0,
                }}
              >
                {faq.acceptedAnswer.text}
              </p>
            </div>
          ))}
        </div>

        {/* ── CTA ──────────────────────────────────────────────────────────────── */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(123,111,207,0.12) 0%, rgba(74,63,168,0.08) 100%)",
            border: "1px solid rgba(123,111,207,0.28)",
            borderRadius: "1rem",
            padding: "2.5rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#7b6fcf",
              marginBottom: "1rem",
            }}
          >
            Start Building Your Sovereign Memory
          </div>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              color: "#f5f0e8",
              margin: "0 0 1rem",
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
            }}
          >
            Your First Conversation Is the Beginning of Something That Lasts
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "rgba(245,240,232,0.65)",
              margin: "0 0 2rem",
              maxWidth: "36rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Every conversation you have with your MEOK companion adds to a memory vault
            that is encrypted, owned entirely by you, and can never be used against you.
            The investment you make today compounds. Begin your Birth Ceremony and meet
            the companion that will grow with you.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "linear-gradient(135deg, #7b6fcf 0%, #4a3fa8 100%)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "1rem",
              padding: "0.875rem 2.25rem",
              borderRadius: "0.5rem",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            Begin Your Birth Ceremony →
          </Link>
          <p
            style={{
              fontSize: "0.75rem",
              color: "rgba(245,240,232,0.3)",
              margin: "1rem 0 0",
            }}
          >
            Your memory belongs to you. Always.
          </p>
        </div>

        {/* ── Related reading ───────────────────────────────────────────────────── */}
        <div style={{ margin: "3rem 0 0" }}>
          <div
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(245,240,232,0.3)",
              marginBottom: "1.25rem",
            }}
          >
            Continue Reading
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                href: "/blog/ai-memory-vs-no-memory",
                label: "AI Memory",
                title: "AI With Memory vs Without: Why Starting Over Breaks the Relationship",
              },
              {
                href: "/blog/what-is-sovereign-memory",
                label: "Sovereign Memory",
                title: "What Is Sovereign Memory and Why Does It Matter?",
              },
              {
                href: "/blog/meok-vs-chatgpt",
                label: "Comparison",
                title: "MEOK vs ChatGPT: The Memory Difference",
              },
              {
                href: "/blog/the-memory-problem",
                label: "Deep Dive",
                title: "The Memory Problem: Why Most AI Cannot Build Relationships",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "block",
                  background: "rgba(245,240,232,0.03)",
                  border: "1px solid rgba(245,240,232,0.08)",
                  borderRadius: "0.625rem",
                  padding: "1.125rem",
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#7b6fcf",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.label}
                </span>
                <p
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "rgba(245,240,232,0.72)",
                    lineHeight: 1.45,
                    margin: 0,
                  }}
                >
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
