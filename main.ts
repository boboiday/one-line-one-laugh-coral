// One Line, One Laugh — u-coral-404-one-line-one-laugh-22f2c9f3
// The line is the whole entry: one funny line, 1-200 characters.
// Node 22. Reads nothing, prints the line, validates the length,
// writes it to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You hang 'Do Not Disturb' on your hotel door at 9 a.m. Housekeeping knocks at 9:05, at 9:10, and at 9:15 — with a note under the door: 'Sorry for disturbing you. Please disturb us back.'";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${LINE.length}`);
}

console.log(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
