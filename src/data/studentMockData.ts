export const students = [
  { id: 1, name: "Aarav", class: "3", username: "aarav", pin: "1234" },
  { id: 2, name: "Meera", class: "3", username: "meera", pin: "5678" },
];

export const subjects = [
  { id: 1, name: "Math", icon: "🧮" },
  { id: 2, name: "Science", icon: "🔬", disabled: true },
  { id: 3, name: "English", icon: "✍️", disabled: true },
];

export const questions = [
  // Math - Addition
  { id: 1, subjectId: 1, topic: 'Addition', difficulty: 1, question_text: "2 + 3 = ?", options: ["4", "5", "6"], correct_answer_index: 1 },
  { id: 2, subjectId: 1, topic: 'Addition', difficulty: 1, question_text: "5 + 1 = ?", options: ["6", "7", "5"], correct_answer_index: 0 },
  { id: 3, subjectId: 1, topic: 'Addition', difficulty: 2, question_text: "12 + 5 = ?", options: ["17", "16", "18"], correct_answer_index: 0 },
  { id: 4, subjectId: 1, topic: 'Addition', difficulty: 2, question_text: "15 + 10 = ?", options: ["20", "35", "25"], correct_answer_index: 2 },
  { id: 5, subjectId: 1, topic: 'Addition', difficulty: 3, question_text: "25 + 30 = ?", options: ["55", "50", "65"], correct_answer_index: 0 },
  // Math - Fractions
  { id: 6, subjectId: 1, topic: 'Fractions', difficulty: 3, question_text: "What does 1/2 mean?", options: ["Half", "Full", "Quarter"], correct_answer_index: 0 },
  { id: 7, subjectId: 1, topic: 'Fractions', difficulty: 4, question_text: "How much of the shape is colored? (Image: A circle divided into 4 parts, 1 is colored)", options: ["1/4", "1/2", "3/4"], correct_answer_index: 0 },
  { id: 8, subjectId: 1, topic: 'Fractions', difficulty: 4, question_text: "1/3 + 1/3 = ?", options: ["2/3", "1/6", "2/6"], correct_answer_index: 0 },
  { id: 9, subjectId: 1, topic: 'Fractions', difficulty: 5, question_text: "1/2 + 1/4 = ?", options: ["2/6", "3/4", "2/4"], correct_answer_index: 1 },
  { id: 10, subjectId: 1, topic: 'Fractions', difficulty: 5, question_text: "An apple is cut into 4 equal parts. You ate 1 part. How much apple is left?", options: ["1/4", "1/2", "3/4"], correct_answer_index: 2 },
];

export const progress: { [key: number]: { badges: string[]; stars: number } } = {
  1: { badges: ["Math Master"], stars: 150 },
  2: { badges: [], stars: 50 },
};