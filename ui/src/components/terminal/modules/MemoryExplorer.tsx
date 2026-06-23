"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { callTool } from "@/lib/api";

interface MemoryEpisode {
  id: string;
  type: "episodic" | "semantic" | "procedural" | "foundational";
  importance: number;
  content: string;
  created_at?: string;
  tags?: string[];
  summary?: string;
  emotional_valence?: number;
}

interface QueryResult {
  episodes: MemoryEpisode[];
  total: number;
}

const PAGE_SIZE = 10;
const TOTAL_EPISODES = 711;

export function MemoryExplorer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [episodes, setEpisodes] = useState<MemoryEpisode[]>([]);
  const [selectedEpisode, setSelectedEpisode] = useState<MemoryEpisode | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(TOTAL_EPISODES / PAGE_SIZE));
  const [totalCount, setTotalCount] = useState(TOTAL_EPISODES);
  const searchRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fetchMemories = useCallback(async (query: string, pageNum: number) => {
    setLoading(true);
    setError(null);
    try {
      const result = await callTool<QueryResult | MemoryEpisode[]>("query_memories", {
        query: query || "recent",
        limit: PAGE_SIZE,
        offset: (pageNum - 1) * PAGE_SIZE,
      });

      let eps: MemoryEpisode[] = [];
      let total = TOTAL_EPISODES;

      if (Array.isArray(result)) {
        eps = result as MemoryEpisode[];
        total = eps.length;
      } else if (result && typeof result === "object") {
        const r = result as QueryResult;
        eps = r.episodes ?? [];
        total = r.total ?? eps.length;
      }

      setEpisodes(eps);
      setTotalCount(total);
      setTotalPages(Math.max(1, Math.ceil(total / PAGE_SIZE)));

      if (eps.length > 0 && !selectedEpisode) {
        setSelectedEpisode(eps[0]);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch memories");
      setEpisodes([]);
    } finally {
      setLoading(false);
    }
  }, [selectedEpisode]);

  useEffect(() => {
    fetchMemories("", 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setPage(1);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      fetchMemories(value, 1);
    }, 400);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
    fetchMemories(searchTerm, newPage);
  };

  const typeColor = (type: string) => {
    switch (type) {
      case "episodic": return "#F59E0B";
      case "semantic": return "#10B981";
      case "procedural": return "#6B7280";
      case "foundational": return "#EF4444";
      default: return "#6B7280";
    }
  };

  const importanceBar = (imp: number) => {
    const filled = Math.round(Math.min(1, imp) * 8);
    return "█".repeat(filled) + "░".repeat(8 - filled);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "12px 16px",
          borderBottom: "1px solid #1a1a2e",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          background: "#050507",
          flexShrink: 0,
        }}
      >
        <span style={{ color: "#E5E7EB", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em" }}>
          MEMORY EXPLORER
        </span>
        <span style={{ color: "#6B7280", fontSize: "10px" }}>
          — {totalCount} episodes
        </span>
        <div style={{ flex: 1 }} />
        <input
          ref={searchRef}
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="search memories..."
          style={{
            background: "#0a0a0f",
            border: "1px solid #2d2d4e",
            color: "#E5E7EB",
            fontFamily: "'JetBrains Mono', 'Courier New', monospace",
            fontSize: "11px",
            padding: "4px 8px",
            outline: "none",
            width: "200px",
          }}
        />
        <button type="button"
          onClick={() => fetchMemories(searchTerm, page)}
          disabled={loading}
          style={termBtnStyle(loading ? "#374151" : "#6B7280", loading)}
        >
          ↻
        </button>
      </div>

      {/* Body: list + detail */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* Episode list */}
        <div
          style={{
            width: "340px",
            flexShrink: 0,
            borderRight: "1px solid #1a1a2e",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Column headers */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "6px 12px",
              borderBottom: "1px solid #1a1a2e",
              fontSize: "9px",
              color: "#374151",
              letterSpacing: "0.1em",
              background: "#050507",
              flexShrink: 0,
            }}
          >
            <span style={{ width: "110px" }}>EPISODE</span>
            <span style={{ width: "50px" }}>SCORE</span>
            <span style={{ flex: 1 }}>TYPE</span>
          </div>

          {/* Error */}
          {error && (
            <div
              style={{
                padding: "8px 12px",
                color: "#F97316",
                fontSize: "10px",
                borderBottom: "1px solid #1a1a2e",
                background: "rgba(245, 158, 11, 0.05)",
              }}
            >
              ⚠ {error}
            </div>
          )}

          {/* List */}
          <div style={{ flex: 1, overflowY: "auto" }}>
            {loading ? (
              <div style={{ padding: "16px 12px", color: "#374151", fontSize: "10px" }}>
                Loading...
              </div>
            ) : episodes.length === 0 ? (
              <div style={{ padding: "16px 12px", color: "#374151", fontSize: "10px" }}>
                No memories found
              </div>
            ) : (
              episodes.map((ep) => (
                <div
                  key={ep.id}
                  onClick={() => setSelectedEpisode(ep)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "7px 12px",
                    borderBottom: "1px solid #0a0a0f",
                    cursor: "pointer",
                    background:
                      selectedEpisode?.id === ep.id
                        ? "rgba(245, 158, 11, 0.06)"
                        : "transparent",
                    borderLeft:
                      selectedEpisode?.id === ep.id
                        ? "2px solid #F59E0B"
                        : "2px solid transparent",
                    transition: "all 0.1s",
                  }}
                >
                  <span
                    style={{
                      fontSize: "10px",
                      color: selectedEpisode?.id === ep.id ? "#F59E0B" : "#E5E7EB",
                      width: "110px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {selectedEpisode?.id === ep.id ? "◉" : "○"} {ep.id}
                  </span>
                  <span style={{ fontSize: "10px", color: "#10B981", width: "50px" }}>
                    [{ep.importance.toFixed(2)}]
                  </span>
                  <span
                    style={{
                      fontSize: "9px",
                      color: typeColor(ep.type),
                      flex: 1,
                    }}
                  >
                    {ep.type}
                  </span>
                </div>
              ))
            )}
          </div>

          {/* Pagination */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "6px 12px",
              borderTop: "1px solid #1a1a2e",
              fontSize: "10px",
              color: "#6B7280",
              background: "#050507",
              flexShrink: 0,
            }}
          >
            <button type="button"
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1 || loading}
              style={termBtnStyle(page === 1 || loading ? "#374151" : "#6B7280", page === 1 || loading)}
            >
              ← prev
            </button>
            <span>
              {page}/{totalPages}
            </span>
            <button type="button"
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages || loading}
              style={termBtnStyle(page === totalPages || loading ? "#374151" : "#6B7280", page === totalPages || loading)}
            >
              next →
            </button>
          </div>
        </div>

        {/* Episode detail */}
        <div
          style={{
            flex: 1,
            padding: "14px 16px",
            overflowY: "auto",
            background: "#050507",
          }}
        >
          {selectedEpisode ? (
            <EpisodeDetail episode={selectedEpisode} importanceBar={importanceBar} typeColor={typeColor} />
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                color: "#374151",
                fontSize: "11px",
              }}
            >
              Select an episode to view details
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function EpisodeDetail({
  episode,
  importanceBar,
  typeColor,
}: {
  episode: MemoryEpisode;
  importanceBar: (imp: number) => string;
  typeColor: (type: string) => string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {/* ID + type */}
      <div style={{ borderBottom: "1px solid #1a1a2e", paddingBottom: "10px" }}>
        <div style={{ fontSize: "12px", color: "#F59E0B", fontWeight: 600, marginBottom: "4px" }}>
          {episode.id}
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <span style={{ fontSize: "10px", color: typeColor(episode.type) }}>
            {episode.type.toUpperCase()}
          </span>
          {episode.created_at && (
            <span style={{ fontSize: "10px", color: "#374151" }}>
              {episode.created_at.slice(0, 10)}
            </span>
          )}
        </div>
      </div>

      {/* Importance bar */}
      <div>
        <div style={sectionLabel}>IMPORTANCE</div>
        <div style={{ marginTop: "6px", display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ color: "#F59E0B", letterSpacing: "1px", fontSize: "12px" }}>
            {importanceBar(episode.importance)}
          </span>
          <span style={{ color: "#E5E7EB", fontSize: "11px" }}>
            {episode.importance.toFixed(3)}
          </span>
        </div>
      </div>

      {/* Emotional valence */}
      {episode.emotional_valence !== undefined && (
        <div>
          <div style={sectionLabel}>EMOTIONAL VALENCE</div>
          <div style={{ marginTop: "6px", fontSize: "11px", color: episode.emotional_valence >= 0 ? "#10B981" : "#EF4444" }}>
            {episode.emotional_valence > 0 ? "+" : ""}{episode.emotional_valence.toFixed(3)}
          </div>
        </div>
      )}

      {/* Tags */}
      {episode.tags && episode.tags.length > 0 && (
        <div>
          <div style={sectionLabel}>TAGS</div>
          <div style={{ marginTop: "6px", display: "flex", flexWrap: "wrap", gap: "4px" }}>
            {episode.tags.map((tag, i) => (
              <span
                key={i}
                style={{
                  fontSize: "9px",
                  padding: "2px 6px",
                  border: "1px solid #2d2d4e",
                  color: "#6B7280",
                  letterSpacing: "0.05em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Summary */}
      {episode.summary && (
        <div>
          <div style={sectionLabel}>SUMMARY</div>
          <div
            style={{
              marginTop: "6px",
              fontSize: "11px",
              color: "#E5E7EB",
              lineHeight: "1.6",
              padding: "8px",
              background: "#0a0a0f",
              border: "1px solid #1a1a2e",
            }}
          >
            {episode.summary}
          </div>
        </div>
      )}

      {/* Content */}
      <div>
        <div style={sectionLabel}>CONTENT</div>
        <div
          style={{
            marginTop: "6px",
            fontSize: "11px",
            color: "#E5E7EB",
            lineHeight: "1.6",
            padding: "10px",
            background: "#0a0a0f",
            border: "1px solid #1a1a2e",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            maxHeight: "300px",
            overflowY: "auto",
          }}
        >
          {episode.content || <span style={{ color: "#374151" }}>[No content]</span>}
        </div>
      </div>
    </div>
  );
}

const sectionLabel: React.CSSProperties = {
  fontSize: "9px",
  letterSpacing: "0.12em",
  color: "#374151",
  fontWeight: 600,
  textTransform: "uppercase",
};

function termBtnStyle(color: string, disabled: boolean): React.CSSProperties {
  return {
    background: "none",
    border: `1px solid ${color}`,
    color: color,
    fontFamily: "'JetBrains Mono', 'Courier New', monospace",
    fontSize: "10px",
    padding: "3px 8px",
    cursor: disabled ? "not-allowed" : "pointer",
    letterSpacing: "0.05em",
  };
}
