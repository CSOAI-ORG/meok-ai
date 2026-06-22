import { NextRequest, NextResponse } from 'next/server';

const WEBBRIDGE_URL = process.env.WEBBRIDGE_URL || 'http://127.0.0.1:10086/command';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, args, session } = body;

    if (!action) {
      return NextResponse.json({ error: 'Missing action' }, { status: 400 });
    }

    const upstream = await fetch(WEBBRIDGE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action, args: args ?? {}, session: session ?? 'meok-grid' }),
    });

    const data = await upstream.json().catch(async () => ({ raw: await upstream.text() }));
    return NextResponse.json(data, { status: upstream.status });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'WebBridge request failed';
    return NextResponse.json(
      { error: message, hint: 'Is the Kimi WebBridge daemon running on http://127.0.0.1:10086?' },
      { status: 502 }
    );
  }
}

export async function GET() {
  try {
    const upstream = await fetch(WEBBRIDGE_URL.replace('/command', '/health'), { method: 'GET' });
    const data = await upstream.json().catch(() => ({ ok: upstream.ok }));
    return NextResponse.json({ daemon: WEBBRIDGE_URL, ...data });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'WebBridge unreachable';
    return NextResponse.json(
      { error: message, hint: 'Is the Kimi WebBridge daemon running on http://127.0.0.1:10086?' },
      { status: 502 }
    );
  }
}
