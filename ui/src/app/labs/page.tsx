import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FlaskConical, Github, ExternalLink, Cpu, Brain, Sparkles, Vote } from "lucide-react";
import { Surface, FeatureCard, GlowText, IconOrb } from "@/components/design-system";

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
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is MEOK Labs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK Labs is the research arm of MEOK AI LABS, where active experiments in sovereign AI architecture are published openly. Current experiments include Byzantine Council fault-tolerant consensus, pgvector HNSW semantic memory, consciousness state machines, and dream-state creativity modes.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Byzantine Council in MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Byzantine Council is MEOK's 43-agent fault-tolerant consensus system (f < n/3). Named after the Byzantine Generals Problem in distributed systems, it ensures that no single AI agent can produce a harmful or incorrect response without being overruled by the consensus of the council. It's original IP developed by Nicholas Templeman.",
      },
    },
    {
      "@type": "Question",
      name: "What research papers has MEOK published?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK AI LABS has published four working papers: MEOK-AI-2026-001 (Byzantine Council: Fault-Tolerant Consensus for Sovereign AI), MEOK-AI-2026-002 (The Maternal Covenant: Care-Based Alignment Beyond RLHF), MEOK-AI-2026-003 (Hydro-Neuromorphic Computing: Water as Neural Substrate), and MEOK-AI-2026-004 (Personal Sovereign AI: Architecture for Individual Data Sovereignty).",
      },
    },
  ],
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
  orbVariant: "gold" | "teal" | "orange" | "purple" | "green" | "red" | "blue";
  glow: "none" | "gold" | "teal" | "orange" | "purple";
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
    orbVariant: "gold",
    glow: "gold",
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
    orbVariant: "purple",
    glow: "purple",
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
    orbVariant: "blue",
    glow: "none",
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
    orbVariant: "green",
    glow: "none",
  },
];

