"use client";
import Link from "next/link";
import { useState } from "react";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does connecting platforms cost extra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. All platform connections are included in your MEOK plan. Free tier gets 3 platform connections. Paid plans unlock all platforms simultaneously.",
      },
    },
    {
      "@type": "Question",
      name: "Is my gaming data private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All connected platform data goes into your encrypted sovereign memory vault. MEOK cannot sell or share it. You hold the keys.",
      },
    },
    {
      "@type": "Question",
      name: "What OAuth scopes does MEOK request?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Read-only scopes only, specific to each platform. Every platform card lists exactly what MEOK requests and what it never accesses. We never request write access, posting permissions, or payment data.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between API access and screen capture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "API access (Riot, Steam, Blizzard) pulls structured data automatically — match history, stats, rank. Screen capture is used where no public API exists — MEOK reads your game window visually, the same as a spectator. Manual input is always available as a fallback for any game.",
      },
    },
    {
      "@type": "Question",
      name: "What if my game isn't listed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Type your game name into MEOK and it will use its general gaming knowledge. If you want stats tracked, request the integration — we add new platforms every sprint.",
      },
    },
  ],
};

type IntegrationStatus = "live" | "beta" | "coming";
type DataMethod = "api" | "screen" | "manual" | "api+screen";

interface PlatformEntry {
  name: string;
  emoji: string;
  status: IntegrationStatus;
  dataMethod: DataMethod;
  what: string;
  scope: string;
  never: string;
}

interface PlatformCategory {
  category: string;
  icon: string;
  accent: string;
  platforms: PlatformEntry[];
}

