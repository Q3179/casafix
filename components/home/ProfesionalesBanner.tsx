import Link from 'next/link';

export function ProfesionalesBanner() {
  return (
    <section className="my-16 px-4">
      <div className="max-w-6xl mx-auto bg-cf-section-cream border border-cf-border rounded-xl p-8 md:p-10">
        <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <span className="inline-block text-xs font-medium text-cf-primary uppercase tracking-wider mb-2">
              Para profesionales
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-cf-text mb-3">
              ¿Sos inmobiliaria, constructora o arquitecto?
            </h2>
            <p className="text-base text-cf-text/80 max-w-2xl">
              Centralizá los servicios de tu cartera o de tu obra con prestadores
              verificados, presupuestos por escrito y facturación consolidada.
            </p>
          </div>
          <div className="flex md:justify-end">
            <Link
              href="/profesionales"
              className="inline-flex items-center gap-2 bg-cf-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-cf-primary-dark transition-colors"
            >
              Ver propuesta para profesionales →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
