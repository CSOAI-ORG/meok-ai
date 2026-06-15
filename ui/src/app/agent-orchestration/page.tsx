'use client';

import { useState, useEffect } from 'react';

interface Agent {
  id: string;
  name: string;
  type: string;
  status: 'idle' | 'active' | 'thinking' | 'completed' | 'error';
  progress: number;
  capabilities: string[];
  model?: string;
  currentTask?: string;
}

interface Task {
  id: string;
  agentId: string;
  description: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  result?: string;
  createdAt: string;
}

const FAQ = [
  { q: "What agent types can I create?", a: "The Agent Command Center supports 8 agent types: Researcher (web search, analysis), Builder (code generation, automation), Analyst (data analysis, reporting), Writer (content generation, editing), Guardian (security, validation), Architect (system design, planning), Synthesizer (multi-source synthesis), and Validator (code review, testing)." },
  { q: "How are tasks assigned to agents?", a: "Select an agent from the dropdown in the Assign Task panel, type a task description, and click Execute. The task is dispatched to the agent via the /api/agents endpoint, queued, and its status (pending, running, completed, failed) is tracked live in the Task Queue panel." },
  { q: "Does this integrate with MCP?", a: "Yes. The Agent Command Center is built on MCP (Model Context Protocol) integration and sovereign AI orchestration, so agents can call tools and coordinate across the MEOK stack." },
  { q: "Can I monitor agent activity in real time?", a: "Yes. The dashboard shows live stats for total agents, active agents, thinking agents and total tasks, plus a Task Queue and a timestamped Activity Log that updates as agents are created and tasks are executed." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const BREADCRUMB_JSONLD = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" },
  { "@type": "ListItem", position: 2, name: "Agent Orchestration", item: "https://meok.ai/agent-orchestration" },
] };

const APP_JSONLD = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "MEOK Agent Command Center", applicationCategory: "DeveloperApplication", operatingSystem: "Web", description: "Sovereign AI orchestration dashboard with 8 agent types and MCP integration for creating agents, assigning tasks and monitoring activity in real time.", url: "https://meok.ai/agent-orchestration" };

