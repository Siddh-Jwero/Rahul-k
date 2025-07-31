export const teacher = {
  username: "teacher",
  password: "password123",
};

export const students_performance = [
  { id: 1, name: "Aarav", overall_status: 'Good' as const, last_active: "Today", ai_insight: "Aarav is excellent at 'Addition' but struggles with 'Fractions'. He needs more practice to understand the concept of fractions." },
  { id: 2, name: "Meera", overall_status: 'Average' as const, last_active: "Yesterday", ai_insight: "Meera is showing consistent progress in all topics. She can be encouraged with more challenging questions." },
  { id: 3, name: "Rohan", overall_status: 'Needs Improvement' as const, last_active: "3 days ago", ai_insight: "Rohan is having difficulty even with basic 'Addition' problems. He requires personalized attention." },
];

export const student_details: { [key: string]: any } = {
  "1": {
    name: "Aarav",
    class: "3",
    topic_wise_performance: [
      { topic: 'Addition', score: 95 },
      { topic: 'Fractions', score: 40 },
      { topic: 'Multiplication', score: 60 },
    ],
  },
  "2": {
    name: "Meera",
    class: "3",
    topic_wise_performance: [
      { topic: 'Addition', score: 80 },
      { topic: 'Fractions', score: 75 },
      { topic: 'Multiplication', score: 70 },
    ],
  },
  "3": {
    name: "Rohan",
    class: "3",
    topic_wise_performance: [
      { topic: 'Addition', score: 30 },
      { topic: 'Fractions', score: 25 },
      { topic: 'Multiplication', score: 20 },
    ],
  },
};