import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Care Home Compliance Pack — CQC + GDPR + AI Use Policy (£150/mo)",
  description:
    "UK independent care home compliance pack: CQC support, GDPR Article 9 templates, AI Use Policy, staff training log, signed quarterly attestation. £150/mo, MEOK AI Labs.",
  alternates: { canonical: "https://meok.ai/care-homes" },
  openGraph: {
    title: "Care Home Compliance Pack — £150/mo",
    description:
      "Built for independent UK care homes (10-100 beds). Quarterly signed attestations. AI Use Policy. Staff AI literacy log. CQC + GDPR + AI Bill ready.",
    type: "website",
    url: "https://meok.ai/care-homes",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const STRIPE_LINK = "https://buy.stripe.com/bJe8wRa8s8wyeQJgP68k83r";

const PRODUCT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Care Home Compliance Pack",
  description:
    "Quarterly CQC + GDPR + AI Use Policy compliance pack for UK independent care homes. Includes templates, signed attestation, 30-min consult.",
  brand: { "@type": "Brand", name: "MEOK AI Labs" },
  offers: {
    "@type": "Offer",
    priceCurrency: "GBP",
    price: "150",
    priceSpecification: { "@type": "UnitPriceSpecification", price: "150", priceCurrency: "GBP", unitText: "MONTH" },
    availability: "https://schema.org/InStock",
    url: "https://meok.ai/care-homes",
  },
};

