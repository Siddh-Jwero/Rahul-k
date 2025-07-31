import { Subject } from "../types";

export const math: Subject = {
  id: 32,
  name: { en: "Math", hi: "गणित" },
  icon: "➗",
  chapters: [
    { id: 3201, name: { en: "Numbers", hi: "संख्याएँ" }, icon: "#️⃣", topics: [{ id: 32011, name: { en: "Numbers", hi: "संख्याएँ" }, questions: [] }] },
    {
      id: 3202, name: { en: "Addition", hi: "जोड़" }, icon: "➕",
      topics: [{
        id: 32021, name: { en: "Addition", hi: "जोड़" },
        questions: [
          { id: 1, question_text: { en: "What is 25 + 10?", hi: "25 + 10 क्या है?" }, options: { en: ["30", "35", "40"], hi: ["३०", "३५", "४०"] }, correct_answer_index: 1 },
          { id: 2, question_text: { en: "Ram has 15 apples and Sita gives him 5 more. How many apples does Ram have now?", hi: "राम के पास 15 सेब हैं और सीता उसे 5 और देती है। अब राम के पास कितने सेब हैं?" }, options: { en: ["18", "20", "25"], hi: ["१८", "२०", "२५"] }, correct_answer_index: 1 },
        ]
      }]
    },
    {
      id: 3203, name: { en: "Subtraction", hi: "घटाना" }, icon: "➖",
      topics: [{
        id: 32031, name: { en: "Subtraction", hi: "घटाना" },
        questions: [
          { id: 1, question_text: { en: "What is 50 - 20?", hi: "50 - 20 क्या है?" }, options: { en: ["20", "25", "30"], hi: ["२०", "२५", "३०"] }, correct_answer_index: 2 },
          { id: 2, question_text: { en: "There are 40 birds on a tree. 15 birds fly away. How many birds are left?", hi: "एक पेड़ पर 40 पक्षी हैं। 15 पक्षी उड़ जाते हैं। कितने पक्षी बचे हैं?" }, options: { en: ["25", "30", "35"], hi: ["२५", "३०", "३५"] }, correct_answer_index: 0 },
        ]
      }]
    },
  ],
};