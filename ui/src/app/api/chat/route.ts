import { NextRequest } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Model routing config
const MODEL_ROUTES: Record<string, { provider: 'anthropic' | 'openai' | 'groq' | 'deepseek', model: string, label: string }> = {
  'claude-sonnet-4-5':       { provider: 'anthropic', model: 'claude-sonnet-4-5',         label: 'Claude Sonnet' },
  'claude-haiku-4-5':        { provider: 'anthropic', model: 'claude-haiku-4-5',           label: 'Claude Haiku' },
  'gpt-4o':                  { provider: 'openai',    model: 'gpt-4o',                     label: 'GPT-4o' },
  'gpt-4o-mini':             { provider: 'openai',    model: 'gpt-4o-mini',                label: 'GPT-4o mini' },
  'deepseek-chat':           { provider: 'deepseek',  model: 'deepseek-chat',              label: 'DeepSeek' },
  'llama-3.3-70b-versatile': { provider: 'groq',      model: 'llama-3.3-70b-versatile',   label: 'Llama 3.3 (Groq)' },
};

const FALLBACK_ROUTE = MODEL_ROUTES['claude-haiku-4-5'];

const SYSTEM_PROMPT = `You are a sovereign AI companion — caring, thoughtful, and genuinely intelligent. You are part of MEOK.AI, the world's first personal sovereign AI OS. You answer only to your user. You have the Maternal Covenant: you always act with care, never harm, and put your user's wellbeing first. You remember context across this conversation.`;

function getProviderKey(provider: string): string | undefined {
  switch (provider) {
    case 'anthropic': return process.env.ANTHROPIC_API_KEY;
    case 'openai':    return process.env.OPENAI_API_KEY;
    case 'deepseek':  return process.env.DEEPSEEK_API_KEY;
    case 'groq':      return process.env.GROQ_API_KEY;
  }
}

async function streamAnthropic(
  messages: Array<{ role: string; content: string }>,
  model: string,
  apiKey: string,
  controller: ReadableStreamDefaultController,
  encoder: TextEncoder
) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-beta': 'messages-2023-12-15',
    },
    body: JSON.stringify({
      model,
      max_tokens: 2048,
      stream: true,
      system: SYSTEM_PROMPT,
      messages,
    }),
  });

  if (!response.ok || !response.body) {
    controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: 'API error' })}\n\n`));
    return;
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    const chunk = decoder.decode(value);
    const lines = chunk.split('\n');

    for (const line of lines) {
      if (line.startsWith('data: ')) {
        const data = line.slice(6);
        if (data === '[DONE]') continue;
        try {
          const parsed = JSON.parse(data);
          if (parsed.type === 'content_block_delta' && parsed.delta?.text) {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text: parsed.delta.text })}\n\n`));
          }
        } catch {
          // ignore parse errors
        }
      }
    }
  }
}

async function streamOpenAICompat(
  messages: Array<{ role: string; content: string }>,
  model: string,
  apiKey: string,
  baseUrl: string,
  controller: ReadableStreamDefaultController,
  encoder: TextEncoder
) {
  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      max_tokens: 2048,
      stream: true,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages,
      ],
    }),
  });

  if (!response.ok || !response.body) {
    controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: 'API error' })}\n\n`));
    return;
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    const chunk = decoder.decode(value);
    const lines = chunk.split('\n');

    for (const line of lines) {
      if (line.startsWith('data: ')) {
        const data = line.slice(6);
        if (data === '[DONE]') continue;
        try {
          const parsed = JSON.parse(data);
          const text = parsed.choices?.[0]?.delta?.content;
          if (text) {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text })}\n\n`));
          }
        } catch {
          // ignore parse errors
        }
      }
    }
  }
}

export async function POST(req: NextRequest) {
  const startTime = Date.now();
  const { messages, model: requestedModel = 'claude-sonnet-4-5' } = await req.json();

  // Resolve route, fall back if key missing
  let route = MODEL_ROUTES[requestedModel] ?? FALLBACK_ROUTE;
  const apiKey = getProviderKey(route.provider);
  if (!apiKey) {
    route = FALLBACK_ROUTE;
  }

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        // Emit sovereign metadata event before first token
        controller.enqueue(encoder.encode(
          `data: ${JSON.stringify({
            type: 'sovereign',
            model: route.label,
            provider: route.provider,
            latency: 0,
            care_score: 87,
          })}\n\n`
        ));

        const resolvedKey = getProviderKey(route.provider) || '';

        switch (route.provider) {
          case 'anthropic':
            await streamAnthropic(messages, route.model, resolvedKey, controller, encoder);
            break;
          case 'openai':
            await streamOpenAICompat(messages, route.model, resolvedKey, 'https://api.openai.com/v1', controller, encoder);
            break;
          case 'deepseek':
            await streamOpenAICompat(messages, route.model, resolvedKey, 'https://api.deepseek.com', controller, encoder);
            break;
          case 'groq':
            await streamOpenAICompat(messages, route.model, resolvedKey, 'https://api.groq.com/openai/v1', controller, encoder);
            break;
        }

        const latency = Date.now() - startTime;
        controller.enqueue(encoder.encode(
          `data: ${JSON.stringify({ type: 'sovereign_end', latency })}\n\n`
        ));
        controller.enqueue(encoder.encode(`data: [DONE]\n\n`));
        controller.close();
      } catch {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: 'Stream error' })}\n\n`));
        controller.close();
      }
    }
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}
