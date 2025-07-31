export interface Question {
  id: number;
  question_text: { en: string; hi: string };
  options: { en: string[]; hi: string[] };
  correct_answer_index: number;
}

export interface Topic {
  id: number;
  name: { en: string; hi: string };
  questions: Question[];
}

export interface Chapter {
  id: number;
  name: { en: string; hi: string };
  icon: string;
  topics: Topic[];
}

export interface Subject {
  id: number;
  name: { en: string; hi: string };
  icon: string;
  disabled?: boolean;
  chapters: Chapter[];
}

export interface ClassLevel {
  id: number;
  name:string;
  subjects: Subject[];
}