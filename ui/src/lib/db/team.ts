/**
 * MEOK AI LABS — Team Data Model
 *
 * Handles team lifecycle for SMB/Team tier: creation, membership,
 * role management, invite codes, and team-level settings.
 */

import { sql } from './index';

// ── Types ──────────────────────────────────────────────────────────────────

export type TeamPlan = 'team_starter' | 'team_pro' | 'team_enterprise';
export type TeamRole = 'admin' | 'member' | 'guest';

export interface Team {
  id: string;
  name: string;
  owner_id: string;
  plan: TeamPlan;
  created_at: string;
  settings: Record<string, unknown>;
}

export interface TeamMember {
  user_id: string;
  team_id: string;
  role: TeamRole;
  joined_at: string;
}

export interface TeamInvite {
  code: string;
  team_id: string;
  created_by: string;
  role: TeamRole;
  expires_at: string;
  used_by: string | null;
}

// ── Create ─────────────────────────────────────────────────────────────────

/**
 * Creates a new team and adds the owner as an admin member.
 *
 * @param ownerId  Clerk user ID of the team creator.
 * @param name     Display name for the team.
 * @returns        The newly created Team record, or null on failure.
 */
export async function createTeam(ownerId: string, name: string): Promise<Team | null> {
  console.log(`[db/team] createTeam — ownerId=${ownerId} name=${name}`);

  if (!sql) {
    console.warn('[db/team] createTeam — no database connection');
    return null;
  }

  try {
    const id = crypto.randomUUID();
    const result = await sql`
      INSERT INTO teams (id, name, owner_id, plan, settings)
      VALUES (${id}, ${name}, ${ownerId}, 'team_starter', '{}')
      RETURNING *
    `;
    const team = (result[0] as Team) ?? null;

    // Auto-add owner as admin member
    if (team) {
      await sql`
        INSERT INTO team_members (user_id, team_id, role)
        VALUES (${ownerId}, ${id}, 'admin')
        ON CONFLICT (user_id, team_id) DO NOTHING
      `;
    }

    return team;
  } catch (err) {
    console.error('[db/team] createTeam failed:', err);
    return null;
  }
}

// ── Read ───────────────────────────────────────────────────────────────────

/**
 * Fetches the team a user belongs to. A user can belong to at most one team.
 * Returns the team the user owns first; falls back to any team they're a member of.
 */
export async function getTeamForUser(userId: string): Promise<Team | null> {
  console.log(`[db/team] getTeamForUser — userId=${userId}`);

  if (!sql) {
    console.warn('[db/team] getTeamForUser — no database connection');
    return null;
  }

  try {
    // Check owned team first
    const owned = await sql`
      SELECT * FROM teams WHERE owner_id = ${userId} LIMIT 1
    `;
    if (owned[0]) return owned[0] as Team;

    // Fall back to membership
    const member = await sql`
      SELECT t.* FROM teams t
      JOIN team_members tm ON tm.team_id = t.id
      WHERE tm.user_id = ${userId}
      LIMIT 1
    `;
    return (member[0] as Team) ?? null;
  } catch (err) {
    console.error('[db/team] getTeamForUser failed:', err);
    return null;
  }
}

/**
 * Fetches a team by its ID.
 */
export async function getTeamById(teamId: string): Promise<Team | null> {
  console.log(`[db/team] getTeamById — teamId=${teamId}`);

  if (!sql) {
    console.warn('[db/team] getTeamById — no database connection');
    return null;
  }

  try {
    const rows = await sql`SELECT * FROM teams WHERE id = ${teamId}`;
    return (rows[0] as Team) ?? null;
  } catch (err) {
    console.error('[db/team] getTeamById failed:', err);
    return null;
  }
}

/**
 * Retrieves all members of a team, ordered by join date.
 */
