import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Welcome to the Care Home Compliance Pack — MEOK AI Labs",
  description: "Your 4 compliance templates are ready to download immediately.",
  robots: { index: false, follow: false },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";
const GREEN = "#16a34a";

const TEMPLATES = [
  { name: "01 — AI Use Policy", desc: "Covers Article 22 GDPR + UK AI Bill 2026 disclosure obligations" },
  { name: "02 — GDPR Care Home Notice", desc: "Resident data privacy notice incl. Article 9 special-category data" },
  { name: "03 — Staff AI Training Log", desc: "CQC-inspectable log of staff AI literacy sessions" },
  { name: "04 — Quarterly Self-Attestation", desc: "Signed quarterly sign-off covering CQC + GDPR + AI Act obligations" },
];

export default function CareHomesThanksPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "5rem 1.5rem" }}>

        {/* Confirmation badge */}
        <div style={{ display: "inline-block", padding: "8px 16px", borderRadius: 999, background: "rgba(34,197,94,0.15)", border: `1px solid rgba(34,197,94,0.4)`, color: GREEN, fontSize: 13, fontWeight: 900, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 24 }}>
          ✓ Subscription confirmed
        </div>

        <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>
          Welcome. Your templates are ready now.
        </h1>
        <p style={{ fontSize: "1.1rem", color: `${NAVY}99`, lineHeight: 1.6, marginBottom: 32 }}>
          Your 4 starter templates are below — download the pack immediately. Nicholas (founder) has been notified and will be in touch within 4 hours.
        </p>

        {/* Immediate download — most prominent element */}
        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16, marginBottom: 32, border: `2px solid ${GOLD}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <span style={{ fontSize: 28 }}>⬇️</span>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 900, margin: 0 }}>Download your pack now</h2>
          </div>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
            13KB ZIP · 4 Markdown templates · edit in any text editor or Google Docs
          </p>
          <a
            href="https://meok-kits-host.vercel.app/care-home-compliance-pack-v1.zip"
            download
            style={{
              display: "inline-block",
              padding: "14px 28px",
              background: GOLD,
              color: NAVY,
              borderRadius: 10,
              fontWeight: 900,
              textDecoration: "none",
              fontSize: 16,
              letterSpacing: "0.01em",
            }}
          >
            Download Care Home Pack v1 (ZIP) →
          </a>
        </div>

        {/* What's inside */}
        <div style={{ background: "white", borderRadius: 14, padding: 28, border: `1px solid ${NAVY}1a`, marginBottom: 32 }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 900, marginBottom: 16 }}>What&apos;s in the pack</h2>
          {TEMPLATES.map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 12, padding: "10px 0", borderBottom: i < TEMPLATES.length - 1 ? `1px solid ${NAVY}0d` : "none" }}>
              <span style={{ flexShrink: 0, width: 22, height: 22, background: `${GREEN}22`, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 900, color: GREEN }}>✓</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{t.name}</div>
                <div style={{ color: `${NAVY}66`, fontSize: 13, marginTop: 2 }}>{t.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Next steps */}
        <div style={{ background: "white", borderRadius: 14, padding: 28, border: `1px solid ${NAVY}1a`, marginBottom: 32 }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 900, marginBottom: 16 }}>What happens next</h2>
          <ol style={{ paddingLeft: 20, color: `${NAVY}88`, lineHeight: 1.9, fontSize: 14, margin: 0 }}>
            <li>Fill in the <code style={{ background: `${NAVY}0d`, padding: "1px 4px", borderRadius: 4 }}>[HOME NAME]</code> and <code style={{ background: `${NAVY}0d`, padding: "1px 4px", borderRadius: 4 }}>[DATE]</code> placeholders in each template</li>
            <li><strong>Book your 30-min onboarding call</strong> — email <a href="mailto:nicholas@csoai.org?subject=Care%20Home%20Pack%20%E2%80%94%20Onboarding%20call" style={{ color: GOLD, fontWeight: 700 }}>nicholas@csoai.org</a> to schedule</li>
            <li>Each quarter: complete the <strong>Quarterly Self-Attestation</strong> template, sign it, and file it with your CQC evidence folder</li>
          </ol>
        </div>

        {/* Founder note */}
        <div style={{ background: `${GOLD}18`, border: `1px solid ${GOLD}55`, borderRadius: 14, padding: 24, marginBottom: 32 }}>
          <p style={{ fontSize: 14, lineHeight: 1.7, margin: 0, color: NAVY }}>
            <strong>Direct line to the founder:</strong> Email <a href="mailto:nicholas@csoai.org" style={{ color: GOLD, fontWeight: 700 }}>nicholas@csoai.org</a> with any questions. Reply within 4 hours Mon–Fri. If anything in the templates doesn&apos;t fit your home&apos;s shape, I&apos;ll customise them with you on the onboarding call.
          </p>
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
          <Link href="/care-homes" style={{ display: "inline-block", padding: "12px 22px", background: "transparent", color: NAVY, borderRadius: 10, fontWeight: 900, textDecoration: "none", fontSize: 14, border: `1px solid ${NAVY}33` }}>
            ← Back to Care Home Pack
          </Link>
          <Link href="/" style={{ display: "inline-block", padding: "12px 22px", background: GOLD, color: NAVY, borderRadius: 10, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>
            Explore other MEOK products →
          </Link>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong> · <Link href="/refund" style={{ color: GOLD }}>30-day money-back</Link>
        </p>
      </div>
    </main>
  );
}
