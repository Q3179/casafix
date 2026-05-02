import Link from 'next/link';
import { Star, CheckCircle2 } from 'lucide-react';
import type { Prestador } from '@/lib/types';

function formatPrice(n: number): string {
  return n.toLocaleString('es-AR');
}

export function PrestadorPerfil({ prestador: p }: { prestador: Prestador }) {
  return (
    <div className="bg-cf-bg min-h-screen">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:flex gap-8">
          {/* Main content */}
          <div className="flex-1 space-y-8">
            {/* Header */}
            <div className="bg-white rounded-xl border border-cf-border p-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0"
                  style={{ backgroundColor: p.avatarColor }}
                >
                  {p.iniciales}
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-cf-primary">{p.nombre}</h1>
                  <p className="text-cf-text-light">
                    {p.oficio} &middot; {p.trabajos} trabajos realizados
                  </p>
                  <div className="flex items-center gap-1 mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < Math.round(p.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'fill-gray-200 text-gray-200'
                        }
                      />
                    ))}
                    <span className="text-sm font-medium text-cf-text ml-1">{p.rating}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {p.badges.includes('verificado') && (
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#2A9D8F]/10 text-[#2A9D8F]">
                        Verificado
                      </span>
                    )}
                    {p.badges.includes('top') && (
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#F4A261]/10 text-[#F4A261]">
                        Top semana
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Sobre mí */}
            <div className="bg-white rounded-xl border border-cf-border p-6">
              <h2 className="text-lg font-semibold text-cf-primary mb-3">Sobre mí</h2>
              <p className="text-sm text-cf-text-light leading-relaxed">{p.sobreMi}</p>
            </div>

            {/* Servicios */}
            <div className="bg-white rounded-xl border border-cf-border p-6">
              <h2 className="text-lg font-semibold text-cf-primary mb-4">Servicios que ofrece</h2>
              <div className="space-y-3">
                {p.servicios.map((s) => (
                  <div
                    key={s.nombre}
                    className="flex items-center justify-between py-2 border-b border-cf-border last:border-0"
                  >
                    <span className="text-sm text-cf-text">{s.nombre}</span>
                    <span className="text-sm font-medium text-cf-primary">{s.precio}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reseñas */}
            <div className="bg-white rounded-xl border border-cf-border p-6">
              <h2 className="text-lg font-semibold text-cf-primary mb-4">
                Reseñas ({p.resenas.length})
              </h2>
              <div className="space-y-4">
                {p.resenas.map((r) => (
                  <div key={r.id} className="border-b border-cf-border last:border-0 pb-4 last:pb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-cf-section-cream flex items-center justify-center text-xs font-medium text-cf-text-light">
                        {r.iniciales}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-cf-text">{r.autor}</p>
                        <p className="text-xs text-cf-text-muted">{r.fecha}</p>
                      </div>
                      <div className="flex items-center gap-0.5 ml-auto">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className={
                              i < r.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'fill-gray-200 text-gray-200'
                            }
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-cf-text-light">{r.texto}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Documentación */}
            <div className="bg-white rounded-xl border border-cf-border p-6">
              <h2 className="text-lg font-semibold text-cf-primary mb-4">
                Documentación verificada
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#2A9D8F]" />
                  <span className="text-sm text-cf-text">
                    Antecedentes penales vigentes (verificado el {p.documentacion.antecedentes.fecha})
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#2A9D8F]" />
                  <span className="text-sm text-cf-text">
                    ART activa con {p.documentacion.art.aseguradora}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#2A9D8F]" />
                  <span className="text-sm text-cf-text">DNI y CUIT verificados</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#2A9D8F]" />
                  <span className="text-sm text-cf-text">Referencias chequeadas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar CTA */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-24 bg-white rounded-xl border border-cf-border p-6 space-y-4">
              <p className="text-lg font-bold text-cf-primary">
                Desde ${formatPrice(p.precioDesde)}
              </p>
              <p className="text-sm text-cf-text-light">{p.zonas.join(', ')}</p>
              <Link
                href={`/reservar/${p.id}`}
                className="block bg-cf-primary text-white rounded-lg px-4 py-3 text-sm font-semibold text-center hover:bg-cf-primary-dark transition-colors"
              >
                Reservar este prestador
              </Link>
            </div>
          </aside>
        </div>

        {/* Mobile sticky CTA */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-cf-border p-4 z-40">
          <Link
            href={`/reservar/${p.id}`}
            className="block bg-cf-primary text-white rounded-lg px-4 py-3 text-sm font-semibold text-center hover:bg-cf-primary-dark transition-colors"
          >
            Reservar este prestador &middot; Desde ${formatPrice(p.precioDesde)}
          </Link>
        </div>
      </div>
    </div>
  );
}
