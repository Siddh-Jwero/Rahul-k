import { Subject } from "../types";

export const math: Subject = {
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
};