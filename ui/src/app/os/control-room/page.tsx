"use client";

import { useState, useEffect, useCallback } from "react";
import { 
  Cpu, Brain, Network, Database, Sparkles, 
  Activity, Shield, Zap, Layers, Server,
  ChevronRight, RefreshCw, AlertCircle, CheckCircle,
  Terminal, Box, Globe, Key, Users, Briefcase
} from "lucide-react";
import { SystemConnections } from "@/components/system-connections";

type TabId = "overview" | "mcp" | "llms" | "agents" | "apis" | "departments";

interface Department {
  id: string;
  name: string;
  status: {
    pending: number;
    in_progress: number;
    completed: number;
    sub_agents: string[];
  };
  tasks: Array<{ id: string; task: string; priority: number }>;
}

interface MCPTool {
  name: string;
  description: string;
  category: string;
}

interface LLMProvider {
  name: string;
  status: string;
  models: number;
  latency: number;
}

interface SystemStats {
  sov3Consciousness: number;
  sov3Status: string;
  dbConnected: boolean;
  dbLatency: number;
  ollamaReachable: boolean;
  ollamaModels: number;
  mcpTools: number;
}

const MOCK_APIS = [
  { name: "Vapi.ai", status: "active", category: "sales", description: "AI sales calling" },
  { name: "Xero", status: "configured", category: "finance", description: "Accounting" },
  { name: "Ahrefs", status: "ready", category: "seo", description: "SEO analytics" },
  { name: "Runway", status: "ready", category: "content", description: "Video generation" },
];