const PLATFORM_CATEGORIES: PlatformCategory[] = [
  {
    category: "PC Gaming",
    icon: "🖥️",
    accent: "#66c0f4",
    platforms: [
      {
        name: "Steam",
        emoji: "🟦",
        status: "live",
        dataMethod: "api",
        what: "Library, playtime per game, achievements, friend list, per-game stats where the developer exposes them via Steam Web API. CS2 match history is available; not all games expose stats.",
        scope: "OAuth: read profile, library, achievements, stats. Identified as read-only to Steam.",
        never: "Never reads chat history, inventory items, or payment data.",
      },
      {
        name: "Battle.net",
        emoji: "🟦",
        status: "live",
        dataMethod: "api",
        what: "Games library, WoW character data, Overwatch 2 SR and role stats, Diablo IV seasonal progress, Hearthstone stats. Data pulled via official Battle.net OAuth API.",
        scope: "OAuth: openid + sc2.profile + wow.profile + d3.profile + ow2.profile (read-only).",
        never: "Never accesses friends list, chat, purchase history, or real-money transaction data.",
      },
      {
        name: "Epic Games",
        emoji: "🔵",
        status: "live",
        dataMethod: "api",
        what: "Library, achievements, friends list. Fortnite stats via Epic public API. Limited compared to Steam — Epic's developer API is more restricted.",
        scope: "OAuth: basic_profile + friends + library (read-only). Epic shows you the permission screen.",
        never: "Never accesses wallet, purchase history, or Epic account credentials.",
      },
      {
        name: "EA App",
        emoji: "🟠",
        status: "live",
        dataMethod: "api+screen",
        what: "Library, Apex Legends stats (kills, K/D, legend-specific stats), EA FC match history. Some data requires screen capture as EA's API coverage is partial.",
        scope: "OAuth read-only where available; screen capture for stats pages EA doesn't expose via API.",
        never: "Never posts to your profile, never accesses EA Wallet.",
      },
      {
        name: "Ubisoft Connect",
        emoji: "🔵",
        status: "beta",
        dataMethod: "api",
        what: "Achievements, game history, friends — via Ubisoft Connect OAuth. Limited stat depth — Ubisoft's developer API is not fully public.",
        scope: "OAuth: profile + games + achievements (read-only).",
        never: "Never accesses Ubisoft Store purchase history or wallet.",
      },
      {
        name: "GOG Galaxy",
        emoji: "⚪",
        status: "beta",
        dataMethod: "api",
        what: "DRM-free library, achievements, playtime. GOG's API access is less comprehensive than Steam — playtime and achievements only for supported titles.",
        scope: "OAuth read-only: library + achievements + playtime.",
        never: "Never reads GOG purchase history or payment data.",
      },
    ],
  },
  {
    category: "Console",
    icon: "🎮",
    accent: "#3b82f6",
    platforms: [
      {
        name: "PlayStation Network",
        emoji: "🔵",
        status: "beta",
        dataMethod: "api",
        what: "Trophy list (bronze/silver/gold/platinum), games library, recent activity, friend list. Via PSN API — no in-game stats, only trophy and library data.",
        scope: "OAuth: psn:s2s scope for profile, trophies, games. PlayStation shows you explicit consent screen.",
        never: "Never accesses PlayStation Wallet, PS Plus subscription status, or payment methods.",
      },
      {
        name: "Xbox / Game Pass",
        emoji: "🟢",
        status: "live",
        dataMethod: "api",
        what: "Game Pass library, achievements, friends, per-game stats for titles with Xbox Live API support. Microsoft's API is one of the most comprehensive for console stat tracking.",
        scope: "OAuth: Xboxlive.signin + Xboxlive.offline_access (read-only).",
        never: "Never accesses Microsoft account details, payment methods, or Xbox Store.",
      },
      {
        name: "Nintendo Switch Online",
        emoji: "🔴",
        status: "coming",
        dataMethod: "manual",
        what: "Nintendo has no public developer API for Switch Online data. When this integration ships, it will be manual input only — you enter your stats and MEOK analyses them. We won't claim API access that doesn't exist.",
        scope: "Manual input only — no OAuth integration planned until Nintendo opens their API.",
        never: "We will never scrape your Nintendo account or reverse-engineer Nintendo's private APIs.",
      },
    ],
  },
  {
    category: "Voice & Social",
    icon: "🎙️",
    accent: "#5865f2",
    platforms: [
      {
        name: "Discord",
        emoji: "🟣",
        status: "live",
        dataMethod: "api",
        what: "Rich Presence game state (what game you're playing, current match status), server membership, friend list. Voice channel awareness requires the Discord desktop app's local RPC — MEOK reads which channel you're in, not what's said.",
        scope: "OAuth: identify + guilds + rpc (local RPC for game state). Discord shows permission screen listing each scope.",
        never: "Never reads message history, DMs, or server message content. Never joins voice channels or records audio.",
      },
      {
        name: "TeamSpeak",
        emoji: "⚫",
        status: "coming",
        dataMethod: "api",
        what: "Voice activity monitoring and channel awareness via TeamSpeak ClientQuery interface. When available, MEOK knows which channel you're in — not what's said.",
        scope: "Local ClientQuery API — runs on your machine, no cloud authentication needed.",
        never: "Never records audio or reads chat messages.",
      },
      {
        name: "Guilded",
        emoji: "🟡",
        status: "coming",
        dataMethod: "api",
        what: "Server activity context, team schedules, match coordination threads — for team communication context during strategy sessions.",
        scope: "OAuth read-only: servers + channels metadata. Not message content.",
        never: "Never reads private messages or posts on your behalf.",
      },
    ],
  },
  {
    category: "Streaming",
    icon: "📺",
    accent: "#9146ff",
    platforms: [
      {
        name: "Twitch",
        emoji: "🟣",
        status: "live",
        dataMethod: "api",
        what: "Stream history (your past broadcasts and VODs), viewer count over time, chat activity volume, top clips. If you're a streamer, MEOK can surface your session performance patterns. If you don't stream, you can still connect Twitch for watch history context.",
        scope: "OAuth: user:read:broadcast + user:read:follows + channel:read:analytics (read-only).",
        never: "Never reads chat messages, never posts or sends messages, never accesses subscription revenue.",
      },
      {
        name: "YouTube Gaming",
        emoji: "🔴",
        status: "beta",
        dataMethod: "api",
        what: "Channel stats if you post gaming content — view counts, watch time, video performance. Links to your game sessions if you've titled videos to match.",
        scope: "OAuth: youtube.readonly scope only.",
        never: "Never accesses YouTube comments, account credentials, or AdSense revenue.",
      },
      {
        name: "OBS Studio",
        emoji: "⚫",
        status: "coming",
        dataMethod: "api",
        what: "Scene switching, recording start/stop events, stream health metrics — via OBS WebSocket plugin (local, on your machine). Useful for correlating stream sessions with game performance.",
        scope: "Local WebSocket connection — no cloud authentication. Runs entirely on your machine.",
        never: "Never captures video feed, never controls OBS without explicit instruction.",
      },
    ],
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    icon: "🖱️",
    title: "You click Connect",
    desc: "MEOK opens the platform's official OAuth flow or API key dialog. The connection is handled entirely through the platform's own authentication — your password never touches MEOK.",
  },
  {
    step: "02",
    icon: "🔐",
    title: "Platform grants access",
    desc: "Read-only scopes only. The platform shows you exactly what you're granting before you confirm. MEOK requests the minimum required to do the job.",
  },
  {
    step: "03",
    icon: "🌊",
    title: "Your data flows in",
    desc: "Match history, stats, achievements — into your sovereign memory vault, encrypted, owned by you. MEOK can now query it mid-conversation. You can revoke access at any time from the platform's settings.",
  },
];

