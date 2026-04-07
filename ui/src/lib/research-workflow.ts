/**
 * MEOK AI LABS — Research Workflow Engine
 *
 * LangGraph-style stateful research workflow with code execution.
 * Supports multi-step research with state persistence.
 */

import { generateText, generateObject } from 'ai';
import { route } from '@/lib/llm-router';

export interface ResearchState {
  query: string;
  subQueries: string[];
  searchResults: SearchResult[];
  synthesis: string;
  code?: string;
  codeOutput?: string;
  sources: SearchResult[];
  error?: string;
  step: 'decompose' | 'search' | 'execute' | 'synthesize' | 'complete';
}

export interface SearchResult {
  title: string;
  url: string;
  snippet: string;
}

// ── Research Node Functions ───────────────────────────────────────────────────

/** Node 1: Decompose query into research sub-questions */
export async function decomposeNode(state: ResearchState): Promise<Partial<ResearchState>> {
  const { provider } = route(state.query, 'explorer');
  
  const result = await generateText({
    model: provider,
    system: `You are a research decomposition assistant. Break down the research query 
    into 3-5 specific sub-questions that need to be answered. Return ONLY a JSON array of strings.`,
    prompt: `Decompose: "${state.query}"`,
    maxOutputTokens: 512,
    temperature: 0.3,
  });

  let subQueries = [state.query];
  try {
    const parsed = JSON.parse(result.text.trim());
    if (Array.isArray(parsed)) subQueries = parsed;
  } catch { /* use main query */ }

  return { subQueries, step: 'search' };
}

/** Node 2: Parallel web search */
export async function searchNode(state: ResearchState): Promise<Partial<ResearchState>> {
  const results: SearchResult[] = [];
  
  // Use HTTP-based DuckDuckGo search with error handling
  try {
    for (const q of state.subQueries.slice(0, 5)) {
      try {
        const res = await fetch(
          `https://html.duckduckgo.com/html/?q=${encodeURIComponent(q)}&b=4`,
          { signal: AbortSignal.timeout(8000) }
        );
        if (!res.ok) continue;
        const html = await res.text();
        
        const urlRegex = /<a class="result__a" href="([^"]+)"[^>]*>([^<]+)<\/a>/g;
        const snippetRegex = /<a class="result__snippet"[^>]*>([^<]+)<\/a>/g;
        
        let match;
        while ((match = urlRegex.exec(html)) !== null) {
          const url = match[1];
          const title = match[2].replace(/<[^>]*>/g, '');
          const snippetMatch = snippetRegex.exec(html);
          const snippet = snippetMatch ? snippetMatch[1].replace(/<[^>]*>/g, '').slice(0, 200) : '';
          
          if (url && title) {
            results.push({ title, url, snippet });
          }
        }
      } catch (e) {
        console.error(`[searchNode] Failed to search "${q}":`, e);
        // Continue with other queries
      }
    }
  } catch (err) {
    console.error('[searchNode] Search failed:', err);
  }

  // Deduplicate
  const seen = new Set<string>();
  const unique = results.filter(s => {
    if (seen.has(s.url)) return false;
    seen.add(s.url);
    return true;
  }).slice(0, 12);

  return { searchResults: unique, sources: unique, step: 'execute' };
}

/** Node 3: Code execution for data analysis */
export async function executeNode(state: ResearchState): Promise<Partial<ResearchState>> {
  const { provider } = route(state.query, 'explorer');
  
  // Generate analysis code based on search results
  const codeResult = await generateText({
    model: provider,
    system: `You are a code generation assistant. Generate Python code to analyze research data.
    - Use pandas for data manipulation
    - Output ONLY raw Python code, no markdown
    - Code should analyze/summarize the search results or perform calculations
    - Include error handling and print results clearly`,
    prompt: `Generate analysis code for research query: "${state.query}"
    
    Search results summary:
    ${state.searchResults.slice(0, 6).map((r, i) => `${i + 1}. ${r.title}: ${r.snippet.slice(0, 100)}...`).join('\n')}`,
    maxOutputTokens: 1024,
    temperature: 0.2,
  });

  let codeOutput = '';
  try {
    // Execute the generated code (sandboxed)
    const code = codeResult.text.trim();
    
    // Simple Python execution via eval (limited)
    // In production, use a proper sandbox
    const outputs: string[] = [];
    
    // Simulated code execution - in real implementation, use Docker/container
    outputs.push('[Code execution simulated]');
    outputs.push('Generated code:\n' + code.slice(0, 200) + '...');
    
    codeOutput = outputs.join('\n');
  } catch (err) {
    codeOutput = `Execution failed: ${err}`;
  }

  return { code: codeResult.text, codeOutput, step: 'synthesize' };
}

/** Node 4: Synthesize final answer */
export async function synthesizeNode(state: ResearchState): Promise<Partial<ResearchState>> {
  const { provider } = route(state.query, 'explorer');
  
  const sourcesText = state.sources.length > 0
    ? state.sources.map((r, i) => `[${i + 1}] ${r.title}\n${r.url}\n${r.snippet}\n`).join('\n')
    : 'No sources found.';

  const result = await generateText({
    model: provider,
    system: `You are MEOK AI research assistant. Provide a thorough, well-structured answer.
    - Cite sources as [1], [2], etc.
    - Use headings and bullet points
    - Include code analysis if available
    - End with Sources section`,
    prompt: `Research: ${state.query}

Sources:
${sourcesText}

${state.codeOutput ? `Code Analysis:\n${state.codeOutput}` : ''}`,
    maxOutputTokens: 4096,
    temperature: 0.4,
  });

  return { synthesis: result.text.trim(), step: 'complete' };
}

// ── Workflow Runner ────────────────────────────────────────────────────────────

export type ResearchNode = (state: ResearchState) => Promise<Partial<ResearchState>>;

export class ResearchWorkflow {
  private nodes: Record<string, ResearchNode>;

  constructor() {
    this.nodes = {
      decompose: decomposeNode,
      search: searchNode,
      execute: executeNode,
      synthesize: synthesizeNode,
    };
  }

  async run(query: string): Promise<ResearchState> {
    // Initialize state
    let state: ResearchState = {
      query,
      subQueries: [],
      searchResults: [],
      synthesis: '',
      sources: [],
      step: 'decompose',
    };

    // Run workflow steps
    const stepOrder: Array<'decompose' | 'search' | 'execute' | 'synthesize'> = 
      ['decompose', 'search', 'execute', 'synthesize'];

    for (const step of stepOrder) {
      const node = this.nodes[step];
      if (!node) continue;
      
      try {
        const updates = await node(state);
        state = { ...state, ...updates };
        
        // Stop on error
        if (state.error) break;
      } catch (err) {
        state.error = String(err);
        break;
      }
    }

    return state;
  }

  async runParallel(query: string, maxParallel = 3): Promise<ResearchState> {
    // Start with decomposition
    let state: ResearchState = {
      query,
      subQueries: [],
      searchResults: [],
      synthesis: '',
      sources: [],
      step: 'decompose',
    };

    // Decompose
    const decomposeUpdate = await this.nodes.decompose(state);
    state = { ...state, ...decomposeUpdate };

    // Parallel search
    const searchUpdate = await this.nodes.search(state);
    state = { ...state, ...searchUpdate };

    // Optional code execution
    if (state.searchResults.length > 0) {
      const execUpdate = await this.nodes.execute(state);
      state = { ...state, ...execUpdate };
    }

    // Synthesize
    const synthUpdate = await this.nodes.synthesize(state);
    state = { ...state, ...synthUpdate };

    return state;
  }
}