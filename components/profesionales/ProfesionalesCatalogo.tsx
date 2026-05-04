'use client';

import { useMemo, useState } from 'react';
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

type TipoFiltro = TipoProfesional | 'todos';
type ServicioFiltro = ServicioCategoria | 'todos';

export function ProfesionalesCatalogo({ profesionales }: Props) {
  const [tipoFiltro, setTipoFiltro] = useState<TipoFiltro>('todos');
  const [servicioFiltro, setServicioFiltro] = useState<ServicioFiltro>('todos');
  const [zonaFiltro, setZonaFiltro] = useState<string>('todas');

  const zonasUnicas = useMemo(
    () => Array.from(new Set(profesionales.flatMap((p) => p.zonas))).sort(),
    [profesionales],
  );

  const profesionalesFiltrados = useMemo(
    () =>
      profesionales.filter((p) => {
        if (tipoFiltro !== 'todos' && p.tipo !== tipoFiltro) return false;
        if (servicioFiltro !== 'todos' && !p.servicios.includes(servicioFiltro))
          return false;
        if (zonaFiltro !== 'todas' && !p.zonas.includes(zonaFiltro)) return false;
        return true;
      }),
    [profesionales, tipoFiltro, servicioFiltro, zonaFiltro],
  );

  return (
    <div>
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
            <option value="inmobiliaria">Inmobiliarias</option>
            <option value="constructora">Constructoras</option>
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

      {/* Resultados */}
      <p className="text-sm text-cf-text-muted mb-4">
        {profesionalesFiltrados.length} profesional
        {profesionalesFiltrados.length !== 1 ? 'es' : ''} disponible
        {profesionalesFiltrados.length !== 1 ? 's' : ''}
      </p>

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
