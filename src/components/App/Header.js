import { useLocation } from "react-router-dom";
import NAV_ITEMS from "./sidebar.constants";
import styles from "./Header.module.scss";

export default function Header({ onMenuIconClick }) {
  const { pathname } = useLocation();
  const getActivePathTitle = () => {
    let title = "Home";
    NAV_ITEMS.forEach(({ url, label }) => {
      if (url === pathname) title = label;
    });
    return title;
  };

  return (
    <div className={styles.wrapper}>
      <span>
        {getActivePathTitle()}
        <img
          src="/images/InfoIcon-white.jpeg"
          alt="info"
          className={styles.info}
        ></img>
      </span>
      <div className={styles.label}>
        {getActivePathTitle()}
        <img
          src="/images/InfoIcon-white.jpeg"
          alt="info"
          className={styles.info}
        ></img>
      </div>
      <img
        className={styles.profileIcon}
        src="/icon192.jpeg"
        alt="profile"
      ></img>
    </div>
  );
}
