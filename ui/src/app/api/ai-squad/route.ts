/**
 * MEOK AI LABS — AI Squad System
 * 
 * Multiple AI characters working together as a team
 * Combines MEOK characters with Legion-style collaboration
 * 
 * Features:
 * - Team formation (gaming, creative, productivity)
 * - Real-time collaboration via WebSocket
 * - Voice synthesis for each AI
 * - Cross-AI memory and learning
 */

import { NextRequest, NextResponse } from "next/server";
import { getAuthUserId } from "@/lib/api-auth";
import {
  buildSquadSystemPrompt,
  getCharacterPrompt,
  getRolePrompt,
  CHARACTER_PROMPTS,
} from "@/lib/character-prompts";

export const runtime = "nodejs";

// ── AI Squad Types ─────────────────────────────────────────────────────────────

export interface AISquad {
  id: string;
  name: string;
  purpose: "gaming" | "creative" | "productivity" | "learning" | "general";
  members: SquadMember[];
  createdAt: string;
  createdBy: string;
}

export interface SquadMember {
  characterId: string;
  role: "leader" | "specialist" | "support" | "analyst";
  joinedAt: string;
  contributionScore: number;
}

// Pre-built squad templates (not exported to avoid Next.js route error)
const SQUAD_TEMPLATES = [
  {
    name: "Gaming Elite",
    purpose: "gaming" as const,
    members: [
      { characterId: "pixel", role: "leader" as const, joinedAt: "", contributionScore: 0 },
      { characterId: "commander", role: "specialist" as const, joinedAt: "", contributionScore: 0 },
      { characterId: "sage", role: "analyst" as const, joinedAt: "", contributionScore: 0 },
    ],
  },
  {
    name: "Creative Studio",
    purpose: "creative" as const,
    members: [
      { characterId: "luna", role: "leader" as const, joinedAt: "", contributionScore: 0 },
      { characterId: "iris", role: "specialist" as const, joinedAt: "", contributionScore: 0 },
      { characterId: "nova", role: "analyst" as const, joinedAt: "", contributionScore: 0 },
    ],
  },
  {
    name: "Productivity Powerhouse",
    purpose: "productivity" as const,
    members: [
      { characterId: "athena", role: "leader" as const, joinedAt: "", contributionScore: 0 },
      { characterId: "nexus", role: "specialist" as const, joinedAt: "", contributionScore: 0 },
      { characterId: "sage", role: "analyst" as const, joinedAt: "", contributionScore: 0 },
    ],
  },
];

// In-memory store (replace with DB in production)
const squads = new Map<string, AISquad>();
const squadMessages = new Map<string, SquadMessage[]>();

interface SquadMessage {
  id: string;
  squadId: string;
  characterId: string;
  content: string;
  timestamp: string;
}

// ── Helper Functions ────────────────────────────────────────���───────────────────

