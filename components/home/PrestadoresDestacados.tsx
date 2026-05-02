import Link from 'next/link';
import { Star } from 'lucide-react';
import { PRESTADORES_MOCK } from '@/lib/mock-data';

function formatPrice(n: number): string {
  return n.toLocaleString('es-AR');
}

function ComparisonBadge({ value }: { value: number }) {
  if (value < 0) {
    return (
      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#2A9D8F]/10 text-[#2A9D8F]">
        &darr;{Math.abs(value)}% vs mercado
      </span>
    );
  }
  if (value > 0) {
    return (
      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#F4A261]/10 text-[#F4A261]">
        &uarr;{value}% vs mercado
      </span>
    );
  }
  return (
    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-cf-text-muted">
      ~promedio
    </span>
  );
}

export function PrestadoresDestacados() {
  const destacados = PRESTADORES_MOCK.slice(0, 3);

  return (
    <section className="bg-cf-section-cream py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-cf-primary text-center mb-10">
          Prestadores destacados
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destacados.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl border border-cf-border p-6 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ backgroundColor: p.avatarColor }}
                >
                  {p.iniciales}
                </div>
                <div>
                  <p className="font-semibold text-cf-text">{p.nombre}</p>
                  <p className="text-sm text-cf-text-light">
                    {p.oficio} &middot; {p.trabajos} trabajos
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < Math.round(p.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'fill-gray-200 text-gray-200'
                    }
                  />
                ))}
                <span className="text-sm font-medium text-cf-text ml-1">{p.rating}</span>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-3">
                {p.badges.includes('verificado') && (
                  <span
                    className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#2A9D8F]/10 text-[#2A9D8F]"
                    title="ART vigente, antecedentes penales y referencias chequeadas"
                  >
                    Verificado
                  </span>
                )}
                {p.badges.includes('top') && (
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#F4A261]/10 text-[#F4A261]">
                    Top semana
                  </span>
                )}
              </div>

              {/* Zona */}
              <p className="text-sm text-cf-text-muted mb-3">{p.zonas.join(', ')}</p>

              {/* Price */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg font-bold text-cf-primary">
                  Desde ${formatPrice(p.precioDesde)}
                </span>
                <ComparisonBadge value={p.comparacionMercado} />
              </div>

              {/* CTA */}
              <Link
                href={`/prestadores/perfil/${p.id}`}
                className="mt-auto block bg-cf-primary text-white rounded-lg px-4 py-2.5 text-sm font-medium text-center hover:bg-cf-primary-dark transition-colors"
              >
                Reservar
              </Link>
            </div>
          ))}
        </div>

        <p className="text-xs text-cf-text-muted italic text-center mt-6">
          &#9432; Comparación con mercado: el precio se calcula contra un ticket promedio por servicio en GBA Norte.
        </p>
      </div>
    </section>
  );
}
