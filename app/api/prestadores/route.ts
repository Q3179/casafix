import { NextResponse } from 'next/server';
import { PRESTADORES_MOCK } from '@/lib/mock-data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const categoria = searchParams.get('categoria');
  const zona = searchParams.get('zona');

  let prestadores = [...PRESTADORES_MOCK];

  if (categoria) {
    prestadores = prestadores.filter((p) => p.categoria === categoria);
  }

  if (zona) {
    prestadores = prestadores.filter((p) => p.zonas.includes(zona));
  }

  return NextResponse.json({ prestadores });
}
