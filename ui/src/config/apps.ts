
import { 
  Shield, 
  Truck, 
  Network, 
  Cpu, 
  Brain, 
  MessageSquare, 
  Search, 
  Monitor, 
  Eye, 
  Users, 
  Sparkles,
  LifeBuoy,
  Wrench,
  Gamepad2,
  Factory
} from "lucide-react";

export interface AppConfig {
  id: string;
  name: string;
  desc: string;
  href: string;
  icon: any;
  color: string;
  status: string;
  category: 'core' | 'logistics' | 'governance' | 'utility' | 'crisis';
}

export const MEOKCLAW_APPS: AppConfig[] = [
  // ─── CORE OS ──────────────────────────────────────────────────────────────
  {
    id: "chat",
    name: "Companion_Chat",
    desc: "Primary neural interface with your sovereign companion.",
    href: "/dashboard/chat",
    icon: MessageSquare,
    color: "#c9a84c",
    status: "online",
    category: 'core'
  },
  {
    id: "topology",
    name: "Topology_Graph",
    desc: "Interactive system architecture and knowledge mapping.",
    href: "/dashboard/topology",
    icon: Network,
    color: "#a78bfa",
    status: "synced",
    category: 'core'
  },
  {
    id: "intelligence",
    name: "Neural_Core",
    desc: "Real-time Phi-levels and SSM/Mamba recursion health.",
    href: "/dashboard/intelligence",
    icon: Brain,
    color: "#60a5fa",
    status: "active",
    category: 'core'
  },
  {
    id: "twin",
    name: "Digital_Twin",
    desc: "Physical substrate sync (Hydraulics & Marangoni).",
    href: "/dashboard/digital-twin",
    icon: Box,
    color: "#2d9b8a",
    status: "synced",
    category: 'core'
  },
  // ─── GOVERNANCE ───────────────────────────────────────────────────────────
  {
    id: "governance",
    name: "Governance_Vault",
    desc: "EU AI Act compliance and HMAC-signed audit artifacts.",
    href: "/dashboard/governance",
    icon: Shield,
    color: "#c9a84c",
    status: "monitoring",
    category: 'governance'
  },
  {
    id: "republic",
    name: "Digital_Republic",
    desc: "BFT Master Controller for the 47 Generals.",
    href: "/dashboard/republic",
    icon: Users,
    color: "#a78bfa",
    status: "established",
    category: 'governance'
  },
  // ─── LOGISTICS ────────────────────────────────────────────────────────────
  {
    id: "logistics",
    name: "Logistics_Command",
    desc: "Heavy machinery fleet and waste logistics optimization.",
    href: "/dashboard/logistics",
    icon: Truck,
    color: "#2d9b8a",
    status: "active",
    category: 'logistics'
  },
  {
    id: "predictive",
    name: "World_Action_Model",
    desc: "Predictive state estimation and surprise minimization.",
    href: "/dashboard/predictive",
    icon: Eye,
    color: "#2d9b8a",
    status: "active",
    category: 'logistics'
  },
  // ─── UTILITIES (Ported MVPs) ──────────────────────────────────────────────
  {
    id: "diyhelp",
    name: "DIY_Support",
    desc: "Expert Abuntu-based guidance for physical maintenance.",
    href: "/dashboard/diy",
    icon: Wrench,
    color: "#fbbf24",
    status: "ready",
    category: 'utility'
  },
  {
    id: "loops",
    name: "Loop_Factory",
    desc: "Automated business workflow generator (n8n powered).",
    href: "/dashboard/loops",
    icon: Factory,
    color: "#60a5fa",
    status: "ready",
    category: 'utility'
  },
  {
    id: "suicidestop",
    name: "Suicide_Stop",
    desc: "Non-profit crisis monitoring and protocol intervention.",
    href: "/dashboard/crisis",
    icon: LifeBuoy,
    color: "#f87171",
    status: "monitoring",
    category: 'crisis'
  },
  {
    id: "mcp",
    name: "MCP_Toolbelt",
    desc: "Equip 235+ modular AI capabilities instantly.",
    href: "/labs/mcp/servers",
    icon: Cpu,
    color: "#fbbf24",
    status: "235_loaded",
    category: 'utility'
  },
];
