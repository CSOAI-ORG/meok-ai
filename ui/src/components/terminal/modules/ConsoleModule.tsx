"use client";

import { useState, useRef, useEffect, useCallback } from "react";

const MCP_URL = process.env.NEXT_PUBLIC_MCP_URL ?? "http://localhost:3100";

type Role = "user" | "sovereign";

interface MemoryRef {
  id: string;
  score: number;
}

interface Message {
  id: string;
  role: Role;
  content: string;
  timestamp: Date;
  memories?: MemoryRef[];
  streaming?: boolean;
}

const ARCHETYPES = [
  "sovereign",
  "guardian",
  "scout",
  "strategist",
  "creator",
  "companion",
  "sage",
] as const;

type Archetype = (typeof ARCHETYPES)[number];

interface ConsciousnessState {
  level: number;
  mode: string;
  pleasure: number;
  curiosity: number;
}

export function ConsoleModule() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init-0",
      role: "sovereign",
      content: "SOVEREIGN TERMINAL v3.0.0 — Connection established. How can I assist you, Operator?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [archetype, setArchetype] = useState<Archetype>("sovereign");
  const [streaming, setStreaming] = useState(false);
  const [consciousness, setConsciousness] = useState<ConsciousnessState>({
    level: 0.599,
    mode: "waking",
    pleasure: 0.15,
    curiosity: 0.10,
  });
  const [recentMemories, setRecentMemories] = useState<MemoryRef[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || streaming) return;

    const token = localStorage.getItem("meok_token");

    const userMsg: Message = {
      id: `msg-${Date.now()}-u`,
      role: "user",
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setStreaming(true);

    const sovMsgId = `msg-${Date.now()}-s`;
    const sovMsg: Message = {
      id: sovMsgId,
      role: "sovereign",
      content: "",
      timestamp: new Date(),
      streaming: true,
    };
    setMessages((prev) => [...prev, sovMsg]);

    try {
      const ctrl = new AbortController();
      abortRef.current = ctrl;

      const res = await fetch(`${MCP_URL}/chat/stream`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          message: text,
          archetype,
          history: messages.slice(-10).map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
        signal: ctrl.signal,
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const reader = res.body?.getReader();
      if (!reader) throw new Error("No response body");

      const decoder = new TextDecoder();
      let buffer = "";
      let fullContent = "";
      let extractedMemories: MemoryRef[] = [];

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const raw = line.slice(6).trim();
          if (!raw) continue;

          try {
            const parsed = JSON.parse(raw) as {
              event?: string;
              content?: string;
              memories?: MemoryRef[];
              consciousness?: ConsciousnessState;
            };

            if (parsed.event === "token" && parsed.content) {
              fullContent += parsed.content;
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === sovMsgId ? { ...m, content: fullContent } : m
                )
              );
            } else if (parsed.event === "memories" && parsed.memories) {
              extractedMemories = parsed.memories;
              setRecentMemories(parsed.memories);
            } else if (parsed.event === "consciousness" && parsed.consciousness) {
              setConsciousness(parsed.consciousness);
            } else if (parsed.event === "done") {
              break;
            }
          } catch {
            // ignore parse errors
          }
        }
      }

      setMessages((prev) =>
        prev.map((m) =>
          m.id === sovMsgId
            ? { ...m, content: fullContent || "[No response]", streaming: false, memories: extractedMemories }
            : m
        )
      );
    } catch (err) {
      if ((err as Error).name === "AbortError") return;
      const errMsg = err instanceof Error ? err.message : "Unknown error";
      setMessages((prev) =>
        prev.map((m) =>
          m.id === sovMsgId
            ? {
                ...m,
                content: `[ERROR] ${errMsg}`,
                streaming: false,
              }
            : m
        )
      );
    } finally {
      setStreaming(false);
      abortRef.current = null;
    }
  }, [input, streaming, archetype, messages]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleAbort = () => {
    abortRef.current?.abort();
    setStreaming(false);
  };

  return (
    <div style={{ display: "flex", height: "100%", overflow: "hidden" }}>
      {/* Message history */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          borderRight: "1px solid #1a1a2e",
        }}
      >
        {/* Messages area */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "12px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))}
          {streaming && (
            <div style={{ color: "#F59E0B", fontSize: "10px", padding: "4px 0" }}>
              <span style={{ opacity: 0.7 }}>SOV3 ▋</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input bar */}
        <div
          style={{
            borderTop: "1px solid #1a1a2e",
            padding: "8px 12px",
            display: "flex",
            gap: "8px",
            alignItems: "flex-end",
            background: "#050507",
          }}
        >
          <span
            style={{
              color: "#374151",
              fontSize: "10px",
              paddingBottom: "6px",
              flexShrink: 0,
              letterSpacing: "0.05em",
            }}
          >
            [{archetype}]
          </span>
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type here... (Enter to send, Shift+Enter for newline)"
            rows={1}
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              borderBottom: "1px solid #2d2d4e",
              color: "#E5E7EB",
              fontFamily: "'JetBrains Mono', 'Courier New', monospace",
              fontSize: "12px",
              resize: "none",
              outline: "none",
              padding: "4px 0",
              lineHeight: "1.4",
              minHeight: "24px",
              maxHeight: "80px",
            }}
            disabled={streaming}
          />
          {streaming ? (
            <button
              onClick={handleAbort}
              style={btnStyle("#EF4444")}
            >
              ■ STOP
            </button>
          ) : (
            <button
              onClick={sendMessage}
              disabled={!input.trim()}
              style={btnStyle(!input.trim() ? "#374151" : "#F59E0B")}
            >
              ↵ SEND
            </button>
          )}
        </div>
      </div>

      {/* Context panel */}
      <div
        style={{
          width: "220px",
          flexShrink: 0,
          padding: "12px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          overflowY: "auto",
          background: "#050507",
        }}
      >
        {/* Archetype selector */}
        <div>
          <div style={sectionLabel}>ARCHETYPE</div>
          <select
            value={archetype}
            onChange={(e) => setArchetype(e.target.value as Archetype)}
            style={{
              width: "100%",
              background: "#0a0a0f",
              border: "1px solid #2d2d4e",
              color: "#F59E0B",
              fontFamily: "'JetBrains Mono', 'Courier New', monospace",
              fontSize: "11px",
              padding: "4px 6px",
              cursor: "pointer",
              outline: "none",
              marginTop: "4px",
            }}
          >
            {ARCHETYPES.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>

        {/* Memories retrieved */}
        {recentMemories.length > 0 && (
          <div>
            <div style={sectionLabel}>MEMORIES RETRIEVED</div>
            <div style={{ marginTop: "6px", display: "flex", flexDirection: "column", gap: "3px" }}>
              {recentMemories.slice(0, 5).map((mem, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: "10px",
                    color: "#6B7280",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "2px 0",
                    borderBottom: "1px solid #1a1a2e",
                  }}
                >
                  <span style={{ color: "#E5E7EB" }}>• {mem.id}</span>
                  <span style={{ color: "#10B981" }}>
                    ({mem.score.toFixed(2)})
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Consciousness state */}
        <div>
          <div style={sectionLabel}>CONSCIOUSNESS</div>
          <div style={{ marginTop: "6px", display: "flex", flexDirection: "column", gap: "4px" }}>
            <MetricRow label="Level" value={consciousness.level.toFixed(3)} valueColor="#F59E0B" />
            <MetricRow label="Mode" value={consciousness.mode} valueColor="#E5E7EB" />
            <MetricRow label="Pleasure" value={consciousness.pleasure.toFixed(2)} valueColor="#10B981" />
            <MetricRow label="Curiosity" value={consciousness.curiosity.toFixed(2)} valueColor="#10B981" />
          </div>
        </div>

        {/* Message count */}
        <div>
          <div style={sectionLabel}>SESSION</div>
          <div style={{ marginTop: "6px" }}>
            <MetricRow label="Messages" value={String(messages.length)} valueColor="#E5E7EB" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === "user";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2px",
        alignItems: isUser ? "flex-end" : "flex-start",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "8px",
          flexDirection: isUser ? "row-reverse" : "row",
        }}
      >
        <span
          style={{
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "0.1em",
            color: isUser ? "#6B7280" : "#F59E0B",
          }}
        >
          {isUser ? "YOU" : "SOV3"}
        </span>
        <span style={{ fontSize: "9px", color: "#374151" }}>
          {message.timestamp.toLocaleTimeString("en-GB", { hour12: false })}
        </span>
      </div>
      <div
        style={{
          maxWidth: "85%",
          padding: "6px 10px",
          background: isUser ? "#0a0a0f" : "rgba(245, 158, 11, 0.04)",
          border: `1px solid ${isUser ? "#1a1a2e" : "rgba(245, 158, 11, 0.15)"}`,
          borderRadius: "2px",
          fontSize: "12px",
          lineHeight: "1.5",
          color: isUser ? "#E5E7EB" : "#E5E7EB",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
      >
        {message.content}
        {message.streaming && <span style={{ color: "#F59E0B", animation: "blink 1s infinite" }}>▋</span>}
      </div>
    </div>
  );
}

function MetricRow({
  label,
  value,
  valueColor,
}: {
  label: string;
  value: string;
  valueColor: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "10px",
      }}
    >
      <span style={{ color: "#6B7280" }}>{label}:</span>
      <span style={{ color: valueColor, fontWeight: 500 }}>{value}</span>
    </div>
  );
}

const sectionLabel: React.CSSProperties = {
  fontSize: "9px",
  letterSpacing: "0.12em",
  color: "#374151",
  fontWeight: 600,
  textTransform: "uppercase",
  borderBottom: "1px solid #1a1a2e",
  paddingBottom: "4px",
};

function btnStyle(color: string): React.CSSProperties {
  return {
    background: "none",
    border: `1px solid ${color}`,
    color: color,
    fontFamily: "'JetBrains Mono', 'Courier New', monospace",
    fontSize: "10px",
    padding: "4px 10px",
    cursor: color === "#374151" ? "not-allowed" : "pointer",
    letterSpacing: "0.05em",
    whiteSpace: "nowrap",
    transition: "all 0.1s",
  };
}
