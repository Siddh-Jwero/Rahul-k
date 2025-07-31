import { ClassLevel } from "./types";

import { hindi as hindi_c1 } from "./class-1/hindi";
import { math as math_c1 } from "./class-1/math";
import { english as english_c1 } from "./class-1/english";

import { hindi as hindi_c2 } from "./class-2/hindi";
import { math as math_c2 } from "./class-2/math";

import { hindi as hindi_c3 } from "./class-3/hindi";
import { math as math_c3 } from "./class-3/math";
import { evs as evs_c3 } from "./class-3/evs";
import { english as english_c3 } from "./class-3/english";
import { sanskrit as sanskrit_c3 } from "./class-3/sanskrit";

import { hindi as hindi_c4 } from "./class-4/hindi";
import { math as math_c4 } from "./class-4/math";

import { hindi as hindi_c5 } from "./class-5/hindi";
import { math as math_c5 } from "./class-5/math";
import { evs as evs_c5 } from "./class-5/evs";

export const curriculum: ClassLevel[] = [
  {
    id: 1,
    name: "Class 1",
    subjects: [hindi_c1, math_c1, english_c1],
  },
  {
    id: 2,
    name: "Class 2",
    subjects: [hindi_c2, math_c2],
  },
  {
    id: 3,
    name: "Class 3",
    subjects: [hindi_c3, math_c3, evs_c3, english_c3, sanskrit_c3],
  },
  {
    id: 4,
    name: "Class 4",
    subjects: [hindi_c4, math_c4],
  },
  {
    id: 5,
    name: "Class 5",
    subjects: [hindi_c5, math_c5, evs_c5],
  },
];