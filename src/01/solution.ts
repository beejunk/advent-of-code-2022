import { flow, sum } from "lodash-es";

function getChunks(input: string) {
  return input
    .trim()
    .split("\n\n")
    .reduce<number[][]>((allChunks, currentChunkStr) => {
      allChunks.push(currentChunkStr.split("\n").map((str) => Number(str)));
      return allChunks;
    }, []);
}

function getMaxChunk(chunks: number[][]): number {
  return chunks.reduce((currentMax, currentChunk) => {
    const currentSum = sum(currentChunk);

    return currentSum > currentMax ? currentSum : currentMax;
  }, 0);
}

function mapChunksToSums(chunks: number[][]): number[] {
  return chunks.map((chunk) => sum(chunk));
}

function sortAscending(arr: number[]) {
  return [...arr].sort((a, b) => a - b);
}

function sumLastThreeNumbers(arr: number[]) {
  return sum(arr.slice(-3));
}

export const partOne = flow(getChunks, getMaxChunk);

export const partTwo = flow(
  getChunks,
  mapChunksToSums,
  sortAscending,
  sumLastThreeNumbers
);
