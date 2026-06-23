"use client";

import { useState, useEffect } from "react";
import { 
  Wifi, WifiOff, Database, Brain, Cpu, Zap, 
  Clock, CheckCircle, AlertTriangle, RefreshCw 
} from "lucide-react";

interface ConnectionStatus {
  name: string;
  status: 'connected' | 'disconnected' | 'connecting';
  latency?: number;
  error?: string;
}

interface SystemConnectionsProps {
  compact?: boolean;
}

export function SystemConnections({ compact = false }: SystemConnectionsProps) {
  const [connections, setConnections] = useState<ConnectionStatus[]>([
    { name: 'SOV3 MCP', status: 'connecting' },
    { name: 'PostgreSQL', status: 'connecting' },
    { name: 'Redis', status: 'connecting' },
    { name: 'Weaviate', status: 'connecting' },
    { name: 'Neo4j', status: 'connecting' },
  ]);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const checkConnections = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch('/api/health');
      if (res.ok) {
        const data = await res.json();
        
        setConnections([
          { 
            name: 'SOV3 MCP', 
            status: data.sov3?.online ? 'connected' : 'disconnected',
            latency: data.sov3?.responseTime,
          },
          { 
            name: 'PostgreSQL', 
            status: data.db?.connected ? 'connected' : 'disconnected',
            latency: data.db?.latencyMs,
          },
          { 
            name: 'Redis', 
            status: data.redis?.connected ? 'connected' : 'disconnected',
            latency: data.redis?.latencyMs,
          },
          { 
            name: 'Weaviate', 
            status: data.weaviate?.connected ? 'connected' : 'disconnected',
            latency: data.weaviate?.latencyMs,
          },
          { 
            name: 'Neo4j', 
            status: data.neo4j?.connected ? 'connected' : 'disconnected',
            latency: data.neo4j?.latencyMs,
          },
        ]);
        setLastUpdate(new Date());
      }
    } catch (e) {
      setConnections(prev => prev.map(c => ({ ...c, status: 'disconnected' as const })));
    }
    setIsRefreshing(false);
  };

  useEffect(() => {
    checkConnections();
    const interval = setInterval(checkConnections, 30000);
    return () => clearInterval(interval);
  }, []);

  const connectedCount = connections.filter(c => c.status === 'connected').length;
  const totalCount = connections.length;

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${
          connectedCount === totalCount 
            ? 'bg-green-500 animate-pulse' 
            : connectedCount > 0 
              ? 'bg-yellow-500' 
              : 'bg-red-500'
        }`} />
        <span className="text-xs text-gray-400">
          {connectedCount}/{totalCount} services
        </span>
      </div>
    );
  }

  return (
    <div className="bg-[#13121f] rounded-xl border border-white/10 p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Wifi className="w-4 h-4 text-[#c9a84c]" />
          <span className="text-sm font-medium text-white">System Connections</span>
        </div>
        <button type="button" 
          onClick={checkConnections}
          disabled={isRefreshing}
          className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
        >
          <RefreshCw className={`w-4 h-4 text-gray-400 ${isRefreshing ? 'animate-spin' : ''}`} />
        </button>
      </div>

      <div className="space-y-2">
        {connections.map(conn => (
          <div key={conn.name} className="flex items-center justify-between py-1.5">
            <div className="flex items-center gap-2">
              {conn.status === 'connected' ? (
                <CheckCircle className="w-3.5 h-3.5 text-green-400" />
              ) : conn.status === 'connecting' ? (
                <RefreshCw className="w-3.5 h-3.5 text-yellow-400 animate-spin" />
              ) : (
                <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
              )}
              <span className="text-sm text-gray-300">{conn.name}</span>
            </div>
            <div className="flex items-center gap-2">
              {conn.latency && (
                <span className="text-xs text-gray-500">{conn.latency}ms</span>
              )}
              <span className={`text-xs font-medium ${
                conn.status === 'connected' ? 'text-green-400' :
                conn.status === 'connecting' ? 'text-yellow-400' :
                'text-red-400'
              }`}>
                {conn.status === 'connected' ? 'Online' :
                 conn.status === 'connecting' ? 'Connecting' :
                 'Offline'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {lastUpdate && (
        <div className="mt-3 pt-3 border-t border-white/5 flex items-center gap-1 text-xs text-gray-500">
          <Clock className="w-3 h-3" />
          Last checked: {lastUpdate.toLocaleTimeString()}
        </div>
      )}
    </div>
  );
}

export default SystemConnections;