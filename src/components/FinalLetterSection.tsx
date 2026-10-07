import React from 'react';
import { motion } from 'motion/react';
import { HeartDoodle } from './decorations/ScrapbookDecorations';

interface FinalLetterSectionProps {
  onSecretFound: (text: string) => void;
}

export const FinalLetterSection: React.FC<FinalLetterSectionProps> = ({ onSecretFound }) => {
  return (
    <section id="always" className="relative py-32 px-4 sm:px-6 max-w-3xl mx-auto overflow-hidden">
      {/* Chapter header: Quiet & Minimal */}
      <div className="text-center max-w-md mx-auto mb-16 space-y-2">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#B86276] font-mono">
          Final Page
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#F9ECE9] tracking-tight">
          Before You Go
        </h2>
      </div>

      {/* Single Physical Dark Romance Parchment Paper */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1 }}
        className="relative bg-[#13080F] p-8 sm:p-14 rounded-md border border-[#3E1424] shadow-2xl space-y-7 text-[#DFC5CC] dark-card"
        style={{
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.8), inset 0 0 50px rgba(60, 10, 25, 0.3)',
        }}
      >
        <div className="flex items-center justify-between border-b border-[#2C0E18] pb-4">
          <p className="font-serif text-2xl sm:text-3xl text-[#FFEBF0] italic">
            Mansii,
          </p>
          <HeartDoodle size={16} color="#C42340" />
        </div>

        <div className="space-y-5 text-base sm:text-lg font-serif leading-relaxed">
          <p>
            ye website shayad meri feelings ko completely explain na kar paaye.
          </p>

          <p className="italic text-[#E8CCD4]">
            But maine genuinely koshish ki hai.
          </p>

          <p>
            Tumhare saath jo feel karta hu,
            <br />
            uska exact version words mein likhna mushkil hai.
          </p>

          <div className="py-2">
            <p className="text-sm font-mono uppercase tracking-widest text-[#B86276]">
              Bas itna samajh lena—
            </p>
            <p className="font-serif text-2xl sm:text-3xl text-[#FFB6C6] font-medium tracking-tight mt-1">
              tum bahut important ho.
            </p>
            <p className="text-[#E0AAB7] italic text-xl mt-0.5">
              Bahut zyada.
            </p>
          </div>

          <p>
            And I hope tumhe kabhi ye doubt na ho ki tum loved ho.
          </p>

          <p className="font-serif text-xl sm:text-2xl text-[#FFE5EC] font-medium">
            Because you are.
            <br />
            So much.
          </p>

          <div className="pt-4 space-y-1 text-[#F0D5DC]">
            <p className="text-sm font-mono uppercase tracking-wider text-[#B86276]">
              Always remember:
            </p>
            <p className="font-handwriting text-2xl sm:text-3xl text-[#FF859F] leading-relaxed pt-1">
              meri favourite person,
              <br />
              meri paglu,
              <br />
              meri sweetheart,
              <br />
              meri bby…
            </p>
          </div>

          <div className="pt-3">
            <p className="font-serif text-3xl sm:text-4xl text-[#FFB6C6] font-medium flex items-center gap-2">
              <span>I love you.</span>
              <span className="text-[#C42340]">❤️</span>
            </p>
          </div>
        </div>

        {/* Aditya Signature */}
        <div className="pt-6 border-t border-[#2C0E18] flex justify-between items-end">
          {/* Secret scrap clickable easter egg */}
          <button
            onClick={() => onSecretFound("if you're smiling right now, mission accomplished yr 😭❤️")}
            className="text-[10px] font-handwriting text-[#E0657C] hover:underline cursor-pointer opacity-80"
          >
            [secret footnote ✎]
          </button>

          <div className="text-right">
            <p className="font-handwriting text-3xl sm:text-4xl text-[#FF8DA5]">
              — Aditya ♡
            </p>
          </div>
        </div>
      </motion.div>

      {/* Crafted with love note */}
      <div className="mt-14 text-center space-y-3">
        <p className="font-handwriting text-base sm:text-lg text-[#C89EA9] max-w-sm mx-auto leading-snug">
          made with love,
          <br />
          and way too many late nights,
          <br />
          just for you ♡
        </p>

        <p className="text-xs font-mono uppercase tracking-widest text-[#9E6272]">
          — Aditya
        </p>

        {/* Subtle floating dark rose petals animation at final footer */}
        <div className="pt-8 flex items-center justify-center gap-2">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-[#C42340]"
          />
          <span className="font-handwriting text-sm text-[#FF859F] tracking-wider">
            for Mansii, always ♡
          </span>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            className="w-2 h-2 rounded-full bg-[#C42340]"
          />
        </div>
      </div>
    </section>
  );
};
