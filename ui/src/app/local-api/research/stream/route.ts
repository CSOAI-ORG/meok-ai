/**
 * MEOK AI LABS — Streaming Research API
 *
 * POST /api/research/stream — Full streaming research with sources.
 * Multi-step: decompose → search → stream synthesis with citations.
 * Includes caching for search results.
 */

import { type NextRequest, NextResponse } from 'next/server';
import { type Readable } from 'stream';
import { streamText } from 'ai';
import { getAuthUserId } from '@/lib/api-auth';
import { route, type Tier } from '@/lib/llm-router';
import { getUserById } from '@/lib/db/user';
import { checkRateLimit, type RateLimitTier } from '@/lib/rate-limit';
import { researchCache } from '@/lib/research-cache';
import { createResearchError, RESEARCH_ERROR_CODES, formatResearchError } from '@/lib/research-errors';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface SearchResult {
  title: string;
  url: string;
  snippet: string;
}

async function webSearch(query: string, maxResults = 6): Promise<SearchResult[]> {
  try {
    // Use DuckDuckGo HTML API (no API key needed)
    const res = await fetch(
      `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}&b=${maxResults}`,
      { signal: AbortSignal.timeout(10000) }
    );
    const html = await res.text();
    
    // Parse HTML results
    const results: SearchResult[] = [];
    const urlRegex = /<a class="result__a" href="([^"]+)"[^>]*>([^<]+)<\/a>/g;
    const snippetRegex = /<a class="result__snippet"[^>]*>([^<]+)<\/a>/g;
    
    let match;
    let idx = 0;
    while ((match = urlRegex.exec(html)) !== null && idx < maxResults) {
      const url = match[1];
      const title = match[2].replace(/<[^>]*>/g, '');
      
      // Get snippet
      const snippetMatch = snippetRegex.exec(html);
      const snippet = snippetMatch ? snippetMatch[1].replace(/<[^>]*>/g, '').slice(0, 200) : '';
      
      if (url && title) {
        results.push({ title, url, snippet });
        idx++;
      }
    }
    
    return results;
  } catch (err) {
    console.error('[research/stream] Web search failed:', err);
    return [];
  }
}

export async function POST(req: NextRequest): Promise<Response> {
  const userId = await getAuthUserId();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  // Rate limit
  try {
    const rlTier: RateLimitTier = 'explorer';
    const rlResult = checkRateLimit(userId, rlTier);
    if (!rlResult.allowed) {
      return NextResponse.json(
        { error: 'Rate limit exceeded', remaining: 0, resetAt: rlResult.resetAt },
        { status: 429 },
      );
    }
  } catch { /* non-fatal */ }

  // Parse body
  let query: string;
  let consciousnessContext: string | undefined;
  let systemPrompt: string | undefined;
  try {
    const body = await req.json();
    query = body?.query;
    consciousnessContext = body?.consciousnessContext;
    systemPrompt = body?.systemPrompt;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  if (!query || typeof query !== 'string' || query.trim().length === 0) {
    return NextResponse.json({ error: 'Missing or empty "query" field' }, { status: 400 });
  }

  const trimmed = query.trim().slice(0, 4000);

  // User tier
  let userTier: Tier = 'explorer';
  try {
    const user = await getUserById(userId);
    if (user) userTier = user.tier as Tier;
  } catch { /* use default */ }

  const { model, provider } = route(trimmed, userTier);

  console.log(`[api/research/stream] userId=${userId} query="${trimmed.slice(0, 50)}..."`);

  try {
    // Phase 1: Query decomposition (non-streaming, fast)
    const decomposeResult = await streamText({
      model: provider,
      system: `You are a research decomposition assistant. Break down the research query 
      into 2-4 specific sub-questions. Return ONLY a JSON array of strings, nothing else.`,
    prompt: `Decompose: "${trimmed}"`,
    maxOutputTokens: 512,
    temperature: 0.3,
  });

  let subQueries = [trimmed];
  try {
    const text = await decomposeResult.text;
    const parsed = JSON.parse(text.trim());
    if (Array.isArray(parsed) && parsed.length > 0) {
      subQueries = parsed;
    }
  } catch { /* use main query */ }

  // Phase 2: Parallel search (with caching)
  const cachedResults = researchCache.get<SearchResult[]>(trimmed);
  
  let allResults: SearchResult[];
  
  if (cachedResults && cachedResults.length > 0) {
    allResults = cachedResults;
  } else {
    const searchPromises = subQueries.map(q => webSearch(q, 5));
    const searchResults = await Promise.all(searchPromises);
    allResults = searchResults.flat();
    
    // Cache the results
    if (allResults.length > 0) {
      researchCache.set(trimmed, allResults);
    }
  }

  // Deduplicate
  const seen = new Set<string>();
  const uniqueResults = allResults.filter(r => {
    if (seen.has(r.url)) return false;
    seen.add(r.url);
    return true;
  }).slice(0, 10);

  const sourcesText = uniqueResults.length > 0
    ? uniqueResults.map((r, i) => `[${i + 1}] ${r.title}\nURL: ${r.url}\n${r.snippet}\n`).join('\n')
    : 'No sources found.';

  // Phase 3: Stream synthesis with sources
  let systemPromptText = `You are MEOK AI research assistant. Provide thorough, well-structured answers.
    
IMPORTANT: 
- Cite sources as [1], [2], etc. inline in the text
- Every factual claim should be traceable to a source
- If unsure, say so rather than guess
- Use headings and bullet points for clarity
- End with a "Sources" section listing all URLs

Available sources:
${sourcesText}`;

  // Add consciousness context if provided
  if (consciousnessContext) {
    systemPromptText = consciousnessContext + '\n\n' + systemPromptText;
  }

  // Add template-specific prompt if provided
  if (systemPrompt) {
    systemPromptText = systemPrompt + '\n\n' + systemPromptText;
  }

  const stream = await streamText({
    model: provider,
    system: systemPromptText,
    prompt: `Research: ${trimmed}\n\nSynthesize the sources into a comprehensive answer with proper citations.`,
    maxOutputTokens: 4096,
    temperature: 0.4,
  });

  // Return streaming response
  const encoder = new TextEncoder();
  
  const readable = new ReadableStream({
    start(controller) {
      // Send sources first
      controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'sources', sources: uniqueResults, subQueries })}\n\n`));
      
      // Stream using the text stream
      (async () => {
        try {
          for await (const chunk of stream.textStream) {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'chunk', text: chunk })}\n\n`));
          }
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'done', model })}\n\n`));
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      })();
    },
  });

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
  } catch (err) {
    console.error('[api/research/stream] Error:', err);
    const errorInfo = formatResearchError(err);
    
    // Return error as SSE with proper formatting
    const encoder = new TextEncoder();
    const errorStream = new ReadableStream({
      start(controller) {
        controller.enqueue(encoder.encode(
          `data: ${JSON.stringify({ 
            type: 'error', 
            message: errorInfo.message,
            code: errorInfo.code,
            retryable: errorInfo.retryable
          })}\n\n`
        ));
        controller.close();
      },
    });
    
    return new Response(errorStream, {
      status: errorInfo.code === 'UNAUTHORIZED' || errorInfo.code === 'RATE_LIMITED' ? 401 : 500,
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
      },
    });
  }
}