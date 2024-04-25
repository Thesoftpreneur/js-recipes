import { describe, test, it, expect } from "vitest";

describe("Orderind", () => {
    it("Ordering literals", () => {
        const myArray = [6, 2, 4, 3, 5, 1];

        expect(myArray.sort()).toEqual([1, 2, 3, 4, 5, 6]);
    });

        it("Reversing order", () => {
        const myArray = [6, 2, 4, 3, 5, 1];

        expect(myArray.reverse()).toEqual([1, 5, 3, 4, 2, 6]);
    });


    it("Splitting strings", () => {
        const myString = "1-2-3-4-5-6";

        expect(myString.split("-")).toEqual(["1", "2", "3", "4", "5", "6"]);
    });

        it("Ordering objets by name field", () => {
        const myArray = [
            { id: 2, name: "John"},
            { id: 1, name: "Matthew"}
        ];
        expect(myArray.sort((a, b) => {
            if (a.name < b.name) return 1;
            if (a.name > b.name) return -1;
            return 0;
        })).toEqual([
            { id: 1, name: "Matthew"},
            { id: 2, name: "John"}
        ]);
    });
});