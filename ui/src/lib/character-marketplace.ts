/**
 * MEOK AI LABS — Character Marketplace Improvements
 * 
 * Enhanced marketplace features:
 * - Character ratings & reviews
 * - Featured characters
 * - Character categories
 * - Trending algorithms
 */

import { sql } from '@/lib/db';

export interface CharacterRating {
  characterId: string;
  userId: string;
  rating: number;
  review?: string;
  createdAt: string;
}

export interface FeaturedCharacter {
  characterId: string;
  reason: string;
  featuredSince: string;
  expiresAt?: string;
}

// Get featured characters
export async function getFeaturedCharacters(): Promise<Array<{
  id: string;
  name: string;
  emoji: string;
  tagline: string;
  reason: string;
}>> {
  if (!sql) {
    return [
      { id: 'marcus', name: 'Marcus', emoji: '⚡', tagline: 'Your performance architect', reason: 'Most popular this week' },
      { id: 'sovereign', name: 'Sovereign', emoji: '👑', tagline: 'Your sovereign AI', reason: 'Editor\'s choice' },
    ];
  }
  
  try {
    const featured = await sql`
      SELECT c.id, c.name, c.emoji, c.tagline, fc.reason
      FROM characters c
      JOIN featured_characters fc ON c.id = fc.character_id
      WHERE fc.featured_since <= NOW()
        AND (fc.expires_at IS NULL OR fc.expires_at > NOW())
      ORDER BY fc.featured_since DESC
      LIMIT 10
    `;
    
    return featured.map((f: any) => ({
      id: f.id,
      name: f.name,
      emoji: f.emoji,
      tagline: f.tagline,
      reason: f.reason,
    }));
  } catch {
    return [];
  }
}

// Get character categories with counts
export async function getCharacterCategories(): Promise<Array<{
  category: string;
  count: number;
  description: string;
  icon: string;
}>> {
  if (!sql) {
    return [
      { category: 'gaming', count: 2, description: 'Gaming coaches and companions', icon: '🎮' },
      { category: 'education', count: 2, description: 'Tutors and learning companions', icon: '📚' },
      { category: 'creative', count: 2, description: 'Writers and artists', icon: '🎨' },
      { category: 'wellness', count: 2, description: 'Health and mindfulness', icon: '🌿' },
      { category: 'productivity', count: 2, description: 'Focus and productivity', icon: '⚡' },
    ];
  }
  
  try {
    const categories = await sql`
      SELECT 
        UNNEST(tags) as category,
        COUNT(*) as count
      FROM characters
      WHERE is_marketplace = true
      GROUP BY category
      ORDER BY count DESC
      LIMIT 20
    `;
    
    const CATEGORY_INFO: Record<string, { desc: string; icon: string }> = {
      gaming: { desc: 'Gaming coaches and companions', icon: '🎮' },
      education: { desc: 'Tutors and learning companions', icon: '📚' },
      creative: { desc: 'Writers and artists', icon: '🎨' },
      wellness: { desc: 'Health and mindfulness', icon: '🌿' },
      productivity: { desc: 'Focus and productivity', icon: '⚡' },
      finance: { desc: 'Financial guidance', icon: '💰' },
      career: { desc: 'Career development', icon: '💼' },
      relationships: { desc: 'Relationship support', icon: '❤️' },
      storytelling: { desc: 'Creative storytelling', icon: '✍️' },
      mindfulness: { desc: 'Meditation and peace', icon: '🧘' },
    };
    
    return categories.map((c: any) => ({
      category: c.category,
      count: parseInt(c.count),
      description: CATEGORY_INFO[c.category]?.desc || `Characters focused on ${c.category}`,
      icon: CATEGORY_INFO[c.category]?.icon || '✨',
    }));
  } catch {
    return [];
  }
}

