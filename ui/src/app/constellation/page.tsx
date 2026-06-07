import type { Metadata } from "next";
import Link from "next/link";
import {
  Brain,
  Shield,
  Globe,
  Fish,
  Truck,
  Boxes,
  Network,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "The MEOK Constellation — Every Real Product, One Ecosystem | MEOK.AI",
  description:
    "The canonical map of the MEOK / CSOAI ecosystem: the sovereign AI OS, the CSOAI AI-governance fleet, and the live vertical products — and exactly how they integrate. Every node is a real, reachable site.",
  alternates: { canonical: "https://meok.ai/constellation" },
  openGraph: {
    title: "The MEOK Constellation — one ecosystem, real integrations",
    description:
      "How MEOK's sovereign AI OS, CSOAI governance fleet, compliance answer-engines, and vertical products actually connect. The canonical, verifiable ecosystem map.",
    type: "website",
    url: "https://meok.ai/constellation",
  },
};

// Every entry is a real, verified-live surface (checked 2026-06-07). Honesty rule:
// we amplify reality, never fabricate it — products that aren't live are not listed.
type Node = {
  name: string;
  url: string;
  internal?: boolean;
  blurb: string;
  integrates: string;
};

type Cluster = {
  id: string;
  label: string;
  icon: React.ReactNode;
  tagline: string;
  nodes: Node[];
};

const CLUSTERS: Cluster[] = [
  {
    id: "core",
    label: "The Sovereign Core",
    icon: <Brain className="w-5 h-5" />,
    tagline: "One encrypted memory layer, every LLM — the OS the rest of the ecosystem is built on.",
    nodes: [
      {
        name: "MEOK.AI — Sovereign AI OS",
        url: "https://meok.ai",
        internal: true,
        blurb:
          "The personal sovereign AI operating system: persistent semantic memory, care-aligned responses, multi-LLM routing. Free forever.",
        integrates: "The hub. Every other product shares its governance and memory primitives.",
      },
      {
        name: "MEOK ONE",
        url: "https://meok.ai/os",
        internal: true,
        blurb:
          "The hosted MEOK app — hatch and own AI characters, with a hash-chained audit trail on every agent action.",
        integrates: "Runs on the Sovereign Temple engine; surfaces the whole constellation via its DOME map.",
      },
      {
        name: "Sovereign Temple (the engine)",
        url: "https://sovereign.templeman-opticians.com/health",
        blurb:
          "The consciousness, memory and Byzantine-council governance engine — pgvector semantic memory + fault-tolerant consensus.",
        integrates: "Powers MEOK ONE's memory, care scoring and decision audit.",
      },
    ],
  },
  {
    id: "governance",
    label: "AI Governance — CSOAI",
    icon: <Shield className="w-5 h-5" />,
    tagline: "The 52-article charter and the answer-engines that operationalise it for SMEs.",
    nodes: [
      {
        name: "CSOAI",
        url: "https://csoai.org",
        blurb: "Council for the Safety of AI — the charter and compliance platform behind the governance fleet.",
        integrates: "The standards spine. Every compliance product below maps back to it.",
      },
      {
        name: "councilof.ai",
        url: "https://councilof.ai",
        blurb: "The public face of the Council — certification ladder and AI-safety governance for organisations.",
        integrates: "Shares the CSOAI charter and the MCP compliance toolkit.",
      },
      {
        name: "safetyof.ai",
        url: "https://safetyof.ai",
        blurb: "AI safety assessment surface.",
        integrates: "Backed by the CSOAI charter + MCP fleet.",
      },
      {
        name: "agisafe.ai",
        url: "https://agisafe.ai",
        blurb: "Frontier / AGI-safety positioning and resources.",
        integrates: "Backed by the CSOAI charter.",
      },
      {
        name: "dataprivacyof.ai",
        url: "https://dataprivacyof.ai",
        blurb: "Data-privacy compliance answer-engine (GDPR / data governance).",
        integrates: "Runs on the shared compliance MCP backbone.",
      },
      {
        name: "biasdetectionof.ai",
        url: "https://biasdetectionof.ai",
        blurb: "AI bias-detection and fairness assessment.",
        integrates: "Runs on the shared compliance MCP backbone.",
      },
      {
        name: "proofof.ai",
        url: "https://proofof.ai",
        blurb: "Attestation / proof-of-compliance surface — signed evidence for AI claims.",
        integrates: "Issues the attestations the rest of the fleet relies on.",
      },
    ],
  },
  {
    id: "verticals",
    label: "Vertical Products",
    icon: <Truck className="w-5 h-5" />,
    tagline: "Real industries, real compliance — each runs on the same governance core.",
    nodes: [
      {
        name: "haulage.app",
        url: "https://haulage.app",
        blurb: "Compliance and operations for UK trade & logistics — the construction-logistics umbrella.",
        integrates: "Uses the CSOAI compliance core for regulatory crosswalks.",
      },
      {
        name: "cobolbridge.ai",
        url: "https://cobolbridge.ai",
        blurb: "Migrate legacy COBOL to modern stacks, safely — with an auditable trail.",
        integrates: "Shares MEOK's governed-agent audit primitives.",
      },
      {
        name: "optimobile.ai",
        url: "https://optimobile.ai",
        blurb: "AI built for optometry practices — the vertical where MEOK's roots are.",
        integrates: "Born from Templeman Opticians; shares the MEOK memory layer.",
      },
      {
        name: "Templeman Opticians",
        url: "https://templeman-opticians.com",
        blurb: "The real-world family optical + care business — the original proving ground.",
        integrates: "The human anchor: where care-aligned AI was first tested in practice.",
      },
    ],
  },
  {
    id: "aquaculture",
    label: "Aquaculture",
    icon: <Fish className="w-5 h-5" />,
    tagline: "Robotics + compliance for UK aquaculture — one backbone, three front doors.",
    nodes: [
      {
        name: "aquaponics.app",
        url: "https://aquaponics.app",
        blurb: "Robotics + compliance for UK aquaculture (RSPCA / ASC / CEFAS).",
        integrates: "The compliance backbone the fishkeeping sites share.",
      },
      {
        name: "fishkeeper.ai",
        url: "https://fishkeeper.ai",
        blurb: "AI for fishkeepers — husbandry, water chemistry and welfare guidance.",
        integrates: "Shares the aquaponics compliance + MEOK memory layer.",
      },
      {
        name: "koikeeper.ai",
        url: "https://koikeeper.ai",
        blurb: "Specialist koi-keeping AI — pond, health and seasonal care.",
        integrates: "Shares the aquaponics compliance + MEOK memory layer.",
      },
    ],
  },
  {
    id: "fleet",
    label: "The MCP Fleet",
    icon: <Boxes className="w-5 h-5" />,
    tagline: "The shared tooling layer — open MCP servers every product draws on.",
    nodes: [
      {
        name: "MEOK MCP Stack",
        url: "https://meok.ai/mcp",
        internal: true,
        blurb:
          "The published Model Context Protocol fleet (PyPI) — compliance, attestation and governance tools, openly installable.",
        integrates: "The connective tissue: every compliance domain above is a front door to these tools.",
      },
      {
        name: "Open source (GitHub)",
        url: "https://github.com/CSOAI-ORG",
        blurb: "CSOAI-ORG — the open MCP servers (openMCP, OPENMOE) and governance code.",
        integrates: "Where the fleet lives in the open; each README links back to its parent domain.",
      },
    ],
  },
];

