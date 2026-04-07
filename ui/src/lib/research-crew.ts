/**
 * MEOK AI LABS — Multi-Agent Research System
 *
 * CrewAI-style multi-agent research with role-based agents.
 * Each agent has a specific role: planner, searcher, analyst, writer.
 */

import { generateText } from 'ai';
import { route, type Tier } from '@/lib/llm-router';

export interface ResearchAgent {
  name: string;
  role: string;
  goal: string;
  tools: string[];
}

export interface AgentResult {
  agent: string;
  output: string;
  sources?: string[];
  duration: number;
}

// ── Predefined Research Agents ─────────────────────────────────────────────────

export const RESEARCH_AGENTS: Record<string, ResearchAgent> = {
  planner: {
    name: 'Research Planner',
    role: 'planner',
    goal: 'Decompose complex queries into actionable research steps',
    tools: ['query_decomposition', 'planning'],
  },
  searcher: {
    name: 'Web Searcher',
    role: 'searcher',
    goal: 'Find diverse, relevant sources across the web',
    tools: ['web_search', 'content_fetch'],
  },
  analyst: {
    name: 'Data Analyst',
    role: 'analyst',
    goal: 'Analyze and cross-reference findings from multiple sources',
    tools: ['comparison', 'fact_checking', 'data_analysis'],
  },
  writer: {
    name: 'Research Writer',
    role: 'writer',
    goal: 'Synthesize findings into clear, well-structured reports',
    tools: ['synthesis', 'citation', 'formatting'],
  },
};

// ── Agent Implementation ─────────────────────────────────────────────────────

class BaseAgent {
  protected name: string;
  protected role: string;
  protected goal: string;
  protected provider: any;

  constructor(agent: ResearchAgent, tier: Tier = 'explorer') {
    this.name = agent.name;
    this.role = agent.role;
    this.goal = agent.goal;
    this.provider = route('', tier).provider;
  }

  protected async run(prompt: string, system?: string): Promise<string> {
    const result = await generateText({
      model: this.provider,
      system: system || `You are ${this.name}. ${this.goal}`,
      prompt,
      maxOutputTokens: 2048,
      temperature: 0.3,
    });
    return result.text;
  }
}

// Planner Agent
class PlannerAgent extends BaseAgent {
  async decompose(query: string): Promise<string[]> {
    const result = await this.run(
      `Break down "${query}" into 3-5 research sub-questions. Return ONLY a JSON array.`,
      `You are a research planning expert. Your goal is to decompose complex queries into actionable research steps. Return valid JSON only.`
    );

    try {
      const parsed = JSON.parse(result.trim());
      return Array.isArray(parsed) ? parsed : [query];
    } catch {
      return [query];
    }
  }

  async createPlan(query: string, subQueries: string[]): Promise<string> {
    return this.run(
      `Create a research plan for: ${query}
      
      Sub-questions:
      ${subQueries.map((q, i) => `${i + 1}. ${q}`).join('\n')}
      
      Outline the research approach for each sub-question.`,
      `You are a research planning expert. Create clear, actionable research plans.`
    );
  }
}

// Searcher Agent
class SearcherAgent extends BaseAgent {
  private async webSearch(query: string, maxResults = 5) {
    try {
      const res = await fetch(
        `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}&b=${maxResults}`,
        { signal: AbortSignal.timeout(10000) }
      );
      if (!res.ok) return [];
      
      const html = await res.text();
      
      const results: Array<{ title: string; url: string; snippet: string }> = [];
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
    } catch (e) {
      console.error('[SearcherAgent] webSearch failed:', e);
      return [];
    }
  }

  async search(subQueries: string[]): Promise<Array<{ query: string; results: Array<{ title: string; url: string; snippet: string }> }>> {
    const results: Array<{ query: string; results: Array<{ title: string; url: string; snippet: string }> }> = [];

    // Search each sub-query in parallel
    const searches = subQueries.map(async (q) => {
      const searchResults = await this.webSearch(q, 4);
      return { query: q, results: searchResults };
    });

    const searchResults = await Promise.all(searches);
    return searchResults;
  }

  async fetchContent(urls: string[]): Promise<string[]> {
    const contents: string[] = [];

    for (const url of urls.slice(0, 3)) {
      try {
        const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
        const text = await res.text();
        // Extract main content (simplified)
        const snippet = text.slice(0, 500).replace(/<[^>]*>/g, ' ');
        contents.push(snippet);
      } catch {
        contents.push(`Could not fetch: ${url}`);
      }
    }

    return contents;
  }
}

