"use client";

import Link from "next/link";
import { Surface } from "@/components/design-system/surface";
import type { SovTownHive, SovTownCharacter, SovTownStatus } from "@/hooks/useSovTown";

interface SovTownPanelProps {
  status: SovTownStatus | null;
  hives: SovTownHive[];
  characters: SovTownCharacter[];
  selectedHive?: string;
  onClear: () => void;
}

export default function SovTownPanel({ status, hives, characters, selectedHive, onClear }: SovTownPanelProps) {
  const selected = hives.find((h) => h.key === selectedHive);
  const hiveCharacters = characters.filter((c) => c.hive === selectedHive).slice(0, 20);

  return (
    <div className="flex h-full flex-col gap-3 overflow-y-auto border-l border-slate-800 bg-slate-950 p-4">
      <div>
        <h2 className="text-sm font-bold text-white">Sovereign Town</h2>
        <p className="text-[10px] text-slate-500">Live simulation layer</p>
      </div>

      {status && (
        <Surface variant="elevated" className="grid grid-cols-2 gap-2 p-3">
          <Stat label="Hives" value={status.hives} />
          <Stat label="Passports" value={status.passports} />
          <Stat label="Episodes" value={formatBig(status.cum_episodes)} />
          <Stat label="Models" value={status.models_trained} />
          <Stat label="Governed" value={formatBig(status.governed_crimes)} />
          <Stat label="Ungoverned" value={formatBig(status.ungoverned_crimes)} />
        </Surface>
      )}

      {selected ? (
        <Surface variant="elevated" className="p-3">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-xs font-bold text-white">{selected.name}</h3>
            <button type="button" onClick={onClear} className="text-[10px] text-slate-400 hover:text-white">
              Clear
            </button>
          </div>
          <p className="text-[10px] text-slate-400">{selected.domain}</p>
          <div className="mt-2 grid grid-cols-2 gap-2 text-[10px]">
            <div className="rounded bg-white/[0.03] p-2">
              <div className="text-slate-500">Episodes</div>
              <div className="font-semibold text-white">{selected.episodes ?? "—"}</div>
            </div>
            <div className="rounded bg-white/[0.03] p-2">
              <div className="text-slate-500">Agents</div>
              <div className="font-semibold text-white">{selected.agents ?? "—"}</div>
            </div>
          </div>

          {hiveCharacters.length > 0 && (
            <div className="mt-3">
              <div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">Characters</div>
              <div className="max-h-40 space-y-1 overflow-y-auto">
                {hiveCharacters.map((c) => (
                  <div key={c.id} className="rounded bg-white/[0.03] px-2 py-1 text-[10px]">
                    <span className="font-medium text-white">{c.name}</span>
                    {c.archetype && <span className="ml-1 text-slate-500">— {c.archetype}</span>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </Surface>
      ) : (
        <Surface variant="elevated" className="p-3">
          <div className="text-[10px] text-slate-400">Click a hive on the map to inspect its agents and episodes.</div>
        </Surface>
      )}

      <Surface variant="elevated" className="p-3">
        <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">Live Layers</div>
        <div className="space-y-1 text-[10px] text-slate-300">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-500" /> Hives
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-teal-500" /> Characters
          </div>
        </div>
      </Surface>

      <Link
        href="/civilizations"
        className="rounded-lg border border-[#c9a84c]/30 bg-[#c9a84c]/10 px-3 py-2 text-center text-xs font-bold text-[#c9a84c] hover:bg-[#c9a84c]/20"
      >
        Enter Aethelgard
      </Link>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="rounded bg-white/[0.03] p-2 text-center">
      <div className="text-lg font-semibold text-white">{value}</div>
      <div className="text-[9px] uppercase tracking-wider text-slate-500">{label}</div>
    </div>
  );
}

function formatBig(n: number): string {
  if (n >= 1_000_000_000) return (n / 1_000_000_000).toFixed(1) + "B";
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1) + "K";
  return String(n);
}
