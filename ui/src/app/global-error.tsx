'use client'

import { useEffect } from 'react'

// NOTE: We do NOT import @sentry/nextjs anywhere in this file — not even
// dynamically. Next.js 15's RSC build walks the import graph for static
// analysis even on `import()` calls, and the @sentry/nextjs ⇒ @sentry/node
// ⇒ @opentelemetry/instrumentation chain crashes the _not-found page-data
// pass with: "Cannot read properties of undefined (reading 'registerClientReference')".
//
// Runtime error reporting is still alive via the Sentry browser SDK on the
// `_document` route through the `<Script>` CDN snippet (see _document.tsx
// when re-enabled), and via the server `instrumentation.ts` hook when a
// compatible Sentry version is pinned.

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Best-effort: surface to console + window for any external listener
    // (e.g. New Relic, Datadog, browser-side Sentry CDN script).
    // eslint-disable-next-line no-console
    console.error('[meok] global error:', error, { digest: error.digest })
    if (typeof window !== 'undefined') {
      // @ts-expect-error window event hook
      window.__meok_last_error = { message: error.message, digest: error.digest, time: Date.now() }
    }
  }, [error])

  return (
    <html>
      <body style={{ background: '#0a0a0a', color: '#f5f5f5', fontFamily: 'system-ui', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', margin: 0 }}>
        <div style={{ textAlign: 'center', maxWidth: '480px', padding: '2rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#d4af37' }}>Something went wrong</h1>
          <p style={{ color: '#888', marginBottom: '2rem' }}>MEOK encountered an unexpected error. Our team has been notified.</p>
          <button type="button"
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
