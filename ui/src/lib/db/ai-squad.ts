/**
 * MEOK AI LABS — AI Squad Database Operations
 *
 * Persistence layer for squads, messages, gaming sessions, and achievements.
 */

import { sql } from './index';

// ── Types ──────────────────────────────────────────────────────────────────

export interface AISquad {
  id: string;
  name: string;
  purpose: 'gaming' | 'creative' | 'productivity' | 'learning' | 'general';
  members: SquadMember[];
  createdAt: string;
  createdBy: string;
}

export interface SquadMember {
  characterId: string;
  role: 'leader' | 'specialist' | 'support' | 'analyst' | 'member';
  joinedAt: string;
  contributionScore: number;
}

export interface SquadMessage {
  id: string;
  squadId: string;
  characterId: string;
  content: string;
  timestamp: string;
}

export interface GamingSession {
  id: string;
  game: string;
  startTime: string;
  endTime?: string;
  duration: number;
  notes: string;
  rating: number;
}

// ── Squad CRUD ─────────────────────────────────────────────────────────────

export async function insertSquad(userId: string, squad: AISquad): Promise<boolean> {
  if (!sql) return false;
  try {
    await sql`
      INSERT INTO ai_squads (id, user_id, name, purpose, created_at)
      VALUES (${squad.id}, ${userId}, ${squad.name}, ${squad.purpose}, ${squad.createdAt})
    `;
    for (const m of squad.members) {
      await sql`
        INSERT INTO ai_squad_members (squad_id, character_id, role, joined_at, contribution_score)
        VALUES (${squad.id}, ${m.characterId}, ${m.role}, ${m.joinedAt}, ${m.contributionScore})
      `;
    }
    return true;
  } catch (err) {
    console.error('[db/ai-squad] insertSquad failed:', err);
    return false;
  }
}

export async function getSquadsForUser(userId: string, purpose?: string): Promise<AISquad[]> {
  if (!sql) return [];
  try {
    const squadRows = await sql`
      SELECT id, name, purpose, created_at, user_id
      FROM ai_squads
      WHERE user_id = ${userId}
        AND (${purpose ?? null}::TEXT IS NULL OR purpose = ${purpose ?? null})
      ORDER BY created_at DESC
    `;
    if (!squadRows.length) return [];

    const squadIds = (squadRows as any[]).map((r) => r.id as string);
    const memberRows = await sql`
      SELECT squad_id, character_id, role, joined_at, contribution_score
      FROM ai_squad_members
      WHERE squad_id = ANY(${squadIds}::text[])
    `;

    const membersBySquad = new Map<string, SquadMember[]>();
    for (const r of memberRows as any[]) {
      const list = membersBySquad.get(r.squad_id) || [];
      list.push({
        characterId: r.character_id,
        role: r.role,
        joinedAt: r.joined_at,
        contributionScore: r.contribution_score,
      });
      membersBySquad.set(r.squad_id, list);
    }

    return (squadRows as any[]).map((r) => ({
      id: r.id,
      name: r.name,
      purpose: r.purpose,
      members: membersBySquad.get(r.id) || [],
      createdAt: r.created_at,
      createdBy: r.user_id,
    }));
  } catch (err) {
    console.error('[db/ai-squad] getSquadsForUser failed:', err);
    return [];
  }
}

export async function getSquadWithMessages(
  userId: string,
  squadId: string,
): Promise<{ squad: AISquad; messages: SquadMessage[] } | null> {
  if (!sql) return null;
  try {
    const squadRows = await sql`
      SELECT id, name, purpose, created_at, user_id
      FROM ai_squads
      WHERE id = ${squadId} AND user_id = ${userId}
      LIMIT 1
    `;
    if (!squadRows.length) return null;
    const s = squadRows[0] as any;

    const [memberRows, messageRows] = await Promise.all([
      sql`
        SELECT character_id, role, joined_at, contribution_score
        FROM ai_squad_members
        WHERE squad_id = ${squadId}
      `,
      sql`
        SELECT id, character_id, content, timestamp
        FROM ai_squad_messages
        WHERE squad_id = ${squadId}
        ORDER BY timestamp ASC
      `,
    ]);

    const squad: AISquad = {
      id: s.id,
      name: s.name,
      purpose: s.purpose,
      members: (memberRows as any[]).map((r) => ({
        characterId: r.character_id,
        role: r.role,
        joinedAt: r.joined_at,
        contributionScore: r.contribution_score,
      })),
      createdAt: s.created_at,
      createdBy: s.user_id,
    };

    const messages: SquadMessage[] = (messageRows as any[]).map((r) => ({
      id: r.id,
      squadId,
      characterId: r.character_id,
      content: r.content,
      timestamp: r.timestamp,
    }));

    return { squad, messages };
  } catch (err) {
    console.error('[db/ai-squad] getSquadWithMessages failed:', err);
    return null;
  }
}

export async function deleteSquad(userId: string, squadId: string): Promise<boolean> {
  if (!sql) return false;
  try {
    const result = await sql`
      DELETE FROM ai_squads
      WHERE id = ${squadId} AND user_id = ${userId}
      RETURNING id
    `;
    return (result as any[]).length > 0;
  } catch (err) {
    console.error('[db/ai-squad] deleteSquad failed:', err);
    return false;
  }
}

