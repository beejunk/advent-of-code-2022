import fs from "node:fs";
import path from "node:path";

export function mapInputToNumbers(inputText: string): number[] {
  return inputText.split("\n").map((str) => Number(str));
}

export function readInputFile(day: string): string {
  const fullInputPath = path.join(process.cwd(), "src", day, "input.txt");

  return fs.readFileSync(fullInputPath, "utf-8");
}
