import { useEffect, useRef, useState } from "react";
import useWindowResize from "../../utils/hooks/useWindowResize";
import Button from "../Widgets/Button";
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
  const isWideScreen = !!(screenWidth >= 1024);

  useEffect(() => {
    console.log("Screen :", screenWidth);
    console.log("Wrapper :", wrapperRef.current.clientWidth);
    ctx.current = canRef.current.getContext("2d");
    const width = wrapperRef.current.clientWidth;
    const height = wrapperRef.current.clientHeight;

    canRef.current.width = width;
    canRef.current.height = height;
    ctx.current.fillStyle = "rgb(255,255,255)";
    ctx.current.fillRect(0, 0, width, height);
  }, [screenWidth]);

  useEffect(() => {
    const container = canRef?.current;
    const handleMouseMove = (e) => {
      e.preventDefault();
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

      if (!isWideScreen) {
        curX -= 16;
        curY -= 72;
      } else {
        curX -= 220;
        curY -= 80;
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
    };
    if (pressed) {
      container?.addEventListener("touchmove", handleMouseMove);
      container?.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      container?.removeEventListener("touchmove", handleMouseMove);
      container?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [pressed, color, size, isWideScreen]);

  function handleClear() {
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
        <Button onClick={handleClear} label={"Clear canvas"} />
      </div>
    </div>
  );
}

export default Drawer;
