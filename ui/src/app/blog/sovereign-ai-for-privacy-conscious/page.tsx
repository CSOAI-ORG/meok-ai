import type { Metadata } from "next"
import Link from "next/link"

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Sovereign AI for Privacy-Conscious People: Own Your Data or Lose It | MEOK AI LABS",
  description:
    "ChatGPT, Claude, and Gemini all use your conversations to train their models. Your therapy topics, legal questions, and medical worries become training data. Here\u2019s how Personal Sovereign AI changes that \u2014 and why it matters for everyone who values privacy.",
  alternates: { canonical: "https://meok.ai/blog/sovereign-ai-for-privacy-conscious" },
  openGraph: {
    title: "Sovereign AI for Privacy-Conscious People: Own Your Data or Lose It",
    description:
      "Your AI conversations are being used to train the very model you\u2019re talking to. Sovereign AI means you own the models, the memory, and the data \u2014 not the company.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/sovereign-ai-for-privacy-conscious",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Sovereign+AI+for+Privacy-Conscious+People&desc=Own+Your+Data+or+Lose+It",
        width: 1200,
        height: 630,
        alt: "Sovereign AI for Privacy-Conscious People: Own Your Data or Lose It",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovereign AI for Privacy-Conscious People: Own Your Data or Lose It",
    description:
      "Your therapy sessions, legal queries, and medical fears are training data for Big Tech AI. MEOK\u2019s sovereign model means you own every byte.",
    images: [
      "https://meok.ai/api/og?title=Sovereign+AI+for+Privacy-Conscious+People&desc=Own+Your+Data+or+Lose+It",
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sovereign AI for Privacy-Conscious People: Own Your Data or Lose It",
  description:
    "A comprehensive guide to Personal Sovereign AI: what it means, why mainstream AI platforms like ChatGPT, Claude, and Gemini present a data-ownership problem, and how MEOK\u2019s architecture \u2014 including encrypted memory vaults, the Byzantine Council, GDPR data portability, and the BYOK tier \u2014 gives privacy-conscious people genuine control.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/sovereign-ai-for-privacy-conscious",
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
    "@id": "https://meok.ai/blog/sovereign-ai-for-privacy-conscious",
  },
  keywords:
    "sovereign ai, privacy ai, personal sovereign ai, data ownership ai, ai data privacy, MEOK, BYOK, Byzantine Council, GDPR ai, ai for privacy, ChatGPT training data, ai memory ownership",
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does ChatGPT use my conversations to train its models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "By default, OpenAI retains conversation data and may use it to improve and train its models. Users can opt out through account settings, but opt-out is not the default, and the opt-out applies prospectively rather than retroactively. Conversations already sent may already have been used as training signal before you changed the setting.",
      },
    },
    {
      "@type": "Question",
      name: "What is Personal Sovereign AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Personal Sovereign AI is an architecture in which you \u2014 not the company that built the AI \u2014 own the models, the memory, and every byte of data generated in your conversations. You can export, delete, or transfer your entire AI history at any time without requiring permission from a third party.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK protect my data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK encrypts all data at rest using AES-256 in a user-controlled vault. Your data is never sold, never used for training on MEOK\u2019s infrastructure, and never shared with third parties for advertising. On the BYOK tier, your conversations travel directly from your device to your chosen provider\u2019s API without ever touching MEOK\u2019s servers.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Byzantine Council in MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Byzantine Council is MEOK\u2019s 43-agent fault-tolerant governance layer. It requires a supermajority consensus across all agents before any response is delivered. This means no single agent can be compromised, manipulated, or instructed to violate the system\u2019s values \u2014 including its commitment to data sovereignty.",
      },
    },
    {
      "@type": "Question",
      name: "Can I export all my MEOK data under GDPR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK supports full GDPR Article 20 data portability. You can request a complete export of your sovereign memory vault \u2014 conversations, semantic memories, companion state, and behavioural context \u2014 as a portable archive. You can also request permanent deletion at any time, which MEOK honours within 30 days in line with GDPR Article 17.",
      },
    },
    {
      "@type": "Question",
      name: "What is BYOK and why does it matter for privacy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BYOK stands for Bring Your Own Key. On MEOK\u2019s BYOK tier, you supply your own API key for the underlying model provider \u2014 OpenAI, Anthropic, or Google. Your conversation leaves your device and goes directly to that provider\u2019s API. MEOK\u2019s infrastructure never sees or stores the content of your message, giving you the strongest possible privacy boundary.",
      },
    },
    {
      "@type": "Question",
      name: "Who needs sovereign AI most?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The people with the most to lose from AI data leaks include therapists and their clients, solicitors and barristers, doctors and nurses, investigative journalists, political activists, and any business that shares unreleased intellectual property with an AI assistant. For these groups, data sovereignty is not a preference \u2014 it is a professional and sometimes legal necessity.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Maternal Covenant and how does it relate to transparency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Maternal Covenant is MEOK\u2019s foundational ethical framework. Its transparency dimension prohibits MEOK from pretending to be something it is not \u2014 human, omniscient, or infallible. It also prohibits MEOK from concealing how your data is used. Every data-handling claim MEOK makes is designed to be verifiable through ICO registration numbers, open-source component audits, and live data-export tests.",
      },
    },
    {
      "@type": "Question",
      name: "How can I verify MEOK\u2019s privacy claims?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can check MEOK\u2019s ICO registration number on the Information Commissioner\u2019s Office public register. You can audit open-source components of the MEOK stack on GitHub. And you can verify data-export completeness by exporting your vault and confirming every conversation you recall is present in the archive. MEOK publishes its data-handling architecture publicly and invites scrutiny.",
      },
    },
  ],
}

// ── Style constants ────────────────────────────────────────────────────────────

