import AnimateFade from "./AnimateFade";
import AnimateSlide from "./AnimateSlide";

const FADE_IN = "Fade In-Out";
const SLIDE_IN = "Slide In-Out";

const ANIMATIONS = [
  {
    label: FADE_IN,
    component: <AnimateFade />,
  },
  {
    label: SLIDE_IN,
    component: <AnimateSlide />,
  },
];

export default ANIMATIONS;
