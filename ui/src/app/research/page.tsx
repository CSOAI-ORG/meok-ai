import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, ExternalLink, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "The Science Behind Sovereign AI. — Research | MEOK.AI",
  description:
    "MEOK publishes open research on care-aligned AI, Byzantine fault-tolerant governance, and temporal memory chains. Read our papers, frameworks, and writing.",
  alternates: { canonical: "https://meok.ai/research" },
  openGraph: {
    title: "The Science Behind Sovereign AI. | MEOK.AI",
    description:
      "Open research on care-aligned AI, Byzantine governance, and sovereign memory. Published freely — we're building the field, not protecting a moat.",
    type: "website",
    url: "https://meok.ai/research",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ResearchOrganization",
  name: "MEOK Research",
  url: "https://meok.ai/research",
  description:
    "MEOK publishes open research on care-aligned AI systems, Byzantine fault-tolerant governance for multi-agent architectures, and cryptographic patterns for user-owned memory.",
  parentOrganization: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  researchArea: [
    "Care-aligned AI",
    "Byzantine fault-tolerant governance",
    "Sovereign memory architecture",
    "Temporal memory chains",
  ],
  knowsAbout: [
    {
      "@type": "Thing",
      name: "Care-aligned AI",
      description:
        "An alignment approach that makes care non-negotiable — not a setting the user can turn off, but a constitutional requirement baked into AI architecture.",
    },
    {
      "@type": "Thing",
      name: "Byzantine fault-tolerant consensus in AI governance",
      description:
        "Applying BFT to multi-agent AI governance: a council of 33 agents must reach consensus before executing sensitive actions. No single agent can cause harm unilaterally.",
    },
    {
      "@type": "Thing",
      name: "Temporal memory chains",
      description:
        "AI memory architecture that preserves not just facts but their temporal and emotional context, enabling the AI to reason about how its understanding of you has evolved.",
    },
  ],
};

const RESEARCH_AREAS = [
  {
    icon: "❤️",
    number: "01",
    title: "Maternal Covenant ethics framework",
    subtitle: "Care-aligned AI that cannot be turned off.",
    desc: "Constitutional alignment frameworks that make care non-negotiable. The Maternal Covenant formalises the ethical contract between an AI and its user: what the AI owes you (honesty, loyalty, care), what you owe your AI (respect, feedback, sovereignty). Care is not a setting — it is an architectural constraint.",
    links: [
      { label: "Read the Maternal Covenant", href: "/maternal-covenant" },
      { label: "Consciousness state machine (Labs)", href: "/labs#consciousness-state-machine" },
    ],
    accentClass: "text-rose-400",
    borderClass: "border-rose-500/20",
    bgClass: "bg-rose-900/[0.05]",
  },
  {
    icon: "⚡",
    number: "02",
    title: "Byzantine fault-tolerant consensus",
    subtitle: "Multi-agent governance where no single agent can cause harm.",
    desc: "Applying Byzantine fault tolerance to AI governance: a council of 33 agents must reach consensus before executing sensitive actions. Task priority arbitration requires 5/7 agreement. Emergency overrides require 7/7 unanimous consensus plus human confirmation. Full reasoning logged and appealable.",
    links: [{ label: "Open source protocol", href: "/open-source" }],
    accentClass: "text-[#c9a84c]",
    borderClass: "border-[#c9a84c]/20",
    bgClass: "bg-[#c9a84c]/[0.03]",
  },
  {
    icon: "🧠",
    number: "03",
    title: "Temporal memory chains",
    subtitle: "AI memory that preserves when things happened and why they matter.",
    desc: "Memory architecture that preserves not just facts but their temporal and emotional context. Each memory is tagged with formation time, relational links, and significance score. The AI can reason about how its understanding of you has changed — and identify the moment of change.",
    links: [{ label: "Sovereign Display", href: "/os/sovereign-display" }],
    accentClass: "text-blue-400",
    borderClass: "border-blue-500/20",
    bgClass: "bg-blue-900/[0.05]",
  },
];

