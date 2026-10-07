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
          className="fixed bottom-6 right-6 z-50 max-w-xs"
        >
          <div className="relative bg-[#180A12] border border-[#4A1627] p-4 rounded-md shadow-2xl deckled-paper">
            <div className="absolute -top-2.5 left-6">
              <WashiTape variant="crimson" rotation="-rotate-2" className="w-16 h-3.5" />
            </div>

            <div className="flex justify-between items-center mb-1 pt-1">
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#B86276]">
                Secret Note Found
              </span>
              <button
                onClick={onClose}
                className="text-[10px] font-mono uppercase text-[#A86E7E] hover:text-[#FFCED8] cursor-pointer"
              >
                [✕]
              </button>
            </div>

            <p className="font-handwriting text-xl text-[#FF9EAF] leading-snug my-2">
              “{message}”
            </p>

            <div className="flex items-center justify-between text-[10px] font-mono text-[#A86E7E] pt-1 border-t border-dashed border-[#381120]">
              <span>Aditya's secret note ♡</span>
              <HeartDoodle size={12} color="#C42340" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
