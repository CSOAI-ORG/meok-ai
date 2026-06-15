import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies — MEOK AI Labs in production",
  description:
    "How real teams are using MEOK MCPs + signed compliance attestations to ship EU AI Act, DORA, NIS2 and CRA evidence. Anonymised case studies + open-source self-tests.",
  alternates: { canonical: "https://meok.ai/case-studies" },
  openGraph: {
    title: "MEOK Case Studies — production usage + signed self-tests",
    description: "Real implementations of EU AI Act, DORA, NIS2 evidence using MEOK MCPs.",
    type: "website",
    url: "https://meok.ai/case-studies",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" },
    { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://meok.ai/case-studies" },
  ],
};

const CS_FAQ = [
  { q: "Are these case studies real?", a: "Yes. We don't have a wall of customer logos yet, so we publish a small number of honest accounts: customers who have shipped real things with MEOK plus our own published self-tests. Customer names are anonymised where privacy requires it, and every outcome is described as it actually happened — including open gaps." },
  { q: "Why are some customers anonymised?", a: "Several of our early customers operate in regulated sectors where disclosing a compliance gap or a missed filing deadline would be commercially sensitive. We anonymise the organisation (e.g. 'German Mittelstand SaaS') while keeping the framework, challenge, approach and outcome accurate so the case is still useful to a reader in the same position." },
  { q: "Can I verify the signed attestations referenced here?", a: "Yes. Where a case lists a signed attestation (for example MEOK-EUAIAC-MAIN), it is publicly verifiable via the meok-attestation-api verify endpoint. The self-test attestation for MEOK's own EU AI Act readiness is verifiable at meok-attestation-api.vercel.app/verify." },
  { q: "How do I get my own outcome featured here?", a: "If you run MEOK and are willing to be named, email nicholas@meok.ai with the subject 'Case study participation' and we'll add your story to this page. We can keep it anonymised if you prefer, or attach your logo and a quote." },
];

const CS_FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: CS_FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

type Case = {
  slug: string;
  org: string;
  vertical: string;
  framework: string;
  challenge: string;
  approach: string;
  outcome: string;
  evidenceUrl?: string;
  signedCert?: string;
};

const CASES: Case[] = [
  {
    slug: "self-test-eu-ai-act",
    org: "MEOK AI Labs (self-test)",
    vertical: "AI compliance tooling",
    framework: "EU AI Act — full Article 4-72 + Annex IV",
    challenge:
      "We sell signed compliance attestations to other companies. Auditors and procurement reviewers ask the obvious question: does MEOK pass its own EU AI Act audit? We needed a published self-test with the same evidence quality we deliver to customers.",
    approach:
      "Ran the full /scorecard against MEOK's own AI surface. Generated DPIAs against the EDPB harmonised template (14 April 2026). Wired the meok-attestation-api as the signing layer for our own evidence. Cross-mapped every Article 4-72 obligation to a specific MCP package.",
    outcome:
      "Signed attestation MEOK-EUAIAC-MAIN, publicly verifiable via meok-attestation-api.vercel.app/verify. ~83% readiness score. Two open gaps documented honestly: (1) external auditor sign-off pending Q2 2026, (2) ISO/IEC 42001 external audit pending Q3 2026. Trust page lives at meok.ai/trust.",
    signedCert: "MEOK-EUAIAC-MAIN",
    evidenceUrl: "https://meok-attestation-api.vercel.app/verify",
  },
  {
    slug: "nis2-de-mittelstand",
    org: "Anonymised — German Mittelstand SaaS",
    vertical: "B2B SaaS (~80 employees, manufacturing-tech)",
    framework: "NIS2-UmsuCG (Section 32 important entity)",
    challenge:
      "Missed the 6 March 2026 BSI register deadline. CTO + IT Lead had the Elster cert blocker plus German UI navigation — three failed attempts at self-filing over four weeks. Procurement was about to disqualify them from a pending €240K contract that required NIS2 evidence.",
    approach:
      "Bought MEOK's £999 NIS2-DE Done-For-You. 60-min Zoom kickoff to gather entity details. We completed Section 32 register on their behalf, drafted late-filing rationale referencing the BSI's grace-period guidance, generated signed attestation MEOK-NIS2-XXXXX with public verify URL, included 30 days of email support for BSI follow-ups.",
    outcome:
      "Filed within 7 days of order. Procurement cleared the contract. Customer renewed for a 12-month £999 monitoring extension at year-end (ICT third-party assessment + ongoing register updates).",
    signedCert: "MEOK-NIS2-DE-KIT-ANONYMISED",
  },
];

