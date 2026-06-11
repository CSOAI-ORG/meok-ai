import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sponsor MEOK /constellation — 5 slots, permanent placement | MEOK.AI",
  description:
    "Sponsor slots on the MEOK /constellation ecosystem hub. 5 slots total, dofollow backlink, signed OpenAPI metadata, 1k-word co-authored blog per quarter. Standards + Open-Source sponsorships £500/mo. Founding Constellation Partner £1,000/mo (12-month commit).",
  alternates: { canonical: "https://meok.ai/sponsors" },
  openGraph: {
    title: "Sponsor MEOK /constellation",
    description:
      "5 sponsor slots, permanent placement, dofollow backlink from a page with rising authority. £500-£1,000/mo.",
    type: "website",
    url: "https://meok.ai/sponsors",
  },
};

const FOUNDING = {
  title: "Founding Constellation Partner",
  price: "£1,000/mo",
  commitment: "12-month commit",
  slots: 1,
  bullets: [
    "Logo + tagline above the 19-node /constellation map",
    "Permanent dofollow backlink from a DA-30+ page (rising)",
    "1k-word co-authored blog on meok.ai/insights per quarter",
    "1k-word guest spot on meok.ai/constellation per year",
    "First-look at every MEOK launch (Watermark, Annex IV, NIS2, OLM, robotics)",
    "Co-branded webinar once a year, shared distribution",
    "Sponsor chip in the MEOK OpenAPI metadata (partner APIs call it out)",
    "Signed attestation that your sponsorship is on-chain at proofof.ai/verify",
  ],
};

const STANDARDS = {
  title: "Standards Sponsor",
  price: "£500/mo",
  commitment: "month-to-month",
  slots: 2,
  bullets: [
    "Logo + tagline beside the 4 framework badges (EU AI Act / NIS2 / DORA / ISO 42001)",
    "Permanent dofollow backlink",
    "1k-word co-authored blog per quarter",
    "Sponsor chip in the MEOK OpenAPI metadata",
    "First-look at MEOK launches",
  ],
};

const OSS = {
  title: "Open-Source Sponsor",
  price: "£500/mo",
  commitment: "month-to-month",
  slots: 2,
  bullets: [
    "Logo + tagline below the OSS stack callout (Lib2B / A2A / ACP / MCP)",
    "Permanent dofollow backlink",
    "1k-word co-authored blog per quarter",
    "Sponsor chip in the MEOK OpenAPI metadata",
    "First-look at MEOK launches",
  ],
};

const FAQ = [
  {
    q: "Is the placement permanent?",
    a: "Yes. The slot is on the page for the lifetime of the partnership. No rotating banners, no banner blindness. Every visitor to /constellation sees your logo.",
  },
  {
    q: "How is traffic measured?",
    a: "We share a quarterly Plausible analytics export — sessions, source/medium, geography. /constellation currently pulls ~2k organic uniques/quarter, ~73% AI/ML/compliance buyers.",
  },
  {
    q: "Is the dofollow link nofollow or dofollow?",
    a: "Dofollow, from a page with rising authority (DA-30+ in 6 months, trajectory to DA-50+ by Q4 2026). The page is schema.org-marked and gets cited by Anthropic / Smithery / Glama.",
  },
  {
    q: "How do I pay?",
    a: "Stripe. Monthly recurring. Cancel anytime (with 30-day notice). Founding Constellation Partner = 12-month commit.",
  },
  {
    q: "Can I be on multiple slots?",
    a: "Yes — Founding + Standards is the natural fit. Discount on request.",
  },
  {
    q: "Can I get a 1k-word blog post without the sponsorship?",
    a: "No — the blog is reserved for sponsors. Guest posting is closed.",
  },
];

