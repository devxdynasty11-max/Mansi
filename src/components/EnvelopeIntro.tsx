import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HeartDoodle } from './decorations/ScrapbookDecorations';

interface EnvelopeIntroProps {
  onOpen: () => void;
}

export const EnvelopeIntro: React.FC<EnvelopeIntroProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleEnvelopeClick = () => {
    if (isOpen) return;
    setIsOpen(true);
    // After animation plays, trigger transition
    setTimeout(() => {
      onOpen();
    }, 1800);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 paper-texture overflow-hidden select-none">
      {/* Dark romance ambient candlelight glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-radial from-[#4A0D1B]/35 via-[#230811]/20 to-transparent blur-3xl" />
      </div>

      {/* Floating dark rose petals */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-tr from-[#5E0C1B] to-[#961930] opacity-50"
            style={{
              width: `${(i % 3) * 4 + 7}px`,
              height: `${(i % 3) * 6 + 10}px`,
              borderRadius: '60% 40% 70% 30% / 60% 30% 70% 40%',
              top: `${(i * 17) % 95}%`,
              left: `${(i * 23) % 92}%`,
            }}
            animate={{
              y: [0, -35, 0],
              x: [0, (i % 2 === 0 ? 10 : -10), 0],
              rotate: [0, 45, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 5 + (i % 3) * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-md w-full mx-auto text-center flex flex-col items-center">
        {/* Exact Opening Typography */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="mb-8 space-y-2.5"
        >
          <p className="font-handwriting text-base sm:text-lg text-[#C87588] tracking-wide">
            for my favourite person ♡
          </p>
          
          <h1 className="font-serif text-4xl sm:text-5xl text-[#F7EDE9] tracking-tight font-normal">
            Mansiiiii <span className="text-[#C42340] font-handwriting text-4xl">💗</span>
          </h1>

          <p className="text-sm sm:text-base text-[#D4B5C1] font-sans pt-1 leading-relaxed max-w-xs mx-auto">
            thoda sa time nikaal ke dekhna…
            <br />
            ye wala maine tumhare liye banaya hai 🥹
          </p>

          <p className="font-handwriting text-xs sm:text-sm text-[#A87282] pt-1">
            (and yes, maine isme unnecessarily bahut time laga diya 😭)
          </p>
        </motion.div>

        {/* Tactile Dark Romance Envelope */}
        <div
          onClick={handleEnvelopeClick}
          className="relative cursor-pointer group my-4 focus:outline-hidden"
          role="button"
          tabIndex={0}
          aria-label="Open the letter for Mansii"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') handleEnvelopeClick();
          }}
        >
          {/* Subtle crimson candlelight aura */}
          <div className="absolute inset-0 bg-[#540C1A]/40 rounded-xl blur-2xl scale-95 group-hover:scale-105 transition-transform duration-500" />

          {/* Envelope Body: Dark charcoal & burgundy velvet texture */}
          <div className="relative w-72 sm:w-80 h-48 sm:h-52 bg-[#12080E] rounded-lg shadow-2xl border border-[#3E1424] overflow-visible transition-transform duration-300 group-hover:-translate-y-1">
            {/* Letter emerging animation */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ y: -70, opacity: 1 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-x-4 top-2 h-44 bg-[#180A13] rounded-md border border-[#521C2F] p-4 shadow-2xl z-20 flex flex-col justify-between"
                >
                  <div className="flex justify-between items-center border-b border-[#3E1424] pb-2">
                    <span className="font-typewriter text-[11px] text-[#C48C9C]">To: Mansii 💗</span>
                    <HeartDoodle size={16} color="#C42340" />
                  </div>
                  <div className="space-y-1.5 py-1">
                    <div className="h-2 w-3/4 bg-[#3E1526]/70 rounded-xs" />
                    <div className="h-2 w-5/6 bg-[#3E1526]/50 rounded-xs" />
                    <div className="h-2 w-1/2 bg-[#3E1526]/60 rounded-xs" />
                  </div>
                  <div className="text-right font-handwriting text-sm text-[#E07A90]">
                    — Aditya ♡
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Envelope flap: Dark wine */}
            <motion.div
              animate={isOpen ? { rotateX: 180, zIndex: 5 } : { rotateX: 0, zIndex: 25 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              style={{ transformOrigin: 'top center' }}
              className="absolute top-0 inset-x-0 h-24 bg-[#1B0C15] border-b border-[#4A172A] [clip-path:polygon(0%_0%,100%_0%,50%_100%)] shadow-sm"
            />

            {/* Envelope Lower Pocket Fold */}
            <div className="absolute bottom-0 inset-x-0 h-32 bg-[#140810] border-t border-[#3B1221]/50 [clip-path:polygon(0%_100%,50%_35%,100%_100%)] z-15" />
            <div className="absolute inset-y-0 left-0 w-28 bg-[#11070D] [clip-path:polygon(0%_0%,0%_100%,100%_50%)] z-12" />
            <div className="absolute inset-y-0 right-0 w-28 bg-[#11070D] [clip-path:polygon(100%_0%,100%_100%,0%_50%)] z-12" />

            {/* Deep Crimson Wax Seal in Center */}
            <motion.div
              animate={isOpen ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="absolute top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
            >
              <div className="w-11 h-11 rounded-full bg-[#780F22] shadow-[0_0_15px_rgba(120,15,34,0.6)] border-2 border-[#540816] flex items-center justify-center text-[#F8DEE4] font-serif text-lg font-bold group-hover:scale-105 transition-transform">
                M
              </div>
            </motion.div>
          </div>

          {/* Floating dark rose petals and glowing embers when opened */}
          {isOpen && (
            <div className="absolute inset-0 pointer-events-none z-30">
              {[...Array(18)].map((_, i) => (
                <motion.div
                  key={`burst-${i}`}
                  initial={{ opacity: 1, x: 0, y: 0, scale: 0.6 }}
                  animate={{
                    opacity: 0,
                    x: (i % 2 === 0 ? 1 : -1) * (30 + (i * 15)),
                    y: -130 - (i * 12),
                    rotate: i * 50,
                    scale: 1.2,
                  }}
                  transition={{ duration: 1.6, ease: 'easeOut', delay: (i % 4) * 0.07 }}
                  className="absolute left-1/2 top-1/2 w-3.5 h-4 rounded-full bg-gradient-to-t from-[#8E1428] to-[#D82A4C]"
                  style={{
                    borderRadius: '60% 40% 70% 30% / 60% 30% 70% 40%',
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Click hint */}
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-6 text-center"
        >
          <span className="font-handwriting text-[#B87A8C] text-sm sm:text-base tracking-wide flex items-center justify-center gap-1.5">
            <span>tap the envelope to open</span>
            <span className="text-[#C42340]">♡</span>
          </span>
        </motion.div>
      </div>
    </section>
  );
};