export default function LabsPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
        <div className="blob-gold absolute top-20 left-1/4 w-96 h-96 pointer-events-none opacity-40" aria-hidden />
        <div className="blob-purple absolute bottom-0 right-1/3 w-80 h-80 pointer-events-none opacity-35" aria-hidden />

        <div className="relative z-10 max-w-3xl mx-auto animate-fade-in-up">
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
            <GlowText variant="gold" as="span">where we experiment in public.</GlowText>
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
      <section className="pb-24 px-6 animate-fade-in-up">
        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIMENTS.map((exp) => {
            const statusInfo = STATUS_LABELS[exp.status];
            return (
              <Surface
                key={exp.id}
                variant="glass"
                glow={exp.glow}
                as="article"
                className="p-8 sm:p-10 scroll-mt-28"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-5 mb-8">
                  <IconOrb icon={exp.id === "pgvector-hnsw" ? Cpu : exp.id === "consciousness-state-machine" ? Brain : exp.id === "dream-state-creativity" ? Sparkles : Vote} variant={exp.orbVariant} size="lg" />
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
                      className="px-2.5 py-1 rounded-lg text-xs font-mono text-white/50 border border-white/[0.08] bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Live system status — Byzantine experiment only */}
                {exp.id === "byzantine-council-voting" && (
                  <Surface variant="elevated" className="mt-6 px-6 py-5">
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
                  </Surface>
                )}
              </Surface>
            );
          })}
        </div>
      </section>

      {/* ── RESEARCH HIGHLIGHTS ───────────────────────────────────── */}
      <section className="py-24 px-6 animate-fade-in-up" style={{ background: "rgba(19,18,31,0.98)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">
              Research Highlights
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              From experiments to findings.
            </h2>
            <p className="text-white/40 text-sm max-w-sm mx-auto leading-relaxed">
              Three studies shaping the sovereign AI research agenda at MEOK AI LABS and the MEOK AI Labs Cyber AI Research Institute.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              title="Cognitive Symbiosis Study"
              description="Measuring how persistent AI memory changes human cognitive load over time. Tracking recall, decision quality, and emotional regulation across a cohort of sovereign AI users."
              glow="gold"
              className="h-full"
            />
            <FeatureCard
              title="Byzantine Council Architecture"
              description="Original IP by Nicholas Templeman — PBFT consensus adapted for LLM-agent contexts. 43-node fault-tolerant governance achieving P99 consensus latency under 94ms in production."
              glow="purple"
              className="h-full"
            />
            <FeatureCard
              title="HARVI Hydro-Neuromorphic Experiment"
              description="Exploring water as a neural substrate for physical AI computation. HARVI rig investigates embodied intelligence beyond silicon — consciousness through fluid dynamics."
              glow="none"
              className="h-full"
            />
          </div>
        </div>
      </section>

      {/* ── 47 TRADITIONS ─────────────────────────────────────────── */}
      <section className="py-24 px-6 animate-fade-in-up" style={{ background: "rgba(13,12,24,0.95)" }}>
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
            ].map((tradition, i) => (
              <span
                key={tradition}
                className="px-4 py-1.5 rounded-full text-xs font-semibold border bg-[rgba(201,168,76,0.08)] border-[rgba(201,168,76,0.25)] text-[rgba(201,168,76,0.85)] hover:bg-[rgba(201,168,76,0.14)] hover:border-[rgba(201,168,76,0.4)] hover:shadow-[0_0_16px_rgba(201,168,76,0.15)] transition-all cursor-default"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {tradition}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO FOLLOW ALONG ───────────────────────────────────── */}
      <section className="py-24 px-6 animate-fade-in-up" style={{ background: "rgba(26,26,46,0.6)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">Follow along</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">How to track MEOK Labs.</h2>
            <p className="text-white/40 text-sm max-w-sm mx-auto">
              We post experiment updates in real time. No newsletter drip. No marketing fluff.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <FeatureCard
              title="/live"
              description="The MEOK live feed — experiment updates, care score snapshots, and council decisions as they happen."
              glow="gold"
              className="h-full"
              action={
                <Link href="/live" className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/60 hover:text-white transition-colors">
                  Open live feed <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              }
            />
            <FeatureCard
              title="Discord"
              description="Join #meok-labs on Discord. Ask questions, challenge our methodology, or share what you're building on top."
              glow="purple"
              className="h-full"
              action={
                <a href="https://discord.gg/meok" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/60 hover:text-white transition-colors">
                  Join Discord <ExternalLink className="w-3.5 h-3.5" />
                </a>
              }
            />
            <FeatureCard
              title="GitHub"
              description="Star meok-ai/labs on GitHub to track issues, experiments, and the raw implementation as it evolves."
              glow="none"
              className="h-full"
              action={
                <a href="https://github.com/meok-ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/60 hover:text-white transition-colors">
                  View on GitHub <ExternalLink className="w-3.5 h-3.5" />
                </a>
              }
            />
          </div>
        </div>
      </section>

      {/* ── PAPERS / RESEARCH ─────────────────────────────────────── */}
      <section className="py-24 px-6 animate-fade-in-up">
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
              {
                id: "MEOK-AI-2026-004",
                title: "Personal Sovereign AI: Architecture for Individual Data Sovereignty",
                status: "Draft",
                statusClass: "bg-white/[0.06] text-white/50 border-white/[0.1]",
              },
            ].map((paper) => (
              <Surface
                key={paper.id}
                variant="elevated"
                className="flex items-center justify-between gap-4 px-6 py-5 hover:border-white/15 transition-colors"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <span className="font-mono text-xs text-white/25 flex-shrink-0">{paper.id}</span>
                  <p className="font-semibold text-white/80 text-sm truncate">{paper.title}</p>
                </div>
                <span className={`flex-shrink-0 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${paper.statusClass}`}>
                  {paper.status}
                </span>
              </Surface>
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
      <section className="py-24 px-6 animate-fade-in-up" style={{ background: "rgba(26,26,46,0.6)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <IconOrb icon={FlaskConical} variant="gold" size="lg" className="mx-auto mb-6" />
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

    </div>
  );
}
