import { NextResponse } from 'next/server'
import { getAuthUserId } from '@/lib/api-auth'

// GET /api/council/status
// Returns Byzantine Council health — proxies to SOV3 with local fallback

const SOV3_URL = process.env.SOV3_API_URL || 'http://localhost:3101'

export async function GET() {
  const userId = await getAuthUserId()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Try to get live data from SOV3
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 3000)

    const res = await fetch(`${SOV3_URL}/health`, {
      signal: controller.signal,
      headers: { 'Accept': 'application/json' },
    })
    clearTimeout(timeout)

    if (res.ok) {
      const health = await res.json()
      return NextResponse.json({
        status: health.status ?? 'unknown',
        agents: {
          total: 46,
          active: health.agents?.active ?? 46,
          by_archetype: {
            memory_specialist: 5,
            security_analyst: 5,
            care_validator: 5,
            research_agent: 5,
            guardian_agent: 5,
            council_member: 5,
            consensus_builder: 5,
            creative_agent: 5,
            neural_specialist: 5,
            sovereign_core: 1,
          },
        },
        bft: {
          threshold: 'f < n/3',
          fault_tolerance: 15,
          consensus_active: true,
          last_vote_cycle: health.uptime_seconds
            ? Math.floor(Date.now() / 1000 - (health.uptime_seconds % 300))
            : null,
        },
        memory_store: health.memory_store ?? 'unknown',
        uptime_seconds: health.uptime_seconds ?? null,
        source: 'live',
      })
    }
  } catch {
    // SOV3 unavailable — return mock
  }

  // Fallback mock when SOV3 is unreachable
  return NextResponse.json({
    status: 'degraded',
    agents: {
      total: 46,
      active: 0,
      by_archetype: {
        memory_specialist: 5,
        security_analyst: 5,
        care_validator: 5,
        research_agent: 5,
        guardian_agent: 5,
        council_member: 5,
        consensus_builder: 5,
        creative_agent: 5,
        neural_specialist: 5,
        sovereign_core: 1,
      },
    },
    bft: {
      threshold: 'f < n/3',
      fault_tolerance: 15,
      consensus_active: false,
      last_vote_cycle: null,
    },
    memory_store: 'unknown',
    uptime_seconds: null,
    source: 'fallback',
    message: 'SOV3 unreachable — data reflects static configuration',
  })
}