const PAPERS = [
  {
    id: "MEOK-AI-2026-001",
    title: "Byzantine Consensus for Multi-Agent AI Governance",
    authors: "Nicholas Templeman · MEOK AI LABS · 2026",
    abstract:
      "We formalise a Byzantine fault-tolerant consensus protocol for multi-agent AI systems, with proofs that no sub-threshold coalition of agents can execute harmful actions. Applied reference implementation: the MEOK Byzantine Council — 33 specialist agents, f < n/3 fault tolerance, append-only vote log.",
    status: "Working paper",
    statusClass: "text-[#c9a84c] border-[#c9a84c]/30",
    accentClass: "text-[#c9a84c]",
  },
  {
    id: "MEOK-AI-2026-002",
    title: "The Maternal Covenant: A Care-Alignment Framework for Sovereign AI",
    authors: "Nicholas Templeman · MEOK AI LABS · 2026",
    abstract:
      "We propose care-alignment as a distinct paradigm from RLHF and constitutional AI. The Maternal Covenant formalises the ethical contract between an AI and its user: what the AI owes the user (honesty, loyalty, care), and what makes care non-negotiable as an architectural constraint rather than a setting.",
    status: "Pre-print",
    statusClass: "text-rose-400 border-rose-500/30",
    accentClass: "text-rose-400",
  },
  {
    id: "MEOK-AI-2026-003",
    title: "Temporal Memory Chains: Preserving the When and Why of AI Memory",
    authors: "Nicholas Templeman · MEOK AI LABS · 2026",
    abstract:
      "Current AI memory systems discard temporal metadata, flattening all memories into a single atemporal store. We propose temporal memory chains: a linked-list architecture that preserves formation time, relational context, and significance trajectories — enabling AI to reason about how its understanding of a user has evolved.",
    status: "In preparation",
    statusClass: "text-purple-400 border-purple-500/30",
    accentClass: "text-purple-400",
  },
  {
    id: "MEOK-AI-2026-004",
    title: "Sovereign Memory Architecture: Cryptographic Patterns for User-Owned AI Memory",
    authors: "Nicholas Templeman · MEOK AI LABS · 2026",
    abstract:
      "We describe a cryptographic architecture for AI memory that ensures only the user can read, modify, or delete their AI's memory store. Server-side, all memory is encrypted under user-held keys. The AI processes memory through a secure enclave. No operator — including MEOK — can access user memory.",
    status: "In preparation",
    statusClass: "text-blue-400 border-blue-500/30",
    accentClass: "text-blue-400",
  },
];

