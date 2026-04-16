"use client";

/**
 * MEOK Chat — Primary Companion Interface
 *
 * Full-screen, immersive chat experience.
 * Dark theme, streaming responses, persistent history, voice input.
 */

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { useChat } from "@ai-sdk/react";
import { TextStreamChatTransport } from "ai";
import type { UIMessage } from "ai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import {
  Surface,
  GlowText,
  IconOrb,
} from "@/components/design-system";
import {
  Send,
  Mic,
  MicOff,
  Menu,
  X,
  Search,
  Plus,
  Settings,
  Sparkles,
  Crown,
  Shield,
  Gamepad2,
  Briefcase,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";
import { startListening, stopListening, isVoiceSupported } from "@/lib/voice";
import { getCharacter } from "@/lib/characters";

// ─── Tokens ──────────────────────────────────────────────────────
const GOLD = "#c9a84c";
const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const CREAM = "#f5f0e8";

// ─── Types ───────────────────────────────────────────────────────
type ChatMode = "companion" | "guardian" | "gaming" | "work" | "sovereign";

interface Conversation {
  id: string;
  companion_id: string;
  title: string;
  message_count: number;
  last_message: string | null;
  updated_at: string;
}

interface SovereignMeta {
  model?: string;
  care_score?: number;
  latency?: number;
  emotion?: string;
  stageName?: string;
}

// ─── Helpers ─────────────────────────────────────────────────────
function formatTime(d: string | Date): string {
  const date = typeof d === "string" ? new Date(d) : d;
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });
}

function formatDateGroup(d: string | Date): string {
  const date = typeof d === "string" ? new Date(d) : d;
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return "Previous 7 days";
  if (days < 30) return "Previous 30 days";
  return date.toLocaleDateString("en-GB", { month: "long", year: "numeric" });
}

function getModeConfig(mode: ChatMode) {
  const configs: Record<ChatMode, { label: string; icon: React.ElementType; companionId: string; color: string }> = {
    companion: { label: "Companion", icon: Sparkles, companionId: "aria", color: GOLD },
    guardian: { label: "Guardian", icon: Shield, companionId: "guardian", color: "#2d9b8a" },
    gaming: { label: "Gaming", icon: Gamepad2, companionId: "ralph", color: "#e07340" },
    work: { label: "Work", icon: Briefcase, companionId: "sov3", color: "#60a5fa" },
    sovereign: { label: "Sovereign", icon: Crown, companionId: "sovereign", color: "#a78bfa" },
  };
  return configs[mode];
}

function getQuickPrompts(): string[] {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) {
    return [
      "Good morning — what should I focus on today?",
      "Help me plan my day",
      "Tell me something inspiring",
    ];
  }
  if (hour >= 12 && hour < 17) {
    return [
      "I need help thinking through something",
      "Tell me something I don't know",
      "I could use a creative boost",
    ];
  }
  if (hour >= 17 && hour < 22) {
    return [
      "How was your day?",
      "Help me unwind",
      "I want to reflect on something",
    ];
  }
  return [
    "I can't sleep",
    "Tell me something calming",
    "Help me wind down",
  ];
}

function getMessageText(msg: UIMessage): string {
  return msg.parts
    .filter((p): p is { type: "text"; text: string } => p.type === "text")
    .map((p) => p.text)
    .join("");
}

// ─── Sub-components ──────────────────────────────────────────────

