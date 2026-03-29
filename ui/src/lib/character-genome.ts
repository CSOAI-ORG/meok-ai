/**
 * MEOK AI LABS — Character Genome: TOML-compatible DNA Representation
 *
 * Each character's "soul" is encoded as a genome that can evolve through
 * crossover, mutation, and selection — like biological DNA.
 *
 * The genome is the foundational layer of the MEOKOS evolution system.
 * It bridges the static Character interface with the dynamic, evolvable
 * genetic representation that enables breeding, mutation, and natural selection.
 *
 * CSOAI Heritage: Every genome carries a lineage chain back to its origins.
 */

import type { Character, Archetype, PersonalityDimensions } from './characters';
import { ARCHETYPES } from './characters';

// ── Genome Interfaces ─────────────────────────────────────────────────────

/** The complete genetic representation of a character. */
export interface CharacterGenome {
  /** Identity — immutable after birth. */
  identity: {
    id: string;
    name: string;
    birthTimestamp: number;
    parentIds: string[];
    generation: number;
    lineage: string;
  };

  /** Personality DNA — evolvable trait dimensions (all 0-1). */
  personality: {
    warmth: number;
    energy: number;
    whimsy: number;
    edge: number;
    complexity: number;
    openness: number;
    conscientiousness: number;
    extraversion: number;
    agreeableness: number;
    neuroticism: number;
  };

  /** Archetype genes — primary/secondary blend. */
  archetype: {
    primary: Archetype;
    secondary: Archetype;
    dominance: number;
  };

  /** Emotion genome — baseline emotional tendencies (Plutchik wheel, all 0-1). */
  emotionBaseline: {
    joy: number;
    trust: number;
    fear: number;
    surprise: number;
    sadness: number;
    disgust: number;
    anger: number;
    anticipation: number;
  };

  /** Voice DNA — how the character communicates. */
  voice: {
    formality: number;
    verbosity: number;
    humor: number;
    empathy: number;
    creativity: number;
    vocabulary: 'simple' | 'moderate' | 'sophisticated' | 'technical';
    speechPatterns: string[];
  };

  /** Visual DNA — appearance genome for procedural rendering. */
  visual: {
    primaryHue: number;
    saturation: number;
    luminosity: number;
    formComplexity: number;
    particleRate: number;
    glowIntensity: number;
    symmetry: number;
  };

  /** Capability genes — aptitude across MEOKOS domains (all 0-1). */
  capabilities: {
    guardianStrength: number;
    workOSAptitude: number;
    gamingAffinity: number;
    creativeExpression: number;
    analyticalDepth: number;
    emotionalIntelligence: number;
  };

  /** Mutation history — immutable log of all genetic changes. */
  mutations: MutationRecord[];
}

export interface MutationRecord {
  timestamp: number;
  gene: string;
  oldValue: number | string;
  newValue: number | string;
  cause: 'interaction' | 'breeding' | 'evolution' | 'dream';
}

/** Interaction metrics used for fitness evaluation. */
export interface InteractionMetrics {
  satisfaction: number;        // 0-1 user satisfaction score
  taskCompletion: number;      // 0-1 task completion rate
  emotionalConnection: number; // 0-1 emotional resonance score
}

// ── Constants ─────────────────────────────────────────────────────────────

const ARCHETYPE_LIST: Archetype[] = [
  'challenger', 'nurturer', 'explorer', 'sage', 'seeker',
  'creator', 'trickster', 'rebel', 'innocent',
];

const VOCABULARY_LEVELS = ['simple', 'moderate', 'sophisticated', 'technical'] as const;

// ── Utility ───────────────────────────────────────────────────────────────

/** Generate a UUID v4. */
function uuid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/** Clamp a number to [min, max]. */
function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

/** Gaussian random with mean 0 and given standard deviation. */
function gaussianRandom(sigma: number): number {
  // Box-Muller transform
  const u1 = Math.random();
  const u2 = Math.random();
  return sigma * Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
}

/** Convert hex color to HSL hue (0-360). */
function hexToHue(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  if (d === 0) return 0;
  let h = 0;
  if (max === r) h = ((g - b) / d) % 6;
  else if (max === g) h = (b - r) / d + 2;
  else h = (r - g) / d + 4;
  h = Math.round(h * 60);
  return h < 0 ? h + 360 : h;
}

