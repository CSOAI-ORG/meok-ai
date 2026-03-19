"use client";

import { useEffect, useState } from "react";
import { callTool } from "@/lib/api";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export default function CreativityPage() {
  const [archiveStats, setArchiveStats] = useState<Record<string, unknown> | null>(null);
  const [cycling, setCycling] = useState(false);
  const [cycleResult, setCycleResult] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    callTool<Record<string, unknown>>("get_qd_archive_stats").then(setArchiveStats).catch(console.error);
  }, []);

  const triggerCycle = async () => {
    setCycling(true);
    try {
      const result = await callTool<Record<string, unknown>>("trigger_creativity_cycle");
      setCycleResult(result);
    } catch (e) {
      console.error(e);
    } finally {
      setCycling(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Creativity</h2>
          <p className="text-sm text-white/40 mt-1">Quality-diversity archive, novelty search, bisociations</p>
        </div>
        <Button onClick={triggerCycle} disabled={cycling} variant="secondary">
          <Sparkles className="w-4 h-4 mr-2" />
          {cycling ? "Running..." : "Trigger Creativity Cycle"}
        </Button>
      </div>

      {cycleResult && (
        <Card className="border-yellow-500/20">
          <CardHeader>
            <CardTitle>Cycle Result</CardTitle>
          </CardHeader>
          <pre className="text-xs text-white/60 overflow-auto max-h-64">
            {JSON.stringify(cycleResult, null, 2)}
          </pre>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>QD Archive</CardTitle>
        </CardHeader>
        {archiveStats ? (
          <div className="grid grid-cols-2 gap-4 text-sm">
            {Object.entries(archiveStats).map(([key, val]) => (
              <div key={key} className="flex justify-between">
                <span className="text-white/40">{key.replace(/_/g, " ")}</span>
                <span className="text-white/70">{typeof val === "number" ? val.toFixed(2) : String(val)}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white/30 text-sm">Loading archive stats...</p>
        )}
      </Card>
    </div>
  );
}
