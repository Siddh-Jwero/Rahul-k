import { Subject } from "../types";

export const math: Subject = {
  id: 32,
  name: { en: "Math", hi: "गणित" },
  icon: "➗",
  chapters: [
    { id: 3201, name: { en: "Numbers", hi: "संख्याएँ" }, icon: "#️⃣", topics: [{ id: 32011, name: { en: "Numbers", hi: "संख्याएँ" }, questions: [] }] },
    { id: 3202, name: { en: "Addition", hi: "जोड़" }, icon: "➕", topics: [{ id: 32021, name: { en: "Addition", hi: "जोड़" }, questions: [] }] },
  ],
};