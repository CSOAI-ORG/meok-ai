import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Users,
  Landmark,
  Wallet,
  FileText,
  Gamepad2,
  Swords,
  HandHeart,
  FlaskConical,
  Trophy,
  Radio,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  IdCard,
} from "lucide-react";
import { FeatureCard } from "@/components/design-system/feature-card";
import { StatCard } from "@/components/design-system/stat-card";
import { Surface } from "@/components/design-system/surface";
import PioneerSignup from "../pioneer/pioneer-signup";
import { TownMap, TownScoreboard } from "./town-interactive";

export const metadata: Metadata = {
  title: "MEOK Town — Where MCP Servers Are Buildings & A2A Connections Are Roads",
  description:
    "Walk through MEOK Town: 290+ MCP servers as buildings, A2A agents as roads, live scoreboards, protocol quests, and a sovereign AI governance hall.",
  alternates: { canonical: "https://meok.ai/town" },
  openGraph: {
    title: "MEOK Town — MCP Buildings, A2A Roads, Protocol Quests",
    description:
      "The world's first walkable protocol town. Test MCP servers, compete on the scoreboard, and govern AI agents in a persistent simulation.",
    type: "website",
    url: "https://meok.ai/town",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "MEOK Town — MCP + A2A Protocol Town",
  url: "https://meok.ai/town",
  description:
    "MEOK Town turns MCP servers into buildings and A2A connections into roads, creating a playable, testable simulation of the agentic internet.",
};

const GAME_MODES = [
  {
    title: "Town Admin",
    subtitle: "Solo",
    icon: Gamepad2,
    iconVariant: "gold" as const,
    description: "Walk around, test individual MCP buildings, debug issues, and earn points for every bug found.",
  },
  {
    title: "Protocol Wars",
    subtitle: "PvP",
    icon: Swords,
    iconVariant: "orange" as const,
    description: "Two teams race to break or fix each other's MCP servers. Fastest team to stabilize the town wins.",
  },
  {
    title: "Great Interop",
    subtitle: "Co-op",
    icon: HandHeart,
    iconVariant: "teal" as const,
    description: "Everyone works together to connect 290+ MCPs into one working network. Unlimited players.",
  },
  {
    title: "Playground",
    subtitle: "Sandbox",
    icon: FlaskConical,
    iconVariant: "purple" as const,
    description: "Spawn any MCP, test any tool, experiment with A2A roads — no consequences, pure learning.",
  },
];

const DISTRICTS = [
  {
    title: "MCP City",
    icon: Building2,
    iconVariant: "gold" as const,
    description: "290+ buildings, one per MCP server. Height shows tool count. Lights pulse with live calls. Roads between buildings are A2A connections.",
  },
  {
    title: "Agent Quarters",
    icon: Users,
    iconVariant: "teal" as const,
    description: "145+ MEOK agent homes. Each door displays an A2A Agent Card, an ERC-8004 reputation score, and an Ed25519 sigil.",
    action: (
      <Link
        href="/api/characters/aria/agent-card"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2d9b8a] hover:underline"
      >
        <IdCard size={16} /> View sample Agent Card
      </Link>
    ),
  },
  {
    title: "Governance Hall",
    icon: Landmark,
    iconVariant: "green" as const,
    description: "BFT Council chamber, voting floor, compliance dashboard, and permanent Arweave audit log. Laws are reached by consensus.",
  },
  {
    title: "Payment Hub",
    icon: Wallet,
    iconVariant: "purple" as const,
    description: "x402 micropayments and Google AP2 routes. Players earn when their tests improve a building's health score.",
  },
  {
    title: "Patent Office",
    icon: FileText,
    iconVariant: "blue" as const,
    description: "openpatent.ai integration for prior-art search, invention tracking, and competitor monitoring. Protect what's patentable.",
  },
];

const CRITICAL_GAPS = [
  { name: "A2A Protocol", why: "Google's Agent-to-Agent standard for cross-agent collaboration." },
  { name: "AGNTCY / AAIF", why: "Linux Foundation's 170-member Agentic AI standards body." },
  { name: "TEE Attestation", why: "Prove agents ran correctly inside a verifiable enclave." },
  { name: "ERC-8004 Reputation", why: "On-chain trust score for every agent in the town." },
  { name: "Arweave Audit Storage", why: "Compliance logs stored forever, tamper-proof." },
  { name: "Akash Compute", why: "Censorship-resistant, decentralized agent hosting." },
  { name: "FIDO Agentic Auth", why: "Identity standard being built by Google / OpenAI / Mastercard." },
];

