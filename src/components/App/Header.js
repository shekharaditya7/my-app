import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <div>Playground </div>
      <img src="/icon192.jpeg" alt="adi" height={32} width={32}></img>
    </div>
  );
}
