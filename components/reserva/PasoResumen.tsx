'use client';

import type { Prestador } from '@/lib/types';
import { useReservaStore } from '@/lib/store';

interface Props {
  prestador: Prestador;
  onNext: () => void;
  onBack: () => void;
}

export function PasoResumen({ prestador, onNext, onBack }: Props) {
  const reserva = useReservaStore((s) => s.reservaEnCurso);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-cf-border p-6 space-y-4">
        <h3 className="font-semibold text-cf-primary">Resumen de cotización</h3>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-cf-text-light">Prestador</span>
            <span className="font-medium text-cf-text">{prestador.nombre}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-cf-text-light">Oficio</span>
            <span className="font-medium text-cf-text">{prestador.oficio}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-cf-text-light">Zona</span>
            <span className="font-medium text-cf-text">{prestador.zonas.join(', ')}</span>
          </div>

          <div className="border-t border-cf-border pt-3">
            <div className="flex justify-between">
              <span className="text-cf-text-light">Descripción</span>
              <span className="font-medium text-cf-text text-right max-w-[60%]">
                {reserva?.descripcion ?? '-'}
              </span>
            </div>
          </div>

          <div className="flex justify-between">
            <span className="text-cf-text-light">Dirección</span>
            <span className="font-medium text-cf-text">{reserva?.direccion ?? '-'}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-cf-text-light">Fecha y hora</span>
            <span className="font-medium text-cf-text">{reserva?.fechaHora ?? '-'}</span>
          </div>

          <div className="border-t border-cf-border pt-3">
            <div className="flex justify-between">
              <span className="text-cf-text-light">Rango de precio</span>
              <span className="font-medium text-cf-primary">
                {prestador.servicios[0]?.precio ?? '-'}
              </span>
            </div>
          </div>

          <div className="flex justify-between text-base">
            <span className="font-semibold text-cf-text">Total estimado</span>
            <span className="font-bold text-cf-primary">
              ${prestador.precioDesde.toLocaleString('es-AR')}
            </span>
          </div>
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
          onClick={onNext}
          className="flex-1 bg-cf-primary text-white rounded-lg py-3 font-semibold hover:bg-cf-primary-dark transition-colors"
        >
          Continuar al pago
        </button>
      </div>
    </div>
  );
}
