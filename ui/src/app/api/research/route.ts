/**
 * MEOK AI LABS — Research Assistant API
 *
 * POST /api/research — Deep research with web search integration.
 * Uses DuckDuckGo for sourcing, then LLM for synthesis.
 * Requires Clerk auth. Routes via llm-router with task type 'research'.
 */

import { type NextRequest, NextResponse } from 'next/server';
import { generateText } from 'ai';
import { getAuthUserId } from '@/lib/api-auth';
import { route, type Tier } from '@/lib/llm-router';
import { getUserById } from '@/lib/db/user';
import { checkRateLimit, type RateLimitTier } from '@/lib/rate-limit';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface SearchResult {
  title: string;
  url: string;
  snippet: string;
}

async function webSearch(query: string, maxResults = 8): Promise<SearchResult[]> {
  try {
    const res = await fetch(
      `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}&b=${maxResults}`,
      { signal: AbortSignal.timeout(10000) }
    );
    const html = await res.text();
    
    const results: SearchResult[] = [];
    const urlRegex = /<a class="result__a" href="([^"]+)"[^>]*>([^<]+)<\/a>/g;
    const snippetRegex = /<a class="result__snippet"[^>]*>([^<]+)<\/a>/g;
    
    let match;
    let idx = 0;
    while ((match = urlRegex.exec(html)) !== null && idx < maxResults) {
      const url = match[1];
      const title = match[2].replace(/<[^>]*>/g, '');
      
      const snippetMatch = snippetRegex.exec(html);
      const snippet = snippetMatch ? snippetMatch[1].replace(/<[^>]*>/g, '').slice(0, 200) : '';
      
      results.push({ title, url, snippet });
      idx++;
    }
    
    return results;
  } catch (err) {
    console.error('[research] Web search failed:', err);
    return [];
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  // 1. Auth check
  const userId = await getAuthUserId();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  // 1b. Rate limit check (in-memory token bucket)
  try {
    const rlTier: RateLimitTier = 'explorer'; // Refined after user lookup if needed
    const rlResult = checkRateLimit(userId, rlTier);
    if (!rlResult.allowed) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.', remaining: 0, resetAt: rlResult.resetAt },
        { status: 429, headers: { 'X-RateLimit-Remaining': '0', 'X-RateLimit-Reset': String(rlResult.resetAt) } },
      );
    }
  } catch (err) {
    // Non-fatal: if rate limiter fails, continue
    console.error('[api/research] Rate limit check failed:', err);
  }

  // 2. Parse body
  let query: string;
  try {
    const body = await req.json();
    query = body?.query;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  if (!query || typeof query !== 'string' || query.trim().length === 0) {
    return NextResponse.json({ error: 'Missing or empty "query" field' }, { status: 400 });
  }

  const trimmed = query.trim().slice(0, 4000);

  // 3. Resolve user tier
  let userTier: Tier = 'explorer';
  try {
    const user = await getUserById(userId);
    if (user) {
      userTier = user.tier as Tier;
    }
  } catch (err) {
    console.error('[api/research] Failed to fetch user tier:', err);
  }

  // 4. Route model for research task
  const { model, taskType, provider } = route(trimmed, userTier);

  console.log(
    `[api/research] userId=${userId} tier=${userTier} model=${model} taskType=${taskType}`,
  );

  // 5. Multi-step research workflow
  try {
    // Step 1: Decompose query into sub-questions
    const decomposeResult = await generateText({
      model: provider,
      system: `You are a research decomposition assistant. Break down the user's research query 
      into 2-4 specific sub-questions that need to be answered to provide a comprehensive answer.
      Return ONLY a JSON array of strings, nothing else.`,
      prompt: `Decompose this research query into sub-questions: "${trimmed}"`,
      maxOutputTokens: 512,
      temperature: 0.3,
    });

    let subQueries = [trimmed];
    try {
      const parsed = JSON.parse(decomposeResult.text.trim());
      if (Array.isArray(parsed) && parsed.length > 0) {
        subQueries = parsed;
      }
    } catch {
      // Use main query if decomposition fails
    }

    // Step 2: Search for each sub-query in parallel
    const searchPromises = subQueries.map(q => webSearch(q, 5));
    const searchResults = await Promise.all(searchPromises);
    const allResults = searchResults.flat();

    // Deduplicate by URL
    const seen = new Set<string>();
    const uniqueResults = allResults.filter(r => {
      if (seen.has(r.url)) return false;
      seen.add(r.url);
      return true;
    }).slice(0, 10);

    // Step 3: Synthesize with sources
    const sourcesText = uniqueResults.length > 0
      ? uniqueResults.map((r, i) => `[${i + 1}] ${r.title}\n${r.url}\n${r.snippet}\n`).join('\n')
      : 'No web sources found.';

    const synthesisResult = await generateText({
      model: provider,
      system: `You are a research synthesis assistant for MEOK AI. 
      
      Provide a thorough, well-structured answer to the user's research query.
      Use clear headings and bullet points where appropriate.
      
      IMPORTANT: Cite sources using the format [1], [2], etc. in the text.
      Every factual claim should be traceable to a source.
      If you are unsure about something, say so rather than guessing.
      
      Always include a "Sources" section at the end with numbered URLs.`,
      prompt: `Research query: ${trimmed}

Sources found:
${sourcesText}

Synthesize these sources into a comprehensive answer with proper citations.`,
      maxOutputTokens: 4096,
      temperature: 0.4,
    });

    return NextResponse.json({
      answer: synthesisResult.text.trim(),
      model,
      taskType,
      sources: uniqueResults,
      subQueries,
    });
  } catch (err) {
    console.error('[api/research] Research workflow failed:', err);
    return NextResponse.json(
      { error: 'Research generation failed. Please try again.' },
      { status: 500 },
    );
  }
}
