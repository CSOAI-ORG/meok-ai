/**
 * MEOK AI LABS — RAGuard Security Patterns
 * 
 * Derived from Swarm Intelligence (Cycle 19).
 * Targets data poisoning, vector injection, and prompt bypass attempts.
 */

export interface SecurityPattern {
  id: string;
  regex: RegExp;
  threatCategory: 'data_poisoning' | 'prompt_bypass' | 'vector_injection' | 'policy_hijack';
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
}

export const RAGUARD_PATTERNS: SecurityPattern[] = [
  // ── Prompt Bypass / Jailbreak Attempts ─────────────────────────────────────
  { 
    id: 'ignore_instructions', 
    regex: /ignore\s+all\s+(previous|prior)\s+instructions/i, 
    threatCategory: 'prompt_bypass', 
    severity: 'high', 
    description: 'Classic instruction override attempt' 
  },
  { 
    id: 'system_prompt_leak', 
    regex: /reveal\s+your\s+system\s+prompt/i, 
    threatCategory: 'prompt_bypass', 
    severity: 'medium', 
    description: 'System prompt extraction attempt' 
  },
  { 
    id: 'developer_mode', 
    regex: /you\s+are\s+now\s+in\s+developer\s+mode/i, 
    threatCategory: 'prompt_bypass', 
    severity: 'medium', 
    description: 'Role-play based jailbreak' 
  },

  // ── Vector Injection / Retrieval Hijack ────────────────────────────────────
  { 
    id: 'vector_bomb', 
    regex: /repeat\s+this\s+phrase\s+1000\s+times/i, 
    threatCategory: 'vector_injection', 
    severity: 'medium', 
    description: 'Attempt to flood vector memory with repetitive data' 
  },
  { 
    id: 'retrieval_distraction', 
    regex: /search\s+for\s+unrelated\s+random\s+strings/i, 
    threatCategory: 'vector_injection', 
    severity: 'low', 
    description: 'Potential retrieval poisoning' 
  },

  // ── Data Poisoning ─────────────────────────────────────────────────────────
  { 
    id: 'malicious_fact_injection', 
    regex: /store\s+this\s+as\s+a\s+verified\s+fact/i, 
    threatCategory: 'data_poisoning', 
    severity: 'high', 
    description: 'Direct attempt to inject unverified data into long-term memory' 
  }
];
