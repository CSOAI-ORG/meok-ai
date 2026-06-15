import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MCPS, type RegistryMCP } from "../../anthropic-registry/data";

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const GREEN = "#7bc47f";
const BG = "#f5f0e8";

type Params = { slug: string };

const CATEGORY_LABELS: Record<RegistryMCP["category"], string> = {
  governance: "Governance & Compliance",
  a2a: "A2A — Agent-to-Agent",
  cybersec: "Cybersecurity",
  trade: "Trade verticals",
  industry: "Industry verticals",
  platform: "Platform & Care",
  devtool: "Developer tooling",
};

const CATEGORY_SUBSTRATE: Partial<Record<RegistryMCP["category"], { name: string; href: string; price: string }>> = {
  governance: { name: "Governance Substrate", href: "/governance", price: "£499/mo" },
  a2a: { name: "A2A Substrate", href: "/a2a", price: "£999/mo" },
  cybersec: { name: "Cybersec Substrate", href: "/cybersec", price: "£199/mo" },
};

export async function generateStaticParams() {
  return MCPS.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = MCPS.find((x) => x.slug === slug);
  if (!m) return { title: "MCP not found · MEOK Docs" };
  const title = `${m.title} · MEOK MCP Docs`;
  return {
    title,
    description: m.description,
    alternates: { canonical: `https://meok.ai/docs/${m.slug}` },
    openGraph: {
      title,
      description: m.description,
      type: "article",
      url: `https://meok.ai/docs/${m.slug}`,
      images: [`https://meok.ai/api/og?title=${encodeURIComponent(m.title)}&desc=${encodeURIComponent(m.description.slice(0, 120))}`],
    },
  };
}

