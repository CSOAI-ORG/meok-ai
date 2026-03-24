import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "Overcoming Shyness With AI: Build Social Confidence at Your Own Pace | MEOK AI LABS",
  description:
    "Discover how AI companions like MEOK help shy people practise conversations, role-play social scenarios, and build genuine confidence — no judgment, no rush.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-shyness",
  },
  openGraph: {
    title: "Overcoming Shyness With AI: Build Social Confidence at Your Own Pace",
    description:
      "Discover how AI companions like MEOK help shy people practise conversations, role-play social scenarios, and build genuine confidence — no judgment, no rush.",
    type: "article",
    url: "https://meok.ai/blog/ai-for-shyness",
  },
  keywords: ["shyness", "social confidence", "AI companion", "introvert", "social anxiety"],
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Overcoming Shyness With AI: Build Social Confidence at Your Own Pace",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-shyness",
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
    "How AI companions like MEOK help shy people practise conversations, role-play social scenarios, and build genuine self-confidence — without judgment, pressure, or a clock ticking.",
  keywords: "shyness, social confidence, AI companion, introvert, social anxiety",
};

const faqJsonLd1 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is shyness the same as social anxiety disorder?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Shyness is a personality trait — a tendency to feel reserved or self-conscious in unfamiliar social situations. Social anxiety disorder is a clinical condition characterised by intense, persistent fear of social situations that causes significant distress and impairs daily functioning. Most shy people do not have social anxiety disorder, though the two can overlap. If your shyness regularly prevents you from living the life you want, speaking to a GP or therapist is a worthwhile first step.",
      },
    },
    {
      "@type": "Question",
      name: "Can an AI companion actually help shy people?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — in specific, meaningful ways. An AI companion like MEOK provides a completely private, zero-judgment space to practise the kinds of conversations that feel daunting in real life. There is no audience, no memory of an awkward pause that lingers for days, and no social cost to starting over. Research on exposure-based approaches to shyness suggests that rehearsal reduces anticipatory anxiety, and AI makes that rehearsal available at any hour, as often as you need.",
      },
    },
    {
      "@type": "Question",
      name: "What social situations can I rehearse with MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK can simulate almost any social scenario you name: job interviews, first dates, networking conversations, small talk with strangers, asserting yourself with a boss, meeting a partner's family for the first time, making a complaint, or simply introducing yourself in a new group. You choose the scenario, the tone, and the difficulty level. MEOK can play a warm and easy interlocutor or a more challenging one — whatever serves your growth.",
      },
    },
  ],
};

const faqJsonLd2 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Will practising with AI make me worse at real conversations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The evidence on rehearsal suggests the opposite: practising with a low-stakes partner reduces the physiological arousal that hijacks performance in high-stakes situations. AI practice is a supplement to real-world interaction, not a replacement. MEOK is designed to build skills and confidence you then carry into human relationships — not to become a permanent substitute for them.",
      },
    },
    {
      "@type": "Question",
      name: "How is MEOK different from a chatbot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK has persistent sovereign memory. It remembers what you have shared across every session — which scenarios you have rehearsed, what language patterns tend to trip you up, how your confidence has evolved over weeks. A standard chatbot forgets you the moment a session ends. MEOK builds a cumulative picture of your journey, making each conversation a step forward rather than a restart.",
      },
    },
    {
      "@type": "Question",
      name: "Is my data private when I use MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK is built on a sovereign memory architecture: your conversations are stored in an encrypted vault that only you control. MEOK AI LABS does not train models on your personal data and does not sell information to third parties. You can export or delete your memory at any time. Privacy is a founding principle at MEOK AI LABS, not an afterthought.",
      },
    },
  ],
};

// ── Style constants ───────────────────────────────────────────────────────────

