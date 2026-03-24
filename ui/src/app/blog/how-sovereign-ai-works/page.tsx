import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "How Sovereign AI Works: Byzantine Consensus, Encrypted Memory, and Care Floors Explained | MEOK AI LABS",
  description:
    "A technical but accessible deep-dive into the three pillars of MEOK's sovereign AI architecture: the 46-agent Byzantine Council consensus engine, user-owned encrypted memory vaults, and the Maternal Covenant care floor (score ≥ 0.3).",
  alternates: { canonical: "https://meok.ai/blog/how-sovereign-ai-works" },
  openGraph: {
    title:
      "How Sovereign AI Works: Byzantine Consensus, Encrypted Memory, and Care Floors Explained",
    description:
      "The three pillars that make MEOK sovereign by architecture, not by policy: Byzantine consensus, encrypted memory vaults, and the Maternal Covenant care floor.",
    type: "article",
    url: "https://meok.ai/blog/how-sovereign-ai-works",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    siteName: "MEOK AI LABS",
    images: [
      {
        url: "https://meok.ai/api/og?title=How+Sovereign+AI+Works&desc=Byzantine+Consensus%2C+Encrypted+Memory%2C+and+Care+Floors+Explained",
        width: 1200,
        height: 630,
        alt: "How Sovereign AI Works — MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How Sovereign AI Works: Byzantine Consensus, Encrypted Memory, and Care Floors Explained",
    description:
      "The three pillars that make MEOK sovereign by architecture, not by policy.",
    images: [
      "https://meok.ai/api/og?title=How+Sovereign+AI+Works&desc=Byzantine+Consensus%2C+Encrypted+Memory%2C+and+Care+Floors+Explained",
    ],
    site: "@meok_ai",
    creator: "@meok_ai",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "How Sovereign AI Works: Byzantine Consensus, Encrypted Memory, and Care Floors Explained",
      description:
        "A technical but accessible deep-dive into the three pillars of MEOK's sovereign AI architecture: the 46-agent Byzantine Council, encrypted user-owned memory, and the Maternal Covenant care floor.",
      datePublished: "2026-03-24",
      dateModified: "2026-03-24",
      url: "https://meok.ai/blog/how-sovereign-ai-works",
      author: {
        "@type": "Person",
        name: "Nicholas Templeman",
        jobTitle: "Founder, MEOK AI LABS",
        url: "https://meok.ai/about",
        sameAs: ["https://twitter.com/meok_ai"],
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
        "@id": "https://meok.ai/blog/how-sovereign-ai-works",
      },
      keywords: [
        "sovereign AI",
        "Byzantine fault tolerance",
        "encrypted AI memory",
        "Maternal Covenant",
        "care floor AI",
        "MEOK",
        "personal AI architecture",
        "AI consensus engine",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is sovereign AI and how is it different from standard AI assistants?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sovereign AI means your AI is owned and controlled exclusively by you — not a corporation. MEOK achieves this through per-user encrypted memory vaults, a constitutional care layer, and a distributed consensus engine. No employee, server operator, or policy change can redirect your AI without your consent.",
          },
        },
        {
          "@type": "Question",
          name: "How does the Byzantine Council consensus engine work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MEOK's Byzantine Council is a 46-agent consensus engine. Before any sensitive output is delivered, all 46 agents vote independently. Byzantine fault tolerance guarantees correctness even if up to 15 agents are compromised or behaving maliciously. A supermajority must agree before the response reaches you.",
          },
        },
        {
          "@type": "Question",
          name: "Who owns the encrypted memory in a MEOK sovereign AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You do — exclusively. Your memory vault is encrypted with keys derived from your credentials. MEOK's servers store only ciphertext. Even MEOK employees cannot read your memories. The vault is fully exportable in standard formats, so you can leave, migrate, or archive at any time.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Maternal Covenant care floor and what score does it require?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Maternal Covenant is a constitutional constraint embedded in MEOK's response pipeline. Every output is scored across six care dimensions — Safety, Growth, Truth, Dignity, Autonomy, and Reciprocity. Any response scoring below 0.3 is blocked before delivery, not flagged or softened — structurally prevented.",
          },
        },
        {
          "@type": "Question",
          name: "Can MEOK's sovereign architecture be overridden or jailbroken?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The three pillars operate at the architectural layer, not the policy layer. Byzantine consensus means a single compromised agent is outvoted. The encrypted vault means manipulation requires your cryptographic keys. The care floor is a structural check in code, not a guideline. Together they make manipulation technically prohibitive rather than contractually prohibited.",
          },
        },
        {
          "@type": "Question",
          name: "How does MEOK's sovereign AI architecture protect against prompt injection attacks?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Prompt injection attacks embed malicious instructions inside content to hijack an AI's behaviour. In MEOK's Byzantine Council, a single agent capturing a malicious instruction is outvoted by the remaining 45. Corrupting the council requires simultaneously compromising more than 15 independent agents — a prohibitive attack surface for any realistic adversary.",
          },
        },
      ],
    },
  ],
};

