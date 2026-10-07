import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Moon, Star } from 'lucide-react';
import { WashiTape, HeartDoodle } from './decorations/ScrapbookDecorations';

interface NightSkySectionProps {
  onSecretFound: (text: string) => void;
}

export const NightSkySection: React.FC<NightSkySectionProps> = ({ onSecretFound }) => {
  return (
    <section
      id="night-sky"
      className="relative min-h-screen py-32 px-4 sm:px-6 bg-[#070305] text-[#F0D5DC] overflow-hidden select-none"
    >
      {/* Background Starry Sky Image with measured deep crimson/black contrast scrim */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <img
          src="/src/assets/images/starry_midnight_sky_1791348261466.jpg"
          alt="Midnight Sky"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0407] via-[#12060C]/90 to-[#070305]" />
      </div>

      {/* Twinkling ambient stars & crimson embers */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full bg-gradient-to-tr from-[#FFD4DF] to-[#FF8DA5]"
            style={{
              width: `${(i % 3) + 1.5}px`,
              height: `${(i % 3) + 1.5}px`,
              top: `${(i * 17) % 96}%`,
              left: `${(i * 23) % 96}%`,
            }}
            animate={{
              opacity: [0.2, 0.9, 0.2],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 2.5 + (i % 4),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: (i % 5) * 0.4,
            }}
          />
        ))}
      </div>

      {/* Secret Twinkling Easter Egg Star */}
      <button
        onClick={() => onSecretFound('still thinking about you, Mansii. (hamesha ♡)')}
        className="absolute top-28 right-16 sm:right-32 cursor-pointer z-30 group p-2 focus:outline-hidden"
        title="A secret twinkle"
      >
        <Star className="w-4 h-4 text-[#FF8DA5] animate-pulse group-hover:scale-125 transition-transform" />
      </button>

      {/* Main Midnight Narrative */}
      <div className="relative z-10 max-w-3xl mx-auto space-y-24">
        {/* Soft Moon and Chapter Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center flex flex-col items-center space-y-3"
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#3D0A14] to-[#781427] shadow-[0_0_40px_rgba(180,25,50,0.4)] border border-[#9E2036] flex items-center justify-center mb-2">
            <Moon className="w-8 h-8 text-[#FFE5EC] opacity-90" />
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B86276]">
            Chapter VIII · Midnight
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#F9ECE9] tracking-tight font-normal">
            Somewhere between all those conversations…
          </h2>
        </motion.div>

        {/* Exact Night Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-[#12070E] p-8 sm:p-12 rounded-lg border border-[#3E1423] shadow-2xl text-center space-y-6 max-w-2xl mx-auto relative dark-card"
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <WashiTape variant="crimson" rotation="-rotate-1" />
          </div>

          <p className="font-serif text-xl sm:text-2xl text-[#FFB6C6] italic">
            pata hi nahi chala kab tum itni important ho gayi.
          </p>

          <div className="space-y-2 text-base sm:text-lg font-serif text-[#DFC8CF] py-2">
            <p>Pehle bas baat hoti thi.</p>
            <p>Phir tumhari messages ka wait hone laga.</p>
            <p>Phir tumhari fikr hone lagi.</p>
            <p>Phir tumhari khushi matter karne lagi.</p>
          </div>

          <div className="py-2 border-y border-[#330F1C] my-2">
            <p className="font-serif text-2xl sm:text-3xl text-[#FFEBF0] font-medium">
              Aur ab…
            </p>
            <p className="font-serif text-lg sm:text-xl text-[#F5C2CD] mt-2">
              tum meri life ka woh part ho jiske bina sab thoda incomplete sa lagta hai.
            </p>
          </div>

          <div className="space-y-3 text-base sm:text-lg font-serif text-[#D4BAC4]">
            <p className="italic">
              Funny thing is, shayad tumhe ye sab already pata hai.
            </p>
            <p>But I still wanted to say it.</p>
            <p className="font-serif text-xl text-[#FF9EAF] font-medium">
              Again.
            </p>
            <p className="font-handwriting text-2xl sm:text-3xl text-[#FF8DA5] pt-2">
              Because tumhe pyaar karna toh achha lagta hi hai,
              <br />
              tumhe batana bhi achha lagta hai. ♡
            </p>
          </div>
        </motion.div>

        {/* Exact FUTURE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-[#140810] p-8 sm:p-12 rounded-lg border border-[#481628] shadow-2xl text-center space-y-6 max-w-2xl mx-auto relative dark-card"
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <WashiTape variant="wine" rotation="rotate-2" />
          </div>

          <div className="border-b border-[#2E0E1B] pb-3 mb-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#B86276]">
              A Small Future Note
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F9ECE9] mt-1 font-normal">
              Future ke liye ek chhoti si baat…
            </h3>
          </div>

          <div className="space-y-4 text-base sm:text-lg font-serif text-[#DFC8CF] leading-relaxed">
            <p>
              Main koi perfect future predict nahi kar raha.
            </p>

            <p className="text-lg sm:text-xl text-[#FFB6C6] italic">
              Bas itna chahta hu ki aage bhi hum aise hi stupid si baaton pe has sakein,
              <br />
              ek dusre ko tang kar sakein,
              <br />
              lad sakein,
              <br />
              mana sakein,
              <br />
              aur phir thodi der baad normal ho jaayein. 😭
            </p>

            <p className="pt-2 text-[#E8CCD4]">
              Aur haan…
            </p>

            <p className="font-serif text-xl sm:text-2xl text-[#FFE5EC] font-medium">
              future mein bhi tumhe tang karne ka full plan hai.
            </p>

            <p className="font-handwriting text-2xl sm:text-3xl text-[#FF859F] pt-2">
              So unfortunately, tum stuck ho mere saath. 🤭❤️
            </p>

            <div className="text-right text-xs font-handwriting text-[#E0657C] pt-2">
              — Aditya ♡
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
