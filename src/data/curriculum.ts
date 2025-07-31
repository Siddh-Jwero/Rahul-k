export interface Question {
  id: number;
  question_text: { en: string; hi: string };
  options: { en: string[]; hi: string[] };
  correct_answer_index: number;
}

export interface Topic {
  id: number;
  name: { en: string; hi: string };
  questions: Question[];
}

export interface Chapter {
  id: number;
  name: { en: string; hi: string };
  icon: string;
  topics: Topic[];
}

export interface Subject {
  id: number;
  name: { en: string; hi: string };
  icon: string;
  disabled?: boolean;
  chapters: Chapter[];
}

export interface ClassLevel {
  id: number;
  name: string;
  subjects: Subject[];
}

export const curriculum: ClassLevel[] = [
  // ================== Class 1 ==================
  {
    id: 1,
    name: "Class 1",
    subjects: [
      {
        id: 11,
        name: { en: "Hindi", hi: "हिन्दी" },
        icon: "अ",
        chapters: [
          { id: 1101, name: { en: "Mera Desh", hi: "मेरा देश" }, icon: "🇮🇳", topics: [{ id: 11011, name: { en: "Mera Desh", hi: "मेरा देश" }, questions: [] }] },
          { id: 1102, name: { en: "Talab", hi: "तालाब" }, icon: "💧", topics: [{ id: 11021, name: { en: "Talab", hi: "तालाब" }, questions: [] }] },
          { id: 1103, name: { en: "Bagh", hi: "बाग" }, icon: "🌳", topics: [{ id: 11031, name: { en: "Bagh", hi: "बाग" }, questions: [] }] },
        ],
      },
      {
        id: 12,
        name: { en: "Math", hi: "गणित" },
        icon: "🔢",
        chapters: [
          { id: 1201, name: { en: "Small-Big, Near-Far", hi: "छोटा-बड़ा, पास-दूर" }, icon: "📏", topics: [{ id: 12011, name: { en: "Small-Big, Near-Far", hi: "छोटा-बड़ा, पास-दूर" }, questions: [] }] },
          { id: 1202, name: { en: "Shapes", hi: "आकृतियाँ" }, icon: "🟡", topics: [{ id: 12021, name: { en: "Shapes", hi: "आकृतियाँ" }, questions: [] }] },
          {
            id: 1203, name: { en: "Numbers 1 to 9", hi: "1 से 9 तक की संख्याएँ" }, icon: "9️⃣",
            topics: [{
              id: 12031, name: { en: "Numbers 1 to 9", hi: "1 से 9 तक की संख्याएँ" },
              questions: [
                { id: 1, question_text: { en: "Which number comes after 3?", hi: "3 के बाद कौन सी संख्या आती है?" }, options: { en: ["2", "4", "5"], hi: ["२", "४", "५"] }, correct_answer_index: 1 },
                { id: 2, question_text: { en: "Count the apples: 🍎🍎🍎🍎🍎", hi: "सेब गिनें: 🍎🍎🍎🍎🍎" }, options: { en: ["Three", "Four", "Five"], hi: ["तीन", "चार", "पांच"] }, correct_answer_index: 2 },
              ]
            }]
          },
        ],
      },
      {
        id: 13,
        name: { en: "English", hi: "English" },
        icon: "A",
        chapters: [
          { id: 1301, name: { en: "Let's Speak", hi: "Let's Speak" }, icon: "🗣️", topics: [{ id: 13011, name: { en: "Let's Speak", hi: "Let's Speak" }, questions: [] }] },
          { id: 1302, name: { en: "Alphabets", hi: "Alphabets" }, icon: "🔤", topics: [{ id: 13021, name: { en: "Alphabets", hi: "Alphabets" }, questions: [] }] },
        ],
      },
    ],
  },
  // ================== Class 2 ==================
  {
    id: 2,
    name: "Class 2",
    subjects: [
      {
        id: 21,
        name: { en: "Hindi", hi: "हिन्दी" },
        icon: "आ",
        chapters: [
          { id: 2101, name: { en: "Who made the Sun-Moon", hi: "जिसने सूरज-चाँद बनाया" }, icon: "🌞", topics: [{ id: 21011, name: { en: "Who made the Sun-Moon", hi: "जिसने सूरज-चाँद बनाया" }, questions: [] }] },
          { id: 2102, name: { en: "Neighborhood", hi: "पास-पड़ोस" }, icon: "🏘️", topics: [{ id: 21021, name: { en: "Neighborhood", hi: "पास-पड़ोस" }, questions: [] }] },
        ],
      },
      {
        id: 22,
        name: { en: "Math", hi: "गणित" },
        icon: "➕",
        chapters: [
          { id: 2201, name: { en: "Our Numbers (1-100)", hi: "हमारी संख्याएँ (1-100)" }, icon: "💯", topics: [{ id: 22011, name: { en: "Our Numbers (1-100)", hi: "हमारी संख्याएँ (1-100)" }, questions: [] }] },
          { id: 2202, name: { en: "Addition of two-digit numbers", hi: "दो अंकों की संख्याओं का जोड़" }, icon: "➕", topics: [{ id: 22021, name: { en: "Addition of two-digit numbers", hi: "दो अंकों की संख्याओं का जोड़" }, questions: [] }] },
        ],
      },
    ],
  },
  // ================== Class 3 ==================
  {
    id: 3,
    name: "Class 3",
    subjects: [
      {
        id: 31,
        name: { en: "Hindi", hi: "हिन्दी" },
        icon: "प",
        chapters: [
          { id: 3101, name: { en: "Prayer", hi: "प्रार्थना" }, icon: "🙏", topics: [{ id: 31011, name: { en: "Prayer", hi: "प्रार्थना" }, questions: [] }] },
          {
            id: 3102, name: { en: "The Rooster and the Fox", hi: "मुर्गा और लोमड़ी" }, icon: "🐓",
            topics: [{
              id: 31021, name: { en: "The Rooster and the Fox", hi: "मुर्गा और लोमड़ी" },
              questions: [
                { id: 1, question_text: { en: "Where was the rooster sitting?", hi: "मुर्गा कहाँ बैठा था?" }, options: { en: ["On the ground", "On the tree", "In the house"], hi: ["ज़मीन पर", "पेड़ पर", "घर में"] }, correct_answer_index: 1 },
              ]
            }]
          },
        ],
      },
      {
        id: 32,
        name: { en: "Math", hi: "गणित" },
        icon: "➗",
        chapters: [
          { id: 3201, name: { en: "Numbers", hi: "संख्याएँ" }, icon: "#️⃣", topics: [{ id: 32011, name: { en: "Numbers", hi: "संख्याएँ" }, questions: [] }] },
          { id: 3202, name: { en: "Addition", hi: "जोड़" }, icon: "➕", topics: [{ id: 32021, name: { en: "Addition", hi: "जोड़" }, questions: [] }] },
        ],
      },
      {
        id: 33,
        name: { en: "EVS", hi: "हमारा परिवेश" },
        icon: "🌍",
        chapters: [
          { id: 3301, name: { en: "Our Family", hi: "हमारा परिवार" }, icon: "👨‍👩‍👧‍👦", topics: [{ id: 33011, name: { en: "Our Family", hi: "हमारा परिवार" }, questions: [] }] },
        ],
      },
      {
        id: 34,
        name: { en: "English", hi: "English" },
        icon: "B",
        chapters: [],
        disabled: true,
      },
      {
        id: 35,
        name: { en: "Sanskrit", hi: "संस्कृत" },
        icon: "म",
        chapters: [],
        disabled: true,
      },
    ],
  },
  // ================== Class 4 ==================
  {
    id: 4,
    name: "Class 4",
    subjects: [
      { id: 41, name: { en: "Hindi", hi: "हिन्दी" }, icon: "फ", chapters: [], disabled: true },
      { id: 42, name: { en: "Math", hi: "गणित" }, icon: "📐", chapters: [], disabled: true },
    ],
  },
  // ================== Class 5 ==================
  {
    id: 5,
    name: "Class 5",
    subjects: [
      { id: 51, name: { en: "Hindi", hi: "हिन्दी" }, icon: "व", chapters: [], disabled: true },
      { id: 52, name: { en: "Math", hi: "गणित" }, icon: "➗", chapters: [], disabled: true },
      {
        id: 53,
        name: { en: "EVS", hi: "हमारा परिवेश" },
        icon: "🌿",
        chapters: [
          {
            id: 5301, name: { en: "Let's play together", hi: "आओ, मिलकर खेलें खेल" }, icon: "🏏",
            topics: [{
              id: 53011, name: { en: "Let's play together", hi: "आओ, मिलकर खेलें खेल" },
              questions: [
                { id: 1, question_text: { en: "Which of these is an outdoor game?", hi: "इनमें से कौन सा खेल बाहर खेला जाता है?" }, options: { en: ["Ludo", "Chess", "Cricket"], hi: ["लूडो", "शतरंज", "क्रिकेट"] }, correct_answer_index: 2 },
              ]
            }]
          },
        ],
      },
    ],
  },
];