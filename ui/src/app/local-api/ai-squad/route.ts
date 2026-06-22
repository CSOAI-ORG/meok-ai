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
} from "@/lib/character-prompts";
import { sql } from "@/lib/db";
import {
  type AISquad,
  type SquadMember,
  type SquadMessage,
  insertSquad,
  getSquadsForUser,
  getSquadWithMessages,
  deleteSquad,
  insertMessages,
} from "@/lib/db/ai-squad";

export const runtime = "nodejs";

// Pre-built squad templates (not exported to avoid Next.js route error)
const SQUAD_TEMPLATES: { name: string; purpose: AISquad["purpose"]; members: SquadMember[] }[] = [
  {
    name: "Gaming Elite",
    purpose: "gaming",
    members: [
      { characterId: "pixel", role: "leader", joinedAt: "", contributionScore: 0 },
      { characterId: "commander", role: "specialist", joinedAt: "", contributionScore: 0 },
      { characterId: "sage", role: "analyst", joinedAt: "", contributionScore: 0 },
    ],
  },
  {
    name: "Creative Studio",
    purpose: "creative",
    members: [
      { characterId: "luna", role: "leader", joinedAt: "", contributionScore: 0 },
      { characterId: "iris", role: "specialist", joinedAt: "", contributionScore: 0 },
      { characterId: "nova", role: "analyst", joinedAt: "", contributionScore: 0 },
    ],
  },
  {
    name: "Productivity Powerhouse",
    purpose: "productivity",
    members: [
      { characterId: "athena", role: "leader", joinedAt: "", contributionScore: 0 },
      { characterId: "nexus", role: "specialist", joinedAt: "", contributionScore: 0 },
      { characterId: "sage", role: "analyst", joinedAt: "", contributionScore: 0 },
    ],
  },
];

