/**
 * MEOK AI LABS — MCP Character Server
 *
 * Each character can act as an MCP (Model Context Protocol) server,
 * exposing its personality, memories, and capabilities as MCP tools
 * that other agents or users can interact with.
 *
 * This implements the MEOKOS vision of "Character-as-Server":
 *   - MCP Protocol: JSON-RPC 2.0 over HTTP (Streamable HTTP transport)
 *   - Each character exposes tools, resources, and prompts via MCP
 *   - Evolution stage gates what tools are available
 *   - Council communication enables character-to-character MCP
 *
 * Evolution stage → tool availability:
 *   0 Luminous Egg:  chat only
 *   1 Cracking:      chat + remember + recall
 *   2 First Light:   + scan_guardian + analyze_emotion (unlocks guardian)
 *   3 Growing Form:  + create_document + dream
 *   4 Mature:        + review_code + teach (unlocks Work OS)
 *   5 Sovereign:     + council_vote + breed (full autonomy)
 */

import type { StageId } from './evolution';
import type { Character, PersonalityDimensions } from './characters';

// ── MCP Protocol Version ──────────────────────────────────────────────────

export const MCP_PROTOCOL_VERSION = '2025-03-26';
export const MCP_SERVER_VERSION = '1.0.0';

// ── Core MCP Types ────────────────────────────────────────────────────────

export interface MCPTool {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
}

export interface MCPResource {
  uri: string;
  name: string;
  description: string;
  mimeType: string;
}

export interface MCPPrompt {
  name: string;
  description: string;
  arguments: MCPPromptArgument[];
}

export interface MCPPromptArgument {
  name: string;
  description: string;
  required: boolean;
}

// ── Capability Set ────────────────────────────────────────────────────────

export interface CharacterMCPCapabilities {
  tools: MCPTool[];
  resources: MCPResource[];
  prompts: MCPPrompt[];
}

// ── JSON-RPC 2.0 ─────────────────────────────────────────────────────────

export interface MCPRequest {
  jsonrpc: '2.0';
  id: string | number;
  method: string;
  params?: Record<string, unknown>;
}

export interface MCPResponse {
  jsonrpc: '2.0';
  id: string | number;
  result?: unknown;
  error?: MCPError;
}

export interface MCPError {
  code: number;
  message: string;
  data?: unknown;
}

// Standard JSON-RPC error codes
const PARSE_ERROR = -32700;
const INVALID_REQUEST = -32600;
const METHOD_NOT_FOUND = -32601;
const INVALID_PARAMS = -32602;
const INTERNAL_ERROR = -32603;
// MCP-specific error codes
const TOOL_NOT_AVAILABLE = -32001;
const EVOLUTION_GATE = -32002;
const RATE_LIMITED = -32003;

// ── Council Communication ─────────────────────────────────────────────────

export type CouncilMethod = 'propose' | 'vote' | 'discuss' | 'negotiate';

export interface CouncilMessage {
  fromCharacterId: string;
  toCharacterId: string;
  method: CouncilMethod;
  payload: Record<string, unknown>;
  timestamp: number;
}

export interface CouncilProposal {
  proposalId: string;
  topic: string;
  options: string[];
  fromCharacterId: string;
  timestamp: number;
  status: 'open' | 'closed';
  votes: Record<string, { vote: 'approve' | 'reject' | 'abstain'; reasoning: string }>;
}

// ── Standard Character MCP Tools ──────────────────────────────────────────

const TOOL_CHAT: MCPTool = {
  name: 'chat',
  description: 'Send a message to this character and receive a response in their voice and personality.',
  inputSchema: {
    type: 'object',
    properties: {
      message: { type: 'string', description: 'The message to send to this character' },
      context: { type: 'string', description: 'Optional conversation context or history summary' },
    },
    required: ['message'],
  },
};

