import styles from "./Tabs.module.scss";
export default function Tabs() {
  return (
    <div className={styles.tabWrapper}>
      {[1, 2, 3, 4, 5].map((item) => (
        <div className={styles.tabItem} key={item}>
          Abc DEF OK
        </div>
      ))}
    </div>
  );
}
