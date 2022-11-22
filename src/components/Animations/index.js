import styles from "./index.module.scss";
import AnimateSlide from "./AnimateSlide";

export default function Animations() {
  return (
    <div className={styles.wrapper}>
      <AnimateSlide />
    </div>
  );
}
