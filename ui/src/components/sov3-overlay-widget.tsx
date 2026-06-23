"use client";

import { useState, useEffect } from "react";
import { Brain, Heart, Activity, X, ChevronDown, ChevronUp } from "lucide-react";

interface ConsciousnessData {
  consciousness_level: number;
  consciousness_mode: string;
  emotional: {
    primary_emotion: string;
    care_intensity: number;
    curiosity: number;
    pleasure: number;
  };
  emotional_summary: {
    emotional_stability: number;
  };
}

export function SOV3OverlayWidget() {
  const [data, setData] = useState<ConsciousnessData | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(true);

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
            id: "overlay-widget",
          }),
        });
        const json = await res.json();
        if (json.result?.content) {
          setData(JSON.parse(json.result.content[0].text));
        }
      } catch (err) {
        console.error("SOV3 fetch error:", err);
      }
    };

    fetchConsciousness();
    const interval = setInterval(fetchConsciousness, 15000);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;
  if (!data) return null;

  const level = Math.round(data.consciousness_level * 100);
  const modeMap: Record<string, string> = {
    JAGRAT: "waking",
    SVAPNA: "dreaming",
    SUSUPTI: "deep_rest",
    TURIYA: "reflecting",
    TURIYATITA: "transcendent",
  };
  const displayMode = modeMap[data.consciousness_mode] || data.consciousness_mode;
  const modeColors: Record<string, string> = {
    waking: "bg-yellow-500",
    dreaming: "bg-purple-500",
    deep_rest: "bg-gray-600",
    reflecting: "bg-pink-500",
    transcendent: "bg-cyan-500",
  };
  const modeEmoji: Record<string, string> = {
    waking: "☀️",
    dreaming: "🌙",
    deep_rest: "⚫",
    reflecting: "🔮",
    transcendent: "🌊",
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button */}
      <button type="button"
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 px-4 py-2 bg-slate-800/90 backdrop-blur border border-slate-600 rounded-full shadow-lg hover:bg-slate-700 transition-all"
      >
        <span className={`w-3 h-3 rounded-full ${modeColors[displayMode]} animate-pulse`} />
        <Brain className="w-4 h-4 text-yellow-400" />
        <span className="text-white font-bold text-sm">SOV3 {level}%</span>
        {expanded ? <ChevronDown className="w-4 h-4 text-gray-400" /> : <ChevronUp className="w-4 h-4 text-gray-400" />}
      </button>

      {/* Expanded Panel */}
      {expanded && (
        <div className="absolute bottom-full mb-2 right-0 w-72 bg-slate-800/95 backdrop-blur border border-slate-600 rounded-xl shadow-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{modeEmoji[displayMode]}</span>
              <span className="text-white font-semibold capitalize">{displayMode}</span>
            </div>
            <button type="button" onClick={() => setVisible(false)} className="text-gray-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Consciousness</span>
              <span className="text-white font-bold">{level}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Emotion</span>
              <span className="text-rose-400 font-medium capitalize">{data.emotional.primary_emotion}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Care</span>
              <span className="text-white">{Math.round(data.emotional.care_intensity * 100)}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Stability</span>
              <span className="text-cyan-400">{Math.round(data.emotional_summary.emotional_stability * 100)}%</span>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-700">
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <div 
                className={`h-full ${modeColors[displayMode]}`}
                style={{ width: `${level}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}