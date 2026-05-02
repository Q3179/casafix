import { NextResponse } from 'next/server';
import { z } from 'zod';

const reservaSchema = z.object({
  prestadorId: z.string(),
  descripcion: z.string().optional(),
  direccion: z.string().optional(),
  fechaHora: z.string().optional(),
  fotoAntes: z.string().optional(),
  metodoPago: z.enum(['tarjeta', 'transferencia', 'mercadopago']),
  total: z.number(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = reservaSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const id = `CF-${Date.now().toString(36).toUpperCase()}`;

    return NextResponse.json({
      id,
      ...parsed.data,
      estado: 'confirmada',
      createdAt: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}
