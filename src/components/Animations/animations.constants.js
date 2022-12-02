import AnimateSlide from "./AnimateSlide";

const FADE_IN = "Fade In-Out";
const SLIDE_IN = "Slide In-Out";

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
