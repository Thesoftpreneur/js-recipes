import { describe, test, it, expect } from "vitest";

describe.only("Adding elements to the array", () => {
  test.only("should append element using push() function", () => {
    // Arrange
    const numbers = [3, 4];
    const expectedNumbers = [3, 4, 5];

    // Act

    numbers.push(5);

    console.log("Numbers:" + numbers);

    // Assert
    expect(numbers).toEqual(expectedNumbers);
  });

    it("should prepend element using unshift() function", () => {
      // Arrange
      const numbers = [3, 4];
      const expectedNumbers = [2, 3, 4];

      // Act
      numbers.unshift(2);

      console.log("Numbers:" + numbers);

      // Assert
      expect(numbers).toEqual(expectedNumbers);
    });

    it("should insert elements using splice() function", () => {
        // Arrange
        const numbers = [1, 2, 5];
        const expectedNumbers = [1, 2, 3, 4, 5];

        // Act
        numbers.splice(2, 0, 3, 4); // insert elements 3 and 4 at index 2 removing 0 elements

        // Assert
        expect(numbers).toEqual(expectedNumbers);
    });

    it("should insert elements using splice() function", () => {
        // Arrange
        const numbers = [1, 2, 101, 102, 103, 5];
        const expectedNumbers = [1, 2, 3, 4, 5];

        // Act
        numbers.splice(2, 3, 3, 4); // insert elements 3 and 4 at index 2 removing 3 elements

        // Assert
        expect(numbers).toEqual(expectedNumbers);
    });
});
