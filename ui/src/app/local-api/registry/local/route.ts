/**
 * MEOK AI LABS — Local Model Discovery API
 *
 * GET /api/registry/local — Discovers models installed on local Ollama instance.
 * Returns same shape as /api/registry for UI consistency.
 */

import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface OllamaModel {
  name: string;
  model: string;
  modified_at: string;
  size: number;
  digest: string;
  details?: {
    parent_model?: string;
    format?: string;
    family?: string;
    parameter_size?: string;
    quantization_level?: string;
  };
}

interface OllamaTagsResponse {
  models: OllamaModel[];
}

export async function GET(): Promise<NextResponse> {
  const endpoint = process.env.OLLAMA_ENDPOINT?.replace('/v1', '') || 'http://localhost:11434';

  try {
    const res = await fetch(`${endpoint}/api/tags`, {
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `Ollama returned ${res.status}`, models: [], ollama_available: false },
        { status: 200 }, // Don't error — just report unavailable
      );
    }

    const data = (await res.json()) as OllamaTagsResponse;

    const models = (data.models ?? []).map((m) => ({
      id: `ollama:${m.name}`,
      name: m.name,
      source: 'ollama-local' as const,
      provider: 'Ollama (Local)',
      parameters: m.details?.parameter_size ?? 'unknown',
      quantization: m.details?.quantization_level ?? 'unknown',
      format: m.details?.format ?? 'unknown',
      family: m.details?.family ?? 'unknown',
      size_bytes: m.size,
      size_display: m.size > 1e9 ? `${(m.size / 1e9).toFixed(1)} GB` : `${(m.size / 1e6).toFixed(0)} MB`,
      modified_at: m.modified_at,
      open_source: true,
      capabilities: inferCapabilities(m.name),
    }));

    return NextResponse.json({
      models,
      ollama_available: true,
      ollama_endpoint: endpoint,
      model_count: models.length,
      fetched_at: new Date().toISOString(),
    });
  } catch (err) {
    // Ollama not running — that's OK, just report it
    console.info('[registry/local] Ollama not reachable:', err instanceof Error ? err.message : 'unknown');
    return NextResponse.json({
      models: [],
      ollama_available: false,
      ollama_endpoint: endpoint,
      model_count: 0,
      error: 'Ollama not reachable',
    });
  }
}

function inferCapabilities(modelName: string): string[] {
  const caps: string[] = ['text-generation'];
  const lower = modelName.toLowerCase();
  if (lower.includes('embed') || lower.includes('nomic')) caps.push('embeddings');
  if (lower.includes('guard')) caps.push('safety-classification');
  if (lower.includes('coder') || lower.includes('code')) caps.push('code-generation');
  if (lower.includes('vision') || lower.includes('vl')) caps.push('vision');
  if (lower.includes('nemotron')) caps.push('reasoning', 'function-calling');
  return caps;
}
