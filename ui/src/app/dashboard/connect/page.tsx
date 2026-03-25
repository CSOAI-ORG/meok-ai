"use client";

import { useState } from "react";
import { Link2 } from "lucide-react";
import Link from "next/link";

const GOLD = "#c9a84c";

// ── Types ─────────────────────────────────────────────────────────
interface Platform {
  id: string;
  name: string;
  icon: string;
  description: string;
  authType: "oauth" | "apikey" | "guide" | "active";
  href?: string;
}

// ── Platform definitions ──────────────────────────────────────────
const PERSONAL_PLATFORMS: Platform[] = [
  { id: "gcal",    name: "Google Calendar", icon: "📅", description: "Sync events and schedule context", authType: "oauth" },
  { id: "gmail",   name: "Gmail",           icon: "📧", description: "Email context and summaries",      authType: "oauth" },
  { id: "health",  name: "Apple Health",    icon: "🍎", description: "Health and wellness data",         authType: "guide" },
  { id: "notion",  name: "Notion",          icon: "📓", description: "Notes, docs and databases",        authType: "apikey" },
  { id: "todoist", name: "Todoist",         icon: "✅", description: "Tasks and project management",     authType: "apikey" },
];

const WORK_PLATFORMS: Platform[] = [
  { id: "github",  name: "GitHub",       icon: "🐙", description: "Repos, PRs and issues",   authType: "apikey" },
  { id: "slack",   name: "Slack",        icon: "💬", description: "Messages and channels",   authType: "oauth"  },
  { id: "gdocs",   name: "Google Docs",  icon: "📄", description: "Docs and spreadsheets",   authType: "oauth"  },
  { id: "linear",  name: "Linear",       icon: "📐", description: "Issues and projects",     authType: "apikey" },
];

const GAMING_PLATFORMS: Platform[] = [
  { id: "steam",   name: "Steam",      icon: "🎮", description: "Library, playtime, reviews", authType: "apikey" },
  { id: "discord", name: "Discord",    icon: "🎧", description: "Servers and activity",       authType: "oauth"  },
  { id: "riot",    name: "Riot Games", icon: "⚔️",  description: "League, Valorant stats",    authType: "apikey" },
];

const AI_PLATFORMS: Platform[] = [
  { id: "claude",    name: "Claude (Anthropic)", icon: "🤖", description: "Your primary AI — active",        authType: "active"  },
  { id: "openai",    name: "OpenAI GPT-4o",      icon: "✨", description: "Fallback and parallel reasoning", authType: "apikey"  },
  { id: "deepseek",  name: "DeepSeek",            icon: "🔬", description: "Efficient reasoning model",       authType: "apikey"  },
  { id: "groq",      name: "Groq",                icon: "⚡", description: "Ultra-fast inference",            authType: "apikey"  },
  { id: "ollama",    name: "Ollama",              icon: "🦙", description: "Local models for privacy mode",  authType: "guide", href: "/docs/ollama" },
];

// ── Toast ─────────────────────────────────────────────────────────
function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <div
      className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 text-sm font-medium"
      style={{
        background: "#1a1a2e",
        border: `1px solid ${GOLD}40`,
        color: "rgba(255,255,255,0.85)",
        boxShadow: `0 4px 32px rgba(0,0,0,0.5), 0 0 0 1px ${GOLD}20`,
      }}
    >
      <span>🚧</span>
      <span>{message}</span>
      <button
        type="button"
        onClick={onClose}
        className="ml-2 text-white/30 hover:text-white/70 transition-colors text-base leading-none"
      >
        ✕
      </button>
    </div>
  );
}

