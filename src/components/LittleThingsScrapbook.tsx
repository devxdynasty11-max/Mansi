import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WashiTape, PressedFlowerSvg, PaperClipSvg, HeartDoodle } from './decorations/ScrapbookDecorations';

interface LittleThingsScrapbookProps {
  onSecretFound: (text: string) => void;
}

const LITTLE_THINGS_DATA = [
  { id: 'lt-1', text: "Tumhara random message aa jaana.", detail: "Bina kisi reason ke tumhara text dekh ke automatically face pe smile aa jaati hai.", rotation: "-rotate-2" },
  { id: 'lt-2', text: "Tumhara bina wajah mujhe samjhana.", detail: "Jab main confuse hota hu ya chup baithta hu, tum bina kisi lecture ke pyaar se samjhati ho.", rotation: "rotate-1" },
  { id: 'lt-3', text: "Tumhara ‘paglu’ bolna 😭", detail: "Iska koi match nahi hai. The way you say it with full affection makes my whole day.", rotation: "-rotate-1" },
  { id: 'lt-4', text: "Tumhara overthink karne par mujhe aur explain karna.", detail: "Screenshots me bhi tumne bola tha na: 'when I overthink you always over explain'. Hum dono ek dusre ko calm karte hain.", rotation: "rotate-2" },
  { id: 'lt-5', text: "Tumhara ye kehna ki kuch bhi ho, mujhe bata dena.", detail: "It gives me so much peace knowing ki I don't have to carry anything alone.", rotation: "-rotate-2" },
  { id: 'lt-6', text: "Tumhara khud se pooch lena ki main theek hu ya nahi.", detail: "Mera text dekh ke tum pehle hi pakad leti ho ki kuch off hai. That genuine care means everything.", rotation: "rotate-1" },
  { id: 'lt-7', text: "Tumhari random bakwaas conversations.", detail: "Duniya ki sabse silly baatein bhi tumhare saath sunne me sabse interesting lagti hain.", rotation: "-rotate-1" },
  { id: 'lt-8', text: "Tumhari cute si reactions.", detail: "Wo chhota sa gussa, wo emojis, wo 'areyy yrr' bolna... it's the cutest thing ever.", rotation: "rotate-2" },
  { id: 'lt-9', text: "Tumhara mujhe reassure karna.", detail: "Jab tum bolti ho 'main hu na tumhare sath hamesha', mera sara stress ek second me gayab ho jata hai.", rotation: "-rotate-2" },
  { id: 'lt-10', text: "Tumhara bas… tum hona.", detail: "Without any filter, completely real, completely mine. You don't have to be anyone else.", rotation: "rotate-1" },
];

