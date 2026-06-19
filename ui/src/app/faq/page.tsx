import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK FAQ · MEOK AI Labs",
  description: "Frequently asked questions about MEOK, the sovereign substrate, the 11 master hives, the 100/100 master stack.",
  openGraph: {
    title: "MEOK FAQ · MEOK AI Labs",
    description: "Frequently asked questions about MEOK, the sovereign substrate, the 11 master hives, the 100/100 master stack.",
    type: "website",
  },
};

const FAQ_ITEMS = [
  {
    q: "What is MEOK?",
    a: "MEOK AI Labs is a sovereign AI infrastructure company. Open-source (MIT), compliance-first (13 frameworks).",
  },
  {
    q: "What is the sovereign substrate?",
    a: "SOV3 - 182 agents, 146+ attestations, Ed25519 audit trail.",
  },
  {
    q: "How does the 100/100 scoring work?",
    a: "Sovereign coordinator (25) + COAI manifest (20) + Ed25519 sigil (20) + BFT Council (20) + landing page (10) + attestation (5) = 100.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-700 to-blue-700 bg-clip-text text-transparent">MEOK FAQ</h1>
        <p className="text-xl text-slate-600 mt-6">Frequently asked questions about MEOK, the sovereign substrate, the 11 master hives, the 100/100 master stack.</p>
        <div className="prose prose-slate max-w-none mt-10">
          <h2>What is MEOK?</h2>
          <p>MEOK AI Labs is a sovereign AI infrastructure company. Open-source (MIT), compliance-first (13 frameworks).</p>
          <h2>What is the sovereign substrate?</h2>
          <p>SOV3 - 182 agents, 146+ attestations, Ed25519 audit trail.</p>
          <h2>How does the 100/100 scoring work?</h2>
          <p>Sovereign coordinator (25) + COAI manifest (20) + Ed25519 sigil (20) + BFT Council (20) + landing page (10) + attestation (5) = 100.</p>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <a href="/contact" className="inline-block px-6 py-3 bg-violet-700 text-white rounded-lg font-semibold hover:bg-violet-800 transition">Ask a question</a>
          <a href="/pricing" className="inline-block px-6 py-3 bg-white text-violet-700 border-2 border-violet-700 rounded-lg font-semibold hover:bg-violet-50 transition">View pricing</a>
          <a href="/fleet" className="inline-block px-6 py-3 bg-slate-100 text-slate-900 rounded-lg font-semibold hover:bg-slate-200 transition">See the fleet</a>
        </div>
      </section>
    </main>
  );
}
