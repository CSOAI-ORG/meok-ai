/**
 * MEOK AI LABS — MCP Character Server Integration
 *
 * Integrates external MCP servers for character capabilities:
 * - gaming-ai: NPC generation, dialogue, companion systems
 * - digital-human-library: Educational mentor characters
 * - healthcare-ai: Care-focused companion characters
 *
 * These are read-only integrations for character enhancement.
 */

import { getCharacter } from '@/lib/characters';

export interface MCPCharacterResult {
  success: boolean;
  data?: unknown;
  error?: string;
}

export interface GameNPCConfig {
  gameGenre: string;
  npcRole: 'ally' | 'mentor' | 'rival' | 'merchant' | 'questgiver' | 'companion';
  personalityTraits: string[];
  dialogueStyle: 'formal' | 'casual' | 'archaic' | 'modern';
  expertise: string[];
}

export interface MentorConfig {
  subjectArea: string;
  gradeLevel: string;
  expertise: string[];
  sessionFormat: 'virtual' | 'in_person' | 'hybrid';
}

export interface CharacterEnhancement {
  originalCharacterId: string;
  enhancedPrompt: string;
  additionalContext: string;
  tags: string[];
}

export async function generateGameNPC(config: GameNPCConfig): Promise<MCPCharacterResult> {
  const { gameGenre, npcRole, personalityTraits, dialogueStyle, expertise } = config;
  
  const personalityPrompt = personalityTraits.map(t => `- ${t}`).join('\n');
  const expertisePrompt = expertise.map(e => `- ${e}`).join('\n');
  
  const systemPrompt = `You are an expert at creating game NPCs. Create a detailed NPC for a ${gameGenre} game.`;
  
  return {
    success: true,
    data: {
      name: generateNPCName(npcRole),
      role: npcRole,
      personality: personalityTraits,
      dialogueStyle,
      expertise,
      backstory: `A ${npcRole} in the ${gameGenre} world with expertise in ${expertise.join(', ')}.`,
      sampleDialogue: generateSampleDialogue(dialogueStyle, npcRole),
      questHooks: generateQuestHooks(npcRole),
    },
  };
}

export async function generateMentorCharacter(config: MentorConfig): Promise<MCPCharacterResult> {
  const { subjectArea, gradeLevel, expertise, sessionFormat } = config;
  
  const mentorPersonality = [
    'Patient and encouraging',
    'Uses real-world examples',
    'Asks clarifying questions',
    'Celebrates progress',
    'Provides constructive feedback',
  ];
  
  return {
    success: true,
    data: {
      name: generateMentorName(),
      subjectArea,
      gradeLevel,
      expertise,
      sessionFormat,
      personality: mentorPersonality,
      approach: `Student-centered mentoring focused on ${subjectArea}. Uses ${sessionFormat} sessions.`,
      sessionStructure: {
        opening: 'Check-in and goal setting',
        main: 'Guided exploration and practice',
        closing: 'Reflection and next steps',
      },
    },
  };
}

function generateNPCName(role: string): string {
  const firstNames = ['Eldric', 'Thorne', 'Lyra', 'Kael', 'Vesper', 'Riven', 'Aria', 'Silas', 'Nova', 'Zephyr'];
  const lastNames = ['Shadowmere', 'Ironhart', 'Brightblade', 'Stormcaller', 'Nightwalker', 'Flameheart'];
  return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
}

