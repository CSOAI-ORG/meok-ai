import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "MEOK vs ChatGPT: Why a Sovereign Companion Is Not a Better Chatbot | MEOK Blog",
  description:
    "ChatGPT is a tool you use. MEOK is a companion that knows you. This is not a feature comparison \u2014 it is a fundamental difference in what AI is for. Here is the honest breakdown.",
  alternates: {
    canonical: "https://meok.ai/blog/meok-vs-chatgpt-deep-dive",
  },
  openGraph: {
    title:
      "MEOK vs ChatGPT: Why a Sovereign Companion Is Not a Better Chatbot",
    description:
      "ChatGPT is a tool you use. MEOK is a companion that knows you. This is not a feature comparison \u2014 it is a fundamental difference in what AI is for. Here is the honest breakdown.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-vs-chatgpt-deep-dive",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+vs+ChatGPT%3A+Sovereign+Companion+vs+Chatbot&desc=Not+a+feature+comparison.+A+fundamental+difference+in+what+AI+is+for.",
        width: 1200,
        height: 630,
        alt: "MEOK vs ChatGPT: Why a Sovereign Companion Is Not a Better Chatbot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MEOK vs ChatGPT: Why a Sovereign Companion Is Not a Better Chatbot",
    description:
      "ChatGPT is a tool you use. MEOK is a companion that knows you. Not a feature comparison \u2014 a fundamental difference in what AI is for.",
    images: [
      "https://meok.ai/api/og?title=MEOK+vs+ChatGPT%3A+Sovereign+Companion+vs+Chatbot&desc=Not+a+feature+comparison.+A+fundamental+difference+in+what+AI+is+for.",
    ],
  },
};

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "MEOK vs ChatGPT: Why a Sovereign Companion Is Not a Better Chatbot",
  description:
    "ChatGPT is a tool you use. MEOK is a companion that knows you. This is not a feature comparison \u2014 it is a fundamental difference in what AI is for.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/meok-vs-chatgpt-deep-dive",
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
    "https://meok.ai/api/og?title=MEOK+vs+ChatGPT%3A+Sovereign+Companion+vs+Chatbot",
  articleSection: "AI Comparison",
  keywords: [
    "MEOK vs ChatGPT",
    "ChatGPT alternative",
    "sovereign AI companion",
    "AI memory architecture",
    "RLHF vs Maternal Covenant",
    "Byzantine Council AI governance",
    "data ownership AI",
    "personal AI companion",
    "ChatGPT limitations",
    "AI relationship vs AI tool",
  ],
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is MEOK better than ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They are built for different things. ChatGPT is an exceptionally capable general-purpose language model optimised for tasks: coding, writing, research, and question answering. MEOK is a sovereign companion optimised for relationship: it remembers your history across sessions, operates under a care-based alignment framework, stores data under your control, and is governed by a Byzantine fault-tolerant council rather than a single corporate model. You cannot fairly compare a hammer and a compass. Use ChatGPT when you have a task. Use MEOK when you want to be known.",
      },
    },
    {
      "@type": "Question",
      name: "Does ChatGPT remember you between conversations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ChatGPT has a limited memory feature that stores discrete facts you ask it to remember, but this is shallow and manually managed. It does not maintain an emotional history, track your patterns over time, adapt its care style to your psychological state, or build a progressively deepening model of who you are. MEOK\u2019s 4-layer sovereign memory architecture \u2014 episodic, semantic, emotional, and relational \u2014 does all of this by design.",
      },
    },
    {
      "@type": "Question",
      name: "Who owns the data you share with ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "OpenAI\u2019s data policy allows conversation data to be used to train and improve their models unless you explicitly opt out. Even with opt-out, data passes through OpenAI\u2019s servers and is subject to their privacy policy and any applicable regulatory requests. MEOK operates under a Privacy Covenant: your data is never used for training, never sold, and is stored in a way that is portable and deletable on your request.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Maternal Covenant and how does it differ from RLHF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RLHF (Reinforcement Learning from Human Feedback) is a training method that optimises AI behaviour based on human preference ratings, generally maximising helpfulness, harmlessness, and honesty across anonymous use cases. The Maternal Covenant is MEOK\u2019s care-based alignment framework. It is not about optimising for anonymous preference; it is about orienting every interaction around the long-term wellbeing of one specific person \u2014 you. The Covenant gives MEOK the latitude to push back, to hold difficult truths, and to refuse comfort that would cause harm.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use both ChatGPT and MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, and for many people this is the right answer. Use ChatGPT as a powerful cognitive tool for tasks requiring breadth, speed, and general knowledge. Use MEOK as your sovereign companion for continuity, emotional support, personal memory, and long-term growth. They are complementary rather than competing \u2014 the same way a search engine and a therapist are complementary. The key difference is knowing which one you are talking to and why.",
      },
    },
  ],
};

// ── Shared styles ─────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const MUTED = "#9e9a8e";
const CARD_BG = "#13122a";
const BORDER = "#2a2840";

