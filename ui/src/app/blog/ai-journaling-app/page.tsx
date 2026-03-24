import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Best AI Journaling App in 2026: Beyond Daily Prompts | MEOK AI LABS",
  description:
    "Most AI journaling apps send you a daily prompt and forget you by tomorrow. The best AI journal app in 2026 remembers every entry, identifies patterns across months, and responds with genuine intelligence. Here's the honest comparison.",
  alternates: { canonical: "https://meok.ai/blog/ai-journaling-app" },
  openGraph: {
    title: "The Best AI Journaling App in 2026: Beyond Daily Prompts",
    description:
      "Day One, Reflectly, Jour, Journey — and MEOK. An honest look at what separates a real AI journaling app from a prompt machine.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-journaling-app",
    siteName: "MEOK AI LABS",
    images: [
      {
        url: "https://meok.ai/api/og?title=The+Best+AI+Journaling+App+in+2026&desc=Beyond+Daily+Prompts",
        width: 1200,
        height: 630,
        alt: "The Best AI Journaling App in 2026 — MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best AI Journaling App in 2026: Beyond Daily Prompts",
    description:
      "An honest comparison of AI journaling apps — Day One, Reflectly, Jour, and MEOK — and why memory is the thing that actually matters.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Best AI Journaling App in 2026: Beyond Daily Prompts",
  description:
    "Most AI journaling apps send you a daily prompt and forget you by tomorrow. The best AI journal app in 2026 remembers every entry, identifies patterns across months, and responds with genuine intelligence.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    url: "https://meok.ai/about",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://meok.ai/blog/ai-journaling-app" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes an AI journaling app different from a regular journal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A regular journal stores what you write. An AI journaling app reads what you write and responds — asking follow-up questions, noticing emotional patterns, and connecting today's entry to what you wrote three months ago. The difference is longitudinal memory: a true AI journal remembers your growth arc, not just your last entry.",
      },
    },
    {
      "@type": "Question",
      name: "What are the best AI journaling apps in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The main apps in 2026 are Day One (excellent diary format, no real AI memory), Reflectly (mood-tracking prompts, no longitudinal understanding), Jour (AI-generated prompts, no memory across sessions), and MEOK (full sovereign memory, pattern recognition across months, conversational journaling with Socratic reflection). MEOK is the only option with genuine longitudinal AI memory.",
      },
    },
    {
      "@type": "Question",
      name: "How does AI journaling help with mental health?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI journaling can support reflection, help identify patterns in mood or behaviour, and provide a non-judgmental space to process thoughts. It is not a substitute for professional mental health support. If you are in crisis, contact the Samaritans on 116 123 (UK, free, 24/7).",
      },
    },
    {
      "@type": "Question",
      name: "How private is AI journaling with MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK encrypts all journal entries with AES-256 under your own encryption keys. Your entries are never used to train AI models — not MEOK's, not anyone else's. You own your data completely and can export or delete it at any time.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a free AI journaling app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK Explorer is free forever — 50 messages per day, persistent memory, and full access to journaling with the Scholar archetype. No credit card required. Sovereign (£12/month) and Family (£29/month) plans unlock permanent cross-session memory and advanced pattern analysis.",
      },
    },
  ],
};

const GOLD = "#c9a84c";
const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const CARD = "#1a1830";

