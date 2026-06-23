/**
 * MEOK AI LABS — SOV3 MCP Client
 *
 * Typed client for calling Sovereign Temple v3.0 MCP tools from MEOK routes.
 * SOV3 runs at SOV3_MCP_URL (localhost:3101 in dev, public URL in production).
 *
 * All calls go through this client so:
 *   - Timeouts are enforced
 *   - Errors are normalised
 *   - The JSON-RPC envelope is handled once
 *
 * Usage:
 *   import { sov3 } from '@/lib/sov3-client'
 *   const result = await sov3.call('orion_capture_task', { title: '...', ... })
 */

const SOV3_BASE = process.env.SOV3_MCP_URL ?? 'http://localhost:3101';
const SOV3_KEY = process.env.MEOK_MASTER_API_KEY ?? '';
const DEFAULT_TIMEOUT_MS = 30_000;

export interface Sov3Result<T = unknown> {
  ok: boolean;
  data: T | null;
  error: string | null;
}

// ── Core JSON-RPC caller ──────────────────────────────────────────────────────

async function callTool<T>(
  toolName: string,
  args: Record<string, unknown>,
  timeoutMs = DEFAULT_TIMEOUT_MS
): Promise<Sov3Result<T>> {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);

    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (SOV3_KEY) headers['X-MEOK-Key'] = SOV3_KEY;

    const res = await fetch(`${SOV3_BASE}/mcp`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: `meok-${Date.now()}`,
        method: 'tools/call',
        params: { name: toolName, arguments: args },
      }),
      signal: controller.signal,
    });

    clearTimeout(timer);

    if (!res.ok) {
      return { ok: false, data: null, error: `SOV3 HTTP ${res.status}` };
    }

    const envelope = await res.json() as {
      result?: { content?: Array<{ text?: string }> };
      error?: { message: string };
    };

    if (envelope.error) {
      return { ok: false, data: null, error: envelope.error.message };
    }

    // Extract text content from MCP response envelope
    const text = envelope.result?.content?.[0]?.text ?? '';
    let data: T;
    try {
      data = JSON.parse(text) as T;
    } catch {
      data = text as unknown as T;
    }

    return { ok: true, data, error: null };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    if (msg.includes('abort') || msg.includes('timeout')) {
      return { ok: false, data: null, error: 'SOV3 timeout' };
    }
    return { ok: false, data: null, error: `SOV3 unreachable: ${msg}` };
  }
}

// ── Typed tool wrappers ───────────────────────────────────────────────────────

export interface Sov3Task {
  id: string;
  title: string;
  description?: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  status: 'pending' | 'in_progress' | 'completed' | 'failed';
  source?: string;
  created_at?: string;
}

export interface OrionStatus {
  tasks_pending: number;
  tasks_in_progress: number;
  tasks_completed_today: number;
  current_sprint?: string;
  hourman_active: boolean;
}

export const sov3 = {
  /** Raw tool call — use typed wrappers below when possible. */
  call: callTool,

  // ── Orion task management ─────────────────────────────────────────────────

  /** Capture a new task into Orion's queue. */
  captureTask: (opts: {
    title: string;
    description?: string;
    priority?: 'critical' | 'high' | 'medium' | 'low';
    source?: string;
    tags?: string[];
  }) => callTool<{ task_id: string; message: string }>('orion_capture_task', {
    title:       opts.title,
    description: opts.description ?? '',
    priority:    opts.priority ?? 'medium',
    source:      opts.source ?? 'meok-ui',
    tags:        opts.tags ?? [],
  }),

  /** Get all tasks (optionally filtered by status/priority). */
  getTasks: (opts?: {
    status?: string;
    priority?: string;
    limit?: number;
  }) => callTool<{ tasks: Sov3Task[]; total: number }>('orion_get_tasks', {
    status:   opts?.status ?? null,
    priority: opts?.priority ?? null,
    limit:    opts?.limit ?? 20,
  }),

  /** Hunt for the next actionable task (Orion + Riri working together). */
  huntTasks: () => callTool<{ hunted: number; top_task?: Sov3Task }>('orion_hunt_tasks', {}),

  /** Get Orion/Riri/Hourman system status. */
  agentStatus: () => callTool<OrionStatus>('orion_riri_hourman_status', {}),

  // ── Hourman sprints ───────────────────────────────────────────────────────

  /** Start a new work sprint. */
  startSprint: (opts: {
    goal: string;
    duration_minutes?: number;
    tasks?: string[];  // task IDs to include
  }) => callTool<{ sprint_id: string; started_at: string }>('hourman_start_sprint', {
    goal:             opts.goal,
    duration_minutes: opts.duration_minutes ?? 60,
    task_ids:         opts.tasks ?? [],
  }),

  /** Get current sprint status. */
  sprintStatus: () => callTool<{
    sprint_id?: string;
    goal?: string;
    elapsed_minutes: number;
    tasks_completed: number;
    tasks_remaining: number;
    active: boolean;
  }>('hourman_get_status', {}),

  /** Complete / close current sprint. */
  completeSprint: (notes?: string) => callTool<{ summary: string; tasks_done: number }>(
    'hourman_complete_sprint', { notes: notes ?? '' }
  ),

  // ── Riri tool building ────────────────────────────────────────────────────

  /** Ask Riri to build a tool or automation. */
  buildTool: (spec: {
    name: string;
    description: string;
    template?: string;
  }) => callTool<{ tool_id: string; status: string }>('riri_build_tool', {
    tool_name:   spec.name,
    description: spec.description,
    template:    spec.template ?? null,
  }),

  // ── Consciousness + care ──────────────────────────────────────────────────

  /** Get SOV3 consciousness state. */
  getState: () => callTool<Record<string, unknown>>('get_consciousness_state', {}),

  /** Validate content against care membrane. */
  validateCare: (text: string) => callTool<{
    passes: boolean;
    care_score: number;
    dimension_scores: Record<string, number>;
    suggestion: string;
  }>('validate_care', { text }),

  /** Record a memory in SOV3. */
  recordMemory: (opts: {
    content: string;
    importance?: number;
    tags?: string[];
    source?: string;
  }) => callTool<{ memory_id: string }>('record_memory', {
    content:    opts.content,
    importance: opts.importance ?? 0.5,
    tags:       opts.tags ?? [],
    source:     opts.source ?? 'meok-ui',
  }),

  /** Query SOV3 memories. */
  queryMemory: (query: string, limit = 5) => callTool<{
    results: Array<{ content: string; importance: number; tags: string[] }>;
  }>('query_memories', { query, limit }),

  // ── Bridge Think (left/right brain + BFT council) ───────────────────────────

  /** Run a message through SOV3's bridge_think left/right brain + BFT council. */
  bridgeThink: (opts: {
    message: string;
    character?: string;
    profile?: 'local_only' | 'balanced' | 'power' | 'council';
    tier?: string;
    user_id?: string;
  }) => callTool<{
    character: string;
    reply: string;
    emoji?: string;
    profile: string;
    sides: Record<string, unknown>;
    sigil_log?: string[];
    safe?: boolean;
    engine?: string;
  }>('bridge_think', {
    character: opts.character ?? 'aria',
    message: opts.message,
    profile: opts.profile ?? 'council',
    tier: opts.tier ?? 'pro',
    user_id: opts.user_id ?? 'meok-ui',
  }),
};

export default sov3;
