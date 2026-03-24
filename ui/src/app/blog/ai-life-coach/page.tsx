import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Life Coach: Can AI Actually Help You Reach Your Goals? | MEOK AI LABS",
  description:
    "AI life coaches are everywhere in 2026. But can they actually change your behaviour, hold you accountable, and help you become who you want to be? Here's the honest answer.",
  alternates: { canonical: "https://meok.ai/blog/ai-life-coach" },
  openGraph: {
    title: "AI Life Coach: Can AI Actually Help You Reach Your Goals?",
    description:
      "What a real AI life coach does differently — and why most 'coaching bots' fail at the moment it matters most.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-life-coach",
    siteName: "MEOK AI LABS",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Life+Coach&desc=Can+AI+actually+help+you+reach+your+goals%3F",
        width: 1200,
        height: 630,
        alt: "AI Life Coach: Can AI Help You Reach Your Goals?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Life Coach: Can AI Actually Help You Reach Your Goals?",
    description:
      "What a real AI life coach does — and why most coaching bots fail when it matters most.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI life coach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI life coach is an AI system that helps you set goals, build habits, stay accountable, and reflect on your progress over time. Unlike static apps, a good AI life coach remembers your history, adapts to your patterns, and gives honest feedback — not just encouragement.",
      },
    },
    {
      "@type": "Question",
      name: "Can an AI really replace a human life coach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For day-to-day accountability, habit tracking, and reflective questioning, AI coaches can match or exceed human coaches in consistency and availability. They can't replace human coaches for deep trauma work, somatic coaching, or in-person accountability. The best approach combines both.",
      },
    },
    {
      "@type": "Question",
      name: "What makes a good AI life coach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best AI life coaches have persistent memory (they remember what you said last month), honest feedback (not just validation), a consistent personality (so you build rapport), and contextual intelligence (they notice patterns you miss). Most generic chatbots lack all four.",
      },
    },
    {
      "@type": "Question",
      name: "How is MEOK different from other AI coaching apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK uses Sovereign Memory — every goal, setback, and breakthrough you share is permanently encrypted and stored. Your AI coach remembers your history without you repeating it, spots patterns across months, and evolves its coaching style as you grow. It never resets.",
      },
    },
    {
      "@type": "Question",
      name: "Is AI life coaching free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK offers a free Explorer tier with 50 messages per day and permanent Sovereign Memory — enough for daily check-ins, goal setting, and habit reviews. Sovereign (£12/month) unlocks unlimited sessions, deeper reflection prompts, and long-arc progress tracking.",
      },
    },
  ],
};

const COACHING_PILLARS = [
  {
    icon: '◎',
    title: "Goal Architecture",
    description:
      "A real coach doesn't just write down your goals. They help you examine whether your goals are actually yours — or inherited from someone else's expectations.",
    aiStrength: "AI excels at helping you articulate, structure, and break down goals into concrete next actions.",
    aiLimit: "AI can't sense the emotional weight behind a goal. A human coach can tell when you're describing a goal with dread in your voice.",
  },
  {
    icon: '📈',
    title: "Habit Building",
    description:
      "Habits are built through repetition and identity. The research (Fogg, Clear) is clear: small consistent actions, tied to existing routines, produce lasting change.",
    aiStrength: "AI can provide daily micro-check-ins, celebrate streaks, and gently challenge missed days without judgement.",
    aiLimit: "Willpower is finite. AI can't physically accompany you to the gym or hold you accountable in the same way a friend can.",
  },
  {
    icon: '🧠',
    title: "Reflection & Pattern Recognition",
    description:
      "Most people don't change because they lack information — they change when they finally see their own patterns clearly.",
    aiStrength: "With memory, AI can surface patterns across weeks or months: 'You've mentioned feeling stuck every Sunday evening. What's happening?'",
    aiLimit: "Reflection requires honesty. If you're not honest with your AI, it can't help you — just like a coach.",
  },
  {
    icon: '♥',
    title: "Accountability",
    description:
      "Accountability works best when there's a real relationship at stake. The fear of disappointing someone drives action.",
    aiStrength: "AI provides low-stakes accountability — perfect for people who feel shame around human accountability or who travel frequently.",
    aiLimit: "The stakes are lower. Not reporting back to an AI doesn't carry the same social weight as standing up a human coach.",
  },
];