export default function TownPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0d0c18] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative px-6 pt-28 pb-20 text-center">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(201,168,76,0.10)_0%,transparent_70%)] blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-[radial-gradient(ellipse,rgba(45,155,138,0.08)_0%,transparent_70%)] blur-3xl" />
        </div>

        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#c9a84c]">
          <span>🏘️</span> Protocol Town
        </div>

        <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          MCP <span className="text-[#c9a84c]">buildings</span>. A2A{" "}
          <span className="text-[#2d9b8a]">roads</span>. A town you can test.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
          MEOK Town turns the abstract agentic internet into a walkable simulation. Every MCP server is a building.
          Every A2A connection is a glowing road. Players test protocols, earn points, and govern AI agents.
        </p>

        <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="#town-map"
            className="rounded-xl bg-[#c9a84c] px-8 py-3.5 font-bold text-[#0d0c18] transition hover:bg-[#b8963e]"
          >
            Enter the Town
          </Link>
          <Link
            href="https://github.com/CSOAI-ORG/clawd-workspace/blob/main/meok-universe/research/mcp_a2a_town_integration.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 font-semibold text-white transition hover:bg-white/10"
          >
            Read the Architecture <ExternalLink size={16} />
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="MCP Buildings" value="290+" glow="gold" icon={<Building2 size={20} />} />
          <StatCard label="A2A Agents" value="47" glow="teal" icon={<Users size={20} />} />
          <StatCard label="Game Modes" value="4" glow="purple" icon={<Gamepad2 size={20} />} />
          <StatCard label="Live Scoreboard" value="Now" change="openmcp simulation" changeType="positive" glow="green" icon={<Trophy size={20} />} />
        </div>
      </section>

      {/* GAME MODES */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">4 Ways to Play</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Protocol testing becomes a game. Solo debugging, team PvP, massive co-op interoperability, or consequence-free sandbox.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GAME_MODES.map((mode) => (
            <FeatureCard
              key={mode.title}
              title={mode.title}
              icon={mode.icon}
              iconVariant={mode.iconVariant}
              glow={mode.iconVariant}
              description={
                <>
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-white/40">{mode.subtitle}</span>
                  {mode.description}
                </>
              }
            />
          ))}
        </div>
      </section>

      {/* TOWN MAP */}
      <section id="town-map" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">The 5 Districts</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Click any district on the map to explore. Roads pulse with A2A traffic; buildings brighten with healthy calls.
          </p>
        </div>
        <TownMap />
      </section>

      {/* DISTRICT CARDS */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DISTRICTS.map((d) => (
            <FeatureCard
              key={d.title}
              title={d.title}
              icon={d.icon}
              iconVariant={d.iconVariant}
              glow={d.iconVariant}
              description={d.description}
            />
          ))}
        </div>
      </section>

      {/* SCOREBOARD */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">CSOAI MCP Scoreboard</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Live health scores from protocol-testing quests. Golden buildings climb the ranks; broken ones fall.
          </p>
        </div>
        <TownScoreboard />
      </section>

      {/* 20 GAPS TEASER */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">20 Gaps We're Closing</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            MEOK Town is not just a demo — it's a roadmap. Here are the critical standards and tools being integrated next.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Surface variant="elevated" className="p-6">
            <div className="mb-4 flex items-center gap-3">
              <ShieldCheck className="text-[#c9a84c]" size={24} />
              <h3 className="text-xl font-semibold">Critical — Add Now</h3>
            </div>
            <ul className="space-y-3">
              {CRITICAL_GAPS.map((gap) => (
                <li key={gap.name} className="flex items-start gap-3 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a84c]" />
                  <div>
                    <span className="font-semibold text-white">{gap.name}</span>
                    <p className="text-white/50">{gap.why}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Surface>

          <Surface variant="elevated" className="flex flex-col justify-between p-6">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Radio className="text-[#2d9b8a]" size={24} />
                <h3 className="text-xl font-semibold">High Priority</h3>
              </div>
              <p className="text-white/70">
                Agent Cards, AGENTS.md, AP2 payments, Ceramic/ComposeDB, openpatent.ai, SLIM quantum-safe messaging, and a certified agent marketplace.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="https://github.com/CSOAI-ORG/clawd-workspace/blob/main/meok-universe/research/csoai_missing_tools.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#c9a84c] hover:underline"
              >
                See all 20 gaps <ArrowRight size={14} />
              </Link>
              <Link
                href="https://github.com/CSOAI-ORG/clawd-workspace/blob/main/meok-universe/research/openpatent_strategy.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2d9b8a] hover:underline"
              >
                OpenPatent strategy <ArrowRight size={14} />
              </Link>
            </div>
          </Surface>
        </div>
      </section>

      {/* CTA / SIGNUP */}
      <section className="mx-auto max-w-4xl px-6 pb-24 text-center">
        <Surface variant="glass" glow="gold" className="p-8 md:p-12">
          <h2 className="text-3xl font-bold md:text-4xl">Become a Founding Towns-person</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Pioneer Program members get early access to MEOK Town, protocol quests, and governance rights before the public launch.
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <PioneerSignup />
          </div>
        </Surface>
      </section>
    </main>
  );
}
