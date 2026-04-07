'use client';

import { useState, useEffect } from 'react';

interface SystemStatus {
  status: string;
  count?: number;
  active?: number;
  servers?: number;
  connected?: number;
  consciousness?: string;
  careScore?: number;
  agents?: number;
  frameworks?: number;
  templates?: number;
}

interface IntegrationStatus {
  status: string;
  mappings?: number;
  frameworksMapped?: number;
  templatesUsingMcp?: number;
  consciousnessIntegration?: boolean;
}

export default function UnifiedDashboard() {
  const [loading, setLoading] = useState(true);
  const [systemStatus, setSystemStatus] = useState<Record<string, SystemStatus>>({});
  const [stats, setStats] = useState<{
    overview: Record<string, number>;
    usage: Record<string, number>;
  } | null>(null);
  const [integrations, setIntegrations] = useState<Record<string, IntegrationStatus>>({});
  const [selectedSystem, setSelectedSystem] = useState<string | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const [statusRes, statsRes, integrationRes] = await Promise.all([
        fetch('/api/unified/command?action=status'),
        fetch('/api/unified/command?action=stats'),
        fetch('/api/unified/command?action=integrations'),
      ]);
      
      const statusData = await statusRes.json();
      const statsData = await statsRes.json();
      const integrationData = await integrationRes.json();
      
      setSystemStatus(statusData.systems || {});
      setStats(statsData);
      setIntegrations(integrationData);
    } catch (error) {
      console.error('Failed to load unified data:', error);
    } finally {
      setLoading(false);
    }
  }

  const systems = [
    { id: 'characters', icon: '👤', name: 'Characters', description: 'AI companions with evolution' },
    { id: 'mcp', icon: '🔌', name: 'MCP Servers', description: '50+ compliance servers' },
    { id: 'sov3', icon: '🧠', name: 'SOV3', description: 'Consciousness engine' },
    { id: 'agents', icon: '🤖', name: 'Agents', description: 'Task orchestration' },
    { id: 'compliance', icon: '⚖️', name: 'Compliance', description: '15+ frameworks' },
    { id: 'research', icon: '🔬', name: 'Research', description: 'MCP-powered research' },
    { id: 'voice', icon: '🎤', name: 'Voice', description: 'Voice synthesis' },
  ];

  const getSystemValue = (system: string, key: keyof SystemStatus): string | number => {
    const s = systemStatus[system];
    if (!s) return '-';
    return s[key] ?? '-';
  };

  const integrationLinks = [
    { from: 'MCP', to: 'Characters', status: integrations.mcpToCharacters?.status === 'active' },
    { from: 'MCP', to: 'Compliance', status: integrations.mcpToCompliance?.status === 'active' },
    { from: 'MCP', to: 'Research', status: integrations.mcpToResearch?.status === 'active' },
    { from: 'SOV3', to: 'MCP', status: integrations.sov3ToMcp?.status === 'active' },
    { from: 'SOV3', to: 'Characters', status: integrations.sov3ToCharacters?.status === 'active' },
    { from: 'Agents', to: 'MCP', status: integrations.agentsToMcp?.status === 'active' },
    { from: 'Voice', to: 'Characters', status: integrations.voiceToCharacters?.status === 'active' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">🎛️</div>
          <div className="text-xl">Loading Unified Command Center...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Unified Command Center</h1>
          <p className="text-gray-400">MEOK OS v3.0 • All Systems Integrated • Real-time Monitoring</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="text-3xl font-bold text-blue-400">{stats?.overview.totalCharacters || 0}</div>
            <div className="text-sm text-gray-400">Total Characters</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="text-3xl font-bold text-purple-400">{stats?.overview.totalMcpServers || 0}</div>
            <div className="text-sm text-gray-400">MCP Servers</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="text-3xl font-bold text-green-400">{stats?.overview.complianceFrameworks || 0}</div>
            <div className="text-sm text-gray-400">Compliance Frameworks</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="text-3xl font-bold text-yellow-400">{Math.round((stats?.sov3?.careScore || 0) * 100)}%</div>
            <div className="text-sm text-gray-400">SOV3 Care Score</div>
          </div>
        </div>

        {/* System Cards */}
        <div className="grid grid-cols-7 gap-3 mb-8">
          {systems.map(sys => (
            <button
              key={sys.id}
              onClick={() => setSelectedSystem(selectedSystem === sys.id ? null : sys.id)}
              className={`p-4 rounded-lg text-center transition ${
                selectedSystem === sys.id 
                  ? 'bg-blue-900/50 border-2 border-blue-500' 
                  : 'bg-gray-900 border-2 border-gray-800 hover:border-gray-600'
              }`}
            >
              <div className="text-3xl mb-2">{sys.icon}</div>
              <div className="font-semibold text-sm">{sys.name}</div>
              <div className={`text-xs mt-1 ${
                systemStatus[sys.id]?.status === 'online' ? 'text-green-400' : 'text-gray-500'
              }`}>
                {systemStatus[sys.id]?.status || 'offline'}
              </div>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* System Details */}
          <div className="col-span-2 space-y-6">
            {/* Selected System Details */}
            {selectedSystem && (
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <h2 className="text-xl font-semibold mb-4">
                  {systems.find(s => s.id === selectedSystem)?.icon}{' '}
                  {systems.find(s => s.id === selectedSystem)?.name}
                </h2>
                <p className="text-gray-400 mb-4">
                  {systems.find(s => s.id === selectedSystem)?.description}
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(systemStatus[selectedSystem] || {}).map(([key, value]) => (
                    <div key={key} className="bg-gray-800 rounded-lg p-3">
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                      <div className="text-lg font-bold">
                        {typeof value === 'number' ? value : value}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 mt-4">
                  <a
                    href={`/${selectedSystem}-dashboard`}
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm"
                  >
                    Open Dashboard
                  </a>
                </div>
              </div>
            )}

            {/* Usage Stats */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-semibold mb-4">Today's Usage</h2>
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{stats?.usage.messagesToday || 0}</div>
                  <div className="text-xs text-gray-400">Messages</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{stats?.usage.researchesToday || 0}</div>
                  <div className="text-xs text-gray-400">Researches</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{stats?.usage.complianceChecksToday || 0}</div>
                  <div className="text-xs text-gray-400">Compliance Checks</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">{stats?.usage.voiceCallsToday || 0}</div>
                  <div className="text-xs text-gray-400">Voice Calls</div>
                </div>
              </div>
            </div>

            {/* Integration Links */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-semibold mb-4">System Integrations</h2>
              <div className="space-y-2">
                {integrationLinks.map((link, i) => (
                  <div key={i} className="flex items-center justify-between bg-gray-800 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{link.from}</span>
                      <span className="text-gray-500">→</span>
                      <span className="font-medium">{link.to}</span>
                    </div>
                    <span className={`text-sm ${link.status ? 'text-green-400' : 'text-red-400'}`}>
                      {link.status ? '● Active' : '○ Inactive'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Links */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-lg font-semibold mb-4">Dashboards</h2>
              <div className="space-y-2">
                {[
                  { name: 'MCP Dashboard', path: '/mcp-dashboard', icon: '🔌' },
                  { name: 'Compliance', path: '/compliance-dashboard', icon: '⚖️' },
                  { name: 'Agents', path: '/agent-orchestration', icon: '🤖' },
                  { name: 'Characters', path: '/character-dashboard', icon: '👤' },
                  { name: 'Research', path: '/research-dashboard', icon: '🔬' },
                ].map(item => (
                  <a
                    key={item.path}
                    href={item.path}
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 rounded-lg px-3 py-2"
                  >
                    <span>{item.icon}</span>
                    <span className="text-sm">{item.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* SOV3 Status */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-lg font-semibold mb-4">SOV3 Status</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Consciousness</span>
                  <span className="text-green-400">{stats?.sov3.consciousnessLevel || 'unknown'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Care Score</span>
                  <span className="text-blue-400">{Math.round((stats?.sov3.careScore || 0) * 100)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Memory Episodes</span>
                  <span>{stats?.sov3.memoryEpisodes || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Council Nodes</span>
                  <span>{stats?.sov3.councilNodes || 0}</span>
                </div>
              </div>
            </div>

            {/* System Health */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-lg font-semibold mb-4">System Health</h2>
              <div className="space-y-2">
                {systems.map(sys => (
                  <div key={sys.id} className="flex items-center justify-between">
                    <span className="text-sm">{sys.name}</span>
                    <span className={`text-xs ${
                      systemStatus[sys.id]?.status === 'online' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {systemStatus[sys.id]?.status || 'offline'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