const SPONSOR_JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "name": "MEOK /constellation Sponsor Programme",
      "description": "5 sponsor slots on the MEOK /constellation ecosystem hub. Permanent placement, dofollow backlink, signed OpenAPI metadata, co-authored blog posts. Standards + Open-Source sponsorships at £500/mo, Founding Constellation Partner at £1,000/mo (12-month commit).",
      "brand": { "@type": "Brand", "name": "MEOK AI Labs" },
      "url": "https://meok.ai/sponsors",
      "category": "Marketing > Sponsorship > Digital > Developer Audience",
      "offers": [
        {
          "@type": "Offer", "name": "Founding Constellation Partner", "price": "1000.00", "priceCurrency": "GBP",
          "priceSpecification": { "billingIncrement": 1, "unitCode": "MON" },
          "url": "mailto:nicholas@csoai.org?subject=Founding%20Constellation%20Partner%20slot",
          "availability": "https://schema.org/LimitedAvailability", "inventoryLevel": { "@type": "QuantitativeValue", "value": 1 },
          "seller": { "@type": "Organization", "name": "MEOK AI Labs" },
        },
        {
          "@type": "Offer", "name": "Standards Sponsor", "price": "500.00", "priceCurrency": "GBP",
          "priceSpecification": { "billingIncrement": 1, "unitCode": "MON" },
          "url": "mailto:nicholas@csoai.org?subject=Standards%20Sponsor%20slot",
          "availability": "https://schema.org/LimitedAvailability", "inventoryLevel": { "@type": "QuantitativeValue", "value": 2 },
          "seller": { "@type": "Organization", "name": "MEOK AI Labs" },
        },
        {
          "@type": "Offer", "name": "Open-Source Sponsor", "price": "500.00", "priceCurrency": "GBP",
          "priceSpecification": { "billingIncrement": 1, "unitCode": "MON" },
          "url": "mailto:nicholas@csoai.org?subject=Open-Source%20Sponsor%20slot",
          "availability": "https://schema.org/LimitedAvailability", "inventoryLevel": { "@type": "QuantitativeValue", "value": 2 },
          "seller": { "@type": "Organization", "name": "MEOK AI Labs" },
        },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQ.map(({ q, a }) => ({
        "@type": "Question", "name": q,
        "acceptedAnswer": { "@type": "Answer", "text": a },
      })),
    },
  ],
};

export default function SponsorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SPONSOR_JSONLD) }}
      />
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-emerald-400">
          MEOK /constellation
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          5 sponsor slots. Permanent placement.
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          The MEOK ecosystem hub at <Link href="https://meok.ai/constellation" className="text-emerald-300 underline">meok.ai/constellation</Link>{" "}
          is the canonical, schema.org-marked map of the MEOK stack — 19 live nodes, cited by
          Anthropic&apos;s MCP Registry, Smithery, and Glama. We&apos;re opening 5 permanent sponsor
          slots on that page. No rotating, no banner blindness.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="mailto:nicholas@csoai.org?subject=MEOK%20%2Fconstellation%20sponsor%20enquiry"
            className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
          >
            Email nicholas@csoai.org to book a slot
          </Link>
          <Link
            href="https://meok.ai/constellation"
            className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-white hover:border-slate-500"
          >
            See the live page
          </Link>
        </div>
      </header>

      <section className="mb-12 grid gap-6 lg:grid-cols-3">
        <SponsorTier tier={FOUNDING} highlight />
        <SponsorTier tier={STANDARDS} />
        <SponsorTier tier={OSS} />
      </section>

      <section className="mb-12 rounded-lg border border-slate-800 bg-slate-900/40 p-6">
        <h2 className="text-2xl font-bold text-white">What every sponsor gets</h2>
        <ul className="mt-4 space-y-2 text-slate-300">
          <li>✓ Permanent placement on meok.ai/constellation (the most-cited MEOK page)</li>
          <li>✓ Dofollow backlink from a page with rising authority (DA-30+ in 6mo, target DA-50+ Q4 2026)</li>
          <li>✓ Sponsor chip in the MEOK OpenAPI metadata (visible to every SDK consumer)</li>
          <li>✓ 1k-word co-authored blog on meok.ai/insights per quarter</li>
          <li>✓ First-look at every MEOK launch (Watermark, Annex IV, NIS2, OLM ICRL, SO-101 robotics)</li>
          <li>✓ Quarterly Plausible analytics export (sessions, source/medium, geography)</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold text-white">FAQ</h2>
        {FAQ.map(({ q, a }) => (
          <details key={q} className="rounded-md border border-slate-800 bg-slate-900/40 p-4 mb-3">
            <summary className="cursor-pointer text-base font-semibold text-white">{q}</summary>
            <p className="mt-2 text-sm text-slate-300">{a}</p>
          </details>
        ))}
      </section>

      <footer className="rounded-lg border border-slate-800 bg-slate-900/40 p-6 text-center text-sm text-slate-400">
        MEOK AI Labs · CSOAI LTD (UK CH 16939677) · nicholas@csoai.org
      </footer>
    </main>
    </>
  );
}

function SponsorTier({
  tier,
  highlight = false,
}: {
  tier: typeof FOUNDING;
  highlight?: boolean;
}) {
  return (
    <div
      className={
        highlight
          ? "rounded-lg border-2 border-emerald-500 bg-slate-900/60 p-6 shadow-lg shadow-emerald-500/10"
          : "rounded-lg border border-slate-800 bg-slate-900/40 p-6"
      }
    >
      <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400">{tier.title}</h3>
      <div className="mt-2 text-4xl font-bold text-white">{tier.price}</div>
      <p className="mt-1 text-sm text-slate-400">
        {tier.commitment} · {tier.slots} slot{tier.slots > 1 ? "s" : ""} total
      </p>
      <ul className="mt-6 space-y-2 text-sm text-slate-300">
        {tier.bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="text-emerald-400">✓</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
