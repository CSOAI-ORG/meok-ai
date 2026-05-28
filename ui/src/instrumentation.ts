// Instrumentation — Sentry removed entirely from this build.
//
// @sentry/nextjs 10.45.0 + Next.js 15.5.15 had a persistent RSC build
// crash: "Cannot read properties of undefined (reading 'registerClient
// Reference')" inside _not-found/page.js, caused by the OpenTelemetry
// instrumentation chain that ships transitively with @sentry/node.
//
// After three escalating fix attempts (lazy import, webpack-wrapper off,
// no Sentry symbol at all in global-error.tsx) the bundle STILL pulled
// @sentry/nextjs into chunks/2898.js via Next.js auto-detection of the
// installed dependency. The pragmatic call: remove the dependency.
//
// Sentry is re-introducible later by:
//   1. Adding `@sentry/nextjs` back to package.json at a compatible
//      version (track the registerClientReference issue in their tracker)
//   2. Restoring `sentry.{client,edge,server}.config.ts.disabled` → .ts
//   3. Re-enabling the lazy `import('@sentry/nextjs')` here and the
//      `withSentryConfig` wrapper in next.config.ts.
//
// For now this file is intentionally a no-op so Next.js's instrumentation
// hook contract is honoured.

export async function register() {
  // no-op
}

export function onRequestError() {
  // no-op
}