const FAQS = [
  {
    q: "What is care-aligned AI?",
    a: "Care-aligned AI is an alignment approach that makes care non-negotiable — not a setting the user can turn off, but a constitutional requirement baked into the AI's architecture. The Maternal Covenant is MEOK's implementation: a formal, verifiable contract between an AI and its user.",
  },
  {
    q: "What is Byzantine fault-tolerant consensus in AI governance?",
    a: "BFT is a property of distributed systems where the system continues functioning even if some nodes fail or act maliciously. MEOK applies it to multi-agent AI governance: 33 agents must reach consensus before executing sensitive actions. No single agent can cause harm unilaterally.",
  },
  {
    q: "What are temporal memory chains?",
    a: "Temporal memory chains are MEOK's approach to AI memory that preserves the timeline and emotional weight of memories — not just facts. Each memory is tagged with when it was formed, how it relates to others, and its significance score.",
  },
  {
    q: "How do I collaborate with MEOK Research?",
    a: "We actively seek research collaborators in AI alignment, governance, and privacy architecture. Email research@meok.ai with a brief description of your work and how it relates to sovereign AI.",
  },
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── HERO ───────────────────────────────────────── */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 pt-28 pb-20 text-center overflow-hidden">
        {/* Academic dark aesthetic */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[#1a1a2e]/80 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-[#c9a84c]/[0.04] blur-3xl" />
          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(rgba(245,240,232,0.8) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.07] border border-white/[0.10] text-white/50 text-xs font-semibold mb-8 uppercase tracking-widest">
            <BookOpen className="w-3 h-3 text-[#c9a84c]" />
            MEOK Research
          </div>

          <h1
            className="font-black leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)" }}
          >
            The science behind
            <br />
            <span className="text-gradient-gold">sovereign AI.</span>
          </h1>

          <p className="text-xl text-white/55 max-w-2xl mx-auto mb-8 leading-relaxed">
            We publish open research on care-aligned AI systems, Byzantine fault-tolerant
            governance for multi-agent architectures, and cryptographic patterns for
            user-owned memory. We&apos;re building the field, not protecting a moat.
          </p>

          <blockquote className="max-w-2xl mx-auto mb-10 px-6 py-5 rounded-2xl border border-white/[0.08] bg-white/[0.02] text-left">
            <p className="text-sm text-white/50 leading-relaxed italic mb-3">
              &ldquo;I started writing these papers because I couldn&apos;t find the literature I needed.
              There is no playbook for care-aligned AI governance, no reference implementation
              for sovereign memory, no formal treatment of Byzantine consensus in LLM-agent systems.
              We are writing it as we build it — and publishing it freely so others don&apos;t have to start from scratch.&rdquo;
            </p>
            <p className="text-xs font-semibold text-[#c9a84c]">— Nicholas Templeman, Founder</p>
          </blockquote>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:research@meok.ai"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-sm transition-all hover:shadow-[0_0_30px_rgba(201,168,76,0.20)]"
              style={{ backgroundColor: "#c9a84c", color: "#0d0c18" }}
            >
              research@meok.ai <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/open-source"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm text-white/50 border border-white/10 hover:border-white/20 hover:text-white/80 transition-all"
            >
              Open source <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 3 RESEARCH AREAS ───────────────────────────── */}
      <section className="bg-[#1a1a2e] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">
              Research areas
            </p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Three areas. One mission.
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Every research thread points toward the same goal: AI that genuinely belongs to
              its user.
            </p>
          </div>

          <div className="space-y-6">
            {RESEARCH_AREAS.map((area) => (
              <div
                key={area.title}
                className={`rounded-2xl p-8 md:p-10 border ${area.borderClass} ${area.bgClass} hover:scale-[1.005] transition-all`}
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex items-start gap-4 flex-shrink-0">
                    <span className="font-mono font-black text-3xl text-white/10">
                      {area.number}
                    </span>
                    <span className="text-4xl">{area.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-black text-2xl mb-1 ${area.accentClass}`}>
                      {area.title}
                    </h3>
                    <p className="text-white/40 text-sm font-medium italic mb-4">
                      {area.subtitle}
                    </p>
                    <p className="text-white/60 leading-relaxed mb-5">{area.desc}</p>
                    <div className="flex flex-wrap gap-3">
                      {area.links.map((lnk) => (
                        <Link
                          key={lnk.href}
                          href={lnk.href}
                          className={`inline-flex items-center gap-1.5 text-sm font-semibold ${area.accentClass} hover:opacity-80 transition-opacity`}
                        >
                          {lnk.label} <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PAPERS AND WRITING ─────────────────────────── */}
      <section className="bg-[#0d0c18] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">
              Publications
            </p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Our papers and writing.
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              All research published freely. We believe open access is a prerequisite for
              trustworthy AI.
            </p>
          </div>

          <div className="space-y-5">
            {PAPERS.map((paper) => (
              <div
                key={paper.title}
                className="rounded-2xl p-8 bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.12] transition-all"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-widest border rounded px-2 py-0.5 ${paper.statusClass}`}
                      >
                        {paper.status}
                      </span>
                      {"id" in paper && (
                        <span className="text-[10px] font-mono text-white/25 border border-white/10 rounded px-2 py-0.5">
                          {(paper as { id: string } & typeof paper).id}
                        </span>
                      )}
                    </div>
                    <h3 className={`font-black text-xl mb-2 ${paper.accentClass}`}>
                      {paper.title}
                    </h3>
                    <p className="text-white/35 text-xs font-mono mb-4">{paper.authors}</p>
                    <p className="text-white/55 text-sm leading-relaxed">{paper.abstract}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.07] text-white/30 text-xs font-mono">
                      Coming soon
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LINKS TO RELATED PAGES ─────────────────────── */}
      <section className="bg-[#1a1a2e] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">
              Explore further
            </p>
            <h2 className="text-3xl font-black">Dig deeper.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Maternal Covenant",
                body: "The care-alignment contract between you and your AI. Read the full specification.",
                href: "/maternal-covenant",
                cta: "Read the Maternal Covenant",
                accentClass: "text-rose-400",
                borderClass: "border-rose-500/20",
              },
              {
                title: "MEOK Labs",
                body: "Four live experiments: pgvector HNSW search, consciousness state machine, dream-state creativity, Byzantine council voting.",
                href: "/labs",
                cta: "Explore MEOK Labs",
                accentClass: "text-purple-400",
                borderClass: "border-purple-500/20",
              },
              {
                title: "Open source",
                body: "Read and run the Byzantine Council, memory schemas, and character engine yourself.",
                href: "/open-source",
                cta: "Browse the open source repos",
                accentClass: "text-emerald-400",
                borderClass: "border-emerald-500/20",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className={`rounded-2xl p-7 bg-white/[0.03] border ${card.borderClass} hover:bg-white/[0.05] transition-all group block`}
                aria-label={card.cta}
              >
                <h3 className={`font-black text-lg mb-3 ${card.accentClass}`}>{card.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{card.body}</p>
                <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${card.accentClass} group-hover:gap-2 transition-all`}>
                  {card.cta} <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ────────────────────────────────────────── */}
      <section className="bg-[#0d0c18] py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black">Research questions.</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none gap-4">
                  <span className="font-semibold text-white/85 text-sm">{faq.q}</span>
                  <ChevronDown className="w-4 h-4 text-white/30 flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GEO H2 ─────────────────────────────────────── */}
      <section className="bg-[#0d0c18] py-20 px-6 border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto space-y-10">
          <div>
            <h2 className="text-2xl font-black text-[#c9a84c] mb-4">
              What research does MEOK AI LABS publish?
            </h2>
            <p className="text-white/60 leading-relaxed">
              MEOK AI LABS publishes open research in four areas: Byzantine fault-tolerant consensus
              for multi-agent AI governance (MEOK-AI-2026-001), the Maternal Covenant care-alignment
              framework (MEOK-AI-2026-002), temporal memory chains for AI memory with preserved
              context (MEOK-AI-2026-003), and sovereign memory architecture using cryptographic
              user-owned memory stores (MEOK-AI-2026-004). All papers are authored by Nicholas
              Templeman and published freely. MEOK AI LABS is a UK-based independent research lab.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────── */}
      <section className="bg-[#1a1a2e] py-24 px-6">
        <div className="relative max-w-3xl mx-auto text-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#c9a84c]/[0.05] blur-3xl" />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Collaborate with us.
            </h2>
            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
              We are actively seeking research collaborators in AI alignment, governance,
              and privacy architecture.
            </p>
            <a
              href="mailto:research@meok.ai"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-black text-base transition-all hover:shadow-[0_0_30px_rgba(201,168,76,0.20)]"
              style={{ backgroundColor: "#c9a84c", color: "#0d0c18" }}
            >
              research@meok.ai <ArrowRight className="w-5 h-5" />
            </a>
            <p className="mt-5 text-xs text-white/25 font-mono">
              Open research · Free to read · Free to use
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