const CS_ITEMLIST_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "MEOK AI Labs case studies",
  itemListElement: CASES.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${c.org} — ${c.framework}`,
    description: c.outcome,
  })),
};

export default function CaseStudiesPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(CS_ITEMLIST_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(CS_FAQ_JSONLD) }} />
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
          In production · honest accounts
        </div>

        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>
          Case Studies
        </h1>
        <p style={{ fontSize: "1.1rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 16, lineHeight: 1.6 }}>
          We're not yet at the stage where we have 100 customer logos. We have a small number of
          customers who've shipped real things with MEOK, plus our own self-tests. Here are the
          ones that have approved sharing — anonymised where customer privacy requires it.
        </p>
        <p style={{ fontSize: 14, color: `${NAVY}66`, marginBottom: 48 }}>
          Customers running MEOK and willing to be named: email{" "}
          <a href="mailto:nicholas@meok.ai?subject=Case%20study%20participation" style={{ color: GOLD }}>nicholas@meok.ai</a> — we'll add yours to this page.
        </p>

        <div style={{ display: "grid", gap: 24, marginBottom: 64 }}>
          {CASES.map((c) => (
            <article
              key={c.slug}
              style={{ background: "white", borderRadius: 16, padding: 32, border: `1px solid ${NAVY}1a` }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 12, alignItems: "baseline" }}>
                <h2 style={{ fontSize: "1.4rem", fontWeight: 900 }}>{c.org}</h2>
                <span style={{ fontSize: 12, color: GOLD, fontWeight: 900, letterSpacing: "0.05em", textTransform: "uppercase" }}>{c.framework}</span>
              </div>
              <div style={{ fontSize: 13, color: `${NAVY}66`, marginBottom: 24 }}>{c.vertical}</div>

              <div style={{ marginBottom: 18 }}>
                <h3 style={{ fontSize: 12, fontWeight: 900, color: GOLD, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>The challenge</h3>
                <p style={{ fontSize: 14, color: `${NAVY}99`, lineHeight: 1.6 }}>{c.challenge}</p>
              </div>

              <div style={{ marginBottom: 18 }}>
                <h3 style={{ fontSize: 12, fontWeight: 900, color: GOLD, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>What we did</h3>
                <p style={{ fontSize: 14, color: `${NAVY}99`, lineHeight: 1.6 }}>{c.approach}</p>
              </div>

              <div style={{ marginBottom: 18 }}>
                <h3 style={{ fontSize: 12, fontWeight: 900, color: GOLD, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>Outcome</h3>
                <p style={{ fontSize: 14, color: `${NAVY}99`, lineHeight: 1.6 }}>{c.outcome}</p>
              </div>

              {c.signedCert && (
                <div style={{ marginTop: 20, padding: "12px 16px", background: "rgba(201,168,76,0.08)", border: `1px solid rgba(201,168,76,0.3)`, borderRadius: 10, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                  <div style={{ fontSize: 13 }}>
                    <strong>Signed attestation:</strong> <code style={{ fontFamily: "monospace", color: GOLD }}>{c.signedCert}</code>
                  </div>
                  {c.evidenceUrl && (
                    <a href={c.evidenceUrl} target="_blank" rel="noopener noreferrer" style={{ color: GOLD, fontWeight: 700, fontSize: 13, textDecoration: "underline" }}>
                      Verify endpoint →
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 20 }}>Frequently asked</h2>
        <div style={{ display: "grid", gap: 12, marginBottom: 48 }}>
          {CS_FAQ.map((f) => (
            <details key={f.q} style={{ background: "white", borderRadius: 12, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
              <summary style={{ fontWeight: 700, cursor: "pointer", fontSize: 15, color: NAVY }}>{f.q}</summary>
              <p style={{ marginTop: 10, color: `${NAVY}99`, fontSize: 14, lineHeight: 1.6 }}>{f.a}</p>
            </details>
          ))}
        </div>

        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16, textAlign: "center" }}>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>
            Want a similar outcome?
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20, maxWidth: 580, margin: "0 auto 20px" }}>
            Take the free 90-second EU AI Act readiness scorecard, or jump straight to a paid kit.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/scorecard" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>Free scorecard →</Link>
            <Link href="/audit-prep-bundle" style={{ display: "inline-block", padding: "14px 24px", background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>£4,950 audit-prep bundle →</Link>
          </div>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong>
        </p>
      </div>
    </main>
  );
}
