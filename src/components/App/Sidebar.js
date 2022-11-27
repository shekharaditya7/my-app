import { useLayoutEffect, useState, useRef } from "react";
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

  const handleSideBarClose = () => {
    ref.current.classList.add(styles.animateSlideOut);
    setTimeout(() => setShowSidebar(false), 350);
  };

  useOutsideClick({
    ref,
    onOutsideClick: () => {
      if (isMobileViewOnlyUtil) handleSideBarClose();
    },
  });

  return (
    <>
      {showSidebar ? <div className={styles.overlay}></div> : null}
      {showSidebar ? (
        <div
          className={cx(styles.sidebarWrapper, {
            [styles.animateSlide]: showSidebar,
          })}
          ref={ref}
        >
          <img
            className={styles.crossIcon}
            onClick={handleSideBarClose}
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
              onClick={isMobileViewOnlyUtil ? handleSideBarClose : null}
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
      )}
    </>
  );
}
