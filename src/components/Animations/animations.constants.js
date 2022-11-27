import AnimateSlide from "./AnimateSlide";

const FADE_IN = "Fade In";
const SLIDE_IN = "Slide In";

const ANIMATIONS = [
  {
    label: FADE_IN,
    component: <AnimateSlide />,
  },
  {
    label: SLIDE_IN,
    component: null,
  },
];

export default ANIMATIONS;
