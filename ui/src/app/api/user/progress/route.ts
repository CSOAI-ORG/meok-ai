import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { getEvolutionStage, getProgressToNextStage, interactionsUntilNextStage, isFeatureUnlocked } from '@/lib/evolution'
import { getMasteryLevel, getLevelProgress } from '@/lib/gamification'
import { getUserById } from '@/lib/db/user'

export async function GET() {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const user = await getUserById(userId)
  const interactions = user?.messages_total ?? user?.companion_stage ?? 0
  const streakDays = user?.streak_days ?? 0

  const stage = getEvolutionStage(interactions)
  const mastery = getMasteryLevel(interactions)
  const levelProgress = getLevelProgress(interactions)

  return NextResponse.json({
    interactions,
    streak_days: streakDays,
    evolution: {
      stage_name: stage.name,
      stage_index: stage.id,
      progress_to_next: getProgressToNextStage(interactions),
      interactions_until_next: interactionsUntilNextStage(interactions),
      badge: stage.imageHint,
      color: stage.color,
    },
    mastery: {
      level: mastery.tier,
      label: mastery.label,
      badge: mastery.badge,
      color: mastery.color,
      xp_to_next: levelProgress.xpToNext,
      percent_to_next: levelProgress.percent,
    },
    features: {
      guardian_unlocked: isFeatureUnlocked('guardian', interactions),
      ralph_mode_unlocked: isFeatureUnlocked('ralph_mode', interactions),
    }
  })
}
