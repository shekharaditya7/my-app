import styles from "./Header.module.scss";

export default function Header({ onMenuIconClick }) {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.menuIcon}
        src="/images/MenuIcon.png"
        alt="menu"
        onClick={onMenuIconClick}
      ></img>
      <div>Playground </div>
      <img
        className={styles.profileIcon}
        src="/icon192.jpeg"
        alt="profile"
      ></img>
    </div>
  );
}
