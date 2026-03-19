"use client";

import { useEffect, useState } from "react";
import { callTool } from "@/lib/api";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Moon } from "lucide-react";

interface DreamTargets {
  targets?: Array<{
    theme: string;
    priority: number;
    source: string;
  }>;
}

export default function DreamsPage() {
  const [targets, setTargets] = useState<DreamTargets["targets"]>([]);
  const [dreaming, setDreaming] = useState(false);
  const [dreamResult, setDreamResult] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    callTool<DreamTargets>("get_dream_targets")
      .then((r) => setTargets(r.targets || []))
      .catch(console.error);
  }, []);

  const triggerDream = async () => {
    setDreaming(true);
    try {
      const result = await callTool<Record<string, unknown>>("enter_dream_state", { duration: 30 });
      setDreamResult(result);
    } catch (e) {
      console.error(e);
    } finally {
      setDreaming(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Dreams</h2>
          <p className="text-sm text-white/40 mt-1">NREM consolidation + REM creative recombination</p>
        </div>
        <Button onClick={triggerDream} disabled={dreaming} variant="secondary">
          <Moon className="w-4 h-4 mr-2" />
          {dreaming ? "Dreaming..." : "Enter Dream State"}
        </Button>
      </div>

      {dreamResult && (
        <Card className="border-purple-500/20">
          <CardHeader>
            <CardTitle>Latest Dream</CardTitle>
          </CardHeader>
          <pre className="text-xs text-white/60 overflow-auto max-h-64">
            {JSON.stringify(dreamResult, null, 2)}
          </pre>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Dream Targets</CardTitle>
        </CardHeader>
        {targets && targets.length > 0 ? (
          <div className="space-y-3">
            {targets.map((t, i) => (
              <div key={i} className="p-3 rounded-lg bg-white/5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/80">{t.theme}</p>
                  <p className="text-xs text-white/30">{t.source}</p>
                </div>
                <Badge variant="purple">Priority {t.priority}</Badge>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white/30 text-sm">No dream targets queued</p>
        )}
      </Card>
    </div>
  );
}
