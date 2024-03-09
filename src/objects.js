

export function createCircle(radius) {
  return {
    radius, // short version of "radius: radius", only if key and value name is the same
    draw() {
      console.log(
        "The draw method has been executed from the obejct created from factory method with radius=" +
          radius
      );
    },
  };
}
