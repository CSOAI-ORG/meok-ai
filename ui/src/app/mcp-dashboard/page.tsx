'use client';

import { useState, useEffect } from 'react';

interface MCPServer {
  name: string;
  url: string;
  tools: string[];
  status: 'connected' | 'disconnected' | 'error';
  category: string;
  description: string;
}

interface Synergy {
  category: string;
  servers: string[];
  synergy: string;
}

interface Workflow {
  name: string;
  description: string;
  servers: string[];
  type: string;
  steps: Array<{ server: string; tool: string; description: string }>;
}

export default function MCPDashboard() {
  const [servers, setServers] = useState<MCPServer[]>([]);
  const [synergies, setSynergies] = useState<Synergy[]>([]);
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [mcpStats, setMcpStats] = useState({ repos: 255, lines: '39K+', categories: 18 });
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'servers' | 'synergies' | 'workflows' | 'orchestration'>('servers');
  const [query, setQuery] = useState('');
  const [matchResults, setMatchResults] = useState<Array<{server: string; tool: string; relevance: number}>>([]);
  const [executeResult, setExecuteResult] = useState<string>('');

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const [serversRes, synergyRes, workflowRes] = await Promise.all([
        fetch('/api/mcp/servers?action=servers'),
        fetch('/api/mcp/synergy?action=synergy'),
        fetch('/api/mcp/synergy?action=workflows'),
      ]);
      
      const serversData = await serversRes.json();
      const synergyData = await synergyRes.json();
      const workflowData = await workflowRes.json();
      
      setServers(serversData.servers || []);
      setSynergies(synergyData.synergies || []);
      setWorkflows(workflowData.workflows || []);
    } catch (error) {
      console.error('Failed to load MCP data:', error);
    } finally {
      setLoading(false);
    }
  }

  const categories = [...new Set(servers.map(s => s.category))];
  
  const filteredServers = selectedCategory === 'all' 
    ? servers 
    : servers.filter(s => s.category === selectedCategory);

  const handleMatch = async () => {
    if (!query.trim()) return;
    try {
      const res = await fetch(`/api/mcp/synergy?action=match&query=${encodeURIComponent(query)}`);
      const data = await res.json();
      setMatchResults(data.matches || []);
    } catch (error) {
      console.error('Match failed:', error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'bg-green-500';
      case 'error': return 'bg-red-500';
      default: return 'bg-yellow-500';
    }
  };

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      security: '🛡️',
      governance: '⚖️',
      healthcare: '🏥',
      finance: '💰',
      industry: '🏭',
      services: '🛍️',
      defense: '🎖️',
      education: '📚',
      legacy: '💾',
      emerging: '🚀',
      government: '🏛️',
    };
    return icons[category] || '🔧';
  };

  const getCategoryStats = () => {
    const stats: Record<string, { total: number; connected: number }> = {};
    servers.forEach(s => {
      if (!stats[s.category]) stats[s.category] = { total: 0, connected: 0 };
      stats[s.category].total++;
      if (s.status === 'connected') stats[s.category].connected++;
    });
    return stats;
  };

  const getWorkflowTypeStats = () => {
    const types: Record<string, number> = {};
    workflows.forEach(w => {
      const t = w.type || 'sequential';
      types[t] = (types[t] || 0) + 1;
    });
    return types;
  };

  const categoryStats = getCategoryStats();
  const workflowStats = getWorkflowTypeStats();
  const totalTools = servers.reduce((sum, s) => sum + s.tools.length, 0);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">⚡</div>
          <div className="text-xl">Loading MCP Dashboard...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">MCP Control Center</h1>
          <p className="text-gray-400">255 Open-Source MCP Servers • Unified Intelligence Orchestration</p>
        </div>

        {/* External MCP Stats Banner */}
        <div className="mb-8 p-5 rounded-xl border border-purple-500/30 bg-purple-500/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="text-3xl">🔌</div>
              <div>
                <h3 className="text-lg font-bold text-white">MEOK MCP Marketplace</h3>
                <p className="text-gray-400 text-sm">
                  {mcpStats.repos} repos · {mcpStats.lines} lines · {mcpStats.categories} categories · All MIT licensed
                </p>
              </div>
            </div>
            <a
              href="https://csoai-org.github.io/mcp-servers/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg font-semibold text-sm bg-purple-500 hover:bg-purple-400 text-black transition"
            >
              Browse Marketplace →
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="text-3xl font-bold text-blue-400">{servers.length}</div>
            <div className="text-sm text-gray-400">Total Servers</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="text-3xl font-bold text-green-400">
              {servers.filter(s => s.status === 'connected').length}
            </div>
            <div className="text-sm text-gray-400">Online</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="text-3xl font-bold text-purple-400">{categories.length}</div>
            <div className="text-sm text-gray-400">Categories</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="text-3xl font-bold text-yellow-400">{synergies.length}</div>
            <div className="text-sm text-gray-400">Synergies</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-gray-800 pb-4">
          {(['servers', 'synergies', 'workflows', 'orchestration'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg transition ${
                activeTab === tab 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Servers Tab */}
        {activeTab === 'servers' && (
          <div>
            {/* Category Filter */}
            <div className="flex gap-2 mb-6 flex-wrap">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedCategory === 'all' ? 'bg-blue-600' : 'bg-gray-800'
                }`}
              >
                All ({servers.length})
              </button>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 ${
                    selectedCategory === cat ? 'bg-blue-600' : 'bg-gray-800'
                  }`}
                >
                  <span>{getCategoryIcon(cat)}</span>
                  <span>{cat}</span>
                  <span className="opacity-60">({servers.filter(s => s.category === cat).length})</span>
                </button>
              ))}
            </div>

            {/* Server Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredServers.map(server => (
                <div
                  key={server.name}
                  className="bg-gray-900 rounded-lg p-4 border border-gray-800 hover:border-gray-700 transition"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{getCategoryIcon(server.category)}</span>
                      <h3 className="font-semibold text-lg">{server.name}</h3>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(server.status)}`} />
                  </div>
                  <p className="text-sm text-gray-400 mb-3 line-clamp-2">{server.description}</p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {server.tools.slice(0, 4).map(tool => (
                      <span key={tool} className="text-xs bg-gray-800 px-2 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                    {server.tools.length > 4 && (
                      <span className="text-xs text-gray-500">+{server.tools.length - 4} more</span>
                    )}
                  </div>
                  <div className="text-xs text-gray-500">{server.url}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Synergies Tab */}
        {activeTab === 'synergies' && (
          <div className="space-y-4">
            {synergies.map((synergy, i) => (
              <div
                key={i}
                className="bg-gray-900 rounded-lg p-6 border border-gray-800"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{getCategoryIcon(synergy.category.toLowerCase())}</span>
                  <h3 className="text-xl font-semibold">{synergy.category}</h3>
                </div>
                <p className="text-gray-400 mb-4">{synergy.synergy}</p>
                <div className="flex flex-wrap gap-2">
                  {synergy.servers.map(server => (
                    <span key={server} className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">
                      {server}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Workflows Tab */}
        {activeTab === 'workflows' && (
          <div className="space-y-4">
            {workflows.map((workflow, i) => (
              <div
                key={i}
                className="bg-gray-900 rounded-lg p-6 border border-gray-800"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{workflow.name}</h3>
                  <span className="text-sm text-gray-400">{workflow.servers.length} servers</span>
                </div>
                <p className="text-gray-400 mb-4">{workflow.description}</p>
                <div className="space-y-2">
                  {workflow.steps.map((step, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm">
                      <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs">
                        {j + 1}
                      </span>
                      <span className="text-gray-300">{step.server}</span>
                      <span className="text-gray-500">→</span>
                      <span className="text-blue-400">{step.tool}</span>
                      <span className="text-gray-500">({step.description})</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Orchestration Tab */}
        {activeTab === 'orchestration' && (
          <div className="space-y-6">
            {/* Smart Query */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">Smart Query Routing</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Describe your compliance need (e.g., 'HIPAA healthcare data audit')"
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500"
                />
                <button
                  onClick={handleMatch}
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium"
                >
                  Match
                </button>
              </div>
              
              {matchResults.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm text-gray-400 mb-2">Matching Servers & Tools:</h4>
                  <div className="space-y-2">
                    {matchResults.slice(0, 5).map((match, i) => (
                      <div key={i} className="flex items-center gap-3 bg-gray-800 rounded-lg p-3">
                        <span className="text-lg">{getCategoryIcon(servers.find(s => s.name === match.server)?.category || '')}</span>
                        <span className="font-medium">{match.server}</span>
                        <span className="text-blue-400">{match.tool}</span>
                        <span className="text-sm text-gray-500">relevance: {match.relevance}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="bg-gray-900 hover:bg-gray-800 rounded-lg p-4 border border-gray-800 text-left">
                <div className="text-2xl mb-2">🏥</div>
                <div className="font-semibold">Healthcare Audit</div>
                <div className="text-sm text-gray-400">HIPAA + FDA</div>
              </button>
              <button className="bg-gray-900 hover:bg-gray-800 rounded-lg p-4 border border-gray-800 text-left">
                <div className="text-2xl mb-2">🛡️</div>
                <div className="font-semibold">Security Posture</div>
                <div className="text-sm text-gray-400">Full scan</div>
              </button>
              <button className="bg-gray-900 hover:bg-gray-800 rounded-lg p-4 border border-gray-800 text-left">
                <div className="text-2xl mb-2">💰</div>
                <div className="font-semibold">Finance Compliance</div>
                <div className="text-sm text-gray-400">SEC + AML</div>
              </button>
              <button className="bg-gray-900 hover:bg-gray-800 rounded-lg p-4 border border-gray-800 text-left">
                <div className="text-2xl mb-2">⚖️</div>
                <div className="font-semibold">AI Risk Assessment</div>
                <div className="text-sm text-gray-400">EU AI Act</div>
              </button>
            </div>

            {/* Execution Result */}
            {executeResult && (
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-2">Execution Result</h3>
                <pre className="text-sm text-green-400 overflow-x-auto">{executeResult}</pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