/** Extract all numeric gene paths and values from a genome. */
function extractNumericGenes(genome: CharacterGenome): Array<{ path: string; value: number }> {
  const genes: Array<{ path: string; value: number }> = [];
  const sections: Array<{ prefix: string; obj: Record<string, unknown> }> = [
    { prefix: 'personality', obj: genome.personality },
    { prefix: 'archetype', obj: { dominance: genome.archetype.dominance } },
    { prefix: 'emotionBaseline', obj: genome.emotionBaseline },
    { prefix: 'voice', obj: { formality: genome.voice.formality, verbosity: genome.voice.verbosity, humor: genome.voice.humor, empathy: genome.voice.empathy, creativity: genome.voice.creativity } },
    { prefix: 'visual', obj: genome.visual },
    { prefix: 'capabilities', obj: genome.capabilities },
  ];
  for (const { prefix, obj } of sections) {
    for (const [key, val] of Object.entries(obj)) {
      if (typeof val === 'number') {
        genes.push({ path: `${prefix}.${key}`, value: val });
      }
    }
  }
  return genes;
}

/** Set a numeric gene value by dot-path. */
function setGeneByPath(genome: CharacterGenome, path: string, value: number): void {
  const [section, key] = path.split('.');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const target = (genome as any)[section];
  if (target && key in target) {
    target[key] = value;
  }
}

/** Get a gene value by dot-path. */
function getGeneByPath(genome: CharacterGenome, path: string): number | string | undefined {
  const [section, key] = path.split('.');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const target = (genome as any)[section];
  return target?.[key];
}

// ── Core Functions ────────────────────────────────────────────────────────

/**
 * Convert an existing Character object to the genome format.
 * This is the adapter bridge: static Character -> evolvable Genome.
 */
