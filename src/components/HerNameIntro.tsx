import React from 'react';
import { motion } from 'motion/react';
import { HeartDoodle } from './decorations/ScrapbookDecorations';

interface HerNameIntroProps {
  onContinue: () => void;
}

export const HerNameIntro: React.FC<HerNameIntroProps> = ({ onContinue }) => {
  return (
    <section id="intro" className="relative min-h-[85svh] w-full max-w-[100vw] flex flex-col items-center justify-center px-3.5 py-14 sm:py-24 text-center paper-texture overflow-hidden">
      {/* Dark romance candlelight aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-60 xs:w-72 sm:w-96 h-60 xs:h-72 sm:h-96 bg-[#4A0D1B]/25 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-xl mx-auto space-y-6 xs:space-y-8 sm:space-y-10">
        {/* Her Name Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="space-y-1.5 xs:space-y-2 sm:space-y-3"
        >
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#A66072] font-mono">
            Chapter I · Intro
          </span>
          <h2 className="font-serif text-3xl xs:text-5xl sm:text-6xl text-[#F7EDE9] font-normal tracking-tight">
            Mansii,
          </h2>
          <div className="flex items-center justify-center gap-2 pt-1">
            <span className="w-6 xs:w-8 sm:w-10 h-px bg-[#4A1728]" />
            <HeartDoodle size={15} color="#C42340" />
            <span className="w-6 xs:w-8 sm:w-10 h-px bg-[#4A1728]" />
          </div>
        </motion.div>

        {/* Exact INTRO Lines */}
        <div className="space-y-4 xs:space-y-5 sm:space-y-6 text-[#E0CECF] text-sm xs:text-base sm:text-lg leading-relaxed font-serif px-1 sm:px-4">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="italic text-base xs:text-lg sm:text-xl text-[#F2DFE2]"
          >
            mujhe honestly feelings express karna kabhi properly aaya hi nahi.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, delay: 0.4 }}
            className="text-[#D8BAC4] text-xs xs:text-sm sm:text-lg leading-relaxed"
          >
            Kabhi mazaak me baat taal deta hu,
            <br />
            kabhi topic change kar deta hu,
            <br />
            kabhi kuch feel toh bahut karta hu but bol nahi pata ki exactly kaise bolu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="py-1 sm:py-2"
          >
            <p className="font-serif text-base xs:text-lg sm:text-2xl text-[#FFDEE6] font-medium tracking-tight">
              Isliye socha iss baar bolne ki jagah bana deta hu.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, delay: 0.8 }}
            className="font-handwriting text-base xs:text-lg sm:text-2xl text-[#E8758D]"
          >
            Thoda sa weird hai, thoda sa extra bhi hai,
            <br />
            but poora tumhare liye hai. ♡
          </motion.p>
        </div>

        {/* Touch-friendly Continue Button (min-h-[44px]) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="pt-3 sm:pt-6"
        >
          <button
            onClick={onContinue}
            className="cursor-pointer group inline-flex items-center gap-2 px-4 xs:px-5 sm:px-6 py-2.5 sm:py-3 min-h-[44px] rounded-full border border-[#4E1627] bg-[#160810]/90 hover:bg-[#250D1B] active:scale-95 text-xs uppercase tracking-widest text-[#E0AAB7] transition-all hover:border-[#C42340] shadow-lg shadow-black/50"
          >
            <span>turn the page</span>
            <span className="font-handwriting text-sm xs:text-base lowercase group-hover:translate-x-0.5 transition-transform text-[#C42340]">
              tumhare baare mein →
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
