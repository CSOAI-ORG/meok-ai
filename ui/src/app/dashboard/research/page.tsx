"use client";

import { useState, useCallback, useEffect } from "react";
import {
  Search,
  BookOpen,
  Save,
  Clock,
  Trash2,
  ChevronRight,
  Loader2,
  Copy,
  Check,
  Link2,
  AlertTriangle,
  ShieldCheck,
  HelpCircle,
  FileText,
  X,
} from "lucide-react";

// ── Brand tokens ─────────────────────────────────────────────────────────────
const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";
const GOLD = "#c9a84c";

// ── Types ────────────────────────────────────────────────────────────────────
interface Citation {
  index: number;
  text: string;
  url?: string;
}

interface ConfidenceSpan {
  text: string;
  level: "high" | "medium" | "low";
}

interface ResearchEntry {
  id: string;
  query: string;
  answer: string;
  citations: Citation[];
  timestamp: number;
  model?: string;
}

// ── Helpers ──────────────────────────────────────────────────────────────────

const STORAGE_KEY = "meok_research_history";

function loadHistory(): ResearchEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ResearchEntry[]) : [];
  } catch {
    return [];
  }
}

function saveHistory(entries: ResearchEntry[]) {
  try {
    // Keep last 50 entries
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries.slice(0, 50)));
  } catch {
    // Storage full — silent fail
  }
}

/** Extract numbered citations like [1], [2] and URLs from answer text */
function extractCitations(text: string): Citation[] {
  const citations: Citation[] = [];
  const seen = new Set<string>();

  // Match inline URLs (http/https)
  const urlRe = /https?:\/\/[^\s\)\]\,\"\']+/g;
  let m: RegExpExecArray | null;
  let idx = 1;
  while ((m = urlRe.exec(text)) !== null) {
    const url = m[0].replace(/[.,;:!?)]+$/, "");
    if (!seen.has(url)) {
      seen.add(url);
      try {
        const hostname = new URL(url).hostname.replace(/^www\./, "");
        citations.push({ index: idx++, text: hostname, url });
      } catch {
        citations.push({ index: idx++, text: url, url });
      }
    }
  }

  // Match numbered reference blocks like "1. Smith et al..." at end of text
  const refBlockRe = /^\d+\.\s+(.{10,120})$/gm;
  while ((m = refBlockRe.exec(text)) !== null) {
    const ref = m[1].trim();
    if (!seen.has(ref)) {
      seen.add(ref);
      citations.push({ index: idx++, text: ref });
    }
  }

  return citations;
}

/** Classify a sentence's confidence based on hedging language */
function classifySentence(sentence: string): "high" | "medium" | "low" {
  const low = /\b(uncertain|unclear|unknown|debated|contested|no consensus|may not|might not|some argue|it is possible|possibly|perhaps|speculation|unverified|limited evidence)\b/i;
  const medium = /\b(may|might|could|suggest|appears|seems|likely|probably|approximately|around|roughly|generally|often|typically|in many cases|some evidence)\b/i;
  if (low.test(sentence)) return "low";
  if (medium.test(sentence)) return "medium";
  return "high";
}

/** Split answer into confidence-annotated spans (sentence-level) */
function annotateConfidence(text: string): ConfidenceSpan[] {
  // Split on sentence boundaries
  const sentences = text.split(/(?<=[.!?])\s+/);
  return sentences.map((s) => ({ text: s, level: classifySentence(s) }));
}

const CONFIDENCE_CONFIG: Record<
  "high" | "medium" | "low",
  { label: string; color: string; bg: string; Icon: typeof ShieldCheck }
> = {
  high: { label: "High confidence", color: "#22c55e", bg: "rgba(34,197,94,0.08)", Icon: ShieldCheck },
  medium: { label: "Moderate confidence", color: "#c9a84c", bg: "rgba(201,168,76,0.08)", Icon: HelpCircle },
  low: { label: "Low confidence", color: "#ef4444", bg: "rgba(239,68,68,0.08)", Icon: AlertTriangle },
};

