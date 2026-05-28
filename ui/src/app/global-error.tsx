'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Lazy-import Sentry to keep the OpenTelemetry instrumentation chain
    // out of build-time page-data collection. Next.js 15 + Sentry compat:
    // a static `import * as Sentry from '@sentry/nextjs'` pulls @fastify/otel
    // → @opentelemetry/instrumentation and fails the build with
    // "Cannot read properties of undefined (reading 'registerClientReference')"
    // inside .next/server/app/_not-found/page.js.
    import('@sentry/nextjs')
      .then(Sentry => Sentry.captureException(error))
      .catch(() => {})
  }, [error])

  return (
    <html>
      <body style={{ background: '#0a0a0a', color: '#f5f5f5', fontFamily: 'system-ui', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', margin: 0 }}>
        <div style={{ textAlign: 'center', maxWidth: '480px', padding: '2rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#d4af37' }}>Something went wrong</h1>
          <p style={{ color: '#888', marginBottom: '2rem' }}>MEOK encountered an unexpected error. Our team has been notified.</p>
          <button
            onClick={reset}
            style={{ background: '#d4af37', color: '#0a0a0a', border: 'none', padding: '0.75rem 2rem', borderRadius: '0.5rem', cursor: 'pointer', fontWeight: 600 }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