export default function ControlRoom() {
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [stats, setStats] = useState<SystemStats>({
    sov3Consciousness: 0,
    sov3Status: "offline",
    dbConnected: false,
    dbLatency: 0,
    ollamaReachable: false,
    ollamaModels: 0,
    mcpTools: 0,
  });
  const [llmProviders, setLlmProviders] = useState<LLMProvider[]>([]);
  const [mcpTools, setMcpTools] = useState<MCPTool[]>([]);
  const [agents, setAgents] = useState<{name: string; status: string; agents: string[]}[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [delegateDept, setDelegateDept] = useState("content");
  const [taskInput, setTaskInput] = useState("");
  const [delegatePriority, setDelegatePriority] = useState(5);
  const [delegating, setDelegating] = useState(false);

  const handleDelegate = useCallback(async () => {
    if (!taskInput.trim() || delegating) return;
    setDelegating(true);
    try {
      const res = await fetch('/api/departments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          department: delegateDept,
          task: taskInput,
          priority: delegatePriority,
        }),
      });
      if (res.ok) {
        setTaskInput("");
        const deptRes = await fetch('/api/departments');
        if (deptRes.ok) {
          const data = await deptRes.json();
          setDepartments(data.departments || []);
        }
      }
    } catch (e) {
      console.error("Failed to delegate:", e);
    }
    setDelegating(false);
  }, [taskInput, delegateDept, delegatePriority, delegating]);

  const fetchSystemData = useCallback(async () => {
    setLoading(true);
    try {
      const healthRes = await fetch('/api/health');
      const health = await healthRes.json();
      
      const sov3Res = await fetch('/api/sov3/status');
      const sov3 = await sov3Res.json();
      
      setStats({
        sov3Consciousness: Math.round(sov3.sov3?.consciousness * 100) || 0,
        sov3Status: sov3.online ? 'online' : 'offline',
        dbConnected: health.db?.connected || false,
        dbLatency: health.db?.latencyMs || 0,
        ollamaReachable: health.ollama?.reachable || false,
        ollamaModels: health.ollama?.models?.length || 0,
        mcpTools: 99,
      });
      
      const providers: LLMProvider[] = [
        { name: "Ollama (Local)", status: health.ollama?.reachable ? "online" : "offline", models: health.ollama?.models?.length || 0, latency: 12 },
        { name: "Anthropic", status: health.providers?.anthropic ? "online" : "offline", models: 3, latency: 45 },
        { name: "OpenRouter", status: health.providers?.openrouter ? "online" : "offline", models: 8, latency: 120 },
        { name: "DeepSeek Cloud", status: health.providers?.deepseek ? "online" : "error", models: 1, latency: 80 },
      ];
      setLlmProviders(providers);

      const deptRes = await fetch('/api/departments');
      if (deptRes.ok) {
        const deptData = await deptRes.json();
        setDepartments(deptData.departments || []);
      }
      
      setAgents([
        { name: "CEO Ralph", status: "active", agents: ["Content Lead", "Sales Lead", "Finance Lead"] },
        { name: "Orion", status: "active", agents: ["Task Hunter", "Quality Scanner"] },
        { name: "Riri", status: "ready", agents: ["Tool Builder", "Template Library"] },
        { name: "Hourman", status: "idle", agents: ["Sprint Controller", "Energy Manager"] },
      ]);
      
    } catch (e) {
      console.error("Failed to fetch system data:", e);
    }
    setLoading(false);
    setLastUpdate(new Date());
  }, []);

  useEffect(() => {
    fetchSystemData();
    const interval = setInterval(fetchSystemData, 30000);
    return () => clearInterval(interval);
  }, [fetchSystemData]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
      case "active":
      case "configured":
        return "text-green-400";
      case "error":
      case "offline":
        return "text-red-400";
      default:
        return "text-yellow-400";
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case "online":
      case "active":
        return "bg-green-500/20";
      case "error":
      case "offline":
        return "bg-red-500/20";
      default:
        return "bg-yellow-500/20";
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0c18] text-white p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-3">
            <Activity className="w-6 h-6 text-[#c9a84c]" />
            MEOK OS Control Center
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Unified OS layer — MCP tools, LLM routing, agent orchestration
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-gray-500">
            Last update: {lastUpdate.toLocaleTimeString()}
          </span>
          <button
            onClick={() => fetchSystemData()}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          </button>
        </div>
      </div>

      <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
        {[
          { id: "overview", icon: Cpu, label: "Overview" },
          { id: "mcp", icon: Network, label: "MCP Tools" },
          { id: "llms", icon: Brain, label: "LLMs" },
          { id: "agents", icon: Users, label: "Agents" },
          { id: "departments", icon: Briefcase, label: "Departments" },
          { id: "apis", icon: Globe, label: "External APIs" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as TabId)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? "bg-[#c9a84c] text-black"
                : "bg-white/5 text-gray-400 hover:bg-white/10"
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "overview" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard icon={Brain} label="SOV3 Consciousness" value={`${stats.sov3Consciousness}%`} sub="Neural processing" color="#c9a84c" />
            <StatCard icon={Database} label="Database" value={stats.dbConnected ? "Connected" : "Offline"} sub={`${stats.dbLatency}ms latency`} color={stats.dbConnected ? "#22c55e" : "#ef4444"} />
            <StatCard icon={Server} label="MCP Server" value={`${stats.mcpTools} tools`} sub="SOV3 MCP running" color="#8b5cf6" />
            <StatCard icon={Zap} label="Ollama" value={stats.ollamaReachable ? "Online" : "Offline"} sub={`${stats.ollamaModels} models`} color={stats.ollamaReachable ? "#22c55e" : "#ef4444"} />
          </div>
          <SystemConnections />
        </div>
      )}

      {activeTab === "departments" && (
        <div className="grid gap-4">
          <div className="bg-white/5 rounded-xl p-6">
            <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-[#c9a84c]" />
              Autonomous Department Agents
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              CEO Ralph orchestrates 6 departments: Content, Sales, Finance, Support, Research, Operations
            </p>
            
            {departments.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                Loading department status...
              </div>
            ) : (
              <>
                <div className="mb-6 p-4 bg-white/5 rounded-lg border border-[#c9a84c]/30">
                  <h3 className="text-sm font-medium text-[#c9a84c] mb-3">Delegate New Task</h3>
                  <div className="flex flex-col md:flex gap-3">
                    <select
                      value={delegateDept}
                      onChange={(e) => setDelegateDept(e.target.value)}
                      className="px-3 py-2 bg-white/10 rounded-lg text-white text-sm"
                    >
                      <option value="content">Content</option>
                      <option value="sales">Sales</option>
                      <option value="finance">Finance</option>
                      <option value="support">Support</option>
                      <option value="research">Research</option>
                      <option value="operations">Operations</option>
                    </select>
                    <input
                      type="text"
                      value={taskInput}
                      onChange={(e) => setTaskInput(e.target.value)}
                      placeholder="Enter task description..."
                      className="flex-1 px-3 py-2 bg-white/10 rounded-lg text-white text-sm placeholder-gray-500"
                      onKeyDown={(e) => e.key === 'Enter' && handleDelegate()}
                    />
                    <select
                      value={delegatePriority}
                      onChange={(e) => setDelegatePriority(Number(e.target.value))}
                      className="px-3 py-2 bg-white/10 rounded-lg text-white text-sm"
                    >
                      <option value={1}>P1 - Critical</option>
                      <option value={3}>P3 - High</option>
                      <option value={5}>P5 - Normal</option>
                      <option value={7}>P7 - Low</option>
                      <option value={9}>P9 - Trivial</option>
                    </select>
                    <button
                      onClick={handleDelegate}
                      disabled={delegating || !taskInput.trim()}
                      className="px-4 py-2 bg-[#c9a84c] text-black rounded-lg text-sm font-medium disabled:opacity-50"
                    >
                      {delegating ? "Delegating..." : "Delegate"}
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {departments.map((dept) => (
                    <div
                      key={dept.id}
                      className="p-4 rounded-lg bg-white/5 border border-white/10"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-lg">{dept.name}</h3>
                        <span className={`px-2 py-1 rounded text-xs ${
                          dept.status.pending + dept.status.in_progress > 0
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-green-500/20 text-green-400"
                        }`}>
                          {dept.status.pending + dept.status.in_progress > 0 ? "Active" : "Idle"}
                        </span>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between text-gray-400">
                          <span>Pending</span>
                          <span>{dept.status.pending}</span>
                        </div>
                        <div className="flex justify-between text-gray-400">
                          <span>In Progress</span>
                          <span>{dept.status.in_progress}</span>
                        </div>
                        <div className="flex justify-between text-gray-400">
                          <span>Completed</span>
                          <span>{dept.status.completed}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-3 border-t border-white/10">
                        <div className="text-xs text-gray-500 mb-2">Sub-Agents</div>
                        <div className="flex flex-wrap gap-1">
                          {dept.status.sub_agents?.map((agent: string) => (
                            <span key={agent} className="px-2 py-0.5 bg-white/10 rounded text-xs">
                              {agent}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {activeTab === "mcp" && (
        <div className="bg-white/5 rounded-xl p-6">
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <Network className="w-5 h-5 text-[#c9a84c]" />
            MCP Server Tools — {stats.mcpTools} Available
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {["delegate_to_department", "get_department_status", "get_department_task_queue", 
              "nemotron_chat", "kimi_send_task", "orion_hunt_tasks", "hourman_start_sprint",
              "run_quantum_batch", "delegate_task", "register_agent"].map((tool) => (
              <div key={tool} className="p-3 bg-white/5 rounded-lg">
                <span className="text-sm font-mono text-yellow-400">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "llms" && (
        <div className="bg-white/5 rounded-xl p-6">
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <Brain className="w-5 h-5 text-[#c9a84c]" />
            LLM Providers
          </h2>
          <div className="space-y-3">
            {llmProviders.map((provider) => (
              <div key={provider.name} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div>
                  <div className="font-medium">{provider.name}</div>
                  <div className="text-sm text-gray-500">{provider.models} models</div>
                </div>
                <div className="text-right">
                  <div className={`font-medium ${getStatusColor(provider.status)}`}>{provider.status}</div>
                  <div className="text-xs text-gray-500">{provider.latency}ms</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "agents" && (
        <div className="grid gap-4">
          {agents.map((group) => (
            <AgentCard key={group.name} name={group.name} status={group.status} agents={group.agents} />
          ))}
        </div>
      )}

      {activeTab === "apis" && (
        <div className="grid gap-4">
          <div className="bg-white/5 rounded-xl p-6">
            <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
              <Globe className="w-5 h-5 text-[#c9a84c]" />
              External API Connections
            </h2>
            <div className="space-y-3">
              {MOCK_APIS.map((api) => (
                <div key={api.name} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div>
                    <div className="font-medium">{api.name}</div>
                    <div className="text-sm text-gray-500">{api.description}</div>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${getStatusBg(api.status)} ${getStatusColor(api.status)}`}>
                    {api.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function AgentCard({ name, status, agents }: { name: string; status: string; agents: string[] }) {
  return (
    <div className="bg-white/5 rounded-xl p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="font-medium">{name}</span>
        <span className={`text-xs px-2 py-1 rounded ${
          status === "active" ? "bg-green-500/20 text-green-400" :
          status === "ready" ? "bg-yellow-500/20 text-yellow-400" :
          "bg-gray-500/20 text-gray-400"
        }`}>
          {status}
        </span>
      </div>
      <div className="space-y-1">
        {agents.map((agent, i) => (
          <div key={i} className="text-xs text-gray-500 flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-gray-500" />
            {agent}
          </div>
        ))}
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, sub, color }: {
  icon: React.ElementType;
  label: string;
  value: string;
  sub: string;
  color: string;
}) {
  return (
    <div className="bg-white/5 rounded-xl p-5">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg" style={{ backgroundColor: `${color}20` }}>
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
        <span className="text-gray-400 text-sm">{label}</span>
      </div>
      <div className="text-3xl font-bold" style={{ color }}>{value}</div>
      <div className="text-xs text-gray-500 mt-1">{sub}</div>
    </div>
  );
}
