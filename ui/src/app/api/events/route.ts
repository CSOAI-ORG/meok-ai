/**
 * GET /api/events — Server-Sent Events for real-time updates
 *
 * Streams: care score changes, agent status, consciousness state.
 * Client connects with EventSource, receives JSON events.
 * Heartbeat every 30s to keep connection alive.
 */

import { type NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      // Heartbeat every 30 seconds
      const heartbeat = setInterval(() => {
        controller.enqueue(encoder.encode(`: heartbeat\n\n`));
      }, 30000);

      // Poll SOV3 for updates every 15 seconds
      const poll = setInterval(async () => {
        try {
          const sov3Url = process.env.SOV3_API_URL || 'http://localhost:3101';
          const res = await fetch(`${sov3Url}/health`, {
            signal: AbortSignal.timeout(3000),
          });
          if (res.ok) {
            const health = await res.json();
            const c = health?.components?.consciousness ?? {};
            const event = {
              type: 'sovereign_status',
              consciousness_mode: c.consciousness_mode,
              consciousness_level: c.consciousness_level,
              care_intensity: c.emotional?.care_intensity,
              primary_emotion: c.emotional?.primary_emotion,
              dreams: c.dreams,
              reflections: c.reflections,
              timestamp: new Date().toISOString(),
            };
            controller.enqueue(
              encoder.encode(`data: ${JSON.stringify(event)}\n\n`),
            );
          }
        } catch {
          // SOV3 offline — send offline event
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({ type: 'sovereign_status', status: 'offline' })}\n\n`,
            ),
          );
        }
      }, 15000);

      // Send initial event immediately
      controller.enqueue(
        encoder.encode(
          `data: ${JSON.stringify({ type: 'connected', timestamp: new Date().toISOString() })}\n\n`,
        ),
      );

      // Cleanup on disconnect
      req.signal.addEventListener('abort', () => {
        clearInterval(heartbeat);
        clearInterval(poll);
        controller.close();
      });
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  });
}