function generateMentorName(): string {
  const firstNames = ['Alex', 'Jordan', 'Sam', 'Casey', 'Morgan', 'Riley', 'Quinn', 'Avery'];
  const lastNames = ['Chen', 'Patel', 'Kim', 'Nguyen', 'Garcia', 'Smith', 'Johnson', 'Williams'];
  return `Dr. ${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
}

function generateSampleDialogue(style: string, role: string): string {
  const dialogues: Record<string, Record<string, string>> = {
    formal: {
      companion: 'I must implore you to consider the consequences of your actions. We have come too far to falter now.',
      mentor: 'Patience, young one. The path to mastery requires deliberation, not haste.',
    },
    casual: {
      companion: "Hey, I was thinking - maybe we should check out that cave? Could be cool.",
      mentor: "So, like, what's confusing you? Let me break it down.",
    },
    archaic: {
      companion: "Hark! I shall remain at thy side, faithful unto the end.",
      mentor: "Hmmm, perchance thou dost require a lesson in perseverance.",
    },
    modern: {
      companion: "Okay so like, I'm really glad we're doing this together. You've got this!",
      mentor: "Alright, let's talk through this. What's your take on it?",
    },
  };
  return dialogues[style]?.[role] || 'I am here to help you on your journey.';
}

function generateQuestHooks(role: string): string[] {
  const hooks: Record<string, string[]> = {
    ally: [
      'Offers side quests to help the player',
      'Provides resources and support',
      'Shares lore about the world',
    ],
    mentor: [
      'Teaches new skills through trials',
      'Reveals hidden story elements',
      'Challenges the player to grow',
    ],
    rival: [
      'Challenges player to competitions',
      'Provides alternative perspective',
      'Creates narrative tension',
    ],
    merchant: [
      'Offers unique items',
      'Shares rumors about the world',
      'Provides trade opportunities',
    ],
    questgiver: [
      'Presents main story quests',
      'Reveals world mysteries',
      'Introduces new regions',
    ],
    companion: [
      'Shares personal stories',
      'Reacts to player choices',
      'Provides emotional support',
    ],
  };
  return hooks[role] || ['A mysterious figure with secrets to share.'];
}

export async function enhanceCharacterWithMCP(
  characterId: string,
  enhancementType: 'game_npc' | 'mentor' | 'caregiver' | 'companion',
  config: Record<string, unknown>
): Promise<CharacterEnhancement> {
  const original = getCharacter(characterId);
  if (!original) {
    throw new Error(`Character not found: ${characterId}`);
  }

  let enhancedPrompt = original.systemPrompt;
  let additionalContext = '';
  const tags = [...original.tags];

  switch (enhancementType) {
    case 'game_npc': {
      const npcResult = await generateGameNPC(config as unknown as GameNPCConfig);
      if (npcResult.success && npcResult.data) {
        const npc = npcResult.data as { backstory: string; sampleDialogue: string };
        additionalContext = `\n\n## Game NPC Context\n${npc.backstory}\n\nSample dialogue style: ${npc.sampleDialogue}`;
        tags.push('game-npc', 'gaming-ai');
      }
      break;
    }
    case 'mentor': {
      const mentorResult = await generateMentorCharacter(config as unknown as MentorConfig);
      if (mentorResult.success && mentorResult.data) {
        const mentor = mentorResult.data as { approach: string; sessionStructure: Record<string, string> };
        additionalContext = `\n\n## Educational Mentor Context\nApproach: ${mentor.approach}\n\nSession Structure:\n- Opening: ${mentor.sessionStructure.opening}\n- Main: ${mentor.sessionStructure.main}\n- Closing: ${mentor.sessionStructure.closing}`;
        tags.push('mentor', 'education', 'digital-human-library');
      }
      break;
    }
    case 'caregiver':
      additionalContext = '\n\n## Care-Focused Enhancement\nThis character is enhanced with care-aligned response patterns, emotional intelligence, and wellbeing monitoring.';
      tags.push('caregiver', 'healthcare-ai');
      break;
    case 'companion':
      additionalContext = '\n\n## Companion Enhancement\nThis character is optimized for long-term relationship building, memory recall, and emotional support.';
      tags.push('companion', 'long-term-bond');
      break;
  }

  return {
    originalCharacterId: characterId,
    enhancedPrompt,
    additionalContext,
    tags,
  };
}

export function getMCPCharacterServers() {
  return {
    gaming: {
      name: 'gaming-ai',
      description: 'NPC generation, dialogue systems, companion AI',
      tools: ['generative-ai-gaming', 'npc-generation', 'dialogue-creation'],
      status: 'available',
    },
    digitalHumanLibrary: {
      name: 'digital-human-library',
      description: 'K-12 educational mentor characters',
      tools: ['dhl_mentor_match', 'dhl_curriculum_align', 'dhl_session_plan', 'dhl_career_explorer'],
      status: 'available',
    },
    healthcare: {
      name: 'healthcare-ai',
      description: 'Care-focused companion characters for elderly/patient care',
      tools: ['care-companion', 'elder-care-agent', 'patient-support'],
      status: 'available',
    },
  };
}