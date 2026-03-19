// ── Auth ──────────────────────────────────────────────────────────
export interface TokenResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
  tenant_id: string;
}

export interface UserInfo {
  id: string;
  email: string;
  tenant_id: string;
  hatch_name: string;
  created_at: string;
  is_active: boolean;
}

export interface APIKeyResponse {
  api_key: string;
  key_prefix: string;
  tenant_id: string;
  name: string;
  created_at: string;
}

// ── Consciousness ────────────────────────────────────────────────
export interface EmotionalState {
  pleasure: number;
  arousal: number;
  dominance: number;
  care_intensity: number;
  curiosity: number;
  aesthetics: number;
  valence: number;
  primary_emotion: string;
  timestamp: string;
  trigger: string;
}

export interface ConsciousnessState {
  consciousness_mode: "waking" | "dreaming" | "deep_sleep" | "meta_monitoring";
  emotional: EmotionalState;
  emotional_summary: {
    count: number;
    current: EmotionalState;
    averages: Record<string, number>;
    trend: string;
    emotional_stability: number;
  };
  reflections: number;
  dreams: number;
  is_dreaming: boolean;
  dream_phase: string | null;
  meta_observations: number;
  last_coherence_score: number | null;
  consciousness_level: number;
}

// ── Health ────────────────────────────────────────────────────────
export interface HealthStatus {
  status: string;
  timestamp: string;
  version: string;
  tenant_id?: string;
  council_nodes?: number;
  expertise_nodes?: number;
  bridge_nodes?: number;
  total_architecture_nodes?: number;
  domains?: number;
  components?: {
    neural_models: Record<string, unknown>;
    memory_store: string;
    consciousness: ConsciousnessState;
  };
}

// ── Council ──────────────────────────────────────────────────────
export interface CouncilStatus {
  version: string;
  node_count: number;
  expertise_node_count: number;
  bridge_node_count: number;
  total_architecture_nodes: number;
  threshold: number;
  domains: string[];
  domain_count: number;
  nodes_by_domain: Record<string, { id: string; care_weight: number }[]>;
  care_veto_enabled: boolean;
}

export interface CouncilDecision {
  timestamp: string;
  proposal: string;
  requester: string;
  priority: string;
  decision: string;
  vote_counts: Record<string, number>;
  care_score: number;
}

// ── Memory ───────────────────────────────────────────────────────
export interface MemoryStats {
  total_episodes: number;
  average_importance: number;
  average_care_weight: number;
  by_type: Record<string, number>;
  top_tags: Record<string, number>;
}

export interface MemoryEpisode {
  id: string;
  content: string;
  timestamp: string;
  importance_score: number;
  care_weight: number;
  source_agent: string;
  memory_type: string;
  tags: string[];
}

// ── Dreams ───────────────────────────────────────────────────────
export interface DreamRecord {
  timestamp?: string;
  phase?: string;
  insights?: string[];
  file?: string;
  error?: string;
  [key: string]: unknown;
}

// ── Hatch ────────────────────────────────────────────────────────
export interface HatchResponse {
  tenant_id: string;
  hatch_name: string;
  api_key: string;
  mcp_endpoint: string;
  status: string;
}

export interface HatchStatus {
  tenant_id: string;
  hatch_name: string;
  status: string;
  memory_count: number;
  agent_count: number;
  last_activity: string | null;
}

// ── Agents ───────────────────────────────────────────────────────
export interface AgentInfo {
  id: string;
  name: string;
  status: string;
  capabilities: string[];
  trust_level: number;
}
