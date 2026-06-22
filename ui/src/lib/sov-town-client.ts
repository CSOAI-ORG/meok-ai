/**
 * Sovereign Town dashboard client.
 *
 * Bridges meok-ai/ui to the Sovereign Town p0_aqua dashboard server,
 * either directly on localhost in dev or via the authenticated Cloudflare
 * tunnel in production.
 */

const SOV_TOWN_BASE = process.env.SOV_TOWN_URL ?? 'http://localhost:3940';
const SOV_TOWN_KEY = process.env.MEOK_MASTER_API_KEY ?? '';
const DEFAULT_TIMEOUT_MS = 15_000;

export interface SovTownStatus {
  hives: number;
  passports: number;
  cum_episodes: number;
  governed_crimes: number;
  ungoverned_crimes: number;
  models_trained: number;
  mac?: Record<string, unknown>;
  vm?: Record<string, unknown>;
}

export interface SovTownHive {
  key: string;
  name: string;
  domain: string;
  description?: string;
  agents?: number;
  episodes?: number;
  [k: string]: unknown;
}

export interface SovTownCharacter {
  id: string;
  name: string;
  hive: string;
  archetype?: string;
  passport?: Record<string, unknown>;
  [k: string]: unknown;
}

export interface SovTownState {
  regime: string;
  tick: number;
  hives?: SovTownHive[];
  characters?: SovTownCharacter[];
  [k: string]: unknown;
}

export interface SovTownResult<T> {
  ok: boolean;
  data?: T;
  error?: string;
}

async function fetchJson<T>(path: string, timeoutMs = DEFAULT_TIMEOUT_MS): Promise<SovTownResult<T>> {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    const headers: Record<string, string> = {};
    if (SOV_TOWN_KEY) headers['X-MEOK-Key'] = SOV_TOWN_KEY;

    const res = await fetch(`${SOV_TOWN_BASE}${path}`, {
      headers,
      signal: controller.signal,
      cache: 'no-store',
    });
    clearTimeout(timer);

    if (!res.ok) {
      const text = await res.text().catch(() => 'Unknown error');
      return { ok: false, error: `SovTown ${res.status}: ${text}` };
    }

    return { ok: true, data: (await res.json()) as T };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return { ok: false, error: msg };
  }
}

export async function getSovTownStatus(): Promise<SovTownResult<SovTownStatus>> {
  return fetchJson<SovTownStatus>('/api/status');
}

export async function getSovTownHives(): Promise<SovTownResult<SovTownHive[]>> {
  return fetchJson<SovTownHive[]>('/api/hives');
}

export async function getSovTownHiveDetail(key: string): Promise<SovTownResult<SovTownHive>> {
  return fetchJson<SovTownHive>(`/api/hives/${encodeURIComponent(key)}`);
}

export async function getSovTownCharacters(): Promise<SovTownResult<SovTownCharacter[]>> {
  return fetchJson<SovTownCharacter[]>('/api/characters');
}

export async function getSovTownState(): Promise<SovTownResult<SovTownState>> {
  return fetchJson<SovTownState>('/api/town-state');
}

export async function getSovTownLedger(limit = 20): Promise<SovTownResult<unknown[]>> {
  return fetchJson<unknown[]>(`/api/ledger?limit=${limit}`);
}

export function getSovTownWsUrl(): string | null {
  if (!SOV_TOWN_BASE) return null;
  const httpUrl = SOV_TOWN_BASE.replace(/^http/, 'ws');
  return `${httpUrl}/ws/feed`;
}
