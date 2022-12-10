import { useState, useRef } from "react";
import cx from "classnames";
import styles from "./AnimateSlide.module.scss";

const total = 5;
const LEFT = "left";
const RIGHT = "right";

export default function AnimateFade() {
  const containerRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [fadeOutIndex, setFadeoutIndex] = useState(null);
  const swipeDirection = useRef("");
  const items = useRef([...new Array(total)]);

  const handleNextClick = () => {
    swipeDirection.current = LEFT;
    setFadeoutIndex(activeSlide);
    setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % total);
    }, 500);
  };

  const handlePrevClick = () => {
    swipeDirection.current = RIGHT;
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
        <div className={styles.slideInnerWrapper}>
          {items.current.map((item, index) => (
            <div
              ref={containerRef}
              className={cx(styles.item, {
                [styles.active]: index === activeSlide,
                [styles.fadeInRight]:
                  index === activeSlide && swipeDirection?.current === RIGHT,
                [styles.fadeOutRight]:
                  fadeOutIndex === index && swipeDirection?.current === RIGHT,
                [styles.fadeInLeft]:
                  index === activeSlide && swipeDirection?.current === LEFT,
                [styles.fadeOutLeft]:
                  fadeOutIndex === index && swipeDirection?.current === LEFT,
              })}
              key={index}
            >
              {index + 1}
            </div>
          ))}
        </div>

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
