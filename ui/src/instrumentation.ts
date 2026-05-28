// Sentry instrumentation — Sentry webpack wrapper disabled in next.config.ts
// due to @sentry/nextjs 10.45.0 + Next.js 15.5.15 RSC build error. Runtime
// capture (`Sentry.captureException`) is still wired in `global-error.tsx`
// via lazy `import('@sentry/nextjs')`. This file is intentionally a near-no-op
// until Sentry version compat is resolved.

export async function register() {
  if (!process.env.NEXT_PUBLIC_SENTRY_DSN) return
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('../sentry.server.config')
  }
  if (process.env.NEXT_RUNTIME === 'edge') {
    await import('../sentry.edge.config')
  }
}

export async function onRequestError(
  err: unknown,
  request: unknown,
  context: unknown,
) {
  if (!process.env.NEXT_PUBLIC_SENTRY_DSN) return
  try {
    const Sentry = await import('@sentry/nextjs')
    // @ts-expect-error — Sentry's signature matches at runtime
    return Sentry.captureRequestError(err, request, context)
  } catch {
    // swallow — Sentry failure must never block request handling
  }
}
