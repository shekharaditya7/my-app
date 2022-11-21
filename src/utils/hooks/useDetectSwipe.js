import { useEffect, useRef, useState } from "react";

const LEFT = "left";
const RIGHT = "right";

const DIRECTIONS = {
  LEFT,
  RIGHT,
};

export default function useDetectSwipe({
  elementRef,
  onSwipeLeft,
  onSwipeRight,
  swipeGap = 15,
}) {
  const [swipeDirection, setSwipeDirection] = useState(null);
  const touchStartPoint = useRef({});
  const touchEndPoint = useRef({});

  useEffect(() => {
    //handlers
    const handleStart = (e) => {
      setSwipeDirection(null);
      touchEndPoint.current = {};
      const x =
        ((e.touches && e.touches[0].clientX) || e.clientX || e.pageX) +
        (document.documentElement.scrollLeft
          ? document.documentElement.scrollLeft
          : document.body.scrollLeft);

      const y =
        ((e.touches && e.touches[0].clientY) || e.clientY || e.pageY) +
        (document.documentElement.scrollTop
          ? document.documentElement.scrollTop
          : document.body.scrollTop);
      touchStartPoint.current = { x, y };
    };

    const handleEnd = () => {
      if (touchEndPoint.current.x - touchStartPoint.current.x >= swipeGap)
        setSwipeDirection(DIRECTIONS.RIGHT);
      else if (touchStartPoint.current.x - touchEndPoint.current.x >= swipeGap)
        setSwipeDirection(DIRECTIONS.LEFT);
    };

    const handleMove = (e) => {
      const x =
        ((e.touches && e.touches[0].clientX) || e.clientX || e.pageX) +
        (document.documentElement.scrollLeft
          ? document.documentElement.scrollLeft
          : document.body.scrollLeft);

      const y =
        ((e.touches && e.touches[0].clientY) || e.clientY || e.pageY) +
        (document.documentElement.scrollTop
          ? document.documentElement.scrollTop
          : document.body.scrollTop);
      touchEndPoint.current = { x, y };
    };

    const element = elementRef?.current;

    if (element) {
      //Touch
      element.addEventListener("touchstart", handleStart);
      element.addEventListener("touchmove", handleMove);
      element.addEventListener("touchend", handleEnd);

      //Mouse
      element.addEventListener("mousedown", handleStart);
      element.addEventListener("mousemove", handleMove);
      element.addEventListener("mouseup", handleEnd);
    }
    return () => {
      element.removeEventListener("touchstart", handleStart);
      element.removeEventListener("touchmove", handleMove);
      element.removeEventListener("touchend", handleEnd);

      element.removeEventListener("mousedown", handleStart);
      element.removeEventListener("mousemove", handleMove);
      element.removeEventListener("mouseup", handleEnd);
    };
  }, [elementRef, swipeGap]);

  useEffect(() => {
    if (swipeDirection === DIRECTIONS.LEFT) {
      onSwipeLeft && onSwipeLeft();
    } else if (swipeDirection === DIRECTIONS.RIGHT) {
      onSwipeRight && onSwipeRight();
    }
  }, [swipeDirection]);

  return swipeDirection;
}
