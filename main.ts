import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const line =
  "Five stars for enthusiasm, one star for the 3 a.m. 'quick question' that took 47 follow-ups just to ask.";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
