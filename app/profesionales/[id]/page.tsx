import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Star, CheckCircle2 } from 'lucide-react';
import {
  profesionales,
  SERVICIO_LABELS,
  TIPO_PROFESIONAL_LABELS,
} from '@/lib/data/profesionales';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const profesional = profesionales.find((p) => p.id === id);
  return {
    title: profesional
      ? `${profesional.nombre} — ${TIPO_PROFESIONAL_LABELS[profesional.tipo]} | CasaFix`
      : 'Profesional | CasaFix',
    description:
      profesional?.descripcion ?? 'Perfil de profesional verificado en CasaFix.',
  };
}

export function generateStaticParams() {
  return profesionales.map((p) => ({ id: p.id }));
}

export default async function ProfesionalDetallePage({ params }: Props) {
  const { id } = await params;
  const profesional = profesionales.find((p) => p.id === id);
  if (!profesional) notFound();

  const whatsappLink = `https://wa.me/${profesional.whatsapp}?text=${encodeURIComponent(
    `Hola, vengo de CasaFix y quiero pedir una cotización a ${profesional.nombre}.`,
  )}`;

  return (
    <div className="bg-cf-bg min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <Link
          href="/profesionales"
          className="text-sm text-cf-primary hover:underline"
        >
          ← Volver al catálogo
        </Link>
        <div className="flex items-start gap-4 mt-4 mb-10">
          <div className="w-16 h-16 rounded-full bg-cf-primary text-white flex items-center justify-center font-semibold text-xl shrink-0">
            {profesional.iniciales}
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl md:text-3xl font-semibold text-cf-text">
              {profesional.nombre}
            </h1>
            <p className="text-base text-cf-text-light mt-1">
              {TIPO_PROFESIONAL_LABELS[profesional.tipo]} &middot;{' '}
              {profesional.ciudad} &middot; Desde {profesional.fundadoEn}
            </p>
            <div className="flex items-center gap-3 mt-2 flex-wrap">
              <span className="font-medium flex items-center gap-1">
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                {profesional.rating}
              </span>
              <span className="text-sm text-cf-text-light">
                {profesional.trabajos} trabajos completados
              </span>
              {profesional.verificado && (
                <span className="text-xs px-2 py-1 bg-[#2A9D8F]/10 text-[#2A9D8F] rounded">
                  Verificado
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Descripción */}
        <section className="mb-8 bg-white rounded-xl border border-cf-border p-6">
          <h2 className="text-xl font-semibold text-cf-primary mb-2">
            Sobre nosotros
          </h2>
          <p className="text-base text-cf-text/80 leading-relaxed">
            {profesional.descripcion}
          </p>
        </section>

        {/* Servicios */}
        <section className="mb-8 bg-white rounded-xl border border-cf-border p-6">
          <h2 className="text-xl font-semibold text-cf-primary mb-3">
            Servicios que ofrecemos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {profesional.servicios.map((s) => (
              <div
                key={s}
                className="flex items-center gap-2 px-3 py-2 bg-cf-section-cream border border-cf-border rounded text-sm"
              >
                <CheckCircle2 size={14} className="text-[#2A9D8F] shrink-0" />
                <span>{SERVICIO_LABELS[s]}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Zonas */}
        <section className="mb-8 bg-white rounded-xl border border-cf-border p-6">
          <h2 className="text-xl font-semibold text-cf-primary mb-3">
            Zonas donde operamos
          </h2>
          <p className="text-base text-cf-text/80">
            {profesional.zonas.join(', ')}
          </p>
        </section>

        {/* CTAs grandes */}
        <section className="bg-cf-section-cream border border-cf-border rounded-xl p-6">
          <h2 className="text-xl font-semibold text-cf-primary mb-4">
            Cómo querés contactar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 bg-[#25D366] text-white rounded-lg hover:bg-[#1FAE53] transition-colors"
            >
              <p className="font-semibold mb-1">Consulta rápida por WhatsApp</p>
              <p className="text-sm text-white/90">
                Respuesta directa del profesional. Ideal para preguntas iniciales.
              </p>
            </a>
            <Link
              href={`/profesionales/${profesional.id}/cotizacion`}
              className="block p-5 bg-cf-primary text-white rounded-lg hover:bg-cf-primary-dark transition-colors"
            >
              <p className="font-semibold mb-1">Solicitar cotización formal</p>
              <p className="text-sm text-white/90">
                Formulario detallado. Recibís presupuesto por escrito.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
