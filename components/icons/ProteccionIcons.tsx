import type { FC } from 'react';

interface IconProps {
  size?: number;
}

export const ArtVigenteIcon: FC<IconProps> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M24 4 L6 14 L6 24 C6 35 14 44 24 48 C34 44 42 35 42 24 L42 14 Z" fill="#1E3A5F" />
    <path d="M18 24 L22 28 L30 20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const AntecedentesIcon: FC<IconProps> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="10" y="4" width="22" height="30" rx="2" fill="#1E3A5F" />
    <line x1="16" y1="12" x2="26" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <line x1="16" y1="18" x2="26" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <line x1="16" y1="24" x2="22" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <circle cx="34" cy="34" r="10" fill="#5A8DBF" />
    <circle cx="34" cy="34" r="6" stroke="white" strokeWidth="2" fill="none" />
    <line x1="38" y1="38" x2="43" y2="43" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const PagoProtegidoIcon: FC<IconProps> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="10" y="20" width="28" height="22" rx="3" fill="#1E3A5F" />
    <path d="M16 20 L16 14 C16 8 20 4 24 4 C28 4 32 8 32 14 L32 20" stroke="#1E3A5F" strokeWidth="3" fill="none" strokeLinecap="round" />
    <text x="24" y="36" textAnchor="middle" fill="#F4A261" fontSize="14" fontWeight="bold">$</text>
  </svg>
);

export const MediacionIcon: FC<IconProps> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="14" cy="14" r="6" fill="#1E3A5F" />
    <path d="M6 30 C6 24 10 20 14 20 C18 20 22 24 22 30" fill="#1E3A5F" />
    <circle cx="34" cy="14" r="6" fill="#5A8DBF" />
    <path d="M26 30 C26 24 30 20 34 20 C38 20 42 24 42 30" fill="#5A8DBF" />
    <path d="M18 36 L30 36" stroke="#F4A261" strokeWidth="3" strokeLinecap="round" />
    <path d="M26 32 L30 36 L26 40" stroke="#F4A261" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M22 32 L18 36 L22 40" stroke="#F4A261" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const PROTECCION_ICON_MAP: Record<string, FC<IconProps>> = {
  art: ArtVigenteIcon,
  antecedentes: AntecedentesIcon,
  pago: PagoProtegidoIcon,
  mediacion: MediacionIcon,
};
