import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, GitBranch, Heart, Unlock, Users } from "lucide-react";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";

export const metadata: Metadata = {
  title: "Built in the Open. Owned by You. — Open Source | MEOK.AI",
  description:
    "MEOK is built in the open. The Sovereign Temple, MCP server, character engine, and memory schemas are open source. MIT-licensed. Anyone can inspect, implement, and build on them.",
  alternates: { canonical: "https://meok.ai/open-source" },
  openGraph: {
    title: "Built in the Open. Owned by You. | MEOK.AI",
    description:
      "The Sovereign Temple, MCP server, character engine, and memory schemas are open source. You cannot truly trust what you cannot inspect.",
    type: "website",
    url: "https://meok.ai/open-source",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Built in the Open. Owned by You. — Open Source | MEOK.AI",
  description:
    "MEOK's core infrastructure is open source: Sovereign Temple, MCP server, character engine, and memory schemas. MIT-licensed on GitHub.",
  url: "https://meok.ai/open-source",
};

const GITHUB_SVG = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const OPEN_SOURCE_COMPONENTS = [
  {
    name: "Sovereign Temple",
    slug: "meok-ai/sovereign-temple",
    desc: "The core MCP server that powers MEOK's sovereign AI architecture. Docker-based, self-hostable, Byzantine fault-tolerant. Written in Python 3.11 with FastAPI — each council node is an async FastAPI service communicating via asyncpg-backed Postgres.",
    tags: ["Python 3.11", "FastAPI", "Docker", "MIT"],
    accentClass: "text-[#c9a84c]",
    borderClass: "border-[#c9a84c]/20",
  },
  {
    name: "MCP Server",
    slug: "meok-ai/mcp-server",
    desc: "Model Context Protocol server implementation with 71 built-in tools. Connect your AI to anything. The bridge layer is TypeScript; tool handlers that require inference call back into the Python FastAPI services.",
    tags: ["TypeScript", "Python 3.11", "MCP", "MIT"],
    accentClass: "text-blue-400",
    borderClass: "border-blue-500/20",
  },
  {
    name: "Character Engine",
    slug: "meok-ai/character-engine",
    desc: "The archetype and character system that gives each AI companion a distinct soul architecture. Fully configurable. Built in Python 3.11 with PyTorch for the care-scoring neural model — a fine-tuned transformer trained on the Maternal Covenant dataset.",
    tags: ["Python 3.11", "PyTorch", "MIT"],
    accentClass: "text-purple-400",
    borderClass: "border-purple-500/20",
  },
  {
    name: "Memory Schemas",
    slug: "meok-ai/memory-schemas",
    desc: "Cryptographic memory architecture for user-owned AI memory. pgvector schemas and migration scripts, AES-256-GCM encryption patterns, and the portable JSON export format. Uses asyncpg for async Postgres access.",
    tags: ["Postgres", "pgvector", "asyncpg", "MIT"],
    accentClass: "text-emerald-400",
    borderClass: "border-emerald-500/20",
  },
];

const WHY_OPEN_SOURCE = [
  {
    icon: Unlock,
    title: "Trust requires transparency",
    body: "You cannot truly trust what you cannot inspect. Open source is not a feature — it is the only honest foundation for sovereign AI.",
    accentClass: "text-[#c9a84c]",
  },
  {
    icon: Heart,
    title: "Build the field, not the moat",
    body: "We are building a new category of AI — one that genuinely serves users rather than extracting from them. That only works if the field advances together.",
    accentClass: "text-emerald-400",
  },
  {
    icon: Users,
    title: "Owned by the community",
    body: "Sovereign AI that depends on a single private company is not sovereign. Open source means the architecture survives us.",
    accentClass: "text-blue-400",
  },
];

const CONTRIBUTING_STEPS = [
  {
    num: "01",
    title: "Read the specs first",
    body: "Start at github.com/meok-ai/sovereign-temple/docs. The MATERNAL_COVENANT.md and BYZANTINE_COUNCIL.md files explain the care-first architecture. Read these before writing a single line — they tell you what a good contribution looks like.",
  },
  {
    num: "02",
    title: "Pick a labelled issue",
    body: "Browse issues on any repo labelled 'good first issue' (approachable) or 'help wanted' (needed). If you want to add a new MCP tool, check tools/README.md for the tool spec template. Python work lives in sovereign-temple; TypeScript in mcp-server.",
  },
  {
    num: "03",
    title: "Open a PR — care review included",
    body: "Fork, branch, commit, and open a PR against main. Every PR gets two reviews: a standard code review and a care review — does this change align with sovereign AI principles? We aim to review within 48 hours. Automated tests run on push via GitHub Actions.",
  },
];

export default function OpenSourcePage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MarketingNav />

      {/* ─── HERO ───────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 pt-28 pb-20 text-center overflow-hidden">
        {/* Green terminal aesthetic */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-[5%] left-[5%] w-[600px] h-[400px] rounded-full bg-emerald-900/15 blur-3xl" />
          <div className="absolute bottom-[5%] right-[5%] w-[400px] h-[400px] rounded-full bg-emerald-900/10 blur-3xl" />
          {/* Terminal grid lines */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(74,222,128,1) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-900/30 border border-emerald-500/20 text-emerald-400/80 text-xs font-semibold mb-8 uppercase tracking-widest font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open Source
          </div>

          <h1
            className="font-black leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)" }}
          >
            Built in the open.
            <br />
            <span className="text-emerald-400">Owned by you.</span>
          </h1>

          <p className="text-xl text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed">
            You cannot truly trust what you cannot inspect. MEOK&apos;s core infrastructure —
            the Sovereign Temple, MCP server, character engine, and memory schemas — are open
            source. MIT-licensed. Anyone can read, implement, and build on them.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/meok-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-sm transition-all hover:shadow-[0_0_30px_rgba(74,222,128,0.20)] bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/15"
              aria-label="View MEOK open source repositories on GitHub (opens in new tab)"
            >
              {GITHUB_SVG}
              View on GitHub <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/research"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm text-white/50 border border-white/10 hover:border-white/20 hover:text-white/80 transition-all"
              aria-label="Read MEOK's open research on sovereign AI"
            >
              Read our research
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHAT'S OPEN SOURCE ─────────────────────────── */}
      <section className="bg-[#1a1a2e] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
              Open repositories
            </p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              What&apos;s open source.
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Four core components releasing on GitHub. Star them to follow progress.
            </p>
          </div>

          <div className="space-y-4">
            {OPEN_SOURCE_COMPONENTS.map((repo) => (
              <a
                key={repo.slug}
                href={`https://github.com/${repo.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-start justify-between gap-6 rounded-2xl p-7 bg-white/[0.03] border ${repo.borderClass} hover:bg-white/[0.05] transition-all group`}
                aria-label={`View ${repo.name} on GitHub (opens in new tab)`}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 mt-0.5">
                    <GitBranch className={`w-5 h-5 ${repo.accentClass}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className={`font-black text-lg ${repo.accentClass}`}>{repo.name}</h3>
                      <span className="font-mono text-white/25 text-xs">{repo.slug}</span>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed mb-3">{repo.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {repo.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.07] text-white/40 text-xs font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0 self-center">
                  <span className="text-white/20 text-xs font-mono">coming soon</span>
                  <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-white/40 transition-colors" />
                </div>
              </a>
            ))}
          </div>

          {/* GitHub callout */}
          <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-900/[0.08] p-7 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              {GITHUB_SVG}
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="font-bold text-white mb-1">github.com/meok-ai</p>
              <p className="text-white/40 text-sm">
                Star the repos to follow progress. Issues, discussions, and PRs welcome.
              </p>
            </div>
            <a
              href="https://github.com/meok-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 hover:bg-emerald-500/15 transition-all"
              aria-label="Open MEOK GitHub organisation (opens in new tab)"
            >
              Open GitHub <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── TECH STACK ─────────────────────────────────── */}
      <section className="bg-[#1a1a2e] pb-14 pt-0 px-6">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-2xl border border-emerald-500/15 p-7"
            style={{ background: "rgba(16,185,129,0.04)" }}
          >
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-5">
              Core tech stack
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Python 3.11", detail: "Primary language — all inference and council logic" },
                { label: "FastAPI",     detail: "Async HTTP layer for every service node" },
                { label: "asyncpg",     detail: "High-performance async Postgres client" },
                { label: "pgvector",    detail: "Semantic memory — vector embeddings in Postgres" },
                { label: "PyTorch",     detail: "Care-scoring neural model fine-tuning" },
                { label: "TypeScript",  detail: "MCP bridge and web client layer" },
                { label: "Docker",      detail: "Self-hosted deployment of all council nodes" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="px-4 py-2.5 rounded-xl border border-emerald-500/20 bg-white/[0.03] flex flex-col gap-0.5"
                >
                  <span className="text-sm font-black text-emerald-400">{item.label}</span>
                  <span className="text-xs text-white/35">{item.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY WE OPEN SOURCE ─────────────────────────── */}
      <section className="bg-[#0d0c18] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
              Our principles
            </p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Why we open source.
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Three principles that make openness non-negotiable for us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHY_OPEN_SOURCE.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl p-8 bg-white/[0.03] border border-white/[0.07] hover:border-emerald-500/15 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/[0.05] flex items-center justify-center mb-5">
                    <Icon className={`w-5 h-5 ${item.accentClass}`} />
                  </div>
                  <h3 className={`font-black text-lg mb-3 ${item.accentClass}`}>{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CONTRIBUTING GUIDE ─────────────────────────── */}
      <section className="bg-[#1a1a2e] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
              Get involved
            </p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              How to contribute.
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Whether you&apos;re a researcher, engineer, or builder — there&apos;s a place for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CONTRIBUTING_STEPS.map((step) => (
              <div
                key={step.num}
                className="rounded-2xl p-7 bg-white/[0.03] border border-emerald-500/15"
              >
                <div className="font-mono font-black text-3xl text-emerald-400/30 mb-3">
                  {step.num}
                </div>
                <h3 className="font-black text-lg text-emerald-400 mb-3">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMMUNITY SECTION ──────────────────────────── */}
      <section className="bg-[#0d0c18] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-900/[0.06] p-10 md:p-14 text-center">
            <div className="text-5xl mb-6">🌱</div>
            <h2 className="text-3xl font-black text-white mb-4">
              Join the sovereign AI community.
            </h2>
            <p className="text-white/55 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Researchers, engineers, ethicists, and builders working on the same problem:
              AI that genuinely serves its users. Join the conversation on GitHub.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/meok-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 hover:bg-emerald-500/15 transition-all"
                aria-label="Join the MEOK community on GitHub (opens in new tab)"
              >
                {GITHUB_SVG}
                github.com/meok-ai
              </a>
              <Link
                href="/research"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm text-white/50 border border-white/10 hover:border-white/20 hover:text-white/80 transition-all"
                aria-label="Read MEOK's open research on sovereign AI"
              >
                Read our research
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────── */}
      <section className="bg-[#1a1a2e] py-24 px-6">
        <div className="relative max-w-3xl mx-auto text-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-emerald-900/20 blur-3xl" />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Contribute to sovereign AI.
            </h2>
            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
              The code is open. The mission is open. Come build with us.
            </p>
            <a
              href="https://github.com/meok-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-black text-sm transition-all bg-emerald-500 text-[#0d0c18] hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(74,222,128,0.25)]"
              aria-label="Contribute to MEOK sovereign AI on GitHub (opens in new tab)"
            >
              {GITHUB_SVG}
              View on GitHub <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