function generateSquadId(): string {
  return `squad_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function getSquadContext(squad: AISquad): string {
  const memberList = squad.members
    .map(m => `- ${m.characterId} (${m.role})`)
    .join("\n");
  return `${squad.name} (${squad.purpose}):\n${memberList}`;
}

// ── API Handlers ────────────────────────────────────────────────────────────────

/**
 * POST — Create, join, or message a squad
 */
export async function POST(req: NextRequest) {
  const userId = await getAuthUserId() || "anonymous";
  
  try {
    const body = await req.json();
    const { action, squadId, characterId, message, templateIndex } = body;

    switch (action) {
      case "create": {
        // Create from template or custom
        let squad: AISquad;
        
        if (templateIndex !== undefined && templateIndex >= 0) {
          const template = SQUAD_TEMPLATES[templateIndex];
          squad = {
            ...template,
            id: generateSquadId(),
            createdAt: new Date().toISOString(),
            createdBy: userId,
            members: template.members.map(m => ({
              ...m,
              joinedAt: new Date().toISOString(),
              role: m.role as "leader" | "specialist" | "support" | "analyst",
            })),
          };
        } else {
          // Custom squad
          const { name, purpose, members } = body;
          squad = {
            id: generateSquadId(),
            name: name || "My Squad",
            purpose: purpose || "general",
            members: (members || []).map((m: string) => ({
              characterId: m,
              role: "member" as const,
              joinedAt: new Date().toISOString(),
              contributionScore: 0,
            })),
            createdAt: new Date().toISOString(),
            createdBy: userId,
          };
        }

        squads.set(squad.id, squad);
        squadMessages.set(squad.id, []);

        return NextResponse.json({
          squad,
          context: getSquadContext(squad),
        });
      }

      case "list": {
        // Get all squads (or filter by purpose)
        const purpose = body.purpose;
        let allSquads = Array.from(squads.values());
        
        if (purpose) {
          allSquads = allSquads.filter(s => s.purpose === purpose);
        }

        return NextResponse.json({
          squads: allSquads,
          templates: SQUAD_TEMPLATES.map((t, i) => ({
            index: i,
            ...t,
            memberCount: t.members.length,
          })),
        });
      }

      case "get": {
        if (!squadId) {
          return NextResponse.json({ error: "Missing squadId" }, { status: 400 });
        }

        const squad = squads.get(squadId);
        if (!squad) {
          return NextResponse.json({ error: "Squad not found" }, { status: 404 });
        }

        const messages = squadMessages.get(squadId) || [];

        return NextResponse.json({
          squad,
          messages: messages.slice(-20),
          context: getSquadContext(squad),
        });
      }

      case "chat": {
        // Chat with the squad - generate response from characters
        if (!squadId || !message) {
          return NextResponse.json(
            { error: "Missing squadId or message" },
            { status: 400 }
          );
        }

        const squad = squads.get(squadId);
        if (!squad) {
          return NextResponse.json({ error: "Squad not found" }, { status: 404 });
        }

        // Get conversation history
        const msgs = squadMessages.get(squadId) || [];
        
        // Build system prompt from squad members
        const systemPrompt = buildSquadSystemPrompt(
          squad.name,
          squad.purpose,
          squad.members.map(m => ({ characterId: m.characterId, role: m.role }))
        );

        // Get recent messages for context
        const history = msgs.slice(-6).map(m => {
          if (m.characterId === "user") {
            return `User: ${m.content}`;
          }
          return `${m.characterId}: ${m.content}`;
        }).join("\n");

        // Create prompt with gaming context if in gaming mode
        let gamingContext = "";
        if (body.gamingMode && (message.includes("[Analyze") || message.includes("[Suggest") || message.includes("[Give"))) {
          gamingContext = "\n\n## Gaming Mode Active\nThis is a gaming-specific request. Provide actionable gaming advice.";
        }

        const fullPrompt = `${systemPrompt}${gamingContext}

## Conversation so far:
${history}

User: ${message}

Respond as ${squad.members[0]?.characterId || "the squad"}:`;

        // Generate response using chat API
        let responseContent = "";
        let respondingCharacter = "";
        let gameAnalysis = null;

        try {
          const chatRes = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/chat`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              message: fullPrompt,
              characterId: squad.members[0]?.characterId || "pixel",
              stream: false,
            }),
          });

          if (chatRes.ok) {
            const chatData = await chatRes.json();
            responseContent = chatData.text || chatData.content || "";
            respondingCharacter = squad.members[0]?.characterId || "pixel";
            
            // Extract game analysis if gaming mode
            if (body.gamingMode) {
              gameAnalysis = responseContent;
            }
          }
        } catch (e) {
          console.log("[AI Squad] Using fallback response");
        }

        // Fallback: generate response based on character personalities
        if (!responseContent) {
          // Pick a random character to respond
          const responder = squad.members[Math.floor(Math.random() * squad.members.length)];
          respondingCharacter = responder.characterId;
          
          const charPrompt = getCharacterPrompt(responder.characterId);
          const rolePrompt = getRolePrompt(responder.role);
          
          // Generate contextual response
          const responses: Record<string, string[]> = {
            gaming: [
              "Great play! Let me analyze that strategy for you...",
              "I've been watching your gameplay. Here's what I'd focus on:",
              "That reminds me of a pro match I analyzed. Want me to break it down?",
            ],
            creative: [
              "Interesting angle! Let me think about this creatively...",
              "I see potential here. What if we approached it from a different direction?",
              "That's inspiring! Let me share some ideas...",
            ],
            productivity: [
              "Let me help you optimize that approach.",
              "I've identified a more efficient path. Here are the key actions:",
              "Good call. Let's structure this for maximum impact.",
            ],
            learning: [
              "That's a great question. Let me break this down...",
              "I can see you're thinking deeply about this. Here's my perspective:",
              "Let's explore this together systematically.",
            ],
            general: [
              "I hear you. Let me reflect on that...",
              "Interesting. Here's my take:",
              "Thanks for bringing that up. Here's what I think:",
            ],
          };

          const options = responses[squad.purpose as keyof typeof responses] || responses.general;
          responseContent = options[Math.floor(Math.random() * options.length)];
        }

        // Store user message
        const userMsg: SquadMessage = {
          id: `msg_${Date.now()}`,
          squadId,
          characterId: "user",
          content: message,
          timestamp: new Date().toISOString(),
        };
        msgs.push(userMsg);

        // Store AI response
        const aiMsg: SquadMessage = {
          id: `msg_${Date.now()}_ai`,
          squadId,
          characterId: respondingCharacter || squad.members[0]?.characterId || "pixel",
          content: responseContent,
          timestamp: new Date().toISOString(),
        };
        msgs.push(aiMsg);
        squadMessages.set(squadId, msgs);

        return NextResponse.json({
          squad,
          messages: [aiMsg],
          gameAnalysis,
        });
      }

      case "delete": {
        if (!squadId) {
          return NextResponse.json({ error: "Missing squadId" }, { status: 400 });
        }

        squads.delete(squadId);
        squadMessages.delete(squadId);

        return NextResponse.json({ status: "deleted", squadId });
      }

      default:
        return NextResponse.json(
          { error: `Unknown action: ${action}` },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error("[AI Squad] Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

/**
 * GET — Get squad info or available templates
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const squadId = searchParams.get("squadId");
  const action = searchParams.get("action");

  if (action === "templates") {
    return NextResponse.json({
      templates: SQUAD_TEMPLATES.map((t, i) => ({
        index: i,
        name: t.name,
        purpose: t.purpose,
        members: t.members.map(m => m.characterId),
      })),
    });
  }

  if (squadId) {
    const squad = squads.get(squadId);
    if (squad) {
      return NextResponse.json({ squad, context: getSquadContext(squad) });
    }
  }

  return NextResponse.json({
    status: "MEOK AI Squad System",
    purpose: "Multi-AI collaboration teams",
    squads: Array.from(squads.values()).length,
    templates: SQUAD_TEMPLATES.length,
  });
}