function ThinkingDots() {
  return (
    <div className="flex items-center gap-1.5 py-2 px-1">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-2 h-2 rounded-full"
          style={{
            background: GOLD,
            opacity: 0.6,
            animation: `thinkingPulse 1.4s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

function ModeSwitcher({ mode, onChange }: { mode: ChatMode; onChange: (m: ChatMode) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const active = getModeConfig(mode);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const modes: ChatMode[] = ["companion", "guardian", "gaming", "work", "sovereign"];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all hover:scale-[1.02]"
        style={{
          background: `${active.color}15`,
          borderColor: `${active.color}40`,
          color: active.color,
        }}
      >
        <active.icon className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">{active.label}</span>
        <span className="sm:hidden">{active.label.slice(0, 3)}</span>
        <MoreHorizontal className="w-3 h-3 opacity-60" />
      </button>
      {open && (
        <div
          className="absolute top-full left-0 mt-2 min-w-[10rem] rounded-xl border shadow-xl z-50 overflow-hidden"
          style={{ background: SURFACE, borderColor: "rgba(255,255,255,0.08)" }}
        >
          {modes.map((m) => {
            const cfg = getModeConfig(m);
            const isActive = m === mode;
            return (
              <button
                key={m}
                onClick={() => {
                  onChange(m);
                  setOpen(false);
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2.5 text-xs font-medium transition-colors hover:bg-white/5"
                style={{ color: isActive ? cfg.color : "rgba(255,255,255,0.7)" }}
              >
                <cfg.icon className="w-3.5 h-3.5" style={{ color: cfg.color }} />
                {cfg.label}
                {isActive && <span className="ml-auto text-[10px] opacity-60">●</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function CompanionAvatar({
  mode,
  reacting,
  size = 40,
}: {
  mode: ChatMode;
  reacting: boolean;
  size?: number;
}) {
  const cfg = getModeConfig(mode);
  return (
    <div
      className="relative flex items-center justify-center rounded-full"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${cfg.color}40, ${cfg.color}20)`,
        border: `1.5px solid ${cfg.color}60`,
        boxShadow: reacting ? `0 0 24px 6px ${cfg.color}50` : `0 0 0 0 transparent`,
        transition: "box-shadow 0.4s ease",
      }}
    >
      <cfg.icon className="w-5 h-5" style={{ color: cfg.color }} />
      {reacting && (
        <span
          className="absolute inset-[-6px] rounded-full pointer-events-none"
          style={{
            border: `1.5px solid ${cfg.color}40`,
            animation: "avatarPulse 1.6s ease-out infinite",
          }}
        />
      )}
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────
export default function ChatPage() {
  const router = useRouter();
  const { user, isLoaded } = useUser();
  const [mode, setMode] = useState<ChatMode>("companion");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loadingConversations, setLoadingConversations] = useState(false);
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null);
  const [sovereignMeta, setSovereignMeta] = useState<SovereignMeta | null>(null);
  const [avatarReacting, setAvatarReacting] = useState(false);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState("");
  const [userScrolledUp, setUserScrolledUp] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const modeConfig = getModeConfig(mode);

  // Auth guard
  useEffect(() => {
    if (isLoaded && !user) {
      router.replace("/login");
    }
  }, [isLoaded, user, router]);

  // Fetch conversations
  useEffect(() => {
    async function load() {
      setLoadingConversations(true);
      try {
        const res = await fetch("/api/user/conversations");
        if (res.ok) {
          const data = await res.json();
          setConversations(data.conversations || []);
        }
      } catch (e) {
        console.error("[chat] load conversations failed:", e);
      } finally {
        setLoadingConversations(false);
      }
    }
    load();
  }, []);

  // Custom fetch to extract sovereign metadata
  const customFetch = useCallback(
    async (input: RequestInfo | URL, init?: RequestInit) => {
      const res = await fetch(input, init);
      const care = res.headers.get("X-MEOK-CareScore");
      const model = res.headers.get("X-MEOK-Model");
      const emotion = res.headers.get("X-MEOK-Emotion");
      const stage = res.headers.get("X-MEOK-StageName");
      if (care || model) {
        setSovereignMeta((prev) => ({
          ...prev,
          care_score: care ? parseInt(care, 10) : prev?.care_score,
          model: model ?? prev?.model,
          emotion: emotion ?? prev?.emotion,
          stageName: stage ?? prev?.stageName,
        }));
      }
      return res;
    },
    []
  );

  const {
    messages,
    sendMessage,
    status,
    stop,
    setMessages,
  } = useChat({
    transport: new TextStreamChatTransport({
      api: "/api/chat",
      body: {
        companionId: modeConfig.companionId,
        temperature: 0.7,
      },
      fetch: customFetch,
    }),
  });

  const isStreaming = status === "streaming" || status === "submitted";

  // Avatar reaction on new assistant content
  useEffect(() => {
    if (isStreaming) {
      setAvatarReacting(true);
    } else {
      const t = setTimeout(() => setAvatarReacting(false), 800);
      return () => clearTimeout(t);
    }
  }, [isStreaming]);

  // Auto-scroll
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;
    function onScroll() {
      const atBottom = container!.scrollHeight - container!.scrollTop - container!.clientHeight < 80;
      setUserScrolledUp(!atBottom);
    }
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!userScrolledUp) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [messages, userScrolledUp]);

  // Textarea auto-resize
  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = `${Math.min(ta.scrollHeight, 160)}px`;
  }, [input]);

  // Voice transcript flush
  useEffect(() => {
    if (voiceTranscript) {
      setInput((prev) => prev + (prev ? " " : "") + voiceTranscript);
      setVoiceTranscript("");
    }
  }, [voiceTranscript]);

  const handleSend = useCallback(() => {
    const text = input.trim();
    if (!text || isStreaming) return;
    sendMessage({ text });
    setInput("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";
  }, [input, isStreaming, sendMessage]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  const toggleVoice = useCallback(() => {
    if (!isVoiceSupported()) {
      alert("Voice input not supported in this browser");
      return;
    }
    if (isListening) {
      stopListening();
      setIsListening(false);
    } else {
      setIsListening(true);
      startListening(
        (result) => {
          if (result.isFinal) {
            setVoiceTranscript(result.transcript);
            setIsListening(false);
          }
        },
        { continuous: false, language: "en-GB" }
      );
    }
  }, [isListening]);

  const handleNewConversation = useCallback(() => {
    setCurrentConversationId(null);
    setMessages([]);
    setInput("");
    setSidebarOpen(false);
  }, [setMessages]);

  const handleLoadConversation = useCallback(
    async (id: string) => {
      setCurrentConversationId(id);
      setSidebarOpen(false);
      try {
        const res = await fetch(`/api/user/conversations/messages?conversation_id=${id}`);
        if (res.ok) {
          const data = await res.json();
          const msgs = (data.messages || []).map((m: { role: string; content: string }) => ({
            id: crypto.randomUUID(),
            role: m.role as "user" | "assistant",
            content: m.content,
            parts: [{ type: "text" as const, text: m.content }],
            createdAt: new Date(),
          }));
          setMessages(msgs);
        }
      } catch (e) {
        console.error("[chat] load messages failed:", e);
      }
    },
    [setMessages]
  );

  // Filtered & grouped conversations
  const filteredConversations = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return conversations
      .filter((c) => !q || c.title.toLowerCase().includes(q))
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
  }, [conversations, searchQuery]);

  const groupedConversations = useMemo(() => {
    const groups: Record<string, Conversation[]> = {};
    for (const c of filteredConversations) {
      const g = formatDateGroup(c.updated_at);
      groups[g] = groups[g] || [];
      groups[g].push(c);
    }
    return groups;
  }, [filteredConversations]);

  const hasMessages = messages.length > 0;
  const quickPrompts = getQuickPrompts();

  if (!isLoaded) {
    return (
      <div className="h-[100dvh] w-full flex items-center justify-center" style={{ background: DEEP }}>
        <div className="flex flex-col items-center gap-3">
          <div
            className="w-10 h-10 rounded-full border-2 animate-spin"
            style={{ borderColor: `${GOLD}40`, borderTopColor: GOLD }}
          />
          <span className="text-xs text-white/40">Loading…</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-[100dvh] w-full overflow-hidden" style={{ background: DEEP, color: CREAM }}>
      <style>{`
        @keyframes thinkingPulse {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.3; }
          40% { transform: scale(1); opacity: 0.9; }
        }
        @keyframes avatarPulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* ── Mobile Sidebar Drawer ── */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ── Sidebar ── */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50 flex flex-col
          transition-transform duration-300 ease-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0 lg:hidden"}
        `}
        style={{
          width: 280,
          background: SURFACE,
          borderRight: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.07]">
          <GlowText variant="gold" as="span" className="text-xs font-bold uppercase tracking-widest">
            History
          </GlowText>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-1.5 rounded-lg hover:bg-white/5 transition-colors lg:hidden"
            aria-label="Close sidebar"
          >
            <X className="w-4 h-4 text-white/50" />
          </button>
        </div>

        {/* Search */}
        <div className="px-3 py-3">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/[0.08] bg-white/[0.03]">
            <Search className="w-3.5 h-3.5 text-white/30" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search conversations"
              className="flex-1 bg-transparent text-xs text-white/80 placeholder:text-white/30 focus:outline-none"
            />
          </div>
        </div>

        {/* New Chat */}
        <div className="px-3 pb-2">
          <button
            onClick={handleNewConversation}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold border transition-all hover:scale-[1.01]"
            style={{ background: `${GOLD}18`, borderColor: `${GOLD}35`, color: GOLD }}
          >
            <Plus className="w-3.5 h-3.5" />
            New Chat
          </button>
        </div>

        {/* Conversation List */}
        <div className="flex-1 overflow-y-auto px-3 py-2 space-y-4">
          {loadingConversations ? (
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-12 rounded-lg animate-shimmer" />
              ))}
            </div>
          ) : Object.keys(groupedConversations).length === 0 ? (
            <div className="text-center text-xs text-white/30 py-6">
              No conversations yet
            </div>
          ) : (
            Object.entries(groupedConversations).map(([group, items]) => (
              <div key={group}>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/25 mb-2 px-1">
                  {group}
                </p>
                <div className="space-y-1">
                  {items.map((conv) => {
                    const active = currentConversationId === conv.id;
                    const char = getCharacter(conv.companion_id);
                    return (
                      <button
                        key={conv.id}
                        onClick={() => handleLoadConversation(conv.id)}
                        className="w-full text-left px-3 py-2.5 rounded-xl transition-all text-xs"
                        style={{
                          background: active ? `${GOLD}12` : "transparent",
                          borderLeft: active ? `2px solid ${GOLD}` : "2px solid transparent",
                          color: active ? CREAM : "rgba(255,255,255,0.65)",
                        }}
                      >
                        <div className="font-medium truncate">{conv.title}</div>
                        <div className="flex items-center gap-1.5 mt-0.5 text-white/30">
                          <span>{char?.name ?? conv.companion_id}</span>
                          <span>·</span>
                          <span>{conv.message_count} msgs</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Sidebar Footer */}
        <div className="p-3 border-t border-white/[0.07]">
          <Link
            href="/dashboard/settings"
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-white/50 hover:text-white/80 hover:bg-white/5 transition-colors"
          >
            <Settings className="w-3.5 h-3.5" />
            Settings
          </Link>
        </div>
      </aside>

      {/* ── Main Chat Area ── */}
      <main className="flex-1 flex flex-col min-w-0 relative">
        {/* Top Bar */}
        <header className="flex items-center justify-between px-4 py-3 border-b border-white/[0.07] bg-[#0d0c18]/80 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-xl hover:bg-white/5 transition-colors"
              aria-label="Open sidebar"
            >
              <Menu className="w-4 h-4 text-white/60" />
            </button>
            <CompanionAvatar mode={mode} reacting={avatarReacting} size={38} />
            <div>
              <h1 className="text-sm font-semibold text-white flex items-center gap-1.5">
                {getCharacter(modeConfig.companionId)?.name ?? "MEOK"}
                {sovereignMeta?.care_score !== undefined && (
                  <span
                    className="text-[10px] px-1.5 py-0.5 rounded-full font-medium"
                    style={{
                      background:
                        sovereignMeta.care_score >= 80
                          ? "rgba(34,197,94,0.15)"
                          : sovereignMeta.care_score >= 60
                          ? `${GOLD}20`
                          : "rgba(239,68,68,0.15)",
                      color:
                        sovereignMeta.care_score >= 80
                          ? "#22c55e"
                          : sovereignMeta.care_score >= 60
                          ? GOLD
                          : "#ef4444",
                    }}
                  >
                    Care {sovereignMeta.care_score}
                  </span>
                )}
              </h1>
              <p className="text-[11px] text-white/30">
                {isStreaming ? "Writing…" : sovereignMeta?.model ? `Model · ${sovereignMeta.model}` : "Memory active"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ModeSwitcher mode={mode} onChange={setMode} />
            <Link
              href="/dashboard"
              className="hidden sm:flex items-center gap-1 text-[11px] font-medium text-white/40 hover:text-white/70 transition-colors"
            >
              Dashboard
              <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </header>

        {/* Messages */}
        <div
          ref={messagesContainerRef}
          className="flex-1 overflow-y-auto px-4 py-6 scroll-smooth"
        >
          {!hasMessages ? (
            <div className="h-full flex flex-col items-center justify-center gap-6 animate-fade-in-up">
              <div className="text-center space-y-2">
                <div className="flex justify-center mb-3">
                  <IconOrb icon={Sparkles} variant="gold" size="lg" pulse />
                </div>
                <h2 className="text-xl font-bold text-white">What&apos;s on your mind?</h2>
                <p className="text-sm text-white/40 max-w-xs mx-auto">
                  Your companion remembers everything. Ask anything.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2 max-w-md">
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => {
                      setInput(prompt);
                      sendMessage({ text: prompt });
                    }}
                    className="px-3 py-2 rounded-xl text-xs border transition-all hover:scale-[1.02] hover:border-white/20"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      borderColor: "rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto space-y-5">
              {messages.map((msg, idx) => {
                const isUser = msg.role === "user";
                const text = getMessageText(msg);
                const isLast = idx === messages.length - 1;
                return (
                  <div
                    key={msg.id}
                    className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}
                    style={{ animation: "fadeInUp 0.3s ease both" }}
                  >
                    {!isUser && (
                      <div className="flex-shrink-0 mt-0.5">
                        <CompanionAvatar mode={mode} reacting={isLast && isStreaming} size={32} />
                      </div>
                    )}
                    <div
                      className={`relative max-w-[85%] sm:max-w-[75%] text-sm leading-relaxed whitespace-pre-wrap ${
                        isUser
                          ? "rounded-2xl rounded-tr-sm px-4 py-2.5"
                          : "rounded-2xl rounded-tl-sm px-4 py-3"
                      }`}
                      style={{
                        background: isUser ? "rgba(255,255,255,0.07)" : `${GOLD}08`,
                        border: `1px solid ${isUser ? "rgba(255,255,255,0.1)" : `${GOLD}20`}`,
                        color: isUser ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.85)",
                      }}
                    >
                      {text}
                      {isLast && isStreaming && (
                        <span
                          className="inline-block w-0.5 h-4 ml-0.5 rounded-sm align-middle"
                          style={{
                            background: GOLD,
                            animation: "cursorBlink 0.9s step-end infinite",
                          }}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
              {isStreaming &&
                messages[messages.length - 1]?.role === "user" && (
                  <div className="flex gap-3" style={{ animation: "fadeInUp 0.3s ease both" }}>
                    <div className="flex-shrink-0 mt-0.5">
                      <CompanionAvatar mode={mode} reacting size={32} />
                    </div>
                    <Surface
                      variant="elevated"
                      className="px-4 py-2.5 rounded-2xl rounded-tl-sm"
                      style={{ background: `${GOLD}08`, borderColor: `${GOLD}20` }}
                    >
                      <ThinkingDots />
                    </Surface>
                  </div>
                )}
              <div ref={messagesEndRef} />
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input Bar */}
        <div className="px-4 pb-4 pt-2 bg-gradient-to-t from-[#0d0c18] to-transparent">
          <div className="max-w-3xl mx-auto">
            <Surface
              variant="elevated"
              className="flex items-end gap-2 px-3 py-3 rounded-2xl"
              style={{ background: "rgba(19,18,31,0.95)", borderColor: "rgba(255,255,255,0.08)" }}
            >
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask anything…"
                rows={1}
                disabled={isStreaming}
                className="flex-1 resize-none bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none max-h-40 py-1.5 px-1"
                style={{ caretColor: GOLD }}
              />
              <div className="flex items-center gap-1.5">
                <button
                  onClick={toggleVoice}
                  disabled={isStreaming}
                  className="p-2.5 rounded-xl transition-all disabled:opacity-30"
                  style={{
                    background: isListening ? "rgba(239,68,68,0.15)" : "rgba(255,255,255,0.05)",
                    border: `1px solid ${isListening ? "rgba(239,68,68,0.3)" : "rgba(255,255,255,0.1)"}`,
                    color: isListening ? "#ef4444" : "rgba(255,255,255,0.5)",
                  }}
                  title={isListening ? "Stop listening" : "Voice input"}
                >
                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </button>
                {isStreaming ? (
                  <button
                    onClick={stop}
                    className="p-2.5 rounded-xl transition-all"
                    style={{
                      background: "rgba(239,68,68,0.15)",
                      border: "1px solid rgba(239,68,68,0.3)",
                      color: "#ef4444",
                    }}
                    title="Stop generating"
                  >
                    <div className="w-4 h-4 rounded-sm bg-current" />
                  </button>
                ) : (
                  <button
                    onClick={handleSend}
                    disabled={!input.trim()}
                    className="p-2.5 rounded-xl transition-all disabled:opacity-30"
                    style={{
                      background: `${GOLD}20`,
                      border: `1px solid ${GOLD}40`,
                      color: GOLD,
                    }}
                    title="Send message"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                )}
              </div>
            </Surface>
            <p className="text-center text-[10px] text-white/20 mt-2">
              MEOK may make mistakes. Your conversations are governed by the Maternal Covenant.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
