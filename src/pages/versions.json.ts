import versions from '~/versions';

export async function GET() {
  return new Response(JSON.stringify(versions));
}
