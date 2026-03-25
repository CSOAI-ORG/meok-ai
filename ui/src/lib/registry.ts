/**
 * MEOK AI LABS — Self-Updating AI Registry
 *
 * Aggregates model data from OpenRouter, HuggingFace, and Ollama.
 * Includes a curated MCP server catalogue.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface RegistryModel {
  id: string;
  name: string;
  provider: string;
  source: 'openrouter' | 'huggingface' | 'ollama';
  context_length: number | null;
  pricing: { prompt: number; completion: number } | null;
  open_source: boolean;
  capabilities: string[];
  downloads: number | null;
  size_bytes: number | null;
  updated_at: string;
}

export interface RegistryMCP {
  name: string;
  description: string;
  tools: string[];
  source_url: string;
  category: string;
}

export interface RegistrySnapshot {
  models: RegistryModel[];
  mcp_servers: RegistryMCP[];
  fetched_at: string;
  sources: { openrouter: number; huggingface: number; ollama: number; mcp: number };
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const OPEN_SOURCE_KEYWORDS = [
  'llama',
  'mistral',
  'gemma',
  'qwen',
  'deepseek',
  'nemotron',
  'phi',
  'yi',
  'falcon',
  'starcoder',
  'codellama',
  'command-r',
  'dbrx',
  'olmo',
  'jamba',
  'arctic',
] as const;

const FETCH_TIMEOUT_MS = 15_000;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

async function fetchJSON<T>(url: string, init?: RequestInit): Promise<T> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const res = await fetch(url, {
      ...init,
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
        ...init?.headers,
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status} ${res.statusText} from ${url}`);
    }

    return (await res.json()) as T;
  } finally {
    clearTimeout(timeout);
  }
}

function isOpenSource(id: string): boolean {
  const lower = id.toLowerCase();
  return OPEN_SOURCE_KEYWORDS.some((kw) => lower.includes(kw));
}

function inferCapabilities(id: string): string[] {
  const lower = id.toLowerCase();
  const caps: string[] = ['chat'];

  if (lower.includes('code') || lower.includes('starcoder') || lower.includes('codellama')) {
    caps.push('code');
  }
  if (lower.includes('vision') || lower.includes('vl') || lower.includes('llava')) {
    caps.push('vision');
  }
  if (
    lower.includes('reason') ||
    lower.includes('o1') ||
    lower.includes('o3') ||
    lower.includes('r1') ||
    lower.includes('thinking')
  ) {
    caps.push('reasoning');
  }

  return caps;
}

function normalizeModelName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .trim();
}

// ---------------------------------------------------------------------------
// OpenRouter
// ---------------------------------------------------------------------------

interface OpenRouterResponse {
  data: Array<{
    id: string;
    name: string;
    context_length?: number;
    pricing?: { prompt: string; completion: string };
    created?: number;
  }>;
}

export async function fetchOpenRouterModels(): Promise<RegistryModel[]> {
  try {
    const data = await fetchJSON<OpenRouterResponse>(
      'https://openrouter.ai/api/v1/models',
    );

    return (data.data ?? []).map((m) => {
      const promptPrice = m.pricing?.prompt ? parseFloat(m.pricing.prompt) * 1_000_000 : 0;
      const completionPrice = m.pricing?.completion
        ? parseFloat(m.pricing.completion) * 1_000_000
        : 0;

      return {
        id: `openrouter:${m.id}`,
        name: m.name || m.id,
        provider: m.id.split('/')[0] ?? 'unknown',
        source: 'openrouter' as const,
        context_length: m.context_length ?? null,
        pricing: { prompt: promptPrice, completion: completionPrice },
        open_source: isOpenSource(m.id),
        capabilities: inferCapabilities(m.id),
        downloads: null,
        size_bytes: null,
        updated_at: m.created ? new Date(m.created * 1000).toISOString() : new Date().toISOString(),
      };
    });
  } catch (err) {
    console.error('[registry] OpenRouter fetch failed:', err);
    return [];
  }
}

// ---------------------------------------------------------------------------
// HuggingFace
// ---------------------------------------------------------------------------

interface HuggingFaceModel {
  id: string;
  downloads?: number;
  likes?: number;
  pipeline_tag?: string;
  lastModified?: string;
}

export async function fetchHuggingFaceModels(): Promise<RegistryModel[]> {
  try {
    const data = await fetchJSON<HuggingFaceModel[]>(
      'https://huggingface.co/api/models?sort=downloads&direction=-1&limit=100&filter=text-generation',
    );

    return (data ?? []).map((m) => ({
      id: `huggingface:${m.id}`,
      name: m.id.split('/').pop() ?? m.id,
      provider: m.id.split('/')[0] ?? 'community',
      source: 'huggingface' as const,
      context_length: null,
      pricing: null,
      open_source: true,
      capabilities: inferCapabilities(m.id),
      downloads: m.downloads ?? null,
      size_bytes: null,
      updated_at: m.lastModified ?? new Date().toISOString(),
    }));
  } catch (err) {
    console.error('[registry] HuggingFace fetch failed:', err);
    return [];
  }
}

// ---------------------------------------------------------------------------
// Ollama
// ---------------------------------------------------------------------------

interface OllamaResponse {
  models: Array<{
    name: string;
    modified_at?: string;
    size?: number;
  }>;
}

export async function fetchOllamaModels(): Promise<RegistryModel[]> {
  try {
    const data = await fetchJSON<OllamaResponse>(
      'https://ollama.com/api/tags',
    );

    return (data.models ?? []).map((m) => ({
      id: `ollama:${m.name}`,
      name: m.name,
      provider: 'ollama',
      source: 'ollama' as const,
      context_length: null,
      pricing: null,
      open_source: true,
      capabilities: inferCapabilities(m.name),
      downloads: null,
      size_bytes: m.size ?? null,
      updated_at: m.modified_at ?? new Date().toISOString(),
    }));
  } catch (err) {
    console.error('[registry] Ollama fetch failed:', err);
    return [];
  }
}

// ---------------------------------------------------------------------------
// Aggregation
// ---------------------------------------------------------------------------

export async function fetchAllModels(): Promise<RegistryModel[]> {
  const [openrouter, huggingface, ollama] = await Promise.allSettled([
    fetchOpenRouterModels(),
    fetchHuggingFaceModels(),
    fetchOllamaModels(),
  ]);

  const results: RegistryModel[] = [];
  const seen = new Set<string>();

  // Helper: add models, deduplicating by normalized name
  const addModels = (settled: PromiseSettledResult<RegistryModel[]>) => {
    if (settled.status !== 'fulfilled') return;
    for (const model of settled.value) {
      const key = normalizeModelName(model.name);
      if (!seen.has(key)) {
        seen.add(key);
        results.push(model);
      }
    }
  };

  // Priority order: openrouter (pricing), huggingface (downloads), ollama
  addModels(openrouter);
  addModels(huggingface);
  addModels(ollama);

  return results;
}

// ---------------------------------------------------------------------------
// MCP Servers (curated catalogue)
// ---------------------------------------------------------------------------

const MCP_SERVERS: RegistryMCP[] = [
  {
    name: 'filesystem',
    description: 'Read, write, and manage local filesystem operations',
    tools: ['read_file', 'write_file', 'list_directory', 'move_file', 'search_files'],
    source_url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem',
    category: 'core',
  },
  {
    name: 'github',
    description: 'Interact with GitHub repositories, issues, and pull requests',
    tools: [
      'create_or_update_file',
      'search_repositories',
      'create_issue',
      'create_pull_request',
      'list_commits',
    ],
    source_url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/github',
    category: 'developer',
  },
  {
    name: 'postgres',
    description: 'Query and manage PostgreSQL databases',
    tools: ['query', 'list_tables', 'describe_table'],
    source_url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/postgres',
    category: 'data',
  },
  {
    name: 'brave-search',
    description: 'Web and local search via the Brave Search API',
    tools: ['brave_web_search', 'brave_local_search'],
    source_url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search',
    category: 'search',
  },
  {
    name: 'puppeteer',
    description: 'Browser automation and web scraping',
    tools: ['puppeteer_navigate', 'puppeteer_screenshot', 'puppeteer_click', 'puppeteer_evaluate'],
    source_url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/puppeteer',
    category: 'automation',
  },
  {
    name: 'slack',
    description: 'Send messages and interact with Slack workspaces',
    tools: ['send_message', 'list_channels', 'get_channel_history', 'search_messages'],
    source_url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/slack',
    category: 'communication',
  },
  {
    name: 'memory',
    description: 'Persistent knowledge graph for long-term memory',
    tools: ['create_entities', 'create_relations', 'search_nodes', 'open_nodes'],
    source_url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/memory',
    category: 'core',
  },
  {
    name: 'fetch',
    description: 'HTTP requests and web content retrieval',
    tools: ['fetch'],
    source_url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/fetch',
    category: 'core',
  },
  {
    name: 'sequential-thinking',
    description: 'Dynamic problem-solving through structured thought sequences',
    tools: ['create_thought', 'revise_thought'],
    source_url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking',
    category: 'reasoning',
  },
  {
    name: 'sentry',
    description: 'Query Sentry issues, events, and error tracking data',
    tools: ['search_issues', 'get_issue_details', 'get_event_details'],
    source_url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/sentry',
    category: 'developer',
  },
];

// ---------------------------------------------------------------------------
// Full Registry Snapshot
// ---------------------------------------------------------------------------

export async function fetchFullRegistry(): Promise<RegistrySnapshot> {
  const models = await fetchAllModels();

  const sources = {
    openrouter: models.filter((m) => m.source === 'openrouter').length,
    huggingface: models.filter((m) => m.source === 'huggingface').length,
    ollama: models.filter((m) => m.source === 'ollama').length,
    mcp: MCP_SERVERS.length,
  };

  return {
    models,
    mcp_servers: MCP_SERVERS,
    fetched_at: new Date().toISOString(),
    sources,
  };
}
