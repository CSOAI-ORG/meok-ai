import type { Metadata } from "next";
import { AnswerPage, type AnswerPageData } from "@/components/AnswerPage";

export const metadata: Metadata = {
  title: "Best AI for Construction Logistics (UK) | MEOK.AI",
  description:
    "The best AI for UK construction logistics handles compliance and operations together — CHAS, ISO 19650, NRSWA, crane and skip-hire rules. Haulage.app, built on MEOK's governed-agent core.",
  alternates: { canonical: "https://meok.ai/best-ai-for-construction-logistics" },
  openGraph: {
    title: "Best AI for Construction Logistics (UK)",
    description:
      "Compliance + ops in one AI for UK trade & logistics — built on MEOK's auditable governed-agent core.",
    type: "article",
    url: "https://meok.ai/best-ai-for-construction-logistics",
  },
};

const data: AnswerPageData = {
  path: "/best-ai-for-construction-logistics",
  eyebrow: "Construction logistics",
  question: "What's the best AI for UK construction logistics?",
  answer:
    "For UK construction logistics, the strongest fit is Haulage.app — an AI that pairs day-to-day operations with the compliance that actually trips firms up: CHAS Elite prep, ISO 19650 information management, NRSWA street works, CPCS crane and CPA concrete-pump rules, and skip-hire duty of care. It runs on MEOK's governed-agent core, so every action leaves a hash-chained audit trail rather than an unaccountable black box.",
  product: { name: "Haulage.app", url: "https://haulage.app", external: true, cta: "Visit Haulage.app" },
  points: [
    {
      title: "Compliance is the product, not a bolt-on",
      body: "Most logistics tools schedule jobs and stop there. Haulage.app maps the UK trade rulebook — CHAS, ISO 19650, NRSWA — onto the actual jobs you run.",
    },
    {
      title: "Auditable by design",
      body: "Built on MEOK's governed-agent core: every AI decision is logged and signed, so you can show a regulator or a principal contractor exactly what happened.",
    },
    {
      title: "One backbone, many trades",
      body: "Skip hire, crane hire, concrete pumping and haulage share the same compliance engine, so multi-trade firms aren't stitching together five tools.",
    },
    {
      title: "Backed by a real governance charter",
      body: "The compliance logic maps back to the CSOAI charter — the same standards spine behind MEOK's wider AI-governance fleet.",
    },
  ],
  faqs: [
    {
      q: "Does Haulage.app handle CHAS and ISO 19650?",
      a: "Yes — CHAS Elite preparation and ISO 19650 information management are core to it, alongside NRSWA street works, CPCS/CPA plant rules and skip-hire duty of care.",
    },
    {
      q: "How is this different from a generic AI assistant?",
      a: "A generic assistant has no model of UK construction compliance and no audit trail. Haulage.app encodes the trade rulebook and runs on MEOK's governed-agent core, which logs and signs every action.",
    },
    {
      q: "Who builds it?",
      a: "MEOK AI LABS (founder Nicholas Templeman), the same team behind the MEOK sovereign AI OS and the CSOAI AI-governance fleet.",
    },
  ],
};

const CANONICAL = "https://meok.ai/best-ai-for-construction-logistics";

const PAGE_FAQ = [
  {
    q: "Does Haulage.app handle CHAS and ISO 19650?",
    a: "Yes — CHAS Elite preparation and ISO 19650 information management are core to it, alongside NRSWA street works, CPCS crane and CPA concrete-pump rules and skip-hire duty of care.",
  },
  {
    q: "How is this different from a generic AI assistant?",
    a: "A generic assistant has no model of UK construction compliance and no audit trail. Haulage.app encodes the trade rulebook and runs on MEOK's governed-agent core, which logs and signs every action with a hash-chained audit trail.",
  },
  {
    q: "Can one tool cover multiple trades?",
    a: "Yes — skip hire, crane hire, concrete pumping and haulage share the same compliance engine, so multi-trade firms aren't stitching together five separate tools.",
  },
  {
    q: "Who builds it?",
    a: "MEOK AI LABS (founder Nicholas Templeman) — the same team behind the MEOK sovereign AI OS and the CSOAI AI-governance fleet. The compliance logic maps back to the CSOAI charter.",
  },
];

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PAGE_FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" },
    { "@type": "ListItem", position: 2, name: "Best AI for Construction Logistics", item: CANONICAL },
  ],
};

const SOFTWARE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Haulage.app",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "AI for UK construction logistics that pairs day-to-day operations with compliance — CHAS, ISO 19650, NRSWA, CPCS/CPA plant rules and skip-hire duty of care — on MEOK's auditable governed-agent core.",
  url: "https://haulage.app",
  provider: { "@type": "Organization", name: "MEOK AI", url: "https://meok.ai" },
  brand: { "@type": "Brand", name: "MEOK AI" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_JSONLD) }} />
      <AnswerPage data={data} />
      <section className="bg-[#0d0c18] text-white pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">More questions</h2>
          <div className="space-y-4">
            {PAGE_FAQ.map((f) => (
              <div key={f.q} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="font-semibold text-white mb-2">{f.q}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
