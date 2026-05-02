import { NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 },
      );
    }

    // NOTE: En producción, guardar en Supabase
    return NextResponse.json({
      success: true,
      message: 'Email registrado correctamente.',
    });
  } catch {
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}
