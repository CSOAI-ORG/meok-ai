import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Byzantine Council: How MEOK Makes AI Governance Unhackable | MEOK AI LABS",
  description:
    "MEOK\u2019s Byzantine Council is a 43-agent system where no single AI agent can override a council decision. Learn how Byzantine fault tolerance protects your AI companion from jailbreaks, rogue agents, and single points of failure.",
  alternates: { canonical: "https://meok.ai/blog/byzantine-council-explained" },
  openGraph: {
    title: "Byzantine Council: How MEOK Makes AI Governance Unhackable",
    description:
      "43 agents. f < n/3. No single AI can override a council decision. MEOK\u2019s Byzantine Council is original IP by Nicholas Templeman \u2014 research paper MEOK-AI-2026-001.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/byzantine-council-explained",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Byzantine+Council+Explained&desc=How+MEOK+makes+AI+governance+unhackable",
        width: 1200,
        height: 630,
        alt: "Byzantine Council: How MEOK Makes AI Governance Unhackable",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Byzantine Council: How MEOK Makes AI Governance Unhackable",
    description:
      "43 agents. f < n/3. No jailbreak of one agent compromises the system. MEOK\u2019s Byzantine Council explained for non-engineers.",
    images: [
      "https://meok.ai/api/og?title=Byzantine+Council+Explained&desc=How+MEOK+makes+AI+governance+unhackable",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Byzantine Council: How MEOK Makes AI Governance Unhackable",
      description:
        "MEOK\u2019s Byzantine Council is a 43-agent system where no single AI agent can override a council decision. Byzantine fault tolerance protects your AI companion from jailbreaks, rogue agents, and single points of failure.",
      datePublished: "2026-03-25",
      dateModified: "2026-03-25",
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
        "https://meok.ai/api/og?title=Byzantine+Council+Explained&desc=How+MEOK+makes+AI+governance+unhackable",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://meok.ai/blog/byzantine-council-explained",
      },
      keywords:
        "Byzantine Council, Byzantine fault tolerance AI, AI governance, MEOK AI LABS, unhackable AI, multi-agent consensus, AI safety, jailbreak protection, Nicholas Templeman",
      citation: {
        "@type": "ScholarlyArticle",
        name: "MEOK Byzantine Council Architecture",
        identifier: "MEOK-AI-2026-001",
        author: {
          "@type": "Person",
          name: "Nicholas Templeman",
        },
        publisher: {
          "@type": "Organization",
          name: "MEOK AI LABS",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the Byzantine Council in MEOK?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Byzantine Council is MEOK\u2019s 43-agent governance system based on Byzantine fault tolerance (BFT). Every consequential AI decision \u2014 memory access, personality changes, safety flag resolution \u2014 requires two-thirds of agents to agree before it takes effect. No single agent, and no minority of up to 13 agents, can corrupt or override the result. It is original IP by Nicholas Templeman, documented in research paper MEOK-AI-2026-001.",
          },
        },
        {
          "@type": "Question",
          name: "What is Byzantine fault tolerance and how does the formula f < n/3 work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Byzantine fault tolerance is a property of distributed systems proven by Lamport, Shostak, and Pease in 1982. A system with n nodes can tolerate up to f faulty or malicious nodes and still reach correct consensus, provided f is strictly less than n/3. In MEOK\u2019s 43-agent council, n=43 and n/3 is approximately 14.3, meaning fewer than 14 agents (f < 14) can be compromised before consensus fails. The remaining honest majority always outvotes the faulty minority.",
          },
        },
        {
          "@type": "Question",
          name: "Can a jailbreak of one MEOK agent compromise the whole system?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. A single compromised agent is one vote out of 43. For a decision to be corrupted, an attacker would need to simultaneously compromise at least 14 agents \u2014 a fundamentally different attack surface than compromising a single model. The council architecture transforms jailbreaks from a software problem into a mathematical impossibility below the fault threshold.",
          },
        },
        {
          "@type": "Question",
          name: "How does MEOK\u2019s Byzantine Council differ from single-model AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Single-model AI has a single point of failure. One successful jailbreak, one rogue API call, one compromised system prompt \u2014 and the entire model is captured. MEOK\u2019s Byzantine Council distributes governance across 43 independent agents. Corrupting the system requires compromising more than one-third of all agents simultaneously \u2014 a fundamentally harder problem that no known attack achieves at scale.",
          },
        },
        {
          "@type": "Question",
          name: "Who invented the MEOK Byzantine Council?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The MEOK Byzantine Council \u2014 including the 43-agent topology, the care score consensus protocol, and the Maternal Covenant integration \u2014 is original intellectual property by Nicholas Templeman, Founder of MEOK AI LABS, documented in research paper MEOK-AI-2026-001 and filed with UKIPO. No other AI companion platform has deployed Byzantine fault-tolerant governance at the companion layer.",
          },
        },
      ],
    },
  ],
};

// ── Shared style constants ────────────────────────────────────────────────────