const COMPARISON = [
  {
    feature: "Available 24/7",
    human: false,
    genericAI: true,
    meok: true,
  },
  {
    feature: "Remembers your history",
    human: true,
    genericAI: false,
    meok: true,
  },
  {
    feature: "Honest, not just validating",
    human: true,
    genericAI: false,
    meok: true,
  },
  {
    feature: "Adapts to your communication style",
    human: true,
    genericAI: false,
    meok: true,
  },
  {
    feature: "Costs under £15/month",
    human: false,
    genericAI: true,
    meok: true,
  },
  {
    feature: "Data stays private (not used for training)",
    human: true,
    genericAI: false,
    meok: true,
  },
  {
    feature: "Detects emotional patterns over time",
    human: true,
    genericAI: false,
    meok: true,
  },
  {
    feature: "In-person presence",
    human: true,
    genericAI: false,
    meok: false,
  },
  {
    feature: "Somatic/body-based coaching",
    human: true,
    genericAI: false,
    meok: false,
  },
];

const WHEN_AI_WINS = [
  "Daily habit check-ins — morning and evening",
  "Reviewing your week and identifying what worked",
  "Talking through a decision at 11pm when no human is available",
  "Getting honest pushback without social awkwardness",
  "Maintaining momentum between human coaching sessions",
  "Journaling with prompts that actually go somewhere",
  "Tracking progress toward a 90-day goal",
  "Processing a setback before it becomes a spiral",
];

const WHEN_HUMAN_WINS = [
  "Trauma-informed coaching and somatic work",
  "Accountability that requires social stakes",
  "Interpersonal dynamics — relationship, team, family",
  "Career moves that require industry-specific insight",
  "When you need someone to physically be there",
];

