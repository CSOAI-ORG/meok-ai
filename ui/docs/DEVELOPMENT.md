# MEOK AI OS — Developer Guide

## Architecture

```
meok/
  ui/                    # Next.js 15 App Router (try.meok.ai)
  sovereign-temple/      # SOV3 — Python FastAPI MCP server (localhost:3100)
```

**Frontend:** Next.js 15, React 19, Tailwind CSS, Clerk (auth), Stripe (billing), Vercel (hosting)
**Backend:** Sovereign Temple v3 — FastAPI + PostgreSQL + pgvector + 78 MCP tools
**Database:** Neon PostgreSQL (production) / local PostgreSQL 15 (dev)
**Models:** 14 Ollama models (6 local + 6 cloud + 2 embeddings)

## Quick Start

```bash
# 1. Clone and install
git clone <repo> && cd meok/ui
npm install

# 2. Environment
cp .env.local.example .env.local
# Fill in: DATABASE_URL, CLERK keys, ANTHROPIC_API_KEY (minimum)

# 3. Start Ollama (for local models)
ollama serve  # runs on :11434

# 4. Start SOV3 (optional — for MCP tools, memory, council)
cd ../sovereign-temple && ./run-local.sh

# 5. Run dev server
cd ../ui && npm run dev    # http://localhost:3000
```

## Key Directories

| Path | Purpose |
|------|---------|
| `src/app/` | Next.js App Router pages (~543 pages) |
| `src/app/api/` | API routes (~85 routes) |
| `src/app/dashboard/` | Authenticated dashboard (chat, settings, memory) |
| `src/lib/` | Core logic: LLM router, memory, characters, emotion, care |
| `src/components/` | Shared React components |
| `src/__tests__/` | Jest tests (6 suites, 160 tests) |
| `public/brand/` | Brand assets, icons, screenshots |
| `docs/` | Press materials, content calendar |

## Core Systems

### LLM Router (`src/lib/llm-router.ts`)
Classifies user messages by task type (coding, emotional, research, etc.) and routes to the optimal model based on user tier (Explorer/Sovereign/Family).

### Memory (`src/lib/memory.ts`)
4-layer memory: short-term (session), semantic (long-term facts), companion state, family context. Stored in PostgreSQL via SOV3.

### Characters (`src/lib/characters.ts`)
140 characters with dimensions (warmth, energy, whimsy, edge, complexity), archetypes, and voice anchors.

### Care Pipeline (`src/app/api/chat/route.ts`)
The main chat route: builds system prompt with memory + voice anchors + gap context + mood, streams response, logs cost, validates care score via SOV3.

### Evolution (`src/lib/evolution.ts`)
6 stages from Luminous Egg (stage 0) to Sovereign (stage 5). Driven by interaction count.

## Commands

```bash
npm run dev        # Dev server (localhost:3000)
npm run build      # Production build
npm test           # Run Jest tests
npx jest --watch   # Watch mode

# Deploy (from ui/ directory, NOT repo root)
vercel --prod      # Deploys to try.meok.ai

# SOV3 health
curl http://localhost:3100/health | jq
```

## Environment Variables

Minimum required for local dev:
- `DATABASE_URL` — Neon PostgreSQL connection string
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` + `CLERK_SECRET_KEY` — Auth
- `ANTHROPIC_API_KEY` — For Claude models in chat

Optional but recommended:
- `OPENAI_API_KEY` — For GPT models
- `SOV3_URL` — Sovereign Temple endpoint (default: http://localhost:3101)
- `MEOK_BACKEND_URL` — Backend API URL
- `STRIPE_SECRET_KEY` — For billing (test mode keys work)

Full list: see `.env.local` comments.

## Database

Schema: `src/lib/db/schema.sql`

Key tables:
- `conversations` — Chat sessions
- `conversation_messages` — Individual messages (GIN indexed for search)
- `message_feedback` — Thumbs up/down ratings
- `user_companions` — User-companion relationships
- `user_memories` — Memory episodes

## Testing

```bash
npm test                                    # All tests
npx jest src/__tests__/evolution.test.ts    # Single suite
npx jest --no-coverage                      # Skip coverage
```

6 test suites: evolution, llm-router, memory, adaptive-dialogue, emotion, characters.

## Deployment

**Production:** `vercel --prod` from `ui/` directory deploys to try.meok.ai.
**Do NOT** use the GitHub auto-deploy "meok" project — it builds from repo root and always fails.

Crons configured in `vercel.json`: update-registry (4am), consolidate (3am), care-signals (6am), streak-reset (midnight), weekly-summary (Mon 10am).

## Brand Tokens

```
DEEP:    #0d0c18   (background)
SURFACE: #13121f   (cards, panels)
GOLD:    #c9a84c   (accent, CTAs)
NAVY:    #1a1a2e   (secondary bg)
CREAM:   #f5f0e8   (text on dark)
```

Font: DM Sans (300-900 weights).