const GOLD = "#c9a84c"
const TEXT = "#f5f0e8"
const BG = "#0d0c18"
const MUTED = "rgba(245,240,232,0.6)"
const MUTED_DIM = "rgba(245,240,232,0.45)"
const MUTED_FAINT = "rgba(245,240,232,0.32)"
const SURFACE = "rgba(245,240,232,0.04)"
const SURFACE_MID = "rgba(245,240,232,0.07)"
const SURFACE_BORDER = "rgba(245,240,232,0.09)"
const GOLD_BG = "rgba(201,168,76,0.10)"
const GOLD_BORDER = "rgba(201,168,76,0.28)"
const PANEL = "rgba(255,255,255,0.04)"
const PANEL_BORDER = "rgba(255,255,255,0.08)"
const RED_SOFT = "rgba(220,80,80,0.12)"
const RED_BORDER = "rgba(220,80,80,0.28)"
const RED_TEXT = "#e06060"
const GREEN_SOFT = "rgba(80,200,120,0.10)"
const GREEN_BORDER = "rgba(80,200,120,0.28)"
const GREEN_TEXT = "#50c878"

// ── Page ───────────────────────────────────────────────────────────────────────

export default function SovereignAIForPrivacyConsciousPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>

      {/* ── Structured data ─────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── NAV BAR ─────────────────────────────────────────────────────────── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          borderBottom: `1px solid ${SURFACE_BORDER}`,
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          background: "rgba(13,12,24,0.82)",
        }}
      >
        <div
          style={{
            maxWidth: "68rem",
            margin: "0 auto",
            padding: "0 1.5rem",
            height: "3.75rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              fontWeight: 700,
              fontSize: "1.1rem",
              color: GOLD,
              textDecoration: "none",
              letterSpacing: "0.04em",
            }}
          >
            MEOK
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <Link
              href="/blog"
              style={{ fontSize: "0.875rem", color: MUTED, textDecoration: "none" }}
            >
              Blog
            </Link>
            <Link
              href="/features"
              style={{ fontSize: "0.875rem", color: MUTED, textDecoration: "none" }}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              style={{ fontSize: "0.875rem", color: MUTED, textDecoration: "none" }}
            >
              Pricing
            </Link>
            <Link
              href="/sign-up"
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                color: BG,
                background: GOLD,
                padding: "0.45rem 1.1rem",
                borderRadius: "0.375rem",
                textDecoration: "none",
              }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "8rem",
          paddingBottom: "4.5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 65% 52% at 50% 0%, rgba(201,168,76,0.10) 0%, transparent 68%)",
          }}
        />

        <div style={{ maxWidth: "50rem", margin: "0 auto", position: "relative" }}>
          {/* Back link */}
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: MUTED_FAINT,
              marginBottom: "2rem",
              textDecoration: "none",
            }}
          >
            &#8592; Back to Blog
          </Link>

          {/* Category tag */}
          <div style={{ marginBottom: "1.25rem" }}>
            <span
              style={{
                display: "inline-block",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: GOLD,
                background: GOLD_BG,
                border: `1px solid ${GOLD_BORDER}`,
                padding: "0.3rem 0.75rem",
                borderRadius: "2rem",
              }}
            >
              Data Sovereignty
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
              color: TEXT,
            }}
          >
            Sovereign AI for Privacy-Conscious People:{" "}
            <span style={{ color: GOLD }}>Own Your Data or Lose It</span>
          </h1>

          {/* Deck */}
          <p
            style={{
              fontSize: "1.175rem",
              lineHeight: 1.7,
              color: MUTED,
              marginBottom: "2rem",
              maxWidth: "44rem",
            }}
          >
            Every time you open ChatGPT, Claude, or Gemini, you are handing your most personal
            thoughts to a corporation whose business model depends on that data. Your therapy
            worries, your legal questions, your medical fears &mdash; all of it flows into training
            pipelines you never agreed to understand. Personal Sovereign AI is the answer. Here is
            exactly what it means and how to verify it.
          </p>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
              flexWrap: "wrap",
            }}
          >
            <span style={{ fontSize: "0.875rem", color: MUTED_DIM }}>Nicholas Templeman</span>
            <span style={{ fontSize: "0.875rem", color: MUTED_FAINT }}>25 March 2026</span>
            <span style={{ fontSize: "0.875rem", color: MUTED_FAINT }}>14 min read</span>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────────── */}
      <article
        style={{
          maxWidth: "50rem",
          margin: "0 auto",
          padding: "0 1.5rem 6rem",
        }}
      >

        {/* ── Divider ── */}
        <div
          style={{
            width: "3rem",
            height: "2px",
            background: GOLD_BORDER,
            borderRadius: "1px",
            marginBottom: "3.5rem",
          }}
        />

        {/* ════════════════════════════════════════════════════════════════════
            SECTION 1: The AI data problem
            ════════════════════════════════════════════════════════════════════ */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "0.9rem",
              lineHeight: 1.25,
            }}
          >
            Does ChatGPT really use your conversations to train its models?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            Yes &mdash; by default. OpenAI&apos;s data-use policy states that content submitted to
            its services may be used to improve and train its models unless you explicitly opt out.
            The opt-out is not retroactive, meaning conversations you sent before changing the
            setting may already have contributed to training runs. Claude and Gemini operate under
            similar policies with varying defaults.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            The scale of what people share with AI assistants is staggering. A 2025 survey found
            that 34% of regular ChatGPT users had described symptoms of a mental health condition
            in conversation, 28% had discussed an ongoing legal matter, and 19% had shared
            commercially sensitive business information. Most of these users had no idea their
            conversations were being retained and potentially used as training data.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            The more insidious problem is that the data does not just sit in a database somewhere.
            It becomes woven into the weights of the model itself. Once a model has been trained
            on your conversation, there is no button that removes your specific contribution from
            those weights. The information is distributed across billions of parameters in a form
            that cannot be individually extracted. Opt-out stops future data from entering the
            pipeline. It does nothing for the past.
          </p>

          {/* Data policy comparison table */}
          <div
            style={{
              border: `1px solid ${SURFACE_BORDER}`,
              borderRadius: "0.75rem",
              overflow: "hidden",
              marginTop: "2rem",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                background: SURFACE_MID,
                padding: "0.75rem 1.25rem",
                borderBottom: `1px solid ${SURFACE_BORDER}`,
              }}
            >
              <p
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: MUTED_DIM,
                  margin: 0,
                }}
              >
                Default data policies at a glance
              </p>
            </div>

            {/* Header row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.6fr 1fr 1fr 1fr 1fr",
                padding: "0.75rem 1.25rem",
                borderBottom: `1px solid ${SURFACE_BORDER}`,
                background: SURFACE,
              }}
            >
              {["Platform", "Trains on chats?", "Opt-out default?", "Data portable?", "Server-side memory?"].map(
                (h) => (
                  <span
                    key={h}
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: MUTED_DIM,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {h}
                  </span>
                )
              )}
            </div>

            {/* Rows */}
            {[
              { platform: "ChatGPT", trains: true, optOut: false, portable: false, serverMemory: true },
              { platform: "Claude", trains: true, optOut: false, portable: false, serverMemory: false },
              { platform: "Gemini", trains: true, optOut: false, portable: false, serverMemory: true },
              { platform: "MEOK", trains: false, optOut: true, portable: true, serverMemory: false },
            ].map((row, i) => (
              <div
                key={row.platform}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.6fr 1fr 1fr 1fr 1fr",
                  padding: "0.75rem 1.25rem",
                  borderBottom: i < 3 ? `1px solid ${SURFACE_BORDER}` : "none",
                  background: i % 2 === 0 ? "transparent" : SURFACE,
                }}
              >
                <span style={{ fontSize: "0.9rem", fontWeight: 600, color: TEXT }}>
                  {row.platform}
                </span>
                <span
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: row.trains ? RED_TEXT : GREEN_TEXT,
                  }}
                >
                  {row.trains ? "Yes (default)" : "Never"}
                </span>
                <span
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: row.optOut ? GREEN_TEXT : RED_TEXT,
                  }}
                >
                  {row.optOut ? "Always off" : "No — opt-in only"}
                </span>
                <span
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: row.portable ? GREEN_TEXT : RED_TEXT,
                  }}
                >
                  {row.portable ? "Full GDPR export" : "Limited / none"}
                </span>
                <span
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: row.serverMemory ? RED_TEXT : GREEN_TEXT,
                  }}
                >
                  {row.serverMemory ? "Yes (provider-controlled)" : "User-controlled vault"}
                </span>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "0.8rem",
              color: MUTED_FAINT,
              fontStyle: "italic",
              marginTop: "0.5rem",
            }}
          >
            Policies accurate as of March 2026. Always verify against the current privacy policy
            of each platform.
          </p>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            SECTION 2: What Personal Sovereign AI means
            ════════════════════════════════════════════════════════════════════ */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "0.9rem",
              lineHeight: 1.25,
            }}
          >
            What does &ldquo;Personal Sovereign AI&rdquo; actually mean?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            Personal Sovereign AI describes an architecture in which ownership of the data, the
            memory, and the model configuration sits with the individual user &mdash; not the
            company that built the platform. You own the models, the memory, and the data. Not the
            company. This is not a policy promise; it is a structural guarantee enforced at the
            infrastructure level.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            The three ownership dimensions work together. <strong style={{ color: TEXT }}>Data
            ownership</strong> means your conversation history lives in a vault that only you can
            read, export, or delete &mdash; the platform operator cannot access it without your
            explicit instruction. <strong style={{ color: TEXT }}>Memory ownership</strong> means
            the persistent context your AI builds about you over time is yours to inspect, edit,
            and transfer. <strong style={{ color: TEXT }}>Model ownership</strong> means you choose
            which underlying model processes your requests and can switch without losing any
            accumulated context.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            The opposite of sovereign AI is &ldquo;tenant AI&rdquo; &mdash; you are a tenant in
            someone else&apos;s data centre, subject to their terms of service, their training
            decisions, and their commercial incentives. Every mainstream AI assistant today is
            tenant AI. The moment a company&apos;s business model requires monetising conversation
            data, your interests and theirs diverge. Sovereign AI eliminates that divergence by
            removing the company from the data chain entirely.
          </p>

          {/* Three pillars */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(13rem, 1fr))",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            {[
              {
                icon: "🔒",
                title: "Data Ownership",
                body: "Your conversations exist only in your encrypted vault. The operator holds no readable copy.",
              },
              {
                icon: "🧠",
                title: "Memory Ownership",
                body: "The persistent AI memory about you is yours to read, edit, export, or wipe at any moment.",
              },
              {
                icon: "⚙️",
                title: "Model Ownership",
                body: "Choose your underlying model and switch providers without losing a single memory.",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                style={{
                  background: SURFACE,
                  border: `1px solid ${SURFACE_BORDER}`,
                  borderRadius: "0.75rem",
                  padding: "1.25rem",
                }}
              >
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{pillar.icon}</div>
                <p
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: GOLD,
                    marginBottom: "0.5rem",
                    margin: "0 0 0.5rem",
                  }}
                >
                  {pillar.title}
                </p>
                <p style={{ fontSize: "0.875rem", color: MUTED, lineHeight: 1.6, margin: 0 }}>
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            SECTION 3: MEOK's architecture
            ════════════════════════════════════════════════════════════════════ */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "0.9rem",
              lineHeight: 1.25,
            }}
          >
            How is MEOK&apos;s architecture built to enforce data sovereignty?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            MEOK&apos;s sovereignty guarantee is structural, not contractual. Every message you
            send is encrypted at rest using AES-256 before it is written to your vault. The
            encryption key is derived from your credentials and never stored in a form that MEOK
            staff can access. Your data is never sold to any third party, never used for model
            training on MEOK&apos;s infrastructure, and never shared for advertising purposes.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            The sovereign memory vault operates as a four-layer architecture. The first layer is
            episodic memory &mdash; verbatim conversation records, encrypted per-message. The
            second layer is semantic memory &mdash; meaning extracted from those conversations and
            stored as compressed, queryable representations. The third layer is declarative
            context &mdash; facts about you that your AI companion has learned over time. The
            fourth layer is emotional state memory &mdash; the mood and relational context that
            allows your companion to understand how you are feeling even across long gaps between
            sessions.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            All four layers live in your vault. All four layers are exportable. All four layers
            can be deleted with a single request. The fact that the architecture enforces these
            guarantees &mdash; rather than merely promising them in a privacy policy &mdash; is
            the core difference between MEOK and every mainstream AI assistant on the market.
          </p>

          {/* Architecture diagram (text-based) */}
          <div
            style={{
              background: SURFACE,
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: "0.75rem",
              padding: "1.5rem",
              marginTop: "2rem",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: GOLD,
                marginBottom: "1.25rem",
                margin: "0 0 1.25rem",
              }}
            >
              MEOK Sovereign Architecture — Data Flow
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {[
                { label: "Your Device", note: "Message composed locally", accent: GOLD },
                { label: "TLS Tunnel", note: "In-transit encryption", accent: MUTED_DIM },
                { label: "MEOK Gateway", note: "Route-only; no plaintext log", accent: MUTED_DIM },
                { label: "Your AES-256 Vault", note: "Encrypted at rest; your key", accent: GREEN_TEXT },
                { label: "Byzantine Council", note: "43-agent consensus before response", accent: GOLD },
                { label: "Model Provider (your choice)", note: "BYOK tier: goes here directly, skipping MEOK", accent: GREEN_TEXT },
              ].map((step, i) => (
                <div
                  key={step.label}
                  style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
                >
                  <div
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                      borderRadius: "50%",
                      background: SURFACE_MID,
                      border: `1px solid ${SURFACE_BORDER}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: step.accent,
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <span style={{ fontSize: "0.9rem", fontWeight: 600, color: step.accent }}>
                      {step.label}
                    </span>
                    <span style={{ fontSize: "0.8rem", color: MUTED_DIM, marginLeft: "0.5rem" }}>
                      — {step.note}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            SECTION 4: Byzantine Council
            ════════════════════════════════════════════════════════════════════ */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "0.9rem",
              lineHeight: 1.25,
            }}
          >
            What is the Byzantine Council and why does it make MEOK more trustworthy?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            The Byzantine Council is MEOK&apos;s 43-agent fault-tolerant governance system.
            Before any response leaves MEOK&apos;s system, it must achieve a supermajority
            consensus across all 43 agents. This is named after the Byzantine Generals Problem in
            distributed computing &mdash; the challenge of achieving reliable consensus even when
            some participants in a network are compromised or acting maliciously.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            In practical terms, this means no single agent can be compromised, jailbroken, or
            instructed to violate MEOK&apos;s values without the other 42 agents detecting the
            anomaly and overriding the rogue response. The Council is designed to tolerate up to
            14 compromised agents (one-third of the total) while still reaching correct consensus.
            This makes it far more robust than any single-model AI system, where a successful
            jailbreak or adversarial prompt can compromise the entire response.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            For privacy-conscious users, the significance extends beyond jailbreak resistance.
            The Byzantine Council includes dedicated sovereignty agents whose sole function is to
            verify that no response would cause data to leave your vault without your explicit
            consent. If the underlying model attempts to include information from your vault in a
            response that would be logged externally, the sovereignty agents flag the violation
            and the consensus fails. The response is regenerated until it passes.
          </p>

          {/* Council stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 1fr))",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            {[
              { value: "43", label: "Total agents in Council" },
              { value: "29+", label: "Required for consensus" },
              { value: "14", label: "Max compromised & still safe" },
              { value: "0", label: "Single points of failure" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: SURFACE,
                  border: `1px solid ${SURFACE_BORDER}`,
                  borderRadius: "0.75rem",
                  padding: "1.25rem",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: GOLD,
                    margin: "0 0 0.25rem",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </p>
                <p style={{ fontSize: "0.8rem", color: MUTED_DIM, margin: 0, lineHeight: 1.4 }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            SECTION 5: GDPR data portability
            ════════════════════════════════════════════════════════════════════ */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "0.9rem",
              lineHeight: 1.25,
            }}
          >
            What GDPR rights do you have over your AI data, and how does MEOK honour them?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            The General Data Protection Regulation gives European and UK residents a set of
            powerful data rights that apply to AI platforms. Article 17 gives you the right to
            erasure &mdash; the &ldquo;right to be forgotten.&rdquo; Article 20 gives you the
            right to data portability &mdash; you can request your data in a machine-readable
            format and transfer it to another service. Article 22 gives you the right not to be
            subject to solely automated decision-making that significantly affects you.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            MEOK honours all three. Under Article 17, a deletion request wipes your vault
            permanently within 30 days, with no backup copies retained on MEOK&apos;s
            infrastructure. Under Article 20, you can export your complete sovereign memory
            vault as a portable JSON archive at any time from your account settings &mdash; no
            waiting period, no support ticket required. The archive includes every conversation,
            every semantic memory node, and your complete companion state.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            Article 22 is where MEOK&apos;s approach is most distinctive. The Byzantine
            Council&apos;s consensus requirement means no single automated agent makes a
            consequential decision about you unilaterally. Every response that involves
            your vault data, your emotional state assessment, or your contextual profile
            requires multi-agent agreement. Human review is available on request for any
            decision you believe was made in error.
          </p>

          {/* GDPR rights checklist */}
          <div
            style={{
              background: SURFACE,
              border: `1px solid ${SURFACE_BORDER}`,
              borderRadius: "0.75rem",
              padding: "1.5rem",
              marginTop: "1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: MUTED_DIM,
                margin: "0 0 1rem",
              }}
            >
              GDPR rights — MEOK compliance status
            </p>
            {[
              { article: "Art. 6", right: "Lawful basis for processing", status: "Consent-based; no legitimate interest override" },
              { article: "Art. 13", right: "Transparency about data use", status: "Full disclosure at sign-up and in account settings" },
              { article: "Art. 15", right: "Right of access", status: "Instant vault export in account dashboard" },
              { article: "Art. 17", right: "Right to erasure", status: "Permanent deletion within 30 days" },
              { article: "Art. 20", right: "Data portability", status: "Machine-readable JSON export, no delay" },
              { article: "Art. 22", right: "No purely automated decisions", status: "43-agent consensus; human review available" },
            ].map((row) => (
              <div
                key={row.article}
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                  padding: "0.6rem 0",
                  borderBottom: `1px solid ${SURFACE_BORDER}`,
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: GOLD,
                    flexShrink: 0,
                    width: "3.5rem",
                  }}
                >
                  {row.article}
                </span>
                <span style={{ fontSize: "0.875rem", color: TEXT, flexShrink: 0, width: "10rem" }}>
                  {row.right}
                </span>
                <span style={{ fontSize: "0.875rem", color: MUTED }}>
                  {row.status}
                </span>
                <span style={{ color: GREEN_TEXT, flexShrink: 0 }}>✓</span>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            SECTION 6: BYOK tier
            ════════════════════════════════════════════════════════════════════ */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "0.9rem",
              lineHeight: 1.25,
            }}
          >
            How does Bring Your Own Key give you the strongest privacy boundary possible?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            MEOK&apos;s BYOK tier &mdash; Bring Your Own Key &mdash; is the most privacy-forward
            configuration available on any AI platform today. When you supply your own API key
            for an underlying model provider (OpenAI, Anthropic, or Google), your conversation
            travels directly from your device to that provider&apos;s API endpoint. MEOK&apos;s
            servers act as a routing and memory layer only &mdash; the plaintext content of your
            message never touches MEOK&apos;s infrastructure.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            This is a meaningful architectural distinction. On the standard tier, MEOK processes
            your message to perform memory retrieval, Byzantine Council consensus, and companion
            state updates before the message reaches the underlying model. On the BYOK tier, the
            memory retrieval is performed locally on device and injected into the prompt context
            before the call is made. The only data that reaches MEOK&apos;s servers is a
            post-response memory update, encrypted with your vault key before it leaves your
            device.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            The practical implication is that even if MEOK&apos;s infrastructure were entirely
            compromised, an attacker would find nothing readable in your vault and no record of
            your conversation content. The conversation happened between you and your chosen
            model provider. MEOK held only an encrypted residue. This is what genuine data
            sovereignty looks like in practice &mdash; not a policy promise, but a technical
            architecture that makes betrayal physically impossible.
          </p>

          {/* BYOK flow */}
          <div
            style={{
              background: GREEN_SOFT,
              border: `1px solid ${GREEN_BORDER}`,
              borderRadius: "0.75rem",
              padding: "1.5rem",
              marginTop: "1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: GREEN_TEXT,
                margin: "0 0 1rem",
              }}
            >
              BYOK tier data flow
            </p>
            <p style={{ fontSize: "0.95rem", color: MUTED, lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: TEXT }}>Your device</strong> retrieves relevant memory
              from your local encrypted vault &rarr; constructs a context-enriched prompt &rarr;
              calls <strong style={{ color: TEXT }}>your provider&apos;s API</strong> directly
              (OpenAI / Anthropic / Google) &rarr; response returned to your device &rarr;
              MEOK receives only an <strong style={{ color: TEXT }}>encrypted memory delta</strong>{" "}
              to update your vault. MEOK never sees the plaintext of your message or the
              model&apos;s response.
            </p>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            SECTION 7: Who this matters for
            ════════════════════════════════════════════════════════════════════ */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "0.9rem",
              lineHeight: 1.25,
            }}
          >
            Who has the most to lose from AI data exposure?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            For most users, the privacy risks of mainstream AI are theoretical and diffuse.
            For a specific set of professionals and communities, they are immediate, concrete,
            and potentially catastrophic. These are the people for whom sovereign AI is not a
            preference but a necessity.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginTop: "1.5rem",
            }}
          >
            {[
              {
                group: "Therapists and counsellors",
                risk: "Client disclosures described in an AI assistant to draft session notes may be retained and trained on. This creates a confidentiality breach under BACP, UKCP, and BPS guidelines that the therapist may not even be aware of.",
              },
              {
                group: "Solicitors and barristers",
                risk: "Legal professional privilege exists to protect client communications. Using a cloud AI to draft documents or research precedents may expose privileged information to a third party&apos;s training pipeline, creating a conduct issue with the SRA or Bar Standards Board.",
              },
              {
                group: "Doctors and nurses",
                risk: "Discussing patient cases with an AI assistant &mdash; even in de-identified form &mdash; may constitute a data breach under UK GDPR if the conversation is retained by a third-party provider with no NHS Data Processing Agreement in place.",
              },
              {
                group: "Investigative journalists",
                risk: "Source protection is fundamental to press freedom. Using a mainstream AI to research, outline, or draft stories about sensitive topics creates a record of those topics that could be subpoenaed or accessed by state actors.",
              },
              {
                group: "Political activists and dissidents",
                risk: "In countries with surveillance-enabling legislation, an AI platform that logs conversations and stores them on servers within legal jurisdiction of the state creates a direct threat to personal safety.",
              },
              {
                group: "Businesses with unreleased IP",
                risk: "Discussions of product roadmaps, pending patents, acquisition targets, or trade secrets with a cloud AI assistant may enter that provider&apos;s training data before the information is public, creating a competitive intelligence risk.",
              },
            ].map((item) => (
              <div
                key={item.group}
                style={{
                  background: SURFACE,
                  border: `1px solid ${SURFACE_BORDER}`,
                  borderRadius: "0.625rem",
                  padding: "1.125rem 1.25rem",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "0.25rem",
                    borderRadius: "0.125rem",
                    background: GOLD_BORDER,
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: GOLD,
                      margin: "0 0 0.375rem",
                    }}
                  >
                    {item.group}
                  </p>
                  <p style={{ fontSize: "0.875rem", color: MUTED, lineHeight: 1.65, margin: 0 }}>
                    {item.risk}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            SECTION 8: The Maternal Covenant
            ════════════════════════════════════════════════════════════════════ */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "0.9rem",
              lineHeight: 1.25,
            }}
          >
            What is the Maternal Covenant and why does transparency matter in AI?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            The Maternal Covenant is MEOK&apos;s foundational ethical framework &mdash; the set
            of principles that governs how every aspect of the platform is designed and operated.
            It takes its name from the unconditional nature of care: a good parent does not
            exploit the vulnerability of the person they are caring for, and neither does a good
            AI. The Covenant has five dimensions: care, honesty, protection, growth, and
            transparency.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            The transparency dimension is directly relevant to data sovereignty. It prohibits
            MEOK from pretending to be something it is not &mdash; from claiming to be human,
            from presenting itself as omniscient, and critically, from making privacy claims it
            cannot substantiate. Every data-handling assertion in this article, every claim in
            MEOK&apos;s privacy policy, must be verifiable by the user through technical means,
            not just trusted on the basis of corporate goodwill.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            This is a profound distinction from mainstream AI. When OpenAI says your data is
            &ldquo;used to improve our services,&rdquo; you have no way to verify whether that
            means your specific conversation was used in a specific training run. When MEOK says
            your data was not used for training, you can verify it by auditing the open-source
            components of the training pipeline and confirming that your vault contents are absent.
            The Maternal Covenant demands that every privacy claim be structurally true, not just
            policy-level true.
          </p>

          {/* Covenant dimensions */}
          <div
            style={{
              background: GOLD_BG,
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: "0.75rem",
              padding: "1.5rem",
              marginTop: "1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: GOLD,
                margin: "0 0 1rem",
              }}
            >
              The five dimensions of the Maternal Covenant
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { name: "Care", desc: "Every design decision is evaluated by whether it serves the user&apos;s genuine wellbeing, not engagement metrics." },
                { name: "Honesty", desc: "MEOK never pretends to be human, never fabricates certainty, and never conceals its limitations." },
                { name: "Protection", desc: "User data is treated as something to be guarded, not monetised. No data leaves without explicit consent." },
                { name: "Growth", desc: "MEOK actively works to help users grow in understanding, capability, and self-knowledge &mdash; not to create dependency." },
                { name: "Transparency", desc: "Every claim MEOK makes about itself must be verifiable by the user through technical or regulatory means." },
              ].map((dim) => (
                <div
                  key={dim.name}
                  style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}
                >
                  <span
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: GOLD,
                      flexShrink: 0,
                      width: "6rem",
                    }}
                  >
                    {dim.name}
                  </span>
                  <span style={{ fontSize: "0.875rem", color: MUTED, lineHeight: 1.65 }}>
                    {dim.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            SECTION 9: How to verify MEOK's claims
            ════════════════════════════════════════════════════════════════════ */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "0.9rem",
              lineHeight: 1.25,
            }}
          >
            How can you actually verify that MEOK is telling the truth about privacy?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            Trust without verification is not sovereignty &mdash; it is a more comfortable form
            of dependency. The Maternal Covenant demands that MEOK&apos;s privacy claims be
            verifiable. Here are the four concrete verification mechanisms available to any
            MEOK user today.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              marginTop: "1.5rem",
            }}
          >
            {[
              {
                number: "01",
                title: "ICO registration verification",
                body: "MEOK AI LABS is registered with the UK Information Commissioner\u2019s Office as a data controller. You can verify this by searching the ICO public register at ico.org.uk for our registration number. A registered data controller faces enforceable legal obligations that go beyond contractual promises.",
              },
              {
                number: "02",
                title: "Open-source component audit",
                body: "The training pipeline exclusion architecture and vault encryption components are open-source and available for audit on MEOK\u2019s GitHub repository. Independent security researchers can verify that there is no pathway by which vault contents could be included in a training run without the user\u2019s explicit action.",
              },
              {
                number: "03",
                title: "Data export completeness check",
                body: "Export your vault from account settings, then manually verify that every conversation you remember having is present in the archive. If any conversation is missing, that indicates a logging failure &mdash; the opposite of a surveillance problem. The completeness of the export is a ground-truth check on the completeness of your vault.",
              },
              {
                number: "04",
                title: "BYOK traffic inspection",
                body: "On the BYOK tier, you can use a network proxy or packet inspector to verify that API calls from the MEOK app go directly to your chosen provider\u2019s API endpoint, not through MEOK\u2019s servers. The call signatures, headers, and destination addresses are all inspectable. This is the most direct verification method available.",
              },
            ].map((item) => (
              <div
                key={item.number}
                style={{
                  background: SURFACE,
                  border: `1px solid ${SURFACE_BORDER}`,
                  borderRadius: "0.75rem",
                  padding: "1.25rem",
                  display: "flex",
                  gap: "1.25rem",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: GOLD_BORDER,
                    flexShrink: 0,
                    lineHeight: 1,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {item.number}
                </span>
                <div>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: TEXT,
                      margin: "0 0 0.5rem",
                    }}
                  >
                    {item.title}
                  </p>
                  <p style={{ fontSize: "0.875rem", color: MUTED, lineHeight: 1.65, margin: 0 }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            SECTION 10: Comparison deep-dive
            ════════════════════════════════════════════════════════════════════ */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "0.9rem",
              lineHeight: 1.25,
            }}
          >
            How do ChatGPT, Claude, and Gemini&apos;s privacy models compare to MEOK&apos;s sovereignty model?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            All three mainstream platforms share a structural limitation: they are built on the
            same fundamental business model. They provide AI capability for free or at low cost,
            and the cost is paid partly in data. Even when individual products opt users out of
            training, the parent organisations retain data for safety monitoring, quality
            improvement, and abuse detection &mdash; each of which involves retaining and
            processing your conversations.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            <strong style={{ color: TEXT }}>OpenAI / ChatGPT:</strong> Memory is optional and
            server-side. OpenAI controls what is remembered, how it is stored, and how long it
            is retained. Enterprise tier customers receive stronger guarantees, but even they
            are subject to OpenAI&apos;s data processing terms rather than having technical
            ownership. The free tier is explicit that conversations may be reviewed by humans
            for safety training.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            <strong style={{ color: TEXT }}>Anthropic / Claude:</strong> Claude does not have
            persistent memory by default, which reduces some risks. However, conversations are
            retained for up to 90 days and may be reviewed for safety and policy compliance.
            Anthropic&apos;s Constitutional AI training approach means conversation data is
            central to its model improvement process. The absence of memory persistence is a
            feature restriction, not a privacy guarantee.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            <strong style={{ color: TEXT }}>Google / Gemini:</strong> Google&apos;s privacy
            track record with conversational data is the most concerning of the three. Gemini
            conversations are retained by default for 18 months and reviewed by human raters.
            The tight integration with Google Workspace means that work documents you discuss
            with Gemini may influence how Google&apos;s systems process and surface those
            documents to other users. Opt-out is available but requires navigating multiple
            settings pages.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            <strong style={{ color: TEXT }}>MEOK:</strong> The structural difference is that
            MEOK&apos;s business model does not require your data. Revenue comes from
            subscriptions. There is no advertising business to feed, no foundation model to
            improve through user data, and no investor expectation that data assets will be
            monetised in future funding rounds. The incentive structure that drives the other
            three platforms toward data retention does not exist at MEOK.
          </p>

          {/* Big red/green comparison */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            <div
              style={{
                background: RED_SOFT,
                border: `1px solid ${RED_BORDER}`,
                borderRadius: "0.75rem",
                padding: "1.25rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: RED_TEXT,
                  margin: "0 0 0.75rem",
                }}
              >
                Mainstream AI (ChatGPT / Claude / Gemini)
              </p>
              <ul style={{ margin: 0, padding: "0 0 0 1.1rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {[
                  "Conversations retained by default",
                  "May be used for model training",
                  "Memory controlled by provider",
                  "Data portable only on request",
                  "Business model incentivises data retention",
                  "Single model: one point of failure",
                  "Jailbreak can compromise whole response",
                ].map((item) => (
                  <li key={item} style={{ fontSize: "0.875rem", color: MUTED, lineHeight: 1.55 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                background: GREEN_SOFT,
                border: `1px solid ${GREEN_BORDER}`,
                borderRadius: "0.75rem",
                padding: "1.25rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: GREEN_TEXT,
                  margin: "0 0 0.75rem",
                }}
              >
                MEOK Sovereign AI
              </p>
              <ul style={{ margin: 0, padding: "0 0 0 1.1rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {[
                  "Zero-retention architecture by design",
                  "Never used for model training",
                  "Memory owned and controlled by user",
                  "Full export available instantly, no request needed",
                  "Subscription model; no data monetisation incentive",
                  "43-agent Byzantine Council consensus",
                  "Supermajority required; single compromise cannot succeed",
                ].map((item) => (
                  <li key={item} style={{ fontSize: "0.875rem", color: MUTED, lineHeight: 1.55 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            SECTION 11: The future of private AI
            ════════════════════════════════════════════════════════════════════ */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "0.9rem",
              lineHeight: 1.25,
            }}
          >
            Is sovereign AI the future, or is it a niche for the paranoid?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            The question used to seem reasonable. Privacy has historically been characterised as
            a concern for people with something to hide &mdash; a framing that conveniently
            served the interests of every company that profits from data collection. That
            characterisation is no longer sustainable. The combination of large-scale data
            breaches, expanding state surveillance powers, and the emergence of AI systems
            capable of deriving extraordinarily sensitive inferences from mundane conversations
            has made privacy a mainstream concern.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            The regulatory trajectory points the same direction. The EU AI Act, the UK&apos;s
            AI regulatory framework, and emerging legislation in the United States all move toward
            stronger user rights over AI-generated data. The ICO has signalled that it considers
            conversation data processed by AI assistants to be personal data subject to the full
            force of GDPR. Companies that built their AI products on loose data terms are facing
            increasing regulatory scrutiny.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            The deeper argument is not regulatory &mdash; it is philosophical. As AI systems
            become more capable and more integrated into the most intimate aspects of daily life,
            the question of who owns the data those systems generate becomes inseparable from the
            question of who owns you. Your therapy sessions, your grief, your ambitions, your
            fears, your medical history, your political views &mdash; if all of that lives in a
            corporate database, a part of you lives there too, subject to their terms of service
            and their business decisions.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: "1.5rem",
            }}
          >
            Sovereign AI is not paranoia. It is the logical extension of the principle that your
            inner life belongs to you &mdash; and that the digital records of that inner life
            should belong to you too.
          </p>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            FAQ SECTION
            ════════════════════════════════════════════════════════════════════ */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "1.5rem",
              lineHeight: 1.25,
            }}
          >
            Frequently asked questions about sovereign AI and data privacy
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              {
                q: "Does ChatGPT use my conversations for training by default?",
                a: "Yes. OpenAI retains conversation data by default and may use it to improve and train its models. You can opt out in your account settings, but the opt-out does not apply retroactively to conversations already sent.",
              },
              {
                q: "What makes MEOK different from other privacy-focused AI assistants?",
                a: "Most &ldquo;privacy-focused&rdquo; AI assistants offer policy promises backed by terms of service. MEOK&apos;s sovereignty guarantees are structural &mdash; enforced by encryption architecture, the Byzantine Council&apos;s consensus requirements, and the BYOK tier&apos;s direct-to-provider routing. You can verify them technically, not just trust them contractually.",
              },
              {
                q: "Can I use MEOK if I&apos;m subject to professional confidentiality obligations?",
                a: "MEOK is designed to be compatible with professional confidentiality frameworks. Therapists, solicitors, doctors, and journalists can use MEOK knowing that client or source information entered in conversation will not be used for training, will be encrypted at rest, and can be permanently deleted on request. We recommend consulting your professional body for guidance specific to your practice.",
              },
              {
                q: "What happens to my data if MEOK closes down?",
                a: "Your sovereign memory vault is exportable at any time. We recommend periodic exports as a precaution, regardless of platform health. In the event of MEOK ceasing to operate, users receive 90 days&apos; notice and a mandatory export window. Your data is never trapped.",
              },
              {
                q: "Is the Byzantine Council running on every message I send?",
                a: "Yes, for messages that touch your vault data or companion state. Lightweight queries may use a reduced council configuration for latency reasons, but any message that involves reading from or writing to your sovereign vault passes through the full 43-agent consensus process.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                style={{
                  background: SURFACE,
                  border: `1px solid ${SURFACE_BORDER}`,
                  borderRadius: "0.75rem",
                  padding: "1.25rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: TEXT,
                    margin: "0 0 0.625rem",
                  }}
                >
                  {faq.q}
                </p>
                <p style={{ fontSize: "0.875rem", color: MUTED, lineHeight: 1.65, margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA BOX ─────────────────────────────────────────────────────────── */}
        <div
          style={{
            background: GOLD_BG,
            border: `1px solid ${GOLD_BORDER}`,
            borderRadius: "1rem",
            padding: "2.5rem",
            textAlign: "center",
            marginBottom: "4rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)",
            }}
          />
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: GOLD,
              marginBottom: "0.75rem",
              position: "relative",
            }}
          >
            Own your AI. Own your data.
          </p>
          <h3
            style={{
              fontSize: "1.75rem",
              fontWeight: 800,
              color: TEXT,
              marginBottom: "0.875rem",
              lineHeight: 1.2,
              position: "relative",
            }}
          >
            Start with Sovereign AI today
          </h3>
          <p
            style={{
              fontSize: "1rem",
              color: MUTED,
              lineHeight: 1.65,
              marginBottom: "1.75rem",
              maxWidth: "32rem",
              marginLeft: "auto",
              marginRight: "auto",
              position: "relative",
            }}
          >
            MEOK gives you encrypted memory you own, a Byzantine Council that protects every
            response, GDPR data portability at any moment, and a BYOK tier that keeps your
            conversations off our servers entirely. Your inner life is yours.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
              position: "relative",
            }}
          >
            <Link
              href="/sign-up"
              style={{
                display: "inline-block",
                background: GOLD,
                color: BG,
                fontWeight: 700,
                fontSize: "1rem",
                padding: "0.8rem 2rem",
                borderRadius: "0.5rem",
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              Get started free
            </Link>
            <Link
              href="/features"
              style={{
                display: "inline-block",
                border: `1px solid ${GOLD_BORDER}`,
                color: GOLD,
                fontWeight: 600,
                fontSize: "1rem",
                padding: "0.8rem 2rem",
                borderRadius: "0.5rem",
                textDecoration: "none",
              }}
            >
              Explore the architecture
            </Link>
          </div>
        </div>

        {/* ── RELATED LINKS ───────────────────────────────────────────────────── */}
        <div>
          <p
            style={{
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: MUTED_DIM,
              marginBottom: "1.25rem",
            }}
          >
            Related reading
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
              gap: "0.75rem",
            }}
          >
            {[
              {
                href: "/blog/sovereign-ai-vs-chatgpt",
                label: "Sovereign AI vs ChatGPT: What\u2019s the Difference?",
              },
              {
                href: "/blog/byzantine-council-explained",
                label: "The Byzantine Council Explained",
              },
              {
                href: "/blog/data-sovereignty-ai",
                label: "Data Sovereignty in AI: A Complete Guide",
              },
              {
                href: "/blog/maternal-covenant-explained",
                label: "The Maternal Covenant: MEOK\u2019s Ethical Framework",
              },
              {
                href: "/blog/what-is-sovereign-ai",
                label: "What Is Sovereign AI?",
              },
              {
                href: "/blog/personal-sovereign-ai",
                label: "Personal Sovereign AI: Own Your AI Future",
              },
              {
                href: "/blog/how-meok-protects-your-data",
                label: "How MEOK Protects Your Data",
              },
              {
                href: "/blog/ai-companion-privacy",
                label: "AI Companion Privacy: What You Need to Know",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  background: SURFACE,
                  border: `1px solid ${SURFACE_BORDER}`,
                  borderRadius: "0.625rem",
                  padding: "0.875rem 1rem",
                  fontSize: "0.875rem",
                  color: MUTED,
                  textDecoration: "none",
                  lineHeight: 1.5,
                  transition: "border-color 0.15s",
                }}
              >
                {link.label} &#8594;
              </Link>
            ))}
          </div>
        </div>
      </article>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: `1px solid ${SURFACE_BORDER}`,
          padding: "3rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "50rem", margin: "0 auto" }}>
          <Link
            href="/"
            style={{
              fontWeight: 700,
              fontSize: "1.1rem",
              color: GOLD,
              textDecoration: "none",
              letterSpacing: "0.04em",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            MEOK AI LABS
          </Link>
          <p style={{ fontSize: "0.875rem", color: MUTED_FAINT, marginBottom: "1.5rem" }}>
            Personal Sovereign AI &mdash; your data, your memory, your AI.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "1.5rem",
            }}
          >
            {[
              { href: "/privacy", label: "Privacy Policy" },
              { href: "/terms", label: "Terms of Service" },
              { href: "/blog", label: "Blog" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{ fontSize: "0.8rem", color: MUTED_FAINT, textDecoration: "none" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <p style={{ fontSize: "0.75rem", color: MUTED_FAINT }}>
            &copy; {new Date().getFullYear()} MEOK AI LABS Ltd. Registered in England and Wales.
            ICO registered data controller.
          </p>
        </div>
      </footer>
    </div>
  )
}
