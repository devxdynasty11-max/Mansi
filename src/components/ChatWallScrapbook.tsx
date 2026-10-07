import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WashiTape, PaperClipSvg, HeartDoodle } from './decorations/ScrapbookDecorations';
import { BookmarkCheck, MessageSquareHeart } from 'lucide-react';

interface ChatItem {
  id: string;
  badge: string;
  caption: string;
  rotation: string;
  dialogue: Array<{ sender: 'Mansii' | 'Aditya'; text: string; isHighlighted?: boolean }>;
  reflection: string;
}

const CHAT_DATA: ChatItem[] = [
  {
    id: 'chat-1',
    badge: '12:56 AM · The Heartfelt Note',
    caption: '“this one stayed with me.”',
    rotation: '-rotate-2',
    dialogue: [
      { sender: 'Mansii', text: 'HAPPY BESTFRIEND DAY BABYYYY 🎀🌸 I don’t think I say this enough, but I’m really lucky to have you in my life. Thank you so so muchhhhh for all the laughter, the endless conversations, the silly moments, and for always being there when I need youuu ✨😄' },
      { sender: 'Mansii', text: 'You make ordinary days feel special just by being a part of them. You understand me in ways that many people can’t understand and when I overthink you always over explain.... I am so grateful for that sweetheart ✨💖✨', isHighlighted: true },
      { sender: 'Mansii', text: 'YOU ARE MY ONE AND ONLY FAVOURITE PERSON ✨🥹💖 YOU MAKE ME FEEL SO SPECIAL AND LOVED 💖... I AM ALWAYS WITH YOU 💖🫂 and You areee onlyyyyy mineeeee understand babeeew??? 🥹💖✨', isHighlighted: true },
    ],
    reflection: 'Ye message padh ke mera pura din nahi, pura mahina ban gaya tha. Jab tumne bola na “You are only mine understand babeeew???”, I literally took a screenshot right then.',
  },
  {
    id: 'chat-2',
    badge: '12:57 AM · Late Night Reassurance',
    caption: '“ye wala padh ke smile aa gayi thi.”',
    rotation: 'rotate-1',
    dialogue: [
      { sender: 'Aditya', text: 'Thankuu yrrr babyyyy 🥹💖' },
      { sender: 'Aditya', text: 'Sachh mee naa 😉' },
      { sender: 'Mansii', text: 'Jii haa sach mai 💖' },
      { sender: 'Mansii', text: 'Areyy thank you nii yrr .... Yeh to mai khud chahti hu tumhe smjhna tumhari baate sunna jitna ho sake tumhe smjhna ✨💖 or tumhare sath rhena 🫂✨ Smjheeee?? Pagluuu 🙈💖', isHighlighted: true },
      { sender: 'Aditya', text: 'Phir bhi thankuuu soo muchhh yrrr loveee youu soo muchhhh babyyyy 💖✨❤️🫂' },
      { sender: 'Mansii', text: 'I Loveee youu toooo babyy 😄💖🫂❤️✨', isHighlighted: true },
    ],
    reflection: '“Yeh toh main khud chahti hu tumhe samajhna... or tumhare sath rehna. Smjheeee?? Pagluuu”. I still re-read this chat jab bhi main low feel karta hu.',
  },
  {
    id: 'chat-3',
    badge: 'Aditya’s Bouquet Note',
    caption: '“proof that you are actually this sweet 😭”',
    rotation: '-rotate-1',
    dialogue: [
      { sender: 'Aditya', text: 'Binuuu jii aapke liyee 💐 Dear binuu jii, Thankyouuu sooo muchhh yrr for being you. I honestly don’t think life would feel this beautiful if you weren’t here.' },
      { sender: 'Aditya', text: 'Talking to you every day genuinely makes everything feel lighter, calmer, and happier. You became the most special and my favorite person naturally.' },
      { sender: 'Aditya', text: 'Your care, understanding, and presence mean more to me than I can explain properly. You are purest and cutest soul I’ve ever met. Aapka aagyakaari dost, Aditya ❤️', isHighlighted: true },
    ],
    reflection: 'Ye maine tumhe bheja tha, but sach bolu toh har ek word 100% sach tha. You’re truly one in billions, cutieee.',
  },
  {
    id: 'chat-4',
    badge: 'Exclusive Coupons for Mansii',
    caption: '“haan, ye screenshot rakhna toh banta tha.”',
    rotation: 'rotate-2',
    dialogue: [
      { sender: 'Mansii', text: '🎟️ FREE KISSES — uses: unlimited · expires: never' },
      { sender: 'Mansii', text: '🎟️ FREE TICKET FOR CUDDLE with me — uses: unlimited · expires: never' },
      { sender: 'Mansii', text: '🎟️ FREE HUGS — available use 24/7 <3', isHighlighted: true },
      { sender: 'Mansii', text: '🎟️ FREE TICKET FOR SLEEP CALL with me — just talk to me about anything ✨' },
    ],
    reflection: 'Inme se koi bhi coupon expire nahi hone wala, and you’re never getting rid of me. 🤭',
  },
  {
    id: 'chat-5',
    badge: 'Care & Understanding',
    caption: '“tum itna care kyun karti ho yrr 😭”',
    rotation: '-rotate-2',
    dialogue: [
      { sender: 'Aditya', text: 'kuch nahi bas thoda heavy lag raha tha...' },
      { sender: 'Mansii', text: 'chup kyu rehte ho tum? jo bhi problem hai share kiya karo na mujhse. Main sunne ke liye hu na yrr.' },
      { sender: 'Mansii', text: 'main hu na tumhare saath, hamesha. Samjhe? Don’t ever feel like you’re alone.', isHighlighted: true },
    ],
    reflection: '“tumhari ye baat mujhe sach me yaad reh gayi.” You never let me suffer in silence.',
  },
];

