'use client';

import { useParams } from 'next/navigation';
import { PRESTADORES_MOCK } from '@/lib/mock-data';
import { useReservaStore } from '@/lib/store';
import { PasoDescripcion } from '@/components/reserva/PasoDescripcion';
import { PasoLogin } from '@/components/reserva/PasoLogin';
import { PasoResumen } from '@/components/reserva/PasoResumen';
import { PasoPago } from '@/components/reserva/PasoPago';

const STEP_LABELS = ['Detalle', 'Cuenta', 'Resumen', 'Pago'];

export default function ReservarPage() {
  const params = useParams();
  const prestadorId = params.prestadorId as string;
  const prestador = PRESTADORES_MOCK.find((p) => p.id === prestadorId);

  const { paso, setPaso, setReservaData } = useReservaStore();

  if (!prestador) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-cf-text-light">Prestador no encontrado.</p>
      </div>
    );
  }

  return (
    <div className="bg-cf-bg min-h-screen">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Stepper */}
        <div className="flex items-center justify-between mb-8">
          {STEP_LABELS.map((label, i) => {
            const stepNum = i + 1;
            const isActive = paso === stepNum;
            const isDone = paso > stepNum;
            return (
              <div key={label} className="flex items-center gap-2 flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                    isActive
                      ? 'bg-cf-primary text-white'
                      : isDone
                        ? 'bg-[#2A9D8F] text-white'
                        : 'bg-cf-section-cream text-cf-text-muted'
                  }`}
                >
                  {isDone ? '\u2713' : stepNum}
                </div>
                <span
                  className={`text-xs font-medium hidden sm:inline ${
                    isActive ? 'text-cf-primary' : 'text-cf-text-muted'
                  }`}
                >
                  {label}
                </span>
                {i < STEP_LABELS.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-2 ${
                      isDone ? 'bg-[#2A9D8F]' : 'bg-cf-border'
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Prestador header */}
        <div className="flex items-center gap-3 mb-6 bg-white rounded-xl border border-cf-border p-4">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
            style={{ backgroundColor: prestador.avatarColor }}
          >
            {prestador.iniciales}
          </div>
          <div>
            <p className="font-semibold text-cf-text text-sm">{prestador.nombre}</p>
            <p className="text-xs text-cf-text-light">{prestador.oficio}</p>
          </div>
        </div>

        {/* Steps */}
        {paso === 1 && (
          <PasoDescripcion
            onNext={(data) => {
              setReservaData({
                prestadorId,
                descripcion: data.descripcion,
                direccion: data.direccion,
                fechaHora: data.fechaHora,
                fotoAntes: data.fotoAntes,
              });
              setPaso(2);
            }}
          />
        )}
        {paso === 2 && <PasoLogin onNext={() => setPaso(3)} />}
        {paso === 3 && (
          <PasoResumen
            prestador={prestador}
            onNext={() => setPaso(4)}
            onBack={() => setPaso(1)}
          />
        )}
        {paso === 4 && (
          <PasoPago prestador={prestador} onBack={() => setPaso(3)} />
        )}
      </div>
    </div>
  );
}
