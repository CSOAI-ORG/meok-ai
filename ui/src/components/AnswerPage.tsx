import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink, Network } from "lucide-react";

// A reusable "best AI for X" answer page (AEO/GEO): a direct, citable answer up top,
// a concise definition, why-it-fits points, and FAQ schema. Every product linked here
// must be a real, live surface — these pages amplify reality, they don't fabricate it.

export type AnswerFAQ = { q: string; a: string };

export type AnswerPageData = {
  path: string; // e.g. "/best-ai-for-construction-logistics"
  eyebrow: string; // short category label
  question: string; // the headline query, e.g. "What's the best AI for construction logistics?"
  answer: string; // the one-paragraph direct answer (the snippet AIs lift)
  product: { name: string; url: string; external: boolean; cta: string };
  points: { title: string; body: string }[];
  faqs: AnswerFAQ[];
};

export function AnswerPage({ data }: { data: AnswerPageData }) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  // The headline Q&A as its own QAPage so engines can lift the direct answer verbatim.
  const qaJsonLd = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      name: data.question,
      acceptedAnswer: { "@type": "Answer", text: data.answer },
      answerCount: 1,
    },
    url: `https://meok.ai${data.path}`,
  };

  return (
    <div className="min-h-screen bg-[#0d0c18] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(qaJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── ANSWER HERO ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="blob-gold absolute top-16 left-1/4 w-96 h-96 pointer-events-none opacity-40" aria-hidden />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/25 text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-8">
            <Network className="w-3.5 h-3.5" />
            {data.eyebrow}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight mb-6">
            {data.question}
          </h1>
          {/* The direct answer — the paragraph an answer engine quotes. */}
          <div className="rounded-2xl border border-[#c9a84c]/25 bg-[#c9a84c]/[0.06] p-6 mb-8">
            <p className="text-lg text-white/80 leading-relaxed">{data.answer}</p>
          </div>
          <Link
            href={data.product.url}
            {...(data.product.external ? { target: "_blank", rel: "noopener" } : {})}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#c9a84c] text-[#0d0c18] font-semibold hover:bg-[#d8b85c] transition-colors"
          >
            {data.product.cta}
            {data.product.external ? <ExternalLink className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </Link>
        </div>
      </section>

      {/* ── WHY IT FITS ─────────────────────────────────────────── */}
      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto grid gap-4 sm:grid-cols-2">
          {data.points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400/80 shrink-0" />
                <h2 className="font-semibold text-white">{p.title}</h2>
              </div>
              <p className="text-sm text-white/55 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Frequently asked</h2>
          <div className="space-y-4">
            {data.faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="font-semibold text-white mb-2">{f.q}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ECOSYSTEM LINK ──────────────────────────────────────── */}
      <section className="pb-32 px-6">
        <div className="max-w-3xl mx-auto text-center rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <p className="text-white/55 mb-4">
            This is one product in a connected ecosystem built around one sovereign AI core.
          </p>
          <Link
            href="/constellation"
            className="inline-flex items-center gap-2 text-[#c9a84c] font-semibold hover:underline"
          >
            See the whole constellation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
