import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EU AI Act Article 5 — Prohibited AI Practices (in force, no grace period)",
  description:
    "Article 5 of the EU AI Act bans 8 categories of AI practice — manipulation, exploitation of vulnerabilities, social scoring, predictive policing, emotion recognition at work/school, untargeted facial scraping, real-time biometric ID in public. Fully in force.",
  alternates: { canonical: "https://meok.ai/eu-ai-act/article-5" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FAQ = [
  { q: "What's the date Article 5 became binding?", a: "Article 5 prohibitions have been fully applicable since 2 February 2025 with no grace period. They were always Phase 1 of the EU AI Act timeline. The Digital Omnibus did NOT delay Article 5 — only the Annex III high-risk obligations and Annex I product-safety obligations got pushed." },
  { q: "What are the 8 prohibited categories?", a: "Article 5(1)(a)-(h) bans: (a) subliminal / manipulative techniques causing significant harm, (b) exploitation of vulnerabilities (age, disability, social/economic situation), (c) social scoring by public + private actors that leads to detrimental treatment, (d) predictive policing based solely on profiling natural persons, (e) untargeted scraping of facial images from internet/CCTV to build facial-recognition databases, (f) emotion recognition in workplace + education (with narrow medical/safety exceptions), (g) biometric categorisation inferring sensitive attributes (race, political views, sexuality, religion), (h) real-time remote biometric identification in publicly accessible spaces for law enforcement (with narrow national-security exceptions and judicial authorisation)." },
  { q: "What's the penalty?", a: "Article 99(3) sets the maximum fine for Article 5 violations at €35M or 7% of total worldwide annual turnover (whichever is higher). This is the highest band in the regulation. Sanctions are imposed by national supervisory authorities + the EU AI Office for systemic providers." },
  { q: "Who enforces?", a: "Each member state designates a national supervisory authority. France: CNIL + Arcom + ANSSI sharing competence. Germany: BNetzA + BSI + Datenschutzbehörden. Italy: ACN + Garante. The EU AI Office (DG CONNECT) coordinates cross-border + GPAI matters." },
  { q: "What about emotion recognition for safety?", a: "Article 5(1)(f) carves out workplace + education emotion recognition explicitly except 'where the use of the AI system is intended to be put in place or into the market for medical or safety reasons.' Driver-fatigue detection in commercial vehicles is the canonical safety case. Plant-floor anomaly detection that incidentally observes worker emotion is borderline — document the intended purpose carefully and prefer non-emotion-based proxies." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function Article5Page() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <Link href="/eu-ai-act" style={{ fontSize: 13, color: `${NAVY}66`, textDecoration: "none" }}>← All EU AI Act articles</Link>
        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginTop: 24, marginBottom: 16 }}>EU AI Act Article 5 — Prohibited AI Practices</h1>
        <div style={{ display: "inline-block", padding: "6px 12px", borderRadius: 999, background: "rgba(220,38,38,0.1)", color: "#dc2626", fontSize: 12, fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 24 }}>IN FORCE since 2 Feb 2025 — €35M / 7% turnover penalty</div>
        <p style={{ fontSize: "1.1rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40, lineHeight: 1.6 }}>
          Article 5 is the EU AI Act's hard floor. Eight categories of AI practice are <strong>banned outright</strong>, regardless of whether you call yourself a provider or a deployer. Penalty ceiling is the highest in the regulation. Already fully applicable — no Digital Omnibus delay for this article.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 16 }}>The 8 prohibitions (Article 5(1)(a)-(h))</h2>
        <ol style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 32 }}>
          <li><strong>(a) Subliminal / manipulative techniques</strong> — that distort behaviour materially impairing informed decision-making, causing significant harm.</li>
          <li><strong>(b) Exploitation of vulnerabilities</strong> — due to age, disability, or specific social/economic situation, with material distortion + significant harm.</li>
          <li><strong>(c) Social scoring</strong> — by public OR private actors, evaluating/classifying based on social behaviour OR personal characteristics, leading to detrimental treatment unrelated to context or disproportionate.</li>
          <li><strong>(d) Predictive policing solely from profiling</strong> — assessing risk of criminal offence based solely on profiling or personality traits/characteristics. (Carve-out for analytical tools supporting human assessment based on objective + verifiable facts directly linked to criminal activity.)</li>
          <li><strong>(e) Untargeted facial scraping</strong> — to build facial-recognition databases from internet or CCTV imagery.</li>
          <li><strong>(f) Emotion recognition in workplace + education</strong> — except for medical or safety purposes.</li>
          <li><strong>(g) Biometric categorisation inferring sensitive attributes</strong> — race, political opinions, trade union membership, religious/philosophical beliefs, sex life, sexual orientation. (Carve-out for lawful labelling/filtering of lawfully acquired biometric datasets in law enforcement.)</li>
          <li><strong>(h) Real-time remote biometric identification</strong> — in publicly accessible spaces for law enforcement, except for the narrow exceptions in 5(2)-(7) (search for victims, prevention of imminent threat to life or substantial physical safety, identification of suspects of certain serious offences) — and only with prior judicial/administrative authorisation.</li>
        </ol>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 16 }}>What this means in practice</h2>
        <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 32 }}>
          <li><strong>Recruitment AI</strong> — emotion-recognition layers in interview-scoring AI are now banned outside medical/safety context. Sentiment analysis of free-text answers is borderline; document carefully.</li>
          <li><strong>Workforce monitoring</strong> — keystroke + screen analytics that infer emotion are banned. Pure productivity metrics are fine.</li>
          <li><strong>EdTech</strong> — emotion recognition in classroom AI is banned. Engagement detection through camera proxies is risky.</li>
          <li><strong>Marketing AI</strong> — manipulative dark-pattern targeting of vulnerable groups (debt-stressed, addictively-vulnerable) is banned.</li>
          <li><strong>Insurance AI</strong> — pricing models that score based on inferred sensitive attributes (Article 5(1)(g)) are banned.</li>
          <li><strong>Law enforcement AI</strong> — pure-profile predictive policing is banned. Facial scraping for databases is banned.</li>
        </ul>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 16 }}>How MEOK helps you stay clear</h2>
        <div style={{ background: "white", borderRadius: 12, padding: 24, border: `1px solid ${NAVY}1a`, marginBottom: 32 }}>
          <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8 }}>
            <li><strong>/scorecard (free)</strong> — flags Article 5 risk in 90 seconds. Generates signed attestation.</li>
            <li><strong>meok-eu-ai-act-mcp</strong> — runs Article 5 prohibition check against your system description in your agent stack.</li>
            <li><strong>/audit-prep-bundle (£4,950)</strong> — Article 5 + Articles 9-15 + Article 26(9) FRIA in a 14-day signed evidence pack.</li>
            <li><strong>/consulting (£950/day)</strong> — borderline-case review (workplace AI, marketing personalisation, biometric tools).</li>
          </ul>
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

        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16, textAlign: "center" }}>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/scorecard" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>Run free Article 5 check →</Link>
            <Link href="/audit-prep-bundle" style={{ display: "inline-block", padding: "14px 24px", background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>£4,950 Audit-Prep Bundle →</Link>
          </div>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          Source: <a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" style={{ color: GOLD }}>EU AI Act Regulation 2024/1689 Art. 5</a> · MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong>
        </p>
      </div>
    </main>
  );
}
