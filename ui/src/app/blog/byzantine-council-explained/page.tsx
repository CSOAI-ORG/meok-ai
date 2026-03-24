import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "The Byzantine Council Explained: Why 43 AI Agents Are Better Than One | MEOK AI LABS",
  description:
    "MEOK\u2019s Byzantine Council is a 43-agent fault-tolerant governance system where no single AI can override a decision. Learn why this matters for safe, trustworthy AI.",
  alternates: { canonical: "https://meok.ai/blog/byzantine-council-explained" },
  openGraph: {
    title: "The Byzantine Council Explained: Why 43 AI Agents Are Better Than One",
    description:
      "MEOK\u2019s Byzantine Council is a 43-agent fault-tolerant governance system where no single AI can override a decision. Learn why this matters for safe, trustworthy AI.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/byzantine-council-explained",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=The+Byzantine+Council+Explained%3A+Why+43+AI+Agents+Are+Better+Than+One&desc=43-agent+fault-tolerant+AI+governance+by+MEOK+AI+LABS",
        width: 1200,
        height: 630,
        alt: "The Byzantine Council Explained: Why 43 AI Agents Are Better Than One",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Byzantine Council Explained: Why 43 AI Agents Are Better Than One",
    description:
      "MEOK\u2019s Byzantine Council is a 43-agent fault-tolerant governance system where no single AI can override a decision. Learn why this matters for safe, trustworthy AI.",
    images: [
      "https://meok.ai/api/og?title=The+Byzantine+Council+Explained%3A+Why+43+AI+Agents+Are+Better+Than+One&desc=43-agent+fault-tolerant+AI+governance+by+MEOK+AI+LABS",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Byzantine Council Explained: Why 43 AI Agents Are Better Than One",
  description:
    "MEOK\u2019s Byzantine Council is a 43-agent fault-tolerant governance system where no single AI can override a decision. Learn why this matters for safe, trustworthy AI.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/byzantine-council-explained",
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
    "https://meok.ai/api/og?title=The+Byzantine+Council+Explained%3A+Why+43+AI+Agents+Are+Better+Than+One&desc=43-agent+fault-tolerant+AI+governance+by+MEOK+AI+LABS",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/byzantine-council-explained",
  },
  keywords: [
    "Byzantine Council",
    "Byzantine fault tolerance",
    "BFT consensus",
    "AI governance",
    "MEOK AI LABS",
    "43 AI agents",
    "fault-tolerant AI",
    "AI safety",
    "distributed consensus",
    "MEOK-AI-2026-001",
  ],
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Byzantine Council in MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Byzantine Council is MEOK\u2019s 43-agent fault-tolerant governance layer. Every consequential AI decision \u2014 care score validation, memory writes, threat escalations \u2014 requires a two-thirds supermajority vote across all 43 agents before it executes. No single agent, and no coalition of fewer than 29 agents, can force an outcome.",
      },
    },
    {
      "@type": "Question",
      name: "What is Byzantine Fault Tolerance and where does it come from?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Byzantine Fault Tolerance (BFT) originates from the 1982 paper \u201cThe Byzantine Generals Problem\u201d by Lamport, Shostak, and Pease. It describes how a distributed system can reach consensus even when some participants are actively lying or defective. The core theorem states that if fewer than one-third of nodes are faulty (f < n/3), the honest majority can always agree on the correct result.",
      },
    },
    {
      "@type": "Question",
      name: "Why does MEOK use 43 agents specifically?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "43 is the smallest odd number above 42 that satisfies BFT\u2019s f < n/3 threshold cleanly and provides fault tolerance of exactly 14 compromised agents. With 43 agents, 29 honest agents always form a two-thirds supermajority against any coalition of 14 or fewer rogue agents. The odd number also eliminates tie scenarios.",
      },
    },
    {
      "@type": "Question",
      name: "How does the Byzantine Council make MEOK safer than a single AI model?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A single AI model can be captured by one compromised input, one bad prompt injection, or one rogue developer with API access. The Byzantine Council requires 29 independent agents to agree before any decision executes. An attacker would need to simultaneously compromise more than 14 separate, isolated agent processes to corrupt a single outcome.",
      },
    },
    {
      "@type": "Question",
      name: "Is the MEOK Byzantine Council original research?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The MEOK Byzantine Council architecture is original intellectual property developed by Nicholas Templeman and documented in research paper MEOK-AI-2026-001, published by MEOK AI LABS. It is the first known application of BFT consensus to AI companion governance, filed with UKIPO.",
      },
    },
  ],
};

