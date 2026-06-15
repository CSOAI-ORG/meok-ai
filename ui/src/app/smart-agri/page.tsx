import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK Smart Agriculture — Farm Vision + Aquaponics + Ollama Vision",
  description:
    "MEOK Smart Agriculture: live Farm Vision (port :8888) wired to aquaponics sensors + Ollama vision (moondream) for plant ID, disease detection, livestock monitoring.",
  alternates: { canonical: "https://meok.ai/smart-agri" },
  openGraph: {
    title: "MEOK Smart Agriculture — Farm Vision + Sovereign OLM",
    description: "Live farm vision, sovereign OLM plant ID, care-aligned husbandry advice. 6.5-acre UK farm pilot.",
    type: "website",
    url: "https://meok.ai/smart-agri",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FEATURES = [
  {
    title: "Live Farm Vision (:8888)",
    desc: "HARVI PWA with 5 tabs (General, Livestock, Crops, Infrastructure, Wildlife). Live SOV3 connection. Camera + sensor overlays.",
    icon: "👁️",
  },
  {
    title: "Plant disease detection",
    desc: "moondream vision model identifies tomato blight, apple scab, powdery mildew, 47 common UK plant diseases. 1-2s per image, offline.",
    icon: "🌱",
  },
  {
    title: "Aquaponics sensor monitoring",
    desc: "pH, dissolved O2, ammonia, nitrate, water temp. Auto-alerts on out-of-range. Care-membrane prevents over-treatment.",
    icon: "🐟",
  },
  {
    title: "Livestock health scoring",
    desc: "Camera + behavioural baseline. Early detection of lameness, mastitis, off-feed. Alerts farmer + vet on consent chain.",
    icon: "🐄",
  },
  {
    title: "Sovereign OLM care advice",
    desc: "meok-sov3 (Qwen2 3.1B fine-tune) gives care-aligned husbandry advice. Trained on UK farm extension literature. 5.7 tok/s, runs locally.",
    icon: "🧠",
  },
  {
    title: "M2-sidekick mesh offload",
    desc: "Heavy vision models (qwen3:4b, 28 tok/s) run on M2 over LAN. Pi sends image, gets care advice. Mesh routing automatic.",
    icon: "🔗",
  },
];

const SENSORS = [
  { name: "Atlas Scientific pH kit", price: "£65", role: "Aquaponics water chemistry" },
  { name: "BME680 (×4)", price: "£80", role: "Temp, humidity, gas, pressure" },
  { name: "DS18B20 waterproof (×4)", price: "£20", role: "Water + soil temperature" },
  { name: "Capacitive soil moisture (×6)", price: "£30", role: "Plant watering needs" },
  { name: "PIR motion (×2)", price: "£15", role: "Wildlife + livestock presence" },
  { name: "Raspberry Pi Camera v3", price: "£35", role: "Vision model input" },
  { name: "Solar + battery pack", price: "£120", role: "Off-grid power" },
];

const STACK = [
  { name: "MEOK Farm Vision PWA", desc: "Live camera + sensor dashboard (port :8888)" },
  { name: "moondream (1B vision)", desc: "Plant + livestock disease ID, 1-2s per image" },
  { name: "MEOK OLM (meok-sov3 3.1B)", desc: "Care-aligned husbandry Q&A" },
  { name: "M2 mesh offload", desc: "qwen3:4b for complex queries, 28 tok/s" },
  { name: "SOV3 audit chain", desc: "Every sensor reading + advice signed" },
  { name: "Pi 5 + solar", desc: "£120 off-grid, runs forever" },
];

const FAQ = [
  {
    q: "What can the plant disease detection actually identify?",
    a: "The moondream vision model identifies tomato blight, apple scab, powdery mildew, and 47 common UK plant diseases. It runs in 1-2 seconds per image and works fully offline on the Pi — no cloud round-trip required.",
  },
  {
    q: "How much does the hardware cost?",
    a: "The sensor kit totals £365 (Atlas Scientific pH kit, BME680 ×4, DS18B20 waterproof ×4, capacitive soil moisture ×6, PIR motion ×2, Pi Camera v3, and solar + battery pack), excluding the Pi (£80) and enclosure. A full pilot setup is around £1,200 of hardware.",
  },
  {
    q: "What does the £29/mo cover?",
    a: "£29/mo covers sovereign OLM updates — the meok-sov3 care-aligned husbandry model and its training refreshes. Cloud cost is £0/mo because all inference runs locally on the Pi, with heavy vision models optionally offloaded to an M2 over the LAN.",
  },
  {
    q: "Does anything leave the farm or run in the cloud?",
    a: "No. The entire stack is sovereign and runs locally — Farm Vision PWA, moondream vision, the MEOK OLM, and the SOV3 audit chain. Every sensor reading and piece of advice is signed on-device, and the care-membrane prevents over-treatment.",
  },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" },
    { "@type": "ListItem", position: 2, name: "Smart Agriculture", item: "https://meok.ai/smart-agri" },
  ],
};

const SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "MEOK Smart Agriculture",
  serviceType: "Care-aligned farm vision and sovereign OLM husbandry advice",
  description: "Live Farm Vision wired to Ollama vision models and a sovereign OLM for plant ID, disease detection, aquaponics monitoring, and livestock health scoring.",
  provider: { "@type": "Organization", name: "MEOK AI", url: "https://meok.ai" },
  url: "https://meok.ai/smart-agri",
  areaServed: "GB",
  offers: { "@type": "Offer", price: "29", priceCurrency: "GBP", url: "https://meok.ai/smart-agri", description: "Sovereign OLM updates, billed monthly (hardware from £1,200)." },
};

export default function SmartAgriPage() {
  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "48px 24px 96px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSONLD) }} />
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <header style={{ marginBottom: 40, textAlign: "center" }}>
          <p style={{ color: GOLD, fontWeight: 900, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", margin: 0 }}>MEOK Smart Agriculture · Farm Vision + Sovereign OLM</p>
          <h1 style={{ fontSize: 48, fontWeight: 900, lineHeight: 1.05, margin: "16px 0" }}>The care-aligned farm</h1>
          <p style={{ fontSize: 17, lineHeight: 1.5, color: `${NAVY}cc`, maxWidth: 720, margin: "0 auto" }}>
            For smallholders, aquaponics growers, and care farms. Live Farm Vision wired to Ollama vision models + sovereign OLM. 6.5-acre UK farm pilot — proven on the MEOK farm.
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
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 20 }}>Sensors (£365 total)</h2>
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
                {SENSORS.map((s) => (
                  <tr key={s.name} style={{ borderBottom: `1px solid ${NAVY}0a` }}>
                    <td style={{ padding: 12 }}>{s.name}</td>
                    <td style={{ padding: 12, fontFamily: "monospace" }}>{s.price}</td>
                    <td style={{ padding: 12, color: `${NAVY}cc` }}>{s.role}</td>
                  </tr>
                ))}
                <tr>
                  <td style={{ padding: 12, fontWeight: 900 }}>Total hardware</td>
                  <td style={{ padding: 12, fontWeight: 900, fontFamily: "monospace", color: GOLD }}>£365</td>
                  <td style={{ padding: 12, color: `${NAVY}88`, fontSize: 12 }}>Excludes Pi (£80) + enclosure</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 20 }}>Software stack</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            {STACK.map((s) => (
              <div key={s.name} style={{ background: "white", borderRadius: 10, padding: 16, border: `1px solid ${NAVY}1a` }}>
                <h3 style={{ fontSize: 15, fontWeight: 900, margin: "0 0 6px" }}>{s.name}</h3>
                <p style={{ fontSize: 13, color: `${NAVY}cc`, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 48, background: NAVY, color: "white", borderRadius: 14, padding: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 16 }}>Live pilot: 6.5-acre MEOK farm, UK</h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginBottom: 20 }}>
            We're running this stack on the founder's farm. Aquaponics greenhouse, 200 chickens, 4 acres of soft fruit, 1.5 acres of agroforestry. The Farm Vision is live at <code style={{ background: "rgba(255,255,255,0.1)", padding: "2px 6px", borderRadius: 4 }}>meok.ai/farm-vision</code> during working hours.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, marginTop: 20 }}>
            {[
              { metric: "47", label: "Plant diseases detectable" },
              { metric: "12s", label: "Image-to-advice latency" },
              { metric: "£0/mo", label: "Cloud cost (all sovereign)" },
              { metric: "100%", label: "Care-membrane enforced" },
            ].map((s) => (
              <div key={s.label} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: 16, border: "1px solid rgba(255,255,255,0.1)" }}>
                <p style={{ fontSize: 32, fontWeight: 900, color: GOLD, margin: 0 }}>{s.metric}</p>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", margin: "4px 0 0" }}>{s.label}</p>
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

        <section style={{ background: "white", borderRadius: 14, padding: 40, textAlign: "center", border: `1px solid ${NAVY}1a` }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 12 }}>Want this on your farm?</h2>
          <p style={{ fontSize: 15, color: `${NAVY}cc`, marginBottom: 24, maxWidth: 600, margin: "0 auto 24px" }}>
            £1,200 hardware + £29/mo for sovereign OLM updates. Free 30-min consultation for UK smallholders and care farms.
          </p>
          <a
            href="mailto:nicholas@meok.ai?subject=MEOK%20Smart%20Agriculture%20pilot"
            style={{ display: "inline-block", background: NAVY, color: GOLD, padding: "16px 32px", borderRadius: 10, fontWeight: 900, textDecoration: "none", fontSize: 16 }}
          >
            Book a farm visit →
          </a>
        </section>
      </div>
    </main>
  );
}
