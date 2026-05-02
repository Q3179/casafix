import { notFound } from 'next/navigation';
import { PRESTADORES_MOCK } from '@/lib/mock-data';
import { PrestadorPerfil } from '@/components/prestadores/PrestadorPerfil';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const prestador = PRESTADORES_MOCK.find((p) => p.id === id);
  return {
    title: prestador
      ? `${prestador.nombre} — ${prestador.oficio} | CasaFix`
      : 'Prestador | CasaFix',
    description: prestador?.sobreMi ?? 'Perfil de prestador en CasaFix.',
  };
}

export default async function PerfilPage({ params }: Props) {
  const { id } = await params;
  const prestador = PRESTADORES_MOCK.find((p) => p.id === id);

  if (!prestador) {
    notFound();
  }

  return <PrestadorPerfil prestador={prestador} />;
}
