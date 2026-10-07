import React, { useState, useEffect } from 'react';
import { Volume2, Music, Moon, Sun, Menu, X } from 'lucide-react';
import { musicBox } from '../utils/audioPlayer';

interface HeaderNavProps {
  currentSection: string;
  onNavigate: (sectionId: string) => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  currentSection,
  onNavigate,
  theme,
  onToggleTheme,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 40);
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

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full max-w-[100vw] ${
          hasScrolled
            ? theme === 'dark'
              ? 'bg-[#0B0508]/92 backdrop-blur-md border-b border-[#300F1C]/80 py-2.5 shadow-md shadow-black/50'
              : 'bg-[#FAF5F0]/92 backdrop-blur-md border-b border-[#DEC8BD]/80 py-2.5 shadow-sm'
            : 'bg-transparent py-3'
        }`}
      >
        <div className="max-w-6xl mx-auto px-3.5 sm:px-6 flex items-center justify-between">
          {/* Brand Wordmark (Tap to top) */}
          <button
            onClick={() => handleItemClick('envelope')}
            className="text-left group cursor-pointer focus:outline-hidden min-h-[44px] flex items-center shrink-0 pr-1"
            aria-label="Back to start"
          >
            <span
              className={`font-serif text-base sm:text-xl font-medium tracking-tight transition-colors whitespace-nowrap ${
                theme === 'dark' ? 'text-[#F5E8E4]' : 'text-[#2B1B22]'
              }`}
            >
              Mansiiiii <span className="font-handwriting text-lg sm:text-xl text-[#C42340]">💗</span>
            </span>
          </button>

          {/* Desktop Navigation Links (hidden on mobile) */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs tracking-wider uppercase font-medium">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`transition-colors cursor-pointer whitespace-nowrap min-h-[36px] px-1 flex items-center ${
                  currentSection === item.id
                    ? 'text-[#E04B68] font-semibold border-b-2 border-[#E04B68]'
                    : theme === 'dark'
                    ? 'text-[#B3939F] hover:text-[#F8ECE8]'
                    : 'text-[#8E6572] hover:text-[#2B1B22]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Controls: Theme Toggle + Music Player + Mobile Menu */}
          <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2 shrink-0">
            {/* Elegant Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              aria-label={
                theme === 'dark'
                  ? 'Switch to Light Romance theme'
                  : 'Switch to Dark Romance theme'
              }
              title={theme === 'dark' ? 'Light Romance ☀️' : 'Dark Romance 🌙'}
              className={`min-h-[40px] min-w-[40px] xs:min-h-[44px] xs:min-w-[44px] rounded-full flex items-center justify-center transition-all cursor-pointer shadow-xs ${
                theme === 'dark'
                  ? 'bg-[#1A0A13] text-[#FFC4D0] hover:bg-[#280F1F] border border-[#421425]'
                  : 'bg-[#FFF9F5] text-[#9E1B32] hover:bg-[#F2E5DC] border border-[#E3D1C8]'
              }`}
            >
              {theme === 'dark' ? (
                <Moon className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-[#FF8DA5]" />
              ) : (
                <Sun className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-[#9E1B32]" />
              )}
            </button>

            {/* Music Player Button (touch-optimized) */}
            <button
              onClick={handleToggleMusic}
              aria-label={isPlaying ? 'Pause music' : 'Play song for Mansii'}
              className={`min-h-[40px] xs:min-h-[44px] flex items-center gap-1 xs:gap-1.5 px-2.5 xs:px-3 py-1.5 rounded-full text-xs transition-all cursor-pointer whitespace-nowrap shadow-xs active:scale-95 ${
                isPlaying
                  ? 'bg-[#6A1224] text-[#FFF0F3] border border-[#A6223D] shadow-[0_0_12px_rgba(166,34,61,0.4)]'
                  : theme === 'dark'
                  ? 'bg-[#180A12] text-[#D4BAC4] hover:bg-[#25101C] border border-[#3E1526]'
                  : 'bg-[#FFF9F5] text-[#6E4E58] hover:bg-[#F2E5DC] border border-[#E3D1C8]'
              }`}
            >
              {isPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 xs:w-4 xs:h-4 animate-pulse text-[#FFC4D0]" />
                  <span className="font-handwriting text-xs xs:text-sm leading-none text-[#FFE6EC]">
                    playing ♪
                  </span>
                </>
              ) : (
                <>
                  <Music className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-[#C42340]" />
                  <span className="font-handwriting text-xs xs:text-sm leading-none">
                    song ♪
                  </span>
                </>
              )}
            </button>

            {/* Mobile Chapter Drawer Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle chapters navigation"
              className={`lg:hidden min-h-[40px] min-w-[40px] xs:min-h-[44px] xs:min-w-[44px] rounded-full flex items-center justify-center transition-all cursor-pointer ${
                theme === 'dark'
                  ? 'text-[#E0B2BE] hover:text-[#FFEBF0]'
                  : 'text-[#6E4E58] hover:text-[#2B1B22]'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Chapters Drawer (Slides in on tap) */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs lg:hidden flex justify-end"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`w-64 max-w-[80vw] h-full shadow-2xl p-6 pt-20 flex flex-col justify-between overflow-y-auto ${
              theme === 'dark'
                ? 'bg-[#12070E] border-l border-[#3E1423] text-[#F3EAE6]'
                : 'bg-[#FAF5F0] border-l border-[#DEC8BD] text-[#2C1B22]'
            }`}
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#A66072] mb-4">
                Chapters for Mansii
              </p>
              <div className="space-y-1">
                {navItems.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`w-full text-left py-2.5 px-3 rounded-md text-sm font-serif transition-colors flex items-center justify-between ${
                      currentSection === item.id
                        ? 'bg-[#C42340]/15 text-[#E04B68] font-semibold border-l-2 border-[#E04B68]'
                        : 'opacity-80 hover:opacity-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-[10px] opacity-50">0{idx + 1}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#3A1423]/40 text-center">
              <span className="font-handwriting text-sm text-[#FF859F]">
                made with so much love ♡
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
