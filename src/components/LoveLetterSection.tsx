import React from 'react';
import { motion } from 'motion/react';
import { WashiTape, PressedFlowerSvg, HeartDoodle } from './decorations/ScrapbookDecorations';

export const LoveLetterSection: React.FC = () => {
  return (
    <section id="letter" className="relative py-28 px-4 sm:px-6 max-w-4xl mx-auto overflow-hidden">
      {/* Chapter header */}
      <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#B86276] font-mono">
          Chapter VII · The Love Letter
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-[#F9ECE9] tracking-tight">
          Okay… ab seriously.
        </h2>
        <p className="font-handwriting text-xl sm:text-2xl text-[#E892A4]">
          (from Aditya to his Mansii)
        </p>
      </div>

      {/* Dark Velvet Parchment Letter Container */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative bg-[#13080F] p-8 sm:p-14 lg:p-16 rounded-md border border-[#481628] shadow-2xl deckled-paper"
        style={{
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.8), inset 0 0 70px rgba(60, 10, 25, 0.35)',
        }}
      >
        {/* Decorative corner washi tape */}
        <div className="absolute -top-3 left-10 z-20">
          <WashiTape variant="crimson" rotation="-rotate-3" />
        </div>
        <div className="absolute -top-3 right-10 z-20">
          <WashiTape variant="wine" rotation="rotate-2" />
        </div>

        {/* Dried dark flowers on letter margins */}
        <div className="absolute top-8 right-6 sm:right-10 pointer-events-none opacity-85">
          <PressedFlowerSvg size={48} />
        </div>
        <div className="absolute bottom-10 left-6 pointer-events-none opacity-80 -rotate-12">
          <PressedFlowerSvg size={40} />
        </div>

        {/* Letter Heading */}
        <div className="border-b border-[#300E19] pb-6 mb-8">
          <div className="flex items-center justify-between text-xs font-mono text-[#9E6272] mb-2">
            <span>PRIVATE & DEEPLY LOVED</span>
            <span>DATE: ALWAYS</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl text-[#FFEBF0] italic font-normal">
            Mansii,
          </h3>
        </div>

        {/* The Exact Letter Content */}
        <div className="space-y-6 text-[#DFC5CC] text-lg sm:text-xl font-serif leading-relaxed">
          <p>
            ab tak toh maine kaafi kuch bol diya,
            <br />
            but shayad sabse important cheez abhi bhi properly nahi boli.
          </p>

          <div className="py-2">
            <p className="font-serif text-3xl sm:text-4xl text-[#FFB6C6] font-medium tracking-tight">
              I love you.
            </p>
            <p className="font-serif text-2xl text-[#E8758D] italic pt-1">
              Bahut zyada.
            </p>
          </div>

          <p>
            Aur mujhe nahi lagta ki main isko kisi perfect paragraph me explain kar sakta hu.
          </p>

          <p className="text-[#F2D6DC] italic">
            Mere liye pyaar sirf cute baatein ya ‘I love you’ bolna nahi hai.
          </p>

          <p className="border-l-2 border-[#8E142B] pl-4 space-y-2 text-[#F0D5DC]">
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
            <span className="font-serif text-xl sm:text-2xl text-[#FFA8BC] font-medium">
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
            <span className="italic text-[#C48C9A]">
              Kabhi stupid hota hu,
              kabhi overthink karta hu,
              kabhi unnecessarily irritate karta hu,
              kabhi feelings bolne ke instead mazaak kar deta hu.
            </span>
          </p>

          <div className="bg-[#1C0B15] p-5 rounded-md border border-[#481628] my-3">
            <p className="font-serif text-xl sm:text-2xl text-[#FFE5EC] font-medium">
              But one thing I hope tum kabhi doubt na karo—
            </p>
            <p className="font-handwriting text-2xl sm:text-3xl text-[#FF859F] pt-2">
              I genuinely care about you.
            </p>
            <p className="text-[#D8B0BC] italic pt-1 text-base">
              Aur jitna main bol pata hu, usse bahut zyada.
            </p>
          </div>

          <p>
            Tum meri life ka koi temporary chapter nahi ho.
            <br />
            I want you in the ordinary days too.
          </p>

          <p className="italic text-[#E0AAB7] pl-2">
            Random mornings. Late-night talks. Chhoti fights. Bakwaas jokes. Good days. Bad days. Sab mein.
          </p>

          <p>
            Aur future ka mujhe nahi pata exactly kya kya hoga…
            <br />
            but haan,
            itna zaroor pata hai ki agar future me bhi mujhe kisi ko randomly tang karna hai,
            <br />
            <span className="font-serif text-xl sm:text-2xl text-[#FFA3B5] font-medium">
              toh candidate tum hi ho. 😭❤️
            </span>
          </p>

          <div className="space-y-1 pt-2 text-[#E8C2CC]">
            <p>Thank you for being patient with me.</p>
            <p>Thank you for understanding me.</p>
            <p>Thank you for caring the way you do.</p>
            <p className="font-serif text-xl text-[#FFE5EC] pt-1">
              And thank you for simply being you.
            </p>
          </div>

          <div className="pt-4">
            <p className="font-handwriting text-3xl sm:text-4xl text-[#FF8DA5] leading-snug">
              I love you sooo muchhh, bby. 🥹❤️
            </p>
          </div>
        </div>

        {/* Handwritten Sign-off */}
        <div className="mt-12 pt-8 border-t border-[#300E19] flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#A66072]">
            <HeartDoodle size={18} color="#C42340" />
            <span>POORA DIL SE</span>
          </div>

          <div className="text-right">
            <p className="font-handwriting text-4xl sm:text-5xl text-[#FF8DA5] leading-none">
              — Aditya
            </p>
            <p className="text-[11px] font-mono text-[#9E6272] mt-1.5 uppercase tracking-widest">
              Yours, always & unconditionally
            </p>
          </div>
        </div>

        {/* Deep Crimson Wax Seal at bottom */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20">
          <div className="w-12 h-12 rounded-full bg-[#780F22] shadow-[0_0_20px_rgba(120,15,34,0.7)] border-2 border-[#540816] flex items-center justify-center text-[#F8DEE4] font-serif text-xl font-bold">
            A&M
          </div>
        </div>
      </motion.div>
    </section>
  );
};
