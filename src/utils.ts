import fs from "node:fs";

export function parseInput(inputPath: string): number[] {
  const inputText = fs.readFileSync(inputPath, "utf-8");

  return inputText.split("\n").map((str) => Number(str));
}
