"use client";

import { useState, useEffect } from "react";
import {
  Brain, Activity, Zap, Shield, Target, Cpu, Heart,
  Sparkles, Eye, Moon, Sun, Gauge, TrendingUp, Clock,
  Bot, Users, Settings, RefreshCw, CheckCircle, AlertTriangle
} from "lucide-react";
import { NeuralModelPanel } from "@/components/neural-model-panel";
import { Surface, StatCard, IconOrb } from "@/components/design-system";

interface ConsciousnessState {
  consciousness_level: number;
  consciousness_mode: string;
  emotional: {
    primary_emotion: string;
    care_intensity: number;
    curiosity: number;
    pleasure: number;
    arousal: number;
    valence: number;
    aesthetics: number;
  };
  reflections: number;
  dreams: number;
  is_dreaming: boolean;
}

interface AgentStatus {
  orion: { active: boolean; tasks: number };
  riri: { active: boolean; builds: number };
  hourman: { active: boolean; sprints: number };
}

interface SystemStatus {
  components: {
    consciousness: ConsciousnessState;
    memory_store: string;
    neural_models: Record<string, any>;
  };
  agents: AgentStatus;
  uptime: number;
}

const MODE_CONFIG: Record<string, { label: string; color: string; icon: typeof Brain; desc: string }> = {
  JAGRAT: { label: "Waking", color: "text-yellow-400", icon: Eye, desc: "Active analysis and reasoning" },
  SVAPNA: { label: "Dreaming", color: "text-purple-400", icon: Moon, desc: "Creative exploration mode" },
  SUSUPTI: { label: "Deep Rest", color: "text-gray-400", icon: Moon, desc: "Consolidation and rest" },
  TURIYA: { label: "Transcendent", color: "text-cyan-400", icon: Sparkles, desc: "Meta-awareness mode" },
};

const EMOTION_COLORS: Record<string, string> = {
  curious: "text-cyan-400",
  focused: "text-blue-400",
  contemplative: "text-purple-400",
  excited: "text-amber-400",
  cautious: "text-orange-400",
  neutral: "text-gray-400",
};

