'use client';

import { useState } from 'react';
import Link from 'next/link';
import { toast } from 'sonner';

export function AdminConsorcios() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const res = await fetch('/api/consorcios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        toast.success('Te avisaremos cuando esté disponible.');
        setEmail('');
      } else {
        toast.error('Hubo un error. Intentá de nuevo.');
      }
    } catch {
      toast.error('Hubo un error. Intentá de nuevo.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="bg-cf-section-cream rounded-xl border-2 border-dashed border-cf-border p-8">
          {/* Upper block */}
          <p className="text-sm font-semibold tracking-wider text-cf-primary uppercase mb-2">
            Para administraciones y consorcios
          </p>
          <h3 className="text-2xl font-bold text-cf-primary mb-2">
            ¿Administrás un barrio privado?
          </h3>
          <p className="text-cf-text-light mb-4">
            Ofrecé a tus vecinos un directorio de prestadores verificados con precios claros.
          </p>
          <Link
            href="/empresas"
            className="inline-block bg-cf-primary text-white rounded-lg px-6 py-2.5 font-medium hover:bg-cf-primary-dark transition-colors"
          >
            Conocer plan &rarr;
          </Link>

          {/* Divider */}
          <div className="border-t border-dashed border-cf-border my-6" />

          {/* Lower block */}
          <div className="space-y-3">
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#F4A261]/10 text-[#F4A261]">
              PRÓXIMAMENTE
            </span>
            <p className="font-semibold text-cf-primary">
              Pronto, también para tu edificio.
            </p>
            <p className="text-sm text-cf-text-light">
              Dejá tu mail y te avisamos cuando esté.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
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
                disabled={loading}
                className="bg-cf-accent text-white rounded-lg px-5 py-2.5 text-sm font-medium hover:bg-cf-accent-dark transition-colors disabled:opacity-50"
              >
                Avisarme
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
