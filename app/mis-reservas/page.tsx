'use client';

import Link from 'next/link';

export default function MisReservasPage() {
  return (
    <div className="bg-cf-bg min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-lg px-4 py-12 text-center">
        <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#F4A261]/10 text-[#F4A261] mb-4">
          PRÓXIMAMENTE
        </span>
        <h1 className="text-3xl font-bold text-cf-primary mb-3">
          Mis reservas
        </h1>
        <p className="text-cf-text-light mb-8">
          Pronto vas a poder ver el historial y estado de todas tus reservas desde acá.
        </p>
        <Link href="/" className="text-sm text-cf-primary font-medium hover:underline">
          &larr; Volver al inicio
        </Link>
      </div>
    </div>
  );
}
