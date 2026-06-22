/**
 * MEOK AI LABS — Family OS Dashboard API
 * Connects to Sovereign MCP server for Family OS and Guardian data
 */

import { NextRequest, NextResponse } from 'next/server';

const MCP_SERVER_URL = process.env.MCP_SERVER_URL || 'http://localhost:3101';

async function callMcpTool(toolName: string, arguments_: Record<string, unknown>) {
  const response = await fetch(`${MCP_SERVER_URL}/mcp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: `family-${Date.now()}`,
      method: 'tools/call',
      params: { name: toolName, arguments: arguments_ }
    })
  });
  
  if (!response.ok) {
    throw new Error(`MCP call failed: ${response.status}`);
  }
  
  const data = await response.json();
  if (data.result?.content?.[0]?.text) {
    return JSON.parse(data.result.content[0].text);
  }
  return data;
}

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const type = searchParams.get('type') || 'dashboard';
  
  try {
    switch (type) {
      case 'dashboard':
        return NextResponse.json(await callMcpTool('family_get_dashboard', {}));
        
      case 'members':
        return NextResponse.json(await callMcpTool('family_get_members', {}));
        
      case 'chores':
        const memberId = searchParams.get('member_id') || undefined;
        const status = searchParams.get('status') || undefined;
        return NextResponse.json(await callMcpTool('family_get_chores', { member_id: memberId, status }));
        
      case 'events':
        const startDate = searchParams.get('start_date') || undefined;
        const endDate = searchParams.get('end_date') || undefined;
        return NextResponse.json(await callMcpTool('family_get_events', { start_date: startDate, end_date: endDate }));
        
      case 'guardian-wifi':
        return NextResponse.json(await callMcpTool('guardian_check_wifi_security', {}));
        
      case 'guardian-network':
        return NextResponse.json(await callMcpTool('guardian_get_network_stats', {}));
        
      case 'guardian-children':
        return NextResponse.json(await callMcpTool('guardian_get_child_profiles', {}));
        
      default:
        return NextResponse.json({ error: 'Unknown type' }, { status: 400 });
    }
  } catch (error) {
    console.error('Family OS API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, data } = body;
    
    switch (action) {
      case 'add_member':
        return NextResponse.json(await callMcpTool('family_add_member', data));
        
      case 'add_chore':
        return NextResponse.json(await callMcpTool('family_add_chore', data));
        
      case 'complete_chore':
        return NextResponse.json(await callMcpTool('family_complete_chore', data));
        
      case 'add_event':
        return NextResponse.json(await callMcpTool('family_add_event', data));
        
      // Guardian actions
      case 'add_child':
        return NextResponse.json(await callMcpTool('guardian_add_child_profile', data));
        
      case 'block_game':
        return NextResponse.json(await callMcpTool('guardian_block_game', data));
        
      case 'set_game_limit':
        return NextResponse.json(await callMcpTool('guardian_set_game_limit', data));
        
      case 'check_game':
        return NextResponse.json(await callMcpTool('guardian_check_game_content', data));
        
      case 'check_play_schedule':
        return NextResponse.json(await callMcpTool('guardian_check_play_schedule', data));
        
      case 'moderate_chat':
        return NextResponse.json(await callMcpTool('guardian_moderate_chat', data));
        
      case 'mark_device_trusted':
        return NextResponse.json(await callMcpTool('guardian_mark_device_trusted', data));
        
      default:
        return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
    }
  } catch (error) {
    console.error('Family OS POST error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}