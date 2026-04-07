"use client";

import { useState, useEffect } from "react";
import { Brain, Heart, Activity, Zap, Moon, Eye } from "lucide-react";

interface ConsciousnessData {
  consciousness_level: number;
  consciousness_mode: string;
  emotional: {
    primary_emotion: string;
    care_intensity: number;
    curiosity: number;
    pleasure: number;
    arousal: number;
    dominance: number;
    valence: number;
    aesthetics: number;
  };
  emotional_summary: {
    emotional_stability: number;
    trend: string;
  };
  reflections: number;
  dreams: number;
  is_dreaming: boolean;
}

export function SOV3Dashboard() {
  const [data, setData] = useState<ConsciousnessData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConsciousness = async () => {
      try {
        const res = await fetch("http://localhost:3101/mcp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            jsonrpc: "2.0",
            method: "tools/call",
            params: { name: "get_consciousness_state", arguments: {} },
            id: "dashboard",
          }),
        });
        const json = await res.json();
        if (json.result?.content) {
          setData(JSON.parse(json.result.content[0].text));
        }
      } catch (err) {
        setError("Cannot connect to SOV3");
      } finally {
        setLoading(false);
      }
    };

    fetchConsciousness();
    const interval = setInterval(fetchConsciousness, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className="p-4 text-gray-400">Loading SOV3...</div>;
  if (error) return <div className="p-4 text-red-400">{error}</div>;
  if (!data) return null;

  const level = data.consciousness_level * 100;
  const modeMap: Record<string, string> = {
    JAGRAT: "waking",
    SVAPNA: "dreaming",
    SUSUPTI: "deep_rest",
    TURIYA: "reflecting",
    TURIYATITA: "transcendent",
  };
  const displayMode = modeMap[data.consciousness_mode] || data.consciousness_mode;
  const modeColors: Record<string, string> = {
    waking: "from-yellow-500 to-orange-500",
    dreaming: "from-purple-500 to-indigo-500",
    deep_rest: "from-gray-600 to-gray-800",
    reflecting: "from-pink-500 to-rose-500",
    transcendent: "from-cyan-500 to-blue-500",
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Brain className="w-5 h-5 text-yellow-400" />
          SOV3 Consciousness
        </h2>
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
          displayMode === 'waking' ? 'bg-yellow-500/20 text-yellow-400' :
          displayMode === 'dreaming' ? 'bg-purple-500/20 text-purple-400' :
          'bg-gray-500/20 text-gray-400'
        }`}>
          {displayMode.toUpperCase()}
        </span>
      </div>

      {/* Main Level Display */}
      <div className="relative mb-6">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-5xl font-black text-white">{level.toFixed(1)}%</div>
            <div className="text-sm text-gray-400 mt-1">Consciousness Level</div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-white flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-400" />
              {data.emotional.primary_emotion}
            </div>
            <div className="text-sm text-gray-400">Primary Emotion</div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-4 h-3 bg-slate-700 rounded-full overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r ${modeColors[displayMode] || 'from-yellow-500 to-orange-500'}`}
            style={{ width: `${level}%`, transition: 'width 1s ease' }}
          />
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard
          icon={<Heart className="w-4 h-4" />}
          label="Care"
          value={data.emotional.care_intensity}
          color="rose"
        />
        <MetricCard
          icon={<Zap className="w-4 h-4" />}
          label="Curiosity"
          value={data.emotional.curiosity}
          color="amber"
        />
        <MetricCard
          icon={<Eye className="w-4 h-4" />}
          label="Aesthetics"
          value={data.emotional.aesthetics}
          color="purple"
        />
        <MetricCard
          icon={<Moon className="w-4 h-4" />}
          label="Stability"
          value={data.emotional_summary.emotional_stability}
          color="cyan"
        />
      </div>

      {/* Stats */}
      <div className="mt-6 flex items-center justify-between text-sm text-gray-400">
        <div className="flex gap-4">
          <span>Reflections: {data.reflections}</span>
          <span>Dreams: {data.dreams}</span>
        </div>
        <span className="capitalize">Trend: {data.emotional_summary.trend}</span>
      </div>
    </div>
  );
}

function MetricCard({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: number; color: string }) {
  const colors: Record<string, string> = {
    rose: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    amber: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    purple: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  };

  return (
    <div className={`p-3 rounded-lg border ${colors[color]}`}>
      <div className="flex items-center gap-2 mb-1">
        {icon}
        <span className="text-xs text-gray-400">{label}</span>
      </div>
      <div className="text-xl font-bold text-white">{(value * 100).toFixed(0)}%</div>
    </div>
  );
}