# MEOK OS Unified Architecture

## Product Line

| Product | Purpose | Core Features |
|---------|---------|---------------|
| **MEOK OS** | Core AI Operating System | Neural networks, memory, consciousness, MCP tools |
| **Sovereign AI** | Personal AI Companion | Care-centered, emotional intelligence, autonomous |
| **Family OS** | Family Dashboard | Family members, chores, calendars, AI-generated insights |
| **Guardian** | Security & Protection | WiFi security, gaming protection, child safety |

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                      MEOK OS UNIFIED                           │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐            │
│  │  MEOK OS    │  │  Sovereign  │  │  Family OS  │            │
│  │  (Core)     │  │     AI      │  │  (Dashboard)│            │
│  │             │  │             │  │             │            │
│  │ • Neural    │  │ • Care-First│  │ • Members   │            │
│  │ • Memory    │  │ • Emotional │  │ • Calendar  │            │
│  │ • MCP Tools │  │ • Memory    │  │ • Chores    │            │
│  │ • Multi-    │  │ • Autonomy  │  │ • AI Insights│            │
│  │   Agent     │  │ • Growth    │  │ • Dashboard │            │
│  └─────────────┘  └─────────────┘  └─────────────┘            │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                    GUARDIAN MODULE                      │    │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │    │
│  │  │ WiFi Security│  │ Gaming Protec │  │ Child Safety │  │    │
│  │  │              │  │              │  │              │  │    │
│  │  │ • Pi-hole    │  │ • BrainRot   │  │ • Content    │  │    │
│  │  │ • Network    │  │   Guard      │  │   Filter     │  │    │
│  │  │   Scan       │  │ • OpenApp    │  │ • Screen     │  │    │
│  │  │ • Device     │  │   Filter     │  │   Time       │  │    │
│  │  │   Track      │  │ • Chat       │  │ • Schedule   │  │    │
│  │  │ • Threat     │  │   Moderation │  │ • Alerts     │  │    │
│  │  │   Detect     │  │ • Game Time  │  │ • Reports    │  │    │
│  │  └──────────────┘  └──────────────┘  └──────────────┘  │    │
│  └─────────────────────────────────────────────────────────┘    │
├─────────────────────────────────────────────────────────────────┤
│                    SHARED INFRASTRUCTURE                       │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐            │
│  │   PostgreSQL │  │   Weaviate   │  │    Redis     │            │
│  │   (Memory)   │  │   (Vector)   │  │   (Cache)    │            │
│  └─────────────┘  └─────────────┘  └─────────────┘            │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │              MCP SERVER (Port 3101)                     │    │
│  │  • 30+ tools available                                  │    │
│  │  • Neural inference, Memory, Security, Guardian        │    │
│  └─────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
```

---

## MCP Tools by Module

### Core MEOK OS
- `validate_care` - Care-centered validation
- `predict_relationship_evolution` - Relationship tracking
- `analyze_care_patterns` - Burnout/sustainability
- `detect_threats` - Security threats

### Guardian - WiFi
- `scan_network_devices` - Network discovery
- `check_wifi_security` - Security audit
- `block_device` - Device isolation
- `get_network_stats` - Bandwidth监控

### Guardian - Gaming
- `check_game_content` - Content filtering
- `get_gaming_time` - Time tracking
- `block_game` - Game blocking
- `moderate_chat` - Chat moderation

### Family OS
- `add_family_member` - Member management
- `get_dashboard_data` - AI-generated insights
- `manage_schedule` - Scheduling
- `get_activity_report` - Reports

---

## File Structure

```
meok/
├── meok/                    # MEOK OS Core
│   ├── api/
│   ├── neural/
│   └── core/
├── sovereign-temple/        # Sovereign AI + MCP Server
│   ├── sovereign-mcp-server.py
│   ├── guardian/           # NEW: Guardian modules
│   │   ├── wifi_security.py
│   │   ├── gaming_protection.py
│   │   └── child_safety.py
│   └── family_os/          # NEW: Family OS
│       ├── dashboard.py
│       ├── members.py
│       └── schedules.py
├── ui/                      # Frontend
│   └── src/
│       ├── app/
│       │   ├── dashboard/
│       │   ├── guardian/
│       │   └── family/
│       └── lib/
└── docs/
    └── ARCHITECTURE.md
```

---

## Dependencies

### Existing (Working)
- FastAPI, Pydantic, asyncpg, scikit-learn
- PostgreSQL (localhost:5432)
- MCP Server (localhost:3101)

### New Required
- Pi-hole integration (DNS-level filtering)
- Nmap (network scanning)
- OpenCV (optional: camera monitoring)
- Telegram Bot API (notifications)
- yt-dlp (YouTube content)