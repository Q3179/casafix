import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  FileText,
  Lock,
  Receipt,
  Building2,
  HardHat,
  Compass,
  Users,
  ClipboardList,
  Search,
  CalendarCheck,
  Wallet,
  CheckCircle2,
} from 'lucide-react';
import { ComisionInfo } from '@/components/shared/ComisionInfo';
import { ProfesionalesCatalogo } from '@/components/profesionales/ProfesionalesCatalogo';
import { profesionales } from '@/lib/data/profesionales';

export const metadata: Metadata = {
  title: 'CasaFix para profesionales — Inmobiliarias, constructoras, arquitectos',
  description:
    'Centralizá los servicios de tu cartera o tu obra. Prestadores verificados, presupuestos por escrito y facturación consolidada para inmobiliarias, constructoras, MMO y estudios de arquitectura.',
  openGraph: {
    title: 'CasaFix para profesionales',
    description: 'Servicios verificados para tu cartera o tu obra.',
    type: 'website',
  },
};

const WHATSAPP_HREF =
  'https://wa.me/5491155550000?text=Hola,%20quiero%20conocer%20m%C3%A1s%20sobre%20CasaFix%20para%20profesionales';

const MICROBADGES = [
  { icon: ShieldCheck, label: 'Prestadores verificados' },
  { icon: FileText, label: 'Presupuestos por escrito' },
  { icon: Lock, label: 'Pago retenido' },
  { icon: Receipt, label: 'Facturación mensual' },
];

const PARA_QUIEN = [
  {
    icon: Building2,
    titulo: 'Inmobiliarias y constructoras',
    descripcion:
      'Carteras de propiedades en alquiler y obra residencial coordinada con prestadores matriculados.',
    proximamente: false,
  },
  {
    icon: HardHat,
    titulo: 'Maestros mayores de obra',
    descripcion:
      'Subcontratación de oficios técnicos para tus obras con coordinación centralizada.',
    proximamente: false,
  },
  {
    icon: Compass,
    titulo: 'Estudios de arquitectura',
    descripcion:
      'Cierre de obra y trazabilidad de cada subcontratación con prestadores habilitados.',
    proximamente: false,
  },
  {
    icon: Users,
    titulo: 'Administradores de barrios',
    descripcion:
      'Padrón verificable de proveedores y mantenimiento de áreas comunes.',
    proximamente: true,
  },
];

const PASOS = [
  {
    numero: 1,
    icon: ClipboardList,
    titulo: 'Cargá tu necesidad',
    descripcion: 'Definí servicio, propiedad o proyecto, fecha y alcance.',
  },
  {
    numero: 2,
    icon: Search,
    titulo: 'Elegí prestador',
    descripcion: 'Compará perfiles verificados con presupuesto por escrito.',
  },
  {
    numero: 3,
    icon: CalendarCheck,
    titulo: 'Coordiná y ejecutá',
    descripcion: 'Recibí notificaciones de avance. Foto antes para iniciar.',
  },
  {
    numero: 4,
    icon: Wallet,
    titulo: 'Pago retenido y facturación consolidada',
    descripcion: 'Pagás cuando confirmás. Facturación mensual unificada.',
  },
];

const BENEFICIOS = [
  'Prestadores verificados con ART vigente y antecedentes chequeados',
  'Presupuestos siempre por escrito, no más acuerdos verbales',
  'Pago retenido hasta tu confirmación',
  'Mediación si hay desacuerdo con el prestador',
  'Reporte mensual de servicios y facturación consolidada',
];