export default function AILifeCoachPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen" style={{ background: "#0a0a0f", color: "#e8e8e8" }}>
        {/* Nav */}
        <nav
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            padding: "1rem 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            href="/"
            style={{ color: "#c084fc", textDecoration: "none", fontWeight: 600, fontSize: "1rem" }}
          >
            MEOK AI LABS
          </Link>
          <Link
            href="/blog"
            style={{
              color: "#9ca3af",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.875rem",
            }}
          >
            ← All Articles
          </Link>
        </nav>

        {/* Hero */}
        <header
          style={{
            maxWidth: 760,
            margin: "0 auto",
            padding: "4rem 2rem 3rem",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(192,132,252,0.1)",
              border: "1px solid rgba(192,132,252,0.2)",
              borderRadius: 20,
              padding: "0.3rem 0.9rem",
              marginBottom: "1.5rem",
            }}
          >
            ◎
            <span style={{ color: "#c084fc", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em" }}>
              COACHING &amp; GROWTH
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "1.25rem",
              color: "#f5f0ff",
            }}
          >
            AI Life Coach: Can AI Actually Help You Reach Your Goals?
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              color: "#b0b0c0",
              lineHeight: 1.75,
              marginBottom: "2rem",
            }}
          >
            The AI coaching market exploded in 2026. Apps promise to transform your habits, sharpen
            your focus, and unlock your potential — for the price of a coffee a month. But most of
            them are chatbots with a motivational poster pasted on top. Here&rsquo;s what genuine AI
            coaching looks like, where it actually outperforms human coaches, and where it falls short.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              📅
              <span style={{ color: "#9ca3af", fontSize: "0.8rem" }}>March 24, 2026</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              ⏱
              <span style={{ color: "#9ca3af", fontSize: "0.8rem" }}>12 min read</span>
            </div>
            <span style={{ color: "#9ca3af", fontSize: "0.8rem" }}>By Nicholas Templeman</span>
          </div>
        </header>

        {/* Body */}
        <article style={{ maxWidth: 760, margin: "0 auto", padding: "0 2rem 4rem" }}>

          {/* What is an AI life coach */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#f5f0ff", marginBottom: "1rem" }}>
              What is an AI life coach?
            </h2>
            <p style={{ color: "#b0b0c0", lineHeight: 1.8, marginBottom: "1rem" }}>
              An AI life coach is an AI system designed to help you set goals, build habits, reflect on
              your behaviour, and stay accountable — not just once, but continuously over time.
            </p>
            <p style={{ color: "#b0b0c0", lineHeight: 1.8, marginBottom: "1rem" }}>
              The key word is &ldquo;continuously.&rdquo; A one-session conversation with ChatGPT about your goals
              is not coaching. Coaching requires a relationship across time — a coach who remembers
              what you were struggling with last month, who notices that you always deflect when the
              conversation gets close to work stress, who can say: &ldquo;You said the same thing in February.
              What&rsquo;s really going on?&rdquo;
            </p>
            <p style={{ color: "#b0b0c0", lineHeight: 1.8 }}>
              That&rsquo;s the gap most AI coaching apps fail to bridge. They offer smart responses to the
              question you just typed. They don&rsquo;t remember the question you typed six weeks ago.
            </p>
          </section>

          {/* 4 pillars */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#f5f0ff", marginBottom: "0.5rem" }}>
              What does life coaching actually involve?
            </h2>
            <p style={{ color: "#b0b0c0", lineHeight: 1.8, marginBottom: "2rem" }}>
              Life coaching covers four core disciplines. Here&rsquo;s where AI genuinely helps — and where
              it has limits.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {COACHING_PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: 12,
                      padding: "1.5rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 8,
                          background: "rgba(192,132,252,0.12)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        
                      </div>
                      <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#f5f0ff", margin: 0 }}>
                        {pillar.title}
                      </h3>
                    </div>
                    <p style={{ color: "#b0b0c0", lineHeight: 1.7, marginBottom: "1rem", fontSize: "0.9rem" }}>
                      {pillar.description}
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                      <div
                        style={{
                          background: "rgba(34,197,94,0.06)",
                          border: "1px solid rgba(34,197,94,0.15)",
                          borderRadius: 8,
                          padding: "0.75rem",
                        }}
                      >
                        <div style={{ color: "#22c55e", fontSize: "0.7rem", fontWeight: 700, marginBottom: "0.4rem", letterSpacing: "0.06em" }}>
                          AI STRENGTH
                        </div>
                        <p style={{ color: "#b0b0c0", fontSize: "0.82rem", lineHeight: 1.6, margin: 0 }}>
                          {pillar.aiStrength}
                        </p>
                      </div>
                      <div
                        style={{
                          background: "rgba(251,191,36,0.06)",
                          border: "1px solid rgba(251,191,36,0.15)",
                          borderRadius: 8,
                          padding: "0.75rem",
                        }}
                      >
                        <div style={{ color: "#fbbf24", fontSize: "0.7rem", fontWeight: 700, marginBottom: "0.4rem", letterSpacing: "0.06em" }}>
                          AI LIMIT
                        </div>
                        <p style={{ color: "#b0b0c0", fontSize: "0.82rem", lineHeight: 1.6, margin: 0 }}>
                          {pillar.aiLimit}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Comparison table */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#f5f0ff", marginBottom: "0.5rem" }}>
              AI life coach comparison: human coach vs generic AI vs MEOK
            </h2>
            <p style={{ color: "#b0b0c0", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Not all AI coaching is equal. Here&rsquo;s how the options stack up across the features that
              actually matter for long-term behaviour change.
            </p>

            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.875rem",
                }}
              >
                <thead>
                  <tr>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "0.75rem 1rem",
                        color: "#9ca3af",
                        fontWeight: 600,
                        borderBottom: "1px solid rgba(255,255,255,0.08)",
                        fontSize: "0.75rem",
                        letterSpacing: "0.06em",
                      }}
                    >
                      FEATURE
                    </th>
                    {["Human Coach", "Generic AI", "MEOK"].map((h) => (
                      <th
                        key={h}
                        style={{
                          padding: "0.75rem 1rem",
                          color: h === "MEOK" ? "#c084fc" : "#9ca3af",
                          fontWeight: 600,
                          borderBottom: "1px solid rgba(255,255,255,0.08)",
                          fontSize: "0.75rem",
                          letterSpacing: "0.06em",
                          textAlign: "center",
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr
                      key={row.feature}
                      style={{
                        background: i % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent",
                      }}
                    >
                      <td
                        style={{
                          padding: "0.75rem 1rem",
                          color: "#d0d0e0",
                          borderBottom: "1px solid rgba(255,255,255,0.04)",
                        }}
                      >
                        {row.feature}
                      </td>
                      {[row.human, row.genericAI, row.meok].map((val, idx) => (
                        <td
                          key={idx}
                          style={{
                            padding: "0.75rem 1rem",
                            textAlign: "center",
                            borderBottom: "1px solid rgba(255,255,255,0.04)",
                          }}
                        >
                          {val ? '✓' : (
                            <span style={{ color: "#4b5563", fontSize: "1rem" }}>✗</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* When AI wins */}
          <section style={{ marginBottom: "3rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              <div
                style={{
                  background: "rgba(34,197,94,0.06)",
                  border: "1px solid rgba(34,197,94,0.15)",
                  borderRadius: 12,
                  padding: "1.5rem",
                }}
              >
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#22c55e", marginBottom: "1rem" }}>
                  When AI coaching wins
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {WHEN_AI_WINS.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.5rem",
                        marginBottom: "0.6rem",
                        fontSize: "0.85rem",
                        color: "#b0b0c0",
                        lineHeight: 1.5,
                      }}
                    >
                      {'✓'}  
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  background: "rgba(251,191,36,0.06)",
                  border: "1px solid rgba(251,191,36,0.15)",
                  borderRadius: 12,
                  padding: "1.5rem",
                }}
              >
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#fbbf24", marginBottom: "1rem" }}>
                  When human coaching wins
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {WHEN_HUMAN_WINS.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.5rem",
                        marginBottom: "0.6rem",
                        fontSize: "0.85rem",
                        color: "#b0b0c0",
                        lineHeight: 1.5,
                      }}
                    >
                      ⚠️
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* The memory problem */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#f5f0ff", marginBottom: "1rem" }}>
              Why most AI coaching apps fail: the memory problem
            </h2>
            <p style={{ color: "#b0b0c0", lineHeight: 1.8, marginBottom: "1rem" }}>
              In a 2025 survey of 4,400 AI users, the most common complaint about AI coaching apps
              wasn&rsquo;t the quality of advice. It was that the AI kept forgetting them.
            </p>
            <p style={{ color: "#b0b0c0", lineHeight: 1.8, marginBottom: "1rem" }}>
              Every session started from scratch. Users had to re-explain their goals, re-establish
              context, re-earn the coach&rsquo;s understanding. That&rsquo;s not coaching. That&rsquo;s a very
              expensive onboarding loop.
            </p>
            <p style={{ color: "#b0b0c0", lineHeight: 1.8, marginBottom: "1rem" }}>
              The reason this happens is economic, not technical. Storing long-term memory costs money.
              Most AI products optimise for short sessions with high-volume users. They&rsquo;re not
              incentivised to remember you.
            </p>
            <p style={{ color: "#b0b0c0", lineHeight: 1.8 }}>
              MEOK was built to solve exactly this. Sovereign Memory stores every goal, insight,
              setback, and breakthrough — permanently, encrypted, never used to train other models.
              When you return after a month, your AI coach doesn&rsquo;t ask &ldquo;what were we working on?&rdquo;
              It says: &ldquo;You set three goals in February. You hit two of them. Want to talk about the third?&rdquo;
            </p>
          </section>

          {/* How to get started */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#f5f0ff", marginBottom: "1rem" }}>
              How to get started with an AI life coach
            </h2>
            <p style={{ color: "#b0b0c0", lineHeight: 1.8, marginBottom: "1rem" }}>
              The biggest mistake people make with AI coaching is treating it like a search engine.
              You type a goal, it gives you a list of tips, you close the app and do nothing.
            </p>
            <p style={{ color: "#b0b0c0", lineHeight: 1.8, marginBottom: "1rem" }}>
              Effective AI coaching requires commitment to the process:
            </p>
            <ol style={{ paddingLeft: "1.5rem", color: "#b0b0c0", lineHeight: 1.8 }}>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong style={{ color: "#e8e8e8" }}>Set one 90-day goal, not five.</strong> AI coaches
                are most effective when focused. Pick the goal that matters most and commit.
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong style={{ color: "#e8e8e8" }}>Check in daily — even if briefly.</strong> Two
                minutes a day compounds faster than one hour a week. Morning intention + evening review
                is the minimum viable coaching habit.
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong style={{ color: "#e8e8e8" }}>Be honest.</strong> Your AI coach can&rsquo;t see through
                you the way a human sometimes can. If you&rsquo;re not truthful, it will reflect your
                self-deception back at you.
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong style={{ color: "#e8e8e8" }}>Let it push back.</strong> Disable the urge to
                seek validation. Ask your AI to challenge your reasoning, not confirm it.
              </li>
              <li>
                <strong style={{ color: "#e8e8e8" }}>Review monthly.</strong> At the end of each month,
                ask your AI to summarise your progress, patterns, and what it has observed. This is where
                persistent memory pays off.
              </li>
            </ol>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#f5f0ff", marginBottom: "1.5rem" }}>
              Frequently asked questions about AI life coaching
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {jsonLd.mainEntity.map((faq) => (
                <div
                  key={faq.name}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 10,
                    padding: "1.25rem 1.5rem",
                  }}
                >
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#f5f0ff", marginBottom: "0.6rem" }}>
                    {faq.name}
                  </h3>
                  <p style={{ color: "#b0b0c0", lineHeight: 1.7, margin: 0, fontSize: "0.9rem" }}>
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section
            style={{
              background: "linear-gradient(135deg, rgba(139,92,246,0.12), rgba(192,132,252,0.06))",
              border: "1px solid rgba(139,92,246,0.25)",
              borderRadius: 16,
              padding: "2.5rem",
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#f5f0ff", marginBottom: "0.75rem" }}>
              Start your AI coaching journey
            </h2>
            <p style={{ color: "#b0b0c0", lineHeight: 1.7, marginBottom: "1.75rem", maxWidth: 520, margin: "0 auto 1.75rem" }}>
              50 messages a day. Permanent Sovereign Memory. An AI that actually remembers what you
              said last month — and holds you to it.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/birth"
                style={{
                  background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
                  color: "white",
                  padding: "0.875rem 2rem",
                  borderRadius: 8,
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                Begin Your Coaching Journey →
              </Link>
              <Link
                href="/pricing"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  color: "#e8e8e8",
                  padding: "0.875rem 2rem",
                  borderRadius: 8,
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                See Pricing
              </Link>
            </div>
          </section>

          {/* Related */}
          <section>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#9ca3af", marginBottom: "1rem", letterSpacing: "0.06em" }}>
              RELATED READING
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
              {[
                { href: "/blog/ai-for-burnout", label: "AI for Burnout Recovery" },
                { href: "/blog/ai-for-anxiety", label: "AI for Anxiety" },
                { href: "/blog/ai-journaling", label: "AI Journaling Guide" },
                { href: "/blog/cognitive-symbiosis", label: "Cognitive Symbiosis" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 8,
                    padding: "1rem",
                    textDecoration: "none",
                    color: "#c084fc",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </section>
        </article>

        
      </main>
    </>
  );
}