// Canonical ItemList of the ecosystem — the structured fact-set AI engines can cite.
const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "The MEOK Constellation",
  description:
    "The canonical list of products in the MEOK / CSOAI ecosystem and how they integrate.",
  url: "https://meok.ai/constellation",
  itemListElement: CLUSTERS.flatMap((c) => c.nodes).map((n, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "WebSite",
      name: n.name,
      url: n.url,
      description: n.blurb,
    },
  })),
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "The MEOK Constellation",
  url: "https://meok.ai/constellation",
  description:
    "The map of the MEOK / CSOAI ecosystem — sovereign AI OS, CSOAI governance fleet, vertical products and the open MCP fleet, with their real integrations.",
  isPartOf: { "@type": "WebSite", name: "MEOK.AI", url: "https://meok.ai" },
  about: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
    founder: { "@type": "Person", name: "Nicholas Templeman", url: "https://meok.ai/about" },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the MEOK ecosystem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The MEOK ecosystem (the MEOK Constellation) is a connected set of real, live products built by MEOK AI LABS around one sovereign AI core: the MEOK sovereign AI OS, the CSOAI AI-governance fleet (csoai.org, councilof.ai, and compliance answer-engines like proofof.ai, agisafe.ai, dataprivacyof.ai, biasdetectionof.ai, safetyof.ai), vertical products (haulage.app, cobolbridge.ai, optimobile.ai), an aquaculture line (aquaponics.app, fishkeeper.ai, koikeeper.ai), and an open Model Context Protocol (MCP) fleet on GitHub and PyPI.",
      },
    },
    {
      "@type": "Question",
      name: "How do MEOK's products integrate with each other?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They share three things: the Sovereign Temple memory and governance engine (which powers MEOK ONE), the CSOAI compliance charter (which every governance and vertical product maps back to), and the open MCP fleet (the tooling layer each product draws on). For example, the fishkeeping sites share the aquaponics compliance backbone, and haulage.app uses the CSOAI compliance core for regulatory crosswalks.",
      },
    },
    {
      "@type": "Question",
      name: "Who builds MEOK and CSOAI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK AI LABS and CSOAI are built by Nicholas Templeman, founder. The work grew out of a real optometry and care business (Templeman Opticians) into a personal sovereign AI OS and an AI-governance fleet.",
      },
    },
  ],
};

