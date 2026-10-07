import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { REASONS_LIST, ReasonItem } from '../data/reasonsData';
import { WashiTape, HeartDoodle } from './decorations/ScrapbookDecorations';
import { Shuffle, ArrowRight, ArrowLeft, Grid, Layers } from 'lucide-react';
import { HiddenLoveNote } from './HiddenLoveNote';

interface ReasonsWallProps {
  onSecretFound?: (message: string) => void;
}

export const ReasonsWall: React.FC<ReasonsWallProps> = ({ onSecretFound }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'stack' | 'grid'>('stack');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const filteredReasons = selectedTag === 'all'
    ? REASONS_LIST
    : REASONS_LIST.filter((r) => r.tag === selectedTag);

  const activeReason: ReasonItem = filteredReasons[currentIndex % filteredReasons.length] || REASONS_LIST[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredReasons.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredReasons.length) % filteredReasons.length);
  };

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * filteredReasons.length);
    setCurrentIndex(randomIndex);
  };

  return (
    <section id="reasons" className="relative py-14 sm:py-28 px-3.5 sm:px-6 max-w-5xl mx-auto overflow-hidden">
      {/* Chapter header */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2 sm:space-y-3">
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#B86276] font-mono">
          Chapter VI · 100 Little Things
        </span>
        <h2 className="font-serif text-2xl xs:text-3xl sm:text-5xl text-[#F9ECE9] tracking-tight">
          100 reasons why I love having you in my life ♡
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-1.5 pt-0.5">
          <p className="font-handwriting text-base xs:text-lg sm:text-xl text-[#D89EA9]">
            (har ek reason sach hai, no exaggeration)
          </p>
          {onSecretFound && (
            <HiddenLoveNote
              label="quick calculation… ✎"
              message="I may be bad at math but i'll give you value you deserve"
              onOpen={onSecretFound}
              className="opacity-75"
            />
          )}
        </div>
      </div>

      {/* Control bar: Filters & View mode */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-6 sm:mb-8 bg-[#140810] p-2 xs:p-2.5 rounded-lg border border-[#3E1423]">
        {/* Category Tabs (Smooth touch scrolling on mobile) */}
        <div className="flex items-center gap-1.5 overflow-x-auto text-[11px] xs:text-xs font-mono py-0.5 touch-pan-x w-full sm:w-auto scrollbar-none">
          {['all', 'heartfelt', 'tender', 'little-things', 'funny'].map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setSelectedTag(tag);
                setCurrentIndex(0);
              }}
              className={`px-2.5 xs:px-3 py-1.5 min-h-[34px] rounded-md uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap shrink-0 active:scale-95 ${
                selectedTag === tag
                  ? 'bg-[#8E142B] text-[#FFF0F3] font-semibold shadow-xs'
                  : 'text-[#B88796] hover:text-[#FFCED8] hover:bg-[#200B17]'
              }`}
            >
              {tag.replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* View mode toggle */}
        <div className="flex items-center justify-end">
          <button
            onClick={() => setViewMode(viewMode === 'stack' ? 'grid' : 'stack')}
            className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 min-h-[34px] rounded-md bg-[#1C0B15] border border-[#481628] text-[#E0B2BE] hover:bg-[#2A0F21] active:scale-95 transition-colors cursor-pointer shrink-0"
          >
            {viewMode === 'stack' ? (
              <>
                <Grid className="w-3.5 h-3.5 text-[#C42340]" /> <span>View All 100</span>
              </>
            ) : (
              <>
                <Layers className="w-3.5 h-3.5 text-[#C42340]" /> <span>Card Stack</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* View Mode: Interactive Dark Romance Card Stack */}
      {viewMode === 'stack' ? (
        <div className="flex flex-col items-center">
          {/* Card Stack Container */}
          <div className="relative w-full max-w-lg min-h-[280px] xs:min-h-[300px] sm:min-h-[330px] flex items-center justify-center">
            {/* Background layered faux cards */}
            <div className="absolute inset-x-3 inset-y-2 bg-[#180A13] rounded-lg border border-[#3A1221] -rotate-2 sm:-rotate-3 translate-y-2 sm:translate-y-3 pointer-events-none shadow-md opacity-70" />
            <div className="absolute inset-x-2 inset-y-1 bg-[#1E0C18] rounded-lg border border-[#451629] rotate-1 sm:rotate-2 translate-y-1 sm:translate-y-1.5 pointer-events-none shadow-md opacity-80" />

            {/* Top Interactive Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReason.id}
                initial={{ opacity: 0, scale: 0.94, y: 15, rotate: -1 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -20, rotate: 2 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                onClick={handleNext}
                className="relative w-full min-h-[270px] xs:min-h-[290px] sm:min-h-[320px] bg-[#140810] rounded-lg border border-[#4D1627] p-4.5 xs:p-6 sm:p-8 shadow-2xl flex flex-col justify-between cursor-pointer group active:scale-[0.99]"
                style={{
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.7), inset 0 0 30px rgba(70, 10, 25, 0.2)',
                }}
              >
                {/* Washi Tape at Top */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <WashiTape
                    variant={activeReason.id % 2 === 0 ? 'crimson' : 'wine'}
                    rotation="rotate-1"
                  />
                </div>

                {/* Card Header */}
                <div className="flex justify-between items-center border-b border-dashed border-[#2F0E1B] pb-2 sm:pb-3">
                  <span className="font-mono text-[10px] xs:text-xs uppercase tracking-widest text-[#B86276]">
                    Reason #{activeReason.number} of 100
                  </span>
                  <span className="text-[9px] xs:text-[10px] font-mono uppercase bg-[#240B18] px-2 py-0.5 rounded-xs text-[#E0AAB7] border border-[#421425]">
                    {activeReason.tag}
                  </span>
                </div>

                {/* Main Reason Text */}
                <div className="my-auto py-3">
                  <p className="font-serif text-lg xs:text-xl sm:text-2xl text-[#FCEEF1] leading-snug">
                    “{activeReason.text}”
                  </p>
                </div>

                {/* Card Footer */}
                <div className="border-t border-[#2F0E1B] pt-2.5 sm:pt-3 flex items-center justify-between text-xs text-[#A86E7E]">
                  <span className="font-handwriting text-xs xs:text-sm text-[#FF8DA5] flex items-center gap-1">
                    <HeartDoodle size={13} color="#C42340" /> for Mansii
                  </span>
                  <span className="font-mono text-[10px] xs:text-[11px] text-[#A86E7E] group-hover:text-[#FFA3B5] transition-colors">
                    tap card for next →
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive Nav Controls (touch-optimized 44px) */}
          <div className="mt-6 sm:mt-8 flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="min-h-[44px] min-w-[44px] rounded-full bg-[#180A13] border border-[#421526] text-[#E0B2BE] hover:bg-[#2A0F21] active:scale-95 transition-all cursor-pointer shadow-md flex items-center justify-center"
              title="Previous Reason"
              aria-label="Previous reason"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleRandom}
              className="min-h-[44px] flex items-center gap-1.5 px-4 rounded-full bg-[#180A13] border border-[#421526] text-xs font-mono uppercase text-[#E0B2BE] hover:bg-[#2A0F21] active:scale-95 transition-all cursor-pointer shadow-md"
            >
              <Shuffle className="w-3.5 h-3.5 text-[#C42340]" />
              <span>Surprise Me</span>
            </button>

            <button
              onClick={handleNext}
              className="min-h-[44px] min-w-[44px] rounded-full bg-[#780F22] text-[#FFF0F3] border border-[#A6223D] hover:bg-[#8F142A] active:scale-95 transition-all cursor-pointer shadow-lg shadow-[#780F22]/30 flex items-center justify-center"
              title="Next Reason"
              aria-label="Next reason"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* View Mode: Comprehensive Dark Scrapbook Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 max-h-[70vh] overflow-y-auto overscroll-contain p-2 pr-3 border border-[#3E1423] rounded-lg bg-[#0F060C]/90">
          {filteredReasons.map((item) => (
            <div
              key={item.id}
              className="p-3.5 xs:p-4 bg-[#140810] rounded-md border border-[#36111F] shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center text-[9px] xs:text-[10px] font-mono text-[#9E6272] mb-1.5 pb-1 border-b border-[#2A0D18]">
                  <span>REASON #{item.number}</span>
                  <span className="uppercase">{item.tag}</span>
                </div>
                <p className="font-serif text-sm xs:text-base text-[#F7E7E9] leading-snug">
                  “{item.text}”
                </p>
              </div>
              <div className="mt-2.5 pt-1.5 text-right text-[11px] font-handwriting text-[#E07A90]">
                Aditya ♡
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
