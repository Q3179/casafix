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
          <div className="flex justify-between gap-3">
            <span className="text-cf-text-light shrink-0">Prestador</span>
            <span className="font-medium text-cf-text text-right break-words min-w-0">{prestador.nombre}</span>
          </div>
          <div className="flex justify-between gap-3">
            <span className="text-cf-text-light shrink-0">Oficio</span>
            <span className="font-medium text-cf-text text-right break-words min-w-0">{prestador.oficio}</span>
          </div>
          <div className="flex justify-between gap-3">
            <span className="text-cf-text-light shrink-0">Zona</span>
            <span className="font-medium text-cf-text text-right break-words min-w-0">{prestador.zonas.join(', ')}</span>
          </div>

          <div className="border-t border-cf-border pt-3">
            <div className="flex justify-between gap-3">
              <span className="text-cf-text-light shrink-0">Descripción</span>
              <span className="font-medium text-cf-text text-right break-words min-w-0 max-w-[60%]">
                {reserva?.descripcion ?? '-'}
              </span>
            </div>
          </div>

          <div className="flex justify-between gap-3">
            <span className="text-cf-text-light shrink-0">Dirección</span>
            <span className="font-medium text-cf-text text-right break-words min-w-0">{reserva?.direccion ?? '-'}</span>
          </div>

          <div className="flex justify-between gap-3">
            <span className="text-cf-text-light shrink-0">Fecha y hora</span>
            <span className="font-medium text-cf-text text-right break-words min-w-0">{reserva?.fechaHora ?? '-'}</span>
          </div>

          <div className="border-t border-cf-border pt-3">
            <div className="flex justify-between gap-3">
              <span className="text-cf-text-light shrink-0">Rango de precio</span>
              <span className="font-medium text-cf-primary text-right break-words min-w-0">
                {prestador.servicios[0]?.precio ?? '-'}
              </span>
            </div>
          </div>

          <div className="flex justify-between gap-3 text-base">
            <span className="font-semibold text-cf-text shrink-0">Total estimado</span>
            <span className="font-bold text-cf-primary text-right break-words min-w-0">
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
