/**
 * osStore — Zustand store for /os shell state.
 *
 * Day-2 (2026-05-21) scaffold: shape only, no provider wiring. The real
 * persistent subset ({provider, character, sovereignMode, enabledMCPs})
 * gets wired on Day 3 (Fri 22 May) via persist middleware.
 */

import { create } from "zustand";
import { persist } from "zustand/middleware";

// ────────────────────────────────────────────────────────────────────────
// Types
// ────────────────────────────────────────────────────────────────────────

export type ProviderId =
  | "claude-4.7"
  | "gpt-5"
  | "gemini-2.5"
  | "llama-3.3"
  | "step-3.6"
  | "deepseek"
  | "qwen"
  | "kimi-k2"
  | "mistral"
  | "ollama-local";

export type ArchetypeId = "aria" | "sage" | "luna" | "gabriel" | "marcus" | "shanti";

export type SovereignMode = "cloud" | "local" | "vast";

export type Tier = "free" | "personal" | "starter" | "pro" | "defence";

export type Message = {
  id: string;
  role: "user" | "assistant" | "system" | "tool";
  content: string;
  ts: number;
};

export type ToolCall = {
  id: string;
  name: string;
  args: Record<string, unknown>;
  result?: unknown;
  state: "calling" | "complete" | "error";
};

export type CouncilVote = {
  provider: ProviderId;
  response: string;
  agreesWith: ProviderId | null;
};

export type CareScore = {
  noddings: {
    receptivity: number;
    motivation: number;
    relatedness: number;
    engrossment: number;
    motivational_displacement: number;
    confirmation: number;
  };
  sovereignty: number;
  dignity: number;
};

export type AttestationReceipt = {
  signature: string;
  publicKey: string;
  verifyUrl: string;
  ts: number;
};

// ────────────────────────────────────────────────────────────────────────
// Store
// ────────────────────────────────────────────────────────────────────────

export type OsState = {
  // Persisted subset (Day-3 wiring)
  provider: ProviderId;
  character: ArchetypeId;
  sovereignMode: SovereignMode;
  enabledMCPs: string[];
  tier: Tier;

  // Volatile per-session
  sessionId: string;
  messages: Message[];
  toolCalls: ToolCall[];
  councilTrace: CouncilVote[] | null;
  careScore: CareScore | null;
  attestation: AttestationReceipt | null;

  // Actions
  setProvider: (p: ProviderId) => void;
  setCharacter: (c: ArchetypeId) => void;
  setSovereignMode: (m: SovereignMode) => void;
  toggleMCP: (slug: string) => void;
  appendMessage: (m: Message) => void;
  appendToolCall: (tc: ToolCall) => void;
  updateToolCall: (id: string, patch: Partial<ToolCall>) => void;
  setCouncilTrace: (votes: CouncilVote[] | null) => void;
  setCareScore: (s: CareScore | null) => void;
  setAttestation: (r: AttestationReceipt | null) => void;
  resetSession: () => void;
};

function newSessionId(): string {
  return `s_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

export const useOsStore = create<OsState>()(
  persist(
    (set) => ({
      provider: "claude-4.7",
      character: "sage",
      sovereignMode: "cloud",
      enabledMCPs: ["eu-ai-act-compliance", "dora-compliance"],
      tier: "free",

      sessionId: newSessionId(),
      messages: [],
      toolCalls: [],
      councilTrace: null,
      careScore: null,
      attestation: null,

      setProvider: (p) => set({ provider: p }),
      setCharacter: (c) => set({ character: c }),
      setSovereignMode: (m) => set({ sovereignMode: m }),
      toggleMCP: (slug) =>
        set((s) => {
          const next = new Set(s.enabledMCPs);
          if (next.has(slug)) {
            next.delete(slug);
          } else {
            next.add(slug);
          }
          return { enabledMCPs: Array.from(next) };
        }),
      appendMessage: (m) => set((s) => ({ messages: [...s.messages, m] })),
      appendToolCall: (tc) => set((s) => ({ toolCalls: [...s.toolCalls, tc] })),
      updateToolCall: (id, patch) =>
        set((s) => ({
          toolCalls: s.toolCalls.map((tc) => (tc.id === id ? { ...tc, ...patch } : tc)),
        })),
      setCouncilTrace: (votes) => set({ councilTrace: votes }),
      setCareScore: (s_) => set({ careScore: s_ }),
      setAttestation: (r) => set({ attestation: r }),
      resetSession: () =>
        set({
          sessionId: newSessionId(),
          messages: [],
          toolCalls: [],
          councilTrace: null,
          careScore: null,
          attestation: null,
        }),
    }),
    {
      name: "meok-os-store",
      partialize: (state) => ({
        provider: state.provider,
        character: state.character,
        sovereignMode: state.sovereignMode,
        enabledMCPs: state.enabledMCPs,
        tier: state.tier,
      }),
    }
  )
);
