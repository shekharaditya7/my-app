import { useEffect } from "react";
import { useSearchParams, useNavigate, Navigate } from "react-router-dom";
import cx from "classnames";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import useWindowResize from "../../utils/hooks/useWindowResize";
import { TABS, ABOUT, EXPERIENCE, SKILLS } from "./resume.constants";

import styles from "./Resume.module.scss";

export default function Resume() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get("tab");
  const [screenWidth] = useWindowResize();

  const renderTabContent = () => {
    if (activeTab === ABOUT) return <About />;
    if (activeTab === EXPERIENCE) return <Experience />;
    if (activeTab === SKILLS) return <Skills />;
    return <Navigate to={`/?tab=${ABOUT}`} replace={true} />;
  };

  useEffect(() => {
    if (activeTab && screenWidth < 520) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [activeTab, screenWidth]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        {TABS.map((tabItem) => (
          <span
            key={tabItem}
            className={cx(styles.tabItem, {
              [styles.active]: tabItem === activeTab,
            })}
            onClick={
              tabItem !== activeTab
                ? () =>
                    navigate({
                      search: `?tab=${tabItem}`,
                    })
                : null
            }
          >
            {" "}
            {tabItem}
          </span>
        ))}
      </div>
      {renderTabContent()}
    </div>
  );
}
