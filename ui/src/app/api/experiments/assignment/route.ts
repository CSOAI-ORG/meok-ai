export const runtime = 'edge';

// Simple hash function for variant assignment
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

// Active experiments
const EXPERIMENTS = [
  {
    id: 'pricing_headline_v1',
    variants: ['control', 'value_focused', 'social_proof'],
  },
  {
    id: 'upgrade_prompt_timing',
    variants: ['at_40', 'at_45', 'at_limit'],
  },
  {
    id: 'discount_amount_v1',
    variants: ['no_discount', 'ten_percent', 'twenty_percent', 'fifty_percent'],
  },
];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { experimentId, userId = 'anonymous' } = body;

    const experiment = EXPERIMENTS.find(e => e.id === experimentId);
    if (!experiment) {
      return new Response(
        JSON.stringify({ error: 'Experiment not found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const hash = hashString(`${experimentId}:${userId}`);
    const variantIndex = hash % experiment.variants.length;
    const variant = experiment.variants[variantIndex];

    return new Response(
      JSON.stringify({ experimentId, variant }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to assign variant' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const experimentId = url.searchParams.get('experimentId');
  const userId = url.searchParams.get('userId') || 'anonymous';

  if (!experimentId) {
    return new Response(
      JSON.stringify({ error: 'Missing experimentId' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const experiment = EXPERIMENTS.find(e => e.id === experimentId);
  if (!experiment) {
    return new Response(
      JSON.stringify({ error: 'Experiment not found' }),
      { status: 404, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const hash = hashString(`${experimentId}:${userId}`);
  const variantIndex = hash % experiment.variants.length;
  const variant = experiment.variants[variantIndex];

  return new Response(
    JSON.stringify({ experimentId, variant }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}
