"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, PenLine, Code2, Palette, Mail, BookOpen, RefreshCw, Loader2, Hammer, List } from "lucide-react";
import { callTool } from "@/lib/api";

/* ─── DATA ─────────────────────────────────────────────── */

const CAPABILITIES = [
  {
    emoji: "✍️",
    Icon: PenLine,
    title: "Content drafting",
    desc: "Blog posts, emails, social threads, press releases — drafted from your brief and ready for review.",
  },
  {
    emoji: "💻",
    Icon: Code2,
    title: "Code generation",
    desc: "Functions, tests, documentation, bug fixes from your backlog — written overnight in TypeScript, Python, and more.",
  },
  {
    emoji: "🎨",
    Icon: Palette,
    title: "Creative assets",
    desc: "Copy variants, product descriptions, landing page sections — built to your spec while you sleep.",
  },
  {
    emoji: "📧",
    Icon: Mail,
    title: "Email sequences",
    desc: "Nurture flows, outreach sequences, and follow-up campaigns drafted from your goals and voice.",
  },
  {
    emoji: "📝",
    Icon: BookOpen,
    title: "Documentation",
    desc: "Technical docs, user guides, README files — Riri works through your documentation backlog overnight.",
  },
  {
    emoji: "🔄",
    Icon: RefreshCw,
    title: "Refactoring tasks",
    desc: "Code cleanup, migration scripts, and dependency updates queued from your backlog and delivered for review.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Riri — The Builder Agent | MEOK AI LABS",
  description:
    "Riri is MEOK's overnight builder. She drafts content, writes code, builds assets, and delivers them to your inbox before you wake up.",
  url: "https://meok.ai/work/riri",
  provider: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
};

/* ─── PAGE ─────────────────────────────────────────────── */

export default function RiriPage() {
  const [templatesLoading, setTemplatesLoading] = useState(false);
  const [templatesResult, setTemplatesResult] = useState<Record<string, unknown> | null>(null);
  const [templatesError, setTemplatesError] = useState<string | null>(null);

  const [buildLoading, setBuildLoading] = useState(false);
  const [buildResult, setBuildResult] = useState<Record<string, unknown> | null>(null);
  const [buildError, setBuildError] = useState<string | null>(null);

  const [toolName, setToolName] = useState("");
  const [toolDescription, setToolDescription] = useState("");

  async function handleListTemplates() {
    setTemplatesLoading(true);
    setTemplatesError(null);
    setTemplatesResult(null);
    try {
      const result = await callTool<Record<string, unknown>>("riri_list_templates");
      setTemplatesResult(result);
    } catch (err) {
      setTemplatesError(err instanceof Error ? err.message : "Failed to list templates");
    } finally {
      setTemplatesLoading(false);
    }
  }

  async function handleBuildTool(e: React.FormEvent) {
    e.preventDefault();
    if (!toolName.trim() || !toolDescription.trim()) return;
    setBuildLoading(true);
    setBuildError(null);
    setBuildResult(null);
    try {
      const result = await callTool<Record<string, unknown>>("riri_build_tool", {
        name: toolName.trim(),
        description: toolDescription.trim(),
      });
      setBuildResult(result);
    } catch (err) {
      setBuildError(err instanceof Error ? err.message : "Failed to build tool");
    } finally {
      setBuildLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,175,55,0.12) 0%, transparent 65%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white/40 hover:text-[#d4af37] transition-colors mb-8"
          >
            ← Work OS
          </Link>

          <div className="block mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
              Work OS · Agent
            </div>
          </div>

          <h1
            className="font-black text-white leading-[1.05] mb-4"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)" }}
          >
            Riri — The Builder
          </h1>

          <p className="text-[#d4af37] text-xl font-semibold mb-6">
            She builds while you sleep.
          </p>

          <p className="text-white/55 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Riri is your overnight builder. She takes your backlog — code, copy, docs, emails —
            and works through it during your sleep window. You wake up to completed assets,
            ready for review and ship.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/birth"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-[#0a0a0a] bg-[#d4af37] hover:bg-[#b8963e] transition-all text-sm shadow-lg"
              aria-label="Start your free trial and access Riri"
            >
              Start free trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/work"
              className="text-sm text-white/40 hover:text-white/70 transition-colors font-medium"
            >
              See all Work OS agents →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHAT RIRI BUILDS ─────────────────────────────── */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#d4af37]/60 block mb-4">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              What Riri builds while you sleep
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map(({ emoji, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl bg-[#1a1a1a] border border-white/[0.07] p-7 hover:border-[#d4af37]/20 transition-colors"
              >
                <div className="text-3xl mb-4">{emoji}</div>
                <h3 className="font-black text-white text-base mb-3">{title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GEO H2s ──────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto space-y-16">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-5 leading-tight">
              What is Riri in MEOK AI?
            </h2>
            <p className="text-white/60 text-base leading-relaxed">
              Riri is MEOK&apos;s overnight creative and technical builder agent. She takes your task
              backlog and works through it during your sleep window — drafting content, writing
              code, building assets, and producing documentation. By morning, completed work is
              waiting in your brief for review. Riri handles the building; you handle the decisions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-5 leading-tight">
              Can Riri write code?
            </h2>
            <p className="text-white/60 text-base leading-relaxed">
              Yes. Riri handles TypeScript, Python, and common web languages. She writes functions,
              tests, and documentation from your backlog — pulling tasks you&apos;ve queued and
              working through them autonomously. Results are delivered for human review, never
              committed autonomously. You stay in control of what ships.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-5 leading-tight">
              Which tier unlocks Riri?
            </h2>
            <p className="text-white/60 text-base leading-relaxed">
              Riri is available on the Sovereign tier at £12/mo. All three agents — Orion, Riri,
              and Hourman — are included in a single subscription. No per-task fees. No add-ons.
              Everything you need to build overnight, every night.
            </p>
          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE CONSOLE ──────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]/60 block mb-4">
              Live Console
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Command Riri
            </h2>
            <p className="text-[#f5f0e8]/50 mt-4 max-w-xl mx-auto">
              Browse templates or build a new tool with Riri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* List Templates */}
            <div className="rounded-2xl bg-[#1a1a2e] border border-[#c9a84c]/20 p-6">
              <h3 className="font-black text-[#c9a84c] text-lg mb-3">Templates</h3>
              <p className="text-sm text-[#f5f0e8]/40 mb-5">
                View all available build templates Riri can use.
              </p>
              <button
                onClick={handleListTemplates}
                disabled={templatesLoading}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-[#0d0c18] bg-[#c9a84c] hover:bg-[#b8963e] disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm"
              >
                {templatesLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    <List className="w-4 h-4" />
                    List Templates
                  </>
                )}
              </button>
              {templatesError && (
                <div className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                  {templatesError}
                </div>
              )}
              {templatesResult && (
                <div className="mt-4 p-4 rounded-lg bg-[#0d0c18] border border-[#c9a84c]/10 overflow-auto max-h-64">
                  <pre className="text-xs text-[#f5f0e8]/70 whitespace-pre-wrap">
                    {JSON.stringify(templatesResult, null, 2)}
                  </pre>
                </div>
              )}
            </div>

            {/* Build a Tool */}
            <div className="rounded-2xl bg-[#1a1a2e] border border-[#c9a84c]/20 p-6">
              <h3 className="font-black text-[#c9a84c] text-lg mb-3">Build a Tool</h3>
              <p className="text-sm text-[#f5f0e8]/40 mb-5">
                Give Riri a name and description to build a new tool.
              </p>
              <form onSubmit={handleBuildTool} className="space-y-3">
                <input
                  type="text"
                  value={toolName}
                  onChange={(e) => setToolName(e.target.value)}
                  placeholder="Tool name"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0d0c18] border border-[#c9a84c]/20 text-[#f5f0e8] placeholder-[#f5f0e8]/30 text-sm focus:outline-none focus:border-[#c9a84c]/50 transition-colors"
                />
                <textarea
                  value={toolDescription}
                  onChange={(e) => setToolDescription(e.target.value)}
                  placeholder="Tool description"
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0d0c18] border border-[#c9a84c]/20 text-[#f5f0e8] placeholder-[#f5f0e8]/30 text-sm focus:outline-none focus:border-[#c9a84c]/50 transition-colors resize-none"
                />
                <button
                  type="submit"
                  disabled={buildLoading || !toolName.trim() || !toolDescription.trim()}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-[#0d0c18] bg-[#c9a84c] hover:bg-[#b8963e] disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm"
                >
                  {buildLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Building...
                    </>
                  ) : (
                    <>
                      <Hammer className="w-4 h-4" />
                      Build Tool
                    </>
                  )}
                </button>
              </form>
              {buildError && (
                <div className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                  {buildError}
                </div>
              )}
              {buildResult && (
                <div className="mt-4 p-4 rounded-lg bg-[#0d0c18] border border-[#c9a84c]/10 overflow-auto max-h-64">
                  <pre className="text-xs text-[#f5f0e8]/70 whitespace-pre-wrap">
                    {JSON.stringify(buildResult, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#111111] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
            Put Riri to work tonight.
          </h2>
          <p className="text-white/45 max-w-md mx-auto mb-10 leading-relaxed">
            Queue your backlog before bed. Riri builds overnight. Wake up to completed work,
            ready for review.
          </p>
          <Link
            href="/ralph"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-[#0a0a0a] bg-[#d4af37] hover:bg-[#b8963e] transition-all text-base shadow-xl"
            aria-label="Open Ralph Mode to configure Riri"
          >
            Put Riri to work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="mt-5 text-xs text-white/25 font-mono">
            Sovereign tier · £12/mo · Orion + Riri + Hourman included
          </p>
        </div>
      </section>

    </div>
  );
}
