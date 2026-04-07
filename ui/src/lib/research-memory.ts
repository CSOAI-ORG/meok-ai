/**
 * MEOK AI LABS — Research Memory Integration
 *
 * Save research results to Sov3 memory system.
 */

interface ResearchMemory {
  query: string;
  answer: string;
  sources: Array<{ title: string; url: string; snippet?: string }>;
  template?: string;
  consciousnessLevel?: number;
  tags?: string[];
}

/**
 * Save research to Sov3 memory via MCP
 */
export async function saveResearchToMemory(research: ResearchMemory): Promise<boolean> {
  try {
    // Call Sov3 memory recording tool
    const res = await fetch('http://localhost:3101/mcp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'tools/call',
        params: {
          name: 'record_memory',
          arguments: {
            content: `Research: ${research.query}\n\nAnswer: ${research.answer}\n\nSources: ${research.sources.map(s => s.url).join(', ')}`,
            source_agent: 'research-assistant',
            memory_type: 'research',
            care_weight: 0.7,
            tags: research.tags || ['research', 'knowledge'],
            emotional_valence: 0.6,
          },
        },
        id: `mem-${Date.now()}`,
      }),
    });

    if (res.ok) {
      const json = await res.json();
      return json.result?.content?.[0]?.text?.includes('success') || false;
    }
    return false;
  } catch (e) {
    console.error('[research-memory] Failed to save to Sov3:', e);
    return false;
  }
}

/**
 * Query research from Sov3 memory
 */
export async function queryResearchMemory(query: string, limit = 5): Promise<any[]> {
  try {
    const res = await fetch('http://localhost:3101/mcp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'tools/call',
        params: {
          name: 'query_memories',
          arguments: {
            query,
            care_weight_min: 0.3,
            tags: ['research'],
            limit,
          },
        },
        id: `query-${Date.now()}`,
      }),
    });

    if (res.ok) {
      const json = await res.json();
      if (json.result?.content) {
        return JSON.parse(json.result.content[0].text);
      }
    }
    return [];
  } catch (e) {
    console.error('[research-memory] Failed to query Sov3:', e);
    return [];
  }
}

/**
 * Get research statistics from memory
 */
export async function getResearchMemoryStats(): Promise<{
  totalResearch: number;
  lastResearch?: string;
  topics: string[];
}> {
  try {
    const res = await fetch('http://localhost:3101/mcp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'tools/call',
        params: {
          name: 'get_memory_stats',
          arguments: {},
        },
        id: `stats-${Date.now()}`,
      }),
    });

    if (res.ok) {
      const json = await res.json();
      if (json.result?.content) {
        const stats = JSON.parse(json.result.content[0].text);
        return {
          totalResearch: stats.total_episodes || 0,
          lastResearch: stats.last_episode_at,
          topics: [],
        };
      }
    }
    return { totalResearch: 0, topics: [] };
  } catch (e) {
    return { totalResearch: 0, topics: [] };
  }
}