/**
 * Sentry error tracking — MEOK
 * From 11-Day Launch Playbook: Sentry is a launch-critical requirement.
 *
 * Install: npm install @sentry/nextjs
 * Dashboard: sentry.io → new project → Next.js
 *
 * Add to .env.local:
 *   NEXT_PUBLIC_SENTRY_DSN=https://xxx@xxx.ingest.sentry.io/xxx
 *   SENTRY_ORG=meok-ai
 *   SENTRY_PROJECT=meok-ui
 */

export const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN || ''

export function isSentryEnabled() {
  return !!SENTRY_DSN && process.env.NODE_ENV !== 'development'
}

/**
 * Stub Sentry capture until @sentry/nextjs is installed.
 * Replace the body with real Sentry.captureException once installed.
 */
export function captureError(error: Error | unknown, context?: Record<string, unknown>) {
  if (!isSentryEnabled()) {
    console.error('[Sentry stub]', error, context)
    return
  }
  // Real implementation (uncomment after npm install @sentry/nextjs):
  // import * as Sentry from '@sentry/nextjs'
  // Sentry.withScope((scope) => {
  //   if (context) scope.setExtras(context)
  //   Sentry.captureException(error)
  // })
}

export function captureMessage(message: string, level: 'info' | 'warning' | 'error' = 'info') {
  if (!isSentryEnabled()) {
    console.log(`[Sentry stub:${level}]`, message)
    return
  }
  // Sentry.captureMessage(message, level)
}
