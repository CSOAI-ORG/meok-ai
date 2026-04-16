/**
 * MEOK AI LABS — AI Squad Inner Tools
 * 
 * Built-in tools for the AI Squad system:
 * - Game data lookup
 * - Strategy database
 * - Session tracking
 * - Performance analysis
 * - Build suggestions
 */

import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// ── Game Strategy Database ──────────────────────────────────────────────────

interface GameStrategy {
  game: string;
  category: string;
  title: string;
  tips: string[];
  role?: "leader" | "specialist" | "analyst";
}

const GAME_STRATEGIES: Record<string, GameStrategy[]> = {
  valorant: [
    {
      game: "valorant",
      category: "aim",
      title: "Crosshair Placement",
      tips: [
        "Pre-aim corners at head height",
        "Use small crosshair for precision",
        "Check angles before peeking",
        "Practice counter-strafing",
      ],
      role: "specialist",
    },
    {
      game: "valorant",
      category: "utility",
      title: "Ability Usage",
      tips: [
        "Use abilities to create space, not just for damage",
        "Smoke flanks before entering site",
        "Communicate ability cooldowns",
        "Save util for post-plant",
      ],
      role: "specialist",
    },
    {
      game: "valorant",
      category: "economy",
      title: "Economy Management",
      tips: [
        "Full save after loss bonus",
        "Force when you have advantage",
        "Track opponent economy",
        "Know when to half-buy",
      ],
      role: "leader",
    },
  ],
  "elden-ring": [
    {
      game: "elden-ring",
      category: "builds",
      title: "Quality Build",
      tips: [
        "40 Str / 40 Dex / 40 Arc for flexibility",
        "Use heavy infuse on strength weapons",
        "Rot Breath for easy bosses",
        "Poise break with heavy weapons",
      ],
      role: "specialist",
    },
    {
      game: "elden-ring",
      category: "combats",
      title: "Boss Patterns",
      tips: [
        "Learn 3-4 attacks then punish",
        "Roll INTO attacks, not away",
        "Use summons for learning phases",
        "Reset often to learn patterns",
      ],
      role: "analyst",
    },
  ],
  "league-of-legends": [
    {
      game: "league-of-legends",
      category: "lane",
      title: "Lane Control",
      tips: [
        "Freeze near tower for recall",
        "Slow push for plates",
        "Crash and recall timing",
        "Track enemy jungle",
      ],
      role: "leader",
    },
    {
      game: "league-of-legends",
      category: "teamfight",
      title: "Teamfight Positioning",
      tips: [
        "Frontline: engage and absorb",
        "Backline: position for DPS",
        "Support: peel carries",
        "Split: draw attention",
      ],
      role: "analyst",
    },
  ],
  "cs2": [
    {
      game: "cs2",
      category: "aim",
      title: " Spray Control",
      tips: [
        "掌握每把武器的弹道",
        "10-15发点射",
        "蹲射增加准确度",
        "预瞄头部高度",
      ],
      role: "specialist",
    },
    {
      game: "cs2",
      category: "utility",
      title: "投掷物系统",
      tips: [
        "烟雾隔离点位",
        "闪光提前量",
        "燃烧瓶封锁区域",
        "闪白回头反打",
      ],
      role: "specialist",
    },
  ],
};

// ── Game Data Lookup ───────────────────────────────────────────────────────

interface GameMeta {
  game: string;
  name: string;
  genres: string[];
  platforms: string[];
  hasStrategy: boolean;
}

