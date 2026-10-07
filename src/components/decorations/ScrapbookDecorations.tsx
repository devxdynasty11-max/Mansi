import React from 'react';

export const WashiTape: React.FC<{
  className?: string;
  variant?: 'crimson' | 'charcoal' | 'wine';
  rotation?: string;
}> = ({ className = '', variant = 'crimson', rotation = '-rotate-1' }) => {
  const bgStyles = {
    crimson: 'bg-[#5A0E1B]/80 border-[#942036]/60 text-[#D84560]',
    charcoal: 'bg-[#1C1217]/85 border-[#452834]/60 text-[#A88B96]',
    wine: 'bg-[#3D0A14]/85 border-[#78192A]/60 text-[#E0657C]',
  };

  return (
    <div
      className={`h-5 w-24 border-y border-dashed shadow-sm backdrop-blur-[2px] pointer-events-none select-none z-10 ${bgStyles[variant]} ${rotation} ${className}`}
      style={{
        clipPath: 'polygon(3% 0%, 97% 2%, 100% 98%, 0% 96%)',
      }}
    />
  );
};

export const PressedFlowerSvg: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 32,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <path
      d="M50 85 C50 55, 48 35, 50 15"
      stroke="#3D2029"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M50 60 Q38 55, 34 45 C38 48, 48 56, 50 60"
      fill="#4A1E29"
      opacity="0.9"
    />
    <path
      d="M50 48 Q62 42, 65 32 C60 36, 52 44, 50 48"
      fill="#4A1E29"
      opacity="0.9"
    />
    {/* Dark velvet rose petals */}
    <ellipse cx="50" cy="22" rx="7" ry="14" fill="#6B0F20" opacity="0.9" transform="rotate(0 50 22)" />
    <ellipse cx="50" cy="22" rx="7" ry="14" fill="#91182E" opacity="0.85" transform="rotate(45 50 22)" />
    <ellipse cx="50" cy="22" rx="7" ry="14" fill="#540C19" opacity="0.95" transform="rotate(90 50 22)" />
    <ellipse cx="50" cy="22" rx="7" ry="14" fill="#91182E" opacity="0.85" transform="rotate(135 50 22)" />
    <circle cx="50" cy="22" r="4.5" fill="#C49B5B" />
  </svg>
);

export const PostageStampFrame: React.FC<{
  children: React.ReactNode;
  className?: string;
  label?: string;
}> = ({ children, className = '', label = 'Midnight' }) => (
  <div
    className={`relative p-2.5 bg-[#140A10] border border-[#3E1624] shadow-md ${className}`}
    style={{
      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.7)',
    }}
  >
    <div className="absolute top-1 right-2 text-[9px] uppercase tracking-widest font-mono text-[#9E6575]">
      {label}
    </div>
    <div className="p-1 border border-dashed border-[#521C2F]">{children}</div>
  </div>
);

export const PaperClipSvg: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    width="22"
    height="48"
    viewBox="0 0 24 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none drop-shadow-md ${className}`}
  >
    <path
      d="M12 4C7.5 4 4 7.5 4 12V42C4 47.5 8.5 52 14 52C19.5 52 24 47.5 24 42V15C24 11 20.5 7.5 16.5 7.5C12.5 7.5 9 11 9 15V38C9 40 10.5 41.5 12.5 41.5C14.5 41.5 16 40 16 38V17"
      stroke="#7A4E5C"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HeartDoodle: React.FC<{ className?: string; size?: number; color?: string }> = ({
  className = '',
  size = 20,
  color = '#B81D39',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 20.5C12 20.5 3 15 3 8.5C3 5.5 5.5 3 8.5 3C10.5 3 11.5 4.2 12 5C12.5 4.2 13.5 3 15.5 3C18.5 3 21 5.5 21 8.5C21 15 12 20.5 12 20.5Z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={color}
      fillOpacity="0.25"
    />
  </svg>
);
