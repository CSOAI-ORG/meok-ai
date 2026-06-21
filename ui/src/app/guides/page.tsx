import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Compliance Guides & How-To Hub · MEOK AI Labs",
  description:
    "Step-by-step implementation guides for EU AI Act Article 50, GDPR + AI, DORA, NIS2, ISO 42001, SOC 2, ISO 27001, and the EU Cyber Resilience Act.",
  alternates: { canonical: "https://meok.ai/guides" },
  openGraph: {
    title: "AI Compliance Guides & How-To Hub",
    description: "Step-by-step implementation guides for EU AI Act, GDPR, DORA, NIS2, ISO 42001, SOC 2, ISO 27001, and CRA.",
    type: "website",
    url: "https://meok.ai/guides",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Compliance+Guides+%26+How-To+Hub&desc=Step-by-step+implementation+guides",
        width: 1200,
        height: 630,
        alt: "AI Compliance Guides & How-To Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Compliance Guides & How-To Hub",
    description: "Step-by-step implementation guides for EU AI Act, GDPR, DORA, NIS2, ISO 42001, SOC 2, ISO 27001, and CRA.",
    images: ["https://meok.ai/api/og?title=AI+Compliance+Guides+%26+How-To+Hub&desc=Step-by-step+implementation+guides"],
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const GUIDES = [
  {
    category: "EU AI Act",
    items: [
      { href: "/eu-ai-act", label: "EU AI Act overview", desc: "Risk classes, obligations, and deadlines." },
      { href: "/eu-ai-act/article-50", label: "Article 50 transparency", desc: "What must be marked and when." },
      { href: "/article-50-kit", label: "Article 50 Watermarking Kit", desc: "C2PA + invisible watermark + fingerprinting." },
      { href: "/eu-code-of-practice", label: "EU Code of Practice", desc: "First-mover two-layer marking." },
      { href: "/article-50-marking", label: "Two-layer marking deep-dive", desc: "C2PA, watermark, and fallback fingerprinting." },
      { href: "/article-50-transparency", label: "Transparency obligations", desc: "Deployer disclosures and user-facing labels." },
    ],
  },
  {
    category: "Cyber & Operational Resilience",
    items: [
      { href: "/dora", label: "DORA implementation", desc: "ICT risk management for financial services." },
      { href: "/nis2-de-kit", label: "NIS2 Germany kit", desc: "DE implementation with BSI registration." },
      { href: "/nis2-nl", label: "NIS2 Netherlands", desc: "NL implementation and reporting." },
      { href: "/cra", label: "EU Cyber Resilience Act", desc: "CE marking for products with digital elements." },
    ],
  },
  {
    category: "Privacy & Data Protection",
    items: [
      { href: "/gdpr", label: "GDPR + AI Compliance Kit", desc: "DPIA, lawful basis, and cross-border transfers." },
      { href: "/transparency", label: "Transparency centre", desc: "Sub-processors, hosting, and data practices." },
    ],
  },
  {
    category: "Standards & Certifications",
    items: [
      { href: "/iso-42001", label: "ISO 42001 AIMS", desc: "AI management system certification." },
      { href: "/iso-27001", label: "ISO 27001 for AI", desc: "ISMS with AI threat library." },
      { href: "/soc2", label: "SOC 2 Type II for AI", desc: "Trust services criteria mapped to AI." },
    ],
  },
  {
    category: "UK & Regional",
    items: [
      { href: "/uk-ai-bill-2026", label: "UK AI Bill 2026", desc: "ATRS and emerging UK obligations." },
      { href: "/uk-csr-readiness", label: "UK CSR readiness", desc: "Corporate sustainability and AI reporting." },
    ],
  },
];

const FAQ = [
  {
    q: "Which compliance framework should I start with?",
    a: "Start with the framework that has the nearest deadline or is demanded by your customers. For most AI companies in 2026 that means EU AI Act Article 50 (August 2026), followed by SOC 2 or ISO 27001 for enterprise sales, then ISO 42001 for AI-specific governance.",
  },
  {
    q: "Can MEOK kits be combined?",
    a: "Yes. All kits share a unified evidence vault, common control mappings, and HMAC-signed attestations. Customers who buy multiple kits receive cross-referenced documentation that avoids duplication.",
  },
  {
    q: "How do I know if my product is in scope?",
    a: "Use our free scorecard at /scorecard or book a 30-minute readiness check. We will map your use case, jurisdictions, and customer base to the relevant frameworks.",
  },
  {
    q: "Are the guides updated when regulations change?",
    a: "Yes. Pro and Enterprise tiers include quarterly guidance updates. We track EU AI Act implementing acts, Code of Practice drafts, ENISA guidance, and national transpositions.",
  },
];

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" },
    { "@type": "ListItem", position: 2, name: "Guides", item: "https://meok.ai/guides" },
  ],
};

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const WEBPAGE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Compliance Guides & How-To Hub",
  description: "Step-by-step implementation guides for EU AI Act, GDPR, DORA, NIS2, ISO 42001, SOC 2, ISO 27001, and CRA.",
  url: "https://meok.ai/guides",
  publisher: { "@type": "Organization", name: "MEOK AI Labs", url: "https://meok.ai" },
  isPartOf: { "@type": "WebSite", name: "MEOK.AI", url: "https://meok.ai" },
};

