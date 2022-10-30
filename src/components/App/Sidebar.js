import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import getIsMobileView from "../../utils/getIsMobileView";
import useOutsideClick from "../../utils/hooks/useOutsideClick";
import NAV_ITEMS from "./sidebar.constants";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  const ref = useRef();
  const { isMobileViewUtil } = getIsMobileView();
  const [showSidebar, setShowSidebar] = useState(false);

  useLayoutEffect(() => {
    setShowSidebar(!isMobileViewUtil);
  }, [isMobileViewUtil]);

  useOutsideClick({
    ref,
    onOutsideClick: () => {
      if (isMobileViewUtil) setShowSidebar(false);
    },
  });
  return showSidebar ? (
    <div className={styles.sidebarWrapper} ref={ref}>
      {NAV_ITEMS.map(({ url, logoSrc, alt, label }) => (
        <Link
          to={url}
          className={styles.sidebarItem}
          key={url}
          onClick={() => setShowSidebar(false)}
        >
          <img alt={alt} src={logoSrc}></img>
          <div className={styles.label}> {label}</div>
        </Link>
      ))}
    </div>
  ) : (
    <div className={styles.menuIconWrapper}>
      <img
        className={styles.menuIcon}
        src="/images/MenuIcon.png"
        alt="menu"
        onClick={(event) => {
          event.stopPropagation();
          setShowSidebar((prev) => !prev);
        }}
      ></img>
    </div>
  );
}
