"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

interface MapNode {
  id: string;
  label: string;
  description: string;
  x: number;
  y: number;
  layer: "town" | "underground" | "sky" | "orbit" | "deep";
  href: string;
}

const NODES: MapNode[] = [
  { id: "town-hall", label: "Town Hall", description: "Hybrid AI-human council chamber", x: 400, y: 250, layer: "town", href: "/council" },
  { id: "residential", label: "Residential", description: "Founding plots & player housing", x: 340, y: 210, layer: "town", href: "/pioneer" },
  { id: "market", label: "Market", description: "Agent-driven economy & auctions", x: 460, y: 210, layer: "town", href: "/pioneer" },
  { id: "industrial", label: "Industrial", description: "Factories, rovers & fabrication", x: 340, y: 290, layer: "town", href: "/pioneer" },
  { id: "innovation", label: "Innovation", description: "Research labs & data nodes", x: 460, y: 290, layer: "town", href: "/universe" },
  { id: "spaceport", label: "Spaceport", description: "Launch to ORBIT & beyond", x: 400, y: 360, layer: "town", href: "/go" },
  { id: "mines", label: "Underground Mines", description: "Ore, power & world artifacts", x: 250, y: 400, layer: "underground", href: "/dome" },
  { id: "sky-lane", label: "Sky Lanes", description: "Drones, taxis & weather", x: 550, y: 130, layer: "sky", href: "/go" },
  { id: "orbit-station", label: "Orbit Station", description: "Mining & lunar commerce", x: 680, y: 250, layer: "orbit", href: "/dome" },
  { id: "deep-gate", label: "Deep Space Gate", description: "Procedural expeditions", x: 400, y: 70, layer: "deep", href: "/dome" },
];

const LAYER_RINGS = [
  { layer: "deep", r: 280, stroke: "rgba(201,168,76,0.12)" },
  { layer: "orbit", r: 220, stroke: "rgba(139,92,246,0.14)" },
  { layer: "sky", r: 160, stroke: "rgba(59,130,246,0.12)" },
  { layer: "town", r: 100, stroke: "rgba(45,155,138,0.16)" },
];

const LAYER_COLORS: Record<MapNode["layer"], string> = {
  town: "#2d9b8a",
  underground: "#22c55e",
  sky: "#3b82f6",
  orbit: "#8b5cf6",
  deep: "#c9a84c",
};

function classForLayer(layer: MapNode["layer"]) {
  switch (layer) {
    case "town":
      return "fill-[#2d9b8a]";
    case "underground":
      return "fill-[#22c55e]";
    case "sky":
      return "fill-[#3b82f6]";
    case "orbit":
      return "fill-[#8b5cf6]";
    case "deep":
      return "fill-[#c9a84c]";
  }
}

export default function DomeWorldMap() {
  const router = useRouter();
  const [tooltip, setTooltip] = useState<{ node: MapNode; x: number; y: number } | null>(null);

  const agents = useMemo(
    () => [
      { id: 1, from: NODES[1], to: NODES[2], offset: 0.2 },
      { id: 2, from: NODES[3], to: NODES[6], offset: 0.6 },
      { id: 3, from: NODES[4], to: NODES[8], offset: 0.4 },
      { id: 4, from: NODES[0], to: NODES[9], offset: 0.8 },
    ],
    []
  );

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a12]">
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)", backgroundSize: "24px 24px" }} />
      <svg viewBox="0 0 800 460" className="relative z-10 h-auto w-full" role="img" aria-label="MEOK DOME interactive world map">
        {/* Rings */}
        {LAYER_RINGS.map((ring) => (
          <circle
            key={ring.layer}
            cx={400}
            cy={250}
            r={ring.r}
            fill="none"
            stroke={ring.stroke}
            strokeWidth={1}
            strokeDasharray="6 6"
          />
        ))}

        {/* Layer labels */}
        {[
          { label: "DEEP SPACE", x: 400, y: 35 },
          { label: "ORBIT", x: 685, y: 250 },
          { label: "SKY", x: 555, y: 105 },
          { label: "TOWN", x: 400, y: 385 },
        ].map((l) => (
          <text key={l.label} x={l.x} y={l.y} textAnchor="middle" className="fill-white/20 text-[10px] font-bold uppercase tracking-widest">
            {l.label}
          </text>
        ))}

        {/* Agent blips */}
        {agents.map((a) => {
          const x = a.from.x + (a.to.x - a.from.x) * a.offset;
          const y = a.from.y + (a.to.y - a.from.y) * a.offset;
          return (
            <g key={a.id}>
              <circle cx={x} cy={y} r={4} className="fill-white/80 animate-pulse" />
            </g>
          );
        })}

        {/* Nodes */}
        {NODES.map((node) => (
          <g key={node.id} className="cursor-pointer" onClick={() => router.push(node.href)} onMouseEnter={() => setTooltip((t) => (t && t.node.id === node.id ? t : { node, x: node.x, y: node.y }))} onMouseLeave={() => setTooltip(null)}>
            <circle cx={node.x} cy={node.y} r={8} className={`${classForLayer(node.layer)} opacity-20`} />
            <circle cx={node.x} cy={node.y} r={5} className={classForLayer(node.layer)} />
            <circle cx={node.x} cy={node.y} r={9} className="fill-none stroke-white/20" strokeWidth={1}>
              <animate attributeName="r" values="9;14;9" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
            </circle>
            <text x={node.x} y={node.y + 22} textAnchor="middle" className="fill-white/80 text-[11px] font-semibold">
              {node.label}
            </text>
          </g>
        ))}
      </svg>

      {tooltip && (
        <div
          className="pointer-events-none absolute z-20 rounded-xl border border-white/10 bg-[#13121f]/95 px-4 py-3 text-sm shadow-xl backdrop-blur"
          style={{
            left: `${(tooltip.x / 800) * 100}%`,
            top: `${(tooltip.y / 460) * 100}%`,
            transform: "translate(-50%, -130%)",
          }}
        >
          <div className="font-semibold" style={{ color: LAYER_COLORS[tooltip.node.layer] }}>
            {tooltip.node.label}
          </div>
          <div className="mt-0.5 text-white/60">{tooltip.node.description}</div>
          <div className="mt-1 text-xs text-white/40">Click to explore →</div>
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-3 left-3 z-20 flex flex-wrap gap-3 text-[10px] font-semibold uppercase tracking-wider text-white/40">
        {Object.entries(LAYER_COLORS).map(([layer, color]) => (
          <div key={layer} className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
            {layer}
          </div>
        ))}
      </div>
    </div>
  );
}