export async function insertMessages(squadId: string, messages: SquadMessage[]): Promise<boolean> {
  if (!sql || messages.length === 0) return false;
  try {
    for (const m of messages) {
      await sql`
        INSERT INTO ai_squad_messages (id, squad_id, character_id, content, timestamp)
        VALUES (${m.id}, ${squadId}, ${m.characterId}, ${m.content}, ${m.timestamp})
      `;
    }
    return true;
  } catch (err) {
    console.error('[db/ai-squad] insertMessages failed:', err);
    return false;
  }
}

// ── Gaming Session CRUD ────────────────────────────────────────────────────

export async function insertGamingSession(userId: string, session: GamingSession): Promise<boolean> {
  if (!sql) return false;
  try {
    await sql`
      INSERT INTO gaming_sessions (id, user_id, game, start_time, end_time, duration, notes, rating)
      VALUES (${session.id}, ${userId}, ${session.game}, ${session.startTime},
              ${session.endTime ?? null}, ${session.duration}, ${session.notes}, ${session.rating})
    `;
    return true;
  } catch (err) {
    console.error('[db/ai-squad] insertGamingSession failed:', err);
    return false;
  }
}

export async function getGamingSessionStatsForUser(userId: string): Promise<{
  sessions: GamingSession[];
  total: number;
  totalHours: string;
}> {
  if (!sql) return { sessions: [], total: 0, totalHours: '0.0' };
  try {
    const [sessionRows, statsRows] = await Promise.all([
      sql`
        SELECT id, game, start_time, end_time, duration, notes, rating
        FROM gaming_sessions
        WHERE user_id = ${userId}
        ORDER BY start_time DESC
        LIMIT 20
      `,
      sql`
        SELECT COUNT(*)::int AS total, COALESCE(SUM(duration), 0)::float AS total_duration
        FROM gaming_sessions
        WHERE user_id = ${userId}
      `,
    ]);

    const sessions = (sessionRows as any[]).map((r) => ({
      id: r.id,
      game: r.game,
      startTime: r.start_time,
      endTime: r.end_time,
      duration: r.duration,
      notes: r.notes,
      rating: r.rating,
    }));

    const stats = statsRows[0] as any;
    return {
      sessions,
      total: stats.total,
      totalHours: (stats.total_duration / 60).toFixed(1),
    };
  } catch (err) {
    console.error('[db/ai-squad] getGamingSessionStatsForUser failed:', err);
    return { sessions: [], total: 0, totalHours: '0.0' };
  }
}

export async function getActiveGamingSession(userId: string): Promise<GamingSession | null> {
  if (!sql) return null;
  try {
    const rows = await sql`
      SELECT id, game, start_time, end_time, duration, notes, rating
      FROM gaming_sessions
      WHERE user_id = ${userId} AND end_time IS NULL
      ORDER BY start_time DESC
      LIMIT 1
    `;
    if (!rows.length) return null;
    const r = rows[0] as any;
    return {
      id: r.id,
      game: r.game,
      startTime: r.start_time,
      endTime: r.end_time,
      duration: r.duration,
      notes: r.notes,
      rating: r.rating,
    };
  } catch (err) {
    console.error('[db/ai-squad] getActiveGamingSession failed:', err);
    return null;
  }
}

export async function endGamingSession(
  userId: string,
  sessionId: string,
  duration: number,
  notes: string,
  rating: number,
): Promise<GamingSession | null> {
  if (!sql) return null;
  try {
    const rows = await sql`
      UPDATE gaming_sessions
      SET end_time = NOW(),
          duration = ${duration},
          notes = ${notes},
          rating = ${rating}
      WHERE id = ${sessionId} AND user_id = ${userId} AND end_time IS NULL
      RETURNING id, game, start_time, end_time, duration, notes, rating
    `;
    if (!rows.length) return null;
    const r = rows[0] as any;
    return {
      id: r.id,
      game: r.game,
      startTime: r.start_time,
      endTime: r.end_time,
      duration: r.duration,
      notes: r.notes,
      rating: r.rating,
    };
  } catch (err) {
    console.error('[db/ai-squad] endGamingSession failed:', err);
    return null;
  }
}

// ── Achievement CRUD ───────────────────────────────────────────────────────

export async function unlockUserAchievement(userId: string, achievementId: string): Promise<boolean> {
  if (!sql) return false;
  try {
    await sql`
      INSERT INTO user_achievements (user_id, achievement_id, unlocked_at)
      VALUES (${userId}, ${achievementId}, NOW())
      ON CONFLICT (user_id, achievement_id) DO UPDATE SET unlocked_at = NOW()
    `;
    return true;
  } catch (err) {
    console.error('[db/ai-squad] unlockUserAchievement failed:', err);
    return false;
  }
}

export async function getUserUnlockedAchievementIds(userId: string): Promise<string[]> {
  if (!sql) return [];
  try {
    const rows = await sql`
      SELECT achievement_id
      FROM user_achievements
      WHERE user_id = ${userId}
    `;
    return (rows as any[]).map((r) => r.achievement_id as string);
  } catch (err) {
    console.error('[db/ai-squad] getUserUnlockedAchievementIds failed:', err);
    return [];
  }
}
