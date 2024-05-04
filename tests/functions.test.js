import { describe, test, it, expect } from "vitest";
import { sumWithRestOpeartor, sumWithDefaultArguments } from "../src/intro";
import { createPerson } from "../src/objects"

describe("sum", () => {
    it("add all the arguemnts idenpendently how much arguments are provided because of the rest operator", () => {
        expect(sumWithRestOpeartor(5, 6, 11)).toBe(22);
        expect(sumWithRestOpeartor(5, 6, 11, 1, 2)).toBe(25);
    });

    it("add all the arguemnts idenpendently how much arguments are provided because of the default arguments", () => {
        expect(sumWithDefaultArguments(5, 6, 11)).toBe(22);
        expect(sumWithDefaultArguments(5, 6, 11, 1, 2)).toBe(25);
    });
});

describe("Getters and setters", () => {
    it("Sets and gets data from person const", () => {
        const person = createPerson();
        // default value
        expect(person.fullName).toBe("John Smith");
        person.fullName = "James Bond";
        expect(person.firstName).toBe("James");
        expect(person.lastName).toBe("Bond");
        expect(person.fullName).toBe("James Bond");
    }) 
})