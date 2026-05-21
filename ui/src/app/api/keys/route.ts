import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { ensureApiKeysTable, listApiKeys, createApiKey, revokeApiKey } from '@/lib/db/api-keys';

export const dynamic = 'force-dynamic';

export async function GET(): Promise<NextResponse> {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await ensureApiKeysTable();
    const keys = await listApiKeys(userId);
    return NextResponse.json({ keys });
  } catch (err) {
    console.error('[keys] Failed to list keys:', err);
    return NextResponse.json({ error: 'Failed to retrieve keys' }, { status: 500 });
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await ensureApiKeysTable();

    // Limit to 5 active keys per user
    const existing = await listApiKeys(userId);
    if (existing.length >= 5) {
      return NextResponse.json({ error: 'Maximum 5 API keys per account' }, { status: 400 });
    }

    const body = await req.json().catch(() => ({}));
    const name = (body.name || 'default').slice(0, 50);

    const key = await createApiKey(userId, 'sovereign', name);
    return NextResponse.json({
      api_key: key.plaintext,
      prefix: key.prefix,
      id: key.id,
      warning: 'Store this key securely. It will not be shown again.',
    });
  } catch (err) {
    console.error('[keys] Failed to create key:', err);
    return NextResponse.json({ error: 'Failed to create API key' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest): Promise<NextResponse> {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const keyId = searchParams.get('id');
    if (!keyId) {
      return NextResponse.json({ error: 'Missing key id' }, { status: 400 });
    }

    const revoked = await revokeApiKey(keyId, userId);
    if (!revoked) {
      return NextResponse.json({ error: 'Key not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[keys] Failed to revoke key:', err);
    return NextResponse.json({ error: 'Failed to revoke key' }, { status: 500 });
  }
}
