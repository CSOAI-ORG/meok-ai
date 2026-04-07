'use client';

import { useState, useEffect } from 'react';

interface ComplianceFramework {
  id: string;
  name: string;
  description: string;
  region: string;
  mcpServers: string[];
}

interface ComplianceCheck {
  id: string;
  framework: string;
  description: string;
  status: 'pass' | 'fail' | 'pending' | 'warning';
  details: string;
  mcpTools: string[];
}

export default function ComplianceDashboard() {
  const [frameworks, setFrameworks] = useState<ComplianceFramework[]>([]);
  const [checks, setChecks] = useState<ComplianceCheck[]>([]);
  const [selectedFramework, setSelectedFramework] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [runningCheck, setRunningCheck] = useState<string | null>(null);
  const [multiCheck, setMultiCheck] = useState<string[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const [frameworksRes, checksRes] = await Promise.all([
        fetch('/api/compliance?type=frameworks'),
        fetch('/api/compliance?type=checks'),
      ]);
      
      const frameworksData = await frameworksRes.json();
      const checksData = await checksRes.json();
      
      setFrameworks(frameworksData.frameworks || []);
      setChecks(checksData.checks || []);
    } catch (error) {
      console.error('Failed to load compliance data:', error);
    } finally {
      setLoading(false);
    }
  }

  const runCheck = async (checkId: string, framework: string) => {
    setRunningCheck(checkId);
    try {
      const res = await fetch('/api/compliance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ framework, checkType: checkId, verifyWithMcp: true }),
      });
      const data = await res.json();
      
      setChecks(prev => prev.map(c => 
        c.id === checkId 
          ? { ...c, status: data.result?.status === 'PASS' ? 'pass' : 'warning', details: data.result?.details || '' }
          : c
      ));
    } catch (error) {
      console.error('Check failed:', error);
    } finally {
      setRunningCheck(null);
    }
  };

  const runMultiFrameworkCheck = async () => {
    if (multiCheck.length === 0) return;
    setRunningCheck('multi');
    try {
      const res = await fetch('/api/compliance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          multiFramework: multiCheck,
          checkType: 'data_encryption',
          context: {},
        }),
      });
      const data = await res.json();
      console.log('Multi-check result:', data);
    } catch (error) {
      console.error('Multi-check failed:', error);
    } finally {
      setRunningCheck(null);
    }
  };

  const filteredChecks = selectedFramework === 'all'
    ? checks
    : checks.filter(c => c.framework === selectedFramework);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pass': return 'text-green-400 bg-green-900/30';
      case 'fail': return 'text-red-400 bg-red-900/30';
      case 'warning': return 'text-yellow-400 bg-yellow-900/30';
      default: return 'text-gray-400 bg-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass': return '✓';
      case 'fail': return '✗';
      case 'warning': return '⚠';
      default: return '○';
    }
  };

  const stats = {
    total: checks.length,
    pass: checks.filter(c => c.status === 'pass').length,
    fail: checks.filter(c => c.status === 'fail').length,
    pending: checks.filter(c => c.status === 'pending').length,
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">⚖️</div>
          <div className="text-xl">Loading Compliance Dashboard...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Compliance Command Center</h1>
          <p className="text-gray-400">15+ Frameworks • MCP-Powered Verification • Real-time Monitoring</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="text-3xl font-bold text-blue-400">{stats.total}</div>
            <div className="text-sm text-gray-400">Total Checks</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="text-3xl font-bold text-green-400">{stats.pass}</div>
            <div className="text-sm text-gray-400">Passed</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="text-3xl font-bold text-red-400">{stats.fail}</div>
            <div className="text-sm text-gray-400">Failed</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="text-3xl font-bold text-yellow-400">{stats.pending}</div>
            <div className="text-sm text-gray-400">Pending</div>
          </div>
        </div>

        {/* Frameworks */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Supported Frameworks</h2>
          <div className="flex flex-wrap gap-2">
            {frameworks.map(fw => (
              <div key={fw.id} className="bg-gray-900 rounded-lg p-3 border border-gray-800">
                <div className="font-semibold">{fw.name}</div>
                <div className="text-xs text-gray-500">{fw.region}</div>
                <div className="text-xs text-blue-400 mt-1">{fw.mcpServers?.length || 0} MCP servers</div>
              </div>
            ))}
          </div>
        </div>

        {/* Multi-Framework Check */}
        <div className="mb-8 bg-gray-900 rounded-lg p-6 border border-gray-800">
          <h2 className="text-xl font-semibold mb-4">Multi-Framework Audit</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {frameworks.map(fw => (
              <label key={fw.id} className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg cursor-pointer">
                <input
                  type="checkbox"
                  checked={multiCheck.includes(fw.id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setMultiCheck([...multiCheck, fw.id]);
                    } else {
                      setMultiCheck(multiCheck.filter(f => f !== fw.id));
                    }
                  }}
                  className="w-4 h-4"
                />
                <span>{fw.name}</span>
              </label>
            ))}
          </div>
          <button
            onClick={runMultiFrameworkCheck}
            disabled={runningCheck !== null || multiCheck.length === 0}
            className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 px-6 py-2 rounded-lg font-medium"
          >
            {runningCheck === 'multi' ? 'Running...' : `Run Multi-Framework Audit (${multiCheck.length})`}
          </button>
        </div>

        {/* Filter */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setSelectedFramework('all')}
            className={`px-4 py-2 rounded-lg ${
              selectedFramework === 'all' ? 'bg-blue-600' : 'bg-gray-800'
            }`}
          >
            All ({checks.length})
          </button>
          {frameworks.map(fw => (
            <button
              key={fw.id}
              onClick={() => setSelectedFramework(fw.id)}
              className={`px-4 py-2 rounded-lg ${
                selectedFramework === fw.id ? 'bg-blue-600' : 'bg-gray-800'
              }`}
            >
              {fw.name} ({checks.filter(c => c.framework === fw.id).length})
            </button>
          ))}
        </div>

        {/* Checks */}
        <div className="space-y-3">
          {filteredChecks.map(check => (
            <div
              key={check.id}
              className="bg-gray-900 rounded-lg p-4 border border-gray-800"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getStatusColor(check.status)}`}>
                    {getStatusIcon(check.status)}
                  </div>
                  <div>
                    <div className="font-semibold">{check.id.replace(/_/g, ' ')}</div>
                    <div className="text-sm text-gray-400">{check.description}</div>
                    <div className="text-xs text-gray-500 mt-1">Framework: {check.framework}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex flex-wrap gap-1">
                    {check.mcpTools?.map((tool, i) => (
                      <span key={i} className="text-xs bg-gray-800 px-2 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => runCheck(check.id, check.framework)}
                    disabled={runningCheck !== null}
                    className="bg-gray-700 hover:bg-gray-600 disabled:opacity-50 px-4 py-2 rounded-lg text-sm"
                  >
                    {runningCheck === check.id ? 'Running...' : 'Run Check'}
                  </button>
                </div>
              </div>
              {check.details && (
                <div className="mt-3 text-sm text-gray-400 bg-gray-800 rounded p-2">
                  {check.details}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