export const LittleThingsScrapbook: React.FC<LittleThingsScrapbookProps> = ({ onSecretFound }) => {
  const [selectedItem, setSelectedItem] = useState<{ id: string; text: string; detail: string } | null>(null);

  return (
    <section id="little-things" className="relative py-14 sm:py-28 px-3.5 sm:px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Chapter header */}
      <div className="text-center max-w-xl mx-auto mb-10 sm:mb-16 space-y-2 sm:space-y-3">
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#B86276] font-mono">
          Chapter IV · Notes
        </span>
        <h2 className="font-serif text-2xl xs:text-3xl sm:text-5xl text-[#F9ECE9] tracking-tight">
          Tumhari woh chhoti chhoti cheezein…
        </h2>
        <p className="font-handwriting text-base xs:text-lg sm:text-xl text-[#D89EA9]">
          (the things that make me fall for you every single day)
        </p>
      </div>

      {/* Dark Romance Scrapbook Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5 xs:gap-5 sm:gap-7 relative">
        {LITTLE_THINGS_DATA.map((item, index) => {
          const tapeVariants: Array<'crimson' | 'charcoal' | 'wine'> = ['crimson', 'wine', 'charcoal'];
          const tapeVariant = tapeVariants[index % 3];

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: (index % 4) * 0.08 }}
              onClick={() => setSelectedItem(item)}
              className={`relative cursor-pointer group p-4.5 xs:p-5 sm:p-6 rounded-md bg-[#13080F] border border-[#3C1322] shadow-xl hover:shadow-[0_8px_30px_rgba(180,25,50,0.18)] hover:border-[#8E172E] transition-all duration-300 active:scale-[0.98] sm:${item.rotation}`}
            >
              {/* Top Washi Tape or Paper Clip */}
              {index % 2 === 0 ? (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <WashiTape variant={tapeVariant} rotation={index % 4 === 0 ? '-rotate-1' : 'rotate-1'} />
                </div>
              ) : (
                <div className="absolute -top-3 sm:-top-4 right-4 sm:right-6 z-20">
                  <PaperClipSvg />
                </div>
              )}

              {/* Note Header */}
              <div className="flex items-center justify-between border-b border-[#2C0E18] pb-2 sm:pb-3 mb-3 sm:mb-4">
                <span className="font-mono text-[9px] xs:text-[10px] text-[#A66373] uppercase tracking-wider">
                  No. 0{index + 1}
                </span>
                <HeartDoodle size={13} color="#C42340" />
              </div>

              {/* Exact Note Text */}
              <p className="font-serif text-lg xs:text-xl sm:text-2xl text-[#F7E7E9] leading-snug group-hover:text-[#FFA3B5] transition-colors">
                “{item.text}”
              </p>

              {/* Bottom scribble */}
              <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 flex justify-between items-center text-[10px] xs:text-[11px] font-handwriting text-[#B87A8C]">
                <span>tap to read note</span>
                <span>♡</span>
              </div>
            </motion.div>
          );
        })}

        {/* Easter Egg Pressed Dark Rose */}
        <div
          onClick={() => onSecretFound('you found this ♡ (bina kisi wajah ke tum meri favourite ho)')}
          className="col-span-full sm:col-span-1 sm:absolute sm:-bottom-4 sm:right-8 flex justify-center items-center py-2 cursor-pointer hover:scale-110 active:scale-95 transition-transform group"
          title="A pressed dark rose"
        >
          <div className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#180A12]/80 border border-[#3E1424]">
            <PressedFlowerSvg size={28} className="opacity-80 group-hover:opacity-100" />
            <span className="text-[11px] font-handwriting text-[#E04B68]">
              secret rose ♡
            </span>
          </div>
        </div>
      </div>

      {/* Exact Final Note Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-12 sm:mt-16 max-w-xl mx-auto bg-[#180A13] border border-[#481628] p-5 xs:p-6 sm:p-8 rounded-lg text-center space-y-2.5 sm:space-y-3 shadow-2xl relative"
      >
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <WashiTape variant="crimson" rotation="-rotate-1" />
        </div>
        <p className="text-sm xs:text-base sm:text-lg font-serif italic text-[#DFC2C9] leading-relaxed">
          “shayad tumhe ye sab normal lagta ho,
          <br />
          but mujhe nahi.”
        </p>
        <p className="font-handwriting text-xl xs:text-2xl sm:text-3xl text-[#FF8DA5] pt-1">
          I notice these things. And I love them. ♡
        </p>
        <div className="text-right text-xs font-handwriting text-[#C46D80] pt-1 sm:pt-2">
          — Aditya
        </div>
      </motion.div>

      {/* Note Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 bg-[#070305]/85 backdrop-blur-xs flex items-center justify-center p-3.5"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-md w-full bg-[#140810] border border-[#4D1627] rounded-lg p-5 xs:p-6 sm:p-8 shadow-2xl relative"
            >
              <div className="absolute -top-3 left-6 sm:left-8">
                <WashiTape variant="crimson" rotation="-rotate-1" />
              </div>

              <div className="flex justify-between items-center border-b border-[#300E19] pb-2.5 mb-3.5">
                <span className="font-mono text-[10px] xs:text-xs uppercase tracking-widest text-[#B36879]">
                  A Little Thing
                </span>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-end text-xs font-mono uppercase text-[#9C6070] hover:text-[#FFCED8]"
                  aria-label="Close modal"
                >
                  [close]
                </button>
              </div>

              <h3 className="font-serif text-xl xs:text-2xl text-[#FBEBED] mb-2.5">
                “{selectedItem.text}”
              </h3>

              <p className="font-handwriting text-lg xs:text-xl text-[#F2B6C3] leading-relaxed mb-5">
                {selectedItem.detail}
              </p>

              <div className="text-right border-t border-dashed border-[#3D1422] pt-2.5 text-xs font-handwriting text-[#E0657C]">
                — kept in my heart by Aditya ♡
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
