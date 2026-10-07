export interface ChatMemoryItem {
  id: string;
  theme: string;
  snippet: string;
  dateTag: string;
  artifactType: 'polaroid' | 'pinned-note' | 'scrapbook-cutout' | 'folded-card';
  rotation: string;
  messages: Array<{
    sender: 'Mansii' | 'Aditya';
    text: string;
    time: string;
    isHighlighted?: boolean;
  }>;
  adityaNote: string;
}

export const CHAT_MEMORIES: ChatMemoryItem[] = [
  {
    id: "chat-1",
    theme: "“Chup kyu rehte ho? Mujhe bataya karo na.”",
    snippet: "Jab maine baat taalne ki koshish ki, aur tumne pakad liya.",
    dateTag: "Late Night · 1:24 AM",
    artifactType: "polaroid",
    rotation: "-rotate-2",
    messages: [
      { sender: "Aditya", text: "kuch nahi bas thoda overthink kar raha tha... leave it yr, tum so jao", time: "1:22 AM" },
      { sender: "Mansii", text: "Aise kaise leave it? Chup kyu rehte ho tum hamesha?", time: "1:23 AM" },
      { sender: "Mansii", text: "jo bhi problem hai share kiya karo na mujhse. Main sunne ke liye hu na yrr.", time: "1:24 AM", isHighlighted: true },
      { sender: "Aditya", text: "sorry yr, bas aadat hai sab apne andar rakhne ki...", time: "1:25 AM" },
      { sender: "Mansii", text: "Toh aadat badlo paglu. Tum mere liye important ho, samjhe?", time: "1:25 AM", isHighlighted: true },
    ],
    adityaNote: "Pehli baar kisi ne itne haq se bola tha ki 'chup mat raha karo, mujhe bataya karo'. I took a screenshot instantly because nobody had ever cared to listen like that."
  },
  {
    id: "chat-2",
    theme: "“Main hu na tumhare saath, hamesha.”",
    snippet: "Wo chaar shabd jinhone mera sara darr khatam kar diya.",
    dateTag: "Rainy Afternoon · 4:18 PM",
    artifactType: "pinned-note",
    rotation: "rotate-1",
    messages: [
      { sender: "Aditya", text: "kabhi kabhi lagta hai main sab kuch mess up kar deta hu... sab overwhelming lag raha hai", time: "4:16 PM" },
      { sender: "Mansii", text: "Hey suno, pehle deep breath lo. Aisa bilkul nahi hai.", time: "4:17 PM" },
      { sender: "Mansii", text: "tum akele nahi ho Aditya. Main hu na tumhare saath, hamesha. Samjhe?", time: "4:18 PM", isHighlighted: true },
      { sender: "Aditya", text: "hamesha? sach me?", time: "4:19 PM" },
      { sender: "Mansii", text: "Haan bby hamesha. Without a doubt. So stop overthinking now okay? ♡", time: "4:19 PM" },
    ],
    adityaNote: "Jab tumne bola 'main hu na tumhare saath', mere dil se ek bohot bada weight utar gaya tha. That simple line gave me so much peace."
  },
  {
    id: "chat-3",
    theme: "“Tum mujhe kabhi bother nahi kar sakte.”",
    snippet: "Jab mujhe lagta tha main apne rants se annoy kar raha hu.",
    dateTag: "Late Night · 2:10 AM",
    artifactType: "folded-card",
    rotation: "-rotate-1",
    messages: [
      { sender: "Aditya", text: "sorry for the long rant yr... mujhe laga tum irritate ho jaogi mere overthinking se", time: "2:08 AM" },
      { sender: "Mansii", text: "Pagal ho kya tum bilkul? Tum mujhe kabhi bother nahi kar sakte", time: "2:09 AM", isHighlighted: true },
      { sender: "Mansii", text: "I genuinely love talking to you. Tumhari har chhoti baat mere liye matter karti hai.", time: "2:10 AM" },
      { sender: "Aditya", text: "sach me? mujhe lagta hai main bore kar deta hu", time: "2:11 AM" },
      { sender: "Mansii", text: "Arey cutie, bilkul bhi nahi. Tumse baat karke mera din acha hota hai sach me.", time: "2:12 AM" },
    ],
    adityaNote: "Main hamesha darr ke type karta tha ki irritate na ho jao. But reading this made me realize ki tumhare saath I can be 100% honest without any filter."
  },
  {
    id: "chat-4",
    theme: "“I'm so grateful for you, Aditya.”",
    snippet: "Tumhara wo achanak se gratitude express karna.",
    dateTag: "Sunday Morning · 11:15 AM",
    artifactType: "scrapbook-cutout",
    rotation: "rotate-2",
    messages: [
      { sender: "Mansii", text: "You know what Aditya? I'm honestly so grateful ki tum meri life me ho.", time: "11:12 AM", isHighlighted: true },
      { sender: "Aditya", text: "arre sach me? kya ho gaya achanak se haha", time: "11:13 AM" },
      { sender: "Mansii", text: "Bas randomly realize hua. The way you make me laugh, the way you listen to all my drama... you're so special yr", time: "11:14 AM" },
      { sender: "Aditya", text: "tum meri life ki best cheez ho Mansii, no competition.", time: "11:15 AM" },
      { sender: "Mansii", text: "I love you so much sweetheart ♡", time: "11:16 AM" },
    ],
    adityaNote: "Ye padh ke main literally phone pakad ke smile kar raha tha for 10 straight minutes. I still open this screenshot whenever I have a rough day."
  },
  {
    id: "chat-5",
    theme: "“Text dekh ke pata chal raha hai mood off hai.”",
    snippet: "Jab tum mere bina bole sab samajh leti ho.",
    dateTag: "Evening · 7:35 PM",
    artifactType: "polaroid",
    rotation: "-rotate-3",
    messages: [
      { sender: "Aditya", text: "haa sab theek hai, normal din tha bas", time: "7:32 PM" },
      { sender: "Mansii", text: "Jhooth mat bolo. Tumhare text ki tone dekh ke pata chal raha hai mood off hai.", time: "7:33 PM" },
      { sender: "Mansii", text: "Kya hua batao? Chup mat baitho ab.", time: "7:34 PM", isHighlighted: true },
      { sender: "Aditya", text: "tumhe kaise pata chal jata hai har baar yr...", time: "7:35 PM" },
      { sender: "Mansii", text: "Kyunki main jaanti hu tumhe paglu. Ab batao kya baat hai.", time: "7:35 PM" },
    ],
    adityaNote: "Tumhari yahi baat sabse pyaari lagti hai. Main chahe kitna bhi act karu ki 'sab normal hai', tum ek second me pakad leti ho. Itna dhyan kisi ne kabhi nahi diya mera."
  }
];
