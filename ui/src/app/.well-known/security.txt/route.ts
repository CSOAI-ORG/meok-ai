import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET() {
  const text = `Contact: mailto:security@meok.ai
Expires: 2027-03-31T00:00:00.000Z
Encryption: https://meok.ai/security.asc
Preferred-Languages: en
Canonical: https://meok.ai/.well-known/security.txt
Policy: https://meok.ai/security
Hiring: https://meok.ai/team
`
  return new NextResponse(text, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
