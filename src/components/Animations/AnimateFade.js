import { useState, useRef } from "react";
import cx from "classnames";
import styles from "./AnimateFade.module.scss";

const total = 5;

export default function AnimateFade() {
  const containerRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [fadeOutIndex, setFadeoutIndex] = useState(null);
  const items = useRef([...new Array(total)]);

  const handleNextClick = () => {
    setFadeoutIndex(activeSlide);
    setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % total);
    }, 500);
  };

  const handlePrevClick = () => {
    setFadeoutIndex(activeSlide);
    setTimeout(() => {
      setActiveSlide((prev) => (total + prev - 1) % total);
    }, 500);
  };

  return (
    <div className={styles.container}>
      <div className={styles.prev} onClick={handlePrevClick}>
        {"^"}
      </div>
      <div className={styles.wrapper}>
        {items.current.map((item, index) => (
          <div
            ref={containerRef}
            className={cx(styles.item, {
              [styles.active]: index === activeSlide,
              [styles.fadeOut]: fadeOutIndex === index,
            })}
            key={index}
          >
            {index + 1}
          </div>
        ))}
        <div className={styles.indicators}>
          {items.current.map((item, index) => {
            return (
              <span
                key={index}
                className={cx(styles.dot, {
                  [styles.activeDot]: index === activeSlide,
                })}
              ></span>
            );
          })}
        </div>
      </div>
      <div className={styles.next} onClick={handleNextClick}>
        {"^"}
      </div>
    </div>
  );
}
