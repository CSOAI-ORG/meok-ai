"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Monitor, Shield, Lock, Gamepad2, Cpu } from "lucide-react";
import { Surface, IconOrb, FeatureCard, GlowText } from "@/components/design-system";

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
  screen: { label: "Screen read", color: "#e07340", title: "Screen capture — MEOK reads your game window visually" },
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
    <Surface
      variant="elevated"
      className="group relative overflow-hidden"
      style={{
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
        <button type="button"
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
    </Surface>
  );
}

function FAQAccordion({ faqs }: { faqs: typeof FAQS }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <Surface key={i} variant="glass" className="overflow-hidden">
          <button type="button"
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
        </Surface>
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
              "linear-gradient(rgba(224,115,64,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(224,115,64,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(224,115,64,0.09) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-300 text-xs font-black tracking-[0.25em] uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            PLATFORM CONNECTIONS
          </div>

          <div className="flex justify-center mb-6">
            <IconOrb icon={Monitor} variant="orange" size="lg" pulse />
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight text-white mb-6">
            Connect your platforms.{" "}
            <br className="hidden sm:block" />
            <GlowText variant="orange" as="span">
              Know what MEOK can see.
            </GlowText>
          </h1>

          <p className="text-lg sm:text-xl text-white/55 max-w-3xl mx-auto leading-relaxed mb-6">
            Steam, Battle.net, Discord, Twitch, Xbox — each platform card shows exactly what MEOK
            reads, what OAuth scope it requests, and what it will never touch. Read-only. Always.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/hatch"
              className="group flex items-center gap-2 px-8 py-4 rounded-full font-black text-[#1a1a2e] bg-[#e07340] hover:bg-[#e5804d] transition-all text-base"
              style={{ boxShadow: "0 0 24px rgba(224,115,64,0.3), 0 0 48px rgba(224,115,64,0.1)" }}
            >
              Connect your platforms
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="/gaming"
              className="group flex items-center gap-2 px-8 py-4 rounded-full font-black text-orange-300 border border-orange-500/40 hover:border-orange-400 hover:bg-orange-500/10 transition-all text-base"
            >
              ← Back to Gaming OS
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FEATURE CARDS
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0d0c18] border-y border-white/[0.05] animate-fade-in-up">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <FeatureCard
              title="One-click OAuth"
              description="No API keys. No configuration. Click Connect and MEOK opens the platform's official auth flow."
              icon={Lock}
              iconVariant="orange"
              glow="orange"
            />
            <FeatureCard
              title="Read-only always"
              description="We never post, never write, and never modify anything on your behalf. You can revoke any connection at any time."
              icon={Shield}
              iconVariant="teal"
              glow="teal"
            />
            <FeatureCard
              title="Unified dashboard"
              description="All your stats, achievements, and match history in one sovereign memory vault — owned by you."
              icon={Gamepad2}
              iconVariant="orange"
              glow="orange"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PLATFORM GRID — by category
      ═══════════════════════════════════════════════ */}
      {PLATFORM_CATEGORIES.map((cat, catIdx) => (
        <section
          key={cat.category}
          className="py-20 px-6 border-t border-white/[0.05] animate-fade-in-up"
          style={{
            background: catIdx % 2 === 0 ? "#0d0c18" : "#13121f",
          }}
        >
          <div className="max-w-6xl mx-auto">
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
          CAPABILITIES
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0d0c18] border-t border-white/[0.05] animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-black tracking-[0.25em] uppercase text-white/30 block mb-4">
                Security
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-5">
                Read-only.
                <br />
                <GlowText variant="orange" as="span">
                  Always.
                </GlowText>
              </h2>
              <p className="text-white/50 leading-relaxed text-sm">
                MEOK requests read-only access to all platforms. We never post,
                never write, never modify anything on your behalf without explicit
                confirmation. Your gaming accounts remain entirely under your control.
              </p>
            </div>
            <Surface variant="elevated" glow="orange" className="p-7">
              <ul className="space-y-4">
                {[
                  "OAuth via official platform flows only",
                  "Minimum required scopes per platform",
                  "Encrypted sovereign memory vault",
                  "Instant revocation from platform settings",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                    <Lock className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </Surface>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#13121f] animate-fade-in-up">
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
      <section className="relative py-32 px-6 overflow-hidden bg-[#0a0a0f] animate-fade-in-up">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(224,115,64,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <IconOrb icon={Cpu} variant="orange" size="lg" />
          </div>
          <h2 className="text-4xl sm:text-6xl font-black leading-[0.92] tracking-tight text-white mb-6">
            Connect your gaming world.{" "}
            <GlowText variant="orange" as="span">All of it.</GlowText>
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto mb-10 leading-relaxed">
            Every platform. Every stat. Every match. One AI that works for you — not for ad networks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/hatch"
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-[#1a1a2e] bg-[#e07340] hover:bg-[#e5804d] transition-all text-base sm:text-lg"
              style={{ boxShadow: "0 0 24px rgba(224,115,64,0.3), 0 0 48px rgba(224,115,64,0.1)" }}
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
