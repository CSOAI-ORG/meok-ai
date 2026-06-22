import { NextResponse } from 'next/server';
import { AETHELGARD_FINANCE_HIVE } from '@/lib/aethelgard-agents';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * GET /api/town/agents
 *
 * Returns the current roster of Aethelgard (EU) Finance Hive agents.
 * This is the Phase 0 showcase capital — 5 agents, one civilization.
 */
export async function GET() {
  return NextResponse.json({
    civilization: 'Aethelgard',
    region: 'European Union',
    capital: 'Frankfurt-Prime',
    hive: 'Finance',
    agents: AETHELGARD_FINANCE_HIVE,
  });
}
