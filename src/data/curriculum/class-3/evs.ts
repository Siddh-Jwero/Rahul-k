import { Subject } from "../types";

export const evs: Subject = {
  id: 33,
  name: { en: "EVS", hi: "हमारा परिवेश" },
  icon: "🌍",
  chapters: [
    {
      id: 3301, name: { en: "Our Family", hi: "हमारा परिवार" }, icon: "👨‍👩‍👧‍👦",
      topics: [{
        id: 33011, name: { en: "Our Family", hi: "हमारा परिवार" },
        questions: [
          { id: 1, question_text: { en: "What do you call your mother's brother?", hi: "आप अपनी माँ के भाई को क्या कहते हैं?" }, options: { en: ["Uncle", "Father", "Grandfather"], hi: ["मामा", "पिता", "दादा"] }, correct_answer_index: 0 },
          { id: 2, question_text: { en: "A family with parents and children is called a:", hi: "माता-पिता और बच्चों वाले परिवार को क्या कहा जाता है:" }, options: { en: ["Joint Family", "Nuclear Family", "Big Family"], hi: ["संयुक्त परिवार", "एकल परिवार", "बड़ा परिवार"] }, correct_answer_index: 1 },
        ]
      }]
    },
    {
      id: 3302, name: { en: "Our Food", hi: "हमारा भोजन" }, icon: "🍲",
      topics: [{
        id: 33021, name: { en: "Our Food", hi: "हमारा भोजन" },
        questions: [
          { id: 1, question_text: { en: "Which of these do we get from plants?", hi: "इनमें से कौन सी चीज़ हमें पौधों से मिलती है?" }, options: { en: ["Milk", "Eggs", "Rice"], hi: ["दूध", "अंडे", "चावल"] }, correct_answer_index: 2 },
          { id: 2, question_text: { en: "Which food is important for strong bones?", hi: "मजबूत हड्डियों के लिए कौन सा भोजन महत्वपूर्ण है?" }, options: { en: ["Milk", "Chocolate", "Chips"], hi: ["दूध", "चॉकलेट", "चिप्स"] }, correct_answer_index: 0 },
        ]
      }]
    },
  ],
};