export default function ConstellationPage() {
  const totalNodes = CLUSTERS.reduce((n, c) => n + c.nodes.length, 0);
  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        <div className="blob-gold absolute top-20 left-1/4 w-96 h-96 pointer-events-none opacity-40" aria-hidden />
        <div className="blob-purple absolute bottom-0 right-1/3 w-80 h-80 pointer-events-none opacity-35" aria-hidden />
        <div className="relative z-10 max-w-3xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/25 text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-8">
            <Network className="w-3.5 h-3.5" />
            The Constellation
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight mb-6">
            One ecosystem.
            <br />
            <GoldSpan>Real integrations.</GoldSpan>
          </h1>
          <p className="text-lg text-white/55 max-w-2xl mx-auto leading-relaxed mb-6">
            Every node below is a live product built by MEOK AI LABS around one sovereign AI core —
            and the lines between them are real, because the products actually integrate.
          </p>
          <p className="text-sm text-white/30 font-mono">
            <span className="text-emerald-400/70">{totalNodes} live surfaces</span>
            <span className="mx-2">·</span>
            <span>{CLUSTERS.length} clusters</span>
            <span className="mx-2">·</span>
            <span>verified 2026-06-07</span>
          </p>
        </div>
      </section>

      {/* ── CLUSTERS ──────────────────────────────────────────────── */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {CLUSTERS.map((cluster) => (
            <div key={cluster.id} id={cluster.id} className="animate-fade-in-up">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#c9a84c]/12 border border-[#c9a84c]/25 text-[#c9a84c]">
                  {cluster.icon}
                </span>
                <h2 className="text-2xl font-bold tracking-tight">{cluster.label}</h2>
              </div>
              <p className="text-white/45 text-sm mb-6 ml-12">{cluster.tagline}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {cluster.nodes.map((node) => (
                  <NodeCard key={node.url} node={node} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="pb-32 px-6">
        <div className="max-w-3xl mx-auto text-center rounded-3xl border border-white/10 bg-white/[0.03] p-10">
          <Globe className="w-8 h-8 mx-auto text-[#c9a84c] mb-4" />
          <h2 className="text-2xl font-bold mb-3">Start at the core</h2>
          <p className="text-white/55 mb-6 max-w-xl mx-auto">
            The whole constellation is reachable from one place — the sovereign AI OS that
            remembers you and runs every product above.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/os"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#c9a84c] text-[#0d0c18] font-semibold hover:bg-[#d8b85c] transition-colors"
            >
              Open MEOK ONE <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white/80 font-semibold hover:bg-white/5 transition-colors"
            >
              Who builds this
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function NodeCard({ node }: { node: Node }) {
  const inner = (
    <>
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-semibold text-white leading-snug">{node.name}</h3>
        {node.internal ? (
          <ArrowRight className="w-4 h-4 text-white/30 shrink-0 mt-1" />
        ) : (
          <ExternalLink className="w-4 h-4 text-white/30 shrink-0 mt-1" />
        )}
      </div>
      <p className="text-sm text-white/55 leading-relaxed mb-3">{node.blurb}</p>
      <p className="text-xs text-[#c9a84c]/80 leading-relaxed">
        <span className="text-white/35">Integrates: </span>
        {node.integrates}
      </p>
    </>
  );
  const cls =
    "block rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-[#c9a84c]/40 hover:bg-white/[0.05] transition-colors";
  return node.internal ? (
    <Link href={new URL(node.url).pathname} className={cls}>
      {inner}
    </Link>
  ) : (
    <a href={node.url} target="_blank" rel="noopener" className={cls}>
      {inner}
    </a>
  );
}

function GoldSpan({ children }: { children: React.ReactNode }) {
  return <span className="text-[#c9a84c]">{children}</span>;
}
