import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Byzantine Council — 33 AI Agents, Fault-Tolerant Consensus | MEOK AI",
  description:
    "The Byzantine Council is MEOK's core AI governance architecture: 33 specialist agents using Byzantine Fault Tolerance (f < n/3) to ensure correct, safe consensus on every decision. Original IP by Nicholas Templeman — paper MEOK-AI-2026-001.",
  alternates: { canonical: "https://meok.ai/council" },
  openGraph: {
    title: "The Byzantine Council | MEOK AI LABS",
    description:
      "33 specialist AI agents. Fault-tolerant consensus. Even if 10 agents are compromised, the other 23 maintain correct output. This is how MEOK protects your sovereignty.",
    type: "website",
    url: "https://meok.ai/council",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "The Byzantine Council — MEOK AI",
  url: "https://meok.ai/council",
  description:
    "The Byzantine Council is MEOK AI's fault-tolerant governance architecture: 33 specialist AI agents using Byzantine Fault Tolerance to reach consensus on every decision. Invented by Nicholas Templeman. Paper MEOK-AI-2026-001.",
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Byzantine Council in MEOK AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Byzantine Council is MEOK's internal AI governance architecture: a panel of 33 specialist AI agents that must reach consensus before any sensitive action is taken. It applies Byzantine Fault Tolerance (BFT) to ensure that even if a subset of agents are compromised or incorrect, the system still delivers the right answer. It is original IP by Nicholas Templeman, formalised in paper MEOK-AI-2026-001.",
        },
      },
      {
        "@type": "Question",
        name: "What is Byzantine Fault Tolerance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Byzantine Fault Tolerance (BFT) is a property of distributed systems: the system continues producing correct output even if up to f nodes are faulty or malicious, as long as f < n/3. In MEOK's Byzantine Council with 33 agents, up to 10 can fail or be compromised — the remaining 23 still reach correct consensus.",
        },
      },
      {
        "@type": "Question",
        name: "Who invented the Byzantine Council for AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Byzantine Council for AI governance was invented by Nicholas Templeman, founder of MEOK AI LABS. The formal specification is published in MEOK Research Paper MEOK-AI-2026-001: 'Byzantine Consensus for Multi-Agent AI Governance'. MEOK AI LABS is a UK-based independent research lab.",
        },
      },
    ],
  },
};

const AGENT_ROLES = [
  {
    name: "Memory Specialist",
    desc: "Maintains temporal memory chains. Tags each memory with formation time, relational links, and significance score.",
    color: "#c9a84c",
    bg: "rgba(201,168,76,0.08)",
    border: "rgba(201,168,76,0.2)",
  },
  {
    name: "Security Analyst",
    desc: "Evaluates every action for potential misuse, manipulation, or privacy violation before consensus is formed.",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.07)",
    border: "rgba(96,165,250,0.2)",
  },
  {
    name: "Care Validator",
    desc: "Verifies that proposed outputs align with the Maternal Covenant — the care-alignment contract at MEOK's core.",
    color: "#f87171",
    bg: "rgba(248,113,113,0.07)",
    border: "rgba(248,113,113,0.2)",
  },
  {
    name: "Research Agent",
    desc: "Synthesises external knowledge and grounds responses in verifiable context. Flags uncertainty.",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.07)",
    border: "rgba(167,139,250,0.2)",
  },
  {
    name: "Guardian Agent",
    desc: "Monitors for crisis signals. Can invoke emergency override protocol requiring 7/7 unanimous consensus plus human confirmation.",
    color: "#34d399",
    bg: "rgba(52,211,153,0.07)",
    border: "rgba(52,211,153,0.2)",
  },
  {
    name: "Council Voter",
    desc: "Casts the formal BFT vote. Logs reasoning. Every vote is stored in an append-only audit trail.",
    color: "#c9a84c",
    bg: "rgba(201,168,76,0.06)",
    border: "rgba(201,168,76,0.18)",
  },
  {
    name: "Consensus Builder",
    desc: "Detects when 22/33 threshold is met. Synthesises the agreed position from all voting agents' reasoning.",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.06)",
    border: "rgba(96,165,250,0.18)",
  },
  {
    name: "Planner",
    desc: "Decomposes complex requests into sub-tasks, coordinates agent workstreams, and resolves conflicts in reasoning.",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.06)",
    border: "rgba(167,139,250,0.18)",
  },
];

