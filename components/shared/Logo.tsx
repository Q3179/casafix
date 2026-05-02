import type { FC } from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

export const Logo: FC<LogoProps> = ({ size = 40, className }) => (
  <div className={`flex items-center gap-2 ${className ?? ''}`}>
    <svg width={size} height={size} viewBox="0 0 80 80" aria-hidden="true">
      <defs>
        <mask id="logoMask">
          <rect width="80" height="80" fill="white" />
          <circle cx="62" cy="40" r="11" fill="black" />
        </mask>
      </defs>
      <path
        d="M12 34 L40 12 L68 34 L68 64 Q68 68 64 68 L16 68 Q12 68 12 64 Z"
        fill="#1E3A5F"
        mask="url(#logoMask)"
      />
      <circle cx="62" cy="40" r="6" fill="#F4A261" />
    </svg>
    <span className="text-xl font-bold text-cf-primary">
      Casa<span className="text-cf-accent">Fix</span>
    </span>
  </div>
);
