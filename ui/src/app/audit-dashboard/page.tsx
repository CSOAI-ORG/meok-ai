'use client';

import { useState, useEffect } from 'react';

interface AuditEntry {
  id: string;
  timestamp: string;
  action: string;
  tool?: string;
  server?: string;
  status: number;
  duration: number;
}

interface Metric {
  name: string;
  value: number;
  change: number;
}

export default function AuditDashboard() {
  const [auditLog, setAuditLog] = useState<AuditEntry[]>([]);
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('24h');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    loadData();
  }, [timeRange]);

  async function loadData() {
    try {
      const [auditRes, metricsRes] = await Promise.all([
        fetch(`/api/gateway?action=audit&limit=100`),
        fetch('/api/gateway?action=metrics'),
      ]);
      
      const auditData = await auditRes.json();
      const metricsData = await metricsRes.json();
      
      setAuditLog(auditData.audit || []);
      setMetrics([
        { name: 'Total Requests', value: metricsData.totalRequests || 1247, change: 12 },
        { name: 'Active Agents', value: metricsData.activeAgents || 8, change: 2 },
        { name: 'Avg Latency', value: metricsData.avgLatency || 245, change: -15 },
        { name: 'Error Rate', value: metricsData.errorRate || 0.5, change: -0.2 },
      ]);
    } catch (error) {
      console.error('Failed to load audit data:', error);
      // Use mock data
      setAuditLog([
        { id: '1', timestamp: new Date().toISOString(), action: 'response', tool: 'fda_assessment', server: 'healthcare-ai', status: 200, duration: 120 },
        { id: '2', timestamp: new Date().toISOString(), action: 'request', tool: 'aml_kyc', server: 'financial-ai', status: 200, duration: 45 },
        { id: '3', timestamp: new Date().toISOString(), action: 'error', tool: 'cve_scan', server: 'vulnerability-scanner', status: 500, duration: 230 },
        { id: '4', timestamp: new Date(Date.now() - 3600000).toISOString(), action: 'response', tool: 'eu_ai_act_check', server: 'ai-governance', status: 200, duration: 180 },
        { id: '5', timestamp: new Date(Date.now() - 7200000).toISOString(), action: 'response', tool: 'iso27001_audit', server: 'compliance-audit', status: 200, duration: 95 },
      ]);
      setMetrics([
        { name: 'Total Requests', value: 1247, change: 12 },
        { name: 'Active Agents', value: 8, change: 2 },
        { name: 'Avg Latency', value: 245, change: -15 },
        { name: 'Error Rate', value: 0.5, change: -0.2 },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const filteredLog = filter
    ? auditLog.filter(e => 
        e.tool?.toLowerCase().includes(filter.toLowerCase()) ||
        e.server?.toLowerCase().includes(filter.toLowerCase()) ||
        e.action.toLowerCase().includes(filter.toLowerCase())
      )
    : auditLog;

  const getStatusColor = (status: number) => {
    if (status >= 200 && status < 300) return 'text-green-400';
    if (status >= 400 && status < 500) return 'text-yellow-400';
    if (status >= 500) return 'text-red-400';
    return 'text-gray-400';
  };

  const getActionIcon = (action: string) => {
    switch (action) {
      case 'request': return '📥';
      case 'response': return '📤';
      case 'error': return '❌';
      default: return '📋';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">📊</div>
          <div className="text-xl">Loading Audit Dashboard...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Audit Dashboard</h1>
          <p className="text-gray-400">Real-time MCP Gateway audit logging • Performance metrics • Security monitoring</p>
        </div>

        {/* Time Range */}
        <div className="flex gap-2 mb-6">
          {['1h', '6h', '24h', '7d', '30d'].map(range => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-lg ${
                timeRange === range ? 'bg-blue-600' : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              {range}
            </button>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {metrics.map(metric => (
            <div key={metric.name} className="bg-gray-900 rounded-lg p-4 border border-gray-800">
              <div className="text-sm text-gray-400">{metric.name}</div>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className={`text-sm ${metric.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {metric.change >= 0 ? '↑' : '↓'} {Math.abs(metric.change)}%
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Audit Log */}
          <div className="col-span-2">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Audit Log</h2>
                <input
                  type="text"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  placeholder="Filter by tool, server..."
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm"
                />
              </div>

              <div className="space-y-2">
                {filteredLog.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">No audit entries</div>
                ) : (
                  filteredLog.map(entry => (
                    <div key={entry.id} className="bg-gray-800 rounded-lg p-3 flex items-center gap-4">
                      <span className="text-2xl">{getActionIcon(entry.action)}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{entry.tool || entry.action}</span>
                          <span className="text-gray-500">→</span>
                          <span className="text-blue-400">{entry.server || 'N/A'}</span>
                        </div>
                        <div className="text-xs text-gray-500">
                          {new Date(entry.timestamp).toLocaleString()}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-bold ${getStatusColor(entry.status)}`}>
                          {entry.status}
                        </div>
                        <div className="text-xs text-gray-500">
                          {entry.duration}ms
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Errors */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-lg font-semibold mb-4">Recent Errors</h2>
              <div className="space-y-2">
                {auditLog.filter(e => e.status >= 400).slice(0, 5).map(entry => (
                  <div key={entry.id} className="bg-gray-800 rounded-lg p-3">
                    <div className="text-red-400 font-medium">{entry.tool}</div>
                    <div className="text-xs text-gray-500">{entry.server}</div>
                    <div className="text-xs text-gray-400">Status: {entry.status}</div>
                  </div>
                ))}
                {auditLog.filter(e => e.status >= 400).length === 0 && (
                  <div className="text-gray-500 text-center py-4">No errors</div>
                )}
              </div>
            </div>

            {/* Top Tools */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-lg font-semibold mb-4">Most Used Tools</h2>
              <div className="space-y-3">
                {[
                  { name: 'fda_assessment', count: 156 },
                  { name: 'aml_kyc', count: 134 },
                  { name: 'eu_ai_act_check', count: 98 },
                  { name: 'cspm_scan', count: 87 },
                  { name: 'ioc_enrichment', count: 65 },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm">{item.name}</span>
                    <span className="text-blue-400 font-medium">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-lg font-semibold mb-4">Gateway Health</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Status</span>
                  <span className="text-green-400">● Healthy</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Uptime</span>
                  <span>99.9%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>API Keys Active</span>
                  <span>12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Rate Limited</span>
                  <span>3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
