import type { FC } from 'react';

interface IconProps {
  size?: number;
}

export const PlomeriaIcon: FC<IconProps> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="20" y="4" width="8" height="6" rx="1" fill="#1E3A5F" />
    <rect x="14" y="10" width="20" height="6" fill="#5A8DBF" stroke="#1E3A5F" strokeWidth="1" />
    <rect x="22" y="16" width="4" height="8" fill="#5A8DBF" />
    <rect x="18" y="24" width="12" height="4" rx="1" fill="#1E3A5F" />
    <path d="M22 28 L22 34 L26 34 L26 28" fill="#5A8DBF" />
    <ellipse cx="24" cy="42" rx="3" ry="4" fill="#F4A261" />
  </svg>
);

export const ElectricidadIcon: FC<IconProps> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M24 4 L18 22 L22 22 L18 38 L34 18 L28 18 L34 4 Z" fill="#F4A261" stroke="#1E3A5F" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

export const GasCaldereIcon: FC<IconProps> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M24 8 Q34 16 34 26 Q34 38 24 42 Q14 38 14 26 Q14 16 24 8 Z" fill="#F4A261" />
    <path d="M24 16 Q30 22 30 28 Q30 34 24 36 Q18 34 18 28 Q18 22 24 16 Z" fill="#FFD9B0" />
  </svg>
);

export const AireAcondicionadoIcon: FC<IconProps> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="14" width="36" height="14" rx="3" fill="#5A8DBF" stroke="#1E3A5F" strokeWidth="1.5" />
    <line x1="14" y1="20" x2="14" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <line x1="22" y1="20" x2="22" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <line x1="30" y1="20" x2="30" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 32 Q14 36 16 38" stroke="#5A8DBF" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M24 32 Q22 36 24 38" stroke="#5A8DBF" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M32 32 Q30 36 32 38" stroke="#5A8DBF" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

export const PinturaIcon: FC<IconProps> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="14" y="6" width="22" height="10" rx="2" fill="#1E3A5F" transform="rotate(35 25 11)" />
    <rect x="14" y="6" width="14" height="6" rx="1" fill="#F4A261" transform="rotate(35 21 9)" />
    <line x1="20" y1="22" x2="10" y2="38" stroke="#1E3A5F" strokeWidth="3" strokeLinecap="round" />
    <circle cx="9" cy="40" r="3" fill="#F4A261" />
  </svg>
);

export const AlbanileriaIcon: FC<IconProps> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="6" y="22" width="12" height="8" fill="#C97B4A" />
    <rect x="18" y="14" width="12" height="8" fill="#E89860" />
    <rect x="30" y="22" width="12" height="8" fill="#C97B4A" />
    <rect x="6" y="30" width="12" height="8" fill="#E89860" />
    <rect x="18" y="22" width="12" height="8" fill="#C97B4A" />
    <rect x="30" y="30" width="12" height="8" fill="#E89860" />
    <rect x="6" y="22" width="36" height="16" stroke="#1E3A5F" strokeWidth="1.5" fill="none" />
  </svg>
);

export const JardineriaIcon: FC<IconProps> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="36" rx="10" ry="3" fill="#1E3A5F" opacity="0.2" />
    <path d="M24 6 L14 22 Q12 30 18 32 Q22 32 24 28 Q26 32 30 32 Q36 30 34 22 Z" fill="#2A9D8F" />
    <line x1="24" y1="32" x2="24" y2="42" stroke="#5A4A3A" strokeWidth="2.5" />
  </svg>
);

export const PiletaIcon: FC<IconProps> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M8 14 Q14 8 24 8 Q34 8 40 14 L40 36 Q40 40 36 40 L12 40 Q8 40 8 36 Z" fill="#5A8DBF" stroke="#1E3A5F" strokeWidth="1.5" />
    <path d="M10 22 Q14 20 18 22 Q22 24 26 22 Q30 20 34 22 Q38 24 40 22" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M10 30 Q14 28 18 30 Q22 32 26 30 Q30 28 34 30 Q38 32 40 30" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

export const LimpiezaTanqueIcon: FC<IconProps> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="22" rx="12" ry="14" fill="#5A8DBF" />
    <path d="M14 18 Q24 14 34 18" stroke="#1E3A5F" strokeWidth="1.5" fill="none" />
    <rect x="22" y="36" width="4" height="6" fill="#1E3A5F" />
    <ellipse cx="24" cy="42" rx="8" ry="2" fill="#1E3A5F" />
  </svg>
);

export const PlagasIcon: FC<IconProps> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="26" rx="10" ry="12" fill="#7A5A3A" />
    <ellipse cx="24" cy="22" rx="10" ry="12" fill="#A07A4A" />
    <line x1="14" y1="14" x2="10" y2="8" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />
    <line x1="34" y1="14" x2="38" y2="8" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />
    <line x1="14" y1="22" x2="6" y2="22" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />
    <line x1="34" y1="22" x2="42" y2="22" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />
    <circle cx="20" cy="20" r="1.5" fill="#1E3A5F" />
    <circle cx="28" cy="20" r="1.5" fill="#1E3A5F" />
  </svg>
);

export const CATEGORIA_ICON_MAP: Record<string, FC<IconProps>> = {
  plomeria: PlomeriaIcon,
  electricidad: ElectricidadIcon,
  'gas-caldera': GasCaldereIcon,
  'aire-acondicionado': AireAcondicionadoIcon,
  pintura: PinturaIcon,
  albanileria: AlbanileriaIcon,
  jardineria: JardineriaIcon,
  pileta: PiletaIcon,
  'limpieza-tanque': LimpiezaTanqueIcon,
  plagas: PlagasIcon,
};