const FAQS = [
  {
    q: "Does connecting platforms cost extra?",
    a: "No. All platform connections are included in your MEOK plan. Free tier gets 3 platform connections. Paid plans unlock all platforms simultaneously.",
  },
  {
    q: "Is my gaming data private?",
    a: "Yes. All connected platform data goes into your encrypted sovereign memory vault. MEOK cannot sell or share it. You hold the keys.",
  },
  {
    q: "What OAuth scopes does MEOK request?",
    a: "Read-only scopes only, specific to each platform. Every platform card lists exactly what MEOK requests and what it never accesses. We never request write access, posting permissions, or payment data.",
  },
  {
    q: "What's the difference between API access and screen capture?",
    a: "API access (Riot, Steam, Blizzard) pulls structured data automatically — match history, stats, rank. Screen capture is used where no public API exists — MEOK reads your game window visually, the same as a spectator. Manual input is always available as a fallback for any game.",
  },
  {
    q: "What if my game isn't listed?",
    a: "Type your game name into MEOK and it will use its general gaming knowledge base. If you want live stats tracked, request the integration — we add new platforms every sprint.",
  },
];

const METHOD_LABELS: Record<DataMethod, { label: string; color: string; title: string }> = {
  api: { label: "API", color: "#34d399", title: "Official API — structured data, automatic sync" },
  screen: { label: "Screen read", color: "#fb923c", title: "Screen capture — MEOK reads your game window visually" },
  manual: { label: "Manual", color: "#6b7fa3", title: "Manual input — you enter stats, MEOK analyses them" },
  "api+screen": { label: "API + Screen", color: "#c9a84c", title: "API where available, screen capture for the rest" },
};

function MethodBadge({ method }: { method: DataMethod }) {
  const m = METHOD_LABELS[method];
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase border"
      style={{ color: m.color, borderColor: `${m.color}40`, background: `${m.color}10` }}
      title={m.title}
    >
      {m.label}
    </span>
  );
}

function StatusBadge({ status }: { status: IntegrationStatus }) {
  if (status === "live") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/15 border border-green-500/30 text-green-400 text-[10px] font-black tracking-wider uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        Live
      </span>
    );
  }
  if (status === "beta") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/30 text-[#c9a84c] text-[10px] font-black tracking-wider uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
        Beta
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-white/30 text-[10px] font-black tracking-wider uppercase">
      <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
      Soon
    </span>
  );
}

