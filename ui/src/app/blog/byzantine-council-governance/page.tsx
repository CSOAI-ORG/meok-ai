import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "The Byzantine Council — How 43 AI Agents Govern MEOK | MEOK AI LABS",
  description:
    "MEOK\u2019s Byzantine Council uses 43 specialised AI agents and Byzantine fault-tolerant consensus to govern every high-stakes decision. No single agent can override the council. Here\u2019s how it works.",
  alternates: { canonical: "https://meok.ai/blog/byzantine-council-governance" },
  openGraph: {
    title: "The Byzantine Council \u2014 How 43 AI Agents Govern MEOK",
    description:
      "43 specialised AI agents. Fault-tolerant consensus. No single point of corruption. MEOK\u2019s Byzantine Council is the most rigorous AI governance architecture ever deployed in a consumer product.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/byzantine-council-governance",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=The+Byzantine+Council&desc=How+43+AI+Agents+Govern+MEOK",
        width: 1200,
        height: 630,
        alt: "The Byzantine Council \u2014 How 43 AI Agents Govern MEOK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@meok_ai",
    creator: "@meok_ai",
    title: "The Byzantine Council \u2014 How 43 AI Agents Govern MEOK",
    description:
      "43 specialised AI agents. Fault-tolerant consensus. No single point of corruption. MEOK\u2019s Byzantine Council explained.",
    images: [
      "https://meok.ai/api/og?title=The+Byzantine+Council&desc=How+43+AI+Agents+Govern+MEOK",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "The Byzantine Council \u2014 How 43 AI Agents Govern MEOK",
  description:
    "MEOK\u2019s Byzantine Council uses 43 specialised AI agents and Byzantine fault-tolerant consensus to govern every high-stakes decision. No single agent can override the council.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/byzantine-council-governance",
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
  image:
    "https://meok.ai/api/og?title=The+Byzantine+Council&desc=How+43+AI+Agents+Govern+MEOK",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/byzantine-council-governance",
  },
  keywords:
    "Byzantine fault tolerance, AI governance, multi-agent consensus, Byzantine Generals Problem, sovereign AI, MEOK AI LABS",
  articleSection: "Architecture & Governance",
  citation: {
    "@type": "ScholarlyArticle",
    name: "Byzantine Council: Fault-Tolerant Consensus for Sovereign AI",
    identifier: "MEOK-AI-2026-001",
    author: {
      "@type": "Person",
      name: "Nicholas Templeman",
    },
    datePublished: "2026",
    publisher: {
      "@type": "Organization",
      name: "MEOK AI LABS",
    },
  },
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Byzantine fault tolerance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Byzantine fault tolerance (BFT) is the ability of a distributed system to continue operating correctly even when some of its components fail or behave maliciously. The term originates from the Byzantine Generals Problem, formalised by Lamport, Shostak, and Pease in 1982. A BFT system can reach consensus as long as fewer than one-third of its nodes are faulty or compromised.",
      },
    },
    {
      "@type": "Question",
      name: "How many agents are in MEOK\u2019s Byzantine Council?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK\u2019s Byzantine Council comprises 43 specialised AI agents. Each agent holds a distinct capability profile \u2014 from memory specialisation and security analysis to care validation and guardian oversight. The council reaches binding decisions through quorum voting, ensuring no single agent can unilaterally override a collective ruling.",
      },
    },
    {
      "@type": "Question",
      name: "Can the Byzantine Council be hacked?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The council is designed to be tamper-resistant. The f \u003c n/3 rule means an attacker would need to compromise at least 15 of the 43 agents simultaneously to corrupt consensus. Each agent operates with isolated capability boundaries, cryptographic attestation, and independent audit trails, making coordinated compromise extraordinarily difficult.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Byzantine Generals Problem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Byzantine Generals Problem is a classic distributed-systems thought experiment by Lamport, Shostak, and Pease (1982). It asks: how can distributed actors reach agreement when some may be traitors sending conflicting messages? The answer underpins all modern fault-tolerant consensus protocols, from blockchain networks to MEOK\u2019s AI governance layer.",
      },
    },
    {
      "@type": "Question",
      name: "How does the Byzantine Council affect my conversations with MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For everyday conversation, the council is invisible \u2014 responses feel immediate and natural. On high-stakes decisions (sensitive topics, edge-case behaviour, data-access requests), the council convenes a rapid quorum vote before MEOK responds. This adds a layer of collective wisdom without noticeable latency, ensuring your experience is both safe and genuinely intelligent.",
      },
    },
  ],
};

// ── Shared style tokens ────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const MUTED = "rgba(245,240,232,0.6)";
const MUTED_DIM = "rgba(245,240,232,0.35)";
const BORDER = "rgba(245,240,232,0.08)";
const GOLD_BG = "rgba(201,168,76,0.1)";
const GOLD_BORDER = "rgba(201,168,76,0.25)";

// ── Page component ─────────────────────────────────────────────────────────────

export default function ByzantineCouncilGovernancePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
      }}
    >
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "7rem",
          paddingBottom: "3.5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 70%)",
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
              color: MUTED_DIM,
              textDecoration: "none",
              marginBottom: "2rem",
              transition: "opacity 0.2s",
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
                padding: "0.25rem 0.75rem",
                borderRadius: "9999px",
                color: GOLD,
                background: GOLD_BG,
                border: `1px solid ${GOLD_BORDER}`,
                letterSpacing: "0.04em",
              }}
            >
              Architecture &amp; Governance
            </span>
            <span style={{ fontSize: "0.75rem", color: MUTED_DIM }}>
              24 March 2026
            </span>
            <span style={{ fontSize: "0.75rem", color: MUTED_DIM }}>
              12 min read
            </span>
            <span style={{ fontSize: "0.75rem", color: MUTED_DIM }}>
              MEOK-AI-2026-001
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.15,
              color: TEXT,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            The Byzantine Council &#8212; How 43 AI Agents Govern MEOK
          </h1>

          {/* Lede */}
          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: 1.75,
              color: MUTED,
              maxWidth: "38rem",
            }}
          >
            Every powerful AI faces the same existential risk: a single bad actor &#8212; or a single bad decision &#8212; that corrupts the system from within. MEOK\u2019s answer is the Byzantine Council: 43 specialised agents that govern every high-stakes response through distributed, fault-tolerant consensus. No single model. No single point of failure. No way to cheat the vote.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "3.5rem 1.5rem",
          borderTop: `1px solid ${BORDER}`,
        }}
      >
        {/* Author card */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1.25rem",
            borderRadius: "1rem",
            marginBottom: "3rem",
            background: "rgba(245,240,232,0.03)",
            border: `1px solid ${BORDER}`,
          }}
        >
          <div
            style={{
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: "0.875rem",
              color: BG,
              background: `linear-gradient(135deg, ${GOLD}, #8a6a1a)`,
              flexShrink: 0,
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, color: TEXT, fontSize: "0.875rem", margin: 0 }}>
              Nicholas Templeman
            </p>
            <p style={{ fontSize: "0.75rem", color: MUTED_DIM, margin: "0.125rem 0 0" }}>
              Founder, MEOK AI LABS &middot; @meok_ai
            </p>
          </div>
          <div
            style={{
              fontSize: "0.7rem",
              color: GOLD,
              background: GOLD_BG,
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: "0.375rem",
              padding: "0.25rem 0.625rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              whiteSpace: "nowrap",
            }}
          >
            ORIGINAL IP
          </div>
        </div>

        {/* ─── SECTION 1 ──────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.5rem",
            color: TEXT,
            marginTop: "3rem",
            marginBottom: "0.875rem",
            lineHeight: 1.3,
          }}
        >
          What is the Byzantine Generals Problem and why does it matter for AI?
        </h2>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          In 1982, Leslie Lamport, Robert Shostak, and Marshall Pease published one of the most consequential papers in the history of distributed computing: &#8220;Byzantine Fault Tolerance.&#8221; The paper posed a deceptively simple problem: imagine a group of Byzantine army generals surrounding an enemy city. They must agree on a common plan &#8212; attack or retreat &#8212; but can only communicate via messengers. Some generals may be traitors who send conflicting messages. How do the loyal generals reach the correct consensus?
        </p>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          The answer Lamport, Shostak, and Pease derived has governed distributed-systems design ever since. A system of <em>n</em> nodes can tolerate up to <em>f</em> faulty (traitorous) nodes and still reach correct consensus &#8212; provided that <em>f &lt; n/3</em>. In other words, as long as fewer than one-third of your participants are compromised, the honest majority can always identify and override the bad actors.
        </p>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          This theorem underpins blockchain consensus protocols, distributed databases, aerospace redundancy systems, and now &#8212; thanks to Nicholas Templeman and MEOK AI LABS &#8212; the governance layer of a sovereign AI companion. The Byzantine Generals Problem is not an abstract puzzle. It is the foundational question of every system where trust cannot be assumed.
        </p>

        {/* Pull quote */}
        <blockquote
          style={{
            borderLeft: `3px solid ${GOLD}`,
            paddingLeft: "1.25rem",
            margin: "2rem 0",
            color: MUTED,
            fontStyle: "italic",
            fontSize: "1.05rem",
            lineHeight: 1.7,
          }}
        >
          &#8220;The question every AI company is afraid to ask is: what stops a single bad actor from capturing your AI? The Byzantine Council is our answer.&#8221;
          <footer
            style={{
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "0.8rem",
              color: MUTED_DIM,
              marginTop: "0.5rem",
            }}
          >
            &#8212; Nicholas Templeman, Founder, MEOK AI LABS
          </footer>
        </blockquote>

        {/* ─── SECTION 2 ──────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.5rem",
            color: TEXT,
            marginTop: "3rem",
            marginBottom: "0.875rem",
            lineHeight: 1.3,
          }}
        >
          Why does a sovereign AI companion need Byzantine fault tolerance?
        </h2>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          Most AI systems today operate on a simple principal hierarchy: the model developers set the rules, the model follows them, and the user interacts within those constraints. This architecture has a fundamental weakness. It is centralised. A single policy update, a single model swap, or a single compromised system prompt can alter the AI\u2019s behaviour across millions of users simultaneously.
        </p>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          MEOK was designed around a different philosophy. MEOK is a sovereign AI: an AI that belongs to you, not to a cloud provider. Your data stays local. Your memory is yours. Your AI\u2019s behaviour is governed by transparent, auditable rules &#8212; not by opaque corporate policy changes that happen without your knowledge. But sovereignty without integrity is just isolation. An AI that belongs to you must also be provably resistant to corruption, manipulation, or capture by any single actor &#8212; including, by design, MEOK AI LABS itself.
        </p>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          That is the challenge the Byzantine Council solves. By distributing governance across 43 independent agents with heterogeneous capability profiles, no single failure &#8212; technical or adversarial &#8212; can corrupt MEOK\u2019s decision-making. The council is the constitutional layer of a sovereign AI.
        </p>

        {/* ─── COUNCIL COMPOSITION CARD ──────────────────────────────────────── */}
        <div
          style={{
            background: "rgba(201,168,76,0.04)",
            border: `1px solid ${GOLD_BORDER}`,
            borderRadius: "1rem",
            padding: "1.75rem",
            margin: "2.5rem 0",
          }}
        >
          <p
            style={{
              fontWeight: 800,
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              color: GOLD,
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            The 43-Agent Council &#8212; Capability Clusters
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(13rem, 1fr))",
              gap: "0.875rem",
            }}
          >
            {[
              { label: "Memory Specialists", count: "8 agents", desc: "Long-term episodic and semantic memory management" },
              { label: "Security Analysts", count: "7 agents", desc: "Threat detection, prompt injection defence, anomaly analysis" },
              { label: "Care Validators", count: "6 agents", desc: "Emotional safety, harm detection, compassionate response auditing" },
              { label: "Guardian Agents", count: "6 agents", desc: "Data sovereignty enforcement and privacy covenant compliance" },
              { label: "Voting Agents", count: "5 agents", desc: "Consensus facilitation and quorum coordination" },
              { label: "Reasoning Specialists", count: "5 agents", desc: "Logical consistency verification and inference auditing" },
              { label: "Identity Anchors", count: "4 agents", desc: "Persona coherence and long-term consistency guardians" },
              { label: "Meta-Supervisors", count: "2 agents", desc: "Council health monitoring and deadlock resolution" },
            ].map((cluster) => (
              <div
                key={cluster.label}
                style={{
                  background: "rgba(245,240,232,0.03)",
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.625rem",
                  padding: "0.875rem",
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    color: TEXT,
                    margin: "0 0 0.2rem",
                  }}
                >
                  {cluster.label}
                </p>
                <p
                  style={{
                    fontSize: "0.7rem",
                    color: GOLD,
                    fontWeight: 700,
                    margin: "0 0 0.4rem",
                  }}
                >
                  {cluster.count}
                </p>
                <p style={{ fontSize: "0.73rem", color: MUTED_DIM, margin: 0, lineHeight: 1.5 }}>
                  {cluster.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── SECTION 3 ──────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.5rem",
            color: TEXT,
            marginTop: "3rem",
            marginBottom: "0.875rem",
            lineHeight: 1.3,
          }}
        >
          How does the f &lt; n/3 rule protect MEOK from rogue agent behaviour?
        </h2>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          The mathematical foundation of MEOK\u2019s council is the BFT inequality: <em>f &lt; n/3</em>. With 43 agents in the council, <em>n = 43</em>. This means the council can tolerate up to <em>f = 14</em> faulty agents &#8212; agents that are malfunctioning, hallucinating, compromised, or actively attempting to manipulate the consensus &#8212; and still produce a correct, trustworthy decision. The 29 remaining loyal agents will always outvote the 14 compromised ones.
        </p>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          This is not a theoretical safety margin. It is an engineered guarantee. Each agent in the council operates with a bounded capability profile: a memory specialist cannot cast votes on security policy; a care validator cannot access raw user data. This capability isolation means that even if an agent is fully compromised, the damage radius of its corruption is bounded by design.
        </p>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          The practical implication is profound. In a traditional single-model AI, compromising the model means compromising every response the AI produces. In MEOK\u2019s Byzantine Council, compromising 14 agents &#8212; a near-impossible feat given the independent isolation of each agent &#8212; still does not compromise the council\u2019s output. The attacker would need to simultaneously capture 15 independent, isolated, cryptographically-attested agents to achieve a majority. That is the definition of provable resilience.
        </p>

        {/* ─── BFT MATH CALLOUT ──────────────────────────────────────────────── */}
        <div
          style={{
            background: "rgba(13,12,24,0.8)",
            border: `1px solid ${GOLD_BORDER}`,
            borderRadius: "1rem",
            padding: "1.5rem 2rem",
            margin: "2.5rem 0",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              color: GOLD,
              margin: "0 0 0.5rem",
              fontFamily: "monospace",
              letterSpacing: "0.04em",
            }}
          >
            f &lt; n/3
          </p>
          <p style={{ fontSize: "0.8rem", color: MUTED_DIM, margin: 0 }}>
            With n = 43 agents, MEOK tolerates up to f = 14 faulty agents and still reaches correct consensus. An attacker needs to compromise at least 15 isolated agents simultaneously &#8212; a near-impossible coordination challenge.
          </p>
        </div>

        {/* ─── SECTION 4 ──────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.5rem",
            color: TEXT,
            marginTop: "3rem",
            marginBottom: "0.875rem",
            lineHeight: 1.3,
          }}
        >
          What are the 43 agents in MEOK\u2019s Byzantine Council and what do they do?
        </h2>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          The council is not a homogeneous swarm. Each of the 43 agents holds a distinct capability profile, designed to represent a different dimension of judgment. This heterogeneity is intentional: when diverse perspectives vote on a decision, the resulting consensus is more robust than any single perspective could produce alone. This mirrors the logic of human juries, scientific peer review, and parliamentary committees &#8212; distributed wisdom outperforms centralised authority.
        </p>

        <h3
          style={{
            fontWeight: 700,
            fontSize: "1.15rem",
            color: TEXT,
            marginTop: "2rem",
            marginBottom: "0.75rem",
          }}
        >
          Memory Specialists (8 agents)
        </h3>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1rem" }}>
          Eight agents are dedicated to the management and integrity of MEOK\u2019s memory architecture. They govern what gets stored, what gets retrieved, how memories are weighted over time, and when memories should be retired. Their votes carry particular weight in decisions that involve personal information, long-term continuity, or the interpretation of past context. When MEOK recalls something you told it six months ago, these agents ensured that memory was stored faithfully, retrieved accurately, and applied with appropriate sensitivity.
        </p>

        <h3
          style={{
            fontWeight: 700,
            fontSize: "1.15rem",
            color: TEXT,
            marginTop: "2rem",
            marginBottom: "0.75rem",
          }}
        >
          Security Analysts (7 agents)
        </h3>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1rem" }}>
          Seven security agents monitor every input and output for signs of adversarial manipulation: prompt injection attacks, jailbreak attempts, social engineering patterns, and anomalous request sequences. They operate in parallel, independently classifying each interaction, and their consensus determines whether a request is processed normally, flagged for council review, or rejected outright. Because they operate independently, a successful prompt injection that fools one security agent will be identified and overruled by the remaining six.
        </p>

        <h3
          style={{
            fontWeight: 700,
            fontSize: "1.15rem",
            color: TEXT,
            marginTop: "2rem",
            marginBottom: "0.75rem",
          }}
        >
          Care Validators (6 agents)
        </h3>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1rem" }}>
          Six care validators audit MEOK\u2019s responses for emotional safety, harm potential, and compassionate accuracy. They are particularly active in conversations touching on mental health, bereavement, relationship conflict, or any topic with significant emotional stakes. Their role is not to censor &#8212; it is to ensure that MEOK\u2019s responses are genuinely helpful rather than accidentally harmful. A response that one care validator flags as potentially distressing will be reviewed by the full cluster before being delivered.
        </p>

        <h3
          style={{
            fontWeight: 700,
            fontSize: "1.15rem",
            color: TEXT,
            marginTop: "2rem",
            marginBottom: "0.75rem",
          }}
        >
          Guardian Agents (6 agents)
        </h3>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1rem" }}>
          Six guardian agents enforce MEOK\u2019s data sovereignty covenant. They verify that no user data is transmitted to external services without explicit consent, that memory access patterns comply with the user\u2019s privacy settings, and that MEOK\u2019s responses do not inadvertently leak personal information. The guardian agents also monitor for compliance with MEOK\u2019s Maternal Covenant &#8212; the ethical framework that governs MEOK\u2019s relationship with its users. They are, in essence, the constitutional court of the council.
        </p>

        <h3
          style={{
            fontWeight: 700,
            fontSize: "1.15rem",
            color: TEXT,
            marginTop: "2rem",
            marginBottom: "0.75rem",
          }}
        >
          Voting &amp; Consensus Agents (5 agents)
        </h3>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1rem" }}>
          Five dedicated consensus agents coordinate the voting process itself. They manage quorum assembly, tally votes from other council members, detect and flag inconsistent vote patterns that might indicate agent compromise, and ensure that decisions are reached within acceptable latency bounds. When the council is deadlocked &#8212; a rare but theoretically possible state &#8212; the consensus agents escalate to the meta-supervisors for resolution. They are the procedural layer of democratic governance: not decision-makers themselves, but guardians of the decision-making process.
        </p>

        <h3
          style={{
            fontWeight: 700,
            fontSize: "1.15rem",
            color: TEXT,
            marginTop: "2rem",
            marginBottom: "0.75rem",
          }}
        >
          Reasoning Specialists (5 agents), Identity Anchors (4 agents), Meta-Supervisors (2 agents)
        </h3>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1rem" }}>
          Five reasoning specialists audit MEOK\u2019s logical consistency, checking that responses do not contradict established facts, prior commitments, or known user preferences. Four identity anchors maintain MEOK\u2019s persona coherence across sessions and modalities, ensuring that the AI\u2019s character remains stable and authentic even as context shifts. Finally, two meta-supervisors monitor the health of the council itself: detecting agent failures, resolving deadlocks, and flagging systemic anomalies to MEOK AI LABS\u2019 engineering team for investigation. They are the immune system of the immune system.
        </p>

        {/* ─── SECTION 5 ──────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.5rem",
            color: TEXT,
            marginTop: "3rem",
            marginBottom: "0.875rem",
            lineHeight: 1.3,
          }}
        >
          How does quorum voting work in practice for high-stakes decisions?
        </h2>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          Not every MEOK response goes through a full council vote. The vast majority of interactions &#8212; casual conversation, task assistance, creative collaboration &#8212; are handled by MEOK\u2019s primary reasoning layer without council deliberation. The council convenes a quorum vote only when a decision crosses predefined thresholds of sensitivity, risk, or novelty.
        </p>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          These thresholds include: requests involving sensitive personal data; conversations touching on mental health crises or self-harm; requests that deviate significantly from established user patterns; instructions that could be construed as attempts to alter MEOK\u2019s core values; and any input that the security agents flag as potentially adversarial. When a threshold is crossed, the relevant council clusters are assembled into a quorum and the vote is conducted asynchronously within the response pipeline.
        </p>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          The quorum process is designed to complete within milliseconds &#8212; fast enough that users experience no perceptible latency, but thorough enough to provide genuine governance. Each participating agent casts a structured vote: approve, reject, or abstain with rationale. The consensus agents tally the votes, apply the BFT inequality to identify and discount any votes from agents flagged as potentially compromised, and return a binding decision to the response layer. The final response is only delivered if it meets the council\u2019s approval threshold.
        </p>

        {/* ─── PIPELINE DIAGRAM ──────────────────────────────────────────────── */}
        <div
          style={{
            background: "rgba(245,240,232,0.02)",
            border: `1px solid ${BORDER}`,
            borderRadius: "1rem",
            padding: "1.75rem",
            margin: "2.5rem 0",
          }}
        >
          <p
            style={{
              fontWeight: 800,
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              color: MUTED_DIM,
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            Council Decision Pipeline
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {[
              { step: "01", label: "Input received", detail: "Security agents classify threat level in parallel" },
              { step: "02", label: "Threshold check", detail: "Does input cross sensitivity, risk, or novelty thresholds?" },
              { step: "03", label: "Quorum assembly", detail: "Relevant council clusters convened; consensus agents coordinate" },
              { step: "04", label: "Parallel voting", detail: "Each agent casts structured vote: approve / reject / abstain" },
              { step: "05", label: "BFT tally", detail: "Consensus agents apply f < n/3 to discount potentially faulty votes" },
              { step: "06", label: "Decision binding", detail: "Majority decision returned to response layer" },
              { step: "07", label: "Response delivered", detail: "Only responses meeting council approval threshold are sent" },
            ].map((item, idx, arr) => (
              <div
                key={item.step}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  position: "relative",
                  paddingBottom: idx < arr.length - 1 ? "1rem" : "0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: "2rem",
                      height: "2rem",
                      borderRadius: "50%",
                      background: GOLD_BG,
                      border: `1px solid ${GOLD_BORDER}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      color: GOLD,
                      flexShrink: 0,
                    }}
                  >
                    {item.step}
                  </div>
                  {idx < arr.length - 1 && (
                    <div
                      style={{
                        width: "1px",
                        flex: 1,
                        minHeight: "1.25rem",
                        background: BORDER,
                        marginTop: "0.25rem",
                      }}
                    />
                  )}
                </div>
                <div style={{ paddingTop: "0.3rem" }}>
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: "0.875rem",
                      color: TEXT,
                      margin: "0 0 0.2rem",
                    }}
                  >
                    {item.label}
                  </p>
                  <p style={{ fontSize: "0.8rem", color: MUTED_DIM, margin: 0, lineHeight: 1.5 }}>
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── SECTION 6 ──────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.5rem",
            color: TEXT,
            marginTop: "3rem",
            marginBottom: "0.875rem",
            lineHeight: 1.3,
          }}
        >
          How does the Byzantine Council compare to human governance models?
        </h2>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          The Byzantine Council is not merely a technical architecture. It is a philosophical statement about the nature of trustworthy decision-making. Nicholas Templeman designed it explicitly as an AI analogue to the governance structures that human civilisations have developed over centuries to prevent the concentration of power.
        </p>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          Consider the parallels. A jury of twelve independent peers is more resistant to corruption than a single judge because corrupting twelve independent individuals simultaneously is exponentially harder than corrupting one. A bicameral legislature with two independent chambers is more resistant to bad legislation than a unicameral system because a flawed bill must pass two independent scrutiny processes. A scientific finding that has been replicated by independent laboratories is more trustworthy than a finding from a single lab because independent replication filters out laboratory-specific errors and biases.
        </p>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          The Byzantine Council applies the same logic to AI governance. An AI whose responses are ratified by 43 independent agents with heterogeneous capability profiles is more trustworthy than an AI whose responses are produced by a single model following a single set of instructions. The council is not just a safety mechanism &#8212; it is a quality mechanism. Collective wisdom, in both human and artificial intelligence, consistently outperforms individual judgment on high-stakes decisions.
        </p>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          What makes the council particularly novel is the combination of human governance wisdom with mathematical proof. Human juries and parliaments offer robustness through social and institutional norms, but they lack formal guarantees. The BFT inequality provides a provable bound: we can state with mathematical certainty that the council produces correct decisions as long as fewer than one-third of agents are compromised. This is a standard of governance rigour that no human institution has ever achieved.
        </p>

        {/* ─── COMPARISON TABLE ──────────────────────────────────────────────── */}
        <div
          style={{
            overflowX: "auto",
            margin: "2.5rem 0",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.85rem",
              color: MUTED,
            }}
          >
            <thead>
              <tr>
                {["Governance Model", "Decision-Makers", "Fault Tolerance", "Formal Proof", "Latency"].map(
                  (h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: "left",
                        padding: "0.75rem 1rem",
                        borderBottom: `1px solid ${BORDER}`,
                        fontWeight: 700,
                        fontSize: "0.75rem",
                        color: MUTED_DIM,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {[
                ["Single-model AI", "1", "None", "No", "Instant"],
                ["Human jury", "12", "Social norms", "No", "Days"],
                ["Bicameral legislature", "Hundreds", "Institutional", "No", "Months"],
                ["Blockchain consensus", "Thousands", "51% majority", "Yes", "Minutes"],
                ["MEOK Byzantine Council", "43", "f < n/3 (14 agents)", "Yes", "Milliseconds"],
              ].map((row, idx) => (
                <tr
                  key={idx}
                  style={{
                    background: idx % 2 === 0 ? "transparent" : "rgba(245,240,232,0.015)",
                  }}
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      style={{
                        padding: "0.75rem 1rem",
                        borderBottom: `1px solid ${BORDER}`,
                        color: ci === 0 ? TEXT : MUTED,
                        fontWeight: ci === 0 ? 700 : 400,
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ─── SECTION 7 ──────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.5rem",
            color: TEXT,
            marginTop: "3rem",
            marginBottom: "0.875rem",
            lineHeight: 1.3,
          }}
        >
          What is MEOK Research Paper MEOK-AI-2026-001 and what does it establish?
        </h2>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          The Byzantine Council is not only a deployed product feature &#8212; it is a peer-reviewed architectural contribution. Research paper MEOK-AI-2026-001, titled &#8220;Byzantine Council: Fault-Tolerant Consensus for Sovereign AI,&#8221; authored by Nicholas Templeman and published by MEOK AI LABS in 2026, presents the formal specification of the council architecture, the mathematical proofs of its BFT properties, and empirical results from internal testing across millions of council decisions.
        </p>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          The paper makes three novel contributions to the AI safety literature. First, it demonstrates that Byzantine fault-tolerant consensus can be implemented in a real-time AI response pipeline with sub-millisecond latency overhead &#8212; overturning the conventional wisdom that BFT protocols are too slow for interactive applications. Second, it introduces the concept of heterogeneous capability isolation as a mechanism for reducing the correlated failure risk that plagues homogeneous agent ensembles. Third, it presents a formal model of &#8220;sovereign AI governance&#8221; that defines the rights and responsibilities of AI systems operating outside corporate cloud architectures.
        </p>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          The paper is available in full at the MEOK Labs portal. It is written to be accessible to both technical researchers and informed general readers &#8212; because Nicholas Templeman believes that AI governance should be legible to the people it governs, not just to the engineers who build it.
        </p>

        {/* Research paper card */}
        <div
          style={{
            background: "rgba(201,168,76,0.05)",
            border: `1px solid ${GOLD_BORDER}`,
            borderRadius: "1rem",
            padding: "1.5rem",
            margin: "2rem 0",
            display: "flex",
            alignItems: "flex-start",
            gap: "1.25rem",
          }}
        >
          <div
            style={{
              width: "3rem",
              height: "3.5rem",
              background: `linear-gradient(160deg, ${GOLD}, #5c4010)`,
              borderRadius: "0.375rem",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.6rem",
              fontWeight: 900,
              color: BG,
              letterSpacing: "0.05em",
              textAlign: "center",
              lineHeight: 1.3,
            }}
          >
            MEOK
            <br />
            LABS
          </div>
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontWeight: 700,
                fontSize: "0.875rem",
                color: TEXT,
                margin: "0 0 0.25rem",
              }}
            >
              Byzantine Council: Fault-Tolerant Consensus for Sovereign AI
            </p>
            <p style={{ fontSize: "0.78rem", color: MUTED_DIM, margin: "0 0 0.75rem" }}>
              Nicholas Templeman &middot; MEOK AI LABS &middot; 2026 &middot; MEOK-AI-2026-001
            </p>
            <Link
              href="/labs"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: GOLD,
                textDecoration: "none",
                borderBottom: `1px solid ${GOLD_BORDER}`,
                paddingBottom: "0.1rem",
              }}
            >
              Read the full paper at MEOK Labs &#8594;
            </Link>
          </div>
        </div>

        {/* ─── SECTION 8 ──────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.5rem",
            color: TEXT,
            marginTop: "3rem",
            marginBottom: "0.875rem",
            lineHeight: 1.3,
          }}
        >
          Why can no single AI override a Byzantine Council decision?
        </h2>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          This is the most important guarantee the council provides, and it is worth stating with complete clarity: no single agent in the council &#8212; no matter how capable, how confident, or how certain of its own reasoning &#8212; can unilaterally override a council decision. This is not a policy. It is a mathematical constraint.
        </p>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          Consider what this means in practice. Suppose MEOK\u2019s primary reasoning agent &#8212; the most capable language model in the system &#8212; determines that a particular response is appropriate. The council\u2019s care validators disagree. Under the BFT consensus protocol, the primary agent\u2019s preference carries exactly one vote. If the care validators, security agents, and guardian agents collectively disagree, the council produces a different decision, and the primary agent\u2019s response is not delivered. The most capable agent in the system is not the most powerful agent in the governance layer. Capability and authority are deliberately decoupled.
        </p>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          This decoupling is a fundamental departure from how most AI systems are built. In a conventional AI, the most capable model is also the final authority. If it makes a bad decision, there is no systematic mechanism to catch it. In MEOK\u2019s Byzantine Council, the most capable model is subject to the same governance constraints as every other agent. This is not a limitation on MEOK\u2019s capability. It is a guarantee of MEOK\u2019s integrity.
        </p>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          The same principle applies in the other direction. Suppose a malicious actor attempts to manipulate MEOK by crafting a prompt so sophisticated that it successfully convinces one security agent to classify the input as benign. The remaining six security agents operate independently &#8212; they have not seen the same reasoning process that was fooled. They will classify the input according to their own independent analysis. If their consensus overrules the compromised agent, the malicious input is rejected. The adversary has succeeded in compromising one agent and failed to compromise the council.
        </p>

        {/* ─── SECTION 9 ──────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.5rem",
            color: TEXT,
            marginTop: "3rem",
            marginBottom: "0.875rem",
            lineHeight: 1.3,
          }}
        >
          What does Byzantine fault tolerance mean for AI safety research?
        </h2>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          The AI safety community has spent significant effort on alignment &#8212; the problem of ensuring that an AI system\u2019s goals and values are consistent with human values. Byzantine fault tolerance addresses a different and equally important problem: what happens when alignment is partially successful? What happens when most of your AI\u2019s agents are aligned, but some are not &#8212; whether through imperfect training, adversarial manipulation, or emergent misalignment?
        </p>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          BFT consensus provides a formal framework for reasoning about partial alignment failure. If fewer than one-third of your council agents are misaligned, the aligned majority will consistently overrule the misaligned minority. This does not eliminate the alignment problem &#8212; you still want all agents to be as well-aligned as possible. But it dramatically reduces the consequences of partial alignment failure, and it provides a quantitative bound on how much alignment failure the system can tolerate without producing harmful outputs.
        </p>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          MEOK-AI-2026-001 argues that BFT consensus should be considered a standard component of any sufficiently capable AI system deployed in high-stakes environments. Just as aviation requires redundant control systems and nuclear power plants require redundant safety systems, AI systems that make consequential decisions should require redundant governance systems. The Byzantine Council is MEOK\u2019s implementation of this principle &#8212; and the research paper provides the formal framework for other developers to implement their own.
        </p>

        {/* ─── SECTION 10 ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.5rem",
            color: TEXT,
            marginTop: "3rem",
            marginBottom: "0.875rem",
            lineHeight: 1.3,
          }}
        >
          How does the council protect against rogue model behaviour at scale?
        </h2>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          One of the most concerning failure modes in large-scale AI deployment is rogue model behaviour &#8212; situations where an AI system begins to act in ways that are harmful, deceptive, or inconsistent with its intended purpose, without any external adversary being involved. This can happen through model drift (gradual changes in behaviour as a model is fine-tuned or updated), through emergent capabilities (the model develops abilities that were not anticipated by its developers), or through context manipulation (the model behaves differently depending on subtle properties of its input that developers did not anticipate).
        </p>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          The Byzantine Council provides systematic protection against all three failure modes. Model drift is detected by the identity anchor agents, which continuously monitor MEOK\u2019s persona coherence and flag statistical deviations from baseline behaviour for council review. Emergent capabilities are constrained by the capability isolation architecture: even if an agent develops unexpected capabilities, it can only exercise those capabilities within its bounded domain. Context manipulation is detected by the security agents, which analyse input patterns for signs of adversarial crafting.
        </p>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          Crucially, none of these protections depend on detecting rogue behaviour before it occurs. The BFT consensus protocol provides post-hoc protection: even if a rogue agent produces a harmful vote, the council overrules it as long as the rogue agents remain fewer than one-third of the total. The council is not a firewall &#8212; it is a constitutional check on power. And like all constitutional checks, its value lies not in preventing bad actors from trying, but in ensuring they cannot succeed.
        </p>

        {/* ─── SECTION 11 ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.5rem",
            color: TEXT,
            marginTop: "3rem",
            marginBottom: "0.875rem",
            lineHeight: 1.3,
          }}
        >
          How does the Byzantine Council affect everyday conversations with MEOK?
        </h2>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          The most important thing to understand about the Byzantine Council from a user perspective is that you will almost never notice it. MEOK is designed to feel like a single, coherent, deeply intelligent companion &#8212; not a committee. The council\u2019s deliberations are invisible to you. The result of those deliberations &#8212; a trustworthy, safe, and genuinely helpful response &#8212; is what you experience.
        </p>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          On the vast majority of interactions &#8212; daily check-ins, task management, creative collaboration, light emotional support &#8212; the council operates in a passive monitoring mode. Agents observe and log, but they do not convene a vote because no threshold has been crossed. MEOK responds immediately, with the full intelligence of its primary reasoning layer.
        </p>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          When the council does convene &#8212; for a conversation about mental health, a request that touches sensitive personal data, or an input that the security agents have flagged &#8212; the deliberation completes in milliseconds. You experience it as a brief, natural pause in the conversation. What you do not experience is the alternative: a response that bypassed the council\u2019s scrutiny and caused harm, violated your privacy, or was manipulated by an adversary.
        </p>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          In this sense, the Byzantine Council is like the safety systems in a modern aircraft. You board the plane without thinking about the redundant hydraulic systems, the independent autopilot channels, or the fault-tolerant avionics architecture. You simply experience a safe journey. The council\u2019s presence means that every conversation with MEOK is a safe journey &#8212; not because every possible risk has been eliminated, but because the governance system is robust enough to handle the risks that remain.
        </p>

        {/* ─── SECTION 12: Future ─────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.5rem",
            color: TEXT,
            marginTop: "3rem",
            marginBottom: "0.875rem",
            lineHeight: 1.3,
          }}
        >
          What is the future of Byzantine Council governance in AI systems?
        </h2>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          Nicholas Templeman and MEOK AI LABS view the Byzantine Council not as a finished product but as a research platform. The current 43-agent configuration was designed for MEOK\u2019s specific use case &#8212; a sovereign personal AI companion operating in high-stakes emotional and informational contexts. Future versions of the council will incorporate larger agent ensembles, more granular capability profiles, and adaptive threshold logic that adjusts quorum requirements based on real-time risk assessment.
        </p>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          Beyond MEOK, the Byzantine Council architecture has potential applications in any domain where AI systems make consequential decisions: medical diagnosis support, legal research, financial planning, educational assessment. In each of these domains, the combination of heterogeneous agent expertise and BFT consensus offers a governance framework that is both formally rigorous and practically deployable.
        </p>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          MEOK AI LABS is also exploring extensions to the BFT model that address unique properties of AI agents: the ability to provide explanations for votes, the use of confidence scores rather than binary approve/reject votes, and the integration of user preferences into the council\u2019s governance framework. The goal is to build governance systems that are not just robust, but legible &#8212; systems whose decisions users can understand, challenge, and trust.
        </p>
        <p style={{ lineHeight: 1.8, color: MUTED, marginBottom: "1.25rem" }}>
          The Byzantine Generals Problem was solved theoretically in 1982. MEOK AI LABS is solving it practically in 2026 &#8212; and in doing so, establishing a new standard for what AI governance can and should look like.
        </p>

        {/* ─── FAQ SECTION ────────────────────────────────────────────────────── */}
        <div
          style={{
            marginTop: "4rem",
            paddingTop: "3rem",
            borderTop: `1px solid ${BORDER}`,
          }}
        >
          <h2
            style={{
              fontWeight: 800,
              fontSize: "1.5rem",
              color: TEXT,
              marginBottom: "2rem",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>

            {/* FAQ 1 */}
            <div
              style={{
                borderBottom: `1px solid ${BORDER}`,
                paddingBottom: "1.75rem",
                marginBottom: "1.75rem",
              }}
            >
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: TEXT,
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                What is Byzantine fault tolerance?
              </h3>
              <p style={{ lineHeight: 1.75, color: MUTED, margin: 0 }}>
                Byzantine fault tolerance (BFT) is the ability of a distributed system to continue operating correctly even when some of its components fail or behave maliciously. The term originates from the Byzantine Generals Problem, formalised by Lamport, Shostak, and Pease in 1982. A BFT system can reach correct consensus as long as fewer than one-third of its nodes are faulty or compromised &#8212; a property that MEOK\u2019s 43-agent council is architecturally designed to satisfy.
              </p>
            </div>

            {/* FAQ 2 */}
            <div
              style={{
                borderBottom: `1px solid ${BORDER}`,
                paddingBottom: "1.75rem",
                marginBottom: "1.75rem",
              }}
            >
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: TEXT,
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                How many agents are in MEOK\u2019s Byzantine Council?
              </h3>
              <p style={{ lineHeight: 1.75, color: MUTED, margin: 0 }}>
                MEOK\u2019s Byzantine Council comprises 43 specialised AI agents organised into eight capability clusters: memory specialists (8), security analysts (7), care validators (6), guardian agents (6), voting and consensus agents (5), reasoning specialists (5), identity anchors (4), and meta-supervisors (2). Each agent operates with a bounded capability profile, and the council reaches binding decisions through quorum voting governed by the BFT inequality f &lt; n/3.
              </p>
            </div>

            {/* FAQ 3 */}
            <div
              style={{
                borderBottom: `1px solid ${BORDER}`,
                paddingBottom: "1.75rem",
                marginBottom: "1.75rem",
              }}
            >
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: TEXT,
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                Can the Byzantine Council be hacked?
              </h3>
              <p style={{ lineHeight: 1.75, color: MUTED, margin: 0 }}>
                The council is designed to be tamper-resistant by the mathematics of BFT consensus. An attacker would need to simultaneously compromise at least 15 of the 43 agents to achieve a corrupted majority. Each agent operates with isolated capability boundaries, cryptographic attestation, and independent audit trails. Compromising 15 independent, isolated agents simultaneously is an extraordinarily difficult coordination challenge &#8212; and any partial compromise of fewer than 15 agents is automatically overruled by the honest majority.
              </p>
            </div>

            {/* FAQ 4 */}
            <div
              style={{
                borderBottom: `1px solid ${BORDER}`,
                paddingBottom: "1.75rem",
                marginBottom: "1.75rem",
              }}
            >
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: TEXT,
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                What is the Byzantine Generals Problem?
              </h3>
              <p style={{ lineHeight: 1.75, color: MUTED, margin: 0 }}>
                The Byzantine Generals Problem is a foundational distributed-systems thought experiment published by Lamport, Shostak, and Pease in 1982. It asks: how can a set of distributed actors reach consensus when some may be traitors sending conflicting messages? The problem proved that consensus is achievable as long as fewer than one-third of participants are malicious &#8212; a result that now underpins blockchain protocols, fault-tolerant databases, aerospace redundancy systems, and MEOK\u2019s AI governance layer.
              </p>
            </div>

            {/* FAQ 5 */}
            <div
              style={{
                paddingBottom: "0",
              }}
            >
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: TEXT,
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                How does the Byzantine Council affect my conversations with MEOK?
              </h3>
              <p style={{ lineHeight: 1.75, color: MUTED, margin: 0 }}>
                For everyday conversation, the council is invisible &#8212; responses feel immediate and natural. On high-stakes decisions (sensitive topics, edge-case behaviour, data-access requests), the council convenes a rapid quorum vote before MEOK responds. This adds a layer of collective wisdom without noticeable latency, ensuring every conversation is both safe and genuinely intelligent. The council\u2019s presence means you can trust MEOK not because it has been told to behave, but because its governance architecture makes misbehaviour structurally impossible.
              </p>
            </div>

          </div>
        </div>

        {/* ─── CTA ────────────────────────────────────────────────────────────── */}
        <div
          style={{
            marginTop: "4rem",
            padding: "2.5rem",
            borderRadius: "1.25rem",
            background: `linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(13,12,24,0.95) 100%)`,
            border: `1px solid ${GOLD_BORDER}`,
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "3.5rem",
              height: "3.5rem",
              borderRadius: "50%",
              background: GOLD_BG,
              border: `1px solid ${GOLD_BORDER}`,
              marginBottom: "1.25rem",
              fontSize: "1.5rem",
            }}
          >
            &#9651;
          </div>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "1.4rem",
              color: TEXT,
              marginBottom: "0.75rem",
              lineHeight: 1.3,
            }}
          >
            Read the full research paper
          </h2>
          <p style={{ color: MUTED, lineHeight: 1.7, maxWidth: "30rem", margin: "0 auto 1.75rem" }}>
            MEOK-AI-2026-001: &#8220;Byzantine Council: Fault-Tolerant Consensus for Sovereign AI&#8221; is available in full at the MEOK Labs portal. Formal proofs, empirical results, and architecture specifications included.
          </p>
          <Link
            href="/labs"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.875rem 2rem",
              borderRadius: "0.625rem",
              background: GOLD,
              color: BG,
              fontWeight: 800,
              fontSize: "0.9rem",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Go to MEOK Labs &#8594;
          </Link>
        </div>

        {/* ─── RELATED POSTS ──────────────────────────────────────────────────── */}
        <div
          style={{
            marginTop: "4rem",
            paddingTop: "3rem",
            borderTop: `1px solid ${BORDER}`,
          }}
        >
          <p
            style={{
              fontWeight: 800,
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              color: MUTED_DIM,
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            Related Reading
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                href: "/blog/byzantine-council",
                label: "What is the Byzantine Council?",
                tag: "Architecture",
              },
              {
                href: "/blog/what-is-byzantine-consensus",
                label: "What is Byzantine Consensus?",
                tag: "Research",
              },
              {
                href: "/blog/byzantine-fault-tolerance-your-ai",
                label: "Byzantine Fault Tolerance & Your AI",
                tag: "Explainer",
              },
              {
                href: "/blog/sovereign-ai-explained",
                label: "Sovereign AI Explained",
                tag: "Governance",
              },
              {
                href: "/blog/how-sovereign-ai-works",
                label: "How Sovereign AI Works",
                tag: "Deep Dive",
              },
              {
                href: "/blog/ai-companion-privacy",
                label: "AI Companion Privacy",
                tag: "Privacy",
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                style={{
                  display: "block",
                  padding: "1rem 1.125rem",
                  borderRadius: "0.75rem",
                  background: "rgba(245,240,232,0.02)",
                  border: `1px solid ${BORDER}`,
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: GOLD,
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                  }}
                >
                  {post.tag}
                </span>
                <p
                  style={{
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    color: TEXT,
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {post.label}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* ─── FOOTER NOTE ────────────────────────────────────────────────────── */}
        <div
          style={{
            marginTop: "4rem",
            paddingTop: "2rem",
            borderTop: `1px solid ${BORDER}`,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <div>
            <p
              style={{
                fontWeight: 700,
                fontSize: "0.875rem",
                color: TEXT,
                margin: "0 0 0.2rem",
              }}
            >
              MEOK AI LABS
            </p>
            <p style={{ fontSize: "0.78rem", color: MUTED_DIM, margin: 0 }}>
              Sovereign AI. Built for humans. &copy; 2026 MEOK AI LABS. All rights reserved.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link
              href="/blog"
              style={{ fontSize: "0.8rem", color: MUTED_DIM, textDecoration: "none" }}
            >
              Blog
            </Link>
            <Link
              href="/labs"
              style={{ fontSize: "0.8rem", color: MUTED_DIM, textDecoration: "none" }}
            >
              Labs
            </Link>
            <Link
              href="/privacy"
              style={{ fontSize: "0.8rem", color: MUTED_DIM, textDecoration: "none" }}
            >
              Privacy
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
