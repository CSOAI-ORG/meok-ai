"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { Search, Brain, Database } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// ── Brand tokens ──────────────────────────────────────────────────
const DEEP = "#0a0a0f";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";
const GOLD = "#c9a84c";

interface MemoryResult {
  id: string;
  content: string;
  type: "episodic" | "semantic";
  created_at: string;
  tags: string[];
}

function formatDate(iso: string): string {
  const date = new Date(iso);
  const today = new Date();
  const yesterday = new Date(today.getTime() - 86_400_000);
  if (date.toDateString() === today.toDateString()) return "Today";
  if (date.toDateString() === yesterday.toDateString()) return "Yesterday";
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function TypeBadge({ type }: { type: "episodic" | "semantic" }) {
  const isEpisodic = type === "episodic";
  return (
    <Badge
      variant="outline"
      className={`text-xs font-medium ${
        isEpisodic
          ? "border-purple-400/30 text-purple-300 bg-purple-500/10"
          : "border-cyan-400/30 text-cyan-300 bg-cyan-500/10"
      }`}
    >
      {type}
    </Badge>
  );
}

function MemoryCard({ memory, index }: { memory: MemoryResult; index: number }) {
  const preview =
    memory.content.length > 160 ? memory.content.slice(0, 160) + "…" : memory.content;

  return (
    <div
      className="rounded-2xl p-5 transition-all duration-200 hover:border-white/15"
      style={{
        background: SURFACE,
        border: `1px solid ${BORDER}`,
        animation: `fadeSlideUp 0.35s ease both ${index * 0.05}s`,
      }}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <TypeBadge type={memory.type} />
        <span className="text-[11px] text-white/30 shrink-0">{formatDate(memory.created_at)}</span>
      </div>

      <p className="text-sm leading-relaxed text-white/70 mb-4">{preview}</p>

      <div className="flex flex-wrap gap-2">
        {memory.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] px-2 py-0.5 rounded-full border border-white/10 text-white/50 bg-white/5"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function EmptyState({ hasQuery }: { hasQuery: boolean }) {
  return (
    <div
      className="rounded-2xl p-12 flex flex-col items-center text-center"
      style={{
        background: SURFACE,
        border: `1px solid ${BORDER}`,
        animation: "fadeSlideUp 0.4s ease both",
      }}
    >
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
        style={{ background: "rgba(201,168,76,0.08)" }}
      >
        <Brain className="w-8 h-8" style={{ color: GOLD, opacity: 0.6 }} />
      </div>
      <h3 className="text-base font-semibold text-white mb-1">
        {hasQuery ? "No memories found" : "Memory Vault"}
      </h3>
      <p className="text-sm max-w-xs text-white/40">
        {hasQuery
          ? "Try a different search term to find what you're looking for."
          : "Start typing to search through your memories."}
      </p>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="rounded-2xl p-5 animate-pulse"
          style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
        >
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="h-5 w-20 rounded-full bg-white/5" />
            <div className="h-3 w-16 rounded bg-white/5" />
          </div>
          <div className="space-y-2">
            <div className="h-3 rounded bg-white/5 w-full" />
            <div className="h-3 rounded bg-white/5 w-[85%]" />
          </div>
          <div className="flex gap-2 mt-4">
            <div className="h-4 w-12 rounded-full bg-white/5" />
            <div className="h-4 w-14 rounded-full bg-white/5" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function MemoryVaultPage() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [results, setResults] = useState<MemoryResult[]>([]);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => setDebouncedQuery(query.trim()), 300);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query]);

  const fetchResults = useCallback(async (q: string) => {
    if (!q) {
      setResults([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`/api/memory/search?q=${encodeURIComponent(q)}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setResults(Array.isArray(data.results) ? data.results : []);
    } catch (err) {
      console.error("Memory search failed:", err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchResults(debouncedQuery);
  }, [debouncedQuery, fetchResults]);

  const hasQuery = debouncedQuery.length > 0;
  const isEmpty = !loading && results.length === 0;

  return (
    <>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="min-h-screen p-6 md:p-8" style={{ background: DEEP, color: "white" }}>
        {/* Header */}
        <div className="mb-8" style={{ animation: "fadeSlideUp 0.3s ease both" }}>
          <div className="flex items-center gap-3 mb-2">
            <Database className="w-6 h-6" style={{ color: GOLD }} />
            <h1 className="text-2xl font-bold text-white">Memory Vault</h1>
          </div>
          <p className="text-sm text-white/40">Search and explore your stored memories.</p>
        </div>

        {/* Search */}
        <div className="mb-6" style={{ animation: "fadeSlideUp 0.3s ease both 0.05s" }}>
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <Input
              type="text"
              placeholder="Search memories…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 py-2.5 h-11 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/30"
            />
          </div>
        </div>

        {/* Results */}
        <div className="max-w-3xl" style={{ animation: "fadeSlideUp 0.35s ease both 0.1s" }}>
          {loading ? (
            <LoadingSkeleton />
          ) : isEmpty ? (
            <EmptyState hasQuery={hasQuery} />
          ) : (
            <div className="space-y-4">
              {results.map((memory, idx) => (
                <MemoryCard key={memory.id} memory={memory} index={idx} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
