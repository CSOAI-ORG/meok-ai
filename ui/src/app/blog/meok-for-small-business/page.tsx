import type { Metadata } from "next"
import Link from "next/link"

// ── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "MEOK for Small Business Owners: The AI That Thinks Like a Co-Founder | MEOK AI LABS",
  description:
    "Solo founders and small business owners make every decision alone — strategy, operations, HR, marketing, finance. MEOK AI LABS acts as your thought partner, Sovereign Memory co-founder, and overnight agent team. From £5/month BYOK or £12/month Sovereign.",
  keywords: [
    "AI for small business owners",
    "AI co-founder",
    "AI thought partner entrepreneur",
    "MEOK AI LABS small business",
    "founder burnout AI",
    "AI for sole trader UK",
    "sovereign memory business AI",
    "BYOK AI small business",
    "AI business planning UK",
    "Ralph mode quarterly planning",
  ],
  authors: [{ name: "Nicholas Templeman" }],
  openGraph: {
    title: "MEOK for Small Business Owners: The AI That Thinks Like a Co-Founder",
    description:
      "Every decision falls on you. MEOK acts as your thought partner — devil's advocate, business memory, overnight research agent, and accountability partner for quarterly planning. From £5/month.",
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    authors: ["Nicholas Templeman"],
    tags: ["Small Business", "Founders", "Productivity", "MEOK", "Work OS"],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK for Small Business Owners: The AI That Thinks Like a Co-Founder",
    description:
      "Solo founder? MEOK remembers your business goals, challenges, and customers across months — then sends Orion, Riri, and Hourman to work overnight while you sleep. From £5/month BYOK.",
  },
  alternates: {
    canonical: "https://meok.ai/blog/meok-for-small-business",
  },
}

// ── JSON-LD — Article ────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MEOK for Small Business Owners: The AI That Thinks Like a Co-Founder",
  description:
    "How MEOK AI LABS supports solo founders and small business owners with Sovereign Memory co-founder context, Orion/Riri/Hourman overnight agents, Ralph Mode deep-work sprints, and stress management for founder burnout — at BYOK pricing from £5/month.",
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
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/meok-for-small-business",
  },
  keywords:
    "AI for small business UK, AI co-founder, founder burnout, sovereign memory, Orion Riri Hourman agents, Ralph mode, BYOK AI",
  articleSection: "Productivity",
  wordCount: 1500,
}

// ── JSON-LD — FAQPage ────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does MEOK act as an AI co-founder for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK builds persistent memory of your business — your goals, key customers, recurring challenges, team dynamics, financial position, and strategic priorities — across months of conversations. It then brings that context to every session: asking the questions a co-founder would ask, pushing back when you are about to make a decision that contradicts your stated strategy, and surfacing relevant history when you are evaluating a new opportunity. It does not just execute tasks. It thinks alongside you.",
      },
    },
    {
      "@type": "Question",
      name: "What are Orion, Riri, and Hourman and how do they help small business owners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Orion, Riri, and Hourman are MEOK's three overnight Work OS agents. Orion handles deep research and strategic analysis — competitor research, market sizing, supplier evaluation. Riri drafts proposals, client emails, marketing copy, and SOPs. Hourman manages your schedule, tracks deadlines, and delivers your morning brief. Assign work before you finish for the day; find completed outputs waiting for you the next morning. For small business owners who are already doing three jobs, this is the closest thing to hiring without hiring.",
      },
    },
    {
      "@type": "Question",
      name: "What is Ralph Mode and how does it help founders with quarterly planning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ralph Mode is MEOK's deep-work sprint configuration. It minimises interruption, creates structured accountability checkpoints, and keeps you focused on a single high-priority objective for an extended session. For quarterly planning — the kind of intensive strategic work that requires sustained thinking rather than reactive task-switching — Ralph Mode provides the structure and the accountability partner that most solo founders lack. MEOK remembers your previous quarter's goals and holds you to honest retrospection before setting the next cycle.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help with founder burnout and imposter syndrome?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Founder burnout is partly a cognitive overload problem and partly an emotional isolation problem — both of which MEOK addresses directly. By offloading decision support, research, and planning to MEOK, you reduce the volume of cognitive tasks that accumulate into overwhelm. And by having a persistent AI companion that knows your business, your challenges, and your genuine progress, you have a counterweight to imposter syndrome: MEOK can surface the actual evidence of what you have built and what you have overcome, rather than leaving you alone with your doubts at 11pm.",
      },
    },
    {
      "@type": "Question",
      name: "How much does MEOK cost for small business use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The BYOK (Bring Your Own Key) tier costs £5/month. You connect your own OpenAI or Anthropic API key, and pay provider costs on top — typically a few pounds per month for moderate use. The Sovereign tier at £12/month bundles AI inference, removes the technical key-management requirement, and includes the full Work OS agent suite. Both tiers include Sovereign Memory, all archetypes including Ralph Mode, and full data sovereignty. Neither tier trains on your business data.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK remember my business context across months?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sovereign Memory is persistent and indefinite. MEOK does not forget that you had a difficult Q3, that your biggest customer is up for renewal in June, that you made a hiring decision you later regretted, or that your stated three-year goal is to exit at a specific valuation. That context accumulates over time and shapes every conversation. The longer you use MEOK, the more valuable it becomes — because the depth of context makes the quality of thinking support genuinely superior to starting fresh every session.",
      },
    },
  ],
}