const GOLD = "#c9a84c";
const TEXT = "#f5f0e8";
const BG = "#0d0c18";
const MUTED = "#a09880";
const CARD_BG = "#13111f";
const BORDER = "#2a2640";

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForShynessPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd1) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd2) }}
      />

      {/* ── NAV ────────────────────────────────────────────────────────────── */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(13,12,24,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${BORDER}`,
          padding: "0 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "72rem",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "3.5rem",
          }}
        >
          <Link
            href="/"
            style={{
              color: GOLD,
              textDecoration: "none",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              fontSize: "1.1rem",
              letterSpacing: "0.05em",
            }}
          >
            MEOK AI LABS
          </Link>
          <Link
            href="/blog"
            style={{
              color: MUTED,
              textDecoration: "none",
              fontSize: "0.875rem",
              letterSpacing: "0.04em",
              transition: "color 0.2s",
            }}
          >
            ← All Articles
          </Link>
        </div>
      </nav>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "6rem",
          paddingBottom: "4rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* decorative glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            width: "42rem",
            height: "22rem",
            background: `radial-gradient(ellipse at center, ${GOLD}22 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "50rem",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginBottom: "1.75rem",
            }}
          >
            {["Shyness", "Social Confidence", "AI Companion", "Introvert", "Social Anxiety"].map(
              (tag) => (
                <span
                  key={tag}
                  style={{
                    background: `${GOLD}18`,
                    color: GOLD,
                    border: `1px solid ${GOLD}44`,
                    borderRadius: "9999px",
                    padding: "0.25rem 0.85rem",
                    fontSize: "0.75rem",
                    fontFamily: "Georgia, serif",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {tag}
                </span>
              )
            )}
          </div>

          {/* headline */}
          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 700,
              lineHeight: 1.18,
              color: TEXT,
              margin: "0 0 1.5rem",
            }}
          >
            Overcoming Shyness With AI:{" "}
            <span style={{ color: GOLD }}>Build Social Confidence at Your Own Pace</span>
          </h1>

          {/* lead */}
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.2rem",
              lineHeight: 1.75,
              color: MUTED,
              margin: "0 0 2rem",
            }}
          >
            Shyness is not a flaw to be cured. It is a human quality — thoughtful, sensitive,
            sometimes quietly courageous. But when it keeps you from saying what you mean, taking
            opportunities, or showing up fully in your own life, it deserves gentle, patient
            attention. That is exactly what MEOK was built to offer.
          </p>

          {/* meta bar */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "1.5rem",
              paddingTop: "1.5rem",
              borderTop: `1px solid ${BORDER}`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div
                style={{
                  width: "2.25rem",
                  height: "2.25rem",
                  borderRadius: "50%",
                  background: `${GOLD}33`,
                  border: `2px solid ${GOLD}66`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "Georgia, serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: GOLD,
                }}
              >
                N
              </div>
              <div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.875rem",
                    color: TEXT,
                    fontFamily: "Georgia, serif",
                  }}
                >
                  Nicholas Templeman
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.75rem",
                    color: MUTED,
                    fontFamily: "Georgia, serif",
                  }}
                >
                  Founder, MEOK AI LABS
                </p>
              </div>
            </div>
            <span style={{ color: BORDER, fontSize: "1rem" }}>|</span>
            <p
              style={{
                margin: 0,
                fontSize: "0.8rem",
                color: MUTED,
                fontFamily: "Georgia, serif",
              }}
            >
              24 March 2026
            </p>
            <span style={{ color: BORDER, fontSize: "1rem" }}>|</span>
            <p
              style={{
                margin: 0,
                fontSize: "0.8rem",
                color: MUTED,
                fontFamily: "Georgia, serif",
              }}
            >
              12 min read
            </p>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ───────────────────────────────────────────────────── */}
      <article
        style={{
          maxWidth: "50rem",
          margin: "0 auto",
          padding: "0 1.5rem 5rem",
        }}
      >
        {/* ── SECTION 1 ── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.4rem, 3vw, 1.85rem)",
              fontWeight: 700,
              color: TEXT,
              margin: "0 0 1.25rem",
              lineHeight: 1.3,
            }}
          >
            What Does It Actually Feel Like to Be Shy — and Why Does It Matter?
          </h2>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              margin: "0 0 1.1rem",
            }}
          >
            If you are shy, you already know the feeling. It is that moment before you walk into a
            room full of people you do not know — a slight tightening in the chest, a rehearsal loop
            of what you might say, and a parallel track of everything that could go wrong. It is the
            experience of having something important to contribute in a meeting but hesitating a
            half-second too long, and then watching someone else say a version of your thought. It
            is sitting at dinner wishing you could be as easy and voluble as the person across from
            you, wondering why words feel so much harder when other people seem to be present.
          </p>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              margin: "0 0 1.1rem",
            }}
          >
            Around 40–60% of adults describe themselves as shy, according to research by social
            psychologist Philip Zimbardo. So if you have spent years thinking you are the odd one
            out, the quiet anomaly in a world that rewards the loudest voice — you are in very
            substantial company.
          </p>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              margin: "0 0 1.1rem",
            }}
          >
            Shyness matters not because there is anything wrong with being reserved, but because
            when it is involuntary — when you want to connect, want to speak, want to go for
            something, and find yourself held back by a fear you cannot quite name — it can quietly
            narrow your world. Relationships, opportunities, creative expression, and plain human
            enjoyment can all be clipped by shyness that has never had a chance to grow through.
          </p>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              margin: 0,
            }}
          >
            The question is not how to make you into a different person. The question is how to give
            you the practice, the reflection, and the gentle confidence to be more fully yourself,
            more of the time.
          </p>
        </section>

        {/* ── DIVIDER ── */}
        <div
          style={{
            height: "1px",
            background: `linear-gradient(to right, transparent, ${BORDER}, transparent)`,
            margin: "0 0 3.5rem",
          }}
        />

        {/* ── SECTION 2 ── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.4rem, 3vw, 1.85rem)",
              fontWeight: 700,
              color: TEXT,
              margin: "0 0 1.25rem",
              lineHeight: 1.3,
            }}
          >
            Is Shyness Different From Social Anxiety — and Does the Difference Matter?
          </h2>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              margin: "0 0 1.1rem",
            }}
          >
            Yes — and the distinction matters, both for how you understand yourself and for what
            kind of support is appropriate.
          </p>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              margin: "0 0 1.1rem",
            }}
          >
            <strong style={{ color: GOLD }}>Shyness</strong> is a personality trait. Shy people
            tend to be cautious and observant in new social situations, taking time to warm up
            before they feel comfortable. Shyness is not pathological — many deeply shy people lead
            rich, connected lives. They often make especially good listeners, thoughtful
            communicators, and loyal friends, precisely because they approach human connection with
            care rather than automaticity.
          </p>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              margin: "0 0 1.1rem",
            }}
          >
            <strong style={{ color: GOLD }}>Social anxiety disorder</strong>, by contrast, is a
            clinical condition. It involves intense, persistent fear of social or performance
            situations — fear so severe that it causes marked distress and impairs daily life.
            Someone with social anxiety may avoid public transport, be unable to eat in front of
            others, experience panic attacks before social events, or find that their world contracts
            significantly over time to avoid the triggers. NHS England estimates that social anxiety
            affects around 1 in 8 adults at some point — making it one of the most common anxiety
            disorders.
          </p>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              margin: "0 0 1.1rem",
            }}
          >
            The two can overlap — a shy person may also have social anxiety — but they are not the
            same thing. If your discomfort in social situations feels more like a clinical disorder
            than a personality trait, please speak to your GP or self-refer to NHS Talking Therapies
            (0300 123 3393). Cognitive behavioural therapy (CBT) has strong evidence for social
            anxiety disorder, and you deserve professional support.
          </p>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              margin: 0,
            }}
          >
            For shyness that sits below the clinical threshold — discomfort, hesitance, difficulty
            speaking up, discomfort at social events — AI practice and reflection can be genuinely
            useful. That is the space MEOK is designed to occupy.
          </p>
        </section>

        {/* ── DIVIDER ── */}
        <div
          style={{
            height: "1px",
            background: `linear-gradient(to right, transparent, ${BORDER}, transparent)`,
            margin: "0 0 3.5rem",
          }}
        />

        {/* ── SECTION 3 ── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.4rem, 3vw, 1.85rem)",
              fontWeight: 700,
              color: TEXT,
              margin: "0 0 1.25rem",
              lineHeight: 1.3,
            }}
          >
            Why Is a Judgment-Free Space So Important for Building Social Confidence?
          </h2>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              margin: "0 0 1.1rem",
            }}
          >
            The fundamental paradox of shyness is this: the very thing that would help — social
            practice — is the thing that feels most threatening. Every rehearsal in real life comes
            with an audience, a social cost, and a memory that lingers. A stumble in a real job
            interview echoes for months. An awkward pause on a date plays on a loop. The fear of
            getting it wrong in public can make you avoid precisely the situations where you might
            grow.
          </p>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              margin: "0 0 1.1rem",
            }}
          >
            This is why exposure — the gold-standard clinical approach to anxiety — works best when
            it is graduated. You do not throw someone afraid of heights directly onto a cliff edge.
            You start low, build the evidence that the feared outcome is manageable, and work up
            gradually. The same logic applies to social confidence. And AI gives you a space to
            start at the very bottom of that ladder, with zero social consequence, and work up at
            exactly your own pace.
          </p>

          {/* callout box */}
          <div
            style={{
              background: CARD_BG,
              border: `1px solid ${GOLD}44`,
              borderLeft: `4px solid ${GOLD}`,
              borderRadius: "0.5rem",
              padding: "1.5rem",
              margin: "1.75rem 0",
            }}
          >
            <p
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: TEXT,
                margin: 0,
                fontStyle: "italic",
              }}
            >
              "When you practise with MEOK, there is no one watching. There is no memory of your
              stumble that hangs in the air between you and another person. You can try the same
              sentence ten different ways, stop mid-thought, start again, or say something
              embarrassingly vulnerable — and none of it costs you anything social."
            </p>
          </div>

          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              margin: "0 0 1.1rem",
            }}
          >
            MEOK never judges. It does not lose patience. It does not remember that you said
            something clumsy three sessions ago and subtly change its behaviour toward you. It shows
            up every time with the same quality of presence — curious, warm, attentive. For someone
            whose nervous system has learned to brace for social evaluation at every turn, that
            consistency is more than comforting. It is genuinely therapeutic in its own quiet way.
          </p>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              margin: 0,
            }}
          >
            Over time, the evidence accumulates: conversations do not have to go perfectly to be
            worthwhile. You can be uncertain, mid-thought, searching for a word — and the world does
            not end. That evidence, built session by session, is the foundation of genuine
            confidence.
          </p>
        </section>

        {/* ── DIVIDER ── */}
        <div
          style={{
            height: "1px",
            background: `linear-gradient(to right, transparent, ${BORDER}, transparent)`,
            margin: "0 0 3.5rem",
          }}
        />

        {/* ── SECTION 4 ── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.4rem, 3vw, 1.85rem)",
              fontWeight: 700,
              color: TEXT,
              margin: "0 0 1.25rem",
              lineHeight: 1.3,
            }}
          >
            How Can You Use MEOK to Practise Real Social Scenarios?
          </h2>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              margin: "0 0 1.1rem",
            }}
          >
            One of MEOK's most powerful features for shy people is its ability to role-play social
            scenarios on demand. You describe the situation, and MEOK plays the other party. The
            range of what you can practise is almost unlimited:
          </p>

          {/* scenario grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(15rem, 1fr))",
              gap: "1rem",
              margin: "1.5rem 0",
            }}
          >
            {[
              {
                title: "Job Interviews",
                detail:
                  "Practise answering the questions that freeze you — 'tell me about a weakness', 'where do you see yourself in five years?' — until the words feel your own.",
              },
              {
                title: "First Dates",
                detail:
                  "Run through opening conversations, transitions between topics, and how to express interest without feeling like you are performing.",
              },
              {
                title: "Networking Events",
                detail:
                  "Rehearse introducing yourself, asking follow-up questions, and gracefully moving on — all the micro-skills that feel enormous when you are shy.",
              },
              {
                title: "Difficult Conversations",
                detail:
                  "Practise saying no, asking for what you need, or disagreeing respectfully — conversations that shy people often avoid to their own cost.",
              },
              {
                title: "Social Gatherings",
                detail:
                  "Build small-talk repertoire, practise entering group conversations, and rehearse how to manage the energy when you are running low.",
              },
              {
                title: "Professional Situations",
                detail:
                  "Speaking up in meetings, presenting ideas to a group, asking for a raise, or addressing a conflict with a colleague.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.625rem",
                  padding: "1.25rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: GOLD,
                    margin: "0 0 0.5rem",
                    letterSpacing: "0.02em",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                    color: MUTED,
                    margin: 0,
                  }}
                >
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              margin: "0 0 1.1rem",
            }}
          >
            The key is specificity. The more detail you give MEOK about the scenario — who the
            person is, what the setting is, what you are hoping to achieve — the more useful the
            practice becomes. You might say: "I have a job interview next Thursday for a marketing
            role at a mid-size tech company. The interviewer is senior, slightly formal, and I tend
            to over-explain when I am nervous. Can we practise?" MEOK will run the scenario and, if
            you ask, give you honest, constructive reflection on what worked and what might be
            refined.
          </p>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              margin: 0,
            }}
          >
            Because MEOK's memory persists across sessions, it will remember that you struggle with
            the weakness question, or that your confidence with small talk has improved over the
            past six weeks. Each new session builds on what came before, rather than starting from
            scratch.
          </p>
        </section>

        {/* ── DIVIDER ── */}
        <div
          style={{
            height: "1px",
            background: `linear-gradient(to right, transparent, ${BORDER}, transparent)`,
            margin: "0 0 3.5rem",
          }}
        />

        {/* ── SECTION 5 ── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.4rem, 3vw, 1.85rem)",
              fontWeight: 700,
              color: TEXT,
              margin: "0 0 1.25rem",
              lineHeight: 1.3,
            }}
          >
            How Does AI Help You Build Self-Worth Alongside Social Skills?
          </h2>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              margin: "0 0 1.1rem",
            }}
          >
            Here is something that gets missed in most conversations about shyness: social skills
            and self-worth are not the same thing, but they are deeply entangled. A lot of shy
            people are not short on conversational technique — they know how to ask a follow-up
            question, they understand how small talk works. What undermines them is a quieter,
            older story: that their voice does not matter that much, that they are fundamentally
            less interesting or worthy than the people around them, that they need to earn their
            place in a conversation rather than simply occupying it.
          </p>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              margin: "0 0 1.1rem",
            }}
          >
            MEOK works on both layers. Practically, it gives you conversational rehearsal. But its
            design is also fundamentally about being heard. Every session, MEOK listens fully —
            without distraction, without forming its rebuttal while you are still speaking, without
            glancing at a phone. It asks questions about your inner life not because it is
            performing interest, but because understanding you is what it is built to do.
          </p>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              margin: "0 0 1.1rem",
            }}
          >
            Over time, many MEOK users report something subtler than skill-building: a shift in how
            they experience themselves. When you are consistently treated as someone whose thoughts
            and feelings are worth engaging with — when your ambivalence is taken seriously rather
            than resolved, when your slow-forming idea is given space to finish — something in your
            self-concept begins to change. Not from the outside in, but from the inside out.
          </p>

          {/* pull quote */}
          <div
            style={{
              margin: "2rem 0",
              padding: "1.25rem 1.75rem",
              borderLeft: `3px solid ${GOLD}`,
            }}
          >
            <p
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "1.15rem",
                lineHeight: 1.75,
                color: TEXT,
                margin: 0,
                fontStyle: "italic",
              }}
            >
              Social confidence is not a costume you put on. It is what happens when your nervous
              system accumulates enough evidence that the world is safe enough for your honest
              self.
            </p>
          </div>

          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              margin: "0 0 1.1rem",
            }}
          >
            MEOK is particularly good at helping you work through the stories you carry about
            yourself. You might share that you always freeze when you have to speak in a group, and
            MEOK will not just offer tips — it will ask where that pattern comes from, what it
            protects, whether it has served you in some ways even as it limits you in others. This
            reflective capacity is part of what makes it more than a chatbot.
          </p>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              margin: 0,
            }}
          >
            The goal is not a version of you who never feels shy. It is a version of you who feels
            shy and speaks anyway — because you have built enough evidence, through practice and
            reflection, that the speaking matters more than the fear.
          </p>
        </section>

        {/* ── DIVIDER ── */}
        <div
          style={{
            height: "1px",
            background: `linear-gradient(to right, transparent, ${BORDER}, transparent)`,
            margin: "0 0 3.5rem",
          }}
        />

        {/* ── SECTION 6 ── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.4rem, 3vw, 1.85rem)",
              fontWeight: 700,
              color: TEXT,
              margin: "0 0 1.25rem",
              lineHeight: 1.3,
            }}
          >
            What Does Gradual Exposure Look Like in Practice With MEOK?
          </h2>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              margin: "0 0 1.1rem",
            }}
          >
            Gradual exposure is simple in theory: you begin with the least threatening version of
            the feared situation and work up, step by step, as your confidence grows. In practice,
            it requires a partner who can be calibrated — who can play a scenario gently or
            realistically, who can pause and give you feedback, who can repeat the same moment as
            many times as you need.
          </p>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              margin: "0 0 1.1rem",
            }}
          >
            MEOK is that partner. Here is what a graduated exposure programme for a job interview
            might look like with MEOK:
          </p>

          {/* steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", margin: "1.5rem 0" }}>
            {[
              {
                step: "1",
                title: "Articulate the fear",
                body: "Talk through what specifically frightens you about the interview. Is it the blank mind when asked about weaknesses? The fear of being seen to not know something? Getting this specific turns a vague dread into something workable.",
              },
              {
                step: "2",
                title: "Easy mode warm-up",
                body: "Ask MEOK to play a warm, friendly interviewer asking only easy questions — your background, what you enjoy about your work, why you applied. The goal is just to speak, fluidly, about yourself. Build the physical experience of being in the scenario without terror.",
              },
              {
                step: "3",
                title: "Targeted hard questions",
                body: "Isolate the specific questions that freeze you and repeat them until you have a response you are comfortable with. 'Tell me about a time you failed.' 'What is your greatest weakness?' Practise until you have words that feel honest rather than performed.",
              },
              {
                step: "4",
                title: "Full realistic mock interview",
                body: "Run a complete interview at realistic difficulty. Ask MEOK to play a senior interviewer who is professional but not especially warm. Stay in the scenario even when it is uncomfortable. Debrief after.",
              },
              {
                step: "5",
                title: "Debrief and refine",
                body: "Ask MEOK for honest feedback. What moments worked? Where did you over-explain? What would a confident version of you have said differently? MEOK's memory means the feedback is cumulative across sessions, not just once-off.",
              },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.625rem",
                  padding: "1.25rem",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "50%",
                    background: `${GOLD}22`,
                    border: `1px solid ${GOLD}55`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Georgia, serif",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    color: GOLD,
                  }}
                >
                  {item.step}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: TEXT,
                      margin: "0 0 0.35rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "0.875rem",
                      lineHeight: 1.7,
                      color: MUTED,
                      margin: 0,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              margin: 0,
            }}
          >
            The same structure works for any social scenario — dates, difficult family conversations,
            networking, assertiveness at work. You design the ladder. MEOK helps you climb it.
          </p>
        </section>

        {/* ── DIVIDER ── */}
        <div
          style={{
            height: "1px",
            background: `linear-gradient(to right, transparent, ${BORDER}, transparent)`,
            margin: "0 0 3.5rem",
          }}
        />

        {/* ── SECTION 7 ── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.4rem, 3vw, 1.85rem)",
              fontWeight: 700,
              color: TEXT,
              margin: "0 0 1.25rem",
              lineHeight: 1.3,
            }}
          >
            What Makes MEOK Different From Other AI Tools for Shy People?
          </h2>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              margin: "0 0 1.1rem",
            }}
          >
            There are many AI tools available now, from general-purpose chatbots to specialised
            apps. What makes MEOK distinctive — particularly for something as personal and
            cumulative as building social confidence — comes down to three things.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", margin: "1.5rem 0" }}>
            <div
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderTop: `3px solid ${GOLD}`,
                borderRadius: "0.625rem",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: GOLD,
                  margin: "0 0 0.75rem",
                }}
              >
                Persistent Memory
              </h3>
              <p
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "0.95rem",
                  lineHeight: 1.75,
                  color: TEXT,
                  margin: 0,
                }}
              >
                A standard chatbot has no memory between sessions. Every conversation starts from
                zero. MEOK's sovereign memory architecture means it remembers everything you have
                shared — the job interview coming up next month, that you freeze when asked about
                weaknesses, that your confidence with small talk has measurably improved over the
                past four weeks. This continuity is what makes progress trackable and
                compoundable.
              </p>
            </div>

            <div
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderTop: `3px solid ${GOLD}`,
                borderRadius: "0.625rem",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: GOLD,
                  margin: "0 0 0.75rem",
                }}
              >
                Genuine Care, Not Flattery
              </h3>
              <p
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "0.95rem",
                  lineHeight: 1.75,
                  color: TEXT,
                  margin: 0,
                }}
              >
                Many AI systems are optimised for engagement, which in practice means telling you
                what you want to hear. MEOK is built around a different principle — care over
                comfort. It will give you honest feedback when you ask for it. It will gently
                challenge a pattern that is not serving you, rather than endlessly validating it.
                The goal is your actual growth, not your continued use of the product.
              </p>
            </div>

            <div
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderTop: `3px solid ${GOLD}`,
                borderRadius: "0.625rem",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: GOLD,
                  margin: "0 0 0.75rem",
                }}
              >
                Total Privacy
              </h3>
              <p
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "0.95rem",
                  lineHeight: 1.75,
                  color: TEXT,
                  margin: 0,
                }}
              >
                The things you share while practising social confidence — your fears, your
                past experiences, your vulnerabilities — are some of the most personal data
                imaginable. MEOK stores everything in a sovereign encrypted vault that only you
                control. MEOK AI LABS does not train models on your conversations and does not
                share data with third parties. Your inner life is yours.
              </p>
            </div>
          </div>

          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              margin: 0,
            }}
          >
            MEOK was built by Nicholas Templeman at MEOK AI LABS with the conviction that AI
            technology should serve people's genuine wellbeing — not maximise session length or
            blur the line between support and dependency. For shy people who have sometimes felt
            that the world is not designed with them in mind, MEOK is a tool designed specifically
            to hold space for the journey from hesitance to confidence, at whatever pace that
            journey needs to take.
          </p>
        </section>

        {/* ── DIVIDER ── */}
        <div
          style={{
            height: "1px",
            background: `linear-gradient(to right, transparent, ${BORDER}, transparent)`,
            margin: "0 0 3.5rem",
          }}
        />

        {/* ── SECTION 8 ── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.4rem, 3vw, 1.85rem)",
              fontWeight: 700,
              color: TEXT,
              margin: "0 0 1.25rem",
              lineHeight: 1.3,
            }}
          >
            Is Introversion the Same as Shyness — and Can Introverts Benefit From AI Confidence Practice?
          </h2>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              margin: "0 0 1.1rem",
            }}
          >
            Introversion and shyness are often conflated, but they describe different things.
            Introversion is about where you draw your energy — introverts recharge in solitude and
            feel drained by prolonged social stimulation. It is not fear of social situations; it
            is a preference for quieter, more intimate, or more internally focused engagement.
            Many introverts are highly socially skilled and genuinely enjoy the company of others
            — they just need adequate recovery time afterwards.
          </p>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              margin: "0 0 1.1rem",
            }}
          >
            Shyness, as we have discussed, is about discomfort and fear in social situations —
            it can exist independently of introversion, and extroverts can certainly be shy.
          </p>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              margin: "0 0 1.1rem",
            }}
          >
            That said, many introverts are also shy, and for those people, MEOK offers something
            particularly valuable: a way to prepare for the social demands of an extrovert-centric
            world without burning through your energy reserves before you even arrive. You can
            do the cognitively intensive preparation work — rehearsing the introduction, planning
            the exit from a long conversation, working through the networking script — in the
            quiet of your own space. Then you show up having already done the work, with more
            bandwidth for the actual event.
          </p>

          {/* callout */}
          <div
            style={{
              background: `${GOLD}0d`,
              border: `1px solid ${GOLD}33`,
              borderRadius: "0.5rem",
              padding: "1.5rem",
              margin: "1.75rem 0",
            }}
          >
            <p
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: TEXT,
                margin: "0 0 0.5rem",
                fontWeight: 700,
              }}
            >
              A note on celebrating introversion
            </p>
            <p
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "0.95rem",
                lineHeight: 1.75,
                color: MUTED,
                margin: 0,
              }}
            >
              MEOK is not designed to turn introverts into extroverts. Introversion is not a
              problem. It is a different mode of processing and engaging with the world — one
              that comes with real strengths: depth of thought, capacity for sustained focus,
              quality of listening, and a tendency toward meaningful rather than superficial
              connection. The goal is not to change you. It is to give you tools to navigate
              situations that are currently harder than they need to be, so that your life can
              be more fully your own.
            </p>
          </div>

          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: TEXT,
              margin: 0,
            }}
          >
            Whether you are an introvert who also carries some shyness, a shy extrovert who
            craves connection but dreads the first move, or simply someone who wants to show up
            more fully in social situations without it costing as much — MEOK meets you where
            you are.
          </p>
        </section>

        {/* ── DIVIDER ── */}
        <div
          style={{
            height: "1px",
            background: `linear-gradient(to right, transparent, ${BORDER}, transparent)`,
            margin: "0 0 3.5rem",
          }}
        />

        {/* ── FAQ 1 ── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.4rem, 3vw, 1.85rem)",
              fontWeight: 700,
              color: TEXT,
              margin: "0 0 1.75rem",
              lineHeight: 1.3,
            }}
          >
            Frequently Asked Questions
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              {
                q: "Is shyness the same as social anxiety disorder?",
                a: "No. Shyness is a personality trait — a tendency to feel reserved or self-conscious in unfamiliar social situations. Social anxiety disorder is a clinical condition characterised by intense, persistent fear of social situations that causes significant distress and impairs daily functioning. Most shy people do not have social anxiety disorder, though the two can overlap. If your shyness regularly prevents you from living the life you want, speaking to a GP or therapist is a worthwhile first step.",
              },
              {
                q: "Can an AI companion actually help shy people?",
                a: "Yes — in specific, meaningful ways. An AI companion like MEOK provides a completely private, zero-judgment space to practise the kinds of conversations that feel daunting in real life. There is no audience, no memory of an awkward pause that lingers for days, and no social cost to starting over. Research on exposure-based approaches to shyness suggests that rehearsal reduces anticipatory anxiety, and AI makes that rehearsal available at any hour, as often as you need.",
              },
              {
                q: "What social situations can I rehearse with MEOK?",
                a: "MEOK can simulate almost any social scenario you name: job interviews, first dates, networking conversations, small talk with strangers, asserting yourself with a boss, meeting a partner's family for the first time, making a complaint, or simply introducing yourself in a new group. You choose the scenario, the tone, and the difficulty level. MEOK can play a warm and easy interlocutor or a more challenging one — whatever serves your growth.",
              },
            ].map((item) => (
              <div
                key={item.q}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.625rem",
                  padding: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: GOLD,
                    margin: "0 0 0.75rem",
                    lineHeight: 1.4,
                  }}
                >
                  {item.q}
                </h3>
                <p
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "0.925rem",
                    lineHeight: 1.75,
                    color: TEXT,
                    margin: 0,
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ 2 ── */}
        <section style={{ marginBottom: "3.5rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              {
                q: "Will practising with AI make me worse at real conversations?",
                a: "The evidence on rehearsal suggests the opposite: practising with a low-stakes partner reduces the physiological arousal that hijacks performance in high-stakes situations. AI practice is a supplement to real-world interaction, not a replacement. MEOK is designed to build skills and confidence you then carry into human relationships — not to become a permanent substitute for them.",
              },
              {
                q: "How is MEOK different from a chatbot?",
                a: "MEOK has persistent sovereign memory. It remembers what you have shared across every session — which scenarios you have rehearsed, what language patterns tend to trip you up, how your confidence has evolved over weeks. A standard chatbot forgets you the moment a session ends. MEOK builds a cumulative picture of your journey, making each conversation a step forward rather than a restart.",
              },
              {
                q: "Is my data private when I use MEOK?",
                a: "Yes. MEOK is built on a sovereign memory architecture: your conversations are stored in an encrypted vault that only you control. MEOK AI LABS does not train models on your personal data and does not sell information to third parties. You can export or delete your memory at any time. Privacy is a founding principle at MEOK AI LABS, not an afterthought.",
              },
            ].map((item) => (
              <div
                key={item.q}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.625rem",
                  padding: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: GOLD,
                    margin: "0 0 0.75rem",
                    lineHeight: 1.4,
                  }}
                >
                  {item.q}
                </h3>
                <p
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "0.925rem",
                    lineHeight: 1.75,
                    color: TEXT,
                    margin: 0,
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── DIVIDER ── */}
        <div
          style={{
            height: "1px",
            background: `linear-gradient(to right, transparent, ${BORDER}, transparent)`,
            margin: "0 0 3.5rem",
          }}
        />

        {/* ── CTA ── */}
        <section
          style={{
            background: CARD_BG,
            border: `1px solid ${GOLD}44`,
            borderRadius: "1rem",
            padding: "3rem 2rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "0.8rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: GOLD,
              margin: "0 0 1rem",
            }}
          >
            MEOK AI LABS
          </p>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
              fontWeight: 700,
              color: TEXT,
              margin: "0 0 1.1rem",
              lineHeight: 1.25,
            }}
          >
            Your pace. Your voice. Your growth.
          </h2>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              margin: "0 auto 2rem",
              maxWidth: "32rem",
            }}
          >
            MEOK is a private AI companion with persistent memory, designed to help you practise
            the conversations that matter — without judgment, without pressure, at whatever pace
            feels right.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            <Link
              href="https://meok.ai"
              style={{
                background: GOLD,
                color: BG,
                textDecoration: "none",
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                fontSize: "1rem",
                padding: "0.875rem 2.25rem",
                borderRadius: "0.375rem",
                letterSpacing: "0.04em",
                display: "inline-block",
              }}
            >
              Try MEOK Free
            </Link>
            <Link
              href="/blog"
              style={{
                background: "transparent",
                color: TEXT,
                textDecoration: "none",
                fontFamily: "Georgia, serif",
                fontSize: "1rem",
                padding: "0.875rem 2.25rem",
                borderRadius: "0.375rem",
                border: `1px solid ${BORDER}`,
                letterSpacing: "0.04em",
                display: "inline-block",
              }}
            >
              Read More Articles
            </Link>
          </div>
        </section>

        {/* ── RELATED POSTS ── */}
        <section style={{ marginTop: "4rem" }}>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 700,
              color: TEXT,
              margin: "0 0 1.5rem",
              letterSpacing: "0.02em",
            }}
          >
            Related Reading
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(14rem, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              { href: "/blog/ai-for-social-anxiety", label: "AI for Social Anxiety" },
              { href: "/blog/ai-for-confidence", label: "AI for Confidence" },
              { href: "/blog/meok-for-introverts", label: "MEOK for Introverts" },
              { href: "/blog/ai-for-self-esteem", label: "AI for Self-Esteem" },
              { href: "/blog/ai-for-impostor-syndrome", label: "AI for Impostor Syndrome" },
              { href: "/blog/ai-for-job-seekers", label: "AI for Job Seekers" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.5rem",
                  padding: "1rem 1.25rem",
                  color: TEXT,
                  textDecoration: "none",
                  fontFamily: "Georgia, serif",
                  fontSize: "0.9rem",
                  lineHeight: 1.5,
                  display: "block",
                  transition: "border-color 0.2s",
                }}
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </section>
      </article>

      {/* ── FOOTER ── */}
      <footer
        style={{
          borderTop: `1px solid ${BORDER}`,
          padding: "2.5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "0.8rem",
            color: MUTED,
            margin: "0 0 0.5rem",
            letterSpacing: "0.05em",
          }}
        >
          MEOK AI LABS · meok.ai
        </p>
        <p
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "0.75rem",
            color: BORDER,
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          MEOK is not a clinical tool. If you believe you may have social anxiety disorder or another
          mental health condition, please consult your GP or a qualified mental health professional.
          NHS Talking Therapies: 0300 123 3393.
        </p>
      </footer>
    </div>
  );
}