export async function getTeamMembers(teamId: string): Promise<TeamMember[]> {
  console.log(`[db/team] getTeamMembers — teamId=${teamId}`);

  if (!sql) {
    console.warn('[db/team] getTeamMembers — no database connection');
    return [];
  }

  try {
    const rows = await sql`
      SELECT user_id, team_id, role, joined_at
      FROM team_members
      WHERE team_id = ${teamId}
      ORDER BY joined_at ASC
    `;
    return rows as TeamMember[];
  } catch (err) {
    console.error('[db/team] getTeamMembers failed:', err);
    return [];
  }
}

/**
 * Returns the role of a specific user within a team, or null if not a member.
 */
export async function getMemberRole(userId: string, teamId: string): Promise<TeamRole | null> {
  console.log(`[db/team] getMemberRole — userId=${userId} teamId=${teamId}`);

  if (!sql) {
    console.warn('[db/team] getMemberRole — no database connection');
    return null;
  }

  try {
    const rows = await sql`
      SELECT role FROM team_members
      WHERE user_id = ${userId} AND team_id = ${teamId}
    `;
    return (rows[0]?.role as TeamRole) ?? null;
  } catch (err) {
    console.error('[db/team] getMemberRole failed:', err);
    return null;
  }
}

// ── Update ─────────────────────────────────────────────────────────────────

/**
 * Adds a user to a team with the specified role.
 * No-ops if the user is already a member.
 */
export async function addMember(
  teamId: string,
  userId: string,
  role: TeamRole = 'member',
): Promise<boolean> {
  console.log(`[db/team] addMember — teamId=${teamId} userId=${userId} role=${role}`);

  if (!sql) {
    console.warn('[db/team] addMember — no database connection');
    return false;
  }

  try {
    await sql`
      INSERT INTO team_members (user_id, team_id, role)
      VALUES (${userId}, ${teamId}, ${role})
      ON CONFLICT (user_id, team_id) DO NOTHING
    `;
    return true;
  } catch (err) {
    console.error('[db/team] addMember failed:', err);
    return false;
  }
}

/**
 * Removes a user from a team. Cannot remove the team owner.
 */
export async function removeMember(teamId: string, userId: string): Promise<boolean> {
  console.log(`[db/team] removeMember — teamId=${teamId} userId=${userId}`);

  if (!sql) {
    console.warn('[db/team] removeMember — no database connection');
    return false;
  }

  try {
    // Prevent removing the owner
    const team = await sql`SELECT owner_id FROM teams WHERE id = ${teamId}`;
    if (team[0]?.owner_id === userId) {
      console.warn('[db/team] removeMember — cannot remove team owner');
      return false;
    }

    await sql`
      DELETE FROM team_members
      WHERE user_id = ${userId} AND team_id = ${teamId}
    `;
    return true;
  } catch (err) {
    console.error('[db/team] removeMember failed:', err);
    return false;
  }
}

/**
 * Updates a member's role within the team.
 */
export async function updateMemberRole(
  teamId: string,
  userId: string,
  role: TeamRole,
): Promise<boolean> {
  console.log(`[db/team] updateMemberRole — teamId=${teamId} userId=${userId} role=${role}`);

  if (!sql) {
    console.warn('[db/team] updateMemberRole — no database connection');
    return false;
  }

  try {
    await sql`
      UPDATE team_members
      SET role = ${role}
      WHERE user_id = ${userId} AND team_id = ${teamId}
    `;
    return true;
  } catch (err) {
    console.error('[db/team] updateMemberRole failed:', err);
    return false;
  }
}

/**
 * Merges partial settings into the team's JSONB settings column.
 */
export async function updateTeamSettings(
  teamId: string,
  settings: Record<string, unknown>,
): Promise<boolean> {
  console.log(`[db/team] updateTeamSettings — teamId=${teamId}`);

  if (!sql) {
    console.warn('[db/team] updateTeamSettings — no database connection');
    return false;
  }

  try {
    await sql`
      UPDATE teams
      SET settings = COALESCE(settings, '{}'::jsonb) || ${JSON.stringify(settings)}::jsonb
      WHERE id = ${teamId}
    `;
    return true;
  } catch (err) {
    console.error('[db/team] updateTeamSettings failed:', err);
    return false;
  }
}

