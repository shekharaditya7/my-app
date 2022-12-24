import { useEffect, useState } from "react";
import cx from "classnames";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import useWindowResize from "../../utils/hooks/useWindowResize";
import { TABS, ABOUT, EXPERIENCE, SKILLS } from "./resume.constants";

import styles from "./NewResume.module.scss";

export default function Resume() {
  const [activeTab, setActiveTab] = useState(ABOUT);
  const [screenWidth] = useWindowResize();

  const renderTabContent = () => {
    if (activeTab === ABOUT) return <About />;
    if (activeTab === EXPERIENCE) return <Experience />;
    if (activeTab === SKILLS) return <Skills />;
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
            onClick={() => setActiveTab(tabItem)}
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
