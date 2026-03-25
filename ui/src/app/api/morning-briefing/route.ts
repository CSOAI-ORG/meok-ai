import { NextResponse } from 'next/server'
import { auth, currentUser } from '@clerk/nextjs/server'
import { processDreamCycle, formatMorningInsight } from '@/lib/dream'

// GET /api/morning-briefing
// Returns the user's morning briefing built from live SOV3 data

const SOV3_BASE = process.env.NEXT_PUBLIC_SOV3_ENDPOINT ?? 'http://localhost:3101'

/** Call a SOV3 MCP tool and return the parsed result text, or null on failure. */
async function callSov3Tool(
  toolName: string,
  args: Record<string, unknown> = {},
): Promise<unknown | null> {
  try {
    const res = await fetch(`${SOV3_BASE}/mcp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'tools/call',
        params: { name: toolName, arguments: args },
      }),
    })
    if (!res.ok) return null
    const json = await res.json()
    const text = json?.result?.content?.[0]?.text
    if (!text) return null
    return JSON.parse(text)
  } catch {
    return null
  }
}

function getGreetingPrefix(): string {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 17) return 'Good afternoon'
  return 'Good evening'
}

export async function GET() {
  const { userId } = await auth()

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const user = await currentUser()
  const firstName = user?.firstName ?? 'there'

  // Fire all SOV3 calls in parallel
  const [consciousness, memoryStats, alerts, agentStatus] = await Promise.all([
    callSov3Tool('get_consciousness_state'),
    callSov3Tool('get_memory_stats'),
    callSov3Tool('get_active_alerts'),
    callSov3Tool('orion_riri_hourman_status'),
  ])

  // Extract consciousness data with fallbacks
  const consciousnessData = consciousness as Record<string, unknown> | null
  const careScore = typeof consciousnessData?.care_intensity === 'number'
    ? Math.round((consciousnessData.care_intensity as number) * 100)
    : 84
  const consciousnessMode = (consciousnessData?.mode as string) ?? 'active'

  // Extract memory stats with fallbacks
  const memoryData = memoryStats as Record<string, unknown> | null
  const episodeCount = typeof memoryData?.episode_count === 'number'
    ? memoryData.episode_count as number
    : typeof memoryData?.total_episodes === 'number'
      ? memoryData.total_episodes as number
      : 0

  // Extract alerts with fallbacks
  const alertsData = (alerts as unknown[] | null) ?? []
  const activeAlerts = Array.isArray(alertsData) ? alertsData : []

  // Extract agent status with fallbacks
  const agentData = agentStatus as Record<string, unknown> | null
  const agentState = (agentData?.state as string) ?? 'unknown'
  const lastTask = (agentData?.last_task as string) ?? null
  const taskStatus = (agentData?.task_status as string) ?? 'unknown'

  // Build priorities from real data
  const priorities: Array<{ id: string; text: string; priority: 'high' | 'medium' | 'low' }> = []

  // Add alert-based priorities
  for (const [i, alert] of activeAlerts.entries()) {
    const alertObj = alert as Record<string, unknown>
    const severity = (alertObj?.severity as string)?.toLowerCase()
    priorities.push({
      id: `alert_${i}`,
      text: (alertObj?.message as string) ?? (alertObj?.title as string) ?? 'Guardian alert requires attention',
      priority: severity === 'critical' || severity === 'high' ? 'high' : 'medium',
    })
  }

  // Add care score warning if low
  if (careScore < 50) {
    priorities.push({
      id: 'care_low',
      text: `Care score is at ${careScore}% — consider a restorative session`,
      priority: 'high',
    })
  }

  // Add memory housekeeping if count is high
  if (episodeCount > 1000) {
    priorities.push({
      id: 'memory_housekeeping',
      text: `${episodeCount} memory episodes stored — consider pruning old entries`,
      priority: 'low',
    })
  }

  // Ensure at least one priority
  if (priorities.length === 0) {
    priorities.push({
      id: 'default',
      text: 'All systems healthy — focus on your top creative task today',
      priority: 'medium',
    })
  }

  // Build overnight work summary from agent data
  const overnight_work: Array<{ agent: string; task: string; status: 'complete' | 'pending' | 'failed' }> = []

  if (agentData) {
    overnight_work.push({
      agent: 'Orion-Riri-Hourman',
      task: lastTask ?? `Agent ${agentState}`,
      status: taskStatus === 'complete' || taskStatus === 'completed' ? 'complete'
        : taskStatus === 'failed' ? 'failed'
        : 'pending',
    })
  }

  // Build sovereign insight from real state
  let sovereign_insight: string
  if (consciousnessData) {
    sovereign_insight = `Consciousness mode: ${consciousnessMode}. Care intensity: ${careScore}%.`
    if (episodeCount > 0) {
      sovereign_insight += ` ${episodeCount} memory episodes on record.`
    }
    if (activeAlerts.length > 0) {
      sovereign_insight += ` ${activeAlerts.length} active alert${activeAlerts.length === 1 ? '' : 's'} flagged by the guardian.`
    } else {
      sovereign_insight += ' No guardian alerts — all clear.'
    }
  } else {
    sovereign_insight = 'SOV3 is offline — running with cached defaults. Check sovereign-temple status.'
  }

  // Process dream cycle from recent memory episodes (if available)
  let dream_insight: string | null = null
  try {
    const recentMessages = await callSov3Tool('get_recent_messages', { limit: 50 })
    const msgs = Array.isArray(recentMessages) ? recentMessages : []
    const dreamMessages = msgs.map((m: Record<string, unknown>) => ({
      content: (m.content as string) ?? '',
      timestamp: (m.timestamp as string) ?? new Date().toISOString(),
    }))
    if (dreamMessages.length > 0) {
      const insights = processDreamCycle(dreamMessages)
      dream_insight = formatMorningInsight(insights)
    }
  } catch {
    // Non-fatal — dream cycle is a nice-to-have
  }

  const now = new Date()
  const briefing = {
    generated_at: now.toISOString(),
    care_score: careScore,
    greeting: `${getGreetingPrefix()}, ${firstName}`,
    priorities,
    calendar_events: [] as Array<{ time: string; title: string; location?: string }>,
    overnight_work,
    sovereign_insight,
    dream_insight,
    next_action: priorities[0]
      ? `Focus on: ${priorities[0].text}`
      : 'All clear — use this time for deep work.',
  }

  return NextResponse.json(briefing)
}