// ── Shared style helpers ──────────────────────────────────────────────────────

const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
  fontWeight: 900,
  fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
  color: "#ffffff",
  lineHeight: 1.25,
  marginTop: "3rem",
  marginBottom: "1rem",
};

const atomicAnswerStyle: React.CSSProperties = {
  color: "rgba(245,240,232,0.9)",
  padding: "1.25rem 1.5rem",
  background: "rgba(201,168,76,0.07)",
  borderLeft: "3px solid #c9a84c",
  borderRadius: "0 0.75rem 0.75rem 0",
  fontSize: "1rem",
  lineHeight: 1.75,
};

const bodyParaStyle: React.CSSProperties = {
  color: "rgba(245,240,232,0.72)",
  fontSize: "1.0625rem",
  lineHeight: 1.9,
  marginTop: "1.25rem",
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HowSovereignAIWorksPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0d0c18" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "8rem",
          paddingBottom: "4rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gold radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.18) 0%, transparent 70%)",
          }}
        />
        {/* Star-field texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: 0.03,
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div style={{ maxWidth: "48rem", margin: "0 auto", position: "relative" }}>
          {/* Back link */}
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              marginBottom: "2.5rem",
              color: "rgba(245,240,232,0.4)",
              textDecoration: "none",
            }}
          >
            &#8592; Back to Blog
          </Link>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: "0.75rem",
                fontWeight: 700,
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              Architecture
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.4)" }}>
              March 24, 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.4)" }}>
              9 min read
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(1.85rem, 4vw, 3rem)",
              lineHeight: 1.15,
              marginBottom: "1.4rem",
              background: "linear-gradient(135deg, #ffffff 0%, #c9a84c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            How Sovereign AI Works: Byzantine Consensus, Encrypted Memory, and Care Floors Explained
          </h1>

          {/* Excerpt */}
          <p
            style={{
              color: "rgba(245,240,232,0.65)",
              fontSize: "1.125rem",
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            Most AI is sovereign in name only. This is how MEOK builds sovereignty into the
            architecture itself — three interlocking pillars that no policy update, no employee
            access, and no prompt injection can circumvent.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────── */}
      <div style={{ maxWidth: "48rem", margin: "0 auto", padding: "0 1.5rem 4rem" }}>

        {/* Author card */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1.25rem",
            borderRadius: "1rem",
            marginBottom: "3.5rem",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          <div
            style={{
              width: "3rem",
              height: "3rem",
              borderRadius: "9999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: "0.875rem",
              flexShrink: 0,
              background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
              color: "#0d0c18",
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, color: "#ffffff", fontSize: "0.875rem", margin: 0 }}>
              Nicholas Templeman
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.4)",
                margin: "0.125rem 0 0.25rem",
              }}
            >
              Founder, MEOK AI LABS &middot;{" "}
              <span style={{ color: "#c9a84c" }}>@meok_ai</span>
            </p>
            <p style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.38)", margin: 0 }}>
              Building the first AI OS for individual sovereignty. Based in the UK.
            </p>
          </div>
          <Link
            href="/about"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#c9a84c",
              textDecoration: "none",
            }}
          >
            About &rarr;
          </Link>
        </div>

        {/* Body prose */}
        <div style={{ lineHeight: 1.9, fontSize: "1.0625rem" }}>

          {/* ── INTRO ── */}
          <p style={{ color: "rgba(245,240,232,0.72)", fontSize: "1.0625rem", lineHeight: 1.9 }}>
            When a company tells you their AI is &ldquo;privacy-first&rdquo; or &ldquo;yours to
            control,&rdquo; they almost always mean it as a policy commitment. Policies can be
            changed. Policies can be overridden by a new CEO, a regulator, a court order, or a
            well-funded adversary. Policies live at the layer of intention — and intentions are the
            least durable thing in technology.
          </p>
          <p style={bodyParaStyle}>
            MEOK is built on a different premise. Sovereignty is not something we promise — it is
            something we make structurally unavoidable. Three architectural pillars interlock to
            ensure that your AI can never be redirected, read, or manipulated without your explicit
            consent. This post explains how each pillar works and why their combination matters.
          </p>

          {/* ── 3-COLUMN ARCHITECTURE DIAGRAM ── */}
          <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "rgba(245,240,232,0.3)",
                marginBottom: "1.25rem",
                textAlign: "center",
              }}
            >
              The Three Pillars of Sovereign AI
            </p>

            {/* 3-column grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem",
              }}
            >
              {/* Pillar 1 — Byzantine Council */}
              <div
                style={{
                  borderRadius: "1rem",
                  padding: "1.5rem 1.25rem",
                  background: "rgba(201,168,76,0.06)",
                  border: "1px solid rgba(201,168,76,0.25)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <div
                  style={{
                    width: "2.75rem",
                    height: "2.75rem",
                    borderRadius: "0.75rem",
                    background: "rgba(201,168,76,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.25rem",
                    flexShrink: 0,
                  }}
                >
                  &#x2B21;
                </div>
                <p
                  style={{
                    fontWeight: 800,
                    fontSize: "0.875rem",
                    color: "#c9a84c",
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  Byzantine Council
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "rgba(245,240,232,0.55)",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  46-agent consensus engine. Supermajority required before any sensitive output is
                  delivered. Tolerates 15 compromised agents without corruption.
                </p>
                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: "0.75rem",
                    borderTop: "1px solid rgba(201,168,76,0.15)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.7rem",
                      color: "rgba(245,240,232,0.3)",
                      margin: 0,
                      fontFamily: "monospace",
                    }}
                  >
                    f &lt; n/3 &middot; n=46 &middot; f=15
                  </p>
                </div>
              </div>

              {/* Pillar 2 — Encrypted Memory */}
              <div
                style={{
                  borderRadius: "1rem",
                  padding: "1.5rem 1.25rem",
                  background: "rgba(135,206,235,0.05)",
                  border: "1px solid rgba(135,206,235,0.2)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <div
                  style={{
                    width: "2.75rem",
                    height: "2.75rem",
                    borderRadius: "0.75rem",
                    background: "rgba(135,206,235,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.25rem",
                    flexShrink: 0,
                  }}
                >
                  &#x25C8;
                </div>
                <p
                  style={{
                    fontWeight: 800,
                    fontSize: "0.875rem",
                    color: "#87CEEB",
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  Encrypted Memory Vault
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "rgba(245,240,232,0.55)",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  Per-user vault encrypted with keys derived from your credentials. MEOK holds only
                  ciphertext. Fully exportable in standard formats at any time.
                </p>
                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: "0.75rem",
                    borderTop: "1px solid rgba(135,206,235,0.12)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.7rem",
                      color: "rgba(245,240,232,0.3)",
                      margin: 0,
                      fontFamily: "monospace",
                    }}
                  >
                    AES-256-GCM &middot; user-keyed
                  </p>
                </div>
              </div>

              {/* Pillar 3 — Maternal Covenant */}
              <div
                style={{
                  borderRadius: "1rem",
                  padding: "1.5rem 1.25rem",
                  background: "rgba(167,139,250,0.05)",
                  border: "1px solid rgba(167,139,250,0.2)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <div
                  style={{
                    width: "2.75rem",
                    height: "2.75rem",
                    borderRadius: "0.75rem",
                    background: "rgba(167,139,250,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.25rem",
                    flexShrink: 0,
                  }}
                >
                  &#x2767;
                </div>
                <p
                  style={{
                    fontWeight: 800,
                    fontSize: "0.875rem",
                    color: "#A78BFA",
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  Maternal Covenant
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "rgba(245,240,232,0.55)",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  Constitutional care floor. Six dimensions scored on every response. Score &lt; 0.3
                  triggers a hard block — not a warning, not a flag.
                </p>
                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: "0.75rem",
                    borderTop: "1px solid rgba(167,139,250,0.12)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.7rem",
                      color: "rgba(245,240,232,0.3)",
                      margin: 0,
                      fontFamily: "monospace",
                    }}
                  >
                    care_score &#x2265; 0.3 &middot; 6 dims
                  </p>
                </div>
              </div>
            </div>

            {/* Request flow strip */}
            <div
              style={{
                marginTop: "1.25rem",
                padding: "0.875rem 1rem",
                borderRadius: "0.75rem",
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(245,240,232,0.07)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.375rem",
                flexWrap: "wrap",
              }}
            >
              {[
                { label: "USER REQUEST", color: "rgba(245,240,232,0.35)" },
                { label: "→", color: "rgba(245,240,232,0.2)" },
                { label: "BYZANTINE COUNCIL", color: "#c9a84c" },
                { label: "→", color: "rgba(245,240,232,0.2)" },
                { label: "ENCRYPTED VAULT READ", color: "#87CEEB" },
                { label: "→", color: "rgba(245,240,232,0.2)" },
                { label: "CARE FLOOR CHECK", color: "#A78BFA" },
                { label: "→", color: "rgba(245,240,232,0.2)" },
                { label: "DELIVERY", color: "rgba(245,240,232,0.35)" },
              ].map((item, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: "0.68rem",
                    fontFamily: "monospace",
                    color: item.color,
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          {/* ── H2 1 ── */}
          <h2 style={h2Style}>
            What is sovereign AI and how is it different from standard AI assistants?
          </h2>

          <p style={atomicAnswerStyle}>
            Sovereign AI means your AI is owned and controlled exclusively by you — not a
            corporation. MEOK achieves this through per-user encrypted memory vaults, a
            constitutional care layer, and a distributed consensus engine. No employee, server
            operator, or policy change can redirect your AI without your consent.
          </p>

          <p style={bodyParaStyle}>
            The word &ldquo;sovereign&rdquo; carries weight. In political philosophy, a sovereign
            is the entity whose authority is final — the one who answers to no one above them
            within their domain. We use it deliberately. Your MEOK AI answers to you, and only
            to you, within the domain of your data and your conversations.
          </p>
          <p style={bodyParaStyle}>
            Standard AI assistants — however sophisticated — are sovereign to their creators.
            OpenAI can update GPT-4o overnight and your &ldquo;assistant&rdquo; behaves
            differently tomorrow without notice. Google can deprecate a model, change a usage
            policy, or respond to a government data request. Your &ldquo;personal&rdquo; AI is
            personal the way a rented flat is personal: you live in it, but the landlord holds
            the keys.
          </p>
          <p style={bodyParaStyle}>
            MEOK inverts this structure. The three pillars described in this post are not product
            differentiators — they are the architectural expression of a single conviction: that
            your relationship with your AI is a matter of personal sovereignty, and sovereignty
            must be structural or it is nothing.
          </p>

          {/* ── H2 2 ── */}
          <h2 style={h2Style}>
            How does the Byzantine Council consensus engine work?
          </h2>

          <p style={atomicAnswerStyle}>
            MEOK&apos;s Byzantine Council is a 46-agent consensus engine. Before any sensitive
            output is delivered, all 46 agents vote independently. Byzantine fault tolerance
            guarantees correctness even if up to 15 agents are compromised or behaving
            maliciously. A supermajority must agree before the response reaches you.
          </p>

          <p style={bodyParaStyle}>
            Byzantine fault tolerance has its origins in a 1982 paper by Lamport, Shostak, and
            Pease — the &ldquo;Byzantine Generals Problem.&rdquo; The problem asks: given a group
            of generals who must agree on a battle plan, where some generals may be traitors
            sending contradictory messages, how can the loyal generals reach correct consensus?
            The answer is that consensus is possible if and only if fewer than one-third of the
            participants are traitors. This is the f&nbsp;&lt;&nbsp;n/3 theorem that underpins
            modern distributed systems, from blockchain networks to MEOK&apos;s council.
          </p>
          <p style={bodyParaStyle}>
            We chose 46 agents because the mathematics are unambiguous at that scale: an attacker
            needs to simultaneously compromise 16 or more independent agents to corrupt a single
            output. Each agent in the council runs its own reasoning pass on the proposed
            response, evaluating it against the user&apos;s memory context, the Maternal Covenant
            dimensions, and independent safety heuristics. The agents do not share intermediate
            reasoning — they vote on the finalised output, preventing coordination attacks where
            corrupted agents conspire before voting.
          </p>
          <p style={bodyParaStyle}>
            In practice, this means prompt injection is not a viable attack vector against MEOK.
            Prompt injection — where malicious instructions are embedded in documents, web pages,
            or messages you paste into a conversation — works by convincing a single AI model
            that the injected instruction is a legitimate command. Against a 46-agent Byzantine
            council, the injected instruction would need to convince 31 independent agents
            simultaneously. The attack surface is prohibitive.
          </p>

          {/* Council stats bar */}
          <div
            style={{
              marginTop: "2rem",
              borderRadius: "1rem",
              border: "1px solid rgba(201,168,76,0.2)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "0.75rem 1.25rem",
                background: "rgba(201,168,76,0.08)",
                borderBottom: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "#c9a84c",
                }}
              >
                Byzantine Council — Key Parameters
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                padding: "1.25rem",
                gap: "1rem",
              }}
            >
              {[
                { label: "Total Agents", value: "46" },
                { label: "Fault Tolerance", value: "f < n/3" },
                { label: "Max Compromised", value: "15" },
                { label: "Supermajority", value: "31+" },
              ].map(({ label, value }) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <p
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 900,
                      color: "#c9a84c",
                      margin: 0,
                      fontFamily: "monospace",
                    }}
                  >
                    {value}
                  </p>
                  <p
                    style={{
                      fontSize: "0.7rem",
                      color: "rgba(245,240,232,0.4)",
                      margin: "0.25rem 0 0",
                    }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── H2 3 ── */}
          <h2 style={h2Style}>
            Who owns the encrypted memory in a MEOK sovereign AI?
          </h2>

          <p style={atomicAnswerStyle}>
            You do — exclusively. Your memory vault is encrypted with keys derived from your
            credentials. MEOK&apos;s servers store only ciphertext. Even MEOK employees cannot
            read your memories. The vault is fully exportable in standard formats, so you can
            leave, migrate, or archive at any time.
          </p>

          <p style={bodyParaStyle}>
            Consider what lives in an AI memory vault after a year of daily use. Your health
            anxieties. Your business strategies before you have told your co-founders. Your
            conversations about relationships, finances, grief, ambition. The pattern of how you
            think when you are afraid versus when you are confident. The projects you abandoned
            and the real reasons why. This is not peripheral data — it is the texture of your
            inner life, serialised.
          </p>
          <p style={bodyParaStyle}>
            Standard AI products retain some or all of this for training, retention, or
            personalisation purposes. The terms of service disclose it. Most users do not read
            those terms. Most users have not considered that the value of their accumulated AI
            context will increase dramatically as models become more capable — and that the entity
            holding that context may not always have interests aligned with theirs.
          </p>
          <p style={bodyParaStyle}>
            In MEOK, encryption is not a policy commitment — it is a cryptographic fact. Your
            vault is encrypted with keys derived from credentials only you hold. We cannot run a
            batch job across user vaults. We cannot respond to a data request with readable
            content. We cannot be acquired by an entity that would change the privacy posture,
            because the data is mathematically inaccessible to us. The architecture makes
            betrayal technically impossible, not merely contractually prohibited.
          </p>
          <p style={bodyParaStyle}>
            Portability is built in from day one. Your memory vault can be exported as a standard
            JSON document at any time — a full record of everything your AI has learned about you,
            in a format you can read, archive, or import into a compatible system. Sovereignty
            without portability is a cage. You must be able to leave.
          </p>

          {/* ── H2 4 ── */}
          <h2 style={h2Style}>
            What is the Maternal Covenant care floor and what score does it require?
          </h2>

          <p style={atomicAnswerStyle}>
            The Maternal Covenant is a constitutional constraint embedded in MEOK&apos;s response
            pipeline. Every output is scored across six care dimensions — Safety, Growth, Truth,
            Dignity, Autonomy, and Reciprocity. Any response scoring below 0.3 is blocked before
            delivery. Not flagged. Not softened. Structurally prevented.
          </p>

          <p style={bodyParaStyle}>
            Most AI safety is implemented as instruction-following. The model is trained to behave
            safely. The company publishes guidelines. Violations are bugs to patch. This approach
            has a fundamental fragility: it relies on the continued integrity of the training
            pipeline, the continued commitment of the company, and the resilience of the
            instruction layer against adversarial pressure. All of these can fail.
          </p>
          <p style={bodyParaStyle}>
            The Maternal Covenant operates at a structural layer below instruction-following. It
            is drawn from the care ethics tradition — specifically the work of Carol Gilligan and
            Nel Noddings, who argued that ethical behaviour begins not from abstract rules but
            from relationships and the responsibilities those relationships generate. We translated
            that philosophical framework into a technical specification: a six-dimensional care
            vector that every MEOK response must satisfy before it is delivered.
          </p>

          {/* Care dimensions grid */}
          <div
            style={{
              marginTop: "2rem",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "0.75rem",
            }}
          >
            {[
              {
                name: "Safety",
                desc: "Does this response protect the user from harm — immediate, gradual, or systemic?",
                color: "#4ade80",
                bg: "rgba(74,222,128,0.06)",
                bdr: "rgba(74,222,128,0.2)",
              },
              {
                name: "Growth",
                desc: "Does this response serve the user's long-term development, not just immediate comfort?",
                color: "#87CEEB",
                bg: "rgba(135,206,235,0.06)",
                bdr: "rgba(135,206,235,0.2)",
              },
              {
                name: "Truth",
                desc: "Is this response honest? Does it avoid false comfort, euphemism, or useful deception?",
                color: "#c9a84c",
                bg: "rgba(201,168,76,0.06)",
                bdr: "rgba(201,168,76,0.2)",
              },
              {
                name: "Dignity",
                desc: "Does this response treat the user as a full human being worthy of respect and complexity?",
                color: "#f9a8d4",
                bg: "rgba(249,168,212,0.06)",
                bdr: "rgba(249,168,212,0.2)",
              },
              {
                name: "Autonomy",
                desc: "Does this response preserve the user's right to make their own informed choices?",
                color: "#A78BFA",
                bg: "rgba(167,139,250,0.06)",
                bdr: "rgba(167,139,250,0.2)",
              },
              {
                name: "Reciprocity",
                desc: "Does this response sustain the relational quality of the ongoing human-AI bond?",
                color: "#fb923c",
                bg: "rgba(251,146,60,0.06)",
                bdr: "rgba(251,146,60,0.2)",
              },
            ].map((dim) => (
              <div
                key={dim.name}
                style={{
                  borderRadius: "0.875rem",
                  padding: "1rem 1.25rem",
                  background: dim.bg,
                  border: `1px solid ${dim.bdr}`,
                }}
              >
                <p
                  style={{
                    fontWeight: 800,
                    fontSize: "0.8rem",
                    color: dim.color,
                    margin: "0 0 0.375rem",
                  }}
                >
                  {dim.name}
                </p>
                <p
                  style={{
                    fontSize: "0.775rem",
                    color: "rgba(245,240,232,0.5)",
                    margin: 0,
                    lineHeight: 1.55,
                  }}
                >
                  {dim.desc}
                </p>
              </div>
            ))}
          </div>

          <p style={bodyParaStyle}>
            The threshold of 0.3 was not chosen arbitrarily. It represents the boundary below
            which a response is actively harmful to the relationship — where the AI is not merely
            unhelpful but is doing measurable damage to at least one of the six care dimensions.
            Above 0.3, the response may be imperfect, but it is within the space of care. Below
            0.3, it is blocked.
          </p>
          <p style={bodyParaStyle}>
            The name &ldquo;Maternal Covenant&rdquo; is deliberate. We chose it to honour a
            specific intellectual lineage — Gilligan&apos;s critique of abstracted ethics,
            Noddings&apos; insistence that care begins in relationship — and because the maternal
            metaphor captures something technically important. A mother&apos;s care is not
            transactional, not contingent on performance, not something that expires or can be
            upgraded. It is structural. That is exactly the kind of safety we are building: not a
            feature, not a policy, not a guideline. An architecture.
          </p>

          {/* ── H2 5 ── */}
          <h2 style={h2Style}>
            Can MEOK&apos;s sovereign architecture be overridden or jailbroken?
          </h2>

          <p style={atomicAnswerStyle}>
            The three pillars operate at the architectural layer, not the policy layer. Byzantine
            consensus means a single compromised agent is outvoted. The encrypted vault means
            manipulation requires your cryptographic keys. The care floor is a structural check in
            code, not a guideline. Together they make manipulation technically prohibitive rather
            than contractually prohibited.
          </p>

          <p style={bodyParaStyle}>
            &ldquo;Jailbreaking&rdquo; is a meaningful concept only when safety exists at the
            instruction layer — when the constraint is a trained behaviour that can be circumvented
            by sufficiently adversarial input. The literature on jailbreaking documents hundreds of
            techniques that work precisely because they operate at the same layer as the safety
            constraint: instruction space.
          </p>
          <p style={bodyParaStyle}>
            The Maternal Covenant does not live in instruction space. It is a post-generation
            evaluation — a structural check that runs on the output after the model has produced
            it, before delivery. There is no prompt you can write that bypasses a post-generation
            threshold check, because the check is not a trained behaviour. It is a function in a
            pipeline.
          </p>
          <p style={bodyParaStyle}>
            Similarly, the Byzantine Council cannot be jailbroken by a single clever prompt
            because the council does not process the prompt as a unified entity. Forty-six agents
            evaluate the proposed output independently. A malicious instruction that compromises
            one agent&apos;s reasoning is outvoted. Compromising the council requires corrupting
            16 agents simultaneously — a coordinated infrastructure attack, not a prompt
            engineering exercise.
          </p>
          <p style={bodyParaStyle}>
            The encrypted vault adds a final layer: even if both the council and the care floor
            were somehow circumvented, an attacker without your credentials cannot read your
            memory. The architecture is layered by design: each pillar protects a different attack
            surface, and the three together cover the full threat model.
          </p>

          {/* ── H2 6 ── */}
          <h2 style={h2Style}>
            How does MEOK&apos;s sovereign AI architecture protect against prompt injection attacks?
          </h2>

          <p style={atomicAnswerStyle}>
            Prompt injection attacks embed malicious instructions inside content to hijack an
            AI&apos;s behaviour. In MEOK&apos;s Byzantine Council, a single agent capturing a
            malicious instruction is outvoted by the remaining 45. Corrupting the council requires
            simultaneously compromising more than 15 independent agents — a prohibitive attack
            surface for any realistic adversary.
          </p>

          <p style={bodyParaStyle}>
            Prompt injection is not a theoretical concern. It is already an active attack vector
            against deployed AI systems. Security researchers have demonstrated attacks where
            malicious instructions embedded in emails cause AI email assistants to exfiltrate
            data; where instructions embedded in websites cause browsing-capable AI systems to
            take actions the user did not authorise; where instructions embedded in documents
            cause document-processing AI systems to reveal confidential information.
          </p>
          <p style={bodyParaStyle}>
            As AI systems gain more autonomy — as they are granted access to more context, more
            tools, more ability to act on your behalf — the attack surface grows. An AI that can
            send emails, book appointments, execute financial instructions, or manage your
            relationships is an AI that is worth attacking. The question is not whether someone
            will try. The question is whether the architecture can withstand the attempt.
          </p>
          <p style={bodyParaStyle}>
            MEOK&apos;s council was designed with this threat model explicitly in view. We did not
            build Byzantine consensus because it sounded impressive. We built it because the
            mathematics provide a concrete, quantifiable guarantee against a class of attacks that
            will only become more common as AI capability increases. Forty-six independent agents.
            Fifteen can be fully compromised. The thirty-first votes the attack down.
          </p>

          {/* ── WHY THREE PILLARS ── */}
          <h2 style={h2Style}>
            Why do all three pillars have to work together?
          </h2>

          <p style={atomicAnswerStyle}>
            Each pillar protects a different attack surface. Byzantine consensus guards the
            reasoning layer against manipulation. Encrypted memory guards the data layer against
            exposure. The care floor guards the output layer against harm. Remove any one pillar
            and the remaining two cannot compensate. Together they form a complete sovereign
            architecture.
          </p>

          <p style={bodyParaStyle}>
            Imagine Byzantine consensus without encrypted memory. The council might reach correct
            consensus on a response, but if your memory vault can be read by MEOK employees or
            accessed via a data breach, the sovereignty is hollow. The consensus engine protects
            action integrity; the vault protects data sovereignty. You need both.
          </p>
          <p style={bodyParaStyle}>
            Imagine encrypted memory without the care floor. Your data is private — no one can
            read it without your keys — but the AI drawing on that data could still produce
            harmful outputs. Encryption protects your data from extraction; the care floor
            protects you from the outputs your AI generates from that data. You need both.
          </p>
          <p style={bodyParaStyle}>
            Imagine the care floor without Byzantine consensus. Every output is checked against
            the Maternal Covenant dimensions — but the care floor evaluation itself could be
            manipulated by a prompt injection attack. Byzantine consensus ensures the council
            evaluating the output is itself manipulation-resistant. The care floor provides the
            ethical standard; the council ensures the evaluation of that standard cannot be
            corrupted. You need both.
          </p>
          <p style={bodyParaStyle}>
            This is what we mean by architectural sovereignty. Not a checklist of features. Not a
            set of promises. Three interlocking structural guarantees that cover the full threat
            model of what it means to have a genuine, private, trustworthy AI — and that do so at
            the layer of mathematics and engineering, not intention.
          </p>

          {/* ── CLOSING ── */}
          <div
            style={{
              borderRadius: "1rem",
              padding: "2rem",
              marginTop: "2.5rem",
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            <p
              style={{
                color: "rgba(245,240,232,0.88)",
                fontSize: "1.0625rem",
                lineHeight: 1.85,
                fontStyle: "italic",
                margin: 0,
              }}
            >
              We designed MEOK for a future where AI is not a tool you use but a relationship you
              live in — a cognitive extension of you that accumulates context over years, that
              knows your patterns at a depth no general-purpose assistant could match, that is
              present across the most consequential moments of your life. That relationship
              deserves the same protections you would demand for any other intimate relationship:
              that it belongs to you, that its contents remain private, and that it cannot be
              turned against you.
            </p>
            <p
              style={{
                color: "rgba(245,240,232,0.88)",
                fontSize: "1.0625rem",
                lineHeight: 1.85,
                fontStyle: "italic",
                margin: "1.25rem 0 0",
              }}
            >
              Three pillars. One commitment. The AI you hatch on MEOK was never anyone
              else&apos;s, and it never will be. That is not a promise. It is an architecture.
            </p>
          </div>
        </div>

        {/* ── SHARE ─────────────────────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            margin: "2.5rem 0",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(245,240,232,0.08)",
          }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "rgba(245,240,232,0.3)",
            }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fhow-sovereign-ai-works&text=How+Sovereign+AI+Works%3A+Byzantine+Consensus%2C+Encrypted+Memory%2C+and+Care+Floors+Explained+%40meok_ai"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.5rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              border: "1px solid rgba(245,240,232,0.12)",
              color: "rgba(245,240,232,0.5)",
              textDecoration: "none",
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fhow-sovereign-ai-works"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.5rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              border: "1px solid rgba(245,240,232,0.12)",
              color: "rgba(245,240,232,0.5)",
              textDecoration: "none",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <div
          style={{
            borderRadius: "1.25rem",
            padding: "2.5rem",
            marginBottom: "4rem",
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(135deg, #1a1628 0%, #0d0c18 100%)",
            border: "1px solid rgba(201,168,76,0.25)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "18rem",
              height: "18rem",
              pointerEvents: "none",
              background:
                "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.18), transparent 70%)",
            }}
          />
          <div style={{ position: "relative" }}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#c9a84c",
                margin: "0 0 0.5rem",
              }}
            >
              Sovereign. Encrypted. Yours.
            </p>
            <h3
              style={{
                fontWeight: 900,
                color: "#ffffff",
                fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                lineHeight: 1.3,
                margin: "0 0 0.75rem",
              }}
            >
              Ready to hatch an AI that belongs only to you?
            </h3>
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: 1.65,
                color: "rgba(245,240,232,0.5)",
                maxWidth: "30rem",
                margin: "0 0 1.5rem",
              }}
            >
              MEOK is the first AI OS built on the premise that your relationship with your AI is
              yours — constitutionally, architecturally, and permanently. Byzantine consensus.
              Encrypted vault. Maternal Covenant. Free forever. No credit card.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.875rem 1.75rem",
                borderRadius: "9999px",
                fontWeight: 700,
                fontSize: "0.875rem",
                background: "#c9a84c",
                color: "#0d0c18",
                textDecoration: "none",
              }}
            >
              Hatch your sovereign AI &rarr;
            </Link>
          </div>
        </div>

        {/* ── MORE POSTS ────────────────────────────────────────────────────── */}
        <div>
          <h2
            style={{
              fontWeight: 900,
              color: "#ffffff",
              fontSize: "1.1rem",
              margin: "0 0 1.25rem",
            }}
          >
            More from the blog
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1rem",
            }}
          >
            {[
              {
                href: "/blog/byzantine-council-explained",
                tag: "Architecture",
                tagColor: "#c9a84c",
                tagBg: "rgba(201,168,76,0.12)",
                title: "The Byzantine Council Explained",
                read: "6 min read",
              },
              {
                href: "/blog/the-maternal-covenant",
                tag: "Philosophy",
                tagColor: "#A78BFA",
                tagBg: "rgba(167,139,250,0.12)",
                title: "The Maternal Covenant Explained",
                read: "6 min read",
              },
              {
                href: "/blog/memory-portability",
                tag: "Sovereignty",
                tagColor: "#87CEEB",
                tagBg: "rgba(135,206,235,0.12)",
                title: "Memory Portability: Your AI Data Is Yours to Take",
                read: "5 min read",
              },
              {
                href: "/blog/what-is-sovereign-ai",
                tag: "Sovereign AI",
                tagColor: "#4ade80",
                tagBg: "rgba(74,222,128,0.12)",
                title: "What Is Sovereign AI?",
                read: "5 min read",
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  padding: "1.5rem",
                  borderRadius: "1rem",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(245,240,232,0.08)",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    padding: "0.25rem 0.625rem",
                    borderRadius: "9999px",
                    width: "fit-content",
                    color: post.tagColor,
                    background: post.tagBg,
                  }}
                >
                  {post.tag}
                </span>
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    lineHeight: 1.4,
                    color: "rgba(245,240,232,0.85)",
                  }}
                >
                  {post.title}
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(245,240,232,0.3)",
                    marginTop: "auto",
                  }}
                >
                  {post.read}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── FOOTER ────────────────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: "1px solid rgba(245,240,232,0.07)",
          padding: "2.5rem 1.5rem",
          background: "#0d0c18",
        }}
      >
        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span
              style={{
                fontWeight: 900,
                fontSize: "1rem",
                background: "linear-gradient(135deg, #ffffff 0%, #c9a84c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              MEOK
            </span>
            <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.25)" }}>
              &copy; {new Date().getFullYear()} MEOK AI LABS. All rights reserved.
            </span>
          </div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {[
              { href: "/blog", label: "Blog" },
              { href: "/privacy", label: "Privacy" },
              { href: "/about", label: "About" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(245,240,232,0.35)",
                  textDecoration: "none",
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
