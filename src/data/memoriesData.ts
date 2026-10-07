export interface LittleThingItem {
  id: string;
  note: string;
  detail: string;
  postageNumber: string;
  rotation: string;
  colorScheme: 'parchment' | 'rose' | 'cream' | 'sage';
}

export const LITTLE_THINGS_LIST: LittleThingItem[] = [
  {
    id: "lt-1",
    note: "Jab tum bolti ho: “chup mat raha karo, share kiya karo na.”",
    detail: "Main aksar baatein apne andar rakh leta hu, but tum hamesha pakad leti ho aur bolti ho ki jo bhi problem hai mujhe batao. Sach me yr, it means everything.",
    postageNumber: "No. 01",
    rotation: "-rotate-2",
    colorScheme: "parchment"
  },
  {
    id: "lt-2",
    note: "The way tum meri overthinking ko ek second me shant kar deti ho.",
    detail: "Jab main faltu cheezein soch ke anxious hota hu, tum bas bolti ho 'main hu na tumhare saath, hamesha'. Aur mera sara darr gayab ho jata hai.",
    postageNumber: "No. 02",
    rotation: "rotate-1",
    colorScheme: "rose"
  },
  {
    id: "lt-3",
    note: "Tumhara wo kehna ki “you could never bother me.”",
    detail: "Mujhe hamesha lagta tha ki mere late night rants se tum bore ho jaogi, but the way you reassure me makes me feel so safe around you.",
    postageNumber: "No. 03",
    rotation: "-rotate-1",
    colorScheme: "cream"
  },
  {
    id: "lt-4",
    note: "Jab tum mere bekaar jokes pe bhi bolti ho “paglu ho tum bilkul.”",
    detail: "Chahe main kitni bhi silly baatein karu, tumhara wo cute reaction aur hass dena is literally my favorite thing in the world.",
    postageNumber: "No. 04",
    rotation: "rotate-2",
    colorScheme: "sage"
  },
  {
    id: "lt-5",
    note: "The way tum genuinely care karti ho ki main theek hu ya nahi.",
    detail: "Agar mera mood thoda sa bhi off ho text me, tum turant notice kar leti ho. Itna dhyan kisi ne kabhi nahi rakha mera.",
    postageNumber: "No. 05",
    rotation: "-rotate-3",
    colorScheme: "rose"
  },
  {
    id: "lt-6",
    note: "The comfort of talking to you at the end of a long day.",
    detail: "Din bhar chahe kitna bhi mess ho, tumhara ek text ya call sab kuch halka kar deta hai. Bas lagta hai ab sab theek hai.",
    postageNumber: "No. 06",
    rotation: "rotate-1",
    colorScheme: "parchment"
  }
];
