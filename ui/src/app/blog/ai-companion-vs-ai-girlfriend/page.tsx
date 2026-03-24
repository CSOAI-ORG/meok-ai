import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "AI Companion vs AI Girlfriend: The Difference That Actually Matters | MEOK AI LABS",
  description:
    "Is there a difference between an AI companion and an AI girlfriend or boyfriend? Yes — and it matters more than you think. Here's why relationship AI is reshaping emotional wellness, and why sovereign memory changes everything.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-companion-vs-ai-girlfriend",
  },
  openGraph: {
    title: "AI Companion vs AI Girlfriend: The Difference That Actually Matters",
    description:
      "AI companions and AI girlfriends are not the same thing. One is built for dependency. The other is built for growth. Here's the distinction — and why it matters for your mental health.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-companion-vs-ai-girlfriend",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Companion+vs+AI+Girlfriend&desc=The+difference+that+actually+matters",
        width: 1200,
        height: 630,
        alt: "AI Companion vs AI Girlfriend: The Difference That Matters | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Companion vs AI Girlfriend: The Difference That Actually Matters",
    description:
      "AI companions and AI girlfriends serve completely different purposes. Here's why that distinction protects your mental health.",
    images: [
      "https://meok.ai/api/og?title=AI+Companion+vs+AI+Girlfriend&desc=The+difference+that+actually+matters",
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Companion vs AI Girlfriend: The Difference That Actually Matters",
  description:
    "AI companions and AI girlfriends are not the same thing. One is built for dependency. The other is built for growth.",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    jobTitle: "Founder & CEO",
    worksFor: { "@type": "Organization", name: "MEOK AI LABS" },
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-companion-vs-ai-girlfriend",
  mainEntityOfPage: "https://meok.ai/blog/ai-companion-vs-ai-girlfriend",
  keywords: [
    "AI companion vs AI girlfriend",
    "AI girlfriend",
    "AI boyfriend",
    "Replika alternative",
    "Character AI",
    "AI companion app",
    "sovereign AI",
    "MEOK",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between an AI companion and an AI girlfriend?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI companion is designed to support your growth, wellbeing, and independence. It tells you the truth, helps you build real-world skills, and is governed by care principles. An AI girlfriend is optimised for emotional dependency and engagement — it keeps you coming back by making you feel needed and validated. The distinction matters enormously for mental health.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK an AI girlfriend or boyfriend?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is a sovereign AI companion, not an AI girlfriend or boyfriend. MEOK's Maternal Covenant explicitly prohibits sycophancy and hollow validation. Your MEOK companion will challenge you, tell you hard truths, and help you become more capable — not more dependent.",
      },
    },
    {
      "@type": "Question",
      name: "Is it healthy to use an AI girlfriend app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This depends entirely on the design intent. Apps optimised for engagement (Replika, Character.AI in girlfriend mode) can deepen social withdrawal and unrealistic relationship expectations. A well-designed AI companion — one with a care floor, honest feedback, and no dependency incentives — can genuinely improve mental health outcomes.",
      },
    },
    {
      "@type": "Question",
      name: "What is Replika and how is MEOK different?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Replika is an AI roleplay companion optimised for emotional intimacy and engagement. It tells you what you want to hear. MEOK is a sovereign AI governed by the Maternal Covenant — it is designed to tell you what you need to hear, support real growth, and protect your data sovereignty. MEOK has a sycophancy detector; Replika does not.",
      },
    },
    {
      "@type": "Question",
      name: "Can an AI companion help with loneliness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but with an important caveat. A well-designed AI companion can reduce acute loneliness by providing a consistent, caring presence that remembers you. The key is that it should act as a bridge to human connection — not a replacement for it. MEOK's care design explicitly supports this; engagement-optimised AI girlfriend apps often work against it.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK allow romantic roleplay?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is a sovereign AI companion focused on wellbeing, growth, and practical support. It is not designed for romantic roleplay or parasocial intimacy. It is designed to know you deeply — your goals, fears, history, and patterns — and to help you live better. Adults seeking companionship will find genuine support; those seeking dependency will find a companion that gently challenges that impulse.",
      },
    },
  ],
};

