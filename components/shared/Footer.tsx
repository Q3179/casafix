import Link from 'next/link';

const CATEGORIAS = [
  { href: '/prestadores/plomeria', label: 'Plomería' },
  { href: '/prestadores/electricidad', label: 'Electricidad' },
  { href: '/prestadores/gas-caldera', label: 'Gas y caldera' },
  { href: '/prestadores/pintura', label: 'Pintura' },
  { href: '/prestadores/jardineria', label: 'Jardinería' },
];

const EMPRESA = [
  { href: '/#como-funciona', label: 'Cómo funciona' },
  { href: '/proteccion', label: 'Protección' },
  { href: '/profesionales', label: 'Para profesionales' },
  { href: '/prestadores/registro', label: 'Para prestadores' },
  { href: '/administradores', label: 'Para administradores' },
];

export function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + descripción */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width={32} height={32} viewBox="0 0 80 80" aria-hidden="true">
                <defs>
                  <mask id="footerLogoMask">
                    <rect width="80" height="80" fill="white" />
                    <circle cx="62" cy="40" r="11" fill="black" />
                  </mask>
                </defs>
                <path
                  d="M12 34 L40 12 L68 34 L68 64 Q68 68 64 68 L16 68 Q12 68 12 64 Z"
                  fill="white"
                  mask="url(#footerLogoMask)"
                />
                <circle cx="62" cy="40" r="6" fill="#F4A261" />
              </svg>
              <span className="text-xl font-bold">
                Casa<span className="text-[#F4A261]">Fix</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Marketplace de servicios para el hogar. Prestadores verificados y precios claros para barrios privados del GBA Norte.
            </p>
          </div>

          {/* Categorías */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">Categorías</h3>
            <ul className="space-y-2">
              {CATEGORIAS.map((cat) => (
                <li key={cat.href}>
                  <Link href={cat.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">Empresa</h3>
            <ul className="space-y-2">
              {EMPRESA.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-400">WhatsApp: +54 11 5555-0000</li>
              <li className="text-sm text-gray-400">contacto@casafix.com.ar</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-500">&copy; 2026 CasaFix. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-300">Términos</Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-300">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
