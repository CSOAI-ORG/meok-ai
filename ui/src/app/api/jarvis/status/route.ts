import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

const BRIDGE_DIR = '/Users/nicholas/clawd/jarvis-memory';

export async function GET() {
  try {
    const statusPath = join(BRIDGE_DIR, 'jarvis-status.json');
    const statusData = await readFile(statusPath, 'utf-8');
    const status = JSON.parse(statusData);
    
    return NextResponse.json(status);
  } catch (err) {
    return NextResponse.json(
      { status: 'idle', progress: 0, current_action: 'JARVIS not running' },
      { status: 200 }
    );
  }
}