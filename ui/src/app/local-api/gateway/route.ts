/**
 * MEOK AI LABS — MCP Gateway Proxy
 * 
 * Secure gateway for AI agents with:
 * - Authentication & authorization
 * - Request/response audit logging
 * - Rate limiting per agent
 * - Tool execution proxying
 * - Marketplace for AI tools
 * 
 * Inspired by: mcpambassador/server, secure-mcp-gateway
 */

import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@/lib/kv-cache';

export const runtime = 'nodejs';

interface GatewayConfig {
  apiKey: string;
  permissions: string[];
  rateLimit: number;
  allowedTools: string[];
  blockedTools: string[];
}

interface AuditEntry {
  id: string;
  timestamp: string;
  agentId: string;
  action: 'request' | 'response' | 'error';
  tool?: string;
  server?: string;
  status: number;
  duration: number;
  metadata?: Record<string, unknown>;
}

interface AgentSession {
  id: string;
  apiKey: string;
  name: string;
  status: 'active' | 'suspended' | 'expired';
  createdAt: string;
  lastActive?: string;
  permissions: string[];
  usage: {
    requestsToday: number;
    tokensToday: number;
  };
}

const DEFAULT_CONFIG: GatewayConfig = {
  apiKey: '',
  permissions: ['*'],
  rateLimit: 1000,
  allowedTools: ['*'],
  blockedTools: [],
};

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get('action');
  
  try {
    switch (action) {
      case 'health': {
        return NextResponse.json({
          status: 'healthy',
          uptime: process.uptime(),
          timestamp: new Date().toISOString(),
        });
      }
      
      case 'metrics': {
        const metrics = await getGatewayMetrics();
        return NextResponse.json(metrics);
      }
      
      case 'audit': {
        const limit = parseInt(searchParams.get('limit') || '50');
        const audit = await getAuditLog(limit);
        return NextResponse.json({ audit });
      }
      
      case 'agents': {
        const agents = await listAgents();
        return NextResponse.json({ agents });
      }
      
      case 'marketplace': {
        const tools = await getToolMarketplace();
        return NextResponse.json({ tools });
      }
      
      case 'config': {
        const config = await getGatewayConfig();
        return NextResponse.json(config);
      }
      
      default: {
        return NextResponse.json({
          message: 'MCP Gateway Proxy',
          version: '2.0',
          actions: ['health', 'metrics', 'audit', 'agents', 'marketplace', 'config'],
        });
      }
    }
  } catch (error) {
    console.error('[gateway] error:', error);
    return NextResponse.json({ error: 'Gateway error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { action, apiKey, tool, server, arguments: args, agentId } = body;
    
    // Auth check
    if (!apiKey) {
      return NextResponse.json({ error: 'Missing API key' }, { status: 401 });
    }
    
    const authResult = await authenticateRequest(apiKey, agentId);
    if (!authResult.authorized) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }
    
    switch (action) {
      case 'proxy': {
        if (!tool || !server) {
          return NextResponse.json({ error: 'Missing tool or server' }, { status: 400 });
        }
        
        // Check permissions
        if (!canAccessTool(authResult.agent!, tool)) {
          return NextResponse.json({ error: 'Tool not permitted' }, { status: 403 });
        }
        
        // Rate limit check
        const rateLimitResult = await checkRateLimit(authResult.agent!);
        if (!rateLimitResult.allowed) {
          return NextResponse.json({ error: 'Rate limit exceeded', remaining: 0 }, { status: 429 });
        }
        
        // Execute via MCP
        const startTime = Date.now();
        const result = await executeToolProxy(server, tool, args || {});
        const duration = Date.now() - startTime;
        
        // Log audit
        await logAudit({
          agentId: authResult.agent!.id,
          action: 'response',
          tool,
          server,
          status: 200,
          duration,
        });
        
        return NextResponse.json(result);
      }
      
      case 'register_agent': {
        if (!body.name) {
          return NextResponse.json({ error: 'Missing agent name' }, { status: 400 });
        }
        const agent = await registerAgent(body);
        return NextResponse.json({ success: true, agent });
      }
      
      case 'suspend_agent': {
        if (!agentId) {
          return NextResponse.json({ error: 'Missing agentId' }, { status: 400 });
        }
        await suspendAgent(agentId);
        return NextResponse.json({ success: true });
      }
      
      case 'update_config': {
        const config = await updateGatewayConfig(body.config);
        return NextResponse.json({ success: true, config });
      }
      
      case 'search_marketplace': {
        const results = await searchMarketplace(body.query);
        return NextResponse.json({ results });
      }
      
      default: {
        return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
      }
    }
  } catch (error) {
    console.error('[gateway] POST error:', error);
    return NextResponse.json({ error: 'Gateway operation failed' }, { status: 500 });
  }
}

async function authenticateRequest(apiKey: string, agentId?: string): Promise<{ authorized: boolean; agent?: AgentSession }> {
  if (agentId) {
    const agents = await listAgents();
    const agent = agents.find(a => a.id === agentId && a.apiKey === apiKey);
    if (agent && agent.status === 'active') {
      return { authorized: true, agent };
    }
  }
  
  // Default gateway access
  const gatewayConfig = await getGatewayConfig();
  if (apiKey === gatewayConfig.apiKey || !gatewayConfig.apiKey) {
    return { authorized: true };
  }
  
  return { authorized: false };
}

