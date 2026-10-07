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
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-4 inset-x-3.5 xs:inset-x-auto xs:right-6 xs:bottom-6 z-50 xs:max-w-xs"
        >
          <div className="relative bg-[#180A12] border border-[#4A1627] p-3.5 xs:p-4 rounded-md shadow-2xl deckled-paper">
            <div className="absolute -top-2.5 left-6">
              <WashiTape variant="crimson" rotation="-rotate-2" className="w-16 h-3.5" />
            </div>

            <div className="flex justify-between items-center mb-0.5">
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#B86276]">
                Secret Note Found
              </span>
              <button
                onClick={onClose}
                className="min-h-[44px] min-w-[44px] -mr-2 -mt-1 flex items-center justify-end text-[11px] font-mono uppercase text-[#A86E7E] hover:text-[#FFCED8] cursor-pointer"
                aria-label="Close note"
              >
                [✕]
              </button>
            </div>

            <p className="font-handwriting text-lg xs:text-xl text-[#FF9EAF] leading-snug my-1.5">
              “{message}”
            </p>

            <div className="flex items-center justify-between text-[9px] xs:text-[10px] font-mono text-[#A86E7E] pt-1.5 border-t border-dashed border-[#381120]">
              <span>Aditya's secret note ♡</span>
              <HeartDoodle size={12} color="#C42340" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
