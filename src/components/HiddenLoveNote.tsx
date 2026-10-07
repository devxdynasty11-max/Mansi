import React from 'react';

interface HiddenLoveNoteProps {
  label: string;
  message: string;
  onOpen: (message: string) => void;
  className?: string;
}

export const HiddenLoveNote: React.FC<HiddenLoveNoteProps> = ({
  label,
  message,
  onOpen,
  className = '',
}) => {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onOpen(message);
      }}
      className={`group inline-flex items-center gap-1 cursor-pointer select-none font-handwriting text-xs sm:text-sm text-[#D87085]/80 hover:text-[#FFB6C6] active:scale-95 transition-all duration-200 py-0.5 px-2 rounded-sm hover:bg-[#3A0D18]/30 min-h-[36px] touch-manipulation focus:outline-hidden ${className}`}
      title="a little secret ♡"
      aria-label="hidden love note"
    >
      <span className="tracking-wide underline decoration-dotted decoration-[#A64055]/50 group-hover:decoration-[#FF8DA5]">
        {label}
      </span>
      <span className="text-[10px] text-[#C42340]/70 group-hover:text-[#FF6B8B] transition-colors">
        ♡
      </span>
    </button>
  );
};