export const ChatWallScrapbook: React.FC = () => {
  const [activeChat, setActiveChat] = useState<ChatItem | null>(null);

  return (
    <section id="chats" className="relative py-28 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Chapter Heading */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#B86276] font-mono">
          Chapter V · Screenshots
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-[#F9ECE9] tracking-tight">
          Some messages I never want to forget.
        </h2>
        <p className="font-handwriting text-xl sm:text-2xl text-[#E892A4]">
          Normal chats thi tumhare liye shayad… mere liye nahi. ♡
        </p>
      </div>

      {/* Grid of Scrapbook Chat Artifacts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {CHAT_DATA.map((chat, idx) => (
          <motion.div
            key={chat.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            onClick={() => setActiveChat(chat)}
            className={`relative cursor-pointer group bg-[#13080F] p-5 rounded-md border border-[#3E1423] shadow-xl hover:shadow-[0_8px_30px_rgba(180,25,50,0.2)] hover:border-[#8E172E] transition-all duration-300 hover:-translate-y-1 ${chat.rotation}`}
          >
            {/* Washi Tape */}
            <div className="absolute -top-3 left-8 z-20">
              <WashiTape
                variant={idx % 2 === 0 ? 'crimson' : 'wine'}
                rotation={idx % 2 === 0 ? '-rotate-3' : 'rotate-2'}
              />
            </div>

            {/* Header Badge */}
            <div className="flex items-center justify-between border-b border-[#2C0E18] pb-3 mb-3">
              <span className="font-mono text-[10px] text-[#A66072] uppercase flex items-center gap-1.5">
                <BookmarkCheck className="w-3 h-3 text-[#C42340]" />
                {chat.badge}
              </span>
              <span className="font-handwriting text-xs text-[#E0657C]">kept close</span>
            </div>

            {/* Exact Caption */}
            <h3 className="font-handwriting text-xl text-[#FFB6C6] mb-3 leading-snug">
              {chat.caption}
            </h3>

            {/* Dark Romance Chat Bubble Preview */}
            <div className="bg-[#1A0A14] p-3.5 rounded-sm border border-[#3A1221] space-y-2.5 my-2">
              <div className="flex items-center justify-between text-[9px] font-mono text-[#8C5262] pb-1 border-b border-[#2D0D19]">
                <span>PRIVATE WHATSAPP THREAD</span>
                <span className="tracking-widest">● ● ●</span>
              </div>

              {chat.dialogue.map((m, mIdx) => (
                <div
                  key={mIdx}
                  className={`flex flex-col ${
                    m.sender === 'Mansii' ? 'items-start' : 'items-end'
                  }`}
                >
                  <span className="text-[9px] font-mono text-[#A86E7E] mb-0.5">
                    {m.sender}
                  </span>
                  <div
                    className={`max-w-[92%] text-xs px-2.5 py-1.5 rounded-md leading-relaxed ${
                      m.sender === 'Mansii'
                        ? m.isHighlighted
                          ? 'bg-[#3A0D18] text-[#FFE8ED] border border-[#6B182B] font-medium shadow-xs'
                          : 'bg-[#220D1A] text-[#F0D5DC] border border-[#3B1527]'
                        : 'bg-[#180913] text-[#DEC5CC] border border-[#2B0E1D]'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Aditya's confession snippet */}
            <div className="mt-4 pt-3 border-t border-dashed border-[#2C0E18] flex items-center justify-between text-xs text-[#A86E7E]">
              <span className="font-handwriting text-sm text-[#E0657C] flex items-center gap-1">
                <MessageSquareHeart className="w-3.5 h-3.5" /> Aditya's memory
              </span>
              <HeartDoodle size={14} color="#C42340" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {activeChat && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveChat(null)}
            className="fixed inset-0 z-50 bg-[#070305]/85 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-lg w-full bg-[#140810] rounded-lg border border-[#481628] p-6 sm:p-8 shadow-2xl relative"
            >
              <div className="flex justify-between items-center pb-3 border-b border-[#2E0E1B]">
                <div>
                  <span className="font-mono text-[10px] uppercase text-[#A66072]">
                    Artifact · {activeChat.badge}
                  </span>
                  <h4 className="font-handwriting text-2xl text-[#FFB6C6] mt-0.5">
                    {activeChat.caption}
                  </h4>
                </div>
                <button
                  onClick={() => setActiveChat(null)}
                  className="cursor-pointer text-xs font-mono uppercase text-[#A86E7E] hover:text-[#FFCED8]"
                >
                  [close]
                </button>
              </div>

              {/* Chat View */}
              <div className="my-5 bg-[#1C0B15] p-4 rounded-md border border-[#3E1423] space-y-3 max-h-60 overflow-y-auto">
                {activeChat.dialogue.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    className={`flex flex-col ${
                      m.sender === 'Mansii' ? 'items-start' : 'items-end'
                    }`}
                  >
                    <span className="text-[10px] font-mono text-[#A86E7E] mb-0.5">
                      {m.sender}
                    </span>
                    <div
                      className={`max-w-[88%] text-xs sm:text-sm px-3 py-2 rounded-md leading-relaxed ${
                        m.sender === 'Mansii'
                          ? m.isHighlighted
                            ? 'bg-[#3A0D18] text-[#FFE8ED] border border-[#6B182B] font-medium shadow-xs'
                            : 'bg-[#220D1A] text-[#F0D5DC] border border-[#3B1527]'
                          : 'bg-[#180913] text-[#DEC5CC] border border-[#2B0E1D]'
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Aditya's note */}
              <div className="bg-[#1A0A13] p-4 rounded-md border border-[#381120] relative">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#A86E7E]">
                  Why I keep this close:
                </span>
                <p className="font-handwriting text-lg text-[#F2C2CD] mt-1.5 leading-relaxed">
                  “{activeChat.reflection}”
                </p>
                <div className="text-right text-xs font-handwriting text-[#E0657C] mt-2">
                  — Aditya ♡
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
