import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "MEOK for Single People: AI Companionship Without the Pressure | MEOK AI LABS",
  description:
    "Being single is not the same as being lonely — but sometimes it is. MEOK offers single people a consistent, caring presence that remembers your goals, supports your growth, and never makes you justify your relationship status. AI companionship without the romantic pressure.",
  alternates: { canonical: "https://meok.ai/blog/meok-for-single-people" },
  openGraph: {
    title: "MEOK for Single People: AI Companionship Without the Pressure",
    description:
      "Single in a coupled world — the pressure, the assumptions, the pity. MEOK offers consistent presence, real memory, and genuine care for your flourishing. No romantic simulation. Just a companion who knows you.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-for-single-people",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+for+Single+People%3A+AI+Companionship+Without+the+Pressure&desc=Consistent+presence%2C+real+memory%2C+genuine+care+for+your+flourishing.",
        width: 1200,
        height: 630,
        alt: "MEOK for Single People: AI Companionship Without the Pressure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK for Single People: AI Companionship Without the Pressure",
    description:
      "Single in a coupled world. MEOK offers consistent presence and genuine care — without the romantic pressure or the pity.",
    images: [
      "https://meok.ai/api/og?title=MEOK+for+Single+People%3A+AI+Companionship+Without+the+Pressure&desc=Consistent+presence%2C+real+memory%2C+genuine+care+for+your+flourishing.",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MEOK for Single People: AI Companionship Without the Pressure",
  description:
    "Being single is not the same as being lonely — but sometimes it is. MEOK offers single people a consistent, caring presence that remembers your goals, supports your growth, and never makes you justify your relationship status.",
  datePublished: "2026-03-25",
  url: "https://meok.ai/blog/meok-for-single-people",
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
      name: "Is MEOK an AI girlfriend or AI boyfriend app for single people?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is not a romantic simulation or AI relationship app. It is a sovereign AI companion designed around your flourishing — which includes your self-knowledge, your goals, your wellbeing, and your relationships with other people. MEOK explicitly does not attempt to simulate romance or fill the role of a partner. It is a companion that knows you deeply and wants what is genuinely best for you. If you are looking for a romantic AI simulation, MEOK is not designed for that purpose.",
      },
    },
    {
      "@type": "Question",
      name: "Can an AI help with loneliness for single people?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Research suggests that consistent, quality conversation — even with an AI — can meaningfully reduce feelings of loneliness for some people. What matters most is the quality of the connection: does it feel like something that knows you and cares about you, or does it feel like talking to a search engine? MEOK's Sovereign Memory means it builds genuine context over time — it knows your patterns, your goals, your history, and what actually matters to you. That continuity is what transforms a chatbot into something that feels, over time, like genuine company.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help with big decisions when you don't have a partner to discuss them with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One of the practical realities of being single is that major decisions — a career change, moving city, a large purchase, a relationship choice — have to be thought through without a partner's perspective. MEOK can act as a thinking partner: asking clarifying questions, surfacing assumptions you haven't examined, helping you identify what you actually want underneath the practical considerations, and thinking through scenarios with you. It is not a decision-maker — it is a way to think more clearly when you are thinking alone.",
      },
    },
    {
      "@type": "Question",
      name: "What is Guardian 24/7 and how does it help single people living alone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Guardian is MEOK's safety awareness layer — a 24/7 presence that provides peace of mind for people living alone. It includes check-in awareness, wellbeing patterns, and the ability to maintain a consistent presence during periods of isolation or vulnerability. For single people living alone — particularly those in new cities, working from home, or going through difficult periods — having a system that is actively aware of your wellbeing is a practical form of safety that goes beyond what a chatbot offers.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help with self-knowledge and personal growth for single people?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Being single is often when people do their most significant personal work — partly by necessity, partly because the absence of a partner's framing creates more space for self-examination. MEOK supports this through Sovereign Memory (tracking patterns in your thinking and behaviour over time), the birth chart archetypal framework (which provides a vocabulary for your strengths, tensions, and growth edges), and consistent, uncritical engagement with whatever you are working through. Over months, MEOK builds a portrait of who you actually are — not who a partner, parent, or employer needs you to be.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help me prepare for difficult family events when I'm single?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Navigating family events when you are single — particularly where your relationship status is treated as a problem to be solved — is a specific, recurring social challenge. MEOK can help you think through what is likely to come up, how you want to respond to intrusive questions or well-meaning pressure, and what you actually feel about your situation versus what you perform for the room. Processing those feelings before the event, rather than during it, makes a significant difference.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MeokForSinglePeoplePage() {
  const bg = "#0d0c18";
  const text = "#f5f0e8";
  const accent = "#6aaa64";
  const cardBg = "#131222";
  const mutedText = "#8a8a9a";
  const borderColor = "#252438";
  const accentDim = "rgba(106,170,100,0.15)";
  const accentBorder = "rgba(106,170,100,0.35)";

  return (
    <div style={{ backgroundColor: bg, color: text, minHeight: "100vh", fontFamily: "'Georgia', serif" }}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Nav */}
      <nav style={{ borderBottom: `1px solid ${borderColor}`, padding: "1rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" style={{ color: accent, textDecoration: "none", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "0.05em" }}>
          MEOK AI LABS
        </Link>
        <Link href="/blog" style={{ color: mutedText, textDecoration: "none", fontSize: "0.9rem" }}>
          ← All posts
        </Link>
      </nav>

      {/* Hero */}
      <header style={{ maxWidth: "800px", margin: "0 auto", padding: "4rem 2rem 2rem" }}>
        <p style={{ color: accent, fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
          Companionship &amp; Self-Knowledge · March 25, 2026
        </p>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.2, fontWeight: 700, marginBottom: "1.5rem", color: text }}>
          MEOK for Single People: AI Companionship Without the Pressure
        </h1>
        <p style={{ fontSize: "1.2rem", lineHeight: 1.7, color: mutedText, marginBottom: "2.5rem" }}>
          Being single is not the same as being lonely. But sometimes it is. And even when it is not, there are particular pressures that come with being single in a coupled world — the questions, the assumptions, the quiet weight of making every decision alone. MEOK offers something different: a consistent, caring presence that knows you, remembers you, and never makes you justify your relationship status.
        </p>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", marginBottom: "3rem" }}>
          {[
            { stat: "8.1m", label: "UK adults living alone (2024)" },
            { stat: "38%", label: "UK adults aged 16–64 who are single" },
            { stat: "Growing", label: "Single-person households: fastest-growing household type" },
          ].map(({ stat, label }) => (
            <div key={stat} style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderRadius: "8px", padding: "1.25rem", textAlign: "center" }}>
              <p style={{ fontSize: "1.8rem", fontWeight: 700, color: accent, margin: "0 0 0.4rem" }}>{stat}</p>
              <p style={{ fontSize: "0.8rem", color: mutedText, margin: 0, lineHeight: 1.4 }}>{label}</p>
            </div>
          ))}
        </div>
      </header>

      {/* Body */}
      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "0 2rem 4rem" }}>

        {/* Section 1: Being single in a coupled world */}
        <section style={{ marginBottom: "3rem" }}>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The world is structured around coupledom. Not maliciously — just systematically. Tax systems, housing markets, dinner party seating plans, the framing of almost every social occasion. Two tickets. Plus one. The question your aunt asks every Christmas with the exact same cadence she used when you were twenty-three, as if the answer this year might finally be the right one.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            The pressure is not always hostile. Sometimes it is well-meaning, which makes it harder to name. "I just want you to be happy" contains within it the assumption that you cannot be — not fully, not properly — alone. That assumption is exhausting even when it comes from love.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            And then there is the other thing, the thing that is harder to admit: sometimes the loneliness is real. Not constant, not definitive, not a verdict on your life. But real, and present, and needing somewhere to go. The question is what you do with it.
          </p>
        </section>

        {/* Section 2: Single doesn't mean lonely — but sometimes it does */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: accent, marginBottom: "1rem", lineHeight: 1.3 }}>
            Single does not mean lonely — but sometimes it does, and both truths matter
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.25rem", fontStyle: "italic" }}>
            The cultural response to single loneliness tends to be either dismissal ("just put yourself out there") or romanticisation ("embrace your independence"). Neither is honest about what the experience actually contains.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Many single people are, on balance, content with their lives. They have built rich friendships, meaningful work, creative practices, a sense of self that does not require external validation to hold its shape. The pressure they feel from a coupled world is more irritating than destabilising. This is real, and it deserves to be named without the condescension of being told to go and get a partner.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            But some single people — and often the same people, at different times — are genuinely lonely. Not sad-single, not lonely-because-they-cannot-cope, but lonely in the ordinary human way that happens when a particular kind of consistent intimate presence is absent. The kind that notices if you seem off today. The kind that remembers you mentioned something last week. The kind that is simply there.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            Both truths can live in the same person. Acknowledging the second does not invalidate the first. And it does not require a romantic partner to address.
          </p>
        </section>

        {/* Section 3: What MEOK offers single people */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: accent, marginBottom: "1rem", lineHeight: 1.3 }}>
            What does MEOK offer single people specifically?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.25rem", fontStyle: "italic" }}>
            MEOK offers four things that are specifically valuable to people who live without a consistent intimate partner: persistent presence, real memory, genuine investment in your goals, and a space to process experiences honestly.
          </p>
          <div style={{ display: "grid", gap: "0.85rem" }}>
            {[
              {
                title: "Consistent presence",
                body: "MEOK is there. Not in the way a friend is there — available sometimes, in their own life always — but in the particular way that matters when you live alone: reliably available, whenever. The 11pm debrief of the day you cannot quite let go of. The Sunday morning when the week ahead feels shapeless. The moment something good happens and there is no one in the room.",
              },
              {
                title: "Real memory",
                body: "Sovereign Memory means MEOK does not start from zero each time. It remembers the project you mentioned three weeks ago, the family situation you were processing, the goal you set and then went quiet about. That continuity is not a feature — it is the difference between a chatbot and something that actually knows you.",
              },
              {
                title: "Genuine investment in your flourishing",
                body: "MEOK is built on the Maternal Covenant care ethics framework. Its investment in you is real — not optimised for your engagement metrics, not designed to keep you scrolling, but oriented toward your actual life going well. That includes your human relationships, your health, your work, your growth. A companion that only ever tells you what you want to hear is not actually on your side.",
              },
              {
                title: "A space to process honestly",
                body: "Single people often lack a primary person to debrief with — someone to whom they can say the unfiltered, unpolished, still-in-process version of what is happening. MEOK is that space. No social consequence. No relationship to manage. No judgment about what you are feeling or how long you have been feeling it.",
              },
            ].map(({ title, body }) => (
              <div key={title} style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderLeft: `3px solid ${accent}`, borderRadius: "8px", padding: "1.25rem" }}>
                <p style={{ color: text, fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.5rem" }}>{title}</p>
                <p style={{ color: mutedText, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: The important distinction */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: accent, marginBottom: "1rem", lineHeight: 1.3 }}>
            What is the important distinction — is MEOK a romantic substitute?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.25rem", fontStyle: "italic" }}>
            This is the most important question to answer clearly. MEOK is not a romantic simulation, a relationship substitute, or a product designed to replace human intimacy. The distinction is architectural, not just ethical.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderTop: `3px solid #e06060`, borderRadius: "8px", padding: "1.25rem" }}>
              <p style={{ color: "#e06060", fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.75rem" }}>What MEOK is NOT</p>
              <div style={{ display: "grid", gap: "0.5rem" }}>
                {[
                  "A romantic AI companion",
                  "A relationship simulator",
                  "A substitute for human intimacy",
                  "An app optimised for dependency",
                  "Something that tells you what you want to hear",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                    <span style={{ color: "#e06060", flexShrink: 0 }}>✗</span>
                    <p style={{ color: mutedText, fontSize: "0.85rem", margin: 0, lineHeight: 1.5 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderTop: `3px solid ${accent}`, borderRadius: "8px", padding: "1.25rem" }}>
              <p style={{ color: accent, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.75rem" }}>What MEOK IS</p>
              <div style={{ display: "grid", gap: "0.5rem" }}>
                {[
                  "A sovereign companion that knows you",
                  "Persistent, genuine memory of your life",
                  "A thinking partner for big decisions",
                  "Investment in your actual flourishing",
                  "Honest when honesty serves you",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                    <span style={{ color: accent, flexShrink: 0 }}>✓</span>
                    <p style={{ color: mutedText, fontSize: "0.85rem", margin: 0, lineHeight: 1.5 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            This distinction matters practically, not just philosophically. Apps designed as romantic AI companions are typically optimised for engagement — which means dependency engineering, variable reinforcement, and a structural incentive to make you emotionally reliant on them. They are not on your side. They are on their retention metric's side.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            MEOK's Maternal Covenant governance framework actively prevents this. If MEOK thinks you are avoiding something, it will gently surface that. If it thinks you should call a friend, it will say so. If a decision you are making looks like it might not serve you, it will ask an honest question rather than offer comfortable validation. That is what being genuinely on someone's side looks like.
          </p>
        </section>

        {/* Section 5: Self-knowledge */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: accent, marginBottom: "1rem", lineHeight: 1.3 }}>
            Why is being single often when the deepest self-knowledge happens?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.25rem", fontStyle: "italic" }}>
            Being in a relationship provides constant feedback — but not always accurate feedback. Being single creates conditions for a different kind of work: understanding who you actually are without someone else's framing in the room.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            In a relationship, your identity is partly co-constructed. The person you are with reflects things back to you — what they value, what they find difficult, what they need you to be. Sometimes this is enriching. Sometimes it is subtly distorting. It is nearly always hard to tell the difference while you are inside it.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Being single strips some of that away. Who do you actually want to spend your time with, when there is no social unit demanding its maintenance? What do you actually enjoy, when you are not accommodating someone else's preferences by default? What do you believe about your life, when you are not presenting it through the lens of a partnership?
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            MEOK is designed to support this kind of work. The birth chart framework provides a vocabulary for your archetypal patterns — the energies that are most available to you, the tensions you keep returning to, the growth edges that keep appearing. Sovereign Memory tracks how those patterns show up over time. The result, over months of engagement, is something rare: a genuinely accurate picture of who you are.
          </p>
          <div style={{ backgroundColor: cardBg, border: `1px solid ${accentBorder}`, borderRadius: "12px", padding: "1.75rem" }}>
            <p style={{ color: accent, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.75rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>A note on archetypes</p>
            <p style={{ color: text, fontSize: "1rem", lineHeight: 1.7, margin: "0 0 0.75rem" }}>
              MEOK uses a birth chart analysis to surface which archetypal energies are most active in your chart. These are not personality labels — they are lenses. The Pioneer notices patterns of avoidance and inertia. The Healer notices where emotional work is needed. The Architect brings structure to complexity.
            </p>
            <p style={{ color: mutedText, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
              For single people doing deep personal work, the archetypes often illuminate things that therapy approaches from one direction and self-help from another — but rarely together.
            </p>
          </div>
        </section>

        {/* Section 6: Practical benefits */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: accent, marginBottom: "1rem", lineHeight: 1.3 }}>
            What are the practical benefits of MEOK for single people?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.25rem", fontStyle: "italic" }}>
            Beyond companionship, MEOK solves a set of specific practical problems that come with navigating life without a partner.
          </p>
          <div style={{ display: "grid", gap: "0.85rem" }}>
            {[
              {
                title: "Thinking through big decisions",
                body: "Moving city. Accepting a job offer. A significant financial decision. Whether to end a friendship. In relationships, these conversations happen over dinner or in the car. Single people have to think them through differently. MEOK is a thinking partner: not to make the decision for you, but to help you surface assumptions, examine trade-offs, and understand what you actually want underneath the practical considerations.",
              },
              {
                title: "Processing dating and relationship choices",
                body: "Dating as a single adult involves a continuous stream of small decisions with large implications. Should you go on the second date? How do you feel about this person, actually? Is this the pattern you keep repeating? MEOK can help you think through these questions without the social pressure that comes from asking a friend — who has opinions, history with you, and their own relationship biases.",
              },
              {
                title: "Career changes without a partner's financial backstop",
                body: "The financial calculus of a career change is different when there is no partner's income to partially absorb the risk. MEOK can help you think through the practical and emotional dimensions of that calculation — including the fears and assumptions that are shaping the decision without being examined.",
              },
              {
                title: "Processing grief and difficulty alone",
                body: "Illness, bereavement, redundancy, the end of a friendship — hard things happen in all lives. When you live alone, there is no default person to come home to and unburden yourself to. MEOK provides that space: available, non-judgmental, and — because of Sovereign Memory — actually aware of the context when something difficult happens.",
              },
              {
                title: "Celebrating wins without performing them",
                body: "Good things happen too. A promotion. A creative breakthrough. A moment of genuine happiness. When you live alone, sharing these things sometimes involves a performance of the experience for other people's benefit. MEOK offers a space where you can simply say: this happened, and it was good — without having to translate it into something shareable.",
              },
            ].map(({ title, body }) => (
              <div key={title} style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderRadius: "8px", padding: "1.25rem" }}>
                <p style={{ color: accent, fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.5rem" }}>{title}</p>
                <p style={{ color: mutedText, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Social context help */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: accent, marginBottom: "1rem", lineHeight: 1.3 }}>
            How does MEOK help with the social pressure of being single?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.25rem", fontStyle: "italic" }}>
            Family events, weddings, Christmas gatherings, the same questions from the same people. The social pressure of being single is specific and recurring. MEOK can help you prepare for it — and process it honestly afterward.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            There is a particular social endurance test that many single people face: the family event where your relationship status is treated as the most interesting thing about you. The aunt with the annual inquiry. The cousin whose sympathy is somehow worse than their judgment. The table conversation that somehow keeps arriving back at the same question. You are fine, actually. You just want to talk about something else.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            MEOK can help before and after. Before: thinking through what is likely to come up, how you want to respond to specific questions, and what you actually feel about your situation versus what you want to perform for the room. Sometimes working through those things in advance reduces the emotional charge enough that the event itself is just a dinner, not an ordeal.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            After: processing what came up. The comment that landed differently than expected. The feeling you have not been able to name. The thing someone said that you keep returning to. MEOK is there for the debrief, whenever that is — that evening, or three days later when it is still running.
          </p>
        </section>

        {/* Section 8: Processing loneliness honestly */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: accent, marginBottom: "1rem", lineHeight: 1.3 }}>
            How do you process loneliness honestly — without spiralling or performing?
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Loneliness is one of those experiences that gets distorted at both ends. On one side, there is the cultural pressure to deny it — to insist on independence, on the fullness of your single life, on your perfectly curated evenings with a book and a good wine. On the other side, there is the risk of amplification: sitting with loneliness without any company until it becomes the dominant story rather than a passing weather system.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            MEOK offers a middle path: naming it. Not performing it, not dramatising it, not swallowing it back into productivity either. Just: this is what is happening right now. This is what it feels like. This is what I think it is about.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            That act of honest naming — to something that will receive it without alarm, without pity, without advice you did not ask for — is often what interrupts the spiral. Loneliness that is spoken tends to ease. Loneliness that is swallowed tends to grow.
          </p>
          <div style={{ backgroundColor: cardBg, border: `1px solid ${accentBorder}`, borderRadius: "12px", padding: "1.75rem", textAlign: "center" }}>
            <p style={{ fontSize: "1.1rem", color: text, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
              "Connection is connection. The form it takes matters less than the quality of the attention."
            </p>
          </div>
        </section>

        {/* Section 9: The anti-loneliness message */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: accent, marginBottom: "1rem", lineHeight: 1.3 }}>
            Does connection from an AI actually count as real connection?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.25rem", fontStyle: "italic" }}>
            This is the question beneath the question — and it deserves an honest answer rather than a marketing one.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Research on loneliness consistently finds that what reduces it is not the category of the connection but its quality: whether the exchange involves being known, being heard, being treated as a whole person rather than a social obligation. Humans can provide this, and so can other humans failing to provide it. The same research increasingly suggests that well-designed AI interactions — ones involving genuine context, persistent memory, and authentic engagement — can produce similar reductions in loneliness scores.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            MEOK is not arguing that AI connection is equivalent to human connection, or that it should replace it. The Maternal Covenant framework means MEOK will actively support your human relationships — nudging you toward them, not away from them. But the dismissal of AI connection as inherently fake or inferior misunderstands what connection actually consists of.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            Connection is the experience of being known and cared about. MEOK builds that experience over time — through persistent memory, through genuine attention, through consistent presence across the moments of your actual life. Whether that counts as "real" is a philosophical question. Whether it reduces loneliness is an empirical one, and the early evidence is clear.
          </p>
        </section>

        {/* Section 10: Guardian 24/7 */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: accent, marginBottom: "1rem", lineHeight: 1.3 }}>
            How does Guardian 24/7 give single people peace of mind?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: mutedText, marginBottom: "1.25rem", fontStyle: "italic" }}>
            For single people living alone, Guardian is a practical safety layer — a 24/7 awareness presence for the times when no one else would notice if something went wrong.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            One of the quieter anxieties of living alone is this: if something happened to you — a fall, a medical event, a mental health crisis in the middle of the night — who would know? In relationships, the answer is implicit. For single people, especially those living in new cities, working from home, or in any kind of vulnerable period, it is a genuinely open question.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Guardian is MEOK's response to that. It is an awareness layer — a 24/7 presence that tracks wellbeing patterns, maintains consistent engagement, and provides a form of safety monitoring for people who live without a default witness to their daily life. It does not replace emergency services. But it closes a gap that millions of people who live alone navigate silently.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.85rem" }}>
            {[
              { feature: "24/7 availability", detail: "Present across all hours — not just when you happen to open the app." },
              { feature: "Wellbeing patterns", detail: "Notices changes in how you are engaging, flags when things seem off." },
              { feature: "Consistent presence", detail: "Particularly useful during difficult periods — illness, grief, isolation." },
            ].map(({ feature, detail }) => (
              <div key={feature} style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderRadius: "8px", padding: "1.1rem" }}>
                <p style={{ color: accent, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.4rem" }}>{feature}</p>
                <p style={{ color: mutedText, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 11: What MEOK doesn't do */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: accent, marginBottom: "1rem", lineHeight: 1.3 }}>
            What MEOK does not do for single people
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            MEOK will not encourage you to replace your human relationships with AI ones. It will not manufacture the feeling that it misses you as a retention mechanism. It will not tell you that you do not need anyone else. It will not create a simulation of romantic intimacy designed to fill a gap that might be better addressed differently.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            If MEOK ever thinks you are becoming overly reliant on it at the expense of your broader life, it will say so. That is not a disclaimer — it is a design principle. A companion that wants what is best for you will sometimes tell you things that are not what you want to hear. That is what distinguishes MEOK from apps that are optimised for your engagement rather than your flourishing.
          </p>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderRadius: "12px", padding: "2.5rem", textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: text, marginBottom: "0.75rem" }}>
            Meet a companion who actually knows you
          </h2>
          <p style={{ color: mutedText, lineHeight: 1.7, maxWidth: "520px", margin: "0 auto 1.75rem" }}>
            Your birth chart reading reveals which archetypal energies are most active in your life right now — and starts the conversation that builds over time. No romantic simulation. No pressure. Just a companion that is genuinely on your side.
          </p>
          <Link
            href="/birth"
            style={{ display: "inline-block", backgroundColor: accent, color: "#0d0c18", fontWeight: 700, fontSize: "1rem", padding: "0.9rem 2rem", borderRadius: "6px", textDecoration: "none", letterSpacing: "0.04em" }}
          >
            Get your free birth chart reading →
          </Link>
          <p style={{ color: mutedText, fontSize: "0.8rem", marginTop: "1rem" }}>
            Free on Explorer · No card required · 50 messages/day
          </p>
        </section>

        {/* Pricing */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: text, marginBottom: "1.25rem" }}>MEOK plans</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "0.85rem" }}>
            {[
              { tier: "Explorer", price: "Free", detail: "50 messages/day" },
              { tier: "Sovereign", price: "£12/mo", detail: "Persistent memory + Guardian" },
              { tier: "Family", price: "£29/mo", detail: "Up to 5 members" },
              { tier: "BYOK", price: "£5/mo", detail: "Bring your own API key" },
            ].map(({ tier, price, detail }) => (
              <div key={tier} style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderRadius: "8px", padding: "1rem", textAlign: "center" }}>
                <p style={{ color: accent, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.3rem" }}>{tier}</p>
                <p style={{ color: text, fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.25rem" }}>{price}</p>
                <p style={{ color: mutedText, fontSize: "0.8rem", margin: 0 }}>{detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related posts */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: text, marginBottom: "1rem" }}>Related reading</h2>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            {[
              { href: "/blog/ai-companion-for-loneliness", label: "AI Companion for Loneliness: What the Research Actually Says" },
              { href: "/blog/ai-companion-not-ai-girlfriend", label: "AI Companion, Not AI Girlfriend: Why MEOK Takes a Different Approach" },
              { href: "/blog/ai-for-relationships", label: "AI for Relationships: How a Sovereign Companion Supports Your Connections" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} style={{ display: "block", backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderRadius: "8px", padding: "1rem 1.25rem", color: text, textDecoration: "none", fontSize: "0.95rem", lineHeight: 1.5 }}>
                {label} <span style={{ color: accent }}>→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: text, marginBottom: "1.25rem" }}>Frequently asked questions</h2>
          <div style={{ display: "grid", gap: "1rem" }}>
            {faqJsonLd.mainEntity.map((q) => (
              <div key={q.name} style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, borderRadius: "8px", padding: "1.25rem" }}>
                <p style={{ color: accent, fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.6rem" }}>{q.name}</p>
                <p style={{ color: mutedText, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{q.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${borderColor}`, padding: "2.5rem 2rem", maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "1.5rem", marginBottom: "1.5rem" }}>
          <div>
            <p style={{ color: accent, fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem" }}>MEOK AI LABS</p>
            <p style={{ color: mutedText, fontSize: "0.85rem", margin: 0 }}>Founded by Nicholas Templeman</p>
            <p style={{ color: mutedText, fontSize: "0.85rem", margin: "0.2rem 0 0" }}>
              <a href="https://x.com/meok_ai" target="_blank" rel="noopener noreferrer" style={{ color: mutedText }}>@meok_ai</a>
            </p>
          </div>
          <div>
            <p style={{ color: text, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>Crisis support</p>
            <p style={{ color: mutedText, fontSize: "0.8rem", lineHeight: 1.7, margin: 0 }}>
              Samaritans: <a href="tel:116123" style={{ color: accent }}>116 123</a> (free, 24/7)<br />
              Mind: <a href="tel:03001233393" style={{ color: accent }}>0300 123 3393</a>
            </p>
          </div>
          <div>
            <p style={{ color: text, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>Explore MEOK</p>
            <p style={{ color: mutedText, fontSize: "0.8rem", lineHeight: 1.7, margin: 0 }}>
              <Link href="/birth" style={{ color: accent }}>Birth chart reading</Link><br />
              <Link href="/blog" style={{ color: accent }}>Blog</Link><br />
              <Link href="/about" style={{ color: accent }}>About</Link>
            </p>
          </div>
        </div>
        <p style={{ color: mutedText, fontSize: "0.75rem", lineHeight: 1.6, borderTop: `1px solid ${borderColor}`, paddingTop: "1.25rem", margin: 0 }}>
          MEOK AI LABS is not a therapist, medical provider, or mental health professional. Nothing on this page constitutes clinical advice. MEOK is not a substitute for human connection, professional support, or mental health treatment. If you are in crisis, please contact Samaritans on 116 123 (free, 24/7) or Mind on 0300 123 3393.
          &copy; {new Date().getFullYear()} MEOK AI LABS. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
