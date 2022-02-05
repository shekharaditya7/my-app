import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";

function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}

function Drawer() {
  const canRef = useRef(null);
  const ctx = useRef(null);
  const [pressed, setPressed] = useState(false);
  const [size, setSize] = useState(30);
  const [color, setColor] = useState("#ff0000");
  const width = window.innerWidth;
  const height = window.innerHeight;

  useEffect(() => {
    ctx.current = canRef.current.getContext("2d");
    canRef.current.width = width;
    canRef.current.height = height;
    ctx.current.fillStyle = "rgb(0,0,0)";
    ctx.current.fillRect(0, 0, width, height);
  }, []);

  useEffect(() => {
    canRef.current.addEventListener("mousemove", handleMouseMove);
    return () => {
      canRef.current.removeEventListener("mousemove", handleMouseMove);
    };
  }, [pressed]);

  const handleMouseMove = useCallback(
    (e) => {
      e.preventDefault();
      let curX = window.Event
        ? e.pageX
        : e.clientX +
          (document.documentElement.scrollLeft
            ? document.documentElement.scrollLeft
            : document.body.scrollLeft);
      let curY = window.Event
        ? e.pageY
        : e.clientY +
          (document.documentElement.scrollTop
            ? document.documentElement.scrollTop
            : document.body.scrollTop);
      function draw() {
        if (pressed) {
          ctx.current.fillStyle = color;
          ctx.current.beginPath();
          ctx.current.arc(
            curX,
            curY - 85,
            size,
            degToRad(0),
            degToRad(360),
            false
          );
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
    <div className={styles.wrapper}>
      <div className={styles.toolbar}>
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
        <button onClick={handleClear}>Clear canvas</button>
      </div>

      <canvas
        ref={canRef}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
      >
        <p>Add suitable fallback here.</p>
      </canvas>
    </div>
  );
}

export default Drawer;
