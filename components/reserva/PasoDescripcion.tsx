'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Upload } from 'lucide-react';
import { useState } from 'react';

const schema = z.object({
  descripcion: z.string().min(10, 'Describí el trabajo en al menos 10 caracteres.'),
  direccion: z.string().min(3, 'Ingresá la dirección dentro del barrio.'),
  fechaHora: z.string().min(1, 'Elegí fecha y hora.'),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onNext: (data: FormData & { fotoAntes: string }) => void;
  defaultValues?: Partial<FormData>;
}

export function PasoDescripcion({ onNext, defaultValues }: Props) {
  const [fotoAntes, setFotoAntes] = useState<string>('');
  const [fotoError, setFotoError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setFotoAntes(`/uploads/${Date.now()}-${file.name}`);
      setFotoError('');
    }
  }

  function onSubmit(data: FormData) {
    if (!fotoAntes) {
      setFotoError('La foto antes es obligatoria.');
      return;
    }
    onNext({ ...data, fotoAntes });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-cf-primary mb-1">
          Descripción del trabajo
        </label>
        <textarea
          {...register('descripcion')}
          rows={4}
          placeholder="Describí qué necesitás que hagan..."
          className="w-full rounded-lg border border-cf-border px-4 py-3 text-sm outline-none focus:border-cf-primary resize-none"
        />
        {errors.descripcion && (
          <p className="text-xs text-[#E76F51] mt-1">{errors.descripcion.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-cf-primary mb-1">
          Foto antes (obligatoria)
        </label>
        <label className="flex flex-col items-center gap-2 border-2 border-dashed border-cf-border rounded-lg p-6 cursor-pointer hover:border-cf-primary transition-colors">
          <Upload size={24} className="text-cf-text-muted" />
          <span className="text-sm text-cf-text-muted">
            {fotoAntes ? 'Foto seleccionada' : 'Hacé click para subir una foto'}
          </span>
          <input
            type="file"
            accept="image/*"
            onChange={handleFile}
            className="hidden"
          />
        </label>
        {fotoError && <p className="text-xs text-[#E76F51] mt-1">{fotoError}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-cf-primary mb-1">
          Dirección dentro del barrio
        </label>
        <input
          {...register('direccion')}
          type="text"
          placeholder="Ej: Lote 45, calle Los Robles"
          className="w-full rounded-lg border border-cf-border px-4 py-3 text-sm outline-none focus:border-cf-primary"
        />
        {errors.direccion && (
          <p className="text-xs text-[#E76F51] mt-1">{errors.direccion.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-cf-primary mb-1">
          Fecha y hora preferida
        </label>
        <input
          {...register('fechaHora')}
          type="datetime-local"
          className="w-full rounded-lg border border-cf-border px-4 py-3 text-sm outline-none focus:border-cf-primary"
        />
        {errors.fechaHora && (
          <p className="text-xs text-[#E76F51] mt-1">{errors.fechaHora.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-cf-primary text-white rounded-lg py-3 font-semibold hover:bg-cf-primary-dark transition-colors"
      >
        Continuar
      </button>
    </form>
  );
}
