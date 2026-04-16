# MEOK OS Vercel Deployment Guide

## Current Issue
The Vercel project has incorrect build settings. To fix:

1. Go to: https://vercel.com/niks-projects-0a2ef942/ui/settings
2. Find "Build & Development Settings"
3. Set:
   - Framework Preset: Next.js
   - Build Command: `npm run build` or leave blank (auto-detect)
   - Output Directory: `.next` or leave blank

## Quick Deploy

```bash
cd /Users/nicholas/clawd/meok/ui

# Link project (if not linked)
vercel link

# Pull latest settings
vercel pull --yes --environment=production

# Deploy
vercel --prod
```

## Environment Variables (in Vercel Dashboard)

```
MEOK_BACKEND_URL=http://localhost:3101
NEXT_PUBLIC_MCP_URL=http://localhost:3101
ANTHROPIC_API_KEY=sk-ant-...
DATABASE_URL=postgresql://...
```

## Alternative: Manual Build

```bash
cd /Users/nicholas/clawd/meok/ui
npm run build
# Output is in .next/ directory
```

## Deployment Checklist

- [ ] Fix Vercel project settings
- [ ] Add environment variables
- [ ] Configure custom domain (meok.ai)
- [ ] Set up SSL
- [ ] Deploy MCP server separately
