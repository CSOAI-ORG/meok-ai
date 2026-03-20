// Sentry server-side configuration — MEOK
import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN;

if (SENTRY_DSN) {
  Sentry.init({
    dsn: SENTRY_DSN,
    environment: process.env.NODE_ENV,
    release: process.env.NEXT_PUBLIC_APP_VERSION || "0.1.0",
    tracesSampleRate: process.env.NODE_ENV === "production" ? 0.05 : 1.0,
    // Don't log to console in production
    debug: false,
  });
}