const GAME_DATABASE: GameMeta[] = [
  // FPS / Tactical
  { game: "valorant", name: "Valorant", genres: ["FPS", "Tactical"], platforms: ["PC", "Console"], hasStrategy: true },
  { game: "cs2", name: "Counter-Strike 2", genres: ["FPS"], platforms: ["PC"], hasStrategy: true },
  { game: "apex", name: "Apex Legends", genres: ["FPS", "BR"], platforms: ["PC", "Console"], hasStrategy: false },
  { game: "overwatch", name: "Overwatch 2", genres: ["FPS", "Hero"], platforms: ["PC", "Console"], hasStrategy: false },
  { game: "cod", name: "Call of Duty", genres: ["FPS", "Action"], platforms: ["PC", "Console"], hasStrategy: false },
  { game: "rainbow6", name: "Rainbow Six Siege", genres: ["FPS", "Tactical"], platforms: ["PC", "Console"], hasStrategy: false },
  { game: "pubg", name: "PUBG", genres: ["FPS", "BR"], platforms: ["PC", "Console"], hasStrategy: false },
  { game: "fortnite", name: "Fortnite", genres: ["FPS", "BR"], platforms: ["PC", "Console", "Mobile"], hasStrategy: false },
  // MOBA
  { game: "league-of-legends", name: "League of Legends", genres: ["MOBA"], platforms: ["PC"], hasStrategy: true },
  { game: "dota2", name: "Dota 2", genres: ["MOBA"], platforms: ["PC"], hasStrategy: false },
  // RPG / Action
  { game: "elden-ring", name: "Elden Ring", genres: ["ARPG", "Souls-like"], platforms: ["PC", "Console"], hasStrategy: true },
  { game: "bg3", name: "Baldur's Gate 3", genres: ["RPG", "CRPG"], platforms: ["PC", "Console"], hasStrategy: false },
  { game: "genshin", name: "Genshin Impact", genres: ["RPG", "Gacha"], platforms: ["PC", "Mobile"], hasStrategy: false },
  { game: "ff14", name: "Final Fantasy XIV", genres: ["MMORPG"], platforms: ["PC", "Console"], hasStrategy: false },
  // Sandbox / Survival
  { game: "minecraft", name: "Minecraft", genres: ["Sandbox", "Survival"], platforms: ["PC", "Console", "Mobile"], hasStrategy: false },
  { game: "palworld", name: "Palworld", genres: ["Survival", "Creature"], platforms: ["PC", "Console"], hasStrategy: false },
  { game: "terraria", name: "Terraria", genres: ["Sandbox", "Action"], platforms: ["PC", "Console"], hasStrategy: false },
  // Strategy
  { game: "civilization", name: "Civilization VI", genres: ["Strategy", "4X"], platforms: ["PC"], hasStrategy: false },
  { game: "starcraft", name: "StarCraft II", genres: ["Strategy", "RTS"], platforms: ["PC"], hasStrategy: false },
  { game: "age-empires", name: "Age of Empires IV", genres: ["Strategy", "RTS"], platforms: ["PC"], hasStrategy: false },
  // Fighting
  { game: "mortal-kombat", name: "Mortal Kombat 1", genres: ["Fighter"], platforms: ["PC", "Console"], hasStrategy: false },
  { game: "street-fighter", name: "Street Fighter 6", genres: ["Fighter"], platforms: ["PC", "Console"], hasStrategy: false },
  { game: "guilty-gear", name: "Guilty Gear Strive", genres: ["Fighter"], platforms: ["PC", "Console"], hasStrategy: false },
  // Sports / Racing
  { game: "fifa", name: "EA FC 25", genres: ["Sports"], platforms: ["PC", "Console"], hasStrategy: false },
  { game: "nba2k", name: "NBA 2K25", genres: ["Sports"], platforms: ["PC", "Console"], hasStrategy: false },
  { game: "rocket-league", name: "Rocket League", genres: ["Sports", "Vehicle"], platforms: ["PC", "Console"], hasStrategy: false },
];

// ── Session Tracking (in-memory) ────────────────────────────────────────────────

interface GamingSession {
  id: string;
  game: string;
  startTime: string;
  endTime?: string;
  duration: number;
  notes: string;
  rating: number;
}

const sessions = new Map<string, GamingSession>();

// ── Achievements ────────────────────────────────────────────────────────

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: string;
}