export default function AgentOrchestration() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);
  const [taskDescription, setTaskDescription] = useState('');
  const [creatingAgent, setCreatingAgent] = useState(false);
  const [newAgentType, setNewAgentType] = useState('researcher');
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const [agentsRes, tasksRes] = await Promise.all([
        fetch('/api/agents?action=agents'),
        fetch('/api/agents?action=tasks'),
      ]);
      
      const agentsData = await agentsRes.json();
      const tasksData = await tasksRes.json();
      
      setAgents(agentsData.agents || []);
      setTasks(tasksData.tasks || []);
    } catch (error) {
      console.error('Failed to load agent data:', error);
    } finally {
      setLoading(false);
    }
  }

  const createAgent = async () => {
    setCreatingAgent(true);
    try {
      const res = await fetch('/api/agents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'create_agent', agentType: newAgentType }),
      });
      const data = await res.json();
      if (data.success) {
        addLog(`Created new agent: ${data.agent.name} (${data.agent.type})`);
        loadData();
      }
    } catch (error) {
      console.error('Failed to create agent:', error);
    } finally {
      setCreatingAgent(false);
    }
  };

  const assignTask = async () => {
    if (!selectedAgent || !taskDescription.trim()) return;
    
    try {
      const res = await fetch('/api/agents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'execute_task',
          agentId: selectedAgent,
          taskDescription,
        }),
      });
      const data = await res.json();
      addLog(`Task assigned to ${selectedAgent}: ${taskDescription.slice(0, 50)}...`);
      setTaskDescription('');
      loadData();
    } catch (error) {
      console.error('Failed to assign task:', error);
    }
  };

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev.slice(-19), `[${timestamp}] ${message}`]);
  };

  const agentTypes = [
    { id: 'researcher', name: 'Researcher', icon: '🔍', description: 'Web search, analysis' },
    { id: 'builder', name: 'Builder', icon: '🔧', description: 'Code generation, automation' },
    { id: 'analyst', name: 'Analyst', icon: '📊', description: 'Data analysis, reporting' },
    { id: 'writer', name: 'Writer', icon: '✍️', description: 'Content generation, editing' },
    { id: 'guardian', name: 'Guardian', icon: '🛡️', description: 'Security, validation' },
    { id: 'architect', name: 'Architect', icon: '🏗️', description: 'System design, planning' },
    { id: 'synthesizer', name: 'Synthesizer', icon: '🔮', description: 'Multi-source synthesis' },
    { id: 'validator', name: 'Validator', icon: '✅', description: 'Code review, testing' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400';
      case 'thinking': return 'text-yellow-400';
      case 'completed': return 'text-blue-400';
      case 'error': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">🤖</div>
          <div className="text-xl">Loading Agent Orchestration...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(APP_JSONLD) }} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Agent Command Center</h1>
          <p className="text-gray-400">8 Agent Types • MCP Integration • Sovereign AI Orchestration</p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Left Panel - Agents */}
          <div className="col-span-2 space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                <div className="text-3xl font-bold text-blue-400">{agents.length}</div>
                <div className="text-sm text-gray-400">Total Agents</div>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                <div className="text-3xl font-bold text-green-400">
                  {agents.filter(a => a.status === 'active').length}
                </div>
                <div className="text-sm text-gray-400">Active</div>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                <div className="text-3xl font-bold text-yellow-400">
                  {agents.filter(a => a.status === 'thinking').length}
                </div>
                <div className="text-sm text-gray-400">Thinking</div>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                <div className="text-3xl font-bold text-purple-400">{tasks.length}</div>
                <div className="text-sm text-gray-400">Total Tasks</div>
              </div>
            </div>

            {/* Create Agent */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-semibold mb-4">Create New Agent</h2>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {agentTypes.map(type => (
                  <button
                    key={type.id}
                    onClick={() => setNewAgentType(type.id)}
                    className={`p-3 rounded-lg text-left transition ${
                      newAgentType === type.id 
                        ? 'bg-blue-600 border-2 border-blue-400' 
                        : 'bg-gray-800 border-2 border-transparent hover:border-gray-600'
                    }`}
                  >
                    <div className="text-2xl mb-1">{type.icon}</div>
                    <div className="font-semibold text-sm">{type.name}</div>
                    <div className="text-xs text-gray-400">{type.description}</div>
                  </button>
                ))}
              </div>
              <button
                onClick={createAgent}
                disabled={creatingAgent}
                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 px-6 py-2 rounded-lg font-medium"
              >
                {creatingAgent ? 'Creating...' : 'Create Agent'}
              </button>
            </div>

            {/* Agent Grid */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-semibold mb-4">Active Agents</h2>
              <div className="grid grid-cols-2 gap-4">
                {agents.map(agent => (
                  <div
                    key={agent.id}
                    onClick={() => setSelectedAgent(agent.id)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition ${
                      selectedAgent === agent.id 
                        ? 'border-blue-500 bg-blue-900/20' 
                        : 'border-gray-700 hover:border-gray-500'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">
                          {agentTypes.find(t => t.id === agent.type)?.icon || '🤖'}
                        </span>
                        <div>
                          <div className="font-semibold">{agent.name}</div>
                          <div className="text-xs text-gray-400">{agent.type}</div>
                        </div>
                      </div>
                      <span className={`font-medium ${getStatusColor(agent.status)}`}>
                        {agent.status}
                      </span>
                    </div>
                    {agent.currentTask && (
                      <div className="text-sm text-gray-400 mb-2 truncate">
                        Task: {agent.currentTask}
                      </div>
                    )}
                    <div className="flex flex-wrap gap-1">
                      {agent.capabilities?.slice(0, 3).map(cap => (
                        <span key={cap} className="text-xs bg-gray-800 px-2 py-1 rounded">
                          {cap}
                        </span>
                      ))}
                    </div>
                    {agent.model && (
                      <div className="text-xs text-blue-400 mt-2">Model: {agent.model}</div>
                    )}
                    {agent.progress > 0 && (
                      <div className="mt-2 bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full transition-all"
                          style={{ width: `${agent.progress}%` }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Task Assignment */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-semibold mb-4">Assign Task</h2>
              <div className="flex gap-2 mb-4">
                <select
                  value={selectedAgent || ''}
                  onChange={(e) => setSelectedAgent(e.target.value)}
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2"
                >
                  <option value="">Select Agent...</option>
                  {agents.map(agent => (
                    <option key={agent.id} value={agent.id}>
                      {agent.name} ({agent.type})
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                  placeholder="Describe the task..."
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2"
                />
                <button
                  onClick={assignTask}
                  disabled={!selectedAgent || !taskDescription.trim()}
                  className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 px-6 py-2 rounded-lg font-medium"
                >
                  Execute
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel - Logs & Tasks */}
          <div className="space-y-6">
            {/* Task Queue */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-semibold mb-4">Task Queue</h2>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {tasks.length === 0 ? (
                  <div className="text-gray-500 text-center py-4">No tasks yet</div>
                ) : (
                  tasks.slice(-10).reverse().map(task => (
                    <div key={task.id} className="bg-gray-800 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{task.description.slice(0, 40)}...</span>
                        <span className={`text-xs ${
                          task.status === 'completed' ? 'text-green-400' :
                          task.status === 'failed' ? 'text-red-400' :
                          task.status === 'running' ? 'text-yellow-400' :
                          'text-gray-400'
                        }`}>
                          {task.status}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Agent: {task.agentId} • {new Date(task.createdAt).toLocaleTimeString()}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Activity Log */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-semibold mb-4">Activity Log</h2>
              <div className="space-y-1 max-h-64 overflow-y-auto font-mono text-xs">
                {logs.length === 0 ? (
                  <div className="text-gray-500 text-center py-4">No activity yet</div>
                ) : (
                  logs.map((log, i) => (
                    <div key={i} className="text-gray-400">{log}</div>
                  ))
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-2">
                <button className="w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-left flex items-center gap-2">
                  <span>🔍</span> Research Task
                </button>
                <button className="w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-left flex items-center gap-2">
                  <span>🛡️</span> Security Scan
                </button>
                <button className="w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-left flex items-center gap-2">
                  <span>📊</span> Analysis Report
                </button>
                <button className="w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-left flex items-center gap-2">
                  <span>⚖️</span> Compliance Check
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Frequently asked</h2>
          <div className="grid gap-3">
            {FAQ.map((f) => (
              <details key={f.q} className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                <summary className="font-semibold cursor-pointer">{f.q}</summary>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
