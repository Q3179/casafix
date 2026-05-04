'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

const NAV_LINKS = [
  { href: '/prestadores/plomeria', label: 'Servicios' },
  { href: '/profesionales', label: 'Profesionales' },
  { href: '/#como-funciona', label: 'Cómo funciona' },
  { href: '/proteccion', label: 'Protección' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-cf-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" aria-label="CasaFix inicio">
            <Logo size={36} />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-cf-text-light hover:text-cf-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/prestadores/registro"
              className="text-sm font-medium text-cf-accent hover:text-cf-accent-dark transition-colors"
            >
              Soy prestador
            </Link>
            <Link
              href="#"
              className="rounded-lg border border-cf-primary px-4 py-2 text-sm font-medium text-cf-primary hover:bg-cf-primary hover:text-white transition-colors"
            >
              Ingresar
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-cf-border py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-cf-text-light hover:text-cf-primary px-2 py-1"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-cf-border pt-3 flex flex-col gap-2 px-2">
              <Link
                href="/prestadores/registro"
                className="text-sm font-medium text-cf-accent"
                onClick={() => setMobileOpen(false)}
              >
                Soy prestador
              </Link>
              <Link
                href="#"
                className="rounded-lg border border-cf-primary px-4 py-2 text-sm font-medium text-cf-primary text-center"
                onClick={() => setMobileOpen(false)}
              >
                Ingresar
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
