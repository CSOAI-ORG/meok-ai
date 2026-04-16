# MEOK OS Production Deployment Guide

## Current Status

- **MCP Server**: Running on port 3101 (healthy)
- **Neural Models**: 7 trained models active
- **Total MCP Tools**: 99 tools available
- **Frontend**: Next.js app ready

## Quick Start

```bash
# Start MCP Server
cd /Users/nicholas/clawd/sovereign-temple
source .venv/bin/activate
gunicorn sovereign-mcp-server:app --worker-class uvicorn.workers.UvicornWorker \
  --workers 2 --bind 0.0.0.0:3101 --max-requests 1000

# Start Frontend
cd /Users/nicholas/clawd/meok/ui
npm run dev
```

## Product Line

| Product | Description | Status |
|---------|-------------|--------|
| **MEOK OS** | Core AI operating system | ✅ Running |
| **Sovereign AI** | Personal AI companion with care-first principles | ✅ Running |
| **Family OS** | Family dashboard, chores, events, members | ✅ 9 tools |
| **Guardian** | WiFi security, gaming protection, child safety | ✅ 13 tools |

## MCP Tools by Category

### Family OS (9 tools)
- `family_add_member`, `family_get_members`
- `family_add_chore`, `family_complete_chore`, `family_get_chores`
- `family_add_event`, `family_get_events`
- `family_get_dashboard`

### Guardian - WiFi (4 tools)
- `guardian_scan_network`, `guardian_check_wifi_security`
- `guardian_get_network_stats`, `guardian_mark_device_trusted`

### Guardian - Gaming (8 tools)
- `guardian_add_child_profile`, `guardian_get_child_profiles`
- `guardian_check_game_content`, `guardian_block_game`
- `guardian_set_game_limit`, `guardian_check_play_schedule`
- `guardian_moderate_chat`, `guardian_check_game_content`

### MEOK Core (70+ tools)
- Neural models: care validation, threat detection, relationship prediction
- Memory operations, consciousness tracking, multi-agent coordination

## Environment Variables Required

```env
# MCP Server
ANTHROPIC_API_KEY=sk-ant-...
MOONSHOT_API_KEY=sk-...

# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/db

# Pi-hole (optional)
PIHOLE_HOST=192.168.1.1
PIHOLE_PASSWORD=your_password

# Telegram (optional)
TELEGRAM_BOT_TOKEN=xxx
TELEGRAM_CHAT_ID=xxx
```

## Frontend Routes

| Route | Description |
|-------|-------------|
| `/family/os` | Family OS Dashboard |
| `/family` | Family Landing Page |
| `/guardian` | Guardian Overview |
| `/sovereign` | Sovereign AI |

## Architecture

```
MEOK OS Unified
├── MEOK Core (neural, memory, MCP)
├── Sovereign AI (consciousness, care)
├── Family OS (dashboard, members, chores)
└── Guardian (wifi, gaming, child safety)
    ├── Pi-hole integration (DNS filtering)
    └── Telegram notifications
```

## Verification

```bash
# Health check
curl http://localhost:3101/health

# List tools
curl -X POST http://localhost:3101/mcp \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"tools/list","id":"test"}'

# Test a tool
curl -X POST http://localhost:3101/mcp \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"tools/call","params":{"name":"family_get_dashboard","arguments":{}},"id":"test"}'
```

## Next Steps for Production

1. Set up domain (meok.ai)
2. Configure SSL/TLS
3. Set up PostgreSQL with proper schema
4. Add Pi-hole server for DNS filtering
5. Configure Telegram bot for alerts
6. Deploy with Docker/Kubernetes
## Deployment to Vercel (Production)

### 1. Fix Vercel Project Settings
Go to: https://vercel.com/niks-projects-0a2ef942/ui/settings
- Set Framework Preset: Next.js
- Set Build Command: `npm run build`
- Set Output Directory: `.next`

### 2. Deploy Frontend
```bash
cd /Users/nicholas/clawd/meok/ui
vercel --prod
```

### 3. Deploy Backend (MCP Server)
The MCP server needs separate hosting:
- Option A: Fly.io (recommended for Node.js)
- Option B: Render.com
- Option C: Railway

### 4. Update Environment Variables
Point frontend to production backend URL.

### 5. Configure Custom Domain
- Add meok.ai in Vercel dashboard
- DNS already points to Vercel (76.76.21.21)
