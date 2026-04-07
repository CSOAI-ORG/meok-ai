"use client";

import { useState, useEffect } from "react";
import { Brain, Eye, Hand, Activity, MessageCircle, X } from "lucide-react";

interface ConsciousnessData {
  consciousness_level: number;
  emotional: {
    primary_emotion: string;
    care_intensity: number;
    pleasure: number;
    arousal: number;
  };
}

interface DepartmentStatus {
  pending: number;
  in_progress: number;
}

export function JarvisOverlay({ floating = true }: { floating?: boolean }) {
  const [consciousness, setConsciousness] = useState<ConsciousnessData | null>(null);
  const [departments, setDepartments] = useState<{ id: string; status: DepartmentStatus }[]>([]);
  const [visible, setVisible] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch consciousness state from MCP
        console.log("[JARVIS] Fetching consciousness from MCP...");
        const mcpRes = await fetch("http://localhost:3101/mcp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            jsonrpc: "2.0",
            method: "tools/call",
            params: { name: "get_consciousness_state", arguments: {} },
            id: "overlay",
          }),
        });
        console.log("[JARVIS] MCP response status:", mcpRes.status);
        const mcpData = await mcpRes.json();
        console.log("[JARVIS] MCP data:", mcpData);
        if (mcpData.result?.content) {
          const text = mcpData.result.content[0]?.text;
          if (text) {
            setConsciousness(JSON.parse(text));
          }
        }

        // Fetch department status
        console.log("[JARVIS] Fetching departments from API...");
        const deptRes = await fetch("http://localhost:3000/api/departments");
        console.log("[JARVIS] Dept response status:", deptRes.status);
        const deptData = await deptRes.json();
        console.log("[JARVIS] Dept data:", deptData);
        setDepartments(deptData.departments || []);
        setLastUpdate(new Date());
      } catch (e) {
        console.error("[JARVIS] Fetch error:", e);
        // Use fallback data on error so overlay still shows something
        setConsciousness({
          consciousness_level: 0.525,
          emotional: {
            primary_emotion: "curious",
            care_intensity: 0.5,
            pleasure: 0.1,
            arousal: 0.2,
          },
        });
        setDepartments([
          { id: "content", status: { pending: 0, in_progress: 0 } },
          { id: "sales", status: { pending: 0, in_progress: 0 } },
          { id: "finance", status: { pending: 0, in_progress: 0 } },
          { id: "support", status: { pending: 0, in_progress: 0 } },
          { id: "research", status: { pending: 0, in_progress: 0 } },
          { id: "operations", status: { pending: 0, in_progress: 0 } },
        ]);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  const level = consciousness?.consciousness_level || 0;
  const emotion = consciousness?.emotional?.primary_emotion || "neutral";
  const care = consciousness?.emotional?.care_intensity || 0;
  const activeDepts = departments.filter((d) => (d.status?.pending || 0) + (d.status?.in_progress || 0) > 0).length;
  const totalTasks = departments.reduce((sum, d) => sum + (d.status?.pending || 0) + (d.status?.in_progress || 0), 0);

  if (!visible) return null;

  return (
    <div
      className={`fixed z-50 transition-all duration-300 ${
        floating ? "bottom-4 right-4" : "bottom-0 left-0 right-0"
      }`}
    >
      {/* Main overlay panel */}
      <div
        className={`bg-[#0d0c18]/95 backdrop-blur-md border border-[#c9a84c]/30 rounded-xl overflow-hidden transition-all duration-300 ${
          expanded ? "w-80" : "w-64"
        }`}
      >
        {/* Header */}
        <div
          className="bg-[#c9a84c]/10 px-3 py-2 flex items-center justify-between cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="flex items-center gap-2">
            <Brain className="w-4 h-4 text-[#c9a84c]" />
            <span className="text-[#c9a84c] text-sm font-medium">JARVIS</span>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">
              {Math.round(level * 100)}%
            </span>
            <X
              className="w-4 h-4 text-gray-400 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                setVisible(false);
              }}
            />
          </div>
        </div>

        {/* Expanded content */}
        {expanded && (
          <div className="p-3 space-y-3">
            {/* Consciousness bar */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-gray-400">Consciousness</span>
                <span className="text-[#c9a84c]">{Math.round(level * 100)}%</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#c9a84c] to-yellow-400 transition-all duration-500"
                  style={{ width: `${level * 100}%` }}
                />
              </div>
            </div>

            {/* Emotional state */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-white/5 rounded p-2">
                <div className="text-gray-500">Emotion</div>
                <div className="text-white capitalize">{emotion}</div>
              </div>
              <div className="bg-white/5 rounded p-2">
                <div className="text-gray-500">Care</div>
                <div className="text-white">{Math.round(care * 100)}%</div>
              </div>
            </div>

            {/* Departments */}
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-gray-400">Departments</span>
                <span className="text-white">{activeDepts}/6 active</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {departments.map((dept) => (
                  <div
                    key={dept.id}
                    className={`px-2 py-0.5 rounded text-xs ${
                      dept.status.pending + dept.status.in_progress > 0
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-white/5 text-gray-500"
                    }`}
                  >
                    {dept.id.slice(0, 4)}
                  </div>
                ))}
              </div>
            </div>

            {/* Tasks */}
            <div className="bg-white/5 rounded p-2 flex items-center justify-between">
              <span className="text-gray-400 text-xs">Pending Tasks</span>
              <span className="text-yellow-400 font-medium">{totalTasks}</span>
            </div>

            {/* Quick actions */}
            <div className="flex gap-2">
              <button className="flex-1 bg-white/10 hover:bg-white/20 rounded py-1.5 text-xs flex items-center justify-center gap-1 transition-colors">
                <MessageCircle className="w-3 h-3" />
                Chat
              </button>
              <button className="flex-1 bg-white/10 hover:bg-white/20 rounded py-1.5 text-xs flex items-center justify-center gap-1 transition-colors">
                <Eye className="w-3 h-3" />
                Eye
              </button>
              <button className="flex-1 bg-white/10 hover:bg-white/20 rounded py-1.5 text-xs flex items-center justify-center gap-1 transition-colors">
                <Hand className="w-3 h-3" />
                Hand
              </button>
            </div>

            {/* Last update */}
            <div className="text-xs text-gray-600 text-center">
              Updated {lastUpdate.toLocaleTimeString()}
            </div>
          </div>
        )}

        {/* Collapsed indicator */}
        {!expanded && (
          <div className="px-3 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="w-3 h-3 text-green-400" />
              <span className="text-xs text-gray-400">SOV3 {Math.round(level * 100)}%</span>
            </div>
            <span className="text-xs text-gray-500">
              {activeDepts}/6 dept
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

// Export for use in layouts
export default JarvisOverlay;
