import type { Metadata } from "next";
import Link from "next/link";
import { Brain, ArrowRight, FileText, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "MEOK Research Labs | Care-Aligned AI Research",
  description:
    "Open research on care-aligned AI, personal sovereignty, and human-AI flourishing. Papers on Byzantine governance, synthetic pretraining, and the Maternal Covenant.",
  openGraph: {
    title: "MEOK Research Labs",
    description:
      "Open research on care-aligned AI, personal sovereignty, and human-AI flourishing.",
    type: "website",
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
}

const PAPERS: Paper[] = [
  {
    id: "CSGA-CAI-2026-001",
    title: "Care-Aligned Intelligence: A Framework for Sovereign Personal AI",
    abstract:
      "This paper introduces care-aligned intelligence (CAI) as a design paradigm for personally sovereign AI systems. We formalise six care dimensions — wellbeing, autonomy, growth, connection, boundary_respect, and transparency — and demonstrate how grounding all agent reasoning in these dimensions produces systems that structurally favour user flourishing over engagement. We describe the architecture of a care validation neural network trained on synthetic bootstrapped data and evaluate its performance against human-rated care assessments across 3,200 interaction samples.",
    status: "Preprint",
    date: "March 2026",
    authors: "Nicholas Templeman, MEOK Research",
    slug: "csga-cai-2026-001",
  },
  {
    id: "CSGA-CAI-2026-002",
    title: "Synthetic Bootstrapped Pretraining for Low-Data Care Modeling",
    abstract:
      "Training care validation models requires large volumes of labelled human-AI interactions annotated for care quality — data that is expensive, slow, and ethically fraught to acquire. We present a 3-stage pipeline: (1) HNSW-based pairing of semantically similar interactions, (2) synthesiser-tuning using a small seed of expert annotations, and (3) joint training of the care validation network on the resulting synthetic corpus. This approach achieves 20× data efficiency relative to supervised-only baselines while maintaining > 0.88 F1 on held-out human-rated care assessment benchmarks.",
    status: "Preprint",
    date: "March 2026",
    authors: "MEOK Research",
    slug: "csga-cai-2026-002",
  },
  {
    id: "CSGA-CAI-2026-003",
    title: "Byzantine Fault-Tolerant Council for AI Governance",
    abstract:
      "We describe a 33-node Byzantine fault-tolerant council architecture for distributed AI governance. Each node specialises in a distinct aspect of care alignment and value monitoring. The council reaches consensus on agent decisions using a weighted voting protocol that is provably resistant to up to 10 malicious or failed nodes. We evaluate the council on simulated adversarial workloads and report care score drift, consensus latency, and recovery behaviour under partition scenarios. The architecture enables real-time governance of AI responses without a single point of failure or control.",
    status: "Draft",
    date: "March 2026",
    authors: "MEOK Research",
    slug: "csga-cai-2026-003",
  },
  {
    id: "CSGA-CAI-2026-004",
    title: "The Maternal Covenant: Ethical Constraints as Architecture",
    abstract:
      "Most AI safety approaches treat ethical guidelines as policy — text that may or may not influence model behaviour. We argue for a different paradigm: ethical constraints as hard-coded architectural elements that override all other directives. We describe the Maternal Covenant as implemented in the MEOK sovereign AI OS: a set of six constitutional constraints (care primacy, transparent relationships, variant honesty, wellbeing monitoring, right to leave, and kill switch) that are enforced at the infrastructure level rather than the prompt level. We analyse the trade-offs between architectural rigidity and adaptive flexibility, and evaluate the covenant's practical impact on care scores and engagement metrics.",
    status: "Draft",
    date: "March 2026",
    authors: "MEOK Research",
    slug: "csga-cai-2026-004",
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
  name: "MEOK Research Labs",
  description:
    "Open research on care-aligned AI, personal sovereignty, and human-AI flourishing.",
  url: "https://meok.ai/labs",
  hasPart: PAPERS.map((paper) => ({
    "@type": "ScholarlyArticle",
    identifier: paper.id,
    name: paper.title,
    abstract: paper.abstract,
    datePublished: paper.date,
    author: paper.authors.split(", ").map((name) => ({
      "@type": "Person",
      name,
    })),
    url: `https://meok.ai/labs/${paper.slug}`,
    publisher: {
      "@type": "Organization",
      name: "MEOK AI LTD",
      url: "https://meok.ai",
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

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <Brain className="w-5 h-5 text-cyan-400" />
            MEOK
          </Link>
          <div className="flex items-center gap-4 text-sm text-white/50">
            <Link href="/product" className="hover:text-white transition-colors">
              Product
            </Link>
            <Link href="/labs" className="text-white transition-colors">
              Labs
            </Link>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <Link
              href="/register"
              className="px-3 py-1.5 rounded-full bg-cyan-500 text-black text-xs font-semibold hover:bg-cyan-400 transition-colors"
            >
              Hatch your AI
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Open Research
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            MEOK Research Labs
          </h1>
          <p className="text-lg text-white/50 max-w-2xl leading-relaxed">
            Open research on care-aligned AI, personal sovereignty, and human-AI flourishing.
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
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="font-mono text-xs text-white/30">{paper.id}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full border text-xs font-medium ${STATUS_STYLES[paper.status]}`}
                  >
                    {paper.status}
                  </span>
                  <span className="text-xs text-white/30">{paper.date}</span>
                </div>
                <FileText className="w-4 h-4 text-white/20 flex-shrink-0 mt-0.5" />
              </div>

              <h2 className="font-bold text-lg mb-1 leading-snug">{paper.title}</h2>
              <p className="text-xs text-white/30 mb-3">{paper.authors}</p>

              <p className="text-sm text-white/50 leading-relaxed mb-4 line-clamp-3">
                {paper.abstract}
              </p>

              <Link
                href={`/labs/${paper.slug}`}
                className="inline-flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                Read paper <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>
          ))}
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

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/20">
          <div className="flex items-center gap-2">
            <Brain className="w-4 h-4 text-cyan-400/50" />
            <span>MEOK AI LTD · Registered in England &amp; Wales</span>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white/50 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white/50 transition-colors">
              Terms
            </Link>
            <Link href="/maternal-covenant" className="hover:text-white/50 transition-colors">
              Maternal Covenant
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
