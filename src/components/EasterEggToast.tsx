import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WashiTape, HeartDoodle } from './decorations/ScrapbookDecorations';

interface EasterEggToastProps {
  message: string | null;
  onClose: () => void;
}

export const EasterEggToast: React.FC<EasterEggToastProps> = ({ message, onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 cursor-pointer"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 8 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[320px] bg-[#160812] border border-[#52172B] p-5 rounded-lg shadow-2xl deckled-paper text-center select-none cursor-default"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <WashiTape variant="crimson" rotation="-rotate-1" className="w-20 h-4" />
            </div>

            <div className="flex justify-between items-center mb-2 pt-1 border-b border-[#300E19] pb-1.5">
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#B86276]">
                secret note for Mansii ♡
              </span>
              <button
                onClick={onClose}
                className="min-h-[36px] min-w-[36px] -mr-1 flex items-center justify-end text-[11px] font-mono uppercase text-[#A86E7E] hover:text-[#FFCED8] cursor-pointer"
                aria-label="Close note"
              >
                [✕]
              </button>
            </div>

            <p className="font-handwriting text-xl xs:text-2xl text-[#FFA3B8] leading-snug my-3 px-1">
              “{message}”
            </p>

            <div className="flex items-center justify-between text-[10px] font-mono text-[#A86E7E] pt-2 border-t border-dashed border-[#381120]">
              <span className="font-handwriting text-sm text-[#E0657C]">from Aditya</span>
              <HeartDoodle size={14} color="#C42340" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
