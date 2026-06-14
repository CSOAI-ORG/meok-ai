'use client';

import dynamic from 'next/dynamic';
import { useGridState } from '@/hooks/useGridState';
import { GridPanel } from '@/components/grid/GridPanel';
import { StatusTicker } from '@/components/grid/StatusTicker';
import { Button } from '@/components/ui/button';
import { Layers, Globe } from 'lucide-react';

const MEOKGridMap = dynamic(
  () => import('@/components/grid/MEOKGridMap').then((mod) => mod.MEOKGridMap),
  { ssr: false, loading: () => <div className="h-full w-full bg-slate-950" /> }
);

const LAYERS = [
  { id: 'domains', label: 'Domains' },
  { id: 'hives', label: 'Hives' },
  { id: 'tools', label: 'Workers' },
  { id: 'links', label: 'MCP Links' },
  { id: 'layer0', label: 'Layer 0 Audit' },
  { id: 'farm', label: 'Farm' },
  { id: 'fires', label: 'Five Fires' },
];

export default function GridPage() {
  const { state, updateState, toggleLayer, mounted } = useGridState();
  const center: [number, number] = [state.lat, state.lng];

  if (!mounted) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-slate-950 text-slate-400">
        Loading SOV3 Grid...
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full flex-col bg-slate-950">
      {/* Header */}
      <div className="flex h-14 items-center justify-between border-b border-slate-800 bg-slate-950 px-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
            <Globe className="h-4 w-4" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-white">MEOK Grid</h1>
            <p className="text-[10px] text-slate-500">SOV3 Empire Topology</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {LAYERS.map((layer) => {
            const active = state.layers.includes(layer.id);
            return (
              <Button
                key={layer.id}
                variant={active ? 'primary' : 'outline'}
                size="sm"
                onClick={() => toggleLayer(layer.id)}
                className="h-7 text-[10px]"
              >
                <Layers className="mr-1 h-3 w-3" />
                {layer.label}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Main */}
      <div className="flex flex-1 overflow-hidden">
        <div className="relative flex-1">
          <MEOKGridMap
            layers={state.layers}
            selected={state.selected}
            onSelect={(id) => updateState({ selected: id })}
            center={center}
            zoom={state.zoom}
          />

          {/* Floating legend */}
          <div className="absolute bottom-4 left-4 rounded-lg border border-slate-800 bg-slate-950/90 p-3 text-[10px] text-slate-400 backdrop-blur">
            <div className="mb-1 font-medium text-white">Topology</div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500" /> King Hive
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> Live domain
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500" /> Down/broken
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-slate-500" /> Idea/dev
            </div>
          </div>
        </div>

        <div className="w-80">
          <GridPanel selected={state.selected} onClear={() => updateState({ selected: undefined })} />
        </div>
      </div>

      <StatusTicker />
    </div>
  );
}
