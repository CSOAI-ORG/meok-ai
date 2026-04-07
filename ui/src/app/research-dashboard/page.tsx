'use client';

import { useState, useEffect } from 'react';

interface ResearchSource {
  type: string;
  title: string;
  url: string;
  snippet: string;
  relevance: number;
}

interface ResearchTemplate {
  id: string;
  name: string;
  description: string;
  mcpServers: string[];
}

export default function ResearchDashboard() {
  const [templates, setTemplates] = useState<ResearchTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [useMcp, setUseMcp] = useState(true);
  const [useSov3, setUseSov3] = useState(true);
  const [deepResearch, setDeepResearch] = useState(false);
  const [researching, setResearching] = useState(false);
  const [results, setResults] = useState<{
    synthesis: string;
    sources: ResearchSource[];
    mcpServers: string[] | null;
    sov3Insights: Record<string, unknown> | null;
  } | null>(null);
  const [history, setHistory] = useState<Array<{ query: string; timestamp: string }>>([]);

  useEffect(() => {
    loadTemplates();
  }, []);

  async function loadTemplates() {
    try {
      const res = await fetch('/api/research/orchestration?action=templates');
      const data = await res.json();
      setTemplates(data.templates || []);
    } catch (error) {
      console.error('Failed to load templates:', error);
    } finally {
      setLoading(false);
    }
  }

  const runResearch = async () => {
    if (!query.trim()) return;
    setResearching(true);
    
    try {
      const res = await fetch('/api/research/orchestration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query,
          template: selectedTemplate,
          useMcp,
          useSov3,
          deepResearch,
        }),
      });
      
      const data = await res.json();
      setResults(data);
      
      setHistory(prev => [{
        query,
        timestamp: new Date().toISOString(),
      }, ...prev.slice(0, 9)]);
    } catch (error) {
      console.error('Research failed:', error);
    } finally {
      setResearching(false);
    }
  };

  const templateButtons = [
    { id: 'compliance_assessment', icon: '⚖️', name: 'Compliance' },
    { id: 'security_audit', icon: '🛡️', name: 'Security' },
    { id: 'healthcare_analysis', icon: '🏥', name: 'Healthcare' },
    { id: 'financial_analysis', icon: '💰', name: 'Finance' },
    { id: 'threat_intel', icon: '🎯', name: 'Threat Intel' },
    { id: 'ai_risk', icon: '🤖', name: 'AI Risk' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">🔬</div>
          <div className="text-xl">Loading Research Dashboard...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Research Command Center</h1>
          <p className="text-gray-400">MCP-Powered Research • SOV3 Integration • Multi-Source Synthesis</p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Left Panel - Query & Settings */}
          <div className="col-span-2 space-y-6">
            {/* Query Input */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-semibold mb-4">Research Query</h2>
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="What would you like to research?"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 h-32 text-white placeholder-gray-500 resize-none"
              />
              
              {/* Options */}
              <div className="flex flex-wrap gap-4 mt-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={useMcp}
                    onChange={(e) => setUseMcp(e.target.checked)}
                    className="w-4 h-4"
                  />
                  <span>MCP Servers</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={useSov3}
                    onChange={(e) => setUseSov3(e.target.checked)}
                    className="w-4 h-4"
                  />
                  <span>SOV3 Consciousness</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={deepResearch}
                    onChange={(e) => setDeepResearch(e.target.checked)}
                    className="w-4 h-4"
                  />
                  <span>Deep Research (15 sources)</span>
                </label>
              </div>
              
              <button
                onClick={runResearch}
                disabled={researching || !query.trim()}
                className="mt-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 px-6 py-3 rounded-lg font-medium"
              >
                {researching ? 'Researching...' : 'Run Research'}
              </button>
            </div>

            {/* Templates */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-semibold mb-4">Research Templates</h2>
              <div className="grid grid-cols-3 gap-3">
                {templateButtons.map(tpl => (
                  <button
                    key={tpl.id}
                    onClick={() => setSelectedTemplate(selectedTemplate === tpl.id ? null : tpl.id)}
                    className={`p-4 rounded-lg text-left transition ${
                      selectedTemplate === tpl.id 
                        ? 'bg-blue-600 border-2 border-blue-400' 
                        : 'bg-gray-800 hover:bg-gray-700 border-2 border-transparent'
                    }`}
                  >
                    <div className="text-2xl mb-2">{tpl.icon}</div>
                    <div className="font-semibold">{tpl.name}</div>
                    <div className="text-xs text-gray-400">
                      {templates.find(t => t.id === tpl.id)?.mcpServers?.length || 0} MCP servers
                    </div>
                  </button>
                ))}
              </div>
              {selectedTemplate && (
                <div className="mt-4 text-sm text-gray-400">
                  Selected: {templates.find(t => t.id === selectedTemplate)?.description}
                </div>
              )}
            </div>

            {/* Results */}
            {results && (
              <div className="space-y-4">
                {/* MCP Servers Used */}
                {results.mcpServers && results.mcpServers.length > 0 && (
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                    <h3 className="font-semibold mb-2">MCP Servers Engaged</h3>
                    <div className="flex flex-wrap gap-2">
                      {results.mcpServers.map(server => (
                        <span key={server} className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm">
                          {server}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* SOV3 Insights */}
                {results.sov3Insights && (
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                    <h3 className="font-semibold mb-2">SOV3 Consciousness Analysis</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Ethical Review:</span>{' '}
                        <span className="text-green-400">{results.sov3Insights.ethicalReview as string}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Care Score Threshold:</span>{' '}
                        <span>{results.sov3Insights.careScoreThreshold as number}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Confidence:</span>{' '}
                        <span className="text-blue-400">{Math.round((results.sov3Insights.confidence as number) * 100)}%</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Sources */}
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-lg font-semibold mb-4">Sources ({results.sources.length})</h3>
                  <div className="space-y-3">
                    {results.sources.map((source, i) => (
                      <div key={i} className="bg-gray-800 rounded-lg p-3">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="font-medium">{source.title}</div>
                            <div className="text-sm text-gray-400 line-clamp-2">{source.snippet}</div>
                            <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:underline">
                              {source.url}
                            </a>
                          </div>
                          <div className="text-right ml-4">
                            <div className="text-xs text-gray-500">Relevance</div>
                            <div className="text-lg font-bold text-green-400">{source.relevance}%</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Synthesis */}
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-lg font-semibold mb-4">Synthesis</h3>
                  <div className="prose prose-invert max-w-none">
                    <pre className="whitespace-pre-wrap text-sm text-gray-300 font-sans">{results.synthesis}</pre>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Panel - History & Stats */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-lg font-semibold mb-4">Research Stats</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{templates.length}</div>
                  <div className="text-xs text-gray-400">Templates</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">50+</div>
                  <div className="text-xs text-gray-400">MCP Servers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{history.length}</div>
                  <div className="text-xs text-gray-400">Researches</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">SOV3</div>
                  <div className="text-xs text-gray-400">Enabled</div>
                </div>
              </div>
            </div>

            {/* History */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-lg font-semibold mb-4">Research History</h2>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {history.length === 0 ? (
                  <div className="text-gray-500 text-center py-4">No research yet</div>
                ) : (
                  history.map((item, i) => (
                    <div key={i} className="bg-gray-800 rounded-lg p-3">
                      <div className="text-sm line-clamp-2">{item.query}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        {new Date(item.timestamp).toLocaleString()}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Quick Research */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-lg font-semibold mb-4">Quick Research</h2>
              <div className="space-y-2">
                {['AI ethics frameworks', 'HIPAA compliance 2024', 'GDPR updates', 'SOC2 audit process'].map(q => (
                  <button
                    key={q}
                    onClick={() => { setQuery(q); runResearch(); }}
                    disabled={researching}
                    className="w-full bg-gray-800 hover:bg-gray-700 disabled:opacity-50 px-3 py-2 rounded-lg text-left text-sm"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
