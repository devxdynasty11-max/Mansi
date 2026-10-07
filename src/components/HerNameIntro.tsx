import React from 'react';
import { motion } from 'motion/react';
import { HeartDoodle, PressedFlowerSvg } from './decorations/ScrapbookDecorations';

interface HerNameIntroProps {
  onContinue: () => void;
}

export const HerNameIntro: React.FC<HerNameIntroProps> = ({ onContinue }) => {
  return (
    <section id="intro" className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-24 text-center paper-texture overflow-hidden">
      {/* Dark romance candlelight aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#4A0D1B]/25 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-xl mx-auto space-y-10">
        {/* Her Name Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="space-y-3"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#A66072] font-mono">
            Chapter I · Intro
          </span>
          <h2 className="font-serif text-5xl sm:text-6xl text-[#F7EDE9] font-normal tracking-tight">
            Mansii,
          </h2>
          <div className="flex items-center justify-center gap-2 pt-1">
            <span className="w-10 h-px bg-[#4A1728]" />
            <HeartDoodle size={16} color="#C42340" />
            <span className="w-10 h-px bg-[#4A1728]" />
          </div>
        </motion.div>

        {/* Exact INTRO Lines */}
        <div className="space-y-6 text-[#E0CECF] text-base sm:text-lg leading-relaxed font-serif">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="italic text-lg sm:text-xl text-[#F2DFE2]"
          >
            mujhe honestly feelings express karna kabhi properly aaya hi nahi.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1, delay: 0.6 }}
            className="text-[#D8BAC4] leading-relaxed"
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
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2, delay: 1.0 }}
            className="py-2"
          >
            <p className="font-serif text-xl sm:text-2xl text-[#FFDEE6] font-medium tracking-tight">
              Isliye socha iss baar bolne ki jagah bana deta hu.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1, delay: 1.4 }}
            className="font-handwriting text-xl sm:text-2xl text-[#E8758D]"
          >
            Thoda sa weird hai, thoda sa extra bhi hai,
            <br />
            but poora tumhare liye hai. ♡
          </motion.p>
        </div>

        {/* Quiet Continue Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="pt-6"
        >
          <button
            onClick={onContinue}
            className="cursor-pointer group inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#4E1627] bg-[#160810]/80 hover:bg-[#250D1B] text-xs uppercase tracking-widest text-[#E0AAB7] transition-all hover:border-[#C42340] shadow-lg shadow-black/50"
          >
            <span>turn the page</span>
            <span className="font-handwriting text-base lowercase group-hover:translate-x-0.5 transition-transform text-[#C42340]">
              tumhare baare mein →
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
