'use client';

import { useState } from 'react';
import {
  getNodeById,
  getHiveById,
  getFiresForDomain,
  INDUSTRY_HIVES,
  REGIONAL_HIVES,
  PROTOCOL_HIVES,
  TOOL_NODES,
  DOMAIN_NODES,
  GITHUB_STATS,
  KING_HIVE,
} from '@/lib/sov3-topology';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Cpu, Globe, Shield, GitBranch, Flame, ScanEye } from 'lucide-react';

export function GridPanel({
  selected,
  onClear,
}: {
  selected?: string;
  onClear: () => void;
}) {
  if (!selected) {
    return (
      <div className="h-full overflow-y-auto border-l border-slate-800 bg-slate-950 p-4 text-slate-300">
        <h2 className="mb-4 text-lg font-bold text-white">SOV3 Empire</h2>

        <div className="mb-6 space-y-3">
          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3">
            <div className="flex items-center gap-2 text-sm font-medium text-white">
              <Cpu className="h-4 w-4 text-amber-500" />
              {KING_HIVE.name}
            </div>
            <p className="mt-1 text-xs text-slate-500">{KING_HIVE.endpoint}</p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3">
            <div className="flex items-center gap-2 text-sm font-medium text-white">
              <Globe className="h-4 w-4 text-emerald-500" />
              {DOMAIN_NODES.length} domains
            </div>
            <p className="mt-1 text-xs text-slate-500">
              {DOMAIN_NODES.filter((d) => d.status === 'live').length} live ·{' '}
              {DOMAIN_NODES.filter((d) => d.status === 'down').length} down
            </p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3">
            <div className="flex items-center gap-2 text-sm font-medium text-white">
              <Shield className="h-4 w-4 text-blue-500" />
              {INDUSTRY_HIVES.length + REGIONAL_HIVES.length + PROTOCOL_HIVES.length} hives
            </div>
            <p className="mt-1 text-xs text-slate-500">
              {INDUSTRY_HIVES.length} industry · {REGIONAL_HIVES.length} regional · {PROTOCOL_HIVES.length} protocol
            </p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3">
            <div className="flex items-center gap-2 text-sm font-medium text-white">
              <GitBranch className="h-4 w-4 text-purple-500" />
              {GITHUB_STATS.totalRepos} GitHub repos
            </div>
            <p className="mt-1 text-xs text-slate-500">
              {GITHUB_STATS.openPRs} open PRs · {GITHUB_STATS.openIssues} issues
            </p>
          </div>
        </div>

        <h3 className="mb-2 text-sm font-semibold text-white">Active Workers</h3>
        <div className="space-y-2">
          {TOOL_NODES.map((tool) => (
            <div
              key={tool.id}
              className="flex items-center justify-between rounded-md bg-slate-900/50 px-3 py-2 text-xs"
            >
              <span className="font-medium text-slate-200">{tool.name}</span>
              <Badge
                variant={tool.status === 'running' ? 'green' : 'default'}
                className="text-[10px]"
              >
                {tool.status}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const node = getNodeById(selected);
  const hive = getHiveById(selected);

  if (node && 'domain' in node) {
    return (
      <div className="h-full overflow-y-auto border-l border-slate-800 bg-slate-950 p-4 text-slate-300">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">{node.name}</h2>
          <Button variant="ghost" size="sm" onClick={onClear}>
            Close
          </Button>
        </div>

        <p className="mb-4 text-sm text-slate-400">{node.domain}</p>

        <div className="mb-4">
          <div className="mb-1 flex justify-between text-xs">
            <span>Readiness</span>
            <span>{node.readiness}%</span>
          </div>
          <Progress value={node.readiness} className="h-2" />
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between border-b border-slate-800 pb-2">
            <span className="text-slate-500">Category</span>
            <span className="text-slate-200">{node.category}</span>
          </div>
          <div className="flex justify-between border-b border-slate-800 pb-2">
            <span className="text-slate-500">Industry Hive</span>
            <span className="text-slate-200">{node.industryHive}</span>
          </div>
          <div className="flex justify-between border-b border-slate-800 pb-2">
            <span className="text-slate-500">Status</span>
            <Badge
              variant={
                node.status === 'live' ? 'green' : node.status === 'down' ? 'red' : 'default'
              }
            >
              {node.status}
            </Badge>
          </div>
          <div className="flex justify-between border-b border-slate-800 pb-2">
            <span className="text-slate-500">Valuation</span>
            <span className="text-slate-200">{node.valuation}</span>
          </div>
          {node.githubRepo && (
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-500">GitHub</span>
              <a
                href={`https://github.com/${node.githubRepo}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-blue-400 hover:underline"
              >
                {node.githubRepo} <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          )}
          {node.mcpEndpoint && (
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-500">MCP Endpoint</span>
              <span className="font-mono text-xs text-slate-200">{node.mcpEndpoint}</span>
            </div>
          )}
        </div>

        <div className="mt-6">
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Five Fires
          </h3>
          <div className="flex flex-wrap gap-2">
            {getFiresForDomain(node.id).length === 0 && (
              <span className="text-xs text-slate-600">No fire mapping yet</span>
            )}
            {getFiresForDomain(node.id).map((fire) => (
              <Badge
                key={fire.id}
                variant="default"
                className="text-[10px]"
                style={{ borderColor: fire.color, color: fire.color, backgroundColor: `${fire.color}15` }}
              >
                <Flame className="mr-1 h-3 w-3" />
                {fire.name}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-slate-800 bg-slate-900/50 p-3">
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Kimi WebBridge
          </h3>
          <WebBridgeVerify url={`https://${node.domain}`} />
        </div>
      </div>
    );
  }

  if (node && 'role' in node) {
    return (
      <div className="h-full overflow-y-auto border-l border-slate-800 bg-slate-950 p-4 text-slate-300">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">{node.name}</h2>
          <Button variant="ghost" size="sm" onClick={onClear}>
            Close
          </Button>
        </div>
        <p className="mb-4 text-sm text-slate-400">{node.role}</p>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between border-b border-slate-800 pb-2">
            <span className="text-slate-500">Status</span>
            <Badge variant={node.status === 'running' ? 'green' : 'default'}>
              {node.status}
            </Badge>
          </div>
          {node.port && (
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-500">Port</span>
              <span className="font-mono text-slate-200">{node.port}</span>
            </div>
          )}
          {node.models && (
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-500">Models</span>
              <span className="text-right text-slate-200">{node.models.join(', ')}</span>
            </div>
          )}
          {node.repo && (
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-500">Repo</span>
              <a
                href={`https://github.com/${node.repo}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-blue-400 hover:underline"
              >
                {node.repo} <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          )}
          {node.configPath && (
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-500">Config</span>
              <span className="font-mono text-xs text-slate-200">{node.configPath}</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (hive) {
    const members = DOMAIN_NODES.filter((d) => hive.domains.includes(d.domain));
    return (
      <div className="h-full overflow-y-auto border-l border-slate-800 bg-slate-950 p-4 text-slate-300">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">{hive.name}</h2>
          <Button variant="ghost" size="sm" onClick={onClear}>
            Close
          </Button>
        </div>
        <p className="mb-4 text-xs uppercase tracking-wide text-slate-500">{hive.type} hive</p>
        <div className="space-y-2">
          {members.map((d) => (
            <div
              key={d.id}
              className="flex items-center justify-between rounded-md bg-slate-900/50 px-3 py-2 text-xs"
            >
              <span className="text-slate-200">{d.name}</span>
              <Badge variant={d.status === 'live' ? 'green' : 'default'} className="text-[10px]">
                {d.status}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full items-center justify-center border-l border-slate-800 bg-slate-950 p-4 text-slate-500">
      Unknown selection
    </div>
  );
}

function WebBridgeVerify({ url }: { url: string }) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ url?: string; title?: string; ok?: boolean; error?: string } | null>(null);

  async function verify() {
    setLoading(true);
    setResult(null);
    try {
      const navigate = await fetch('/api/webbridge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'navigate', args: { url, newTab: true }, session: 'meok-grid' }),
      });
      if (!navigate.ok) throw new Error('WebBridge navigate failed');

      const snapshot = await fetch('/api/webbridge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'snapshot', args: {}, session: 'meok-grid' }),
      });
      const data = await snapshot.json();
      setResult({ url: data.url, title: data.title, ok: true });
    } catch (err) {
      setResult({ ok: false, error: err instanceof Error ? err.message : 'Unknown error' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-2">
      <Button variant="outline" size="sm" className="h-7 text-[10px]" onClick={verify} disabled={loading}>
        <ScanEye className="mr-1 h-3 w-3" />
        {loading ? 'Scanning…' : 'Verify in real browser'}
      </Button>
      {result?.ok && (
        <div className="text-xs text-emerald-400">
          <div className="font-medium">Live snapshot OK</div>
          <div className="truncate text-slate-500">{result.title || result.url}</div>
        </div>
      )}
      {result?.error && <div className="text-xs text-red-400">{result.error}</div>}
    </div>
  );
}
