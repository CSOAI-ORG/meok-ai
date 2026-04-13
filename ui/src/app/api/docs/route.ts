/**
 * MEOK AI LABS — API Documentation
 * 
 * Auto-generated API documentation
 */

import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const API_DOCS = {
  version: '1.0.0',
  title: 'MEOK AI API',
  description: 'Comprehensive API for MEOK AI character management and orchestration',
  
  baseUrl: '/api',
  
  endpoints: {
    characters: {
      'GET /api/characters': {
        description: 'List all characters',
        params: { limit: 'number', offset: 'number' },
      },
      'GET /api/characters/[id]': {
        description: 'Get character by ID',
      },
      'GET /api/characters/search': {
        description: 'Search characters',
        params: { q: 'string', archetype: 'string' },
      },
      'GET /api/characters/search/ai': {
        description: 'AI-powered semantic search',
        params: { q: 'string', semantic: 'boolean' },
      },
      'GET /api/characters/marketplace': {
        description: 'Browse character marketplace',
      },
      'GET /api/characters/marketplace/v2': {
        description: 'Enhanced marketplace with categories',
        params: { action: 'featured|categories|trending', category: 'string' },
      },
      'POST /api/characters/import': {
        description: 'Import character (Character Card v2)',
        body: { characterCard: 'object', options: 'object' },
      },
      'GET /api/characters/backup': {
        description: 'Export character data',
        params: { characterId: 'string', memories: 'boolean' },
      },
      'GET /api/characters/versions': {
        description: 'Get character version history',
        params: { id: 'string', version: 'number' },
      },
    },
    
    character: {
      'GET /api/character/sync': {
        description: 'Get character sync state',
        params: { characterId: 'string', active: 'boolean' },
      },
      'POST /api/character/sync': {
        description: 'Update character sync state',
        body: { action: 'set_active|update_mood|update_state|conversation_update', characterId: 'string' },
      },
      'GET /api/character/activity': {
        description: 'Get character activity',
        params: { characterId: 'string', all: 'boolean' },
      },
      'GET /api/character/memory': {
        description: 'Get character memories',
        params: { characterId: 'string', type: 'string', important: 'boolean' },
      },
      'POST /api/character/memory': {
        description: 'Store new memory',
        body: { characterId: 'string', content: 'string', type: 'string', importance: 'number' },
      },
      'GET /api/character/evolution': {
        description: 'Get character evolution',
        params: { characterId: 'string' },
      },
      'POST /api/character/evolution': {
        description: 'Update character evolution',
        body: { characterId: 'string', action: 'interact|memory|points|milestone', points: 'number' },
      },
      'GET /api/character/badges': {
        description: 'Get character badges',
        params: { characterId: 'string', category: 'string' },
      },
      'POST /api/character/badges': {
        description: 'Check/award badges',
        body: { characterId: 'string', action: 'check', stats: 'object' },
      },
      'GET /api/character/mood': {
        description: 'Get character mood',
        params: { characterId: 'string', history: 'boolean' },
      },
      'POST /api/character/mood': {
        description: 'Update character mood',
        body: { characterId: 'string', action: 'set|transition', mood: 'string', energy: 'number' },
      },
      'GET /api/character/actions': {
        description: 'Get available actions',
        params: { characterId: 'string' },
      },
      'POST /api/character/actions': {
        description: 'Execute character action',
        body: { characterId: 'string', action: 'string', params: 'object' },
      },
      'GET /api/character/analytics': {
        description: 'Get character analytics',
        params: { characterId: 'string', period: '7d|30d' },
      },
      'POST /api/character/analytics': {
        description: 'Track character event',
        body: { characterId: 'string', eventType: 'interaction|mood|message', mood: 'string' },
      },
      'GET /api/character/customize': {
        description: 'Get customization options',
        params: { characterId: 'string' },
      },
      'POST /api/character/customize': {
        description: 'Save customization',
        body: { characterId: 'string', appearance: 'object', behavior: 'object' },
      },
      'GET /api/character/export': {
        description: 'Export character',
        params: { characterId: 'string', format: 'json|card|voice' },
      },
      'GET /api/character/schedule': {
        description: 'Get scheduled items',
        params: { characterId: 'string' },
      },
      'POST /api/character/schedule': {
        description: 'Create/manage schedule',
        body: { characterId: 'string', type: 'string', schedule: 'object' },
      },
      'GET /api/character/notifications': {
        description: 'Get notifications',
        params: { characterId: 'string', unread: 'boolean' },
      },
      'POST /api/character/notifications': {
        description: 'Manage notifications',
        body: { characterId: 'string', action: 'mark_read|mark_all_read' },
      },
      'GET /api/character/webhooks': {
        description: 'List webhooks',
        params: { characterId: 'string' },
      },
      'POST /api/character/webhooks': {
        description: 'Register webhook',
        body: { characterId: 'string', url: 'string', events: 'string[]' },
      },
    },
    
    agents: {
      'GET /api/agents': {
        description: 'List agents',
        params: { action: 'agents|tasks' },
      },
      'POST /api/agents': {
        description: 'Create/execute agent task',
        body: { action: 'create_agent|assign_task|execute_task', agentType: 'string', taskDescription: 'string' },
      },
    },
    
    compliance: {
      'GET /api/compliance': {
        description: 'Get compliance info',
        params: { type: 'frameworks|checks' },
      },
      'POST /api/compliance': {
        description: 'Run compliance check',
        body: { framework: 'hipaa|gdpr|soc2|fda|coppa', checkType: 'string', context: 'object' },
      },
    },
    
    security: {
      'GET /api/security/scan': {
        description: 'Get scan types',
      },
      'POST /api/security/scan': {
        description: 'Run security scan',
        body: { scanType: 'quick|full|dependencies|secrets|compliance', target: 'string' },
      },
    },
    
    pipeline: {
      'GET /api/pipeline': {
        description: 'List pipelines',
        params: { action: 'pipelines|runs' },
      },
      'POST /api/pipeline': {
        description: 'Create/run pipeline',
        body: { action: 'create_pipeline|run|stop', name: 'string', type: 'string' },
      },
    },
    
    mcp: {
      'GET /api/mcp/servers': {
        description: 'List MCP servers',
        params: { action: 'servers|tools', server: 'string' },
      },
      'POST /api/mcp/servers': {
        description: 'Execute MCP tool',
        body: { server: 'string', tool: 'string', arguments: 'object' },
      },
    },
  },
};

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const endpoint = searchParams.get('endpoint');
  
  if (endpoint) {
    const parts = endpoint.split('/').filter(Boolean);
    let doc: unknown = API_DOCS.endpoints;
    
    for (const part of parts) {
      if (doc && typeof doc === 'object' && part in doc) {
        doc = (doc as Record<string, unknown>)[part];
      } else {
        return NextResponse.json({ error: 'Endpoint not found' }, { status: 404 });
      }
    }
    
    return NextResponse.json(doc);
  }
  
  return NextResponse.json(API_DOCS);
}