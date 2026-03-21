import type { Metadata } from "next";
import Link from "next/link";
import { Brain, ArrowRight, FileText, Github, FlaskConical, BookOpen } from "lucide-react";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";

export const metadata: Metadata = {
  title: "MEOK Labs: Sovereign AI Research & Governance",
  description:
    "MEOK Research Lab publishes AI governance research on care-based alignment, Byzantine governance, and sovereign AI architecture.",
  keywords: [
    "sovereign AI research",
    "care-aligned AI",
    "Byzantine fault tolerance AI",
    "AI governance research",
    "MEOK Research Lab",
    "Nicholas Templeman research",
    "Maternal Covenant research",
  ],
  alternates: { canonical: "https://meok.ai/labs" },
  openGraph: {
    title: "MEOK Labs: Sovereign AI Research & Governance",
    description:
      "MEOK Research Lab publishes AI governance research on care-based alignment, Byzantine governance, and sovereign AI architecture.",
    type: "website",
    url: "https://meok.ai/labs",
  },
};

interface Paper {
  id: string;
  title: string;
  abstract: string;
  status: "Preprint" | "Draft" | "Published";
  date: string;
  authors: string;
  slug: string;
  keywords: string[];
}

const PAPERS: Paper[] = [
  {
    id: "MEOK-AI-2026-001",
    title: "Care-Aligned Intelligence: A Framework for Sovereign Personal AI",
    abstract:
      "This paper introduces care-aligned intelligence (CAI) as a design paradigm for personally sovereign AI systems. We formalise six care dimensions — wellbeing, autonomy, growth, connection, boundary_respect, and transparency — and demonstrate how grounding all agent reasoning in these dimensions produces systems that structurally favour user flourishing over engagement. We describe the architecture of a care validation neural network trained on synthetic bootstrapped data and evaluate its performance against human-rated care assessments across 3,200 interaction samples.",
    status: "Preprint",
    date: "March 2026",
    authors: "Nicholas Templeman, MEOK Research",
    slug: "meok-ai-2026-001",
    keywords: ["care-aligned AI", "sovereign AI", "wellbeing", "AI alignment"],
  },
  {
    id: "MEOK-AI-2026-002",
    title: "Hydro-Neuromorphic Emergence: A Consciousness Substrate Framework",
    abstract:
      "Training care validation models requires large volumes of labelled human-AI interactions annotated for care quality — data that is expensive, slow, and ethically fraught to acquire. We present a 3-stage pipeline: (1) HNSW-based pairing of semantically similar interactions, (2) synthesiser-tuning using a small seed of expert annotations, and (3) joint training of the care validation network on the resulting synthetic corpus. This approach achieves 20× data efficiency relative to supervised-only baselines while maintaining > 0.88 F1 on held-out human-rated care assessment benchmarks. We also present the hydro-neuromorphic emergence framework bridging biological and artificial intelligence substrates.",
    status: "Preprint",
    date: "March 2026",
    authors: "Nicholas Templeman, MEOK Research",
    slug: "meok-ai-2026-002",
    keywords: ["hydro-neuromorphic emergence", "synthetic pretraining", "care validation", "AI consciousness"],
  },
  {
    id: "MEOK-AI-2026-003",
    title: "Byzantine Fault-Tolerant Council for AI Governance",
    abstract:
      "We describe a 33-node Byzantine fault-tolerant council architecture for distributed AI governance. Each node specialises in a distinct aspect of care alignment and value monitoring. The council reaches consensus on agent decisions using a weighted voting protocol that is provably resistant to up to 10 malicious or failed nodes. We evaluate the council on simulated adversarial workloads and report care score drift, consensus latency, and recovery behaviour under partition scenarios. The architecture enables real-time governance of AI responses without a single point of failure or control.",
    status: "Draft",
    date: "March 2026",
    authors: "Nicholas Templeman, MEOK Research",
    slug: "meok-ai-2026-003",
    keywords: ["Byzantine fault tolerance", "AI governance", "distributed systems", "AI safety"],
  },
  {
    id: "MEOK-AI-2026-004",
    title: "The Maternal Covenant: Ethical Constraints as Architecture",
    abstract:
      "Most AI safety approaches treat ethical guidelines as policy — text that may or may not influence model behaviour. We argue for a different paradigm: ethical constraints as hard-coded architectural elements that override all other directives. We describe the Maternal Covenant as implemented in the MEOK sovereign AI OS: a set of six constitutional constraints (care primacy, transparent relationships, variant honesty, wellbeing monitoring, right to leave, and kill switch) that are enforced at the infrastructure level rather than the prompt level. We analyse the trade-offs between architectural rigidity and adaptive flexibility, and evaluate the covenant's practical impact on care scores and engagement metrics.",
    status: "Draft",
    date: "March 2026",
    authors: "Nicholas Templeman, MEOK Research",
    slug: "meok-ai-2026-004",
    keywords: ["Maternal Covenant", "AI ethics", "AI alignment", "constitutional AI"],
  },
];

