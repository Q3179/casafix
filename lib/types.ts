export interface Servicio {
  nombre: string;
  precio: string;
}

export interface Documentacion {
  antecedentes: { verificado: boolean; fecha: string };
  art: { activa: boolean; aseguradora: string };
  dniCuit: boolean;
  referencias: boolean;
}

export interface Resena {
  id: string;
  autor: string;
  iniciales: string;
  fecha: string;
  texto: string;
  rating: number;
}

export interface Prestador {
  id: string;
  nombre: string;
  iniciales: string;
  avatarColor: string;
  oficio: string;
  categoria: string;
  trabajos: number;
  rating: number;
  zonas: string[];
  precioDesde: number;
  comparacionMercado: number;
  badges: ('verificado' | 'top')[];
  sobreMi: string;
  servicios: Servicio[];
  resenas: Resena[];
  documentacion: Documentacion;
}

export interface CategoriaOficio {
  slug: string;
  nombre: string;
  descripcion: string;
}

export interface Reserva {
  id: string;
  prestadorId: string;
  descripcion: string;
  direccion: string;
  fechaHora: string;
  fotoAntes: string;
  metodoPago: 'tarjeta' | 'transferencia' | 'mercadopago';
  total: number;
  estado: 'pendiente' | 'confirmada' | 'completada';
}

export interface User {
  id: string;
  email: string;
  nombre: string;
}
