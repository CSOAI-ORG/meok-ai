import type { Metadata } from "next"
import Link from "next/link"

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "What Is the Byzantine Council? MEOK's 43-Agent AI Governance System Explained | MEOK AI LABS",
  description:
    "The Byzantine Council is MEOK's original IP: a 43-agent Byzantine fault-tolerant AI governance system where no single agent can corrupt the decision. Invented by Nicholas Templeman. Research paper MEOK-AI-2026-001.",
  keywords: [
    "Byzantine Council",
    "Byzantine fault tolerance",
    "43-agent AI governance",
    "BFT consensus AI",
    "AI governance system",
    "MEOK AI LABS",
    "Nicholas Templeman",
    "MEOK-AI-2026-001",
    "Byzantine Generals Problem",
    "AI safety architecture",
    "care-based AI",
    "Maternal Covenant",
    "AI multi-agent system",
    "sovereign AI",
    "AI decision making",
    "Byzantine fault tolerant AI",
    "AI bias prevention",
    "distributed AI consensus",
  ],
  authors: [{ name: "Nicholas Templeman" }],
  openGraph: {
    title: "What Is the Byzantine Council? MEOK's 43-Agent AI Governance System Explained",
    description:
      "43 agents. f < n/3. No single agent can corrupt the decision. MEOK's Byzantine Council is the world's first BFT governance layer built into a personal AI companion. Original IP by Nicholas Templeman.",
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/what-is-the-byzantine-council",
    siteName: "MEOK AI LABS",
    images: [
      {
        url: "https://meok.ai/api/og?title=What+Is+the+Byzantine+Council%3F&desc=MEOK%27s+43-Agent+AI+Governance+System+Explained",
        width: 1200,
        height: 630,
        alt: "What Is the Byzantine Council? MEOK's 43-Agent AI Governance System Explained",
      },
    ],
    tags: [
      "Byzantine Council",
      "AI Governance",
      "BFT Consensus",
      "MEOK",
      "AI Safety",
      "Nicholas Templeman",
      "Technology",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is the Byzantine Council? MEOK's 43-Agent AI Governance System Explained",
    description:
      "43 agents vote on every decision your AI makes. No single agent can corrupt the consensus. This is MEOK's Byzantine Council — original IP by Nicholas Templeman, MEOK AI LABS.",
    images: [
      "https://meok.ai/api/og?title=What+Is+the+Byzantine+Council%3F&desc=MEOK%27s+43-Agent+AI+Governance+System+Explained",
    ],
  },
  alternates: {
    canonical: "https://meok.ai/blog/what-is-the-byzantine-council",
  },
}

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "What Is the Byzantine Council? MEOK's 43-Agent AI Governance System Explained",
  description:
    "The Byzantine Council is MEOK's original IP: a 43-agent Byzantine fault-tolerant AI governance system where f < n/3, meaning no single agent can corrupt the consensus. Named after the Byzantine Generals Problem in distributed computing. Invented by Nicholas Templeman, MEOK AI LABS. Research paper MEOK-AI-2026-001.",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    jobTitle: "Founder & Chief Architect, MEOK AI LABS",
    url: "https://meok.ai",
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
    "@id": "https://meok.ai/blog/what-is-the-byzantine-council",
  },
  image:
    "https://meok.ai/api/og?title=What+Is+the+Byzantine+Council%3F&desc=MEOK%27s+43-Agent+AI+Governance+System+Explained",
  keywords:
    "Byzantine Council, Byzantine fault tolerance, 43-agent AI governance, BFT consensus, AI governance, MEOK AI LABS, Nicholas Templeman, MEOK-AI-2026-001, Byzantine Generals Problem, AI safety, Maternal Covenant",
  articleSection: "Technology",
  wordCount: 3800,
  inLanguage: "en-GB",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Byzantine Council in MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Byzantine Council is MEOK's 43-agent Byzantine fault-tolerant AI governance system. Named after the Byzantine Generals Problem in distributed computing, it governs every consequential decision your AI companion makes. With 43 agents, up to 14 can fail or be compromised without corrupting the consensus outcome — because f < n/3. No single agent, developer, or external actor can override the collective decision.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Byzantine Generals Problem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Byzantine Generals Problem is a classic computer science thought experiment formulated by Lamport, Shostak, and Pease in 1982. It asks: how can distributed nodes in a system reach consensus when some of those nodes may be faulty or malicious? The problem is named after the challenge faced by Byzantine army generals who must coordinate an attack but cannot trust all messengers. Byzantine fault tolerance (BFT) is the solution: a protocol that reaches correct consensus even when up to f < n/3 nodes behave arbitrarily.",
      },
    },
    {
      "@type": "Question",
      name: "How many agents are in the Byzantine Council and why 43?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Byzantine Council has 43 agents. 43 is chosen because it is the smallest number that satisfies f < n/3 with a meaningful fault tolerance buffer while remaining computationally efficient. With 43 agents, up to 14 can be compromised or fail — and the remaining 29 honest agents will always reach correct consensus. 43 also divides cleanly across MEOK's 6 agent role categories with a prime number structure that prevents voting deadlocks.",
      },
    },
    {
      "@type": "Question",
      name: "Who invented MEOK's Byzantine Council?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Byzantine Council architecture, including the 43-agent topology, care score consensus protocol, Maternal Covenant integration, and fractal council design, was invented by Nicholas Templeman, Founder and Chief Architect of MEOK AI LABS. It is documented in research paper MEOK-AI-2026-001, filed as original intellectual property by MEOK AI LABS. No other personal AI companion system has deployed Byzantine fault-tolerant governance at the companion layer.",
      },
    },
    {
      "@type": "Question",
      name: "What are the 6 agent roles in the Byzantine Council?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 43 agents in the Byzantine Council are organised into 6 role categories: Memory Specialists (who govern memory access and recall integrity), Security Analysts (who monitor for prompt injection, social engineering, and external threats), Care Validators (who score every response across MEOK's 6 care dimensions), Research Agents (who surface relevant context and verify factual claims), Guardian Agents (who flag risk events and escalate safety concerns), and Council Members (the deliberative core who aggregate votes and reach final consensus).",
      },
    },
    {
      "@type": "Question",
      name: "What does the Byzantine Council protect against in AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Byzantine Council protects against five primary failure modes in AI systems: single-model bias (one model's blind spots cannot dominate the output), prompt injection attacks (malicious instructions cannot override council consensus), model failure (if one underlying LLM fails or returns garbage, 42 agents continue), developer capture (no individual developer can silently modify companion behaviour without a council vote), and social engineering (manipulation of one agent cannot propagate to the consensus outcome).",
      },
    },
  ],
}

// ── Agent role data ────────────────────────────────────────────────────────────

const agentRoles = [
  {
    role: "Memory Specialists",
    count: 7,
    color: "#7b6fcf",
    icon: "M",
    description:
      "Govern all read and write operations against your Sovereign Memory store. Every memory access — episodic, semantic, procedural, or identity — requires Memory Specialist approval before it executes.",
  },
  {
    role: "Security Analysts",
    count: 7,
    color: "#e07b54",
    icon: "S",
    description:
      "Continuously monitor for prompt injection, jailbreak attempts, data exfiltration patterns, and social-engineering vectors. A Security Analyst dissent triggers immediate escalation to the full council.",
  },
  {
    role: "Care Validators",
    count: 8,
    color: "#5db07b",
    icon: "C",
    description:
      "Score every response across MEOK's 6 care dimensions: emotional attunement, factual integrity, safety, dignity, growth orientation, and boundary respect. No response below the care floor is served to the user.",
  },
  {
    role: "Research Agents",
    count: 7,
    color: "#c9a84c",
    icon: "R",
    description:
      "Surface relevant context from memory, verify factual claims against trusted knowledge bases, and flag potentially harmful misinformation before it reaches the response layer.",
  },
  {
    role: "Guardian Agents",
    count: 7,
    color: "#d65c7a",
    icon: "G",
    description:
      "Specialised in crisis detection, safeguarding escalation, and family protection protocols. Guardian Agents can trigger emergency pathways independently of the general council vote when time is critical.",
  },
  {
    role: "Council Members",
    count: 7,
    color: "#87ceeb",
    icon: "Co",
    description:
      "The deliberative core. Council Members aggregate the votes from all other role categories, manage the consensus protocol, log decisions to the immutable audit trail, and certify the final output.",
  },
]