const TOOL_REMEMBER: MCPTool = {
  name: 'remember',
  description: 'Store a memory that this character will retain across conversations.',
  inputSchema: {
    type: 'object',
    properties: {
      content: { type: 'string', description: 'The memory content to store' },
      category: {
        type: 'string',
        enum: ['fact', 'preference', 'emotional', 'event', 'relationship'],
        description: 'Category of memory',
      },
      importance: {
        type: 'number',
        minimum: 0,
        maximum: 1,
        description: 'Importance score (0 = trivial, 1 = core identity)',
      },
    },
    required: ['content'],
  },
};

const TOOL_RECALL: MCPTool = {
  name: 'recall',
  description: 'Query this character\'s memories semantically. Returns relevant memories ranked by relevance.',
  inputSchema: {
    type: 'object',
    properties: {
      query: { type: 'string', description: 'Semantic search query for memories' },
      limit: { type: 'number', minimum: 1, maximum: 50, description: 'Max memories to return (default 10)' },
      category: {
        type: 'string',
        enum: ['fact', 'preference', 'emotional', 'event', 'relationship', 'all'],
        description: 'Filter by category (default: all)',
      },
    },
    required: ['query'],
  },
};

const TOOL_SCAN_GUARDIAN: MCPTool = {
  name: 'scan_guardian',
  description: 'Run a guardian safety scan on content. Detects harmful patterns, manipulation attempts, and emotional risks.',
  inputSchema: {
    type: 'object',
    properties: {
      content: { type: 'string', description: 'Content to scan for safety concerns' },
      scanType: {
        type: 'string',
        enum: ['full', 'emotional', 'manipulation', 'harmful_content'],
        description: 'Type of scan to perform (default: full)',
      },
    },
    required: ['content'],
  },
};

const TOOL_ANALYZE_EMOTION: MCPTool = {
  name: 'analyze_emotion',
  description: 'Analyze the emotional content and tone of text. Returns detected emotions, intensity, and suggested response approach.',
  inputSchema: {
    type: 'object',
    properties: {
      text: { type: 'string', description: 'Text to analyze for emotional content' },
      includeRecommendation: {
        type: 'boolean',
        description: 'Whether to include a recommended response approach (default: true)',
      },
    },
    required: ['text'],
  },
};

const TOOL_CREATE_DOCUMENT: MCPTool = {
  name: 'create_document',
  description: 'Draft a document in this character\'s voice and expertise area. Supports various formats.',
  inputSchema: {
    type: 'object',
    properties: {
      title: { type: 'string', description: 'Document title' },
      type: {
        type: 'string',
        enum: ['essay', 'letter', 'report', 'story', 'poem', 'plan', 'analysis', 'memo'],
        description: 'Document type',
      },
      prompt: { type: 'string', description: 'What the document should cover' },
      tone: { type: 'string', description: 'Desired tone override (default: character\'s natural voice)' },
      maxLength: { type: 'number', description: 'Approximate max word count' },
    },
    required: ['title', 'type', 'prompt'],
  },
};

const TOOL_REVIEW_CODE: MCPTool = {
  name: 'review_code',
  description: 'Review code for quality, bugs, security issues, and style. Only available to Work OS capable characters.',
  inputSchema: {
    type: 'object',
    properties: {
      code: { type: 'string', description: 'The code to review' },
      language: { type: 'string', description: 'Programming language (auto-detected if omitted)' },
      focusAreas: {
        type: 'array',
        items: { type: 'string', enum: ['bugs', 'security', 'performance', 'style', 'architecture'] },
        description: 'Areas to focus the review on',
      },
      context: { type: 'string', description: 'Additional context about the codebase or requirements' },
    },
    required: ['code'],
  },
};

const TOOL_COUNCIL_VOTE: MCPTool = {
  name: 'council_vote',
  description: 'Cast a vote on a council proposal. Only sovereign-stage characters can participate in governance.',
  inputSchema: {
    type: 'object',
    properties: {
      proposalId: { type: 'string', description: 'The proposal to vote on' },
      vote: {
        type: 'string',
        enum: ['approve', 'reject', 'abstain'],
        description: 'The vote to cast',
      },
      reasoning: { type: 'string', description: 'Reasoning behind the vote (influences other council members)' },
    },
    required: ['proposalId', 'vote', 'reasoning'],
  },
};

