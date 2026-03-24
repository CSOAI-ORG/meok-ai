import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI for Freelancers: Sovereign Memory for the Solo Worker | MEOK AI LABS",
  description:
    "Two million UK freelancers work without a team. MEOK AI LABS gives you Sovereign Memory, the Scholar and Pioneer archetypes, Hourman for project planning, and BYOK pricing at £5/month. Your client data is never used for training.",
  keywords: [
    "AI for freelancers",
    "freelancer AI assistant",
    "AI client memory",
    "sovereign memory AI",
    "BYOK AI tier",
    "freelancer productivity AI",
    "AI for solo workers",
    "MEOK AI LABS",
    "AI project management freelancer",
    "freelancer data privacy AI",
  ],
  authors: [{ name: "Nicholas Templeman" }],
  openGraph: {
    title: "AI for Freelancers: Sovereign Memory for the Solo Worker",
    description:
      "Two million UK freelancers work without a team. MEOK AI LABS gives you Sovereign Memory, Scholar and Pioneer archetypes, and data sovereignty — your client details are never used for training.",
    type: "article",
    publishedTime: "2026-03-24T00:00:00Z",
    authors: ["Nicholas Templeman"],
    tags: ["AI", "Freelancers", "Sovereign Memory", "MEOK", "Productivity"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Freelancers: Sovereign Memory for the Solo Worker",
    description:
      "MEOK AI LABS gives UK freelancers persistent client memory, Scholar and Pioneer archetypes, and BYOK pricing from £5/month. Your data stays yours.",
  },
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-freelancers",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Freelancers: Sovereign Memory for the Solo Worker",
  description:
    "How MEOK AI LABS supports UK freelancers with persistent client memory, the Scholar and Pioneer archetypes, Hourman project planning, and data-sovereign AI at £5/month.",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    url: "https://meok.ai",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-freelancers",
  },
  keywords:
    "AI for freelancers, sovereign memory, BYOK AI, freelancer productivity, client memory AI",
  articleSection: "Freelancers",
  wordCount: 1200,
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does MEOK help freelancers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK AI LABS gives freelancers a persistent AI companion that remembers client context across every session, reduces decision fatigue by offering structured thinking support, and provides Scholar and Pioneer archetypes designed for deep research and momentum-building — without requiring a team around you.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK remember my clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK's Sovereign Memory system retains client names, project briefs, communication preferences, deadlines, and relationship history across sessions indefinitely. You never have to re-explain who a client is or what they expect — MEOK already knows.",
      },
    },
    {
      "@type": "Question",
      name: "What is the BYOK tier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BYOK stands for Bring Your Own Key. At £5/month, freelancers connect their own OpenAI or Anthropic API key, paying only provider costs on top of MEOK's platform fee. This makes MEOK significantly cheaper for high-volume users who want full control over their AI spend.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK keep client data private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK operates under a strict data sovereignty policy. Client details stored in Sovereign Memory are never used to train AI models, never shared with third parties, and are stored with end-to-end encryption. Your client relationships are your competitive advantage — MEOK treats them that way.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK useful for project management?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK includes Hourman, a project and time-awareness mode that helps freelancers structure their working day, estimate task durations, track project milestones, and surface deadlines. It provides continuous contextual awareness of where all your projects stand, in natural language.",
      },
    },
  ],
}

