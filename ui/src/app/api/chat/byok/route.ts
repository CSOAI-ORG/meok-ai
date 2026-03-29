/**
 * MEOK AI LABS — BYOK Chat API Route
 *
 * POST /api/chat/byok — Streams a response using the caller's own API key.
 *
 * Accepts: { message, systemOverride, byokKey, provider }
 *   - byokKey: decrypted API key (client decrypts AES-256-GCM before sending over HTTPS)
 *   - provider: "anthropic" | "openai" | "google"
 *   - message: string
 *   - systemOverride: optional system prompt override
 *
 * Model mapping:
 *   anthropic → claude-sonnet-4-6
 *   openai    → gpt-4o
 *   google    → gemini-1.5-pro
 *
 * If byokKey is absent the request is proxied to /api/chat internally.
 */

import { type NextRequest, NextResponse } from 'next/server';
import { getAuthUserId } from '@/lib/api-auth';
import Anthropic from '@anthropic-ai/sdk';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// ── Types ──────────────────────────────────────────────────────────────────

type BYOKProvider = 'anthropic' | 'openai' | 'google';

interface BYOKRequestBody {
  message: string;
  systemOverride?: string;
  byokKey?: string;
  provider?: BYOKProvider;
}

// ── Model map ──────────────────────────────────────────────────────────────

const MODEL_MAP: Record<BYOKProvider, string> = {
  anthropic: 'claude-sonnet-4-6',
  openai: 'gpt-4o',
  google: 'gemini-1.5-pro',
};

const DEFAULT_SYSTEM = 'You are a helpful, caring AI assistant. Be concise, warm, and honest.';

// ── Error helper ───────────────────────────────────────────────────────────

function errorResponse(message: string, status: number): NextResponse {
  return NextResponse.json({ error: message }, { status });
}

// ── Anthropic streaming ────────────────────────────────────────────────────

async function streamAnthropic(
  byokKey: string,
  message: string,
  system: string,
): Promise<Response> {
  const client = new Anthropic({ apiKey: byokKey });

  let controller: ReadableStreamDefaultController<Uint8Array>;
  const encoder = new TextEncoder();

  const stream = new ReadableStream<Uint8Array>({
    async start(ctrl) {
      controller = ctrl;
      try {
        const anthropicStream = client.messages.stream({
          model: MODEL_MAP.anthropic,
          max_tokens: 2048,
          system,
          messages: [{ role: 'user', content: message }],
        });

        for await (const chunk of anthropicStream) {
          if (
            chunk.type === 'content_block_delta' &&
            chunk.delta.type === 'text_delta'
          ) {
            controller.enqueue(encoder.encode(chunk.delta.text));
          }
        }
        controller.close();
      } catch (err) {
        const errMsg = err instanceof Error ? err.message : 'Anthropic streaming error';
        controller.enqueue(encoder.encode(`\n\n[Error: ${errMsg}]`));
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Transfer-Encoding': 'chunked',
      'X-MEOK-Provider': 'anthropic',
      'X-MEOK-Model': MODEL_MAP.anthropic,
      'X-MEOK-BYOK': 'true',
    },
  });
}

// ── OpenAI streaming ───────────────────────────────────────────────────────

async function streamOpenAI(
  byokKey: string,
  message: string,
  system: string,
): Promise<Response> {
  const encoder = new TextEncoder();

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        const res = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${byokKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: MODEL_MAP.openai,
            max_tokens: 2048,
            stream: true,
            messages: [
              { role: 'system', content: system },
              { role: 'user', content: message },
            ],
          }),
        });

        if (!res.ok || !res.body) {
          controller.enqueue(encoder.encode(`[Error: OpenAI returned ${res.status}]`));
          controller.close();
          return;
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const text = decoder.decode(value);
          for (const line of text.split('\n')) {
            if (!line.startsWith('data: ')) continue;
            const payload = line.slice(6).trim();
            if (payload === '[DONE]') break;
            try {
              const data = JSON.parse(payload);
              const delta = data.choices?.[0]?.delta?.content;
              if (delta) controller.enqueue(encoder.encode(delta));
            } catch { /* skip malformed */ }
          }
        }
        controller.close();
      } catch (err) {
        const errMsg = err instanceof Error ? err.message : 'OpenAI streaming error';
        controller.enqueue(encoder.encode(`\n\n[Error: ${errMsg}]`));
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Transfer-Encoding': 'chunked',
      'X-MEOK-Provider': 'openai',
      'X-MEOK-Model': MODEL_MAP.openai,
      'X-MEOK-BYOK': 'true',
    },
  });
}

// ── Google Gemini streaming ────────────────────────────────────────────────

