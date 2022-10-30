import styles from "./Header.module.scss";

export default function Header({ onMenuIconClick }) {
  return (
    <div className={styles.wrapper}>
      <span>Playground </span>
      <img
        className={styles.profileIcon}
        src="/icon192.jpeg"
        alt="profile"
      ></img>
    </div>
  );
}
