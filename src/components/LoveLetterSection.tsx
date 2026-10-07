import React from 'react';
import { motion } from 'motion/react';
import { WashiTape, PressedFlowerSvg, HeartDoodle } from './decorations/ScrapbookDecorations';
import { HiddenLoveNote } from './HiddenLoveNote';

interface LoveLetterSectionProps {
  onSecretFound?: (message: string) => void;
}

export const LoveLetterSection: React.FC<LoveLetterSectionProps> = ({ onSecretFound }) => {
  return (
    <section id="letter" className="relative py-14 sm:py-28 px-3.5 sm:px-6 max-w-4xl mx-auto overflow-hidden">
      {/* Chapter header */}
      <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14 space-y-2">
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#B86276] font-mono">
          Chapter VII · The Love Letter
        </span>
        <h2 className="font-serif text-2xl xs:text-3xl sm:text-5xl text-[#F9ECE9] tracking-tight">
          Okay… ab seriously.
        </h2>
        <p className="font-handwriting text-lg xs:text-xl sm:text-2xl text-[#E892A4]">
          (from Aditya to his Mansii)
        </p>
      </div>

      {/* Dark Velvet Parchment Letter Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative bg-[#13080F] p-4.5 xs:p-6 sm:p-14 lg:p-16 rounded-md border border-[#481628] shadow-2xl deckled-paper mb-6"
        style={{
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.8), inset 0 0 70px rgba(60, 10, 25, 0.35)',
        }}
      >
        {/* Decorative corner washi tape */}
        <div className="absolute -top-3 left-4 xs:left-8 z-20">
          <WashiTape variant="crimson" rotation="-rotate-2" />
        </div>
        <div className="absolute -top-3 right-4 xs:right-8 z-20">
          <WashiTape variant="wine" rotation="rotate-2" />
        </div>

        {/* Dried dark flowers on letter margins */}
        <div className="absolute top-4 right-3 sm:top-8 sm:right-10 pointer-events-none opacity-85">
          <PressedFlowerSvg size={30} className="sm:w-12 sm:h-12" />
        </div>
        <div className="absolute bottom-8 left-3 sm:bottom-10 sm:left-6 pointer-events-none opacity-80 -rotate-12">
          <PressedFlowerSvg size={26} className="sm:w-10 sm:h-10" />
        </div>

        {/* Letter Heading */}
        <div className="border-b border-[#300E19] pb-4 sm:pb-6 mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center justify-between gap-1 text-[10px] xs:text-xs font-mono text-[#9E6272] mb-1.5 sm:mb-2">
            <span>PRIVATE & DEEPLY LOVED</span>
            <div className="flex items-center gap-2">
              <span>DATE: ALWAYS</span>
              {onSecretFound && (
                <HiddenLoveNote
                  label="late night thoughts…"
                  message="Those late night imaginations👀😙"
                  onOpen={onSecretFound}
                />
              )}
            </div>
          </div>
          <h3 className="font-serif text-2xl xs:text-3xl sm:text-4xl text-[#FFEBF0] italic font-normal">
            Mansii,
          </h3>
        </div>

        {/* The Exact Letter Content */}
        <div className="space-y-4 sm:space-y-6 text-[#DFC5CC] text-base xs:text-lg sm:text-xl font-serif leading-relaxed">
          <p>
            ab tak toh maine kaafi kuch bol diya,
            <br />
            but shayad sabse important cheez abhi bhi properly nahi boli.
          </p>

          <div className="py-1.5 sm:py-2">
            <p className="font-serif text-2xl xs:text-3xl sm:text-4xl text-[#FFB6C6] font-medium tracking-tight">
              I love you.
            </p>
            <p className="font-serif text-xl xs:text-2xl text-[#E8758D] italic pt-0.5 sm:pt-1">
              Bahut zyada.
            </p>
          </div>

          <p>
            Aur mujhe nahi lagta ki main isko kisi perfect paragraph me explain kar sakta hu.
          </p>

          <p className="text-[#F2D6DC] italic">
            Mere liye pyaar sirf cute baatein ya ‘I love you’ bolna nahi hai.
          </p>

          <p className="border-l-2 border-[#8E142B] pl-3 sm:pl-4 space-y-1.5 sm:space-y-2 text-[#F0D5DC] text-sm xs:text-base sm:text-lg">
            <span>It’s also you asking me what’s wrong when I say nothing.</span>
            <br />
            <span>It’s you telling me ki jo bhi problem hai mujhe bata du.</span>
            <br />
            <span>It’s you trying to understand me even when main khud ko explain nahi kar pata.</span>
            <br />
            <span>It’s those random conversations jo kabhi khatam hi nahi karne ka mann karta.</span>
            <br />
            <span>It’s tumhara bina kisi reason ke yaad aa jaana.</span>
            <br />
            <span>It’s tumhara message dekh ke automatically smile aa jaana.</span>
          </p>

          <p>
            It’s knowing ki duniya kitni bhi busy ho,
            <br />
            there is still one person jisse baat karne ka mann karta hai.
            <br />
            <span className="font-serif text-lg xs:text-xl sm:text-2xl text-[#FFA8BC] font-medium">
              And that person is you.
            </span>
          </p>

          <p>
            Tum mere liye genuinely bahut important ho.
            <br />
            Itna ki kabhi kabhi mujhe khud samajh nahi aata main itna attached kab ho gaya.
          </p>

          <p>
            Aur haan,
            <br />
            main har baar perfect boyfriend nahi hota.
            <br />
            <span className="italic text-[#C48C9A] text-sm xs:text-base sm:text-lg block pt-1">
              Kabhi stupid hota hu,
              kabhi overthink karta hu,
              kabhi unnecessarily irritate karta hu,
              kabhi feelings bolne ke instead mazaak kar deta hu.
            </span>
          </p>

          <div className="bg-[#1C0B15] p-4 sm:p-5 rounded-md border border-[#481628] my-2 sm:my-3">
            <p className="font-serif text-lg xs:text-xl sm:text-2xl text-[#FFE5EC] font-medium">
              But one thing I hope tum kabhi doubt na karo—
            </p>
            <p className="font-handwriting text-xl xs:text-2xl sm:text-3xl text-[#FF859F] pt-1.5 sm:pt-2">
              I genuinely care about you.
            </p>
            <p className="text-[#D8B0BC] italic pt-1 text-xs xs:text-sm sm:text-base">
              Aur jitna main bol pata hu, usse bahut zyada.
            </p>
          </div>

          <p>
            Tum meri life ka koi temporary chapter nahi ho.
            <br />
            I want you in the ordinary days too.
          </p>

          <p className="italic text-[#E0AAB7] pl-1.5 sm:pl-2 text-sm xs:text-base sm:text-lg">
            Random mornings. Late-night talks. Chhoti fights. Bakwaas jokes. Good days. Bad days. Sab mein.
          </p>

          <p>
            Aur future ka mujhe nahi pata exactly kya kya hoga…
            <br />
            but haan,
            itna zaroor pata hai ki agar future me bhi mujhe kisi ko randomly tang karna hai,
            <br />
            <span className="font-serif text-lg xs:text-xl sm:text-2xl text-[#FFA3B5] font-medium">
              toh candidate tum hi ho. 😭❤️
            </span>
          </p>

          <div className="space-y-1 pt-1 sm:pt-2 text-[#E8C2CC] text-sm xs:text-base sm:text-lg">
            <p>Thank you for being patient with me.</p>
            <p>Thank you for understanding me.</p>
            <p>Thank you for caring the way you do.</p>
            <p className="font-serif text-base xs:text-lg sm:text-xl text-[#FFE5EC] pt-0.5 sm:pt-1">
              And thank you for simply being you.
            </p>
          </div>

          <div className="pt-2 sm:pt-4">
            <p className="font-handwriting text-2xl xs:text-3xl sm:text-4xl text-[#FF8DA5] leading-snug">
              I love you sooo muchhh, bby. 🥹❤️
            </p>
          </div>
        </div>

        {/* Handwritten Sign-off */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#300E19] flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#A66072]">
            <HeartDoodle size={16} color="#C42340" />
            <span>POORA DIL SE</span>
          </div>

          <div className="text-right">
            <p className="font-handwriting text-3xl xs:text-4xl sm:text-5xl text-[#FF8DA5] leading-none">
              — Aditya
            </p>
            <p className="text-[10px] xs:text-[11px] font-mono text-[#9E6272] mt-1.5 uppercase tracking-widest">
              Yours, always & unconditionally
            </p>
          </div>
        </div>

        {/* Deep Crimson Wax Seal at bottom */}
        <div className="absolute -bottom-5 sm:-bottom-6 left-1/2 -translate-x-1/2 z-20">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#780F22] shadow-[0_0_20px_rgba(120,15,34,0.7)] border-2 border-[#540816] flex items-center justify-center text-[#F8DEE4] font-serif text-base sm:text-xl font-bold">
            A&M
          </div>
        </div>
      </motion.div>
    </section>
  );
};
