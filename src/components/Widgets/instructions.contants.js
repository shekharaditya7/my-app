import pages from "./../../pages";

const INSTRUCTIONS = {
  [pages.HOME]: {
    title: "Hello there, welcome!",
    instructions: [
      "The website is mostly about the little and big things you can do as a Web Developer.",
      "It really amazes me when I think about what all you can do with a few lines of code!",
    ],
  },
  [pages.DRAWER]: {
    title: "Just Paint",
    instructions: ["Choose you color, and start painting!"],
  },
  [pages.NESTED_NAV]: {
    title: "Nested Navigation",
    instructions: [
      "A simplistic use of recursion.",
      "Takes JSON as an input in a predefined format.",
      "Shows the children as you keep clicking on particular nodes.",
    ],
  },
  [pages.USER_DEEPLINK]: {
    title: "Deeplink URLs",
    instructions: [
      "Solves the problem of Youtube URLs on platforms such as LinkedIn, Instagram ; opening in the app itself.",
      "Generates a URL that one can use to directly open the Youtube app, if installed.",
    ],
  },
  [pages.MEDIA]: {
    title: "Play with Media",
    instructions: [
      "Takes an image/video as input from gallery or camera.",
      "And perform basic media operation like crop, trim.",
    ],
  },
  [pages.ANIMATIONS]: {
    title: "CSS Animations",
    instructions: [
      "Showcases basic and advanced CSS animations.",
      "Choose among several types of animations available!",
    ],
  },
  [pages.CHESS]: {
    title: "Chess",
    instructions: [
      "The classic chess implementation! Play with a friend of yours.",
    ],
    notes: ["The full implementation is currently in progress."],
  },
  [pages.CHAT]: {
    title: "Chat",
    instructions: [
      "Text Messaging Feature.",
      "Log in and then Generate Link to share that link with your friends to chat!",
    ],
    notes: [
      "The chat messages are volatile and we do not persist them during navigations or page reloads.",
      "We log-in only for a single session. A new session will be created if you open a new tab or window.",
      "The session will be terminated once you close the tab.",
      "In order to use Google log-in, make sure pop-ups are enabled.",
    ],
  },
  [pages.LOGIN]: {
    title: "Login",
    instructions: [
      "Log in to enable chat feature.",
      "You can also log-in using your Google account.",
    ],
    notes: [
      "We log-in only for a single session. A new session will be created if you open a new tab or window.",
      "The session will be terminated once you close the tab.",
      "In order to use Google log-in, make sure pop-ups are enabled.",
    ],
  },
  [pages.SIGNUP]: {
    title: "Sign up",
    instructions: [
      "Sign up to enable chat feature.",
      "You can also log-in using your Google account. In order to use Google log-in, make sure pop-ups are enabled.",
    ],
    notes: [
      "We log-in only for a single session. A new session will be created if you open a new tab or window.",
      "The session will be terminated once you close the tab.",
      "In order to use Google log-in, make sure pop-ups are enabled.",
    ],
  },
};

export default INSTRUCTIONS;