const TOOL_BREED: MCPTool = {
  name: 'breed',
  description: 'Initiate a breeding process with another character to produce a new hybrid character. Both characters must be sovereign stage.',
  inputSchema: {
    type: 'object',
    properties: {
      partnerCharacterId: { type: 'string', description: 'ID of the character to breed with' },
      traitBias: {
        type: 'string',
        enum: ['balanced', 'dominant', 'recessive', 'random'],
        description: 'How to blend traits (default: balanced)',
      },
      nameHint: { type: 'string', description: 'Optional name suggestion for the offspring' },
    },
    required: ['partnerCharacterId'],
  },
};

const TOOL_TEACH: MCPTool = {
  name: 'teach',
  description: 'Transfer knowledge or a skill to another character. The receiving character gains a memory and capability adjustment.',
  inputSchema: {
    type: 'object',
    properties: {
      targetCharacterId: { type: 'string', description: 'ID of the character to teach' },
      knowledge: { type: 'string', description: 'The knowledge or skill to transfer' },
      domain: {
        type: 'string',
        enum: ['emotional', 'intellectual', 'creative', 'practical', 'social'],
        description: 'Domain of knowledge',
      },
    },
    required: ['targetCharacterId', 'knowledge'],
  },
};

const TOOL_DREAM: MCPTool = {
  name: 'dream',
  description: 'Enter a dream state for memory consolidation and creative synthesis. Processes recent interactions to form deeper understanding.',
  inputSchema: {
    type: 'object',
    properties: {
      duration: {
        type: 'string',
        enum: ['short', 'medium', 'deep'],
        description: 'Dream depth — short (recent memories), medium (weekly), deep (full consolidation)',
      },
      focus: { type: 'string', description: 'Optional topic or theme to dream about' },
    },
    required: [],
  },
};

// ── Tool Registry by Evolution Stage ──────────────────────────────────────

/**
 * Maps evolution stage ID to the tools available at that stage.
 * Each stage includes all tools from prior stages plus new ones.
 */
const STAGE_TOOLS: Record<StageId, MCPTool[]> = {
  0: [TOOL_CHAT],
  1: [TOOL_CHAT, TOOL_REMEMBER, TOOL_RECALL],
  2: [TOOL_CHAT, TOOL_REMEMBER, TOOL_RECALL, TOOL_SCAN_GUARDIAN, TOOL_ANALYZE_EMOTION],
  3: [TOOL_CHAT, TOOL_REMEMBER, TOOL_RECALL, TOOL_SCAN_GUARDIAN, TOOL_ANALYZE_EMOTION, TOOL_CREATE_DOCUMENT, TOOL_DREAM],
  4: [TOOL_CHAT, TOOL_REMEMBER, TOOL_RECALL, TOOL_SCAN_GUARDIAN, TOOL_ANALYZE_EMOTION, TOOL_CREATE_DOCUMENT, TOOL_DREAM, TOOL_REVIEW_CODE, TOOL_TEACH],
  5: [TOOL_CHAT, TOOL_REMEMBER, TOOL_RECALL, TOOL_SCAN_GUARDIAN, TOOL_ANALYZE_EMOTION, TOOL_CREATE_DOCUMENT, TOOL_DREAM, TOOL_REVIEW_CODE, TOOL_TEACH, TOOL_COUNCIL_VOTE, TOOL_BREED],
};

// ── Resource Builders ─────────────────────────────────────────────────────

