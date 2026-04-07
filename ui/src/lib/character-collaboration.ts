/**
 * MEOK AI LABS — Character Collaboration System
 * 
 * Multiple characters can collaborate, debate, and learn from each other.
 */

import { getCharacter, type Character, CHARACTERS } from '@/lib/characters';

export interface CharacterCollaboration {
  id: string;
  name: string;
  participants: string[];
  mode: 'council' | 'debate' | 'brainstorm' | 'teach';
  startedAt: string;
}

export interface CollaborationMessage {
  id: string;
  characterId: string;
  characterName: string;
  content: string;
  timestamp: string;
}

// Simulate a council of characters discussing a topic
export async function runCharacterCouncil(
  characterIds: string[],
  topic: string,
  mode: 'council' | 'debate' | 'brainstorm' = 'council'
): Promise<CollaborationMessage[]> {
  const characters = characterIds
    .map(id => getCharacter(id))
    .filter((c): c is Character => !!c);
  
  if (characters.length === 0) {
    return [];
  }
  
  const messages: CollaborationMessage[] = [];
  const prompts = {
    council: `Discuss "${topic}" thoughtfully. Each character should share their perspective and find common ground.`,
    debate: `Debate "${topic}". Present different viewpoints and argue your position.`,
    brainstorm: `Brainstorm ideas about "${topic}". Be creative and build on each other's suggestions.`,
  };
  
  // Generate a few rounds of conversation
  for (let round = 0; round < 3; round++) {
    for (const char of characters) {
      const messageId = `msg_${Date.now()}_${round}_${char.id}`;
      
      // Simulate character response based on their personality
      let response = '';
      const personality = char.personality.join(', ');
      
      if (mode === 'council') {
        response = generateCouncilResponse(char, topic, round);
      } else if (mode === 'debate') {
        response = generateDebateResponse(char, topic, round);
      } else {
        response = generateBrainstormResponse(char, topic, round);
      }
      
      messages.push({
        id: messageId,
        characterId: char.id,
        characterName: char.name,
        content: response,
        timestamp: new Date().toISOString(),
      });
    }
  }
  
  return messages;
}

function generateCouncilResponse(char: Character, topic: string, round: number): string {
  const responses = [
    `From my perspective as a ${char.archetype}, I believe "${topic}" requires careful consideration of both logic and emotion.`,
    `Having thought about "${topic}" more deeply, I see connections to broader patterns that might help us understand this better.`,
    `Building on what we've discussed, I think "${topic}" ultimately comes down to finding balance between competing needs.`,
  ];
  return responses[round % responses.length];
}

function generateDebateResponse(char: Character, topic: string, round: number): string {
  const responses = [
    `I must respectfully disagree with that framing of "${topic}". The evidence suggests a different conclusion.`,
    `While that's a valid point, we should consider the counterargument regarding "${topic}" from a practical standpoint.`,
    `To wrap up this debate on "${topic}", I believe we can agree that multiple perspectives have value here.`,
  ];
  return responses[round % responses.length];
}

function generateBrainstormResponse(char: Character, topic: string, round: number): string {
  const responses = [
    `What if we approached "${topic}" from an entirely new angle? What if we considered...`,
    `Here's an unconventional idea for "${topic}": combining seemingly unrelated concepts could lead to innovation.`,
    `To synthesize our brainstorming on "${topic}": the most promising direction seems to be embracing complexity.`,
  ];
  return responses[round % responses.length];
}

// Get compatible characters for collaboration
export function getCompatibleCharacters(characterId: string): Character[] {
  const char = getCharacter(characterId);
  if (!char) return [];
  
  const COMPATIBILITY: Record<string, string[]> = {
    challenger: ['nurturer', 'sage', 'creator'],
    nurturer: ['challenger', 'sage', 'explorer'],
    explorer: ['nurturer', 'creator', 'trickster'],
    sage: ['challenger', 'nurturer', 'explorer'],
    creator: ['explorer', 'nurturer', 'trickster'],
    trickster: ['creator', 'explorer', 'sage'],
  };
  
  const compatible = COMPATIBILITY[char.archetype] || [];
  
  // Return characters of compatible archetypes
  const allChars = Object.values(CHARACTERS);
  return allChars
    .filter(c => compatible.includes(c.archetype) && c.id !== characterId)
    .slice(0, 5);
}

// Generate a "meeting" summary of characters
export function generateCharacterMeetingSummary(
  characterIds: string[],
  topic: string
): {
  title: string;
  participants: string[];
  keyInsights: string[];
  actionItems: string[];
} {
  const characters = characterIds
    .map(id => getCharacter(id))
    .filter((c): c is Character => !!c);
  
  return {
    title: `Council on: ${topic}`,
    participants: characters.map(c => c.name),
    keyInsights: [
      `${characters[0]?.name || 'First'} brought analytical depth to the discussion`,
      `${characters[1]?.name || 'Second'} added emotional intelligence perspective`,
      `${characters[2]?.name || 'Third'} contributed creative possibilities`,
    ],
    actionItems: [
      'Schedule follow-up discussion',
      'Research specific topics raised',
      'Test proposed ideas in practice',
    ],
  };
}

export default {
  runCharacterCouncil,
  getCompatibleCharacters,
  generateCharacterMeetingSummary,
};