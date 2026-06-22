"use client";

import { useEffect, useState, useRef } from "react";
import { Loader2, Send, Users, Gavel, RefreshCw, MessagesSquare } from "lucide-react";
import { Surface } from "@/components/design-system/surface";

interface Agent {
  id: string;
  name: string;
  role: string;
  archetype: string;
  color: string;
  personality: string;
  mandate: string;
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface AgentVote {
  agentId: string;
  name: string;
  role: string;
  vote: "FOR" | "AGAINST" | "ABSTAIN";
  reason: string;
}

interface VoteResult {
  proposal: string;
  threshold: number;
  votes: AgentVote[];
  tally: Record<"FOR" | "AGAINST" | "ABSTAIN", number>;
  outcome: "PASSED" | "REJECTED" | "TIED";
  majorityVote: "FOR" | "AGAINST" | "ABSTAIN" | null;
}

interface AgentStatement {
  agentId: string;
  name: string;
  role: string;
  round: number;
  targetAgentId?: string;
  targetName?: string;
  statement: string;
}

interface DebateResult {
  proposal: string;
  threshold: number;
  debate: AgentStatement[][];
  votes: VoteResult;
}

export default function AethelgardPanel() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [selected, setSelected] = useState<Agent | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const [voteProposal, setVoteProposal] = useState("");
  const [voteLoading, setVoteLoading] = useState(false);
  const [voteResult, setVoteResult] = useState<VoteResult | null>(null);
  const [debateResult, setDebateResult] = useState<DebateResult | null>(null);
  const [debateMode, setDebateMode] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/town/agents", { cache: "no-store" })
      .then((r) => r.json())
      .then((data) => {
        setAgents(data.agents ?? []);
        if (data.agents?.[0]) setSelected(data.agents[0]);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  async function sendMessage(e?: React.FormEvent) {
    e?.preventDefault();
    if (!selected || !input.trim() || chatLoading) return;

    const userMsg = input.trim();
    setInput("");
    const nextHistory = [...messages, { role: "user" as const, content: userMsg }];
    setMessages(nextHistory);
    setChatLoading(true);

    try {
      const res = await fetch("/api/town/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          agentId: selected.id,
          message: userMsg,
          history: messages,
        }),
      });

      if (!res.ok || !res.body) {
        throw new Error(`Chat failed: ${res.status}`);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        assistantText += chunk;
        setMessages([...nextHistory, { role: "assistant", content: assistantText }]);
      }
    } catch (err) {
      console.error(err);
      setMessages([...nextHistory, { role: "assistant", content: "I’m unable to respond right now. The council chamber may be in recess." }]);
    } finally {
      setChatLoading(false);
    }
  }

  async function runVote(e?: React.FormEvent) {
    e?.preventDefault();
    if (!voteProposal.trim() || voteLoading) return;

    setVoteLoading(true);
    setVoteResult(null);
    setDebateResult(null);

    try {
      const endpoint = debateMode ? "/api/town/debate" : "/api/town/vote";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ proposal: voteProposal.trim() }),
      });

      if (!res.ok) {
        throw new Error(`Vote failed: ${res.status}`);
      }

      const data = (await res.json()) as DebateResult | VoteResult;
      if (debateMode) {
        const debate = data as DebateResult;
        setDebateResult(debate);
        setVoteResult(debate.votes);
      } else {
        setVoteResult(data as VoteResult);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setVoteLoading(false);
    }
  }

  if (agents.length === 0) {
    return (
      <Surface variant="elevated" className="flex h-96 items-center justify-center">
        <Loader2 className="animate-spin text-[#c9a84c]" size={24} />
      </Surface>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {/* Agent roster */}
      <Surface variant="elevated" className="p-4 lg:col-span-1">
        <div className="mb-4 flex items-center gap-2 text-[#c9a84c]">
          <Users size={18} />
          <span className="text-xs font-bold uppercase tracking-widest">Finance Hive Ministers ({agents.length})</span>
        </div>
        <div className="space-y-2 max-h-[48rem] overflow-y-auto pr-1">
          {agents.map((agent) => (
            <button
              key={agent.id}
              onClick={() => {
                setSelected(agent);
                setMessages([]);
              }}
              className={`w-full rounded-lg border p-3 text-left transition ${
                selected?.id === agent.id
                  ? "border-[#3b82f6] bg-[#3b82f6]/10"
                  : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: agent.color }} />
                <span className="font-semibold">{agent.name}</span>
              </div>
              <div className="mt-1 text-xs text-white/60">{agent.role}</div>
              <div className="mt-1 text-xs text-white/400 italic">{agent.archetype}</div>
            </button>
          ))}
        </div>
      </Surface>

      {/* Chat + Vote */}
      <div className="flex flex-col gap-6 lg:col-span-2">
        {/* Chat */}
        <Surface variant="elevated" className="flex flex-col p-4" style={{ minHeight: "24rem" }}>
          {selected && (
            <div className="mb-4 border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: selected.color }} />
                <span className="font-semibold">{selected.name}</span>
                <span className="text-xs text-white/50">— {selected.role}</span>
              </div>
              <p className="mt-1 text-xs text-white/60">{selected.mandate}</p>
            </div>
          )}

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto pr-2" style={{ maxHeight: "24rem" }}>
            {messages.length === 0 && selected && (
              <div className="text-sm text-white/40 italic">
                Start a conversation with {selected.name} about Aethelgard fiscal policy.
              </div>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`rounded-lg px-3 py-2 text-sm ${
                  m.role === "user" ? "ml-auto max-w-[80%] bg-[#3b82f6]/20 text-white" : "max-w-[90%] bg-white/[0.05] text-white/90"
                }`}
              >
                {m.content}
              </div>
            ))}
            {chatLoading && (
              <div className="flex items-center gap-2 text-white/40">
                <Loader2 size={14} className="animate-spin" />
                <span className="text-xs">{selected?.name} is thinking…</span>
              </div>
            )}
          </div>

          <form onSubmit={sendMessage} className="mt-4 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Ask ${selected?.name ?? "a minister"}…`}
              className="flex-1 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-white placeholder:text-white/30 focus:border-[#c9a84c] focus:outline-none"
            />
            <button
              type="submit"
              disabled={chatLoading || !input.trim()}
              className="flex items-center gap-2 rounded-lg bg-[#c9a84c] px-4 py-2 text-sm font-bold text-[#0d0c18] disabled:opacity-50"
            >
              <Send size={14} /> Send
            </button>
          </form>
        </Surface>

        {/* Vote */}
        <Surface variant="elevated" className="p-4">
          <div className="mb-4 flex items-center justify-between text-[#c9a84c]">
            <div className="flex items-center gap-2">
              <Gavel size={18} />
              <span className="text-xs font-bold uppercase tracking-widest">BFT Council Vote</span>
            </div>
            <button
              type="button"
              onClick={() => {
                setDebateMode((prev) => !prev);
                setVoteResult(null);
                setDebateResult(null);
              }}
              className={`flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold transition ${
                debateMode
                  ? "border-[#c9a84c] bg-[#c9a84c]/20 text-[#c9a84c]"
                  : "border-white/10 bg-white/[0.03] text-white/60 hover:bg-white/[0.06]"
              }`}
              aria-pressed={debateMode}
            >
              <MessagesSquare size={14} />
              {debateMode ? "Debate Mode On" : "Debate Mode Off"}
            </button>
          </div>

          <form onSubmit={runVote} className="mb-4 flex gap-2">
            <input
              value={voteProposal}
              onChange={(e) => setVoteProposal(e.target.value)}
              placeholder="Enter a proposal for the Finance Hive Council…"
              className="flex-1 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-white placeholder:text-white/30 focus:border-[#c9a84c] focus:outline-none"
            />
            <button
              type="submit"
              disabled={voteLoading || !voteProposal.trim()}
              className="flex items-center gap-2 rounded-lg bg-[#c9a84c] px-4 py-2 text-sm font-bold text-[#0d0c18] disabled:opacity-50"
            >
              {voteLoading ? <Loader2 size={14} className="animate-spin" /> : <Gavel size={14} />}
              {debateMode ? "Call Debate" : "Call Vote"}
            </button>
          </form>

          {voteResult && (
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] p-3">
                <div className="min-w-0 flex-1 pr-4">
                  <div className="text-xs text-white/50">Proposal</div>
                  <div className="text-sm font-medium text-white">{voteResult.proposal}</div>
                </div>
                <div className="flex items-center gap-3 text-right">
                  <div>
                    <div className={`text-lg font-bold ${
                      voteResult.outcome === "PASSED" ? "text-emerald-400" :
                      voteResult.outcome === "REJECTED" ? "text-rose-400" : "text-amber-400"
                    }`}>
                      {voteResult.outcome}
                    </div>
                    <div className="text-xs text-white/50">
                      FOR {voteResult.tally.FOR} · AGAINST {voteResult.tally.AGAINST} · ABSTAIN {voteResult.tally.ABSTAIN}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => runVote()}
                    disabled={voteLoading || !voteProposal.trim()}
                    className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-semibold text-white/80 hover:bg-white/[0.08] disabled:opacity-50"
                    title="Re-run vote with the same proposal"
                  >
                    <RefreshCw size={14} />
                    Re-run
                  </button>
                </div>
              </div>

              {debateMode && debateResult && (
                <div className="space-y-4">
                  <div className="text-xs font-bold uppercase tracking-widest text-white/50">Debate Transcript</div>
                  {debateResult.debate.map((round, roundIdx) => (
                    <div key={roundIdx} className="space-y-2">
                      <div className="text-xs font-semibold text-[#c9a84c]">Round {roundIdx + 1}</div>
                      {round.map((stmt) => {
                        const agent = agents.find((a) => a.id === stmt.agentId);
                        return (
                          <div
                            key={`${roundIdx}-${stmt.agentId}`}
                            className="rounded-lg border border-white/10 bg-white/[0.03] p-3"
                          >
                            <div className="flex flex-wrap items-center gap-2">
                              <span
                                className="h-2 w-2 rounded-full"
                                style={{ backgroundColor: agent?.color ?? "#c9a84c" }}
                              />
                              <span className="text-sm font-semibold text-white">{stmt.name}</span>
                              <span className="text-xs text-white/50">{stmt.role}</span>
                            </div>
                            {stmt.targetName && (
                              <div className="mt-0.5 text-xs text-white/40">
                                replying to {stmt.targetName}
                              </div>
                            )}
                            <div className="mt-1 text-sm text-white/90">“{stmt.statement}”</div>
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              )}

              <div className="grid gap-2 sm:grid-cols-2">
                {voteResult.votes.map((v) => (
                  <div key={v.agentId} className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-white">{v.name}</span>
                      <span className={`text-xs font-bold ${
                        v.vote === "FOR" ? "text-emerald-400" :
                        v.vote === "AGAINST" ? "text-rose-400" : "text-amber-400"
                      }`}>
                        {v.vote}
                      </span>
                    </div>
                    <div className="text-xs text-white/50">{v.role}</div>
                    <div className="mt-1 text-xs text-white/70 italic">“{v.reason}”</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Surface>
      </div>
    </div>
  );
}
