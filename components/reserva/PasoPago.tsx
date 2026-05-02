'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CreditCard, Building2, Smartphone } from 'lucide-react';
import { useReservaStore } from '@/lib/store';
import type { Prestador } from '@/lib/types';

const METODOS = [
  { value: 'tarjeta' as const, label: 'Tarjeta de crédito/débito', icon: CreditCard },
  { value: 'transferencia' as const, label: 'Transferencia bancaria', icon: Building2 },
  { value: 'mercadopago' as const, label: 'Mercado Pago', icon: Smartphone },
];

interface Props {
  prestador: Prestador;
  onBack: () => void;
}

export function PasoPago({ prestador, onBack }: Props) {
  const router = useRouter();
  const [metodo, setMetodo] = useState<'tarjeta' | 'transferencia' | 'mercadopago'>('tarjeta');
  const [loading, setLoading] = useState(false);
  const { reservaEnCurso, resetReserva } = useReservaStore();

  async function handleConfirm() {
    setLoading(true);
    try {
      const res = await fetch('/api/reservas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prestadorId: prestador.id,
          descripcion: reservaEnCurso?.descripcion,
          direccion: reservaEnCurso?.direccion,
          fechaHora: reservaEnCurso?.fechaHora,
          fotoAntes: reservaEnCurso?.fotoAntes,
          metodoPago: metodo,
          total: prestador.precioDesde,
        }),
      });
      const data = await res.json() as { id: string };
      resetReserva();
      router.push(`/reserva-confirmada/${data.id}`);
    } catch {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-cf-section-cream rounded-lg p-4">
        <p className="text-sm text-cf-text">
          El pago queda retenido. El prestador cobra cuando confirmás que el trabajo está bien hecho.
        </p>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-cf-primary">Método de pago</h3>
        {METODOS.map((m) => (
          <label
            key={m.value}
            className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${
              metodo === m.value
                ? 'border-cf-primary bg-[#1E3A5F]/5'
                : 'border-cf-border hover:border-cf-primary/30'
            }`}
          >
            <input
              type="radio"
              name="metodoPago"
              value={m.value}
              checked={metodo === m.value}
              onChange={() => setMetodo(m.value)}
              className="accent-[#1E3A5F]"
            />
            <m.icon size={20} className="text-cf-primary" />
            <span className="text-sm font-medium text-cf-text">{m.label}</span>
          </label>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-cf-border p-4">
        <div className="flex justify-between text-base">
          <span className="font-semibold text-cf-text">Total estimado</span>
          <span className="font-bold text-cf-primary">
            ${prestador.precioDesde.toLocaleString('es-AR')}
          </span>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 border border-cf-border text-cf-text rounded-lg py-3 font-medium hover:bg-cf-section-cream transition-colors"
        >
          Volver
        </button>
        <button
          onClick={handleConfirm}
          disabled={loading}
          className="flex-1 bg-cf-accent text-white rounded-lg py-3 font-semibold hover:bg-cf-accent-dark transition-colors disabled:opacity-50"
        >
          {loading ? 'Procesando...' : 'Confirmar reserva'}
        </button>
      </div>
    </div>
  );
}
