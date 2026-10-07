import React from 'react';
import { motion } from 'motion/react';
import { WashiTape, PressedFlowerSvg, HeartDoodle } from './decorations/ScrapbookDecorations';

export const TumSection: React.FC = () => {
  return (
    <section id="tum" className="relative py-28 px-4 sm:px-6 max-w-4xl mx-auto overflow-hidden">
      {/* Background candle illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-[#3A0A15]/30 to-transparent blur-3xl pointer-events-none" />

      {/* Part 1: Tumhare baare mein… */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1 }}
        className="relative bg-[#13080F] p-8 sm:p-12 rounded-lg border border-[#3E1423] shadow-2xl mb-16 dark-card"
      >
        <div className="absolute -top-3 left-10 z-20">
          <WashiTape variant="crimson" rotation="-rotate-2" />
        </div>
        <div className="absolute -top-3 right-10 z-20">
          <WashiTape variant="charcoal" rotation="rotate-2" />
        </div>

        <div className="border-b border-[#2D0D19] pb-4 mb-6 flex justify-between items-center">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B86276]">
              Chapter II · Tum
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F9ECE9] font-normal mt-1">
              Tumhare baare mein…
            </h2>
          </div>
          <PressedFlowerSvg size={36} />
        </div>

        <div className="space-y-5 text-base sm:text-lg font-serif text-[#DFC8CF] leading-relaxed">
          <p className="text-lg sm:text-xl text-[#F5E2E6] italic">
            Pata hai tumhari sabse achhi baat kya hai?
          </p>

          <p>
            Sirf ye nahi ki tum sweet ho,
            <br />
            ya cute ho,
            <br />
            ya mujhe itna pyaar karti ho.
          </p>

          <div className="py-2 border-l-2 border-[#8E142B] pl-4 my-2">
            <p className="font-serif text-xl sm:text-2xl text-[#FFA8BC] font-medium tracking-tight">
              It’s the way you actually care.
            </p>
          </div>

          <p>
            Jab main kuch nahi batata,
            <br />
            tab bhi tum samajhne ki try karti ho.
          </p>

          <p>
            Jab main overthink karta hu,
            <br />
            tum mujhe samjhati ho.
          </p>

          <p>
            Jab meri tabiyat ya mood theek nahi hota,
            <br />
            tum bas ye nahi bolti ki ‘theek ho jayega’,
            <br />
            tum actually poochti ho ki hua kya.
          </p>

          <p className="text-[#E8BDC8] pt-2">
            Aur honestly,
            <br />
            ye chhoti baat nahi hai mere liye.
          </p>

          <div className="bg-[#1C0B15]/90 p-5 rounded-md border border-[#4A1628] my-4 space-y-2">
            <p className="font-handwriting text-xl sm:text-2xl text-[#FFB6C6] leading-snug">
              Tumhara ye kehna ki
              <br />
              “jo bhi hai mujhe batao, main sunungi”
              <br />
              mujhe bahut zyada matter karta hai.
            </p>
          </div>

          <p className="text-[#CFA9B6]">
            Maybe main har baar properly bol nahi pata,
            <br />
            but I notice it.
          </p>

          <p className="font-serif text-2xl sm:text-3xl text-[#FFEBF0] font-medium pt-2">
            I notice you. ♡
          </p>
        </div>
      </motion.div>

      {/* Part 2: Tum mere liye kya ho? */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1 }}
        className="relative bg-[#11070D] p-8 sm:p-12 rounded-lg border border-[#3A1221] shadow-2xl dark-card"
      >
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
          <WashiTape variant="wine" rotation="rotate-1" />
        </div>

        <div className="border-b border-[#2B0C18] pb-4 mb-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B86276]">
            Chapter III · Meaning
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F9ECE9] font-normal mt-1">
            Tum mere liye kya ho?
          </h2>
        </div>

        <div className="space-y-5 text-base sm:text-lg font-serif text-[#DFC8CF] leading-relaxed">
          <p className="text-xl sm:text-2xl text-[#FCE6EC] italic font-medium">
            Honestly?
          </p>

          <p>
            Iska ek simple answer nahi hai.
          </p>

          <p className="text-lg sm:text-xl text-[#F2D6DC] leading-relaxed">
            Tum meri girlfriend ho,
            <br />
            meri favourite person ho,
            <br />
            meri comfort person ho,
            <br />
            meri pagal si partner-in-crime ho,
            <br />
            aur woh insaan ho jisse main bina kisi particular reason ke bhi baat karna chahta hu.
          </p>

          <div className="py-2">
            <p className="text-base sm:text-lg text-[#C89EA9]">
              Kabhi kabhi bas tumse baat karne ka mann karta hai.
            </p>
            <p className="text-[#C89EA9] italic">
              Koi important topic nahi.
              <br />
              Koi special reason nahi.
            </p>
            <p className="font-handwriting text-3xl text-[#FF859F] pt-2">
              Bas tum.
            </p>
          </div>

          <p className="pt-2 text-lg text-[#E3CDD3]">
            Aur shayad isi cheez se mujhe samajh aaya ki tum mere liye kitni important ho.
          </p>

          <p className="font-serif text-xl sm:text-2xl text-[#FFE5EC] font-medium border-t border-[#3A1221] pt-4">
            Because tumhari presence ke liye mujhe reason nahi chahiye. 💗
          </p>

          <div className="text-right text-xs font-handwriting text-[#E07A90] pt-2">
            — Aditya ♡
          </div>
        </div>
      </motion.div>
    </section>
  );
};