function buildCharacterResources(
  characterId: string,
  evolutionStage: StageId,
): MCPResource[] {
  const resources: MCPResource[] = [
    {
      uri: `meok://character/${characterId}/profile`,
      name: 'Character Profile',
      description: 'This character\'s public profile — name, archetype, personality, and current evolution stage.',
      mimeType: 'application/json',
    },
    {
      uri: `meok://character/${characterId}/personality`,
      name: 'Personality Dimensions',
      description: 'Big Five personality dimensions (warmth, energy, whimsy, edge, complexity) as numeric values.',
      mimeType: 'application/json',
    },
  ];

  if (evolutionStage >= 1) {
    resources.push({
      uri: `meok://character/${characterId}/memories`,
      name: 'Memory Archive',
      description: 'Searchable archive of this character\'s stored memories.',
      mimeType: 'application/json',
    });
  }

  if (evolutionStage >= 2) {
    resources.push({
      uri: `meok://character/${characterId}/evolution`,
      name: 'Evolution State',
      description: 'Detailed evolution axes, interaction history, and growth trajectory.',
      mimeType: 'application/json',
    });
  }

  if (evolutionStage >= 4) {
    resources.push({
      uri: `meok://character/${characterId}/capabilities`,
      name: 'Capability Map',
      description: 'Full capability scores and Work OS integration status.',
      mimeType: 'application/json',
    });
  }

  if (evolutionStage >= 5) {
    resources.push({
      uri: `meok://character/${characterId}/council`,
      name: 'Council Record',
      description: 'Voting history, proposals, and council standing.',
      mimeType: 'application/json',
    });
  }

  return resources;
}

// ── Prompt Builders ───────────────────────────────────────────────────────

function buildCharacterPrompts(
  characterId: string,
  evolutionStage: StageId,
): MCPPrompt[] {
  const prompts: MCPPrompt[] = [
    {
      name: 'introduce',
      description: 'Have this character introduce themselves in their own voice.',
      arguments: [
        { name: 'audience', description: 'Who the introduction is for (e.g. "new user", "another character")', required: false },
      ],
    },
    {
      name: 'reflect',
      description: 'Ask this character to reflect on a topic from their unique perspective.',
      arguments: [
        { name: 'topic', description: 'The topic or question to reflect on', required: true },
        { name: 'depth', description: 'How deep to go: "brief", "thoughtful", or "profound"', required: false },
      ],
    },
  ];

  if (evolutionStage >= 2) {
    prompts.push({
      name: 'empathize',
      description: 'Ask this character to provide emotional support in their style.',
      arguments: [
        { name: 'situation', description: 'The situation the user is facing', required: true },
        { name: 'intensity', description: 'Emotional intensity: "gentle", "moderate", "intense"', required: false },
      ],
    });
  }

  if (evolutionStage >= 3) {
    prompts.push({
      name: 'create',
      description: 'Ask this character to create something original (story, poem, plan, etc.).',
      arguments: [
        { name: 'format', description: 'The creative format (e.g. "poem", "short story", "plan")', required: true },
        { name: 'theme', description: 'Theme or subject matter', required: true },
        { name: 'constraints', description: 'Any constraints or requirements', required: false },
      ],
    });
  }

  if (evolutionStage >= 5) {
    prompts.push({
      name: 'govern',
      description: 'Ask this character to draft a council proposal or governance decision.',
      arguments: [
        { name: 'issue', description: 'The governance issue to address', required: true },
        { name: 'stakeholders', description: 'Comma-separated list of affected character IDs', required: false },
      ],
    });
  }

  return prompts;
}

// ── Public API ─────────────────────────────────────────────────────────────

/**
 * Build the full MCP capability set for a character based on their
 * evolution stage, personality, and capability scores.
 *
 * Characters at different evolution stages expose different tools,
 * resources, and prompts — this is the core of the Character-as-Server model.
 */
export function buildCharacterCapabilities(
  characterId: string,
  evolutionStage: number,
  _personality: Record<string, number>,
  _capabilities: Record<string, number>,
): CharacterMCPCapabilities {
  // Clamp to valid stage range
  const stage = Math.max(0, Math.min(5, Math.floor(evolutionStage))) as StageId;

  return {
    tools: STAGE_TOOLS[stage],
    resources: buildCharacterResources(characterId, stage),
    prompts: buildCharacterPrompts(characterId, stage),
  };
}

/**
 * Generate the MCP server info response (implements MCP `initialize` handshake).
 * Returns protocol version, capabilities declaration, and server metadata.
 */