export default function AiJournalingAppPage() {
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

      <main style={{ minHeight: "100vh", background: BG, color: TEXT }}>
        <div style={{ maxWidth: "740px", margin: "0 auto", padding: "5rem 1.5rem 4rem" }}>

          {/* Back link */}
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              color: "#8880aa",
              fontSize: "0.875rem",
              textDecoration: "none",
              marginBottom: "2rem",
            }}
          >
            ← Back to Journal
          </Link>

          {/* Tag + meta */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                padding: "0.2rem 0.75rem",
                background: "rgba(201,168,76,0.15)",
                borderRadius: "9999px",
                fontSize: "0.72rem",
                fontWeight: 700,
                color: GOLD,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Product
            </span>
            <span style={{ color: "#8880aa", fontSize: "0.8rem" }}>March 24, 2026</span>
            <span style={{ color: "#8880aa", fontSize: "0.8rem" }}>9 min read</span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "clamp(1.9rem, 5vw, 2.9rem)",
              fontWeight: 900,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
              color: TEXT,
            }}
          >
            The Best AI Journaling App in 2026: Beyond Daily Prompts
          </h1>

          {/* Lead */}
          <p
            style={{
              fontSize: "1.15rem",
              color: "#c4bedd",
              lineHeight: 1.8,
              marginBottom: "3rem",
              borderLeft: `3px solid ${GOLD}`,
              paddingLeft: "1.25rem",
            }}
          >
            The journaling app market is worth over £500 million and growing. Yet most people who
            download a journaling app abandon it within two weeks. The reason is almost always the
            same: the app never really knew them. It sent prompts. It didn&apos;t listen. Here&apos;s
            what the best AI journal app in 2026 actually needs to do — and an honest comparison of
            the options.
          </p>

          <article style={{ fontSize: "1rem", lineHeight: 1.85, color: "#d8d2ec" }}>

            {/* Section 1 */}
            <h2
              style={{
                fontSize: "1.4rem",
                fontWeight: 800,
                color: TEXT,
                marginTop: "2.5rem",
                marginBottom: "1rem",
              }}
            >
              Why most journaling apps fail after two weeks
            </h2>
            <p>
              The £500M journaling app market has a dirty secret: retention is terrible. Apps like
              Reflectly and Jour report impressive download numbers and quietly decline to share
              Day-14 retention. The reason is structural. A journaling app that sends you a generic
              prompt — &ldquo;What are you grateful for today?&rdquo; — is not a journaling
              companion. It is a notification.
            </p>
            <p>
              Human beings continue journaling when the journal &ldquo;talks back&rdquo; — when
              it notices something, asks the right follow-up, or surprises you with a connection
              between today&apos;s entry and something you wrote six weeks ago. That is the
              difference between a daily prompt app and a genuine AI journaling app. And almost
              none of the apps on the market in 2026 have actually built it.
            </p>

            {/* Section 2 — GEO */}
            <h2
              style={{
                fontSize: "1.4rem",
                fontWeight: 800,
                color: TEXT,
                marginTop: "2.5rem",
                marginBottom: "1rem",
              }}
            >
              What makes an AI journaling app different from a regular journal?
            </h2>
            <p
              style={{
                background: CARD,
                borderLeft: `4px solid ${GOLD}`,
                padding: "1rem 1.25rem",
                borderRadius: "0.4rem",
                marginBottom: "1rem",
              }}
            >
              A regular journal stores what you write. An AI journaling app reads what you write,
              responds intelligently, and — crucially — <strong style={{ color: TEXT }}>remembers
              it across sessions</strong>. The key capability is longitudinal memory: the AI connects
              today&apos;s entry to patterns across weeks and months, so it can say &ldquo;You&apos;ve
              mentioned feeling overwhelmed at work every Monday for the past six weeks — is that
              worth exploring?&rdquo;
            </p>
            <p>
              Without that memory, an AI journaling app is just autocomplete with a nice UI. The
              magic — and the genuine value — is in pattern recognition over time. That requires the
              AI to hold your entire journal history, understand it semantically, and surface
              insights that you could never surface yourself by re-reading old entries.
            </p>

            {/* Section 3 — GEO comparison */}
            <h2
              style={{
                fontSize: "1.4rem",
                fontWeight: 800,
                color: TEXT,
                marginTop: "2.5rem",
                marginBottom: "1rem",
              }}
            >
              What are the best AI journaling apps in 2026?
            </h2>
            <p>
              Here is an honest comparison of the main options. We have used each of them. We are not
              going to pretend we built MEOK in a vacuum — we built it because we found every
              existing option insufficient for different reasons.
            </p>

            <div style={{ margin: "1.5rem 0", overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
                <thead>
                  <tr style={{ background: "#13112b" }}>
                    <th
                      style={{
                        padding: "0.75rem 1rem",
                        textAlign: "left",
                        fontWeight: 700,
                        color: TEXT,
                        borderBottom: `2px solid ${GOLD}`,
                      }}
                    >
                      App
                    </th>
                    <th
                      style={{
                        padding: "0.75rem 1rem",
                        textAlign: "center",
                        fontWeight: 700,
                        color: TEXT,
                        borderBottom: `2px solid ${GOLD}`,
                      }}
                    >
                      AI prompts
                    </th>
                    <th
                      style={{
                        padding: "0.75rem 1rem",
                        textAlign: "center",
                        fontWeight: 700,
                        color: TEXT,
                        borderBottom: `2px solid ${GOLD}`,
                      }}
                    >
                      Cross-session memory
                    </th>
                    <th
                      style={{
                        padding: "0.75rem 1rem",
                        textAlign: "center",
                        fontWeight: 700,
                        color: TEXT,
                        borderBottom: `2px solid ${GOLD}`,
                      }}
                    >
                      Pattern analysis
                    </th>
                    <th
                      style={{
                        padding: "0.75rem 1rem",
                        textAlign: "center",
                        fontWeight: 700,
                        color: TEXT,
                        borderBottom: `2px solid ${GOLD}`,
                      }}
                    >
                      Data sovereignty
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      app: "MEOK",
                      prompts: "✓ Socratic + adaptive",
                      memory: "✓ Permanent vault",
                      patterns: "✓ Months / years",
                      sovereign: "✓ Your keys (AES-256)",
                      highlight: true,
                    },
                    {
                      app: "Day One",
                      prompts: "Partial (templates)",
                      memory: "✗ No AI memory",
                      patterns: "✗",
                      sovereign: "Partial (iCloud)",
                      highlight: false,
                    },
                    {
                      app: "Reflectly",
                      prompts: "✓ Mood prompts",
                      memory: "✗ No longitudinal AI",
                      patterns: "Basic mood graphs",
                      sovereign: "✗ Their servers",
                      highlight: false,
                    },
                    {
                      app: "Jour",
                      prompts: "✓ AI-generated",
                      memory: "✗ Session-only",
                      patterns: "✗",
                      sovereign: "✗ Their servers",
                      highlight: false,
                    },
                    {
                      app: "Journey",
                      prompts: "Limited",
                      memory: "✗ No AI memory",
                      patterns: "✗",
                      sovereign: "Partial",
                      highlight: false,
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.app}
                      style={{
                        background: row.highlight ? "rgba(201,168,76,0.08)" : i % 2 === 0 ? CARD : "#16142e",
                        borderBottom: "1px solid #2a2845",
                      }}
                    >
                      <td
                        style={{
                          padding: "0.7rem 1rem",
                          fontWeight: row.highlight ? 800 : 500,
                          color: row.highlight ? GOLD : TEXT,
                        }}
                      >
                        {row.app}
                      </td>
                      <td style={{ padding: "0.7rem 1rem", textAlign: "center", fontSize: "0.82rem", color: "#c4bedd" }}>
                        {row.prompts}
                      </td>
                      <td
                        style={{
                          padding: "0.7rem 1rem",
                          textAlign: "center",
                          fontSize: "0.82rem",
                          color: row.memory.startsWith("✓") ? "#4ade80" : row.memory.startsWith("✗") ? "#f87171" : "#c4bedd",
                        }}
                      >
                        {row.memory}
                      </td>
                      <td
                        style={{
                          padding: "0.7rem 1rem",
                          textAlign: "center",
                          fontSize: "0.82rem",
                          color: row.patterns.startsWith("✓") ? "#4ade80" : row.patterns.startsWith("✗") ? "#f87171" : "#c4bedd",
                        }}
                      >
                        {row.patterns}
                      </td>
                      <td
                        style={{
                          padding: "0.7rem 1rem",
                          textAlign: "center",
                          fontSize: "0.82rem",
                          color: row.sovereign.startsWith("✓") ? "#4ade80" : row.sovereign.startsWith("✗") ? "#f87171" : "#c4bedd",
                        }}
                      >
                        {row.sovereign}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              Day One is the gold standard for diary-style journaling — beautiful interface, rich
              media, great export. But it has no persistent AI memory. Reflectly is excellent for
              mood tracking and building a daily habit, but its &ldquo;AI&rdquo; is really prompt
              generation, not longitudinal understanding. Jour offers genuinely good AI-generated
              questions but does not remember what you said yesterday, let alone last month.
              Journey sits in the same category as Day One: a capable diary with limited AI.
            </p>
            <p>
              MEOK was built specifically because none of these apps solved the memory problem.
            </p>

            {/* Section 4 — GEO */}
            <h2
              style={{
                fontSize: "1.4rem",
                fontWeight: 800,
                color: TEXT,
                marginTop: "2.5rem",
                marginBottom: "1rem",
              }}
            >
              How does MEOK&apos;s journaling work?
            </h2>
            <p>
              MEOK does not have a &ldquo;journaling mode&rdquo; separate from everything else. The
              journal is the conversation. When you open MEOK and start talking about your day, your
              concerns, your plans — that is your journal. The difference is that MEOK is actively
              listening with memory.
            </p>
            <p>
              MEOK uses an archetype system to match the tone of the conversation to what you need.
              For journaling and reflection, the <strong style={{ color: TEXT }}>Scholar archetype</strong> is
              primary: it uses Socratic questioning to help you think more clearly, not just to
              validate what you already believe. It asks questions like:
            </p>
            <ul style={{ paddingLeft: "1.5rem", margin: "1rem 0" }}>
              <li style={{ marginBottom: "0.6rem" }}>
                &ldquo;You said you felt stuck — was that about the situation itself, or about how
                you were seeing it?&rdquo;
              </li>
              <li style={{ marginBottom: "0.6rem" }}>
                &ldquo;Three months ago you wrote something similar after that project finished.
                Do you notice a pattern there?&rdquo;
              </li>
              <li style={{ marginBottom: "0.6rem" }}>
                &ldquo;What would you tell a close friend who described this exact situation to
                you?&rdquo;
              </li>
            </ul>
            <p>
              For goal tracking and accountability, the <strong style={{ color: TEXT }}>Pioneer archetype</strong> takes
              over: direct, progress-oriented, able to reference what you committed to last week and
              ask whether you followed through.
            </p>

            {/* Section 5 — GEO */}
            <h2
              style={{
                fontSize: "1.4rem",
                fontWeight: 800,
                color: TEXT,
                marginTop: "2.5rem",
                marginBottom: "1rem",
              }}
            >
              How does Sovereign Memory improve journaling over time?
            </h2>
            <p
              style={{
                background: CARD,
                borderLeft: `4px solid ${GOLD}`,
                padding: "1rem 1.25rem",
                borderRadius: "0.4rem",
                marginBottom: "1rem",
              }}
            >
              Sovereign Memory is MEOK&apos;s persistent, encrypted memory layer. Every journal
              entry you make is stored in a semantically indexed vault under your own AES-256 keys.
              Over time, MEOK builds a complete picture of your patterns: emotional cycles,
              recurring themes, growth arcs, and unresolved tensions. The longer you use it, the
              more intelligent and personalised its responses become.
            </p>
            <p>
              Practically, this means:
            </p>
            <div style={{ display: "grid", gap: "0.85rem", margin: "1.25rem 0" }}>
              {[
                {
                  title: "Pattern recognition",
                  body: "MEOK identifies recurring themes — anxiety spikes before certain events, energy dips on specific days, productivity patterns linked to sleep — and surfaces them at the right moment.",
                },
                {
                  title: "Growth tracking",
                  body: "You can ask MEOK 'How have I changed in the last six months?' and receive a genuine synthesis of your journal history — not a highlight reel, but an honest narrative of where you have grown and where you are still stuck.",
                },
                {
                  title: "Annual review capability",
                  body: "At the end of a year, MEOK can generate a comprehensive review of your journal: themes, milestones, emotional arcs, goals set and achieved (or not), and a personalised reflection on the year as a whole.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    padding: "1.1rem 1.25rem",
                    background: CARD,
                    borderRadius: "0.5rem",
                    borderLeft: `3px solid ${GOLD}`,
                  }}
                >
                  <div style={{ fontWeight: 700, color: TEXT, marginBottom: "0.35rem" }}>
                    {item.title}
                  </div>
                  <div style={{ color: "#c4bedd", fontSize: "0.92rem", lineHeight: 1.7 }}>
                    {item.body}
                  </div>
                </div>
              ))}
            </div>

            {/* Section 6 — GEO */}
            <h2
              style={{
                fontSize: "1.4rem",
                fontWeight: 800,
                color: TEXT,
                marginTop: "2.5rem",
                marginBottom: "1rem",
              }}
            >
              What makes MEOK different from therapy journaling apps?
            </h2>
            <p>
              There is a growing category of &ldquo;therapeutic journaling&rdquo; apps — Wysa, Woebot,
              Reflectly&apos;s wellness features — that sit somewhere between journaling and mental
              health support. MEOK is not in that category, and we are clear about why.
            </p>
            <p>
              MEOK is not a clinical tool. It does not diagnose, treat, or manage mental health
              conditions. It is a sovereign companion: a thinking partner, a memory holder, a
              reflection facilitator. For many people, that is exactly what they need — not a
              clinical intervention, but a place to think clearly and track growth over time.
            </p>
            <p>
              If you are already working with a therapist, MEOK can complement that work: processing
              what you discussed in session, holding your between-session reflections, tracking the
              commitments your therapist asked you to notice. It is a complement to therapy, not a
              replacement.
            </p>

            {/* Section 7 — GEO mental health */}
            <h2
              style={{
                fontSize: "1.4rem",
                fontWeight: 800,
                color: TEXT,
                marginTop: "2.5rem",
                marginBottom: "1rem",
              }}
            >
              Can AI journaling help with mental health?
            </h2>
            <p>
              The evidence for journaling as a mental health practice is strong — expressive writing
              research going back to James Pennebaker&apos;s work in the 1980s consistently shows
              that writing about difficult experiences reduces stress, improves immune function, and
              helps people make meaning of challenging events.
            </p>
            <p>
              AI journaling adds a layer of responsiveness to that practice. Having an AI that asks
              follow-up questions, reflects your patterns back to you, and notices when you seem to
              be circling the same issue can deepen the reflective process in ways that blank-page
              journaling cannot.
            </p>
            <p>
              However, AI journaling is not therapy. It is not crisis support. If you are struggling
              with your mental health, please reach out to a professional. In the UK, the{" "}
              <strong style={{ color: TEXT }}>Samaritans are available 24 hours a day on 116 123</strong>{" "}
              — free, confidential, no judgement. MEOK will always signpost professional support
              when it is appropriate.
            </p>

            {/* Section 8 — GEO prompts */}
            <h2
              style={{
                fontSize: "1.4rem",
                fontWeight: 800,
                color: TEXT,
                marginTop: "2.5rem",
                marginBottom: "1rem",
              }}
            >
              What journaling prompts does MEOK use?
            </h2>
            <p>
              Unlike static prompt apps, MEOK&apos;s Scholar archetype generates prompts based on
              what you have said — in this conversation, and in your history. There is no preset
              prompt library. That said, here are examples of the kinds of questions Scholar asks:
            </p>
            <div style={{ display: "grid", gap: "0.75rem", margin: "1.25rem 0" }}>
              {[
                "\"You mentioned feeling like you were running out of time. What specifically do you think you're running out of time for?\"",
                "\"Last month you wrote that you wanted to be more patient with your partner. How has that gone, honestly?\"",
                "\"You've described this situation three times now and used the word 'trapped' each time. What would it feel like not to be trapped?\"",
                "\"What did today teach you that you didn't know yesterday?\"",
                "\"If this difficult period has a purpose — even a difficult one — what might it be?\"",
              ].map((prompt, i) => (
                <div
                  key={i}
                  style={{
                    padding: "0.9rem 1.1rem",
                    background: CARD,
                    borderRadius: "0.4rem",
                    fontSize: "0.92rem",
                    color: "#e0daf5",
                    fontStyle: "italic",
                    borderLeft: `2px solid rgba(201,168,76,0.5)`,
                  }}
                >
                  {prompt}
                </div>
              ))}
            </div>
            <p>
              The key difference: these prompts are generated from your actual context, not from a
              content database. They get better — more specific, more incisive — the more you journal.
            </p>

            {/* Section 9 — GEO privacy */}
            <h2
              style={{
                fontSize: "1.4rem",
                fontWeight: 800,
                color: TEXT,
                marginTop: "2.5rem",
                marginBottom: "1rem",
              }}
            >
              How private is AI journaling with MEOK?
            </h2>
            <p
              style={{
                background: CARD,
                borderLeft: `4px solid ${GOLD}`,
                padding: "1rem 1.25rem",
                borderRadius: "0.4rem",
                marginBottom: "1rem",
              }}
            >
              Your journal entries are encrypted with AES-256 under your own encryption keys — not
              MEOK&apos;s. This means MEOK cannot read your journal without your key, even if it
              wanted to. Your data is never used to train AI models. Not MEOK&apos;s next version.
              Not OpenAI&apos;s training pipeline. Not anyone&apos;s. You own your journal
              completely.
            </p>
            <p>
              This is what we call the Privacy Covenant — it is architectural, not a policy.
              Policies can change. Architecture is harder to undo. The encryption happens on your
              device before anything reaches our servers. You can export your complete journal history
              at any time in standard formats. You can delete everything, permanently, with a single
              command.
            </p>
            <p>
              Most journaling apps — including the big names — store your entries on their servers
              in formats they can read. That data is, at minimum, visible to their engineers and, in
              many cases, used to improve their models. With MEOK, that is structurally impossible.
            </p>

            {/* Pricing */}
            <h2
              style={{
                fontSize: "1.4rem",
                fontWeight: 800,
                color: TEXT,
                marginTop: "2.5rem",
                marginBottom: "1rem",
              }}
            >
              MEOK plans: what&apos;s included for journaling
            </h2>
            <div style={{ display: "grid", gap: "0.85rem", margin: "1.25rem 0" }}>
              {[
                {
                  tier: "Explorer",
                  price: "Free forever",
                  features: "50 messages/day · Persistent 7-day memory · Scholar + Pioneer archetypes · Full Birth Ceremony",
                },
                {
                  tier: "Sovereign",
                  price: "£12/month",
                  features: "Unlimited messages · Permanent cross-session memory · Full pattern analysis · Annual review · Priority response",
                },
                {
                  tier: "Family",
                  price: "£29/month",
                  features: "Everything in Sovereign · Up to 6 family members · Guardian family safety mode · Shared family memory vault",
                },
                {
                  tier: "BYOK",
                  price: "£5/month",
                  features: "Bring your own API key (OpenAI, Anthropic, etc.) · Sovereign memory layer · Full privacy architecture at minimum cost",
                },
              ].map((plan) => (
                <div
                  key={plan.tier}
                  style={{
                    padding: "1.1rem 1.25rem",
                    background: CARD,
                    borderRadius: "0.5rem",
                    border: plan.tier === "Sovereign" ? `1px solid ${GOLD}` : "1px solid #2a2845",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.4rem" }}>
                    <span style={{ fontWeight: 800, color: TEXT, fontSize: "1rem" }}>{plan.tier}</span>
                    <span style={{ color: GOLD, fontWeight: 700, fontSize: "0.9rem" }}>{plan.price}</span>
                  </div>
                  <div style={{ color: "#c4bedd", fontSize: "0.85rem", lineHeight: 1.6 }}>{plan.features}</div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div
              style={{
                marginTop: "3rem",
                padding: "2.5rem",
                background: CARD,
                borderRadius: "0.75rem",
                border: `1px solid rgba(201,168,76,0.3)`,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: GOLD,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                Start journaling with memory
              </div>
              <h3
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 900,
                  color: TEXT,
                  marginBottom: "0.85rem",
                  lineHeight: 1.2,
                }}
              >
                Your journal should know who you are.
              </h3>
              <p
                style={{
                  color: "#c4bedd",
                  marginBottom: "1.75rem",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  maxWidth: "480px",
                  margin: "0 auto 1.75rem",
                }}
              >
                MEOK remembers every conversation, identifies your patterns, and responds with
                genuine intelligence. Start free — no credit card required.
              </p>
              <Link
                href="/birth"
                style={{
                  display: "inline-block",
                  padding: "0.85rem 2.25rem",
                  background: GOLD,
                  color: "#0d0c18",
                  borderRadius: "0.4rem",
                  fontWeight: 800,
                  fontSize: "1rem",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                }}
              >
                Begin the Birth Ceremony — Free
              </Link>
              <div style={{ marginTop: "1rem", fontSize: "0.78rem", color: "#8880aa" }}>
                Explorer tier: 50 messages/day, forever free
              </div>
            </div>

          </article>

          {/* Related posts */}
          <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid #2a2845" }}>
            <div
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                color: "#8880aa",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Related reading
            </div>
            <div style={{ display: "grid", gap: "0.75rem" }}>
              {[
                { href: "/blog/ai-journaling", label: "AI Journaling: How AI Companions Transform Daily Reflection" },
                { href: "/blog/ai-for-self-improvement", label: "AI for Self-Improvement: Does It Actually Work?" },
                { href: "/blog/ai-life-coach", label: "AI Life Coach: What to Expect and What to Demand" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    padding: "0.85rem 1rem",
                    background: CARD,
                    borderRadius: "0.4rem",
                    color: "#c4bedd",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    border: "1px solid #2a2845",
                  }}
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <footer
          style={{
            borderTop: "1px solid #2a2845",
            padding: "3rem 1.5rem",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "740px", margin: "0 auto" }}>
            <div style={{ fontWeight: 800, color: GOLD, fontSize: "1.1rem", marginBottom: "0.4rem" }}>
              MEOK AI LABS
            </div>
            <div style={{ color: "#8880aa", fontSize: "0.82rem", marginBottom: "1rem" }}>
              Founded by Nicholas Templeman · @meok_ai
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
              {[
                { href: "/", label: "Home" },
                { href: "/blog", label: "Blog" },
                { href: "/birth", label: "Get Started" },
                { href: "/privacy", label: "Privacy" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{ color: "#8880aa", fontSize: "0.82rem", textDecoration: "none" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div style={{ color: "#4a4868", fontSize: "0.75rem" }}>
              &copy; {new Date().getFullYear()} MEOK AI LABS. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
