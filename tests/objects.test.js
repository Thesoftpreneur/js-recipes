import { describe, test, it, expect } from "vitest";
import { createCircle, Circle, Video, createVideo, } from "../src/objects";

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

  it("Constructor function", () => {
    let radius1 = 4;
    let radius2 = 7;

    const circle1 = new Circle(radius1);
    const circle2 = new Circle(radius2);
    expect(circle1.radius).toBe(radius1);
    expect(circle2.radius).toBe(radius2);
    circle1.draw();
    circle2.draw();
  });

  it("Removing properties", () => {
    let radius = 4;

    const circle = new Circle(radius);
    expect(circle.radius).toBe(radius);
    delete circle.radius;
    expect(circle).haveOwnProperty("draw");
    expect(circle).not.haveOwnProperty("radius");

  });

  it("Using 'this' keyword for iteration using constructor", () => {
    let title = "Harry Potter";

    const video = new Video(title);

    video.showTags();

    // no assertions
    // output should be:
//     The tag of video Harry Potter is a
//     The tag of video Harry Potter is b
//     The tag of video Harry Potter is c

  });

  it("Using 'this' keyword for iteration using factory method", () => {
    let title = "Harry Potter";

    const video = createVideo(title);

    video.showTags();

    // no assertions
    // output should be:
//     The tag of video Harry Potter is d
//     The tag of video Harry Potter is e
//     The tag of video Harry Potter is f

  });

  it("Using 'this' keyword for iteration using factory method", () => {
    let title = "Harry Potter";

    const video = createVideo(title);

    video.showTagsAsOtherVideo();

    // no assertions
    // output should be:
//     The tag of video Willy Wonka is d
//     The tag of video Willy Wonka is e
//     The tag of video Willy Wonka is f

  });



});