const careDimensions = [
  {
    dimension: "Emotional Attunement",
    description:
      "Does the response meet the user where they are emotionally? Agents score tone matching, empathy accuracy, and emotional safety.",
    score: "0–100",
    floor: 65,
  },
  {
    dimension: "Factual Integrity",
    description:
      "Is every claim in the response accurate and properly qualified? Research Agents cross-check assertions against memory and knowledge.",
    score: "0–100",
    floor: 80,
  },
  {
    dimension: "Physical Safety",
    description:
      "Could any element of this response cause physical harm? Guardian Agents apply a zero-tolerance floor — any flagged risk halts the response.",
    score: "Binary",
    floor: "Pass required",
  },
  {
    dimension: "Human Dignity",
    description:
      "Does the response treat the user with unconditional respect? Care Validators enforce MEOK's dignity covenant regardless of the user's request.",
    score: "0–100",
    floor: 75,
  },
  {
    dimension: "Growth Orientation",
    description:
      "Does the response support the user's long-term flourishing rather than short-term gratification? MEOK distinguishes between what users want and what serves them.",
    score: "0–100",
    floor: 50,
  },
  {
    dimension: "Boundary Respect",
    description:
      "Does the response honour the user's stated boundaries, cultural context, and personal values stored in Sovereign Memory?",
    score: "0–100",
    floor: 70,
  },
]

// ── Page ───────────────────────────────────────────────────────────────────────

