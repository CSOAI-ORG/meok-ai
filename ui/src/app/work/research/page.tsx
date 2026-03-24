"use client";

import Link from "next/link";
import {
  Search,
  BookOpen,
  Link2,
  Network,
  ArrowRight,
  ChevronDown,
  Database,
} from "lucide-react";
import { MarketingFooter } from "@/components/marketing-footer";
import { useState } from "react";

/* ─── DATA ─────────────────────────────────────────────── */

const FEATURES = [
  {
    Icon: Search,
    iconClass: "icon-purple",
    title: "Web research with memory",
    desc: "Real-time web search via Perplexity — query decomposition, parallel retrieval, credibility scoring, and synthesis. Every search saved. Every finding cross-referenced against your history.",
    detail: "Full source transparency. No hallucinations — every claim pinned to its source.",
  },
  {
    Icon: Link2,
    iconClass: "icon-gold",
    title: "Citation tracking",
    desc: "Every claim is pinned to its source. Citation preservation means you can always trace the origin of any finding — no guesses, no hallucinations. Your research is bulletproof.",
    detail: "APA, MLA, Chicago, and plain-URL citation formats supported.",
  },
  {
    Icon: BookOpen,
    iconClass: "icon-blue",
    title: "Knowledge synthesis",
    desc: "Multiple sources on the same topic? MEOK synthesises them into a single coherent view — identifying where sources agree, where they conflict, and which claims need stronger evidence.",
    detail: "Works across web results, PDFs, uploaded documents, and your own notes.",
  },
  {
    Icon: Network,
    iconClass: "icon-green",
    title: "Topic mapping",
    desc: "As you research, MEOK builds a private topic map — connecting findings, flagging knowledge gaps, and suggesting adjacent areas you haven't explored yet.",
    detail: "Visual concept map available in the Research dashboard.",
  },
];

const STATS = [
  { value: "2.5 hrs", label: "saved per day vs manual research" },
  { value: "100%", label: "source-cited answers" },
  { value: "∞", label: "private library growth" },
];

const COMPARISON_ROWS = [
  {
    aspect: "What you get",
    google: "10 blue links. You click, read, and synthesise manually.",
    meok: "A synthesised answer with your previous findings already integrated.",
  },
  {
    aspect: "Memory",
    google: "None. Every search starts from zero.",
    meok: "Every search cross-references your full research history.",
  },
  {
    aspect: "Sources",
    google: "You track them yourself, in a doc somewhere.",
    meok: "Every claim pinned to its source. Full citations on request.",
  },
  {
    aspect: "Compounds over time",
    google: "No. Search 100 times, still get 10 links.",
    meok: "Yes. Each session adds to your knowledge graph. Gets smarter.",
  },
];