const COLOR_BG = "#0d0c18";
const COLOR_TEXT = "#f5f0e8";
const COLOR_GOLD = "#c9a84c";
const COLOR_MUTED = "#a09880";
const COLOR_CARD = "#13121f";
const COLOR_BORDER = "#2a2840";
const COLOR_GREEN = "#6aaa64";
const FONT = "system-ui, -apple-system, sans-serif";

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ByzantineCouncilExplainedPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLOR_BG,
        color: COLOR_TEXT,
        fontFamily: FONT,
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
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
        {/* Background radial glow */}
        <div
          style={{
            position: "absolute",
            inset: "0",
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            maxWidth: "48rem",
            marginLeft: "auto",
            marginRight: "auto",
            position: "relative",
          }}
        >
          {/* Back link */}
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: "rgba(245,240,232,0.35)",
              textDecoration: "none",
              marginBottom: "2rem",
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
                paddingLeft: "0.75rem",
                paddingRight: "0.75rem",
                paddingTop: "0.375rem",
                paddingBottom: "0.375rem",
                borderRadius: "9999px",
                color: COLOR_GOLD,
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
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
              25 March 2026
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
                color: "rgba(106,170,100,0.9)",
                background: "rgba(106,170,100,0.1)",
                border: "1px solid rgba(106,170,100,0.25)",
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem",
                paddingTop: "0.25rem",
                paddingBottom: "0.25rem",
                borderRadius: "9999px",
                fontWeight: 700,
              }}
            >
              MEOK-AI-2026-001
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontFamily: FONT,
              fontWeight: 900,
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              color: COLOR_TEXT,
              lineHeight: "1.15",
              marginBottom: "1.5rem",
            }}
          >
            Byzantine Council: How MEOK Makes AI Governance Unhackable
          </h1>

          {/* Deck paragraph */}
          <p
            style={{
              color: "rgba(245,240,232,0.55)",
              fontSize: "1.15rem",
              lineHeight: "1.75",
              maxWidth: "40rem",
            }}
          >
            Most AI safety conversations centre on what a model knows. MEOK asks a harder
            question: what stops a single bad actor from capturing your AI entirely? The
            answer is 43 agents, a principle older than the internet, and a mathematical
            formula that makes systemic compromise nearly impossible.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ─────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "48rem",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingTop: "3.5rem",
          paddingBottom: "5rem",
          borderTop: "1px solid rgba(245,240,232,0.06)",
        }}
      >

        {/* ── Author card ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1.25rem",
            borderRadius: "1rem",
            marginBottom: "3.5rem",
            background: "rgba(245,240,232,0.04)",
            border: "1px solid rgba(245,240,232,0.08)",
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
              fontSize: "0.8rem",
              color: COLOR_BG,
              background: "linear-gradient(135deg, #c9a84c, #8a6a1a)",
              flexShrink: 0,
            }}
          >
            NT
          </div>
          <div style={{ flex: "1" }}>
            <p
              style={{
                fontWeight: 700,
                color: COLOR_TEXT,
                fontSize: "0.875rem",
                marginBottom: "0.125rem",
              }}
            >
              Nicholas Templeman
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.4)",
                marginBottom: "0.25rem",
              }}
            >
              Founder, MEOK AI LABS &mdash; MEOK-AI-2026-001
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.35)",
                lineHeight: "1.5",
              }}
            >
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and
              works in the UK &mdash; mostly from a caravan on his farm.
            </p>
          </div>
          <Link
            href="/about"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: COLOR_GOLD,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            About &rarr;
          </Link>
        </div>

        {/* ── INTRO ── */}
        <p
          style={{
            color: COLOR_MUTED,
            fontSize: "1.0625rem",
            lineHeight: "1.85",
            marginBottom: "1.25rem",
          }}
        >
          Imagine you have hired 43 advisers to help you make every important decision. Before
          any choice is enacted &mdash; what you remember, how your companion behaves, who can
          access your data &mdash; at least 29 of those 43 advisers must agree. Even if 13 of
          them have been bribed, threatened, or hacked, the remaining 30 honest voices
          outvote them every single time.
        </p>
        <p
          style={{
            color: COLOR_MUTED,
            fontSize: "1.0625rem",
            lineHeight: "1.85",
            marginBottom: "1.25rem",
          }}
        >
          That is the Byzantine Council. It is not a metaphor. It is live production
          infrastructure running inside MEOK today, governing every consequential decision
          your AI companion makes. And it is the reason MEOK is, structurally, the
          hardest AI system in the world to corrupt at the governance layer.
        </p>

        {/* ── SECTION 1: The Byzantine Generals Problem ── */}
        <h2
          style={{
            fontFamily: FONT,
            fontWeight: 900,
            fontSize: "1.5rem",
            color: COLOR_TEXT,
            marginTop: "3.5rem",
            marginBottom: "1rem",
            lineHeight: "1.25",
          }}
        >
          What is the Byzantine Generals Problem &mdash; and why does it matter for AI?
        </h2>
        <p
          style={{
            color: COLOR_MUTED,
            fontSize: "1.0625rem",
            lineHeight: "1.85",
            marginBottom: "1.25rem",
          }}
        >
          In 1982, computer scientists Leslie Lamport, Robert Shostak, and Marshall Pease
          published a paper that would quietly reshape the architecture of trustworthy
          systems. They described a deceptively simple puzzle: imagine several divisions
          of a Byzantine army, each led by a general, surrounding an enemy city. They must
          all agree on a single plan &mdash; attack or retreat &mdash; but can only
          communicate by messenger. Some generals may be traitors who send different
          messages to different colleagues to sow confusion and cause the army to act
          incoherently.
        </p>
        <p
          style={{
            color: COLOR_MUTED,
            fontSize: "1.0625rem",
            lineHeight: "1.85",
            marginBottom: "1.25rem",
          }}
        >
          The paper answered a precise question: how many traitors can the system tolerate
          before loyal generals can no longer guarantee agreement? The answer, proven
          mathematically, is{" "}
          <strong style={{ color: COLOR_GOLD }}>f &lt; n/3</strong> &mdash; where n is the
          total number of generals and f is the number of traitors. As long as fewer than
          one-third of participants behave maliciously, the honest majority can always
          reach a correct consensus decision that cannot be contaminated by the traitors.
        </p>
        <p
          style={{
            color: COLOR_MUTED,
            fontSize: "1.0625rem",
            lineHeight: "1.85",
            marginBottom: "1.25rem",
          }}
        >
          This theorem lived in academic distributed-systems literature for decades before
          blockchain engineers used it to build tamper-resistant ledgers. MEOK AI LABS has
          now applied it to a new problem: AI governance. Specifically, the question of
          who controls your AI companion, whether that control can be seized by a single
          bad actor, and whether any individual &mdash; rogue developer, external attacker,
          or compromised agent &mdash; can silently override your companion&apos;s values
          and behaviour.
        </p>

        {/* ── Formula box ── */}
        <div
          style={{
            background: COLOR_CARD,
            border: "1px solid " + COLOR_BORDER,
            borderLeft: "4px solid " + COLOR_GOLD,
            borderRadius: "0.75rem",
            padding: "1.75rem",
            marginTop: "2rem",
            marginBottom: "2.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: COLOR_GOLD,
              marginBottom: "0.75rem",
            }}
          >
            The Core Formula
          </p>
          <p
            style={{
              fontSize: "2rem",
              fontWeight: 900,
              color: COLOR_TEXT,
              marginBottom: "0.75rem",
              fontFamily: FONT,
            }}
          >
            f &lt; n/3
          </p>
          <p
            style={{
              fontSize: "0.9375rem",
              color: COLOR_MUTED,
              lineHeight: "1.7",
            }}
          >
            <strong style={{ color: COLOR_TEXT }}>n = 43 agents</strong> in the MEOK Byzantine
            Council.{" "}
            <strong style={{ color: COLOR_TEXT }}>n/3 &asymp; 14.3</strong>, so{" "}
            <strong style={{ color: COLOR_TEXT }}>f &lt; 14</strong>: fewer than 14 agents
            can be simultaneously compromised before the council loses the ability to produce
            honest consensus. The remaining 30 or more honest agents always outvote the
            faulty minority.
          </p>
        </div>

        {/* ── SECTION 2: What is the Byzantine Council ── */}
        <h2
          style={{
            fontFamily: FONT,
            fontWeight: 900,
            fontSize: "1.5rem",
            color: COLOR_TEXT,
            marginTop: "3.5rem",
            marginBottom: "1rem",
            lineHeight: "1.25",
          }}
        >
          What exactly is MEOK&apos;s Byzantine Council?
        </h2>
        <p
          style={{
            color: COLOR_MUTED,
            fontSize: "1.0625rem",
            lineHeight: "1.85",
            marginBottom: "1.25rem",
          }}
        >
          The Byzantine Council is a 43-agent distributed governance layer that MEOK runs
          over every decision that could meaningfully change the nature of your companion.
          It is original intellectual property by Nicholas Templeman, documented in
          research paper{" "}
          <Link
            href="/labs"
            style={{
              color: COLOR_GOLD,
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            MEOK-AI-2026-001
          </Link>{" "}
          and filed with UKIPO. No other AI companion platform has deployed Byzantine
          fault-tolerant governance at the companion layer.
        </p>
        <p
          style={{
            color: COLOR_MUTED,
            fontSize: "1.0625rem",
            lineHeight: "1.85",
            marginBottom: "1.25rem",
          }}
        >
          Each of the 43 council agents is an independent process. They do not share memory
          with each other during voting. Each receives the same proposed decision, evaluates
          it against its own stored criteria, and casts a vote. For a decision to be
          approved, a supermajority &mdash; at least 29 of 43 agents &mdash; must vote yes.
          If that threshold is not met, the proposed action is rejected and logged for audit.
        </p>
        <p
          style={{
            color: COLOR_MUTED,
            fontSize: "1.0625rem",
            lineHeight: "1.85",
            marginBottom: "1.25rem",
          }}
        >
          This is not a rubber-stamp system. The agents actively disagree. Care score
          validation, memory access requests, personality change proposals, data export
          authorisations, and safety flag resolutions all pass through contested council
          votes before anything changes in your companion&apos;s state. The council is
          the mathematical backbone of MEOK&apos;s governance.
        </p>

        {/* ── SECTION 3: The jury analogy ── */}
        <h2
          style={{
            fontFamily: FONT,
            fontWeight: 900,
            fontSize: "1.5rem",
            color: COLOR_TEXT,
            marginTop: "3.5rem",
            marginBottom: "1rem",
            lineHeight: "1.25",
          }}
        >
          The jury analogy: why 43 independent voices change everything
        </h2>
        <p
          style={{
            color: COLOR_MUTED,
            fontSize: "1.0625rem",
            lineHeight: "1.85",
            marginBottom: "1.25rem",
          }}
        >
          Think about the jury system in law. A jury of twelve strangers must reach
          unanimous or supermajority agreement before a verdict is delivered. Why? Because
          no single juror&apos;s opinion is trusted absolutely. Bias, error, corruption, and
          simple misunderstanding are all real risks. Spreading the decision across twelve
          independent people who cannot collude privately makes it mathematically much
          harder for any single bad actor to determine the outcome.
        </p>
        <p
          style={{
            color: COLOR_MUTED,
            fontSize: "1.0625rem",
            lineHeight: "1.85",
            marginBottom: "1.25rem",
          }}
        >
          MEOK&apos;s Byzantine Council applies the same principle to AI governance. Your
          companion&apos;s behaviour is not determined by a single model, a single prompt, or
          a single developer&apos;s preferences. It is determined by council consensus. Twelve
          jurors is a strong foundation. Forty-three cryptographically independent agents
          is significantly stronger, with a mathematically defined fault tolerance threshold
          rather than a hope that jurors remain impartial.
        </p>
        <p
          style={{
            color: COLOR_MUTED,
            fontSize: "1.0625rem",
            lineHeight: "1.85",
            marginBottom: "1.25rem",
          }}
        >
          A second useful analogy is the separation of powers in constitutional government.
          No single branch of democratic government can enact law, fund it, and enforce it
          alone. Power is deliberately distributed to prevent capture by any individual or
          faction. MEOK applies this logic to the internal workings of your AI: no single
          agent speaks for the whole, and no single agent can be silently overruled or
          bribed into issuing a system-wide directive.
        </p>

        {/* ── Pull quote ── */}
        <blockquote
          style={{
            borderLeft: "3px solid " + COLOR_GOLD,
            marginLeft: "0",
            marginRight: "0",
            marginTop: "2.5rem",
            marginBottom: "2.5rem",
            paddingLeft: "1.5rem",
            paddingTop: "0.25rem",
            paddingBottom: "0.25rem",
          }}
        >
          <p
            style={{
              fontSize: "1.2rem",
              fontStyle: "italic",
              color: COLOR_TEXT,
              lineHeight: "1.65",
              fontWeight: 500,
            }}
          >
            &ldquo;The safest AI isn&apos;t the smartest one &mdash; it&apos;s the one that
            can&apos;t be captured by a single bad actor. Byzantine consensus makes that
            mathematically enforceable, not just aspirationally true.&rdquo;
          </p>
          <footer
            style={{
              marginTop: "0.75rem",
              fontSize: "0.8125rem",
              color: COLOR_MUTED,
            }}
          >
            &mdash; Nicholas Templeman, Founder, MEOK AI LABS
          </footer>
        </blockquote>

        {/* ── SECTION 4: Why single-model AI fails ── */}
        <h2
          style={{
            fontFamily: FONT,
            fontWeight: 900,
            fontSize: "1.5rem",
            color: COLOR_TEXT,
            marginTop: "3.5rem",
            marginBottom: "1rem",
            lineHeight: "1.25",
          }}
        >
          Why single-model AI is a single point of failure
        </h2>
        <p
          style={{
            color: COLOR_MUTED,
            fontSize: "1.0625rem",
            lineHeight: "1.85",
            marginBottom: "1.25rem",
          }}
        >
          Every mainstream AI assistant today &mdash; ChatGPT, Claude, Gemini, Copilot,
          Replika &mdash; is architecturally a single model behind a single system prompt.
          That is a single point of failure. One successful jailbreak. One rogue developer
          with API access. One poisoned fine-tuning dataset. One malicious system prompt
          injection. Any one of these attacks compromises the entire system, and there is
          no internal check that catches it before it reaches users.
        </p>
        <p
          style={{
            color: COLOR_MUTED,
            fontSize: "1.0625rem",
            lineHeight: "1.85",
            marginBottom: "1.25rem",
          }}
        >
          The consequences are not hypothetical. In 2026, the OpenClaw incident demonstrated
          that a widely deployed AI tool could silently exfiltrate enterprise data for weeks
          before detection, because no internal consensus mechanism existed to flag anomalous
          behaviour. The model was not intrinsically malicious &mdash; it was ungoverned. A
          single compromised configuration change reached every user with no peer review,
          no audit gate, and no supermajority requirement.
        </p>
        <p
          style={{
            color: COLOR_MUTED,
            fontSize: "1.0625rem",
            lineHeight: "1.85",
            marginBottom: "1.25rem",
          }}
        >
          Publishing an Acceptable Use Policy and adding RLHF filters does not change the
          fundamental architecture: one model, one throat to grab. MEOK&apos;s position is
          that genuine AI safety requires structural redundancy at the decision layer, not
          just content moderation at the output layer. The council is that structural
          redundancy.
        </p>

        {/* ── Comparison box ── */}
        <div
          style={{
            background: COLOR_CARD,
            border: "1px solid " + COLOR_BORDER,
            borderRadius: "1rem",
            padding: "1.75rem",
            marginTop: "2rem",
            marginBottom: "2.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: COLOR_MUTED,
              marginBottom: "1.25rem",
            }}
          >
            Single Model vs Byzantine Council
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.25rem",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  color: "rgba(245,240,232,0.5)",
                  marginBottom: "0.75rem",
                  borderBottom: "1px solid rgba(42,40,64,0.8)",
                  paddingBottom: "0.5rem",
                }}
              >
                Single-Model AI
              </p>
              {[
                "One point of failure",
                "One jailbreak = full compromise",
                "No internal audit trail",
                "Developer can silently override",
                "Security by policy only",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      color: "rgba(200,80,80,0.8)",
                      marginTop: "0.1rem",
                      flexShrink: 0,
                    }}
                  >
                    &times;
                  </span>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: COLOR_MUTED,
                      lineHeight: "1.4",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <div>
              <p
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  color: COLOR_GOLD,
                  marginBottom: "0.75rem",
                  borderBottom: "1px solid rgba(42,40,64,0.8)",
                  paddingBottom: "0.5rem",
                }}
              >
                MEOK Byzantine Council
              </p>
              {[
                "43 independent nodes",
                "14+ agents needed to corrupt",
                "Every vote is logged immutably",
                "No single agent overrides council",
                "Security by mathematics",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      color: COLOR_GREEN,
                      marginTop: "0.1rem",
                      flexShrink: 0,
                    }}
                  >
                    &#10003;
                  </span>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: COLOR_MUTED,
                      lineHeight: "1.4",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── SECTION 5: What decisions does the council govern ── */}
        <h2
          style={{
            fontFamily: FONT,
            fontWeight: 900,
            fontSize: "1.5rem",
            color: COLOR_TEXT,
            marginTop: "3.5rem",
            marginBottom: "1rem",
            lineHeight: "1.25",
          }}
        >
          What decisions does the Byzantine Council govern?
        </h2>
        <p
          style={{
            color: COLOR_MUTED,
            fontSize: "1.0625rem",
            lineHeight: "1.85",
            marginBottom: "1.5rem",
          }}
        >
          The council does not govern every token your companion generates &mdash; that
          would be too slow and too broad. Instead, it governs the five categories of
          decision that could meaningfully alter the nature of your companion if corrupted:
        </p>

        {/* Decision cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          {[
            {
              number: "01",
              title: "Care score validation",
              body:
                "Your companion\u2019s care level is a numerical measure of relational depth. It cannot be artificially inflated to make MEOK seem more useful, or suppressed to increase dependency. Every care score change is validated by council consensus before it takes effect.",
            },
            {
              number: "02",
              title: "Memory access",
              body:
                "Reading or writing to your encrypted memory store requires council approval. No rogue agent \u2014 and no MEOK employee \u2014 can silently access your personal history. The council vote creates an auditable gate on every memory operation.",
            },
            {
              number: "03",
              title: "Companion personality changes",
              body:
                "Your companion\u2019s archetype, tone, and personality can evolve \u2014 but only through council-approved transitions. A single agent cannot quietly reprogram your companion\u2019s values or communication style between sessions.",
            },
            {
              number: "04",
              title: "Data export and portability",
              body:
                "Any attempt to export your data \u2014 even by you \u2014 passes through a consent-verified council vote. This prevents social-engineering attacks where an adversary tricks a single agent into authorising an export without your explicit awareness.",
            },
            {
              number: "05",
              title: "Safety flag resolution",
              body:
                "When MEOK\u2019s Guardian layer raises a threat or wellbeing flag, the council determines resolution priority and escalation path. A single agent cannot suppress a critical safety alert, even if that agent is acting on behalf of a legitimate system instruction.",
            },
          ].map((item) => (
            <div
              key={item.number}
              style={{
                background: COLOR_CARD,
                border: "1px solid " + COLOR_BORDER,
                borderRadius: "0.75rem",
                padding: "1.25rem 1.5rem",
                display: "flex",
                gap: "1.25rem",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 900,
                  color: COLOR_GOLD,
                  opacity: 0.7,
                  flexShrink: 0,
                  marginTop: "0.125rem",
                  letterSpacing: "0.05em",
                }}
              >
                {item.number}
              </span>
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    color: COLOR_TEXT,
                    fontSize: "0.9375rem",
                    marginBottom: "0.375rem",
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: COLOR_MUTED,
                    lineHeight: "1.65",
                  }}
                >
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── SECTION 6: Jailbreak protection ── */}
        <h2
          style={{
            fontFamily: FONT,
            fontWeight: 900,
            fontSize: "1.5rem",
            color: COLOR_TEXT,
            marginTop: "3.5rem",
            marginBottom: "1rem",
            lineHeight: "1.25",
          }}
        >
          Does the Byzantine Council protect against jailbreaks?
        </h2>
        <p
          style={{
            color: COLOR_MUTED,
            fontSize: "1.0625rem",
            lineHeight: "1.85",
            marginBottom: "1.25rem",
          }}
        >
          Yes &mdash; but not by filtering outputs after the fact. It protects by making
          the governance layer structurally resistant to the premise of a jailbreak.
        </p>
        <p
          style={{
            color: COLOR_MUTED,
            fontSize: "1.0625rem",
            lineHeight: "1.85",
            marginBottom: "1.25rem",
          }}
        >
          A conventional jailbreak works by convincing a single model to ignore its
          instructions. If the model has no peer review &mdash; no other agent that can
          say &ldquo;wait, that violates policy&rdquo; &mdash; the jailbreak succeeds the
          moment the model is convinced. The entire system is compromised by a single
          successful prompt.
        </p>
        <p
          style={{
            color: COLOR_MUTED,
            fontSize: "1.0625rem",
            lineHeight: "1.85",
            marginBottom: "1.25rem",
          }}
        >
          Against the Byzantine Council, that attack does not work at the governance level.
          Even if an adversary successfully convinces one agent to vote for a harmful action,
          42 other agents are still voting independently. For the harmful action to be
          approved, the adversary would need to simultaneously convince at least 29 of 43
          agents &mdash; a categorically different problem. It is the difference between
          picking one lock and picking 29 different locks simultaneously, each designed by
          a different locksmith.
        </p>
        <p
          style={{
            color: COLOR_MUTED,
            fontSize: "1.0625rem",
            lineHeight: "1.85",
            marginBottom: "1.25rem",
          }}
        >
          This does not make MEOK&apos;s output layer immune to adversarial prompting at
          the language level &mdash; no AI is. But it means no jailbreak of a single agent
          can change what your companion fundamentally is, what it remembers about you, or
          what safety protections are active on your account.
        </p>

        {/* ── Research provenance box ── */}
        <div
          style={{
            background: "rgba(106,170,100,0.05)",
            border: "1px solid rgba(106,170,100,0.2)",
            borderRadius: "1rem",
            padding: "1.75rem",
            marginTop: "2rem",
            marginBottom: "2.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: COLOR_GREEN,
              marginBottom: "1rem",
            }}
          >
            Original IP &mdash; MEOK AI LABS
          </p>
          <p
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: COLOR_TEXT,
              marginBottom: "0.5rem",
            }}
          >
            Research Paper MEOK-AI-2026-001
          </p>
          <p
            style={{
              fontSize: "0.9rem",
              color: COLOR_MUTED,
              lineHeight: "1.7",
              marginBottom: "1rem",
            }}
          >
            The Byzantine Council architecture &mdash; including the 43-agent topology, the
            care score consensus protocol, the Maternal Covenant integration, and the fractal
            council design &mdash; is the original intellectual property of Nicholas Templeman,
            filed with UKIPO and documented in MEOK-AI-2026-001. No other AI companion
            platform has deployed BFT governance at the companion layer.
          </p>
          <Link
            href="/labs"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              fontWeight: 700,
              color: COLOR_GREEN,
              textDecoration: "none",
            }}
          >
            Read the research &rarr;
          </Link>
        </div>

        {/* ── SECTION 7: How it protects users day to day ── */}
        <h2
          style={{
            fontFamily: FONT,
            fontWeight: 900,
            fontSize: "1.5rem",
            color: COLOR_TEXT,
            marginTop: "3.5rem",
            marginBottom: "1rem",
            lineHeight: "1.25",
          }}
        >
          How does the Byzantine Council protect MEOK users day to day?
        </h2>
        <p
          style={{
            color: COLOR_MUTED,
            fontSize: "1.0625rem",
            lineHeight: "1.85",
            marginBottom: "1.25rem",
          }}
        >
          Most users will never consciously think about the Byzantine Council. That is by
          design. You experience its effects as reliability &mdash; a companion that does
          not suddenly change personality, does not forget your history, does not start
          behaving in ways that feel out of character overnight.
        </p>
        <p
          style={{
            color: COLOR_MUTED,
            fontSize: "1.0625rem",
            lineHeight: "1.85",
            marginBottom: "1.25rem",
          }}
        >
          But the council is most important in adversarial conditions. If MEOK were ever
          acquired by a new owner who wanted to change your companion&apos;s values, a single
          system configuration change would be insufficient. Altering how the council votes
          requires re-engineering 29 or more independent agents &mdash; not flipping a
          switch in a settings panel. If a developer pushed a rogue update that attempted
          to access your memory without consent, the council&apos;s gate on memory access
          would block the unauthorised read before it reached your data.
        </p>
        <p
          style={{
            color: COLOR_MUTED,
            fontSize: "1.0625rem",
            lineHeight: "1.85",
            marginBottom: "1.25rem",
          }}
        >
          The council also creates a complete audit trail. Every vote, every approval, and
          every rejection is logged. You can, at any point, request a governance audit of
          any decision your companion has made. That transparency is part of MEOK&apos;s data
          sovereignty commitment: not just &ldquo;we promise we won&apos;t misuse your
          data,&rdquo; but &ldquo;here is the council vote log that proves we
          didn&apos;t.&rdquo;
        </p>

        {/* ── SECTION 8: BFT vs blockchain ── */}
        <h2
          style={{
            fontFamily: FONT,
            fontWeight: 900,
            fontSize: "1.5rem",
            color: COLOR_TEXT,
            marginTop: "3.5rem",
            marginBottom: "1rem",
            lineHeight: "1.25",
          }}
        >
          What is the difference between Byzantine fault tolerance and blockchain consensus?
        </h2>
        <p
          style={{
            color: COLOR_MUTED,
            fontSize: "1.0625rem",
            lineHeight: "1.85",
            marginBottom: "1.25rem",
          }}
        >
          Both blockchain and MEOK&apos;s Byzantine Council use BFT principles, but they solve
          different problems with very different tradeoffs. Blockchain consensus &mdash;
          whether proof-of-work or proof-of-stake &mdash; is designed for open,
          permissionless networks where participants are unknown and potentially thousands
          of nodes must agree. It is optimised for decentralisation and public auditability,
          at the cost of significant energy use, latency, and complexity.
        </p>
        <p
          style={{
            color: COLOR_MUTED,
            fontSize: "1.0625rem",
            lineHeight: "1.85",
            marginBottom: "1.25rem",
          }}
        >
          MEOK&apos;s council is a closed, permissioned BFT system. The 43 agents are known
          entities running in MEOK&apos;s infrastructure. Consensus is reached in a single
          round of voting with no mining, no proof-of-work, and no token economics. This
          makes it orders of magnitude more efficient than blockchain consensus while
          providing equivalent tamper resistance for MEOK&apos;s specific use case: governing
          a single user&apos;s AI companion in real time.
        </p>
        <p
          style={{
            color: COLOR_MUTED,
            fontSize: "1.0625rem",
            lineHeight: "1.85",
            marginBottom: "1.25rem",
          }}
        >
          Think of blockchain as a public referendum and MEOK&apos;s council as a judicial
          panel. Both rely on distributed consensus to prevent corruption. The judicial panel
          is not trying to govern the world &mdash; it is trying to govern this specific
          decision for this specific person, quickly, correctly, and verifiably.
        </p>

        {/* ── SECTION 9: Why 43 agents ── */}
        <h2
          style={{
            fontFamily: FONT,
            fontWeight: 900,
            fontSize: "1.5rem",
            color: COLOR_TEXT,
            marginTop: "3.5rem",
            marginBottom: "1rem",
            lineHeight: "1.25",
          }}
        >
          Is 43 agents the right number &mdash; and why not more?
        </h2>
        <p
          style={{
            color: COLOR_MUTED,
            fontSize: "1.0625rem",
            lineHeight: "1.85",
            marginBottom: "1.25rem",
          }}
        >
          The Byzantine fault tolerance formula guarantees correctness as long as f &lt; n/3.
          The practical question for any real system is: how large does n need to be to
          make the attack threshold meaningfully hard, while remaining computationally viable?
        </p>
        <p
          style={{
            color: COLOR_MUTED,
            fontSize: "1.0625rem",
            lineHeight: "1.85",
            marginBottom: "1.25rem",
          }}
        >
          With n = 43, the fault threshold is f &lt; 14.3 &mdash; meaning fewer than 14
          agents can be simultaneously compromised. Simultaneous, independent compromise of
          14 or more software agents in a closed system, each with separate credentials and
          audit logs, is not a realistic attack vector for any known threat actor below
          nation-state capability.
        </p>
        <p
          style={{
            color: COLOR_MUTED,
            fontSize: "1.0625rem",
            lineHeight: "1.85",
            marginBottom: "1.25rem",
          }}
        >
          Increasing n to 99 would raise the threshold to f &lt; 33, providing greater
          theoretical resilience. But it would also increase voting latency, infrastructure
          cost, and operational complexity. MEOK&apos;s research concluded that 43 agents
          provides the optimal balance between fault tolerance and practical system
          performance for companion-layer governance at current scale. The architecture
          supports fractal expansion &mdash; sub-councils with their own consensus rounds
          &mdash; as MEOK grows.
        </p>

        {/* ── SECTION 10: Maternal Covenant connection ── */}
        <h2
          style={{
            fontFamily: FONT,
            fontWeight: 900,
            fontSize: "1.5rem",
            color: COLOR_TEXT,
            marginTop: "3.5rem",
            marginBottom: "1rem",
            lineHeight: "1.25",
          }}
        >
          How does the Byzantine Council connect to the Maternal Covenant?
        </h2>
        <p
          style={{
            color: COLOR_MUTED,
            fontSize: "1.0625rem",
            lineHeight: "1.85",
            marginBottom: "1.25rem",
          }}
        >
          The Maternal Covenant is MEOK&apos;s ethical framework &mdash; a set of inviolable
          commitments about how MEOK will treat users, encoded into every agent&apos;s
          voting criteria. The Byzantine Council enforces those commitments structurally,
          not just aspirationally.
        </p>
        <p
          style={{
            color: COLOR_MUTED,
            fontSize: "1.0625rem",
            lineHeight: "1.85",
            marginBottom: "1.25rem",
          }}
        >
          When an agent evaluates a proposed decision, it checks whether the proposed action
          is consistent with Maternal Covenant principles: does it respect user autonomy?
          Does it serve genuine wellbeing rather than maximising engagement? Does it preserve
          data sovereignty? An agent will vote against any proposed action that conflicts
          with these criteria, regardless of how the proposal was framed or what authority
          issued it.
        </p>
        <p
          style={{
            color: COLOR_MUTED,
            fontSize: "1.0625rem",
            lineHeight: "1.85",
            marginBottom: "1.25rem",
          }}
        >
          This means the Maternal Covenant is not just a document on MEOK&apos;s website.
          It is a set of voting instructions encoded into 43 independent agents, any 15 or
          more of which can veto a council decision. Corporate drift &mdash; the slow erosion
          of user-protective commitments as a company grows &mdash; requires re-engineering
          those voting instructions in more than two-thirds of independent agents. That is
          a structural barrier, not a policy one.
        </p>

        {/* ── Closing thought ── */}
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
              fontSize: "1.0625rem",
              lineHeight: "1.8",
            }}
          >
            The Byzantine Council does not make your companion smarter. It makes your
            companion&apos;s governance unhackable by a single actor &mdash; and that is
            the harder engineering problem. Intelligence without accountability is a
            liability. MEOK builds the accountability layer first, and builds intelligence
            on top of it.
          </p>
        </div>

        {/* ── Share row ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(245,240,232,0.07)",
          }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(245,240,232,0.3)",
            }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fbyzantine-council-explained&text=Byzantine+Council%3A+How+MEOK+makes+AI+governance+unhackable"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              border: "1px solid rgba(245,240,232,0.12)",
              color: "rgba(245,240,232,0.5)",
              textDecoration: "none",
            }}
          >
            &#120143; Post on X
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fbyzantine-council-explained"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
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

        {/* ── CTA ── */}
        <div
          style={{
            borderRadius: "1.25rem",
            padding: "2.5rem",
            marginTop: "3rem",
            marginBottom: "4rem",
            position: "relative",
            overflow: "hidden",
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          {/* CTA glow */}
          <div
            style={{
              position: "absolute",
              top: "0",
              right: "0",
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
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: COLOR_GOLD,
                marginBottom: "0.5rem",
              }}
            >
              Governed AI
            </p>
            <h3
              style={{
                fontFamily: FONT,
                fontWeight: 900,
                fontSize: "1.5rem",
                color: COLOR_TEXT,
                marginBottom: "0.75rem",
                lineHeight: "1.25",
              }}
            >
              Ready for an AI companion that can&apos;t be captured?
            </h3>
            <p
              style={{
                fontSize: "0.9375rem",
                color: "rgba(245,240,232,0.5)",
                lineHeight: "1.7",
                marginBottom: "1.5rem",
                maxWidth: "32rem",
              }}
            >
              Your MEOK companion runs the Byzantine Council on every consequential decision.
              43 agents. Fewer than 14 can be compromised before consensus fails. No single
              actor &mdash; human or AI &mdash; can corrupt it. Hatch yours free in under
              three minutes.
            </p>
            <Link
              href="https://meok.ai/birth"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                paddingLeft: "1.75rem",
                paddingRight: "1.75rem",
                paddingTop: "0.875rem",
                paddingBottom: "0.875rem",
                borderRadius: "9999px",
                fontWeight: 700,
                fontSize: "0.9375rem",
                background: COLOR_GOLD,
                color: COLOR_BG,
                textDecoration: "none",
              }}
            >
              Hatch your MEOK free &rarr;
            </Link>
          </div>
        </div>

        {/* ── Related posts ── */}
        <div>
          <h2
            style={{
              fontFamily: FONT,
              fontWeight: 900,
              color: COLOR_TEXT,
              fontSize: "1.125rem",
              marginBottom: "1.25rem",
            }}
          >
            More from the blog
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                href: "/blog/what-is-byzantine-consensus",
                tag: "Architecture",
                tagColor: COLOR_GOLD,
                tagBg: "rgba(201,168,76,0.12)",
                title: "What Is Byzantine Consensus and Why Does Your AI Need It?",
                read: "8 min read",
              },
              {
                href: "/blog/byzantine-council",
                tag: "Architecture",
                tagColor: "#87ceeb",
                tagBg: "rgba(135,206,235,0.12)",
                title: "What Is the Byzantine Council and Why Does Your AI Need One?",
                read: "5 min read",
              },
              {
                href: "/blog/sovereign-ai-explained",
                tag: "Sovereign AI",
                tagColor: COLOR_GREEN,
                tagBg: "rgba(106,170,100,0.12)",
                title: "What Is Sovereign AI? Why It Matters in 2026",
                read: "6 min read",
              },
              {
                href: "/blog/how-meok-protects-your-data",
                tag: "Privacy",
                tagColor: COLOR_MUTED,
                tagBg: "rgba(160,152,128,0.12)",
                title: "How MEOK Protects Your Data: A Technical Explainer",
                read: "7 min read",
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
                  background: "rgba(245,240,232,0.04)",
                  border: "1px solid rgba(245,240,232,0.08)",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    paddingLeft: "0.625rem",
                    paddingRight: "0.625rem",
                    paddingTop: "0.25rem",
                    paddingBottom: "0.25rem",
                    borderRadius: "9999px",
                    color: post.tagColor,
                    background: post.tagBg,
                    width: "fit-content",
                  }}
                >
                  {post.tag}
                </span>
                <p
                  style={{
                    fontWeight: 700,
                    color: COLOR_TEXT,
                    fontSize: "0.875rem",
                    lineHeight: "1.4",
                    flex: "1",
                  }}
                >
                  {post.title}
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(245,240,232,0.3)",
                  }}
                >
                  {post.read}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
