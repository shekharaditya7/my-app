import pages from "./../../pages";

const INSTRUCTIONS = {
  [pages.HOME]: {
    title: "Hello there, welcome!",
    instructions: [
      "The website is mostly about the little things you can do as a Frontend Developer.",
      "It really amazes me when I think about what all you can do with JavaScript.",
    ],
  },
  [pages.DRAWER]: {
    title: "Just Paint",
    instructions: [
      "Choose you color, and start painting!",
      "You can also adjust the size.",
    ],
  },
  [pages.NESTED_NAV]: {
    title: "Nested Navigation",
    instructions: [
      "A simplistic use of recursion",
      "Takes JSON as an input in a predefined format.",
      "Shows the children as you keep clicking on particular nodes.",
    ],
  },
  [pages.USER_DEEPLINK]: {
    title: "Deeplink URLs",
    instructions: [
      "Solves the problem of Youtube URLs opening in - app / webviews on platforms such as LinkedIn, Instagram.",
      "Generates a URL that one can use to directly open the Youtube app, if installed.",
    ],
  },
  [pages.IMAGE_OPERATIONS]: {
    title: "Play with Images",
    instructions: [
      "Takes an image as input from gallery. camera.",
      "Showcases basic image operations one can do.",
    ],
  },
};

export default INSTRUCTIONS;
