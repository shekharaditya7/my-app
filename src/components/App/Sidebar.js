import { useLayoutEffect, useRef, useState } from "react";
import cx from "classnames";
import { Link, useLocation } from "react-router-dom";
import getIsMobileView from "../../utils/getIsMobileView";
import useOutsideClick from "../../utils/hooks/useOutsideClick";
import NAV_ITEMS from "./sidebar.constants";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  const { pathname } = useLocation();

  const ref = useRef();
  const { isMobileViewOnlyUtil } = getIsMobileView();
  const [showSidebar, setShowSidebar] = useState(false);

  useLayoutEffect(() => {
    setShowSidebar(!isMobileViewOnlyUtil);
  }, [isMobileViewOnlyUtil]);

  useOutsideClick({
    ref,
    onOutsideClick: () => {
      if (isMobileViewOnlyUtil) setShowSidebar(false);
    },
  });

  return showSidebar ? (
    <div
      className={cx(styles.sidebarWrapper, {
        [styles.animateSlide]: showSidebar,
        [styles.animateSlideOut]: !showSidebar,
      })}
      ref={ref}
    >
      <img
        className={styles.crossIcon}
        onClick={() => setShowSidebar(false)}
        alt={"cross"}
        src={"/images/sidebar/CrossIcon.png"}
      ></img>
      {NAV_ITEMS.map(({ url, logoSrc, alt, label }) => (
        <Link
          to={url}
          className={cx(styles.sidebarItem, {
            [styles.active]: url === pathname,
          })}
          key={url}
          onClick={isMobileViewOnlyUtil ? () => setShowSidebar(false) : null}
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
