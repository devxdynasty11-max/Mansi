import React, { useState, useEffect } from 'react';
import { Volume2, Music } from 'lucide-react';
import { musicBox } from '../utils/audioPlayer';

interface HeaderNavProps {
  currentSection: string;
  onNavigate: (sectionId: string) => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ currentSection, onNavigate }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleMusic = () => {
    const state = musicBox.toggle();
    setIsPlaying(state);
  };

  const navItems = [
    { id: 'envelope', label: 'Start' },
    { id: 'intro', label: 'Intro' },
    { id: 'tum', label: 'Tum' },
    { id: 'little-things', label: 'Little Things' },
    { id: 'chats', label: 'Our Chats' },
    { id: 'letter', label: 'Love Letter' },
    { id: 'reasons', label: '100 Things' },
    { id: 'night-sky', label: 'Midnight' },
    { id: 'always', label: 'Always' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        hasScrolled
          ? 'bg-[#0B0508]/90 backdrop-blur-md border-b border-[#300F1C]/80 py-3 shadow-lg shadow-black/60'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Zone 1: Brand title */}
        <button
          onClick={() => onNavigate('envelope')}
          className="text-left group cursor-pointer"
        >
          <span className="font-serif text-lg sm:text-xl font-medium tracking-tight text-[#F5E8E4] group-hover:text-[#E04B68] transition-colors">
            Mansiiiii <span className="font-handwriting text-xl text-[#C42340]">💗</span>
          </span>
        </button>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-xs tracking-wider uppercase font-medium text-[#B3939F]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`transition-colors hover:text-[#F8ECE8] cursor-pointer whitespace-nowrap ${
                currentSection === item.id
                  ? 'text-[#E04B68] font-semibold border-b border-[#E04B68]'
                  : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Music player */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleMusic}
            aria-label={isPlaying ? 'Pause music' : 'Play song for Mansii'}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs transition-all cursor-pointer whitespace-nowrap shadow-md ${
              isPlaying
                ? 'bg-[#6A1224] text-[#FFF0F3] border border-[#A6223D] shadow-[0_0_15px_rgba(166,34,61,0.4)]'
                : 'bg-[#180A12] text-[#D4BAC4] hover:bg-[#25101C] border border-[#3E1526]'
            }`}
          >
            {isPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 animate-pulse text-[#FFC4D0]" />
                <span className="font-handwriting text-sm leading-none text-[#FFE6EC]">♪ playing for you</span>
              </>
            ) : (
              <>
                <Music className="w-3.5 h-3.5 text-[#C42340]" />
                <span className="font-handwriting text-sm leading-none">♪ a little song for you</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
