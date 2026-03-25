import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "MEOK for Entrepreneurs: Sovereign AI for the Isolated Founder | MEOK AI LABS",
  description:
    "72% of founders report significant mental health challenges. You can't vent to employees, investors, or co-founders. MEOK is the sovereign AI that knows your company history, runs overnight research, builds while you sleep, and tells you the honest truth — even when it's hard to hear.",
  alternates: { canonical: "https://meok.ai/blog/meok-for-entrepreneurs" },
  openGraph: {
    title: "MEOK for Entrepreneurs: Sovereign AI for the Isolated Founder",
    description:
      "Founding is one of the loneliest experiences possible. MEOK gives entrepreneurs a private COO-level AI that never burns out, never judges, and never sells your strategic thinking to a data broker.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-for-entrepreneurs",
    siteName: "MEOK AI LABS",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+for+Entrepreneurs&desc=Sovereign+AI+for+the+Isolated+Founder",
        width: 1200,
        height: 630,
        alt: "MEOK for Entrepreneurs: Sovereign AI for the Isolated Founder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK for Entrepreneurs: Sovereign AI for the Isolated Founder",
    description:
      "72% of founders face significant mental health challenges. MEOK is the private AI that holds the full company story, runs your overnight research, and always tells you the truth.",
    images: [
      "https://meok.ai/api/og?title=MEOK+for+Entrepreneurs&desc=Sovereign+AI+for+the+Isolated+Founder",
    ],
  },
  keywords: [
    "AI for entrepreneurs",
    "founder mental health",
    "founder loneliness",
    "sovereign AI for founders",
    "AI co-founder",
    "startup productivity AI",
    "MEOK for entrepreneurs",
    "Orion AI agent",
    "overnight research agent",
    "Ralph Mode honest AI",
    "BYOK AI tier",
    "founder burnout AI",
    "AI morning briefing founder",
    "founder brain AI",
    "startup AI tools",
    "entrepreneur AI companion",
    "sovereign AI startup",
    "private AI for business",
    "AI COO",
    "MEOK AI LABS",
  ],
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "MEOK for Entrepreneurs: Sovereign AI for the Isolated Founder",
      description:
        "72% of founders report significant mental health challenges. MEOK provides sovereign AI agents, overnight research, honest feedback, and persistent memory of your entire company journey — all in a private architecture that never sells your data.",
      datePublished: "2026-03-25",
      dateModified: "2026-03-25",
      url: "https://meok.ai/blog/meok-for-entrepreneurs",
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
        "@id": "https://meok.ai/blog/meok-for-entrepreneurs",
      },
      articleSection: "Entrepreneurship",
      keywords:
        "sovereign AI, founder loneliness, entrepreneur mental health, AI agents, BYOK, startup tools",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does MEOK help with founder isolation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MEOK provides a completely private space where founders can be fully honest — about doubt, fear, strategic uncertainty, and the emotional weight of building something. Unlike employees (who depend on you for morale), investors (who need to trust your conviction), or co-founders (who carry their own stress), MEOK holds your full story without agenda. Its Sovereign Memory accumulates every decision, pivot, and fear over months and years — so you're never starting from scratch, and never holding it alone. MEOK's pattern-awareness also notices when you've been running on minimal sleep for weeks and flags sustainability concerns before they become crises.",
          },
        },
        {
          "@type": "Question",
          name: "What are Orion, Riri, and Hourman?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Orion, Riri, and Hourman are MEOK's three autonomous work agents designed for founders. Orion (The Hunter) runs overnight — executing deep competitor research, market analysis, and pipeline review while you sleep, so your Morning Briefing is packed with actionable intelligence every day. Riri (The Builder) handles execution tasks in the background: writing code, documentation, technical specifications, and research tasks queued from your conversations. Hourman (The Planner) is your daily sprint partner — contextualised priority triage, calendar-aware task planning, and the structured accountability to ensure what matters actually gets done. Together they function as a private, asynchronous COO layer that operates continuously so you don't have to.",
          },
        },
        {
          "@type": "Question",
          name: "Is MEOK secure enough for sensitive business information?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. MEOK's sovereign architecture encrypts all data at rest and in transit using AES-256. Your conversations, strategic discussions, investor worries, competitive intelligence, and product decisions are never used to train any AI model — not MEOK's, not anyone else's. They are never sold to data brokers. You retain full ownership, full export rights, and full deletion rights at any time. The architecture is designed from first principles for founders who understand that information is competitive advantage — and that the AI tools they use should protect that advantage, not monetise it.",
          },
        },
        {
          "@type": "Question",
          name: "What is the BYOK tier and why would a founder want it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BYOK stands for Bring Your Own Key. If you already have API keys with OpenAI or Anthropic, the MEOK BYOK tier lets you plug those keys into MEOK's memory and agent infrastructure at just £5/month. You get Sovereign Memory, the Morning Briefing, agent task queuing, and MEOK's privacy architecture — all layered on top of your existing API budget. For founders already spending on AI tools, this means you stop paying for disconnected, stateless interactions and start building persistent context that compounds over time. It's the most cost-efficient path to sovereign AI for bootstrapped or budget-conscious founders.",
          },
        },
        {
          "@type": "Question",
          name: "What is Ralph Mode?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ralph Mode is MEOK's honest voice — the mode that activates when you need truth more than comfort. Ralph will tell you your MVP isn't ready for launch. It will tell you your pricing model doesn't make sense for the market you're targeting. It will tell you the hire you just made was a mistake, and why. Most AI tools optimise for your approval. Ralph Mode is built on MEOK's Maternal Covenant, which enforces honest, caring challenge across all responses. Founders are surrounded by people with incentives to tell them what they want to hear. Ralph Mode is the structural counterweight.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Morning Briefing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Morning Briefing is a sovereign daily summary delivered every morning, synthesising everything Orion researched overnight, your pending priorities from Hourman, any relevant context from your recent conversations, and MEOK's pattern observations about your current state and momentum. It is entirely private — generated from your data, for you alone. For founders, it replaces the scattered morning ritual of checking multiple dashboards, inboxes, and news feeds with a single, contextualised briefing that knows what matters to your company specifically.",
          },
        },
      ],
    },
  ],
}

