import { Camera, Users, CalendarDays, CheckCircle2 } from 'lucide-react';

const PASOS = [
  {
    numero: 1,
    icon: Camera,
    titulo: 'Describí lo que necesitás',
    descripcion: 'Foto antes obligatoria para iniciar el trabajo.',
  },
  {
    numero: 2,
    icon: Users,
    titulo: 'Elegí prestador',
    descripcion: 'Compará precios, reseñas y verificaciones.',
  },
  {
    numero: 3,
    icon: CalendarDays,
    titulo: 'Reservá fecha y hora',
    descripcion: 'Elegí el día y horario que te convenga.',
  },
  {
    numero: 4,
    icon: CheckCircle2,
    titulo: 'Foto después y pago liberado',
    descripcion: 'Mismo ángulo. El pago se libera cuando confirmás.',
  },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-cf-primary text-center mb-12">
          Reservá un servicio en 4 pasos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PASOS.map((paso) => (
            <div key={paso.numero} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-cf-accent text-white font-bold text-lg flex items-center justify-center mb-4">
                {paso.numero}
              </div>
              <paso.icon size={32} className="text-cf-primary mb-3" />
              <h3 className="font-semibold text-cf-text mb-2">{paso.titulo}</h3>
              <p className="text-sm text-cf-text-light">{paso.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
