'use client';

import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';
import {
  type Profesional,
  type ServicioCategoria,
  type TipoProfesional,
  SERVICIO_LABELS,
  TIPO_PROFESIONAL_LABELS,
} from '@/lib/data/profesionales';

interface Props {
  profesionales: Profesional[];
}

// Filtro extendido: además de los TipoProfesional individuales y "todos",
// existe el filtro compuesto 'inmo-cons' que abarca inmobiliaria + constructora
// (tienen lógica de negocio similar y se presentan juntas).
type TipoFiltro = TipoProfesional | 'todos' | 'inmo-cons';
type ServicioFiltro = ServicioCategoria | 'todos';

interface Grupo {
  id: 'inmo-cons' | 'mmo' | 'arquitectura';
  titulo: string;
  descripcion: string;
  tipos: TipoProfesional[];
}

const GRUPOS: Grupo[] = [
  {
    id: 'inmo-cons',
    titulo: 'Inmobiliarias y constructoras',
    descripcion:
      'Carteras de propiedades en alquiler y empresas de obra residencial.',
    tipos: ['inmobiliaria', 'constructora'],
  },
  {
    id: 'mmo',
    titulo: 'Maestros mayores de obra',
    descripcion: 'Subcontratación de oficios técnicos para obra propia.',
    tipos: ['mmo'],
  },
  {
    id: 'arquitectura',
    titulo: 'Estudios de arquitectura',
    descripcion: 'Cierre de obra y dirección técnica llave en mano.',
    tipos: ['arquitectura'],
  },
];

function tipoFiltroLabel(tipo: TipoFiltro): string {
  if (tipo === 'todos') return 'Todos';
  if (tipo === 'inmo-cons') return 'Inmobiliarias y constructoras';
  return TIPO_PROFESIONAL_LABELS[tipo];
}

