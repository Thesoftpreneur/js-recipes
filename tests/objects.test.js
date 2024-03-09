import { describe, test, it, expect } from "vitest";
import { createCircle } from "../src/objects";

describe("Creating objects", () => {

  it("Literal notation", () => {
    let radiusVariable = 1;
    let xVariable = 1;
    let yVariable = 1;

    const circle = {
      radius: 1,
      location: {
        x: 1,
        y: 1,
      },
      isVisible: true,
      draw: function () {
        console.log(
          "The draw method has been executed from the circle constant."
        );
      },
    };
    expect(circle.radius).toBe(radiusVariable);
    expect(circle.location.x).toBe(xVariable);
    expect(circle.location.y).toBe(yVariable);
    circle.draw();
  });

  it("Factory function", () => {
    let radius1 = 1;
    let radius2 = 5;

    const circle1 = createCircle(radius1);
    const circle2 = createCircle(radius2);
    expect(circle1.radius).toBe(radius1);
    expect(circle2.radius).toBe(radius2);
    circle1.draw();
    circle2.draw();
  });
});
