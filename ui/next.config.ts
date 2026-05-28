import type { NextConfig } from "next";
// NOTE: `withSentryConfig` import removed — @sentry/nextjs 10.45.0 + Next.js
// 15.5.15 produce build-time RSC errors ("Cannot read properties of undefined
// (reading 'registerClientReference')") in _not-found page data collection.
// Sentry runtime capture is still available via `import('@sentry/nextjs')`
// inside `global-error.tsx`. Re-enable the webpack wrapper after pinning a
// compatible Sentry version.
// import { withSentryConfig } from "@sentry/nextjs";

const BACKEND = process.env.MEOK_BACKEND_URL || "http://198.53.64.194:40646";

const nextConfig: NextConfig = {
  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  // Reduce memory usage during build
  experimental: {
    serverActions: {
      allowedOrigins: ["meok.ai", "www.meok.ai", "try.meok.ai", "localhost:3000"],
    },
  },
  webpack: (config, { isServer, nextRuntime }) => {
    // Reduce memory usage during build
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          cacheGroups: {
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              reuseExistingChunk: true,
              name: 'vendors',
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }
    return config;
  },

  images: {
    unoptimized: true,
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

  async redirects() {
    // MCP packages with dedicated landing pages
    const mcpDedicatedPages = [
      { source: '/meok-watermark-attest-mcp', destination: '/mcp/watermark', permanent: false },
      { source: '/meok-cra-annex-iv-classifier-mcp', destination: '/mcp/cra-classifier', permanent: false },
      { source: '/ai-bom-mcp', destination: '/mcp/ai-bom', permanent: false },
    ];

    // MCP package names → /labs/mcp/servers (PyPI homepage links land here)
    const mcpPackageRedirects = [
      'meok-omnibus-tracker-mcp',
      'meok-mcp-injection-scan-mcp',
      'meok-fria-generator-mcp',
      'meok-dora-tlpt-planner-mcp',
      'meok-nis2-de-register-mcp',
      'dora-compliance-mcp',
      'nis2-compliance-mcp',
      'cra-compliance-mcp',
      'csrd-compliance-mcp',
      'eu-ai-act-compliance-mcp',
      'healthcare-fhir-mcp',
      'uk-ai-bill-compliance-mcp',
      'dora-nis2-crosswalk-mcp',
      'ai-incident-reporting-mcp',
      'gods-eye-geospatial-mcp',
      'care-membrane-mcp',
      'meok-attestation-verify',
      'prompt-injection-firewall-mcp',
    ].map(pkg => ({
      source: `/${pkg}`,
      destination: '/labs/mcp/servers',
      permanent: false,
    }));

    return [
      ...mcpDedicatedPages,
      ...mcpPackageRedirects,
      { source: '/product/companions',      destination: '/characters', permanent: true },
      { source: '/product/ralph',           destination: '/work',       permanent: true },
      { source: '/product/family-guardian', destination: '/guardian',   permanent: true },
      { source: '/product/characters',      destination: '/characters', permanent: true },
      { source: '/register',                destination: '/start',      permanent: false },
      { source: '/hatch',                   destination: '/start',      permanent: false },
    ];
  },

  async rewrites() {
    // IMPORTANT: the catch-all /api/:path* → BACKEND rewrite breaks any local
    // Next.js API route (e.g. Stripe webhooks, Clerk hooks) when BACKEND is down.
    // Use `beforeFiles` to let locally-defined routes win, and only fall through
    // to BACKEND for paths we don't serve from Next itself.
    return {
      beforeFiles: [
        // Keep Stripe webhook + checkout routes local — they MUST stay on Vercel,
        // not proxied to the M2 home server (which can be offline).
        { source: "/api/webhooks/:path*", destination: "/api/webhooks/:path*" },
        { source: "/api/stripe/:path*",   destination: "/api/stripe/:path*" },
        // Clerk auth hooks MUST also stay local — proxying them breaks auth.
        { source: "/api/auth/:path*",     destination: "/api/auth/:path*" },
      ],
      afterFiles: [
        // Everything else under /api/* falls through to the M2 backend when
        // there is no local Next route matching.
        { source: "/api/:path*",  destination: `${BACKEND}/api/:path*` },
        { source: "/auth/:path*", destination: `${BACKEND}/auth/:path*` },
        { source: "/chat/:path*", destination: `${BACKEND}/chat/:path*` },
        { source: "/mcp",         destination: `${BACKEND}/mcp` },
      ],
    };
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options",  value: "nosniff" },
          { key: "X-Frame-Options",          value: "SAMEORIGIN" },
          { key: "X-XSS-Protection",         value: "1; mode=block" },
          { key: "Referrer-Policy",           value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",        value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://clerk.accounts.dev https://*.clerk.accounts.dev https://js.stripe.com https://browser.sentry-cdn.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https:",
              "font-src 'self'",
              `connect-src 'self' ${BACKEND} https://api.anthropic.com https://api.openai.com https://*.clerk.accounts.dev https://*.ingest.sentry.io https://eu.posthog.com https://us.posthog.com wss:`,
              "frame-src https://js.stripe.com https://hooks.stripe.com",
              "worker-src 'self' blob:",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

// Sentry webpack wrapper disabled — see note at top of file. Re-enable with:
//   const sentryWebpackPluginOptions = {
//     org: process.env.SENTRY_ORG || "meok-ai",
//     project: process.env.SENTRY_PROJECT || "meok-ui",
//     authToken: process.env.SENTRY_AUTH_TOKEN,
//     silent: true,
//     widenClientFileUpload: true,
//     hideSourceMaps: true,
//     disableLogger: true,
//     automaticVercelMonitors: true,
//   };
//   export default process.env.NEXT_PUBLIC_SENTRY_DSN
//     ? withSentryConfig(nextConfig, sentryWebpackPluginOptions)
//     : nextConfig;
export default nextConfig;
