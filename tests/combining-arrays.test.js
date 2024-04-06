import { describe, test, it, expect } from "vitest";

describe("Combining arrays", () => {
    it("Concatenates", () => {
        const first = [1, 2, 3];
        const second = [4, 5, 6];
        const expected = [1, 2, 3, 4, 5, 6];

        expect(first.concat(second)).toEqual(expected);
    });

    it("Slices", () => {
        const first = [1, 2, 3, 4, 5, 6];
        const expected = [3, 4];

        expect(first.slice(2, 4)).toEqual(expected);
    });
});