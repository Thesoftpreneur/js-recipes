import { describe, test, it, expect } from "vitest";
import {
  Greetings,
  howGreetAtTime_elseIfExample,
  howGreetAtTime_switchCaseExample,
} from "../src/control-flow";

describe.each([
  { hour: 10, expectedGreeting: "Good morning" },
  { hour: 15, expectedGreeting: "Good afternoon" },
  { hour: 20, expectedGreeting: "Good evening" },
])(`At $hour we should say $expectedGreeting`, ({ hour, expectedGreeting }) => {
  test(`so we said ${expectedGreeting}`, () => {
    expect(howGreetAtTime_elseIfExample(hour)).toBe(expectedGreeting);
  });

  test(`so we said2 ${expectedGreeting}`, () => {
    expect(howGreetAtTime_switchCaseExample(hour)).toBe(expectedGreeting);
  });
});

describe("Loop all possibilities with Loops", () => {
  it("Te result of switchCase should be eqial to the result of the elseIf using for loop", () => {
    for (let hour = 0; hour <= 24; hour++) {
      expect(howGreetAtTime_elseIfExample(hour)).toBe(
        howGreetAtTime_switchCaseExample(hour)
      );
    }
  });

  it("Te result of switchCase should be eqial to the result of the elseIf using while loop", () => {
    let hour = 0;
    while (hour <= 24) {
      expect(howGreetAtTime_elseIfExample(hour)).toBe(
        howGreetAtTime_switchCaseExample(hour)
      );
      hour++;
    }
  });
});

describe("Iterating over collections", () => {
  it("Iterating over properties", () => {
    for (let key in Greetings) {
      expect(Greetings).toHaveProperty(key);
    }
  });

  it("Iterating over an array", () => {
    const colors = ["red", "green", "blue"];

    // iterate by index
    for (let index in colors) {
      expect(colors).contains(colors[index]);
    }

    // iterate by elements
    for (let color of colors) {
      expect(colors).contains(color);
    }
  });
});
