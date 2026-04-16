# MEOK Discord Guardian Bot

A lightweight Discord bot that monitors server messages and flags threats using MEOK's Guardian scanner API.

## Features

- **Real-time message scanning** via MEOK `/api/guardian/scan-message`
- **Automatic alerts** sent to `#guardian-alerts` for high/critical severity threats (channel created if missing)
- **Immediate moderator DMs** for critical self-harm detections
- **Slash commands**:
  - `/guardian status` — Show server scanning stats
  - `/guardian invite` — Show setup and invite info
- **Self-ignoring** — the bot will never scan its own messages
- **In-memory stats** — tracked per guild since last restart

## Prerequisites

- Node.js 18+
- A Discord bot token ([Discord Developer Portal](https://discord.com/developers/applications))
- Running MEOK instance with the Guardian scanner at `/api/guardian/scan-message`

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment**
   ```bash
   cp .env.example .env
   # Edit .env and fill in your values
   ```

3. **Run the bot**
   ```bash
   node index.js
   ```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DISCORD_BOT_TOKEN` | Your Discord bot token | — |
| `MEOK_BASE_URL` | Base URL of the MEOK instance | `http://localhost:3000` |
| `MEOK_API_KEY` | Optional API key for MEOK | — |

## Required Discord Bot Permissions

- Read Messages / View Channels
- Send Messages
- Embed Links
- Manage Channels (to create `#guardian-alerts`)
- Read Message History

## Architecture

The bot runs as a separate Node.js process and communicates with MEOK over HTTP. It does not require any database for the MVP — all stats are kept in memory.

## License

MIT
