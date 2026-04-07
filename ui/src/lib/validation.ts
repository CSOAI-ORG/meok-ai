/**
 * MEOK AI LABS — Request Validation Schemas
 * 
 * Zod schemas for validating API request bodies.
 */

import { z } from 'zod';

export const PaginationSchema = z.object({
  limit: z.number().int().min(1).max(100).default(20),
  offset: z.number().int().min(0).default(0),
});

export const DepartmentDelegateSchema = z.object({
  department: z.enum(['content', 'sales', 'finance', 'support', 'research', 'operations']),
  task: z.string().min(1).max(500),
  priority: z.number().int().min(1).max(10).default(5),
});

export const ResearchQuerySchema = z.object({
  query: z.string().min(1).max(2000),
  mode: z.enum(['fast', 'deep', 'crew']).default('fast'),
  template: z.string().optional(),
  consciousness_aware: z.boolean().default(true),
});

export const ChatMessageSchema = z.object({
  message: z.string().min(1).max(8000),
  companion_id: z.string().optional(),
  context: z.record(z.string(), z.unknown()).optional(),
});

export const CharacterCreateSchema = z.object({
  name: z.string().min(1).max(50),
  archetype: z.enum(['nurturer', 'sage', 'protector', 'dreamer', 'explorer', 'healer']),
  traits: z.array(z.string()).max(10).default([]),
  backstory: z.string().max(2000).optional(),
});

export const CharacterSearchSchema = z.object({
  query: z.string().max(200).optional(),
  archetype: z.enum(['nurturer', 'sage', 'protector', 'dreamer', 'explorer', 'healer']).optional(),
  sort: z.enum(['popular', 'recent', 'name']).default('popular'),
  limit: z.number().int().min(1).max(50).default(20),
  offset: z.number().int().min(0).default(0),
});

export function validateRequest<T>(schema: z.ZodSchema<T>, data: unknown): { success: true; data: T } | { success: false; error: z.ZodError } {
  return schema.safeParse(data);
}

export default { PaginationSchema, DepartmentDelegateSchema, ResearchQuerySchema, ChatMessageSchema, CharacterCreateSchema, CharacterSearchSchema, validateRequest };