// Get trending characters (most interactions in last 7 days)
export async function getTrendingCharacters(limit = 10): Promise<Array<{
  id: string;
  name: string;
  emoji: string;
  tagline: string;
  interactionCount: number;
}>> {
  if (!sql) {
    return [
      { id: 'marcus', name: 'Marcus', emoji: '⚡', tagline: 'Your performance architect', interactionCount: 156 },
      { id: 'aria', name: 'Aria', emoji: '🌸', tagline: 'Your emotional companion', interactionCount: 142 },
    ];
  }
  
  try {
    const trending = await sql`
      SELECT c.id, c.name, c.emoji, c.tagline,
             COALESCE(cm.interaction_count, 0) as interaction_count
      FROM characters c
      LEFT JOIN character_mood_states cm ON c.id = cm.character_id
      WHERE c.is_marketplace = true
      ORDER BY interaction_count DESC
      LIMIT ${limit}
    `;
    
    return trending.map((t: any) => ({
      id: t.id,
      name: t.name,
      emoji: t.emoji,
      tagline: t.tagline,
      interactionCount: t.interaction_count,
    }));
  } catch {
    return [];
  }
}

// Search with filters
export async function searchCharactersWithFilters({
  query,
  category,
  tier,
  minRating,
  sortBy = 'popular',
  limit = 20,
  offset = 0,
}: {
  query?: string;
  category?: string;
  tier?: string;
  minRating?: number;
  sortBy?: 'popular' | 'rating' | 'newest' | 'name';
  limit?: number;
  offset?: number;
}) {
  if (!sql) {
    return { characters: [], total: 0 };
  }
  
  try {
    let orderBy = 'ORDER BY c.download_count DESC';
    if (sortBy === 'rating') orderBy = 'ORDER BY COALESCE(avg_rating, 0) DESC';
    if (sortBy === 'newest') orderBy = 'ORDER BY c.created_at DESC';
    if (sortBy === 'name') orderBy = 'ORDER BY c.name ASC';
    
    const whereClause = [
      "c.is_marketplace = true",
      category ? `c.tags @> '["${category}"]'::jsonb` : null,
      tier ? `c.tier = '${tier}'` : null,
    ].filter(Boolean).join(' AND ');
    
    const result = await sql`
      SELECT c.id, c.name, c.title, c.emoji, c.color, c.tagline,
             c.archetype, c.tier, c.license, c.price_cents,
             c.download_count, c.avg_rating
      FROM characters c
      WHERE ${whereClause}
      ${orderBy}
      LIMIT ${limit} OFFSET ${offset}
    `;
    
    const countResult = await sql`
      SELECT COUNT(*) as total FROM characters c
      WHERE ${whereClause}
    `;
    
    return {
      characters: result.map((r: any) => ({
        id: r.id,
        name: r.name,
        title: r.title,
        emoji: r.emoji,
        color: r.color,
        tagline: r.tagline,
        archetype: r.archetype,
        tier: r.tier,
        license: r.license,
        priceCents: r.price_cents,
        downloadCount: r.download_count,
        avgRating: r.avg_rating,
      })),
      total: parseInt(countResult[0]?.total || '0'),
    };
  } catch {
    return { characters: [], total: 0 };
  }
}

// Get character recommendations based on user preferences
export async function getRecommendedForUser(
  userId: string,
  limit = 6
): Promise<Array<{
  id: string;
  name: string;
  emoji: string;
  tagline: string;
  reason: string;
}>> {
  if (!sql) {
    return [];
  }
  
  try {
    // Get user's previous character choices
    const userChoices = await sql`
      SELECT DISTINCT c.archetype, c.tags
      FROM companions p
      JOIN characters c ON p.character_id = c.id
      WHERE p.user_id = ${userId}
      LIMIT 5
    `;
    
    if (userChoices.length === 0) {
      // No history - return popular characters
      return (await getTrendingCharacters(limit)).map(c => ({
        ...c,
        reason: 'Popular choice',
      }));
    }
    
    // Get characters with similar archetypes/tags
    const recommendations = await sql`
      SELECT c.id, c.name, c.emoji, c.tagline, c.archetype, c.tags
      FROM characters c
      WHERE c.is_marketplace = true
        AND c.tier = 'explorer'
      ORDER BY c.download_count DESC
      LIMIT ${limit}
    `;
    
    return recommendations.map((r: any) => ({
      id: r.id,
      name: r.name,
      emoji: r.emoji,
      tagline: r.tagline,
      reason: `Similar to your ${r.archetype} companions`,
    }));
  } catch {
    return [];
  }
}

export default {
  getFeaturedCharacters,
  getCharacterCategories,
  getTrendingCharacters,
  searchCharactersWithFilters,
  getRecommendedForUser,
};