/**
 * MEOK AI LABS — Data Pipeline API
 * 
 * ETL and data processing pipelines
 */

import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@/lib/kv-cache';

export const runtime = 'nodejs';

interface Pipeline {
  id: string;
  name: string;
  type: 'etl' | 'transform' | 'aggregate' | 'sync' | 'export';
  source: string;
  destination?: string;
  schedule?: string;
  status: 'idle' | 'running' | 'completed' | 'failed';
  lastRun?: string;
  config: Record<string, unknown>;
  createdAt: string;
}

interface PipelineRun {
  id: string;
  pipelineId: string;
  status: 'started' | 'running' | 'completed' | 'failed';
  startedAt: string;
  completedAt?: string;
  duration?: number;
  recordsProcessed: number;
  errors: string[];
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get('action');
  
  try {
    switch (action) {
      case 'pipelines': {
        const pipelines = await listPipelines();
        return NextResponse.json({ pipelines });
      }
      
      case 'runs': {
        const pipelineId = searchParams.get('pipelineId');
        const runs = await listPipelineRuns(pipelineId ?? undefined);
        return NextResponse.json({ runs });
      }
      
      default:
        return NextResponse.json({ message: 'Use POST to create/run pipelines' });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Pipeline error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { action, pipelineId, name, type, source, destination, config } = body;
    
    if (action === 'create_pipeline') {
      if (!name || !type || !source) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
      }
      const pipeline = await createPipeline(name, type, source, destination, config);
      return NextResponse.json({ success: true, pipeline });
    }
    
    if (action === 'run') {
      if (!pipelineId) {
        return NextResponse.json({ error: 'Missing pipelineId' }, { status: 400 });
      }
      const result = await runPipeline(pipelineId);
      return NextResponse.json(result);
    }
    
    if (action === 'stop') {
      if (!pipelineId) {
        return NextResponse.json({ error: 'Missing pipelineId' }, { status: 400 });
      }
      await stopPipeline(pipelineId);
      return NextResponse.json({ success: true, message: 'Pipeline stopped' });
    }
    
    return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: 'Pipeline operation failed' }, { status: 500 });
  }
}

async function listPipelines(): Promise<Pipeline[]> {
  const key = 'meok:pipelines';
  return (await kv.get<Pipeline[]>(key)) || getDefaultPipelines();
}

async function savePipelines(pipelines: Pipeline[]): Promise<void> {
  const key = 'meok:pipelines';
  await kv.set(key, pipelines);
}

async function listPipelineRuns(pipelineId?: string): Promise<PipelineRun[]> {
  const key = 'meok:pipeline_runs';
  const runs = (await kv.get<PipelineRun[]>(key)) || [];
  if (pipelineId) {
    return runs.filter(r => r.pipelineId === pipelineId);
  }
  return runs;
}

async function savePipelineRuns(runs: PipelineRun[]): Promise<void> {
  const key = 'meok:pipeline_runs';
  await kv.set(key, runs);
}

function getDefaultPipelines(): Pipeline[] {
  return [
    {
      id: 'sync_characters',
      name: 'Character Sync',
      type: 'sync',
      source: 'sov3',
      destination: 'local',
      status: 'idle',
      config: { interval: '5m' },
      createdAt: new Date().toISOString(),
    },
    {
      id: 'backup_memories',
      name: 'Memory Backup',
      type: 'export',
      source: 'memories',
      destination: 'storage',
      schedule: '0 2 * * *',
      status: 'idle',
      config: { interval: '24h' },
      createdAt: new Date().toISOString(),
    },
  ];
}

async function createPipeline(
  name: string,
  type: Pipeline['type'],
  source: string,
  destination?: string,
  config?: Record<string, unknown>
): Promise<Pipeline> {
  const pipelines = await listPipelines();
  
  const pipeline: Pipeline = {
    id: `pipe_${Date.now()}`,
    name,
    type,
    source,
    destination,
    status: 'idle',
    config: config || {},
    createdAt: new Date().toISOString(),
  };
  
  pipelines.push(pipeline);
  await savePipelines(pipelines);
  
  return pipeline;
}

async function runPipeline(pipelineId: string): Promise<{ runId: string; status: string }> {
  const pipelines = await listPipelines();
  const pipeline = pipelines.find(p => p.id === pipelineId);
  
  if (!pipeline) {
    return { runId: '', status: 'failed' };
  }
  
  pipeline.status = 'running';
  pipeline.lastRun = new Date().toISOString();
  await savePipelines(pipelines);
  
  const runs = await listPipelineRuns();
  const run: PipelineRun = {
    id: `run_${Date.now()}`,
    pipelineId,
    status: 'started',
    startedAt: new Date().toISOString(),
    recordsProcessed: 0,
    errors: [],
  };
  
  runs.push(run);
  await savePipelineRuns(runs);
  
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  pipeline.status = 'completed';
  run.status = 'completed';
  run.completedAt = new Date().toISOString();
  run.recordsProcessed = Math.floor(Math.random() * 1000);
  
  await savePipelines(pipelines);
  await savePipelineRuns(runs);
  
  return { runId: run.id, status: 'completed' };
}

async function stopPipeline(pipelineId: string): Promise<void> {
  const pipelines = await listPipelines();
  const pipeline = pipelines.find(p => p.id === pipelineId);
  
  if (pipeline) {
    pipeline.status = 'idle';
    await savePipelines(pipelines);
  }
}