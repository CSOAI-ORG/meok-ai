"use client";

/**
 * QuickChat — Phase 4.11 Progressive Disclosure
 *
 * Inline streaming chat widget for the dashboard overview.
 * Users can get a real response in <60 seconds without navigating away.
 * Shows example prompts when empty. Switches to answer on submit.
 *
 * "The moment they get a thoughtful response, they're hooked."
 */

import { useState, useRef, useEffect } from "react";
import { Sparkles, RotateCcw } from "lucide-react";
import { ExamplePrompts } from "@/components/example-prompts";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3100";
const GOLD = "#c9a84c";

function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("meok_token");
}

// ─── Thinking indicator ───────────────────────────────────────────
function ThinkingDots() {
  return (
    <div className="flex items-center gap-1 py-1" aria-label="MEOK is thinking">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full"
          style={{
            background: GOLD,
            opacity: 0.7,
            animation: `thinkingPulse 1.2s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes thinkingPulse {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.35; }
          40%            { transform: scale(1);   opacity: 0.9;  }
        }
      `}</style>
    </div>
  );
}

// ─── Response bubble ──────────────────────────────────────────────
function ResponseBubble({
  text,
  streaming,
  onClear,
}: {
  text: string;
  streaming: boolean;
  onClear: () => void;
}) {
  return (
    <div
      className="rounded-xl px-4 py-3.5 text-sm leading-relaxed"
      style={{
        background: "rgba(201,168,76,0.05)",
        borderLeft: `3px solid ${GOLD}`,
        color: "#f5f0e8",
        animation: "fadeInUp 0.3s ease-out both",
      }}
    >
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
      `}</style>
      <p className="whitespace-pre-wrap">
        {text}
        {streaming && (
          <span
            className="inline-block w-0.5 h-4 ml-0.5 rounded-sm align-middle"
            style={{
              background: GOLD,
              opacity: 0.8,
              animation: "cursorBlink 0.8s step-end infinite",
            }}
          />
        )}
        <style>{`
          @keyframes cursorBlink {
            0%, 100% { opacity: 0.8; }
            50%      { opacity: 0;   }
          }
        `}</style>
      </p>
      {!streaming && (
        <button
          onClick={onClear}
          className="mt-3 flex items-center gap-1.5 text-xs transition-colors"
          style={{ color: "rgba(255,255,255,0.3)" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.6)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.3)"; }}
        >
          <RotateCcw className="w-3 h-3" />
          Ask something else
        </button>
      )}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────

interface QuickChatProps {
  placeholder?: string;
}

export function QuickChat({ placeholder = "What's on your mind?" }: QuickChatProps) {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [thinking, setThinking] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const responseRef = useRef<HTMLDivElement>(null);

  const submit = async (text?: string) => {
    const msg = text ?? input.trim();
    if (!msg || streaming) return;

    setInput(msg);
    setResponse("");
    setDone(false);
    setError(null);
    setThinking(true);
    setStreaming(false);

    try {
      const token = getToken();
      const res = await fetch(`${API_URL}/chat/stream`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ message: msg }),
      });

      if (!res.ok) throw new Error(`Server error (${res.status})`);
      if (!res.body) throw new Error("No response body");

      setThinking(false);
      setStreaming(true);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done: readerDone, value } = await reader.read();
        if (readerDone) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";
        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          try {
            const json = JSON.parse(line.slice(6));
            if (json.event === "token" && json.content) {
              setResponse((r) => r + json.content);
            }
            if (json.event === "done") {
              setDone(true);
            }
          } catch { /* ignore parse errors */ }
        }
      }
      setDone(true);
    } catch (e) {
      setError("Something went wrong. Try again.");
      console.error(e);
    } finally {
      setThinking(false);
      setStreaming(false);
    }
  };

  const reset = () => {
    setInput("");
    setResponse("");
    setDone(false);
    setError(null);
    setThinking(false);
    setTimeout(() => textareaRef.current?.focus(), 100);
  };

  // Auto-resize textarea on input
  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const ta = e.currentTarget;
    ta.style.height = "auto";
    ta.style.height = `${Math.min(ta.scrollHeight, 140)}px`;
  };

  // Sync resize when input state changes from external sources (e.g. example prompt click)
  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = `${Math.min(ta.scrollHeight, 140)}px`;
  }, [input]);

  // Scroll response into view
  useEffect(() => {
    if (response || thinking) {
      responseRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [response, thinking]);

  const hasActivity = response || thinking || streaming || error;
  const showPrompts = !hasActivity && !done;

  return (
    <div className="space-y-4">
      {/* Conversation area */}
      {hasActivity && (
        <div ref={responseRef} className="space-y-3">
          {/* User message */}
          <div className="flex justify-end">
            <div
              className="max-w-[82%] rounded-2xl rounded-tr-md px-4 py-2.5 text-sm text-white/90"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              {input}
            </div>
          </div>

          {/* AI response area */}
          <div className="flex items-start gap-2.5">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ background: `${GOLD}18`, border: `1px solid ${GOLD}35` }}
            >
              <Sparkles className="w-3.5 h-3.5" style={{ color: GOLD }} />
            </div>
            <div className="flex-1 min-w-0">
              {error ? (
                <p
                  className="text-sm px-4 py-3 rounded-xl"
                  style={{
                    color: "#fbbf24",
                    background: "rgba(251,191,36,0.06)",
                    border: "1px solid rgba(251,191,36,0.2)",
                  }}
                >
                  {error}
                </p>
              ) : thinking ? (
                <ThinkingDots />
              ) : (
                <ResponseBubble text={response} streaming={streaming} onClear={reset} />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Example prompts */}
      {showPrompts && (
        <ExamplePrompts onSelect={(text) => submit(text)} compact />
      )}

      {/* Input form — shown when idle or after done */}
      {(showPrompts || done || error) && (
        <form
          onSubmit={(e) => { e.preventDefault(); submit(); }}
          className="flex gap-2 items-end"
        >
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onInput={handleInput}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                submit();
              }
            }}
            placeholder={placeholder}
            rows={1}
            disabled={streaming || thinking}
            className="flex-1 resize-none rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors disabled:opacity-50"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              caretColor: GOLD,
            }}
            onFocus={(e) => { e.currentTarget.style.borderColor = `${GOLD}50`; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)"; }}
          />
          <button
            type="submit"
            disabled={!input.trim() || streaming || thinking}
            className="h-10 px-4 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
            style={{
              background: `${GOLD}20`,
              border: `1px solid ${GOLD}40`,
              color: GOLD,
            }}
            onMouseEnter={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              if (!btn.disabled) btn.style.background = `${GOLD}30`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = `${GOLD}20`;
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Ask MEOK
          </button>
        </form>
      )}
    </div>
  );
}