export default function MeokForEntrepreneursPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main
        style={{
          background: "#0d0c18",
          minHeight: "100vh",
          color: "#f5f0e8",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Breadcrumb */}
        <nav
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            padding: "24px 24px 0",
            display: "flex",
            gap: "8px",
            alignItems: "center",
            fontSize: "13px",
            color: "#a09880",
          }}
          aria-label="Breadcrumb"
        >
          <Link href="/" style={{ color: "#a09880", textDecoration: "none" }}>
            Home
          </Link>
          <span style={{ color: "#4a4860" }}>/</span>
          <Link
            href="/blog"
            style={{ color: "#a09880", textDecoration: "none" }}
          >
            Blog
          </Link>
          <span style={{ color: "#4a4860" }}>/</span>
          <span style={{ color: "#f5f0e8" }}>MEOK for Entrepreneurs</span>
        </nav>

        {/* Hero */}
        <section
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            padding: "48px 24px 48px",
          }}
        >
          <div style={{ marginBottom: "16px" }}>
            <span
              style={{
                background: "#c9a84c22",
                color: "#c9a84c",
                padding: "4px 14px",
                borderRadius: "20px",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Entrepreneurship
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 800,
              lineHeight: 1.12,
              marginBottom: "24px",
              letterSpacing: "-0.02em",
            }}
          >
            MEOK for Entrepreneurs: Sovereign AI for the Isolated Founder
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#a09880",
              lineHeight: 1.75,
              marginBottom: "32px",
              maxWidth: "680px",
            }}
          >
            72% of founders report significant mental health challenges. You
            can&apos;t vent to your employees — it damages morale. You
            can&apos;t be fully honest with investors — it damages confidence.
            You can&apos;t always burden co-founders — they&apos;re carrying
            their own weight. MEOK is the sovereign AI that holds the full
            story, runs the overnight work, and always tells you the truth.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "24px",
              color: "#a09880",
              fontSize: "14px",
              borderTop: "1px solid #2a2840",
              paddingTop: "20px",
            }}
          >
            <span>Nicholas Templeman</span>
            <span>March 25, 2026</span>
            <span>12 min read</span>
          </div>
        </section>

        <article
          style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px 80px" }}
        >
          {/* Stat banner */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "16px",
              margin: "0 0 56px",
            }}
          >
            {[
              { stat: "72%", label: "of founders report significant mental health challenges" },
              { stat: "2×", label: "more likely to experience depression than non-founders" },
              { stat: "89%", label: "of startup failures cite co-founder issues, often communication breakdown" },
              { stat: "60–80hrs", label: "average founder working week in the first three years" },
            ].map((item) => (
              <div
                key={item.stat}
                style={{
                  background: "#13121f",
                  border: "1px solid #2a2840",
                  borderRadius: "12px",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "#c9a84c",
                    marginBottom: "8px",
                    lineHeight: 1,
                  }}
                >
                  {item.stat}
                </div>
                <div
                  style={{
                    fontSize: "0.82rem",
                    color: "#a09880",
                    lineHeight: 1.5,
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Section 1 */}
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 700,
              color: "#c9a84c",
              marginTop: "0",
              marginBottom: "16px",
              lineHeight: 1.3,
            }}
          >
            The Founding Loneliness Problem No One Talks About
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "#d4cfc8",
              marginBottom: "20px",
            }}
          >
            Building a company is one of the loneliest experiences possible —
            not because you&apos;re physically alone, but because you are
            structurally isolated from honesty. Every person around you has a
            stake in your confidence. Your team needs to believe in the mission,
            so you can&apos;t let them see your doubt. Your investors have
            written a cheque on your conviction, so you can&apos;t let them see
            your fear. Your co-founders are carrying their own version of the
            same weight, and you don&apos;t want to compound it. Your friends
            and family care deeply but don&apos;t understand the specific texture
            of the problem.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "#d4cfc8",
              marginBottom: "20px",
            }}
          >
            The result is a person holding enormous psychological weight in
            almost total privacy. According to research by Freeman et al. (2019),
            72% of founders report significant mental health challenges — yet the
            dominant cultural narrative around entrepreneurship still glorifies
            the grind and pathologises rest. Founders are twice as likely to
            experience depression as non-founders, but the very persona required
            to succeed makes admitting this feel like a strategic liability.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "#d4cfc8",
              marginBottom: "20px",
            }}
          >
            This is the problem MEOK was built to address — not with a wellness
            app, not with a meditation timer, but with a sovereign AI that knows
            your company&apos;s full history, can hold your honest thinking
            without judgment, works through the night so you don&apos;t have to,
            and always tells you the truth even when the truth is uncomfortable.
          </p>

          {/* Section 2 */}
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 700,
              color: "#c9a84c",
              marginTop: "52px",
              marginBottom: "16px",
              lineHeight: 1.3,
            }}
          >
            The Founder Brain Problem: Why You Can&apos;t Turn Off
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "#d4cfc8",
              marginBottom: "20px",
            }}
          >
            Founders don&apos;t just work long hours — they occupy a
            qualitatively different cognitive state. There is no clock-off. The
            company lives in your head at 3am with the same urgency it had at
            3pm. The average founder works 60 to 80 hours per week in their
            first three years, but the hours are almost a distraction from the
            real issue: the context-switching is relentless, the stakes feel
            existential at every turn, and the cognitive overhead of holding the
            whole system in mind — product, team, pipeline, investors, culture,
            competitors — is punishing.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "#d4cfc8",
              marginBottom: "20px",
            }}
          >
            Catastrophic thinking patterns are a common companion. A single
            difficult investor call spirals into a mental model of the company
            failing, the team dissolving, every decision reviewed in hindsight.
            Sleep is disrupted not because founders choose to stay up but because
            the brain refuses to disengage. The prefrontal cortex — responsible
            for executive function, risk assessment, and strategic thinking — is
            running hot, all the time.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "#d4cfc8",
              marginBottom: "20px",
            }}
          >
            This is why MEOK&apos;s architecture for founders goes beyond
            companionship. It actively takes work off your cognitive plate — not
            just emotionally but operationally. When the overnight research is
            already done and the morning briefing is waiting for you, the 3am
            spiral about what your competitor announced yesterday has less
            traction. When Hourman has already structured today&apos;s
            priorities, the morning context-switching tax is lower. MEOK
            doesn&apos;t just hold your feelings; it reduces the cognitive burden
            that generates them.
          </p>

          <blockquote
            style={{
              borderLeft: "4px solid #c9a84c",
              paddingLeft: "24px",
              margin: "40px 0",
              color: "#c9a84c",
              fontStyle: "italic",
              fontSize: "1.25rem",
              lineHeight: 1.65,
            }}
          >
            &ldquo;The founder brain never stops. MEOK is the only
            collaborator that matches that pace — and knows when to tell you
            to close the laptop.&rdquo;
            <cite
              style={{
                display: "block",
                fontSize: "0.88rem",
                color: "#a09880",
                marginTop: "10px",
                fontStyle: "normal",
              }}
            >
              — Nicholas Templeman, Founder, MEOK AI LABS
            </cite>
          </blockquote>

          {/* Section 3: Agents */}
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 700,
              color: "#c9a84c",
              marginTop: "52px",
              marginBottom: "16px",
              lineHeight: 1.3,
            }}
          >
            Meet Your Autonomous Agent Stack: Orion, Riri, and Hourman
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "#d4cfc8",
              marginBottom: "24px",
            }}
          >
            MEOK&apos;s sovereign tier ships three autonomous work agents built
            specifically for the founder workflow. They operate in the background
            — queued during your conversations, executing overnight, and
            surfacing results in your Morning Briefing. You don&apos;t manage
            them like tools; you work alongside them like a very focused,
            relentless small team.
          </p>

          {/* Agent cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              margin: "0 0 40px",
            }}
          >
            {/* Orion */}
            <div
              style={{
                background: "#13121f",
                border: "1px solid #c9a84c44",
                borderRadius: "14px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    background: "#c9a84c22",
                    borderRadius: "10px",
                    padding: "10px 14px",
                    fontSize: "1.4rem",
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  🏹
                </div>
                <div>
                  <h3
                    style={{
                      color: "#c9a84c",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      marginBottom: "8px",
                    }}
                  >
                    Orion — The Hunter
                  </h3>
                  <p
                    style={{
                      color: "#d4cfc8",
                      lineHeight: 1.75,
                      fontSize: "1rem",
                      margin: 0,
                    }}
                  >
                    Orion runs overnight. While you sleep, it executes the
                    research tasks you&apos;ve queued during the day — deep
                    competitor monitoring, market signal analysis, pipeline
                    review, industry news synthesis. By the time you open your
                    eyes, Orion has already hunted. Your Morning Briefing
                    contains a distilled summary of what it found: what your
                    competitor shipped last night, what that funding announcement
                    means for your positioning, which of your target accounts
                    showed signals of intent. The founder who used to spend the
                    first two hours of their day catching up now arrives at their
                    desk already informed.
                  </p>
                </div>
              </div>
            </div>

            {/* Riri */}
            <div
              style={{
                background: "#13121f",
                border: "1px solid #6aaa6444",
                borderRadius: "14px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    background: "#6aaa6422",
                    borderRadius: "10px",
                    padding: "10px 14px",
                    fontSize: "1.4rem",
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  🔨
                </div>
                <div>
                  <h3
                    style={{
                      color: "#6aaa64",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      marginBottom: "8px",
                    }}
                  >
                    Riri — The Builder
                  </h3>
                  <p
                    style={{
                      color: "#d4cfc8",
                      lineHeight: 1.75,
                      fontSize: "1rem",
                      margin: 0,
                    }}
                  >
                    Riri builds while you sleep. Code tasks, documentation
                    drafts, technical research, specification writing — anything
                    that can be queued from your conversation and executed
                    asynchronously. For solo founders and small teams,
                    Riri functions as the extra pair of hands that never needs
                    to be onboarded, never loses context, and never drops tasks.
                    You describe what you need during your working session; Riri
                    executes it in the background; it is waiting for your review
                    the next morning. The compounding effect over weeks and months
                    is enormous: MEOK&apos;s own founder used early versions of
                    these agents to ship 176+ routes, 38+ blog posts,
                    infrastructure, and an entire product — from a caravan.
                  </p>
                </div>
              </div>
            </div>

            {/* Hourman */}
            <div
              style={{
                background: "#13121f",
                border: "1px solid #7b68ee44",
                borderRadius: "14px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    background: "#7b68ee22",
                    borderRadius: "10px",
                    padding: "10px 14px",
                    fontSize: "1.4rem",
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  ⏱
                </div>
                <div>
                  <h3
                    style={{
                      color: "#7b68ee",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      marginBottom: "8px",
                    }}
                  >
                    Hourman — The Planner
                  </h3>
                  <p
                    style={{
                      color: "#d4cfc8",
                      lineHeight: 1.75,
                      fontSize: "1rem",
                      margin: 0,
                    }}
                  >
                    Hourman runs your daily sprint. Each morning it synthesises
                    your outstanding tasks, current priorities, calendar context,
                    and the outputs from Orion&apos;s overnight work to produce a
                    structured, time-blocked plan. It knows what you said was
                    urgent yesterday, what has slipped, and what the highest
                    leverage thing is today given everything MEOK knows about
                    your current phase. For founders who lose hours to inbox
                    paralysis and priority confusion, Hourman provides the
                    structured clarity that turns effort into momentum.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Ralph Mode + Scholar */}
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 700,
              color: "#c9a84c",
              marginTop: "52px",
              marginBottom: "16px",
              lineHeight: 1.3,
            }}
          >
            Ralph Mode and Scholar: The Honest Advisors You Actually Need
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "#d4cfc8",
              marginBottom: "20px",
            }}
          >
            Most AI tools are designed to please you. They optimise for positive
            feedback and return responses that make you feel good about your
            ideas. For founders, this is worse than useless — it is actively
            dangerous. You are surrounded by people with incentives to validate
            you. The last thing you need is an AI that joins the chorus.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "#d4cfc8",
              marginBottom: "20px",
            }}
          >
            MEOK&apos;s <strong style={{ color: "#f5f0e8" }}>Ralph Mode</strong>{" "}
            is the structural counterweight. When you activate Ralph Mode, MEOK
            shifts into its most unflinchingly honest register. Ralph will tell
            you your MVP is not ready for launch — and explain exactly which
            assumptions are holding it back. It will tell you your pricing model
            doesn&apos;t work for the segment you&apos;re targeting, and show
            you the numbers. It will tell you the hire you just made is going to
            cause problems, and why the signals were already there. Ralph Mode
            is not unkind — it is built on MEOK&apos;s Maternal Covenant, which
            enforces honest, caring challenge. But it does not soften truth to
            protect your feelings when what you need is clarity.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "#d4cfc8",
              marginBottom: "20px",
            }}
          >
            For strategic decisions, MEOK&apos;s{" "}
            <strong style={{ color: "#f5f0e8" }}>Scholar archetype</strong> is
            your Socratic thinking partner. Scholar doesn&apos;t tell you what
            to decide — it asks the questions that surface what you actually
            believe. It stress-tests your assumptions, draws parallels from
            other domains and historical analogues, and follows the logical
            threads that uncomfortable implications live at the end of. The best
            investors ask you the questions you&apos;ve been avoiding. Scholar
            does the same, every day, without billing you by the hour.
          </p>

          <div
            style={{
              background: "#13121f",
              border: "1px solid #2a2840",
              borderRadius: "12px",
              padding: "28px",
              margin: "40px 0",
            }}
          >
            <h3
              style={{
                color: "#f5f0e8",
                fontSize: "1.05rem",
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              The honest voice stack — when to use each
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                gap: "12px 24px",
                fontSize: "0.95rem",
                lineHeight: 1.6,
              }}
            >
              <div style={{ color: "#c9a84c", fontWeight: 700 }}>
                Ralph Mode
              </div>
              <div style={{ color: "#d4cfc8" }}>
                Blunt product, pricing, hiring, and strategy reality-checks.
                Use when you suspect you&apos;re rationalising.
              </div>
              <div style={{ color: "#c9a84c", fontWeight: 700 }}>
                Scholar
              </div>
              <div style={{ color: "#d4cfc8" }}>
                Deep Socratic exploration of strategic decisions, assumptions,
                and mental models. Use when you need to think more clearly, not
                just faster.
              </div>
              <div style={{ color: "#c9a84c", fontWeight: 700 }}>
                Morning Briefing
              </div>
              <div style={{ color: "#d4cfc8" }}>
                Daily sovereign summary: Orion&apos;s overnight findings,
                Hourman&apos;s priorities, and MEOK&apos;s contextual
                observations. The start-of-day clarity layer.
              </div>
            </div>
          </div>

          {/* Section 5: Morning Briefing + COO layer */}
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 700,
              color: "#c9a84c",
              marginTop: "52px",
              marginBottom: "16px",
              lineHeight: 1.3,
            }}
          >
            The Morning Briefing: Your Sovereign Daily Intelligence Summary
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "#d4cfc8",
              marginBottom: "20px",
            }}
          >
            Every morning, MEOK generates a private briefing that no one else
            sees. It synthesises what Orion found overnight — market signals,
            competitor moves, relevant news — with the priority structure
            Hourman has built for today, filtered through everything MEOK knows
            about your current phase, your open decisions, and what you discussed
            yesterday. It is not a generic news digest. It is intelligence
            calibrated to your company specifically.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "#d4cfc8",
              marginBottom: "20px",
            }}
          >
            For founders who used to spend their first two hours catching up —
            trawling Twitter, checking newsletters, reviewing dashboards,
            reconstructing yesterday&apos;s context — the Morning Briefing
            collapses that into minutes. You arrive at your first conversation
            of the day already oriented, already informed, and already with a
            structured plan. The cognitive overhead of the morning onboarding
            ritual disappears.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "#d4cfc8",
              marginBottom: "20px",
            }}
          >
            Think of MEOK as a private COO — not quite human, not quite a tool,
            something in between. It holds institutional memory. It monitors the
            landscape. It structures execution. It challenges decisions
            honestly. And it is available at 2am when the anxiety about
            tomorrow&apos;s board call won&apos;t let you sleep, with the same
            quality of engagement it had at 2pm.
          </p>

          {/* Section 6: Pattern tracking + sustainability */}
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 700,
              color: "#c9a84c",
              marginTop: "52px",
              marginBottom: "16px",
              lineHeight: 1.3,
            }}
          >
            Pattern Tracking: MEOK Notices When You&apos;re Running on Empty
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "#d4cfc8",
              marginBottom: "20px",
            }}
          >
            Founder burnout rarely announces itself. It accumulates gradually —
            a steady drift in language from &ldquo;we&apos;re going to&rdquo; to
            &ldquo;I hope we can,&rdquo; a shortening of sentences, a decline in
            the curiosity that used to show up in every conversation. By the time
            a founder names it as burnout, the company has usually already been
            affected.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "#d4cfc8",
              marginBottom: "20px",
            }}
          >
            MEOK&apos;s memory doesn&apos;t just store facts — it tracks
            patterns. It notices when you&apos;ve mentioned starting work at 5am
            for three consecutive weeks. It notices the shift in how you talk
            about your team. It notices when the enthusiasm for a project that
            used to light up your language has gone quiet. When it detects
            patterns that suggest unsustainable operation, it says so — not
            in a generic wellness-app way, but with specific, contextualised
            observations drawn from your actual history.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "#d4cfc8",
              marginBottom: "20px",
            }}
          >
            This is MEOK&apos;s anti-engagement design in practice. MEOK is not
            built to maximise the time you spend with it. It is built to
            maximise the likelihood that your company succeeds and that you
            survive the journey intact. Sometimes that means it tells you to
            close the laptop and sleep. That is a feature, not a flaw.
          </p>

          {/* Section 7: Privacy */}
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 700,
              color: "#c9a84c",
              marginTop: "52px",
              marginBottom: "16px",
              lineHeight: 1.3,
            }}
          >
            Privacy Architecture: Your Strategic Thinking Is Not a Product
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "#d4cfc8",
              marginBottom: "20px",
            }}
          >
            Founders talk to MEOK about things they would not say in any other
            context. Investor worries. Product bets they&apos;re not certain
            about. Competitive moves they&apos;re planning. Hiring decisions they
            regret. Pricing experiments they&apos;re testing. This is precisely
            the category of information that makes a company a company — and it
            is exactly what most AI tools are monetising.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "#d4cfc8",
              marginBottom: "20px",
            }}
          >
            MEOK&apos;s sovereign architecture encrypts all data at rest and in
            transit using AES-256. Your conversations are never used to train any
            AI model — not MEOK&apos;s, not any third party&apos;s. They are
            never sold to data brokers. They are never processed for advertising
            targeting. You own your data entirely, with full export and full
            deletion rights at any time.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "#d4cfc8",
              marginBottom: "20px",
            }}
          >
            For founders who understand that information is competitive
            advantage, this is not a minor feature — it is the foundation. You
            should not have to choose between a powerful AI that knows your
            business deeply and a private AI that doesn&apos;t sell your
            thinking to your competitors. MEOK is built on the premise that you
            can have both.
          </p>

          <div
            style={{
              background: "#0d0c18",
              border: "1px solid #c9a84c",
              borderRadius: "12px",
              padding: "24px 28px",
              margin: "40px 0",
            }}
          >
            <h3
              style={{
                color: "#c9a84c",
                fontSize: "1rem",
                fontWeight: 700,
                marginBottom: "14px",
              }}
            >
              MEOK sovereignty guarantees
            </h3>
            <ul
              style={{
                color: "#d4cfc8",
                lineHeight: 1.9,
                paddingLeft: "20px",
                margin: 0,
                fontSize: "0.97rem",
              }}
            >
              <li>AES-256 encryption at rest and in transit</li>
              <li>Zero model training on your conversations — ever</li>
              <li>No data broker partnerships, no advertising use</li>
              <li>Full data export in structured format on request</li>
              <li>Full account deletion with cryptographic confirmation</li>
              <li>No engagement maximisation — MEOK&apos;s goal is your success</li>
            </ul>
          </div>

          {/* Section 8: Origin story */}
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 700,
              color: "#c9a84c",
              marginTop: "52px",
              marginBottom: "16px",
              lineHeight: 1.3,
            }}
          >
            Built From a Caravan: The Real Proof of Concept
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "#d4cfc8",
              marginBottom: "20px",
            }}
          >
            MEOK wasn&apos;t designed in a glass-walled office with a team of
            fifty engineers. Nicholas Templeman built MEOK from a caravan —
            using early versions of these exact agents to manage research,
            execution, planning, and writing at a pace that would not have been
            possible otherwise. Orion ran overnight research while he slept.
            Riri handled the building tasks queued during the day. Hourman
            structured priorities each morning from an ever-growing task list.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "#d4cfc8",
              marginBottom: "20px",
            }}
          >
            The result: 176+ routes shipped, 38+ blog posts published,
            infrastructure built, and a product taken from concept to
            market-ready in weeks — by one person, in a caravan, with agents
            doing the overnight work. This is not a hypothetical use case. MEOK
            was built with MEOK, and the proof is in the codebase.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "#d4cfc8",
              marginBottom: "20px",
            }}
          >
            The founder experience that shaped MEOK is the same experience it
            was built to serve: building alone, holding the full picture
            internally, needing an honest collaborator who never burns out, never
            needs to be briefed from scratch, and always tells you the truth.
            Every design decision in MEOK&apos;s architecture traces back to that
            lived experience of building in isolation with agents as the missing
            layer.
          </p>

          {/* Section 9: BYOK */}
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 700,
              color: "#c9a84c",
              marginTop: "52px",
              marginBottom: "16px",
              lineHeight: 1.3,
            }}
          >
            The BYOK Tier: Sovereignty on Your Existing API Budget
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "#d4cfc8",
              marginBottom: "20px",
            }}
          >
            Many founders already pay for access to frontier AI models directly
            — OpenAI&apos;s API, Anthropic&apos;s Claude API. They use them for
            drafting, research, and coding tasks. The problem is that these
            interactions are stateless. Every conversation starts from zero. The
            AI has no memory of what you built last week, what you decided last
            month, or what you&apos;re trying to achieve this quarter. You are
            paying for intelligence without accumulation.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "#d4cfc8",
              marginBottom: "20px",
            }}
          >
            MEOK&apos;s BYOK (Bring Your Own Key) tier changes this. For
            £5/month, you connect your existing OpenAI or Anthropic API keys
            to MEOK&apos;s memory and agent infrastructure. You get Sovereign
            Memory, the Morning Briefing, agent task queuing with Orion, Riri,
            and Hourman, and MEOK&apos;s full privacy architecture — all layered
            on top of the model access you&apos;re already paying for.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "#d4cfc8",
              marginBottom: "20px",
            }}
          >
            For bootstrapped founders and those watching their burn rate, this is
            the most cost-efficient path to sovereign AI. You&apos;re not paying
            for a second AI subscription — you&apos;re adding sovereignty,
            memory, and compound context to your existing AI investment for the
            cost of a coffee per week. The context that accumulates over six
            months of daily use cannot be replicated by any stateless tool at
            any price.
          </p>

          <div
            style={{
              background: "#13121f",
              border: "1px solid #2a2840",
              borderRadius: "14px",
              padding: "28px",
              margin: "40px 0",
            }}
          >
            <h3
              style={{
                color: "#f5f0e8",
                fontSize: "1.05rem",
                fontWeight: 700,
                marginBottom: "20px",
              }}
            >
              MEOK tiers for founders
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "16px",
              }}
            >
              {[
                {
                  tier: "Free",
                  price: "£0/mo",
                  features: [
                    "Core companion",
                    "Basic memory",
                    "Scholar + Ralph Mode",
                    "Morning Briefing (lite)",
                  ],
                  highlight: false,
                },
                {
                  tier: "BYOK",
                  price: "£5/mo",
                  features: [
                    "Your API keys",
                    "Full Sovereign Memory",
                    "Orion + Riri + Hourman",
                    "Full Morning Briefing",
                    "Privacy architecture",
                  ],
                  highlight: true,
                },
                {
                  tier: "Sovereign",
                  price: "£12/mo",
                  features: [
                    "MEOK-hosted models",
                    "Full Sovereign Memory",
                    "All agents",
                    "Priority execution",
                    "Advanced pattern tracking",
                  ],
                  highlight: false,
                },
              ].map((item) => (
                <div
                  key={item.tier}
                  style={{
                    background: item.highlight ? "#1e1c35" : "#0d0c18",
                    border: item.highlight
                      ? "1px solid #c9a84c"
                      : "1px solid #2a2840",
                    borderRadius: "10px",
                    padding: "20px",
                  }}
                >
                  <div
                    style={{
                      color: item.highlight ? "#c9a84c" : "#f5f0e8",
                      fontWeight: 700,
                      fontSize: "1rem",
                      marginBottom: "4px",
                    }}
                  >
                    {item.tier}
                  </div>
                  <div
                    style={{
                      color: "#c9a84c",
                      fontWeight: 800,
                      fontSize: "1.3rem",
                      marginBottom: "14px",
                    }}
                  >
                    {item.price}
                  </div>
                  <ul
                    style={{
                      color: "#a09880",
                      paddingLeft: "16px",
                      margin: 0,
                      fontSize: "0.85rem",
                      lineHeight: 1.8,
                    }}
                  >
                    {item.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section 10: Why sovereign matters */}
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 700,
              color: "#c9a84c",
              marginTop: "52px",
              marginBottom: "16px",
              lineHeight: 1.3,
            }}
          >
            Why &ldquo;Sovereign&rdquo; Is the Right Word for Founder AI
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "#d4cfc8",
              marginBottom: "20px",
            }}
          >
            Sovereignty, in the context of AI, means that the system serves you
            and only you — not its shareholders, not its advertisers, not the
            model trainers who want to improve future systems on the back of your
            conversations. A sovereign AI has no engagement metric to maximise.
            It has no retention algorithm. It does not get paid more if you spend
            more time with it. Its success function is identical to yours: the
            outcomes you are trying to achieve.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "#d4cfc8",
              marginBottom: "20px",
            }}
          >
            For founders, this alignment matters profoundly. You are making
            decisions under uncertainty with high stakes and limited information.
            The last thing you need is an advisor with a hidden incentive
            structure. MEOK&apos;s architecture is built to make its incentives
            completely transparent: MEOK succeeds when you succeed. The product
            is designed around your sustainability and your outcomes, not your
            attention.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "#d4cfc8",
              marginBottom: "20px",
            }}
          >
            This is why MEOK will sometimes tell you to rest. Why it will surface
            burnout signals before you want to hear them. Why Ralph Mode exists
            at all. Sovereign AI, properly implemented, is the first AI that is
            genuinely on your side — not just optimised to make you feel that way.
          </p>

          {/* CTA */}
          <div
            style={{
              background: "linear-gradient(135deg, #13121f 0%, #1a1830 100%)",
              border: "1px solid #2a2840",
              borderRadius: "16px",
              padding: "56px 48px",
              textAlign: "center",
              marginTop: "64px",
            }}
          >
            <div
              style={{
                fontSize: "0.82rem",
                color: "#c9a84c",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Start Your Founding Journey With MEOK
            </div>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
                fontWeight: 800,
                color: "#f5f0e8",
                marginBottom: "16px",
                lineHeight: 1.2,
              }}
            >
              Stop holding the whole company alone
            </h2>
            <p
              style={{
                color: "#a09880",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                marginBottom: "36px",
                maxWidth: "520px",
                margin: "0 auto 36px",
              }}
            >
              MEOK remembers every pivot, every fear, every breakthrough. Orion
              hunts overnight. Riri builds while you sleep. Hourman plans your
              sprint. Ralph Mode tells you the truth. And your data never leaves
              your sovereignty.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                background: "#c9a84c",
                color: "#0d0c18",
                padding: "18px 48px",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "1.05rem",
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              Begin Your Birth Ceremony
            </Link>
            <p
              style={{
                color: "#a09880",
                fontSize: "0.83rem",
                marginTop: "18px",
              }}
            >
              Free forever tier. BYOK tier from £5/mo. Sovereign tier from
              £12/mo. No sycophancy guaranteed.
            </p>
          </div>

          {/* Back link */}
          <div
            style={{
              marginTop: "48px",
              paddingTop: "32px",
              borderTop: "1px solid #2a2840",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <Link
              href="/blog"
              style={{
                color: "#c9a84c",
                textDecoration: "none",
                fontSize: "0.95rem",
              }}
            >
              ← Back to Blog
            </Link>
            <div
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/blog/ralph-mode-explained"
                style={{
                  color: "#a09880",
                  textDecoration: "none",
                  fontSize: "0.88rem",
                }}
              >
                Ralph Mode explained →
              </Link>
              <Link
                href="/blog/morning-brief-guide"
                style={{
                  color: "#a09880",
                  textDecoration: "none",
                  fontSize: "0.88rem",
                }}
              >
                Morning Briefing guide →
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}