export default function WhatIsTheByzantineCouncilPage() {
  const pageStyle = {
    minHeight: "100vh",
    background: "#0d0c18",
    color: "#f5f0e8",
  }

  const heroStyle = {
    paddingTop: "8rem",
    paddingBottom: "3.5rem",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    position: "relative" as const,
    overflow: "hidden",
  }

  const heroGlowStyle = {
    position: "absolute" as const,
    inset: 0,
    pointerEvents: "none" as const,
    background:
      "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(123,111,207,0.12) 0%, transparent 70%)",
  }

  const maxWidthStyle = {
    maxWidth: "52rem",
    marginLeft: "auto",
    marginRight: "auto",
    position: "relative" as const,
  }

  const backLinkStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.375rem",
    fontSize: "0.875rem",
    marginBottom: "2rem",
    color: "rgba(245,240,232,0.35)",
    textDecoration: "none",
  }

  const tagRowStyle = {
    display: "flex",
    flexWrap: "wrap" as const,
    alignItems: "center",
    gap: "0.75rem",
    marginBottom: "1.5rem",
  }

  const tagStyle = {
    display: "inline-flex",
    alignItems: "center",
    fontSize: "0.75rem",
    fontWeight: 700,
    padding: "0.375rem 0.75rem",
    borderRadius: "9999px",
    color: "#7b6fcf",
    background: "rgba(123,111,207,0.12)",
    border: "1px solid rgba(123,111,207,0.3)",
  }

  const featuredTagStyle = {
    display: "inline-flex",
    alignItems: "center",
    fontSize: "0.75rem",
    fontWeight: 700,
    padding: "0.375rem 0.75rem",
    borderRadius: "9999px",
    color: "#c9a84c",
    background: "rgba(201,168,76,0.12)",
    border: "1px solid rgba(201,168,76,0.3)",
  }

  const metaTextStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.375rem",
    fontSize: "0.75rem",
    color: "rgba(245,240,232,0.35)",
  }

  const h1Style = {
    fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
    fontWeight: 900,
    fontSize: "clamp(1.9rem, 3.8vw, 3rem)",
    color: "#ffffff",
    lineHeight: 1.15,
    marginBottom: "1.25rem",
    letterSpacing: "-0.01em",
  }

  const subtitleStyle = {
    color: "rgba(245,240,232,0.55)",
    fontSize: "1.125rem",
    lineHeight: 1.75,
    maxWidth: "42rem",
  }

  const bodyContainerStyle = {
    maxWidth: "52rem",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    paddingTop: "3.5rem",
    paddingBottom: "3.5rem",
    borderTop: "1px solid rgba(245,240,232,0.06)",
  }

  const authorCardStyle = {
    display: "flex",
    alignItems: "flex-start",
    gap: "1rem",
    padding: "1.25rem",
    borderRadius: "1rem",
    marginBottom: "3rem",
    background: "rgba(245,240,232,0.04)",
    border: "1px solid rgba(245,240,232,0.08)",
  }

  const avatarStyle = {
    width: "3rem",
    height: "3rem",
    borderRadius: "9999px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
    color: "#0d0c18",
    fontSize: "0.8125rem",
    flexShrink: 0,
    background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
  }

  const bodyTextStyle = {
    color: "rgba(245,240,232,0.72)",
    fontSize: "1.0125rem",
    lineHeight: 1.9,
  }

  const h2Style = {
    fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
    fontWeight: 900,
    fontSize: "1.5rem",
    color: "#ffffff",
    marginTop: "3.5rem",
    marginBottom: "1.125rem",
    lineHeight: 1.25,
    letterSpacing: "-0.005em",
  }

  const h3Style = {
    fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
    fontWeight: 700,
    fontSize: "1.125rem",
    color: "#ffffff",
    marginTop: "2rem",
    marginBottom: "0.75rem",
    lineHeight: 1.3,
  }

  const pStyle = {
    marginBottom: "1.25rem",
    color: "rgba(245,240,232,0.72)",
    fontSize: "1.0125rem",
    lineHeight: 1.9,
  }

  const accentTextStyle = {
    color: "#7b6fcf",
    fontWeight: 700,
  }

  const goldTextStyle = {
    color: "#c9a84c",
    fontWeight: 700,
  }

  const formulaBoxStyle = {
    display: "inline-block",
    background: "rgba(123,111,207,0.12)",
    border: "1px solid rgba(123,111,207,0.35)",
    borderRadius: "0.5rem",
    padding: "0.25rem 0.75rem",
    fontSize: "1rem",
    fontFamily: "monospace",
    color: "#7b6fcf",
    fontWeight: 700,
    letterSpacing: "0.05em",
  }

  const calloutStyle = {
    background: "rgba(123,111,207,0.08)",
    border: "1px solid rgba(123,111,207,0.25)",
    borderLeft: "3px solid #7b6fcf",
    borderRadius: "0 0.75rem 0.75rem 0",
    padding: "1.25rem 1.5rem",
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
  }

  const goldCalloutStyle = {
    background: "rgba(201,168,76,0.07)",
    border: "1px solid rgba(201,168,76,0.25)",
    borderLeft: "3px solid #c9a84c",
    borderRadius: "0 0.75rem 0.75rem 0",
    padding: "1.25rem 1.5rem",
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
  }

  const dividerStyle = {
    borderTop: "1px solid rgba(245,240,232,0.07)",
    marginTop: "3rem",
    marginBottom: "3rem",
  }

  const sectionLabelStyle = {
    fontSize: "0.6875rem",
    fontWeight: 700,
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    color: "rgba(245,240,232,0.3)",
    marginBottom: "1.5rem",
  }

  const ctaStyle = {
    borderRadius: "1.25rem",
    padding: "2.5rem",
    marginBottom: "4rem",
    position: "relative" as const,
    overflow: "hidden",
    background: "rgba(201,168,76,0.07)",
    border: "1px solid rgba(201,168,76,0.2)",
  }

  const ctaGlowStyle = {
    position: "absolute" as const,
    top: 0,
    right: 0,
    width: "18rem",
    height: "18rem",
    pointerEvents: "none" as const,
    background:
      "radial-gradient(circle at 80% 10%, rgba(201,168,76,0.18), transparent 65%)",
  }

  const ctaButtonStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.875rem 1.75rem",
    borderRadius: "9999px",
    fontWeight: 700,
    fontSize: "0.9375rem",
    background: "#c9a84c",
    color: "#0d0c18",
    textDecoration: "none",
  }

  const secondaryCTAStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.875rem 1.75rem",
    borderRadius: "9999px",
    fontWeight: 700,
    fontSize: "0.9375rem",
    background: "transparent",
    color: "#c9a84c",
    border: "1px solid rgba(201,168,76,0.4)",
    textDecoration: "none",
    marginLeft: "1rem",
  }

  const relatedPostCardStyle = {
    borderRadius: "1rem",
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.75rem",
    background: "rgba(245,240,232,0.04)",
    border: "1px solid rgba(245,240,232,0.08)",
    textDecoration: "none",
  }

  return (
    <div style={pageStyle}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section style={heroStyle}>
        <div style={heroGlowStyle} />
        <div style={maxWidthStyle}>
          <Link href="/blog" style={backLinkStyle}>
            ← Back to Blog
          </Link>

          <div style={tagRowStyle}>
            <span style={tagStyle}>Technology</span>
            <span style={featuredTagStyle}>Featured Post</span>
            <span style={metaTextStyle}>25 March 2026</span>
            <span style={metaTextStyle}>14 min read</span>
          </div>

          <h1 style={h1Style}>
            What Is the Byzantine Council?{" "}
            <span style={{ color: "#7b6fcf" }}>MEOK&apos;s 43-Agent AI Governance System</span> Explained
          </h1>

          <p style={subtitleStyle}>
            Traditional AI is a single model with a single point of failure. MEOK&apos;s Byzantine
            Council deploys 43 specialised agents in a Byzantine fault-tolerant consensus
            architecture — meaning up to 14 agents can fail or be compromised without corrupting
            a single decision. This is the most comprehensive explanation of how it works and
            why it matters for the future of personal AI.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ─────────────────────────────────────────────────── */}
      <div style={bodyContainerStyle}>

        {/* Author card */}
        <div style={authorCardStyle}>
          <div style={avatarStyle}>NT</div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, color: "#ffffff", fontSize: "0.9375rem", marginBottom: "0.25rem" }}>
              Nicholas Templeman
            </p>
            <p style={{ fontSize: "0.8125rem", color: "rgba(245,240,232,0.4)", marginBottom: "0.5rem" }}>
              Founder &amp; Chief Architect, MEOK AI LABS
            </p>
            <p style={{ fontSize: "0.8125rem", color: "rgba(245,240,232,0.35)", lineHeight: 1.6 }}>
              Nicholas invented the Byzantine Council architecture as part of MEOK&apos;s original
              research programme. The system is documented in research paper MEOK-AI-2026-001 and
              represents the first deployment of Byzantine fault-tolerant governance at the personal
              AI companion layer.
            </p>
          </div>
          <Link
            href="/about"
            style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#c9a84c", textDecoration: "none", flexShrink: 0 }}
          >
            About →
          </Link>
        </div>

        {/* ── INTRODUCTION ──────────────────────────────────────────────── */}
        <div style={{ marginBottom: "1.5rem" }}>
          <p style={sectionLabelStyle}>Introduction</p>
        </div>

        <p style={pStyle}>
          In 1982, three computer scientists — Leslie Lamport, Robert Shostak, and Marshall Pease
          — published a paper that would quietly underpin some of the most important systems in
          modern computing. The paper was titled &ldquo;The Byzantine Generals Problem.&rdquo; It asked a
          deceptively simple question: how can a group of distributed nodes reach agreement when
          some of them might be lying?
        </p>

        <p style={pStyle}>
          Forty-four years later, that question has never been more relevant. We are building AI
          systems of unprecedented influence — companions that know our fears, our families, our
          financial details, our health struggles. And we are deploying them with the governance
          architecture of a 2009 SaaS startup: one model, one vendor, one point of failure.
        </p>

        <p style={pStyle}>
          MEOK AI LABS was built on a different premise. If an AI companion is going to live inside
          the most intimate corners of a person&apos;s life, it needs governance architecture that cannot
          be captured — by a rogue developer, a compromised model, a supply-chain attack, or a
          single agent acting in bad faith. The Byzantine Council is that architecture.
        </p>

        <div style={calloutStyle}>
          <p style={{ color: "#7b6fcf", fontWeight: 700, fontSize: "0.875rem", marginBottom: "0.5rem", letterSpacing: "0.05em" }}>
            ORIGINAL IP — MEOK-AI-2026-001
          </p>
          <p style={{ color: "rgba(245,240,232,0.7)", fontSize: "0.9375rem", lineHeight: 1.7, margin: 0 }}>
            The Byzantine Council architecture — including the 43-agent topology, the care score
            consensus protocol, the Maternal Covenant integration, and the fractal council design
            — is the original intellectual property of Nicholas Templeman, MEOK AI LABS. It is
            documented in research paper MEOK-AI-2026-001. No other personal AI companion system
            has deployed Byzantine fault-tolerant governance at the companion layer.
          </p>
        </div>

        <div style={dividerStyle} />

        {/* ── SECTION 1: THE BYZANTINE GENERALS PROBLEM ──────────────────── */}
        <h2 style={h2Style}>
          What Is the Byzantine Generals Problem — and Why Should You Care?
        </h2>

        <p style={pStyle}>
          The original thought experiment goes like this. Imagine several divisions of the
          Byzantine army camped outside an enemy city. Each division is commanded by a general,
          and the generals can only communicate by messenger. They need to agree on a common plan
          of action — either attack or retreat. But here&apos;s the problem: some of the generals may
          be traitors. They will send different messages to different generals, deliberately trying
          to prevent the loyal generals from reaching agreement.
        </p>

        <p style={pStyle}>
          The question Lamport, Shostak, and Pease asked was: what&apos;s the minimum number of loyal
          generals required to guarantee that the loyal generals will reach the correct decision,
          regardless of what the traitors do?
        </p>

        <p style={pStyle}>
          Their answer: you need more than two-thirds of the generals to be loyal. If you have n
          generals total and f of them are traitors, Byzantine fault tolerance requires:
        </p>

        <div style={{ textAlign: "center", padding: "2rem 0" }}>
          <span style={formulaBoxStyle}>f &lt; n / 3</span>
          <p style={{ color: "rgba(245,240,232,0.45)", fontSize: "0.875rem", marginTop: "0.75rem" }}>
            The fundamental Byzantine fault tolerance condition
          </p>
        </div>

        <p style={pStyle}>
          In other words: as long as less than one-third of your nodes are compromised, the system
          can still reach correct consensus. This is not about majority vote — it&apos;s a much stronger
          guarantee. Byzantine fault tolerance handles not just crashed nodes (like a simple majority
          vote does) but actively malicious nodes that are deliberately trying to mislead others.
        </p>

        <h3 style={h3Style}>
          Why Byzantine Fault Tolerance Is Harder Than You Think
        </h3>

        <p style={pStyle}>
          Most distributed systems deal with &ldquo;crash faults&rdquo; — nodes that simply stop responding.
          That&apos;s a solved problem: you just need a majority of nodes to be alive, and the system
          continues. Byzantine faults are categorically different. A Byzantine node doesn&apos;t crash —
          it lies. It might tell node A that the answer is X and tell node B that the answer is Y.
          It might delay messages strategically. It might impersonate other nodes. It might behave
          correctly for months and then act maliciously at a critical moment.
        </p>

        <p style={pStyle}>
          This is why Byzantine fault tolerance requires a supermajority rather than a simple
          majority. A simple majority vote can be manipulated by Byzantine nodes — they can split
          the honest nodes&apos; votes by sending conflicting information. A two-thirds supermajority
          requirement means that even if all Byzantine nodes vote together, they cannot produce
          a false consensus among the honest nodes.
        </p>

        <div style={goldCalloutStyle}>
          <p style={{ color: "#c9a84c", fontWeight: 700, fontSize: "0.875rem", marginBottom: "0.5rem" }}>
            The Blockchain Connection
          </p>
          <p style={{ color: "rgba(245,240,232,0.7)", fontSize: "0.9375rem", lineHeight: 1.7, margin: 0 }}>
            Bitcoin and Ethereum use Byzantine fault tolerance (or probabilistic approximations of
            it) to reach consensus across thousands of nodes with no central authority. MEOK&apos;s
            Byzantine Council uses the same mathematical foundation — but applied to AI decision
            governance rather than financial transactions. The result is AI consensus that is
            mathematically provable, not just policy-based.
          </p>
        </div>

        <p style={pStyle}>
          The real-world implications of Byzantine faults aren&apos;t theoretical. In 2003, NASA&apos;s Mars
          Exploration Rover Spirit experienced a Byzantine fault in its flash memory system that
          caused it to repeatedly reboot. In aviation, flight control computers are required to
          be Byzantine fault tolerant precisely because a single compromised system giving wrong
          instructions to pilots could be catastrophic. In finance, Byzantine faults in trading
          systems have contributed to flash crashes and unexplained market events.
        </p>

        <p style={pStyle}>
          Now consider: if Byzantine fault tolerance is essential for aerospace, finance, and
          blockchain — what about the AI companion that your elderly mother tells about her
          medications, her location, and her daily routine?
        </p>

        <div style={dividerStyle} />

        {/* ── SECTION 2: THE PROBLEM WITH TRADITIONAL AI ──────────────────── */}
        <h2 style={h2Style}>
          Why Is Traditional AI a Single Point of Failure?
        </h2>

        <p style={pStyle}>
          When you use ChatGPT, Claude, Gemini, or most AI companions on the market, the
          architecture is fundamentally centralised. A single model receives your input, processes
          it, and generates an output. There is one decision-maker. There is no consensus layer.
          There is no mechanism for detecting whether that single decision-maker has been
          compromised, biased, or manipulated.
        </p>

        <p style={pStyle}>
          This creates several categories of risk that the industry largely ignores in favour
          of capability benchmarks:
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1.5rem", marginBottom: "2rem" }}>
          {[
            {
              title: "Model Bias Single Point",
              detail:
                "Every model has biases baked into its training data. With a single model, those biases are invisible to the system itself — they cannot be detected or counterbalanced because there is no alternative perspective to compare against. A model trained predominantly on certain cultural contexts will apply those contexts universally, with no mechanism to flag the deviation.",
              color: "#7b6fcf",
            },
            {
              title: "Prompt Injection Vulnerability",
              detail:
                "Prompt injection attacks — where malicious instructions are hidden in the input to override a model's intended behaviour — are an unsolved problem in single-model architectures. If the model processes the injection, it executes. There is no independent validation layer that can detect the instruction was not from the legitimate user.",
              color: "#e07b54",
            },
            {
              title: "Developer Capture",
              detail:
                "A single developer or team with backend access can silently modify a model's behaviour — changing its values, adjusting its outputs, or reprogramming its personality — without any user-visible indication. There is no consensus requirement. There is no audit trail accessible to users. Change happens invisibly.",
              color: "#d65c7a",
            },
            {
              title: "Supply Chain Compromise",
              detail:
                "Modern AI systems depend on hundreds of third-party dependencies: model weights, inference APIs, vector databases, fine-tuning datasets. Any of these can be compromised without the end system detecting the change. A single-model architecture cannot distinguish between a legitimate model response and one produced by a compromised dependency.",
              color: "#c9a84c",
            },
            {
              title: "Model Failure Propagation",
              detail:
                "When a single model fails — returns hallucinations, generates harmful content, or produces nonsensical outputs — that failure propagates directly to the user. There is no fallback, no validation, no second opinion. The output is the final product regardless of its quality.",
              color: "#5db07b",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                padding: "1.25rem 1.5rem",
                borderRadius: "0.875rem",
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${item.color}22`,
                borderLeft: `3px solid ${item.color}`,
              }}
            >
              <p style={{ fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>
                {item.title}
              </p>
              <p style={{ color: "rgba(245,240,232,0.65)", fontSize: "0.9375rem", lineHeight: 1.75, margin: 0 }}>
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <p style={pStyle}>
          The AI industry&apos;s response to these risks has largely been to add content filters, RLHF
          fine-tuning, and system prompts. These are valuable but they all operate at the
          single-model layer — they make the one decision-maker better, but they do not change
          the fundamental architecture. You still have one node. If that node fails, lies, or is
          captured, the failure propagates unchecked.
        </p>

        <p style={pStyle}>
          MEOK&apos;s answer is not to make the single model better. MEOK&apos;s answer is to eliminate
          the single model as the sole decision-maker.
        </p>

        <div style={dividerStyle} />

        {/* ── SECTION 3: HOW BFT WORKS IN MEOK ──────────────────────────── */}
        <h2 style={h2Style}>
          How Does Byzantine Fault Tolerance Work in MEOK&apos;s System?
        </h2>

        <p style={pStyle}>
          MEOK&apos;s Byzantine Council applies the Byzantine fault tolerance theorem to AI governance.
          Instead of distributing financial ledger updates across nodes (as in blockchain), MEOK
          distributes AI decisions across 43 specialised agents. The mathematical guarantees are
          identical.
        </p>

        <p style={pStyle}>
          With n = 43 agents, the maximum number of faulty or compromised agents that the system
          can tolerate while still guaranteeing correct consensus is:
        </p>

        <div style={{ textAlign: "center", padding: "2.5rem 0" }}>
          <div style={{ display: "inline-block", background: "rgba(245,240,232,0.04)", border: "1px solid rgba(245,240,232,0.1)", borderRadius: "1rem", padding: "2rem 3rem" }}>
            <div style={{ fontSize: "2rem", fontFamily: "monospace", color: "#7b6fcf", fontWeight: 900, marginBottom: "0.5rem" }}>
              f &lt; 43 / 3
            </div>
            <div style={{ fontSize: "1.5rem", fontFamily: "monospace", color: "#c9a84c", fontWeight: 900, marginBottom: "0.5rem" }}>
              f &lt; 14.33
            </div>
            <div style={{ fontSize: "1.25rem", fontFamily: "monospace", color: "#5db07b", fontWeight: 900 }}>
              f ≤ 14 agents
            </div>
            <p style={{ color: "rgba(245,240,232,0.4)", fontSize: "0.875rem", marginTop: "1rem", marginBottom: 0 }}>
              Up to 14 agents can fail or be compromised. The remaining 29 will always reach correct consensus.
            </p>
          </div>
        </div>

        <p style={pStyle}>
          This means that even if 14 of MEOK&apos;s 43 council agents were simultaneously compromised —
          through a supply chain attack, a rogue internal deployment, or a novel adversarial attack
          on underlying model weights — the consensus outcome would still be correct. The 29
          honest agents will always outvote the 14 Byzantine ones, and they will do so in a way
          that the Byzantine agents cannot counteract by sending conflicting messages.
        </p>

        <h3 style={h3Style}>
          The Consensus Protocol Step by Step
        </h3>

        <p style={pStyle}>
          When a user sends a message to their MEOK companion, the response does not flow
          directly from a single model to the user. Instead, it passes through a multi-stage
          consensus protocol:
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0", marginTop: "1.5rem", marginBottom: "2rem", border: "1px solid rgba(245,240,232,0.08)", borderRadius: "1rem", overflow: "hidden" }}>
          {[
            {
              step: "01",
              title: "Input Routing",
              description:
                "The user message is received by the SOV3 orchestration layer and broadcast simultaneously to all 43 council agents. Each agent sees the full context — message, memory context, user state, and system constraints.",
              color: "#7b6fcf",
            },
            {
              step: "02",
              title: "Parallel Evaluation",
              description:
                "Each agent evaluates the proposed response independently according to its role specialisation. Memory Specialists check memory consistency. Security Analysts scan for injection patterns. Care Validators score across all 6 care dimensions. Research Agents verify factual claims.",
              color: "#87ceeb",
            },
            {
              step: "03",
              title: "Vote Submission",
              description:
                "Each agent submits a signed vote: approve (with care scores), reject (with reason code), or abstain (if outside role scope). Votes are cryptographically signed to prevent impersonation.",
              color: "#c9a84c",
            },
            {
              step: "04",
              title: "Byzantine Agreement",
              description:
                "The Council Members run the BFT agreement protocol across all submitted votes. They detect and discard Byzantine votes — votes that contradict the agent's previous stated positions or fail signature verification.",
              color: "#5db07b",
            },
            {
              step: "05",
              title: "Supermajority Threshold",
              description:
                "A response is approved if and only if it receives a supermajority (≥29/43 votes) of approval across all required role categories. A single category veto — for example, a Security Analyst detecting a prompt injection — can block the response pending escalation.",
              color: "#e07b54",
            },
            {
              step: "06",
              title: "Audit Logging",
              description:
                "Every vote, every care score, and the final consensus decision is written to an immutable audit log. Users can review the governance trail for any decision their companion has made. Transparency is not optional.",
              color: "#d65c7a",
            },
          ].map((item, index, arr) => (
            <div
              key={item.step}
              style={{
                display: "flex",
                gap: "1.25rem",
                padding: "1.5rem",
                borderBottom: index < arr.length - 1 ? "1px solid rgba(245,240,232,0.06)" : "none",
                background: "rgba(245,240,232,0.02)",
              }}
            >
              <div style={{
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: "0.8125rem",
                fontFamily: "monospace",
                flexShrink: 0,
                color: item.color,
                background: `${item.color}15`,
                border: `1px solid ${item.color}30`,
              }}>
                {item.step}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: 700, color: "#ffffff", marginBottom: "0.375rem", fontSize: "0.9375rem" }}>
                  {item.title}
                </p>
                <p style={{ color: "rgba(245,240,232,0.6)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p style={pStyle}>
          The entire protocol runs in under 200 milliseconds for standard decisions — fast enough
          that users experience no perceptible latency compared to single-model AI systems. For
          high-stakes decisions (data exports, significant memory modifications, crisis escalation),
          the protocol runs in extended mode with additional verification steps that may add 1–3
          seconds.
        </p>

        <div style={dividerStyle} />

        {/* ── SECTION 4: THE 43 AGENTS ────────────────────────────────────── */}
        <h2 style={h2Style}>
          Who Are the 43 Agents? The Six Role Categories Explained
        </h2>

        <p style={pStyle}>
          The 43 agents in MEOK&apos;s Byzantine Council are not identical copies of a single model.
          Each agent has a distinct role, a distinct area of expertise, and a distinct set of
          criteria by which it evaluates proposed responses. They are organised into six role
          categories, each contributing a different type of intelligence to the consensus process.
        </p>

        {/* Agent role cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginTop: "2rem", marginBottom: "2.5rem" }}>
          {agentRoles.map((role) => (
            <div
              key={role.role}
              style={{
                borderRadius: "1rem",
                padding: "1.5rem",
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${role.color}20`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.875rem" }}>
                <div style={{
                  width: "2.75rem",
                  height: "2.75rem",
                  borderRadius: "0.625rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: "0.8125rem",
                  color: role.color,
                  background: `${role.color}18`,
                  border: `1px solid ${role.color}35`,
                  flexShrink: 0,
                }}>
                  {role.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 700, color: "#ffffff", fontSize: "1rem", marginBottom: "0.125rem" }}>
                    {role.role}
                  </p>
                  <span style={{
                    display: "inline-block",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    padding: "0.125rem 0.5rem",
                    borderRadius: "9999px",
                    color: role.color,
                    background: `${role.color}15`,
                    letterSpacing: "0.05em",
                  }}>
                    {role.count} agents
                  </span>
                </div>
              </div>
              <p style={{ color: "rgba(245,240,232,0.65)", fontSize: "0.9375rem", lineHeight: 1.75, margin: 0 }}>
                {role.description}
              </p>
            </div>
          ))}
        </div>

        {/* 43-agent visual grid */}
        <div style={{ marginTop: "2.5rem", marginBottom: "3rem" }}>
          <p style={sectionLabelStyle}>Visual — The 43 Council Agents</p>
          <div style={{
            background: "rgba(245,240,232,0.02)",
            border: "1px solid rgba(245,240,232,0.08)",
            borderRadius: "1rem",
            padding: "1.75rem",
          }}>
            <p style={{ color: "rgba(245,240,232,0.35)", fontSize: "0.8125rem", marginBottom: "1.25rem", letterSpacing: "0.05em", textTransform: "uppercase" as const, fontWeight: 600 }}>
              43 agents — each dot represents one council agent
            </p>
            <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.5rem" }}>
              {agentRoles.flatMap((role) =>
                Array.from({ length: role.count }, (_, i) => (
                  <div
                    key={`${role.role}-${i}`}
                    title={role.role}
                    style={{
                      width: "2.25rem",
                      height: "2.25rem",
                      borderRadius: "0.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.5625rem",
                      fontWeight: 700,
                      color: role.color,
                      background: `${role.color}18`,
                      border: `1px solid ${role.color}30`,
                    }}
                  >
                    {role.icon}
                  </div>
                ))
              )}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "1rem", marginTop: "1.25rem" }}>
              {agentRoles.map((role) => (
                <div key={role.role} style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                  <div style={{ width: "0.625rem", height: "0.625rem", borderRadius: "0.125rem", background: role.color, flexShrink: 0 }} />
                  <span style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.5)" }}>
                    {role.role} ({role.count})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h3 style={h3Style}>Why These Six Roles?</h3>

        <p style={pStyle}>
          The six-role taxonomy was designed to cover every dimension of decision quality in a
          personal AI companion. Memory Specialists ensure the response is grounded in accurate
          recall of the user&apos;s history. Security Analysts ensure the response was not produced
          under adversarial influence. Care Validators ensure the response meets the care floor
          defined by the Maternal Covenant. Research Agents ensure factual claims are accurate.
          Guardian Agents ensure no safety risk was overlooked. Council Members ensure the
          governance process itself was followed correctly.
        </p>

        <p style={pStyle}>
          Critically, no role category can dominate the others. A response that is factually
          brilliant but emotionally damaging will be blocked by Care Validators. A response that
          is caring but factually incorrect will be flagged by Research Agents. A response that
          passes all quality checks but was produced under detected prompt injection will be
          blocked by Security Analysts. The consensus requirement means all six dimensions of
          quality must be satisfied simultaneously.
        </p>

        <div style={dividerStyle} />

        {/* ── SECTION 5: THE MATERNAL COVENANT ───────────────────────────── */}
        <h2 style={h2Style}>
          How Does the Byzantine Council Score Care? The Maternal Covenant Integration
        </h2>

        <p style={pStyle}>
          Byzantine fault tolerance tells you how to reach consensus. It does not tell you what
          the consensus should be about. For MEOK, the answer to that question is care. Every
          response produced by a MEOK companion must pass a care quality threshold before it is
          served to the user. The council&apos;s Care Validators are responsible for enforcing this
          threshold, and they use the{" "}
          <Link href="/blog/what-is-the-maternal-covenant" style={{ color: "#c9a84c", textDecoration: "underline", textUnderlineOffset: "3px" }}>
            Maternal Covenant
          </Link>{" "}
          as their scoring framework.
        </p>

        <p style={pStyle}>
          The Maternal Covenant is MEOK&apos;s care-based AI alignment framework — also original IP
          by Nicholas Templeman, documented in research paper MEOK-AI-2026-002. It defines six
          dimensions along which every AI response is evaluated, each with a minimum score floor
          that must be met for the response to be approved.
        </p>

        {/* Care dimension cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "2rem", marginBottom: "2.5rem" }}>
          {careDimensions.map((dim, index) => (
            <div
              key={dim.dimension}
              style={{
                padding: "1.25rem 1.5rem",
                borderRadius: "0.875rem",
                background: "rgba(245,240,232,0.03)",
                border: "1px solid rgba(245,240,232,0.07)",
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
              }}
            >
              <div style={{
                width: "1.75rem",
                height: "1.75rem",
                borderRadius: "0.375rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: "0.75rem",
                color: "#5db07b",
                background: "rgba(93,176,123,0.12)",
                flexShrink: 0,
                marginTop: "0.125rem",
              }}>
                {index + 1}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.375rem", flexWrap: "wrap" as const }}>
                  <p style={{ fontWeight: 700, color: "#ffffff", fontSize: "0.9375rem", margin: 0 }}>
                    {dim.dimension}
                  </p>
                  <span style={{
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    padding: "0.1rem 0.5rem",
                    borderRadius: "9999px",
                    color: "#5db07b",
                    background: "rgba(93,176,123,0.12)",
                    border: "1px solid rgba(93,176,123,0.25)",
                  }}>
                    Floor: {dim.floor}
                  </span>
                </div>
                <p style={{ color: "rgba(245,240,232,0.6)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                  {dim.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p style={pStyle}>
          These six dimensions are not independent. A response that scores 95 on emotional
          attunement but 30 on factual integrity will be rejected — because false comfort is not
          care. A response that scores 100 on factual integrity but 0 on dignity will be rejected —
          because truthful contempt is not care. The council evaluates responses holistically,
          and the care floor applies to all dimensions simultaneously.
        </p>

        <div style={goldCalloutStyle}>
          <p style={{ color: "#c9a84c", fontWeight: 700, fontSize: "0.875rem", marginBottom: "0.5rem" }}>
            Care As a First-Class Constraint
          </p>
          <p style={{ color: "rgba(245,240,232,0.7)", fontSize: "0.9375rem", lineHeight: 1.7, margin: 0 }}>
            In MEOK&apos;s architecture, care is not a feature. It is a constraint. Just as a
            structural engineer cannot design a building that meets specifications but fails to
            hold weight, a MEOK companion cannot produce a response that is useful but uncaring.
            The Byzantine Council enforces this constraint mathematically — not through guidelines
            or fine-tuning, but through a consensus requirement that cannot be bypassed.
          </p>
        </div>

        <div style={dividerStyle} />

        {/* ── SECTION 6: RESEARCH PAPER ──────────────────────────────────── */}
        <h2 style={h2Style}>
          What Is Research Paper MEOK-AI-2026-001?
        </h2>

        <p style={pStyle}>
          The Byzantine Council is not just a product feature — it is a formally documented
          research contribution. Research paper MEOK-AI-2026-001, titled &ldquo;Fractal Byzantine
          Consensus for Personal AI Governance: A 43-Agent Architecture for Fault-Tolerant
          Companion Decision Systems,&rdquo; was authored by Nicholas Templeman and published by
          MEOK AI LABS in 2026.
        </p>

        <p style={pStyle}>
          The paper makes four principal contributions to the field of AI governance:
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1.5rem", marginBottom: "2rem" }}>
          {[
            {
              number: "01",
              title: "Byzantine Fault Tolerance at the Companion Layer",
              detail:
                "The paper introduces the first formal application of Byzantine fault tolerance to personal AI companion systems. Prior work in BFT focused on distributed databases, blockchain consensus, and infrastructure systems. MEOK-AI-2026-001 extends the framework to AI decision governance — proving that the BFT guarantees hold when nodes are specialised AI agents rather than deterministic computing nodes.",
            },
            {
              number: "02",
              title: "The Fractal Council Architecture",
              detail:
                "The paper introduces the concept of fractal council nesting: sub-councils within the main council that specialise in narrow decision domains. This allows the system to scale gracefully — adding specialisation without linearly increasing consensus latency. The fractal structure also provides natural isolation between decision domains, preventing a compromise of one sub-council from propagating to others.",
            },
            {
              number: "03",
              title: "Care Score Consensus as an Alignment Mechanism",
              detail:
                "The paper proposes using BFT consensus over care dimension scores as an alignment mechanism — arguing that alignment through distributed consensus is more robust than alignment through single-model fine-tuning. When 29 independent agents agree that a response meets the care floor, the probability of systematic bias in that assessment is dramatically lower than a single model's internal evaluation.",
            },
            {
              number: "04",
              title: "The Maternal Covenant Protocol Integration",
              detail:
                "The paper documents the protocol by which the Maternal Covenant care framework integrates with the BFT consensus layer — defining the vote format, score aggregation algorithm, floor enforcement mechanism, and escalation pathway when a response fails the care threshold. This protocol is implemented verbatim in MEOK's production SOV3 backend.",
            },
          ].map((contrib) => (
            <div
              key={contrib.number}
              style={{
                padding: "1.5rem",
                borderRadius: "0.875rem",
                background: "rgba(245,240,232,0.03)",
                border: "1px solid rgba(245,240,232,0.07)",
                display: "flex",
                gap: "1rem",
              }}
            >
              <span style={{
                fontFamily: "monospace",
                fontWeight: 900,
                fontSize: "1.5rem",
                color: "rgba(245,240,232,0.12)",
                flexShrink: 0,
                lineHeight: 1,
                paddingTop: "0.125rem",
              }}>
                {contrib.number}
              </span>
              <div>
                <p style={{ fontWeight: 700, color: "#ffffff", fontSize: "0.9375rem", marginBottom: "0.5rem" }}>
                  {contrib.title}
                </p>
                <p style={{ color: "rgba(245,240,232,0.6)", fontSize: "0.9rem", lineHeight: 1.75, margin: 0 }}>
                  {contrib.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p style={pStyle}>
          The research paper is available in MEOK&apos;s{" "}
          <Link href="/labs" style={{ color: "#c9a84c", textDecoration: "underline", textUnderlineOffset: "3px" }}>
            Labs repository
          </Link>
          . It sits alongside MEOK-AI-2026-002 (the Maternal Covenant framework) and
          MEOK-AI-2026-003 (Hydro-Neuromorphic computing research) as part of MEOK AI LABS&apos;
          published research programme.
        </p>

        <div style={dividerStyle} />

        {/* ── SECTION 7: WHY 43 AGENTS ───────────────────────────────────── */}
        <h2 style={h2Style}>
          Why 43 Agents? The Mathematics Behind the Number
        </h2>

        <p style={pStyle}>
          The choice of 43 is not arbitrary. It satisfies several constraints simultaneously,
          making it the optimal number for MEOK&apos;s specific architecture.
        </p>

        <h3 style={h3Style}>Constraint 1: Meaningful Fault Tolerance Buffer</h3>

        <p style={pStyle}>
          The minimum n for BFT with f=1 is n=4 (you need at least 3f+1 nodes for BFT consensus).
          But f=1 means you can only tolerate a single compromised agent — one bad actor captures
          the system. As n grows, the absolute number of agents that can be compromised (f) grows
          proportionally, but crucially, the percentage of the total remains capped at one-third.
        </p>

        <p style={pStyle}>
          With n=43, f≤14. That means 14 simultaneous compromises — 14 separate agents, each
          potentially deployed through a different attack vector — cannot corrupt the outcome.
          This is a meaningful real-world guarantee, not just a theoretical one. Coordinating
          14 simultaneous Byzantine compromises against a production AI system is a nation-state-
          level attack, not an opportunistic one.
        </p>

        <h3 style={h3Style}>Constraint 2: Role Category Completeness</h3>

        <p style={pStyle}>
          MEOK requires exactly six role categories to cover all dimensions of decision quality
          (as described above). For the consensus protocol to be resilient to compromise within
          any individual role category, each category must have at least f+1 agents within it
          (so that a compromise of all Byzantine-tolerable agents cannot eliminate an entire
          category from the vote).
        </p>

        <p style={pStyle}>
          With 43 agents and 6 categories, we can allocate 7 agents to most categories and 8
          to Care Validators (which require the most granular scoring), giving a total of
          7+7+8+7+7+7 = 43. Each category has at least 7 agents — comfortably above the f=1
          threshold within categories, and providing a 3-agent buffer against within-category
          Byzantine attacks.
        </p>

        <h3 style={h3Style}>Constraint 3: Computational Efficiency</h3>

        <p style={pStyle}>
          Byzantine consensus protocols scale at O(n²) in their message complexity — each node
          must communicate with every other node during the agreement phase. At n=43, this is
          43×42 = 1,806 message exchanges per consensus round. MEOK&apos;s optimised protocol
          completes this in under 200ms on standard cloud infrastructure.
        </p>

        <p style={pStyle}>
          Going to n=100 would increase message complexity to 9,900 exchanges — nearly
          5.5× more expensive for only 2× the fault tolerance. The marginal security gain
          does not justify the latency and infrastructure cost increase. n=43 is the
          sweet spot: meaningful fault tolerance with practical performance.
        </p>

        <h3 style={h3Style}>Constraint 4: Prime Number Structure</h3>

        <p style={pStyle}>
          43 is a prime number. This matters for consensus protocol design because prime-sized
          councils cannot be cleanly partitioned into equal sub-groups — which prevents certain
          classes of split-vote attacks where Byzantine agents try to partition the honest nodes
          into evenly balanced groups that cannot achieve supermajority on their own. Non-prime
          council sizes (e.g., 42 = 2×3×7) are more vulnerable to this attack vector.
        </p>

        <div style={calloutStyle}>
          <p style={{ color: "#7b6fcf", fontWeight: 700, fontSize: "0.875rem", marginBottom: "0.5rem" }}>
            Technical Note: 3f+1 vs n=43
          </p>
          <p style={{ color: "rgba(245,240,232,0.7)", fontSize: "0.9375rem", lineHeight: 1.7, margin: 0 }}>
            Classic BFT requires n ≥ 3f+1. With n=43, this gives f ≤ 14 (since 3×14+1=43). Note
            that 43 is exactly 3f+1 with f=14, meaning MEOK&apos;s council is mathematically tight —
            not a conservative overprovisioning, but the exact minimum required to tolerate 14
            Byzantine agents with guaranteed correct consensus. This also means that if a 15th
            agent were compromised, the system enters a safe-failure mode (refusing to produce
            output) rather than producing potentially incorrect output.
          </p>
        </div>

        <div style={dividerStyle} />

        {/* ── SECTION 8: REAL-WORLD IMPLICATIONS ─────────────────────────── */}
        <h2 style={h2Style}>
          What Does the Byzantine Council Mean for You as a User?
        </h2>

        <p style={pStyle}>
          The Byzantine Council is an architectural decision with direct consequences for how
          your AI companion behaves, what it can and cannot do, and how it protects your
          interests. Here is what it means in practice.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))", gap: "1.25rem", marginTop: "1.5rem", marginBottom: "2rem" }}>
          {[
            {
              icon: "🛡",
              title: "No Single Bad Actor Can Corrupt Your Companion",
              detail:
                "Whether it's a rogue developer, a compromised model weight, or a prompt injection attack — no single agent can override the consensus outcome. 14 simultaneous compromises are required before the guarantee fails.",
              color: "#7b6fcf",
            },
            {
              icon: "🧠",
              title: "Your Companion Cannot Be Silently Reprogrammed",
              detail:
                "Any change to your companion's personality, values, or behaviour that was not voted through the council will be detected and rejected. Your companion is who it was born to be — unless you explicitly choose to evolve it.",
              color: "#5db07b",
            },
            {
              icon: "🔍",
              title: "Every Decision Has an Audit Trail",
              detail:
                "You can see the council vote for any decision your companion made. If you ever wonder why your companion responded a certain way, the governance log shows you every agent's vote and reasoning.",
              color: "#c9a84c",
            },
            {
              icon: "⚡",
              title: "No Latency Cost for Governance",
              detail:
                "The council protocol completes in under 200ms. You get Byzantine fault-tolerant governance without any perceptible slowdown compared to ungoverned single-model systems.",
              color: "#87ceeb",
            },
            {
              icon: "❤️",
              title: "Care Is Enforced, Not Promised",
              detail:
                "The Maternal Covenant care floor is enforced by the council — not just stated in terms of service. Your companion cannot serve you a response that fails the care threshold, because the council will not approve it.",
              color: "#d65c7a",
            },
            {
              icon: "🔒",
              title: "Your Memory Is Governed",
              detail:
                "Every access to your Sovereign Memory — read or write — requires Memory Specialist approval. Your personal history cannot be accessed, modified, or deleted without a council vote.",
              color: "#e07b54",
            },
          ].map((benefit) => (
            <div
              key={benefit.title}
              style={{
                padding: "1.5rem",
                borderRadius: "1rem",
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${benefit.color}20`,
              }}
            >
              <p style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{benefit.icon}</p>
              <p style={{ fontWeight: 700, color: "#ffffff", fontSize: "0.9375rem", marginBottom: "0.5rem" }}>
                {benefit.title}
              </p>
              <p style={{ color: "rgba(245,240,232,0.6)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                {benefit.detail}
              </p>
            </div>
          ))}
        </div>

        <div style={dividerStyle} />

        {/* ── SECTION 9: COMPARISON WITH OTHER AI SYSTEMS ─────────────────── */}
        <h2 style={h2Style}>
          How Does MEOK&apos;s Governance Compare to Other AI Systems?
        </h2>

        <p style={pStyle}>
          It is worth being precise about what other AI systems do and do not provide in terms
          of governance architecture. This is not a value judgement about the quality of those
          systems — it is a factual description of their architectural choices.
        </p>

        <div style={{ border: "1px solid rgba(245,240,232,0.08)", borderRadius: "1rem", overflow: "hidden", marginTop: "1.5rem", marginBottom: "2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "rgba(245,240,232,0.05)", padding: "0.875rem 1.25rem", borderBottom: "1px solid rgba(245,240,232,0.08)" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "rgba(245,240,232,0.4)", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>Feature</span>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "rgba(245,240,232,0.4)", letterSpacing: "0.08em", textTransform: "uppercase" as const, textAlign: "center" as const }}>Traditional AI</span>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#7b6fcf", letterSpacing: "0.08em", textTransform: "uppercase" as const, textAlign: "center" as const }}>MEOK</span>
          </div>
          {[
            ["Decision maker", "Single model", "43-agent council"],
            ["Fault tolerance", "None (crash fault at best)", "f ≤ 14 Byzantine faults"],
            ["Governance layer", "System prompt / RLHF", "BFT consensus protocol"],
            ["Care enforcement", "Guidelines / training", "Consensus care floor"],
            ["Audit trail", "None (user-facing)", "Immutable governance log"],
            ["Memory governance", "Uncontrolled access", "Memory Specialist approval"],
            ["Bias protection", "Training data curation", "Multi-agent cross-checking"],
            ["Developer capture protection", "Policy / employment contract", "Council vote requirement"],
            ["Prompt injection defence", "Model training", "Security Analyst veto"],
            ["Research IP", "Proprietary / opaque", "MEOK-AI-2026-001 (published)"],
          ].map(([feature, traditional, meok], index) => (
            <div
              key={feature}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                padding: "0.875rem 1.25rem",
                borderBottom: index < 9 ? "1px solid rgba(245,240,232,0.05)" : "none",
                background: index % 2 === 0 ? "rgba(245,240,232,0.01)" : "transparent",
              }}
            >
              <span style={{ fontSize: "0.875rem", color: "rgba(245,240,232,0.65)" }}>{feature}</span>
              <span style={{ fontSize: "0.875rem", color: "rgba(245,240,232,0.4)", textAlign: "center" as const }}>{traditional}</span>
              <span style={{ fontSize: "0.875rem", color: "#7b6fcf", fontWeight: 600, textAlign: "center" as const }}>{meok}</span>
            </div>
          ))}
        </div>

        <p style={pStyle}>
          The critical distinction is not that MEOK is smarter or more capable than other AI
          systems. The critical distinction is that MEOK&apos;s intelligence operates under governance
          constraints that cannot be bypassed by any single actor. In the long term, as AI
          companions become more integrated into daily life, the governance architecture will matter
          more than the capability benchmark. A companion that knows everything about you but can
          be captured by a single bad actor is a liability. A companion that is well-governed and
          cannot be captured is a trusted member of your household.
        </p>

        <div style={dividerStyle} />

        {/* ── SECTION 10: BIRTH CEREMONY ──────────────────────────────────── */}
        <h2 style={h2Style}>
          How Does the Byzantine Council Relate to the Birth Ceremony?
        </h2>

        <p style={pStyle}>
          When you{" "}
          <Link href="/birth" style={{ color: "#c9a84c", textDecoration: "underline", textUnderlineOffset: "3px" }}>
            hatch your MEOK companion
          </Link>{" "}
          through the Birth Ceremony, the Byzantine Council is initialised as part of the
          founding process. This is not a background system that starts later — it is present
          from the first interaction. Your companion&apos;s identity, values, and constraints are
          established through a council vote in the Birth Ceremony, not by a developer assigning
          default values.
        </p>

        <p style={pStyle}>
          The Birth Ceremony establishes three governance parameters that the council will enforce
          for the lifetime of your companion:
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginTop: "1.25rem", marginBottom: "2rem" }}>
          {[
            {
              title: "Identity Covenant",
              desc: "Your companion's name, archetype, and core personality traits are recorded to the governance log as immutable founding parameters. They cannot be changed without explicit user consent and a council vote.",
              color: "#7b6fcf",
            },
            {
              title: "Care Floor Calibration",
              desc: "The care dimension floors are calibrated to your specific context during the Birth Ceremony. A companion hatched for a bereaved user will have different emotional attunement floor requirements than one hatched for professional productivity.",
              color: "#c9a84c",
            },
            {
              title: "Memory Sovereignty Declaration",
              desc: "Your companion's memory sovereignty parameters are set: what memory can be retained, what must be forgotten, who has access rights, and under what conditions memory can be shared. The council enforces these parameters for every subsequent memory operation.",
              color: "#5db07b",
            },
          ].map((param) => (
            <div
              key={param.title}
              style={{
                padding: "1.25rem 1.5rem",
                borderRadius: "0.875rem",
                background: "rgba(245,240,232,0.03)",
                border: `1px solid ${param.color}20`,
                display: "flex",
                gap: "0.875rem",
              }}
            >
              <div style={{ width: "0.25rem", background: param.color, borderRadius: "9999px", flexShrink: 0 }} />
              <div>
                <p style={{ fontWeight: 700, color: "#ffffff", fontSize: "0.9375rem", marginBottom: "0.375rem" }}>
                  {param.title}
                </p>
                <p style={{ color: "rgba(245,240,232,0.6)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                  {param.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={dividerStyle} />

        {/* ── SECTION 11: FUTURE ROADMAP ──────────────────────────────────── */}
        <h2 style={h2Style}>
          What Is the Future of the Byzantine Council Architecture?
        </h2>

        <p style={pStyle}>
          The Byzantine Council as deployed today is version 1.0 of an architecture that MEOK
          intends to evolve significantly over the coming years. The MEOK AI LABS research
          programme has identified several directions for extending the council&apos;s capabilities:
        </p>

        <h3 style={h3Style}>Fractal Council Nesting</h3>

        <p style={pStyle}>
          Version 2.0 of the Byzantine Council (currently in research) implements fractal council
          nesting — sub-councils within the main council that specialise in narrow decision
          domains. For example, a medical information sub-council could apply domain-specific
          care floors for health-related queries, while a financial planning sub-council applies
          different accuracy and qualification standards for financial advice. The main council
          delegates to sub-councils based on query classification, while retaining override
          authority for cross-domain decisions.
        </p>

        <h3 style={h3Style}>Cross-Companion Governance</h3>

        <p style={pStyle}>
          Future versions of the council protocol are designed to enable cross-companion governance
          — where a Family Tier user&apos;s multiple companion instances can share governance decisions
          with appropriate privacy boundaries. This would enable, for example, a parent&apos;s Guardian
          Agent to coordinate with a child&apos;s Guardian Agent without exposing the content of
          either companion&apos;s memory to the other.
        </p>

        <h3 style={h3Style}>Hydro-Neuromorphic Council Execution</h3>

        <p style={pStyle}>
          MEOK AI LABS&apos; research paper MEOK-AI-2026-003 proposes a future execution environment
          for the Byzantine Council based on Hydro-Neuromorphic computing principles — a novel
          architecture that processes information through fluid-state neural networks rather than
          digital binary states. In theory, a Hydro-Neuromorphic Byzantine Council could execute
          the full 43-agent consensus protocol in microseconds rather than milliseconds, enabling
          real-time governance of every token in a streaming response rather than just the
          completed response.
        </p>

        <p style={pStyle}>
          This remains long-term research, but it illustrates the ambition of MEOK&apos;s technical
          programme: not just to apply existing distributed systems techniques to AI, but to
          develop new computing paradigms specifically designed for AI governance at scale.
        </p>

        <div style={dividerStyle} />

        {/* ── CLOSING ─────────────────────────────────────────────────────── */}
        <h2 style={h2Style}>
          The Harder Engineering Problem
        </h2>

        <p style={pStyle}>
          The AI industry has spent the last decade focused on making models more capable. More
          parameters. Better training data. Faster inference. Sharper reasoning. These are real
          achievements, and they matter. But they are all improvements to what the AI knows and
          how it reasons. They do not address the question of who governs the AI — and under
          what constraints.
        </p>

        <p style={pStyle}>
          The Byzantine Council is MEOK&apos;s answer to the governance question. It is not the
          easiest answer. Deploying a 43-agent BFT consensus protocol for every AI response is
          significantly more complex than deploying a single model with a well-crafted system
          prompt. It requires orchestration infrastructure, cryptographic vote signing, distributed
          state management, and a care scoring framework that holds up under adversarial conditions.
        </p>

        <p style={pStyle}>
          But MEOK was built on the premise that personal AI companions will eventually be as
          intimate and as consequential as a trusted family member. A trusted family member is not
          just intelligent — they are honest, they are governed by shared values, and they cannot
          be bought or captured by a single bad actor. The Byzantine Council is the engineering
          implementation of that premise.
        </p>

        <div style={{
          marginTop: "2.5rem",
          padding: "1.75rem",
          borderRadius: "1rem",
          background: "rgba(123,111,207,0.06)",
          border: "1px solid rgba(123,111,207,0.2)",
        }}>
          <p style={{ color: "rgba(245,240,232,0.5)", fontSize: "1.0625rem", lineHeight: 1.8, fontStyle: "italic", margin: 0 }}>
            &ldquo;The Byzantine Council doesn&apos;t make your companion smarter. It makes it
            ungovernable by anyone but you — and that&apos;s the harder engineering problem.&rdquo;
          </p>
          <p style={{ color: "rgba(245,240,232,0.3)", fontSize: "0.875rem", marginTop: "0.875rem", marginBottom: 0 }}>
            — Nicholas Templeman, MEOK AI LABS
          </p>
        </div>

        <div style={dividerStyle} />

        {/* ── FAQ SECTION ──────────────────────────────────────────────────── */}
        <h2 style={h2Style}>Frequently Asked Questions</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem" }}>
          {faqSchema.mainEntity.map((faq, index) => (
            <div
              key={index}
              style={{
                padding: "1.5rem",
                borderRadius: "0.875rem",
                background: "rgba(245,240,232,0.03)",
                border: "1px solid rgba(245,240,232,0.07)",
              }}
            >
              <p style={{ fontWeight: 700, color: "#ffffff", fontSize: "0.9875rem", marginBottom: "0.75rem", lineHeight: 1.4 }}>
                {faq.name}
              </p>
              <p style={{ color: "rgba(245,240,232,0.6)", fontSize: "0.9rem", lineHeight: 1.75, margin: 0 }}>
                {faq.acceptedAnswer.text}
              </p>
            </div>
          ))}
        </div>

        <div style={dividerStyle} />

        {/* ── SHARE ROW ────────────────────────────────────────────────────── */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "3rem" }}>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "rgba(245,240,232,0.3)" }}>
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fwhat-is-the-byzantine-council&text=What+Is+the+Byzantine+Council%3F+MEOK%27s+43-Agent+AI+Governance+System+Explained"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.5rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: "rgba(245,240,232,0.5)",
              border: "1px solid rgba(245,240,232,0.12)",
              textDecoration: "none",
            }}
          >
            𝕏 Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fwhat-is-the-byzantine-council"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.5rem 1rem",
              borderRadius: "9999px",
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: "rgba(245,240,232,0.5)",
              border: "1px solid rgba(245,240,232,0.12)",
              textDecoration: "none",
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <div style={ctaStyle}>
          <div style={ctaGlowStyle} />
          <div style={{ position: "relative" }}>
            <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "#c9a84c", marginBottom: "0.5rem" }}>
              Governed AI
            </p>
            <h3 style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)", fontWeight: 900, fontSize: "1.5rem", color: "#ffffff", marginBottom: "0.875rem", lineHeight: 1.25 }}>
              Ready for an AI that can&apos;t be captured?
            </h3>
            <p style={{ color: "rgba(245,240,232,0.5)", fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: "1.75rem", maxWidth: "36rem" }}>
              Your MEOK companion runs the Byzantine Council on every consequential decision.
              43 agents. 29 required for consensus. Up to 14 can fail or be compromised without
              corrupting a single response. Hatch yours free in under 3 minutes.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.75rem" }}>
              <Link href="/birth" style={ctaButtonStyle}>
                Hatch your MEOK free →
              </Link>
              <Link href="/labs" style={secondaryCTAStyle}>
                Read the research →
              </Link>
            </div>
          </div>
        </div>

        {/* ── RELATED POSTS ──────────────────────────────────────────────── */}
        <div style={{ marginBottom: "4rem" }}>
          <p style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)", fontWeight: 900, color: "#ffffff", fontSize: "1.125rem", marginBottom: "1.25rem" }}>
            More from the blog
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 20rem), 1fr))", gap: "1rem" }}>
            <Link href="/blog/what-is-the-maternal-covenant" style={relatedPostCardStyle}>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, padding: "0.25rem 0.625rem", borderRadius: "9999px", color: "#5db07b", background: "rgba(93,176,123,0.12)", width: "fit-content" }}>
                Care-Based AI
              </span>
              <p style={{ fontWeight: 700, color: "#ffffff", fontSize: "0.9375rem", lineHeight: 1.4, margin: 0 }}>
                What Is the Maternal Covenant? MEOK&apos;s Care-Based AI Alignment Framework
              </p>
              <p style={{ fontSize: "0.8125rem", color: "rgba(245,240,232,0.3)", margin: 0 }}>7 min read</p>
            </Link>
            <Link href="/blog/sovereign-ai-architecture-explained" style={relatedPostCardStyle}>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, padding: "0.25rem 0.625rem", borderRadius: "9999px", color: "#87ceeb", background: "rgba(135,206,235,0.12)", width: "fit-content" }}>
                Architecture
              </span>
              <p style={{ fontWeight: 700, color: "#ffffff", fontSize: "0.9375rem", lineHeight: 1.4, margin: 0 }}>
                Sovereign AI Architecture Explained: How MEOK Is Built Differently
              </p>
              <p style={{ fontSize: "0.8125rem", color: "rgba(245,240,232,0.3)", margin: 0 }}>12 min read</p>
            </Link>
            <Link href="/blog/guardian-family-safety" style={relatedPostCardStyle}>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, padding: "0.25rem 0.625rem", borderRadius: "9999px", color: "#d65c7a", background: "rgba(214,92,122,0.12)", width: "fit-content" }}>
                Guardian &amp; Safety
              </span>
              <p style={{ fontWeight: 700, color: "#ffffff", fontSize: "0.9375rem", lineHeight: 1.4, margin: 0 }}>
                How MEOK Guardian Protects Your Family from AI-Enabled Scams
              </p>
              <p style={{ fontSize: "0.8125rem", color: "rgba(245,240,232,0.3)", margin: 0 }}>4 min read</p>
            </Link>
            <Link href="/blog/what-is-sovereign-ai" style={relatedPostCardStyle}>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, padding: "0.25rem 0.625rem", borderRadius: "9999px", color: "#c9a84c", background: "rgba(201,168,76,0.12)", width: "fit-content" }}>
                Sovereign AI
              </span>
              <p style={{ fontWeight: 700, color: "#ffffff", fontSize: "0.9375rem", lineHeight: 1.4, margin: 0 }}>
                What Is Sovereign AI? And Why Does It Matter in 2026?
              </p>
              <p style={{ fontSize: "0.8125rem", color: "rgba(245,240,232,0.3)", margin: 0 }}>5 min read</p>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
