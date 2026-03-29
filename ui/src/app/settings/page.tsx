import { auth } from '@clerk/nextjs/server'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getUserById } from '@/lib/db/user'
import SettingsClient from './settings-client'

export const metadata: Metadata = {
  title: 'Settings | MEOK AI LABS',
  description: 'Manage your MEOK AI companion settings, preferences, and account.',
}

export default async function SettingsPage() {
  const { userId } = await auth()
  if (!userId) redirect('/login')

  const [clerkUser, dbUser] = await Promise.all([
    currentUser(),
    getUserById(userId),
  ])

  const profile = {
    name: clerkUser?.fullName ?? clerkUser?.firstName ?? dbUser?.name ?? 'User',
    email: clerkUser?.emailAddresses?.[0]?.emailAddress ?? dbUser?.email ?? '',
    tier: dbUser?.tier ?? 'explorer',
    companionName: dbUser?.companion_name ?? 'Aria',
    companionId: dbUser?.companion_id ?? 'aria',
    guardianEnabled: dbUser?.guardian_enabled ?? false,
    streakDays: dbUser?.streak_days ?? 0,
    messagesTotal: dbUser?.messages_total ?? 0,
    createdAt: dbUser?.created_at ?? new Date().toISOString(),
  }

  return <SettingsClient profile={profile} />
}
