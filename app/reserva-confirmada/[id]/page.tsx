'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export default function ReservaConfirmadaPage() {
  const params = useParams();
  const reservaId = params.id as string;

  return (
    <div className="bg-cf-bg min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-lg px-4 py-12 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle2 size={64} className="text-[#2A9D8F]" />
        </div>

        <h1 className="text-3xl font-bold text-cf-primary mb-2">
          Reserva confirmada
        </h1>
        <p className="text-cf-text-light mb-6">
          Tu número de reserva es:
        </p>
        <div className="bg-white rounded-xl border border-cf-border p-4 mb-8 inline-block">
          <span className="text-2xl font-bold font-mono text-cf-primary">
            #{reservaId}
          </span>
        </div>

        <div className="bg-white rounded-xl border border-cf-border p-6 text-left mb-8">
          <h2 className="font-semibold text-cf-primary mb-4">Próximos pasos</h2>
          <ol className="space-y-3 text-sm text-cf-text-light">
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-cf-accent text-white text-xs font-bold flex items-center justify-center shrink-0">
                1
              </span>
              Te llegará un email con la confirmación.
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-cf-accent text-white text-xs font-bold flex items-center justify-center shrink-0">
                2
              </span>
              El día del trabajo, el prestador se contactará por WhatsApp.
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-cf-accent text-white text-xs font-bold flex items-center justify-center shrink-0">
                3
              </span>
              Al finalizar, subí la foto después y liberá el pago.
            </li>
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-cf-primary text-white rounded-lg px-6 py-3 font-semibold hover:bg-cf-primary-dark transition-colors"
          >
            Volver al inicio
          </Link>
          <button
            onClick={() => toast.info('Próximamente')}
            className="border border-cf-border text-cf-text rounded-lg px-6 py-3 font-medium hover:bg-cf-section-cream transition-colors"
          >
            Ver mis reservas
          </button>
        </div>
      </div>
    </div>
  );
}