const ACHIEVEMENTS: Achievement[] = [
  { id: "first-session", name: "First Steps", description: "Log your first gaming session", icon: "🎮" },
  { id: "ten-hours", name: "Dedicated", description: "Play for 10 hours total", icon: "⏰" },
  { id: "five-games", name: "Variety", description: "Play 5 different games", icon: "🎲" },
  { id: "perfect-build", name: "Build Master", description: "Get a perfect build recommendation", icon: "🛠️" },
  { id: "analyzed", name: "Data Driven", description: "Get a performance analysis", icon: "📊" },
  { id: "early-bird", name: "Early Bird", description: "Play before 8am", icon: "🌅" },
  { id: "night-owl", name: "Night Owl", description: "Play after midnight", icon: "🦉" },
];

// ── API Handlers ─────────────────────────────────────────────────────────

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get("action");
  const game = searchParams.get("game");
  const category = searchParams.get("category");

  switch (action) {
    case "strategies": {
      if (game && GAME_STRATEGIES[game]) {
        const strategies = GAME_STRATEGIES[game];
        if (category) {
          return NextResponse.json(strategies.filter(s => s.category === category));
        }
        return NextResponse.json(strategies);
      }
      // Return all
      return NextResponse.json(GAME_STRATEGIES);
    }

    case "games": {
      return NextResponse.json({
        games: GAME_DATABASE,
        count: GAME_DATABASE.length,
      });
    }

    case "achievements": {
      return NextResponse.json({
        achievements: ACHIEVEMENTS,
        unlocked: ACHIEVEMENTS.filter(a => a.unlockedAt).length,
        total: ACHIEVEMENTS.length,
      });
    }

    case "sessions": {
      const userSessions = Array.from(sessions.values()).slice(-20);
      return NextResponse.json({
        sessions: userSessions,
        total: sessions.size,
        totalHours: Array.from(sessions.values()).reduce((sum, s) => sum + s.duration / 60, 0).toFixed(1),
      });
    }

    default:
      return NextResponse.json({
        status: "AI Squad Inner Tools",
        actions: ["strategies", "games", "achievements", "sessions"],
      });
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { action, game, category, duration, notes, rating } = body;

  switch (action) {
    case "start-session": {
      const id = `session_${Date.now()}`;
      const session: GamingSession = {
        id,
        game: game || "unknown",
        startTime: new Date().toISOString(),
        duration: 0,
        notes: notes || "",
        rating: rating || 3,
      };
      sessions.set(id, session);
      return NextResponse.json({ session, message: "Session started" });
    }

    case "end-session": {
      const activeSessions = Array.from(sessions.values()).filter(s => !s.endTime);
      if (activeSessions.length === 0) {
        return NextResponse.json({ error: "No active session" }, { status: 400 });
      }
      const session = activeSessions[0];
      session.endTime = new Date().toISOString();
      session.duration = duration || Math.floor(Math.random() * 120);
      session.notes = notes || "";
      session.rating = rating || 3;
      sessions.set(session.id, session);
      return NextResponse.json({ session, message: "Session saved" });
    }

    case "lookup-game": {
      if (!game) {
        return NextResponse.json({ error: "Missing game name" }, { status: 400 });
      }
      const found = GAME_DATABASE.find(g => 
        g.game.toLowerCase() === game.toLowerCase() || 
        g.name.toLowerCase().includes(game.toLowerCase())
      );
      if (!found) {
        return NextResponse.json({ error: "Game not found" }, { status: 404 });
      }
      const strategies = GAME_STRATEGIES[found.game] || [];
      return NextResponse.json({ game: found, strategies });
    }

    case "unlock-achievement": {
      const achievement = ACHIEVEMENTS.find(a => a.id === body.achievementId);
      if (achievement) {
        achievement.unlockedAt = new Date().toISOString();
        return NextResponse.json({ achievement, message: "Achievement unlocked!" });
      }
      return NextResponse.json({ error: "Achievement not found" }, { status: 404 });
    }

    default:
      return NextResponse.json({ error: `Unknown action: ${action}` }, { status: 400 });
  }
}