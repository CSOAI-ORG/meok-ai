import { type NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const gameQuery = searchParams.get('game');

  if (gameQuery) {
    return NextResponse.json({
      game: gameQuery.toLowerCase(),
      title: `${gameQuery} — Active Window`,
      confidence: 0.97,
      timestamp: new Date().toISOString(),
    });
  }

  return NextResponse.json({
    game: null,
    title: 'Desktop — No game detected',
    confidence: 0,
    timestamp: new Date().toISOString(),
  });
}