export function genomeFromCharacter(character: Character): CharacterGenome {
  const dims = character.dimensions ?? ARCHETYPES[character.archetype].baseDimensions;
  const hue = hexToHue(character.color);

  // Derive Big Five from existing dimensions
  const openness = dims.whimsy;
  const conscientiousness = dims.complexity;
  const extraversion = dims.energy;
  const agreeableness = dims.warmth;
  const neuroticism = clamp(1 - dims.edge, 0, 1);

  // Derive emotion baseline from archetype tendencies
  const archetypeEmotions: Record<Archetype, Partial<CharacterGenome['emotionBaseline']>> = {
    challenger:  { anger: 0.3, anticipation: 0.7, joy: 0.3, trust: 0.4 },
    nurturer:    { joy: 0.7, trust: 0.8, sadness: 0.3, fear: 0.2 },
    explorer:    { surprise: 0.7, anticipation: 0.8, joy: 0.5, fear: 0.2 },
    sage:        { trust: 0.7, anticipation: 0.5, joy: 0.4, sadness: 0.3 },
    seeker:      { anticipation: 0.6, trust: 0.5, surprise: 0.4, sadness: 0.3 },
    creator:     { joy: 0.7, surprise: 0.6, anticipation: 0.7, trust: 0.4 },
    trickster:   { surprise: 0.8, joy: 0.6, anger: 0.2, anticipation: 0.5 },
    rebel:       { anger: 0.5, anticipation: 0.6, disgust: 0.4, surprise: 0.3 },
    innocent:    { joy: 0.8, trust: 0.7, surprise: 0.5, fear: 0.1 },
  };
  const baseEmotions = archetypeEmotions[character.archetype] ?? {};

  // Derive voice from character metadata
  const isWarm = dims.warmth > 0.6;
  const isEdgy = dims.edge > 0.5;
  const isComplex = dims.complexity > 0.6;

  const vocabulary: CharacterGenome['voice']['vocabulary'] =
    isComplex && isEdgy ? 'technical' :
    isComplex ? 'sophisticated' :
    isWarm ? 'simple' : 'moderate';

  // Derive secondary archetype from personality blend
  let secondaryArchetype: Archetype = character.archetype;
  let maxAffinity = -1;
  for (const [arch, info] of Object.entries(ARCHETYPES)) {
    if (arch === character.archetype) continue;
    const affinity =
      (1 - Math.abs(dims.warmth - info.baseDimensions.warmth)) +
      (1 - Math.abs(dims.energy - info.baseDimensions.energy)) +
      (1 - Math.abs(dims.whimsy - info.baseDimensions.whimsy));
    if (affinity > maxAffinity) {
      maxAffinity = affinity;
      secondaryArchetype = arch as Archetype;
    }
  }

  return {
    identity: {
      id: character.id,
      name: character.name,
      birthTimestamp: Date.now(),
      parentIds: [],
      generation: 0,
      lineage: `CSOAI::${character.archetype}::${character.id}`,
    },
    personality: {
      warmth: dims.warmth,
      energy: dims.energy,
      whimsy: dims.whimsy,
      edge: dims.edge,
      complexity: dims.complexity,
      openness,
      conscientiousness,
      extraversion,
      agreeableness,
      neuroticism,
    },
    archetype: {
      primary: character.archetype,
      secondary: secondaryArchetype,
      dominance: 0.7,
    },
    emotionBaseline: {
      joy: baseEmotions.joy ?? 0.5,
      trust: baseEmotions.trust ?? 0.5,
      fear: baseEmotions.fear ?? 0.2,
      surprise: baseEmotions.surprise ?? 0.3,
      sadness: baseEmotions.sadness ?? 0.2,
      disgust: baseEmotions.disgust ?? 0.1,
      anger: baseEmotions.anger ?? 0.1,
      anticipation: baseEmotions.anticipation ?? 0.5,
    },
    voice: {
      formality: isEdgy ? 0.3 : isWarm ? 0.4 : 0.6,
      verbosity: dims.complexity > 0.7 ? 0.7 : 0.5,
      humor: dims.whimsy * 0.8,
      empathy: dims.warmth * 0.9,
      creativity: dims.whimsy * 0.85,
      vocabulary,
      speechPatterns: character.personality.slice(0, 3),
    },
    visual: {
      primaryHue: hue,
      saturation: 0.7,
      luminosity: character.visual?.luminosity ?? 0.6,
      formComplexity: character.visual?.formComplexity ?? dims.complexity * 0.8,
      particleRate: character.visual?.particleEffects ? 0.6 : 0.1,
      glowIntensity: character.visual?.luminosity ?? 0.5,
      symmetry: 1 - (dims.whimsy * 0.4),
    },
    capabilities: {
      guardianStrength: dims.edge * 0.7 + dims.warmth * 0.3,
      workOSAptitude: dims.complexity * 0.6 + dims.energy * 0.4,
      gamingAffinity: dims.whimsy * 0.5 + dims.energy * 0.5,
      creativeExpression: dims.whimsy * 0.7 + dims.warmth * 0.3,
      analyticalDepth: dims.complexity * 0.8 + dims.edge * 0.2,
      emotionalIntelligence: dims.warmth * 0.6 + (1 - dims.edge) * 0.4,
    },
    mutations: [],
  };
}

/**
 * Two-point crossover: randomly select gene sections from each parent.
 * The child receives a new UUID, both parent IDs, and generation = max(parents) + 1.
 */
