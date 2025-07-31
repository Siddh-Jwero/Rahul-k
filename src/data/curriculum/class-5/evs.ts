import { Subject } from "../types";

export const evs: Subject = {
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
};