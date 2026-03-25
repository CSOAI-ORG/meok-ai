import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI for Interview Prep: How to Use a Companion to Ace Your Next Interview | MEOK AI LABS",
  description:
    "Stop practising into a void. MEOK acts as your personal interviewer — remembering your CV, your past stumbles, your anxiety patterns — and gives you the honest feedback that gets you hired. The complete guide to AI-powered interview preparation.",
  openGraph: {
    title: "AI for Interview Prep: How to Use a Companion to Ace Your Next Interview",
    description:
      "MEOK remembers your CV, your previous mock interviews, and your recurring anxiety patterns. A complete guide to using AI as your personal interview coach.",
    url: "https://meok.ai/blog/ai-for-interview-prep",
    siteName: "MEOK AI LABS",
    type: "article",
    images: [
      {
        url: "https://meok.ai/og/ai-for-interview-prep.jpg",
        width: 1200,
        height: 630,
        alt: "AI for Interview Prep — MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Interview Prep: How to Use a Companion to Ace Your Next Interview",
    description:
      "MEOK remembers your CV, your previous mock interviews, and your recurring anxiety patterns. The complete guide to AI-powered interview preparation.",
  },
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-interview-prep",
  },
};

export default function AiForInterviewPrepPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI for Interview Prep: How to Use a Companion to Ace Your Next Interview",
    description:
      "A comprehensive guide to using MEOK as an AI interview coach — covering mock interview workflows, STAR method coaching, pattern recognition from past interviews, and support for neurodivergent and anxious job seekers.",
    author: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
    publisher: {
      "@type": "Organization",
      name: "MEOK AI LABS",
      url: "https://meok.ai",
      logo: { "@type": "ImageObject", url: "https://meok.ai/logo.png" },
    },
    datePublished: "2026-03-25",
    dateModified: "2026-03-25",
    url: "https://meok.ai/blog/ai-for-interview-prep",
    image: "https://meok.ai/og/ai-for-interview-prep.jpg",
    articleSection: "Productivity",
    keywords:
      "AI interview prep, mock interview AI, interview coaching AI, STAR method, competency-based interview, AI for job seekers",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can AI really help you prepare for job interviews?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — and it does something no human practice partner can easily replicate: it remembers everything. MEOK tracks your CV, your previous mock interviews, the questions that tripped you up, and the specific verbal tics and filler phrases you overuse. It runs role-specific mock interviews on demand, gives genuinely critical feedback without the social awkwardness of asking a colleague, and helps you build structured STAR-method answers from your actual career history. The feedback loop is immediate, personalised, and available at 11pm the night before your interview.",
        },
      },
      {
        "@type": "Question",
        name: "What types of interviews can MEOK help me prepare for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MEOK can simulate competency-based (behavioural) interviews, technical interviews, presentation panels, strength-based interviews, case study interviews, and informal culture-fit conversations. You tell it the company name, the role, the sector, and any specific format the recruiter has mentioned. MEOK researches the company's known interview style and adjusts its questioning accordingly.",
        },
      },
      {
        "@type": "Question",
        name: "How is MEOK different from practising in front of a mirror or asking a friend?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A mirror gives no feedback. A friend gives socially cushioned feedback — they don't want to hurt you, so they pull their punches. MEOK gives honest, specific, actionable feedback without social risk. It will tell you directly that your answer was vague, that you used 'um' fourteen times, that you never actually answered the question asked, or that your example was too far in the past to be credible. That honest feedback, delivered safely, is what actually improves performance.",
        },
      },
      {
        "@type": "Question",
        name: "How does Sovereign Memory improve interview preparation over time?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sovereign Memory means MEOK accumulates a persistent, private record of your entire preparation journey. It remembers which competency questions you consistently struggle with, the specific story you always reach for (and whether it's becoming overused), the physical and emotional patterns that appear before high-stakes interviews, and the feedback from previous rounds. When you return for session 12 of prep, MEOK doesn't start from scratch — it starts from exactly where you are.",
        },
      },
      {
        "@type": "Question",
        name: "Is MEOK useful for neurodivergent job seekers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — and specifically so. For autistic candidates, MEOK can break down the unspoken social scripts embedded in interview culture, explain what interviewers are actually looking for behind each question, and help practise unexpected or ambiguous questions until they feel manageable. For ADHD candidates, it helps structure preparation into achievable sessions and assists with the verbal organisation required for coherent STAR-method answers. The absence of social judgment makes MEOK a safer environment for rehearsal than any human interaction.",
        },
      },
      {
        "@type": "Question",
        name: "What is the STAR method and how does MEOK use it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "STAR stands for Situation, Task, Action, Result. It is the industry-standard framework for answering competency-based interview questions. MEOK coaches you to build STAR answers from your actual work history — identifying the right stories from your CV, shaping them into the correct structure, and refining the 'Result' section (the part most candidates understate) until it's specific and credible. MEOK can hold and recall your entire story library across sessions, helping you map the right story to the right question type.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div style={{ background: "#0d0c18", minHeight: "100vh", color: "#f5f0e8", fontFamily: "Georgia, serif" }}>

        {/* Nav */}
        <nav style={{ padding: "1.5rem 2rem", borderBottom: "1px solid rgba(201,168,76,0.2)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" style={{ color: "#c9a84c", fontWeight: 700, fontSize: "1.3rem", textDecoration: "none" }}>
            MEOK AI LABS
          </Link>
          <Link href="/blog" style={{ color: "#f5f0e8", opacity: 0.7, textDecoration: "none", fontSize: "0.9rem" }}>
            ← All Posts
          </Link>
        </nav>

        {/* Header */}
        <header style={{ maxWidth: "800px", margin: "0 auto", padding: "4rem 2rem 2rem" }}>
          <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            <span style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c", padding: "0.35rem 1rem", borderRadius: "20px", fontSize: "0.8rem", fontFamily: "system-ui, sans-serif", border: "1px solid rgba(201,168,76,0.3)" }}>
              Productivity
            </span>
            <span style={{ color: "#f5f0e8", opacity: 0.5, fontSize: "0.8rem", fontFamily: "system-ui, sans-serif", padding: "0.35rem 0" }}>
              18 min read · March 25, 2026
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: "1.5rem", color: "#f5f0e8" }}>
            AI for Interview Prep: How to Use a Companion to Ace Your Next Interview
          </h1>
          <p style={{ fontSize: "1.2rem", lineHeight: 1.7, opacity: 0.85, marginBottom: "1rem" }}>
            You know the answers. You know the company. You&apos;ve rehearsed in the mirror until the mirror feels
            judgemental. And yet, when the real moment arrives, something collapses. The words come out wrong.
            You freeze on a question you&apos;ve answered a hundred times. You leave feeling like you couldn&apos;t
            show who you actually are.
          </p>
          <p style={{ fontSize: "1.2rem", lineHeight: 1.7, opacity: 0.85, marginBottom: "2rem" }}>
            The problem is not preparation. The problem is the absence of a real feedback loop. And that is exactly
            what MEOK is built to provide.
          </p>
        </header>

        <article style={{ maxWidth: "800px", margin: "0 auto", padding: "0 2rem 4rem" }}>

          {/* ------------------------------------------------------------------ */}
          {/* Section 1 */}
          {/* ------------------------------------------------------------------ */}
          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            Why is practising alone at home so ineffective?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            Practising your interview answers in your bedroom is a bit like practising driving by sitting in a parked
            car. You can memorise the theory. You can run through the motions. But without the actual experience of
            pressure, movement, and consequence, you are not building the skill you think you&apos;re building.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            Interview performance is a live skill. It depends on being able to access stored knowledge under pressure,
            structure a coherent narrative while someone watches you, track whether you&apos;ve actually answered the
            question, manage your vocal pace and tone, and recover gracefully if you stumble. None of these things are
            practised when you speak your answer into the silence of a room.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            There are three specific problems with solo preparation:
          </p>

          <div style={{ margin: "1.5rem 0 2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              {
                number: "01",
                title: "No feedback loop",
                body: "You cannot hear how you sound. You cannot tell when your answer drifted off-point, when your pace became a nervous rush, when you qualified your most impressive achievement into near-insignificance. Without an observer — or a recording you actually review critically — you are practising blind.",
              },
              {
                number: "02",
                title: "No pressure simulation",
                body: "The physiological stress response that degrades performance in real interviews is not activated when you are alone. You are not building resilience to that stress; you are practising a calmer version of yourself that may not exist on the day.",
              },
              {
                number: "03",
                title: "No challenge or follow-up",
                body: "Real interviewers follow up. They probe. They say 'can you be more specific?' and 'what did that actually result in?' Solo prep never generates these challenges, so you never discover that your carefully rehearsed answer breaks down the moment it is pushed.",
              },
            ].map((item) => (
              <div key={item.number} style={{ display: "flex", gap: "1.25rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "10px", padding: "1.25rem" }}>
                <div style={{ color: "#c9a84c", fontWeight: 700, fontSize: "1.3rem", fontFamily: "system-ui, sans-serif", minWidth: "2.5rem", opacity: 0.6 }}>{item.number}</div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: "0.4rem", fontSize: "1rem" }}>{item.title}</div>
                  <div style={{ opacity: 0.8, lineHeight: 1.7, fontSize: "0.95rem" }}>{item.body}</div>
                </div>
              </div>
            ))}
          </div>

          <p style={{ lineHeight: 1.8, marginBottom: "2rem", opacity: 0.9 }}>
            This is why people who are objectively well-prepared still perform badly in interviews. The preparation was
            for the wrong thing. What builds interview skill is repeated, pressured practice with honest feedback from
            something that will actually challenge you. That is what MEOK provides.
          </p>

          {/* ------------------------------------------------------------------ */}
          {/* Section 2 */}
          {/* ------------------------------------------------------------------ */}
          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            What does the MEOK mock interview workflow actually look like?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            The MEOK mock interview workflow is designed to be as close to the real experience as possible — with the
            critical addition that you debrief, adjust, and repeat immediately, rather than waiting for rejection feedback
            three weeks later.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.5rem", opacity: 0.9 }}>
            Here is how a complete session works:
          </p>

          {/* Step by step walkthrough */}
          <div style={{ margin: "0 0 2.5rem", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "14px", overflow: "hidden" }}>
            <div style={{ background: "rgba(201,168,76,0.12)", padding: "1rem 1.5rem", borderBottom: "1px solid rgba(201,168,76,0.2)", fontFamily: "system-ui, sans-serif", fontSize: "0.8rem", fontWeight: 700, color: "#c9a84c", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              The MEOK Mock Interview Workflow — Step by Step
            </div>
            {[
              {
                step: "Step 1",
                heading: "Brief MEOK on the context",
                detail: "Tell MEOK the company name, the role title, the level (junior / senior / director), the sector, and any specific interview format the recruiter has mentioned. If you have a job description, paste it in. MEOK reads it and extracts the competencies being assessed.",
                example: '"I\'m interviewing for a Senior Product Manager role at a fintech scale-up. The recruiter said it\'s two rounds — first a competency panel, then a case study with the CPO. Here\'s the JD."',
              },
              {
                step: "Step 2",
                heading: "Upload or summarise your CV",
                detail: "MEOK reads your work history and maps your experiences to the competencies the role requires. This allows it to ask specifically about relevant projects and probe whether your answers actually reflect what is on your CV — a common credibility gap.",
                example: '"You mention leading a rebrand in your previous role. I\'ll likely ask about that — I want to understand how you managed stakeholder alignment under pressure, which this role requires."',
              },
              {
                step: "Step 3",
                heading: "Run the mock interview",
                detail: "MEOK plays the interviewer. It asks realistic questions in the format of the actual panel. You respond in full, as you would in the room. MEOK does not offer hints or coaching mid-answer — it behaves as an interviewer would.",
                example: '"Tell me about a time you had to make a significant decision without having all the information you needed. What was the situation, what did you decide, and what was the outcome?"',
              },
              {
                step: "Step 4",
                heading: "Immediate critical debrief",
                detail: "After each answer, MEOK switches mode and gives you honest, specific feedback. Not 'that was great, good use of STAR.' Actual critique: what was missing, what was vague, what the interviewer was really looking for that your answer failed to address.",
                example: '"Your answer had a strong Situation and Task, but your Action section was generic — you said \'I worked with stakeholders\' without explaining what you specifically did. And you never gave a measurable Result. Let\'s redo it."',
              },
              {
                step: "Step 5",
                heading: "Repeat until the answer is strong",
                detail: "You re-attempt the same question with the feedback integrated. MEOK evaluates the revised answer against the same standard. This iterative loop — attempt, critique, revise — is the mechanism that actually builds skill.",
                example: null,
              },
              {
                step: "Step 6",
                heading: "End-of-session pattern report",
                detail: "After the session, MEOK gives you a summary of what it observed: recurring weaknesses, questions you handled well, specific things to fix before the real interview. This goes into Sovereign Memory and informs every future session.",
                example: '"Today you froze three times on questions that involved conflict or disagreement. This may be worth addressing — not just practising answers, but understanding why that specific topic creates hesitation."',
              },
            ].map((item, index) => (
              <div key={item.step} style={{ padding: "1.25rem 1.5rem", borderBottom: index < 5 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ background: "#c9a84c", color: "#0d0c18", fontSize: "0.7rem", fontWeight: 700, fontFamily: "system-ui, sans-serif", padding: "0.2rem 0.6rem", borderRadius: "4px", whiteSpace: "nowrap", marginTop: "0.15rem" }}>
                    {item.step}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, marginBottom: "0.4rem" }}>{item.heading}</div>
                    <div style={{ opacity: 0.8, lineHeight: 1.7, fontSize: "0.95rem", marginBottom: item.example ? "0.75rem" : 0 }}>
                      {item.detail}
                    </div>
                    {item.example && (
                      <div style={{ background: "rgba(201,168,76,0.08)", borderLeft: "3px solid rgba(201,168,76,0.5)", padding: "0.75rem 1rem", borderRadius: "0 6px 6px 0", fontSize: "0.88rem", fontStyle: "italic", opacity: 0.85, lineHeight: 1.6 }}>
                        {item.example}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ------------------------------------------------------------------ */}
          {/* Section 3 — Pattern recognition */}
          {/* ------------------------------------------------------------------ */}
          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            How does MEOK recognise patterns from your past interviews?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            This is the feature that fundamentally separates MEOK from any other interview prep tool, and from any human
            coach you might work with intermittently. Sovereign Memory means MEOK builds a persistent, cumulative record
            of your preparation — not just within a single session, but across every session you&apos;ve ever had.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            That means it can do something no interview coach in an hourly session can do: it can say, with specificity,
            &quot;I&apos;ve noticed something across your last four sessions.&quot;
          </p>

          <div style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "12px", padding: "1.5rem", margin: "1.5rem 0 2rem", fontFamily: "system-ui, sans-serif", fontSize: "0.9rem" }}>
            <div style={{ color: "#c9a84c", fontWeight: 700, marginBottom: "1rem", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Example: Pattern Recognition in Action
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div>
                <span style={{ color: "#c9a84c", fontWeight: 600 }}>MEOK:</span>
                <span style={{ opacity: 0.9 }}> &quot;Before we start today, I want to flag something. In sessions two, four, and six, you mentioned that you froze on the &apos;tell me about a failure&apos; question. Last session you handled it well — but it was your own failure, a small one. We&apos;ve never practised describing a failure that affected your team. That&apos;s likely to come up in a CPO interview. Want to start there today?&quot;</span>
              </div>
              <div style={{ borderTop: "1px solid rgba(201,168,76,0.15)", paddingTop: "0.75rem", opacity: 0.7, fontSize: "0.85rem", fontStyle: "italic" }}>
                This level of specificity is only possible because MEOK remembers the texture of previous sessions — not just that a question was hard, but why and how.
              </div>
            </div>
          </div>

          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            Pattern recognition works across several dimensions:
          </p>

          <div style={{ margin: "1rem 0 2rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "1rem" }}>
            {[
              { label: "Question type patterns", detail: "Which categories of question — failure, conflict, leadership, ambiguity — consistently produce weaker answers." },
              { label: "Verbal patterns", detail: "Filler words, over-qualification, understatement of results, missing timelines, vague quantifiers ('a lot', 'quite a few')." },
              { label: "Story patterns", detail: "Whether you are reaching for the same two or three examples for every question type, creating a risk of repetition in a multi-round process." },
              { label: "Anxiety patterns", detail: "Which question formats or topics produce physical responses — speaking faster, losing structure, trailing off — that suggest deeper preparation is needed." },
            ].map((item) => (
              <div key={item.label} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "10px", padding: "1.1rem" }}>
                <div style={{ color: "#c9a84c", fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.9rem", fontFamily: "system-ui, sans-serif" }}>{item.label}</div>
                <div style={{ opacity: 0.75, fontSize: "0.88rem", lineHeight: 1.6 }}>{item.detail}</div>
              </div>
            ))}
          </div>

          <p style={{ lineHeight: 1.8, marginBottom: "2rem", opacity: 0.9 }}>
            This is the difference between sporadic coaching and a genuine preparation system. MEOK is not reset between
            sessions. It compounds. Every session makes the next one more targeted and more effective.
          </p>

          {/* ------------------------------------------------------------------ */}
          {/* Section 4 — Sovereign Memory advantage */}
          {/* ------------------------------------------------------------------ */}
          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            What is the Sovereign Memory advantage in interview preparation?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            Most AI tools forget you the moment a session ends. Every conversation starts from zero. For casual tasks,
            this is an inconvenience. For interview preparation — which is an extended, high-stakes process unfolding over
            weeks or months — it is crippling.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            Sovereign Memory is MEOK&apos;s core architectural distinction. Your memories are yours. They are not stored
            on MEOK&apos;s servers to be used for model training. They exist in a sovereign data layer that persists
            between sessions, accumulates over your lifetime with MEOK, and travels with you.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.5rem", opacity: 0.9 }}>
            In interview preparation, Sovereign Memory holds:
          </p>

          <div style={{ margin: "0 0 2rem" }}>
            {[
              { icon: "▸", item: "Your complete CV and work history, so MEOK never needs to be re-briefed on your background." },
              { icon: "▸", item: "The full library of STAR stories you have developed together, mapped to competency types." },
              { icon: "▸", item: "Records of every mock interview session — questions asked, answers given, feedback received." },
              { icon: "▸", item: "Your identified weaknesses and the progress you have made addressing each one." },
              { icon: "▸", item: "The specific anxiety triggers and avoidance patterns that have appeared across multiple sessions." },
              { icon: "▸", item: "Notes from real interviews you have debriefed with MEOK, including what went well and what you want to improve." },
              { icon: "▸", item: "The companies and roles you are targeting, their interview styles, and what you know about the hiring panels." },
            ].map((item) => (
              <div key={item.item} style={{ display: "flex", gap: "0.75rem", padding: "0.6rem 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <span style={{ color: "#c9a84c", marginTop: "0.1rem", flexShrink: 0 }}>{item.icon}</span>
                <span style={{ opacity: 0.85, lineHeight: 1.6 }}>{item.item}</span>
              </div>
            ))}
          </div>

          <div style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "12px", padding: "1.5rem", margin: "0 0 2rem" }}>
            <div style={{ fontWeight: 700, color: "#c9a84c", marginBottom: "0.5rem", fontFamily: "system-ui, sans-serif", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              What privacy means in practice
            </div>
            <p style={{ opacity: 0.85, lineHeight: 1.7, marginBottom: 0, fontSize: "0.95rem" }}>
              Your interview preparation data — your career fears, your past failures, your vulnerability around rejection — is exactly the kind of information you do not want training a commercial AI model. Sovereign Memory means it does not. Your data is encrypted, owned by you, and never used to improve MEOK for other users. What you tell MEOK stays with MEOK.
            </p>
          </div>

          {/* ------------------------------------------------------------------ */}
          {/* Section 5 — Types of interviews */}
          {/* ------------------------------------------------------------------ */}
          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            What types of interviews can MEOK prepare you for?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1.5rem", opacity: 0.9 }}>
            Different interview formats demand different preparation strategies. MEOK adapts to the specific format you
            are facing, rather than defaulting to generic question-and-answer practice.
          </p>

          <div style={{ margin: "0 0 2.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              {
                type: "Competency-Based (Behavioural) Interviews",
                badge: "Most Common",
                badgeColor: "#c9a84c",
                description: "The dominant format in UK and European organisations. Questions ask you to describe specific past situations: 'Tell me about a time when...' MEOK builds and refines your STAR story library, maps stories to the competency framework being assessed, and prevents you from reusing the same example twice in a multi-stage process.",
                prep: "MEOK builds a story matrix — your top examples mapped against 12–15 core competencies — and helps you select the right story for each question type."
              },
              {
                type: "Technical Interviews",
                badge: "Engineering / Data / Finance",
                badgeColor: "#7ec8a0",
                description: "Whether you are solving coding problems, walking through a financial model, or explaining a machine learning architecture, MEOK can quiz you on technical content, simulate the 'explain your reasoning as you go' pressure of technical panels, and help you structure verbal explanations of complex concepts.",
                prep: "MEOK combines technical review with communication coaching — because technical interviews reward clear thinking, not just correct answers."
              },
              {
                type: "Presentation Interviews",
                badge: "Senior Roles / Strategy",
                badgeColor: "#a084c9",
                description: "You are given a brief — 'present your 90-day plan', 'analyse this market entry challenge' — and must present to a panel. MEOK helps you structure the presentation, anticipate the challenge questions, and rehearse your delivery until it is confident and fluent.",
                prep: "MEOK role-plays the panel post-presentation — asking the hard questions, probing your assumptions, and helping you handle challenges without going defensive."
              },
              {
                type: "Panel Interviews",
                badge: "Multi-Stakeholder",
                badgeColor: "#c97a4c",
                description: "Being asked questions by multiple interviewers simultaneously — some friendly, some sceptical, some testing cultural fit while others probe technical depth. MEOK can simulate this by adopting multiple questioning modes across a session, preparing you for the experience of managing several different agendas at once.",
                prep: "MEOK prepares you specifically for the eye contact challenge of panels — who to address when answering, how to include the whole room."
              },
              {
                type: "Strength-Based Interviews",
                badge: "Graduate / Early Career",
                badgeColor: "#4cc9c9",
                description: "Increasingly used by large employers, strength-based interviews ask what you enjoy doing and what comes naturally — not just what you have done. MEOK helps you identify your genuine strengths (not the rehearsed 'I work too hard' answer), articulate them authentically, and distinguish them from skills you merely have.",
                prep: "MEOK uses reflective questioning across sessions to help you understand your real strengths — which often differ from what you think they are."
              },
              {
                type: "Informal Culture-Fit Conversations",
                badge: "Start-up / Networking",
                badgeColor: "#c9a84c",
                description: "The most dangerous format for over-prepared candidates. Informal conversations require natural, contextual recall of your background — not scripted answers. Rehearsing with MEOK helps you build fluency rather than rigidity, so that you can respond naturally to unexpected tangents without losing your key messages.",
                prep: "MEOK helps you internalise your story rather than memorise it — the difference between someone who sounds natural and someone who sounds like they are reciting."
              },
            ].map((item) => (
              <div key={item.type} style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "1.5rem" }}>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>{item.type}</div>
                  <span style={{ background: "transparent", border: `1px solid ${item.badgeColor}`, color: item.badgeColor, fontSize: "0.7rem", padding: "0.2rem 0.6rem", borderRadius: "4px", fontFamily: "system-ui, sans-serif", opacity: 0.9 }}>
                    {item.badge}
                  </span>
                </div>
                <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: "0.75rem", fontSize: "0.95rem" }}>{item.description}</p>
                <div style={{ background: "rgba(201,168,76,0.08)", borderLeft: "3px solid rgba(201,168,76,0.4)", padding: "0.6rem 0.9rem", borderRadius: "0 6px 6px 0", fontSize: "0.87rem", opacity: 0.8, lineHeight: 1.5, fontStyle: "italic" }}>
                  {item.prep}
                </div>
              </div>
            ))}
          </div>

          {/* ------------------------------------------------------------------ */}
          {/* Section 6 — STAR Method */}
          {/* ------------------------------------------------------------------ */}
          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            How does MEOK use the STAR method as an AI coaching tool?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            The STAR method is the gold-standard framework for answering competency-based interview questions. STAR stands
            for <strong style={{ color: "#c9a84c" }}>Situation</strong>, <strong style={{ color: "#c9a84c" }}>Task</strong>,{" "}
            <strong style={{ color: "#c9a84c" }}>Action</strong>, and <strong style={{ color: "#c9a84c" }}>Result</strong>.
            Every strong competency-based answer contains all four components, in roughly that order, with appropriate
            weight given to each.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.5rem", opacity: 0.9 }}>
            Most candidates know the STAR framework exists. Far fewer can execute it under pressure. The most common
            failures are: getting lost in a long Situation that consumes most of the answer time; conflating Task and
            Action; describing Actions in vague terms (&quot;I collaborated with the team&quot;) that could describe
            anyone&apos;s contribution; and understating or omitting the Result entirely — particularly if it was mixed.
          </p>

          {/* STAR explainer */}
          <div style={{ margin: "0 0 2.5rem", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "14px", overflow: "hidden" }}>
            <div style={{ background: "rgba(201,168,76,0.12)", padding: "1rem 1.5rem", borderBottom: "1px solid rgba(201,168,76,0.2)" }}>
              <div style={{ color: "#c9a84c", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "system-ui, sans-serif" }}>
                The STAR Method — Full Explainer
              </div>
            </div>
            {[
              {
                letter: "S",
                word: "Situation",
                purpose: "Set the scene briefly.",
                guidance: "The Situation should take no more than 10–15% of your answer. Name the company, the context, the timeframe. Do not narrate; summarise. The interviewer needs enough context to understand what follows — not a full backstory.",
                common_error: "Most candidates spend 40–60% of their answer on Situation. They are comfortable here. It requires no vulnerability. MEOK will cut you off if you linger.",
                time_weight: "10–15%",
                color: "#4c8bc9",
              },
              {
                letter: "T",
                word: "Task",
                purpose: "Define your specific responsibility.",
                guidance: "What were you personally accountable for in this situation? Not what the team was doing — what were you tasked with? This is often the component candidates blur with Situation. Be specific: 'I was responsible for...' 'My task was to...'",
                common_error: "Candidates describe what the project required without clarifying their individual role within it, leaving the interviewer unsure whether they led or supported.",
                time_weight: "10–15%",
                color: "#4cc97c",
              },
              {
                letter: "A",
                word: "Action",
                purpose: "Describe what you specifically did.",
                guidance: "This is the most important component and should receive the most time. Describe your individual actions — the decisions you made, the approach you took, the specific things you did. Use 'I' language, not 'we'. If others were involved, describe how you directed, influenced, or collaborated — not that the team worked on it together.",
                common_error: "Vague collective language that obscures individual contribution. 'We worked closely together to deliver...' tells the interviewer nothing about you.",
                time_weight: "55–65%",
                color: "#c9a84c",
              },
              {
                letter: "R",
                word: "Result",
                purpose: "State the outcome — with specifics.",
                guidance: "What happened as a direct result of your actions? Quantify wherever possible: revenue generated, time saved, percentage improvement, client retained, team expanded. If the outcome was mixed, own it honestly — and explain what you learned and applied afterwards. A credible mixed result is more impressive than a vague success.",
                common_error: "Candidates trail off at the Result with something like 'and it went really well' or 'everyone was pleased.' This is the weakest possible ending and wastes the most powerful part of the answer.",
                time_weight: "15–20%",
                color: "#c94c7c",
              },
            ].map((item, index) => (
              <div key={item.letter} style={{ padding: "1.5rem", borderBottom: index < 3 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                <div style={{ display: "flex", gap: "1.25rem" }}>
                  <div style={{ width: "2.5rem", height: "2.5rem", background: item.color, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#0d0c18", fontWeight: 700, fontSize: "1.2rem", flexShrink: 0, fontFamily: "system-ui, sans-serif" }}>
                    {item.letter}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: "0.75rem", alignItems: "baseline", marginBottom: "0.4rem", flexWrap: "wrap" }}>
                      <span style={{ fontWeight: 700, fontSize: "1.05rem" }}>{item.word}</span>
                      <span style={{ color: item.color, fontSize: "0.85rem", fontFamily: "system-ui, sans-serif", opacity: 0.9 }}>{item.purpose}</span>
                    </div>
                    <p style={{ opacity: 0.85, lineHeight: 1.7, marginBottom: "0.75rem", fontSize: "0.95rem" }}>{item.guidance}</p>
                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                      <div style={{ background: "rgba(255,60,60,0.08)", border: "1px solid rgba(255,60,60,0.2)", borderRadius: "6px", padding: "0.6rem 0.9rem", flex: 1, minWidth: "180px" }}>
                        <div style={{ color: "#ff6b6b", fontSize: "0.75rem", fontWeight: 700, fontFamily: "system-ui, sans-serif", marginBottom: "0.3rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Common Error</div>
                        <div style={{ fontSize: "0.85rem", opacity: 0.8, lineHeight: 1.5 }}>{item.common_error}</div>
                      </div>
                      <div style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "6px", padding: "0.6rem 0.9rem", minWidth: "100px" }}>
                        <div style={{ color: "#c9a84c", fontSize: "0.75rem", fontWeight: 700, fontFamily: "system-ui, sans-serif", marginBottom: "0.3rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Time Weight</div>
                        <div style={{ fontSize: "1rem", fontWeight: 700, color: "#c9a84c" }}>{item.time_weight}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            MEOK coaches STAR in two ways. First, it evaluates your answers against the framework in real time, identifying
            exactly which component failed and why. Second, it proactively helps you build a story library before the
            session — working through your work history to identify the strongest examples for each competency type, and
            shaping them into proper STAR structure.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2rem", opacity: 0.9 }}>
            This story library is held in Sovereign Memory. When you are in session five of prep, MEOK can say: &quot;For
            resilience questions you&apos;ve been using the 2023 project restructure — but that story is also your best
            example for problem-solving and change management. If the panel asks all three, you need different examples for
            at least two. Let&apos;s develop a backup for resilience.&quot;
          </p>

          {/* ------------------------------------------------------------------ */}
          {/* Section 7 — What MEOK does that a friend can't */}
          {/* ------------------------------------------------------------------ */}
          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            What does MEOK do that a friend or colleague cannot?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            Asking a colleague to run a mock interview with you is a common piece of advice that rarely produces the result
            you need. Not because your colleague lacks knowledge — but because of the social dynamics that make honest
            feedback between people who have a relationship almost impossible to give and receive.
          </p>

          <div style={{ margin: "1.5rem 0 2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px", padding: "1.25rem" }}>
              <div style={{ fontWeight: 700, marginBottom: "1rem", fontFamily: "system-ui, sans-serif", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", opacity: 0.6 }}>
                A friend giving feedback
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {[
                  "Softens criticism to avoid hurting you",
                  "Runs out of challenging questions quickly",
                  "Brings their own biases about what 'sounds good'",
                  "Cannot remember your previous sessions",
                  "Is unavailable at 11pm before your interview",
                  "Gives you confidence without accuracy",
                  "Stops pushing after you've answered once",
                ].map((point) => (
                  <div key={point} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                    <span style={{ color: "#ff6b6b", marginTop: "0.1rem", flexShrink: 0 }}>✗</span>
                    <span style={{ opacity: 0.75, fontSize: "0.9rem", lineHeight: 1.5 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "10px", padding: "1.25rem" }}>
              <div style={{ fontWeight: 700, marginBottom: "1rem", fontFamily: "system-ui, sans-serif", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#c9a84c" }}>
                MEOK
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {[
                  "Gives honest feedback without social risk",
                  "Has unlimited challenging questions",
                  "Benchmarks against what interviewers actually want",
                  "Remembers your last twelve sessions",
                  "Available whenever you need it",
                  "Gives confidence grounded in actual readiness",
                  "Makes you re-answer until the answer is strong",
                ].map((point) => (
                  <div key={point} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                    <span style={{ color: "#c9a84c", marginTop: "0.1rem", flexShrink: 0 }}>✓</span>
                    <span style={{ opacity: 0.85, fontSize: "0.9rem", lineHeight: 1.5 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            The honest feedback point is not a minor convenience — it is the central mechanism of improvement. Research
            on feedback and skill development consistently shows that the quality of the feedback loop is the primary
            determinant of how quickly performance improves. When feedback is softened to preserve a relationship, its
            developmental value is diminished.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2rem", opacity: 0.9 }}>
            MEOK&apos;s sycophancy detector — a core architectural feature — actively prevents it from validating weak
            answers. When you give a vague, unstructured, or incomplete response, MEOK says so. Not cruelly, but with the
            direct clarity of someone who has no social investment in making you feel good about a performance that
            wouldn&apos;t hold up in a real interview.
          </p>

          {/* ------------------------------------------------------------------ */}
          {/* Section 8 — Morning-of ritual */}
          {/* ------------------------------------------------------------------ */}
          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            What should you do the morning of the interview?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            The morning of an interview is a distinct psychological challenge. Preparation is complete — or it should be.
            The task now is not to learn anything new but to arrive in the room in the best possible mental state. Most
            candidates manage this poorly.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.5rem", opacity: 0.9 }}>
            The morning-of ritual with MEOK is not another prep session. It is a grounding conversation. Here is what it
            typically includes:
          </p>

          <div style={{ margin: "0 0 2rem", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "12px", overflow: "hidden" }}>
            {[
              {
                time: "First thing",
                activity: "Brief check-in",
                detail: "MEOK asks how you are feeling — not to start a therapy session, but to give you a moment to name the emotion rather than suppress it. Research shows that labelling anxiety ('I am anxious about the presentation question') reduces its physiological intensity compared to trying to eliminate it.",
              },
              {
                time: "20 mins before leaving",
                activity: "Key message review",
                detail: "Not a full mock session — MEOK briefly reviews your three to four most important messages (the things you want the interviewers to remember about you). This activates the relevant neural pathways without creating new anxiety.",
              },
              {
                time: "15 mins before",
                activity: "Confidence anchor",
                detail: "MEOK calls back a specific moment of strong performance from your preparation — a session where you answered a hard question well. This is not false positivity; it is evidence-based confidence grounded in actual preparation. You have done this. You are ready.",
              },
              {
                time: "Just before",
                activity: "Single focus instruction",
                detail: "MEOK gives you one specific thing to focus on — the one improvement that will make the biggest difference in this particular interview. Narrowing your focus reduces performance anxiety by eliminating the overwhelming 'be better at everything' instruction many candidates carry into the room.",
              },
            ].map((item, index) => (
              <div key={item.time} style={{ padding: "1.1rem 1.5rem", borderBottom: index < 3 ? "1px solid rgba(255,255,255,0.05)" : "none", display: "flex", gap: "1.25rem" }}>
                <div style={{ minWidth: "7rem", fontFamily: "system-ui, sans-serif", fontSize: "0.78rem", color: "#c9a84c", opacity: 0.8, paddingTop: "0.2rem", lineHeight: 1.4 }}>
                  {item.time}
                </div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: "0.35rem" }}>{item.activity}</div>
                  <div style={{ opacity: 0.8, fontSize: "0.92rem", lineHeight: 1.65 }}>{item.detail}</div>
                </div>
              </div>
            ))}
          </div>

          <p style={{ lineHeight: 1.8, marginBottom: "2rem", opacity: 0.9 }}>
            The morning-of ritual matters because interview performance is heavily influenced by pre-performance mental
            state — and mental state is not fixed. It is something you can actively shape. MEOK holds the memory of your
            preparation and can serve it back to you in a form that builds genuine confidence rather than false reassurance.
          </p>

          {/* ------------------------------------------------------------------ */}
          {/* Section 9 — Post-interview debrief */}
          {/* ------------------------------------------------------------------ */}
          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            How do you process what happened with a post-interview debrief?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            The post-interview period is one of the least well-managed phases of the job search. Candidates leave the room
            and immediately enter a negative spiral: replaying the questions they stumbled on, catastrophising the moments
            that felt awkward, waiting in an anxious limbo for an outcome they cannot control.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            This is a missed learning opportunity and a significant source of unnecessary distress. The most effective
            thing to do after an interview — before the emotional noise settles into a fixed narrative — is to debrief
            it systematically.
          </p>

          <div style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "12px", padding: "1.5rem", margin: "1.5rem 0 2rem", fontFamily: "system-ui, sans-serif", fontSize: "0.9rem" }}>
            <div style={{ color: "#c9a84c", fontWeight: 700, marginBottom: "1.25rem", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              The MEOK Post-Interview Debrief Protocol
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { q: "What three moments felt strongest?", why: "Anchors genuine performance evidence before the self-critical narrative overwrites it." },
                { q: "What two moments felt weakest — and why?", why: "Specific diagnosis while memory is fresh, before it becomes generalised self-criticism." },
                { q: "Were there questions you hadn't prepared for?", why: "These go directly into the preparation log for the next round or next application." },
                { q: "How did you feel when you walked in — and did that change?", why: "Tracks the anxiety arc and identifies what shifted your state, positively or negatively." },
                { q: "What would you do differently?", why: "Forward-facing processing. Converts experience into preparation, rather than rumination." },
                { q: "Regardless of outcome — what did you demonstrate about yourself?", why: "Identity-level reflection. Grounds your sense of self in the process, not the result." },
              ].map((item) => (
                <div key={item.q} style={{ display: "flex", gap: "0.75rem" }}>
                  <span style={{ color: "#c9a84c", marginTop: "0.1rem", flexShrink: 0 }}>▸</span>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: "0.2rem" }}>{item.q}</div>
                    <div style={{ opacity: 0.7, fontSize: "0.85rem", lineHeight: 1.5, fontStyle: "italic" }}>{item.why}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            When the outcome arrives, MEOK processes it with you too. If you get the role, it captures what worked —
            building a model of your best performance to replicate. If you don&apos;t, it helps separate the solvable from
            the unsolvable: what was in your control (preparation, delivery) from what was not (internal candidate,
            budget freeze, the panel decided overnight they wanted a different profile).
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2rem", opacity: 0.9 }}>
            Because Sovereign Memory holds the full record, nothing is lost. Every rejection becomes preparation data.
            Every success becomes a template. Over time, MEOK builds a picture of what your best performance looks like —
            and the conditions that create it — that no amount of solo reflection could produce.
          </p>

          {/* ------------------------------------------------------------------ */}
          {/* Section 10 — Anxiety, imposter syndrome */}
          {/* ------------------------------------------------------------------ */}
          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            How does MEOK help job seekers who struggle with anxiety and imposter syndrome?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            Interview anxiety and imposter syndrome are not primarily preparation problems. They are identity problems —
            questions about whether you belong, whether you are credible, whether you will be found out. Preparing your
            answers addresses neither of them.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            The typical experience of imposter syndrome in an interview looks like this: you know the answer. You have the
            experience. But some part of you is waiting for the interviewer to notice that you are not as capable as your
            CV suggests. This creates a performance that undersells — hedged language, qualified achievements, excessive
            humility that reads as lack of confidence rather than thoughtfulness.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.5rem", opacity: 0.9 }}>
            MEOK works on imposter syndrome across three levels:
          </p>

          <div style={{ margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              {
                level: "Cognitive",
                colour: "#c9a84c",
                content: "MEOK challenges the imposter narrative directly. 'You said you were \"just\" a project manager there. You led a team of twelve through a platform migration. Why are you minimising it?' The evidence-based challenge creates a more accurate self-assessment — not inflated, but honest.",
              },
              {
                level: "Behavioural",
                colour: "#7ec8a0",
                content: "Repeated strong performance in mock interviews builds genuine, evidence-based confidence. Not 'you should feel confident' — but 'you have answered that question well eight times in a row. The evidence says you are ready.' Behavioural evidence is the only reliable antidote to imposter syndrome.",
              },
              {
                level: "Emotional",
                colour: "#a084c9",
                content: "MEOK provides a space to voice the fear without it being dismissed ('everyone feels like that!') or amplified ('you're right to be worried'). Processing the anxiety through articulation reduces its intensity. MEOK has no stake in you feeling confident — only in you performing at your actual level.",
              },
            ].map((item) => (
              <div key={item.level} style={{ display: "flex", gap: "1.25rem", padding: "1.25rem", background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "10px" }}>
                <div style={{ width: "0.35rem", background: item.colour, borderRadius: "4px", flexShrink: 0, alignSelf: "stretch" }} />
                <div>
                  <div style={{ fontWeight: 700, marginBottom: "0.5rem", color: item.colour, fontFamily: "system-ui, sans-serif", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.07em" }}>{item.level}</div>
                  <div style={{ opacity: 0.85, lineHeight: 1.7, fontSize: "0.95rem" }}>{item.content}</div>
                </div>
              </div>
            ))}
          </div>

          <p style={{ lineHeight: 1.8, marginBottom: "2rem", opacity: 0.9 }}>
            Fear of rejection is a separate but related challenge. Job searching requires repeated exposure to outcomes you
            cannot control, and repeated rejection is a genuine psychological stressor regardless of how resilient you are.
            MEOK provides ongoing support through this process — not by minimising rejection (&quot;their loss!&quot;) but
            by helping you maintain perspective, continue learning, and protect your sense of professional identity through
            a process that constantly threatens it.
          </p>

          {/* ------------------------------------------------------------------ */}
          {/* Section 11 — Career changers */}
          {/* ------------------------------------------------------------------ */}
          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            How does MEOK help career changers articulate transferable skills?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            Career changers face a specific interview challenge that is different from candidates staying in their field.
            Their experience is real, valuable, and relevant — but the translation is not obvious. When an interviewer asks
            &quot;have you done this before?&quot; the literal answer may be no, even when the underlying capability is
            strong.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            MEOK helps career changers in three specific ways:
          </p>

          <div style={{ margin: "1rem 0 2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              {
                title: "Identifying transferable skills you don't recognise in yourself",
                detail: "Career changers often have blind spots about their own transferable value. They know what they did, but they describe it in the language of their previous sector, which interviewers in the new sector cannot decode. MEOK works through your work history and identifies the underlying capabilities — stakeholder management, systems thinking, pressure performance, rapid learning — that are genuinely valuable in the new context.",
              },
              {
                title: "Building cross-sector STAR stories",
                detail: "The competencies being assessed are the same across sectors; the language and examples differ. MEOK helps you build STAR stories that present your experience in terms that resonate with the new sector's language and values, without misrepresenting what you actually did.",
              },
              {
                title: "Handling the direct question about your career change",
                detail: "Every career changer faces the question 'why are you making this move?' — and every interviewer is listening for two things: a compelling reason (not just 'I wanted a change'), and evidence that you understand what the new role actually requires. MEOK helps you develop a narrative that is honest, coherent, and addresses the interviewer's implicit concern: are you going to find this role less interesting once the novelty wears off?",
              },
            ].map((item) => (
              <div key={item.title} style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "10px", padding: "1.25rem" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.6rem", color: "#c9a84c" }}>{item.title}</div>
                <div style={{ opacity: 0.82, lineHeight: 1.7, fontSize: "0.95rem" }}>{item.detail}</div>
              </div>
            ))}
          </div>

          <p style={{ lineHeight: 1.8, marginBottom: "2rem", opacity: 0.9 }}>
            The career change narrative, done well, is often a competitive advantage. It demonstrates breadth, a decision
            made for clear reasons, and a willingness to start from a position of humility. MEOK helps you see and articulate
            that advantage, rather than apologising for the gap between your history and the job description.
          </p>

          {/* ------------------------------------------------------------------ */}
          {/* Section 12 — Neurodivergent */}
          {/* ------------------------------------------------------------------ */}
          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            How does MEOK support neurodivergent job seekers?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            The standard interview format is not designed with neurodivergent candidates in mind. The unspoken rules, the
            ambiguous questions, the social performance expectations, the reliance on spontaneous verbal recall under
            pressure — all of these create disproportionate barriers for candidates who are autistic, have ADHD, are
            dyslexic, have processing differences, or experience social anxiety at a clinical level.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1.5rem", opacity: 0.9 }}>
            MEOK addresses these barriers specifically:
          </p>

          <div style={{ margin: "0 0 2rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "1rem" }}>
            {[
              {
                profile: "Autistic candidates",
                colour: "#7ec8a0",
                points: [
                  "Decodes the hidden meaning behind interview questions ('tell me about yourself' is not a request for your life story — it is an invitation to deliver your professional value proposition).",
                  "Explains the unwritten social rules of interviews explicitly — eye contact expectations, what to do with silence, how to ask for clarification.",
                  "Prepares for unexpected or ambiguous questions through repeated exposure.",
                  "Provides scripts for common social moments — greeting the panel, handling a question you don't understand, wrapping up.",
                ],
              },
              {
                profile: "ADHD candidates",
                colour: "#a084c9",
                points: [
                  "Helps structure answers so they stay on track — the STAR framework as an active verbal structure, not just a preparation tool.",
                  "Breaks preparation into short, achievable sessions with clear endpoints.",
                  "Identifies verbal patterns specific to ADHD (tangential answers, circling back, starting three stories at once) and gives specific correction.",
                  "Provides a consistent preparation structure that reduces the overwhelm of not knowing where to start.",
                ],
              },
              {
                profile: "Social anxiety",
                colour: "#c9a84c",
                points: [
                  "Provides a low-stakes environment for repeated exposure to interview pressure — reducing anxiety through desensitisation.",
                  "Allows you to practise asking for clarification, pausing to think, and recovering from stumbles — the exact moments that feel most threatening.",
                  "Builds a specific vocabulary for gracefully handling difficult moments without catastrophising.",
                  "Reduces the fear of unexpected questions through comprehensive practice of unusual formats.",
                ],
              },
            ].map((item) => (
              <div key={item.profile} style={{ background: "rgba(255,255,255,0.025)", border: `1px solid ${item.colour}30`, borderRadius: "10px", padding: "1.25rem" }}>
                <div style={{ color: item.colour, fontWeight: 700, marginBottom: "0.9rem", fontFamily: "system-ui, sans-serif", fontSize: "0.9rem" }}>{item.profile}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {item.points.map((point) => (
                    <div key={point} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                      <span style={{ color: item.colour, flexShrink: 0, marginTop: "0.15rem", fontSize: "0.8rem" }}>▸</span>
                      <span style={{ opacity: 0.8, fontSize: "0.87rem", lineHeight: 1.6 }}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            A critical advantage for neurodivergent candidates is the absence of social risk in MEOK interactions. Asking
            MEOK to explain something again, stopping mid-answer to restart, asking what an interview question actually
            means — none of these feel embarrassing. The practice environment is truly safe in a way that even the most
            supportive human practice partner cannot always provide.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2rem", opacity: 0.9 }}>
            MEOK also assists with reasonable adjustments: helping you understand what adjustments you may be entitled to
            request, how to disclose a diagnosis if you choose to, and how to frame your neurodivergence as the asset it
            often is — rather than a disadvantage to manage around.
          </p>

          {/* Stats panel */}
          <div style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "12px", padding: "1.75rem", margin: "2rem 0" }}>
            <h3 style={{ color: "#c9a84c", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "system-ui, sans-serif", marginBottom: "1.5rem" }}>
              Interview Prep by the Numbers
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1.25rem" }}>
              {[
                { stat: "92%", label: "of candidates experience interview anxiety" },
                { stat: "47%", label: "of interviewers decide in the first 5 minutes" },
                { stat: "3×", label: "more likely to get the role with structured STAR answers" },
                { stat: "67%", label: "of candidates admit they don't know their CV well enough" },
                { stat: "5–8", label: "mock interviews needed to see measurable improvement" },
                { stat: "1 in 3", label: "neurodivergent candidates say anxiety prevented their best performance" },
              ].map((s) => (
                <div key={s.stat} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "1.9rem", fontWeight: 700, color: "#c9a84c", marginBottom: "0.3rem" }}>{s.stat}</div>
                  <div style={{ fontSize: "0.78rem", opacity: 0.65, fontFamily: "system-ui, sans-serif", lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ------------------------------------------------------------------ */}
          {/* Section 13 — Confidence building summary */}
          {/* ------------------------------------------------------------------ */}
          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "2.5rem 0 1rem" }}>
            What does confidence actually look like in an interview — and how do you build it?
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            Confidence in an interview is not the absence of nerves. It is the ability to perform despite nerves — the
            learned capacity to access your knowledge, structure your answers, and communicate your value even when the
            physiological stress response is active.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            This kind of confidence is not built by telling yourself you are capable. It is built by evidence: repeated
            experience of performing under pressure and doing it well. The mechanism is simple, but the execution requires
            the right conditions.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem", opacity: 0.9 }}>
            You need:
          </p>
          <div style={{ margin: "0.5rem 0 1.5rem" }}>
            {[
              "Sufficient repetitions — not one or two practice sessions, but enough that the answers become automatic.",
              "Genuine pressure — practice that activates some of the physiological challenge of the real thing.",
              "Honest feedback — not validation, but accurate information about what is working and what is not.",
              "Progressive difficulty — practising harder and harder versions of the question until the real interview feels manageable.",
              "Accumulated evidence — a record of strong performances to call on when the imposter voice gets loud.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "0.75rem", padding: "0.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <span style={{ color: "#c9a84c", flexShrink: 0 }}>▸</span>
                <span style={{ opacity: 0.85, lineHeight: 1.65 }}>{item}</span>
              </div>
            ))}
          </div>
          <p style={{ lineHeight: 1.8, marginBottom: "2rem", opacity: 0.9 }}>
            MEOK is built around exactly this model. Every session contributes to a permanent record of your development.
            You can always look back and see: six weeks ago, I couldn&apos;t answer a question about stakeholder conflict
            without going vague. Today I handled four of them cleanly. That is evidence. That is genuine confidence.
          </p>

          {/* ------------------------------------------------------------------ */}
          {/* Quick-start guide */}
          {/* ------------------------------------------------------------------ */}
          <div style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "14px", padding: "2rem", margin: "3rem 0" }}>
            <div style={{ color: "#c9a84c", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "system-ui, sans-serif", marginBottom: "1.25rem" }}>
              Quick-Start: Your First MEOK Interview Prep Session
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {[
                { n: "1", text: "Open MEOK and tell it you have an interview coming up. Give the role, company, and date." },
                { n: "2", text: "Paste in the job description. Ask MEOK to identify the key competencies being assessed." },
                { n: "3", text: "Share your CV. Ask MEOK to map your experience to those competencies." },
                { n: "4", text: "Ask MEOK to run a 30-minute competency mock interview in the style of this role." },
                { n: "5", text: "After each answer, ask for specific STAR feedback. Don't move on until the answer is strong." },
                { n: "6", text: "At the end of the session, ask for a written summary of what to work on next." },
                { n: "7", text: "Repeat with increasing difficulty every two to three days until the interview." },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ background: "#c9a84c", color: "#0d0c18", width: "1.6rem", height: "1.6rem", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.8rem", flexShrink: 0, fontFamily: "system-ui, sans-serif" }}>
                    {item.n}
                  </div>
                  <div style={{ opacity: 0.87, lineHeight: 1.6, paddingTop: "0.1rem" }}>{item.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ------------------------------------------------------------------ */}
          {/* FAQ section */}
          {/* ------------------------------------------------------------------ */}
          <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#c9a84c", margin: "3rem 0 1.5rem" }}>
            Frequently Asked Questions
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              {
                q: "Can AI really help you prepare for job interviews?",
                a: "Yes — and it does something no human practice partner can easily replicate: it remembers everything. MEOK tracks your CV, your previous mock interviews, the questions that tripped you up, and the specific verbal tics and filler phrases you overuse. It runs role-specific mock interviews on demand, gives genuinely critical feedback without the social awkwardness of asking a colleague, and helps you build structured STAR-method answers from your actual career history. The feedback loop is immediate, personalised, and available at 11pm the night before your interview.",
              },
              {
                q: "What types of interviews can MEOK help me prepare for?",
                a: "MEOK can simulate competency-based (behavioural) interviews, technical interviews, presentation panels, strength-based interviews, case study interviews, and informal culture-fit conversations. You tell it the company name, the role, the sector, and any specific format the recruiter has mentioned. MEOK researches the company's known interview style and adjusts its questioning accordingly.",
              },
              {
                q: "How is MEOK different from practising in front of a mirror or asking a friend?",
                a: "A mirror gives no feedback. A friend gives socially cushioned feedback — they don't want to hurt you, so they pull their punches. MEOK gives honest, specific, actionable feedback without social risk. It will tell you directly that your answer was vague, that you used 'um' fourteen times, that you never actually answered the question asked, or that your example was too far in the past to be credible. That honest feedback, delivered safely, is what actually improves performance.",
              },
              {
                q: "How does Sovereign Memory improve interview preparation over time?",
                a: "Sovereign Memory means MEOK accumulates a persistent, private record of your entire preparation journey. It remembers which competency questions you consistently struggle with, the specific story you always reach for (and whether it's becoming overused), the physical and emotional patterns that appear before high-stakes interviews, and the feedback from previous rounds. When you return for session 12 of prep, MEOK doesn't start from scratch — it starts from exactly where you are.",
              },
              {
                q: "Is MEOK useful for neurodivergent job seekers?",
                a: "Yes — and specifically so. For autistic candidates, MEOK can break down the unspoken social scripts embedded in interview culture, explain what interviewers are actually looking for behind each question, and help practise unexpected or ambiguous questions until they feel manageable. For ADHD candidates, it helps structure preparation into achievable sessions and assists with the verbal organisation required for coherent STAR-method answers. The absence of social judgment makes MEOK a safer environment for rehearsal than any human interaction.",
              },
              {
                q: "What is the STAR method and how does MEOK use it?",
                a: "STAR stands for Situation, Task, Action, Result. It is the industry-standard framework for answering competency-based interview questions. MEOK coaches you to build STAR answers from your actual work history — identifying the right stories from your CV, shaping them into the correct structure, and refining the Result section (the part most candidates understate) until it's specific and credible. MEOK holds and recalls your entire story library across sessions, helping you map the right story to the right question type.",
              },
              {
                q: "How long before an interview should I start preparing with MEOK?",
                a: "Ideally, four to six weeks for a role you care about. This allows enough sessions to identify weaknesses, address them, and build genuine evidence-based confidence before the interview. If you have less time, the most impactful use of a single week is: one session on STAR story building, two sessions on mock interviewing with feedback, one session on company-specific questions, and a morning-of grounding session.",
              },
              {
                q: "Will MEOK just tell me my answers are good?",
                a: "No. MEOK's sycophancy detector prevents false validation. It challenges weak answers, probes vague responses, and tells you directly when a STAR answer is missing a component or when your Result is unquantified. This honest feedback is what builds actual interview performance — not the false confidence that comes from a practice partner who is too kind to tell you the truth.",
              },
            ].map((item, index) => (
              <div key={item.q} style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "10px", padding: "1.4rem" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.4 }}>
                  <span style={{ color: "#c9a84c", marginRight: "0.5rem", fontFamily: "system-ui, sans-serif", fontSize: "0.85rem" }}>Q{index + 1}</span>
                  {item.q}
                </div>
                <div style={{ opacity: 0.82, lineHeight: 1.75, fontSize: "0.95rem" }}>{item.a}</div>
              </div>
            ))}
          </div>

          {/* ------------------------------------------------------------------ */}
          {/* Summary */}
          {/* ------------------------------------------------------------------ */}
          <div style={{ margin: "3rem 0 2rem", padding: "2rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "14px" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "1.25rem", color: "#f5f0e8" }}>
              The Bottom Line
            </h2>
            <p style={{ lineHeight: 1.8, opacity: 0.88, marginBottom: "1rem" }}>
              Interviews are not knowledge tests. They are performance tests — and performance tests require performance
              practice. The difference between candidates who consistently succeed in interviews and those who consistently
              stumble is rarely the quality of their experience. It is the quality of their preparation.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.88, marginBottom: "1rem" }}>
              MEOK gives you the one thing most people lack: a practice partner that is always available, always honest,
              and always building on what came before. Not a tool you use once. A companion that compounds with you — across
              sessions, across applications, across the entire arc of a job search or career transition.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.88, marginBottom: 0 }}>
              The interview is not the final test. The preparation is. Start where you are, and build from there.
            </p>
          </div>

          {/* ------------------------------------------------------------------ */}
          {/* CTA */}
          {/* ------------------------------------------------------------------ */}
          <div style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "16px", padding: "2.5rem", textAlign: "center", marginTop: "4rem" }}>
            <div style={{ color: "#c9a84c", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.12em", fontFamily: "system-ui, sans-serif", marginBottom: "0.75rem" }}>
              Ready to start
            </div>
            <h2 style={{ color: "#f5f0e8", marginBottom: "1rem", fontSize: "1.6rem", lineHeight: 1.3 }}>
              Your next interview has already started.
            </h2>
            <p style={{ marginBottom: "2rem", opacity: 0.8, maxWidth: "520px", margin: "0 auto 2rem", lineHeight: 1.7 }}>
              MEOK remembers your CV, your past stumbles, your anxiety patterns, and your best performances. Start
              preparing today — the companion that compounds.
            </p>
            <Link
              href="/birth"
              style={{ background: "#c9a84c", color: "#0d0c18", padding: "1rem 2.5rem", borderRadius: "8px", fontWeight: 700, textDecoration: "none", fontSize: "1.05rem", display: "inline-block" }}
            >
              Begin Your Birth Ceremony →
            </Link>
            <p style={{ marginTop: "1rem", opacity: 0.5, fontSize: "0.82rem", fontFamily: "system-ui, sans-serif" }}>
              Free to start. No credit card required.
            </p>
          </div>

          {/* ------------------------------------------------------------------ */}
          {/* Related reading */}
          {/* ------------------------------------------------------------------ */}
          <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(201,168,76,0.2)" }}>
            <h2 style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#c9a84c", marginBottom: "1rem", fontFamily: "system-ui, sans-serif" }}>
              Related Reading
            </h2>
            <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
              <Link href="/blog/ai-for-interview-anxiety" style={{ color: "#c9a84c", textDecoration: "none", fontSize: "0.9rem" }}>
                AI for Interview Anxiety →
              </Link>
              <Link href="/blog/ai-for-imposter-syndrome" style={{ color: "#c9a84c", textDecoration: "none", fontSize: "0.9rem" }}>
                AI for Imposter Syndrome →
              </Link>
              <Link href="/blog/ai-for-career-coaching" style={{ color: "#c9a84c", textDecoration: "none", fontSize: "0.9rem" }}>
                AI for Career Coaching →
              </Link>
              <Link href="/blog/ai-for-adhd-adults" style={{ color: "#c9a84c", textDecoration: "none", fontSize: "0.9rem" }}>
                AI for ADHD Adults →
              </Link>
              <Link href="/blog/ai-for-confidence" style={{ color: "#c9a84c", textDecoration: "none", fontSize: "0.9rem" }}>
                AI for Confidence →
              </Link>
              <Link href="/blog/ai-for-job-seekers" style={{ color: "#c9a84c", textDecoration: "none", fontSize: "0.9rem" }}>
                AI for Job Seekers →
              </Link>
            </div>
          </div>

        </article>
      </div>
    </>
  );
}