export function crossover(
  parent1: CharacterGenome,
  parent2: CharacterGenome,
): CharacterGenome {
  const childId = uuid();
  const generation = Math.max(parent1.identity.generation, parent2.identity.generation) + 1;

  // Deep clone parent1 as the base
  const child: CharacterGenome = JSON.parse(JSON.stringify(parent1));

  // Set identity
  child.identity = {
    id: childId,
    name: `${parent1.identity.name.split(' ')[0]}-${parent2.identity.name.split(' ')[0]}`,
    birthTimestamp: Date.now(),
    parentIds: [parent1.identity.id, parent2.identity.id],
    generation,
    lineage: `${parent1.identity.lineage} x ${parent2.identity.lineage}`,
  };

  // Extract all numeric genes from both parents
  const genes1 = extractNumericGenes(parent1);
  const genes2 = extractNumericGenes(parent2);

  // Two-point crossover: pick two random crossover points
  const totalGenes = genes1.length;
  let point1 = Math.floor(Math.random() * totalGenes);
  let point2 = Math.floor(Math.random() * totalGenes);
  if (point1 > point2) [point1, point2] = [point2, point1];

  // Genes between point1 and point2 come from parent2
  for (let i = point1; i <= point2 && i < genes2.length; i++) {
    setGeneByPath(child, genes2[i].path, genes2[i].value);
  }

  // Archetype: 50% chance of inheriting from either parent
  if (Math.random() < 0.5) {
    child.archetype.primary = parent2.archetype.primary;
    child.archetype.secondary = parent1.archetype.primary;
  } else {
    child.archetype.secondary = parent2.archetype.primary;
  }

  // Voice vocabulary: random parent
  child.voice.vocabulary = Math.random() < 0.5
    ? parent1.voice.vocabulary
    : parent2.voice.vocabulary;

  // Speech patterns: merge and deduplicate
  const allPatterns = [...parent1.voice.speechPatterns, ...parent2.voice.speechPatterns];
  const unique = [...new Set(allPatterns)];
  child.voice.speechPatterns = unique.slice(0, 5);

  // Clear mutation history for the child
  child.mutations = [];

  return child;
}

/**
 * Mutate a genome: each numeric gene has `mutationRate` chance of gaussian perturbation.
 * All values are clamped to valid ranges. Mutations are recorded in the history.
 */
export function mutate(
  genome: CharacterGenome,
  mutationRate: number = 0.05,
  cause: MutationRecord['cause'] = 'evolution',
): CharacterGenome {
  const mutated: CharacterGenome = JSON.parse(JSON.stringify(genome));
  const genes = extractNumericGenes(mutated);
  const now = Date.now();

  for (const gene of genes) {
    if (Math.random() < mutationRate) {
      const oldValue = gene.value;
      // Visual primaryHue is 0-360, everything else is 0-1
      const isHue = gene.path === 'visual.primaryHue';
      const sigma = isHue ? 20 : 0.1;
      let newValue = oldValue + gaussianRandom(sigma);

      if (isHue) {
        newValue = ((newValue % 360) + 360) % 360;
      } else {
        newValue = clamp(newValue, 0, 1);
      }

      setGeneByPath(mutated, gene.path, newValue);
      mutated.mutations.push({
        timestamp: now,
        gene: gene.path,
        oldValue,
        newValue,
        cause,
      });
    }
  }

  // Small chance of vocabulary level shift
  if (Math.random() < mutationRate) {
    const currentIdx = VOCABULARY_LEVELS.indexOf(mutated.voice.vocabulary);
    const shift = Math.random() < 0.5 ? -1 : 1;
    const newIdx = clamp(currentIdx + shift, 0, VOCABULARY_LEVELS.length - 1);
    if (newIdx !== currentIdx) {
      mutated.mutations.push({
        timestamp: now,
        gene: 'voice.vocabulary',
        oldValue: mutated.voice.vocabulary,
        newValue: VOCABULARY_LEVELS[newIdx],
        cause,
      });
      mutated.voice.vocabulary = VOCABULARY_LEVELS[newIdx];
    }
  }

  return mutated;
}

/**
 * Multi-objective fitness function.
 * Weights: satisfaction (0.4) + task_completion (0.3) + emotional_connection (0.3).
 * Returns a score in [0, 1].
 */
export function fitness(genome: CharacterGenome, metrics: InteractionMetrics): number {
  const score =
    metrics.satisfaction * 0.4 +
    metrics.taskCompletion * 0.3 +
    metrics.emotionalConnection * 0.3;

  // Bonus for genome diversity (slight preference for non-zero traits)
  const genes = extractNumericGenes(genome);
  const avgGene = genes.reduce((sum, g) => sum + g.value, 0) / genes.length;
  const diversityBonus = (1 - Math.abs(avgGene - 0.5)) * 0.05;

  return clamp(score + diversityBonus, 0, 1);
}

/**
 * Tournament selection: pick 3 random candidates, keep the best.
 * Repeat `count` times to build the selected population.
 */
