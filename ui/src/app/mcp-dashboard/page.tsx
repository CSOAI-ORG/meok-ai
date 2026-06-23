'use client';

import { useState, useEffect } from 'react';
import { Surface, GlowText, StatCard, FeatureCard, IconOrb } from '@/components/design-system';
import { Server, Zap, Layers, Workflow, Search, ArrowRight, Activity, GitBranch, Package, Plus, Terminal } from 'lucide-react';

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
      case 'connected': return 'bg-green-500 animate-glow-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]';
      case 'error': return 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]';
      default: return 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]';
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
      <div className="min-h-screen bg-[#0d0c18] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">⚡</div>
          <div className="text-xl">Loading MCP Dashboard...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <GlowText variant="gold" as="span">MCP Control Center</GlowText>
          </h1>
          <p className="text-white/50">255 Open-Source MCP Servers • Unified Intelligence Orchestration</p>
        </div>

        {/* External MCP Stats Banner */}
        <Surface variant="glass" glow="purple" className="mb-8 p-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <IconOrb icon={Package} variant="purple" size="lg" pulse />
              <div>
                <h3 className="text-lg font-bold text-white">MEOK MCP Marketplace</h3>
                <p className="text-white/50 text-sm">
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
        </Surface>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard
            label="Marketplace Repos"
            value={mcpStats.repos}
            icon={<GitBranch className="w-5 h-5" />}
            glow="gold"
          />
          <StatCard
            label="Lines of Code"
            value={mcpStats.lines}
            icon={<Terminal className="w-5 h-5" />}
            glow="blue"
          />
          <StatCard
            label="Categories"
            value={mcpStats.categories}
            icon={<Layers className="w-5 h-5" />}
            glow="purple"
          />
          <StatCard
            label="Connected Servers"
            value={servers.filter(s => s.status === 'connected').length}
            icon={<Activity className="w-5 h-5" />}
            glow="teal"
          />
        </div>

        {/* Secondary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard
            label="Total Servers"
            value={servers.length}
            icon={<Server className="w-5 h-5" />}
            glow="gold"
          />
          <StatCard
            label="Total Tools"
            value={totalTools}
            icon={<Zap className="w-5 h-5" />}
            glow="orange"
          />
          <StatCard
            label="Active Categories"
            value={categories.length}
            icon={<Layers className="w-5 h-5" />}
            glow="purple"
          />
          <StatCard
            label="Workflows"
            value={workflows.length}
            icon={<Workflow className="w-5 h-5" />}
            glow="orange"
          />
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-white/10 pb-4">
          {(['servers', 'synergies', 'workflows', 'orchestration'] as const).map(tab => (
            <button type="button"
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl transition-all font-medium text-sm ${
                activeTab === tab 
                  ? 'bg-white/10 text-white shadow-[0_0_0_1px_rgba(201,168,76,0.3),0_4px_20px_rgba(201,168,76,0.15)] border border-[rgba(201,168,76,0.2)]' 
                  : 'bg-white/[0.03] text-white/50 hover:bg-white/[0.06] hover:text-white border border-transparent'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Servers Tab */}
        {activeTab === 'servers' && (
          <div className="animate-fade-in-up">
            {/* Category Filter */}
            <div className="flex gap-2 mb-6 flex-wrap">
              <button type="button"
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-[rgba(201,168,76,0.2)] text-[#c9a84c] border border-[rgba(201,168,76,0.4)] shadow-[0_0_12px_rgba(201,168,76,0.2)]'
                    : 'bg-white/[0.05] text-white/60 border border-white/10 hover:border-white/20'
                }`}
              >
                All ({servers.length})
              </button>
              {categories.map(cat => (
                <button type="button"
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-sm flex items-center gap-1.5 transition-all ${
                    selectedCategory === cat
                      ? 'bg-[rgba(201,168,76,0.2)] text-[#c9a84c] border border-[rgba(201,168,76,0.4)] shadow-[0_0_12px_rgba(201,168,76,0.2)]'
                      : 'bg-white/[0.05] text-white/60 border border-white/10 hover:border-white/20'
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
                <Surface
                  key={server.name}
                  variant="elevated"
                  className="p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{getCategoryIcon(server.category)}</span>
                      <h3 className="font-semibold text-lg text-white">{server.name}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        server.status === 'connected' ? 'bg-green-500/15 text-green-400' :
                        server.status === 'error' ? 'bg-red-500/15 text-red-400' :
                        'bg-yellow-500/15 text-yellow-400'
                      }`}>
                        {server.status}
                      </span>
                      <div className={`w-2.5 h-2.5 rounded-full ${getStatusColor(server.status)}`} />
                    </div>
                  </div>
                  <p className="text-sm text-white/50 mb-4 line-clamp-2">{server.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {server.tools.slice(0, 4).map(tool => (
                      <span key={tool} className="text-xs bg-white/[0.06] px-2 py-1 rounded-md text-white/70 border border-white/[0.05]">
                        {tool}
                      </span>
                    ))}
                    {server.tools.length > 4 && (
                      <span className="text-xs text-white/40 px-1">+{server.tools.length - 4} more</span>
                    )}
                  </div>
                  <div className="text-xs text-white/30 font-mono truncate pt-3 border-t border-white/[0.05]">
                    {server.url}
                  </div>
                </Surface>
              ))}
            </div>
          </div>
        )}

        {/* Synergies Tab */}
        {activeTab === 'synergies' && (
          <div className="space-y-4 animate-fade-in-up">
            {synergies.map((synergy, i) => (
              <Surface
                key={i}
                variant="glass"
                glow="purple"
                className="p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <IconOrb icon={Layers} variant="purple" size="sm" />
                  <h3 className="text-xl font-semibold text-white">{synergy.category}</h3>
                </div>
                <p className="text-white/50 mb-4">{synergy.synergy}</p>
                <div className="flex flex-wrap gap-2">
                  {synergy.servers.map(server => (
                    <span key={server} className="bg-purple-500/15 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/20">
                      {server}
                    </span>
                  ))}
                </div>
              </Surface>
            ))}
          </div>
        )}

        {/* Workflows Tab */}
        {activeTab === 'workflows' && (
          <div className="space-y-6 animate-fade-in-up">
            {workflows.map((workflow, i) => (
              <Surface
                key={i}
                variant="glass"
                glow="gold"
                className="p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <IconOrb icon={GitBranch} variant="blue" size="sm" />
                    <h3 className="text-xl font-semibold text-white">{workflow.name}</h3>
                  </div>
                  <span className="text-sm text-white/40 bg-white/[0.05] px-3 py-1 rounded-full border border-white/[0.08]">
                    {workflow.servers.length} servers
                  </span>
                </div>
                <p className="text-white/50 mb-5">{workflow.description}</p>
                <div className="space-y-3">
                  {workflow.steps.map((step, j) => (
                    <Surface key={j} variant="elevated" className="p-3 flex items-center gap-3">
                      <span className="w-6 h-6 bg-[rgba(201,168,76,0.2)] text-[#c9a84c] rounded-full flex items-center justify-center text-xs font-medium border border-[rgba(201,168,76,0.3)]">
                        {j + 1}
                      </span>
                      <span className="text-white/70 font-medium">{step.server}</span>
                      <span className="text-white/30">→</span>
                      <span className="text-blue-400">{step.tool}</span>
                      <span className="text-white/30 text-xs ml-auto">{step.description}</span>
                    </Surface>
                  ))}
                </div>
              </Surface>
            ))}
          </div>
        )}

        {/* Orchestration Tab */}
        {activeTab === 'orchestration' && (
          <div className="space-y-6 animate-fade-in-up">
            {/* Smart Query */}
            <Surface variant="glass" glow="gold" className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <IconOrb icon={Search} variant="gold" size="sm" />
                <h3 className="text-xl font-semibold text-white">Smart Query Routing</h3>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Describe your compliance need (e.g., 'HIPAA healthcare data audit')"
                  className="flex-1 bg-white/[0.05] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-[rgba(201,168,76,0.4)]"
                />
                <button type="button"
                  onClick={handleMatch}
                  className="bg-[#c9a84c] hover:opacity-90 text-black px-6 py-2 rounded-xl font-medium transition-all"
                >
                  Match
                </button>
              </div>
              
              {matchResults.length > 0 && (
                <div className="mt-5">
                  <h4 className="text-sm text-white/40 mb-3">Matching Servers & Tools:</h4>
                  <div className="space-y-2">
                    {matchResults.slice(0, 5).map((match, i) => (
                      <Surface key={i} variant="elevated" className="flex items-center gap-3 p-3">
                        <span className="text-lg">{getCategoryIcon(servers.find(s => s.name === match.server)?.category || '')}</span>
                        <span className="font-medium text-white">{match.server}</span>
                        <span className="text-blue-400">{match.tool}</span>
                        <span className="text-sm text-white/40 ml-auto">relevance: {match.relevance}</span>
                      </Surface>
                    ))}
                  </div>
                </div>
              )}
            </Surface>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <FeatureCard
                title="Healthcare Audit"
                description="HIPAA + FDA compliance workflows"
                icon={Activity}
                iconVariant="teal"
                glow="teal"
                className="text-left"
              />
              <FeatureCard
                title="Security Posture"
                description="Full vulnerability scan"
                icon={Zap}
                iconVariant="orange"
                glow="orange"
                className="text-left"
              />
              <FeatureCard
                title="Finance Compliance"
                description="SEC + AML risk checks"
                icon={Layers}
                iconVariant="green"
                glow="gold"
                className="text-left"
              />
              <FeatureCard
                title="AI Risk Assessment"
                description="EU AI Act coverage"
                icon={ArrowRight}
                iconVariant="purple"
                glow="purple"
                className="text-left"
              />
            </div>

            {/* Execution Result */}
            {executeResult && (
              <Surface variant="elevated" className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-white">Execution Result</h3>
                <pre className="text-sm text-green-400 overflow-x-auto">{executeResult}</pre>
              </Surface>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
