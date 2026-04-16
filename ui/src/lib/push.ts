import webpush from 'web-push'
import { sql } from './db'

const vapidPublicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY ?? ''
const vapidPrivateKey = process.env.VAPID_PRIVATE_KEY ?? ''
const vapidSubject = process.env.VAPID_SUBJECT ?? 'mailto:guardian@meok.ai'

const hasVapid = vapidPublicKey.length > 0 && vapidPrivateKey.length > 0

if (hasVapid) {
  webpush.setVapidDetails(vapidSubject, vapidPublicKey, vapidPrivateKey)
}

export type PushPayload = {
  title: string
  body: string
  icon?: string
  badge?: string
  tag?: string
  data?: Record<string, unknown>
  actions?: { action: string; title: string }[]
}

export async function sendPushToUser(
  userId: string,
  payload: PushPayload
): Promise<{ sent: number; failed: number }> {
  if (!hasVapid) {
    return { sent: 0, failed: 0 }
  }

  const rows = await sql`
    SELECT endpoint, p256dh, auth
    FROM push_subscriptions
    WHERE user_id = ${userId}
  `

  let sent = 0
  let failed = 0

  for (const row of rows) {
    const sub = {
      endpoint: row.endpoint as string,
      keys: {
        p256dh: row.p256dh as string,
        auth: row.auth as string,
      },
    }

    try {
      await webpush.sendNotification(
        sub,
        JSON.stringify({
          ...payload,
          icon: payload.icon ?? '/brand/icon-192.png',
          badge: payload.badge ?? '/brand/icon-192.png',
        })
      )
      sent++
    } catch (err: any) {
      failed++
      // Remove invalid/expired subscriptions
      if (err?.statusCode === 410 || err?.statusCode === 404) {
        await sql`
          DELETE FROM push_subscriptions
          WHERE endpoint = ${sub.endpoint}
        `.catch(() => {})
      }
    }
  }

  return { sent, failed }
}

export { hasVapid }