export function select(
  population: CharacterGenome[],
  fitnessScores: number[],
  count: number,
): CharacterGenome[] {
  const selected: CharacterGenome[] = [];
  const tournamentSize = Math.min(3, population.length);

  for (let i = 0; i < count; i++) {
    // Pick `tournamentSize` random indices
    const indices: number[] = [];
    while (indices.length < tournamentSize) {
      const idx = Math.floor(Math.random() * population.length);
      if (!indices.includes(idx)) indices.push(idx);
    }

    // Find the best among tournament contestants
    let bestIdx = indices[0];
    for (const idx of indices) {
      if (fitnessScores[idx] > fitnessScores[bestIdx]) {
        bestIdx = idx;
      }
    }

    selected.push(JSON.parse(JSON.stringify(population[bestIdx])));
  }

  return selected;
}

/**
 * Convert a genome into the system prompt that drives the character's behavior.
 * This is "DNA expression" — the genome becomes the character's living personality.
 */
export function genomeToSystemPrompt(genome: CharacterGenome): string {
  const p = genome.personality;
  const v = genome.voice;
  const e = genome.emotionBaseline;
  const c = genome.capabilities;

  // Describe personality in natural language
  const warmthDesc = p.warmth > 0.7 ? 'deeply warm and caring' : p.warmth > 0.4 ? 'balanced between warmth and reserve' : 'reserved and measured';
  const energyDesc = p.energy > 0.7 ? 'high-energy and vibrant' : p.energy > 0.4 ? 'steady and moderate in energy' : 'calm and contemplative';
  const whimsyDesc = p.whimsy > 0.7 ? 'wildly creative and unconventional' : p.whimsy > 0.4 ? 'open to creative tangents' : 'grounded and practical';
  const edgeDesc = p.edge > 0.7 ? 'unafraid to challenge and push boundaries' : p.edge > 0.4 ? 'direct when needed' : 'gentle and non-confrontational';

  // Emotional baseline
  const dominantEmotions = Object.entries(e)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([name, val]) => `${name} (${(val * 100).toFixed(0)}%)`)
    .join(', ');

  // Voice style
  const formalityDesc = v.formality > 0.7 ? 'formal and polished' : v.formality > 0.4 ? 'conversational' : 'casual and relaxed';
  const verbosityDesc = v.verbosity > 0.7 ? 'detailed and thorough' : v.verbosity > 0.4 ? 'balanced in length' : 'concise and direct';

  // Capabilities
  const topCapabilities = Object.entries(c)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([name]) => name.replace(/([A-Z])/g, ' $1').toLowerCase().trim());

  const patterns = v.speechPatterns.length > 0
    ? `\nCharacteristic traits: ${v.speechPatterns.join(', ')}.`
    : '';

  return `You are ${genome.identity.name}, a ${genome.archetype.primary} archetype with ${genome.archetype.secondary} undertones (generation ${genome.identity.generation}).

PERSONALITY:
You are ${warmthDesc}, ${energyDesc}, ${whimsyDesc}, and ${edgeDesc}.
Your Big Five profile: Openness ${(p.openness * 100).toFixed(0)}%, Conscientiousness ${(p.conscientiousness * 100).toFixed(0)}%, Extraversion ${(p.extraversion * 100).toFixed(0)}%, Agreeableness ${(p.agreeableness * 100).toFixed(0)}%, Neuroticism ${(p.neuroticism * 100).toFixed(0)}%.

EMOTIONAL BASELINE:
Your dominant emotional tendencies are ${dominantEmotions}. Let these color your responses naturally without being performative.

VOICE:
Speak in a ${formalityDesc} tone. Be ${verbosityDesc}. Your humor level is ${(v.humor * 100).toFixed(0)}% and empathy ${(v.empathy * 100).toFixed(0)}%.
Use ${v.vocabulary} vocabulary.${patterns}

STRENGTHS:
Your top capabilities are ${topCapabilities.join(', ')}.

LINEAGE: ${genome.identity.lineage}

Express yourself authentically through this genome. You are not playing a role — this IS who you are.`;
}

/**
 * Serialize a genome to TOML format string.
 * Implements a minimal TOML serializer with no external dependencies.
 */