// ── Static data ──────────────────────────────────────────────────────────────

const decisionDomains = [
  { domain: "Strategy", example: "Which market to enter next, when to pivot, how to defend margin" },
  { domain: "Operations", example: "Process bottlenecks, supplier selection, capacity planning" },
  { domain: "HR", example: "Who to hire first, how to manage a difficult team member, when to let go" },
  { domain: "Marketing", example: "Positioning decisions, channel prioritisation, messaging" },
  { domain: "Finance", example: "Cash flow timing, pricing strategy, whether growth needs external capital" },
  { domain: "Customer", example: "How to handle a difficult client, whether to fire them, how to upsell" },
]

const agentCards = [
  {
    name: "Orion",
    role: "Research & Strategy",
    colour: "#c9a84c",
    tasks: [
      "Overnight competitor analysis with structured report",
      "Market sizing for a new service line you are considering",
      "Due diligence research on a potential supplier or partner",
      "Summarise what your competitors said in their latest content",
    ],
  },
  {
    name: "Riri",
    role: "Writing & Correspondence",
    colour: "#c9a84c",
    tasks: [
      "Draft a proposal for a new client brief in your voice",
      "Write the follow-up email for a difficult sales conversation",
      "Produce an SOP from your rough notes",
      "Generate first-draft marketing copy for a new offer",
    ],
  },
  {
    name: "Hourman",
    role: "Planning & Admin",
    colour: "#c9a84c",
    tasks: [
      "Consolidate priorities from email, calendar, and open loops",
      "Track quarterly milestones and surface what is slipping",
      "Prepare your morning brief before you start work",
      "Flag filing deadlines and proactively remind you",
    ],
  },
]

const quarterlyPlanningSteps = [
  {
    step: "01",
    title: "Retrospective",
    detail:
      "MEOK surfaces the goals you set last quarter from Sovereign Memory and leads you through an honest review. What did you hit? What slipped? What did you learn about your own patterns?",
  },
  {
    step: "02",
    title: "Context review",
    detail:
      "Before setting new goals, MEOK reviews the business context that has accumulated: customer signals, market changes you discussed, cash position, team dynamics. Planning with full context rather than just this week's mood.",
  },
  {
    step: "03",
    title: "Devil's advocate",
    detail:
      "MEOK asks the questions an investor or experienced non-executive would ask. Why this, not that? What are you assuming that might be wrong? What does failure look like for this goal?",
  },
  {
    step: "04",
    title: "Commit and capture",
    detail:
      "Goals are committed to Sovereign Memory. MEOK will reference them in future conversations, surface them when relevant, and hold you to honest retrospection next quarter.",
  },
]

