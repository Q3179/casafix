'use client';

import { useState } from 'react';
import Link from 'next/link';
import { toast } from 'sonner';

export default function RegistroPrestadorPage() {
  const [email, setEmail] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    const res = await fetch('/api/consorcios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    if (res.ok) {
      toast.success('Te avisaremos cuando puedas registrarte.');
      setEmail('');
    }
  }

  return (
    <div className="bg-cf-bg min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-lg px-4 py-12 text-center">
        <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#F4A261]/10 text-[#F4A261] mb-4">
          PRÓXIMAMENTE
        </span>
        <h1 className="text-3xl font-bold text-cf-primary mb-3">
          Onboarding de prestadores
        </h1>
        <p className="text-cf-text-light mb-8">
          Estamos terminando el proceso de registro para prestadores. Dejá tu email y te avisamos
          cuando puedas sumar tu perfil a CasaFix.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm mx-auto mb-8">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            required
            className="flex-1 rounded-lg border border-cf-border px-4 py-2.5 text-sm outline-none focus:border-cf-primary"
          />
          <button
            type="submit"
            className="bg-cf-accent text-white rounded-lg px-5 py-2.5 text-sm font-medium hover:bg-cf-accent-dark transition-colors"
          >
            Avisarme
          </button>
        </form>
        <Link href="/" className="text-sm text-cf-primary font-medium hover:underline">
          &larr; Volver al inicio
        </Link>
      </div>
    </div>
  );
}