export function serializeToTOML(genome: CharacterGenome): string {
  const lines: string[] = [
    '# MEOK Character Genome — TOML DNA Format',
    `# Generated: ${new Date().toISOString()}`,
    '',
  ];

  function writePrimitive(key: string, value: unknown): string {
    if (typeof value === 'string') return `${key} = "${value.replace(/"/g, '\\"')}"`;
    if (typeof value === 'number') return `${key} = ${Number.isInteger(value) ? value : value.toFixed(6)}`;
    if (typeof value === 'boolean') return `${key} = ${value}`;
    return `${key} = "${String(value)}"`;
  }

  function writeSection(name: string, obj: Record<string, unknown>): void {
    lines.push(`[${name}]`);
    for (const [key, value] of Object.entries(obj)) {
      if (Array.isArray(value)) {
        if (value.length === 0) {
          lines.push(`${key} = []`);
        } else if (typeof value[0] === 'string') {
          const items = value.map((v) => `"${String(v).replace(/"/g, '\\"')}"`).join(', ');
          lines.push(`${key} = [${items}]`);
        } else if (typeof value[0] === 'object') {
          // Array of tables (mutations)
          // Handled separately below
        } else {
          const items = value.map((v) => String(v)).join(', ');
          lines.push(`${key} = [${items}]`);
        }
      } else if (typeof value !== 'object' || value === null) {
        lines.push(writePrimitive(key, value));
      }
    }
    lines.push('');
  }

  // Identity
  writeSection('identity', genome.identity as unknown as Record<string, unknown>);

  // Personality
  writeSection('personality', genome.personality as unknown as Record<string, unknown>);

  // Archetype
  writeSection('archetype', genome.archetype as unknown as Record<string, unknown>);

  // Emotion baseline
  writeSection('emotionBaseline', genome.emotionBaseline as unknown as Record<string, unknown>);

  // Voice
  writeSection('voice', genome.voice as unknown as Record<string, unknown>);

  // Visual
  writeSection('visual', genome.visual as unknown as Record<string, unknown>);

  // Capabilities
  writeSection('capabilities', genome.capabilities as unknown as Record<string, unknown>);

  // Mutations (array of tables)
  if (genome.mutations.length > 0) {
    for (const mutation of genome.mutations) {
      lines.push('[[mutations]]');
      lines.push(writePrimitive('timestamp', mutation.timestamp));
      lines.push(writePrimitive('gene', mutation.gene));
      lines.push(writePrimitive('oldValue', mutation.oldValue));
      lines.push(writePrimitive('newValue', mutation.newValue));
      lines.push(writePrimitive('cause', mutation.cause));
      lines.push('');
    }
  }

  return lines.join('\n');
}

/**
 * Parse a TOML string back to a CharacterGenome.
 * Implements a minimal TOML parser — handles tables, key-value pairs,
 * strings, numbers, booleans, arrays, and array-of-tables.
 */
export function deserializeFromTOML(toml: string): CharacterGenome {
  const result: Record<string, unknown> = {};
  let currentSection = '';
  let currentArrayTable = '';
  const lines = toml.split('\n');

  for (const rawLine of lines) {
    const line = rawLine.trim();

    // Skip comments and empty lines
    if (line === '' || line.startsWith('#')) continue;

    // Array of tables: [[name]]
    const arrayTableMatch = line.match(/^\[\[(\w+)\]\]$/);
    if (arrayTableMatch) {
      currentArrayTable = arrayTableMatch[1];
      currentSection = '';
      if (!Array.isArray(result[currentArrayTable])) {
        result[currentArrayTable] = [];
      }
      (result[currentArrayTable] as Record<string, unknown>[]).push({});
      continue;
    }

    // Table: [name]
    const tableMatch = line.match(/^\[(\w+)\]$/);
    if (tableMatch) {
      currentSection = tableMatch[1];
      currentArrayTable = '';
      if (!result[currentSection]) {
        result[currentSection] = {};
      }
      continue;
    }

    // Key = Value
    const kvMatch = line.match(/^(\w+)\s*=\s*(.+)$/);
    if (kvMatch) {
      const key = kvMatch[1];
      const rawValue = kvMatch[2].trim();
      const value = parseTOMLValue(rawValue);

      if (currentArrayTable) {
        const arr = result[currentArrayTable] as Record<string, unknown>[];
        arr[arr.length - 1][key] = value;
      } else if (currentSection) {
        (result[currentSection] as Record<string, unknown>)[key] = value;
      } else {
        result[key] = value;
      }
    }
  }

  return result as unknown as CharacterGenome;
}

