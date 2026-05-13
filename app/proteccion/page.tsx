import type { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';
import {
  ArtVigenteIcon,
  AntecedentesIcon,
  PagoProtegidoIcon,
} from '@/components/icons/ProteccionIcons';
import { ComisionInfo } from '@/components/shared/ComisionInfo';

export const metadata: Metadata = {
  title: 'Protección CasaFix — Cómo te cuidamos',
  description: 'Conocé las 3 capas de protección que tenés al contratar con CasaFix.',
};

const CAPAS = [
  {
    icon: ArtVigenteIcon,
    titulo: 'ART vigente',
    descripcion:
      'Verificamos que cada prestador tenga seguro de riesgo de trabajo activo antes de aprobar su perfil. Si ocurre un accidente durante el trabajo, la ART lo cubre.',
    items: [
      'Revisión de póliza antes de la aprobación',
      'Seguimiento de vencimiento y renovación',
      'Cobertura ante accidentes laborales',
    ],
  },
  {
    icon: AntecedentesIcon,
    titulo: 'Antecedentes verificados',
    descripcion:
      'Chequeamos los antecedentes penales de cada prestador antes de habilitarlo. Esto te da la tranquilidad de saber quién entra a tu casa.',
    items: [
      'Certificado de antecedentes penales vigente',
      'Verificación de DNI y CUIT',
      'Referencias personales y laborales chequeadas',
    ],
  },
  {
    icon: PagoProtegidoIcon,
    titulo: 'Pago retenido',
    descripcion:
      'Tu dinero queda retenido hasta que confirmés que el trabajo está bien hecho. El prestador cobra solo cuando vos das el OK.',
    items: [
      'Retención del pago hasta confirmación',
      'Foto después como evidencia del resultado',
      'Liberación del pago cuando estés conforme',
      'Para trabajos con materiales, el adelanto correspondiente se libera al inicio contra comprobante. Solo el monto de mano de obra queda retenido.',
    ],
  },
];

export default function ProteccionPage() {
  return (
    <div className="bg-cf-bg min-h-screen">
      {/* Header */}
      <section className="bg-[#1E3A5F] py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-semibold tracking-wider text-[#F4A261] uppercase mb-3">
            Protección CasaFix
          </p>
          <h1 className="text-4xl font-bold text-white mb-4">
            Trabajá con respaldo en cada contratación
          </h1>
          <p className="text-lg text-white/80">
            Verificamos prestadores, retenemos el pago y exigimos seguros vigentes.
            Estas son las 3 capas de protección que tenés al contratar con CasaFix.
          </p>
        </div>
      </section>

      {/* Capas */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 space-y-12">
          {CAPAS.map((capa, i) => (
            <div
              key={capa.titulo}
              className="bg-white rounded-xl border border-cf-border p-8"
            >
              <div className="flex items-start gap-6">
                <div className="shrink-0 hidden sm:block">
                  <div className="w-16 h-16 bg-[#1E3A5F]/10 rounded-xl flex items-center justify-center">
                    <capa.icon size={40} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-cf-accent">CAPA {i + 1}</span>
                  </div>
                  <h2 className="text-xl font-bold text-cf-primary mb-3">
                    {capa.titulo}
                  </h2>
                  <p className="text-cf-text-light leading-relaxed mb-4">
                    {capa.descripcion}
                  </p>
                  <ul className="space-y-2">
                    {capa.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-cf-text">
                        <CheckCircle2 size={16} className="text-[#2A9D8F] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          <ComisionInfo tipo="B2C" />
        </div>
      </section>
    </div>
  );
}
