/**
 * A2A Agent Card endpoint for MEOK characters.
 *
 * Returns a Google A2A-style Agent Card JSON for any character in the canonical database.
 * Discovery URL pattern: /api/characters/{slug}/agent-card
 *
 * Spec reference: https://github.com/google/A2A
 */

import { NextResponse } from "next/server";
import { getCharacter, ARCHETYPES, type Character } from "@/lib/characters";

export const runtime = "nodejs";

interface AgentCardSkill {
  id: string;
  name: string;
  description: string;
  tags: string[];
  examples?: string[];
}

interface AgentCard {
  name: string;
  description: string;
  url: string;
  provider: {
    name: string;
    url: string;
  };
  version: string;
  documentationUrl?: string;
  capabilities: {
    streaming: boolean;
    pushNotifications: boolean;
    stateTransitionHistory: boolean;
  };
  authentication: {
    schemes: string[];
  };
  defaultInputModes: string[];
  defaultOutputModes: string[];
  skills: AgentCardSkill[];
}

function buildAgentCard(character: Character): AgentCard {
  const archetype = ARCHETYPES[character.archetype];
  const tagline = character.tagline ? `${character.tagline}. ` : "";
  const promptPreview = character.systemPrompt.slice(0, 280);

  const skills: AgentCardSkill[] = [
    {
      id: `${character.id}-conversation`,
      name: `${character.name} conversation`,
      description: `Chat with ${character.name}, ${character.title?.toLowerCase() ?? "companion"}.`,
      tags: ["conversation", character.archetype, ...character.tags.slice(0, 3)],
      examples: [
        `Hi ${character.name}, what's on your mind?`,
        `Help me think through a decision.`,
      ],
    },
    {
      id: `${character.id}-persona`,
      name: `${character.name} persona export`,
      description: "Export this character as a portable Character Card v2.",
      tags: ["export", "character-card-v2", "persona"],
      examples: [`GET /api/characters/export?id=${character.id}&format=json`],
    },
  ];

  if (character.dimensions) {
    skills.push({
      id: `${character.id}-personality-radar`,
      name: "Personality radar",
      description: "Return Big-Five-style personality dimensions for this agent.",
      tags: ["personality", "dimensions", "metadata"],
    });
  }

  return {
    name: character.name,
    description: `${tagline}${character.title}. ${promptPreview}${promptPreview.length < character.systemPrompt.length ? "…" : ""}`,
    url: `https://meok.ai/characters/${character.id}`,
    provider: {
      name: "MEOK AI LABS",
      url: "https://meok.ai",
    },
    version: "1.0.0",
    documentationUrl: `https://meok.ai/characters/${character.id}`,
    capabilities: {
      streaming: true,
      pushNotifications: false,
      stateTransitionHistory: false,
    },
    authentication: {
      schemes: ["none"],
    },
    defaultInputModes: ["text"],
    defaultOutputModes: ["text"],
    skills,
  };
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const character = getCharacter(slug);

  if (!character) {
    return NextResponse.json({ error: "Character not found" }, { status: 404 });
  }

  return NextResponse.json(buildAgentCard(character), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
    },
  });
}
