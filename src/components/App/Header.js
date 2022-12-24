import { useLocation } from "react-router-dom";
import ProfileModal from "./ProfileModal";
import NAV_ITEMS from "./sidebar.constants";
import styles from "./Header.module.scss";
import { useState } from "react";

export default function Header({ onInfoIconClick }) {
  const { pathname } = useLocation();
  const [showProfileModal, setShowProfileModal] = useState(false);
  const getActivePathTitle = () => {
    let title = "Home";
    NAV_ITEMS.forEach(({ url, label }) => {
      if (url === pathname) title = label;
    });
    return title;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.borderWrapper}>
        <span onClick={onInfoIconClick}>
          {getActivePathTitle()}
          <img
            src="/images/InfoIcon-white.webp"
            alt="info"
            className={styles.info}
          ></img>
        </span>
        <div className={styles.label} onClick={onInfoIconClick}>
          {getActivePathTitle()}
          <img
            src="/images/InfoIcon-white.webp"
            alt="info"
            className={styles.info}
          ></img>
        </div>
        <img
          className={styles.profileIcon}
          src="/images/intro/header.webp"
          alt="profile"
          onClick={() => setShowProfileModal(true)}
        ></img>
      </div>
      {showProfileModal ? (
        <ProfileModal onClose={() => setShowProfileModal(false)} />
      ) : null}
    </div>
  );
}
