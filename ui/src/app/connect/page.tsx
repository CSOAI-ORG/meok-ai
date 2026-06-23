"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  X,
  Shield,
  Zap,
  Lock,
  MousePointerClick,
  KeyRound,
  BrainCircuit,
  Calendar,
  Mail,
  NotebookPen,
  CheckSquare,
  Landmark,
  HeartPulse,
  Terminal,
  BarChart3,
  FileText,
  MessageSquare,
  Bot,
  Users,
  Building2,
  Headphones,
  ShieldCheck,
  Gamepad2,
  Sparkles,
  Database,
  ChevronDown,
  ChevronUp,
  EyeOff,
  Server,
} from "lucide-react";

// ─── JSON-LD (static — FAQ data duplicated intentionally for hoisting) ────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What data does MEOK read from connected tools?", acceptedAnswer: { "@type": "Answer", text: "MEOK requests read-only access to the specific data your AI companion needs. For Google Calendar, that means event titles, times, and attendees — not your contacts list or email. Each integration lists exactly what scope is requested before you authorise." } },
    { "@type": "Question", name: "What if I want to disconnect an integration?", acceptedAnswer: { "@type": "Answer", text: "Go to Settings → Connect → [integration name] → Disconnect. This immediately revokes MEOK's OAuth token with the platform, and MEOK deletes all cached data from that integration within 60 seconds. Nothing is archived. You can reconnect at any time." } },
    { "@type": "Question", name: "Can I connect my own custom API?", acceptedAnswer: { "@type": "Answer", text: "Yes. MEOK supports custom MCP server connections. If your tool exposes an MCP-compatible endpoint, you can plug it into your companion directly from the Connect page." } },
    { "@type": "Question", name: "What is MCP and why does MEOK use it?", acceptedAnswer: { "@type": "Answer", text: "MCP (Model Context Protocol) is an open standard pioneered by Anthropic that defines how AI models communicate with external tools in real time. MEOK implements MCP for faster, deeper, more auditable connections than traditional REST API wrappers." } },
    { "@type": "Question", name: "Is my connected data GDPR compliant?", acceptedAnswer: { "@type": "Answer", text: "Yes. MEOK.AI Ltd is a UK-registered company. All connected data is encrypted at rest (AES-256) and in transit (TLS 1.3). You can revoke any connection at any time, triggering immediate deletion of cached data." } },
    { "@type": "Question", name: "Can I share integrations with my team?", acceptedAnswer: { "@type": "Answer", text: "With Team OS, workspace-level integrations (Slack, GitHub, Notion, etc.) can be connected once and shared across team members who have permission. Each member still authenticates individually — no shared tokens." } },
  ],
};

// ─── DATA ─────────────────────────────────────────────────────────────────────

interface Integration {
  name: string;
  desc: string;
  status?: "live" | "beta" | "soon";
}

interface IntegrationGroup {
  icon: React.ReactNode;
  title: string;
  items: Integration[];
}

interface ProductSection {
  id: string;
  label: string;
  emoji: string;
  color: string;
  bg: string;
  pillBg: string;
  groups: IntegrationGroup[];
}

