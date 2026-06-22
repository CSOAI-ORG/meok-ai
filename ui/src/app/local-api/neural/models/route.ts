import { NextResponse } from 'next/server';
import { getAuthUserId } from '@/lib/api-auth';

const SOV3_MCP_URL = process.env.SOV3_MCP_URL ?? 'http://localhost:3101';

async function callMcpTool(toolName: string, args: Record<string, unknown> = {}) {
  const res = await fetch(`${SOV3_MCP_URL}/mcp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: `neural-${Date.now()}`,
      method: 'tools/call',
      params: { name: toolName, arguments: args },
    }),
  });
  const json = await res.json();
  if (json.result?.content) {
    return JSON.parse(json.result.content[0].text);
  }
  return null;
}

export async function GET() {
  try {
    const userId = await getAuthUserId();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const models = await callMcpTool('get_neural_model_info', {});
    const agentStatus = await callMcpTool('orion_riri_hourman_status', {});

    return NextResponse.json({
      models: models?.models || {},
      fallback_predictions: models?.fallback_predictions || {},
      agent_status: agentStatus,
    });
  } catch (err) {
    console.error('[api/neural/models] error:', err);
    return NextResponse.json({ error: 'Failed to fetch neural models' }, { status: 500 });
  }
}

export async function POST() {
  try {
    const userId = await getAuthUserId();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const result = await callMcpTool('trigger_neural_retrain', {});

    return NextResponse.json({
      success: true,
      result,
    });
  } catch (err) {
    console.error('[api/neural/models] retrain error:', err);
    return NextResponse.json({ error: 'Failed to trigger retraining' }, { status: 500 });
  }
}