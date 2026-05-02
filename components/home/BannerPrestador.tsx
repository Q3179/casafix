import Link from 'next/link';

export function BannerPrestador() {
  return (
    <section className="bg-[#1E3A5F] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">
          ¿Sos prestador? Sumate a CasaFix
        </h2>
        <p className="text-white/80 mb-6">
          Recibí pedidos de barrios privados de tu zona.
        </p>
        <Link
          href="/prestadores/registro"
          className="inline-block bg-cf-accent text-white rounded-lg px-6 py-3 font-semibold hover:bg-cf-accent-dark transition-colors"
        >
          Quiero sumarme &rarr;
        </Link>
      </div>
    </section>
  );
}
