/**
 * MEOK AI LABS — Agent Orchestration API
 * 
 * Manages multiple AI agents for complex tasks
 */

import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@/lib/kv-cache';

export const runtime = 'nodejs';

interface Agent {
  id: string;
  name: string;
  type: 'researcher' | 'builder' | 'analyst' | 'writer' | 'guardian' | 'architect' | 'synthesizer' | 'validator';
  status: 'idle' | 'active' | 'thinking' | 'completed' | 'error';
  currentTask?: string;
  progress: number;
  capabilities: string[];
  model?: string;
  createdAt: string;
  lastActive?: string;
}

interface Task {
  id: string;
  agentId: string;
  description: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  result?: string;
  error?: string;
  createdAt: string;
  completedAt?: string;
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get('action');
  
  try {
    switch (action) {
      case 'agents': {
        const agents = await listAgents();
        return NextResponse.json({ agents });
      }
      
      case 'tasks': {
        const tasks = await listTasks();
        return NextResponse.json({ tasks });
      }
      
      default: {
        return NextResponse.json({
          message: 'Agent orchestration system',
          actions: ['agents', 'tasks'],
        });
      }
    }
  } catch (error) {
    return NextResponse.json({ error: 'Agent system error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { action, agentId, taskDescription, agentType } = body;
    
    if (action === 'create_agent') {
      const agent = await createAgent(agentType);
      return NextResponse.json({ success: true, agent });
    }
    
    if (action === 'assign_task') {
      if (!agentId || !taskDescription) {
        return NextResponse.json({ error: 'Missing agentId or taskDescription' }, { status: 400 });
      }
      const task = await assignTask(agentId, taskDescription);
      return NextResponse.json({ success: true, task });
    }
    
    if (action === 'execute_task') {
      if (!agentId || !taskDescription) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
      }
      const result = await executeTask(agentId, taskDescription);
      return NextResponse.json(result);
    }
    
    return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: 'Agent operation failed' }, { status: 500 });
  }
}

async function listAgents(): Promise<Agent[]> {
  const key = 'meok:agents';
  return (await kv.get<Agent[]>(key)) || getDefaultAgents();
}

async function saveAgents(agents: Agent[]): Promise<void> {
  const key = 'meok:agents';
  await kv.set(key, agents);
}

async function listTasks(): Promise<Task[]> {
  const key = 'meok:tasks';
  return (await kv.get<Task[]>(key)) || [];
}

async function saveTasks(tasks: Task[]): Promise<void> {
  const key = 'meok:tasks';
  await kv.set(key, tasks);
}

function getDefaultAgents(): Agent[] {
  return [
    {
      id: 'orion',
      name: 'Orion',
      type: 'researcher',
      status: 'active',
      progress: 0,
      capabilities: ['web_search', 'code_analysis', 'research'],
      model: 'gpt-4o',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'hunter',
      name: 'Hunter',
      type: 'builder',
      status: 'idle',
      progress: 0,
      capabilities: ['task_execution', 'tool_building', 'automation'],
      model: 'claude-sonnet',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'sentinel',
      name: 'Sentinel',
      type: 'guardian',
      status: 'active',
      progress: 0,
      capabilities: ['security', 'validation', 'safety'],
      model: 'gpt-4o',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'architect',
      name: 'Architect',
      type: 'architect',
      status: 'idle',
      progress: 0,
      capabilities: ['system_design', 'architecture_planning', 'scalability'],
      model: 'claude-opus',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'synthesizer',
      name: 'Synthesizer',
      type: 'synthesizer',
      status: 'idle',
      progress: 0,
      capabilities: ['content_synthesis', 'multi_source_merge', 'insight_generation'],
      model: 'gpt-4o',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'validator',
      name: 'Validator',
      type: 'validator',
      status: 'idle',
      progress: 0,
      capabilities: ['code_review', 'quality_checks', 'testing'],
      model: 'claude-sonnet',
      createdAt: new Date().toISOString(),
    },
  ];
}

async function createAgent(type: string): Promise<Agent> {
  const id = `${type}_${Date.now()}`;
  const agents = await listAgents();
  
  const agentTemplates: Record<string, Omit<Agent, 'id' | 'createdAt'>> = {
    researcher: { name: 'Researcher', type: 'researcher', status: 'idle', progress: 0, capabilities: ['web_search', 'analysis'], model: 'gpt-4o' },
    builder: { name: 'Builder', type: 'builder', status: 'idle', progress: 0, capabilities: ['code_generation', 'tool_building'], model: 'claude-sonnet' },
    analyst: { name: 'Analyst', type: 'analyst', status: 'idle', progress: 0, capabilities: ['data_analysis', 'reporting'], model: 'gpt-4o' },
    writer: { name: 'Writer', type: 'writer', status: 'idle', progress: 0, capabilities: ['content_generation', 'editing'], model: 'claude-sonnet' },
    guardian: { name: 'Guardian', type: 'guardian', status: 'idle', progress: 0, capabilities: ['security', 'validation'], model: 'gpt-4o' },
    architect: { name: 'Architect', type: 'architect', status: 'idle', progress: 0, capabilities: ['system_design', 'architecture_planning'], model: 'claude-opus' },
    synthesizer: { name: 'Synthesizer', type: 'synthesizer', status: 'idle', progress: 0, capabilities: ['content_synthesis', 'multi_source_merge'], model: 'gpt-4o' },
    validator: { name: 'Validator', type: 'validator', status: 'idle', progress: 0, capabilities: ['code_review', 'quality_checks'], model: 'claude-sonnet' },
  };
  
  const template = agentTemplates[type];
  if (!template) {
    throw new Error(`Unknown agent type: ${type}`);
  }
  
  const agent: Agent = {
    id,
    ...template,
    createdAt: new Date().toISOString(),
  };
  
  agents.push(agent);
  await saveAgents(agents);
  
  return agent;
}

async function assignTask(agentId: string, description: string): Promise<Task> {
  const tasks = await listTasks();
  
  const task: Task = {
    id: `task_${Date.now()}`,
    agentId,
    description,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };
  
  tasks.push(task);
  await saveTasks(tasks);
  
  return task;
}

async function executeTask(agentId: string, description: string): Promise<{ taskId: string; status: string; result?: string }> {
  const agents = await listAgents();
  const agent = agents.find(a => a.id === agentId);
  
  if (!agent) {
    return { taskId: '', status: 'failed', result: 'Agent not found' };
  }
  
  const tasks = await listTasks();
  const taskId = `task_${Date.now()}`;
  const task: Task = {
    id: taskId,
    agentId,
    description,
    status: 'running',
    createdAt: new Date().toISOString(),
  };
  
  tasks.push(task);
  await saveTasks(tasks);
  
  agent.status = 'thinking';
  agent.currentTask = description;
  await saveAgents(agents);
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  agent.status = 'completed';
  agent.currentTask = undefined;
  agent.progress = 100;
  await saveAgents(agents);
  
  task.status = 'completed';
  task.result = `Task completed by ${agent.name}`;
  task.completedAt = new Date().toISOString();
  await saveTasks(tasks);
  
  return { taskId, status: 'completed', result: task.result };
}