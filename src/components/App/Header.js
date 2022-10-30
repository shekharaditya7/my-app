import styles from "./Header.module.scss";

export default function Header({ onMenuIconClick }) {
  return (
    <div className={styles.wrapper}>
      <div>Playground </div>
      <img
        className={styles.profileIcon}
        src="/icon192.jpeg"
        alt="profile"
      ></img>
    </div>
  );
}