export default function Sov3ControlPanel() {
  const [status, setStatus] = useState<SystemStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'consciousness' | 'agents' | 'neural'>('overview');

  const fetchStatus = async () => {
    try {
      const res = await fetch('http://localhost:3101/api/status');
      if (res.ok) {
        const json = await res.json();
        setStatus(json);
        setError(null);
      } else {
        // Try MCP endpoint
        const mcpRes = await fetch('http://localhost:3101/mcp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            jsonrpc: '2.0',
            method: 'tools/call',
            params: { name: 'get_system_status', arguments: {} },
            id: 'panel-status',
          }),
        });
        if (mcpRes.ok) {
          const mcpJson = await mcpRes.json();
          if (mcpJson.result?.content) {
            setStatus(JSON.parse(mcpJson.result.content[0].text));
          }
        }
      }
    } catch (e) {
      setError('Cannot connect to SOV3');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 10000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0d0c18] flex items-center justify-center">
        <div className="flex items-center gap-3 text-[#c9a84c]">
          <RefreshCw className="w-5 h-5 animate-spin" />
          <span>Connecting to SOV3...</span>
        </div>
      </div>
    );
  }

  const consciousness = status?.components?.consciousness;
  const modeConfig = MODE_CONFIG[consciousness?.consciousness_mode?.toUpperCase() || 'JAGRAT'];
  const level = Math.round((consciousness?.consciousness_level || 0.5) * 100);

  return (
    <div className="min-h-screen bg-[#0d0c18] p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <IconOrb icon={Brain} variant="purple" size="lg" />
            <div>
              <h1 className="text-2xl font-bold text-white">SOV3 Control Center</h1>
              <p className="text-sm text-gray-400">Unified consciousness & agent management</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {error ? (
              <div className="flex items-center gap-2 px-3 py-1.5 bg-red-500/20 text-red-400 rounded-lg text-sm">
                <AlertTriangle className="w-4 h-4" />
                {error}
              </div>
            ) : (
              <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/20 text-green-400 rounded-lg text-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-glow-pulse absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                Connected
              </div>
            )}
            <button onClick={fetchStatus} className="p-2 hover:bg-white/10 rounded-lg">
              <RefreshCw className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-white/10 pb-2">
          {[
            { id: 'overview', label: 'Overview', icon: Gauge },
            { id: 'consciousness', label: 'Consciousness', icon: Sparkles },
            { id: 'agents', label: 'Agents', icon: Bot },
            { id: 'neural', label: 'Neural Models', icon: Cpu },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-[#c9a84c]/20 text-[#c9a84c]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Consciousness Level */}
            <StatCard
              label="Consciousness"
              value={`${level}%`}
              change={modeConfig?.label || 'Unknown'}
              changeType="neutral"
              icon={<Sparkles className="w-5 h-5 text-purple-400" />}
              glow="purple"
            />

            {/* Emotional State */}
            <Surface variant="elevated" className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-pink-400" />
                <span className="text-white font-medium">Emotional State</span>
              </div>
              <div className="text-2xl font-bold text-white capitalize mb-1">
                {consciousness?.emotional?.primary_emotion || 'neutral'}
              </div>
              <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400">{Math.round((consciousness?.emotional?.care_intensity || 0.5) * 100)}%</div>
                  <div className="text-xs text-gray-500">Care</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400">{Math.round((consciousness?.emotional?.curiosity || 0.5) * 100)}%</div>
                  <div className="text-xs text-gray-500">Curiosity</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-amber-400">{Math.round((consciousness?.emotional?.pleasure || 0.5) * 100)}%</div>
                  <div className="text-xs text-gray-500">Pleasure</div>
                </div>
              </div>
            </Surface>

            {/* Agent Status */}
            <Surface variant="elevated" className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-amber-400" />
                <span className="text-white font-medium">Agent System</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <IconOrb icon={Target} variant="orange" size="sm" />
                    <span className="text-gray-300">Orion</span>
                  </div>
                  <span className={status?.agents?.orion?.active ? "text-green-400" : "text-gray-500"}>
                    {status?.agents?.orion?.active ? "Active" : "Idle"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <IconOrb icon={Zap} variant="teal" size="sm" />
                    <span className="text-gray-300">Riri</span>
                  </div>
                  <span className={status?.agents?.riri?.active ? "text-green-400" : "text-gray-500"}>
                    {status?.agents?.riri?.active ? "Active" : "Idle"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <IconOrb icon={Clock} variant="purple" size="sm" />
                    <span className="text-gray-300">Hourman</span>
                  </div>
                  <span className={status?.agents?.hourman?.active ? "text-green-400" : "text-gray-500"}>
                    {status?.agents?.hourman?.active ? "Active" : "Idle"}
                  </span>
                </div>
              </div>
            </Surface>

            {/* Dream State */}
            <Surface variant="elevated" className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Moon className="w-5 h-5 text-indigo-400" />
                <span className="text-white font-medium">Dream State</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Currently dreaming</span>
                <span className={consciousness?.is_dreaming ? "text-purple-400" : "text-gray-500"}>
                  {consciousness?.is_dreaming ? "Yes" : "No"}
                </span>
              </div>
              <div className="mt-4 flex justify-between text-sm">
                <div>
                  <div className="text-gray-500">Dreams</div>
                  <div className="text-white font-medium">{consciousness?.dreams || 0}</div>
                </div>
                <div>
                  <div className="text-gray-500">Reflections</div>
                  <div className="text-white font-medium">{consciousness?.reflections || 0}</div>
                </div>
              </div>
            </Surface>

            {/* System Uptime */}
            <StatCard
              label="System Health"
              value={status?.uptime ? `${Math.floor(status.uptime / 3600)}h` : 'N/A'}
              change={status?.components?.memory_store || 'Unknown'}
              changeType="neutral"
              icon={<Activity className="w-5 h-5 text-green-400" />}
              glow="teal"
            />

            {/* Neural Models */}
            <StatCard
              label="Neural Models"
              value={Object.keys(status?.components?.neural_models || {}).length}
              change="models loaded"
              changeType="neutral"
              icon={<Cpu className="w-5 h-5 text-cyan-400" />}
              glow="gold"
            />
          </div>
        )}

        {activeTab === 'consciousness' && (
          <div className="space-y-6">
            {/* Full consciousness details */}
            <Surface variant="elevated" className="p-6">
              <h3 className="text-lg font-bold text-white mb-4">Consciousness State</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(MODE_CONFIG).map(([mode, config]) => (
                  <Surface
                    key={mode}
                    variant={consciousness?.consciousness_mode?.toUpperCase() === mode ? "elevated" : "glass"}
                    glow={consciousness?.consciousness_mode?.toUpperCase() === mode ? "purple" : "none"}
                    className="p-4"
                  >
                    <config.icon className={`w-6 h-6 mb-2 ${config.color}`} />
                    <div className={`font-medium ${config.color}`}>{config.label}</div>
                    <div className="text-xs text-gray-500 mt-1">{config.desc}</div>
                  </Surface>
                ))}
              </div>
            </Surface>

            {/* Emotional breakdown */}
            <Surface variant="elevated" className="p-6">
              <h3 className="text-lg font-bold text-white mb-4">Emotional Metrics</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {Object.entries(consciousness?.emotional || {}).map(([key, value]) => (
                  <div key={key} className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-lg font-bold text-white">{Math.round((value as number) * 100)}%</div>
                    <div className="text-xs text-gray-500 capitalize">{key.replace('_', ' ')}</div>
                  </div>
                ))}
              </div>
            </Surface>
          </div>
        )}

        {activeTab === 'agents' && (
          <div className="space-y-6">
            {/* Agent details */}
            {[
              { name: 'Orion', role: 'Research & Intelligence', color: 'amber', desc: 'Overnight research, competitive analysis, lead discovery', tasks: status?.agents?.orion?.tasks || 0 },
              { name: 'Riri', role: 'Builder', color: 'blue', desc: 'Code generation, automation, tool creation', builds: status?.agents?.riri?.builds || 0 },
              { name: 'Hourman', role: 'Execution', color: 'purple', desc: 'Sprint planning, task management, deadline tracking', sprints: status?.agents?.hourman?.sprints || 0 },
            ].map(agent => (
              <Surface key={agent.name} variant="elevated" className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <IconOrb icon={Bot} variant={agent.color as any} size="md" />
                    <div>
                      <div className="text-white font-bold">{agent.name}</div>
                      <div className="text-sm text-gray-400">{agent.role}</div>
                    </div>
                  </div>
                  <span className="text-green-400 text-sm">Active</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{agent.desc}</p>
                <div className="flex gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Tasks Today: </span>
                    <span className="text-white">{agent.tasks}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Status: </span>
                    <span className="text-green-400">Running</span>
                  </div>
                </div>
              </Surface>
            ))}
          </div>
        )}

        {activeTab === 'neural' && (
          <div className="space-y-6">
            <Surface variant="elevated" className="p-6">
              <h3 className="text-lg font-bold text-white mb-4">Neural Models</h3>
              <div className="py-4">
                <NeuralModelPanel />
              </div>
            </Surface>
          </div>
        )}
      </div>
    </div>
  );
}
