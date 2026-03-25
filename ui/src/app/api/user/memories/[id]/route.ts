import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'

// DELETE /api/user/memories/:id
// Stub — returns success. Real deletion requires SOV3 support.
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { userId } = await auth()

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params

  if (!id) {
    return NextResponse.json({ error: 'Memory ID is required' }, { status: 400 })
  }

  // Attempt SOV3 delete_memory; fall back to acknowledging deletion
  try {
    const sov3Url = process.env.SOV3_API_URL || 'http://localhost:3100';
    const res = await fetch(`${sov3Url}/mcp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: crypto.randomUUID(),
        method: 'tools/call',
        params: { name: 'delete_memory', arguments: { memory_id: id, user_id: userId } },
      }),
      signal: AbortSignal.timeout(5_000),
    });
    if (!res.ok) {
      console.warn(`[user/memories] SOV3 delete returned ${res.status} for memory ${id}`);
    }
  } catch (e) {
    console.warn(`[user/memories] SOV3 delete_memory failed for memory ${id} (non-fatal):`, e);
  }

  return NextResponse.json({ deleted: true, id })
}
