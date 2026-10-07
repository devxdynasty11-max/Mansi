import React, { useState, useEffect, useRef } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { EnvelopeIntro } from './components/EnvelopeIntro';
import { HerNameIntro } from './components/HerNameIntro';
import { TumSection } from './components/TumSection';
import { LittleThingsScrapbook } from './components/LittleThingsScrapbook';
import { ChatWallScrapbook } from './components/ChatWallScrapbook';
import { LoveLetterSection } from './components/LoveLetterSection';
import { ReasonsWall } from './components/ReasonsWall';
import { NightSkySection } from './components/NightSkySection';
import { FinalLetterSection } from './components/FinalLetterSection';
import { EasterEggToast } from './components/EasterEggToast';

export default function App() {
  const [hasOpenedEnvelope, setHasOpenedEnvelope] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('envelope');
  const [secretMessage, setSecretMessage] = useState<string | null>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const mainContentRef = useRef<HTMLDivElement>(null);

  const handleToggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const handleOpenEnvelope = () => {
    setHasOpenedEnvelope(true);
    // Smooth scroll to chapter intro
    setTimeout(() => {
      const el = document.getElementById('intro');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400);
  };

  const handleNavigate = (sectionId: string) => {
    if (!hasOpenedEnvelope) {
      setHasOpenedEnvelope(true);
    }
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      }
    }, 100);
  };

  const handleSecretFound = (text: string) => {
    setSecretMessage(text);
  };

  // Scroll spy to update active section in header
  useEffect(() => {
    const sectionIds = [
      'envelope',
      'intro',
      'tum',
      'little-things',
      'chats',
      'letter',
      'reasons',
      'night-sky',
      'always',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-25% 0px -45% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [hasOpenedEnvelope]);

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#0A0407] text-[#F3EAE6] selection:bg-[#78182A] selection:text-[#FFF5F7] relative font-sans">
      {/* Top Floating Dark Romance Navigation */}
      <HeaderNav
        currentSection={activeSection}
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Opening: The Envelope */}
      <div id="envelope" className="w-full max-w-[100vw] overflow-x-hidden">
        <EnvelopeIntro onOpen={handleOpenEnvelope} />
      </div>

      {/* The Full Pure Dark Romance Experience */}
      <main ref={mainContentRef} className="relative z-10 transition-opacity duration-700">
        {/* Intro */}
        <HerNameIntro onContinue={() => handleNavigate('tum')} />

        {/* Tum & What You Mean To Me */}
        <TumSection />

        {/* Little Things Scrapbook */}
        <LittleThingsScrapbook onSecretFound={handleSecretFound} />

        {/* Our Chats */}
        <ChatWallScrapbook />

        {/* Love Letter: Okay… ab seriously */}
        <LoveLetterSection />

        {/* 100 Little Things */}
        <ReasonsWall />

        {/* Night Section & Future Section */}
        <NightSkySection onSecretFound={handleSecretFound} />

        {/* Final Page */}
        <FinalLetterSection onSecretFound={handleSecretFound} />
      </main>

      {/* Interactive Secret Easter Egg Toast */}
      <EasterEggToast
        message={secretMessage}
        onClose={() => setSecretMessage(null)}
      />
    </div>
  );
}
