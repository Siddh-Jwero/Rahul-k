import { Subject } from "../types";

export const hindi: Subject = {
  id: 11,
  name: { en: "Hindi", hi: "हिन्दी" },
  icon: "अ",
  chapters: [
    { id: 1101, name: { en: "Mera Desh", hi: "मेरा देश" }, icon: "🇮🇳", topics: [{ id: 11011, name: { en: "Mera Desh", hi: "मेरा देश" }, questions: [] }] },
    { id: 1102, name: { en: "Talab", hi: "तालाब" }, icon: "💧", topics: [{ id: 11021, name: { en: "Talab", hi: "तालाब" }, questions: [] }] },
    { id: 1103, name: { en: "Bagh", hi: "बाग" }, icon: "🌳", topics: [{ id: 11031, name: { en: "Bagh", hi: "बाग" }, questions: [] }] },
  ],
};