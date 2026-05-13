'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShieldCheck, DollarSign, Lock, Camera, Search } from 'lucide-react';
import Link from 'next/link';
import { CATEGORIAS_OFICIO } from '@/lib/mock-data';

const MICROBADGES = [
  { icon: ShieldCheck, label: 'Prestadores verificados' },
  { icon: DollarSign, label: 'Precios claros' },
  { icon: Lock, label: 'Pago retenido' },
  { icon: Camera, label: 'Foto antes/después' },
];

export function Hero() {
  const router = useRouter();
  const [zona, setZona] = useState('pilar-del-este');
  const [categoria, setCategoria] = useState('');

  function handleSearch() {
    const cat = categoria || 'plomeria';
    router.push(`/prestadores/${cat}`);
  }

  return (
    <section className="bg-[#1E3A5F] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Left column */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Contratá simple y seguro
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Prestadores verificados y precios claros para barrios privados del GBA Norte.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {MICROBADGES.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 text-white/90">
                  <badge.icon size={18} className="shrink-0" />
                  <span className="text-sm">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Center column — search */}
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 space-y-4">
            <div className="space-y-1">
              <label
                htmlFor="hero-zona"
                className="block text-xs font-medium text-white/80 uppercase tracking-wide"
              >
                ¿En qué zona necesitás el servicio?
              </label>
              <select
                id="hero-zona"
                value={zona}
                onChange={(e) => setZona(e.target.value)}
                className="w-full bg-white rounded-lg px-4 py-3 text-sm text-gray-700 outline-none"
              >
                <option value="pilar-del-este">Pilar del Este (detectado)</option>
                <option value="pilar-centro">Pilar Centro</option>
                <option value="nordelta">Nordelta</option>
                <option value="tigre">Tigre</option>
                <option value="escobar">Escobar</option>
              </select>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="hero-categoria"
                className="block text-xs font-medium text-white/80 uppercase tracking-wide"
              >
                ¿Qué tipo de trabajo necesitás?
              </label>
              <select
                id="hero-categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                className="w-full bg-white rounded-lg px-4 py-3 text-sm text-gray-700 outline-none"
              >
                <option value="">Categoría de servicio</option>
                {CATEGORIAS_OFICIO.map((cat) => (
                  <option key={cat.slug} value={cat.slug}>
                    {cat.nombre}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="hero-descripcion"
                className="block text-xs font-medium text-white/80 uppercase tracking-wide"
              >
                Contanos en pocas palabras
              </label>
              <input
                id="hero-descripcion"
                type="text"
                placeholder="¿Qué necesitás?"
                className="w-full bg-white rounded-lg px-4 py-3 text-sm text-gray-700 outline-none placeholder:text-gray-400"
              />
            </div>

            <button
              onClick={handleSearch}
              className="w-full bg-[#F4A261] hover:bg-[#E8924D] text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Search size={18} />
              Buscar prestador
            </button>
          </div>

          {/* Right column — prestador CTA */}
          <div className="bg-[#2A9D8F] rounded-xl p-6 text-white">
            <h3 className="text-xl font-bold mb-2">¿Sos prestador?</h3>
            <p className="text-white/90 mb-4">
              Sumate y conseguí más trabajos en barrios privados de tu zona.
            </p>
            <Link
              href="/prestadores/registro"
              className="inline-block bg-white text-[#2A9D8F] font-semibold px-5 py-2.5 rounded-lg hover:bg-white/90 transition-colors"
            >
              Quiero sumarme &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
