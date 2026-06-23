"use client";

import { useEffect, useState, useRef } from "react";
import {
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  Loader2,
  Server,
  ExternalLink,
  Cpu,
  Eye,
  MessageSquare,
  Code,
  Sparkles,
  Check,
  X,
  RefreshCw,
} from "lucide-react";

// ── Brand tokens ──────────────────────────────────────────────────
const GOLD = "#c9a84c";
const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";

const SOURCE_COLORS: Record<string, string> = {
  openrouter: "#c9a84c",
  huggingface: "#ff9d00",
  ollama: "#60a5fa",
  mcp: "#a78bfa",
};

const SOURCE_LABELS: Record<string, string> = {
  openrouter: "OpenRouter",
  huggingface: "HuggingFace",
  ollama: "Ollama",
  mcp: "MCP",
};

const CAPABILITY_ICONS: Record<string, React.ReactNode> = {
  chat: <MessageSquare className="w-3 h-3" />,
  code: <Code className="w-3 h-3" />,
  vision: <Eye className="w-3 h-3" />,
  reasoning: <Sparkles className="w-3 h-3" />,
};

// ── Types ─────────────────────────────────────────────────────────
interface Model {
  id: string;
  name: string;
  provider: string;
  source: string;
  context_length: number | null;
  pricing: { prompt: number; completion: number } | null;
  open_source: boolean;
  capabilities: string[];
  downloads: number | null;
  size_bytes: number | null;
  updated_at: string;
}

interface MCPServer {
  name: string;
  description: string;
  tools: string[];
  source_url: string;
  category: string;
}

interface Pagination {
  total: number;
  limit: number;
  offset: number;
  has_more: boolean;
}

interface RegistryResponse {
  models: Model[];
  mcp_servers: MCPServer[];
  pagination: Pagination;
  sources: Record<string, number>;
  fetched_at: string;
}

// ── Helpers ───────────────────────────────────────────────────────
function formatContextLength(len: number | null): string {
  if (!len) return "—";
  if (len >= 1_000_000) return `${(len / 1_000_000).toFixed(1)}M`;
  if (len >= 1_000) return `${Math.round(len / 1_000)}K`;
  return String(len);
}

function formatPrice(price: number | null | undefined): string {
  if (price == null) return "—";
  const perMillion = price * 1_000_000;
  if (perMillion < 0.01) return "<$0.01";
  if (perMillion >= 100) return `$${Math.round(perMillion)}`;
  return `$${perMillion.toFixed(2)}`;
}

