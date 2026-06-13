import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NIS2 Compliance Tool — EU + Member State (2026)",
  description:
    "NIS2 compliance tool for essential and important entities. EU Directive 2022/2555 + Member State implementations (DE, FR, IT, ES, NL, IE). From £149/mo.",
  alternates: { canonical: "https://meok.ai/nis2-compliance-tool" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const RED = "#dc2626";

const FAQ = [
  {
    q: "What is NIS2?",
    a: "NIS2 (Network and Information Security Directive 2) is EU Directive 2022/2555. It replaces the original NIS Directive (2016/1148) and significantly expands scope, strengthens enforcement, and harmonises incident reporting across the EU. NIS2 covers 18 sectors divided into 'essential entities' (energy, transport, banking, financial market infrastructures, health, drinking water, waste water, digital infrastructure, public administration) and 'important entities' (postal services, waste management, chemicals, food, manufacturing of medical devices, electronics, machinery, motor vehicles, digital providers, research organisations).",
  },
  {
    q: "When was the NIS2 deadline?",
    a: "The EU NIS2 Directive was published 27 December 2022. Member States had until 17 October 2024 to transpose it into national law. As of June 2026, transposition is uneven: Germany (NIS2UmsuCG) passed in late 2025, France (transposed via Loi de programmation militaire extensions), Italy, Spain, Netherlands, and Ireland are in various stages. Some member states (Slovakia, Czech Republic) are still non-compliant. MEOK ships per-jurisdiction checklists for DE, FR, IT, ES, NL, IE — see /nis2-de-kit for the German implementation.",
  },
  {
    q: "What are the NIS2 incident reporting timelines?",
    a: "Article 23: (1) Early warning within 24 hours of becoming aware of the incident, (2) incident notification within 72 hours with initial assessment, (3) final report within 1 month, (4) for incidents with cross-border impact, a synchronous report to the single point of contact. For significant incidents, an intermediate report on relevant updates may be requested. MEOK's incident response template aligns to these timelines and signs each report with a timestamped HMAC chain.",
  },
  {
    q: "What are the NIS2 penalties?",
    a: "For essential entities: up to €10M or 2% of total worldwide annual turnover, whichever is higher. For important entities: up to €7M or 1.4% of total worldwide annual turnover, whichever is higher. For management bodies of essential entities: temporary bans on holding managerial positions. Member State penalties vary — Germany's NIS2UmsuCG can fine up to €20M or 4% of global turnover for critical infrastructure operators.",
  },
  {
    q: "Is NIS2 the same as NIS1?",
    a: "No, significantly different. NIS1 (2016/1148) covered only 'operators of essential services' and 'digital service providers' (limited list). NIS2 covers 18 sectors, adds supply chain security (Article 21(2)(d)), adds management body accountability, removes the distinction between OES/DSP, introduces 24-hour early warning, requires ENISA to maintain a vulnerability database (EUVD), and has direct enforcement against management bodies. If you were NIS1-compliant, you may be 30-50% of the way to NIS2 — MEOK's gap analysis quantifies that.",
  },
  {
    q: "Do non-EU companies need to comply with NIS2?",
    a: "NIS2 has explicit extraterritorial reach (Article 2). Non-EU companies providing services in the EU (cloud, SaaS, managed services, data centres, CDN) that have a head office or representative in the EU are in scope. Pure non-EU companies without EU presence are generally out of scope of NIS2 directly, but their customers (EU essential/important entities) will impose NIS2-compliant security obligations via contracts. MEOK helps non-EU companies sign evidence for their EU customers.",
  },
  {
    q: "What is the supply chain obligation in NIS2?",
    a: "Article 21(2)(d) requires essential and important entities to address security in supplier relationships and supplier-specific risks. This includes: security clauses in contracts, assessment of supplier security posture, monitoring of supplier compliance, incident reporting from suppliers. MEOK ships a vendor security assessment template + signed third-party risk register that demonstrates compliance with the supply chain obligations.",
  },
];

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const COUNTRIES = [
  { code: "DE", name: "Germany", law: "NIS2UmsuCG", status: "Transposed 2025" },
  { code: "FR", name: "France", law: "Loi de programmation militaire + transposing decrees", status: "Transposed 2025" },
  { code: "IT", name: "Italy", law: "Decreto legislativo 138/2024", status: "Transposed 2024" },
  { code: "ES", name: "Spain", law: "Real Decreto-Ley 7/2024", status: "Transposed 2024" },
  { code: "NL", name: "Netherlands", law: "Cyberbeveiligingswet", status: "Transposed 2024" },
  { code: "IE", name: "Ireland", law: "S.I. 658/2024", status: "Transposed 2024" },
  { code: "BE", name: "Belgium", law: "Loi NIS2", status: "Transposed 2025" },
  { code: "AT", name: "Austria", law: "NISG 2024", status: "Transposed 2024" },
  { code: "PL", name: "Poland", law: "Ustawa o KSC", status: "Transposed 2024" },
];

export default function Page() {
  return (
    <article className="min-h-screen text-white" style={{ backgroundColor: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <section className="pt-32 pb-16 px-6 text-center">
        <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: GOLD }}>
          NIS2 · Directive (EU) 2022/2555
        </p>
        <h1 className="text-4xl md:text-6xl font-black mb-6 max-w-4xl mx-auto">
          NIS2 compliance for essential + important entities
        </h1>
        <p className="text-white/60 text-lg max-w-3xl mx-auto">
          Per-Member-State implementation packs. Cryptographically signed
          incident reports. 24-hour early-warning timer built in.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/nis2-de-kit"
            className="px-8 py-4 rounded-xl font-bold text-black"
            style={{ backgroundColor: GOLD }}
          >
            Get the German NIS2UmsuCG Kit
          </Link>
          <a
            href="https://buy.stripe.com/bJe4gB3K4002aAtgP68k91r"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl font-bold text-white border border-white/30 hover:border-white transition-colors"
          >
            Enterprise — £1,499/mo
          </a>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black mb-8">Member State transposition status</h2>
          <div className="grid md:grid-cols-3 gap-3">
            {COUNTRIES.map((c) => (
              <div
                key={c.code}
                className="rounded-xl border border-white/[0.08] p-4"
                style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
              >
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl font-black" style={{ color: GOLD }}>{c.code}</span>
                  <span className="text-white/80 font-bold">{c.name}</span>
                </div>
                <p className="text-white/60 text-xs font-mono mb-1">{c.law}</p>
                <p className="text-white/40 text-xs">{c.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black mb-8">FAQ</h2>
          <div className="space-y-6">
            {FAQ.map((f) => (
              <details key={f.q} className="rounded-2xl border border-white/[0.08] p-5" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                <summary className="font-bold cursor-pointer text-white">{f.q}</summary>
                <p className="text-white/60 text-sm mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
