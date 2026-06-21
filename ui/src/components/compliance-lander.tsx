import Link from "next/link";
import { Article50Countdown } from "@/components/Article50Countdown";

export type Tier = {
  name: string;
  price: string;
  sub: string;
  desc: string;
  cta: string;
  href: string;
  primary?: boolean;
  outline?: boolean;
};

export type Pillar = { title: string; desc: string };
export type FaqItem = { q: string; a: string };
export type CtaButton = {
  label: string;
  href: string;
  primary?: boolean;
  external?: boolean;
};

export type ComplianceLanderProps = {
  /** H1 title (can contain <span> via ReactNode) */
  title: React.ReactNode;
  /** Gold subtitle line */
  subtitle: string;
  /** 1-2 sentence value prop */
  lede: string;
  /** Urgency badge text */
  badge: string;
  /** Variant of the badge */
  badgeVariant?: "gold" | "red" | "blue" | "green";

  /** Optional deadline/countdown cliff */
  showCountdown?: boolean;
  /** Alert box under lede */
  alert?: { title: string; bullets: React.ReactNode[]; variant?: "red" | "gold" | "blue" | "green" };
  /** Primary CTAs */
  ctas: CtaButton[];
  /** Feature pillars */
  pillars: Pillar[];
  /** Why-it-matters bullets */
  why: React.ReactNode[];
  /** Pricing / service tiers */
  tiers?: Tier[];
  /** FAQ items */
  faq: FaqItem[];
  /** Cross-link footer */
  crossLink?: { text: string; href: string; label: string };
  /** Page slug for schema URLs */
  slug: string;
  /** Page name for Product schema */
  productName: string;
  /** Product description for schema */
  productDescription: string;
  /** Product price for schema (GBP) */
  productPrice: string;
  /** Breadcrumb parent (defaults to Home > Compliance) */
  breadcrumbParent?: { name: string; href: string };
  /** Optional HowTo steps for AEO */
  howTo?: { name: string; steps: { name: string; text: string; url?: string }[] };
  /** Optional trust/kicker line at the bottom */
  trustLine?: React.ReactNode;
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

function badgeClasses(variant: ComplianceLanderProps["badgeVariant"]) {
  switch (variant) {
    case "red":
      return "bg-red-600/10 text-red-600 border-red-600/40";
    case "blue":
      return "bg-blue-600/10 text-blue-600 border-blue-600/40";
    case "green":
      return "bg-emerald-600/10 text-emerald-600 border-emerald-600/40";
    default:
      return "bg-[#c9a84c]/10 text-[#c9a84c] border-[#c9a84c]/40";
  }
}


function alertBorder(variant: NonNullable<ComplianceLanderProps["alert"]>["variant"]) {
  switch (variant) {
    case "red":
      return "border-l-red-600";
    case "blue":
      return "border-l-blue-600";
    case "green":
      return "border-l-emerald-600";
    default:
      return "border-l-[#c9a84c]";
  }
}

export function ComplianceLander({
  title,
  subtitle,
  lede,
  badge,
  badgeVariant = "gold",
  showCountdown = false,
  alert,
  ctas,
  pillars,
  why,
  tiers,
  faq,
  crossLink,
  slug,
  productName,
  productDescription,
  productPrice,
  breadcrumbParent,
  howTo,
  trustLine,
}: ComplianceLanderProps) {
  const canonical = `https://meok.ai${slug}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" },
      breadcrumbParent && { "@type": "ListItem", position: 2, name: breadcrumbParent.name, item: `https://meok.ai${breadcrumbParent.href}` },
      { "@type": "ListItem", position: breadcrumbParent ? 3 : 2, name: productName, item: canonical },
    ].filter(Boolean),
  };

  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: productName,
    description: productDescription,
    url: canonical,
    publisher: { "@type": "Organization", name: "MEOK AI Labs", url: "https://meok.ai" },
    isPartOf: { "@type": "WebSite", name: "MEOK.AI", url: "https://meok.ai" },
  };

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productName,
    description: productDescription,
    brand: { "@type": "Brand", name: "MEOK AI Labs" },
    offers: {
      "@type": "Offer",
      price: productPrice,
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      url: canonical,
      seller: { "@type": "Organization", name: "MEOK AI Labs", url: "https://meok.ai" },
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const howToJsonLd = howTo
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: howTo.name,
        description: productDescription,
        totalTime: "P1D",
        estimatedCost: { "@type": "MonetaryAmount", currency: "GBP", value: productPrice },
        step: howTo.steps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.name,
          text: s.text,
          url: s.url || canonical,
        })),
      }
    : null;

  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {howToJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />}

      <div className="mx-auto max-w-[880px] px-6 py-20">
        {showCountdown && <Article50Countdown />}

        <div
          className={`mb-6 inline-block rounded-full border px-3 py-1.5 text-xs font-black uppercase tracking-widest ${badgeClasses(badgeVariant)}`}
        >
          {badge}
        </div>

        <h1 className="mb-4 text-[clamp(2.4rem,5vw,3.6rem)] font-black leading-[1.05] tracking-tight">
          {title}
        </h1>

        <p className="mb-2 text-2xl font-black text-[#c9a84c]">{subtitle}</p>
        <p className="mb-6 max-w-[640px] text-[1.05rem] text-[#1a1a2e]/60">{lede}</p>

        {alert && (
          <div
            className={`mb-8 max-w-[680px] rounded-xl border-l-4 bg-white py-[18px] px-[22px] ${alertBorder(alert.variant ?? "gold")}`}
          >
            <p className="mb-2 text-sm font-black uppercase tracking-wider">{alert.title}</p>
            <ul className="list-disc pl-5 text-sm leading-7 text-[#1a1a2e]/80">
              {alert.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-16 flex flex-wrap gap-3">
          {ctas.map((cta, i) =>
            cta.external ? (
              <a
                key={i}
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-xl px-7 py-4 text-[15px] font-black no-underline transition hover:opacity-90 ${
                  cta.primary
                    ? "bg-[#c9a84c] text-[#1a1a2e]"
                    : "border border-[#1a1a2e]/20 bg-transparent text-[#1a1a2e]"
                }`}
              >
                {cta.label}
              </a>
            ) : (
              <Link
                key={i}
                href={cta.href}
                className={`rounded-xl px-7 py-4 text-[15px] font-black no-underline transition hover:opacity-90 ${
                  cta.primary
                    ? "bg-[#c9a84c] text-[#1a1a2e]"
                    : "border border-[#1a1a2e]/20 bg-transparent text-[#1a1a2e]"
                }`}
              >
                {cta.label}
              </Link>
            )
          )}
        </div>

        {tiers && (
          <>
            <h2 className="mb-6 text-[1.8rem] font-black tracking-tight">Choose your tier</h2>
            <div className="mb-10 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
              {tiers.map((t) => (
                <div
                  key={t.name}
                  className={`flex flex-col rounded-xl p-5 ${
                    t.primary
                      ? "border-2 border-[#c9a84c] bg-[#1a1a2e] text-white"
                      : "border border-[#1a1a2e]/10 bg-white"
                  }`}
                >
                  <p className="mb-1 text-xs font-black uppercase tracking-wider text-[#c9a84c]">{t.name}</p>
                  <p className="text-[2rem] font-black leading-none">
                    {t.price}
                    <span className="ml-1 text-xs font-normal opacity-70">{t.sub}</span>
                  </p>
                  <p className="my-3 flex-1 text-sm leading-5 opacity-85">{t.desc}</p>
                  <a
                    href={t.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block rounded-xl py-3 text-center text-sm font-black no-underline transition hover:opacity-90 ${
                      t.primary ? "bg-[#c9a84c] text-[#1a1a2e]" : "border border-[#1a1a2e]/20 text-[#1a1a2e]"
                    }`}
                  >
                    {t.cta}
                  </a>
                </div>
              ))}
            </div>
          </>
        )}

        <h2 className="mb-6 text-[1.8rem] font-black tracking-tight">What&apos;s covered</h2>
        <div className="mb-10 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-xl bg-white p-6">
              <p className="mb-2 text-sm font-black tracking-wide text-[#c9a84c]">{p.title}</p>
              <p className="m-0 text-sm leading-6 text-[#1a1a2e]/60">{p.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="mb-6 text-[1.8rem] font-black tracking-tight">Why this matters now</h2>
        <div className="mb-10 flex flex-col gap-3">
          {why.map((w, i) => (
            <div
              key={i}
              className="rounded-xl border-l-[3px] border-[#c9a84c] bg-white py-4 px-5 text-sm leading-6 text-[#1a1a2e]/80"
            >
              {w}
            </div>
          ))}
        </div>

        <h2 className="mb-5 text-[1.6rem] font-black">Frequently asked questions</h2>
        <div className="mb-8 flex flex-col gap-2">
          {faq.map((f) => (
            <details
              key={f.q}
              className="cursor-pointer rounded-xl border border-[#1a1a2e]/10 bg-white py-3.5 px-5 text-sm"
            >
              <summary className="mb-2 font-black text-[#1a1a2e]">{f.q}</summary>
              <p className="m-0 leading-7 text-[#1a1a2e]/60">{f.a}</p>
            </details>
          ))}
        </div>

        {crossLink && (
          <div className="border-t border-[#1a1a2e]/10 pt-8 text-center">
            <p className="mb-2 text-sm text-[#1a1a2e]/40">{crossLink.text}</p>
            <Link href={crossLink.href} className="text-sm font-black text-[#c9a84c]">
              {crossLink.label} →
            </Link>
          </div>
        )}

        {trustLine && (
          <p className="mt-10 text-center text-sm text-[#1a1a2e]/40">
            {trustLine}
          </p>
        )}
      </div>
    </main>
  );
}
