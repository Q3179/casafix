'use client';

import { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import { Filter } from 'lucide-react';
import { PRESTADORES_MOCK, CATEGORIAS_OFICIO } from '@/lib/mock-data';
import { PrestadorCard } from '@/components/prestadores/PrestadorCard';
import { FiltrosLaterales } from '@/components/prestadores/FiltrosLaterales';

export default function CategoriaPage() {
  const params = useParams();
  const categoriaSlug = params.categoria as string;

  const categoria = CATEGORIAS_OFICIO.find((c) => c.slug === categoriaSlug);

  const [zona, setZona] = useState('');
  const [disponibilidad, setDisponibilidad] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const prestadores = useMemo(() => {
    let filtered = PRESTADORES_MOCK.filter((p) => p.categoria === categoriaSlug);
    if (zona) {
      filtered = filtered.filter((p) => p.zonas.includes(zona));
    }
    // NOTE: Disponibilidad filtering is mock — all prestadores show for now
    return filtered;
  }, [categoriaSlug, zona]);

  // If no exact matches, show all for demo
  const displayPrestadores = prestadores.length > 0 ? prestadores : PRESTADORES_MOCK;

  return (
    <div className="bg-cf-bg min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-cf-primary mb-2">
            {categoria?.nombre ?? 'Servicios'}
          </h1>
          <p className="text-cf-text-light">
            {categoria?.descripcion ?? 'Encontrá prestadores verificados para tu hogar.'}
          </p>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters — desktop */}
          <aside className="hidden lg:block w-56 shrink-0">
            <FiltrosLaterales
              zona={zona}
              setZona={setZona}
              disponibilidad={disponibilidad}
              setDisponibilidad={setDisponibilidad}
            />
          </aside>

          {/* Mobile filter button */}
          <div className="lg:hidden mb-4 w-full">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 border border-cf-border rounded-lg px-4 py-2 text-sm text-cf-text"
            >
              <Filter size={16} />
              Filtrar
            </button>
            {showFilters && (
              <div className="mt-4 bg-white rounded-xl border border-cf-border p-4">
                <FiltrosLaterales
                  zona={zona}
                  setZona={setZona}
                  disponibilidad={disponibilidad}
                  setDisponibilidad={setDisponibilidad}
                />
              </div>
            )}
          </div>

          {/* Grid */}
          <div className="flex-1">
            <p className="text-sm text-cf-text-muted mb-4">
              {displayPrestadores.length} prestador{displayPrestadores.length !== 1 ? 'es' : ''} disponible{displayPrestadores.length !== 1 ? 's' : ''}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {displayPrestadores.map((p) => (
                <PrestadorCard key={p.id} prestador={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
