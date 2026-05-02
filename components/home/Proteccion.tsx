import {
  ArtVigenteIcon,
  AntecedentesIcon,
  PagoProtegidoIcon,
  MediacionIcon,
} from '@/components/icons/ProteccionIcons';

const ITEMS = [
  {
    icon: ArtVigenteIcon,
    titulo: 'ART vigente',
    descripcion: 'Todos los prestadores cuentan con seguro de riesgo de trabajo activo.',
  },
  {
    icon: AntecedentesIcon,
    titulo: 'Antecedentes verificados',
    descripcion: 'Chequeamos antecedentes penales antes de aprobar a cada prestador.',
  },
  {
    icon: PagoProtegidoIcon,
    titulo: 'Pago protegido',
    descripcion: 'Tu dinero queda retenido hasta que confirmés que el trabajo está bien.',
  },
  {
    icon: MediacionIcon,
    titulo: 'Mediamos si algo falla',
    descripcion: 'Si hay un problema, intervenimos para encontrar una solución justa.',
  },
];

export function Proteccion() {
  return (
    <section className="bg-cf-section-cream py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold tracking-wider text-cf-accent uppercase mb-2">
          Protección CasaFix
        </p>
        <h2 className="text-3xl font-bold text-cf-primary mb-3">
          Mediamos, acompañamos y respondemos
        </h2>
        <p className="text-cf-text-light mb-10">
          Más control, menos riesgo en cada contratación.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map((item) => (
            <div
              key={item.titulo}
              className="bg-[#1E3A5F] rounded-xl p-6 text-white text-left"
            >
              <div className="mb-4">
                <item.icon size={48} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.titulo}</h3>
              <p className="text-sm text-white/80">{item.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
