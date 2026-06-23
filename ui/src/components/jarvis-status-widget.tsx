"use client";

import { useState, useEffect } from "react";
import { Terminal, Cpu, Brain, Activity, Zap, AlertCircle, CheckCircle } from "lucide-react";

interface JarvisStatus {
  status: string;
  progress: number;
  current_action: string;
  details: {
    command?: string;
    model?: string;
    [key: string]: any;
  };
  timestamp: string;
}

interface ExecutionLog {
  id: number;
  action: string;
  command: string;
  output: string | null;
  error: string | null;
  timestamp: string;
}

interface JarvisState {
  state: string;
  brain_active: string;
  model: string;
  emotion: string;
  consciousness_level: number;
}

export function JarvisStatusWidget() {
  const [status, setStatus] = useState<JarvisStatus | null>(null);
  const [logs, setLogs] = useState<ExecutionLog[]>([]);
  const [state, setState] = useState<JarvisState | null>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch status
        const statusRes = await fetch("http://localhost:3000/api/jarvis/status");
        if (statusRes.ok) {
          const data = await statusRes.json();
          setStatus(data);
        }
        
        // Fetch logs
        const logsRes = await fetch("http://localhost:3000/api/jarvis/logs");
        if (logsRes.ok) {
          const data = await logsRes.json();
          setLogs(data.slice(0, 5));
        }
        
        // Fetch state
        const stateRes = await fetch("http://localhost:3000/api/jarvis/state");
        if (stateRes.ok) {
          const data = await stateRes.json();
          setState(data);
        }
      } catch (err) {
        console.error("JARVIS status fetch error:", err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 2000);
    return () => clearInterval(interval);
  }, []);

  const statusColors: Record<string, string> = {
    idle: "bg-gray-500",
    thinking: "bg-yellow-500",
    speaking: "bg-green-500",
    executing: "bg-blue-500",
    error: "bg-red-500",
  };

  const statusIcons: Record<string, any> = {
    idle: <Activity className="w-4 h-4" />,
    thinking: <Brain className="w-4 h-4" />,
    speaking: <CheckCircle className="w-4 h-4" />,
    executing: <Terminal className="w-4 h-4" />,
    error: <AlertCircle className="w-4 h-4" />,
  };

  if (!status && !state) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {/* Collapsed Status */}
      <button type="button"
        onClick={() => setExpanded(!expanded)}
        className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-lg transition-all ${
          status?.status === "executing" 
            ? "bg-blue-600/90 hover:bg-blue-600" 
            : "bg-slate-800/90 hover:bg-slate-700"
        } text-white`}
      >
        <span className={`w-3 h-3 rounded-full ${statusColors[status?.status || "idle"]} animate-pulse`} />
        <Terminal className="w-4 h-4" />
        <span className="font-bold text-sm">JARVIS</span>
        {status?.progress !== undefined && status.progress > 0 && (
          <span className="text-xs opacity-80">{status.progress}%</span>
        )}
      </button>

      {/* Expanded Panel */}
      {expanded && (
        <div className="absolute bottom-full mb-2 left-0 w-80 bg-slate-800/95 backdrop-blur border border-slate-600 rounded-xl shadow-2xl p-4">
          {/* Status */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              {statusIcons[status?.status || "idle"]}
              <span className="text-white font-semibold capitalize">{status?.status || "idle"}</span>
            </div>
            {status?.progress !== undefined && status.progress > 0 && (
              <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${statusColors[status.status]}`}
                  style={{ width: `${status.progress}%` }}
                />
              </div>
            )}
          </div>

          {/* Current Action */}
          {status?.current_action && (
            <div className="mb-3 p-2 bg-slate-700/50 rounded-lg">
              <div className="text-xs text-gray-400">Current Action</div>
              <div className="text-white text-sm">{status.current_action}</div>
              {status.details?.command && (
                <div className="text-xs text-gray-400 mt-1 font-mono">
                  $ {status.details.command}
                </div>
              )}
            </div>
          )}

          {/* Brain/Model State */}
          {state && (
            <div className="flex items-center gap-4 mb-3 text-sm">
              <div className="flex items-center gap-1">
                <Brain className="w-3 h-3 text-yellow-400" />
                <span className="text-gray-300">{state.brain_active || state.model || "idle"}</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="w-3 h-3 text-green-400" />
                <span className="text-gray-300 capitalize">{state.emotion}</span>
              </div>
            </div>
          )}

          {/* Execution Logs */}
          {logs.length > 0 && (
            <div className="border-t border-slate-700 pt-3">
              <div className="text-xs text-gray-400 mb-2">Recent Executions</div>
              <div className="space-y-1 max-h-32 overflow-y-auto">
                {logs.map((log) => (
                  <div key={log.id} className="text-xs flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${log.error ? 'bg-red-500' : 'bg-green-500'}`} />
                    <span className="text-gray-300 truncate flex-1">{log.action}</span>
                    <span className="text-gray-500 font-mono">{log.command.slice(0, 15)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}