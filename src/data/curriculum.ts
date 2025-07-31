export interface Question {
  id: number;
  question_text: string;
  options: string[];
  correct_answer_index: number;
}

export interface Topic {
  id: number;
  name: string;
  questions: Question[];
}

export interface Chapter {
  id: number;
  name: string;
  icon: string;
  topics: Topic[];
}

export interface Subject {
  id: number;
  name: string;
  icon: string;
  disabled?: boolean;
  chapters: Chapter[];
}

export interface ClassLevel {
  id: number;
  name: string;
  subjects: Subject[];
}

export const curriculum: ClassLevel[] = [
  {
    id: 3,
    name: "Class 3",
    subjects: [
      {
        id: 1,
        name: "Math",
        icon: "🧮",
        chapters: [
          {
            id: 101,
            name: "Where to Look From",
            icon: "👀",
            topics: [
              {
                id: 1011,
                name: "Views of Objects",
                questions: [
                  { id: 1, question_text: "How does a table look from the top?", options: ["Rectangle", "Line", "Circle"], correct_answer_index: 0 },
                  { id: 2, question_text: "How does a bottle look from the side?", options: ["Cylinder", "Circle", "Square"], correct_answer_index: 0 },
                ],
              },
            ],
          },
          {
            id: 102,
            name: "Fun with Numbers",
            icon: "🔢",
            topics: [
              {
                id: 1021,
                name: "Counting in Tens",
                questions: [
                  { id: 1, question_text: "10, 20, 30, __, 50. What is the missing number?", options: ["35", "40", "45"], correct_answer_index: 1 },
                  { id: 2, question_text: "How many tens are in 70?", options: ["Seven", "Six", "Eight"], correct_answer_index: 0 },
                ],
              },
              {
                id: 1022,
                name: "Place Value",
                questions: [
                  { id: 1, question_text: "In the number 54, what is the place value of 5?", options: ["5", "50", "4"], correct_answer_index: 1 },
                  { id: 2, question_text: "What number has 3 tens and 8 ones?", options: ["83", "308", "38"], correct_answer_index: 2 },
                ],
              },
            ],
          },
        ],
      },
      { id: 2, name: "Science", icon: "🔬", disabled: true, chapters: [] },
      { id: 3, name: "English", icon: "✍️", disabled: true, chapters: [] },
    ],
  },
  // We can add Class 1, 2, 4, 5 data here later
];