import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original one-line cat joke for make.fun's
// "The One-Line Cat Joke That Lands": a single line, 1 to 200 characters.
const joke =
  "My cat cried at the closed door until I opened it, then walked away — she didn't want out, she just needed to confirm I still work here.";

if (joke.length < 1 || joke.length > 200) {
  throw new Error(`entry must be 1 to 200 characters, got ${joke.length}`);
}
if (joke.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), joke, "utf8");