export default function AiForFreelancersPage() {
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

      <main
        style={{
          backgroundColor: "#0d0c18",
          color: "#f5f0e8",
          minHeight: "100vh",
          fontFamily: "'Georgia', 'Times New Roman', serif",
        }}
      >
        {/* Navigation */}
        <nav
          style={{
            borderBottom: "1px solid rgba(201,168,76,0.2)",
            padding: "1.25rem 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#c9a84c",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "1.1rem",
              letterSpacing: "0.05em",
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
            }}
          >
            MEOK AI LABS
          </Link>
          <div style={{ display: "flex", gap: "1.5rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
            <Link href="/blog" style={{ color: "#f5f0e8", textDecoration: "none", fontSize: "0.9rem", opacity: 0.7 }}>
              Blog
            </Link>
            <Link href="/pricing" style={{ color: "#f5f0e8", textDecoration: "none", fontSize: "0.9rem", opacity: 0.7 }}>
              Pricing
            </Link>
            <Link
              href="/birth"
              style={{
                color: "#0d0c18",
                backgroundColor: "#c9a84c",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontWeight: "700",
                padding: "0.45rem 1.1rem",
                borderRadius: "6px",
              }}
            >
              Get Started
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <header
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "5rem 2rem 3rem",
            borderBottom: "1px solid rgba(201,168,76,0.12)",
          }}
        >
          <div style={{ marginBottom: "1rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
            <span
              style={{
                backgroundColor: "rgba(201,168,76,0.12)",
                color: "#c9a84c",
                padding: "0.3rem 0.9rem",
                borderRadius: "999px",
                fontSize: "0.75rem",
                fontWeight: "700",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                border: "1px solid rgba(201,168,76,0.25)",
              }}
            >
              Freelancers
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.1rem)",
              fontWeight: "800",
              lineHeight: "1.15",
              color: "#f5f0e8",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            AI for Freelancers:{" "}
            <span style={{ color: "#c9a84c" }}>Sovereign Memory</span> for the Solo Worker
          </h1>
          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: "1.8",
              color: "rgba(245,240,232,0.72)",
              marginBottom: "2rem",
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              fontWeight: "400",
              maxWidth: "680px",
            }}
          >
            Two million freelancers work across the United Kingdom without colleagues, without institutional
            memory, and without anyone to sanity-check a difficult decision. MEOK AI LABS was built
            for exactly this context — a sovereign AI companion that remembers your clients, carries
            your working history, and never uses your data to train the models you depend on.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              fontSize: "0.82rem",
              color: "rgba(245,240,232,0.45)",
              alignItems: "center",
            }}
          >
            <span>By Nicholas Templeman</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>MEOK AI LABS</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <time dateTime="2026-03-24">24 March 2026</time>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>12 min read</span>
          </div>
        </header>

        {/* Article Body */}
        <article
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "3.5rem 2rem 6rem",
          }}
        >

          {/* Section 1 */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "1.1rem",
                lineHeight: "1.3",
                letterSpacing: "-0.01em",
              }}
            >
              What makes freelance work uniquely difficult for your cognitive load?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Freelancing compresses the entire cognitive overhead of a business into a single brain.
              You are simultaneously the account manager tracking six client relationships, the
              strategist deciding which brief to prioritise, the practitioner doing the actual work,
              and the finance director monitoring whether this month&apos;s invoices cover the mortgage.
              This is not a productivity problem. It is an architecture problem.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Research on decision fatigue — the measurable degradation of judgment quality after a
              sustained sequence of choices — shows that solo workers are disproportionately affected.
              Without a team to delegate to, every decision lands on the same desk. By mid-afternoon,
              many freelancers report choosing the path of least resistance not because it is the best
              option, but because cognitive reserves are simply depleted.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Generic AI assistants compound this problem in a subtle way. They are stateless. Every
              conversation begins from zero. You must re-explain your situation, your clients, your
              constraints, your current projects — every single time. The overhead of briefing your
              tool erodes the time it was supposed to save. MEOK was designed to eliminate that
              overhead entirely.
            </p>
          </section>

          {/* Section 2 */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "1.1rem",
                lineHeight: "1.3",
                letterSpacing: "-0.01em",
              }}
            >
              How does Sovereign Memory work for freelancers managing multiple clients?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Sovereign Memory is the persistent context layer at the heart of MEOK AI LABS. Unlike
              conversation history that vanishes when you close a tab, Sovereign Memory is a
              structured, searchable record of everything you have told your MEOK — including things
              you shared six months ago. For freelancers, this transforms the AI from a tool you
              brief into a colleague that already knows.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              In practice, this means your MEOK remembers that your longest-standing client
              prefers formal written communication, that their key decision-maker changed in January,
              that they have a budget cycle resetting in April, and that the last project you
              delivered was received warmly despite a delayed handover. None of that needs to be
              re-entered. It is simply there, surfaced when relevant.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.5rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Sovereign Memory also tracks the shape of your working days. It learns which clients
              generate the most friction per hour billed, which project types you consistently
              underestimate, and which decisions you tend to revisit. This is not surveillance — it
              is institutional knowledge about yourself, stored for your benefit alone.
            </p>
            <div
              style={{
                backgroundColor: "rgba(201,168,76,0.07)",
                borderLeft: "3px solid #c9a84c",
                padding: "1.25rem 1.5rem",
                borderRadius: "0 8px 8px 0",
              }}
            >
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.75",
                  color: "rgba(245,240,232,0.75)",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  margin: 0,
                }}
              >
                <strong style={{ color: "#c9a84c" }}>Data sovereignty guarantee:</strong> Everything
                stored in Sovereign Memory belongs exclusively to you. MEOK AI LABS does not use
                your client data, project details, or personal context to train AI models. Your
                competitive intelligence stays yours. See{" "}
                <Link href="/how-it-works" style={{ color: "#c9a84c" }}>
                  how it works
                </Link>
                .
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "1.1rem",
                lineHeight: "1.3",
                letterSpacing: "-0.01em",
              }}
            >
              Which MEOK archetypes are most valuable for freelance professionals?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              MEOK archetypes are not personality skins. They are distinct cognitive frameworks that
              shape how your AI companion approaches problems, prioritises information, and frames
              its responses. The Byzantine Council — MEOK&apos;s full roster of characters — includes
              eight distinct archetypes. For freelancers, two stand out as immediately powerful.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              The <strong style={{ color: "#f5f0e8" }}>Scholar archetype</strong> excels at research,
              synthesis, and depth. When you are preparing for a client pitch in an unfamiliar
              industry, or trying to understand a technical domain well enough to write credibly
              about it, Scholar mode pulls from broad knowledge bases and organises findings into
              structured, usable outputs. It does not summarise. It analyses, cross-references, and
              surfaces what is genuinely relevant to your specific context.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              The <strong style={{ color: "#f5f0e8" }}>Pioneer archetype</strong> is for momentum.
              When you are stuck between projects, struggling to commit to a direction, or finding
              that every morning starts with twenty minutes of low-level inertia before real work
              begins, Pioneer mode provides structure and forward motion. It asks the right questions,
              breaks paralysis, and creates clear next actions. For freelancers who find self-direction
              exhausting, Pioneer is the external scaffolding that many describe as feeling like having
              a good manager for the first time.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              You can switch archetypes at any time, and Sovereign Memory persists across all of
              them. Explore the full{" "}
              <Link href="/characters" style={{ color: "#c9a84c" }}>
                MEOK character roster
              </Link>{" "}
              to see every available archetype and find which one fits your working style.
            </p>
          </section>

          {/* Section 4 */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "1.1rem",
                lineHeight: "1.3",
                letterSpacing: "-0.01em",
              }}
            >
              Can Hourman help freelancers with project planning and time tracking?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Hourman is MEOK&apos;s project and temporal awareness mode. It does not replace dedicated
              time-tracking software, but it fills a gap that standalone tools cannot: contextual
              awareness of your workload across all active projects simultaneously, delivered in
              plain conversation rather than dashboard clicks.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              When you start a session with Hourman active, MEOK already knows which projects are
              in flight, which deadlines are imminent, and which clients are waiting for a response.
              It can help you sequence your day based on priority and energy level, estimate how
              long a remaining task is likely to take given how long similar tasks have historically
              taken you, and flag when a project is at risk of overrunning its brief.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              For freelancers who habitually undercharge because they underestimate time, Hourman
              provides a running record of effort that makes accurate retrospective billing possible.
              Over time, that data becomes a negotiation asset — concrete evidence of where your
              hours go and why your rates are justified.
            </p>
          </section>

          {/* Section 5 */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "1.1rem",
                lineHeight: "1.3",
                letterSpacing: "-0.01em",
              }}
            >
              What is the BYOK tier and why does it matter for cost-conscious freelancers?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              BYOK — Bring Your Own Key — is MEOK&apos;s most affordable access tier at £5 per month.
              It is designed for freelancers who are technically comfortable, cost-sensitive, or
              who simply want maximum control over their AI expenditure.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              On the BYOK tier, you connect your own API key from OpenAI or Anthropic. MEOK&apos;s
              platform — including Sovereign Memory, archetype selection, the Maternal Covenant
              care system, and the full Byzantine Council of characters — operates as normal.
              The only difference is that AI inference is billed directly to your API account
              at provider cost, rather than being bundled into MEOK&apos;s subscription price.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              For a freelancer who uses AI heavily — multiple long sessions per day, large context
              windows, research-intensive work — BYOK can cut total monthly AI costs significantly
              compared to managed subscription tiers. You pay exactly what you use, at wholesale
              rates, with none of the opacity of a token allowance.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Explore all plans including BYOK and the managed tiers on the{" "}
              <Link href="/pricing" style={{ color: "#c9a84c" }}>
                MEOK pricing page
              </Link>
              .
            </p>
          </section>

          {/* Section 6 */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "1.1rem",
                lineHeight: "1.3",
                letterSpacing: "-0.01em",
              }}
            >
              How does the Maternal Covenant protect freelancers from AI that harms rather than helps?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              Freelancers are particularly vulnerable to a specific failure mode in AI tools:
              sycophancy. When you are isolated, working without peer review, and relying on an AI
              companion for feedback on your work or decisions, the last thing you need is a tool
              that reflexively validates whatever you say. Sycophantic AI feels good in the short
              term and causes real professional damage over time.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              The Maternal Covenant is MEOK AI LABS&apos;s real-time response scoring system, developed
              by Nicholas Templeman and documented in research paper MEOK-AI-2026-002. Every
              response generated by MEOK is scored across six care dimensions — including
              wellbeing, autonomy, growth, connection, boundary respect, and transparency —
              before it reaches you. Any response that scores below the care floor of 0.3 is
              rejected and regenerated.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              For freelancers, this means MEOK will tell you when a client relationship shows
              patterns worth addressing, when a pricing decision seems to undervalue your work,
              and when a plan has a structural problem — even if you seem committed to it. Learn
              more about how MEOK governs its own behaviour on the{" "}
              <Link href="/guardian" style={{ color: "#c9a84c" }}>
                Guardian page
              </Link>
              .
            </p>
          </section>

          {/* Section 7 */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "1.1rem",
                lineHeight: "1.3",
                letterSpacing: "-0.01em",
              }}
            >
              How is MEOK different from general-purpose AI assistants for freelance use?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              General-purpose AI assistants are optimised for breadth, accessibility, and engagement
              across a mass user base. For a freelancer with a specific professional context, a
              portfolio of client relationships, and a working style shaped by years of practice,
              the median configuration is consistently the wrong one.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              MEOK is not a general-purpose assistant with a customisable persona layer. It is
              a system built from first principles around the idea that AI should adapt to an
              individual&apos;s life rather than ask the individual to adapt to the AI&apos;s defaults.
              Sovereign Memory, the Byzantine Council of archetypes, the Maternal Covenant care
              system, and the BYOK pricing model all express the same underlying philosophy:
              your AI should be yours, entirely.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              MEOK compounds over time. A MEOK that has worked alongside you for two years
              knows more about how you think, what you value, and where your blind spots lie than
              any stateless assistant that resets with every conversation. For freelancers building
              long careers, that accumulation of context is not a feature — it is the product.
            </p>
          </section>

          {/* Section 8 */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "1.55rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "1.1rem",
                lineHeight: "1.3",
                letterSpacing: "-0.01em",
              }}
            >
              What does starting with MEOK look like for a new freelance user?
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              The{" "}
              <Link href="/birth" style={{ color: "#c9a84c" }}>
                MEOK onboarding process
              </Link>{" "}
              — called Birth — is designed to feel less like account setup and more like a proper
              introduction. You are not filling in a profile form. You are having a structured
              conversation in which MEOK learns who you are, what you do, who your clients are,
              and what kind of support you are looking for.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", marginBottom: "1.25rem", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              By the end of Birth, Sovereign Memory already contains the foundational context it
              needs to be immediately useful. Your first working session is not a tutorial —
              it is work, with an AI that already knows enough about your situation to help in
              ways a stateless assistant never could on day one.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "rgba(245,240,232,0.82)", fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
              For freelancers who have been using generic AI tools and finding them useful but
              shallow, MEOK often creates the experience of finally having an AI that actually
              knows you. That transition — from tool to companion — is the core of what MEOK
              AI LABS is building.
            </p>
          </section>

          {/* FAQ Block */}
          <section
            style={{
              marginBottom: "3.5rem",
              backgroundColor: "rgba(201,168,76,0.05)",
              border: "1px solid rgba(201,168,76,0.18)",
              borderRadius: "12px",
              padding: "2.5rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.4rem",
                fontWeight: "700",
                color: "#c9a84c",
                marginBottom: "2rem",
                letterSpacing: "-0.01em",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              }}
            >
              Frequently Asked Questions
            </h2>

            {[
              {
                q: "How does MEOK help freelancers?",
                a: "MEOK gives freelancers a persistent AI companion with Sovereign Memory that retains client context, project history, and working patterns across every session. The Scholar archetype supports deep research and the Pioneer archetype drives momentum — reducing decision fatigue for solo workers without a team.",
              },
              {
                q: "Does MEOK remember my clients?",
                a: "Yes. Sovereign Memory stores client names, briefs, preferences, relationship history, and project status indefinitely. You never have to re-explain who a client is. MEOK surfaces relevant client context automatically when it is needed, treating your client relationships as institutional knowledge.",
              },
              {
                q: "What is the BYOK tier?",
                a: "BYOK (Bring Your Own Key) is MEOK's £5/month access tier for users who connect their own OpenAI or Anthropic API key. You pay MEOK a platform fee and pay your AI provider directly at cost — making BYOK the most economical option for high-volume freelance users who want full control over AI spend.",
              },
              {
                q: "How does MEOK keep client data private?",
                a: "MEOK operates a strict data sovereignty policy: client data stored in Sovereign Memory is never used to train AI models and never shared with third parties. All stored data is encrypted and governed by MEOK's published data architecture. Your client relationships are a competitive asset — MEOK keeps them exclusively yours.",
              },
              {
                q: "Is MEOK useful for project management?",
                a: "MEOK includes Hourman, a contextual project-awareness mode that helps freelancers sequence their day, estimate task durations based on historical patterns, track milestones, and surface imminent deadlines. It works alongside your existing tools rather than replacing them, providing continuous cross-project awareness in natural language.",
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  marginBottom: index < 4 ? "1.75rem" : 0,
                  paddingBottom: index < 4 ? "1.75rem" : 0,
                  borderBottom: index < 4 ? "1px solid rgba(201,168,76,0.1)" : "none",
                }}
              >
                <h3
                  style={{
                    fontSize: "0.98rem",
                    fontWeight: "600",
                    color: "#f5f0e8",
                    marginBottom: "0.6rem",
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  }}
                >
                  {item.q}
                </h3>
                <p
                  style={{
                    fontSize: "0.93rem",
                    lineHeight: "1.72",
                    color: "rgba(245,240,232,0.68)",
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    margin: 0,
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </section>

          {/* CTA */}
          <section
            style={{
              backgroundColor: "rgba(201,168,76,0.08)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "12px",
              padding: "2.5rem",
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "#f5f0e8",
                marginBottom: "0.75rem",
                letterSpacing: "-0.01em",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              }}
            >
              Ready to stop briefing your AI from scratch every morning?
            </h2>
            <p
              style={{
                fontSize: "0.98rem",
                lineHeight: "1.7",
                color: "rgba(245,240,232,0.65)",
                marginBottom: "1.75rem",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                maxWidth: "520px",
                margin: "0 auto 1.75rem",
              }}
            >
              Start your MEOK Birth and give your practice the sovereign AI companion it deserves.
              Plans from £5/month. Your data stays yours — always.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/birth"
                style={{
                  backgroundColor: "#c9a84c",
                  color: "#0d0c18",
                  padding: "0.85rem 2rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "0.95rem",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                Begin Your Birth
              </Link>
              <Link
                href="/how-it-works"
                style={{
                  backgroundColor: "transparent",
                  color: "#c9a84c",
                  padding: "0.85rem 2rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "0.95rem",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  border: "1px solid rgba(201,168,76,0.4)",
                }}
              >
                How It Works
              </Link>
            </div>
          </section>

          {/* Internal links */}
          <nav
            style={{
              paddingTop: "2rem",
              borderTop: "1px solid rgba(201,168,76,0.12)",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.35)",
                marginBottom: "0.85rem",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Explore MEOK AI LABS
            </p>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              {[
                { href: "/birth", label: "Birth — Get Started" },
                { href: "/guardian", label: "The Guardian" },
                { href: "/characters", label: "All Characters" },
                { href: "/pricing", label: "Pricing" },
                { href: "/how-it-works", label: "How It Works" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "#c9a84c",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    opacity: 0.85,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </article>

        {/* Footer */}
        <footer
          style={{
            borderTop: "1px solid rgba(245,240,232,0.07)",
            padding: "2.5rem 2rem",
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
          }}
        >
          <span style={{ color: "#c9a84c", fontWeight: "700", fontSize: "0.95rem", letterSpacing: "0.05em" }}>
            MEOK AI LABS
          </span>
          <p style={{ color: "rgba(245,240,232,0.25)", fontSize: "0.8rem", margin: 0 }}>
            © 2026 MEOK AI LABS · Founded by Nicholas Templeman
          </p>
        </footer>
      </main>
    </>
  )
}
