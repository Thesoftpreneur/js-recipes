import { describe, test, it, expect } from "vitest";

describe("Other array operations", () => {
    it("Joining arrays", () => {
        const myArray = [1, 2, 3, 4, 5, 6];

        expect(myArray.join("-")).toEqual("1-2-3-4-5-6");
    });

    it("Splitting strings", () => {
        const myString = "1-2-3-4-5-6";

        expect(myString.split("-")).toEqual(["1", "2", "3", "4", "5", "6"]);
    });
});