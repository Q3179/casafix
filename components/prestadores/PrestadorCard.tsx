import Link from 'next/link';
import { Star } from 'lucide-react';
import type { Prestador } from '@/lib/types';

function formatPrice(n: number): string {
  return n.toLocaleString('es-AR');
}

export function PrestadorCard({ prestador: p }: { prestador: Prestador }) {
  return (
    <div className="bg-white rounded-xl border border-cf-border p-6 flex flex-col">
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

      <p className="text-sm text-cf-text-muted mb-3">{p.zonas.join(', ')}</p>

      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg font-bold text-cf-primary">
          Desde ${formatPrice(p.precioDesde)}
        </span>
        {p.comparacionMercado < 0 && (
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#2A9D8F]/10 text-[#2A9D8F]">
            &darr;{Math.abs(p.comparacionMercado)}%
          </span>
        )}
        {p.comparacionMercado === 0 && (
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-cf-text-muted">
            ~promedio
          </span>
        )}
        {p.comparacionMercado > 0 && (
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#F4A261]/10 text-[#F4A261]">
            &uarr;{p.comparacionMercado}%
          </span>
        )}
      </div>

      <Link
        href={`/prestadores/perfil/${p.id}`}
        className="mt-auto block bg-cf-primary text-white rounded-lg px-4 py-2.5 text-sm font-medium text-center hover:bg-cf-primary-dark transition-colors"
      >
        Ver perfil
      </Link>
    </div>
  );
}