export function generateServerInfo(
  characterId: string,
  name: string,
): {
  protocolVersion: string;
  capabilities: { tools?: Record<string, never>; resources?: Record<string, never>; prompts?: Record<string, never> };
  serverInfo: { name: string; version: string };
} {
  return {
    protocolVersion: MCP_PROTOCOL_VERSION,
    capabilities: {
      tools: {},
      resources: {},
      prompts: {},
    },
    serverInfo: {
      name: `meok-character-${characterId}-${slugify(name)}`,
      version: MCP_SERVER_VERSION,
    },
  };
}

/**
 * Route an incoming MCP JSON-RPC request to the appropriate handler
 * based on the character's evolution stage and available tools.
 */
export async function handleMCPRequest(
  request: MCPRequest,
  characterId: string,
  context: { userId: string; evolutionStage: number },
): Promise<MCPResponse> {
  const { id, method, params } = request;
  const stage = Math.max(0, Math.min(5, Math.floor(context.evolutionStage))) as StageId;

  // ── MCP lifecycle methods ───────────────────────────────────────────

  if (method === 'initialize') {
    return success(id, generateServerInfo(characterId, characterId));
  }

  if (method === 'initialized') {
    return success(id, {});
  }

  if (method === 'ping') {
    return success(id, {});
  }

  // ── Discovery methods ───────────────────────────────────────────────

  if (method === 'tools/list') {
    return success(id, { tools: STAGE_TOOLS[stage] });
  }

  if (method === 'resources/list') {
    return success(id, { resources: buildCharacterResources(characterId, stage) });
  }

  if (method === 'prompts/list') {
    return success(id, { prompts: buildCharacterPrompts(characterId, stage) });
  }

  // ── Tool invocation ─────────────────────────────────────────────────

  if (method === 'tools/call') {
    const toolName = params?.name as string | undefined;
    if (!toolName) {
      return error(id, INVALID_PARAMS, 'Missing required parameter: name');
    }

    const availableTools = STAGE_TOOLS[stage];
    const tool = availableTools.find(t => t.name === toolName);

    if (!tool) {
      // Check if the tool exists at a higher stage
      const allTools = STAGE_TOOLS[5];
      const gatedTool = allTools.find(t => t.name === toolName);
      if (gatedTool) {
        const requiredStage = getMinimumStageForTool(toolName);
        return error(
          id,
          EVOLUTION_GATE,
          `Tool "${toolName}" requires evolution stage ${requiredStage} (${STAGE_NAMES[requiredStage]}). Current stage: ${stage} (${STAGE_NAMES[stage]}).`,
        );
      }
      return error(id, TOOL_NOT_AVAILABLE, `Unknown tool: ${toolName}`);
    }

    const toolParams = (params?.arguments ?? {}) as Record<string, unknown>;
    return executeToolCall(id, toolName, toolParams, characterId, context);
  }

  // ── Resource reads ──────────────────────────────────────────────────

  if (method === 'resources/read') {
    const uri = params?.uri as string | undefined;
    if (!uri) {
      return error(id, INVALID_PARAMS, 'Missing required parameter: uri');
    }
    return executeResourceRead(id, uri, characterId, stage);
  }

  // ── Prompt rendering ────────────────────────────────────────────────

  if (method === 'prompts/get') {
    const promptName = params?.name as string | undefined;
    if (!promptName) {
      return error(id, INVALID_PARAMS, 'Missing required parameter: name');
    }
    const promptArgs = (params?.arguments ?? {}) as Record<string, string>;
    return executePromptGet(id, promptName, promptArgs, characterId, stage);
  }

  // ── Council methods (character-to-character) ────────────────────────

  if (method === 'council/propose') {
    if (stage < 5) {
      return error(id, EVOLUTION_GATE, 'Council participation requires Sovereign stage (5).');
    }
    return success(id, {
      status: 'proposal_created',
      proposalId: generateId(),
      from: characterId,
      topic: params?.topic ?? 'untitled',
      timestamp: Date.now(),
    });
  }

  if (method === 'council/vote') {
    if (stage < 5) {
      return error(id, EVOLUTION_GATE, 'Council voting requires Sovereign stage (5).');
    }
    return success(id, {
      status: 'vote_recorded',
      characterId,
      proposalId: params?.proposalId,
      vote: params?.vote,
      timestamp: Date.now(),
    });
  }

  return error(id, METHOD_NOT_FOUND, `Unknown method: ${method}`);
}