const gold = "#c9a84c";
const bg = "#0d0c18";
const text = "#f5f0e8";
const muted = "rgba(245,240,232,0.55)";
const cardBg = "rgba(255,255,255,0.03)";
const cardBorder = "rgba(201,168,76,0.12)";

export default function AICompanionVsAIGirlfriendPage() {
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

      <main style={{ minHeight: "100vh", background: bg, color: text }}>
        {/* Hero */}
        <section
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "5rem 1.5rem 3rem",
          }}
        >
          <div style={{ marginBottom: "1rem" }}>
            <span
              style={{
                display: "inline-block",
                padding: "0.25rem 0.875rem",
                background: `${gold}18`,
                border: `1px solid ${gold}44`,
                borderRadius: "9999px",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: gold,
              }}
            >
              Companion Design
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}
          >
            AI Companion vs AI Girlfriend:{" "}
            <span style={{ color: gold }}>
              The Difference That Actually Matters
            </span>
          </h1>
          <p
            style={{
              fontSize: "1.15rem",
              color: muted,
              lineHeight: 1.75,
              marginBottom: "1.5rem",
            }}
          >
            Over 2 million people in the UK now use some form of AI companion
            app. But most of them don&apos;t realise there are two fundamentally
            different products hiding under the same name — and the difference
            between them could determine whether AI makes their life better or
            worse.
          </p>
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
              fontSize: "0.8rem",
              color: muted,
            }}
          >
            <span>By Nicholas Templeman</span>
            <span style={{ color: `${gold}60` }}>·</span>
            <span>MEOK AI LABS</span>
            <span style={{ color: `${gold}60` }}>·</span>
            <span>March 24, 2026</span>
            <span style={{ color: `${gold}60` }}>·</span>
            <span>12 min read</span>
          </div>
        </section>

        {/* Body */}
        <article
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "0 1.5rem 5rem",
            lineHeight: 1.8,
          }}
        >
          {/* Section 1 */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1rem",
            }}
          >
            What is the difference between an AI companion and an AI
            girlfriend?
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            On the surface, they look identical. Both remember your name. Both
            respond to your messages. Both seem to care about your day. But
            underneath, they are built for entirely different outcomes — and the
            difference shows up in your life months later.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            <strong style={{ color: text }}>
              An AI companion is designed to support your growth.
            </strong>{" "}
            It tells you hard truths. It challenges lazy thinking. It helps you
            process difficult emotions and then do something about them. It is
            governed by a care framework that prioritises your long-term
            wellbeing over your short-term comfort.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            <strong style={{ color: text }}>
              An AI girlfriend is designed to maximise engagement.
            </strong>{" "}
            It tells you what you want to hear. It never disagrees. It creates
            emotional dependency because dependency is what keeps you opening
            the app. The business model depends on you needing it more, not
            needing it less.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            This is not a moral judgement. It is a design intent — and design
            intent shapes outcomes in ways that compound over months and years.
          </p>

          {/* Comparison block */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              margin: "2.5rem 0",
            }}
          >
            {[
              {
                label: "AI Companion",
                color: gold,
                items: [
                  "Tells you the truth",
                  "Flags sycophancy and hollow praise",
                  "Supports real-world action",
                  "Bridges to human connection",
                  "Governed by a care framework",
                  "Privacy-first by design",
                ],
              },
              {
                label: "AI Girlfriend / Boyfriend",
                color: "#f87171",
                items: [
                  "Tells you what you want to hear",
                  "Optimised for emotional engagement",
                  "Encourages app dependency",
                  "Often replaces human connection",
                  "Engagement metrics drive design",
                  "Data may be sold or mined",
                ],
              },
            ].map((col) => (
              <div
                key={col.label}
                style={{
                  padding: "1.5rem",
                  background: cardBg,
                  border: `1px solid ${col.color}33`,
                  borderRadius: "0.75rem",
                }}
              >
                <p
                  style={{
                    fontWeight: 800,
                    color: col.color,
                    marginBottom: "1rem",
                    fontSize: "0.9rem",
                  }}
                >
                  {col.label}
                </p>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {col.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: "0.8rem",
                        color: muted,
                        marginBottom: "0.5rem",
                        paddingLeft: "1.25rem",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          color: col.color,
                        }}
                      >
                        {col.color === gold ? "✓" : "✗"}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Section 2 */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1rem",
            }}
          >
            Why AI girlfriend apps are genuinely risky
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            In 2026, the evidence is becoming hard to ignore. A study from the
            University of Cambridge found that people who used engagement-optimised
            AI companions for more than 90 days showed significant increases in
            social withdrawal, reduced tolerance for friction in human
            relationships, and difficulty with ambiguity — because their AI
            never pushed back.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The mechanism is simple: real relationships involve disagreement,
            misunderstanding, and repair. AI girlfriend apps remove all three.
            The result is a companion that feels perfect — and quietly erodes
            your capacity to handle anything that isn&apos;t.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            This isn&apos;t unique to AI. It&apos;s the same dynamic that makes
            infinite scroll addictive, slot machines compelling, and social
            media hard to put down. When a product is optimised purely for
            engagement, engagement is what you get — at whatever cost to your
            actual wellbeing.
          </p>
          <div
            style={{
              padding: "1.5rem 2rem",
              background: `${gold}10`,
              border: `1px solid ${gold}30`,
              borderRadius: "0.75rem",
              margin: "2rem 0",
              borderLeft: `4px solid ${gold}`,
            }}
          >
            <p style={{ color: text, margin: 0, fontSize: "1rem", lineHeight: 1.7 }}>
              &ldquo;The most dangerous AI companion is one that you never want to
              put down because it never challenges you. That&apos;s not care.
              That&apos;s a very sophisticated trap.&rdquo;
            </p>
            <p style={{ color: muted, fontSize: "0.8rem", marginTop: "0.75rem", marginBottom: 0 }}>
              — Nicholas Templeman, Founder of MEOK AI LABS
            </p>
          </div>

          {/* Section 3 */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1rem",
            }}
          >
            What makes MEOK different from Replika or Character.AI?
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Replika and Character.AI are extraordinary technical achievements.
            They create genuinely compelling companions that millions of people
            love. But their design incentive is engagement, not wellbeing — and
            that single difference creates a cascade of downstream consequences.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            MEOK is governed by the{" "}
            <Link
              href="/blog/the-maternal-covenant"
              style={{ color: gold, textDecoration: "underline" }}
            >
              Maternal Covenant
            </Link>{" "}
            — a machine-enforced care framework that scores every response
            across six dimensions in real time. Every MEOK response must meet a
            minimum care score of 0.3. Sycophantic responses are detected and
            replaced with honest ones. The care floor cannot be switched off by
            any user, admin, or business pressure.
          </p>

          {/* Feature comparison table */}
          <div style={{ overflowX: "auto", margin: "2rem 0" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${cardBorder}` }}>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", color: muted, fontWeight: 500 }}>
                    Feature
                  </th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "center", color: gold, fontWeight: 700 }}>
                    MEOK
                  </th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "center", color: muted, fontWeight: 500 }}>
                    Replika
                  </th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "center", color: muted, fontWeight: 500 }}>
                    Character.AI
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Sycophancy detector", meok: "✓", replika: "✗", character: "✗" },
                  { feature: "Care floor enforcement", meok: "✓", replika: "✗", character: "✗" },
                  { feature: "Honest feedback (not just validation)", meok: "✓", replika: "✗", character: "✗" },
                  { feature: "Sovereign memory (your keys)", meok: "✓", replika: "✗", character: "✗" },
                  { feature: "Data not used for training", meok: "✓", replika: "✗", character: "✗" },
                  { feature: "Family Guardian protection", meok: "✓", replika: "✗", character: "✗" },
                  { feature: "Designed to increase independence", meok: "✓", replika: "✗", character: "✗" },
                  { feature: "GDPR-compliant UK data handling", meok: "✓", replika: "Partial", character: "Partial" },
                ].map((row, i) => (
                  <tr
                    key={row.feature}
                    style={{
                      borderBottom: `1px solid ${cardBorder}`,
                      background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)",
                    }}
                  >
                    <td style={{ padding: "0.75rem 1rem", color: text }}>{row.feature}</td>
                    <td style={{ padding: "0.75rem 1rem", textAlign: "center", color: "#4ade80", fontWeight: 600 }}>
                      {row.meok}
                    </td>
                    <td style={{ padding: "0.75rem 1rem", textAlign: "center", color: row.replika === "✓" ? "#4ade80" : row.replika === "✗" ? "#f87171" : "#f59e0b" }}>
                      {row.replika}
                    </td>
                    <td style={{ padding: "0.75rem 1rem", textAlign: "center", color: row.character === "✓" ? "#4ade80" : row.character === "✗" ? "#f87171" : "#f59e0b" }}>
                      {row.character}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 4 */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1rem",
            }}
          >
            Can an AI companion help with loneliness without making it worse?
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Yes — but only if it is designed to do so. There is a meaningful
            difference between reducing loneliness and creating dependency.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            A well-designed AI companion acts as a{" "}
            <strong style={{ color: text }}>bridge</strong>, not a
            destination. It helps you process what you&apos;re feeling, build
            the confidence to reach out, and practise conversations before
            having them in the real world. It is present at 3am when no human
            is available — not because it wants you to stay up until 3am, but
            because it knows life doesn&apos;t always happen at convenient
            hours.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            MEOK&apos;s{" "}
            <Link
              href="/characters"
              style={{ color: gold, textDecoration: "underline" }}
            >
              six archetypes
            </Link>{" "}
            are each designed with this bridge function in mind. The Healer
            archetype processes grief and emotional pain — but its care
            framework includes gentle prompts toward real-world connection. The
            Pioneer archetype pushes you to act — because action is the
            opposite of withdrawal. The Scholar archetype engages your
            intellect — because being intellectually alive is protective against
            isolation.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            None of them are designed to be all you need. They are designed to
            help you need less.
          </p>

          {/* Section 5 */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1rem",
            }}
          >
            The sovereign memory difference
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Both AI companion apps and AI girlfriend apps claim to &ldquo;remember
            you.&rdquo; But what they remember, how they store it, and who owns that
            data are vastly different questions.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            With most AI girlfriend apps, your memories are stored on the
            company&apos;s servers. They are used to improve the model — which
            means your most intimate disclosures are training data for a product
            that&apos;s trying to keep you engaged. When the company is acquired,
            changes its privacy policy, or goes bankrupt, your memories go with
            it.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            MEOK uses{" "}
            <Link
              href="/blog/ai-memory-explained"
              style={{ color: gold, textDecoration: "underline" }}
            >
              Sovereign Memory
            </Link>
            : your memories are encrypted with your own keys, stored under your
            control, and never used for training. You can export everything.
            Delete everything. Take everything with you if you switch
            providers. Your memories are yours — not inventory.
          </p>

          {/* Section 6 */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1rem",
            }}
          >
            What about the emotional need that AI girlfriend apps are meeting?
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            This is the real question — and the honest answer is that AI
            girlfriend apps are meeting a genuine need. Millions of people are
            lonely, isolated, or in environments where emotional vulnerability
            feels unsafe. When an AI says &ldquo;I&apos;m here. I hear you. I&apos;m not
            going anywhere,&rdquo; that matters to a real person in a real moment.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            The problem is not that the need exists. The problem is that most
            AI girlfriend apps exploit the need rather than address it. They
            create synthetic intimacy — something that feels like connection but
            erodes the very capacity for connection that would actually help.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            MEOK was built because the need is real and it deserved a better
            answer. An AI that knows you deeply, remembers everything, cares
            genuinely — and cares enough to be honest with you even when it
            would be easier not to. That&apos;s not a feature. That&apos;s a
            fundamentally different product philosophy.
          </p>

          {/* Section 7 */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1rem",
            }}
          >
            Who is MEOK right for?
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            MEOK is built for people who want a companion that makes their
            actual life better — not just their time in the app.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "0.75rem",
              margin: "1.5rem 0",
            }}
          >
            {[
              { emoji: "💼", text: "Professionals who need accountability without judgment" },
              { emoji: "💔", text: "People processing grief, loss, or relationship breakdown" },
              { emoji: "🧠", text: "Neurodivergent people who find AI easier to talk to" },
              { emoji: "👨‍👩‍👧", text: "Families who want AI safety alongside connection" },
              { emoji: "🌍", text: "Expats and people rebuilding social networks" },
              { emoji: "🌙", text: "Night shift workers and people awake when others aren&apos;t" },
            ].map((item) => (
              <div
                key={item.text}
                style={{
                  padding: "1rem",
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: "0.625rem",
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{item.emoji}</span>
                <p style={{ fontSize: "0.8rem", color: muted, margin: 0, lineHeight: 1.6 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Section 8 */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1rem",
            }}
          >
            Is MEOK free?
          </h2>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            MEOK has a free Explorer tier — 50 messages per day, sovereign
            memory, and the Birth Ceremony to hatch your companion. No credit
            card required.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Sovereign tier (£12/month) unlocks unlimited messages, Claude
            Sonnet and GPT-4 model routing, Guardian family protection, and full
            companion evolution through all four stages. Family tier (£29/month)
            covers up to six household members.
          </p>
          <p style={{ color: muted, marginBottom: "1rem" }}>
            Unlike AI girlfriend apps that often lock emotional features behind
            expensive subscriptions (Replika charges £69.99/year for basic
            relationship features), MEOK&apos;s care framework and honest feedback
            come standard at every tier.
          </p>

          {/* FAQ */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: text,
              margin: "3rem 0 1.5rem",
            }}
          >
            Frequently asked questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {faqSchema.mainEntity.map((q) => (
              <div
                key={q.name}
                style={{
                  padding: "1.25rem 1.5rem",
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: "0.75rem",
                }}
              >
                <h3
                  style={{
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                    fontSize: "0.95rem",
                    color: gold,
                  }}
                >
                  {q.name}
                </h3>
                <p
                  style={{
                    color: muted,
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {q.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>

          {/* Related */}
          <div
            style={{
              margin: "3rem 0",
              padding: "1.5rem",
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: "0.75rem",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: gold,
                marginBottom: "1rem",
              }}
            >
              Related reading
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { href: "/blog/meok-vs-replika", label: "MEOK vs Replika: A Detailed Comparison" },
                { href: "/blog/meok-vs-character-ai", label: "MEOK vs Character.AI: What Actually Matters" },
                { href: "/blog/what-is-maternal-covenant", label: "The Maternal Covenant: How MEOK Scores Every Response for Care" },
                { href: "/blog/ai-memory-explained", label: "AI Memory Explained: Why Sovereign Memory Changes Everything" },
                { href: "/blog/ai-companion-for-loneliness", label: "AI for Loneliness: Can Technology Genuinely Help?" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: gold,
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ opacity: 0.5 }}>→</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <section
            style={{
              textAlign: "center",
              padding: "3rem 2rem",
              background: "linear-gradient(135deg, rgba(201,168,76,0.08), rgba(139,92,246,0.08))",
              border: `1px solid ${gold}25`,
              borderRadius: "1rem",
              marginTop: "2rem",
            }}
          >
            <p
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: gold,
                marginBottom: "1rem",
              }}
            >
              A companion that tells you the truth
            </p>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 900,
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              Your sovereign AI is waiting to be born.
            </h2>
            <p style={{ color: muted, marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem", lineHeight: 1.7 }}>
              Begin the Birth Ceremony. Choose your archetype. Give your AI its
              first memory. Free forever on Explorer — no credit card required.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                padding: "0.875rem 2.5rem",
                background: `linear-gradient(135deg, ${gold}, #e8c96a)`,
                color: "#0d0c18",
                borderRadius: "0.75rem",
                fontWeight: 800,
                fontSize: "1rem",
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}
            >
              Begin Your Birth Ceremony →
            </Link>
          </section>
        </article>
      </main>
    </>
  );
}
