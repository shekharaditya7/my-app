import { useState, useEffect, useRef } from "react";

export default function useInViewport({
  elementRef,
  handleInViewport,
  oneTime = true,
}) {
  const [inViewport, setInViewport] = useState(false);
  const handlerExecuted = useRef(false);

  useEffect(() => {
    if (!elementRef) return;
    const inViewportUtil = () => {
      const rect = elementRef.current.getBoundingClientRect();
      const inViewport =
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth);

      setInViewport(inViewport);
    };
    inViewportUtil();
    document.addEventListener("scroll", inViewportUtil, { passive: true });
    return () => {
      document.removeEventListener("scroll", inViewportUtil);
    };
  }, [elementRef]);

  useEffect(() => {
    if (inViewport) {
      if (handlerExecuted.current === false) {
        handlerExecuted.current = true;
        handleInViewport && handleInViewport();
      } else if (oneTime === false) {
        handleInViewport && handleInViewport();
      }
    }
  }, [inViewport, handleInViewport, oneTime]);

  return inViewport;
}