function generateSquadId(): string {
  return `squad_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function getSquadContext(squad: AISquad): string {
  const memberList = squad.members
    .map((m) => `- ${m.characterId} (${m.role})`)
    .join("\n");
  return `${squad.name} (${squad.purpose}):\n${memberList}`;
}

/**
 * POST — Create, list, get, chat, or delete a squad
 */
export async function POST(req: NextRequest) {
  const userId = await getAuthUserId();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { action, squadId, message, templateIndex } = body;

    switch (action) {
      case "create": {
        if (!sql) {
          return NextResponse.json(
            { error: "Database not available" },
            { status: 503 }
          );
        }

        let squad: AISquad;
        const now = new Date().toISOString();

        if (templateIndex !== undefined && templateIndex >= 0) {
          const template = SQUAD_TEMPLATES[templateIndex];
          squad = {
            ...template,
            id: generateSquadId(),
            createdAt: now,
            createdBy: userId,
            members: template.members.map((m) => ({
              ...m,
              joinedAt: now,
              role: m.role,
            })),
          };
        } else {
          const { name, purpose, members } = body;
          squad = {
            id: generateSquadId(),
            name: name || "My Squad",
            purpose: purpose || "general",
            members: (members || []).map((m: string) => ({
              characterId: m,
              role: "member" as const,
              joinedAt: now,
              contributionScore: 0,
            })),
            createdAt: now,
            createdBy: userId,
          };
        }

        const ok = await insertSquad(userId, squad);
        if (!ok) {
          return NextResponse.json(
            { error: "Failed to create squad" },
            { status: 500 }
          );
        }

        return NextResponse.json({
          squad,
          context: getSquadContext(squad),
        });
      }

      case "list": {
        const purpose = body.purpose as string | undefined;
        const allSquads = await getSquadsForUser(userId, purpose);

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
          return NextResponse.json(
            { error: "Missing squadId" },
            { status: 400 }
          );
        }

        const result = await getSquadWithMessages(userId, squadId);
        if (!result) {
          return NextResponse.json(
            { error: "Squad not found" },
            { status: 404 }
          );
        }

        return NextResponse.json({
          squad: result.squad,
          messages: result.messages.slice(-20),
          context: getSquadContext(result.squad),
        });
      }

      case "chat": {
        if (!squadId || !message) {
          return NextResponse.json(
            { error: "Missing squadId or message" },
            { status: 400 }
          );
        }

        if (!sql) {
          return NextResponse.json(
            { error: "Database not available" },
            { status: 503 }
          );
        }

        const result = await getSquadWithMessages(userId, squadId);
        if (!result) {
          return NextResponse.json(
            { error: "Squad not found" },
            { status: 404 }
          );
        }

        const { squad, messages: allMessages } = result;

        // Build system prompt from squad members
        const systemPrompt = buildSquadSystemPrompt(
          squad.name,
          squad.purpose,
          squad.members.map((m) => ({ characterId: m.characterId, role: m.role }))
        );

        // Get recent messages for context
        const history = allMessages
          .slice(-6)
          .map((m) => {
            if (m.characterId === "user") {
              return `User: ${m.content}`;
            }
            return `${m.characterId}: ${m.content}`;
          })
          .join("\n");

        let gamingContext = "";
        if (
          body.gamingMode &&
          (message.includes("[Analyze") ||
            message.includes("[Suggest") ||
            message.includes("[Give"))
        ) {
          gamingContext =
            "\n\n## Gaming Mode Active\nThis is a gaming-specific request. Provide actionable gaming advice.";
        }

        const fullPrompt = `${systemPrompt}${gamingContext}

## Conversation so far:
${history}

User: ${message}

Respond as ${squad.members[0]?.characterId || "the squad"}:`;

        let responseContent = "";
        let respondingCharacter = "";
        let gameAnalysis = null;

        try {
          const chatRes = await fetch(
            `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/chat`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                message: fullPrompt,
                characterId: squad.members[0]?.characterId || "pixel",
                stream: false,
              }),
            }
          );

          if (chatRes.ok) {
            const chatData = await chatRes.json();
            responseContent = chatData.text || chatData.content || "";
            respondingCharacter = squad.members[0]?.characterId || "pixel";

            if (body.gamingMode) {
              gameAnalysis = responseContent;
            }
          }
        } catch (e) {
          console.log("[AI Squad] Using fallback response");
        }

        if (!responseContent) {
          const responder =
            squad.members[Math.floor(Math.random() * squad.members.length)];
          respondingCharacter = responder.characterId;

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

          const options =
            responses[squad.purpose as keyof typeof responses] || responses.general;
          responseContent = options[Math.floor(Math.random() * options.length)];
        }

        const now = new Date().toISOString();

        const userMsg: SquadMessage = {
          id: `msg_${Date.now()}`,
          squadId,
          characterId: "user",
          content: message,
          timestamp: now,
        };

        const aiMsg: SquadMessage = {
          id: `msg_${Date.now()}_ai`,
          squadId,
          characterId:
            respondingCharacter || squad.members[0]?.characterId || "pixel",
          content: responseContent,
          timestamp: now,
        };

        await insertMessages(squadId, [userMsg, aiMsg]);

        return NextResponse.json({
          squad,
          messages: [aiMsg],
          gameAnalysis,
        });
      }

      case "delete": {
        if (!squadId) {
          return NextResponse.json(
            { error: "Missing squadId" },
            { status: 400 }
          );
        }

        if (!sql) {
          return NextResponse.json(
            { error: "Database not available" },
            { status: 503 }
          );
        }

        const ok = await deleteSquad(userId, squadId);
        if (!ok) {
          return NextResponse.json(
            { error: "Squad not found" },
            { status: 404 }
          );
        }

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
        members: t.members.map((m) => m.characterId),
      })),
    });
  }

  const userId = await getAuthUserId();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (squadId) {
    const result = await getSquadWithMessages(userId, squadId);
    if (result) {
      return NextResponse.json({
        squad: result.squad,
        context: getSquadContext(result.squad),
      });
    }
  }

  const userSquads = await getSquadsForUser(userId);

  return NextResponse.json({
    status: "MEOK AI Squad System",
    purpose: "Multi-AI collaboration teams",
    squads: userSquads.length,
    templates: SQUAD_TEMPLATES.length,
  });
}