function PlatformCard({ platform, accent }: { platform: PlatformEntry; accent: string }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className="group relative rounded-2xl border transition-all"
      style={{
        background: "rgba(255,255,255,0.04)",
        borderColor: expanded ? `${accent}50` : `${accent}25`,
        boxShadow: expanded ? `0 0 20px ${accent}10` : "none",
      }}
    >
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl leading-none">{platform.emoji}</span>
            <span className="text-base font-bold text-white">{platform.name}</span>
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0 flex-wrap justify-end">
            <MethodBadge method={platform.dataMethod} />
            <StatusBadge status={platform.status} />
          </div>
        </div>
        <p className="text-xs text-white/40 leading-relaxed mb-3">{platform.what}</p>
        <button
          className="text-[10px] font-black tracking-wider uppercase transition-colors"
          style={{ color: expanded ? accent : "rgba(255,255,255,0.25)" }}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Hide security details ↑" : "Connection security ↓"}
        </button>
      </div>
      {expanded && (
        <div
          className="px-5 pb-5 border-t space-y-3"
          style={{ borderColor: `${accent}15` }}
        >
          <div className="pt-4">
            <div
              className="text-[10px] font-black tracking-[0.15em] uppercase mb-1"
              style={{ color: `${accent}80` }}
            >
              OAuth scope requested
            </div>
            <p className="text-xs text-white/45 leading-relaxed font-mono">{platform.scope}</p>
          </div>
          <div>
            <div className="text-[10px] font-black tracking-[0.15em] uppercase mb-1 text-white/25">
              MEOK never accesses
            </div>
            <p className="text-xs text-white/35 leading-relaxed">{platform.never}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function FAQAccordion({ faqs }: { faqs: typeof FAQS }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-2xl border border-white/[0.07] overflow-hidden"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          <button
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/[0.03] transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-bold text-white/80 text-sm sm:text-base">{faq.q}</span>
            <span
              className="text-[#c9a84c] text-lg flex-shrink-0 transition-transform duration-200"
              style={{ transform: open === i ? "rotate(90deg)" : "rotate(0deg)" }}
            >
              ›
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5 pt-1">
              <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function GamingPlatformsPage() {
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-[75vh] flex flex-col items-center justify-center px-6 pt-20 pb-24 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.09) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-black tracking-[0.25em] uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            PLATFORM CONNECTIONS
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight text-white mb-6">
            Connect your platforms.{" "}
            <br className="hidden sm:block" />
            <span
              className="text-[#c9a84c]"
              style={{ textShadow: "0 0 50px rgba(201,168,76,0.4)" }}
            >
              Know what MEOK can see.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/55 max-w-3xl mx-auto leading-relaxed mb-6">
            Steam, Battle.net, Discord, Twitch, Xbox — each platform card shows exactly what MEOK
            reads, what OAuth scope it requests, and what it will never touch. Read-only. Always.
          </p>

          {/* Method legend */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-xs">
            {Object.entries(METHOD_LABELS).map(([key, m]) => (
              <div
                key={key}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border"
                style={{ borderColor: `${m.color}30`, background: `${m.color}08`, color: m.color }}
              >
                <span className="font-black tracking-wider uppercase">{m.label}</span>
                <span className="text-white/30">·</span>
                <span className="text-white/40 normal-case font-medium">{m.title.split(" — ")[1]}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/hatch"
              className="group flex items-center gap-2 px-8 py-4 rounded-full font-black text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-base"
              style={{ boxShadow: "0 0 24px rgba(201,168,76,0.3), 0 0 48px rgba(201,168,76,0.1)" }}
            >
              Connect your platforms
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="/gaming"
              className="group flex items-center gap-2 px-8 py-4 rounded-full font-black text-[#c9a84c] border border-[#c9a84c]/40 hover:border-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all text-base"
            >
              ← Back to Gaming OS
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PLATFORM GRID — by category
      ═══════════════════════════════════════════════ */}
      {PLATFORM_CATEGORIES.map((cat, catIdx) => (
        <section
          key={cat.category}
          className="py-20 px-6 border-t border-white/[0.05]"
          style={{
            background: catIdx % 2 === 0 ? "#1a1a2e" : "#0d0c18",
          }}
        >
          <div className="max-w-6xl mx-auto">
            {/* Category header */}
            <div className="flex items-center gap-4 mb-10">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: `${cat.accent}15`, border: `1px solid ${cat.accent}30` }}
              >
                {cat.icon}
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  {cat.category}
                </h2>
                <p className="text-sm text-white/35 mt-0.5">
                  {cat.platforms.filter((p) => p.status === "live").length} live ·{" "}
                  {cat.platforms.filter((p) => p.status === "beta").length} in beta ·{" "}
                  {cat.platforms.filter((p) => p.status === "coming").length} coming soon
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.platforms.map((platform) => (
                <PlatformCard key={platform.name} platform={platform} accent={cat.accent} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ═══════════════════════════════════════════════
          HOW PLATFORM CONNECTIONS WORK
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0d0c18] border-t border-white/[0.05]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              The connection flow
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              How platform connections{" "}
              <span className="text-[#c9a84c]">work.</span>
            </h2>
            <p className="text-white/45 max-w-xl mx-auto text-sm leading-relaxed mt-4">
              One button per platform. No configuration. No API keys to manage. No reading docs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {HOW_IT_WORKS.map((step) => (
              <div
                key={step.step}
                className="relative rounded-3xl p-8 border border-white/[0.07] hover:border-white/15 transition-all"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-xs font-black tracking-widest text-[#c9a84c] mb-2">
                  {step.step}
                </div>
                <h3 className="text-lg font-black text-white mb-3">{step.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Read-only callout */}
          <div
            className="rounded-2xl border border-[#c9a84c]/25 p-6 flex gap-4 items-start"
            style={{ background: "rgba(201,168,76,0.05)" }}
          >
            <span className="text-2xl flex-shrink-0">🔒</span>
            <div>
              <div className="font-black text-[#c9a84c] mb-1">Read-only. Always.</div>
              <p className="text-sm text-white/55 leading-relaxed">
                MEOK requests{" "}
                <strong className="text-white">read-only</strong> access to all platforms.
                We never post, never write, never modify anything on your behalf without explicit
                confirmation. You can revoke any connection at any time from the platform&apos;s
                own settings — MEOK does not need to be involved. Your gaming accounts remain
                entirely under your control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          WHO THIS IS FOR
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0d0c18] border-t border-white/[0.05]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              Who this is for
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Connect once.{" "}
              <span className="text-[#c9a84c]">MEOK remembers everything.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                label: "The multi-platform player",
                detail: "You play CS2 on Steam, ranked on Riot, and chill games on Xbox — your stats are scattered across five accounts and you have no single view of your progress. MEOK unifies all of it.",
                accent: "#66c0f4",
              },
              {
                label: "The privacy-conscious gamer",
                detail: "You want to connect your accounts but you've never trusted a third-party tool with your gaming credentials. Every card on this page shows exactly what MEOK reads, what scope it requests, and what it will never touch.",
                accent: "#c9a84c",
              },
              {
                label: "The serious competitor",
                detail: "You need context before every session — your recent match history, your rank trend, your platform stats. MEOK pulls it automatically and delivers it in your morning brief or pre-game report.",
                accent: "#9146ff",
              },
            ].map((p) => (
              <div
                key={p.label}
                className="rounded-2xl border border-white/[0.07] p-7 flex flex-col gap-4"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.accent }} />
                <h3 className="font-black text-sm leading-snug text-white">{p.label}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          GEO — Generative Engine Optimisation H2s
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto space-y-14">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
              What gaming platforms does MEOK AI support?
            </h2>
            <p className="text-white/55 leading-relaxed text-sm sm:text-base">
              MEOK AI connects to the four platforms where most gamers spend their time: Riot Games (League of Legends and Valorant), Steam, Twitch, and Discord. Each connection is read-only and uses the platform's official OAuth flow. MEOK pulls your rank history, match stats, achievements, and community context into your sovereign memory vault — giving your AI companion a full picture of your gaming life across every game you play.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
              How does MEOK protect gamers from toxic behaviour?
            </h2>
            <p className="text-white/55 leading-relaxed text-sm sm:text-base">
              MEOK&apos;s Guardian layer monitors gaming communications — in-game chat, Discord DMs, and Twitch chat — for toxicity, harassment, and grooming patterns. For families on the Family tier, parents get a dashboard surfacing Guardian alerts without reading private conversations. School-Safe Mode blocks adult content across all connected platforms. Guardian runs passively and only escalates when a pattern of concern is detected — it is care, not surveillance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
              When does MEOK gaming launch?
            </h2>
            <p className="text-white/55 leading-relaxed text-sm sm:text-base">
              MEOK&apos;s full gaming suite — including Riot Games and Steam API integration, Twitch co-host mode, and the PixiJS visual environment — launches in Phase 3, targeted for August 2026. Discord integration is already in beta. Join the gaming waitlist at{" "}
              <a href="/gaming" className="text-[#d4af37] hover:underline font-bold">/gaming</a>{" "}
              to get early access and shape what MEOK builds next.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
              Common questions
            </span>
            <h2 className="text-4xl font-black text-white">FAQ</h2>
          </div>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════ */}
      <section className="relative py-32 px-6 overflow-hidden bg-[#1a1a2e]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl font-black leading-[0.92] tracking-tight text-white mb-6">
            Connect your gaming world.{" "}
            <span className="text-[#c9a84c]">All of it.</span>
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto mb-10 leading-relaxed">
            Every platform. Every stat. Every match. One AI that works for you — not for ad networks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/hatch"
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-[#1a1a2e] bg-[#c9a84c] hover:bg-[#d4b463] transition-all text-base sm:text-lg"
              style={{ boxShadow: "0 0 24px rgba(201,168,76,0.3), 0 0 48px rgba(201,168,76,0.1)" }}
            >
              Connect platforms
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-bold"
            >
              Already hatched? Go to dashboard →
            </Link>
          </div>
          <p className="mt-8 text-xs text-white/20 font-mono">
            Free tier · 3 platform connections · No card required
          </p>
        </div>
      </section>

    </div>
  );
}
