import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const BACKEND = process.env.MEOK_BACKEND_URL || "http://198.53.64.194:40646";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // GitHub avatars (user profile images)
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      // Cloudflare Images / R2 public buckets
      { protocol: "https", hostname: "imagedelivery.net" },
      { protocol: "https", hostname: "*.r2.dev" },
      // Clerk user profile photos
      { protocol: "https", hostname: "img.clerk.com" },
      { protocol: "https", hostname: "images.clerk.dev" },
      // General HTTPS images (game covers from RAWG / IGDB etc.)
      { protocol: "https", hostname: "media.rawg.io" },
      { protocol: "https", hostname: "images.igdb.com" },
      { protocol: "https", hostname: "cdn.akamai.steamstatic.com" },
      { protocol: "https", hostname: "steamcdn-a.akamaihd.net" },
    ],
  },

  experimental: {
    serverActions: {
      allowedOrigins: ["meok.ai", "www.meok.ai", "localhost:3000"],
    },
  },

  async redirects() {
    return [
      { source: '/product/companions',      destination: '/characters', permanent: true },
      { source: '/product/ralph',           destination: '/work',       permanent: true },
      { source: '/product/family-guardian', destination: '/guardian',   permanent: true },
      { source: '/product/characters',      destination: '/characters', permanent: true },
    ];
  },

  async rewrites() {
    return [
      { source: "/api/:path*",  destination: `${BACKEND}/api/:path*` },
      { source: "/auth/:path*", destination: `${BACKEND}/auth/:path*` },
      { source: "/chat/:path*", destination: `${BACKEND}/chat/:path*` },
      { source: "/mcp",         destination: `${BACKEND}/mcp` },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options",  value: "nosniff" },
          // SAMEORIGIN allows embedding within meok.ai itself (e.g. iframes in dashboard)
          { key: "X-Frame-Options",          value: "SAMEORIGIN" },
          { key: "X-XSS-Protection",         value: "1; mode=block" },
          { key: "Referrer-Policy",           value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",        value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // Sentry added to connect-src and script-src
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://clerk.accounts.dev https://*.clerk.accounts.dev https://js.stripe.com https://browser.sentry-cdn.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https:",
              "font-src 'self'",
              "connect-src 'self' http://198.53.64.194:40646 https://api.anthropic.com https://api.openai.com https://*.clerk.accounts.dev https://*.ingest.sentry.io https://eu.posthog.com https://us.posthog.com wss:",
              "frame-src https://js.stripe.com https://hooks.stripe.com",
              "worker-src 'self' blob:",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

// Sentry config — only wraps when NEXT_PUBLIC_SENTRY_DSN is set
const sentryWebpackPluginOptions = {
  org: process.env.SENTRY_ORG || "meok-ai",
  project: process.env.SENTRY_PROJECT || "meok-ui",
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: true,        // no terminal spam
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
};

export default process.env.NEXT_PUBLIC_SENTRY_DSN
  ? withSentryConfig(nextConfig, sentryWebpackPluginOptions)
  : nextConfig;
