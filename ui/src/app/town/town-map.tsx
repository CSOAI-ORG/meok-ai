"use client";

import { useState } from "react";
import { Building2, Users, Landmark, Wallet, FileText } from "lucide-react";
import { Surface } from "@/components/design-system/surface";

const DISTRICTS = [
  {
    id: "mcp-city",
    name: "MCP City",
    icon: Building2,
    color: "#c9a84c",
    x: 50,
    y: 30,
    size: 22,
    blurb: "290+ MCP servers as buildings. Height = tool count. Lights = active calls. Roads = A2A connections.",
    facts: ["Public scoreboard", "Protocol quests", "Live traffic visualization"],
  },
  {
    id: "agent-quarters",
    name: "Agent Quarters",
    icon: Users,
    color: "#2d9b8a",
    x: 22,
    y: 55,
    size: 16,
    blurb: "47 CSOAI agent homes. Agent Cards on every door. Reputation scores and Ed25519 sigils on every transaction.",
    facts: ["47 agent homes", "Agent Cards (A2A)", "On-chain reputation"],
  },
  {
    id: "governance-hall",
    name: "Governance Hall",
    icon: Landmark,
    color: "#22c55e",
    x: 78,
    y: 55,
    size: 16,
    blurb: "BFT Council chamber, voting system, compliance dashboard, and permanent Arweave audit log.",
    facts: ["BFT consensus", "Voting system", "Permanent audit log"],
  },
  {
    id: "payment-hub",
    name: "Payment Hub",
    icon: Wallet,
    color: "#8b5cf6",
    x: 35,
    y: 78,
    size: 14,
    blurb: "x402 micropayments + Google AP2. Revenue flows back to players who test and improve the town.",
    facts: ["x402 paywalls", "AP2 payments", "Player revenue share"],
  },
  {
    id: "patent-office",
    name: "Patent Office",
    icon: FileText,
    color: "#3b82f6",
    x: 65,
    y: 78,
    size: 14,
    blurb: "openpatent.ai integration. Auto prior-art search, invention tracker, competitor monitoring.",
    facts: ["Prior-art search", "Invention tracker", "Competitor alerts"],
  },
];

export default function TownMap() {
  const [selected, setSelected] = useState<string | null>("mcp-city");
  const active = DISTRICTS.find((d) => d.id === selected) ?? DISTRICTS[0];

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
      <Surface variant="neo" className="relative aspect-square w-full overflow-hidden p-6 lg:aspect-auto lg:min-h-[520px]">
        <svg viewBox="0 0 100 100" className="h-full w-full" aria-label="MEOK Town map">
          {/* Subtle radial background */}
          <defs>
            <radialGradient id="town-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(201,168,76,0.08)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <rect width="100" height="100" fill="url(#town-glow)" />

          {/* Roads / A2A connections */}
          <g stroke="rgba(255,255,255,0.08)" strokeWidth="0.6" strokeDasharray="2 2">
            <line x1="50" y1="30" x2="22" y2="55" />
            <line x1="50" y1="30" x2="78" y2="55" />
            <line x1="22" y1="55" x2="35" y2="78" />
            <line x1="78" y1="55" x2="65" y2="78" />
            <line x1="35" y1="78" x2="65" y2="78" />
            <line x1="50" y1="30" x2="50" y2="50" />
          </g>

          {/* Animated traffic particles */}
          {[
            { x1: 50, y1: 30, x2: 22, y2: 55 },
            { x1: 50, y1: 30, x2: 78, y2: 55 },
            { x1: 22, y1: 55, x2: 35, y2: 78 },
            { x1: 78, y1: 55, x2: 65, y2: 78 },
          ].map((road, i) => (
            <circle key={i} r="0.8" fill="#c9a84c">
              <animateMotion
                dur={`${3 + i * 0.5}s`}
                repeatCount="indefinite"
                path={`M${road.x1},${road.y1} L${road.x2},${road.y2}`}
              />
            </circle>
          ))}

          {/* District nodes */}
          {DISTRICTS.map((d) => {
            const isActive = selected === d.id;
            const Icon = d.icon;
            return (
              <g
                key={d.id}
                className="cursor-pointer transition-opacity"
                onClick={() => setSelected(d.id)}
                style={{ opacity: isActive ? 1 : 0.75 }}
              >
                <circle
                  cx={d.x}
                  cy={d.y}
                  r={isActive ? d.size * 0.55 : d.size * 0.45}
                  fill={isActive ? `${d.color}22` : "rgba(255,255,255,0.03)"}
                  stroke={d.color}
                  strokeWidth={isActive ? 0.8 : 0.5}
                />
                <foreignObject x={d.x - 4} y={d.y - 4} width="8" height="8">
                  <div className="flex h-full w-full items-center justify-center" style={{ color: d.color }}>
                    <Icon size={10} />
                  </div>
                </foreignObject>
                <text
                  x={d.x}
                  y={d.y + d.size * 0.7}
                  textAnchor="middle"
                  fill={isActive ? d.color : "rgba(255,255,255,0.6)"}
                  fontSize="2.4"
                  fontWeight={600}
                >
                  {d.name}
                </text>
              </g>
            );
          })}
        </svg>
      </Surface>

      <Surface variant="elevated" className="flex flex-col p-6">
        <div className="mb-4 flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl"
            style={{ backgroundColor: `${active.color}20`, color: active.color }}
          >
            <active.icon size={20} />
          </div>
          <h3 className="text-xl font-semibold text-white">{active.name}</h3>
        </div>
        <p className="leading-relaxed text-white/70">{active.blurb}</p>
        <ul className="mt-5 space-y-2">
          {active.facts.map((fact) => (
            <li key={fact} className="flex items-center gap-2 text-sm text-white/60">
              <span style={{ color: active.color }}>●</span> {fact}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">Select a district</p>
          <div className="flex flex-wrap gap-2">
            {DISTRICTS.map((d) => (
              <button type="button"
                key={d.id}
                onClick={() => setSelected(d.id)}
                className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium transition hover:border-white/20"
                style={{
                  backgroundColor: selected === d.id ? `${d.color}18` : "rgba(255,255,255,0.03)",
                  color: selected === d.id ? d.color : "rgba(255,255,255,0.7)",
                }}
              >
                {d.name}
              </button>
            ))}
          </div>
        </div>
      </Surface>
    </div>
  );
}