const FAQ = [
  {
    q: "Does MEOK browse the web?",
    a: "Yes. MEOK runs real-time web research via Perplexity — query decomposition, parallel retrieval across multiple sources, credibility scoring, and synthesis. Every claim is traceable to a live URL.",
  },
  {
    q: "How does it cite sources?",
    a: "Every claim MEOK synthesises is tagged with its source URL, document, or page reference. You can ask for citations in APA, MLA, Chicago, or plain-URL format. Nothing reaches you without a traceable source — no hallucinations.",
  },
  {
    q: "Can I export my research?",
    a: "Yes. Export any research session as a structured markdown document with inline citations, or as a formatted PDF. Your full knowledge graph is exportable at any time — you own it.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Research Without the Rabbit Holes",
  description:
    "Web research with memory, citation tracking, knowledge synthesis, and topic mapping. Sovereign.",
  url: "https://meok.ai/work/research",
  provider: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
};

/* ─── RESEARCH SESSION WALKTHROUGH ─────────────────────── */
const SESSION_STEPS = [
  {
    label: "You ask",
    content: "What are the best B2B SaaS pricing models for a £10M ARR company?",
    type: "query" as const,
  },
  {
    label: "MEOK searches",
    content: "Querying web · Found 4 sources · Cross-referencing with your previous notes on Notion pricing · Cross-referencing your saved pricing audit from March 2025",
    type: "process" as const,
  },
  {
    label: "Synthesis",
    content: "4 models identified: Usage-based, seat-based, tiered, and hybrid. Your previous research on Notion's pricing strategy aligns with hybrid for your segment. 2 sources conflict on churn implications for usage-based at this ARR — flagged.",
    type: "result" as const,
  },
  {
    label: "Citations",
    content: "OpenView Partners (2024) · Patrick Campbell, ProfitWell (2023) · Your own note: \"Pricing audit March 2025\" · Lenny's Newsletter: Pricing benchmarks",
    type: "citation" as const,
  },
];

/* ─── FAQ ITEM ─────────────────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/[0.07]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        aria-expanded={open}
        aria-label={`Toggle answer: ${q}`}
      >
        <span className="font-semibold text-[#f5f0e8] text-sm leading-relaxed">{q}</span>
        <ChevronDown
          className={`w-4 h-4 text-[#c9a84c] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <p className="pb-5 text-sm text-[#f5f0e8]/60 leading-relaxed">{a}</p>}
    </div>
  );
}

/* ─── PAGE ─────────────────────────────────────────────── */
export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-[#f5f0e8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(124,58,237,0.15) 0%, transparent 65%)" }}
        />
        <div className="relative max-w-4xl mx-auto">
          <Link href="/work" className="inline-flex items-center gap-2 text-xs font-semibold text-[#a0a0b8] hover:text-[#c9a84c] transition-colors mb-8">
            ← Work OS
          </Link>

          <div className="block mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold tracking-widest uppercase">
              <Search className="w-3 h-3" />
              Work OS · Research
            </div>
          </div>

          <h1
            className="font-black text-white leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)" }}
          >
            Research that compounds.{" "}
            <span className="text-gradient-gold">Every search makes the next one smarter.</span>
          </h1>

          <p className="text-[#f5f0e8]/65 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Google gives you 10 blue links. MEOK gives you a synthesised answer — with your
            previous findings already integrated, every source cited, and your knowledge graph
            growing with every session.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link
              href="/hatch"
              className="group flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#b8963e] transition-all text-sm"
              aria-label="Join the MEOK waitlist for Research access"
            >
              Start researching — free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/work" className="text-sm text-[#f5f0e8]/50 hover:text-[#f5f0e8]/80 transition-colors font-medium">
              See all Work OS features →
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-10 mb-14">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-black text-[#c9a84c]">{s.value}</div>
                <div className="text-xs text-[#f5f0e8]/40 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Research session walkthrough */}
          <div className="max-w-xl mx-auto premium-card p-6 text-left">
            <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-5">
              A research session in action
            </p>
            <div className="space-y-3">
              {SESSION_STEPS.map((step) => (
                <div
                  key={step.label}
                  className={`rounded-xl p-4 ${
                    step.type === "query"
                      ? "bg-[#1a1a2e]/80 border border-[#c9a84c]/20"
                      : step.type === "process"
                      ? "bg-[#0d0c18]/60 border border-white/[0.05]"
                      : step.type === "result"
                      ? "bg-[#1a1a2e]/60 border border-white/[0.07]"
                      : "bg-purple-900/20 border border-purple-500/20"
                  }`}
                >
                  <p
                    className={`text-xs font-bold tracking-widest uppercase mb-1.5 ${
                      step.type === "query"
                        ? "text-[#c9a84c]"
                        : step.type === "process"
                        ? "text-[#f5f0e8]/30"
                        : step.type === "result"
                        ? "text-white"
                        : "text-purple-400"
                    }`}
                  >
                    {step.label}
                  </p>
                  <p
                    className={`text-sm leading-relaxed ${
                      step.type === "process" ? "text-[#f5f0e8]/40 italic" : "text-[#f5f0e8]/70"
                    }`}
                  >
                    {step.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]/60 block mb-4">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              From query to synthesis. Fully cited.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {FEATURES.map(({ Icon, iconClass, title, desc, detail }) => (
              <div key={title} className="premium-card p-7">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${iconClass}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-black text-white text-lg mb-3">{title}</h3>
                <p className="text-sm text-[#f5f0e8]/55 leading-relaxed mb-4">{desc}</p>
                <p className="text-xs text-[#c9a84c]/70 font-medium border-t border-white/[0.06] pt-4">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MEOK VS GOOGLE ───────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]/60 block mb-4">
              Not a search engine
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              MEOK research vs Google research
            </h2>
          </div>

          <div className="premium-card overflow-hidden">
            {/* Header row */}
            <div className="grid grid-cols-3 gap-0 border-b border-white/[0.07]">
              <div className="p-5 text-xs font-bold tracking-widest uppercase text-[#f5f0e8]/30" />
              <div className="p-5 border-l border-white/[0.07]">
                <p className="text-xs font-bold tracking-widest uppercase text-[#f5f0e8]/40">Google</p>
              </div>
              <div className="p-5 border-l border-white/[0.07] bg-[#c9a84c]/5">
                <p className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]">MEOK</p>
              </div>
            </div>
            {COMPARISON_ROWS.map((row, i) => (
              <div key={row.aspect} className={`grid grid-cols-3 gap-0 ${i < COMPARISON_ROWS.length - 1 ? "border-b border-white/[0.07]" : ""}`}>
                <div className="p-5">
                  <p className="text-xs font-black text-white/60 uppercase tracking-wide">{row.aspect}</p>
                </div>
                <div className="p-5 border-l border-white/[0.07]">
                  <p className="text-sm text-[#f5f0e8]/45 leading-relaxed">{row.google}</p>
                </div>
                <div className="p-5 border-l border-white/[0.07] bg-[#c9a84c]/5">
                  <p className="text-sm text-[#f5f0e8]/80 leading-relaxed">{row.meok}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Knowledge base grows */}
          <div className="mt-12 premium-card p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="icon-gold w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white mb-2">Your knowledge base grows</h3>
                <p className="text-[#f5f0e8]/55 text-sm leading-relaxed">
                  Every research session adds to your personal knowledge graph. MEOK connects findings
                  across sessions, flags when new research contradicts something you found before, and
                  suggests adjacent areas you haven&apos;t explored yet. The longer you use it, the
                  more valuable each new search becomes.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Session 1", desc: "You research SaaS pricing. 4 sources found. Saved to your library." },
                { label: "Session 10", desc: "New pricing query. MEOK surfaces your 9 previous sessions automatically." },
                { label: "Session 50+", desc: "Your library is a private knowledge base no analyst could buy." },
              ].map((item) => (
                <div key={item.label} className="bg-[#1a1a2e]/60 border border-white/[0.06] rounded-xl p-4">
                  <p className="font-black text-[#c9a84c] text-xs mb-1">{item.label}</p>
                  <p className="text-xs text-[#f5f0e8]/45 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-white">Questions</h2>
          </div>
          <div className="divide-y divide-white/[0.07]">
            {FAQ.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
            Research smarter.{" "}
            <span className="text-gradient-gold">Stay sovereign.</span>
          </h2>
          <p className="text-[#f5f0e8]/50 max-w-md mx-auto mb-10 leading-relaxed">
            Join the MEOK waitlist for early access to Research when Work OS launches.
          </p>
          <Link
            href="/hatch"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#b8963e] transition-all text-base shadow-xl"
            aria-label="Join the MEOK waitlist for early access to Research"
          >
            Join the waitlist — free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="mt-5 text-xs text-[#f5f0e8]/30 font-mono">No credit card · Private library · Source-cited</p>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