export default function GuidesHubPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />

      <div className="mx-auto max-w-[960px] px-6 py-20">
        <div className="mb-6 inline-block rounded-full border border-[#c9a84c]/40 bg-[#c9a84c]/10 px-3 py-1.5 text-xs font-black uppercase tracking-widest text-[#c9a84c]">
          Implementation hub
        </div>

        <h1 className="mb-4 text-[clamp(2.4rem,5vw,3.6rem)] font-black leading-[1.05] tracking-tight">
          AI compliance guides that
          <br />
          <span className="text-[#c9a84c]">actually get you compliant.</span>
        </h1>

        <p className="mb-8 max-w-[640px] text-[1.05rem] text-[#1a1a2e]/60">
          Step-by-step implementation guides for the frameworks that matter in 2026. Each guide maps obligations to
          controls, evidence, and a signed MEOK attestation.
        </p>

        <div className="mb-12 flex flex-wrap gap-3">
          <Link
            href="/scorecard"
            className="rounded-xl bg-[#c9a84c] px-7 py-4 text-[15px] font-black text-[#1a1a2e] no-underline transition hover:opacity-90"
          >
            Find your framework — 90s scorecard →
          </Link>
          <Link
            href="/protocols"
            className="rounded-xl border border-[#1a1a2e]/20 bg-transparent px-7 py-4 text-[15px] font-black text-[#1a1a2e] no-underline transition hover:opacity-90"
          >
            See protocol coverage matrix →
          </Link>
        </div>

        <div className="grid gap-10">
          {GUIDES.map((section) => (
            <section key={section.category}>
              <h2 className="mb-4 text-xl font-black tracking-tight">{section.category}</h2>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group rounded-xl border border-[#1a1a2e]/10 bg-white p-5 no-underline transition hover:border-[#c9a84c]/50"
                  >
                    <p className="mb-1 text-sm font-black text-[#1a1a2e] group-hover:text-[#c9a84c]">{item.label}</p>
                    <p className="m-0 text-sm leading-5 text-[#1a1a2e]/60">{item.desc}</p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <h2 className="mb-5 mt-16 text-[1.6rem] font-black">Frequently asked questions</h2>
        <div className="mb-8 flex flex-col gap-2">
          {FAQ.map((f) => (
            <details
              key={f.q}
              className="cursor-pointer rounded-xl border border-[#1a1a2e]/10 bg-white py-3.5 px-5 text-sm"
            >
              <summary className="mb-2 font-black text-[#1a1a2e]">{f.q}</summary>
              <p className="m-0 leading-7 text-[#1a1a2e]/60">{f.a}</p>
            </details>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-[#1a1a2e]/40">
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong>
        </p>
      </div>
    </main>
  );
}
