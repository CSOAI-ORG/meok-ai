'use client';

import { useState, useEffect } from 'react';

interface WorkflowStep {
  id: string;
  server: string;
  tool: string;
  description: string;
  dependsOn?: string[];
  condition?: string;
  timeout?: number;
}

interface Workflow {
  name: string;
  description: string;
  type: 'sequential' | 'parallel' | 'conditional' | 'planning_floor';
  requiresApproval: boolean;
  gates?: { field: string; value: string }[];
  steps: WorkflowStep[];
}

interface MCPServer {
  name: string;
  tools: string[];
  category: string;
}

interface PlanningFloor {
  name: string;
  description: string;
  workflows: string[];
}

export default function WorkflowBuilder() {
  const [servers, setServers] = useState<MCPServer[]>([]);
  const [planningFloors, setPlanningFloors] = useState<PlanningFloor[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentWorkflow, setCurrentWorkflow] = useState<Workflow>({
    name: '',
    description: '',
    type: 'sequential',
    requiresApproval: false,
    steps: [],
  });
  const [selectedStep, setSelectedStep] = useState<string | null>(null);
  const [savedWorkflows, setSavedWorkflows] = useState<Workflow[]>([]);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<string>('');

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const [serversRes, floorsRes, workflowsRes] = await Promise.all([
        fetch('/api/mcp/servers?action=servers'),
        fetch('/api/mcp/synergy?action=planning_floors'),
        fetch('/api/mcp/synergy?action=workflows'),
      ]);
      
      const serversData = await serversRes.json();
      const floorsData = await floorsRes.json();
      const workflowsData = await workflowsRes.json();
      
      setServers(serversData.servers || []);
      setPlanningFloors(floorsData.planningFloors || []);
      setSavedWorkflows(workflowsData.workflows || []);
    } catch (error) {
      console.error('Failed to load data:', error);
    } finally {
      setLoading(false);
    }
  }

  const addStep = () => {
    const newStep: WorkflowStep = {
      id: `step_${Date.now()}`,
      server: servers[0]?.name || '',
      tool: '',
      description: '',
    };
    setCurrentWorkflow({
      ...currentWorkflow,
      steps: [...currentWorkflow.steps, newStep],
    });
    setSelectedStep(newStep.id);
  };

  const updateStep = (stepId: string, updates: Partial<WorkflowStep>) => {
    setCurrentWorkflow({
      ...currentWorkflow,
      steps: currentWorkflow.steps.map(s => 
        s.id === stepId ? { ...s, ...updates } : s
      ),
    });
  };

  const removeStep = (stepId: string) => {
    setCurrentWorkflow({
      ...currentWorkflow,
      steps: currentWorkflow.steps.filter(s => s.id !== stepId),
    });
    if (selectedStep === stepId) setSelectedStep(null);
  };

  const saveWorkflow = async () => {
    try {
      const res = await fetch('/api/mcp/synergy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'chain_execute',
          chain: currentWorkflow.steps.map(s => ({ server: s.server, tool: s.tool })),
        }),
      });
      const data = await res.json();
      setTestResult(`Workflow saved! Executed ${data.results?.length || 0} steps.`);
    } catch (error) {
      setTestResult('Error saving workflow');
    }
  };

  const testWorkflow = async () => {
    if (currentWorkflow.steps.length === 0) return;
    setTesting(true);
    setTestResult('');
    
    try {
      const res = await fetch('/api/mcp/synergy?action=execute_workflow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          workflow: currentWorkflow.name || 'custom_workflow',
        }),
      });
      const data = await res.json();
      setTestResult(`Test complete: ${data.summary || 'unknown'}`);
    } catch (error) {
      setTestResult('Test failed');
    } finally {
      setTesting(false);
    }
  };

  const workflowTypes = [
    { id: 'sequential', name: 'Sequential', icon: '📝', description: 'Steps run one after another' },
    { id: 'parallel', name: 'Parallel', icon: '⚡', description: 'Steps run simultaneously' },
    { id: 'conditional', name: 'Conditional', icon: '🔀', description: 'Steps run based on conditions' },
    { id: 'planning_floor', name: 'Planning Floor', icon: '🏗️', description: 'Multi-phase workflow' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">🏗️</div>
          <div className="text-xl">Loading Workflow Builder...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Workflow Builder</h1>
          <p className="text-gray-400">Design MCP workflows with planning floors • Conditional execution • Human approval</p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Left Panel - Workflow Config */}
          <div className="col-span-2 space-y-6">
            {/* Workflow Name & Type */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-semibold mb-4">Workflow Configuration</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Workflow Name</label>
                  <input
                    type="text"
                    value={currentWorkflow.name}
                    onChange={(e) => setCurrentWorkflow({ ...currentWorkflow, name: e.target.value })}
                    placeholder="my_workflow"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Description</label>
                  <input
                    type="text"
                    value={currentWorkflow.description}
                    onChange={(e) => setCurrentWorkflow({ ...currentWorkflow, description: e.target.value })}
                    placeholder="What does this workflow do?"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2"
                  />
                </div>
              </div>
              
              {/* Workflow Type */}
              <label className="text-sm text-gray-400 mb-2 block">Workflow Type</label>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {workflowTypes.map(type => (
                  <button
                    key={type.id}
                    onClick={() => setCurrentWorkflow({ ...currentWorkflow, type: type.id as Workflow['type'] })}
                    className={`p-3 rounded-lg text-center transition ${
                      currentWorkflow.type === type.id
                        ? 'bg-blue-600 border-2 border-blue-400'
                        : 'bg-gray-800 hover:bg-gray-700 border-2 border-transparent'
                    }`}
                  >
                    <div className="text-2xl mb-1">{type.icon}</div>
                    <div className="font-medium text-sm">{type.name}</div>
                    <div className="text-xs text-gray-500">{type.description}</div>
                  </button>
                ))}
              </div>

              {/* Options */}
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={currentWorkflow.requiresApproval}
                    onChange={(e) => setCurrentWorkflow({ ...currentWorkflow, requiresApproval: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <span>Requires Human Approval</span>
                </label>
              </div>
            </div>

            {/* Steps */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Workflow Steps ({currentWorkflow.steps.length})</h2>
                <button
                  onClick={addStep}
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
                >
                  + Add Step
                </button>
              </div>

              {currentWorkflow.steps.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  No steps yet. Click "Add Step" to start building.
                </div>
              ) : (
                <div className="space-y-3">
                  {currentWorkflow.steps.map((step, index) => (
                    <div
                      key={step.id}
                      onClick={() => setSelectedStep(step.id)}
                      className={`bg-gray-800 rounded-lg p-4 border-2 cursor-pointer transition ${
                        selectedStep === step.id ? 'border-blue-500' : 'border-transparent hover:border-gray-600'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1 grid grid-cols-3 gap-2">
                          <select
                            value={step.server}
                            onChange={(e) => updateStep(step.id, { server: e.target.value, tool: '' })}
                            className="bg-gray-700 border border-gray-600 rounded px-2 py-1"
                          >
                            <option value="">Select Server...</option>
                            {servers.map(s => (
                              <option key={s.name} value={s.name}>{s.name}</option>
                            ))}
                          </select>
                          <select
                            value={step.tool}
                            onChange={(e) => updateStep(step.id, { tool: e.target.value })}
                            className="bg-gray-700 border border-gray-600 rounded px-2 py-1"
                          >
                            <option value="">Select Tool...</option>
                            {servers.find(s => s.name === step.server)?.tools.map(t => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                          <input
                            type="text"
                            value={step.description}
                            onChange={(e) => updateStep(step.id, { description: e.target.value })}
                            placeholder="Description"
                            className="bg-gray-700 border border-gray-600 rounded px-2 py-1"
                          />
                        </div>
                        <button
                          onClick={(e) => { e.stopPropagation(); removeStep(step.id); }}
                          className="text-red-400 hover:text-red-300 px-2"
                        >
                          ✕
                        </button>
                      </div>
                      
                      {/* Step Options */}
                      {selectedStep === step.id && (
                        <div className="mt-3 pt-3 border-t border-gray-700 grid grid-cols-3 gap-4">
                          <div>
                            <label className="text-xs text-gray-500">Depends On</label>
                            <input
                              type="text"
                              value={step.dependsOn?.join(', ') || ''}
                              onChange={(e) => updateStep(step.id, { dependsOn: e.target.value.split(',').filter(Boolean) })}
                              placeholder="step_id1, step_id2"
                              className="w-full bg-gray-700 border border-gray-600 rounded px-2 py-1 text-sm"
                            />
                          </div>
                          <div>
                            <label className="text-xs text-gray-500">Condition</label>
                            <input
                              type="text"
                              value={step.condition || ''}
                              onChange={(e) => updateStep(step.id, { condition: e.target.value })}
                              placeholder="risk_level=high"
                              className="w-full bg-gray-700 border border-gray-600 rounded px-2 py-1 text-sm"
                            />
                          </div>
                          <div>
                            <label className="text-xs text-gray-500">Timeout (seconds)</label>
                            <input
                              type="number"
                              value={step.timeout || 30}
                              onChange={(e) => updateStep(step.id, { timeout: parseInt(e.target.value) })}
                              className="w-full bg-gray-700 border border-gray-600 rounded px-2 py-1 text-sm"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button
                onClick={testWorkflow}
                disabled={testing || currentWorkflow.steps.length === 0}
                className="bg-green-600 hover:bg-green-700 disabled:opacity-50 px-6 py-3 rounded-lg font-medium"
              >
                {testing ? 'Testing...' : '▶ Test Workflow'}
              </button>
              <button
                onClick={saveWorkflow}
                disabled={currentWorkflow.steps.length === 0}
                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 px-6 py-3 rounded-lg font-medium"
              >
                💾 Save Workflow
              </button>
            </div>

            {/* Test Result */}
            {testResult && (
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                <h3 className="font-semibold mb-2">Result</h3>
                <pre className="text-sm text-green-400">{testResult}</pre>
              </div>
            )}
          </div>

          {/* Right Panel */}
          <div className="space-y-6">
            {/* Planning Floors */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-lg font-semibold mb-4">Planning Floors</h2>
              <div className="space-y-3">
                {planningFloors.map((floor, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-3">
                    <div className="font-medium">{floor.name}</div>
                    <div className="text-xs text-gray-400 mb-2">{floor.description}</div>
                    <div className="flex flex-wrap gap-1">
                      {floor.workflows.map(w => (
                        <span key={w} className="text-xs bg-blue-900/50 text-blue-300 px-2 py-0.5 rounded">
                          {w}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Available Servers */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-lg font-semibold mb-4">MCP Servers ({servers.length})</h2>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {servers.slice(0, 10).map(server => (
                  <div key={server.name} className="bg-gray-800 rounded-lg p-2">
                    <div className="font-medium text-sm">{server.name}</div>
                    <div className="text-xs text-gray-500">{server.tools?.length || 0} tools</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Saved Workflows */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-lg font-semibold mb-4">Saved Workflows</h2>
              <div className="space-y-2">
                {savedWorkflows.slice(0, 5).map((wf, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentWorkflow(wf)}
                    className="w-full bg-gray-800 hover:bg-gray-700 rounded-lg p-3 text-left"
                  >
                    <div className="font-medium">{wf.name}</div>
                    <div className="text-xs text-gray-500">{wf.steps?.length || 0} steps • {wf.type}</div>
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