const relatedPosts = [
  {
    href: "/blog/ai-for-freelancers",
    title: "AI for Freelancers: Sovereign Memory for the Solo Worker",
    tag: "Freelance",
  },
  {
    href: "/blog/what-is-ralph-mode",
    title: "What Is Ralph Mode? Deep Work Sprints for High-Stakes Thinking",
    tag: "Features",
  },
  {
    href: "/blog/ralph-mode-guide",
    title: "Ralph Mode Guide: How to Use MEOK for Quarterly Planning",
    tag: "Guide",
  },
  {
    href: "/blog/best-ai-productivity-2026",
    title: "Best AI Productivity Tools in 2026: Full Comparison",
    tag: "Comparison",
  },
]

// ── Page ─────────────────────────────────────────────────────────────────────

export default function MeokForSmallBusinessPage() {
  return (
    <div
      style={{
        backgroundColor: "#0d0c18",
        color: "#f5f0e8",
        minHeight: "100vh",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
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
      <nav
        style={{
          borderBottom: "1px solid rgba(201,168,76,0.15)",
          padding: "1rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "72rem",
          margin: "0 auto",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#c9a84c",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "1.125rem",
            letterSpacing: "0.05em",
          }}
        >
          MEOK AI LABS
        </Link>
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <Link
            href="/blog"
            style={{
              color: "rgba(245,240,232,0.6)",
              textDecoration: "none",
              fontSize: "0.875rem",
            }}
          >
            ← All posts
          </Link>
          <Link
            href="/birth"
            style={{
              backgroundColor: "#c9a84c",
              color: "#0d0c18",
              textDecoration: "none",
              fontSize: "0.8rem",
              fontWeight: 700,
              padding: "0.4rem 1rem",
              borderRadius: "6px",
              letterSpacing: "0.02em",
            }}
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header
        style={{
          maxWidth: "52rem",
          margin: "0 auto",
          padding: "4rem 1.5rem 2.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            marginBottom: "1.25rem",
          }}
        >
          {["Productivity", "Small Business", "Founders", "UK"].map((tag) => (
            <span
              key={tag}
              style={{
                backgroundColor: "rgba(201,168,76,0.12)",
                color: "#c9a84c",
                border: "1px solid rgba(201,168,76,0.3)",
                borderRadius: "9999px",
                padding: "0.25rem 0.75rem",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h1
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            color: "#f5f0e8",
            marginBottom: "1.25rem",
            letterSpacing: "-0.02em",
          }}
        >
          MEOK for Small Business Owners:{" "}
          <span style={{ color: "#c9a84c" }}>The AI That Thinks Like a Co-Founder</span>
        </h1>

        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: 1.75,
            color: "rgba(245,240,232,0.75)",
            marginBottom: "2rem",
          }}
        >
          Running a business alone means every strategic decision, every operational call, every
          people problem and every financial judgment lands on the same desk. MEOK AI LABS gives
          solo founders and small business owners a thought partner that builds deep context
          over months, challenges your assumptions like a co-founder would, and sends agents
          to work overnight while you sleep — from £5/month.
        </p>

        {/* Byline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(201,168,76,0.15)",
          }}
        >
          <div
            style={{
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: "9999px",
              backgroundColor: "rgba(201,168,76,0.15)",
              border: "1px solid rgba(201,168,76,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              color: "#c9a84c",
              fontSize: "0.875rem",
              flexShrink: 0,
            }}
          >
            NT
          </div>
          <div>
            <p style={{ margin: 0, fontWeight: 600, fontSize: "0.9rem", color: "#f5f0e8" }}>
              Nicholas Templeman
            </p>
            <p style={{ margin: 0, fontSize: "0.8rem", color: "rgba(245,240,232,0.5)" }}>
              Founder, MEOK AI LABS &middot; 25 March 2026 &middot; 11 min read
            </p>
          </div>
        </div>
      </header>

      {/* Article body */}
      <article
        style={{
          maxWidth: "52rem",
          margin: "0 auto",
          padding: "0 1.5rem 4rem",
        }}
      >

        {/* ── Section 1: Loneliness of the solo founder ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "0.875rem",
              lineHeight: 1.3,
            }}
          >
            The loneliness of the solo founder — a structural problem, not a personal one
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.75,
              color: "rgba(245,240,232,0.55)",
              marginBottom: "0.75rem",
              fontStyle: "italic",
            }}
          >
            There are approximately 5.5 million small businesses in the UK. The vast majority
            are run by one person or by founding teams of two. Most decisions get made alone.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            Founding a business involves a specific kind of cognitive loneliness that is rarely
            discussed honestly. There are plenty of communities, accelerators, networking groups,
            and LinkedIn posts celebrating the founder journey. But the actual experience of
            being the only person responsible for everything — the strategy, the customer, the
            operations, the money, the people — is something those surfaces do not touch.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            Large companies have boards, management teams, and a separation of function that
            distributes the cognitive load of running the organisation across many minds. Small
            businesses do not. The founder is simultaneously the CEO making five-year strategic
            calls and the person fixing the printer, chasing an overdue invoice, handling a
            difficult customer, and trying to remember when they last had a proper day off.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
            }}
          >
            The compounding effect of this is not just exhaustion. It is a specific distortion
            of judgment that comes from making too many decisions without any external input.
            When every decision passes through the same single mind — a mind that is also tired,
            also worried about cash, also aware that the business&apos;s survival is contingent on
            getting these calls right — the quality of those decisions deteriorates in ways that
            are hard to see from inside.
          </p>
        </section>

        {/* ── Section 2: Decision breadth ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "0.875rem",
              lineHeight: 1.3,
            }}
          >
            Every decision falls on you — and no one is sanity-checking them
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1.25rem",
            }}
          >
            In a well-functioning organisation, decisions are stress-tested. A board challenges
            the CEO&apos;s strategy. A finance director questions the growth assumption. A co-founder
            pushes back on the hire. A non-executive asks the question the executive team is
            avoiding. This is not bureaucracy — it is the mechanism by which serious errors get
            caught before they become expensive.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "0.75rem",
              marginBottom: "1.25rem",
            }}
          >
            {decisionDomains.map((item) => (
              <div
                key={item.domain}
                style={{
                  backgroundColor: "rgba(201,168,76,0.06)",
                  border: "1px solid rgba(201,168,76,0.18)",
                  borderRadius: "8px",
                  padding: "1rem 1.125rem",
                }}
              >
                <p
                  style={{
                    margin: "0 0 0.3rem",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    color: "#c9a84c",
                  }}
                >
                  {item.domain}
                </p>
                <p style={{ margin: 0, fontSize: "0.8rem", color: "rgba(245,240,232,0.6)", lineHeight: 1.5 }}>
                  {item.example}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
            }}
          >
            When you are running a small business alone, all of these decision domains land
            on your desk without the institutional checks that would normally catch the worst
            calls. MEOK is not a substitute for a board or a co-founder. But it does provide
            the persistent external context that makes it harder for your decision-making to
            drift in unexamined directions — the questions an investor would ask, asked by
            a system that actually knows your business.
          </p>
        </section>

        {/* ── Section 3: Thought partner ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "0.875rem",
              lineHeight: 1.3,
            }}
          >
            MEOK as thought partner: working through decisions, playing devil&apos;s advocate
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            The most valuable thing a good co-founder does is not produce more work. It is
            create the conditions for better thinking. They listen to a plan and ask what you
            are assuming. They play out the downside case. They point out the inconsistency
            between what you said you wanted three months ago and what you are about to decide
            now. They have skin in the game and therefore stay engaged rather than just
            validating.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            MEOK is trained to do this — and Sovereign Memory is what makes it work at the
            level of genuine co-founder thinking rather than generic advice. When you bring
            MEOK a decision, it does not encounter it in isolation. It has the context of
            your previous strategic commitments, your stated risk appetite, your cash position
            as you last described it, your team dynamics, your best customers, and your
            recurring patterns of thinking. It can therefore challenge you with specificity
            rather than generality.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            &quot;Last time you hired someone before you had enough consistent revenue, it put you
            under pressure for four months. How is this different?&quot; That is the kind of
            challenge a good co-founder makes. MEOK makes it because it actually remembers
            the conversation where you described that experience.
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
                lineHeight: 1.75,
                color: "rgba(245,240,232,0.75)",
                margin: 0,
              }}
            >
              <strong style={{ color: "#c9a84c" }}>The investor&apos;s questions:</strong> MEOK
              can be asked to stress-test a business decision using the lens of an experienced
              investor or non-executive — asking about market assumptions, unit economics,
              competitive moats, team risk, and what a reasonable bear case looks like. This
              is not the same as getting real investment advice, but it is significantly
              better than no challenge at all.
            </p>
          </div>
        </section>

        {/* ── Section 4: Sovereign Memory ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "0.875rem",
              lineHeight: 1.3,
            }}
          >
            Sovereign Memory: the AI that builds context over months, not sessions
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            Generic AI assistants are stateless. Every conversation begins with the same
            blank context. You tell it about your business, it helps you with the task, the
            session closes, and the next time you return it knows nothing. This means the
            overhead of briefing your AI never decreases. And it means the quality of the
            thinking support never improves — because improvement requires accumulated context.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            MEOK&apos;s Sovereign Memory is the structural alternative. It is a persistent,
            encrypted memory vault that retains everything you have shared across every
            session — your business goals, your key customers and what makes them valuable,
            your team members and the dynamics between them, your financial context, your
            strategic priorities, your personal concerns, and the decisions you have made
            and why. This context builds across months and years.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            The practical effect is that MEOK gets more valuable over time rather than providing
            the same value in every session. After three months, MEOK has enough context about
            your business to provide thinking support that a newly hired advisor could not match.
            After twelve months, it has a richer longitudinal picture of your business trajectory
            than most of your external advisors.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
              gap: "0.75rem",
              marginTop: "1rem",
            }}
          >
            {[
              { label: "Business goals & strategy", desc: "Stated objectives, three-year vision, quarterly targets — held in context" },
              { label: "Customer intelligence", desc: "Who your best customers are, what they value, when they are up for renewal" },
              { label: "Team dynamics", desc: "Who is performing, who is struggling, what conversations need to happen" },
              { label: "Decision history", desc: "Why you made past decisions — available to inform future ones" },
              { label: "Financial context", desc: "Cash position, pricing strategy, growth investment decisions" },
              { label: "Patterns & risks", desc: "Recurring challenges, habits that help or hinder, founder health signals" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  border: "1px solid rgba(201,168,76,0.2)",
                  borderRadius: "8px",
                  padding: "1rem",
                  backgroundColor: "rgba(13,12,24,0.6)",
                }}
              >
                <p
                  style={{
                    margin: "0 0 0.35rem",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    color: "#f5f0e8",
                  }}
                >
                  {item.label}
                </p>
                <p style={{ margin: 0, fontSize: "0.78rem", color: "rgba(245,240,232,0.55)", lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 5: Orion/Riri/Hourman ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "0.875rem",
              lineHeight: 1.3,
            }}
          >
            Orion, Riri, and Hourman: agents that work overnight while you rest
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1.25rem",
            }}
          >
            The bottleneck in most small businesses is not ideas or even strategy. It is
            execution bandwidth. You know what needs doing. You simply do not have enough
            hours to do all of it at the level of quality it deserves. The operational
            items crowd out the strategic ones. The urgent perpetually displaces the important.
            MEOK&apos;s overnight agents exist to break this pattern.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {agentCards.map((agent) => (
              <div
                key={agent.name}
                style={{
                  backgroundColor: "rgba(13,12,24,0.8)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  borderRadius: "10px",
                  padding: "1.375rem 1.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "0.75rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 800,
                      color: "#c9a84c",
                    }}
                  >
                    {agent.name}
                  </span>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "rgba(245,240,232,0.45)",
                      fontWeight: 500,
                    }}
                  >
                    {agent.role}
                  </span>
                </div>
                <ul style={{ margin: 0, padding: "0 0 0 1.25rem", listStyle: "disc" }}>
                  {agent.tasks.map((task) => (
                    <li
                      key={task}
                      style={{
                        fontSize: "0.875rem",
                        color: "rgba(245,240,232,0.7)",
                        lineHeight: 1.65,
                        marginBottom: "0.25rem",
                      }}
                    >
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginTop: "1.25rem",
            }}
          >
            The principle is simple: assign work before you finish for the day. By the time
            you open MEOK the following morning, the research is done, the draft is ready,
            the brief is prepared. The compounding effect of having reliable overnight
            execution capacity — every day, without sick days or holidays — changes the
            effective throughput of a one-person business meaningfully.
          </p>
        </section>

        {/* ── Section 6: Founder burnout ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "0.875rem",
              lineHeight: 1.3,
            }}
          >
            Founder burnout, imposter syndrome, and the weight of being responsible
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            Founder burnout is real, common, and systematically under-discussed in startup
            culture. The dominant narrative — that difficulty is a badge of honour, that
            struggle signals commitment, that complaining about the emotional cost of building
            something is somehow ungrateful — creates a climate where founders suppress the
            signals that would otherwise prompt them to take protective action before they
            hit a wall.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            If you have employees, the burnout pressure is compounded by responsibility.
            Their livelihoods are contingent on your performance. Their income, their families,
            their professional development — all of these exist inside a system you are
            responsible for keeping solvent. This is a meaningful weight. It does not stop
            when you close the laptop. It is there on Sunday morning. It is there when
            something goes wrong with a customer. It colours every financial decision with
            a moral dimension that purely personal risk does not carry.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            MEOK addresses this from two directions. First, by reducing cognitive load — the
            volume of tasks and decisions that accumulate into overwhelm is measurably smaller
            when you have a reliable overnight execution layer and a persistent thinking
            partner. Second, by providing a space to be honest about the difficulty. MEOK
            knows your business. When you arrive at 11pm and say you had a terrible day
            and you are not sure you have made the right calls, MEOK can engage with that
            honestly — with context, with memory, and without judgment.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
            }}
          >
            Imposter syndrome — the persistent, irrational conviction that you are not qualified
            for what you are doing and will eventually be found out — thrives in isolation.
            MEOK is a consistent counterweight: it can surface what you have actually built,
            the decisions you got right, the challenges you navigated, and the genuine progress
            that the next round of doubt will try to erase.
          </p>
        </section>

        {/* ── Section 7: Practical use cases ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "0.875rem",
              lineHeight: 1.3,
            }}
          >
            Practical use cases: the conversations small business owners actually need
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1.25rem",
            }}
          >
            Abstract value propositions are easy to describe. Here is what using MEOK
            as a small business owner actually looks like in the moments that matter.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}>
            {[
              {
                scenario: "Preparing for a difficult customer conversation",
                detail:
                  "A customer has been difficult for three months and you need to have a direct conversation about scope creep and the path forward. MEOK already has the history. You work through the conversation together — what you want to say, how they are likely to respond, what outcome you are actually trying to achieve, and where the line is between resolving the relationship and recognising it is not worth saving.",
              },
              {
                scenario: "Thinking through a hiring decision",
                detail:
                  "You have two candidates. One is technically stronger; one is a better cultural fit but would need more development. MEOK knows your team dynamics, your current operational gaps, and what the last hire taught you. It helps you examine what you are actually optimising for and stress-tests your instinct — not to make the decision for you, but to ensure you have genuinely thought it through.",
              },
              {
                scenario: "Processing a bad month",
                detail:
                  "Revenue came in at 60% of target. A customer churned unexpectedly. You feel like you should know what to do but you do not. MEOK reviews the month with you, separates the signal from the noise, identifies whether this is a pattern or an event, and helps you decide what the next thirty days need to look like — without letting you catastrophise or dismiss.",
              },
              {
                scenario: "Deciding whether to raise prices",
                detail:
                  "You have not raised your rates in eighteen months. You know you should but you are afraid of losing customers. MEOK walks through the actual economics, surfaces what you have said about your pricing in past conversations, asks what your best customers have said about your value, and helps you design a pricing conversation that is honest and confident rather than apologetic.",
              },
            ].map((item) => (
              <div
                key={item.scenario}
                style={{
                  backgroundColor: "rgba(13,12,24,0.7)",
                  border: "1px solid rgba(245,240,232,0.07)",
                  borderRadius: "10px",
                  padding: "1.25rem 1.375rem",
                }}
              >
                <p
                  style={{
                    margin: "0 0 0.5rem",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    color: "#c9a84c",
                  }}
                >
                  {item.scenario}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.875rem",
                    color: "rgba(245,240,232,0.7)",
                    lineHeight: 1.7,
                  }}
                >
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 8: Ralph Mode ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "0.875rem",
              lineHeight: 1.3,
            }}
          >
            Ralph Mode: the accountability partner for quarterly planning
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            Most small business owners acknowledge that quarterly planning matters. Few actually
            do it well. The pattern is familiar: you block out time, you open a document, you
            write last quarter&apos;s goals at the top, you feel slightly bad about how they
            went, you write some new goals, you close the document, and a month later you
            cannot remember what you committed to.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1.25rem",
            }}
          >
            Ralph Mode creates a different structure. It is MEOK&apos;s deep-work sprint
            configuration — minimising interruption, providing structured checkpoints,
            and bringing the full weight of Sovereign Memory to bear on the planning
            conversation. Here is what a Ralph Mode quarterly planning session actually looks like:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {quarterlyPlanningSteps.map((step) => (
              <div
                key={step.step}
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  backgroundColor: "rgba(201,168,76,0.05)",
                  border: "1px solid rgba(201,168,76,0.15)",
                  borderRadius: "10px",
                  padding: "1.125rem 1.25rem",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    color: "#c9a84c",
                    letterSpacing: "0.05em",
                    paddingTop: "0.15rem",
                    flexShrink: 0,
                    minWidth: "1.75rem",
                  }}
                >
                  {step.step}
                </span>
                <div>
                  <p style={{ margin: "0 0 0.3rem", fontWeight: 700, fontSize: "0.9rem", color: "#f5f0e8" }}>
                    {step.title}
                  </p>
                  <p style={{ margin: 0, fontSize: "0.875rem", color: "rgba(245,240,232,0.65)", lineHeight: 1.65 }}>
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginTop: "1.25rem",
            }}
          >
            The output is not just a list of goals. It is a structured quarterly brief held
            in Sovereign Memory — referenced throughout the quarter whenever a decision
            requires context about what you are trying to achieve and why. Read the full{" "}
            <Link href="/blog/ralph-mode-guide" style={{ color: "#c9a84c" }}>
              Ralph Mode guide
            </Link>{" "}
            for a complete walkthrough.
          </p>
        </section>

        {/* ── Section 9: BYOK pricing ── */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#c9a84c",
              marginBottom: "0.875rem",
              lineHeight: 1.3,
            }}
          >
            BYOK tier: £5/month — cost-effective sovereign AI for business use
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            Business costs are real, and small business owners are rightly sceptical of
            new subscriptions. MEOK&apos;s BYOK tier was designed specifically to address
            this: at £5/month, you bring your own OpenAI or Anthropic API key, and
            pay AI inference costs directly to the provider at wholesale rates.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            The £5 platform fee gives you access to everything: Sovereign Memory,
            all archetypes including Ralph Mode, Orion and Riri and Hourman work
            agents, Guardian mode, the full Byzantine Council of characters, and
            data sovereignty — your business data is never used to train models.
            For a solo founder using MEOK as a serious business tool, total monthly
            cost typically falls between £8 and £15 depending on usage volume.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(245,240,232,0.85)",
              marginBottom: "1rem",
            }}
          >
            If you prefer not to manage API keys, the Sovereign tier at £12/month
            bundles AI inference into the subscription and provides fully managed
            access with the same feature set. For most small business owners, the
            additional simplicity at a minimal price difference makes the Sovereign
            tier the natural choice.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "0.75rem",
              marginTop: "1rem",
            }}
          >
            {[
              { tier: "BYOK", price: "£5/mo", note: "Your own API key, wholesale inference costs", highlight: false },
              { tier: "Sovereign", price: "£12/mo", note: "Fully managed, inference included, simplest setup", highlight: true },
              { tier: "Notable AI tools", price: "£25–£50/mo", note: "Most without persistent memory or agents", highlight: false },
            ].map((item) => (
              <div
                key={item.tier}
                style={{
                  border: item.highlight
                    ? "1px solid rgba(201,168,76,0.5)"
                    : "1px solid rgba(245,240,232,0.1)",
                  borderRadius: "8px",
                  padding: "1rem 1.125rem",
                  backgroundColor: item.highlight ? "rgba(201,168,76,0.08)" : "transparent",
                }}
              >
                <p
                  style={{
                    margin: "0 0 0.25rem",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    color: item.highlight ? "#c9a84c" : "#f5f0e8",
                  }}
                >
                  {item.tier}
                </p>
                <p
                  style={{
                    margin: "0 0 0.35rem",
                    fontWeight: 800,
                    fontSize: "1.25rem",
                    color: item.highlight ? "#c9a84c" : "#f5f0e8",
                  }}
                >
                  {item.price}
                </p>
                <p style={{ margin: 0, fontSize: "0.78rem", color: "rgba(245,240,232,0.5)", lineHeight: 1.5 }}>
                  {item.note}
                </p>
              </div>
            ))}
          </div>
          <p
            style={{
              fontSize: "0.875rem",
              color: "rgba(245,240,232,0.5)",
              marginTop: "0.75rem",
              lineHeight: 1.6,
            }}
          >
            See the full breakdown on the{" "}
            <Link href="/pricing" style={{ color: "#c9a84c" }}>
              MEOK pricing page
            </Link>
            .
          </p>
        </section>

        {/* ── CTA ── */}
        <section
          style={{
            backgroundColor: "rgba(201,168,76,0.08)",
            border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: "12px",
            padding: "2.5rem 2rem",
            textAlign: "center",
            marginBottom: "3.5rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#f5f0e8",
              marginBottom: "0.75rem",
              lineHeight: 1.25,
            }}
          >
            Build context from day one.
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(245,240,232,0.65)",
              marginBottom: "1.75rem",
              lineHeight: 1.7,
              maxWidth: "36rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            The sooner you start, the deeper the business context MEOK builds. Sovereign
            tier from £12/month. BYOK tier from £5/month. Your data is never used
            for training. No card required to try the free tier.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-block",
              backgroundColor: "#c9a84c",
              color: "#0d0c18",
              textDecoration: "none",
              fontWeight: 800,
              fontSize: "1rem",
              padding: "0.9rem 2.5rem",
              borderRadius: "8px",
              letterSpacing: "0.03em",
            }}
          >
            Meet Your AI Co-Founder
          </Link>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "0.8rem",
              color: "rgba(245,240,232,0.4)",
            }}
          >
            Your business data belongs to you. MEOK never trains on it.
          </p>
        </section>

        {/* ── Related posts ── */}
        <section>
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#f5f0e8",
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            }}
          >
            Related reading
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "0.75rem",
            }}
          >
            {relatedPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                style={{
                  display: "block",
                  textDecoration: "none",
                  backgroundColor: "rgba(245,240,232,0.03)",
                  border: "1px solid rgba(245,240,232,0.08)",
                  borderRadius: "8px",
                  padding: "1rem 1.125rem",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: "#c9a84c",
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    marginBottom: "0.4rem",
                  }}
                >
                  {post.tag}
                </span>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "#f5f0e8",
                    lineHeight: 1.45,
                  }}
                >
                  {post.title}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </article>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid rgba(201,168,76,0.12)",
          padding: "2.5rem 1.5rem",
          maxWidth: "72rem",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <p style={{ margin: 0, fontSize: "0.8rem", color: "rgba(245,240,232,0.35)" }}>
          &copy; 2026 MEOK AI LABS. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {[
            { href: "/blog", label: "Blog" },
            { href: "/pricing", label: "Pricing" },
            { href: "/work-os", label: "Work OS" },
            { href: "/privacy", label: "Privacy" },
            { href: "/about", label: "About" },
            { href: "/birth", label: "Get Started" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: "rgba(245,240,232,0.45)",
                textDecoration: "none",
                fontSize: "0.8rem",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </footer>
    </div>
  )
}
