import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy · MEOK AI Labs",
  description:
    "Plain-English refund policy for every MEOK product: kits, subscriptions, audit-prep engagements. UK consumer rights statutory protections preserved.",
  alternates: { canonical: "https://meok.ai/refund" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const POLICIES: { product: string; price: string; window: string; terms: string }[] = [
  {
    product: "EU AI Act Readiness Scorecard",
    price: "Free",
    window: "—",
    terms: "Free product. No payment, no refund needed. You can request deletion of your captured email + cert at any time via security@csoai.org.",
  },
  {
    product: "AI Bias Detection",
    price: "£299/mo",
    window: "7-day free trial · 30-day money-back",
    terms: "Cancel within 7 days of trial start: zero charge. Cancel within 30 days of first paid invoice: full refund of that invoice. After 30 days: cancel anytime, no further charges, no refund of past invoices.",
  },
  {
    product: "Article 50 Watermarking Kit",
    price: "£999 one-time",
    window: "14 days",
    terms: "14-day refund if the kit hasn't been deployed (no signed cert generated yet). After deployment: no refund — you have the working artefact. Optional £99/mo monitoring is cancellable any time.",
  },
  {
    product: "NIS2-DE Self-Serve Kit",
    price: "£49 one-time",
    window: "14 days",
    terms: "Full refund within 14 days if you have not yet completed the BSI portal walkthrough.",
  },
  {
    product: "NIS2-DE Done-For-You",
    price: "£999 one-time",
    window: "Until kickoff",
    terms: "Full refund up to the moment we begin the engagement (Zoom kickoff scheduled). After kickoff: 50% refund if cancelled before Section 30/32 register submission. After submission: no refund — you have the late-filing rationale + signed attestation.",
  },
  {
    product: "Audit-Prep Bundle",
    price: "£4,950 one-time",
    window: "Pre-kickoff: full · Mid-engagement: 50%",
    terms: "Full refund up to the scheduled kickoff Zoom. 50% refund if the engagement is cancelled before Day 5 of the 14-day workstream. After Day 5: no refund — substantial deliverables (DPIA, FRIA, Article 9 risk register, conformity statement) are already drafted.",
  },
  {
    product: "Compliance Consulting",
    price: "£950/day",
    window: "24h before booked day",
    terms: "Cancel up to 24h before the booked day: zero charge. Less than 24h notice: 50% of day-rate. Engagement cancelled mid-day: pro-rated to the hour.",
  },
  {
    product: "Pro / Enterprise subscriptions",
    price: "£79-£1,499/mo",
    window: "30 days · annual: pro-rated",
    terms: "Cancel any time, no further charges. Within 30 days of first invoice: full refund. Annual plans: pro-rated refund of unused months on cancellation. Enterprise SLA breaches: service credits per contract terms.",
  },
];

const PRINCIPLES = [
  "We don't trap customers in subscriptions. Cancel any time, no questions asked.",
  "If a deliverable is provably broken (e.g. a kit that doesn't run, a cert the verifier rejects), we refund without argument.",
  "We don't gate refunds behind support tickets or call queues. Email + a sentence is enough.",
  "UK Consumer Rights Act 2015 statutory protections apply for any consumer purchase and override anything on this page that's less favourable.",
  "EU consumers retain the 14-day right of withdrawal under Directive 2011/83/EU for digital content not yet delivered.",
];

export default function RefundPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <div style={{ maxWidth: 940, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div
          style={{
            display: "inline-block",
            padding: "6px 12px",
            borderRadius: 999,
            background: "rgba(201,168,76,0.15)",
            border: `1px solid rgba(201,168,76,0.4)`,
            color: GOLD,
            fontSize: 12,
            fontWeight: 900,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Plain-English · Last reviewed 27 April 2026
        </div>

        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>
          Refund Policy
        </h1>
        <p style={{ fontSize: "1.1rem", color: `${NAVY}99`, maxWidth: 700, marginBottom: 40, lineHeight: 1.6 }}>
          We sell to compliance buyers. They have to defend every line item to procurement. So our
          refund policy is a) on-site, b) by-product, c) plain English. No "subject to terms" weasel.
        </p>

        {/* Principles */}
        <div style={{ background: "white", borderRadius: 14, padding: 28, border: `1px solid ${NAVY}1a`, marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 900, marginBottom: 16 }}>How we think about refunds</h2>
          <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, fontSize: 14, margin: 0 }}>
            {PRINCIPLES.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        {/* Per-product table */}
        <h2 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: 16 }}>Per-product policy</h2>
        <div style={{ background: "white", borderRadius: 14, border: `1px solid ${NAVY}1a`, marginBottom: 40, overflow: "hidden" }}>
          {POLICIES.map((p, i) => (
            <div key={p.product} style={{ padding: 22, borderTop: i === 0 ? "none" : `1px solid ${NAVY}10` }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.4fr 0.8fr 1fr", gap: 16, marginBottom: 8 }}>
                <div style={{ fontWeight: 900, fontSize: 16 }}>{p.product}</div>
                <div style={{ color: GOLD, fontWeight: 700, fontSize: 14 }}>{p.price}</div>
                <div style={{ fontSize: 13, color: `${NAVY}99` }}>{p.window}</div>
              </div>
              <p style={{ color: `${NAVY}99`, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{p.terms}</p>
            </div>
          ))}
        </div>

        {/* How to claim */}
        <div style={{ background: NAVY, color: "white", padding: 28, borderRadius: 16, marginBottom: 32 }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 900, marginBottom: 12 }}>How to request a refund</h3>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, marginBottom: 16, lineHeight: 1.6 }}>
            Email{" "}
            <a href="mailto:nicholas@meok.ai?subject=Refund%20request" style={{ color: GOLD, textDecoration: "underline" }}>
              nicholas@meok.ai
            </a>{" "}
            with the order email, the product, and one sentence on why. We respond within 24h on
            weekdays. Refunds processed via Stripe back to the original payment method, typically 5-10
            business days.
          </p>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 12, lineHeight: 1.6, margin: 0 }}>
            If a Stripe chargeback is opened without first emailing us, we accept the chargeback —
            but we'd much rather just refund directly. Saves both sides the fee + admin.
          </p>
        </div>

        <p style={{ color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          MEOK AI Labs is a trading name of CSOAI LTD · UK Companies House <strong>16939677</strong> · Registered England & Wales
          <br />
          <Link href="/terms" style={{ color: GOLD, textDecoration: "underline" }}>Terms of Service</Link>
          {" · "}
          <Link href="/privacy" style={{ color: GOLD, textDecoration: "underline" }}>Privacy</Link>
          {" · "}
          <Link href="/trust" style={{ color: GOLD, textDecoration: "underline" }}>Trust Center</Link>
        </p>
      </div>
    </main>
  );
}