const PRODUCTS: ProductSection[] = [
  {
    id: "personal",
    label: "Personal OS",
    emoji: "🥚",
    color: "#c9a84c",
    bg: "rgba(201,168,76,0.08)",
    pillBg: "rgba(201,168,76,0.15)",
    groups: [
      {
        icon: <Calendar className="w-4 h-4" />,
        title: "Calendar & Time",
        items: [
          { name: "Google Calendar", desc: "Learns your schedule patterns — meeting types, free time, focus blocks — and feeds your morning brief automatically", status: "live" },
          { name: "Apple Calendar", desc: "Full iCal sync", status: "live" },
          { name: "Outlook Calendar", desc: "Microsoft calendar + Teams meetings", status: "live" },
          { name: "Calendly", desc: "Meeting booking awareness", status: "beta" },
          { name: "Fantastical", desc: "Advanced calendar data", status: "soon" },
        ],
      },
      {
        icon: <Mail className="w-4 h-4" />,
        title: "Email & Communication",
        items: [
          { name: "Gmail", desc: "Reads your emails, learns your relationships, drafts replies in your voice — without storing content on a server", status: "live" },
          { name: "Outlook", desc: "Email + calendar unified", status: "live" },
          { name: "Apple Mail", desc: "Local email context", status: "beta" },
          { name: "ProtonMail", desc: "Privacy-first email (limited)", status: "soon" },
          { name: "Hey.com", desc: "Modern email", status: "soon" },
          { name: "Fastmail", desc: "Privacy email", status: "soon" },
        ],
      },
      {
        icon: <NotebookPen className="w-4 h-4" />,
        title: "Notes & Knowledge",
        items: [
          { name: "Notion", desc: "Indexes all your pages and databases — makes every note searchable in natural language instantly", status: "live" },
          { name: "Obsidian", desc: "Local knowledge graph", status: "live" },
          { name: "Apple Notes", desc: "iCloud notes", status: "beta" },
          { name: "Roam Research", desc: "Networked notes", status: "soon" },
          { name: "Logseq", desc: "Open-source knowledge base", status: "soon" },
          { name: "Bear", desc: "Markdown notes", status: "soon" },
        ],
      },
      {
        icon: <CheckSquare className="w-4 h-4" />,
        title: "Tasks & Projects",
        items: [
          { name: "Todoist", desc: "Tasks, projects, priorities", status: "live" },
          { name: "Things 3", desc: "Apple-native task management", status: "live" },
          { name: "Linear", desc: "Engineering project tracking", status: "live" },
          { name: "Asana", desc: "Team projects", status: "beta" },
          { name: "Trello", desc: "Kanban boards", status: "beta" },
          { name: "ClickUp", desc: "All-in-one projects", status: "soon" },
        ],
      },
      {
        icon: <Landmark className="w-4 h-4" />,
        title: "Finance",
        items: [
          { name: "Monzo", desc: "Spending, budgets (UK)", status: "beta" },
          { name: "Revolut", desc: "Multi-currency spending", status: "beta" },
          { name: "Starling", desc: "UK banking", status: "soon" },
          { name: "Plaid", desc: "US bank connection hub", status: "soon" },
        ],
      },
      {
        icon: <HeartPulse className="w-4 h-4" />,
        title: "Health & Fitness",
        items: [
          { name: "Apple Health", desc: "Tracks sleep, exercise, heart rate, and HRV — feeds your care score and morning energy briefing", status: "live" },
          { name: "Fitbit", desc: "Activity, sleep, health metrics", status: "beta" },
          { name: "Garmin Connect", desc: "Sports data, GPS tracks", status: "beta" },
          { name: "Strava", desc: "Running, cycling stats", status: "live" },
          { name: "Oura Ring", desc: "Sleep, readiness, HRV", status: "beta" },
          { name: "Whoop", desc: "Recovery, strain data", status: "soon" },
        ],
      },
    ],
  },
  {
    id: "work",
    label: "Work OS",
    emoji: "⚡",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.08)",
    pillBg: "rgba(59,130,246,0.15)",
    groups: [
      {
        icon: <Terminal className="w-4 h-4" />,
        title: "Development",
        items: [
          { name: "GitHub", desc: "Repos, commits, PRs, issues", status: "live" },
          { name: "GitLab", desc: "Alternative git host", status: "beta" },
          { name: "Linear", desc: "Issue tracking", status: "live" },
          { name: "Jira", desc: "Enterprise project management", status: "beta" },
          { name: "Vercel", desc: "Deployments, build logs", status: "live" },
          { name: "Netlify", desc: "Deploy status", status: "beta" },
        ],
      },
      {
        icon: <BarChart3 className="w-4 h-4" />,
        title: "Data & Analytics",
        items: [
          { name: "Google Analytics", desc: "Website traffic", status: "beta" },
          { name: "PostHog", desc: "Product analytics", status: "live" },
          { name: "Mixpanel", desc: "Event tracking", status: "soon" },
          { name: "Datadog", desc: "Infrastructure monitoring", status: "soon" },
          { name: "Sentry", desc: "Error tracking", status: "live" },
        ],
      },
      {
        icon: <FileText className="w-4 h-4" />,
        title: "Documents & Writing",
        items: [
          { name: "Google Docs", desc: "Documents, sheets, slides", status: "live" },
          { name: "Notion", desc: "Workspace docs", status: "live" },
          { name: "Confluence", desc: "Team documentation", status: "beta" },
          { name: "Coda", desc: "Interactive docs", status: "soon" },
        ],
      },
      {
        icon: <MessageSquare className="w-4 h-4" />,
        title: "Team Communication",
        items: [
          { name: "Slack", desc: "Messages, threads, channels", status: "live" },
          { name: "Microsoft Teams", desc: "Meetings, chats", status: "beta" },
          { name: "Zoom", desc: "Meeting recordings, transcripts", status: "beta" },
          { name: "Loom", desc: "Video messages", status: "soon" },
        ],
      },
      {
        icon: <Bot className="w-4 h-4" />,
        title: "AI Tools",
        items: [
          { name: "Claude API", desc: "Anthropic's models", status: "live" },
          { name: "OpenAI API", desc: "GPT models", status: "live" },
          { name: "Perplexity", desc: "Research AI", status: "live" },
          { name: "Cursor", desc: "AI coding", status: "beta" },
          { name: "GitHub Copilot", desc: "Code completion", status: "beta" },
        ],
      },
    ],
  },
  {
    id: "family",
    label: "Family OS",
    emoji: "🛡️",
    color: "#7BC47F",
    bg: "rgba(123,196,127,0.08)",
    pillBg: "rgba(123,196,127,0.15)",
    groups: [
      {
        icon: <Users className="w-4 h-4" />,
        title: "Family & Safety",
        items: [
          { name: "Apple Find My", desc: "Family location (consent-based)", status: "beta" },
          { name: "Google Family Link", desc: "Child device management", status: "beta" },
          { name: "Life360", desc: "Family location sharing", status: "soon" },
          { name: "Bark", desc: "Child online safety monitoring", status: "soon" },
          { name: "Circle", desc: "Screen time management", status: "soon" },
        ],
      },
      {
        icon: <Zap className="w-4 h-4" />,
        title: "Smart Home",
        items: [
          { name: "Apple HomeKit", desc: "Home automation", status: "beta" },
          { name: "Google Home", desc: "Smart devices", status: "beta" },
          { name: "Amazon Alexa", desc: "Voice assistant integration", status: "soon" },
          { name: "Philips Hue", desc: "Lighting (mood, sleep)", status: "soon" },
          { name: "Ring", desc: "Doorbell, security camera alerts", status: "soon" },
          { name: "Nest", desc: "Thermostat, smoke detector", status: "soon" },
        ],
      },
      {
        icon: <HeartPulse className="w-4 h-4" />,
        title: "Health",
        items: [
          { name: "Apple Health", desc: "Family health data (with permission)", status: "live" },
          { name: "NHS App", desc: "UK health records, appointments", status: "beta" },
          { name: "Babylon Health", desc: "Virtual GP", status: "soon" },
        ],
      },
    ],
  },
  {
    id: "gaming",
    label: "Gaming OS",
    emoji: "🎮",
    color: "#FB923C",
    bg: "rgba(251,146,60,0.08)",
    pillBg: "rgba(251,146,60,0.15)",
    groups: [
      {
        icon: <Gamepad2 className="w-4 h-4" />,
        title: "Platforms & Launchers",
        items: [
          { name: "Steam", desc: "Pulls your game library, session length, achievement history, and performance trends for your gaming brief", status: "live" },
          { name: "Epic Games", desc: "Library, playtime data", status: "beta" },
          { name: "Battle.net", desc: "Blizzard titles — WoW, Overwatch, Diablo", status: "beta" },
          { name: "Riot Games", desc: "League, Valorant, TFT stats via official API", status: "live" },
          { name: "Xbox / Game Pass", desc: "Achievements, playtime, friends", status: "beta" },
          { name: "PlayStation", desc: "Trophies, playtime (PSN API)", status: "soon" },
          { name: "Discord", desc: "Activity, voice, server context", status: "live" },
          { name: "Twitch", desc: "Stream data, follows, chat", status: "beta" },
        ],
      },
    ],
  },
  {
    id: "characters",
    label: "Characters",
    emoji: "✨",
    color: "#F472B6",
    bg: "rgba(244,114,182,0.08)",
    pillBg: "rgba(244,114,182,0.15)",
    groups: [
      {
        icon: <BrainCircuit className="w-4 h-4" />,
        title: "AI Model Providers",
        items: [
          { name: "Claude (Anthropic)", desc: "Default model for care-aligned responses", status: "live" },
          { name: "GPT-4o (OpenAI)", desc: "Multimodal capabilities", status: "live" },
          { name: "DeepSeek", desc: "Efficient reasoning", status: "live" },
          { name: "Groq", desc: "Ultra-low latency — gaming mode", status: "live" },
          { name: "Ollama", desc: "Local / private models", status: "beta" },
          { name: "Mistral", desc: "European sovereign AI", status: "beta" },
        ],
      },
      {
        icon: <Sparkles className="w-4 h-4" />,
        title: "Voice & Avatar",
        items: [
          { name: "ElevenLabs", desc: "Character voices — ultra realistic", status: "live" },
          { name: "Whisper (OpenAI)", desc: "Speech-to-text input", status: "live" },
          { name: "Ready Player Me", desc: "3D avatars — coming soon", status: "soon" },
        ],
      },
      {
        icon: <Database className="w-4 h-4" />,
        title: "Memory Providers",
        items: [
          { name: "pgvector", desc: "Sovereign self-hosted semantic memory", status: "live" },
          { name: "Pinecone", desc: "Enterprise vector search", status: "beta" },
          { name: "Weaviate", desc: "Open-source vector DB", status: "soon" },
        ],
      },
    ],
  },
  {
    id: "team",
    label: "Team OS",
    emoji: "👥",
    color: "#A78BFA",
    bg: "rgba(167,139,250,0.08)",
    pillBg: "rgba(167,139,250,0.15)",
    groups: [
      {
        icon: <Users className="w-4 h-4" />,
        title: "HR & People",
        items: [
          { name: "BambooHR", desc: "People management, org structure", status: "beta" },
          { name: "Rippling", desc: "HR + IT unified", status: "soon" },
          { name: "HiBob", desc: "Modern HRIS", status: "soon" },
          { name: "Workday", desc: "Enterprise HR", status: "soon" },
        ],
      },
      {
        icon: <Building2 className="w-4 h-4" />,
        title: "Finance",
        items: [
          { name: "Xero", desc: "Accounting — UK/AU/NZ focus", status: "beta" },
          { name: "QuickBooks", desc: "Accounting — US focus", status: "beta" },
          { name: "FreeAgent", desc: "UK freelance & small biz", status: "beta" },
        ],
      },
      {
        icon: <MessageSquare className="w-4 h-4" />,
        title: "CRM",
        items: [
          { name: "Salesforce", desc: "Enterprise CRM", status: "beta" },
          { name: "HubSpot", desc: "Growth CRM", status: "beta" },
          { name: "Pipedrive", desc: "Sales pipeline", status: "soon" },
        ],
      },
      {
        icon: <Headphones className="w-4 h-4" />,
        title: "Support",
        items: [
          { name: "Zendesk", desc: "Customer support tickets", status: "soon" },
          { name: "Intercom", desc: "Customer messaging", status: "soon" },
          { name: "Freshdesk", desc: "Helpdesk", status: "soon" },
        ],
      },
      {
        icon: <ShieldCheck className="w-4 h-4" />,
        title: "Security",
        items: [
          { name: "Okta", desc: "Identity & SSO", status: "beta" },
          { name: "Auth0", desc: "Auth platform", status: "live" },
          { name: "1Password Teams", desc: "Credential management", status: "soon" },
        ],
      },
    ],
  },
];