async function streamGoogle(
  byokKey: string,
  message: string,
  system: string,
): Promise<Response> {
  const model = MODEL_MAP.google;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?alt=sse`;

  const body = JSON.stringify({
    system_instruction: {
      parts: [{ text: system }],
    },
    contents: [
      {
        role: 'user',
        parts: [{ text: message }],
      },
    ],
    generationConfig: {
      maxOutputTokens: 2048,
      temperature: 0.7,
    },
  });

  let googleRes: globalThis.Response;
  try {
    googleRes = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': byokKey },
      body,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Network error reaching Gemini';
    return errorResponse(msg, 503);
  }

  if (!googleRes.ok) {
    const errText = await googleRes.text().catch(() => 'Unknown Gemini error');
    return errorResponse(`Gemini API error: ${errText}`, googleRes.status);
  }

  // Parse SSE stream and forward text deltas
  const encoder = new TextEncoder();
  const googleBody = googleRes.body;

  if (!googleBody) {
    return errorResponse('Gemini returned no response body', 502);
  }

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const reader = googleBody.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() ?? '';

          for (const line of lines) {
            if (!line.startsWith('data: ')) continue;
            const data = line.slice(6).trim();
            if (data === '[DONE]') continue;
            try {
              const parsed = JSON.parse(data) as {
                candidates?: Array<{
                  content?: { parts?: Array<{ text?: string }> };
                }>;
              };
              const text =
                parsed.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
              if (text) {
                controller.enqueue(encoder.encode(text));
              }
            } catch {
              // Skip malformed SSE lines
            }
          }
        }
        controller.close();
      } catch (err) {
        const errMsg = err instanceof Error ? err.message : 'Gemini stream read error';
        controller.enqueue(encoder.encode(`\n\n[Error: ${errMsg}]`));
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Transfer-Encoding': 'chunked',
      'X-MEOK-Provider': 'google',
      'X-MEOK-Model': model,
      'X-MEOK-BYOK': 'true',
    },
  });
}

// ── POST /api/chat/byok ────────────────────────────────────────────────────

export async function POST(req: NextRequest): Promise<Response> {
  // 1. Auth check
  const userId = await getAuthUserId();
  if (!userId) {
    return errorResponse('Unauthorized', 401);
  }

  // 2. Parse body
  let body: BYOKRequestBody;
  try {
    body = (await req.json()) as BYOKRequestBody;
  } catch {
    return errorResponse('Invalid request body', 400);
  }

  const { message, systemOverride, byokKey, provider } = body;

  // 3. Validate message
  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return errorResponse('message is required and must not be empty', 400);
  }
  if (message.trim().length > 4000) {
    return errorResponse('message exceeds 4000 character limit', 400);
  }

  // 4. No BYOK key — proxy to /api/chat
  if (!byokKey) {
    try {
      const proxyRes = await fetch(new URL('/api/chat', req.url), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Forward auth cookies/headers
          cookie: req.headers.get('cookie') ?? '',
          authorization: req.headers.get('authorization') ?? '',
        },
        body: JSON.stringify({
          messages: [{ role: 'user', content: message }],
        }),
      });
      return proxyRes as unknown as Response;
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Proxy to /api/chat failed';
      return errorResponse(msg, 502);
    }
  }

  // 5. Validate provider
  const resolvedProvider: BYOKProvider = provider ?? 'anthropic';
  const validProviders: BYOKProvider[] = ['anthropic', 'openai', 'google'];
  if (!validProviders.includes(resolvedProvider)) {
    return errorResponse(
      `Invalid provider "${resolvedProvider}". Must be one of: ${validProviders.join(', ')}`,
      400,
    );
  }

  // 6. Validate key looks minimally plausible
  if (byokKey.trim().length < 20) {
    return errorResponse('byokKey appears too short to be valid', 400);
  }

  const system = systemOverride?.trim() || DEFAULT_SYSTEM;
  const trimmedMessage = message.trim();

  // 7. Route to provider
  try {
    switch (resolvedProvider) {
      case 'anthropic':
        return await streamAnthropic(byokKey, trimmedMessage, system);
      case 'openai':
        return await streamOpenAI(byokKey, trimmedMessage, system);
      case 'google':
        return await streamGoogle(byokKey, trimmedMessage, system);
      default: {
        const _exhaustive: never = resolvedProvider;
        void _exhaustive;
        return errorResponse('Unknown provider', 400);
      }
    }
  } catch (err) {
    console.error('[api/chat/byok] Unhandled error:', err);
    const errMsg = err instanceof Error ? err.message : '';

    if (errMsg.includes('401') || errMsg.includes('authentication') || errMsg.includes('Unauthorized')) {
      return errorResponse('Invalid API key — authentication failed with the provider.', 401);
    }
    if (errMsg.includes('429') || errMsg.includes('rate') || errMsg.includes('quota')) {
      return errorResponse('Rate limit or quota exceeded on the provider API key.', 429);
    }
    if (errMsg.includes('timeout') || errMsg.includes('ECONNREFUSED')) {
      return errorResponse('Connection to provider timed out. Please try again.', 503);
    }

    return errorResponse(
      'An error occurred while streaming from the provider. Please check your key and try again.',
      500,
    );
  }
}

// ── GET /api/chat/byok ─────────────────────────────────────────────────────

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({
    status: 'ok',
    message: 'MEOK BYOK Chat API',
    providers: ['anthropic', 'openai', 'google'],
    models: MODEL_MAP,
  });
}
