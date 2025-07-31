import { Subject } from "../types";

export const math: Subject = {
  id: 22,
  name: { en: "Math", hi: "गणित" },
  icon: "➕",
  chapters: [
    { id: 2201, name: { en: "Our Numbers (1-100)", hi: "हमारी संख्याएँ (1-100)" }, icon: "💯", topics: [{ id: 22011, name: { en: "Our Numbers (1-100)", hi: "हमारी संख्याएँ (1-100)" }, questions: [] }] },
    { id: 2202, name: { en: "Addition of two-digit numbers", hi: "दो अंकों की संख्याओं का जोड़" }, icon: "➕", topics: [{ id: 22021, name: { en: "Addition of two-digit numbers", hi: "दो अंकों की संख्याओं का जोड़" }, questions: [] }] },
  ],
};