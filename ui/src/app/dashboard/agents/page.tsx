"use client";

import { useEffect, useState } from "react";
import { callTool } from "@/lib/api";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot } from "lucide-react";

interface AgentStats {
  total_agents?: number;
  active_agents?: number;
  agents?: Array<{
    id: string;
    name: string;
    status: string;
    trust_level: number;
    capabilities: string[];
  }>;
}

export default function AgentsPage() {
  const [stats, setStats] = useState<AgentStats | null>(null);
  const [tasks, setTasks] = useState<unknown[]>([]);

  useEffect(() => {
    callTool<AgentStats>("get_agent_registry_stats").then(setStats).catch(console.error);
    callTool<{ tasks?: unknown[] }>("orion_get_tasks").then((r) => setTasks(r.tasks || [])).catch(console.error);
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Agents</h2>
        <p className="text-sm text-white/40 mt-1">Multi-agent registry and task management</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card className="!p-4">
          <p className="text-xs text-white/40 uppercase">Total Agents</p>
          <p className="text-2xl font-bold text-cyan-400">{stats?.total_agents || 0}</p>
        </Card>
        <Card className="!p-4">
          <p className="text-xs text-white/40 uppercase">Active</p>
          <p className="text-2xl font-bold text-green-400">{stats?.active_agents || 0}</p>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Agent Registry</CardTitle>
        </CardHeader>
        {stats?.agents?.length ? (
          <div className="space-y-3">
            {stats.agents.map((a) => (
              <div key={a.id} className="p-4 rounded-lg bg-white/5 border border-white/5 flex items-start gap-3">
                <Bot className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-white">{a.name}</span>
                    <Badge variant={a.status === "active" ? "green" : "default"}>{a.status}</Badge>
                  </div>
                  <p className="text-xs text-white/30 mt-1">Trust: {(a.trust_level * 100).toFixed(0)}%</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {a.capabilities?.map((c) => (
                      <Badge key={c} variant="default">{c}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white/30 text-sm">No agents registered</p>
        )}
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Tasks</CardTitle>
        </CardHeader>
        {tasks.length > 0 ? (
          <pre className="text-xs text-white/50 overflow-auto">{JSON.stringify(tasks, null, 2)}</pre>
        ) : (
          <p className="text-white/30 text-sm">No tasks found</p>
        )}
      </Card>
    </div>
  );
}
