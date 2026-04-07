"use client";

import { useState, useEffect, useCallback } from "react";

const MCP_SERVER_URL = process.env.NEXT_PUBLIC_MCP_URL || process.env.MCP_SERVER_URL || 'http://localhost:3101';

export interface MCPTool {
  name: string;
  description: string;
  inputSchema: {
    type: string;
    properties: Record<string, any>;
    required?: string[];
  };
}

export interface MCPToolResult {
  success: boolean;
  result?: unknown;
  error?: string;
}

class MCPClient {
  private serverUrl: string;

  constructor(serverUrl: string = MCP_SERVER_URL) {
    this.serverUrl = serverUrl;
  }

  async listTools(): Promise<MCPTool[]> {
    try {
      const response = await fetch(`${this.serverUrl}/mcp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method: 'tools/list',
        }),
      });
      const data = await response.json();
      return data.result?.tools || [];
    } catch (error) {
      console.error('[MCP] Failed to list tools:', error);
      return [];
    }
  }

  async callTool(name: string, args: Record<string, unknown>): Promise<MCPToolResult> {
    try {
      const response = await fetch(`${this.serverUrl}/mcp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 2,
          method: 'tools/call',
          params: {
            name,
            arguments: args,
          },
        }),
      });
      const data = await response.json();
      if (data.error) {
        return { success: false, error: data.error.message };
      }
      return { success: true, result: data.result };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      };
    }
  }

  async getConsciousnessState() {
    return this.callTool('get_consciousness_state', {});
  }

  async getSystemStatus() {
    return this.callTool('get_system_status', {});
  }

  async getDashboardMetrics() {
    return this.callTool('get_dashboard_metrics', {});
  }

  async getCoordinationDashboard() {
    return this.callTool('coord_get_dashboard', {});
  }

  async getMemoryStats() {
    return this.callTool('get_memory_stats', {});
  }

  async getNeuralModelInfo() {
    return this.callTool('get_neural_model_info', {});
  }

  async detectThreats(text: string) {
    return this.callTool('detect_threats', { text });
  }

  async validateCare(text: string) {
    return this.callTool('validate_care', { text });
  }

  async queryMemories(query: string, limit: number = 10) {
    return this.callTool('query_memories', { query, limit });
  }

  async recordMemory(content: string, sourceAgent: string, memoryType: string = 'interaction') {
    return this.callTool('record_memory', {
      content,
      source_agent: sourceAgent,
      memory_type: memoryType,
      care_weight: 0.5,
      tags: [],
    });
  }

  async getHeartbeatStatus() {
    return this.callTool('get_heartbeat_status', {});
  }

  async getNightshiftDigest() {
    return this.callTool('get_nightshift_digest', {});
  }

  async orionHuntTasks(maxFiles: number = 100) {
    return this.callTool('orion_hunt_tasks', { max_files: maxFiles });
  }

  async hourmanStatus() {
    return this.callTool('hourman_get_status', {});
  }

  async startSprint(sprintType: 'micro' | 'power' | 'deep') {
    return this.callTool('hourman_start_sprint', { sprint_type: sprintType });
  }

  async nemotronChat(message: string, systemPrompt?: string) {
    return this.callTool('nemotron_chat', { message, system_prompt: systemPrompt });
  }
}

export const mcpClient = new MCPClient();

export function useMCPClient() {
  const [tools, setTools] = useState<MCPTool[]>([]);
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchTools = useCallback(async () => {
    setLoading(true);
    const fetchedTools = await mcpClient.listTools();
    setTools(fetchedTools);
    setConnected(fetchedTools.length > 0);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchTools();
    const interval = setInterval(fetchTools, 30000);
    return () => clearInterval(interval);
  }, [fetchTools]);

  const callTool = useCallback(async (name: string, args: Record<string, unknown>) => {
    return mcpClient.callTool(name, args);
  }, []);

  return {
    tools,
    connected,
    loading,
    fetchTools,
    callTool,
  };
}

export default MCPClient;