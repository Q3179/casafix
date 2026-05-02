'use client';

import { ZONAS } from '@/lib/mock-data';

interface FiltrosLateralesProps {
  zona: string;
  setZona: (z: string) => void;
  disponibilidad: string;
  setDisponibilidad: (d: string) => void;
}

export function FiltrosLaterales({
  zona,
  setZona,
  disponibilidad,
  setDisponibilidad,
}: FiltrosLateralesProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-cf-primary mb-3">Zona</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm text-cf-text cursor-pointer">
            <input
              type="radio"
              name="zona"
              value=""
              checked={zona === ''}
              onChange={() => setZona('')}
              className="accent-[#1E3A5F]"
            />
            Todas
          </label>
          {ZONAS.map((z) => (
            <label key={z} className="flex items-center gap-2 text-sm text-cf-text cursor-pointer">
              <input
                type="radio"
                name="zona"
                value={z}
                checked={zona === z}
                onChange={() => setZona(z)}
                className="accent-[#1E3A5F]"
              />
              {z}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-cf-primary mb-3">Disponibilidad</h3>
        <div className="space-y-2">
          {[
            { value: '', label: 'Cualquier momento' },
            { value: 'esta-semana', label: 'Esta semana' },
            { value: 'proxima', label: 'Próxima semana' },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 text-sm text-cf-text cursor-pointer">
              <input
                type="radio"
                name="disponibilidad"
                value={opt.value}
                checked={disponibilidad === opt.value}
                onChange={() => setDisponibilidad(opt.value)}
                className="accent-[#1E3A5F]"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
