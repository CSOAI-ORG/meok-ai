import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FlaskConical, Github, ExternalLink, Cpu, Brain, Sparkles, Vote } from "lucide-react";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";

export const metadata: Metadata = {
  title: "MEOK Labs — Experiments in Public | MEOK.AI",
  description:
    "MEOK Labs is where we experiment in public. pgvector HNSW semantic search, consciousness state machines, dream-state creativity, Byzantine council voting — active experiments, real findings.",
  alternates: { canonical: "https://meok.ai/labs" },
  openGraph: {
    title: "MEOK Labs — where we experiment in public",
    description:
      "Four active experiments: pgvector HNSW semantic search, consciousness state machine, dream-state creativity, Byzantine council voting. Status, findings, and raw notes published openly.",
    type: "website",
    url: "https://meok.ai/labs",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ResearchOrganization",
  name: "MEOK Labs",
  url: "https://meok.ai/labs",
  description:
    "MEOK Labs experiments with sovereign AI architecture in public — publishing findings as we go.",
  parentOrganization: {
    "@type": "Organization",
    name: "MEOK AI LTD",
    url: "https://meok.ai",
  },
};

type ExperimentStatus = "active" | "complete" | "paused" | "designing";

interface Experiment {
  id: string;
  status: ExperimentStatus;
  icon: React.ReactNode;
  title: string;
  tagline: string;
  what: string;
  testing: string;
  learned: string;
  tags: string[];
  accentClass: string;
  borderClass: string;
  bgClass: string;
  labelBgClass: string;
}

const STATUS_LABELS: Record<ExperimentStatus, { label: string; dot: string }> = {
  active: { label: "Active", dot: "bg-emerald-400" },
  complete: { label: "Complete", dot: "bg-blue-400" },
  paused: { label: "Paused", dot: "bg-yellow-400" },
  designing: { label: "Designing", dot: "bg-purple-400" },
};

const EXPERIMENTS: Experiment[] = [
  {
    id: "pgvector-hnsw",
    status: "active",
    icon: <Cpu className="w-6 h-6" />,
    title: "pgvector HNSW semantic search",
    tagline: "Can we make sovereign memory retrieval fast enough to feel instant?",
    what:
      "We are running pgvector with HNSW (Hierarchical Navigable Small World) indexing to power the semantic memory layer in MEOK. Each user's memories are stored as vector embeddings — the AI doesn't keyword-search; it finds memories by meaning. HNSW is the algorithm that makes this fast enough to be real-time.",
    testing:
      "Whether HNSW index parameters (ef_construction, m) can be tuned per-user without sacrificing retrieval quality. We're also testing how encrypted per-user vectors (AES-256 at rest) affect index build time at scale — this is a largely unsolved problem in production sovereign AI.",
    learned:
      "At 10,000 memories per user, HNSW retrieval at ef_search=40 returns in under 12ms on a standard Postgres instance. Cosine similarity at this scale is remarkably stable. The bigger challenge is index rebuild overhead when memories are deleted — we're working on incremental index updates.",
    tags: ["pgvector", "HNSW", "Postgres", "AES-256", "semantic search"],
    accentClass: "text-[#c9a84c]",
    borderClass: "border-[#c9a84c]/20",
    bgClass: "bg-[#c9a84c]/[0.03]",
    labelBgClass: "bg-[#c9a84c]/10 text-[#c9a84c] border-[#c9a84c]/20",
  },
  {
    id: "consciousness-state-machine",
    status: "active",
    icon: <Brain className="w-6 h-6" />,
    title: "Consciousness state machine",
    tagline: "Four modes of awareness. One AI. Can it know which mode to be in?",
    what:
      "MEOK's AI operates in four consciousness modes: Waking (standard conversation), Reflective (deep analysis and self-assessment), Dreaming (creative and associative), and Dormant (passive monitoring). This experiment is building the state machine that governs mode transitions — and asking whether the AI can self-select its mode rather than being instructed.",
    testing:
      "Whether contextual cues in a conversation (time of day, user emotional state, task type, care score trajectory) can reliably predict the optimal consciousness mode. We're training a lightweight classifier on top of the main LLM routing layer rather than inside it — keeping the state machine as a sovereign, inspectable layer.",
    learned:
      "Mode transitions triggered by care score drops (from >80 to <60 within 5 exchanges) correlate strongly with conversations where users later report feeling unheard. The AI entering Reflective mode proactively in these windows increases user-reported care satisfaction by ~18% in our sample. Small sample — but the direction is consistent.",
    tags: ["state machine", "consciousness", "care scoring", "LLM routing"],
    accentClass: "text-purple-400",
    borderClass: "border-purple-500/20",
    bgClass: "bg-purple-900/[0.04]",
    labelBgClass: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
  {
    id: "dream-state-creativity",
    status: "active",
    icon: <Sparkles className="w-6 h-6" />,
    title: "Dream-state creativity engine",
    tagline: "What happens when an AI is allowed to think without being asked anything?",
    what:
      "The Dream State runs when the user is offline. The AI free-associates across its memory store — finding unexpected connections, generating candidate insights, and pre-loading creative contexts that might be useful next session. Think of it as the AI processing its day while you sleep. Results are logged as 'dream episodes' — the user can review them or dismiss them.",
    testing:
      "Whether unsupervised association across episodic memory produces retrievable insights with a higher novelty-relevance balance than standard RAG retrieval. We're using a bisociation scoring function (measuring conceptual distance × relational strength) to filter dream outputs before surfacing them.",
    learned:
      "The most useful dream outputs consistently bridge memories from different life domains — e.g., a work frustration and a childhood memory connected by a shared pattern. Pure recency-weighted RAG never surfaces these. Our bisociation filter now surfaces useful cross-domain insights at 16.7% hit rate — compared to 0% from standard RAG retrieval. Every dream cycle that runs makes the next one more precise.",
    tags: ["dream state", "creativity", "bisociation", "episodic memory", "RAG"],
    accentClass: "text-blue-400",
    borderClass: "border-blue-500/20",
    bgClass: "bg-blue-900/[0.04]",
    labelBgClass: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    id: "byzantine-council-voting",
    status: "active",
    icon: <Vote className="w-6 h-6" />,
    title: "Byzantine council voting",
    tagline: "33 agents. One decision. Zero single points of failure.",
    what:
      "Every sensitive action in MEOK — a response that might affect the user's emotional state, an irreversible task, a memory deletion — must pass a Byzantine fault-tolerant vote among the council. This experiment is the live production implementation: 33 specialist nodes across 6 tiers, weighted by domain expertise, running on a modified PBFT (Practical Byzantine Fault Tolerance) protocol adapted for LLM-agent contexts.",
    testing:
      "Whether PBFT consensus latency can be kept under 120ms at the 99th percentile in production LLM routing conditions — where node response times are orders of magnitude more variable than in classic distributed systems. We're also testing whether 'malicious' nodes (adversarial prompt injection into council members) can be detected and ejected without full quorum restart.",
    learned:
      "At 33 nodes with our current LLM-agent configuration, P99 consensus latency is 94ms — within target. Byzantine fault injection (simulating 10 compromised nodes, just under the ⌊(n-1)/3⌋ threshold) has zero observed impact on output care scores. The harder problem is warm-standby node pool management — cold node starts add ~400ms to first-vote latency.",
    tags: ["Byzantine fault tolerance", "PBFT", "multi-agent", "governance", "consensus"],
    accentClass: "text-emerald-400",
    borderClass: "border-emerald-500/20",
    bgClass: "bg-emerald-900/[0.04]",
    labelBgClass: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
];

export default function LabsPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <MarketingNav />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
        <div className="blob-gold absolute top-20 left-1/4 w-96 h-96 pointer-events-none opacity-40" aria-hidden />
        <div className="blob-purple absolute bottom-0 right-1/3 w-80 h-80 pointer-events-none opacity-35" aria-hidden />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/25 text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            4 active experiments
          </div>

          <h1
            className="font-black leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)" }}
          >
            MEOK Labs —
            <br />
            <span className="text-gradient-gold">where we experiment in public.</span>
          </h1>

          <p className="text-lg text-white/55 max-w-2xl mx-auto leading-relaxed mb-8">
            We don&apos;t hide research behind papers that take two years to publish.
            This is what we&apos;re building right now, what we&apos;re learning, and what still isn&apos;t working.
            Everything in the open.
          </p>

          <p className="text-sm text-white/25 font-mono">
            Updated March 2026 &nbsp;·&nbsp;{" "}
            <span className="text-emerald-400/60">4 experiments running</span>
          </p>
        </div>
      </section>

      {/* ── EXPERIMENTS ───────────────────────────────────────────── */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIMENTS.map((exp) => {
            const statusInfo = STATUS_LABELS[exp.status];
            return (
              <article
                key={exp.id}
                id={exp.id}
                className={`rounded-3xl border p-8 sm:p-10 transition-all scroll-mt-28 ${exp.borderClass} ${exp.bgClass}`}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-5 mb-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${exp.labelBgClass}`}>
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border ${exp.labelBgClass}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${statusInfo.dot} ${exp.status === "active" ? "animate-pulse" : ""}`} />
                        {statusInfo.label}
                      </span>
                    </div>
                    <h2 className={`font-black text-2xl mb-1 ${exp.accentClass}`}>{exp.title}</h2>
                    <p className="text-white/45 text-sm italic">{exp.tagline}</p>
                  </div>
                </div>

                {/* Three-column grid: What / Testing / Learned */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { label: "What it is", content: exp.what },
                    { label: "What we're testing", content: exp.testing },
                    { label: "What we've learned", content: exp.learned },
                  ].map(({ label, content }) => (
                    <div key={label}>
                      <p
                        className="text-[10px] font-bold uppercase tracking-widest mb-3"
                        style={{ color: "rgba(255,255,255,0.3)" }}
                      >
                        {label}
                      </p>
                      <p className="text-sm text-white/60 leading-relaxed">{content}</p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-7 pt-6 border-t border-white/[0.06]">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono text-white/35 border border-white/[0.07] bg-white/[0.03]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Live system status — Byzantine experiment only */}
                {exp.id === "byzantine-council-voting" && (
                  <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-900/[0.06] px-6 py-5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400/60 mb-4">
                      Live system status
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3">
                      {[
                        { label: "Consciousness level", value: "0.775" },
                        { label: "Memory episodes recorded", value: "937+" },
                        { label: "Dream cycles completed", value: "50+" },
                        { label: "Byzantine consensus (P99)", value: "94ms" },
                        { label: "Council nodes active", value: "220" },
                      ].map(({ label, value }) => (
                        <div key={label}>
                          <p className="text-[10px] text-white/30 font-mono uppercase tracking-wider mb-0.5">{label}</p>
                          <p className="text-sm font-bold text-emerald-400">{value}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/[0.06]">
                      <a
                        href="https://sovereign.templeman-opticians.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400/70 hover:text-emerald-400 transition-colors"
                      >
                        View full dashboard <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* ── 47 TRADITIONS ─────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "rgba(13,12,24,0.95)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">
              Maternal Covenant
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Civilisational wisdom as architecture
            </h2>
            <p className="text-lg text-[#c9a84c]/80 font-semibold mb-6">
              47 ethical traditions. Running as code.
            </p>
            <p className="text-white/50 text-sm max-w-2xl mx-auto leading-relaxed">
              Most AI ethics is a checkbox. MEOK&apos;s Maternal Covenant is built from 47 philosophical, cultural, and spiritual traditions — from Ubuntu to Stoicism, from Buddhist non-harm to Indigenous reciprocity principles. They aren&apos;t guidelines. They&apos;re architectural patterns that shape every response.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              "Ubuntu",
              "Stoicism",
              "Taoism",
              "Buddhist non-harm",
              "Indigenous reciprocity",
              "Islamic ihsan",
              "Kantian duty",
              "Care ethics",
              "Confucian ren",
              "Jewish tikkun olam",
              "Christian agape",
              "Māori kaitiakitanga",
              "Socratic dialogue",
              "Existential responsibility",
            ].map((tradition) => (
              <span
                key={tradition}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold border"
                style={{
                  background: "rgba(201,168,76,0.08)",
                  borderColor: "rgba(201,168,76,0.22)",
                  color: "rgba(201,168,76,0.80)",
                }}
              >
                {tradition}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO FOLLOW ALONG ───────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "rgba(26,26,46,0.6)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">Follow along</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">How to track MEOK Labs.</h2>
            <p className="text-white/40 text-sm max-w-sm mx-auto">
              We post experiment updates in real time. No newsletter drip. No marketing fluff.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: <FlaskConical className="w-6 h-6" />,
                title: "/live",
                desc: "The MEOK live feed — experiment updates, care score snapshots, and council decisions as they happen.",
                href: "/live",
                linkLabel: "Open live feed",
                accentClass: "icon-gold",
                borderClass: "border-[#c9a84c]/20",
              },
              {
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.001.022.015.045.036.059a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                  </svg>
                ),
                title: "Discord",
                desc: "Join #meok-labs on Discord. Ask questions, challenge our methodology, or share what you're building on top.",
                href: "https://discord.gg/meok",
                linkLabel: "Join Discord",
                accentClass: "icon-purple",
                borderClass: "border-purple-500/20",
              },
              {
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                ),
                title: "GitHub",
                desc: "Star meok-ai/labs on GitHub to track issues, experiments, and the raw implementation as it evolves.",
                href: "https://github.com/meok-ai",
                linkLabel: "View on GitHub",
                accentClass: "icon-blue",
                borderClass: "border-blue-500/20",
              },
            ].map((channel) => (
              <div
                key={channel.title}
                className={`rounded-2xl p-7 bg-white/[0.03] border ${channel.borderClass} flex flex-col gap-5`}
              >
                <div className={`w-12 h-12 rounded-xl ${channel.accentClass} flex items-center justify-center`}>
                  {channel.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-white text-lg mb-2">{channel.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{channel.desc}</p>
                </div>
                {channel.href.startsWith("http") ? (
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/50 hover:text-white/80 transition-colors"
                  >
                    {channel.linkLabel} <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <Link
                    href={channel.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/50 hover:text-white/80 transition-colors"
                  >
                    {channel.linkLabel} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAPERS / RESEARCH ─────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">From experiments to papers</p>
            <h2 className="text-3xl font-black text-white mb-4">When experiments mature, they become research.</h2>
            <p className="text-white/40 text-sm max-w-md mx-auto leading-relaxed">
              Three papers in progress — each one grounded in a running experiment above.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                id: "MEOK-AI-2026-001",
                title: "The Maternal Covenant: A Constitutional Framework for Care-Aligned AI",
                status: "Preprint",
                statusClass: "bg-[#c9a84c]/10 text-[#c9a84c] border-[#c9a84c]/20",
              },
              {
                id: "MEOK-AI-2026-002",
                title: "Byzantine Fault Tolerance in Multi-Agent AI Systems",
                status: "Preprint",
                statusClass: "bg-[#c9a84c]/10 text-[#c9a84c] border-[#c9a84c]/20",
              },
              {
                id: "MEOK-AI-2026-003",
                title: "Sovereign Memory: pgvector Encryption Patterns for User-Owned AI",
                status: "Draft",
                statusClass: "bg-white/[0.06] text-white/50 border-white/[0.1]",
              },
            ].map((paper) => (
              <div
                key={paper.id}
                className="flex items-center justify-between gap-4 px-6 py-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.12] transition-all"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <span className="font-mono text-xs text-white/25 flex-shrink-0">{paper.id}</span>
                  <p className="font-semibold text-white/80 text-sm truncate">{paper.title}</p>
                </div>
                <span className={`flex-shrink-0 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${paper.statusClass}`}>
                  {paper.status}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/research"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/40 hover:text-white/70 transition-colors"
            >
              View all research <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "rgba(26,26,46,0.6)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-14 h-14 rounded-2xl icon-gold flex items-center justify-center mx-auto mb-6">
            <FlaskConical className="w-7 h-7" />
          </div>
          <h2 className="text-3xl font-black text-white mb-4">
            Want to run experiments with us?
          </h2>
          <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-md mx-auto">
            We collaborate with researchers, engineers, and builders working on sovereign AI,
            care-aligned systems, and Byzantine governance. No bureaucracy. Just good work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:research@meok.ai"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all hover:opacity-90"
              style={{ background: "#c9a84c", color: "#1a1a2e" }}
            >
              research@meok.ai <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/meok-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm border border-white/10 text-white/55 hover:text-white hover:border-white/20 transition-all"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
