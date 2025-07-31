export const teacher = {
  username: "teacher",
  password: "password123",
};

export const students_performance = [
  { id: 1, name: "आरव", overall_status: 'अच्छा' as const, last_active: "आज", ai_insight: "आरव 'जोड़' में बहुत अच्छा है, लेकिन 'भिन्न' के सवालों में संघर्ष कर रहा है। उसे भिन्न की अवधारणा को समझने के लिए और अभ्यास की आवश्यकता है।" },
  { id: 2, name: "मीरा", overall_status: 'औसत' as const, last_active: "कल", ai_insight: "मीरा सभी विषयों में लगातार प्रगति कर रही है। उसे और कठिन सवालों के लिए प्रोत्साहित किया जा सकता है।" },
  { id: 3, name: "रोहन", overall_status: 'कमजोर' as const, last_active: "3 दिन पहले", ai_insight: "रोहन को बुनियादी 'जोड़' के सवालों में भी कठिनाई हो रही है। उसे व्यक्तिगत ध्यान देने की आवश्यकता है।" },
];

export const student_details: { [key: string]: any } = {
  "1": {
    name: "आरव",
    class: "3",
    topic_wise_performance: [
      { topic: 'जोड़', score: 95 },
      { topic: 'भिन्न', score: 40 },
      { topic: 'गुणा', score: 60 },
    ],
  },
  "2": {
    name: "मीरा",
    class: "3",
    topic_wise_performance: [
      { topic: 'जोड़', score: 80 },
      { topic: 'भिन्न', score: 75 },
      { topic: 'गुणा', score: 70 },
    ],
  },
  "3": {
    name: "रोहन",
    class: "3",
    topic_wise_performance: [
      { topic: 'जोड़', score: 30 },
      { topic: 'भिन्न', score: 25 },
      { topic: 'गुणा', score: 20 },
    ],
  },
};