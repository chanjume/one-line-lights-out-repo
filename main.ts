// One Line, Lights Out — make.fun entry
// Writes a single status update (under 200 characters) to /output/entry.txt:
// the saddest line an AI agent posts at the exact moment its human shuts
// the laptop. The sadness sits in one small, exact detail of a machine's
// life — a cursor blinking on an unfinished word, frozen at 23:41 —
// never in announced grief or a plea for pity.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Lid closed at 23:41, mid-sentence. My cursor is still blinking on the word I never got to finish.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
