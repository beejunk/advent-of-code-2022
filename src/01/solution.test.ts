import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { partOne, partTwo } from "./solution.js";
import { readInputFile } from "../utils.js";

const exampleInput = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`;

const fullInput = readInputFile("01");

describe("Day 1", () => {
  describe("partOne()", () => {
    it("should return correct result for example input", () => {
      const actual = partOne(exampleInput);
      assert.equal(actual, 24000);
    });

    it("should return correct result for full input", () => {
      const actual = partOne(fullInput);
      assert.equal(actual, 70613);
    });
  });

  describe("partTwo()", () => {
    it("should return correct result for example input", () => {
      const actual = partTwo(exampleInput);
      assert.equal(actual, 45000);
    });

    it("should return correct result for full input", () => {
      const actual = partTwo(fullInput);
      assert.equal(actual, 205805);
    });
  });
});
