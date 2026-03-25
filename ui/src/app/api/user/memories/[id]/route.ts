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

  // TODO: Wire up to SOV3 delete_memory tool when available
  return NextResponse.json({ deleted: true, id })
}