export function ProfesionalesCatalogo({ profesionales }: Props) {
  const [tipoFiltro, setTipoFiltro] = useState<TipoFiltro>('todos');
  const [servicioFiltro, setServicioFiltro] = useState<ServicioFiltro>('todos');
  const [zonaFiltro, setZonaFiltro] = useState<string>('todas');
  const containerRef = useRef<HTMLDivElement>(null);

  const noFilterActive =
    tipoFiltro === 'todos' &&
    servicioFiltro === 'todos' &&
    zonaFiltro === 'todas';

  const zonasUnicas = useMemo(
    () => Array.from(new Set(profesionales.flatMap((p) => p.zonas))).sort(),
    [profesionales],
  );

  const profesionalesFiltrados = useMemo(
    () =>
      profesionales.filter((p) => {
        if (tipoFiltro !== 'todos') {
          if (tipoFiltro === 'inmo-cons') {
            if (p.tipo !== 'inmobiliaria' && p.tipo !== 'constructora')
              return false;
          } else if (p.tipo !== tipoFiltro) {
            return false;
          }
        }
        if (servicioFiltro !== 'todos' && !p.servicios.includes(servicioFiltro))
          return false;
        if (zonaFiltro !== 'todas' && !p.zonas.includes(zonaFiltro)) return false;
        return true;
      }),
    [profesionales, tipoFiltro, servicioFiltro, zonaFiltro],
  );

  function activarSegmento(grupoId: Grupo['id']) {
    setTipoFiltro(grupoId);
    setServicioFiltro('todos');
    setZonaFiltro('todas');
    // Pequeño scroll al top del catálogo para que el usuario vea los resultados
    requestAnimationFrame(() => {
      containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  function limpiarFiltros() {
    setTipoFiltro('todos');
    setServicioFiltro('todos');
    setZonaFiltro('todas');
  }

  return (
    <div ref={containerRef}>
      {/* Filtros */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 p-4 bg-cf-section-cream border border-cf-border rounded-lg">
        <div className="space-y-1">
          <label
            htmlFor="filtro-tipo"
            className="block text-xs font-medium text-cf-text/70 uppercase tracking-wide"
          >
            Tipo de profesional
          </label>
          <select
            id="filtro-tipo"
            value={tipoFiltro}
            onChange={(e) => setTipoFiltro(e.target.value as TipoFiltro)}
            className="w-full px-3 py-2 border border-cf-border rounded-md bg-white text-sm outline-none focus:border-cf-primary"
          >
            <option value="todos">Todos los tipos</option>
            <option value="inmo-cons">Inmobiliarias y constructoras</option>
            <option value="mmo">Maestros mayores de obra</option>
            <option value="arquitectura">Estudios de arquitectura</option>
          </select>
        </div>

        <div className="space-y-1">
          <label
            htmlFor="filtro-servicio"
            className="block text-xs font-medium text-cf-text/70 uppercase tracking-wide"
          >
            ¿Qué servicio necesitás?
          </label>
          <select
            id="filtro-servicio"
            value={servicioFiltro}
            onChange={(e) => setServicioFiltro(e.target.value as ServicioFiltro)}
            className="w-full px-3 py-2 border border-cf-border rounded-md bg-white text-sm outline-none focus:border-cf-primary"
          >
            <option value="todos">Todos los servicios</option>
            {(Object.entries(SERVICIO_LABELS) as [ServicioCategoria, string][]).map(
              ([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ),
            )}
          </select>
        </div>

        <div className="space-y-1">
          <label
            htmlFor="filtro-zona"
            className="block text-xs font-medium text-cf-text/70 uppercase tracking-wide"
          >
            Zona
          </label>
          <select
            id="filtro-zona"
            value={zonaFiltro}
            onChange={(e) => setZonaFiltro(e.target.value)}
            className="w-full px-3 py-2 border border-cf-border rounded-md bg-white text-sm outline-none focus:border-cf-primary"
          >
            <option value="todas">Todas las zonas</option>
            {zonasUnicas.map((z) => (
              <option key={z} value={z}>
                {z}
              </option>
            ))}
          </select>
        </div>
      </div>

      {noFilterActive ? (
        // VISTA AGRUPADA POR SEGMENTO — default cuando no hay filtros activos.
        // Cada segmento tiene un encabezado con título clickeable + "Ver todos →"
        // que activa el filtro de tipo y pasa a la vista plana focalizada.
        <div className="space-y-12">
          {GRUPOS.map((grupo) => {
            const cards = profesionales.filter((p) =>
              grupo.tipos.includes(p.tipo),
            );
            if (cards.length === 0) return null;
            return (
              <section key={grupo.id}>
                <div className="flex items-end justify-between gap-3 mb-4 pb-3 border-b border-cf-border">
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold text-cf-primary">
                      {grupo.titulo}{' '}
                      <span className="text-cf-text-muted font-normal">
                        ({cards.length})
                      </span>
                    </h3>
                    <p className="text-sm text-cf-text-light mt-0.5">
                      {grupo.descripcion}
                    </p>
                  </div>
                  <button
                    onClick={() => activarSegmento(grupo.id)}
                    className="text-sm font-medium text-cf-primary hover:underline shrink-0 whitespace-nowrap"
                  >
                    Ver detalle →
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cards.map((prof) => (
                    <ProfesionalCard key={prof.id} profesional={prof} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        // VISTA PLANA FILTRADA — cuando hay cualquier filtro activo.
        <div>
          <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
            <p className="text-sm text-cf-text-muted">
              <span className="font-medium text-cf-text">
                {profesionalesFiltrados.length}
              </span>{' '}
              profesional
              {profesionalesFiltrados.length !== 1 ? 'es' : ''}
              {tipoFiltro !== 'todos' && (
                <>
                  {' · '}
                  <span className="text-cf-text">
                    {tipoFiltroLabel(tipoFiltro)}
                  </span>
                </>
              )}
            </p>
            <button
              onClick={limpiarFiltros}
              className="text-sm font-medium text-cf-primary hover:underline"
            >
              Limpiar filtros
            </button>
          </div>

          {profesionalesFiltrados.length === 0 ? (
            <div className="bg-white border border-cf-border rounded-xl p-8 text-center">
              <p className="text-cf-text-light">
                No hay profesionales que coincidan con los filtros. Probá con otra
                combinación.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {profesionalesFiltrados.map((prof) => (
                <ProfesionalCard key={prof.id} profesional={prof} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ProfesionalCard({ profesional }: { profesional: Profesional }) {
  const whatsappLink = `https://wa.me/${profesional.whatsapp}?text=${encodeURIComponent(
    `Hola, vengo de CasaFix y quiero pedir una cotización a ${profesional.nombre}.`,
  )}`;

  return (
    <div className="bg-white border border-cf-border rounded-xl p-5 flex flex-col gap-4">
      {/* Header con iniciales y nombre */}
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-full bg-cf-primary text-white flex items-center justify-center font-semibold shrink-0">
          {profesional.iniciales}
        </div>
        <div className="flex-1 min-w-0">
          <Link
            href={`/profesionales/${profesional.id}`}
            className="font-semibold text-cf-text hover:text-cf-primary transition-colors block truncate"
          >
            {profesional.nombre}
          </Link>
          <p className="text-sm text-cf-text-light">
            {TIPO_PROFESIONAL_LABELS[profesional.tipo]} &middot;{' '}
            {profesional.trabajos} trabajos
          </p>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="text-sm font-medium flex items-center gap-1">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              {profesional.rating}
            </span>
            {profesional.verificado && (
              <span className="text-xs px-2 py-0.5 bg-[#2A9D8F]/10 text-[#2A9D8F] rounded">
                Verificado
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Descripción */}
      <p className="text-sm text-cf-text/80">{profesional.descripcion}</p>

      {/* Servicios */}
      <div>
        <p className="text-xs font-medium text-cf-text/70 uppercase tracking-wide mb-2">
          Servicios que ofrece
        </p>
        <div className="flex flex-wrap gap-1.5">
          {profesional.servicios.map((s) => (
            <span
              key={s}
              className="text-xs px-2 py-1 bg-cf-section-cream border border-cf-border rounded text-cf-text"
            >
              {SERVICIO_LABELS[s]}
            </span>
          ))}
        </div>
      </div>

      {/* Zonas */}
      <p className="text-xs text-cf-text-light">
        <span className="font-medium">Zonas:</span> {profesional.zonas.join(', ')}
      </p>

      {/* CTAs */}
      <div className="flex flex-col gap-2 pt-2 border-t border-cf-border mt-auto">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center px-4 py-2 bg-[#25D366] text-white rounded-md font-medium hover:bg-[#1FAE53] transition-colors text-sm"
        >
          Consultar por WhatsApp
        </a>
        <Link
          href={`/profesionales/${profesional.id}/cotizacion`}
          className="w-full text-center px-4 py-2 bg-cf-primary text-white rounded-md font-medium hover:bg-cf-primary-dark transition-colors text-sm"
        >
          Solicitar cotización formal
        </Link>
      </div>
    </div>
  );
}