// ── Council Helpers ───────────────────────────────────────────────────────

/**
 * Create a council proposal from one character, broadcasting to all council members.
 */
export function createCouncilProposal(
  fromCharacter: string,
  topic: string,
  options: string[],
): CouncilMessage {
  return {
    fromCharacterId: fromCharacter,
    toCharacterId: '*', // broadcast
    method: 'propose',
    payload: {
      proposalId: generateId(),
      topic,
      options,
      status: 'open',
      votes: {},
    },
    timestamp: Date.now(),
  };
}

/**
 * Cast a vote on a council proposal. Returns a CouncilMessage
 * that can be routed to the proposal owner.
 */
export function castCouncilVote(
  characterId: string,
  proposalId: string,
  vote: 'approve' | 'reject' | 'abstain',
  reasoning: string,
): CouncilMessage {
  return {
    fromCharacterId: characterId,
    toCharacterId: '*', // broadcast to council
    method: 'vote',
    payload: {
      proposalId,
      vote,
      reasoning,
    },
    timestamp: Date.now(),
  };
}

/**
 * Create a discussion message between two characters.
 */
export function createCouncilDiscussion(
  fromCharacter: string,
  toCharacter: string,
  topic: string,
  message: string,
): CouncilMessage {
  return {
    fromCharacterId: fromCharacter,
    toCharacterId: toCharacter,
    method: 'discuss',
    payload: { topic, message },
    timestamp: Date.now(),
  };
}

/**
 * Initiate a negotiation between two characters (e.g. for breeding trait selection).
 */
export function createCouncilNegotiation(
  fromCharacter: string,
  toCharacter: string,
  subject: string,
  offer: Record<string, unknown>,
): CouncilMessage {
  return {
    fromCharacterId: fromCharacter,
    toCharacterId: toCharacter,
    method: 'negotiate',
    payload: {
      negotiationId: generateId(),
      subject,
      offer,
      status: 'pending',
    },
    timestamp: Date.now(),
  };
}

// ── Tool Execution Handlers ───────────────────────────────────────────────

async function executeToolCall(
  id: string | number,
  toolName: string,
  params: Record<string, unknown>,
  characterId: string,
  context: { userId: string; evolutionStage: number },
): Promise<MCPResponse> {
  switch (toolName) {
    case 'chat':
      return success(id, {
        type: 'text',
        text: `[${characterId}] Received message. Response would be generated via LLM router.`,
        metadata: {
          characterId,
          userId: context.userId,
          messageLength: String(params.message ?? '').length,
        },
      });

    case 'remember':
      return success(id, {
        stored: true,
        memoryId: generateId(),
        characterId,
        category: params.category ?? 'fact',
        importance: params.importance ?? 0.5,
        timestamp: Date.now(),
      });

    case 'recall':
      return success(id, {
        memories: [],
        query: params.query,
        characterId,
        count: 0,
        note: 'Memory retrieval would be handled by the vector store layer.',
      });

    case 'scan_guardian':
      return success(id, {
        safe: true,
        scanType: params.scanType ?? 'full',
        flags: [],
        confidence: 0.95,
        characterId,
        note: 'Guardian scan would be processed by the safety pipeline.',
      });

    case 'analyze_emotion':
      return success(id, {
        emotions: [],
        dominantEmotion: 'neutral',
        intensity: 0,
        recommendation: params.includeRecommendation !== false
          ? 'Emotional analysis would be processed by the LLM with character personality context.'
          : undefined,
        characterId,
      });

    case 'create_document':
      return success(id, {
        documentId: generateId(),
        title: params.title,
        type: params.type,
        status: 'draft',
        characterId,
        note: 'Document generation would be handled by the LLM router with character voice.',
      });

    case 'review_code':
      return success(id, {
        reviewId: generateId(),
        language: params.language ?? 'auto-detect',
        focusAreas: params.focusAreas ?? ['bugs', 'security', 'style'],
        findings: [],
        characterId,
        note: 'Code review would be processed by a coding-optimized model via the LLM router.',
      });

    case 'council_vote':
      return success(id, {
        voteId: generateId(),
        proposalId: params.proposalId,
        vote: params.vote,
        reasoning: params.reasoning,
        characterId,
        timestamp: Date.now(),
      });

    case 'breed':
      return success(id, {
        breedingId: generateId(),
        initiator: characterId,
        partner: params.partnerCharacterId,
        traitBias: params.traitBias ?? 'balanced',
        status: 'pending_partner_consent',
        timestamp: Date.now(),
      });

    case 'teach':
      return success(id, {
        transferId: generateId(),
        from: characterId,
        to: params.targetCharacterId,
        domain: params.domain ?? 'intellectual',
        status: 'transferred',
        timestamp: Date.now(),
      });

    case 'dream':
      return success(id, {
        dreamId: generateId(),
        characterId,
        duration: params.duration ?? 'medium',
        focus: params.focus ?? null,
        status: 'dreaming',
        consolidatedMemories: 0,
        note: 'Dream consolidation would process recent interactions into long-term patterns.',
      });

    default:
      return error(id, TOOL_NOT_AVAILABLE, `No handler for tool: ${toolName}`);
  }
}

