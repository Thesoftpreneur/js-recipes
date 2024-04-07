import { describe, test, it, expect } from "vitest";

describe("Iterating over arrays", () => {
    it("Let Element of Array", () => {
        const expected = [1, 2, 3, 4, 5, 6];

        let result = [];

        for(let element of expected) {
            result.push(element);
        }

        expect(result).toEqual(expected);
    });

    it("ForEach method", () => {
        const expected = [1, 2, 3, 4, 5, 6];

        let result = [];

        expected.forEach(element => {
            result.push(element);
        });

        expect(result).toEqual(expected);
    });
});