import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DORA Compliance Bolt-On (2026) — Reg 2022/2554 Pre-Built Evidence Pack",
  description:
    "DORA Reg 2022/2554 is fully applicable since 17 January 2025. ICT risk register, incident classification, threat-led penetration testing schedule, third-party risk crosswalk. Pre-built signed evidence pack from £149/mo.",
  alternates: { canonical: "https://meok.ai/dora" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FAQ = [
  { q: "Who's in DORA scope?", a: "Article 2 covers ~22,000 financial entities in the EU: credit institutions (banks), payment institutions, e-money institutions, investment firms, MiFID II investment-services firms, central counterparties (CCPs), trade repositories, central securities depositories (CSDs), trading venues, alternative investment fund managers (AIFMs), UCITS management companies, data reporting service providers, insurance + reinsurance undertakings, intermediaries, IORPs, credit rating agencies, administrators of critical benchmarks, crowdfunding service providers, securitisation repositories, account information service providers, plus crypto-asset service providers (CASPs) under MiCA. Critical ICT third-party service providers (CTPPs) are designated by the European Supervisory Authorities (ESAs) and are subject to a direct oversight framework." },
  { q: "What does DORA actually require?", a: "Five pillars: (1) ICT risk management framework — governance, identification, protection, detection, response, recovery, learning + evolving (Articles 5-16). (2) ICT-related incident reporting — classification, major-incident notification within hours/days to competent authority (Articles 17-23). (3) Digital operational resilience testing — annual testing programme + threat-led penetration testing every 3 years for significant entities (Articles 24-27). (4) ICT third-party risk management — register, contractual safeguards, oversight of CTPPs (Articles 28-44). (5) Information sharing arrangements (Article 45)." },
  { q: "What's threat-led penetration testing (TLPT)?", a: "Article 26 + Article 27 + RTS on TLPT — every 3 years (or as required by competent authority) significant entities + critical undertakings must run a Threat-Led Penetration Test based on the TIBER-EU framework adapted for DORA. Real-world threat-actor TTPs, scoped against critical or important functions, executed by ESAs-approved testers, results shared with the entity's competent authority." },
  { q: "How does DORA stack with NIS2?", a: "Lex specialis. Where DORA applies (financial entities), DORA prevails over NIS2. Financial entities subject to DORA are removed from NIS2 essential-entity scope for ICT requirements. BUT NIS2 still applies to non-financial functions (HR systems, marketing, etc.) where DORA-scope is narrower. Practical: financial entity = DORA primary, NIS2 carve-out, GDPR always." },
  { q: "What's the penalty?", a: "DORA fines vary by member state transposition (DORA is a Regulation but enforcement is via national supervisors). Typical ceilings: up to 2% of total annual global turnover, or up to 1% daily of total annual worldwide turnover during the duration of the breach for repeat offences. CTPPs face their own penalty regime under Article 35 — up to 1% of daily worldwide turnover during non-compliance period." },
  { q: "How does MEOK help?", a: "meok-dora-nis2-crosswalk-mcp (MIT) maps DORA controls to NIS2 + ISO 27001 + SOC 2 to prevent duplicate work. /transparency (£399/mo) covers Article 17 incident-classification logging. /audit-prep-bundle (£4,950) wraps DORA-NIS2 + EU AI Act + EU CRA in 14-day signed evidence pack. /consulting (£950/day) for TLPT scoping support." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const COUNTRY_KITS = [
  { country: "🇧🇪 Belgium (FSMA)", href: "/dora-belgium-late-fee-recovery", price: "£1,499", desc: "Late-fee recovery template + signed evidence pack for Belgian financial entities behind on DORA." },
];

export default function DORAHubPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 940, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ display: "inline-block", padding: "6px 12px", borderRadius: 999, background: "rgba(220,38,38,0.1)", border: `1px solid rgba(220,38,38,0.3)`, color: "#dc2626", fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>FULLY APPLICABLE since 17 Jan 2025</div>

        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>DORA — Digital Operational Resilience Act</h1>
        <p style={{ fontSize: "1.2rem", color: GOLD, fontWeight: 900, marginBottom: 8 }}>22,000 EU financial entities. Five pillars. Already binding.</p>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40, lineHeight: 1.6 }}>
          Regulation (EU) 2022/2554 has been fully applicable since 17 January 2025. ICT risk management, incident reporting, resilience testing, third-party risk, information sharing. Five pillars, no grace period left. We ship the evidence pack.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginBottom: 48 }}>
          {[
            { title: "DORA-NIS2 Crosswalk MCP", price: "MIT free", href: "/labs/mcp/servers", desc: "meok-dora-nis2-crosswalk-mcp on PyPI. Map DORA → NIS2 → ISO 27001 → SOC 2." },
            { title: "Article 17 Incident Logs", price: "£399/mo", href: "/transparency", desc: "Continuous decision-trace logging + incident classification per Article 17 RTS." },
            { title: "Audit-Prep Bundle", price: "£4,950", href: "/audit-prep-bundle", desc: "14-day delivered: DORA + NIS2 + EU AI Act + EU CRA evidence pack." },
            { title: "TLPT Scoping Support", price: "£950/day", href: "/consulting", desc: "Threat-led penetration test scoping per Article 26 + RTS on TLPT." },
          ].map((c) => (
            <Link key={c.href} href={c.href} style={{ background: "white", borderRadius: 14, padding: 20, border: `1px solid ${NAVY}1a`, textDecoration: "none", color: NAVY, display: "block" }}>
              <div style={{ fontSize: 11, color: GOLD, fontWeight: 900, letterSpacing: "0.08em", marginBottom: 6 }}>{c.price}</div>
              <div style={{ fontSize: 16, fontWeight: 900, marginBottom: 8 }}>{c.title}</div>
              <div style={{ fontSize: 13, color: `${NAVY}99`, lineHeight: 1.5 }}>{c.desc}</div>
            </Link>
          ))}
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 56, marginBottom: 16 }}>The five DORA pillars</h2>
        <div style={{ display: "grid", gap: 12, marginBottom: 32 }}>
          {[
            { num: 1, title: "ICT risk management framework", arts: "Articles 5-16", desc: "Governance, identification, protection, detection, response, recovery, learning + evolving." },
            { num: 2, title: "ICT-related incident reporting", arts: "Articles 17-23", desc: "Classification, major-incident notification within hours/days to competent authority." },
            { num: 3, title: "Digital operational resilience testing", arts: "Articles 24-27", desc: "Annual testing programme + TLPT every 3 years for significant entities." },
            { num: 4, title: "ICT third-party risk management", arts: "Articles 28-44", desc: "Register, contractual safeguards, ESA oversight of Critical TPPs." },
            { num: 5, title: "Information sharing arrangements", arts: "Article 45", desc: "Voluntary intelligence-sharing among financial entities (cyber threat intel)." },
          ].map((p) => (
            <div key={p.num} style={{ background: "white", borderRadius: 12, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
                <div style={{ fontSize: 16, fontWeight: 900 }}><span style={{ color: GOLD }}>Pillar {p.num}</span> — {p.title}</div>
                <div style={{ fontSize: 11, color: `${NAVY}66`, fontWeight: 700, letterSpacing: "0.04em" }}>{p.arts}</div>
              </div>
              <div style={{ fontSize: 13, color: `${NAVY}99`, lineHeight: 1.5 }}>{p.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 56, marginBottom: 16 }}>Country-specific kits</h2>
        <div style={{ display: "grid", gap: 12, marginBottom: 32 }}>
          {COUNTRY_KITS.map((k) => (
            <Link key={k.href} href={k.href} style={{ background: "white", borderRadius: 12, padding: "16px 20px", border: `1px solid ${NAVY}1a`, textDecoration: "none", color: NAVY, display: "block" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
                <div style={{ fontSize: 16, fontWeight: 900 }}>{k.country}</div>
                <div style={{ fontSize: 11, color: GOLD, fontWeight: 900, letterSpacing: "0.06em" }}>{k.price}</div>
              </div>
              <div style={{ fontSize: 13, color: `${NAVY}99`, lineHeight: 1.5 }}>{k.desc}</div>
            </Link>
          ))}
          <div style={{ fontSize: 12, color: `${NAVY}66`, padding: "8px 4px" }}>More country kits in production: France (ACPR), Germany (BaFin), Italy (Banca d&apos;Italia), Netherlands (DNB), Ireland (Central Bank). <a href="mailto:nicholas@meok.ai?subject=DORA%20country%20kit%20request" style={{ color: GOLD }}>Request priority →</a></div>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 56, marginBottom: 20 }}>Frequently asked</h2>
        <div style={{ display: "grid", gap: 12, marginBottom: 32 }}>
          {FAQ.map((f) => (
            <details key={f.q} style={{ background: "white", borderRadius: 12, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
              <summary style={{ fontWeight: 700, cursor: "pointer", fontSize: 15, color: NAVY }}>{f.q}</summary>
              <p style={{ marginTop: 10, color: `${NAVY}99`, fontSize: 14, lineHeight: 1.6 }}>{f.a}</p>
            </details>
          ))}
        </div>

        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16, marginTop: 32 }}>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>Behind on DORA? 14-day catch-up</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20, maxWidth: 640 }}>Free 30-min triage call: bring your DORA gap, we map remediation + signed evidence flow.</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="mailto:nicholas@meok.ai?subject=DORA%20gap%20analysis" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>Free DORA triage →</a>
            <Link href="/audit-prep-bundle" style={{ display: "inline-block", padding: "14px 24px", background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>£4,950 audit-prep →</Link>
          </div>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          Source: <a href="https://eur-lex.europa.eu/eli/reg/2022/2554/oj" style={{ color: GOLD }}>Regulation (EU) 2022/2554</a> · MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong>
        </p>
      </div>
    </main>
  );
}