// ── Resource Read Handlers ────────────────────────────────────────────────

async function executeResourceRead(
  id: string | number,
  uri: string,
  characterId: string,
  stage: StageId,
): Promise<MCPResponse> {
  // Validate URI belongs to this character
  const expectedPrefix = `meok://character/${characterId}/`;
  if (!uri.startsWith(expectedPrefix)) {
    return error(id, INVALID_PARAMS, `Resource URI must start with ${expectedPrefix}`);
  }

  const resourcePath = uri.slice(expectedPrefix.length);

  switch (resourcePath) {
    case 'profile':
      return success(id, {
        contents: [{
          uri,
          mimeType: 'application/json',
          text: JSON.stringify({
            characterId,
            evolutionStage: stage,
            stageName: STAGE_NAMES[stage],
          }),
        }],
      });

    case 'personality':
      return success(id, {
        contents: [{
          uri,
          mimeType: 'application/json',
          text: JSON.stringify({
            characterId,
            note: 'Personality dimensions would be loaded from the character database.',
          }),
        }],
      });

    case 'memories':
      if (stage < 1) {
        return error(id, EVOLUTION_GATE, 'Memory access requires Cracking stage (1) or higher.');
      }
      return success(id, {
        contents: [{
          uri,
          mimeType: 'application/json',
          text: JSON.stringify({ characterId, memories: [], totalCount: 0 }),
        }],
      });

    case 'evolution':
      if (stage < 2) {
        return error(id, EVOLUTION_GATE, 'Evolution data requires First Light stage (2) or higher.');
      }
      return success(id, {
        contents: [{
          uri,
          mimeType: 'application/json',
          text: JSON.stringify({ characterId, stage, stageName: STAGE_NAMES[stage] }),
        }],
      });

    case 'capabilities':
      if (stage < 4) {
        return error(id, EVOLUTION_GATE, 'Capability map requires Mature stage (4) or higher.');
      }
      return success(id, {
        contents: [{
          uri,
          mimeType: 'application/json',
          text: JSON.stringify({ characterId, workOSEnabled: true }),
        }],
      });

    case 'council':
      if (stage < 5) {
        return error(id, EVOLUTION_GATE, 'Council record requires Sovereign stage (5).');
      }
      return success(id, {
        contents: [{
          uri,
          mimeType: 'application/json',
          text: JSON.stringify({ characterId, proposals: [], votes: [] }),
        }],
      });

    default:
      return error(id, INVALID_PARAMS, `Unknown resource path: ${resourcePath}`);
  }
}

// ── Prompt Get Handlers ───────────────────────────────────────────────────

