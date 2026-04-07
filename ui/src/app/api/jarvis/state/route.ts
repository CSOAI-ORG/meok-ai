import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

const BRIDGE_DIR = '/Users/nicholas/clawd/jarvis-memory';

export async function GET() {
  try {
    const statePath = join(BRIDGE_DIR, 'jarvis-state.json');
    const stateData = await readFile(statePath, 'utf-8');
    const state = JSON.parse(stateData);
    
    return NextResponse.json(state);
  } catch (err) {
    return NextResponse.json(
      { state: 'idle', brain_active: '', model: '', emotion: 'neutral' },
      { status: 200 }
    );
  }
}