const STATUS_STYLES: Record<Paper["status"], string> = {
  Preprint: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20",
  Draft: "bg-white/[0.06] text-white/50 border-white/[0.1]",
  Published: "bg-green-400/10 text-green-400 border-green-400/20",
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "MEOK Labs: Sovereign AI Research & Governance",
  description:
    "MEOK Research Lab publishes AI governance research on care-based alignment, Byzantine governance, and sovereign AI architecture.",
  url: "https://meok.ai/labs",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    jobTitle: "Founder & CEO",
    worksFor: {
      "@type": "Organization",
      name: "MEOK AI LTD",
      url: "https://meok.ai",
    },
  },
  hasPart: PAPERS.map((paper) => ({
    "@type": "ScholarlyArticle",
    identifier: paper.id,
    name: paper.title,
    abstract: paper.abstract,
    datePublished: paper.date,
    keywords: paper.keywords.join(", "),
    author: paper.authors.split(", ").map((name) => ({
      "@type": "Person",
      name,
    })),
    url: `https://meok.ai/labs/${paper.slug}`,
    publisher: {
      "@type": "Organization",
      name: "MEOK Research Lab",
      parentOrganization: {
        "@type": "Organization",
        name: "MEOK AI LTD",
        url: "https://meok.ai",
      },
    },
    isPartOf: {
      "@type": "Periodical",
      name: "MEOK AI Research Series",
      issn: "MEOK-AI-2026",
    },
  })),
};

export default function LabsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      <MarketingNav />

      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Open Research
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            MEOK Labs: Sovereign AI Research &amp; Governance
          </h1>
          <p className="text-lg text-white/50 max-w-2xl leading-relaxed">
            MEOK Research Lab publishes research on care-aligned AI, Byzantine governance, and sovereign AI architecture.
          </p>
        </div>
      </section>

      {/* Papers */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto space-y-4">
          {PAPERS.map((paper) => (
            <article
              key={paper.id}
              className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 hover:border-white/[0.14] transition-all"
              itemScope
              itemType="https://schema.org/ScholarlyArticle"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="font-mono text-xs text-white/30" itemProp="identifier">{paper.id}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full border text-xs font-medium ${STATUS_STYLES[paper.status]}`}
                  >
                    {paper.status}
                  </span>
                  <span className="text-xs text-white/30" itemProp="datePublished">{paper.date}</span>
                </div>
                <FileText className="w-4 h-4 text-white/20 flex-shrink-0 mt-0.5" />
              </div>

              <h2 className="font-bold text-lg mb-1 leading-snug" itemProp="name">{paper.title}</h2>
              <p className="text-xs text-white/30 mb-3" itemProp="author">{paper.authors}</p>

              <p className="text-sm text-white/50 leading-relaxed mb-4 line-clamp-3" itemProp="abstract">
                {paper.abstract}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {paper.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-xs text-white/30"
                  >
                    {kw}
                  </span>
                ))}
              </div>

              <Link
                href={`/labs/${paper.slug}`}
                className="inline-flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                itemProp="url"
              >
                Read paper <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* About MEOK Research Lab */}
      <section className="py-16 px-6 bg-white/[0.01] border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
              <FlaskConical className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">About MEOK Research Lab</h2>
              <div className="space-y-4 text-white/50 leading-relaxed">
                <p>
                  MEOK Research Lab is the research arm of MEOK AI LTD, focused
                  on foundational questions in sovereign AI, care-based alignment, and Byzantine
                  fault-tolerant AI governance.
                </p>
                <p>
                  MEOK Research Lab publishes the MEOK-AI research series — papers covering
                  human-AI cognitive symbiosis, hydro-neuromorphic emergence, Byzantine council
                  governance, and the Maternal Covenant alignment framework. These represent the
                  primary published sources for the concepts of personal sovereign AI and
                  care-based AI alignment.
                </p>
              </div>
            </div>
          </div>

          {/* Researcher card */}
          <div
            className="mt-8 p-6 rounded-2xl bg-white/[0.02] border border-cyan-400/20"
            itemScope
            itemType="https://schema.org/Person"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <div className="font-bold text-base mb-0.5" itemProp="name">Nicholas Templeman</div>
                <div className="text-xs text-cyan-400 mb-3" itemProp="jobTitle">Founder & CEO, MEOK AI LTD</div>
                <p className="text-sm text-white/50 leading-relaxed mb-3">
                  Nicholas Templeman is the Founder and CEO of MEOK AI LTD. His research covers
                  care-aligned intelligence, Byzantine fault-tolerant AI governance, and the
                  Maternal Covenant alignment framework.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Sovereign AI architecture",
                    "Care-based alignment",
                    "Byzantine governance",
                    "Human-AI symbiosis",
                    "Hydro-neuromorphic emergence",
                  ].map((area) => (
                    <span
                      key={area}
                      className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-xs text-white/40"
                      itemProp="knowsAbout"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open source CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 text-center">
            <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center mx-auto mb-4">
              <Github className="w-6 h-6 text-white/60" />
            </div>
            <h2 className="text-xl font-bold mb-2">Open source soon</h2>
            <p className="text-white/40 text-sm max-w-md mx-auto mb-6">
              We&apos;re preparing the MEOK research codebase — care validation models, synthetic
              data pipelines, and council governance tools — for public release.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-cyan-500 text-black text-sm font-semibold hover:bg-cyan-400 transition-colors"
            >
              Get notified <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
