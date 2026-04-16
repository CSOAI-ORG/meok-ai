/**
 * MEOK AI LABS — Screen Vision API
 * 
 * Foundation for VLM-based screen analysis
 * Currently stub - requires VLM model setup to become functional
 * 
 * Usage:
 * POST /api/screen-vision/analyze - Send screenshot for analysis
 * GET  /api/screen-vision/status  - Check VLM availability
 */

import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// VLM Configuration
const VLM_CONFIG = {
  provider: process.env.VLM_PROVIDER || "ollama", // ollama, openai, anthropic
  model: process.env.VLM_MODEL || "llama4:vision",
  endpoint: process.env.VLM_ENDPOINT || "http://localhost:11434",
};

interface ScreenAnalysis {
  game?: string;
  scene?: string;
  players?: number;
  health?: number;
  ammo?: number;
  objective?: string;
  tips: string[];
  timestamp: string;
}

// Known game UI elements for detection
const GAME_SIGNATURES: Record<string, Record<string, any>> = {
  valorant: {
    keywords: ["agent", "ultimate", " spike", "defuse"],
    hud: ["health", "armor", "ammo", "ult"],
    tips: ["Check minimap before peeking", "Save utility for post-plant", "Track enemy economy"],
  },
  cs2: {
    keywords: ["terrorist", "counter-terrorist", "plant", "defuse"],
    hud: ["health", "armor", "ammo", "grenade"],
    tips: ["Check corners systematically", "Use utility to deny space", "Communicate with teammates"],
  },
  "league-of-legends": {
    keywords: ["minion", "champion", "turret", "nexus"],
    hud: ["health", "mana", "gold", "cs"],
    tips: ["Track the minimap", "CS while poke is key", "Reset when ahead"],
  },
  minecraft: {
    keywords: ["health", "hunger", "experience", "air"],
    hud: ["hotbar", "inventory"],
    tips: ["Check your health bar", "Watch your hunger bar", "Don't forget tools"],
  },
  "apex-legends": {
    keywords: ["shield", "health", "knockdown", "ring"],
    hud: ["shield", "health", "ammo"],
    tips: ["Rotate early to zone", "Use legends abilities", "Know your legend role"],
  },
  "fortnite": {
    keywords: ["health", "shield", "materials", "storm"],
    hud: ["shield", "health", "mats"],
    tips: ["Build before shooting", "Stay in storm", "Box fight for high ground"],
  },
  "elden-ring": {
    keywords: ["vigor", "stamina", "runes"],
    hud: ["hp", "fp", "stamina"],
    tips: ["Learn boss patterns", "Use summons for help", "Explore for items"],
  },
  "rocket-league": {
    keywords: ["boost", "demo", "aerial", "rotation"],
    hud: ["boost", "score", "team"],
    tips: ["Rotate properly", "Keep boost", "Challenge with purpose"],
  },
  "genshin-impact": {
    keywords: ["health", "stamina", "resonance"],
    hud: ["hp", "energy", "world"],
    tips: ["Level up your characters", "Farm domains", "Complete world quests"],
  },
  "baldurs-gate-3": {
    keywords: ["spell", "cantrip", "action", "bonus"],
    hud: ["hp", "spell", "initiative"],
    tips: ["Use environment", "Check initiative", "Long rest when needed"],
  },
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, imageBase64 } = body;

    switch (action) {
      case "analyze": {
        // For now, simulate analysis based on game detection
        // In production, this would send to actual VLM
        const game = body.game || "unknown";
        const signature = GAME_SIGNATURES[game];

        if (!signature) {
          return NextResponse.json({
            status: "unknown_game",
            tips: ["Start playing a supported game to get analysis"],
          });
        }

        // Generate contextual tips
        const tips = generateContextualTips(game);

        const analysis: ScreenAnalysis = {
          game,
          scene: "gameplay",
          tips,
          timestamp: new Date().toISOString(),
        };

        return NextResponse.json({
          status: "analyzed",
          analysis,
          gameDetected: game,
        });
      }

      case "detect-game": {
        // Simple keyword-based game detection
        // In production, this would use actual screen OCR
        const text = body.screenText?.toLowerCase() || "";
        const detected = detectGameFromText(text);

        return NextResponse.json({
          detected,
          confidence: detected ? 0.85 : 0,
        });
      }

      default:
        return NextResponse.json({ error: "Unknown action" }, { status: 400 });
    }
  } catch (error) {
    console.error("[Screen Vision] Error:", error);
    return NextResponse.json({ error: "Analysis failed" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get("action");

  if (action === "status") {
    // Check if VLM is available
    const vlmAvailable = await checkVLMConnection();

    return NextResponse.json({
      provider: VLM_CONFIG.provider,
      model: VLM_CONFIG.model,
      available: vlmAvailable,
      supportedGames: Object.keys(GAME_SIGNATURES),
    });
  }

  if (action === "games") {
    return NextResponse.json({
      games: Object.keys(GAME_SIGNATURES).map(g => ({
        name: g,
        hasStrategy: true,
      })),
    });
  }

  return NextResponse.json({
    status: "Screen Vision API",
    version: "1.0",
    requires: ["VLM_PROVIDER", "VLM_MODEL"],
  });
}

// Helper functions

function detectGameFromText(text: string): string | null {
  for (const [game, sig] of Object.entries(GAME_SIGNATURES)) {
    for (const keyword of sig.keywords) {
      if (text.includes(keyword)) {
        return game;
      }
    }
  }
  return null;
}

function generateContextualTips(game: string): string[] {
  const tipsByGame: Record<string, string[]> = {
    valorant: [
      "Check your minimap before peeking",
      "Save utility for post-plant",
      "Track enemy economy",
    ],
    cs2: [
      "Check corners systematically",
      "Use utility to deny space",
      "Communicate with teammates",
    ],
    "league-of-legends": [
      "Track the minimap",
      "CS while poke is key",
      "Reset when ahead",
    ],
    minecraft: [
      "Check your health bar",
      "Watch your hunger bar",
      "Don't forget tools",
    ],
  };

  return tipsByGame[game] || ["Keep playing to get more analysis"];
}

async function checkVLMConnection(): Promise<boolean> {
  // Simple check - in production would ping actual VLM
  return false; // Placeholder - needs actual VLM setup
}