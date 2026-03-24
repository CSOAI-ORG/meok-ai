"use client";

import Link from "next/link";
import {
  FolderOpen,
  FileText,
  Search,
  GitBranch,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Clock,
  Mic,
  Mail,
  MessageSquare,
  NotebookPen,
} from "lucide-react";
import { useState } from "react";

/* ─── DATA ─────────────────────────────────────────────── */

const FEATURES = [
  {
    Icon: FolderOpen,
    iconClass: "icon-gold",
    title: "Smart filing",
    desc: "Every document you save is automatically categorised, tagged, and embedded in semantic memory. No more hunting through nested folders. MEOK knows where everything is — and why it matters.",
    detail: "Auto-categorises by project, client, topic, and date. Tags applied automatically.",
  },
  {
    Icon: Sparkles,
    iconClass: "icon-blue",
    title: "AI summarisation",
    desc: "Paste a 50-page report and get a structured executive summary in seconds. Adjustable depth: headline, key points, full structured digest, or extract specific sections you ask for.",
    detail: "Works on PDFs, Word docs, Google Docs, Notion pages, and web articles.",
  },
  {
    Icon: Search,
    iconClass: "icon-purple",
    title: "Cross-reference search",
    desc: "Search your entire document history in plain English. \"What did we agree with the agency in October?\" finds the right clause in the right contract instantly — no keyword gymnastics.",
    detail: "Powered by pgvector 1536-dimensional semantic embeddings.",
  },
  {
    Icon: GitBranch,
    iconClass: "icon-green",
    title: "Version tracking",
    desc: "Every edit is a version. Ask MEOK what changed between draft 3 and draft 7, or restore any previous version with a single command. Your document history is never lost.",
    detail: "Automatic versioning. Diff summaries in plain English. Full restore.",
  },
];

const INDEXED_SOURCES = [
  { Icon: NotebookPen, iconClass: "icon-gold", label: "Meeting notes", desc: "Notion, Apple Notes, Obsidian, and any markdown file." },
  { Icon: Mail, iconClass: "icon-blue", label: "Emails", desc: "Gmail and Outlook threads with relevant context preserved." },
  { Icon: FileText, iconClass: "icon-purple", label: "Documents", desc: "Google Docs, Word, PDF, Confluence, and Coda pages." },
  { Icon: Mic, iconClass: "icon-green", label: "Voice memos", desc: "Transcribed and indexed automatically after recording." },
  { Icon: MessageSquare, iconClass: "icon-gold", label: "Chat history", desc: "Slack threads and Teams messages you've been part of." },
  { Icon: Search, iconClass: "icon-blue", label: "Web research", desc: "Every MEOK Research session saved and cross-referenced." },
];

const SEARCH_EXAMPLES = [
  {
    query: "Show me everything about the Henderson account",
    results: [
      { icon: "📄", title: "Henderson Proposal v3 — Jan 2026", match: '"Revised scope: £42k. Sign-off pending from their legal team."' },
      { icon: "✉️", title: "Email thread: Henderson contract terms", match: '"Agreed 60-day payment terms. Net 30 on first invoice."' },
      { icon: "📝", title: "Meeting notes — Henderson kickoff", match: '"James Henderson — key decision maker. Prefers fortnightly updates."' },
    ],
  },
  {
    query: "What were the action items from last Tuesday's standup?",
    results: [
      { icon: "📝", title: "Standup notes — 18 Mar 2026", match: '"@Nick: finalise pricing deck · @Sarah: chase legal sign-off · @Dev: ship auth flow"' },
    ],
  },
  {
    query: "Find the clause about IP ownership in our agency contract",
    results: [
      { icon: "📄", title: "Agency SOW — October 2025", match: '"All creative output is client-owned upon final payment. Agency retains portfolio rights."' },
    ],
  },
];

