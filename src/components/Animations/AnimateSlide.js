import { useState, useRef } from "react";
import cx from "classnames";
import styles from "./AnimateSlide.module.scss";

const total = 5;

export default function AnimateSlide() {
  const [activeSlide, setActiveSlide] = useState(0);
  const items = useRef([...new Array(total)]);

  const handleNextClick = () => {
    setActiveSlide((prev) => (prev + 1) % total);
  };

  const handlePrevClick = () => {
    setActiveSlide((prev) => (total + prev - 1) % total);
  };

  return (
    <div className={styles.container}>
      <div className={styles.prev} onClick={handlePrevClick}>
        {"^"}
      </div>
      <div className={styles.wrapper}>
        {items.current.map((item, index) => (
          <div
            className={cx(styles.item, {
              [styles.active]: index === activeSlide,
            })}
            key={item}
          >
            {index}
          </div>
        ))}
      </div>
      <div className={styles.next} onClick={handleNextClick}>
        {"^"}
      </div>
    </div>
  );
}
