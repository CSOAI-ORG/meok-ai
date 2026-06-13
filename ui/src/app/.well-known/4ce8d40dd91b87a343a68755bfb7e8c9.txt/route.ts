// IndexNow key verification endpoint
// Path: /.well-known/4ce8d40dd91b87a343a68755bfb7e8c9.txt
// Returns: the key as plain text

const KEY = '4ce8d40dd91b87a343a68755bfb7e8c9';

export const dynamic = 'force-static';

export async function GET() {
  return new Response(KEY, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