function formatTimestamp(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

// ── Components ────────────────────────────────────────────────────

function SourceBadge({ source }: { source: string }) {
  const color = SOURCE_COLORS[source] ?? "#888";
  const label = SOURCE_LABELS[source] ?? source;
  return (
    <span
      className="text-[11px] font-medium px-2 py-0.5 rounded-full border"
      style={{
        color,
        borderColor: color + "40",
        backgroundColor: color + "10",
      }}
    >
      {label}
    </span>
  );
}

function CapabilityPill({ cap }: { cap: string }) {
  const icon = CAPABILITY_ICONS[cap];
  return (
    <span className="inline-flex items-center gap-1 text-[10px] text-white/50 bg-white/5 rounded px-1.5 py-0.5 capitalize">
      {icon}
      {cap}
    </span>
  );
}

function SkeletonCard() {
  return (
    <div
      className="rounded-xl p-5 animate-pulse"
      style={{ backgroundColor: SURFACE, border: `1px solid ${BORDER}` }}
    >
      <div className="h-5 w-3/4 bg-white/10 rounded mb-3" />
      <div className="h-3 w-1/2 bg-white/5 rounded mb-4" />
      <div className="flex gap-2 mb-4">
        <div className="h-5 w-16 bg-white/5 rounded-full" />
        <div className="h-5 w-12 bg-white/5 rounded-full" />
      </div>
      <div className="flex gap-4">
        <div className="h-3 w-16 bg-white/5 rounded" />
        <div className="h-3 w-20 bg-white/5 rounded" />
      </div>
    </div>
  );
}

function ModelCard({ model }: { model: Model }) {
  return (
    <div
      className="rounded-xl p-5 transition-all duration-200 hover:border-white/15 group"
      style={{ backgroundColor: SURFACE, border: `1px solid ${BORDER}` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-1">
        <h3 className="text-white font-semibold text-sm leading-tight line-clamp-2 flex-1">
          {model.name}
        </h3>
        {model.open_source && (
          <span
            className="shrink-0 text-[10px] font-semibold px-1.5 py-0.5 rounded"
            style={{ color: GOLD, backgroundColor: GOLD + "15" }}
          >
            OSS
          </span>
        )}
      </div>

      {/* Provider + Source */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-white/40 text-xs truncate">{model.provider}</span>
        <SourceBadge source={model.source} />
      </div>

      {/* Capabilities */}
      {model.capabilities.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3">
          {model.capabilities.map((cap) => (
            <CapabilityPill key={cap} cap={cap} />
          ))}
        </div>
      )}

      {/* Stats row */}
      <div
        className="flex items-center gap-4 pt-3 text-xs text-white/40"
        style={{ borderTop: `1px solid ${BORDER}` }}
      >
        {model.context_length && (
          <div className="flex items-center gap-1">
            <Cpu className="w-3 h-3" />
            <span>{formatContextLength(model.context_length)} ctx</span>
          </div>
        )}
        {model.pricing && (
          <div className="flex flex-col">
            <span className="text-white/30 text-[10px]">$/1M tokens</span>
            <span>
              {formatPrice(model.pricing.prompt)} in &middot;{" "}
              {formatPrice(model.pricing.completion)} out
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function MCPServerCard({ server }: { server: MCPServer }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="rounded-xl p-5 transition-all duration-200"
      style={{ backgroundColor: SURFACE, border: `1px solid ${BORDER}` }}
    >
      <div className="flex items-start justify-between gap-2 mb-1">
        <div className="flex items-center gap-2">
          <Server className="w-4 h-4 text-purple-400 shrink-0" />
          <h3 className="text-white font-semibold text-sm">{server.name}</h3>
        </div>
        {server.source_url && (
          <a
            href={server.source_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white/60 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>

      <p className="text-white/50 text-xs mb-2 line-clamp-2">{server.description}</p>

      {server.category && (
        <span className="inline-block text-[10px] text-purple-300/70 bg-purple-500/10 rounded px-1.5 py-0.5 mb-2">
          {server.category}
        </span>
      )}

      {server.tools.length > 0 && (
        <div>
          <button type="button"
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-[11px] text-white/30 hover:text-white/50 transition-colors"
          >
            {expanded ? (
              <ChevronUp className="w-3 h-3" />
            ) : (
              <ChevronDown className="w-3 h-3" />
            )}
            {server.tools.length} tool{server.tools.length !== 1 && "s"}
          </button>
          {expanded && (
            <div className="mt-2 flex flex-wrap gap-1">
              {server.tools.map((t) => (
                <code
                  key={t}
                  className="text-[10px] text-white/40 bg-white/5 rounded px-1.5 py-0.5"
                >
                  {t}
                </code>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Structured data ───────────────────────────────────────────────
const REGISTRY_BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" },
    { "@type": "ListItem", position: 2, name: "Model Registry", item: "https://meok.ai/registry" },
  ],
};

const REGISTRY_WEBPAGE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Model Registry — MEOK AI",
  url: "https://meok.ai/registry",
  description: "Browse AI models and MCP servers aggregated from OpenRouter, HuggingFace, and Ollama. Filter by source, capability, context length, pricing, and open-source licence.",
};

const REGISTRY_FAQ = [
  { q: "Where does the registry data come from?", a: "The registry aggregates model metadata from multiple public sources — OpenRouter, HuggingFace, and Ollama — into a single searchable view. MCP servers are listed alongside the models. Each model card shows its source, and the stats bar at the top shows how many entries came from each source plus the last refresh time." },
  { q: "How do I filter for open-source models only?", a: "Use the 'Open Source' toggle in the filter bar. When enabled it restricts results to models flagged as open source. You can combine it with the source filter (OpenRouter / HuggingFace / Ollama), the capability filter (chat, code, vision, reasoning), and the free-text search box to narrow down quickly." },
  { q: "What do the pricing figures mean?", a: "Pricing is shown per one million tokens, split into prompt (input) and completion (output) cost in US dollars. Values under $0.01 per million are shown as '<$0.01'. Models without published pricing — typically locally-run Ollama and many HuggingFace models — show a dash instead." },
  { q: "How often is the registry updated?", a: "The data is refreshed from upstream sources on a schedule; the timestamp in the stats bar shows when the currently displayed snapshot was fetched. Use the Retry / filter controls to re-query the API for the latest cached snapshot." },
];

const REGISTRY_FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: REGISTRY_FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

// ── Main Page ─────────────────────────────────────────────────────

export default function RegistryPage() {
  // State
  const [models, setModels] = useState<Model[]>([]);
  const [mcpServers, setMcpServers] = useState<MCPServer[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [sources, setSources] = useState<Record<string, number>>({});
  const [fetchedAt, setFetchedAt] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Filters
  const [search, setSearch] = useState("");
  const [sourceFilter, setSourceFilter] = useState("");
  const [capabilityFilter, setCapabilityFilter] = useState("");
  const [openSourceOnly, setOpenSourceOnly] = useState(false);
  const [mcpExpanded, setMcpExpanded] = useState(false);

  const debouncedSearch = useDebounce(search, 300);

  // Page title
  useEffect(() => {
    document.title = "Model Registry — MEOK AI";
  }, []);

  // Fetch models — inline in useEffect for correct closure + StrictMode compat
  const fetchIdRef = useRef(0);

  useEffect(() => {
    const fetchId = ++fetchIdRef.current;
    let cancelled = false;

    setLoading(true);
    setError(null);

    const params = new URLSearchParams();
    if (debouncedSearch) params.set("search", debouncedSearch);
    if (sourceFilter) params.set("source", sourceFilter);
    if (capabilityFilter) params.set("capability", capabilityFilter);
    if (openSourceOnly) params.set("open_source", "true");
    params.set("limit", "50");
    params.set("offset", "0");

    fetch(`/api/registry?${params.toString()}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Registry API returned ${res.status}`);
        return res.json();
      })
      .then((data: RegistryResponse) => {
        if (cancelled || fetchId !== fetchIdRef.current) return;
        setModels(data.models);
        setMcpServers(data.mcp_servers ?? []);
        setPagination(data.pagination);
        setSources(data.sources ?? {});
        if (data.fetched_at) setFetchedAt(data.fetched_at);
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled || fetchId !== fetchIdRef.current) return;
        setError(err instanceof Error ? err.message : "Failed to load registry");
        setLoading(false);
      });

    return () => { cancelled = true; };
  }, [debouncedSearch, sourceFilter, capabilityFilter, openSourceOnly]);

  const handleLoadMore = () => {
    if (!pagination || !pagination.has_more || loadingMore) return;
    const nextOffset = pagination.offset + pagination.limit;
    setLoadingMore(true);

    const params = new URLSearchParams();
    if (debouncedSearch) params.set("search", debouncedSearch);
    if (sourceFilter) params.set("source", sourceFilter);
    if (capabilityFilter) params.set("capability", capabilityFilter);
    if (openSourceOnly) params.set("open_source", "true");
    params.set("limit", "50");
    params.set("offset", String(nextOffset));

    fetch(`/api/registry?${params.toString()}`)
      .then((res) => res.json())
      .then((data: RegistryResponse) => {
        setModels((prev) => [...prev, ...data.models]);
        setPagination(data.pagination);
      })
      .catch(() => {})
      .finally(() => setLoadingMore(false));
  };

  const totalModels = pagination?.total ?? 0;

  // ── Render ────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen" style={{ backgroundColor: DEEP }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(REGISTRY_BREADCRUMB_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(REGISTRY_WEBPAGE_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(REGISTRY_FAQ_JSONLD) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ── Header ─────────────────────────────────── */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">
            Model Registry
          </h1>
          <p className="text-white/40 text-sm">
            Browse AI models and MCP servers aggregated from multiple sources.
          </p>
        </div>

        {/* ── Stats Bar ──────────────────────────────── */}
        <div
          className="rounded-xl p-4 mb-6 flex flex-wrap items-center gap-4 text-sm"
          style={{ backgroundColor: SURFACE, border: `1px solid ${BORDER}` }}
        >
          {Object.entries(sources).map(([src, count]) => (
            <div key={src} className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: SOURCE_COLORS[src] ?? "#888" }}
              />
              <span className="text-white/60">
                {SOURCE_LABELS[src] ?? src}
              </span>
              <span className="text-white font-medium">{count.toLocaleString()}</span>
            </div>
          ))}
          {Object.keys(sources).length > 0 && (
            <div className="ml-auto text-white/30 text-xs flex items-center gap-1">
              <RefreshCw className="w-3 h-3" />
              {fetchedAt ? formatTimestamp(fetchedAt) : "—"}
            </div>
          )}
        </div>

        {/* ── Filter Bar ─────────────────────────────── */}
        <div
          className="rounded-xl p-4 mb-6 flex flex-wrap items-center gap-3"
          style={{ backgroundColor: SURFACE, border: `1px solid ${BORDER}` }}
        >
          {/* Search */}
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              type="text"
              placeholder="Search models..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg text-sm text-white placeholder-white/30 outline-none focus:ring-1 transition-all"
              style={{
                backgroundColor: DEEP,
                border: `1px solid ${BORDER}`,
              }}
              onFocus={(e) =>
                (e.target.style.borderColor = GOLD + "60")
              }
              onBlur={(e) =>
                (e.target.style.borderColor = BORDER)
              }
            />
          </div>

          {/* Source filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30 pointer-events-none" />
            <select
              value={sourceFilter}
              onChange={(e) => setSourceFilter(e.target.value)}
              className="appearance-none pl-9 pr-8 py-2 rounded-lg text-sm text-white outline-none cursor-pointer"
              style={{
                backgroundColor: DEEP,
                border: `1px solid ${BORDER}`,
              }}
            >
              <option value="">All Sources</option>
              <option value="openrouter">OpenRouter</option>
              <option value="huggingface">HuggingFace</option>
              <option value="ollama">Ollama</option>
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30 pointer-events-none" />
          </div>

          {/* Capability filter */}
          <div className="relative">
            <select
              value={capabilityFilter}
              onChange={(e) => setCapabilityFilter(e.target.value)}
              className="appearance-none pl-4 pr-8 py-2 rounded-lg text-sm text-white outline-none cursor-pointer"
              style={{
                backgroundColor: DEEP,
                border: `1px solid ${BORDER}`,
              }}
            >
              <option value="">All Capabilities</option>
              <option value="chat">Chat</option>
              <option value="code">Code</option>
              <option value="vision">Vision</option>
              <option value="reasoning">Reasoning</option>
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30 pointer-events-none" />
          </div>

          {/* Open-source toggle */}
          <button type="button"
            onClick={() => setOpenSourceOnly(!openSourceOnly)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all"
            style={{
              backgroundColor: openSourceOnly ? GOLD + "20" : DEEP,
              border: `1px solid ${openSourceOnly ? GOLD + "50" : BORDER}`,
              color: openSourceOnly ? GOLD : "rgba(255,255,255,0.5)",
            }}
          >
            {openSourceOnly ? (
              <Check className="w-3.5 h-3.5" />
            ) : (
              <X className="w-3.5 h-3.5 opacity-40" />
            )}
            Open Source
          </button>
        </div>

        {/* ── Results count ──────────────────────────── */}
        {!loading && !error && (
          <div className="mb-4 text-xs text-white/30">
            Showing {models.length} of {totalModels.toLocaleString()} model
            {totalModels !== 1 && "s"}
            {debouncedSearch && (
              <span>
                {" "}
                matching &ldquo;
                <span className="text-white/50">{debouncedSearch}</span>
                &rdquo;
              </span>
            )}
          </div>
        )}

        {/* ── Error State ────────────────────────────── */}
        {error && (
          <div
            className="rounded-xl p-8 text-center mb-6"
            style={{ backgroundColor: SURFACE, border: `1px solid ${BORDER}` }}
          >
            <div className="text-red-400 text-sm mb-3">{error}</div>
            <button type="button"
              onClick={() => { setSearch(""); setSourceFilter(""); setCapabilityFilter(""); setOpenSourceOnly(false); }}
              className="text-sm px-4 py-2 rounded-lg transition-colors"
              style={{
                color: GOLD,
                border: `1px solid ${GOLD}40`,
                backgroundColor: GOLD + "10",
              }}
            >
              Retry
            </button>
          </div>
        )}

        {/* ── Loading Skeleton ───────────────────────── */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {/* ── Model Grid ─────────────────────────────── */}
        {!loading && !error && models.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {models.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>
        )}

        {/* ── Empty State ────────────────────────────── */}
        {!loading && !error && models.length === 0 && (
          <div
            className="rounded-xl p-12 text-center"
            style={{ backgroundColor: SURFACE, border: `1px solid ${BORDER}` }}
          >
            <Search className="w-8 h-8 text-white/20 mx-auto mb-3" />
            <p className="text-white/40 text-sm mb-1">No models found</p>
            <p className="text-white/25 text-xs">
              Try adjusting your search or filters.
            </p>
          </div>
        )}

        {/* ── Load More ──────────────────────────────── */}
        {!loading && pagination?.has_more && (
          <div className="flex justify-center mt-8">
            <button type="button"
              onClick={handleLoadMore}
              disabled={loadingMore}
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all disabled:opacity-50"
              style={{
                color: GOLD,
                border: `1px solid ${GOLD}40`,
                backgroundColor: GOLD + "10",
              }}
            >
              {loadingMore ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Loading...
                </>
              ) : (
                <>Load More</>
              )}
            </button>
          </div>
        )}

        {/* ── MCP Servers Section ────────────────────── */}
        {mcpServers.length > 0 && (
          <div className="mt-12">
            <button type="button"
              onClick={() => setMcpExpanded(!mcpExpanded)}
              className="flex items-center gap-3 mb-4 group"
            >
              <div className="flex items-center gap-2">
                <Server className="w-5 h-5 text-purple-400" />
                <h2 className="text-lg font-semibold text-white">
                  MCP Servers
                </h2>
                <span className="text-white/30 text-sm">
                  ({mcpServers.length})
                </span>
              </div>
              {mcpExpanded ? (
                <ChevronUp className="w-4 h-4 text-white/30 group-hover:text-white/50 transition-colors" />
              ) : (
                <ChevronDown className="w-4 h-4 text-white/30 group-hover:text-white/50 transition-colors" />
              )}
            </button>

            {mcpExpanded && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {mcpServers.map((server) => (
                  <MCPServerCard key={server.name} server={server} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── FAQ ────────────────────────────────────── */}
        <div className="mt-16">
          <h2 className="text-lg font-semibold text-white mb-4">Frequently asked</h2>
          <div className="grid grid-cols-1 gap-3">
            {REGISTRY_FAQ.map((f) => (
              <details
                key={f.q}
                className="rounded-xl p-5"
                style={{ backgroundColor: SURFACE, border: `1px solid ${BORDER}` }}
              >
                <summary className="text-sm font-medium text-white/90 cursor-pointer">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm text-white/50 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* ── Footer ─────────────────────────────────── */}
        <div className="mt-16 pb-8 text-center text-white/20 text-xs">
          MEOK AI Model Registry &middot; Data aggregated from OpenRouter,
          HuggingFace, and Ollama
        </div>
      </div>
    </div>
  );
}
