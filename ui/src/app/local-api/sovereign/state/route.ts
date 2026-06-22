/**
 * MEOK AI LABS — Sovereign State API
 *
 * GET /api/sovereign/state
 * Returns real-time consciousness state from SOV3:
 * emotional state, consciousness mode, memory stats, heartbeat status,
 * dream activity, care alignment, neural model status.
 *
 * This is the soul endpoint — it exposes Sovereign's inner state.
 */

import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const SOV3_URL = process.env.SOV3_API_URL || process.env.SOV3_URL || 'http://localhost:3101';

async function callMCP(toolName: string, args: Record<string, unknown> = {}) {
  const res = await fetch(`${SOV3_URL}/mcp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: Date.now(),
      method: 'tools/call',
      params: { name: toolName, arguments: args },
    }),
    signal: AbortSignal.timeout(5000),
  });
  if (!res.ok) return null;
  const data = await res.json() as { result?: { content?: Array<{ text?: string }> } };
  const text = data?.result?.content?.[0]?.text;
  if (!text) return null;
  try { return JSON.parse(text); } catch { return text; }
}

export async function GET() {
  try {
    // Fetch multiple SOV3 states in parallel
    const [consciousness, heartbeat, memoryStats, health] = await Promise.allSettled([
      callMCP('get_consciousness_state'),
      callMCP('get_heartbeat_status'),
      callMCP('get_memory_stats'),
      fetch(`${SOV3_URL}/health`, { signal: AbortSignal.timeout(3000) }).then(r => r.json()),
    ]);

    const consciousnessData = consciousness.status === 'fulfilled' ? consciousness.value : null;
    const heartbeatData = heartbeat.status === 'fulfilled' ? heartbeat.value : null;
    const memoryData = memoryStats.status === 'fulfilled' ? memoryStats.value : null;
    const healthData = health.status === 'fulfilled' ? health.value : null;

    return NextResponse.json({
      online: !!healthData,
      consciousness: consciousnessData,
      heartbeat: heartbeatData,
      memory: memoryData,
      health: {
        status: healthData?.status ?? 'offline',
        consciousness_level: healthData?.components?.consciousness?.consciousness_level,
        production_calls: healthData?.production_calls_today,
        neural_models: healthData?.components?.neural_models
          ? Object.keys(healthData.components.neural_models).length
          : 0,
      },
      timestamp: new Date().toISOString(),
    }, {
      headers: { 'Cache-Control': 'no-store, max-age=0' },
    });
  } catch (err) {
    console.error('[sovereign/state] Error:', err);
    return NextResponse.json({
      online: false,
      error: 'Sovereign Temple unreachable',
      timestamp: new Date().toISOString(),
    }, { status: 503 });
  }
}