const FAQ = [
  {
    q: "Does MEOK index my entire computer?",
    a: "No. MEOK only indexes what you explicitly connect — specific apps, folders, or integrations you authorise. Nothing is crawled passively. You choose what goes in and you can remove any source at any time.",
  },
  {
    q: "Is my document content private?",
    a: "Yes. Document contents are embedded locally for sensitive operations. MEOK uses minimal-scope OAuth and never sends your document text to third-party servers for training or analysis. Your content is encrypted in your private pgvector store.",
  },
  {
    q: "Can it summarise long documents?",
    a: "Yes. Paste a 50-page report and get a structured executive summary in seconds — adjustable depth from a three-sentence headline down to a full structured digest. Works on PDFs, Word docs, Google Docs, Notion pages, and web articles.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Documents — Never Lose a Document. Never Forget a Detail.",
  description:
    "Smart filing, AI summarisation, cross-reference search, and version tracking. Sovereign. Local-first.",
  url: "https://meok.ai/work/documents",
  provider: { "@type": "Organization", name: "MEOK AI LABS", url: "https://meok.ai" },
};

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
export default function DocumentsPage() {
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
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(59,130,246,0.12) 0%, transparent 65%)" }}
        />
        <div className="relative max-w-4xl mx-auto">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#a0a0b8] hover:text-[#c9a84c] transition-colors mb-8"
          >
            ← Work OS
          </Link>

          <div className="block mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase">
              <FileText className="w-3 h-3" />
              Work OS · Documents
            </div>
          </div>

          <h1
            className="font-black text-white leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)" }}
          >
            You wrote it 6 months ago.{" "}
            <span className="text-gradient-gold">MEOK knows exactly where it is and what was in it.</span>
          </h1>

          <p className="text-[#f5f0e8]/65 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop hunting through folders, Slack threads, and email chains. MEOK indexes everything
            you create — and lets you find it in plain language, instantly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/hatch"
              className="group flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#b8963e] transition-all text-sm"
              aria-label="Join the MEOK waitlist for Documents"
            >
              Get early access — free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/work" className="text-sm text-[#f5f0e8]/50 hover:text-[#f5f0e8]/80 transition-colors font-medium">
              See all Work OS features →
            </Link>
          </div>

          {/* Search demo mockup */}
          <div className="mt-16 max-w-xl mx-auto premium-card p-6 text-left">
            <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-4">
              Search in your language
            </p>
            <div className="bg-[#0d0c18]/80 border border-white/[0.08] rounded-xl px-4 py-3 flex items-center gap-3 mb-5">
              <Search className="w-4 h-4 text-[#c9a84c]/60" />
              <span className="text-[#f5f0e8]/70 text-sm">
                Show me everything about the Henderson account
              </span>
            </div>
            <div className="space-y-3">
              {[
                {
                  icon: "📄",
                  title: "Henderson Proposal v3 — Jan 2026",
                  match: '"Revised scope: £42k. Sign-off pending from their legal team."',
                  when: "12 Jan",
                },
                {
                  icon: "✉️",
                  title: "Email thread: Henderson contract terms",
                  match: '"Agreed 60-day payment terms. Net 30 on first invoice."',
                  when: "5 Jan",
                },
                {
                  icon: "📝",
                  title: "Meeting notes — Henderson kickoff",
                  match: '"James Henderson — key decision maker. Prefers fortnightly updates."',
                  when: "18 Dec",
                },
              ].map((result) => (
                <div
                  key={result.title}
                  className="flex gap-3 bg-[#1a1a2e]/60 border border-white/[0.05] rounded-xl p-4 hover:border-[#c9a84c]/30 transition-colors cursor-pointer"
                >
                  <span className="text-xl flex-shrink-0">{result.icon}</span>
                  <div className="min-w-0">
                    <p className="text-white font-semibold text-sm truncate">{result.title}</p>
                    <p className="text-[#c9a84c]/70 text-xs italic mt-1 leading-relaxed">{result.match}</p>
                    <p className="text-[#f5f0e8]/30 text-xs mt-1 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {result.when}
                    </p>
                  </div>
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
              Four capabilities that make your documents findable, summarised, and connected.
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
                <p className="text-xs text-[#c9a84c]/70 font-medium border-t border-white/[0.06] pt-4">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT MEOK INDEXES ────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0c18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#c9a84c]/60 block mb-4">
              Everything in one place
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              What MEOK indexes
            </h2>
            <p className="text-[#f5f0e8]/55 mt-4 max-w-xl mx-auto leading-relaxed">
              It&apos;s not just documents. MEOK builds a single searchable memory from every place
              you create and communicate.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {INDEXED_SOURCES.map(({ Icon, iconClass, label, desc }) => (
              <div key={label} className="premium-card p-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${iconClass}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <p className="font-black text-white text-sm mb-1.5">{label}</p>
                <p className="text-xs text-[#f5f0e8]/50 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* 3 search query examples */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-black text-white mb-2">Search in your language</h3>
            <p className="text-[#f5f0e8]/50 text-sm">No keywords, no folder paths, no exact file names needed.</p>
          </div>
          <div className="space-y-5">
            {SEARCH_EXAMPLES.map((ex) => (
              <div key={ex.query} className="premium-card p-5">
                <div className="flex items-center gap-3 mb-4">
                  <Search className="w-4 h-4 text-[#c9a84c]/60 flex-shrink-0" />
                  <span className="text-[#f5f0e8]/70 text-sm italic">{ex.query}</span>
                </div>
                <div className="space-y-2">
                  {ex.results.map((r) => (
                    <div key={r.title} className="flex gap-3 bg-[#1a1a2e]/60 border border-white/[0.05] rounded-xl p-3">
                      <span className="text-base flex-shrink-0">{r.icon}</span>
                      <div className="min-w-0">
                        <p className="text-white font-semibold text-xs truncate">{r.title}</p>
                        <p className="text-[#c9a84c]/65 text-xs italic mt-1 leading-relaxed">{r.match}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
            Your documents.{" "}
            <span className="text-gradient-gold">Finally remembered.</span>
          </h2>
          <p className="text-[#f5f0e8]/50 max-w-md mx-auto mb-10 leading-relaxed">
            Join the MEOK waitlist and get early access to Documents when Work OS launches.
          </p>
          <Link
            href="/hatch"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#b8963e] transition-all text-base shadow-xl"
            aria-label="Join the MEOK waitlist for early access to Documents"
          >
            Join the waitlist — free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="mt-5 text-xs text-[#f5f0e8]/30 font-mono">No credit card · Sovereign · Local-first</p>
        </div>
      </section>

    </div>
  );
}
