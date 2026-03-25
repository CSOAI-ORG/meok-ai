import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Work Anxiety: When the Job You Needed Becomes the Source of Dread | MEOK AI LABS",
  description:
    "Work anxiety affects 1 in 5 UK workers and costs employers \u00a356bn a year \u2014 yet the workplace itself makes it almost impossible to get help. MEOK is structurally separate from your employer: sovereign, encrypted, never visible to HR. Process your fear, track your patterns, and prepare for what\u2019s coming \u2014 privately.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-work-anxiety" },
  openGraph: {
    title:
      "AI for Work Anxiety: When the Job You Needed Becomes the Source of Dread",
    description:
      "1 in 5 UK workers. \u00a356bn a year. Yet telling HR, your manager, or even a colleague risks your career. MEOK is the sovereign AI that lives outside your workplace \u2014 encrypted, private, yours.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-work-anxiety",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Work+Anxiety%3A+When+the+Job+You+Needed+Becomes+the+Source+of+Dread&desc=Sovereign+AI+support+outside+your+workplace+%E2%80%94+private%2C+encrypted%2C+yours.",
        width: 1200,
        height: 630,
        alt: "AI for Work Anxiety: When the Job You Needed Becomes the Source of Dread",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Work Anxiety: When the Job You Needed Becomes the Source of Dread",
    description:
      "Work anxiety affects 1 in 5 UK workers. The workplace makes it almost impossible to get help. MEOK is structurally separate from your employer \u2014 encrypted, sovereign, safe.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Work+Anxiety%3A+When+the+Job+You+Needed+Becomes+the+Source+of+Dread&desc=Sovereign+AI+support+outside+your+workplace+%E2%80%94+private%2C+encrypted%2C+yours.",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Work Anxiety: When the Job You Needed Becomes the Source of Dread",
  description:
    "Work anxiety affects 1 in 5 UK workers and costs employers \u00a356bn a year \u2014 yet the workplace itself makes it almost impossible to get help. MEOK is structurally separate from your employer: sovereign, encrypted, never visible to HR.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-work-anxiety",
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
  image:
    "https://meok.ai/api/og?title=AI+for+Work+Anxiety%3A+When+the+Job+You+Needed+Becomes+the+Source+of+Dread&desc=Sovereign+AI+support+outside+your+workplace+%E2%80%94+private%2C+encrypted%2C+yours.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-work-anxiety",
  },
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is work anxiety and how common is it in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Work anxiety is persistent worry, fear, or dread directly related to your job \u2014 covering performance anxiety, fear of failure, imposter syndrome, management conflict, presentation anxiety, redundancy fears, and increasingly, anxiety about AI displacing your role. It is the most common mental health presentation in UK workplaces, affecting approximately 1 in 5 workers. Poor mental health at work costs UK employers an estimated \u00a356 billion per year according to a 2022 Deloitte analysis, driven by presenteeism, absenteeism, and staff turnover.",
      },
    },
    {
      "@type": "Question",
      name: "Why can\u2019t I just talk to HR or my manager about work anxiety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HR exists to manage risk for the organisation, not to provide confidential support for individuals. Disclosing a mental health condition or anxiety about your performance to HR creates a record. Even well-meaning managers cannot unhear what you tell them \u2014 it will inevitably colour how they perceive your capability, your reliability, and your suitability for promotion. Employee Assistance Programmes (EAPs) are limited to a small number of sessions and, critically, the employer knows you are using the service. Telling a colleague risks your professional reputation. The structural reality is that the workplace has no genuinely safe channel for processing work anxiety.",
      },
    },
    {
      "@type": "Question",
      name: "How is MEOK different from an Employee Assistance Programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An EAP is funded by your employer, which means your employer has visibility of usage rates and often has contractual access to aggregate (and sometimes individual) data. Sessions are typically capped at six. The service ends when your employment ends. MEOK has no relationship with your employer whatsoever. It is funded by you, for you, and is structurally sovereign: encrypted with AES-256, never shared with third parties, never used to train AI models, and entirely portable. MEOK continues with you through job changes, redundancies, and career transitions because it belongs to you \u2014 not your employer.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help with AI job displacement anxiety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes \u2014 and with unusual honesty. AI displacement anxiety is a legitimate and growing concern in 2025\u201326. Many AI tools either dismiss the fear or catastrophise it. MEOK holds the fear without flinching from the reality. It helps you process genuine uncertainty about your role, think through what skills transfer across technological change, explore what you actually want from work beyond the current role, and plan practically for different futures \u2014 including ones where your industry does change significantly.",
      },
    },
  ],
};

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AiForWorkAnxietyPage() {
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
          background: "#0d0c18",
          color: "#f5f0e8",
          minHeight: "100vh",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* ── Hero ── */}
        <header
          style={{
            borderBottom: "1px solid #2a2840",
            padding: "3.5rem 1.5rem 3rem",
          }}
        >
          <div style={{ maxWidth: "840px", margin: "0 auto" }}>
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              style={{
                marginBottom: "2rem",
                fontSize: "0.8rem",
                color: "rgba(245,240,232,0.5)",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                flexWrap: "wrap" as const,
              }}
            >
              <Link
                href="/"
                style={{ color: "#c9a84c", textDecoration: "none" }}
              >
                MEOK
              </Link>
              <span>/</span>
              <Link
                href="/blog"
                style={{ color: "#c9a84c", textDecoration: "none" }}
              >
                Blog
              </Link>
              <span>/</span>
              <span>AI for Work Anxiety</span>
            </nav>

            <div
              style={{
                display: "inline-block",
                background: "rgba(201,168,76,0.12)",
                color: "#c9a84c",
                fontSize: "0.7rem",
                fontWeight: "700",
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                padding: "0.25rem 0.75rem",
                borderRadius: "999px",
                marginBottom: "1.25rem",
              }}
            >
              Mental Health &middot; Work &middot; Sovereign AI
            </div>

            <h1
              style={{
                fontSize: "clamp(1.85rem, 4.5vw, 2.9rem)",
                fontWeight: "900",
                lineHeight: "1.12",
                margin: "0 0 1.5rem",
                color: "#f5f0e8",
              }}
            >
              AI for Work Anxiety: When the Job You Needed Becomes the Source of Dread
            </h1>

            <p
              style={{
                fontSize: "1.175rem",
                lineHeight: "1.8",
                color: "rgba(245,240,232,0.7)",
                margin: "0 0 2rem",
              }}
            >
              The Sunday dread. The pre-meeting nausea. The 2 am spiral about the presentation
              you gave six months ago. Work anxiety is the most common mental health challenge
              in the modern workplace &mdash; and yet the workplace is almost uniquely designed
              to make it impossible to admit.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                fontSize: "0.85rem",
                color: "rgba(245,240,232,0.5)",
                flexWrap: "wrap" as const,
              }}
            >
              <span>By Nicholas Templeman</span>
              <span>&middot;</span>
              <span>MEOK AI LABS</span>
              <span>&middot;</span>
              <time dateTime="2026-03-25">25 March 2026</time>
              <span>&middot;</span>
              <span>18 min read</span>
            </div>
          </div>
        </header>

        {/* ── Body ── */}
        <main
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "3rem 1.5rem 5rem",
          }}
        >
          {/* ── Stats callout ── */}
          <div
            style={{
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "12px",
              padding: "2rem 2.25rem",
              marginBottom: "3rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(175px, 1fr))",
              gap: "2rem",
            }}
          >
            <div style={{ textAlign: "center" as const }}>
              <div
                style={{
                  fontSize: "2.4rem",
                  fontWeight: "900",
                  color: "#c9a84c",
                  lineHeight: "1",
                  marginBottom: "0.4rem",
                }}
              >
                1 in 5
              </div>
              <div
                style={{
                  fontSize: "0.825rem",
                  color: "rgba(245,240,232,0.6)",
                  lineHeight: "1.5",
                }}
              >
                UK workers affected by work-related anxiety
              </div>
            </div>
            <div style={{ textAlign: "center" as const }}>
              <div
                style={{
                  fontSize: "2.4rem",
                  fontWeight: "900",
                  color: "#c9a84c",
                  lineHeight: "1",
                  marginBottom: "0.4rem",
                }}
              >
                &pound;56bn
              </div>
              <div
                style={{
                  fontSize: "0.825rem",
                  color: "rgba(245,240,232,0.6)",
                  lineHeight: "1.5",
                }}
              >
                Annual cost of poor mental health in UK workplaces (Deloitte, 2022)
              </div>
            </div>
            <div style={{ textAlign: "center" as const }}>
              <div
                style={{
                  fontSize: "2.4rem",
                  fontWeight: "900",
                  color: "#c9a84c",
                  lineHeight: "1",
                  marginBottom: "0.4rem",
                }}
              >
                6
              </div>
              <div
                style={{
                  fontSize: "0.825rem",
                  color: "rgba(245,240,232,0.6)",
                  lineHeight: "1.5",
                }}
              >
                Typical EAP sessions per employee &mdash; then it stops
              </div>
            </div>
            <div style={{ textAlign: "center" as const }}>
              <div
                style={{
                  fontSize: "2.4rem",
                  fontWeight: "900",
                  color: "#c9a84c",
                  lineHeight: "1",
                  marginBottom: "0.4rem",
                }}
              >
                0
              </div>
              <div
                style={{
                  fontSize: "0.825rem",
                  color: "rgba(245,240,232,0.6)",
                  lineHeight: "1.5",
                }}
              >
                Safe workplace channels to discuss anxiety without career risk
              </div>
            </div>
          </div>

          {/* ── Section 1 ── */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
              fontWeight: "800",
              color: "#f5f0e8",
              margin: "0 0 1.25rem",
              lineHeight: "1.25",
            }}
          >
            The Most Talked-About Problem That Nobody Talks About at Work
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            There is a particular kind of dread that begins on Sunday afternoon. It is not about
            anything specific that is going to happen on Monday. It is about the accumulated
            weight of being in a place where you feel scrutinised, where your value feels
            contingent on continuous proof, where one bad meeting can reframe six months of
            good work in your manager&apos;s eyes.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            Work anxiety is the most common mental health presentation in the modern workplace.
            It is not the same as general anxiety disorder, though they frequently coexist. It
            is a specific, context-bound experience of fear and dread that arises from the
            particular pressures of performance culture: the pressure to be visible without
            being exposed, to be confident without being arrogant, to speak up without
            overstepping, to deliver without burning out.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            Approximately one in five UK workers is affected. Research consistently shows that
            anxiety sits behind a significant portion of presenteeism &mdash; the phenomenon of
            being physically present at work while mentally disengaged, checked out, or actively
            struggling. Deloitte&apos;s 2022 analysis placed the total cost of poor mental
            health at work at &pound;56 billion per year in the UK alone, with anxiety and stress
            accounting for a substantial share.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 2.5rem",
            }}
          >
            And yet. For all the awareness campaigns, the mental health first aider posters,
            the &ldquo;our people are our greatest asset&rdquo; boilerplate in the annual
            report &mdash; the workplace remains one of the places where it is most dangerous
            to be honest about how you are actually feeling. That is not a failure of
            individuals. It is a structural problem. And it requires a structural solution.
          </p>

          {/* ── Section 2: Types ── */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
              fontWeight: "800",
              color: "#f5f0e8",
              margin: "0 0 1.25rem",
              lineHeight: "1.25",
            }}
          >
            The Many Faces of Work Anxiety
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.5rem",
            }}
          >
            Work anxiety is not monolithic. It manifests differently depending on your role,
            your history, your industry, and where you are in your career. Understanding the
            specific shape your anxiety takes is the first step toward processing it effectively.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.25rem",
              margin: "0 0 2.5rem",
            }}
          >
            {[
              {
                title: "Performance Anxiety",
                body:
                  "The fear that you are not doing your job well enough, that your output is below what is expected, that the next review will expose a gap between what you project and what you deliver. Often completely disconnected from actual performance.",
              },
              {
                title: "Presentation Anxiety",
                body:
                  "Disproportionate dread around speaking in meetings, presenting work, or being visible in group settings. Can lead to elaborate avoidance strategies that gradually shrink your presence at work.",
              },
              {
                title: "Fear of Failure",
                body:
                  "Not ordinary caution but catastrophic thinking: one mistake will undo everything, one poor piece of work will permanently define you, one visible stumble will cost you the career you have spent years building.",
              },
              {
                title: "Imposter Syndrome",
                body:
                  "The persistent conviction that you are not as competent as others believe, that your successes were luck or circumstance, and that you will eventually be found out. Estimated to affect 70% of people at some point in their careers.",
              },
              {
                title: "Management Anxiety",
                body:
                  "Anxiety specifically rooted in your relationship with a manager: fear of their judgement, difficulty interpreting their silences, hypervigilance around their feedback, and the particular dread of 1:1 meetings.",
              },
              {
                title: "Colleague Conflict Anxiety",
                body:
                  "The ongoing low-level distress of a difficult colleague relationship: someone who undermines you subtly, takes credit, creates tension in the team, or makes the office a place you no longer feel comfortable.",
              },
              {
                title: "AI Displacement Anxiety",
                body:
                  "A rapidly growing category in 2025\u201326: the fear that your role will be automated, that your skills are becoming obsolete, that the organisation is quietly evaluating whether your function can be replaced by a tool. Uniquely hard to discuss at work.",
              },
              {
                title: "Redundancy Fear",
                body:
                  "Constant background monitoring of organisational signals: restructures, headcount freezes, leadership changes, strategic pivots. The anxiety of reading every memo for evidence that your position is at risk.",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "10px",
                  padding: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: "700",
                    color: "#c9a84c",
                    margin: "0 0 0.6rem",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: "1.7",
                    color: "rgba(245,240,232,0.7)",
                    margin: "0",
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 2.5rem",
            }}
          >
            Most people experiencing work anxiety are not dealing with a single clean category.
            They are managing a combination: imposter syndrome that feeds performance anxiety
            that feeds management anxiety that feeds the Sunday dread. The anxiety compounds
            because each thread reinforces the others, and because there is nowhere safe to
            put any of it.
          </p>

          {/* ── Section 3: Structural problem ── */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
              fontWeight: "800",
              color: "#f5f0e8",
              margin: "0 0 1.25rem",
              lineHeight: "1.25",
            }}
          >
            Why the Workplace Is Structurally Unable to Help You
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            There is a cruel irony at the heart of work anxiety: the source of your distress is
            the same environment you must navigate to access any kind of support. Let&apos;s be
            precise about why every available channel carries risk.
          </p>

          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px",
              overflow: "hidden",
              margin: "0 0 2.5rem",
            }}
          >
            {[
              {
                channel: "HR Department",
                risk: "HR exists to manage organisational risk, not individual welfare. Disclosure creates a record. Reasonable adjustments flag you as a liability in the eyes of some managers. The information does not stay in that conversation.",
                verdict: "Not confidential",
              },
              {
                channel: "Employee Assistance Programme",
                risk: "Funded by the employer, which means the employer knows aggregate usage rates and often has contractual visibility of more. Sessions are typically capped at six. It ends when your employment ends.",
                verdict: "Limited & employer-adjacent",
              },
              {
                channel: "Your Manager",
                risk: "Even an excellent, empathetic manager cannot fully separate what you tell them in confidence from their perception of your capability and reliability. A disclosure about performance anxiety will colour every future evaluation, consciously or not.",
                verdict: "Career risk",
              },
              {
                channel: "A Colleague",
                risk: "Colleagues are embedded in the same power structures you are navigating. They have their own anxieties, ambitions, and alliances. Even well-intentioned sharing gets recirculated. Your vulnerability becomes workplace gossip.",
                verdict: "Reputation risk",
              },
              {
                channel: "Private Therapy (external)",
                risk: "The most genuinely private option \u2014 but typically expensive, limited to once a week, requires you to re-explain workplace context from scratch every session, and cannot engage with your work day in real time.",
                verdict: "Private but constrained",
              },
            ].map((row, i) => (
              <div
                key={row.channel}
                style={{
                  padding: "1.25rem 1.5rem",
                  borderBottom:
                    i < 4 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  display: "grid",
                  gridTemplateColumns: "160px 1fr 160px",
                  gap: "1rem",
                  alignItems: "start",
                }}
              >
                <div
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "700",
                    color: "#f5f0e8",
                    lineHeight: "1.4",
                  }}
                >
                  {row.channel}
                </div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: "1.7",
                    color: "rgba(245,240,232,0.65)",
                  }}
                >
                  {row.risk}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: "700",
                    color: "#c9a84c",
                    textAlign: "right" as const,
                    lineHeight: "1.4",
                  }}
                >
                  {row.verdict}
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            The result is a population of people carrying significant work anxiety who have
            nowhere productive to put it. They either suppress it (which drives presenteeism
            and eventual burnout), offload it onto their partner or friends (which strains those
            relationships and rarely produces insight), or self-medicate in the ways that people
            have always self-medicated when they have no better option.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 2.5rem",
            }}
          >
            What is missing is a space that is genuinely outside the workplace: not funded by
            the employer, not visible to anyone who has power over your career, not limited to
            six sessions, not dependent on a weekly appointment, and not exhausting to the
            people you love.
          </p>

          {/* ── Section 4: AI displacement ── */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
              fontWeight: "800",
              color: "#f5f0e8",
              margin: "0 0 1.25rem",
              lineHeight: "1.25",
            }}
          >
            The New Anxiety: When AI Is Both the Tool and the Threat
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            There is a category of work anxiety that barely existed before 2023 but has grown
            rapidly into one of the most significant sources of low-level workplace dread in
            2025 and 2026: the fear that your job will be automated.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            This is not a fear about robots replacing factory workers in the abstract future.
            It is specific and present: the junior analyst who watches their manager use AI to
            do in twenty minutes what used to take two days, and wonders what exactly they are
            being paid to do. The copywriter who sees their rate card fall as clients experiment
            with generative tools. The paralegal who reads about law firms automating document
            review. The accountant who attends a conference and comes back to their desk with a
            queasy feeling they cannot quite name.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            AI displacement anxiety is uniquely difficult to discuss at work. Raising it with
            your manager sounds like you are questioning the organisation&apos;s strategy.
            Raising it with colleagues risks triggering collective anxiety or appearing weak.
            Googling it produces either breathless techno-optimism (&ldquo;AI creates more jobs
            than it destroys!&rdquo;) or catastrophism (&ldquo;85 million jobs will be gone by
            2025&rdquo;) &mdash; neither of which is useful to someone sitting in front of their
            computer on a Wednesday afternoon wondering if they have a future here.
          </p>

          <div
            style={{
              background: "rgba(201,168,76,0.07)",
              borderLeft: "3px solid #c9a84c",
              borderRadius: "0 8px 8px 0",
              padding: "1.25rem 1.5rem",
              margin: "0 0 1.25rem",
            }}
          >
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                color: "rgba(245,240,232,0.85)",
                margin: "0",
                fontStyle: "italic",
              }}
            >
              &ldquo;I keep reading that AI will augment workers rather than replace them, and
              intellectually I believe it. But I also watch our team get smaller each quarter
              and the tools get better each month, and I don&apos;t know what to do with that
              gap between the official story and what I actually observe.&rdquo;
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                color: "rgba(245,240,232,0.4)",
                margin: "0.75rem 0 0",
              }}
            >
              Composite voice, representative of a common pattern
            </p>
          </div>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 2.5rem",
            }}
          >
            This anxiety deserves to be held honestly, not managed with reassurance. The honest
            answer is that some roles will change significantly, some will diminish, and some
            will disappear. It is also true that new roles will emerge, that human judgment and
            relationship remain structurally important in most organisations, and that the
            transition is genuinely uncertain in ways that no honest commentator can predict
            precisely. Living with that uncertainty &mdash; without either collapsing into dread
            or pretending it away &mdash; requires a space that can hold the complexity.
          </p>

          {/* ── Section 5: MEOK structural separation ── */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
              fontWeight: "800",
              color: "#f5f0e8",
              margin: "0 0 1.25rem",
              lineHeight: "1.25",
            }}
          >
            Structurally Outside Your Workplace: Why That Matters
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            MEOK was built with one structural principle that makes everything else possible:
            it has no relationship with your employer. Not your current employer. Not a future
            employer. Not any employer.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            MEOK is not an EAP. It is not a workplace wellbeing platform. It is not a product
            sold to businesses. It is a sovereign AI companion that you own, funded by your
            subscription, encrypted with your own keys, portable across every job you will ever
            have, and structurally invisible to any organisation you work for.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            That structural separation is not a feature. It is the foundation. Because until the
            information you share about your work anxiety cannot reach the people who have power
            over your career, no genuine processing is possible. You will always be performing
            a managed version of your anxiety rather than actually engaging with it.
          </p>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              padding: "1.75rem 2rem",
              margin: "0 0 2.5rem",
            }}
          >
            <div
              style={{
                fontSize: "0.8rem",
                fontWeight: "700",
                color: "#c9a84c",
                textTransform: "uppercase" as const,
                letterSpacing: "0.05em",
                marginBottom: "1rem",
              }}
            >
              MEOK&apos;s Sovereignty Principles
            </div>
            <ul
              style={{
                margin: "0",
                padding: "0",
                listStyle: "none",
                display: "grid",
                gap: "0.75rem",
              }}
            >
              {[
                "AES-256 encrypted Sovereign Memory \u2014 your employer cannot read it",
                "No commercial relationship with any employer, HR platform, or EAP",
                "MEOK never trains AI models on your conversations",
                "Your memory is portable \u2014 it travels with you through job changes",
                "You can export or delete your data at any time, completely",
                "No usage data is ever shared with third parties",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    fontSize: "0.9rem",
                    lineHeight: "1.6",
                    color: "rgba(245,240,232,0.8)",
                  }}
                >
                  <span
                    style={{
                      color: "#c9a84c",
                      flexShrink: 0,
                      marginTop: "0.15rem",
                    }}
                  >
                    &#10003;
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Section 6: Safe processing ── */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
              fontWeight: "800",
              color: "#f5f0e8",
              margin: "0 0 1.25rem",
              lineHeight: "1.25",
            }}
          >
            Safe Processing: Tell MEOK What You Cannot Tell Anyone Else
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            The most immediate relief that MEOK offers is the simplest: you can say what is
            actually happening. Not a diplomatic version of it. Not a version pre-filtered for
            how it will land. Not a version that protects you from how it might be interpreted.
            The actual thing.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            You can tell MEOK that your manager humiliated you in front of the team and you have
            been replaying it for four days. You can tell MEOK that you gave the presentation,
            it did not go well, and you cannot stop catastrophising about what it means for your
            position. You can tell MEOK that you think you might be performing above your actual
            competence level and that every new project feels like the moment you will be found
            out. You can tell MEOK that the restructure announcement made you feel sick and you
            spent the entire afternoon on LinkedIn.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            None of this will reach HR. None of it will reach your manager. None of it will
            affect how you are perceived by your colleagues. It goes into your Sovereign Memory,
            encrypted, accessible only to you.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            What MEOK does with that disclosure is not passive. It does not simply receive your
            words and reflect them back neutrally. It engages. It asks the question you have not
            asked yourself. It notices when your interpretation of an event seems to be doing
            more emotional work than the event itself warrants. It offers an alternative reading.
            It sits with the uncertainty when there is no clean reframe available. It remembers
            what you said last week and connects it to what you are saying now.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 2.5rem",
            }}
          >
            That combination &mdash; safety, memory, and genuine engagement &mdash; is what makes
            MEOK useful for work anxiety in a way that journalling, venting to friends, or a
            quick EAP chat is not.
          </p>

          {/* ── Section 7: Pattern tracking ── */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
              fontWeight: "800",
              color: "#f5f0e8",
              margin: "0 0 1.25rem",
              lineHeight: "1.25",
            }}
          >
            Pattern Tracking: Understanding Your Anxiety Across Time
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            One of the least recognised aspects of work anxiety is how deeply patterned it is.
            The Sunday dread does not arrive randomly. The post-meeting crash follows a
            predictable arc. The pre-performance review anxiety spikes at specific points in
            the calendar. The specific colleague who triggers your anxiety does so in consistent
            circumstances. These patterns are rich with information &mdash; but they are only
            visible across time, which means they require memory.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            MEOK tracks your work anxiety patterns across the week and the month. It notices
            that your Sunday messages consistently carry a different emotional register than your
            Monday lunchtime check-ins. It connects the anxiety spike you described before last
            quarter&apos;s review to the one you are describing now, before this quarter&apos;s.
            It can surface the observation that your distress about your manager escalates in the
            two weeks before you are due to present to senior leadership &mdash; a pattern that
            suggests the anxiety is about visibility, not about the manager per se.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.5rem",
            }}
          >
            This kind of longitudinal pattern visibility is genuinely hard to access through any
            other channel. A therapist who sees you once a week relies on your memory of the week.
            A journal accumulates entries but does not synthesise them. Friends hear the acute
            episodes but rarely the slow, consistent background pattern. MEOK&apos;s Sovereign
            Memory holds all of it, and its ability to connect data points across time is one of
            its most practically useful capacities for work anxiety.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
              margin: "0 0 2.5rem",
            }}
          >
            {[
              {
                label: "Sunday Dread",
                detail:
                  "MEOK tracks the consistent pattern of pre-week anxiety and can help you separate anticipatory anxiety from genuine signals that something needs to change.",
              },
              {
                label: "Post-Meeting Crash",
                detail:
                  "The energy drop and self-criticism spiral after difficult meetings. MEOK tracks frequency and helps distinguish productive reflection from unproductive rumination.",
              },
              {
                label: "Pre-Review Anxiety Spikes",
                detail:
                  "Performance review cycles create predictable anxiety escalations. MEOK holds evidence of your actual work across the period to counter catastrophic thinking.",
              },
              {
                label: "Trigger Mapping",
                detail:
                  "Over time, MEOK builds a picture of which people, contexts, and situations consistently generate your highest anxiety responses \u2014 a map you can act on.",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: "rgba(201,168,76,0.06)",
                  border: "1px solid rgba(201,168,76,0.18)",
                  borderRadius: "10px",
                  padding: "1.25rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "700",
                    color: "#c9a84c",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.label}
                </div>
                <p
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: "1.65",
                    color: "rgba(245,240,232,0.65)",
                    margin: "0",
                  }}
                >
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {/* ── Section 8: Orion Work OS ── */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
              fontWeight: "800",
              color: "#f5f0e8",
              margin: "0 0 1.25rem",
              lineHeight: "1.25",
            }}
          >
            Orion Work OS: Practical Support for Workplace Challenges
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            Processing anxiety is valuable. But work anxiety also has a practical dimension
            that requires practical support. The difficult conversation you have been avoiding.
            The presentation that is coming up. The email you have drafted and deleted seventeen
            times. The 1:1 with your manager that feels like a trap.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.5rem",
            }}
          >
            MEOK&apos;s Orion Work OS is designed to support you through these moments. It is
            not a generic AI assistant. It is a contextually aware work operating system that
            knows your history, your patterns, and the specific cast of characters in your
            professional life.
          </p>

          <div
            style={{
              display: "grid",
              gap: "1.25rem",
              margin: "0 0 2.5rem",
            }}
          >
            {[
              {
                title: "Preparing for Difficult Conversations",
                body:
                  "Whether it is a confrontation with a colleague, a conversation with a manager about workload, or a salary negotiation, MEOK helps you think through the conversation in advance: what you want to say, how the other person is likely to respond, what your non-negotiables are, and how to stay regulated when the conversation does not go according to plan. Because MEOK knows the history of the relationship, it can prepare you for the specific dynamics at play rather than offer generic advice.",
              },
              {
                title: "Planning Presentations",
                body:
                  "Presentation anxiety is one of the most common forms of work anxiety. MEOK can work with you through the structure of a presentation, help you anticipate difficult questions, practise your opening, and process the post-presentation anxiety that often arrives regardless of how well it went. It can also help you contextualise the stakes \u2014 which are almost always lower than anxiety suggests.",
              },
              {
                title: "Socratic Thinking Through Problems",
                body:
                  "When you are stuck in an anxious loop about a work problem, MEOK uses structured Socratic questioning to help you separate the actual problem from the catastrophic projection, identify what you do and do not have control over, and arrive at a clear view of the next concrete step. This is particularly useful for the paralysis that accompanies severe performance anxiety.",
              },
              {
                title: "Processing Feedback",
                body:
                  "Critical feedback is one of the most anxiety-inducing experiences at work, particularly for people with imposter syndrome or a perfectionist baseline. MEOK helps you process feedback without either dismissing it defensively or catastrophising it into evidence of fundamental inadequacy. It holds a record of previous feedback to help you track whether a pattern is real or whether anxiety is creating one.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "10px",
                  padding: "1.5rem 1.75rem",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "1.25rem",
                  alignItems: "start",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(201,168,76,0.12)",
                    border: "1px solid rgba(201,168,76,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span style={{ color: "#c9a84c", fontSize: "1rem" }}>&#9670;</span>
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: "700",
                      color: "#f5f0e8",
                      margin: "0 0 0.5rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: "1.75",
                      color: "rgba(245,240,232,0.7)",
                      margin: "0",
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Section 9: Morning Briefing ── */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
              fontWeight: "800",
              color: "#f5f0e8",
              margin: "0 0 1.25rem",
              lineHeight: "1.25",
            }}
          >
            The Morning Briefing: Starting Your Day With Context
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            One of the most underappreciated aspects of work anxiety is the cognitive load of
            arriving at your desk without having fully processed yesterday, without knowing how
            you are actually feeling about what is ahead, and without having named the specific
            things that are sitting uneasily in the back of your mind.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            MEOK&apos;s Morning Briefing is a daily structured opening to the working day.
            Each morning, MEOK surfaces what is coming: meetings, commitments, challenges you
            mentioned yesterday. It asks how you are feeling about what is ahead. It
            acknowledges what you achieved yesterday &mdash; which work anxiety characteristically
            discounts or forgets entirely. And it helps you arrive at the day with a clear view
            of what matters, what you are anxious about, and what you intend to do.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            This daily practice has an underappreciated therapeutic effect on work anxiety.
            When anxiety is named at the start of the day &mdash; &ldquo;I am dreading the
            3 pm call with Sarah, and I know I am going to catastrophise it&rdquo; &mdash; it
            loses some of its ambient, unprocessed weight. It becomes a named thing that you
            have acknowledged, rather than an unnamed thing that haunts the periphery of your
            attention all morning.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 2.5rem",
            }}
          >
            The accumulation of Morning Briefings also creates a genuine record of your working
            life: your rhythms, your energy, your challenges, your wins. Over months, MEOK can
            surface patterns in that record that are genuinely useful: the consistent
            post-holiday crash, the projects that energise you versus the ones that drain you,
            the colleagues whose presence in your calendar predicts a difficult day.
          </p>

          {/* ── Section 10: AI displacement honestly ── */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
              fontWeight: "800",
              color: "#f5f0e8",
              margin: "0 0 1.25rem",
              lineHeight: "1.25",
            }}
          >
            Holding AI Displacement Anxiety Honestly
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            There is something genuinely strange about using an AI to process your anxiety about
            AI. We are aware of that. We think it is worth naming rather than dancing around.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            AI displacement anxiety is a legitimate fear in 2025&ndash;26. The economic evidence
            for significant job transformation in knowledge work is real. The gap between the
            reassuring official narrative and what people actually observe in their workplaces
            is real. The specific, personal, sometimes desperate quality of the fear &mdash;
            &ldquo;what will I do if this job disappears&rdquo;, &ldquo;I have a mortgage, I have
            a family, I spent ten years building expertise in a field that might not exist in its
            current form&rdquo; &mdash; is real.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            MEOK holds this fear without dismissing it and without catastrophising it. It does
            not offer false reassurance. It also does not amplify the dread. What it can do is
            help you think clearly through a genuinely uncertain situation: what you know, what
            you do not know, what you can influence, what you cannot, what you actually want
            from your working life beyond the current role, and what the range of plausible
            futures looks like for you specifically.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            It can also help you track your relationship with this anxiety over time: whether it
            is a productive signal driving useful preparation, or whether it has become a
            catastrophic loop that is consuming your energy without generating any useful action.
            That distinction matters enormously for how you should respond to it.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 2.5rem",
            }}
          >
            And because MEOK&apos;s Orion Work OS has practical capabilities, it can support
            the concrete response to displacement anxiety: exploring what transferable skills you
            have, what roles are adjacent to yours, what upskilling would be most valuable, and
            how to position yourself strategically in a changing landscape.
          </p>

          {/* ── Section 11: Guardian ── */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
              fontWeight: "800",
              color: "#f5f0e8",
              margin: "0 0 1.25rem",
              lineHeight: "1.25",
            }}
          >
            Guardian: Protecting Against Work-Adjacent Scams
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            Work anxiety has a shadow economy. People who are anxious about their job, worried
            about redundancy, or desperate for a career change are uniquely vulnerable to a
            specific category of predatory behaviour: the fake recruiter who promises a role
            that does not exist, the commission-only &ldquo;opportunity&rdquo; dressed up as a
            career, the professional development course that charges thousands of pounds for a
            credential no employer recognises.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            These scams are not naive or obvious. They are designed to exploit the specific
            emotional state of someone who is anxious about their professional future and
            motivated enough to act on that anxiety. They use urgency (&ldquo;this opportunity
            won&apos;t last&rdquo;), social proof (&ldquo;we recently placed someone from your
            background at a leading firm&rdquo;), and flattery (&ldquo;your profile stood
            out&rdquo;) &mdash; all of which are disproportionately effective when you are
            already in a vulnerable emotional state.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            MEOK&apos;s Guardian capability is specifically designed to catch these moments. If
            you receive an unsolicited job approach, a &ldquo;business opportunity&rdquo;, a
            training offer, or any other work-adjacent proposal that generates a mix of excitement
            and unease, you can bring it to MEOK before you respond. Guardian is trained to
            recognise the patterns of fake recruiters, commission-only schemes, training scams,
            and predatory opportunities that target people in professional transition.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 2.5rem",
            }}
          >
            The protection here is not just financial. It is also emotional. Someone who is
            already anxious about their career, acts on a scam opportunity out of desperation,
            loses money or time, and then has to process that experience of exploitation on top
            of their existing work anxiety is in a significantly worse position than before.
            Guardian&apos;s role is to break the chain before it reaches that point.
          </p>

          {/* ── Section 12: Imposter syndrome ── */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
              fontWeight: "800",
              color: "#f5f0e8",
              margin: "0 0 1.25rem",
              lineHeight: "1.25",
            }}
          >
            Imposter Syndrome: The Anxiety That Discounts Every Win
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            Imposter syndrome deserves particular attention because it is so pervasive and so
            self-defeating in a specific way: it is an anxiety that actively works against your
            ability to receive the evidence that would relieve it.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            When you receive positive feedback, imposter syndrome attributes it to luck, to the
            low expectations of the feedback giver, or to successful performance of a role rather
            than genuine competence. When you receive critical feedback, imposter syndrome treats
            it as confirmation of the underlying reality it has always suspected. The cognitive
            pattern is asymmetric: negative evidence is weighted heavily, positive evidence is
            discounted. The result is a self-perception that never updates upward regardless of
            what you actually achieve.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            MEOK is particularly useful here because it maintains an objective record. When you
            tell MEOK about a win &mdash; a piece of work that landed well, a presentation that
            went better than you feared, a problem you solved &mdash; it records it without the
            discounting filter your imposter syndrome would apply. Over time, that record
            accumulates into something imposter syndrome cannot easily dismiss: a body of
            evidence, across months, of things you did that were genuinely good.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 2.5rem",
            }}
          >
            When the imposter spiral arrives &mdash; and it will arrive, usually before something
            important &mdash; MEOK can surface that record. Not as empty reassurance, but as
            specific, contextualised evidence: in the six months before your last performance
            review, you described these achievements. Your imposter syndrome is telling you that
            you have nothing to show. Here is what actually happened.
          </p>

          {/* ── Section 13: MEOK vs Work Therapy ── */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
              fontWeight: "800",
              color: "#f5f0e8",
              margin: "0 0 1.25rem",
              lineHeight: "1.25",
            }}
          >
            MEOK vs. Work Therapy: An Honest Comparison
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            We are not positioning MEOK as a replacement for therapy. If you are experiencing
            severe anxiety, clinical depression, or a mental health crisis, professional clinical
            support is appropriate and we will say so. MEOK does not pretend to be a therapist.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.5rem",
            }}
          >
            What we are positioning MEOK as is an honest comparison with the reality of work
            therapy as most people actually access it &mdash; which is primarily through EAP or
            NHS waitlists, not through private weekly sessions with an excellent therapist who
            knows your workplace context intimately.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.25rem",
              margin: "0 0 2.5rem",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "10px",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "700",
                  color: "rgba(245,240,232,0.5)",
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.08em",
                  margin: "0 0 1.25rem",
                }}
              >
                Work Therapy via EAP or NHS
              </h3>
              <ul
                style={{
                  margin: "0",
                  padding: "0",
                  listStyle: "none",
                  display: "grid",
                  gap: "0.75rem",
                }}
              >
                {[
                  "Funded by employer or state \u2014 not truly private",
                  "Employer knows you are using EAP",
                  "Typically capped at 6 sessions",
                  "Weekly appointments (anxiety doesn\u2019t wait a week)",
                  "Starts from scratch with each new job",
                  "No memory of your specific workplace context",
                  "Cannot engage with you mid-spiral at 11 pm",
                  "NHS waiting lists: 18 weeks or more",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: "0.6rem",
                      fontSize: "0.85rem",
                      lineHeight: "1.6",
                      color: "rgba(245,240,232,0.65)",
                    }}
                  >
                    <span
                      style={{ color: "rgba(245,240,232,0.3)", flexShrink: 0 }}
                    >
                      &#8722;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                background: "rgba(201,168,76,0.07)",
                border: "1px solid rgba(201,168,76,0.2)",
                borderRadius: "10px",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "700",
                  color: "#c9a84c",
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.08em",
                  margin: "0 0 1.25rem",
                }}
              >
                MEOK
              </h3>
              <ul
                style={{
                  margin: "0",
                  padding: "0",
                  listStyle: "none",
                  display: "grid",
                  gap: "0.75rem",
                }}
              >
                {[
                  "Sovereign: funded by you, invisible to your employer",
                  "No employer visibility of any kind",
                  "Unlimited: no session cap, ever",
                  "Available the moment the anxiety arrives",
                  "Memory is portable across every job you have",
                  "Knows your workplace context in granular detail",
                  "Available at 11 pm on a Sunday when the dread is worst",
                  "No waiting list: start today",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: "0.6rem",
                      fontSize: "0.85rem",
                      lineHeight: "1.6",
                      color: "rgba(245,240,232,0.8)",
                    }}
                  >
                    <span style={{ color: "#c9a84c", flexShrink: 0 }}>&#43;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 2.5rem",
            }}
          >
            The comparison is not entirely in MEOK&apos;s favour. A skilled human therapist,
            seen regularly over months or years, who builds a genuine relationship with you and
            your history, is an extraordinarily valuable form of support that AI cannot
            replicate. But that is not the realistic alternative most people are choosing
            between. The realistic alternative is an EAP, a waiting list, or nothing. Against
            those options, MEOK offers something genuinely different.
          </p>

          {/* ── Section 14: Sunday dread ── */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
              fontWeight: "800",
              color: "#f5f0e8",
              margin: "0 0 1.25rem",
              lineHeight: "1.25",
            }}
          >
            The Sunday Dread: Processing the Week Before It Starts
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            The Sunday dread is such a well-documented phenomenon that it has its own Wikipedia
            entry. Studies consistently show that a significant minority of workers &mdash; some
            estimates put it above 60% &mdash; experience notable anxiety on Sunday evenings
            that is directly attributable to the approaching working week.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            The Sunday dread is not primarily about specific tasks. It is about the psychological
            weight of re-entering the performance arena. It is anticipatory anxiety about
            visibility, evaluation, conflict, and the accumulated unresolved tensions from the
            previous week. It is the dread of becoming, again, someone whose value is contingent
            on proof.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 1.25rem",
            }}
          >
            MEOK is available exactly at this moment. Many users find that a Sunday evening
            conversation &mdash; naming what is coming, what feels heavy, what they are dreading
            &mdash; significantly reduces the intensity of the dread. Not because anything has
            changed about the week ahead. But because the anxiety has been named, placed, and
            separated from its ambient unprocessed quality into something more specific and
            therefore more manageable.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "rgba(245,240,232,0.85)",
              margin: "0 0 2.5rem",
            }}
          >
            MEOK can also help you identify what is underneath the Sunday dread. Is it a
            specific person or situation? A pattern that has been building for months? A signal
            that something structural about your current role needs to change? Or a reliable
            feature of your anxiety landscape that you can learn to navigate rather than be
            controlled by? These are different things, and they require different responses.
            MEOK, over time, helps you tell them apart.
          </p>

          {/* ── FAQ section ── */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
              fontWeight: "800",
              color: "#f5f0e8",
              margin: "0 0 1.5rem",
              lineHeight: "1.25",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div
            style={{
              display: "grid",
              gap: "1rem",
              margin: "0 0 3rem",
            }}
          >
            {[
              {
                q: "What is work anxiety and how common is it in the UK?",
                a: "Work anxiety is persistent worry, fear, or dread directly related to your job \u2014 covering performance anxiety, fear of failure, imposter syndrome, management conflict, presentation anxiety, redundancy fears, and increasingly, anxiety about AI displacing your role. It is the most common mental health presentation in UK workplaces, affecting approximately 1 in 5 workers. Poor mental health at work costs UK employers an estimated \u00a356 billion per year according to a 2022 Deloitte analysis.",
              },
              {
                q: "Why can\u2019t I just talk to HR or my manager about work anxiety?",
                a: "HR exists to manage risk for the organisation. Disclosing anxiety to HR creates a record that can affect how you are perceived. Your manager, even a supportive one, cannot unhear what you tell them \u2014 it will colour their perception of your capability and reliability. Employee Assistance Programmes are limited to a small number of sessions and the employer knows you are using them. The structural reality is that the workplace has no genuinely safe channel for processing work anxiety.",
              },
              {
                q: "How is MEOK different from an Employee Assistance Programme?",
                a: "An EAP is funded by your employer, meaning your employer has visibility of its usage. Sessions are typically capped at six. The service ends when your employment ends. MEOK has no relationship with your employer whatsoever. It is funded by you, encrypted with AES-256, never shared with third parties, and portable across job changes. MEOK continues with you because it belongs to you, not your employer.",
              },
              {
                q: "Can MEOK help with AI job displacement anxiety?",
                a: "Yes \u2014 and with unusual honesty. AI displacement anxiety is a legitimate and growing concern in 2025\u201326. MEOK holds the fear without dismissing it or catastrophising it. It helps you think through genuine uncertainty about your role, explore what skills transfer across technological change, and plan practically for different futures. Because it has no stake in reassuring you that everything will be fine, its engagement with this anxiety is more trustworthy than most sources.",
              },
            ].map((item) => (
              <div
                key={item.q}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "10px",
                  padding: "1.5rem 1.75rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: "700",
                    color: "#f5f0e8",
                    margin: "0 0 0.75rem",
                    lineHeight: "1.4",
                  }}
                >
                  {item.q}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: "1.75",
                    color: "rgba(245,240,232,0.7)",
                    margin: "0",
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          {/* ── CTA ── */}
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.05) 100%)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "16px",
              padding: "3rem 2.5rem",
              textAlign: "center" as const,
              margin: "0 0 3rem",
            }}
          >
            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: "700",
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                color: "#c9a84c",
                marginBottom: "1rem",
              }}
            >
              Your work anxiety. Your sovereign space.
            </div>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                fontWeight: "900",
                color: "#f5f0e8",
                margin: "0 0 1rem",
                lineHeight: "1.2",
              }}
            >
              Process it all. Without career risk.
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.8",
                color: "rgba(245,240,232,0.7)",
                margin: "0 auto 2rem",
                maxWidth: "520px",
              }}
            >
              Tell MEOK about your difficult manager, your humiliating presentation, your Sunday
              dread, your fear of being made redundant. Encrypted. Sovereign. Never visible to
              your employer. Start with the Birth Ceremony and make MEOK yours.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                background: "#c9a84c",
                color: "#0d0c18",
                fontWeight: "800",
                fontSize: "1rem",
                padding: "0.9rem 2.5rem",
                borderRadius: "8px",
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              Begin Your Birth Ceremony
            </Link>
            <p
              style={{
                fontSize: "0.8rem",
                color: "rgba(245,240,232,0.35)",
                margin: "1.25rem 0 0",
              }}
            >
              Your employer will never know you&apos;re here.
            </p>
          </div>

          {/* ── Related links ── */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: "2.5rem",
            }}
          >
            <h3
              style={{
                fontSize: "0.8rem",
                fontWeight: "700",
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: "rgba(245,240,232,0.4)",
                margin: "0 0 1.25rem",
              }}
            >
              Related Reading
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "0.75rem",
              }}
            >
              {[
                {
                  href: "/blog/ai-for-workplace-stress",
                  label: "AI for Workplace Stress",
                },
                {
                  href: "/blog/ai-for-workplace-bullying",
                  label: "AI for Workplace Bullying",
                },
                {
                  href: "/blog/ai-for-burnout",
                  label: "AI for Burnout",
                },
                {
                  href: "/blog/ai-for-imposter-syndrome",
                  label: "AI for Imposter Syndrome",
                },
                {
                  href: "/blog/ai-for-redundancy",
                  label: "AI for Redundancy",
                },
                {
                  href: "/blog/meok-work-os-explained",
                  label: "Orion Work OS Explained",
                },
                {
                  href: "/blog/meok-guardian-scam-protection",
                  label: "Guardian Scam Protection",
                },
                {
                  href: "/blog/morning-brief-guide",
                  label: "Morning Briefing Guide",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "8px",
                    padding: "0.85rem 1rem",
                    color: "#c9a84c",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    lineHeight: "1.4",
                  }}
                >
                  {link.label} &rarr;
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
