/**
 * MEOK AI LABS — Team API
 *
 * GET  /api/team  — Fetch the authenticated user's team
 * POST /api/team  — Create a new team
 *
 * Auth: Clerk auth() — returns 401 if not authenticated.
 */

import { NextRequest, NextResponse } from 'next/server';
import { getAuthUserId } from '@/lib/api-auth';
import { getTeamForUser, createTeam, getTeamMembers } from '@/lib/db/team';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * GET /api/team — Returns the user's team with member list.
 */
export async function GET() {
  const userId = await getAuthUserId();

  if (!userId) {
    return NextResponse.json(
      { error: 'Unauthorized. Please sign in.' },
      { status: 401 },
    );
  }

  try {
    const team = await getTeamForUser(userId);

    if (!team) {
      return NextResponse.json({ team: null, members: [] }, { status: 200 });
    }

    const members = await getTeamMembers(team.id);

    return NextResponse.json({ team, members }, { status: 200 });
  } catch (err) {
    console.error('[api/team GET] failed:', err);
    return NextResponse.json(
      { error: 'Failed to fetch team.' },
      { status: 500 },
    );
  }
}

/**
 * POST /api/team — Creates a new team with the authenticated user as owner.
 * Body: { name: string }
 */
export async function POST(req: NextRequest) {
  const userId = await getAuthUserId();

  if (!userId) {
    return NextResponse.json(
      { error: 'Unauthorized. Please sign in.' },
      { status: 401 },
    );
  }

  let body: { name?: string } = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: 'Request body must be valid JSON.' },
      { status: 400 },
    );
  }

  const name = body?.name?.trim();
  if (!name || name.length < 2 || name.length > 64) {
    return NextResponse.json(
      { error: 'Team name must be 2–64 characters.' },
      { status: 400 },
    );
  }

  // Check if user already has a team
  const existing = await getTeamForUser(userId);
  if (existing) {
    return NextResponse.json(
      { error: 'You already belong to a team. Leave or delete it first.' },
      { status: 409 },
    );
  }

  try {
    const team = await createTeam(userId, name);

    if (!team) {
      return NextResponse.json(
        { error: 'Failed to create team. Please try again.' },
        { status: 500 },
      );
    }

    return NextResponse.json({ team }, { status: 201 });
  } catch (err) {
    console.error('[api/team POST] failed:', err);
    return NextResponse.json(
      { error: 'Failed to create team.' },
      { status: 500 },
    );
  }
}
