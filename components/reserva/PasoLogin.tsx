'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuthStore } from '@/lib/store';

const schema = z.object({
  email: z.string().email('Ingresá un email válido.'),
  password: z.string().min(1, 'Ingresá una contraseña.'),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onNext: () => void;
}

export function PasoLogin({ onNext }: Props) {
  const { isAuthenticated, login } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: FormData) {
    login(data.email);
    onNext();
  }

  if (isAuthenticated) {
    onNext();
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="bg-cf-section-cream rounded-lg p-4">
        <p className="text-sm text-cf-text">
          Para confirmar tu reserva necesitamos crear tu cuenta.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-cf-primary mb-1">
            Email
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="tu@email.com"
            className="w-full rounded-lg border border-cf-border px-4 py-3 text-sm outline-none focus:border-cf-primary"
          />
          {errors.email && (
            <p className="text-xs text-[#E76F51] mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-cf-primary mb-1">
            Contraseña
          </label>
          <input
            {...register('password')}
            type="password"
            placeholder="Tu contraseña"
            className="w-full rounded-lg border border-cf-border px-4 py-3 text-sm outline-none focus:border-cf-primary"
          />
          {errors.password && (
            <p className="text-xs text-[#E76F51] mt-1">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-cf-primary text-white rounded-lg py-3 font-semibold hover:bg-cf-primary-dark transition-colors"
        >
          Crear cuenta y continuar
        </button>
      </form>
    </div>
  );
}
