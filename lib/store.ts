'use client';

import { create } from 'zustand';
import type { User, Reserva } from './types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (email: string) => {
    const nombre = email.split('@')[0] ?? 'Usuario';
    set({
      user: {
        id: crypto.randomUUID(),
        email,
        nombre: nombre.charAt(0).toUpperCase() + nombre.slice(1),
      },
      isAuthenticated: true,
    });
  },
  logout: () => set({ user: null, isAuthenticated: false }),
}));

interface ReservaState {
  reservaEnCurso: Partial<Reserva> | null;
  paso: number;
  setPaso: (paso: number) => void;
  setReservaData: (data: Partial<Reserva>) => void;
  resetReserva: () => void;
}

export const useReservaStore = create<ReservaState>((set) => ({
  reservaEnCurso: null,
  paso: 1,
  setPaso: (paso) => set({ paso }),
  setReservaData: (data) =>
    set((state) => ({
      reservaEnCurso: { ...state.reservaEnCurso, ...data },
    })),
  resetReserva: () => set({ reservaEnCurso: null, paso: 1 }),
}));
