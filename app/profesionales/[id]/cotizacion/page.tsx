'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import {
  profesionales,
  SERVICIO_LABELS,
} from '@/lib/data/profesionales';

interface FormData {
  nombre: string;
  email: string;
  whatsapp: string;
  tipoCliente: string;
  servicio: string;
  zona: string;
  descripcion: string;
  plazo: string;
}

export default function CotizacionPage() {
  const params = useParams();
  const profesionalId =
    typeof params.id === 'string' ? params.id : params.id?.[0] ?? '';
  const profesional = profesionales.find((p) => p.id === profesionalId);

  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    whatsapp: '',
    tipoCliente: 'propietario',
    servicio: '',
    zona: '',
    descripcion: '',
    plazo: '1-2-semanas',
  });
  const [enviado, setEnviado] = useState(false);

  if (!profesional) {
    return (
      <div className="bg-cf-bg min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-lg text-center">
          <h1 className="text-2xl font-semibold text-cf-text mb-3">
            Profesional no encontrado
          </h1>
          <p className="text-cf-text-light mb-6">
            El profesional que buscás no está disponible o el link es incorrecto.
          </p>
          <Link
            href="/profesionales"
            className="inline-block px-6 py-3 bg-cf-primary text-white rounded-md font-medium hover:bg-cf-primary-dark transition-colors"
          >
            Ver catálogo de profesionales
          </Link>
        </div>
      </div>
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // En el MVP esto va a Supabase. Por ahora solo simula el envío.
    // eslint-disable-next-line no-console
    console.log('Cotización solicitada:', {
      profesionalId: profesional!.id,
      ...formData,
    });
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div className="bg-cf-bg min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle2 size={64} className="text-[#2A9D8F]" />
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold text-cf-text mb-3">
            Cotización enviada a {profesional.nombre}
          </h1>
          <p className="text-base text-cf-text/80 mb-8 leading-relaxed">
            {profesional.nombre} recibió tu solicitud y se va a contactar dentro
            de las próximas 24 horas hábiles. Te avisamos por email y WhatsApp
            cuando responda.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/profesionales"
              className="inline-block px-6 py-3 bg-cf-primary text-white rounded-md font-medium hover:bg-cf-primary-dark transition-colors"
            >
              Volver al catálogo
            </Link>
            <Link
              href="/"
              className="inline-block px-6 py-3 border border-cf-border text-cf-text rounded-md font-medium hover:bg-cf-section-cream transition-colors"
            >
              Ir al inicio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cf-bg min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href={`/profesionales/${profesional.id}`}
          className="text-sm text-cf-primary hover:underline"
        >
          ← Volver al perfil
        </Link>
        <h1 className="text-2xl md:text-3xl font-semibold text-cf-text mt-4 mb-2">
          Solicitar cotización
        </h1>
        <p className="text-base text-cf-text-light mb-8">
          A: <span className="font-medium text-cf-text">{profesional.nombre}</span>
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-white rounded-xl border border-cf-border p-6"
        >
          <div>
            <label
              htmlFor="cot-nombre"
              className="block text-sm font-medium text-cf-text mb-1"
            >
              Nombre completo *
            </label>
            <input
              id="cot-nombre"
              type="text"
              required
              value={formData.nombre}
              onChange={(e) =>
                setFormData({ ...formData, nombre: e.target.value })
              }
              className="w-full px-3 py-2 border border-cf-border rounded-md outline-none focus:border-cf-primary"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="cot-email"
                className="block text-sm font-medium text-cf-text mb-1"
              >
                Email *
              </label>
              <input
                id="cot-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-3 py-2 border border-cf-border rounded-md outline-none focus:border-cf-primary"
              />
            </div>
            <div>
              <label
                htmlFor="cot-whatsapp"
                className="block text-sm font-medium text-cf-text mb-1"
              >
                WhatsApp *
              </label>
              <input
                id="cot-whatsapp"
                type="tel"
                required
                placeholder="+54 9 11 5555-1234"
                value={formData.whatsapp}
                onChange={(e) =>
                  setFormData({ ...formData, whatsapp: e.target.value })
                }
                className="w-full px-3 py-2 border border-cf-border rounded-md outline-none focus:border-cf-primary"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="cot-tipo"
              className="block text-sm font-medium text-cf-text mb-1"
            >
              ¿Cómo te describirías? *
            </label>
            <select
              id="cot-tipo"
              required
              value={formData.tipoCliente}
              onChange={(e) =>
                setFormData({ ...formData, tipoCliente: e.target.value })
              }
              className="w-full px-3 py-2 border border-cf-border rounded-md bg-white outline-none focus:border-cf-primary"
            >
              <option value="propietario">Propietario individual</option>
              <option value="inmobiliaria">Inmobiliaria</option>
              <option value="constructora">Constructora</option>
              <option value="mmo">Maestro mayor de obra</option>
              <option value="arquitecto">Arquitecto</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="cot-servicio"
              className="block text-sm font-medium text-cf-text mb-1"
            >
              ¿Qué servicio necesitás? *
            </label>
            <select
              id="cot-servicio"
              required
              value={formData.servicio}
              onChange={(e) =>
                setFormData({ ...formData, servicio: e.target.value })
              }
              className="w-full px-3 py-2 border border-cf-border rounded-md bg-white outline-none focus:border-cf-primary"
            >
              <option value="">Elegí un servicio</option>
              {profesional.servicios.map((s) => (
                <option key={s} value={s}>
                  {SERVICIO_LABELS[s]}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="cot-zona"
              className="block text-sm font-medium text-cf-text mb-1"
            >
              Zona / dirección de la obra *
            </label>
            <input
              id="cot-zona"
              type="text"
              required
              placeholder="Ej: Pilar del Este, barrio San Sebastián"
              value={formData.zona}
              onChange={(e) =>
                setFormData({ ...formData, zona: e.target.value })
              }
              className="w-full px-3 py-2 border border-cf-border rounded-md outline-none focus:border-cf-primary"
            />
          </div>

          <div>
            <label
              htmlFor="cot-descripcion"
              className="block text-sm font-medium text-cf-text mb-1"
            >
              Descripción del trabajo *
            </label>
            <textarea
              id="cot-descripcion"
              required
              rows={5}
              placeholder="Contanos qué necesitás. A más detalle, más precisa va a ser la cotización."
              value={formData.descripcion}
              onChange={(e) =>
                setFormData({ ...formData, descripcion: e.target.value })
              }
              className="w-full px-3 py-2 border border-cf-border rounded-md outline-none focus:border-cf-primary resize-none"
            />
          </div>

          <div>
            <label
              htmlFor="cot-plazo"
              className="block text-sm font-medium text-cf-text mb-1"
            >
              ¿Para cuándo lo necesitás?
            </label>
            <select
              id="cot-plazo"
              value={formData.plazo}
              onChange={(e) =>
                setFormData({ ...formData, plazo: e.target.value })
              }
              className="w-full px-3 py-2 border border-cf-border rounded-md bg-white outline-none focus:border-cf-primary"
            >
              <option value="urgente">Urgente, en los próximos días</option>
              <option value="1-2-semanas">En 1 a 2 semanas</option>
              <option value="1-mes">En el próximo mes</option>
              <option value="planificacion">Estoy planificando, sin apuro</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-cf-primary text-white rounded-md font-semibold hover:bg-cf-primary-dark transition-colors"
          >
            Enviar solicitud de cotización
          </button>

          <p className="text-xs text-cf-text-muted text-center">
            Al enviar este formulario, {profesional.nombre} recibe una notificación
            con tu pedido. Tu información sólo se usa para que puedan contactarte.
          </p>
        </form>
      </div>
    </div>
  );
}
