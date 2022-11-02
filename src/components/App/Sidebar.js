import { useLayoutEffect, useRef, useState, useEffect } from "react";
import cx from "classnames";
import { Link, useLocation } from "react-router-dom";
import Instructions from "../Widgets/Instructions";
import getIsMobileView from "../../utils/getIsMobileView";
import useOutsideClick from "../../utils/hooks/useOutsideClick";
import NAV_ITEMS from "./sidebar.constants";
import INSTRUCTIONS from "../Widgets/instructions.contants";
import pages from "../../pages";

import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  const { pathname } = useLocation();
  const ref = useRef();
  const activePathKey = useRef("");

  const { isMobileViewOnlyUtil } = getIsMobileView();
  const [showSidebar, setShowSidebar] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  useLayoutEffect(() => {
    setShowSidebar(!isMobileViewOnlyUtil);
  }, [isMobileViewOnlyUtil]);

  useEffect(() => {
    Object.keys(pages).forEach((key) => {
      if (pages[key] === pathname) activePathKey.current = key;
    });

    if (
      pages[activePathKey.current] &&
      !localStorage.getItem(activePathKey.current)
    )
      setShowInstructions(true);
  }, [pathname]);

  useOutsideClick({
    ref,
    onOutsideClick: () => {
      if (isMobileViewOnlyUtil) setShowSidebar(false);
    },
  });

  const handleInstructionClose = () => {
    localStorage.setItem(activePathKey.current, "true");
    setShowInstructions(false);
  };

  return (
    <>
      {showSidebar ? (
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
              onClick={
                isMobileViewOnlyUtil ? () => setShowSidebar(false) : null
              }
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
      {showInstructions ? (
        <Instructions
          onClose={handleInstructionClose}
          {...INSTRUCTIONS[pages[activePathKey.current]]}
        />
      ) : null}
    </>
  );
}
