import { Subject } from "../types";

export const hindi: Subject = {
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
};