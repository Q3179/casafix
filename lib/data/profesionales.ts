// SUPUESTO: validar con encuesta a profesionales (mayo 2026)
// Los servicios que ofrece cada perfil son una hipótesis del equipo basada en
// cómo trabajan típicamente cada uno de estos roles en el mercado argentino.
// Pendiente de validación con encuesta dirigida.

export type TipoProfesional =
  | 'inmobiliaria'
  | 'constructora'
  | 'mmo'
  | 'arquitectura';

export type ServicioCategoria =
  | 'plomeria'
  | 'electricidad'
  | 'gas-caldera'
  | 'aire-acondicionado'
  | 'limpieza-tanque'
  | 'plagas'
  | 'pintura'
  | 'albanileria'
  | 'jardineria'
  | 'limpieza-profunda';

export interface Profesional {
  id: string;
  nombre: string;
  tipo: TipoProfesional;
  iniciales: string; // ej: "RE" para "Rivera Estate"
  ciudad: string;
  zonas: string[];
  servicios: ServicioCategoria[];
  trabajos: number;
  rating: number;
  verificado: boolean;
  whatsapp: string; // formato E.164 sin +, ej: "5491155551234"
  descripcion: string; // 1-2 líneas
  fundadoEn: number; // año de fundación
}

// Datos mockeados — SUPUESTO pendiente de validación
export const profesionales: Profesional[] = [
  // INMOBILIARIAS Y CONSTRUCTORAS
  {
    id: 'rivera-estate',
    nombre: 'Rivera Estate',
    tipo: 'inmobiliaria',
    iniciales: 'RE',
    ciudad: 'Pilar del Este',
    zonas: ['Pilar del Este', 'Pilar Centro'],
    servicios: [
      'plomeria',
      'electricidad',
      'gas-caldera',
      'aire-acondicionado',
      'pintura',
      'albanileria',
      'limpieza-profunda',
    ],
    trabajos: 142,
    rating: 4.8,
    verificado: true,
    whatsapp: '5491155550101',
    descripcion:
      'Inmobiliaria con cartera de 60 propiedades en alquiler en Pilar del Este. Centralizamos servicios de mantenimiento y entrega de propiedades.',
    fundadoEn: 2014,
  },
  {
    id: 'norte-construcciones',
    nombre: 'Norte Construcciones',
    tipo: 'constructora',
    iniciales: 'NC',
    ciudad: 'Tigre',
    zonas: ['Nordelta', 'Tigre', 'Escobar'],
    servicios: [
      'plomeria',
      'electricidad',
      'gas-caldera',
      'aire-acondicionado',
      'pintura',
      'albanileria',
      'limpieza-profunda',
    ],
    trabajos: 89,
    rating: 4.9,
    verificado: true,
    whatsapp: '5491155550102',
    descripcion:
      'Empresa constructora especializada en obra residencial en zona norte. Coordinación integral de cierre de obra.',
    fundadoEn: 2011,
  },
  {
    id: 'viviendas-pilar',
    nombre: 'Viviendas Pilar',
    tipo: 'inmobiliaria',
    iniciales: 'VP',
    ciudad: 'Pilar Centro',
    zonas: ['Pilar Centro', 'Pilar del Este'],
    servicios: ['plomeria', 'electricidad', 'pintura', 'limpieza-profunda'],
    trabajos: 76,
    rating: 4.7,
    verificado: true,
    whatsapp: '5491155550103',
    descripcion:
      'Administración de propiedades en alquiler temporario y permanente. Foco en mantenimiento preventivo.',
    fundadoEn: 2018,
  },

  // MAESTROS MAYORES DE OBRA (MMO)
  {
    id: 'mmo-fernandez',
    nombre: 'Carlos Fernández — MMO',
    tipo: 'mmo',
    iniciales: 'CF',
    ciudad: 'Pilar del Este',
    zonas: ['Pilar del Este', 'Pilar Centro', 'Escobar'],
    servicios: [
      'plomeria',
      'electricidad',
      'gas-caldera',
      'albanileria',
      'pintura',
    ],
    trabajos: 54,
    rating: 4.8,
    verificado: true,
    whatsapp: '5491155550104',
    descripcion:
      'Maestro mayor de obra con 18 años de experiencia. Dirección de obra propia y subcontratación de oficios técnicos.',
    fundadoEn: 2008,
  },
  {
    id: 'mmo-suarez',
    nombre: 'Suárez Obras',
    tipo: 'mmo',
    iniciales: 'SO',
    ciudad: 'Tigre',
    zonas: ['Nordelta', 'Tigre'],
    servicios: [
      'plomeria',
      'electricidad',
      'gas-caldera',
      'albanileria',
      'pintura',
    ],
    trabajos: 41,
    rating: 4.6,
    verificado: true,
    whatsapp: '5491155550105',
    descripcion:
      'Equipo de obra liderado por maestro mayor de obra matriculado. 4 a 6 obras simultáneas en barrios privados.',
    fundadoEn: 2015,
  },

  // ARQUITECTURA
  {
    id: 'estudio-mendez',
    nombre: 'Estudio Méndez Arquitectura',
    tipo: 'arquitectura',
    iniciales: 'EM',
    ciudad: 'Nordelta',
    zonas: ['Nordelta', 'Tigre', 'Pilar del Este'],
    servicios: [
      'plomeria',
      'electricidad',
      'gas-caldera',
      'aire-acondicionado',
      'pintura',
      'albanileria',
      'jardineria',
    ],
    trabajos: 32,
    rating: 5.0,
    verificado: true,
    whatsapp: '5491155550106',
    descripcion:
      'Estudio de arquitectura con foco en obra residencial premium. Dirección de obra y cierre técnico llave en mano.',
    fundadoEn: 2016,
  },
  {
    id: 'arq-iturria',
    nombre: 'Iturria + Asociados',
    tipo: 'arquitectura',
    iniciales: 'IA',
    ciudad: 'Pilar del Este',
    zonas: ['Pilar del Este', 'Pilar Centro'],
    servicios: [
      'plomeria',
      'electricidad',
      'gas-caldera',
      'aire-acondicionado',
      'pintura',
      'jardineria',
    ],
    trabajos: 28,
    rating: 4.9,
    verificado: true,
    whatsapp: '5491155550107',
    descripcion:
      'Arquitectos matriculados en CAPBA Distrito IV. Especialistas en cierre de obra residencial y parquización.',
    fundadoEn: 2019,
  },
];

// Helper: obtener label legible de cada categoría
export const SERVICIO_LABELS: Record<ServicioCategoria, string> = {
  plomeria: 'Plomería',
  electricidad: 'Electricidad',
  'gas-caldera': 'Gas y caldera',
  'aire-acondicionado': 'Aire acondicionado',
  'limpieza-tanque': 'Limpieza de tanque',
  plagas: 'Control de plagas',
  pintura: 'Pintura',
  albanileria: 'Albañilería',
  jardineria: 'Jardinería',
  'limpieza-profunda': 'Limpieza profunda',
};

export const TIPO_PROFESIONAL_LABELS: Record<TipoProfesional, string> = {
  inmobiliaria: 'Inmobiliaria',
  constructora: 'Constructora',
  mmo: 'Maestro Mayor de Obra',
  arquitectura: 'Estudio de arquitectura',
};
