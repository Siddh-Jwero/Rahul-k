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
          { id: 2, question_text: { en: "Who came to talk to the rooster?", hi: "मुर्गे से बात करने कौन आया?" }, options: { en: ["A cat", "A dog", "A fox"], hi: ["एक बिल्ली", "एक कुत्ता", "एक लोमड़ी"] }, correct_answer_index: 2 },
          { id: 3, question_text: { en: "What news did the fox tell the rooster?", hi: "लोमड़ी ने मुर्गे को क्या खबर सुनाई?" }, options: { en: ["That all animals are now friends", "That there is a party in the forest", "That the king is coming"], hi: ["कि सभी जानवर अब दोस्त बन गए हैं", "कि जंगल में एक पार्टी है", "कि राजा आ रहा है"] }, correct_answer_index: 0 },
        ]
      }]
    },
  ],
};