/**
 * Updates the team's display name.
 */
export async function updateTeamName(teamId: string, name: string): Promise<boolean> {
  console.log(`[db/team] updateTeamName — teamId=${teamId} name=${name}`);

  if (!sql) {
    console.warn('[db/team] updateTeamName — no database connection');
    return false;
  }

  try {
    await sql`UPDATE teams SET name = ${name} WHERE id = ${teamId}`;
    return true;
  } catch (err) {
    console.error('[db/team] updateTeamName failed:', err);
    return false;
  }
}

// ── Invite Codes ───────────────────────────────────────────────────────────

/**
 * Generates a time-limited invite code for a team.
 * The code expires in 7 days by default.
 */
export async function createInviteCode(
  teamId: string,
  createdBy: string,
  role: TeamRole = 'member',
  expiresInDays: number = 7,
): Promise<string | null> {
  console.log(`[db/team] createInviteCode — teamId=${teamId} createdBy=${createdBy}`);

  if (!sql) {
    console.warn('[db/team] createInviteCode — no database connection');
    return null;
  }

  try {
    const code = crypto.randomUUID().replace(/-/g, '').slice(0, 12).toUpperCase();
    const expiresAt = new Date(Date.now() + expiresInDays * 86400000).toISOString();

    await sql`
      INSERT INTO team_invites (code, team_id, created_by, role, expires_at)
      VALUES (${code}, ${teamId}, ${createdBy}, ${role}, ${expiresAt})
    `;

    return code;
  } catch (err) {
    console.error('[db/team] createInviteCode failed:', err);
    return null;
  }
}

/**
 * Redeems an invite code, adding the user to the team.
 * Returns the team ID on success, null if the code is invalid/expired/used.
 */
export async function redeemInviteCode(
  code: string,
  userId: string,
): Promise<string | null> {
  console.log(`[db/team] redeemInviteCode — code=${code} userId=${userId}`);

  if (!sql) {
    console.warn('[db/team] redeemInviteCode — no database connection');
    return null;
  }

  try {
    const rows = await sql`
      SELECT team_id, role FROM team_invites
      WHERE code = ${code}
        AND used_by IS NULL
        AND expires_at > NOW()
    `;

    if (!rows[0]) return null;

    const { team_id, role } = rows[0] as { team_id: string; role: TeamRole };

    // Add user to team
    await addMember(team_id, userId, role);

    // Mark invite as used
    await sql`
      UPDATE team_invites SET used_by = ${userId} WHERE code = ${code}
    `;

    return team_id;
  } catch (err) {
    console.error('[db/team] redeemInviteCode failed:', err);
    return null;
  }
}

// ── Delete ─────────────────────────────────────────────────────────────────

/**
 * Deletes a team and all its memberships. Only the owner can do this.
 */
export async function deleteTeam(teamId: string, requesterId: string): Promise<boolean> {
  console.log(`[db/team] deleteTeam — teamId=${teamId} requesterId=${requesterId}`);

  if (!sql) {
    console.warn('[db/team] deleteTeam — no database connection');
    return false;
  }

  try {
    const team = await sql`SELECT owner_id FROM teams WHERE id = ${teamId}`;
    if (team[0]?.owner_id !== requesterId) {
      console.warn('[db/team] deleteTeam — requester is not the owner');
      return false;
    }

    await sql`DELETE FROM team_members WHERE team_id = ${teamId}`;
    await sql`DELETE FROM team_invites WHERE team_id = ${teamId}`;
    await sql`DELETE FROM teams WHERE id = ${teamId}`;
    return true;
  } catch (err) {
    console.error('[db/team] deleteTeam failed:', err);
    return false;
  }
}
