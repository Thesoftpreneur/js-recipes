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

        it("Concatenates with spread operator", () => {
        const first = [1, 2, 3];
        const second = [4, 5, 6];
        const expected = [1, 2, 3, 4, 5, 6];

        expect([...first, ...second]).toEqual(expected);
    });
});

describe("Copy arrays", () => {

    it("using slice method", () => {

        const myArray = [1, 2, 3, 4, 5, 6];

        const myArrayCopy = myArray.slice();

        expect(myArray).toEqual(myArrayCopy);
    });

    it("using spread opearator", () => {

        const myArray = [1, 2, 3, 4, 5, 6];

        const myArrayCopy = [...myArray];

        expect(myArray).toEqual(myArrayCopy);
    });
});