import { Hero } from '@/components/home/Hero';
import { Categorias } from '@/components/home/Categorias';
import { PrestadoresDestacados } from '@/components/home/PrestadoresDestacados';
import { ProfesionalesBanner } from '@/components/home/ProfesionalesBanner';
import { ComoFunciona } from '@/components/home/ComoFunciona';
import { Proteccion } from '@/components/home/Proteccion';
import { AdminConsorcios } from '@/components/home/AdminConsorcios';
import { BannerPrestador } from '@/components/home/BannerPrestador';
import { ChatbotWidget } from '@/components/chatbot/ChatbotWidget';

export default function Home() {
  return (
    <>
      <Hero />
      <Categorias />
      <PrestadoresDestacados />
      <ProfesionalesBanner />
      <ComoFunciona />
      <Proteccion />
      <AdminConsorcios />
      <BannerPrestador />
      <ChatbotWidget />
    </>
  );
}
