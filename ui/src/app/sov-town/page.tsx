"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Globe, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSovTownHives, useSovTownCharacters, useSovTownStatus } from "@/hooks/useSovTown";
import SovTownPanel from "@/components/sov-town/SovTownPanel";

const SovTownMap = dynamic(() => import("@/components/sov-town/SovTownMap"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-slate-950" />,
});

export default function SovTownPage() {
  const { status } = useSovTownStatus();
  const { hives } = useSovTownHives();
  const { characters } = useSovTownCharacters();
  const [selectedHive, setSelectedHive] = useState<string | undefined>();

  return (
    <div className="flex h-screen w-full flex-col bg-slate-950 text-white">
      {/* Header */}
      <div className="flex h-14 items-center justify-between border-b border-slate-800 bg-slate-950 px-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
            <Globe className="h-4 w-4" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-white">Sovereign Town</h1>
            <p className="text-[10px] text-slate-500">OpenGridWorks-style world view</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="h-7 text-[10px]"
            onClick={() => setSelectedHive(undefined)}
          >
            <Layers className="mr-1 h-3 w-3" />
            Reset view
          </Button>
        </div>
      </div>

      {/* Main */}
      <div className="flex flex-1 overflow-hidden">
        <div className="relative flex-1">
          <SovTownMap
            hives={hives}
            characters={characters}
            selectedHive={selectedHive}
            onSelectHive={setSelectedHive}
          />

          <div className="absolute bottom-4 left-4 rounded-lg border border-slate-800 bg-slate-950/90 p-3 text-[10px] text-slate-400 backdrop-blur">
            <div className="mb-1 font-medium text-white">Topology</div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500" /> Hive
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-500" /> Character
            </div>
          </div>
        </div>

        <div className="w-80 shrink-0">
          <SovTownPanel
            status={status}
            hives={hives}
            characters={characters}
            selectedHive={selectedHive}
            onClear={() => setSelectedHive(undefined)}
          />
        </div>
      </div>
    </div>
  );
}