// Analyst Agent
class AnalystAgent extends BaseAgent {
  async analyze(query: string, searchResults: Array<{ query: string; results: Array<{ title: string; url: string; snippet: string }> }>): Promise<string> {
    const sourcesText = searchResults
      .flatMap(sr => sr.results)
      .slice(0, 10)
      .map((r, i) => `${i + 1}. ${r.title}\n${r.url}\n${r.snippet}`)
      .join('\n\n');

    return this.run(
      `Analyze these research findings for query: "${query}"
      
      Sources:
      ${sourcesText}
      
      Identify:
      - Key themes and patterns
      - Conflicting information
      - Gaps in coverage
      - Credibility assessment`,
      `You are a research analyst. Your goal is to analyze and cross-reference findings. Provide insightful analysis.`
    );
  }

  async factCheck(claims: string[], sources: string[]): Promise<string> {
    return this.run(
      `Fact-check these claims against the sources:
      
      Claims:
      ${claims.map((c, i) => `${i + 1}. ${c}`).join('\n')}
      
      Sources:
      ${sources.join('\n')}`,
      `You are a fact-checking assistant. Verify claims against sources and note discrepancies.`
    );
  }
}

// Writer Agent
class WriterAgent extends BaseAgent {
  async write(
    query: string,
    analysis: string,
    sources: Array<{ title: string; url: string; snippet: string }>
  ): Promise<string> {
    const sourcesText = sources
      .map((r, i) => `[${i + 1}] ${r.title}\n${r.url}\n${r.snippet.slice(0, 200)}...`)
      .join('\n\n');

    return this.run(
      `Write a comprehensive research report for: "${query}"
      
      Analysis:
      ${analysis}
      
      Sources:
      ${sourcesText}`,
      `You are a research writer for MEOK AI. Produce thorough, well-structured reports with proper citations. Use headings, bullet points, and cite sources inline. End with Sources section.`
    );
  }
}

// ── Multi-Agent Crew ───────────────────────────────────────────────────────────

export class ResearchCrew {
  private planner: PlannerAgent;
  private searcher: SearcherAgent;
  private analyst: AnalystAgent;
  private writer: WriterAgent;
  private results: AgentResult[] = [];

  constructor(tier: Tier = 'explorer') {
    this.planner = new PlannerAgent(RESEARCH_AGENTS.planner, tier);
    this.searcher = new SearcherAgent(RESEARCH_AGENTS.searcher, tier);
    this.analyst = new AnalystAgent(RESEARCH_AGENTS.analyst, tier);
    this.writer = new WriterAgent(RESEARCH_AGENTS.writer, tier);
  }

  async run(query: string): Promise<{
    report: string;
    agents: AgentResult[];
    sources: Array<{ title: string; url: string; snippet: string }>;
  }> {
    const startTime = Date.now();

    // Step 1: Planning
    const planStart = Date.now();
    const subQueries = await this.planner.decompose(query);
    const plan = await this.planner.createPlan(query, subQueries);
    this.results.push({
      agent: 'planner',
      output: plan,
      duration: Date.now() - planStart,
    });

    // Step 2: Search (parallel)
    const searchStart = Date.now();
    const searchResults = await this.searcher.search(subQueries);
    const allSources = searchResults.flatMap(sr => sr.results);
    this.results.push({
      agent: 'searcher',
      output: `Found ${allSources.length} sources across ${searchResults.length} sub-queries`,
      sources: allSources.map(s => s.url),
      duration: Date.now() - searchStart,
    });

    // Step 3: Analysis
    const analysisStart = Date.now();
    const analysis = await this.analyst.analyze(query, searchResults);
    this.results.push({
      agent: 'analyst',
      output: analysis,
      duration: Date.now() - analysisStart,
    });

    // Step 4: Writing
    const writeStart = Date.now();
    const report = await this.writer.write(query, analysis, allSources.slice(0, 10));
    this.results.push({
      agent: 'writer',
      output: report,
      sources: allSources.slice(0, 10).map(s => s.url),
      duration: Date.now() - writeStart,
    });

    return {
      report,
      agents: this.results,
      sources: allSources.slice(0, 10),
    };
  }

  // Sequential workflow
  async runSequential(query: string) {
    return this.run(query);
  }

  // Parallel workflow (faster but less coordinated)
  async runParallel(query: string) {
    // Quick decompose
    const subQueries = await this.planner.decompose(query);
    
    // Parallel search + analysis
    const searchResults = await this.searcher.search(subQueries);
    const analysisPromise = this.analyst.analyze(query, searchResults);
    
    // Get sources
    const allSources = searchResults.flatMap(sr => sr.results).slice(0, 10);
    
    // Wait for analysis
    const analysis = await analysisPromise;
    
    // Write
    const report = await this.writer.write(query, analysis, allSources);

    return {
      report,
      agents: this.results,
      sources: allSources,
    };
  }
}

// ── API Integration ───────────────────────────────────────────────────────────

export async function runResearchCrew(query: string, tier: Tier = 'explorer') {
  const crew = new ResearchCrew(tier);
  return crew.run(query);
}