'use client';

import Link from 'next/link';
import { CATEGORIAS_OFICIO } from '@/lib/mock-data';
import { CATEGORIA_ICON_MAP } from '@/components/icons/CategoriaIcons';

export function Categorias() {
  return (
    <section id="servicios" className="bg-cf-bg py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-cf-primary text-center mb-8">
          Categorías de servicios
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-8 gap-y-2 mb-10 border-b border-cf-border">
          <button className="pb-3 text-sm font-semibold text-cf-primary border-b-2 border-cf-accent">
            Servicios de oficio
          </button>
          <button className="pb-3 text-sm text-cf-text-muted cursor-not-allowed" disabled>
            Servicios profesionales
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CATEGORIAS_OFICIO.map((cat) => {
            const Icon = CATEGORIA_ICON_MAP[cat.slug];
            return (
              <Link
                key={cat.slug}
                href={`/prestadores/${cat.slug}`}
                className="bg-white rounded-xl border border-cf-border p-6 hover:border-cf-accent transition-colors flex flex-col items-center gap-3 text-center"
              >
                {Icon && <Icon size={40} />}
                <span className="text-sm font-medium text-cf-text">{cat.nombre}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
