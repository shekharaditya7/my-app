import Intro from "./Intro";
import Resume from "./Resume";

import styles from "./index.module.scss";
export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Intro />
      <Resume />
    </div>
  );
}
