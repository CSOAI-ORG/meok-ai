import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partner Program — Embed the EU AI Act Readiness Scorecard | MEOK",
  description:
    "Embed the free EU AI Act readiness scorecard on your consultancy / Notified Body / lawyer site. 30% revenue share on referrals. White-label available.",
  alternates: { canonical: "https://meok.ai/partners" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FAQ = [
  { q: "How does the partner program work?", a: "You embed the MEOK scorecard on your firm's site as an iframe (1 line of HTML). Visitors run the scorecard, see your branding, get a signed attestation. If they upgrade to a paid MEOK product (Pro / Audit-Prep / Consulting), you earn 30% recurring revenue share for life of the customer." },
  { q: "What does the embed look like?", a: "An iframe pointed at meok.ai/scorecard/embed?utm_source={your-firm-id}. The scorecard renders inside your page, scrollable, mobile-responsive. No external dependencies. Scorecard runs send results to MEOK + Buttondown subscriber list, attribution tagged to your firm." },
  { q: "What about white-label / co-branded?", a: "Available for partners doing 5+ scorecard embeds/month or pre-signed €25K/yr partnership. We spin up {your-firm}.meok.ai/scorecard with your logo + colors. Email nicholas@csoai.org for the deal sheet." },
  { q: "Who's the ideal partner?", a: "Boutique GRC consultancies (5-50 staff), AI lawyers / law firms with EU practice, Notified Bodies for AI conformity assessment, MSPs serving regulated SMEs, AI ethics consultancies. Anyone who has an audience asking 'are we EU AI Act ready?'" },
  { q: "How is revenue tracked?", a: "Stripe partner-tracking via UTM source on every paid checkout. Monthly statement of referred customers + recurring revenue. Paid out monthly via wire / Stripe Connect." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const EMBED_SNIPPET = `<iframe
  src="https://meok.ai/scorecard/embed?utm_source=YOUR_FIRM_ID"
  style="width:100%; height:100vh; border:0; border-radius:12px;"
  loading="lazy"
  title="EU AI Act Readiness Scorecard"
></iframe>`;

export default function PartnersPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ display: "inline-block", padding: "6px 12px", borderRadius: 999, background: "rgba(201,168,76,0.15)", border: `1px solid rgba(201,168,76,0.4)`, color: GOLD, fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>Partner program · 30% recurring rev share</div>

        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>Embed the EU AI Act scorecard on your site</h1>
        <p style={{ fontSize: "1.2rem", color: GOLD, fontWeight: 900, marginBottom: 8 }}>1 line of HTML. 30% recurring revenue share. White-label optional.</p>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40, lineHeight: 1.6 }}>
          You serve clients. They ask &quot;are we EU AI Act ready?&quot; You don&apos;t want to build the assessment yourself. Embed our scorecard, keep the lead, earn 30% recurring revenue when they convert to paid MEOK products.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 16 }}>How to embed</h2>
        <div style={{ background: NAVY, color: "white", padding: 20, borderRadius: 12, marginBottom: 32, fontSize: 13, fontFamily: "monospace", overflow: "auto" }}>
          <pre style={{ margin: 0 }}>{EMBED_SNIPPET}</pre>
        </div>
        <p style={{ color: `${NAVY}99`, lineHeight: 1.7, marginBottom: 32, fontSize: 14 }}>
          Replace <code style={{ background: `${NAVY}10`, padding: "2px 6px", borderRadius: 4, fontFamily: "monospace" }}>YOUR_FIRM_ID</code> with the partner ID we issue (after a 5-min email). UTM tags every conversion to your account, attribution tracked in Stripe.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 16 }}>Revenue share</h2>
        <div style={{ display: "grid", gap: 12, marginBottom: 32 }}>
          {[
            { tier: "Free scorecard", you: "—", meok: "—", note: "Lead capture only" },
            { tier: "Pro tier subscriber (£79/mo)", you: "£23.70/mo recurring", meok: "£55.30/mo", note: "30% lifetime" },
            { tier: "Audit-prep bundle (£4,950 once)", you: "£1,485 commission", meok: "£3,465", note: "30% one-time" },
            { tier: "Enterprise (£1,499/mo)", you: "£449.70/mo recurring", meok: "£1,049.30/mo", note: "30% lifetime" },
            { tier: "Consulting block (£950/day)", you: "£285/day commission", meok: "£665/day", note: "30% per engagement" },
          ].map((row) => (
            <div key={row.tier} style={{ display: "grid", gridTemplateColumns: "2fr 1.2fr 1fr 1fr", fontSize: 13, alignItems: "center", padding: "10px 16px", background: "white", borderRadius: 10, border: `1px solid ${NAVY}1a` }}>
              <div style={{ fontWeight: 700 }}>{row.tier}</div>
              <div style={{ color: GOLD, fontWeight: 900 }}>You: {row.you}</div>
              <div style={{ color: `${NAVY}99` }}>MEOK: {row.meok}</div>
              <div style={{ color: `${NAVY}66`, fontSize: 11, fontStyle: "italic" }}>{row.note}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 20 }}>Frequently asked</h2>
        <div style={{ display: "grid", gap: 12, marginBottom: 32 }}>
          {FAQ.map((f) => (
            <details key={f.q} style={{ background: "white", borderRadius: 12, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
              <summary style={{ fontWeight: 700, cursor: "pointer", fontSize: 15, color: NAVY }}>{f.q}</summary>
              <p style={{ marginTop: 10, color: `${NAVY}99`, fontSize: 14, lineHeight: 1.6 }}>{f.a}</p>
            </details>
          ))}
        </div>

        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16, marginTop: 32 }}>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>Apply for a partner ID (5-min email)</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20, maxWidth: 640 }}>Tell us your firm name, sectors served, and rough audience size. We&apos;ll issue a partner ID + Stripe Connect onboarding within 24h.</p>
          <a href="mailto:nicholas@csoai.org?subject=MEOK%20partner%20ID%20application&body=Firm%20name%3A%0ASectors%20served%3A%0AAudience%20size%3A%0AWebsite%20URL%3A%0ASample%20client%20type%3A%0A" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>Apply for partner ID →</a>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong>
        </p>
      </div>
    </main>
  );
}