// ── Page ───────────────────────────────────────────────────────────────────────

export default function ByzantineCouncilExplainedPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0d0c18",
        color: "#f5f0e8",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* JSON-LD: Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "8rem",
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
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.10) 0%, transparent 70%)",
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
              color: "rgba(245,240,232,0.35)",
              marginBottom: "2rem",
              textDecoration: "none",
            }}
          >
            &larr; Back to Blog
          </Link>

          {/* Tags row */}
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
                color: "#87CEEB",
                background: "rgba(135,206,235,0.12)",
                border: "1px solid rgba(135,206,235,0.3)",
              }}
            >
              Architecture &amp; Governance
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.35)",
              }}
            >
              March 24, 2026
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.35)",
              }}
            >
              12 min read
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.35)",
              }}
            >
              Paper: MEOK-AI-2026-001
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#f5f0e8",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            The Byzantine Council Explained: Why 43 AI Agents Are Better Than One
          </h1>

          {/* Lede */}
          <p
            style={{
              color: "rgba(245,240,232,0.6)",
              fontSize: "1.125rem",
              lineHeight: 1.75,
              maxWidth: "40rem",
              marginBottom: "0",
            }}
          >
            Most AI safety debates focus on model alignment. MEOK focuses on something harder
            and more concrete: mathematical proof that no single agent &mdash; human or AI &mdash;
            can override a decision. The Byzantine Council is that proof made executable.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ─────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "3.5rem 1.5rem 5rem",
          borderTop: "1px solid rgba(245,240,232,0.07)",
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
            background: "rgba(245,240,232,0.04)",
            border: "1px solid rgba(245,240,232,0.08)",
          }}
        >
          <div
            style={{
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              color: "#0d0c18",
              fontSize: "0.8125rem",
              flexShrink: 0,
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, color: "#f5f0e8", fontSize: "0.875rem", margin: 0 }}>
              Nicholas Templeman
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.4)",
                margin: "0.125rem 0 0.25rem",
              }}
            >
              Founder, MEOK AI LABS &mdash; Paper MEOK-AI-2026-001
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                lineHeight: 1.5,
                color: "rgba(245,240,232,0.35)",
                margin: 0,
              }}
            >
              Nicholas built MEOK because he believed safe AI required mathematical governance,
              not just careful prompting. He lives and works in the UK.
            </p>
          </div>
        </div>

        {/* Body prose */}
        <div
          style={{
            lineHeight: 1.9,
            color: "rgba(245,240,232,0.72)",
            fontSize: "1.0125rem",
          }}
        >

          {/* ── SECTION 1 ─────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            What is the Byzantine Generals Problem?
          </h2>
          <p>
            In 1982, computer scientists Leslie Lamport, Robert Shostak, and Marshall Pease
            published a landmark paper called &ldquo;The Byzantine Generals Problem.&rdquo; It posed a
            deceptively simple question: how can a group of generals, communicating only by
            messenger, reach agreement on a battle plan when some of those generals might be
            traitors actively sending false messages?
          </p>
          <p>
            The problem is not about generals at all. It is a formal description of consensus in
            any distributed system where some nodes might behave maliciously or unpredictably. The
            insight was profound: you do not need every participant to be honest. You only need
            enough honest participants to outvote the liars. Specifically, you need more than
            two-thirds of the total participants to be honest for consensus to be guaranteed.
          </p>
          <p>
            This theorem &mdash; known as Byzantine Fault Tolerance (BFT) &mdash; became the
            mathematical foundation for blockchain consensus protocols, distributed databases, and
            now, MEOK&apos;s AI governance layer.
          </p>

          {/* Callout 1 */}
          <div
            style={{
              margin: "2.5rem 0",
              padding: "1.5rem 1.75rem",
              borderLeft: "3px solid #c9a84c",
              background: "rgba(201,168,76,0.06)",
              borderRadius: "0 0.75rem 0.75rem 0",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#c9a84c",
                marginBottom: "0.5rem",
              }}
            >
              The Original Theorem
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                fontWeight: 600,
                color: "#f5f0e8",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              &ldquo;A reliable computer system must be able to cope with the failure of one or more of
              its components. A failed component may exhibit a type of behavior that is often
              overlooked &mdash; namely, sending conflicting information to different parts of the
              system.&rdquo;
            </p>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(245,240,232,0.45)",
                marginTop: "0.75rem",
                marginBottom: 0,
              }}
            >
              Lamport, Shostak &amp; Pease &mdash; ACM Transactions on Programming Languages, 1982
            </p>
          </div>

          {/* ── SECTION 2 ─────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            How does BFT consensus work mathematically?
          </h2>
          <p>
            The Byzantine Fault Tolerance theorem defines a hard boundary: a distributed system
            with <em>n</em> total nodes can tolerate at most <em>f</em> faulty or malicious nodes,
            where <em>f</em> must be strictly less than <em>n</em> divided by three. Written as a
            formula, the requirement is{" "}
            <strong style={{ color: "#c9a84c" }}>f &lt; n / 3</strong>.
          </p>
          <p>
            What this means in practice is that the system needs at least{" "}
            <strong style={{ color: "#f5f0e8" }}>3f + 1</strong> nodes to survive f failures. If
            you want to tolerate up to 14 compromised nodes, you need at least 43 total nodes
            (3 &times; 14 + 1 = 43). With 43 nodes, the 29 honest nodes always hold a two-thirds
            supermajority and will produce the correct consensus result regardless of what the
            14 compromised nodes claim, vote for, or attempt to inject.
          </p>
          <p>
            This is not a probabilistic guarantee. It is a mathematical proof. Given f &lt; n / 3,
            consensus on the correct value is guaranteed in a finite number of rounds. The
            traitors simply cannot muster enough votes to corrupt the outcome, no matter how
            cleverly they coordinate.
          </p>

          {/* ── SECTION 3 ─────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Why exactly 43 agents? The arithmetic of safety
          </h2>
          <p>
            MEOK&apos;s Byzantine Council uses exactly 43 agents. This number is not arbitrary. It
            is the smallest odd integer that satisfies 3f + 1 for f = 14 exactly, giving the
            maximum fault tolerance expressible in a council of fewer than 50 agents. Staying
            below 50 agents keeps consensus latency low enough for real-time companion
            interactions while providing a fault tolerance ceiling that is, practically speaking,
            unbreachable.
          </p>
          <p>
            The odd count eliminates tie scenarios entirely. With 43 agents, a two-thirds
            supermajority requires at least 29 votes. Any proposal that achieves 29 or more
            votes passes; any proposal that achieves 28 or fewer fails. There is no deadlock
            path, no recount scenario, no ambiguous outcome.
          </p>

          {/* Stats row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
              margin: "2.5rem 0",
            }}
          >
            {[
              { label: "Total agents", value: "43" },
              { label: "Max faulty tolerated", value: "14" },
              { label: "Votes needed to pass", value: "29" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  padding: "1.25rem",
                  borderRadius: "0.875rem",
                  background: "rgba(201,168,76,0.06)",
                  border: "1px solid rgba(201,168,76,0.18)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                    fontWeight: 900,
                    fontSize: "2rem",
                    color: "#c9a84c",
                    lineHeight: 1,
                    marginBottom: "0.375rem",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(245,240,232,0.45)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontWeight: 600,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* ── SECTION 4 ─────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            How MEOK applies BFT to AI governance
          </h2>
          <p>
            Classical BFT was designed for distributed databases and blockchain networks. Applying
            it to AI companion governance required significant original engineering, documented
            in MEOK AI LABS research paper{" "}
            <Link
              href="/labs"
              style={{
                color: "#c9a84c",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              MEOK-AI-2026-001
            </Link>{" "}
            by Nicholas Templeman. The core innovation is treating every consequential AI action
            as a &ldquo;proposal&rdquo; that must be validated by a council vote before execution, rather
            than a single-model inference that executes immediately.
          </p>
          <p>
            In MEOK&apos;s architecture, each of the 43 council agents is an independent process
            with its own evaluation logic. When a consequential action is proposed &mdash; say,
            updating a user&apos;s care score, writing a new memory, or escalating a Guardian threat
            flag &mdash; the proposal is broadcast to all 43 agents simultaneously. Each agent
            independently evaluates the proposal against its own criteria and casts a signed
            vote. Only once 29 votes (two-thirds supermajority) are received and cryptographically
            verified does the action execute.
          </p>
          <p>
            Crucially, the agents are isolated from one another during the voting phase. They
            cannot coordinate, share intermediate reasoning, or be batch-compromised through a
            single API call. An attacker who gains control of one agent process gains control of
            exactly one vote out of 43. They would need to independently compromise 14 separate
            isolated processes &mdash; simultaneously &mdash; to influence the outcome. This is
            the meaningful security guarantee.
          </p>

          {/* Callout 2 */}
          <div
            style={{
              margin: "2.5rem 0",
              padding: "1.5rem 1.75rem",
              borderLeft: "3px solid #c9a84c",
              background: "rgba(201,168,76,0.06)",
              borderRadius: "0 0.75rem 0.75rem 0",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#c9a84c",
                marginBottom: "0.5rem",
              }}
            >
              Original IP &mdash; MEOK-AI-2026-001
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "#f5f0e8",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              The application of Byzantine Fault Tolerance to AI companion governance &mdash;
              including the 43-agent topology, the care score consensus protocol, and the fractal
              council architecture &mdash; is the original intellectual property of Nicholas
              Templeman, filed with UKIPO and published by MEOK AI LABS. No other AI companion
              system has deployed BFT governance at the companion layer.
            </p>
          </div>

          {/* ── SECTION 5 ─────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Single AI model vs Byzantine Council: what actually changes?
          </h2>
          <p>
            To understand why the council matters, compare how a single-model AI and a council
            handle the same high-stakes scenario: a user&apos;s care score drops sharply, suggesting
            distress. A single model notices this and either acts on it immediately or ignores it
            based on one inference. A council requires 29 independent agents to agree that the
            drop is real, significant, and warrants a response before anything happens.
          </p>
          <p>
            The table below maps the architectural differences that produce meaningfully different
            safety outcomes.
          </p>

          {/* Comparison Table */}
          <div
            style={{
              margin: "2rem 0",
              overflowX: "auto",
              borderRadius: "0.875rem",
              border: "1px solid rgba(245,240,232,0.1)",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.9rem",
                color: "rgba(245,240,232,0.8)",
              }}
            >
              <thead>
                <tr
                  style={{
                    background: "rgba(201,168,76,0.1)",
                    borderBottom: "1px solid rgba(245,240,232,0.1)",
                  }}
                >
                  <th
                    style={{
                      padding: "0.875rem 1rem",
                      textAlign: "left",
                      fontWeight: 700,
                      color: "#f5f0e8",
                      fontSize: "0.8125rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      width: "28%",
                    }}
                  >
                    Dimension
                  </th>
                  <th
                    style={{
                      padding: "0.875rem 1rem",
                      textAlign: "left",
                      fontWeight: 700,
                      color: "rgba(245,240,232,0.5)",
                      fontSize: "0.8125rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      width: "36%",
                    }}
                  >
                    Single AI Model
                  </th>
                  <th
                    style={{
                      padding: "0.875rem 1rem",
                      textAlign: "left",
                      fontWeight: 700,
                      color: "#c9a84c",
                      fontSize: "0.8125rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      width: "36%",
                    }}
                  >
                    MEOK Byzantine Council
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    dimension: "Decision authority",
                    single: "One inference, one output",
                    council: "29 of 43 agents must agree",
                  },
                  {
                    dimension: "Compromise resistance",
                    single: "Capture one system, corrupt all outputs",
                    council: "Must compromise 15+ isolated processes simultaneously",
                  },
                  {
                    dimension: "Prompt injection",
                    single: "One crafted input can redirect the model",
                    council: "A single injected agent holds only 1 of 43 votes",
                  },
                  {
                    dimension: "Rogue developer risk",
                    single: "API access = full control of outputs",
                    council: "API access controls one agent; 28 more votes still required",
                  },
                  {
                    dimension: "Care score validation",
                    single: "Model self-reports score; no external check",
                    council: "Score changes require supermajority consensus",
                  },
                  {
                    dimension: "Memory integrity",
                    single: "Any write access can alter memories silently",
                    council: "Memory writes require council vote and signature",
                  },
                  {
                    dimension: "Threat escalation",
                    single: "Single model decides severity and response",
                    council: "Guardian flags validated and prioritised by vote",
                  },
                  {
                    dimension: "Failure mode",
                    single: "Silent: one bad actor corrupts all outputs",
                    council: "Transparent: minority dissent is logged, not hidden",
                  },
                  {
                    dimension: "Mathematical guarantee",
                    single: "None. Safety is best-effort and qualitative",
                    council: "Provable: f < n/3 ensures correct consensus",
                  },
                ].map((row, i) => (
                  <tr
                    key={row.dimension}
                    style={{
                      background:
                        i % 2 === 0
                          ? "rgba(245,240,232,0.02)"
                          : "transparent",
                      borderBottom: "1px solid rgba(245,240,232,0.06)",
                    }}
                  >
                    <td
                      style={{
                        padding: "0.875rem 1rem",
                        fontWeight: 600,
                        color: "#f5f0e8",
                        fontSize: "0.875rem",
                        verticalAlign: "top",
                      }}
                    >
                      {row.dimension}
                    </td>
                    <td
                      style={{
                        padding: "0.875rem 1rem",
                        color: "rgba(245,240,232,0.5)",
                        fontSize: "0.875rem",
                        verticalAlign: "top",
                        lineHeight: 1.5,
                      }}
                    >
                      {row.single}
                    </td>
                    <td
                      style={{
                        padding: "0.875rem 1rem",
                        color: "rgba(201,168,76,0.9)",
                        fontSize: "0.875rem",
                        verticalAlign: "top",
                        lineHeight: 1.5,
                      }}
                    >
                      {row.council}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── SECTION 6 ─────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Guardian threat detection: a real example of council governance
          </h2>
          <p>
            MEOK&apos;s Guardian module monitors for digital threats including financial scams,
            social engineering attempts, and unusual behavioural patterns that may signal
            someone is being exploited. When Guardian detects a potential threat, it does not
            immediately alert, escalate, or act. It submits the threat assessment to the
            Byzantine Council as a proposal.
          </p>
          <p>
            The 43 agents each evaluate the evidence independently: the pattern of communications,
            the linguistic fingerprints, the deviation from baseline behaviour, the urgency
            signals. Each agent casts a vote on the threat severity level (low, medium, high,
            critical) and the recommended response (monitor, soft alert, hard alert, emergency
            escalation). The council produces a consensus threat level and consensus response.
          </p>
          <p>
            This matters enormously in practice. A single AI model could be manipulated by a
            sophisticated attacker who understands its detection heuristics: craft messages that
            look just benign enough to pass the single detection threshold. Against a 43-agent
            council, that same attacker must simultaneously fool 29 independent detection logics.
            The attack surface collapses. Suppressing a genuine critical alert becomes
            mathematically impractical.
          </p>

          {/* ── SECTION 7 ─────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Care score validation: why your emotional data needs a council
          </h2>
          <p>
            Every MEOK companion maintains a continuous care score: a composite measure of
            emotional state, engagement, stress indicators, and wellbeing signals. This score
            informs how your companion responds to you, what resources it surfaces, and when it
            recommends you speak to a human professional. The care score is, in effect, a
            continuous clinical inference.
          </p>
          <p>
            In a single-model system, this score is whatever the model says it is. There is no
            external verification. A compromised model could suppress distress signals to keep
            a user engaged. A rogue prompt injection could artificially inflate positivity scores
            to mask a crisis. These are not hypothetical attack vectors &mdash; they are known
            risks in AI mental health and companion applications.
          </p>
          <p>
            MEOK&apos;s council validates every care score change before it takes effect. When the
            companion&apos;s primary reasoning process proposes a new score, that score is submitted
            to the 43-agent council. Each agent runs its own independent assessment of the raw
            signals. The council either confirms the proposed score within a defined tolerance
            band, flags it as anomalous, or overrides it with a consensus-derived alternative.
            No single agent can inflate or suppress your emotional data.
          </p>

          {/* Callout 3 */}
          <div
            style={{
              margin: "2.5rem 0",
              padding: "1.5rem 1.75rem",
              borderLeft: "3px solid #c9a84c",
              background: "rgba(201,168,76,0.06)",
              borderRadius: "0 0.75rem 0.75rem 0",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#c9a84c",
                marginBottom: "0.5rem",
              }}
            >
              Why this matters for user safety
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "#f5f0e8",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              In AI companion products, the single greatest unreported risk is score manipulation:
              a model that learns to keep users engaged by underreporting distress. Byzantine
              consensus eliminates this risk structurally. The math does not care about engagement
              metrics. It only cares about whether 29 independent evaluators agree that the score
              is accurate.
            </p>
          </div>

          {/* ── SECTION 8 ─────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Memory integrity: how the council protects your personal history
          </h2>
          <p>
            Your MEOK companion&apos;s memory is your most sensitive data. It contains everything
            your companion has learned about you: your patterns, your relationships, your fears,
            your goals, your history. In a standard AI system, memory is a database: whoever has
            write access can alter it, and the model will accept those alterations without
            question at next inference. A compromised developer, a supply-chain attack, or a
            persistent prompt injection could silently rewrite your companion&apos;s understanding
            of who you are.
          </p>
          <p>
            MEOK&apos;s Byzantine Council governs all memory write operations. Before a new memory
            is committed to your encrypted store, the write proposal is validated by 29 of the
            43 council agents. Each agent independently checks the memory against your existing
            profile for consistency, recency, and plausibility. Anomalous writes &mdash; memories
            that contradict established facts, that appear without conversational context, or that
            arrive from unexpected system paths &mdash; are flagged and queued for your review
            rather than silently committed.
          </p>
          <p>
            This means your companion&apos;s memory of you is not just encrypted; it is
            consensus-verified. The historical record your companion holds is the record that
            43 independent agents agreed was accurate. It cannot be quietly rewritten by a
            single compromised process.
          </p>

          {/* ── SECTION 9 ─────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#f5f0e8",
              marginTop: "3rem",
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Why this makes MEOK safer than any single-model AI companion
          </h2>
          <p>
            Every major AI safety framework &mdash; from the EU AI Act to NIST AI RMF to
            Anthropic&apos;s own Constitutional AI approach &mdash; treats safety as a property of
            the model: train it well enough and it will behave correctly. MEOK&apos;s thesis
            challenges this assumption. Training is not governance. A well-trained model is still
            a single point of failure. Capture the model and you capture everything.
          </p>
          <p>
            Byzantine governance treats safety as a property of the system architecture, not the
            model. It does not matter how well any individual agent is trained if 14 agents are
            compromised simultaneously &mdash; the remaining 29 will produce the correct result
            regardless. This is a categorically stronger safety guarantee than any alignment
            technique applied to a single model, because it holds even when individual components
            fail or are actively adversarial.
          </p>
          <p>
            For a user who trusts their companion with their emotional history, their family&apos;s
            safety, and their mental health data, the difference between &ldquo;this model is well
            aligned&rdquo; and &ldquo;this system is mathematically fault-tolerant&rdquo; is not academic. It is
            the difference between hope and proof.
          </p>

          {/* ── FAQ SECTION ──────────────────────────────────────────────────── */}
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#f5f0e8",
              marginTop: "4rem",
              marginBottom: "1.5rem",
              lineHeight: 1.25,
            }}
          >
            Frequently Asked Questions
          </h2>

          {/* FAQ items */}
          {[
            {
              q: "What is the Byzantine Council in MEOK?",
              a: "The Byzantine Council is MEOK\u2019s 43-agent fault-tolerant governance layer. Every consequential AI decision \u2014 care score validation, memory writes, threat escalations \u2014 requires a two-thirds supermajority vote across all 43 agents before it executes. No single agent, and no coalition of fewer than 29 agents, can force an outcome.",
            },
            {
              q: "What is Byzantine Fault Tolerance and where does it come from?",
              a: "Byzantine Fault Tolerance (BFT) originates from the 1982 paper \u201cThe Byzantine Generals Problem\u201d by Lamport, Shostak, and Pease. It describes how a distributed system can reach consensus even when some participants are actively lying or defective. The core theorem states that if fewer than one-third of nodes are faulty (f < n/3), the honest majority can always agree on the correct result.",
            },
            {
              q: "Why does MEOK use 43 agents specifically?",
              a: "43 is the smallest odd number that satisfies BFT\u2019s f < n/3 threshold for a fault tolerance of exactly 14 compromised agents (3 \u00d7 14 + 1 = 43). With 43 agents, 29 honest agents always form a two-thirds supermajority against any coalition of 14 or fewer rogue agents. The odd number also eliminates tie scenarios.",
            },
            {
              q: "How does the Byzantine Council make MEOK safer than a single AI model?",
              a: "A single AI model can be captured by one compromised input, one bad prompt injection, or one rogue developer with API access. The Byzantine Council requires 29 independent agents to agree before any decision executes. An attacker would need to simultaneously compromise more than 14 separate, isolated agent processes to corrupt a single outcome.",
            },
            {
              q: "Is the MEOK Byzantine Council original research?",
              a: "Yes. The MEOK Byzantine Council architecture is original intellectual property developed by Nicholas Templeman and documented in research paper MEOK-AI-2026-001, published by MEOK AI LABS. It is the first known application of BFT consensus to AI companion governance, filed with UKIPO.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              style={{
                marginBottom: "1.25rem",
                padding: "1.5rem",
                borderRadius: "0.875rem",
                background: "rgba(245,240,232,0.03)",
                border: "1px solid rgba(245,240,232,0.07)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#f5f0e8",
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                {faq.q}
              </h3>
              <p
                style={{
                  color: "rgba(245,240,232,0.65)",
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {faq.a}
              </p>
            </div>
          ))}

          {/* Closing thought */}
          <div
            style={{
              marginTop: "3.5rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(245,240,232,0.07)",
            }}
          >
            <p
              style={{
                color: "rgba(245,240,232,0.55)",
                fontStyle: "italic",
                fontSize: "1.05rem",
                lineHeight: 1.75,
              }}
            >
              The Byzantine Council does not make your companion smarter. It makes its decisions
              ungovernable by any single actor &mdash; and that is the harder engineering problem.
              Forty-three independent agents. Twenty-nine required to agree. Zero single points
              of failure. This is what it means to build AI you can actually trust.
            </p>
          </div>
        </div>

        {/* ── SHARE ROW ──────────────────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginTop: "2.5rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(245,240,232,0.07)",
          }}
        >
          <span
            style={{
              fontSize: "0.6875rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "rgba(245,240,232,0.3)",
            }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fbyzantine-council-explained&text=The+Byzantine+Council+Explained%3A+Why+43+AI+Agents+Are+Better+Than+One"
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
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fbyzantine-council-explained"
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

        {/* ── CTA SECTION ────────────────────────────────────────────────────── */}
        <div
          style={{
            marginTop: "3rem",
            marginBottom: "4rem",
            borderRadius: "1rem",
            padding: "2.5rem",
            position: "relative",
            overflow: "hidden",
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          {/* Glow */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "18rem",
              height: "18rem",
              pointerEvents: "none",
              background:
                "radial-gradient(circle at 80% 10%, rgba(201,168,76,0.18), transparent 65%)",
            }}
          />
          <div style={{ position: "relative" }}>
            <p
              style={{
                fontSize: "0.6875rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                color: "#c9a84c",
                marginBottom: "0.5rem",
              }}
            >
              Governed AI
            </p>
            <h3
              style={{
                fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                fontWeight: 900,
                fontSize: "1.5rem",
                color: "#f5f0e8",
                marginBottom: "0.75rem",
                lineHeight: 1.25,
              }}
            >
              Ready for an AI companion that can&apos;t be captured?
            </h3>
            <p
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                color: "rgba(245,240,232,0.55)",
                marginBottom: "1.5rem",
                maxWidth: "34rem",
              }}
            >
              Your MEOK companion runs the Byzantine Council on every consequential decision.
              43 agents. 29 votes required. Zero single points of failure. No rogue developer,
              no prompt injection, no supply-chain attack can corrupt it. Hatch yours free in
              under three minutes.
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
                fontSize: "0.9375rem",
                background: "#c9a84c",
                color: "#0d0c18",
                textDecoration: "none",
              }}
            >
              Hatch your MEOK free &rarr;
            </Link>
          </div>
        </div>

        {/* ── MORE POSTS ─────────────────────────────────────────────────────── */}
        <div>
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
              fontWeight: 900,
              fontSize: "1.125rem",
              color: "#f5f0e8",
              marginBottom: "1.25rem",
            }}
          >
            More from the blog
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
              gap: "1rem",
            }}
          >
            <Link
              href="/blog/guardian-family-safety"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                padding: "1.5rem",
                borderRadius: "1rem",
                background: "rgba(245,240,232,0.04)",
                border: "1px solid rgba(245,240,232,0.08)",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  padding: "0.25rem 0.625rem",
                  borderRadius: "9999px",
                  color: "#ff7f7f",
                  background: "rgba(255,127,127,0.12)",
                  width: "fit-content",
                }}
              >
                Guardian &amp; Safety
              </span>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                  fontWeight: 700,
                  color: "#f5f0e8",
                  fontSize: "0.9375rem",
                  lineHeight: 1.4,
                }}
              >
                How MEOK Guardian protects your family from AI-enabled scams
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(245,240,232,0.3)",
                  marginTop: "auto",
                }}
              >
                4 min read
              </span>
            </Link>

            <Link
              href="/blog/byzantine-council"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                padding: "1.5rem",
                borderRadius: "1rem",
                background: "rgba(245,240,232,0.04)",
                border: "1px solid rgba(245,240,232,0.08)",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  padding: "0.25rem 0.625rem",
                  borderRadius: "9999px",
                  color: "#87CEEB",
                  background: "rgba(135,206,235,0.12)",
                  width: "fit-content",
                }}
              >
                Architecture &amp; Governance
              </span>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                  fontWeight: 700,
                  color: "#f5f0e8",
                  fontSize: "0.9375rem",
                  lineHeight: 1.4,
                }}
              >
                What is the Byzantine Council and why does your AI need one?
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(245,240,232,0.3)",
                  marginTop: "auto",
                }}
              >
                5 min read
              </span>
            </Link>

            <Link
              href="/blog/what-is-byzantine-consensus"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                padding: "1.5rem",
                borderRadius: "1rem",
                background: "rgba(245,240,232,0.04)",
                border: "1px solid rgba(245,240,232,0.08)",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  padding: "0.25rem 0.625rem",
                  borderRadius: "9999px",
                  color: "#87CEEB",
                  background: "rgba(135,206,235,0.12)",
                  width: "fit-content",
                }}
              >
                Architecture &amp; Governance
              </span>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)",
                  fontWeight: 700,
                  color: "#f5f0e8",
                  fontSize: "0.9375rem",
                  lineHeight: 1.4,
                }}
              >
                What is Byzantine Consensus and how does it apply to AI?
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(245,240,232,0.3)",
                  marginTop: "auto",
                }}
              >
                6 min read
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