const COMING_SOON = [
  { emoji: "🎵", name: "Spotify" },
  { emoji: "🎬", name: "Netflix" },
  { emoji: "📦", name: "Amazon Orders" },
  { emoji: "📸", name: "Instagram" },
  { emoji: "💼", name: "LinkedIn" },
  { emoji: "🚴", name: "Strava Groups" },
  { emoji: "💬", name: "WhatsApp Business" },
  { emoji: "✈️", name: "Telegram" },
  { emoji: "🔒", name: "Signal" },
  { emoji: "📓", name: "Notion AI" },
  { emoji: "🎨", name: "Figma" },
  { emoji: "🖼️", name: "Canva" },
  { emoji: "🖌️", name: "Adobe CC" },
];

const FAQ_ITEMS = [
  {
    q: "What data does MEOK read from connected tools?",
    a: "MEOK requests read-only access to the specific data your AI companion needs. For Google Calendar, that means event titles, times, and attendees — not your contacts list or email. Each integration lists exactly what scope is requested before you authorise. We never request write access unless you explicitly turn on an action feature (e.g. calendar scheduling).",
  },
  {
    q: "What if I want to disconnect an integration?",
    a: "Go to Settings → Connect → [integration name] → Disconnect. This immediately revokes MEOK's OAuth token with the platform — the platform confirms the revocation, and MEOK deletes all cached data from that integration within 60 seconds. Nothing is archived. You can reconnect at any time with a fresh authorisation. If you want to disconnect everything and leave MEOK, Settings → Privacy → Full Data Deletion removes all integrations, memories, and account data permanently.",
  },
  {
    q: "Can I connect my own custom API?",
    a: "Yes. MEOK supports custom MCP server connections. If your tool exposes an MCP-compatible endpoint, you can plug it into your companion directly from the Connect page. Bring your own tool.",
  },
  {
    q: "What's the difference between API and MCP connections?",
    a: "API connections use the tool's official REST API with OAuth — your companion calls the API on your behalf. MCP (Model Context Protocol) connections are a newer, standardised way for AI models to interact with tools in real time, with richer context passing. Where both are available, MEOK prefers MCP for speed and depth.",
  },
  {
    q: "Can I share integrations with my team?",
    a: "With Team OS, workspace-level integrations (Slack, GitHub, Notion, etc.) can be connected once and shared across team members who have permission. Each member still authenticates individually — no shared tokens.",
  },
  {
    q: "Is my connected data GDPR compliant?",
    a: "Yes. MEOK.AI Ltd is a UK-registered company. All connected data is encrypted at rest (AES-256) and in transit (TLS 1.3). You can revoke any connection at any time, which triggers immediate deletion of cached data from that integration. We are GDPR-compliant and support data subject access requests.",
  },
];

