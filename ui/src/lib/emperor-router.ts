
import { RAGUARD_PATTERNS } from './guardian/intelligence/raguard-patterns';
import generalsData from './generals_registry.json';

/**
 * MEOKCLAW Emperor Router
 * 
 * The intelligent brain of the OS. Routes user queries to the optimal 
 * MoE General and manages the BFT consensus cycle.
 */

export interface General {
  id: string;
  name: string;
  domain: string;
  moe_mix: string[];
  capabilities: string[];
}

export class EmperorRouter {
  private generals: General[];

  constructor() {
    this.generals = generalsData.generals as General[];
  }

  /**
   * Identifies the best General for a given task.
   */
  public route(query: string): General {
    const q = query.toLowerCase();
    
    // Simple heuristic-based routing (to be upgraded to semantic routing)
    if (q.includes('land') || q.includes('soil') || q.includes('drainage')) {
      return this.findGeneral('druid');
    }
    if (q.includes('mortar') || q.includes('building') || q.includes('masonry')) {
      return this.findGeneral('stonemason');
    }
    if (q.includes('water') || q.includes('fish') || q.includes('ph')) {
      return this.findGeneral('hydrologist');
    }
    if (q.includes('security') || q.includes('hack') || q.includes('leak')) {
      return this.findGeneral('guardian');
    }
    if (q.includes('orbit') || q.includes('satellite') || q.includes('tle')) {
      return this.findGeneral('navigator');
    }
    if (q.includes('money') || q.includes('trade') || q.includes('wallet')) {
      return this.findGeneral('banker');
    }
    if (q.includes('truck') || q.includes('fleet') || q.includes('waste')) {
      return this.findGeneral('grabhire');
    }

    // Default to the Emperor for general orchestration
    return this.findGeneral('emperor');
  }

  /**
   * Applies Rory Sutherland's "Economic Alchemy" filter to a proposal.
   * Prioritizes imaginative/magical solutions over purely logical ones.
   */
  public alchemyFilter(proposal: string): string {
    const alchemyKeywords = ["perception", "magic", "flower", "coconut", "irrational"];
    const lowercase = proposal.toLowerCase();
    
    if (alchemyKeywords.some(k => lowercase.includes(k))) {
      return `✨ ALCHEMICAL_REFINEMENT: ${proposal}`;
    }
    
    return proposal;
  }

  /**
   * Delegates heavy optimization tasks to the MacBook M2 Quantum Node
   * if it is active in the topology.
   */
  public async quantumDelegate(task: string): Promise<any> {
    const M2_URL = "http://m2-node.local:3111/quantum";
    
    try {
      const res = await fetch(M2_URL, {
        method: "POST",
        body: JSON.stringify({ task, qubits: 8, device: "lightning.qubit" })
      });
      return await res.json();
    } catch (e) {
      console.warn("M2 Quantum Node unreachable, falling back to M4 Classical Substrate.");
      return { status: "classical_fallback" };
    }
  }

  private findGeneral(id: string): General {
    return this.generals.find(g => g.id === id) || this.generals[0];
  }

  /**
   * Simulates the 33-seat BFT Consensus cycle.
   * Returns a signed attestation of the vote.
   */
  public async reachConsensus(general: General): Promise<{
    votes: number;
    quorum: boolean;
    attestation: string;
  }> {
    // In production, this would poll the 33 logical seats (MoE/Memory/Citizen/Emperor)
    const votes = Math.floor(Math.random() * 11) + 23; // Always reach 23-33 for now
    const quorum = votes >= 23;
    
    return {
      votes,
      quorum,
      attestation: `BFT_SIG_${Math.random().toString(36).substring(7).toUpperCase()}`
    };
  }
}

export const emperor = new EmperorRouter();