/** Format a research entry as a markdown document for "Save to Documents" */
function toMarkdown(entry: ResearchEntry): string {
  const date = new Date(entry.timestamp).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  let md = `# Research: ${entry.query}\n\n_Researched on ${date}_\n\n---\n\n${entry.answer}`;

  if (entry.citations.length > 0) {
    md += "\n\n---\n\n## Sources\n\n";
    entry.citations.forEach((c) => {
      md += c.url ? `${c.index}. [${c.text}](${c.url})\n` : `${c.index}. ${c.text}\n`;
    });
  }

  return md;
}

// ── Sub-components ────────────────────────────────────────────────────────────

function ConfidenceBadge({ level }: { level: "high" | "medium" | "low" }) {
  const cfg = CONFIDENCE_CONFIG[level];
  const Icon = cfg.Icon;
  return (
    <span
      className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold ml-1 align-middle"
      style={{ color: cfg.color, background: cfg.bg }}
      title={cfg.label}
    >
      <Icon className="w-2.5 h-2.5" />
      {level.toUpperCase()}
    </span>
  );
}

function CitationList({ citations }: { citations: Citation[] }) {
  if (citations.length === 0) return null;
  return (
    <div className="mt-4 pt-4 border-t" style={{ borderColor: BORDER }}>
      <div className="flex items-center gap-2 mb-3">
        <Link2 className="w-3.5 h-3.5" style={{ color: GOLD }} />
        <p className="text-xs font-semibold" style={{ color: GOLD }}>
          Sources ({citations.length})
        </p>
      </div>
      <ol className="space-y-1.5">
        {citations.map((c) => (
          <li key={c.index} className="flex items-start gap-2">
            <span
              className="text-[10px] font-bold w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ background: `${GOLD}18`, color: GOLD }}
            >
              {c.index}
            </span>
            {c.url ? (
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs leading-relaxed hover:underline break-all"
                style={{ color: "rgba(245,240,232,0.65)" }}
              >
                {c.text}
              </a>
            ) : (
              <span className="text-xs leading-relaxed" style={{ color: "rgba(245,240,232,0.50)" }}>
                {c.text}
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

function AnswerDisplay({
  answer,
  citations,
  showConfidence,
}: {
  answer: string;
  citations: Citation[];
  showConfidence: boolean;
}) {
  const spans = annotateConfidence(answer);

  return (
    <div>
      <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.80)" }}>
        {showConfidence
          ? spans.map((span, i) => (
              <span key={i}>
                {span.text}{" "}
                {span.level !== "high" && <ConfidenceBadge level={span.level} />}
              </span>
            ))
          : answer}
      </p>
      <CitationList citations={citations} />
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function ResearchPage() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [citations, setCitations] = useState<Citation[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showConfidence, setShowConfidence] = useState(true);
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [history, setHistory] = useState<ResearchEntry[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [activeEntry, setActiveEntry] = useState<ResearchEntry | null>(null);

  // Load history on mount
  useEffect(() => {
    setHistory(loadHistory());
  }, []);

  const runResearch = useCallback(async () => {
    const q = query.trim();
    if (!q) return;
    setLoading(true);
    setError("");
    setAnswer("");
    setCitations([]);
    setActiveEntry(null);
    setSaved(false);

    try {
      const res = await fetch("/api/research", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: q }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        setError((err as Record<string, string>).error ?? "Research failed. Please try again.");
        return;
      }

      const data = (await res.json()) as { answer: string; model?: string };
      const parsed = extractCitations(data.answer);
      setAnswer(data.answer);
      setCitations(parsed);

      // Persist to history
      const entry: ResearchEntry = {
        id: `r_${Date.now()}`,
        query: q,
        answer: data.answer,
        citations: parsed,
        timestamp: Date.now(),
        model: data.model,
      };

      setHistory((prev) => {
        const updated = [entry, ...prev];
        saveHistory(updated);
        return updated;
      });
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [query]);

  const copyAnswer = useCallback(async () => {
    const text = activeEntry?.answer ?? answer;
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  }, [answer, activeEntry]);

  const saveToDocuments = useCallback(() => {
    const entry: ResearchEntry = activeEntry ?? {
      id: `r_${Date.now()}`,
      query,
      answer,
      citations,
      timestamp: Date.now(),
    };

    const md = toMarkdown(entry);

    // Save to localStorage documents store (dashboard/documents reads this)
    try {
      const existing = JSON.parse(localStorage.getItem("meok_documents") ?? "[]") as Array<{
        id: string;
        title: string;
        content: string;
        savedAt: number;
      }>;
      existing.unshift({
        id: `doc_${Date.now()}`,
        title: `Research: ${entry.query.slice(0, 60)}`,
        content: md,
        savedAt: Date.now(),
      });
      localStorage.setItem("meok_documents", JSON.stringify(existing.slice(0, 100)));
    } catch {
      // Storage full
    }

    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }, [activeEntry, query, answer, citations]);

  const deleteEntry = useCallback(
    (id: string) => {
      setHistory((prev) => {
        const updated = prev.filter((e) => e.id !== id);
        saveHistory(updated);
        return updated;
      });
      if (activeEntry?.id === id) setActiveEntry(null);
    },
    [activeEntry],
  );

  const currentAnswer = activeEntry?.answer ?? answer;
  const currentCitations = activeEntry?.citations ?? citations;
  const currentQuery = activeEntry?.query ?? query;

  return (
    <div className="min-h-screen p-4 md:p-8" style={{ background: DEEP }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ background: `${GOLD}18` }}
          >
            <BookOpen className="w-5 h-5" style={{ color: GOLD }} />
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-bold text-white">Research Assistant</h1>
            <p className="text-sm text-white/40">Cited answers · Confidence tracking · Saved history</p>
          </div>
        </div>

        <button
          onClick={() => setShowHistory(!showHistory)}
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all"
          style={{
            color: showHistory ? GOLD : "rgba(255,255,255,0.5)",
            background: showHistory ? `${GOLD}18` : "transparent",
            border: `1px solid ${showHistory ? `${GOLD}40` : BORDER}`,
          }}
        >
          <Clock className="w-4 h-4" />
          History ({history.length})
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* History sidebar */}
        {showHistory && (
          <div
            className="lg:col-span-1 rounded-xl p-4 space-y-2 max-h-[600px] overflow-y-auto"
            style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
          >
            <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">
              Research History
            </p>
            {history.length === 0 && (
              <p className="text-xs text-white/30 italic">No research sessions yet.</p>
            )}
            {history.map((entry) => (
              <div
                key={entry.id}
                className="group relative rounded-lg p-3 cursor-pointer transition-all"
                style={{
                  background:
                    activeEntry?.id === entry.id ? `${GOLD}12` : "rgba(255,255,255,0.03)",
                  border: `1px solid ${activeEntry?.id === entry.id ? `${GOLD}30` : "transparent"}`,
                }}
                onClick={() => {
                  setActiveEntry(entry);
                  setShowHistory(false);
                }}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-white/80 leading-snug truncate">
                      {entry.query}
                    </p>
                    <p className="text-[10px] text-white/30 mt-1">
                      {new Date(entry.timestamp).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteEntry(entry.id);
                      }}
                      className="p-1 rounded hover:bg-red-500/20 transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-3 h-3 text-red-400" />
                    </button>
                    <ChevronRight className="w-3 h-3 text-white/30" />
                  </div>
                </div>
                {entry.citations.length > 0 && (
                  <div className="flex items-center gap-1 mt-2">
                    <Link2 className="w-2.5 h-2.5" style={{ color: GOLD }} />
                    <span className="text-[10px]" style={{ color: `${GOLD}80` }}>
                      {entry.citations.length} source{entry.citations.length !== 1 ? "s" : ""}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Main panel */}
        <div className={showHistory ? "lg:col-span-2 space-y-4" : "lg:col-span-3 space-y-4"}>
          {/* Query input */}
          <div>
            <label className="block text-sm font-medium text-white/60 mb-2">
              Research question
            </label>
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                />
                <input
                  type="text"
                  value={activeEntry ? activeEntry.query : query}
                  onChange={(e) => {
                    setActiveEntry(null);
                    setQuery(e.target.value);
                  }}
                  onKeyDown={(e) => e.key === "Enter" && !loading && runResearch()}
                  placeholder="e.g. What are the best AI governance frameworks in 2026?"
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-white/80 text-sm outline-none focus:ring-1"
                  style={{
                    background: SURFACE,
                    border: `1px solid ${BORDER}`,
                    // @ts-expect-error CSS custom property
                    "--tw-ring-color": GOLD,
                  }}
                />
              </div>
              <button
                onClick={runResearch}
                disabled={loading || (!activeEntry && !query.trim())}
                className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:scale-[1.02] disabled:opacity-40 disabled:hover:scale-100 whitespace-nowrap"
                style={{
                  background: `linear-gradient(135deg, ${GOLD}, ${GOLD}cc)`,
                  color: DEEP,
                }}
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                {loading ? "Researching..." : "Research"}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div
              className="flex items-center gap-2 p-3 rounded-lg text-sm"
              style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", color: "#ef4444" }}
            >
              <AlertTriangle className="w-4 h-4 flex-shrink-0" />
              {error}
            </div>
          )}

          {/* Result */}
          {currentAnswer && (
            <div className="rounded-xl p-5 space-y-4" style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
              {/* Result header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: `${GOLD}80` }}>
                    Research result
                  </p>
                  <p className="text-sm font-semibold text-white/70 leading-snug">{currentQuery}</p>
                </div>

                {/* Toolbar */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  {/* Confidence toggle */}
                  <button
                    onClick={() => setShowConfidence(!showConfidence)}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all"
                    style={{
                      color: showConfidence ? GOLD : "rgba(255,255,255,0.4)",
                      background: showConfidence ? `${GOLD}12` : "transparent",
                      border: `1px solid ${showConfidence ? `${GOLD}30` : BORDER}`,
                    }}
                    title="Toggle confidence indicators"
                  >
                    <ShieldCheck className="w-3 h-3" />
                    Confidence
                  </button>

                  {/* Save to documents */}
                  <button
                    onClick={saveToDocuments}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all hover:scale-105"
                    style={{
                      color: saved ? "#22c55e" : "rgba(255,255,255,0.5)",
                      background: saved ? "rgba(34,197,94,0.08)" : "transparent",
                      border: `1px solid ${saved ? "rgba(34,197,94,0.25)" : BORDER}`,
                    }}
                    title="Save to Documents"
                  >
                    {saved ? <Check className="w-3 h-3" /> : <Save className="w-3 h-3" />}
                    {saved ? "Saved" : "Save"}
                  </button>

                  {/* Copy */}
                  <button
                    onClick={copyAnswer}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all hover:scale-105"
                    style={{
                      color: copied ? "#22c55e" : "rgba(255,255,255,0.5)",
                      background: copied ? "rgba(34,197,94,0.08)" : "transparent",
                      border: `1px solid ${copied ? "rgba(34,197,94,0.25)" : BORDER}`,
                    }}
                    title="Copy answer"
                  >
                    {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    {copied ? "Copied" : "Copy"}
                  </button>

                  {/* Clear active */}
                  {activeEntry && (
                    <button
                      onClick={() => setActiveEntry(null)}
                      className="p-1.5 rounded-md transition-all hover:bg-white/5"
                      title="Close"
                    >
                      <X className="w-3.5 h-3.5 text-white/30" />
                    </button>
                  )}
                </div>
              </div>

              {/* Confidence legend (when enabled) */}
              {showConfidence && (
                <div className="flex flex-wrap gap-3 py-2 border-y" style={{ borderColor: BORDER }}>
                  {(["high", "medium", "low"] as const).map((level) => {
                    const cfg = CONFIDENCE_CONFIG[level];
                    const Icon = cfg.Icon;
                    return (
                      <div key={level} className="flex items-center gap-1.5">
                        <Icon className="w-3 h-3" style={{ color: cfg.color }} />
                        <span className="text-[10px] font-medium" style={{ color: "rgba(255,255,255,0.40)" }}>
                          {cfg.label}
                        </span>
                      </div>
                    );
                  })}
                  <span className="text-[10px] text-white/20 italic ml-auto">
                    Inline badges on uncertain claims only
                  </span>
                </div>
              )}

              {/* Answer + citations */}
              <AnswerDisplay
                answer={currentAnswer}
                citations={currentCitations}
                showConfidence={showConfidence}
              />

              {/* Citation format row */}
              {currentCitations.length > 0 && (
                <CitationFormatRow citations={currentCitations} query={currentQuery} />
              )}
            </div>
          )}

          {/* Empty state */}
          {!currentAnswer && !loading && !error && (
            <div className="text-center py-16 space-y-3">
              <FileText className="w-10 h-10 mx-auto text-white/10" />
              <p className="text-sm text-white/25">Enter a research question above to get started.</p>
              <p className="text-xs text-white/15">Results include source citations, confidence scoring, and save to documents.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Citation format exporter ─────────────────────────────────────────────────

function CitationFormatRow({ citations, query }: { citations: Citation[]; query: string }) {
  const [format, setFormat] = useState<"apa" | "mla" | "url">("url");
  const [copied, setCopied] = useState(false);

  const FORMATS = [
    { key: "url" as const, label: "URL" },
    { key: "apa" as const, label: "APA" },
    { key: "mla" as const, label: "MLA" },
  ];

  const year = new Date().getFullYear();

  function formatCitation(c: Citation): string {
    if (!c.url) return c.text;
    const host = c.text;
    if (format === "url") return c.url;
    if (format === "apa") return `${host}. (${year}). Retrieved from ${c.url}`;
    if (format === "mla") return `"${query}." ${host}, ${year}, ${c.url}.`;
    return c.url;
  }

  const formatted = citations.map((c) => `${c.index}. ${formatCitation(c)}`).join("\n");

  async function copy() {
    try {
      await navigator.clipboard.writeText(formatted);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  }

  return (
    <div className="rounded-lg p-3 space-y-2" style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${BORDER}` }}>
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-bold tracking-widest uppercase text-white/30">
          Export citations as
        </p>
        <div className="flex items-center gap-1">
          {FORMATS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFormat(f.key)}
              className="px-2 py-1 rounded text-[10px] font-semibold transition-colors"
              style={{
                color: format === f.key ? GOLD : "rgba(255,255,255,0.35)",
                background: format === f.key ? `${GOLD}18` : "transparent",
              }}
            >
              {f.label}
            </button>
          ))}
          <button
            onClick={copy}
            className="flex items-center gap-1 ml-2 px-2 py-1 rounded text-[10px] font-semibold transition-all"
            style={{
              color: copied ? "#22c55e" : "rgba(255,255,255,0.4)",
              background: copied ? "rgba(34,197,94,0.08)" : "transparent",
            }}
          >
            {copied ? <Check className="w-2.5 h-2.5" /> : <Copy className="w-2.5 h-2.5" />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>
      <pre className="text-[10px] text-white/35 font-mono leading-relaxed whitespace-pre-wrap break-all">
        {formatted || "No external URLs detected in this answer."}
      </pre>
    </div>
  );
}