// ── API key modal (inline) ────────────────────────────────────────
function ApiKeyModal({
  platform,
  onClose,
}: {
  platform: Platform;
  onClose: () => void;
}) {
  const [key, setKey] = useState("");

  return (
    <div className="mt-3 p-4 rounded-xl border border-white/10 bg-white/3 space-y-3">
      <p className="text-xs text-white/50">Enter your {platform.name} API key</p>
      <input
        type="password"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        placeholder="sk-..."
        className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-white/20 focus:outline-none"
        style={{ caretColor: GOLD }}
        onFocus={(e) => { e.currentTarget.style.borderColor = `${GOLD}60`; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)"; }}
        autoFocus
      />
      <div className="flex gap-2">
        <button
          type="button"
          onClick={onClose}
          className="flex-1 px-3 py-1.5 rounded text-xs text-white/40 border border-white/10"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={onClose}
          className="flex-1 px-3 py-1.5 rounded text-xs font-semibold transition-colors"
          style={{ background: `${GOLD}20`, color: GOLD, border: `1px solid ${GOLD}40` }}
        >
          Save key
        </button>
      </div>
    </div>
  );
}

// ── Platform card ─────────────────────────────────────────────────
function PlatformCard({
  platform,
  connected,
  onConnect,
  onDisconnect,
  showToast,
}: {
  platform: Platform;
  connected: boolean;
  onConnect: (id: string) => void;
  onDisconnect: (id: string) => void;
  showToast: (msg: string) => void;
}) {
  const [showApiModal, setShowApiModal] = useState(false);
  const isActive = platform.authType === "active";

  const handleConnect = () => {
    if (platform.authType === "apikey") {
      setShowApiModal(true);
      return;
    }
    if (platform.authType === "guide") {
      showToast("Connection coming in Phase 2 →");
      return;
    }
    // oauth
    showToast("Connection coming in Phase 2 →");
  };

  return (
    <div
      className="p-4 rounded-xl transition-all"
      style={{
        background: connected || isActive ? `${GOLD}08` : "rgba(255,255,255,0.04)",
        border: `1px solid ${connected || isActive ? `${GOLD}35` : "rgba(255,255,255,0.08)"}`,
      }}
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <span className="text-2xl flex-shrink-0 mt-0.5">{platform.icon}</span>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-semibold text-white">{platform.name}</span>
            {(connected || isActive) && (
              <span className="flex items-center gap-1 text-[10px] font-semibold px-1.5 py-0.5 rounded-full"
                style={{ background: "rgba(74,222,128,0.12)", color: "#4ade80", border: "1px solid rgba(74,222,128,0.25)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                {isActive ? "Active" : "Connected"}
              </span>
            )}
          </div>
          <p className="text-xs text-white/35 mt-0.5 leading-snug">{platform.description}</p>
        </div>

        {/* Action button */}
        <div className="flex-shrink-0">
          {isActive ? null : connected ? (
            <button
              type="button"
              onClick={() => onDisconnect(platform.id)}
              className="text-xs text-white/30 hover:text-red-400 transition-colors"
            >
              Disconnect
            </button>
          ) : platform.authType === "guide" ? (
            platform.href ? (
              <Link
                href={platform.href}
                className="text-xs font-medium transition-colors px-3 py-1.5 rounded-lg"
                style={{ color: GOLD, background: `${GOLD}15`, border: `1px solid ${GOLD}30` }}
              >
                Setup guide →
              </Link>
            ) : (
              <button
                type="button"
                onClick={handleConnect}
                className="text-xs font-medium transition-colors px-3 py-1.5 rounded-lg"
                style={{ color: GOLD, background: `${GOLD}15`, border: `1px solid ${GOLD}30` }}
              >
                Setup guide →
              </button>
            )
          ) : platform.authType === "apikey" ? (
            <button
              type="button"
              onClick={handleConnect}
              className="text-xs font-medium transition-colors px-3 py-1.5 rounded-lg"
              style={{ color: GOLD, background: `${GOLD}15`, border: `1px solid ${GOLD}30` }}
            >
              Add API key →
            </button>
          ) : (
            <button
              type="button"
              onClick={handleConnect}
              className="text-xs font-medium transition-colors px-3 py-1.5 rounded-lg"
              style={{ color: GOLD, background: `${GOLD}15`, border: `1px solid ${GOLD}30` }}
            >
              Connect →
            </button>
          )}
        </div>
      </div>

      {/* API key modal */}
      {showApiModal && (
        <ApiKeyModal
          platform={platform}
          onClose={() => {
            setShowApiModal(false);
            onConnect(platform.id);
          }}
        />
      )}
    </div>
  );
}

// ── Category section ──────────────────────────────────────────────
function PlatformCategory({
  title,
  subtitle,
  platforms,
  connectedIds,
  onConnect,
  onDisconnect,
  showToast,
  footerLink,
}: {
  title: string;
  subtitle: string;
  platforms: Platform[];
  connectedIds: Set<string>;
  onConnect: (id: string) => void;
  onDisconnect: (id: string) => void;
  showToast: (msg: string) => void;
  footerLink?: { label: string; href: string };
}) {
  return (
    <div>
      <div className="mb-3">
        <h3 className="text-sm font-bold text-white/80">{title}</h3>
        <p className="text-xs text-white/35 mt-0.5">{subtitle}</p>
      </div>
      <div className="space-y-2">
        {platforms.map((p) => (
          <PlatformCard
            key={p.id}
            platform={p}
            connected={connectedIds.has(p.id)}
            onConnect={onConnect}
            onDisconnect={onDisconnect}
            showToast={showToast}
          />
        ))}
      </div>
      {footerLink && (
        <div className="mt-2">
          <Link
            href={footerLink.href}
            className="text-xs transition-colors"
            style={{ color: `${GOLD}99` }}
          >
            {footerLink.label}
          </Link>
        </div>
      )}
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────
export default function ConnectPage() {
  const [connectedIds, setConnectedIds] = useState<Set<string>>(new Set(["claude"]));
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 4000);
  };

  const handleConnect = (id: string) => {
    setConnectedIds((prev) => new Set([...prev, id]));
  };

  const handleDisconnect = (id: string) => {
    setConnectedIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  const totalConnected = connectedIds.size;

  return (
    <div className="max-w-2xl mx-auto px-4 md:px-6 py-6 md:py-8 space-y-6 md:space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${GOLD}15`, border: `1px solid ${GOLD}30` }}
          >
            <Link2 className="w-4 h-4" style={{ color: GOLD }} />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white">Connected Platforms</h2>
          </div>
        </div>
        <p className="text-sm text-white/40 mt-1 leading-relaxed">
          Connect your tools so your AI has full context from your life.
        </p>
        {totalConnected > 0 && (
          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
            style={{ background: "rgba(74,222,128,0.08)", color: "#4ade80", border: "1px solid rgba(74,222,128,0.2)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            {totalConnected} platform{totalConnected !== 1 ? "s" : ""} connected
          </div>
        )}
      </div>

      {/* Categories */}
      <PlatformCategory
        title="Personal"
        subtitle="Calendar, email, health and productivity"
        platforms={PERSONAL_PLATFORMS}
        connectedIds={connectedIds}
        onConnect={handleConnect}
        onDisconnect={handleDisconnect}
        showToast={showToast}
      />

      <PlatformCategory
        title="Work"
        subtitle="Dev tools, docs and communications"
        platforms={WORK_PLATFORMS}
        connectedIds={connectedIds}
        onConnect={handleConnect}
        onDisconnect={handleDisconnect}
        showToast={showToast}
      />

      <PlatformCategory
        title="Gaming"
        subtitle="Games, platforms and communities"
        platforms={GAMING_PLATFORMS}
        connectedIds={connectedIds}
        onConnect={handleConnect}
        onDisconnect={handleDisconnect}
        showToast={showToast}
        footerLink={{ label: "See all 47 gaming platforms →", href: "/gaming/platforms" }}
      />

      <PlatformCategory
        title="AI Models"
        subtitle="Language models and local inference"
        platforms={AI_PLATFORMS}
        connectedIds={connectedIds}
        onConnect={handleConnect}
        onDisconnect={handleDisconnect}
        showToast={showToast}
      />

      {/* Toast */}
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
}