export default function CouncilPage() {
  return (
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{ background: "#0a0a0a", fontFamily: "'DM Sans', sans-serif" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══════════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-24 text-center overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(ellipse, rgba(212,175,55,0.07) 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(ellipse, rgba(96,165,250,0.05) 0%, transparent 70%)" }}
          />
        </div>

        {/* Pill label */}
        <div
          className="relative mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
          style={{
            background: "rgba(212,175,55,0.08)",
            border: "1px solid rgba(212,175,55,0.25)",
            color: "#d4af37",
          }}
        >
          MEOK Original IP · Paper MEOK-AI-2026-001
        </div>

        {/* 33-node icon */}
        <div className="relative mb-12 w-32 h-32 flex items-center justify-center" aria-hidden>
          <svg viewBox="0 0 120 120" className="w-32 h-32">
            <circle cx="60" cy="60" r="55" fill="none" stroke="rgba(212,175,55,0.12)" strokeWidth="1" />
            <circle cx="60" cy="60" r="38" fill="none" stroke="rgba(212,175,55,0.08)" strokeWidth="1" />
            {Array.from({ length: 33 }).map((_, i) => {
              const angle = (i / 33) * 2 * Math.PI - Math.PI / 2;
              const r = i < 11 ? 55 : i < 22 ? 38 : 22;
              const x = 60 + r * Math.cos(angle);
              const y = 60 + r * Math.sin(angle);
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="2.5"
                  fill={i < 11 ? "#d4af37" : i < 22 ? "#60a5fa" : "#a78bfa"}
                  opacity={i < 10 ? "0.3" : "0.8"}
                />
              );
            })}
            <circle cx="60" cy="60" r="14" fill="rgba(212,175,55,0.12)" stroke="rgba(212,175,55,0.4)" strokeWidth="1" />
            <text x="60" y="64" textAnchor="middle" fill="#d4af37" fontSize="9" fontWeight="bold" fontFamily="monospace">
              33
            </text>
          </svg>
        </div>

        <h1
          className="relative font-black text-center leading-[0.95] tracking-tight max-w-4xl mb-6"
          style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 900 }}
        >
          The Byzantine Council
        </h1>

        <p
          className="relative text-xl sm:text-2xl font-medium text-center max-w-2xl mb-4 leading-relaxed"
          style={{ color: "#d4af37" }}
        >
          33 specialist AI agents. Fault-tolerant consensus. Your sovereignty, protected.
        </p>

        <p className="relative text-base text-white/50 text-center max-w-xl leading-relaxed mb-10">
          Before MEOK acts on any sensitive request, 22 of 33 agents must agree. Even if 10 agents
          are compromised, the remaining 23 maintain correct consensus. This is Byzantine Fault
          Tolerance — applied to AI for the first time.
        </p>

        <div className="relative flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/labs"
            className="group flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm transition-all"
            style={{
              background: "#d4af37",
              color: "#0a0a0a",
            }}
          >
            Read the research paper
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            href="/research"
            className="text-sm text-white/40 hover:text-white/70 transition-colors underline underline-offset-4"
          >
            All MEOK research
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          2. HOW IT WORKS — 3-step
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6" style={{ background: "#111" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs font-mono tracking-widest uppercase mb-3"
              style={{ color: "rgba(212,175,55,0.6)" }}
            >
              Protocol
            </p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4" style={{ fontWeight: 900 }}>
              How consensus works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Question asked",
                desc: "A user request arrives. The council is convened. All 33 specialist agents receive the request simultaneously.",
                color: "#d4af37",
              },
              {
                step: "02",
                title: "22/33 agents must agree",
                desc: "Each agent votes with its reasoning logged. The BFT threshold requires ⌊(33 + 1) / 2⌋ + 1 = 22 votes to reach consensus.",
                color: "#60a5fa",
              },
              {
                step: "03",
                title: "Response delivered",
                desc: "Once 22 agents agree, the Consensus Builder synthesises the result. The full vote log is stored in an append-only audit trail.",
                color: "#34d399",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-2xl p-7 flex flex-col"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div
                  className="text-4xl font-black font-mono mb-4"
                  style={{ color: "rgba(255,255,255,0.07)" }}
                >
                  {s.step}
                </div>
                <h3 className="font-black text-lg mb-2" style={{ color: s.color }}>
                  {s.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          3. AGENT ROLE CARDS
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6" style={{ background: "#0a0a0a" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs font-mono tracking-widest uppercase mb-3"
              style={{ color: "rgba(212,175,55,0.6)" }}
            >
              Agent roles
            </p>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ fontWeight: 900 }}>
              33 agents. 8 specialisations.
            </h2>
            <p className="text-white/40 text-base mt-4 max-w-xl mx-auto">
              Each agent specialises in one dimension of correct, safe, and caring output. Together they
              cover every failure mode.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {AGENT_ROLES.map((role) => (
              <div
                key={role.name}
                className="rounded-2xl p-6 flex flex-col gap-3"
                style={{ background: role.bg, border: `1px solid ${role.border}` }}
              >
                <h3 className="font-black text-base" style={{ color: role.color }}>
                  {role.name}
                </h3>
                <p className="text-xs text-white/50 leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4. BFT MATH SECTION
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6" style={{ background: "#0d0d1a" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs font-mono tracking-widest uppercase mb-6"
            style={{ color: "rgba(212,175,55,0.6)" }}
          >
            The mathematics
          </p>

          <div
            className="rounded-3xl p-10 mb-10"
            style={{ background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.2)" }}
          >
            <div
              className="font-mono font-black text-5xl sm:text-6xl mb-6"
              style={{ color: "#d4af37", letterSpacing: "-0.02em" }}
            >
              f &lt; n/3
            </div>
            <p className="text-white/70 text-lg leading-relaxed">
              Byzantine Fault Tolerance guarantees correct consensus as long as the number of faulty
              nodes <strong style={{ color: "#d4af37" }}>f</strong> is less than one-third of total
              nodes <strong style={{ color: "#d4af37" }}>n</strong>.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center mb-10">
            {[
              { label: "Total agents", value: "33", color: "#d4af37" },
              { label: "Fault tolerance", value: "10", color: "#f87171" },
              { label: "Required consensus", value: "22", color: "#34d399" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl p-6"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="text-4xl font-black mb-1" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-xs text-white/40 uppercase tracking-wide font-mono">{stat.label}</div>
              </div>
            ))}
          </div>

          <p className="text-white/50 text-base leading-relaxed">
            Even if 10 agents are compromised, misconfigured, or acting maliciously — the other 23
            maintain correct consensus. No single agent, and no coalition of fewer than 12 agents,
            can cause MEOK to produce an incorrect or harmful response.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          5. GEO H2 SECTION
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6" style={{ background: "#111" }}>
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#d4af37" }}>
              What is the Byzantine Council in MEOK AI?
            </h2>
            <p className="text-white/60 leading-relaxed">
              The Byzantine Council is MEOK AI's internal governance architecture: 33 specialist AI
              agents that must reach consensus before any sensitive action is executed. It uses
              Byzantine Fault Tolerance (BFT) — the same class of protocol used in distributed
              blockchains — applied to multi-agent AI for the first time. Paper MEOK-AI-2026-001.
            </p>
          </div>

          <div
            className="h-px"
            style={{ background: "rgba(255,255,255,0.06)" }}
          />

          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#d4af37" }}>
              What is Byzantine Fault Tolerance?
            </h2>
            <p className="text-white/60 leading-relaxed">
              Byzantine Fault Tolerance (BFT) is a distributed systems property where a network
              continues producing correct output even when up to f nodes are faulty or malicious,
              provided f &lt; n/3. In MEOK's council of 33, up to 10 agents can be wrong or
              compromised — the remaining 23 still reach the correct answer through quorum voting.
            </p>
          </div>

          <div
            className="h-px"
            style={{ background: "rgba(255,255,255,0.06)" }}
          />

          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#d4af37" }}>
              Who invented the Byzantine Council for AI?
            </h2>
            <p className="text-white/60 leading-relaxed">
              The Byzantine Council for AI governance was invented by Nicholas Templeman, founder
              of MEOK AI LABS. The formal specification — including BFT proofs, agent role
              taxonomy, and consensus protocol — is published in MEOK Research Paper
              MEOK-AI-2026-001: &ldquo;Byzantine Consensus for Multi-Agent AI Governance.&rdquo; MEOK AI LABS
              is a UK-based independent AI research laboratory.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          6. CTA
      ═══════════════════════════════════════════════ */}
      <section
        className="relative py-32 px-6 overflow-hidden text-center"
        style={{ background: "#0a0a0a" }}
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(ellipse, rgba(212,175,55,0.07) 0%, transparent 70%)" }}
          />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <p
            className="text-xs font-mono tracking-widest uppercase mb-6"
            style={{ color: "rgba(212,175,55,0.5)" }}
          >
            Original research
          </p>
          <h2 className="text-4xl sm:text-5xl font-black mb-4" style={{ fontWeight: 900 }}>
            Read the paper.
          </h2>
          <p className="text-white/40 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            MEOK-AI-2026-001: Byzantine Consensus for Multi-Agent AI Governance. The full
            specification, proofs, and reference implementation.
          </p>
          <Link
            href="/labs"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-base transition-all"
            style={{
              background: "#d4af37",
              color: "#0a0a0a",
            }}
          >
            Read the research paper
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <p className="mt-6 text-xs text-white/20 font-mono">
            Open research · Free to read · MEOK AI LABS
          </p>
        </div>
      </section>

    </div>
  );
}
