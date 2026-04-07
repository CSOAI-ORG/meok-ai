/**
 * Safety Tier E2E Tests
 * Verifies that tool permissions are enforced per archetype
 */
import { test, expect } from '@playwright/test';

// Import the permission map directly for verification
test.describe('Tool Permission Enforcement', () => {
  test('run_command is restricted to challenger archetype', async () => {
    // Dynamically import the tool permissions
    const { TOOL_PERMISSIONS } = await import('../src/lib/unified-tool-executor');
    const runCmd = TOOL_PERMISSIONS['run_command'];
    expect(runCmd).toBeDefined();
    expect(runCmd.safetyTier).toBe(2);
    expect(runCmd.archetypes).toContain('challenger');
    expect(runCmd.archetypes).not.toContain('nurturer');
    expect(runCmd.archetypes).not.toContain('explorer');
  });

  test('query_memories is available to all archetypes', async () => {
    const { TOOL_PERMISSIONS } = await import('../src/lib/unified-tool-executor');
    const queryMem = TOOL_PERMISSIONS['query_memories'];
    expect(queryMem).toBeDefined();
    expect(queryMem.safetyTier).toBe(0);
    expect(queryMem.archetypes).toContain('*');
  });

  test('browse_page requires care check (tier 1)', async () => {
    const { TOOL_PERMISSIONS } = await import('../src/lib/unified-tool-executor');
    const browse = TOOL_PERMISSIONS['browse_page'];
    expect(browse).toBeDefined();
    expect(browse.safetyTier).toBe(1);
    expect(browse.archetypes).toContain('explorer');
    expect(browse.archetypes).not.toContain('innocent');
  });

  test('explorer tier characters get no tools', async () => {
    const { getToolsForCharacter } = await import('../src/lib/character-tools');
    const tools = getToolsForCharacter('aria', 'nurturer', 'explorer');
    expect(Object.keys(tools).length).toBe(0);
  });

  test('sovereign tier characters get tier 0-1 tools only', async () => {
    const { getToolsForCharacter } = await import('../src/lib/character-tools');
    const tools = getToolsForCharacter('orion', 'explorer', 'sovereign');
    expect(Object.keys(tools).length).toBeGreaterThan(0);
    // Should NOT have run_command (tier 2)
    expect(tools).not.toHaveProperty('run_command');
    // Should have query_memories (tier 0)
    expect(tools).toHaveProperty('query_memories');
  });

  test('family tier challenger gets all tools including tier 2', async () => {
    const { getToolsForCharacter } = await import('../src/lib/character-tools');
    const tools = getToolsForCharacter('marcus', 'challenger', 'family');
    expect(tools).toHaveProperty('run_command');
    expect(tools).toHaveProperty('execute_code');
    expect(tools).toHaveProperty('query_memories');
    expect(tools).toHaveProperty('browse_page');
  });
});