export default function ProfesionalesPage() {
  return (
    <div className="bg-cf-bg min-h-screen">
      {/* Hero */}
      <section className="bg-[#1E3A5F] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold tracking-wider text-[#F4A261] uppercase">
                Para profesionales
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Centralizá los servicios de tu cartera o tu obra
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Para inmobiliarias, constructoras, maestros mayores de obra y estudios de
                arquitectura. Prestadores verificados, presupuestos por escrito y
                facturación consolidada.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {MICROBADGES.map((badge) => (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 text-white/90"
                  >
                    <badge.icon size={18} className="shrink-0" />
                    <span className="text-sm">{badge.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#F4A261] hover:bg-[#E8924D] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Hablar con un asesor
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center border border-white/40 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  Volver a la home
                </Link>
              </div>
            </div>

            {/* Right column — visual block */}
            <div className="hidden lg:block bg-white/10 backdrop-blur rounded-xl p-8 space-y-4">
              <p className="text-white/90 text-sm font-semibold uppercase tracking-wider">
                Una plataforma, todos tus oficios
              </p>
              <ul className="space-y-3">
                {BENEFICIOS.slice(0, 4).map((b) => (
                  <li key={b} className="flex items-start gap-3 text-white/90">
                    <CheckCircle2 size={20} className="shrink-0 text-[#F4A261] mt-0.5" />
                    <span className="text-sm leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo de profesionales — movido arriba para que el menú de filtros
          y los segmentos sean lo primero que ve el usuario después del Hero. */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
            <div className="min-w-0">
              <h2 className="text-3xl font-bold text-cf-primary">
                Profesionales destacados
              </h2>
              <p className="text-base text-cf-text/80 mt-2 max-w-3xl">
                Inmobiliarias, constructoras, maestros mayores de obra y estudios
                de arquitectura verificados en zona norte del GBA.
              </p>
            </div>
          </div>
          <ProfesionalesCatalogo profesionales={profesionales} />
        </div>
      </section>

      {/* Para quién — versión compacta: 4 columnas, sin bullets, una línea
          por segmento. Sirve como recordatorio del valor por audiencia. */}
      <section className="py-12 lg:py-16 bg-cf-section-cream border-y border-cf-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-cf-primary text-center mb-2">
            Para quién es CasaFix Profesionales
          </h2>
          <p className="text-cf-text-light text-center mb-10 max-w-2xl mx-auto">
            Cada segmento usa la plataforma con una lógica distinta.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PARA_QUIEN.map((card) => (
              <div
                key={card.titulo}
                className={`rounded-xl border p-5 ${
                  card.proximamente
                    ? 'bg-white/60 border-dashed border-cf-border opacity-80'
                    : 'bg-white border-cf-border'
                }`}
              >
                <div className="w-10 h-10 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center mb-3">
                  <card.icon size={20} className="text-cf-primary" />
                </div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h3 className="text-base font-semibold text-cf-primary leading-tight">
                    {card.titulo}
                  </h3>
                  {card.proximamente && (
                    <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-[#F4A261]/10 text-[#F4A261]">
                      PRÓXIMAMENTE
                    </span>
                  )}
                </div>
                <p className="text-sm text-cf-text-light leading-relaxed">
                  {card.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona para profesionales */}
      <section className="py-16 bg-cf-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-cf-primary text-center mb-12">
            Cómo funciona para profesionales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PASOS.map((paso) => (
              <div key={paso.numero} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-cf-accent text-white font-bold text-lg flex items-center justify-center mb-4">
                  {paso.numero}
                </div>
                <paso.icon size={32} className="text-cf-primary mb-3" />
                <h3 className="font-semibold text-cf-text mb-2">{paso.titulo}</h3>
                <p className="text-sm text-cf-text-light">{paso.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qué te ofrece la plataforma */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-cf-primary text-center mb-10">
            Qué te ofrece la plataforma
          </h2>
          <ul className="space-y-4 mb-10">
            {BENEFICIOS.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 bg-cf-section-cream rounded-lg p-4"
              >
                <CheckCircle2
                  size={22}
                  className="text-[#2A9D8F] shrink-0 mt-0.5"
                />
                <span className="text-cf-text">{b}</span>
              </li>
            ))}
          </ul>
          <ComisionInfo tipo="B2B" />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-[#1E3A5F]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">¿Querés ver una demo?</h2>
          <p className="text-white/80 mb-8">
            Coordinamos una llamada de 20 minutos para mostrarte la plataforma con tu
            cartera o tu obra como ejemplo.
          </p>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#F4A261] hover:bg-[#E8924D] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Coordinar demo
          </a>
        </div>
      </section>
    </div>
  );
}
