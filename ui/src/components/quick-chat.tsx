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
import { Send, Sparkles, RotateCcw } from "lucide-react";
import { ExamplePrompts } from "@/components/example-prompts";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3100";

function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("meok_token");
}

export function QuickChat() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [streaming, setStreaming] = useState(false);
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
    setStreaming(true);

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

      if (!res.ok) throw new Error(`Error ${res.status}`);
      if (!res.body) throw new Error("No response body");

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
          } catch {
            // ignore parse errors
          }
        }
      }
      setDone(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setStreaming(false);
    }
  };

  const reset = () => {
    setInput("");
    setResponse("");
    setDone(false);
    setError(null);
    setTimeout(() => textareaRef.current?.focus(), 100);
  };

  // Auto-resize textarea
  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = `${Math.min(ta.scrollHeight, 120)}px`;
  }, [input]);

  // Scroll response into view
  useEffect(() => {
    if (response) {
      responseRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [response]);

  const showPrompts = !response && !streaming && !error;

  return (
    <div className="space-y-4">
      {/* Response area */}
      {(response || streaming || error) && (
        <div ref={responseRef} className="space-y-3">
          {/* User message */}
          <div className="flex justify-end">
            <div className="max-w-[80%] bg-cyan-500/15 border border-cyan-500/20 rounded-2xl rounded-tr-md px-4 py-2.5 text-sm text-white/90">
              {input}
            </div>
          </div>

          {/* AI response */}
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            </div>
            <div className="flex-1 min-w-0">
              {error ? (
                <p className="text-orange-400/80 text-sm">{error}</p>
              ) : (
                <p className="text-sm text-white/80 leading-relaxed whitespace-pre-wrap">
                  {response}
                  {streaming && (
                    <span className="inline-block w-1 h-4 bg-cyan-400/70 ml-0.5 animate-pulse rounded-sm" />
                  )}
                </p>
              )}
              {done && (
                <button
                  onClick={reset}
                  className="mt-3 flex items-center gap-1.5 text-xs text-white/30 hover:text-white/60 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  Ask something else
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Example prompts when no conversation */}
      {showPrompts && (
        <ExamplePrompts onSelect={(text) => submit(text)} compact />
      )}

      {/* Input */}
      {showPrompts || done ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
          className="flex gap-2 items-end"
        >
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                submit();
              }
            }}
            placeholder="What's on your mind?"
            rows={1}
            disabled={streaming}
            className="flex-1 resize-none bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-cyan-500/40 transition-colors disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!input.trim() || streaming}
            className="w-10 h-10 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
          >
            <Send className="w-4 h-4 text-cyan-400" />
          </button>
        </form>
      ) : null}
    </div>
  );
}
