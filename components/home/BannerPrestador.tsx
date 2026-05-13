import Link from 'next/link';
import { Wallet, MapPin, Handshake } from 'lucide-react';

const PUNTOS = [
  {
    icon: Wallet,
    titulo: 'Cobrás cuando el cliente confirma',
    descripcion:
      'El pago queda retenido en la plataforma hasta que confirma que el trabajo está bien hecho.',
  },
  {
    icon: MapPin,
    titulo: 'Trabajos cerca tuyo',
    descripcion:
      'Pedidos verificados en barrios privados de zona norte del GBA, con dirección clara y alcance definido.',
  },
  {
    icon: Handshake,
    titulo: 'Acompañamiento si algo falla',
    descripcion:
      'Si hay un desacuerdo con el cliente, intervenimos para mediar entre las partes.',
  },
];

export function BannerPrestador() {
  return (
    <section className="bg-[#1E3A5F] py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            ¿Sos prestador? Sumate a CasaFix
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Una plataforma pensada para que trabajes con respaldo en barrios
            privados de zona norte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {PUNTOS.map((p) => (
            <div
              key={p.titulo}
              className="bg-white/5 border border-white/10 rounded-xl p-5 text-left"
            >
              <div className="w-10 h-10 bg-[#F4A261]/20 rounded-lg flex items-center justify-center mb-3">
                <p.icon size={20} className="text-[#F4A261]" />
              </div>
              <h3 className="font-semibold text-white mb-1">{p.titulo}</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {p.descripcion}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/prestadores/registro"
            className="inline-block bg-cf-accent text-white rounded-lg px-6 py-3 font-semibold hover:bg-cf-accent-dark transition-colors"
          >
            Quiero sumarme &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
