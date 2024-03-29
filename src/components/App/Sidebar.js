import { useLayoutEffect, useState, useRef } from "react";
import cx from "classnames";
import { Link, useLocation } from "react-router-dom";
import useOutsideClick from "../../utils/hooks/useOutsideClick";
import useWindowResize from "../../utils/hooks/useWindowResize";
import NAV_ITEMS from "./sidebar.constants";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  const { pathname } = useLocation();
  const ref = useRef();

  const [screenWidth] = useWindowResize();
  const isWideScreen = !!(screenWidth >= 1024);
  const [showSidebar, setShowSidebar] = useState(false);

  useLayoutEffect(() => {
    setShowSidebar(isWideScreen);
  }, [isWideScreen]);

  const handleSideBarClose = () => {
    ref.current.classList.add(styles.animateSlideOut);
    setTimeout(() => {
      setShowSidebar(false);
    }, 350);
  };

  useOutsideClick({
    ref,
    onOutsideClick: () => {
      if (!isWideScreen) handleSideBarClose();
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
            src={"/images/sidebar/CrossIcon.webp"}
          ></img>
          <div className={styles.navListWrapper}>
            {NAV_ITEMS.map(({ url, logoSrc, alt, label }) =>
              logoSrc ? (
                <Link
                  to={url}
                  className={cx(styles.sidebarItem, {
                    [styles.active]: url === pathname,
                  })}
                  key={url}
                  onClick={!isWideScreen ? handleSideBarClose : null}
                >
                  <img alt={alt} src={logoSrc}></img>
                  <div className={styles.label}> {label}</div>
                </Link>
              ) : null
            )}
          </div>
        </div>
      ) : (
        <div className={styles.menuIconWrapper}>
          <img
            className={styles.menuIcon}
            src="/images/MenuIcon.webp"
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
