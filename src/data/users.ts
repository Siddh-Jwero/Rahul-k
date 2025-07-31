export const students = [
  { id: 1, name: "Aarav", class: "3", username: "aarav", pin: "1234" },
  { id: 2, name: "Meera", class: "3", username: "meera", pin: "5678" },
];

export const progress: { [key: number]: { badges: string[]; stars: number } } = {
  1: { badges: ["Math Master"], stars: 150 },
  2: { badges: [], stars: 50 },
};