import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK Compliance Audit · MEOK AI Labs",
  description: "End-to-end compliance audit across 13 regulatory frameworks.",
  openGraph: {
    title: "MEOK Compliance Audit · MEOK AI Labs",
    description: "End-to-end compliance audit across 13 regulatory frameworks.",
    type: "website",
  },
};

const SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "MEOK Compliance Audit",
  description:
    "End-to-end compliance audit across 13 regulatory frameworks: EU AI Act, GDPR, ISO 42001, SOC 2, HIPAA, DORA, NIS2, CRA, FDA, MDR, NIST AI RMF, UK AI Bill and AIDA-Canada. Includes a 42-point EU AI Act audit with auto-generated Annex IV documentation and a GDPR DPIA auto-generator.",
  url: "https://meok.ai/compliance-audit",
  serviceType: "Regulatory compliance audit",
  provider: { "@type": "Organization", name: "MEOK AI Labs", url: "https://meok.ai" },
  areaServed: ["GB", "EU", "US", "CA"],
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSONLD) }} />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-700 to-blue-700 bg-clip-text text-transparent">MEOK Compliance Audit</h1>
        <p className="text-xl text-slate-600 mt-6">End-to-end compliance audit across 13 regulatory frameworks.</p>
        <div className="prose prose-slate max-w-none mt-10">
          <h2>The 13 frameworks</h2>
          <p>EU AI Act, GDPR, ISO 42001, SOC 2, HIPAA, DORA, NIS2, CRA, FDA, MDR, NIST AI RMF, UK AI Bill, AIDA-Canada.</p>
          <h2>42-point EU AI Act audit</h2>
          <p>Annex IV documentation auto-generated.</p>
          <h2>DPIA auto-generator</h2>
          <p>GDPR DPIA: data subject rights, breach notification, DPO contact.</p>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <a href="/compliance" className="inline-block px-6 py-3 bg-violet-700 text-white rounded-lg font-semibold hover:bg-violet-800 transition">Run a compliance audit</a>
          <a href="/pricing" className="inline-block px-6 py-3 bg-white text-violet-700 border-2 border-violet-700 rounded-lg font-semibold hover:bg-violet-50 transition">View pricing</a>
          <a href="/fleet" className="inline-block px-6 py-3 bg-slate-100 text-slate-900 rounded-lg font-semibold hover:bg-slate-200 transition">See the fleet</a>
        </div>
      </section>
    </main>
  );
}