// ─── FAQ ACCORDION ───────────────────────────────────────────────────────────

function FaqAccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-2xl border transition-all"
      style={{
        borderColor: open ? "rgba(201,168,76,0.4)" : "rgba(26,26,46,0.1)",
        background: open ? "rgba(201,168,76,0.03)" : "#ffffff",
      }}
    >
      <button type="button"
        className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="font-bold text-[#111111] text-sm leading-snug">{q}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-[#c9a84c] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-[#4a4a3a]/40 flex-shrink-0" />
        )}
      </button>
      {open && (
        <p className="px-7 pb-6 text-sm text-[#4a4a3a] leading-relaxed">{a}</p>
      )}
    </div>
  );
}

// ─── STATUS BADGE ────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status?: "live" | "beta" | "soon" }) {
  if (!status || status === "live") return null;
  const styles = {
    beta: "bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/30",
    soon: "bg-[#a0a0b8]/10 text-[#a0a0b8] border-[#a0a0b8]/30",
  };
  const labels = { beta: "Beta", soon: "Soon" };
  return (
    <span className={`ml-2 inline-flex px-1.5 py-0.5 rounded text-[10px] font-bold border ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function ConnectPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#111111]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── HERO ──────────────────────────────────────────── */}
      <section className="relative pt-28 pb-24 px-6 text-center overflow-hidden" style={{ background: "#0d0c18" }}>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,168,76,0.18) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/40 text-[#c9a84c] text-xs font-bold mb-8 uppercase tracking-[0.25em]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            MEOK Integration Universe
          </div>

          <h1 className="text-5xl sm:text-7xl font-black leading-[0.95] mb-6 tracking-tight text-white">
            MEOK connects to{" "}
            <span style={{ color: "#c9a84c" }}>everything</span>
            <br />
            you already use.
          </h1>

          <p className="text-xl text-[#f5f0e8]/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            MEOK plugs into every corner of your digital life via official APIs, MCP tools, and
            native integrations. Your AI companion gets full context — and keeps it all encrypted,
            owned by you.
          </p>

          {/* Integration count stats */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-12">
            {[
              { val: "8",   label: "AI models",         icon: <Bot className="w-4 h-4" /> },
              { val: "15",  label: "gaming platforms",  icon: <Gamepad2 className="w-4 h-4" /> },
              { val: "25+", label: "work tools",        icon: <Terminal className="w-4 h-4" /> },
              { val: "50+", label: "total connected",   icon: <Zap className="w-4 h-4" /> },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="flex items-center justify-center gap-1.5 text-3xl font-black text-[#c9a84c]">
                  {s.val}
                </div>
                <div className="flex items-center justify-center gap-1 text-xs text-[#f5f0e8]/50 uppercase tracking-widest mt-1">
                  {s.icon}
                  <span>{s.label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/hatch"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm transition-all bg-[#c9a84c] text-[#0d0c18] hover:bg-[#d4b86a] shadow-lg"
            >
              Start connecting <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#how-connecting-works"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all"
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* ─── HOW CONNECTING WORKS — 3 steps ─────────────────── */}
      <section id="how-connecting-works" className="py-24 px-6" style={{ background: "#f5f0e8" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#9a9a8a] block mb-4">
              The Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tight">
              From zero to connected in 30 seconds
            </h2>
            <p className="text-[#4a4a3a] mt-4 max-w-xl mx-auto">
              Your data never touches our servers unencrypted.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                num: "01",
                icon: <MousePointerClick className="w-6 h-6" />,
                title: "Choose your integration",
                desc: "Browse the directory, click Connect on any tool. Each listing shows exactly what read permissions MEOK will request — no surprises.",
                color: "#c9a84c",
              },
              {
                num: "02",
                icon: <KeyRound className="w-6 h-6" />,
                title: "OAuth or API key",
                desc: "MEOK opens the platform's official auth flow. Read-only permissions. Takes 30 seconds. You stay in control — revoke any time.",
                color: "#3B82F6",
              },
              {
                num: "03",
                icon: <BrainCircuit className="w-6 h-6" />,
                title: "Your AI knows everything",
                desc: "That tool's context is now available to your companion, encrypted, in your vault. Morning briefs, memory, and intelligence all improve.",
                color: "#7BC47F",
              },
            ].map((step) => (
              <article key={step.num} className="relative">
                {/* Number + icon combo */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${step.color}15`, border: `1px solid ${step.color}30`, color: step.color }}
                  >
                    {step.icon}
                  </div>
                  <span
                    className="text-4xl font-black leading-none"
                    style={{ color: `${step.color}25` }}
                  >
                    {step.num}
                  </span>
                </div>
                <h3 className="text-lg font-black text-[#111111] mb-3">{step.title}</h3>
                <p className="text-sm text-[#4a4a3a] leading-relaxed">{step.desc}</p>
              </article>
            ))}
          </div>

          {/* OAuth mock card */}
          <div className="max-w-sm mx-auto">
            <div
              className="rounded-2xl border p-6"
              style={{ background: "#0d0c18", borderColor: "#c9a84c40" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
                <span className="text-sm font-bold text-[#f5f0e8]">Connecting Google Calendar...</span>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#4285F4] flex items-center justify-center text-white font-bold text-xs mb-3">G</div>
                <p className="text-xs text-[#f5f0e8]/60 mb-3">Google OAuth Screen</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#4ade80]">
                    <Check className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>Read access to calendar events</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#f5f0e8]/40">
                    <X className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="line-through">No write access requested</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#f5f0e8]/40">
                    <X className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="line-through">No email access requested</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 rounded-lg bg-[#c9a84c] text-[#0d0c18] text-xs font-bold">
                  Allow
                </button>
                <button className="flex-1 py-2 rounded-lg border border-white/20 text-[#f5f0e8]/60 text-xs font-medium">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONNECTION STATUS MOCKUP ────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#1a1a2e" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#c9a84c]/70 block mb-4">
              Live example
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              What a connected user looks like
            </h2>
            <p className="text-[#f5f0e8]/55 mt-3 max-w-lg mx-auto text-sm leading-relaxed">
              Once connected, every integration feeds your companion automatically.
            </p>
          </div>

          {/* Mock connection dashboard */}
          <div
            className="rounded-2xl border p-6 sm:p-8"
            style={{ borderColor: "rgba(201,168,76,0.25)", background: "rgba(255,255,255,0.02)" }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-white font-black text-base">Your integrations</p>
                <p className="text-[#f5f0e8]/40 text-xs mt-0.5">6 connected · 2 pending · last synced 4 min ago</p>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-green-400 font-semibold">All live</span>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { emoji: "📧", name: "Gmail", status: "live", detail: "127 new emails · 3 flagged urgent · 2 drafts queued", color: "text-green-400" },
                { emoji: "📅", name: "Google Calendar", status: "live", detail: "5 events today · 2 conflicts detected · morning brief ready", color: "text-green-400" },
                { emoji: "📝", name: "Notion", status: "live", detail: "847 pages indexed · last page: Henderson Account Notes", color: "text-green-400" },
                { emoji: "❤️", name: "Apple Health", status: "live", detail: "Sleep: 7h 12m · HRV: 54ms · care score: 78/100", color: "text-green-400" },
                { emoji: "🎮", name: "Steam", status: "live", detail: "Last session: 2.4h Baldur's Gate 3 · weekly hours: 9.1h", color: "text-green-400" },
                { emoji: "💬", name: "Slack", status: "live", detail: "12 unread DMs · 3 channels active · 1 action item surfaced", color: "text-green-400" },
                { emoji: "🔷", name: "Linear", status: "pending", detail: "Waiting for OAuth confirmation", color: "text-[#f5f0e8]/40" },
                { emoji: "🔶", name: "Outlook", status: "pending", detail: "Connecting...", color: "text-[#f5f0e8]/40" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{ background: item.status === "live" ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <span className="text-xl flex-shrink-0">{item.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold text-sm">{item.name}</span>
                      {item.status === "live" ? (
                        <span className="text-[10px] font-bold text-green-400 bg-green-400/10 border border-green-400/20 px-1.5 py-0.5 rounded">LIVE</span>
                      ) : (
                        <span className="text-[10px] font-bold text-[#f5f0e8]/30 bg-white/5 border border-white/10 px-1.5 py-0.5 rounded">PENDING</span>
                      )}
                    </div>
                    <p className={`text-xs mt-0.5 leading-relaxed ${item.color}`}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRIVACY PER INTEGRATION ─────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#0d0c18" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#c9a84c]/70 block mb-4">
              Full transparency
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Privacy per integration — exactly what MEOK reads
            </h2>
            <p className="text-[#f5f0e8]/50 mt-3 max-w-lg mx-auto text-sm leading-relaxed">
              Before you connect anything, you see exactly what MEOK can read and what it never touches.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                emoji: "📧",
                name: "Gmail",
                reads: ["Email subjects and bodies (on request)", "Sender names and addresses", "Thread history for drafting context", "Your sent emails (for style learning)"],
                never: ["Attachments (unless you share them)", "Contacts list", "Your password or account credentials"],
              },
              {
                emoji: "📝",
                name: "Notion",
                reads: ["Page titles and content", "Database entries and properties", "Workspace structure and page hierarchy"],
                never: ["Notion account credentials", "Pages you haven't connected", "Workspace admin settings"],
              },
              {
                emoji: "📅",
                name: "Google Calendar",
                reads: ["Event titles, times, and attendees", "Your availability and free/busy blocks", "Recurring meeting patterns"],
                never: ["Email access (separate permission)", "Contacts or address book", "Other Google account data"],
              },
              {
                emoji: "❤️",
                name: "Apple Health",
                reads: ["Sleep duration and quality scores", "Exercise sessions and step counts", "Heart rate and HRV readings"],
                never: ["Medical records or prescriptions", "Reproductive health data", "Data shared with other apps"],
              },
              {
                emoji: "🎮",
                name: "Steam",
                reads: ["Game library and play history", "Session length and frequency", "Achievement data and playtime stats"],
                never: ["Payment methods or purchase history", "Friends list or private messages", "Steam account credentials"],
              },
            ].map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border p-6"
                style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{item.emoji}</span>
                  <h3 className="font-black text-white text-base">{item.name}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-green-400/70 mb-3">MEOK reads</p>
                    <ul className="space-y-2">
                      {item.reads.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-xs text-[#f5f0e8]/65">
                          <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-red-400/60 mb-3">MEOK never touches</p>
                    <ul className="space-y-2">
                      {item.never.map((n) => (
                        <li key={n} className="flex items-start gap-2 text-xs text-[#f5f0e8]/35">
                          <X className="w-3.5 h-3.5 text-red-400/50 flex-shrink-0 mt-0.5" />
                          {n}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MCP ARCHITECTURE CALLOUT ────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#1a1a2e" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#c9a84c]/70 block mb-4">
              Under the Hood
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#c9a84c] tracking-tight mb-6">
              Built on MCP — the open standard for AI integrations
            </h2>
            <p className="text-[#f5f0e8]/60 max-w-2xl mx-auto leading-relaxed">
              Model Context Protocol (MCP) is an open standard pioneered by Anthropic that defines
              how AI models communicate with external tools in real time. Instead of slow, brittle API
              wrappers, MEOK implements MCP — giving your companion a universal, auditable language to
              talk to any compatible service.
            </p>
          </div>

          {/* MCP callout box */}
          <div
            className="rounded-2xl border p-8 mb-10"
            style={{ borderColor: "rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.04)" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                { label: "Protocol", value: "MCP v1.0",   sub: "Anthropic open standard" },
                { label: "Auth",     value: "OAuth 2.0",  sub: "Official platform flows" },
                { label: "Storage",  value: "AES-256",    sub: "Encrypted at rest" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs text-[#c9a84c]/60 uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-xl font-black text-[#c9a84c]">{item.value}</p>
                  <p className="text-xs text-[#f5f0e8]/40 mt-0.5">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="w-5 h-5" />,
                title: "Real-time context",
                desc: "MCP connections stream live data to your companion. Your calendar for today. Your latest GitHub PR. Your Slack unread count. All in context, right now.",
              },
              {
                icon: <Shield className="w-5 h-5" />,
                title: "Standardised & auditable",
                desc: "Every MCP call is logged. You can see exactly what your companion queried, when, and what it received. No black boxes.",
              },
              {
                icon: <Lock className="w-5 h-5" />,
                title: "Bring your own MCP server",
                desc: "Running your own infrastructure? Point MEOK at your MCP endpoint. Your companion can access your internal tools without any data leaving your network.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border bg-white/[0.03]"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <div className="text-[#c9a84c] mb-4">{item.icon}</div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-[#f5f0e8]/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCT SECTIONS ────────────────────────────────── */}
      {PRODUCTS.map((product) => (
        <section
          key={product.id}
          id={product.id}
          className="py-20 px-6"
          style={{
            background:
              product.id === "work" ? "#1a1a2e"
              : product.id === "team" ? "#0d0c18"
              : "#FAF9F6",
          }}
        >
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="flex items-center gap-3 mb-12">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: product.pillBg }}
              >
                {product.emoji}
              </div>
              <div>
                <div
                  className="text-xs font-bold uppercase tracking-[0.2em] mb-0.5"
                  style={{ color: product.color }}
                >
                  {product.label}
                </div>
                <h2
                  className="text-2xl sm:text-3xl font-black tracking-tight"
                  style={{
                    color: product.id === "work" || product.id === "team" ? "#ffffff" : "#111111",
                  }}
                >
                  {product.label} Integrations
                </h2>
              </div>
            </div>

            {/* Special case for gaming */}
            {product.id === "gaming" ? (
              <div>
                <div
                  className="rounded-2xl border p-8 mb-6"
                  style={{ borderColor: `${product.color}30`, background: product.bg }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div style={{ color: product.color }}>
                      {product.groups[0].icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111111] mb-1">{product.groups[0].title}</h3>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {product.groups[0].items.map((item) => (
                          <span
                            key={item.name}
                            className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border"
                            style={{
                              background: `${product.color}10`,
                              borderColor: `${product.color}30`,
                              color: "#111111",
                            }}
                          >
                            {item.name}
                            <StatusBadge status={item.status} />
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[#4a4a3a]">
                    + 40 more gaming platform integrations.{" "}
                    <Link href="/gaming" className="underline" style={{ color: product.color }}>
                      See full list on /gaming →
                    </Link>
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {product.groups.map((group) => (
                  <div
                    key={group.title}
                    className="rounded-2xl border p-6"
                    style={{
                      borderColor:
                        product.id === "work" || product.id === "team"
                          ? "rgba(255,255,255,0.08)"
                          : `${product.color}25`,
                      background:
                        product.id === "work" || product.id === "team"
                          ? "rgba(255,255,255,0.03)"
                          : product.bg,
                    }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span
                        style={{
                          color:
                            product.id === "work" || product.id === "team"
                              ? product.color
                              : product.color,
                        }}
                      >
                        {group.icon}
                      </span>
                      <h3
                        className="font-bold text-sm"
                        style={{
                          color:
                            product.id === "work" || product.id === "team"
                              ? "#ffffff"
                              : "#111111",
                        }}
                      >
                        {group.title}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {group.items.map((item) => (
                        <li key={item.name} className="flex items-start gap-2.5">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                            style={{ background: product.color }}
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center flex-wrap gap-1">
                              <span
                                className="text-sm font-semibold"
                                style={{
                                  color:
                                    product.id === "work" || product.id === "team"
                                      ? "#f5f0e8"
                                      : "#111111",
                                }}
                              >
                                {item.name}
                              </span>
                              <StatusBadge status={item.status} />
                            </div>
                            <p
                              className="text-xs mt-0.5 leading-relaxed"
                              style={{
                                color:
                                  product.id === "work" || product.id === "team"
                                    ? "rgba(245,240,232,0.5)"
                                    : "#6b6b6b",
                              }}
                            >
                              {item.desc}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* ─── COMING SOON ─────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#9a9a8a] block mb-4">
              On the roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tight">
              Coming soon to MEOK
            </h2>
            <p className="text-[#4a4a3a] mt-4 max-w-xl mx-auto">
              These integrations are in development or pending API access. Vote for your most-wanted
              via the community council.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {COMING_SOON.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#e8e4dc] bg-white text-sm font-medium text-[#4a4a3a] hover:border-[#c9a84c]/50 hover:text-[#111111] transition-all cursor-default"
              >
                <span>{item.emoji}</span>
                <span>{item.name}</span>
                <span className="text-[10px] font-bold text-[#a0a0b8] border border-[#e8e4dc] rounded px-1 py-0.5 ml-1">
                  SOON
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/council"
              className="inline-flex items-center gap-2 text-sm text-[#c9a84c] font-semibold hover:underline"
            >
              Vote for integrations in the Character Council <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#1a1a2e" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#c9a84c] text-sm font-bold tracking-widest uppercase mb-4">
            One OS. Everything Connected.
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
            Connect your digital life.
            <br />
            <span style={{ color: "#c9a84c" }}>Own all of it.</span>
          </h2>
          <p className="text-[#f5f0e8]/60 mb-10 leading-relaxed">
            Every integration feeds your companion. Every connection stays encrypted. Every byte of
            data — yours.
          </p>

          {/* Mini stat row */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            {[
              { val: "8",   label: "AI models"         },
              { val: "15",  label: "gaming platforms"  },
              { val: "25+", label: "work tools"        },
              { val: "50+", label: "total connected"   },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-black text-[#c9a84c]">{s.val}</div>
                <div className="text-xs text-[#f5f0e8]/40 uppercase tracking-widest mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          <Link
            href="/hatch"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-sm transition-all bg-[#c9a84c] text-[#0d0c18] hover:bg-[#d4b86a] shadow-lg"
          >
            Hatch free <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-white/20 text-xs mt-4">Free forever. No credit card. Sovereign by design.</p>
        </div>
      </section>

      {/* ─── PRIVACY CALLOUT ─────────────────────────────────── */}
      <section className="py-20 px-6" style={{ background: "#f5f0e8" }}>
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-start gap-8"
            style={{ background: "#0d0c18", border: "1px solid rgba(201,168,76,0.2)" }}>
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "rgba(201,168,76,0.1)" }}>
                <Shield className="w-7 h-7 text-[#c9a84c]" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-black text-white mb-3">Your connections are read-only by default. Your data never leaves.</h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(245,240,232,0.6)" }}>
                MEOK requests the minimum read permissions required for each integration. We never request write access unless you explicitly enable an action feature (like calendar scheduling). Every call is logged, auditable, and revocable at any time — triggering immediate deletion of cached data.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: <EyeOff className="w-4 h-4" />, title: "Read-only by default", desc: "No write access unless you enable it." },
                  { icon: <Server className="w-4 h-4" />, title: "AES-256 at rest", desc: "All cached data encrypted in your vault." },
                  { icon: <Lock className="w-4 h-4" />, title: "Revoke instantly", desc: "One click removes all cached data." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <div style={{ color: "#c9a84c", flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
                    <div>
                      <p className="font-bold text-white text-sm">{item.title}</p>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(245,240,232,0.45)" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#f5f0e8" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#c9a84c]/70 mb-4">Questions</p>
            <h2 className="text-3xl font-black text-[#111111] tracking-tight">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item) => (
              <FaqAccordionItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