const FAQ = [
  { q: "Who is this for?", a: "UK independent care homes (10-100 beds), owner-operator structure, turnover £500K-£5M. Both nursing homes and residential homes. If you're CQC-registered and worried about how you handle GDPR + AI tools (medication scheduling, fall detection, family communication apps), this is for you." },
  { q: "What's actually in the pack?", a: "(1) AI Use Policy template (covers any AI tool your home uses — medication scheduling apps, fall detection, family communication, etc). (2) GDPR Article 9 Care Home Notice (special-category data — health, biometric, family). (3) Staff AI Literacy training log + quarterly refresher. (4) Quarterly Self-Attestation generator (HMAC-SHA256 signed, auditor-verifiable URL). (5) 30-min/quarter live consult call. (6) Slack/email support for new regulatory updates as they land." },
  { q: "Why £150/mo and not one-time?", a: "Compliance isn't a one-time project — it's an ongoing posture. UK GDPR, CQC inspections, AI Bill obligations all evolve. The £150/mo keeps your templates current, your attestations fresh, and gives you direct access to ask 'is this OK?' before you do a thing. One CQC failure costs £10K-£100K in remediation; this pack is £1,800/yr." },
  { q: "Is this CQC-recognised?", a: "Not officially endorsed by CQC (no third-party tool is). But the templates align with CQC Key Lines of Enquiry (KLOE) for Safe + Well-led, and the signed attestation is auditor-verifiable evidence that you ran the check on a specific date with specific answers. Inspectors love that level of paper trail." },
  { q: "What if my home doesn't use any AI yet?", a: "Most homes already use SOME AI without realizing it — automated rota systems, family communication apps, fall detection, medication scheduling. The pack covers all of those. Even if you're 'analog only', the AI Use Policy is now expected paperwork from insurers + commissioners." },
  { q: "How do I get started?", a: "Click subscribe below (£150/mo, 30-day money-back). You'll get all 4 templates within 5 minutes. Within 24h I'll book your first 30-min onboarding call. First quarterly attestation generates within 7 days of onboarding." },
  { q: "Who runs MEOK AI Labs?", a: "Solo UK founder — Nicholas Templeman (CSOAI LTD, UK Companies House 16939677). Built MEOK because I needed pre-built compliance for my own family business (Templeman Opticians, Rayleigh Essex). Now serving care homes too. Direct founder access, not a sales rep." },
];

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function CareHomesPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_JSONLD) }} />

      <div style={{ maxWidth: 880, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ display: "inline-block", padding: "6px 12px", borderRadius: 999, background: "rgba(201,168,76,0.15)", border: `1px solid rgba(201,168,76,0.4)`, color: GOLD, fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>
          Care home vertical · 28 April 2026
        </div>

        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>
          Care Home Compliance Pack
        </h1>
        <p style={{ fontSize: "1.3rem", color: GOLD, fontWeight: 900, marginBottom: 8 }}>£150/mo. CQC + GDPR + AI Use Policy. Built for UK independent care homes.</p>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40, lineHeight: 1.6 }}>
          You run a care home. You face CQC inspections, GDPR Article 9 special-category data obligations, growing AI tool exposure (medication scheduling, fall detection, family apps), and pre-NIS2-UK fear. You don&apos;t have time for £15K Big4 audit retainers. This pack ships pre-built compliance for your specific shape of business.
        </p>

        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16, marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>£150/mo includes</h2>
          <ul style={{ paddingLeft: 20, color: "rgba(255,255,255,0.85)", lineHeight: 1.8, marginBottom: 24, fontSize: 14 }}>
            <li><strong>AI Use Policy template</strong> — covers any AI tool your home uses (rota, family comms, fall detection, medication, etc.). Updated as UK AI Bill evolves.</li>
            <li><strong>GDPR Article 9 Care Home Notice</strong> — special-category data (health, biometric, family) compliant template.</li>
            <li><strong>Staff AI Literacy training log</strong> — Article 4 EU AI Act-style record of who, when, what training. Auditor-ready.</li>
            <li><strong>Quarterly Self-Attestation generator</strong> — HMAC-SHA256 signed, public verify URL. CQC inspectors and insurers can curl-verify independently.</li>
            <li><strong>30-min/quarter live consult call</strong> — direct founder access. No sales reps. No call queues.</li>
            <li><strong>Slack/email support</strong> — ping me when a new reg lands; I tell you if it applies.</li>
          </ul>
          <a
            href={STRIPE_LINK}
            style={{
              display: "inline-block",
              padding: "14px 28px",
              background: GOLD,
              color: NAVY,
              borderRadius: 12,
              fontWeight: 900,
              textDecoration: "none",
              fontSize: 15,
              marginRight: 12,
            }}
          >
            Subscribe £150/mo →
          </a>
          <a
            href="mailto:nicholas@meok.ai?subject=Care%20Home%20Compliance%20Pack%20-%20questions%20before%20I%20subscribe&body=Hi%20Nicholas%2C%0A%0AI%20run%20%5BHome%20name%5D%2C%20a%20%5BNN%5D-bed%20%5Bnursing%2Fresidential%5D%20home%20in%20%5Btown%5D.%0A%0AI%27d%20like%20to%20understand%3A%0A%0A1.%20Whether%20the%20pack%20covers%20%5Bspecific%20concern%5D%0A2.%20%0A3.%20%0A%0AThanks%2C%0A%5BYour%20name%5D"
            style={{
              display: "inline-block",
              padding: "14px 28px",
              background: "transparent",
              color: "white",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: 12,
              fontWeight: 900,
              textDecoration: "none",
              fontSize: 15,
            }}
          >
            Email me first →
          </a>
          <div style={{ marginTop: 12, fontSize: 12, color: "rgba(255,255,255,0.55)" }}>30-day money-back. No long contract. Cancel any time.</div>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 56, marginBottom: 16 }}>Why care homes specifically?</h2>
        <p style={{ color: `${NAVY}99`, lineHeight: 1.7, marginBottom: 16 }}>
          UK care homes occupy a regulatory crosshair: <strong>CQC</strong> watches operational safety; <strong>UK GDPR Article 9</strong> watches data sensitivity; <strong>UK AI Bill</strong> (passed 2026) watches AI tool deployment; insurers raise premiums when any of those slip. Big4 firms charge £15K-£50K to draft this paperwork once, then leave you to maintain it.
        </p>
        <p style={{ color: `${NAVY}99`, lineHeight: 1.7, marginBottom: 16 }}>
          MEOK ships the templates pre-built, keeps them current as regulation evolves, and signs each quarterly attestation cryptographically so your CQC inspector / insurer / commissioner can verify outside the platform. Same paperwork quality, 1/100th the cost.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 56, marginBottom: 16 }}>What gets attested every quarter</h2>
        <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 32 }}>
          <li><strong>Resident data inventory</strong> — what categories of personal data, where stored, who has access</li>
          <li><strong>AI tool register</strong> — every tool used in the home, supplier, purpose, risk classification</li>
          <li><strong>Staff training log</strong> — who completed AI literacy + GDPR refreshers + when</li>
          <li><strong>Incident log</strong> — any near-misses, breaches, or AI-related concerns from the quarter</li>
          <li><strong>Resident/family consent records</strong> — for any AI use that touches them</li>
          <li><strong>Insurance + commissioner alignment</strong> — confirm coverage matches what you're actually doing</li>
        </ul>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 56, marginBottom: 20 }}>Frequently asked</h2>
        <div style={{ display: "grid", gap: 12, marginBottom: 32 }}>
          {FAQ.map((f) => (
            <details key={f.q} style={{ background: "white", borderRadius: 12, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
              <summary style={{ fontWeight: 700, cursor: "pointer", fontSize: 15, color: NAVY }}>{f.q}</summary>
              <p style={{ marginTop: 10, color: `${NAVY}99`, fontSize: 14, lineHeight: 1.6 }}>{f.a}</p>
            </details>
          ))}
        </div>

        <div style={{ background: "white", borderRadius: 14, padding: 24, border: `1px solid ${NAVY}1a`, marginBottom: 32 }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 900, marginBottom: 8 }}>Honest caveats</h3>
          <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.7, fontSize: 14 }}>
            <li>This is NOT a CQC-endorsed product. No tool is. The signed attestation is evidence, not a certification.</li>
            <li>This does NOT replace your DPO (where required). It complements them.</li>
            <li>If your home uses clinical-grade AI (CE-marked medical devices), you need to consult your supplier alongside this pack.</li>
            <li>30-min/quarter consult is direct founder access for now (you = first 30 customers); after that we move to senior associate access. The signed-cert quality stays identical.</li>
          </ul>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong> · <Link href="/refund" style={{ color: GOLD }}>30-day money-back</Link>
        </p>
      </div>
    </main>
  );
}
