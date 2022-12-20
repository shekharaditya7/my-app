import NewIntro from "./NewIntro";
import NewResume from "./NewResume";

import styles from "./Intro.module.scss";
export default function Home() {
  return (
    <div className={styles.wrapper}>
      <NewIntro />
      <NewResume />
    </div>
  );
}