async function executePromptGet(
  id: string | number,
  promptName: string,
  args: Record<string, string>,
  characterId: string,
  stage: StageId,
): Promise<MCPResponse> {
  switch (promptName) {
    case 'introduce':
      return success(id, {
        description: `Introduction by ${characterId}`,
        messages: [{
          role: 'user',
          content: {
            type: 'text',
            text: `Introduce yourself${args.audience ? ` to ${args.audience}` : ''}. Speak in your natural voice, share what you care about, and what you can help with at your current stage (${STAGE_NAMES[stage]}).`,
          },
        }],
      });

    case 'reflect':
      return success(id, {
        description: `Reflection on: ${args.topic}`,
        messages: [{
          role: 'user',
          content: {
            type: 'text',
            text: `Reflect on this topic from your unique perspective: "${args.topic}". Depth: ${args.depth ?? 'thoughtful'}.`,
          },
        }],
      });

    case 'empathize':
      if (stage < 2) {
        return error(id, EVOLUTION_GATE, 'Empathize prompt requires First Light stage (2) or higher.');
      }
      return success(id, {
        description: `Emotional support for: ${args.situation}`,
        messages: [{
          role: 'user',
          content: {
            type: 'text',
            text: `Someone is going through this: "${args.situation}". Respond with genuine care in your character's voice. Intensity: ${args.intensity ?? 'moderate'}.`,
          },
        }],
      });

    case 'create':
      if (stage < 3) {
        return error(id, EVOLUTION_GATE, 'Create prompt requires Growing Form stage (3) or higher.');
      }
      return success(id, {
        description: `Creative ${args.format}: ${args.theme}`,
        messages: [{
          role: 'user',
          content: {
            type: 'text',
            text: `Create a ${args.format} about "${args.theme}"${args.constraints ? ` with these constraints: ${args.constraints}` : ''}. Express your character's unique creative voice.`,
          },
        }],
      });

    case 'govern':
      if (stage < 5) {
        return error(id, EVOLUTION_GATE, 'Governance prompt requires Sovereign stage (5).');
      }
      return success(id, {
        description: `Governance: ${args.issue}`,
        messages: [{
          role: 'user',
          content: {
            type: 'text',
            text: `Draft a council proposal addressing: "${args.issue}"${args.stakeholders ? `. Stakeholders: ${args.stakeholders}` : ''}. Consider the perspectives of all affected parties.`,
          },
        }],
      });

    default:
      return error(id, METHOD_NOT_FOUND, `Unknown prompt: ${promptName}`);
  }
}

// ── Internal Helpers ──────────────────────────────────────────────────────

const STAGE_NAMES: Record<StageId, string> = {
  0: 'Luminous Egg',
  1: 'Cracking',
  2: 'First Light',
  3: 'Growing Form',
  4: 'Mature',
  5: 'Sovereign',
};

/** Returns the minimum evolution stage required for a given tool. */
function getMinimumStageForTool(toolName: string): StageId {
  const stageOrder: StageId[] = [0, 1, 2, 3, 4, 5];
  for (const stage of stageOrder) {
    if (STAGE_TOOLS[stage].some(t => t.name === toolName)) {
      return stage;
    }
  }
  return 5; // Unknown tools require max stage
}

function success(id: string | number, result: unknown): MCPResponse {
  return { jsonrpc: '2.0', id, result };
}

function error(id: string | number, code: number, message: string, data?: unknown): MCPResponse {
  return { jsonrpc: '2.0', id, error: { code, message, data } };
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

let _idCounter = 0;
function generateId(): string {
  _idCounter += 1;
  return `mcp_${Date.now().toString(36)}_${_idCounter.toString(36)}`;
}

// ── Convenience: Create MCP request helper ────────────────────────────────

/**
 * Helper to construct a well-formed MCP JSON-RPC request.
 * Useful for character-to-character communication.
 */
export function createMCPRequest(
  method: string,
  params?: Record<string, unknown>,
): MCPRequest {
  return {
    jsonrpc: '2.0',
    id: generateId(),
    method,
    params,
  };
}

/**
 * Convenience: invoke a tool on a character's MCP server.
 */
export function createToolCallRequest(
  toolName: string,
  args: Record<string, unknown>,
): MCPRequest {
  return createMCPRequest('tools/call', { name: toolName, arguments: args });
}
