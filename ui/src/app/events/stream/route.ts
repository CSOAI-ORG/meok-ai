/**
 * MEOK Dome live event stream.
 *
 * Tries to read real-time events from the SOV3 mesh MCP endpoint.
 * When the mesh is unreachable, returns a curated fallback stream so the UI
 * always has something to show.
 */

import { NextResponse } from "next/server";
import sov3 from "@/lib/sov3-client";

interface StreamEvent {
  id: string;
  time: string;
  actor: string;
  action: string;
  detail: string;
  type: "council" | "agent" | "pioneer" | "research";
}

const FALLBACK_EVENTS: StreamEvent[] = [
  { id: "1", time: "Now", actor: "Council", action: "approved water-rationing policy", detail: "Vote: 41-6", type: "council" },
  { id: "2", time: "2m ago", actor: "Aria", action: "sold 12 energy units", detail: "Market price: 0.04 MEOK", type: "agent" },
  { id: "3", time: "4m ago", actor: "Pioneer #1,184", action: "claimed a residential plot", detail: "District 3, Block 7", type: "pioneer" },
  { id: "4", time: "7m ago", actor: "Research", action: "dataset completed", detail: "30-day town-life social dynamics", type: "research" },
  { id: "5", time: "11m ago", actor: "Marcus", action: "patrolled Industrial District", detail: "0 incidents reported", type: "agent" },
  { id: "6", time: "14m ago", actor: "Council", action: "funded orbital shuttle prototype", detail: "Budget: 8,400 MEOK", type: "council" },
  { id: "7", time: "19m ago", actor: "Pioneer #942", action: "co-authored governance paper", detail: "Anonymized contribution attested", type: "research" },
  { id: "8", time: "23m ago", actor: "Scout", action: "discovered anomaly", detail: "Deep Space Gate sector 4", type: "agent" },
];

function sov3EventToStreamEvent(raw: unknown, idx: number): StreamEvent {
  const e = raw as { time?: string; type?: string; agent?: string; task_id?: string };
  const time = e.time ? new Date(e.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : `${idx + 1}m ago`;
  const actor = e.agent ?? "SOV3";
  const typeMap: Record<string, StreamEvent["type"]> = {
    task_created: "agent",
    task_completed: "agent",
    task_assigned: "agent",
    council_vote: "council",
    research_output: "research",
    pioneer_action: "pioneer",
  };
  return {
    id: `sov3-${idx}`,
    time,
    actor,
    action: e.type ? e.type.replace(/_/g, " ") : "event",
    detail: e.task_id ? `task ${e.task_id}` : "live from SOV3 mesh",
    type: typeMap[e.type ?? ""] ?? "agent",
  };
}

export const runtime = "nodejs";

export async function GET() {
  try {
    const result = await sov3.call<{ recent_events?: Array<{ time?: string; type?: string; agent?: string; task_id?: string }> }>(
      "coord_get_dashboard",
      {}
    );

    if (!result.ok || !result.data) {
      throw new Error(result.error || "SOV3 dashboard unavailable");
    }

    const events = (result.data.recent_events ?? [])
      .slice(0, 8)
      .map((e, i) => sov3EventToStreamEvent(e, i));

    if (events.length === 0) {
      throw new Error("No recent events from SOV3");
    }

    return NextResponse.json(events, {
      headers: { "Cache-Control": "no-store, max-age=0" },
    });
  } catch (err) {
    console.error("[events/stream] falling back to simulated events:", err);
    return NextResponse.json(FALLBACK_EVENTS, {
      headers: { "Cache-Control": "no-store, max-age=0" },
    });
  }
}
