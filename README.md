# CasaFix

Marketplace de servicios para el hogar enfocado en barrios privados de Pilar y GBA Norte (Argentina). Prestadores verificados, precios claros y protección en cada contratación.

## Stack

- **Framework:** Next.js 15 (App Router) + TypeScript estricto
- **Styling:** Tailwind CSS 4 + shadcn/ui
- **Database:** Preparado para Supabase (mock con datos locales)
- **Auth:** Stub local (login simulado en estado React)
- **Estado global:** Zustand
- **Forms:** React Hook Form + Zod
- **Notificaciones:** Sonner (toasts)
- **Iconos:** SVGs custom + lucide-react
- **Tipografía:** Inter (Google Fonts)

## Instalación

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Servidor de producción |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript type checking |

## Variables de entorno

Copiar `.env.local.example` a `.env.local`. Todas son opcionales por ahora (la app funciona con mock data).

| Variable | Descripción |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | URL del proyecto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Anon key de Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key (server-side) |
| `RESEND_API_KEY` | API key de Resend (emails) |
| `MP_ACCESS_TOKEN` | Access token de Mercado Pago |
| `MP_PUBLIC_KEY` | Public key de Mercado Pago |

## Estructura de carpetas

```
casafix/
├── app/                          # App Router pages
│   ├── page.tsx                  # Home
│   ├── prestadores/
│   │   ├── [categoria]/          # Listado por categoría
│   │   ├── perfil/[id]/          # Perfil prestador
│   │   └── registro/             # Stub: onboarding prestadores
│   ├── reservar/[prestadorId]/   # Flujo de reserva (4 pasos)
│   ├── reserva-confirmada/[id]/  # Confirmación
│   ├── proteccion/               # Página Protección CasaFix
│   ├── empresas/                 # Stub: plan administraciones
│   ├── mis-reservas/             # Stub: historial
│   └── api/                      # API routes (mock)
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── home/                     # Secciones del home
│   ├── prestadores/              # Cards, perfil, filtros
│   ├── reserva/                  # Pasos del flujo de reserva
│   ├── chatbot/                  # Widget flotante
│   ├── shared/                   # Navbar, Footer, Logo
│   └── icons/                    # SVGs custom de categorías y protección
├── lib/
│   ├── mock-data.ts              # Prestadores y categorías mock
│   ├── store.ts                  # Zustand stores (auth + reserva)
│   ├── types.ts                  # TypeScript types
│   ├── supabase.ts               # Cliente Supabase (preparado)
│   └── env.ts                    # Validación de env vars con Zod
└── public/
    └── uploads/                  # Placeholder para fotos
```

## Próximos pasos para conectar Supabase

1. Crear proyecto en [supabase.com](https://supabase.com)
2. Copiar URL y keys al `.env.local`
3. Descomentar el cliente en `lib/supabase.ts`
4. Crear tablas: `prestadores`, `reservas`, `resenas`, `usuarios`
5. Migrar los datos mock a la base de datos
6. Configurar Supabase Auth (email/password)
7. Configurar Supabase Storage para fotos

## Features del MVP

- Home con todas las secciones (hero, categorías, prestadores destacados, cómo funciona, protección, consorcios)
- Listado de prestadores por categoría con filtros
- Perfil de prestador con reseñas y documentación verificada
- Flujo de reserva end-to-end (4 pasos)
- Chatbot flotante con respuestas mock
- Páginas stub para features futuros
- API routes mock

## Licencia

Privado - Todos los derechos reservados.
