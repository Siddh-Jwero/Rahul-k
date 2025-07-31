export const students = [
  { id: 1, name: "आरव", class: "3", username: "aarav", pin: "1234" },
  { id: 2, name: "मीरा", class: "3", username: "meera", pin: "5678" },
];

export const subjects = [
  { id: 1, name: "गणित", icon: "🧮" },
  { id: 2, name: "विज्ञान", icon: "🔬", disabled: true },
  { id: 3, name: "हिन्दी", icon: "✍️", disabled: true },
];

export const questions = [
  // Math - Addition
  { id: 1, subjectId: 1, topic: 'जोड़', difficulty: 1, question_text: "2 + 3 = ?", options: ["4", "5", "6"], correct_answer_index: 1 },
  { id: 2, subjectId: 1, topic: 'जोड़', difficulty: 1, question_text: "5 + 1 = ?", options: ["6", "7", "5"], correct_answer_index: 0 },
  { id: 3, subjectId: 1, topic: 'जोड़', difficulty: 2, question_text: "12 + 5 = ?", options: ["17", "16", "18"], correct_answer_index: 0 },
  { id: 4, subjectId: 1, topic: 'जोड़', difficulty: 2, question_text: "15 + 10 = ?", options: ["20", "35", "25"], correct_answer_index: 2 },
  { id: 5, subjectId: 1, topic: 'जोड़', difficulty: 3, question_text: "25 + 30 = ?", options: ["55", "50", "65"], correct_answer_index: 0 },
  // Math - Fractions
  { id: 6, subjectId: 1, topic: 'भिन्न', difficulty: 3, question_text: "1/2 का क्या मतलब है?", options: ["आधा", "पूरा", "चौथाई"], correct_answer_index: 0 },
  { id: 7, subjectId: 1, topic: 'भिन्न', difficulty: 4, question_text: "चित्र में कितना भाग रंगा हुआ है? (चित्र: एक वृत्त 4 भागों में बंटा है, 1 रंगा हुआ है)", options: ["1/4", "1/2", "3/4"], correct_answer_index: 0 },
  { id: 8, subjectId: 1, topic: 'भिन्न', difficulty: 4, question_text: "1/3 + 1/3 = ?", options: ["2/3", "1/6", "2/6"], correct_answer_index: 0 },
  { id: 9, subjectId: 1, topic: 'भिन्न', difficulty: 5, question_text: "1/2 + 1/4 = ?", options: ["2/6", "3/4", "2/4"], correct_answer_index: 1 },
  { id: 10, subjectId: 1, topic: 'भिन्न', difficulty: 5, question_text: "एक सेब के 4 बराबर हिस्से किये। आपने 1 हिस्सा खा लिया। कितना सेब बचा?", options: ["1/4", "1/2", "3/4"], correct_answer_index: 2 },
];

export const progress: { [key: number]: { badges: string[]; stars: number } } = {
  1: { badges: ["गणित में माहिर"], stars: 150 },
  2: { badges: [], stars: 50 },
};