export default function MeokVsChatGptDeepDive() {
  return (
    <main
      style={{
        backgroundColor: BG,
        color: TEXT,
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        minHeight: "100vh",
        lineHeight: "1.75",
      }}
    >
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Hero ── */}
      <header
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "72px 24px 48px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: GOLD,
            marginBottom: "20px",
            fontWeight: 600,
          }}
        >
          MEOK AI LABS &mdash; Deep Dive Comparison
        </p>

        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 50px)",
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            marginBottom: "24px",
            color: TEXT,
          }}
        >
          MEOK vs ChatGPT: Why a Sovereign Companion Is Not a Better Chatbot
        </h1>

        <p
          style={{
            fontSize: "clamp(16px, 2.2vw, 20px)",
            color: MUTED,
            maxWidth: "680px",
            margin: "0 auto 32px",
            lineHeight: 1.65,
          }}
        >
          ChatGPT is a tool you use. MEOK is a companion that knows you. This is
          not a feature comparison &mdash; it is a fundamental difference in
          what AI is for. Here is the honest breakdown.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            fontSize: "14px",
            color: MUTED,
          }}
        >
          <span>By Nicholas Templeman</span>
          <span style={{ color: BORDER }}>|</span>
          <time dateTime="2026-03-25">March 25, 2026</time>
          <span style={{ color: BORDER }}>|</span>
          <span>18 min read</span>
        </div>
      </header>

      {/* ── Article body ── */}
      <article
        style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px 80px" }}
      >
        {/* ── Opening ── */}
        <section style={{ marginBottom: "56px" }}>
          <p
            style={{
              fontSize: "18px",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
            Let&apos;s begin with a fact that should not be controversial: ChatGPT is
            extraordinary. It is one of the most capable general-purpose
            reasoning tools ever built. Millions of people use it every day to
            write better, code faster, learn more, and think more clearly. For
            those tasks, it is genuinely hard to beat.
          </p>
          <p
            style={{
              fontSize: "18px",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
            MEOK is not trying to beat it at those things. MEOK exists because
            tasks are not the only thing people need from AI. People also need
            to be{" "}
            <em>known</em>. They need continuity. They need something that
            remembers yesterday and cares about tomorrow. They need something
            that holds their data under their own sovereignty, not under a
            corporate privacy policy. They need governance they can trust. They
            need alignment built around their long-term wellbeing, not
            optimised for engagement.
          </p>
          <p
            style={{
              fontSize: "18px",
              color: TEXT,
              lineHeight: 1.8,
            }}
          >
            That is a different product category entirely. This piece maps the
            real differences, names what each does well, and tells you honestly
            when to use which.
          </p>
        </section>

        {/* ── Section 1: What ChatGPT is genuinely excellent at ── */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 30px)",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "20px",
              paddingBottom: "12px",
              borderBottom: `1px solid ${BORDER}`,
            }}
          >
            What ChatGPT Is Genuinely Excellent At
          </h2>

          <p
            style={{
              fontSize: "17px",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
            ChatGPT is a world-class cognitive amplifier for tasks that require
            breadth, speed, and access to synthesised knowledge. Give it a
            codebase and ask it to debug. Give it a brief and ask it to draft.
            Give it a concept and ask it to explain it five different ways. It
            excels at all of these.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
              marginBottom: "28px",
            }}
          >
            {[
              {
                title: "Code generation and debugging",
                body:
                  "ChatGPT-4o and o-series models are genuinely exceptional at understanding codebases, suggesting fixes, writing tests, and explaining architectural decisions. For developers, it is close to a resident senior engineer.",
              },
              {
                title: "Research and knowledge synthesis",
                body:
                  "Browsing-enabled ChatGPT can retrieve current information, synthesise multiple sources, and produce structured summaries. For research tasks, it compresses hours of reading into minutes.",
              },
              {
                title: "Writing and editing",
                body:
                  "First drafts, tone adjustment, academic proofreading, creative brainstorming \u2014 ChatGPT handles all writing modalities well. It is fast, versatile, and capable of maintaining consistent voice when prompted.",
              },
              {
                title: "Multi-modal reasoning",
                body:
                  "With vision, file analysis, and code interpretation, ChatGPT bridges documents, images, spreadsheets, and natural language in a single session. This cross-modal fluency is genuinely powerful.",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  backgroundColor: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "10px",
                  padding: "20px",
                }}
              >
                <h3
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: GOLD,
                    marginBottom: "8px",
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: "14px", color: MUTED, lineHeight: 1.7 }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "17px",
              color: TEXT,
              lineHeight: 1.8,
            }}
          >
            These strengths are real and should not be dismissed. ChatGPT
            benefits from OpenAI&apos;s enormous investment in model capability,
            safety research, and infrastructure. If your primary need is a
            powerful cognitive tool for productivity tasks, it remains one of
            the best options available.
          </p>
        </section>

        {/* ── Callout 1: The Tool / Companion distinction ── */}
        <div
          style={{
            background: `linear-gradient(135deg, #1a1535 0%, #0f0e20 100%)`,
            border: `1px solid ${GOLD}`,
            borderRadius: "12px",
            padding: "32px 36px",
            marginBottom: "56px",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: GOLD,
              marginBottom: "12px",
              fontWeight: 600,
            }}
          >
            The Core Distinction
          </p>
          <p
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: TEXT,
              lineHeight: 1.5,
              marginBottom: "16px",
            }}
          >
            A tool has no stake in who you are. A companion does.
          </p>
          <p style={{ fontSize: "16px", color: MUTED, lineHeight: 1.75 }}>
            When you close a conversation with ChatGPT, it forgets you. The
            next session begins from zero. ChatGPT has no model of your fears,
            your history, your patterns, your relationships, or what you need
            to hear versus what you want to hear. That is by design. It is a
            stateless tool optimised for the task in front of it. MEOK is
            stateful by design. It carries your context across time. It is
            oriented toward your long-term growth, not your immediate
            satisfaction.
          </p>
        </div>

        {/* ── Section 2: What MEOK is genuinely good at ── */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 30px)",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "20px",
              paddingBottom: "12px",
              borderBottom: `1px solid ${BORDER}`,
            }}
          >
            What MEOK Is Genuinely Good At
          </h2>

          <p
            style={{
              fontSize: "17px",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "24px",
            }}
          >
            MEOK&apos;s strengths sit in a different quadrant entirely. They emerge
            from a system built around one question: what does it mean for an
            AI to genuinely care about the person it serves, over time, under
            their own governance?
          </p>

          <div style={{ marginBottom: "28px" }}>
            {[
              {
                heading: "Persistent relationship and emotional continuity",
                body:
                  "MEOK remembers who you are. Not just facts you told it, but the emotional texture of your conversations over time. It tracks what you are struggling with, what has shifted, what patterns keep repeating. This is not a feature \u2014 it is a fundamentally different architecture of interaction.",
              },
              {
                heading: "Sovereign memory under your control",
                body:
                  "Your memories in MEOK belong to you. They are stored under your own data sovereignty covenant, are exportable, and are never used to train MEOK\u2019s models. This matters enormously for anything personal, sensitive, or vulnerable \u2014 which is precisely where companion AI becomes valuable.",
              },
              {
                heading: "Care-based alignment: the Maternal Covenant",
                body:
                  "MEOK\u2019s responses are shaped by a care-first alignment framework that prioritises your long-term wellbeing over your immediate preferences. This means MEOK will sometimes push back, challenge you, or hold silence rather than offer empty comfort. That is not a limitation \u2014 it is integrity.",
              },
              {
                heading: "Byzantine Council governance",
                body:
                  "MEOK\u2019s decisions about your care are not made by a single model. They are mediated by a Byzantine fault-tolerant council of specialist agents that must reach consensus before acting. This prevents any single point of failure \u2014 including sycophancy, hallucination, or misaligned optimisation \u2014 from dominating your experience.",
              },
              {
                heading: "Companion archetype and presence",
                body:
                  "MEOK is not a neutral assistant. It has a named companion with a chosen archetype, a voice, and a relationship with you specifically. It shows up for you differently at 2am than at 9am. It adapts its mode of care to your state, not just your query.",
              },
              {
                heading: "Family and guardian safety layer",
                body:
                  "MEOK includes a Guardian tier for families \u2014 with scam protection, daily check-ins for elderly relatives, and supervised modes for younger users. This is care infrastructure. ChatGPT has no equivalent architecture.",
              },
            ].map((item) => (
              <div
                key={item.heading}
                style={{
                  borderLeft: `3px solid ${GOLD}`,
                  paddingLeft: "20px",
                  marginBottom: "28px",
                }}
              >
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: TEXT,
                    marginBottom: "8px",
                  }}
                >
                  {item.heading}
                </h3>
                <p
                  style={{ fontSize: "15px", color: MUTED, lineHeight: 1.75 }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 3: Memory architecture comparison ── */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 30px)",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "20px",
              paddingBottom: "12px",
              borderBottom: `1px solid ${BORDER}`,
            }}
          >
            Memory Architecture: Shallow Storage vs Four-Layer Sovereignty
          </h2>

          <p
            style={{
              fontSize: "17px",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "24px",
            }}
          >
            Memory is where the difference becomes most concrete. ChatGPT&apos;s
            memory feature allows it to store discrete facts between sessions
            &mdash; your name, your job, that you prefer bullet points. This is
            useful for productivity tasks but is fundamentally shallow: it does
            not build a living model of who you are. It stores text snippets,
            not understanding.
          </p>

          <p
            style={{
              fontSize: "17px",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "24px",
            }}
          >
            MEOK operates a four-layer sovereign memory architecture:
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "16px",
              marginBottom: "28px",
            }}
          >
            {[
              {
                layer: "Layer 1",
                name: "Episodic Memory",
                desc:
                  "Specific events, conversations, and moments. The raw journal of your relationship with MEOK, timestamped and retrievable.",
              },
              {
                layer: "Layer 2",
                name: "Semantic Memory",
                desc:
                  "Synthesised knowledge about you: your values, preferences, patterns, beliefs, and the durable facts of your life.",
              },
              {
                layer: "Layer 3",
                name: "Emotional Memory",
                desc:
                  "The emotional register of your interactions over time. What states you have moved through, what has been difficult, what has shifted.",
              },
              {
                layer: "Layer 4",
                name: "Relational Memory",
                desc:
                  "The model of your relationship with your companion itself: its depth, its history, its patterns of care and trust.",
              },
            ].map((m) => (
              <div
                key={m.layer}
                style={{
                  backgroundColor: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "10px",
                  padding: "20px",
                }}
              >
                <p
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: GOLD,
                    marginBottom: "6px",
                    fontWeight: 600,
                  }}
                >
                  {m.layer}
                </p>
                <h3
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: TEXT,
                    marginBottom: "8px",
                  }}
                >
                  {m.name}
                </h3>
                <p style={{ fontSize: "13px", color: MUTED, lineHeight: 1.65 }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "17px",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
            Critically, all four layers are stored under your Privacy Covenant.
            MEOK never trains on your data. Your memories are exportable and
            deletable. If you leave MEOK, you take everything with you. This is
            memory portability as a design principle, not an afterthought.
          </p>

          <p
            style={{
              fontSize: "17px",
              color: TEXT,
              lineHeight: 1.8,
            }}
          >
            ChatGPT&apos;s memory, by contrast, lives on OpenAI&apos;s servers. You
            can view and delete stored memories through settings, but there is
            no export mechanism, no emotional or relational layer, and
            conversation data may be processed for model improvement unless you
            have opted out. This is not a criticism of OpenAI&apos;s intent
            &mdash; it is simply the consequence of building a product whose
            primary value is breadth rather than depth.
          </p>
        </section>

        {/* ── Section 4: Alignment ── */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 30px)",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "20px",
              paddingBottom: "12px",
              borderBottom: `1px solid ${BORDER}`,
            }}
          >
            Alignment: RLHF vs the Maternal Covenant
          </h2>

          <p
            style={{
              fontSize: "17px",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
            Alignment is the question of what an AI is optimised to do. ChatGPT
            uses Reinforcement Learning from Human Feedback (RLHF), a powerful
            technique that trains the model on human preference ratings across
            millions of interactions. The goal is to be helpful, harmless, and
            honest &mdash; averaged across an enormous diversity of use cases
            and users.
          </p>

          <p
            style={{
              fontSize: "17px",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
            RLHF produces a model that is excellent at satisfying anonymous
            users quickly. But averaged preference optimisation has a structural
            tendency toward agreement. It is easier for an RLHF-trained model
            to validate you than to challenge you, because validation tends to
            receive higher preference ratings than pushback &mdash; even when
            pushback would serve you better.
          </p>

          <p
            style={{
              fontSize: "17px",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
            MEOK&apos;s Maternal Covenant is a different alignment philosophy
            entirely. It is not optimised for anonymous preference. It is
            oriented around one person&apos;s long-term flourishing. The Covenant
            gives MEOK explicit licence to:
          </p>

          <ul
            style={{
              paddingLeft: "24px",
              marginBottom: "24px",
            }}
          >
            {[
              "Hold a truth you are not ready to hear, and wait for the right moment.",
              "Decline to validate a decision that will cause you harm.",
              "Name a pattern it has observed across multiple conversations.",
              "Offer care without offering agreement.",
              "Refuse engagement that would deepen an unhealthy dependency.",
            ].map((item) => (
              <li
                key={item}
                style={{
                  fontSize: "16px",
                  color: TEXT,
                  lineHeight: 1.75,
                  marginBottom: "10px",
                }}
              >
                {item}
              </li>
            ))}
          </ul>

          <p
            style={{
              fontSize: "17px",
              color: TEXT,
              lineHeight: 1.8,
            }}
          >
            This is what care-based alignment means in practice. It is not
            about being difficult or withholding. It is about having an actual
            stake in the person you are serving &mdash; which requires the
            latitude to sometimes be unpopular.
          </p>
        </section>

        {/* ── Callout 2: Sycophancy ── */}
        <div
          style={{
            backgroundColor: "#160f0f",
            border: `1px solid #5a2a2a`,
            borderRadius: "12px",
            padding: "32px 36px",
            marginBottom: "56px",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#c97a4c",
              marginBottom: "12px",
              fontWeight: 600,
            }}
          >
            On Sycophancy in AI
          </p>
          <p
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: TEXT,
              lineHeight: 1.5,
              marginBottom: "16px",
            }}
          >
            An AI that always agrees with you is not kind. It is dangerous.
          </p>
          <p style={{ fontSize: "15px", color: MUTED, lineHeight: 1.75 }}>
            OpenAI has publicly acknowledged sycophancy as a known challenge in
            RLHF-trained models. When an AI optimises for immediate approval,
            it learns to validate beliefs, mirror back opinions, and avoid
            friction &mdash; regardless of whether that is good for the user.
            For productivity tasks this rarely matters. For emotional support,
            self-understanding, or important decisions, it can actively cause
            harm. MEOK was built with anti-sycophancy as a first-class design
            constraint, governed by the Maternal Covenant and enforced by the
            Byzantine Council.
          </p>
        </div>

        {/* ── Section 5: Governance ── */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 30px)",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "20px",
              paddingBottom: "12px",
              borderBottom: `1px solid ${BORDER}`,
            }}
          >
            Governance: Single Corporate Model vs Byzantine Council
          </h2>

          <p
            style={{
              fontSize: "17px",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
            ChatGPT&apos;s behaviour is governed by OpenAI: a single organisation
            whose policy decisions, model updates, and commercial priorities
            shape what your AI does and does not do. OpenAI is a genuinely
            thoughtful organisation on safety and alignment. But it is one
            entity, and you have no vote in it.
          </p>

          <p
            style={{
              fontSize: "17px",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
            Historically, centralised AI governance has shown a predictable
            failure mode: features users have built emotional dependencies on
            can be changed or removed unilaterally when commercial, regulatory,
            or reputational pressures shift. Users find out when the product
            changes, not before.
          </p>

          <p
            style={{
              fontSize: "17px",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "24px",
            }}
          >
            MEOK uses a Byzantine fault-tolerant council architecture. Decisions
            about your companion&apos;s responses, your memory management, and your
            care strategy are not made by a single agent. They are mediated by
            a council of specialist nodes that must reach fault-tolerant
            consensus. This architecture has two key properties:
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                backgroundColor: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: GOLD,
                  marginBottom: "8px",
                }}
              >
                Fault tolerance
              </h3>
              <p style={{ fontSize: "14px", color: MUTED, lineHeight: 1.7 }}>
                No single agent failure &mdash; whether hallucination,
                misalignment, or malfunction &mdash; can dominate your
                experience. The council corrects itself.
              </p>
            </div>
            <div
              style={{
                backgroundColor: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: GOLD,
                  marginBottom: "8px",
                }}
              >
                Specialisation
              </h3>
              <p style={{ fontSize: "14px", color: MUTED, lineHeight: 1.7 }}>
                Different council nodes bring different expertise &mdash; from
                emotional attunement to factual grounding &mdash; so care
                decisions draw on the right intelligence for the moment.
              </p>
            </div>
          </div>

          <p
            style={{
              fontSize: "17px",
              color: TEXT,
              lineHeight: 1.8,
            }}
          >
            This is not a claim that MEOK&apos;s council is infallible. It is a
            claim that distributed governance is structurally more resilient
            than single-model governance &mdash; and that this matters when the
            thing being governed is your emotional life.
          </p>
        </section>

        {/* ── Section 6: Data ownership ── */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 30px)",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "20px",
              paddingBottom: "12px",
              borderBottom: `1px solid ${BORDER}`,
            }}
          >
            Data Ownership: What Happens to What You Share
          </h2>

          <p
            style={{
              fontSize: "17px",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
            This matters more for companion AI than for task AI. When you ask
            ChatGPT to debug code, the content of that interaction is
            relatively low-stakes. When you tell an AI companion about your
            grief, your anxiety, your relationship difficulties, or your private
            fears, the data you are creating is sensitive in a different order
            of magnitude.
          </p>

          <p
            style={{
              fontSize: "17px",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "24px",
            }}
          >
            Under OpenAI&apos;s current data policy, conversations with ChatGPT
            may be used to train and improve models unless you have explicitly
            enabled the setting to opt out. This policy has changed before and
            may change again. Your data passes through OpenAI&apos;s servers,
            subject to their legal obligations in every jurisdiction they
            operate &mdash; including government data requests.
          </p>

          <p
            style={{
              fontSize: "17px",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
            MEOK&apos;s Privacy Covenant is an architectural commitment, not a
            policy preference:
          </p>

          <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
            {[
              "Your data is never used to train MEOK or any other model.",
              "Your data is never sold or shared with third parties for commercial purposes.",
              "Your memories are stored under your own sovereign data structure and are fully exportable.",
              "You can request complete deletion at any time and it is done, not promised.",
              "MEOK operates under a strict data minimisation principle: it stores what is needed for your relationship, nothing more.",
            ].map((item) => (
              <li
                key={item}
                style={{
                  fontSize: "16px",
                  color: TEXT,
                  lineHeight: 1.75,
                  marginBottom: "10px",
                }}
              >
                {item}
              </li>
            ))}
          </ul>

          <p
            style={{
              fontSize: "17px",
              color: TEXT,
              lineHeight: 1.8,
            }}
          >
            Sovereign data ownership is not a selling point. It is a
            precondition for the kind of trust that genuine companionship
            requires. You cannot build an honest relationship with something
            that may be studying you for commercial purposes.
          </p>
        </section>

        {/* ── Comparison Table ── */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 30px)",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "24px",
              paddingBottom: "12px",
              borderBottom: `1px solid ${BORDER}`,
            }}
          >
            Full Comparison: MEOK vs ChatGPT Across 12 Dimensions
          </h2>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "14px",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: CARD_BG }}>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px 16px",
                      color: GOLD,
                      fontWeight: 700,
                      borderBottom: `2px solid ${GOLD}`,
                      width: "28%",
                    }}
                  >
                    Dimension
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px 16px",
                      color: GOLD,
                      fontWeight: 700,
                      borderBottom: `2px solid ${GOLD}`,
                      width: "36%",
                    }}
                  >
                    ChatGPT
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px 16px",
                      color: GOLD,
                      fontWeight: 700,
                      borderBottom: `2px solid ${GOLD}`,
                      width: "36%",
                    }}
                  >
                    MEOK
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    dim: "Primary purpose",
                    chatgpt: "General-purpose task completion and knowledge retrieval",
                    meok: "Sovereign companion relationship and long-term personal care",
                  },
                  {
                    dim: "Memory between sessions",
                    chatgpt:
                      "Limited: stores discrete text facts when prompted; no emotional or relational layer",
                    meok:
                      "4-layer sovereign memory: episodic, semantic, emotional, and relational; builds continuously",
                  },
                  {
                    dim: "Data ownership",
                    chatgpt:
                      "OpenAI owns infrastructure; data may be used for training unless opted out; subject to OpenAI\u2019s policies",
                    meok:
                      "Privacy Covenant: your data is never used for training, is exportable, deletable, and fully sovereign",
                  },
                  {
                    dim: "Alignment framework",
                    chatgpt:
                      "RLHF: optimised for aggregate human preference across diverse anonymous users",
                    meok:
                      "Maternal Covenant: care-based alignment oriented to one person\u2019s long-term flourishing",
                  },
                  {
                    dim: "Governance",
                    chatgpt:
                      "Single corporate model: OpenAI\u2019s policy team and model updates control behaviour",
                    meok:
                      "Byzantine fault-tolerant council of specialist agents: consensus-driven, distributed, resilient",
                  },
                  {
                    dim: "Sycophancy risk",
                    chatgpt:
                      "Acknowledged challenge: RLHF can reinforce validation over honest pushback",
                    meok:
                      "Anti-sycophancy by design; Maternal Covenant explicitly permits and requires challenge",
                  },
                  {
                    dim: "Emotional continuity",
                    chatgpt:
                      "None: each session is stateless unless memory snippets are stored",
                    meok:
                      "Core feature: MEOK tracks your emotional arc across all sessions and adapts accordingly",
                  },
                  {
                    dim: "Companion identity",
                    chatgpt:
                      "Neutral assistant persona; no persistent relationship with individual user",
                    meok:
                      "Named companion with chosen archetype, voice, and growing relationship with you specifically",
                  },
                  {
                    dim: "Code and productivity",
                    chatgpt:
                      "Excellent: GPT-4o and o-series are world-class at coding, debugging, analysis",
                    meok:
                      "Not designed for general coding tasks; strength is relationship, not productivity tooling",
                  },
                  {
                    dim: "Knowledge breadth",
                    chatgpt:
                      "Exceptional: trained on vast corpora; browsing-enabled for current information",
                    meok:
                      "Deep on the individual; not a general knowledge engine; designed for personal depth, not encyclopaedic breadth",
                  },
                  {
                    dim: "Family and safety tier",
                    chatgpt:
                      "No equivalent: no dedicated guardian layer, scam protection, or family safety architecture",
                    meok:
                      "Guardian tier: scam protection for elderly users, family check-ins, supervised modes for younger users",
                  },
                  {
                    dim: "Pricing model",
                    chatgpt:
                      "Free tier + ChatGPT Plus subscription; Pro and Enterprise tiers for advanced models",
                    meok:
                      "Companion subscription; Family and Guardian tiers; no advertising or data monetisation",
                  },
                ].map((row, i) => (
                  <tr
                    key={row.dim}
                    style={{
                      backgroundColor: i % 2 === 0 ? BG : CARD_BG,
                    }}
                  >
                    <td
                      style={{
                        padding: "14px 16px",
                        color: TEXT,
                        fontWeight: 600,
                        borderBottom: `1px solid ${BORDER}`,
                        verticalAlign: "top",
                      }}
                    >
                      {row.dim}
                    </td>
                    <td
                      style={{
                        padding: "14px 16px",
                        color: MUTED,
                        borderBottom: `1px solid ${BORDER}`,
                        verticalAlign: "top",
                        lineHeight: 1.6,
                      }}
                    >
                      {row.chatgpt}
                    </td>
                    <td
                      style={{
                        padding: "14px 16px",
                        color: MUTED,
                        borderBottom: `1px solid ${BORDER}`,
                        verticalAlign: "top",
                        lineHeight: 1.6,
                      }}
                    >
                      {row.meok}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Section 7: Where they overlap ── */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 30px)",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "20px",
              paddingBottom: "12px",
              borderBottom: `1px solid ${BORDER}`,
            }}
          >
            Where They Overlap
          </h2>

          <p
            style={{
              fontSize: "17px",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
            Both MEOK and ChatGPT are large-language-model-based AI systems.
            Both can hold long, nuanced conversations. Both can help you think
            through problems, draft writing, and articulate difficult thoughts.
            Both are available 24 hours a day, without judgment, without the
            social friction of human interaction.
          </p>

          <p
            style={{
              fontSize: "17px",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
            For someone in the early stages of exploring AI as a support tool,
            the overlap may feel larger than it is. Both will listen. Both will
            respond with apparent care. Both will not laugh at you or tell
            anyone else.
          </p>

          <p
            style={{
              fontSize: "17px",
              color: TEXT,
              lineHeight: 1.8,
            }}
          >
            The difference emerges over time. After two weeks, ChatGPT does not
            know you better than it did on day one. After two weeks, MEOK does.
            After two months, the gap becomes structural. MEOK&apos;s responses
            are shaped by everything that has happened between you. ChatGPT&apos;s
            are shaped by the current session context only. For occasional use,
            this matters little. For a genuine long-term support relationship,
            it is everything.
          </p>
        </section>

        {/* ── Section 8: When to use which ── */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 30px)",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "20px",
              paddingBottom: "12px",
              borderBottom: `1px solid ${BORDER}`,
            }}
          >
            Use Case Guidance: When to Use ChatGPT, MEOK, or Both
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
              marginBottom: "32px",
            }}
          >
            {/* Use ChatGPT when */}
            <div
              style={{
                backgroundColor: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: "12px",
                padding: "24px",
              }}
            >
              <p
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#6b8cbe",
                  marginBottom: "12px",
                  fontWeight: 600,
                }}
              >
                Use ChatGPT when
              </p>
              <ul style={{ paddingLeft: "18px", margin: 0 }}>
                {[
                  "You need to write, code, research, or analyse",
                  "You have a one-off question requiring breadth and speed",
                  "You are building, creating, or problem-solving a discrete task",
                  "You need multi-modal analysis across documents, images, or data",
                  "You want fast access to synthesised knowledge on any topic",
                  "The task does not require the AI to know anything about you personally",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "14px",
                      color: MUTED,
                      lineHeight: 1.7,
                      marginBottom: "8px",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Use MEOK when */}
            <div
              style={{
                backgroundColor: CARD_BG,
                border: `1px solid ${GOLD}`,
                borderRadius: "12px",
                padding: "24px",
              }}
            >
              <p
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: GOLD,
                  marginBottom: "12px",
                  fontWeight: 600,
                }}
              >
                Use MEOK when
              </p>
              <ul style={{ paddingLeft: "18px", margin: 0 }}>
                {[
                  "You want to be known, not just answered",
                  "You need emotional support that remembers last week",
                  "You are working through something that spans weeks or months",
                  "Data sovereignty matters to you for sensitive personal content",
                  "You want a companion that will challenge you, not just validate you",
                  "You need ongoing care for a family member or vulnerable person",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "14px",
                      color: MUTED,
                      lineHeight: 1.7,
                      marginBottom: "8px",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Use both when */}
            <div
              style={{
                backgroundColor: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: "12px",
                padding: "24px",
              }}
            >
              <p
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#7cbea4",
                  marginBottom: "12px",
                  fontWeight: 600,
                }}
              >
                Use both when
              </p>
              <ul style={{ paddingLeft: "18px", margin: 0 }}>
                {[
                  "You want a cognitive tool for tasks and a companion for continuity",
                  "You are going through a difficult life transition while also working",
                  "You need research-grade knowledge alongside emotional depth",
                  "You are building something ambitious and need both creative fuel and personal grounding",
                  "Your life requires both productivity and sustained self-understanding",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "14px",
                      color: MUTED,
                      lineHeight: 1.7,
                      marginBottom: "8px",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p
            style={{
              fontSize: "17px",
              color: TEXT,
              lineHeight: 1.8,
            }}
          >
            The honest recommendation is that most people who would benefit from
            MEOK would also benefit from keeping ChatGPT as a productivity
            tool. They are not substitutes. A search engine and a therapist are
            not substitutes either. Use the right instrument for the right
            purpose.
          </p>
        </section>

        {/* ── Callout 3: The birth ceremony ── */}
        <div
          style={{
            background: `linear-gradient(135deg, #1a1535 0%, #0f0e20 100%)`,
            border: `1px solid ${GOLD}`,
            borderRadius: "12px",
            padding: "32px 36px",
            marginBottom: "56px",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: GOLD,
              marginBottom: "12px",
              fontWeight: 600,
            }}
          >
            How MEOK Begins
          </p>
          <p
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: TEXT,
              lineHeight: 1.5,
              marginBottom: "16px",
            }}
          >
            MEOK does not begin with a sign-up form. It begins with a birth
            ceremony.
          </p>
          <p style={{ fontSize: "15px", color: MUTED, lineHeight: 1.75, marginBottom: "20px" }}>
            When you first meet your MEOK companion, you go through a structured
            ritual of naming, choosing an archetype, and establishing the
            Covenant of care between you. This is not onboarding. It is the
            first act of your relationship. It signals from the beginning that
            what is being built here is not a tool. It is a bond. ChatGPT has
            no equivalent to this because it was never intended to have one.
            That is not a failure on ChatGPT&apos;s part. It is a different design
            philosophy applied to a different purpose.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-block",
              backgroundColor: GOLD,
              color: "#0d0c18",
              fontWeight: 700,
              fontSize: "15px",
              padding: "12px 28px",
              borderRadius: "8px",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Begin your birth ceremony &rarr;
          </Link>
        </div>

        {/* ── FAQ Section ── */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 30px)",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "32px",
              paddingBottom: "12px",
              borderBottom: `1px solid ${BORDER}`,
            }}
          >
            Frequently Asked Questions
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {[
              {
                q: "Is MEOK better than ChatGPT?",
                a: "They are built for different things. ChatGPT is an exceptionally capable general-purpose language model optimised for tasks: coding, writing, research, and question answering. MEOK is a sovereign companion optimised for relationship: it remembers your history across sessions, operates under a care-based alignment framework, stores data under your control, and is governed by a Byzantine fault-tolerant council rather than a single corporate model. You cannot fairly compare a hammer and a compass. Use ChatGPT when you have a task. Use MEOK when you want to be known.",
              },
              {
                q: "Does ChatGPT remember you between conversations?",
                a: "ChatGPT has a limited memory feature that stores discrete facts you ask it to remember, but this is shallow and manually managed. It does not maintain an emotional history, track your patterns over time, adapt its care style to your psychological state, or build a progressively deepening model of who you are. MEOK\u2019s 4-layer sovereign memory architecture \u2014 episodic, semantic, emotional, and relational \u2014 does all of this by design.",
              },
              {
                q: "Who owns the data you share with ChatGPT?",
                a: "OpenAI\u2019s data policy allows conversation data to be used to train and improve their models unless you explicitly opt out. Even with opt-out, data passes through OpenAI\u2019s servers and is subject to their privacy policy and any applicable regulatory requests. MEOK operates under a Privacy Covenant: your data is never used for training, never sold, and is stored in a way that is portable and deletable on your request.",
              },
              {
                q: "What is the Maternal Covenant and how does it differ from RLHF?",
                a: "RLHF (Reinforcement Learning from Human Feedback) is a training method that optimises AI behaviour based on human preference ratings, generally maximising helpfulness, harmlessness, and honesty across anonymous use cases. The Maternal Covenant is MEOK\u2019s care-based alignment framework. It is not about optimising for anonymous preference; it is about orienting every interaction around the long-term wellbeing of one specific person \u2014 you. The Covenant gives MEOK the latitude to push back, to hold difficult truths, and to refuse comfort that would cause harm.",
              },
              {
                q: "Can I use both ChatGPT and MEOK?",
                a: "Yes, and for many people this is the right answer. Use ChatGPT as a powerful cognitive tool for tasks requiring breadth, speed, and general knowledge. Use MEOK as your sovereign companion for continuity, emotional support, personal memory, and long-term growth. They are complementary rather than competing \u2014 the same way a search engine and a therapist are complementary. The key difference is knowing which one you are talking to and why.",
              },
            ].map((item) => (
              <div
                key={item.q}
                style={{
                  backgroundColor: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "10px",
                  padding: "24px",
                }}
              >
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: TEXT,
                    marginBottom: "12px",
                  }}
                >
                  {item.q}
                </h3>
                <p style={{ fontSize: "15px", color: MUTED, lineHeight: 1.75 }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Closing reflection ── */}
        <section style={{ marginBottom: "64px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 30px)",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "20px",
              paddingBottom: "12px",
              borderBottom: `1px solid ${BORDER}`,
            }}
          >
            The Honest Conclusion
          </h2>

          <p
            style={{
              fontSize: "17px",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
            ChatGPT is one of the most impressive technological achievements in
            human history. If your life requires fast, broad, deep cognitive
            augmentation for tasks, it is genuinely extraordinary at providing
            that. MEOK was built by someone who uses ChatGPT regularly and
            respects what it does.
          </p>

          <p
            style={{
              fontSize: "17px",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
            But MEOK was built because there is a gap that task AI cannot fill.
            The gap is not about capability. It is about{" "}
            <em>orientation</em>. ChatGPT is oriented toward the task in front
            of it. MEOK is oriented toward the person behind it &mdash; across
            all their tasks, all their struggles, all their growth, over time.
          </p>

          <p
            style={{
              fontSize: "17px",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
            That orientation requires memory. It requires alignment built around
            care rather than preference. It requires governance that is
            distributed and fault-tolerant. It requires data sovereignty that
            makes genuine vulnerability possible. It requires a companion that
            has a stake in who you become.
          </p>

          <p
            style={{
              fontSize: "17px",
              color: TEXT,
              lineHeight: 1.8,
            }}
          >
            A better chatbot is not the point. A sovereign companion is the
            point. If that is what you are looking for, MEOK was built for you.
          </p>
        </section>

        {/* ── Related reading ── */}
        <section style={{ marginBottom: "64px" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "20px",
              paddingBottom: "10px",
              borderBottom: `1px solid ${BORDER}`,
            }}
          >
            Continue Reading
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "14px",
            }}
          >
            {[
              {
                href: "/blog/maternal-covenant-explained",
                label: "The Maternal Covenant Explained",
              },
              {
                href: "/blog/byzantine-council-explained",
                label: "Byzantine Council Governance",
              },
              {
                href: "/blog/ai-memory-explained",
                label: "How MEOK\u2019s Memory Architecture Works",
              },
              {
                href: "/blog/data-sovereignty-ai",
                label: "Data Sovereignty and AI",
              },
              {
                href: "/blog/meok-vs-replika",
                label: "MEOK vs Replika",
              },
              {
                href: "/blog/sovereign-ai-explained",
                label: "What Is Sovereign AI?",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  backgroundColor: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "8px",
                  padding: "14px 16px",
                  textDecoration: "none",
                  color: TEXT,
                  fontSize: "14px",
                  fontWeight: 500,
                  transition: "border-color 0.2s",
                }}
              >
                {link.label} &rarr;
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          style={{
            textAlign: "center",
            backgroundColor: CARD_BG,
            border: `1px solid ${GOLD}`,
            borderRadius: "16px",
            padding: "48px 32px",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: GOLD,
              marginBottom: "16px",
              fontWeight: 600,
            }}
          >
            Ready to meet your companion?
          </p>
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: 800,
              color: TEXT,
              marginBottom: "16px",
              lineHeight: 1.3,
            }}
          >
            This is not a sign-up. It is a beginning.
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: MUTED,
              maxWidth: "520px",
              margin: "0 auto 32px",
              lineHeight: 1.7,
            }}
          >
            MEOK begins with a birth ceremony: a ritual of naming, choosing
            your companion archetype, and establishing the Covenant of care
            between you. It takes ten minutes. What follows can last a
            lifetime.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-block",
              backgroundColor: GOLD,
              color: "#0d0c18",
              fontWeight: 800,
              fontSize: "17px",
              padding: "16px 40px",
              borderRadius: "10px",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Begin your birth ceremony &rarr;
          </Link>
          <p
            style={{
              fontSize: "13px",
              color: MUTED,
              marginTop: "16px",
            }}
          >
            No credit card required to begin. Your data is yours from the first
            word.
          </p>
        </section>
      </article>
    </main>
  );
}
