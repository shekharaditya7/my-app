import { useCallback, useEffect, useRef, useState } from "react";
import getIsMobileView from "../../utils/getIsMobileView";
import useWindowResize from "../../utils/hooks/useWindowResize";
import styles from "./index.module.scss";

function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}

function Drawer() {
  const canRef = useRef(null);
  const ctx = useRef(null);
  const wrapperRef = useRef(null);
  const [pressed, setPressed] = useState(false);
  const [size, setSize] = useState(15);
  const [color, setColor] = useState("#ff0000");
  const [screenWidth] = useWindowResize();

  useEffect(() => {
    ctx.current = canRef.current.getContext("2d");
    const width = wrapperRef.current.clientWidth;
    const height = wrapperRef.current.clientHeight;
    canRef.current.width = width;
    canRef.current.height = height;
    ctx.current.fillStyle = "rgb(255,255,255)";
    ctx.current.fillRect(0, 0, width, height);
    canRef.current.addEventListener("touchstart", function (event) {
      event.preventDefault();
    });
  }, [screenWidth]);

  useEffect(() => {
    if (pressed) {
      canRef.current.addEventListener("touchmove", handleMouseMove);
      canRef.current.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      canRef.current?.removeEventListener("touchmove", handleMouseMove);
      canRef.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [pressed]);

  const handleMouseMove = useCallback(
    (e) => {
      const { isMobileViewUtil } = getIsMobileView();
      let curX =
        ((e.touches && e.touches[0].clientX) || e.clientX || e.pageX) +
        (document.documentElement.scrollLeft
          ? document.documentElement.scrollLeft
          : document.body.scrollLeft);

      let curY =
        ((e.touches && e.touches[0].clientY) || e.clientY || e.pageY) +
        (document.documentElement.scrollTop
          ? document.documentElement.scrollTop
          : document.body.scrollTop);

      if (isMobileViewUtil) {
        curX -= 80;
        curY -= 72;
      } else {
        curX -= 172;
        curY -= 56;
      }

      function draw() {
        if (pressed) {
          ctx.current.fillStyle = color;
          ctx.current.beginPath();
          ctx.current.arc(curX, curY, size, degToRad(0), degToRad(360), false);
          ctx.current.fill();
          requestAnimationFrame(draw);
        }
      }
      draw();
    },
    [pressed]
  );

  function handleClear() {
    // ctx.current.fillStyle = "rgb(0,0,0)";
    // ctx.current.clearRect(0, 0, width, height);
    window.location.reload();
  }

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <canvas
        ref={canRef}
        onTouchStart={() => setPressed(true)}
        onTouchEnd={() => setPressed(false)}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        className={styles.canvas}
      >
        <p>Add suitable fallback here.</p>
      </canvas>
      <div className={styles.toolbar}>
        <div className={styles.drawerInput}>
          <input
            type="color"
            aria-label="select pen color"
            value={color}
            onInput={(event) => setColor(event.target.value)}
          />
          <input
            type="range"
            min="2"
            max="50"
            value={size}
            aria-label="select pen size"
            onInput={(event) => setSize(event.target.value)}
          ></input>
        </div>
        <button onClick={handleClear}>Clear canvas</button>
      </div>
    </div>
  );
}

export default Drawer;
