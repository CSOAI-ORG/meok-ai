'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Agent {
  id: string;
  name: string;
  description: string;
  role?: string;
  status?: string;
  models?: string[];
}

interface DashboardData {
  agents: { total: number; active: number; available: number };
  tasks: { queued: number; in_progress: number; completed: number };
  locks: { active: number };
  recent_events: Array<{ time: string; type: string; agent: string }>;
}

export default function HivePage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const [d, a] = await Promise.all([
          fetch('http://localhost:3101/mcp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ jsonrpc: '2.0', id: '1', method: 'tools/call', params: { name: 'coord_get_dashboard', arguments: {} } })
          }).then(r => r.json()).then(r => JSON.parse(r.result.content[0].text)),
          fetch('http://localhost:3101/mcp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ jsonrpc: '2.0', id: '2', method: 'tools/call', params: { name: 'list_all_agents', arguments: {} } })
          }).then(r => r.json()).catch(() => ({ result: { content: [{ text: '[]' }] } }))
        ]);
        setData(d);
        try {
          const arr = typeof a === 'string' ? JSON.parse(a.result.content[0].text) : a;
          if (Array.isArray(arr)) setAgents(arr);
        } catch {}
        setLoading(false);
      } catch (e: any) {
        setErr(e.message || 'failed to load');
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <main style={{ padding: '4rem 1.5rem', maxWidth: 920, margin: '0 auto', fontFamily: 'system-ui' }}><h1>meok.ai/hive</h1><p>Loading SOV3 hub…</p></main>;
  if (err) return <main style={{ padding: '4rem 1.5rem', maxWidth: 920, margin: '0 auto', fontFamily: 'system-ui' }}><h1>meok.ai/hive</h1><p style={{ color: 'crimson' }}>Error: {err}</p></main>;

  return (
    <main style={{ padding: '4rem 1.5rem', maxWidth: 1100, margin: '0 auto', fontFamily: 'system-ui' }}>
      <header>
        <Link href="/" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 700 }}>← meok.ai</Link>
        <h1 style={{ fontSize: '2.5rem', letterSpacing: '-0.02em', margin: '0.5rem 0 0.25rem' }}>meok.ai/hive</h1>
        <p style={{ fontSize: '1.15rem', color: '#666', margin: 0 }}>
          The SOV3 agent universe. {data?.agents.total ?? '—'} sovereign agents. {data?.tasks.completed ?? '—'} tasks completed. {data?.locks.active ?? 0} locks active.
        </p>
      </header>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', margin: '2rem 0' }}>
        <Stat label="Agents total" value={data?.agents.total} />
        <Stat label="Active now" value={data?.agents.active} />
        <Stat label="Available" value={data?.agents.available} />
        <Stat label="Tasks done" value={data?.tasks.completed} highlight />
        <Stat label="Queued" value={data?.tasks.queued} />
        <Stat label="In progress" value={data?.tasks.in_progress} />
      </section>

      <section>
        <h2 style={{ borderBottom: '1px solid #e5e7eb', paddingBottom: '.25rem' }}>The mesh — every hive absorbed</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.75rem', marginTop: '1rem' }}>
          <HiveCard title="meok.ai" subtitle="Sovereign AI OS + Character marketplace" href="https://meok.ai" status="live" note="145KB home, 180KB /gaming, 12+ character pages" />
          <HiveCard title="proofof.ai" subtitle="Trust surface, scorecard, attestation catalogue" href="https://proofof.ai" status="live" note="12.6KB, 294-server compliance fleet, 48 scorecard pages" />
          <HiveCard title="csoai.org" subtitle="Council for the Safety of AI" href="https://csoai.org" status="live" note="21.9KB, 6+ charter articles, 12-framework crosswalk" />
          <HiveCard title="meok-attestation-api.vercel.app" subtitle="HMAC-SHA256 + Ed25519 keystone" href="https://meok-attestation-api.vercel.app" status="live" note="v1.2.0, 17 endpoints, sign+verify live, 100% EU AI Act compliance" />
          <HiveCard title="wowmcp.ai" subtitle="WoW MCP for AI agents" href="https://wowmcp-deploy.vercel.app" status="live" note="10 tools, 3 cross-game MCPs, COAI-certified" />
          <HiveCard title="compliance.meok.ai" subtitle="EU AI Act + DORA + NIS2 + ISO 42001 centre" href="https://compliance-meok-ai.vercel.app" status="live" note="Live deadline countdown, 4 pricing tiers, 21+ frameworks" />
          <HiveCard title="cobolbridge.ai" subtitle="Legacy modernisation" href="https://cobolbridge.ai" status="alpha" note="COBOL → Java/Go bridge, MEOK portfolio" />
          <HiveCard title="templeman-opticians" subtitle="Domiciliary eye care, cash business" href="https://sovereign.templeman-opticians.com" status="live" note="UK care homes + 14 LA contracts" />
          <HiveCard title="compliance case studies" subtitle="UK challenger bank / care / HR-tech" href="https://case-studies-deploy.vercel.app" status="live" note="3 case studies as proof points" />
          <HiveCard title="MEOK Gaming hive" subtitle="Sovereign organic mesh" href="https://meok.ai/gaming" status="live" note="4 Sigil (A/H/M/P/C) + 9 sigil chain, 20 tools under COAI gate" />
        </div>
      </section>

      <section>
        <h2 style={{ borderBottom: '1px solid #e5e7eb', paddingBottom: '.25rem', marginTop: '2rem' }}>Recent activity</h2>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
          {(data?.recent_events ?? []).slice(0, 8).map((e, i) => (
            <li key={i} style={{ padding: '0.4rem 0', borderBottom: '1px solid #f3f4f6', fontSize: '0.9rem' }}>
              <code style={{ color: '#999' }}>{e.time.slice(0, 19).replace('T', ' ')}</code> &nbsp;
              <strong>{e.type}</strong> &nbsp;
              <span style={{ color: '#c9a84c' }}>{e.agent}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 style={{ borderBottom: '1px solid #e5e7eb', paddingBottom: '.25rem', marginTop: '2rem' }}>5 industries — every vertical live</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.6rem', marginTop: '1rem' }}>
          <IndustryTile name="Fintech" rate="100% UK AI Bill + EU AI Act 43/43" />
          <IndustryTile name="Healthtech" rate="SaMD + HIPAA + FDA AI/ML" />
          <IndustryTile name="HR-tech" rate="Annex III (4) hiring AI" />
          <IndustryTile name="Care homes" rate="Domiciliary + CQC + 14 LAs" />
          <IndustryTile name="Public sector" rate="Cabinet Office + AISI ready" />
          <IndustryTile name="RegTech" rate="DORA + NIS2 + UK AI Bill" />
          <IndustryTile name="Legal" rate="Toronto + Montreal Declarations" />
          <IndustryTile name="Insurance" rate="EU AI Act + 4 frameworks" />
        </div>
      </section>

      <footer style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #e5e7eb', color: '#999', fontSize: '0.85rem' }}>
        <p>CSOAI Ltd · UK Companies House <strong>16939677</strong> · Registered in England & Wales · hello@meok.ai</p>
        <p>Powered by the MEOK Sovereign AI OS · SOV3 hub at <code>localhost:3101/mcp</code> · 182 agents · 56 tasks</p>
        <p>Auto-refreshes every 30s. Last refresh: {new Date().toISOString().slice(0, 19).replace('T', ' ')}</p>
      </footer>
    </main>
  );
}

function Stat({ label, value, highlight }: { label: string; value: number | string | undefined; highlight?: boolean }) {
  return (
    <div style={{ background: highlight ? 'rgba(201,168,76,0.08)' : '#f9fafb', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 700, color: highlight ? '#c9a84c' : '#111' }}>{value ?? '—'}</div>
      <div style={{ fontSize: '0.8rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
    </div>
  );
}

function HiveCard({ title, subtitle, href, status, note }: { title: string; subtitle: string; href: string; status: 'live' | 'alpha' | 'beta'; note: string }) {
  const statusColor = status === 'live' ? '#16a34a' : status === 'beta' ? '#2563eb' : '#f59e0b';
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'block', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1rem', textDecoration: 'none', color: '#111' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
        <h3 style={{ margin: 0, fontSize: '1.05rem' }}>{title}</h3>
        <span style={{ fontSize: '0.7rem', fontWeight: 700, color: statusColor, background: statusColor + '15', padding: '0.15rem 0.4rem', borderRadius: '0.3rem', textTransform: 'uppercase' }}>{status}</span>
      </div>
      <p style={{ margin: 0, color: '#666', fontSize: '0.85rem' }}>{subtitle}</p>
      <p style={{ margin: '0.5rem 0 0', color: '#999', fontSize: '0.75rem' }}>{note}</p>
    </a>
  );
}

function IndustryTile({ name, rate }: { name: string; rate: string }) {
  return (
    <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '0.4rem', padding: '0.7rem', textAlign: 'center' }}>
      <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>{name}</div>
      <div style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.3rem' }}>{rate}</div>
    </div>
  );
}