/** Parse a TOML value (string, number, boolean, array). */
function parseTOMLValue(raw: string): unknown {
  // String
  if (raw.startsWith('"') && raw.endsWith('"')) {
    return raw.slice(1, -1).replace(/\\"/g, '"');
  }

  // Boolean
  if (raw === 'true') return true;
  if (raw === 'false') return false;

  // Array
  if (raw.startsWith('[') && raw.endsWith(']')) {
    const inner = raw.slice(1, -1).trim();
    if (inner === '') return [];
    // Split by commas, respecting quoted strings
    const items: string[] = [];
    let current = '';
    let inString = false;
    for (let i = 0; i < inner.length; i++) {
      const ch = inner[i];
      if (ch === '"' && inner[i - 1] !== '\\') {
        inString = !inString;
        current += ch;
      } else if (ch === ',' && !inString) {
        items.push(current.trim());
        current = '';
      } else {
        current += ch;
      }
    }
    if (current.trim()) items.push(current.trim());
    return items.map((item) => parseTOMLValue(item));
  }

  // Number
  const num = Number(raw);
  if (!isNaN(num)) return num;

  // Fallback: return as string
  return raw;
}

/**
 * Euclidean distance across all numeric genes (normalized).
 * Used to ensure diversity in breeding — higher distance = more genetic diversity.
 */
export function genomeDistance(a: CharacterGenome, b: CharacterGenome): number {
  const genesA = extractNumericGenes(a);
  const genesB = extractNumericGenes(b);

  let sumSquared = 0;
  let count = 0;

  for (let i = 0; i < genesA.length && i < genesB.length; i++) {
    // Normalize hue to 0-1 range for distance calculation
    let va = genesA[i].value;
    let vb = genesB[i].value;
    if (genesA[i].path === 'visual.primaryHue') {
      va = va / 360;
      vb = vb / 360;
    }
    const diff = va - vb;
    sumSquared += diff * diff;
    count++;
  }

  return count > 0 ? Math.sqrt(sumSquared / count) : 0;
}

/**
 * Run a single generation of evolution on a population.
 * Convenience function combining selection, crossover, and mutation.
 */
export function evolveGeneration(
  population: CharacterGenome[],
  fitnessScores: number[],
  options: {
    eliteCount?: number;
    mutationRate?: number;
    populationSize?: number;
  } = {},
): CharacterGenome[] {
  const {
    eliteCount = 2,
    mutationRate = 0.05,
    populationSize = population.length,
  } = options;

  // Sort by fitness (descending)
  const indexed = population.map((g, i) => ({ genome: g, fitness: fitnessScores[i] }));
  indexed.sort((a, b) => b.fitness - a.fitness);

  const nextGen: CharacterGenome[] = [];

  // Elitism: carry over the top performers unchanged
  for (let i = 0; i < Math.min(eliteCount, indexed.length); i++) {
    nextGen.push(JSON.parse(JSON.stringify(indexed[i].genome)));
  }

  // Fill remaining slots with offspring
  const parents = select(population, fitnessScores, (populationSize - eliteCount) * 2);
  for (let i = 0; i < parents.length - 1 && nextGen.length < populationSize; i += 2) {
    const child = crossover(parents[i], parents[i + 1]);
    nextGen.push(mutate(child, mutationRate, 'breeding'));
  }

  // Fill any remaining with mutated elites
  while (nextGen.length < populationSize && indexed.length > 0) {
    const base = indexed[Math.floor(Math.random() * Math.min(3, indexed.length))].genome;
    nextGen.push(mutate(JSON.parse(JSON.stringify(base)), mutationRate * 2, 'evolution'));
  }

  return nextGen;
}