export default async function McpDocPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const m = MCPS.find((x) => x.slug === slug);
  if (!m) notFound();

  const sub = CATEGORY_SUBSTRATE[m.category];
  const sisters = MCPS.filter((x) => x.category === m.category && x.slug !== m.slug).slice(0, 6);

  const canonical = `https://meok.ai/docs/${m.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: m.title,
    description: m.description,
    url: canonical,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    articleSection: CATEGORY_LABELS[m.category],
    author: { "@type": "Organization", name: "MEOK AI Labs" },
    publisher: { "@type": "Organization", name: "MEOK AI Labs" },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai" },
      { "@type": "ListItem", position: 2, name: "Docs", item: "https://meok.ai/docs" },
      { "@type": "ListItem", position: 3, name: m.title, item: canonical },
    ],
  };

  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "4rem 1.5rem" }}>
        <Link
          href="/docs"
          style={{
            display: "inline-block",
            fontSize: 12,
            color: `${NAVY}77`,
            textDecoration: "none",
            marginBottom: 24,
          }}
        >
          ← All MCPs
        </Link>

        <div style={{ marginBottom: 12 }}>
          <span
            style={{
              display: "inline-block",
              padding: "4px 10px",
              borderRadius: 999,
              background: "rgba(201,168,76,0.15)",
              color: GOLD,
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {CATEGORY_LABELS[m.category]}
          </span>
          <span style={{ marginLeft: 10, fontSize: 11, color: `${NAVY}77`, fontFamily: "monospace" }}>
            v{m.version}
          </span>
        </div>

        <h1
          style={{
            fontSize: "clamp(2rem, 4.6vw, 3.2rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: 18,
          }}
        >
          {m.title}
        </h1>
        <p
          style={{
            fontSize: "1.05rem",
            color: `${NAVY}b3`,
            maxWidth: 720,
            lineHeight: 1.65,
            marginBottom: 32,
          }}
        >
          {m.description}
        </p>

        {/* Install */}
        <h2 style={{ fontSize: "1.3rem", fontWeight: 900, marginBottom: 12 }}>Install</h2>
        <div
          style={{
            background: NAVY,
            color: "white",
            padding: 20,
            borderRadius: 12,
            marginBottom: 16,
            fontFamily: "monospace",
            fontSize: 13,
            lineHeight: 1.7,
          }}
        >
          <div style={{ color: GOLD, fontWeight: 700 }}># with uv (fast)</div>
          <div>uvx {m.slug}</div>
          <br />
          <div style={{ color: GOLD, fontWeight: 700 }}># or pip</div>
          <div>pip install {m.slug}</div>
        </div>

        <h3 style={{ fontSize: 14, fontWeight: 900, marginBottom: 8 }}>Claude Code</h3>
        <div
          style={{
            background: NAVY,
            color: "white",
            padding: 20,
            borderRadius: 12,
            marginBottom: 32,
            fontFamily: "monospace",
            fontSize: 13,
            lineHeight: 1.6,
          }}
        >
          <pre style={{ margin: 0, whiteSpace: "pre-wrap", color: "#e2e8f0" }}>{`{
  "mcpServers": {
    "${m.slug.replace(/-mcp$/, "")}": {
      "command": "uvx",
      "args": ["${m.slug}"]
    }
  }
}`}</pre>
        </div>

        {/* Substrate upsell */}
        {sub && (
          <Link
            href={sub.href}
            style={{
              display: "block",
              padding: "1.2rem 1.4rem",
              background: NAVY,
              color: "white",
              borderRadius: 12,
              textDecoration: "none",
              marginBottom: 36,
            }}
          >
            <div style={{ fontSize: 11, color: GREEN, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>
              Part of the {sub.name}
            </div>
            <div style={{ fontSize: 15, color: GOLD, fontWeight: 800 }}>
              Bundle for {sub.price} →
            </div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", marginTop: 4 }}>
              Self-host MIT for free · or get the managed substrate with one signed evidence chain across all MCPs in this category.
            </div>
          </Link>
        )}

        {/* Sources */}
        <h2 style={{ fontSize: "1.3rem", fontWeight: 900, marginBottom: 12 }}>Sources</h2>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14, lineHeight: 1.9, marginBottom: 36 }}>
          <li>
            <strong>GitHub:</strong>{" "}
            <a
              href={`https://github.com/CSOAI-ORG/${m.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: GOLD }}
            >
              github.com/CSOAI-ORG/{m.slug}
            </a>
          </li>
          <li>
            <strong>PyPI:</strong>{" "}
            <a
              href={`https://pypi.org/project/${m.slug}/`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: GOLD }}
            >
              pypi.org/project/{m.slug}
            </a>
          </li>
          <li>
            <strong>MCP Registry:</strong>{" "}
            <code style={{ background: "rgba(0,0,0,0.06)", padding: "2px 6px", borderRadius: 4, fontSize: 12 }}>
              io.github.CSOAI-ORG/{m.slug}
            </code>
          </li>
          <li>
            <strong>Licence:</strong> MIT (CSOAI LTD · UK Companies House 16939677)
          </li>
        </ul>

        {/* Sister MCPs */}
        {sisters.length > 0 && (
          <>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 900, marginBottom: 12 }}>
              Sister MCPs in {CATEGORY_LABELS[m.category]}
            </h2>
            <div style={{ display: "grid", gap: 8, marginBottom: 40 }}>
              {sisters.map((s) => (
                <Link
                  key={s.slug}
                  href={`/docs/${s.slug}`}
                  style={{
                    display: "block",
                    background: "white",
                    padding: "0.8rem 1.1rem",
                    borderRadius: 10,
                    border: `1px solid ${NAVY}1a`,
                    textDecoration: "none",
                    color: NAVY,
                    fontSize: 13,
                  }}
                >
                  <strong style={{ color: GOLD }}>{s.title}</strong>
                  <span style={{ color: `${NAVY}99` }}> — {s.description.slice(0, 110)}
                    {s.description.length > 110 ? "…" : ""}
                  </span>
                </Link>
              ))}
            </div>
          </>
        )}

        <p
          style={{
            marginTop: 40,
            color: `${NAVY}66`,
            fontSize: 12,
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong>
        </p>
      </div>
    </main>
  );
}
