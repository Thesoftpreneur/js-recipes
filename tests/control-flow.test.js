import { describe, test, it, expect } from "vitest";
import {
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