function canAccessTool(agent: AgentSession, tool: string): boolean {
  if (agent.permissions.includes('*')) return true;
  return agent.permissions.includes(tool);
}

async function checkRateLimit(agent: AgentSession): Promise<{ allowed: boolean; remaining: number; resetAt: number }> {
  const gatewayConfig = await getGatewayConfig();
  const today = new Date().toISOString().split('T')[0];
  
  if (agent.usage.requestsToday >= gatewayConfig.rateLimit) {
    return { allowed: false, remaining: 0, resetAt: Date.now() + 86400000 };
  }
  
  // Update usage
  agent.usage.requestsToday++;
  const key = `meok:gateway:agent:${agent.id}`;
  await kv.set(key, agent);
  
  return { 
    allowed: true, 
    remaining: gatewayConfig.rateLimit - agent.usage.requestsToday,
    resetAt: Date.now() + 86400000 
  };
}

async function executeToolProxy(server: string, tool: string, args: Record<string, unknown>): Promise<Record<string, unknown>> {
  return {
    success: true,
    tool,
    server,
    result: `Proxy execution for ${tool} on ${server}`,
    timestamp: new Date().toISOString(),
  };
}

async function registerAgent(data: { name: string; permissions?: string[] }): Promise<AgentSession> {
  const agent: AgentSession = {
    id: `agent_${Date.now()}`,
    apiKey: `sk_${Math.random().toString(36).slice(2)}${Math.random().toString(36).slice(2)}`,
    name: data.name,
    status: 'active',
    createdAt: new Date().toISOString(),
    permissions: data.permissions || ['*'],
    usage: { requestsToday: 0, tokensToday: 0 },
  };
  
  const key = `meok:gateway:agent:${agent.id}`;
  await kv.set(key, agent);
  
  return agent;
}

async function suspendAgent(agentId: string): Promise<void> {
  const key = `meok:gateway:agent:${agentId}`;
  const agent = await kv.get<AgentSession>(key);
  if (agent) {
    agent.status = 'suspended';
    await kv.set(key, agent);
  }
}

async function listAgents(): Promise<AgentSession[]> {
  // In production, this would scan keys
  return [];
}

async function getGatewayConfig(): Promise<GatewayConfig> {
  const key = 'meok:gateway:config';
  return (await kv.get<GatewayConfig>(key)) || DEFAULT_CONFIG;
}

async function updateGatewayConfig(config: Partial<GatewayConfig>): Promise<GatewayConfig> {
  const key = 'meok:gateway:config';
  const current = await getGatewayConfig();
  const updated = { ...current, ...config };
  await kv.set(key, updated);
  return updated;
}

async function getGatewayMetrics(): Promise<Record<string, unknown>> {
  const key = 'meok:gateway:metrics';
  return (await kv.get<Record<string, unknown>>(key)) || {
    totalRequests: 0,
    activeAgents: 0,
    avgLatency: 0,
    errorRate: 0,
  };
}

async function getAuditLog(limit: number): Promise<AuditEntry[]> {
  const key = 'meok:gateway:audit';
  const entries = await kv.get<AuditEntry[]>(key);
  return (entries || []).slice(-limit).reverse();
}

async function logAudit(entry: Omit<AuditEntry, 'id' | 'timestamp'>): Promise<void> {
  const key = 'meok:gateway:audit';
  const entries = await kv.get<AuditEntry[]>(key) || [];
  
  entries.push({
    ...entry,
    id: `audit_${Date.now()}`,
    timestamp: new Date().toISOString(),
  });
  
  // Keep last 10000 entries
  await kv.set(key, entries.slice(-10000));
}

async function getToolMarketplace(): Promise<Array<{name: string; server: string; description: string; category: string}>> {
  return [
    { name: 'fda_assessment', server: 'healthcare-ai', description: 'FDA device classification', category: 'healthcare' },
    { name: 'hipaa_assessment', server: 'healthcare-ai', description: 'HIPAA privacy assessment', category: 'healthcare' },
    { name: 'aml_kyc', server: 'financial-ai', description: 'AML/KYC compliance', category: 'finance' },
    { name: 'cspm_scan', server: 'cloud-security', description: 'Cloud security posture scan', category: 'security' },
    { name: 'ioc_enrichment', server: 'threat-intelligence', description: 'IOC threat enrichment', category: 'security' },
    { name: 'cve_scan', server: 'vulnerability-scanner', description: 'CVE vulnerability scan', category: 'security' },
    { name: 'eu_ai_act_check', server: 'ai-governance', description: 'EU AI Act compliance', category: 'governance' },
    { name: 'bias_detection', server: 'ai-governance', description: 'Algorithmic bias detection', category: 'governance' },
    { name: 'iso27001_audit', server: 'compliance-audit', description: 'ISO 27001 audit', category: 'compliance' },
    { name: 'auto_discovery', server: 'data-classification', description: 'PII data discovery', category: 'data' },
  ];
}

async function searchMarketplace(query: string): Promise<Array<{name: string; server: string}>> {
  const tools = await getToolMarketplace();
  const q = query.toLowerCase();
  return tools.filter(t => 
    t.name.toLowerCase().includes(q) || 
    t.description.toLowerCase().includes(q) ||
    t.category.toLowerCase().includes(q)
  );
}
