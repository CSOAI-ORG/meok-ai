import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK Smart Home — Sovereign Care Haptics | Raspberry Pi + SOV3",
  description:
    "24/7 dignified, consent-first home automation for elderly residents, dementia patients, and solo-living families. Raspberry Pi agents wired to SOV3. Offline-first sovereign privacy.",
  alternates: { canonical: "https://meok.ai/smart-home" },
  openGraph: {
    title: "MEOK Smart Home — Sovereign Care Haptics",
    description: "24/7 dignified home automation + care haptics. Pi + SOV3. No cloud dependency.",
    type: "website",
    url: "https://meok.ai/smart-home",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FEATURES = [
  {
    title: "Consent-first monitoring",
    desc: "Resident signs daily consent token on their phone. No monitoring runs without an active consent window. Auto-expires at night unless renewed.",
    icon: "🛡️",
  },
  {
    title: "24/7 care haptics",
    desc: "Bed-exit detection, fall detection, medication reminder pings, hydration nudges. Caregiver gets an alert only on consent-defined events.",
    icon: "📳",
  },
  {
    title: "Offline-first sovereign privacy",
    desc: "All processing happens on the Pi + M4. No data leaves the home unless explicitly shared with consent. Cloud optional, never required.",
    icon: "🏠",
  },
  {
    title: "Family + GP alert chain",
    desc: "Configurable escalation: nudge resident → vibrate wearable → text family → call GP → call 999. Every step consent-scoped.",
    icon: "🫂",
  },
  {
    title: "SOV3 substrate integration",
    desc: "Every action is signed and audit-logged to the home SOV3 instance. Family can pull the audit chain anytime. Auditor-friendly.",
    icon: "🔗",
  },
  {
    title: "Care-membrane ethics gate",
    desc: "MEOK's care-membrane model prevents surveillance overreach. Cannot be repurposed for marketing. Cannot sell data. Cannot be reconfigured without 2-party consent.",
    icon: "🌿",
  },
];

const HARDWARE = [
  { name: "Raspberry Pi 5 (8GB)", price: "£80", role: "Sovereign compute" },
  { name: "Aqara motion sensor (×4)", price: "£80", role: "Bed-exit, room occupancy" },
  { name: "Vibration motor (×2)", price: "£30", role: "Care haptics (pillow + wristband)" },
  { name: "Door sensor (×2)", price: "£40", role: "Front door + medicine cabinet" },
  { name: "Smart plug (×4)", price: "£60", role: "Kettle, lamp, heater, fan" },
  { name: "Wearable button (×1)", price: "£25", role: "Panic button — calls GP/999" },
  { name: "Pi camera (with shroud)", price: "£35", role: "Optional fall detection (consent-gated)" },
];

const SOFTWARE = [
  { name: "SOV3 substrate", desc: "Audit chain, signed events, consent tokens" },
  { name: "MEOK OLM (local)", desc: "Care-aligned decision model, runs on Pi" },
  { name: "Care-membrane v2", desc: "Ethics gate, prevents surveillance overreach" },
  { name: "Family dashboard", desc: "Web app, signed event pull, no data exfil" },
  { name: "GP dashboard", desc: "Read-only, consent-gated, signed by SOV3" },
  { name: "Resident consent app", desc: "Daily token, panic button, family messaging" },
];

const FAQ = [
  {
    q: "How does consent-first monitoring work?",
    a: "The resident signs a daily consent token on their phone. No monitoring runs without an active consent window, and consent auto-expires at night unless renewed. The care-membrane ethics gate cannot be reconfigured without 2-party consent, and the system cannot be repurposed for marketing or data sale.",
  },
  {
    q: "Is any data sent to the cloud?",
    a: "No. The smart home is offline-first and sovereign — all processing happens on the Raspberry Pi plus an M4. No data leaves the home unless explicitly shared with consent. Cloud is optional and never required, and every action is signed and audit-logged to the home's SOV3 instance.",
  },
  {
    q: "What does it cost?",
    a: "Hardware is around £350 for a typical setup (Raspberry Pi 5, Aqara motion sensors, vibration motors, door sensors, smart plugs, a wearable panic button, and an optional consent-gated Pi camera), excluding installation. Monitoring is £49 per home per month, with a volume discount at 10+ homes for care-home chains and councils.",
  },
  {
    q: "What's included in the £49/home/month?",
    a: "£49/home/month includes the SOV3 substrate, OLM updates, the family dashboard, GP read-only access, and 24/7 sovereign care-membrane enforcement. The escalation chain (nudge resident, vibrate wearable, text family, call GP, call 999) is fully consent-scoped at every step.",
  },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" },
    { "@type": "ListItem", position: 2, name: "Smart Home", item: "https://meok.ai/smart-home" },
  ],
};

const SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "MEOK Smart Home",
  serviceType: "Sovereign care haptics and consent-first home automation",
  description: "24/7 dignified, consent-first home automation for elderly residents, dementia patients, and solo-living families. Raspberry Pi agents wired to the SOV3 substrate, offline-first with no data exfil.",
  provider: { "@type": "Organization", name: "MEOK AI", url: "https://meok.ai" },
  url: "https://meok.ai/smart-home",
  areaServed: "GB",
  offers: { "@type": "Offer", price: "49", priceCurrency: "GBP", url: "https://meok.ai/smart-home", description: "Per home, per month — includes SOV3 substrate, OLM updates, family + GP dashboards, and care-membrane enforcement (hardware ~£350)." },
};

export default function SmartHomePage() {
  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "48px 24px 96px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSONLD) }} />
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <header style={{ marginBottom: 40, textAlign: "center" }}>
          <p style={{ color: GOLD, fontWeight: 900, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", margin: 0 }}>MEOK Smart Home · Layer 7 (Human Loop) extension</p>
          <h1 style={{ fontSize: 48, fontWeight: 900, lineHeight: 1.05, margin: "16px 0" }}>Sovereign care haptics for the home</h1>
          <p style={{ fontSize: 17, lineHeight: 1.5, color: `${NAVY}cc`, maxWidth: 720, margin: "0 auto" }}>
            For elderly residents, dementia patients, and solo-living families. 24/7 dignified, consent-first home automation wired to the SOV3 substrate. No cloud dependency. No data exfil. No surveillance overreach.
          </p>
        </header>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 20 }}>What it does</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {FEATURES.map((f) => (
              <article key={f.title} style={{ background: "white", borderRadius: 14, padding: 24, border: `1px solid ${NAVY}1a` }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{f.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 900, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: `${NAVY}cc`, margin: 0 }}>{f.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 20 }}>Hardware (£350 typical setup)</h2>
          <div style={{ background: "white", borderRadius: 14, padding: 24, border: `1px solid ${NAVY}1a` }}>
            <table style={{ width: "100%", fontSize: 14, borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: `2px solid ${NAVY}1a`, textAlign: "left" }}>
                  <th style={{ padding: 12, fontWeight: 900 }}>Item</th>
                  <th style={{ padding: 12, fontWeight: 900 }}>Price</th>
                  <th style={{ padding: 12, fontWeight: 900 }}>Role</th>
                </tr>
              </thead>
              <tbody>
                {HARDWARE.map((h) => (
                  <tr key={h.name} style={{ borderBottom: `1px solid ${NAVY}0a` }}>
                    <td style={{ padding: 12 }}>{h.name}</td>
                    <td style={{ padding: 12, fontFamily: "monospace" }}>{h.price}</td>
                    <td style={{ padding: 12, color: `${NAVY}cc` }}>{h.role}</td>
                  </tr>
                ))}
                <tr>
                  <td style={{ padding: 12, fontWeight: 900 }}>Total</td>
                  <td style={{ padding: 12, fontWeight: 900, fontFamily: "monospace", color: GOLD }}>£350</td>
                  <td style={{ padding: 12, color: `${NAVY}88`, fontSize: 12 }}>Excludes installation + monitoring subscription</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 20 }}>Software stack</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            {SOFTWARE.map((s) => (
              <div key={s.name} style={{ background: "white", borderRadius: 10, padding: 16, border: `1px solid ${NAVY}1a` }}>
                <h3 style={{ fontSize: 15, fontWeight: 900, margin: "0 0 6px" }}>{s.name}</h3>
                <p style={{ fontSize: 13, color: `${NAVY}cc`, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 20 }}>Frequently asked</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {FAQ.map((f) => (
              <details key={f.q} style={{ background: "white", borderRadius: 14, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
                <summary style={{ fontWeight: 900, cursor: "pointer", fontSize: 15, color: NAVY }}>{f.q}</summary>
                <p style={{ marginTop: 10, color: `${NAVY}cc`, fontSize: 14, lineHeight: 1.6, margin: "10px 0 0" }}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section style={{ background: NAVY, color: "white", borderRadius: 14, padding: 40, textAlign: "center" }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 12 }}>Care home + council pricing</h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginBottom: 24, maxWidth: 720, margin: "0 auto 24px" }}>
            £49/home/month includes SOV3 substrate, OLM updates, family dashboard, GP read-only access, and 24/7 sovereign care-membrane enforcement. Volume discount at 10+ homes.
          </p>
          <a
            href="mailto:nicholas@meok.ai?subject=MEOK%20Smart%20Home%20pilot"
            style={{ display: "inline-block", background: GOLD, color: NAVY, padding: "16px 32px", borderRadius: 10, fontWeight: 900, textDecoration: "none", fontSize: 16 }}
          >
            Book a pilot →
          </a>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 16 }}>
            Or call our founder at +44 7825 712350 to discuss a care-home chain rollout.
          </p>
        </section>
      </div>
    </main>
  );
}
