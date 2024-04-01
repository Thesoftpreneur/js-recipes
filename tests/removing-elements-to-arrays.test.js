import { describe, test, it, expect } from "vitest";

describe("Removing elements to the array", () => {
  it("should remove last element using pop() function", () => {
    // Arrange
    const numbers = [3, 4, 5];
    const expectedNumbers = [3, 4];
    const expectedLastNumber = 5;

    // Act

    const lastNumber = numbers.pop();

    console.log("Numbers:" + numbers);

    // Assert
    expect(numbers).toEqual(expectedNumbers);
    expect(lastNumber).toEqual(expectedLastNumber);
  });

  it("should remove first element using shift() function", () => {
    // Arrange
    const numbers = [3, 4, 5];
    const expectedNumbers = [4, 5];
    const expectedFirstNumber = 3;

    // Act
    const firstNumber = numbers.shift();

    // Assert
    expect(numbers).toEqual(expectedNumbers);
    expect(firstNumber).toEqual(expectedFirstNumber);
  });

  it("should remove elements using splice() function", () => {
      // Arrange
      const numbers = [1, 2, 100, 101, 102, 103, 3, 4, 5];
      const expectedNumbers = [1, 2, 3, 4, 5];

      // Act
      numbers.splice(2, 4); // remove 4 elements starting at index 4

      // Assert
      expect(numbers).toEqual(expectedNumbers);
  });
});
