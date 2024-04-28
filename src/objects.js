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

export function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log(
      "The draw method has been executed from the obejct created from factory method with radius=" +
        radius
    );
  };
}

export function Video(title) {
  this.title = title;
  this.tags = ['a', 'b', 'c'];
  this.showTags = function () {
    this.tags.forEach(element => {
      console.log("The tag of video " + this.title + " is " + element)
    });
  };
}

export function createVideo(title) {
  return {
    title, // short version of "title: title", only if key and value name is the same
    tags: ['d', 'e', 'f'],
    showTags() {
      this.tags.forEach(element => {
        console.log("The tag of video " + this.title + " is " + element)
      });
    },
    showTagsAsOtherVideo() {
        this.tags.forEach(
          function(element) {
            console.log("The tag of video " + this.title + " is " + element);
        }, 
        {title: "Willy Wonka"} // for callback methods we have to pass the "this" keyword, otherwise it would be undefined. 
        //Replace with "this" in order to have reference to the title field od Video object "Harry Potter"  
      );
    }
  };
}
