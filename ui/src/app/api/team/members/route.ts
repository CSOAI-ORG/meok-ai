/**
 * MEOK AI LABS — Team Members API
 *
 * GET  /api/team/members  — List members of the user's team
 * POST /api/team/members  — Add a member (via invite code or direct add for admins)
 *
 * Auth: Clerk auth() — returns 401 if not authenticated.
 */

import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import {
  getTeamForUser,
  getTeamMembers,
  getMemberRole,
  addMember,
  createInviteCode,
  redeemInviteCode,
} from '@/lib/db/team';
import type { TeamRole } from '@/lib/db/team';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * GET /api/team/members — Returns the member list for the user's team.
 */
export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { error: 'Unauthorized. Please sign in.' },
      { status: 401 },
    );
  }

  try {
    const team = await getTeamForUser(userId);

    if (!team) {
      return NextResponse.json(
        { error: 'You do not belong to a team.' },
        { status: 404 },
      );
    }

    const members = await getTeamMembers(team.id);
    return NextResponse.json({ team_id: team.id, members }, { status: 200 });
  } catch (err) {
    console.error('[api/team/members GET] failed:', err);
    return NextResponse.json(
      { error: 'Failed to fetch team members.' },
      { status: 500 },
    );
  }
}

/**
 * POST /api/team/members — Add a member or generate/redeem an invite code.
 *
 * Actions:
 *   { action: "invite", role?: TeamRole }         — Generate an invite code (admin only)
 *   { action: "redeem", code: string }             — Redeem an invite code
 *   { action: "add", user_id: string, role?: TeamRole } — Direct add (admin only)
 */
export async function POST(req: NextRequest) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { error: 'Unauthorized. Please sign in.' },
      { status: 401 },
    );
  }

  let body: { action?: string; role?: TeamRole; code?: string; user_id?: string } = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: 'Request body must be valid JSON.' },
      { status: 400 },
    );
  }

  const { action } = body;

  // ── Generate invite code ──────────────────────────────────────────────
  if (action === 'invite') {
    const team = await getTeamForUser(userId);
    if (!team) {
      return NextResponse.json({ error: 'You do not belong to a team.' }, { status: 404 });
    }

    const role = await getMemberRole(userId, team.id);
    if (role !== 'admin') {
      return NextResponse.json({ error: 'Only admins can generate invite codes.' }, { status: 403 });
    }

    const inviteRole = body.role ?? 'member';
    const code = await createInviteCode(team.id, userId, inviteRole);

    if (!code) {
      return NextResponse.json({ error: 'Failed to generate invite code.' }, { status: 500 });
    }

    return NextResponse.json({ code, expires_in_days: 7 }, { status: 201 });
  }

  // ── Redeem invite code ────────────────────────────────────────────────
  if (action === 'redeem') {
    const code = body.code?.trim()?.toUpperCase();
    if (!code) {
      return NextResponse.json({ error: 'Invite code is required.' }, { status: 400 });
    }

    // Check user doesn't already have a team
    const existing = await getTeamForUser(userId);
    if (existing) {
      return NextResponse.json(
        { error: 'You already belong to a team. Leave it first.' },
        { status: 409 },
      );
    }

    const teamId = await redeemInviteCode(code, userId);
    if (!teamId) {
      return NextResponse.json(
        { error: 'Invalid, expired, or already-used invite code.' },
        { status: 400 },
      );
    }

    return NextResponse.json({ team_id: teamId, joined: true }, { status: 200 });
  }

  // ── Direct add (admin only) ───────────────────────────────────────────
  if (action === 'add') {
    const targetUserId = body.user_id?.trim();
    if (!targetUserId) {
      return NextResponse.json({ error: 'user_id is required.' }, { status: 400 });
    }

    const team = await getTeamForUser(userId);
    if (!team) {
      return NextResponse.json({ error: 'You do not belong to a team.' }, { status: 404 });
    }

    const role = await getMemberRole(userId, team.id);
    if (role !== 'admin') {
      return NextResponse.json({ error: 'Only admins can add members directly.' }, { status: 403 });
    }

    const addRole = body.role ?? 'member';
    const success = await addMember(team.id, targetUserId, addRole);

    if (!success) {
      return NextResponse.json({ error: 'Failed to add member.' }, { status: 500 });
    }

    return NextResponse.json({ added: true, user_id: targetUserId, role: addRole }, { status: 201 });
  }

  return NextResponse.json({ error: 'Invalid action. Use "invite", "redeem", or "add".' }, { status: 400 });
}
