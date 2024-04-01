import { describe, test, it, expect } from "vitest";

describe("Finding elements to the array", () => {

  it("should find an primitive element by value", () => {
    // Arrange
    const numbers = [1, 2, 3, 4, 5]
    // Act

    const index = numbers.indexOf(1);

    // Assert
    expect(index).toEqual(0);
    expect(numbers.includes(5)).equals(true);
  });

  it("should find an element by field value", () => {
    // Arrange
    const courses = [
      { id: 1, name: 'a'},
      { id: 2, name: 'b'},
    ];

    // Act
    const course = courses.find(function(course) {
      return course.name = 'a';
    });

    const index = courses.findIndex(function (course) {
      return (course.name = "a");
    });

    // Assert
    expect(course.id).toEqual(1);
    expect(index).toEqual(0);
  });

  it("should find an element by field value, using arrow functions", () => {
    // Arrange
    const courses = [
      { id: 1, name: "a" },
      { id: 2, name: "b" },
    ];

    // Act

    // applied arrow functions by:
    // * removing function keyword
    // * add fat arrow
    // * remove curly brackets
    // * remove return keyword
    // * only if single param, remove normal brackets
    const course = courses.find(course => (course.name = "a"));

    const index = courses.findIndex(course => course.name = "a");

    // Assert
    expect(course.id).toEqual(1);
    expect(index).toEqual(0);
  });
});
