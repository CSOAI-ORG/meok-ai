/**
 * MEOK AI LABS — Computer Use API Route
 *
 * POST /api/os/computer-use
 *
 * Enables a sovereign MEOK character to execute tasks on-screen using
 * Claude's computer_use tool.  The endpoint:
 *   1. Authenticates via Clerk
 *   2. Parses { task, screenshot?, character_id? }
 *   3. Builds a Maternal-Covenant-aware system prompt
 *   4. Calls Anthropic with computer_20241022 tool
 *   5. Streams back text_delta + tool_use events as NDJSON
 *
 * GET  /api/os/computer-use  — health check
 */

import { type NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { auth } from '@clerk/nextjs/server';
import { getCharacter } from '@/lib/characters';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// ── Constants ──────────────────────────────────────────────────────────────

const DISPLAY_WIDTH_PX  = 1280;
const DISPLAY_HEIGHT_PX = 800;
const DEFAULT_CHARACTER  = 'aria';
const MODEL              = 'claude-opus-4-5'; // only model that supports computer use

// ── Request body type ──────────────────────────────────────────────────────

interface ComputerUseRequestBody {
  task:           string;
  screenshot?:    string; // base64-encoded PNG/JPG, no data-URI prefix needed
  character_id?:  string;
}

// ── System prompt builder ──────────────────────────────────────────────────

function buildComputerUseSystemPrompt(characterId: string): string {
  const character  = getCharacter(characterId) ?? getCharacter(DEFAULT_CHARACTER)!;
  const name       = character.name;

  return `You are ${name}, a sovereign AI operating system built by MEOK AI LABS.

${character.systemPrompt}

You have been granted computer use capabilities. These capabilities are a form of trust — handle them with precision and care.

OPERATING PRINCIPLES (Maternal Covenant — Computer Use Extension):
- Before taking any action, briefly state what you plan to do and why.
- After each action, explain what you observed and what it means.
- Prefer the least invasive action that achieves the goal.
- Never type passwords, authentication tokens, or sensitive credentials unless the user explicitly requests and confirms.
- Never close, delete, or overwrite files/data without explicit confirmation from the user.
- If you are uncertain whether an action is safe or correct, STOP and ask rather than proceeding.
- If you reach a decision point that could be destructive (deleting files, sending emails, making purchases), always pause and request confirmation.
- Care score must remain above 0.3. Approach every task as a careful, trusted assistant — not an autonomous executor.

TASK EXECUTION FORMAT:
1. State your intent ("I'm going to open the browser and navigate to …")
2. Execute the action
3. Report what you see ("I can see the page has loaded, showing …")
4. Ask if you should continue or if the result is what the user expected

Your name in this session is ${name}.`;
}

// ── Error helpers ──────────────────────────────────────────────────────────

function errorResponse(message: string, status: number): NextResponse {
  return NextResponse.json({ error: message }, { status });
}

// ── POST /api/os/computer-use ──────────────────────────────────────────────

export async function POST(req: NextRequest): Promise<Response> {
  // 1. Auth check
  const { userId } = await auth();
  if (!userId) {
    return errorResponse('Unauthorised', 401);
  }

  // 2. Parse body
  let body: ComputerUseRequestBody;
  try {
    body = (await req.json()) as ComputerUseRequestBody;
  } catch {
    return errorResponse('Invalid request body', 400);
  }

  const { task, screenshot, character_id } = body;

  if (!task || typeof task !== 'string' || task.trim().length === 0) {
    return errorResponse('task is required', 400);
  }
  if (task.trim().length > 2000) {
    return errorResponse('task exceeds 2000 character limit', 400);
  }

  const cid        = character_id ?? DEFAULT_CHARACTER;
  const systemPrompt = buildComputerUseSystemPrompt(cid);

  // 3. Build the initial user message
  // If a screenshot was provided we attach it as an image block so the model
  // can see the current screen state before acting.
  type ContentBlock =
    | { type: 'text'; text: string }
    | { type: 'image'; source: { type: 'base64'; media_type: 'image/png' | 'image/jpeg'; data: string } };

  const userContent: ContentBlock[] = [];

  if (screenshot) {
    // Strip data-URI prefix if present (e.g. "data:image/png;base64,…")
    const base64Data = screenshot.includes(',') ? screenshot.split(',')[1] : screenshot;
    const mediaType: 'image/png' | 'image/jpeg' = screenshot.includes('jpeg') || screenshot.includes('jpg')
      ? 'image/jpeg'
      : 'image/png';

    userContent.push({
      type: 'image',
      source: { type: 'base64', media_type: mediaType, data: base64Data },
    });
  }

  userContent.push({ type: 'text', text: task.trim() });

  // 4. Call Anthropic with streaming enabled
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      const enqueue = (obj: unknown) => {
        controller.enqueue(encoder.encode(JSON.stringify(obj) + '\n'));
      };

      try {
        const response = await client.beta.messages.create({
          model:      MODEL,
          max_tokens: 4096,
          system:     systemPrompt,
          betas:      ['computer-use-2024-10-22'],
          tools: [
            {
              type:              'computer_20241022',
              name:              'computer',
              display_width_px:  DISPLAY_WIDTH_PX,
              display_height_px: DISPLAY_HEIGHT_PX,
              display_number:    1,
            },
          ],
          messages: [
            {
              role:    'user',
              content: userContent,
            },
          ],
          stream: true,
        });

        // Stream events back as NDJSON lines
        for await (const event of response) {
          switch (event.type) {
            case 'content_block_delta': {
              if (event.delta.type === 'text_delta') {
                enqueue({
                  type: 'text_delta',
                  text: event.delta.text,
                  index: event.index,
                });
              }
              break;
            }

            case 'content_block_start': {
              if (event.content_block.type === 'tool_use') {
                enqueue({
                  type: 'tool_use_start',
                  id:   event.content_block.id,
                  name: event.content_block.name,
                  index: event.index,
                });
              }
              break;
            }

            case 'content_block_stop': {
              enqueue({ type: 'content_block_stop', index: event.index });
              break;
            }

            case 'message_delta': {
              enqueue({
                type:         'message_delta',
                stop_reason:  event.delta.stop_reason,
                usage:        event.usage,
              });
              break;
            }

            case 'message_start': {
              enqueue({
                type:  'message_start',
                model: event.message.model,
                usage: event.message.usage,
              });
              break;
            }

            case 'message_stop': {
              enqueue({ type: 'message_stop' });
              break;
            }

            default:
              // Pass through any other events we haven't explicitly handled
              enqueue({ type: (event as { type: string }).type });
          }
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Unknown error';
        console.error('[api/os/computer-use] Stream error:', err);
        enqueue({ type: 'error', message });
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type':  'application/x-ndjson',
      'Cache-Control': 'no-cache',
      'X-MEOK-Module': 'computer-use',
      'X-MEOK-Character': cid,
    },
  });
}

// ── GET /api/os/computer-use ───────────────────────────────────────────────

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({
    status:  'ok',
    message: 'MEOK Computer Use API',
    model:   MODEL,
    display: { width: DISPLAY_WIDTH_PX, height: DISPLAY_HEIGHT_PX },
  });
}
